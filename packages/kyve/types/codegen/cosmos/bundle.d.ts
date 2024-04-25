import * as _49 from "./app/runtime/v1alpha1/module";
import * as _50 from "./app/v1alpha1/config";
import * as _51 from "./app/v1alpha1/module";
import * as _52 from "./app/v1alpha1/query";
import * as _53 from "./auth/module/v1/module";
import * as _54 from "./auth/v1beta1/auth";
import * as _55 from "./auth/v1beta1/genesis";
import * as _56 from "./auth/v1beta1/query";
import * as _57 from "./auth/v1beta1/tx";
import * as _58 from "./authz/module/v1/module";
import * as _59 from "./authz/v1beta1/authz";
import * as _60 from "./authz/v1beta1/event";
import * as _61 from "./authz/v1beta1/genesis";
import * as _62 from "./authz/v1beta1/query";
import * as _63 from "./authz/v1beta1/tx";
import * as _64 from "./autocli/v1/options";
import * as _65 from "./autocli/v1/query";
import * as _66 from "./bank/module/v1/module";
import * as _67 from "./bank/v1beta1/authz";
import * as _68 from "./bank/v1beta1/bank";
import * as _69 from "./bank/v1beta1/genesis";
import * as _70 from "./bank/v1beta1/query";
import * as _71 from "./bank/v1beta1/tx";
import * as _72 from "./base/abci/v1beta1/abci";
import * as _73 from "./base/kv/v1beta1/kv";
import * as _74 from "./base/node/v1beta1/query";
import * as _75 from "./base/query/v1beta1/pagination";
import * as _76 from "./base/reflection/v1beta1/reflection";
import * as _77 from "./base/reflection/v2alpha1/reflection";
import * as _78 from "./base/snapshots/v1beta1/snapshot";
import * as _79 from "./base/store/v1beta1/commit_info";
import * as _80 from "./base/store/v1beta1/listening";
import * as _81 from "./base/tendermint/v1beta1/query";
import * as _82 from "./base/tendermint/v1beta1/types";
import * as _83 from "./base/v1beta1/coin";
import * as _84 from "./capability/module/v1/module";
import * as _85 from "./capability/v1beta1/capability";
import * as _86 from "./capability/v1beta1/genesis";
import * as _87 from "./consensus/module/v1/module";
import * as _88 from "./consensus/v1/query";
import * as _89 from "./consensus/v1/tx";
import * as _90 from "./crisis/module/v1/module";
import * as _91 from "./crisis/v1beta1/genesis";
import * as _92 from "./crisis/v1beta1/tx";
import * as _93 from "./crypto/ed25519/keys";
import * as _94 from "./crypto/hd/v1/hd";
import * as _95 from "./crypto/keyring/v1/record";
import * as _96 from "./crypto/multisig/keys";
import * as _97 from "./crypto/secp256k1/keys";
import * as _98 from "./crypto/secp256r1/keys";
import * as _99 from "./distribution/module/v1/module";
import * as _100 from "./distribution/v1beta1/distribution";
import * as _101 from "./distribution/v1beta1/genesis";
import * as _102 from "./distribution/v1beta1/query";
import * as _103 from "./distribution/v1beta1/tx";
import * as _104 from "./evidence/module/v1/module";
import * as _105 from "./evidence/v1beta1/evidence";
import * as _106 from "./evidence/v1beta1/genesis";
import * as _107 from "./evidence/v1beta1/query";
import * as _108 from "./evidence/v1beta1/tx";
import * as _109 from "./feegrant/module/v1/module";
import * as _110 from "./feegrant/v1beta1/feegrant";
import * as _111 from "./feegrant/v1beta1/genesis";
import * as _112 from "./feegrant/v1beta1/query";
import * as _113 from "./feegrant/v1beta1/tx";
import * as _114 from "./genutil/module/v1/module";
import * as _115 from "./genutil/v1beta1/genesis";
import * as _116 from "./gov/module/v1/module";
import * as _117 from "./gov/v1/genesis";
import * as _118 from "./gov/v1/gov";
import * as _119 from "./gov/v1/query";
import * as _120 from "./gov/v1/tx";
import * as _121 from "./gov/v1beta1/genesis";
import * as _122 from "./gov/v1beta1/gov";
import * as _123 from "./gov/v1beta1/query";
import * as _124 from "./gov/v1beta1/tx";
import * as _125 from "./group/module/v1/module";
import * as _126 from "./group/v1/events";
import * as _127 from "./group/v1/genesis";
import * as _128 from "./group/v1/query";
import * as _129 from "./group/v1/tx";
import * as _130 from "./group/v1/types";
import * as _131 from "./mint/module/v1/module";
import * as _132 from "./mint/v1beta1/genesis";
import * as _133 from "./mint/v1beta1/mint";
import * as _134 from "./mint/v1beta1/query";
import * as _135 from "./mint/v1beta1/tx";
import * as _137 from "./nft/module/v1/module";
import * as _138 from "./nft/v1beta1/event";
import * as _139 from "./nft/v1beta1/genesis";
import * as _140 from "./nft/v1beta1/nft";
import * as _141 from "./nft/v1beta1/query";
import * as _142 from "./nft/v1beta1/tx";
import * as _143 from "./orm/module/v1alpha1/module";
import * as _144 from "./orm/query/v1alpha1/query";
import * as _145 from "./orm/v1/orm";
import * as _146 from "./orm/v1alpha1/schema";
import * as _147 from "./params/module/v1/module";
import * as _148 from "./params/v1beta1/params";
import * as _149 from "./params/v1beta1/query";
import * as _151 from "./reflection/v1/reflection";
import * as _152 from "./slashing/module/v1/module";
import * as _153 from "./slashing/v1beta1/genesis";
import * as _154 from "./slashing/v1beta1/query";
import * as _155 from "./slashing/v1beta1/slashing";
import * as _156 from "./slashing/v1beta1/tx";
import * as _157 from "./staking/module/v1/module";
import * as _158 from "./staking/v1beta1/authz";
import * as _159 from "./staking/v1beta1/genesis";
import * as _160 from "./staking/v1beta1/query";
import * as _161 from "./staking/v1beta1/staking";
import * as _162 from "./staking/v1beta1/tx";
import * as _163 from "./tx/config/v1/config";
import * as _164 from "./tx/signing/v1beta1/signing";
import * as _165 from "./tx/v1beta1/service";
import * as _166 from "./tx/v1beta1/tx";
import * as _167 from "./upgrade/module/v1/module";
import * as _168 from "./upgrade/v1beta1/query";
import * as _169 from "./upgrade/v1beta1/tx";
import * as _170 from "./upgrade/v1beta1/upgrade";
import * as _171 from "./vesting/module/v1/module";
import * as _172 from "./vesting/v1beta1/tx";
import * as _173 from "./vesting/v1beta1/vesting";
import * as _262 from "./auth/v1beta1/query.lcd";
import * as _263 from "./authz/v1beta1/query.lcd";
import * as _264 from "./bank/v1beta1/query.lcd";
import * as _265 from "./base/node/v1beta1/query.lcd";
import * as _266 from "./base/tendermint/v1beta1/query.lcd";
import * as _267 from "./consensus/v1/query.lcd";
import * as _268 from "./distribution/v1beta1/query.lcd";
import * as _269 from "./evidence/v1beta1/query.lcd";
import * as _270 from "./feegrant/v1beta1/query.lcd";
import * as _271 from "./gov/v1/query.lcd";
import * as _272 from "./gov/v1beta1/query.lcd";
import * as _273 from "./group/v1/query.lcd";
import * as _274 from "./mint/v1beta1/query.lcd";
import * as _275 from "./nft/v1beta1/query.lcd";
import * as _276 from "./params/v1beta1/query.lcd";
import * as _277 from "./slashing/v1beta1/query.lcd";
import * as _278 from "./staking/v1beta1/query.lcd";
import * as _279 from "./tx/v1beta1/service.lcd";
import * as _280 from "./upgrade/v1beta1/query.lcd";
import * as _281 from "./app/v1alpha1/query.rpc.Query";
import * as _282 from "./auth/v1beta1/query.rpc.Query";
import * as _283 from "./authz/v1beta1/query.rpc.Query";
import * as _284 from "./autocli/v1/query.rpc.Query";
import * as _285 from "./bank/v1beta1/query.rpc.Query";
import * as _286 from "./base/node/v1beta1/query.rpc.Service";
import * as _287 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _288 from "./consensus/v1/query.rpc.Query";
import * as _289 from "./distribution/v1beta1/query.rpc.Query";
import * as _290 from "./evidence/v1beta1/query.rpc.Query";
import * as _291 from "./feegrant/v1beta1/query.rpc.Query";
import * as _292 from "./gov/v1/query.rpc.Query";
import * as _293 from "./gov/v1beta1/query.rpc.Query";
import * as _294 from "./group/v1/query.rpc.Query";
import * as _295 from "./mint/v1beta1/query.rpc.Query";
import * as _296 from "./nft/v1beta1/query.rpc.Query";
import * as _297 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _298 from "./params/v1beta1/query.rpc.Query";
import * as _299 from "./slashing/v1beta1/query.rpc.Query";
import * as _300 from "./staking/v1beta1/query.rpc.Query";
import * as _301 from "./tx/v1beta1/service.rpc.Service";
import * as _302 from "./upgrade/v1beta1/query.rpc.Query";
import * as _303 from "./auth/v1beta1/tx.rpc.msg";
import * as _304 from "./authz/v1beta1/tx.rpc.msg";
import * as _305 from "./bank/v1beta1/tx.rpc.msg";
import * as _306 from "./consensus/v1/tx.rpc.msg";
import * as _307 from "./crisis/v1beta1/tx.rpc.msg";
import * as _308 from "./distribution/v1beta1/tx.rpc.msg";
import * as _309 from "./evidence/v1beta1/tx.rpc.msg";
import * as _310 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _311 from "./gov/v1/tx.rpc.msg";
import * as _312 from "./gov/v1beta1/tx.rpc.msg";
import * as _313 from "./group/v1/tx.rpc.msg";
import * as _314 from "./mint/v1beta1/tx.rpc.msg";
import * as _315 from "./nft/v1beta1/tx.rpc.msg";
import * as _316 from "./slashing/v1beta1/tx.rpc.msg";
import * as _317 from "./staking/v1beta1/tx.rpc.msg";
import * as _318 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _319 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
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
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _49.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.StoreKeyConfig;
                    fromPartial(object: Partial<_49.StoreKeyConfig>): _49.StoreKeyConfig;
                    fromAmino(object: _49.StoreKeyConfigAmino): _49.StoreKeyConfig;
                    toAmino(message: _49.StoreKeyConfig): _49.StoreKeyConfigAmino;
                    fromAminoMsg(object: _49.StoreKeyConfigAminoMsg): _49.StoreKeyConfig;
                    toAminoMsg(message: _49.StoreKeyConfig): _49.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _49.StoreKeyConfigProtoMsg): _49.StoreKeyConfig;
                    toProto(message: _49.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _49.StoreKeyConfig): _49.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _52.QueryConfigRequest): Promise<_52.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _52.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryConfigRequest;
                fromPartial(_: Partial<_52.QueryConfigRequest>): _52.QueryConfigRequest;
                fromAmino(_: _52.QueryConfigRequestAmino): _52.QueryConfigRequest;
                toAmino(_: _52.QueryConfigRequest): _52.QueryConfigRequestAmino;
                fromAminoMsg(object: _52.QueryConfigRequestAminoMsg): _52.QueryConfigRequest;
                toAminoMsg(message: _52.QueryConfigRequest): _52.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _52.QueryConfigRequestProtoMsg): _52.QueryConfigRequest;
                toProto(message: _52.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _52.QueryConfigRequest): _52.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _52.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryConfigResponse;
                fromPartial(object: Partial<_52.QueryConfigResponse>): _52.QueryConfigResponse;
                fromAmino(object: _52.QueryConfigResponseAmino): _52.QueryConfigResponse;
                toAmino(message: _52.QueryConfigResponse): _52.QueryConfigResponseAmino;
                fromAminoMsg(object: _52.QueryConfigResponseAminoMsg): _52.QueryConfigResponse;
                toAminoMsg(message: _52.QueryConfigResponse): _52.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _52.QueryConfigResponseProtoMsg): _52.QueryConfigResponse;
                toProto(message: _52.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _52.QueryConfigResponse): _52.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _51.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.ModuleDescriptor;
                fromPartial(object: Partial<_51.ModuleDescriptor>): _51.ModuleDescriptor;
                fromAmino(object: _51.ModuleDescriptorAmino): _51.ModuleDescriptor;
                toAmino(message: _51.ModuleDescriptor): _51.ModuleDescriptorAmino;
                fromAminoMsg(object: _51.ModuleDescriptorAminoMsg): _51.ModuleDescriptor;
                toAminoMsg(message: _51.ModuleDescriptor): _51.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _51.ModuleDescriptorProtoMsg): _51.ModuleDescriptor;
                toProto(message: _51.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _51.ModuleDescriptor): _51.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _51.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PackageReference;
                fromPartial(object: Partial<_51.PackageReference>): _51.PackageReference;
                fromAmino(object: _51.PackageReferenceAmino): _51.PackageReference;
                toAmino(message: _51.PackageReference): _51.PackageReferenceAmino;
                fromAminoMsg(object: _51.PackageReferenceAminoMsg): _51.PackageReference;
                toAminoMsg(message: _51.PackageReference): _51.PackageReferenceAminoMsg;
                fromProtoMsg(message: _51.PackageReferenceProtoMsg): _51.PackageReference;
                toProto(message: _51.PackageReference): Uint8Array;
                toProtoMsg(message: _51.PackageReference): _51.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _51.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.MigrateFromInfo;
                fromPartial(object: Partial<_51.MigrateFromInfo>): _51.MigrateFromInfo;
                fromAmino(object: _51.MigrateFromInfoAmino): _51.MigrateFromInfo;
                toAmino(message: _51.MigrateFromInfo): _51.MigrateFromInfoAmino;
                fromAminoMsg(object: _51.MigrateFromInfoAminoMsg): _51.MigrateFromInfo;
                toAminoMsg(message: _51.MigrateFromInfo): _51.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _51.MigrateFromInfoProtoMsg): _51.MigrateFromInfo;
                toProto(message: _51.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _51.MigrateFromInfo): _51.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _50.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Config;
                fromPartial(object: Partial<_50.Config>): _50.Config;
                fromAmino(object: _50.ConfigAmino): _50.Config;
                toAmino(message: _50.Config): _50.ConfigAmino;
                fromAminoMsg(object: _50.ConfigAminoMsg): _50.Config;
                toAminoMsg(message: _50.Config): _50.ConfigAminoMsg;
                fromProtoMsg(message: _50.ConfigProtoMsg): _50.Config;
                toProto(message: _50.Config): Uint8Array;
                toProtoMsg(message: _50.Config): _50.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _50.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.ModuleConfig;
                fromPartial(object: Partial<_50.ModuleConfig>): _50.ModuleConfig;
                fromAmino(object: _50.ModuleConfigAmino): _50.ModuleConfig;
                toAmino(message: _50.ModuleConfig): _50.ModuleConfigAmino;
                fromAminoMsg(object: _50.ModuleConfigAminoMsg): _50.ModuleConfig;
                toAminoMsg(message: _50.ModuleConfig): _50.ModuleConfigAminoMsg;
                fromProtoMsg(message: _50.ModuleConfigProtoMsg): _50.ModuleConfig;
                toProto(message: _50.ModuleConfig): Uint8Array;
                toProtoMsg(message: _50.ModuleConfig): _50.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _50.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.GolangBinding;
                fromPartial(object: Partial<_50.GolangBinding>): _50.GolangBinding;
                fromAmino(object: _50.GolangBindingAmino): _50.GolangBinding;
                toAmino(message: _50.GolangBinding): _50.GolangBindingAmino;
                fromAminoMsg(object: _50.GolangBindingAminoMsg): _50.GolangBinding;
                toAminoMsg(message: _50.GolangBinding): _50.GolangBindingAminoMsg;
                fromProtoMsg(message: _50.GolangBindingProtoMsg): _50.GolangBinding;
                toProto(message: _50.GolangBinding): Uint8Array;
                toProtoMsg(message: _50.GolangBinding): _50.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _53.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.Module;
                    fromPartial(object: Partial<_53.Module>): _53.Module;
                    fromAmino(object: _53.ModuleAmino): _53.Module;
                    toAmino(message: _53.Module): _53.ModuleAmino;
                    fromAminoMsg(object: _53.ModuleAminoMsg): _53.Module;
                    toAminoMsg(message: _53.Module): _53.ModuleAminoMsg;
                    fromProtoMsg(message: _53.ModuleProtoMsg): _53.Module;
                    toProto(message: _53.Module): Uint8Array;
                    toProtoMsg(message: _53.Module): _53.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _53.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.ModuleAccountPermission;
                    fromPartial(object: Partial<_53.ModuleAccountPermission>): _53.ModuleAccountPermission;
                    fromAmino(object: _53.ModuleAccountPermissionAmino): _53.ModuleAccountPermission;
                    toAmino(message: _53.ModuleAccountPermission): _53.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _53.ModuleAccountPermissionAminoMsg): _53.ModuleAccountPermission;
                    toAminoMsg(message: _53.ModuleAccountPermission): _53.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _53.ModuleAccountPermissionProtoMsg): _53.ModuleAccountPermission;
                    toProto(message: _53.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _53.ModuleAccountPermission): _53.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _303.MsgClientImpl;
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _56.QueryAccountsRequest): Promise<_56.QueryAccountsResponse>;
                account(request: _56.QueryAccountRequest): Promise<_56.QueryAccountResponse>;
                accountAddressByID(request: _56.QueryAccountAddressByIDRequest): Promise<_56.QueryAccountAddressByIDResponse>;
                params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                moduleAccounts(request?: _56.QueryModuleAccountsRequest): Promise<_56.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _56.QueryModuleAccountByNameRequest): Promise<_56.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _56.Bech32PrefixRequest): Promise<_56.Bech32PrefixResponse>;
                addressBytesToString(request: _56.AddressBytesToStringRequest): Promise<_56.AddressBytesToStringResponse>;
                addressStringToBytes(request: _56.AddressStringToBytesRequest): Promise<_56.AddressStringToBytesResponse>;
                accountInfo(request: _56.QueryAccountInfoRequest): Promise<_56.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _57.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _57.MsgUpdateParams): {
                        typeUrl: string;
                        value: _57.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _57.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _57.MsgUpdateParams): {
                        typeUrl: string;
                        value: _57.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _57.MsgUpdateParams) => _57.MsgUpdateParamsAmino;
                    fromAmino: (object: _57.MsgUpdateParamsAmino) => _57.MsgUpdateParams;
                };
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
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _56.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAccountsRequest;
                fromPartial(object: Partial<_56.QueryAccountsRequest>): _56.QueryAccountsRequest;
                fromAmino(object: _56.QueryAccountsRequestAmino): _56.QueryAccountsRequest;
                toAmino(message: _56.QueryAccountsRequest): _56.QueryAccountsRequestAmino;
                fromAminoMsg(object: _56.QueryAccountsRequestAminoMsg): _56.QueryAccountsRequest;
                toAminoMsg(message: _56.QueryAccountsRequest): _56.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAccountsRequestProtoMsg): _56.QueryAccountsRequest;
                toProto(message: _56.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAccountsRequest): _56.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _56.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAccountsResponse;
                fromPartial(object: Partial<_56.QueryAccountsResponse>): _56.QueryAccountsResponse;
                fromAmino(object: _56.QueryAccountsResponseAmino): _56.QueryAccountsResponse;
                toAmino(message: _56.QueryAccountsResponse): _56.QueryAccountsResponseAmino;
                fromAminoMsg(object: _56.QueryAccountsResponseAminoMsg): _56.QueryAccountsResponse;
                toAminoMsg(message: _56.QueryAccountsResponse): _56.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAccountsResponseProtoMsg): _56.QueryAccountsResponse;
                toProto(message: _56.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAccountsResponse): _56.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _56.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAccountRequest;
                fromPartial(object: Partial<_56.QueryAccountRequest>): _56.QueryAccountRequest;
                fromAmino(object: _56.QueryAccountRequestAmino): _56.QueryAccountRequest;
                toAmino(message: _56.QueryAccountRequest): _56.QueryAccountRequestAmino;
                fromAminoMsg(object: _56.QueryAccountRequestAminoMsg): _56.QueryAccountRequest;
                toAminoMsg(message: _56.QueryAccountRequest): _56.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAccountRequestProtoMsg): _56.QueryAccountRequest;
                toProto(message: _56.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAccountRequest): _56.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _56.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAccountResponse;
                fromPartial(object: Partial<_56.QueryAccountResponse>): _56.QueryAccountResponse;
                fromAmino(object: _56.QueryAccountResponseAmino): _56.QueryAccountResponse;
                toAmino(message: _56.QueryAccountResponse): _56.QueryAccountResponseAmino;
                fromAminoMsg(object: _56.QueryAccountResponseAminoMsg): _56.QueryAccountResponse;
                toAminoMsg(message: _56.QueryAccountResponse): _56.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAccountResponseProtoMsg): _56.QueryAccountResponse;
                toProto(message: _56.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAccountResponse): _56.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _56.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.QueryParamsRequest;
                fromPartial(_: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
                fromAmino(_: _56.QueryParamsRequestAmino): _56.QueryParamsRequest;
                toAmino(_: _56.QueryParamsRequest): _56.QueryParamsRequestAmino;
                fromAminoMsg(object: _56.QueryParamsRequestAminoMsg): _56.QueryParamsRequest;
                toAminoMsg(message: _56.QueryParamsRequest): _56.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryParamsRequestProtoMsg): _56.QueryParamsRequest;
                toProto(message: _56.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryParamsRequest): _56.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _56.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryParamsResponse;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
                fromAmino(object: _56.QueryParamsResponseAmino): _56.QueryParamsResponse;
                toAmino(message: _56.QueryParamsResponse): _56.QueryParamsResponseAmino;
                fromAminoMsg(object: _56.QueryParamsResponseAminoMsg): _56.QueryParamsResponse;
                toAminoMsg(message: _56.QueryParamsResponse): _56.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryParamsResponseProtoMsg): _56.QueryParamsResponse;
                toProto(message: _56.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryParamsResponse): _56.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _56.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_56.QueryModuleAccountsRequest>): _56.QueryModuleAccountsRequest;
                fromAmino(_: _56.QueryModuleAccountsRequestAmino): _56.QueryModuleAccountsRequest;
                toAmino(_: _56.QueryModuleAccountsRequest): _56.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _56.QueryModuleAccountsRequestAminoMsg): _56.QueryModuleAccountsRequest;
                toAminoMsg(message: _56.QueryModuleAccountsRequest): _56.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryModuleAccountsRequestProtoMsg): _56.QueryModuleAccountsRequest;
                toProto(message: _56.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryModuleAccountsRequest): _56.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _56.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_56.QueryModuleAccountsResponse>): _56.QueryModuleAccountsResponse;
                fromAmino(object: _56.QueryModuleAccountsResponseAmino): _56.QueryModuleAccountsResponse;
                toAmino(message: _56.QueryModuleAccountsResponse): _56.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _56.QueryModuleAccountsResponseAminoMsg): _56.QueryModuleAccountsResponse;
                toAminoMsg(message: _56.QueryModuleAccountsResponse): _56.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryModuleAccountsResponseProtoMsg): _56.QueryModuleAccountsResponse;
                toProto(message: _56.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryModuleAccountsResponse): _56.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _56.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_56.QueryModuleAccountByNameRequest>): _56.QueryModuleAccountByNameRequest;
                fromAmino(object: _56.QueryModuleAccountByNameRequestAmino): _56.QueryModuleAccountByNameRequest;
                toAmino(message: _56.QueryModuleAccountByNameRequest): _56.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _56.QueryModuleAccountByNameRequestAminoMsg): _56.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _56.QueryModuleAccountByNameRequest): _56.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _56.QueryModuleAccountByNameRequestProtoMsg): _56.QueryModuleAccountByNameRequest;
                toProto(message: _56.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _56.QueryModuleAccountByNameRequest): _56.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _56.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_56.QueryModuleAccountByNameResponse>): _56.QueryModuleAccountByNameResponse;
                fromAmino(object: _56.QueryModuleAccountByNameResponseAmino): _56.QueryModuleAccountByNameResponse;
                toAmino(message: _56.QueryModuleAccountByNameResponse): _56.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _56.QueryModuleAccountByNameResponseAminoMsg): _56.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _56.QueryModuleAccountByNameResponse): _56.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _56.QueryModuleAccountByNameResponseProtoMsg): _56.QueryModuleAccountByNameResponse;
                toProto(message: _56.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _56.QueryModuleAccountByNameResponse): _56.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _56.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.Bech32PrefixRequest;
                fromPartial(_: Partial<_56.Bech32PrefixRequest>): _56.Bech32PrefixRequest;
                fromAmino(_: _56.Bech32PrefixRequestAmino): _56.Bech32PrefixRequest;
                toAmino(_: _56.Bech32PrefixRequest): _56.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _56.Bech32PrefixRequestAminoMsg): _56.Bech32PrefixRequest;
                toAminoMsg(message: _56.Bech32PrefixRequest): _56.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _56.Bech32PrefixRequestProtoMsg): _56.Bech32PrefixRequest;
                toProto(message: _56.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _56.Bech32PrefixRequest): _56.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _56.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Bech32PrefixResponse;
                fromPartial(object: Partial<_56.Bech32PrefixResponse>): _56.Bech32PrefixResponse;
                fromAmino(object: _56.Bech32PrefixResponseAmino): _56.Bech32PrefixResponse;
                toAmino(message: _56.Bech32PrefixResponse): _56.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _56.Bech32PrefixResponseAminoMsg): _56.Bech32PrefixResponse;
                toAminoMsg(message: _56.Bech32PrefixResponse): _56.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _56.Bech32PrefixResponseProtoMsg): _56.Bech32PrefixResponse;
                toProto(message: _56.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _56.Bech32PrefixResponse): _56.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _56.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.AddressBytesToStringRequest;
                fromPartial(object: Partial<_56.AddressBytesToStringRequest>): _56.AddressBytesToStringRequest;
                fromAmino(object: _56.AddressBytesToStringRequestAmino): _56.AddressBytesToStringRequest;
                toAmino(message: _56.AddressBytesToStringRequest): _56.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _56.AddressBytesToStringRequestAminoMsg): _56.AddressBytesToStringRequest;
                toAminoMsg(message: _56.AddressBytesToStringRequest): _56.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _56.AddressBytesToStringRequestProtoMsg): _56.AddressBytesToStringRequest;
                toProto(message: _56.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _56.AddressBytesToStringRequest): _56.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _56.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.AddressBytesToStringResponse;
                fromPartial(object: Partial<_56.AddressBytesToStringResponse>): _56.AddressBytesToStringResponse;
                fromAmino(object: _56.AddressBytesToStringResponseAmino): _56.AddressBytesToStringResponse;
                toAmino(message: _56.AddressBytesToStringResponse): _56.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _56.AddressBytesToStringResponseAminoMsg): _56.AddressBytesToStringResponse;
                toAminoMsg(message: _56.AddressBytesToStringResponse): _56.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _56.AddressBytesToStringResponseProtoMsg): _56.AddressBytesToStringResponse;
                toProto(message: _56.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _56.AddressBytesToStringResponse): _56.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _56.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.AddressStringToBytesRequest;
                fromPartial(object: Partial<_56.AddressStringToBytesRequest>): _56.AddressStringToBytesRequest;
                fromAmino(object: _56.AddressStringToBytesRequestAmino): _56.AddressStringToBytesRequest;
                toAmino(message: _56.AddressStringToBytesRequest): _56.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _56.AddressStringToBytesRequestAminoMsg): _56.AddressStringToBytesRequest;
                toAminoMsg(message: _56.AddressStringToBytesRequest): _56.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _56.AddressStringToBytesRequestProtoMsg): _56.AddressStringToBytesRequest;
                toProto(message: _56.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _56.AddressStringToBytesRequest): _56.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _56.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.AddressStringToBytesResponse;
                fromPartial(object: Partial<_56.AddressStringToBytesResponse>): _56.AddressStringToBytesResponse;
                fromAmino(object: _56.AddressStringToBytesResponseAmino): _56.AddressStringToBytesResponse;
                toAmino(message: _56.AddressStringToBytesResponse): _56.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _56.AddressStringToBytesResponseAminoMsg): _56.AddressStringToBytesResponse;
                toAminoMsg(message: _56.AddressStringToBytesResponse): _56.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _56.AddressStringToBytesResponseProtoMsg): _56.AddressStringToBytesResponse;
                toProto(message: _56.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _56.AddressStringToBytesResponse): _56.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _56.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_56.QueryAccountAddressByIDRequest>): _56.QueryAccountAddressByIDRequest;
                fromAmino(object: _56.QueryAccountAddressByIDRequestAmino): _56.QueryAccountAddressByIDRequest;
                toAmino(message: _56.QueryAccountAddressByIDRequest): _56.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _56.QueryAccountAddressByIDRequestAminoMsg): _56.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _56.QueryAccountAddressByIDRequest): _56.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAccountAddressByIDRequestProtoMsg): _56.QueryAccountAddressByIDRequest;
                toProto(message: _56.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAccountAddressByIDRequest): _56.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _56.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_56.QueryAccountAddressByIDResponse>): _56.QueryAccountAddressByIDResponse;
                fromAmino(object: _56.QueryAccountAddressByIDResponseAmino): _56.QueryAccountAddressByIDResponse;
                toAmino(message: _56.QueryAccountAddressByIDResponse): _56.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _56.QueryAccountAddressByIDResponseAminoMsg): _56.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _56.QueryAccountAddressByIDResponse): _56.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAccountAddressByIDResponseProtoMsg): _56.QueryAccountAddressByIDResponse;
                toProto(message: _56.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAccountAddressByIDResponse): _56.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _56.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAccountInfoRequest;
                fromPartial(object: Partial<_56.QueryAccountInfoRequest>): _56.QueryAccountInfoRequest;
                fromAmino(object: _56.QueryAccountInfoRequestAmino): _56.QueryAccountInfoRequest;
                toAmino(message: _56.QueryAccountInfoRequest): _56.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _56.QueryAccountInfoRequestAminoMsg): _56.QueryAccountInfoRequest;
                toAminoMsg(message: _56.QueryAccountInfoRequest): _56.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAccountInfoRequestProtoMsg): _56.QueryAccountInfoRequest;
                toProto(message: _56.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAccountInfoRequest): _56.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _56.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAccountInfoResponse;
                fromPartial(object: Partial<_56.QueryAccountInfoResponse>): _56.QueryAccountInfoResponse;
                fromAmino(object: _56.QueryAccountInfoResponseAmino): _56.QueryAccountInfoResponse;
                toAmino(message: _56.QueryAccountInfoResponse): _56.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _56.QueryAccountInfoResponseAminoMsg): _56.QueryAccountInfoResponse;
                toAminoMsg(message: _56.QueryAccountInfoResponse): _56.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAccountInfoResponseProtoMsg): _56.QueryAccountInfoResponse;
                toProto(message: _56.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAccountInfoResponse): _56.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _54.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _54.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _55.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
                fromAmino(object: _55.GenesisStateAmino): _55.GenesisState;
                toAmino(message: _55.GenesisState): _55.GenesisStateAmino;
                fromAminoMsg(object: _55.GenesisStateAminoMsg): _55.GenesisState;
                toAminoMsg(message: _55.GenesisState): _55.GenesisStateAminoMsg;
                fromProtoMsg(message: _55.GenesisStateProtoMsg): _55.GenesisState;
                toProto(message: _55.GenesisState): Uint8Array;
                toProtoMsg(message: _55.GenesisState): _55.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _54.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.BaseAccount;
                fromPartial(object: Partial<_54.BaseAccount>): _54.BaseAccount;
                fromAmino(object: _54.BaseAccountAmino): _54.BaseAccount;
                toAmino(message: _54.BaseAccount): _54.BaseAccountAmino;
                fromAminoMsg(object: _54.BaseAccountAminoMsg): _54.BaseAccount;
                toAminoMsg(message: _54.BaseAccount): _54.BaseAccountAminoMsg;
                fromProtoMsg(message: _54.BaseAccountProtoMsg): _54.BaseAccount;
                toProto(message: _54.BaseAccount): Uint8Array;
                toProtoMsg(message: _54.BaseAccount): _54.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _54.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ModuleAccount;
                fromPartial(object: Partial<_54.ModuleAccount>): _54.ModuleAccount;
                fromAmino(object: _54.ModuleAccountAmino): _54.ModuleAccount;
                toAmino(message: _54.ModuleAccount): _54.ModuleAccountAmino;
                fromAminoMsg(object: _54.ModuleAccountAminoMsg): _54.ModuleAccount;
                toAminoMsg(message: _54.ModuleAccount): _54.ModuleAccountAminoMsg;
                fromProtoMsg(message: _54.ModuleAccountProtoMsg): _54.ModuleAccount;
                toProto(message: _54.ModuleAccount): Uint8Array;
                toProtoMsg(message: _54.ModuleAccount): _54.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _54.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ModuleCredential;
                fromPartial(object: Partial<_54.ModuleCredential>): _54.ModuleCredential;
                fromAmino(object: _54.ModuleCredentialAmino): _54.ModuleCredential;
                toAmino(message: _54.ModuleCredential): _54.ModuleCredentialAmino;
                fromAminoMsg(object: _54.ModuleCredentialAminoMsg): _54.ModuleCredential;
                toAminoMsg(message: _54.ModuleCredential): _54.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _54.ModuleCredentialProtoMsg): _54.ModuleCredential;
                toProto(message: _54.ModuleCredential): Uint8Array;
                toProtoMsg(message: _54.ModuleCredential): _54.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _54.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Params;
                fromPartial(object: Partial<_54.Params>): _54.Params;
                fromAmino(object: _54.ParamsAmino): _54.Params;
                toAmino(message: _54.Params): _54.ParamsAmino;
                fromAminoMsg(object: _54.ParamsAminoMsg): _54.Params;
                toAminoMsg(message: _54.Params): _54.ParamsAminoMsg;
                fromProtoMsg(message: _54.ParamsProtoMsg): _54.Params;
                toProto(message: _54.Params): Uint8Array;
                toProtoMsg(message: _54.Params): _54.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _58.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _58.Module;
                    fromPartial(_: Partial<_58.Module>): _58.Module;
                    fromAmino(_: _58.ModuleAmino): _58.Module;
                    toAmino(_: _58.Module): _58.ModuleAmino;
                    fromAminoMsg(object: _58.ModuleAminoMsg): _58.Module;
                    toAminoMsg(message: _58.Module): _58.ModuleAminoMsg;
                    fromProtoMsg(message: _58.ModuleProtoMsg): _58.Module;
                    toProto(message: _58.Module): Uint8Array;
                    toProtoMsg(message: _58.Module): _58.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _304.MsgClientImpl;
            QueryClientImpl: typeof _283.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _62.QueryGrantsRequest): Promise<_62.QueryGrantsResponse>;
                granterGrants(request: _62.QueryGranterGrantsRequest): Promise<_62.QueryGranterGrantsResponse>;
                granteeGrants(request: _62.QueryGranteeGrantsRequest): Promise<_62.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _63.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _63.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _63.MsgGrant): {
                        typeUrl: string;
                        value: _63.MsgGrant;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    revoke(value: _63.MsgRevoke): {
                        typeUrl: string;
                        value: _63.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _63.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _63.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _63.MsgGrant): {
                        typeUrl: string;
                        value: _63.MsgGrant;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    revoke(value: _63.MsgRevoke): {
                        typeUrl: string;
                        value: _63.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _63.MsgGrant) => _63.MsgGrantAmino;
                    fromAmino: (object: _63.MsgGrantAmino) => _63.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _63.MsgExec) => _63.MsgExecAmino;
                    fromAmino: (object: _63.MsgExecAmino) => _63.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _63.MsgRevoke) => _63.MsgRevokeAmino;
                    fromAmino: (object: _63.MsgRevokeAmino) => _63.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _63.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgGrant;
                fromPartial(object: Partial<_63.MsgGrant>): _63.MsgGrant;
                fromAmino(object: _63.MsgGrantAmino): _63.MsgGrant;
                toAmino(message: _63.MsgGrant): _63.MsgGrantAmino;
                fromAminoMsg(object: _63.MsgGrantAminoMsg): _63.MsgGrant;
                toAminoMsg(message: _63.MsgGrant): _63.MsgGrantAminoMsg;
                fromProtoMsg(message: _63.MsgGrantProtoMsg): _63.MsgGrant;
                toProto(message: _63.MsgGrant): Uint8Array;
                toProtoMsg(message: _63.MsgGrant): _63.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _63.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgExecResponse;
                fromPartial(object: Partial<_63.MsgExecResponse>): _63.MsgExecResponse;
                fromAmino(object: _63.MsgExecResponseAmino): _63.MsgExecResponse;
                toAmino(message: _63.MsgExecResponse): _63.MsgExecResponseAmino;
                fromAminoMsg(object: _63.MsgExecResponseAminoMsg): _63.MsgExecResponse;
                toAminoMsg(message: _63.MsgExecResponse): _63.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _63.MsgExecResponseProtoMsg): _63.MsgExecResponse;
                toProto(message: _63.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _63.MsgExecResponse): _63.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _63.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgExec;
                fromPartial(object: Partial<_63.MsgExec>): _63.MsgExec;
                fromAmino(object: _63.MsgExecAmino): _63.MsgExec;
                toAmino(message: _63.MsgExec): _63.MsgExecAmino;
                fromAminoMsg(object: _63.MsgExecAminoMsg): _63.MsgExec;
                toAminoMsg(message: _63.MsgExec): _63.MsgExecAminoMsg;
                fromProtoMsg(message: _63.MsgExecProtoMsg): _63.MsgExec;
                toProto(message: _63.MsgExec): Uint8Array;
                toProtoMsg(message: _63.MsgExec): _63.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _63.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgGrantResponse;
                fromPartial(_: Partial<_63.MsgGrantResponse>): _63.MsgGrantResponse;
                fromAmino(_: _63.MsgGrantResponseAmino): _63.MsgGrantResponse;
                toAmino(_: _63.MsgGrantResponse): _63.MsgGrantResponseAmino;
                fromAminoMsg(object: _63.MsgGrantResponseAminoMsg): _63.MsgGrantResponse;
                toAminoMsg(message: _63.MsgGrantResponse): _63.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _63.MsgGrantResponseProtoMsg): _63.MsgGrantResponse;
                toProto(message: _63.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _63.MsgGrantResponse): _63.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _63.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgRevoke;
                fromPartial(object: Partial<_63.MsgRevoke>): _63.MsgRevoke;
                fromAmino(object: _63.MsgRevokeAmino): _63.MsgRevoke;
                toAmino(message: _63.MsgRevoke): _63.MsgRevokeAmino;
                fromAminoMsg(object: _63.MsgRevokeAminoMsg): _63.MsgRevoke;
                toAminoMsg(message: _63.MsgRevoke): _63.MsgRevokeAminoMsg;
                fromProtoMsg(message: _63.MsgRevokeProtoMsg): _63.MsgRevoke;
                toProto(message: _63.MsgRevoke): Uint8Array;
                toProtoMsg(message: _63.MsgRevoke): _63.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _63.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgRevokeResponse;
                fromPartial(_: Partial<_63.MsgRevokeResponse>): _63.MsgRevokeResponse;
                fromAmino(_: _63.MsgRevokeResponseAmino): _63.MsgRevokeResponse;
                toAmino(_: _63.MsgRevokeResponse): _63.MsgRevokeResponseAmino;
                fromAminoMsg(object: _63.MsgRevokeResponseAminoMsg): _63.MsgRevokeResponse;
                toAminoMsg(message: _63.MsgRevokeResponse): _63.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _63.MsgRevokeResponseProtoMsg): _63.MsgRevokeResponse;
                toProto(message: _63.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _63.MsgRevokeResponse): _63.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _62.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGrantsRequest;
                fromPartial(object: Partial<_62.QueryGrantsRequest>): _62.QueryGrantsRequest;
                fromAmino(object: _62.QueryGrantsRequestAmino): _62.QueryGrantsRequest;
                toAmino(message: _62.QueryGrantsRequest): _62.QueryGrantsRequestAmino;
                fromAminoMsg(object: _62.QueryGrantsRequestAminoMsg): _62.QueryGrantsRequest;
                toAminoMsg(message: _62.QueryGrantsRequest): _62.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGrantsRequestProtoMsg): _62.QueryGrantsRequest;
                toProto(message: _62.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGrantsRequest): _62.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _62.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGrantsResponse;
                fromPartial(object: Partial<_62.QueryGrantsResponse>): _62.QueryGrantsResponse;
                fromAmino(object: _62.QueryGrantsResponseAmino): _62.QueryGrantsResponse;
                toAmino(message: _62.QueryGrantsResponse): _62.QueryGrantsResponseAmino;
                fromAminoMsg(object: _62.QueryGrantsResponseAminoMsg): _62.QueryGrantsResponse;
                toAminoMsg(message: _62.QueryGrantsResponse): _62.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGrantsResponseProtoMsg): _62.QueryGrantsResponse;
                toProto(message: _62.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGrantsResponse): _62.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _62.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_62.QueryGranterGrantsRequest>): _62.QueryGranterGrantsRequest;
                fromAmino(object: _62.QueryGranterGrantsRequestAmino): _62.QueryGranterGrantsRequest;
                toAmino(message: _62.QueryGranterGrantsRequest): _62.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _62.QueryGranterGrantsRequestAminoMsg): _62.QueryGranterGrantsRequest;
                toAminoMsg(message: _62.QueryGranterGrantsRequest): _62.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGranterGrantsRequestProtoMsg): _62.QueryGranterGrantsRequest;
                toProto(message: _62.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGranterGrantsRequest): _62.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _62.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_62.QueryGranterGrantsResponse>): _62.QueryGranterGrantsResponse;
                fromAmino(object: _62.QueryGranterGrantsResponseAmino): _62.QueryGranterGrantsResponse;
                toAmino(message: _62.QueryGranterGrantsResponse): _62.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _62.QueryGranterGrantsResponseAminoMsg): _62.QueryGranterGrantsResponse;
                toAminoMsg(message: _62.QueryGranterGrantsResponse): _62.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGranterGrantsResponseProtoMsg): _62.QueryGranterGrantsResponse;
                toProto(message: _62.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGranterGrantsResponse): _62.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _62.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_62.QueryGranteeGrantsRequest>): _62.QueryGranteeGrantsRequest;
                fromAmino(object: _62.QueryGranteeGrantsRequestAmino): _62.QueryGranteeGrantsRequest;
                toAmino(message: _62.QueryGranteeGrantsRequest): _62.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _62.QueryGranteeGrantsRequestAminoMsg): _62.QueryGranteeGrantsRequest;
                toAminoMsg(message: _62.QueryGranteeGrantsRequest): _62.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGranteeGrantsRequestProtoMsg): _62.QueryGranteeGrantsRequest;
                toProto(message: _62.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGranteeGrantsRequest): _62.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _62.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_62.QueryGranteeGrantsResponse>): _62.QueryGranteeGrantsResponse;
                fromAmino(object: _62.QueryGranteeGrantsResponseAmino): _62.QueryGranteeGrantsResponse;
                toAmino(message: _62.QueryGranteeGrantsResponse): _62.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _62.QueryGranteeGrantsResponseAminoMsg): _62.QueryGranteeGrantsResponse;
                toAminoMsg(message: _62.QueryGranteeGrantsResponse): _62.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGranteeGrantsResponseProtoMsg): _62.QueryGranteeGrantsResponse;
                toProto(message: _62.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGranteeGrantsResponse): _62.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _61.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.GenesisState;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
                fromAmino(object: _61.GenesisStateAmino): _61.GenesisState;
                toAmino(message: _61.GenesisState): _61.GenesisStateAmino;
                fromAminoMsg(object: _61.GenesisStateAminoMsg): _61.GenesisState;
                toAminoMsg(message: _61.GenesisState): _61.GenesisStateAminoMsg;
                fromProtoMsg(message: _61.GenesisStateProtoMsg): _61.GenesisState;
                toProto(message: _61.GenesisState): Uint8Array;
                toProtoMsg(message: _61.GenesisState): _61.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _60.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventGrant;
                fromPartial(object: Partial<_60.EventGrant>): _60.EventGrant;
                fromAmino(object: _60.EventGrantAmino): _60.EventGrant;
                toAmino(message: _60.EventGrant): _60.EventGrantAmino;
                fromAminoMsg(object: _60.EventGrantAminoMsg): _60.EventGrant;
                toAminoMsg(message: _60.EventGrant): _60.EventGrantAminoMsg;
                fromProtoMsg(message: _60.EventGrantProtoMsg): _60.EventGrant;
                toProto(message: _60.EventGrant): Uint8Array;
                toProtoMsg(message: _60.EventGrant): _60.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _60.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventRevoke;
                fromPartial(object: Partial<_60.EventRevoke>): _60.EventRevoke;
                fromAmino(object: _60.EventRevokeAmino): _60.EventRevoke;
                toAmino(message: _60.EventRevoke): _60.EventRevokeAmino;
                fromAminoMsg(object: _60.EventRevokeAminoMsg): _60.EventRevoke;
                toAminoMsg(message: _60.EventRevoke): _60.EventRevokeAminoMsg;
                fromProtoMsg(message: _60.EventRevokeProtoMsg): _60.EventRevoke;
                toProto(message: _60.EventRevoke): Uint8Array;
                toProtoMsg(message: _60.EventRevoke): _60.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _59.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.GenericAuthorization;
                fromPartial(object: Partial<_59.GenericAuthorization>): _59.GenericAuthorization;
                fromAmino(object: _59.GenericAuthorizationAmino): _59.GenericAuthorization;
                toAmino(message: _59.GenericAuthorization): _59.GenericAuthorizationAmino;
                fromAminoMsg(object: _59.GenericAuthorizationAminoMsg): _59.GenericAuthorization;
                toAminoMsg(message: _59.GenericAuthorization): _59.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _59.GenericAuthorizationProtoMsg): _59.GenericAuthorization;
                toProto(message: _59.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _59.GenericAuthorization): _59.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _59.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.Grant;
                fromPartial(object: Partial<_59.Grant>): _59.Grant;
                fromAmino(object: _59.GrantAmino): _59.Grant;
                toAmino(message: _59.Grant): _59.GrantAmino;
                fromAminoMsg(object: _59.GrantAminoMsg): _59.Grant;
                toAminoMsg(message: _59.Grant): _59.GrantAminoMsg;
                fromProtoMsg(message: _59.GrantProtoMsg): _59.Grant;
                toProto(message: _59.Grant): Uint8Array;
                toProtoMsg(message: _59.Grant): _59.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _59.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.GrantAuthorization;
                fromPartial(object: Partial<_59.GrantAuthorization>): _59.GrantAuthorization;
                fromAmino(object: _59.GrantAuthorizationAmino): _59.GrantAuthorization;
                toAmino(message: _59.GrantAuthorization): _59.GrantAuthorizationAmino;
                fromAminoMsg(object: _59.GrantAuthorizationAminoMsg): _59.GrantAuthorization;
                toAminoMsg(message: _59.GrantAuthorization): _59.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _59.GrantAuthorizationProtoMsg): _59.GrantAuthorization;
                toProto(message: _59.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _59.GrantAuthorization): _59.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _59.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.GrantQueueItem;
                fromPartial(object: Partial<_59.GrantQueueItem>): _59.GrantQueueItem;
                fromAmino(object: _59.GrantQueueItemAmino): _59.GrantQueueItem;
                toAmino(message: _59.GrantQueueItem): _59.GrantQueueItemAmino;
                fromAminoMsg(object: _59.GrantQueueItemAminoMsg): _59.GrantQueueItem;
                toAminoMsg(message: _59.GrantQueueItem): _59.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _59.GrantQueueItemProtoMsg): _59.GrantQueueItem;
                toProto(message: _59.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _59.GrantQueueItem): _59.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _67.SendAuthorization | _158.StakeAuthorization | _59.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _65.AppOptionsRequest): Promise<_65.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _65.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.AppOptionsRequest;
                fromPartial(_: Partial<_65.AppOptionsRequest>): _65.AppOptionsRequest;
                fromAmino(_: _65.AppOptionsRequestAmino): _65.AppOptionsRequest;
                toAmino(_: _65.AppOptionsRequest): _65.AppOptionsRequestAmino;
                fromAminoMsg(object: _65.AppOptionsRequestAminoMsg): _65.AppOptionsRequest;
                toAminoMsg(message: _65.AppOptionsRequest): _65.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _65.AppOptionsRequestProtoMsg): _65.AppOptionsRequest;
                toProto(message: _65.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _65.AppOptionsRequest): _65.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _65.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_65.AppOptionsResponse_ModuleOptionsEntry>): _65.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _65.AppOptionsResponse_ModuleOptionsEntryAmino): _65.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _65.AppOptionsResponse_ModuleOptionsEntry): _65.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _65.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _65.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _65.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _65.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _65.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _65.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.AppOptionsResponse;
                fromPartial(object: Partial<_65.AppOptionsResponse>): _65.AppOptionsResponse;
                fromAmino(object: _65.AppOptionsResponseAmino): _65.AppOptionsResponse;
                toAmino(message: _65.AppOptionsResponse): _65.AppOptionsResponseAmino;
                fromAminoMsg(object: _65.AppOptionsResponseAminoMsg): _65.AppOptionsResponse;
                toAminoMsg(message: _65.AppOptionsResponse): _65.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _65.AppOptionsResponseProtoMsg): _65.AppOptionsResponse;
                toProto(message: _65.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _65.AppOptionsResponse): _65.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _64.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ModuleOptions;
                fromPartial(object: Partial<_64.ModuleOptions>): _64.ModuleOptions;
                fromAmino(object: _64.ModuleOptionsAmino): _64.ModuleOptions;
                toAmino(message: _64.ModuleOptions): _64.ModuleOptionsAmino;
                fromAminoMsg(object: _64.ModuleOptionsAminoMsg): _64.ModuleOptions;
                toAminoMsg(message: _64.ModuleOptions): _64.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _64.ModuleOptionsProtoMsg): _64.ModuleOptions;
                toProto(message: _64.ModuleOptions): Uint8Array;
                toProtoMsg(message: _64.ModuleOptions): _64.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _64.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_64.ServiceCommandDescriptor_SubCommandsEntry>): _64.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _64.ServiceCommandDescriptor_SubCommandsEntryAmino): _64.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _64.ServiceCommandDescriptor_SubCommandsEntry): _64.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _64.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _64.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _64.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _64.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _64.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _64.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ServiceCommandDescriptor;
                fromPartial(object: Partial<_64.ServiceCommandDescriptor>): _64.ServiceCommandDescriptor;
                fromAmino(object: _64.ServiceCommandDescriptorAmino): _64.ServiceCommandDescriptor;
                toAmino(message: _64.ServiceCommandDescriptor): _64.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _64.ServiceCommandDescriptorAminoMsg): _64.ServiceCommandDescriptor;
                toAminoMsg(message: _64.ServiceCommandDescriptor): _64.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _64.ServiceCommandDescriptorProtoMsg): _64.ServiceCommandDescriptor;
                toProto(message: _64.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _64.ServiceCommandDescriptor): _64.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _64.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_64.RpcCommandOptions_FlagOptionsEntry>): _64.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _64.RpcCommandOptions_FlagOptionsEntryAmino): _64.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _64.RpcCommandOptions_FlagOptionsEntry): _64.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _64.RpcCommandOptions_FlagOptionsEntryAminoMsg): _64.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _64.RpcCommandOptions_FlagOptionsEntryProtoMsg): _64.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _64.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _64.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.RpcCommandOptions;
                fromPartial(object: Partial<_64.RpcCommandOptions>): _64.RpcCommandOptions;
                fromAmino(object: _64.RpcCommandOptionsAmino): _64.RpcCommandOptions;
                toAmino(message: _64.RpcCommandOptions): _64.RpcCommandOptionsAmino;
                fromAminoMsg(object: _64.RpcCommandOptionsAminoMsg): _64.RpcCommandOptions;
                toAminoMsg(message: _64.RpcCommandOptions): _64.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _64.RpcCommandOptionsProtoMsg): _64.RpcCommandOptions;
                toProto(message: _64.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _64.RpcCommandOptions): _64.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _64.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.FlagOptions;
                fromPartial(object: Partial<_64.FlagOptions>): _64.FlagOptions;
                fromAmino(object: _64.FlagOptionsAmino): _64.FlagOptions;
                toAmino(message: _64.FlagOptions): _64.FlagOptionsAmino;
                fromAminoMsg(object: _64.FlagOptionsAminoMsg): _64.FlagOptions;
                toAminoMsg(message: _64.FlagOptions): _64.FlagOptionsAminoMsg;
                fromProtoMsg(message: _64.FlagOptionsProtoMsg): _64.FlagOptions;
                toProto(message: _64.FlagOptions): Uint8Array;
                toProtoMsg(message: _64.FlagOptions): _64.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _64.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.PositionalArgDescriptor;
                fromPartial(object: Partial<_64.PositionalArgDescriptor>): _64.PositionalArgDescriptor;
                fromAmino(object: _64.PositionalArgDescriptorAmino): _64.PositionalArgDescriptor;
                toAmino(message: _64.PositionalArgDescriptor): _64.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _64.PositionalArgDescriptorAminoMsg): _64.PositionalArgDescriptor;
                toAminoMsg(message: _64.PositionalArgDescriptor): _64.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _64.PositionalArgDescriptorProtoMsg): _64.PositionalArgDescriptor;
                toProto(message: _64.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _64.PositionalArgDescriptor): _64.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
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
            MsgClientImpl: typeof _305.MsgClientImpl;
            QueryClientImpl: typeof _285.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _70.QueryBalanceRequest): Promise<_70.QueryBalanceResponse>;
                allBalances(request: _70.QueryAllBalancesRequest): Promise<_70.QueryAllBalancesResponse>;
                spendableBalances(request: _70.QuerySpendableBalancesRequest): Promise<_70.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _70.QuerySpendableBalanceByDenomRequest): Promise<_70.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _70.QueryTotalSupplyRequest): Promise<_70.QueryTotalSupplyResponse>;
                supplyOf(request: _70.QuerySupplyOfRequest): Promise<_70.QuerySupplyOfResponse>;
                params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                denomMetadata(request: _70.QueryDenomMetadataRequest): Promise<_70.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _70.QueryDenomsMetadataRequest): Promise<_70.QueryDenomsMetadataResponse>;
                denomOwners(request: _70.QueryDenomOwnersRequest): Promise<_70.QueryDenomOwnersResponse>;
                sendEnabled(request: _70.QuerySendEnabledRequest): Promise<_70.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _264.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _71.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _71.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _71.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _71.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _71.MsgSend): {
                        typeUrl: string;
                        value: _71.MsgSend;
                    };
                    multiSend(value: _71.MsgMultiSend): {
                        typeUrl: string;
                        value: _71.MsgMultiSend;
                    };
                    updateParams(value: _71.MsgUpdateParams): {
                        typeUrl: string;
                        value: _71.MsgUpdateParams;
                    };
                    setSendEnabled(value: _71.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _71.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _71.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _71.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _71.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _71.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _71.MsgSend): {
                        typeUrl: string;
                        value: _71.MsgSend;
                    };
                    multiSend(value: _71.MsgMultiSend): {
                        typeUrl: string;
                        value: _71.MsgMultiSend;
                    };
                    updateParams(value: _71.MsgUpdateParams): {
                        typeUrl: string;
                        value: _71.MsgUpdateParams;
                    };
                    setSendEnabled(value: _71.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _71.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _71.MsgSend) => _71.MsgSendAmino;
                    fromAmino: (object: _71.MsgSendAmino) => _71.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _71.MsgMultiSend) => _71.MsgMultiSendAmino;
                    fromAmino: (object: _71.MsgMultiSendAmino) => _71.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _71.MsgUpdateParams) => _71.MsgUpdateParamsAmino;
                    fromAmino: (object: _71.MsgUpdateParamsAmino) => _71.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _71.MsgSetSendEnabled) => _71.MsgSetSendEnabledAmino;
                    fromAmino: (object: _71.MsgSetSendEnabledAmino) => _71.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _71.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgSend;
                fromPartial(object: Partial<_71.MsgSend>): _71.MsgSend;
                fromAmino(object: _71.MsgSendAmino): _71.MsgSend;
                toAmino(message: _71.MsgSend): _71.MsgSendAmino;
                fromAminoMsg(object: _71.MsgSendAminoMsg): _71.MsgSend;
                toAminoMsg(message: _71.MsgSend): _71.MsgSendAminoMsg;
                fromProtoMsg(message: _71.MsgSendProtoMsg): _71.MsgSend;
                toProto(message: _71.MsgSend): Uint8Array;
                toProtoMsg(message: _71.MsgSend): _71.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _71.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.MsgSendResponse;
                fromPartial(_: Partial<_71.MsgSendResponse>): _71.MsgSendResponse;
                fromAmino(_: _71.MsgSendResponseAmino): _71.MsgSendResponse;
                toAmino(_: _71.MsgSendResponse): _71.MsgSendResponseAmino;
                fromAminoMsg(object: _71.MsgSendResponseAminoMsg): _71.MsgSendResponse;
                toAminoMsg(message: _71.MsgSendResponse): _71.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _71.MsgSendResponseProtoMsg): _71.MsgSendResponse;
                toProto(message: _71.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _71.MsgSendResponse): _71.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _71.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgMultiSend;
                fromPartial(object: Partial<_71.MsgMultiSend>): _71.MsgMultiSend;
                fromAmino(object: _71.MsgMultiSendAmino): _71.MsgMultiSend;
                toAmino(message: _71.MsgMultiSend): _71.MsgMultiSendAmino;
                fromAminoMsg(object: _71.MsgMultiSendAminoMsg): _71.MsgMultiSend;
                toAminoMsg(message: _71.MsgMultiSend): _71.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _71.MsgMultiSendProtoMsg): _71.MsgMultiSend;
                toProto(message: _71.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _71.MsgMultiSend): _71.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _71.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.MsgMultiSendResponse;
                fromPartial(_: Partial<_71.MsgMultiSendResponse>): _71.MsgMultiSendResponse;
                fromAmino(_: _71.MsgMultiSendResponseAmino): _71.MsgMultiSendResponse;
                toAmino(_: _71.MsgMultiSendResponse): _71.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _71.MsgMultiSendResponseAminoMsg): _71.MsgMultiSendResponse;
                toAminoMsg(message: _71.MsgMultiSendResponse): _71.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _71.MsgMultiSendResponseProtoMsg): _71.MsgMultiSendResponse;
                toProto(message: _71.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _71.MsgMultiSendResponse): _71.MsgMultiSendResponseProtoMsg;
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
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _71.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgSetSendEnabled;
                fromPartial(object: Partial<_71.MsgSetSendEnabled>): _71.MsgSetSendEnabled;
                fromAmino(object: _71.MsgSetSendEnabledAmino): _71.MsgSetSendEnabled;
                toAmino(message: _71.MsgSetSendEnabled): _71.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _71.MsgSetSendEnabledAminoMsg): _71.MsgSetSendEnabled;
                toAminoMsg(message: _71.MsgSetSendEnabled): _71.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _71.MsgSetSendEnabledProtoMsg): _71.MsgSetSendEnabled;
                toProto(message: _71.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _71.MsgSetSendEnabled): _71.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _71.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_71.MsgSetSendEnabledResponse>): _71.MsgSetSendEnabledResponse;
                fromAmino(_: _71.MsgSetSendEnabledResponseAmino): _71.MsgSetSendEnabledResponse;
                toAmino(_: _71.MsgSetSendEnabledResponse): _71.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _71.MsgSetSendEnabledResponseAminoMsg): _71.MsgSetSendEnabledResponse;
                toAminoMsg(message: _71.MsgSetSendEnabledResponse): _71.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _71.MsgSetSendEnabledResponseProtoMsg): _71.MsgSetSendEnabledResponse;
                toProto(message: _71.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _71.MsgSetSendEnabledResponse): _71.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _70.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryBalanceRequest;
                fromPartial(object: Partial<_70.QueryBalanceRequest>): _70.QueryBalanceRequest;
                fromAmino(object: _70.QueryBalanceRequestAmino): _70.QueryBalanceRequest;
                toAmino(message: _70.QueryBalanceRequest): _70.QueryBalanceRequestAmino;
                fromAminoMsg(object: _70.QueryBalanceRequestAminoMsg): _70.QueryBalanceRequest;
                toAminoMsg(message: _70.QueryBalanceRequest): _70.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _70.QueryBalanceRequestProtoMsg): _70.QueryBalanceRequest;
                toProto(message: _70.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _70.QueryBalanceRequest): _70.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _70.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryBalanceResponse;
                fromPartial(object: Partial<_70.QueryBalanceResponse>): _70.QueryBalanceResponse;
                fromAmino(object: _70.QueryBalanceResponseAmino): _70.QueryBalanceResponse;
                toAmino(message: _70.QueryBalanceResponse): _70.QueryBalanceResponseAmino;
                fromAminoMsg(object: _70.QueryBalanceResponseAminoMsg): _70.QueryBalanceResponse;
                toAminoMsg(message: _70.QueryBalanceResponse): _70.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _70.QueryBalanceResponseProtoMsg): _70.QueryBalanceResponse;
                toProto(message: _70.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _70.QueryBalanceResponse): _70.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _70.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllBalancesRequest;
                fromPartial(object: Partial<_70.QueryAllBalancesRequest>): _70.QueryAllBalancesRequest;
                fromAmino(object: _70.QueryAllBalancesRequestAmino): _70.QueryAllBalancesRequest;
                toAmino(message: _70.QueryAllBalancesRequest): _70.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _70.QueryAllBalancesRequestAminoMsg): _70.QueryAllBalancesRequest;
                toAminoMsg(message: _70.QueryAllBalancesRequest): _70.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAllBalancesRequestProtoMsg): _70.QueryAllBalancesRequest;
                toProto(message: _70.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAllBalancesRequest): _70.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _70.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllBalancesResponse;
                fromPartial(object: Partial<_70.QueryAllBalancesResponse>): _70.QueryAllBalancesResponse;
                fromAmino(object: _70.QueryAllBalancesResponseAmino): _70.QueryAllBalancesResponse;
                toAmino(message: _70.QueryAllBalancesResponse): _70.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _70.QueryAllBalancesResponseAminoMsg): _70.QueryAllBalancesResponse;
                toAminoMsg(message: _70.QueryAllBalancesResponse): _70.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAllBalancesResponseProtoMsg): _70.QueryAllBalancesResponse;
                toProto(message: _70.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAllBalancesResponse): _70.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _70.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_70.QuerySpendableBalancesRequest>): _70.QuerySpendableBalancesRequest;
                fromAmino(object: _70.QuerySpendableBalancesRequestAmino): _70.QuerySpendableBalancesRequest;
                toAmino(message: _70.QuerySpendableBalancesRequest): _70.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _70.QuerySpendableBalancesRequestAminoMsg): _70.QuerySpendableBalancesRequest;
                toAminoMsg(message: _70.QuerySpendableBalancesRequest): _70.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _70.QuerySpendableBalancesRequestProtoMsg): _70.QuerySpendableBalancesRequest;
                toProto(message: _70.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _70.QuerySpendableBalancesRequest): _70.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _70.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_70.QuerySpendableBalancesResponse>): _70.QuerySpendableBalancesResponse;
                fromAmino(object: _70.QuerySpendableBalancesResponseAmino): _70.QuerySpendableBalancesResponse;
                toAmino(message: _70.QuerySpendableBalancesResponse): _70.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _70.QuerySpendableBalancesResponseAminoMsg): _70.QuerySpendableBalancesResponse;
                toAminoMsg(message: _70.QuerySpendableBalancesResponse): _70.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _70.QuerySpendableBalancesResponseProtoMsg): _70.QuerySpendableBalancesResponse;
                toProto(message: _70.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _70.QuerySpendableBalancesResponse): _70.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _70.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_70.QuerySpendableBalanceByDenomRequest>): _70.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _70.QuerySpendableBalanceByDenomRequestAmino): _70.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _70.QuerySpendableBalanceByDenomRequest): _70.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _70.QuerySpendableBalanceByDenomRequestAminoMsg): _70.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _70.QuerySpendableBalanceByDenomRequest): _70.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _70.QuerySpendableBalanceByDenomRequestProtoMsg): _70.QuerySpendableBalanceByDenomRequest;
                toProto(message: _70.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _70.QuerySpendableBalanceByDenomRequest): _70.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _70.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_70.QuerySpendableBalanceByDenomResponse>): _70.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _70.QuerySpendableBalanceByDenomResponseAmino): _70.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _70.QuerySpendableBalanceByDenomResponse): _70.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _70.QuerySpendableBalanceByDenomResponseAminoMsg): _70.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _70.QuerySpendableBalanceByDenomResponse): _70.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _70.QuerySpendableBalanceByDenomResponseProtoMsg): _70.QuerySpendableBalanceByDenomResponse;
                toProto(message: _70.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _70.QuerySpendableBalanceByDenomResponse): _70.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _70.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_70.QueryTotalSupplyRequest>): _70.QueryTotalSupplyRequest;
                fromAmino(object: _70.QueryTotalSupplyRequestAmino): _70.QueryTotalSupplyRequest;
                toAmino(message: _70.QueryTotalSupplyRequest): _70.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _70.QueryTotalSupplyRequestAminoMsg): _70.QueryTotalSupplyRequest;
                toAminoMsg(message: _70.QueryTotalSupplyRequest): _70.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _70.QueryTotalSupplyRequestProtoMsg): _70.QueryTotalSupplyRequest;
                toProto(message: _70.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _70.QueryTotalSupplyRequest): _70.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _70.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_70.QueryTotalSupplyResponse>): _70.QueryTotalSupplyResponse;
                fromAmino(object: _70.QueryTotalSupplyResponseAmino): _70.QueryTotalSupplyResponse;
                toAmino(message: _70.QueryTotalSupplyResponse): _70.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _70.QueryTotalSupplyResponseAminoMsg): _70.QueryTotalSupplyResponse;
                toAminoMsg(message: _70.QueryTotalSupplyResponse): _70.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _70.QueryTotalSupplyResponseProtoMsg): _70.QueryTotalSupplyResponse;
                toProto(message: _70.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _70.QueryTotalSupplyResponse): _70.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _70.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySupplyOfRequest;
                fromPartial(object: Partial<_70.QuerySupplyOfRequest>): _70.QuerySupplyOfRequest;
                fromAmino(object: _70.QuerySupplyOfRequestAmino): _70.QuerySupplyOfRequest;
                toAmino(message: _70.QuerySupplyOfRequest): _70.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _70.QuerySupplyOfRequestAminoMsg): _70.QuerySupplyOfRequest;
                toAminoMsg(message: _70.QuerySupplyOfRequest): _70.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _70.QuerySupplyOfRequestProtoMsg): _70.QuerySupplyOfRequest;
                toProto(message: _70.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _70.QuerySupplyOfRequest): _70.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _70.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySupplyOfResponse;
                fromPartial(object: Partial<_70.QuerySupplyOfResponse>): _70.QuerySupplyOfResponse;
                fromAmino(object: _70.QuerySupplyOfResponseAmino): _70.QuerySupplyOfResponse;
                toAmino(message: _70.QuerySupplyOfResponse): _70.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _70.QuerySupplyOfResponseAminoMsg): _70.QuerySupplyOfResponse;
                toAminoMsg(message: _70.QuerySupplyOfResponse): _70.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _70.QuerySupplyOfResponseProtoMsg): _70.QuerySupplyOfResponse;
                toProto(message: _70.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _70.QuerySupplyOfResponse): _70.QuerySupplyOfResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _70.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_70.QueryDenomsMetadataRequest>): _70.QueryDenomsMetadataRequest;
                fromAmino(object: _70.QueryDenomsMetadataRequestAmino): _70.QueryDenomsMetadataRequest;
                toAmino(message: _70.QueryDenomsMetadataRequest): _70.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _70.QueryDenomsMetadataRequestAminoMsg): _70.QueryDenomsMetadataRequest;
                toAminoMsg(message: _70.QueryDenomsMetadataRequest): _70.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _70.QueryDenomsMetadataRequestProtoMsg): _70.QueryDenomsMetadataRequest;
                toProto(message: _70.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _70.QueryDenomsMetadataRequest): _70.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _70.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_70.QueryDenomsMetadataResponse>): _70.QueryDenomsMetadataResponse;
                fromAmino(object: _70.QueryDenomsMetadataResponseAmino): _70.QueryDenomsMetadataResponse;
                toAmino(message: _70.QueryDenomsMetadataResponse): _70.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _70.QueryDenomsMetadataResponseAminoMsg): _70.QueryDenomsMetadataResponse;
                toAminoMsg(message: _70.QueryDenomsMetadataResponse): _70.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _70.QueryDenomsMetadataResponseProtoMsg): _70.QueryDenomsMetadataResponse;
                toProto(message: _70.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _70.QueryDenomsMetadataResponse): _70.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _70.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_70.QueryDenomMetadataRequest>): _70.QueryDenomMetadataRequest;
                fromAmino(object: _70.QueryDenomMetadataRequestAmino): _70.QueryDenomMetadataRequest;
                toAmino(message: _70.QueryDenomMetadataRequest): _70.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _70.QueryDenomMetadataRequestAminoMsg): _70.QueryDenomMetadataRequest;
                toAminoMsg(message: _70.QueryDenomMetadataRequest): _70.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _70.QueryDenomMetadataRequestProtoMsg): _70.QueryDenomMetadataRequest;
                toProto(message: _70.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _70.QueryDenomMetadataRequest): _70.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _70.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_70.QueryDenomMetadataResponse>): _70.QueryDenomMetadataResponse;
                fromAmino(object: _70.QueryDenomMetadataResponseAmino): _70.QueryDenomMetadataResponse;
                toAmino(message: _70.QueryDenomMetadataResponse): _70.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _70.QueryDenomMetadataResponseAminoMsg): _70.QueryDenomMetadataResponse;
                toAminoMsg(message: _70.QueryDenomMetadataResponse): _70.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _70.QueryDenomMetadataResponseProtoMsg): _70.QueryDenomMetadataResponse;
                toProto(message: _70.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _70.QueryDenomMetadataResponse): _70.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _70.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_70.QueryDenomOwnersRequest>): _70.QueryDenomOwnersRequest;
                fromAmino(object: _70.QueryDenomOwnersRequestAmino): _70.QueryDenomOwnersRequest;
                toAmino(message: _70.QueryDenomOwnersRequest): _70.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _70.QueryDenomOwnersRequestAminoMsg): _70.QueryDenomOwnersRequest;
                toAminoMsg(message: _70.QueryDenomOwnersRequest): _70.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _70.QueryDenomOwnersRequestProtoMsg): _70.QueryDenomOwnersRequest;
                toProto(message: _70.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _70.QueryDenomOwnersRequest): _70.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _70.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DenomOwner;
                fromPartial(object: Partial<_70.DenomOwner>): _70.DenomOwner;
                fromAmino(object: _70.DenomOwnerAmino): _70.DenomOwner;
                toAmino(message: _70.DenomOwner): _70.DenomOwnerAmino;
                fromAminoMsg(object: _70.DenomOwnerAminoMsg): _70.DenomOwner;
                toAminoMsg(message: _70.DenomOwner): _70.DenomOwnerAminoMsg;
                fromProtoMsg(message: _70.DenomOwnerProtoMsg): _70.DenomOwner;
                toProto(message: _70.DenomOwner): Uint8Array;
                toProtoMsg(message: _70.DenomOwner): _70.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _70.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_70.QueryDenomOwnersResponse>): _70.QueryDenomOwnersResponse;
                fromAmino(object: _70.QueryDenomOwnersResponseAmino): _70.QueryDenomOwnersResponse;
                toAmino(message: _70.QueryDenomOwnersResponse): _70.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _70.QueryDenomOwnersResponseAminoMsg): _70.QueryDenomOwnersResponse;
                toAminoMsg(message: _70.QueryDenomOwnersResponse): _70.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _70.QueryDenomOwnersResponseProtoMsg): _70.QueryDenomOwnersResponse;
                toProto(message: _70.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _70.QueryDenomOwnersResponse): _70.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _70.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySendEnabledRequest;
                fromPartial(object: Partial<_70.QuerySendEnabledRequest>): _70.QuerySendEnabledRequest;
                fromAmino(object: _70.QuerySendEnabledRequestAmino): _70.QuerySendEnabledRequest;
                toAmino(message: _70.QuerySendEnabledRequest): _70.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _70.QuerySendEnabledRequestAminoMsg): _70.QuerySendEnabledRequest;
                toAminoMsg(message: _70.QuerySendEnabledRequest): _70.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _70.QuerySendEnabledRequestProtoMsg): _70.QuerySendEnabledRequest;
                toProto(message: _70.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _70.QuerySendEnabledRequest): _70.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _70.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySendEnabledResponse;
                fromPartial(object: Partial<_70.QuerySendEnabledResponse>): _70.QuerySendEnabledResponse;
                fromAmino(object: _70.QuerySendEnabledResponseAmino): _70.QuerySendEnabledResponse;
                toAmino(message: _70.QuerySendEnabledResponse): _70.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _70.QuerySendEnabledResponseAminoMsg): _70.QuerySendEnabledResponse;
                toAminoMsg(message: _70.QuerySendEnabledResponse): _70.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _70.QuerySendEnabledResponseProtoMsg): _70.QuerySendEnabledResponse;
                toProto(message: _70.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _70.QuerySendEnabledResponse): _70.QuerySendEnabledResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _69.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Balance;
                fromPartial(object: Partial<_69.Balance>): _69.Balance;
                fromAmino(object: _69.BalanceAmino): _69.Balance;
                toAmino(message: _69.Balance): _69.BalanceAmino;
                fromAminoMsg(object: _69.BalanceAminoMsg): _69.Balance;
                toAminoMsg(message: _69.Balance): _69.BalanceAminoMsg;
                fromProtoMsg(message: _69.BalanceProtoMsg): _69.Balance;
                toProto(message: _69.Balance): Uint8Array;
                toProtoMsg(message: _69.Balance): _69.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _68.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Params;
                fromPartial(object: Partial<_68.Params>): _68.Params;
                fromAmino(object: _68.ParamsAmino): _68.Params;
                toAmino(message: _68.Params): _68.ParamsAmino;
                fromAminoMsg(object: _68.ParamsAminoMsg): _68.Params;
                toAminoMsg(message: _68.Params): _68.ParamsAminoMsg;
                fromProtoMsg(message: _68.ParamsProtoMsg): _68.Params;
                toProto(message: _68.Params): Uint8Array;
                toProtoMsg(message: _68.Params): _68.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _68.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.SendEnabled;
                fromPartial(object: Partial<_68.SendEnabled>): _68.SendEnabled;
                fromAmino(object: _68.SendEnabledAmino): _68.SendEnabled;
                toAmino(message: _68.SendEnabled): _68.SendEnabledAmino;
                fromAminoMsg(object: _68.SendEnabledAminoMsg): _68.SendEnabled;
                toAminoMsg(message: _68.SendEnabled): _68.SendEnabledAminoMsg;
                fromProtoMsg(message: _68.SendEnabledProtoMsg): _68.SendEnabled;
                toProto(message: _68.SendEnabled): Uint8Array;
                toProtoMsg(message: _68.SendEnabled): _68.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _68.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Input;
                fromPartial(object: Partial<_68.Input>): _68.Input;
                fromAmino(object: _68.InputAmino): _68.Input;
                toAmino(message: _68.Input): _68.InputAmino;
                fromAminoMsg(object: _68.InputAminoMsg): _68.Input;
                toAminoMsg(message: _68.Input): _68.InputAminoMsg;
                fromProtoMsg(message: _68.InputProtoMsg): _68.Input;
                toProto(message: _68.Input): Uint8Array;
                toProtoMsg(message: _68.Input): _68.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _68.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Output;
                fromPartial(object: Partial<_68.Output>): _68.Output;
                fromAmino(object: _68.OutputAmino): _68.Output;
                toAmino(message: _68.Output): _68.OutputAmino;
                fromAminoMsg(object: _68.OutputAminoMsg): _68.Output;
                toAminoMsg(message: _68.Output): _68.OutputAminoMsg;
                fromProtoMsg(message: _68.OutputProtoMsg): _68.Output;
                toProto(message: _68.Output): Uint8Array;
                toProtoMsg(message: _68.Output): _68.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _68.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Supply;
                fromPartial(object: Partial<_68.Supply>): _68.Supply;
                fromAmino(object: _68.SupplyAmino): _68.Supply;
                toAmino(message: _68.Supply): _68.SupplyAmino;
                fromAminoMsg(object: _68.SupplyAminoMsg): _68.Supply;
                toAminoMsg(message: _68.Supply): _68.SupplyAminoMsg;
                fromProtoMsg(message: _68.SupplyProtoMsg): _68.Supply;
                toProto(message: _68.Supply): Uint8Array;
                toProtoMsg(message: _68.Supply): _68.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _68.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.DenomUnit;
                fromPartial(object: Partial<_68.DenomUnit>): _68.DenomUnit;
                fromAmino(object: _68.DenomUnitAmino): _68.DenomUnit;
                toAmino(message: _68.DenomUnit): _68.DenomUnitAmino;
                fromAminoMsg(object: _68.DenomUnitAminoMsg): _68.DenomUnit;
                toAminoMsg(message: _68.DenomUnit): _68.DenomUnitAminoMsg;
                fromProtoMsg(message: _68.DenomUnitProtoMsg): _68.DenomUnit;
                toProto(message: _68.DenomUnit): Uint8Array;
                toProtoMsg(message: _68.DenomUnit): _68.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _68.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Metadata;
                fromPartial(object: Partial<_68.Metadata>): _68.Metadata;
                fromAmino(object: _68.MetadataAmino): _68.Metadata;
                toAmino(message: _68.Metadata): _68.MetadataAmino;
                fromAminoMsg(object: _68.MetadataAminoMsg): _68.Metadata;
                toAminoMsg(message: _68.Metadata): _68.MetadataAminoMsg;
                fromProtoMsg(message: _68.MetadataProtoMsg): _68.Metadata;
                toProto(message: _68.Metadata): Uint8Array;
                toProtoMsg(message: _68.Metadata): _68.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _67.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.SendAuthorization;
                fromPartial(object: Partial<_67.SendAuthorization>): _67.SendAuthorization;
                fromAmino(object: _67.SendAuthorizationAmino): _67.SendAuthorization;
                toAmino(message: _67.SendAuthorization): _67.SendAuthorizationAmino;
                fromAminoMsg(object: _67.SendAuthorizationAminoMsg): _67.SendAuthorization;
                toAminoMsg(message: _67.SendAuthorization): _67.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _67.SendAuthorizationProtoMsg): _67.SendAuthorization;
                toProto(message: _67.SendAuthorization): Uint8Array;
                toProtoMsg(message: _67.SendAuthorization): _67.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _72.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.TxResponse;
                    fromPartial(object: Partial<_72.TxResponse>): _72.TxResponse;
                    fromAmino(object: _72.TxResponseAmino): _72.TxResponse;
                    toAmino(message: _72.TxResponse): _72.TxResponseAmino;
                    fromAminoMsg(object: _72.TxResponseAminoMsg): _72.TxResponse;
                    toAminoMsg(message: _72.TxResponse): _72.TxResponseAminoMsg;
                    fromProtoMsg(message: _72.TxResponseProtoMsg): _72.TxResponse;
                    toProto(message: _72.TxResponse): Uint8Array;
                    toProtoMsg(message: _72.TxResponse): _72.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _72.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.ABCIMessageLog;
                    fromPartial(object: Partial<_72.ABCIMessageLog>): _72.ABCIMessageLog;
                    fromAmino(object: _72.ABCIMessageLogAmino): _72.ABCIMessageLog;
                    toAmino(message: _72.ABCIMessageLog): _72.ABCIMessageLogAmino;
                    fromAminoMsg(object: _72.ABCIMessageLogAminoMsg): _72.ABCIMessageLog;
                    toAminoMsg(message: _72.ABCIMessageLog): _72.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _72.ABCIMessageLogProtoMsg): _72.ABCIMessageLog;
                    toProto(message: _72.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _72.ABCIMessageLog): _72.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _72.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.StringEvent;
                    fromPartial(object: Partial<_72.StringEvent>): _72.StringEvent;
                    fromAmino(object: _72.StringEventAmino): _72.StringEvent;
                    toAmino(message: _72.StringEvent): _72.StringEventAmino;
                    fromAminoMsg(object: _72.StringEventAminoMsg): _72.StringEvent;
                    toAminoMsg(message: _72.StringEvent): _72.StringEventAminoMsg;
                    fromProtoMsg(message: _72.StringEventProtoMsg): _72.StringEvent;
                    toProto(message: _72.StringEvent): Uint8Array;
                    toProtoMsg(message: _72.StringEvent): _72.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _72.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.Attribute;
                    fromPartial(object: Partial<_72.Attribute>): _72.Attribute;
                    fromAmino(object: _72.AttributeAmino): _72.Attribute;
                    toAmino(message: _72.Attribute): _72.AttributeAmino;
                    fromAminoMsg(object: _72.AttributeAminoMsg): _72.Attribute;
                    toAminoMsg(message: _72.Attribute): _72.AttributeAminoMsg;
                    fromProtoMsg(message: _72.AttributeProtoMsg): _72.Attribute;
                    toProto(message: _72.Attribute): Uint8Array;
                    toProtoMsg(message: _72.Attribute): _72.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _72.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.GasInfo;
                    fromPartial(object: Partial<_72.GasInfo>): _72.GasInfo;
                    fromAmino(object: _72.GasInfoAmino): _72.GasInfo;
                    toAmino(message: _72.GasInfo): _72.GasInfoAmino;
                    fromAminoMsg(object: _72.GasInfoAminoMsg): _72.GasInfo;
                    toAminoMsg(message: _72.GasInfo): _72.GasInfoAminoMsg;
                    fromProtoMsg(message: _72.GasInfoProtoMsg): _72.GasInfo;
                    toProto(message: _72.GasInfo): Uint8Array;
                    toProtoMsg(message: _72.GasInfo): _72.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _72.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.Result;
                    fromPartial(object: Partial<_72.Result>): _72.Result;
                    fromAmino(object: _72.ResultAmino): _72.Result;
                    toAmino(message: _72.Result): _72.ResultAmino;
                    fromAminoMsg(object: _72.ResultAminoMsg): _72.Result;
                    toAminoMsg(message: _72.Result): _72.ResultAminoMsg;
                    fromProtoMsg(message: _72.ResultProtoMsg): _72.Result;
                    toProto(message: _72.Result): Uint8Array;
                    toProtoMsg(message: _72.Result): _72.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _72.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.SimulationResponse;
                    fromPartial(object: Partial<_72.SimulationResponse>): _72.SimulationResponse;
                    fromAmino(object: _72.SimulationResponseAmino): _72.SimulationResponse;
                    toAmino(message: _72.SimulationResponse): _72.SimulationResponseAmino;
                    fromAminoMsg(object: _72.SimulationResponseAminoMsg): _72.SimulationResponse;
                    toAminoMsg(message: _72.SimulationResponse): _72.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _72.SimulationResponseProtoMsg): _72.SimulationResponse;
                    toProto(message: _72.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _72.SimulationResponse): _72.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _72.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.MsgData;
                    fromPartial(object: Partial<_72.MsgData>): _72.MsgData;
                    fromAmino(object: _72.MsgDataAmino): _72.MsgData;
                    toAmino(message: _72.MsgData): _72.MsgDataAmino;
                    fromAminoMsg(object: _72.MsgDataAminoMsg): _72.MsgData;
                    toAminoMsg(message: _72.MsgData): _72.MsgDataAminoMsg;
                    fromProtoMsg(message: _72.MsgDataProtoMsg): _72.MsgData;
                    toProto(message: _72.MsgData): Uint8Array;
                    toProtoMsg(message: _72.MsgData): _72.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _72.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.TxMsgData;
                    fromPartial(object: Partial<_72.TxMsgData>): _72.TxMsgData;
                    fromAmino(object: _72.TxMsgDataAmino): _72.TxMsgData;
                    toAmino(message: _72.TxMsgData): _72.TxMsgDataAmino;
                    fromAminoMsg(object: _72.TxMsgDataAminoMsg): _72.TxMsgData;
                    toAminoMsg(message: _72.TxMsgData): _72.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _72.TxMsgDataProtoMsg): _72.TxMsgData;
                    toProto(message: _72.TxMsgData): Uint8Array;
                    toProtoMsg(message: _72.TxMsgData): _72.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _72.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.SearchTxsResult;
                    fromPartial(object: Partial<_72.SearchTxsResult>): _72.SearchTxsResult;
                    fromAmino(object: _72.SearchTxsResultAmino): _72.SearchTxsResult;
                    toAmino(message: _72.SearchTxsResult): _72.SearchTxsResultAmino;
                    fromAminoMsg(object: _72.SearchTxsResultAminoMsg): _72.SearchTxsResult;
                    toAminoMsg(message: _72.SearchTxsResult): _72.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _72.SearchTxsResultProtoMsg): _72.SearchTxsResult;
                    toProto(message: _72.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _72.SearchTxsResult): _72.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _73.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.Pairs;
                    fromPartial(object: Partial<_73.Pairs>): _73.Pairs;
                    fromAmino(object: _73.PairsAmino): _73.Pairs;
                    toAmino(message: _73.Pairs): _73.PairsAmino;
                    fromAminoMsg(object: _73.PairsAminoMsg): _73.Pairs;
                    toAminoMsg(message: _73.Pairs): _73.PairsAminoMsg;
                    fromProtoMsg(message: _73.PairsProtoMsg): _73.Pairs;
                    toProto(message: _73.Pairs): Uint8Array;
                    toProtoMsg(message: _73.Pairs): _73.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _73.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.Pair;
                    fromPartial(object: Partial<_73.Pair>): _73.Pair;
                    fromAmino(object: _73.PairAmino): _73.Pair;
                    toAmino(message: _73.Pair): _73.PairAmino;
                    fromAminoMsg(object: _73.PairAminoMsg): _73.Pair;
                    toAminoMsg(message: _73.Pair): _73.PairAminoMsg;
                    fromProtoMsg(message: _73.PairProtoMsg): _73.Pair;
                    toProto(message: _73.Pair): Uint8Array;
                    toProtoMsg(message: _73.Pair): _73.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _286.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _74.ConfigRequest): Promise<_74.ConfigResponse>;
                };
                LCDQueryClient: typeof _265.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _74.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _74.ConfigRequest;
                    fromPartial(_: Partial<_74.ConfigRequest>): _74.ConfigRequest;
                    fromAmino(_: _74.ConfigRequestAmino): _74.ConfigRequest;
                    toAmino(_: _74.ConfigRequest): _74.ConfigRequestAmino;
                    fromAminoMsg(object: _74.ConfigRequestAminoMsg): _74.ConfigRequest;
                    toAminoMsg(message: _74.ConfigRequest): _74.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _74.ConfigRequestProtoMsg): _74.ConfigRequest;
                    toProto(message: _74.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _74.ConfigRequest): _74.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _74.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.ConfigResponse;
                    fromPartial(object: Partial<_74.ConfigResponse>): _74.ConfigResponse;
                    fromAmino(object: _74.ConfigResponseAmino): _74.ConfigResponse;
                    toAmino(message: _74.ConfigResponse): _74.ConfigResponseAmino;
                    fromAminoMsg(object: _74.ConfigResponseAminoMsg): _74.ConfigResponse;
                    toAminoMsg(message: _74.ConfigResponse): _74.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _74.ConfigResponseProtoMsg): _74.ConfigResponse;
                    toProto(message: _74.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _74.ConfigResponse): _74.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _75.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _75.PageRequest;
                    fromPartial(object: Partial<_75.PageRequest>): _75.PageRequest;
                    fromAmino(object: _75.PageRequestAmino): _75.PageRequest;
                    toAmino(message: _75.PageRequest): _75.PageRequestAmino;
                    fromAminoMsg(object: _75.PageRequestAminoMsg): _75.PageRequest;
                    toAminoMsg(message: _75.PageRequest): _75.PageRequestAminoMsg;
                    fromProtoMsg(message: _75.PageRequestProtoMsg): _75.PageRequest;
                    toProto(message: _75.PageRequest): Uint8Array;
                    toProtoMsg(message: _75.PageRequest): _75.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _75.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _75.PageResponse;
                    fromPartial(object: Partial<_75.PageResponse>): _75.PageResponse;
                    fromAmino(object: _75.PageResponseAmino): _75.PageResponse;
                    toAmino(message: _75.PageResponse): _75.PageResponseAmino;
                    fromAminoMsg(object: _75.PageResponseAminoMsg): _75.PageResponse;
                    toAminoMsg(message: _75.PageResponse): _75.PageResponseAminoMsg;
                    fromProtoMsg(message: _75.PageResponseProtoMsg): _75.PageResponse;
                    toProto(message: _75.PageResponse): Uint8Array;
                    toProtoMsg(message: _75.PageResponse): _75.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _76.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _76.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_76.ListAllInterfacesRequest>): _76.ListAllInterfacesRequest;
                    fromAmino(_: _76.ListAllInterfacesRequestAmino): _76.ListAllInterfacesRequest;
                    toAmino(_: _76.ListAllInterfacesRequest): _76.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _76.ListAllInterfacesRequestAminoMsg): _76.ListAllInterfacesRequest;
                    toAminoMsg(message: _76.ListAllInterfacesRequest): _76.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _76.ListAllInterfacesRequestProtoMsg): _76.ListAllInterfacesRequest;
                    toProto(message: _76.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _76.ListAllInterfacesRequest): _76.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _76.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_76.ListAllInterfacesResponse>): _76.ListAllInterfacesResponse;
                    fromAmino(object: _76.ListAllInterfacesResponseAmino): _76.ListAllInterfacesResponse;
                    toAmino(message: _76.ListAllInterfacesResponse): _76.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _76.ListAllInterfacesResponseAminoMsg): _76.ListAllInterfacesResponse;
                    toAminoMsg(message: _76.ListAllInterfacesResponse): _76.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _76.ListAllInterfacesResponseProtoMsg): _76.ListAllInterfacesResponse;
                    toProto(message: _76.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _76.ListAllInterfacesResponse): _76.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _76.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.ListImplementationsRequest;
                    fromPartial(object: Partial<_76.ListImplementationsRequest>): _76.ListImplementationsRequest;
                    fromAmino(object: _76.ListImplementationsRequestAmino): _76.ListImplementationsRequest;
                    toAmino(message: _76.ListImplementationsRequest): _76.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _76.ListImplementationsRequestAminoMsg): _76.ListImplementationsRequest;
                    toAminoMsg(message: _76.ListImplementationsRequest): _76.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _76.ListImplementationsRequestProtoMsg): _76.ListImplementationsRequest;
                    toProto(message: _76.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _76.ListImplementationsRequest): _76.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _76.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.ListImplementationsResponse;
                    fromPartial(object: Partial<_76.ListImplementationsResponse>): _76.ListImplementationsResponse;
                    fromAmino(object: _76.ListImplementationsResponseAmino): _76.ListImplementationsResponse;
                    toAmino(message: _76.ListImplementationsResponse): _76.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _76.ListImplementationsResponseAminoMsg): _76.ListImplementationsResponse;
                    toAminoMsg(message: _76.ListImplementationsResponse): _76.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _76.ListImplementationsResponseProtoMsg): _76.ListImplementationsResponse;
                    toProto(message: _76.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _76.ListImplementationsResponse): _76.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _77.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.AppDescriptor;
                    fromPartial(object: Partial<_77.AppDescriptor>): _77.AppDescriptor;
                    fromAmino(object: _77.AppDescriptorAmino): _77.AppDescriptor;
                    toAmino(message: _77.AppDescriptor): _77.AppDescriptorAmino;
                    fromAminoMsg(object: _77.AppDescriptorAminoMsg): _77.AppDescriptor;
                    toAminoMsg(message: _77.AppDescriptor): _77.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _77.AppDescriptorProtoMsg): _77.AppDescriptor;
                    toProto(message: _77.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _77.AppDescriptor): _77.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _77.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.TxDescriptor;
                    fromPartial(object: Partial<_77.TxDescriptor>): _77.TxDescriptor;
                    fromAmino(object: _77.TxDescriptorAmino): _77.TxDescriptor;
                    toAmino(message: _77.TxDescriptor): _77.TxDescriptorAmino;
                    fromAminoMsg(object: _77.TxDescriptorAminoMsg): _77.TxDescriptor;
                    toAminoMsg(message: _77.TxDescriptor): _77.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _77.TxDescriptorProtoMsg): _77.TxDescriptor;
                    toProto(message: _77.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _77.TxDescriptor): _77.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _77.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.AuthnDescriptor;
                    fromPartial(object: Partial<_77.AuthnDescriptor>): _77.AuthnDescriptor;
                    fromAmino(object: _77.AuthnDescriptorAmino): _77.AuthnDescriptor;
                    toAmino(message: _77.AuthnDescriptor): _77.AuthnDescriptorAmino;
                    fromAminoMsg(object: _77.AuthnDescriptorAminoMsg): _77.AuthnDescriptor;
                    toAminoMsg(message: _77.AuthnDescriptor): _77.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _77.AuthnDescriptorProtoMsg): _77.AuthnDescriptor;
                    toProto(message: _77.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _77.AuthnDescriptor): _77.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _77.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.SigningModeDescriptor;
                    fromPartial(object: Partial<_77.SigningModeDescriptor>): _77.SigningModeDescriptor;
                    fromAmino(object: _77.SigningModeDescriptorAmino): _77.SigningModeDescriptor;
                    toAmino(message: _77.SigningModeDescriptor): _77.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _77.SigningModeDescriptorAminoMsg): _77.SigningModeDescriptor;
                    toAminoMsg(message: _77.SigningModeDescriptor): _77.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _77.SigningModeDescriptorProtoMsg): _77.SigningModeDescriptor;
                    toProto(message: _77.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _77.SigningModeDescriptor): _77.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _77.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.ChainDescriptor;
                    fromPartial(object: Partial<_77.ChainDescriptor>): _77.ChainDescriptor;
                    fromAmino(object: _77.ChainDescriptorAmino): _77.ChainDescriptor;
                    toAmino(message: _77.ChainDescriptor): _77.ChainDescriptorAmino;
                    fromAminoMsg(object: _77.ChainDescriptorAminoMsg): _77.ChainDescriptor;
                    toAminoMsg(message: _77.ChainDescriptor): _77.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _77.ChainDescriptorProtoMsg): _77.ChainDescriptor;
                    toProto(message: _77.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _77.ChainDescriptor): _77.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _77.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.CodecDescriptor;
                    fromPartial(object: Partial<_77.CodecDescriptor>): _77.CodecDescriptor;
                    fromAmino(object: _77.CodecDescriptorAmino): _77.CodecDescriptor;
                    toAmino(message: _77.CodecDescriptor): _77.CodecDescriptorAmino;
                    fromAminoMsg(object: _77.CodecDescriptorAminoMsg): _77.CodecDescriptor;
                    toAminoMsg(message: _77.CodecDescriptor): _77.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _77.CodecDescriptorProtoMsg): _77.CodecDescriptor;
                    toProto(message: _77.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _77.CodecDescriptor): _77.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _77.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.InterfaceDescriptor;
                    fromPartial(object: Partial<_77.InterfaceDescriptor>): _77.InterfaceDescriptor;
                    fromAmino(object: _77.InterfaceDescriptorAmino): _77.InterfaceDescriptor;
                    toAmino(message: _77.InterfaceDescriptor): _77.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _77.InterfaceDescriptorAminoMsg): _77.InterfaceDescriptor;
                    toAminoMsg(message: _77.InterfaceDescriptor): _77.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _77.InterfaceDescriptorProtoMsg): _77.InterfaceDescriptor;
                    toProto(message: _77.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _77.InterfaceDescriptor): _77.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _77.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_77.InterfaceImplementerDescriptor>): _77.InterfaceImplementerDescriptor;
                    fromAmino(object: _77.InterfaceImplementerDescriptorAmino): _77.InterfaceImplementerDescriptor;
                    toAmino(message: _77.InterfaceImplementerDescriptor): _77.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _77.InterfaceImplementerDescriptorAminoMsg): _77.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _77.InterfaceImplementerDescriptor): _77.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _77.InterfaceImplementerDescriptorProtoMsg): _77.InterfaceImplementerDescriptor;
                    toProto(message: _77.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _77.InterfaceImplementerDescriptor): _77.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _77.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_77.InterfaceAcceptingMessageDescriptor>): _77.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _77.InterfaceAcceptingMessageDescriptorAmino): _77.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _77.InterfaceAcceptingMessageDescriptor): _77.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _77.InterfaceAcceptingMessageDescriptorAminoMsg): _77.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _77.InterfaceAcceptingMessageDescriptor): _77.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _77.InterfaceAcceptingMessageDescriptorProtoMsg): _77.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _77.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _77.InterfaceAcceptingMessageDescriptor): _77.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _77.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.ConfigurationDescriptor;
                    fromPartial(object: Partial<_77.ConfigurationDescriptor>): _77.ConfigurationDescriptor;
                    fromAmino(object: _77.ConfigurationDescriptorAmino): _77.ConfigurationDescriptor;
                    toAmino(message: _77.ConfigurationDescriptor): _77.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _77.ConfigurationDescriptorAminoMsg): _77.ConfigurationDescriptor;
                    toAminoMsg(message: _77.ConfigurationDescriptor): _77.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _77.ConfigurationDescriptorProtoMsg): _77.ConfigurationDescriptor;
                    toProto(message: _77.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _77.ConfigurationDescriptor): _77.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _77.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.MsgDescriptor;
                    fromPartial(object: Partial<_77.MsgDescriptor>): _77.MsgDescriptor;
                    fromAmino(object: _77.MsgDescriptorAmino): _77.MsgDescriptor;
                    toAmino(message: _77.MsgDescriptor): _77.MsgDescriptorAmino;
                    fromAminoMsg(object: _77.MsgDescriptorAminoMsg): _77.MsgDescriptor;
                    toAminoMsg(message: _77.MsgDescriptor): _77.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _77.MsgDescriptorProtoMsg): _77.MsgDescriptor;
                    toProto(message: _77.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _77.MsgDescriptor): _77.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _77.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_77.GetAuthnDescriptorRequest>): _77.GetAuthnDescriptorRequest;
                    fromAmino(_: _77.GetAuthnDescriptorRequestAmino): _77.GetAuthnDescriptorRequest;
                    toAmino(_: _77.GetAuthnDescriptorRequest): _77.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _77.GetAuthnDescriptorRequestAminoMsg): _77.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _77.GetAuthnDescriptorRequest): _77.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _77.GetAuthnDescriptorRequestProtoMsg): _77.GetAuthnDescriptorRequest;
                    toProto(message: _77.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _77.GetAuthnDescriptorRequest): _77.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _77.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_77.GetAuthnDescriptorResponse>): _77.GetAuthnDescriptorResponse;
                    fromAmino(object: _77.GetAuthnDescriptorResponseAmino): _77.GetAuthnDescriptorResponse;
                    toAmino(message: _77.GetAuthnDescriptorResponse): _77.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _77.GetAuthnDescriptorResponseAminoMsg): _77.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _77.GetAuthnDescriptorResponse): _77.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _77.GetAuthnDescriptorResponseProtoMsg): _77.GetAuthnDescriptorResponse;
                    toProto(message: _77.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _77.GetAuthnDescriptorResponse): _77.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _77.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_77.GetChainDescriptorRequest>): _77.GetChainDescriptorRequest;
                    fromAmino(_: _77.GetChainDescriptorRequestAmino): _77.GetChainDescriptorRequest;
                    toAmino(_: _77.GetChainDescriptorRequest): _77.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _77.GetChainDescriptorRequestAminoMsg): _77.GetChainDescriptorRequest;
                    toAminoMsg(message: _77.GetChainDescriptorRequest): _77.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _77.GetChainDescriptorRequestProtoMsg): _77.GetChainDescriptorRequest;
                    toProto(message: _77.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _77.GetChainDescriptorRequest): _77.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _77.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_77.GetChainDescriptorResponse>): _77.GetChainDescriptorResponse;
                    fromAmino(object: _77.GetChainDescriptorResponseAmino): _77.GetChainDescriptorResponse;
                    toAmino(message: _77.GetChainDescriptorResponse): _77.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _77.GetChainDescriptorResponseAminoMsg): _77.GetChainDescriptorResponse;
                    toAminoMsg(message: _77.GetChainDescriptorResponse): _77.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _77.GetChainDescriptorResponseProtoMsg): _77.GetChainDescriptorResponse;
                    toProto(message: _77.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _77.GetChainDescriptorResponse): _77.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _77.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_77.GetCodecDescriptorRequest>): _77.GetCodecDescriptorRequest;
                    fromAmino(_: _77.GetCodecDescriptorRequestAmino): _77.GetCodecDescriptorRequest;
                    toAmino(_: _77.GetCodecDescriptorRequest): _77.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _77.GetCodecDescriptorRequestAminoMsg): _77.GetCodecDescriptorRequest;
                    toAminoMsg(message: _77.GetCodecDescriptorRequest): _77.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _77.GetCodecDescriptorRequestProtoMsg): _77.GetCodecDescriptorRequest;
                    toProto(message: _77.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _77.GetCodecDescriptorRequest): _77.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _77.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_77.GetCodecDescriptorResponse>): _77.GetCodecDescriptorResponse;
                    fromAmino(object: _77.GetCodecDescriptorResponseAmino): _77.GetCodecDescriptorResponse;
                    toAmino(message: _77.GetCodecDescriptorResponse): _77.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _77.GetCodecDescriptorResponseAminoMsg): _77.GetCodecDescriptorResponse;
                    toAminoMsg(message: _77.GetCodecDescriptorResponse): _77.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _77.GetCodecDescriptorResponseProtoMsg): _77.GetCodecDescriptorResponse;
                    toProto(message: _77.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _77.GetCodecDescriptorResponse): _77.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _77.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_77.GetConfigurationDescriptorRequest>): _77.GetConfigurationDescriptorRequest;
                    fromAmino(_: _77.GetConfigurationDescriptorRequestAmino): _77.GetConfigurationDescriptorRequest;
                    toAmino(_: _77.GetConfigurationDescriptorRequest): _77.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _77.GetConfigurationDescriptorRequestAminoMsg): _77.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _77.GetConfigurationDescriptorRequest): _77.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _77.GetConfigurationDescriptorRequestProtoMsg): _77.GetConfigurationDescriptorRequest;
                    toProto(message: _77.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _77.GetConfigurationDescriptorRequest): _77.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _77.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_77.GetConfigurationDescriptorResponse>): _77.GetConfigurationDescriptorResponse;
                    fromAmino(object: _77.GetConfigurationDescriptorResponseAmino): _77.GetConfigurationDescriptorResponse;
                    toAmino(message: _77.GetConfigurationDescriptorResponse): _77.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _77.GetConfigurationDescriptorResponseAminoMsg): _77.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _77.GetConfigurationDescriptorResponse): _77.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _77.GetConfigurationDescriptorResponseProtoMsg): _77.GetConfigurationDescriptorResponse;
                    toProto(message: _77.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _77.GetConfigurationDescriptorResponse): _77.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _77.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_77.GetQueryServicesDescriptorRequest>): _77.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _77.GetQueryServicesDescriptorRequestAmino): _77.GetQueryServicesDescriptorRequest;
                    toAmino(_: _77.GetQueryServicesDescriptorRequest): _77.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _77.GetQueryServicesDescriptorRequestAminoMsg): _77.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _77.GetQueryServicesDescriptorRequest): _77.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _77.GetQueryServicesDescriptorRequestProtoMsg): _77.GetQueryServicesDescriptorRequest;
                    toProto(message: _77.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _77.GetQueryServicesDescriptorRequest): _77.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _77.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_77.GetQueryServicesDescriptorResponse>): _77.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _77.GetQueryServicesDescriptorResponseAmino): _77.GetQueryServicesDescriptorResponse;
                    toAmino(message: _77.GetQueryServicesDescriptorResponse): _77.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _77.GetQueryServicesDescriptorResponseAminoMsg): _77.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _77.GetQueryServicesDescriptorResponse): _77.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _77.GetQueryServicesDescriptorResponseProtoMsg): _77.GetQueryServicesDescriptorResponse;
                    toProto(message: _77.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _77.GetQueryServicesDescriptorResponse): _77.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _77.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_77.GetTxDescriptorRequest>): _77.GetTxDescriptorRequest;
                    fromAmino(_: _77.GetTxDescriptorRequestAmino): _77.GetTxDescriptorRequest;
                    toAmino(_: _77.GetTxDescriptorRequest): _77.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _77.GetTxDescriptorRequestAminoMsg): _77.GetTxDescriptorRequest;
                    toAminoMsg(message: _77.GetTxDescriptorRequest): _77.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _77.GetTxDescriptorRequestProtoMsg): _77.GetTxDescriptorRequest;
                    toProto(message: _77.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _77.GetTxDescriptorRequest): _77.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _77.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_77.GetTxDescriptorResponse>): _77.GetTxDescriptorResponse;
                    fromAmino(object: _77.GetTxDescriptorResponseAmino): _77.GetTxDescriptorResponse;
                    toAmino(message: _77.GetTxDescriptorResponse): _77.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _77.GetTxDescriptorResponseAminoMsg): _77.GetTxDescriptorResponse;
                    toAminoMsg(message: _77.GetTxDescriptorResponse): _77.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _77.GetTxDescriptorResponseProtoMsg): _77.GetTxDescriptorResponse;
                    toProto(message: _77.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _77.GetTxDescriptorResponse): _77.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _77.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.QueryServicesDescriptor;
                    fromPartial(object: Partial<_77.QueryServicesDescriptor>): _77.QueryServicesDescriptor;
                    fromAmino(object: _77.QueryServicesDescriptorAmino): _77.QueryServicesDescriptor;
                    toAmino(message: _77.QueryServicesDescriptor): _77.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _77.QueryServicesDescriptorAminoMsg): _77.QueryServicesDescriptor;
                    toAminoMsg(message: _77.QueryServicesDescriptor): _77.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _77.QueryServicesDescriptorProtoMsg): _77.QueryServicesDescriptor;
                    toProto(message: _77.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _77.QueryServicesDescriptor): _77.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _77.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.QueryServiceDescriptor;
                    fromPartial(object: Partial<_77.QueryServiceDescriptor>): _77.QueryServiceDescriptor;
                    fromAmino(object: _77.QueryServiceDescriptorAmino): _77.QueryServiceDescriptor;
                    toAmino(message: _77.QueryServiceDescriptor): _77.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _77.QueryServiceDescriptorAminoMsg): _77.QueryServiceDescriptor;
                    toAminoMsg(message: _77.QueryServiceDescriptor): _77.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _77.QueryServiceDescriptorProtoMsg): _77.QueryServiceDescriptor;
                    toProto(message: _77.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _77.QueryServiceDescriptor): _77.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _77.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.QueryMethodDescriptor;
                    fromPartial(object: Partial<_77.QueryMethodDescriptor>): _77.QueryMethodDescriptor;
                    fromAmino(object: _77.QueryMethodDescriptorAmino): _77.QueryMethodDescriptor;
                    toAmino(message: _77.QueryMethodDescriptor): _77.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _77.QueryMethodDescriptorAminoMsg): _77.QueryMethodDescriptor;
                    toAminoMsg(message: _77.QueryMethodDescriptor): _77.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _77.QueryMethodDescriptorProtoMsg): _77.QueryMethodDescriptor;
                    toProto(message: _77.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _77.QueryMethodDescriptor): _77.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _78.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.Snapshot;
                    fromPartial(object: Partial<_78.Snapshot>): _78.Snapshot;
                    fromAmino(object: _78.SnapshotAmino): _78.Snapshot;
                    toAmino(message: _78.Snapshot): _78.SnapshotAmino;
                    fromAminoMsg(object: _78.SnapshotAminoMsg): _78.Snapshot;
                    toAminoMsg(message: _78.Snapshot): _78.SnapshotAminoMsg;
                    fromProtoMsg(message: _78.SnapshotProtoMsg): _78.Snapshot;
                    toProto(message: _78.Snapshot): Uint8Array;
                    toProtoMsg(message: _78.Snapshot): _78.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _78.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.Metadata;
                    fromPartial(object: Partial<_78.Metadata>): _78.Metadata;
                    fromAmino(object: _78.MetadataAmino): _78.Metadata;
                    toAmino(message: _78.Metadata): _78.MetadataAmino;
                    fromAminoMsg(object: _78.MetadataAminoMsg): _78.Metadata;
                    toAminoMsg(message: _78.Metadata): _78.MetadataAminoMsg;
                    fromProtoMsg(message: _78.MetadataProtoMsg): _78.Metadata;
                    toProto(message: _78.Metadata): Uint8Array;
                    toProtoMsg(message: _78.Metadata): _78.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _78.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SnapshotItem;
                    fromPartial(object: Partial<_78.SnapshotItem>): _78.SnapshotItem;
                    fromAmino(object: _78.SnapshotItemAmino): _78.SnapshotItem;
                    toAmino(message: _78.SnapshotItem): _78.SnapshotItemAmino;
                    fromAminoMsg(object: _78.SnapshotItemAminoMsg): _78.SnapshotItem;
                    toAminoMsg(message: _78.SnapshotItem): _78.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _78.SnapshotItemProtoMsg): _78.SnapshotItem;
                    toProto(message: _78.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _78.SnapshotItem): _78.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _78.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SnapshotStoreItem;
                    fromPartial(object: Partial<_78.SnapshotStoreItem>): _78.SnapshotStoreItem;
                    fromAmino(object: _78.SnapshotStoreItemAmino): _78.SnapshotStoreItem;
                    toAmino(message: _78.SnapshotStoreItem): _78.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _78.SnapshotStoreItemAminoMsg): _78.SnapshotStoreItem;
                    toAminoMsg(message: _78.SnapshotStoreItem): _78.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _78.SnapshotStoreItemProtoMsg): _78.SnapshotStoreItem;
                    toProto(message: _78.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _78.SnapshotStoreItem): _78.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _78.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SnapshotIAVLItem;
                    fromPartial(object: Partial<_78.SnapshotIAVLItem>): _78.SnapshotIAVLItem;
                    fromAmino(object: _78.SnapshotIAVLItemAmino): _78.SnapshotIAVLItem;
                    toAmino(message: _78.SnapshotIAVLItem): _78.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _78.SnapshotIAVLItemAminoMsg): _78.SnapshotIAVLItem;
                    toAminoMsg(message: _78.SnapshotIAVLItem): _78.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _78.SnapshotIAVLItemProtoMsg): _78.SnapshotIAVLItem;
                    toProto(message: _78.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _78.SnapshotIAVLItem): _78.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _78.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_78.SnapshotExtensionMeta>): _78.SnapshotExtensionMeta;
                    fromAmino(object: _78.SnapshotExtensionMetaAmino): _78.SnapshotExtensionMeta;
                    toAmino(message: _78.SnapshotExtensionMeta): _78.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _78.SnapshotExtensionMetaAminoMsg): _78.SnapshotExtensionMeta;
                    toAminoMsg(message: _78.SnapshotExtensionMeta): _78.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _78.SnapshotExtensionMetaProtoMsg): _78.SnapshotExtensionMeta;
                    toProto(message: _78.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _78.SnapshotExtensionMeta): _78.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _78.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_78.SnapshotExtensionPayload>): _78.SnapshotExtensionPayload;
                    fromAmino(object: _78.SnapshotExtensionPayloadAmino): _78.SnapshotExtensionPayload;
                    toAmino(message: _78.SnapshotExtensionPayload): _78.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _78.SnapshotExtensionPayloadAminoMsg): _78.SnapshotExtensionPayload;
                    toAminoMsg(message: _78.SnapshotExtensionPayload): _78.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _78.SnapshotExtensionPayloadProtoMsg): _78.SnapshotExtensionPayload;
                    toProto(message: _78.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _78.SnapshotExtensionPayload): _78.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _78.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SnapshotKVItem;
                    fromPartial(object: Partial<_78.SnapshotKVItem>): _78.SnapshotKVItem;
                    fromAmino(object: _78.SnapshotKVItemAmino): _78.SnapshotKVItem;
                    toAmino(message: _78.SnapshotKVItem): _78.SnapshotKVItemAmino;
                    fromAminoMsg(object: _78.SnapshotKVItemAminoMsg): _78.SnapshotKVItem;
                    toAminoMsg(message: _78.SnapshotKVItem): _78.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _78.SnapshotKVItemProtoMsg): _78.SnapshotKVItem;
                    toProto(message: _78.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _78.SnapshotKVItem): _78.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _78.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SnapshotSchema;
                    fromPartial(object: Partial<_78.SnapshotSchema>): _78.SnapshotSchema;
                    fromAmino(object: _78.SnapshotSchemaAmino): _78.SnapshotSchema;
                    toAmino(message: _78.SnapshotSchema): _78.SnapshotSchemaAmino;
                    fromAminoMsg(object: _78.SnapshotSchemaAminoMsg): _78.SnapshotSchema;
                    toAminoMsg(message: _78.SnapshotSchema): _78.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _78.SnapshotSchemaProtoMsg): _78.SnapshotSchema;
                    toProto(message: _78.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _78.SnapshotSchema): _78.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _80.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.StoreKVPair;
                    fromPartial(object: Partial<_80.StoreKVPair>): _80.StoreKVPair;
                    fromAmino(object: _80.StoreKVPairAmino): _80.StoreKVPair;
                    toAmino(message: _80.StoreKVPair): _80.StoreKVPairAmino;
                    fromAminoMsg(object: _80.StoreKVPairAminoMsg): _80.StoreKVPair;
                    toAminoMsg(message: _80.StoreKVPair): _80.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _80.StoreKVPairProtoMsg): _80.StoreKVPair;
                    toProto(message: _80.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _80.StoreKVPair): _80.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _80.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.BlockMetadata;
                    fromPartial(object: Partial<_80.BlockMetadata>): _80.BlockMetadata;
                    fromAmino(object: _80.BlockMetadataAmino): _80.BlockMetadata;
                    toAmino(message: _80.BlockMetadata): _80.BlockMetadataAmino;
                    fromAminoMsg(object: _80.BlockMetadataAminoMsg): _80.BlockMetadata;
                    toAminoMsg(message: _80.BlockMetadata): _80.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _80.BlockMetadataProtoMsg): _80.BlockMetadata;
                    toProto(message: _80.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _80.BlockMetadata): _80.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _80.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_80.BlockMetadata_DeliverTx>): _80.BlockMetadata_DeliverTx;
                    fromAmino(object: _80.BlockMetadata_DeliverTxAmino): _80.BlockMetadata_DeliverTx;
                    toAmino(message: _80.BlockMetadata_DeliverTx): _80.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _80.BlockMetadata_DeliverTxAminoMsg): _80.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _80.BlockMetadata_DeliverTx): _80.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _80.BlockMetadata_DeliverTxProtoMsg): _80.BlockMetadata_DeliverTx;
                    toProto(message: _80.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _80.BlockMetadata_DeliverTx): _80.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _79.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.CommitInfo;
                    fromPartial(object: Partial<_79.CommitInfo>): _79.CommitInfo;
                    fromAmino(object: _79.CommitInfoAmino): _79.CommitInfo;
                    toAmino(message: _79.CommitInfo): _79.CommitInfoAmino;
                    fromAminoMsg(object: _79.CommitInfoAminoMsg): _79.CommitInfo;
                    toAminoMsg(message: _79.CommitInfo): _79.CommitInfoAminoMsg;
                    fromProtoMsg(message: _79.CommitInfoProtoMsg): _79.CommitInfo;
                    toProto(message: _79.CommitInfo): Uint8Array;
                    toProtoMsg(message: _79.CommitInfo): _79.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _79.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.StoreInfo;
                    fromPartial(object: Partial<_79.StoreInfo>): _79.StoreInfo;
                    fromAmino(object: _79.StoreInfoAmino): _79.StoreInfo;
                    toAmino(message: _79.StoreInfo): _79.StoreInfoAmino;
                    fromAminoMsg(object: _79.StoreInfoAminoMsg): _79.StoreInfo;
                    toAminoMsg(message: _79.StoreInfo): _79.StoreInfoAminoMsg;
                    fromProtoMsg(message: _79.StoreInfoProtoMsg): _79.StoreInfo;
                    toProto(message: _79.StoreInfo): Uint8Array;
                    toProtoMsg(message: _79.StoreInfo): _79.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _79.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.CommitID;
                    fromPartial(object: Partial<_79.CommitID>): _79.CommitID;
                    fromAmino(object: _79.CommitIDAmino): _79.CommitID;
                    toAmino(message: _79.CommitID): _79.CommitIDAmino;
                    fromAminoMsg(object: _79.CommitIDAminoMsg): _79.CommitID;
                    toAminoMsg(message: _79.CommitID): _79.CommitIDAminoMsg;
                    fromProtoMsg(message: _79.CommitIDProtoMsg): _79.CommitID;
                    toProto(message: _79.CommitID): Uint8Array;
                    toProtoMsg(message: _79.CommitID): _79.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _287.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _81.GetNodeInfoRequest): Promise<_81.GetNodeInfoResponse>;
                    getSyncing(request?: _81.GetSyncingRequest): Promise<_81.GetSyncingResponse>;
                    getLatestBlock(request?: _81.GetLatestBlockRequest): Promise<_81.GetLatestBlockResponse>;
                    getBlockByHeight(request: _81.GetBlockByHeightRequest): Promise<_81.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _81.GetLatestValidatorSetRequest): Promise<_81.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _81.GetValidatorSetByHeightRequest): Promise<_81.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _81.ABCIQueryRequest): Promise<_81.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _266.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _82.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.Block;
                    fromPartial(object: Partial<_82.Block>): _82.Block;
                    fromAmino(object: _82.BlockAmino): _82.Block;
                    toAmino(message: _82.Block): _82.BlockAmino;
                    fromAminoMsg(object: _82.BlockAminoMsg): _82.Block;
                    toAminoMsg(message: _82.Block): _82.BlockAminoMsg;
                    fromProtoMsg(message: _82.BlockProtoMsg): _82.Block;
                    toProto(message: _82.Block): Uint8Array;
                    toProtoMsg(message: _82.Block): _82.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _82.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.Header;
                    fromPartial(object: Partial<_82.Header>): _82.Header;
                    fromAmino(object: _82.HeaderAmino): _82.Header;
                    toAmino(message: _82.Header): _82.HeaderAmino;
                    fromAminoMsg(object: _82.HeaderAminoMsg): _82.Header;
                    toAminoMsg(message: _82.Header): _82.HeaderAminoMsg;
                    fromProtoMsg(message: _82.HeaderProtoMsg): _82.Header;
                    toProto(message: _82.Header): Uint8Array;
                    toProtoMsg(message: _82.Header): _82.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _81.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_81.GetValidatorSetByHeightRequest>): _81.GetValidatorSetByHeightRequest;
                    fromAmino(object: _81.GetValidatorSetByHeightRequestAmino): _81.GetValidatorSetByHeightRequest;
                    toAmino(message: _81.GetValidatorSetByHeightRequest): _81.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _81.GetValidatorSetByHeightRequestAminoMsg): _81.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _81.GetValidatorSetByHeightRequest): _81.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _81.GetValidatorSetByHeightRequestProtoMsg): _81.GetValidatorSetByHeightRequest;
                    toProto(message: _81.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _81.GetValidatorSetByHeightRequest): _81.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _81.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_81.GetValidatorSetByHeightResponse>): _81.GetValidatorSetByHeightResponse;
                    fromAmino(object: _81.GetValidatorSetByHeightResponseAmino): _81.GetValidatorSetByHeightResponse;
                    toAmino(message: _81.GetValidatorSetByHeightResponse): _81.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _81.GetValidatorSetByHeightResponseAminoMsg): _81.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _81.GetValidatorSetByHeightResponse): _81.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _81.GetValidatorSetByHeightResponseProtoMsg): _81.GetValidatorSetByHeightResponse;
                    toProto(message: _81.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _81.GetValidatorSetByHeightResponse): _81.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _81.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_81.GetLatestValidatorSetRequest>): _81.GetLatestValidatorSetRequest;
                    fromAmino(object: _81.GetLatestValidatorSetRequestAmino): _81.GetLatestValidatorSetRequest;
                    toAmino(message: _81.GetLatestValidatorSetRequest): _81.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _81.GetLatestValidatorSetRequestAminoMsg): _81.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _81.GetLatestValidatorSetRequest): _81.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _81.GetLatestValidatorSetRequestProtoMsg): _81.GetLatestValidatorSetRequest;
                    toProto(message: _81.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _81.GetLatestValidatorSetRequest): _81.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _81.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_81.GetLatestValidatorSetResponse>): _81.GetLatestValidatorSetResponse;
                    fromAmino(object: _81.GetLatestValidatorSetResponseAmino): _81.GetLatestValidatorSetResponse;
                    toAmino(message: _81.GetLatestValidatorSetResponse): _81.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _81.GetLatestValidatorSetResponseAminoMsg): _81.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _81.GetLatestValidatorSetResponse): _81.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _81.GetLatestValidatorSetResponseProtoMsg): _81.GetLatestValidatorSetResponse;
                    toProto(message: _81.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _81.GetLatestValidatorSetResponse): _81.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _81.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.Validator;
                    fromPartial(object: Partial<_81.Validator>): _81.Validator;
                    fromAmino(object: _81.ValidatorAmino): _81.Validator;
                    toAmino(message: _81.Validator): _81.ValidatorAmino;
                    fromAminoMsg(object: _81.ValidatorAminoMsg): _81.Validator;
                    toAminoMsg(message: _81.Validator): _81.ValidatorAminoMsg;
                    fromProtoMsg(message: _81.ValidatorProtoMsg): _81.Validator;
                    toProto(message: _81.Validator): Uint8Array;
                    toProtoMsg(message: _81.Validator): _81.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _81.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_81.GetBlockByHeightRequest>): _81.GetBlockByHeightRequest;
                    fromAmino(object: _81.GetBlockByHeightRequestAmino): _81.GetBlockByHeightRequest;
                    toAmino(message: _81.GetBlockByHeightRequest): _81.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _81.GetBlockByHeightRequestAminoMsg): _81.GetBlockByHeightRequest;
                    toAminoMsg(message: _81.GetBlockByHeightRequest): _81.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _81.GetBlockByHeightRequestProtoMsg): _81.GetBlockByHeightRequest;
                    toProto(message: _81.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _81.GetBlockByHeightRequest): _81.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _81.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_81.GetBlockByHeightResponse>): _81.GetBlockByHeightResponse;
                    fromAmino(object: _81.GetBlockByHeightResponseAmino): _81.GetBlockByHeightResponse;
                    toAmino(message: _81.GetBlockByHeightResponse): _81.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _81.GetBlockByHeightResponseAminoMsg): _81.GetBlockByHeightResponse;
                    toAminoMsg(message: _81.GetBlockByHeightResponse): _81.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _81.GetBlockByHeightResponseProtoMsg): _81.GetBlockByHeightResponse;
                    toProto(message: _81.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _81.GetBlockByHeightResponse): _81.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _81.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.GetLatestBlockRequest;
                    fromPartial(_: Partial<_81.GetLatestBlockRequest>): _81.GetLatestBlockRequest;
                    fromAmino(_: _81.GetLatestBlockRequestAmino): _81.GetLatestBlockRequest;
                    toAmino(_: _81.GetLatestBlockRequest): _81.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _81.GetLatestBlockRequestAminoMsg): _81.GetLatestBlockRequest;
                    toAminoMsg(message: _81.GetLatestBlockRequest): _81.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _81.GetLatestBlockRequestProtoMsg): _81.GetLatestBlockRequest;
                    toProto(message: _81.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _81.GetLatestBlockRequest): _81.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _81.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetLatestBlockResponse;
                    fromPartial(object: Partial<_81.GetLatestBlockResponse>): _81.GetLatestBlockResponse;
                    fromAmino(object: _81.GetLatestBlockResponseAmino): _81.GetLatestBlockResponse;
                    toAmino(message: _81.GetLatestBlockResponse): _81.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _81.GetLatestBlockResponseAminoMsg): _81.GetLatestBlockResponse;
                    toAminoMsg(message: _81.GetLatestBlockResponse): _81.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _81.GetLatestBlockResponseProtoMsg): _81.GetLatestBlockResponse;
                    toProto(message: _81.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _81.GetLatestBlockResponse): _81.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _81.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.GetSyncingRequest;
                    fromPartial(_: Partial<_81.GetSyncingRequest>): _81.GetSyncingRequest;
                    fromAmino(_: _81.GetSyncingRequestAmino): _81.GetSyncingRequest;
                    toAmino(_: _81.GetSyncingRequest): _81.GetSyncingRequestAmino;
                    fromAminoMsg(object: _81.GetSyncingRequestAminoMsg): _81.GetSyncingRequest;
                    toAminoMsg(message: _81.GetSyncingRequest): _81.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _81.GetSyncingRequestProtoMsg): _81.GetSyncingRequest;
                    toProto(message: _81.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _81.GetSyncingRequest): _81.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _81.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetSyncingResponse;
                    fromPartial(object: Partial<_81.GetSyncingResponse>): _81.GetSyncingResponse;
                    fromAmino(object: _81.GetSyncingResponseAmino): _81.GetSyncingResponse;
                    toAmino(message: _81.GetSyncingResponse): _81.GetSyncingResponseAmino;
                    fromAminoMsg(object: _81.GetSyncingResponseAminoMsg): _81.GetSyncingResponse;
                    toAminoMsg(message: _81.GetSyncingResponse): _81.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _81.GetSyncingResponseProtoMsg): _81.GetSyncingResponse;
                    toProto(message: _81.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _81.GetSyncingResponse): _81.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _81.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.GetNodeInfoRequest;
                    fromPartial(_: Partial<_81.GetNodeInfoRequest>): _81.GetNodeInfoRequest;
                    fromAmino(_: _81.GetNodeInfoRequestAmino): _81.GetNodeInfoRequest;
                    toAmino(_: _81.GetNodeInfoRequest): _81.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _81.GetNodeInfoRequestAminoMsg): _81.GetNodeInfoRequest;
                    toAminoMsg(message: _81.GetNodeInfoRequest): _81.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _81.GetNodeInfoRequestProtoMsg): _81.GetNodeInfoRequest;
                    toProto(message: _81.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _81.GetNodeInfoRequest): _81.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _81.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetNodeInfoResponse;
                    fromPartial(object: Partial<_81.GetNodeInfoResponse>): _81.GetNodeInfoResponse;
                    fromAmino(object: _81.GetNodeInfoResponseAmino): _81.GetNodeInfoResponse;
                    toAmino(message: _81.GetNodeInfoResponse): _81.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _81.GetNodeInfoResponseAminoMsg): _81.GetNodeInfoResponse;
                    toAminoMsg(message: _81.GetNodeInfoResponse): _81.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _81.GetNodeInfoResponseProtoMsg): _81.GetNodeInfoResponse;
                    toProto(message: _81.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _81.GetNodeInfoResponse): _81.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _81.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.VersionInfo;
                    fromPartial(object: Partial<_81.VersionInfo>): _81.VersionInfo;
                    fromAmino(object: _81.VersionInfoAmino): _81.VersionInfo;
                    toAmino(message: _81.VersionInfo): _81.VersionInfoAmino;
                    fromAminoMsg(object: _81.VersionInfoAminoMsg): _81.VersionInfo;
                    toAminoMsg(message: _81.VersionInfo): _81.VersionInfoAminoMsg;
                    fromProtoMsg(message: _81.VersionInfoProtoMsg): _81.VersionInfo;
                    toProto(message: _81.VersionInfo): Uint8Array;
                    toProtoMsg(message: _81.VersionInfo): _81.VersionInfoProtoMsg;
                };
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
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _81.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.ABCIQueryRequest;
                    fromPartial(object: Partial<_81.ABCIQueryRequest>): _81.ABCIQueryRequest;
                    fromAmino(object: _81.ABCIQueryRequestAmino): _81.ABCIQueryRequest;
                    toAmino(message: _81.ABCIQueryRequest): _81.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _81.ABCIQueryRequestAminoMsg): _81.ABCIQueryRequest;
                    toAminoMsg(message: _81.ABCIQueryRequest): _81.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _81.ABCIQueryRequestProtoMsg): _81.ABCIQueryRequest;
                    toProto(message: _81.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _81.ABCIQueryRequest): _81.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _81.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.ABCIQueryResponse;
                    fromPartial(object: Partial<_81.ABCIQueryResponse>): _81.ABCIQueryResponse;
                    fromAmino(object: _81.ABCIQueryResponseAmino): _81.ABCIQueryResponse;
                    toAmino(message: _81.ABCIQueryResponse): _81.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _81.ABCIQueryResponseAminoMsg): _81.ABCIQueryResponse;
                    toAminoMsg(message: _81.ABCIQueryResponse): _81.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _81.ABCIQueryResponseProtoMsg): _81.ABCIQueryResponse;
                    toProto(message: _81.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _81.ABCIQueryResponse): _81.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _81.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.ProofOp;
                    fromPartial(object: Partial<_81.ProofOp>): _81.ProofOp;
                    fromAmino(object: _81.ProofOpAmino): _81.ProofOp;
                    toAmino(message: _81.ProofOp): _81.ProofOpAmino;
                    fromAminoMsg(object: _81.ProofOpAminoMsg): _81.ProofOp;
                    toAminoMsg(message: _81.ProofOp): _81.ProofOpAminoMsg;
                    fromProtoMsg(message: _81.ProofOpProtoMsg): _81.ProofOp;
                    toProto(message: _81.ProofOp): Uint8Array;
                    toProtoMsg(message: _81.ProofOp): _81.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _81.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.ProofOps;
                    fromPartial(object: Partial<_81.ProofOps>): _81.ProofOps;
                    fromAmino(object: _81.ProofOpsAmino): _81.ProofOps;
                    toAmino(message: _81.ProofOps): _81.ProofOpsAmino;
                    fromAminoMsg(object: _81.ProofOpsAminoMsg): _81.ProofOps;
                    toAminoMsg(message: _81.ProofOps): _81.ProofOpsAminoMsg;
                    fromProtoMsg(message: _81.ProofOpsProtoMsg): _81.ProofOps;
                    toProto(message: _81.ProofOps): Uint8Array;
                    toProtoMsg(message: _81.ProofOps): _81.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _83.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Coin;
                fromPartial(object: Partial<_83.Coin>): _83.Coin;
                fromAmino(object: _83.CoinAmino): _83.Coin;
                toAmino(message: _83.Coin): _83.CoinAmino;
                fromAminoMsg(object: _83.CoinAminoMsg): _83.Coin;
                toAminoMsg(message: _83.Coin): _83.CoinAminoMsg;
                fromProtoMsg(message: _83.CoinProtoMsg): _83.Coin;
                toProto(message: _83.Coin): Uint8Array;
                toProtoMsg(message: _83.Coin): _83.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _83.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DecCoin;
                fromPartial(object: Partial<_83.DecCoin>): _83.DecCoin;
                fromAmino(object: _83.DecCoinAmino): _83.DecCoin;
                toAmino(message: _83.DecCoin): _83.DecCoinAmino;
                fromAminoMsg(object: _83.DecCoinAminoMsg): _83.DecCoin;
                toAminoMsg(message: _83.DecCoin): _83.DecCoinAminoMsg;
                fromProtoMsg(message: _83.DecCoinProtoMsg): _83.DecCoin;
                toProto(message: _83.DecCoin): Uint8Array;
                toProtoMsg(message: _83.DecCoin): _83.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _83.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.IntProto;
                fromPartial(object: Partial<_83.IntProto>): _83.IntProto;
                fromAmino(object: _83.IntProtoAmino): _83.IntProto;
                toAmino(message: _83.IntProto): _83.IntProtoAmino;
                fromAminoMsg(object: _83.IntProtoAminoMsg): _83.IntProto;
                toAminoMsg(message: _83.IntProto): _83.IntProtoAminoMsg;
                fromProtoMsg(message: _83.IntProtoProtoMsg): _83.IntProto;
                toProto(message: _83.IntProto): Uint8Array;
                toProtoMsg(message: _83.IntProto): _83.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _83.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DecProto;
                fromPartial(object: Partial<_83.DecProto>): _83.DecProto;
                fromAmino(object: _83.DecProtoAmino): _83.DecProto;
                toAmino(message: _83.DecProto): _83.DecProtoAmino;
                fromAminoMsg(object: _83.DecProtoAminoMsg): _83.DecProto;
                toAminoMsg(message: _83.DecProto): _83.DecProtoAminoMsg;
                fromProtoMsg(message: _83.DecProtoProtoMsg): _83.DecProto;
                toProto(message: _83.DecProto): Uint8Array;
                toProtoMsg(message: _83.DecProto): _83.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _84.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.Module;
                    fromPartial(object: Partial<_84.Module>): _84.Module;
                    fromAmino(object: _84.ModuleAmino): _84.Module;
                    toAmino(message: _84.Module): _84.ModuleAmino;
                    fromAminoMsg(object: _84.ModuleAminoMsg): _84.Module;
                    toAminoMsg(message: _84.Module): _84.ModuleAminoMsg;
                    fromProtoMsg(message: _84.ModuleProtoMsg): _84.Module;
                    toProto(message: _84.Module): Uint8Array;
                    toProtoMsg(message: _84.Module): _84.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _86.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GenesisOwners;
                fromPartial(object: Partial<_86.GenesisOwners>): _86.GenesisOwners;
                fromAmino(object: _86.GenesisOwnersAmino): _86.GenesisOwners;
                toAmino(message: _86.GenesisOwners): _86.GenesisOwnersAmino;
                fromAminoMsg(object: _86.GenesisOwnersAminoMsg): _86.GenesisOwners;
                toAminoMsg(message: _86.GenesisOwners): _86.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _86.GenesisOwnersProtoMsg): _86.GenesisOwners;
                toProto(message: _86.GenesisOwners): Uint8Array;
                toProtoMsg(message: _86.GenesisOwners): _86.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _85.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Capability;
                fromPartial(object: Partial<_85.Capability>): _85.Capability;
                fromAmino(object: _85.CapabilityAmino): _85.Capability;
                toAmino(message: _85.Capability): _85.CapabilityAmino;
                fromAminoMsg(object: _85.CapabilityAminoMsg): _85.Capability;
                toAminoMsg(message: _85.Capability): _85.CapabilityAminoMsg;
                fromProtoMsg(message: _85.CapabilityProtoMsg): _85.Capability;
                toProto(message: _85.Capability): Uint8Array;
                toProtoMsg(message: _85.Capability): _85.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _85.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Owner;
                fromPartial(object: Partial<_85.Owner>): _85.Owner;
                fromAmino(object: _85.OwnerAmino): _85.Owner;
                toAmino(message: _85.Owner): _85.OwnerAmino;
                fromAminoMsg(object: _85.OwnerAminoMsg): _85.Owner;
                toAminoMsg(message: _85.Owner): _85.OwnerAminoMsg;
                fromProtoMsg(message: _85.OwnerProtoMsg): _85.Owner;
                toProto(message: _85.Owner): Uint8Array;
                toProtoMsg(message: _85.Owner): _85.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _85.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.CapabilityOwners;
                fromPartial(object: Partial<_85.CapabilityOwners>): _85.CapabilityOwners;
                fromAmino(object: _85.CapabilityOwnersAmino): _85.CapabilityOwners;
                toAmino(message: _85.CapabilityOwners): _85.CapabilityOwnersAmino;
                fromAminoMsg(object: _85.CapabilityOwnersAminoMsg): _85.CapabilityOwners;
                toAminoMsg(message: _85.CapabilityOwners): _85.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _85.CapabilityOwnersProtoMsg): _85.CapabilityOwners;
                toProto(message: _85.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _85.CapabilityOwners): _85.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
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
        const v1: {
            MsgClientImpl: typeof _306.MsgClientImpl;
            QueryClientImpl: typeof _288.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _267.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _89.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _89.MsgUpdateParams): {
                        typeUrl: string;
                        value: _89.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _89.MsgUpdateParams): {
                        typeUrl: string;
                        value: _89.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUpdateParams) => _89.MsgUpdateParamsAmino;
                    fromAmino: (object: _89.MsgUpdateParamsAmino) => _89.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _89.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgUpdateParams;
                fromPartial(object: Partial<_89.MsgUpdateParams>): _89.MsgUpdateParams;
                fromAmino(object: _89.MsgUpdateParamsAmino): _89.MsgUpdateParams;
                toAmino(message: _89.MsgUpdateParams): _89.MsgUpdateParamsAmino;
                fromAminoMsg(object: _89.MsgUpdateParamsAminoMsg): _89.MsgUpdateParams;
                toAminoMsg(message: _89.MsgUpdateParams): _89.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateParamsProtoMsg): _89.MsgUpdateParams;
                toProto(message: _89.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateParams): _89.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _89.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_89.MsgUpdateParamsResponse>): _89.MsgUpdateParamsResponse;
                fromAmino(_: _89.MsgUpdateParamsResponseAmino): _89.MsgUpdateParamsResponse;
                toAmino(_: _89.MsgUpdateParamsResponse): _89.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _89.MsgUpdateParamsResponseAminoMsg): _89.MsgUpdateParamsResponse;
                toAminoMsg(message: _89.MsgUpdateParamsResponse): _89.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateParamsResponseProtoMsg): _89.MsgUpdateParamsResponse;
                toProto(message: _89.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateParamsResponse): _89.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _88.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.QueryParamsRequest;
                fromPartial(_: Partial<_88.QueryParamsRequest>): _88.QueryParamsRequest;
                fromAmino(_: _88.QueryParamsRequestAmino): _88.QueryParamsRequest;
                toAmino(_: _88.QueryParamsRequest): _88.QueryParamsRequestAmino;
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
        };
    }
    namespace crisis {
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
        const v1beta1: {
            MsgClientImpl: typeof _307.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _92.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _92.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _92.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _92.MsgVerifyInvariant;
                    };
                    updateParams(value: _92.MsgUpdateParams): {
                        typeUrl: string;
                        value: _92.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _92.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _92.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _92.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _92.MsgVerifyInvariant;
                    };
                    updateParams(value: _92.MsgUpdateParams): {
                        typeUrl: string;
                        value: _92.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _92.MsgVerifyInvariant) => _92.MsgVerifyInvariantAmino;
                    fromAmino: (object: _92.MsgVerifyInvariantAmino) => _92.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _92.MsgUpdateParams) => _92.MsgUpdateParamsAmino;
                    fromAmino: (object: _92.MsgUpdateParamsAmino) => _92.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _92.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgVerifyInvariant;
                fromPartial(object: Partial<_92.MsgVerifyInvariant>): _92.MsgVerifyInvariant;
                fromAmino(object: _92.MsgVerifyInvariantAmino): _92.MsgVerifyInvariant;
                toAmino(message: _92.MsgVerifyInvariant): _92.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _92.MsgVerifyInvariantAminoMsg): _92.MsgVerifyInvariant;
                toAminoMsg(message: _92.MsgVerifyInvariant): _92.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _92.MsgVerifyInvariantProtoMsg): _92.MsgVerifyInvariant;
                toProto(message: _92.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _92.MsgVerifyInvariant): _92.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _92.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_92.MsgVerifyInvariantResponse>): _92.MsgVerifyInvariantResponse;
                fromAmino(_: _92.MsgVerifyInvariantResponseAmino): _92.MsgVerifyInvariantResponse;
                toAmino(_: _92.MsgVerifyInvariantResponse): _92.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _92.MsgVerifyInvariantResponseAminoMsg): _92.MsgVerifyInvariantResponse;
                toAminoMsg(message: _92.MsgVerifyInvariantResponse): _92.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _92.MsgVerifyInvariantResponseProtoMsg): _92.MsgVerifyInvariantResponse;
                toProto(message: _92.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _92.MsgVerifyInvariantResponse): _92.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _92.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgUpdateParams;
                fromPartial(object: Partial<_92.MsgUpdateParams>): _92.MsgUpdateParams;
                fromAmino(object: _92.MsgUpdateParamsAmino): _92.MsgUpdateParams;
                toAmino(message: _92.MsgUpdateParams): _92.MsgUpdateParamsAmino;
                fromAminoMsg(object: _92.MsgUpdateParamsAminoMsg): _92.MsgUpdateParams;
                toAminoMsg(message: _92.MsgUpdateParams): _92.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _92.MsgUpdateParamsProtoMsg): _92.MsgUpdateParams;
                toProto(message: _92.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _92.MsgUpdateParams): _92.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _92.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_92.MsgUpdateParamsResponse>): _92.MsgUpdateParamsResponse;
                fromAmino(_: _92.MsgUpdateParamsResponseAmino): _92.MsgUpdateParamsResponse;
                toAmino(_: _92.MsgUpdateParamsResponse): _92.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _92.MsgUpdateParamsResponseAminoMsg): _92.MsgUpdateParamsResponse;
                toAminoMsg(message: _92.MsgUpdateParamsResponse): _92.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _92.MsgUpdateParamsResponseProtoMsg): _92.MsgUpdateParamsResponse;
                toProto(message: _92.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _92.MsgUpdateParamsResponse): _92.MsgUpdateParamsResponseProtoMsg;
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
    }
    namespace crypto {
        const ed25519: {
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _94.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.BIP44Params;
                    fromPartial(object: Partial<_94.BIP44Params>): _94.BIP44Params;
                    fromAmino(object: _94.BIP44ParamsAmino): _94.BIP44Params;
                    toAmino(message: _94.BIP44Params): _94.BIP44ParamsAmino;
                    fromAminoMsg(object: _94.BIP44ParamsAminoMsg): _94.BIP44Params;
                    toAminoMsg(message: _94.BIP44Params): _94.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _94.BIP44ParamsProtoMsg): _94.BIP44Params;
                    toProto(message: _94.BIP44Params): Uint8Array;
                    toProtoMsg(message: _94.BIP44Params): _94.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _95.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.Record;
                    fromPartial(object: Partial<_95.Record>): _95.Record;
                    fromAmino(object: _95.RecordAmino): _95.Record;
                    toAmino(message: _95.Record): _95.RecordAmino;
                    fromAminoMsg(object: _95.RecordAminoMsg): _95.Record;
                    toAminoMsg(message: _95.Record): _95.RecordAminoMsg;
                    fromProtoMsg(message: _95.RecordProtoMsg): _95.Record;
                    toProto(message: _95.Record): Uint8Array;
                    toProtoMsg(message: _95.Record): _95.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _95.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.Record_Local;
                    fromPartial(object: Partial<_95.Record_Local>): _95.Record_Local;
                    fromAmino(object: _95.Record_LocalAmino): _95.Record_Local;
                    toAmino(message: _95.Record_Local): _95.Record_LocalAmino;
                    fromAminoMsg(object: _95.Record_LocalAminoMsg): _95.Record_Local;
                    toAminoMsg(message: _95.Record_Local): _95.Record_LocalAminoMsg;
                    fromProtoMsg(message: _95.Record_LocalProtoMsg): _95.Record_Local;
                    toProto(message: _95.Record_Local): Uint8Array;
                    toProtoMsg(message: _95.Record_Local): _95.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _95.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.Record_Ledger;
                    fromPartial(object: Partial<_95.Record_Ledger>): _95.Record_Ledger;
                    fromAmino(object: _95.Record_LedgerAmino): _95.Record_Ledger;
                    toAmino(message: _95.Record_Ledger): _95.Record_LedgerAmino;
                    fromAminoMsg(object: _95.Record_LedgerAminoMsg): _95.Record_Ledger;
                    toAminoMsg(message: _95.Record_Ledger): _95.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _95.Record_LedgerProtoMsg): _95.Record_Ledger;
                    toProto(message: _95.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _95.Record_Ledger): _95.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _95.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _95.Record_Multi;
                    fromPartial(_: Partial<_95.Record_Multi>): _95.Record_Multi;
                    fromAmino(_: _95.Record_MultiAmino): _95.Record_Multi;
                    toAmino(_: _95.Record_Multi): _95.Record_MultiAmino;
                    fromAminoMsg(object: _95.Record_MultiAminoMsg): _95.Record_Multi;
                    toAminoMsg(message: _95.Record_Multi): _95.Record_MultiAminoMsg;
                    fromProtoMsg(message: _95.Record_MultiProtoMsg): _95.Record_Multi;
                    toProto(message: _95.Record_Multi): Uint8Array;
                    toProtoMsg(message: _95.Record_Multi): _95.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _95.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _95.Record_Offline;
                    fromPartial(_: Partial<_95.Record_Offline>): _95.Record_Offline;
                    fromAmino(_: _95.Record_OfflineAmino): _95.Record_Offline;
                    toAmino(_: _95.Record_Offline): _95.Record_OfflineAmino;
                    fromAminoMsg(object: _95.Record_OfflineAminoMsg): _95.Record_Offline;
                    toAminoMsg(message: _95.Record_Offline): _95.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _95.Record_OfflineProtoMsg): _95.Record_Offline;
                    toProto(message: _95.Record_Offline): Uint8Array;
                    toProtoMsg(message: _95.Record_Offline): _95.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _96.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.LegacyAminoPubKey;
                fromPartial(object: Partial<_96.LegacyAminoPubKey>): _96.LegacyAminoPubKey;
                fromAmino(object: _96.LegacyAminoPubKeyAmino): _96.LegacyAminoPubKey;
                toAmino(message: _96.LegacyAminoPubKey): _96.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _96.LegacyAminoPubKeyAminoMsg): _96.LegacyAminoPubKey;
                toAminoMsg(message: _96.LegacyAminoPubKey): _96.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _96.LegacyAminoPubKeyProtoMsg): _96.LegacyAminoPubKey;
                toProto(message: _96.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _96.LegacyAminoPubKey): _96.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _97.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.PubKey;
                fromPartial(object: Partial<_97.PubKey>): _97.PubKey;
                fromAmino(object: _97.PubKeyAmino): _97.PubKey;
                toAmino(message: _97.PubKey): _97.PubKeyAmino;
                fromAminoMsg(object: _97.PubKeyAminoMsg): _97.PubKey;
                toAminoMsg(message: _97.PubKey): _97.PubKeyAminoMsg;
                fromProtoMsg(message: _97.PubKeyProtoMsg): _97.PubKey;
                toProto(message: _97.PubKey): Uint8Array;
                toProtoMsg(message: _97.PubKey): _97.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _97.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.PrivKey;
                fromPartial(object: Partial<_97.PrivKey>): _97.PrivKey;
                fromAmino(object: _97.PrivKeyAmino): _97.PrivKey;
                toAmino(message: _97.PrivKey): _97.PrivKeyAmino;
                fromAminoMsg(object: _97.PrivKeyAminoMsg): _97.PrivKey;
                toAminoMsg(message: _97.PrivKey): _97.PrivKeyAminoMsg;
                fromProtoMsg(message: _97.PrivKeyProtoMsg): _97.PrivKey;
                toProto(message: _97.PrivKey): Uint8Array;
                toProtoMsg(message: _97.PrivKey): _97.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
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
    }
    namespace distribution {
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
        const v1beta1: {
            MsgClientImpl: typeof _308.MsgClientImpl;
            QueryClientImpl: typeof _289.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                validatorDistributionInfo(request: _102.QueryValidatorDistributionInfoRequest): Promise<_102.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _102.QueryValidatorOutstandingRewardsRequest): Promise<_102.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _102.QueryValidatorCommissionRequest): Promise<_102.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _102.QueryValidatorSlashesRequest): Promise<_102.QueryValidatorSlashesResponse>;
                delegationRewards(request: _102.QueryDelegationRewardsRequest): Promise<_102.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _102.QueryDelegationTotalRewardsRequest): Promise<_102.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _102.QueryDelegatorValidatorsRequest): Promise<_102.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _102.QueryDelegatorWithdrawAddressRequest): Promise<_102.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _102.QueryCommunityPoolRequest): Promise<_102.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _268.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _103.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _103.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _103.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _103.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _103.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _103.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _103.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _103.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _103.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _103.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _103.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _103.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _103.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _103.MsgFundCommunityPool;
                    };
                    updateParams(value: _103.MsgUpdateParams): {
                        typeUrl: string;
                        value: _103.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _103.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _103.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _103.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _103.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _103.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _103.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _103.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _103.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _103.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _103.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _103.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _103.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _103.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _103.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _103.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _103.MsgFundCommunityPool;
                    };
                    updateParams(value: _103.MsgUpdateParams): {
                        typeUrl: string;
                        value: _103.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _103.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _103.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _103.MsgSetWithdrawAddress) => _103.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _103.MsgSetWithdrawAddressAmino) => _103.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _103.MsgWithdrawDelegatorReward) => _103.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _103.MsgWithdrawDelegatorRewardAmino) => _103.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _103.MsgWithdrawValidatorCommission) => _103.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _103.MsgWithdrawValidatorCommissionAmino) => _103.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _103.MsgFundCommunityPool) => _103.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _103.MsgFundCommunityPoolAmino) => _103.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _103.MsgUpdateParams) => _103.MsgUpdateParamsAmino;
                    fromAmino: (object: _103.MsgUpdateParamsAmino) => _103.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _103.MsgCommunityPoolSpend) => _103.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _103.MsgCommunityPoolSpendAmino) => _103.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _103.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_103.MsgSetWithdrawAddress>): _103.MsgSetWithdrawAddress;
                fromAmino(object: _103.MsgSetWithdrawAddressAmino): _103.MsgSetWithdrawAddress;
                toAmino(message: _103.MsgSetWithdrawAddress): _103.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _103.MsgSetWithdrawAddressAminoMsg): _103.MsgSetWithdrawAddress;
                toAminoMsg(message: _103.MsgSetWithdrawAddress): _103.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _103.MsgSetWithdrawAddressProtoMsg): _103.MsgSetWithdrawAddress;
                toProto(message: _103.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _103.MsgSetWithdrawAddress): _103.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _103.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_103.MsgSetWithdrawAddressResponse>): _103.MsgSetWithdrawAddressResponse;
                fromAmino(_: _103.MsgSetWithdrawAddressResponseAmino): _103.MsgSetWithdrawAddressResponse;
                toAmino(_: _103.MsgSetWithdrawAddressResponse): _103.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _103.MsgSetWithdrawAddressResponseAminoMsg): _103.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _103.MsgSetWithdrawAddressResponse): _103.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _103.MsgSetWithdrawAddressResponseProtoMsg): _103.MsgSetWithdrawAddressResponse;
                toProto(message: _103.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _103.MsgSetWithdrawAddressResponse): _103.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _103.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_103.MsgWithdrawDelegatorReward>): _103.MsgWithdrawDelegatorReward;
                fromAmino(object: _103.MsgWithdrawDelegatorRewardAmino): _103.MsgWithdrawDelegatorReward;
                toAmino(message: _103.MsgWithdrawDelegatorReward): _103.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _103.MsgWithdrawDelegatorRewardAminoMsg): _103.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _103.MsgWithdrawDelegatorReward): _103.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _103.MsgWithdrawDelegatorRewardProtoMsg): _103.MsgWithdrawDelegatorReward;
                toProto(message: _103.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _103.MsgWithdrawDelegatorReward): _103.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _103.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_103.MsgWithdrawDelegatorRewardResponse>): _103.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _103.MsgWithdrawDelegatorRewardResponseAmino): _103.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _103.MsgWithdrawDelegatorRewardResponse): _103.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _103.MsgWithdrawDelegatorRewardResponseAminoMsg): _103.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _103.MsgWithdrawDelegatorRewardResponse): _103.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _103.MsgWithdrawDelegatorRewardResponseProtoMsg): _103.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _103.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _103.MsgWithdrawDelegatorRewardResponse): _103.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _103.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_103.MsgWithdrawValidatorCommission>): _103.MsgWithdrawValidatorCommission;
                fromAmino(object: _103.MsgWithdrawValidatorCommissionAmino): _103.MsgWithdrawValidatorCommission;
                toAmino(message: _103.MsgWithdrawValidatorCommission): _103.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _103.MsgWithdrawValidatorCommissionAminoMsg): _103.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _103.MsgWithdrawValidatorCommission): _103.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _103.MsgWithdrawValidatorCommissionProtoMsg): _103.MsgWithdrawValidatorCommission;
                toProto(message: _103.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _103.MsgWithdrawValidatorCommission): _103.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _103.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_103.MsgWithdrawValidatorCommissionResponse>): _103.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _103.MsgWithdrawValidatorCommissionResponseAmino): _103.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _103.MsgWithdrawValidatorCommissionResponse): _103.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _103.MsgWithdrawValidatorCommissionResponseAminoMsg): _103.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _103.MsgWithdrawValidatorCommissionResponse): _103.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _103.MsgWithdrawValidatorCommissionResponseProtoMsg): _103.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _103.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _103.MsgWithdrawValidatorCommissionResponse): _103.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _103.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgFundCommunityPool;
                fromPartial(object: Partial<_103.MsgFundCommunityPool>): _103.MsgFundCommunityPool;
                fromAmino(object: _103.MsgFundCommunityPoolAmino): _103.MsgFundCommunityPool;
                toAmino(message: _103.MsgFundCommunityPool): _103.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _103.MsgFundCommunityPoolAminoMsg): _103.MsgFundCommunityPool;
                toAminoMsg(message: _103.MsgFundCommunityPool): _103.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _103.MsgFundCommunityPoolProtoMsg): _103.MsgFundCommunityPool;
                toProto(message: _103.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _103.MsgFundCommunityPool): _103.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _103.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_103.MsgFundCommunityPoolResponse>): _103.MsgFundCommunityPoolResponse;
                fromAmino(_: _103.MsgFundCommunityPoolResponseAmino): _103.MsgFundCommunityPoolResponse;
                toAmino(_: _103.MsgFundCommunityPoolResponse): _103.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _103.MsgFundCommunityPoolResponseAminoMsg): _103.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _103.MsgFundCommunityPoolResponse): _103.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _103.MsgFundCommunityPoolResponseProtoMsg): _103.MsgFundCommunityPoolResponse;
                toProto(message: _103.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _103.MsgFundCommunityPoolResponse): _103.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _103.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgUpdateParams;
                fromPartial(object: Partial<_103.MsgUpdateParams>): _103.MsgUpdateParams;
                fromAmino(object: _103.MsgUpdateParamsAmino): _103.MsgUpdateParams;
                toAmino(message: _103.MsgUpdateParams): _103.MsgUpdateParamsAmino;
                fromAminoMsg(object: _103.MsgUpdateParamsAminoMsg): _103.MsgUpdateParams;
                toAminoMsg(message: _103.MsgUpdateParams): _103.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateParamsProtoMsg): _103.MsgUpdateParams;
                toProto(message: _103.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateParams): _103.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _103.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_103.MsgUpdateParamsResponse>): _103.MsgUpdateParamsResponse;
                fromAmino(_: _103.MsgUpdateParamsResponseAmino): _103.MsgUpdateParamsResponse;
                toAmino(_: _103.MsgUpdateParamsResponse): _103.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _103.MsgUpdateParamsResponseAminoMsg): _103.MsgUpdateParamsResponse;
                toAminoMsg(message: _103.MsgUpdateParamsResponse): _103.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateParamsResponseProtoMsg): _103.MsgUpdateParamsResponse;
                toProto(message: _103.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateParamsResponse): _103.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _103.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_103.MsgCommunityPoolSpend>): _103.MsgCommunityPoolSpend;
                fromAmino(object: _103.MsgCommunityPoolSpendAmino): _103.MsgCommunityPoolSpend;
                toAmino(message: _103.MsgCommunityPoolSpend): _103.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _103.MsgCommunityPoolSpendAminoMsg): _103.MsgCommunityPoolSpend;
                toAminoMsg(message: _103.MsgCommunityPoolSpend): _103.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _103.MsgCommunityPoolSpendProtoMsg): _103.MsgCommunityPoolSpend;
                toProto(message: _103.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _103.MsgCommunityPoolSpend): _103.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _103.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_103.MsgCommunityPoolSpendResponse>): _103.MsgCommunityPoolSpendResponse;
                fromAmino(_: _103.MsgCommunityPoolSpendResponseAmino): _103.MsgCommunityPoolSpendResponse;
                toAmino(_: _103.MsgCommunityPoolSpendResponse): _103.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _103.MsgCommunityPoolSpendResponseAminoMsg): _103.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _103.MsgCommunityPoolSpendResponse): _103.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _103.MsgCommunityPoolSpendResponseProtoMsg): _103.MsgCommunityPoolSpendResponse;
                toProto(message: _103.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _103.MsgCommunityPoolSpendResponse): _103.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _102.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _102.QueryParamsRequest;
                fromPartial(_: Partial<_102.QueryParamsRequest>): _102.QueryParamsRequest;
                fromAmino(_: _102.QueryParamsRequestAmino): _102.QueryParamsRequest;
                toAmino(_: _102.QueryParamsRequest): _102.QueryParamsRequestAmino;
                fromAminoMsg(object: _102.QueryParamsRequestAminoMsg): _102.QueryParamsRequest;
                toAminoMsg(message: _102.QueryParamsRequest): _102.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryParamsRequestProtoMsg): _102.QueryParamsRequest;
                toProto(message: _102.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryParamsRequest): _102.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _102.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryParamsResponse;
                fromPartial(object: Partial<_102.QueryParamsResponse>): _102.QueryParamsResponse;
                fromAmino(object: _102.QueryParamsResponseAmino): _102.QueryParamsResponse;
                toAmino(message: _102.QueryParamsResponse): _102.QueryParamsResponseAmino;
                fromAminoMsg(object: _102.QueryParamsResponseAminoMsg): _102.QueryParamsResponse;
                toAminoMsg(message: _102.QueryParamsResponse): _102.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryParamsResponseProtoMsg): _102.QueryParamsResponse;
                toProto(message: _102.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryParamsResponse): _102.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_102.QueryValidatorDistributionInfoRequest>): _102.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _102.QueryValidatorDistributionInfoRequestAmino): _102.QueryValidatorDistributionInfoRequest;
                toAmino(message: _102.QueryValidatorDistributionInfoRequest): _102.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorDistributionInfoRequestAminoMsg): _102.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _102.QueryValidatorDistributionInfoRequest): _102.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorDistributionInfoRequestProtoMsg): _102.QueryValidatorDistributionInfoRequest;
                toProto(message: _102.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorDistributionInfoRequest): _102.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_102.QueryValidatorDistributionInfoResponse>): _102.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _102.QueryValidatorDistributionInfoResponseAmino): _102.QueryValidatorDistributionInfoResponse;
                toAmino(message: _102.QueryValidatorDistributionInfoResponse): _102.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorDistributionInfoResponseAminoMsg): _102.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _102.QueryValidatorDistributionInfoResponse): _102.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorDistributionInfoResponseProtoMsg): _102.QueryValidatorDistributionInfoResponse;
                toProto(message: _102.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorDistributionInfoResponse): _102.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_102.QueryValidatorOutstandingRewardsRequest>): _102.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _102.QueryValidatorOutstandingRewardsRequestAmino): _102.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _102.QueryValidatorOutstandingRewardsRequest): _102.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorOutstandingRewardsRequestAminoMsg): _102.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _102.QueryValidatorOutstandingRewardsRequest): _102.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorOutstandingRewardsRequestProtoMsg): _102.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _102.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorOutstandingRewardsRequest): _102.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_102.QueryValidatorOutstandingRewardsResponse>): _102.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _102.QueryValidatorOutstandingRewardsResponseAmino): _102.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _102.QueryValidatorOutstandingRewardsResponse): _102.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorOutstandingRewardsResponseAminoMsg): _102.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _102.QueryValidatorOutstandingRewardsResponse): _102.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorOutstandingRewardsResponseProtoMsg): _102.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _102.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorOutstandingRewardsResponse): _102.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_102.QueryValidatorCommissionRequest>): _102.QueryValidatorCommissionRequest;
                fromAmino(object: _102.QueryValidatorCommissionRequestAmino): _102.QueryValidatorCommissionRequest;
                toAmino(message: _102.QueryValidatorCommissionRequest): _102.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorCommissionRequestAminoMsg): _102.QueryValidatorCommissionRequest;
                toAminoMsg(message: _102.QueryValidatorCommissionRequest): _102.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorCommissionRequestProtoMsg): _102.QueryValidatorCommissionRequest;
                toProto(message: _102.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorCommissionRequest): _102.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_102.QueryValidatorCommissionResponse>): _102.QueryValidatorCommissionResponse;
                fromAmino(object: _102.QueryValidatorCommissionResponseAmino): _102.QueryValidatorCommissionResponse;
                toAmino(message: _102.QueryValidatorCommissionResponse): _102.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorCommissionResponseAminoMsg): _102.QueryValidatorCommissionResponse;
                toAminoMsg(message: _102.QueryValidatorCommissionResponse): _102.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorCommissionResponseProtoMsg): _102.QueryValidatorCommissionResponse;
                toProto(message: _102.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorCommissionResponse): _102.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_102.QueryValidatorSlashesRequest>): _102.QueryValidatorSlashesRequest;
                fromAmino(object: _102.QueryValidatorSlashesRequestAmino): _102.QueryValidatorSlashesRequest;
                toAmino(message: _102.QueryValidatorSlashesRequest): _102.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorSlashesRequestAminoMsg): _102.QueryValidatorSlashesRequest;
                toAminoMsg(message: _102.QueryValidatorSlashesRequest): _102.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorSlashesRequestProtoMsg): _102.QueryValidatorSlashesRequest;
                toProto(message: _102.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorSlashesRequest): _102.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_102.QueryValidatorSlashesResponse>): _102.QueryValidatorSlashesResponse;
                fromAmino(object: _102.QueryValidatorSlashesResponseAmino): _102.QueryValidatorSlashesResponse;
                toAmino(message: _102.QueryValidatorSlashesResponse): _102.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorSlashesResponseAminoMsg): _102.QueryValidatorSlashesResponse;
                toAminoMsg(message: _102.QueryValidatorSlashesResponse): _102.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorSlashesResponseProtoMsg): _102.QueryValidatorSlashesResponse;
                toProto(message: _102.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorSlashesResponse): _102.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_102.QueryDelegationRewardsRequest>): _102.QueryDelegationRewardsRequest;
                fromAmino(object: _102.QueryDelegationRewardsRequestAmino): _102.QueryDelegationRewardsRequest;
                toAmino(message: _102.QueryDelegationRewardsRequest): _102.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _102.QueryDelegationRewardsRequestAminoMsg): _102.QueryDelegationRewardsRequest;
                toAminoMsg(message: _102.QueryDelegationRewardsRequest): _102.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegationRewardsRequestProtoMsg): _102.QueryDelegationRewardsRequest;
                toProto(message: _102.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegationRewardsRequest): _102.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_102.QueryDelegationRewardsResponse>): _102.QueryDelegationRewardsResponse;
                fromAmino(object: _102.QueryDelegationRewardsResponseAmino): _102.QueryDelegationRewardsResponse;
                toAmino(message: _102.QueryDelegationRewardsResponse): _102.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _102.QueryDelegationRewardsResponseAminoMsg): _102.QueryDelegationRewardsResponse;
                toAminoMsg(message: _102.QueryDelegationRewardsResponse): _102.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegationRewardsResponseProtoMsg): _102.QueryDelegationRewardsResponse;
                toProto(message: _102.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegationRewardsResponse): _102.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_102.QueryDelegationTotalRewardsRequest>): _102.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _102.QueryDelegationTotalRewardsRequestAmino): _102.QueryDelegationTotalRewardsRequest;
                toAmino(message: _102.QueryDelegationTotalRewardsRequest): _102.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _102.QueryDelegationTotalRewardsRequestAminoMsg): _102.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _102.QueryDelegationTotalRewardsRequest): _102.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegationTotalRewardsRequestProtoMsg): _102.QueryDelegationTotalRewardsRequest;
                toProto(message: _102.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegationTotalRewardsRequest): _102.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_102.QueryDelegationTotalRewardsResponse>): _102.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _102.QueryDelegationTotalRewardsResponseAmino): _102.QueryDelegationTotalRewardsResponse;
                toAmino(message: _102.QueryDelegationTotalRewardsResponse): _102.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _102.QueryDelegationTotalRewardsResponseAminoMsg): _102.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _102.QueryDelegationTotalRewardsResponse): _102.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegationTotalRewardsResponseProtoMsg): _102.QueryDelegationTotalRewardsResponse;
                toProto(message: _102.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegationTotalRewardsResponse): _102.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorsRequest>): _102.QueryDelegatorValidatorsRequest;
                fromAmino(object: _102.QueryDelegatorValidatorsRequestAmino): _102.QueryDelegatorValidatorsRequest;
                toAmino(message: _102.QueryDelegatorValidatorsRequest): _102.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _102.QueryDelegatorValidatorsRequestAminoMsg): _102.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _102.QueryDelegatorValidatorsRequest): _102.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorValidatorsRequestProtoMsg): _102.QueryDelegatorValidatorsRequest;
                toProto(message: _102.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorValidatorsRequest): _102.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorsResponse>): _102.QueryDelegatorValidatorsResponse;
                fromAmino(object: _102.QueryDelegatorValidatorsResponseAmino): _102.QueryDelegatorValidatorsResponse;
                toAmino(message: _102.QueryDelegatorValidatorsResponse): _102.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _102.QueryDelegatorValidatorsResponseAminoMsg): _102.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _102.QueryDelegatorValidatorsResponse): _102.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorValidatorsResponseProtoMsg): _102.QueryDelegatorValidatorsResponse;
                toProto(message: _102.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorValidatorsResponse): _102.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_102.QueryDelegatorWithdrawAddressRequest>): _102.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _102.QueryDelegatorWithdrawAddressRequestAmino): _102.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _102.QueryDelegatorWithdrawAddressRequest): _102.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _102.QueryDelegatorWithdrawAddressRequestAminoMsg): _102.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _102.QueryDelegatorWithdrawAddressRequest): _102.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorWithdrawAddressRequestProtoMsg): _102.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _102.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorWithdrawAddressRequest): _102.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_102.QueryDelegatorWithdrawAddressResponse>): _102.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _102.QueryDelegatorWithdrawAddressResponseAmino): _102.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _102.QueryDelegatorWithdrawAddressResponse): _102.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _102.QueryDelegatorWithdrawAddressResponseAminoMsg): _102.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _102.QueryDelegatorWithdrawAddressResponse): _102.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorWithdrawAddressResponseProtoMsg): _102.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _102.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorWithdrawAddressResponse): _102.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _102.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _102.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_102.QueryCommunityPoolRequest>): _102.QueryCommunityPoolRequest;
                fromAmino(_: _102.QueryCommunityPoolRequestAmino): _102.QueryCommunityPoolRequest;
                toAmino(_: _102.QueryCommunityPoolRequest): _102.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _102.QueryCommunityPoolRequestAminoMsg): _102.QueryCommunityPoolRequest;
                toAminoMsg(message: _102.QueryCommunityPoolRequest): _102.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _102.QueryCommunityPoolRequestProtoMsg): _102.QueryCommunityPoolRequest;
                toProto(message: _102.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _102.QueryCommunityPoolRequest): _102.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _102.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_102.QueryCommunityPoolResponse>): _102.QueryCommunityPoolResponse;
                fromAmino(object: _102.QueryCommunityPoolResponseAmino): _102.QueryCommunityPoolResponse;
                toAmino(message: _102.QueryCommunityPoolResponse): _102.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _102.QueryCommunityPoolResponseAminoMsg): _102.QueryCommunityPoolResponse;
                toAminoMsg(message: _102.QueryCommunityPoolResponse): _102.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _102.QueryCommunityPoolResponseProtoMsg): _102.QueryCommunityPoolResponse;
                toProto(message: _102.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _102.QueryCommunityPoolResponse): _102.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _101.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_101.DelegatorWithdrawInfo>): _101.DelegatorWithdrawInfo;
                fromAmino(object: _101.DelegatorWithdrawInfoAmino): _101.DelegatorWithdrawInfo;
                toAmino(message: _101.DelegatorWithdrawInfo): _101.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _101.DelegatorWithdrawInfoAminoMsg): _101.DelegatorWithdrawInfo;
                toAminoMsg(message: _101.DelegatorWithdrawInfo): _101.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _101.DelegatorWithdrawInfoProtoMsg): _101.DelegatorWithdrawInfo;
                toProto(message: _101.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _101.DelegatorWithdrawInfo): _101.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _101.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_101.ValidatorOutstandingRewardsRecord>): _101.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _101.ValidatorOutstandingRewardsRecordAmino): _101.ValidatorOutstandingRewardsRecord;
                toAmino(message: _101.ValidatorOutstandingRewardsRecord): _101.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _101.ValidatorOutstandingRewardsRecordAminoMsg): _101.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _101.ValidatorOutstandingRewardsRecord): _101.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _101.ValidatorOutstandingRewardsRecordProtoMsg): _101.ValidatorOutstandingRewardsRecord;
                toProto(message: _101.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _101.ValidatorOutstandingRewardsRecord): _101.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _101.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_101.ValidatorAccumulatedCommissionRecord>): _101.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _101.ValidatorAccumulatedCommissionRecordAmino): _101.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _101.ValidatorAccumulatedCommissionRecord): _101.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _101.ValidatorAccumulatedCommissionRecordAminoMsg): _101.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _101.ValidatorAccumulatedCommissionRecord): _101.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _101.ValidatorAccumulatedCommissionRecordProtoMsg): _101.ValidatorAccumulatedCommissionRecord;
                toProto(message: _101.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _101.ValidatorAccumulatedCommissionRecord): _101.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _101.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_101.ValidatorHistoricalRewardsRecord>): _101.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _101.ValidatorHistoricalRewardsRecordAmino): _101.ValidatorHistoricalRewardsRecord;
                toAmino(message: _101.ValidatorHistoricalRewardsRecord): _101.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _101.ValidatorHistoricalRewardsRecordAminoMsg): _101.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _101.ValidatorHistoricalRewardsRecord): _101.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _101.ValidatorHistoricalRewardsRecordProtoMsg): _101.ValidatorHistoricalRewardsRecord;
                toProto(message: _101.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _101.ValidatorHistoricalRewardsRecord): _101.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _101.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_101.ValidatorCurrentRewardsRecord>): _101.ValidatorCurrentRewardsRecord;
                fromAmino(object: _101.ValidatorCurrentRewardsRecordAmino): _101.ValidatorCurrentRewardsRecord;
                toAmino(message: _101.ValidatorCurrentRewardsRecord): _101.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _101.ValidatorCurrentRewardsRecordAminoMsg): _101.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _101.ValidatorCurrentRewardsRecord): _101.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _101.ValidatorCurrentRewardsRecordProtoMsg): _101.ValidatorCurrentRewardsRecord;
                toProto(message: _101.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _101.ValidatorCurrentRewardsRecord): _101.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _101.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_101.DelegatorStartingInfoRecord>): _101.DelegatorStartingInfoRecord;
                fromAmino(object: _101.DelegatorStartingInfoRecordAmino): _101.DelegatorStartingInfoRecord;
                toAmino(message: _101.DelegatorStartingInfoRecord): _101.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _101.DelegatorStartingInfoRecordAminoMsg): _101.DelegatorStartingInfoRecord;
                toAminoMsg(message: _101.DelegatorStartingInfoRecord): _101.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _101.DelegatorStartingInfoRecordProtoMsg): _101.DelegatorStartingInfoRecord;
                toProto(message: _101.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _101.DelegatorStartingInfoRecord): _101.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _101.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_101.ValidatorSlashEventRecord>): _101.ValidatorSlashEventRecord;
                fromAmino(object: _101.ValidatorSlashEventRecordAmino): _101.ValidatorSlashEventRecord;
                toAmino(message: _101.ValidatorSlashEventRecord): _101.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _101.ValidatorSlashEventRecordAminoMsg): _101.ValidatorSlashEventRecord;
                toAminoMsg(message: _101.ValidatorSlashEventRecord): _101.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _101.ValidatorSlashEventRecordProtoMsg): _101.ValidatorSlashEventRecord;
                toProto(message: _101.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _101.ValidatorSlashEventRecord): _101.ValidatorSlashEventRecordProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _100.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_100.ValidatorHistoricalRewards>): _100.ValidatorHistoricalRewards;
                fromAmino(object: _100.ValidatorHistoricalRewardsAmino): _100.ValidatorHistoricalRewards;
                toAmino(message: _100.ValidatorHistoricalRewards): _100.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _100.ValidatorHistoricalRewardsAminoMsg): _100.ValidatorHistoricalRewards;
                toAminoMsg(message: _100.ValidatorHistoricalRewards): _100.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _100.ValidatorHistoricalRewardsProtoMsg): _100.ValidatorHistoricalRewards;
                toProto(message: _100.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _100.ValidatorHistoricalRewards): _100.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _100.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ValidatorCurrentRewards;
                fromPartial(object: Partial<_100.ValidatorCurrentRewards>): _100.ValidatorCurrentRewards;
                fromAmino(object: _100.ValidatorCurrentRewardsAmino): _100.ValidatorCurrentRewards;
                toAmino(message: _100.ValidatorCurrentRewards): _100.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _100.ValidatorCurrentRewardsAminoMsg): _100.ValidatorCurrentRewards;
                toAminoMsg(message: _100.ValidatorCurrentRewards): _100.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _100.ValidatorCurrentRewardsProtoMsg): _100.ValidatorCurrentRewards;
                toProto(message: _100.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _100.ValidatorCurrentRewards): _100.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _100.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_100.ValidatorAccumulatedCommission>): _100.ValidatorAccumulatedCommission;
                fromAmino(object: _100.ValidatorAccumulatedCommissionAmino): _100.ValidatorAccumulatedCommission;
                toAmino(message: _100.ValidatorAccumulatedCommission): _100.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _100.ValidatorAccumulatedCommissionAminoMsg): _100.ValidatorAccumulatedCommission;
                toAminoMsg(message: _100.ValidatorAccumulatedCommission): _100.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _100.ValidatorAccumulatedCommissionProtoMsg): _100.ValidatorAccumulatedCommission;
                toProto(message: _100.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _100.ValidatorAccumulatedCommission): _100.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _100.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_100.ValidatorOutstandingRewards>): _100.ValidatorOutstandingRewards;
                fromAmino(object: _100.ValidatorOutstandingRewardsAmino): _100.ValidatorOutstandingRewards;
                toAmino(message: _100.ValidatorOutstandingRewards): _100.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _100.ValidatorOutstandingRewardsAminoMsg): _100.ValidatorOutstandingRewards;
                toAminoMsg(message: _100.ValidatorOutstandingRewards): _100.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _100.ValidatorOutstandingRewardsProtoMsg): _100.ValidatorOutstandingRewards;
                toProto(message: _100.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _100.ValidatorOutstandingRewards): _100.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _100.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ValidatorSlashEvent;
                fromPartial(object: Partial<_100.ValidatorSlashEvent>): _100.ValidatorSlashEvent;
                fromAmino(object: _100.ValidatorSlashEventAmino): _100.ValidatorSlashEvent;
                toAmino(message: _100.ValidatorSlashEvent): _100.ValidatorSlashEventAmino;
                fromAminoMsg(object: _100.ValidatorSlashEventAminoMsg): _100.ValidatorSlashEvent;
                toAminoMsg(message: _100.ValidatorSlashEvent): _100.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _100.ValidatorSlashEventProtoMsg): _100.ValidatorSlashEvent;
                toProto(message: _100.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _100.ValidatorSlashEvent): _100.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _100.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ValidatorSlashEvents;
                fromPartial(object: Partial<_100.ValidatorSlashEvents>): _100.ValidatorSlashEvents;
                fromAmino(object: _100.ValidatorSlashEventsAmino): _100.ValidatorSlashEvents;
                toAmino(message: _100.ValidatorSlashEvents): _100.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _100.ValidatorSlashEventsAminoMsg): _100.ValidatorSlashEvents;
                toAminoMsg(message: _100.ValidatorSlashEvents): _100.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _100.ValidatorSlashEventsProtoMsg): _100.ValidatorSlashEvents;
                toProto(message: _100.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _100.ValidatorSlashEvents): _100.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _100.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.FeePool;
                fromPartial(object: Partial<_100.FeePool>): _100.FeePool;
                fromAmino(object: _100.FeePoolAmino): _100.FeePool;
                toAmino(message: _100.FeePool): _100.FeePoolAmino;
                fromAminoMsg(object: _100.FeePoolAminoMsg): _100.FeePool;
                toAminoMsg(message: _100.FeePool): _100.FeePoolAminoMsg;
                fromProtoMsg(message: _100.FeePoolProtoMsg): _100.FeePool;
                toProto(message: _100.FeePool): Uint8Array;
                toProtoMsg(message: _100.FeePool): _100.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _100.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_100.CommunityPoolSpendProposal>): _100.CommunityPoolSpendProposal;
                fromAmino(object: _100.CommunityPoolSpendProposalAmino): _100.CommunityPoolSpendProposal;
                toAmino(message: _100.CommunityPoolSpendProposal): _100.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _100.CommunityPoolSpendProposalAminoMsg): _100.CommunityPoolSpendProposal;
                toAminoMsg(message: _100.CommunityPoolSpendProposal): _100.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _100.CommunityPoolSpendProposalProtoMsg): _100.CommunityPoolSpendProposal;
                toProto(message: _100.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _100.CommunityPoolSpendProposal): _100.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _100.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.DelegatorStartingInfo;
                fromPartial(object: Partial<_100.DelegatorStartingInfo>): _100.DelegatorStartingInfo;
                fromAmino(object: _100.DelegatorStartingInfoAmino): _100.DelegatorStartingInfo;
                toAmino(message: _100.DelegatorStartingInfo): _100.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _100.DelegatorStartingInfoAminoMsg): _100.DelegatorStartingInfo;
                toAminoMsg(message: _100.DelegatorStartingInfo): _100.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _100.DelegatorStartingInfoProtoMsg): _100.DelegatorStartingInfo;
                toProto(message: _100.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _100.DelegatorStartingInfo): _100.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _100.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.DelegationDelegatorReward;
                fromPartial(object: Partial<_100.DelegationDelegatorReward>): _100.DelegationDelegatorReward;
                fromAmino(object: _100.DelegationDelegatorRewardAmino): _100.DelegationDelegatorReward;
                toAmino(message: _100.DelegationDelegatorReward): _100.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _100.DelegationDelegatorRewardAminoMsg): _100.DelegationDelegatorReward;
                toAminoMsg(message: _100.DelegationDelegatorReward): _100.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _100.DelegationDelegatorRewardProtoMsg): _100.DelegationDelegatorReward;
                toProto(message: _100.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _100.DelegationDelegatorReward): _100.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _100.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_100.CommunityPoolSpendProposalWithDeposit>): _100.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _100.CommunityPoolSpendProposalWithDepositAmino): _100.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _100.CommunityPoolSpendProposalWithDeposit): _100.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _100.CommunityPoolSpendProposalWithDepositAminoMsg): _100.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _100.CommunityPoolSpendProposalWithDeposit): _100.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _100.CommunityPoolSpendProposalWithDepositProtoMsg): _100.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _100.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _100.CommunityPoolSpendProposalWithDeposit): _100.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
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
        const v1beta1: {
            MsgClientImpl: typeof _309.MsgClientImpl;
            QueryClientImpl: typeof _290.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _107.QueryEvidenceRequest): Promise<_107.QueryEvidenceResponse>;
                allEvidence(request?: _107.QueryAllEvidenceRequest): Promise<_107.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _269.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _108.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _108.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _108.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _108.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _108.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _108.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _108.MsgSubmitEvidence) => _108.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _108.MsgSubmitEvidenceAmino) => _108.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _108.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgSubmitEvidence;
                fromPartial(object: Partial<_108.MsgSubmitEvidence>): _108.MsgSubmitEvidence;
                fromAmino(object: _108.MsgSubmitEvidenceAmino): _108.MsgSubmitEvidence;
                toAmino(message: _108.MsgSubmitEvidence): _108.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _108.MsgSubmitEvidenceAminoMsg): _108.MsgSubmitEvidence;
                toAminoMsg(message: _108.MsgSubmitEvidence): _108.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _108.MsgSubmitEvidenceProtoMsg): _108.MsgSubmitEvidence;
                toProto(message: _108.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _108.MsgSubmitEvidence): _108.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _108.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_108.MsgSubmitEvidenceResponse>): _108.MsgSubmitEvidenceResponse;
                fromAmino(object: _108.MsgSubmitEvidenceResponseAmino): _108.MsgSubmitEvidenceResponse;
                toAmino(message: _108.MsgSubmitEvidenceResponse): _108.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _108.MsgSubmitEvidenceResponseAminoMsg): _108.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _108.MsgSubmitEvidenceResponse): _108.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _108.MsgSubmitEvidenceResponseProtoMsg): _108.MsgSubmitEvidenceResponse;
                toProto(message: _108.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _108.MsgSubmitEvidenceResponse): _108.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _107.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryEvidenceRequest;
                fromPartial(object: Partial<_107.QueryEvidenceRequest>): _107.QueryEvidenceRequest;
                fromAmino(object: _107.QueryEvidenceRequestAmino): _107.QueryEvidenceRequest;
                toAmino(message: _107.QueryEvidenceRequest): _107.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _107.QueryEvidenceRequestAminoMsg): _107.QueryEvidenceRequest;
                toAminoMsg(message: _107.QueryEvidenceRequest): _107.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _107.QueryEvidenceRequestProtoMsg): _107.QueryEvidenceRequest;
                toProto(message: _107.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _107.QueryEvidenceRequest): _107.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _107.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryEvidenceResponse;
                fromPartial(object: Partial<_107.QueryEvidenceResponse>): _107.QueryEvidenceResponse;
                fromAmino(object: _107.QueryEvidenceResponseAmino): _107.QueryEvidenceResponse;
                toAmino(message: _107.QueryEvidenceResponse): _107.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _107.QueryEvidenceResponseAminoMsg): _107.QueryEvidenceResponse;
                toAminoMsg(message: _107.QueryEvidenceResponse): _107.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _107.QueryEvidenceResponseProtoMsg): _107.QueryEvidenceResponse;
                toProto(message: _107.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _107.QueryEvidenceResponse): _107.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _107.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_107.QueryAllEvidenceRequest>): _107.QueryAllEvidenceRequest;
                fromAmino(object: _107.QueryAllEvidenceRequestAmino): _107.QueryAllEvidenceRequest;
                toAmino(message: _107.QueryAllEvidenceRequest): _107.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _107.QueryAllEvidenceRequestAminoMsg): _107.QueryAllEvidenceRequest;
                toAminoMsg(message: _107.QueryAllEvidenceRequest): _107.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _107.QueryAllEvidenceRequestProtoMsg): _107.QueryAllEvidenceRequest;
                toProto(message: _107.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _107.QueryAllEvidenceRequest): _107.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _107.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_107.QueryAllEvidenceResponse>): _107.QueryAllEvidenceResponse;
                fromAmino(object: _107.QueryAllEvidenceResponseAmino): _107.QueryAllEvidenceResponse;
                toAmino(message: _107.QueryAllEvidenceResponse): _107.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _107.QueryAllEvidenceResponseAminoMsg): _107.QueryAllEvidenceResponse;
                toAminoMsg(message: _107.QueryAllEvidenceResponse): _107.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _107.QueryAllEvidenceResponseProtoMsg): _107.QueryAllEvidenceResponse;
                toProto(message: _107.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _107.QueryAllEvidenceResponse): _107.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _105.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.Equivocation;
                fromPartial(object: Partial<_105.Equivocation>): _105.Equivocation;
                fromAmino(object: _105.EquivocationAmino): _105.Equivocation;
                toAmino(message: _105.Equivocation): _105.EquivocationAmino;
                fromAminoMsg(object: _105.EquivocationAminoMsg): _105.Equivocation;
                toAminoMsg(message: _105.Equivocation): _105.EquivocationAminoMsg;
                fromProtoMsg(message: _105.EquivocationProtoMsg): _105.Equivocation;
                toProto(message: _105.Equivocation): Uint8Array;
                toProtoMsg(message: _105.Equivocation): _105.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _109.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.Module;
                    fromPartial(_: Partial<_109.Module>): _109.Module;
                    fromAmino(_: _109.ModuleAmino): _109.Module;
                    toAmino(_: _109.Module): _109.ModuleAmino;
                    fromAminoMsg(object: _109.ModuleAminoMsg): _109.Module;
                    toAminoMsg(message: _109.Module): _109.ModuleAminoMsg;
                    fromProtoMsg(message: _109.ModuleProtoMsg): _109.Module;
                    toProto(message: _109.Module): Uint8Array;
                    toProtoMsg(message: _109.Module): _109.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _310.MsgClientImpl;
            QueryClientImpl: typeof _291.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _112.QueryAllowanceRequest): Promise<_112.QueryAllowanceResponse>;
                allowances(request: _112.QueryAllowancesRequest): Promise<_112.QueryAllowancesResponse>;
                allowancesByGranter(request: _112.QueryAllowancesByGranterRequest): Promise<_112.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _270.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _113.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _113.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _113.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _113.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _113.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _113.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _113.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _113.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _113.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _113.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _113.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _113.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _113.MsgGrantAllowance) => _113.MsgGrantAllowanceAmino;
                    fromAmino: (object: _113.MsgGrantAllowanceAmino) => _113.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _113.MsgRevokeAllowance) => _113.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _113.MsgRevokeAllowanceAmino) => _113.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _113.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgGrantAllowance;
                fromPartial(object: Partial<_113.MsgGrantAllowance>): _113.MsgGrantAllowance;
                fromAmino(object: _113.MsgGrantAllowanceAmino): _113.MsgGrantAllowance;
                toAmino(message: _113.MsgGrantAllowance): _113.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _113.MsgGrantAllowanceAminoMsg): _113.MsgGrantAllowance;
                toAminoMsg(message: _113.MsgGrantAllowance): _113.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _113.MsgGrantAllowanceProtoMsg): _113.MsgGrantAllowance;
                toProto(message: _113.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _113.MsgGrantAllowance): _113.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _113.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_113.MsgGrantAllowanceResponse>): _113.MsgGrantAllowanceResponse;
                fromAmino(_: _113.MsgGrantAllowanceResponseAmino): _113.MsgGrantAllowanceResponse;
                toAmino(_: _113.MsgGrantAllowanceResponse): _113.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _113.MsgGrantAllowanceResponseAminoMsg): _113.MsgGrantAllowanceResponse;
                toAminoMsg(message: _113.MsgGrantAllowanceResponse): _113.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _113.MsgGrantAllowanceResponseProtoMsg): _113.MsgGrantAllowanceResponse;
                toProto(message: _113.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _113.MsgGrantAllowanceResponse): _113.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _113.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgRevokeAllowance;
                fromPartial(object: Partial<_113.MsgRevokeAllowance>): _113.MsgRevokeAllowance;
                fromAmino(object: _113.MsgRevokeAllowanceAmino): _113.MsgRevokeAllowance;
                toAmino(message: _113.MsgRevokeAllowance): _113.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _113.MsgRevokeAllowanceAminoMsg): _113.MsgRevokeAllowance;
                toAminoMsg(message: _113.MsgRevokeAllowance): _113.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _113.MsgRevokeAllowanceProtoMsg): _113.MsgRevokeAllowance;
                toProto(message: _113.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _113.MsgRevokeAllowance): _113.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _113.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_113.MsgRevokeAllowanceResponse>): _113.MsgRevokeAllowanceResponse;
                fromAmino(_: _113.MsgRevokeAllowanceResponseAmino): _113.MsgRevokeAllowanceResponse;
                toAmino(_: _113.MsgRevokeAllowanceResponse): _113.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _113.MsgRevokeAllowanceResponseAminoMsg): _113.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _113.MsgRevokeAllowanceResponse): _113.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _113.MsgRevokeAllowanceResponseProtoMsg): _113.MsgRevokeAllowanceResponse;
                toProto(message: _113.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _113.MsgRevokeAllowanceResponse): _113.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _110.BasicAllowance | _110.PeriodicAllowance | _110.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _112.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAllowanceRequest;
                fromPartial(object: Partial<_112.QueryAllowanceRequest>): _112.QueryAllowanceRequest;
                fromAmino(object: _112.QueryAllowanceRequestAmino): _112.QueryAllowanceRequest;
                toAmino(message: _112.QueryAllowanceRequest): _112.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _112.QueryAllowanceRequestAminoMsg): _112.QueryAllowanceRequest;
                toAminoMsg(message: _112.QueryAllowanceRequest): _112.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _112.QueryAllowanceRequestProtoMsg): _112.QueryAllowanceRequest;
                toProto(message: _112.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _112.QueryAllowanceRequest): _112.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _112.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAllowanceResponse;
                fromPartial(object: Partial<_112.QueryAllowanceResponse>): _112.QueryAllowanceResponse;
                fromAmino(object: _112.QueryAllowanceResponseAmino): _112.QueryAllowanceResponse;
                toAmino(message: _112.QueryAllowanceResponse): _112.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _112.QueryAllowanceResponseAminoMsg): _112.QueryAllowanceResponse;
                toAminoMsg(message: _112.QueryAllowanceResponse): _112.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _112.QueryAllowanceResponseProtoMsg): _112.QueryAllowanceResponse;
                toProto(message: _112.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _112.QueryAllowanceResponse): _112.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _112.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAllowancesRequest;
                fromPartial(object: Partial<_112.QueryAllowancesRequest>): _112.QueryAllowancesRequest;
                fromAmino(object: _112.QueryAllowancesRequestAmino): _112.QueryAllowancesRequest;
                toAmino(message: _112.QueryAllowancesRequest): _112.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _112.QueryAllowancesRequestAminoMsg): _112.QueryAllowancesRequest;
                toAminoMsg(message: _112.QueryAllowancesRequest): _112.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _112.QueryAllowancesRequestProtoMsg): _112.QueryAllowancesRequest;
                toProto(message: _112.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _112.QueryAllowancesRequest): _112.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _112.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAllowancesResponse;
                fromPartial(object: Partial<_112.QueryAllowancesResponse>): _112.QueryAllowancesResponse;
                fromAmino(object: _112.QueryAllowancesResponseAmino): _112.QueryAllowancesResponse;
                toAmino(message: _112.QueryAllowancesResponse): _112.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _112.QueryAllowancesResponseAminoMsg): _112.QueryAllowancesResponse;
                toAminoMsg(message: _112.QueryAllowancesResponse): _112.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _112.QueryAllowancesResponseProtoMsg): _112.QueryAllowancesResponse;
                toProto(message: _112.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _112.QueryAllowancesResponse): _112.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _112.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_112.QueryAllowancesByGranterRequest>): _112.QueryAllowancesByGranterRequest;
                fromAmino(object: _112.QueryAllowancesByGranterRequestAmino): _112.QueryAllowancesByGranterRequest;
                toAmino(message: _112.QueryAllowancesByGranterRequest): _112.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _112.QueryAllowancesByGranterRequestAminoMsg): _112.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _112.QueryAllowancesByGranterRequest): _112.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _112.QueryAllowancesByGranterRequestProtoMsg): _112.QueryAllowancesByGranterRequest;
                toProto(message: _112.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _112.QueryAllowancesByGranterRequest): _112.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _112.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_112.QueryAllowancesByGranterResponse>): _112.QueryAllowancesByGranterResponse;
                fromAmino(object: _112.QueryAllowancesByGranterResponseAmino): _112.QueryAllowancesByGranterResponse;
                toAmino(message: _112.QueryAllowancesByGranterResponse): _112.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _112.QueryAllowancesByGranterResponseAminoMsg): _112.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _112.QueryAllowancesByGranterResponse): _112.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _112.QueryAllowancesByGranterResponseProtoMsg): _112.QueryAllowancesByGranterResponse;
                toProto(message: _112.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _112.QueryAllowancesByGranterResponse): _112.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _110.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.BasicAllowance;
                fromPartial(object: Partial<_110.BasicAllowance>): _110.BasicAllowance;
                fromAmino(object: _110.BasicAllowanceAmino): _110.BasicAllowance;
                toAmino(message: _110.BasicAllowance): _110.BasicAllowanceAmino;
                fromAminoMsg(object: _110.BasicAllowanceAminoMsg): _110.BasicAllowance;
                toAminoMsg(message: _110.BasicAllowance): _110.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _110.BasicAllowanceProtoMsg): _110.BasicAllowance;
                toProto(message: _110.BasicAllowance): Uint8Array;
                toProtoMsg(message: _110.BasicAllowance): _110.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _110.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.PeriodicAllowance;
                fromPartial(object: Partial<_110.PeriodicAllowance>): _110.PeriodicAllowance;
                fromAmino(object: _110.PeriodicAllowanceAmino): _110.PeriodicAllowance;
                toAmino(message: _110.PeriodicAllowance): _110.PeriodicAllowanceAmino;
                fromAminoMsg(object: _110.PeriodicAllowanceAminoMsg): _110.PeriodicAllowance;
                toAminoMsg(message: _110.PeriodicAllowance): _110.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _110.PeriodicAllowanceProtoMsg): _110.PeriodicAllowance;
                toProto(message: _110.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _110.PeriodicAllowance): _110.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _110.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.AllowedMsgAllowance;
                fromPartial(object: Partial<_110.AllowedMsgAllowance>): _110.AllowedMsgAllowance;
                fromAmino(object: _110.AllowedMsgAllowanceAmino): _110.AllowedMsgAllowance;
                toAmino(message: _110.AllowedMsgAllowance): _110.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _110.AllowedMsgAllowanceAminoMsg): _110.AllowedMsgAllowance;
                toAminoMsg(message: _110.AllowedMsgAllowance): _110.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _110.AllowedMsgAllowanceProtoMsg): _110.AllowedMsgAllowance;
                toProto(message: _110.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _110.AllowedMsgAllowance): _110.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _110.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Grant;
                fromPartial(object: Partial<_110.Grant>): _110.Grant;
                fromAmino(object: _110.GrantAmino): _110.Grant;
                toAmino(message: _110.Grant): _110.GrantAmino;
                fromAminoMsg(object: _110.GrantAminoMsg): _110.Grant;
                toAminoMsg(message: _110.Grant): _110.GrantAminoMsg;
                fromProtoMsg(message: _110.GrantProtoMsg): _110.Grant;
                toProto(message: _110.Grant): Uint8Array;
                toProtoMsg(message: _110.Grant): _110.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _114.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _114.Module;
                    fromPartial(_: Partial<_114.Module>): _114.Module;
                    fromAmino(_: _114.ModuleAmino): _114.Module;
                    toAmino(_: _114.Module): _114.ModuleAmino;
                    fromAminoMsg(object: _114.ModuleAminoMsg): _114.Module;
                    toAminoMsg(message: _114.Module): _114.ModuleAminoMsg;
                    fromProtoMsg(message: _114.ModuleProtoMsg): _114.Module;
                    toProto(message: _114.Module): Uint8Array;
                    toProtoMsg(message: _114.Module): _114.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
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
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _116.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.Module;
                    fromPartial(object: Partial<_116.Module>): _116.Module;
                    fromAmino(object: _116.ModuleAmino): _116.Module;
                    toAmino(message: _116.Module): _116.ModuleAmino;
                    fromAminoMsg(object: _116.ModuleAminoMsg): _116.Module;
                    toAminoMsg(message: _116.Module): _116.ModuleAminoMsg;
                    fromProtoMsg(message: _116.ModuleProtoMsg): _116.Module;
                    toProto(message: _116.Module): Uint8Array;
                    toProtoMsg(message: _116.Module): _116.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _311.MsgClientImpl;
            QueryClientImpl: typeof _292.QueryClientImpl;
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
            LCDQueryClient: typeof _271.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _120.MsgExecLegacyContent): {
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
                    updateParams(value: _120.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _120.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _120.MsgExecLegacyContent;
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
                    updateParams(value: _120.MsgUpdateParams): {
                        typeUrl: string;
                        value: _120.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _120.MsgExecLegacyContent;
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
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _120.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _120.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _120.MsgExecLegacyContent;
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
                    updateParams(value: _120.MsgUpdateParams): {
                        typeUrl: string;
                        value: _120.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _120.MsgSubmitProposal) => _120.MsgSubmitProposalAmino;
                    fromAmino: (object: _120.MsgSubmitProposalAmino) => _120.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _120.MsgExecLegacyContent) => _120.MsgExecLegacyContentAmino;
                    fromAmino: (object: _120.MsgExecLegacyContentAmino) => _120.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _120.MsgVote) => _120.MsgVoteAmino;
                    fromAmino: (object: _120.MsgVoteAmino) => _120.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _120.MsgVoteWeighted) => _120.MsgVoteWeightedAmino;
                    fromAmino: (object: _120.MsgVoteWeightedAmino) => _120.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _120.MsgDeposit) => _120.MsgDepositAmino;
                    fromAmino: (object: _120.MsgDepositAmino) => _120.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _120.MsgUpdateParams) => _120.MsgUpdateParamsAmino;
                    fromAmino: (object: _120.MsgUpdateParamsAmino) => _120.MsgUpdateParams;
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
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _120.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgExecLegacyContent;
                fromPartial(object: Partial<_120.MsgExecLegacyContent>): _120.MsgExecLegacyContent;
                fromAmino(object: _120.MsgExecLegacyContentAmino): _120.MsgExecLegacyContent;
                toAmino(message: _120.MsgExecLegacyContent): _120.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _120.MsgExecLegacyContentAminoMsg): _120.MsgExecLegacyContent;
                toAminoMsg(message: _120.MsgExecLegacyContent): _120.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _120.MsgExecLegacyContentProtoMsg): _120.MsgExecLegacyContent;
                toProto(message: _120.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _120.MsgExecLegacyContent): _120.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _120.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_120.MsgExecLegacyContentResponse>): _120.MsgExecLegacyContentResponse;
                fromAmino(_: _120.MsgExecLegacyContentResponseAmino): _120.MsgExecLegacyContentResponse;
                toAmino(_: _120.MsgExecLegacyContentResponse): _120.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _120.MsgExecLegacyContentResponseAminoMsg): _120.MsgExecLegacyContentResponse;
                toAminoMsg(message: _120.MsgExecLegacyContentResponse): _120.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _120.MsgExecLegacyContentResponseProtoMsg): _120.MsgExecLegacyContentResponse;
                toProto(message: _120.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _120.MsgExecLegacyContentResponse): _120.MsgExecLegacyContentResponseProtoMsg;
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
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _120.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgUpdateParams;
                fromPartial(object: Partial<_120.MsgUpdateParams>): _120.MsgUpdateParams;
                fromAmino(object: _120.MsgUpdateParamsAmino): _120.MsgUpdateParams;
                toAmino(message: _120.MsgUpdateParams): _120.MsgUpdateParamsAmino;
                fromAminoMsg(object: _120.MsgUpdateParamsAminoMsg): _120.MsgUpdateParams;
                toAminoMsg(message: _120.MsgUpdateParams): _120.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _120.MsgUpdateParamsProtoMsg): _120.MsgUpdateParams;
                toProto(message: _120.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _120.MsgUpdateParams): _120.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _120.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_120.MsgUpdateParamsResponse>): _120.MsgUpdateParamsResponse;
                fromAmino(_: _120.MsgUpdateParamsResponseAmino): _120.MsgUpdateParamsResponse;
                toAmino(_: _120.MsgUpdateParamsResponse): _120.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _120.MsgUpdateParamsResponseAminoMsg): _120.MsgUpdateParamsResponse;
                toAminoMsg(message: _120.MsgUpdateParamsResponse): _120.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _120.MsgUpdateParamsResponseProtoMsg): _120.MsgUpdateParamsResponse;
                toProto(message: _120.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _120.MsgUpdateParamsResponse): _120.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _100.CommunityPoolSpendProposal | _100.CommunityPoolSpendProposalWithDeposit | _148.ParameterChangeProposal | _170.SoftwareUpgradeProposal | _170.CancelSoftwareUpgradeProposal | _122.TextProposal;
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
            Params: {
                typeUrl: string;
                encode(message: _118.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Params;
                fromPartial(object: Partial<_118.Params>): _118.Params;
                fromAmino(object: _118.ParamsAmino): _118.Params;
                toAmino(message: _118.Params): _118.ParamsAmino;
                fromAminoMsg(object: _118.ParamsAminoMsg): _118.Params;
                toAminoMsg(message: _118.Params): _118.ParamsAminoMsg;
                fromProtoMsg(message: _118.ParamsProtoMsg): _118.Params;
                toProto(message: _118.Params): Uint8Array;
                toProtoMsg(message: _118.Params): _118.ParamsProtoMsg;
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
        const v1beta1: {
            MsgClientImpl: typeof _312.MsgClientImpl;
            QueryClientImpl: typeof _293.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _123.QueryProposalRequest): Promise<_123.QueryProposalResponse>;
                proposals(request: _123.QueryProposalsRequest): Promise<_123.QueryProposalsResponse>;
                vote(request: _123.QueryVoteRequest): Promise<_123.QueryVoteResponse>;
                votes(request: _123.QueryVotesRequest): Promise<_123.QueryVotesResponse>;
                params(request: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                deposit(request: _123.QueryDepositRequest): Promise<_123.QueryDepositResponse>;
                deposits(request: _123.QueryDepositsRequest): Promise<_123.QueryDepositsResponse>;
                tallyResult(request: _123.QueryTallyResultRequest): Promise<_123.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _272.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _124.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _124.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _124.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _124.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _124.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _124.MsgSubmitProposal;
                    };
                    vote(value: _124.MsgVote): {
                        typeUrl: string;
                        value: _124.MsgVote;
                    };
                    voteWeighted(value: _124.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _124.MsgVoteWeighted;
                    };
                    deposit(value: _124.MsgDeposit): {
                        typeUrl: string;
                        value: _124.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _124.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _124.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _124.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _124.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _124.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _124.MsgSubmitProposal;
                    };
                    vote(value: _124.MsgVote): {
                        typeUrl: string;
                        value: _124.MsgVote;
                    };
                    voteWeighted(value: _124.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _124.MsgVoteWeighted;
                    };
                    deposit(value: _124.MsgDeposit): {
                        typeUrl: string;
                        value: _124.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _124.MsgSubmitProposal) => _124.MsgSubmitProposalAmino;
                    fromAmino: (object: _124.MsgSubmitProposalAmino) => _124.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _124.MsgVote) => _124.MsgVoteAmino;
                    fromAmino: (object: _124.MsgVoteAmino) => _124.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _124.MsgVoteWeighted) => _124.MsgVoteWeightedAmino;
                    fromAmino: (object: _124.MsgVoteWeightedAmino) => _124.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _124.MsgDeposit) => _124.MsgDepositAmino;
                    fromAmino: (object: _124.MsgDepositAmino) => _124.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _124.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgSubmitProposal;
                fromPartial(object: Partial<_124.MsgSubmitProposal>): _124.MsgSubmitProposal;
                fromAmino(object: _124.MsgSubmitProposalAmino): _124.MsgSubmitProposal;
                toAmino(message: _124.MsgSubmitProposal): _124.MsgSubmitProposalAmino;
                fromAminoMsg(object: _124.MsgSubmitProposalAminoMsg): _124.MsgSubmitProposal;
                toAminoMsg(message: _124.MsgSubmitProposal): _124.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _124.MsgSubmitProposalProtoMsg): _124.MsgSubmitProposal;
                toProto(message: _124.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _124.MsgSubmitProposal): _124.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _124.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_124.MsgSubmitProposalResponse>): _124.MsgSubmitProposalResponse;
                fromAmino(object: _124.MsgSubmitProposalResponseAmino): _124.MsgSubmitProposalResponse;
                toAmino(message: _124.MsgSubmitProposalResponse): _124.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _124.MsgSubmitProposalResponseAminoMsg): _124.MsgSubmitProposalResponse;
                toAminoMsg(message: _124.MsgSubmitProposalResponse): _124.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _124.MsgSubmitProposalResponseProtoMsg): _124.MsgSubmitProposalResponse;
                toProto(message: _124.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _124.MsgSubmitProposalResponse): _124.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _124.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgVote;
                fromPartial(object: Partial<_124.MsgVote>): _124.MsgVote;
                fromAmino(object: _124.MsgVoteAmino): _124.MsgVote;
                toAmino(message: _124.MsgVote): _124.MsgVoteAmino;
                fromAminoMsg(object: _124.MsgVoteAminoMsg): _124.MsgVote;
                toAminoMsg(message: _124.MsgVote): _124.MsgVoteAminoMsg;
                fromProtoMsg(message: _124.MsgVoteProtoMsg): _124.MsgVote;
                toProto(message: _124.MsgVote): Uint8Array;
                toProtoMsg(message: _124.MsgVote): _124.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _124.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgVoteResponse;
                fromPartial(_: Partial<_124.MsgVoteResponse>): _124.MsgVoteResponse;
                fromAmino(_: _124.MsgVoteResponseAmino): _124.MsgVoteResponse;
                toAmino(_: _124.MsgVoteResponse): _124.MsgVoteResponseAmino;
                fromAminoMsg(object: _124.MsgVoteResponseAminoMsg): _124.MsgVoteResponse;
                toAminoMsg(message: _124.MsgVoteResponse): _124.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _124.MsgVoteResponseProtoMsg): _124.MsgVoteResponse;
                toProto(message: _124.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _124.MsgVoteResponse): _124.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _124.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgVoteWeighted;
                fromPartial(object: Partial<_124.MsgVoteWeighted>): _124.MsgVoteWeighted;
                fromAmino(object: _124.MsgVoteWeightedAmino): _124.MsgVoteWeighted;
                toAmino(message: _124.MsgVoteWeighted): _124.MsgVoteWeightedAmino;
                fromAminoMsg(object: _124.MsgVoteWeightedAminoMsg): _124.MsgVoteWeighted;
                toAminoMsg(message: _124.MsgVoteWeighted): _124.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _124.MsgVoteWeightedProtoMsg): _124.MsgVoteWeighted;
                toProto(message: _124.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _124.MsgVoteWeighted): _124.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _124.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_124.MsgVoteWeightedResponse>): _124.MsgVoteWeightedResponse;
                fromAmino(_: _124.MsgVoteWeightedResponseAmino): _124.MsgVoteWeightedResponse;
                toAmino(_: _124.MsgVoteWeightedResponse): _124.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _124.MsgVoteWeightedResponseAminoMsg): _124.MsgVoteWeightedResponse;
                toAminoMsg(message: _124.MsgVoteWeightedResponse): _124.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _124.MsgVoteWeightedResponseProtoMsg): _124.MsgVoteWeightedResponse;
                toProto(message: _124.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _124.MsgVoteWeightedResponse): _124.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _124.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgDeposit;
                fromPartial(object: Partial<_124.MsgDeposit>): _124.MsgDeposit;
                fromAmino(object: _124.MsgDepositAmino): _124.MsgDeposit;
                toAmino(message: _124.MsgDeposit): _124.MsgDepositAmino;
                fromAminoMsg(object: _124.MsgDepositAminoMsg): _124.MsgDeposit;
                toAminoMsg(message: _124.MsgDeposit): _124.MsgDepositAminoMsg;
                fromProtoMsg(message: _124.MsgDepositProtoMsg): _124.MsgDeposit;
                toProto(message: _124.MsgDeposit): Uint8Array;
                toProtoMsg(message: _124.MsgDeposit): _124.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _124.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgDepositResponse;
                fromPartial(_: Partial<_124.MsgDepositResponse>): _124.MsgDepositResponse;
                fromAmino(_: _124.MsgDepositResponseAmino): _124.MsgDepositResponse;
                toAmino(_: _124.MsgDepositResponse): _124.MsgDepositResponseAmino;
                fromAminoMsg(object: _124.MsgDepositResponseAminoMsg): _124.MsgDepositResponse;
                toAminoMsg(message: _124.MsgDepositResponse): _124.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _124.MsgDepositResponseProtoMsg): _124.MsgDepositResponse;
                toProto(message: _124.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _124.MsgDepositResponse): _124.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _100.CommunityPoolSpendProposal | _100.CommunityPoolSpendProposalWithDeposit | _148.ParameterChangeProposal | _170.SoftwareUpgradeProposal | _170.CancelSoftwareUpgradeProposal | _122.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _123.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryProposalRequest;
                fromPartial(object: Partial<_123.QueryProposalRequest>): _123.QueryProposalRequest;
                fromAmino(object: _123.QueryProposalRequestAmino): _123.QueryProposalRequest;
                toAmino(message: _123.QueryProposalRequest): _123.QueryProposalRequestAmino;
                fromAminoMsg(object: _123.QueryProposalRequestAminoMsg): _123.QueryProposalRequest;
                toAminoMsg(message: _123.QueryProposalRequest): _123.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _123.QueryProposalRequestProtoMsg): _123.QueryProposalRequest;
                toProto(message: _123.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _123.QueryProposalRequest): _123.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _123.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryProposalResponse;
                fromPartial(object: Partial<_123.QueryProposalResponse>): _123.QueryProposalResponse;
                fromAmino(object: _123.QueryProposalResponseAmino): _123.QueryProposalResponse;
                toAmino(message: _123.QueryProposalResponse): _123.QueryProposalResponseAmino;
                fromAminoMsg(object: _123.QueryProposalResponseAminoMsg): _123.QueryProposalResponse;
                toAminoMsg(message: _123.QueryProposalResponse): _123.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _123.QueryProposalResponseProtoMsg): _123.QueryProposalResponse;
                toProto(message: _123.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _123.QueryProposalResponse): _123.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _123.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryProposalsRequest;
                fromPartial(object: Partial<_123.QueryProposalsRequest>): _123.QueryProposalsRequest;
                fromAmino(object: _123.QueryProposalsRequestAmino): _123.QueryProposalsRequest;
                toAmino(message: _123.QueryProposalsRequest): _123.QueryProposalsRequestAmino;
                fromAminoMsg(object: _123.QueryProposalsRequestAminoMsg): _123.QueryProposalsRequest;
                toAminoMsg(message: _123.QueryProposalsRequest): _123.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _123.QueryProposalsRequestProtoMsg): _123.QueryProposalsRequest;
                toProto(message: _123.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _123.QueryProposalsRequest): _123.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _123.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryProposalsResponse;
                fromPartial(object: Partial<_123.QueryProposalsResponse>): _123.QueryProposalsResponse;
                fromAmino(object: _123.QueryProposalsResponseAmino): _123.QueryProposalsResponse;
                toAmino(message: _123.QueryProposalsResponse): _123.QueryProposalsResponseAmino;
                fromAminoMsg(object: _123.QueryProposalsResponseAminoMsg): _123.QueryProposalsResponse;
                toAminoMsg(message: _123.QueryProposalsResponse): _123.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _123.QueryProposalsResponseProtoMsg): _123.QueryProposalsResponse;
                toProto(message: _123.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _123.QueryProposalsResponse): _123.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _123.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryVoteRequest;
                fromPartial(object: Partial<_123.QueryVoteRequest>): _123.QueryVoteRequest;
                fromAmino(object: _123.QueryVoteRequestAmino): _123.QueryVoteRequest;
                toAmino(message: _123.QueryVoteRequest): _123.QueryVoteRequestAmino;
                fromAminoMsg(object: _123.QueryVoteRequestAminoMsg): _123.QueryVoteRequest;
                toAminoMsg(message: _123.QueryVoteRequest): _123.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _123.QueryVoteRequestProtoMsg): _123.QueryVoteRequest;
                toProto(message: _123.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _123.QueryVoteRequest): _123.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _123.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryVoteResponse;
                fromPartial(object: Partial<_123.QueryVoteResponse>): _123.QueryVoteResponse;
                fromAmino(object: _123.QueryVoteResponseAmino): _123.QueryVoteResponse;
                toAmino(message: _123.QueryVoteResponse): _123.QueryVoteResponseAmino;
                fromAminoMsg(object: _123.QueryVoteResponseAminoMsg): _123.QueryVoteResponse;
                toAminoMsg(message: _123.QueryVoteResponse): _123.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _123.QueryVoteResponseProtoMsg): _123.QueryVoteResponse;
                toProto(message: _123.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _123.QueryVoteResponse): _123.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _123.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryVotesRequest;
                fromPartial(object: Partial<_123.QueryVotesRequest>): _123.QueryVotesRequest;
                fromAmino(object: _123.QueryVotesRequestAmino): _123.QueryVotesRequest;
                toAmino(message: _123.QueryVotesRequest): _123.QueryVotesRequestAmino;
                fromAminoMsg(object: _123.QueryVotesRequestAminoMsg): _123.QueryVotesRequest;
                toAminoMsg(message: _123.QueryVotesRequest): _123.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _123.QueryVotesRequestProtoMsg): _123.QueryVotesRequest;
                toProto(message: _123.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _123.QueryVotesRequest): _123.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _123.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryVotesResponse;
                fromPartial(object: Partial<_123.QueryVotesResponse>): _123.QueryVotesResponse;
                fromAmino(object: _123.QueryVotesResponseAmino): _123.QueryVotesResponse;
                toAmino(message: _123.QueryVotesResponse): _123.QueryVotesResponseAmino;
                fromAminoMsg(object: _123.QueryVotesResponseAminoMsg): _123.QueryVotesResponse;
                toAminoMsg(message: _123.QueryVotesResponse): _123.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _123.QueryVotesResponseProtoMsg): _123.QueryVotesResponse;
                toProto(message: _123.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _123.QueryVotesResponse): _123.QueryVotesResponseProtoMsg;
            };
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _123.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryDepositRequest;
                fromPartial(object: Partial<_123.QueryDepositRequest>): _123.QueryDepositRequest;
                fromAmino(object: _123.QueryDepositRequestAmino): _123.QueryDepositRequest;
                toAmino(message: _123.QueryDepositRequest): _123.QueryDepositRequestAmino;
                fromAminoMsg(object: _123.QueryDepositRequestAminoMsg): _123.QueryDepositRequest;
                toAminoMsg(message: _123.QueryDepositRequest): _123.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _123.QueryDepositRequestProtoMsg): _123.QueryDepositRequest;
                toProto(message: _123.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _123.QueryDepositRequest): _123.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _123.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryDepositResponse;
                fromPartial(object: Partial<_123.QueryDepositResponse>): _123.QueryDepositResponse;
                fromAmino(object: _123.QueryDepositResponseAmino): _123.QueryDepositResponse;
                toAmino(message: _123.QueryDepositResponse): _123.QueryDepositResponseAmino;
                fromAminoMsg(object: _123.QueryDepositResponseAminoMsg): _123.QueryDepositResponse;
                toAminoMsg(message: _123.QueryDepositResponse): _123.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _123.QueryDepositResponseProtoMsg): _123.QueryDepositResponse;
                toProto(message: _123.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _123.QueryDepositResponse): _123.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _123.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryDepositsRequest;
                fromPartial(object: Partial<_123.QueryDepositsRequest>): _123.QueryDepositsRequest;
                fromAmino(object: _123.QueryDepositsRequestAmino): _123.QueryDepositsRequest;
                toAmino(message: _123.QueryDepositsRequest): _123.QueryDepositsRequestAmino;
                fromAminoMsg(object: _123.QueryDepositsRequestAminoMsg): _123.QueryDepositsRequest;
                toAminoMsg(message: _123.QueryDepositsRequest): _123.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _123.QueryDepositsRequestProtoMsg): _123.QueryDepositsRequest;
                toProto(message: _123.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _123.QueryDepositsRequest): _123.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _123.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryDepositsResponse;
                fromPartial(object: Partial<_123.QueryDepositsResponse>): _123.QueryDepositsResponse;
                fromAmino(object: _123.QueryDepositsResponseAmino): _123.QueryDepositsResponse;
                toAmino(message: _123.QueryDepositsResponse): _123.QueryDepositsResponseAmino;
                fromAminoMsg(object: _123.QueryDepositsResponseAminoMsg): _123.QueryDepositsResponse;
                toAminoMsg(message: _123.QueryDepositsResponse): _123.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _123.QueryDepositsResponseProtoMsg): _123.QueryDepositsResponse;
                toProto(message: _123.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _123.QueryDepositsResponse): _123.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _123.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryTallyResultRequest;
                fromPartial(object: Partial<_123.QueryTallyResultRequest>): _123.QueryTallyResultRequest;
                fromAmino(object: _123.QueryTallyResultRequestAmino): _123.QueryTallyResultRequest;
                toAmino(message: _123.QueryTallyResultRequest): _123.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _123.QueryTallyResultRequestAminoMsg): _123.QueryTallyResultRequest;
                toAminoMsg(message: _123.QueryTallyResultRequest): _123.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _123.QueryTallyResultRequestProtoMsg): _123.QueryTallyResultRequest;
                toProto(message: _123.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _123.QueryTallyResultRequest): _123.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _123.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryTallyResultResponse;
                fromPartial(object: Partial<_123.QueryTallyResultResponse>): _123.QueryTallyResultResponse;
                fromAmino(object: _123.QueryTallyResultResponseAmino): _123.QueryTallyResultResponse;
                toAmino(message: _123.QueryTallyResultResponse): _123.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _123.QueryTallyResultResponseAminoMsg): _123.QueryTallyResultResponse;
                toAminoMsg(message: _123.QueryTallyResultResponse): _123.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _123.QueryTallyResultResponseProtoMsg): _123.QueryTallyResultResponse;
                toProto(message: _123.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _123.QueryTallyResultResponse): _123.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _122.VoteOption;
            voteOptionToJSON(object: _122.VoteOption): string;
            proposalStatusFromJSON(object: any): _122.ProposalStatus;
            proposalStatusToJSON(object: _122.ProposalStatus): string;
            VoteOption: typeof _122.VoteOption;
            VoteOptionSDKType: typeof _122.VoteOption;
            VoteOptionAmino: typeof _122.VoteOption;
            ProposalStatus: typeof _122.ProposalStatus;
            ProposalStatusSDKType: typeof _122.ProposalStatus;
            ProposalStatusAmino: typeof _122.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _122.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.WeightedVoteOption;
                fromPartial(object: Partial<_122.WeightedVoteOption>): _122.WeightedVoteOption;
                fromAmino(object: _122.WeightedVoteOptionAmino): _122.WeightedVoteOption;
                toAmino(message: _122.WeightedVoteOption): _122.WeightedVoteOptionAmino;
                fromAminoMsg(object: _122.WeightedVoteOptionAminoMsg): _122.WeightedVoteOption;
                toAminoMsg(message: _122.WeightedVoteOption): _122.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _122.WeightedVoteOptionProtoMsg): _122.WeightedVoteOption;
                toProto(message: _122.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _122.WeightedVoteOption): _122.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _122.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.TextProposal;
                fromPartial(object: Partial<_122.TextProposal>): _122.TextProposal;
                fromAmino(object: _122.TextProposalAmino): _122.TextProposal;
                toAmino(message: _122.TextProposal): _122.TextProposalAmino;
                fromAminoMsg(object: _122.TextProposalAminoMsg): _122.TextProposal;
                toAminoMsg(message: _122.TextProposal): _122.TextProposalAminoMsg;
                fromProtoMsg(message: _122.TextProposalProtoMsg): _122.TextProposal;
                toProto(message: _122.TextProposal): Uint8Array;
                toProtoMsg(message: _122.TextProposal): _122.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _122.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Deposit;
                fromPartial(object: Partial<_122.Deposit>): _122.Deposit;
                fromAmino(object: _122.DepositAmino): _122.Deposit;
                toAmino(message: _122.Deposit): _122.DepositAmino;
                fromAminoMsg(object: _122.DepositAminoMsg): _122.Deposit;
                toAminoMsg(message: _122.Deposit): _122.DepositAminoMsg;
                fromProtoMsg(message: _122.DepositProtoMsg): _122.Deposit;
                toProto(message: _122.Deposit): Uint8Array;
                toProtoMsg(message: _122.Deposit): _122.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _122.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Proposal;
                fromPartial(object: Partial<_122.Proposal>): _122.Proposal;
                fromAmino(object: _122.ProposalAmino): _122.Proposal;
                toAmino(message: _122.Proposal): _122.ProposalAmino;
                fromAminoMsg(object: _122.ProposalAminoMsg): _122.Proposal;
                toAminoMsg(message: _122.Proposal): _122.ProposalAminoMsg;
                fromProtoMsg(message: _122.ProposalProtoMsg): _122.Proposal;
                toProto(message: _122.Proposal): Uint8Array;
                toProtoMsg(message: _122.Proposal): _122.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _122.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.TallyResult;
                fromPartial(object: Partial<_122.TallyResult>): _122.TallyResult;
                fromAmino(object: _122.TallyResultAmino): _122.TallyResult;
                toAmino(message: _122.TallyResult): _122.TallyResultAmino;
                fromAminoMsg(object: _122.TallyResultAminoMsg): _122.TallyResult;
                toAminoMsg(message: _122.TallyResult): _122.TallyResultAminoMsg;
                fromProtoMsg(message: _122.TallyResultProtoMsg): _122.TallyResult;
                toProto(message: _122.TallyResult): Uint8Array;
                toProtoMsg(message: _122.TallyResult): _122.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _122.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Vote;
                fromPartial(object: Partial<_122.Vote>): _122.Vote;
                fromAmino(object: _122.VoteAmino): _122.Vote;
                toAmino(message: _122.Vote): _122.VoteAmino;
                fromAminoMsg(object: _122.VoteAminoMsg): _122.Vote;
                toAminoMsg(message: _122.Vote): _122.VoteAminoMsg;
                fromProtoMsg(message: _122.VoteProtoMsg): _122.Vote;
                toProto(message: _122.Vote): Uint8Array;
                toProtoMsg(message: _122.Vote): _122.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _122.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.DepositParams;
                fromPartial(object: Partial<_122.DepositParams>): _122.DepositParams;
                fromAmino(object: _122.DepositParamsAmino): _122.DepositParams;
                toAmino(message: _122.DepositParams): _122.DepositParamsAmino;
                fromAminoMsg(object: _122.DepositParamsAminoMsg): _122.DepositParams;
                toAminoMsg(message: _122.DepositParams): _122.DepositParamsAminoMsg;
                fromProtoMsg(message: _122.DepositParamsProtoMsg): _122.DepositParams;
                toProto(message: _122.DepositParams): Uint8Array;
                toProtoMsg(message: _122.DepositParams): _122.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _122.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.VotingParams;
                fromPartial(object: Partial<_122.VotingParams>): _122.VotingParams;
                fromAmino(object: _122.VotingParamsAmino): _122.VotingParams;
                toAmino(message: _122.VotingParams): _122.VotingParamsAmino;
                fromAminoMsg(object: _122.VotingParamsAminoMsg): _122.VotingParams;
                toAminoMsg(message: _122.VotingParams): _122.VotingParamsAminoMsg;
                fromProtoMsg(message: _122.VotingParamsProtoMsg): _122.VotingParams;
                toProto(message: _122.VotingParams): Uint8Array;
                toProtoMsg(message: _122.VotingParams): _122.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _122.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.TallyParams;
                fromPartial(object: Partial<_122.TallyParams>): _122.TallyParams;
                fromAmino(object: _122.TallyParamsAmino): _122.TallyParams;
                toAmino(message: _122.TallyParams): _122.TallyParamsAmino;
                fromAminoMsg(object: _122.TallyParamsAminoMsg): _122.TallyParams;
                toAminoMsg(message: _122.TallyParams): _122.TallyParamsAminoMsg;
                fromProtoMsg(message: _122.TallyParamsProtoMsg): _122.TallyParams;
                toProto(message: _122.TallyParams): Uint8Array;
                toProtoMsg(message: _122.TallyParams): _122.TallyParamsProtoMsg;
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
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _125.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.Module;
                    fromPartial(object: Partial<_125.Module>): _125.Module;
                    fromAmino(object: _125.ModuleAmino): _125.Module;
                    toAmino(message: _125.Module): _125.ModuleAmino;
                    fromAminoMsg(object: _125.ModuleAminoMsg): _125.Module;
                    toAminoMsg(message: _125.Module): _125.ModuleAminoMsg;
                    fromProtoMsg(message: _125.ModuleProtoMsg): _125.Module;
                    toProto(message: _125.Module): Uint8Array;
                    toProtoMsg(message: _125.Module): _125.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _313.MsgClientImpl;
            QueryClientImpl: typeof _294.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _128.QueryGroupInfoRequest): Promise<_128.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _128.QueryGroupPolicyInfoRequest): Promise<_128.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _128.QueryGroupMembersRequest): Promise<_128.QueryGroupMembersResponse>;
                groupsByAdmin(request: _128.QueryGroupsByAdminRequest): Promise<_128.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _128.QueryGroupPoliciesByGroupRequest): Promise<_128.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _128.QueryGroupPoliciesByAdminRequest): Promise<_128.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _128.QueryProposalRequest): Promise<_128.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _128.QueryProposalsByGroupPolicyRequest): Promise<_128.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _128.QueryVoteByProposalVoterRequest): Promise<_128.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _128.QueryVotesByProposalRequest): Promise<_128.QueryVotesByProposalResponse>;
                votesByVoter(request: _128.QueryVotesByVoterRequest): Promise<_128.QueryVotesByVoterResponse>;
                groupsByMember(request: _128.QueryGroupsByMemberRequest): Promise<_128.QueryGroupsByMemberResponse>;
                tallyResult(request: _128.QueryTallyResultRequest): Promise<_128.QueryTallyResultResponse>;
                groups(request?: _128.QueryGroupsRequest): Promise<_128.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _273.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _129.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _129.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _129.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _129.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _129.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _129.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _129.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _129.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _129.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _129.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _129.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _129.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _129.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _129.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _129.MsgCreateGroup): {
                        typeUrl: string;
                        value: _129.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _129.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _129.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _129.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _129.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _129.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _129.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _129.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _129.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _129.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _129.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _129.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _129.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _129.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _129.MsgWithdrawProposal;
                    };
                    vote(value: _129.MsgVote): {
                        typeUrl: string;
                        value: _129.MsgVote;
                    };
                    exec(value: _129.MsgExec): {
                        typeUrl: string;
                        value: _129.MsgExec;
                    };
                    leaveGroup(value: _129.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _129.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _129.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _129.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _129.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _129.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _129.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _129.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _129.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _129.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _129.MsgCreateGroup): {
                        typeUrl: string;
                        value: _129.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _129.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _129.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _129.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _129.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _129.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _129.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _129.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _129.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _129.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _129.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _129.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _129.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _129.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _129.MsgWithdrawProposal;
                    };
                    vote(value: _129.MsgVote): {
                        typeUrl: string;
                        value: _129.MsgVote;
                    };
                    exec(value: _129.MsgExec): {
                        typeUrl: string;
                        value: _129.MsgExec;
                    };
                    leaveGroup(value: _129.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _129.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _129.MsgCreateGroup) => _129.MsgCreateGroupAmino;
                    fromAmino: (object: _129.MsgCreateGroupAmino) => _129.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _129.MsgUpdateGroupMembers) => _129.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _129.MsgUpdateGroupMembersAmino) => _129.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _129.MsgUpdateGroupAdmin) => _129.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _129.MsgUpdateGroupAdminAmino) => _129.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _129.MsgUpdateGroupMetadata) => _129.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _129.MsgUpdateGroupMetadataAmino) => _129.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _129.MsgCreateGroupPolicy) => _129.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _129.MsgCreateGroupPolicyAmino) => _129.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _129.MsgCreateGroupWithPolicy) => _129.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _129.MsgCreateGroupWithPolicyAmino) => _129.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _129.MsgUpdateGroupPolicyAdmin) => _129.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _129.MsgUpdateGroupPolicyAdminAmino) => _129.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _129.MsgUpdateGroupPolicyDecisionPolicy) => _129.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _129.MsgUpdateGroupPolicyDecisionPolicyAmino) => _129.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _129.MsgUpdateGroupPolicyMetadata) => _129.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _129.MsgUpdateGroupPolicyMetadataAmino) => _129.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _129.MsgSubmitProposal) => _129.MsgSubmitProposalAmino;
                    fromAmino: (object: _129.MsgSubmitProposalAmino) => _129.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _129.MsgWithdrawProposal) => _129.MsgWithdrawProposalAmino;
                    fromAmino: (object: _129.MsgWithdrawProposalAmino) => _129.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _129.MsgVote) => _129.MsgVoteAmino;
                    fromAmino: (object: _129.MsgVoteAmino) => _129.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _129.MsgExec) => _129.MsgExecAmino;
                    fromAmino: (object: _129.MsgExecAmino) => _129.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _129.MsgLeaveGroup) => _129.MsgLeaveGroupAmino;
                    fromAmino: (object: _129.MsgLeaveGroupAmino) => _129.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _130.VoteOption;
            voteOptionToJSON(object: _130.VoteOption): string;
            proposalStatusFromJSON(object: any): _130.ProposalStatus;
            proposalStatusToJSON(object: _130.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _130.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _130.ProposalExecutorResult): string;
            VoteOption: typeof _130.VoteOption;
            VoteOptionSDKType: typeof _130.VoteOption;
            VoteOptionAmino: typeof _130.VoteOption;
            ProposalStatus: typeof _130.ProposalStatus;
            ProposalStatusSDKType: typeof _130.ProposalStatus;
            ProposalStatusAmino: typeof _130.ProposalStatus;
            ProposalExecutorResult: typeof _130.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _130.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _130.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _130.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Member;
                fromPartial(object: Partial<_130.Member>): _130.Member;
                fromAmino(object: _130.MemberAmino): _130.Member;
                toAmino(message: _130.Member): _130.MemberAmino;
                fromAminoMsg(object: _130.MemberAminoMsg): _130.Member;
                toAminoMsg(message: _130.Member): _130.MemberAminoMsg;
                fromProtoMsg(message: _130.MemberProtoMsg): _130.Member;
                toProto(message: _130.Member): Uint8Array;
                toProtoMsg(message: _130.Member): _130.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _130.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MemberRequest;
                fromPartial(object: Partial<_130.MemberRequest>): _130.MemberRequest;
                fromAmino(object: _130.MemberRequestAmino): _130.MemberRequest;
                toAmino(message: _130.MemberRequest): _130.MemberRequestAmino;
                fromAminoMsg(object: _130.MemberRequestAminoMsg): _130.MemberRequest;
                toAminoMsg(message: _130.MemberRequest): _130.MemberRequestAminoMsg;
                fromProtoMsg(message: _130.MemberRequestProtoMsg): _130.MemberRequest;
                toProto(message: _130.MemberRequest): Uint8Array;
                toProtoMsg(message: _130.MemberRequest): _130.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _130.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_130.ThresholdDecisionPolicy>): _130.ThresholdDecisionPolicy;
                fromAmino(object: _130.ThresholdDecisionPolicyAmino): _130.ThresholdDecisionPolicy;
                toAmino(message: _130.ThresholdDecisionPolicy): _130.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _130.ThresholdDecisionPolicyAminoMsg): _130.ThresholdDecisionPolicy;
                toAminoMsg(message: _130.ThresholdDecisionPolicy): _130.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _130.ThresholdDecisionPolicyProtoMsg): _130.ThresholdDecisionPolicy;
                toProto(message: _130.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _130.ThresholdDecisionPolicy): _130.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _130.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.PercentageDecisionPolicy;
                fromPartial(object: Partial<_130.PercentageDecisionPolicy>): _130.PercentageDecisionPolicy;
                fromAmino(object: _130.PercentageDecisionPolicyAmino): _130.PercentageDecisionPolicy;
                toAmino(message: _130.PercentageDecisionPolicy): _130.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _130.PercentageDecisionPolicyAminoMsg): _130.PercentageDecisionPolicy;
                toAminoMsg(message: _130.PercentageDecisionPolicy): _130.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _130.PercentageDecisionPolicyProtoMsg): _130.PercentageDecisionPolicy;
                toProto(message: _130.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _130.PercentageDecisionPolicy): _130.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _130.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.DecisionPolicyWindows;
                fromPartial(object: Partial<_130.DecisionPolicyWindows>): _130.DecisionPolicyWindows;
                fromAmino(object: _130.DecisionPolicyWindowsAmino): _130.DecisionPolicyWindows;
                toAmino(message: _130.DecisionPolicyWindows): _130.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _130.DecisionPolicyWindowsAminoMsg): _130.DecisionPolicyWindows;
                toAminoMsg(message: _130.DecisionPolicyWindows): _130.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _130.DecisionPolicyWindowsProtoMsg): _130.DecisionPolicyWindows;
                toProto(message: _130.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _130.DecisionPolicyWindows): _130.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _130.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.GroupInfo;
                fromPartial(object: Partial<_130.GroupInfo>): _130.GroupInfo;
                fromAmino(object: _130.GroupInfoAmino): _130.GroupInfo;
                toAmino(message: _130.GroupInfo): _130.GroupInfoAmino;
                fromAminoMsg(object: _130.GroupInfoAminoMsg): _130.GroupInfo;
                toAminoMsg(message: _130.GroupInfo): _130.GroupInfoAminoMsg;
                fromProtoMsg(message: _130.GroupInfoProtoMsg): _130.GroupInfo;
                toProto(message: _130.GroupInfo): Uint8Array;
                toProtoMsg(message: _130.GroupInfo): _130.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _130.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.GroupMember;
                fromPartial(object: Partial<_130.GroupMember>): _130.GroupMember;
                fromAmino(object: _130.GroupMemberAmino): _130.GroupMember;
                toAmino(message: _130.GroupMember): _130.GroupMemberAmino;
                fromAminoMsg(object: _130.GroupMemberAminoMsg): _130.GroupMember;
                toAminoMsg(message: _130.GroupMember): _130.GroupMemberAminoMsg;
                fromProtoMsg(message: _130.GroupMemberProtoMsg): _130.GroupMember;
                toProto(message: _130.GroupMember): Uint8Array;
                toProtoMsg(message: _130.GroupMember): _130.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _130.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.GroupPolicyInfo;
                fromPartial(object: Partial<_130.GroupPolicyInfo>): _130.GroupPolicyInfo;
                fromAmino(object: _130.GroupPolicyInfoAmino): _130.GroupPolicyInfo;
                toAmino(message: _130.GroupPolicyInfo): _130.GroupPolicyInfoAmino;
                fromAminoMsg(object: _130.GroupPolicyInfoAminoMsg): _130.GroupPolicyInfo;
                toAminoMsg(message: _130.GroupPolicyInfo): _130.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _130.GroupPolicyInfoProtoMsg): _130.GroupPolicyInfo;
                toProto(message: _130.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _130.GroupPolicyInfo): _130.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _130.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Proposal;
                fromPartial(object: Partial<_130.Proposal>): _130.Proposal;
                fromAmino(object: _130.ProposalAmino): _130.Proposal;
                toAmino(message: _130.Proposal): _130.ProposalAmino;
                fromAminoMsg(object: _130.ProposalAminoMsg): _130.Proposal;
                toAminoMsg(message: _130.Proposal): _130.ProposalAminoMsg;
                fromProtoMsg(message: _130.ProposalProtoMsg): _130.Proposal;
                toProto(message: _130.Proposal): Uint8Array;
                toProtoMsg(message: _130.Proposal): _130.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _130.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.TallyResult;
                fromPartial(object: Partial<_130.TallyResult>): _130.TallyResult;
                fromAmino(object: _130.TallyResultAmino): _130.TallyResult;
                toAmino(message: _130.TallyResult): _130.TallyResultAmino;
                fromAminoMsg(object: _130.TallyResultAminoMsg): _130.TallyResult;
                toAminoMsg(message: _130.TallyResult): _130.TallyResultAminoMsg;
                fromProtoMsg(message: _130.TallyResultProtoMsg): _130.TallyResult;
                toProto(message: _130.TallyResult): Uint8Array;
                toProtoMsg(message: _130.TallyResult): _130.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _130.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Vote;
                fromPartial(object: Partial<_130.Vote>): _130.Vote;
                fromAmino(object: _130.VoteAmino): _130.Vote;
                toAmino(message: _130.Vote): _130.VoteAmino;
                fromAminoMsg(object: _130.VoteAminoMsg): _130.Vote;
                toAminoMsg(message: _130.Vote): _130.VoteAminoMsg;
                fromProtoMsg(message: _130.VoteProtoMsg): _130.Vote;
                toProto(message: _130.Vote): Uint8Array;
                toProtoMsg(message: _130.Vote): _130.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _130.ThresholdDecisionPolicy | _130.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _129.Exec;
            execToJSON(object: _129.Exec): string;
            Exec: typeof _129.Exec;
            ExecSDKType: typeof _129.Exec;
            ExecAmino: typeof _129.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _129.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgCreateGroup;
                fromPartial(object: Partial<_129.MsgCreateGroup>): _129.MsgCreateGroup;
                fromAmino(object: _129.MsgCreateGroupAmino): _129.MsgCreateGroup;
                toAmino(message: _129.MsgCreateGroup): _129.MsgCreateGroupAmino;
                fromAminoMsg(object: _129.MsgCreateGroupAminoMsg): _129.MsgCreateGroup;
                toAminoMsg(message: _129.MsgCreateGroup): _129.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _129.MsgCreateGroupProtoMsg): _129.MsgCreateGroup;
                toProto(message: _129.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _129.MsgCreateGroup): _129.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _129.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgCreateGroupResponse;
                fromPartial(object: Partial<_129.MsgCreateGroupResponse>): _129.MsgCreateGroupResponse;
                fromAmino(object: _129.MsgCreateGroupResponseAmino): _129.MsgCreateGroupResponse;
                toAmino(message: _129.MsgCreateGroupResponse): _129.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _129.MsgCreateGroupResponseAminoMsg): _129.MsgCreateGroupResponse;
                toAminoMsg(message: _129.MsgCreateGroupResponse): _129.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _129.MsgCreateGroupResponseProtoMsg): _129.MsgCreateGroupResponse;
                toProto(message: _129.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _129.MsgCreateGroupResponse): _129.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _129.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_129.MsgUpdateGroupMembers>): _129.MsgUpdateGroupMembers;
                fromAmino(object: _129.MsgUpdateGroupMembersAmino): _129.MsgUpdateGroupMembers;
                toAmino(message: _129.MsgUpdateGroupMembers): _129.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupMembersAminoMsg): _129.MsgUpdateGroupMembers;
                toAminoMsg(message: _129.MsgUpdateGroupMembers): _129.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupMembersProtoMsg): _129.MsgUpdateGroupMembers;
                toProto(message: _129.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupMembers): _129.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _129.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupMembersResponse>): _129.MsgUpdateGroupMembersResponse;
                fromAmino(_: _129.MsgUpdateGroupMembersResponseAmino): _129.MsgUpdateGroupMembersResponse;
                toAmino(_: _129.MsgUpdateGroupMembersResponse): _129.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupMembersResponseAminoMsg): _129.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _129.MsgUpdateGroupMembersResponse): _129.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupMembersResponseProtoMsg): _129.MsgUpdateGroupMembersResponse;
                toProto(message: _129.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupMembersResponse): _129.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _129.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_129.MsgUpdateGroupAdmin>): _129.MsgUpdateGroupAdmin;
                fromAmino(object: _129.MsgUpdateGroupAdminAmino): _129.MsgUpdateGroupAdmin;
                toAmino(message: _129.MsgUpdateGroupAdmin): _129.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupAdminAminoMsg): _129.MsgUpdateGroupAdmin;
                toAminoMsg(message: _129.MsgUpdateGroupAdmin): _129.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupAdminProtoMsg): _129.MsgUpdateGroupAdmin;
                toProto(message: _129.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupAdmin): _129.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _129.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupAdminResponse>): _129.MsgUpdateGroupAdminResponse;
                fromAmino(_: _129.MsgUpdateGroupAdminResponseAmino): _129.MsgUpdateGroupAdminResponse;
                toAmino(_: _129.MsgUpdateGroupAdminResponse): _129.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupAdminResponseAminoMsg): _129.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _129.MsgUpdateGroupAdminResponse): _129.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupAdminResponseProtoMsg): _129.MsgUpdateGroupAdminResponse;
                toProto(message: _129.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupAdminResponse): _129.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _129.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_129.MsgUpdateGroupMetadata>): _129.MsgUpdateGroupMetadata;
                fromAmino(object: _129.MsgUpdateGroupMetadataAmino): _129.MsgUpdateGroupMetadata;
                toAmino(message: _129.MsgUpdateGroupMetadata): _129.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupMetadataAminoMsg): _129.MsgUpdateGroupMetadata;
                toAminoMsg(message: _129.MsgUpdateGroupMetadata): _129.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupMetadataProtoMsg): _129.MsgUpdateGroupMetadata;
                toProto(message: _129.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupMetadata): _129.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _129.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupMetadataResponse>): _129.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _129.MsgUpdateGroupMetadataResponseAmino): _129.MsgUpdateGroupMetadataResponse;
                toAmino(_: _129.MsgUpdateGroupMetadataResponse): _129.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupMetadataResponseAminoMsg): _129.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _129.MsgUpdateGroupMetadataResponse): _129.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupMetadataResponseProtoMsg): _129.MsgUpdateGroupMetadataResponse;
                toProto(message: _129.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupMetadataResponse): _129.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _129.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_129.MsgCreateGroupPolicy>): _129.MsgCreateGroupPolicy;
                fromAmino(object: _129.MsgCreateGroupPolicyAmino): _129.MsgCreateGroupPolicy;
                toAmino(message: _129.MsgCreateGroupPolicy): _129.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _129.MsgCreateGroupPolicyAminoMsg): _129.MsgCreateGroupPolicy;
                toAminoMsg(message: _129.MsgCreateGroupPolicy): _129.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _129.MsgCreateGroupPolicyProtoMsg): _129.MsgCreateGroupPolicy;
                toProto(message: _129.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _129.MsgCreateGroupPolicy): _129.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _129.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_129.MsgCreateGroupPolicyResponse>): _129.MsgCreateGroupPolicyResponse;
                fromAmino(object: _129.MsgCreateGroupPolicyResponseAmino): _129.MsgCreateGroupPolicyResponse;
                toAmino(message: _129.MsgCreateGroupPolicyResponse): _129.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _129.MsgCreateGroupPolicyResponseAminoMsg): _129.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _129.MsgCreateGroupPolicyResponse): _129.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _129.MsgCreateGroupPolicyResponseProtoMsg): _129.MsgCreateGroupPolicyResponse;
                toProto(message: _129.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _129.MsgCreateGroupPolicyResponse): _129.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _129.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_129.MsgUpdateGroupPolicyAdmin>): _129.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _129.MsgUpdateGroupPolicyAdminAmino): _129.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _129.MsgUpdateGroupPolicyAdmin): _129.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupPolicyAdminAminoMsg): _129.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _129.MsgUpdateGroupPolicyAdmin): _129.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupPolicyAdminProtoMsg): _129.MsgUpdateGroupPolicyAdmin;
                toProto(message: _129.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupPolicyAdmin): _129.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _129.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupPolicyAdminResponse>): _129.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _129.MsgUpdateGroupPolicyAdminResponseAmino): _129.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _129.MsgUpdateGroupPolicyAdminResponse): _129.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupPolicyAdminResponseAminoMsg): _129.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _129.MsgUpdateGroupPolicyAdminResponse): _129.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupPolicyAdminResponseProtoMsg): _129.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _129.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupPolicyAdminResponse): _129.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _129.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_129.MsgCreateGroupWithPolicy>): _129.MsgCreateGroupWithPolicy;
                fromAmino(object: _129.MsgCreateGroupWithPolicyAmino): _129.MsgCreateGroupWithPolicy;
                toAmino(message: _129.MsgCreateGroupWithPolicy): _129.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _129.MsgCreateGroupWithPolicyAminoMsg): _129.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _129.MsgCreateGroupWithPolicy): _129.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _129.MsgCreateGroupWithPolicyProtoMsg): _129.MsgCreateGroupWithPolicy;
                toProto(message: _129.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _129.MsgCreateGroupWithPolicy): _129.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _129.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_129.MsgCreateGroupWithPolicyResponse>): _129.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _129.MsgCreateGroupWithPolicyResponseAmino): _129.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _129.MsgCreateGroupWithPolicyResponse): _129.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _129.MsgCreateGroupWithPolicyResponseAminoMsg): _129.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _129.MsgCreateGroupWithPolicyResponse): _129.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _129.MsgCreateGroupWithPolicyResponseProtoMsg): _129.MsgCreateGroupWithPolicyResponse;
                toProto(message: _129.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _129.MsgCreateGroupWithPolicyResponse): _129.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _129.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_129.MsgUpdateGroupPolicyDecisionPolicy>): _129.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _129.MsgUpdateGroupPolicyDecisionPolicyAmino): _129.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _129.MsgUpdateGroupPolicyDecisionPolicy): _129.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _129.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _129.MsgUpdateGroupPolicyDecisionPolicy): _129.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _129.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _129.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupPolicyDecisionPolicy): _129.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _129.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupPolicyDecisionPolicyResponse>): _129.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _129.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _129.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _129.MsgUpdateGroupPolicyDecisionPolicyResponse): _129.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _129.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _129.MsgUpdateGroupPolicyDecisionPolicyResponse): _129.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _129.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _129.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupPolicyDecisionPolicyResponse): _129.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _129.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_129.MsgUpdateGroupPolicyMetadata>): _129.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _129.MsgUpdateGroupPolicyMetadataAmino): _129.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _129.MsgUpdateGroupPolicyMetadata): _129.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupPolicyMetadataAminoMsg): _129.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _129.MsgUpdateGroupPolicyMetadata): _129.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupPolicyMetadataProtoMsg): _129.MsgUpdateGroupPolicyMetadata;
                toProto(message: _129.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupPolicyMetadata): _129.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _129.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupPolicyMetadataResponse>): _129.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _129.MsgUpdateGroupPolicyMetadataResponseAmino): _129.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _129.MsgUpdateGroupPolicyMetadataResponse): _129.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _129.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _129.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _129.MsgUpdateGroupPolicyMetadataResponse): _129.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _129.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _129.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _129.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateGroupPolicyMetadataResponse): _129.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _129.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgSubmitProposal;
                fromPartial(object: Partial<_129.MsgSubmitProposal>): _129.MsgSubmitProposal;
                fromAmino(object: _129.MsgSubmitProposalAmino): _129.MsgSubmitProposal;
                toAmino(message: _129.MsgSubmitProposal): _129.MsgSubmitProposalAmino;
                fromAminoMsg(object: _129.MsgSubmitProposalAminoMsg): _129.MsgSubmitProposal;
                toAminoMsg(message: _129.MsgSubmitProposal): _129.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _129.MsgSubmitProposalProtoMsg): _129.MsgSubmitProposal;
                toProto(message: _129.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _129.MsgSubmitProposal): _129.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _129.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_129.MsgSubmitProposalResponse>): _129.MsgSubmitProposalResponse;
                fromAmino(object: _129.MsgSubmitProposalResponseAmino): _129.MsgSubmitProposalResponse;
                toAmino(message: _129.MsgSubmitProposalResponse): _129.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _129.MsgSubmitProposalResponseAminoMsg): _129.MsgSubmitProposalResponse;
                toAminoMsg(message: _129.MsgSubmitProposalResponse): _129.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _129.MsgSubmitProposalResponseProtoMsg): _129.MsgSubmitProposalResponse;
                toProto(message: _129.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _129.MsgSubmitProposalResponse): _129.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _129.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgWithdrawProposal;
                fromPartial(object: Partial<_129.MsgWithdrawProposal>): _129.MsgWithdrawProposal;
                fromAmino(object: _129.MsgWithdrawProposalAmino): _129.MsgWithdrawProposal;
                toAmino(message: _129.MsgWithdrawProposal): _129.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _129.MsgWithdrawProposalAminoMsg): _129.MsgWithdrawProposal;
                toAminoMsg(message: _129.MsgWithdrawProposal): _129.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _129.MsgWithdrawProposalProtoMsg): _129.MsgWithdrawProposal;
                toProto(message: _129.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _129.MsgWithdrawProposal): _129.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _129.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_129.MsgWithdrawProposalResponse>): _129.MsgWithdrawProposalResponse;
                fromAmino(_: _129.MsgWithdrawProposalResponseAmino): _129.MsgWithdrawProposalResponse;
                toAmino(_: _129.MsgWithdrawProposalResponse): _129.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _129.MsgWithdrawProposalResponseAminoMsg): _129.MsgWithdrawProposalResponse;
                toAminoMsg(message: _129.MsgWithdrawProposalResponse): _129.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _129.MsgWithdrawProposalResponseProtoMsg): _129.MsgWithdrawProposalResponse;
                toProto(message: _129.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _129.MsgWithdrawProposalResponse): _129.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _129.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgVote;
                fromPartial(object: Partial<_129.MsgVote>): _129.MsgVote;
                fromAmino(object: _129.MsgVoteAmino): _129.MsgVote;
                toAmino(message: _129.MsgVote): _129.MsgVoteAmino;
                fromAminoMsg(object: _129.MsgVoteAminoMsg): _129.MsgVote;
                toAminoMsg(message: _129.MsgVote): _129.MsgVoteAminoMsg;
                fromProtoMsg(message: _129.MsgVoteProtoMsg): _129.MsgVote;
                toProto(message: _129.MsgVote): Uint8Array;
                toProtoMsg(message: _129.MsgVote): _129.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _129.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgVoteResponse;
                fromPartial(_: Partial<_129.MsgVoteResponse>): _129.MsgVoteResponse;
                fromAmino(_: _129.MsgVoteResponseAmino): _129.MsgVoteResponse;
                toAmino(_: _129.MsgVoteResponse): _129.MsgVoteResponseAmino;
                fromAminoMsg(object: _129.MsgVoteResponseAminoMsg): _129.MsgVoteResponse;
                toAminoMsg(message: _129.MsgVoteResponse): _129.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _129.MsgVoteResponseProtoMsg): _129.MsgVoteResponse;
                toProto(message: _129.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _129.MsgVoteResponse): _129.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _129.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgExec;
                fromPartial(object: Partial<_129.MsgExec>): _129.MsgExec;
                fromAmino(object: _129.MsgExecAmino): _129.MsgExec;
                toAmino(message: _129.MsgExec): _129.MsgExecAmino;
                fromAminoMsg(object: _129.MsgExecAminoMsg): _129.MsgExec;
                toAminoMsg(message: _129.MsgExec): _129.MsgExecAminoMsg;
                fromProtoMsg(message: _129.MsgExecProtoMsg): _129.MsgExec;
                toProto(message: _129.MsgExec): Uint8Array;
                toProtoMsg(message: _129.MsgExec): _129.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _129.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgExecResponse;
                fromPartial(object: Partial<_129.MsgExecResponse>): _129.MsgExecResponse;
                fromAmino(object: _129.MsgExecResponseAmino): _129.MsgExecResponse;
                toAmino(message: _129.MsgExecResponse): _129.MsgExecResponseAmino;
                fromAminoMsg(object: _129.MsgExecResponseAminoMsg): _129.MsgExecResponse;
                toAminoMsg(message: _129.MsgExecResponse): _129.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _129.MsgExecResponseProtoMsg): _129.MsgExecResponse;
                toProto(message: _129.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _129.MsgExecResponse): _129.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _129.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgLeaveGroup;
                fromPartial(object: Partial<_129.MsgLeaveGroup>): _129.MsgLeaveGroup;
                fromAmino(object: _129.MsgLeaveGroupAmino): _129.MsgLeaveGroup;
                toAmino(message: _129.MsgLeaveGroup): _129.MsgLeaveGroupAmino;
                fromAminoMsg(object: _129.MsgLeaveGroupAminoMsg): _129.MsgLeaveGroup;
                toAminoMsg(message: _129.MsgLeaveGroup): _129.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _129.MsgLeaveGroupProtoMsg): _129.MsgLeaveGroup;
                toProto(message: _129.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _129.MsgLeaveGroup): _129.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _129.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_129.MsgLeaveGroupResponse>): _129.MsgLeaveGroupResponse;
                fromAmino(_: _129.MsgLeaveGroupResponseAmino): _129.MsgLeaveGroupResponse;
                toAmino(_: _129.MsgLeaveGroupResponse): _129.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _129.MsgLeaveGroupResponseAminoMsg): _129.MsgLeaveGroupResponse;
                toAminoMsg(message: _129.MsgLeaveGroupResponse): _129.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _129.MsgLeaveGroupResponseProtoMsg): _129.MsgLeaveGroupResponse;
                toProto(message: _129.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _129.MsgLeaveGroupResponse): _129.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _128.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupInfoRequest;
                fromPartial(object: Partial<_128.QueryGroupInfoRequest>): _128.QueryGroupInfoRequest;
                fromAmino(object: _128.QueryGroupInfoRequestAmino): _128.QueryGroupInfoRequest;
                toAmino(message: _128.QueryGroupInfoRequest): _128.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _128.QueryGroupInfoRequestAminoMsg): _128.QueryGroupInfoRequest;
                toAminoMsg(message: _128.QueryGroupInfoRequest): _128.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _128.QueryGroupInfoRequestProtoMsg): _128.QueryGroupInfoRequest;
                toProto(message: _128.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _128.QueryGroupInfoRequest): _128.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _128.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupInfoResponse;
                fromPartial(object: Partial<_128.QueryGroupInfoResponse>): _128.QueryGroupInfoResponse;
                fromAmino(object: _128.QueryGroupInfoResponseAmino): _128.QueryGroupInfoResponse;
                toAmino(message: _128.QueryGroupInfoResponse): _128.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _128.QueryGroupInfoResponseAminoMsg): _128.QueryGroupInfoResponse;
                toAminoMsg(message: _128.QueryGroupInfoResponse): _128.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _128.QueryGroupInfoResponseProtoMsg): _128.QueryGroupInfoResponse;
                toProto(message: _128.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _128.QueryGroupInfoResponse): _128.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _128.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_128.QueryGroupPolicyInfoRequest>): _128.QueryGroupPolicyInfoRequest;
                fromAmino(object: _128.QueryGroupPolicyInfoRequestAmino): _128.QueryGroupPolicyInfoRequest;
                toAmino(message: _128.QueryGroupPolicyInfoRequest): _128.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _128.QueryGroupPolicyInfoRequestAminoMsg): _128.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _128.QueryGroupPolicyInfoRequest): _128.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _128.QueryGroupPolicyInfoRequestProtoMsg): _128.QueryGroupPolicyInfoRequest;
                toProto(message: _128.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _128.QueryGroupPolicyInfoRequest): _128.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _128.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_128.QueryGroupPolicyInfoResponse>): _128.QueryGroupPolicyInfoResponse;
                fromAmino(object: _128.QueryGroupPolicyInfoResponseAmino): _128.QueryGroupPolicyInfoResponse;
                toAmino(message: _128.QueryGroupPolicyInfoResponse): _128.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _128.QueryGroupPolicyInfoResponseAminoMsg): _128.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _128.QueryGroupPolicyInfoResponse): _128.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _128.QueryGroupPolicyInfoResponseProtoMsg): _128.QueryGroupPolicyInfoResponse;
                toProto(message: _128.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _128.QueryGroupPolicyInfoResponse): _128.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _128.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupMembersRequest;
                fromPartial(object: Partial<_128.QueryGroupMembersRequest>): _128.QueryGroupMembersRequest;
                fromAmino(object: _128.QueryGroupMembersRequestAmino): _128.QueryGroupMembersRequest;
                toAmino(message: _128.QueryGroupMembersRequest): _128.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _128.QueryGroupMembersRequestAminoMsg): _128.QueryGroupMembersRequest;
                toAminoMsg(message: _128.QueryGroupMembersRequest): _128.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _128.QueryGroupMembersRequestProtoMsg): _128.QueryGroupMembersRequest;
                toProto(message: _128.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _128.QueryGroupMembersRequest): _128.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _128.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupMembersResponse;
                fromPartial(object: Partial<_128.QueryGroupMembersResponse>): _128.QueryGroupMembersResponse;
                fromAmino(object: _128.QueryGroupMembersResponseAmino): _128.QueryGroupMembersResponse;
                toAmino(message: _128.QueryGroupMembersResponse): _128.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _128.QueryGroupMembersResponseAminoMsg): _128.QueryGroupMembersResponse;
                toAminoMsg(message: _128.QueryGroupMembersResponse): _128.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _128.QueryGroupMembersResponseProtoMsg): _128.QueryGroupMembersResponse;
                toProto(message: _128.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _128.QueryGroupMembersResponse): _128.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _128.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_128.QueryGroupsByAdminRequest>): _128.QueryGroupsByAdminRequest;
                fromAmino(object: _128.QueryGroupsByAdminRequestAmino): _128.QueryGroupsByAdminRequest;
                toAmino(message: _128.QueryGroupsByAdminRequest): _128.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _128.QueryGroupsByAdminRequestAminoMsg): _128.QueryGroupsByAdminRequest;
                toAminoMsg(message: _128.QueryGroupsByAdminRequest): _128.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _128.QueryGroupsByAdminRequestProtoMsg): _128.QueryGroupsByAdminRequest;
                toProto(message: _128.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _128.QueryGroupsByAdminRequest): _128.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _128.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_128.QueryGroupsByAdminResponse>): _128.QueryGroupsByAdminResponse;
                fromAmino(object: _128.QueryGroupsByAdminResponseAmino): _128.QueryGroupsByAdminResponse;
                toAmino(message: _128.QueryGroupsByAdminResponse): _128.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _128.QueryGroupsByAdminResponseAminoMsg): _128.QueryGroupsByAdminResponse;
                toAminoMsg(message: _128.QueryGroupsByAdminResponse): _128.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _128.QueryGroupsByAdminResponseProtoMsg): _128.QueryGroupsByAdminResponse;
                toProto(message: _128.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _128.QueryGroupsByAdminResponse): _128.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _128.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_128.QueryGroupPoliciesByGroupRequest>): _128.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _128.QueryGroupPoliciesByGroupRequestAmino): _128.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _128.QueryGroupPoliciesByGroupRequest): _128.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _128.QueryGroupPoliciesByGroupRequestAminoMsg): _128.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _128.QueryGroupPoliciesByGroupRequest): _128.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _128.QueryGroupPoliciesByGroupRequestProtoMsg): _128.QueryGroupPoliciesByGroupRequest;
                toProto(message: _128.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _128.QueryGroupPoliciesByGroupRequest): _128.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _128.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_128.QueryGroupPoliciesByGroupResponse>): _128.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _128.QueryGroupPoliciesByGroupResponseAmino): _128.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _128.QueryGroupPoliciesByGroupResponse): _128.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _128.QueryGroupPoliciesByGroupResponseAminoMsg): _128.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _128.QueryGroupPoliciesByGroupResponse): _128.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _128.QueryGroupPoliciesByGroupResponseProtoMsg): _128.QueryGroupPoliciesByGroupResponse;
                toProto(message: _128.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _128.QueryGroupPoliciesByGroupResponse): _128.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _128.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_128.QueryGroupPoliciesByAdminRequest>): _128.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _128.QueryGroupPoliciesByAdminRequestAmino): _128.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _128.QueryGroupPoliciesByAdminRequest): _128.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _128.QueryGroupPoliciesByAdminRequestAminoMsg): _128.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _128.QueryGroupPoliciesByAdminRequest): _128.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _128.QueryGroupPoliciesByAdminRequestProtoMsg): _128.QueryGroupPoliciesByAdminRequest;
                toProto(message: _128.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _128.QueryGroupPoliciesByAdminRequest): _128.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _128.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_128.QueryGroupPoliciesByAdminResponse>): _128.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _128.QueryGroupPoliciesByAdminResponseAmino): _128.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _128.QueryGroupPoliciesByAdminResponse): _128.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _128.QueryGroupPoliciesByAdminResponseAminoMsg): _128.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _128.QueryGroupPoliciesByAdminResponse): _128.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _128.QueryGroupPoliciesByAdminResponseProtoMsg): _128.QueryGroupPoliciesByAdminResponse;
                toProto(message: _128.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _128.QueryGroupPoliciesByAdminResponse): _128.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _128.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryProposalRequest;
                fromPartial(object: Partial<_128.QueryProposalRequest>): _128.QueryProposalRequest;
                fromAmino(object: _128.QueryProposalRequestAmino): _128.QueryProposalRequest;
                toAmino(message: _128.QueryProposalRequest): _128.QueryProposalRequestAmino;
                fromAminoMsg(object: _128.QueryProposalRequestAminoMsg): _128.QueryProposalRequest;
                toAminoMsg(message: _128.QueryProposalRequest): _128.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _128.QueryProposalRequestProtoMsg): _128.QueryProposalRequest;
                toProto(message: _128.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _128.QueryProposalRequest): _128.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _128.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryProposalResponse;
                fromPartial(object: Partial<_128.QueryProposalResponse>): _128.QueryProposalResponse;
                fromAmino(object: _128.QueryProposalResponseAmino): _128.QueryProposalResponse;
                toAmino(message: _128.QueryProposalResponse): _128.QueryProposalResponseAmino;
                fromAminoMsg(object: _128.QueryProposalResponseAminoMsg): _128.QueryProposalResponse;
                toAminoMsg(message: _128.QueryProposalResponse): _128.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _128.QueryProposalResponseProtoMsg): _128.QueryProposalResponse;
                toProto(message: _128.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _128.QueryProposalResponse): _128.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _128.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_128.QueryProposalsByGroupPolicyRequest>): _128.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _128.QueryProposalsByGroupPolicyRequestAmino): _128.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _128.QueryProposalsByGroupPolicyRequest): _128.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _128.QueryProposalsByGroupPolicyRequestAminoMsg): _128.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _128.QueryProposalsByGroupPolicyRequest): _128.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _128.QueryProposalsByGroupPolicyRequestProtoMsg): _128.QueryProposalsByGroupPolicyRequest;
                toProto(message: _128.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _128.QueryProposalsByGroupPolicyRequest): _128.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _128.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_128.QueryProposalsByGroupPolicyResponse>): _128.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _128.QueryProposalsByGroupPolicyResponseAmino): _128.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _128.QueryProposalsByGroupPolicyResponse): _128.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _128.QueryProposalsByGroupPolicyResponseAminoMsg): _128.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _128.QueryProposalsByGroupPolicyResponse): _128.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _128.QueryProposalsByGroupPolicyResponseProtoMsg): _128.QueryProposalsByGroupPolicyResponse;
                toProto(message: _128.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _128.QueryProposalsByGroupPolicyResponse): _128.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _128.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_128.QueryVoteByProposalVoterRequest>): _128.QueryVoteByProposalVoterRequest;
                fromAmino(object: _128.QueryVoteByProposalVoterRequestAmino): _128.QueryVoteByProposalVoterRequest;
                toAmino(message: _128.QueryVoteByProposalVoterRequest): _128.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _128.QueryVoteByProposalVoterRequestAminoMsg): _128.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _128.QueryVoteByProposalVoterRequest): _128.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _128.QueryVoteByProposalVoterRequestProtoMsg): _128.QueryVoteByProposalVoterRequest;
                toProto(message: _128.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _128.QueryVoteByProposalVoterRequest): _128.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _128.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_128.QueryVoteByProposalVoterResponse>): _128.QueryVoteByProposalVoterResponse;
                fromAmino(object: _128.QueryVoteByProposalVoterResponseAmino): _128.QueryVoteByProposalVoterResponse;
                toAmino(message: _128.QueryVoteByProposalVoterResponse): _128.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _128.QueryVoteByProposalVoterResponseAminoMsg): _128.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _128.QueryVoteByProposalVoterResponse): _128.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _128.QueryVoteByProposalVoterResponseProtoMsg): _128.QueryVoteByProposalVoterResponse;
                toProto(message: _128.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _128.QueryVoteByProposalVoterResponse): _128.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _128.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_128.QueryVotesByProposalRequest>): _128.QueryVotesByProposalRequest;
                fromAmino(object: _128.QueryVotesByProposalRequestAmino): _128.QueryVotesByProposalRequest;
                toAmino(message: _128.QueryVotesByProposalRequest): _128.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _128.QueryVotesByProposalRequestAminoMsg): _128.QueryVotesByProposalRequest;
                toAminoMsg(message: _128.QueryVotesByProposalRequest): _128.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _128.QueryVotesByProposalRequestProtoMsg): _128.QueryVotesByProposalRequest;
                toProto(message: _128.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _128.QueryVotesByProposalRequest): _128.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _128.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_128.QueryVotesByProposalResponse>): _128.QueryVotesByProposalResponse;
                fromAmino(object: _128.QueryVotesByProposalResponseAmino): _128.QueryVotesByProposalResponse;
                toAmino(message: _128.QueryVotesByProposalResponse): _128.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _128.QueryVotesByProposalResponseAminoMsg): _128.QueryVotesByProposalResponse;
                toAminoMsg(message: _128.QueryVotesByProposalResponse): _128.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _128.QueryVotesByProposalResponseProtoMsg): _128.QueryVotesByProposalResponse;
                toProto(message: _128.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _128.QueryVotesByProposalResponse): _128.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _128.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_128.QueryVotesByVoterRequest>): _128.QueryVotesByVoterRequest;
                fromAmino(object: _128.QueryVotesByVoterRequestAmino): _128.QueryVotesByVoterRequest;
                toAmino(message: _128.QueryVotesByVoterRequest): _128.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _128.QueryVotesByVoterRequestAminoMsg): _128.QueryVotesByVoterRequest;
                toAminoMsg(message: _128.QueryVotesByVoterRequest): _128.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _128.QueryVotesByVoterRequestProtoMsg): _128.QueryVotesByVoterRequest;
                toProto(message: _128.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _128.QueryVotesByVoterRequest): _128.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _128.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_128.QueryVotesByVoterResponse>): _128.QueryVotesByVoterResponse;
                fromAmino(object: _128.QueryVotesByVoterResponseAmino): _128.QueryVotesByVoterResponse;
                toAmino(message: _128.QueryVotesByVoterResponse): _128.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _128.QueryVotesByVoterResponseAminoMsg): _128.QueryVotesByVoterResponse;
                toAminoMsg(message: _128.QueryVotesByVoterResponse): _128.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _128.QueryVotesByVoterResponseProtoMsg): _128.QueryVotesByVoterResponse;
                toProto(message: _128.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _128.QueryVotesByVoterResponse): _128.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _128.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_128.QueryGroupsByMemberRequest>): _128.QueryGroupsByMemberRequest;
                fromAmino(object: _128.QueryGroupsByMemberRequestAmino): _128.QueryGroupsByMemberRequest;
                toAmino(message: _128.QueryGroupsByMemberRequest): _128.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _128.QueryGroupsByMemberRequestAminoMsg): _128.QueryGroupsByMemberRequest;
                toAminoMsg(message: _128.QueryGroupsByMemberRequest): _128.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _128.QueryGroupsByMemberRequestProtoMsg): _128.QueryGroupsByMemberRequest;
                toProto(message: _128.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _128.QueryGroupsByMemberRequest): _128.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _128.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_128.QueryGroupsByMemberResponse>): _128.QueryGroupsByMemberResponse;
                fromAmino(object: _128.QueryGroupsByMemberResponseAmino): _128.QueryGroupsByMemberResponse;
                toAmino(message: _128.QueryGroupsByMemberResponse): _128.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _128.QueryGroupsByMemberResponseAminoMsg): _128.QueryGroupsByMemberResponse;
                toAminoMsg(message: _128.QueryGroupsByMemberResponse): _128.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _128.QueryGroupsByMemberResponseProtoMsg): _128.QueryGroupsByMemberResponse;
                toProto(message: _128.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _128.QueryGroupsByMemberResponse): _128.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _128.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryTallyResultRequest;
                fromPartial(object: Partial<_128.QueryTallyResultRequest>): _128.QueryTallyResultRequest;
                fromAmino(object: _128.QueryTallyResultRequestAmino): _128.QueryTallyResultRequest;
                toAmino(message: _128.QueryTallyResultRequest): _128.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _128.QueryTallyResultRequestAminoMsg): _128.QueryTallyResultRequest;
                toAminoMsg(message: _128.QueryTallyResultRequest): _128.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _128.QueryTallyResultRequestProtoMsg): _128.QueryTallyResultRequest;
                toProto(message: _128.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _128.QueryTallyResultRequest): _128.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _128.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryTallyResultResponse;
                fromPartial(object: Partial<_128.QueryTallyResultResponse>): _128.QueryTallyResultResponse;
                fromAmino(object: _128.QueryTallyResultResponseAmino): _128.QueryTallyResultResponse;
                toAmino(message: _128.QueryTallyResultResponse): _128.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _128.QueryTallyResultResponseAminoMsg): _128.QueryTallyResultResponse;
                toAminoMsg(message: _128.QueryTallyResultResponse): _128.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _128.QueryTallyResultResponseProtoMsg): _128.QueryTallyResultResponse;
                toProto(message: _128.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _128.QueryTallyResultResponse): _128.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _128.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupsRequest;
                fromPartial(object: Partial<_128.QueryGroupsRequest>): _128.QueryGroupsRequest;
                fromAmino(object: _128.QueryGroupsRequestAmino): _128.QueryGroupsRequest;
                toAmino(message: _128.QueryGroupsRequest): _128.QueryGroupsRequestAmino;
                fromAminoMsg(object: _128.QueryGroupsRequestAminoMsg): _128.QueryGroupsRequest;
                toAminoMsg(message: _128.QueryGroupsRequest): _128.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _128.QueryGroupsRequestProtoMsg): _128.QueryGroupsRequest;
                toProto(message: _128.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _128.QueryGroupsRequest): _128.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _128.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryGroupsResponse;
                fromPartial(object: Partial<_128.QueryGroupsResponse>): _128.QueryGroupsResponse;
                fromAmino(object: _128.QueryGroupsResponseAmino): _128.QueryGroupsResponse;
                toAmino(message: _128.QueryGroupsResponse): _128.QueryGroupsResponseAmino;
                fromAminoMsg(object: _128.QueryGroupsResponseAminoMsg): _128.QueryGroupsResponse;
                toAminoMsg(message: _128.QueryGroupsResponse): _128.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _128.QueryGroupsResponseProtoMsg): _128.QueryGroupsResponse;
                toProto(message: _128.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _128.QueryGroupsResponse): _128.QueryGroupsResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _126.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.EventCreateGroup;
                fromPartial(object: Partial<_126.EventCreateGroup>): _126.EventCreateGroup;
                fromAmino(object: _126.EventCreateGroupAmino): _126.EventCreateGroup;
                toAmino(message: _126.EventCreateGroup): _126.EventCreateGroupAmino;
                fromAminoMsg(object: _126.EventCreateGroupAminoMsg): _126.EventCreateGroup;
                toAminoMsg(message: _126.EventCreateGroup): _126.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _126.EventCreateGroupProtoMsg): _126.EventCreateGroup;
                toProto(message: _126.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _126.EventCreateGroup): _126.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _126.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.EventUpdateGroup;
                fromPartial(object: Partial<_126.EventUpdateGroup>): _126.EventUpdateGroup;
                fromAmino(object: _126.EventUpdateGroupAmino): _126.EventUpdateGroup;
                toAmino(message: _126.EventUpdateGroup): _126.EventUpdateGroupAmino;
                fromAminoMsg(object: _126.EventUpdateGroupAminoMsg): _126.EventUpdateGroup;
                toAminoMsg(message: _126.EventUpdateGroup): _126.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _126.EventUpdateGroupProtoMsg): _126.EventUpdateGroup;
                toProto(message: _126.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _126.EventUpdateGroup): _126.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _126.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.EventCreateGroupPolicy;
                fromPartial(object: Partial<_126.EventCreateGroupPolicy>): _126.EventCreateGroupPolicy;
                fromAmino(object: _126.EventCreateGroupPolicyAmino): _126.EventCreateGroupPolicy;
                toAmino(message: _126.EventCreateGroupPolicy): _126.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _126.EventCreateGroupPolicyAminoMsg): _126.EventCreateGroupPolicy;
                toAminoMsg(message: _126.EventCreateGroupPolicy): _126.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _126.EventCreateGroupPolicyProtoMsg): _126.EventCreateGroupPolicy;
                toProto(message: _126.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _126.EventCreateGroupPolicy): _126.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _126.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_126.EventUpdateGroupPolicy>): _126.EventUpdateGroupPolicy;
                fromAmino(object: _126.EventUpdateGroupPolicyAmino): _126.EventUpdateGroupPolicy;
                toAmino(message: _126.EventUpdateGroupPolicy): _126.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _126.EventUpdateGroupPolicyAminoMsg): _126.EventUpdateGroupPolicy;
                toAminoMsg(message: _126.EventUpdateGroupPolicy): _126.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _126.EventUpdateGroupPolicyProtoMsg): _126.EventUpdateGroupPolicy;
                toProto(message: _126.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _126.EventUpdateGroupPolicy): _126.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _126.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.EventSubmitProposal;
                fromPartial(object: Partial<_126.EventSubmitProposal>): _126.EventSubmitProposal;
                fromAmino(object: _126.EventSubmitProposalAmino): _126.EventSubmitProposal;
                toAmino(message: _126.EventSubmitProposal): _126.EventSubmitProposalAmino;
                fromAminoMsg(object: _126.EventSubmitProposalAminoMsg): _126.EventSubmitProposal;
                toAminoMsg(message: _126.EventSubmitProposal): _126.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _126.EventSubmitProposalProtoMsg): _126.EventSubmitProposal;
                toProto(message: _126.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _126.EventSubmitProposal): _126.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _126.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.EventWithdrawProposal;
                fromPartial(object: Partial<_126.EventWithdrawProposal>): _126.EventWithdrawProposal;
                fromAmino(object: _126.EventWithdrawProposalAmino): _126.EventWithdrawProposal;
                toAmino(message: _126.EventWithdrawProposal): _126.EventWithdrawProposalAmino;
                fromAminoMsg(object: _126.EventWithdrawProposalAminoMsg): _126.EventWithdrawProposal;
                toAminoMsg(message: _126.EventWithdrawProposal): _126.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _126.EventWithdrawProposalProtoMsg): _126.EventWithdrawProposal;
                toProto(message: _126.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _126.EventWithdrawProposal): _126.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _126.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.EventVote;
                fromPartial(object: Partial<_126.EventVote>): _126.EventVote;
                fromAmino(object: _126.EventVoteAmino): _126.EventVote;
                toAmino(message: _126.EventVote): _126.EventVoteAmino;
                fromAminoMsg(object: _126.EventVoteAminoMsg): _126.EventVote;
                toAminoMsg(message: _126.EventVote): _126.EventVoteAminoMsg;
                fromProtoMsg(message: _126.EventVoteProtoMsg): _126.EventVote;
                toProto(message: _126.EventVote): Uint8Array;
                toProtoMsg(message: _126.EventVote): _126.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _126.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.EventExec;
                fromPartial(object: Partial<_126.EventExec>): _126.EventExec;
                fromAmino(object: _126.EventExecAmino): _126.EventExec;
                toAmino(message: _126.EventExec): _126.EventExecAmino;
                fromAminoMsg(object: _126.EventExecAminoMsg): _126.EventExec;
                toAminoMsg(message: _126.EventExec): _126.EventExecAminoMsg;
                fromProtoMsg(message: _126.EventExecProtoMsg): _126.EventExec;
                toProto(message: _126.EventExec): Uint8Array;
                toProtoMsg(message: _126.EventExec): _126.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _126.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.EventLeaveGroup;
                fromPartial(object: Partial<_126.EventLeaveGroup>): _126.EventLeaveGroup;
                fromAmino(object: _126.EventLeaveGroupAmino): _126.EventLeaveGroup;
                toAmino(message: _126.EventLeaveGroup): _126.EventLeaveGroupAmino;
                fromAminoMsg(object: _126.EventLeaveGroupAminoMsg): _126.EventLeaveGroup;
                toAminoMsg(message: _126.EventLeaveGroup): _126.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _126.EventLeaveGroupProtoMsg): _126.EventLeaveGroup;
                toProto(message: _126.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _126.EventLeaveGroup): _126.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _126.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.EventProposalPruned;
                fromPartial(object: Partial<_126.EventProposalPruned>): _126.EventProposalPruned;
                fromAmino(object: _126.EventProposalPrunedAmino): _126.EventProposalPruned;
                toAmino(message: _126.EventProposalPruned): _126.EventProposalPrunedAmino;
                fromAminoMsg(object: _126.EventProposalPrunedAminoMsg): _126.EventProposalPruned;
                toAminoMsg(message: _126.EventProposalPruned): _126.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _126.EventProposalPrunedProtoMsg): _126.EventProposalPruned;
                toProto(message: _126.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _126.EventProposalPruned): _126.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
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
            MsgClientImpl: typeof _314.MsgClientImpl;
            QueryClientImpl: typeof _295.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                inflation(request?: _134.QueryInflationRequest): Promise<_134.QueryInflationResponse>;
                annualProvisions(request?: _134.QueryAnnualProvisionsRequest): Promise<_134.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _274.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: _135.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _135.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: _135.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _135.MsgUpdateParams) => _135.MsgUpdateParamsAmino;
                    fromAmino: (object: _135.MsgUpdateParamsAmino) => _135.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _135.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgUpdateParams;
                fromPartial(object: Partial<_135.MsgUpdateParams>): _135.MsgUpdateParams;
                fromAmino(object: _135.MsgUpdateParamsAmino): _135.MsgUpdateParams;
                toAmino(message: _135.MsgUpdateParams): _135.MsgUpdateParamsAmino;
                fromAminoMsg(object: _135.MsgUpdateParamsAminoMsg): _135.MsgUpdateParams;
                toAminoMsg(message: _135.MsgUpdateParams): _135.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _135.MsgUpdateParamsProtoMsg): _135.MsgUpdateParams;
                toProto(message: _135.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _135.MsgUpdateParams): _135.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _135.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_135.MsgUpdateParamsResponse>): _135.MsgUpdateParamsResponse;
                fromAmino(_: _135.MsgUpdateParamsResponseAmino): _135.MsgUpdateParamsResponse;
                toAmino(_: _135.MsgUpdateParamsResponse): _135.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _135.MsgUpdateParamsResponseAminoMsg): _135.MsgUpdateParamsResponse;
                toAminoMsg(message: _135.MsgUpdateParamsResponse): _135.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _135.MsgUpdateParamsResponseProtoMsg): _135.MsgUpdateParamsResponse;
                toProto(message: _135.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _135.MsgUpdateParamsResponse): _135.MsgUpdateParamsResponseProtoMsg;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _134.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.QueryInflationRequest;
                fromPartial(_: Partial<_134.QueryInflationRequest>): _134.QueryInflationRequest;
                fromAmino(_: _134.QueryInflationRequestAmino): _134.QueryInflationRequest;
                toAmino(_: _134.QueryInflationRequest): _134.QueryInflationRequestAmino;
                fromAminoMsg(object: _134.QueryInflationRequestAminoMsg): _134.QueryInflationRequest;
                toAminoMsg(message: _134.QueryInflationRequest): _134.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _134.QueryInflationRequestProtoMsg): _134.QueryInflationRequest;
                toProto(message: _134.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _134.QueryInflationRequest): _134.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _134.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryInflationResponse;
                fromPartial(object: Partial<_134.QueryInflationResponse>): _134.QueryInflationResponse;
                fromAmino(object: _134.QueryInflationResponseAmino): _134.QueryInflationResponse;
                toAmino(message: _134.QueryInflationResponse): _134.QueryInflationResponseAmino;
                fromAminoMsg(object: _134.QueryInflationResponseAminoMsg): _134.QueryInflationResponse;
                toAminoMsg(message: _134.QueryInflationResponse): _134.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _134.QueryInflationResponseProtoMsg): _134.QueryInflationResponse;
                toProto(message: _134.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _134.QueryInflationResponse): _134.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _134.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_134.QueryAnnualProvisionsRequest>): _134.QueryAnnualProvisionsRequest;
                fromAmino(_: _134.QueryAnnualProvisionsRequestAmino): _134.QueryAnnualProvisionsRequest;
                toAmino(_: _134.QueryAnnualProvisionsRequest): _134.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _134.QueryAnnualProvisionsRequestAminoMsg): _134.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _134.QueryAnnualProvisionsRequest): _134.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryAnnualProvisionsRequestProtoMsg): _134.QueryAnnualProvisionsRequest;
                toProto(message: _134.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryAnnualProvisionsRequest): _134.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _134.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_134.QueryAnnualProvisionsResponse>): _134.QueryAnnualProvisionsResponse;
                fromAmino(object: _134.QueryAnnualProvisionsResponseAmino): _134.QueryAnnualProvisionsResponse;
                toAmino(message: _134.QueryAnnualProvisionsResponse): _134.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _134.QueryAnnualProvisionsResponseAminoMsg): _134.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _134.QueryAnnualProvisionsResponse): _134.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryAnnualProvisionsResponseProtoMsg): _134.QueryAnnualProvisionsResponse;
                toProto(message: _134.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryAnnualProvisionsResponse): _134.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _133.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Minter;
                fromPartial(object: Partial<_133.Minter>): _133.Minter;
                fromAmino(object: _133.MinterAmino): _133.Minter;
                toAmino(message: _133.Minter): _133.MinterAmino;
                fromAminoMsg(object: _133.MinterAminoMsg): _133.Minter;
                toAminoMsg(message: _133.Minter): _133.MinterAminoMsg;
                fromProtoMsg(message: _133.MinterProtoMsg): _133.Minter;
                toProto(message: _133.Minter): Uint8Array;
                toProtoMsg(message: _133.Minter): _133.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _133.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Params;
                fromPartial(object: Partial<_133.Params>): _133.Params;
                fromAmino(object: _133.ParamsAmino): _133.Params;
                toAmino(message: _133.Params): _133.ParamsAmino;
                fromAminoMsg(object: _133.ParamsAminoMsg): _133.Params;
                toAminoMsg(message: _133.Params): _133.ParamsAminoMsg;
                fromProtoMsg(message: _133.ParamsProtoMsg): _133.Params;
                toProto(message: _133.Params): Uint8Array;
                toProtoMsg(message: _133.Params): _133.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _132.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.GenesisState;
                fromPartial(object: Partial<_132.GenesisState>): _132.GenesisState;
                fromAmino(object: _132.GenesisStateAmino): _132.GenesisState;
                toAmino(message: _132.GenesisState): _132.GenesisStateAmino;
                fromAminoMsg(object: _132.GenesisStateAminoMsg): _132.GenesisState;
                toAminoMsg(message: _132.GenesisState): _132.GenesisStateAminoMsg;
                fromProtoMsg(message: _132.GenesisStateProtoMsg): _132.GenesisState;
                toProto(message: _132.GenesisState): Uint8Array;
                toProtoMsg(message: _132.GenesisState): _132.GenesisStateProtoMsg;
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
                    encode(_: _137.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _137.Module;
                    fromPartial(_: Partial<_137.Module>): _137.Module;
                    fromAmino(_: _137.ModuleAmino): _137.Module;
                    toAmino(_: _137.Module): _137.ModuleAmino;
                    fromAminoMsg(object: _137.ModuleAminoMsg): _137.Module;
                    toAminoMsg(message: _137.Module): _137.ModuleAminoMsg;
                    fromProtoMsg(message: _137.ModuleProtoMsg): _137.Module;
                    toProto(message: _137.Module): Uint8Array;
                    toProtoMsg(message: _137.Module): _137.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _315.MsgClientImpl;
            QueryClientImpl: typeof _296.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _141.QueryBalanceRequest): Promise<_141.QueryBalanceResponse>;
                owner(request: _141.QueryOwnerRequest): Promise<_141.QueryOwnerResponse>;
                supply(request: _141.QuerySupplyRequest): Promise<_141.QuerySupplyResponse>;
                nFTs(request: _141.QueryNFTsRequest): Promise<_141.QueryNFTsResponse>;
                nFT(request: _141.QueryNFTRequest): Promise<_141.QueryNFTResponse>;
                class(request: _141.QueryClassRequest): Promise<_141.QueryClassResponse>;
                classes(request?: _141.QueryClassesRequest): Promise<_141.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _275.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _142.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _142.MsgSend): {
                        typeUrl: string;
                        value: _142.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _142.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _142.MsgSend): {
                        typeUrl: string;
                        value: _142.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _142.MsgSend) => _142.MsgSendAmino;
                    fromAmino: (object: _142.MsgSendAmino) => _142.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _142.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.MsgSend;
                fromPartial(object: Partial<_142.MsgSend>): _142.MsgSend;
                fromAmino(object: _142.MsgSendAmino): _142.MsgSend;
                toAmino(message: _142.MsgSend): _142.MsgSendAmino;
                fromAminoMsg(object: _142.MsgSendAminoMsg): _142.MsgSend;
                toAminoMsg(message: _142.MsgSend): _142.MsgSendAminoMsg;
                fromProtoMsg(message: _142.MsgSendProtoMsg): _142.MsgSend;
                toProto(message: _142.MsgSend): Uint8Array;
                toProtoMsg(message: _142.MsgSend): _142.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _142.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _142.MsgSendResponse;
                fromPartial(_: Partial<_142.MsgSendResponse>): _142.MsgSendResponse;
                fromAmino(_: _142.MsgSendResponseAmino): _142.MsgSendResponse;
                toAmino(_: _142.MsgSendResponse): _142.MsgSendResponseAmino;
                fromAminoMsg(object: _142.MsgSendResponseAminoMsg): _142.MsgSendResponse;
                toAminoMsg(message: _142.MsgSendResponse): _142.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _142.MsgSendResponseProtoMsg): _142.MsgSendResponse;
                toProto(message: _142.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _142.MsgSendResponse): _142.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _141.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryBalanceRequest;
                fromPartial(object: Partial<_141.QueryBalanceRequest>): _141.QueryBalanceRequest;
                fromAmino(object: _141.QueryBalanceRequestAmino): _141.QueryBalanceRequest;
                toAmino(message: _141.QueryBalanceRequest): _141.QueryBalanceRequestAmino;
                fromAminoMsg(object: _141.QueryBalanceRequestAminoMsg): _141.QueryBalanceRequest;
                toAminoMsg(message: _141.QueryBalanceRequest): _141.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _141.QueryBalanceRequestProtoMsg): _141.QueryBalanceRequest;
                toProto(message: _141.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _141.QueryBalanceRequest): _141.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _141.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryBalanceResponse;
                fromPartial(object: Partial<_141.QueryBalanceResponse>): _141.QueryBalanceResponse;
                fromAmino(object: _141.QueryBalanceResponseAmino): _141.QueryBalanceResponse;
                toAmino(message: _141.QueryBalanceResponse): _141.QueryBalanceResponseAmino;
                fromAminoMsg(object: _141.QueryBalanceResponseAminoMsg): _141.QueryBalanceResponse;
                toAminoMsg(message: _141.QueryBalanceResponse): _141.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _141.QueryBalanceResponseProtoMsg): _141.QueryBalanceResponse;
                toProto(message: _141.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _141.QueryBalanceResponse): _141.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _141.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryOwnerRequest;
                fromPartial(object: Partial<_141.QueryOwnerRequest>): _141.QueryOwnerRequest;
                fromAmino(object: _141.QueryOwnerRequestAmino): _141.QueryOwnerRequest;
                toAmino(message: _141.QueryOwnerRequest): _141.QueryOwnerRequestAmino;
                fromAminoMsg(object: _141.QueryOwnerRequestAminoMsg): _141.QueryOwnerRequest;
                toAminoMsg(message: _141.QueryOwnerRequest): _141.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _141.QueryOwnerRequestProtoMsg): _141.QueryOwnerRequest;
                toProto(message: _141.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _141.QueryOwnerRequest): _141.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _141.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryOwnerResponse;
                fromPartial(object: Partial<_141.QueryOwnerResponse>): _141.QueryOwnerResponse;
                fromAmino(object: _141.QueryOwnerResponseAmino): _141.QueryOwnerResponse;
                toAmino(message: _141.QueryOwnerResponse): _141.QueryOwnerResponseAmino;
                fromAminoMsg(object: _141.QueryOwnerResponseAminoMsg): _141.QueryOwnerResponse;
                toAminoMsg(message: _141.QueryOwnerResponse): _141.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _141.QueryOwnerResponseProtoMsg): _141.QueryOwnerResponse;
                toProto(message: _141.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _141.QueryOwnerResponse): _141.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _141.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QuerySupplyRequest;
                fromPartial(object: Partial<_141.QuerySupplyRequest>): _141.QuerySupplyRequest;
                fromAmino(object: _141.QuerySupplyRequestAmino): _141.QuerySupplyRequest;
                toAmino(message: _141.QuerySupplyRequest): _141.QuerySupplyRequestAmino;
                fromAminoMsg(object: _141.QuerySupplyRequestAminoMsg): _141.QuerySupplyRequest;
                toAminoMsg(message: _141.QuerySupplyRequest): _141.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _141.QuerySupplyRequestProtoMsg): _141.QuerySupplyRequest;
                toProto(message: _141.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _141.QuerySupplyRequest): _141.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _141.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QuerySupplyResponse;
                fromPartial(object: Partial<_141.QuerySupplyResponse>): _141.QuerySupplyResponse;
                fromAmino(object: _141.QuerySupplyResponseAmino): _141.QuerySupplyResponse;
                toAmino(message: _141.QuerySupplyResponse): _141.QuerySupplyResponseAmino;
                fromAminoMsg(object: _141.QuerySupplyResponseAminoMsg): _141.QuerySupplyResponse;
                toAminoMsg(message: _141.QuerySupplyResponse): _141.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _141.QuerySupplyResponseProtoMsg): _141.QuerySupplyResponse;
                toProto(message: _141.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _141.QuerySupplyResponse): _141.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _141.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryNFTsRequest;
                fromPartial(object: Partial<_141.QueryNFTsRequest>): _141.QueryNFTsRequest;
                fromAmino(object: _141.QueryNFTsRequestAmino): _141.QueryNFTsRequest;
                toAmino(message: _141.QueryNFTsRequest): _141.QueryNFTsRequestAmino;
                fromAminoMsg(object: _141.QueryNFTsRequestAminoMsg): _141.QueryNFTsRequest;
                toAminoMsg(message: _141.QueryNFTsRequest): _141.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _141.QueryNFTsRequestProtoMsg): _141.QueryNFTsRequest;
                toProto(message: _141.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryNFTsRequest): _141.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _141.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryNFTsResponse;
                fromPartial(object: Partial<_141.QueryNFTsResponse>): _141.QueryNFTsResponse;
                fromAmino(object: _141.QueryNFTsResponseAmino): _141.QueryNFTsResponse;
                toAmino(message: _141.QueryNFTsResponse): _141.QueryNFTsResponseAmino;
                fromAminoMsg(object: _141.QueryNFTsResponseAminoMsg): _141.QueryNFTsResponse;
                toAminoMsg(message: _141.QueryNFTsResponse): _141.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _141.QueryNFTsResponseProtoMsg): _141.QueryNFTsResponse;
                toProto(message: _141.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryNFTsResponse): _141.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _141.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryNFTRequest;
                fromPartial(object: Partial<_141.QueryNFTRequest>): _141.QueryNFTRequest;
                fromAmino(object: _141.QueryNFTRequestAmino): _141.QueryNFTRequest;
                toAmino(message: _141.QueryNFTRequest): _141.QueryNFTRequestAmino;
                fromAminoMsg(object: _141.QueryNFTRequestAminoMsg): _141.QueryNFTRequest;
                toAminoMsg(message: _141.QueryNFTRequest): _141.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _141.QueryNFTRequestProtoMsg): _141.QueryNFTRequest;
                toProto(message: _141.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _141.QueryNFTRequest): _141.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _141.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryNFTResponse;
                fromPartial(object: Partial<_141.QueryNFTResponse>): _141.QueryNFTResponse;
                fromAmino(object: _141.QueryNFTResponseAmino): _141.QueryNFTResponse;
                toAmino(message: _141.QueryNFTResponse): _141.QueryNFTResponseAmino;
                fromAminoMsg(object: _141.QueryNFTResponseAminoMsg): _141.QueryNFTResponse;
                toAminoMsg(message: _141.QueryNFTResponse): _141.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _141.QueryNFTResponseProtoMsg): _141.QueryNFTResponse;
                toProto(message: _141.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _141.QueryNFTResponse): _141.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _141.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryClassRequest;
                fromPartial(object: Partial<_141.QueryClassRequest>): _141.QueryClassRequest;
                fromAmino(object: _141.QueryClassRequestAmino): _141.QueryClassRequest;
                toAmino(message: _141.QueryClassRequest): _141.QueryClassRequestAmino;
                fromAminoMsg(object: _141.QueryClassRequestAminoMsg): _141.QueryClassRequest;
                toAminoMsg(message: _141.QueryClassRequest): _141.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _141.QueryClassRequestProtoMsg): _141.QueryClassRequest;
                toProto(message: _141.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _141.QueryClassRequest): _141.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _141.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryClassResponse;
                fromPartial(object: Partial<_141.QueryClassResponse>): _141.QueryClassResponse;
                fromAmino(object: _141.QueryClassResponseAmino): _141.QueryClassResponse;
                toAmino(message: _141.QueryClassResponse): _141.QueryClassResponseAmino;
                fromAminoMsg(object: _141.QueryClassResponseAminoMsg): _141.QueryClassResponse;
                toAminoMsg(message: _141.QueryClassResponse): _141.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _141.QueryClassResponseProtoMsg): _141.QueryClassResponse;
                toProto(message: _141.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _141.QueryClassResponse): _141.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _141.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryClassesRequest;
                fromPartial(object: Partial<_141.QueryClassesRequest>): _141.QueryClassesRequest;
                fromAmino(object: _141.QueryClassesRequestAmino): _141.QueryClassesRequest;
                toAmino(message: _141.QueryClassesRequest): _141.QueryClassesRequestAmino;
                fromAminoMsg(object: _141.QueryClassesRequestAminoMsg): _141.QueryClassesRequest;
                toAminoMsg(message: _141.QueryClassesRequest): _141.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _141.QueryClassesRequestProtoMsg): _141.QueryClassesRequest;
                toProto(message: _141.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _141.QueryClassesRequest): _141.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _141.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryClassesResponse;
                fromPartial(object: Partial<_141.QueryClassesResponse>): _141.QueryClassesResponse;
                fromAmino(object: _141.QueryClassesResponseAmino): _141.QueryClassesResponse;
                toAmino(message: _141.QueryClassesResponse): _141.QueryClassesResponseAmino;
                fromAminoMsg(object: _141.QueryClassesResponseAminoMsg): _141.QueryClassesResponse;
                toAminoMsg(message: _141.QueryClassesResponse): _141.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _141.QueryClassesResponseProtoMsg): _141.QueryClassesResponse;
                toProto(message: _141.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _141.QueryClassesResponse): _141.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _140.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.Class;
                fromPartial(object: Partial<_140.Class>): _140.Class;
                fromAmino(object: _140.ClassAmino): _140.Class;
                toAmino(message: _140.Class): _140.ClassAmino;
                fromAminoMsg(object: _140.ClassAminoMsg): _140.Class;
                toAminoMsg(message: _140.Class): _140.ClassAminoMsg;
                fromProtoMsg(message: _140.ClassProtoMsg): _140.Class;
                toProto(message: _140.Class): Uint8Array;
                toProtoMsg(message: _140.Class): _140.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _140.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.NFT;
                fromPartial(object: Partial<_140.NFT>): _140.NFT;
                fromAmino(object: _140.NFTAmino): _140.NFT;
                toAmino(message: _140.NFT): _140.NFTAmino;
                fromAminoMsg(object: _140.NFTAminoMsg): _140.NFT;
                toAminoMsg(message: _140.NFT): _140.NFTAminoMsg;
                fromProtoMsg(message: _140.NFTProtoMsg): _140.NFT;
                toProto(message: _140.NFT): Uint8Array;
                toProtoMsg(message: _140.NFT): _140.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _139.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.GenesisState;
                fromPartial(object: Partial<_139.GenesisState>): _139.GenesisState;
                fromAmino(object: _139.GenesisStateAmino): _139.GenesisState;
                toAmino(message: _139.GenesisState): _139.GenesisStateAmino;
                fromAminoMsg(object: _139.GenesisStateAminoMsg): _139.GenesisState;
                toAminoMsg(message: _139.GenesisState): _139.GenesisStateAminoMsg;
                fromProtoMsg(message: _139.GenesisStateProtoMsg): _139.GenesisState;
                toProto(message: _139.GenesisState): Uint8Array;
                toProtoMsg(message: _139.GenesisState): _139.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _139.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.Entry;
                fromPartial(object: Partial<_139.Entry>): _139.Entry;
                fromAmino(object: _139.EntryAmino): _139.Entry;
                toAmino(message: _139.Entry): _139.EntryAmino;
                fromAminoMsg(object: _139.EntryAminoMsg): _139.Entry;
                toAminoMsg(message: _139.Entry): _139.EntryAminoMsg;
                fromProtoMsg(message: _139.EntryProtoMsg): _139.Entry;
                toProto(message: _139.Entry): Uint8Array;
                toProtoMsg(message: _139.Entry): _139.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _138.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.EventSend;
                fromPartial(object: Partial<_138.EventSend>): _138.EventSend;
                fromAmino(object: _138.EventSendAmino): _138.EventSend;
                toAmino(message: _138.EventSend): _138.EventSendAmino;
                fromAminoMsg(object: _138.EventSendAminoMsg): _138.EventSend;
                toAminoMsg(message: _138.EventSend): _138.EventSendAminoMsg;
                fromProtoMsg(message: _138.EventSendProtoMsg): _138.EventSend;
                toProto(message: _138.EventSend): Uint8Array;
                toProtoMsg(message: _138.EventSend): _138.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _138.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.EventMint;
                fromPartial(object: Partial<_138.EventMint>): _138.EventMint;
                fromAmino(object: _138.EventMintAmino): _138.EventMint;
                toAmino(message: _138.EventMint): _138.EventMintAmino;
                fromAminoMsg(object: _138.EventMintAminoMsg): _138.EventMint;
                toAminoMsg(message: _138.EventMint): _138.EventMintAminoMsg;
                fromProtoMsg(message: _138.EventMintProtoMsg): _138.EventMint;
                toProto(message: _138.EventMint): Uint8Array;
                toProtoMsg(message: _138.EventMint): _138.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _138.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.EventBurn;
                fromPartial(object: Partial<_138.EventBurn>): _138.EventBurn;
                fromAmino(object: _138.EventBurnAmino): _138.EventBurn;
                toAmino(message: _138.EventBurn): _138.EventBurnAmino;
                fromAminoMsg(object: _138.EventBurnAminoMsg): _138.EventBurn;
                toAminoMsg(message: _138.EventBurn): _138.EventBurnAminoMsg;
                fromProtoMsg(message: _138.EventBurnProtoMsg): _138.EventBurn;
                toProto(message: _138.EventBurn): Uint8Array;
                toProtoMsg(message: _138.EventBurn): _138.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
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
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _297.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _144.GetRequest): Promise<_144.GetResponse>;
                    list(request: _144.ListRequest): Promise<_144.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _144.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.GetRequest;
                    fromPartial(object: Partial<_144.GetRequest>): _144.GetRequest;
                    fromAmino(object: _144.GetRequestAmino): _144.GetRequest;
                    toAmino(message: _144.GetRequest): _144.GetRequestAmino;
                    fromAminoMsg(object: _144.GetRequestAminoMsg): _144.GetRequest;
                    toAminoMsg(message: _144.GetRequest): _144.GetRequestAminoMsg;
                    fromProtoMsg(message: _144.GetRequestProtoMsg): _144.GetRequest;
                    toProto(message: _144.GetRequest): Uint8Array;
                    toProtoMsg(message: _144.GetRequest): _144.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _144.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.GetResponse;
                    fromPartial(object: Partial<_144.GetResponse>): _144.GetResponse;
                    fromAmino(object: _144.GetResponseAmino): _144.GetResponse;
                    toAmino(message: _144.GetResponse): _144.GetResponseAmino;
                    fromAminoMsg(object: _144.GetResponseAminoMsg): _144.GetResponse;
                    toAminoMsg(message: _144.GetResponse): _144.GetResponseAminoMsg;
                    fromProtoMsg(message: _144.GetResponseProtoMsg): _144.GetResponse;
                    toProto(message: _144.GetResponse): Uint8Array;
                    toProtoMsg(message: _144.GetResponse): _144.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _144.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.ListRequest;
                    fromPartial(object: Partial<_144.ListRequest>): _144.ListRequest;
                    fromAmino(object: _144.ListRequestAmino): _144.ListRequest;
                    toAmino(message: _144.ListRequest): _144.ListRequestAmino;
                    fromAminoMsg(object: _144.ListRequestAminoMsg): _144.ListRequest;
                    toAminoMsg(message: _144.ListRequest): _144.ListRequestAminoMsg;
                    fromProtoMsg(message: _144.ListRequestProtoMsg): _144.ListRequest;
                    toProto(message: _144.ListRequest): Uint8Array;
                    toProtoMsg(message: _144.ListRequest): _144.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _144.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.ListRequest_Prefix;
                    fromPartial(object: Partial<_144.ListRequest_Prefix>): _144.ListRequest_Prefix;
                    fromAmino(object: _144.ListRequest_PrefixAmino): _144.ListRequest_Prefix;
                    toAmino(message: _144.ListRequest_Prefix): _144.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _144.ListRequest_PrefixAminoMsg): _144.ListRequest_Prefix;
                    toAminoMsg(message: _144.ListRequest_Prefix): _144.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _144.ListRequest_PrefixProtoMsg): _144.ListRequest_Prefix;
                    toProto(message: _144.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _144.ListRequest_Prefix): _144.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _144.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.ListRequest_Range;
                    fromPartial(object: Partial<_144.ListRequest_Range>): _144.ListRequest_Range;
                    fromAmino(object: _144.ListRequest_RangeAmino): _144.ListRequest_Range;
                    toAmino(message: _144.ListRequest_Range): _144.ListRequest_RangeAmino;
                    fromAminoMsg(object: _144.ListRequest_RangeAminoMsg): _144.ListRequest_Range;
                    toAminoMsg(message: _144.ListRequest_Range): _144.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _144.ListRequest_RangeProtoMsg): _144.ListRequest_Range;
                    toProto(message: _144.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _144.ListRequest_Range): _144.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _144.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.ListResponse;
                    fromPartial(object: Partial<_144.ListResponse>): _144.ListResponse;
                    fromAmino(object: _144.ListResponseAmino): _144.ListResponse;
                    toAmino(message: _144.ListResponse): _144.ListResponseAmino;
                    fromAminoMsg(object: _144.ListResponseAminoMsg): _144.ListResponse;
                    toAminoMsg(message: _144.ListResponse): _144.ListResponseAminoMsg;
                    fromProtoMsg(message: _144.ListResponseProtoMsg): _144.ListResponse;
                    toProto(message: _144.ListResponse): Uint8Array;
                    toProtoMsg(message: _144.ListResponse): _144.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _144.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.IndexValue;
                    fromPartial(object: Partial<_144.IndexValue>): _144.IndexValue;
                    fromAmino(object: _144.IndexValueAmino): _144.IndexValue;
                    toAmino(message: _144.IndexValue): _144.IndexValueAmino;
                    fromAminoMsg(object: _144.IndexValueAminoMsg): _144.IndexValue;
                    toAminoMsg(message: _144.IndexValue): _144.IndexValueAminoMsg;
                    fromProtoMsg(message: _144.IndexValueProtoMsg): _144.IndexValue;
                    toProto(message: _144.IndexValue): Uint8Array;
                    toProtoMsg(message: _144.IndexValue): _144.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _145.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.TableDescriptor;
                fromPartial(object: Partial<_145.TableDescriptor>): _145.TableDescriptor;
                fromAmino(object: _145.TableDescriptorAmino): _145.TableDescriptor;
                toAmino(message: _145.TableDescriptor): _145.TableDescriptorAmino;
                fromAminoMsg(object: _145.TableDescriptorAminoMsg): _145.TableDescriptor;
                toAminoMsg(message: _145.TableDescriptor): _145.TableDescriptorAminoMsg;
                fromProtoMsg(message: _145.TableDescriptorProtoMsg): _145.TableDescriptor;
                toProto(message: _145.TableDescriptor): Uint8Array;
                toProtoMsg(message: _145.TableDescriptor): _145.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _145.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_145.PrimaryKeyDescriptor>): _145.PrimaryKeyDescriptor;
                fromAmino(object: _145.PrimaryKeyDescriptorAmino): _145.PrimaryKeyDescriptor;
                toAmino(message: _145.PrimaryKeyDescriptor): _145.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _145.PrimaryKeyDescriptorAminoMsg): _145.PrimaryKeyDescriptor;
                toAminoMsg(message: _145.PrimaryKeyDescriptor): _145.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _145.PrimaryKeyDescriptorProtoMsg): _145.PrimaryKeyDescriptor;
                toProto(message: _145.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _145.PrimaryKeyDescriptor): _145.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _145.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_145.SecondaryIndexDescriptor>): _145.SecondaryIndexDescriptor;
                fromAmino(object: _145.SecondaryIndexDescriptorAmino): _145.SecondaryIndexDescriptor;
                toAmino(message: _145.SecondaryIndexDescriptor): _145.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _145.SecondaryIndexDescriptorAminoMsg): _145.SecondaryIndexDescriptor;
                toAminoMsg(message: _145.SecondaryIndexDescriptor): _145.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _145.SecondaryIndexDescriptorProtoMsg): _145.SecondaryIndexDescriptor;
                toProto(message: _145.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _145.SecondaryIndexDescriptor): _145.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _145.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.SingletonDescriptor;
                fromPartial(object: Partial<_145.SingletonDescriptor>): _145.SingletonDescriptor;
                fromAmino(object: _145.SingletonDescriptorAmino): _145.SingletonDescriptor;
                toAmino(message: _145.SingletonDescriptor): _145.SingletonDescriptorAmino;
                fromAminoMsg(object: _145.SingletonDescriptorAminoMsg): _145.SingletonDescriptor;
                toAminoMsg(message: _145.SingletonDescriptor): _145.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _145.SingletonDescriptorProtoMsg): _145.SingletonDescriptor;
                toProto(message: _145.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _145.SingletonDescriptor): _145.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _146.StorageType;
            storageTypeToJSON(object: _146.StorageType): string;
            StorageType: typeof _146.StorageType;
            StorageTypeSDKType: typeof _146.StorageType;
            StorageTypeAmino: typeof _146.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _146.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_146.ModuleSchemaDescriptor>): _146.ModuleSchemaDescriptor;
                fromAmino(object: _146.ModuleSchemaDescriptorAmino): _146.ModuleSchemaDescriptor;
                toAmino(message: _146.ModuleSchemaDescriptor): _146.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _146.ModuleSchemaDescriptorAminoMsg): _146.ModuleSchemaDescriptor;
                toAminoMsg(message: _146.ModuleSchemaDescriptor): _146.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _146.ModuleSchemaDescriptorProtoMsg): _146.ModuleSchemaDescriptor;
                toProto(message: _146.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _146.ModuleSchemaDescriptor): _146.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _146.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_146.ModuleSchemaDescriptor_FileEntry>): _146.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _146.ModuleSchemaDescriptor_FileEntryAmino): _146.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _146.ModuleSchemaDescriptor_FileEntry): _146.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _146.ModuleSchemaDescriptor_FileEntryAminoMsg): _146.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _146.ModuleSchemaDescriptor_FileEntry): _146.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _146.ModuleSchemaDescriptor_FileEntryProtoMsg): _146.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _146.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _146.ModuleSchemaDescriptor_FileEntry): _146.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _147.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _147.Module;
                    fromPartial(_: Partial<_147.Module>): _147.Module;
                    fromAmino(_: _147.ModuleAmino): _147.Module;
                    toAmino(_: _147.Module): _147.ModuleAmino;
                    fromAminoMsg(object: _147.ModuleAminoMsg): _147.Module;
                    toAminoMsg(message: _147.Module): _147.ModuleAminoMsg;
                    fromProtoMsg(message: _147.ModuleProtoMsg): _147.Module;
                    toProto(message: _147.Module): Uint8Array;
                    toProtoMsg(message: _147.Module): _147.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _298.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _149.QueryParamsRequest): Promise<_149.QueryParamsResponse>;
                subspaces(request?: _149.QuerySubspacesRequest): Promise<_149.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _276.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _149.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryParamsRequest;
                fromPartial(object: Partial<_149.QueryParamsRequest>): _149.QueryParamsRequest;
                fromAmino(object: _149.QueryParamsRequestAmino): _149.QueryParamsRequest;
                toAmino(message: _149.QueryParamsRequest): _149.QueryParamsRequestAmino;
                fromAminoMsg(object: _149.QueryParamsRequestAminoMsg): _149.QueryParamsRequest;
                toAminoMsg(message: _149.QueryParamsRequest): _149.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _149.QueryParamsRequestProtoMsg): _149.QueryParamsRequest;
                toProto(message: _149.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _149.QueryParamsRequest): _149.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _149.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryParamsResponse;
                fromPartial(object: Partial<_149.QueryParamsResponse>): _149.QueryParamsResponse;
                fromAmino(object: _149.QueryParamsResponseAmino): _149.QueryParamsResponse;
                toAmino(message: _149.QueryParamsResponse): _149.QueryParamsResponseAmino;
                fromAminoMsg(object: _149.QueryParamsResponseAminoMsg): _149.QueryParamsResponse;
                toAminoMsg(message: _149.QueryParamsResponse): _149.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _149.QueryParamsResponseProtoMsg): _149.QueryParamsResponse;
                toProto(message: _149.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _149.QueryParamsResponse): _149.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _149.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.QuerySubspacesRequest;
                fromPartial(_: Partial<_149.QuerySubspacesRequest>): _149.QuerySubspacesRequest;
                fromAmino(_: _149.QuerySubspacesRequestAmino): _149.QuerySubspacesRequest;
                toAmino(_: _149.QuerySubspacesRequest): _149.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _149.QuerySubspacesRequestAminoMsg): _149.QuerySubspacesRequest;
                toAminoMsg(message: _149.QuerySubspacesRequest): _149.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _149.QuerySubspacesRequestProtoMsg): _149.QuerySubspacesRequest;
                toProto(message: _149.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _149.QuerySubspacesRequest): _149.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _149.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QuerySubspacesResponse;
                fromPartial(object: Partial<_149.QuerySubspacesResponse>): _149.QuerySubspacesResponse;
                fromAmino(object: _149.QuerySubspacesResponseAmino): _149.QuerySubspacesResponse;
                toAmino(message: _149.QuerySubspacesResponse): _149.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _149.QuerySubspacesResponseAminoMsg): _149.QuerySubspacesResponse;
                toAminoMsg(message: _149.QuerySubspacesResponse): _149.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _149.QuerySubspacesResponseProtoMsg): _149.QuerySubspacesResponse;
                toProto(message: _149.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _149.QuerySubspacesResponse): _149.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _149.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.Subspace;
                fromPartial(object: Partial<_149.Subspace>): _149.Subspace;
                fromAmino(object: _149.SubspaceAmino): _149.Subspace;
                toAmino(message: _149.Subspace): _149.SubspaceAmino;
                fromAminoMsg(object: _149.SubspaceAminoMsg): _149.Subspace;
                toAminoMsg(message: _149.Subspace): _149.SubspaceAminoMsg;
                fromProtoMsg(message: _149.SubspaceProtoMsg): _149.Subspace;
                toProto(message: _149.Subspace): Uint8Array;
                toProtoMsg(message: _149.Subspace): _149.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _148.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.ParameterChangeProposal;
                fromPartial(object: Partial<_148.ParameterChangeProposal>): _148.ParameterChangeProposal;
                fromAmino(object: _148.ParameterChangeProposalAmino): _148.ParameterChangeProposal;
                toAmino(message: _148.ParameterChangeProposal): _148.ParameterChangeProposalAmino;
                fromAminoMsg(object: _148.ParameterChangeProposalAminoMsg): _148.ParameterChangeProposal;
                toAminoMsg(message: _148.ParameterChangeProposal): _148.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _148.ParameterChangeProposalProtoMsg): _148.ParameterChangeProposal;
                toProto(message: _148.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _148.ParameterChangeProposal): _148.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _148.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.ParamChange;
                fromPartial(object: Partial<_148.ParamChange>): _148.ParamChange;
                fromAmino(object: _148.ParamChangeAmino): _148.ParamChange;
                toAmino(message: _148.ParamChange): _148.ParamChangeAmino;
                fromAminoMsg(object: _148.ParamChangeAminoMsg): _148.ParamChange;
                toAminoMsg(message: _148.ParamChange): _148.ParamChangeAminoMsg;
                fromProtoMsg(message: _148.ParamChangeProtoMsg): _148.ParamChange;
                toProto(message: _148.ParamChange): Uint8Array;
                toProtoMsg(message: _148.ParamChange): _148.ParamChangeProtoMsg;
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
                encode(_: _151.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _151.FileDescriptorsRequest;
                fromPartial(_: Partial<_151.FileDescriptorsRequest>): _151.FileDescriptorsRequest;
                fromAmino(_: _151.FileDescriptorsRequestAmino): _151.FileDescriptorsRequest;
                toAmino(_: _151.FileDescriptorsRequest): _151.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _151.FileDescriptorsRequestAminoMsg): _151.FileDescriptorsRequest;
                toAminoMsg(message: _151.FileDescriptorsRequest): _151.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _151.FileDescriptorsRequestProtoMsg): _151.FileDescriptorsRequest;
                toProto(message: _151.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _151.FileDescriptorsRequest): _151.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _151.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.FileDescriptorsResponse;
                fromPartial(object: Partial<_151.FileDescriptorsResponse>): _151.FileDescriptorsResponse;
                fromAmino(object: _151.FileDescriptorsResponseAmino): _151.FileDescriptorsResponse;
                toAmino(message: _151.FileDescriptorsResponse): _151.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _151.FileDescriptorsResponseAminoMsg): _151.FileDescriptorsResponse;
                toAminoMsg(message: _151.FileDescriptorsResponse): _151.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _151.FileDescriptorsResponseProtoMsg): _151.FileDescriptorsResponse;
                toProto(message: _151.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _151.FileDescriptorsResponse): _151.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _152.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.Module;
                    fromPartial(object: Partial<_152.Module>): _152.Module;
                    fromAmino(object: _152.ModuleAmino): _152.Module;
                    toAmino(message: _152.Module): _152.ModuleAmino;
                    fromAminoMsg(object: _152.ModuleAminoMsg): _152.Module;
                    toAminoMsg(message: _152.Module): _152.ModuleAminoMsg;
                    fromProtoMsg(message: _152.ModuleProtoMsg): _152.Module;
                    toProto(message: _152.Module): Uint8Array;
                    toProtoMsg(message: _152.Module): _152.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _316.MsgClientImpl;
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                signingInfo(request: _154.QuerySigningInfoRequest): Promise<_154.QuerySigningInfoResponse>;
                signingInfos(request?: _154.QuerySigningInfosRequest): Promise<_154.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _277.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _156.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _156.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _156.MsgUnjail): {
                        typeUrl: string;
                        value: _156.MsgUnjail;
                    };
                    updateParams(value: _156.MsgUpdateParams): {
                        typeUrl: string;
                        value: _156.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _156.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _156.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _156.MsgUnjail): {
                        typeUrl: string;
                        value: _156.MsgUnjail;
                    };
                    updateParams(value: _156.MsgUpdateParams): {
                        typeUrl: string;
                        value: _156.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _156.MsgUnjail) => _156.MsgUnjailAmino;
                    fromAmino: (object: _156.MsgUnjailAmino) => _156.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _156.MsgUpdateParams) => _156.MsgUpdateParamsAmino;
                    fromAmino: (object: _156.MsgUpdateParamsAmino) => _156.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _156.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgUnjail;
                fromPartial(object: Partial<_156.MsgUnjail>): _156.MsgUnjail;
                fromAmino(object: _156.MsgUnjailAmino): _156.MsgUnjail;
                toAmino(message: _156.MsgUnjail): _156.MsgUnjailAmino;
                fromAminoMsg(object: _156.MsgUnjailAminoMsg): _156.MsgUnjail;
                toAminoMsg(message: _156.MsgUnjail): _156.MsgUnjailAminoMsg;
                fromProtoMsg(message: _156.MsgUnjailProtoMsg): _156.MsgUnjail;
                toProto(message: _156.MsgUnjail): Uint8Array;
                toProtoMsg(message: _156.MsgUnjail): _156.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _156.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgUnjailResponse;
                fromPartial(_: Partial<_156.MsgUnjailResponse>): _156.MsgUnjailResponse;
                fromAmino(_: _156.MsgUnjailResponseAmino): _156.MsgUnjailResponse;
                toAmino(_: _156.MsgUnjailResponse): _156.MsgUnjailResponseAmino;
                fromAminoMsg(object: _156.MsgUnjailResponseAminoMsg): _156.MsgUnjailResponse;
                toAminoMsg(message: _156.MsgUnjailResponse): _156.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _156.MsgUnjailResponseProtoMsg): _156.MsgUnjailResponse;
                toProto(message: _156.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _156.MsgUnjailResponse): _156.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _156.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgUpdateParams;
                fromPartial(object: Partial<_156.MsgUpdateParams>): _156.MsgUpdateParams;
                fromAmino(object: _156.MsgUpdateParamsAmino): _156.MsgUpdateParams;
                toAmino(message: _156.MsgUpdateParams): _156.MsgUpdateParamsAmino;
                fromAminoMsg(object: _156.MsgUpdateParamsAminoMsg): _156.MsgUpdateParams;
                toAminoMsg(message: _156.MsgUpdateParams): _156.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _156.MsgUpdateParamsProtoMsg): _156.MsgUpdateParams;
                toProto(message: _156.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _156.MsgUpdateParams): _156.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _156.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_156.MsgUpdateParamsResponse>): _156.MsgUpdateParamsResponse;
                fromAmino(_: _156.MsgUpdateParamsResponseAmino): _156.MsgUpdateParamsResponse;
                toAmino(_: _156.MsgUpdateParamsResponse): _156.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _156.MsgUpdateParamsResponseAminoMsg): _156.MsgUpdateParamsResponse;
                toAminoMsg(message: _156.MsgUpdateParamsResponse): _156.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _156.MsgUpdateParamsResponseProtoMsg): _156.MsgUpdateParamsResponse;
                toProto(message: _156.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _156.MsgUpdateParamsResponse): _156.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _155.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.ValidatorSigningInfo;
                fromPartial(object: Partial<_155.ValidatorSigningInfo>): _155.ValidatorSigningInfo;
                fromAmino(object: _155.ValidatorSigningInfoAmino): _155.ValidatorSigningInfo;
                toAmino(message: _155.ValidatorSigningInfo): _155.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _155.ValidatorSigningInfoAminoMsg): _155.ValidatorSigningInfo;
                toAminoMsg(message: _155.ValidatorSigningInfo): _155.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _155.ValidatorSigningInfoProtoMsg): _155.ValidatorSigningInfo;
                toProto(message: _155.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _155.ValidatorSigningInfo): _155.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _155.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.Params;
                fromPartial(object: Partial<_155.Params>): _155.Params;
                fromAmino(object: _155.ParamsAmino): _155.Params;
                toAmino(message: _155.Params): _155.ParamsAmino;
                fromAminoMsg(object: _155.ParamsAminoMsg): _155.Params;
                toAminoMsg(message: _155.Params): _155.ParamsAminoMsg;
                fromProtoMsg(message: _155.ParamsProtoMsg): _155.Params;
                toProto(message: _155.Params): Uint8Array;
                toProtoMsg(message: _155.Params): _155.ParamsProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _154.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QuerySigningInfoRequest;
                fromPartial(object: Partial<_154.QuerySigningInfoRequest>): _154.QuerySigningInfoRequest;
                fromAmino(object: _154.QuerySigningInfoRequestAmino): _154.QuerySigningInfoRequest;
                toAmino(message: _154.QuerySigningInfoRequest): _154.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _154.QuerySigningInfoRequestAminoMsg): _154.QuerySigningInfoRequest;
                toAminoMsg(message: _154.QuerySigningInfoRequest): _154.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _154.QuerySigningInfoRequestProtoMsg): _154.QuerySigningInfoRequest;
                toProto(message: _154.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _154.QuerySigningInfoRequest): _154.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _154.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QuerySigningInfoResponse;
                fromPartial(object: Partial<_154.QuerySigningInfoResponse>): _154.QuerySigningInfoResponse;
                fromAmino(object: _154.QuerySigningInfoResponseAmino): _154.QuerySigningInfoResponse;
                toAmino(message: _154.QuerySigningInfoResponse): _154.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _154.QuerySigningInfoResponseAminoMsg): _154.QuerySigningInfoResponse;
                toAminoMsg(message: _154.QuerySigningInfoResponse): _154.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _154.QuerySigningInfoResponseProtoMsg): _154.QuerySigningInfoResponse;
                toProto(message: _154.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _154.QuerySigningInfoResponse): _154.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _154.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QuerySigningInfosRequest;
                fromPartial(object: Partial<_154.QuerySigningInfosRequest>): _154.QuerySigningInfosRequest;
                fromAmino(object: _154.QuerySigningInfosRequestAmino): _154.QuerySigningInfosRequest;
                toAmino(message: _154.QuerySigningInfosRequest): _154.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _154.QuerySigningInfosRequestAminoMsg): _154.QuerySigningInfosRequest;
                toAminoMsg(message: _154.QuerySigningInfosRequest): _154.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _154.QuerySigningInfosRequestProtoMsg): _154.QuerySigningInfosRequest;
                toProto(message: _154.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _154.QuerySigningInfosRequest): _154.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _154.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QuerySigningInfosResponse;
                fromPartial(object: Partial<_154.QuerySigningInfosResponse>): _154.QuerySigningInfosResponse;
                fromAmino(object: _154.QuerySigningInfosResponseAmino): _154.QuerySigningInfosResponse;
                toAmino(message: _154.QuerySigningInfosResponse): _154.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _154.QuerySigningInfosResponseAminoMsg): _154.QuerySigningInfosResponse;
                toAminoMsg(message: _154.QuerySigningInfosResponse): _154.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _154.QuerySigningInfosResponseProtoMsg): _154.QuerySigningInfosResponse;
                toProto(message: _154.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _154.QuerySigningInfosResponse): _154.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _153.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.GenesisState;
                fromPartial(object: Partial<_153.GenesisState>): _153.GenesisState;
                fromAmino(object: _153.GenesisStateAmino): _153.GenesisState;
                toAmino(message: _153.GenesisState): _153.GenesisStateAmino;
                fromAminoMsg(object: _153.GenesisStateAminoMsg): _153.GenesisState;
                toAminoMsg(message: _153.GenesisState): _153.GenesisStateAminoMsg;
                fromProtoMsg(message: _153.GenesisStateProtoMsg): _153.GenesisState;
                toProto(message: _153.GenesisState): Uint8Array;
                toProtoMsg(message: _153.GenesisState): _153.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _153.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.SigningInfo;
                fromPartial(object: Partial<_153.SigningInfo>): _153.SigningInfo;
                fromAmino(object: _153.SigningInfoAmino): _153.SigningInfo;
                toAmino(message: _153.SigningInfo): _153.SigningInfoAmino;
                fromAminoMsg(object: _153.SigningInfoAminoMsg): _153.SigningInfo;
                toAminoMsg(message: _153.SigningInfo): _153.SigningInfoAminoMsg;
                fromProtoMsg(message: _153.SigningInfoProtoMsg): _153.SigningInfo;
                toProto(message: _153.SigningInfo): Uint8Array;
                toProtoMsg(message: _153.SigningInfo): _153.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _153.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.ValidatorMissedBlocks;
                fromPartial(object: Partial<_153.ValidatorMissedBlocks>): _153.ValidatorMissedBlocks;
                fromAmino(object: _153.ValidatorMissedBlocksAmino): _153.ValidatorMissedBlocks;
                toAmino(message: _153.ValidatorMissedBlocks): _153.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _153.ValidatorMissedBlocksAminoMsg): _153.ValidatorMissedBlocks;
                toAminoMsg(message: _153.ValidatorMissedBlocks): _153.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _153.ValidatorMissedBlocksProtoMsg): _153.ValidatorMissedBlocks;
                toProto(message: _153.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _153.ValidatorMissedBlocks): _153.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _153.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.MissedBlock;
                fromPartial(object: Partial<_153.MissedBlock>): _153.MissedBlock;
                fromAmino(object: _153.MissedBlockAmino): _153.MissedBlock;
                toAmino(message: _153.MissedBlock): _153.MissedBlockAmino;
                fromAminoMsg(object: _153.MissedBlockAminoMsg): _153.MissedBlock;
                toAminoMsg(message: _153.MissedBlock): _153.MissedBlockAminoMsg;
                fromProtoMsg(message: _153.MissedBlockProtoMsg): _153.MissedBlock;
                toProto(message: _153.MissedBlock): Uint8Array;
                toProtoMsg(message: _153.MissedBlock): _153.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _157.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _157.Module;
                    fromPartial(object: Partial<_157.Module>): _157.Module;
                    fromAmino(object: _157.ModuleAmino): _157.Module;
                    toAmino(message: _157.Module): _157.ModuleAmino;
                    fromAminoMsg(object: _157.ModuleAminoMsg): _157.Module;
                    toAminoMsg(message: _157.Module): _157.ModuleAminoMsg;
                    fromProtoMsg(message: _157.ModuleProtoMsg): _157.Module;
                    toProto(message: _157.Module): Uint8Array;
                    toProtoMsg(message: _157.Module): _157.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _317.MsgClientImpl;
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _160.QueryValidatorsRequest): Promise<_160.QueryValidatorsResponse>;
                validator(request: _160.QueryValidatorRequest): Promise<_160.QueryValidatorResponse>;
                validatorDelegations(request: _160.QueryValidatorDelegationsRequest): Promise<_160.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _160.QueryValidatorUnbondingDelegationsRequest): Promise<_160.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _160.QueryDelegationRequest): Promise<_160.QueryDelegationResponse>;
                unbondingDelegation(request: _160.QueryUnbondingDelegationRequest): Promise<_160.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _160.QueryDelegatorDelegationsRequest): Promise<_160.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _160.QueryDelegatorUnbondingDelegationsRequest): Promise<_160.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _160.QueryRedelegationsRequest): Promise<_160.QueryRedelegationsResponse>;
                delegatorValidators(request: _160.QueryDelegatorValidatorsRequest): Promise<_160.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _160.QueryDelegatorValidatorRequest): Promise<_160.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _160.QueryHistoricalInfoRequest): Promise<_160.QueryHistoricalInfoResponse>;
                pool(request?: _160.QueryPoolRequest): Promise<_160.QueryPoolResponse>;
                params(request?: _160.QueryParamsRequest): Promise<_160.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _278.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _162.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _162.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _162.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _162.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _162.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _162.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _162.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _162.MsgCreateValidator): {
                        typeUrl: string;
                        value: _162.MsgCreateValidator;
                    };
                    editValidator(value: _162.MsgEditValidator): {
                        typeUrl: string;
                        value: _162.MsgEditValidator;
                    };
                    delegate(value: _162.MsgDelegate): {
                        typeUrl: string;
                        value: _162.MsgDelegate;
                    };
                    beginRedelegate(value: _162.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _162.MsgBeginRedelegate;
                    };
                    undelegate(value: _162.MsgUndelegate): {
                        typeUrl: string;
                        value: _162.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _162.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _162.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _162.MsgUpdateParams): {
                        typeUrl: string;
                        value: _162.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _162.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _162.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _162.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _162.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _162.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _162.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _162.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _162.MsgCreateValidator): {
                        typeUrl: string;
                        value: _162.MsgCreateValidator;
                    };
                    editValidator(value: _162.MsgEditValidator): {
                        typeUrl: string;
                        value: _162.MsgEditValidator;
                    };
                    delegate(value: _162.MsgDelegate): {
                        typeUrl: string;
                        value: _162.MsgDelegate;
                    };
                    beginRedelegate(value: _162.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _162.MsgBeginRedelegate;
                    };
                    undelegate(value: _162.MsgUndelegate): {
                        typeUrl: string;
                        value: _162.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _162.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _162.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _162.MsgUpdateParams): {
                        typeUrl: string;
                        value: _162.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _162.MsgCreateValidator) => _162.MsgCreateValidatorAmino;
                    fromAmino: (object: _162.MsgCreateValidatorAmino) => _162.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _162.MsgEditValidator) => _162.MsgEditValidatorAmino;
                    fromAmino: (object: _162.MsgEditValidatorAmino) => _162.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _162.MsgDelegate) => _162.MsgDelegateAmino;
                    fromAmino: (object: _162.MsgDelegateAmino) => _162.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _162.MsgBeginRedelegate) => _162.MsgBeginRedelegateAmino;
                    fromAmino: (object: _162.MsgBeginRedelegateAmino) => _162.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _162.MsgUndelegate) => _162.MsgUndelegateAmino;
                    fromAmino: (object: _162.MsgUndelegateAmino) => _162.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _162.MsgCancelUnbondingDelegation) => _162.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _162.MsgCancelUnbondingDelegationAmino) => _162.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _162.MsgUpdateParams) => _162.MsgUpdateParamsAmino;
                    fromAmino: (object: _162.MsgUpdateParamsAmino) => _162.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _162.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgCreateValidator;
                fromPartial(object: Partial<_162.MsgCreateValidator>): _162.MsgCreateValidator;
                fromAmino(object: _162.MsgCreateValidatorAmino): _162.MsgCreateValidator;
                toAmino(message: _162.MsgCreateValidator): _162.MsgCreateValidatorAmino;
                fromAminoMsg(object: _162.MsgCreateValidatorAminoMsg): _162.MsgCreateValidator;
                toAminoMsg(message: _162.MsgCreateValidator): _162.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _162.MsgCreateValidatorProtoMsg): _162.MsgCreateValidator;
                toProto(message: _162.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _162.MsgCreateValidator): _162.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _162.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _162.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_162.MsgCreateValidatorResponse>): _162.MsgCreateValidatorResponse;
                fromAmino(_: _162.MsgCreateValidatorResponseAmino): _162.MsgCreateValidatorResponse;
                toAmino(_: _162.MsgCreateValidatorResponse): _162.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _162.MsgCreateValidatorResponseAminoMsg): _162.MsgCreateValidatorResponse;
                toAminoMsg(message: _162.MsgCreateValidatorResponse): _162.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _162.MsgCreateValidatorResponseProtoMsg): _162.MsgCreateValidatorResponse;
                toProto(message: _162.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _162.MsgCreateValidatorResponse): _162.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _162.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgEditValidator;
                fromPartial(object: Partial<_162.MsgEditValidator>): _162.MsgEditValidator;
                fromAmino(object: _162.MsgEditValidatorAmino): _162.MsgEditValidator;
                toAmino(message: _162.MsgEditValidator): _162.MsgEditValidatorAmino;
                fromAminoMsg(object: _162.MsgEditValidatorAminoMsg): _162.MsgEditValidator;
                toAminoMsg(message: _162.MsgEditValidator): _162.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _162.MsgEditValidatorProtoMsg): _162.MsgEditValidator;
                toProto(message: _162.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _162.MsgEditValidator): _162.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _162.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _162.MsgEditValidatorResponse;
                fromPartial(_: Partial<_162.MsgEditValidatorResponse>): _162.MsgEditValidatorResponse;
                fromAmino(_: _162.MsgEditValidatorResponseAmino): _162.MsgEditValidatorResponse;
                toAmino(_: _162.MsgEditValidatorResponse): _162.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _162.MsgEditValidatorResponseAminoMsg): _162.MsgEditValidatorResponse;
                toAminoMsg(message: _162.MsgEditValidatorResponse): _162.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _162.MsgEditValidatorResponseProtoMsg): _162.MsgEditValidatorResponse;
                toProto(message: _162.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _162.MsgEditValidatorResponse): _162.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _162.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgDelegate;
                fromPartial(object: Partial<_162.MsgDelegate>): _162.MsgDelegate;
                fromAmino(object: _162.MsgDelegateAmino): _162.MsgDelegate;
                toAmino(message: _162.MsgDelegate): _162.MsgDelegateAmino;
                fromAminoMsg(object: _162.MsgDelegateAminoMsg): _162.MsgDelegate;
                toAminoMsg(message: _162.MsgDelegate): _162.MsgDelegateAminoMsg;
                fromProtoMsg(message: _162.MsgDelegateProtoMsg): _162.MsgDelegate;
                toProto(message: _162.MsgDelegate): Uint8Array;
                toProtoMsg(message: _162.MsgDelegate): _162.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _162.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _162.MsgDelegateResponse;
                fromPartial(_: Partial<_162.MsgDelegateResponse>): _162.MsgDelegateResponse;
                fromAmino(_: _162.MsgDelegateResponseAmino): _162.MsgDelegateResponse;
                toAmino(_: _162.MsgDelegateResponse): _162.MsgDelegateResponseAmino;
                fromAminoMsg(object: _162.MsgDelegateResponseAminoMsg): _162.MsgDelegateResponse;
                toAminoMsg(message: _162.MsgDelegateResponse): _162.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _162.MsgDelegateResponseProtoMsg): _162.MsgDelegateResponse;
                toProto(message: _162.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _162.MsgDelegateResponse): _162.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _162.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgBeginRedelegate;
                fromPartial(object: Partial<_162.MsgBeginRedelegate>): _162.MsgBeginRedelegate;
                fromAmino(object: _162.MsgBeginRedelegateAmino): _162.MsgBeginRedelegate;
                toAmino(message: _162.MsgBeginRedelegate): _162.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _162.MsgBeginRedelegateAminoMsg): _162.MsgBeginRedelegate;
                toAminoMsg(message: _162.MsgBeginRedelegate): _162.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _162.MsgBeginRedelegateProtoMsg): _162.MsgBeginRedelegate;
                toProto(message: _162.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _162.MsgBeginRedelegate): _162.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _162.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_162.MsgBeginRedelegateResponse>): _162.MsgBeginRedelegateResponse;
                fromAmino(object: _162.MsgBeginRedelegateResponseAmino): _162.MsgBeginRedelegateResponse;
                toAmino(message: _162.MsgBeginRedelegateResponse): _162.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _162.MsgBeginRedelegateResponseAminoMsg): _162.MsgBeginRedelegateResponse;
                toAminoMsg(message: _162.MsgBeginRedelegateResponse): _162.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _162.MsgBeginRedelegateResponseProtoMsg): _162.MsgBeginRedelegateResponse;
                toProto(message: _162.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _162.MsgBeginRedelegateResponse): _162.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _162.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgUndelegate;
                fromPartial(object: Partial<_162.MsgUndelegate>): _162.MsgUndelegate;
                fromAmino(object: _162.MsgUndelegateAmino): _162.MsgUndelegate;
                toAmino(message: _162.MsgUndelegate): _162.MsgUndelegateAmino;
                fromAminoMsg(object: _162.MsgUndelegateAminoMsg): _162.MsgUndelegate;
                toAminoMsg(message: _162.MsgUndelegate): _162.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _162.MsgUndelegateProtoMsg): _162.MsgUndelegate;
                toProto(message: _162.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _162.MsgUndelegate): _162.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _162.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgUndelegateResponse;
                fromPartial(object: Partial<_162.MsgUndelegateResponse>): _162.MsgUndelegateResponse;
                fromAmino(object: _162.MsgUndelegateResponseAmino): _162.MsgUndelegateResponse;
                toAmino(message: _162.MsgUndelegateResponse): _162.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _162.MsgUndelegateResponseAminoMsg): _162.MsgUndelegateResponse;
                toAminoMsg(message: _162.MsgUndelegateResponse): _162.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _162.MsgUndelegateResponseProtoMsg): _162.MsgUndelegateResponse;
                toProto(message: _162.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _162.MsgUndelegateResponse): _162.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _162.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_162.MsgCancelUnbondingDelegation>): _162.MsgCancelUnbondingDelegation;
                fromAmino(object: _162.MsgCancelUnbondingDelegationAmino): _162.MsgCancelUnbondingDelegation;
                toAmino(message: _162.MsgCancelUnbondingDelegation): _162.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _162.MsgCancelUnbondingDelegationAminoMsg): _162.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _162.MsgCancelUnbondingDelegation): _162.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _162.MsgCancelUnbondingDelegationProtoMsg): _162.MsgCancelUnbondingDelegation;
                toProto(message: _162.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _162.MsgCancelUnbondingDelegation): _162.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _162.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _162.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_162.MsgCancelUnbondingDelegationResponse>): _162.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _162.MsgCancelUnbondingDelegationResponseAmino): _162.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _162.MsgCancelUnbondingDelegationResponse): _162.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _162.MsgCancelUnbondingDelegationResponseAminoMsg): _162.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _162.MsgCancelUnbondingDelegationResponse): _162.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _162.MsgCancelUnbondingDelegationResponseProtoMsg): _162.MsgCancelUnbondingDelegationResponse;
                toProto(message: _162.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _162.MsgCancelUnbondingDelegationResponse): _162.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _162.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgUpdateParams;
                fromPartial(object: Partial<_162.MsgUpdateParams>): _162.MsgUpdateParams;
                fromAmino(object: _162.MsgUpdateParamsAmino): _162.MsgUpdateParams;
                toAmino(message: _162.MsgUpdateParams): _162.MsgUpdateParamsAmino;
                fromAminoMsg(object: _162.MsgUpdateParamsAminoMsg): _162.MsgUpdateParams;
                toAminoMsg(message: _162.MsgUpdateParams): _162.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _162.MsgUpdateParamsProtoMsg): _162.MsgUpdateParams;
                toProto(message: _162.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _162.MsgUpdateParams): _162.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _162.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _162.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_162.MsgUpdateParamsResponse>): _162.MsgUpdateParamsResponse;
                fromAmino(_: _162.MsgUpdateParamsResponseAmino): _162.MsgUpdateParamsResponse;
                toAmino(_: _162.MsgUpdateParamsResponse): _162.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _162.MsgUpdateParamsResponseAminoMsg): _162.MsgUpdateParamsResponse;
                toAminoMsg(message: _162.MsgUpdateParamsResponse): _162.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _162.MsgUpdateParamsResponseProtoMsg): _162.MsgUpdateParamsResponse;
                toProto(message: _162.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _162.MsgUpdateParamsResponse): _162.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _161.BondStatus;
            bondStatusToJSON(object: _161.BondStatus): string;
            infractionFromJSON(object: any): _161.Infraction;
            infractionToJSON(object: _161.Infraction): string;
            BondStatus: typeof _161.BondStatus;
            BondStatusSDKType: typeof _161.BondStatus;
            BondStatusAmino: typeof _161.BondStatus;
            Infraction: typeof _161.Infraction;
            InfractionSDKType: typeof _161.Infraction;
            InfractionAmino: typeof _161.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _161.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.HistoricalInfo;
                fromPartial(object: Partial<_161.HistoricalInfo>): _161.HistoricalInfo;
                fromAmino(object: _161.HistoricalInfoAmino): _161.HistoricalInfo;
                toAmino(message: _161.HistoricalInfo): _161.HistoricalInfoAmino;
                fromAminoMsg(object: _161.HistoricalInfoAminoMsg): _161.HistoricalInfo;
                toAminoMsg(message: _161.HistoricalInfo): _161.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _161.HistoricalInfoProtoMsg): _161.HistoricalInfo;
                toProto(message: _161.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _161.HistoricalInfo): _161.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _161.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.CommissionRates;
                fromPartial(object: Partial<_161.CommissionRates>): _161.CommissionRates;
                fromAmino(object: _161.CommissionRatesAmino): _161.CommissionRates;
                toAmino(message: _161.CommissionRates): _161.CommissionRatesAmino;
                fromAminoMsg(object: _161.CommissionRatesAminoMsg): _161.CommissionRates;
                toAminoMsg(message: _161.CommissionRates): _161.CommissionRatesAminoMsg;
                fromProtoMsg(message: _161.CommissionRatesProtoMsg): _161.CommissionRates;
                toProto(message: _161.CommissionRates): Uint8Array;
                toProtoMsg(message: _161.CommissionRates): _161.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _161.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.Commission;
                fromPartial(object: Partial<_161.Commission>): _161.Commission;
                fromAmino(object: _161.CommissionAmino): _161.Commission;
                toAmino(message: _161.Commission): _161.CommissionAmino;
                fromAminoMsg(object: _161.CommissionAminoMsg): _161.Commission;
                toAminoMsg(message: _161.Commission): _161.CommissionAminoMsg;
                fromProtoMsg(message: _161.CommissionProtoMsg): _161.Commission;
                toProto(message: _161.Commission): Uint8Array;
                toProtoMsg(message: _161.Commission): _161.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _161.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.Description;
                fromPartial(object: Partial<_161.Description>): _161.Description;
                fromAmino(object: _161.DescriptionAmino): _161.Description;
                toAmino(message: _161.Description): _161.DescriptionAmino;
                fromAminoMsg(object: _161.DescriptionAminoMsg): _161.Description;
                toAminoMsg(message: _161.Description): _161.DescriptionAminoMsg;
                fromProtoMsg(message: _161.DescriptionProtoMsg): _161.Description;
                toProto(message: _161.Description): Uint8Array;
                toProtoMsg(message: _161.Description): _161.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _161.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.Validator;
                fromPartial(object: Partial<_161.Validator>): _161.Validator;
                fromAmino(object: _161.ValidatorAmino): _161.Validator;
                toAmino(message: _161.Validator): _161.ValidatorAmino;
                fromAminoMsg(object: _161.ValidatorAminoMsg): _161.Validator;
                toAminoMsg(message: _161.Validator): _161.ValidatorAminoMsg;
                fromProtoMsg(message: _161.ValidatorProtoMsg): _161.Validator;
                toProto(message: _161.Validator): Uint8Array;
                toProtoMsg(message: _161.Validator): _161.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _161.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.ValAddresses;
                fromPartial(object: Partial<_161.ValAddresses>): _161.ValAddresses;
                fromAmino(object: _161.ValAddressesAmino): _161.ValAddresses;
                toAmino(message: _161.ValAddresses): _161.ValAddressesAmino;
                fromAminoMsg(object: _161.ValAddressesAminoMsg): _161.ValAddresses;
                toAminoMsg(message: _161.ValAddresses): _161.ValAddressesAminoMsg;
                fromProtoMsg(message: _161.ValAddressesProtoMsg): _161.ValAddresses;
                toProto(message: _161.ValAddresses): Uint8Array;
                toProtoMsg(message: _161.ValAddresses): _161.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _161.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.DVPair;
                fromPartial(object: Partial<_161.DVPair>): _161.DVPair;
                fromAmino(object: _161.DVPairAmino): _161.DVPair;
                toAmino(message: _161.DVPair): _161.DVPairAmino;
                fromAminoMsg(object: _161.DVPairAminoMsg): _161.DVPair;
                toAminoMsg(message: _161.DVPair): _161.DVPairAminoMsg;
                fromProtoMsg(message: _161.DVPairProtoMsg): _161.DVPair;
                toProto(message: _161.DVPair): Uint8Array;
                toProtoMsg(message: _161.DVPair): _161.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _161.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.DVPairs;
                fromPartial(object: Partial<_161.DVPairs>): _161.DVPairs;
                fromAmino(object: _161.DVPairsAmino): _161.DVPairs;
                toAmino(message: _161.DVPairs): _161.DVPairsAmino;
                fromAminoMsg(object: _161.DVPairsAminoMsg): _161.DVPairs;
                toAminoMsg(message: _161.DVPairs): _161.DVPairsAminoMsg;
                fromProtoMsg(message: _161.DVPairsProtoMsg): _161.DVPairs;
                toProto(message: _161.DVPairs): Uint8Array;
                toProtoMsg(message: _161.DVPairs): _161.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _161.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.DVVTriplet;
                fromPartial(object: Partial<_161.DVVTriplet>): _161.DVVTriplet;
                fromAmino(object: _161.DVVTripletAmino): _161.DVVTriplet;
                toAmino(message: _161.DVVTriplet): _161.DVVTripletAmino;
                fromAminoMsg(object: _161.DVVTripletAminoMsg): _161.DVVTriplet;
                toAminoMsg(message: _161.DVVTriplet): _161.DVVTripletAminoMsg;
                fromProtoMsg(message: _161.DVVTripletProtoMsg): _161.DVVTriplet;
                toProto(message: _161.DVVTriplet): Uint8Array;
                toProtoMsg(message: _161.DVVTriplet): _161.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _161.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.DVVTriplets;
                fromPartial(object: Partial<_161.DVVTriplets>): _161.DVVTriplets;
                fromAmino(object: _161.DVVTripletsAmino): _161.DVVTriplets;
                toAmino(message: _161.DVVTriplets): _161.DVVTripletsAmino;
                fromAminoMsg(object: _161.DVVTripletsAminoMsg): _161.DVVTriplets;
                toAminoMsg(message: _161.DVVTriplets): _161.DVVTripletsAminoMsg;
                fromProtoMsg(message: _161.DVVTripletsProtoMsg): _161.DVVTriplets;
                toProto(message: _161.DVVTriplets): Uint8Array;
                toProtoMsg(message: _161.DVVTriplets): _161.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _161.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.Delegation;
                fromPartial(object: Partial<_161.Delegation>): _161.Delegation;
                fromAmino(object: _161.DelegationAmino): _161.Delegation;
                toAmino(message: _161.Delegation): _161.DelegationAmino;
                fromAminoMsg(object: _161.DelegationAminoMsg): _161.Delegation;
                toAminoMsg(message: _161.Delegation): _161.DelegationAminoMsg;
                fromProtoMsg(message: _161.DelegationProtoMsg): _161.Delegation;
                toProto(message: _161.Delegation): Uint8Array;
                toProtoMsg(message: _161.Delegation): _161.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _161.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.UnbondingDelegation;
                fromPartial(object: Partial<_161.UnbondingDelegation>): _161.UnbondingDelegation;
                fromAmino(object: _161.UnbondingDelegationAmino): _161.UnbondingDelegation;
                toAmino(message: _161.UnbondingDelegation): _161.UnbondingDelegationAmino;
                fromAminoMsg(object: _161.UnbondingDelegationAminoMsg): _161.UnbondingDelegation;
                toAminoMsg(message: _161.UnbondingDelegation): _161.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _161.UnbondingDelegationProtoMsg): _161.UnbondingDelegation;
                toProto(message: _161.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _161.UnbondingDelegation): _161.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _161.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.UnbondingDelegationEntry;
                fromPartial(object: Partial<_161.UnbondingDelegationEntry>): _161.UnbondingDelegationEntry;
                fromAmino(object: _161.UnbondingDelegationEntryAmino): _161.UnbondingDelegationEntry;
                toAmino(message: _161.UnbondingDelegationEntry): _161.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _161.UnbondingDelegationEntryAminoMsg): _161.UnbondingDelegationEntry;
                toAminoMsg(message: _161.UnbondingDelegationEntry): _161.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _161.UnbondingDelegationEntryProtoMsg): _161.UnbondingDelegationEntry;
                toProto(message: _161.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _161.UnbondingDelegationEntry): _161.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _161.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.RedelegationEntry;
                fromPartial(object: Partial<_161.RedelegationEntry>): _161.RedelegationEntry;
                fromAmino(object: _161.RedelegationEntryAmino): _161.RedelegationEntry;
                toAmino(message: _161.RedelegationEntry): _161.RedelegationEntryAmino;
                fromAminoMsg(object: _161.RedelegationEntryAminoMsg): _161.RedelegationEntry;
                toAminoMsg(message: _161.RedelegationEntry): _161.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _161.RedelegationEntryProtoMsg): _161.RedelegationEntry;
                toProto(message: _161.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _161.RedelegationEntry): _161.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _161.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.Redelegation;
                fromPartial(object: Partial<_161.Redelegation>): _161.Redelegation;
                fromAmino(object: _161.RedelegationAmino): _161.Redelegation;
                toAmino(message: _161.Redelegation): _161.RedelegationAmino;
                fromAminoMsg(object: _161.RedelegationAminoMsg): _161.Redelegation;
                toAminoMsg(message: _161.Redelegation): _161.RedelegationAminoMsg;
                fromProtoMsg(message: _161.RedelegationProtoMsg): _161.Redelegation;
                toProto(message: _161.Redelegation): Uint8Array;
                toProtoMsg(message: _161.Redelegation): _161.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _161.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.Params;
                fromPartial(object: Partial<_161.Params>): _161.Params;
                fromAmino(object: _161.ParamsAmino): _161.Params;
                toAmino(message: _161.Params): _161.ParamsAmino;
                fromAminoMsg(object: _161.ParamsAminoMsg): _161.Params;
                toAminoMsg(message: _161.Params): _161.ParamsAminoMsg;
                fromProtoMsg(message: _161.ParamsProtoMsg): _161.Params;
                toProto(message: _161.Params): Uint8Array;
                toProtoMsg(message: _161.Params): _161.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _161.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.DelegationResponse;
                fromPartial(object: Partial<_161.DelegationResponse>): _161.DelegationResponse;
                fromAmino(object: _161.DelegationResponseAmino): _161.DelegationResponse;
                toAmino(message: _161.DelegationResponse): _161.DelegationResponseAmino;
                fromAminoMsg(object: _161.DelegationResponseAminoMsg): _161.DelegationResponse;
                toAminoMsg(message: _161.DelegationResponse): _161.DelegationResponseAminoMsg;
                fromProtoMsg(message: _161.DelegationResponseProtoMsg): _161.DelegationResponse;
                toProto(message: _161.DelegationResponse): Uint8Array;
                toProtoMsg(message: _161.DelegationResponse): _161.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _161.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.RedelegationEntryResponse;
                fromPartial(object: Partial<_161.RedelegationEntryResponse>): _161.RedelegationEntryResponse;
                fromAmino(object: _161.RedelegationEntryResponseAmino): _161.RedelegationEntryResponse;
                toAmino(message: _161.RedelegationEntryResponse): _161.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _161.RedelegationEntryResponseAminoMsg): _161.RedelegationEntryResponse;
                toAminoMsg(message: _161.RedelegationEntryResponse): _161.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _161.RedelegationEntryResponseProtoMsg): _161.RedelegationEntryResponse;
                toProto(message: _161.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _161.RedelegationEntryResponse): _161.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _161.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.RedelegationResponse;
                fromPartial(object: Partial<_161.RedelegationResponse>): _161.RedelegationResponse;
                fromAmino(object: _161.RedelegationResponseAmino): _161.RedelegationResponse;
                toAmino(message: _161.RedelegationResponse): _161.RedelegationResponseAmino;
                fromAminoMsg(object: _161.RedelegationResponseAminoMsg): _161.RedelegationResponse;
                toAminoMsg(message: _161.RedelegationResponse): _161.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _161.RedelegationResponseProtoMsg): _161.RedelegationResponse;
                toProto(message: _161.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _161.RedelegationResponse): _161.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _161.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.Pool;
                fromPartial(object: Partial<_161.Pool>): _161.Pool;
                fromAmino(object: _161.PoolAmino): _161.Pool;
                toAmino(message: _161.Pool): _161.PoolAmino;
                fromAminoMsg(object: _161.PoolAminoMsg): _161.Pool;
                toAminoMsg(message: _161.Pool): _161.PoolAminoMsg;
                fromProtoMsg(message: _161.PoolProtoMsg): _161.Pool;
                toProto(message: _161.Pool): Uint8Array;
                toProtoMsg(message: _161.Pool): _161.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _161.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.ValidatorUpdates;
                fromPartial(object: Partial<_161.ValidatorUpdates>): _161.ValidatorUpdates;
                fromAmino(object: _161.ValidatorUpdatesAmino): _161.ValidatorUpdates;
                toAmino(message: _161.ValidatorUpdates): _161.ValidatorUpdatesAmino;
                fromAminoMsg(object: _161.ValidatorUpdatesAminoMsg): _161.ValidatorUpdates;
                toAminoMsg(message: _161.ValidatorUpdates): _161.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _161.ValidatorUpdatesProtoMsg): _161.ValidatorUpdates;
                toProto(message: _161.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _161.ValidatorUpdates): _161.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _160.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryValidatorsRequest;
                fromPartial(object: Partial<_160.QueryValidatorsRequest>): _160.QueryValidatorsRequest;
                fromAmino(object: _160.QueryValidatorsRequestAmino): _160.QueryValidatorsRequest;
                toAmino(message: _160.QueryValidatorsRequest): _160.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _160.QueryValidatorsRequestAminoMsg): _160.QueryValidatorsRequest;
                toAminoMsg(message: _160.QueryValidatorsRequest): _160.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryValidatorsRequestProtoMsg): _160.QueryValidatorsRequest;
                toProto(message: _160.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryValidatorsRequest): _160.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _160.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryValidatorsResponse;
                fromPartial(object: Partial<_160.QueryValidatorsResponse>): _160.QueryValidatorsResponse;
                fromAmino(object: _160.QueryValidatorsResponseAmino): _160.QueryValidatorsResponse;
                toAmino(message: _160.QueryValidatorsResponse): _160.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _160.QueryValidatorsResponseAminoMsg): _160.QueryValidatorsResponse;
                toAminoMsg(message: _160.QueryValidatorsResponse): _160.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryValidatorsResponseProtoMsg): _160.QueryValidatorsResponse;
                toProto(message: _160.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryValidatorsResponse): _160.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _160.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryValidatorRequest;
                fromPartial(object: Partial<_160.QueryValidatorRequest>): _160.QueryValidatorRequest;
                fromAmino(object: _160.QueryValidatorRequestAmino): _160.QueryValidatorRequest;
                toAmino(message: _160.QueryValidatorRequest): _160.QueryValidatorRequestAmino;
                fromAminoMsg(object: _160.QueryValidatorRequestAminoMsg): _160.QueryValidatorRequest;
                toAminoMsg(message: _160.QueryValidatorRequest): _160.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _160.QueryValidatorRequestProtoMsg): _160.QueryValidatorRequest;
                toProto(message: _160.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _160.QueryValidatorRequest): _160.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _160.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryValidatorResponse;
                fromPartial(object: Partial<_160.QueryValidatorResponse>): _160.QueryValidatorResponse;
                fromAmino(object: _160.QueryValidatorResponseAmino): _160.QueryValidatorResponse;
                toAmino(message: _160.QueryValidatorResponse): _160.QueryValidatorResponseAmino;
                fromAminoMsg(object: _160.QueryValidatorResponseAminoMsg): _160.QueryValidatorResponse;
                toAminoMsg(message: _160.QueryValidatorResponse): _160.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _160.QueryValidatorResponseProtoMsg): _160.QueryValidatorResponse;
                toProto(message: _160.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _160.QueryValidatorResponse): _160.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _160.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_160.QueryValidatorDelegationsRequest>): _160.QueryValidatorDelegationsRequest;
                fromAmino(object: _160.QueryValidatorDelegationsRequestAmino): _160.QueryValidatorDelegationsRequest;
                toAmino(message: _160.QueryValidatorDelegationsRequest): _160.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _160.QueryValidatorDelegationsRequestAminoMsg): _160.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _160.QueryValidatorDelegationsRequest): _160.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryValidatorDelegationsRequestProtoMsg): _160.QueryValidatorDelegationsRequest;
                toProto(message: _160.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryValidatorDelegationsRequest): _160.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _160.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_160.QueryValidatorDelegationsResponse>): _160.QueryValidatorDelegationsResponse;
                fromAmino(object: _160.QueryValidatorDelegationsResponseAmino): _160.QueryValidatorDelegationsResponse;
                toAmino(message: _160.QueryValidatorDelegationsResponse): _160.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _160.QueryValidatorDelegationsResponseAminoMsg): _160.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _160.QueryValidatorDelegationsResponse): _160.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryValidatorDelegationsResponseProtoMsg): _160.QueryValidatorDelegationsResponse;
                toProto(message: _160.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryValidatorDelegationsResponse): _160.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _160.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_160.QueryValidatorUnbondingDelegationsRequest>): _160.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _160.QueryValidatorUnbondingDelegationsRequestAmino): _160.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _160.QueryValidatorUnbondingDelegationsRequest): _160.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _160.QueryValidatorUnbondingDelegationsRequestAminoMsg): _160.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _160.QueryValidatorUnbondingDelegationsRequest): _160.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryValidatorUnbondingDelegationsRequestProtoMsg): _160.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _160.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryValidatorUnbondingDelegationsRequest): _160.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _160.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_160.QueryValidatorUnbondingDelegationsResponse>): _160.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _160.QueryValidatorUnbondingDelegationsResponseAmino): _160.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _160.QueryValidatorUnbondingDelegationsResponse): _160.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _160.QueryValidatorUnbondingDelegationsResponseAminoMsg): _160.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _160.QueryValidatorUnbondingDelegationsResponse): _160.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryValidatorUnbondingDelegationsResponseProtoMsg): _160.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _160.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryValidatorUnbondingDelegationsResponse): _160.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _160.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryDelegationRequest;
                fromPartial(object: Partial<_160.QueryDelegationRequest>): _160.QueryDelegationRequest;
                fromAmino(object: _160.QueryDelegationRequestAmino): _160.QueryDelegationRequest;
                toAmino(message: _160.QueryDelegationRequest): _160.QueryDelegationRequestAmino;
                fromAminoMsg(object: _160.QueryDelegationRequestAminoMsg): _160.QueryDelegationRequest;
                toAminoMsg(message: _160.QueryDelegationRequest): _160.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _160.QueryDelegationRequestProtoMsg): _160.QueryDelegationRequest;
                toProto(message: _160.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _160.QueryDelegationRequest): _160.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _160.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryDelegationResponse;
                fromPartial(object: Partial<_160.QueryDelegationResponse>): _160.QueryDelegationResponse;
                fromAmino(object: _160.QueryDelegationResponseAmino): _160.QueryDelegationResponse;
                toAmino(message: _160.QueryDelegationResponse): _160.QueryDelegationResponseAmino;
                fromAminoMsg(object: _160.QueryDelegationResponseAminoMsg): _160.QueryDelegationResponse;
                toAminoMsg(message: _160.QueryDelegationResponse): _160.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _160.QueryDelegationResponseProtoMsg): _160.QueryDelegationResponse;
                toProto(message: _160.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _160.QueryDelegationResponse): _160.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _160.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_160.QueryUnbondingDelegationRequest>): _160.QueryUnbondingDelegationRequest;
                fromAmino(object: _160.QueryUnbondingDelegationRequestAmino): _160.QueryUnbondingDelegationRequest;
                toAmino(message: _160.QueryUnbondingDelegationRequest): _160.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _160.QueryUnbondingDelegationRequestAminoMsg): _160.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _160.QueryUnbondingDelegationRequest): _160.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _160.QueryUnbondingDelegationRequestProtoMsg): _160.QueryUnbondingDelegationRequest;
                toProto(message: _160.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _160.QueryUnbondingDelegationRequest): _160.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _160.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_160.QueryUnbondingDelegationResponse>): _160.QueryUnbondingDelegationResponse;
                fromAmino(object: _160.QueryUnbondingDelegationResponseAmino): _160.QueryUnbondingDelegationResponse;
                toAmino(message: _160.QueryUnbondingDelegationResponse): _160.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _160.QueryUnbondingDelegationResponseAminoMsg): _160.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _160.QueryUnbondingDelegationResponse): _160.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _160.QueryUnbondingDelegationResponseProtoMsg): _160.QueryUnbondingDelegationResponse;
                toProto(message: _160.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _160.QueryUnbondingDelegationResponse): _160.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _160.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_160.QueryDelegatorDelegationsRequest>): _160.QueryDelegatorDelegationsRequest;
                fromAmino(object: _160.QueryDelegatorDelegationsRequestAmino): _160.QueryDelegatorDelegationsRequest;
                toAmino(message: _160.QueryDelegatorDelegationsRequest): _160.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _160.QueryDelegatorDelegationsRequestAminoMsg): _160.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _160.QueryDelegatorDelegationsRequest): _160.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryDelegatorDelegationsRequestProtoMsg): _160.QueryDelegatorDelegationsRequest;
                toProto(message: _160.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryDelegatorDelegationsRequest): _160.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _160.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_160.QueryDelegatorDelegationsResponse>): _160.QueryDelegatorDelegationsResponse;
                fromAmino(object: _160.QueryDelegatorDelegationsResponseAmino): _160.QueryDelegatorDelegationsResponse;
                toAmino(message: _160.QueryDelegatorDelegationsResponse): _160.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _160.QueryDelegatorDelegationsResponseAminoMsg): _160.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _160.QueryDelegatorDelegationsResponse): _160.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryDelegatorDelegationsResponseProtoMsg): _160.QueryDelegatorDelegationsResponse;
                toProto(message: _160.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryDelegatorDelegationsResponse): _160.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _160.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_160.QueryDelegatorUnbondingDelegationsRequest>): _160.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _160.QueryDelegatorUnbondingDelegationsRequestAmino): _160.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _160.QueryDelegatorUnbondingDelegationsRequest): _160.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _160.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _160.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _160.QueryDelegatorUnbondingDelegationsRequest): _160.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _160.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _160.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryDelegatorUnbondingDelegationsRequest): _160.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _160.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_160.QueryDelegatorUnbondingDelegationsResponse>): _160.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _160.QueryDelegatorUnbondingDelegationsResponseAmino): _160.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _160.QueryDelegatorUnbondingDelegationsResponse): _160.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _160.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _160.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _160.QueryDelegatorUnbondingDelegationsResponse): _160.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _160.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _160.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryDelegatorUnbondingDelegationsResponse): _160.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _160.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryRedelegationsRequest;
                fromPartial(object: Partial<_160.QueryRedelegationsRequest>): _160.QueryRedelegationsRequest;
                fromAmino(object: _160.QueryRedelegationsRequestAmino): _160.QueryRedelegationsRequest;
                toAmino(message: _160.QueryRedelegationsRequest): _160.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _160.QueryRedelegationsRequestAminoMsg): _160.QueryRedelegationsRequest;
                toAminoMsg(message: _160.QueryRedelegationsRequest): _160.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryRedelegationsRequestProtoMsg): _160.QueryRedelegationsRequest;
                toProto(message: _160.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryRedelegationsRequest): _160.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _160.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryRedelegationsResponse;
                fromPartial(object: Partial<_160.QueryRedelegationsResponse>): _160.QueryRedelegationsResponse;
                fromAmino(object: _160.QueryRedelegationsResponseAmino): _160.QueryRedelegationsResponse;
                toAmino(message: _160.QueryRedelegationsResponse): _160.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _160.QueryRedelegationsResponseAminoMsg): _160.QueryRedelegationsResponse;
                toAminoMsg(message: _160.QueryRedelegationsResponse): _160.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryRedelegationsResponseProtoMsg): _160.QueryRedelegationsResponse;
                toProto(message: _160.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryRedelegationsResponse): _160.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _160.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_160.QueryDelegatorValidatorsRequest>): _160.QueryDelegatorValidatorsRequest;
                fromAmino(object: _160.QueryDelegatorValidatorsRequestAmino): _160.QueryDelegatorValidatorsRequest;
                toAmino(message: _160.QueryDelegatorValidatorsRequest): _160.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _160.QueryDelegatorValidatorsRequestAminoMsg): _160.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _160.QueryDelegatorValidatorsRequest): _160.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryDelegatorValidatorsRequestProtoMsg): _160.QueryDelegatorValidatorsRequest;
                toProto(message: _160.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryDelegatorValidatorsRequest): _160.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _160.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_160.QueryDelegatorValidatorsResponse>): _160.QueryDelegatorValidatorsResponse;
                fromAmino(object: _160.QueryDelegatorValidatorsResponseAmino): _160.QueryDelegatorValidatorsResponse;
                toAmino(message: _160.QueryDelegatorValidatorsResponse): _160.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _160.QueryDelegatorValidatorsResponseAminoMsg): _160.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _160.QueryDelegatorValidatorsResponse): _160.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryDelegatorValidatorsResponseProtoMsg): _160.QueryDelegatorValidatorsResponse;
                toProto(message: _160.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryDelegatorValidatorsResponse): _160.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _160.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_160.QueryDelegatorValidatorRequest>): _160.QueryDelegatorValidatorRequest;
                fromAmino(object: _160.QueryDelegatorValidatorRequestAmino): _160.QueryDelegatorValidatorRequest;
                toAmino(message: _160.QueryDelegatorValidatorRequest): _160.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _160.QueryDelegatorValidatorRequestAminoMsg): _160.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _160.QueryDelegatorValidatorRequest): _160.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _160.QueryDelegatorValidatorRequestProtoMsg): _160.QueryDelegatorValidatorRequest;
                toProto(message: _160.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _160.QueryDelegatorValidatorRequest): _160.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _160.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_160.QueryDelegatorValidatorResponse>): _160.QueryDelegatorValidatorResponse;
                fromAmino(object: _160.QueryDelegatorValidatorResponseAmino): _160.QueryDelegatorValidatorResponse;
                toAmino(message: _160.QueryDelegatorValidatorResponse): _160.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _160.QueryDelegatorValidatorResponseAminoMsg): _160.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _160.QueryDelegatorValidatorResponse): _160.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _160.QueryDelegatorValidatorResponseProtoMsg): _160.QueryDelegatorValidatorResponse;
                toProto(message: _160.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _160.QueryDelegatorValidatorResponse): _160.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _160.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_160.QueryHistoricalInfoRequest>): _160.QueryHistoricalInfoRequest;
                fromAmino(object: _160.QueryHistoricalInfoRequestAmino): _160.QueryHistoricalInfoRequest;
                toAmino(message: _160.QueryHistoricalInfoRequest): _160.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _160.QueryHistoricalInfoRequestAminoMsg): _160.QueryHistoricalInfoRequest;
                toAminoMsg(message: _160.QueryHistoricalInfoRequest): _160.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _160.QueryHistoricalInfoRequestProtoMsg): _160.QueryHistoricalInfoRequest;
                toProto(message: _160.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _160.QueryHistoricalInfoRequest): _160.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _160.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_160.QueryHistoricalInfoResponse>): _160.QueryHistoricalInfoResponse;
                fromAmino(object: _160.QueryHistoricalInfoResponseAmino): _160.QueryHistoricalInfoResponse;
                toAmino(message: _160.QueryHistoricalInfoResponse): _160.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _160.QueryHistoricalInfoResponseAminoMsg): _160.QueryHistoricalInfoResponse;
                toAminoMsg(message: _160.QueryHistoricalInfoResponse): _160.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _160.QueryHistoricalInfoResponseProtoMsg): _160.QueryHistoricalInfoResponse;
                toProto(message: _160.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _160.QueryHistoricalInfoResponse): _160.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _160.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _160.QueryPoolRequest;
                fromPartial(_: Partial<_160.QueryPoolRequest>): _160.QueryPoolRequest;
                fromAmino(_: _160.QueryPoolRequestAmino): _160.QueryPoolRequest;
                toAmino(_: _160.QueryPoolRequest): _160.QueryPoolRequestAmino;
                fromAminoMsg(object: _160.QueryPoolRequestAminoMsg): _160.QueryPoolRequest;
                toAminoMsg(message: _160.QueryPoolRequest): _160.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _160.QueryPoolRequestProtoMsg): _160.QueryPoolRequest;
                toProto(message: _160.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _160.QueryPoolRequest): _160.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _160.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryPoolResponse;
                fromPartial(object: Partial<_160.QueryPoolResponse>): _160.QueryPoolResponse;
                fromAmino(object: _160.QueryPoolResponseAmino): _160.QueryPoolResponse;
                toAmino(message: _160.QueryPoolResponse): _160.QueryPoolResponseAmino;
                fromAminoMsg(object: _160.QueryPoolResponseAminoMsg): _160.QueryPoolResponse;
                toAminoMsg(message: _160.QueryPoolResponse): _160.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _160.QueryPoolResponseProtoMsg): _160.QueryPoolResponse;
                toProto(message: _160.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _160.QueryPoolResponse): _160.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _160.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _160.QueryParamsRequest;
                fromPartial(_: Partial<_160.QueryParamsRequest>): _160.QueryParamsRequest;
                fromAmino(_: _160.QueryParamsRequestAmino): _160.QueryParamsRequest;
                toAmino(_: _160.QueryParamsRequest): _160.QueryParamsRequestAmino;
                fromAminoMsg(object: _160.QueryParamsRequestAminoMsg): _160.QueryParamsRequest;
                toAminoMsg(message: _160.QueryParamsRequest): _160.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryParamsRequestProtoMsg): _160.QueryParamsRequest;
                toProto(message: _160.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryParamsRequest): _160.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _160.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.QueryParamsResponse;
                fromPartial(object: Partial<_160.QueryParamsResponse>): _160.QueryParamsResponse;
                fromAmino(object: _160.QueryParamsResponseAmino): _160.QueryParamsResponse;
                toAmino(message: _160.QueryParamsResponse): _160.QueryParamsResponseAmino;
                fromAminoMsg(object: _160.QueryParamsResponseAminoMsg): _160.QueryParamsResponse;
                toAminoMsg(message: _160.QueryParamsResponse): _160.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryParamsResponseProtoMsg): _160.QueryParamsResponse;
                toProto(message: _160.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryParamsResponse): _160.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _159.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.LastValidatorPower;
                fromPartial(object: Partial<_159.LastValidatorPower>): _159.LastValidatorPower;
                fromAmino(object: _159.LastValidatorPowerAmino): _159.LastValidatorPower;
                toAmino(message: _159.LastValidatorPower): _159.LastValidatorPowerAmino;
                fromAminoMsg(object: _159.LastValidatorPowerAminoMsg): _159.LastValidatorPower;
                toAminoMsg(message: _159.LastValidatorPower): _159.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _159.LastValidatorPowerProtoMsg): _159.LastValidatorPower;
                toProto(message: _159.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _159.LastValidatorPower): _159.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _158.AuthorizationType;
            authorizationTypeToJSON(object: _158.AuthorizationType): string;
            AuthorizationType: typeof _158.AuthorizationType;
            AuthorizationTypeSDKType: typeof _158.AuthorizationType;
            AuthorizationTypeAmino: typeof _158.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _158.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.StakeAuthorization;
                fromPartial(object: Partial<_158.StakeAuthorization>): _158.StakeAuthorization;
                fromAmino(object: _158.StakeAuthorizationAmino): _158.StakeAuthorization;
                toAmino(message: _158.StakeAuthorization): _158.StakeAuthorizationAmino;
                fromAminoMsg(object: _158.StakeAuthorizationAminoMsg): _158.StakeAuthorization;
                toAminoMsg(message: _158.StakeAuthorization): _158.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _158.StakeAuthorizationProtoMsg): _158.StakeAuthorization;
                toProto(message: _158.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _158.StakeAuthorization): _158.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _158.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.StakeAuthorization_Validators;
                fromPartial(object: Partial<_158.StakeAuthorization_Validators>): _158.StakeAuthorization_Validators;
                fromAmino(object: _158.StakeAuthorization_ValidatorsAmino): _158.StakeAuthorization_Validators;
                toAmino(message: _158.StakeAuthorization_Validators): _158.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _158.StakeAuthorization_ValidatorsAminoMsg): _158.StakeAuthorization_Validators;
                toAminoMsg(message: _158.StakeAuthorization_Validators): _158.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _158.StakeAuthorization_ValidatorsProtoMsg): _158.StakeAuthorization_Validators;
                toProto(message: _158.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _158.StakeAuthorization_Validators): _158.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _163.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.Config;
                    fromPartial(object: Partial<_163.Config>): _163.Config;
                    fromAmino(object: _163.ConfigAmino): _163.Config;
                    toAmino(message: _163.Config): _163.ConfigAmino;
                    fromAminoMsg(object: _163.ConfigAminoMsg): _163.Config;
                    toAminoMsg(message: _163.Config): _163.ConfigAminoMsg;
                    fromProtoMsg(message: _163.ConfigProtoMsg): _163.Config;
                    toProto(message: _163.Config): Uint8Array;
                    toProtoMsg(message: _163.Config): _163.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _164.SignMode;
                signModeToJSON(object: _164.SignMode): string;
                SignMode: typeof _164.SignMode;
                SignModeSDKType: typeof _164.SignMode;
                SignModeAmino: typeof _164.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _164.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.SignatureDescriptors;
                    fromPartial(object: Partial<_164.SignatureDescriptors>): _164.SignatureDescriptors;
                    fromAmino(object: _164.SignatureDescriptorsAmino): _164.SignatureDescriptors;
                    toAmino(message: _164.SignatureDescriptors): _164.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _164.SignatureDescriptorsAminoMsg): _164.SignatureDescriptors;
                    toAminoMsg(message: _164.SignatureDescriptors): _164.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _164.SignatureDescriptorsProtoMsg): _164.SignatureDescriptors;
                    toProto(message: _164.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _164.SignatureDescriptors): _164.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _164.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.SignatureDescriptor;
                    fromPartial(object: Partial<_164.SignatureDescriptor>): _164.SignatureDescriptor;
                    fromAmino(object: _164.SignatureDescriptorAmino): _164.SignatureDescriptor;
                    toAmino(message: _164.SignatureDescriptor): _164.SignatureDescriptorAmino;
                    fromAminoMsg(object: _164.SignatureDescriptorAminoMsg): _164.SignatureDescriptor;
                    toAminoMsg(message: _164.SignatureDescriptor): _164.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _164.SignatureDescriptorProtoMsg): _164.SignatureDescriptor;
                    toProto(message: _164.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _164.SignatureDescriptor): _164.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _164.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_164.SignatureDescriptor_Data>): _164.SignatureDescriptor_Data;
                    fromAmino(object: _164.SignatureDescriptor_DataAmino): _164.SignatureDescriptor_Data;
                    toAmino(message: _164.SignatureDescriptor_Data): _164.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _164.SignatureDescriptor_DataAminoMsg): _164.SignatureDescriptor_Data;
                    toAminoMsg(message: _164.SignatureDescriptor_Data): _164.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _164.SignatureDescriptor_DataProtoMsg): _164.SignatureDescriptor_Data;
                    toProto(message: _164.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _164.SignatureDescriptor_Data): _164.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _164.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_164.SignatureDescriptor_Data_Single>): _164.SignatureDescriptor_Data_Single;
                    fromAmino(object: _164.SignatureDescriptor_Data_SingleAmino): _164.SignatureDescriptor_Data_Single;
                    toAmino(message: _164.SignatureDescriptor_Data_Single): _164.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _164.SignatureDescriptor_Data_SingleAminoMsg): _164.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _164.SignatureDescriptor_Data_Single): _164.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _164.SignatureDescriptor_Data_SingleProtoMsg): _164.SignatureDescriptor_Data_Single;
                    toProto(message: _164.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _164.SignatureDescriptor_Data_Single): _164.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _164.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_164.SignatureDescriptor_Data_Multi>): _164.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _164.SignatureDescriptor_Data_MultiAmino): _164.SignatureDescriptor_Data_Multi;
                    toAmino(message: _164.SignatureDescriptor_Data_Multi): _164.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _164.SignatureDescriptor_Data_MultiAminoMsg): _164.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _164.SignatureDescriptor_Data_Multi): _164.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _164.SignatureDescriptor_Data_MultiProtoMsg): _164.SignatureDescriptor_Data_Multi;
                    toProto(message: _164.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _164.SignatureDescriptor_Data_Multi): _164.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _301.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _165.SimulateRequest): Promise<_165.SimulateResponse>;
                getTx(request: _165.GetTxRequest): Promise<_165.GetTxResponse>;
                broadcastTx(request: _165.BroadcastTxRequest): Promise<_165.BroadcastTxResponse>;
                getTxsEvent(request: _165.GetTxsEventRequest): Promise<_165.GetTxsEventResponse>;
                getBlockWithTxs(request: _165.GetBlockWithTxsRequest): Promise<_165.GetBlockWithTxsResponse>;
                txDecode(request: _165.TxDecodeRequest): Promise<_165.TxDecodeResponse>;
                txEncode(request: _165.TxEncodeRequest): Promise<_165.TxEncodeResponse>;
                txEncodeAmino(request: _165.TxEncodeAminoRequest): Promise<_165.TxEncodeAminoResponse>;
                txDecodeAmino(request: _165.TxDecodeAminoRequest): Promise<_165.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _279.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _166.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.Tx;
                fromPartial(object: Partial<_166.Tx>): _166.Tx;
                fromAmino(object: _166.TxAmino): _166.Tx;
                toAmino(message: _166.Tx): _166.TxAmino;
                fromAminoMsg(object: _166.TxAminoMsg): _166.Tx;
                toAminoMsg(message: _166.Tx): _166.TxAminoMsg;
                fromProtoMsg(message: _166.TxProtoMsg): _166.Tx;
                toProto(message: _166.Tx): Uint8Array;
                toProtoMsg(message: _166.Tx): _166.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _166.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.TxRaw;
                fromPartial(object: Partial<_166.TxRaw>): _166.TxRaw;
                fromAmino(object: _166.TxRawAmino): _166.TxRaw;
                toAmino(message: _166.TxRaw): _166.TxRawAmino;
                fromAminoMsg(object: _166.TxRawAminoMsg): _166.TxRaw;
                toAminoMsg(message: _166.TxRaw): _166.TxRawAminoMsg;
                fromProtoMsg(message: _166.TxRawProtoMsg): _166.TxRaw;
                toProto(message: _166.TxRaw): Uint8Array;
                toProtoMsg(message: _166.TxRaw): _166.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _166.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.SignDoc;
                fromPartial(object: Partial<_166.SignDoc>): _166.SignDoc;
                fromAmino(object: _166.SignDocAmino): _166.SignDoc;
                toAmino(message: _166.SignDoc): _166.SignDocAmino;
                fromAminoMsg(object: _166.SignDocAminoMsg): _166.SignDoc;
                toAminoMsg(message: _166.SignDoc): _166.SignDocAminoMsg;
                fromProtoMsg(message: _166.SignDocProtoMsg): _166.SignDoc;
                toProto(message: _166.SignDoc): Uint8Array;
                toProtoMsg(message: _166.SignDoc): _166.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _166.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.SignDocDirectAux;
                fromPartial(object: Partial<_166.SignDocDirectAux>): _166.SignDocDirectAux;
                fromAmino(object: _166.SignDocDirectAuxAmino): _166.SignDocDirectAux;
                toAmino(message: _166.SignDocDirectAux): _166.SignDocDirectAuxAmino;
                fromAminoMsg(object: _166.SignDocDirectAuxAminoMsg): _166.SignDocDirectAux;
                toAminoMsg(message: _166.SignDocDirectAux): _166.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _166.SignDocDirectAuxProtoMsg): _166.SignDocDirectAux;
                toProto(message: _166.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _166.SignDocDirectAux): _166.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _166.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.TxBody;
                fromPartial(object: Partial<_166.TxBody>): _166.TxBody;
                fromAmino(object: _166.TxBodyAmino): _166.TxBody;
                toAmino(message: _166.TxBody): _166.TxBodyAmino;
                fromAminoMsg(object: _166.TxBodyAminoMsg): _166.TxBody;
                toAminoMsg(message: _166.TxBody): _166.TxBodyAminoMsg;
                fromProtoMsg(message: _166.TxBodyProtoMsg): _166.TxBody;
                toProto(message: _166.TxBody): Uint8Array;
                toProtoMsg(message: _166.TxBody): _166.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _166.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.AuthInfo;
                fromPartial(object: Partial<_166.AuthInfo>): _166.AuthInfo;
                fromAmino(object: _166.AuthInfoAmino): _166.AuthInfo;
                toAmino(message: _166.AuthInfo): _166.AuthInfoAmino;
                fromAminoMsg(object: _166.AuthInfoAminoMsg): _166.AuthInfo;
                toAminoMsg(message: _166.AuthInfo): _166.AuthInfoAminoMsg;
                fromProtoMsg(message: _166.AuthInfoProtoMsg): _166.AuthInfo;
                toProto(message: _166.AuthInfo): Uint8Array;
                toProtoMsg(message: _166.AuthInfo): _166.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _166.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.SignerInfo;
                fromPartial(object: Partial<_166.SignerInfo>): _166.SignerInfo;
                fromAmino(object: _166.SignerInfoAmino): _166.SignerInfo;
                toAmino(message: _166.SignerInfo): _166.SignerInfoAmino;
                fromAminoMsg(object: _166.SignerInfoAminoMsg): _166.SignerInfo;
                toAminoMsg(message: _166.SignerInfo): _166.SignerInfoAminoMsg;
                fromProtoMsg(message: _166.SignerInfoProtoMsg): _166.SignerInfo;
                toProto(message: _166.SignerInfo): Uint8Array;
                toProtoMsg(message: _166.SignerInfo): _166.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _166.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.ModeInfo;
                fromPartial(object: Partial<_166.ModeInfo>): _166.ModeInfo;
                fromAmino(object: _166.ModeInfoAmino): _166.ModeInfo;
                toAmino(message: _166.ModeInfo): _166.ModeInfoAmino;
                fromAminoMsg(object: _166.ModeInfoAminoMsg): _166.ModeInfo;
                toAminoMsg(message: _166.ModeInfo): _166.ModeInfoAminoMsg;
                fromProtoMsg(message: _166.ModeInfoProtoMsg): _166.ModeInfo;
                toProto(message: _166.ModeInfo): Uint8Array;
                toProtoMsg(message: _166.ModeInfo): _166.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _166.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.ModeInfo_Single;
                fromPartial(object: Partial<_166.ModeInfo_Single>): _166.ModeInfo_Single;
                fromAmino(object: _166.ModeInfo_SingleAmino): _166.ModeInfo_Single;
                toAmino(message: _166.ModeInfo_Single): _166.ModeInfo_SingleAmino;
                fromAminoMsg(object: _166.ModeInfo_SingleAminoMsg): _166.ModeInfo_Single;
                toAminoMsg(message: _166.ModeInfo_Single): _166.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _166.ModeInfo_SingleProtoMsg): _166.ModeInfo_Single;
                toProto(message: _166.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _166.ModeInfo_Single): _166.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _166.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.ModeInfo_Multi;
                fromPartial(object: Partial<_166.ModeInfo_Multi>): _166.ModeInfo_Multi;
                fromAmino(object: _166.ModeInfo_MultiAmino): _166.ModeInfo_Multi;
                toAmino(message: _166.ModeInfo_Multi): _166.ModeInfo_MultiAmino;
                fromAminoMsg(object: _166.ModeInfo_MultiAminoMsg): _166.ModeInfo_Multi;
                toAminoMsg(message: _166.ModeInfo_Multi): _166.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _166.ModeInfo_MultiProtoMsg): _166.ModeInfo_Multi;
                toProto(message: _166.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _166.ModeInfo_Multi): _166.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _166.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.Fee;
                fromPartial(object: Partial<_166.Fee>): _166.Fee;
                fromAmino(object: _166.FeeAmino): _166.Fee;
                toAmino(message: _166.Fee): _166.FeeAmino;
                fromAminoMsg(object: _166.FeeAminoMsg): _166.Fee;
                toAminoMsg(message: _166.Fee): _166.FeeAminoMsg;
                fromProtoMsg(message: _166.FeeProtoMsg): _166.Fee;
                toProto(message: _166.Fee): Uint8Array;
                toProtoMsg(message: _166.Fee): _166.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _166.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.Tip;
                fromPartial(object: Partial<_166.Tip>): _166.Tip;
                fromAmino(object: _166.TipAmino): _166.Tip;
                toAmino(message: _166.Tip): _166.TipAmino;
                fromAminoMsg(object: _166.TipAminoMsg): _166.Tip;
                toAminoMsg(message: _166.Tip): _166.TipAminoMsg;
                fromProtoMsg(message: _166.TipProtoMsg): _166.Tip;
                toProto(message: _166.Tip): Uint8Array;
                toProtoMsg(message: _166.Tip): _166.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _166.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.AuxSignerData;
                fromPartial(object: Partial<_166.AuxSignerData>): _166.AuxSignerData;
                fromAmino(object: _166.AuxSignerDataAmino): _166.AuxSignerData;
                toAmino(message: _166.AuxSignerData): _166.AuxSignerDataAmino;
                fromAminoMsg(object: _166.AuxSignerDataAminoMsg): _166.AuxSignerData;
                toAminoMsg(message: _166.AuxSignerData): _166.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _166.AuxSignerDataProtoMsg): _166.AuxSignerData;
                toProto(message: _166.AuxSignerData): Uint8Array;
                toProtoMsg(message: _166.AuxSignerData): _166.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _165.OrderBy;
            orderByToJSON(object: _165.OrderBy): string;
            broadcastModeFromJSON(object: any): _165.BroadcastMode;
            broadcastModeToJSON(object: _165.BroadcastMode): string;
            OrderBy: typeof _165.OrderBy;
            OrderBySDKType: typeof _165.OrderBy;
            OrderByAmino: typeof _165.OrderBy;
            BroadcastMode: typeof _165.BroadcastMode;
            BroadcastModeSDKType: typeof _165.BroadcastMode;
            BroadcastModeAmino: typeof _165.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _165.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.GetTxsEventRequest;
                fromPartial(object: Partial<_165.GetTxsEventRequest>): _165.GetTxsEventRequest;
                fromAmino(object: _165.GetTxsEventRequestAmino): _165.GetTxsEventRequest;
                toAmino(message: _165.GetTxsEventRequest): _165.GetTxsEventRequestAmino;
                fromAminoMsg(object: _165.GetTxsEventRequestAminoMsg): _165.GetTxsEventRequest;
                toAminoMsg(message: _165.GetTxsEventRequest): _165.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _165.GetTxsEventRequestProtoMsg): _165.GetTxsEventRequest;
                toProto(message: _165.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _165.GetTxsEventRequest): _165.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _165.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.GetTxsEventResponse;
                fromPartial(object: Partial<_165.GetTxsEventResponse>): _165.GetTxsEventResponse;
                fromAmino(object: _165.GetTxsEventResponseAmino): _165.GetTxsEventResponse;
                toAmino(message: _165.GetTxsEventResponse): _165.GetTxsEventResponseAmino;
                fromAminoMsg(object: _165.GetTxsEventResponseAminoMsg): _165.GetTxsEventResponse;
                toAminoMsg(message: _165.GetTxsEventResponse): _165.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _165.GetTxsEventResponseProtoMsg): _165.GetTxsEventResponse;
                toProto(message: _165.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _165.GetTxsEventResponse): _165.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _165.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.BroadcastTxRequest;
                fromPartial(object: Partial<_165.BroadcastTxRequest>): _165.BroadcastTxRequest;
                fromAmino(object: _165.BroadcastTxRequestAmino): _165.BroadcastTxRequest;
                toAmino(message: _165.BroadcastTxRequest): _165.BroadcastTxRequestAmino;
                fromAminoMsg(object: _165.BroadcastTxRequestAminoMsg): _165.BroadcastTxRequest;
                toAminoMsg(message: _165.BroadcastTxRequest): _165.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _165.BroadcastTxRequestProtoMsg): _165.BroadcastTxRequest;
                toProto(message: _165.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _165.BroadcastTxRequest): _165.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _165.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.BroadcastTxResponse;
                fromPartial(object: Partial<_165.BroadcastTxResponse>): _165.BroadcastTxResponse;
                fromAmino(object: _165.BroadcastTxResponseAmino): _165.BroadcastTxResponse;
                toAmino(message: _165.BroadcastTxResponse): _165.BroadcastTxResponseAmino;
                fromAminoMsg(object: _165.BroadcastTxResponseAminoMsg): _165.BroadcastTxResponse;
                toAminoMsg(message: _165.BroadcastTxResponse): _165.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _165.BroadcastTxResponseProtoMsg): _165.BroadcastTxResponse;
                toProto(message: _165.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _165.BroadcastTxResponse): _165.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _165.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.SimulateRequest;
                fromPartial(object: Partial<_165.SimulateRequest>): _165.SimulateRequest;
                fromAmino(object: _165.SimulateRequestAmino): _165.SimulateRequest;
                toAmino(message: _165.SimulateRequest): _165.SimulateRequestAmino;
                fromAminoMsg(object: _165.SimulateRequestAminoMsg): _165.SimulateRequest;
                toAminoMsg(message: _165.SimulateRequest): _165.SimulateRequestAminoMsg;
                fromProtoMsg(message: _165.SimulateRequestProtoMsg): _165.SimulateRequest;
                toProto(message: _165.SimulateRequest): Uint8Array;
                toProtoMsg(message: _165.SimulateRequest): _165.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _165.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.SimulateResponse;
                fromPartial(object: Partial<_165.SimulateResponse>): _165.SimulateResponse;
                fromAmino(object: _165.SimulateResponseAmino): _165.SimulateResponse;
                toAmino(message: _165.SimulateResponse): _165.SimulateResponseAmino;
                fromAminoMsg(object: _165.SimulateResponseAminoMsg): _165.SimulateResponse;
                toAminoMsg(message: _165.SimulateResponse): _165.SimulateResponseAminoMsg;
                fromProtoMsg(message: _165.SimulateResponseProtoMsg): _165.SimulateResponse;
                toProto(message: _165.SimulateResponse): Uint8Array;
                toProtoMsg(message: _165.SimulateResponse): _165.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _165.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.GetTxRequest;
                fromPartial(object: Partial<_165.GetTxRequest>): _165.GetTxRequest;
                fromAmino(object: _165.GetTxRequestAmino): _165.GetTxRequest;
                toAmino(message: _165.GetTxRequest): _165.GetTxRequestAmino;
                fromAminoMsg(object: _165.GetTxRequestAminoMsg): _165.GetTxRequest;
                toAminoMsg(message: _165.GetTxRequest): _165.GetTxRequestAminoMsg;
                fromProtoMsg(message: _165.GetTxRequestProtoMsg): _165.GetTxRequest;
                toProto(message: _165.GetTxRequest): Uint8Array;
                toProtoMsg(message: _165.GetTxRequest): _165.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _165.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.GetTxResponse;
                fromPartial(object: Partial<_165.GetTxResponse>): _165.GetTxResponse;
                fromAmino(object: _165.GetTxResponseAmino): _165.GetTxResponse;
                toAmino(message: _165.GetTxResponse): _165.GetTxResponseAmino;
                fromAminoMsg(object: _165.GetTxResponseAminoMsg): _165.GetTxResponse;
                toAminoMsg(message: _165.GetTxResponse): _165.GetTxResponseAminoMsg;
                fromProtoMsg(message: _165.GetTxResponseProtoMsg): _165.GetTxResponse;
                toProto(message: _165.GetTxResponse): Uint8Array;
                toProtoMsg(message: _165.GetTxResponse): _165.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _165.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_165.GetBlockWithTxsRequest>): _165.GetBlockWithTxsRequest;
                fromAmino(object: _165.GetBlockWithTxsRequestAmino): _165.GetBlockWithTxsRequest;
                toAmino(message: _165.GetBlockWithTxsRequest): _165.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _165.GetBlockWithTxsRequestAminoMsg): _165.GetBlockWithTxsRequest;
                toAminoMsg(message: _165.GetBlockWithTxsRequest): _165.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _165.GetBlockWithTxsRequestProtoMsg): _165.GetBlockWithTxsRequest;
                toProto(message: _165.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _165.GetBlockWithTxsRequest): _165.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _165.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_165.GetBlockWithTxsResponse>): _165.GetBlockWithTxsResponse;
                fromAmino(object: _165.GetBlockWithTxsResponseAmino): _165.GetBlockWithTxsResponse;
                toAmino(message: _165.GetBlockWithTxsResponse): _165.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _165.GetBlockWithTxsResponseAminoMsg): _165.GetBlockWithTxsResponse;
                toAminoMsg(message: _165.GetBlockWithTxsResponse): _165.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _165.GetBlockWithTxsResponseProtoMsg): _165.GetBlockWithTxsResponse;
                toProto(message: _165.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _165.GetBlockWithTxsResponse): _165.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _165.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.TxDecodeRequest;
                fromPartial(object: Partial<_165.TxDecodeRequest>): _165.TxDecodeRequest;
                fromAmino(object: _165.TxDecodeRequestAmino): _165.TxDecodeRequest;
                toAmino(message: _165.TxDecodeRequest): _165.TxDecodeRequestAmino;
                fromAminoMsg(object: _165.TxDecodeRequestAminoMsg): _165.TxDecodeRequest;
                toAminoMsg(message: _165.TxDecodeRequest): _165.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _165.TxDecodeRequestProtoMsg): _165.TxDecodeRequest;
                toProto(message: _165.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _165.TxDecodeRequest): _165.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _165.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.TxDecodeResponse;
                fromPartial(object: Partial<_165.TxDecodeResponse>): _165.TxDecodeResponse;
                fromAmino(object: _165.TxDecodeResponseAmino): _165.TxDecodeResponse;
                toAmino(message: _165.TxDecodeResponse): _165.TxDecodeResponseAmino;
                fromAminoMsg(object: _165.TxDecodeResponseAminoMsg): _165.TxDecodeResponse;
                toAminoMsg(message: _165.TxDecodeResponse): _165.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _165.TxDecodeResponseProtoMsg): _165.TxDecodeResponse;
                toProto(message: _165.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _165.TxDecodeResponse): _165.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _165.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.TxEncodeRequest;
                fromPartial(object: Partial<_165.TxEncodeRequest>): _165.TxEncodeRequest;
                fromAmino(object: _165.TxEncodeRequestAmino): _165.TxEncodeRequest;
                toAmino(message: _165.TxEncodeRequest): _165.TxEncodeRequestAmino;
                fromAminoMsg(object: _165.TxEncodeRequestAminoMsg): _165.TxEncodeRequest;
                toAminoMsg(message: _165.TxEncodeRequest): _165.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _165.TxEncodeRequestProtoMsg): _165.TxEncodeRequest;
                toProto(message: _165.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _165.TxEncodeRequest): _165.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _165.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.TxEncodeResponse;
                fromPartial(object: Partial<_165.TxEncodeResponse>): _165.TxEncodeResponse;
                fromAmino(object: _165.TxEncodeResponseAmino): _165.TxEncodeResponse;
                toAmino(message: _165.TxEncodeResponse): _165.TxEncodeResponseAmino;
                fromAminoMsg(object: _165.TxEncodeResponseAminoMsg): _165.TxEncodeResponse;
                toAminoMsg(message: _165.TxEncodeResponse): _165.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _165.TxEncodeResponseProtoMsg): _165.TxEncodeResponse;
                toProto(message: _165.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _165.TxEncodeResponse): _165.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _165.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.TxEncodeAminoRequest;
                fromPartial(object: Partial<_165.TxEncodeAminoRequest>): _165.TxEncodeAminoRequest;
                fromAmino(object: _165.TxEncodeAminoRequestAmino): _165.TxEncodeAminoRequest;
                toAmino(message: _165.TxEncodeAminoRequest): _165.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _165.TxEncodeAminoRequestAminoMsg): _165.TxEncodeAminoRequest;
                toAminoMsg(message: _165.TxEncodeAminoRequest): _165.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _165.TxEncodeAminoRequestProtoMsg): _165.TxEncodeAminoRequest;
                toProto(message: _165.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _165.TxEncodeAminoRequest): _165.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _165.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.TxEncodeAminoResponse;
                fromPartial(object: Partial<_165.TxEncodeAminoResponse>): _165.TxEncodeAminoResponse;
                fromAmino(object: _165.TxEncodeAminoResponseAmino): _165.TxEncodeAminoResponse;
                toAmino(message: _165.TxEncodeAminoResponse): _165.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _165.TxEncodeAminoResponseAminoMsg): _165.TxEncodeAminoResponse;
                toAminoMsg(message: _165.TxEncodeAminoResponse): _165.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _165.TxEncodeAminoResponseProtoMsg): _165.TxEncodeAminoResponse;
                toProto(message: _165.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _165.TxEncodeAminoResponse): _165.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _165.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.TxDecodeAminoRequest;
                fromPartial(object: Partial<_165.TxDecodeAminoRequest>): _165.TxDecodeAminoRequest;
                fromAmino(object: _165.TxDecodeAminoRequestAmino): _165.TxDecodeAminoRequest;
                toAmino(message: _165.TxDecodeAminoRequest): _165.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _165.TxDecodeAminoRequestAminoMsg): _165.TxDecodeAminoRequest;
                toAminoMsg(message: _165.TxDecodeAminoRequest): _165.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _165.TxDecodeAminoRequestProtoMsg): _165.TxDecodeAminoRequest;
                toProto(message: _165.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _165.TxDecodeAminoRequest): _165.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _165.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.TxDecodeAminoResponse;
                fromPartial(object: Partial<_165.TxDecodeAminoResponse>): _165.TxDecodeAminoResponse;
                fromAmino(object: _165.TxDecodeAminoResponseAmino): _165.TxDecodeAminoResponse;
                toAmino(message: _165.TxDecodeAminoResponse): _165.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _165.TxDecodeAminoResponseAminoMsg): _165.TxDecodeAminoResponse;
                toAminoMsg(message: _165.TxDecodeAminoResponse): _165.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _165.TxDecodeAminoResponseProtoMsg): _165.TxDecodeAminoResponse;
                toProto(message: _165.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _165.TxDecodeAminoResponse): _165.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _167.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.Module;
                    fromPartial(object: Partial<_167.Module>): _167.Module;
                    fromAmino(object: _167.ModuleAmino): _167.Module;
                    toAmino(message: _167.Module): _167.ModuleAmino;
                    fromAminoMsg(object: _167.ModuleAminoMsg): _167.Module;
                    toAminoMsg(message: _167.Module): _167.ModuleAminoMsg;
                    fromProtoMsg(message: _167.ModuleProtoMsg): _167.Module;
                    toProto(message: _167.Module): Uint8Array;
                    toProtoMsg(message: _167.Module): _167.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _318.MsgClientImpl;
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _168.QueryCurrentPlanRequest): Promise<_168.QueryCurrentPlanResponse>;
                appliedPlan(request: _168.QueryAppliedPlanRequest): Promise<_168.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _168.QueryUpgradedConsensusStateRequest): Promise<_168.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _168.QueryModuleVersionsRequest): Promise<_168.QueryModuleVersionsResponse>;
                authority(request?: _168.QueryAuthorityRequest): Promise<_168.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _280.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _169.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _169.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _169.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _169.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _169.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _169.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _169.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _169.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _169.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _169.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _169.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _169.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _169.MsgSoftwareUpgrade) => _169.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _169.MsgSoftwareUpgradeAmino) => _169.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _169.MsgCancelUpgrade) => _169.MsgCancelUpgradeAmino;
                    fromAmino: (object: _169.MsgCancelUpgradeAmino) => _169.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _170.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.Plan;
                fromPartial(object: Partial<_170.Plan>): _170.Plan;
                fromAmino(object: _170.PlanAmino): _170.Plan;
                toAmino(message: _170.Plan): _170.PlanAmino;
                fromAminoMsg(object: _170.PlanAminoMsg): _170.Plan;
                toAminoMsg(message: _170.Plan): _170.PlanAminoMsg;
                fromProtoMsg(message: _170.PlanProtoMsg): _170.Plan;
                toProto(message: _170.Plan): Uint8Array;
                toProtoMsg(message: _170.Plan): _170.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _170.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_170.SoftwareUpgradeProposal>): _170.SoftwareUpgradeProposal;
                fromAmino(object: _170.SoftwareUpgradeProposalAmino): _170.SoftwareUpgradeProposal;
                toAmino(message: _170.SoftwareUpgradeProposal): _170.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _170.SoftwareUpgradeProposalAminoMsg): _170.SoftwareUpgradeProposal;
                toAminoMsg(message: _170.SoftwareUpgradeProposal): _170.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _170.SoftwareUpgradeProposalProtoMsg): _170.SoftwareUpgradeProposal;
                toProto(message: _170.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _170.SoftwareUpgradeProposal): _170.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _170.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_170.CancelSoftwareUpgradeProposal>): _170.CancelSoftwareUpgradeProposal;
                fromAmino(object: _170.CancelSoftwareUpgradeProposalAmino): _170.CancelSoftwareUpgradeProposal;
                toAmino(message: _170.CancelSoftwareUpgradeProposal): _170.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _170.CancelSoftwareUpgradeProposalAminoMsg): _170.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _170.CancelSoftwareUpgradeProposal): _170.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _170.CancelSoftwareUpgradeProposalProtoMsg): _170.CancelSoftwareUpgradeProposal;
                toProto(message: _170.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _170.CancelSoftwareUpgradeProposal): _170.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _170.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.ModuleVersion;
                fromPartial(object: Partial<_170.ModuleVersion>): _170.ModuleVersion;
                fromAmino(object: _170.ModuleVersionAmino): _170.ModuleVersion;
                toAmino(message: _170.ModuleVersion): _170.ModuleVersionAmino;
                fromAminoMsg(object: _170.ModuleVersionAminoMsg): _170.ModuleVersion;
                toAminoMsg(message: _170.ModuleVersion): _170.ModuleVersionAminoMsg;
                fromProtoMsg(message: _170.ModuleVersionProtoMsg): _170.ModuleVersion;
                toProto(message: _170.ModuleVersion): Uint8Array;
                toProtoMsg(message: _170.ModuleVersion): _170.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _169.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_169.MsgSoftwareUpgrade>): _169.MsgSoftwareUpgrade;
                fromAmino(object: _169.MsgSoftwareUpgradeAmino): _169.MsgSoftwareUpgrade;
                toAmino(message: _169.MsgSoftwareUpgrade): _169.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _169.MsgSoftwareUpgradeAminoMsg): _169.MsgSoftwareUpgrade;
                toAminoMsg(message: _169.MsgSoftwareUpgrade): _169.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _169.MsgSoftwareUpgradeProtoMsg): _169.MsgSoftwareUpgrade;
                toProto(message: _169.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _169.MsgSoftwareUpgrade): _169.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _169.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _169.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_169.MsgSoftwareUpgradeResponse>): _169.MsgSoftwareUpgradeResponse;
                fromAmino(_: _169.MsgSoftwareUpgradeResponseAmino): _169.MsgSoftwareUpgradeResponse;
                toAmino(_: _169.MsgSoftwareUpgradeResponse): _169.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _169.MsgSoftwareUpgradeResponseAminoMsg): _169.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _169.MsgSoftwareUpgradeResponse): _169.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _169.MsgSoftwareUpgradeResponseProtoMsg): _169.MsgSoftwareUpgradeResponse;
                toProto(message: _169.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _169.MsgSoftwareUpgradeResponse): _169.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _169.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.MsgCancelUpgrade;
                fromPartial(object: Partial<_169.MsgCancelUpgrade>): _169.MsgCancelUpgrade;
                fromAmino(object: _169.MsgCancelUpgradeAmino): _169.MsgCancelUpgrade;
                toAmino(message: _169.MsgCancelUpgrade): _169.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _169.MsgCancelUpgradeAminoMsg): _169.MsgCancelUpgrade;
                toAminoMsg(message: _169.MsgCancelUpgrade): _169.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _169.MsgCancelUpgradeProtoMsg): _169.MsgCancelUpgrade;
                toProto(message: _169.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _169.MsgCancelUpgrade): _169.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _169.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _169.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_169.MsgCancelUpgradeResponse>): _169.MsgCancelUpgradeResponse;
                fromAmino(_: _169.MsgCancelUpgradeResponseAmino): _169.MsgCancelUpgradeResponse;
                toAmino(_: _169.MsgCancelUpgradeResponse): _169.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _169.MsgCancelUpgradeResponseAminoMsg): _169.MsgCancelUpgradeResponse;
                toAminoMsg(message: _169.MsgCancelUpgradeResponse): _169.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _169.MsgCancelUpgradeResponseProtoMsg): _169.MsgCancelUpgradeResponse;
                toProto(message: _169.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _169.MsgCancelUpgradeResponse): _169.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _168.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _168.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_168.QueryCurrentPlanRequest>): _168.QueryCurrentPlanRequest;
                fromAmino(_: _168.QueryCurrentPlanRequestAmino): _168.QueryCurrentPlanRequest;
                toAmino(_: _168.QueryCurrentPlanRequest): _168.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _168.QueryCurrentPlanRequestAminoMsg): _168.QueryCurrentPlanRequest;
                toAminoMsg(message: _168.QueryCurrentPlanRequest): _168.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _168.QueryCurrentPlanRequestProtoMsg): _168.QueryCurrentPlanRequest;
                toProto(message: _168.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _168.QueryCurrentPlanRequest): _168.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _168.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_168.QueryCurrentPlanResponse>): _168.QueryCurrentPlanResponse;
                fromAmino(object: _168.QueryCurrentPlanResponseAmino): _168.QueryCurrentPlanResponse;
                toAmino(message: _168.QueryCurrentPlanResponse): _168.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _168.QueryCurrentPlanResponseAminoMsg): _168.QueryCurrentPlanResponse;
                toAminoMsg(message: _168.QueryCurrentPlanResponse): _168.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _168.QueryCurrentPlanResponseProtoMsg): _168.QueryCurrentPlanResponse;
                toProto(message: _168.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _168.QueryCurrentPlanResponse): _168.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _168.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_168.QueryAppliedPlanRequest>): _168.QueryAppliedPlanRequest;
                fromAmino(object: _168.QueryAppliedPlanRequestAmino): _168.QueryAppliedPlanRequest;
                toAmino(message: _168.QueryAppliedPlanRequest): _168.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _168.QueryAppliedPlanRequestAminoMsg): _168.QueryAppliedPlanRequest;
                toAminoMsg(message: _168.QueryAppliedPlanRequest): _168.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _168.QueryAppliedPlanRequestProtoMsg): _168.QueryAppliedPlanRequest;
                toProto(message: _168.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _168.QueryAppliedPlanRequest): _168.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _168.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_168.QueryAppliedPlanResponse>): _168.QueryAppliedPlanResponse;
                fromAmino(object: _168.QueryAppliedPlanResponseAmino): _168.QueryAppliedPlanResponse;
                toAmino(message: _168.QueryAppliedPlanResponse): _168.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _168.QueryAppliedPlanResponseAminoMsg): _168.QueryAppliedPlanResponse;
                toAminoMsg(message: _168.QueryAppliedPlanResponse): _168.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _168.QueryAppliedPlanResponseProtoMsg): _168.QueryAppliedPlanResponse;
                toProto(message: _168.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _168.QueryAppliedPlanResponse): _168.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _168.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_168.QueryUpgradedConsensusStateRequest>): _168.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _168.QueryUpgradedConsensusStateRequestAmino): _168.QueryUpgradedConsensusStateRequest;
                toAmino(message: _168.QueryUpgradedConsensusStateRequest): _168.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _168.QueryUpgradedConsensusStateRequestAminoMsg): _168.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _168.QueryUpgradedConsensusStateRequest): _168.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _168.QueryUpgradedConsensusStateRequestProtoMsg): _168.QueryUpgradedConsensusStateRequest;
                toProto(message: _168.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _168.QueryUpgradedConsensusStateRequest): _168.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _168.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_168.QueryUpgradedConsensusStateResponse>): _168.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _168.QueryUpgradedConsensusStateResponseAmino): _168.QueryUpgradedConsensusStateResponse;
                toAmino(message: _168.QueryUpgradedConsensusStateResponse): _168.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _168.QueryUpgradedConsensusStateResponseAminoMsg): _168.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _168.QueryUpgradedConsensusStateResponse): _168.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _168.QueryUpgradedConsensusStateResponseProtoMsg): _168.QueryUpgradedConsensusStateResponse;
                toProto(message: _168.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _168.QueryUpgradedConsensusStateResponse): _168.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _168.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_168.QueryModuleVersionsRequest>): _168.QueryModuleVersionsRequest;
                fromAmino(object: _168.QueryModuleVersionsRequestAmino): _168.QueryModuleVersionsRequest;
                toAmino(message: _168.QueryModuleVersionsRequest): _168.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _168.QueryModuleVersionsRequestAminoMsg): _168.QueryModuleVersionsRequest;
                toAminoMsg(message: _168.QueryModuleVersionsRequest): _168.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _168.QueryModuleVersionsRequestProtoMsg): _168.QueryModuleVersionsRequest;
                toProto(message: _168.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _168.QueryModuleVersionsRequest): _168.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _168.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_168.QueryModuleVersionsResponse>): _168.QueryModuleVersionsResponse;
                fromAmino(object: _168.QueryModuleVersionsResponseAmino): _168.QueryModuleVersionsResponse;
                toAmino(message: _168.QueryModuleVersionsResponse): _168.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _168.QueryModuleVersionsResponseAminoMsg): _168.QueryModuleVersionsResponse;
                toAminoMsg(message: _168.QueryModuleVersionsResponse): _168.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _168.QueryModuleVersionsResponseProtoMsg): _168.QueryModuleVersionsResponse;
                toProto(message: _168.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _168.QueryModuleVersionsResponse): _168.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _168.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _168.QueryAuthorityRequest;
                fromPartial(_: Partial<_168.QueryAuthorityRequest>): _168.QueryAuthorityRequest;
                fromAmino(_: _168.QueryAuthorityRequestAmino): _168.QueryAuthorityRequest;
                toAmino(_: _168.QueryAuthorityRequest): _168.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _168.QueryAuthorityRequestAminoMsg): _168.QueryAuthorityRequest;
                toAminoMsg(message: _168.QueryAuthorityRequest): _168.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _168.QueryAuthorityRequestProtoMsg): _168.QueryAuthorityRequest;
                toProto(message: _168.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _168.QueryAuthorityRequest): _168.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _168.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.QueryAuthorityResponse;
                fromPartial(object: Partial<_168.QueryAuthorityResponse>): _168.QueryAuthorityResponse;
                fromAmino(object: _168.QueryAuthorityResponseAmino): _168.QueryAuthorityResponse;
                toAmino(message: _168.QueryAuthorityResponse): _168.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _168.QueryAuthorityResponseAminoMsg): _168.QueryAuthorityResponse;
                toAminoMsg(message: _168.QueryAuthorityResponse): _168.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _168.QueryAuthorityResponseProtoMsg): _168.QueryAuthorityResponse;
                toProto(message: _168.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _168.QueryAuthorityResponse): _168.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _171.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _171.Module;
                    fromPartial(_: Partial<_171.Module>): _171.Module;
                    fromAmino(_: _171.ModuleAmino): _171.Module;
                    toAmino(_: _171.Module): _171.ModuleAmino;
                    fromAminoMsg(object: _171.ModuleAminoMsg): _171.Module;
                    toAminoMsg(message: _171.Module): _171.ModuleAminoMsg;
                    fromProtoMsg(message: _171.ModuleProtoMsg): _171.Module;
                    toProto(message: _171.Module): Uint8Array;
                    toProtoMsg(message: _171.Module): _171.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _319.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _172.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _172.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _172.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _172.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _172.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _172.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _172.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _172.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _172.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _172.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _172.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _172.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _172.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _172.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _172.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _172.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _172.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _172.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _172.MsgCreateVestingAccount) => _172.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _172.MsgCreateVestingAccountAmino) => _172.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _172.MsgCreatePermanentLockedAccount) => _172.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _172.MsgCreatePermanentLockedAccountAmino) => _172.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _172.MsgCreatePeriodicVestingAccount) => _172.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _172.MsgCreatePeriodicVestingAccountAmino) => _172.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _173.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.BaseVestingAccount;
                fromPartial(object: Partial<_173.BaseVestingAccount>): _173.BaseVestingAccount;
                fromAmino(object: _173.BaseVestingAccountAmino): _173.BaseVestingAccount;
                toAmino(message: _173.BaseVestingAccount): _173.BaseVestingAccountAmino;
                fromAminoMsg(object: _173.BaseVestingAccountAminoMsg): _173.BaseVestingAccount;
                toAminoMsg(message: _173.BaseVestingAccount): _173.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _173.BaseVestingAccountProtoMsg): _173.BaseVestingAccount;
                toProto(message: _173.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _173.BaseVestingAccount): _173.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _173.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.ContinuousVestingAccount;
                fromPartial(object: Partial<_173.ContinuousVestingAccount>): _173.ContinuousVestingAccount;
                fromAmino(object: _173.ContinuousVestingAccountAmino): _173.ContinuousVestingAccount;
                toAmino(message: _173.ContinuousVestingAccount): _173.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _173.ContinuousVestingAccountAminoMsg): _173.ContinuousVestingAccount;
                toAminoMsg(message: _173.ContinuousVestingAccount): _173.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _173.ContinuousVestingAccountProtoMsg): _173.ContinuousVestingAccount;
                toProto(message: _173.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _173.ContinuousVestingAccount): _173.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _173.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.DelayedVestingAccount;
                fromPartial(object: Partial<_173.DelayedVestingAccount>): _173.DelayedVestingAccount;
                fromAmino(object: _173.DelayedVestingAccountAmino): _173.DelayedVestingAccount;
                toAmino(message: _173.DelayedVestingAccount): _173.DelayedVestingAccountAmino;
                fromAminoMsg(object: _173.DelayedVestingAccountAminoMsg): _173.DelayedVestingAccount;
                toAminoMsg(message: _173.DelayedVestingAccount): _173.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _173.DelayedVestingAccountProtoMsg): _173.DelayedVestingAccount;
                toProto(message: _173.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _173.DelayedVestingAccount): _173.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _173.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.Period;
                fromPartial(object: Partial<_173.Period>): _173.Period;
                fromAmino(object: _173.PeriodAmino): _173.Period;
                toAmino(message: _173.Period): _173.PeriodAmino;
                fromAminoMsg(object: _173.PeriodAminoMsg): _173.Period;
                toAminoMsg(message: _173.Period): _173.PeriodAminoMsg;
                fromProtoMsg(message: _173.PeriodProtoMsg): _173.Period;
                toProto(message: _173.Period): Uint8Array;
                toProtoMsg(message: _173.Period): _173.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _173.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.PeriodicVestingAccount;
                fromPartial(object: Partial<_173.PeriodicVestingAccount>): _173.PeriodicVestingAccount;
                fromAmino(object: _173.PeriodicVestingAccountAmino): _173.PeriodicVestingAccount;
                toAmino(message: _173.PeriodicVestingAccount): _173.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _173.PeriodicVestingAccountAminoMsg): _173.PeriodicVestingAccount;
                toAminoMsg(message: _173.PeriodicVestingAccount): _173.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _173.PeriodicVestingAccountProtoMsg): _173.PeriodicVestingAccount;
                toProto(message: _173.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _173.PeriodicVestingAccount): _173.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _173.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.PermanentLockedAccount;
                fromPartial(object: Partial<_173.PermanentLockedAccount>): _173.PermanentLockedAccount;
                fromAmino(object: _173.PermanentLockedAccountAmino): _173.PermanentLockedAccount;
                toAmino(message: _173.PermanentLockedAccount): _173.PermanentLockedAccountAmino;
                fromAminoMsg(object: _173.PermanentLockedAccountAminoMsg): _173.PermanentLockedAccount;
                toAminoMsg(message: _173.PermanentLockedAccount): _173.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _173.PermanentLockedAccountProtoMsg): _173.PermanentLockedAccount;
                toProto(message: _173.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _173.PermanentLockedAccount): _173.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _172.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.MsgCreateVestingAccount;
                fromPartial(object: Partial<_172.MsgCreateVestingAccount>): _172.MsgCreateVestingAccount;
                fromAmino(object: _172.MsgCreateVestingAccountAmino): _172.MsgCreateVestingAccount;
                toAmino(message: _172.MsgCreateVestingAccount): _172.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _172.MsgCreateVestingAccountAminoMsg): _172.MsgCreateVestingAccount;
                toAminoMsg(message: _172.MsgCreateVestingAccount): _172.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _172.MsgCreateVestingAccountProtoMsg): _172.MsgCreateVestingAccount;
                toProto(message: _172.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _172.MsgCreateVestingAccount): _172.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _172.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _172.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_172.MsgCreateVestingAccountResponse>): _172.MsgCreateVestingAccountResponse;
                fromAmino(_: _172.MsgCreateVestingAccountResponseAmino): _172.MsgCreateVestingAccountResponse;
                toAmino(_: _172.MsgCreateVestingAccountResponse): _172.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _172.MsgCreateVestingAccountResponseAminoMsg): _172.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _172.MsgCreateVestingAccountResponse): _172.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _172.MsgCreateVestingAccountResponseProtoMsg): _172.MsgCreateVestingAccountResponse;
                toProto(message: _172.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _172.MsgCreateVestingAccountResponse): _172.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _172.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_172.MsgCreatePermanentLockedAccount>): _172.MsgCreatePermanentLockedAccount;
                fromAmino(object: _172.MsgCreatePermanentLockedAccountAmino): _172.MsgCreatePermanentLockedAccount;
                toAmino(message: _172.MsgCreatePermanentLockedAccount): _172.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _172.MsgCreatePermanentLockedAccountAminoMsg): _172.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _172.MsgCreatePermanentLockedAccount): _172.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _172.MsgCreatePermanentLockedAccountProtoMsg): _172.MsgCreatePermanentLockedAccount;
                toProto(message: _172.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _172.MsgCreatePermanentLockedAccount): _172.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _172.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _172.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_172.MsgCreatePermanentLockedAccountResponse>): _172.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _172.MsgCreatePermanentLockedAccountResponseAmino): _172.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _172.MsgCreatePermanentLockedAccountResponse): _172.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _172.MsgCreatePermanentLockedAccountResponseAminoMsg): _172.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _172.MsgCreatePermanentLockedAccountResponse): _172.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _172.MsgCreatePermanentLockedAccountResponseProtoMsg): _172.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _172.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _172.MsgCreatePermanentLockedAccountResponse): _172.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _172.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_172.MsgCreatePeriodicVestingAccount>): _172.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _172.MsgCreatePeriodicVestingAccountAmino): _172.MsgCreatePeriodicVestingAccount;
                toAmino(message: _172.MsgCreatePeriodicVestingAccount): _172.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _172.MsgCreatePeriodicVestingAccountAminoMsg): _172.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _172.MsgCreatePeriodicVestingAccount): _172.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _172.MsgCreatePeriodicVestingAccountProtoMsg): _172.MsgCreatePeriodicVestingAccount;
                toProto(message: _172.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _172.MsgCreatePeriodicVestingAccount): _172.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _172.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _172.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_172.MsgCreatePeriodicVestingAccountResponse>): _172.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _172.MsgCreatePeriodicVestingAccountResponseAmino): _172.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _172.MsgCreatePeriodicVestingAccountResponse): _172.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _172.MsgCreatePeriodicVestingAccountResponseAminoMsg): _172.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _172.MsgCreatePeriodicVestingAccountResponse): _172.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _172.MsgCreatePeriodicVestingAccountResponseProtoMsg): _172.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _172.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _172.MsgCreatePeriodicVestingAccountResponse): _172.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _303.MsgClientImpl;
                };
                authz: {
                    v1beta1: _304.MsgClientImpl;
                };
                bank: {
                    v1beta1: _305.MsgClientImpl;
                };
                consensus: {
                    v1: _306.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _307.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _308.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _309.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _310.MsgClientImpl;
                };
                gov: {
                    v1: _311.MsgClientImpl;
                    v1beta1: _312.MsgClientImpl;
                };
                group: {
                    v1: _313.MsgClientImpl;
                };
                mint: {
                    v1beta1: _314.MsgClientImpl;
                };
                nft: {
                    v1beta1: _315.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _316.MsgClientImpl;
                };
                staking: {
                    v1beta1: _317.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _318.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _319.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _52.QueryConfigRequest): Promise<_52.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _56.QueryAccountsRequest): Promise<_56.QueryAccountsResponse>;
                        account(request: _56.QueryAccountRequest): Promise<_56.QueryAccountResponse>;
                        accountAddressByID(request: _56.QueryAccountAddressByIDRequest): Promise<_56.QueryAccountAddressByIDResponse>;
                        params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        moduleAccounts(request?: _56.QueryModuleAccountsRequest): Promise<_56.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _56.QueryModuleAccountByNameRequest): Promise<_56.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _56.Bech32PrefixRequest): Promise<_56.Bech32PrefixResponse>;
                        addressBytesToString(request: _56.AddressBytesToStringRequest): Promise<_56.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _56.AddressStringToBytesRequest): Promise<_56.AddressStringToBytesResponse>;
                        accountInfo(request: _56.QueryAccountInfoRequest): Promise<_56.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _62.QueryGrantsRequest): Promise<_62.QueryGrantsResponse>;
                        granterGrants(request: _62.QueryGranterGrantsRequest): Promise<_62.QueryGranterGrantsResponse>;
                        granteeGrants(request: _62.QueryGranteeGrantsRequest): Promise<_62.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _65.AppOptionsRequest): Promise<_65.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _70.QueryBalanceRequest): Promise<_70.QueryBalanceResponse>;
                        allBalances(request: _70.QueryAllBalancesRequest): Promise<_70.QueryAllBalancesResponse>;
                        spendableBalances(request: _70.QuerySpendableBalancesRequest): Promise<_70.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _70.QuerySpendableBalanceByDenomRequest): Promise<_70.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _70.QueryTotalSupplyRequest): Promise<_70.QueryTotalSupplyResponse>;
                        supplyOf(request: _70.QuerySupplyOfRequest): Promise<_70.QuerySupplyOfResponse>;
                        params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                        denomMetadata(request: _70.QueryDenomMetadataRequest): Promise<_70.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _70.QueryDenomsMetadataRequest): Promise<_70.QueryDenomsMetadataResponse>;
                        denomOwners(request: _70.QueryDenomOwnersRequest): Promise<_70.QueryDenomOwnersResponse>;
                        sendEnabled(request: _70.QuerySendEnabledRequest): Promise<_70.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _74.ConfigRequest): Promise<_74.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _81.GetNodeInfoRequest): Promise<_81.GetNodeInfoResponse>;
                            getSyncing(request?: _81.GetSyncingRequest): Promise<_81.GetSyncingResponse>;
                            getLatestBlock(request?: _81.GetLatestBlockRequest): Promise<_81.GetLatestBlockResponse>;
                            getBlockByHeight(request: _81.GetBlockByHeightRequest): Promise<_81.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _81.GetLatestValidatorSetRequest): Promise<_81.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _81.GetValidatorSetByHeightRequest): Promise<_81.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _81.ABCIQueryRequest): Promise<_81.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                        validatorDistributionInfo(request: _102.QueryValidatorDistributionInfoRequest): Promise<_102.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _102.QueryValidatorOutstandingRewardsRequest): Promise<_102.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _102.QueryValidatorCommissionRequest): Promise<_102.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _102.QueryValidatorSlashesRequest): Promise<_102.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _102.QueryDelegationRewardsRequest): Promise<_102.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _102.QueryDelegationTotalRewardsRequest): Promise<_102.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _102.QueryDelegatorValidatorsRequest): Promise<_102.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _102.QueryDelegatorWithdrawAddressRequest): Promise<_102.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _102.QueryCommunityPoolRequest): Promise<_102.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _107.QueryEvidenceRequest): Promise<_107.QueryEvidenceResponse>;
                        allEvidence(request?: _107.QueryAllEvidenceRequest): Promise<_107.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _112.QueryAllowanceRequest): Promise<_112.QueryAllowanceResponse>;
                        allowances(request: _112.QueryAllowancesRequest): Promise<_112.QueryAllowancesResponse>;
                        allowancesByGranter(request: _112.QueryAllowancesByGranterRequest): Promise<_112.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _119.QueryProposalRequest): Promise<_119.QueryProposalResponse>;
                        proposals(request: _119.QueryProposalsRequest): Promise<_119.QueryProposalsResponse>;
                        vote(request: _119.QueryVoteRequest): Promise<_119.QueryVoteResponse>;
                        votes(request: _119.QueryVotesRequest): Promise<_119.QueryVotesResponse>;
                        params(request: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                        deposit(request: _119.QueryDepositRequest): Promise<_119.QueryDepositResponse>;
                        deposits(request: _119.QueryDepositsRequest): Promise<_119.QueryDepositsResponse>;
                        tallyResult(request: _119.QueryTallyResultRequest): Promise<_119.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _123.QueryProposalRequest): Promise<_123.QueryProposalResponse>;
                        proposals(request: _123.QueryProposalsRequest): Promise<_123.QueryProposalsResponse>;
                        vote(request: _123.QueryVoteRequest): Promise<_123.QueryVoteResponse>;
                        votes(request: _123.QueryVotesRequest): Promise<_123.QueryVotesResponse>;
                        params(request: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                        deposit(request: _123.QueryDepositRequest): Promise<_123.QueryDepositResponse>;
                        deposits(request: _123.QueryDepositsRequest): Promise<_123.QueryDepositsResponse>;
                        tallyResult(request: _123.QueryTallyResultRequest): Promise<_123.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _128.QueryGroupInfoRequest): Promise<_128.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _128.QueryGroupPolicyInfoRequest): Promise<_128.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _128.QueryGroupMembersRequest): Promise<_128.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _128.QueryGroupsByAdminRequest): Promise<_128.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _128.QueryGroupPoliciesByGroupRequest): Promise<_128.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _128.QueryGroupPoliciesByAdminRequest): Promise<_128.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _128.QueryProposalRequest): Promise<_128.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _128.QueryProposalsByGroupPolicyRequest): Promise<_128.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _128.QueryVoteByProposalVoterRequest): Promise<_128.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _128.QueryVotesByProposalRequest): Promise<_128.QueryVotesByProposalResponse>;
                        votesByVoter(request: _128.QueryVotesByVoterRequest): Promise<_128.QueryVotesByVoterResponse>;
                        groupsByMember(request: _128.QueryGroupsByMemberRequest): Promise<_128.QueryGroupsByMemberResponse>;
                        tallyResult(request: _128.QueryTallyResultRequest): Promise<_128.QueryTallyResultResponse>;
                        groups(request?: _128.QueryGroupsRequest): Promise<_128.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                        inflation(request?: _134.QueryInflationRequest): Promise<_134.QueryInflationResponse>;
                        annualProvisions(request?: _134.QueryAnnualProvisionsRequest): Promise<_134.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _141.QueryBalanceRequest): Promise<_141.QueryBalanceResponse>;
                        owner(request: _141.QueryOwnerRequest): Promise<_141.QueryOwnerResponse>;
                        supply(request: _141.QuerySupplyRequest): Promise<_141.QuerySupplyResponse>;
                        nFTs(request: _141.QueryNFTsRequest): Promise<_141.QueryNFTsResponse>;
                        nFT(request: _141.QueryNFTRequest): Promise<_141.QueryNFTResponse>;
                        class(request: _141.QueryClassRequest): Promise<_141.QueryClassResponse>;
                        classes(request?: _141.QueryClassesRequest): Promise<_141.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _144.GetRequest): Promise<_144.GetResponse>;
                            list(request: _144.ListRequest): Promise<_144.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _149.QueryParamsRequest): Promise<_149.QueryParamsResponse>;
                        subspaces(request?: _149.QuerySubspacesRequest): Promise<_149.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                        signingInfo(request: _154.QuerySigningInfoRequest): Promise<_154.QuerySigningInfoResponse>;
                        signingInfos(request?: _154.QuerySigningInfosRequest): Promise<_154.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _160.QueryValidatorsRequest): Promise<_160.QueryValidatorsResponse>;
                        validator(request: _160.QueryValidatorRequest): Promise<_160.QueryValidatorResponse>;
                        validatorDelegations(request: _160.QueryValidatorDelegationsRequest): Promise<_160.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _160.QueryValidatorUnbondingDelegationsRequest): Promise<_160.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _160.QueryDelegationRequest): Promise<_160.QueryDelegationResponse>;
                        unbondingDelegation(request: _160.QueryUnbondingDelegationRequest): Promise<_160.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _160.QueryDelegatorDelegationsRequest): Promise<_160.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _160.QueryDelegatorUnbondingDelegationsRequest): Promise<_160.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _160.QueryRedelegationsRequest): Promise<_160.QueryRedelegationsResponse>;
                        delegatorValidators(request: _160.QueryDelegatorValidatorsRequest): Promise<_160.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _160.QueryDelegatorValidatorRequest): Promise<_160.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _160.QueryHistoricalInfoRequest): Promise<_160.QueryHistoricalInfoResponse>;
                        pool(request?: _160.QueryPoolRequest): Promise<_160.QueryPoolResponse>;
                        params(request?: _160.QueryParamsRequest): Promise<_160.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _165.SimulateRequest): Promise<_165.SimulateResponse>;
                        getTx(request: _165.GetTxRequest): Promise<_165.GetTxResponse>;
                        broadcastTx(request: _165.BroadcastTxRequest): Promise<_165.BroadcastTxResponse>;
                        getTxsEvent(request: _165.GetTxsEventRequest): Promise<_165.GetTxsEventResponse>;
                        getBlockWithTxs(request: _165.GetBlockWithTxsRequest): Promise<_165.GetBlockWithTxsResponse>;
                        txDecode(request: _165.TxDecodeRequest): Promise<_165.TxDecodeResponse>;
                        txEncode(request: _165.TxEncodeRequest): Promise<_165.TxEncodeResponse>;
                        txEncodeAmino(request: _165.TxEncodeAminoRequest): Promise<_165.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _165.TxDecodeAminoRequest): Promise<_165.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _168.QueryCurrentPlanRequest): Promise<_168.QueryCurrentPlanResponse>;
                        appliedPlan(request: _168.QueryAppliedPlanRequest): Promise<_168.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _168.QueryUpgradedConsensusStateRequest): Promise<_168.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _168.QueryModuleVersionsRequest): Promise<_168.QueryModuleVersionsResponse>;
                        authority(request?: _168.QueryAuthorityRequest): Promise<_168.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _262.LCDQueryClient;
                };
                authz: {
                    v1beta1: _263.LCDQueryClient;
                };
                bank: {
                    v1beta1: _264.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _265.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _266.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _267.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _268.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _269.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _270.LCDQueryClient;
                };
                gov: {
                    v1: _271.LCDQueryClient;
                    v1beta1: _272.LCDQueryClient;
                };
                group: {
                    v1: _273.LCDQueryClient;
                };
                mint: {
                    v1beta1: _274.LCDQueryClient;
                };
                nft: {
                    v1beta1: _275.LCDQueryClient;
                };
                params: {
                    v1beta1: _276.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _277.LCDQueryClient;
                };
                staking: {
                    v1beta1: _278.LCDQueryClient;
                };
                tx: {
                    v1beta1: _279.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _280.LCDQueryClient;
                };
            };
        }>;
    };
}
