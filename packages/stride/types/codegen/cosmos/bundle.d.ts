import * as _45 from "./app/runtime/v1alpha1/module";
import * as _46 from "./app/v1alpha1/config";
import * as _47 from "./app/v1alpha1/module";
import * as _48 from "./app/v1alpha1/query";
import * as _49 from "./auth/module/v1/module";
import * as _50 from "./auth/v1beta1/auth";
import * as _51 from "./auth/v1beta1/genesis";
import * as _52 from "./auth/v1beta1/query";
import * as _53 from "./auth/v1beta1/tx";
import * as _54 from "./authz/module/v1/module";
import * as _55 from "./authz/v1beta1/authz";
import * as _56 from "./authz/v1beta1/event";
import * as _57 from "./authz/v1beta1/genesis";
import * as _58 from "./authz/v1beta1/query";
import * as _59 from "./authz/v1beta1/tx";
import * as _60 from "./autocli/v1/options";
import * as _61 from "./autocli/v1/query";
import * as _62 from "./bank/module/v1/module";
import * as _63 from "./bank/v1beta1/authz";
import * as _64 from "./bank/v1beta1/bank";
import * as _65 from "./bank/v1beta1/genesis";
import * as _66 from "./bank/v1beta1/query";
import * as _67 from "./bank/v1beta1/tx";
import * as _68 from "./base/abci/v1beta1/abci";
import * as _69 from "./base/kv/v1beta1/kv";
import * as _70 from "./base/node/v1beta1/query";
import * as _71 from "./base/query/v1beta1/pagination";
import * as _72 from "./base/reflection/v1beta1/reflection";
import * as _73 from "./base/reflection/v2alpha1/reflection";
import * as _74 from "./base/snapshots/v1beta1/snapshot";
import * as _75 from "./base/store/v1beta1/commit_info";
import * as _76 from "./base/store/v1beta1/listening";
import * as _77 from "./base/tendermint/v1beta1/query";
import * as _78 from "./base/tendermint/v1beta1/types";
import * as _79 from "./base/v1beta1/coin";
import * as _80 from "./capability/module/v1/module";
import * as _81 from "./capability/v1beta1/capability";
import * as _82 from "./capability/v1beta1/genesis";
import * as _83 from "./consensus/module/v1/module";
import * as _84 from "./consensus/v1/query";
import * as _85 from "./consensus/v1/tx";
import * as _86 from "./crisis/module/v1/module";
import * as _87 from "./crisis/v1beta1/genesis";
import * as _88 from "./crisis/v1beta1/tx";
import * as _89 from "./crypto/ed25519/keys";
import * as _90 from "./crypto/hd/v1/hd";
import * as _91 from "./crypto/keyring/v1/record";
import * as _92 from "./crypto/multisig/keys";
import * as _93 from "./crypto/secp256k1/keys";
import * as _94 from "./crypto/secp256r1/keys";
import * as _95 from "./distribution/module/v1/module";
import * as _96 from "./distribution/v1beta1/distribution";
import * as _97 from "./distribution/v1beta1/genesis";
import * as _98 from "./distribution/v1beta1/query";
import * as _99 from "./distribution/v1beta1/tx";
import * as _100 from "./evidence/module/v1/module";
import * as _101 from "./evidence/v1beta1/evidence";
import * as _102 from "./evidence/v1beta1/genesis";
import * as _103 from "./evidence/v1beta1/query";
import * as _104 from "./evidence/v1beta1/tx";
import * as _105 from "./feegrant/module/v1/module";
import * as _106 from "./feegrant/v1beta1/feegrant";
import * as _107 from "./feegrant/v1beta1/genesis";
import * as _108 from "./feegrant/v1beta1/query";
import * as _109 from "./feegrant/v1beta1/tx";
import * as _110 from "./genutil/module/v1/module";
import * as _111 from "./genutil/v1beta1/genesis";
import * as _112 from "./gov/module/v1/module";
import * as _113 from "./gov/v1/genesis";
import * as _114 from "./gov/v1/gov";
import * as _115 from "./gov/v1/query";
import * as _116 from "./gov/v1/tx";
import * as _117 from "./gov/v1beta1/genesis";
import * as _118 from "./gov/v1beta1/gov";
import * as _119 from "./gov/v1beta1/query";
import * as _120 from "./gov/v1beta1/tx";
import * as _121 from "./group/module/v1/module";
import * as _122 from "./group/v1/events";
import * as _123 from "./group/v1/genesis";
import * as _124 from "./group/v1/query";
import * as _125 from "./group/v1/tx";
import * as _126 from "./group/v1/types";
import * as _127 from "./mint/module/v1/module";
import * as _128 from "./mint/v1beta1/genesis";
import * as _129 from "./mint/v1beta1/mint";
import * as _130 from "./mint/v1beta1/query";
import * as _131 from "./mint/v1beta1/tx";
import * as _133 from "./nft/module/v1/module";
import * as _134 from "./nft/v1beta1/event";
import * as _135 from "./nft/v1beta1/genesis";
import * as _136 from "./nft/v1beta1/nft";
import * as _137 from "./nft/v1beta1/query";
import * as _138 from "./nft/v1beta1/tx";
import * as _139 from "./orm/module/v1alpha1/module";
import * as _140 from "./orm/query/v1alpha1/query";
import * as _141 from "./orm/v1/orm";
import * as _142 from "./orm/v1alpha1/schema";
import * as _143 from "./params/module/v1/module";
import * as _144 from "./params/v1beta1/params";
import * as _145 from "./params/v1beta1/query";
import * as _147 from "./reflection/v1/reflection";
import * as _148 from "./slashing/module/v1/module";
import * as _149 from "./slashing/v1beta1/genesis";
import * as _150 from "./slashing/v1beta1/query";
import * as _151 from "./slashing/v1beta1/slashing";
import * as _152 from "./slashing/v1beta1/tx";
import * as _153 from "./staking/module/v1/module";
import * as _154 from "./staking/v1beta1/authz";
import * as _155 from "./staking/v1beta1/genesis";
import * as _156 from "./staking/v1beta1/query";
import * as _157 from "./staking/v1beta1/staking";
import * as _158 from "./staking/v1beta1/tx";
import * as _159 from "./tx/config/v1/config";
import * as _160 from "./tx/signing/v1beta1/signing";
import * as _161 from "./tx/v1beta1/service";
import * as _162 from "./tx/v1beta1/tx";
import * as _163 from "./upgrade/module/v1/module";
import * as _164 from "./upgrade/v1beta1/query";
import * as _165 from "./upgrade/v1beta1/tx";
import * as _166 from "./upgrade/v1beta1/upgrade";
import * as _167 from "./vesting/module/v1/module";
import * as _168 from "./vesting/v1beta1/tx";
import * as _169 from "./vesting/v1beta1/vesting";
import * as _248 from "./auth/v1beta1/query.lcd";
import * as _249 from "./authz/v1beta1/query.lcd";
import * as _250 from "./bank/v1beta1/query.lcd";
import * as _251 from "./base/node/v1beta1/query.lcd";
import * as _252 from "./base/tendermint/v1beta1/query.lcd";
import * as _253 from "./consensus/v1/query.lcd";
import * as _254 from "./distribution/v1beta1/query.lcd";
import * as _255 from "./evidence/v1beta1/query.lcd";
import * as _256 from "./feegrant/v1beta1/query.lcd";
import * as _257 from "./gov/v1/query.lcd";
import * as _258 from "./gov/v1beta1/query.lcd";
import * as _259 from "./group/v1/query.lcd";
import * as _260 from "./mint/v1beta1/query.lcd";
import * as _261 from "./nft/v1beta1/query.lcd";
import * as _262 from "./params/v1beta1/query.lcd";
import * as _263 from "./slashing/v1beta1/query.lcd";
import * as _264 from "./staking/v1beta1/query.lcd";
import * as _265 from "./tx/v1beta1/service.lcd";
import * as _266 from "./upgrade/v1beta1/query.lcd";
import * as _267 from "./app/v1alpha1/query.rpc.Query";
import * as _268 from "./auth/v1beta1/query.rpc.Query";
import * as _269 from "./authz/v1beta1/query.rpc.Query";
import * as _270 from "./autocli/v1/query.rpc.Query";
import * as _271 from "./bank/v1beta1/query.rpc.Query";
import * as _272 from "./base/node/v1beta1/query.rpc.Service";
import * as _273 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _274 from "./consensus/v1/query.rpc.Query";
import * as _275 from "./distribution/v1beta1/query.rpc.Query";
import * as _276 from "./evidence/v1beta1/query.rpc.Query";
import * as _277 from "./feegrant/v1beta1/query.rpc.Query";
import * as _278 from "./gov/v1/query.rpc.Query";
import * as _279 from "./gov/v1beta1/query.rpc.Query";
import * as _280 from "./group/v1/query.rpc.Query";
import * as _281 from "./mint/v1beta1/query.rpc.Query";
import * as _282 from "./nft/v1beta1/query.rpc.Query";
import * as _283 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _284 from "./params/v1beta1/query.rpc.Query";
import * as _285 from "./slashing/v1beta1/query.rpc.Query";
import * as _286 from "./staking/v1beta1/query.rpc.Query";
import * as _287 from "./tx/v1beta1/service.rpc.Service";
import * as _288 from "./upgrade/v1beta1/query.rpc.Query";
import * as _289 from "./auth/v1beta1/tx.rpc.msg";
import * as _290 from "./authz/v1beta1/tx.rpc.msg";
import * as _291 from "./bank/v1beta1/tx.rpc.msg";
import * as _292 from "./consensus/v1/tx.rpc.msg";
import * as _293 from "./crisis/v1beta1/tx.rpc.msg";
import * as _294 from "./distribution/v1beta1/tx.rpc.msg";
import * as _295 from "./evidence/v1beta1/tx.rpc.msg";
import * as _296 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _297 from "./gov/v1/tx.rpc.msg";
import * as _298 from "./gov/v1beta1/tx.rpc.msg";
import * as _299 from "./group/v1/tx.rpc.msg";
import * as _300 from "./mint/v1beta1/tx.rpc.msg";
import * as _301 from "./nft/v1beta1/tx.rpc.msg";
import * as _302 from "./slashing/v1beta1/tx.rpc.msg";
import * as _303 from "./staking/v1beta1/tx.rpc.msg";
import * as _304 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _305 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
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
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _45.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.StoreKeyConfig;
                    fromPartial(object: Partial<_45.StoreKeyConfig>): _45.StoreKeyConfig;
                    fromAmino(object: _45.StoreKeyConfigAmino): _45.StoreKeyConfig;
                    toAmino(message: _45.StoreKeyConfig): _45.StoreKeyConfigAmino;
                    fromAminoMsg(object: _45.StoreKeyConfigAminoMsg): _45.StoreKeyConfig;
                    toAminoMsg(message: _45.StoreKeyConfig): _45.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _45.StoreKeyConfigProtoMsg): _45.StoreKeyConfig;
                    toProto(message: _45.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _45.StoreKeyConfig): _45.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _48.QueryConfigRequest): Promise<_48.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _48.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryConfigRequest;
                fromPartial(_: Partial<_48.QueryConfigRequest>): _48.QueryConfigRequest;
                fromAmino(_: _48.QueryConfigRequestAmino): _48.QueryConfigRequest;
                toAmino(_: _48.QueryConfigRequest): _48.QueryConfigRequestAmino;
                fromAminoMsg(object: _48.QueryConfigRequestAminoMsg): _48.QueryConfigRequest;
                toAminoMsg(message: _48.QueryConfigRequest): _48.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _48.QueryConfigRequestProtoMsg): _48.QueryConfigRequest;
                toProto(message: _48.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _48.QueryConfigRequest): _48.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _48.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryConfigResponse;
                fromPartial(object: Partial<_48.QueryConfigResponse>): _48.QueryConfigResponse;
                fromAmino(object: _48.QueryConfigResponseAmino): _48.QueryConfigResponse;
                toAmino(message: _48.QueryConfigResponse): _48.QueryConfigResponseAmino;
                fromAminoMsg(object: _48.QueryConfigResponseAminoMsg): _48.QueryConfigResponse;
                toAminoMsg(message: _48.QueryConfigResponse): _48.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _48.QueryConfigResponseProtoMsg): _48.QueryConfigResponse;
                toProto(message: _48.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _48.QueryConfigResponse): _48.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _47.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ModuleDescriptor;
                fromPartial(object: Partial<_47.ModuleDescriptor>): _47.ModuleDescriptor;
                fromAmino(object: _47.ModuleDescriptorAmino): _47.ModuleDescriptor;
                toAmino(message: _47.ModuleDescriptor): _47.ModuleDescriptorAmino;
                fromAminoMsg(object: _47.ModuleDescriptorAminoMsg): _47.ModuleDescriptor;
                toAminoMsg(message: _47.ModuleDescriptor): _47.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _47.ModuleDescriptorProtoMsg): _47.ModuleDescriptor;
                toProto(message: _47.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _47.ModuleDescriptor): _47.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _47.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.PackageReference;
                fromPartial(object: Partial<_47.PackageReference>): _47.PackageReference;
                fromAmino(object: _47.PackageReferenceAmino): _47.PackageReference;
                toAmino(message: _47.PackageReference): _47.PackageReferenceAmino;
                fromAminoMsg(object: _47.PackageReferenceAminoMsg): _47.PackageReference;
                toAminoMsg(message: _47.PackageReference): _47.PackageReferenceAminoMsg;
                fromProtoMsg(message: _47.PackageReferenceProtoMsg): _47.PackageReference;
                toProto(message: _47.PackageReference): Uint8Array;
                toProtoMsg(message: _47.PackageReference): _47.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _47.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MigrateFromInfo;
                fromPartial(object: Partial<_47.MigrateFromInfo>): _47.MigrateFromInfo;
                fromAmino(object: _47.MigrateFromInfoAmino): _47.MigrateFromInfo;
                toAmino(message: _47.MigrateFromInfo): _47.MigrateFromInfoAmino;
                fromAminoMsg(object: _47.MigrateFromInfoAminoMsg): _47.MigrateFromInfo;
                toAminoMsg(message: _47.MigrateFromInfo): _47.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _47.MigrateFromInfoProtoMsg): _47.MigrateFromInfo;
                toProto(message: _47.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _47.MigrateFromInfo): _47.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _46.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Config;
                fromPartial(object: Partial<_46.Config>): _46.Config;
                fromAmino(object: _46.ConfigAmino): _46.Config;
                toAmino(message: _46.Config): _46.ConfigAmino;
                fromAminoMsg(object: _46.ConfigAminoMsg): _46.Config;
                toAminoMsg(message: _46.Config): _46.ConfigAminoMsg;
                fromProtoMsg(message: _46.ConfigProtoMsg): _46.Config;
                toProto(message: _46.Config): Uint8Array;
                toProtoMsg(message: _46.Config): _46.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _46.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ModuleConfig;
                fromPartial(object: Partial<_46.ModuleConfig>): _46.ModuleConfig;
                fromAmino(object: _46.ModuleConfigAmino): _46.ModuleConfig;
                toAmino(message: _46.ModuleConfig): _46.ModuleConfigAmino;
                fromAminoMsg(object: _46.ModuleConfigAminoMsg): _46.ModuleConfig;
                toAminoMsg(message: _46.ModuleConfig): _46.ModuleConfigAminoMsg;
                fromProtoMsg(message: _46.ModuleConfigProtoMsg): _46.ModuleConfig;
                toProto(message: _46.ModuleConfig): Uint8Array;
                toProtoMsg(message: _46.ModuleConfig): _46.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _46.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.GolangBinding;
                fromPartial(object: Partial<_46.GolangBinding>): _46.GolangBinding;
                fromAmino(object: _46.GolangBindingAmino): _46.GolangBinding;
                toAmino(message: _46.GolangBinding): _46.GolangBindingAmino;
                fromAminoMsg(object: _46.GolangBindingAminoMsg): _46.GolangBinding;
                toAminoMsg(message: _46.GolangBinding): _46.GolangBindingAminoMsg;
                fromProtoMsg(message: _46.GolangBindingProtoMsg): _46.GolangBinding;
                toProto(message: _46.GolangBinding): Uint8Array;
                toProtoMsg(message: _46.GolangBinding): _46.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
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
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _49.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.ModuleAccountPermission;
                    fromPartial(object: Partial<_49.ModuleAccountPermission>): _49.ModuleAccountPermission;
                    fromAmino(object: _49.ModuleAccountPermissionAmino): _49.ModuleAccountPermission;
                    toAmino(message: _49.ModuleAccountPermission): _49.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _49.ModuleAccountPermissionAminoMsg): _49.ModuleAccountPermission;
                    toAminoMsg(message: _49.ModuleAccountPermission): _49.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _49.ModuleAccountPermissionProtoMsg): _49.ModuleAccountPermission;
                    toProto(message: _49.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _49.ModuleAccountPermission): _49.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _289.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _52.QueryAccountsRequest): Promise<_52.QueryAccountsResponse>;
                account(request: _52.QueryAccountRequest): Promise<_52.QueryAccountResponse>;
                accountAddressByID(request: _52.QueryAccountAddressByIDRequest): Promise<_52.QueryAccountAddressByIDResponse>;
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                moduleAccounts(request?: _52.QueryModuleAccountsRequest): Promise<_52.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _52.QueryModuleAccountByNameRequest): Promise<_52.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _52.Bech32PrefixRequest): Promise<_52.Bech32PrefixResponse>;
                addressBytesToString(request: _52.AddressBytesToStringRequest): Promise<_52.AddressBytesToStringResponse>;
                addressStringToBytes(request: _52.AddressStringToBytesRequest): Promise<_52.AddressStringToBytesResponse>;
                accountInfo(request: _52.QueryAccountInfoRequest): Promise<_52.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _248.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _53.MsgUpdateParams) => _53.MsgUpdateParamsAmino;
                    fromAmino: (object: _53.MsgUpdateParamsAmino) => _53.MsgUpdateParams;
                };
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
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _52.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAccountsRequest;
                fromPartial(object: Partial<_52.QueryAccountsRequest>): _52.QueryAccountsRequest;
                fromAmino(object: _52.QueryAccountsRequestAmino): _52.QueryAccountsRequest;
                toAmino(message: _52.QueryAccountsRequest): _52.QueryAccountsRequestAmino;
                fromAminoMsg(object: _52.QueryAccountsRequestAminoMsg): _52.QueryAccountsRequest;
                toAminoMsg(message: _52.QueryAccountsRequest): _52.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAccountsRequestProtoMsg): _52.QueryAccountsRequest;
                toProto(message: _52.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAccountsRequest): _52.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _52.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAccountsResponse;
                fromPartial(object: Partial<_52.QueryAccountsResponse>): _52.QueryAccountsResponse;
                fromAmino(object: _52.QueryAccountsResponseAmino): _52.QueryAccountsResponse;
                toAmino(message: _52.QueryAccountsResponse): _52.QueryAccountsResponseAmino;
                fromAminoMsg(object: _52.QueryAccountsResponseAminoMsg): _52.QueryAccountsResponse;
                toAminoMsg(message: _52.QueryAccountsResponse): _52.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAccountsResponseProtoMsg): _52.QueryAccountsResponse;
                toProto(message: _52.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAccountsResponse): _52.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _52.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAccountRequest;
                fromPartial(object: Partial<_52.QueryAccountRequest>): _52.QueryAccountRequest;
                fromAmino(object: _52.QueryAccountRequestAmino): _52.QueryAccountRequest;
                toAmino(message: _52.QueryAccountRequest): _52.QueryAccountRequestAmino;
                fromAminoMsg(object: _52.QueryAccountRequestAminoMsg): _52.QueryAccountRequest;
                toAminoMsg(message: _52.QueryAccountRequest): _52.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAccountRequestProtoMsg): _52.QueryAccountRequest;
                toProto(message: _52.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAccountRequest): _52.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _52.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAccountResponse;
                fromPartial(object: Partial<_52.QueryAccountResponse>): _52.QueryAccountResponse;
                fromAmino(object: _52.QueryAccountResponseAmino): _52.QueryAccountResponse;
                toAmino(message: _52.QueryAccountResponse): _52.QueryAccountResponseAmino;
                fromAminoMsg(object: _52.QueryAccountResponseAminoMsg): _52.QueryAccountResponse;
                toAminoMsg(message: _52.QueryAccountResponse): _52.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAccountResponseProtoMsg): _52.QueryAccountResponse;
                toProto(message: _52.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAccountResponse): _52.QueryAccountResponseProtoMsg;
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
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _52.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_52.QueryModuleAccountsRequest>): _52.QueryModuleAccountsRequest;
                fromAmino(_: _52.QueryModuleAccountsRequestAmino): _52.QueryModuleAccountsRequest;
                toAmino(_: _52.QueryModuleAccountsRequest): _52.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _52.QueryModuleAccountsRequestAminoMsg): _52.QueryModuleAccountsRequest;
                toAminoMsg(message: _52.QueryModuleAccountsRequest): _52.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryModuleAccountsRequestProtoMsg): _52.QueryModuleAccountsRequest;
                toProto(message: _52.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryModuleAccountsRequest): _52.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _52.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_52.QueryModuleAccountsResponse>): _52.QueryModuleAccountsResponse;
                fromAmino(object: _52.QueryModuleAccountsResponseAmino): _52.QueryModuleAccountsResponse;
                toAmino(message: _52.QueryModuleAccountsResponse): _52.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _52.QueryModuleAccountsResponseAminoMsg): _52.QueryModuleAccountsResponse;
                toAminoMsg(message: _52.QueryModuleAccountsResponse): _52.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryModuleAccountsResponseProtoMsg): _52.QueryModuleAccountsResponse;
                toProto(message: _52.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryModuleAccountsResponse): _52.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _52.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_52.QueryModuleAccountByNameRequest>): _52.QueryModuleAccountByNameRequest;
                fromAmino(object: _52.QueryModuleAccountByNameRequestAmino): _52.QueryModuleAccountByNameRequest;
                toAmino(message: _52.QueryModuleAccountByNameRequest): _52.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _52.QueryModuleAccountByNameRequestAminoMsg): _52.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _52.QueryModuleAccountByNameRequest): _52.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _52.QueryModuleAccountByNameRequestProtoMsg): _52.QueryModuleAccountByNameRequest;
                toProto(message: _52.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _52.QueryModuleAccountByNameRequest): _52.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _52.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_52.QueryModuleAccountByNameResponse>): _52.QueryModuleAccountByNameResponse;
                fromAmino(object: _52.QueryModuleAccountByNameResponseAmino): _52.QueryModuleAccountByNameResponse;
                toAmino(message: _52.QueryModuleAccountByNameResponse): _52.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _52.QueryModuleAccountByNameResponseAminoMsg): _52.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _52.QueryModuleAccountByNameResponse): _52.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _52.QueryModuleAccountByNameResponseProtoMsg): _52.QueryModuleAccountByNameResponse;
                toProto(message: _52.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _52.QueryModuleAccountByNameResponse): _52.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _52.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.Bech32PrefixRequest;
                fromPartial(_: Partial<_52.Bech32PrefixRequest>): _52.Bech32PrefixRequest;
                fromAmino(_: _52.Bech32PrefixRequestAmino): _52.Bech32PrefixRequest;
                toAmino(_: _52.Bech32PrefixRequest): _52.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _52.Bech32PrefixRequestAminoMsg): _52.Bech32PrefixRequest;
                toAminoMsg(message: _52.Bech32PrefixRequest): _52.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _52.Bech32PrefixRequestProtoMsg): _52.Bech32PrefixRequest;
                toProto(message: _52.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _52.Bech32PrefixRequest): _52.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _52.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Bech32PrefixResponse;
                fromPartial(object: Partial<_52.Bech32PrefixResponse>): _52.Bech32PrefixResponse;
                fromAmino(object: _52.Bech32PrefixResponseAmino): _52.Bech32PrefixResponse;
                toAmino(message: _52.Bech32PrefixResponse): _52.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _52.Bech32PrefixResponseAminoMsg): _52.Bech32PrefixResponse;
                toAminoMsg(message: _52.Bech32PrefixResponse): _52.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _52.Bech32PrefixResponseProtoMsg): _52.Bech32PrefixResponse;
                toProto(message: _52.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _52.Bech32PrefixResponse): _52.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _52.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.AddressBytesToStringRequest;
                fromPartial(object: Partial<_52.AddressBytesToStringRequest>): _52.AddressBytesToStringRequest;
                fromAmino(object: _52.AddressBytesToStringRequestAmino): _52.AddressBytesToStringRequest;
                toAmino(message: _52.AddressBytesToStringRequest): _52.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _52.AddressBytesToStringRequestAminoMsg): _52.AddressBytesToStringRequest;
                toAminoMsg(message: _52.AddressBytesToStringRequest): _52.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _52.AddressBytesToStringRequestProtoMsg): _52.AddressBytesToStringRequest;
                toProto(message: _52.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _52.AddressBytesToStringRequest): _52.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _52.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.AddressBytesToStringResponse;
                fromPartial(object: Partial<_52.AddressBytesToStringResponse>): _52.AddressBytesToStringResponse;
                fromAmino(object: _52.AddressBytesToStringResponseAmino): _52.AddressBytesToStringResponse;
                toAmino(message: _52.AddressBytesToStringResponse): _52.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _52.AddressBytesToStringResponseAminoMsg): _52.AddressBytesToStringResponse;
                toAminoMsg(message: _52.AddressBytesToStringResponse): _52.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _52.AddressBytesToStringResponseProtoMsg): _52.AddressBytesToStringResponse;
                toProto(message: _52.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _52.AddressBytesToStringResponse): _52.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _52.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.AddressStringToBytesRequest;
                fromPartial(object: Partial<_52.AddressStringToBytesRequest>): _52.AddressStringToBytesRequest;
                fromAmino(object: _52.AddressStringToBytesRequestAmino): _52.AddressStringToBytesRequest;
                toAmino(message: _52.AddressStringToBytesRequest): _52.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _52.AddressStringToBytesRequestAminoMsg): _52.AddressStringToBytesRequest;
                toAminoMsg(message: _52.AddressStringToBytesRequest): _52.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _52.AddressStringToBytesRequestProtoMsg): _52.AddressStringToBytesRequest;
                toProto(message: _52.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _52.AddressStringToBytesRequest): _52.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _52.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.AddressStringToBytesResponse;
                fromPartial(object: Partial<_52.AddressStringToBytesResponse>): _52.AddressStringToBytesResponse;
                fromAmino(object: _52.AddressStringToBytesResponseAmino): _52.AddressStringToBytesResponse;
                toAmino(message: _52.AddressStringToBytesResponse): _52.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _52.AddressStringToBytesResponseAminoMsg): _52.AddressStringToBytesResponse;
                toAminoMsg(message: _52.AddressStringToBytesResponse): _52.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _52.AddressStringToBytesResponseProtoMsg): _52.AddressStringToBytesResponse;
                toProto(message: _52.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _52.AddressStringToBytesResponse): _52.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _52.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_52.QueryAccountAddressByIDRequest>): _52.QueryAccountAddressByIDRequest;
                fromAmino(object: _52.QueryAccountAddressByIDRequestAmino): _52.QueryAccountAddressByIDRequest;
                toAmino(message: _52.QueryAccountAddressByIDRequest): _52.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _52.QueryAccountAddressByIDRequestAminoMsg): _52.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _52.QueryAccountAddressByIDRequest): _52.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAccountAddressByIDRequestProtoMsg): _52.QueryAccountAddressByIDRequest;
                toProto(message: _52.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAccountAddressByIDRequest): _52.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _52.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_52.QueryAccountAddressByIDResponse>): _52.QueryAccountAddressByIDResponse;
                fromAmino(object: _52.QueryAccountAddressByIDResponseAmino): _52.QueryAccountAddressByIDResponse;
                toAmino(message: _52.QueryAccountAddressByIDResponse): _52.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _52.QueryAccountAddressByIDResponseAminoMsg): _52.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _52.QueryAccountAddressByIDResponse): _52.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAccountAddressByIDResponseProtoMsg): _52.QueryAccountAddressByIDResponse;
                toProto(message: _52.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAccountAddressByIDResponse): _52.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _52.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAccountInfoRequest;
                fromPartial(object: Partial<_52.QueryAccountInfoRequest>): _52.QueryAccountInfoRequest;
                fromAmino(object: _52.QueryAccountInfoRequestAmino): _52.QueryAccountInfoRequest;
                toAmino(message: _52.QueryAccountInfoRequest): _52.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _52.QueryAccountInfoRequestAminoMsg): _52.QueryAccountInfoRequest;
                toAminoMsg(message: _52.QueryAccountInfoRequest): _52.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAccountInfoRequestProtoMsg): _52.QueryAccountInfoRequest;
                toProto(message: _52.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAccountInfoRequest): _52.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _52.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAccountInfoResponse;
                fromPartial(object: Partial<_52.QueryAccountInfoResponse>): _52.QueryAccountInfoResponse;
                fromAmino(object: _52.QueryAccountInfoResponseAmino): _52.QueryAccountInfoResponse;
                toAmino(message: _52.QueryAccountInfoResponse): _52.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _52.QueryAccountInfoResponseAminoMsg): _52.QueryAccountInfoResponse;
                toAminoMsg(message: _52.QueryAccountInfoResponse): _52.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAccountInfoResponseProtoMsg): _52.QueryAccountInfoResponse;
                toProto(message: _52.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAccountInfoResponse): _52.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _50.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _50.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _50.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.BaseAccount;
                fromPartial(object: Partial<_50.BaseAccount>): _50.BaseAccount;
                fromAmino(object: _50.BaseAccountAmino): _50.BaseAccount;
                toAmino(message: _50.BaseAccount): _50.BaseAccountAmino;
                fromAminoMsg(object: _50.BaseAccountAminoMsg): _50.BaseAccount;
                toAminoMsg(message: _50.BaseAccount): _50.BaseAccountAminoMsg;
                fromProtoMsg(message: _50.BaseAccountProtoMsg): _50.BaseAccount;
                toProto(message: _50.BaseAccount): Uint8Array;
                toProtoMsg(message: _50.BaseAccount): _50.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _50.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.ModuleAccount;
                fromPartial(object: Partial<_50.ModuleAccount>): _50.ModuleAccount;
                fromAmino(object: _50.ModuleAccountAmino): _50.ModuleAccount;
                toAmino(message: _50.ModuleAccount): _50.ModuleAccountAmino;
                fromAminoMsg(object: _50.ModuleAccountAminoMsg): _50.ModuleAccount;
                toAminoMsg(message: _50.ModuleAccount): _50.ModuleAccountAminoMsg;
                fromProtoMsg(message: _50.ModuleAccountProtoMsg): _50.ModuleAccount;
                toProto(message: _50.ModuleAccount): Uint8Array;
                toProtoMsg(message: _50.ModuleAccount): _50.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _50.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.ModuleCredential;
                fromPartial(object: Partial<_50.ModuleCredential>): _50.ModuleCredential;
                fromAmino(object: _50.ModuleCredentialAmino): _50.ModuleCredential;
                toAmino(message: _50.ModuleCredential): _50.ModuleCredentialAmino;
                fromAminoMsg(object: _50.ModuleCredentialAminoMsg): _50.ModuleCredential;
                toAminoMsg(message: _50.ModuleCredential): _50.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _50.ModuleCredentialProtoMsg): _50.ModuleCredential;
                toProto(message: _50.ModuleCredential): Uint8Array;
                toProtoMsg(message: _50.ModuleCredential): _50.ModuleCredentialProtoMsg;
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
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _54.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _54.Module;
                    fromPartial(_: Partial<_54.Module>): _54.Module;
                    fromAmino(_: _54.ModuleAmino): _54.Module;
                    toAmino(_: _54.Module): _54.ModuleAmino;
                    fromAminoMsg(object: _54.ModuleAminoMsg): _54.Module;
                    toAminoMsg(message: _54.Module): _54.ModuleAminoMsg;
                    fromProtoMsg(message: _54.ModuleProtoMsg): _54.Module;
                    toProto(message: _54.Module): Uint8Array;
                    toProtoMsg(message: _54.Module): _54.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _290.MsgClientImpl;
            QueryClientImpl: typeof _269.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _58.QueryGrantsRequest): Promise<_58.QueryGrantsResponse>;
                granterGrants(request: _58.QueryGranterGrantsRequest): Promise<_58.QueryGranterGrantsResponse>;
                granteeGrants(request: _58.QueryGranteeGrantsRequest): Promise<_58.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _249.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _59.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _59.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _59.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _59.MsgGrant): {
                        typeUrl: string;
                        value: _59.MsgGrant;
                    };
                    exec(value: _59.MsgExec): {
                        typeUrl: string;
                        value: _59.MsgExec;
                    };
                    revoke(value: _59.MsgRevoke): {
                        typeUrl: string;
                        value: _59.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _59.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _59.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _59.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _59.MsgGrant): {
                        typeUrl: string;
                        value: _59.MsgGrant;
                    };
                    exec(value: _59.MsgExec): {
                        typeUrl: string;
                        value: _59.MsgExec;
                    };
                    revoke(value: _59.MsgRevoke): {
                        typeUrl: string;
                        value: _59.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _59.MsgGrant) => _59.MsgGrantAmino;
                    fromAmino: (object: _59.MsgGrantAmino) => _59.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _59.MsgExec) => _59.MsgExecAmino;
                    fromAmino: (object: _59.MsgExecAmino) => _59.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _59.MsgRevoke) => _59.MsgRevokeAmino;
                    fromAmino: (object: _59.MsgRevokeAmino) => _59.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _59.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgGrant;
                fromPartial(object: Partial<_59.MsgGrant>): _59.MsgGrant;
                fromAmino(object: _59.MsgGrantAmino): _59.MsgGrant;
                toAmino(message: _59.MsgGrant): _59.MsgGrantAmino;
                fromAminoMsg(object: _59.MsgGrantAminoMsg): _59.MsgGrant;
                toAminoMsg(message: _59.MsgGrant): _59.MsgGrantAminoMsg;
                fromProtoMsg(message: _59.MsgGrantProtoMsg): _59.MsgGrant;
                toProto(message: _59.MsgGrant): Uint8Array;
                toProtoMsg(message: _59.MsgGrant): _59.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _59.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgExecResponse;
                fromPartial(object: Partial<_59.MsgExecResponse>): _59.MsgExecResponse;
                fromAmino(object: _59.MsgExecResponseAmino): _59.MsgExecResponse;
                toAmino(message: _59.MsgExecResponse): _59.MsgExecResponseAmino;
                fromAminoMsg(object: _59.MsgExecResponseAminoMsg): _59.MsgExecResponse;
                toAminoMsg(message: _59.MsgExecResponse): _59.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _59.MsgExecResponseProtoMsg): _59.MsgExecResponse;
                toProto(message: _59.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _59.MsgExecResponse): _59.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _59.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgExec;
                fromPartial(object: Partial<_59.MsgExec>): _59.MsgExec;
                fromAmino(object: _59.MsgExecAmino): _59.MsgExec;
                toAmino(message: _59.MsgExec): _59.MsgExecAmino;
                fromAminoMsg(object: _59.MsgExecAminoMsg): _59.MsgExec;
                toAminoMsg(message: _59.MsgExec): _59.MsgExecAminoMsg;
                fromProtoMsg(message: _59.MsgExecProtoMsg): _59.MsgExec;
                toProto(message: _59.MsgExec): Uint8Array;
                toProtoMsg(message: _59.MsgExec): _59.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _59.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgGrantResponse;
                fromPartial(_: Partial<_59.MsgGrantResponse>): _59.MsgGrantResponse;
                fromAmino(_: _59.MsgGrantResponseAmino): _59.MsgGrantResponse;
                toAmino(_: _59.MsgGrantResponse): _59.MsgGrantResponseAmino;
                fromAminoMsg(object: _59.MsgGrantResponseAminoMsg): _59.MsgGrantResponse;
                toAminoMsg(message: _59.MsgGrantResponse): _59.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _59.MsgGrantResponseProtoMsg): _59.MsgGrantResponse;
                toProto(message: _59.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _59.MsgGrantResponse): _59.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _59.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgRevoke;
                fromPartial(object: Partial<_59.MsgRevoke>): _59.MsgRevoke;
                fromAmino(object: _59.MsgRevokeAmino): _59.MsgRevoke;
                toAmino(message: _59.MsgRevoke): _59.MsgRevokeAmino;
                fromAminoMsg(object: _59.MsgRevokeAminoMsg): _59.MsgRevoke;
                toAminoMsg(message: _59.MsgRevoke): _59.MsgRevokeAminoMsg;
                fromProtoMsg(message: _59.MsgRevokeProtoMsg): _59.MsgRevoke;
                toProto(message: _59.MsgRevoke): Uint8Array;
                toProtoMsg(message: _59.MsgRevoke): _59.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _59.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgRevokeResponse;
                fromPartial(_: Partial<_59.MsgRevokeResponse>): _59.MsgRevokeResponse;
                fromAmino(_: _59.MsgRevokeResponseAmino): _59.MsgRevokeResponse;
                toAmino(_: _59.MsgRevokeResponse): _59.MsgRevokeResponseAmino;
                fromAminoMsg(object: _59.MsgRevokeResponseAminoMsg): _59.MsgRevokeResponse;
                toAminoMsg(message: _59.MsgRevokeResponse): _59.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _59.MsgRevokeResponseProtoMsg): _59.MsgRevokeResponse;
                toProto(message: _59.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _59.MsgRevokeResponse): _59.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _58.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryGrantsRequest;
                fromPartial(object: Partial<_58.QueryGrantsRequest>): _58.QueryGrantsRequest;
                fromAmino(object: _58.QueryGrantsRequestAmino): _58.QueryGrantsRequest;
                toAmino(message: _58.QueryGrantsRequest): _58.QueryGrantsRequestAmino;
                fromAminoMsg(object: _58.QueryGrantsRequestAminoMsg): _58.QueryGrantsRequest;
                toAminoMsg(message: _58.QueryGrantsRequest): _58.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryGrantsRequestProtoMsg): _58.QueryGrantsRequest;
                toProto(message: _58.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryGrantsRequest): _58.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _58.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryGrantsResponse;
                fromPartial(object: Partial<_58.QueryGrantsResponse>): _58.QueryGrantsResponse;
                fromAmino(object: _58.QueryGrantsResponseAmino): _58.QueryGrantsResponse;
                toAmino(message: _58.QueryGrantsResponse): _58.QueryGrantsResponseAmino;
                fromAminoMsg(object: _58.QueryGrantsResponseAminoMsg): _58.QueryGrantsResponse;
                toAminoMsg(message: _58.QueryGrantsResponse): _58.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryGrantsResponseProtoMsg): _58.QueryGrantsResponse;
                toProto(message: _58.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryGrantsResponse): _58.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _58.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_58.QueryGranterGrantsRequest>): _58.QueryGranterGrantsRequest;
                fromAmino(object: _58.QueryGranterGrantsRequestAmino): _58.QueryGranterGrantsRequest;
                toAmino(message: _58.QueryGranterGrantsRequest): _58.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _58.QueryGranterGrantsRequestAminoMsg): _58.QueryGranterGrantsRequest;
                toAminoMsg(message: _58.QueryGranterGrantsRequest): _58.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryGranterGrantsRequestProtoMsg): _58.QueryGranterGrantsRequest;
                toProto(message: _58.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryGranterGrantsRequest): _58.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _58.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_58.QueryGranterGrantsResponse>): _58.QueryGranterGrantsResponse;
                fromAmino(object: _58.QueryGranterGrantsResponseAmino): _58.QueryGranterGrantsResponse;
                toAmino(message: _58.QueryGranterGrantsResponse): _58.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _58.QueryGranterGrantsResponseAminoMsg): _58.QueryGranterGrantsResponse;
                toAminoMsg(message: _58.QueryGranterGrantsResponse): _58.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryGranterGrantsResponseProtoMsg): _58.QueryGranterGrantsResponse;
                toProto(message: _58.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryGranterGrantsResponse): _58.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _58.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_58.QueryGranteeGrantsRequest>): _58.QueryGranteeGrantsRequest;
                fromAmino(object: _58.QueryGranteeGrantsRequestAmino): _58.QueryGranteeGrantsRequest;
                toAmino(message: _58.QueryGranteeGrantsRequest): _58.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _58.QueryGranteeGrantsRequestAminoMsg): _58.QueryGranteeGrantsRequest;
                toAminoMsg(message: _58.QueryGranteeGrantsRequest): _58.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryGranteeGrantsRequestProtoMsg): _58.QueryGranteeGrantsRequest;
                toProto(message: _58.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryGranteeGrantsRequest): _58.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _58.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_58.QueryGranteeGrantsResponse>): _58.QueryGranteeGrantsResponse;
                fromAmino(object: _58.QueryGranteeGrantsResponseAmino): _58.QueryGranteeGrantsResponse;
                toAmino(message: _58.QueryGranteeGrantsResponse): _58.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _58.QueryGranteeGrantsResponseAminoMsg): _58.QueryGranteeGrantsResponse;
                toAminoMsg(message: _58.QueryGranteeGrantsResponse): _58.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryGranteeGrantsResponseProtoMsg): _58.QueryGranteeGrantsResponse;
                toProto(message: _58.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryGranteeGrantsResponse): _58.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _56.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.EventGrant;
                fromPartial(object: Partial<_56.EventGrant>): _56.EventGrant;
                fromAmino(object: _56.EventGrantAmino): _56.EventGrant;
                toAmino(message: _56.EventGrant): _56.EventGrantAmino;
                fromAminoMsg(object: _56.EventGrantAminoMsg): _56.EventGrant;
                toAminoMsg(message: _56.EventGrant): _56.EventGrantAminoMsg;
                fromProtoMsg(message: _56.EventGrantProtoMsg): _56.EventGrant;
                toProto(message: _56.EventGrant): Uint8Array;
                toProtoMsg(message: _56.EventGrant): _56.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _56.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.EventRevoke;
                fromPartial(object: Partial<_56.EventRevoke>): _56.EventRevoke;
                fromAmino(object: _56.EventRevokeAmino): _56.EventRevoke;
                toAmino(message: _56.EventRevoke): _56.EventRevokeAmino;
                fromAminoMsg(object: _56.EventRevokeAminoMsg): _56.EventRevoke;
                toAminoMsg(message: _56.EventRevoke): _56.EventRevokeAminoMsg;
                fromProtoMsg(message: _56.EventRevokeProtoMsg): _56.EventRevoke;
                toProto(message: _56.EventRevoke): Uint8Array;
                toProtoMsg(message: _56.EventRevoke): _56.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _55.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.GenericAuthorization;
                fromPartial(object: Partial<_55.GenericAuthorization>): _55.GenericAuthorization;
                fromAmino(object: _55.GenericAuthorizationAmino): _55.GenericAuthorization;
                toAmino(message: _55.GenericAuthorization): _55.GenericAuthorizationAmino;
                fromAminoMsg(object: _55.GenericAuthorizationAminoMsg): _55.GenericAuthorization;
                toAminoMsg(message: _55.GenericAuthorization): _55.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _55.GenericAuthorizationProtoMsg): _55.GenericAuthorization;
                toProto(message: _55.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _55.GenericAuthorization): _55.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _55.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Grant;
                fromPartial(object: Partial<_55.Grant>): _55.Grant;
                fromAmino(object: _55.GrantAmino): _55.Grant;
                toAmino(message: _55.Grant): _55.GrantAmino;
                fromAminoMsg(object: _55.GrantAminoMsg): _55.Grant;
                toAminoMsg(message: _55.Grant): _55.GrantAminoMsg;
                fromProtoMsg(message: _55.GrantProtoMsg): _55.Grant;
                toProto(message: _55.Grant): Uint8Array;
                toProtoMsg(message: _55.Grant): _55.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _55.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.GrantAuthorization;
                fromPartial(object: Partial<_55.GrantAuthorization>): _55.GrantAuthorization;
                fromAmino(object: _55.GrantAuthorizationAmino): _55.GrantAuthorization;
                toAmino(message: _55.GrantAuthorization): _55.GrantAuthorizationAmino;
                fromAminoMsg(object: _55.GrantAuthorizationAminoMsg): _55.GrantAuthorization;
                toAminoMsg(message: _55.GrantAuthorization): _55.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _55.GrantAuthorizationProtoMsg): _55.GrantAuthorization;
                toProto(message: _55.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _55.GrantAuthorization): _55.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _55.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.GrantQueueItem;
                fromPartial(object: Partial<_55.GrantQueueItem>): _55.GrantQueueItem;
                fromAmino(object: _55.GrantQueueItemAmino): _55.GrantQueueItem;
                toAmino(message: _55.GrantQueueItem): _55.GrantQueueItemAmino;
                fromAminoMsg(object: _55.GrantQueueItemAminoMsg): _55.GrantQueueItem;
                toAminoMsg(message: _55.GrantQueueItem): _55.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _55.GrantQueueItemProtoMsg): _55.GrantQueueItem;
                toProto(message: _55.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _55.GrantQueueItem): _55.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _63.SendAuthorization | _154.StakeAuthorization | _55.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _61.AppOptionsRequest): Promise<_61.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _61.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.AppOptionsRequest;
                fromPartial(_: Partial<_61.AppOptionsRequest>): _61.AppOptionsRequest;
                fromAmino(_: _61.AppOptionsRequestAmino): _61.AppOptionsRequest;
                toAmino(_: _61.AppOptionsRequest): _61.AppOptionsRequestAmino;
                fromAminoMsg(object: _61.AppOptionsRequestAminoMsg): _61.AppOptionsRequest;
                toAminoMsg(message: _61.AppOptionsRequest): _61.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _61.AppOptionsRequestProtoMsg): _61.AppOptionsRequest;
                toProto(message: _61.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _61.AppOptionsRequest): _61.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _61.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_61.AppOptionsResponse_ModuleOptionsEntry>): _61.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _61.AppOptionsResponse_ModuleOptionsEntryAmino): _61.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _61.AppOptionsResponse_ModuleOptionsEntry): _61.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _61.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _61.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _61.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _61.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _61.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _61.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.AppOptionsResponse;
                fromPartial(object: Partial<_61.AppOptionsResponse>): _61.AppOptionsResponse;
                fromAmino(object: _61.AppOptionsResponseAmino): _61.AppOptionsResponse;
                toAmino(message: _61.AppOptionsResponse): _61.AppOptionsResponseAmino;
                fromAminoMsg(object: _61.AppOptionsResponseAminoMsg): _61.AppOptionsResponse;
                toAminoMsg(message: _61.AppOptionsResponse): _61.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _61.AppOptionsResponseProtoMsg): _61.AppOptionsResponse;
                toProto(message: _61.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _61.AppOptionsResponse): _61.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _60.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.ModuleOptions;
                fromPartial(object: Partial<_60.ModuleOptions>): _60.ModuleOptions;
                fromAmino(object: _60.ModuleOptionsAmino): _60.ModuleOptions;
                toAmino(message: _60.ModuleOptions): _60.ModuleOptionsAmino;
                fromAminoMsg(object: _60.ModuleOptionsAminoMsg): _60.ModuleOptions;
                toAminoMsg(message: _60.ModuleOptions): _60.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _60.ModuleOptionsProtoMsg): _60.ModuleOptions;
                toProto(message: _60.ModuleOptions): Uint8Array;
                toProtoMsg(message: _60.ModuleOptions): _60.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _60.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_60.ServiceCommandDescriptor_SubCommandsEntry>): _60.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _60.ServiceCommandDescriptor_SubCommandsEntryAmino): _60.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _60.ServiceCommandDescriptor_SubCommandsEntry): _60.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _60.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _60.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _60.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _60.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _60.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _60.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.ServiceCommandDescriptor;
                fromPartial(object: Partial<_60.ServiceCommandDescriptor>): _60.ServiceCommandDescriptor;
                fromAmino(object: _60.ServiceCommandDescriptorAmino): _60.ServiceCommandDescriptor;
                toAmino(message: _60.ServiceCommandDescriptor): _60.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _60.ServiceCommandDescriptorAminoMsg): _60.ServiceCommandDescriptor;
                toAminoMsg(message: _60.ServiceCommandDescriptor): _60.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _60.ServiceCommandDescriptorProtoMsg): _60.ServiceCommandDescriptor;
                toProto(message: _60.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _60.ServiceCommandDescriptor): _60.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _60.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_60.RpcCommandOptions_FlagOptionsEntry>): _60.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _60.RpcCommandOptions_FlagOptionsEntryAmino): _60.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _60.RpcCommandOptions_FlagOptionsEntry): _60.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _60.RpcCommandOptions_FlagOptionsEntryAminoMsg): _60.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _60.RpcCommandOptions_FlagOptionsEntryProtoMsg): _60.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _60.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _60.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.RpcCommandOptions;
                fromPartial(object: Partial<_60.RpcCommandOptions>): _60.RpcCommandOptions;
                fromAmino(object: _60.RpcCommandOptionsAmino): _60.RpcCommandOptions;
                toAmino(message: _60.RpcCommandOptions): _60.RpcCommandOptionsAmino;
                fromAminoMsg(object: _60.RpcCommandOptionsAminoMsg): _60.RpcCommandOptions;
                toAminoMsg(message: _60.RpcCommandOptions): _60.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _60.RpcCommandOptionsProtoMsg): _60.RpcCommandOptions;
                toProto(message: _60.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _60.RpcCommandOptions): _60.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _60.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.FlagOptions;
                fromPartial(object: Partial<_60.FlagOptions>): _60.FlagOptions;
                fromAmino(object: _60.FlagOptionsAmino): _60.FlagOptions;
                toAmino(message: _60.FlagOptions): _60.FlagOptionsAmino;
                fromAminoMsg(object: _60.FlagOptionsAminoMsg): _60.FlagOptions;
                toAminoMsg(message: _60.FlagOptions): _60.FlagOptionsAminoMsg;
                fromProtoMsg(message: _60.FlagOptionsProtoMsg): _60.FlagOptions;
                toProto(message: _60.FlagOptions): Uint8Array;
                toProtoMsg(message: _60.FlagOptions): _60.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _60.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.PositionalArgDescriptor;
                fromPartial(object: Partial<_60.PositionalArgDescriptor>): _60.PositionalArgDescriptor;
                fromAmino(object: _60.PositionalArgDescriptorAmino): _60.PositionalArgDescriptor;
                toAmino(message: _60.PositionalArgDescriptor): _60.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _60.PositionalArgDescriptorAminoMsg): _60.PositionalArgDescriptor;
                toAminoMsg(message: _60.PositionalArgDescriptor): _60.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _60.PositionalArgDescriptorProtoMsg): _60.PositionalArgDescriptor;
                toProto(message: _60.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _60.PositionalArgDescriptor): _60.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
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
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _291.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _66.QueryBalanceRequest): Promise<_66.QueryBalanceResponse>;
                allBalances(request: _66.QueryAllBalancesRequest): Promise<_66.QueryAllBalancesResponse>;
                spendableBalances(request: _66.QuerySpendableBalancesRequest): Promise<_66.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _66.QuerySpendableBalanceByDenomRequest): Promise<_66.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _66.QueryTotalSupplyRequest): Promise<_66.QueryTotalSupplyResponse>;
                supplyOf(request: _66.QuerySupplyOfRequest): Promise<_66.QuerySupplyOfResponse>;
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                denomMetadata(request: _66.QueryDenomMetadataRequest): Promise<_66.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _66.QueryDenomsMetadataRequest): Promise<_66.QueryDenomsMetadataResponse>;
                denomOwners(request: _66.QueryDenomOwnersRequest): Promise<_66.QueryDenomOwnersResponse>;
                sendEnabled(request: _66.QuerySendEnabledRequest): Promise<_66.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _250.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _67.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _67.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _67.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: _67.MsgSend;
                    };
                    multiSend(value: _67.MsgMultiSend): {
                        typeUrl: string;
                        value: _67.MsgMultiSend;
                    };
                    updateParams(value: _67.MsgUpdateParams): {
                        typeUrl: string;
                        value: _67.MsgUpdateParams;
                    };
                    setSendEnabled(value: _67.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _67.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _67.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _67.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _67.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _67.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: _67.MsgSend;
                    };
                    multiSend(value: _67.MsgMultiSend): {
                        typeUrl: string;
                        value: _67.MsgMultiSend;
                    };
                    updateParams(value: _67.MsgUpdateParams): {
                        typeUrl: string;
                        value: _67.MsgUpdateParams;
                    };
                    setSendEnabled(value: _67.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _67.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _67.MsgSend) => _67.MsgSendAmino;
                    fromAmino: (object: _67.MsgSendAmino) => _67.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _67.MsgMultiSend) => _67.MsgMultiSendAmino;
                    fromAmino: (object: _67.MsgMultiSendAmino) => _67.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _67.MsgUpdateParams) => _67.MsgUpdateParamsAmino;
                    fromAmino: (object: _67.MsgUpdateParamsAmino) => _67.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _67.MsgSetSendEnabled) => _67.MsgSetSendEnabledAmino;
                    fromAmino: (object: _67.MsgSetSendEnabledAmino) => _67.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _67.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgSend;
                fromPartial(object: Partial<_67.MsgSend>): _67.MsgSend;
                fromAmino(object: _67.MsgSendAmino): _67.MsgSend;
                toAmino(message: _67.MsgSend): _67.MsgSendAmino;
                fromAminoMsg(object: _67.MsgSendAminoMsg): _67.MsgSend;
                toAminoMsg(message: _67.MsgSend): _67.MsgSendAminoMsg;
                fromProtoMsg(message: _67.MsgSendProtoMsg): _67.MsgSend;
                toProto(message: _67.MsgSend): Uint8Array;
                toProtoMsg(message: _67.MsgSend): _67.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _67.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgSendResponse;
                fromPartial(_: Partial<_67.MsgSendResponse>): _67.MsgSendResponse;
                fromAmino(_: _67.MsgSendResponseAmino): _67.MsgSendResponse;
                toAmino(_: _67.MsgSendResponse): _67.MsgSendResponseAmino;
                fromAminoMsg(object: _67.MsgSendResponseAminoMsg): _67.MsgSendResponse;
                toAminoMsg(message: _67.MsgSendResponse): _67.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _67.MsgSendResponseProtoMsg): _67.MsgSendResponse;
                toProto(message: _67.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _67.MsgSendResponse): _67.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _67.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgMultiSend;
                fromPartial(object: Partial<_67.MsgMultiSend>): _67.MsgMultiSend;
                fromAmino(object: _67.MsgMultiSendAmino): _67.MsgMultiSend;
                toAmino(message: _67.MsgMultiSend): _67.MsgMultiSendAmino;
                fromAminoMsg(object: _67.MsgMultiSendAminoMsg): _67.MsgMultiSend;
                toAminoMsg(message: _67.MsgMultiSend): _67.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _67.MsgMultiSendProtoMsg): _67.MsgMultiSend;
                toProto(message: _67.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _67.MsgMultiSend): _67.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _67.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgMultiSendResponse;
                fromPartial(_: Partial<_67.MsgMultiSendResponse>): _67.MsgMultiSendResponse;
                fromAmino(_: _67.MsgMultiSendResponseAmino): _67.MsgMultiSendResponse;
                toAmino(_: _67.MsgMultiSendResponse): _67.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _67.MsgMultiSendResponseAminoMsg): _67.MsgMultiSendResponse;
                toAminoMsg(message: _67.MsgMultiSendResponse): _67.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _67.MsgMultiSendResponseProtoMsg): _67.MsgMultiSendResponse;
                toProto(message: _67.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _67.MsgMultiSendResponse): _67.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _67.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgUpdateParams;
                fromPartial(object: Partial<_67.MsgUpdateParams>): _67.MsgUpdateParams;
                fromAmino(object: _67.MsgUpdateParamsAmino): _67.MsgUpdateParams;
                toAmino(message: _67.MsgUpdateParams): _67.MsgUpdateParamsAmino;
                fromAminoMsg(object: _67.MsgUpdateParamsAminoMsg): _67.MsgUpdateParams;
                toAminoMsg(message: _67.MsgUpdateParams): _67.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _67.MsgUpdateParamsProtoMsg): _67.MsgUpdateParams;
                toProto(message: _67.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _67.MsgUpdateParams): _67.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _67.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_67.MsgUpdateParamsResponse>): _67.MsgUpdateParamsResponse;
                fromAmino(_: _67.MsgUpdateParamsResponseAmino): _67.MsgUpdateParamsResponse;
                toAmino(_: _67.MsgUpdateParamsResponse): _67.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _67.MsgUpdateParamsResponseAminoMsg): _67.MsgUpdateParamsResponse;
                toAminoMsg(message: _67.MsgUpdateParamsResponse): _67.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _67.MsgUpdateParamsResponseProtoMsg): _67.MsgUpdateParamsResponse;
                toProto(message: _67.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _67.MsgUpdateParamsResponse): _67.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _67.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgSetSendEnabled;
                fromPartial(object: Partial<_67.MsgSetSendEnabled>): _67.MsgSetSendEnabled;
                fromAmino(object: _67.MsgSetSendEnabledAmino): _67.MsgSetSendEnabled;
                toAmino(message: _67.MsgSetSendEnabled): _67.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _67.MsgSetSendEnabledAminoMsg): _67.MsgSetSendEnabled;
                toAminoMsg(message: _67.MsgSetSendEnabled): _67.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _67.MsgSetSendEnabledProtoMsg): _67.MsgSetSendEnabled;
                toProto(message: _67.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _67.MsgSetSendEnabled): _67.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _67.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_67.MsgSetSendEnabledResponse>): _67.MsgSetSendEnabledResponse;
                fromAmino(_: _67.MsgSetSendEnabledResponseAmino): _67.MsgSetSendEnabledResponse;
                toAmino(_: _67.MsgSetSendEnabledResponse): _67.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _67.MsgSetSendEnabledResponseAminoMsg): _67.MsgSetSendEnabledResponse;
                toAminoMsg(message: _67.MsgSetSendEnabledResponse): _67.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _67.MsgSetSendEnabledResponseProtoMsg): _67.MsgSetSendEnabledResponse;
                toProto(message: _67.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _67.MsgSetSendEnabledResponse): _67.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _66.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryBalanceRequest;
                fromPartial(object: Partial<_66.QueryBalanceRequest>): _66.QueryBalanceRequest;
                fromAmino(object: _66.QueryBalanceRequestAmino): _66.QueryBalanceRequest;
                toAmino(message: _66.QueryBalanceRequest): _66.QueryBalanceRequestAmino;
                fromAminoMsg(object: _66.QueryBalanceRequestAminoMsg): _66.QueryBalanceRequest;
                toAminoMsg(message: _66.QueryBalanceRequest): _66.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _66.QueryBalanceRequestProtoMsg): _66.QueryBalanceRequest;
                toProto(message: _66.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _66.QueryBalanceRequest): _66.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _66.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryBalanceResponse;
                fromPartial(object: Partial<_66.QueryBalanceResponse>): _66.QueryBalanceResponse;
                fromAmino(object: _66.QueryBalanceResponseAmino): _66.QueryBalanceResponse;
                toAmino(message: _66.QueryBalanceResponse): _66.QueryBalanceResponseAmino;
                fromAminoMsg(object: _66.QueryBalanceResponseAminoMsg): _66.QueryBalanceResponse;
                toAminoMsg(message: _66.QueryBalanceResponse): _66.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _66.QueryBalanceResponseProtoMsg): _66.QueryBalanceResponse;
                toProto(message: _66.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _66.QueryBalanceResponse): _66.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllBalancesRequest;
                fromPartial(object: Partial<_66.QueryAllBalancesRequest>): _66.QueryAllBalancesRequest;
                fromAmino(object: _66.QueryAllBalancesRequestAmino): _66.QueryAllBalancesRequest;
                toAmino(message: _66.QueryAllBalancesRequest): _66.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _66.QueryAllBalancesRequestAminoMsg): _66.QueryAllBalancesRequest;
                toAminoMsg(message: _66.QueryAllBalancesRequest): _66.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllBalancesRequestProtoMsg): _66.QueryAllBalancesRequest;
                toProto(message: _66.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllBalancesRequest): _66.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllBalancesResponse;
                fromPartial(object: Partial<_66.QueryAllBalancesResponse>): _66.QueryAllBalancesResponse;
                fromAmino(object: _66.QueryAllBalancesResponseAmino): _66.QueryAllBalancesResponse;
                toAmino(message: _66.QueryAllBalancesResponse): _66.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _66.QueryAllBalancesResponseAminoMsg): _66.QueryAllBalancesResponse;
                toAminoMsg(message: _66.QueryAllBalancesResponse): _66.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllBalancesResponseProtoMsg): _66.QueryAllBalancesResponse;
                toProto(message: _66.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllBalancesResponse): _66.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _66.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_66.QuerySpendableBalancesRequest>): _66.QuerySpendableBalancesRequest;
                fromAmino(object: _66.QuerySpendableBalancesRequestAmino): _66.QuerySpendableBalancesRequest;
                toAmino(message: _66.QuerySpendableBalancesRequest): _66.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _66.QuerySpendableBalancesRequestAminoMsg): _66.QuerySpendableBalancesRequest;
                toAminoMsg(message: _66.QuerySpendableBalancesRequest): _66.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _66.QuerySpendableBalancesRequestProtoMsg): _66.QuerySpendableBalancesRequest;
                toProto(message: _66.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _66.QuerySpendableBalancesRequest): _66.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _66.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_66.QuerySpendableBalancesResponse>): _66.QuerySpendableBalancesResponse;
                fromAmino(object: _66.QuerySpendableBalancesResponseAmino): _66.QuerySpendableBalancesResponse;
                toAmino(message: _66.QuerySpendableBalancesResponse): _66.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _66.QuerySpendableBalancesResponseAminoMsg): _66.QuerySpendableBalancesResponse;
                toAminoMsg(message: _66.QuerySpendableBalancesResponse): _66.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _66.QuerySpendableBalancesResponseProtoMsg): _66.QuerySpendableBalancesResponse;
                toProto(message: _66.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _66.QuerySpendableBalancesResponse): _66.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _66.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_66.QuerySpendableBalanceByDenomRequest>): _66.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _66.QuerySpendableBalanceByDenomRequestAmino): _66.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _66.QuerySpendableBalanceByDenomRequest): _66.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _66.QuerySpendableBalanceByDenomRequestAminoMsg): _66.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _66.QuerySpendableBalanceByDenomRequest): _66.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _66.QuerySpendableBalanceByDenomRequestProtoMsg): _66.QuerySpendableBalanceByDenomRequest;
                toProto(message: _66.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _66.QuerySpendableBalanceByDenomRequest): _66.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _66.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_66.QuerySpendableBalanceByDenomResponse>): _66.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _66.QuerySpendableBalanceByDenomResponseAmino): _66.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _66.QuerySpendableBalanceByDenomResponse): _66.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _66.QuerySpendableBalanceByDenomResponseAminoMsg): _66.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _66.QuerySpendableBalanceByDenomResponse): _66.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _66.QuerySpendableBalanceByDenomResponseProtoMsg): _66.QuerySpendableBalanceByDenomResponse;
                toProto(message: _66.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _66.QuerySpendableBalanceByDenomResponse): _66.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _66.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_66.QueryTotalSupplyRequest>): _66.QueryTotalSupplyRequest;
                fromAmino(object: _66.QueryTotalSupplyRequestAmino): _66.QueryTotalSupplyRequest;
                toAmino(message: _66.QueryTotalSupplyRequest): _66.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _66.QueryTotalSupplyRequestAminoMsg): _66.QueryTotalSupplyRequest;
                toAminoMsg(message: _66.QueryTotalSupplyRequest): _66.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _66.QueryTotalSupplyRequestProtoMsg): _66.QueryTotalSupplyRequest;
                toProto(message: _66.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _66.QueryTotalSupplyRequest): _66.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _66.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_66.QueryTotalSupplyResponse>): _66.QueryTotalSupplyResponse;
                fromAmino(object: _66.QueryTotalSupplyResponseAmino): _66.QueryTotalSupplyResponse;
                toAmino(message: _66.QueryTotalSupplyResponse): _66.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _66.QueryTotalSupplyResponseAminoMsg): _66.QueryTotalSupplyResponse;
                toAminoMsg(message: _66.QueryTotalSupplyResponse): _66.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _66.QueryTotalSupplyResponseProtoMsg): _66.QueryTotalSupplyResponse;
                toProto(message: _66.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _66.QueryTotalSupplyResponse): _66.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _66.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySupplyOfRequest;
                fromPartial(object: Partial<_66.QuerySupplyOfRequest>): _66.QuerySupplyOfRequest;
                fromAmino(object: _66.QuerySupplyOfRequestAmino): _66.QuerySupplyOfRequest;
                toAmino(message: _66.QuerySupplyOfRequest): _66.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _66.QuerySupplyOfRequestAminoMsg): _66.QuerySupplyOfRequest;
                toAminoMsg(message: _66.QuerySupplyOfRequest): _66.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _66.QuerySupplyOfRequestProtoMsg): _66.QuerySupplyOfRequest;
                toProto(message: _66.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _66.QuerySupplyOfRequest): _66.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _66.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySupplyOfResponse;
                fromPartial(object: Partial<_66.QuerySupplyOfResponse>): _66.QuerySupplyOfResponse;
                fromAmino(object: _66.QuerySupplyOfResponseAmino): _66.QuerySupplyOfResponse;
                toAmino(message: _66.QuerySupplyOfResponse): _66.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _66.QuerySupplyOfResponseAminoMsg): _66.QuerySupplyOfResponse;
                toAminoMsg(message: _66.QuerySupplyOfResponse): _66.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _66.QuerySupplyOfResponseProtoMsg): _66.QuerySupplyOfResponse;
                toProto(message: _66.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _66.QuerySupplyOfResponse): _66.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _66.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.QueryParamsRequest;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
                fromAmino(_: _66.QueryParamsRequestAmino): _66.QueryParamsRequest;
                toAmino(_: _66.QueryParamsRequest): _66.QueryParamsRequestAmino;
                fromAminoMsg(object: _66.QueryParamsRequestAminoMsg): _66.QueryParamsRequest;
                toAminoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryParamsRequestProtoMsg): _66.QueryParamsRequest;
                toProto(message: _66.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _66.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryParamsResponse;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
                fromAmino(object: _66.QueryParamsResponseAmino): _66.QueryParamsResponse;
                toAmino(message: _66.QueryParamsResponse): _66.QueryParamsResponseAmino;
                fromAminoMsg(object: _66.QueryParamsResponseAminoMsg): _66.QueryParamsResponse;
                toAminoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryParamsResponseProtoMsg): _66.QueryParamsResponse;
                toProto(message: _66.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _66.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_66.QueryDenomsMetadataRequest>): _66.QueryDenomsMetadataRequest;
                fromAmino(object: _66.QueryDenomsMetadataRequestAmino): _66.QueryDenomsMetadataRequest;
                toAmino(message: _66.QueryDenomsMetadataRequest): _66.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _66.QueryDenomsMetadataRequestAminoMsg): _66.QueryDenomsMetadataRequest;
                toAminoMsg(message: _66.QueryDenomsMetadataRequest): _66.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDenomsMetadataRequestProtoMsg): _66.QueryDenomsMetadataRequest;
                toProto(message: _66.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDenomsMetadataRequest): _66.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _66.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_66.QueryDenomsMetadataResponse>): _66.QueryDenomsMetadataResponse;
                fromAmino(object: _66.QueryDenomsMetadataResponseAmino): _66.QueryDenomsMetadataResponse;
                toAmino(message: _66.QueryDenomsMetadataResponse): _66.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _66.QueryDenomsMetadataResponseAminoMsg): _66.QueryDenomsMetadataResponse;
                toAminoMsg(message: _66.QueryDenomsMetadataResponse): _66.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDenomsMetadataResponseProtoMsg): _66.QueryDenomsMetadataResponse;
                toProto(message: _66.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDenomsMetadataResponse): _66.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _66.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_66.QueryDenomMetadataRequest>): _66.QueryDenomMetadataRequest;
                fromAmino(object: _66.QueryDenomMetadataRequestAmino): _66.QueryDenomMetadataRequest;
                toAmino(message: _66.QueryDenomMetadataRequest): _66.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _66.QueryDenomMetadataRequestAminoMsg): _66.QueryDenomMetadataRequest;
                toAminoMsg(message: _66.QueryDenomMetadataRequest): _66.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDenomMetadataRequestProtoMsg): _66.QueryDenomMetadataRequest;
                toProto(message: _66.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDenomMetadataRequest): _66.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _66.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_66.QueryDenomMetadataResponse>): _66.QueryDenomMetadataResponse;
                fromAmino(object: _66.QueryDenomMetadataResponseAmino): _66.QueryDenomMetadataResponse;
                toAmino(message: _66.QueryDenomMetadataResponse): _66.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _66.QueryDenomMetadataResponseAminoMsg): _66.QueryDenomMetadataResponse;
                toAminoMsg(message: _66.QueryDenomMetadataResponse): _66.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDenomMetadataResponseProtoMsg): _66.QueryDenomMetadataResponse;
                toProto(message: _66.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDenomMetadataResponse): _66.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _66.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_66.QueryDenomOwnersRequest>): _66.QueryDenomOwnersRequest;
                fromAmino(object: _66.QueryDenomOwnersRequestAmino): _66.QueryDenomOwnersRequest;
                toAmino(message: _66.QueryDenomOwnersRequest): _66.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _66.QueryDenomOwnersRequestAminoMsg): _66.QueryDenomOwnersRequest;
                toAminoMsg(message: _66.QueryDenomOwnersRequest): _66.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDenomOwnersRequestProtoMsg): _66.QueryDenomOwnersRequest;
                toProto(message: _66.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDenomOwnersRequest): _66.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _66.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DenomOwner;
                fromPartial(object: Partial<_66.DenomOwner>): _66.DenomOwner;
                fromAmino(object: _66.DenomOwnerAmino): _66.DenomOwner;
                toAmino(message: _66.DenomOwner): _66.DenomOwnerAmino;
                fromAminoMsg(object: _66.DenomOwnerAminoMsg): _66.DenomOwner;
                toAminoMsg(message: _66.DenomOwner): _66.DenomOwnerAminoMsg;
                fromProtoMsg(message: _66.DenomOwnerProtoMsg): _66.DenomOwner;
                toProto(message: _66.DenomOwner): Uint8Array;
                toProtoMsg(message: _66.DenomOwner): _66.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _66.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_66.QueryDenomOwnersResponse>): _66.QueryDenomOwnersResponse;
                fromAmino(object: _66.QueryDenomOwnersResponseAmino): _66.QueryDenomOwnersResponse;
                toAmino(message: _66.QueryDenomOwnersResponse): _66.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _66.QueryDenomOwnersResponseAminoMsg): _66.QueryDenomOwnersResponse;
                toAminoMsg(message: _66.QueryDenomOwnersResponse): _66.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDenomOwnersResponseProtoMsg): _66.QueryDenomOwnersResponse;
                toProto(message: _66.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDenomOwnersResponse): _66.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _66.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySendEnabledRequest;
                fromPartial(object: Partial<_66.QuerySendEnabledRequest>): _66.QuerySendEnabledRequest;
                fromAmino(object: _66.QuerySendEnabledRequestAmino): _66.QuerySendEnabledRequest;
                toAmino(message: _66.QuerySendEnabledRequest): _66.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _66.QuerySendEnabledRequestAminoMsg): _66.QuerySendEnabledRequest;
                toAminoMsg(message: _66.QuerySendEnabledRequest): _66.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _66.QuerySendEnabledRequestProtoMsg): _66.QuerySendEnabledRequest;
                toProto(message: _66.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _66.QuerySendEnabledRequest): _66.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _66.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QuerySendEnabledResponse;
                fromPartial(object: Partial<_66.QuerySendEnabledResponse>): _66.QuerySendEnabledResponse;
                fromAmino(object: _66.QuerySendEnabledResponseAmino): _66.QuerySendEnabledResponse;
                toAmino(message: _66.QuerySendEnabledResponse): _66.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _66.QuerySendEnabledResponseAminoMsg): _66.QuerySendEnabledResponse;
                toAminoMsg(message: _66.QuerySendEnabledResponse): _66.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _66.QuerySendEnabledResponseProtoMsg): _66.QuerySendEnabledResponse;
                toProto(message: _66.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _66.QuerySendEnabledResponse): _66.QuerySendEnabledResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _65.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Balance;
                fromPartial(object: Partial<_65.Balance>): _65.Balance;
                fromAmino(object: _65.BalanceAmino): _65.Balance;
                toAmino(message: _65.Balance): _65.BalanceAmino;
                fromAminoMsg(object: _65.BalanceAminoMsg): _65.Balance;
                toAminoMsg(message: _65.Balance): _65.BalanceAminoMsg;
                fromProtoMsg(message: _65.BalanceProtoMsg): _65.Balance;
                toProto(message: _65.Balance): Uint8Array;
                toProtoMsg(message: _65.Balance): _65.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _64.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Params;
                fromPartial(object: Partial<_64.Params>): _64.Params;
                fromAmino(object: _64.ParamsAmino): _64.Params;
                toAmino(message: _64.Params): _64.ParamsAmino;
                fromAminoMsg(object: _64.ParamsAminoMsg): _64.Params;
                toAminoMsg(message: _64.Params): _64.ParamsAminoMsg;
                fromProtoMsg(message: _64.ParamsProtoMsg): _64.Params;
                toProto(message: _64.Params): Uint8Array;
                toProtoMsg(message: _64.Params): _64.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _64.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.SendEnabled;
                fromPartial(object: Partial<_64.SendEnabled>): _64.SendEnabled;
                fromAmino(object: _64.SendEnabledAmino): _64.SendEnabled;
                toAmino(message: _64.SendEnabled): _64.SendEnabledAmino;
                fromAminoMsg(object: _64.SendEnabledAminoMsg): _64.SendEnabled;
                toAminoMsg(message: _64.SendEnabled): _64.SendEnabledAminoMsg;
                fromProtoMsg(message: _64.SendEnabledProtoMsg): _64.SendEnabled;
                toProto(message: _64.SendEnabled): Uint8Array;
                toProtoMsg(message: _64.SendEnabled): _64.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _64.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Input;
                fromPartial(object: Partial<_64.Input>): _64.Input;
                fromAmino(object: _64.InputAmino): _64.Input;
                toAmino(message: _64.Input): _64.InputAmino;
                fromAminoMsg(object: _64.InputAminoMsg): _64.Input;
                toAminoMsg(message: _64.Input): _64.InputAminoMsg;
                fromProtoMsg(message: _64.InputProtoMsg): _64.Input;
                toProto(message: _64.Input): Uint8Array;
                toProtoMsg(message: _64.Input): _64.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _64.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Output;
                fromPartial(object: Partial<_64.Output>): _64.Output;
                fromAmino(object: _64.OutputAmino): _64.Output;
                toAmino(message: _64.Output): _64.OutputAmino;
                fromAminoMsg(object: _64.OutputAminoMsg): _64.Output;
                toAminoMsg(message: _64.Output): _64.OutputAminoMsg;
                fromProtoMsg(message: _64.OutputProtoMsg): _64.Output;
                toProto(message: _64.Output): Uint8Array;
                toProtoMsg(message: _64.Output): _64.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _64.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Supply;
                fromPartial(object: Partial<_64.Supply>): _64.Supply;
                fromAmino(object: _64.SupplyAmino): _64.Supply;
                toAmino(message: _64.Supply): _64.SupplyAmino;
                fromAminoMsg(object: _64.SupplyAminoMsg): _64.Supply;
                toAminoMsg(message: _64.Supply): _64.SupplyAminoMsg;
                fromProtoMsg(message: _64.SupplyProtoMsg): _64.Supply;
                toProto(message: _64.Supply): Uint8Array;
                toProtoMsg(message: _64.Supply): _64.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _64.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.DenomUnit;
                fromPartial(object: Partial<_64.DenomUnit>): _64.DenomUnit;
                fromAmino(object: _64.DenomUnitAmino): _64.DenomUnit;
                toAmino(message: _64.DenomUnit): _64.DenomUnitAmino;
                fromAminoMsg(object: _64.DenomUnitAminoMsg): _64.DenomUnit;
                toAminoMsg(message: _64.DenomUnit): _64.DenomUnitAminoMsg;
                fromProtoMsg(message: _64.DenomUnitProtoMsg): _64.DenomUnit;
                toProto(message: _64.DenomUnit): Uint8Array;
                toProtoMsg(message: _64.DenomUnit): _64.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _64.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Metadata;
                fromPartial(object: Partial<_64.Metadata>): _64.Metadata;
                fromAmino(object: _64.MetadataAmino): _64.Metadata;
                toAmino(message: _64.Metadata): _64.MetadataAmino;
                fromAminoMsg(object: _64.MetadataAminoMsg): _64.Metadata;
                toAminoMsg(message: _64.Metadata): _64.MetadataAminoMsg;
                fromProtoMsg(message: _64.MetadataProtoMsg): _64.Metadata;
                toProto(message: _64.Metadata): Uint8Array;
                toProtoMsg(message: _64.Metadata): _64.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _63.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.SendAuthorization;
                fromPartial(object: Partial<_63.SendAuthorization>): _63.SendAuthorization;
                fromAmino(object: _63.SendAuthorizationAmino): _63.SendAuthorization;
                toAmino(message: _63.SendAuthorization): _63.SendAuthorizationAmino;
                fromAminoMsg(object: _63.SendAuthorizationAminoMsg): _63.SendAuthorization;
                toAminoMsg(message: _63.SendAuthorization): _63.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _63.SendAuthorizationProtoMsg): _63.SendAuthorization;
                toProto(message: _63.SendAuthorization): Uint8Array;
                toProtoMsg(message: _63.SendAuthorization): _63.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _68.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.TxResponse;
                    fromPartial(object: Partial<_68.TxResponse>): _68.TxResponse;
                    fromAmino(object: _68.TxResponseAmino): _68.TxResponse;
                    toAmino(message: _68.TxResponse): _68.TxResponseAmino;
                    fromAminoMsg(object: _68.TxResponseAminoMsg): _68.TxResponse;
                    toAminoMsg(message: _68.TxResponse): _68.TxResponseAminoMsg;
                    fromProtoMsg(message: _68.TxResponseProtoMsg): _68.TxResponse;
                    toProto(message: _68.TxResponse): Uint8Array;
                    toProtoMsg(message: _68.TxResponse): _68.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _68.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.ABCIMessageLog;
                    fromPartial(object: Partial<_68.ABCIMessageLog>): _68.ABCIMessageLog;
                    fromAmino(object: _68.ABCIMessageLogAmino): _68.ABCIMessageLog;
                    toAmino(message: _68.ABCIMessageLog): _68.ABCIMessageLogAmino;
                    fromAminoMsg(object: _68.ABCIMessageLogAminoMsg): _68.ABCIMessageLog;
                    toAminoMsg(message: _68.ABCIMessageLog): _68.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _68.ABCIMessageLogProtoMsg): _68.ABCIMessageLog;
                    toProto(message: _68.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _68.ABCIMessageLog): _68.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _68.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.StringEvent;
                    fromPartial(object: Partial<_68.StringEvent>): _68.StringEvent;
                    fromAmino(object: _68.StringEventAmino): _68.StringEvent;
                    toAmino(message: _68.StringEvent): _68.StringEventAmino;
                    fromAminoMsg(object: _68.StringEventAminoMsg): _68.StringEvent;
                    toAminoMsg(message: _68.StringEvent): _68.StringEventAminoMsg;
                    fromProtoMsg(message: _68.StringEventProtoMsg): _68.StringEvent;
                    toProto(message: _68.StringEvent): Uint8Array;
                    toProtoMsg(message: _68.StringEvent): _68.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _68.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.Attribute;
                    fromPartial(object: Partial<_68.Attribute>): _68.Attribute;
                    fromAmino(object: _68.AttributeAmino): _68.Attribute;
                    toAmino(message: _68.Attribute): _68.AttributeAmino;
                    fromAminoMsg(object: _68.AttributeAminoMsg): _68.Attribute;
                    toAminoMsg(message: _68.Attribute): _68.AttributeAminoMsg;
                    fromProtoMsg(message: _68.AttributeProtoMsg): _68.Attribute;
                    toProto(message: _68.Attribute): Uint8Array;
                    toProtoMsg(message: _68.Attribute): _68.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _68.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GasInfo;
                    fromPartial(object: Partial<_68.GasInfo>): _68.GasInfo;
                    fromAmino(object: _68.GasInfoAmino): _68.GasInfo;
                    toAmino(message: _68.GasInfo): _68.GasInfoAmino;
                    fromAminoMsg(object: _68.GasInfoAminoMsg): _68.GasInfo;
                    toAminoMsg(message: _68.GasInfo): _68.GasInfoAminoMsg;
                    fromProtoMsg(message: _68.GasInfoProtoMsg): _68.GasInfo;
                    toProto(message: _68.GasInfo): Uint8Array;
                    toProtoMsg(message: _68.GasInfo): _68.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _68.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.Result;
                    fromPartial(object: Partial<_68.Result>): _68.Result;
                    fromAmino(object: _68.ResultAmino): _68.Result;
                    toAmino(message: _68.Result): _68.ResultAmino;
                    fromAminoMsg(object: _68.ResultAminoMsg): _68.Result;
                    toAminoMsg(message: _68.Result): _68.ResultAminoMsg;
                    fromProtoMsg(message: _68.ResultProtoMsg): _68.Result;
                    toProto(message: _68.Result): Uint8Array;
                    toProtoMsg(message: _68.Result): _68.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _68.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.SimulationResponse;
                    fromPartial(object: Partial<_68.SimulationResponse>): _68.SimulationResponse;
                    fromAmino(object: _68.SimulationResponseAmino): _68.SimulationResponse;
                    toAmino(message: _68.SimulationResponse): _68.SimulationResponseAmino;
                    fromAminoMsg(object: _68.SimulationResponseAminoMsg): _68.SimulationResponse;
                    toAminoMsg(message: _68.SimulationResponse): _68.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _68.SimulationResponseProtoMsg): _68.SimulationResponse;
                    toProto(message: _68.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _68.SimulationResponse): _68.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _68.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.MsgData;
                    fromPartial(object: Partial<_68.MsgData>): _68.MsgData;
                    fromAmino(object: _68.MsgDataAmino): _68.MsgData;
                    toAmino(message: _68.MsgData): _68.MsgDataAmino;
                    fromAminoMsg(object: _68.MsgDataAminoMsg): _68.MsgData;
                    toAminoMsg(message: _68.MsgData): _68.MsgDataAminoMsg;
                    fromProtoMsg(message: _68.MsgDataProtoMsg): _68.MsgData;
                    toProto(message: _68.MsgData): Uint8Array;
                    toProtoMsg(message: _68.MsgData): _68.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _68.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.TxMsgData;
                    fromPartial(object: Partial<_68.TxMsgData>): _68.TxMsgData;
                    fromAmino(object: _68.TxMsgDataAmino): _68.TxMsgData;
                    toAmino(message: _68.TxMsgData): _68.TxMsgDataAmino;
                    fromAminoMsg(object: _68.TxMsgDataAminoMsg): _68.TxMsgData;
                    toAminoMsg(message: _68.TxMsgData): _68.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _68.TxMsgDataProtoMsg): _68.TxMsgData;
                    toProto(message: _68.TxMsgData): Uint8Array;
                    toProtoMsg(message: _68.TxMsgData): _68.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _68.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.SearchTxsResult;
                    fromPartial(object: Partial<_68.SearchTxsResult>): _68.SearchTxsResult;
                    fromAmino(object: _68.SearchTxsResultAmino): _68.SearchTxsResult;
                    toAmino(message: _68.SearchTxsResult): _68.SearchTxsResultAmino;
                    fromAminoMsg(object: _68.SearchTxsResultAminoMsg): _68.SearchTxsResult;
                    toAminoMsg(message: _68.SearchTxsResult): _68.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _68.SearchTxsResultProtoMsg): _68.SearchTxsResult;
                    toProto(message: _68.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _68.SearchTxsResult): _68.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _69.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Pairs;
                    fromPartial(object: Partial<_69.Pairs>): _69.Pairs;
                    fromAmino(object: _69.PairsAmino): _69.Pairs;
                    toAmino(message: _69.Pairs): _69.PairsAmino;
                    fromAminoMsg(object: _69.PairsAminoMsg): _69.Pairs;
                    toAminoMsg(message: _69.Pairs): _69.PairsAminoMsg;
                    fromProtoMsg(message: _69.PairsProtoMsg): _69.Pairs;
                    toProto(message: _69.Pairs): Uint8Array;
                    toProtoMsg(message: _69.Pairs): _69.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _69.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Pair;
                    fromPartial(object: Partial<_69.Pair>): _69.Pair;
                    fromAmino(object: _69.PairAmino): _69.Pair;
                    toAmino(message: _69.Pair): _69.PairAmino;
                    fromAminoMsg(object: _69.PairAminoMsg): _69.Pair;
                    toAminoMsg(message: _69.Pair): _69.PairAminoMsg;
                    fromProtoMsg(message: _69.PairProtoMsg): _69.Pair;
                    toProto(message: _69.Pair): Uint8Array;
                    toProtoMsg(message: _69.Pair): _69.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _272.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _70.ConfigRequest): Promise<_70.ConfigResponse>;
                };
                LCDQueryClient: typeof _251.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _70.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _70.ConfigRequest;
                    fromPartial(_: Partial<_70.ConfigRequest>): _70.ConfigRequest;
                    fromAmino(_: _70.ConfigRequestAmino): _70.ConfigRequest;
                    toAmino(_: _70.ConfigRequest): _70.ConfigRequestAmino;
                    fromAminoMsg(object: _70.ConfigRequestAminoMsg): _70.ConfigRequest;
                    toAminoMsg(message: _70.ConfigRequest): _70.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _70.ConfigRequestProtoMsg): _70.ConfigRequest;
                    toProto(message: _70.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _70.ConfigRequest): _70.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _70.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.ConfigResponse;
                    fromPartial(object: Partial<_70.ConfigResponse>): _70.ConfigResponse;
                    fromAmino(object: _70.ConfigResponseAmino): _70.ConfigResponse;
                    toAmino(message: _70.ConfigResponse): _70.ConfigResponseAmino;
                    fromAminoMsg(object: _70.ConfigResponseAminoMsg): _70.ConfigResponse;
                    toAminoMsg(message: _70.ConfigResponse): _70.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _70.ConfigResponseProtoMsg): _70.ConfigResponse;
                    toProto(message: _70.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _70.ConfigResponse): _70.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _71.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.PageRequest;
                    fromPartial(object: Partial<_71.PageRequest>): _71.PageRequest;
                    fromAmino(object: _71.PageRequestAmino): _71.PageRequest;
                    toAmino(message: _71.PageRequest): _71.PageRequestAmino;
                    fromAminoMsg(object: _71.PageRequestAminoMsg): _71.PageRequest;
                    toAminoMsg(message: _71.PageRequest): _71.PageRequestAminoMsg;
                    fromProtoMsg(message: _71.PageRequestProtoMsg): _71.PageRequest;
                    toProto(message: _71.PageRequest): Uint8Array;
                    toProtoMsg(message: _71.PageRequest): _71.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _71.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.PageResponse;
                    fromPartial(object: Partial<_71.PageResponse>): _71.PageResponse;
                    fromAmino(object: _71.PageResponseAmino): _71.PageResponse;
                    toAmino(message: _71.PageResponse): _71.PageResponseAmino;
                    fromAminoMsg(object: _71.PageResponseAminoMsg): _71.PageResponse;
                    toAminoMsg(message: _71.PageResponse): _71.PageResponseAminoMsg;
                    fromProtoMsg(message: _71.PageResponseProtoMsg): _71.PageResponse;
                    toProto(message: _71.PageResponse): Uint8Array;
                    toProtoMsg(message: _71.PageResponse): _71.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _72.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _72.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_72.ListAllInterfacesRequest>): _72.ListAllInterfacesRequest;
                    fromAmino(_: _72.ListAllInterfacesRequestAmino): _72.ListAllInterfacesRequest;
                    toAmino(_: _72.ListAllInterfacesRequest): _72.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _72.ListAllInterfacesRequestAminoMsg): _72.ListAllInterfacesRequest;
                    toAminoMsg(message: _72.ListAllInterfacesRequest): _72.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _72.ListAllInterfacesRequestProtoMsg): _72.ListAllInterfacesRequest;
                    toProto(message: _72.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _72.ListAllInterfacesRequest): _72.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _72.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_72.ListAllInterfacesResponse>): _72.ListAllInterfacesResponse;
                    fromAmino(object: _72.ListAllInterfacesResponseAmino): _72.ListAllInterfacesResponse;
                    toAmino(message: _72.ListAllInterfacesResponse): _72.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _72.ListAllInterfacesResponseAminoMsg): _72.ListAllInterfacesResponse;
                    toAminoMsg(message: _72.ListAllInterfacesResponse): _72.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _72.ListAllInterfacesResponseProtoMsg): _72.ListAllInterfacesResponse;
                    toProto(message: _72.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _72.ListAllInterfacesResponse): _72.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _72.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.ListImplementationsRequest;
                    fromPartial(object: Partial<_72.ListImplementationsRequest>): _72.ListImplementationsRequest;
                    fromAmino(object: _72.ListImplementationsRequestAmino): _72.ListImplementationsRequest;
                    toAmino(message: _72.ListImplementationsRequest): _72.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _72.ListImplementationsRequestAminoMsg): _72.ListImplementationsRequest;
                    toAminoMsg(message: _72.ListImplementationsRequest): _72.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _72.ListImplementationsRequestProtoMsg): _72.ListImplementationsRequest;
                    toProto(message: _72.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _72.ListImplementationsRequest): _72.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _72.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.ListImplementationsResponse;
                    fromPartial(object: Partial<_72.ListImplementationsResponse>): _72.ListImplementationsResponse;
                    fromAmino(object: _72.ListImplementationsResponseAmino): _72.ListImplementationsResponse;
                    toAmino(message: _72.ListImplementationsResponse): _72.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _72.ListImplementationsResponseAminoMsg): _72.ListImplementationsResponse;
                    toAminoMsg(message: _72.ListImplementationsResponse): _72.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _72.ListImplementationsResponseProtoMsg): _72.ListImplementationsResponse;
                    toProto(message: _72.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _72.ListImplementationsResponse): _72.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _73.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.AppDescriptor;
                    fromPartial(object: Partial<_73.AppDescriptor>): _73.AppDescriptor;
                    fromAmino(object: _73.AppDescriptorAmino): _73.AppDescriptor;
                    toAmino(message: _73.AppDescriptor): _73.AppDescriptorAmino;
                    fromAminoMsg(object: _73.AppDescriptorAminoMsg): _73.AppDescriptor;
                    toAminoMsg(message: _73.AppDescriptor): _73.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _73.AppDescriptorProtoMsg): _73.AppDescriptor;
                    toProto(message: _73.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _73.AppDescriptor): _73.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _73.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.TxDescriptor;
                    fromPartial(object: Partial<_73.TxDescriptor>): _73.TxDescriptor;
                    fromAmino(object: _73.TxDescriptorAmino): _73.TxDescriptor;
                    toAmino(message: _73.TxDescriptor): _73.TxDescriptorAmino;
                    fromAminoMsg(object: _73.TxDescriptorAminoMsg): _73.TxDescriptor;
                    toAminoMsg(message: _73.TxDescriptor): _73.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _73.TxDescriptorProtoMsg): _73.TxDescriptor;
                    toProto(message: _73.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _73.TxDescriptor): _73.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _73.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.AuthnDescriptor;
                    fromPartial(object: Partial<_73.AuthnDescriptor>): _73.AuthnDescriptor;
                    fromAmino(object: _73.AuthnDescriptorAmino): _73.AuthnDescriptor;
                    toAmino(message: _73.AuthnDescriptor): _73.AuthnDescriptorAmino;
                    fromAminoMsg(object: _73.AuthnDescriptorAminoMsg): _73.AuthnDescriptor;
                    toAminoMsg(message: _73.AuthnDescriptor): _73.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _73.AuthnDescriptorProtoMsg): _73.AuthnDescriptor;
                    toProto(message: _73.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _73.AuthnDescriptor): _73.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _73.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.SigningModeDescriptor;
                    fromPartial(object: Partial<_73.SigningModeDescriptor>): _73.SigningModeDescriptor;
                    fromAmino(object: _73.SigningModeDescriptorAmino): _73.SigningModeDescriptor;
                    toAmino(message: _73.SigningModeDescriptor): _73.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _73.SigningModeDescriptorAminoMsg): _73.SigningModeDescriptor;
                    toAminoMsg(message: _73.SigningModeDescriptor): _73.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _73.SigningModeDescriptorProtoMsg): _73.SigningModeDescriptor;
                    toProto(message: _73.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _73.SigningModeDescriptor): _73.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _73.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.ChainDescriptor;
                    fromPartial(object: Partial<_73.ChainDescriptor>): _73.ChainDescriptor;
                    fromAmino(object: _73.ChainDescriptorAmino): _73.ChainDescriptor;
                    toAmino(message: _73.ChainDescriptor): _73.ChainDescriptorAmino;
                    fromAminoMsg(object: _73.ChainDescriptorAminoMsg): _73.ChainDescriptor;
                    toAminoMsg(message: _73.ChainDescriptor): _73.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _73.ChainDescriptorProtoMsg): _73.ChainDescriptor;
                    toProto(message: _73.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _73.ChainDescriptor): _73.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _73.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.CodecDescriptor;
                    fromPartial(object: Partial<_73.CodecDescriptor>): _73.CodecDescriptor;
                    fromAmino(object: _73.CodecDescriptorAmino): _73.CodecDescriptor;
                    toAmino(message: _73.CodecDescriptor): _73.CodecDescriptorAmino;
                    fromAminoMsg(object: _73.CodecDescriptorAminoMsg): _73.CodecDescriptor;
                    toAminoMsg(message: _73.CodecDescriptor): _73.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _73.CodecDescriptorProtoMsg): _73.CodecDescriptor;
                    toProto(message: _73.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _73.CodecDescriptor): _73.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _73.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.InterfaceDescriptor;
                    fromPartial(object: Partial<_73.InterfaceDescriptor>): _73.InterfaceDescriptor;
                    fromAmino(object: _73.InterfaceDescriptorAmino): _73.InterfaceDescriptor;
                    toAmino(message: _73.InterfaceDescriptor): _73.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _73.InterfaceDescriptorAminoMsg): _73.InterfaceDescriptor;
                    toAminoMsg(message: _73.InterfaceDescriptor): _73.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _73.InterfaceDescriptorProtoMsg): _73.InterfaceDescriptor;
                    toProto(message: _73.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _73.InterfaceDescriptor): _73.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _73.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_73.InterfaceImplementerDescriptor>): _73.InterfaceImplementerDescriptor;
                    fromAmino(object: _73.InterfaceImplementerDescriptorAmino): _73.InterfaceImplementerDescriptor;
                    toAmino(message: _73.InterfaceImplementerDescriptor): _73.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _73.InterfaceImplementerDescriptorAminoMsg): _73.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _73.InterfaceImplementerDescriptor): _73.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _73.InterfaceImplementerDescriptorProtoMsg): _73.InterfaceImplementerDescriptor;
                    toProto(message: _73.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _73.InterfaceImplementerDescriptor): _73.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _73.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_73.InterfaceAcceptingMessageDescriptor>): _73.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _73.InterfaceAcceptingMessageDescriptorAmino): _73.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _73.InterfaceAcceptingMessageDescriptor): _73.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _73.InterfaceAcceptingMessageDescriptorAminoMsg): _73.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _73.InterfaceAcceptingMessageDescriptor): _73.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _73.InterfaceAcceptingMessageDescriptorProtoMsg): _73.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _73.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _73.InterfaceAcceptingMessageDescriptor): _73.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _73.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.ConfigurationDescriptor;
                    fromPartial(object: Partial<_73.ConfigurationDescriptor>): _73.ConfigurationDescriptor;
                    fromAmino(object: _73.ConfigurationDescriptorAmino): _73.ConfigurationDescriptor;
                    toAmino(message: _73.ConfigurationDescriptor): _73.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _73.ConfigurationDescriptorAminoMsg): _73.ConfigurationDescriptor;
                    toAminoMsg(message: _73.ConfigurationDescriptor): _73.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _73.ConfigurationDescriptorProtoMsg): _73.ConfigurationDescriptor;
                    toProto(message: _73.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _73.ConfigurationDescriptor): _73.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _73.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.MsgDescriptor;
                    fromPartial(object: Partial<_73.MsgDescriptor>): _73.MsgDescriptor;
                    fromAmino(object: _73.MsgDescriptorAmino): _73.MsgDescriptor;
                    toAmino(message: _73.MsgDescriptor): _73.MsgDescriptorAmino;
                    fromAminoMsg(object: _73.MsgDescriptorAminoMsg): _73.MsgDescriptor;
                    toAminoMsg(message: _73.MsgDescriptor): _73.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _73.MsgDescriptorProtoMsg): _73.MsgDescriptor;
                    toProto(message: _73.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _73.MsgDescriptor): _73.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _73.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _73.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_73.GetAuthnDescriptorRequest>): _73.GetAuthnDescriptorRequest;
                    fromAmino(_: _73.GetAuthnDescriptorRequestAmino): _73.GetAuthnDescriptorRequest;
                    toAmino(_: _73.GetAuthnDescriptorRequest): _73.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _73.GetAuthnDescriptorRequestAminoMsg): _73.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _73.GetAuthnDescriptorRequest): _73.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _73.GetAuthnDescriptorRequestProtoMsg): _73.GetAuthnDescriptorRequest;
                    toProto(message: _73.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _73.GetAuthnDescriptorRequest): _73.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _73.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_73.GetAuthnDescriptorResponse>): _73.GetAuthnDescriptorResponse;
                    fromAmino(object: _73.GetAuthnDescriptorResponseAmino): _73.GetAuthnDescriptorResponse;
                    toAmino(message: _73.GetAuthnDescriptorResponse): _73.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _73.GetAuthnDescriptorResponseAminoMsg): _73.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _73.GetAuthnDescriptorResponse): _73.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _73.GetAuthnDescriptorResponseProtoMsg): _73.GetAuthnDescriptorResponse;
                    toProto(message: _73.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _73.GetAuthnDescriptorResponse): _73.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _73.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _73.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_73.GetChainDescriptorRequest>): _73.GetChainDescriptorRequest;
                    fromAmino(_: _73.GetChainDescriptorRequestAmino): _73.GetChainDescriptorRequest;
                    toAmino(_: _73.GetChainDescriptorRequest): _73.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _73.GetChainDescriptorRequestAminoMsg): _73.GetChainDescriptorRequest;
                    toAminoMsg(message: _73.GetChainDescriptorRequest): _73.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _73.GetChainDescriptorRequestProtoMsg): _73.GetChainDescriptorRequest;
                    toProto(message: _73.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _73.GetChainDescriptorRequest): _73.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _73.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_73.GetChainDescriptorResponse>): _73.GetChainDescriptorResponse;
                    fromAmino(object: _73.GetChainDescriptorResponseAmino): _73.GetChainDescriptorResponse;
                    toAmino(message: _73.GetChainDescriptorResponse): _73.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _73.GetChainDescriptorResponseAminoMsg): _73.GetChainDescriptorResponse;
                    toAminoMsg(message: _73.GetChainDescriptorResponse): _73.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _73.GetChainDescriptorResponseProtoMsg): _73.GetChainDescriptorResponse;
                    toProto(message: _73.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _73.GetChainDescriptorResponse): _73.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _73.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _73.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_73.GetCodecDescriptorRequest>): _73.GetCodecDescriptorRequest;
                    fromAmino(_: _73.GetCodecDescriptorRequestAmino): _73.GetCodecDescriptorRequest;
                    toAmino(_: _73.GetCodecDescriptorRequest): _73.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _73.GetCodecDescriptorRequestAminoMsg): _73.GetCodecDescriptorRequest;
                    toAminoMsg(message: _73.GetCodecDescriptorRequest): _73.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _73.GetCodecDescriptorRequestProtoMsg): _73.GetCodecDescriptorRequest;
                    toProto(message: _73.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _73.GetCodecDescriptorRequest): _73.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _73.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_73.GetCodecDescriptorResponse>): _73.GetCodecDescriptorResponse;
                    fromAmino(object: _73.GetCodecDescriptorResponseAmino): _73.GetCodecDescriptorResponse;
                    toAmino(message: _73.GetCodecDescriptorResponse): _73.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _73.GetCodecDescriptorResponseAminoMsg): _73.GetCodecDescriptorResponse;
                    toAminoMsg(message: _73.GetCodecDescriptorResponse): _73.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _73.GetCodecDescriptorResponseProtoMsg): _73.GetCodecDescriptorResponse;
                    toProto(message: _73.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _73.GetCodecDescriptorResponse): _73.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _73.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _73.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_73.GetConfigurationDescriptorRequest>): _73.GetConfigurationDescriptorRequest;
                    fromAmino(_: _73.GetConfigurationDescriptorRequestAmino): _73.GetConfigurationDescriptorRequest;
                    toAmino(_: _73.GetConfigurationDescriptorRequest): _73.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _73.GetConfigurationDescriptorRequestAminoMsg): _73.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _73.GetConfigurationDescriptorRequest): _73.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _73.GetConfigurationDescriptorRequestProtoMsg): _73.GetConfigurationDescriptorRequest;
                    toProto(message: _73.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _73.GetConfigurationDescriptorRequest): _73.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _73.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_73.GetConfigurationDescriptorResponse>): _73.GetConfigurationDescriptorResponse;
                    fromAmino(object: _73.GetConfigurationDescriptorResponseAmino): _73.GetConfigurationDescriptorResponse;
                    toAmino(message: _73.GetConfigurationDescriptorResponse): _73.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _73.GetConfigurationDescriptorResponseAminoMsg): _73.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _73.GetConfigurationDescriptorResponse): _73.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _73.GetConfigurationDescriptorResponseProtoMsg): _73.GetConfigurationDescriptorResponse;
                    toProto(message: _73.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _73.GetConfigurationDescriptorResponse): _73.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _73.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _73.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_73.GetQueryServicesDescriptorRequest>): _73.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _73.GetQueryServicesDescriptorRequestAmino): _73.GetQueryServicesDescriptorRequest;
                    toAmino(_: _73.GetQueryServicesDescriptorRequest): _73.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _73.GetQueryServicesDescriptorRequestAminoMsg): _73.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _73.GetQueryServicesDescriptorRequest): _73.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _73.GetQueryServicesDescriptorRequestProtoMsg): _73.GetQueryServicesDescriptorRequest;
                    toProto(message: _73.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _73.GetQueryServicesDescriptorRequest): _73.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _73.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_73.GetQueryServicesDescriptorResponse>): _73.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _73.GetQueryServicesDescriptorResponseAmino): _73.GetQueryServicesDescriptorResponse;
                    toAmino(message: _73.GetQueryServicesDescriptorResponse): _73.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _73.GetQueryServicesDescriptorResponseAminoMsg): _73.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _73.GetQueryServicesDescriptorResponse): _73.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _73.GetQueryServicesDescriptorResponseProtoMsg): _73.GetQueryServicesDescriptorResponse;
                    toProto(message: _73.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _73.GetQueryServicesDescriptorResponse): _73.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _73.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _73.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_73.GetTxDescriptorRequest>): _73.GetTxDescriptorRequest;
                    fromAmino(_: _73.GetTxDescriptorRequestAmino): _73.GetTxDescriptorRequest;
                    toAmino(_: _73.GetTxDescriptorRequest): _73.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _73.GetTxDescriptorRequestAminoMsg): _73.GetTxDescriptorRequest;
                    toAminoMsg(message: _73.GetTxDescriptorRequest): _73.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _73.GetTxDescriptorRequestProtoMsg): _73.GetTxDescriptorRequest;
                    toProto(message: _73.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _73.GetTxDescriptorRequest): _73.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _73.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_73.GetTxDescriptorResponse>): _73.GetTxDescriptorResponse;
                    fromAmino(object: _73.GetTxDescriptorResponseAmino): _73.GetTxDescriptorResponse;
                    toAmino(message: _73.GetTxDescriptorResponse): _73.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _73.GetTxDescriptorResponseAminoMsg): _73.GetTxDescriptorResponse;
                    toAminoMsg(message: _73.GetTxDescriptorResponse): _73.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _73.GetTxDescriptorResponseProtoMsg): _73.GetTxDescriptorResponse;
                    toProto(message: _73.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _73.GetTxDescriptorResponse): _73.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _73.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.QueryServicesDescriptor;
                    fromPartial(object: Partial<_73.QueryServicesDescriptor>): _73.QueryServicesDescriptor;
                    fromAmino(object: _73.QueryServicesDescriptorAmino): _73.QueryServicesDescriptor;
                    toAmino(message: _73.QueryServicesDescriptor): _73.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _73.QueryServicesDescriptorAminoMsg): _73.QueryServicesDescriptor;
                    toAminoMsg(message: _73.QueryServicesDescriptor): _73.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _73.QueryServicesDescriptorProtoMsg): _73.QueryServicesDescriptor;
                    toProto(message: _73.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _73.QueryServicesDescriptor): _73.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _73.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.QueryServiceDescriptor;
                    fromPartial(object: Partial<_73.QueryServiceDescriptor>): _73.QueryServiceDescriptor;
                    fromAmino(object: _73.QueryServiceDescriptorAmino): _73.QueryServiceDescriptor;
                    toAmino(message: _73.QueryServiceDescriptor): _73.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _73.QueryServiceDescriptorAminoMsg): _73.QueryServiceDescriptor;
                    toAminoMsg(message: _73.QueryServiceDescriptor): _73.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _73.QueryServiceDescriptorProtoMsg): _73.QueryServiceDescriptor;
                    toProto(message: _73.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _73.QueryServiceDescriptor): _73.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _73.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.QueryMethodDescriptor;
                    fromPartial(object: Partial<_73.QueryMethodDescriptor>): _73.QueryMethodDescriptor;
                    fromAmino(object: _73.QueryMethodDescriptorAmino): _73.QueryMethodDescriptor;
                    toAmino(message: _73.QueryMethodDescriptor): _73.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _73.QueryMethodDescriptorAminoMsg): _73.QueryMethodDescriptor;
                    toAminoMsg(message: _73.QueryMethodDescriptor): _73.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _73.QueryMethodDescriptorProtoMsg): _73.QueryMethodDescriptor;
                    toProto(message: _73.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _73.QueryMethodDescriptor): _73.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _74.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.Snapshot;
                    fromPartial(object: Partial<_74.Snapshot>): _74.Snapshot;
                    fromAmino(object: _74.SnapshotAmino): _74.Snapshot;
                    toAmino(message: _74.Snapshot): _74.SnapshotAmino;
                    fromAminoMsg(object: _74.SnapshotAminoMsg): _74.Snapshot;
                    toAminoMsg(message: _74.Snapshot): _74.SnapshotAminoMsg;
                    fromProtoMsg(message: _74.SnapshotProtoMsg): _74.Snapshot;
                    toProto(message: _74.Snapshot): Uint8Array;
                    toProtoMsg(message: _74.Snapshot): _74.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _74.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.Metadata;
                    fromPartial(object: Partial<_74.Metadata>): _74.Metadata;
                    fromAmino(object: _74.MetadataAmino): _74.Metadata;
                    toAmino(message: _74.Metadata): _74.MetadataAmino;
                    fromAminoMsg(object: _74.MetadataAminoMsg): _74.Metadata;
                    toAminoMsg(message: _74.Metadata): _74.MetadataAminoMsg;
                    fromProtoMsg(message: _74.MetadataProtoMsg): _74.Metadata;
                    toProto(message: _74.Metadata): Uint8Array;
                    toProtoMsg(message: _74.Metadata): _74.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _74.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SnapshotItem;
                    fromPartial(object: Partial<_74.SnapshotItem>): _74.SnapshotItem;
                    fromAmino(object: _74.SnapshotItemAmino): _74.SnapshotItem;
                    toAmino(message: _74.SnapshotItem): _74.SnapshotItemAmino;
                    fromAminoMsg(object: _74.SnapshotItemAminoMsg): _74.SnapshotItem;
                    toAminoMsg(message: _74.SnapshotItem): _74.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _74.SnapshotItemProtoMsg): _74.SnapshotItem;
                    toProto(message: _74.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _74.SnapshotItem): _74.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _74.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SnapshotStoreItem;
                    fromPartial(object: Partial<_74.SnapshotStoreItem>): _74.SnapshotStoreItem;
                    fromAmino(object: _74.SnapshotStoreItemAmino): _74.SnapshotStoreItem;
                    toAmino(message: _74.SnapshotStoreItem): _74.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _74.SnapshotStoreItemAminoMsg): _74.SnapshotStoreItem;
                    toAminoMsg(message: _74.SnapshotStoreItem): _74.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _74.SnapshotStoreItemProtoMsg): _74.SnapshotStoreItem;
                    toProto(message: _74.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _74.SnapshotStoreItem): _74.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _74.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SnapshotIAVLItem;
                    fromPartial(object: Partial<_74.SnapshotIAVLItem>): _74.SnapshotIAVLItem;
                    fromAmino(object: _74.SnapshotIAVLItemAmino): _74.SnapshotIAVLItem;
                    toAmino(message: _74.SnapshotIAVLItem): _74.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _74.SnapshotIAVLItemAminoMsg): _74.SnapshotIAVLItem;
                    toAminoMsg(message: _74.SnapshotIAVLItem): _74.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _74.SnapshotIAVLItemProtoMsg): _74.SnapshotIAVLItem;
                    toProto(message: _74.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _74.SnapshotIAVLItem): _74.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _74.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_74.SnapshotExtensionMeta>): _74.SnapshotExtensionMeta;
                    fromAmino(object: _74.SnapshotExtensionMetaAmino): _74.SnapshotExtensionMeta;
                    toAmino(message: _74.SnapshotExtensionMeta): _74.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _74.SnapshotExtensionMetaAminoMsg): _74.SnapshotExtensionMeta;
                    toAminoMsg(message: _74.SnapshotExtensionMeta): _74.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _74.SnapshotExtensionMetaProtoMsg): _74.SnapshotExtensionMeta;
                    toProto(message: _74.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _74.SnapshotExtensionMeta): _74.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _74.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_74.SnapshotExtensionPayload>): _74.SnapshotExtensionPayload;
                    fromAmino(object: _74.SnapshotExtensionPayloadAmino): _74.SnapshotExtensionPayload;
                    toAmino(message: _74.SnapshotExtensionPayload): _74.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _74.SnapshotExtensionPayloadAminoMsg): _74.SnapshotExtensionPayload;
                    toAminoMsg(message: _74.SnapshotExtensionPayload): _74.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _74.SnapshotExtensionPayloadProtoMsg): _74.SnapshotExtensionPayload;
                    toProto(message: _74.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _74.SnapshotExtensionPayload): _74.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _74.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SnapshotKVItem;
                    fromPartial(object: Partial<_74.SnapshotKVItem>): _74.SnapshotKVItem;
                    fromAmino(object: _74.SnapshotKVItemAmino): _74.SnapshotKVItem;
                    toAmino(message: _74.SnapshotKVItem): _74.SnapshotKVItemAmino;
                    fromAminoMsg(object: _74.SnapshotKVItemAminoMsg): _74.SnapshotKVItem;
                    toAminoMsg(message: _74.SnapshotKVItem): _74.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _74.SnapshotKVItemProtoMsg): _74.SnapshotKVItem;
                    toProto(message: _74.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _74.SnapshotKVItem): _74.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _74.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.SnapshotSchema;
                    fromPartial(object: Partial<_74.SnapshotSchema>): _74.SnapshotSchema;
                    fromAmino(object: _74.SnapshotSchemaAmino): _74.SnapshotSchema;
                    toAmino(message: _74.SnapshotSchema): _74.SnapshotSchemaAmino;
                    fromAminoMsg(object: _74.SnapshotSchemaAminoMsg): _74.SnapshotSchema;
                    toAminoMsg(message: _74.SnapshotSchema): _74.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _74.SnapshotSchemaProtoMsg): _74.SnapshotSchema;
                    toProto(message: _74.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _74.SnapshotSchema): _74.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _76.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.StoreKVPair;
                    fromPartial(object: Partial<_76.StoreKVPair>): _76.StoreKVPair;
                    fromAmino(object: _76.StoreKVPairAmino): _76.StoreKVPair;
                    toAmino(message: _76.StoreKVPair): _76.StoreKVPairAmino;
                    fromAminoMsg(object: _76.StoreKVPairAminoMsg): _76.StoreKVPair;
                    toAminoMsg(message: _76.StoreKVPair): _76.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _76.StoreKVPairProtoMsg): _76.StoreKVPair;
                    toProto(message: _76.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _76.StoreKVPair): _76.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _76.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.BlockMetadata;
                    fromPartial(object: Partial<_76.BlockMetadata>): _76.BlockMetadata;
                    fromAmino(object: _76.BlockMetadataAmino): _76.BlockMetadata;
                    toAmino(message: _76.BlockMetadata): _76.BlockMetadataAmino;
                    fromAminoMsg(object: _76.BlockMetadataAminoMsg): _76.BlockMetadata;
                    toAminoMsg(message: _76.BlockMetadata): _76.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _76.BlockMetadataProtoMsg): _76.BlockMetadata;
                    toProto(message: _76.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _76.BlockMetadata): _76.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _76.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_76.BlockMetadata_DeliverTx>): _76.BlockMetadata_DeliverTx;
                    fromAmino(object: _76.BlockMetadata_DeliverTxAmino): _76.BlockMetadata_DeliverTx;
                    toAmino(message: _76.BlockMetadata_DeliverTx): _76.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _76.BlockMetadata_DeliverTxAminoMsg): _76.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _76.BlockMetadata_DeliverTx): _76.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _76.BlockMetadata_DeliverTxProtoMsg): _76.BlockMetadata_DeliverTx;
                    toProto(message: _76.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _76.BlockMetadata_DeliverTx): _76.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _75.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _75.CommitInfo;
                    fromPartial(object: Partial<_75.CommitInfo>): _75.CommitInfo;
                    fromAmino(object: _75.CommitInfoAmino): _75.CommitInfo;
                    toAmino(message: _75.CommitInfo): _75.CommitInfoAmino;
                    fromAminoMsg(object: _75.CommitInfoAminoMsg): _75.CommitInfo;
                    toAminoMsg(message: _75.CommitInfo): _75.CommitInfoAminoMsg;
                    fromProtoMsg(message: _75.CommitInfoProtoMsg): _75.CommitInfo;
                    toProto(message: _75.CommitInfo): Uint8Array;
                    toProtoMsg(message: _75.CommitInfo): _75.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _75.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _75.StoreInfo;
                    fromPartial(object: Partial<_75.StoreInfo>): _75.StoreInfo;
                    fromAmino(object: _75.StoreInfoAmino): _75.StoreInfo;
                    toAmino(message: _75.StoreInfo): _75.StoreInfoAmino;
                    fromAminoMsg(object: _75.StoreInfoAminoMsg): _75.StoreInfo;
                    toAminoMsg(message: _75.StoreInfo): _75.StoreInfoAminoMsg;
                    fromProtoMsg(message: _75.StoreInfoProtoMsg): _75.StoreInfo;
                    toProto(message: _75.StoreInfo): Uint8Array;
                    toProtoMsg(message: _75.StoreInfo): _75.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _75.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _75.CommitID;
                    fromPartial(object: Partial<_75.CommitID>): _75.CommitID;
                    fromAmino(object: _75.CommitIDAmino): _75.CommitID;
                    toAmino(message: _75.CommitID): _75.CommitIDAmino;
                    fromAminoMsg(object: _75.CommitIDAminoMsg): _75.CommitID;
                    toAminoMsg(message: _75.CommitID): _75.CommitIDAminoMsg;
                    fromProtoMsg(message: _75.CommitIDProtoMsg): _75.CommitID;
                    toProto(message: _75.CommitID): Uint8Array;
                    toProtoMsg(message: _75.CommitID): _75.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _273.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _77.GetNodeInfoRequest): Promise<_77.GetNodeInfoResponse>;
                    getSyncing(request?: _77.GetSyncingRequest): Promise<_77.GetSyncingResponse>;
                    getLatestBlock(request?: _77.GetLatestBlockRequest): Promise<_77.GetLatestBlockResponse>;
                    getBlockByHeight(request: _77.GetBlockByHeightRequest): Promise<_77.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _77.GetLatestValidatorSetRequest): Promise<_77.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _77.GetValidatorSetByHeightRequest): Promise<_77.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _77.ABCIQueryRequest): Promise<_77.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _252.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _78.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.Block;
                    fromPartial(object: Partial<_78.Block>): _78.Block;
                    fromAmino(object: _78.BlockAmino): _78.Block;
                    toAmino(message: _78.Block): _78.BlockAmino;
                    fromAminoMsg(object: _78.BlockAminoMsg): _78.Block;
                    toAminoMsg(message: _78.Block): _78.BlockAminoMsg;
                    fromProtoMsg(message: _78.BlockProtoMsg): _78.Block;
                    toProto(message: _78.Block): Uint8Array;
                    toProtoMsg(message: _78.Block): _78.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _78.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.Header;
                    fromPartial(object: Partial<_78.Header>): _78.Header;
                    fromAmino(object: _78.HeaderAmino): _78.Header;
                    toAmino(message: _78.Header): _78.HeaderAmino;
                    fromAminoMsg(object: _78.HeaderAminoMsg): _78.Header;
                    toAminoMsg(message: _78.Header): _78.HeaderAminoMsg;
                    fromProtoMsg(message: _78.HeaderProtoMsg): _78.Header;
                    toProto(message: _78.Header): Uint8Array;
                    toProtoMsg(message: _78.Header): _78.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _77.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_77.GetValidatorSetByHeightRequest>): _77.GetValidatorSetByHeightRequest;
                    fromAmino(object: _77.GetValidatorSetByHeightRequestAmino): _77.GetValidatorSetByHeightRequest;
                    toAmino(message: _77.GetValidatorSetByHeightRequest): _77.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _77.GetValidatorSetByHeightRequestAminoMsg): _77.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _77.GetValidatorSetByHeightRequest): _77.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _77.GetValidatorSetByHeightRequestProtoMsg): _77.GetValidatorSetByHeightRequest;
                    toProto(message: _77.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _77.GetValidatorSetByHeightRequest): _77.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _77.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_77.GetValidatorSetByHeightResponse>): _77.GetValidatorSetByHeightResponse;
                    fromAmino(object: _77.GetValidatorSetByHeightResponseAmino): _77.GetValidatorSetByHeightResponse;
                    toAmino(message: _77.GetValidatorSetByHeightResponse): _77.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _77.GetValidatorSetByHeightResponseAminoMsg): _77.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _77.GetValidatorSetByHeightResponse): _77.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _77.GetValidatorSetByHeightResponseProtoMsg): _77.GetValidatorSetByHeightResponse;
                    toProto(message: _77.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _77.GetValidatorSetByHeightResponse): _77.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _77.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_77.GetLatestValidatorSetRequest>): _77.GetLatestValidatorSetRequest;
                    fromAmino(object: _77.GetLatestValidatorSetRequestAmino): _77.GetLatestValidatorSetRequest;
                    toAmino(message: _77.GetLatestValidatorSetRequest): _77.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _77.GetLatestValidatorSetRequestAminoMsg): _77.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _77.GetLatestValidatorSetRequest): _77.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _77.GetLatestValidatorSetRequestProtoMsg): _77.GetLatestValidatorSetRequest;
                    toProto(message: _77.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _77.GetLatestValidatorSetRequest): _77.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _77.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_77.GetLatestValidatorSetResponse>): _77.GetLatestValidatorSetResponse;
                    fromAmino(object: _77.GetLatestValidatorSetResponseAmino): _77.GetLatestValidatorSetResponse;
                    toAmino(message: _77.GetLatestValidatorSetResponse): _77.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _77.GetLatestValidatorSetResponseAminoMsg): _77.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _77.GetLatestValidatorSetResponse): _77.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _77.GetLatestValidatorSetResponseProtoMsg): _77.GetLatestValidatorSetResponse;
                    toProto(message: _77.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _77.GetLatestValidatorSetResponse): _77.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _77.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.Validator;
                    fromPartial(object: Partial<_77.Validator>): _77.Validator;
                    fromAmino(object: _77.ValidatorAmino): _77.Validator;
                    toAmino(message: _77.Validator): _77.ValidatorAmino;
                    fromAminoMsg(object: _77.ValidatorAminoMsg): _77.Validator;
                    toAminoMsg(message: _77.Validator): _77.ValidatorAminoMsg;
                    fromProtoMsg(message: _77.ValidatorProtoMsg): _77.Validator;
                    toProto(message: _77.Validator): Uint8Array;
                    toProtoMsg(message: _77.Validator): _77.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _77.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_77.GetBlockByHeightRequest>): _77.GetBlockByHeightRequest;
                    fromAmino(object: _77.GetBlockByHeightRequestAmino): _77.GetBlockByHeightRequest;
                    toAmino(message: _77.GetBlockByHeightRequest): _77.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _77.GetBlockByHeightRequestAminoMsg): _77.GetBlockByHeightRequest;
                    toAminoMsg(message: _77.GetBlockByHeightRequest): _77.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _77.GetBlockByHeightRequestProtoMsg): _77.GetBlockByHeightRequest;
                    toProto(message: _77.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _77.GetBlockByHeightRequest): _77.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _77.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_77.GetBlockByHeightResponse>): _77.GetBlockByHeightResponse;
                    fromAmino(object: _77.GetBlockByHeightResponseAmino): _77.GetBlockByHeightResponse;
                    toAmino(message: _77.GetBlockByHeightResponse): _77.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _77.GetBlockByHeightResponseAminoMsg): _77.GetBlockByHeightResponse;
                    toAminoMsg(message: _77.GetBlockByHeightResponse): _77.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _77.GetBlockByHeightResponseProtoMsg): _77.GetBlockByHeightResponse;
                    toProto(message: _77.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _77.GetBlockByHeightResponse): _77.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _77.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.GetLatestBlockRequest;
                    fromPartial(_: Partial<_77.GetLatestBlockRequest>): _77.GetLatestBlockRequest;
                    fromAmino(_: _77.GetLatestBlockRequestAmino): _77.GetLatestBlockRequest;
                    toAmino(_: _77.GetLatestBlockRequest): _77.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _77.GetLatestBlockRequestAminoMsg): _77.GetLatestBlockRequest;
                    toAminoMsg(message: _77.GetLatestBlockRequest): _77.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _77.GetLatestBlockRequestProtoMsg): _77.GetLatestBlockRequest;
                    toProto(message: _77.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _77.GetLatestBlockRequest): _77.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _77.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetLatestBlockResponse;
                    fromPartial(object: Partial<_77.GetLatestBlockResponse>): _77.GetLatestBlockResponse;
                    fromAmino(object: _77.GetLatestBlockResponseAmino): _77.GetLatestBlockResponse;
                    toAmino(message: _77.GetLatestBlockResponse): _77.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _77.GetLatestBlockResponseAminoMsg): _77.GetLatestBlockResponse;
                    toAminoMsg(message: _77.GetLatestBlockResponse): _77.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _77.GetLatestBlockResponseProtoMsg): _77.GetLatestBlockResponse;
                    toProto(message: _77.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _77.GetLatestBlockResponse): _77.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _77.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.GetSyncingRequest;
                    fromPartial(_: Partial<_77.GetSyncingRequest>): _77.GetSyncingRequest;
                    fromAmino(_: _77.GetSyncingRequestAmino): _77.GetSyncingRequest;
                    toAmino(_: _77.GetSyncingRequest): _77.GetSyncingRequestAmino;
                    fromAminoMsg(object: _77.GetSyncingRequestAminoMsg): _77.GetSyncingRequest;
                    toAminoMsg(message: _77.GetSyncingRequest): _77.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _77.GetSyncingRequestProtoMsg): _77.GetSyncingRequest;
                    toProto(message: _77.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _77.GetSyncingRequest): _77.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _77.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetSyncingResponse;
                    fromPartial(object: Partial<_77.GetSyncingResponse>): _77.GetSyncingResponse;
                    fromAmino(object: _77.GetSyncingResponseAmino): _77.GetSyncingResponse;
                    toAmino(message: _77.GetSyncingResponse): _77.GetSyncingResponseAmino;
                    fromAminoMsg(object: _77.GetSyncingResponseAminoMsg): _77.GetSyncingResponse;
                    toAminoMsg(message: _77.GetSyncingResponse): _77.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _77.GetSyncingResponseProtoMsg): _77.GetSyncingResponse;
                    toProto(message: _77.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _77.GetSyncingResponse): _77.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _77.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.GetNodeInfoRequest;
                    fromPartial(_: Partial<_77.GetNodeInfoRequest>): _77.GetNodeInfoRequest;
                    fromAmino(_: _77.GetNodeInfoRequestAmino): _77.GetNodeInfoRequest;
                    toAmino(_: _77.GetNodeInfoRequest): _77.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _77.GetNodeInfoRequestAminoMsg): _77.GetNodeInfoRequest;
                    toAminoMsg(message: _77.GetNodeInfoRequest): _77.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _77.GetNodeInfoRequestProtoMsg): _77.GetNodeInfoRequest;
                    toProto(message: _77.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _77.GetNodeInfoRequest): _77.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _77.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetNodeInfoResponse;
                    fromPartial(object: Partial<_77.GetNodeInfoResponse>): _77.GetNodeInfoResponse;
                    fromAmino(object: _77.GetNodeInfoResponseAmino): _77.GetNodeInfoResponse;
                    toAmino(message: _77.GetNodeInfoResponse): _77.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _77.GetNodeInfoResponseAminoMsg): _77.GetNodeInfoResponse;
                    toAminoMsg(message: _77.GetNodeInfoResponse): _77.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _77.GetNodeInfoResponseProtoMsg): _77.GetNodeInfoResponse;
                    toProto(message: _77.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _77.GetNodeInfoResponse): _77.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _77.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.VersionInfo;
                    fromPartial(object: Partial<_77.VersionInfo>): _77.VersionInfo;
                    fromAmino(object: _77.VersionInfoAmino): _77.VersionInfo;
                    toAmino(message: _77.VersionInfo): _77.VersionInfoAmino;
                    fromAminoMsg(object: _77.VersionInfoAminoMsg): _77.VersionInfo;
                    toAminoMsg(message: _77.VersionInfo): _77.VersionInfoAminoMsg;
                    fromProtoMsg(message: _77.VersionInfoProtoMsg): _77.VersionInfo;
                    toProto(message: _77.VersionInfo): Uint8Array;
                    toProtoMsg(message: _77.VersionInfo): _77.VersionInfoProtoMsg;
                };
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
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _77.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.ABCIQueryRequest;
                    fromPartial(object: Partial<_77.ABCIQueryRequest>): _77.ABCIQueryRequest;
                    fromAmino(object: _77.ABCIQueryRequestAmino): _77.ABCIQueryRequest;
                    toAmino(message: _77.ABCIQueryRequest): _77.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _77.ABCIQueryRequestAminoMsg): _77.ABCIQueryRequest;
                    toAminoMsg(message: _77.ABCIQueryRequest): _77.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _77.ABCIQueryRequestProtoMsg): _77.ABCIQueryRequest;
                    toProto(message: _77.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _77.ABCIQueryRequest): _77.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _77.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.ABCIQueryResponse;
                    fromPartial(object: Partial<_77.ABCIQueryResponse>): _77.ABCIQueryResponse;
                    fromAmino(object: _77.ABCIQueryResponseAmino): _77.ABCIQueryResponse;
                    toAmino(message: _77.ABCIQueryResponse): _77.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _77.ABCIQueryResponseAminoMsg): _77.ABCIQueryResponse;
                    toAminoMsg(message: _77.ABCIQueryResponse): _77.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _77.ABCIQueryResponseProtoMsg): _77.ABCIQueryResponse;
                    toProto(message: _77.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _77.ABCIQueryResponse): _77.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _77.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.ProofOp;
                    fromPartial(object: Partial<_77.ProofOp>): _77.ProofOp;
                    fromAmino(object: _77.ProofOpAmino): _77.ProofOp;
                    toAmino(message: _77.ProofOp): _77.ProofOpAmino;
                    fromAminoMsg(object: _77.ProofOpAminoMsg): _77.ProofOp;
                    toAminoMsg(message: _77.ProofOp): _77.ProofOpAminoMsg;
                    fromProtoMsg(message: _77.ProofOpProtoMsg): _77.ProofOp;
                    toProto(message: _77.ProofOp): Uint8Array;
                    toProtoMsg(message: _77.ProofOp): _77.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _77.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.ProofOps;
                    fromPartial(object: Partial<_77.ProofOps>): _77.ProofOps;
                    fromAmino(object: _77.ProofOpsAmino): _77.ProofOps;
                    toAmino(message: _77.ProofOps): _77.ProofOpsAmino;
                    fromAminoMsg(object: _77.ProofOpsAminoMsg): _77.ProofOps;
                    toAminoMsg(message: _77.ProofOps): _77.ProofOpsAminoMsg;
                    fromProtoMsg(message: _77.ProofOpsProtoMsg): _77.ProofOps;
                    toProto(message: _77.ProofOps): Uint8Array;
                    toProtoMsg(message: _77.ProofOps): _77.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _79.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Coin;
                fromPartial(object: Partial<_79.Coin>): _79.Coin;
                fromAmino(object: _79.CoinAmino): _79.Coin;
                toAmino(message: _79.Coin): _79.CoinAmino;
                fromAminoMsg(object: _79.CoinAminoMsg): _79.Coin;
                toAminoMsg(message: _79.Coin): _79.CoinAminoMsg;
                fromProtoMsg(message: _79.CoinProtoMsg): _79.Coin;
                toProto(message: _79.Coin): Uint8Array;
                toProtoMsg(message: _79.Coin): _79.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _79.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.DecCoin;
                fromPartial(object: Partial<_79.DecCoin>): _79.DecCoin;
                fromAmino(object: _79.DecCoinAmino): _79.DecCoin;
                toAmino(message: _79.DecCoin): _79.DecCoinAmino;
                fromAminoMsg(object: _79.DecCoinAminoMsg): _79.DecCoin;
                toAminoMsg(message: _79.DecCoin): _79.DecCoinAminoMsg;
                fromProtoMsg(message: _79.DecCoinProtoMsg): _79.DecCoin;
                toProto(message: _79.DecCoin): Uint8Array;
                toProtoMsg(message: _79.DecCoin): _79.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _79.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.IntProto;
                fromPartial(object: Partial<_79.IntProto>): _79.IntProto;
                fromAmino(object: _79.IntProtoAmino): _79.IntProto;
                toAmino(message: _79.IntProto): _79.IntProtoAmino;
                fromAminoMsg(object: _79.IntProtoAminoMsg): _79.IntProto;
                toAminoMsg(message: _79.IntProto): _79.IntProtoAminoMsg;
                fromProtoMsg(message: _79.IntProtoProtoMsg): _79.IntProto;
                toProto(message: _79.IntProto): Uint8Array;
                toProtoMsg(message: _79.IntProto): _79.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _79.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.DecProto;
                fromPartial(object: Partial<_79.DecProto>): _79.DecProto;
                fromAmino(object: _79.DecProtoAmino): _79.DecProto;
                toAmino(message: _79.DecProto): _79.DecProtoAmino;
                fromAminoMsg(object: _79.DecProtoAminoMsg): _79.DecProto;
                toAminoMsg(message: _79.DecProto): _79.DecProtoAminoMsg;
                fromProtoMsg(message: _79.DecProtoProtoMsg): _79.DecProto;
                toProto(message: _79.DecProto): Uint8Array;
                toProtoMsg(message: _79.DecProto): _79.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
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
            GenesisOwners: {
                typeUrl: string;
                encode(message: _82.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.GenesisOwners;
                fromPartial(object: Partial<_82.GenesisOwners>): _82.GenesisOwners;
                fromAmino(object: _82.GenesisOwnersAmino): _82.GenesisOwners;
                toAmino(message: _82.GenesisOwners): _82.GenesisOwnersAmino;
                fromAminoMsg(object: _82.GenesisOwnersAminoMsg): _82.GenesisOwners;
                toAminoMsg(message: _82.GenesisOwners): _82.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _82.GenesisOwnersProtoMsg): _82.GenesisOwners;
                toProto(message: _82.GenesisOwners): Uint8Array;
                toProtoMsg(message: _82.GenesisOwners): _82.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _81.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Capability;
                fromPartial(object: Partial<_81.Capability>): _81.Capability;
                fromAmino(object: _81.CapabilityAmino): _81.Capability;
                toAmino(message: _81.Capability): _81.CapabilityAmino;
                fromAminoMsg(object: _81.CapabilityAminoMsg): _81.Capability;
                toAminoMsg(message: _81.Capability): _81.CapabilityAminoMsg;
                fromProtoMsg(message: _81.CapabilityProtoMsg): _81.Capability;
                toProto(message: _81.Capability): Uint8Array;
                toProtoMsg(message: _81.Capability): _81.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _81.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Owner;
                fromPartial(object: Partial<_81.Owner>): _81.Owner;
                fromAmino(object: _81.OwnerAmino): _81.Owner;
                toAmino(message: _81.Owner): _81.OwnerAmino;
                fromAminoMsg(object: _81.OwnerAminoMsg): _81.Owner;
                toAminoMsg(message: _81.Owner): _81.OwnerAminoMsg;
                fromProtoMsg(message: _81.OwnerProtoMsg): _81.Owner;
                toProto(message: _81.Owner): Uint8Array;
                toProtoMsg(message: _81.Owner): _81.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _81.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.CapabilityOwners;
                fromPartial(object: Partial<_81.CapabilityOwners>): _81.CapabilityOwners;
                fromAmino(object: _81.CapabilityOwnersAmino): _81.CapabilityOwners;
                toAmino(message: _81.CapabilityOwners): _81.CapabilityOwnersAmino;
                fromAminoMsg(object: _81.CapabilityOwnersAminoMsg): _81.CapabilityOwners;
                toAminoMsg(message: _81.CapabilityOwners): _81.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _81.CapabilityOwnersProtoMsg): _81.CapabilityOwners;
                toProto(message: _81.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _81.CapabilityOwners): _81.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
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
        const v1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _85.MsgUpdateParams) => _85.MsgUpdateParamsAmino;
                    fromAmino: (object: _85.MsgUpdateParamsAmino) => _85.MsgUpdateParams;
                };
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
        };
    }
    namespace crisis {
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
            MsgClientImpl: typeof _293.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _88.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _88.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _88.MsgVerifyInvariant;
                    };
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _88.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _88.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _88.MsgVerifyInvariant;
                    };
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _88.MsgVerifyInvariant) => _88.MsgVerifyInvariantAmino;
                    fromAmino: (object: _88.MsgVerifyInvariantAmino) => _88.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _88.MsgUpdateParams) => _88.MsgUpdateParamsAmino;
                    fromAmino: (object: _88.MsgUpdateParamsAmino) => _88.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _88.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgVerifyInvariant;
                fromPartial(object: Partial<_88.MsgVerifyInvariant>): _88.MsgVerifyInvariant;
                fromAmino(object: _88.MsgVerifyInvariantAmino): _88.MsgVerifyInvariant;
                toAmino(message: _88.MsgVerifyInvariant): _88.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _88.MsgVerifyInvariantAminoMsg): _88.MsgVerifyInvariant;
                toAminoMsg(message: _88.MsgVerifyInvariant): _88.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _88.MsgVerifyInvariantProtoMsg): _88.MsgVerifyInvariant;
                toProto(message: _88.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _88.MsgVerifyInvariant): _88.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _88.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_88.MsgVerifyInvariantResponse>): _88.MsgVerifyInvariantResponse;
                fromAmino(_: _88.MsgVerifyInvariantResponseAmino): _88.MsgVerifyInvariantResponse;
                toAmino(_: _88.MsgVerifyInvariantResponse): _88.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _88.MsgVerifyInvariantResponseAminoMsg): _88.MsgVerifyInvariantResponse;
                toAminoMsg(message: _88.MsgVerifyInvariantResponse): _88.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _88.MsgVerifyInvariantResponseProtoMsg): _88.MsgVerifyInvariantResponse;
                toProto(message: _88.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _88.MsgVerifyInvariantResponse): _88.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _88.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgUpdateParams;
                fromPartial(object: Partial<_88.MsgUpdateParams>): _88.MsgUpdateParams;
                fromAmino(object: _88.MsgUpdateParamsAmino): _88.MsgUpdateParams;
                toAmino(message: _88.MsgUpdateParams): _88.MsgUpdateParamsAmino;
                fromAminoMsg(object: _88.MsgUpdateParamsAminoMsg): _88.MsgUpdateParams;
                toAminoMsg(message: _88.MsgUpdateParams): _88.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _88.MsgUpdateParamsProtoMsg): _88.MsgUpdateParams;
                toProto(message: _88.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _88.MsgUpdateParams): _88.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _88.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_88.MsgUpdateParamsResponse>): _88.MsgUpdateParamsResponse;
                fromAmino(_: _88.MsgUpdateParamsResponseAmino): _88.MsgUpdateParamsResponse;
                toAmino(_: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _88.MsgUpdateParamsResponseAminoMsg): _88.MsgUpdateParamsResponse;
                toAminoMsg(message: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _88.MsgUpdateParamsResponseProtoMsg): _88.MsgUpdateParamsResponse;
                toProto(message: _88.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _89.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.PubKey;
                fromPartial(object: Partial<_89.PubKey>): _89.PubKey;
                fromAmino(object: _89.PubKeyAmino): _89.PubKey;
                toAmino(message: _89.PubKey): _89.PubKeyAmino;
                fromAminoMsg(object: _89.PubKeyAminoMsg): _89.PubKey;
                toAminoMsg(message: _89.PubKey): _89.PubKeyAminoMsg;
                fromProtoMsg(message: _89.PubKeyProtoMsg): _89.PubKey;
                toProto(message: _89.PubKey): Uint8Array;
                toProtoMsg(message: _89.PubKey): _89.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _89.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.PrivKey;
                fromPartial(object: Partial<_89.PrivKey>): _89.PrivKey;
                fromAmino(object: _89.PrivKeyAmino): _89.PrivKey;
                toAmino(message: _89.PrivKey): _89.PrivKeyAmino;
                fromAminoMsg(object: _89.PrivKeyAminoMsg): _89.PrivKey;
                toAminoMsg(message: _89.PrivKey): _89.PrivKeyAminoMsg;
                fromProtoMsg(message: _89.PrivKeyProtoMsg): _89.PrivKey;
                toProto(message: _89.PrivKey): Uint8Array;
                toProtoMsg(message: _89.PrivKey): _89.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _90.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.BIP44Params;
                    fromPartial(object: Partial<_90.BIP44Params>): _90.BIP44Params;
                    fromAmino(object: _90.BIP44ParamsAmino): _90.BIP44Params;
                    toAmino(message: _90.BIP44Params): _90.BIP44ParamsAmino;
                    fromAminoMsg(object: _90.BIP44ParamsAminoMsg): _90.BIP44Params;
                    toAminoMsg(message: _90.BIP44Params): _90.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _90.BIP44ParamsProtoMsg): _90.BIP44Params;
                    toProto(message: _90.BIP44Params): Uint8Array;
                    toProtoMsg(message: _90.BIP44Params): _90.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _91.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Record;
                    fromPartial(object: Partial<_91.Record>): _91.Record;
                    fromAmino(object: _91.RecordAmino): _91.Record;
                    toAmino(message: _91.Record): _91.RecordAmino;
                    fromAminoMsg(object: _91.RecordAminoMsg): _91.Record;
                    toAminoMsg(message: _91.Record): _91.RecordAminoMsg;
                    fromProtoMsg(message: _91.RecordProtoMsg): _91.Record;
                    toProto(message: _91.Record): Uint8Array;
                    toProtoMsg(message: _91.Record): _91.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _91.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Record_Local;
                    fromPartial(object: Partial<_91.Record_Local>): _91.Record_Local;
                    fromAmino(object: _91.Record_LocalAmino): _91.Record_Local;
                    toAmino(message: _91.Record_Local): _91.Record_LocalAmino;
                    fromAminoMsg(object: _91.Record_LocalAminoMsg): _91.Record_Local;
                    toAminoMsg(message: _91.Record_Local): _91.Record_LocalAminoMsg;
                    fromProtoMsg(message: _91.Record_LocalProtoMsg): _91.Record_Local;
                    toProto(message: _91.Record_Local): Uint8Array;
                    toProtoMsg(message: _91.Record_Local): _91.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _91.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Record_Ledger;
                    fromPartial(object: Partial<_91.Record_Ledger>): _91.Record_Ledger;
                    fromAmino(object: _91.Record_LedgerAmino): _91.Record_Ledger;
                    toAmino(message: _91.Record_Ledger): _91.Record_LedgerAmino;
                    fromAminoMsg(object: _91.Record_LedgerAminoMsg): _91.Record_Ledger;
                    toAminoMsg(message: _91.Record_Ledger): _91.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _91.Record_LedgerProtoMsg): _91.Record_Ledger;
                    toProto(message: _91.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _91.Record_Ledger): _91.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _91.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _91.Record_Multi;
                    fromPartial(_: Partial<_91.Record_Multi>): _91.Record_Multi;
                    fromAmino(_: _91.Record_MultiAmino): _91.Record_Multi;
                    toAmino(_: _91.Record_Multi): _91.Record_MultiAmino;
                    fromAminoMsg(object: _91.Record_MultiAminoMsg): _91.Record_Multi;
                    toAminoMsg(message: _91.Record_Multi): _91.Record_MultiAminoMsg;
                    fromProtoMsg(message: _91.Record_MultiProtoMsg): _91.Record_Multi;
                    toProto(message: _91.Record_Multi): Uint8Array;
                    toProtoMsg(message: _91.Record_Multi): _91.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _91.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _91.Record_Offline;
                    fromPartial(_: Partial<_91.Record_Offline>): _91.Record_Offline;
                    fromAmino(_: _91.Record_OfflineAmino): _91.Record_Offline;
                    toAmino(_: _91.Record_Offline): _91.Record_OfflineAmino;
                    fromAminoMsg(object: _91.Record_OfflineAminoMsg): _91.Record_Offline;
                    toAminoMsg(message: _91.Record_Offline): _91.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _91.Record_OfflineProtoMsg): _91.Record_Offline;
                    toProto(message: _91.Record_Offline): Uint8Array;
                    toProtoMsg(message: _91.Record_Offline): _91.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _92.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.LegacyAminoPubKey;
                fromPartial(object: Partial<_92.LegacyAminoPubKey>): _92.LegacyAminoPubKey;
                fromAmino(object: _92.LegacyAminoPubKeyAmino): _92.LegacyAminoPubKey;
                toAmino(message: _92.LegacyAminoPubKey): _92.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _92.LegacyAminoPubKeyAminoMsg): _92.LegacyAminoPubKey;
                toAminoMsg(message: _92.LegacyAminoPubKey): _92.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _92.LegacyAminoPubKeyProtoMsg): _92.LegacyAminoPubKey;
                toProto(message: _92.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _92.LegacyAminoPubKey): _92.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _93.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.PubKey;
                fromPartial(object: Partial<_93.PubKey>): _93.PubKey;
                fromAmino(object: _93.PubKeyAmino): _93.PubKey;
                toAmino(message: _93.PubKey): _93.PubKeyAmino;
                fromAminoMsg(object: _93.PubKeyAminoMsg): _93.PubKey;
                toAminoMsg(message: _93.PubKey): _93.PubKeyAminoMsg;
                fromProtoMsg(message: _93.PubKeyProtoMsg): _93.PubKey;
                toProto(message: _93.PubKey): Uint8Array;
                toProtoMsg(message: _93.PubKey): _93.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _93.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.PrivKey;
                fromPartial(object: Partial<_93.PrivKey>): _93.PrivKey;
                fromAmino(object: _93.PrivKeyAmino): _93.PrivKey;
                toAmino(message: _93.PrivKey): _93.PrivKeyAmino;
                fromAminoMsg(object: _93.PrivKeyAminoMsg): _93.PrivKey;
                toAminoMsg(message: _93.PrivKey): _93.PrivKeyAminoMsg;
                fromProtoMsg(message: _93.PrivKeyProtoMsg): _93.PrivKey;
                toProto(message: _93.PrivKey): Uint8Array;
                toProtoMsg(message: _93.PrivKey): _93.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
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
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _95.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.Module;
                    fromPartial(object: Partial<_95.Module>): _95.Module;
                    fromAmino(object: _95.ModuleAmino): _95.Module;
                    toAmino(message: _95.Module): _95.ModuleAmino;
                    fromAminoMsg(object: _95.ModuleAminoMsg): _95.Module;
                    toAminoMsg(message: _95.Module): _95.ModuleAminoMsg;
                    fromProtoMsg(message: _95.ModuleProtoMsg): _95.Module;
                    toProto(message: _95.Module): Uint8Array;
                    toProtoMsg(message: _95.Module): _95.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _294.MsgClientImpl;
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                validatorDistributionInfo(request: _98.QueryValidatorDistributionInfoRequest): Promise<_98.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _98.QueryValidatorOutstandingRewardsRequest): Promise<_98.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _98.QueryValidatorCommissionRequest): Promise<_98.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _98.QueryValidatorSlashesRequest): Promise<_98.QueryValidatorSlashesResponse>;
                delegationRewards(request: _98.QueryDelegationRewardsRequest): Promise<_98.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _98.QueryDelegationTotalRewardsRequest): Promise<_98.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _98.QueryDelegatorValidatorsRequest): Promise<_98.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _98.QueryDelegatorWithdrawAddressRequest): Promise<_98.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _98.QueryCommunityPoolRequest): Promise<_98.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _99.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _99.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _99.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _99.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _99.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _99.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _99.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _99.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _99.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _99.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _99.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _99.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _99.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _99.MsgFundCommunityPool;
                    };
                    updateParams(value: _99.MsgUpdateParams): {
                        typeUrl: string;
                        value: _99.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _99.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _99.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _99.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _99.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _99.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _99.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _99.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _99.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _99.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _99.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _99.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _99.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _99.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _99.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _99.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _99.MsgFundCommunityPool;
                    };
                    updateParams(value: _99.MsgUpdateParams): {
                        typeUrl: string;
                        value: _99.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _99.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _99.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _99.MsgSetWithdrawAddress) => _99.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _99.MsgSetWithdrawAddressAmino) => _99.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _99.MsgWithdrawDelegatorReward) => _99.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _99.MsgWithdrawDelegatorRewardAmino) => _99.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _99.MsgWithdrawValidatorCommission) => _99.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _99.MsgWithdrawValidatorCommissionAmino) => _99.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _99.MsgFundCommunityPool) => _99.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _99.MsgFundCommunityPoolAmino) => _99.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _99.MsgUpdateParams) => _99.MsgUpdateParamsAmino;
                    fromAmino: (object: _99.MsgUpdateParamsAmino) => _99.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _99.MsgCommunityPoolSpend) => _99.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _99.MsgCommunityPoolSpendAmino) => _99.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _99.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_99.MsgSetWithdrawAddress>): _99.MsgSetWithdrawAddress;
                fromAmino(object: _99.MsgSetWithdrawAddressAmino): _99.MsgSetWithdrawAddress;
                toAmino(message: _99.MsgSetWithdrawAddress): _99.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _99.MsgSetWithdrawAddressAminoMsg): _99.MsgSetWithdrawAddress;
                toAminoMsg(message: _99.MsgSetWithdrawAddress): _99.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _99.MsgSetWithdrawAddressProtoMsg): _99.MsgSetWithdrawAddress;
                toProto(message: _99.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _99.MsgSetWithdrawAddress): _99.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _99.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_99.MsgSetWithdrawAddressResponse>): _99.MsgSetWithdrawAddressResponse;
                fromAmino(_: _99.MsgSetWithdrawAddressResponseAmino): _99.MsgSetWithdrawAddressResponse;
                toAmino(_: _99.MsgSetWithdrawAddressResponse): _99.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _99.MsgSetWithdrawAddressResponseAminoMsg): _99.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _99.MsgSetWithdrawAddressResponse): _99.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _99.MsgSetWithdrawAddressResponseProtoMsg): _99.MsgSetWithdrawAddressResponse;
                toProto(message: _99.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _99.MsgSetWithdrawAddressResponse): _99.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _99.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_99.MsgWithdrawDelegatorReward>): _99.MsgWithdrawDelegatorReward;
                fromAmino(object: _99.MsgWithdrawDelegatorRewardAmino): _99.MsgWithdrawDelegatorReward;
                toAmino(message: _99.MsgWithdrawDelegatorReward): _99.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _99.MsgWithdrawDelegatorRewardAminoMsg): _99.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _99.MsgWithdrawDelegatorReward): _99.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _99.MsgWithdrawDelegatorRewardProtoMsg): _99.MsgWithdrawDelegatorReward;
                toProto(message: _99.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _99.MsgWithdrawDelegatorReward): _99.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _99.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_99.MsgWithdrawDelegatorRewardResponse>): _99.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _99.MsgWithdrawDelegatorRewardResponseAmino): _99.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _99.MsgWithdrawDelegatorRewardResponse): _99.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _99.MsgWithdrawDelegatorRewardResponseAminoMsg): _99.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _99.MsgWithdrawDelegatorRewardResponse): _99.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _99.MsgWithdrawDelegatorRewardResponseProtoMsg): _99.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _99.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _99.MsgWithdrawDelegatorRewardResponse): _99.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _99.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_99.MsgWithdrawValidatorCommission>): _99.MsgWithdrawValidatorCommission;
                fromAmino(object: _99.MsgWithdrawValidatorCommissionAmino): _99.MsgWithdrawValidatorCommission;
                toAmino(message: _99.MsgWithdrawValidatorCommission): _99.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _99.MsgWithdrawValidatorCommissionAminoMsg): _99.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _99.MsgWithdrawValidatorCommission): _99.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _99.MsgWithdrawValidatorCommissionProtoMsg): _99.MsgWithdrawValidatorCommission;
                toProto(message: _99.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _99.MsgWithdrawValidatorCommission): _99.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _99.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_99.MsgWithdrawValidatorCommissionResponse>): _99.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _99.MsgWithdrawValidatorCommissionResponseAmino): _99.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _99.MsgWithdrawValidatorCommissionResponse): _99.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _99.MsgWithdrawValidatorCommissionResponseAminoMsg): _99.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _99.MsgWithdrawValidatorCommissionResponse): _99.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _99.MsgWithdrawValidatorCommissionResponseProtoMsg): _99.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _99.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _99.MsgWithdrawValidatorCommissionResponse): _99.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _99.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgFundCommunityPool;
                fromPartial(object: Partial<_99.MsgFundCommunityPool>): _99.MsgFundCommunityPool;
                fromAmino(object: _99.MsgFundCommunityPoolAmino): _99.MsgFundCommunityPool;
                toAmino(message: _99.MsgFundCommunityPool): _99.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _99.MsgFundCommunityPoolAminoMsg): _99.MsgFundCommunityPool;
                toAminoMsg(message: _99.MsgFundCommunityPool): _99.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _99.MsgFundCommunityPoolProtoMsg): _99.MsgFundCommunityPool;
                toProto(message: _99.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _99.MsgFundCommunityPool): _99.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _99.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_99.MsgFundCommunityPoolResponse>): _99.MsgFundCommunityPoolResponse;
                fromAmino(_: _99.MsgFundCommunityPoolResponseAmino): _99.MsgFundCommunityPoolResponse;
                toAmino(_: _99.MsgFundCommunityPoolResponse): _99.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _99.MsgFundCommunityPoolResponseAminoMsg): _99.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _99.MsgFundCommunityPoolResponse): _99.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _99.MsgFundCommunityPoolResponseProtoMsg): _99.MsgFundCommunityPoolResponse;
                toProto(message: _99.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _99.MsgFundCommunityPoolResponse): _99.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _99.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgUpdateParams;
                fromPartial(object: Partial<_99.MsgUpdateParams>): _99.MsgUpdateParams;
                fromAmino(object: _99.MsgUpdateParamsAmino): _99.MsgUpdateParams;
                toAmino(message: _99.MsgUpdateParams): _99.MsgUpdateParamsAmino;
                fromAminoMsg(object: _99.MsgUpdateParamsAminoMsg): _99.MsgUpdateParams;
                toAminoMsg(message: _99.MsgUpdateParams): _99.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _99.MsgUpdateParamsProtoMsg): _99.MsgUpdateParams;
                toProto(message: _99.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _99.MsgUpdateParams): _99.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _99.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_99.MsgUpdateParamsResponse>): _99.MsgUpdateParamsResponse;
                fromAmino(_: _99.MsgUpdateParamsResponseAmino): _99.MsgUpdateParamsResponse;
                toAmino(_: _99.MsgUpdateParamsResponse): _99.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _99.MsgUpdateParamsResponseAminoMsg): _99.MsgUpdateParamsResponse;
                toAminoMsg(message: _99.MsgUpdateParamsResponse): _99.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _99.MsgUpdateParamsResponseProtoMsg): _99.MsgUpdateParamsResponse;
                toProto(message: _99.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _99.MsgUpdateParamsResponse): _99.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _99.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_99.MsgCommunityPoolSpend>): _99.MsgCommunityPoolSpend;
                fromAmino(object: _99.MsgCommunityPoolSpendAmino): _99.MsgCommunityPoolSpend;
                toAmino(message: _99.MsgCommunityPoolSpend): _99.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _99.MsgCommunityPoolSpendAminoMsg): _99.MsgCommunityPoolSpend;
                toAminoMsg(message: _99.MsgCommunityPoolSpend): _99.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _99.MsgCommunityPoolSpendProtoMsg): _99.MsgCommunityPoolSpend;
                toProto(message: _99.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _99.MsgCommunityPoolSpend): _99.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _99.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_99.MsgCommunityPoolSpendResponse>): _99.MsgCommunityPoolSpendResponse;
                fromAmino(_: _99.MsgCommunityPoolSpendResponseAmino): _99.MsgCommunityPoolSpendResponse;
                toAmino(_: _99.MsgCommunityPoolSpendResponse): _99.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _99.MsgCommunityPoolSpendResponseAminoMsg): _99.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _99.MsgCommunityPoolSpendResponse): _99.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _99.MsgCommunityPoolSpendResponseProtoMsg): _99.MsgCommunityPoolSpendResponse;
                toProto(message: _99.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _99.MsgCommunityPoolSpendResponse): _99.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _98.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryParamsRequest;
                fromPartial(_: Partial<_98.QueryParamsRequest>): _98.QueryParamsRequest;
                fromAmino(_: _98.QueryParamsRequestAmino): _98.QueryParamsRequest;
                toAmino(_: _98.QueryParamsRequest): _98.QueryParamsRequestAmino;
                fromAminoMsg(object: _98.QueryParamsRequestAminoMsg): _98.QueryParamsRequest;
                toAminoMsg(message: _98.QueryParamsRequest): _98.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryParamsRequestProtoMsg): _98.QueryParamsRequest;
                toProto(message: _98.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryParamsRequest): _98.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _98.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryParamsResponse;
                fromPartial(object: Partial<_98.QueryParamsResponse>): _98.QueryParamsResponse;
                fromAmino(object: _98.QueryParamsResponseAmino): _98.QueryParamsResponse;
                toAmino(message: _98.QueryParamsResponse): _98.QueryParamsResponseAmino;
                fromAminoMsg(object: _98.QueryParamsResponseAminoMsg): _98.QueryParamsResponse;
                toAminoMsg(message: _98.QueryParamsResponse): _98.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryParamsResponseProtoMsg): _98.QueryParamsResponse;
                toProto(message: _98.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryParamsResponse): _98.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _98.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_98.QueryValidatorDistributionInfoRequest>): _98.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _98.QueryValidatorDistributionInfoRequestAmino): _98.QueryValidatorDistributionInfoRequest;
                toAmino(message: _98.QueryValidatorDistributionInfoRequest): _98.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _98.QueryValidatorDistributionInfoRequestAminoMsg): _98.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _98.QueryValidatorDistributionInfoRequest): _98.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorDistributionInfoRequestProtoMsg): _98.QueryValidatorDistributionInfoRequest;
                toProto(message: _98.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorDistributionInfoRequest): _98.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _98.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_98.QueryValidatorDistributionInfoResponse>): _98.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _98.QueryValidatorDistributionInfoResponseAmino): _98.QueryValidatorDistributionInfoResponse;
                toAmino(message: _98.QueryValidatorDistributionInfoResponse): _98.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _98.QueryValidatorDistributionInfoResponseAminoMsg): _98.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _98.QueryValidatorDistributionInfoResponse): _98.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorDistributionInfoResponseProtoMsg): _98.QueryValidatorDistributionInfoResponse;
                toProto(message: _98.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorDistributionInfoResponse): _98.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _98.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_98.QueryValidatorOutstandingRewardsRequest>): _98.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _98.QueryValidatorOutstandingRewardsRequestAmino): _98.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _98.QueryValidatorOutstandingRewardsRequest): _98.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _98.QueryValidatorOutstandingRewardsRequestAminoMsg): _98.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _98.QueryValidatorOutstandingRewardsRequest): _98.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorOutstandingRewardsRequestProtoMsg): _98.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _98.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorOutstandingRewardsRequest): _98.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _98.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_98.QueryValidatorOutstandingRewardsResponse>): _98.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _98.QueryValidatorOutstandingRewardsResponseAmino): _98.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _98.QueryValidatorOutstandingRewardsResponse): _98.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _98.QueryValidatorOutstandingRewardsResponseAminoMsg): _98.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _98.QueryValidatorOutstandingRewardsResponse): _98.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorOutstandingRewardsResponseProtoMsg): _98.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _98.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorOutstandingRewardsResponse): _98.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _98.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_98.QueryValidatorCommissionRequest>): _98.QueryValidatorCommissionRequest;
                fromAmino(object: _98.QueryValidatorCommissionRequestAmino): _98.QueryValidatorCommissionRequest;
                toAmino(message: _98.QueryValidatorCommissionRequest): _98.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _98.QueryValidatorCommissionRequestAminoMsg): _98.QueryValidatorCommissionRequest;
                toAminoMsg(message: _98.QueryValidatorCommissionRequest): _98.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorCommissionRequestProtoMsg): _98.QueryValidatorCommissionRequest;
                toProto(message: _98.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorCommissionRequest): _98.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _98.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_98.QueryValidatorCommissionResponse>): _98.QueryValidatorCommissionResponse;
                fromAmino(object: _98.QueryValidatorCommissionResponseAmino): _98.QueryValidatorCommissionResponse;
                toAmino(message: _98.QueryValidatorCommissionResponse): _98.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _98.QueryValidatorCommissionResponseAminoMsg): _98.QueryValidatorCommissionResponse;
                toAminoMsg(message: _98.QueryValidatorCommissionResponse): _98.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorCommissionResponseProtoMsg): _98.QueryValidatorCommissionResponse;
                toProto(message: _98.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorCommissionResponse): _98.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _98.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_98.QueryValidatorSlashesRequest>): _98.QueryValidatorSlashesRequest;
                fromAmino(object: _98.QueryValidatorSlashesRequestAmino): _98.QueryValidatorSlashesRequest;
                toAmino(message: _98.QueryValidatorSlashesRequest): _98.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _98.QueryValidatorSlashesRequestAminoMsg): _98.QueryValidatorSlashesRequest;
                toAminoMsg(message: _98.QueryValidatorSlashesRequest): _98.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorSlashesRequestProtoMsg): _98.QueryValidatorSlashesRequest;
                toProto(message: _98.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorSlashesRequest): _98.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _98.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_98.QueryValidatorSlashesResponse>): _98.QueryValidatorSlashesResponse;
                fromAmino(object: _98.QueryValidatorSlashesResponseAmino): _98.QueryValidatorSlashesResponse;
                toAmino(message: _98.QueryValidatorSlashesResponse): _98.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _98.QueryValidatorSlashesResponseAminoMsg): _98.QueryValidatorSlashesResponse;
                toAminoMsg(message: _98.QueryValidatorSlashesResponse): _98.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorSlashesResponseProtoMsg): _98.QueryValidatorSlashesResponse;
                toProto(message: _98.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorSlashesResponse): _98.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _98.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_98.QueryDelegationRewardsRequest>): _98.QueryDelegationRewardsRequest;
                fromAmino(object: _98.QueryDelegationRewardsRequestAmino): _98.QueryDelegationRewardsRequest;
                toAmino(message: _98.QueryDelegationRewardsRequest): _98.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _98.QueryDelegationRewardsRequestAminoMsg): _98.QueryDelegationRewardsRequest;
                toAminoMsg(message: _98.QueryDelegationRewardsRequest): _98.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryDelegationRewardsRequestProtoMsg): _98.QueryDelegationRewardsRequest;
                toProto(message: _98.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryDelegationRewardsRequest): _98.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _98.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_98.QueryDelegationRewardsResponse>): _98.QueryDelegationRewardsResponse;
                fromAmino(object: _98.QueryDelegationRewardsResponseAmino): _98.QueryDelegationRewardsResponse;
                toAmino(message: _98.QueryDelegationRewardsResponse): _98.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _98.QueryDelegationRewardsResponseAminoMsg): _98.QueryDelegationRewardsResponse;
                toAminoMsg(message: _98.QueryDelegationRewardsResponse): _98.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryDelegationRewardsResponseProtoMsg): _98.QueryDelegationRewardsResponse;
                toProto(message: _98.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryDelegationRewardsResponse): _98.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _98.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_98.QueryDelegationTotalRewardsRequest>): _98.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _98.QueryDelegationTotalRewardsRequestAmino): _98.QueryDelegationTotalRewardsRequest;
                toAmino(message: _98.QueryDelegationTotalRewardsRequest): _98.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _98.QueryDelegationTotalRewardsRequestAminoMsg): _98.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _98.QueryDelegationTotalRewardsRequest): _98.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryDelegationTotalRewardsRequestProtoMsg): _98.QueryDelegationTotalRewardsRequest;
                toProto(message: _98.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryDelegationTotalRewardsRequest): _98.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _98.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_98.QueryDelegationTotalRewardsResponse>): _98.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _98.QueryDelegationTotalRewardsResponseAmino): _98.QueryDelegationTotalRewardsResponse;
                toAmino(message: _98.QueryDelegationTotalRewardsResponse): _98.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _98.QueryDelegationTotalRewardsResponseAminoMsg): _98.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _98.QueryDelegationTotalRewardsResponse): _98.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryDelegationTotalRewardsResponseProtoMsg): _98.QueryDelegationTotalRewardsResponse;
                toProto(message: _98.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryDelegationTotalRewardsResponse): _98.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_98.QueryDelegatorValidatorsRequest>): _98.QueryDelegatorValidatorsRequest;
                fromAmino(object: _98.QueryDelegatorValidatorsRequestAmino): _98.QueryDelegatorValidatorsRequest;
                toAmino(message: _98.QueryDelegatorValidatorsRequest): _98.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _98.QueryDelegatorValidatorsRequestAminoMsg): _98.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _98.QueryDelegatorValidatorsRequest): _98.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorValidatorsRequestProtoMsg): _98.QueryDelegatorValidatorsRequest;
                toProto(message: _98.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorValidatorsRequest): _98.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_98.QueryDelegatorValidatorsResponse>): _98.QueryDelegatorValidatorsResponse;
                fromAmino(object: _98.QueryDelegatorValidatorsResponseAmino): _98.QueryDelegatorValidatorsResponse;
                toAmino(message: _98.QueryDelegatorValidatorsResponse): _98.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _98.QueryDelegatorValidatorsResponseAminoMsg): _98.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _98.QueryDelegatorValidatorsResponse): _98.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorValidatorsResponseProtoMsg): _98.QueryDelegatorValidatorsResponse;
                toProto(message: _98.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorValidatorsResponse): _98.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_98.QueryDelegatorWithdrawAddressRequest>): _98.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _98.QueryDelegatorWithdrawAddressRequestAmino): _98.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _98.QueryDelegatorWithdrawAddressRequest): _98.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _98.QueryDelegatorWithdrawAddressRequestAminoMsg): _98.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _98.QueryDelegatorWithdrawAddressRequest): _98.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorWithdrawAddressRequestProtoMsg): _98.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _98.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorWithdrawAddressRequest): _98.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_98.QueryDelegatorWithdrawAddressResponse>): _98.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _98.QueryDelegatorWithdrawAddressResponseAmino): _98.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _98.QueryDelegatorWithdrawAddressResponse): _98.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _98.QueryDelegatorWithdrawAddressResponseAminoMsg): _98.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _98.QueryDelegatorWithdrawAddressResponse): _98.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorWithdrawAddressResponseProtoMsg): _98.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _98.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorWithdrawAddressResponse): _98.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _98.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_98.QueryCommunityPoolRequest>): _98.QueryCommunityPoolRequest;
                fromAmino(_: _98.QueryCommunityPoolRequestAmino): _98.QueryCommunityPoolRequest;
                toAmino(_: _98.QueryCommunityPoolRequest): _98.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _98.QueryCommunityPoolRequestAminoMsg): _98.QueryCommunityPoolRequest;
                toAminoMsg(message: _98.QueryCommunityPoolRequest): _98.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _98.QueryCommunityPoolRequestProtoMsg): _98.QueryCommunityPoolRequest;
                toProto(message: _98.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _98.QueryCommunityPoolRequest): _98.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _98.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_98.QueryCommunityPoolResponse>): _98.QueryCommunityPoolResponse;
                fromAmino(object: _98.QueryCommunityPoolResponseAmino): _98.QueryCommunityPoolResponse;
                toAmino(message: _98.QueryCommunityPoolResponse): _98.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _98.QueryCommunityPoolResponseAminoMsg): _98.QueryCommunityPoolResponse;
                toAminoMsg(message: _98.QueryCommunityPoolResponse): _98.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _98.QueryCommunityPoolResponseProtoMsg): _98.QueryCommunityPoolResponse;
                toProto(message: _98.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _98.QueryCommunityPoolResponse): _98.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _97.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_97.DelegatorWithdrawInfo>): _97.DelegatorWithdrawInfo;
                fromAmino(object: _97.DelegatorWithdrawInfoAmino): _97.DelegatorWithdrawInfo;
                toAmino(message: _97.DelegatorWithdrawInfo): _97.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _97.DelegatorWithdrawInfoAminoMsg): _97.DelegatorWithdrawInfo;
                toAminoMsg(message: _97.DelegatorWithdrawInfo): _97.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _97.DelegatorWithdrawInfoProtoMsg): _97.DelegatorWithdrawInfo;
                toProto(message: _97.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _97.DelegatorWithdrawInfo): _97.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _97.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_97.ValidatorOutstandingRewardsRecord>): _97.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _97.ValidatorOutstandingRewardsRecordAmino): _97.ValidatorOutstandingRewardsRecord;
                toAmino(message: _97.ValidatorOutstandingRewardsRecord): _97.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _97.ValidatorOutstandingRewardsRecordAminoMsg): _97.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _97.ValidatorOutstandingRewardsRecord): _97.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _97.ValidatorOutstandingRewardsRecordProtoMsg): _97.ValidatorOutstandingRewardsRecord;
                toProto(message: _97.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _97.ValidatorOutstandingRewardsRecord): _97.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _97.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_97.ValidatorAccumulatedCommissionRecord>): _97.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _97.ValidatorAccumulatedCommissionRecordAmino): _97.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _97.ValidatorAccumulatedCommissionRecord): _97.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _97.ValidatorAccumulatedCommissionRecordAminoMsg): _97.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _97.ValidatorAccumulatedCommissionRecord): _97.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _97.ValidatorAccumulatedCommissionRecordProtoMsg): _97.ValidatorAccumulatedCommissionRecord;
                toProto(message: _97.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _97.ValidatorAccumulatedCommissionRecord): _97.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _97.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_97.ValidatorHistoricalRewardsRecord>): _97.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _97.ValidatorHistoricalRewardsRecordAmino): _97.ValidatorHistoricalRewardsRecord;
                toAmino(message: _97.ValidatorHistoricalRewardsRecord): _97.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _97.ValidatorHistoricalRewardsRecordAminoMsg): _97.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _97.ValidatorHistoricalRewardsRecord): _97.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _97.ValidatorHistoricalRewardsRecordProtoMsg): _97.ValidatorHistoricalRewardsRecord;
                toProto(message: _97.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _97.ValidatorHistoricalRewardsRecord): _97.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _97.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_97.ValidatorCurrentRewardsRecord>): _97.ValidatorCurrentRewardsRecord;
                fromAmino(object: _97.ValidatorCurrentRewardsRecordAmino): _97.ValidatorCurrentRewardsRecord;
                toAmino(message: _97.ValidatorCurrentRewardsRecord): _97.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _97.ValidatorCurrentRewardsRecordAminoMsg): _97.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _97.ValidatorCurrentRewardsRecord): _97.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _97.ValidatorCurrentRewardsRecordProtoMsg): _97.ValidatorCurrentRewardsRecord;
                toProto(message: _97.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _97.ValidatorCurrentRewardsRecord): _97.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _97.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_97.DelegatorStartingInfoRecord>): _97.DelegatorStartingInfoRecord;
                fromAmino(object: _97.DelegatorStartingInfoRecordAmino): _97.DelegatorStartingInfoRecord;
                toAmino(message: _97.DelegatorStartingInfoRecord): _97.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _97.DelegatorStartingInfoRecordAminoMsg): _97.DelegatorStartingInfoRecord;
                toAminoMsg(message: _97.DelegatorStartingInfoRecord): _97.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _97.DelegatorStartingInfoRecordProtoMsg): _97.DelegatorStartingInfoRecord;
                toProto(message: _97.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _97.DelegatorStartingInfoRecord): _97.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _97.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_97.ValidatorSlashEventRecord>): _97.ValidatorSlashEventRecord;
                fromAmino(object: _97.ValidatorSlashEventRecordAmino): _97.ValidatorSlashEventRecord;
                toAmino(message: _97.ValidatorSlashEventRecord): _97.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _97.ValidatorSlashEventRecordAminoMsg): _97.ValidatorSlashEventRecord;
                toAminoMsg(message: _97.ValidatorSlashEventRecord): _97.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _97.ValidatorSlashEventRecordProtoMsg): _97.ValidatorSlashEventRecord;
                toProto(message: _97.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _97.ValidatorSlashEventRecord): _97.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _96.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Params;
                fromPartial(object: Partial<_96.Params>): _96.Params;
                fromAmino(object: _96.ParamsAmino): _96.Params;
                toAmino(message: _96.Params): _96.ParamsAmino;
                fromAminoMsg(object: _96.ParamsAminoMsg): _96.Params;
                toAminoMsg(message: _96.Params): _96.ParamsAminoMsg;
                fromProtoMsg(message: _96.ParamsProtoMsg): _96.Params;
                toProto(message: _96.Params): Uint8Array;
                toProtoMsg(message: _96.Params): _96.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _96.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_96.ValidatorHistoricalRewards>): _96.ValidatorHistoricalRewards;
                fromAmino(object: _96.ValidatorHistoricalRewardsAmino): _96.ValidatorHistoricalRewards;
                toAmino(message: _96.ValidatorHistoricalRewards): _96.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _96.ValidatorHistoricalRewardsAminoMsg): _96.ValidatorHistoricalRewards;
                toAminoMsg(message: _96.ValidatorHistoricalRewards): _96.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _96.ValidatorHistoricalRewardsProtoMsg): _96.ValidatorHistoricalRewards;
                toProto(message: _96.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _96.ValidatorHistoricalRewards): _96.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _96.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.ValidatorCurrentRewards;
                fromPartial(object: Partial<_96.ValidatorCurrentRewards>): _96.ValidatorCurrentRewards;
                fromAmino(object: _96.ValidatorCurrentRewardsAmino): _96.ValidatorCurrentRewards;
                toAmino(message: _96.ValidatorCurrentRewards): _96.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _96.ValidatorCurrentRewardsAminoMsg): _96.ValidatorCurrentRewards;
                toAminoMsg(message: _96.ValidatorCurrentRewards): _96.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _96.ValidatorCurrentRewardsProtoMsg): _96.ValidatorCurrentRewards;
                toProto(message: _96.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _96.ValidatorCurrentRewards): _96.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _96.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_96.ValidatorAccumulatedCommission>): _96.ValidatorAccumulatedCommission;
                fromAmino(object: _96.ValidatorAccumulatedCommissionAmino): _96.ValidatorAccumulatedCommission;
                toAmino(message: _96.ValidatorAccumulatedCommission): _96.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _96.ValidatorAccumulatedCommissionAminoMsg): _96.ValidatorAccumulatedCommission;
                toAminoMsg(message: _96.ValidatorAccumulatedCommission): _96.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _96.ValidatorAccumulatedCommissionProtoMsg): _96.ValidatorAccumulatedCommission;
                toProto(message: _96.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _96.ValidatorAccumulatedCommission): _96.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _96.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_96.ValidatorOutstandingRewards>): _96.ValidatorOutstandingRewards;
                fromAmino(object: _96.ValidatorOutstandingRewardsAmino): _96.ValidatorOutstandingRewards;
                toAmino(message: _96.ValidatorOutstandingRewards): _96.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _96.ValidatorOutstandingRewardsAminoMsg): _96.ValidatorOutstandingRewards;
                toAminoMsg(message: _96.ValidatorOutstandingRewards): _96.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _96.ValidatorOutstandingRewardsProtoMsg): _96.ValidatorOutstandingRewards;
                toProto(message: _96.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _96.ValidatorOutstandingRewards): _96.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _96.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.ValidatorSlashEvent;
                fromPartial(object: Partial<_96.ValidatorSlashEvent>): _96.ValidatorSlashEvent;
                fromAmino(object: _96.ValidatorSlashEventAmino): _96.ValidatorSlashEvent;
                toAmino(message: _96.ValidatorSlashEvent): _96.ValidatorSlashEventAmino;
                fromAminoMsg(object: _96.ValidatorSlashEventAminoMsg): _96.ValidatorSlashEvent;
                toAminoMsg(message: _96.ValidatorSlashEvent): _96.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _96.ValidatorSlashEventProtoMsg): _96.ValidatorSlashEvent;
                toProto(message: _96.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _96.ValidatorSlashEvent): _96.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _96.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.ValidatorSlashEvents;
                fromPartial(object: Partial<_96.ValidatorSlashEvents>): _96.ValidatorSlashEvents;
                fromAmino(object: _96.ValidatorSlashEventsAmino): _96.ValidatorSlashEvents;
                toAmino(message: _96.ValidatorSlashEvents): _96.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _96.ValidatorSlashEventsAminoMsg): _96.ValidatorSlashEvents;
                toAminoMsg(message: _96.ValidatorSlashEvents): _96.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _96.ValidatorSlashEventsProtoMsg): _96.ValidatorSlashEvents;
                toProto(message: _96.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _96.ValidatorSlashEvents): _96.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _96.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.FeePool;
                fromPartial(object: Partial<_96.FeePool>): _96.FeePool;
                fromAmino(object: _96.FeePoolAmino): _96.FeePool;
                toAmino(message: _96.FeePool): _96.FeePoolAmino;
                fromAminoMsg(object: _96.FeePoolAminoMsg): _96.FeePool;
                toAminoMsg(message: _96.FeePool): _96.FeePoolAminoMsg;
                fromProtoMsg(message: _96.FeePoolProtoMsg): _96.FeePool;
                toProto(message: _96.FeePool): Uint8Array;
                toProtoMsg(message: _96.FeePool): _96.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _96.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_96.CommunityPoolSpendProposal>): _96.CommunityPoolSpendProposal;
                fromAmino(object: _96.CommunityPoolSpendProposalAmino): _96.CommunityPoolSpendProposal;
                toAmino(message: _96.CommunityPoolSpendProposal): _96.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _96.CommunityPoolSpendProposalAminoMsg): _96.CommunityPoolSpendProposal;
                toAminoMsg(message: _96.CommunityPoolSpendProposal): _96.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _96.CommunityPoolSpendProposalProtoMsg): _96.CommunityPoolSpendProposal;
                toProto(message: _96.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _96.CommunityPoolSpendProposal): _96.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _96.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.DelegatorStartingInfo;
                fromPartial(object: Partial<_96.DelegatorStartingInfo>): _96.DelegatorStartingInfo;
                fromAmino(object: _96.DelegatorStartingInfoAmino): _96.DelegatorStartingInfo;
                toAmino(message: _96.DelegatorStartingInfo): _96.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _96.DelegatorStartingInfoAminoMsg): _96.DelegatorStartingInfo;
                toAminoMsg(message: _96.DelegatorStartingInfo): _96.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _96.DelegatorStartingInfoProtoMsg): _96.DelegatorStartingInfo;
                toProto(message: _96.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _96.DelegatorStartingInfo): _96.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _96.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.DelegationDelegatorReward;
                fromPartial(object: Partial<_96.DelegationDelegatorReward>): _96.DelegationDelegatorReward;
                fromAmino(object: _96.DelegationDelegatorRewardAmino): _96.DelegationDelegatorReward;
                toAmino(message: _96.DelegationDelegatorReward): _96.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _96.DelegationDelegatorRewardAminoMsg): _96.DelegationDelegatorReward;
                toAminoMsg(message: _96.DelegationDelegatorReward): _96.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _96.DelegationDelegatorRewardProtoMsg): _96.DelegationDelegatorReward;
                toProto(message: _96.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _96.DelegationDelegatorReward): _96.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _96.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_96.CommunityPoolSpendProposalWithDeposit>): _96.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _96.CommunityPoolSpendProposalWithDepositAmino): _96.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _96.CommunityPoolSpendProposalWithDeposit): _96.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _96.CommunityPoolSpendProposalWithDepositAminoMsg): _96.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _96.CommunityPoolSpendProposalWithDeposit): _96.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _96.CommunityPoolSpendProposalWithDepositProtoMsg): _96.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _96.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _96.CommunityPoolSpendProposalWithDeposit): _96.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _100.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _100.Module;
                    fromPartial(_: Partial<_100.Module>): _100.Module;
                    fromAmino(_: _100.ModuleAmino): _100.Module;
                    toAmino(_: _100.Module): _100.ModuleAmino;
                    fromAminoMsg(object: _100.ModuleAminoMsg): _100.Module;
                    toAminoMsg(message: _100.Module): _100.ModuleAminoMsg;
                    fromProtoMsg(message: _100.ModuleProtoMsg): _100.Module;
                    toProto(message: _100.Module): Uint8Array;
                    toProtoMsg(message: _100.Module): _100.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _103.QueryEvidenceRequest): Promise<_103.QueryEvidenceResponse>;
                allEvidence(request?: _103.QueryAllEvidenceRequest): Promise<_103.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _104.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _104.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _104.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _104.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _104.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _104.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _104.MsgSubmitEvidence) => _104.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _104.MsgSubmitEvidenceAmino) => _104.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _104.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgSubmitEvidence;
                fromPartial(object: Partial<_104.MsgSubmitEvidence>): _104.MsgSubmitEvidence;
                fromAmino(object: _104.MsgSubmitEvidenceAmino): _104.MsgSubmitEvidence;
                toAmino(message: _104.MsgSubmitEvidence): _104.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _104.MsgSubmitEvidenceAminoMsg): _104.MsgSubmitEvidence;
                toAminoMsg(message: _104.MsgSubmitEvidence): _104.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _104.MsgSubmitEvidenceProtoMsg): _104.MsgSubmitEvidence;
                toProto(message: _104.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _104.MsgSubmitEvidence): _104.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _104.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_104.MsgSubmitEvidenceResponse>): _104.MsgSubmitEvidenceResponse;
                fromAmino(object: _104.MsgSubmitEvidenceResponseAmino): _104.MsgSubmitEvidenceResponse;
                toAmino(message: _104.MsgSubmitEvidenceResponse): _104.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _104.MsgSubmitEvidenceResponseAminoMsg): _104.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _104.MsgSubmitEvidenceResponse): _104.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _104.MsgSubmitEvidenceResponseProtoMsg): _104.MsgSubmitEvidenceResponse;
                toProto(message: _104.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _104.MsgSubmitEvidenceResponse): _104.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _103.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryEvidenceRequest;
                fromPartial(object: Partial<_103.QueryEvidenceRequest>): _103.QueryEvidenceRequest;
                fromAmino(object: _103.QueryEvidenceRequestAmino): _103.QueryEvidenceRequest;
                toAmino(message: _103.QueryEvidenceRequest): _103.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _103.QueryEvidenceRequestAminoMsg): _103.QueryEvidenceRequest;
                toAminoMsg(message: _103.QueryEvidenceRequest): _103.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _103.QueryEvidenceRequestProtoMsg): _103.QueryEvidenceRequest;
                toProto(message: _103.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _103.QueryEvidenceRequest): _103.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _103.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryEvidenceResponse;
                fromPartial(object: Partial<_103.QueryEvidenceResponse>): _103.QueryEvidenceResponse;
                fromAmino(object: _103.QueryEvidenceResponseAmino): _103.QueryEvidenceResponse;
                toAmino(message: _103.QueryEvidenceResponse): _103.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _103.QueryEvidenceResponseAminoMsg): _103.QueryEvidenceResponse;
                toAminoMsg(message: _103.QueryEvidenceResponse): _103.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _103.QueryEvidenceResponseProtoMsg): _103.QueryEvidenceResponse;
                toProto(message: _103.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _103.QueryEvidenceResponse): _103.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _103.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_103.QueryAllEvidenceRequest>): _103.QueryAllEvidenceRequest;
                fromAmino(object: _103.QueryAllEvidenceRequestAmino): _103.QueryAllEvidenceRequest;
                toAmino(message: _103.QueryAllEvidenceRequest): _103.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _103.QueryAllEvidenceRequestAminoMsg): _103.QueryAllEvidenceRequest;
                toAminoMsg(message: _103.QueryAllEvidenceRequest): _103.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _103.QueryAllEvidenceRequestProtoMsg): _103.QueryAllEvidenceRequest;
                toProto(message: _103.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _103.QueryAllEvidenceRequest): _103.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _103.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_103.QueryAllEvidenceResponse>): _103.QueryAllEvidenceResponse;
                fromAmino(object: _103.QueryAllEvidenceResponseAmino): _103.QueryAllEvidenceResponse;
                toAmino(message: _103.QueryAllEvidenceResponse): _103.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _103.QueryAllEvidenceResponseAminoMsg): _103.QueryAllEvidenceResponse;
                toAminoMsg(message: _103.QueryAllEvidenceResponse): _103.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _103.QueryAllEvidenceResponseProtoMsg): _103.QueryAllEvidenceResponse;
                toProto(message: _103.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _103.QueryAllEvidenceResponse): _103.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _101.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.Equivocation;
                fromPartial(object: Partial<_101.Equivocation>): _101.Equivocation;
                fromAmino(object: _101.EquivocationAmino): _101.Equivocation;
                toAmino(message: _101.Equivocation): _101.EquivocationAmino;
                fromAminoMsg(object: _101.EquivocationAminoMsg): _101.Equivocation;
                toAminoMsg(message: _101.Equivocation): _101.EquivocationAminoMsg;
                fromProtoMsg(message: _101.EquivocationProtoMsg): _101.Equivocation;
                toProto(message: _101.Equivocation): Uint8Array;
                toProtoMsg(message: _101.Equivocation): _101.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
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
            MsgClientImpl: typeof _296.MsgClientImpl;
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _108.QueryAllowanceRequest): Promise<_108.QueryAllowanceResponse>;
                allowances(request: _108.QueryAllowancesRequest): Promise<_108.QueryAllowancesResponse>;
                allowancesByGranter(request: _108.QueryAllowancesByGranterRequest): Promise<_108.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _109.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _109.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _109.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _109.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _109.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _109.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _109.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _109.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _109.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _109.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _109.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _109.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _109.MsgGrantAllowance) => _109.MsgGrantAllowanceAmino;
                    fromAmino: (object: _109.MsgGrantAllowanceAmino) => _109.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _109.MsgRevokeAllowance) => _109.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _109.MsgRevokeAllowanceAmino) => _109.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _109.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgGrantAllowance;
                fromPartial(object: Partial<_109.MsgGrantAllowance>): _109.MsgGrantAllowance;
                fromAmino(object: _109.MsgGrantAllowanceAmino): _109.MsgGrantAllowance;
                toAmino(message: _109.MsgGrantAllowance): _109.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _109.MsgGrantAllowanceAminoMsg): _109.MsgGrantAllowance;
                toAminoMsg(message: _109.MsgGrantAllowance): _109.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _109.MsgGrantAllowanceProtoMsg): _109.MsgGrantAllowance;
                toProto(message: _109.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _109.MsgGrantAllowance): _109.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _109.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_109.MsgGrantAllowanceResponse>): _109.MsgGrantAllowanceResponse;
                fromAmino(_: _109.MsgGrantAllowanceResponseAmino): _109.MsgGrantAllowanceResponse;
                toAmino(_: _109.MsgGrantAllowanceResponse): _109.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _109.MsgGrantAllowanceResponseAminoMsg): _109.MsgGrantAllowanceResponse;
                toAminoMsg(message: _109.MsgGrantAllowanceResponse): _109.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _109.MsgGrantAllowanceResponseProtoMsg): _109.MsgGrantAllowanceResponse;
                toProto(message: _109.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _109.MsgGrantAllowanceResponse): _109.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _109.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgRevokeAllowance;
                fromPartial(object: Partial<_109.MsgRevokeAllowance>): _109.MsgRevokeAllowance;
                fromAmino(object: _109.MsgRevokeAllowanceAmino): _109.MsgRevokeAllowance;
                toAmino(message: _109.MsgRevokeAllowance): _109.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _109.MsgRevokeAllowanceAminoMsg): _109.MsgRevokeAllowance;
                toAminoMsg(message: _109.MsgRevokeAllowance): _109.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _109.MsgRevokeAllowanceProtoMsg): _109.MsgRevokeAllowance;
                toProto(message: _109.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _109.MsgRevokeAllowance): _109.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _109.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_109.MsgRevokeAllowanceResponse>): _109.MsgRevokeAllowanceResponse;
                fromAmino(_: _109.MsgRevokeAllowanceResponseAmino): _109.MsgRevokeAllowanceResponse;
                toAmino(_: _109.MsgRevokeAllowanceResponse): _109.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _109.MsgRevokeAllowanceResponseAminoMsg): _109.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _109.MsgRevokeAllowanceResponse): _109.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _109.MsgRevokeAllowanceResponseProtoMsg): _109.MsgRevokeAllowanceResponse;
                toProto(message: _109.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _109.MsgRevokeAllowanceResponse): _109.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _106.BasicAllowance | _106.PeriodicAllowance | _106.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _108.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAllowanceRequest;
                fromPartial(object: Partial<_108.QueryAllowanceRequest>): _108.QueryAllowanceRequest;
                fromAmino(object: _108.QueryAllowanceRequestAmino): _108.QueryAllowanceRequest;
                toAmino(message: _108.QueryAllowanceRequest): _108.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _108.QueryAllowanceRequestAminoMsg): _108.QueryAllowanceRequest;
                toAminoMsg(message: _108.QueryAllowanceRequest): _108.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _108.QueryAllowanceRequestProtoMsg): _108.QueryAllowanceRequest;
                toProto(message: _108.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _108.QueryAllowanceRequest): _108.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _108.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAllowanceResponse;
                fromPartial(object: Partial<_108.QueryAllowanceResponse>): _108.QueryAllowanceResponse;
                fromAmino(object: _108.QueryAllowanceResponseAmino): _108.QueryAllowanceResponse;
                toAmino(message: _108.QueryAllowanceResponse): _108.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _108.QueryAllowanceResponseAminoMsg): _108.QueryAllowanceResponse;
                toAminoMsg(message: _108.QueryAllowanceResponse): _108.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _108.QueryAllowanceResponseProtoMsg): _108.QueryAllowanceResponse;
                toProto(message: _108.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _108.QueryAllowanceResponse): _108.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _108.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAllowancesRequest;
                fromPartial(object: Partial<_108.QueryAllowancesRequest>): _108.QueryAllowancesRequest;
                fromAmino(object: _108.QueryAllowancesRequestAmino): _108.QueryAllowancesRequest;
                toAmino(message: _108.QueryAllowancesRequest): _108.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _108.QueryAllowancesRequestAminoMsg): _108.QueryAllowancesRequest;
                toAminoMsg(message: _108.QueryAllowancesRequest): _108.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _108.QueryAllowancesRequestProtoMsg): _108.QueryAllowancesRequest;
                toProto(message: _108.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _108.QueryAllowancesRequest): _108.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _108.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAllowancesResponse;
                fromPartial(object: Partial<_108.QueryAllowancesResponse>): _108.QueryAllowancesResponse;
                fromAmino(object: _108.QueryAllowancesResponseAmino): _108.QueryAllowancesResponse;
                toAmino(message: _108.QueryAllowancesResponse): _108.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _108.QueryAllowancesResponseAminoMsg): _108.QueryAllowancesResponse;
                toAminoMsg(message: _108.QueryAllowancesResponse): _108.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _108.QueryAllowancesResponseProtoMsg): _108.QueryAllowancesResponse;
                toProto(message: _108.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _108.QueryAllowancesResponse): _108.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _108.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_108.QueryAllowancesByGranterRequest>): _108.QueryAllowancesByGranterRequest;
                fromAmino(object: _108.QueryAllowancesByGranterRequestAmino): _108.QueryAllowancesByGranterRequest;
                toAmino(message: _108.QueryAllowancesByGranterRequest): _108.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _108.QueryAllowancesByGranterRequestAminoMsg): _108.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _108.QueryAllowancesByGranterRequest): _108.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _108.QueryAllowancesByGranterRequestProtoMsg): _108.QueryAllowancesByGranterRequest;
                toProto(message: _108.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _108.QueryAllowancesByGranterRequest): _108.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _108.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_108.QueryAllowancesByGranterResponse>): _108.QueryAllowancesByGranterResponse;
                fromAmino(object: _108.QueryAllowancesByGranterResponseAmino): _108.QueryAllowancesByGranterResponse;
                toAmino(message: _108.QueryAllowancesByGranterResponse): _108.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _108.QueryAllowancesByGranterResponseAminoMsg): _108.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _108.QueryAllowancesByGranterResponse): _108.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _108.QueryAllowancesByGranterResponseProtoMsg): _108.QueryAllowancesByGranterResponse;
                toProto(message: _108.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _108.QueryAllowancesByGranterResponse): _108.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _106.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.BasicAllowance;
                fromPartial(object: Partial<_106.BasicAllowance>): _106.BasicAllowance;
                fromAmino(object: _106.BasicAllowanceAmino): _106.BasicAllowance;
                toAmino(message: _106.BasicAllowance): _106.BasicAllowanceAmino;
                fromAminoMsg(object: _106.BasicAllowanceAminoMsg): _106.BasicAllowance;
                toAminoMsg(message: _106.BasicAllowance): _106.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _106.BasicAllowanceProtoMsg): _106.BasicAllowance;
                toProto(message: _106.BasicAllowance): Uint8Array;
                toProtoMsg(message: _106.BasicAllowance): _106.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _106.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.PeriodicAllowance;
                fromPartial(object: Partial<_106.PeriodicAllowance>): _106.PeriodicAllowance;
                fromAmino(object: _106.PeriodicAllowanceAmino): _106.PeriodicAllowance;
                toAmino(message: _106.PeriodicAllowance): _106.PeriodicAllowanceAmino;
                fromAminoMsg(object: _106.PeriodicAllowanceAminoMsg): _106.PeriodicAllowance;
                toAminoMsg(message: _106.PeriodicAllowance): _106.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _106.PeriodicAllowanceProtoMsg): _106.PeriodicAllowance;
                toProto(message: _106.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _106.PeriodicAllowance): _106.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _106.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.AllowedMsgAllowance;
                fromPartial(object: Partial<_106.AllowedMsgAllowance>): _106.AllowedMsgAllowance;
                fromAmino(object: _106.AllowedMsgAllowanceAmino): _106.AllowedMsgAllowance;
                toAmino(message: _106.AllowedMsgAllowance): _106.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _106.AllowedMsgAllowanceAminoMsg): _106.AllowedMsgAllowance;
                toAminoMsg(message: _106.AllowedMsgAllowance): _106.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _106.AllowedMsgAllowanceProtoMsg): _106.AllowedMsgAllowance;
                toProto(message: _106.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _106.AllowedMsgAllowance): _106.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _106.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Grant;
                fromPartial(object: Partial<_106.Grant>): _106.Grant;
                fromAmino(object: _106.GrantAmino): _106.Grant;
                toAmino(message: _106.Grant): _106.GrantAmino;
                fromAminoMsg(object: _106.GrantAminoMsg): _106.Grant;
                toAminoMsg(message: _106.Grant): _106.GrantAminoMsg;
                fromProtoMsg(message: _106.GrantProtoMsg): _106.Grant;
                toProto(message: _106.Grant): Uint8Array;
                toProtoMsg(message: _106.Grant): _106.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
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
    namespace gov {
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
        const v1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _278.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _115.QueryProposalRequest): Promise<_115.QueryProposalResponse>;
                proposals(request: _115.QueryProposalsRequest): Promise<_115.QueryProposalsResponse>;
                vote(request: _115.QueryVoteRequest): Promise<_115.QueryVoteResponse>;
                votes(request: _115.QueryVotesRequest): Promise<_115.QueryVotesResponse>;
                params(request: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                deposit(request: _115.QueryDepositRequest): Promise<_115.QueryDepositResponse>;
                deposits(request: _115.QueryDepositsRequest): Promise<_115.QueryDepositsResponse>;
                tallyResult(request: _115.QueryTallyResultRequest): Promise<_115.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _116.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _116.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _116.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _116.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _116.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _116.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _116.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _116.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _116.MsgExecLegacyContent;
                    };
                    vote(value: _116.MsgVote): {
                        typeUrl: string;
                        value: _116.MsgVote;
                    };
                    voteWeighted(value: _116.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _116.MsgVoteWeighted;
                    };
                    deposit(value: _116.MsgDeposit): {
                        typeUrl: string;
                        value: _116.MsgDeposit;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _116.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _116.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _116.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _116.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _116.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _116.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _116.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _116.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _116.MsgExecLegacyContent;
                    };
                    vote(value: _116.MsgVote): {
                        typeUrl: string;
                        value: _116.MsgVote;
                    };
                    voteWeighted(value: _116.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _116.MsgVoteWeighted;
                    };
                    deposit(value: _116.MsgDeposit): {
                        typeUrl: string;
                        value: _116.MsgDeposit;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _116.MsgSubmitProposal) => _116.MsgSubmitProposalAmino;
                    fromAmino: (object: _116.MsgSubmitProposalAmino) => _116.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _116.MsgExecLegacyContent) => _116.MsgExecLegacyContentAmino;
                    fromAmino: (object: _116.MsgExecLegacyContentAmino) => _116.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _116.MsgVote) => _116.MsgVoteAmino;
                    fromAmino: (object: _116.MsgVoteAmino) => _116.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _116.MsgVoteWeighted) => _116.MsgVoteWeightedAmino;
                    fromAmino: (object: _116.MsgVoteWeightedAmino) => _116.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _116.MsgDeposit) => _116.MsgDepositAmino;
                    fromAmino: (object: _116.MsgDepositAmino) => _116.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _116.MsgUpdateParams) => _116.MsgUpdateParamsAmino;
                    fromAmino: (object: _116.MsgUpdateParamsAmino) => _116.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _116.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.MsgSubmitProposal;
                fromPartial(object: Partial<_116.MsgSubmitProposal>): _116.MsgSubmitProposal;
                fromAmino(object: _116.MsgSubmitProposalAmino): _116.MsgSubmitProposal;
                toAmino(message: _116.MsgSubmitProposal): _116.MsgSubmitProposalAmino;
                fromAminoMsg(object: _116.MsgSubmitProposalAminoMsg): _116.MsgSubmitProposal;
                toAminoMsg(message: _116.MsgSubmitProposal): _116.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _116.MsgSubmitProposalProtoMsg): _116.MsgSubmitProposal;
                toProto(message: _116.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _116.MsgSubmitProposal): _116.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _116.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_116.MsgSubmitProposalResponse>): _116.MsgSubmitProposalResponse;
                fromAmino(object: _116.MsgSubmitProposalResponseAmino): _116.MsgSubmitProposalResponse;
                toAmino(message: _116.MsgSubmitProposalResponse): _116.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _116.MsgSubmitProposalResponseAminoMsg): _116.MsgSubmitProposalResponse;
                toAminoMsg(message: _116.MsgSubmitProposalResponse): _116.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _116.MsgSubmitProposalResponseProtoMsg): _116.MsgSubmitProposalResponse;
                toProto(message: _116.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _116.MsgSubmitProposalResponse): _116.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _116.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.MsgExecLegacyContent;
                fromPartial(object: Partial<_116.MsgExecLegacyContent>): _116.MsgExecLegacyContent;
                fromAmino(object: _116.MsgExecLegacyContentAmino): _116.MsgExecLegacyContent;
                toAmino(message: _116.MsgExecLegacyContent): _116.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _116.MsgExecLegacyContentAminoMsg): _116.MsgExecLegacyContent;
                toAminoMsg(message: _116.MsgExecLegacyContent): _116.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _116.MsgExecLegacyContentProtoMsg): _116.MsgExecLegacyContent;
                toProto(message: _116.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _116.MsgExecLegacyContent): _116.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _116.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _116.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_116.MsgExecLegacyContentResponse>): _116.MsgExecLegacyContentResponse;
                fromAmino(_: _116.MsgExecLegacyContentResponseAmino): _116.MsgExecLegacyContentResponse;
                toAmino(_: _116.MsgExecLegacyContentResponse): _116.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _116.MsgExecLegacyContentResponseAminoMsg): _116.MsgExecLegacyContentResponse;
                toAminoMsg(message: _116.MsgExecLegacyContentResponse): _116.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _116.MsgExecLegacyContentResponseProtoMsg): _116.MsgExecLegacyContentResponse;
                toProto(message: _116.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _116.MsgExecLegacyContentResponse): _116.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _116.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.MsgVote;
                fromPartial(object: Partial<_116.MsgVote>): _116.MsgVote;
                fromAmino(object: _116.MsgVoteAmino): _116.MsgVote;
                toAmino(message: _116.MsgVote): _116.MsgVoteAmino;
                fromAminoMsg(object: _116.MsgVoteAminoMsg): _116.MsgVote;
                toAminoMsg(message: _116.MsgVote): _116.MsgVoteAminoMsg;
                fromProtoMsg(message: _116.MsgVoteProtoMsg): _116.MsgVote;
                toProto(message: _116.MsgVote): Uint8Array;
                toProtoMsg(message: _116.MsgVote): _116.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _116.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _116.MsgVoteResponse;
                fromPartial(_: Partial<_116.MsgVoteResponse>): _116.MsgVoteResponse;
                fromAmino(_: _116.MsgVoteResponseAmino): _116.MsgVoteResponse;
                toAmino(_: _116.MsgVoteResponse): _116.MsgVoteResponseAmino;
                fromAminoMsg(object: _116.MsgVoteResponseAminoMsg): _116.MsgVoteResponse;
                toAminoMsg(message: _116.MsgVoteResponse): _116.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _116.MsgVoteResponseProtoMsg): _116.MsgVoteResponse;
                toProto(message: _116.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _116.MsgVoteResponse): _116.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _116.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.MsgVoteWeighted;
                fromPartial(object: Partial<_116.MsgVoteWeighted>): _116.MsgVoteWeighted;
                fromAmino(object: _116.MsgVoteWeightedAmino): _116.MsgVoteWeighted;
                toAmino(message: _116.MsgVoteWeighted): _116.MsgVoteWeightedAmino;
                fromAminoMsg(object: _116.MsgVoteWeightedAminoMsg): _116.MsgVoteWeighted;
                toAminoMsg(message: _116.MsgVoteWeighted): _116.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _116.MsgVoteWeightedProtoMsg): _116.MsgVoteWeighted;
                toProto(message: _116.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _116.MsgVoteWeighted): _116.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _116.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _116.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_116.MsgVoteWeightedResponse>): _116.MsgVoteWeightedResponse;
                fromAmino(_: _116.MsgVoteWeightedResponseAmino): _116.MsgVoteWeightedResponse;
                toAmino(_: _116.MsgVoteWeightedResponse): _116.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _116.MsgVoteWeightedResponseAminoMsg): _116.MsgVoteWeightedResponse;
                toAminoMsg(message: _116.MsgVoteWeightedResponse): _116.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _116.MsgVoteWeightedResponseProtoMsg): _116.MsgVoteWeightedResponse;
                toProto(message: _116.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _116.MsgVoteWeightedResponse): _116.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _116.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.MsgDeposit;
                fromPartial(object: Partial<_116.MsgDeposit>): _116.MsgDeposit;
                fromAmino(object: _116.MsgDepositAmino): _116.MsgDeposit;
                toAmino(message: _116.MsgDeposit): _116.MsgDepositAmino;
                fromAminoMsg(object: _116.MsgDepositAminoMsg): _116.MsgDeposit;
                toAminoMsg(message: _116.MsgDeposit): _116.MsgDepositAminoMsg;
                fromProtoMsg(message: _116.MsgDepositProtoMsg): _116.MsgDeposit;
                toProto(message: _116.MsgDeposit): Uint8Array;
                toProtoMsg(message: _116.MsgDeposit): _116.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _116.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _116.MsgDepositResponse;
                fromPartial(_: Partial<_116.MsgDepositResponse>): _116.MsgDepositResponse;
                fromAmino(_: _116.MsgDepositResponseAmino): _116.MsgDepositResponse;
                toAmino(_: _116.MsgDepositResponse): _116.MsgDepositResponseAmino;
                fromAminoMsg(object: _116.MsgDepositResponseAminoMsg): _116.MsgDepositResponse;
                toAminoMsg(message: _116.MsgDepositResponse): _116.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _116.MsgDepositResponseProtoMsg): _116.MsgDepositResponse;
                toProto(message: _116.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _116.MsgDepositResponse): _116.MsgDepositResponseProtoMsg;
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
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _96.CommunityPoolSpendProposal | _96.CommunityPoolSpendProposalWithDeposit | _144.ParameterChangeProposal | _166.SoftwareUpgradeProposal | _166.CancelSoftwareUpgradeProposal | _118.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _115.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryProposalRequest;
                fromPartial(object: Partial<_115.QueryProposalRequest>): _115.QueryProposalRequest;
                fromAmino(object: _115.QueryProposalRequestAmino): _115.QueryProposalRequest;
                toAmino(message: _115.QueryProposalRequest): _115.QueryProposalRequestAmino;
                fromAminoMsg(object: _115.QueryProposalRequestAminoMsg): _115.QueryProposalRequest;
                toAminoMsg(message: _115.QueryProposalRequest): _115.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _115.QueryProposalRequestProtoMsg): _115.QueryProposalRequest;
                toProto(message: _115.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _115.QueryProposalRequest): _115.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _115.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryProposalResponse;
                fromPartial(object: Partial<_115.QueryProposalResponse>): _115.QueryProposalResponse;
                fromAmino(object: _115.QueryProposalResponseAmino): _115.QueryProposalResponse;
                toAmino(message: _115.QueryProposalResponse): _115.QueryProposalResponseAmino;
                fromAminoMsg(object: _115.QueryProposalResponseAminoMsg): _115.QueryProposalResponse;
                toAminoMsg(message: _115.QueryProposalResponse): _115.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _115.QueryProposalResponseProtoMsg): _115.QueryProposalResponse;
                toProto(message: _115.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _115.QueryProposalResponse): _115.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _115.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryProposalsRequest;
                fromPartial(object: Partial<_115.QueryProposalsRequest>): _115.QueryProposalsRequest;
                fromAmino(object: _115.QueryProposalsRequestAmino): _115.QueryProposalsRequest;
                toAmino(message: _115.QueryProposalsRequest): _115.QueryProposalsRequestAmino;
                fromAminoMsg(object: _115.QueryProposalsRequestAminoMsg): _115.QueryProposalsRequest;
                toAminoMsg(message: _115.QueryProposalsRequest): _115.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _115.QueryProposalsRequestProtoMsg): _115.QueryProposalsRequest;
                toProto(message: _115.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _115.QueryProposalsRequest): _115.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _115.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryProposalsResponse;
                fromPartial(object: Partial<_115.QueryProposalsResponse>): _115.QueryProposalsResponse;
                fromAmino(object: _115.QueryProposalsResponseAmino): _115.QueryProposalsResponse;
                toAmino(message: _115.QueryProposalsResponse): _115.QueryProposalsResponseAmino;
                fromAminoMsg(object: _115.QueryProposalsResponseAminoMsg): _115.QueryProposalsResponse;
                toAminoMsg(message: _115.QueryProposalsResponse): _115.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _115.QueryProposalsResponseProtoMsg): _115.QueryProposalsResponse;
                toProto(message: _115.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _115.QueryProposalsResponse): _115.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _115.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryVoteRequest;
                fromPartial(object: Partial<_115.QueryVoteRequest>): _115.QueryVoteRequest;
                fromAmino(object: _115.QueryVoteRequestAmino): _115.QueryVoteRequest;
                toAmino(message: _115.QueryVoteRequest): _115.QueryVoteRequestAmino;
                fromAminoMsg(object: _115.QueryVoteRequestAminoMsg): _115.QueryVoteRequest;
                toAminoMsg(message: _115.QueryVoteRequest): _115.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _115.QueryVoteRequestProtoMsg): _115.QueryVoteRequest;
                toProto(message: _115.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _115.QueryVoteRequest): _115.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _115.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryVoteResponse;
                fromPartial(object: Partial<_115.QueryVoteResponse>): _115.QueryVoteResponse;
                fromAmino(object: _115.QueryVoteResponseAmino): _115.QueryVoteResponse;
                toAmino(message: _115.QueryVoteResponse): _115.QueryVoteResponseAmino;
                fromAminoMsg(object: _115.QueryVoteResponseAminoMsg): _115.QueryVoteResponse;
                toAminoMsg(message: _115.QueryVoteResponse): _115.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _115.QueryVoteResponseProtoMsg): _115.QueryVoteResponse;
                toProto(message: _115.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _115.QueryVoteResponse): _115.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _115.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryVotesRequest;
                fromPartial(object: Partial<_115.QueryVotesRequest>): _115.QueryVotesRequest;
                fromAmino(object: _115.QueryVotesRequestAmino): _115.QueryVotesRequest;
                toAmino(message: _115.QueryVotesRequest): _115.QueryVotesRequestAmino;
                fromAminoMsg(object: _115.QueryVotesRequestAminoMsg): _115.QueryVotesRequest;
                toAminoMsg(message: _115.QueryVotesRequest): _115.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _115.QueryVotesRequestProtoMsg): _115.QueryVotesRequest;
                toProto(message: _115.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _115.QueryVotesRequest): _115.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _115.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryVotesResponse;
                fromPartial(object: Partial<_115.QueryVotesResponse>): _115.QueryVotesResponse;
                fromAmino(object: _115.QueryVotesResponseAmino): _115.QueryVotesResponse;
                toAmino(message: _115.QueryVotesResponse): _115.QueryVotesResponseAmino;
                fromAminoMsg(object: _115.QueryVotesResponseAminoMsg): _115.QueryVotesResponse;
                toAminoMsg(message: _115.QueryVotesResponse): _115.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _115.QueryVotesResponseProtoMsg): _115.QueryVotesResponse;
                toProto(message: _115.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _115.QueryVotesResponse): _115.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _115.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryParamsRequest;
                fromPartial(object: Partial<_115.QueryParamsRequest>): _115.QueryParamsRequest;
                fromAmino(object: _115.QueryParamsRequestAmino): _115.QueryParamsRequest;
                toAmino(message: _115.QueryParamsRequest): _115.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _115.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryDepositRequest;
                fromPartial(object: Partial<_115.QueryDepositRequest>): _115.QueryDepositRequest;
                fromAmino(object: _115.QueryDepositRequestAmino): _115.QueryDepositRequest;
                toAmino(message: _115.QueryDepositRequest): _115.QueryDepositRequestAmino;
                fromAminoMsg(object: _115.QueryDepositRequestAminoMsg): _115.QueryDepositRequest;
                toAminoMsg(message: _115.QueryDepositRequest): _115.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _115.QueryDepositRequestProtoMsg): _115.QueryDepositRequest;
                toProto(message: _115.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _115.QueryDepositRequest): _115.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _115.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryDepositResponse;
                fromPartial(object: Partial<_115.QueryDepositResponse>): _115.QueryDepositResponse;
                fromAmino(object: _115.QueryDepositResponseAmino): _115.QueryDepositResponse;
                toAmino(message: _115.QueryDepositResponse): _115.QueryDepositResponseAmino;
                fromAminoMsg(object: _115.QueryDepositResponseAminoMsg): _115.QueryDepositResponse;
                toAminoMsg(message: _115.QueryDepositResponse): _115.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _115.QueryDepositResponseProtoMsg): _115.QueryDepositResponse;
                toProto(message: _115.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _115.QueryDepositResponse): _115.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _115.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryDepositsRequest;
                fromPartial(object: Partial<_115.QueryDepositsRequest>): _115.QueryDepositsRequest;
                fromAmino(object: _115.QueryDepositsRequestAmino): _115.QueryDepositsRequest;
                toAmino(message: _115.QueryDepositsRequest): _115.QueryDepositsRequestAmino;
                fromAminoMsg(object: _115.QueryDepositsRequestAminoMsg): _115.QueryDepositsRequest;
                toAminoMsg(message: _115.QueryDepositsRequest): _115.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _115.QueryDepositsRequestProtoMsg): _115.QueryDepositsRequest;
                toProto(message: _115.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _115.QueryDepositsRequest): _115.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _115.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryDepositsResponse;
                fromPartial(object: Partial<_115.QueryDepositsResponse>): _115.QueryDepositsResponse;
                fromAmino(object: _115.QueryDepositsResponseAmino): _115.QueryDepositsResponse;
                toAmino(message: _115.QueryDepositsResponse): _115.QueryDepositsResponseAmino;
                fromAminoMsg(object: _115.QueryDepositsResponseAminoMsg): _115.QueryDepositsResponse;
                toAminoMsg(message: _115.QueryDepositsResponse): _115.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _115.QueryDepositsResponseProtoMsg): _115.QueryDepositsResponse;
                toProto(message: _115.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _115.QueryDepositsResponse): _115.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _115.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryTallyResultRequest;
                fromPartial(object: Partial<_115.QueryTallyResultRequest>): _115.QueryTallyResultRequest;
                fromAmino(object: _115.QueryTallyResultRequestAmino): _115.QueryTallyResultRequest;
                toAmino(message: _115.QueryTallyResultRequest): _115.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _115.QueryTallyResultRequestAminoMsg): _115.QueryTallyResultRequest;
                toAminoMsg(message: _115.QueryTallyResultRequest): _115.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _115.QueryTallyResultRequestProtoMsg): _115.QueryTallyResultRequest;
                toProto(message: _115.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _115.QueryTallyResultRequest): _115.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _115.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryTallyResultResponse;
                fromPartial(object: Partial<_115.QueryTallyResultResponse>): _115.QueryTallyResultResponse;
                fromAmino(object: _115.QueryTallyResultResponseAmino): _115.QueryTallyResultResponse;
                toAmino(message: _115.QueryTallyResultResponse): _115.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _115.QueryTallyResultResponseAminoMsg): _115.QueryTallyResultResponse;
                toAminoMsg(message: _115.QueryTallyResultResponse): _115.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _115.QueryTallyResultResponseProtoMsg): _115.QueryTallyResultResponse;
                toProto(message: _115.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _115.QueryTallyResultResponse): _115.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _114.VoteOption;
            voteOptionToJSON(object: _114.VoteOption): string;
            proposalStatusFromJSON(object: any): _114.ProposalStatus;
            proposalStatusToJSON(object: _114.ProposalStatus): string;
            VoteOption: typeof _114.VoteOption;
            VoteOptionSDKType: typeof _114.VoteOption;
            VoteOptionAmino: typeof _114.VoteOption;
            ProposalStatus: typeof _114.ProposalStatus;
            ProposalStatusSDKType: typeof _114.ProposalStatus;
            ProposalStatusAmino: typeof _114.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _114.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.WeightedVoteOption;
                fromPartial(object: Partial<_114.WeightedVoteOption>): _114.WeightedVoteOption;
                fromAmino(object: _114.WeightedVoteOptionAmino): _114.WeightedVoteOption;
                toAmino(message: _114.WeightedVoteOption): _114.WeightedVoteOptionAmino;
                fromAminoMsg(object: _114.WeightedVoteOptionAminoMsg): _114.WeightedVoteOption;
                toAminoMsg(message: _114.WeightedVoteOption): _114.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _114.WeightedVoteOptionProtoMsg): _114.WeightedVoteOption;
                toProto(message: _114.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _114.WeightedVoteOption): _114.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _114.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Deposit;
                fromPartial(object: Partial<_114.Deposit>): _114.Deposit;
                fromAmino(object: _114.DepositAmino): _114.Deposit;
                toAmino(message: _114.Deposit): _114.DepositAmino;
                fromAminoMsg(object: _114.DepositAminoMsg): _114.Deposit;
                toAminoMsg(message: _114.Deposit): _114.DepositAminoMsg;
                fromProtoMsg(message: _114.DepositProtoMsg): _114.Deposit;
                toProto(message: _114.Deposit): Uint8Array;
                toProtoMsg(message: _114.Deposit): _114.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _114.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Proposal;
                fromPartial(object: Partial<_114.Proposal>): _114.Proposal;
                fromAmino(object: _114.ProposalAmino): _114.Proposal;
                toAmino(message: _114.Proposal): _114.ProposalAmino;
                fromAminoMsg(object: _114.ProposalAminoMsg): _114.Proposal;
                toAminoMsg(message: _114.Proposal): _114.ProposalAminoMsg;
                fromProtoMsg(message: _114.ProposalProtoMsg): _114.Proposal;
                toProto(message: _114.Proposal): Uint8Array;
                toProtoMsg(message: _114.Proposal): _114.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _114.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.TallyResult;
                fromPartial(object: Partial<_114.TallyResult>): _114.TallyResult;
                fromAmino(object: _114.TallyResultAmino): _114.TallyResult;
                toAmino(message: _114.TallyResult): _114.TallyResultAmino;
                fromAminoMsg(object: _114.TallyResultAminoMsg): _114.TallyResult;
                toAminoMsg(message: _114.TallyResult): _114.TallyResultAminoMsg;
                fromProtoMsg(message: _114.TallyResultProtoMsg): _114.TallyResult;
                toProto(message: _114.TallyResult): Uint8Array;
                toProtoMsg(message: _114.TallyResult): _114.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _114.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Vote;
                fromPartial(object: Partial<_114.Vote>): _114.Vote;
                fromAmino(object: _114.VoteAmino): _114.Vote;
                toAmino(message: _114.Vote): _114.VoteAmino;
                fromAminoMsg(object: _114.VoteAminoMsg): _114.Vote;
                toAminoMsg(message: _114.Vote): _114.VoteAminoMsg;
                fromProtoMsg(message: _114.VoteProtoMsg): _114.Vote;
                toProto(message: _114.Vote): Uint8Array;
                toProtoMsg(message: _114.Vote): _114.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _114.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.DepositParams;
                fromPartial(object: Partial<_114.DepositParams>): _114.DepositParams;
                fromAmino(object: _114.DepositParamsAmino): _114.DepositParams;
                toAmino(message: _114.DepositParams): _114.DepositParamsAmino;
                fromAminoMsg(object: _114.DepositParamsAminoMsg): _114.DepositParams;
                toAminoMsg(message: _114.DepositParams): _114.DepositParamsAminoMsg;
                fromProtoMsg(message: _114.DepositParamsProtoMsg): _114.DepositParams;
                toProto(message: _114.DepositParams): Uint8Array;
                toProtoMsg(message: _114.DepositParams): _114.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _114.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.VotingParams;
                fromPartial(object: Partial<_114.VotingParams>): _114.VotingParams;
                fromAmino(object: _114.VotingParamsAmino): _114.VotingParams;
                toAmino(message: _114.VotingParams): _114.VotingParamsAmino;
                fromAminoMsg(object: _114.VotingParamsAminoMsg): _114.VotingParams;
                toAminoMsg(message: _114.VotingParams): _114.VotingParamsAminoMsg;
                fromProtoMsg(message: _114.VotingParamsProtoMsg): _114.VotingParams;
                toProto(message: _114.VotingParams): Uint8Array;
                toProtoMsg(message: _114.VotingParams): _114.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _114.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.TallyParams;
                fromPartial(object: Partial<_114.TallyParams>): _114.TallyParams;
                fromAmino(object: _114.TallyParamsAmino): _114.TallyParams;
                toAmino(message: _114.TallyParams): _114.TallyParamsAmino;
                fromAminoMsg(object: _114.TallyParamsAminoMsg): _114.TallyParams;
                toAminoMsg(message: _114.TallyParams): _114.TallyParamsAminoMsg;
                fromProtoMsg(message: _114.TallyParamsProtoMsg): _114.TallyParams;
                toProto(message: _114.TallyParams): Uint8Array;
                toProtoMsg(message: _114.TallyParams): _114.TallyParamsProtoMsg;
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
        const v1beta1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _279.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _119.QueryProposalRequest): Promise<_119.QueryProposalResponse>;
                proposals(request: _119.QueryProposalsRequest): Promise<_119.QueryProposalsResponse>;
                vote(request: _119.QueryVoteRequest): Promise<_119.QueryVoteResponse>;
                votes(request: _119.QueryVotesRequest): Promise<_119.QueryVotesResponse>;
                params(request: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                deposit(request: _119.QueryDepositRequest): Promise<_119.QueryDepositResponse>;
                deposits(request: _119.QueryDepositsRequest): Promise<_119.QueryDepositsResponse>;
                tallyResult(request: _119.QueryTallyResultRequest): Promise<_119.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _120.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _120.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _120.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    vote(value: _120.MsgVote): {
                        typeUrl: string;
                        value: _120.MsgVote;
                    };
                    voteWeighted(value: _120.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _120.MsgVoteWeighted;
                    };
                    deposit(value: _120.MsgDeposit): {
                        typeUrl: string;
                        value: _120.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _120.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _120.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _120.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    vote(value: _120.MsgVote): {
                        typeUrl: string;
                        value: _120.MsgVote;
                    };
                    voteWeighted(value: _120.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _120.MsgVoteWeighted;
                    };
                    deposit(value: _120.MsgDeposit): {
                        typeUrl: string;
                        value: _120.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _120.MsgSubmitProposal) => _120.MsgSubmitProposalAmino;
                    fromAmino: (object: _120.MsgSubmitProposalAmino) => _120.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _120.MsgVote) => _120.MsgVoteAmino;
                    fromAmino: (object: _120.MsgVoteAmino) => _120.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _120.MsgVoteWeighted) => _120.MsgVoteWeightedAmino;
                    fromAmino: (object: _120.MsgVoteWeightedAmino) => _120.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _120.MsgDeposit) => _120.MsgDepositAmino;
                    fromAmino: (object: _120.MsgDepositAmino) => _120.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _120.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgSubmitProposal;
                fromPartial(object: Partial<_120.MsgSubmitProposal>): _120.MsgSubmitProposal;
                fromAmino(object: _120.MsgSubmitProposalAmino): _120.MsgSubmitProposal;
                toAmino(message: _120.MsgSubmitProposal): _120.MsgSubmitProposalAmino;
                fromAminoMsg(object: _120.MsgSubmitProposalAminoMsg): _120.MsgSubmitProposal;
                toAminoMsg(message: _120.MsgSubmitProposal): _120.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _120.MsgSubmitProposalProtoMsg): _120.MsgSubmitProposal;
                toProto(message: _120.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _120.MsgSubmitProposal): _120.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _120.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_120.MsgSubmitProposalResponse>): _120.MsgSubmitProposalResponse;
                fromAmino(object: _120.MsgSubmitProposalResponseAmino): _120.MsgSubmitProposalResponse;
                toAmino(message: _120.MsgSubmitProposalResponse): _120.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _120.MsgSubmitProposalResponseAminoMsg): _120.MsgSubmitProposalResponse;
                toAminoMsg(message: _120.MsgSubmitProposalResponse): _120.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _120.MsgSubmitProposalResponseProtoMsg): _120.MsgSubmitProposalResponse;
                toProto(message: _120.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _120.MsgSubmitProposalResponse): _120.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _120.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgVote;
                fromPartial(object: Partial<_120.MsgVote>): _120.MsgVote;
                fromAmino(object: _120.MsgVoteAmino): _120.MsgVote;
                toAmino(message: _120.MsgVote): _120.MsgVoteAmino;
                fromAminoMsg(object: _120.MsgVoteAminoMsg): _120.MsgVote;
                toAminoMsg(message: _120.MsgVote): _120.MsgVoteAminoMsg;
                fromProtoMsg(message: _120.MsgVoteProtoMsg): _120.MsgVote;
                toProto(message: _120.MsgVote): Uint8Array;
                toProtoMsg(message: _120.MsgVote): _120.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _120.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgVoteResponse;
                fromPartial(_: Partial<_120.MsgVoteResponse>): _120.MsgVoteResponse;
                fromAmino(_: _120.MsgVoteResponseAmino): _120.MsgVoteResponse;
                toAmino(_: _120.MsgVoteResponse): _120.MsgVoteResponseAmino;
                fromAminoMsg(object: _120.MsgVoteResponseAminoMsg): _120.MsgVoteResponse;
                toAminoMsg(message: _120.MsgVoteResponse): _120.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _120.MsgVoteResponseProtoMsg): _120.MsgVoteResponse;
                toProto(message: _120.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _120.MsgVoteResponse): _120.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _120.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgVoteWeighted;
                fromPartial(object: Partial<_120.MsgVoteWeighted>): _120.MsgVoteWeighted;
                fromAmino(object: _120.MsgVoteWeightedAmino): _120.MsgVoteWeighted;
                toAmino(message: _120.MsgVoteWeighted): _120.MsgVoteWeightedAmino;
                fromAminoMsg(object: _120.MsgVoteWeightedAminoMsg): _120.MsgVoteWeighted;
                toAminoMsg(message: _120.MsgVoteWeighted): _120.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _120.MsgVoteWeightedProtoMsg): _120.MsgVoteWeighted;
                toProto(message: _120.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _120.MsgVoteWeighted): _120.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _120.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_120.MsgVoteWeightedResponse>): _120.MsgVoteWeightedResponse;
                fromAmino(_: _120.MsgVoteWeightedResponseAmino): _120.MsgVoteWeightedResponse;
                toAmino(_: _120.MsgVoteWeightedResponse): _120.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _120.MsgVoteWeightedResponseAminoMsg): _120.MsgVoteWeightedResponse;
                toAminoMsg(message: _120.MsgVoteWeightedResponse): _120.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _120.MsgVoteWeightedResponseProtoMsg): _120.MsgVoteWeightedResponse;
                toProto(message: _120.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _120.MsgVoteWeightedResponse): _120.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _120.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgDeposit;
                fromPartial(object: Partial<_120.MsgDeposit>): _120.MsgDeposit;
                fromAmino(object: _120.MsgDepositAmino): _120.MsgDeposit;
                toAmino(message: _120.MsgDeposit): _120.MsgDepositAmino;
                fromAminoMsg(object: _120.MsgDepositAminoMsg): _120.MsgDeposit;
                toAminoMsg(message: _120.MsgDeposit): _120.MsgDepositAminoMsg;
                fromProtoMsg(message: _120.MsgDepositProtoMsg): _120.MsgDeposit;
                toProto(message: _120.MsgDeposit): Uint8Array;
                toProtoMsg(message: _120.MsgDeposit): _120.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _120.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgDepositResponse;
                fromPartial(_: Partial<_120.MsgDepositResponse>): _120.MsgDepositResponse;
                fromAmino(_: _120.MsgDepositResponseAmino): _120.MsgDepositResponse;
                toAmino(_: _120.MsgDepositResponse): _120.MsgDepositResponseAmino;
                fromAminoMsg(object: _120.MsgDepositResponseAminoMsg): _120.MsgDepositResponse;
                toAminoMsg(message: _120.MsgDepositResponse): _120.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _120.MsgDepositResponseProtoMsg): _120.MsgDepositResponse;
                toProto(message: _120.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _120.MsgDepositResponse): _120.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _96.CommunityPoolSpendProposal | _96.CommunityPoolSpendProposalWithDeposit | _144.ParameterChangeProposal | _166.SoftwareUpgradeProposal | _166.CancelSoftwareUpgradeProposal | _118.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _119.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryProposalRequest;
                fromPartial(object: Partial<_119.QueryProposalRequest>): _119.QueryProposalRequest;
                fromAmino(object: _119.QueryProposalRequestAmino): _119.QueryProposalRequest;
                toAmino(message: _119.QueryProposalRequest): _119.QueryProposalRequestAmino;
                fromAminoMsg(object: _119.QueryProposalRequestAminoMsg): _119.QueryProposalRequest;
                toAminoMsg(message: _119.QueryProposalRequest): _119.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _119.QueryProposalRequestProtoMsg): _119.QueryProposalRequest;
                toProto(message: _119.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _119.QueryProposalRequest): _119.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _119.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryProposalResponse;
                fromPartial(object: Partial<_119.QueryProposalResponse>): _119.QueryProposalResponse;
                fromAmino(object: _119.QueryProposalResponseAmino): _119.QueryProposalResponse;
                toAmino(message: _119.QueryProposalResponse): _119.QueryProposalResponseAmino;
                fromAminoMsg(object: _119.QueryProposalResponseAminoMsg): _119.QueryProposalResponse;
                toAminoMsg(message: _119.QueryProposalResponse): _119.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _119.QueryProposalResponseProtoMsg): _119.QueryProposalResponse;
                toProto(message: _119.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _119.QueryProposalResponse): _119.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _119.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryProposalsRequest;
                fromPartial(object: Partial<_119.QueryProposalsRequest>): _119.QueryProposalsRequest;
                fromAmino(object: _119.QueryProposalsRequestAmino): _119.QueryProposalsRequest;
                toAmino(message: _119.QueryProposalsRequest): _119.QueryProposalsRequestAmino;
                fromAminoMsg(object: _119.QueryProposalsRequestAminoMsg): _119.QueryProposalsRequest;
                toAminoMsg(message: _119.QueryProposalsRequest): _119.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryProposalsRequestProtoMsg): _119.QueryProposalsRequest;
                toProto(message: _119.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryProposalsRequest): _119.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _119.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryProposalsResponse;
                fromPartial(object: Partial<_119.QueryProposalsResponse>): _119.QueryProposalsResponse;
                fromAmino(object: _119.QueryProposalsResponseAmino): _119.QueryProposalsResponse;
                toAmino(message: _119.QueryProposalsResponse): _119.QueryProposalsResponseAmino;
                fromAminoMsg(object: _119.QueryProposalsResponseAminoMsg): _119.QueryProposalsResponse;
                toAminoMsg(message: _119.QueryProposalsResponse): _119.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryProposalsResponseProtoMsg): _119.QueryProposalsResponse;
                toProto(message: _119.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryProposalsResponse): _119.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _119.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryVoteRequest;
                fromPartial(object: Partial<_119.QueryVoteRequest>): _119.QueryVoteRequest;
                fromAmino(object: _119.QueryVoteRequestAmino): _119.QueryVoteRequest;
                toAmino(message: _119.QueryVoteRequest): _119.QueryVoteRequestAmino;
                fromAminoMsg(object: _119.QueryVoteRequestAminoMsg): _119.QueryVoteRequest;
                toAminoMsg(message: _119.QueryVoteRequest): _119.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _119.QueryVoteRequestProtoMsg): _119.QueryVoteRequest;
                toProto(message: _119.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _119.QueryVoteRequest): _119.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _119.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryVoteResponse;
                fromPartial(object: Partial<_119.QueryVoteResponse>): _119.QueryVoteResponse;
                fromAmino(object: _119.QueryVoteResponseAmino): _119.QueryVoteResponse;
                toAmino(message: _119.QueryVoteResponse): _119.QueryVoteResponseAmino;
                fromAminoMsg(object: _119.QueryVoteResponseAminoMsg): _119.QueryVoteResponse;
                toAminoMsg(message: _119.QueryVoteResponse): _119.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _119.QueryVoteResponseProtoMsg): _119.QueryVoteResponse;
                toProto(message: _119.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _119.QueryVoteResponse): _119.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _119.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryVotesRequest;
                fromPartial(object: Partial<_119.QueryVotesRequest>): _119.QueryVotesRequest;
                fromAmino(object: _119.QueryVotesRequestAmino): _119.QueryVotesRequest;
                toAmino(message: _119.QueryVotesRequest): _119.QueryVotesRequestAmino;
                fromAminoMsg(object: _119.QueryVotesRequestAminoMsg): _119.QueryVotesRequest;
                toAminoMsg(message: _119.QueryVotesRequest): _119.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _119.QueryVotesRequestProtoMsg): _119.QueryVotesRequest;
                toProto(message: _119.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _119.QueryVotesRequest): _119.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _119.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryVotesResponse;
                fromPartial(object: Partial<_119.QueryVotesResponse>): _119.QueryVotesResponse;
                fromAmino(object: _119.QueryVotesResponseAmino): _119.QueryVotesResponse;
                toAmino(message: _119.QueryVotesResponse): _119.QueryVotesResponseAmino;
                fromAminoMsg(object: _119.QueryVotesResponseAminoMsg): _119.QueryVotesResponse;
                toAminoMsg(message: _119.QueryVotesResponse): _119.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _119.QueryVotesResponseProtoMsg): _119.QueryVotesResponse;
                toProto(message: _119.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _119.QueryVotesResponse): _119.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _119.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryParamsRequest;
                fromPartial(object: Partial<_119.QueryParamsRequest>): _119.QueryParamsRequest;
                fromAmino(object: _119.QueryParamsRequestAmino): _119.QueryParamsRequest;
                toAmino(message: _119.QueryParamsRequest): _119.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _119.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryDepositRequest;
                fromPartial(object: Partial<_119.QueryDepositRequest>): _119.QueryDepositRequest;
                fromAmino(object: _119.QueryDepositRequestAmino): _119.QueryDepositRequest;
                toAmino(message: _119.QueryDepositRequest): _119.QueryDepositRequestAmino;
                fromAminoMsg(object: _119.QueryDepositRequestAminoMsg): _119.QueryDepositRequest;
                toAminoMsg(message: _119.QueryDepositRequest): _119.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _119.QueryDepositRequestProtoMsg): _119.QueryDepositRequest;
                toProto(message: _119.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _119.QueryDepositRequest): _119.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _119.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryDepositResponse;
                fromPartial(object: Partial<_119.QueryDepositResponse>): _119.QueryDepositResponse;
                fromAmino(object: _119.QueryDepositResponseAmino): _119.QueryDepositResponse;
                toAmino(message: _119.QueryDepositResponse): _119.QueryDepositResponseAmino;
                fromAminoMsg(object: _119.QueryDepositResponseAminoMsg): _119.QueryDepositResponse;
                toAminoMsg(message: _119.QueryDepositResponse): _119.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _119.QueryDepositResponseProtoMsg): _119.QueryDepositResponse;
                toProto(message: _119.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _119.QueryDepositResponse): _119.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _119.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryDepositsRequest;
                fromPartial(object: Partial<_119.QueryDepositsRequest>): _119.QueryDepositsRequest;
                fromAmino(object: _119.QueryDepositsRequestAmino): _119.QueryDepositsRequest;
                toAmino(message: _119.QueryDepositsRequest): _119.QueryDepositsRequestAmino;
                fromAminoMsg(object: _119.QueryDepositsRequestAminoMsg): _119.QueryDepositsRequest;
                toAminoMsg(message: _119.QueryDepositsRequest): _119.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryDepositsRequestProtoMsg): _119.QueryDepositsRequest;
                toProto(message: _119.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryDepositsRequest): _119.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _119.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryDepositsResponse;
                fromPartial(object: Partial<_119.QueryDepositsResponse>): _119.QueryDepositsResponse;
                fromAmino(object: _119.QueryDepositsResponseAmino): _119.QueryDepositsResponse;
                toAmino(message: _119.QueryDepositsResponse): _119.QueryDepositsResponseAmino;
                fromAminoMsg(object: _119.QueryDepositsResponseAminoMsg): _119.QueryDepositsResponse;
                toAminoMsg(message: _119.QueryDepositsResponse): _119.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryDepositsResponseProtoMsg): _119.QueryDepositsResponse;
                toProto(message: _119.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryDepositsResponse): _119.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _119.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryTallyResultRequest;
                fromPartial(object: Partial<_119.QueryTallyResultRequest>): _119.QueryTallyResultRequest;
                fromAmino(object: _119.QueryTallyResultRequestAmino): _119.QueryTallyResultRequest;
                toAmino(message: _119.QueryTallyResultRequest): _119.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _119.QueryTallyResultRequestAminoMsg): _119.QueryTallyResultRequest;
                toAminoMsg(message: _119.QueryTallyResultRequest): _119.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _119.QueryTallyResultRequestProtoMsg): _119.QueryTallyResultRequest;
                toProto(message: _119.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _119.QueryTallyResultRequest): _119.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _119.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryTallyResultResponse;
                fromPartial(object: Partial<_119.QueryTallyResultResponse>): _119.QueryTallyResultResponse;
                fromAmino(object: _119.QueryTallyResultResponseAmino): _119.QueryTallyResultResponse;
                toAmino(message: _119.QueryTallyResultResponse): _119.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _119.QueryTallyResultResponseAminoMsg): _119.QueryTallyResultResponse;
                toAminoMsg(message: _119.QueryTallyResultResponse): _119.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _119.QueryTallyResultResponseProtoMsg): _119.QueryTallyResultResponse;
                toProto(message: _119.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _119.QueryTallyResultResponse): _119.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _118.VoteOption;
            voteOptionToJSON(object: _118.VoteOption): string;
            proposalStatusFromJSON(object: any): _118.ProposalStatus;
            proposalStatusToJSON(object: _118.ProposalStatus): string;
            VoteOption: typeof _118.VoteOption;
            VoteOptionSDKType: typeof _118.VoteOption;
            VoteOptionAmino: typeof _118.VoteOption;
            ProposalStatus: typeof _118.ProposalStatus;
            ProposalStatusSDKType: typeof _118.ProposalStatus;
            ProposalStatusAmino: typeof _118.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _118.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.WeightedVoteOption;
                fromPartial(object: Partial<_118.WeightedVoteOption>): _118.WeightedVoteOption;
                fromAmino(object: _118.WeightedVoteOptionAmino): _118.WeightedVoteOption;
                toAmino(message: _118.WeightedVoteOption): _118.WeightedVoteOptionAmino;
                fromAminoMsg(object: _118.WeightedVoteOptionAminoMsg): _118.WeightedVoteOption;
                toAminoMsg(message: _118.WeightedVoteOption): _118.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _118.WeightedVoteOptionProtoMsg): _118.WeightedVoteOption;
                toProto(message: _118.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _118.WeightedVoteOption): _118.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _118.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TextProposal;
                fromPartial(object: Partial<_118.TextProposal>): _118.TextProposal;
                fromAmino(object: _118.TextProposalAmino): _118.TextProposal;
                toAmino(message: _118.TextProposal): _118.TextProposalAmino;
                fromAminoMsg(object: _118.TextProposalAminoMsg): _118.TextProposal;
                toAminoMsg(message: _118.TextProposal): _118.TextProposalAminoMsg;
                fromProtoMsg(message: _118.TextProposalProtoMsg): _118.TextProposal;
                toProto(message: _118.TextProposal): Uint8Array;
                toProtoMsg(message: _118.TextProposal): _118.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _118.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Deposit;
                fromPartial(object: Partial<_118.Deposit>): _118.Deposit;
                fromAmino(object: _118.DepositAmino): _118.Deposit;
                toAmino(message: _118.Deposit): _118.DepositAmino;
                fromAminoMsg(object: _118.DepositAminoMsg): _118.Deposit;
                toAminoMsg(message: _118.Deposit): _118.DepositAminoMsg;
                fromProtoMsg(message: _118.DepositProtoMsg): _118.Deposit;
                toProto(message: _118.Deposit): Uint8Array;
                toProtoMsg(message: _118.Deposit): _118.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _118.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Proposal;
                fromPartial(object: Partial<_118.Proposal>): _118.Proposal;
                fromAmino(object: _118.ProposalAmino): _118.Proposal;
                toAmino(message: _118.Proposal): _118.ProposalAmino;
                fromAminoMsg(object: _118.ProposalAminoMsg): _118.Proposal;
                toAminoMsg(message: _118.Proposal): _118.ProposalAminoMsg;
                fromProtoMsg(message: _118.ProposalProtoMsg): _118.Proposal;
                toProto(message: _118.Proposal): Uint8Array;
                toProtoMsg(message: _118.Proposal): _118.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _118.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TallyResult;
                fromPartial(object: Partial<_118.TallyResult>): _118.TallyResult;
                fromAmino(object: _118.TallyResultAmino): _118.TallyResult;
                toAmino(message: _118.TallyResult): _118.TallyResultAmino;
                fromAminoMsg(object: _118.TallyResultAminoMsg): _118.TallyResult;
                toAminoMsg(message: _118.TallyResult): _118.TallyResultAminoMsg;
                fromProtoMsg(message: _118.TallyResultProtoMsg): _118.TallyResult;
                toProto(message: _118.TallyResult): Uint8Array;
                toProtoMsg(message: _118.TallyResult): _118.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _118.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Vote;
                fromPartial(object: Partial<_118.Vote>): _118.Vote;
                fromAmino(object: _118.VoteAmino): _118.Vote;
                toAmino(message: _118.Vote): _118.VoteAmino;
                fromAminoMsg(object: _118.VoteAminoMsg): _118.Vote;
                toAminoMsg(message: _118.Vote): _118.VoteAminoMsg;
                fromProtoMsg(message: _118.VoteProtoMsg): _118.Vote;
                toProto(message: _118.Vote): Uint8Array;
                toProtoMsg(message: _118.Vote): _118.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _118.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.DepositParams;
                fromPartial(object: Partial<_118.DepositParams>): _118.DepositParams;
                fromAmino(object: _118.DepositParamsAmino): _118.DepositParams;
                toAmino(message: _118.DepositParams): _118.DepositParamsAmino;
                fromAminoMsg(object: _118.DepositParamsAminoMsg): _118.DepositParams;
                toAminoMsg(message: _118.DepositParams): _118.DepositParamsAminoMsg;
                fromProtoMsg(message: _118.DepositParamsProtoMsg): _118.DepositParams;
                toProto(message: _118.DepositParams): Uint8Array;
                toProtoMsg(message: _118.DepositParams): _118.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _118.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.VotingParams;
                fromPartial(object: Partial<_118.VotingParams>): _118.VotingParams;
                fromAmino(object: _118.VotingParamsAmino): _118.VotingParams;
                toAmino(message: _118.VotingParams): _118.VotingParamsAmino;
                fromAminoMsg(object: _118.VotingParamsAminoMsg): _118.VotingParams;
                toAminoMsg(message: _118.VotingParams): _118.VotingParamsAminoMsg;
                fromProtoMsg(message: _118.VotingParamsProtoMsg): _118.VotingParams;
                toProto(message: _118.VotingParams): Uint8Array;
                toProtoMsg(message: _118.VotingParams): _118.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _118.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TallyParams;
                fromPartial(object: Partial<_118.TallyParams>): _118.TallyParams;
                fromAmino(object: _118.TallyParamsAmino): _118.TallyParams;
                toAmino(message: _118.TallyParams): _118.TallyParamsAmino;
                fromAminoMsg(object: _118.TallyParamsAminoMsg): _118.TallyParams;
                toAminoMsg(message: _118.TallyParams): _118.TallyParamsAminoMsg;
                fromProtoMsg(message: _118.TallyParamsProtoMsg): _118.TallyParams;
                toProto(message: _118.TallyParams): Uint8Array;
                toProtoMsg(message: _118.TallyParams): _118.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _117.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GenesisState;
                fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
                fromAmino(object: _117.GenesisStateAmino): _117.GenesisState;
                toAmino(message: _117.GenesisState): _117.GenesisStateAmino;
                fromAminoMsg(object: _117.GenesisStateAminoMsg): _117.GenesisState;
                toAminoMsg(message: _117.GenesisState): _117.GenesisStateAminoMsg;
                fromProtoMsg(message: _117.GenesisStateProtoMsg): _117.GenesisState;
                toProto(message: _117.GenesisState): Uint8Array;
                toProtoMsg(message: _117.GenesisState): _117.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _121.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.Module;
                    fromPartial(object: Partial<_121.Module>): _121.Module;
                    fromAmino(object: _121.ModuleAmino): _121.Module;
                    toAmino(message: _121.Module): _121.ModuleAmino;
                    fromAminoMsg(object: _121.ModuleAminoMsg): _121.Module;
                    toAminoMsg(message: _121.Module): _121.ModuleAminoMsg;
                    fromProtoMsg(message: _121.ModuleProtoMsg): _121.Module;
                    toProto(message: _121.Module): Uint8Array;
                    toProtoMsg(message: _121.Module): _121.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _299.MsgClientImpl;
            QueryClientImpl: typeof _280.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _124.QueryGroupInfoRequest): Promise<_124.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _124.QueryGroupPolicyInfoRequest): Promise<_124.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _124.QueryGroupMembersRequest): Promise<_124.QueryGroupMembersResponse>;
                groupsByAdmin(request: _124.QueryGroupsByAdminRequest): Promise<_124.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _124.QueryGroupPoliciesByGroupRequest): Promise<_124.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _124.QueryGroupPoliciesByAdminRequest): Promise<_124.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _124.QueryProposalRequest): Promise<_124.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _124.QueryProposalsByGroupPolicyRequest): Promise<_124.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _124.QueryVoteByProposalVoterRequest): Promise<_124.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _124.QueryVotesByProposalRequest): Promise<_124.QueryVotesByProposalResponse>;
                votesByVoter(request: _124.QueryVotesByVoterRequest): Promise<_124.QueryVotesByVoterResponse>;
                groupsByMember(request: _124.QueryGroupsByMemberRequest): Promise<_124.QueryGroupsByMemberResponse>;
                tallyResult(request: _124.QueryTallyResultRequest): Promise<_124.QueryTallyResultResponse>;
                groups(request?: _124.QueryGroupsRequest): Promise<_124.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _259.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _125.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _125.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _125.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _125.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _125.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _125.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _125.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _125.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _125.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _125.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _125.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _125.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _125.MsgCreateGroup): {
                        typeUrl: string;
                        value: _125.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _125.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _125.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _125.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _125.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _125.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _125.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _125.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _125.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _125.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _125.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _125.MsgWithdrawProposal;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: _125.MsgVote;
                    };
                    exec(value: _125.MsgExec): {
                        typeUrl: string;
                        value: _125.MsgExec;
                    };
                    leaveGroup(value: _125.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _125.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _125.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _125.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _125.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _125.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _125.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _125.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _125.MsgCreateGroup): {
                        typeUrl: string;
                        value: _125.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _125.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _125.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _125.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _125.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _125.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _125.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _125.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _125.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _125.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _125.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _125.MsgWithdrawProposal;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: _125.MsgVote;
                    };
                    exec(value: _125.MsgExec): {
                        typeUrl: string;
                        value: _125.MsgExec;
                    };
                    leaveGroup(value: _125.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _125.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _125.MsgCreateGroup) => _125.MsgCreateGroupAmino;
                    fromAmino: (object: _125.MsgCreateGroupAmino) => _125.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _125.MsgUpdateGroupMembers) => _125.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _125.MsgUpdateGroupMembersAmino) => _125.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _125.MsgUpdateGroupAdmin) => _125.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _125.MsgUpdateGroupAdminAmino) => _125.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _125.MsgUpdateGroupMetadata) => _125.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _125.MsgUpdateGroupMetadataAmino) => _125.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _125.MsgCreateGroupPolicy) => _125.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _125.MsgCreateGroupPolicyAmino) => _125.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _125.MsgCreateGroupWithPolicy) => _125.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _125.MsgCreateGroupWithPolicyAmino) => _125.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _125.MsgUpdateGroupPolicyAdmin) => _125.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _125.MsgUpdateGroupPolicyAdminAmino) => _125.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _125.MsgUpdateGroupPolicyDecisionPolicy) => _125.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _125.MsgUpdateGroupPolicyDecisionPolicyAmino) => _125.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _125.MsgUpdateGroupPolicyMetadata) => _125.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _125.MsgUpdateGroupPolicyMetadataAmino) => _125.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _125.MsgSubmitProposal) => _125.MsgSubmitProposalAmino;
                    fromAmino: (object: _125.MsgSubmitProposalAmino) => _125.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _125.MsgWithdrawProposal) => _125.MsgWithdrawProposalAmino;
                    fromAmino: (object: _125.MsgWithdrawProposalAmino) => _125.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _125.MsgVote) => _125.MsgVoteAmino;
                    fromAmino: (object: _125.MsgVoteAmino) => _125.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _125.MsgExec) => _125.MsgExecAmino;
                    fromAmino: (object: _125.MsgExecAmino) => _125.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _125.MsgLeaveGroup) => _125.MsgLeaveGroupAmino;
                    fromAmino: (object: _125.MsgLeaveGroupAmino) => _125.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _126.VoteOption;
            voteOptionToJSON(object: _126.VoteOption): string;
            proposalStatusFromJSON(object: any): _126.ProposalStatus;
            proposalStatusToJSON(object: _126.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _126.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _126.ProposalExecutorResult): string;
            VoteOption: typeof _126.VoteOption;
            VoteOptionSDKType: typeof _126.VoteOption;
            VoteOptionAmino: typeof _126.VoteOption;
            ProposalStatus: typeof _126.ProposalStatus;
            ProposalStatusSDKType: typeof _126.ProposalStatus;
            ProposalStatusAmino: typeof _126.ProposalStatus;
            ProposalExecutorResult: typeof _126.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _126.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _126.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _126.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Member;
                fromPartial(object: Partial<_126.Member>): _126.Member;
                fromAmino(object: _126.MemberAmino): _126.Member;
                toAmino(message: _126.Member): _126.MemberAmino;
                fromAminoMsg(object: _126.MemberAminoMsg): _126.Member;
                toAminoMsg(message: _126.Member): _126.MemberAminoMsg;
                fromProtoMsg(message: _126.MemberProtoMsg): _126.Member;
                toProto(message: _126.Member): Uint8Array;
                toProtoMsg(message: _126.Member): _126.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _126.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.MemberRequest;
                fromPartial(object: Partial<_126.MemberRequest>): _126.MemberRequest;
                fromAmino(object: _126.MemberRequestAmino): _126.MemberRequest;
                toAmino(message: _126.MemberRequest): _126.MemberRequestAmino;
                fromAminoMsg(object: _126.MemberRequestAminoMsg): _126.MemberRequest;
                toAminoMsg(message: _126.MemberRequest): _126.MemberRequestAminoMsg;
                fromProtoMsg(message: _126.MemberRequestProtoMsg): _126.MemberRequest;
                toProto(message: _126.MemberRequest): Uint8Array;
                toProtoMsg(message: _126.MemberRequest): _126.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _126.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_126.ThresholdDecisionPolicy>): _126.ThresholdDecisionPolicy;
                fromAmino(object: _126.ThresholdDecisionPolicyAmino): _126.ThresholdDecisionPolicy;
                toAmino(message: _126.ThresholdDecisionPolicy): _126.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _126.ThresholdDecisionPolicyAminoMsg): _126.ThresholdDecisionPolicy;
                toAminoMsg(message: _126.ThresholdDecisionPolicy): _126.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _126.ThresholdDecisionPolicyProtoMsg): _126.ThresholdDecisionPolicy;
                toProto(message: _126.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _126.ThresholdDecisionPolicy): _126.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _126.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.PercentageDecisionPolicy;
                fromPartial(object: Partial<_126.PercentageDecisionPolicy>): _126.PercentageDecisionPolicy;
                fromAmino(object: _126.PercentageDecisionPolicyAmino): _126.PercentageDecisionPolicy;
                toAmino(message: _126.PercentageDecisionPolicy): _126.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _126.PercentageDecisionPolicyAminoMsg): _126.PercentageDecisionPolicy;
                toAminoMsg(message: _126.PercentageDecisionPolicy): _126.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _126.PercentageDecisionPolicyProtoMsg): _126.PercentageDecisionPolicy;
                toProto(message: _126.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _126.PercentageDecisionPolicy): _126.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _126.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.DecisionPolicyWindows;
                fromPartial(object: Partial<_126.DecisionPolicyWindows>): _126.DecisionPolicyWindows;
                fromAmino(object: _126.DecisionPolicyWindowsAmino): _126.DecisionPolicyWindows;
                toAmino(message: _126.DecisionPolicyWindows): _126.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _126.DecisionPolicyWindowsAminoMsg): _126.DecisionPolicyWindows;
                toAminoMsg(message: _126.DecisionPolicyWindows): _126.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _126.DecisionPolicyWindowsProtoMsg): _126.DecisionPolicyWindows;
                toProto(message: _126.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _126.DecisionPolicyWindows): _126.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _126.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GroupInfo;
                fromPartial(object: Partial<_126.GroupInfo>): _126.GroupInfo;
                fromAmino(object: _126.GroupInfoAmino): _126.GroupInfo;
                toAmino(message: _126.GroupInfo): _126.GroupInfoAmino;
                fromAminoMsg(object: _126.GroupInfoAminoMsg): _126.GroupInfo;
                toAminoMsg(message: _126.GroupInfo): _126.GroupInfoAminoMsg;
                fromProtoMsg(message: _126.GroupInfoProtoMsg): _126.GroupInfo;
                toProto(message: _126.GroupInfo): Uint8Array;
                toProtoMsg(message: _126.GroupInfo): _126.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _126.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GroupMember;
                fromPartial(object: Partial<_126.GroupMember>): _126.GroupMember;
                fromAmino(object: _126.GroupMemberAmino): _126.GroupMember;
                toAmino(message: _126.GroupMember): _126.GroupMemberAmino;
                fromAminoMsg(object: _126.GroupMemberAminoMsg): _126.GroupMember;
                toAminoMsg(message: _126.GroupMember): _126.GroupMemberAminoMsg;
                fromProtoMsg(message: _126.GroupMemberProtoMsg): _126.GroupMember;
                toProto(message: _126.GroupMember): Uint8Array;
                toProtoMsg(message: _126.GroupMember): _126.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _126.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GroupPolicyInfo;
                fromPartial(object: Partial<_126.GroupPolicyInfo>): _126.GroupPolicyInfo;
                fromAmino(object: _126.GroupPolicyInfoAmino): _126.GroupPolicyInfo;
                toAmino(message: _126.GroupPolicyInfo): _126.GroupPolicyInfoAmino;
                fromAminoMsg(object: _126.GroupPolicyInfoAminoMsg): _126.GroupPolicyInfo;
                toAminoMsg(message: _126.GroupPolicyInfo): _126.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _126.GroupPolicyInfoProtoMsg): _126.GroupPolicyInfo;
                toProto(message: _126.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _126.GroupPolicyInfo): _126.GroupPolicyInfoProtoMsg;
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
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _126.ThresholdDecisionPolicy | _126.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _125.Exec;
            execToJSON(object: _125.Exec): string;
            Exec: typeof _125.Exec;
            ExecSDKType: typeof _125.Exec;
            ExecAmino: typeof _125.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _125.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgCreateGroup;
                fromPartial(object: Partial<_125.MsgCreateGroup>): _125.MsgCreateGroup;
                fromAmino(object: _125.MsgCreateGroupAmino): _125.MsgCreateGroup;
                toAmino(message: _125.MsgCreateGroup): _125.MsgCreateGroupAmino;
                fromAminoMsg(object: _125.MsgCreateGroupAminoMsg): _125.MsgCreateGroup;
                toAminoMsg(message: _125.MsgCreateGroup): _125.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _125.MsgCreateGroupProtoMsg): _125.MsgCreateGroup;
                toProto(message: _125.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _125.MsgCreateGroup): _125.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _125.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgCreateGroupResponse;
                fromPartial(object: Partial<_125.MsgCreateGroupResponse>): _125.MsgCreateGroupResponse;
                fromAmino(object: _125.MsgCreateGroupResponseAmino): _125.MsgCreateGroupResponse;
                toAmino(message: _125.MsgCreateGroupResponse): _125.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _125.MsgCreateGroupResponseAminoMsg): _125.MsgCreateGroupResponse;
                toAminoMsg(message: _125.MsgCreateGroupResponse): _125.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _125.MsgCreateGroupResponseProtoMsg): _125.MsgCreateGroupResponse;
                toProto(message: _125.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _125.MsgCreateGroupResponse): _125.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _125.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_125.MsgUpdateGroupMembers>): _125.MsgUpdateGroupMembers;
                fromAmino(object: _125.MsgUpdateGroupMembersAmino): _125.MsgUpdateGroupMembers;
                toAmino(message: _125.MsgUpdateGroupMembers): _125.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupMembersAminoMsg): _125.MsgUpdateGroupMembers;
                toAminoMsg(message: _125.MsgUpdateGroupMembers): _125.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupMembersProtoMsg): _125.MsgUpdateGroupMembers;
                toProto(message: _125.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupMembers): _125.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _125.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupMembersResponse>): _125.MsgUpdateGroupMembersResponse;
                fromAmino(_: _125.MsgUpdateGroupMembersResponseAmino): _125.MsgUpdateGroupMembersResponse;
                toAmino(_: _125.MsgUpdateGroupMembersResponse): _125.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupMembersResponseAminoMsg): _125.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _125.MsgUpdateGroupMembersResponse): _125.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupMembersResponseProtoMsg): _125.MsgUpdateGroupMembersResponse;
                toProto(message: _125.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupMembersResponse): _125.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _125.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_125.MsgUpdateGroupAdmin>): _125.MsgUpdateGroupAdmin;
                fromAmino(object: _125.MsgUpdateGroupAdminAmino): _125.MsgUpdateGroupAdmin;
                toAmino(message: _125.MsgUpdateGroupAdmin): _125.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupAdminAminoMsg): _125.MsgUpdateGroupAdmin;
                toAminoMsg(message: _125.MsgUpdateGroupAdmin): _125.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupAdminProtoMsg): _125.MsgUpdateGroupAdmin;
                toProto(message: _125.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupAdmin): _125.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _125.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupAdminResponse>): _125.MsgUpdateGroupAdminResponse;
                fromAmino(_: _125.MsgUpdateGroupAdminResponseAmino): _125.MsgUpdateGroupAdminResponse;
                toAmino(_: _125.MsgUpdateGroupAdminResponse): _125.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupAdminResponseAminoMsg): _125.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _125.MsgUpdateGroupAdminResponse): _125.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupAdminResponseProtoMsg): _125.MsgUpdateGroupAdminResponse;
                toProto(message: _125.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupAdminResponse): _125.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _125.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_125.MsgUpdateGroupMetadata>): _125.MsgUpdateGroupMetadata;
                fromAmino(object: _125.MsgUpdateGroupMetadataAmino): _125.MsgUpdateGroupMetadata;
                toAmino(message: _125.MsgUpdateGroupMetadata): _125.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupMetadataAminoMsg): _125.MsgUpdateGroupMetadata;
                toAminoMsg(message: _125.MsgUpdateGroupMetadata): _125.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupMetadataProtoMsg): _125.MsgUpdateGroupMetadata;
                toProto(message: _125.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupMetadata): _125.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _125.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupMetadataResponse>): _125.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _125.MsgUpdateGroupMetadataResponseAmino): _125.MsgUpdateGroupMetadataResponse;
                toAmino(_: _125.MsgUpdateGroupMetadataResponse): _125.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupMetadataResponseAminoMsg): _125.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _125.MsgUpdateGroupMetadataResponse): _125.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupMetadataResponseProtoMsg): _125.MsgUpdateGroupMetadataResponse;
                toProto(message: _125.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupMetadataResponse): _125.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _125.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_125.MsgCreateGroupPolicy>): _125.MsgCreateGroupPolicy;
                fromAmino(object: _125.MsgCreateGroupPolicyAmino): _125.MsgCreateGroupPolicy;
                toAmino(message: _125.MsgCreateGroupPolicy): _125.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _125.MsgCreateGroupPolicyAminoMsg): _125.MsgCreateGroupPolicy;
                toAminoMsg(message: _125.MsgCreateGroupPolicy): _125.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _125.MsgCreateGroupPolicyProtoMsg): _125.MsgCreateGroupPolicy;
                toProto(message: _125.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _125.MsgCreateGroupPolicy): _125.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _125.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_125.MsgCreateGroupPolicyResponse>): _125.MsgCreateGroupPolicyResponse;
                fromAmino(object: _125.MsgCreateGroupPolicyResponseAmino): _125.MsgCreateGroupPolicyResponse;
                toAmino(message: _125.MsgCreateGroupPolicyResponse): _125.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _125.MsgCreateGroupPolicyResponseAminoMsg): _125.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _125.MsgCreateGroupPolicyResponse): _125.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _125.MsgCreateGroupPolicyResponseProtoMsg): _125.MsgCreateGroupPolicyResponse;
                toProto(message: _125.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _125.MsgCreateGroupPolicyResponse): _125.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _125.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_125.MsgUpdateGroupPolicyAdmin>): _125.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _125.MsgUpdateGroupPolicyAdminAmino): _125.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _125.MsgUpdateGroupPolicyAdmin): _125.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupPolicyAdminAminoMsg): _125.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _125.MsgUpdateGroupPolicyAdmin): _125.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupPolicyAdminProtoMsg): _125.MsgUpdateGroupPolicyAdmin;
                toProto(message: _125.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupPolicyAdmin): _125.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _125.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupPolicyAdminResponse>): _125.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _125.MsgUpdateGroupPolicyAdminResponseAmino): _125.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _125.MsgUpdateGroupPolicyAdminResponse): _125.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupPolicyAdminResponseAminoMsg): _125.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _125.MsgUpdateGroupPolicyAdminResponse): _125.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupPolicyAdminResponseProtoMsg): _125.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _125.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupPolicyAdminResponse): _125.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _125.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_125.MsgCreateGroupWithPolicy>): _125.MsgCreateGroupWithPolicy;
                fromAmino(object: _125.MsgCreateGroupWithPolicyAmino): _125.MsgCreateGroupWithPolicy;
                toAmino(message: _125.MsgCreateGroupWithPolicy): _125.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _125.MsgCreateGroupWithPolicyAminoMsg): _125.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _125.MsgCreateGroupWithPolicy): _125.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _125.MsgCreateGroupWithPolicyProtoMsg): _125.MsgCreateGroupWithPolicy;
                toProto(message: _125.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _125.MsgCreateGroupWithPolicy): _125.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _125.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_125.MsgCreateGroupWithPolicyResponse>): _125.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _125.MsgCreateGroupWithPolicyResponseAmino): _125.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _125.MsgCreateGroupWithPolicyResponse): _125.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _125.MsgCreateGroupWithPolicyResponseAminoMsg): _125.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _125.MsgCreateGroupWithPolicyResponse): _125.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _125.MsgCreateGroupWithPolicyResponseProtoMsg): _125.MsgCreateGroupWithPolicyResponse;
                toProto(message: _125.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _125.MsgCreateGroupWithPolicyResponse): _125.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _125.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_125.MsgUpdateGroupPolicyDecisionPolicy>): _125.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _125.MsgUpdateGroupPolicyDecisionPolicyAmino): _125.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _125.MsgUpdateGroupPolicyDecisionPolicy): _125.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _125.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _125.MsgUpdateGroupPolicyDecisionPolicy): _125.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _125.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _125.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupPolicyDecisionPolicy): _125.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _125.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupPolicyDecisionPolicyResponse>): _125.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _125.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _125.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _125.MsgUpdateGroupPolicyDecisionPolicyResponse): _125.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _125.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _125.MsgUpdateGroupPolicyDecisionPolicyResponse): _125.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _125.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _125.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupPolicyDecisionPolicyResponse): _125.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _125.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_125.MsgUpdateGroupPolicyMetadata>): _125.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _125.MsgUpdateGroupPolicyMetadataAmino): _125.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _125.MsgUpdateGroupPolicyMetadata): _125.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupPolicyMetadataAminoMsg): _125.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _125.MsgUpdateGroupPolicyMetadata): _125.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupPolicyMetadataProtoMsg): _125.MsgUpdateGroupPolicyMetadata;
                toProto(message: _125.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupPolicyMetadata): _125.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _125.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupPolicyMetadataResponse>): _125.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _125.MsgUpdateGroupPolicyMetadataResponseAmino): _125.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _125.MsgUpdateGroupPolicyMetadataResponse): _125.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _125.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _125.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _125.MsgUpdateGroupPolicyMetadataResponse): _125.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _125.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _125.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _125.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _125.MsgUpdateGroupPolicyMetadataResponse): _125.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
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
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _125.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgWithdrawProposal;
                fromPartial(object: Partial<_125.MsgWithdrawProposal>): _125.MsgWithdrawProposal;
                fromAmino(object: _125.MsgWithdrawProposalAmino): _125.MsgWithdrawProposal;
                toAmino(message: _125.MsgWithdrawProposal): _125.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _125.MsgWithdrawProposalAminoMsg): _125.MsgWithdrawProposal;
                toAminoMsg(message: _125.MsgWithdrawProposal): _125.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _125.MsgWithdrawProposalProtoMsg): _125.MsgWithdrawProposal;
                toProto(message: _125.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _125.MsgWithdrawProposal): _125.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _125.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_125.MsgWithdrawProposalResponse>): _125.MsgWithdrawProposalResponse;
                fromAmino(_: _125.MsgWithdrawProposalResponseAmino): _125.MsgWithdrawProposalResponse;
                toAmino(_: _125.MsgWithdrawProposalResponse): _125.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _125.MsgWithdrawProposalResponseAminoMsg): _125.MsgWithdrawProposalResponse;
                toAminoMsg(message: _125.MsgWithdrawProposalResponse): _125.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _125.MsgWithdrawProposalResponseProtoMsg): _125.MsgWithdrawProposalResponse;
                toProto(message: _125.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _125.MsgWithdrawProposalResponse): _125.MsgWithdrawProposalResponseProtoMsg;
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
            MsgExec: {
                typeUrl: string;
                encode(message: _125.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgExec;
                fromPartial(object: Partial<_125.MsgExec>): _125.MsgExec;
                fromAmino(object: _125.MsgExecAmino): _125.MsgExec;
                toAmino(message: _125.MsgExec): _125.MsgExecAmino;
                fromAminoMsg(object: _125.MsgExecAminoMsg): _125.MsgExec;
                toAminoMsg(message: _125.MsgExec): _125.MsgExecAminoMsg;
                fromProtoMsg(message: _125.MsgExecProtoMsg): _125.MsgExec;
                toProto(message: _125.MsgExec): Uint8Array;
                toProtoMsg(message: _125.MsgExec): _125.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _125.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgExecResponse;
                fromPartial(object: Partial<_125.MsgExecResponse>): _125.MsgExecResponse;
                fromAmino(object: _125.MsgExecResponseAmino): _125.MsgExecResponse;
                toAmino(message: _125.MsgExecResponse): _125.MsgExecResponseAmino;
                fromAminoMsg(object: _125.MsgExecResponseAminoMsg): _125.MsgExecResponse;
                toAminoMsg(message: _125.MsgExecResponse): _125.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _125.MsgExecResponseProtoMsg): _125.MsgExecResponse;
                toProto(message: _125.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _125.MsgExecResponse): _125.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _125.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgLeaveGroup;
                fromPartial(object: Partial<_125.MsgLeaveGroup>): _125.MsgLeaveGroup;
                fromAmino(object: _125.MsgLeaveGroupAmino): _125.MsgLeaveGroup;
                toAmino(message: _125.MsgLeaveGroup): _125.MsgLeaveGroupAmino;
                fromAminoMsg(object: _125.MsgLeaveGroupAminoMsg): _125.MsgLeaveGroup;
                toAminoMsg(message: _125.MsgLeaveGroup): _125.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _125.MsgLeaveGroupProtoMsg): _125.MsgLeaveGroup;
                toProto(message: _125.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _125.MsgLeaveGroup): _125.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _125.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_125.MsgLeaveGroupResponse>): _125.MsgLeaveGroupResponse;
                fromAmino(_: _125.MsgLeaveGroupResponseAmino): _125.MsgLeaveGroupResponse;
                toAmino(_: _125.MsgLeaveGroupResponse): _125.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _125.MsgLeaveGroupResponseAminoMsg): _125.MsgLeaveGroupResponse;
                toAminoMsg(message: _125.MsgLeaveGroupResponse): _125.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _125.MsgLeaveGroupResponseProtoMsg): _125.MsgLeaveGroupResponse;
                toProto(message: _125.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _125.MsgLeaveGroupResponse): _125.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _124.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupInfoRequest;
                fromPartial(object: Partial<_124.QueryGroupInfoRequest>): _124.QueryGroupInfoRequest;
                fromAmino(object: _124.QueryGroupInfoRequestAmino): _124.QueryGroupInfoRequest;
                toAmino(message: _124.QueryGroupInfoRequest): _124.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _124.QueryGroupInfoRequestAminoMsg): _124.QueryGroupInfoRequest;
                toAminoMsg(message: _124.QueryGroupInfoRequest): _124.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _124.QueryGroupInfoRequestProtoMsg): _124.QueryGroupInfoRequest;
                toProto(message: _124.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _124.QueryGroupInfoRequest): _124.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _124.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupInfoResponse;
                fromPartial(object: Partial<_124.QueryGroupInfoResponse>): _124.QueryGroupInfoResponse;
                fromAmino(object: _124.QueryGroupInfoResponseAmino): _124.QueryGroupInfoResponse;
                toAmino(message: _124.QueryGroupInfoResponse): _124.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _124.QueryGroupInfoResponseAminoMsg): _124.QueryGroupInfoResponse;
                toAminoMsg(message: _124.QueryGroupInfoResponse): _124.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _124.QueryGroupInfoResponseProtoMsg): _124.QueryGroupInfoResponse;
                toProto(message: _124.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _124.QueryGroupInfoResponse): _124.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _124.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_124.QueryGroupPolicyInfoRequest>): _124.QueryGroupPolicyInfoRequest;
                fromAmino(object: _124.QueryGroupPolicyInfoRequestAmino): _124.QueryGroupPolicyInfoRequest;
                toAmino(message: _124.QueryGroupPolicyInfoRequest): _124.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _124.QueryGroupPolicyInfoRequestAminoMsg): _124.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _124.QueryGroupPolicyInfoRequest): _124.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _124.QueryGroupPolicyInfoRequestProtoMsg): _124.QueryGroupPolicyInfoRequest;
                toProto(message: _124.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _124.QueryGroupPolicyInfoRequest): _124.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _124.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_124.QueryGroupPolicyInfoResponse>): _124.QueryGroupPolicyInfoResponse;
                fromAmino(object: _124.QueryGroupPolicyInfoResponseAmino): _124.QueryGroupPolicyInfoResponse;
                toAmino(message: _124.QueryGroupPolicyInfoResponse): _124.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _124.QueryGroupPolicyInfoResponseAminoMsg): _124.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _124.QueryGroupPolicyInfoResponse): _124.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _124.QueryGroupPolicyInfoResponseProtoMsg): _124.QueryGroupPolicyInfoResponse;
                toProto(message: _124.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _124.QueryGroupPolicyInfoResponse): _124.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _124.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupMembersRequest;
                fromPartial(object: Partial<_124.QueryGroupMembersRequest>): _124.QueryGroupMembersRequest;
                fromAmino(object: _124.QueryGroupMembersRequestAmino): _124.QueryGroupMembersRequest;
                toAmino(message: _124.QueryGroupMembersRequest): _124.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _124.QueryGroupMembersRequestAminoMsg): _124.QueryGroupMembersRequest;
                toAminoMsg(message: _124.QueryGroupMembersRequest): _124.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _124.QueryGroupMembersRequestProtoMsg): _124.QueryGroupMembersRequest;
                toProto(message: _124.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _124.QueryGroupMembersRequest): _124.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _124.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupMembersResponse;
                fromPartial(object: Partial<_124.QueryGroupMembersResponse>): _124.QueryGroupMembersResponse;
                fromAmino(object: _124.QueryGroupMembersResponseAmino): _124.QueryGroupMembersResponse;
                toAmino(message: _124.QueryGroupMembersResponse): _124.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _124.QueryGroupMembersResponseAminoMsg): _124.QueryGroupMembersResponse;
                toAminoMsg(message: _124.QueryGroupMembersResponse): _124.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _124.QueryGroupMembersResponseProtoMsg): _124.QueryGroupMembersResponse;
                toProto(message: _124.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _124.QueryGroupMembersResponse): _124.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _124.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_124.QueryGroupsByAdminRequest>): _124.QueryGroupsByAdminRequest;
                fromAmino(object: _124.QueryGroupsByAdminRequestAmino): _124.QueryGroupsByAdminRequest;
                toAmino(message: _124.QueryGroupsByAdminRequest): _124.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _124.QueryGroupsByAdminRequestAminoMsg): _124.QueryGroupsByAdminRequest;
                toAminoMsg(message: _124.QueryGroupsByAdminRequest): _124.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _124.QueryGroupsByAdminRequestProtoMsg): _124.QueryGroupsByAdminRequest;
                toProto(message: _124.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _124.QueryGroupsByAdminRequest): _124.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _124.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_124.QueryGroupsByAdminResponse>): _124.QueryGroupsByAdminResponse;
                fromAmino(object: _124.QueryGroupsByAdminResponseAmino): _124.QueryGroupsByAdminResponse;
                toAmino(message: _124.QueryGroupsByAdminResponse): _124.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _124.QueryGroupsByAdminResponseAminoMsg): _124.QueryGroupsByAdminResponse;
                toAminoMsg(message: _124.QueryGroupsByAdminResponse): _124.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _124.QueryGroupsByAdminResponseProtoMsg): _124.QueryGroupsByAdminResponse;
                toProto(message: _124.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _124.QueryGroupsByAdminResponse): _124.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _124.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_124.QueryGroupPoliciesByGroupRequest>): _124.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _124.QueryGroupPoliciesByGroupRequestAmino): _124.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _124.QueryGroupPoliciesByGroupRequest): _124.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _124.QueryGroupPoliciesByGroupRequestAminoMsg): _124.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _124.QueryGroupPoliciesByGroupRequest): _124.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _124.QueryGroupPoliciesByGroupRequestProtoMsg): _124.QueryGroupPoliciesByGroupRequest;
                toProto(message: _124.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _124.QueryGroupPoliciesByGroupRequest): _124.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _124.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_124.QueryGroupPoliciesByGroupResponse>): _124.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _124.QueryGroupPoliciesByGroupResponseAmino): _124.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _124.QueryGroupPoliciesByGroupResponse): _124.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _124.QueryGroupPoliciesByGroupResponseAminoMsg): _124.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _124.QueryGroupPoliciesByGroupResponse): _124.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _124.QueryGroupPoliciesByGroupResponseProtoMsg): _124.QueryGroupPoliciesByGroupResponse;
                toProto(message: _124.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _124.QueryGroupPoliciesByGroupResponse): _124.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _124.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_124.QueryGroupPoliciesByAdminRequest>): _124.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _124.QueryGroupPoliciesByAdminRequestAmino): _124.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _124.QueryGroupPoliciesByAdminRequest): _124.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _124.QueryGroupPoliciesByAdminRequestAminoMsg): _124.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _124.QueryGroupPoliciesByAdminRequest): _124.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _124.QueryGroupPoliciesByAdminRequestProtoMsg): _124.QueryGroupPoliciesByAdminRequest;
                toProto(message: _124.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _124.QueryGroupPoliciesByAdminRequest): _124.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _124.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_124.QueryGroupPoliciesByAdminResponse>): _124.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _124.QueryGroupPoliciesByAdminResponseAmino): _124.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _124.QueryGroupPoliciesByAdminResponse): _124.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _124.QueryGroupPoliciesByAdminResponseAminoMsg): _124.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _124.QueryGroupPoliciesByAdminResponse): _124.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _124.QueryGroupPoliciesByAdminResponseProtoMsg): _124.QueryGroupPoliciesByAdminResponse;
                toProto(message: _124.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _124.QueryGroupPoliciesByAdminResponse): _124.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
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
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _124.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_124.QueryProposalsByGroupPolicyRequest>): _124.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _124.QueryProposalsByGroupPolicyRequestAmino): _124.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _124.QueryProposalsByGroupPolicyRequest): _124.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _124.QueryProposalsByGroupPolicyRequestAminoMsg): _124.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _124.QueryProposalsByGroupPolicyRequest): _124.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _124.QueryProposalsByGroupPolicyRequestProtoMsg): _124.QueryProposalsByGroupPolicyRequest;
                toProto(message: _124.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _124.QueryProposalsByGroupPolicyRequest): _124.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _124.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_124.QueryProposalsByGroupPolicyResponse>): _124.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _124.QueryProposalsByGroupPolicyResponseAmino): _124.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _124.QueryProposalsByGroupPolicyResponse): _124.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _124.QueryProposalsByGroupPolicyResponseAminoMsg): _124.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _124.QueryProposalsByGroupPolicyResponse): _124.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _124.QueryProposalsByGroupPolicyResponseProtoMsg): _124.QueryProposalsByGroupPolicyResponse;
                toProto(message: _124.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _124.QueryProposalsByGroupPolicyResponse): _124.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _124.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_124.QueryVoteByProposalVoterRequest>): _124.QueryVoteByProposalVoterRequest;
                fromAmino(object: _124.QueryVoteByProposalVoterRequestAmino): _124.QueryVoteByProposalVoterRequest;
                toAmino(message: _124.QueryVoteByProposalVoterRequest): _124.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _124.QueryVoteByProposalVoterRequestAminoMsg): _124.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _124.QueryVoteByProposalVoterRequest): _124.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _124.QueryVoteByProposalVoterRequestProtoMsg): _124.QueryVoteByProposalVoterRequest;
                toProto(message: _124.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _124.QueryVoteByProposalVoterRequest): _124.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _124.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_124.QueryVoteByProposalVoterResponse>): _124.QueryVoteByProposalVoterResponse;
                fromAmino(object: _124.QueryVoteByProposalVoterResponseAmino): _124.QueryVoteByProposalVoterResponse;
                toAmino(message: _124.QueryVoteByProposalVoterResponse): _124.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _124.QueryVoteByProposalVoterResponseAminoMsg): _124.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _124.QueryVoteByProposalVoterResponse): _124.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _124.QueryVoteByProposalVoterResponseProtoMsg): _124.QueryVoteByProposalVoterResponse;
                toProto(message: _124.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _124.QueryVoteByProposalVoterResponse): _124.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _124.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_124.QueryVotesByProposalRequest>): _124.QueryVotesByProposalRequest;
                fromAmino(object: _124.QueryVotesByProposalRequestAmino): _124.QueryVotesByProposalRequest;
                toAmino(message: _124.QueryVotesByProposalRequest): _124.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _124.QueryVotesByProposalRequestAminoMsg): _124.QueryVotesByProposalRequest;
                toAminoMsg(message: _124.QueryVotesByProposalRequest): _124.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _124.QueryVotesByProposalRequestProtoMsg): _124.QueryVotesByProposalRequest;
                toProto(message: _124.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _124.QueryVotesByProposalRequest): _124.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _124.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_124.QueryVotesByProposalResponse>): _124.QueryVotesByProposalResponse;
                fromAmino(object: _124.QueryVotesByProposalResponseAmino): _124.QueryVotesByProposalResponse;
                toAmino(message: _124.QueryVotesByProposalResponse): _124.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _124.QueryVotesByProposalResponseAminoMsg): _124.QueryVotesByProposalResponse;
                toAminoMsg(message: _124.QueryVotesByProposalResponse): _124.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _124.QueryVotesByProposalResponseProtoMsg): _124.QueryVotesByProposalResponse;
                toProto(message: _124.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _124.QueryVotesByProposalResponse): _124.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _124.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_124.QueryVotesByVoterRequest>): _124.QueryVotesByVoterRequest;
                fromAmino(object: _124.QueryVotesByVoterRequestAmino): _124.QueryVotesByVoterRequest;
                toAmino(message: _124.QueryVotesByVoterRequest): _124.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _124.QueryVotesByVoterRequestAminoMsg): _124.QueryVotesByVoterRequest;
                toAminoMsg(message: _124.QueryVotesByVoterRequest): _124.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _124.QueryVotesByVoterRequestProtoMsg): _124.QueryVotesByVoterRequest;
                toProto(message: _124.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _124.QueryVotesByVoterRequest): _124.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _124.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_124.QueryVotesByVoterResponse>): _124.QueryVotesByVoterResponse;
                fromAmino(object: _124.QueryVotesByVoterResponseAmino): _124.QueryVotesByVoterResponse;
                toAmino(message: _124.QueryVotesByVoterResponse): _124.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _124.QueryVotesByVoterResponseAminoMsg): _124.QueryVotesByVoterResponse;
                toAminoMsg(message: _124.QueryVotesByVoterResponse): _124.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _124.QueryVotesByVoterResponseProtoMsg): _124.QueryVotesByVoterResponse;
                toProto(message: _124.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _124.QueryVotesByVoterResponse): _124.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _124.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_124.QueryGroupsByMemberRequest>): _124.QueryGroupsByMemberRequest;
                fromAmino(object: _124.QueryGroupsByMemberRequestAmino): _124.QueryGroupsByMemberRequest;
                toAmino(message: _124.QueryGroupsByMemberRequest): _124.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _124.QueryGroupsByMemberRequestAminoMsg): _124.QueryGroupsByMemberRequest;
                toAminoMsg(message: _124.QueryGroupsByMemberRequest): _124.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _124.QueryGroupsByMemberRequestProtoMsg): _124.QueryGroupsByMemberRequest;
                toProto(message: _124.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _124.QueryGroupsByMemberRequest): _124.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _124.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_124.QueryGroupsByMemberResponse>): _124.QueryGroupsByMemberResponse;
                fromAmino(object: _124.QueryGroupsByMemberResponseAmino): _124.QueryGroupsByMemberResponse;
                toAmino(message: _124.QueryGroupsByMemberResponse): _124.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _124.QueryGroupsByMemberResponseAminoMsg): _124.QueryGroupsByMemberResponse;
                toAminoMsg(message: _124.QueryGroupsByMemberResponse): _124.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _124.QueryGroupsByMemberResponseProtoMsg): _124.QueryGroupsByMemberResponse;
                toProto(message: _124.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _124.QueryGroupsByMemberResponse): _124.QueryGroupsByMemberResponseProtoMsg;
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
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _124.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupsRequest;
                fromPartial(object: Partial<_124.QueryGroupsRequest>): _124.QueryGroupsRequest;
                fromAmino(object: _124.QueryGroupsRequestAmino): _124.QueryGroupsRequest;
                toAmino(message: _124.QueryGroupsRequest): _124.QueryGroupsRequestAmino;
                fromAminoMsg(object: _124.QueryGroupsRequestAminoMsg): _124.QueryGroupsRequest;
                toAminoMsg(message: _124.QueryGroupsRequest): _124.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _124.QueryGroupsRequestProtoMsg): _124.QueryGroupsRequest;
                toProto(message: _124.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _124.QueryGroupsRequest): _124.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _124.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryGroupsResponse;
                fromPartial(object: Partial<_124.QueryGroupsResponse>): _124.QueryGroupsResponse;
                fromAmino(object: _124.QueryGroupsResponseAmino): _124.QueryGroupsResponse;
                toAmino(message: _124.QueryGroupsResponse): _124.QueryGroupsResponseAmino;
                fromAminoMsg(object: _124.QueryGroupsResponseAminoMsg): _124.QueryGroupsResponse;
                toAminoMsg(message: _124.QueryGroupsResponse): _124.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _124.QueryGroupsResponseProtoMsg): _124.QueryGroupsResponse;
                toProto(message: _124.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _124.QueryGroupsResponse): _124.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _123.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.GenesisState;
                fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
                fromAmino(object: _123.GenesisStateAmino): _123.GenesisState;
                toAmino(message: _123.GenesisState): _123.GenesisStateAmino;
                fromAminoMsg(object: _123.GenesisStateAminoMsg): _123.GenesisState;
                toAminoMsg(message: _123.GenesisState): _123.GenesisStateAminoMsg;
                fromProtoMsg(message: _123.GenesisStateProtoMsg): _123.GenesisState;
                toProto(message: _123.GenesisState): Uint8Array;
                toProtoMsg(message: _123.GenesisState): _123.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _122.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.EventCreateGroup;
                fromPartial(object: Partial<_122.EventCreateGroup>): _122.EventCreateGroup;
                fromAmino(object: _122.EventCreateGroupAmino): _122.EventCreateGroup;
                toAmino(message: _122.EventCreateGroup): _122.EventCreateGroupAmino;
                fromAminoMsg(object: _122.EventCreateGroupAminoMsg): _122.EventCreateGroup;
                toAminoMsg(message: _122.EventCreateGroup): _122.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _122.EventCreateGroupProtoMsg): _122.EventCreateGroup;
                toProto(message: _122.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _122.EventCreateGroup): _122.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _122.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.EventUpdateGroup;
                fromPartial(object: Partial<_122.EventUpdateGroup>): _122.EventUpdateGroup;
                fromAmino(object: _122.EventUpdateGroupAmino): _122.EventUpdateGroup;
                toAmino(message: _122.EventUpdateGroup): _122.EventUpdateGroupAmino;
                fromAminoMsg(object: _122.EventUpdateGroupAminoMsg): _122.EventUpdateGroup;
                toAminoMsg(message: _122.EventUpdateGroup): _122.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _122.EventUpdateGroupProtoMsg): _122.EventUpdateGroup;
                toProto(message: _122.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _122.EventUpdateGroup): _122.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _122.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.EventCreateGroupPolicy;
                fromPartial(object: Partial<_122.EventCreateGroupPolicy>): _122.EventCreateGroupPolicy;
                fromAmino(object: _122.EventCreateGroupPolicyAmino): _122.EventCreateGroupPolicy;
                toAmino(message: _122.EventCreateGroupPolicy): _122.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _122.EventCreateGroupPolicyAminoMsg): _122.EventCreateGroupPolicy;
                toAminoMsg(message: _122.EventCreateGroupPolicy): _122.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _122.EventCreateGroupPolicyProtoMsg): _122.EventCreateGroupPolicy;
                toProto(message: _122.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _122.EventCreateGroupPolicy): _122.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _122.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_122.EventUpdateGroupPolicy>): _122.EventUpdateGroupPolicy;
                fromAmino(object: _122.EventUpdateGroupPolicyAmino): _122.EventUpdateGroupPolicy;
                toAmino(message: _122.EventUpdateGroupPolicy): _122.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _122.EventUpdateGroupPolicyAminoMsg): _122.EventUpdateGroupPolicy;
                toAminoMsg(message: _122.EventUpdateGroupPolicy): _122.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _122.EventUpdateGroupPolicyProtoMsg): _122.EventUpdateGroupPolicy;
                toProto(message: _122.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _122.EventUpdateGroupPolicy): _122.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _122.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.EventSubmitProposal;
                fromPartial(object: Partial<_122.EventSubmitProposal>): _122.EventSubmitProposal;
                fromAmino(object: _122.EventSubmitProposalAmino): _122.EventSubmitProposal;
                toAmino(message: _122.EventSubmitProposal): _122.EventSubmitProposalAmino;
                fromAminoMsg(object: _122.EventSubmitProposalAminoMsg): _122.EventSubmitProposal;
                toAminoMsg(message: _122.EventSubmitProposal): _122.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _122.EventSubmitProposalProtoMsg): _122.EventSubmitProposal;
                toProto(message: _122.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _122.EventSubmitProposal): _122.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _122.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.EventWithdrawProposal;
                fromPartial(object: Partial<_122.EventWithdrawProposal>): _122.EventWithdrawProposal;
                fromAmino(object: _122.EventWithdrawProposalAmino): _122.EventWithdrawProposal;
                toAmino(message: _122.EventWithdrawProposal): _122.EventWithdrawProposalAmino;
                fromAminoMsg(object: _122.EventWithdrawProposalAminoMsg): _122.EventWithdrawProposal;
                toAminoMsg(message: _122.EventWithdrawProposal): _122.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _122.EventWithdrawProposalProtoMsg): _122.EventWithdrawProposal;
                toProto(message: _122.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _122.EventWithdrawProposal): _122.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _122.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.EventVote;
                fromPartial(object: Partial<_122.EventVote>): _122.EventVote;
                fromAmino(object: _122.EventVoteAmino): _122.EventVote;
                toAmino(message: _122.EventVote): _122.EventVoteAmino;
                fromAminoMsg(object: _122.EventVoteAminoMsg): _122.EventVote;
                toAminoMsg(message: _122.EventVote): _122.EventVoteAminoMsg;
                fromProtoMsg(message: _122.EventVoteProtoMsg): _122.EventVote;
                toProto(message: _122.EventVote): Uint8Array;
                toProtoMsg(message: _122.EventVote): _122.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _122.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.EventExec;
                fromPartial(object: Partial<_122.EventExec>): _122.EventExec;
                fromAmino(object: _122.EventExecAmino): _122.EventExec;
                toAmino(message: _122.EventExec): _122.EventExecAmino;
                fromAminoMsg(object: _122.EventExecAminoMsg): _122.EventExec;
                toAminoMsg(message: _122.EventExec): _122.EventExecAminoMsg;
                fromProtoMsg(message: _122.EventExecProtoMsg): _122.EventExec;
                toProto(message: _122.EventExec): Uint8Array;
                toProtoMsg(message: _122.EventExec): _122.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _122.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.EventLeaveGroup;
                fromPartial(object: Partial<_122.EventLeaveGroup>): _122.EventLeaveGroup;
                fromAmino(object: _122.EventLeaveGroupAmino): _122.EventLeaveGroup;
                toAmino(message: _122.EventLeaveGroup): _122.EventLeaveGroupAmino;
                fromAminoMsg(object: _122.EventLeaveGroupAminoMsg): _122.EventLeaveGroup;
                toAminoMsg(message: _122.EventLeaveGroup): _122.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _122.EventLeaveGroupProtoMsg): _122.EventLeaveGroup;
                toProto(message: _122.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _122.EventLeaveGroup): _122.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _122.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.EventProposalPruned;
                fromPartial(object: Partial<_122.EventProposalPruned>): _122.EventProposalPruned;
                fromAmino(object: _122.EventProposalPrunedAmino): _122.EventProposalPruned;
                toAmino(message: _122.EventProposalPruned): _122.EventProposalPrunedAmino;
                fromAminoMsg(object: _122.EventProposalPrunedAminoMsg): _122.EventProposalPruned;
                toAminoMsg(message: _122.EventProposalPruned): _122.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _122.EventProposalPrunedProtoMsg): _122.EventProposalPruned;
                toProto(message: _122.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _122.EventProposalPruned): _122.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _127.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.Module;
                    fromPartial(object: Partial<_127.Module>): _127.Module;
                    fromAmino(object: _127.ModuleAmino): _127.Module;
                    toAmino(message: _127.Module): _127.ModuleAmino;
                    fromAminoMsg(object: _127.ModuleAminoMsg): _127.Module;
                    toAminoMsg(message: _127.Module): _127.ModuleAminoMsg;
                    fromProtoMsg(message: _127.ModuleProtoMsg): _127.Module;
                    toProto(message: _127.Module): Uint8Array;
                    toProtoMsg(message: _127.Module): _127.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
                inflation(request?: _130.QueryInflationRequest): Promise<_130.QueryInflationResponse>;
                annualProvisions(request?: _130.QueryAnnualProvisionsRequest): Promise<_130.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _260.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _131.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _131.MsgUpdateParams): {
                        typeUrl: string;
                        value: _131.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _131.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _131.MsgUpdateParams): {
                        typeUrl: string;
                        value: _131.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _131.MsgUpdateParams) => _131.MsgUpdateParamsAmino;
                    fromAmino: (object: _131.MsgUpdateParamsAmino) => _131.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _131.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MsgUpdateParams;
                fromPartial(object: Partial<_131.MsgUpdateParams>): _131.MsgUpdateParams;
                fromAmino(object: _131.MsgUpdateParamsAmino): _131.MsgUpdateParams;
                toAmino(message: _131.MsgUpdateParams): _131.MsgUpdateParamsAmino;
                fromAminoMsg(object: _131.MsgUpdateParamsAminoMsg): _131.MsgUpdateParams;
                toAminoMsg(message: _131.MsgUpdateParams): _131.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _131.MsgUpdateParamsProtoMsg): _131.MsgUpdateParams;
                toProto(message: _131.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateParams): _131.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _131.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_131.MsgUpdateParamsResponse>): _131.MsgUpdateParamsResponse;
                fromAmino(_: _131.MsgUpdateParamsResponseAmino): _131.MsgUpdateParamsResponse;
                toAmino(_: _131.MsgUpdateParamsResponse): _131.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _131.MsgUpdateParamsResponseAminoMsg): _131.MsgUpdateParamsResponse;
                toAminoMsg(message: _131.MsgUpdateParamsResponse): _131.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _131.MsgUpdateParamsResponseProtoMsg): _131.MsgUpdateParamsResponse;
                toProto(message: _131.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateParamsResponse): _131.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _130.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.QueryParamsRequest;
                fromPartial(_: Partial<_130.QueryParamsRequest>): _130.QueryParamsRequest;
                fromAmino(_: _130.QueryParamsRequestAmino): _130.QueryParamsRequest;
                toAmino(_: _130.QueryParamsRequest): _130.QueryParamsRequestAmino;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _130.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.QueryInflationRequest;
                fromPartial(_: Partial<_130.QueryInflationRequest>): _130.QueryInflationRequest;
                fromAmino(_: _130.QueryInflationRequestAmino): _130.QueryInflationRequest;
                toAmino(_: _130.QueryInflationRequest): _130.QueryInflationRequestAmino;
                fromAminoMsg(object: _130.QueryInflationRequestAminoMsg): _130.QueryInflationRequest;
                toAminoMsg(message: _130.QueryInflationRequest): _130.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _130.QueryInflationRequestProtoMsg): _130.QueryInflationRequest;
                toProto(message: _130.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _130.QueryInflationRequest): _130.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _130.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.QueryInflationResponse;
                fromPartial(object: Partial<_130.QueryInflationResponse>): _130.QueryInflationResponse;
                fromAmino(object: _130.QueryInflationResponseAmino): _130.QueryInflationResponse;
                toAmino(message: _130.QueryInflationResponse): _130.QueryInflationResponseAmino;
                fromAminoMsg(object: _130.QueryInflationResponseAminoMsg): _130.QueryInflationResponse;
                toAminoMsg(message: _130.QueryInflationResponse): _130.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _130.QueryInflationResponseProtoMsg): _130.QueryInflationResponse;
                toProto(message: _130.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _130.QueryInflationResponse): _130.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _130.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_130.QueryAnnualProvisionsRequest>): _130.QueryAnnualProvisionsRequest;
                fromAmino(_: _130.QueryAnnualProvisionsRequestAmino): _130.QueryAnnualProvisionsRequest;
                toAmino(_: _130.QueryAnnualProvisionsRequest): _130.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _130.QueryAnnualProvisionsRequestAminoMsg): _130.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _130.QueryAnnualProvisionsRequest): _130.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _130.QueryAnnualProvisionsRequestProtoMsg): _130.QueryAnnualProvisionsRequest;
                toProto(message: _130.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _130.QueryAnnualProvisionsRequest): _130.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _130.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_130.QueryAnnualProvisionsResponse>): _130.QueryAnnualProvisionsResponse;
                fromAmino(object: _130.QueryAnnualProvisionsResponseAmino): _130.QueryAnnualProvisionsResponse;
                toAmino(message: _130.QueryAnnualProvisionsResponse): _130.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _130.QueryAnnualProvisionsResponseAminoMsg): _130.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _130.QueryAnnualProvisionsResponse): _130.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _130.QueryAnnualProvisionsResponseProtoMsg): _130.QueryAnnualProvisionsResponse;
                toProto(message: _130.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _130.QueryAnnualProvisionsResponse): _130.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _129.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.Minter;
                fromPartial(object: Partial<_129.Minter>): _129.Minter;
                fromAmino(object: _129.MinterAmino): _129.Minter;
                toAmino(message: _129.Minter): _129.MinterAmino;
                fromAminoMsg(object: _129.MinterAminoMsg): _129.Minter;
                toAminoMsg(message: _129.Minter): _129.MinterAminoMsg;
                fromProtoMsg(message: _129.MinterProtoMsg): _129.Minter;
                toProto(message: _129.Minter): Uint8Array;
                toProtoMsg(message: _129.Minter): _129.MinterProtoMsg;
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
                    encode(_: _133.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _133.Module;
                    fromPartial(_: Partial<_133.Module>): _133.Module;
                    fromAmino(_: _133.ModuleAmino): _133.Module;
                    toAmino(_: _133.Module): _133.ModuleAmino;
                    fromAminoMsg(object: _133.ModuleAminoMsg): _133.Module;
                    toAminoMsg(message: _133.Module): _133.ModuleAminoMsg;
                    fromProtoMsg(message: _133.ModuleProtoMsg): _133.Module;
                    toProto(message: _133.Module): Uint8Array;
                    toProtoMsg(message: _133.Module): _133.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _137.QueryBalanceRequest): Promise<_137.QueryBalanceResponse>;
                owner(request: _137.QueryOwnerRequest): Promise<_137.QueryOwnerResponse>;
                supply(request: _137.QuerySupplyRequest): Promise<_137.QuerySupplyResponse>;
                nFTs(request: _137.QueryNFTsRequest): Promise<_137.QueryNFTsResponse>;
                nFT(request: _137.QueryNFTRequest): Promise<_137.QueryNFTResponse>;
                class(request: _137.QueryClassRequest): Promise<_137.QueryClassResponse>;
                classes(request?: _137.QueryClassesRequest): Promise<_137.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _138.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _138.MsgSend): {
                        typeUrl: string;
                        value: _138.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _138.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _138.MsgSend): {
                        typeUrl: string;
                        value: _138.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _138.MsgSend) => _138.MsgSendAmino;
                    fromAmino: (object: _138.MsgSendAmino) => _138.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _138.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.MsgSend;
                fromPartial(object: Partial<_138.MsgSend>): _138.MsgSend;
                fromAmino(object: _138.MsgSendAmino): _138.MsgSend;
                toAmino(message: _138.MsgSend): _138.MsgSendAmino;
                fromAminoMsg(object: _138.MsgSendAminoMsg): _138.MsgSend;
                toAminoMsg(message: _138.MsgSend): _138.MsgSendAminoMsg;
                fromProtoMsg(message: _138.MsgSendProtoMsg): _138.MsgSend;
                toProto(message: _138.MsgSend): Uint8Array;
                toProtoMsg(message: _138.MsgSend): _138.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _138.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.MsgSendResponse;
                fromPartial(_: Partial<_138.MsgSendResponse>): _138.MsgSendResponse;
                fromAmino(_: _138.MsgSendResponseAmino): _138.MsgSendResponse;
                toAmino(_: _138.MsgSendResponse): _138.MsgSendResponseAmino;
                fromAminoMsg(object: _138.MsgSendResponseAminoMsg): _138.MsgSendResponse;
                toAminoMsg(message: _138.MsgSendResponse): _138.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _138.MsgSendResponseProtoMsg): _138.MsgSendResponse;
                toProto(message: _138.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _138.MsgSendResponse): _138.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _137.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryBalanceRequest;
                fromPartial(object: Partial<_137.QueryBalanceRequest>): _137.QueryBalanceRequest;
                fromAmino(object: _137.QueryBalanceRequestAmino): _137.QueryBalanceRequest;
                toAmino(message: _137.QueryBalanceRequest): _137.QueryBalanceRequestAmino;
                fromAminoMsg(object: _137.QueryBalanceRequestAminoMsg): _137.QueryBalanceRequest;
                toAminoMsg(message: _137.QueryBalanceRequest): _137.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _137.QueryBalanceRequestProtoMsg): _137.QueryBalanceRequest;
                toProto(message: _137.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _137.QueryBalanceRequest): _137.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _137.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryBalanceResponse;
                fromPartial(object: Partial<_137.QueryBalanceResponse>): _137.QueryBalanceResponse;
                fromAmino(object: _137.QueryBalanceResponseAmino): _137.QueryBalanceResponse;
                toAmino(message: _137.QueryBalanceResponse): _137.QueryBalanceResponseAmino;
                fromAminoMsg(object: _137.QueryBalanceResponseAminoMsg): _137.QueryBalanceResponse;
                toAminoMsg(message: _137.QueryBalanceResponse): _137.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _137.QueryBalanceResponseProtoMsg): _137.QueryBalanceResponse;
                toProto(message: _137.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _137.QueryBalanceResponse): _137.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _137.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryOwnerRequest;
                fromPartial(object: Partial<_137.QueryOwnerRequest>): _137.QueryOwnerRequest;
                fromAmino(object: _137.QueryOwnerRequestAmino): _137.QueryOwnerRequest;
                toAmino(message: _137.QueryOwnerRequest): _137.QueryOwnerRequestAmino;
                fromAminoMsg(object: _137.QueryOwnerRequestAminoMsg): _137.QueryOwnerRequest;
                toAminoMsg(message: _137.QueryOwnerRequest): _137.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _137.QueryOwnerRequestProtoMsg): _137.QueryOwnerRequest;
                toProto(message: _137.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _137.QueryOwnerRequest): _137.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _137.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryOwnerResponse;
                fromPartial(object: Partial<_137.QueryOwnerResponse>): _137.QueryOwnerResponse;
                fromAmino(object: _137.QueryOwnerResponseAmino): _137.QueryOwnerResponse;
                toAmino(message: _137.QueryOwnerResponse): _137.QueryOwnerResponseAmino;
                fromAminoMsg(object: _137.QueryOwnerResponseAminoMsg): _137.QueryOwnerResponse;
                toAminoMsg(message: _137.QueryOwnerResponse): _137.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _137.QueryOwnerResponseProtoMsg): _137.QueryOwnerResponse;
                toProto(message: _137.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _137.QueryOwnerResponse): _137.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _137.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QuerySupplyRequest;
                fromPartial(object: Partial<_137.QuerySupplyRequest>): _137.QuerySupplyRequest;
                fromAmino(object: _137.QuerySupplyRequestAmino): _137.QuerySupplyRequest;
                toAmino(message: _137.QuerySupplyRequest): _137.QuerySupplyRequestAmino;
                fromAminoMsg(object: _137.QuerySupplyRequestAminoMsg): _137.QuerySupplyRequest;
                toAminoMsg(message: _137.QuerySupplyRequest): _137.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _137.QuerySupplyRequestProtoMsg): _137.QuerySupplyRequest;
                toProto(message: _137.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _137.QuerySupplyRequest): _137.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _137.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QuerySupplyResponse;
                fromPartial(object: Partial<_137.QuerySupplyResponse>): _137.QuerySupplyResponse;
                fromAmino(object: _137.QuerySupplyResponseAmino): _137.QuerySupplyResponse;
                toAmino(message: _137.QuerySupplyResponse): _137.QuerySupplyResponseAmino;
                fromAminoMsg(object: _137.QuerySupplyResponseAminoMsg): _137.QuerySupplyResponse;
                toAminoMsg(message: _137.QuerySupplyResponse): _137.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _137.QuerySupplyResponseProtoMsg): _137.QuerySupplyResponse;
                toProto(message: _137.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _137.QuerySupplyResponse): _137.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _137.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryNFTsRequest;
                fromPartial(object: Partial<_137.QueryNFTsRequest>): _137.QueryNFTsRequest;
                fromAmino(object: _137.QueryNFTsRequestAmino): _137.QueryNFTsRequest;
                toAmino(message: _137.QueryNFTsRequest): _137.QueryNFTsRequestAmino;
                fromAminoMsg(object: _137.QueryNFTsRequestAminoMsg): _137.QueryNFTsRequest;
                toAminoMsg(message: _137.QueryNFTsRequest): _137.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _137.QueryNFTsRequestProtoMsg): _137.QueryNFTsRequest;
                toProto(message: _137.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _137.QueryNFTsRequest): _137.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _137.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryNFTsResponse;
                fromPartial(object: Partial<_137.QueryNFTsResponse>): _137.QueryNFTsResponse;
                fromAmino(object: _137.QueryNFTsResponseAmino): _137.QueryNFTsResponse;
                toAmino(message: _137.QueryNFTsResponse): _137.QueryNFTsResponseAmino;
                fromAminoMsg(object: _137.QueryNFTsResponseAminoMsg): _137.QueryNFTsResponse;
                toAminoMsg(message: _137.QueryNFTsResponse): _137.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _137.QueryNFTsResponseProtoMsg): _137.QueryNFTsResponse;
                toProto(message: _137.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _137.QueryNFTsResponse): _137.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _137.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryNFTRequest;
                fromPartial(object: Partial<_137.QueryNFTRequest>): _137.QueryNFTRequest;
                fromAmino(object: _137.QueryNFTRequestAmino): _137.QueryNFTRequest;
                toAmino(message: _137.QueryNFTRequest): _137.QueryNFTRequestAmino;
                fromAminoMsg(object: _137.QueryNFTRequestAminoMsg): _137.QueryNFTRequest;
                toAminoMsg(message: _137.QueryNFTRequest): _137.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _137.QueryNFTRequestProtoMsg): _137.QueryNFTRequest;
                toProto(message: _137.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _137.QueryNFTRequest): _137.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _137.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryNFTResponse;
                fromPartial(object: Partial<_137.QueryNFTResponse>): _137.QueryNFTResponse;
                fromAmino(object: _137.QueryNFTResponseAmino): _137.QueryNFTResponse;
                toAmino(message: _137.QueryNFTResponse): _137.QueryNFTResponseAmino;
                fromAminoMsg(object: _137.QueryNFTResponseAminoMsg): _137.QueryNFTResponse;
                toAminoMsg(message: _137.QueryNFTResponse): _137.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _137.QueryNFTResponseProtoMsg): _137.QueryNFTResponse;
                toProto(message: _137.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _137.QueryNFTResponse): _137.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _137.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryClassRequest;
                fromPartial(object: Partial<_137.QueryClassRequest>): _137.QueryClassRequest;
                fromAmino(object: _137.QueryClassRequestAmino): _137.QueryClassRequest;
                toAmino(message: _137.QueryClassRequest): _137.QueryClassRequestAmino;
                fromAminoMsg(object: _137.QueryClassRequestAminoMsg): _137.QueryClassRequest;
                toAminoMsg(message: _137.QueryClassRequest): _137.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _137.QueryClassRequestProtoMsg): _137.QueryClassRequest;
                toProto(message: _137.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _137.QueryClassRequest): _137.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _137.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryClassResponse;
                fromPartial(object: Partial<_137.QueryClassResponse>): _137.QueryClassResponse;
                fromAmino(object: _137.QueryClassResponseAmino): _137.QueryClassResponse;
                toAmino(message: _137.QueryClassResponse): _137.QueryClassResponseAmino;
                fromAminoMsg(object: _137.QueryClassResponseAminoMsg): _137.QueryClassResponse;
                toAminoMsg(message: _137.QueryClassResponse): _137.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _137.QueryClassResponseProtoMsg): _137.QueryClassResponse;
                toProto(message: _137.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _137.QueryClassResponse): _137.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _137.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryClassesRequest;
                fromPartial(object: Partial<_137.QueryClassesRequest>): _137.QueryClassesRequest;
                fromAmino(object: _137.QueryClassesRequestAmino): _137.QueryClassesRequest;
                toAmino(message: _137.QueryClassesRequest): _137.QueryClassesRequestAmino;
                fromAminoMsg(object: _137.QueryClassesRequestAminoMsg): _137.QueryClassesRequest;
                toAminoMsg(message: _137.QueryClassesRequest): _137.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _137.QueryClassesRequestProtoMsg): _137.QueryClassesRequest;
                toProto(message: _137.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _137.QueryClassesRequest): _137.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _137.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.QueryClassesResponse;
                fromPartial(object: Partial<_137.QueryClassesResponse>): _137.QueryClassesResponse;
                fromAmino(object: _137.QueryClassesResponseAmino): _137.QueryClassesResponse;
                toAmino(message: _137.QueryClassesResponse): _137.QueryClassesResponseAmino;
                fromAminoMsg(object: _137.QueryClassesResponseAminoMsg): _137.QueryClassesResponse;
                toAminoMsg(message: _137.QueryClassesResponse): _137.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _137.QueryClassesResponseProtoMsg): _137.QueryClassesResponse;
                toProto(message: _137.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _137.QueryClassesResponse): _137.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _136.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.Class;
                fromPartial(object: Partial<_136.Class>): _136.Class;
                fromAmino(object: _136.ClassAmino): _136.Class;
                toAmino(message: _136.Class): _136.ClassAmino;
                fromAminoMsg(object: _136.ClassAminoMsg): _136.Class;
                toAminoMsg(message: _136.Class): _136.ClassAminoMsg;
                fromProtoMsg(message: _136.ClassProtoMsg): _136.Class;
                toProto(message: _136.Class): Uint8Array;
                toProtoMsg(message: _136.Class): _136.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _136.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.NFT;
                fromPartial(object: Partial<_136.NFT>): _136.NFT;
                fromAmino(object: _136.NFTAmino): _136.NFT;
                toAmino(message: _136.NFT): _136.NFTAmino;
                fromAminoMsg(object: _136.NFTAminoMsg): _136.NFT;
                toAminoMsg(message: _136.NFT): _136.NFTAminoMsg;
                fromProtoMsg(message: _136.NFTProtoMsg): _136.NFT;
                toProto(message: _136.NFT): Uint8Array;
                toProtoMsg(message: _136.NFT): _136.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _135.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.Entry;
                fromPartial(object: Partial<_135.Entry>): _135.Entry;
                fromAmino(object: _135.EntryAmino): _135.Entry;
                toAmino(message: _135.Entry): _135.EntryAmino;
                fromAminoMsg(object: _135.EntryAminoMsg): _135.Entry;
                toAminoMsg(message: _135.Entry): _135.EntryAminoMsg;
                fromProtoMsg(message: _135.EntryProtoMsg): _135.Entry;
                toProto(message: _135.Entry): Uint8Array;
                toProtoMsg(message: _135.Entry): _135.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _134.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.EventSend;
                fromPartial(object: Partial<_134.EventSend>): _134.EventSend;
                fromAmino(object: _134.EventSendAmino): _134.EventSend;
                toAmino(message: _134.EventSend): _134.EventSendAmino;
                fromAminoMsg(object: _134.EventSendAminoMsg): _134.EventSend;
                toAminoMsg(message: _134.EventSend): _134.EventSendAminoMsg;
                fromProtoMsg(message: _134.EventSendProtoMsg): _134.EventSend;
                toProto(message: _134.EventSend): Uint8Array;
                toProtoMsg(message: _134.EventSend): _134.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _134.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.EventMint;
                fromPartial(object: Partial<_134.EventMint>): _134.EventMint;
                fromAmino(object: _134.EventMintAmino): _134.EventMint;
                toAmino(message: _134.EventMint): _134.EventMintAmino;
                fromAminoMsg(object: _134.EventMintAminoMsg): _134.EventMint;
                toAminoMsg(message: _134.EventMint): _134.EventMintAminoMsg;
                fromProtoMsg(message: _134.EventMintProtoMsg): _134.EventMint;
                toProto(message: _134.EventMint): Uint8Array;
                toProtoMsg(message: _134.EventMint): _134.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _134.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.EventBurn;
                fromPartial(object: Partial<_134.EventBurn>): _134.EventBurn;
                fromAmino(object: _134.EventBurnAmino): _134.EventBurn;
                toAmino(message: _134.EventBurn): _134.EventBurnAmino;
                fromAminoMsg(object: _134.EventBurnAminoMsg): _134.EventBurn;
                toAminoMsg(message: _134.EventBurn): _134.EventBurnAminoMsg;
                fromProtoMsg(message: _134.EventBurnProtoMsg): _134.EventBurn;
                toProto(message: _134.EventBurn): Uint8Array;
                toProtoMsg(message: _134.EventBurn): _134.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _139.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _139.Module;
                    fromPartial(_: Partial<_139.Module>): _139.Module;
                    fromAmino(_: _139.ModuleAmino): _139.Module;
                    toAmino(_: _139.Module): _139.ModuleAmino;
                    fromAminoMsg(object: _139.ModuleAminoMsg): _139.Module;
                    toAminoMsg(message: _139.Module): _139.ModuleAminoMsg;
                    fromProtoMsg(message: _139.ModuleProtoMsg): _139.Module;
                    toProto(message: _139.Module): Uint8Array;
                    toProtoMsg(message: _139.Module): _139.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _283.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _140.GetRequest): Promise<_140.GetResponse>;
                    list(request: _140.ListRequest): Promise<_140.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _140.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.GetRequest;
                    fromPartial(object: Partial<_140.GetRequest>): _140.GetRequest;
                    fromAmino(object: _140.GetRequestAmino): _140.GetRequest;
                    toAmino(message: _140.GetRequest): _140.GetRequestAmino;
                    fromAminoMsg(object: _140.GetRequestAminoMsg): _140.GetRequest;
                    toAminoMsg(message: _140.GetRequest): _140.GetRequestAminoMsg;
                    fromProtoMsg(message: _140.GetRequestProtoMsg): _140.GetRequest;
                    toProto(message: _140.GetRequest): Uint8Array;
                    toProtoMsg(message: _140.GetRequest): _140.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _140.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.GetResponse;
                    fromPartial(object: Partial<_140.GetResponse>): _140.GetResponse;
                    fromAmino(object: _140.GetResponseAmino): _140.GetResponse;
                    toAmino(message: _140.GetResponse): _140.GetResponseAmino;
                    fromAminoMsg(object: _140.GetResponseAminoMsg): _140.GetResponse;
                    toAminoMsg(message: _140.GetResponse): _140.GetResponseAminoMsg;
                    fromProtoMsg(message: _140.GetResponseProtoMsg): _140.GetResponse;
                    toProto(message: _140.GetResponse): Uint8Array;
                    toProtoMsg(message: _140.GetResponse): _140.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _140.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.ListRequest;
                    fromPartial(object: Partial<_140.ListRequest>): _140.ListRequest;
                    fromAmino(object: _140.ListRequestAmino): _140.ListRequest;
                    toAmino(message: _140.ListRequest): _140.ListRequestAmino;
                    fromAminoMsg(object: _140.ListRequestAminoMsg): _140.ListRequest;
                    toAminoMsg(message: _140.ListRequest): _140.ListRequestAminoMsg;
                    fromProtoMsg(message: _140.ListRequestProtoMsg): _140.ListRequest;
                    toProto(message: _140.ListRequest): Uint8Array;
                    toProtoMsg(message: _140.ListRequest): _140.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _140.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.ListRequest_Prefix;
                    fromPartial(object: Partial<_140.ListRequest_Prefix>): _140.ListRequest_Prefix;
                    fromAmino(object: _140.ListRequest_PrefixAmino): _140.ListRequest_Prefix;
                    toAmino(message: _140.ListRequest_Prefix): _140.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _140.ListRequest_PrefixAminoMsg): _140.ListRequest_Prefix;
                    toAminoMsg(message: _140.ListRequest_Prefix): _140.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _140.ListRequest_PrefixProtoMsg): _140.ListRequest_Prefix;
                    toProto(message: _140.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _140.ListRequest_Prefix): _140.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _140.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.ListRequest_Range;
                    fromPartial(object: Partial<_140.ListRequest_Range>): _140.ListRequest_Range;
                    fromAmino(object: _140.ListRequest_RangeAmino): _140.ListRequest_Range;
                    toAmino(message: _140.ListRequest_Range): _140.ListRequest_RangeAmino;
                    fromAminoMsg(object: _140.ListRequest_RangeAminoMsg): _140.ListRequest_Range;
                    toAminoMsg(message: _140.ListRequest_Range): _140.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _140.ListRequest_RangeProtoMsg): _140.ListRequest_Range;
                    toProto(message: _140.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _140.ListRequest_Range): _140.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _140.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.ListResponse;
                    fromPartial(object: Partial<_140.ListResponse>): _140.ListResponse;
                    fromAmino(object: _140.ListResponseAmino): _140.ListResponse;
                    toAmino(message: _140.ListResponse): _140.ListResponseAmino;
                    fromAminoMsg(object: _140.ListResponseAminoMsg): _140.ListResponse;
                    toAminoMsg(message: _140.ListResponse): _140.ListResponseAminoMsg;
                    fromProtoMsg(message: _140.ListResponseProtoMsg): _140.ListResponse;
                    toProto(message: _140.ListResponse): Uint8Array;
                    toProtoMsg(message: _140.ListResponse): _140.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _140.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _140.IndexValue;
                    fromPartial(object: Partial<_140.IndexValue>): _140.IndexValue;
                    fromAmino(object: _140.IndexValueAmino): _140.IndexValue;
                    toAmino(message: _140.IndexValue): _140.IndexValueAmino;
                    fromAminoMsg(object: _140.IndexValueAminoMsg): _140.IndexValue;
                    toAminoMsg(message: _140.IndexValue): _140.IndexValueAminoMsg;
                    fromProtoMsg(message: _140.IndexValueProtoMsg): _140.IndexValue;
                    toProto(message: _140.IndexValue): Uint8Array;
                    toProtoMsg(message: _140.IndexValue): _140.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _141.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.TableDescriptor;
                fromPartial(object: Partial<_141.TableDescriptor>): _141.TableDescriptor;
                fromAmino(object: _141.TableDescriptorAmino): _141.TableDescriptor;
                toAmino(message: _141.TableDescriptor): _141.TableDescriptorAmino;
                fromAminoMsg(object: _141.TableDescriptorAminoMsg): _141.TableDescriptor;
                toAminoMsg(message: _141.TableDescriptor): _141.TableDescriptorAminoMsg;
                fromProtoMsg(message: _141.TableDescriptorProtoMsg): _141.TableDescriptor;
                toProto(message: _141.TableDescriptor): Uint8Array;
                toProtoMsg(message: _141.TableDescriptor): _141.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _141.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_141.PrimaryKeyDescriptor>): _141.PrimaryKeyDescriptor;
                fromAmino(object: _141.PrimaryKeyDescriptorAmino): _141.PrimaryKeyDescriptor;
                toAmino(message: _141.PrimaryKeyDescriptor): _141.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _141.PrimaryKeyDescriptorAminoMsg): _141.PrimaryKeyDescriptor;
                toAminoMsg(message: _141.PrimaryKeyDescriptor): _141.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _141.PrimaryKeyDescriptorProtoMsg): _141.PrimaryKeyDescriptor;
                toProto(message: _141.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _141.PrimaryKeyDescriptor): _141.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _141.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_141.SecondaryIndexDescriptor>): _141.SecondaryIndexDescriptor;
                fromAmino(object: _141.SecondaryIndexDescriptorAmino): _141.SecondaryIndexDescriptor;
                toAmino(message: _141.SecondaryIndexDescriptor): _141.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _141.SecondaryIndexDescriptorAminoMsg): _141.SecondaryIndexDescriptor;
                toAminoMsg(message: _141.SecondaryIndexDescriptor): _141.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _141.SecondaryIndexDescriptorProtoMsg): _141.SecondaryIndexDescriptor;
                toProto(message: _141.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _141.SecondaryIndexDescriptor): _141.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _141.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.SingletonDescriptor;
                fromPartial(object: Partial<_141.SingletonDescriptor>): _141.SingletonDescriptor;
                fromAmino(object: _141.SingletonDescriptorAmino): _141.SingletonDescriptor;
                toAmino(message: _141.SingletonDescriptor): _141.SingletonDescriptorAmino;
                fromAminoMsg(object: _141.SingletonDescriptorAminoMsg): _141.SingletonDescriptor;
                toAminoMsg(message: _141.SingletonDescriptor): _141.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _141.SingletonDescriptorProtoMsg): _141.SingletonDescriptor;
                toProto(message: _141.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _141.SingletonDescriptor): _141.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _142.StorageType;
            storageTypeToJSON(object: _142.StorageType): string;
            StorageType: typeof _142.StorageType;
            StorageTypeSDKType: typeof _142.StorageType;
            StorageTypeAmino: typeof _142.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _142.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_142.ModuleSchemaDescriptor>): _142.ModuleSchemaDescriptor;
                fromAmino(object: _142.ModuleSchemaDescriptorAmino): _142.ModuleSchemaDescriptor;
                toAmino(message: _142.ModuleSchemaDescriptor): _142.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _142.ModuleSchemaDescriptorAminoMsg): _142.ModuleSchemaDescriptor;
                toAminoMsg(message: _142.ModuleSchemaDescriptor): _142.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _142.ModuleSchemaDescriptorProtoMsg): _142.ModuleSchemaDescriptor;
                toProto(message: _142.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _142.ModuleSchemaDescriptor): _142.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _142.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_142.ModuleSchemaDescriptor_FileEntry>): _142.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _142.ModuleSchemaDescriptor_FileEntryAmino): _142.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _142.ModuleSchemaDescriptor_FileEntry): _142.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _142.ModuleSchemaDescriptor_FileEntryAminoMsg): _142.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _142.ModuleSchemaDescriptor_FileEntry): _142.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _142.ModuleSchemaDescriptor_FileEntryProtoMsg): _142.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _142.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _142.ModuleSchemaDescriptor_FileEntry): _142.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _143.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _143.Module;
                    fromPartial(_: Partial<_143.Module>): _143.Module;
                    fromAmino(_: _143.ModuleAmino): _143.Module;
                    toAmino(_: _143.Module): _143.ModuleAmino;
                    fromAminoMsg(object: _143.ModuleAminoMsg): _143.Module;
                    toAminoMsg(message: _143.Module): _143.ModuleAminoMsg;
                    fromProtoMsg(message: _143.ModuleProtoMsg): _143.Module;
                    toProto(message: _143.Module): Uint8Array;
                    toProtoMsg(message: _143.Module): _143.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _145.QueryParamsRequest): Promise<_145.QueryParamsResponse>;
                subspaces(request?: _145.QuerySubspacesRequest): Promise<_145.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _145.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryParamsRequest;
                fromPartial(object: Partial<_145.QueryParamsRequest>): _145.QueryParamsRequest;
                fromAmino(object: _145.QueryParamsRequestAmino): _145.QueryParamsRequest;
                toAmino(message: _145.QueryParamsRequest): _145.QueryParamsRequestAmino;
                fromAminoMsg(object: _145.QueryParamsRequestAminoMsg): _145.QueryParamsRequest;
                toAminoMsg(message: _145.QueryParamsRequest): _145.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _145.QueryParamsRequestProtoMsg): _145.QueryParamsRequest;
                toProto(message: _145.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _145.QueryParamsRequest): _145.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _145.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryParamsResponse;
                fromPartial(object: Partial<_145.QueryParamsResponse>): _145.QueryParamsResponse;
                fromAmino(object: _145.QueryParamsResponseAmino): _145.QueryParamsResponse;
                toAmino(message: _145.QueryParamsResponse): _145.QueryParamsResponseAmino;
                fromAminoMsg(object: _145.QueryParamsResponseAminoMsg): _145.QueryParamsResponse;
                toAminoMsg(message: _145.QueryParamsResponse): _145.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _145.QueryParamsResponseProtoMsg): _145.QueryParamsResponse;
                toProto(message: _145.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _145.QueryParamsResponse): _145.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _145.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _145.QuerySubspacesRequest;
                fromPartial(_: Partial<_145.QuerySubspacesRequest>): _145.QuerySubspacesRequest;
                fromAmino(_: _145.QuerySubspacesRequestAmino): _145.QuerySubspacesRequest;
                toAmino(_: _145.QuerySubspacesRequest): _145.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _145.QuerySubspacesRequestAminoMsg): _145.QuerySubspacesRequest;
                toAminoMsg(message: _145.QuerySubspacesRequest): _145.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _145.QuerySubspacesRequestProtoMsg): _145.QuerySubspacesRequest;
                toProto(message: _145.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _145.QuerySubspacesRequest): _145.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _145.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QuerySubspacesResponse;
                fromPartial(object: Partial<_145.QuerySubspacesResponse>): _145.QuerySubspacesResponse;
                fromAmino(object: _145.QuerySubspacesResponseAmino): _145.QuerySubspacesResponse;
                toAmino(message: _145.QuerySubspacesResponse): _145.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _145.QuerySubspacesResponseAminoMsg): _145.QuerySubspacesResponse;
                toAminoMsg(message: _145.QuerySubspacesResponse): _145.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _145.QuerySubspacesResponseProtoMsg): _145.QuerySubspacesResponse;
                toProto(message: _145.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _145.QuerySubspacesResponse): _145.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _145.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.Subspace;
                fromPartial(object: Partial<_145.Subspace>): _145.Subspace;
                fromAmino(object: _145.SubspaceAmino): _145.Subspace;
                toAmino(message: _145.Subspace): _145.SubspaceAmino;
                fromAminoMsg(object: _145.SubspaceAminoMsg): _145.Subspace;
                toAminoMsg(message: _145.Subspace): _145.SubspaceAminoMsg;
                fromProtoMsg(message: _145.SubspaceProtoMsg): _145.Subspace;
                toProto(message: _145.Subspace): Uint8Array;
                toProtoMsg(message: _145.Subspace): _145.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _144.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.ParameterChangeProposal;
                fromPartial(object: Partial<_144.ParameterChangeProposal>): _144.ParameterChangeProposal;
                fromAmino(object: _144.ParameterChangeProposalAmino): _144.ParameterChangeProposal;
                toAmino(message: _144.ParameterChangeProposal): _144.ParameterChangeProposalAmino;
                fromAminoMsg(object: _144.ParameterChangeProposalAminoMsg): _144.ParameterChangeProposal;
                toAminoMsg(message: _144.ParameterChangeProposal): _144.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _144.ParameterChangeProposalProtoMsg): _144.ParameterChangeProposal;
                toProto(message: _144.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _144.ParameterChangeProposal): _144.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _144.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.ParamChange;
                fromPartial(object: Partial<_144.ParamChange>): _144.ParamChange;
                fromAmino(object: _144.ParamChangeAmino): _144.ParamChange;
                toAmino(message: _144.ParamChange): _144.ParamChangeAmino;
                fromAminoMsg(object: _144.ParamChangeAminoMsg): _144.ParamChange;
                toAminoMsg(message: _144.ParamChange): _144.ParamChangeAminoMsg;
                fromProtoMsg(message: _144.ParamChangeProtoMsg): _144.ParamChange;
                toProto(message: _144.ParamChange): Uint8Array;
                toProtoMsg(message: _144.ParamChange): _144.ParamChangeProtoMsg;
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
                encode(_: _147.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _147.FileDescriptorsRequest;
                fromPartial(_: Partial<_147.FileDescriptorsRequest>): _147.FileDescriptorsRequest;
                fromAmino(_: _147.FileDescriptorsRequestAmino): _147.FileDescriptorsRequest;
                toAmino(_: _147.FileDescriptorsRequest): _147.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _147.FileDescriptorsRequestAminoMsg): _147.FileDescriptorsRequest;
                toAminoMsg(message: _147.FileDescriptorsRequest): _147.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _147.FileDescriptorsRequestProtoMsg): _147.FileDescriptorsRequest;
                toProto(message: _147.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _147.FileDescriptorsRequest): _147.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _147.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.FileDescriptorsResponse;
                fromPartial(object: Partial<_147.FileDescriptorsResponse>): _147.FileDescriptorsResponse;
                fromAmino(object: _147.FileDescriptorsResponseAmino): _147.FileDescriptorsResponse;
                toAmino(message: _147.FileDescriptorsResponse): _147.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _147.FileDescriptorsResponseAminoMsg): _147.FileDescriptorsResponse;
                toAminoMsg(message: _147.FileDescriptorsResponse): _147.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _147.FileDescriptorsResponseProtoMsg): _147.FileDescriptorsResponse;
                toProto(message: _147.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _147.FileDescriptorsResponse): _147.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
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
            MsgClientImpl: typeof _302.MsgClientImpl;
            QueryClientImpl: typeof _285.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
                signingInfo(request: _150.QuerySigningInfoRequest): Promise<_150.QuerySigningInfoResponse>;
                signingInfos(request?: _150.QuerySigningInfosRequest): Promise<_150.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _152.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _152.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _152.MsgUnjail): {
                        typeUrl: string;
                        value: _152.MsgUnjail;
                    };
                    updateParams(value: _152.MsgUpdateParams): {
                        typeUrl: string;
                        value: _152.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _152.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _152.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _152.MsgUnjail): {
                        typeUrl: string;
                        value: _152.MsgUnjail;
                    };
                    updateParams(value: _152.MsgUpdateParams): {
                        typeUrl: string;
                        value: _152.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _152.MsgUnjail) => _152.MsgUnjailAmino;
                    fromAmino: (object: _152.MsgUnjailAmino) => _152.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _152.MsgUpdateParams) => _152.MsgUpdateParamsAmino;
                    fromAmino: (object: _152.MsgUpdateParamsAmino) => _152.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _152.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.MsgUnjail;
                fromPartial(object: Partial<_152.MsgUnjail>): _152.MsgUnjail;
                fromAmino(object: _152.MsgUnjailAmino): _152.MsgUnjail;
                toAmino(message: _152.MsgUnjail): _152.MsgUnjailAmino;
                fromAminoMsg(object: _152.MsgUnjailAminoMsg): _152.MsgUnjail;
                toAminoMsg(message: _152.MsgUnjail): _152.MsgUnjailAminoMsg;
                fromProtoMsg(message: _152.MsgUnjailProtoMsg): _152.MsgUnjail;
                toProto(message: _152.MsgUnjail): Uint8Array;
                toProtoMsg(message: _152.MsgUnjail): _152.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _152.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _152.MsgUnjailResponse;
                fromPartial(_: Partial<_152.MsgUnjailResponse>): _152.MsgUnjailResponse;
                fromAmino(_: _152.MsgUnjailResponseAmino): _152.MsgUnjailResponse;
                toAmino(_: _152.MsgUnjailResponse): _152.MsgUnjailResponseAmino;
                fromAminoMsg(object: _152.MsgUnjailResponseAminoMsg): _152.MsgUnjailResponse;
                toAminoMsg(message: _152.MsgUnjailResponse): _152.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _152.MsgUnjailResponseProtoMsg): _152.MsgUnjailResponse;
                toProto(message: _152.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _152.MsgUnjailResponse): _152.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _152.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.MsgUpdateParams;
                fromPartial(object: Partial<_152.MsgUpdateParams>): _152.MsgUpdateParams;
                fromAmino(object: _152.MsgUpdateParamsAmino): _152.MsgUpdateParams;
                toAmino(message: _152.MsgUpdateParams): _152.MsgUpdateParamsAmino;
                fromAminoMsg(object: _152.MsgUpdateParamsAminoMsg): _152.MsgUpdateParams;
                toAminoMsg(message: _152.MsgUpdateParams): _152.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _152.MsgUpdateParamsProtoMsg): _152.MsgUpdateParams;
                toProto(message: _152.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _152.MsgUpdateParams): _152.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _152.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _152.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_152.MsgUpdateParamsResponse>): _152.MsgUpdateParamsResponse;
                fromAmino(_: _152.MsgUpdateParamsResponseAmino): _152.MsgUpdateParamsResponse;
                toAmino(_: _152.MsgUpdateParamsResponse): _152.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _152.MsgUpdateParamsResponseAminoMsg): _152.MsgUpdateParamsResponse;
                toAminoMsg(message: _152.MsgUpdateParamsResponse): _152.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _152.MsgUpdateParamsResponseProtoMsg): _152.MsgUpdateParamsResponse;
                toProto(message: _152.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _152.MsgUpdateParamsResponse): _152.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _151.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.ValidatorSigningInfo;
                fromPartial(object: Partial<_151.ValidatorSigningInfo>): _151.ValidatorSigningInfo;
                fromAmino(object: _151.ValidatorSigningInfoAmino): _151.ValidatorSigningInfo;
                toAmino(message: _151.ValidatorSigningInfo): _151.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _151.ValidatorSigningInfoAminoMsg): _151.ValidatorSigningInfo;
                toAminoMsg(message: _151.ValidatorSigningInfo): _151.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _151.ValidatorSigningInfoProtoMsg): _151.ValidatorSigningInfo;
                toProto(message: _151.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _151.ValidatorSigningInfo): _151.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _151.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.Params;
                fromPartial(object: Partial<_151.Params>): _151.Params;
                fromAmino(object: _151.ParamsAmino): _151.Params;
                toAmino(message: _151.Params): _151.ParamsAmino;
                fromAminoMsg(object: _151.ParamsAminoMsg): _151.Params;
                toAminoMsg(message: _151.Params): _151.ParamsAminoMsg;
                fromProtoMsg(message: _151.ParamsProtoMsg): _151.Params;
                toProto(message: _151.Params): Uint8Array;
                toProtoMsg(message: _151.Params): _151.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _150.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _150.QueryParamsRequest;
                fromPartial(_: Partial<_150.QueryParamsRequest>): _150.QueryParamsRequest;
                fromAmino(_: _150.QueryParamsRequestAmino): _150.QueryParamsRequest;
                toAmino(_: _150.QueryParamsRequest): _150.QueryParamsRequestAmino;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _150.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QuerySigningInfoRequest;
                fromPartial(object: Partial<_150.QuerySigningInfoRequest>): _150.QuerySigningInfoRequest;
                fromAmino(object: _150.QuerySigningInfoRequestAmino): _150.QuerySigningInfoRequest;
                toAmino(message: _150.QuerySigningInfoRequest): _150.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _150.QuerySigningInfoRequestAminoMsg): _150.QuerySigningInfoRequest;
                toAminoMsg(message: _150.QuerySigningInfoRequest): _150.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _150.QuerySigningInfoRequestProtoMsg): _150.QuerySigningInfoRequest;
                toProto(message: _150.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _150.QuerySigningInfoRequest): _150.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _150.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QuerySigningInfoResponse;
                fromPartial(object: Partial<_150.QuerySigningInfoResponse>): _150.QuerySigningInfoResponse;
                fromAmino(object: _150.QuerySigningInfoResponseAmino): _150.QuerySigningInfoResponse;
                toAmino(message: _150.QuerySigningInfoResponse): _150.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _150.QuerySigningInfoResponseAminoMsg): _150.QuerySigningInfoResponse;
                toAminoMsg(message: _150.QuerySigningInfoResponse): _150.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _150.QuerySigningInfoResponseProtoMsg): _150.QuerySigningInfoResponse;
                toProto(message: _150.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _150.QuerySigningInfoResponse): _150.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _150.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QuerySigningInfosRequest;
                fromPartial(object: Partial<_150.QuerySigningInfosRequest>): _150.QuerySigningInfosRequest;
                fromAmino(object: _150.QuerySigningInfosRequestAmino): _150.QuerySigningInfosRequest;
                toAmino(message: _150.QuerySigningInfosRequest): _150.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _150.QuerySigningInfosRequestAminoMsg): _150.QuerySigningInfosRequest;
                toAminoMsg(message: _150.QuerySigningInfosRequest): _150.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _150.QuerySigningInfosRequestProtoMsg): _150.QuerySigningInfosRequest;
                toProto(message: _150.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _150.QuerySigningInfosRequest): _150.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _150.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QuerySigningInfosResponse;
                fromPartial(object: Partial<_150.QuerySigningInfosResponse>): _150.QuerySigningInfosResponse;
                fromAmino(object: _150.QuerySigningInfosResponseAmino): _150.QuerySigningInfosResponse;
                toAmino(message: _150.QuerySigningInfosResponse): _150.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _150.QuerySigningInfosResponseAminoMsg): _150.QuerySigningInfosResponse;
                toAminoMsg(message: _150.QuerySigningInfosResponse): _150.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _150.QuerySigningInfosResponseProtoMsg): _150.QuerySigningInfosResponse;
                toProto(message: _150.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _150.QuerySigningInfosResponse): _150.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _149.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.GenesisState;
                fromPartial(object: Partial<_149.GenesisState>): _149.GenesisState;
                fromAmino(object: _149.GenesisStateAmino): _149.GenesisState;
                toAmino(message: _149.GenesisState): _149.GenesisStateAmino;
                fromAminoMsg(object: _149.GenesisStateAminoMsg): _149.GenesisState;
                toAminoMsg(message: _149.GenesisState): _149.GenesisStateAminoMsg;
                fromProtoMsg(message: _149.GenesisStateProtoMsg): _149.GenesisState;
                toProto(message: _149.GenesisState): Uint8Array;
                toProtoMsg(message: _149.GenesisState): _149.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _149.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.SigningInfo;
                fromPartial(object: Partial<_149.SigningInfo>): _149.SigningInfo;
                fromAmino(object: _149.SigningInfoAmino): _149.SigningInfo;
                toAmino(message: _149.SigningInfo): _149.SigningInfoAmino;
                fromAminoMsg(object: _149.SigningInfoAminoMsg): _149.SigningInfo;
                toAminoMsg(message: _149.SigningInfo): _149.SigningInfoAminoMsg;
                fromProtoMsg(message: _149.SigningInfoProtoMsg): _149.SigningInfo;
                toProto(message: _149.SigningInfo): Uint8Array;
                toProtoMsg(message: _149.SigningInfo): _149.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _149.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.ValidatorMissedBlocks;
                fromPartial(object: Partial<_149.ValidatorMissedBlocks>): _149.ValidatorMissedBlocks;
                fromAmino(object: _149.ValidatorMissedBlocksAmino): _149.ValidatorMissedBlocks;
                toAmino(message: _149.ValidatorMissedBlocks): _149.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _149.ValidatorMissedBlocksAminoMsg): _149.ValidatorMissedBlocks;
                toAminoMsg(message: _149.ValidatorMissedBlocks): _149.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _149.ValidatorMissedBlocksProtoMsg): _149.ValidatorMissedBlocks;
                toProto(message: _149.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _149.ValidatorMissedBlocks): _149.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _149.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MissedBlock;
                fromPartial(object: Partial<_149.MissedBlock>): _149.MissedBlock;
                fromAmino(object: _149.MissedBlockAmino): _149.MissedBlock;
                toAmino(message: _149.MissedBlock): _149.MissedBlockAmino;
                fromAminoMsg(object: _149.MissedBlockAminoMsg): _149.MissedBlock;
                toAminoMsg(message: _149.MissedBlock): _149.MissedBlockAminoMsg;
                fromProtoMsg(message: _149.MissedBlockProtoMsg): _149.MissedBlock;
                toProto(message: _149.MissedBlock): Uint8Array;
                toProtoMsg(message: _149.MissedBlock): _149.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
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
            MsgClientImpl: typeof _303.MsgClientImpl;
            QueryClientImpl: typeof _286.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _156.QueryValidatorsRequest): Promise<_156.QueryValidatorsResponse>;
                validator(request: _156.QueryValidatorRequest): Promise<_156.QueryValidatorResponse>;
                validatorDelegations(request: _156.QueryValidatorDelegationsRequest): Promise<_156.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _156.QueryValidatorUnbondingDelegationsRequest): Promise<_156.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _156.QueryDelegationRequest): Promise<_156.QueryDelegationResponse>;
                unbondingDelegation(request: _156.QueryUnbondingDelegationRequest): Promise<_156.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _156.QueryDelegatorDelegationsRequest): Promise<_156.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _156.QueryDelegatorUnbondingDelegationsRequest): Promise<_156.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _156.QueryRedelegationsRequest): Promise<_156.QueryRedelegationsResponse>;
                delegatorValidators(request: _156.QueryDelegatorValidatorsRequest): Promise<_156.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _156.QueryDelegatorValidatorRequest): Promise<_156.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _156.QueryHistoricalInfoRequest): Promise<_156.QueryHistoricalInfoResponse>;
                pool(request?: _156.QueryPoolRequest): Promise<_156.QueryPoolResponse>;
                params(request?: _156.QueryParamsRequest): Promise<_156.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _264.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _158.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _158.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _158.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _158.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _158.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _158.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _158.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _158.MsgCreateValidator): {
                        typeUrl: string;
                        value: _158.MsgCreateValidator;
                    };
                    editValidator(value: _158.MsgEditValidator): {
                        typeUrl: string;
                        value: _158.MsgEditValidator;
                    };
                    delegate(value: _158.MsgDelegate): {
                        typeUrl: string;
                        value: _158.MsgDelegate;
                    };
                    beginRedelegate(value: _158.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _158.MsgBeginRedelegate;
                    };
                    undelegate(value: _158.MsgUndelegate): {
                        typeUrl: string;
                        value: _158.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _158.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _158.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _158.MsgUpdateParams): {
                        typeUrl: string;
                        value: _158.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _158.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _158.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _158.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _158.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _158.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _158.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _158.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _158.MsgCreateValidator): {
                        typeUrl: string;
                        value: _158.MsgCreateValidator;
                    };
                    editValidator(value: _158.MsgEditValidator): {
                        typeUrl: string;
                        value: _158.MsgEditValidator;
                    };
                    delegate(value: _158.MsgDelegate): {
                        typeUrl: string;
                        value: _158.MsgDelegate;
                    };
                    beginRedelegate(value: _158.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _158.MsgBeginRedelegate;
                    };
                    undelegate(value: _158.MsgUndelegate): {
                        typeUrl: string;
                        value: _158.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _158.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _158.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _158.MsgUpdateParams): {
                        typeUrl: string;
                        value: _158.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _158.MsgCreateValidator) => _158.MsgCreateValidatorAmino;
                    fromAmino: (object: _158.MsgCreateValidatorAmino) => _158.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _158.MsgEditValidator) => _158.MsgEditValidatorAmino;
                    fromAmino: (object: _158.MsgEditValidatorAmino) => _158.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _158.MsgDelegate) => _158.MsgDelegateAmino;
                    fromAmino: (object: _158.MsgDelegateAmino) => _158.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _158.MsgBeginRedelegate) => _158.MsgBeginRedelegateAmino;
                    fromAmino: (object: _158.MsgBeginRedelegateAmino) => _158.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _158.MsgUndelegate) => _158.MsgUndelegateAmino;
                    fromAmino: (object: _158.MsgUndelegateAmino) => _158.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _158.MsgCancelUnbondingDelegation) => _158.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _158.MsgCancelUnbondingDelegationAmino) => _158.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _158.MsgUpdateParams) => _158.MsgUpdateParamsAmino;
                    fromAmino: (object: _158.MsgUpdateParamsAmino) => _158.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _158.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgCreateValidator;
                fromPartial(object: Partial<_158.MsgCreateValidator>): _158.MsgCreateValidator;
                fromAmino(object: _158.MsgCreateValidatorAmino): _158.MsgCreateValidator;
                toAmino(message: _158.MsgCreateValidator): _158.MsgCreateValidatorAmino;
                fromAminoMsg(object: _158.MsgCreateValidatorAminoMsg): _158.MsgCreateValidator;
                toAminoMsg(message: _158.MsgCreateValidator): _158.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _158.MsgCreateValidatorProtoMsg): _158.MsgCreateValidator;
                toProto(message: _158.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _158.MsgCreateValidator): _158.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _158.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_158.MsgCreateValidatorResponse>): _158.MsgCreateValidatorResponse;
                fromAmino(_: _158.MsgCreateValidatorResponseAmino): _158.MsgCreateValidatorResponse;
                toAmino(_: _158.MsgCreateValidatorResponse): _158.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _158.MsgCreateValidatorResponseAminoMsg): _158.MsgCreateValidatorResponse;
                toAminoMsg(message: _158.MsgCreateValidatorResponse): _158.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _158.MsgCreateValidatorResponseProtoMsg): _158.MsgCreateValidatorResponse;
                toProto(message: _158.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _158.MsgCreateValidatorResponse): _158.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _158.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgEditValidator;
                fromPartial(object: Partial<_158.MsgEditValidator>): _158.MsgEditValidator;
                fromAmino(object: _158.MsgEditValidatorAmino): _158.MsgEditValidator;
                toAmino(message: _158.MsgEditValidator): _158.MsgEditValidatorAmino;
                fromAminoMsg(object: _158.MsgEditValidatorAminoMsg): _158.MsgEditValidator;
                toAminoMsg(message: _158.MsgEditValidator): _158.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _158.MsgEditValidatorProtoMsg): _158.MsgEditValidator;
                toProto(message: _158.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _158.MsgEditValidator): _158.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _158.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.MsgEditValidatorResponse;
                fromPartial(_: Partial<_158.MsgEditValidatorResponse>): _158.MsgEditValidatorResponse;
                fromAmino(_: _158.MsgEditValidatorResponseAmino): _158.MsgEditValidatorResponse;
                toAmino(_: _158.MsgEditValidatorResponse): _158.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _158.MsgEditValidatorResponseAminoMsg): _158.MsgEditValidatorResponse;
                toAminoMsg(message: _158.MsgEditValidatorResponse): _158.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _158.MsgEditValidatorResponseProtoMsg): _158.MsgEditValidatorResponse;
                toProto(message: _158.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _158.MsgEditValidatorResponse): _158.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _158.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgDelegate;
                fromPartial(object: Partial<_158.MsgDelegate>): _158.MsgDelegate;
                fromAmino(object: _158.MsgDelegateAmino): _158.MsgDelegate;
                toAmino(message: _158.MsgDelegate): _158.MsgDelegateAmino;
                fromAminoMsg(object: _158.MsgDelegateAminoMsg): _158.MsgDelegate;
                toAminoMsg(message: _158.MsgDelegate): _158.MsgDelegateAminoMsg;
                fromProtoMsg(message: _158.MsgDelegateProtoMsg): _158.MsgDelegate;
                toProto(message: _158.MsgDelegate): Uint8Array;
                toProtoMsg(message: _158.MsgDelegate): _158.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _158.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.MsgDelegateResponse;
                fromPartial(_: Partial<_158.MsgDelegateResponse>): _158.MsgDelegateResponse;
                fromAmino(_: _158.MsgDelegateResponseAmino): _158.MsgDelegateResponse;
                toAmino(_: _158.MsgDelegateResponse): _158.MsgDelegateResponseAmino;
                fromAminoMsg(object: _158.MsgDelegateResponseAminoMsg): _158.MsgDelegateResponse;
                toAminoMsg(message: _158.MsgDelegateResponse): _158.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _158.MsgDelegateResponseProtoMsg): _158.MsgDelegateResponse;
                toProto(message: _158.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _158.MsgDelegateResponse): _158.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _158.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgBeginRedelegate;
                fromPartial(object: Partial<_158.MsgBeginRedelegate>): _158.MsgBeginRedelegate;
                fromAmino(object: _158.MsgBeginRedelegateAmino): _158.MsgBeginRedelegate;
                toAmino(message: _158.MsgBeginRedelegate): _158.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _158.MsgBeginRedelegateAminoMsg): _158.MsgBeginRedelegate;
                toAminoMsg(message: _158.MsgBeginRedelegate): _158.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _158.MsgBeginRedelegateProtoMsg): _158.MsgBeginRedelegate;
                toProto(message: _158.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _158.MsgBeginRedelegate): _158.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _158.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_158.MsgBeginRedelegateResponse>): _158.MsgBeginRedelegateResponse;
                fromAmino(object: _158.MsgBeginRedelegateResponseAmino): _158.MsgBeginRedelegateResponse;
                toAmino(message: _158.MsgBeginRedelegateResponse): _158.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _158.MsgBeginRedelegateResponseAminoMsg): _158.MsgBeginRedelegateResponse;
                toAminoMsg(message: _158.MsgBeginRedelegateResponse): _158.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _158.MsgBeginRedelegateResponseProtoMsg): _158.MsgBeginRedelegateResponse;
                toProto(message: _158.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _158.MsgBeginRedelegateResponse): _158.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _158.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgUndelegate;
                fromPartial(object: Partial<_158.MsgUndelegate>): _158.MsgUndelegate;
                fromAmino(object: _158.MsgUndelegateAmino): _158.MsgUndelegate;
                toAmino(message: _158.MsgUndelegate): _158.MsgUndelegateAmino;
                fromAminoMsg(object: _158.MsgUndelegateAminoMsg): _158.MsgUndelegate;
                toAminoMsg(message: _158.MsgUndelegate): _158.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _158.MsgUndelegateProtoMsg): _158.MsgUndelegate;
                toProto(message: _158.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _158.MsgUndelegate): _158.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _158.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgUndelegateResponse;
                fromPartial(object: Partial<_158.MsgUndelegateResponse>): _158.MsgUndelegateResponse;
                fromAmino(object: _158.MsgUndelegateResponseAmino): _158.MsgUndelegateResponse;
                toAmino(message: _158.MsgUndelegateResponse): _158.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _158.MsgUndelegateResponseAminoMsg): _158.MsgUndelegateResponse;
                toAminoMsg(message: _158.MsgUndelegateResponse): _158.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _158.MsgUndelegateResponseProtoMsg): _158.MsgUndelegateResponse;
                toProto(message: _158.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _158.MsgUndelegateResponse): _158.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _158.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_158.MsgCancelUnbondingDelegation>): _158.MsgCancelUnbondingDelegation;
                fromAmino(object: _158.MsgCancelUnbondingDelegationAmino): _158.MsgCancelUnbondingDelegation;
                toAmino(message: _158.MsgCancelUnbondingDelegation): _158.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _158.MsgCancelUnbondingDelegationAminoMsg): _158.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _158.MsgCancelUnbondingDelegation): _158.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _158.MsgCancelUnbondingDelegationProtoMsg): _158.MsgCancelUnbondingDelegation;
                toProto(message: _158.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _158.MsgCancelUnbondingDelegation): _158.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _158.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_158.MsgCancelUnbondingDelegationResponse>): _158.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _158.MsgCancelUnbondingDelegationResponseAmino): _158.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _158.MsgCancelUnbondingDelegationResponse): _158.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _158.MsgCancelUnbondingDelegationResponseAminoMsg): _158.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _158.MsgCancelUnbondingDelegationResponse): _158.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _158.MsgCancelUnbondingDelegationResponseProtoMsg): _158.MsgCancelUnbondingDelegationResponse;
                toProto(message: _158.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _158.MsgCancelUnbondingDelegationResponse): _158.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _158.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgUpdateParams;
                fromPartial(object: Partial<_158.MsgUpdateParams>): _158.MsgUpdateParams;
                fromAmino(object: _158.MsgUpdateParamsAmino): _158.MsgUpdateParams;
                toAmino(message: _158.MsgUpdateParams): _158.MsgUpdateParamsAmino;
                fromAminoMsg(object: _158.MsgUpdateParamsAminoMsg): _158.MsgUpdateParams;
                toAminoMsg(message: _158.MsgUpdateParams): _158.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _158.MsgUpdateParamsProtoMsg): _158.MsgUpdateParams;
                toProto(message: _158.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _158.MsgUpdateParams): _158.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _158.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_158.MsgUpdateParamsResponse>): _158.MsgUpdateParamsResponse;
                fromAmino(_: _158.MsgUpdateParamsResponseAmino): _158.MsgUpdateParamsResponse;
                toAmino(_: _158.MsgUpdateParamsResponse): _158.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _158.MsgUpdateParamsResponseAminoMsg): _158.MsgUpdateParamsResponse;
                toAminoMsg(message: _158.MsgUpdateParamsResponse): _158.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _158.MsgUpdateParamsResponseProtoMsg): _158.MsgUpdateParamsResponse;
                toProto(message: _158.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _158.MsgUpdateParamsResponse): _158.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _157.BondStatus;
            bondStatusToJSON(object: _157.BondStatus): string;
            infractionFromJSON(object: any): _157.Infraction;
            infractionToJSON(object: _157.Infraction): string;
            BondStatus: typeof _157.BondStatus;
            BondStatusSDKType: typeof _157.BondStatus;
            BondStatusAmino: typeof _157.BondStatus;
            Infraction: typeof _157.Infraction;
            InfractionSDKType: typeof _157.Infraction;
            InfractionAmino: typeof _157.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _157.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.HistoricalInfo;
                fromPartial(object: Partial<_157.HistoricalInfo>): _157.HistoricalInfo;
                fromAmino(object: _157.HistoricalInfoAmino): _157.HistoricalInfo;
                toAmino(message: _157.HistoricalInfo): _157.HistoricalInfoAmino;
                fromAminoMsg(object: _157.HistoricalInfoAminoMsg): _157.HistoricalInfo;
                toAminoMsg(message: _157.HistoricalInfo): _157.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _157.HistoricalInfoProtoMsg): _157.HistoricalInfo;
                toProto(message: _157.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _157.HistoricalInfo): _157.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _157.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.CommissionRates;
                fromPartial(object: Partial<_157.CommissionRates>): _157.CommissionRates;
                fromAmino(object: _157.CommissionRatesAmino): _157.CommissionRates;
                toAmino(message: _157.CommissionRates): _157.CommissionRatesAmino;
                fromAminoMsg(object: _157.CommissionRatesAminoMsg): _157.CommissionRates;
                toAminoMsg(message: _157.CommissionRates): _157.CommissionRatesAminoMsg;
                fromProtoMsg(message: _157.CommissionRatesProtoMsg): _157.CommissionRates;
                toProto(message: _157.CommissionRates): Uint8Array;
                toProtoMsg(message: _157.CommissionRates): _157.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _157.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.Commission;
                fromPartial(object: Partial<_157.Commission>): _157.Commission;
                fromAmino(object: _157.CommissionAmino): _157.Commission;
                toAmino(message: _157.Commission): _157.CommissionAmino;
                fromAminoMsg(object: _157.CommissionAminoMsg): _157.Commission;
                toAminoMsg(message: _157.Commission): _157.CommissionAminoMsg;
                fromProtoMsg(message: _157.CommissionProtoMsg): _157.Commission;
                toProto(message: _157.Commission): Uint8Array;
                toProtoMsg(message: _157.Commission): _157.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _157.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.Description;
                fromPartial(object: Partial<_157.Description>): _157.Description;
                fromAmino(object: _157.DescriptionAmino): _157.Description;
                toAmino(message: _157.Description): _157.DescriptionAmino;
                fromAminoMsg(object: _157.DescriptionAminoMsg): _157.Description;
                toAminoMsg(message: _157.Description): _157.DescriptionAminoMsg;
                fromProtoMsg(message: _157.DescriptionProtoMsg): _157.Description;
                toProto(message: _157.Description): Uint8Array;
                toProtoMsg(message: _157.Description): _157.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _157.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.Validator;
                fromPartial(object: Partial<_157.Validator>): _157.Validator;
                fromAmino(object: _157.ValidatorAmino): _157.Validator;
                toAmino(message: _157.Validator): _157.ValidatorAmino;
                fromAminoMsg(object: _157.ValidatorAminoMsg): _157.Validator;
                toAminoMsg(message: _157.Validator): _157.ValidatorAminoMsg;
                fromProtoMsg(message: _157.ValidatorProtoMsg): _157.Validator;
                toProto(message: _157.Validator): Uint8Array;
                toProtoMsg(message: _157.Validator): _157.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _157.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.ValAddresses;
                fromPartial(object: Partial<_157.ValAddresses>): _157.ValAddresses;
                fromAmino(object: _157.ValAddressesAmino): _157.ValAddresses;
                toAmino(message: _157.ValAddresses): _157.ValAddressesAmino;
                fromAminoMsg(object: _157.ValAddressesAminoMsg): _157.ValAddresses;
                toAminoMsg(message: _157.ValAddresses): _157.ValAddressesAminoMsg;
                fromProtoMsg(message: _157.ValAddressesProtoMsg): _157.ValAddresses;
                toProto(message: _157.ValAddresses): Uint8Array;
                toProtoMsg(message: _157.ValAddresses): _157.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _157.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.DVPair;
                fromPartial(object: Partial<_157.DVPair>): _157.DVPair;
                fromAmino(object: _157.DVPairAmino): _157.DVPair;
                toAmino(message: _157.DVPair): _157.DVPairAmino;
                fromAminoMsg(object: _157.DVPairAminoMsg): _157.DVPair;
                toAminoMsg(message: _157.DVPair): _157.DVPairAminoMsg;
                fromProtoMsg(message: _157.DVPairProtoMsg): _157.DVPair;
                toProto(message: _157.DVPair): Uint8Array;
                toProtoMsg(message: _157.DVPair): _157.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _157.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.DVPairs;
                fromPartial(object: Partial<_157.DVPairs>): _157.DVPairs;
                fromAmino(object: _157.DVPairsAmino): _157.DVPairs;
                toAmino(message: _157.DVPairs): _157.DVPairsAmino;
                fromAminoMsg(object: _157.DVPairsAminoMsg): _157.DVPairs;
                toAminoMsg(message: _157.DVPairs): _157.DVPairsAminoMsg;
                fromProtoMsg(message: _157.DVPairsProtoMsg): _157.DVPairs;
                toProto(message: _157.DVPairs): Uint8Array;
                toProtoMsg(message: _157.DVPairs): _157.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _157.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.DVVTriplet;
                fromPartial(object: Partial<_157.DVVTriplet>): _157.DVVTriplet;
                fromAmino(object: _157.DVVTripletAmino): _157.DVVTriplet;
                toAmino(message: _157.DVVTriplet): _157.DVVTripletAmino;
                fromAminoMsg(object: _157.DVVTripletAminoMsg): _157.DVVTriplet;
                toAminoMsg(message: _157.DVVTriplet): _157.DVVTripletAminoMsg;
                fromProtoMsg(message: _157.DVVTripletProtoMsg): _157.DVVTriplet;
                toProto(message: _157.DVVTriplet): Uint8Array;
                toProtoMsg(message: _157.DVVTriplet): _157.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _157.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.DVVTriplets;
                fromPartial(object: Partial<_157.DVVTriplets>): _157.DVVTriplets;
                fromAmino(object: _157.DVVTripletsAmino): _157.DVVTriplets;
                toAmino(message: _157.DVVTriplets): _157.DVVTripletsAmino;
                fromAminoMsg(object: _157.DVVTripletsAminoMsg): _157.DVVTriplets;
                toAminoMsg(message: _157.DVVTriplets): _157.DVVTripletsAminoMsg;
                fromProtoMsg(message: _157.DVVTripletsProtoMsg): _157.DVVTriplets;
                toProto(message: _157.DVVTriplets): Uint8Array;
                toProtoMsg(message: _157.DVVTriplets): _157.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _157.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.Delegation;
                fromPartial(object: Partial<_157.Delegation>): _157.Delegation;
                fromAmino(object: _157.DelegationAmino): _157.Delegation;
                toAmino(message: _157.Delegation): _157.DelegationAmino;
                fromAminoMsg(object: _157.DelegationAminoMsg): _157.Delegation;
                toAminoMsg(message: _157.Delegation): _157.DelegationAminoMsg;
                fromProtoMsg(message: _157.DelegationProtoMsg): _157.Delegation;
                toProto(message: _157.Delegation): Uint8Array;
                toProtoMsg(message: _157.Delegation): _157.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _157.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.UnbondingDelegation;
                fromPartial(object: Partial<_157.UnbondingDelegation>): _157.UnbondingDelegation;
                fromAmino(object: _157.UnbondingDelegationAmino): _157.UnbondingDelegation;
                toAmino(message: _157.UnbondingDelegation): _157.UnbondingDelegationAmino;
                fromAminoMsg(object: _157.UnbondingDelegationAminoMsg): _157.UnbondingDelegation;
                toAminoMsg(message: _157.UnbondingDelegation): _157.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _157.UnbondingDelegationProtoMsg): _157.UnbondingDelegation;
                toProto(message: _157.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _157.UnbondingDelegation): _157.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _157.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.UnbondingDelegationEntry;
                fromPartial(object: Partial<_157.UnbondingDelegationEntry>): _157.UnbondingDelegationEntry;
                fromAmino(object: _157.UnbondingDelegationEntryAmino): _157.UnbondingDelegationEntry;
                toAmino(message: _157.UnbondingDelegationEntry): _157.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _157.UnbondingDelegationEntryAminoMsg): _157.UnbondingDelegationEntry;
                toAminoMsg(message: _157.UnbondingDelegationEntry): _157.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _157.UnbondingDelegationEntryProtoMsg): _157.UnbondingDelegationEntry;
                toProto(message: _157.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _157.UnbondingDelegationEntry): _157.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _157.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.RedelegationEntry;
                fromPartial(object: Partial<_157.RedelegationEntry>): _157.RedelegationEntry;
                fromAmino(object: _157.RedelegationEntryAmino): _157.RedelegationEntry;
                toAmino(message: _157.RedelegationEntry): _157.RedelegationEntryAmino;
                fromAminoMsg(object: _157.RedelegationEntryAminoMsg): _157.RedelegationEntry;
                toAminoMsg(message: _157.RedelegationEntry): _157.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _157.RedelegationEntryProtoMsg): _157.RedelegationEntry;
                toProto(message: _157.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _157.RedelegationEntry): _157.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _157.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.Redelegation;
                fromPartial(object: Partial<_157.Redelegation>): _157.Redelegation;
                fromAmino(object: _157.RedelegationAmino): _157.Redelegation;
                toAmino(message: _157.Redelegation): _157.RedelegationAmino;
                fromAminoMsg(object: _157.RedelegationAminoMsg): _157.Redelegation;
                toAminoMsg(message: _157.Redelegation): _157.RedelegationAminoMsg;
                fromProtoMsg(message: _157.RedelegationProtoMsg): _157.Redelegation;
                toProto(message: _157.Redelegation): Uint8Array;
                toProtoMsg(message: _157.Redelegation): _157.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _157.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.Params;
                fromPartial(object: Partial<_157.Params>): _157.Params;
                fromAmino(object: _157.ParamsAmino): _157.Params;
                toAmino(message: _157.Params): _157.ParamsAmino;
                fromAminoMsg(object: _157.ParamsAminoMsg): _157.Params;
                toAminoMsg(message: _157.Params): _157.ParamsAminoMsg;
                fromProtoMsg(message: _157.ParamsProtoMsg): _157.Params;
                toProto(message: _157.Params): Uint8Array;
                toProtoMsg(message: _157.Params): _157.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _157.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.DelegationResponse;
                fromPartial(object: Partial<_157.DelegationResponse>): _157.DelegationResponse;
                fromAmino(object: _157.DelegationResponseAmino): _157.DelegationResponse;
                toAmino(message: _157.DelegationResponse): _157.DelegationResponseAmino;
                fromAminoMsg(object: _157.DelegationResponseAminoMsg): _157.DelegationResponse;
                toAminoMsg(message: _157.DelegationResponse): _157.DelegationResponseAminoMsg;
                fromProtoMsg(message: _157.DelegationResponseProtoMsg): _157.DelegationResponse;
                toProto(message: _157.DelegationResponse): Uint8Array;
                toProtoMsg(message: _157.DelegationResponse): _157.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _157.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.RedelegationEntryResponse;
                fromPartial(object: Partial<_157.RedelegationEntryResponse>): _157.RedelegationEntryResponse;
                fromAmino(object: _157.RedelegationEntryResponseAmino): _157.RedelegationEntryResponse;
                toAmino(message: _157.RedelegationEntryResponse): _157.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _157.RedelegationEntryResponseAminoMsg): _157.RedelegationEntryResponse;
                toAminoMsg(message: _157.RedelegationEntryResponse): _157.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _157.RedelegationEntryResponseProtoMsg): _157.RedelegationEntryResponse;
                toProto(message: _157.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _157.RedelegationEntryResponse): _157.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _157.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.RedelegationResponse;
                fromPartial(object: Partial<_157.RedelegationResponse>): _157.RedelegationResponse;
                fromAmino(object: _157.RedelegationResponseAmino): _157.RedelegationResponse;
                toAmino(message: _157.RedelegationResponse): _157.RedelegationResponseAmino;
                fromAminoMsg(object: _157.RedelegationResponseAminoMsg): _157.RedelegationResponse;
                toAminoMsg(message: _157.RedelegationResponse): _157.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _157.RedelegationResponseProtoMsg): _157.RedelegationResponse;
                toProto(message: _157.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _157.RedelegationResponse): _157.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _157.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.Pool;
                fromPartial(object: Partial<_157.Pool>): _157.Pool;
                fromAmino(object: _157.PoolAmino): _157.Pool;
                toAmino(message: _157.Pool): _157.PoolAmino;
                fromAminoMsg(object: _157.PoolAminoMsg): _157.Pool;
                toAminoMsg(message: _157.Pool): _157.PoolAminoMsg;
                fromProtoMsg(message: _157.PoolProtoMsg): _157.Pool;
                toProto(message: _157.Pool): Uint8Array;
                toProtoMsg(message: _157.Pool): _157.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _157.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.ValidatorUpdates;
                fromPartial(object: Partial<_157.ValidatorUpdates>): _157.ValidatorUpdates;
                fromAmino(object: _157.ValidatorUpdatesAmino): _157.ValidatorUpdates;
                toAmino(message: _157.ValidatorUpdates): _157.ValidatorUpdatesAmino;
                fromAminoMsg(object: _157.ValidatorUpdatesAminoMsg): _157.ValidatorUpdates;
                toAminoMsg(message: _157.ValidatorUpdates): _157.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _157.ValidatorUpdatesProtoMsg): _157.ValidatorUpdates;
                toProto(message: _157.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _157.ValidatorUpdates): _157.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _156.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryValidatorsRequest;
                fromPartial(object: Partial<_156.QueryValidatorsRequest>): _156.QueryValidatorsRequest;
                fromAmino(object: _156.QueryValidatorsRequestAmino): _156.QueryValidatorsRequest;
                toAmino(message: _156.QueryValidatorsRequest): _156.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _156.QueryValidatorsRequestAminoMsg): _156.QueryValidatorsRequest;
                toAminoMsg(message: _156.QueryValidatorsRequest): _156.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _156.QueryValidatorsRequestProtoMsg): _156.QueryValidatorsRequest;
                toProto(message: _156.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _156.QueryValidatorsRequest): _156.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _156.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryValidatorsResponse;
                fromPartial(object: Partial<_156.QueryValidatorsResponse>): _156.QueryValidatorsResponse;
                fromAmino(object: _156.QueryValidatorsResponseAmino): _156.QueryValidatorsResponse;
                toAmino(message: _156.QueryValidatorsResponse): _156.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _156.QueryValidatorsResponseAminoMsg): _156.QueryValidatorsResponse;
                toAminoMsg(message: _156.QueryValidatorsResponse): _156.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _156.QueryValidatorsResponseProtoMsg): _156.QueryValidatorsResponse;
                toProto(message: _156.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _156.QueryValidatorsResponse): _156.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _156.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryValidatorRequest;
                fromPartial(object: Partial<_156.QueryValidatorRequest>): _156.QueryValidatorRequest;
                fromAmino(object: _156.QueryValidatorRequestAmino): _156.QueryValidatorRequest;
                toAmino(message: _156.QueryValidatorRequest): _156.QueryValidatorRequestAmino;
                fromAminoMsg(object: _156.QueryValidatorRequestAminoMsg): _156.QueryValidatorRequest;
                toAminoMsg(message: _156.QueryValidatorRequest): _156.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _156.QueryValidatorRequestProtoMsg): _156.QueryValidatorRequest;
                toProto(message: _156.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _156.QueryValidatorRequest): _156.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _156.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryValidatorResponse;
                fromPartial(object: Partial<_156.QueryValidatorResponse>): _156.QueryValidatorResponse;
                fromAmino(object: _156.QueryValidatorResponseAmino): _156.QueryValidatorResponse;
                toAmino(message: _156.QueryValidatorResponse): _156.QueryValidatorResponseAmino;
                fromAminoMsg(object: _156.QueryValidatorResponseAminoMsg): _156.QueryValidatorResponse;
                toAminoMsg(message: _156.QueryValidatorResponse): _156.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _156.QueryValidatorResponseProtoMsg): _156.QueryValidatorResponse;
                toProto(message: _156.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _156.QueryValidatorResponse): _156.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _156.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_156.QueryValidatorDelegationsRequest>): _156.QueryValidatorDelegationsRequest;
                fromAmino(object: _156.QueryValidatorDelegationsRequestAmino): _156.QueryValidatorDelegationsRequest;
                toAmino(message: _156.QueryValidatorDelegationsRequest): _156.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _156.QueryValidatorDelegationsRequestAminoMsg): _156.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _156.QueryValidatorDelegationsRequest): _156.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _156.QueryValidatorDelegationsRequestProtoMsg): _156.QueryValidatorDelegationsRequest;
                toProto(message: _156.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _156.QueryValidatorDelegationsRequest): _156.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _156.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_156.QueryValidatorDelegationsResponse>): _156.QueryValidatorDelegationsResponse;
                fromAmino(object: _156.QueryValidatorDelegationsResponseAmino): _156.QueryValidatorDelegationsResponse;
                toAmino(message: _156.QueryValidatorDelegationsResponse): _156.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _156.QueryValidatorDelegationsResponseAminoMsg): _156.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _156.QueryValidatorDelegationsResponse): _156.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _156.QueryValidatorDelegationsResponseProtoMsg): _156.QueryValidatorDelegationsResponse;
                toProto(message: _156.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _156.QueryValidatorDelegationsResponse): _156.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _156.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_156.QueryValidatorUnbondingDelegationsRequest>): _156.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _156.QueryValidatorUnbondingDelegationsRequestAmino): _156.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _156.QueryValidatorUnbondingDelegationsRequest): _156.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _156.QueryValidatorUnbondingDelegationsRequestAminoMsg): _156.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _156.QueryValidatorUnbondingDelegationsRequest): _156.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _156.QueryValidatorUnbondingDelegationsRequestProtoMsg): _156.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _156.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _156.QueryValidatorUnbondingDelegationsRequest): _156.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _156.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_156.QueryValidatorUnbondingDelegationsResponse>): _156.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _156.QueryValidatorUnbondingDelegationsResponseAmino): _156.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _156.QueryValidatorUnbondingDelegationsResponse): _156.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _156.QueryValidatorUnbondingDelegationsResponseAminoMsg): _156.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _156.QueryValidatorUnbondingDelegationsResponse): _156.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _156.QueryValidatorUnbondingDelegationsResponseProtoMsg): _156.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _156.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _156.QueryValidatorUnbondingDelegationsResponse): _156.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _156.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryDelegationRequest;
                fromPartial(object: Partial<_156.QueryDelegationRequest>): _156.QueryDelegationRequest;
                fromAmino(object: _156.QueryDelegationRequestAmino): _156.QueryDelegationRequest;
                toAmino(message: _156.QueryDelegationRequest): _156.QueryDelegationRequestAmino;
                fromAminoMsg(object: _156.QueryDelegationRequestAminoMsg): _156.QueryDelegationRequest;
                toAminoMsg(message: _156.QueryDelegationRequest): _156.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _156.QueryDelegationRequestProtoMsg): _156.QueryDelegationRequest;
                toProto(message: _156.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _156.QueryDelegationRequest): _156.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _156.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryDelegationResponse;
                fromPartial(object: Partial<_156.QueryDelegationResponse>): _156.QueryDelegationResponse;
                fromAmino(object: _156.QueryDelegationResponseAmino): _156.QueryDelegationResponse;
                toAmino(message: _156.QueryDelegationResponse): _156.QueryDelegationResponseAmino;
                fromAminoMsg(object: _156.QueryDelegationResponseAminoMsg): _156.QueryDelegationResponse;
                toAminoMsg(message: _156.QueryDelegationResponse): _156.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _156.QueryDelegationResponseProtoMsg): _156.QueryDelegationResponse;
                toProto(message: _156.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _156.QueryDelegationResponse): _156.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _156.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_156.QueryUnbondingDelegationRequest>): _156.QueryUnbondingDelegationRequest;
                fromAmino(object: _156.QueryUnbondingDelegationRequestAmino): _156.QueryUnbondingDelegationRequest;
                toAmino(message: _156.QueryUnbondingDelegationRequest): _156.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _156.QueryUnbondingDelegationRequestAminoMsg): _156.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _156.QueryUnbondingDelegationRequest): _156.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _156.QueryUnbondingDelegationRequestProtoMsg): _156.QueryUnbondingDelegationRequest;
                toProto(message: _156.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _156.QueryUnbondingDelegationRequest): _156.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _156.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_156.QueryUnbondingDelegationResponse>): _156.QueryUnbondingDelegationResponse;
                fromAmino(object: _156.QueryUnbondingDelegationResponseAmino): _156.QueryUnbondingDelegationResponse;
                toAmino(message: _156.QueryUnbondingDelegationResponse): _156.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _156.QueryUnbondingDelegationResponseAminoMsg): _156.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _156.QueryUnbondingDelegationResponse): _156.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _156.QueryUnbondingDelegationResponseProtoMsg): _156.QueryUnbondingDelegationResponse;
                toProto(message: _156.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _156.QueryUnbondingDelegationResponse): _156.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _156.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_156.QueryDelegatorDelegationsRequest>): _156.QueryDelegatorDelegationsRequest;
                fromAmino(object: _156.QueryDelegatorDelegationsRequestAmino): _156.QueryDelegatorDelegationsRequest;
                toAmino(message: _156.QueryDelegatorDelegationsRequest): _156.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _156.QueryDelegatorDelegationsRequestAminoMsg): _156.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _156.QueryDelegatorDelegationsRequest): _156.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _156.QueryDelegatorDelegationsRequestProtoMsg): _156.QueryDelegatorDelegationsRequest;
                toProto(message: _156.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _156.QueryDelegatorDelegationsRequest): _156.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _156.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_156.QueryDelegatorDelegationsResponse>): _156.QueryDelegatorDelegationsResponse;
                fromAmino(object: _156.QueryDelegatorDelegationsResponseAmino): _156.QueryDelegatorDelegationsResponse;
                toAmino(message: _156.QueryDelegatorDelegationsResponse): _156.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _156.QueryDelegatorDelegationsResponseAminoMsg): _156.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _156.QueryDelegatorDelegationsResponse): _156.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _156.QueryDelegatorDelegationsResponseProtoMsg): _156.QueryDelegatorDelegationsResponse;
                toProto(message: _156.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _156.QueryDelegatorDelegationsResponse): _156.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _156.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_156.QueryDelegatorUnbondingDelegationsRequest>): _156.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _156.QueryDelegatorUnbondingDelegationsRequestAmino): _156.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _156.QueryDelegatorUnbondingDelegationsRequest): _156.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _156.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _156.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _156.QueryDelegatorUnbondingDelegationsRequest): _156.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _156.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _156.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _156.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _156.QueryDelegatorUnbondingDelegationsRequest): _156.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _156.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_156.QueryDelegatorUnbondingDelegationsResponse>): _156.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _156.QueryDelegatorUnbondingDelegationsResponseAmino): _156.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _156.QueryDelegatorUnbondingDelegationsResponse): _156.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _156.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _156.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _156.QueryDelegatorUnbondingDelegationsResponse): _156.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _156.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _156.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _156.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _156.QueryDelegatorUnbondingDelegationsResponse): _156.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _156.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryRedelegationsRequest;
                fromPartial(object: Partial<_156.QueryRedelegationsRequest>): _156.QueryRedelegationsRequest;
                fromAmino(object: _156.QueryRedelegationsRequestAmino): _156.QueryRedelegationsRequest;
                toAmino(message: _156.QueryRedelegationsRequest): _156.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _156.QueryRedelegationsRequestAminoMsg): _156.QueryRedelegationsRequest;
                toAminoMsg(message: _156.QueryRedelegationsRequest): _156.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _156.QueryRedelegationsRequestProtoMsg): _156.QueryRedelegationsRequest;
                toProto(message: _156.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _156.QueryRedelegationsRequest): _156.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _156.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryRedelegationsResponse;
                fromPartial(object: Partial<_156.QueryRedelegationsResponse>): _156.QueryRedelegationsResponse;
                fromAmino(object: _156.QueryRedelegationsResponseAmino): _156.QueryRedelegationsResponse;
                toAmino(message: _156.QueryRedelegationsResponse): _156.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _156.QueryRedelegationsResponseAminoMsg): _156.QueryRedelegationsResponse;
                toAminoMsg(message: _156.QueryRedelegationsResponse): _156.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _156.QueryRedelegationsResponseProtoMsg): _156.QueryRedelegationsResponse;
                toProto(message: _156.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _156.QueryRedelegationsResponse): _156.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _156.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_156.QueryDelegatorValidatorsRequest>): _156.QueryDelegatorValidatorsRequest;
                fromAmino(object: _156.QueryDelegatorValidatorsRequestAmino): _156.QueryDelegatorValidatorsRequest;
                toAmino(message: _156.QueryDelegatorValidatorsRequest): _156.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _156.QueryDelegatorValidatorsRequestAminoMsg): _156.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _156.QueryDelegatorValidatorsRequest): _156.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _156.QueryDelegatorValidatorsRequestProtoMsg): _156.QueryDelegatorValidatorsRequest;
                toProto(message: _156.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _156.QueryDelegatorValidatorsRequest): _156.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _156.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_156.QueryDelegatorValidatorsResponse>): _156.QueryDelegatorValidatorsResponse;
                fromAmino(object: _156.QueryDelegatorValidatorsResponseAmino): _156.QueryDelegatorValidatorsResponse;
                toAmino(message: _156.QueryDelegatorValidatorsResponse): _156.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _156.QueryDelegatorValidatorsResponseAminoMsg): _156.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _156.QueryDelegatorValidatorsResponse): _156.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _156.QueryDelegatorValidatorsResponseProtoMsg): _156.QueryDelegatorValidatorsResponse;
                toProto(message: _156.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _156.QueryDelegatorValidatorsResponse): _156.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _156.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_156.QueryDelegatorValidatorRequest>): _156.QueryDelegatorValidatorRequest;
                fromAmino(object: _156.QueryDelegatorValidatorRequestAmino): _156.QueryDelegatorValidatorRequest;
                toAmino(message: _156.QueryDelegatorValidatorRequest): _156.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _156.QueryDelegatorValidatorRequestAminoMsg): _156.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _156.QueryDelegatorValidatorRequest): _156.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _156.QueryDelegatorValidatorRequestProtoMsg): _156.QueryDelegatorValidatorRequest;
                toProto(message: _156.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _156.QueryDelegatorValidatorRequest): _156.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _156.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_156.QueryDelegatorValidatorResponse>): _156.QueryDelegatorValidatorResponse;
                fromAmino(object: _156.QueryDelegatorValidatorResponseAmino): _156.QueryDelegatorValidatorResponse;
                toAmino(message: _156.QueryDelegatorValidatorResponse): _156.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _156.QueryDelegatorValidatorResponseAminoMsg): _156.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _156.QueryDelegatorValidatorResponse): _156.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _156.QueryDelegatorValidatorResponseProtoMsg): _156.QueryDelegatorValidatorResponse;
                toProto(message: _156.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _156.QueryDelegatorValidatorResponse): _156.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _156.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_156.QueryHistoricalInfoRequest>): _156.QueryHistoricalInfoRequest;
                fromAmino(object: _156.QueryHistoricalInfoRequestAmino): _156.QueryHistoricalInfoRequest;
                toAmino(message: _156.QueryHistoricalInfoRequest): _156.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _156.QueryHistoricalInfoRequestAminoMsg): _156.QueryHistoricalInfoRequest;
                toAminoMsg(message: _156.QueryHistoricalInfoRequest): _156.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _156.QueryHistoricalInfoRequestProtoMsg): _156.QueryHistoricalInfoRequest;
                toProto(message: _156.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _156.QueryHistoricalInfoRequest): _156.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _156.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_156.QueryHistoricalInfoResponse>): _156.QueryHistoricalInfoResponse;
                fromAmino(object: _156.QueryHistoricalInfoResponseAmino): _156.QueryHistoricalInfoResponse;
                toAmino(message: _156.QueryHistoricalInfoResponse): _156.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _156.QueryHistoricalInfoResponseAminoMsg): _156.QueryHistoricalInfoResponse;
                toAminoMsg(message: _156.QueryHistoricalInfoResponse): _156.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _156.QueryHistoricalInfoResponseProtoMsg): _156.QueryHistoricalInfoResponse;
                toProto(message: _156.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _156.QueryHistoricalInfoResponse): _156.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _156.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.QueryPoolRequest;
                fromPartial(_: Partial<_156.QueryPoolRequest>): _156.QueryPoolRequest;
                fromAmino(_: _156.QueryPoolRequestAmino): _156.QueryPoolRequest;
                toAmino(_: _156.QueryPoolRequest): _156.QueryPoolRequestAmino;
                fromAminoMsg(object: _156.QueryPoolRequestAminoMsg): _156.QueryPoolRequest;
                toAminoMsg(message: _156.QueryPoolRequest): _156.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _156.QueryPoolRequestProtoMsg): _156.QueryPoolRequest;
                toProto(message: _156.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _156.QueryPoolRequest): _156.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _156.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryPoolResponse;
                fromPartial(object: Partial<_156.QueryPoolResponse>): _156.QueryPoolResponse;
                fromAmino(object: _156.QueryPoolResponseAmino): _156.QueryPoolResponse;
                toAmino(message: _156.QueryPoolResponse): _156.QueryPoolResponseAmino;
                fromAminoMsg(object: _156.QueryPoolResponseAminoMsg): _156.QueryPoolResponse;
                toAminoMsg(message: _156.QueryPoolResponse): _156.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _156.QueryPoolResponseProtoMsg): _156.QueryPoolResponse;
                toProto(message: _156.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _156.QueryPoolResponse): _156.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _156.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.QueryParamsRequest;
                fromPartial(_: Partial<_156.QueryParamsRequest>): _156.QueryParamsRequest;
                fromAmino(_: _156.QueryParamsRequestAmino): _156.QueryParamsRequest;
                toAmino(_: _156.QueryParamsRequest): _156.QueryParamsRequestAmino;
                fromAminoMsg(object: _156.QueryParamsRequestAminoMsg): _156.QueryParamsRequest;
                toAminoMsg(message: _156.QueryParamsRequest): _156.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _156.QueryParamsRequestProtoMsg): _156.QueryParamsRequest;
                toProto(message: _156.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _156.QueryParamsRequest): _156.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _156.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.QueryParamsResponse;
                fromPartial(object: Partial<_156.QueryParamsResponse>): _156.QueryParamsResponse;
                fromAmino(object: _156.QueryParamsResponseAmino): _156.QueryParamsResponse;
                toAmino(message: _156.QueryParamsResponse): _156.QueryParamsResponseAmino;
                fromAminoMsg(object: _156.QueryParamsResponseAminoMsg): _156.QueryParamsResponse;
                toAminoMsg(message: _156.QueryParamsResponse): _156.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _156.QueryParamsResponseProtoMsg): _156.QueryParamsResponse;
                toProto(message: _156.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _156.QueryParamsResponse): _156.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _155.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.GenesisState;
                fromPartial(object: Partial<_155.GenesisState>): _155.GenesisState;
                fromAmino(object: _155.GenesisStateAmino): _155.GenesisState;
                toAmino(message: _155.GenesisState): _155.GenesisStateAmino;
                fromAminoMsg(object: _155.GenesisStateAminoMsg): _155.GenesisState;
                toAminoMsg(message: _155.GenesisState): _155.GenesisStateAminoMsg;
                fromProtoMsg(message: _155.GenesisStateProtoMsg): _155.GenesisState;
                toProto(message: _155.GenesisState): Uint8Array;
                toProtoMsg(message: _155.GenesisState): _155.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _155.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.LastValidatorPower;
                fromPartial(object: Partial<_155.LastValidatorPower>): _155.LastValidatorPower;
                fromAmino(object: _155.LastValidatorPowerAmino): _155.LastValidatorPower;
                toAmino(message: _155.LastValidatorPower): _155.LastValidatorPowerAmino;
                fromAminoMsg(object: _155.LastValidatorPowerAminoMsg): _155.LastValidatorPower;
                toAminoMsg(message: _155.LastValidatorPower): _155.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _155.LastValidatorPowerProtoMsg): _155.LastValidatorPower;
                toProto(message: _155.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _155.LastValidatorPower): _155.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _154.AuthorizationType;
            authorizationTypeToJSON(object: _154.AuthorizationType): string;
            AuthorizationType: typeof _154.AuthorizationType;
            AuthorizationTypeSDKType: typeof _154.AuthorizationType;
            AuthorizationTypeAmino: typeof _154.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _154.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.StakeAuthorization;
                fromPartial(object: Partial<_154.StakeAuthorization>): _154.StakeAuthorization;
                fromAmino(object: _154.StakeAuthorizationAmino): _154.StakeAuthorization;
                toAmino(message: _154.StakeAuthorization): _154.StakeAuthorizationAmino;
                fromAminoMsg(object: _154.StakeAuthorizationAminoMsg): _154.StakeAuthorization;
                toAminoMsg(message: _154.StakeAuthorization): _154.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _154.StakeAuthorizationProtoMsg): _154.StakeAuthorization;
                toProto(message: _154.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _154.StakeAuthorization): _154.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _154.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.StakeAuthorization_Validators;
                fromPartial(object: Partial<_154.StakeAuthorization_Validators>): _154.StakeAuthorization_Validators;
                fromAmino(object: _154.StakeAuthorization_ValidatorsAmino): _154.StakeAuthorization_Validators;
                toAmino(message: _154.StakeAuthorization_Validators): _154.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _154.StakeAuthorization_ValidatorsAminoMsg): _154.StakeAuthorization_Validators;
                toAminoMsg(message: _154.StakeAuthorization_Validators): _154.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _154.StakeAuthorization_ValidatorsProtoMsg): _154.StakeAuthorization_Validators;
                toProto(message: _154.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _154.StakeAuthorization_Validators): _154.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _159.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.Config;
                    fromPartial(object: Partial<_159.Config>): _159.Config;
                    fromAmino(object: _159.ConfigAmino): _159.Config;
                    toAmino(message: _159.Config): _159.ConfigAmino;
                    fromAminoMsg(object: _159.ConfigAminoMsg): _159.Config;
                    toAminoMsg(message: _159.Config): _159.ConfigAminoMsg;
                    fromProtoMsg(message: _159.ConfigProtoMsg): _159.Config;
                    toProto(message: _159.Config): Uint8Array;
                    toProtoMsg(message: _159.Config): _159.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _160.SignMode;
                signModeToJSON(object: _160.SignMode): string;
                SignMode: typeof _160.SignMode;
                SignModeSDKType: typeof _160.SignMode;
                SignModeAmino: typeof _160.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _160.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.SignatureDescriptors;
                    fromPartial(object: Partial<_160.SignatureDescriptors>): _160.SignatureDescriptors;
                    fromAmino(object: _160.SignatureDescriptorsAmino): _160.SignatureDescriptors;
                    toAmino(message: _160.SignatureDescriptors): _160.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _160.SignatureDescriptorsAminoMsg): _160.SignatureDescriptors;
                    toAminoMsg(message: _160.SignatureDescriptors): _160.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _160.SignatureDescriptorsProtoMsg): _160.SignatureDescriptors;
                    toProto(message: _160.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _160.SignatureDescriptors): _160.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _160.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.SignatureDescriptor;
                    fromPartial(object: Partial<_160.SignatureDescriptor>): _160.SignatureDescriptor;
                    fromAmino(object: _160.SignatureDescriptorAmino): _160.SignatureDescriptor;
                    toAmino(message: _160.SignatureDescriptor): _160.SignatureDescriptorAmino;
                    fromAminoMsg(object: _160.SignatureDescriptorAminoMsg): _160.SignatureDescriptor;
                    toAminoMsg(message: _160.SignatureDescriptor): _160.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _160.SignatureDescriptorProtoMsg): _160.SignatureDescriptor;
                    toProto(message: _160.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _160.SignatureDescriptor): _160.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _160.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_160.SignatureDescriptor_Data>): _160.SignatureDescriptor_Data;
                    fromAmino(object: _160.SignatureDescriptor_DataAmino): _160.SignatureDescriptor_Data;
                    toAmino(message: _160.SignatureDescriptor_Data): _160.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _160.SignatureDescriptor_DataAminoMsg): _160.SignatureDescriptor_Data;
                    toAminoMsg(message: _160.SignatureDescriptor_Data): _160.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _160.SignatureDescriptor_DataProtoMsg): _160.SignatureDescriptor_Data;
                    toProto(message: _160.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _160.SignatureDescriptor_Data): _160.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _160.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_160.SignatureDescriptor_Data_Single>): _160.SignatureDescriptor_Data_Single;
                    fromAmino(object: _160.SignatureDescriptor_Data_SingleAmino): _160.SignatureDescriptor_Data_Single;
                    toAmino(message: _160.SignatureDescriptor_Data_Single): _160.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _160.SignatureDescriptor_Data_SingleAminoMsg): _160.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _160.SignatureDescriptor_Data_Single): _160.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _160.SignatureDescriptor_Data_SingleProtoMsg): _160.SignatureDescriptor_Data_Single;
                    toProto(message: _160.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _160.SignatureDescriptor_Data_Single): _160.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _160.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_160.SignatureDescriptor_Data_Multi>): _160.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _160.SignatureDescriptor_Data_MultiAmino): _160.SignatureDescriptor_Data_Multi;
                    toAmino(message: _160.SignatureDescriptor_Data_Multi): _160.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _160.SignatureDescriptor_Data_MultiAminoMsg): _160.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _160.SignatureDescriptor_Data_Multi): _160.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _160.SignatureDescriptor_Data_MultiProtoMsg): _160.SignatureDescriptor_Data_Multi;
                    toProto(message: _160.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _160.SignatureDescriptor_Data_Multi): _160.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _287.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _161.SimulateRequest): Promise<_161.SimulateResponse>;
                getTx(request: _161.GetTxRequest): Promise<_161.GetTxResponse>;
                broadcastTx(request: _161.BroadcastTxRequest): Promise<_161.BroadcastTxResponse>;
                getTxsEvent(request: _161.GetTxsEventRequest): Promise<_161.GetTxsEventResponse>;
                getBlockWithTxs(request: _161.GetBlockWithTxsRequest): Promise<_161.GetBlockWithTxsResponse>;
                txDecode(request: _161.TxDecodeRequest): Promise<_161.TxDecodeResponse>;
                txEncode(request: _161.TxEncodeRequest): Promise<_161.TxEncodeResponse>;
                txEncodeAmino(request: _161.TxEncodeAminoRequest): Promise<_161.TxEncodeAminoResponse>;
                txDecodeAmino(request: _161.TxDecodeAminoRequest): Promise<_161.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _265.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _162.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.Tx;
                fromPartial(object: Partial<_162.Tx>): _162.Tx;
                fromAmino(object: _162.TxAmino): _162.Tx;
                toAmino(message: _162.Tx): _162.TxAmino;
                fromAminoMsg(object: _162.TxAminoMsg): _162.Tx;
                toAminoMsg(message: _162.Tx): _162.TxAminoMsg;
                fromProtoMsg(message: _162.TxProtoMsg): _162.Tx;
                toProto(message: _162.Tx): Uint8Array;
                toProtoMsg(message: _162.Tx): _162.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _162.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.TxRaw;
                fromPartial(object: Partial<_162.TxRaw>): _162.TxRaw;
                fromAmino(object: _162.TxRawAmino): _162.TxRaw;
                toAmino(message: _162.TxRaw): _162.TxRawAmino;
                fromAminoMsg(object: _162.TxRawAminoMsg): _162.TxRaw;
                toAminoMsg(message: _162.TxRaw): _162.TxRawAminoMsg;
                fromProtoMsg(message: _162.TxRawProtoMsg): _162.TxRaw;
                toProto(message: _162.TxRaw): Uint8Array;
                toProtoMsg(message: _162.TxRaw): _162.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _162.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.SignDoc;
                fromPartial(object: Partial<_162.SignDoc>): _162.SignDoc;
                fromAmino(object: _162.SignDocAmino): _162.SignDoc;
                toAmino(message: _162.SignDoc): _162.SignDocAmino;
                fromAminoMsg(object: _162.SignDocAminoMsg): _162.SignDoc;
                toAminoMsg(message: _162.SignDoc): _162.SignDocAminoMsg;
                fromProtoMsg(message: _162.SignDocProtoMsg): _162.SignDoc;
                toProto(message: _162.SignDoc): Uint8Array;
                toProtoMsg(message: _162.SignDoc): _162.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _162.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.SignDocDirectAux;
                fromPartial(object: Partial<_162.SignDocDirectAux>): _162.SignDocDirectAux;
                fromAmino(object: _162.SignDocDirectAuxAmino): _162.SignDocDirectAux;
                toAmino(message: _162.SignDocDirectAux): _162.SignDocDirectAuxAmino;
                fromAminoMsg(object: _162.SignDocDirectAuxAminoMsg): _162.SignDocDirectAux;
                toAminoMsg(message: _162.SignDocDirectAux): _162.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _162.SignDocDirectAuxProtoMsg): _162.SignDocDirectAux;
                toProto(message: _162.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _162.SignDocDirectAux): _162.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _162.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.TxBody;
                fromPartial(object: Partial<_162.TxBody>): _162.TxBody;
                fromAmino(object: _162.TxBodyAmino): _162.TxBody;
                toAmino(message: _162.TxBody): _162.TxBodyAmino;
                fromAminoMsg(object: _162.TxBodyAminoMsg): _162.TxBody;
                toAminoMsg(message: _162.TxBody): _162.TxBodyAminoMsg;
                fromProtoMsg(message: _162.TxBodyProtoMsg): _162.TxBody;
                toProto(message: _162.TxBody): Uint8Array;
                toProtoMsg(message: _162.TxBody): _162.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _162.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.AuthInfo;
                fromPartial(object: Partial<_162.AuthInfo>): _162.AuthInfo;
                fromAmino(object: _162.AuthInfoAmino): _162.AuthInfo;
                toAmino(message: _162.AuthInfo): _162.AuthInfoAmino;
                fromAminoMsg(object: _162.AuthInfoAminoMsg): _162.AuthInfo;
                toAminoMsg(message: _162.AuthInfo): _162.AuthInfoAminoMsg;
                fromProtoMsg(message: _162.AuthInfoProtoMsg): _162.AuthInfo;
                toProto(message: _162.AuthInfo): Uint8Array;
                toProtoMsg(message: _162.AuthInfo): _162.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _162.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.SignerInfo;
                fromPartial(object: Partial<_162.SignerInfo>): _162.SignerInfo;
                fromAmino(object: _162.SignerInfoAmino): _162.SignerInfo;
                toAmino(message: _162.SignerInfo): _162.SignerInfoAmino;
                fromAminoMsg(object: _162.SignerInfoAminoMsg): _162.SignerInfo;
                toAminoMsg(message: _162.SignerInfo): _162.SignerInfoAminoMsg;
                fromProtoMsg(message: _162.SignerInfoProtoMsg): _162.SignerInfo;
                toProto(message: _162.SignerInfo): Uint8Array;
                toProtoMsg(message: _162.SignerInfo): _162.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _162.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.ModeInfo;
                fromPartial(object: Partial<_162.ModeInfo>): _162.ModeInfo;
                fromAmino(object: _162.ModeInfoAmino): _162.ModeInfo;
                toAmino(message: _162.ModeInfo): _162.ModeInfoAmino;
                fromAminoMsg(object: _162.ModeInfoAminoMsg): _162.ModeInfo;
                toAminoMsg(message: _162.ModeInfo): _162.ModeInfoAminoMsg;
                fromProtoMsg(message: _162.ModeInfoProtoMsg): _162.ModeInfo;
                toProto(message: _162.ModeInfo): Uint8Array;
                toProtoMsg(message: _162.ModeInfo): _162.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _162.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.ModeInfo_Single;
                fromPartial(object: Partial<_162.ModeInfo_Single>): _162.ModeInfo_Single;
                fromAmino(object: _162.ModeInfo_SingleAmino): _162.ModeInfo_Single;
                toAmino(message: _162.ModeInfo_Single): _162.ModeInfo_SingleAmino;
                fromAminoMsg(object: _162.ModeInfo_SingleAminoMsg): _162.ModeInfo_Single;
                toAminoMsg(message: _162.ModeInfo_Single): _162.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _162.ModeInfo_SingleProtoMsg): _162.ModeInfo_Single;
                toProto(message: _162.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _162.ModeInfo_Single): _162.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _162.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.ModeInfo_Multi;
                fromPartial(object: Partial<_162.ModeInfo_Multi>): _162.ModeInfo_Multi;
                fromAmino(object: _162.ModeInfo_MultiAmino): _162.ModeInfo_Multi;
                toAmino(message: _162.ModeInfo_Multi): _162.ModeInfo_MultiAmino;
                fromAminoMsg(object: _162.ModeInfo_MultiAminoMsg): _162.ModeInfo_Multi;
                toAminoMsg(message: _162.ModeInfo_Multi): _162.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _162.ModeInfo_MultiProtoMsg): _162.ModeInfo_Multi;
                toProto(message: _162.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _162.ModeInfo_Multi): _162.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _162.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.Fee;
                fromPartial(object: Partial<_162.Fee>): _162.Fee;
                fromAmino(object: _162.FeeAmino): _162.Fee;
                toAmino(message: _162.Fee): _162.FeeAmino;
                fromAminoMsg(object: _162.FeeAminoMsg): _162.Fee;
                toAminoMsg(message: _162.Fee): _162.FeeAminoMsg;
                fromProtoMsg(message: _162.FeeProtoMsg): _162.Fee;
                toProto(message: _162.Fee): Uint8Array;
                toProtoMsg(message: _162.Fee): _162.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _162.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.Tip;
                fromPartial(object: Partial<_162.Tip>): _162.Tip;
                fromAmino(object: _162.TipAmino): _162.Tip;
                toAmino(message: _162.Tip): _162.TipAmino;
                fromAminoMsg(object: _162.TipAminoMsg): _162.Tip;
                toAminoMsg(message: _162.Tip): _162.TipAminoMsg;
                fromProtoMsg(message: _162.TipProtoMsg): _162.Tip;
                toProto(message: _162.Tip): Uint8Array;
                toProtoMsg(message: _162.Tip): _162.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _162.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.AuxSignerData;
                fromPartial(object: Partial<_162.AuxSignerData>): _162.AuxSignerData;
                fromAmino(object: _162.AuxSignerDataAmino): _162.AuxSignerData;
                toAmino(message: _162.AuxSignerData): _162.AuxSignerDataAmino;
                fromAminoMsg(object: _162.AuxSignerDataAminoMsg): _162.AuxSignerData;
                toAminoMsg(message: _162.AuxSignerData): _162.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _162.AuxSignerDataProtoMsg): _162.AuxSignerData;
                toProto(message: _162.AuxSignerData): Uint8Array;
                toProtoMsg(message: _162.AuxSignerData): _162.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _161.OrderBy;
            orderByToJSON(object: _161.OrderBy): string;
            broadcastModeFromJSON(object: any): _161.BroadcastMode;
            broadcastModeToJSON(object: _161.BroadcastMode): string;
            OrderBy: typeof _161.OrderBy;
            OrderBySDKType: typeof _161.OrderBy;
            OrderByAmino: typeof _161.OrderBy;
            BroadcastMode: typeof _161.BroadcastMode;
            BroadcastModeSDKType: typeof _161.BroadcastMode;
            BroadcastModeAmino: typeof _161.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _161.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.GetTxsEventRequest;
                fromPartial(object: Partial<_161.GetTxsEventRequest>): _161.GetTxsEventRequest;
                fromAmino(object: _161.GetTxsEventRequestAmino): _161.GetTxsEventRequest;
                toAmino(message: _161.GetTxsEventRequest): _161.GetTxsEventRequestAmino;
                fromAminoMsg(object: _161.GetTxsEventRequestAminoMsg): _161.GetTxsEventRequest;
                toAminoMsg(message: _161.GetTxsEventRequest): _161.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _161.GetTxsEventRequestProtoMsg): _161.GetTxsEventRequest;
                toProto(message: _161.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _161.GetTxsEventRequest): _161.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _161.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.GetTxsEventResponse;
                fromPartial(object: Partial<_161.GetTxsEventResponse>): _161.GetTxsEventResponse;
                fromAmino(object: _161.GetTxsEventResponseAmino): _161.GetTxsEventResponse;
                toAmino(message: _161.GetTxsEventResponse): _161.GetTxsEventResponseAmino;
                fromAminoMsg(object: _161.GetTxsEventResponseAminoMsg): _161.GetTxsEventResponse;
                toAminoMsg(message: _161.GetTxsEventResponse): _161.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _161.GetTxsEventResponseProtoMsg): _161.GetTxsEventResponse;
                toProto(message: _161.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _161.GetTxsEventResponse): _161.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _161.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.BroadcastTxRequest;
                fromPartial(object: Partial<_161.BroadcastTxRequest>): _161.BroadcastTxRequest;
                fromAmino(object: _161.BroadcastTxRequestAmino): _161.BroadcastTxRequest;
                toAmino(message: _161.BroadcastTxRequest): _161.BroadcastTxRequestAmino;
                fromAminoMsg(object: _161.BroadcastTxRequestAminoMsg): _161.BroadcastTxRequest;
                toAminoMsg(message: _161.BroadcastTxRequest): _161.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _161.BroadcastTxRequestProtoMsg): _161.BroadcastTxRequest;
                toProto(message: _161.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _161.BroadcastTxRequest): _161.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _161.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.BroadcastTxResponse;
                fromPartial(object: Partial<_161.BroadcastTxResponse>): _161.BroadcastTxResponse;
                fromAmino(object: _161.BroadcastTxResponseAmino): _161.BroadcastTxResponse;
                toAmino(message: _161.BroadcastTxResponse): _161.BroadcastTxResponseAmino;
                fromAminoMsg(object: _161.BroadcastTxResponseAminoMsg): _161.BroadcastTxResponse;
                toAminoMsg(message: _161.BroadcastTxResponse): _161.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _161.BroadcastTxResponseProtoMsg): _161.BroadcastTxResponse;
                toProto(message: _161.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _161.BroadcastTxResponse): _161.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _161.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.SimulateRequest;
                fromPartial(object: Partial<_161.SimulateRequest>): _161.SimulateRequest;
                fromAmino(object: _161.SimulateRequestAmino): _161.SimulateRequest;
                toAmino(message: _161.SimulateRequest): _161.SimulateRequestAmino;
                fromAminoMsg(object: _161.SimulateRequestAminoMsg): _161.SimulateRequest;
                toAminoMsg(message: _161.SimulateRequest): _161.SimulateRequestAminoMsg;
                fromProtoMsg(message: _161.SimulateRequestProtoMsg): _161.SimulateRequest;
                toProto(message: _161.SimulateRequest): Uint8Array;
                toProtoMsg(message: _161.SimulateRequest): _161.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _161.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.SimulateResponse;
                fromPartial(object: Partial<_161.SimulateResponse>): _161.SimulateResponse;
                fromAmino(object: _161.SimulateResponseAmino): _161.SimulateResponse;
                toAmino(message: _161.SimulateResponse): _161.SimulateResponseAmino;
                fromAminoMsg(object: _161.SimulateResponseAminoMsg): _161.SimulateResponse;
                toAminoMsg(message: _161.SimulateResponse): _161.SimulateResponseAminoMsg;
                fromProtoMsg(message: _161.SimulateResponseProtoMsg): _161.SimulateResponse;
                toProto(message: _161.SimulateResponse): Uint8Array;
                toProtoMsg(message: _161.SimulateResponse): _161.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _161.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.GetTxRequest;
                fromPartial(object: Partial<_161.GetTxRequest>): _161.GetTxRequest;
                fromAmino(object: _161.GetTxRequestAmino): _161.GetTxRequest;
                toAmino(message: _161.GetTxRequest): _161.GetTxRequestAmino;
                fromAminoMsg(object: _161.GetTxRequestAminoMsg): _161.GetTxRequest;
                toAminoMsg(message: _161.GetTxRequest): _161.GetTxRequestAminoMsg;
                fromProtoMsg(message: _161.GetTxRequestProtoMsg): _161.GetTxRequest;
                toProto(message: _161.GetTxRequest): Uint8Array;
                toProtoMsg(message: _161.GetTxRequest): _161.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _161.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.GetTxResponse;
                fromPartial(object: Partial<_161.GetTxResponse>): _161.GetTxResponse;
                fromAmino(object: _161.GetTxResponseAmino): _161.GetTxResponse;
                toAmino(message: _161.GetTxResponse): _161.GetTxResponseAmino;
                fromAminoMsg(object: _161.GetTxResponseAminoMsg): _161.GetTxResponse;
                toAminoMsg(message: _161.GetTxResponse): _161.GetTxResponseAminoMsg;
                fromProtoMsg(message: _161.GetTxResponseProtoMsg): _161.GetTxResponse;
                toProto(message: _161.GetTxResponse): Uint8Array;
                toProtoMsg(message: _161.GetTxResponse): _161.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _161.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_161.GetBlockWithTxsRequest>): _161.GetBlockWithTxsRequest;
                fromAmino(object: _161.GetBlockWithTxsRequestAmino): _161.GetBlockWithTxsRequest;
                toAmino(message: _161.GetBlockWithTxsRequest): _161.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _161.GetBlockWithTxsRequestAminoMsg): _161.GetBlockWithTxsRequest;
                toAminoMsg(message: _161.GetBlockWithTxsRequest): _161.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _161.GetBlockWithTxsRequestProtoMsg): _161.GetBlockWithTxsRequest;
                toProto(message: _161.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _161.GetBlockWithTxsRequest): _161.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _161.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_161.GetBlockWithTxsResponse>): _161.GetBlockWithTxsResponse;
                fromAmino(object: _161.GetBlockWithTxsResponseAmino): _161.GetBlockWithTxsResponse;
                toAmino(message: _161.GetBlockWithTxsResponse): _161.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _161.GetBlockWithTxsResponseAminoMsg): _161.GetBlockWithTxsResponse;
                toAminoMsg(message: _161.GetBlockWithTxsResponse): _161.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _161.GetBlockWithTxsResponseProtoMsg): _161.GetBlockWithTxsResponse;
                toProto(message: _161.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _161.GetBlockWithTxsResponse): _161.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _161.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.TxDecodeRequest;
                fromPartial(object: Partial<_161.TxDecodeRequest>): _161.TxDecodeRequest;
                fromAmino(object: _161.TxDecodeRequestAmino): _161.TxDecodeRequest;
                toAmino(message: _161.TxDecodeRequest): _161.TxDecodeRequestAmino;
                fromAminoMsg(object: _161.TxDecodeRequestAminoMsg): _161.TxDecodeRequest;
                toAminoMsg(message: _161.TxDecodeRequest): _161.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _161.TxDecodeRequestProtoMsg): _161.TxDecodeRequest;
                toProto(message: _161.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _161.TxDecodeRequest): _161.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _161.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.TxDecodeResponse;
                fromPartial(object: Partial<_161.TxDecodeResponse>): _161.TxDecodeResponse;
                fromAmino(object: _161.TxDecodeResponseAmino): _161.TxDecodeResponse;
                toAmino(message: _161.TxDecodeResponse): _161.TxDecodeResponseAmino;
                fromAminoMsg(object: _161.TxDecodeResponseAminoMsg): _161.TxDecodeResponse;
                toAminoMsg(message: _161.TxDecodeResponse): _161.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _161.TxDecodeResponseProtoMsg): _161.TxDecodeResponse;
                toProto(message: _161.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _161.TxDecodeResponse): _161.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _161.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.TxEncodeRequest;
                fromPartial(object: Partial<_161.TxEncodeRequest>): _161.TxEncodeRequest;
                fromAmino(object: _161.TxEncodeRequestAmino): _161.TxEncodeRequest;
                toAmino(message: _161.TxEncodeRequest): _161.TxEncodeRequestAmino;
                fromAminoMsg(object: _161.TxEncodeRequestAminoMsg): _161.TxEncodeRequest;
                toAminoMsg(message: _161.TxEncodeRequest): _161.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _161.TxEncodeRequestProtoMsg): _161.TxEncodeRequest;
                toProto(message: _161.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _161.TxEncodeRequest): _161.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _161.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.TxEncodeResponse;
                fromPartial(object: Partial<_161.TxEncodeResponse>): _161.TxEncodeResponse;
                fromAmino(object: _161.TxEncodeResponseAmino): _161.TxEncodeResponse;
                toAmino(message: _161.TxEncodeResponse): _161.TxEncodeResponseAmino;
                fromAminoMsg(object: _161.TxEncodeResponseAminoMsg): _161.TxEncodeResponse;
                toAminoMsg(message: _161.TxEncodeResponse): _161.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _161.TxEncodeResponseProtoMsg): _161.TxEncodeResponse;
                toProto(message: _161.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _161.TxEncodeResponse): _161.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _161.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.TxEncodeAminoRequest;
                fromPartial(object: Partial<_161.TxEncodeAminoRequest>): _161.TxEncodeAminoRequest;
                fromAmino(object: _161.TxEncodeAminoRequestAmino): _161.TxEncodeAminoRequest;
                toAmino(message: _161.TxEncodeAminoRequest): _161.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _161.TxEncodeAminoRequestAminoMsg): _161.TxEncodeAminoRequest;
                toAminoMsg(message: _161.TxEncodeAminoRequest): _161.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _161.TxEncodeAminoRequestProtoMsg): _161.TxEncodeAminoRequest;
                toProto(message: _161.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _161.TxEncodeAminoRequest): _161.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _161.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.TxEncodeAminoResponse;
                fromPartial(object: Partial<_161.TxEncodeAminoResponse>): _161.TxEncodeAminoResponse;
                fromAmino(object: _161.TxEncodeAminoResponseAmino): _161.TxEncodeAminoResponse;
                toAmino(message: _161.TxEncodeAminoResponse): _161.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _161.TxEncodeAminoResponseAminoMsg): _161.TxEncodeAminoResponse;
                toAminoMsg(message: _161.TxEncodeAminoResponse): _161.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _161.TxEncodeAminoResponseProtoMsg): _161.TxEncodeAminoResponse;
                toProto(message: _161.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _161.TxEncodeAminoResponse): _161.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _161.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.TxDecodeAminoRequest;
                fromPartial(object: Partial<_161.TxDecodeAminoRequest>): _161.TxDecodeAminoRequest;
                fromAmino(object: _161.TxDecodeAminoRequestAmino): _161.TxDecodeAminoRequest;
                toAmino(message: _161.TxDecodeAminoRequest): _161.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _161.TxDecodeAminoRequestAminoMsg): _161.TxDecodeAminoRequest;
                toAminoMsg(message: _161.TxDecodeAminoRequest): _161.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _161.TxDecodeAminoRequestProtoMsg): _161.TxDecodeAminoRequest;
                toProto(message: _161.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _161.TxDecodeAminoRequest): _161.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _161.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.TxDecodeAminoResponse;
                fromPartial(object: Partial<_161.TxDecodeAminoResponse>): _161.TxDecodeAminoResponse;
                fromAmino(object: _161.TxDecodeAminoResponseAmino): _161.TxDecodeAminoResponse;
                toAmino(message: _161.TxDecodeAminoResponse): _161.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _161.TxDecodeAminoResponseAminoMsg): _161.TxDecodeAminoResponse;
                toAminoMsg(message: _161.TxDecodeAminoResponse): _161.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _161.TxDecodeAminoResponseProtoMsg): _161.TxDecodeAminoResponse;
                toProto(message: _161.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _161.TxDecodeAminoResponse): _161.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _163.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.Module;
                    fromPartial(object: Partial<_163.Module>): _163.Module;
                    fromAmino(object: _163.ModuleAmino): _163.Module;
                    toAmino(message: _163.Module): _163.ModuleAmino;
                    fromAminoMsg(object: _163.ModuleAminoMsg): _163.Module;
                    toAminoMsg(message: _163.Module): _163.ModuleAminoMsg;
                    fromProtoMsg(message: _163.ModuleProtoMsg): _163.Module;
                    toProto(message: _163.Module): Uint8Array;
                    toProtoMsg(message: _163.Module): _163.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _304.MsgClientImpl;
            QueryClientImpl: typeof _288.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _164.QueryCurrentPlanRequest): Promise<_164.QueryCurrentPlanResponse>;
                appliedPlan(request: _164.QueryAppliedPlanRequest): Promise<_164.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _164.QueryUpgradedConsensusStateRequest): Promise<_164.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _164.QueryModuleVersionsRequest): Promise<_164.QueryModuleVersionsResponse>;
                authority(request?: _164.QueryAuthorityRequest): Promise<_164.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _266.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _165.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _165.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _165.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _165.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _165.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _165.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _165.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _165.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _165.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _165.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _165.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _165.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _165.MsgSoftwareUpgrade) => _165.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _165.MsgSoftwareUpgradeAmino) => _165.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _165.MsgCancelUpgrade) => _165.MsgCancelUpgradeAmino;
                    fromAmino: (object: _165.MsgCancelUpgradeAmino) => _165.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _166.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.Plan;
                fromPartial(object: Partial<_166.Plan>): _166.Plan;
                fromAmino(object: _166.PlanAmino): _166.Plan;
                toAmino(message: _166.Plan): _166.PlanAmino;
                fromAminoMsg(object: _166.PlanAminoMsg): _166.Plan;
                toAminoMsg(message: _166.Plan): _166.PlanAminoMsg;
                fromProtoMsg(message: _166.PlanProtoMsg): _166.Plan;
                toProto(message: _166.Plan): Uint8Array;
                toProtoMsg(message: _166.Plan): _166.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _166.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_166.SoftwareUpgradeProposal>): _166.SoftwareUpgradeProposal;
                fromAmino(object: _166.SoftwareUpgradeProposalAmino): _166.SoftwareUpgradeProposal;
                toAmino(message: _166.SoftwareUpgradeProposal): _166.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _166.SoftwareUpgradeProposalAminoMsg): _166.SoftwareUpgradeProposal;
                toAminoMsg(message: _166.SoftwareUpgradeProposal): _166.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _166.SoftwareUpgradeProposalProtoMsg): _166.SoftwareUpgradeProposal;
                toProto(message: _166.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _166.SoftwareUpgradeProposal): _166.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _166.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_166.CancelSoftwareUpgradeProposal>): _166.CancelSoftwareUpgradeProposal;
                fromAmino(object: _166.CancelSoftwareUpgradeProposalAmino): _166.CancelSoftwareUpgradeProposal;
                toAmino(message: _166.CancelSoftwareUpgradeProposal): _166.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _166.CancelSoftwareUpgradeProposalAminoMsg): _166.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _166.CancelSoftwareUpgradeProposal): _166.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _166.CancelSoftwareUpgradeProposalProtoMsg): _166.CancelSoftwareUpgradeProposal;
                toProto(message: _166.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _166.CancelSoftwareUpgradeProposal): _166.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _166.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.ModuleVersion;
                fromPartial(object: Partial<_166.ModuleVersion>): _166.ModuleVersion;
                fromAmino(object: _166.ModuleVersionAmino): _166.ModuleVersion;
                toAmino(message: _166.ModuleVersion): _166.ModuleVersionAmino;
                fromAminoMsg(object: _166.ModuleVersionAminoMsg): _166.ModuleVersion;
                toAminoMsg(message: _166.ModuleVersion): _166.ModuleVersionAminoMsg;
                fromProtoMsg(message: _166.ModuleVersionProtoMsg): _166.ModuleVersion;
                toProto(message: _166.ModuleVersion): Uint8Array;
                toProtoMsg(message: _166.ModuleVersion): _166.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _165.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_165.MsgSoftwareUpgrade>): _165.MsgSoftwareUpgrade;
                fromAmino(object: _165.MsgSoftwareUpgradeAmino): _165.MsgSoftwareUpgrade;
                toAmino(message: _165.MsgSoftwareUpgrade): _165.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _165.MsgSoftwareUpgradeAminoMsg): _165.MsgSoftwareUpgrade;
                toAminoMsg(message: _165.MsgSoftwareUpgrade): _165.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _165.MsgSoftwareUpgradeProtoMsg): _165.MsgSoftwareUpgrade;
                toProto(message: _165.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _165.MsgSoftwareUpgrade): _165.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _165.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _165.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_165.MsgSoftwareUpgradeResponse>): _165.MsgSoftwareUpgradeResponse;
                fromAmino(_: _165.MsgSoftwareUpgradeResponseAmino): _165.MsgSoftwareUpgradeResponse;
                toAmino(_: _165.MsgSoftwareUpgradeResponse): _165.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _165.MsgSoftwareUpgradeResponseAminoMsg): _165.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _165.MsgSoftwareUpgradeResponse): _165.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _165.MsgSoftwareUpgradeResponseProtoMsg): _165.MsgSoftwareUpgradeResponse;
                toProto(message: _165.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _165.MsgSoftwareUpgradeResponse): _165.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _165.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.MsgCancelUpgrade;
                fromPartial(object: Partial<_165.MsgCancelUpgrade>): _165.MsgCancelUpgrade;
                fromAmino(object: _165.MsgCancelUpgradeAmino): _165.MsgCancelUpgrade;
                toAmino(message: _165.MsgCancelUpgrade): _165.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _165.MsgCancelUpgradeAminoMsg): _165.MsgCancelUpgrade;
                toAminoMsg(message: _165.MsgCancelUpgrade): _165.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _165.MsgCancelUpgradeProtoMsg): _165.MsgCancelUpgrade;
                toProto(message: _165.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _165.MsgCancelUpgrade): _165.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _165.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _165.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_165.MsgCancelUpgradeResponse>): _165.MsgCancelUpgradeResponse;
                fromAmino(_: _165.MsgCancelUpgradeResponseAmino): _165.MsgCancelUpgradeResponse;
                toAmino(_: _165.MsgCancelUpgradeResponse): _165.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _165.MsgCancelUpgradeResponseAminoMsg): _165.MsgCancelUpgradeResponse;
                toAminoMsg(message: _165.MsgCancelUpgradeResponse): _165.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _165.MsgCancelUpgradeResponseProtoMsg): _165.MsgCancelUpgradeResponse;
                toProto(message: _165.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _165.MsgCancelUpgradeResponse): _165.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _164.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_164.QueryCurrentPlanRequest>): _164.QueryCurrentPlanRequest;
                fromAmino(_: _164.QueryCurrentPlanRequestAmino): _164.QueryCurrentPlanRequest;
                toAmino(_: _164.QueryCurrentPlanRequest): _164.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _164.QueryCurrentPlanRequestAminoMsg): _164.QueryCurrentPlanRequest;
                toAminoMsg(message: _164.QueryCurrentPlanRequest): _164.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _164.QueryCurrentPlanRequestProtoMsg): _164.QueryCurrentPlanRequest;
                toProto(message: _164.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _164.QueryCurrentPlanRequest): _164.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _164.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_164.QueryCurrentPlanResponse>): _164.QueryCurrentPlanResponse;
                fromAmino(object: _164.QueryCurrentPlanResponseAmino): _164.QueryCurrentPlanResponse;
                toAmino(message: _164.QueryCurrentPlanResponse): _164.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _164.QueryCurrentPlanResponseAminoMsg): _164.QueryCurrentPlanResponse;
                toAminoMsg(message: _164.QueryCurrentPlanResponse): _164.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _164.QueryCurrentPlanResponseProtoMsg): _164.QueryCurrentPlanResponse;
                toProto(message: _164.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _164.QueryCurrentPlanResponse): _164.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _164.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_164.QueryAppliedPlanRequest>): _164.QueryAppliedPlanRequest;
                fromAmino(object: _164.QueryAppliedPlanRequestAmino): _164.QueryAppliedPlanRequest;
                toAmino(message: _164.QueryAppliedPlanRequest): _164.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _164.QueryAppliedPlanRequestAminoMsg): _164.QueryAppliedPlanRequest;
                toAminoMsg(message: _164.QueryAppliedPlanRequest): _164.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _164.QueryAppliedPlanRequestProtoMsg): _164.QueryAppliedPlanRequest;
                toProto(message: _164.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _164.QueryAppliedPlanRequest): _164.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _164.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_164.QueryAppliedPlanResponse>): _164.QueryAppliedPlanResponse;
                fromAmino(object: _164.QueryAppliedPlanResponseAmino): _164.QueryAppliedPlanResponse;
                toAmino(message: _164.QueryAppliedPlanResponse): _164.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _164.QueryAppliedPlanResponseAminoMsg): _164.QueryAppliedPlanResponse;
                toAminoMsg(message: _164.QueryAppliedPlanResponse): _164.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _164.QueryAppliedPlanResponseProtoMsg): _164.QueryAppliedPlanResponse;
                toProto(message: _164.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _164.QueryAppliedPlanResponse): _164.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _164.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_164.QueryUpgradedConsensusStateRequest>): _164.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _164.QueryUpgradedConsensusStateRequestAmino): _164.QueryUpgradedConsensusStateRequest;
                toAmino(message: _164.QueryUpgradedConsensusStateRequest): _164.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _164.QueryUpgradedConsensusStateRequestAminoMsg): _164.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _164.QueryUpgradedConsensusStateRequest): _164.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _164.QueryUpgradedConsensusStateRequestProtoMsg): _164.QueryUpgradedConsensusStateRequest;
                toProto(message: _164.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _164.QueryUpgradedConsensusStateRequest): _164.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _164.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_164.QueryUpgradedConsensusStateResponse>): _164.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _164.QueryUpgradedConsensusStateResponseAmino): _164.QueryUpgradedConsensusStateResponse;
                toAmino(message: _164.QueryUpgradedConsensusStateResponse): _164.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _164.QueryUpgradedConsensusStateResponseAminoMsg): _164.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _164.QueryUpgradedConsensusStateResponse): _164.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _164.QueryUpgradedConsensusStateResponseProtoMsg): _164.QueryUpgradedConsensusStateResponse;
                toProto(message: _164.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _164.QueryUpgradedConsensusStateResponse): _164.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _164.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_164.QueryModuleVersionsRequest>): _164.QueryModuleVersionsRequest;
                fromAmino(object: _164.QueryModuleVersionsRequestAmino): _164.QueryModuleVersionsRequest;
                toAmino(message: _164.QueryModuleVersionsRequest): _164.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _164.QueryModuleVersionsRequestAminoMsg): _164.QueryModuleVersionsRequest;
                toAminoMsg(message: _164.QueryModuleVersionsRequest): _164.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _164.QueryModuleVersionsRequestProtoMsg): _164.QueryModuleVersionsRequest;
                toProto(message: _164.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _164.QueryModuleVersionsRequest): _164.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _164.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_164.QueryModuleVersionsResponse>): _164.QueryModuleVersionsResponse;
                fromAmino(object: _164.QueryModuleVersionsResponseAmino): _164.QueryModuleVersionsResponse;
                toAmino(message: _164.QueryModuleVersionsResponse): _164.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _164.QueryModuleVersionsResponseAminoMsg): _164.QueryModuleVersionsResponse;
                toAminoMsg(message: _164.QueryModuleVersionsResponse): _164.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _164.QueryModuleVersionsResponseProtoMsg): _164.QueryModuleVersionsResponse;
                toProto(message: _164.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _164.QueryModuleVersionsResponse): _164.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _164.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.QueryAuthorityRequest;
                fromPartial(_: Partial<_164.QueryAuthorityRequest>): _164.QueryAuthorityRequest;
                fromAmino(_: _164.QueryAuthorityRequestAmino): _164.QueryAuthorityRequest;
                toAmino(_: _164.QueryAuthorityRequest): _164.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _164.QueryAuthorityRequestAminoMsg): _164.QueryAuthorityRequest;
                toAminoMsg(message: _164.QueryAuthorityRequest): _164.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _164.QueryAuthorityRequestProtoMsg): _164.QueryAuthorityRequest;
                toProto(message: _164.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _164.QueryAuthorityRequest): _164.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _164.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryAuthorityResponse;
                fromPartial(object: Partial<_164.QueryAuthorityResponse>): _164.QueryAuthorityResponse;
                fromAmino(object: _164.QueryAuthorityResponseAmino): _164.QueryAuthorityResponse;
                toAmino(message: _164.QueryAuthorityResponse): _164.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _164.QueryAuthorityResponseAminoMsg): _164.QueryAuthorityResponse;
                toAminoMsg(message: _164.QueryAuthorityResponse): _164.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _164.QueryAuthorityResponseProtoMsg): _164.QueryAuthorityResponse;
                toProto(message: _164.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _164.QueryAuthorityResponse): _164.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
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
            MsgClientImpl: typeof _305.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _168.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _168.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _168.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _168.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _168.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _168.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _168.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _168.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _168.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _168.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _168.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _168.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _168.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _168.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _168.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _168.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _168.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _168.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _168.MsgCreateVestingAccount) => _168.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _168.MsgCreateVestingAccountAmino) => _168.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _168.MsgCreatePermanentLockedAccount) => _168.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _168.MsgCreatePermanentLockedAccountAmino) => _168.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _168.MsgCreatePeriodicVestingAccount) => _168.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _168.MsgCreatePeriodicVestingAccountAmino) => _168.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _169.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.BaseVestingAccount;
                fromPartial(object: Partial<_169.BaseVestingAccount>): _169.BaseVestingAccount;
                fromAmino(object: _169.BaseVestingAccountAmino): _169.BaseVestingAccount;
                toAmino(message: _169.BaseVestingAccount): _169.BaseVestingAccountAmino;
                fromAminoMsg(object: _169.BaseVestingAccountAminoMsg): _169.BaseVestingAccount;
                toAminoMsg(message: _169.BaseVestingAccount): _169.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _169.BaseVestingAccountProtoMsg): _169.BaseVestingAccount;
                toProto(message: _169.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _169.BaseVestingAccount): _169.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _169.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.ContinuousVestingAccount;
                fromPartial(object: Partial<_169.ContinuousVestingAccount>): _169.ContinuousVestingAccount;
                fromAmino(object: _169.ContinuousVestingAccountAmino): _169.ContinuousVestingAccount;
                toAmino(message: _169.ContinuousVestingAccount): _169.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _169.ContinuousVestingAccountAminoMsg): _169.ContinuousVestingAccount;
                toAminoMsg(message: _169.ContinuousVestingAccount): _169.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _169.ContinuousVestingAccountProtoMsg): _169.ContinuousVestingAccount;
                toProto(message: _169.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _169.ContinuousVestingAccount): _169.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _169.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.DelayedVestingAccount;
                fromPartial(object: Partial<_169.DelayedVestingAccount>): _169.DelayedVestingAccount;
                fromAmino(object: _169.DelayedVestingAccountAmino): _169.DelayedVestingAccount;
                toAmino(message: _169.DelayedVestingAccount): _169.DelayedVestingAccountAmino;
                fromAminoMsg(object: _169.DelayedVestingAccountAminoMsg): _169.DelayedVestingAccount;
                toAminoMsg(message: _169.DelayedVestingAccount): _169.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _169.DelayedVestingAccountProtoMsg): _169.DelayedVestingAccount;
                toProto(message: _169.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _169.DelayedVestingAccount): _169.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _169.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.Period;
                fromPartial(object: Partial<_169.Period>): _169.Period;
                fromAmino(object: _169.PeriodAmino): _169.Period;
                toAmino(message: _169.Period): _169.PeriodAmino;
                fromAminoMsg(object: _169.PeriodAminoMsg): _169.Period;
                toAminoMsg(message: _169.Period): _169.PeriodAminoMsg;
                fromProtoMsg(message: _169.PeriodProtoMsg): _169.Period;
                toProto(message: _169.Period): Uint8Array;
                toProtoMsg(message: _169.Period): _169.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _169.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.PeriodicVestingAccount;
                fromPartial(object: Partial<_169.PeriodicVestingAccount>): _169.PeriodicVestingAccount;
                fromAmino(object: _169.PeriodicVestingAccountAmino): _169.PeriodicVestingAccount;
                toAmino(message: _169.PeriodicVestingAccount): _169.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _169.PeriodicVestingAccountAminoMsg): _169.PeriodicVestingAccount;
                toAminoMsg(message: _169.PeriodicVestingAccount): _169.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _169.PeriodicVestingAccountProtoMsg): _169.PeriodicVestingAccount;
                toProto(message: _169.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _169.PeriodicVestingAccount): _169.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _169.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.PermanentLockedAccount;
                fromPartial(object: Partial<_169.PermanentLockedAccount>): _169.PermanentLockedAccount;
                fromAmino(object: _169.PermanentLockedAccountAmino): _169.PermanentLockedAccount;
                toAmino(message: _169.PermanentLockedAccount): _169.PermanentLockedAccountAmino;
                fromAminoMsg(object: _169.PermanentLockedAccountAminoMsg): _169.PermanentLockedAccount;
                toAminoMsg(message: _169.PermanentLockedAccount): _169.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _169.PermanentLockedAccountProtoMsg): _169.PermanentLockedAccount;
                toProto(message: _169.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _169.PermanentLockedAccount): _169.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _168.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.MsgCreateVestingAccount;
                fromPartial(object: Partial<_168.MsgCreateVestingAccount>): _168.MsgCreateVestingAccount;
                fromAmino(object: _168.MsgCreateVestingAccountAmino): _168.MsgCreateVestingAccount;
                toAmino(message: _168.MsgCreateVestingAccount): _168.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _168.MsgCreateVestingAccountAminoMsg): _168.MsgCreateVestingAccount;
                toAminoMsg(message: _168.MsgCreateVestingAccount): _168.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _168.MsgCreateVestingAccountProtoMsg): _168.MsgCreateVestingAccount;
                toProto(message: _168.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _168.MsgCreateVestingAccount): _168.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _168.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _168.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_168.MsgCreateVestingAccountResponse>): _168.MsgCreateVestingAccountResponse;
                fromAmino(_: _168.MsgCreateVestingAccountResponseAmino): _168.MsgCreateVestingAccountResponse;
                toAmino(_: _168.MsgCreateVestingAccountResponse): _168.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _168.MsgCreateVestingAccountResponseAminoMsg): _168.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _168.MsgCreateVestingAccountResponse): _168.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _168.MsgCreateVestingAccountResponseProtoMsg): _168.MsgCreateVestingAccountResponse;
                toProto(message: _168.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _168.MsgCreateVestingAccountResponse): _168.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _168.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_168.MsgCreatePermanentLockedAccount>): _168.MsgCreatePermanentLockedAccount;
                fromAmino(object: _168.MsgCreatePermanentLockedAccountAmino): _168.MsgCreatePermanentLockedAccount;
                toAmino(message: _168.MsgCreatePermanentLockedAccount): _168.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _168.MsgCreatePermanentLockedAccountAminoMsg): _168.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _168.MsgCreatePermanentLockedAccount): _168.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _168.MsgCreatePermanentLockedAccountProtoMsg): _168.MsgCreatePermanentLockedAccount;
                toProto(message: _168.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _168.MsgCreatePermanentLockedAccount): _168.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _168.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _168.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_168.MsgCreatePermanentLockedAccountResponse>): _168.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _168.MsgCreatePermanentLockedAccountResponseAmino): _168.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _168.MsgCreatePermanentLockedAccountResponse): _168.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _168.MsgCreatePermanentLockedAccountResponseAminoMsg): _168.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _168.MsgCreatePermanentLockedAccountResponse): _168.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _168.MsgCreatePermanentLockedAccountResponseProtoMsg): _168.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _168.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _168.MsgCreatePermanentLockedAccountResponse): _168.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _168.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_168.MsgCreatePeriodicVestingAccount>): _168.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _168.MsgCreatePeriodicVestingAccountAmino): _168.MsgCreatePeriodicVestingAccount;
                toAmino(message: _168.MsgCreatePeriodicVestingAccount): _168.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _168.MsgCreatePeriodicVestingAccountAminoMsg): _168.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _168.MsgCreatePeriodicVestingAccount): _168.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _168.MsgCreatePeriodicVestingAccountProtoMsg): _168.MsgCreatePeriodicVestingAccount;
                toProto(message: _168.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _168.MsgCreatePeriodicVestingAccount): _168.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _168.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _168.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_168.MsgCreatePeriodicVestingAccountResponse>): _168.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _168.MsgCreatePeriodicVestingAccountResponseAmino): _168.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _168.MsgCreatePeriodicVestingAccountResponse): _168.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _168.MsgCreatePeriodicVestingAccountResponseAminoMsg): _168.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _168.MsgCreatePeriodicVestingAccountResponse): _168.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _168.MsgCreatePeriodicVestingAccountResponseProtoMsg): _168.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _168.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _168.MsgCreatePeriodicVestingAccountResponse): _168.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _289.MsgClientImpl;
                };
                authz: {
                    v1beta1: _290.MsgClientImpl;
                };
                bank: {
                    v1beta1: _291.MsgClientImpl;
                };
                consensus: {
                    v1: _292.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _293.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _294.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _295.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _296.MsgClientImpl;
                };
                gov: {
                    v1: _297.MsgClientImpl;
                    v1beta1: _298.MsgClientImpl;
                };
                group: {
                    v1: _299.MsgClientImpl;
                };
                mint: {
                    v1beta1: _300.MsgClientImpl;
                };
                nft: {
                    v1beta1: _301.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _302.MsgClientImpl;
                };
                staking: {
                    v1beta1: _303.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _304.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _305.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _48.QueryConfigRequest): Promise<_48.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _52.QueryAccountsRequest): Promise<_52.QueryAccountsResponse>;
                        account(request: _52.QueryAccountRequest): Promise<_52.QueryAccountResponse>;
                        accountAddressByID(request: _52.QueryAccountAddressByIDRequest): Promise<_52.QueryAccountAddressByIDResponse>;
                        params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        moduleAccounts(request?: _52.QueryModuleAccountsRequest): Promise<_52.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _52.QueryModuleAccountByNameRequest): Promise<_52.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _52.Bech32PrefixRequest): Promise<_52.Bech32PrefixResponse>;
                        addressBytesToString(request: _52.AddressBytesToStringRequest): Promise<_52.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _52.AddressStringToBytesRequest): Promise<_52.AddressStringToBytesResponse>;
                        accountInfo(request: _52.QueryAccountInfoRequest): Promise<_52.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _58.QueryGrantsRequest): Promise<_58.QueryGrantsResponse>;
                        granterGrants(request: _58.QueryGranterGrantsRequest): Promise<_58.QueryGranterGrantsResponse>;
                        granteeGrants(request: _58.QueryGranteeGrantsRequest): Promise<_58.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _61.AppOptionsRequest): Promise<_61.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _66.QueryBalanceRequest): Promise<_66.QueryBalanceResponse>;
                        allBalances(request: _66.QueryAllBalancesRequest): Promise<_66.QueryAllBalancesResponse>;
                        spendableBalances(request: _66.QuerySpendableBalancesRequest): Promise<_66.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _66.QuerySpendableBalanceByDenomRequest): Promise<_66.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _66.QueryTotalSupplyRequest): Promise<_66.QueryTotalSupplyResponse>;
                        supplyOf(request: _66.QuerySupplyOfRequest): Promise<_66.QuerySupplyOfResponse>;
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        denomMetadata(request: _66.QueryDenomMetadataRequest): Promise<_66.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _66.QueryDenomsMetadataRequest): Promise<_66.QueryDenomsMetadataResponse>;
                        denomOwners(request: _66.QueryDenomOwnersRequest): Promise<_66.QueryDenomOwnersResponse>;
                        sendEnabled(request: _66.QuerySendEnabledRequest): Promise<_66.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _70.ConfigRequest): Promise<_70.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _77.GetNodeInfoRequest): Promise<_77.GetNodeInfoResponse>;
                            getSyncing(request?: _77.GetSyncingRequest): Promise<_77.GetSyncingResponse>;
                            getLatestBlock(request?: _77.GetLatestBlockRequest): Promise<_77.GetLatestBlockResponse>;
                            getBlockByHeight(request: _77.GetBlockByHeightRequest): Promise<_77.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _77.GetLatestValidatorSetRequest): Promise<_77.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _77.GetValidatorSetByHeightRequest): Promise<_77.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _77.ABCIQueryRequest): Promise<_77.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                        validatorDistributionInfo(request: _98.QueryValidatorDistributionInfoRequest): Promise<_98.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _98.QueryValidatorOutstandingRewardsRequest): Promise<_98.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _98.QueryValidatorCommissionRequest): Promise<_98.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _98.QueryValidatorSlashesRequest): Promise<_98.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _98.QueryDelegationRewardsRequest): Promise<_98.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _98.QueryDelegationTotalRewardsRequest): Promise<_98.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _98.QueryDelegatorValidatorsRequest): Promise<_98.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _98.QueryDelegatorWithdrawAddressRequest): Promise<_98.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _98.QueryCommunityPoolRequest): Promise<_98.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _103.QueryEvidenceRequest): Promise<_103.QueryEvidenceResponse>;
                        allEvidence(request?: _103.QueryAllEvidenceRequest): Promise<_103.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _108.QueryAllowanceRequest): Promise<_108.QueryAllowanceResponse>;
                        allowances(request: _108.QueryAllowancesRequest): Promise<_108.QueryAllowancesResponse>;
                        allowancesByGranter(request: _108.QueryAllowancesByGranterRequest): Promise<_108.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _115.QueryProposalRequest): Promise<_115.QueryProposalResponse>;
                        proposals(request: _115.QueryProposalsRequest): Promise<_115.QueryProposalsResponse>;
                        vote(request: _115.QueryVoteRequest): Promise<_115.QueryVoteResponse>;
                        votes(request: _115.QueryVotesRequest): Promise<_115.QueryVotesResponse>;
                        params(request: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                        deposit(request: _115.QueryDepositRequest): Promise<_115.QueryDepositResponse>;
                        deposits(request: _115.QueryDepositsRequest): Promise<_115.QueryDepositsResponse>;
                        tallyResult(request: _115.QueryTallyResultRequest): Promise<_115.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _119.QueryProposalRequest): Promise<_119.QueryProposalResponse>;
                        proposals(request: _119.QueryProposalsRequest): Promise<_119.QueryProposalsResponse>;
                        vote(request: _119.QueryVoteRequest): Promise<_119.QueryVoteResponse>;
                        votes(request: _119.QueryVotesRequest): Promise<_119.QueryVotesResponse>;
                        params(request: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                        deposit(request: _119.QueryDepositRequest): Promise<_119.QueryDepositResponse>;
                        deposits(request: _119.QueryDepositsRequest): Promise<_119.QueryDepositsResponse>;
                        tallyResult(request: _119.QueryTallyResultRequest): Promise<_119.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _124.QueryGroupInfoRequest): Promise<_124.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _124.QueryGroupPolicyInfoRequest): Promise<_124.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _124.QueryGroupMembersRequest): Promise<_124.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _124.QueryGroupsByAdminRequest): Promise<_124.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _124.QueryGroupPoliciesByGroupRequest): Promise<_124.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _124.QueryGroupPoliciesByAdminRequest): Promise<_124.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _124.QueryProposalRequest): Promise<_124.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _124.QueryProposalsByGroupPolicyRequest): Promise<_124.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _124.QueryVoteByProposalVoterRequest): Promise<_124.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _124.QueryVotesByProposalRequest): Promise<_124.QueryVotesByProposalResponse>;
                        votesByVoter(request: _124.QueryVotesByVoterRequest): Promise<_124.QueryVotesByVoterResponse>;
                        groupsByMember(request: _124.QueryGroupsByMemberRequest): Promise<_124.QueryGroupsByMemberResponse>;
                        tallyResult(request: _124.QueryTallyResultRequest): Promise<_124.QueryTallyResultResponse>;
                        groups(request?: _124.QueryGroupsRequest): Promise<_124.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
                        inflation(request?: _130.QueryInflationRequest): Promise<_130.QueryInflationResponse>;
                        annualProvisions(request?: _130.QueryAnnualProvisionsRequest): Promise<_130.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _137.QueryBalanceRequest): Promise<_137.QueryBalanceResponse>;
                        owner(request: _137.QueryOwnerRequest): Promise<_137.QueryOwnerResponse>;
                        supply(request: _137.QuerySupplyRequest): Promise<_137.QuerySupplyResponse>;
                        nFTs(request: _137.QueryNFTsRequest): Promise<_137.QueryNFTsResponse>;
                        nFT(request: _137.QueryNFTRequest): Promise<_137.QueryNFTResponse>;
                        class(request: _137.QueryClassRequest): Promise<_137.QueryClassResponse>;
                        classes(request?: _137.QueryClassesRequest): Promise<_137.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _140.GetRequest): Promise<_140.GetResponse>;
                            list(request: _140.ListRequest): Promise<_140.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _145.QueryParamsRequest): Promise<_145.QueryParamsResponse>;
                        subspaces(request?: _145.QuerySubspacesRequest): Promise<_145.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
                        signingInfo(request: _150.QuerySigningInfoRequest): Promise<_150.QuerySigningInfoResponse>;
                        signingInfos(request?: _150.QuerySigningInfosRequest): Promise<_150.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _156.QueryValidatorsRequest): Promise<_156.QueryValidatorsResponse>;
                        validator(request: _156.QueryValidatorRequest): Promise<_156.QueryValidatorResponse>;
                        validatorDelegations(request: _156.QueryValidatorDelegationsRequest): Promise<_156.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _156.QueryValidatorUnbondingDelegationsRequest): Promise<_156.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _156.QueryDelegationRequest): Promise<_156.QueryDelegationResponse>;
                        unbondingDelegation(request: _156.QueryUnbondingDelegationRequest): Promise<_156.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _156.QueryDelegatorDelegationsRequest): Promise<_156.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _156.QueryDelegatorUnbondingDelegationsRequest): Promise<_156.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _156.QueryRedelegationsRequest): Promise<_156.QueryRedelegationsResponse>;
                        delegatorValidators(request: _156.QueryDelegatorValidatorsRequest): Promise<_156.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _156.QueryDelegatorValidatorRequest): Promise<_156.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _156.QueryHistoricalInfoRequest): Promise<_156.QueryHistoricalInfoResponse>;
                        pool(request?: _156.QueryPoolRequest): Promise<_156.QueryPoolResponse>;
                        params(request?: _156.QueryParamsRequest): Promise<_156.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _161.SimulateRequest): Promise<_161.SimulateResponse>;
                        getTx(request: _161.GetTxRequest): Promise<_161.GetTxResponse>;
                        broadcastTx(request: _161.BroadcastTxRequest): Promise<_161.BroadcastTxResponse>;
                        getTxsEvent(request: _161.GetTxsEventRequest): Promise<_161.GetTxsEventResponse>;
                        getBlockWithTxs(request: _161.GetBlockWithTxsRequest): Promise<_161.GetBlockWithTxsResponse>;
                        txDecode(request: _161.TxDecodeRequest): Promise<_161.TxDecodeResponse>;
                        txEncode(request: _161.TxEncodeRequest): Promise<_161.TxEncodeResponse>;
                        txEncodeAmino(request: _161.TxEncodeAminoRequest): Promise<_161.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _161.TxDecodeAminoRequest): Promise<_161.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _164.QueryCurrentPlanRequest): Promise<_164.QueryCurrentPlanResponse>;
                        appliedPlan(request: _164.QueryAppliedPlanRequest): Promise<_164.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _164.QueryUpgradedConsensusStateRequest): Promise<_164.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _164.QueryModuleVersionsRequest): Promise<_164.QueryModuleVersionsResponse>;
                        authority(request?: _164.QueryAuthorityRequest): Promise<_164.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _248.LCDQueryClient;
                };
                authz: {
                    v1beta1: _249.LCDQueryClient;
                };
                bank: {
                    v1beta1: _250.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _251.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _252.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _253.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _254.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _255.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _256.LCDQueryClient;
                };
                gov: {
                    v1: _257.LCDQueryClient;
                    v1beta1: _258.LCDQueryClient;
                };
                group: {
                    v1: _259.LCDQueryClient;
                };
                mint: {
                    v1beta1: _260.LCDQueryClient;
                };
                nft: {
                    v1beta1: _261.LCDQueryClient;
                };
                params: {
                    v1beta1: _262.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _263.LCDQueryClient;
                };
                staking: {
                    v1beta1: _264.LCDQueryClient;
                };
                tx: {
                    v1beta1: _265.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _266.LCDQueryClient;
                };
            };
        }>;
    };
}
