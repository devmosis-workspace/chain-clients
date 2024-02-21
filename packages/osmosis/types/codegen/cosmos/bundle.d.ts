import * as _91 from "./app/runtime/v1alpha1/module";
import * as _92 from "./app/v1alpha1/config";
import * as _93 from "./app/v1alpha1/module";
import * as _94 from "./app/v1alpha1/query";
import * as _95 from "./auth/module/v1/module";
import * as _96 from "./auth/v1beta1/auth";
import * as _97 from "./auth/v1beta1/genesis";
import * as _98 from "./auth/v1beta1/query";
import * as _99 from "./auth/v1beta1/tx";
import * as _100 from "./authz/module/v1/module";
import * as _101 from "./authz/v1beta1/authz";
import * as _102 from "./authz/v1beta1/event";
import * as _103 from "./authz/v1beta1/genesis";
import * as _104 from "./authz/v1beta1/query";
import * as _105 from "./authz/v1beta1/tx";
import * as _106 from "./autocli/v1/options";
import * as _107 from "./autocli/v1/query";
import * as _108 from "./bank/module/v1/module";
import * as _109 from "./bank/v1beta1/authz";
import * as _110 from "./bank/v1beta1/bank";
import * as _111 from "./bank/v1beta1/genesis";
import * as _112 from "./bank/v1beta1/query";
import * as _113 from "./bank/v1beta1/tx";
import * as _114 from "./base/abci/v1beta1/abci";
import * as _115 from "./base/kv/v1beta1/kv";
import * as _116 from "./base/node/v1beta1/query";
import * as _117 from "./base/query/v1beta1/pagination";
import * as _118 from "./base/reflection/v1beta1/reflection";
import * as _119 from "./base/reflection/v2alpha1/reflection";
import * as _120 from "./base/snapshots/v1beta1/snapshot";
import * as _121 from "./base/store/v1beta1/commit_info";
import * as _122 from "./base/store/v1beta1/listening";
import * as _123 from "./base/tendermint/v1beta1/query";
import * as _124 from "./base/tendermint/v1beta1/types";
import * as _125 from "./base/v1beta1/coin";
import * as _126 from "./capability/module/v1/module";
import * as _127 from "./capability/v1beta1/capability";
import * as _128 from "./capability/v1beta1/genesis";
import * as _129 from "./consensus/module/v1/module";
import * as _130 from "./consensus/v1/query";
import * as _131 from "./consensus/v1/tx";
import * as _132 from "./crisis/module/v1/module";
import * as _133 from "./crisis/v1beta1/genesis";
import * as _134 from "./crisis/v1beta1/tx";
import * as _135 from "./crypto/ed25519/keys";
import * as _136 from "./crypto/hd/v1/hd";
import * as _137 from "./crypto/keyring/v1/record";
import * as _138 from "./crypto/multisig/keys";
import * as _139 from "./crypto/secp256k1/keys";
import * as _140 from "./crypto/secp256r1/keys";
import * as _141 from "./distribution/module/v1/module";
import * as _142 from "./distribution/v1beta1/distribution";
import * as _143 from "./distribution/v1beta1/genesis";
import * as _144 from "./distribution/v1beta1/query";
import * as _145 from "./distribution/v1beta1/tx";
import * as _146 from "./evidence/module/v1/module";
import * as _147 from "./evidence/v1beta1/evidence";
import * as _148 from "./evidence/v1beta1/genesis";
import * as _149 from "./evidence/v1beta1/query";
import * as _150 from "./evidence/v1beta1/tx";
import * as _151 from "./feegrant/module/v1/module";
import * as _152 from "./feegrant/v1beta1/feegrant";
import * as _153 from "./feegrant/v1beta1/genesis";
import * as _154 from "./feegrant/v1beta1/query";
import * as _155 from "./feegrant/v1beta1/tx";
import * as _156 from "./genutil/module/v1/module";
import * as _157 from "./genutil/v1beta1/genesis";
import * as _158 from "./gov/module/v1/module";
import * as _159 from "./gov/v1/genesis";
import * as _160 from "./gov/v1/gov";
import * as _161 from "./gov/v1/query";
import * as _162 from "./gov/v1/tx";
import * as _163 from "./gov/v1beta1/genesis";
import * as _164 from "./gov/v1beta1/gov";
import * as _165 from "./gov/v1beta1/query";
import * as _166 from "./gov/v1beta1/tx";
import * as _167 from "./group/module/v1/module";
import * as _168 from "./group/v1/events";
import * as _169 from "./group/v1/genesis";
import * as _170 from "./group/v1/query";
import * as _171 from "./group/v1/tx";
import * as _172 from "./group/v1/types";
import * as _173 from "./mint/module/v1/module";
import * as _174 from "./mint/v1beta1/genesis";
import * as _175 from "./mint/v1beta1/mint";
import * as _176 from "./mint/v1beta1/query";
import * as _177 from "./mint/v1beta1/tx";
import * as _179 from "./nft/module/v1/module";
import * as _180 from "./nft/v1beta1/event";
import * as _181 from "./nft/v1beta1/genesis";
import * as _182 from "./nft/v1beta1/nft";
import * as _183 from "./nft/v1beta1/query";
import * as _184 from "./nft/v1beta1/tx";
import * as _185 from "./orm/module/v1alpha1/module";
import * as _186 from "./orm/query/v1alpha1/query";
import * as _187 from "./orm/v1/orm";
import * as _188 from "./orm/v1alpha1/schema";
import * as _189 from "./params/module/v1/module";
import * as _190 from "./params/v1beta1/params";
import * as _191 from "./params/v1beta1/query";
import * as _193 from "./reflection/v1/reflection";
import * as _194 from "./slashing/module/v1/module";
import * as _195 from "./slashing/v1beta1/genesis";
import * as _196 from "./slashing/v1beta1/query";
import * as _197 from "./slashing/v1beta1/slashing";
import * as _198 from "./slashing/v1beta1/tx";
import * as _199 from "./staking/module/v1/module";
import * as _200 from "./staking/v1beta1/authz";
import * as _201 from "./staking/v1beta1/genesis";
import * as _202 from "./staking/v1beta1/query";
import * as _203 from "./staking/v1beta1/staking";
import * as _204 from "./staking/v1beta1/tx";
import * as _205 from "./tx/config/v1/config";
import * as _206 from "./tx/signing/v1beta1/signing";
import * as _207 from "./tx/v1beta1/service";
import * as _208 from "./tx/v1beta1/tx";
import * as _209 from "./upgrade/module/v1/module";
import * as _210 from "./upgrade/v1beta1/query";
import * as _211 from "./upgrade/v1beta1/tx";
import * as _212 from "./upgrade/v1beta1/upgrade";
import * as _213 from "./vesting/module/v1/module";
import * as _214 from "./vesting/v1beta1/tx";
import * as _215 from "./vesting/v1beta1/vesting";
import * as _366 from "./auth/v1beta1/query.lcd";
import * as _367 from "./authz/v1beta1/query.lcd";
import * as _368 from "./bank/v1beta1/query.lcd";
import * as _369 from "./base/node/v1beta1/query.lcd";
import * as _370 from "./base/tendermint/v1beta1/query.lcd";
import * as _371 from "./consensus/v1/query.lcd";
import * as _372 from "./distribution/v1beta1/query.lcd";
import * as _373 from "./evidence/v1beta1/query.lcd";
import * as _374 from "./feegrant/v1beta1/query.lcd";
import * as _375 from "./gov/v1/query.lcd";
import * as _376 from "./gov/v1beta1/query.lcd";
import * as _377 from "./group/v1/query.lcd";
import * as _378 from "./mint/v1beta1/query.lcd";
import * as _379 from "./nft/v1beta1/query.lcd";
import * as _380 from "./params/v1beta1/query.lcd";
import * as _381 from "./slashing/v1beta1/query.lcd";
import * as _382 from "./staking/v1beta1/query.lcd";
import * as _383 from "./tx/v1beta1/service.lcd";
import * as _384 from "./upgrade/v1beta1/query.lcd";
import * as _385 from "./app/v1alpha1/query.rpc.Query";
import * as _386 from "./auth/v1beta1/query.rpc.Query";
import * as _387 from "./authz/v1beta1/query.rpc.Query";
import * as _388 from "./autocli/v1/query.rpc.Query";
import * as _389 from "./bank/v1beta1/query.rpc.Query";
import * as _390 from "./base/node/v1beta1/query.rpc.Service";
import * as _391 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _392 from "./consensus/v1/query.rpc.Query";
import * as _393 from "./distribution/v1beta1/query.rpc.Query";
import * as _394 from "./evidence/v1beta1/query.rpc.Query";
import * as _395 from "./feegrant/v1beta1/query.rpc.Query";
import * as _396 from "./gov/v1/query.rpc.Query";
import * as _397 from "./gov/v1beta1/query.rpc.Query";
import * as _398 from "./group/v1/query.rpc.Query";
import * as _399 from "./mint/v1beta1/query.rpc.Query";
import * as _400 from "./nft/v1beta1/query.rpc.Query";
import * as _401 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _402 from "./params/v1beta1/query.rpc.Query";
import * as _403 from "./slashing/v1beta1/query.rpc.Query";
import * as _404 from "./staking/v1beta1/query.rpc.Query";
import * as _405 from "./tx/v1beta1/service.rpc.Service";
import * as _406 from "./upgrade/v1beta1/query.rpc.Query";
import * as _407 from "./auth/v1beta1/tx.rpc.msg";
import * as _408 from "./authz/v1beta1/tx.rpc.msg";
import * as _409 from "./bank/v1beta1/tx.rpc.msg";
import * as _410 from "./consensus/v1/tx.rpc.msg";
import * as _411 from "./crisis/v1beta1/tx.rpc.msg";
import * as _412 from "./distribution/v1beta1/tx.rpc.msg";
import * as _413 from "./evidence/v1beta1/tx.rpc.msg";
import * as _414 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _415 from "./gov/v1/tx.rpc.msg";
import * as _416 from "./gov/v1beta1/tx.rpc.msg";
import * as _417 from "./group/v1/tx.rpc.msg";
import * as _418 from "./mint/v1beta1/tx.rpc.msg";
import * as _419 from "./nft/v1beta1/tx.rpc.msg";
import * as _420 from "./slashing/v1beta1/tx.rpc.msg";
import * as _421 from "./staking/v1beta1/tx.rpc.msg";
import * as _422 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _423 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _91.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Module;
                    fromPartial(object: Partial<_91.Module>): _91.Module;
                    fromAmino(object: _91.ModuleAmino): _91.Module;
                    toAmino(message: _91.Module): _91.ModuleAmino;
                    fromAminoMsg(object: _91.ModuleAminoMsg): _91.Module;
                    toAminoMsg(message: _91.Module): _91.ModuleAminoMsg;
                    fromProtoMsg(message: _91.ModuleProtoMsg): _91.Module;
                    toProto(message: _91.Module): Uint8Array;
                    toProtoMsg(message: _91.Module): _91.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _91.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.StoreKeyConfig;
                    fromPartial(object: Partial<_91.StoreKeyConfig>): _91.StoreKeyConfig;
                    fromAmino(object: _91.StoreKeyConfigAmino): _91.StoreKeyConfig;
                    toAmino(message: _91.StoreKeyConfig): _91.StoreKeyConfigAmino;
                    fromAminoMsg(object: _91.StoreKeyConfigAminoMsg): _91.StoreKeyConfig;
                    toAminoMsg(message: _91.StoreKeyConfig): _91.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _91.StoreKeyConfigProtoMsg): _91.StoreKeyConfig;
                    toProto(message: _91.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _91.StoreKeyConfig): _91.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _385.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _94.QueryConfigRequest): Promise<_94.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _94.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.QueryConfigRequest;
                fromPartial(_: Partial<_94.QueryConfigRequest>): _94.QueryConfigRequest;
                fromAmino(_: _94.QueryConfigRequestAmino): _94.QueryConfigRequest;
                toAmino(_: _94.QueryConfigRequest): _94.QueryConfigRequestAmino;
                fromAminoMsg(object: _94.QueryConfigRequestAminoMsg): _94.QueryConfigRequest;
                toAminoMsg(message: _94.QueryConfigRequest): _94.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _94.QueryConfigRequestProtoMsg): _94.QueryConfigRequest;
                toProto(message: _94.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _94.QueryConfigRequest): _94.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _94.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryConfigResponse;
                fromPartial(object: Partial<_94.QueryConfigResponse>): _94.QueryConfigResponse;
                fromAmino(object: _94.QueryConfigResponseAmino): _94.QueryConfigResponse;
                toAmino(message: _94.QueryConfigResponse): _94.QueryConfigResponseAmino;
                fromAminoMsg(object: _94.QueryConfigResponseAminoMsg): _94.QueryConfigResponse;
                toAminoMsg(message: _94.QueryConfigResponse): _94.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _94.QueryConfigResponseProtoMsg): _94.QueryConfigResponse;
                toProto(message: _94.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _94.QueryConfigResponse): _94.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _93.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.ModuleDescriptor;
                fromPartial(object: Partial<_93.ModuleDescriptor>): _93.ModuleDescriptor;
                fromAmino(object: _93.ModuleDescriptorAmino): _93.ModuleDescriptor;
                toAmino(message: _93.ModuleDescriptor): _93.ModuleDescriptorAmino;
                fromAminoMsg(object: _93.ModuleDescriptorAminoMsg): _93.ModuleDescriptor;
                toAminoMsg(message: _93.ModuleDescriptor): _93.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _93.ModuleDescriptorProtoMsg): _93.ModuleDescriptor;
                toProto(message: _93.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _93.ModuleDescriptor): _93.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _93.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.PackageReference;
                fromPartial(object: Partial<_93.PackageReference>): _93.PackageReference;
                fromAmino(object: _93.PackageReferenceAmino): _93.PackageReference;
                toAmino(message: _93.PackageReference): _93.PackageReferenceAmino;
                fromAminoMsg(object: _93.PackageReferenceAminoMsg): _93.PackageReference;
                toAminoMsg(message: _93.PackageReference): _93.PackageReferenceAminoMsg;
                fromProtoMsg(message: _93.PackageReferenceProtoMsg): _93.PackageReference;
                toProto(message: _93.PackageReference): Uint8Array;
                toProtoMsg(message: _93.PackageReference): _93.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _93.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.MigrateFromInfo;
                fromPartial(object: Partial<_93.MigrateFromInfo>): _93.MigrateFromInfo;
                fromAmino(object: _93.MigrateFromInfoAmino): _93.MigrateFromInfo;
                toAmino(message: _93.MigrateFromInfo): _93.MigrateFromInfoAmino;
                fromAminoMsg(object: _93.MigrateFromInfoAminoMsg): _93.MigrateFromInfo;
                toAminoMsg(message: _93.MigrateFromInfo): _93.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _93.MigrateFromInfoProtoMsg): _93.MigrateFromInfo;
                toProto(message: _93.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _93.MigrateFromInfo): _93.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _92.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Config;
                fromPartial(object: Partial<_92.Config>): _92.Config;
                fromAmino(object: _92.ConfigAmino): _92.Config;
                toAmino(message: _92.Config): _92.ConfigAmino;
                fromAminoMsg(object: _92.ConfigAminoMsg): _92.Config;
                toAminoMsg(message: _92.Config): _92.ConfigAminoMsg;
                fromProtoMsg(message: _92.ConfigProtoMsg): _92.Config;
                toProto(message: _92.Config): Uint8Array;
                toProtoMsg(message: _92.Config): _92.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _92.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.ModuleConfig;
                fromPartial(object: Partial<_92.ModuleConfig>): _92.ModuleConfig;
                fromAmino(object: _92.ModuleConfigAmino): _92.ModuleConfig;
                toAmino(message: _92.ModuleConfig): _92.ModuleConfigAmino;
                fromAminoMsg(object: _92.ModuleConfigAminoMsg): _92.ModuleConfig;
                toAminoMsg(message: _92.ModuleConfig): _92.ModuleConfigAminoMsg;
                fromProtoMsg(message: _92.ModuleConfigProtoMsg): _92.ModuleConfig;
                toProto(message: _92.ModuleConfig): Uint8Array;
                toProtoMsg(message: _92.ModuleConfig): _92.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _92.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.GolangBinding;
                fromPartial(object: Partial<_92.GolangBinding>): _92.GolangBinding;
                fromAmino(object: _92.GolangBindingAmino): _92.GolangBinding;
                toAmino(message: _92.GolangBinding): _92.GolangBindingAmino;
                fromAminoMsg(object: _92.GolangBindingAminoMsg): _92.GolangBinding;
                toAminoMsg(message: _92.GolangBinding): _92.GolangBindingAminoMsg;
                fromProtoMsg(message: _92.GolangBindingProtoMsg): _92.GolangBinding;
                toProto(message: _92.GolangBinding): Uint8Array;
                toProtoMsg(message: _92.GolangBinding): _92.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
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
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _95.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.ModuleAccountPermission;
                    fromPartial(object: Partial<_95.ModuleAccountPermission>): _95.ModuleAccountPermission;
                    fromAmino(object: _95.ModuleAccountPermissionAmino): _95.ModuleAccountPermission;
                    toAmino(message: _95.ModuleAccountPermission): _95.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _95.ModuleAccountPermissionAminoMsg): _95.ModuleAccountPermission;
                    toAminoMsg(message: _95.ModuleAccountPermission): _95.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _95.ModuleAccountPermissionProtoMsg): _95.ModuleAccountPermission;
                    toProto(message: _95.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _95.ModuleAccountPermission): _95.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _407.MsgClientImpl;
            QueryClientImpl: typeof _386.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _98.QueryAccountsRequest): Promise<_98.QueryAccountsResponse>;
                account(request: _98.QueryAccountRequest): Promise<_98.QueryAccountResponse>;
                accountAddressByID(request: _98.QueryAccountAddressByIDRequest): Promise<_98.QueryAccountAddressByIDResponse>;
                params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                moduleAccounts(request?: _98.QueryModuleAccountsRequest): Promise<_98.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _98.QueryModuleAccountByNameRequest): Promise<_98.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _98.Bech32PrefixRequest): Promise<_98.Bech32PrefixResponse>;
                addressBytesToString(request: _98.AddressBytesToStringRequest): Promise<_98.AddressBytesToStringResponse>;
                addressStringToBytes(request: _98.AddressStringToBytesRequest): Promise<_98.AddressStringToBytesResponse>;
                accountInfo(request: _98.QueryAccountInfoRequest): Promise<_98.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _366.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _99.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _99.MsgUpdateParams): {
                        typeUrl: string;
                        value: _99.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _99.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _99.MsgUpdateParams): {
                        typeUrl: string;
                        value: _99.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _99.MsgUpdateParams) => _99.MsgUpdateParamsAmino;
                    fromAmino: (object: _99.MsgUpdateParamsAmino) => _99.MsgUpdateParams;
                };
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
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _98.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAccountsRequest;
                fromPartial(object: Partial<_98.QueryAccountsRequest>): _98.QueryAccountsRequest;
                fromAmino(object: _98.QueryAccountsRequestAmino): _98.QueryAccountsRequest;
                toAmino(message: _98.QueryAccountsRequest): _98.QueryAccountsRequestAmino;
                fromAminoMsg(object: _98.QueryAccountsRequestAminoMsg): _98.QueryAccountsRequest;
                toAminoMsg(message: _98.QueryAccountsRequest): _98.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryAccountsRequestProtoMsg): _98.QueryAccountsRequest;
                toProto(message: _98.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryAccountsRequest): _98.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _98.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAccountsResponse;
                fromPartial(object: Partial<_98.QueryAccountsResponse>): _98.QueryAccountsResponse;
                fromAmino(object: _98.QueryAccountsResponseAmino): _98.QueryAccountsResponse;
                toAmino(message: _98.QueryAccountsResponse): _98.QueryAccountsResponseAmino;
                fromAminoMsg(object: _98.QueryAccountsResponseAminoMsg): _98.QueryAccountsResponse;
                toAminoMsg(message: _98.QueryAccountsResponse): _98.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryAccountsResponseProtoMsg): _98.QueryAccountsResponse;
                toProto(message: _98.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryAccountsResponse): _98.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _98.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAccountRequest;
                fromPartial(object: Partial<_98.QueryAccountRequest>): _98.QueryAccountRequest;
                fromAmino(object: _98.QueryAccountRequestAmino): _98.QueryAccountRequest;
                toAmino(message: _98.QueryAccountRequest): _98.QueryAccountRequestAmino;
                fromAminoMsg(object: _98.QueryAccountRequestAminoMsg): _98.QueryAccountRequest;
                toAminoMsg(message: _98.QueryAccountRequest): _98.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _98.QueryAccountRequestProtoMsg): _98.QueryAccountRequest;
                toProto(message: _98.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _98.QueryAccountRequest): _98.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _98.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAccountResponse;
                fromPartial(object: Partial<_98.QueryAccountResponse>): _98.QueryAccountResponse;
                fromAmino(object: _98.QueryAccountResponseAmino): _98.QueryAccountResponse;
                toAmino(message: _98.QueryAccountResponse): _98.QueryAccountResponseAmino;
                fromAminoMsg(object: _98.QueryAccountResponseAminoMsg): _98.QueryAccountResponse;
                toAminoMsg(message: _98.QueryAccountResponse): _98.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _98.QueryAccountResponseProtoMsg): _98.QueryAccountResponse;
                toProto(message: _98.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _98.QueryAccountResponse): _98.QueryAccountResponseProtoMsg;
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
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _98.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_98.QueryModuleAccountsRequest>): _98.QueryModuleAccountsRequest;
                fromAmino(_: _98.QueryModuleAccountsRequestAmino): _98.QueryModuleAccountsRequest;
                toAmino(_: _98.QueryModuleAccountsRequest): _98.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _98.QueryModuleAccountsRequestAminoMsg): _98.QueryModuleAccountsRequest;
                toAminoMsg(message: _98.QueryModuleAccountsRequest): _98.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryModuleAccountsRequestProtoMsg): _98.QueryModuleAccountsRequest;
                toProto(message: _98.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryModuleAccountsRequest): _98.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _98.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_98.QueryModuleAccountsResponse>): _98.QueryModuleAccountsResponse;
                fromAmino(object: _98.QueryModuleAccountsResponseAmino): _98.QueryModuleAccountsResponse;
                toAmino(message: _98.QueryModuleAccountsResponse): _98.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _98.QueryModuleAccountsResponseAminoMsg): _98.QueryModuleAccountsResponse;
                toAminoMsg(message: _98.QueryModuleAccountsResponse): _98.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryModuleAccountsResponseProtoMsg): _98.QueryModuleAccountsResponse;
                toProto(message: _98.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryModuleAccountsResponse): _98.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _98.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_98.QueryModuleAccountByNameRequest>): _98.QueryModuleAccountByNameRequest;
                fromAmino(object: _98.QueryModuleAccountByNameRequestAmino): _98.QueryModuleAccountByNameRequest;
                toAmino(message: _98.QueryModuleAccountByNameRequest): _98.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _98.QueryModuleAccountByNameRequestAminoMsg): _98.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _98.QueryModuleAccountByNameRequest): _98.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _98.QueryModuleAccountByNameRequestProtoMsg): _98.QueryModuleAccountByNameRequest;
                toProto(message: _98.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _98.QueryModuleAccountByNameRequest): _98.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _98.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_98.QueryModuleAccountByNameResponse>): _98.QueryModuleAccountByNameResponse;
                fromAmino(object: _98.QueryModuleAccountByNameResponseAmino): _98.QueryModuleAccountByNameResponse;
                toAmino(message: _98.QueryModuleAccountByNameResponse): _98.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _98.QueryModuleAccountByNameResponseAminoMsg): _98.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _98.QueryModuleAccountByNameResponse): _98.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _98.QueryModuleAccountByNameResponseProtoMsg): _98.QueryModuleAccountByNameResponse;
                toProto(message: _98.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _98.QueryModuleAccountByNameResponse): _98.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _98.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.Bech32PrefixRequest;
                fromPartial(_: Partial<_98.Bech32PrefixRequest>): _98.Bech32PrefixRequest;
                fromAmino(_: _98.Bech32PrefixRequestAmino): _98.Bech32PrefixRequest;
                toAmino(_: _98.Bech32PrefixRequest): _98.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _98.Bech32PrefixRequestAminoMsg): _98.Bech32PrefixRequest;
                toAminoMsg(message: _98.Bech32PrefixRequest): _98.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _98.Bech32PrefixRequestProtoMsg): _98.Bech32PrefixRequest;
                toProto(message: _98.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _98.Bech32PrefixRequest): _98.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _98.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Bech32PrefixResponse;
                fromPartial(object: Partial<_98.Bech32PrefixResponse>): _98.Bech32PrefixResponse;
                fromAmino(object: _98.Bech32PrefixResponseAmino): _98.Bech32PrefixResponse;
                toAmino(message: _98.Bech32PrefixResponse): _98.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _98.Bech32PrefixResponseAminoMsg): _98.Bech32PrefixResponse;
                toAminoMsg(message: _98.Bech32PrefixResponse): _98.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _98.Bech32PrefixResponseProtoMsg): _98.Bech32PrefixResponse;
                toProto(message: _98.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _98.Bech32PrefixResponse): _98.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _98.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.AddressBytesToStringRequest;
                fromPartial(object: Partial<_98.AddressBytesToStringRequest>): _98.AddressBytesToStringRequest;
                fromAmino(object: _98.AddressBytesToStringRequestAmino): _98.AddressBytesToStringRequest;
                toAmino(message: _98.AddressBytesToStringRequest): _98.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _98.AddressBytesToStringRequestAminoMsg): _98.AddressBytesToStringRequest;
                toAminoMsg(message: _98.AddressBytesToStringRequest): _98.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _98.AddressBytesToStringRequestProtoMsg): _98.AddressBytesToStringRequest;
                toProto(message: _98.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _98.AddressBytesToStringRequest): _98.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _98.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.AddressBytesToStringResponse;
                fromPartial(object: Partial<_98.AddressBytesToStringResponse>): _98.AddressBytesToStringResponse;
                fromAmino(object: _98.AddressBytesToStringResponseAmino): _98.AddressBytesToStringResponse;
                toAmino(message: _98.AddressBytesToStringResponse): _98.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _98.AddressBytesToStringResponseAminoMsg): _98.AddressBytesToStringResponse;
                toAminoMsg(message: _98.AddressBytesToStringResponse): _98.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _98.AddressBytesToStringResponseProtoMsg): _98.AddressBytesToStringResponse;
                toProto(message: _98.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _98.AddressBytesToStringResponse): _98.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _98.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.AddressStringToBytesRequest;
                fromPartial(object: Partial<_98.AddressStringToBytesRequest>): _98.AddressStringToBytesRequest;
                fromAmino(object: _98.AddressStringToBytesRequestAmino): _98.AddressStringToBytesRequest;
                toAmino(message: _98.AddressStringToBytesRequest): _98.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _98.AddressStringToBytesRequestAminoMsg): _98.AddressStringToBytesRequest;
                toAminoMsg(message: _98.AddressStringToBytesRequest): _98.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _98.AddressStringToBytesRequestProtoMsg): _98.AddressStringToBytesRequest;
                toProto(message: _98.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _98.AddressStringToBytesRequest): _98.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _98.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.AddressStringToBytesResponse;
                fromPartial(object: Partial<_98.AddressStringToBytesResponse>): _98.AddressStringToBytesResponse;
                fromAmino(object: _98.AddressStringToBytesResponseAmino): _98.AddressStringToBytesResponse;
                toAmino(message: _98.AddressStringToBytesResponse): _98.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _98.AddressStringToBytesResponseAminoMsg): _98.AddressStringToBytesResponse;
                toAminoMsg(message: _98.AddressStringToBytesResponse): _98.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _98.AddressStringToBytesResponseProtoMsg): _98.AddressStringToBytesResponse;
                toProto(message: _98.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _98.AddressStringToBytesResponse): _98.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _98.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_98.QueryAccountAddressByIDRequest>): _98.QueryAccountAddressByIDRequest;
                fromAmino(object: _98.QueryAccountAddressByIDRequestAmino): _98.QueryAccountAddressByIDRequest;
                toAmino(message: _98.QueryAccountAddressByIDRequest): _98.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _98.QueryAccountAddressByIDRequestAminoMsg): _98.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _98.QueryAccountAddressByIDRequest): _98.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _98.QueryAccountAddressByIDRequestProtoMsg): _98.QueryAccountAddressByIDRequest;
                toProto(message: _98.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _98.QueryAccountAddressByIDRequest): _98.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _98.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_98.QueryAccountAddressByIDResponse>): _98.QueryAccountAddressByIDResponse;
                fromAmino(object: _98.QueryAccountAddressByIDResponseAmino): _98.QueryAccountAddressByIDResponse;
                toAmino(message: _98.QueryAccountAddressByIDResponse): _98.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _98.QueryAccountAddressByIDResponseAminoMsg): _98.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _98.QueryAccountAddressByIDResponse): _98.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _98.QueryAccountAddressByIDResponseProtoMsg): _98.QueryAccountAddressByIDResponse;
                toProto(message: _98.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _98.QueryAccountAddressByIDResponse): _98.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _98.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAccountInfoRequest;
                fromPartial(object: Partial<_98.QueryAccountInfoRequest>): _98.QueryAccountInfoRequest;
                fromAmino(object: _98.QueryAccountInfoRequestAmino): _98.QueryAccountInfoRequest;
                toAmino(message: _98.QueryAccountInfoRequest): _98.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _98.QueryAccountInfoRequestAminoMsg): _98.QueryAccountInfoRequest;
                toAminoMsg(message: _98.QueryAccountInfoRequest): _98.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _98.QueryAccountInfoRequestProtoMsg): _98.QueryAccountInfoRequest;
                toProto(message: _98.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _98.QueryAccountInfoRequest): _98.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _98.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAccountInfoResponse;
                fromPartial(object: Partial<_98.QueryAccountInfoResponse>): _98.QueryAccountInfoResponse;
                fromAmino(object: _98.QueryAccountInfoResponseAmino): _98.QueryAccountInfoResponse;
                toAmino(message: _98.QueryAccountInfoResponse): _98.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _98.QueryAccountInfoResponseAminoMsg): _98.QueryAccountInfoResponse;
                toAminoMsg(message: _98.QueryAccountInfoResponse): _98.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _98.QueryAccountInfoResponseProtoMsg): _98.QueryAccountInfoResponse;
                toProto(message: _98.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _98.QueryAccountInfoResponse): _98.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _96.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _96.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _96.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.BaseAccount;
                fromPartial(object: Partial<_96.BaseAccount>): _96.BaseAccount;
                fromAmino(object: _96.BaseAccountAmino): _96.BaseAccount;
                toAmino(message: _96.BaseAccount): _96.BaseAccountAmino;
                fromAminoMsg(object: _96.BaseAccountAminoMsg): _96.BaseAccount;
                toAminoMsg(message: _96.BaseAccount): _96.BaseAccountAminoMsg;
                fromProtoMsg(message: _96.BaseAccountProtoMsg): _96.BaseAccount;
                toProto(message: _96.BaseAccount): Uint8Array;
                toProtoMsg(message: _96.BaseAccount): _96.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _96.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.ModuleAccount;
                fromPartial(object: Partial<_96.ModuleAccount>): _96.ModuleAccount;
                fromAmino(object: _96.ModuleAccountAmino): _96.ModuleAccount;
                toAmino(message: _96.ModuleAccount): _96.ModuleAccountAmino;
                fromAminoMsg(object: _96.ModuleAccountAminoMsg): _96.ModuleAccount;
                toAminoMsg(message: _96.ModuleAccount): _96.ModuleAccountAminoMsg;
                fromProtoMsg(message: _96.ModuleAccountProtoMsg): _96.ModuleAccount;
                toProto(message: _96.ModuleAccount): Uint8Array;
                toProtoMsg(message: _96.ModuleAccount): _96.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _96.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.ModuleCredential;
                fromPartial(object: Partial<_96.ModuleCredential>): _96.ModuleCredential;
                fromAmino(object: _96.ModuleCredentialAmino): _96.ModuleCredential;
                toAmino(message: _96.ModuleCredential): _96.ModuleCredentialAmino;
                fromAminoMsg(object: _96.ModuleCredentialAminoMsg): _96.ModuleCredential;
                toAminoMsg(message: _96.ModuleCredential): _96.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _96.ModuleCredentialProtoMsg): _96.ModuleCredential;
                toProto(message: _96.ModuleCredential): Uint8Array;
                toProtoMsg(message: _96.ModuleCredential): _96.ModuleCredentialProtoMsg;
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
        };
    }
    namespace authz {
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
            MsgClientImpl: typeof _408.MsgClientImpl;
            QueryClientImpl: typeof _387.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _104.QueryGrantsRequest): Promise<_104.QueryGrantsResponse>;
                granterGrants(request: _104.QueryGranterGrantsRequest): Promise<_104.QueryGranterGrantsResponse>;
                granteeGrants(request: _104.QueryGranteeGrantsRequest): Promise<_104.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _367.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _105.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _105.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _105.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _105.MsgGrant): {
                        typeUrl: string;
                        value: _105.MsgGrant;
                    };
                    exec(value: _105.MsgExec): {
                        typeUrl: string;
                        value: _105.MsgExec;
                    };
                    revoke(value: _105.MsgRevoke): {
                        typeUrl: string;
                        value: _105.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _105.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _105.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _105.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _105.MsgGrant): {
                        typeUrl: string;
                        value: _105.MsgGrant;
                    };
                    exec(value: _105.MsgExec): {
                        typeUrl: string;
                        value: _105.MsgExec;
                    };
                    revoke(value: _105.MsgRevoke): {
                        typeUrl: string;
                        value: _105.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _105.MsgGrant) => _105.MsgGrantAmino;
                    fromAmino: (object: _105.MsgGrantAmino) => _105.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _105.MsgExec) => _105.MsgExecAmino;
                    fromAmino: (object: _105.MsgExecAmino) => _105.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _105.MsgRevoke) => _105.MsgRevokeAmino;
                    fromAmino: (object: _105.MsgRevokeAmino) => _105.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _105.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgGrant;
                fromPartial(object: Partial<_105.MsgGrant>): _105.MsgGrant;
                fromAmino(object: _105.MsgGrantAmino): _105.MsgGrant;
                toAmino(message: _105.MsgGrant): _105.MsgGrantAmino;
                fromAminoMsg(object: _105.MsgGrantAminoMsg): _105.MsgGrant;
                toAminoMsg(message: _105.MsgGrant): _105.MsgGrantAminoMsg;
                fromProtoMsg(message: _105.MsgGrantProtoMsg): _105.MsgGrant;
                toProto(message: _105.MsgGrant): Uint8Array;
                toProtoMsg(message: _105.MsgGrant): _105.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _105.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgExecResponse;
                fromPartial(object: Partial<_105.MsgExecResponse>): _105.MsgExecResponse;
                fromAmino(object: _105.MsgExecResponseAmino): _105.MsgExecResponse;
                toAmino(message: _105.MsgExecResponse): _105.MsgExecResponseAmino;
                fromAminoMsg(object: _105.MsgExecResponseAminoMsg): _105.MsgExecResponse;
                toAminoMsg(message: _105.MsgExecResponse): _105.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _105.MsgExecResponseProtoMsg): _105.MsgExecResponse;
                toProto(message: _105.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _105.MsgExecResponse): _105.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _105.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgExec;
                fromPartial(object: Partial<_105.MsgExec>): _105.MsgExec;
                fromAmino(object: _105.MsgExecAmino): _105.MsgExec;
                toAmino(message: _105.MsgExec): _105.MsgExecAmino;
                fromAminoMsg(object: _105.MsgExecAminoMsg): _105.MsgExec;
                toAminoMsg(message: _105.MsgExec): _105.MsgExecAminoMsg;
                fromProtoMsg(message: _105.MsgExecProtoMsg): _105.MsgExec;
                toProto(message: _105.MsgExec): Uint8Array;
                toProtoMsg(message: _105.MsgExec): _105.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _105.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgGrantResponse;
                fromPartial(_: Partial<_105.MsgGrantResponse>): _105.MsgGrantResponse;
                fromAmino(_: _105.MsgGrantResponseAmino): _105.MsgGrantResponse;
                toAmino(_: _105.MsgGrantResponse): _105.MsgGrantResponseAmino;
                fromAminoMsg(object: _105.MsgGrantResponseAminoMsg): _105.MsgGrantResponse;
                toAminoMsg(message: _105.MsgGrantResponse): _105.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _105.MsgGrantResponseProtoMsg): _105.MsgGrantResponse;
                toProto(message: _105.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _105.MsgGrantResponse): _105.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _105.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgRevoke;
                fromPartial(object: Partial<_105.MsgRevoke>): _105.MsgRevoke;
                fromAmino(object: _105.MsgRevokeAmino): _105.MsgRevoke;
                toAmino(message: _105.MsgRevoke): _105.MsgRevokeAmino;
                fromAminoMsg(object: _105.MsgRevokeAminoMsg): _105.MsgRevoke;
                toAminoMsg(message: _105.MsgRevoke): _105.MsgRevokeAminoMsg;
                fromProtoMsg(message: _105.MsgRevokeProtoMsg): _105.MsgRevoke;
                toProto(message: _105.MsgRevoke): Uint8Array;
                toProtoMsg(message: _105.MsgRevoke): _105.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _105.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgRevokeResponse;
                fromPartial(_: Partial<_105.MsgRevokeResponse>): _105.MsgRevokeResponse;
                fromAmino(_: _105.MsgRevokeResponseAmino): _105.MsgRevokeResponse;
                toAmino(_: _105.MsgRevokeResponse): _105.MsgRevokeResponseAmino;
                fromAminoMsg(object: _105.MsgRevokeResponseAminoMsg): _105.MsgRevokeResponse;
                toAminoMsg(message: _105.MsgRevokeResponse): _105.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _105.MsgRevokeResponseProtoMsg): _105.MsgRevokeResponse;
                toProto(message: _105.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _105.MsgRevokeResponse): _105.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _104.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGrantsRequest;
                fromPartial(object: Partial<_104.QueryGrantsRequest>): _104.QueryGrantsRequest;
                fromAmino(object: _104.QueryGrantsRequestAmino): _104.QueryGrantsRequest;
                toAmino(message: _104.QueryGrantsRequest): _104.QueryGrantsRequestAmino;
                fromAminoMsg(object: _104.QueryGrantsRequestAminoMsg): _104.QueryGrantsRequest;
                toAminoMsg(message: _104.QueryGrantsRequest): _104.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryGrantsRequestProtoMsg): _104.QueryGrantsRequest;
                toProto(message: _104.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryGrantsRequest): _104.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _104.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGrantsResponse;
                fromPartial(object: Partial<_104.QueryGrantsResponse>): _104.QueryGrantsResponse;
                fromAmino(object: _104.QueryGrantsResponseAmino): _104.QueryGrantsResponse;
                toAmino(message: _104.QueryGrantsResponse): _104.QueryGrantsResponseAmino;
                fromAminoMsg(object: _104.QueryGrantsResponseAminoMsg): _104.QueryGrantsResponse;
                toAminoMsg(message: _104.QueryGrantsResponse): _104.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryGrantsResponseProtoMsg): _104.QueryGrantsResponse;
                toProto(message: _104.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryGrantsResponse): _104.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _104.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_104.QueryGranterGrantsRequest>): _104.QueryGranterGrantsRequest;
                fromAmino(object: _104.QueryGranterGrantsRequestAmino): _104.QueryGranterGrantsRequest;
                toAmino(message: _104.QueryGranterGrantsRequest): _104.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _104.QueryGranterGrantsRequestAminoMsg): _104.QueryGranterGrantsRequest;
                toAminoMsg(message: _104.QueryGranterGrantsRequest): _104.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryGranterGrantsRequestProtoMsg): _104.QueryGranterGrantsRequest;
                toProto(message: _104.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryGranterGrantsRequest): _104.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _104.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_104.QueryGranterGrantsResponse>): _104.QueryGranterGrantsResponse;
                fromAmino(object: _104.QueryGranterGrantsResponseAmino): _104.QueryGranterGrantsResponse;
                toAmino(message: _104.QueryGranterGrantsResponse): _104.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _104.QueryGranterGrantsResponseAminoMsg): _104.QueryGranterGrantsResponse;
                toAminoMsg(message: _104.QueryGranterGrantsResponse): _104.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryGranterGrantsResponseProtoMsg): _104.QueryGranterGrantsResponse;
                toProto(message: _104.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryGranterGrantsResponse): _104.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _104.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_104.QueryGranteeGrantsRequest>): _104.QueryGranteeGrantsRequest;
                fromAmino(object: _104.QueryGranteeGrantsRequestAmino): _104.QueryGranteeGrantsRequest;
                toAmino(message: _104.QueryGranteeGrantsRequest): _104.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _104.QueryGranteeGrantsRequestAminoMsg): _104.QueryGranteeGrantsRequest;
                toAminoMsg(message: _104.QueryGranteeGrantsRequest): _104.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryGranteeGrantsRequestProtoMsg): _104.QueryGranteeGrantsRequest;
                toProto(message: _104.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryGranteeGrantsRequest): _104.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _104.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_104.QueryGranteeGrantsResponse>): _104.QueryGranteeGrantsResponse;
                fromAmino(object: _104.QueryGranteeGrantsResponseAmino): _104.QueryGranteeGrantsResponse;
                toAmino(message: _104.QueryGranteeGrantsResponse): _104.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _104.QueryGranteeGrantsResponseAminoMsg): _104.QueryGranteeGrantsResponse;
                toAminoMsg(message: _104.QueryGranteeGrantsResponse): _104.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryGranteeGrantsResponseProtoMsg): _104.QueryGranteeGrantsResponse;
                toProto(message: _104.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryGranteeGrantsResponse): _104.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _102.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventGrant;
                fromPartial(object: Partial<_102.EventGrant>): _102.EventGrant;
                fromAmino(object: _102.EventGrantAmino): _102.EventGrant;
                toAmino(message: _102.EventGrant): _102.EventGrantAmino;
                fromAminoMsg(object: _102.EventGrantAminoMsg): _102.EventGrant;
                toAminoMsg(message: _102.EventGrant): _102.EventGrantAminoMsg;
                fromProtoMsg(message: _102.EventGrantProtoMsg): _102.EventGrant;
                toProto(message: _102.EventGrant): Uint8Array;
                toProtoMsg(message: _102.EventGrant): _102.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _102.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventRevoke;
                fromPartial(object: Partial<_102.EventRevoke>): _102.EventRevoke;
                fromAmino(object: _102.EventRevokeAmino): _102.EventRevoke;
                toAmino(message: _102.EventRevoke): _102.EventRevokeAmino;
                fromAminoMsg(object: _102.EventRevokeAminoMsg): _102.EventRevoke;
                toAminoMsg(message: _102.EventRevoke): _102.EventRevokeAminoMsg;
                fromProtoMsg(message: _102.EventRevokeProtoMsg): _102.EventRevoke;
                toProto(message: _102.EventRevoke): Uint8Array;
                toProtoMsg(message: _102.EventRevoke): _102.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _101.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.GenericAuthorization;
                fromPartial(object: Partial<_101.GenericAuthorization>): _101.GenericAuthorization;
                fromAmino(object: _101.GenericAuthorizationAmino): _101.GenericAuthorization;
                toAmino(message: _101.GenericAuthorization): _101.GenericAuthorizationAmino;
                fromAminoMsg(object: _101.GenericAuthorizationAminoMsg): _101.GenericAuthorization;
                toAminoMsg(message: _101.GenericAuthorization): _101.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _101.GenericAuthorizationProtoMsg): _101.GenericAuthorization;
                toProto(message: _101.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _101.GenericAuthorization): _101.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _101.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.Grant;
                fromPartial(object: Partial<_101.Grant>): _101.Grant;
                fromAmino(object: _101.GrantAmino): _101.Grant;
                toAmino(message: _101.Grant): _101.GrantAmino;
                fromAminoMsg(object: _101.GrantAminoMsg): _101.Grant;
                toAminoMsg(message: _101.Grant): _101.GrantAminoMsg;
                fromProtoMsg(message: _101.GrantProtoMsg): _101.Grant;
                toProto(message: _101.Grant): Uint8Array;
                toProtoMsg(message: _101.Grant): _101.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _101.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.GrantAuthorization;
                fromPartial(object: Partial<_101.GrantAuthorization>): _101.GrantAuthorization;
                fromAmino(object: _101.GrantAuthorizationAmino): _101.GrantAuthorization;
                toAmino(message: _101.GrantAuthorization): _101.GrantAuthorizationAmino;
                fromAminoMsg(object: _101.GrantAuthorizationAminoMsg): _101.GrantAuthorization;
                toAminoMsg(message: _101.GrantAuthorization): _101.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _101.GrantAuthorizationProtoMsg): _101.GrantAuthorization;
                toProto(message: _101.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _101.GrantAuthorization): _101.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _101.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.GrantQueueItem;
                fromPartial(object: Partial<_101.GrantQueueItem>): _101.GrantQueueItem;
                fromAmino(object: _101.GrantQueueItemAmino): _101.GrantQueueItem;
                toAmino(message: _101.GrantQueueItem): _101.GrantQueueItemAmino;
                fromAminoMsg(object: _101.GrantQueueItemAminoMsg): _101.GrantQueueItem;
                toAminoMsg(message: _101.GrantQueueItem): _101.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _101.GrantQueueItemProtoMsg): _101.GrantQueueItem;
                toProto(message: _101.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _101.GrantQueueItem): _101.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _109.SendAuthorization | _200.StakeAuthorization | import("../cosmwasm/wasm/v1/authz").StoreCodeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | _101.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _388.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _107.AppOptionsRequest): Promise<_107.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _107.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.AppOptionsRequest;
                fromPartial(_: Partial<_107.AppOptionsRequest>): _107.AppOptionsRequest;
                fromAmino(_: _107.AppOptionsRequestAmino): _107.AppOptionsRequest;
                toAmino(_: _107.AppOptionsRequest): _107.AppOptionsRequestAmino;
                fromAminoMsg(object: _107.AppOptionsRequestAminoMsg): _107.AppOptionsRequest;
                toAminoMsg(message: _107.AppOptionsRequest): _107.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _107.AppOptionsRequestProtoMsg): _107.AppOptionsRequest;
                toProto(message: _107.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _107.AppOptionsRequest): _107.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _107.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_107.AppOptionsResponse_ModuleOptionsEntry>): _107.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _107.AppOptionsResponse_ModuleOptionsEntryAmino): _107.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _107.AppOptionsResponse_ModuleOptionsEntry): _107.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _107.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _107.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _107.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _107.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _107.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _107.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.AppOptionsResponse;
                fromPartial(object: Partial<_107.AppOptionsResponse>): _107.AppOptionsResponse;
                fromAmino(object: _107.AppOptionsResponseAmino): _107.AppOptionsResponse;
                toAmino(message: _107.AppOptionsResponse): _107.AppOptionsResponseAmino;
                fromAminoMsg(object: _107.AppOptionsResponseAminoMsg): _107.AppOptionsResponse;
                toAminoMsg(message: _107.AppOptionsResponse): _107.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _107.AppOptionsResponseProtoMsg): _107.AppOptionsResponse;
                toProto(message: _107.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _107.AppOptionsResponse): _107.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _106.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.ModuleOptions;
                fromPartial(object: Partial<_106.ModuleOptions>): _106.ModuleOptions;
                fromAmino(object: _106.ModuleOptionsAmino): _106.ModuleOptions;
                toAmino(message: _106.ModuleOptions): _106.ModuleOptionsAmino;
                fromAminoMsg(object: _106.ModuleOptionsAminoMsg): _106.ModuleOptions;
                toAminoMsg(message: _106.ModuleOptions): _106.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _106.ModuleOptionsProtoMsg): _106.ModuleOptions;
                toProto(message: _106.ModuleOptions): Uint8Array;
                toProtoMsg(message: _106.ModuleOptions): _106.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _106.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_106.ServiceCommandDescriptor_SubCommandsEntry>): _106.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _106.ServiceCommandDescriptor_SubCommandsEntryAmino): _106.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _106.ServiceCommandDescriptor_SubCommandsEntry): _106.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _106.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _106.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _106.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _106.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _106.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _106.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.ServiceCommandDescriptor;
                fromPartial(object: Partial<_106.ServiceCommandDescriptor>): _106.ServiceCommandDescriptor;
                fromAmino(object: _106.ServiceCommandDescriptorAmino): _106.ServiceCommandDescriptor;
                toAmino(message: _106.ServiceCommandDescriptor): _106.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _106.ServiceCommandDescriptorAminoMsg): _106.ServiceCommandDescriptor;
                toAminoMsg(message: _106.ServiceCommandDescriptor): _106.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _106.ServiceCommandDescriptorProtoMsg): _106.ServiceCommandDescriptor;
                toProto(message: _106.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _106.ServiceCommandDescriptor): _106.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _106.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_106.RpcCommandOptions_FlagOptionsEntry>): _106.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _106.RpcCommandOptions_FlagOptionsEntryAmino): _106.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _106.RpcCommandOptions_FlagOptionsEntry): _106.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _106.RpcCommandOptions_FlagOptionsEntryAminoMsg): _106.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _106.RpcCommandOptions_FlagOptionsEntryProtoMsg): _106.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _106.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _106.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.RpcCommandOptions;
                fromPartial(object: Partial<_106.RpcCommandOptions>): _106.RpcCommandOptions;
                fromAmino(object: _106.RpcCommandOptionsAmino): _106.RpcCommandOptions;
                toAmino(message: _106.RpcCommandOptions): _106.RpcCommandOptionsAmino;
                fromAminoMsg(object: _106.RpcCommandOptionsAminoMsg): _106.RpcCommandOptions;
                toAminoMsg(message: _106.RpcCommandOptions): _106.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _106.RpcCommandOptionsProtoMsg): _106.RpcCommandOptions;
                toProto(message: _106.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _106.RpcCommandOptions): _106.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _106.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.FlagOptions;
                fromPartial(object: Partial<_106.FlagOptions>): _106.FlagOptions;
                fromAmino(object: _106.FlagOptionsAmino): _106.FlagOptions;
                toAmino(message: _106.FlagOptions): _106.FlagOptionsAmino;
                fromAminoMsg(object: _106.FlagOptionsAminoMsg): _106.FlagOptions;
                toAminoMsg(message: _106.FlagOptions): _106.FlagOptionsAminoMsg;
                fromProtoMsg(message: _106.FlagOptionsProtoMsg): _106.FlagOptions;
                toProto(message: _106.FlagOptions): Uint8Array;
                toProtoMsg(message: _106.FlagOptions): _106.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _106.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.PositionalArgDescriptor;
                fromPartial(object: Partial<_106.PositionalArgDescriptor>): _106.PositionalArgDescriptor;
                fromAmino(object: _106.PositionalArgDescriptorAmino): _106.PositionalArgDescriptor;
                toAmino(message: _106.PositionalArgDescriptor): _106.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _106.PositionalArgDescriptorAminoMsg): _106.PositionalArgDescriptor;
                toAminoMsg(message: _106.PositionalArgDescriptor): _106.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _106.PositionalArgDescriptorProtoMsg): _106.PositionalArgDescriptor;
                toProto(message: _106.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _106.PositionalArgDescriptor): _106.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
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
            MsgClientImpl: typeof _409.MsgClientImpl;
            QueryClientImpl: typeof _389.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _112.QueryBalanceRequest): Promise<_112.QueryBalanceResponse>;
                allBalances(request: _112.QueryAllBalancesRequest): Promise<_112.QueryAllBalancesResponse>;
                spendableBalances(request: _112.QuerySpendableBalancesRequest): Promise<_112.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _112.QuerySpendableBalanceByDenomRequest): Promise<_112.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _112.QueryTotalSupplyRequest): Promise<_112.QueryTotalSupplyResponse>;
                supplyOf(request: _112.QuerySupplyOfRequest): Promise<_112.QuerySupplyOfResponse>;
                totalSupplyWithoutOffset(request?: _112.QueryTotalSupplyWithoutOffsetRequest): Promise<_112.QueryTotalSupplyWithoutOffsetResponse>;
                supplyOfWithoutOffset(request: _112.QuerySupplyOfWithoutOffsetRequest): Promise<_112.QuerySupplyOfWithoutOffsetResponse>;
                params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                denomMetadata(request: _112.QueryDenomMetadataRequest): Promise<_112.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _112.QueryDenomsMetadataRequest): Promise<_112.QueryDenomsMetadataResponse>;
                denomOwners(request: _112.QueryDenomOwnersRequest): Promise<_112.QueryDenomOwnersResponse>;
                sendEnabled(request: _112.QuerySendEnabledRequest): Promise<_112.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _368.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _113.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _113.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _113.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _113.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _113.MsgSend): {
                        typeUrl: string;
                        value: _113.MsgSend;
                    };
                    multiSend(value: _113.MsgMultiSend): {
                        typeUrl: string;
                        value: _113.MsgMultiSend;
                    };
                    updateParams(value: _113.MsgUpdateParams): {
                        typeUrl: string;
                        value: _113.MsgUpdateParams;
                    };
                    setSendEnabled(value: _113.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _113.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _113.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _113.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _113.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _113.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _113.MsgSend): {
                        typeUrl: string;
                        value: _113.MsgSend;
                    };
                    multiSend(value: _113.MsgMultiSend): {
                        typeUrl: string;
                        value: _113.MsgMultiSend;
                    };
                    updateParams(value: _113.MsgUpdateParams): {
                        typeUrl: string;
                        value: _113.MsgUpdateParams;
                    };
                    setSendEnabled(value: _113.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _113.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _113.MsgSend) => _113.MsgSendAmino;
                    fromAmino: (object: _113.MsgSendAmino) => _113.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _113.MsgMultiSend) => _113.MsgMultiSendAmino;
                    fromAmino: (object: _113.MsgMultiSendAmino) => _113.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _113.MsgUpdateParams) => _113.MsgUpdateParamsAmino;
                    fromAmino: (object: _113.MsgUpdateParamsAmino) => _113.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _113.MsgSetSendEnabled) => _113.MsgSetSendEnabledAmino;
                    fromAmino: (object: _113.MsgSetSendEnabledAmino) => _113.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _113.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgSend;
                fromPartial(object: Partial<_113.MsgSend>): _113.MsgSend;
                fromAmino(object: _113.MsgSendAmino): _113.MsgSend;
                toAmino(message: _113.MsgSend): _113.MsgSendAmino;
                fromAminoMsg(object: _113.MsgSendAminoMsg): _113.MsgSend;
                toAminoMsg(message: _113.MsgSend): _113.MsgSendAminoMsg;
                fromProtoMsg(message: _113.MsgSendProtoMsg): _113.MsgSend;
                toProto(message: _113.MsgSend): Uint8Array;
                toProtoMsg(message: _113.MsgSend): _113.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _113.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.MsgSendResponse;
                fromPartial(_: Partial<_113.MsgSendResponse>): _113.MsgSendResponse;
                fromAmino(_: _113.MsgSendResponseAmino): _113.MsgSendResponse;
                toAmino(_: _113.MsgSendResponse): _113.MsgSendResponseAmino;
                fromAminoMsg(object: _113.MsgSendResponseAminoMsg): _113.MsgSendResponse;
                toAminoMsg(message: _113.MsgSendResponse): _113.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _113.MsgSendResponseProtoMsg): _113.MsgSendResponse;
                toProto(message: _113.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _113.MsgSendResponse): _113.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _113.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgMultiSend;
                fromPartial(object: Partial<_113.MsgMultiSend>): _113.MsgMultiSend;
                fromAmino(object: _113.MsgMultiSendAmino): _113.MsgMultiSend;
                toAmino(message: _113.MsgMultiSend): _113.MsgMultiSendAmino;
                fromAminoMsg(object: _113.MsgMultiSendAminoMsg): _113.MsgMultiSend;
                toAminoMsg(message: _113.MsgMultiSend): _113.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _113.MsgMultiSendProtoMsg): _113.MsgMultiSend;
                toProto(message: _113.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _113.MsgMultiSend): _113.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _113.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.MsgMultiSendResponse;
                fromPartial(_: Partial<_113.MsgMultiSendResponse>): _113.MsgMultiSendResponse;
                fromAmino(_: _113.MsgMultiSendResponseAmino): _113.MsgMultiSendResponse;
                toAmino(_: _113.MsgMultiSendResponse): _113.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _113.MsgMultiSendResponseAminoMsg): _113.MsgMultiSendResponse;
                toAminoMsg(message: _113.MsgMultiSendResponse): _113.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _113.MsgMultiSendResponseProtoMsg): _113.MsgMultiSendResponse;
                toProto(message: _113.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _113.MsgMultiSendResponse): _113.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _113.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgUpdateParams;
                fromPartial(object: Partial<_113.MsgUpdateParams>): _113.MsgUpdateParams;
                fromAmino(object: _113.MsgUpdateParamsAmino): _113.MsgUpdateParams;
                toAmino(message: _113.MsgUpdateParams): _113.MsgUpdateParamsAmino;
                fromAminoMsg(object: _113.MsgUpdateParamsAminoMsg): _113.MsgUpdateParams;
                toAminoMsg(message: _113.MsgUpdateParams): _113.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateParamsProtoMsg): _113.MsgUpdateParams;
                toProto(message: _113.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateParams): _113.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _113.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_113.MsgUpdateParamsResponse>): _113.MsgUpdateParamsResponse;
                fromAmino(_: _113.MsgUpdateParamsResponseAmino): _113.MsgUpdateParamsResponse;
                toAmino(_: _113.MsgUpdateParamsResponse): _113.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _113.MsgUpdateParamsResponseAminoMsg): _113.MsgUpdateParamsResponse;
                toAminoMsg(message: _113.MsgUpdateParamsResponse): _113.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateParamsResponseProtoMsg): _113.MsgUpdateParamsResponse;
                toProto(message: _113.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateParamsResponse): _113.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _113.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgSetSendEnabled;
                fromPartial(object: Partial<_113.MsgSetSendEnabled>): _113.MsgSetSendEnabled;
                fromAmino(object: _113.MsgSetSendEnabledAmino): _113.MsgSetSendEnabled;
                toAmino(message: _113.MsgSetSendEnabled): _113.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _113.MsgSetSendEnabledAminoMsg): _113.MsgSetSendEnabled;
                toAminoMsg(message: _113.MsgSetSendEnabled): _113.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _113.MsgSetSendEnabledProtoMsg): _113.MsgSetSendEnabled;
                toProto(message: _113.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _113.MsgSetSendEnabled): _113.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _113.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_113.MsgSetSendEnabledResponse>): _113.MsgSetSendEnabledResponse;
                fromAmino(_: _113.MsgSetSendEnabledResponseAmino): _113.MsgSetSendEnabledResponse;
                toAmino(_: _113.MsgSetSendEnabledResponse): _113.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _113.MsgSetSendEnabledResponseAminoMsg): _113.MsgSetSendEnabledResponse;
                toAminoMsg(message: _113.MsgSetSendEnabledResponse): _113.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _113.MsgSetSendEnabledResponseProtoMsg): _113.MsgSetSendEnabledResponse;
                toProto(message: _113.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _113.MsgSetSendEnabledResponse): _113.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _112.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryBalanceRequest;
                fromPartial(object: Partial<_112.QueryBalanceRequest>): _112.QueryBalanceRequest;
                fromAmino(object: _112.QueryBalanceRequestAmino): _112.QueryBalanceRequest;
                toAmino(message: _112.QueryBalanceRequest): _112.QueryBalanceRequestAmino;
                fromAminoMsg(object: _112.QueryBalanceRequestAminoMsg): _112.QueryBalanceRequest;
                toAminoMsg(message: _112.QueryBalanceRequest): _112.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _112.QueryBalanceRequestProtoMsg): _112.QueryBalanceRequest;
                toProto(message: _112.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _112.QueryBalanceRequest): _112.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _112.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryBalanceResponse;
                fromPartial(object: Partial<_112.QueryBalanceResponse>): _112.QueryBalanceResponse;
                fromAmino(object: _112.QueryBalanceResponseAmino): _112.QueryBalanceResponse;
                toAmino(message: _112.QueryBalanceResponse): _112.QueryBalanceResponseAmino;
                fromAminoMsg(object: _112.QueryBalanceResponseAminoMsg): _112.QueryBalanceResponse;
                toAminoMsg(message: _112.QueryBalanceResponse): _112.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _112.QueryBalanceResponseProtoMsg): _112.QueryBalanceResponse;
                toProto(message: _112.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _112.QueryBalanceResponse): _112.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _112.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAllBalancesRequest;
                fromPartial(object: Partial<_112.QueryAllBalancesRequest>): _112.QueryAllBalancesRequest;
                fromAmino(object: _112.QueryAllBalancesRequestAmino): _112.QueryAllBalancesRequest;
                toAmino(message: _112.QueryAllBalancesRequest): _112.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _112.QueryAllBalancesRequestAminoMsg): _112.QueryAllBalancesRequest;
                toAminoMsg(message: _112.QueryAllBalancesRequest): _112.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _112.QueryAllBalancesRequestProtoMsg): _112.QueryAllBalancesRequest;
                toProto(message: _112.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _112.QueryAllBalancesRequest): _112.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _112.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryAllBalancesResponse;
                fromPartial(object: Partial<_112.QueryAllBalancesResponse>): _112.QueryAllBalancesResponse;
                fromAmino(object: _112.QueryAllBalancesResponseAmino): _112.QueryAllBalancesResponse;
                toAmino(message: _112.QueryAllBalancesResponse): _112.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _112.QueryAllBalancesResponseAminoMsg): _112.QueryAllBalancesResponse;
                toAminoMsg(message: _112.QueryAllBalancesResponse): _112.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _112.QueryAllBalancesResponseProtoMsg): _112.QueryAllBalancesResponse;
                toProto(message: _112.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _112.QueryAllBalancesResponse): _112.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _112.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_112.QuerySpendableBalancesRequest>): _112.QuerySpendableBalancesRequest;
                fromAmino(object: _112.QuerySpendableBalancesRequestAmino): _112.QuerySpendableBalancesRequest;
                toAmino(message: _112.QuerySpendableBalancesRequest): _112.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _112.QuerySpendableBalancesRequestAminoMsg): _112.QuerySpendableBalancesRequest;
                toAminoMsg(message: _112.QuerySpendableBalancesRequest): _112.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _112.QuerySpendableBalancesRequestProtoMsg): _112.QuerySpendableBalancesRequest;
                toProto(message: _112.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _112.QuerySpendableBalancesRequest): _112.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _112.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_112.QuerySpendableBalancesResponse>): _112.QuerySpendableBalancesResponse;
                fromAmino(object: _112.QuerySpendableBalancesResponseAmino): _112.QuerySpendableBalancesResponse;
                toAmino(message: _112.QuerySpendableBalancesResponse): _112.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _112.QuerySpendableBalancesResponseAminoMsg): _112.QuerySpendableBalancesResponse;
                toAminoMsg(message: _112.QuerySpendableBalancesResponse): _112.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _112.QuerySpendableBalancesResponseProtoMsg): _112.QuerySpendableBalancesResponse;
                toProto(message: _112.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _112.QuerySpendableBalancesResponse): _112.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _112.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_112.QuerySpendableBalanceByDenomRequest>): _112.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _112.QuerySpendableBalanceByDenomRequestAmino): _112.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _112.QuerySpendableBalanceByDenomRequest): _112.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _112.QuerySpendableBalanceByDenomRequestAminoMsg): _112.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _112.QuerySpendableBalanceByDenomRequest): _112.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _112.QuerySpendableBalanceByDenomRequestProtoMsg): _112.QuerySpendableBalanceByDenomRequest;
                toProto(message: _112.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _112.QuerySpendableBalanceByDenomRequest): _112.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _112.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_112.QuerySpendableBalanceByDenomResponse>): _112.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _112.QuerySpendableBalanceByDenomResponseAmino): _112.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _112.QuerySpendableBalanceByDenomResponse): _112.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _112.QuerySpendableBalanceByDenomResponseAminoMsg): _112.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _112.QuerySpendableBalanceByDenomResponse): _112.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _112.QuerySpendableBalanceByDenomResponseProtoMsg): _112.QuerySpendableBalanceByDenomResponse;
                toProto(message: _112.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _112.QuerySpendableBalanceByDenomResponse): _112.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _112.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_112.QueryTotalSupplyRequest>): _112.QueryTotalSupplyRequest;
                fromAmino(object: _112.QueryTotalSupplyRequestAmino): _112.QueryTotalSupplyRequest;
                toAmino(message: _112.QueryTotalSupplyRequest): _112.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _112.QueryTotalSupplyRequestAminoMsg): _112.QueryTotalSupplyRequest;
                toAminoMsg(message: _112.QueryTotalSupplyRequest): _112.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _112.QueryTotalSupplyRequestProtoMsg): _112.QueryTotalSupplyRequest;
                toProto(message: _112.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _112.QueryTotalSupplyRequest): _112.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _112.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_112.QueryTotalSupplyResponse>): _112.QueryTotalSupplyResponse;
                fromAmino(object: _112.QueryTotalSupplyResponseAmino): _112.QueryTotalSupplyResponse;
                toAmino(message: _112.QueryTotalSupplyResponse): _112.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _112.QueryTotalSupplyResponseAminoMsg): _112.QueryTotalSupplyResponse;
                toAminoMsg(message: _112.QueryTotalSupplyResponse): _112.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _112.QueryTotalSupplyResponseProtoMsg): _112.QueryTotalSupplyResponse;
                toProto(message: _112.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _112.QueryTotalSupplyResponse): _112.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _112.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySupplyOfRequest;
                fromPartial(object: Partial<_112.QuerySupplyOfRequest>): _112.QuerySupplyOfRequest;
                fromAmino(object: _112.QuerySupplyOfRequestAmino): _112.QuerySupplyOfRequest;
                toAmino(message: _112.QuerySupplyOfRequest): _112.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _112.QuerySupplyOfRequestAminoMsg): _112.QuerySupplyOfRequest;
                toAminoMsg(message: _112.QuerySupplyOfRequest): _112.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _112.QuerySupplyOfRequestProtoMsg): _112.QuerySupplyOfRequest;
                toProto(message: _112.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _112.QuerySupplyOfRequest): _112.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _112.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySupplyOfResponse;
                fromPartial(object: Partial<_112.QuerySupplyOfResponse>): _112.QuerySupplyOfResponse;
                fromAmino(object: _112.QuerySupplyOfResponseAmino): _112.QuerySupplyOfResponse;
                toAmino(message: _112.QuerySupplyOfResponse): _112.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _112.QuerySupplyOfResponseAminoMsg): _112.QuerySupplyOfResponse;
                toAminoMsg(message: _112.QuerySupplyOfResponse): _112.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _112.QuerySupplyOfResponseProtoMsg): _112.QuerySupplyOfResponse;
                toProto(message: _112.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _112.QuerySupplyOfResponse): _112.QuerySupplyOfResponseProtoMsg;
            };
            QueryTotalSupplyWithoutOffsetRequest: {
                typeUrl: string;
                encode(message: _112.QueryTotalSupplyWithoutOffsetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryTotalSupplyWithoutOffsetRequest;
                fromPartial(object: Partial<_112.QueryTotalSupplyWithoutOffsetRequest>): _112.QueryTotalSupplyWithoutOffsetRequest;
                fromAmino(object: _112.QueryTotalSupplyWithoutOffsetRequestAmino): _112.QueryTotalSupplyWithoutOffsetRequest;
                toAmino(message: _112.QueryTotalSupplyWithoutOffsetRequest): _112.QueryTotalSupplyWithoutOffsetRequestAmino;
                fromAminoMsg(object: _112.QueryTotalSupplyWithoutOffsetRequestAminoMsg): _112.QueryTotalSupplyWithoutOffsetRequest;
                toAminoMsg(message: _112.QueryTotalSupplyWithoutOffsetRequest): _112.QueryTotalSupplyWithoutOffsetRequestAminoMsg;
                fromProtoMsg(message: _112.QueryTotalSupplyWithoutOffsetRequestProtoMsg): _112.QueryTotalSupplyWithoutOffsetRequest;
                toProto(message: _112.QueryTotalSupplyWithoutOffsetRequest): Uint8Array;
                toProtoMsg(message: _112.QueryTotalSupplyWithoutOffsetRequest): _112.QueryTotalSupplyWithoutOffsetRequestProtoMsg;
            };
            QueryTotalSupplyWithoutOffsetResponse: {
                typeUrl: string;
                encode(message: _112.QueryTotalSupplyWithoutOffsetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryTotalSupplyWithoutOffsetResponse;
                fromPartial(object: Partial<_112.QueryTotalSupplyWithoutOffsetResponse>): _112.QueryTotalSupplyWithoutOffsetResponse;
                fromAmino(object: _112.QueryTotalSupplyWithoutOffsetResponseAmino): _112.QueryTotalSupplyWithoutOffsetResponse;
                toAmino(message: _112.QueryTotalSupplyWithoutOffsetResponse): _112.QueryTotalSupplyWithoutOffsetResponseAmino;
                fromAminoMsg(object: _112.QueryTotalSupplyWithoutOffsetResponseAminoMsg): _112.QueryTotalSupplyWithoutOffsetResponse;
                toAminoMsg(message: _112.QueryTotalSupplyWithoutOffsetResponse): _112.QueryTotalSupplyWithoutOffsetResponseAminoMsg;
                fromProtoMsg(message: _112.QueryTotalSupplyWithoutOffsetResponseProtoMsg): _112.QueryTotalSupplyWithoutOffsetResponse;
                toProto(message: _112.QueryTotalSupplyWithoutOffsetResponse): Uint8Array;
                toProtoMsg(message: _112.QueryTotalSupplyWithoutOffsetResponse): _112.QueryTotalSupplyWithoutOffsetResponseProtoMsg;
            };
            QuerySupplyOfWithoutOffsetRequest: {
                typeUrl: string;
                encode(message: _112.QuerySupplyOfWithoutOffsetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySupplyOfWithoutOffsetRequest;
                fromPartial(object: Partial<_112.QuerySupplyOfWithoutOffsetRequest>): _112.QuerySupplyOfWithoutOffsetRequest;
                fromAmino(object: _112.QuerySupplyOfWithoutOffsetRequestAmino): _112.QuerySupplyOfWithoutOffsetRequest;
                toAmino(message: _112.QuerySupplyOfWithoutOffsetRequest): _112.QuerySupplyOfWithoutOffsetRequestAmino;
                fromAminoMsg(object: _112.QuerySupplyOfWithoutOffsetRequestAminoMsg): _112.QuerySupplyOfWithoutOffsetRequest;
                toAminoMsg(message: _112.QuerySupplyOfWithoutOffsetRequest): _112.QuerySupplyOfWithoutOffsetRequestAminoMsg;
                fromProtoMsg(message: _112.QuerySupplyOfWithoutOffsetRequestProtoMsg): _112.QuerySupplyOfWithoutOffsetRequest;
                toProto(message: _112.QuerySupplyOfWithoutOffsetRequest): Uint8Array;
                toProtoMsg(message: _112.QuerySupplyOfWithoutOffsetRequest): _112.QuerySupplyOfWithoutOffsetRequestProtoMsg;
            };
            QuerySupplyOfWithoutOffsetResponse: {
                typeUrl: string;
                encode(message: _112.QuerySupplyOfWithoutOffsetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySupplyOfWithoutOffsetResponse;
                fromPartial(object: Partial<_112.QuerySupplyOfWithoutOffsetResponse>): _112.QuerySupplyOfWithoutOffsetResponse;
                fromAmino(object: _112.QuerySupplyOfWithoutOffsetResponseAmino): _112.QuerySupplyOfWithoutOffsetResponse;
                toAmino(message: _112.QuerySupplyOfWithoutOffsetResponse): _112.QuerySupplyOfWithoutOffsetResponseAmino;
                fromAminoMsg(object: _112.QuerySupplyOfWithoutOffsetResponseAminoMsg): _112.QuerySupplyOfWithoutOffsetResponse;
                toAminoMsg(message: _112.QuerySupplyOfWithoutOffsetResponse): _112.QuerySupplyOfWithoutOffsetResponseAminoMsg;
                fromProtoMsg(message: _112.QuerySupplyOfWithoutOffsetResponseProtoMsg): _112.QuerySupplyOfWithoutOffsetResponse;
                toProto(message: _112.QuerySupplyOfWithoutOffsetResponse): Uint8Array;
                toProtoMsg(message: _112.QuerySupplyOfWithoutOffsetResponse): _112.QuerySupplyOfWithoutOffsetResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _112.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_112.QueryDenomsMetadataRequest>): _112.QueryDenomsMetadataRequest;
                fromAmino(object: _112.QueryDenomsMetadataRequestAmino): _112.QueryDenomsMetadataRequest;
                toAmino(message: _112.QueryDenomsMetadataRequest): _112.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _112.QueryDenomsMetadataRequestAminoMsg): _112.QueryDenomsMetadataRequest;
                toAminoMsg(message: _112.QueryDenomsMetadataRequest): _112.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDenomsMetadataRequestProtoMsg): _112.QueryDenomsMetadataRequest;
                toProto(message: _112.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDenomsMetadataRequest): _112.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _112.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_112.QueryDenomsMetadataResponse>): _112.QueryDenomsMetadataResponse;
                fromAmino(object: _112.QueryDenomsMetadataResponseAmino): _112.QueryDenomsMetadataResponse;
                toAmino(message: _112.QueryDenomsMetadataResponse): _112.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _112.QueryDenomsMetadataResponseAminoMsg): _112.QueryDenomsMetadataResponse;
                toAminoMsg(message: _112.QueryDenomsMetadataResponse): _112.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDenomsMetadataResponseProtoMsg): _112.QueryDenomsMetadataResponse;
                toProto(message: _112.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDenomsMetadataResponse): _112.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _112.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_112.QueryDenomMetadataRequest>): _112.QueryDenomMetadataRequest;
                fromAmino(object: _112.QueryDenomMetadataRequestAmino): _112.QueryDenomMetadataRequest;
                toAmino(message: _112.QueryDenomMetadataRequest): _112.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _112.QueryDenomMetadataRequestAminoMsg): _112.QueryDenomMetadataRequest;
                toAminoMsg(message: _112.QueryDenomMetadataRequest): _112.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDenomMetadataRequestProtoMsg): _112.QueryDenomMetadataRequest;
                toProto(message: _112.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDenomMetadataRequest): _112.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _112.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_112.QueryDenomMetadataResponse>): _112.QueryDenomMetadataResponse;
                fromAmino(object: _112.QueryDenomMetadataResponseAmino): _112.QueryDenomMetadataResponse;
                toAmino(message: _112.QueryDenomMetadataResponse): _112.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _112.QueryDenomMetadataResponseAminoMsg): _112.QueryDenomMetadataResponse;
                toAminoMsg(message: _112.QueryDenomMetadataResponse): _112.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDenomMetadataResponseProtoMsg): _112.QueryDenomMetadataResponse;
                toProto(message: _112.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDenomMetadataResponse): _112.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _112.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_112.QueryDenomOwnersRequest>): _112.QueryDenomOwnersRequest;
                fromAmino(object: _112.QueryDenomOwnersRequestAmino): _112.QueryDenomOwnersRequest;
                toAmino(message: _112.QueryDenomOwnersRequest): _112.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _112.QueryDenomOwnersRequestAminoMsg): _112.QueryDenomOwnersRequest;
                toAminoMsg(message: _112.QueryDenomOwnersRequest): _112.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDenomOwnersRequestProtoMsg): _112.QueryDenomOwnersRequest;
                toProto(message: _112.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDenomOwnersRequest): _112.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _112.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.DenomOwner;
                fromPartial(object: Partial<_112.DenomOwner>): _112.DenomOwner;
                fromAmino(object: _112.DenomOwnerAmino): _112.DenomOwner;
                toAmino(message: _112.DenomOwner): _112.DenomOwnerAmino;
                fromAminoMsg(object: _112.DenomOwnerAminoMsg): _112.DenomOwner;
                toAminoMsg(message: _112.DenomOwner): _112.DenomOwnerAminoMsg;
                fromProtoMsg(message: _112.DenomOwnerProtoMsg): _112.DenomOwner;
                toProto(message: _112.DenomOwner): Uint8Array;
                toProtoMsg(message: _112.DenomOwner): _112.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _112.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_112.QueryDenomOwnersResponse>): _112.QueryDenomOwnersResponse;
                fromAmino(object: _112.QueryDenomOwnersResponseAmino): _112.QueryDenomOwnersResponse;
                toAmino(message: _112.QueryDenomOwnersResponse): _112.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _112.QueryDenomOwnersResponseAminoMsg): _112.QueryDenomOwnersResponse;
                toAminoMsg(message: _112.QueryDenomOwnersResponse): _112.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDenomOwnersResponseProtoMsg): _112.QueryDenomOwnersResponse;
                toProto(message: _112.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDenomOwnersResponse): _112.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _112.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySendEnabledRequest;
                fromPartial(object: Partial<_112.QuerySendEnabledRequest>): _112.QuerySendEnabledRequest;
                fromAmino(object: _112.QuerySendEnabledRequestAmino): _112.QuerySendEnabledRequest;
                toAmino(message: _112.QuerySendEnabledRequest): _112.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _112.QuerySendEnabledRequestAminoMsg): _112.QuerySendEnabledRequest;
                toAminoMsg(message: _112.QuerySendEnabledRequest): _112.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _112.QuerySendEnabledRequestProtoMsg): _112.QuerySendEnabledRequest;
                toProto(message: _112.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _112.QuerySendEnabledRequest): _112.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _112.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySendEnabledResponse;
                fromPartial(object: Partial<_112.QuerySendEnabledResponse>): _112.QuerySendEnabledResponse;
                fromAmino(object: _112.QuerySendEnabledResponseAmino): _112.QuerySendEnabledResponse;
                toAmino(message: _112.QuerySendEnabledResponse): _112.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _112.QuerySendEnabledResponseAminoMsg): _112.QuerySendEnabledResponse;
                toAminoMsg(message: _112.QuerySendEnabledResponse): _112.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _112.QuerySendEnabledResponseProtoMsg): _112.QuerySendEnabledResponse;
                toProto(message: _112.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _112.QuerySendEnabledResponse): _112.QuerySendEnabledResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _111.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.Balance;
                fromPartial(object: Partial<_111.Balance>): _111.Balance;
                fromAmino(object: _111.BalanceAmino): _111.Balance;
                toAmino(message: _111.Balance): _111.BalanceAmino;
                fromAminoMsg(object: _111.BalanceAminoMsg): _111.Balance;
                toAminoMsg(message: _111.Balance): _111.BalanceAminoMsg;
                fromProtoMsg(message: _111.BalanceProtoMsg): _111.Balance;
                toProto(message: _111.Balance): Uint8Array;
                toProtoMsg(message: _111.Balance): _111.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _110.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Params;
                fromPartial(object: Partial<_110.Params>): _110.Params;
                fromAmino(object: _110.ParamsAmino): _110.Params;
                toAmino(message: _110.Params): _110.ParamsAmino;
                fromAminoMsg(object: _110.ParamsAminoMsg): _110.Params;
                toAminoMsg(message: _110.Params): _110.ParamsAminoMsg;
                fromProtoMsg(message: _110.ParamsProtoMsg): _110.Params;
                toProto(message: _110.Params): Uint8Array;
                toProtoMsg(message: _110.Params): _110.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _110.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.SendEnabled;
                fromPartial(object: Partial<_110.SendEnabled>): _110.SendEnabled;
                fromAmino(object: _110.SendEnabledAmino): _110.SendEnabled;
                toAmino(message: _110.SendEnabled): _110.SendEnabledAmino;
                fromAminoMsg(object: _110.SendEnabledAminoMsg): _110.SendEnabled;
                toAminoMsg(message: _110.SendEnabled): _110.SendEnabledAminoMsg;
                fromProtoMsg(message: _110.SendEnabledProtoMsg): _110.SendEnabled;
                toProto(message: _110.SendEnabled): Uint8Array;
                toProtoMsg(message: _110.SendEnabled): _110.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _110.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Input;
                fromPartial(object: Partial<_110.Input>): _110.Input;
                fromAmino(object: _110.InputAmino): _110.Input;
                toAmino(message: _110.Input): _110.InputAmino;
                fromAminoMsg(object: _110.InputAminoMsg): _110.Input;
                toAminoMsg(message: _110.Input): _110.InputAminoMsg;
                fromProtoMsg(message: _110.InputProtoMsg): _110.Input;
                toProto(message: _110.Input): Uint8Array;
                toProtoMsg(message: _110.Input): _110.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _110.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Output;
                fromPartial(object: Partial<_110.Output>): _110.Output;
                fromAmino(object: _110.OutputAmino): _110.Output;
                toAmino(message: _110.Output): _110.OutputAmino;
                fromAminoMsg(object: _110.OutputAminoMsg): _110.Output;
                toAminoMsg(message: _110.Output): _110.OutputAminoMsg;
                fromProtoMsg(message: _110.OutputProtoMsg): _110.Output;
                toProto(message: _110.Output): Uint8Array;
                toProtoMsg(message: _110.Output): _110.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _110.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Supply;
                fromPartial(object: Partial<_110.Supply>): _110.Supply;
                fromAmino(object: _110.SupplyAmino): _110.Supply;
                toAmino(message: _110.Supply): _110.SupplyAmino;
                fromAminoMsg(object: _110.SupplyAminoMsg): _110.Supply;
                toAminoMsg(message: _110.Supply): _110.SupplyAminoMsg;
                fromProtoMsg(message: _110.SupplyProtoMsg): _110.Supply;
                toProto(message: _110.Supply): Uint8Array;
                toProtoMsg(message: _110.Supply): _110.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _110.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.DenomUnit;
                fromPartial(object: Partial<_110.DenomUnit>): _110.DenomUnit;
                fromAmino(object: _110.DenomUnitAmino): _110.DenomUnit;
                toAmino(message: _110.DenomUnit): _110.DenomUnitAmino;
                fromAminoMsg(object: _110.DenomUnitAminoMsg): _110.DenomUnit;
                toAminoMsg(message: _110.DenomUnit): _110.DenomUnitAminoMsg;
                fromProtoMsg(message: _110.DenomUnitProtoMsg): _110.DenomUnit;
                toProto(message: _110.DenomUnit): Uint8Array;
                toProtoMsg(message: _110.DenomUnit): _110.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _110.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Metadata;
                fromPartial(object: Partial<_110.Metadata>): _110.Metadata;
                fromAmino(object: _110.MetadataAmino): _110.Metadata;
                toAmino(message: _110.Metadata): _110.MetadataAmino;
                fromAminoMsg(object: _110.MetadataAminoMsg): _110.Metadata;
                toAminoMsg(message: _110.Metadata): _110.MetadataAminoMsg;
                fromProtoMsg(message: _110.MetadataProtoMsg): _110.Metadata;
                toProto(message: _110.Metadata): Uint8Array;
                toProtoMsg(message: _110.Metadata): _110.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _109.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.SendAuthorization;
                fromPartial(object: Partial<_109.SendAuthorization>): _109.SendAuthorization;
                fromAmino(object: _109.SendAuthorizationAmino): _109.SendAuthorization;
                toAmino(message: _109.SendAuthorization): _109.SendAuthorizationAmino;
                fromAminoMsg(object: _109.SendAuthorizationAminoMsg): _109.SendAuthorization;
                toAminoMsg(message: _109.SendAuthorization): _109.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _109.SendAuthorizationProtoMsg): _109.SendAuthorization;
                toProto(message: _109.SendAuthorization): Uint8Array;
                toProtoMsg(message: _109.SendAuthorization): _109.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _114.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.TxResponse;
                    fromPartial(object: Partial<_114.TxResponse>): _114.TxResponse;
                    fromAmino(object: _114.TxResponseAmino): _114.TxResponse;
                    toAmino(message: _114.TxResponse): _114.TxResponseAmino;
                    fromAminoMsg(object: _114.TxResponseAminoMsg): _114.TxResponse;
                    toAminoMsg(message: _114.TxResponse): _114.TxResponseAminoMsg;
                    fromProtoMsg(message: _114.TxResponseProtoMsg): _114.TxResponse;
                    toProto(message: _114.TxResponse): Uint8Array;
                    toProtoMsg(message: _114.TxResponse): _114.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _114.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.ABCIMessageLog;
                    fromPartial(object: Partial<_114.ABCIMessageLog>): _114.ABCIMessageLog;
                    fromAmino(object: _114.ABCIMessageLogAmino): _114.ABCIMessageLog;
                    toAmino(message: _114.ABCIMessageLog): _114.ABCIMessageLogAmino;
                    fromAminoMsg(object: _114.ABCIMessageLogAminoMsg): _114.ABCIMessageLog;
                    toAminoMsg(message: _114.ABCIMessageLog): _114.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _114.ABCIMessageLogProtoMsg): _114.ABCIMessageLog;
                    toProto(message: _114.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _114.ABCIMessageLog): _114.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _114.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.StringEvent;
                    fromPartial(object: Partial<_114.StringEvent>): _114.StringEvent;
                    fromAmino(object: _114.StringEventAmino): _114.StringEvent;
                    toAmino(message: _114.StringEvent): _114.StringEventAmino;
                    fromAminoMsg(object: _114.StringEventAminoMsg): _114.StringEvent;
                    toAminoMsg(message: _114.StringEvent): _114.StringEventAminoMsg;
                    fromProtoMsg(message: _114.StringEventProtoMsg): _114.StringEvent;
                    toProto(message: _114.StringEvent): Uint8Array;
                    toProtoMsg(message: _114.StringEvent): _114.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _114.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.Attribute;
                    fromPartial(object: Partial<_114.Attribute>): _114.Attribute;
                    fromAmino(object: _114.AttributeAmino): _114.Attribute;
                    toAmino(message: _114.Attribute): _114.AttributeAmino;
                    fromAminoMsg(object: _114.AttributeAminoMsg): _114.Attribute;
                    toAminoMsg(message: _114.Attribute): _114.AttributeAminoMsg;
                    fromProtoMsg(message: _114.AttributeProtoMsg): _114.Attribute;
                    toProto(message: _114.Attribute): Uint8Array;
                    toProtoMsg(message: _114.Attribute): _114.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _114.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.GasInfo;
                    fromPartial(object: Partial<_114.GasInfo>): _114.GasInfo;
                    fromAmino(object: _114.GasInfoAmino): _114.GasInfo;
                    toAmino(message: _114.GasInfo): _114.GasInfoAmino;
                    fromAminoMsg(object: _114.GasInfoAminoMsg): _114.GasInfo;
                    toAminoMsg(message: _114.GasInfo): _114.GasInfoAminoMsg;
                    fromProtoMsg(message: _114.GasInfoProtoMsg): _114.GasInfo;
                    toProto(message: _114.GasInfo): Uint8Array;
                    toProtoMsg(message: _114.GasInfo): _114.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _114.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.Result;
                    fromPartial(object: Partial<_114.Result>): _114.Result;
                    fromAmino(object: _114.ResultAmino): _114.Result;
                    toAmino(message: _114.Result): _114.ResultAmino;
                    fromAminoMsg(object: _114.ResultAminoMsg): _114.Result;
                    toAminoMsg(message: _114.Result): _114.ResultAminoMsg;
                    fromProtoMsg(message: _114.ResultProtoMsg): _114.Result;
                    toProto(message: _114.Result): Uint8Array;
                    toProtoMsg(message: _114.Result): _114.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _114.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.SimulationResponse;
                    fromPartial(object: Partial<_114.SimulationResponse>): _114.SimulationResponse;
                    fromAmino(object: _114.SimulationResponseAmino): _114.SimulationResponse;
                    toAmino(message: _114.SimulationResponse): _114.SimulationResponseAmino;
                    fromAminoMsg(object: _114.SimulationResponseAminoMsg): _114.SimulationResponse;
                    toAminoMsg(message: _114.SimulationResponse): _114.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _114.SimulationResponseProtoMsg): _114.SimulationResponse;
                    toProto(message: _114.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _114.SimulationResponse): _114.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _114.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.MsgData;
                    fromPartial(object: Partial<_114.MsgData>): _114.MsgData;
                    fromAmino(object: _114.MsgDataAmino): _114.MsgData;
                    toAmino(message: _114.MsgData): _114.MsgDataAmino;
                    fromAminoMsg(object: _114.MsgDataAminoMsg): _114.MsgData;
                    toAminoMsg(message: _114.MsgData): _114.MsgDataAminoMsg;
                    fromProtoMsg(message: _114.MsgDataProtoMsg): _114.MsgData;
                    toProto(message: _114.MsgData): Uint8Array;
                    toProtoMsg(message: _114.MsgData): _114.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _114.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.TxMsgData;
                    fromPartial(object: Partial<_114.TxMsgData>): _114.TxMsgData;
                    fromAmino(object: _114.TxMsgDataAmino): _114.TxMsgData;
                    toAmino(message: _114.TxMsgData): _114.TxMsgDataAmino;
                    fromAminoMsg(object: _114.TxMsgDataAminoMsg): _114.TxMsgData;
                    toAminoMsg(message: _114.TxMsgData): _114.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _114.TxMsgDataProtoMsg): _114.TxMsgData;
                    toProto(message: _114.TxMsgData): Uint8Array;
                    toProtoMsg(message: _114.TxMsgData): _114.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _114.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.SearchTxsResult;
                    fromPartial(object: Partial<_114.SearchTxsResult>): _114.SearchTxsResult;
                    fromAmino(object: _114.SearchTxsResultAmino): _114.SearchTxsResult;
                    toAmino(message: _114.SearchTxsResult): _114.SearchTxsResultAmino;
                    fromAminoMsg(object: _114.SearchTxsResultAminoMsg): _114.SearchTxsResult;
                    toAminoMsg(message: _114.SearchTxsResult): _114.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _114.SearchTxsResultProtoMsg): _114.SearchTxsResult;
                    toProto(message: _114.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _114.SearchTxsResult): _114.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _115.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Pairs;
                    fromPartial(object: Partial<_115.Pairs>): _115.Pairs;
                    fromAmino(object: _115.PairsAmino): _115.Pairs;
                    toAmino(message: _115.Pairs): _115.PairsAmino;
                    fromAminoMsg(object: _115.PairsAminoMsg): _115.Pairs;
                    toAminoMsg(message: _115.Pairs): _115.PairsAminoMsg;
                    fromProtoMsg(message: _115.PairsProtoMsg): _115.Pairs;
                    toProto(message: _115.Pairs): Uint8Array;
                    toProtoMsg(message: _115.Pairs): _115.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _115.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Pair;
                    fromPartial(object: Partial<_115.Pair>): _115.Pair;
                    fromAmino(object: _115.PairAmino): _115.Pair;
                    toAmino(message: _115.Pair): _115.PairAmino;
                    fromAminoMsg(object: _115.PairAminoMsg): _115.Pair;
                    toAminoMsg(message: _115.Pair): _115.PairAminoMsg;
                    fromProtoMsg(message: _115.PairProtoMsg): _115.Pair;
                    toProto(message: _115.Pair): Uint8Array;
                    toProtoMsg(message: _115.Pair): _115.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _390.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _116.ConfigRequest): Promise<_116.ConfigResponse>;
                };
                LCDQueryClient: typeof _369.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _116.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _116.ConfigRequest;
                    fromPartial(_: Partial<_116.ConfigRequest>): _116.ConfigRequest;
                    fromAmino(_: _116.ConfigRequestAmino): _116.ConfigRequest;
                    toAmino(_: _116.ConfigRequest): _116.ConfigRequestAmino;
                    fromAminoMsg(object: _116.ConfigRequestAminoMsg): _116.ConfigRequest;
                    toAminoMsg(message: _116.ConfigRequest): _116.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _116.ConfigRequestProtoMsg): _116.ConfigRequest;
                    toProto(message: _116.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _116.ConfigRequest): _116.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _116.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.ConfigResponse;
                    fromPartial(object: Partial<_116.ConfigResponse>): _116.ConfigResponse;
                    fromAmino(object: _116.ConfigResponseAmino): _116.ConfigResponse;
                    toAmino(message: _116.ConfigResponse): _116.ConfigResponseAmino;
                    fromAminoMsg(object: _116.ConfigResponseAminoMsg): _116.ConfigResponse;
                    toAminoMsg(message: _116.ConfigResponse): _116.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _116.ConfigResponseProtoMsg): _116.ConfigResponse;
                    toProto(message: _116.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _116.ConfigResponse): _116.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _117.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.PageRequest;
                    fromPartial(object: Partial<_117.PageRequest>): _117.PageRequest;
                    fromAmino(object: _117.PageRequestAmino): _117.PageRequest;
                    toAmino(message: _117.PageRequest): _117.PageRequestAmino;
                    fromAminoMsg(object: _117.PageRequestAminoMsg): _117.PageRequest;
                    toAminoMsg(message: _117.PageRequest): _117.PageRequestAminoMsg;
                    fromProtoMsg(message: _117.PageRequestProtoMsg): _117.PageRequest;
                    toProto(message: _117.PageRequest): Uint8Array;
                    toProtoMsg(message: _117.PageRequest): _117.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _117.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.PageResponse;
                    fromPartial(object: Partial<_117.PageResponse>): _117.PageResponse;
                    fromAmino(object: _117.PageResponseAmino): _117.PageResponse;
                    toAmino(message: _117.PageResponse): _117.PageResponseAmino;
                    fromAminoMsg(object: _117.PageResponseAminoMsg): _117.PageResponse;
                    toAminoMsg(message: _117.PageResponse): _117.PageResponseAminoMsg;
                    fromProtoMsg(message: _117.PageResponseProtoMsg): _117.PageResponse;
                    toProto(message: _117.PageResponse): Uint8Array;
                    toProtoMsg(message: _117.PageResponse): _117.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _118.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _118.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_118.ListAllInterfacesRequest>): _118.ListAllInterfacesRequest;
                    fromAmino(_: _118.ListAllInterfacesRequestAmino): _118.ListAllInterfacesRequest;
                    toAmino(_: _118.ListAllInterfacesRequest): _118.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _118.ListAllInterfacesRequestAminoMsg): _118.ListAllInterfacesRequest;
                    toAminoMsg(message: _118.ListAllInterfacesRequest): _118.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _118.ListAllInterfacesRequestProtoMsg): _118.ListAllInterfacesRequest;
                    toProto(message: _118.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _118.ListAllInterfacesRequest): _118.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _118.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_118.ListAllInterfacesResponse>): _118.ListAllInterfacesResponse;
                    fromAmino(object: _118.ListAllInterfacesResponseAmino): _118.ListAllInterfacesResponse;
                    toAmino(message: _118.ListAllInterfacesResponse): _118.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _118.ListAllInterfacesResponseAminoMsg): _118.ListAllInterfacesResponse;
                    toAminoMsg(message: _118.ListAllInterfacesResponse): _118.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _118.ListAllInterfacesResponseProtoMsg): _118.ListAllInterfacesResponse;
                    toProto(message: _118.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _118.ListAllInterfacesResponse): _118.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _118.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ListImplementationsRequest;
                    fromPartial(object: Partial<_118.ListImplementationsRequest>): _118.ListImplementationsRequest;
                    fromAmino(object: _118.ListImplementationsRequestAmino): _118.ListImplementationsRequest;
                    toAmino(message: _118.ListImplementationsRequest): _118.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _118.ListImplementationsRequestAminoMsg): _118.ListImplementationsRequest;
                    toAminoMsg(message: _118.ListImplementationsRequest): _118.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _118.ListImplementationsRequestProtoMsg): _118.ListImplementationsRequest;
                    toProto(message: _118.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _118.ListImplementationsRequest): _118.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _118.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ListImplementationsResponse;
                    fromPartial(object: Partial<_118.ListImplementationsResponse>): _118.ListImplementationsResponse;
                    fromAmino(object: _118.ListImplementationsResponseAmino): _118.ListImplementationsResponse;
                    toAmino(message: _118.ListImplementationsResponse): _118.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _118.ListImplementationsResponseAminoMsg): _118.ListImplementationsResponse;
                    toAminoMsg(message: _118.ListImplementationsResponse): _118.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _118.ListImplementationsResponseProtoMsg): _118.ListImplementationsResponse;
                    toProto(message: _118.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _118.ListImplementationsResponse): _118.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _119.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.AppDescriptor;
                    fromPartial(object: Partial<_119.AppDescriptor>): _119.AppDescriptor;
                    fromAmino(object: _119.AppDescriptorAmino): _119.AppDescriptor;
                    toAmino(message: _119.AppDescriptor): _119.AppDescriptorAmino;
                    fromAminoMsg(object: _119.AppDescriptorAminoMsg): _119.AppDescriptor;
                    toAminoMsg(message: _119.AppDescriptor): _119.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _119.AppDescriptorProtoMsg): _119.AppDescriptor;
                    toProto(message: _119.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _119.AppDescriptor): _119.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _119.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.TxDescriptor;
                    fromPartial(object: Partial<_119.TxDescriptor>): _119.TxDescriptor;
                    fromAmino(object: _119.TxDescriptorAmino): _119.TxDescriptor;
                    toAmino(message: _119.TxDescriptor): _119.TxDescriptorAmino;
                    fromAminoMsg(object: _119.TxDescriptorAminoMsg): _119.TxDescriptor;
                    toAminoMsg(message: _119.TxDescriptor): _119.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _119.TxDescriptorProtoMsg): _119.TxDescriptor;
                    toProto(message: _119.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _119.TxDescriptor): _119.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _119.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.AuthnDescriptor;
                    fromPartial(object: Partial<_119.AuthnDescriptor>): _119.AuthnDescriptor;
                    fromAmino(object: _119.AuthnDescriptorAmino): _119.AuthnDescriptor;
                    toAmino(message: _119.AuthnDescriptor): _119.AuthnDescriptorAmino;
                    fromAminoMsg(object: _119.AuthnDescriptorAminoMsg): _119.AuthnDescriptor;
                    toAminoMsg(message: _119.AuthnDescriptor): _119.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _119.AuthnDescriptorProtoMsg): _119.AuthnDescriptor;
                    toProto(message: _119.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _119.AuthnDescriptor): _119.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _119.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.SigningModeDescriptor;
                    fromPartial(object: Partial<_119.SigningModeDescriptor>): _119.SigningModeDescriptor;
                    fromAmino(object: _119.SigningModeDescriptorAmino): _119.SigningModeDescriptor;
                    toAmino(message: _119.SigningModeDescriptor): _119.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _119.SigningModeDescriptorAminoMsg): _119.SigningModeDescriptor;
                    toAminoMsg(message: _119.SigningModeDescriptor): _119.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _119.SigningModeDescriptorProtoMsg): _119.SigningModeDescriptor;
                    toProto(message: _119.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _119.SigningModeDescriptor): _119.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _119.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.ChainDescriptor;
                    fromPartial(object: Partial<_119.ChainDescriptor>): _119.ChainDescriptor;
                    fromAmino(object: _119.ChainDescriptorAmino): _119.ChainDescriptor;
                    toAmino(message: _119.ChainDescriptor): _119.ChainDescriptorAmino;
                    fromAminoMsg(object: _119.ChainDescriptorAminoMsg): _119.ChainDescriptor;
                    toAminoMsg(message: _119.ChainDescriptor): _119.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _119.ChainDescriptorProtoMsg): _119.ChainDescriptor;
                    toProto(message: _119.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _119.ChainDescriptor): _119.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _119.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.CodecDescriptor;
                    fromPartial(object: Partial<_119.CodecDescriptor>): _119.CodecDescriptor;
                    fromAmino(object: _119.CodecDescriptorAmino): _119.CodecDescriptor;
                    toAmino(message: _119.CodecDescriptor): _119.CodecDescriptorAmino;
                    fromAminoMsg(object: _119.CodecDescriptorAminoMsg): _119.CodecDescriptor;
                    toAminoMsg(message: _119.CodecDescriptor): _119.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _119.CodecDescriptorProtoMsg): _119.CodecDescriptor;
                    toProto(message: _119.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _119.CodecDescriptor): _119.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _119.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.InterfaceDescriptor;
                    fromPartial(object: Partial<_119.InterfaceDescriptor>): _119.InterfaceDescriptor;
                    fromAmino(object: _119.InterfaceDescriptorAmino): _119.InterfaceDescriptor;
                    toAmino(message: _119.InterfaceDescriptor): _119.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _119.InterfaceDescriptorAminoMsg): _119.InterfaceDescriptor;
                    toAminoMsg(message: _119.InterfaceDescriptor): _119.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _119.InterfaceDescriptorProtoMsg): _119.InterfaceDescriptor;
                    toProto(message: _119.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _119.InterfaceDescriptor): _119.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _119.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_119.InterfaceImplementerDescriptor>): _119.InterfaceImplementerDescriptor;
                    fromAmino(object: _119.InterfaceImplementerDescriptorAmino): _119.InterfaceImplementerDescriptor;
                    toAmino(message: _119.InterfaceImplementerDescriptor): _119.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _119.InterfaceImplementerDescriptorAminoMsg): _119.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _119.InterfaceImplementerDescriptor): _119.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _119.InterfaceImplementerDescriptorProtoMsg): _119.InterfaceImplementerDescriptor;
                    toProto(message: _119.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _119.InterfaceImplementerDescriptor): _119.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _119.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_119.InterfaceAcceptingMessageDescriptor>): _119.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _119.InterfaceAcceptingMessageDescriptorAmino): _119.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _119.InterfaceAcceptingMessageDescriptor): _119.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _119.InterfaceAcceptingMessageDescriptorAminoMsg): _119.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _119.InterfaceAcceptingMessageDescriptor): _119.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _119.InterfaceAcceptingMessageDescriptorProtoMsg): _119.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _119.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _119.InterfaceAcceptingMessageDescriptor): _119.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _119.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.ConfigurationDescriptor;
                    fromPartial(object: Partial<_119.ConfigurationDescriptor>): _119.ConfigurationDescriptor;
                    fromAmino(object: _119.ConfigurationDescriptorAmino): _119.ConfigurationDescriptor;
                    toAmino(message: _119.ConfigurationDescriptor): _119.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _119.ConfigurationDescriptorAminoMsg): _119.ConfigurationDescriptor;
                    toAminoMsg(message: _119.ConfigurationDescriptor): _119.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _119.ConfigurationDescriptorProtoMsg): _119.ConfigurationDescriptor;
                    toProto(message: _119.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _119.ConfigurationDescriptor): _119.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _119.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgDescriptor;
                    fromPartial(object: Partial<_119.MsgDescriptor>): _119.MsgDescriptor;
                    fromAmino(object: _119.MsgDescriptorAmino): _119.MsgDescriptor;
                    toAmino(message: _119.MsgDescriptor): _119.MsgDescriptorAmino;
                    fromAminoMsg(object: _119.MsgDescriptorAminoMsg): _119.MsgDescriptor;
                    toAminoMsg(message: _119.MsgDescriptor): _119.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _119.MsgDescriptorProtoMsg): _119.MsgDescriptor;
                    toProto(message: _119.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _119.MsgDescriptor): _119.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _119.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _119.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_119.GetAuthnDescriptorRequest>): _119.GetAuthnDescriptorRequest;
                    fromAmino(_: _119.GetAuthnDescriptorRequestAmino): _119.GetAuthnDescriptorRequest;
                    toAmino(_: _119.GetAuthnDescriptorRequest): _119.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _119.GetAuthnDescriptorRequestAminoMsg): _119.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _119.GetAuthnDescriptorRequest): _119.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _119.GetAuthnDescriptorRequestProtoMsg): _119.GetAuthnDescriptorRequest;
                    toProto(message: _119.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _119.GetAuthnDescriptorRequest): _119.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _119.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_119.GetAuthnDescriptorResponse>): _119.GetAuthnDescriptorResponse;
                    fromAmino(object: _119.GetAuthnDescriptorResponseAmino): _119.GetAuthnDescriptorResponse;
                    toAmino(message: _119.GetAuthnDescriptorResponse): _119.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _119.GetAuthnDescriptorResponseAminoMsg): _119.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _119.GetAuthnDescriptorResponse): _119.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _119.GetAuthnDescriptorResponseProtoMsg): _119.GetAuthnDescriptorResponse;
                    toProto(message: _119.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _119.GetAuthnDescriptorResponse): _119.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _119.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _119.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_119.GetChainDescriptorRequest>): _119.GetChainDescriptorRequest;
                    fromAmino(_: _119.GetChainDescriptorRequestAmino): _119.GetChainDescriptorRequest;
                    toAmino(_: _119.GetChainDescriptorRequest): _119.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _119.GetChainDescriptorRequestAminoMsg): _119.GetChainDescriptorRequest;
                    toAminoMsg(message: _119.GetChainDescriptorRequest): _119.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _119.GetChainDescriptorRequestProtoMsg): _119.GetChainDescriptorRequest;
                    toProto(message: _119.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _119.GetChainDescriptorRequest): _119.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _119.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_119.GetChainDescriptorResponse>): _119.GetChainDescriptorResponse;
                    fromAmino(object: _119.GetChainDescriptorResponseAmino): _119.GetChainDescriptorResponse;
                    toAmino(message: _119.GetChainDescriptorResponse): _119.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _119.GetChainDescriptorResponseAminoMsg): _119.GetChainDescriptorResponse;
                    toAminoMsg(message: _119.GetChainDescriptorResponse): _119.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _119.GetChainDescriptorResponseProtoMsg): _119.GetChainDescriptorResponse;
                    toProto(message: _119.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _119.GetChainDescriptorResponse): _119.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _119.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _119.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_119.GetCodecDescriptorRequest>): _119.GetCodecDescriptorRequest;
                    fromAmino(_: _119.GetCodecDescriptorRequestAmino): _119.GetCodecDescriptorRequest;
                    toAmino(_: _119.GetCodecDescriptorRequest): _119.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _119.GetCodecDescriptorRequestAminoMsg): _119.GetCodecDescriptorRequest;
                    toAminoMsg(message: _119.GetCodecDescriptorRequest): _119.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _119.GetCodecDescriptorRequestProtoMsg): _119.GetCodecDescriptorRequest;
                    toProto(message: _119.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _119.GetCodecDescriptorRequest): _119.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _119.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_119.GetCodecDescriptorResponse>): _119.GetCodecDescriptorResponse;
                    fromAmino(object: _119.GetCodecDescriptorResponseAmino): _119.GetCodecDescriptorResponse;
                    toAmino(message: _119.GetCodecDescriptorResponse): _119.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _119.GetCodecDescriptorResponseAminoMsg): _119.GetCodecDescriptorResponse;
                    toAminoMsg(message: _119.GetCodecDescriptorResponse): _119.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _119.GetCodecDescriptorResponseProtoMsg): _119.GetCodecDescriptorResponse;
                    toProto(message: _119.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _119.GetCodecDescriptorResponse): _119.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _119.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _119.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_119.GetConfigurationDescriptorRequest>): _119.GetConfigurationDescriptorRequest;
                    fromAmino(_: _119.GetConfigurationDescriptorRequestAmino): _119.GetConfigurationDescriptorRequest;
                    toAmino(_: _119.GetConfigurationDescriptorRequest): _119.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _119.GetConfigurationDescriptorRequestAminoMsg): _119.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _119.GetConfigurationDescriptorRequest): _119.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _119.GetConfigurationDescriptorRequestProtoMsg): _119.GetConfigurationDescriptorRequest;
                    toProto(message: _119.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _119.GetConfigurationDescriptorRequest): _119.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _119.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_119.GetConfigurationDescriptorResponse>): _119.GetConfigurationDescriptorResponse;
                    fromAmino(object: _119.GetConfigurationDescriptorResponseAmino): _119.GetConfigurationDescriptorResponse;
                    toAmino(message: _119.GetConfigurationDescriptorResponse): _119.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _119.GetConfigurationDescriptorResponseAminoMsg): _119.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _119.GetConfigurationDescriptorResponse): _119.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _119.GetConfigurationDescriptorResponseProtoMsg): _119.GetConfigurationDescriptorResponse;
                    toProto(message: _119.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _119.GetConfigurationDescriptorResponse): _119.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _119.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _119.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_119.GetQueryServicesDescriptorRequest>): _119.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _119.GetQueryServicesDescriptorRequestAmino): _119.GetQueryServicesDescriptorRequest;
                    toAmino(_: _119.GetQueryServicesDescriptorRequest): _119.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _119.GetQueryServicesDescriptorRequestAminoMsg): _119.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _119.GetQueryServicesDescriptorRequest): _119.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _119.GetQueryServicesDescriptorRequestProtoMsg): _119.GetQueryServicesDescriptorRequest;
                    toProto(message: _119.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _119.GetQueryServicesDescriptorRequest): _119.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _119.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_119.GetQueryServicesDescriptorResponse>): _119.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _119.GetQueryServicesDescriptorResponseAmino): _119.GetQueryServicesDescriptorResponse;
                    toAmino(message: _119.GetQueryServicesDescriptorResponse): _119.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _119.GetQueryServicesDescriptorResponseAminoMsg): _119.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _119.GetQueryServicesDescriptorResponse): _119.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _119.GetQueryServicesDescriptorResponseProtoMsg): _119.GetQueryServicesDescriptorResponse;
                    toProto(message: _119.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _119.GetQueryServicesDescriptorResponse): _119.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _119.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _119.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_119.GetTxDescriptorRequest>): _119.GetTxDescriptorRequest;
                    fromAmino(_: _119.GetTxDescriptorRequestAmino): _119.GetTxDescriptorRequest;
                    toAmino(_: _119.GetTxDescriptorRequest): _119.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _119.GetTxDescriptorRequestAminoMsg): _119.GetTxDescriptorRequest;
                    toAminoMsg(message: _119.GetTxDescriptorRequest): _119.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _119.GetTxDescriptorRequestProtoMsg): _119.GetTxDescriptorRequest;
                    toProto(message: _119.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _119.GetTxDescriptorRequest): _119.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _119.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_119.GetTxDescriptorResponse>): _119.GetTxDescriptorResponse;
                    fromAmino(object: _119.GetTxDescriptorResponseAmino): _119.GetTxDescriptorResponse;
                    toAmino(message: _119.GetTxDescriptorResponse): _119.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _119.GetTxDescriptorResponseAminoMsg): _119.GetTxDescriptorResponse;
                    toAminoMsg(message: _119.GetTxDescriptorResponse): _119.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _119.GetTxDescriptorResponseProtoMsg): _119.GetTxDescriptorResponse;
                    toProto(message: _119.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _119.GetTxDescriptorResponse): _119.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _119.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.QueryServicesDescriptor;
                    fromPartial(object: Partial<_119.QueryServicesDescriptor>): _119.QueryServicesDescriptor;
                    fromAmino(object: _119.QueryServicesDescriptorAmino): _119.QueryServicesDescriptor;
                    toAmino(message: _119.QueryServicesDescriptor): _119.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _119.QueryServicesDescriptorAminoMsg): _119.QueryServicesDescriptor;
                    toAminoMsg(message: _119.QueryServicesDescriptor): _119.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _119.QueryServicesDescriptorProtoMsg): _119.QueryServicesDescriptor;
                    toProto(message: _119.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _119.QueryServicesDescriptor): _119.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _119.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.QueryServiceDescriptor;
                    fromPartial(object: Partial<_119.QueryServiceDescriptor>): _119.QueryServiceDescriptor;
                    fromAmino(object: _119.QueryServiceDescriptorAmino): _119.QueryServiceDescriptor;
                    toAmino(message: _119.QueryServiceDescriptor): _119.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _119.QueryServiceDescriptorAminoMsg): _119.QueryServiceDescriptor;
                    toAminoMsg(message: _119.QueryServiceDescriptor): _119.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _119.QueryServiceDescriptorProtoMsg): _119.QueryServiceDescriptor;
                    toProto(message: _119.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _119.QueryServiceDescriptor): _119.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _119.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.QueryMethodDescriptor;
                    fromPartial(object: Partial<_119.QueryMethodDescriptor>): _119.QueryMethodDescriptor;
                    fromAmino(object: _119.QueryMethodDescriptorAmino): _119.QueryMethodDescriptor;
                    toAmino(message: _119.QueryMethodDescriptor): _119.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _119.QueryMethodDescriptorAminoMsg): _119.QueryMethodDescriptor;
                    toAminoMsg(message: _119.QueryMethodDescriptor): _119.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _119.QueryMethodDescriptorProtoMsg): _119.QueryMethodDescriptor;
                    toProto(message: _119.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _119.QueryMethodDescriptor): _119.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _120.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.Snapshot;
                    fromPartial(object: Partial<_120.Snapshot>): _120.Snapshot;
                    fromAmino(object: _120.SnapshotAmino): _120.Snapshot;
                    toAmino(message: _120.Snapshot): _120.SnapshotAmino;
                    fromAminoMsg(object: _120.SnapshotAminoMsg): _120.Snapshot;
                    toAminoMsg(message: _120.Snapshot): _120.SnapshotAminoMsg;
                    fromProtoMsg(message: _120.SnapshotProtoMsg): _120.Snapshot;
                    toProto(message: _120.Snapshot): Uint8Array;
                    toProtoMsg(message: _120.Snapshot): _120.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _120.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.Metadata;
                    fromPartial(object: Partial<_120.Metadata>): _120.Metadata;
                    fromAmino(object: _120.MetadataAmino): _120.Metadata;
                    toAmino(message: _120.Metadata): _120.MetadataAmino;
                    fromAminoMsg(object: _120.MetadataAminoMsg): _120.Metadata;
                    toAminoMsg(message: _120.Metadata): _120.MetadataAminoMsg;
                    fromProtoMsg(message: _120.MetadataProtoMsg): _120.Metadata;
                    toProto(message: _120.Metadata): Uint8Array;
                    toProtoMsg(message: _120.Metadata): _120.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _120.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SnapshotItem;
                    fromPartial(object: Partial<_120.SnapshotItem>): _120.SnapshotItem;
                    fromAmino(object: _120.SnapshotItemAmino): _120.SnapshotItem;
                    toAmino(message: _120.SnapshotItem): _120.SnapshotItemAmino;
                    fromAminoMsg(object: _120.SnapshotItemAminoMsg): _120.SnapshotItem;
                    toAminoMsg(message: _120.SnapshotItem): _120.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _120.SnapshotItemProtoMsg): _120.SnapshotItem;
                    toProto(message: _120.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _120.SnapshotItem): _120.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _120.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SnapshotStoreItem;
                    fromPartial(object: Partial<_120.SnapshotStoreItem>): _120.SnapshotStoreItem;
                    fromAmino(object: _120.SnapshotStoreItemAmino): _120.SnapshotStoreItem;
                    toAmino(message: _120.SnapshotStoreItem): _120.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _120.SnapshotStoreItemAminoMsg): _120.SnapshotStoreItem;
                    toAminoMsg(message: _120.SnapshotStoreItem): _120.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _120.SnapshotStoreItemProtoMsg): _120.SnapshotStoreItem;
                    toProto(message: _120.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _120.SnapshotStoreItem): _120.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _120.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SnapshotIAVLItem;
                    fromPartial(object: Partial<_120.SnapshotIAVLItem>): _120.SnapshotIAVLItem;
                    fromAmino(object: _120.SnapshotIAVLItemAmino): _120.SnapshotIAVLItem;
                    toAmino(message: _120.SnapshotIAVLItem): _120.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _120.SnapshotIAVLItemAminoMsg): _120.SnapshotIAVLItem;
                    toAminoMsg(message: _120.SnapshotIAVLItem): _120.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _120.SnapshotIAVLItemProtoMsg): _120.SnapshotIAVLItem;
                    toProto(message: _120.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _120.SnapshotIAVLItem): _120.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _120.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_120.SnapshotExtensionMeta>): _120.SnapshotExtensionMeta;
                    fromAmino(object: _120.SnapshotExtensionMetaAmino): _120.SnapshotExtensionMeta;
                    toAmino(message: _120.SnapshotExtensionMeta): _120.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _120.SnapshotExtensionMetaAminoMsg): _120.SnapshotExtensionMeta;
                    toAminoMsg(message: _120.SnapshotExtensionMeta): _120.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _120.SnapshotExtensionMetaProtoMsg): _120.SnapshotExtensionMeta;
                    toProto(message: _120.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _120.SnapshotExtensionMeta): _120.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _120.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_120.SnapshotExtensionPayload>): _120.SnapshotExtensionPayload;
                    fromAmino(object: _120.SnapshotExtensionPayloadAmino): _120.SnapshotExtensionPayload;
                    toAmino(message: _120.SnapshotExtensionPayload): _120.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _120.SnapshotExtensionPayloadAminoMsg): _120.SnapshotExtensionPayload;
                    toAminoMsg(message: _120.SnapshotExtensionPayload): _120.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _120.SnapshotExtensionPayloadProtoMsg): _120.SnapshotExtensionPayload;
                    toProto(message: _120.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _120.SnapshotExtensionPayload): _120.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _120.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SnapshotKVItem;
                    fromPartial(object: Partial<_120.SnapshotKVItem>): _120.SnapshotKVItem;
                    fromAmino(object: _120.SnapshotKVItemAmino): _120.SnapshotKVItem;
                    toAmino(message: _120.SnapshotKVItem): _120.SnapshotKVItemAmino;
                    fromAminoMsg(object: _120.SnapshotKVItemAminoMsg): _120.SnapshotKVItem;
                    toAminoMsg(message: _120.SnapshotKVItem): _120.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _120.SnapshotKVItemProtoMsg): _120.SnapshotKVItem;
                    toProto(message: _120.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _120.SnapshotKVItem): _120.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _120.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SnapshotSchema;
                    fromPartial(object: Partial<_120.SnapshotSchema>): _120.SnapshotSchema;
                    fromAmino(object: _120.SnapshotSchemaAmino): _120.SnapshotSchema;
                    toAmino(message: _120.SnapshotSchema): _120.SnapshotSchemaAmino;
                    fromAminoMsg(object: _120.SnapshotSchemaAminoMsg): _120.SnapshotSchema;
                    toAminoMsg(message: _120.SnapshotSchema): _120.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _120.SnapshotSchemaProtoMsg): _120.SnapshotSchema;
                    toProto(message: _120.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _120.SnapshotSchema): _120.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _122.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.StoreKVPair;
                    fromPartial(object: Partial<_122.StoreKVPair>): _122.StoreKVPair;
                    fromAmino(object: _122.StoreKVPairAmino): _122.StoreKVPair;
                    toAmino(message: _122.StoreKVPair): _122.StoreKVPairAmino;
                    fromAminoMsg(object: _122.StoreKVPairAminoMsg): _122.StoreKVPair;
                    toAminoMsg(message: _122.StoreKVPair): _122.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _122.StoreKVPairProtoMsg): _122.StoreKVPair;
                    toProto(message: _122.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _122.StoreKVPair): _122.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _122.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.BlockMetadata;
                    fromPartial(object: Partial<_122.BlockMetadata>): _122.BlockMetadata;
                    fromAmino(object: _122.BlockMetadataAmino): _122.BlockMetadata;
                    toAmino(message: _122.BlockMetadata): _122.BlockMetadataAmino;
                    fromAminoMsg(object: _122.BlockMetadataAminoMsg): _122.BlockMetadata;
                    toAminoMsg(message: _122.BlockMetadata): _122.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _122.BlockMetadataProtoMsg): _122.BlockMetadata;
                    toProto(message: _122.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _122.BlockMetadata): _122.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _122.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_122.BlockMetadata_DeliverTx>): _122.BlockMetadata_DeliverTx;
                    fromAmino(object: _122.BlockMetadata_DeliverTxAmino): _122.BlockMetadata_DeliverTx;
                    toAmino(message: _122.BlockMetadata_DeliverTx): _122.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _122.BlockMetadata_DeliverTxAminoMsg): _122.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _122.BlockMetadata_DeliverTx): _122.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _122.BlockMetadata_DeliverTxProtoMsg): _122.BlockMetadata_DeliverTx;
                    toProto(message: _122.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _122.BlockMetadata_DeliverTx): _122.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _121.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.CommitInfo;
                    fromPartial(object: Partial<_121.CommitInfo>): _121.CommitInfo;
                    fromAmino(object: _121.CommitInfoAmino): _121.CommitInfo;
                    toAmino(message: _121.CommitInfo): _121.CommitInfoAmino;
                    fromAminoMsg(object: _121.CommitInfoAminoMsg): _121.CommitInfo;
                    toAminoMsg(message: _121.CommitInfo): _121.CommitInfoAminoMsg;
                    fromProtoMsg(message: _121.CommitInfoProtoMsg): _121.CommitInfo;
                    toProto(message: _121.CommitInfo): Uint8Array;
                    toProtoMsg(message: _121.CommitInfo): _121.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _121.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.StoreInfo;
                    fromPartial(object: Partial<_121.StoreInfo>): _121.StoreInfo;
                    fromAmino(object: _121.StoreInfoAmino): _121.StoreInfo;
                    toAmino(message: _121.StoreInfo): _121.StoreInfoAmino;
                    fromAminoMsg(object: _121.StoreInfoAminoMsg): _121.StoreInfo;
                    toAminoMsg(message: _121.StoreInfo): _121.StoreInfoAminoMsg;
                    fromProtoMsg(message: _121.StoreInfoProtoMsg): _121.StoreInfo;
                    toProto(message: _121.StoreInfo): Uint8Array;
                    toProtoMsg(message: _121.StoreInfo): _121.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _121.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.CommitID;
                    fromPartial(object: Partial<_121.CommitID>): _121.CommitID;
                    fromAmino(object: _121.CommitIDAmino): _121.CommitID;
                    toAmino(message: _121.CommitID): _121.CommitIDAmino;
                    fromAminoMsg(object: _121.CommitIDAminoMsg): _121.CommitID;
                    toAminoMsg(message: _121.CommitID): _121.CommitIDAminoMsg;
                    fromProtoMsg(message: _121.CommitIDProtoMsg): _121.CommitID;
                    toProto(message: _121.CommitID): Uint8Array;
                    toProtoMsg(message: _121.CommitID): _121.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _391.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _123.GetNodeInfoRequest): Promise<_123.GetNodeInfoResponse>;
                    getSyncing(request?: _123.GetSyncingRequest): Promise<_123.GetSyncingResponse>;
                    getLatestBlock(request?: _123.GetLatestBlockRequest): Promise<_123.GetLatestBlockResponse>;
                    getBlockByHeight(request: _123.GetBlockByHeightRequest): Promise<_123.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _123.GetLatestValidatorSetRequest): Promise<_123.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _123.GetValidatorSetByHeightRequest): Promise<_123.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _123.ABCIQueryRequest): Promise<_123.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _370.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _124.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.Block;
                    fromPartial(object: Partial<_124.Block>): _124.Block;
                    fromAmino(object: _124.BlockAmino): _124.Block;
                    toAmino(message: _124.Block): _124.BlockAmino;
                    fromAminoMsg(object: _124.BlockAminoMsg): _124.Block;
                    toAminoMsg(message: _124.Block): _124.BlockAminoMsg;
                    fromProtoMsg(message: _124.BlockProtoMsg): _124.Block;
                    toProto(message: _124.Block): Uint8Array;
                    toProtoMsg(message: _124.Block): _124.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _124.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.Header;
                    fromPartial(object: Partial<_124.Header>): _124.Header;
                    fromAmino(object: _124.HeaderAmino): _124.Header;
                    toAmino(message: _124.Header): _124.HeaderAmino;
                    fromAminoMsg(object: _124.HeaderAminoMsg): _124.Header;
                    toAminoMsg(message: _124.Header): _124.HeaderAminoMsg;
                    fromProtoMsg(message: _124.HeaderProtoMsg): _124.Header;
                    toProto(message: _124.Header): Uint8Array;
                    toProtoMsg(message: _124.Header): _124.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _123.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_123.GetValidatorSetByHeightRequest>): _123.GetValidatorSetByHeightRequest;
                    fromAmino(object: _123.GetValidatorSetByHeightRequestAmino): _123.GetValidatorSetByHeightRequest;
                    toAmino(message: _123.GetValidatorSetByHeightRequest): _123.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _123.GetValidatorSetByHeightRequestAminoMsg): _123.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _123.GetValidatorSetByHeightRequest): _123.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _123.GetValidatorSetByHeightRequestProtoMsg): _123.GetValidatorSetByHeightRequest;
                    toProto(message: _123.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _123.GetValidatorSetByHeightRequest): _123.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _123.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_123.GetValidatorSetByHeightResponse>): _123.GetValidatorSetByHeightResponse;
                    fromAmino(object: _123.GetValidatorSetByHeightResponseAmino): _123.GetValidatorSetByHeightResponse;
                    toAmino(message: _123.GetValidatorSetByHeightResponse): _123.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _123.GetValidatorSetByHeightResponseAminoMsg): _123.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _123.GetValidatorSetByHeightResponse): _123.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _123.GetValidatorSetByHeightResponseProtoMsg): _123.GetValidatorSetByHeightResponse;
                    toProto(message: _123.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _123.GetValidatorSetByHeightResponse): _123.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _123.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_123.GetLatestValidatorSetRequest>): _123.GetLatestValidatorSetRequest;
                    fromAmino(object: _123.GetLatestValidatorSetRequestAmino): _123.GetLatestValidatorSetRequest;
                    toAmino(message: _123.GetLatestValidatorSetRequest): _123.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _123.GetLatestValidatorSetRequestAminoMsg): _123.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _123.GetLatestValidatorSetRequest): _123.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _123.GetLatestValidatorSetRequestProtoMsg): _123.GetLatestValidatorSetRequest;
                    toProto(message: _123.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _123.GetLatestValidatorSetRequest): _123.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _123.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_123.GetLatestValidatorSetResponse>): _123.GetLatestValidatorSetResponse;
                    fromAmino(object: _123.GetLatestValidatorSetResponseAmino): _123.GetLatestValidatorSetResponse;
                    toAmino(message: _123.GetLatestValidatorSetResponse): _123.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _123.GetLatestValidatorSetResponseAminoMsg): _123.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _123.GetLatestValidatorSetResponse): _123.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _123.GetLatestValidatorSetResponseProtoMsg): _123.GetLatestValidatorSetResponse;
                    toProto(message: _123.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _123.GetLatestValidatorSetResponse): _123.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _123.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.Validator;
                    fromPartial(object: Partial<_123.Validator>): _123.Validator;
                    fromAmino(object: _123.ValidatorAmino): _123.Validator;
                    toAmino(message: _123.Validator): _123.ValidatorAmino;
                    fromAminoMsg(object: _123.ValidatorAminoMsg): _123.Validator;
                    toAminoMsg(message: _123.Validator): _123.ValidatorAminoMsg;
                    fromProtoMsg(message: _123.ValidatorProtoMsg): _123.Validator;
                    toProto(message: _123.Validator): Uint8Array;
                    toProtoMsg(message: _123.Validator): _123.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _123.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_123.GetBlockByHeightRequest>): _123.GetBlockByHeightRequest;
                    fromAmino(object: _123.GetBlockByHeightRequestAmino): _123.GetBlockByHeightRequest;
                    toAmino(message: _123.GetBlockByHeightRequest): _123.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _123.GetBlockByHeightRequestAminoMsg): _123.GetBlockByHeightRequest;
                    toAminoMsg(message: _123.GetBlockByHeightRequest): _123.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _123.GetBlockByHeightRequestProtoMsg): _123.GetBlockByHeightRequest;
                    toProto(message: _123.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _123.GetBlockByHeightRequest): _123.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _123.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_123.GetBlockByHeightResponse>): _123.GetBlockByHeightResponse;
                    fromAmino(object: _123.GetBlockByHeightResponseAmino): _123.GetBlockByHeightResponse;
                    toAmino(message: _123.GetBlockByHeightResponse): _123.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _123.GetBlockByHeightResponseAminoMsg): _123.GetBlockByHeightResponse;
                    toAminoMsg(message: _123.GetBlockByHeightResponse): _123.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _123.GetBlockByHeightResponseProtoMsg): _123.GetBlockByHeightResponse;
                    toProto(message: _123.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _123.GetBlockByHeightResponse): _123.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _123.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _123.GetLatestBlockRequest;
                    fromPartial(_: Partial<_123.GetLatestBlockRequest>): _123.GetLatestBlockRequest;
                    fromAmino(_: _123.GetLatestBlockRequestAmino): _123.GetLatestBlockRequest;
                    toAmino(_: _123.GetLatestBlockRequest): _123.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _123.GetLatestBlockRequestAminoMsg): _123.GetLatestBlockRequest;
                    toAminoMsg(message: _123.GetLatestBlockRequest): _123.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _123.GetLatestBlockRequestProtoMsg): _123.GetLatestBlockRequest;
                    toProto(message: _123.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _123.GetLatestBlockRequest): _123.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _123.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.GetLatestBlockResponse;
                    fromPartial(object: Partial<_123.GetLatestBlockResponse>): _123.GetLatestBlockResponse;
                    fromAmino(object: _123.GetLatestBlockResponseAmino): _123.GetLatestBlockResponse;
                    toAmino(message: _123.GetLatestBlockResponse): _123.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _123.GetLatestBlockResponseAminoMsg): _123.GetLatestBlockResponse;
                    toAminoMsg(message: _123.GetLatestBlockResponse): _123.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _123.GetLatestBlockResponseProtoMsg): _123.GetLatestBlockResponse;
                    toProto(message: _123.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _123.GetLatestBlockResponse): _123.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _123.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _123.GetSyncingRequest;
                    fromPartial(_: Partial<_123.GetSyncingRequest>): _123.GetSyncingRequest;
                    fromAmino(_: _123.GetSyncingRequestAmino): _123.GetSyncingRequest;
                    toAmino(_: _123.GetSyncingRequest): _123.GetSyncingRequestAmino;
                    fromAminoMsg(object: _123.GetSyncingRequestAminoMsg): _123.GetSyncingRequest;
                    toAminoMsg(message: _123.GetSyncingRequest): _123.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _123.GetSyncingRequestProtoMsg): _123.GetSyncingRequest;
                    toProto(message: _123.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _123.GetSyncingRequest): _123.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _123.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.GetSyncingResponse;
                    fromPartial(object: Partial<_123.GetSyncingResponse>): _123.GetSyncingResponse;
                    fromAmino(object: _123.GetSyncingResponseAmino): _123.GetSyncingResponse;
                    toAmino(message: _123.GetSyncingResponse): _123.GetSyncingResponseAmino;
                    fromAminoMsg(object: _123.GetSyncingResponseAminoMsg): _123.GetSyncingResponse;
                    toAminoMsg(message: _123.GetSyncingResponse): _123.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _123.GetSyncingResponseProtoMsg): _123.GetSyncingResponse;
                    toProto(message: _123.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _123.GetSyncingResponse): _123.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _123.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _123.GetNodeInfoRequest;
                    fromPartial(_: Partial<_123.GetNodeInfoRequest>): _123.GetNodeInfoRequest;
                    fromAmino(_: _123.GetNodeInfoRequestAmino): _123.GetNodeInfoRequest;
                    toAmino(_: _123.GetNodeInfoRequest): _123.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _123.GetNodeInfoRequestAminoMsg): _123.GetNodeInfoRequest;
                    toAminoMsg(message: _123.GetNodeInfoRequest): _123.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _123.GetNodeInfoRequestProtoMsg): _123.GetNodeInfoRequest;
                    toProto(message: _123.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _123.GetNodeInfoRequest): _123.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _123.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.GetNodeInfoResponse;
                    fromPartial(object: Partial<_123.GetNodeInfoResponse>): _123.GetNodeInfoResponse;
                    fromAmino(object: _123.GetNodeInfoResponseAmino): _123.GetNodeInfoResponse;
                    toAmino(message: _123.GetNodeInfoResponse): _123.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _123.GetNodeInfoResponseAminoMsg): _123.GetNodeInfoResponse;
                    toAminoMsg(message: _123.GetNodeInfoResponse): _123.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _123.GetNodeInfoResponseProtoMsg): _123.GetNodeInfoResponse;
                    toProto(message: _123.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _123.GetNodeInfoResponse): _123.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _123.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.VersionInfo;
                    fromPartial(object: Partial<_123.VersionInfo>): _123.VersionInfo;
                    fromAmino(object: _123.VersionInfoAmino): _123.VersionInfo;
                    toAmino(message: _123.VersionInfo): _123.VersionInfoAmino;
                    fromAminoMsg(object: _123.VersionInfoAminoMsg): _123.VersionInfo;
                    toAminoMsg(message: _123.VersionInfo): _123.VersionInfoAminoMsg;
                    fromProtoMsg(message: _123.VersionInfoProtoMsg): _123.VersionInfo;
                    toProto(message: _123.VersionInfo): Uint8Array;
                    toProtoMsg(message: _123.VersionInfo): _123.VersionInfoProtoMsg;
                };
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
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _123.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.ABCIQueryRequest;
                    fromPartial(object: Partial<_123.ABCIQueryRequest>): _123.ABCIQueryRequest;
                    fromAmino(object: _123.ABCIQueryRequestAmino): _123.ABCIQueryRequest;
                    toAmino(message: _123.ABCIQueryRequest): _123.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _123.ABCIQueryRequestAminoMsg): _123.ABCIQueryRequest;
                    toAminoMsg(message: _123.ABCIQueryRequest): _123.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _123.ABCIQueryRequestProtoMsg): _123.ABCIQueryRequest;
                    toProto(message: _123.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _123.ABCIQueryRequest): _123.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _123.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.ABCIQueryResponse;
                    fromPartial(object: Partial<_123.ABCIQueryResponse>): _123.ABCIQueryResponse;
                    fromAmino(object: _123.ABCIQueryResponseAmino): _123.ABCIQueryResponse;
                    toAmino(message: _123.ABCIQueryResponse): _123.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _123.ABCIQueryResponseAminoMsg): _123.ABCIQueryResponse;
                    toAminoMsg(message: _123.ABCIQueryResponse): _123.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _123.ABCIQueryResponseProtoMsg): _123.ABCIQueryResponse;
                    toProto(message: _123.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _123.ABCIQueryResponse): _123.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _123.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.ProofOp;
                    fromPartial(object: Partial<_123.ProofOp>): _123.ProofOp;
                    fromAmino(object: _123.ProofOpAmino): _123.ProofOp;
                    toAmino(message: _123.ProofOp): _123.ProofOpAmino;
                    fromAminoMsg(object: _123.ProofOpAminoMsg): _123.ProofOp;
                    toAminoMsg(message: _123.ProofOp): _123.ProofOpAminoMsg;
                    fromProtoMsg(message: _123.ProofOpProtoMsg): _123.ProofOp;
                    toProto(message: _123.ProofOp): Uint8Array;
                    toProtoMsg(message: _123.ProofOp): _123.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _123.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.ProofOps;
                    fromPartial(object: Partial<_123.ProofOps>): _123.ProofOps;
                    fromAmino(object: _123.ProofOpsAmino): _123.ProofOps;
                    toAmino(message: _123.ProofOps): _123.ProofOpsAmino;
                    fromAminoMsg(object: _123.ProofOpsAminoMsg): _123.ProofOps;
                    toAminoMsg(message: _123.ProofOps): _123.ProofOpsAminoMsg;
                    fromProtoMsg(message: _123.ProofOpsProtoMsg): _123.ProofOps;
                    toProto(message: _123.ProofOps): Uint8Array;
                    toProtoMsg(message: _123.ProofOps): _123.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _125.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.Coin;
                fromPartial(object: Partial<_125.Coin>): _125.Coin;
                fromAmino(object: _125.CoinAmino): _125.Coin;
                toAmino(message: _125.Coin): _125.CoinAmino;
                fromAminoMsg(object: _125.CoinAminoMsg): _125.Coin;
                toAminoMsg(message: _125.Coin): _125.CoinAminoMsg;
                fromProtoMsg(message: _125.CoinProtoMsg): _125.Coin;
                toProto(message: _125.Coin): Uint8Array;
                toProtoMsg(message: _125.Coin): _125.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _125.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.DecCoin;
                fromPartial(object: Partial<_125.DecCoin>): _125.DecCoin;
                fromAmino(object: _125.DecCoinAmino): _125.DecCoin;
                toAmino(message: _125.DecCoin): _125.DecCoinAmino;
                fromAminoMsg(object: _125.DecCoinAminoMsg): _125.DecCoin;
                toAminoMsg(message: _125.DecCoin): _125.DecCoinAminoMsg;
                fromProtoMsg(message: _125.DecCoinProtoMsg): _125.DecCoin;
                toProto(message: _125.DecCoin): Uint8Array;
                toProtoMsg(message: _125.DecCoin): _125.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _125.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.IntProto;
                fromPartial(object: Partial<_125.IntProto>): _125.IntProto;
                fromAmino(object: _125.IntProtoAmino): _125.IntProto;
                toAmino(message: _125.IntProto): _125.IntProtoAmino;
                fromAminoMsg(object: _125.IntProtoAminoMsg): _125.IntProto;
                toAminoMsg(message: _125.IntProto): _125.IntProtoAminoMsg;
                fromProtoMsg(message: _125.IntProtoProtoMsg): _125.IntProto;
                toProto(message: _125.IntProto): Uint8Array;
                toProtoMsg(message: _125.IntProto): _125.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _125.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.DecProto;
                fromPartial(object: Partial<_125.DecProto>): _125.DecProto;
                fromAmino(object: _125.DecProtoAmino): _125.DecProto;
                toAmino(message: _125.DecProto): _125.DecProtoAmino;
                fromAminoMsg(object: _125.DecProtoAminoMsg): _125.DecProto;
                toAminoMsg(message: _125.DecProto): _125.DecProtoAminoMsg;
                fromProtoMsg(message: _125.DecProtoProtoMsg): _125.DecProto;
                toProto(message: _125.DecProto): Uint8Array;
                toProtoMsg(message: _125.DecProto): _125.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
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
            GenesisOwners: {
                typeUrl: string;
                encode(message: _128.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.GenesisOwners;
                fromPartial(object: Partial<_128.GenesisOwners>): _128.GenesisOwners;
                fromAmino(object: _128.GenesisOwnersAmino): _128.GenesisOwners;
                toAmino(message: _128.GenesisOwners): _128.GenesisOwnersAmino;
                fromAminoMsg(object: _128.GenesisOwnersAminoMsg): _128.GenesisOwners;
                toAminoMsg(message: _128.GenesisOwners): _128.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _128.GenesisOwnersProtoMsg): _128.GenesisOwners;
                toProto(message: _128.GenesisOwners): Uint8Array;
                toProtoMsg(message: _128.GenesisOwners): _128.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _127.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Capability;
                fromPartial(object: Partial<_127.Capability>): _127.Capability;
                fromAmino(object: _127.CapabilityAmino): _127.Capability;
                toAmino(message: _127.Capability): _127.CapabilityAmino;
                fromAminoMsg(object: _127.CapabilityAminoMsg): _127.Capability;
                toAminoMsg(message: _127.Capability): _127.CapabilityAminoMsg;
                fromProtoMsg(message: _127.CapabilityProtoMsg): _127.Capability;
                toProto(message: _127.Capability): Uint8Array;
                toProtoMsg(message: _127.Capability): _127.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _127.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Owner;
                fromPartial(object: Partial<_127.Owner>): _127.Owner;
                fromAmino(object: _127.OwnerAmino): _127.Owner;
                toAmino(message: _127.Owner): _127.OwnerAmino;
                fromAminoMsg(object: _127.OwnerAminoMsg): _127.Owner;
                toAminoMsg(message: _127.Owner): _127.OwnerAminoMsg;
                fromProtoMsg(message: _127.OwnerProtoMsg): _127.Owner;
                toProto(message: _127.Owner): Uint8Array;
                toProtoMsg(message: _127.Owner): _127.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _127.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.CapabilityOwners;
                fromPartial(object: Partial<_127.CapabilityOwners>): _127.CapabilityOwners;
                fromAmino(object: _127.CapabilityOwnersAmino): _127.CapabilityOwners;
                toAmino(message: _127.CapabilityOwners): _127.CapabilityOwnersAmino;
                fromAminoMsg(object: _127.CapabilityOwnersAminoMsg): _127.CapabilityOwners;
                toAminoMsg(message: _127.CapabilityOwners): _127.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _127.CapabilityOwnersProtoMsg): _127.CapabilityOwners;
                toProto(message: _127.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _127.CapabilityOwners): _127.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _129.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.Module;
                    fromPartial(object: Partial<_129.Module>): _129.Module;
                    fromAmino(object: _129.ModuleAmino): _129.Module;
                    toAmino(message: _129.Module): _129.ModuleAmino;
                    fromAminoMsg(object: _129.ModuleAminoMsg): _129.Module;
                    toAminoMsg(message: _129.Module): _129.ModuleAminoMsg;
                    fromProtoMsg(message: _129.ModuleProtoMsg): _129.Module;
                    toProto(message: _129.Module): Uint8Array;
                    toProtoMsg(message: _129.Module): _129.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _410.MsgClientImpl;
            QueryClientImpl: typeof _392.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _371.LCDQueryClient;
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
                "/cosmos.consensus.v1.MsgUpdateParams": {
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
        };
    }
    namespace crisis {
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
            MsgClientImpl: typeof _411.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _134.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _134.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _134.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _134.MsgVerifyInvariant;
                    };
                    updateParams(value: _134.MsgUpdateParams): {
                        typeUrl: string;
                        value: _134.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _134.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _134.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _134.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _134.MsgVerifyInvariant;
                    };
                    updateParams(value: _134.MsgUpdateParams): {
                        typeUrl: string;
                        value: _134.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _134.MsgVerifyInvariant) => _134.MsgVerifyInvariantAmino;
                    fromAmino: (object: _134.MsgVerifyInvariantAmino) => _134.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _134.MsgUpdateParams) => _134.MsgUpdateParamsAmino;
                    fromAmino: (object: _134.MsgUpdateParamsAmino) => _134.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _134.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgVerifyInvariant;
                fromPartial(object: Partial<_134.MsgVerifyInvariant>): _134.MsgVerifyInvariant;
                fromAmino(object: _134.MsgVerifyInvariantAmino): _134.MsgVerifyInvariant;
                toAmino(message: _134.MsgVerifyInvariant): _134.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _134.MsgVerifyInvariantAminoMsg): _134.MsgVerifyInvariant;
                toAminoMsg(message: _134.MsgVerifyInvariant): _134.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _134.MsgVerifyInvariantProtoMsg): _134.MsgVerifyInvariant;
                toProto(message: _134.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _134.MsgVerifyInvariant): _134.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _134.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_134.MsgVerifyInvariantResponse>): _134.MsgVerifyInvariantResponse;
                fromAmino(_: _134.MsgVerifyInvariantResponseAmino): _134.MsgVerifyInvariantResponse;
                toAmino(_: _134.MsgVerifyInvariantResponse): _134.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _134.MsgVerifyInvariantResponseAminoMsg): _134.MsgVerifyInvariantResponse;
                toAminoMsg(message: _134.MsgVerifyInvariantResponse): _134.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _134.MsgVerifyInvariantResponseProtoMsg): _134.MsgVerifyInvariantResponse;
                toProto(message: _134.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _134.MsgVerifyInvariantResponse): _134.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _134.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgUpdateParams;
                fromPartial(object: Partial<_134.MsgUpdateParams>): _134.MsgUpdateParams;
                fromAmino(object: _134.MsgUpdateParamsAmino): _134.MsgUpdateParams;
                toAmino(message: _134.MsgUpdateParams): _134.MsgUpdateParamsAmino;
                fromAminoMsg(object: _134.MsgUpdateParamsAminoMsg): _134.MsgUpdateParams;
                toAminoMsg(message: _134.MsgUpdateParams): _134.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _134.MsgUpdateParamsProtoMsg): _134.MsgUpdateParams;
                toProto(message: _134.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateParams): _134.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _134.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_134.MsgUpdateParamsResponse>): _134.MsgUpdateParamsResponse;
                fromAmino(_: _134.MsgUpdateParamsResponseAmino): _134.MsgUpdateParamsResponse;
                toAmino(_: _134.MsgUpdateParamsResponse): _134.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _134.MsgUpdateParamsResponseAminoMsg): _134.MsgUpdateParamsResponse;
                toAminoMsg(message: _134.MsgUpdateParamsResponse): _134.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _134.MsgUpdateParamsResponseProtoMsg): _134.MsgUpdateParamsResponse;
                toProto(message: _134.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateParamsResponse): _134.MsgUpdateParamsResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _135.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.PubKey;
                fromPartial(object: Partial<_135.PubKey>): _135.PubKey;
                fromAmino(object: _135.PubKeyAmino): _135.PubKey;
                toAmino(message: _135.PubKey): _135.PubKeyAmino;
                fromAminoMsg(object: _135.PubKeyAminoMsg): _135.PubKey;
                toAminoMsg(message: _135.PubKey): _135.PubKeyAminoMsg;
                fromProtoMsg(message: _135.PubKeyProtoMsg): _135.PubKey;
                toProto(message: _135.PubKey): Uint8Array;
                toProtoMsg(message: _135.PubKey): _135.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _135.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.PrivKey;
                fromPartial(object: Partial<_135.PrivKey>): _135.PrivKey;
                fromAmino(object: _135.PrivKeyAmino): _135.PrivKey;
                toAmino(message: _135.PrivKey): _135.PrivKeyAmino;
                fromAminoMsg(object: _135.PrivKeyAminoMsg): _135.PrivKey;
                toAminoMsg(message: _135.PrivKey): _135.PrivKeyAminoMsg;
                fromProtoMsg(message: _135.PrivKeyProtoMsg): _135.PrivKey;
                toProto(message: _135.PrivKey): Uint8Array;
                toProtoMsg(message: _135.PrivKey): _135.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _136.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _136.BIP44Params;
                    fromPartial(object: Partial<_136.BIP44Params>): _136.BIP44Params;
                    fromAmino(object: _136.BIP44ParamsAmino): _136.BIP44Params;
                    toAmino(message: _136.BIP44Params): _136.BIP44ParamsAmino;
                    fromAminoMsg(object: _136.BIP44ParamsAminoMsg): _136.BIP44Params;
                    toAminoMsg(message: _136.BIP44Params): _136.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _136.BIP44ParamsProtoMsg): _136.BIP44Params;
                    toProto(message: _136.BIP44Params): Uint8Array;
                    toProtoMsg(message: _136.BIP44Params): _136.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _137.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _137.Record;
                    fromPartial(object: Partial<_137.Record>): _137.Record;
                    fromAmino(object: _137.RecordAmino): _137.Record;
                    toAmino(message: _137.Record): _137.RecordAmino;
                    fromAminoMsg(object: _137.RecordAminoMsg): _137.Record;
                    toAminoMsg(message: _137.Record): _137.RecordAminoMsg;
                    fromProtoMsg(message: _137.RecordProtoMsg): _137.Record;
                    toProto(message: _137.Record): Uint8Array;
                    toProtoMsg(message: _137.Record): _137.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _137.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _137.Record_Local;
                    fromPartial(object: Partial<_137.Record_Local>): _137.Record_Local;
                    fromAmino(object: _137.Record_LocalAmino): _137.Record_Local;
                    toAmino(message: _137.Record_Local): _137.Record_LocalAmino;
                    fromAminoMsg(object: _137.Record_LocalAminoMsg): _137.Record_Local;
                    toAminoMsg(message: _137.Record_Local): _137.Record_LocalAminoMsg;
                    fromProtoMsg(message: _137.Record_LocalProtoMsg): _137.Record_Local;
                    toProto(message: _137.Record_Local): Uint8Array;
                    toProtoMsg(message: _137.Record_Local): _137.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _137.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _137.Record_Ledger;
                    fromPartial(object: Partial<_137.Record_Ledger>): _137.Record_Ledger;
                    fromAmino(object: _137.Record_LedgerAmino): _137.Record_Ledger;
                    toAmino(message: _137.Record_Ledger): _137.Record_LedgerAmino;
                    fromAminoMsg(object: _137.Record_LedgerAminoMsg): _137.Record_Ledger;
                    toAminoMsg(message: _137.Record_Ledger): _137.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _137.Record_LedgerProtoMsg): _137.Record_Ledger;
                    toProto(message: _137.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _137.Record_Ledger): _137.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _137.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _137.Record_Multi;
                    fromPartial(_: Partial<_137.Record_Multi>): _137.Record_Multi;
                    fromAmino(_: _137.Record_MultiAmino): _137.Record_Multi;
                    toAmino(_: _137.Record_Multi): _137.Record_MultiAmino;
                    fromAminoMsg(object: _137.Record_MultiAminoMsg): _137.Record_Multi;
                    toAminoMsg(message: _137.Record_Multi): _137.Record_MultiAminoMsg;
                    fromProtoMsg(message: _137.Record_MultiProtoMsg): _137.Record_Multi;
                    toProto(message: _137.Record_Multi): Uint8Array;
                    toProtoMsg(message: _137.Record_Multi): _137.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _137.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _137.Record_Offline;
                    fromPartial(_: Partial<_137.Record_Offline>): _137.Record_Offline;
                    fromAmino(_: _137.Record_OfflineAmino): _137.Record_Offline;
                    toAmino(_: _137.Record_Offline): _137.Record_OfflineAmino;
                    fromAminoMsg(object: _137.Record_OfflineAminoMsg): _137.Record_Offline;
                    toAminoMsg(message: _137.Record_Offline): _137.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _137.Record_OfflineProtoMsg): _137.Record_Offline;
                    toProto(message: _137.Record_Offline): Uint8Array;
                    toProtoMsg(message: _137.Record_Offline): _137.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _138.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.LegacyAminoPubKey;
                fromPartial(object: Partial<_138.LegacyAminoPubKey>): _138.LegacyAminoPubKey;
                fromAmino(object: _138.LegacyAminoPubKeyAmino): _138.LegacyAminoPubKey;
                toAmino(message: _138.LegacyAminoPubKey): _138.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _138.LegacyAminoPubKeyAminoMsg): _138.LegacyAminoPubKey;
                toAminoMsg(message: _138.LegacyAminoPubKey): _138.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _138.LegacyAminoPubKeyProtoMsg): _138.LegacyAminoPubKey;
                toProto(message: _138.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _138.LegacyAminoPubKey): _138.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _139.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.PubKey;
                fromPartial(object: Partial<_139.PubKey>): _139.PubKey;
                fromAmino(object: _139.PubKeyAmino): _139.PubKey;
                toAmino(message: _139.PubKey): _139.PubKeyAmino;
                fromAminoMsg(object: _139.PubKeyAminoMsg): _139.PubKey;
                toAminoMsg(message: _139.PubKey): _139.PubKeyAminoMsg;
                fromProtoMsg(message: _139.PubKeyProtoMsg): _139.PubKey;
                toProto(message: _139.PubKey): Uint8Array;
                toProtoMsg(message: _139.PubKey): _139.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _139.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.PrivKey;
                fromPartial(object: Partial<_139.PrivKey>): _139.PrivKey;
                fromAmino(object: _139.PrivKeyAmino): _139.PrivKey;
                toAmino(message: _139.PrivKey): _139.PrivKeyAmino;
                fromAminoMsg(object: _139.PrivKeyAminoMsg): _139.PrivKey;
                toAminoMsg(message: _139.PrivKey): _139.PrivKeyAminoMsg;
                fromProtoMsg(message: _139.PrivKeyProtoMsg): _139.PrivKey;
                toProto(message: _139.PrivKey): Uint8Array;
                toProtoMsg(message: _139.PrivKey): _139.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _140.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.PubKey;
                fromPartial(object: Partial<_140.PubKey>): _140.PubKey;
                fromAmino(object: _140.PubKeyAmino): _140.PubKey;
                toAmino(message: _140.PubKey): _140.PubKeyAmino;
                fromAminoMsg(object: _140.PubKeyAminoMsg): _140.PubKey;
                toAminoMsg(message: _140.PubKey): _140.PubKeyAminoMsg;
                fromProtoMsg(message: _140.PubKeyProtoMsg): _140.PubKey;
                toProto(message: _140.PubKey): Uint8Array;
                toProtoMsg(message: _140.PubKey): _140.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _140.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.PrivKey;
                fromPartial(object: Partial<_140.PrivKey>): _140.PrivKey;
                fromAmino(object: _140.PrivKeyAmino): _140.PrivKey;
                toAmino(message: _140.PrivKey): _140.PrivKeyAmino;
                fromAminoMsg(object: _140.PrivKeyAminoMsg): _140.PrivKey;
                toAminoMsg(message: _140.PrivKey): _140.PrivKeyAminoMsg;
                fromProtoMsg(message: _140.PrivKeyProtoMsg): _140.PrivKey;
                toProto(message: _140.PrivKey): Uint8Array;
                toProtoMsg(message: _140.PrivKey): _140.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
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
            MsgClientImpl: typeof _412.MsgClientImpl;
            QueryClientImpl: typeof _393.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                validatorDistributionInfo(request: _144.QueryValidatorDistributionInfoRequest): Promise<_144.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _144.QueryValidatorOutstandingRewardsRequest): Promise<_144.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _144.QueryValidatorCommissionRequest): Promise<_144.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _144.QueryValidatorSlashesRequest): Promise<_144.QueryValidatorSlashesResponse>;
                delegationRewards(request: _144.QueryDelegationRewardsRequest): Promise<_144.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _144.QueryDelegationTotalRewardsRequest): Promise<_144.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _144.QueryDelegatorValidatorsRequest): Promise<_144.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _144.QueryDelegatorWithdrawAddressRequest): Promise<_144.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _144.QueryCommunityPoolRequest): Promise<_144.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _372.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _145.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _145.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _145.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _145.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _145.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _145.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _145.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _145.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _145.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _145.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _145.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _145.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _145.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _145.MsgFundCommunityPool;
                    };
                    updateParams(value: _145.MsgUpdateParams): {
                        typeUrl: string;
                        value: _145.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _145.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _145.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _145.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _145.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _145.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _145.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _145.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _145.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _145.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _145.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _145.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _145.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _145.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _145.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _145.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _145.MsgFundCommunityPool;
                    };
                    updateParams(value: _145.MsgUpdateParams): {
                        typeUrl: string;
                        value: _145.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _145.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _145.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _145.MsgSetWithdrawAddress) => _145.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _145.MsgSetWithdrawAddressAmino) => _145.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _145.MsgWithdrawDelegatorReward) => _145.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _145.MsgWithdrawDelegatorRewardAmino) => _145.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _145.MsgWithdrawValidatorCommission) => _145.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _145.MsgWithdrawValidatorCommissionAmino) => _145.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _145.MsgFundCommunityPool) => _145.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _145.MsgFundCommunityPoolAmino) => _145.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _145.MsgUpdateParams) => _145.MsgUpdateParamsAmino;
                    fromAmino: (object: _145.MsgUpdateParamsAmino) => _145.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _145.MsgCommunityPoolSpend) => _145.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _145.MsgCommunityPoolSpendAmino) => _145.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _145.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_145.MsgSetWithdrawAddress>): _145.MsgSetWithdrawAddress;
                fromAmino(object: _145.MsgSetWithdrawAddressAmino): _145.MsgSetWithdrawAddress;
                toAmino(message: _145.MsgSetWithdrawAddress): _145.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _145.MsgSetWithdrawAddressAminoMsg): _145.MsgSetWithdrawAddress;
                toAminoMsg(message: _145.MsgSetWithdrawAddress): _145.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _145.MsgSetWithdrawAddressProtoMsg): _145.MsgSetWithdrawAddress;
                toProto(message: _145.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _145.MsgSetWithdrawAddress): _145.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _145.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _145.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_145.MsgSetWithdrawAddressResponse>): _145.MsgSetWithdrawAddressResponse;
                fromAmino(_: _145.MsgSetWithdrawAddressResponseAmino): _145.MsgSetWithdrawAddressResponse;
                toAmino(_: _145.MsgSetWithdrawAddressResponse): _145.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _145.MsgSetWithdrawAddressResponseAminoMsg): _145.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _145.MsgSetWithdrawAddressResponse): _145.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _145.MsgSetWithdrawAddressResponseProtoMsg): _145.MsgSetWithdrawAddressResponse;
                toProto(message: _145.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _145.MsgSetWithdrawAddressResponse): _145.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _145.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_145.MsgWithdrawDelegatorReward>): _145.MsgWithdrawDelegatorReward;
                fromAmino(object: _145.MsgWithdrawDelegatorRewardAmino): _145.MsgWithdrawDelegatorReward;
                toAmino(message: _145.MsgWithdrawDelegatorReward): _145.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _145.MsgWithdrawDelegatorRewardAminoMsg): _145.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _145.MsgWithdrawDelegatorReward): _145.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _145.MsgWithdrawDelegatorRewardProtoMsg): _145.MsgWithdrawDelegatorReward;
                toProto(message: _145.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawDelegatorReward): _145.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _145.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_145.MsgWithdrawDelegatorRewardResponse>): _145.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _145.MsgWithdrawDelegatorRewardResponseAmino): _145.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _145.MsgWithdrawDelegatorRewardResponse): _145.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _145.MsgWithdrawDelegatorRewardResponseAminoMsg): _145.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _145.MsgWithdrawDelegatorRewardResponse): _145.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _145.MsgWithdrawDelegatorRewardResponseProtoMsg): _145.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _145.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawDelegatorRewardResponse): _145.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _145.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_145.MsgWithdrawValidatorCommission>): _145.MsgWithdrawValidatorCommission;
                fromAmino(object: _145.MsgWithdrawValidatorCommissionAmino): _145.MsgWithdrawValidatorCommission;
                toAmino(message: _145.MsgWithdrawValidatorCommission): _145.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _145.MsgWithdrawValidatorCommissionAminoMsg): _145.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _145.MsgWithdrawValidatorCommission): _145.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _145.MsgWithdrawValidatorCommissionProtoMsg): _145.MsgWithdrawValidatorCommission;
                toProto(message: _145.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawValidatorCommission): _145.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _145.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_145.MsgWithdrawValidatorCommissionResponse>): _145.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _145.MsgWithdrawValidatorCommissionResponseAmino): _145.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _145.MsgWithdrawValidatorCommissionResponse): _145.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _145.MsgWithdrawValidatorCommissionResponseAminoMsg): _145.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _145.MsgWithdrawValidatorCommissionResponse): _145.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _145.MsgWithdrawValidatorCommissionResponseProtoMsg): _145.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _145.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _145.MsgWithdrawValidatorCommissionResponse): _145.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _145.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgFundCommunityPool;
                fromPartial(object: Partial<_145.MsgFundCommunityPool>): _145.MsgFundCommunityPool;
                fromAmino(object: _145.MsgFundCommunityPoolAmino): _145.MsgFundCommunityPool;
                toAmino(message: _145.MsgFundCommunityPool): _145.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _145.MsgFundCommunityPoolAminoMsg): _145.MsgFundCommunityPool;
                toAminoMsg(message: _145.MsgFundCommunityPool): _145.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _145.MsgFundCommunityPoolProtoMsg): _145.MsgFundCommunityPool;
                toProto(message: _145.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _145.MsgFundCommunityPool): _145.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _145.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _145.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_145.MsgFundCommunityPoolResponse>): _145.MsgFundCommunityPoolResponse;
                fromAmino(_: _145.MsgFundCommunityPoolResponseAmino): _145.MsgFundCommunityPoolResponse;
                toAmino(_: _145.MsgFundCommunityPoolResponse): _145.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _145.MsgFundCommunityPoolResponseAminoMsg): _145.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _145.MsgFundCommunityPoolResponse): _145.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _145.MsgFundCommunityPoolResponseProtoMsg): _145.MsgFundCommunityPoolResponse;
                toProto(message: _145.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _145.MsgFundCommunityPoolResponse): _145.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _145.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgUpdateParams;
                fromPartial(object: Partial<_145.MsgUpdateParams>): _145.MsgUpdateParams;
                fromAmino(object: _145.MsgUpdateParamsAmino): _145.MsgUpdateParams;
                toAmino(message: _145.MsgUpdateParams): _145.MsgUpdateParamsAmino;
                fromAminoMsg(object: _145.MsgUpdateParamsAminoMsg): _145.MsgUpdateParams;
                toAminoMsg(message: _145.MsgUpdateParams): _145.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _145.MsgUpdateParamsProtoMsg): _145.MsgUpdateParams;
                toProto(message: _145.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _145.MsgUpdateParams): _145.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _145.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _145.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_145.MsgUpdateParamsResponse>): _145.MsgUpdateParamsResponse;
                fromAmino(_: _145.MsgUpdateParamsResponseAmino): _145.MsgUpdateParamsResponse;
                toAmino(_: _145.MsgUpdateParamsResponse): _145.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _145.MsgUpdateParamsResponseAminoMsg): _145.MsgUpdateParamsResponse;
                toAminoMsg(message: _145.MsgUpdateParamsResponse): _145.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _145.MsgUpdateParamsResponseProtoMsg): _145.MsgUpdateParamsResponse;
                toProto(message: _145.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _145.MsgUpdateParamsResponse): _145.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _145.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_145.MsgCommunityPoolSpend>): _145.MsgCommunityPoolSpend;
                fromAmino(object: _145.MsgCommunityPoolSpendAmino): _145.MsgCommunityPoolSpend;
                toAmino(message: _145.MsgCommunityPoolSpend): _145.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _145.MsgCommunityPoolSpendAminoMsg): _145.MsgCommunityPoolSpend;
                toAminoMsg(message: _145.MsgCommunityPoolSpend): _145.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _145.MsgCommunityPoolSpendProtoMsg): _145.MsgCommunityPoolSpend;
                toProto(message: _145.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _145.MsgCommunityPoolSpend): _145.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _145.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _145.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_145.MsgCommunityPoolSpendResponse>): _145.MsgCommunityPoolSpendResponse;
                fromAmino(_: _145.MsgCommunityPoolSpendResponseAmino): _145.MsgCommunityPoolSpendResponse;
                toAmino(_: _145.MsgCommunityPoolSpendResponse): _145.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _145.MsgCommunityPoolSpendResponseAminoMsg): _145.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _145.MsgCommunityPoolSpendResponse): _145.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _145.MsgCommunityPoolSpendResponseProtoMsg): _145.MsgCommunityPoolSpendResponse;
                toProto(message: _145.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _145.MsgCommunityPoolSpendResponse): _145.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _144.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.QueryParamsRequest;
                fromPartial(_: Partial<_144.QueryParamsRequest>): _144.QueryParamsRequest;
                fromAmino(_: _144.QueryParamsRequestAmino): _144.QueryParamsRequest;
                toAmino(_: _144.QueryParamsRequest): _144.QueryParamsRequestAmino;
                fromAminoMsg(object: _144.QueryParamsRequestAminoMsg): _144.QueryParamsRequest;
                toAminoMsg(message: _144.QueryParamsRequest): _144.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryParamsRequestProtoMsg): _144.QueryParamsRequest;
                toProto(message: _144.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryParamsRequest): _144.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _144.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryParamsResponse;
                fromPartial(object: Partial<_144.QueryParamsResponse>): _144.QueryParamsResponse;
                fromAmino(object: _144.QueryParamsResponseAmino): _144.QueryParamsResponse;
                toAmino(message: _144.QueryParamsResponse): _144.QueryParamsResponseAmino;
                fromAminoMsg(object: _144.QueryParamsResponseAminoMsg): _144.QueryParamsResponse;
                toAminoMsg(message: _144.QueryParamsResponse): _144.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryParamsResponseProtoMsg): _144.QueryParamsResponse;
                toProto(message: _144.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryParamsResponse): _144.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _144.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_144.QueryValidatorDistributionInfoRequest>): _144.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _144.QueryValidatorDistributionInfoRequestAmino): _144.QueryValidatorDistributionInfoRequest;
                toAmino(message: _144.QueryValidatorDistributionInfoRequest): _144.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _144.QueryValidatorDistributionInfoRequestAminoMsg): _144.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _144.QueryValidatorDistributionInfoRequest): _144.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorDistributionInfoRequestProtoMsg): _144.QueryValidatorDistributionInfoRequest;
                toProto(message: _144.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorDistributionInfoRequest): _144.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _144.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_144.QueryValidatorDistributionInfoResponse>): _144.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _144.QueryValidatorDistributionInfoResponseAmino): _144.QueryValidatorDistributionInfoResponse;
                toAmino(message: _144.QueryValidatorDistributionInfoResponse): _144.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _144.QueryValidatorDistributionInfoResponseAminoMsg): _144.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _144.QueryValidatorDistributionInfoResponse): _144.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorDistributionInfoResponseProtoMsg): _144.QueryValidatorDistributionInfoResponse;
                toProto(message: _144.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorDistributionInfoResponse): _144.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _144.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_144.QueryValidatorOutstandingRewardsRequest>): _144.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _144.QueryValidatorOutstandingRewardsRequestAmino): _144.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _144.QueryValidatorOutstandingRewardsRequest): _144.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _144.QueryValidatorOutstandingRewardsRequestAminoMsg): _144.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _144.QueryValidatorOutstandingRewardsRequest): _144.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorOutstandingRewardsRequestProtoMsg): _144.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _144.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorOutstandingRewardsRequest): _144.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _144.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_144.QueryValidatorOutstandingRewardsResponse>): _144.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _144.QueryValidatorOutstandingRewardsResponseAmino): _144.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _144.QueryValidatorOutstandingRewardsResponse): _144.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _144.QueryValidatorOutstandingRewardsResponseAminoMsg): _144.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _144.QueryValidatorOutstandingRewardsResponse): _144.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorOutstandingRewardsResponseProtoMsg): _144.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _144.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorOutstandingRewardsResponse): _144.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _144.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_144.QueryValidatorCommissionRequest>): _144.QueryValidatorCommissionRequest;
                fromAmino(object: _144.QueryValidatorCommissionRequestAmino): _144.QueryValidatorCommissionRequest;
                toAmino(message: _144.QueryValidatorCommissionRequest): _144.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _144.QueryValidatorCommissionRequestAminoMsg): _144.QueryValidatorCommissionRequest;
                toAminoMsg(message: _144.QueryValidatorCommissionRequest): _144.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorCommissionRequestProtoMsg): _144.QueryValidatorCommissionRequest;
                toProto(message: _144.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorCommissionRequest): _144.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _144.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_144.QueryValidatorCommissionResponse>): _144.QueryValidatorCommissionResponse;
                fromAmino(object: _144.QueryValidatorCommissionResponseAmino): _144.QueryValidatorCommissionResponse;
                toAmino(message: _144.QueryValidatorCommissionResponse): _144.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _144.QueryValidatorCommissionResponseAminoMsg): _144.QueryValidatorCommissionResponse;
                toAminoMsg(message: _144.QueryValidatorCommissionResponse): _144.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorCommissionResponseProtoMsg): _144.QueryValidatorCommissionResponse;
                toProto(message: _144.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorCommissionResponse): _144.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _144.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_144.QueryValidatorSlashesRequest>): _144.QueryValidatorSlashesRequest;
                fromAmino(object: _144.QueryValidatorSlashesRequestAmino): _144.QueryValidatorSlashesRequest;
                toAmino(message: _144.QueryValidatorSlashesRequest): _144.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _144.QueryValidatorSlashesRequestAminoMsg): _144.QueryValidatorSlashesRequest;
                toAminoMsg(message: _144.QueryValidatorSlashesRequest): _144.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorSlashesRequestProtoMsg): _144.QueryValidatorSlashesRequest;
                toProto(message: _144.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorSlashesRequest): _144.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _144.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_144.QueryValidatorSlashesResponse>): _144.QueryValidatorSlashesResponse;
                fromAmino(object: _144.QueryValidatorSlashesResponseAmino): _144.QueryValidatorSlashesResponse;
                toAmino(message: _144.QueryValidatorSlashesResponse): _144.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _144.QueryValidatorSlashesResponseAminoMsg): _144.QueryValidatorSlashesResponse;
                toAminoMsg(message: _144.QueryValidatorSlashesResponse): _144.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _144.QueryValidatorSlashesResponseProtoMsg): _144.QueryValidatorSlashesResponse;
                toProto(message: _144.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _144.QueryValidatorSlashesResponse): _144.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _144.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_144.QueryDelegationRewardsRequest>): _144.QueryDelegationRewardsRequest;
                fromAmino(object: _144.QueryDelegationRewardsRequestAmino): _144.QueryDelegationRewardsRequest;
                toAmino(message: _144.QueryDelegationRewardsRequest): _144.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _144.QueryDelegationRewardsRequestAminoMsg): _144.QueryDelegationRewardsRequest;
                toAminoMsg(message: _144.QueryDelegationRewardsRequest): _144.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryDelegationRewardsRequestProtoMsg): _144.QueryDelegationRewardsRequest;
                toProto(message: _144.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryDelegationRewardsRequest): _144.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _144.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_144.QueryDelegationRewardsResponse>): _144.QueryDelegationRewardsResponse;
                fromAmino(object: _144.QueryDelegationRewardsResponseAmino): _144.QueryDelegationRewardsResponse;
                toAmino(message: _144.QueryDelegationRewardsResponse): _144.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _144.QueryDelegationRewardsResponseAminoMsg): _144.QueryDelegationRewardsResponse;
                toAminoMsg(message: _144.QueryDelegationRewardsResponse): _144.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryDelegationRewardsResponseProtoMsg): _144.QueryDelegationRewardsResponse;
                toProto(message: _144.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryDelegationRewardsResponse): _144.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _144.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_144.QueryDelegationTotalRewardsRequest>): _144.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _144.QueryDelegationTotalRewardsRequestAmino): _144.QueryDelegationTotalRewardsRequest;
                toAmino(message: _144.QueryDelegationTotalRewardsRequest): _144.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _144.QueryDelegationTotalRewardsRequestAminoMsg): _144.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _144.QueryDelegationTotalRewardsRequest): _144.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryDelegationTotalRewardsRequestProtoMsg): _144.QueryDelegationTotalRewardsRequest;
                toProto(message: _144.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryDelegationTotalRewardsRequest): _144.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _144.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_144.QueryDelegationTotalRewardsResponse>): _144.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _144.QueryDelegationTotalRewardsResponseAmino): _144.QueryDelegationTotalRewardsResponse;
                toAmino(message: _144.QueryDelegationTotalRewardsResponse): _144.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _144.QueryDelegationTotalRewardsResponseAminoMsg): _144.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _144.QueryDelegationTotalRewardsResponse): _144.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryDelegationTotalRewardsResponseProtoMsg): _144.QueryDelegationTotalRewardsResponse;
                toProto(message: _144.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryDelegationTotalRewardsResponse): _144.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _144.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_144.QueryDelegatorValidatorsRequest>): _144.QueryDelegatorValidatorsRequest;
                fromAmino(object: _144.QueryDelegatorValidatorsRequestAmino): _144.QueryDelegatorValidatorsRequest;
                toAmino(message: _144.QueryDelegatorValidatorsRequest): _144.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _144.QueryDelegatorValidatorsRequestAminoMsg): _144.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _144.QueryDelegatorValidatorsRequest): _144.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryDelegatorValidatorsRequestProtoMsg): _144.QueryDelegatorValidatorsRequest;
                toProto(message: _144.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryDelegatorValidatorsRequest): _144.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _144.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_144.QueryDelegatorValidatorsResponse>): _144.QueryDelegatorValidatorsResponse;
                fromAmino(object: _144.QueryDelegatorValidatorsResponseAmino): _144.QueryDelegatorValidatorsResponse;
                toAmino(message: _144.QueryDelegatorValidatorsResponse): _144.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _144.QueryDelegatorValidatorsResponseAminoMsg): _144.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _144.QueryDelegatorValidatorsResponse): _144.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryDelegatorValidatorsResponseProtoMsg): _144.QueryDelegatorValidatorsResponse;
                toProto(message: _144.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryDelegatorValidatorsResponse): _144.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _144.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_144.QueryDelegatorWithdrawAddressRequest>): _144.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _144.QueryDelegatorWithdrawAddressRequestAmino): _144.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _144.QueryDelegatorWithdrawAddressRequest): _144.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _144.QueryDelegatorWithdrawAddressRequestAminoMsg): _144.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _144.QueryDelegatorWithdrawAddressRequest): _144.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _144.QueryDelegatorWithdrawAddressRequestProtoMsg): _144.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _144.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _144.QueryDelegatorWithdrawAddressRequest): _144.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _144.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_144.QueryDelegatorWithdrawAddressResponse>): _144.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _144.QueryDelegatorWithdrawAddressResponseAmino): _144.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _144.QueryDelegatorWithdrawAddressResponse): _144.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _144.QueryDelegatorWithdrawAddressResponseAminoMsg): _144.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _144.QueryDelegatorWithdrawAddressResponse): _144.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _144.QueryDelegatorWithdrawAddressResponseProtoMsg): _144.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _144.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _144.QueryDelegatorWithdrawAddressResponse): _144.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _144.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_144.QueryCommunityPoolRequest>): _144.QueryCommunityPoolRequest;
                fromAmino(_: _144.QueryCommunityPoolRequestAmino): _144.QueryCommunityPoolRequest;
                toAmino(_: _144.QueryCommunityPoolRequest): _144.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _144.QueryCommunityPoolRequestAminoMsg): _144.QueryCommunityPoolRequest;
                toAminoMsg(message: _144.QueryCommunityPoolRequest): _144.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _144.QueryCommunityPoolRequestProtoMsg): _144.QueryCommunityPoolRequest;
                toProto(message: _144.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _144.QueryCommunityPoolRequest): _144.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _144.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_144.QueryCommunityPoolResponse>): _144.QueryCommunityPoolResponse;
                fromAmino(object: _144.QueryCommunityPoolResponseAmino): _144.QueryCommunityPoolResponse;
                toAmino(message: _144.QueryCommunityPoolResponse): _144.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _144.QueryCommunityPoolResponseAminoMsg): _144.QueryCommunityPoolResponse;
                toAminoMsg(message: _144.QueryCommunityPoolResponse): _144.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _144.QueryCommunityPoolResponseProtoMsg): _144.QueryCommunityPoolResponse;
                toProto(message: _144.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _144.QueryCommunityPoolResponse): _144.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _143.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_143.DelegatorWithdrawInfo>): _143.DelegatorWithdrawInfo;
                fromAmino(object: _143.DelegatorWithdrawInfoAmino): _143.DelegatorWithdrawInfo;
                toAmino(message: _143.DelegatorWithdrawInfo): _143.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _143.DelegatorWithdrawInfoAminoMsg): _143.DelegatorWithdrawInfo;
                toAminoMsg(message: _143.DelegatorWithdrawInfo): _143.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _143.DelegatorWithdrawInfoProtoMsg): _143.DelegatorWithdrawInfo;
                toProto(message: _143.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _143.DelegatorWithdrawInfo): _143.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _143.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_143.ValidatorOutstandingRewardsRecord>): _143.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _143.ValidatorOutstandingRewardsRecordAmino): _143.ValidatorOutstandingRewardsRecord;
                toAmino(message: _143.ValidatorOutstandingRewardsRecord): _143.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _143.ValidatorOutstandingRewardsRecordAminoMsg): _143.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _143.ValidatorOutstandingRewardsRecord): _143.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _143.ValidatorOutstandingRewardsRecordProtoMsg): _143.ValidatorOutstandingRewardsRecord;
                toProto(message: _143.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _143.ValidatorOutstandingRewardsRecord): _143.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _143.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_143.ValidatorAccumulatedCommissionRecord>): _143.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _143.ValidatorAccumulatedCommissionRecordAmino): _143.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _143.ValidatorAccumulatedCommissionRecord): _143.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _143.ValidatorAccumulatedCommissionRecordAminoMsg): _143.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _143.ValidatorAccumulatedCommissionRecord): _143.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _143.ValidatorAccumulatedCommissionRecordProtoMsg): _143.ValidatorAccumulatedCommissionRecord;
                toProto(message: _143.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _143.ValidatorAccumulatedCommissionRecord): _143.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _143.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_143.ValidatorHistoricalRewardsRecord>): _143.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _143.ValidatorHistoricalRewardsRecordAmino): _143.ValidatorHistoricalRewardsRecord;
                toAmino(message: _143.ValidatorHistoricalRewardsRecord): _143.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _143.ValidatorHistoricalRewardsRecordAminoMsg): _143.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _143.ValidatorHistoricalRewardsRecord): _143.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _143.ValidatorHistoricalRewardsRecordProtoMsg): _143.ValidatorHistoricalRewardsRecord;
                toProto(message: _143.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _143.ValidatorHistoricalRewardsRecord): _143.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _143.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_143.ValidatorCurrentRewardsRecord>): _143.ValidatorCurrentRewardsRecord;
                fromAmino(object: _143.ValidatorCurrentRewardsRecordAmino): _143.ValidatorCurrentRewardsRecord;
                toAmino(message: _143.ValidatorCurrentRewardsRecord): _143.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _143.ValidatorCurrentRewardsRecordAminoMsg): _143.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _143.ValidatorCurrentRewardsRecord): _143.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _143.ValidatorCurrentRewardsRecordProtoMsg): _143.ValidatorCurrentRewardsRecord;
                toProto(message: _143.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _143.ValidatorCurrentRewardsRecord): _143.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _143.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_143.DelegatorStartingInfoRecord>): _143.DelegatorStartingInfoRecord;
                fromAmino(object: _143.DelegatorStartingInfoRecordAmino): _143.DelegatorStartingInfoRecord;
                toAmino(message: _143.DelegatorStartingInfoRecord): _143.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _143.DelegatorStartingInfoRecordAminoMsg): _143.DelegatorStartingInfoRecord;
                toAminoMsg(message: _143.DelegatorStartingInfoRecord): _143.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _143.DelegatorStartingInfoRecordProtoMsg): _143.DelegatorStartingInfoRecord;
                toProto(message: _143.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _143.DelegatorStartingInfoRecord): _143.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _143.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_143.ValidatorSlashEventRecord>): _143.ValidatorSlashEventRecord;
                fromAmino(object: _143.ValidatorSlashEventRecordAmino): _143.ValidatorSlashEventRecord;
                toAmino(message: _143.ValidatorSlashEventRecord): _143.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _143.ValidatorSlashEventRecordAminoMsg): _143.ValidatorSlashEventRecord;
                toAminoMsg(message: _143.ValidatorSlashEventRecord): _143.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _143.ValidatorSlashEventRecordProtoMsg): _143.ValidatorSlashEventRecord;
                toProto(message: _143.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _143.ValidatorSlashEventRecord): _143.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _143.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.GenesisState;
                fromPartial(object: Partial<_143.GenesisState>): _143.GenesisState;
                fromAmino(object: _143.GenesisStateAmino): _143.GenesisState;
                toAmino(message: _143.GenesisState): _143.GenesisStateAmino;
                fromAminoMsg(object: _143.GenesisStateAminoMsg): _143.GenesisState;
                toAminoMsg(message: _143.GenesisState): _143.GenesisStateAminoMsg;
                fromProtoMsg(message: _143.GenesisStateProtoMsg): _143.GenesisState;
                toProto(message: _143.GenesisState): Uint8Array;
                toProtoMsg(message: _143.GenesisState): _143.GenesisStateProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _142.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_142.ValidatorHistoricalRewards>): _142.ValidatorHistoricalRewards;
                fromAmino(object: _142.ValidatorHistoricalRewardsAmino): _142.ValidatorHistoricalRewards;
                toAmino(message: _142.ValidatorHistoricalRewards): _142.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _142.ValidatorHistoricalRewardsAminoMsg): _142.ValidatorHistoricalRewards;
                toAminoMsg(message: _142.ValidatorHistoricalRewards): _142.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _142.ValidatorHistoricalRewardsProtoMsg): _142.ValidatorHistoricalRewards;
                toProto(message: _142.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _142.ValidatorHistoricalRewards): _142.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _142.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorCurrentRewards;
                fromPartial(object: Partial<_142.ValidatorCurrentRewards>): _142.ValidatorCurrentRewards;
                fromAmino(object: _142.ValidatorCurrentRewardsAmino): _142.ValidatorCurrentRewards;
                toAmino(message: _142.ValidatorCurrentRewards): _142.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _142.ValidatorCurrentRewardsAminoMsg): _142.ValidatorCurrentRewards;
                toAminoMsg(message: _142.ValidatorCurrentRewards): _142.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _142.ValidatorCurrentRewardsProtoMsg): _142.ValidatorCurrentRewards;
                toProto(message: _142.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _142.ValidatorCurrentRewards): _142.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _142.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_142.ValidatorAccumulatedCommission>): _142.ValidatorAccumulatedCommission;
                fromAmino(object: _142.ValidatorAccumulatedCommissionAmino): _142.ValidatorAccumulatedCommission;
                toAmino(message: _142.ValidatorAccumulatedCommission): _142.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _142.ValidatorAccumulatedCommissionAminoMsg): _142.ValidatorAccumulatedCommission;
                toAminoMsg(message: _142.ValidatorAccumulatedCommission): _142.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _142.ValidatorAccumulatedCommissionProtoMsg): _142.ValidatorAccumulatedCommission;
                toProto(message: _142.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _142.ValidatorAccumulatedCommission): _142.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _142.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_142.ValidatorOutstandingRewards>): _142.ValidatorOutstandingRewards;
                fromAmino(object: _142.ValidatorOutstandingRewardsAmino): _142.ValidatorOutstandingRewards;
                toAmino(message: _142.ValidatorOutstandingRewards): _142.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _142.ValidatorOutstandingRewardsAminoMsg): _142.ValidatorOutstandingRewards;
                toAminoMsg(message: _142.ValidatorOutstandingRewards): _142.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _142.ValidatorOutstandingRewardsProtoMsg): _142.ValidatorOutstandingRewards;
                toProto(message: _142.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _142.ValidatorOutstandingRewards): _142.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _142.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorSlashEvent;
                fromPartial(object: Partial<_142.ValidatorSlashEvent>): _142.ValidatorSlashEvent;
                fromAmino(object: _142.ValidatorSlashEventAmino): _142.ValidatorSlashEvent;
                toAmino(message: _142.ValidatorSlashEvent): _142.ValidatorSlashEventAmino;
                fromAminoMsg(object: _142.ValidatorSlashEventAminoMsg): _142.ValidatorSlashEvent;
                toAminoMsg(message: _142.ValidatorSlashEvent): _142.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _142.ValidatorSlashEventProtoMsg): _142.ValidatorSlashEvent;
                toProto(message: _142.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _142.ValidatorSlashEvent): _142.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _142.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorSlashEvents;
                fromPartial(object: Partial<_142.ValidatorSlashEvents>): _142.ValidatorSlashEvents;
                fromAmino(object: _142.ValidatorSlashEventsAmino): _142.ValidatorSlashEvents;
                toAmino(message: _142.ValidatorSlashEvents): _142.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _142.ValidatorSlashEventsAminoMsg): _142.ValidatorSlashEvents;
                toAminoMsg(message: _142.ValidatorSlashEvents): _142.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _142.ValidatorSlashEventsProtoMsg): _142.ValidatorSlashEvents;
                toProto(message: _142.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _142.ValidatorSlashEvents): _142.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _142.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.FeePool;
                fromPartial(object: Partial<_142.FeePool>): _142.FeePool;
                fromAmino(object: _142.FeePoolAmino): _142.FeePool;
                toAmino(message: _142.FeePool): _142.FeePoolAmino;
                fromAminoMsg(object: _142.FeePoolAminoMsg): _142.FeePool;
                toAminoMsg(message: _142.FeePool): _142.FeePoolAminoMsg;
                fromProtoMsg(message: _142.FeePoolProtoMsg): _142.FeePool;
                toProto(message: _142.FeePool): Uint8Array;
                toProtoMsg(message: _142.FeePool): _142.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _142.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_142.CommunityPoolSpendProposal>): _142.CommunityPoolSpendProposal;
                fromAmino(object: _142.CommunityPoolSpendProposalAmino): _142.CommunityPoolSpendProposal;
                toAmino(message: _142.CommunityPoolSpendProposal): _142.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _142.CommunityPoolSpendProposalAminoMsg): _142.CommunityPoolSpendProposal;
                toAminoMsg(message: _142.CommunityPoolSpendProposal): _142.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _142.CommunityPoolSpendProposalProtoMsg): _142.CommunityPoolSpendProposal;
                toProto(message: _142.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _142.CommunityPoolSpendProposal): _142.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _142.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.DelegatorStartingInfo;
                fromPartial(object: Partial<_142.DelegatorStartingInfo>): _142.DelegatorStartingInfo;
                fromAmino(object: _142.DelegatorStartingInfoAmino): _142.DelegatorStartingInfo;
                toAmino(message: _142.DelegatorStartingInfo): _142.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _142.DelegatorStartingInfoAminoMsg): _142.DelegatorStartingInfo;
                toAminoMsg(message: _142.DelegatorStartingInfo): _142.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _142.DelegatorStartingInfoProtoMsg): _142.DelegatorStartingInfo;
                toProto(message: _142.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _142.DelegatorStartingInfo): _142.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _142.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.DelegationDelegatorReward;
                fromPartial(object: Partial<_142.DelegationDelegatorReward>): _142.DelegationDelegatorReward;
                fromAmino(object: _142.DelegationDelegatorRewardAmino): _142.DelegationDelegatorReward;
                toAmino(message: _142.DelegationDelegatorReward): _142.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _142.DelegationDelegatorRewardAminoMsg): _142.DelegationDelegatorReward;
                toAminoMsg(message: _142.DelegationDelegatorReward): _142.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _142.DelegationDelegatorRewardProtoMsg): _142.DelegationDelegatorReward;
                toProto(message: _142.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _142.DelegationDelegatorReward): _142.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _142.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_142.CommunityPoolSpendProposalWithDeposit>): _142.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _142.CommunityPoolSpendProposalWithDepositAmino): _142.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _142.CommunityPoolSpendProposalWithDeposit): _142.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _142.CommunityPoolSpendProposalWithDepositAminoMsg): _142.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _142.CommunityPoolSpendProposalWithDeposit): _142.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _142.CommunityPoolSpendProposalWithDepositProtoMsg): _142.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _142.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _142.CommunityPoolSpendProposalWithDeposit): _142.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _146.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _146.Module;
                    fromPartial(_: Partial<_146.Module>): _146.Module;
                    fromAmino(_: _146.ModuleAmino): _146.Module;
                    toAmino(_: _146.Module): _146.ModuleAmino;
                    fromAminoMsg(object: _146.ModuleAminoMsg): _146.Module;
                    toAminoMsg(message: _146.Module): _146.ModuleAminoMsg;
                    fromProtoMsg(message: _146.ModuleProtoMsg): _146.Module;
                    toProto(message: _146.Module): Uint8Array;
                    toProtoMsg(message: _146.Module): _146.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _413.MsgClientImpl;
            QueryClientImpl: typeof _394.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _149.QueryEvidenceRequest): Promise<_149.QueryEvidenceResponse>;
                allEvidence(request?: _149.QueryAllEvidenceRequest): Promise<_149.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _373.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _150.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _150.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _150.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _150.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _150.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _150.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _150.MsgSubmitEvidence) => _150.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _150.MsgSubmitEvidenceAmino) => _150.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _150.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.MsgSubmitEvidence;
                fromPartial(object: Partial<_150.MsgSubmitEvidence>): _150.MsgSubmitEvidence;
                fromAmino(object: _150.MsgSubmitEvidenceAmino): _150.MsgSubmitEvidence;
                toAmino(message: _150.MsgSubmitEvidence): _150.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _150.MsgSubmitEvidenceAminoMsg): _150.MsgSubmitEvidence;
                toAminoMsg(message: _150.MsgSubmitEvidence): _150.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _150.MsgSubmitEvidenceProtoMsg): _150.MsgSubmitEvidence;
                toProto(message: _150.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _150.MsgSubmitEvidence): _150.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _150.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_150.MsgSubmitEvidenceResponse>): _150.MsgSubmitEvidenceResponse;
                fromAmino(object: _150.MsgSubmitEvidenceResponseAmino): _150.MsgSubmitEvidenceResponse;
                toAmino(message: _150.MsgSubmitEvidenceResponse): _150.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _150.MsgSubmitEvidenceResponseAminoMsg): _150.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _150.MsgSubmitEvidenceResponse): _150.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _150.MsgSubmitEvidenceResponseProtoMsg): _150.MsgSubmitEvidenceResponse;
                toProto(message: _150.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _150.MsgSubmitEvidenceResponse): _150.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _149.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryEvidenceRequest;
                fromPartial(object: Partial<_149.QueryEvidenceRequest>): _149.QueryEvidenceRequest;
                fromAmino(object: _149.QueryEvidenceRequestAmino): _149.QueryEvidenceRequest;
                toAmino(message: _149.QueryEvidenceRequest): _149.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _149.QueryEvidenceRequestAminoMsg): _149.QueryEvidenceRequest;
                toAminoMsg(message: _149.QueryEvidenceRequest): _149.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _149.QueryEvidenceRequestProtoMsg): _149.QueryEvidenceRequest;
                toProto(message: _149.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _149.QueryEvidenceRequest): _149.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _149.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryEvidenceResponse;
                fromPartial(object: Partial<_149.QueryEvidenceResponse>): _149.QueryEvidenceResponse;
                fromAmino(object: _149.QueryEvidenceResponseAmino): _149.QueryEvidenceResponse;
                toAmino(message: _149.QueryEvidenceResponse): _149.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _149.QueryEvidenceResponseAminoMsg): _149.QueryEvidenceResponse;
                toAminoMsg(message: _149.QueryEvidenceResponse): _149.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _149.QueryEvidenceResponseProtoMsg): _149.QueryEvidenceResponse;
                toProto(message: _149.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _149.QueryEvidenceResponse): _149.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _149.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_149.QueryAllEvidenceRequest>): _149.QueryAllEvidenceRequest;
                fromAmino(object: _149.QueryAllEvidenceRequestAmino): _149.QueryAllEvidenceRequest;
                toAmino(message: _149.QueryAllEvidenceRequest): _149.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _149.QueryAllEvidenceRequestAminoMsg): _149.QueryAllEvidenceRequest;
                toAminoMsg(message: _149.QueryAllEvidenceRequest): _149.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _149.QueryAllEvidenceRequestProtoMsg): _149.QueryAllEvidenceRequest;
                toProto(message: _149.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _149.QueryAllEvidenceRequest): _149.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _149.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_149.QueryAllEvidenceResponse>): _149.QueryAllEvidenceResponse;
                fromAmino(object: _149.QueryAllEvidenceResponseAmino): _149.QueryAllEvidenceResponse;
                toAmino(message: _149.QueryAllEvidenceResponse): _149.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _149.QueryAllEvidenceResponseAminoMsg): _149.QueryAllEvidenceResponse;
                toAminoMsg(message: _149.QueryAllEvidenceResponse): _149.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _149.QueryAllEvidenceResponseProtoMsg): _149.QueryAllEvidenceResponse;
                toProto(message: _149.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _149.QueryAllEvidenceResponse): _149.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _148.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.GenesisState;
                fromPartial(object: Partial<_148.GenesisState>): _148.GenesisState;
                fromAmino(object: _148.GenesisStateAmino): _148.GenesisState;
                toAmino(message: _148.GenesisState): _148.GenesisStateAmino;
                fromAminoMsg(object: _148.GenesisStateAminoMsg): _148.GenesisState;
                toAminoMsg(message: _148.GenesisState): _148.GenesisStateAminoMsg;
                fromProtoMsg(message: _148.GenesisStateProtoMsg): _148.GenesisState;
                toProto(message: _148.GenesisState): Uint8Array;
                toProtoMsg(message: _148.GenesisState): _148.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _147.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.Equivocation;
                fromPartial(object: Partial<_147.Equivocation>): _147.Equivocation;
                fromAmino(object: _147.EquivocationAmino): _147.Equivocation;
                toAmino(message: _147.Equivocation): _147.EquivocationAmino;
                fromAminoMsg(object: _147.EquivocationAminoMsg): _147.Equivocation;
                toAminoMsg(message: _147.Equivocation): _147.EquivocationAminoMsg;
                fromProtoMsg(message: _147.EquivocationProtoMsg): _147.Equivocation;
                toProto(message: _147.Equivocation): Uint8Array;
                toProtoMsg(message: _147.Equivocation): _147.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _151.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _151.Module;
                    fromPartial(_: Partial<_151.Module>): _151.Module;
                    fromAmino(_: _151.ModuleAmino): _151.Module;
                    toAmino(_: _151.Module): _151.ModuleAmino;
                    fromAminoMsg(object: _151.ModuleAminoMsg): _151.Module;
                    toAminoMsg(message: _151.Module): _151.ModuleAminoMsg;
                    fromProtoMsg(message: _151.ModuleProtoMsg): _151.Module;
                    toProto(message: _151.Module): Uint8Array;
                    toProtoMsg(message: _151.Module): _151.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _414.MsgClientImpl;
            QueryClientImpl: typeof _395.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _154.QueryAllowanceRequest): Promise<_154.QueryAllowanceResponse>;
                allowances(request: _154.QueryAllowancesRequest): Promise<_154.QueryAllowancesResponse>;
                allowancesByGranter(request: _154.QueryAllowancesByGranterRequest): Promise<_154.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _374.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _155.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _155.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _155.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _155.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _155.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _155.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _155.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _155.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _155.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _155.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _155.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _155.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _155.MsgGrantAllowance) => _155.MsgGrantAllowanceAmino;
                    fromAmino: (object: _155.MsgGrantAllowanceAmino) => _155.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _155.MsgRevokeAllowance) => _155.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _155.MsgRevokeAllowanceAmino) => _155.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _155.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgGrantAllowance;
                fromPartial(object: Partial<_155.MsgGrantAllowance>): _155.MsgGrantAllowance;
                fromAmino(object: _155.MsgGrantAllowanceAmino): _155.MsgGrantAllowance;
                toAmino(message: _155.MsgGrantAllowance): _155.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _155.MsgGrantAllowanceAminoMsg): _155.MsgGrantAllowance;
                toAminoMsg(message: _155.MsgGrantAllowance): _155.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _155.MsgGrantAllowanceProtoMsg): _155.MsgGrantAllowance;
                toProto(message: _155.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _155.MsgGrantAllowance): _155.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _155.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_155.MsgGrantAllowanceResponse>): _155.MsgGrantAllowanceResponse;
                fromAmino(_: _155.MsgGrantAllowanceResponseAmino): _155.MsgGrantAllowanceResponse;
                toAmino(_: _155.MsgGrantAllowanceResponse): _155.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _155.MsgGrantAllowanceResponseAminoMsg): _155.MsgGrantAllowanceResponse;
                toAminoMsg(message: _155.MsgGrantAllowanceResponse): _155.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _155.MsgGrantAllowanceResponseProtoMsg): _155.MsgGrantAllowanceResponse;
                toProto(message: _155.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _155.MsgGrantAllowanceResponse): _155.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _155.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgRevokeAllowance;
                fromPartial(object: Partial<_155.MsgRevokeAllowance>): _155.MsgRevokeAllowance;
                fromAmino(object: _155.MsgRevokeAllowanceAmino): _155.MsgRevokeAllowance;
                toAmino(message: _155.MsgRevokeAllowance): _155.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _155.MsgRevokeAllowanceAminoMsg): _155.MsgRevokeAllowance;
                toAminoMsg(message: _155.MsgRevokeAllowance): _155.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _155.MsgRevokeAllowanceProtoMsg): _155.MsgRevokeAllowance;
                toProto(message: _155.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _155.MsgRevokeAllowance): _155.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _155.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_155.MsgRevokeAllowanceResponse>): _155.MsgRevokeAllowanceResponse;
                fromAmino(_: _155.MsgRevokeAllowanceResponseAmino): _155.MsgRevokeAllowanceResponse;
                toAmino(_: _155.MsgRevokeAllowanceResponse): _155.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _155.MsgRevokeAllowanceResponseAminoMsg): _155.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _155.MsgRevokeAllowanceResponse): _155.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _155.MsgRevokeAllowanceResponseProtoMsg): _155.MsgRevokeAllowanceResponse;
                toProto(message: _155.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _155.MsgRevokeAllowanceResponse): _155.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _152.BasicAllowance | _152.PeriodicAllowance | _152.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _154.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryAllowanceRequest;
                fromPartial(object: Partial<_154.QueryAllowanceRequest>): _154.QueryAllowanceRequest;
                fromAmino(object: _154.QueryAllowanceRequestAmino): _154.QueryAllowanceRequest;
                toAmino(message: _154.QueryAllowanceRequest): _154.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _154.QueryAllowanceRequestAminoMsg): _154.QueryAllowanceRequest;
                toAminoMsg(message: _154.QueryAllowanceRequest): _154.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _154.QueryAllowanceRequestProtoMsg): _154.QueryAllowanceRequest;
                toProto(message: _154.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _154.QueryAllowanceRequest): _154.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _154.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryAllowanceResponse;
                fromPartial(object: Partial<_154.QueryAllowanceResponse>): _154.QueryAllowanceResponse;
                fromAmino(object: _154.QueryAllowanceResponseAmino): _154.QueryAllowanceResponse;
                toAmino(message: _154.QueryAllowanceResponse): _154.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _154.QueryAllowanceResponseAminoMsg): _154.QueryAllowanceResponse;
                toAminoMsg(message: _154.QueryAllowanceResponse): _154.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _154.QueryAllowanceResponseProtoMsg): _154.QueryAllowanceResponse;
                toProto(message: _154.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _154.QueryAllowanceResponse): _154.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _154.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryAllowancesRequest;
                fromPartial(object: Partial<_154.QueryAllowancesRequest>): _154.QueryAllowancesRequest;
                fromAmino(object: _154.QueryAllowancesRequestAmino): _154.QueryAllowancesRequest;
                toAmino(message: _154.QueryAllowancesRequest): _154.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _154.QueryAllowancesRequestAminoMsg): _154.QueryAllowancesRequest;
                toAminoMsg(message: _154.QueryAllowancesRequest): _154.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _154.QueryAllowancesRequestProtoMsg): _154.QueryAllowancesRequest;
                toProto(message: _154.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _154.QueryAllowancesRequest): _154.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _154.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryAllowancesResponse;
                fromPartial(object: Partial<_154.QueryAllowancesResponse>): _154.QueryAllowancesResponse;
                fromAmino(object: _154.QueryAllowancesResponseAmino): _154.QueryAllowancesResponse;
                toAmino(message: _154.QueryAllowancesResponse): _154.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _154.QueryAllowancesResponseAminoMsg): _154.QueryAllowancesResponse;
                toAminoMsg(message: _154.QueryAllowancesResponse): _154.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _154.QueryAllowancesResponseProtoMsg): _154.QueryAllowancesResponse;
                toProto(message: _154.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _154.QueryAllowancesResponse): _154.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _154.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_154.QueryAllowancesByGranterRequest>): _154.QueryAllowancesByGranterRequest;
                fromAmino(object: _154.QueryAllowancesByGranterRequestAmino): _154.QueryAllowancesByGranterRequest;
                toAmino(message: _154.QueryAllowancesByGranterRequest): _154.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _154.QueryAllowancesByGranterRequestAminoMsg): _154.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _154.QueryAllowancesByGranterRequest): _154.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _154.QueryAllowancesByGranterRequestProtoMsg): _154.QueryAllowancesByGranterRequest;
                toProto(message: _154.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _154.QueryAllowancesByGranterRequest): _154.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _154.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_154.QueryAllowancesByGranterResponse>): _154.QueryAllowancesByGranterResponse;
                fromAmino(object: _154.QueryAllowancesByGranterResponseAmino): _154.QueryAllowancesByGranterResponse;
                toAmino(message: _154.QueryAllowancesByGranterResponse): _154.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _154.QueryAllowancesByGranterResponseAminoMsg): _154.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _154.QueryAllowancesByGranterResponse): _154.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _154.QueryAllowancesByGranterResponseProtoMsg): _154.QueryAllowancesByGranterResponse;
                toProto(message: _154.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _154.QueryAllowancesByGranterResponse): _154.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _152.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.BasicAllowance;
                fromPartial(object: Partial<_152.BasicAllowance>): _152.BasicAllowance;
                fromAmino(object: _152.BasicAllowanceAmino): _152.BasicAllowance;
                toAmino(message: _152.BasicAllowance): _152.BasicAllowanceAmino;
                fromAminoMsg(object: _152.BasicAllowanceAminoMsg): _152.BasicAllowance;
                toAminoMsg(message: _152.BasicAllowance): _152.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _152.BasicAllowanceProtoMsg): _152.BasicAllowance;
                toProto(message: _152.BasicAllowance): Uint8Array;
                toProtoMsg(message: _152.BasicAllowance): _152.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _152.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.PeriodicAllowance;
                fromPartial(object: Partial<_152.PeriodicAllowance>): _152.PeriodicAllowance;
                fromAmino(object: _152.PeriodicAllowanceAmino): _152.PeriodicAllowance;
                toAmino(message: _152.PeriodicAllowance): _152.PeriodicAllowanceAmino;
                fromAminoMsg(object: _152.PeriodicAllowanceAminoMsg): _152.PeriodicAllowance;
                toAminoMsg(message: _152.PeriodicAllowance): _152.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _152.PeriodicAllowanceProtoMsg): _152.PeriodicAllowance;
                toProto(message: _152.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _152.PeriodicAllowance): _152.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _152.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.AllowedMsgAllowance;
                fromPartial(object: Partial<_152.AllowedMsgAllowance>): _152.AllowedMsgAllowance;
                fromAmino(object: _152.AllowedMsgAllowanceAmino): _152.AllowedMsgAllowance;
                toAmino(message: _152.AllowedMsgAllowance): _152.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _152.AllowedMsgAllowanceAminoMsg): _152.AllowedMsgAllowance;
                toAminoMsg(message: _152.AllowedMsgAllowance): _152.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _152.AllowedMsgAllowanceProtoMsg): _152.AllowedMsgAllowance;
                toProto(message: _152.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _152.AllowedMsgAllowance): _152.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _152.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.Grant;
                fromPartial(object: Partial<_152.Grant>): _152.Grant;
                fromAmino(object: _152.GrantAmino): _152.Grant;
                toAmino(message: _152.Grant): _152.GrantAmino;
                fromAminoMsg(object: _152.GrantAminoMsg): _152.Grant;
                toAminoMsg(message: _152.Grant): _152.GrantAminoMsg;
                fromProtoMsg(message: _152.GrantProtoMsg): _152.Grant;
                toProto(message: _152.Grant): Uint8Array;
                toProtoMsg(message: _152.Grant): _152.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _156.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _156.Module;
                    fromPartial(_: Partial<_156.Module>): _156.Module;
                    fromAmino(_: _156.ModuleAmino): _156.Module;
                    toAmino(_: _156.Module): _156.ModuleAmino;
                    fromAminoMsg(object: _156.ModuleAminoMsg): _156.Module;
                    toAminoMsg(message: _156.Module): _156.ModuleAminoMsg;
                    fromProtoMsg(message: _156.ModuleProtoMsg): _156.Module;
                    toProto(message: _156.Module): Uint8Array;
                    toProtoMsg(message: _156.Module): _156.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _157.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.GenesisState;
                fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
                fromAmino(object: _157.GenesisStateAmino): _157.GenesisState;
                toAmino(message: _157.GenesisState): _157.GenesisStateAmino;
                fromAminoMsg(object: _157.GenesisStateAminoMsg): _157.GenesisState;
                toAminoMsg(message: _157.GenesisState): _157.GenesisStateAminoMsg;
                fromProtoMsg(message: _157.GenesisStateProtoMsg): _157.GenesisState;
                toProto(message: _157.GenesisState): Uint8Array;
                toProtoMsg(message: _157.GenesisState): _157.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _158.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.Module;
                    fromPartial(object: Partial<_158.Module>): _158.Module;
                    fromAmino(object: _158.ModuleAmino): _158.Module;
                    toAmino(message: _158.Module): _158.ModuleAmino;
                    fromAminoMsg(object: _158.ModuleAminoMsg): _158.Module;
                    toAminoMsg(message: _158.Module): _158.ModuleAminoMsg;
                    fromProtoMsg(message: _158.ModuleProtoMsg): _158.Module;
                    toProto(message: _158.Module): Uint8Array;
                    toProtoMsg(message: _158.Module): _158.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _415.MsgClientImpl;
            QueryClientImpl: typeof _396.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _161.QueryProposalRequest): Promise<_161.QueryProposalResponse>;
                proposals(request: _161.QueryProposalsRequest): Promise<_161.QueryProposalsResponse>;
                vote(request: _161.QueryVoteRequest): Promise<_161.QueryVoteResponse>;
                votes(request: _161.QueryVotesRequest): Promise<_161.QueryVotesResponse>;
                params(request: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                deposit(request: _161.QueryDepositRequest): Promise<_161.QueryDepositResponse>;
                deposits(request: _161.QueryDepositsRequest): Promise<_161.QueryDepositsResponse>;
                tallyResult(request: _161.QueryTallyResultRequest): Promise<_161.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _375.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _162.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _162.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _162.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _162.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _162.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _162.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _162.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _162.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _162.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _162.MsgExecLegacyContent;
                    };
                    vote(value: _162.MsgVote): {
                        typeUrl: string;
                        value: _162.MsgVote;
                    };
                    voteWeighted(value: _162.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _162.MsgVoteWeighted;
                    };
                    deposit(value: _162.MsgDeposit): {
                        typeUrl: string;
                        value: _162.MsgDeposit;
                    };
                    updateParams(value: _162.MsgUpdateParams): {
                        typeUrl: string;
                        value: _162.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _162.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _162.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _162.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _162.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _162.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _162.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _162.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _162.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _162.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _162.MsgExecLegacyContent;
                    };
                    vote(value: _162.MsgVote): {
                        typeUrl: string;
                        value: _162.MsgVote;
                    };
                    voteWeighted(value: _162.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _162.MsgVoteWeighted;
                    };
                    deposit(value: _162.MsgDeposit): {
                        typeUrl: string;
                        value: _162.MsgDeposit;
                    };
                    updateParams(value: _162.MsgUpdateParams): {
                        typeUrl: string;
                        value: _162.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _162.MsgSubmitProposal) => _162.MsgSubmitProposalAmino;
                    fromAmino: (object: _162.MsgSubmitProposalAmino) => _162.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _162.MsgExecLegacyContent) => _162.MsgExecLegacyContentAmino;
                    fromAmino: (object: _162.MsgExecLegacyContentAmino) => _162.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _162.MsgVote) => _162.MsgVoteAmino;
                    fromAmino: (object: _162.MsgVoteAmino) => _162.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _162.MsgVoteWeighted) => _162.MsgVoteWeightedAmino;
                    fromAmino: (object: _162.MsgVoteWeightedAmino) => _162.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _162.MsgDeposit) => _162.MsgDepositAmino;
                    fromAmino: (object: _162.MsgDepositAmino) => _162.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _162.MsgUpdateParams) => _162.MsgUpdateParamsAmino;
                    fromAmino: (object: _162.MsgUpdateParamsAmino) => _162.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _162.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgSubmitProposal;
                fromPartial(object: Partial<_162.MsgSubmitProposal>): _162.MsgSubmitProposal;
                fromAmino(object: _162.MsgSubmitProposalAmino): _162.MsgSubmitProposal;
                toAmino(message: _162.MsgSubmitProposal): _162.MsgSubmitProposalAmino;
                fromAminoMsg(object: _162.MsgSubmitProposalAminoMsg): _162.MsgSubmitProposal;
                toAminoMsg(message: _162.MsgSubmitProposal): _162.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _162.MsgSubmitProposalProtoMsg): _162.MsgSubmitProposal;
                toProto(message: _162.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _162.MsgSubmitProposal): _162.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _162.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_162.MsgSubmitProposalResponse>): _162.MsgSubmitProposalResponse;
                fromAmino(object: _162.MsgSubmitProposalResponseAmino): _162.MsgSubmitProposalResponse;
                toAmino(message: _162.MsgSubmitProposalResponse): _162.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _162.MsgSubmitProposalResponseAminoMsg): _162.MsgSubmitProposalResponse;
                toAminoMsg(message: _162.MsgSubmitProposalResponse): _162.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _162.MsgSubmitProposalResponseProtoMsg): _162.MsgSubmitProposalResponse;
                toProto(message: _162.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _162.MsgSubmitProposalResponse): _162.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _162.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgExecLegacyContent;
                fromPartial(object: Partial<_162.MsgExecLegacyContent>): _162.MsgExecLegacyContent;
                fromAmino(object: _162.MsgExecLegacyContentAmino): _162.MsgExecLegacyContent;
                toAmino(message: _162.MsgExecLegacyContent): _162.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _162.MsgExecLegacyContentAminoMsg): _162.MsgExecLegacyContent;
                toAminoMsg(message: _162.MsgExecLegacyContent): _162.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _162.MsgExecLegacyContentProtoMsg): _162.MsgExecLegacyContent;
                toProto(message: _162.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _162.MsgExecLegacyContent): _162.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _162.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _162.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_162.MsgExecLegacyContentResponse>): _162.MsgExecLegacyContentResponse;
                fromAmino(_: _162.MsgExecLegacyContentResponseAmino): _162.MsgExecLegacyContentResponse;
                toAmino(_: _162.MsgExecLegacyContentResponse): _162.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _162.MsgExecLegacyContentResponseAminoMsg): _162.MsgExecLegacyContentResponse;
                toAminoMsg(message: _162.MsgExecLegacyContentResponse): _162.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _162.MsgExecLegacyContentResponseProtoMsg): _162.MsgExecLegacyContentResponse;
                toProto(message: _162.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _162.MsgExecLegacyContentResponse): _162.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _162.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgVote;
                fromPartial(object: Partial<_162.MsgVote>): _162.MsgVote;
                fromAmino(object: _162.MsgVoteAmino): _162.MsgVote;
                toAmino(message: _162.MsgVote): _162.MsgVoteAmino;
                fromAminoMsg(object: _162.MsgVoteAminoMsg): _162.MsgVote;
                toAminoMsg(message: _162.MsgVote): _162.MsgVoteAminoMsg;
                fromProtoMsg(message: _162.MsgVoteProtoMsg): _162.MsgVote;
                toProto(message: _162.MsgVote): Uint8Array;
                toProtoMsg(message: _162.MsgVote): _162.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _162.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _162.MsgVoteResponse;
                fromPartial(_: Partial<_162.MsgVoteResponse>): _162.MsgVoteResponse;
                fromAmino(_: _162.MsgVoteResponseAmino): _162.MsgVoteResponse;
                toAmino(_: _162.MsgVoteResponse): _162.MsgVoteResponseAmino;
                fromAminoMsg(object: _162.MsgVoteResponseAminoMsg): _162.MsgVoteResponse;
                toAminoMsg(message: _162.MsgVoteResponse): _162.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _162.MsgVoteResponseProtoMsg): _162.MsgVoteResponse;
                toProto(message: _162.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _162.MsgVoteResponse): _162.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _162.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgVoteWeighted;
                fromPartial(object: Partial<_162.MsgVoteWeighted>): _162.MsgVoteWeighted;
                fromAmino(object: _162.MsgVoteWeightedAmino): _162.MsgVoteWeighted;
                toAmino(message: _162.MsgVoteWeighted): _162.MsgVoteWeightedAmino;
                fromAminoMsg(object: _162.MsgVoteWeightedAminoMsg): _162.MsgVoteWeighted;
                toAminoMsg(message: _162.MsgVoteWeighted): _162.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _162.MsgVoteWeightedProtoMsg): _162.MsgVoteWeighted;
                toProto(message: _162.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _162.MsgVoteWeighted): _162.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _162.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _162.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_162.MsgVoteWeightedResponse>): _162.MsgVoteWeightedResponse;
                fromAmino(_: _162.MsgVoteWeightedResponseAmino): _162.MsgVoteWeightedResponse;
                toAmino(_: _162.MsgVoteWeightedResponse): _162.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _162.MsgVoteWeightedResponseAminoMsg): _162.MsgVoteWeightedResponse;
                toAminoMsg(message: _162.MsgVoteWeightedResponse): _162.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _162.MsgVoteWeightedResponseProtoMsg): _162.MsgVoteWeightedResponse;
                toProto(message: _162.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _162.MsgVoteWeightedResponse): _162.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _162.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgDeposit;
                fromPartial(object: Partial<_162.MsgDeposit>): _162.MsgDeposit;
                fromAmino(object: _162.MsgDepositAmino): _162.MsgDeposit;
                toAmino(message: _162.MsgDeposit): _162.MsgDepositAmino;
                fromAminoMsg(object: _162.MsgDepositAminoMsg): _162.MsgDeposit;
                toAminoMsg(message: _162.MsgDeposit): _162.MsgDepositAminoMsg;
                fromProtoMsg(message: _162.MsgDepositProtoMsg): _162.MsgDeposit;
                toProto(message: _162.MsgDeposit): Uint8Array;
                toProtoMsg(message: _162.MsgDeposit): _162.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _162.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _162.MsgDepositResponse;
                fromPartial(_: Partial<_162.MsgDepositResponse>): _162.MsgDepositResponse;
                fromAmino(_: _162.MsgDepositResponseAmino): _162.MsgDepositResponse;
                toAmino(_: _162.MsgDepositResponse): _162.MsgDepositResponseAmino;
                fromAminoMsg(object: _162.MsgDepositResponseAminoMsg): _162.MsgDepositResponse;
                toAminoMsg(message: _162.MsgDepositResponse): _162.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _162.MsgDepositResponseProtoMsg): _162.MsgDepositResponse;
                toProto(message: _162.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _162.MsgDepositResponse): _162.MsgDepositResponseProtoMsg;
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
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("../osmosis/gamm/v1beta1/gov").ReplaceMigrationRecordsProposal | import("../osmosis/gamm/v1beta1/gov").UpdateMigrationRecordsProposal | import("../osmosis/gamm/v1beta1/gov").CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal | import("../osmosis/gamm/v1beta1/gov").SetScalingFactorControllerProposal | import("../osmosis/poolincentives/v1beta1/gov").ReplacePoolIncentivesProposal | import("../osmosis/poolincentives/v1beta1/gov").UpdatePoolIncentivesProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevEnabledProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevAdminAccountProposal | import("../osmosis/txfees/v1beta1/gov").UpdateFeeTokenProposal | _142.CommunityPoolSpendProposal | _142.CommunityPoolSpendProposalWithDeposit | import("../osmosis/superfluid/v1beta1/gov").SetSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").RemoveSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").UpdateUnpoolWhiteListProposal | _190.ParameterChangeProposal | _212.SoftwareUpgradeProposal | _212.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _164.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _161.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryProposalRequest;
                fromPartial(object: Partial<_161.QueryProposalRequest>): _161.QueryProposalRequest;
                fromAmino(object: _161.QueryProposalRequestAmino): _161.QueryProposalRequest;
                toAmino(message: _161.QueryProposalRequest): _161.QueryProposalRequestAmino;
                fromAminoMsg(object: _161.QueryProposalRequestAminoMsg): _161.QueryProposalRequest;
                toAminoMsg(message: _161.QueryProposalRequest): _161.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _161.QueryProposalRequestProtoMsg): _161.QueryProposalRequest;
                toProto(message: _161.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _161.QueryProposalRequest): _161.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _161.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryProposalResponse;
                fromPartial(object: Partial<_161.QueryProposalResponse>): _161.QueryProposalResponse;
                fromAmino(object: _161.QueryProposalResponseAmino): _161.QueryProposalResponse;
                toAmino(message: _161.QueryProposalResponse): _161.QueryProposalResponseAmino;
                fromAminoMsg(object: _161.QueryProposalResponseAminoMsg): _161.QueryProposalResponse;
                toAminoMsg(message: _161.QueryProposalResponse): _161.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _161.QueryProposalResponseProtoMsg): _161.QueryProposalResponse;
                toProto(message: _161.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _161.QueryProposalResponse): _161.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _161.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryProposalsRequest;
                fromPartial(object: Partial<_161.QueryProposalsRequest>): _161.QueryProposalsRequest;
                fromAmino(object: _161.QueryProposalsRequestAmino): _161.QueryProposalsRequest;
                toAmino(message: _161.QueryProposalsRequest): _161.QueryProposalsRequestAmino;
                fromAminoMsg(object: _161.QueryProposalsRequestAminoMsg): _161.QueryProposalsRequest;
                toAminoMsg(message: _161.QueryProposalsRequest): _161.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryProposalsRequestProtoMsg): _161.QueryProposalsRequest;
                toProto(message: _161.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryProposalsRequest): _161.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _161.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryProposalsResponse;
                fromPartial(object: Partial<_161.QueryProposalsResponse>): _161.QueryProposalsResponse;
                fromAmino(object: _161.QueryProposalsResponseAmino): _161.QueryProposalsResponse;
                toAmino(message: _161.QueryProposalsResponse): _161.QueryProposalsResponseAmino;
                fromAminoMsg(object: _161.QueryProposalsResponseAminoMsg): _161.QueryProposalsResponse;
                toAminoMsg(message: _161.QueryProposalsResponse): _161.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryProposalsResponseProtoMsg): _161.QueryProposalsResponse;
                toProto(message: _161.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryProposalsResponse): _161.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _161.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryVoteRequest;
                fromPartial(object: Partial<_161.QueryVoteRequest>): _161.QueryVoteRequest;
                fromAmino(object: _161.QueryVoteRequestAmino): _161.QueryVoteRequest;
                toAmino(message: _161.QueryVoteRequest): _161.QueryVoteRequestAmino;
                fromAminoMsg(object: _161.QueryVoteRequestAminoMsg): _161.QueryVoteRequest;
                toAminoMsg(message: _161.QueryVoteRequest): _161.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _161.QueryVoteRequestProtoMsg): _161.QueryVoteRequest;
                toProto(message: _161.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _161.QueryVoteRequest): _161.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _161.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryVoteResponse;
                fromPartial(object: Partial<_161.QueryVoteResponse>): _161.QueryVoteResponse;
                fromAmino(object: _161.QueryVoteResponseAmino): _161.QueryVoteResponse;
                toAmino(message: _161.QueryVoteResponse): _161.QueryVoteResponseAmino;
                fromAminoMsg(object: _161.QueryVoteResponseAminoMsg): _161.QueryVoteResponse;
                toAminoMsg(message: _161.QueryVoteResponse): _161.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _161.QueryVoteResponseProtoMsg): _161.QueryVoteResponse;
                toProto(message: _161.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _161.QueryVoteResponse): _161.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _161.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryVotesRequest;
                fromPartial(object: Partial<_161.QueryVotesRequest>): _161.QueryVotesRequest;
                fromAmino(object: _161.QueryVotesRequestAmino): _161.QueryVotesRequest;
                toAmino(message: _161.QueryVotesRequest): _161.QueryVotesRequestAmino;
                fromAminoMsg(object: _161.QueryVotesRequestAminoMsg): _161.QueryVotesRequest;
                toAminoMsg(message: _161.QueryVotesRequest): _161.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _161.QueryVotesRequestProtoMsg): _161.QueryVotesRequest;
                toProto(message: _161.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _161.QueryVotesRequest): _161.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _161.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryVotesResponse;
                fromPartial(object: Partial<_161.QueryVotesResponse>): _161.QueryVotesResponse;
                fromAmino(object: _161.QueryVotesResponseAmino): _161.QueryVotesResponse;
                toAmino(message: _161.QueryVotesResponse): _161.QueryVotesResponseAmino;
                fromAminoMsg(object: _161.QueryVotesResponseAminoMsg): _161.QueryVotesResponse;
                toAminoMsg(message: _161.QueryVotesResponse): _161.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _161.QueryVotesResponseProtoMsg): _161.QueryVotesResponse;
                toProto(message: _161.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _161.QueryVotesResponse): _161.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _161.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryParamsRequest;
                fromPartial(object: Partial<_161.QueryParamsRequest>): _161.QueryParamsRequest;
                fromAmino(object: _161.QueryParamsRequestAmino): _161.QueryParamsRequest;
                toAmino(message: _161.QueryParamsRequest): _161.QueryParamsRequestAmino;
                fromAminoMsg(object: _161.QueryParamsRequestAminoMsg): _161.QueryParamsRequest;
                toAminoMsg(message: _161.QueryParamsRequest): _161.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryParamsRequestProtoMsg): _161.QueryParamsRequest;
                toProto(message: _161.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryParamsRequest): _161.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _161.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryParamsResponse;
                fromPartial(object: Partial<_161.QueryParamsResponse>): _161.QueryParamsResponse;
                fromAmino(object: _161.QueryParamsResponseAmino): _161.QueryParamsResponse;
                toAmino(message: _161.QueryParamsResponse): _161.QueryParamsResponseAmino;
                fromAminoMsg(object: _161.QueryParamsResponseAminoMsg): _161.QueryParamsResponse;
                toAminoMsg(message: _161.QueryParamsResponse): _161.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryParamsResponseProtoMsg): _161.QueryParamsResponse;
                toProto(message: _161.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryParamsResponse): _161.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _161.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDepositRequest;
                fromPartial(object: Partial<_161.QueryDepositRequest>): _161.QueryDepositRequest;
                fromAmino(object: _161.QueryDepositRequestAmino): _161.QueryDepositRequest;
                toAmino(message: _161.QueryDepositRequest): _161.QueryDepositRequestAmino;
                fromAminoMsg(object: _161.QueryDepositRequestAminoMsg): _161.QueryDepositRequest;
                toAminoMsg(message: _161.QueryDepositRequest): _161.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _161.QueryDepositRequestProtoMsg): _161.QueryDepositRequest;
                toProto(message: _161.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _161.QueryDepositRequest): _161.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _161.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDepositResponse;
                fromPartial(object: Partial<_161.QueryDepositResponse>): _161.QueryDepositResponse;
                fromAmino(object: _161.QueryDepositResponseAmino): _161.QueryDepositResponse;
                toAmino(message: _161.QueryDepositResponse): _161.QueryDepositResponseAmino;
                fromAminoMsg(object: _161.QueryDepositResponseAminoMsg): _161.QueryDepositResponse;
                toAminoMsg(message: _161.QueryDepositResponse): _161.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _161.QueryDepositResponseProtoMsg): _161.QueryDepositResponse;
                toProto(message: _161.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _161.QueryDepositResponse): _161.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _161.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDepositsRequest;
                fromPartial(object: Partial<_161.QueryDepositsRequest>): _161.QueryDepositsRequest;
                fromAmino(object: _161.QueryDepositsRequestAmino): _161.QueryDepositsRequest;
                toAmino(message: _161.QueryDepositsRequest): _161.QueryDepositsRequestAmino;
                fromAminoMsg(object: _161.QueryDepositsRequestAminoMsg): _161.QueryDepositsRequest;
                toAminoMsg(message: _161.QueryDepositsRequest): _161.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryDepositsRequestProtoMsg): _161.QueryDepositsRequest;
                toProto(message: _161.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryDepositsRequest): _161.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _161.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDepositsResponse;
                fromPartial(object: Partial<_161.QueryDepositsResponse>): _161.QueryDepositsResponse;
                fromAmino(object: _161.QueryDepositsResponseAmino): _161.QueryDepositsResponse;
                toAmino(message: _161.QueryDepositsResponse): _161.QueryDepositsResponseAmino;
                fromAminoMsg(object: _161.QueryDepositsResponseAminoMsg): _161.QueryDepositsResponse;
                toAminoMsg(message: _161.QueryDepositsResponse): _161.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryDepositsResponseProtoMsg): _161.QueryDepositsResponse;
                toProto(message: _161.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryDepositsResponse): _161.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _161.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryTallyResultRequest;
                fromPartial(object: Partial<_161.QueryTallyResultRequest>): _161.QueryTallyResultRequest;
                fromAmino(object: _161.QueryTallyResultRequestAmino): _161.QueryTallyResultRequest;
                toAmino(message: _161.QueryTallyResultRequest): _161.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _161.QueryTallyResultRequestAminoMsg): _161.QueryTallyResultRequest;
                toAminoMsg(message: _161.QueryTallyResultRequest): _161.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _161.QueryTallyResultRequestProtoMsg): _161.QueryTallyResultRequest;
                toProto(message: _161.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _161.QueryTallyResultRequest): _161.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _161.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryTallyResultResponse;
                fromPartial(object: Partial<_161.QueryTallyResultResponse>): _161.QueryTallyResultResponse;
                fromAmino(object: _161.QueryTallyResultResponseAmino): _161.QueryTallyResultResponse;
                toAmino(message: _161.QueryTallyResultResponse): _161.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _161.QueryTallyResultResponseAminoMsg): _161.QueryTallyResultResponse;
                toAminoMsg(message: _161.QueryTallyResultResponse): _161.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _161.QueryTallyResultResponseProtoMsg): _161.QueryTallyResultResponse;
                toProto(message: _161.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _161.QueryTallyResultResponse): _161.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _160.VoteOption;
            voteOptionToJSON(object: _160.VoteOption): string;
            proposalStatusFromJSON(object: any): _160.ProposalStatus;
            proposalStatusToJSON(object: _160.ProposalStatus): string;
            VoteOption: typeof _160.VoteOption;
            VoteOptionSDKType: typeof _160.VoteOption;
            VoteOptionAmino: typeof _160.VoteOption;
            ProposalStatus: typeof _160.ProposalStatus;
            ProposalStatusSDKType: typeof _160.ProposalStatus;
            ProposalStatusAmino: typeof _160.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _160.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.WeightedVoteOption;
                fromPartial(object: Partial<_160.WeightedVoteOption>): _160.WeightedVoteOption;
                fromAmino(object: _160.WeightedVoteOptionAmino): _160.WeightedVoteOption;
                toAmino(message: _160.WeightedVoteOption): _160.WeightedVoteOptionAmino;
                fromAminoMsg(object: _160.WeightedVoteOptionAminoMsg): _160.WeightedVoteOption;
                toAminoMsg(message: _160.WeightedVoteOption): _160.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _160.WeightedVoteOptionProtoMsg): _160.WeightedVoteOption;
                toProto(message: _160.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _160.WeightedVoteOption): _160.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _160.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.Deposit;
                fromPartial(object: Partial<_160.Deposit>): _160.Deposit;
                fromAmino(object: _160.DepositAmino): _160.Deposit;
                toAmino(message: _160.Deposit): _160.DepositAmino;
                fromAminoMsg(object: _160.DepositAminoMsg): _160.Deposit;
                toAminoMsg(message: _160.Deposit): _160.DepositAminoMsg;
                fromProtoMsg(message: _160.DepositProtoMsg): _160.Deposit;
                toProto(message: _160.Deposit): Uint8Array;
                toProtoMsg(message: _160.Deposit): _160.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _160.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.Proposal;
                fromPartial(object: Partial<_160.Proposal>): _160.Proposal;
                fromAmino(object: _160.ProposalAmino): _160.Proposal;
                toAmino(message: _160.Proposal): _160.ProposalAmino;
                fromAminoMsg(object: _160.ProposalAminoMsg): _160.Proposal;
                toAminoMsg(message: _160.Proposal): _160.ProposalAminoMsg;
                fromProtoMsg(message: _160.ProposalProtoMsg): _160.Proposal;
                toProto(message: _160.Proposal): Uint8Array;
                toProtoMsg(message: _160.Proposal): _160.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _160.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.TallyResult;
                fromPartial(object: Partial<_160.TallyResult>): _160.TallyResult;
                fromAmino(object: _160.TallyResultAmino): _160.TallyResult;
                toAmino(message: _160.TallyResult): _160.TallyResultAmino;
                fromAminoMsg(object: _160.TallyResultAminoMsg): _160.TallyResult;
                toAminoMsg(message: _160.TallyResult): _160.TallyResultAminoMsg;
                fromProtoMsg(message: _160.TallyResultProtoMsg): _160.TallyResult;
                toProto(message: _160.TallyResult): Uint8Array;
                toProtoMsg(message: _160.TallyResult): _160.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _160.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.Vote;
                fromPartial(object: Partial<_160.Vote>): _160.Vote;
                fromAmino(object: _160.VoteAmino): _160.Vote;
                toAmino(message: _160.Vote): _160.VoteAmino;
                fromAminoMsg(object: _160.VoteAminoMsg): _160.Vote;
                toAminoMsg(message: _160.Vote): _160.VoteAminoMsg;
                fromProtoMsg(message: _160.VoteProtoMsg): _160.Vote;
                toProto(message: _160.Vote): Uint8Array;
                toProtoMsg(message: _160.Vote): _160.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _160.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.DepositParams;
                fromPartial(object: Partial<_160.DepositParams>): _160.DepositParams;
                fromAmino(object: _160.DepositParamsAmino): _160.DepositParams;
                toAmino(message: _160.DepositParams): _160.DepositParamsAmino;
                fromAminoMsg(object: _160.DepositParamsAminoMsg): _160.DepositParams;
                toAminoMsg(message: _160.DepositParams): _160.DepositParamsAminoMsg;
                fromProtoMsg(message: _160.DepositParamsProtoMsg): _160.DepositParams;
                toProto(message: _160.DepositParams): Uint8Array;
                toProtoMsg(message: _160.DepositParams): _160.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _160.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.VotingParams;
                fromPartial(object: Partial<_160.VotingParams>): _160.VotingParams;
                fromAmino(object: _160.VotingParamsAmino): _160.VotingParams;
                toAmino(message: _160.VotingParams): _160.VotingParamsAmino;
                fromAminoMsg(object: _160.VotingParamsAminoMsg): _160.VotingParams;
                toAminoMsg(message: _160.VotingParams): _160.VotingParamsAminoMsg;
                fromProtoMsg(message: _160.VotingParamsProtoMsg): _160.VotingParams;
                toProto(message: _160.VotingParams): Uint8Array;
                toProtoMsg(message: _160.VotingParams): _160.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _160.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.TallyParams;
                fromPartial(object: Partial<_160.TallyParams>): _160.TallyParams;
                fromAmino(object: _160.TallyParamsAmino): _160.TallyParams;
                toAmino(message: _160.TallyParams): _160.TallyParamsAmino;
                fromAminoMsg(object: _160.TallyParamsAminoMsg): _160.TallyParams;
                toAminoMsg(message: _160.TallyParams): _160.TallyParamsAminoMsg;
                fromProtoMsg(message: _160.TallyParamsProtoMsg): _160.TallyParams;
                toProto(message: _160.TallyParams): Uint8Array;
                toProtoMsg(message: _160.TallyParams): _160.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _160.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.Params;
                fromPartial(object: Partial<_160.Params>): _160.Params;
                fromAmino(object: _160.ParamsAmino): _160.Params;
                toAmino(message: _160.Params): _160.ParamsAmino;
                fromAminoMsg(object: _160.ParamsAminoMsg): _160.Params;
                toAminoMsg(message: _160.Params): _160.ParamsAminoMsg;
                fromProtoMsg(message: _160.ParamsProtoMsg): _160.Params;
                toProto(message: _160.Params): Uint8Array;
                toProtoMsg(message: _160.Params): _160.ParamsProtoMsg;
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
        };
        const v1beta1: {
            MsgClientImpl: typeof _416.MsgClientImpl;
            QueryClientImpl: typeof _397.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _165.QueryProposalRequest): Promise<_165.QueryProposalResponse>;
                proposals(request: _165.QueryProposalsRequest): Promise<_165.QueryProposalsResponse>;
                vote(request: _165.QueryVoteRequest): Promise<_165.QueryVoteResponse>;
                votes(request: _165.QueryVotesRequest): Promise<_165.QueryVotesResponse>;
                params(request: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                deposit(request: _165.QueryDepositRequest): Promise<_165.QueryDepositResponse>;
                deposits(request: _165.QueryDepositsRequest): Promise<_165.QueryDepositsResponse>;
                tallyResult(request: _165.QueryTallyResultRequest): Promise<_165.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _376.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _166.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _166.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _166.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _166.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _166.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _166.MsgSubmitProposal;
                    };
                    vote(value: _166.MsgVote): {
                        typeUrl: string;
                        value: _166.MsgVote;
                    };
                    voteWeighted(value: _166.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _166.MsgVoteWeighted;
                    };
                    deposit(value: _166.MsgDeposit): {
                        typeUrl: string;
                        value: _166.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _166.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _166.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _166.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _166.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _166.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _166.MsgSubmitProposal;
                    };
                    vote(value: _166.MsgVote): {
                        typeUrl: string;
                        value: _166.MsgVote;
                    };
                    voteWeighted(value: _166.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _166.MsgVoteWeighted;
                    };
                    deposit(value: _166.MsgDeposit): {
                        typeUrl: string;
                        value: _166.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _166.MsgSubmitProposal) => _166.MsgSubmitProposalAmino;
                    fromAmino: (object: _166.MsgSubmitProposalAmino) => _166.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _166.MsgVote) => _166.MsgVoteAmino;
                    fromAmino: (object: _166.MsgVoteAmino) => _166.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _166.MsgVoteWeighted) => _166.MsgVoteWeightedAmino;
                    fromAmino: (object: _166.MsgVoteWeightedAmino) => _166.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _166.MsgDeposit) => _166.MsgDepositAmino;
                    fromAmino: (object: _166.MsgDepositAmino) => _166.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _166.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgSubmitProposal;
                fromPartial(object: Partial<_166.MsgSubmitProposal>): _166.MsgSubmitProposal;
                fromAmino(object: _166.MsgSubmitProposalAmino): _166.MsgSubmitProposal;
                toAmino(message: _166.MsgSubmitProposal): _166.MsgSubmitProposalAmino;
                fromAminoMsg(object: _166.MsgSubmitProposalAminoMsg): _166.MsgSubmitProposal;
                toAminoMsg(message: _166.MsgSubmitProposal): _166.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _166.MsgSubmitProposalProtoMsg): _166.MsgSubmitProposal;
                toProto(message: _166.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _166.MsgSubmitProposal): _166.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _166.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_166.MsgSubmitProposalResponse>): _166.MsgSubmitProposalResponse;
                fromAmino(object: _166.MsgSubmitProposalResponseAmino): _166.MsgSubmitProposalResponse;
                toAmino(message: _166.MsgSubmitProposalResponse): _166.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _166.MsgSubmitProposalResponseAminoMsg): _166.MsgSubmitProposalResponse;
                toAminoMsg(message: _166.MsgSubmitProposalResponse): _166.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _166.MsgSubmitProposalResponseProtoMsg): _166.MsgSubmitProposalResponse;
                toProto(message: _166.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _166.MsgSubmitProposalResponse): _166.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _166.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgVote;
                fromPartial(object: Partial<_166.MsgVote>): _166.MsgVote;
                fromAmino(object: _166.MsgVoteAmino): _166.MsgVote;
                toAmino(message: _166.MsgVote): _166.MsgVoteAmino;
                fromAminoMsg(object: _166.MsgVoteAminoMsg): _166.MsgVote;
                toAminoMsg(message: _166.MsgVote): _166.MsgVoteAminoMsg;
                fromProtoMsg(message: _166.MsgVoteProtoMsg): _166.MsgVote;
                toProto(message: _166.MsgVote): Uint8Array;
                toProtoMsg(message: _166.MsgVote): _166.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _166.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _166.MsgVoteResponse;
                fromPartial(_: Partial<_166.MsgVoteResponse>): _166.MsgVoteResponse;
                fromAmino(_: _166.MsgVoteResponseAmino): _166.MsgVoteResponse;
                toAmino(_: _166.MsgVoteResponse): _166.MsgVoteResponseAmino;
                fromAminoMsg(object: _166.MsgVoteResponseAminoMsg): _166.MsgVoteResponse;
                toAminoMsg(message: _166.MsgVoteResponse): _166.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _166.MsgVoteResponseProtoMsg): _166.MsgVoteResponse;
                toProto(message: _166.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _166.MsgVoteResponse): _166.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _166.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgVoteWeighted;
                fromPartial(object: Partial<_166.MsgVoteWeighted>): _166.MsgVoteWeighted;
                fromAmino(object: _166.MsgVoteWeightedAmino): _166.MsgVoteWeighted;
                toAmino(message: _166.MsgVoteWeighted): _166.MsgVoteWeightedAmino;
                fromAminoMsg(object: _166.MsgVoteWeightedAminoMsg): _166.MsgVoteWeighted;
                toAminoMsg(message: _166.MsgVoteWeighted): _166.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _166.MsgVoteWeightedProtoMsg): _166.MsgVoteWeighted;
                toProto(message: _166.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _166.MsgVoteWeighted): _166.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _166.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _166.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_166.MsgVoteWeightedResponse>): _166.MsgVoteWeightedResponse;
                fromAmino(_: _166.MsgVoteWeightedResponseAmino): _166.MsgVoteWeightedResponse;
                toAmino(_: _166.MsgVoteWeightedResponse): _166.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _166.MsgVoteWeightedResponseAminoMsg): _166.MsgVoteWeightedResponse;
                toAminoMsg(message: _166.MsgVoteWeightedResponse): _166.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _166.MsgVoteWeightedResponseProtoMsg): _166.MsgVoteWeightedResponse;
                toProto(message: _166.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _166.MsgVoteWeightedResponse): _166.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _166.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgDeposit;
                fromPartial(object: Partial<_166.MsgDeposit>): _166.MsgDeposit;
                fromAmino(object: _166.MsgDepositAmino): _166.MsgDeposit;
                toAmino(message: _166.MsgDeposit): _166.MsgDepositAmino;
                fromAminoMsg(object: _166.MsgDepositAminoMsg): _166.MsgDeposit;
                toAminoMsg(message: _166.MsgDeposit): _166.MsgDepositAminoMsg;
                fromProtoMsg(message: _166.MsgDepositProtoMsg): _166.MsgDeposit;
                toProto(message: _166.MsgDeposit): Uint8Array;
                toProtoMsg(message: _166.MsgDeposit): _166.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _166.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _166.MsgDepositResponse;
                fromPartial(_: Partial<_166.MsgDepositResponse>): _166.MsgDepositResponse;
                fromAmino(_: _166.MsgDepositResponseAmino): _166.MsgDepositResponse;
                toAmino(_: _166.MsgDepositResponse): _166.MsgDepositResponseAmino;
                fromAminoMsg(object: _166.MsgDepositResponseAminoMsg): _166.MsgDepositResponse;
                toAminoMsg(message: _166.MsgDepositResponse): _166.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _166.MsgDepositResponseProtoMsg): _166.MsgDepositResponse;
                toProto(message: _166.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _166.MsgDepositResponse): _166.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("../osmosis/gamm/v1beta1/gov").ReplaceMigrationRecordsProposal | import("../osmosis/gamm/v1beta1/gov").UpdateMigrationRecordsProposal | import("../osmosis/gamm/v1beta1/gov").CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal | import("../osmosis/gamm/v1beta1/gov").SetScalingFactorControllerProposal | import("../osmosis/poolincentives/v1beta1/gov").ReplacePoolIncentivesProposal | import("../osmosis/poolincentives/v1beta1/gov").UpdatePoolIncentivesProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevEnabledProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevAdminAccountProposal | import("../osmosis/txfees/v1beta1/gov").UpdateFeeTokenProposal | _142.CommunityPoolSpendProposal | _142.CommunityPoolSpendProposalWithDeposit | import("../osmosis/superfluid/v1beta1/gov").SetSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").RemoveSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").UpdateUnpoolWhiteListProposal | _190.ParameterChangeProposal | _212.SoftwareUpgradeProposal | _212.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _164.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _165.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryProposalRequest;
                fromPartial(object: Partial<_165.QueryProposalRequest>): _165.QueryProposalRequest;
                fromAmino(object: _165.QueryProposalRequestAmino): _165.QueryProposalRequest;
                toAmino(message: _165.QueryProposalRequest): _165.QueryProposalRequestAmino;
                fromAminoMsg(object: _165.QueryProposalRequestAminoMsg): _165.QueryProposalRequest;
                toAminoMsg(message: _165.QueryProposalRequest): _165.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _165.QueryProposalRequestProtoMsg): _165.QueryProposalRequest;
                toProto(message: _165.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _165.QueryProposalRequest): _165.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _165.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryProposalResponse;
                fromPartial(object: Partial<_165.QueryProposalResponse>): _165.QueryProposalResponse;
                fromAmino(object: _165.QueryProposalResponseAmino): _165.QueryProposalResponse;
                toAmino(message: _165.QueryProposalResponse): _165.QueryProposalResponseAmino;
                fromAminoMsg(object: _165.QueryProposalResponseAminoMsg): _165.QueryProposalResponse;
                toAminoMsg(message: _165.QueryProposalResponse): _165.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _165.QueryProposalResponseProtoMsg): _165.QueryProposalResponse;
                toProto(message: _165.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _165.QueryProposalResponse): _165.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _165.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryProposalsRequest;
                fromPartial(object: Partial<_165.QueryProposalsRequest>): _165.QueryProposalsRequest;
                fromAmino(object: _165.QueryProposalsRequestAmino): _165.QueryProposalsRequest;
                toAmino(message: _165.QueryProposalsRequest): _165.QueryProposalsRequestAmino;
                fromAminoMsg(object: _165.QueryProposalsRequestAminoMsg): _165.QueryProposalsRequest;
                toAminoMsg(message: _165.QueryProposalsRequest): _165.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _165.QueryProposalsRequestProtoMsg): _165.QueryProposalsRequest;
                toProto(message: _165.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _165.QueryProposalsRequest): _165.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _165.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryProposalsResponse;
                fromPartial(object: Partial<_165.QueryProposalsResponse>): _165.QueryProposalsResponse;
                fromAmino(object: _165.QueryProposalsResponseAmino): _165.QueryProposalsResponse;
                toAmino(message: _165.QueryProposalsResponse): _165.QueryProposalsResponseAmino;
                fromAminoMsg(object: _165.QueryProposalsResponseAminoMsg): _165.QueryProposalsResponse;
                toAminoMsg(message: _165.QueryProposalsResponse): _165.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _165.QueryProposalsResponseProtoMsg): _165.QueryProposalsResponse;
                toProto(message: _165.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _165.QueryProposalsResponse): _165.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _165.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryVoteRequest;
                fromPartial(object: Partial<_165.QueryVoteRequest>): _165.QueryVoteRequest;
                fromAmino(object: _165.QueryVoteRequestAmino): _165.QueryVoteRequest;
                toAmino(message: _165.QueryVoteRequest): _165.QueryVoteRequestAmino;
                fromAminoMsg(object: _165.QueryVoteRequestAminoMsg): _165.QueryVoteRequest;
                toAminoMsg(message: _165.QueryVoteRequest): _165.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _165.QueryVoteRequestProtoMsg): _165.QueryVoteRequest;
                toProto(message: _165.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _165.QueryVoteRequest): _165.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _165.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryVoteResponse;
                fromPartial(object: Partial<_165.QueryVoteResponse>): _165.QueryVoteResponse;
                fromAmino(object: _165.QueryVoteResponseAmino): _165.QueryVoteResponse;
                toAmino(message: _165.QueryVoteResponse): _165.QueryVoteResponseAmino;
                fromAminoMsg(object: _165.QueryVoteResponseAminoMsg): _165.QueryVoteResponse;
                toAminoMsg(message: _165.QueryVoteResponse): _165.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _165.QueryVoteResponseProtoMsg): _165.QueryVoteResponse;
                toProto(message: _165.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _165.QueryVoteResponse): _165.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _165.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryVotesRequest;
                fromPartial(object: Partial<_165.QueryVotesRequest>): _165.QueryVotesRequest;
                fromAmino(object: _165.QueryVotesRequestAmino): _165.QueryVotesRequest;
                toAmino(message: _165.QueryVotesRequest): _165.QueryVotesRequestAmino;
                fromAminoMsg(object: _165.QueryVotesRequestAminoMsg): _165.QueryVotesRequest;
                toAminoMsg(message: _165.QueryVotesRequest): _165.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _165.QueryVotesRequestProtoMsg): _165.QueryVotesRequest;
                toProto(message: _165.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _165.QueryVotesRequest): _165.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _165.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryVotesResponse;
                fromPartial(object: Partial<_165.QueryVotesResponse>): _165.QueryVotesResponse;
                fromAmino(object: _165.QueryVotesResponseAmino): _165.QueryVotesResponse;
                toAmino(message: _165.QueryVotesResponse): _165.QueryVotesResponseAmino;
                fromAminoMsg(object: _165.QueryVotesResponseAminoMsg): _165.QueryVotesResponse;
                toAminoMsg(message: _165.QueryVotesResponse): _165.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _165.QueryVotesResponseProtoMsg): _165.QueryVotesResponse;
                toProto(message: _165.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _165.QueryVotesResponse): _165.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _165.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryParamsRequest;
                fromPartial(object: Partial<_165.QueryParamsRequest>): _165.QueryParamsRequest;
                fromAmino(object: _165.QueryParamsRequestAmino): _165.QueryParamsRequest;
                toAmino(message: _165.QueryParamsRequest): _165.QueryParamsRequestAmino;
                fromAminoMsg(object: _165.QueryParamsRequestAminoMsg): _165.QueryParamsRequest;
                toAminoMsg(message: _165.QueryParamsRequest): _165.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _165.QueryParamsRequestProtoMsg): _165.QueryParamsRequest;
                toProto(message: _165.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _165.QueryParamsRequest): _165.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _165.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryParamsResponse;
                fromPartial(object: Partial<_165.QueryParamsResponse>): _165.QueryParamsResponse;
                fromAmino(object: _165.QueryParamsResponseAmino): _165.QueryParamsResponse;
                toAmino(message: _165.QueryParamsResponse): _165.QueryParamsResponseAmino;
                fromAminoMsg(object: _165.QueryParamsResponseAminoMsg): _165.QueryParamsResponse;
                toAminoMsg(message: _165.QueryParamsResponse): _165.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _165.QueryParamsResponseProtoMsg): _165.QueryParamsResponse;
                toProto(message: _165.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _165.QueryParamsResponse): _165.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _165.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryDepositRequest;
                fromPartial(object: Partial<_165.QueryDepositRequest>): _165.QueryDepositRequest;
                fromAmino(object: _165.QueryDepositRequestAmino): _165.QueryDepositRequest;
                toAmino(message: _165.QueryDepositRequest): _165.QueryDepositRequestAmino;
                fromAminoMsg(object: _165.QueryDepositRequestAminoMsg): _165.QueryDepositRequest;
                toAminoMsg(message: _165.QueryDepositRequest): _165.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _165.QueryDepositRequestProtoMsg): _165.QueryDepositRequest;
                toProto(message: _165.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _165.QueryDepositRequest): _165.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _165.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryDepositResponse;
                fromPartial(object: Partial<_165.QueryDepositResponse>): _165.QueryDepositResponse;
                fromAmino(object: _165.QueryDepositResponseAmino): _165.QueryDepositResponse;
                toAmino(message: _165.QueryDepositResponse): _165.QueryDepositResponseAmino;
                fromAminoMsg(object: _165.QueryDepositResponseAminoMsg): _165.QueryDepositResponse;
                toAminoMsg(message: _165.QueryDepositResponse): _165.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _165.QueryDepositResponseProtoMsg): _165.QueryDepositResponse;
                toProto(message: _165.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _165.QueryDepositResponse): _165.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _165.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryDepositsRequest;
                fromPartial(object: Partial<_165.QueryDepositsRequest>): _165.QueryDepositsRequest;
                fromAmino(object: _165.QueryDepositsRequestAmino): _165.QueryDepositsRequest;
                toAmino(message: _165.QueryDepositsRequest): _165.QueryDepositsRequestAmino;
                fromAminoMsg(object: _165.QueryDepositsRequestAminoMsg): _165.QueryDepositsRequest;
                toAminoMsg(message: _165.QueryDepositsRequest): _165.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _165.QueryDepositsRequestProtoMsg): _165.QueryDepositsRequest;
                toProto(message: _165.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _165.QueryDepositsRequest): _165.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _165.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryDepositsResponse;
                fromPartial(object: Partial<_165.QueryDepositsResponse>): _165.QueryDepositsResponse;
                fromAmino(object: _165.QueryDepositsResponseAmino): _165.QueryDepositsResponse;
                toAmino(message: _165.QueryDepositsResponse): _165.QueryDepositsResponseAmino;
                fromAminoMsg(object: _165.QueryDepositsResponseAminoMsg): _165.QueryDepositsResponse;
                toAminoMsg(message: _165.QueryDepositsResponse): _165.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _165.QueryDepositsResponseProtoMsg): _165.QueryDepositsResponse;
                toProto(message: _165.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _165.QueryDepositsResponse): _165.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _165.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryTallyResultRequest;
                fromPartial(object: Partial<_165.QueryTallyResultRequest>): _165.QueryTallyResultRequest;
                fromAmino(object: _165.QueryTallyResultRequestAmino): _165.QueryTallyResultRequest;
                toAmino(message: _165.QueryTallyResultRequest): _165.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _165.QueryTallyResultRequestAminoMsg): _165.QueryTallyResultRequest;
                toAminoMsg(message: _165.QueryTallyResultRequest): _165.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _165.QueryTallyResultRequestProtoMsg): _165.QueryTallyResultRequest;
                toProto(message: _165.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _165.QueryTallyResultRequest): _165.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _165.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.QueryTallyResultResponse;
                fromPartial(object: Partial<_165.QueryTallyResultResponse>): _165.QueryTallyResultResponse;
                fromAmino(object: _165.QueryTallyResultResponseAmino): _165.QueryTallyResultResponse;
                toAmino(message: _165.QueryTallyResultResponse): _165.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _165.QueryTallyResultResponseAminoMsg): _165.QueryTallyResultResponse;
                toAminoMsg(message: _165.QueryTallyResultResponse): _165.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _165.QueryTallyResultResponseProtoMsg): _165.QueryTallyResultResponse;
                toProto(message: _165.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _165.QueryTallyResultResponse): _165.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _164.VoteOption;
            voteOptionToJSON(object: _164.VoteOption): string;
            proposalStatusFromJSON(object: any): _164.ProposalStatus;
            proposalStatusToJSON(object: _164.ProposalStatus): string;
            VoteOption: typeof _164.VoteOption;
            VoteOptionSDKType: typeof _164.VoteOption;
            VoteOptionAmino: typeof _164.VoteOption;
            ProposalStatus: typeof _164.ProposalStatus;
            ProposalStatusSDKType: typeof _164.ProposalStatus;
            ProposalStatusAmino: typeof _164.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _164.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.WeightedVoteOption;
                fromPartial(object: Partial<_164.WeightedVoteOption>): _164.WeightedVoteOption;
                fromAmino(object: _164.WeightedVoteOptionAmino): _164.WeightedVoteOption;
                toAmino(message: _164.WeightedVoteOption): _164.WeightedVoteOptionAmino;
                fromAminoMsg(object: _164.WeightedVoteOptionAminoMsg): _164.WeightedVoteOption;
                toAminoMsg(message: _164.WeightedVoteOption): _164.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _164.WeightedVoteOptionProtoMsg): _164.WeightedVoteOption;
                toProto(message: _164.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _164.WeightedVoteOption): _164.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _164.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.TextProposal;
                fromPartial(object: Partial<_164.TextProposal>): _164.TextProposal;
                fromAmino(object: _164.TextProposalAmino): _164.TextProposal;
                toAmino(message: _164.TextProposal): _164.TextProposalAmino;
                fromAminoMsg(object: _164.TextProposalAminoMsg): _164.TextProposal;
                toAminoMsg(message: _164.TextProposal): _164.TextProposalAminoMsg;
                fromProtoMsg(message: _164.TextProposalProtoMsg): _164.TextProposal;
                toProto(message: _164.TextProposal): Uint8Array;
                toProtoMsg(message: _164.TextProposal): _164.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _164.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.Deposit;
                fromPartial(object: Partial<_164.Deposit>): _164.Deposit;
                fromAmino(object: _164.DepositAmino): _164.Deposit;
                toAmino(message: _164.Deposit): _164.DepositAmino;
                fromAminoMsg(object: _164.DepositAminoMsg): _164.Deposit;
                toAminoMsg(message: _164.Deposit): _164.DepositAminoMsg;
                fromProtoMsg(message: _164.DepositProtoMsg): _164.Deposit;
                toProto(message: _164.Deposit): Uint8Array;
                toProtoMsg(message: _164.Deposit): _164.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _164.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.Proposal;
                fromPartial(object: Partial<_164.Proposal>): _164.Proposal;
                fromAmino(object: _164.ProposalAmino): _164.Proposal;
                toAmino(message: _164.Proposal): _164.ProposalAmino;
                fromAminoMsg(object: _164.ProposalAminoMsg): _164.Proposal;
                toAminoMsg(message: _164.Proposal): _164.ProposalAminoMsg;
                fromProtoMsg(message: _164.ProposalProtoMsg): _164.Proposal;
                toProto(message: _164.Proposal): Uint8Array;
                toProtoMsg(message: _164.Proposal): _164.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _164.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.TallyResult;
                fromPartial(object: Partial<_164.TallyResult>): _164.TallyResult;
                fromAmino(object: _164.TallyResultAmino): _164.TallyResult;
                toAmino(message: _164.TallyResult): _164.TallyResultAmino;
                fromAminoMsg(object: _164.TallyResultAminoMsg): _164.TallyResult;
                toAminoMsg(message: _164.TallyResult): _164.TallyResultAminoMsg;
                fromProtoMsg(message: _164.TallyResultProtoMsg): _164.TallyResult;
                toProto(message: _164.TallyResult): Uint8Array;
                toProtoMsg(message: _164.TallyResult): _164.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _164.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.Vote;
                fromPartial(object: Partial<_164.Vote>): _164.Vote;
                fromAmino(object: _164.VoteAmino): _164.Vote;
                toAmino(message: _164.Vote): _164.VoteAmino;
                fromAminoMsg(object: _164.VoteAminoMsg): _164.Vote;
                toAminoMsg(message: _164.Vote): _164.VoteAminoMsg;
                fromProtoMsg(message: _164.VoteProtoMsg): _164.Vote;
                toProto(message: _164.Vote): Uint8Array;
                toProtoMsg(message: _164.Vote): _164.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _164.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.DepositParams;
                fromPartial(object: Partial<_164.DepositParams>): _164.DepositParams;
                fromAmino(object: _164.DepositParamsAmino): _164.DepositParams;
                toAmino(message: _164.DepositParams): _164.DepositParamsAmino;
                fromAminoMsg(object: _164.DepositParamsAminoMsg): _164.DepositParams;
                toAminoMsg(message: _164.DepositParams): _164.DepositParamsAminoMsg;
                fromProtoMsg(message: _164.DepositParamsProtoMsg): _164.DepositParams;
                toProto(message: _164.DepositParams): Uint8Array;
                toProtoMsg(message: _164.DepositParams): _164.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _164.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.VotingParams;
                fromPartial(object: Partial<_164.VotingParams>): _164.VotingParams;
                fromAmino(object: _164.VotingParamsAmino): _164.VotingParams;
                toAmino(message: _164.VotingParams): _164.VotingParamsAmino;
                fromAminoMsg(object: _164.VotingParamsAminoMsg): _164.VotingParams;
                toAminoMsg(message: _164.VotingParams): _164.VotingParamsAminoMsg;
                fromProtoMsg(message: _164.VotingParamsProtoMsg): _164.VotingParams;
                toProto(message: _164.VotingParams): Uint8Array;
                toProtoMsg(message: _164.VotingParams): _164.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _164.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.TallyParams;
                fromPartial(object: Partial<_164.TallyParams>): _164.TallyParams;
                fromAmino(object: _164.TallyParamsAmino): _164.TallyParams;
                toAmino(message: _164.TallyParams): _164.TallyParamsAmino;
                fromAminoMsg(object: _164.TallyParamsAminoMsg): _164.TallyParams;
                toAminoMsg(message: _164.TallyParams): _164.TallyParamsAminoMsg;
                fromProtoMsg(message: _164.TallyParamsProtoMsg): _164.TallyParams;
                toProto(message: _164.TallyParams): Uint8Array;
                toProtoMsg(message: _164.TallyParams): _164.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _163.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.GenesisState;
                fromPartial(object: Partial<_163.GenesisState>): _163.GenesisState;
                fromAmino(object: _163.GenesisStateAmino): _163.GenesisState;
                toAmino(message: _163.GenesisState): _163.GenesisStateAmino;
                fromAminoMsg(object: _163.GenesisStateAminoMsg): _163.GenesisState;
                toAminoMsg(message: _163.GenesisState): _163.GenesisStateAminoMsg;
                fromProtoMsg(message: _163.GenesisStateProtoMsg): _163.GenesisState;
                toProto(message: _163.GenesisState): Uint8Array;
                toProtoMsg(message: _163.GenesisState): _163.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
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
        const v1: {
            MsgClientImpl: typeof _417.MsgClientImpl;
            QueryClientImpl: typeof _398.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _170.QueryGroupInfoRequest): Promise<_170.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _170.QueryGroupPolicyInfoRequest): Promise<_170.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _170.QueryGroupMembersRequest): Promise<_170.QueryGroupMembersResponse>;
                groupsByAdmin(request: _170.QueryGroupsByAdminRequest): Promise<_170.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _170.QueryGroupPoliciesByGroupRequest): Promise<_170.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _170.QueryGroupPoliciesByAdminRequest): Promise<_170.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _170.QueryProposalRequest): Promise<_170.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _170.QueryProposalsByGroupPolicyRequest): Promise<_170.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _170.QueryVoteByProposalVoterRequest): Promise<_170.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _170.QueryVotesByProposalRequest): Promise<_170.QueryVotesByProposalResponse>;
                votesByVoter(request: _170.QueryVotesByVoterRequest): Promise<_170.QueryVotesByVoterResponse>;
                groupsByMember(request: _170.QueryGroupsByMemberRequest): Promise<_170.QueryGroupsByMemberResponse>;
                tallyResult(request: _170.QueryTallyResultRequest): Promise<_170.QueryTallyResultResponse>;
                groups(request?: _170.QueryGroupsRequest): Promise<_170.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _377.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _171.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _171.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _171.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _171.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _171.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _171.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _171.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _171.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _171.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _171.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _171.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _171.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _171.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _171.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _171.MsgCreateGroup): {
                        typeUrl: string;
                        value: _171.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _171.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _171.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _171.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _171.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _171.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _171.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _171.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _171.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _171.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _171.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _171.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _171.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _171.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _171.MsgWithdrawProposal;
                    };
                    vote(value: _171.MsgVote): {
                        typeUrl: string;
                        value: _171.MsgVote;
                    };
                    exec(value: _171.MsgExec): {
                        typeUrl: string;
                        value: _171.MsgExec;
                    };
                    leaveGroup(value: _171.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _171.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _171.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _171.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _171.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _171.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _171.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _171.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _171.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _171.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _171.MsgCreateGroup): {
                        typeUrl: string;
                        value: _171.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _171.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _171.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _171.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _171.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _171.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _171.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _171.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _171.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _171.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _171.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _171.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _171.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _171.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _171.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _171.MsgWithdrawProposal;
                    };
                    vote(value: _171.MsgVote): {
                        typeUrl: string;
                        value: _171.MsgVote;
                    };
                    exec(value: _171.MsgExec): {
                        typeUrl: string;
                        value: _171.MsgExec;
                    };
                    leaveGroup(value: _171.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _171.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _171.MsgCreateGroup) => _171.MsgCreateGroupAmino;
                    fromAmino: (object: _171.MsgCreateGroupAmino) => _171.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _171.MsgUpdateGroupMembers) => _171.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _171.MsgUpdateGroupMembersAmino) => _171.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _171.MsgUpdateGroupAdmin) => _171.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _171.MsgUpdateGroupAdminAmino) => _171.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _171.MsgUpdateGroupMetadata) => _171.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _171.MsgUpdateGroupMetadataAmino) => _171.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _171.MsgCreateGroupPolicy) => _171.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _171.MsgCreateGroupPolicyAmino) => _171.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _171.MsgCreateGroupWithPolicy) => _171.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _171.MsgCreateGroupWithPolicyAmino) => _171.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _171.MsgUpdateGroupPolicyAdmin) => _171.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _171.MsgUpdateGroupPolicyAdminAmino) => _171.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _171.MsgUpdateGroupPolicyDecisionPolicy) => _171.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _171.MsgUpdateGroupPolicyDecisionPolicyAmino) => _171.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _171.MsgUpdateGroupPolicyMetadata) => _171.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _171.MsgUpdateGroupPolicyMetadataAmino) => _171.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _171.MsgSubmitProposal) => _171.MsgSubmitProposalAmino;
                    fromAmino: (object: _171.MsgSubmitProposalAmino) => _171.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _171.MsgWithdrawProposal) => _171.MsgWithdrawProposalAmino;
                    fromAmino: (object: _171.MsgWithdrawProposalAmino) => _171.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _171.MsgVote) => _171.MsgVoteAmino;
                    fromAmino: (object: _171.MsgVoteAmino) => _171.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _171.MsgExec) => _171.MsgExecAmino;
                    fromAmino: (object: _171.MsgExecAmino) => _171.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _171.MsgLeaveGroup) => _171.MsgLeaveGroupAmino;
                    fromAmino: (object: _171.MsgLeaveGroupAmino) => _171.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _172.VoteOption;
            voteOptionToJSON(object: _172.VoteOption): string;
            proposalStatusFromJSON(object: any): _172.ProposalStatus;
            proposalStatusToJSON(object: _172.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _172.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _172.ProposalExecutorResult): string;
            VoteOption: typeof _172.VoteOption;
            VoteOptionSDKType: typeof _172.VoteOption;
            VoteOptionAmino: typeof _172.VoteOption;
            ProposalStatus: typeof _172.ProposalStatus;
            ProposalStatusSDKType: typeof _172.ProposalStatus;
            ProposalStatusAmino: typeof _172.ProposalStatus;
            ProposalExecutorResult: typeof _172.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _172.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _172.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _172.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.Member;
                fromPartial(object: Partial<_172.Member>): _172.Member;
                fromAmino(object: _172.MemberAmino): _172.Member;
                toAmino(message: _172.Member): _172.MemberAmino;
                fromAminoMsg(object: _172.MemberAminoMsg): _172.Member;
                toAminoMsg(message: _172.Member): _172.MemberAminoMsg;
                fromProtoMsg(message: _172.MemberProtoMsg): _172.Member;
                toProto(message: _172.Member): Uint8Array;
                toProtoMsg(message: _172.Member): _172.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _172.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.MemberRequest;
                fromPartial(object: Partial<_172.MemberRequest>): _172.MemberRequest;
                fromAmino(object: _172.MemberRequestAmino): _172.MemberRequest;
                toAmino(message: _172.MemberRequest): _172.MemberRequestAmino;
                fromAminoMsg(object: _172.MemberRequestAminoMsg): _172.MemberRequest;
                toAminoMsg(message: _172.MemberRequest): _172.MemberRequestAminoMsg;
                fromProtoMsg(message: _172.MemberRequestProtoMsg): _172.MemberRequest;
                toProto(message: _172.MemberRequest): Uint8Array;
                toProtoMsg(message: _172.MemberRequest): _172.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _172.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_172.ThresholdDecisionPolicy>): _172.ThresholdDecisionPolicy;
                fromAmino(object: _172.ThresholdDecisionPolicyAmino): _172.ThresholdDecisionPolicy;
                toAmino(message: _172.ThresholdDecisionPolicy): _172.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _172.ThresholdDecisionPolicyAminoMsg): _172.ThresholdDecisionPolicy;
                toAminoMsg(message: _172.ThresholdDecisionPolicy): _172.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _172.ThresholdDecisionPolicyProtoMsg): _172.ThresholdDecisionPolicy;
                toProto(message: _172.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _172.ThresholdDecisionPolicy): _172.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _172.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.PercentageDecisionPolicy;
                fromPartial(object: Partial<_172.PercentageDecisionPolicy>): _172.PercentageDecisionPolicy;
                fromAmino(object: _172.PercentageDecisionPolicyAmino): _172.PercentageDecisionPolicy;
                toAmino(message: _172.PercentageDecisionPolicy): _172.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _172.PercentageDecisionPolicyAminoMsg): _172.PercentageDecisionPolicy;
                toAminoMsg(message: _172.PercentageDecisionPolicy): _172.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _172.PercentageDecisionPolicyProtoMsg): _172.PercentageDecisionPolicy;
                toProto(message: _172.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _172.PercentageDecisionPolicy): _172.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _172.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.DecisionPolicyWindows;
                fromPartial(object: Partial<_172.DecisionPolicyWindows>): _172.DecisionPolicyWindows;
                fromAmino(object: _172.DecisionPolicyWindowsAmino): _172.DecisionPolicyWindows;
                toAmino(message: _172.DecisionPolicyWindows): _172.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _172.DecisionPolicyWindowsAminoMsg): _172.DecisionPolicyWindows;
                toAminoMsg(message: _172.DecisionPolicyWindows): _172.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _172.DecisionPolicyWindowsProtoMsg): _172.DecisionPolicyWindows;
                toProto(message: _172.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _172.DecisionPolicyWindows): _172.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _172.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.GroupInfo;
                fromPartial(object: Partial<_172.GroupInfo>): _172.GroupInfo;
                fromAmino(object: _172.GroupInfoAmino): _172.GroupInfo;
                toAmino(message: _172.GroupInfo): _172.GroupInfoAmino;
                fromAminoMsg(object: _172.GroupInfoAminoMsg): _172.GroupInfo;
                toAminoMsg(message: _172.GroupInfo): _172.GroupInfoAminoMsg;
                fromProtoMsg(message: _172.GroupInfoProtoMsg): _172.GroupInfo;
                toProto(message: _172.GroupInfo): Uint8Array;
                toProtoMsg(message: _172.GroupInfo): _172.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _172.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.GroupMember;
                fromPartial(object: Partial<_172.GroupMember>): _172.GroupMember;
                fromAmino(object: _172.GroupMemberAmino): _172.GroupMember;
                toAmino(message: _172.GroupMember): _172.GroupMemberAmino;
                fromAminoMsg(object: _172.GroupMemberAminoMsg): _172.GroupMember;
                toAminoMsg(message: _172.GroupMember): _172.GroupMemberAminoMsg;
                fromProtoMsg(message: _172.GroupMemberProtoMsg): _172.GroupMember;
                toProto(message: _172.GroupMember): Uint8Array;
                toProtoMsg(message: _172.GroupMember): _172.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _172.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.GroupPolicyInfo;
                fromPartial(object: Partial<_172.GroupPolicyInfo>): _172.GroupPolicyInfo;
                fromAmino(object: _172.GroupPolicyInfoAmino): _172.GroupPolicyInfo;
                toAmino(message: _172.GroupPolicyInfo): _172.GroupPolicyInfoAmino;
                fromAminoMsg(object: _172.GroupPolicyInfoAminoMsg): _172.GroupPolicyInfo;
                toAminoMsg(message: _172.GroupPolicyInfo): _172.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _172.GroupPolicyInfoProtoMsg): _172.GroupPolicyInfo;
                toProto(message: _172.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _172.GroupPolicyInfo): _172.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _172.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.Proposal;
                fromPartial(object: Partial<_172.Proposal>): _172.Proposal;
                fromAmino(object: _172.ProposalAmino): _172.Proposal;
                toAmino(message: _172.Proposal): _172.ProposalAmino;
                fromAminoMsg(object: _172.ProposalAminoMsg): _172.Proposal;
                toAminoMsg(message: _172.Proposal): _172.ProposalAminoMsg;
                fromProtoMsg(message: _172.ProposalProtoMsg): _172.Proposal;
                toProto(message: _172.Proposal): Uint8Array;
                toProtoMsg(message: _172.Proposal): _172.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _172.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.TallyResult;
                fromPartial(object: Partial<_172.TallyResult>): _172.TallyResult;
                fromAmino(object: _172.TallyResultAmino): _172.TallyResult;
                toAmino(message: _172.TallyResult): _172.TallyResultAmino;
                fromAminoMsg(object: _172.TallyResultAminoMsg): _172.TallyResult;
                toAminoMsg(message: _172.TallyResult): _172.TallyResultAminoMsg;
                fromProtoMsg(message: _172.TallyResultProtoMsg): _172.TallyResult;
                toProto(message: _172.TallyResult): Uint8Array;
                toProtoMsg(message: _172.TallyResult): _172.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _172.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.Vote;
                fromPartial(object: Partial<_172.Vote>): _172.Vote;
                fromAmino(object: _172.VoteAmino): _172.Vote;
                toAmino(message: _172.Vote): _172.VoteAmino;
                fromAminoMsg(object: _172.VoteAminoMsg): _172.Vote;
                toAminoMsg(message: _172.Vote): _172.VoteAminoMsg;
                fromProtoMsg(message: _172.VoteProtoMsg): _172.Vote;
                toProto(message: _172.Vote): Uint8Array;
                toProtoMsg(message: _172.Vote): _172.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _172.ThresholdDecisionPolicy | _172.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _171.Exec;
            execToJSON(object: _171.Exec): string;
            Exec: typeof _171.Exec;
            ExecSDKType: typeof _171.Exec;
            ExecAmino: typeof _171.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _171.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgCreateGroup;
                fromPartial(object: Partial<_171.MsgCreateGroup>): _171.MsgCreateGroup;
                fromAmino(object: _171.MsgCreateGroupAmino): _171.MsgCreateGroup;
                toAmino(message: _171.MsgCreateGroup): _171.MsgCreateGroupAmino;
                fromAminoMsg(object: _171.MsgCreateGroupAminoMsg): _171.MsgCreateGroup;
                toAminoMsg(message: _171.MsgCreateGroup): _171.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _171.MsgCreateGroupProtoMsg): _171.MsgCreateGroup;
                toProto(message: _171.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _171.MsgCreateGroup): _171.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _171.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgCreateGroupResponse;
                fromPartial(object: Partial<_171.MsgCreateGroupResponse>): _171.MsgCreateGroupResponse;
                fromAmino(object: _171.MsgCreateGroupResponseAmino): _171.MsgCreateGroupResponse;
                toAmino(message: _171.MsgCreateGroupResponse): _171.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _171.MsgCreateGroupResponseAminoMsg): _171.MsgCreateGroupResponse;
                toAminoMsg(message: _171.MsgCreateGroupResponse): _171.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _171.MsgCreateGroupResponseProtoMsg): _171.MsgCreateGroupResponse;
                toProto(message: _171.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _171.MsgCreateGroupResponse): _171.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _171.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_171.MsgUpdateGroupMembers>): _171.MsgUpdateGroupMembers;
                fromAmino(object: _171.MsgUpdateGroupMembersAmino): _171.MsgUpdateGroupMembers;
                toAmino(message: _171.MsgUpdateGroupMembers): _171.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupMembersAminoMsg): _171.MsgUpdateGroupMembers;
                toAminoMsg(message: _171.MsgUpdateGroupMembers): _171.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupMembersProtoMsg): _171.MsgUpdateGroupMembers;
                toProto(message: _171.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupMembers): _171.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _171.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_171.MsgUpdateGroupMembersResponse>): _171.MsgUpdateGroupMembersResponse;
                fromAmino(_: _171.MsgUpdateGroupMembersResponseAmino): _171.MsgUpdateGroupMembersResponse;
                toAmino(_: _171.MsgUpdateGroupMembersResponse): _171.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupMembersResponseAminoMsg): _171.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _171.MsgUpdateGroupMembersResponse): _171.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupMembersResponseProtoMsg): _171.MsgUpdateGroupMembersResponse;
                toProto(message: _171.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupMembersResponse): _171.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _171.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_171.MsgUpdateGroupAdmin>): _171.MsgUpdateGroupAdmin;
                fromAmino(object: _171.MsgUpdateGroupAdminAmino): _171.MsgUpdateGroupAdmin;
                toAmino(message: _171.MsgUpdateGroupAdmin): _171.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupAdminAminoMsg): _171.MsgUpdateGroupAdmin;
                toAminoMsg(message: _171.MsgUpdateGroupAdmin): _171.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupAdminProtoMsg): _171.MsgUpdateGroupAdmin;
                toProto(message: _171.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupAdmin): _171.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _171.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_171.MsgUpdateGroupAdminResponse>): _171.MsgUpdateGroupAdminResponse;
                fromAmino(_: _171.MsgUpdateGroupAdminResponseAmino): _171.MsgUpdateGroupAdminResponse;
                toAmino(_: _171.MsgUpdateGroupAdminResponse): _171.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupAdminResponseAminoMsg): _171.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _171.MsgUpdateGroupAdminResponse): _171.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupAdminResponseProtoMsg): _171.MsgUpdateGroupAdminResponse;
                toProto(message: _171.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupAdminResponse): _171.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _171.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_171.MsgUpdateGroupMetadata>): _171.MsgUpdateGroupMetadata;
                fromAmino(object: _171.MsgUpdateGroupMetadataAmino): _171.MsgUpdateGroupMetadata;
                toAmino(message: _171.MsgUpdateGroupMetadata): _171.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupMetadataAminoMsg): _171.MsgUpdateGroupMetadata;
                toAminoMsg(message: _171.MsgUpdateGroupMetadata): _171.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupMetadataProtoMsg): _171.MsgUpdateGroupMetadata;
                toProto(message: _171.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupMetadata): _171.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _171.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_171.MsgUpdateGroupMetadataResponse>): _171.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _171.MsgUpdateGroupMetadataResponseAmino): _171.MsgUpdateGroupMetadataResponse;
                toAmino(_: _171.MsgUpdateGroupMetadataResponse): _171.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupMetadataResponseAminoMsg): _171.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _171.MsgUpdateGroupMetadataResponse): _171.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupMetadataResponseProtoMsg): _171.MsgUpdateGroupMetadataResponse;
                toProto(message: _171.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupMetadataResponse): _171.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _171.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_171.MsgCreateGroupPolicy>): _171.MsgCreateGroupPolicy;
                fromAmino(object: _171.MsgCreateGroupPolicyAmino): _171.MsgCreateGroupPolicy;
                toAmino(message: _171.MsgCreateGroupPolicy): _171.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _171.MsgCreateGroupPolicyAminoMsg): _171.MsgCreateGroupPolicy;
                toAminoMsg(message: _171.MsgCreateGroupPolicy): _171.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _171.MsgCreateGroupPolicyProtoMsg): _171.MsgCreateGroupPolicy;
                toProto(message: _171.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _171.MsgCreateGroupPolicy): _171.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _171.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_171.MsgCreateGroupPolicyResponse>): _171.MsgCreateGroupPolicyResponse;
                fromAmino(object: _171.MsgCreateGroupPolicyResponseAmino): _171.MsgCreateGroupPolicyResponse;
                toAmino(message: _171.MsgCreateGroupPolicyResponse): _171.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _171.MsgCreateGroupPolicyResponseAminoMsg): _171.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _171.MsgCreateGroupPolicyResponse): _171.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _171.MsgCreateGroupPolicyResponseProtoMsg): _171.MsgCreateGroupPolicyResponse;
                toProto(message: _171.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _171.MsgCreateGroupPolicyResponse): _171.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _171.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_171.MsgUpdateGroupPolicyAdmin>): _171.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _171.MsgUpdateGroupPolicyAdminAmino): _171.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _171.MsgUpdateGroupPolicyAdmin): _171.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupPolicyAdminAminoMsg): _171.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _171.MsgUpdateGroupPolicyAdmin): _171.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupPolicyAdminProtoMsg): _171.MsgUpdateGroupPolicyAdmin;
                toProto(message: _171.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupPolicyAdmin): _171.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _171.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_171.MsgUpdateGroupPolicyAdminResponse>): _171.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _171.MsgUpdateGroupPolicyAdminResponseAmino): _171.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _171.MsgUpdateGroupPolicyAdminResponse): _171.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupPolicyAdminResponseAminoMsg): _171.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _171.MsgUpdateGroupPolicyAdminResponse): _171.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupPolicyAdminResponseProtoMsg): _171.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _171.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupPolicyAdminResponse): _171.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _171.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_171.MsgCreateGroupWithPolicy>): _171.MsgCreateGroupWithPolicy;
                fromAmino(object: _171.MsgCreateGroupWithPolicyAmino): _171.MsgCreateGroupWithPolicy;
                toAmino(message: _171.MsgCreateGroupWithPolicy): _171.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _171.MsgCreateGroupWithPolicyAminoMsg): _171.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _171.MsgCreateGroupWithPolicy): _171.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _171.MsgCreateGroupWithPolicyProtoMsg): _171.MsgCreateGroupWithPolicy;
                toProto(message: _171.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _171.MsgCreateGroupWithPolicy): _171.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _171.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_171.MsgCreateGroupWithPolicyResponse>): _171.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _171.MsgCreateGroupWithPolicyResponseAmino): _171.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _171.MsgCreateGroupWithPolicyResponse): _171.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _171.MsgCreateGroupWithPolicyResponseAminoMsg): _171.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _171.MsgCreateGroupWithPolicyResponse): _171.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _171.MsgCreateGroupWithPolicyResponseProtoMsg): _171.MsgCreateGroupWithPolicyResponse;
                toProto(message: _171.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _171.MsgCreateGroupWithPolicyResponse): _171.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _171.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_171.MsgUpdateGroupPolicyDecisionPolicy>): _171.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _171.MsgUpdateGroupPolicyDecisionPolicyAmino): _171.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _171.MsgUpdateGroupPolicyDecisionPolicy): _171.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _171.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _171.MsgUpdateGroupPolicyDecisionPolicy): _171.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _171.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _171.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupPolicyDecisionPolicy): _171.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _171.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_171.MsgUpdateGroupPolicyDecisionPolicyResponse>): _171.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _171.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _171.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _171.MsgUpdateGroupPolicyDecisionPolicyResponse): _171.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _171.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _171.MsgUpdateGroupPolicyDecisionPolicyResponse): _171.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _171.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _171.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupPolicyDecisionPolicyResponse): _171.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _171.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_171.MsgUpdateGroupPolicyMetadata>): _171.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _171.MsgUpdateGroupPolicyMetadataAmino): _171.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _171.MsgUpdateGroupPolicyMetadata): _171.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupPolicyMetadataAminoMsg): _171.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _171.MsgUpdateGroupPolicyMetadata): _171.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupPolicyMetadataProtoMsg): _171.MsgUpdateGroupPolicyMetadata;
                toProto(message: _171.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupPolicyMetadata): _171.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _171.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_171.MsgUpdateGroupPolicyMetadataResponse>): _171.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _171.MsgUpdateGroupPolicyMetadataResponseAmino): _171.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _171.MsgUpdateGroupPolicyMetadataResponse): _171.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _171.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _171.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _171.MsgUpdateGroupPolicyMetadataResponse): _171.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _171.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _171.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateGroupPolicyMetadataResponse): _171.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _171.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgSubmitProposal;
                fromPartial(object: Partial<_171.MsgSubmitProposal>): _171.MsgSubmitProposal;
                fromAmino(object: _171.MsgSubmitProposalAmino): _171.MsgSubmitProposal;
                toAmino(message: _171.MsgSubmitProposal): _171.MsgSubmitProposalAmino;
                fromAminoMsg(object: _171.MsgSubmitProposalAminoMsg): _171.MsgSubmitProposal;
                toAminoMsg(message: _171.MsgSubmitProposal): _171.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _171.MsgSubmitProposalProtoMsg): _171.MsgSubmitProposal;
                toProto(message: _171.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _171.MsgSubmitProposal): _171.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _171.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_171.MsgSubmitProposalResponse>): _171.MsgSubmitProposalResponse;
                fromAmino(object: _171.MsgSubmitProposalResponseAmino): _171.MsgSubmitProposalResponse;
                toAmino(message: _171.MsgSubmitProposalResponse): _171.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _171.MsgSubmitProposalResponseAminoMsg): _171.MsgSubmitProposalResponse;
                toAminoMsg(message: _171.MsgSubmitProposalResponse): _171.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _171.MsgSubmitProposalResponseProtoMsg): _171.MsgSubmitProposalResponse;
                toProto(message: _171.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _171.MsgSubmitProposalResponse): _171.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _171.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgWithdrawProposal;
                fromPartial(object: Partial<_171.MsgWithdrawProposal>): _171.MsgWithdrawProposal;
                fromAmino(object: _171.MsgWithdrawProposalAmino): _171.MsgWithdrawProposal;
                toAmino(message: _171.MsgWithdrawProposal): _171.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _171.MsgWithdrawProposalAminoMsg): _171.MsgWithdrawProposal;
                toAminoMsg(message: _171.MsgWithdrawProposal): _171.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _171.MsgWithdrawProposalProtoMsg): _171.MsgWithdrawProposal;
                toProto(message: _171.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _171.MsgWithdrawProposal): _171.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _171.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_171.MsgWithdrawProposalResponse>): _171.MsgWithdrawProposalResponse;
                fromAmino(_: _171.MsgWithdrawProposalResponseAmino): _171.MsgWithdrawProposalResponse;
                toAmino(_: _171.MsgWithdrawProposalResponse): _171.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _171.MsgWithdrawProposalResponseAminoMsg): _171.MsgWithdrawProposalResponse;
                toAminoMsg(message: _171.MsgWithdrawProposalResponse): _171.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _171.MsgWithdrawProposalResponseProtoMsg): _171.MsgWithdrawProposalResponse;
                toProto(message: _171.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _171.MsgWithdrawProposalResponse): _171.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _171.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgVote;
                fromPartial(object: Partial<_171.MsgVote>): _171.MsgVote;
                fromAmino(object: _171.MsgVoteAmino): _171.MsgVote;
                toAmino(message: _171.MsgVote): _171.MsgVoteAmino;
                fromAminoMsg(object: _171.MsgVoteAminoMsg): _171.MsgVote;
                toAminoMsg(message: _171.MsgVote): _171.MsgVoteAminoMsg;
                fromProtoMsg(message: _171.MsgVoteProtoMsg): _171.MsgVote;
                toProto(message: _171.MsgVote): Uint8Array;
                toProtoMsg(message: _171.MsgVote): _171.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _171.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgVoteResponse;
                fromPartial(_: Partial<_171.MsgVoteResponse>): _171.MsgVoteResponse;
                fromAmino(_: _171.MsgVoteResponseAmino): _171.MsgVoteResponse;
                toAmino(_: _171.MsgVoteResponse): _171.MsgVoteResponseAmino;
                fromAminoMsg(object: _171.MsgVoteResponseAminoMsg): _171.MsgVoteResponse;
                toAminoMsg(message: _171.MsgVoteResponse): _171.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _171.MsgVoteResponseProtoMsg): _171.MsgVoteResponse;
                toProto(message: _171.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _171.MsgVoteResponse): _171.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _171.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgExec;
                fromPartial(object: Partial<_171.MsgExec>): _171.MsgExec;
                fromAmino(object: _171.MsgExecAmino): _171.MsgExec;
                toAmino(message: _171.MsgExec): _171.MsgExecAmino;
                fromAminoMsg(object: _171.MsgExecAminoMsg): _171.MsgExec;
                toAminoMsg(message: _171.MsgExec): _171.MsgExecAminoMsg;
                fromProtoMsg(message: _171.MsgExecProtoMsg): _171.MsgExec;
                toProto(message: _171.MsgExec): Uint8Array;
                toProtoMsg(message: _171.MsgExec): _171.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _171.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgExecResponse;
                fromPartial(object: Partial<_171.MsgExecResponse>): _171.MsgExecResponse;
                fromAmino(object: _171.MsgExecResponseAmino): _171.MsgExecResponse;
                toAmino(message: _171.MsgExecResponse): _171.MsgExecResponseAmino;
                fromAminoMsg(object: _171.MsgExecResponseAminoMsg): _171.MsgExecResponse;
                toAminoMsg(message: _171.MsgExecResponse): _171.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _171.MsgExecResponseProtoMsg): _171.MsgExecResponse;
                toProto(message: _171.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _171.MsgExecResponse): _171.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _171.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgLeaveGroup;
                fromPartial(object: Partial<_171.MsgLeaveGroup>): _171.MsgLeaveGroup;
                fromAmino(object: _171.MsgLeaveGroupAmino): _171.MsgLeaveGroup;
                toAmino(message: _171.MsgLeaveGroup): _171.MsgLeaveGroupAmino;
                fromAminoMsg(object: _171.MsgLeaveGroupAminoMsg): _171.MsgLeaveGroup;
                toAminoMsg(message: _171.MsgLeaveGroup): _171.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _171.MsgLeaveGroupProtoMsg): _171.MsgLeaveGroup;
                toProto(message: _171.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _171.MsgLeaveGroup): _171.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _171.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_171.MsgLeaveGroupResponse>): _171.MsgLeaveGroupResponse;
                fromAmino(_: _171.MsgLeaveGroupResponseAmino): _171.MsgLeaveGroupResponse;
                toAmino(_: _171.MsgLeaveGroupResponse): _171.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _171.MsgLeaveGroupResponseAminoMsg): _171.MsgLeaveGroupResponse;
                toAminoMsg(message: _171.MsgLeaveGroupResponse): _171.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _171.MsgLeaveGroupResponseProtoMsg): _171.MsgLeaveGroupResponse;
                toProto(message: _171.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _171.MsgLeaveGroupResponse): _171.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _170.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupInfoRequest;
                fromPartial(object: Partial<_170.QueryGroupInfoRequest>): _170.QueryGroupInfoRequest;
                fromAmino(object: _170.QueryGroupInfoRequestAmino): _170.QueryGroupInfoRequest;
                toAmino(message: _170.QueryGroupInfoRequest): _170.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _170.QueryGroupInfoRequestAminoMsg): _170.QueryGroupInfoRequest;
                toAminoMsg(message: _170.QueryGroupInfoRequest): _170.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _170.QueryGroupInfoRequestProtoMsg): _170.QueryGroupInfoRequest;
                toProto(message: _170.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _170.QueryGroupInfoRequest): _170.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _170.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupInfoResponse;
                fromPartial(object: Partial<_170.QueryGroupInfoResponse>): _170.QueryGroupInfoResponse;
                fromAmino(object: _170.QueryGroupInfoResponseAmino): _170.QueryGroupInfoResponse;
                toAmino(message: _170.QueryGroupInfoResponse): _170.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _170.QueryGroupInfoResponseAminoMsg): _170.QueryGroupInfoResponse;
                toAminoMsg(message: _170.QueryGroupInfoResponse): _170.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _170.QueryGroupInfoResponseProtoMsg): _170.QueryGroupInfoResponse;
                toProto(message: _170.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _170.QueryGroupInfoResponse): _170.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _170.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_170.QueryGroupPolicyInfoRequest>): _170.QueryGroupPolicyInfoRequest;
                fromAmino(object: _170.QueryGroupPolicyInfoRequestAmino): _170.QueryGroupPolicyInfoRequest;
                toAmino(message: _170.QueryGroupPolicyInfoRequest): _170.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _170.QueryGroupPolicyInfoRequestAminoMsg): _170.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _170.QueryGroupPolicyInfoRequest): _170.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _170.QueryGroupPolicyInfoRequestProtoMsg): _170.QueryGroupPolicyInfoRequest;
                toProto(message: _170.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _170.QueryGroupPolicyInfoRequest): _170.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _170.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_170.QueryGroupPolicyInfoResponse>): _170.QueryGroupPolicyInfoResponse;
                fromAmino(object: _170.QueryGroupPolicyInfoResponseAmino): _170.QueryGroupPolicyInfoResponse;
                toAmino(message: _170.QueryGroupPolicyInfoResponse): _170.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _170.QueryGroupPolicyInfoResponseAminoMsg): _170.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _170.QueryGroupPolicyInfoResponse): _170.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _170.QueryGroupPolicyInfoResponseProtoMsg): _170.QueryGroupPolicyInfoResponse;
                toProto(message: _170.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _170.QueryGroupPolicyInfoResponse): _170.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _170.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupMembersRequest;
                fromPartial(object: Partial<_170.QueryGroupMembersRequest>): _170.QueryGroupMembersRequest;
                fromAmino(object: _170.QueryGroupMembersRequestAmino): _170.QueryGroupMembersRequest;
                toAmino(message: _170.QueryGroupMembersRequest): _170.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _170.QueryGroupMembersRequestAminoMsg): _170.QueryGroupMembersRequest;
                toAminoMsg(message: _170.QueryGroupMembersRequest): _170.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _170.QueryGroupMembersRequestProtoMsg): _170.QueryGroupMembersRequest;
                toProto(message: _170.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _170.QueryGroupMembersRequest): _170.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _170.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupMembersResponse;
                fromPartial(object: Partial<_170.QueryGroupMembersResponse>): _170.QueryGroupMembersResponse;
                fromAmino(object: _170.QueryGroupMembersResponseAmino): _170.QueryGroupMembersResponse;
                toAmino(message: _170.QueryGroupMembersResponse): _170.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _170.QueryGroupMembersResponseAminoMsg): _170.QueryGroupMembersResponse;
                toAminoMsg(message: _170.QueryGroupMembersResponse): _170.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _170.QueryGroupMembersResponseProtoMsg): _170.QueryGroupMembersResponse;
                toProto(message: _170.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _170.QueryGroupMembersResponse): _170.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _170.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_170.QueryGroupsByAdminRequest>): _170.QueryGroupsByAdminRequest;
                fromAmino(object: _170.QueryGroupsByAdminRequestAmino): _170.QueryGroupsByAdminRequest;
                toAmino(message: _170.QueryGroupsByAdminRequest): _170.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _170.QueryGroupsByAdminRequestAminoMsg): _170.QueryGroupsByAdminRequest;
                toAminoMsg(message: _170.QueryGroupsByAdminRequest): _170.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _170.QueryGroupsByAdminRequestProtoMsg): _170.QueryGroupsByAdminRequest;
                toProto(message: _170.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _170.QueryGroupsByAdminRequest): _170.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _170.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_170.QueryGroupsByAdminResponse>): _170.QueryGroupsByAdminResponse;
                fromAmino(object: _170.QueryGroupsByAdminResponseAmino): _170.QueryGroupsByAdminResponse;
                toAmino(message: _170.QueryGroupsByAdminResponse): _170.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _170.QueryGroupsByAdminResponseAminoMsg): _170.QueryGroupsByAdminResponse;
                toAminoMsg(message: _170.QueryGroupsByAdminResponse): _170.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _170.QueryGroupsByAdminResponseProtoMsg): _170.QueryGroupsByAdminResponse;
                toProto(message: _170.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _170.QueryGroupsByAdminResponse): _170.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _170.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_170.QueryGroupPoliciesByGroupRequest>): _170.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _170.QueryGroupPoliciesByGroupRequestAmino): _170.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _170.QueryGroupPoliciesByGroupRequest): _170.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _170.QueryGroupPoliciesByGroupRequestAminoMsg): _170.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _170.QueryGroupPoliciesByGroupRequest): _170.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _170.QueryGroupPoliciesByGroupRequestProtoMsg): _170.QueryGroupPoliciesByGroupRequest;
                toProto(message: _170.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _170.QueryGroupPoliciesByGroupRequest): _170.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _170.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_170.QueryGroupPoliciesByGroupResponse>): _170.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _170.QueryGroupPoliciesByGroupResponseAmino): _170.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _170.QueryGroupPoliciesByGroupResponse): _170.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _170.QueryGroupPoliciesByGroupResponseAminoMsg): _170.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _170.QueryGroupPoliciesByGroupResponse): _170.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _170.QueryGroupPoliciesByGroupResponseProtoMsg): _170.QueryGroupPoliciesByGroupResponse;
                toProto(message: _170.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _170.QueryGroupPoliciesByGroupResponse): _170.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _170.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_170.QueryGroupPoliciesByAdminRequest>): _170.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _170.QueryGroupPoliciesByAdminRequestAmino): _170.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _170.QueryGroupPoliciesByAdminRequest): _170.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _170.QueryGroupPoliciesByAdminRequestAminoMsg): _170.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _170.QueryGroupPoliciesByAdminRequest): _170.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _170.QueryGroupPoliciesByAdminRequestProtoMsg): _170.QueryGroupPoliciesByAdminRequest;
                toProto(message: _170.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _170.QueryGroupPoliciesByAdminRequest): _170.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _170.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_170.QueryGroupPoliciesByAdminResponse>): _170.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _170.QueryGroupPoliciesByAdminResponseAmino): _170.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _170.QueryGroupPoliciesByAdminResponse): _170.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _170.QueryGroupPoliciesByAdminResponseAminoMsg): _170.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _170.QueryGroupPoliciesByAdminResponse): _170.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _170.QueryGroupPoliciesByAdminResponseProtoMsg): _170.QueryGroupPoliciesByAdminResponse;
                toProto(message: _170.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _170.QueryGroupPoliciesByAdminResponse): _170.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _170.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryProposalRequest;
                fromPartial(object: Partial<_170.QueryProposalRequest>): _170.QueryProposalRequest;
                fromAmino(object: _170.QueryProposalRequestAmino): _170.QueryProposalRequest;
                toAmino(message: _170.QueryProposalRequest): _170.QueryProposalRequestAmino;
                fromAminoMsg(object: _170.QueryProposalRequestAminoMsg): _170.QueryProposalRequest;
                toAminoMsg(message: _170.QueryProposalRequest): _170.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _170.QueryProposalRequestProtoMsg): _170.QueryProposalRequest;
                toProto(message: _170.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _170.QueryProposalRequest): _170.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _170.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryProposalResponse;
                fromPartial(object: Partial<_170.QueryProposalResponse>): _170.QueryProposalResponse;
                fromAmino(object: _170.QueryProposalResponseAmino): _170.QueryProposalResponse;
                toAmino(message: _170.QueryProposalResponse): _170.QueryProposalResponseAmino;
                fromAminoMsg(object: _170.QueryProposalResponseAminoMsg): _170.QueryProposalResponse;
                toAminoMsg(message: _170.QueryProposalResponse): _170.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _170.QueryProposalResponseProtoMsg): _170.QueryProposalResponse;
                toProto(message: _170.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _170.QueryProposalResponse): _170.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _170.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_170.QueryProposalsByGroupPolicyRequest>): _170.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _170.QueryProposalsByGroupPolicyRequestAmino): _170.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _170.QueryProposalsByGroupPolicyRequest): _170.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _170.QueryProposalsByGroupPolicyRequestAminoMsg): _170.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _170.QueryProposalsByGroupPolicyRequest): _170.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _170.QueryProposalsByGroupPolicyRequestProtoMsg): _170.QueryProposalsByGroupPolicyRequest;
                toProto(message: _170.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _170.QueryProposalsByGroupPolicyRequest): _170.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _170.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_170.QueryProposalsByGroupPolicyResponse>): _170.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _170.QueryProposalsByGroupPolicyResponseAmino): _170.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _170.QueryProposalsByGroupPolicyResponse): _170.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _170.QueryProposalsByGroupPolicyResponseAminoMsg): _170.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _170.QueryProposalsByGroupPolicyResponse): _170.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _170.QueryProposalsByGroupPolicyResponseProtoMsg): _170.QueryProposalsByGroupPolicyResponse;
                toProto(message: _170.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _170.QueryProposalsByGroupPolicyResponse): _170.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _170.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_170.QueryVoteByProposalVoterRequest>): _170.QueryVoteByProposalVoterRequest;
                fromAmino(object: _170.QueryVoteByProposalVoterRequestAmino): _170.QueryVoteByProposalVoterRequest;
                toAmino(message: _170.QueryVoteByProposalVoterRequest): _170.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _170.QueryVoteByProposalVoterRequestAminoMsg): _170.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _170.QueryVoteByProposalVoterRequest): _170.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _170.QueryVoteByProposalVoterRequestProtoMsg): _170.QueryVoteByProposalVoterRequest;
                toProto(message: _170.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _170.QueryVoteByProposalVoterRequest): _170.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _170.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_170.QueryVoteByProposalVoterResponse>): _170.QueryVoteByProposalVoterResponse;
                fromAmino(object: _170.QueryVoteByProposalVoterResponseAmino): _170.QueryVoteByProposalVoterResponse;
                toAmino(message: _170.QueryVoteByProposalVoterResponse): _170.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _170.QueryVoteByProposalVoterResponseAminoMsg): _170.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _170.QueryVoteByProposalVoterResponse): _170.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _170.QueryVoteByProposalVoterResponseProtoMsg): _170.QueryVoteByProposalVoterResponse;
                toProto(message: _170.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _170.QueryVoteByProposalVoterResponse): _170.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _170.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_170.QueryVotesByProposalRequest>): _170.QueryVotesByProposalRequest;
                fromAmino(object: _170.QueryVotesByProposalRequestAmino): _170.QueryVotesByProposalRequest;
                toAmino(message: _170.QueryVotesByProposalRequest): _170.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _170.QueryVotesByProposalRequestAminoMsg): _170.QueryVotesByProposalRequest;
                toAminoMsg(message: _170.QueryVotesByProposalRequest): _170.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _170.QueryVotesByProposalRequestProtoMsg): _170.QueryVotesByProposalRequest;
                toProto(message: _170.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _170.QueryVotesByProposalRequest): _170.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _170.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_170.QueryVotesByProposalResponse>): _170.QueryVotesByProposalResponse;
                fromAmino(object: _170.QueryVotesByProposalResponseAmino): _170.QueryVotesByProposalResponse;
                toAmino(message: _170.QueryVotesByProposalResponse): _170.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _170.QueryVotesByProposalResponseAminoMsg): _170.QueryVotesByProposalResponse;
                toAminoMsg(message: _170.QueryVotesByProposalResponse): _170.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _170.QueryVotesByProposalResponseProtoMsg): _170.QueryVotesByProposalResponse;
                toProto(message: _170.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _170.QueryVotesByProposalResponse): _170.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _170.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_170.QueryVotesByVoterRequest>): _170.QueryVotesByVoterRequest;
                fromAmino(object: _170.QueryVotesByVoterRequestAmino): _170.QueryVotesByVoterRequest;
                toAmino(message: _170.QueryVotesByVoterRequest): _170.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _170.QueryVotesByVoterRequestAminoMsg): _170.QueryVotesByVoterRequest;
                toAminoMsg(message: _170.QueryVotesByVoterRequest): _170.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _170.QueryVotesByVoterRequestProtoMsg): _170.QueryVotesByVoterRequest;
                toProto(message: _170.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _170.QueryVotesByVoterRequest): _170.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _170.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_170.QueryVotesByVoterResponse>): _170.QueryVotesByVoterResponse;
                fromAmino(object: _170.QueryVotesByVoterResponseAmino): _170.QueryVotesByVoterResponse;
                toAmino(message: _170.QueryVotesByVoterResponse): _170.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _170.QueryVotesByVoterResponseAminoMsg): _170.QueryVotesByVoterResponse;
                toAminoMsg(message: _170.QueryVotesByVoterResponse): _170.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _170.QueryVotesByVoterResponseProtoMsg): _170.QueryVotesByVoterResponse;
                toProto(message: _170.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _170.QueryVotesByVoterResponse): _170.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _170.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_170.QueryGroupsByMemberRequest>): _170.QueryGroupsByMemberRequest;
                fromAmino(object: _170.QueryGroupsByMemberRequestAmino): _170.QueryGroupsByMemberRequest;
                toAmino(message: _170.QueryGroupsByMemberRequest): _170.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _170.QueryGroupsByMemberRequestAminoMsg): _170.QueryGroupsByMemberRequest;
                toAminoMsg(message: _170.QueryGroupsByMemberRequest): _170.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _170.QueryGroupsByMemberRequestProtoMsg): _170.QueryGroupsByMemberRequest;
                toProto(message: _170.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _170.QueryGroupsByMemberRequest): _170.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _170.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_170.QueryGroupsByMemberResponse>): _170.QueryGroupsByMemberResponse;
                fromAmino(object: _170.QueryGroupsByMemberResponseAmino): _170.QueryGroupsByMemberResponse;
                toAmino(message: _170.QueryGroupsByMemberResponse): _170.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _170.QueryGroupsByMemberResponseAminoMsg): _170.QueryGroupsByMemberResponse;
                toAminoMsg(message: _170.QueryGroupsByMemberResponse): _170.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _170.QueryGroupsByMemberResponseProtoMsg): _170.QueryGroupsByMemberResponse;
                toProto(message: _170.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _170.QueryGroupsByMemberResponse): _170.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _170.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryTallyResultRequest;
                fromPartial(object: Partial<_170.QueryTallyResultRequest>): _170.QueryTallyResultRequest;
                fromAmino(object: _170.QueryTallyResultRequestAmino): _170.QueryTallyResultRequest;
                toAmino(message: _170.QueryTallyResultRequest): _170.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _170.QueryTallyResultRequestAminoMsg): _170.QueryTallyResultRequest;
                toAminoMsg(message: _170.QueryTallyResultRequest): _170.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _170.QueryTallyResultRequestProtoMsg): _170.QueryTallyResultRequest;
                toProto(message: _170.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _170.QueryTallyResultRequest): _170.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _170.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryTallyResultResponse;
                fromPartial(object: Partial<_170.QueryTallyResultResponse>): _170.QueryTallyResultResponse;
                fromAmino(object: _170.QueryTallyResultResponseAmino): _170.QueryTallyResultResponse;
                toAmino(message: _170.QueryTallyResultResponse): _170.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _170.QueryTallyResultResponseAminoMsg): _170.QueryTallyResultResponse;
                toAminoMsg(message: _170.QueryTallyResultResponse): _170.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _170.QueryTallyResultResponseProtoMsg): _170.QueryTallyResultResponse;
                toProto(message: _170.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _170.QueryTallyResultResponse): _170.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _170.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupsRequest;
                fromPartial(object: Partial<_170.QueryGroupsRequest>): _170.QueryGroupsRequest;
                fromAmino(object: _170.QueryGroupsRequestAmino): _170.QueryGroupsRequest;
                toAmino(message: _170.QueryGroupsRequest): _170.QueryGroupsRequestAmino;
                fromAminoMsg(object: _170.QueryGroupsRequestAminoMsg): _170.QueryGroupsRequest;
                toAminoMsg(message: _170.QueryGroupsRequest): _170.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _170.QueryGroupsRequestProtoMsg): _170.QueryGroupsRequest;
                toProto(message: _170.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _170.QueryGroupsRequest): _170.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _170.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryGroupsResponse;
                fromPartial(object: Partial<_170.QueryGroupsResponse>): _170.QueryGroupsResponse;
                fromAmino(object: _170.QueryGroupsResponseAmino): _170.QueryGroupsResponse;
                toAmino(message: _170.QueryGroupsResponse): _170.QueryGroupsResponseAmino;
                fromAminoMsg(object: _170.QueryGroupsResponseAminoMsg): _170.QueryGroupsResponse;
                toAminoMsg(message: _170.QueryGroupsResponse): _170.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _170.QueryGroupsResponseProtoMsg): _170.QueryGroupsResponse;
                toProto(message: _170.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _170.QueryGroupsResponse): _170.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _169.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.GenesisState;
                fromPartial(object: Partial<_169.GenesisState>): _169.GenesisState;
                fromAmino(object: _169.GenesisStateAmino): _169.GenesisState;
                toAmino(message: _169.GenesisState): _169.GenesisStateAmino;
                fromAminoMsg(object: _169.GenesisStateAminoMsg): _169.GenesisState;
                toAminoMsg(message: _169.GenesisState): _169.GenesisStateAminoMsg;
                fromProtoMsg(message: _169.GenesisStateProtoMsg): _169.GenesisState;
                toProto(message: _169.GenesisState): Uint8Array;
                toProtoMsg(message: _169.GenesisState): _169.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _168.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.EventCreateGroup;
                fromPartial(object: Partial<_168.EventCreateGroup>): _168.EventCreateGroup;
                fromAmino(object: _168.EventCreateGroupAmino): _168.EventCreateGroup;
                toAmino(message: _168.EventCreateGroup): _168.EventCreateGroupAmino;
                fromAminoMsg(object: _168.EventCreateGroupAminoMsg): _168.EventCreateGroup;
                toAminoMsg(message: _168.EventCreateGroup): _168.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _168.EventCreateGroupProtoMsg): _168.EventCreateGroup;
                toProto(message: _168.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _168.EventCreateGroup): _168.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _168.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.EventUpdateGroup;
                fromPartial(object: Partial<_168.EventUpdateGroup>): _168.EventUpdateGroup;
                fromAmino(object: _168.EventUpdateGroupAmino): _168.EventUpdateGroup;
                toAmino(message: _168.EventUpdateGroup): _168.EventUpdateGroupAmino;
                fromAminoMsg(object: _168.EventUpdateGroupAminoMsg): _168.EventUpdateGroup;
                toAminoMsg(message: _168.EventUpdateGroup): _168.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _168.EventUpdateGroupProtoMsg): _168.EventUpdateGroup;
                toProto(message: _168.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _168.EventUpdateGroup): _168.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _168.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.EventCreateGroupPolicy;
                fromPartial(object: Partial<_168.EventCreateGroupPolicy>): _168.EventCreateGroupPolicy;
                fromAmino(object: _168.EventCreateGroupPolicyAmino): _168.EventCreateGroupPolicy;
                toAmino(message: _168.EventCreateGroupPolicy): _168.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _168.EventCreateGroupPolicyAminoMsg): _168.EventCreateGroupPolicy;
                toAminoMsg(message: _168.EventCreateGroupPolicy): _168.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _168.EventCreateGroupPolicyProtoMsg): _168.EventCreateGroupPolicy;
                toProto(message: _168.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _168.EventCreateGroupPolicy): _168.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _168.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_168.EventUpdateGroupPolicy>): _168.EventUpdateGroupPolicy;
                fromAmino(object: _168.EventUpdateGroupPolicyAmino): _168.EventUpdateGroupPolicy;
                toAmino(message: _168.EventUpdateGroupPolicy): _168.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _168.EventUpdateGroupPolicyAminoMsg): _168.EventUpdateGroupPolicy;
                toAminoMsg(message: _168.EventUpdateGroupPolicy): _168.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _168.EventUpdateGroupPolicyProtoMsg): _168.EventUpdateGroupPolicy;
                toProto(message: _168.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _168.EventUpdateGroupPolicy): _168.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _168.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.EventSubmitProposal;
                fromPartial(object: Partial<_168.EventSubmitProposal>): _168.EventSubmitProposal;
                fromAmino(object: _168.EventSubmitProposalAmino): _168.EventSubmitProposal;
                toAmino(message: _168.EventSubmitProposal): _168.EventSubmitProposalAmino;
                fromAminoMsg(object: _168.EventSubmitProposalAminoMsg): _168.EventSubmitProposal;
                toAminoMsg(message: _168.EventSubmitProposal): _168.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _168.EventSubmitProposalProtoMsg): _168.EventSubmitProposal;
                toProto(message: _168.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _168.EventSubmitProposal): _168.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _168.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.EventWithdrawProposal;
                fromPartial(object: Partial<_168.EventWithdrawProposal>): _168.EventWithdrawProposal;
                fromAmino(object: _168.EventWithdrawProposalAmino): _168.EventWithdrawProposal;
                toAmino(message: _168.EventWithdrawProposal): _168.EventWithdrawProposalAmino;
                fromAminoMsg(object: _168.EventWithdrawProposalAminoMsg): _168.EventWithdrawProposal;
                toAminoMsg(message: _168.EventWithdrawProposal): _168.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _168.EventWithdrawProposalProtoMsg): _168.EventWithdrawProposal;
                toProto(message: _168.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _168.EventWithdrawProposal): _168.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _168.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.EventVote;
                fromPartial(object: Partial<_168.EventVote>): _168.EventVote;
                fromAmino(object: _168.EventVoteAmino): _168.EventVote;
                toAmino(message: _168.EventVote): _168.EventVoteAmino;
                fromAminoMsg(object: _168.EventVoteAminoMsg): _168.EventVote;
                toAminoMsg(message: _168.EventVote): _168.EventVoteAminoMsg;
                fromProtoMsg(message: _168.EventVoteProtoMsg): _168.EventVote;
                toProto(message: _168.EventVote): Uint8Array;
                toProtoMsg(message: _168.EventVote): _168.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _168.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.EventExec;
                fromPartial(object: Partial<_168.EventExec>): _168.EventExec;
                fromAmino(object: _168.EventExecAmino): _168.EventExec;
                toAmino(message: _168.EventExec): _168.EventExecAmino;
                fromAminoMsg(object: _168.EventExecAminoMsg): _168.EventExec;
                toAminoMsg(message: _168.EventExec): _168.EventExecAminoMsg;
                fromProtoMsg(message: _168.EventExecProtoMsg): _168.EventExec;
                toProto(message: _168.EventExec): Uint8Array;
                toProtoMsg(message: _168.EventExec): _168.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _168.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.EventLeaveGroup;
                fromPartial(object: Partial<_168.EventLeaveGroup>): _168.EventLeaveGroup;
                fromAmino(object: _168.EventLeaveGroupAmino): _168.EventLeaveGroup;
                toAmino(message: _168.EventLeaveGroup): _168.EventLeaveGroupAmino;
                fromAminoMsg(object: _168.EventLeaveGroupAminoMsg): _168.EventLeaveGroup;
                toAminoMsg(message: _168.EventLeaveGroup): _168.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _168.EventLeaveGroupProtoMsg): _168.EventLeaveGroup;
                toProto(message: _168.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _168.EventLeaveGroup): _168.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _168.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.EventProposalPruned;
                fromPartial(object: Partial<_168.EventProposalPruned>): _168.EventProposalPruned;
                fromAmino(object: _168.EventProposalPrunedAmino): _168.EventProposalPruned;
                toAmino(message: _168.EventProposalPruned): _168.EventProposalPrunedAmino;
                fromAminoMsg(object: _168.EventProposalPrunedAminoMsg): _168.EventProposalPruned;
                toAminoMsg(message: _168.EventProposalPruned): _168.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _168.EventProposalPrunedProtoMsg): _168.EventProposalPruned;
                toProto(message: _168.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _168.EventProposalPruned): _168.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _173.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.Module;
                    fromPartial(object: Partial<_173.Module>): _173.Module;
                    fromAmino(object: _173.ModuleAmino): _173.Module;
                    toAmino(message: _173.Module): _173.ModuleAmino;
                    fromAminoMsg(object: _173.ModuleAminoMsg): _173.Module;
                    toAminoMsg(message: _173.Module): _173.ModuleAminoMsg;
                    fromProtoMsg(message: _173.ModuleProtoMsg): _173.Module;
                    toProto(message: _173.Module): Uint8Array;
                    toProtoMsg(message: _173.Module): _173.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _418.MsgClientImpl;
            QueryClientImpl: typeof _399.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _176.QueryParamsRequest): Promise<_176.QueryParamsResponse>;
                inflation(request?: _176.QueryInflationRequest): Promise<_176.QueryInflationResponse>;
                annualProvisions(request?: _176.QueryAnnualProvisionsRequest): Promise<_176.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _378.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _177.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _177.MsgUpdateParams): {
                        typeUrl: string;
                        value: _177.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _177.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _177.MsgUpdateParams): {
                        typeUrl: string;
                        value: _177.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _177.MsgUpdateParams) => _177.MsgUpdateParamsAmino;
                    fromAmino: (object: _177.MsgUpdateParamsAmino) => _177.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _177.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _177.MsgUpdateParams;
                fromPartial(object: Partial<_177.MsgUpdateParams>): _177.MsgUpdateParams;
                fromAmino(object: _177.MsgUpdateParamsAmino): _177.MsgUpdateParams;
                toAmino(message: _177.MsgUpdateParams): _177.MsgUpdateParamsAmino;
                fromAminoMsg(object: _177.MsgUpdateParamsAminoMsg): _177.MsgUpdateParams;
                toAminoMsg(message: _177.MsgUpdateParams): _177.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _177.MsgUpdateParamsProtoMsg): _177.MsgUpdateParams;
                toProto(message: _177.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _177.MsgUpdateParams): _177.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _177.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _177.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_177.MsgUpdateParamsResponse>): _177.MsgUpdateParamsResponse;
                fromAmino(_: _177.MsgUpdateParamsResponseAmino): _177.MsgUpdateParamsResponse;
                toAmino(_: _177.MsgUpdateParamsResponse): _177.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _177.MsgUpdateParamsResponseAminoMsg): _177.MsgUpdateParamsResponse;
                toAminoMsg(message: _177.MsgUpdateParamsResponse): _177.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _177.MsgUpdateParamsResponseProtoMsg): _177.MsgUpdateParamsResponse;
                toProto(message: _177.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _177.MsgUpdateParamsResponse): _177.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _176.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _176.QueryParamsRequest;
                fromPartial(_: Partial<_176.QueryParamsRequest>): _176.QueryParamsRequest;
                fromAmino(_: _176.QueryParamsRequestAmino): _176.QueryParamsRequest;
                toAmino(_: _176.QueryParamsRequest): _176.QueryParamsRequestAmino;
                fromAminoMsg(object: _176.QueryParamsRequestAminoMsg): _176.QueryParamsRequest;
                toAminoMsg(message: _176.QueryParamsRequest): _176.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _176.QueryParamsRequestProtoMsg): _176.QueryParamsRequest;
                toProto(message: _176.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _176.QueryParamsRequest): _176.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _176.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.QueryParamsResponse;
                fromPartial(object: Partial<_176.QueryParamsResponse>): _176.QueryParamsResponse;
                fromAmino(object: _176.QueryParamsResponseAmino): _176.QueryParamsResponse;
                toAmino(message: _176.QueryParamsResponse): _176.QueryParamsResponseAmino;
                fromAminoMsg(object: _176.QueryParamsResponseAminoMsg): _176.QueryParamsResponse;
                toAminoMsg(message: _176.QueryParamsResponse): _176.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _176.QueryParamsResponseProtoMsg): _176.QueryParamsResponse;
                toProto(message: _176.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _176.QueryParamsResponse): _176.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _176.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _176.QueryInflationRequest;
                fromPartial(_: Partial<_176.QueryInflationRequest>): _176.QueryInflationRequest;
                fromAmino(_: _176.QueryInflationRequestAmino): _176.QueryInflationRequest;
                toAmino(_: _176.QueryInflationRequest): _176.QueryInflationRequestAmino;
                fromAminoMsg(object: _176.QueryInflationRequestAminoMsg): _176.QueryInflationRequest;
                toAminoMsg(message: _176.QueryInflationRequest): _176.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _176.QueryInflationRequestProtoMsg): _176.QueryInflationRequest;
                toProto(message: _176.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _176.QueryInflationRequest): _176.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _176.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.QueryInflationResponse;
                fromPartial(object: Partial<_176.QueryInflationResponse>): _176.QueryInflationResponse;
                fromAmino(object: _176.QueryInflationResponseAmino): _176.QueryInflationResponse;
                toAmino(message: _176.QueryInflationResponse): _176.QueryInflationResponseAmino;
                fromAminoMsg(object: _176.QueryInflationResponseAminoMsg): _176.QueryInflationResponse;
                toAminoMsg(message: _176.QueryInflationResponse): _176.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _176.QueryInflationResponseProtoMsg): _176.QueryInflationResponse;
                toProto(message: _176.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _176.QueryInflationResponse): _176.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _176.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _176.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_176.QueryAnnualProvisionsRequest>): _176.QueryAnnualProvisionsRequest;
                fromAmino(_: _176.QueryAnnualProvisionsRequestAmino): _176.QueryAnnualProvisionsRequest;
                toAmino(_: _176.QueryAnnualProvisionsRequest): _176.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _176.QueryAnnualProvisionsRequestAminoMsg): _176.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _176.QueryAnnualProvisionsRequest): _176.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _176.QueryAnnualProvisionsRequestProtoMsg): _176.QueryAnnualProvisionsRequest;
                toProto(message: _176.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _176.QueryAnnualProvisionsRequest): _176.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _176.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_176.QueryAnnualProvisionsResponse>): _176.QueryAnnualProvisionsResponse;
                fromAmino(object: _176.QueryAnnualProvisionsResponseAmino): _176.QueryAnnualProvisionsResponse;
                toAmino(message: _176.QueryAnnualProvisionsResponse): _176.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _176.QueryAnnualProvisionsResponseAminoMsg): _176.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _176.QueryAnnualProvisionsResponse): _176.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _176.QueryAnnualProvisionsResponseProtoMsg): _176.QueryAnnualProvisionsResponse;
                toProto(message: _176.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _176.QueryAnnualProvisionsResponse): _176.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _175.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.Minter;
                fromPartial(object: Partial<_175.Minter>): _175.Minter;
                fromAmino(object: _175.MinterAmino): _175.Minter;
                toAmino(message: _175.Minter): _175.MinterAmino;
                fromAminoMsg(object: _175.MinterAminoMsg): _175.Minter;
                toAminoMsg(message: _175.Minter): _175.MinterAminoMsg;
                fromProtoMsg(message: _175.MinterProtoMsg): _175.Minter;
                toProto(message: _175.Minter): Uint8Array;
                toProtoMsg(message: _175.Minter): _175.MinterProtoMsg;
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
            GenesisState: {
                typeUrl: string;
                encode(message: _174.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.GenesisState;
                fromPartial(object: Partial<_174.GenesisState>): _174.GenesisState;
                fromAmino(object: _174.GenesisStateAmino): _174.GenesisState;
                toAmino(message: _174.GenesisState): _174.GenesisStateAmino;
                fromAminoMsg(object: _174.GenesisStateAminoMsg): _174.GenesisState;
                toAminoMsg(message: _174.GenesisState): _174.GenesisStateAminoMsg;
                fromProtoMsg(message: _174.GenesisStateProtoMsg): _174.GenesisState;
                toProto(message: _174.GenesisState): Uint8Array;
                toProtoMsg(message: _174.GenesisState): _174.GenesisStateProtoMsg;
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
                    encode(_: _179.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _179.Module;
                    fromPartial(_: Partial<_179.Module>): _179.Module;
                    fromAmino(_: _179.ModuleAmino): _179.Module;
                    toAmino(_: _179.Module): _179.ModuleAmino;
                    fromAminoMsg(object: _179.ModuleAminoMsg): _179.Module;
                    toAminoMsg(message: _179.Module): _179.ModuleAminoMsg;
                    fromProtoMsg(message: _179.ModuleProtoMsg): _179.Module;
                    toProto(message: _179.Module): Uint8Array;
                    toProtoMsg(message: _179.Module): _179.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _419.MsgClientImpl;
            QueryClientImpl: typeof _400.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _183.QueryBalanceRequest): Promise<_183.QueryBalanceResponse>;
                owner(request: _183.QueryOwnerRequest): Promise<_183.QueryOwnerResponse>;
                supply(request: _183.QuerySupplyRequest): Promise<_183.QuerySupplyResponse>;
                nFTs(request: _183.QueryNFTsRequest): Promise<_183.QueryNFTsResponse>;
                nFT(request: _183.QueryNFTRequest): Promise<_183.QueryNFTResponse>;
                class(request: _183.QueryClassRequest): Promise<_183.QueryClassResponse>;
                classes(request?: _183.QueryClassesRequest): Promise<_183.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _379.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _184.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _184.MsgSend): {
                        typeUrl: string;
                        value: _184.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _184.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _184.MsgSend): {
                        typeUrl: string;
                        value: _184.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _184.MsgSend) => _184.MsgSendAmino;
                    fromAmino: (object: _184.MsgSendAmino) => _184.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _184.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _184.MsgSend;
                fromPartial(object: Partial<_184.MsgSend>): _184.MsgSend;
                fromAmino(object: _184.MsgSendAmino): _184.MsgSend;
                toAmino(message: _184.MsgSend): _184.MsgSendAmino;
                fromAminoMsg(object: _184.MsgSendAminoMsg): _184.MsgSend;
                toAminoMsg(message: _184.MsgSend): _184.MsgSendAminoMsg;
                fromProtoMsg(message: _184.MsgSendProtoMsg): _184.MsgSend;
                toProto(message: _184.MsgSend): Uint8Array;
                toProtoMsg(message: _184.MsgSend): _184.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _184.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _184.MsgSendResponse;
                fromPartial(_: Partial<_184.MsgSendResponse>): _184.MsgSendResponse;
                fromAmino(_: _184.MsgSendResponseAmino): _184.MsgSendResponse;
                toAmino(_: _184.MsgSendResponse): _184.MsgSendResponseAmino;
                fromAminoMsg(object: _184.MsgSendResponseAminoMsg): _184.MsgSendResponse;
                toAminoMsg(message: _184.MsgSendResponse): _184.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _184.MsgSendResponseProtoMsg): _184.MsgSendResponse;
                toProto(message: _184.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _184.MsgSendResponse): _184.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _183.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryBalanceRequest;
                fromPartial(object: Partial<_183.QueryBalanceRequest>): _183.QueryBalanceRequest;
                fromAmino(object: _183.QueryBalanceRequestAmino): _183.QueryBalanceRequest;
                toAmino(message: _183.QueryBalanceRequest): _183.QueryBalanceRequestAmino;
                fromAminoMsg(object: _183.QueryBalanceRequestAminoMsg): _183.QueryBalanceRequest;
                toAminoMsg(message: _183.QueryBalanceRequest): _183.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _183.QueryBalanceRequestProtoMsg): _183.QueryBalanceRequest;
                toProto(message: _183.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _183.QueryBalanceRequest): _183.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _183.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryBalanceResponse;
                fromPartial(object: Partial<_183.QueryBalanceResponse>): _183.QueryBalanceResponse;
                fromAmino(object: _183.QueryBalanceResponseAmino): _183.QueryBalanceResponse;
                toAmino(message: _183.QueryBalanceResponse): _183.QueryBalanceResponseAmino;
                fromAminoMsg(object: _183.QueryBalanceResponseAminoMsg): _183.QueryBalanceResponse;
                toAminoMsg(message: _183.QueryBalanceResponse): _183.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _183.QueryBalanceResponseProtoMsg): _183.QueryBalanceResponse;
                toProto(message: _183.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _183.QueryBalanceResponse): _183.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _183.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryOwnerRequest;
                fromPartial(object: Partial<_183.QueryOwnerRequest>): _183.QueryOwnerRequest;
                fromAmino(object: _183.QueryOwnerRequestAmino): _183.QueryOwnerRequest;
                toAmino(message: _183.QueryOwnerRequest): _183.QueryOwnerRequestAmino;
                fromAminoMsg(object: _183.QueryOwnerRequestAminoMsg): _183.QueryOwnerRequest;
                toAminoMsg(message: _183.QueryOwnerRequest): _183.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _183.QueryOwnerRequestProtoMsg): _183.QueryOwnerRequest;
                toProto(message: _183.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _183.QueryOwnerRequest): _183.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _183.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryOwnerResponse;
                fromPartial(object: Partial<_183.QueryOwnerResponse>): _183.QueryOwnerResponse;
                fromAmino(object: _183.QueryOwnerResponseAmino): _183.QueryOwnerResponse;
                toAmino(message: _183.QueryOwnerResponse): _183.QueryOwnerResponseAmino;
                fromAminoMsg(object: _183.QueryOwnerResponseAminoMsg): _183.QueryOwnerResponse;
                toAminoMsg(message: _183.QueryOwnerResponse): _183.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _183.QueryOwnerResponseProtoMsg): _183.QueryOwnerResponse;
                toProto(message: _183.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _183.QueryOwnerResponse): _183.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _183.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QuerySupplyRequest;
                fromPartial(object: Partial<_183.QuerySupplyRequest>): _183.QuerySupplyRequest;
                fromAmino(object: _183.QuerySupplyRequestAmino): _183.QuerySupplyRequest;
                toAmino(message: _183.QuerySupplyRequest): _183.QuerySupplyRequestAmino;
                fromAminoMsg(object: _183.QuerySupplyRequestAminoMsg): _183.QuerySupplyRequest;
                toAminoMsg(message: _183.QuerySupplyRequest): _183.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _183.QuerySupplyRequestProtoMsg): _183.QuerySupplyRequest;
                toProto(message: _183.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _183.QuerySupplyRequest): _183.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _183.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QuerySupplyResponse;
                fromPartial(object: Partial<_183.QuerySupplyResponse>): _183.QuerySupplyResponse;
                fromAmino(object: _183.QuerySupplyResponseAmino): _183.QuerySupplyResponse;
                toAmino(message: _183.QuerySupplyResponse): _183.QuerySupplyResponseAmino;
                fromAminoMsg(object: _183.QuerySupplyResponseAminoMsg): _183.QuerySupplyResponse;
                toAminoMsg(message: _183.QuerySupplyResponse): _183.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _183.QuerySupplyResponseProtoMsg): _183.QuerySupplyResponse;
                toProto(message: _183.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _183.QuerySupplyResponse): _183.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _183.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryNFTsRequest;
                fromPartial(object: Partial<_183.QueryNFTsRequest>): _183.QueryNFTsRequest;
                fromAmino(object: _183.QueryNFTsRequestAmino): _183.QueryNFTsRequest;
                toAmino(message: _183.QueryNFTsRequest): _183.QueryNFTsRequestAmino;
                fromAminoMsg(object: _183.QueryNFTsRequestAminoMsg): _183.QueryNFTsRequest;
                toAminoMsg(message: _183.QueryNFTsRequest): _183.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _183.QueryNFTsRequestProtoMsg): _183.QueryNFTsRequest;
                toProto(message: _183.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _183.QueryNFTsRequest): _183.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _183.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryNFTsResponse;
                fromPartial(object: Partial<_183.QueryNFTsResponse>): _183.QueryNFTsResponse;
                fromAmino(object: _183.QueryNFTsResponseAmino): _183.QueryNFTsResponse;
                toAmino(message: _183.QueryNFTsResponse): _183.QueryNFTsResponseAmino;
                fromAminoMsg(object: _183.QueryNFTsResponseAminoMsg): _183.QueryNFTsResponse;
                toAminoMsg(message: _183.QueryNFTsResponse): _183.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _183.QueryNFTsResponseProtoMsg): _183.QueryNFTsResponse;
                toProto(message: _183.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _183.QueryNFTsResponse): _183.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _183.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryNFTRequest;
                fromPartial(object: Partial<_183.QueryNFTRequest>): _183.QueryNFTRequest;
                fromAmino(object: _183.QueryNFTRequestAmino): _183.QueryNFTRequest;
                toAmino(message: _183.QueryNFTRequest): _183.QueryNFTRequestAmino;
                fromAminoMsg(object: _183.QueryNFTRequestAminoMsg): _183.QueryNFTRequest;
                toAminoMsg(message: _183.QueryNFTRequest): _183.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _183.QueryNFTRequestProtoMsg): _183.QueryNFTRequest;
                toProto(message: _183.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _183.QueryNFTRequest): _183.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _183.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryNFTResponse;
                fromPartial(object: Partial<_183.QueryNFTResponse>): _183.QueryNFTResponse;
                fromAmino(object: _183.QueryNFTResponseAmino): _183.QueryNFTResponse;
                toAmino(message: _183.QueryNFTResponse): _183.QueryNFTResponseAmino;
                fromAminoMsg(object: _183.QueryNFTResponseAminoMsg): _183.QueryNFTResponse;
                toAminoMsg(message: _183.QueryNFTResponse): _183.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _183.QueryNFTResponseProtoMsg): _183.QueryNFTResponse;
                toProto(message: _183.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _183.QueryNFTResponse): _183.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _183.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryClassRequest;
                fromPartial(object: Partial<_183.QueryClassRequest>): _183.QueryClassRequest;
                fromAmino(object: _183.QueryClassRequestAmino): _183.QueryClassRequest;
                toAmino(message: _183.QueryClassRequest): _183.QueryClassRequestAmino;
                fromAminoMsg(object: _183.QueryClassRequestAminoMsg): _183.QueryClassRequest;
                toAminoMsg(message: _183.QueryClassRequest): _183.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _183.QueryClassRequestProtoMsg): _183.QueryClassRequest;
                toProto(message: _183.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _183.QueryClassRequest): _183.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _183.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryClassResponse;
                fromPartial(object: Partial<_183.QueryClassResponse>): _183.QueryClassResponse;
                fromAmino(object: _183.QueryClassResponseAmino): _183.QueryClassResponse;
                toAmino(message: _183.QueryClassResponse): _183.QueryClassResponseAmino;
                fromAminoMsg(object: _183.QueryClassResponseAminoMsg): _183.QueryClassResponse;
                toAminoMsg(message: _183.QueryClassResponse): _183.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _183.QueryClassResponseProtoMsg): _183.QueryClassResponse;
                toProto(message: _183.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _183.QueryClassResponse): _183.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _183.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryClassesRequest;
                fromPartial(object: Partial<_183.QueryClassesRequest>): _183.QueryClassesRequest;
                fromAmino(object: _183.QueryClassesRequestAmino): _183.QueryClassesRequest;
                toAmino(message: _183.QueryClassesRequest): _183.QueryClassesRequestAmino;
                fromAminoMsg(object: _183.QueryClassesRequestAminoMsg): _183.QueryClassesRequest;
                toAminoMsg(message: _183.QueryClassesRequest): _183.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _183.QueryClassesRequestProtoMsg): _183.QueryClassesRequest;
                toProto(message: _183.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _183.QueryClassesRequest): _183.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _183.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _183.QueryClassesResponse;
                fromPartial(object: Partial<_183.QueryClassesResponse>): _183.QueryClassesResponse;
                fromAmino(object: _183.QueryClassesResponseAmino): _183.QueryClassesResponse;
                toAmino(message: _183.QueryClassesResponse): _183.QueryClassesResponseAmino;
                fromAminoMsg(object: _183.QueryClassesResponseAminoMsg): _183.QueryClassesResponse;
                toAminoMsg(message: _183.QueryClassesResponse): _183.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _183.QueryClassesResponseProtoMsg): _183.QueryClassesResponse;
                toProto(message: _183.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _183.QueryClassesResponse): _183.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _182.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _182.Class;
                fromPartial(object: Partial<_182.Class>): _182.Class;
                fromAmino(object: _182.ClassAmino): _182.Class;
                toAmino(message: _182.Class): _182.ClassAmino;
                fromAminoMsg(object: _182.ClassAminoMsg): _182.Class;
                toAminoMsg(message: _182.Class): _182.ClassAminoMsg;
                fromProtoMsg(message: _182.ClassProtoMsg): _182.Class;
                toProto(message: _182.Class): Uint8Array;
                toProtoMsg(message: _182.Class): _182.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _182.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _182.NFT;
                fromPartial(object: Partial<_182.NFT>): _182.NFT;
                fromAmino(object: _182.NFTAmino): _182.NFT;
                toAmino(message: _182.NFT): _182.NFTAmino;
                fromAminoMsg(object: _182.NFTAminoMsg): _182.NFT;
                toAminoMsg(message: _182.NFT): _182.NFTAminoMsg;
                fromProtoMsg(message: _182.NFTProtoMsg): _182.NFT;
                toProto(message: _182.NFT): Uint8Array;
                toProtoMsg(message: _182.NFT): _182.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _181.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.GenesisState;
                fromPartial(object: Partial<_181.GenesisState>): _181.GenesisState;
                fromAmino(object: _181.GenesisStateAmino): _181.GenesisState;
                toAmino(message: _181.GenesisState): _181.GenesisStateAmino;
                fromAminoMsg(object: _181.GenesisStateAminoMsg): _181.GenesisState;
                toAminoMsg(message: _181.GenesisState): _181.GenesisStateAminoMsg;
                fromProtoMsg(message: _181.GenesisStateProtoMsg): _181.GenesisState;
                toProto(message: _181.GenesisState): Uint8Array;
                toProtoMsg(message: _181.GenesisState): _181.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _181.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.Entry;
                fromPartial(object: Partial<_181.Entry>): _181.Entry;
                fromAmino(object: _181.EntryAmino): _181.Entry;
                toAmino(message: _181.Entry): _181.EntryAmino;
                fromAminoMsg(object: _181.EntryAminoMsg): _181.Entry;
                toAminoMsg(message: _181.Entry): _181.EntryAminoMsg;
                fromProtoMsg(message: _181.EntryProtoMsg): _181.Entry;
                toProto(message: _181.Entry): Uint8Array;
                toProtoMsg(message: _181.Entry): _181.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _180.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.EventSend;
                fromPartial(object: Partial<_180.EventSend>): _180.EventSend;
                fromAmino(object: _180.EventSendAmino): _180.EventSend;
                toAmino(message: _180.EventSend): _180.EventSendAmino;
                fromAminoMsg(object: _180.EventSendAminoMsg): _180.EventSend;
                toAminoMsg(message: _180.EventSend): _180.EventSendAminoMsg;
                fromProtoMsg(message: _180.EventSendProtoMsg): _180.EventSend;
                toProto(message: _180.EventSend): Uint8Array;
                toProtoMsg(message: _180.EventSend): _180.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _180.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.EventMint;
                fromPartial(object: Partial<_180.EventMint>): _180.EventMint;
                fromAmino(object: _180.EventMintAmino): _180.EventMint;
                toAmino(message: _180.EventMint): _180.EventMintAmino;
                fromAminoMsg(object: _180.EventMintAminoMsg): _180.EventMint;
                toAminoMsg(message: _180.EventMint): _180.EventMintAminoMsg;
                fromProtoMsg(message: _180.EventMintProtoMsg): _180.EventMint;
                toProto(message: _180.EventMint): Uint8Array;
                toProtoMsg(message: _180.EventMint): _180.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _180.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.EventBurn;
                fromPartial(object: Partial<_180.EventBurn>): _180.EventBurn;
                fromAmino(object: _180.EventBurnAmino): _180.EventBurn;
                toAmino(message: _180.EventBurn): _180.EventBurnAmino;
                fromAminoMsg(object: _180.EventBurnAminoMsg): _180.EventBurn;
                toAminoMsg(message: _180.EventBurn): _180.EventBurnAminoMsg;
                fromProtoMsg(message: _180.EventBurnProtoMsg): _180.EventBurn;
                toProto(message: _180.EventBurn): Uint8Array;
                toProtoMsg(message: _180.EventBurn): _180.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _185.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _185.Module;
                    fromPartial(_: Partial<_185.Module>): _185.Module;
                    fromAmino(_: _185.ModuleAmino): _185.Module;
                    toAmino(_: _185.Module): _185.ModuleAmino;
                    fromAminoMsg(object: _185.ModuleAminoMsg): _185.Module;
                    toAminoMsg(message: _185.Module): _185.ModuleAminoMsg;
                    fromProtoMsg(message: _185.ModuleProtoMsg): _185.Module;
                    toProto(message: _185.Module): Uint8Array;
                    toProtoMsg(message: _185.Module): _185.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _401.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _186.GetRequest): Promise<_186.GetResponse>;
                    list(request: _186.ListRequest): Promise<_186.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _186.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.GetRequest;
                    fromPartial(object: Partial<_186.GetRequest>): _186.GetRequest;
                    fromAmino(object: _186.GetRequestAmino): _186.GetRequest;
                    toAmino(message: _186.GetRequest): _186.GetRequestAmino;
                    fromAminoMsg(object: _186.GetRequestAminoMsg): _186.GetRequest;
                    toAminoMsg(message: _186.GetRequest): _186.GetRequestAminoMsg;
                    fromProtoMsg(message: _186.GetRequestProtoMsg): _186.GetRequest;
                    toProto(message: _186.GetRequest): Uint8Array;
                    toProtoMsg(message: _186.GetRequest): _186.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _186.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.GetResponse;
                    fromPartial(object: Partial<_186.GetResponse>): _186.GetResponse;
                    fromAmino(object: _186.GetResponseAmino): _186.GetResponse;
                    toAmino(message: _186.GetResponse): _186.GetResponseAmino;
                    fromAminoMsg(object: _186.GetResponseAminoMsg): _186.GetResponse;
                    toAminoMsg(message: _186.GetResponse): _186.GetResponseAminoMsg;
                    fromProtoMsg(message: _186.GetResponseProtoMsg): _186.GetResponse;
                    toProto(message: _186.GetResponse): Uint8Array;
                    toProtoMsg(message: _186.GetResponse): _186.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _186.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.ListRequest;
                    fromPartial(object: Partial<_186.ListRequest>): _186.ListRequest;
                    fromAmino(object: _186.ListRequestAmino): _186.ListRequest;
                    toAmino(message: _186.ListRequest): _186.ListRequestAmino;
                    fromAminoMsg(object: _186.ListRequestAminoMsg): _186.ListRequest;
                    toAminoMsg(message: _186.ListRequest): _186.ListRequestAminoMsg;
                    fromProtoMsg(message: _186.ListRequestProtoMsg): _186.ListRequest;
                    toProto(message: _186.ListRequest): Uint8Array;
                    toProtoMsg(message: _186.ListRequest): _186.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _186.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.ListRequest_Prefix;
                    fromPartial(object: Partial<_186.ListRequest_Prefix>): _186.ListRequest_Prefix;
                    fromAmino(object: _186.ListRequest_PrefixAmino): _186.ListRequest_Prefix;
                    toAmino(message: _186.ListRequest_Prefix): _186.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _186.ListRequest_PrefixAminoMsg): _186.ListRequest_Prefix;
                    toAminoMsg(message: _186.ListRequest_Prefix): _186.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _186.ListRequest_PrefixProtoMsg): _186.ListRequest_Prefix;
                    toProto(message: _186.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _186.ListRequest_Prefix): _186.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _186.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.ListRequest_Range;
                    fromPartial(object: Partial<_186.ListRequest_Range>): _186.ListRequest_Range;
                    fromAmino(object: _186.ListRequest_RangeAmino): _186.ListRequest_Range;
                    toAmino(message: _186.ListRequest_Range): _186.ListRequest_RangeAmino;
                    fromAminoMsg(object: _186.ListRequest_RangeAminoMsg): _186.ListRequest_Range;
                    toAminoMsg(message: _186.ListRequest_Range): _186.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _186.ListRequest_RangeProtoMsg): _186.ListRequest_Range;
                    toProto(message: _186.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _186.ListRequest_Range): _186.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _186.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.ListResponse;
                    fromPartial(object: Partial<_186.ListResponse>): _186.ListResponse;
                    fromAmino(object: _186.ListResponseAmino): _186.ListResponse;
                    toAmino(message: _186.ListResponse): _186.ListResponseAmino;
                    fromAminoMsg(object: _186.ListResponseAminoMsg): _186.ListResponse;
                    toAminoMsg(message: _186.ListResponse): _186.ListResponseAminoMsg;
                    fromProtoMsg(message: _186.ListResponseProtoMsg): _186.ListResponse;
                    toProto(message: _186.ListResponse): Uint8Array;
                    toProtoMsg(message: _186.ListResponse): _186.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _186.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.IndexValue;
                    fromPartial(object: Partial<_186.IndexValue>): _186.IndexValue;
                    fromAmino(object: _186.IndexValueAmino): _186.IndexValue;
                    toAmino(message: _186.IndexValue): _186.IndexValueAmino;
                    fromAminoMsg(object: _186.IndexValueAminoMsg): _186.IndexValue;
                    toAminoMsg(message: _186.IndexValue): _186.IndexValueAminoMsg;
                    fromProtoMsg(message: _186.IndexValueProtoMsg): _186.IndexValue;
                    toProto(message: _186.IndexValue): Uint8Array;
                    toProtoMsg(message: _186.IndexValue): _186.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _187.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _187.TableDescriptor;
                fromPartial(object: Partial<_187.TableDescriptor>): _187.TableDescriptor;
                fromAmino(object: _187.TableDescriptorAmino): _187.TableDescriptor;
                toAmino(message: _187.TableDescriptor): _187.TableDescriptorAmino;
                fromAminoMsg(object: _187.TableDescriptorAminoMsg): _187.TableDescriptor;
                toAminoMsg(message: _187.TableDescriptor): _187.TableDescriptorAminoMsg;
                fromProtoMsg(message: _187.TableDescriptorProtoMsg): _187.TableDescriptor;
                toProto(message: _187.TableDescriptor): Uint8Array;
                toProtoMsg(message: _187.TableDescriptor): _187.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _187.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _187.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_187.PrimaryKeyDescriptor>): _187.PrimaryKeyDescriptor;
                fromAmino(object: _187.PrimaryKeyDescriptorAmino): _187.PrimaryKeyDescriptor;
                toAmino(message: _187.PrimaryKeyDescriptor): _187.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _187.PrimaryKeyDescriptorAminoMsg): _187.PrimaryKeyDescriptor;
                toAminoMsg(message: _187.PrimaryKeyDescriptor): _187.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _187.PrimaryKeyDescriptorProtoMsg): _187.PrimaryKeyDescriptor;
                toProto(message: _187.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _187.PrimaryKeyDescriptor): _187.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _187.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _187.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_187.SecondaryIndexDescriptor>): _187.SecondaryIndexDescriptor;
                fromAmino(object: _187.SecondaryIndexDescriptorAmino): _187.SecondaryIndexDescriptor;
                toAmino(message: _187.SecondaryIndexDescriptor): _187.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _187.SecondaryIndexDescriptorAminoMsg): _187.SecondaryIndexDescriptor;
                toAminoMsg(message: _187.SecondaryIndexDescriptor): _187.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _187.SecondaryIndexDescriptorProtoMsg): _187.SecondaryIndexDescriptor;
                toProto(message: _187.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _187.SecondaryIndexDescriptor): _187.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _187.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _187.SingletonDescriptor;
                fromPartial(object: Partial<_187.SingletonDescriptor>): _187.SingletonDescriptor;
                fromAmino(object: _187.SingletonDescriptorAmino): _187.SingletonDescriptor;
                toAmino(message: _187.SingletonDescriptor): _187.SingletonDescriptorAmino;
                fromAminoMsg(object: _187.SingletonDescriptorAminoMsg): _187.SingletonDescriptor;
                toAminoMsg(message: _187.SingletonDescriptor): _187.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _187.SingletonDescriptorProtoMsg): _187.SingletonDescriptor;
                toProto(message: _187.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _187.SingletonDescriptor): _187.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _188.StorageType;
            storageTypeToJSON(object: _188.StorageType): string;
            StorageType: typeof _188.StorageType;
            StorageTypeSDKType: typeof _188.StorageType;
            StorageTypeAmino: typeof _188.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _188.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _188.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_188.ModuleSchemaDescriptor>): _188.ModuleSchemaDescriptor;
                fromAmino(object: _188.ModuleSchemaDescriptorAmino): _188.ModuleSchemaDescriptor;
                toAmino(message: _188.ModuleSchemaDescriptor): _188.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _188.ModuleSchemaDescriptorAminoMsg): _188.ModuleSchemaDescriptor;
                toAminoMsg(message: _188.ModuleSchemaDescriptor): _188.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _188.ModuleSchemaDescriptorProtoMsg): _188.ModuleSchemaDescriptor;
                toProto(message: _188.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _188.ModuleSchemaDescriptor): _188.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _188.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _188.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_188.ModuleSchemaDescriptor_FileEntry>): _188.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _188.ModuleSchemaDescriptor_FileEntryAmino): _188.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _188.ModuleSchemaDescriptor_FileEntry): _188.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _188.ModuleSchemaDescriptor_FileEntryAminoMsg): _188.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _188.ModuleSchemaDescriptor_FileEntry): _188.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _188.ModuleSchemaDescriptor_FileEntryProtoMsg): _188.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _188.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _188.ModuleSchemaDescriptor_FileEntry): _188.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _189.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _189.Module;
                    fromPartial(_: Partial<_189.Module>): _189.Module;
                    fromAmino(_: _189.ModuleAmino): _189.Module;
                    toAmino(_: _189.Module): _189.ModuleAmino;
                    fromAminoMsg(object: _189.ModuleAminoMsg): _189.Module;
                    toAminoMsg(message: _189.Module): _189.ModuleAminoMsg;
                    fromProtoMsg(message: _189.ModuleProtoMsg): _189.Module;
                    toProto(message: _189.Module): Uint8Array;
                    toProtoMsg(message: _189.Module): _189.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _402.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _191.QueryParamsRequest): Promise<_191.QueryParamsResponse>;
                subspaces(request?: _191.QuerySubspacesRequest): Promise<_191.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _380.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _191.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _191.QueryParamsRequest;
                fromPartial(object: Partial<_191.QueryParamsRequest>): _191.QueryParamsRequest;
                fromAmino(object: _191.QueryParamsRequestAmino): _191.QueryParamsRequest;
                toAmino(message: _191.QueryParamsRequest): _191.QueryParamsRequestAmino;
                fromAminoMsg(object: _191.QueryParamsRequestAminoMsg): _191.QueryParamsRequest;
                toAminoMsg(message: _191.QueryParamsRequest): _191.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _191.QueryParamsRequestProtoMsg): _191.QueryParamsRequest;
                toProto(message: _191.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _191.QueryParamsRequest): _191.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _191.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _191.QueryParamsResponse;
                fromPartial(object: Partial<_191.QueryParamsResponse>): _191.QueryParamsResponse;
                fromAmino(object: _191.QueryParamsResponseAmino): _191.QueryParamsResponse;
                toAmino(message: _191.QueryParamsResponse): _191.QueryParamsResponseAmino;
                fromAminoMsg(object: _191.QueryParamsResponseAminoMsg): _191.QueryParamsResponse;
                toAminoMsg(message: _191.QueryParamsResponse): _191.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _191.QueryParamsResponseProtoMsg): _191.QueryParamsResponse;
                toProto(message: _191.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _191.QueryParamsResponse): _191.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _191.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _191.QuerySubspacesRequest;
                fromPartial(_: Partial<_191.QuerySubspacesRequest>): _191.QuerySubspacesRequest;
                fromAmino(_: _191.QuerySubspacesRequestAmino): _191.QuerySubspacesRequest;
                toAmino(_: _191.QuerySubspacesRequest): _191.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _191.QuerySubspacesRequestAminoMsg): _191.QuerySubspacesRequest;
                toAminoMsg(message: _191.QuerySubspacesRequest): _191.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _191.QuerySubspacesRequestProtoMsg): _191.QuerySubspacesRequest;
                toProto(message: _191.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _191.QuerySubspacesRequest): _191.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _191.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _191.QuerySubspacesResponse;
                fromPartial(object: Partial<_191.QuerySubspacesResponse>): _191.QuerySubspacesResponse;
                fromAmino(object: _191.QuerySubspacesResponseAmino): _191.QuerySubspacesResponse;
                toAmino(message: _191.QuerySubspacesResponse): _191.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _191.QuerySubspacesResponseAminoMsg): _191.QuerySubspacesResponse;
                toAminoMsg(message: _191.QuerySubspacesResponse): _191.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _191.QuerySubspacesResponseProtoMsg): _191.QuerySubspacesResponse;
                toProto(message: _191.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _191.QuerySubspacesResponse): _191.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _191.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _191.Subspace;
                fromPartial(object: Partial<_191.Subspace>): _191.Subspace;
                fromAmino(object: _191.SubspaceAmino): _191.Subspace;
                toAmino(message: _191.Subspace): _191.SubspaceAmino;
                fromAminoMsg(object: _191.SubspaceAminoMsg): _191.Subspace;
                toAminoMsg(message: _191.Subspace): _191.SubspaceAminoMsg;
                fromProtoMsg(message: _191.SubspaceProtoMsg): _191.Subspace;
                toProto(message: _191.Subspace): Uint8Array;
                toProtoMsg(message: _191.Subspace): _191.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _190.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.ParameterChangeProposal;
                fromPartial(object: Partial<_190.ParameterChangeProposal>): _190.ParameterChangeProposal;
                fromAmino(object: _190.ParameterChangeProposalAmino): _190.ParameterChangeProposal;
                toAmino(message: _190.ParameterChangeProposal): _190.ParameterChangeProposalAmino;
                fromAminoMsg(object: _190.ParameterChangeProposalAminoMsg): _190.ParameterChangeProposal;
                toAminoMsg(message: _190.ParameterChangeProposal): _190.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _190.ParameterChangeProposalProtoMsg): _190.ParameterChangeProposal;
                toProto(message: _190.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _190.ParameterChangeProposal): _190.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _190.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.ParamChange;
                fromPartial(object: Partial<_190.ParamChange>): _190.ParamChange;
                fromAmino(object: _190.ParamChangeAmino): _190.ParamChange;
                toAmino(message: _190.ParamChange): _190.ParamChangeAmino;
                fromAminoMsg(object: _190.ParamChangeAminoMsg): _190.ParamChange;
                toAminoMsg(message: _190.ParamChange): _190.ParamChangeAminoMsg;
                fromProtoMsg(message: _190.ParamChangeProtoMsg): _190.ParamChange;
                toProto(message: _190.ParamChange): Uint8Array;
                toProtoMsg(message: _190.ParamChange): _190.ParamChangeProtoMsg;
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
                encode(_: _193.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _193.FileDescriptorsRequest;
                fromPartial(_: Partial<_193.FileDescriptorsRequest>): _193.FileDescriptorsRequest;
                fromAmino(_: _193.FileDescriptorsRequestAmino): _193.FileDescriptorsRequest;
                toAmino(_: _193.FileDescriptorsRequest): _193.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _193.FileDescriptorsRequestAminoMsg): _193.FileDescriptorsRequest;
                toAminoMsg(message: _193.FileDescriptorsRequest): _193.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _193.FileDescriptorsRequestProtoMsg): _193.FileDescriptorsRequest;
                toProto(message: _193.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _193.FileDescriptorsRequest): _193.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _193.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.FileDescriptorsResponse;
                fromPartial(object: Partial<_193.FileDescriptorsResponse>): _193.FileDescriptorsResponse;
                fromAmino(object: _193.FileDescriptorsResponseAmino): _193.FileDescriptorsResponse;
                toAmino(message: _193.FileDescriptorsResponse): _193.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _193.FileDescriptorsResponseAminoMsg): _193.FileDescriptorsResponse;
                toAminoMsg(message: _193.FileDescriptorsResponse): _193.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _193.FileDescriptorsResponseProtoMsg): _193.FileDescriptorsResponse;
                toProto(message: _193.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _193.FileDescriptorsResponse): _193.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _194.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _194.Module;
                    fromPartial(object: Partial<_194.Module>): _194.Module;
                    fromAmino(object: _194.ModuleAmino): _194.Module;
                    toAmino(message: _194.Module): _194.ModuleAmino;
                    fromAminoMsg(object: _194.ModuleAminoMsg): _194.Module;
                    toAminoMsg(message: _194.Module): _194.ModuleAminoMsg;
                    fromProtoMsg(message: _194.ModuleProtoMsg): _194.Module;
                    toProto(message: _194.Module): Uint8Array;
                    toProtoMsg(message: _194.Module): _194.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _420.MsgClientImpl;
            QueryClientImpl: typeof _403.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _196.QueryParamsRequest): Promise<_196.QueryParamsResponse>;
                signingInfo(request: _196.QuerySigningInfoRequest): Promise<_196.QuerySigningInfoResponse>;
                signingInfos(request?: _196.QuerySigningInfosRequest): Promise<_196.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _381.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _198.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _198.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _198.MsgUnjail): {
                        typeUrl: string;
                        value: _198.MsgUnjail;
                    };
                    updateParams(value: _198.MsgUpdateParams): {
                        typeUrl: string;
                        value: _198.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _198.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _198.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _198.MsgUnjail): {
                        typeUrl: string;
                        value: _198.MsgUnjail;
                    };
                    updateParams(value: _198.MsgUpdateParams): {
                        typeUrl: string;
                        value: _198.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _198.MsgUnjail) => _198.MsgUnjailAmino;
                    fromAmino: (object: _198.MsgUnjailAmino) => _198.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _198.MsgUpdateParams) => _198.MsgUpdateParamsAmino;
                    fromAmino: (object: _198.MsgUpdateParamsAmino) => _198.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _198.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _198.MsgUnjail;
                fromPartial(object: Partial<_198.MsgUnjail>): _198.MsgUnjail;
                fromAmino(object: _198.MsgUnjailAmino): _198.MsgUnjail;
                toAmino(message: _198.MsgUnjail): _198.MsgUnjailAmino;
                fromAminoMsg(object: _198.MsgUnjailAminoMsg): _198.MsgUnjail;
                toAminoMsg(message: _198.MsgUnjail): _198.MsgUnjailAminoMsg;
                fromProtoMsg(message: _198.MsgUnjailProtoMsg): _198.MsgUnjail;
                toProto(message: _198.MsgUnjail): Uint8Array;
                toProtoMsg(message: _198.MsgUnjail): _198.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _198.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _198.MsgUnjailResponse;
                fromPartial(_: Partial<_198.MsgUnjailResponse>): _198.MsgUnjailResponse;
                fromAmino(_: _198.MsgUnjailResponseAmino): _198.MsgUnjailResponse;
                toAmino(_: _198.MsgUnjailResponse): _198.MsgUnjailResponseAmino;
                fromAminoMsg(object: _198.MsgUnjailResponseAminoMsg): _198.MsgUnjailResponse;
                toAminoMsg(message: _198.MsgUnjailResponse): _198.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _198.MsgUnjailResponseProtoMsg): _198.MsgUnjailResponse;
                toProto(message: _198.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _198.MsgUnjailResponse): _198.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _198.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _198.MsgUpdateParams;
                fromPartial(object: Partial<_198.MsgUpdateParams>): _198.MsgUpdateParams;
                fromAmino(object: _198.MsgUpdateParamsAmino): _198.MsgUpdateParams;
                toAmino(message: _198.MsgUpdateParams): _198.MsgUpdateParamsAmino;
                fromAminoMsg(object: _198.MsgUpdateParamsAminoMsg): _198.MsgUpdateParams;
                toAminoMsg(message: _198.MsgUpdateParams): _198.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _198.MsgUpdateParamsProtoMsg): _198.MsgUpdateParams;
                toProto(message: _198.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _198.MsgUpdateParams): _198.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _198.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _198.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_198.MsgUpdateParamsResponse>): _198.MsgUpdateParamsResponse;
                fromAmino(_: _198.MsgUpdateParamsResponseAmino): _198.MsgUpdateParamsResponse;
                toAmino(_: _198.MsgUpdateParamsResponse): _198.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _198.MsgUpdateParamsResponseAminoMsg): _198.MsgUpdateParamsResponse;
                toAminoMsg(message: _198.MsgUpdateParamsResponse): _198.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _198.MsgUpdateParamsResponseProtoMsg): _198.MsgUpdateParamsResponse;
                toProto(message: _198.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _198.MsgUpdateParamsResponse): _198.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _197.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _197.ValidatorSigningInfo;
                fromPartial(object: Partial<_197.ValidatorSigningInfo>): _197.ValidatorSigningInfo;
                fromAmino(object: _197.ValidatorSigningInfoAmino): _197.ValidatorSigningInfo;
                toAmino(message: _197.ValidatorSigningInfo): _197.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _197.ValidatorSigningInfoAminoMsg): _197.ValidatorSigningInfo;
                toAminoMsg(message: _197.ValidatorSigningInfo): _197.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _197.ValidatorSigningInfoProtoMsg): _197.ValidatorSigningInfo;
                toProto(message: _197.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _197.ValidatorSigningInfo): _197.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _197.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _197.Params;
                fromPartial(object: Partial<_197.Params>): _197.Params;
                fromAmino(object: _197.ParamsAmino): _197.Params;
                toAmino(message: _197.Params): _197.ParamsAmino;
                fromAminoMsg(object: _197.ParamsAminoMsg): _197.Params;
                toAminoMsg(message: _197.Params): _197.ParamsAminoMsg;
                fromProtoMsg(message: _197.ParamsProtoMsg): _197.Params;
                toProto(message: _197.Params): Uint8Array;
                toProtoMsg(message: _197.Params): _197.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _196.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _196.QueryParamsRequest;
                fromPartial(_: Partial<_196.QueryParamsRequest>): _196.QueryParamsRequest;
                fromAmino(_: _196.QueryParamsRequestAmino): _196.QueryParamsRequest;
                toAmino(_: _196.QueryParamsRequest): _196.QueryParamsRequestAmino;
                fromAminoMsg(object: _196.QueryParamsRequestAminoMsg): _196.QueryParamsRequest;
                toAminoMsg(message: _196.QueryParamsRequest): _196.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _196.QueryParamsRequestProtoMsg): _196.QueryParamsRequest;
                toProto(message: _196.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _196.QueryParamsRequest): _196.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _196.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.QueryParamsResponse;
                fromPartial(object: Partial<_196.QueryParamsResponse>): _196.QueryParamsResponse;
                fromAmino(object: _196.QueryParamsResponseAmino): _196.QueryParamsResponse;
                toAmino(message: _196.QueryParamsResponse): _196.QueryParamsResponseAmino;
                fromAminoMsg(object: _196.QueryParamsResponseAminoMsg): _196.QueryParamsResponse;
                toAminoMsg(message: _196.QueryParamsResponse): _196.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _196.QueryParamsResponseProtoMsg): _196.QueryParamsResponse;
                toProto(message: _196.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _196.QueryParamsResponse): _196.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _196.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.QuerySigningInfoRequest;
                fromPartial(object: Partial<_196.QuerySigningInfoRequest>): _196.QuerySigningInfoRequest;
                fromAmino(object: _196.QuerySigningInfoRequestAmino): _196.QuerySigningInfoRequest;
                toAmino(message: _196.QuerySigningInfoRequest): _196.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _196.QuerySigningInfoRequestAminoMsg): _196.QuerySigningInfoRequest;
                toAminoMsg(message: _196.QuerySigningInfoRequest): _196.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _196.QuerySigningInfoRequestProtoMsg): _196.QuerySigningInfoRequest;
                toProto(message: _196.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _196.QuerySigningInfoRequest): _196.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _196.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.QuerySigningInfoResponse;
                fromPartial(object: Partial<_196.QuerySigningInfoResponse>): _196.QuerySigningInfoResponse;
                fromAmino(object: _196.QuerySigningInfoResponseAmino): _196.QuerySigningInfoResponse;
                toAmino(message: _196.QuerySigningInfoResponse): _196.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _196.QuerySigningInfoResponseAminoMsg): _196.QuerySigningInfoResponse;
                toAminoMsg(message: _196.QuerySigningInfoResponse): _196.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _196.QuerySigningInfoResponseProtoMsg): _196.QuerySigningInfoResponse;
                toProto(message: _196.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _196.QuerySigningInfoResponse): _196.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _196.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.QuerySigningInfosRequest;
                fromPartial(object: Partial<_196.QuerySigningInfosRequest>): _196.QuerySigningInfosRequest;
                fromAmino(object: _196.QuerySigningInfosRequestAmino): _196.QuerySigningInfosRequest;
                toAmino(message: _196.QuerySigningInfosRequest): _196.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _196.QuerySigningInfosRequestAminoMsg): _196.QuerySigningInfosRequest;
                toAminoMsg(message: _196.QuerySigningInfosRequest): _196.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _196.QuerySigningInfosRequestProtoMsg): _196.QuerySigningInfosRequest;
                toProto(message: _196.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _196.QuerySigningInfosRequest): _196.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _196.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.QuerySigningInfosResponse;
                fromPartial(object: Partial<_196.QuerySigningInfosResponse>): _196.QuerySigningInfosResponse;
                fromAmino(object: _196.QuerySigningInfosResponseAmino): _196.QuerySigningInfosResponse;
                toAmino(message: _196.QuerySigningInfosResponse): _196.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _196.QuerySigningInfosResponseAminoMsg): _196.QuerySigningInfosResponse;
                toAminoMsg(message: _196.QuerySigningInfosResponse): _196.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _196.QuerySigningInfosResponseProtoMsg): _196.QuerySigningInfosResponse;
                toProto(message: _196.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _196.QuerySigningInfosResponse): _196.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _195.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.GenesisState;
                fromPartial(object: Partial<_195.GenesisState>): _195.GenesisState;
                fromAmino(object: _195.GenesisStateAmino): _195.GenesisState;
                toAmino(message: _195.GenesisState): _195.GenesisStateAmino;
                fromAminoMsg(object: _195.GenesisStateAminoMsg): _195.GenesisState;
                toAminoMsg(message: _195.GenesisState): _195.GenesisStateAminoMsg;
                fromProtoMsg(message: _195.GenesisStateProtoMsg): _195.GenesisState;
                toProto(message: _195.GenesisState): Uint8Array;
                toProtoMsg(message: _195.GenesisState): _195.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _195.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.SigningInfo;
                fromPartial(object: Partial<_195.SigningInfo>): _195.SigningInfo;
                fromAmino(object: _195.SigningInfoAmino): _195.SigningInfo;
                toAmino(message: _195.SigningInfo): _195.SigningInfoAmino;
                fromAminoMsg(object: _195.SigningInfoAminoMsg): _195.SigningInfo;
                toAminoMsg(message: _195.SigningInfo): _195.SigningInfoAminoMsg;
                fromProtoMsg(message: _195.SigningInfoProtoMsg): _195.SigningInfo;
                toProto(message: _195.SigningInfo): Uint8Array;
                toProtoMsg(message: _195.SigningInfo): _195.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _195.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.ValidatorMissedBlocks;
                fromPartial(object: Partial<_195.ValidatorMissedBlocks>): _195.ValidatorMissedBlocks;
                fromAmino(object: _195.ValidatorMissedBlocksAmino): _195.ValidatorMissedBlocks;
                toAmino(message: _195.ValidatorMissedBlocks): _195.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _195.ValidatorMissedBlocksAminoMsg): _195.ValidatorMissedBlocks;
                toAminoMsg(message: _195.ValidatorMissedBlocks): _195.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _195.ValidatorMissedBlocksProtoMsg): _195.ValidatorMissedBlocks;
                toProto(message: _195.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _195.ValidatorMissedBlocks): _195.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _195.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MissedBlock;
                fromPartial(object: Partial<_195.MissedBlock>): _195.MissedBlock;
                fromAmino(object: _195.MissedBlockAmino): _195.MissedBlock;
                toAmino(message: _195.MissedBlock): _195.MissedBlockAmino;
                fromAminoMsg(object: _195.MissedBlockAminoMsg): _195.MissedBlock;
                toAminoMsg(message: _195.MissedBlock): _195.MissedBlockAminoMsg;
                fromProtoMsg(message: _195.MissedBlockProtoMsg): _195.MissedBlock;
                toProto(message: _195.MissedBlock): Uint8Array;
                toProtoMsg(message: _195.MissedBlock): _195.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _199.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _199.Module;
                    fromPartial(object: Partial<_199.Module>): _199.Module;
                    fromAmino(object: _199.ModuleAmino): _199.Module;
                    toAmino(message: _199.Module): _199.ModuleAmino;
                    fromAminoMsg(object: _199.ModuleAminoMsg): _199.Module;
                    toAminoMsg(message: _199.Module): _199.ModuleAminoMsg;
                    fromProtoMsg(message: _199.ModuleProtoMsg): _199.Module;
                    toProto(message: _199.Module): Uint8Array;
                    toProtoMsg(message: _199.Module): _199.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _421.MsgClientImpl;
            QueryClientImpl: typeof _404.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _202.QueryValidatorsRequest): Promise<_202.QueryValidatorsResponse>;
                validator(request: _202.QueryValidatorRequest): Promise<_202.QueryValidatorResponse>;
                validatorDelegations(request: _202.QueryValidatorDelegationsRequest): Promise<_202.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _202.QueryValidatorUnbondingDelegationsRequest): Promise<_202.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _202.QueryDelegationRequest): Promise<_202.QueryDelegationResponse>;
                unbondingDelegation(request: _202.QueryUnbondingDelegationRequest): Promise<_202.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _202.QueryDelegatorDelegationsRequest): Promise<_202.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _202.QueryDelegatorUnbondingDelegationsRequest): Promise<_202.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _202.QueryRedelegationsRequest): Promise<_202.QueryRedelegationsResponse>;
                delegatorValidators(request: _202.QueryDelegatorValidatorsRequest): Promise<_202.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _202.QueryDelegatorValidatorRequest): Promise<_202.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _202.QueryHistoricalInfoRequest): Promise<_202.QueryHistoricalInfoResponse>;
                pool(request?: _202.QueryPoolRequest): Promise<_202.QueryPoolResponse>;
                params(request?: _202.QueryParamsRequest): Promise<_202.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _382.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _204.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _204.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _204.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _204.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _204.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _204.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _204.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _204.MsgCreateValidator): {
                        typeUrl: string;
                        value: _204.MsgCreateValidator;
                    };
                    editValidator(value: _204.MsgEditValidator): {
                        typeUrl: string;
                        value: _204.MsgEditValidator;
                    };
                    delegate(value: _204.MsgDelegate): {
                        typeUrl: string;
                        value: _204.MsgDelegate;
                    };
                    beginRedelegate(value: _204.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _204.MsgBeginRedelegate;
                    };
                    undelegate(value: _204.MsgUndelegate): {
                        typeUrl: string;
                        value: _204.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _204.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _204.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _204.MsgUpdateParams): {
                        typeUrl: string;
                        value: _204.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _204.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _204.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _204.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _204.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _204.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _204.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _204.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _204.MsgCreateValidator): {
                        typeUrl: string;
                        value: _204.MsgCreateValidator;
                    };
                    editValidator(value: _204.MsgEditValidator): {
                        typeUrl: string;
                        value: _204.MsgEditValidator;
                    };
                    delegate(value: _204.MsgDelegate): {
                        typeUrl: string;
                        value: _204.MsgDelegate;
                    };
                    beginRedelegate(value: _204.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _204.MsgBeginRedelegate;
                    };
                    undelegate(value: _204.MsgUndelegate): {
                        typeUrl: string;
                        value: _204.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _204.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _204.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _204.MsgUpdateParams): {
                        typeUrl: string;
                        value: _204.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _204.MsgCreateValidator) => _204.MsgCreateValidatorAmino;
                    fromAmino: (object: _204.MsgCreateValidatorAmino) => _204.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _204.MsgEditValidator) => _204.MsgEditValidatorAmino;
                    fromAmino: (object: _204.MsgEditValidatorAmino) => _204.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _204.MsgDelegate) => _204.MsgDelegateAmino;
                    fromAmino: (object: _204.MsgDelegateAmino) => _204.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _204.MsgBeginRedelegate) => _204.MsgBeginRedelegateAmino;
                    fromAmino: (object: _204.MsgBeginRedelegateAmino) => _204.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _204.MsgUndelegate) => _204.MsgUndelegateAmino;
                    fromAmino: (object: _204.MsgUndelegateAmino) => _204.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _204.MsgCancelUnbondingDelegation) => _204.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _204.MsgCancelUnbondingDelegationAmino) => _204.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _204.MsgUpdateParams) => _204.MsgUpdateParamsAmino;
                    fromAmino: (object: _204.MsgUpdateParamsAmino) => _204.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _204.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _204.MsgCreateValidator;
                fromPartial(object: Partial<_204.MsgCreateValidator>): _204.MsgCreateValidator;
                fromAmino(object: _204.MsgCreateValidatorAmino): _204.MsgCreateValidator;
                toAmino(message: _204.MsgCreateValidator): _204.MsgCreateValidatorAmino;
                fromAminoMsg(object: _204.MsgCreateValidatorAminoMsg): _204.MsgCreateValidator;
                toAminoMsg(message: _204.MsgCreateValidator): _204.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _204.MsgCreateValidatorProtoMsg): _204.MsgCreateValidator;
                toProto(message: _204.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _204.MsgCreateValidator): _204.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _204.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _204.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_204.MsgCreateValidatorResponse>): _204.MsgCreateValidatorResponse;
                fromAmino(_: _204.MsgCreateValidatorResponseAmino): _204.MsgCreateValidatorResponse;
                toAmino(_: _204.MsgCreateValidatorResponse): _204.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _204.MsgCreateValidatorResponseAminoMsg): _204.MsgCreateValidatorResponse;
                toAminoMsg(message: _204.MsgCreateValidatorResponse): _204.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _204.MsgCreateValidatorResponseProtoMsg): _204.MsgCreateValidatorResponse;
                toProto(message: _204.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _204.MsgCreateValidatorResponse): _204.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _204.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _204.MsgEditValidator;
                fromPartial(object: Partial<_204.MsgEditValidator>): _204.MsgEditValidator;
                fromAmino(object: _204.MsgEditValidatorAmino): _204.MsgEditValidator;
                toAmino(message: _204.MsgEditValidator): _204.MsgEditValidatorAmino;
                fromAminoMsg(object: _204.MsgEditValidatorAminoMsg): _204.MsgEditValidator;
                toAminoMsg(message: _204.MsgEditValidator): _204.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _204.MsgEditValidatorProtoMsg): _204.MsgEditValidator;
                toProto(message: _204.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _204.MsgEditValidator): _204.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _204.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _204.MsgEditValidatorResponse;
                fromPartial(_: Partial<_204.MsgEditValidatorResponse>): _204.MsgEditValidatorResponse;
                fromAmino(_: _204.MsgEditValidatorResponseAmino): _204.MsgEditValidatorResponse;
                toAmino(_: _204.MsgEditValidatorResponse): _204.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _204.MsgEditValidatorResponseAminoMsg): _204.MsgEditValidatorResponse;
                toAminoMsg(message: _204.MsgEditValidatorResponse): _204.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _204.MsgEditValidatorResponseProtoMsg): _204.MsgEditValidatorResponse;
                toProto(message: _204.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _204.MsgEditValidatorResponse): _204.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _204.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _204.MsgDelegate;
                fromPartial(object: Partial<_204.MsgDelegate>): _204.MsgDelegate;
                fromAmino(object: _204.MsgDelegateAmino): _204.MsgDelegate;
                toAmino(message: _204.MsgDelegate): _204.MsgDelegateAmino;
                fromAminoMsg(object: _204.MsgDelegateAminoMsg): _204.MsgDelegate;
                toAminoMsg(message: _204.MsgDelegate): _204.MsgDelegateAminoMsg;
                fromProtoMsg(message: _204.MsgDelegateProtoMsg): _204.MsgDelegate;
                toProto(message: _204.MsgDelegate): Uint8Array;
                toProtoMsg(message: _204.MsgDelegate): _204.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _204.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _204.MsgDelegateResponse;
                fromPartial(_: Partial<_204.MsgDelegateResponse>): _204.MsgDelegateResponse;
                fromAmino(_: _204.MsgDelegateResponseAmino): _204.MsgDelegateResponse;
                toAmino(_: _204.MsgDelegateResponse): _204.MsgDelegateResponseAmino;
                fromAminoMsg(object: _204.MsgDelegateResponseAminoMsg): _204.MsgDelegateResponse;
                toAminoMsg(message: _204.MsgDelegateResponse): _204.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _204.MsgDelegateResponseProtoMsg): _204.MsgDelegateResponse;
                toProto(message: _204.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _204.MsgDelegateResponse): _204.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _204.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _204.MsgBeginRedelegate;
                fromPartial(object: Partial<_204.MsgBeginRedelegate>): _204.MsgBeginRedelegate;
                fromAmino(object: _204.MsgBeginRedelegateAmino): _204.MsgBeginRedelegate;
                toAmino(message: _204.MsgBeginRedelegate): _204.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _204.MsgBeginRedelegateAminoMsg): _204.MsgBeginRedelegate;
                toAminoMsg(message: _204.MsgBeginRedelegate): _204.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _204.MsgBeginRedelegateProtoMsg): _204.MsgBeginRedelegate;
                toProto(message: _204.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _204.MsgBeginRedelegate): _204.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _204.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _204.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_204.MsgBeginRedelegateResponse>): _204.MsgBeginRedelegateResponse;
                fromAmino(object: _204.MsgBeginRedelegateResponseAmino): _204.MsgBeginRedelegateResponse;
                toAmino(message: _204.MsgBeginRedelegateResponse): _204.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _204.MsgBeginRedelegateResponseAminoMsg): _204.MsgBeginRedelegateResponse;
                toAminoMsg(message: _204.MsgBeginRedelegateResponse): _204.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _204.MsgBeginRedelegateResponseProtoMsg): _204.MsgBeginRedelegateResponse;
                toProto(message: _204.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _204.MsgBeginRedelegateResponse): _204.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _204.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _204.MsgUndelegate;
                fromPartial(object: Partial<_204.MsgUndelegate>): _204.MsgUndelegate;
                fromAmino(object: _204.MsgUndelegateAmino): _204.MsgUndelegate;
                toAmino(message: _204.MsgUndelegate): _204.MsgUndelegateAmino;
                fromAminoMsg(object: _204.MsgUndelegateAminoMsg): _204.MsgUndelegate;
                toAminoMsg(message: _204.MsgUndelegate): _204.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _204.MsgUndelegateProtoMsg): _204.MsgUndelegate;
                toProto(message: _204.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _204.MsgUndelegate): _204.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _204.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _204.MsgUndelegateResponse;
                fromPartial(object: Partial<_204.MsgUndelegateResponse>): _204.MsgUndelegateResponse;
                fromAmino(object: _204.MsgUndelegateResponseAmino): _204.MsgUndelegateResponse;
                toAmino(message: _204.MsgUndelegateResponse): _204.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _204.MsgUndelegateResponseAminoMsg): _204.MsgUndelegateResponse;
                toAminoMsg(message: _204.MsgUndelegateResponse): _204.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _204.MsgUndelegateResponseProtoMsg): _204.MsgUndelegateResponse;
                toProto(message: _204.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _204.MsgUndelegateResponse): _204.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _204.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _204.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_204.MsgCancelUnbondingDelegation>): _204.MsgCancelUnbondingDelegation;
                fromAmino(object: _204.MsgCancelUnbondingDelegationAmino): _204.MsgCancelUnbondingDelegation;
                toAmino(message: _204.MsgCancelUnbondingDelegation): _204.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _204.MsgCancelUnbondingDelegationAminoMsg): _204.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _204.MsgCancelUnbondingDelegation): _204.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _204.MsgCancelUnbondingDelegationProtoMsg): _204.MsgCancelUnbondingDelegation;
                toProto(message: _204.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _204.MsgCancelUnbondingDelegation): _204.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _204.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _204.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_204.MsgCancelUnbondingDelegationResponse>): _204.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _204.MsgCancelUnbondingDelegationResponseAmino): _204.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _204.MsgCancelUnbondingDelegationResponse): _204.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _204.MsgCancelUnbondingDelegationResponseAminoMsg): _204.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _204.MsgCancelUnbondingDelegationResponse): _204.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _204.MsgCancelUnbondingDelegationResponseProtoMsg): _204.MsgCancelUnbondingDelegationResponse;
                toProto(message: _204.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _204.MsgCancelUnbondingDelegationResponse): _204.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _204.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _204.MsgUpdateParams;
                fromPartial(object: Partial<_204.MsgUpdateParams>): _204.MsgUpdateParams;
                fromAmino(object: _204.MsgUpdateParamsAmino): _204.MsgUpdateParams;
                toAmino(message: _204.MsgUpdateParams): _204.MsgUpdateParamsAmino;
                fromAminoMsg(object: _204.MsgUpdateParamsAminoMsg): _204.MsgUpdateParams;
                toAminoMsg(message: _204.MsgUpdateParams): _204.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _204.MsgUpdateParamsProtoMsg): _204.MsgUpdateParams;
                toProto(message: _204.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _204.MsgUpdateParams): _204.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _204.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _204.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_204.MsgUpdateParamsResponse>): _204.MsgUpdateParamsResponse;
                fromAmino(_: _204.MsgUpdateParamsResponseAmino): _204.MsgUpdateParamsResponse;
                toAmino(_: _204.MsgUpdateParamsResponse): _204.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _204.MsgUpdateParamsResponseAminoMsg): _204.MsgUpdateParamsResponse;
                toAminoMsg(message: _204.MsgUpdateParamsResponse): _204.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _204.MsgUpdateParamsResponseProtoMsg): _204.MsgUpdateParamsResponse;
                toProto(message: _204.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _204.MsgUpdateParamsResponse): _204.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _203.BondStatus;
            bondStatusToJSON(object: _203.BondStatus): string;
            infractionFromJSON(object: any): _203.Infraction;
            infractionToJSON(object: _203.Infraction): string;
            BondStatus: typeof _203.BondStatus;
            BondStatusSDKType: typeof _203.BondStatus;
            BondStatusAmino: typeof _203.BondStatus;
            Infraction: typeof _203.Infraction;
            InfractionSDKType: typeof _203.Infraction;
            InfractionAmino: typeof _203.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _203.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.HistoricalInfo;
                fromPartial(object: Partial<_203.HistoricalInfo>): _203.HistoricalInfo;
                fromAmino(object: _203.HistoricalInfoAmino): _203.HistoricalInfo;
                toAmino(message: _203.HistoricalInfo): _203.HistoricalInfoAmino;
                fromAminoMsg(object: _203.HistoricalInfoAminoMsg): _203.HistoricalInfo;
                toAminoMsg(message: _203.HistoricalInfo): _203.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _203.HistoricalInfoProtoMsg): _203.HistoricalInfo;
                toProto(message: _203.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _203.HistoricalInfo): _203.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _203.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.CommissionRates;
                fromPartial(object: Partial<_203.CommissionRates>): _203.CommissionRates;
                fromAmino(object: _203.CommissionRatesAmino): _203.CommissionRates;
                toAmino(message: _203.CommissionRates): _203.CommissionRatesAmino;
                fromAminoMsg(object: _203.CommissionRatesAminoMsg): _203.CommissionRates;
                toAminoMsg(message: _203.CommissionRates): _203.CommissionRatesAminoMsg;
                fromProtoMsg(message: _203.CommissionRatesProtoMsg): _203.CommissionRates;
                toProto(message: _203.CommissionRates): Uint8Array;
                toProtoMsg(message: _203.CommissionRates): _203.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _203.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.Commission;
                fromPartial(object: Partial<_203.Commission>): _203.Commission;
                fromAmino(object: _203.CommissionAmino): _203.Commission;
                toAmino(message: _203.Commission): _203.CommissionAmino;
                fromAminoMsg(object: _203.CommissionAminoMsg): _203.Commission;
                toAminoMsg(message: _203.Commission): _203.CommissionAminoMsg;
                fromProtoMsg(message: _203.CommissionProtoMsg): _203.Commission;
                toProto(message: _203.Commission): Uint8Array;
                toProtoMsg(message: _203.Commission): _203.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _203.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.Description;
                fromPartial(object: Partial<_203.Description>): _203.Description;
                fromAmino(object: _203.DescriptionAmino): _203.Description;
                toAmino(message: _203.Description): _203.DescriptionAmino;
                fromAminoMsg(object: _203.DescriptionAminoMsg): _203.Description;
                toAminoMsg(message: _203.Description): _203.DescriptionAminoMsg;
                fromProtoMsg(message: _203.DescriptionProtoMsg): _203.Description;
                toProto(message: _203.Description): Uint8Array;
                toProtoMsg(message: _203.Description): _203.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _203.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.Validator;
                fromPartial(object: Partial<_203.Validator>): _203.Validator;
                fromAmino(object: _203.ValidatorAmino): _203.Validator;
                toAmino(message: _203.Validator): _203.ValidatorAmino;
                fromAminoMsg(object: _203.ValidatorAminoMsg): _203.Validator;
                toAminoMsg(message: _203.Validator): _203.ValidatorAminoMsg;
                fromProtoMsg(message: _203.ValidatorProtoMsg): _203.Validator;
                toProto(message: _203.Validator): Uint8Array;
                toProtoMsg(message: _203.Validator): _203.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _203.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.ValAddresses;
                fromPartial(object: Partial<_203.ValAddresses>): _203.ValAddresses;
                fromAmino(object: _203.ValAddressesAmino): _203.ValAddresses;
                toAmino(message: _203.ValAddresses): _203.ValAddressesAmino;
                fromAminoMsg(object: _203.ValAddressesAminoMsg): _203.ValAddresses;
                toAminoMsg(message: _203.ValAddresses): _203.ValAddressesAminoMsg;
                fromProtoMsg(message: _203.ValAddressesProtoMsg): _203.ValAddresses;
                toProto(message: _203.ValAddresses): Uint8Array;
                toProtoMsg(message: _203.ValAddresses): _203.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _203.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.DVPair;
                fromPartial(object: Partial<_203.DVPair>): _203.DVPair;
                fromAmino(object: _203.DVPairAmino): _203.DVPair;
                toAmino(message: _203.DVPair): _203.DVPairAmino;
                fromAminoMsg(object: _203.DVPairAminoMsg): _203.DVPair;
                toAminoMsg(message: _203.DVPair): _203.DVPairAminoMsg;
                fromProtoMsg(message: _203.DVPairProtoMsg): _203.DVPair;
                toProto(message: _203.DVPair): Uint8Array;
                toProtoMsg(message: _203.DVPair): _203.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _203.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.DVPairs;
                fromPartial(object: Partial<_203.DVPairs>): _203.DVPairs;
                fromAmino(object: _203.DVPairsAmino): _203.DVPairs;
                toAmino(message: _203.DVPairs): _203.DVPairsAmino;
                fromAminoMsg(object: _203.DVPairsAminoMsg): _203.DVPairs;
                toAminoMsg(message: _203.DVPairs): _203.DVPairsAminoMsg;
                fromProtoMsg(message: _203.DVPairsProtoMsg): _203.DVPairs;
                toProto(message: _203.DVPairs): Uint8Array;
                toProtoMsg(message: _203.DVPairs): _203.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _203.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.DVVTriplet;
                fromPartial(object: Partial<_203.DVVTriplet>): _203.DVVTriplet;
                fromAmino(object: _203.DVVTripletAmino): _203.DVVTriplet;
                toAmino(message: _203.DVVTriplet): _203.DVVTripletAmino;
                fromAminoMsg(object: _203.DVVTripletAminoMsg): _203.DVVTriplet;
                toAminoMsg(message: _203.DVVTriplet): _203.DVVTripletAminoMsg;
                fromProtoMsg(message: _203.DVVTripletProtoMsg): _203.DVVTriplet;
                toProto(message: _203.DVVTriplet): Uint8Array;
                toProtoMsg(message: _203.DVVTriplet): _203.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _203.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.DVVTriplets;
                fromPartial(object: Partial<_203.DVVTriplets>): _203.DVVTriplets;
                fromAmino(object: _203.DVVTripletsAmino): _203.DVVTriplets;
                toAmino(message: _203.DVVTriplets): _203.DVVTripletsAmino;
                fromAminoMsg(object: _203.DVVTripletsAminoMsg): _203.DVVTriplets;
                toAminoMsg(message: _203.DVVTriplets): _203.DVVTripletsAminoMsg;
                fromProtoMsg(message: _203.DVVTripletsProtoMsg): _203.DVVTriplets;
                toProto(message: _203.DVVTriplets): Uint8Array;
                toProtoMsg(message: _203.DVVTriplets): _203.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _203.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.Delegation;
                fromPartial(object: Partial<_203.Delegation>): _203.Delegation;
                fromAmino(object: _203.DelegationAmino): _203.Delegation;
                toAmino(message: _203.Delegation): _203.DelegationAmino;
                fromAminoMsg(object: _203.DelegationAminoMsg): _203.Delegation;
                toAminoMsg(message: _203.Delegation): _203.DelegationAminoMsg;
                fromProtoMsg(message: _203.DelegationProtoMsg): _203.Delegation;
                toProto(message: _203.Delegation): Uint8Array;
                toProtoMsg(message: _203.Delegation): _203.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _203.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.UnbondingDelegation;
                fromPartial(object: Partial<_203.UnbondingDelegation>): _203.UnbondingDelegation;
                fromAmino(object: _203.UnbondingDelegationAmino): _203.UnbondingDelegation;
                toAmino(message: _203.UnbondingDelegation): _203.UnbondingDelegationAmino;
                fromAminoMsg(object: _203.UnbondingDelegationAminoMsg): _203.UnbondingDelegation;
                toAminoMsg(message: _203.UnbondingDelegation): _203.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _203.UnbondingDelegationProtoMsg): _203.UnbondingDelegation;
                toProto(message: _203.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _203.UnbondingDelegation): _203.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _203.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.UnbondingDelegationEntry;
                fromPartial(object: Partial<_203.UnbondingDelegationEntry>): _203.UnbondingDelegationEntry;
                fromAmino(object: _203.UnbondingDelegationEntryAmino): _203.UnbondingDelegationEntry;
                toAmino(message: _203.UnbondingDelegationEntry): _203.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _203.UnbondingDelegationEntryAminoMsg): _203.UnbondingDelegationEntry;
                toAminoMsg(message: _203.UnbondingDelegationEntry): _203.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _203.UnbondingDelegationEntryProtoMsg): _203.UnbondingDelegationEntry;
                toProto(message: _203.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _203.UnbondingDelegationEntry): _203.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _203.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.RedelegationEntry;
                fromPartial(object: Partial<_203.RedelegationEntry>): _203.RedelegationEntry;
                fromAmino(object: _203.RedelegationEntryAmino): _203.RedelegationEntry;
                toAmino(message: _203.RedelegationEntry): _203.RedelegationEntryAmino;
                fromAminoMsg(object: _203.RedelegationEntryAminoMsg): _203.RedelegationEntry;
                toAminoMsg(message: _203.RedelegationEntry): _203.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _203.RedelegationEntryProtoMsg): _203.RedelegationEntry;
                toProto(message: _203.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _203.RedelegationEntry): _203.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _203.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.Redelegation;
                fromPartial(object: Partial<_203.Redelegation>): _203.Redelegation;
                fromAmino(object: _203.RedelegationAmino): _203.Redelegation;
                toAmino(message: _203.Redelegation): _203.RedelegationAmino;
                fromAminoMsg(object: _203.RedelegationAminoMsg): _203.Redelegation;
                toAminoMsg(message: _203.Redelegation): _203.RedelegationAminoMsg;
                fromProtoMsg(message: _203.RedelegationProtoMsg): _203.Redelegation;
                toProto(message: _203.Redelegation): Uint8Array;
                toProtoMsg(message: _203.Redelegation): _203.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _203.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.Params;
                fromPartial(object: Partial<_203.Params>): _203.Params;
                fromAmino(object: _203.ParamsAmino): _203.Params;
                toAmino(message: _203.Params): _203.ParamsAmino;
                fromAminoMsg(object: _203.ParamsAminoMsg): _203.Params;
                toAminoMsg(message: _203.Params): _203.ParamsAminoMsg;
                fromProtoMsg(message: _203.ParamsProtoMsg): _203.Params;
                toProto(message: _203.Params): Uint8Array;
                toProtoMsg(message: _203.Params): _203.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _203.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.DelegationResponse;
                fromPartial(object: Partial<_203.DelegationResponse>): _203.DelegationResponse;
                fromAmino(object: _203.DelegationResponseAmino): _203.DelegationResponse;
                toAmino(message: _203.DelegationResponse): _203.DelegationResponseAmino;
                fromAminoMsg(object: _203.DelegationResponseAminoMsg): _203.DelegationResponse;
                toAminoMsg(message: _203.DelegationResponse): _203.DelegationResponseAminoMsg;
                fromProtoMsg(message: _203.DelegationResponseProtoMsg): _203.DelegationResponse;
                toProto(message: _203.DelegationResponse): Uint8Array;
                toProtoMsg(message: _203.DelegationResponse): _203.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _203.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.RedelegationEntryResponse;
                fromPartial(object: Partial<_203.RedelegationEntryResponse>): _203.RedelegationEntryResponse;
                fromAmino(object: _203.RedelegationEntryResponseAmino): _203.RedelegationEntryResponse;
                toAmino(message: _203.RedelegationEntryResponse): _203.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _203.RedelegationEntryResponseAminoMsg): _203.RedelegationEntryResponse;
                toAminoMsg(message: _203.RedelegationEntryResponse): _203.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _203.RedelegationEntryResponseProtoMsg): _203.RedelegationEntryResponse;
                toProto(message: _203.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _203.RedelegationEntryResponse): _203.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _203.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.RedelegationResponse;
                fromPartial(object: Partial<_203.RedelegationResponse>): _203.RedelegationResponse;
                fromAmino(object: _203.RedelegationResponseAmino): _203.RedelegationResponse;
                toAmino(message: _203.RedelegationResponse): _203.RedelegationResponseAmino;
                fromAminoMsg(object: _203.RedelegationResponseAminoMsg): _203.RedelegationResponse;
                toAminoMsg(message: _203.RedelegationResponse): _203.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _203.RedelegationResponseProtoMsg): _203.RedelegationResponse;
                toProto(message: _203.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _203.RedelegationResponse): _203.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _203.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.Pool;
                fromPartial(object: Partial<_203.Pool>): _203.Pool;
                fromAmino(object: _203.PoolAmino): _203.Pool;
                toAmino(message: _203.Pool): _203.PoolAmino;
                fromAminoMsg(object: _203.PoolAminoMsg): _203.Pool;
                toAminoMsg(message: _203.Pool): _203.PoolAminoMsg;
                fromProtoMsg(message: _203.PoolProtoMsg): _203.Pool;
                toProto(message: _203.Pool): Uint8Array;
                toProtoMsg(message: _203.Pool): _203.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _203.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _203.ValidatorUpdates;
                fromPartial(object: Partial<_203.ValidatorUpdates>): _203.ValidatorUpdates;
                fromAmino(object: _203.ValidatorUpdatesAmino): _203.ValidatorUpdates;
                toAmino(message: _203.ValidatorUpdates): _203.ValidatorUpdatesAmino;
                fromAminoMsg(object: _203.ValidatorUpdatesAminoMsg): _203.ValidatorUpdates;
                toAminoMsg(message: _203.ValidatorUpdates): _203.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _203.ValidatorUpdatesProtoMsg): _203.ValidatorUpdates;
                toProto(message: _203.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _203.ValidatorUpdates): _203.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _202.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryValidatorsRequest;
                fromPartial(object: Partial<_202.QueryValidatorsRequest>): _202.QueryValidatorsRequest;
                fromAmino(object: _202.QueryValidatorsRequestAmino): _202.QueryValidatorsRequest;
                toAmino(message: _202.QueryValidatorsRequest): _202.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _202.QueryValidatorsRequestAminoMsg): _202.QueryValidatorsRequest;
                toAminoMsg(message: _202.QueryValidatorsRequest): _202.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _202.QueryValidatorsRequestProtoMsg): _202.QueryValidatorsRequest;
                toProto(message: _202.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _202.QueryValidatorsRequest): _202.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _202.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryValidatorsResponse;
                fromPartial(object: Partial<_202.QueryValidatorsResponse>): _202.QueryValidatorsResponse;
                fromAmino(object: _202.QueryValidatorsResponseAmino): _202.QueryValidatorsResponse;
                toAmino(message: _202.QueryValidatorsResponse): _202.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _202.QueryValidatorsResponseAminoMsg): _202.QueryValidatorsResponse;
                toAminoMsg(message: _202.QueryValidatorsResponse): _202.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _202.QueryValidatorsResponseProtoMsg): _202.QueryValidatorsResponse;
                toProto(message: _202.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _202.QueryValidatorsResponse): _202.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _202.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryValidatorRequest;
                fromPartial(object: Partial<_202.QueryValidatorRequest>): _202.QueryValidatorRequest;
                fromAmino(object: _202.QueryValidatorRequestAmino): _202.QueryValidatorRequest;
                toAmino(message: _202.QueryValidatorRequest): _202.QueryValidatorRequestAmino;
                fromAminoMsg(object: _202.QueryValidatorRequestAminoMsg): _202.QueryValidatorRequest;
                toAminoMsg(message: _202.QueryValidatorRequest): _202.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _202.QueryValidatorRequestProtoMsg): _202.QueryValidatorRequest;
                toProto(message: _202.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _202.QueryValidatorRequest): _202.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _202.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryValidatorResponse;
                fromPartial(object: Partial<_202.QueryValidatorResponse>): _202.QueryValidatorResponse;
                fromAmino(object: _202.QueryValidatorResponseAmino): _202.QueryValidatorResponse;
                toAmino(message: _202.QueryValidatorResponse): _202.QueryValidatorResponseAmino;
                fromAminoMsg(object: _202.QueryValidatorResponseAminoMsg): _202.QueryValidatorResponse;
                toAminoMsg(message: _202.QueryValidatorResponse): _202.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _202.QueryValidatorResponseProtoMsg): _202.QueryValidatorResponse;
                toProto(message: _202.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _202.QueryValidatorResponse): _202.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _202.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_202.QueryValidatorDelegationsRequest>): _202.QueryValidatorDelegationsRequest;
                fromAmino(object: _202.QueryValidatorDelegationsRequestAmino): _202.QueryValidatorDelegationsRequest;
                toAmino(message: _202.QueryValidatorDelegationsRequest): _202.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _202.QueryValidatorDelegationsRequestAminoMsg): _202.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _202.QueryValidatorDelegationsRequest): _202.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _202.QueryValidatorDelegationsRequestProtoMsg): _202.QueryValidatorDelegationsRequest;
                toProto(message: _202.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _202.QueryValidatorDelegationsRequest): _202.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _202.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_202.QueryValidatorDelegationsResponse>): _202.QueryValidatorDelegationsResponse;
                fromAmino(object: _202.QueryValidatorDelegationsResponseAmino): _202.QueryValidatorDelegationsResponse;
                toAmino(message: _202.QueryValidatorDelegationsResponse): _202.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _202.QueryValidatorDelegationsResponseAminoMsg): _202.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _202.QueryValidatorDelegationsResponse): _202.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _202.QueryValidatorDelegationsResponseProtoMsg): _202.QueryValidatorDelegationsResponse;
                toProto(message: _202.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _202.QueryValidatorDelegationsResponse): _202.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _202.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_202.QueryValidatorUnbondingDelegationsRequest>): _202.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _202.QueryValidatorUnbondingDelegationsRequestAmino): _202.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _202.QueryValidatorUnbondingDelegationsRequest): _202.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _202.QueryValidatorUnbondingDelegationsRequestAminoMsg): _202.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _202.QueryValidatorUnbondingDelegationsRequest): _202.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _202.QueryValidatorUnbondingDelegationsRequestProtoMsg): _202.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _202.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _202.QueryValidatorUnbondingDelegationsRequest): _202.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _202.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_202.QueryValidatorUnbondingDelegationsResponse>): _202.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _202.QueryValidatorUnbondingDelegationsResponseAmino): _202.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _202.QueryValidatorUnbondingDelegationsResponse): _202.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _202.QueryValidatorUnbondingDelegationsResponseAminoMsg): _202.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _202.QueryValidatorUnbondingDelegationsResponse): _202.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _202.QueryValidatorUnbondingDelegationsResponseProtoMsg): _202.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _202.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _202.QueryValidatorUnbondingDelegationsResponse): _202.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _202.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryDelegationRequest;
                fromPartial(object: Partial<_202.QueryDelegationRequest>): _202.QueryDelegationRequest;
                fromAmino(object: _202.QueryDelegationRequestAmino): _202.QueryDelegationRequest;
                toAmino(message: _202.QueryDelegationRequest): _202.QueryDelegationRequestAmino;
                fromAminoMsg(object: _202.QueryDelegationRequestAminoMsg): _202.QueryDelegationRequest;
                toAminoMsg(message: _202.QueryDelegationRequest): _202.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _202.QueryDelegationRequestProtoMsg): _202.QueryDelegationRequest;
                toProto(message: _202.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _202.QueryDelegationRequest): _202.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _202.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryDelegationResponse;
                fromPartial(object: Partial<_202.QueryDelegationResponse>): _202.QueryDelegationResponse;
                fromAmino(object: _202.QueryDelegationResponseAmino): _202.QueryDelegationResponse;
                toAmino(message: _202.QueryDelegationResponse): _202.QueryDelegationResponseAmino;
                fromAminoMsg(object: _202.QueryDelegationResponseAminoMsg): _202.QueryDelegationResponse;
                toAminoMsg(message: _202.QueryDelegationResponse): _202.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _202.QueryDelegationResponseProtoMsg): _202.QueryDelegationResponse;
                toProto(message: _202.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _202.QueryDelegationResponse): _202.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _202.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_202.QueryUnbondingDelegationRequest>): _202.QueryUnbondingDelegationRequest;
                fromAmino(object: _202.QueryUnbondingDelegationRequestAmino): _202.QueryUnbondingDelegationRequest;
                toAmino(message: _202.QueryUnbondingDelegationRequest): _202.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _202.QueryUnbondingDelegationRequestAminoMsg): _202.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _202.QueryUnbondingDelegationRequest): _202.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _202.QueryUnbondingDelegationRequestProtoMsg): _202.QueryUnbondingDelegationRequest;
                toProto(message: _202.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _202.QueryUnbondingDelegationRequest): _202.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _202.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_202.QueryUnbondingDelegationResponse>): _202.QueryUnbondingDelegationResponse;
                fromAmino(object: _202.QueryUnbondingDelegationResponseAmino): _202.QueryUnbondingDelegationResponse;
                toAmino(message: _202.QueryUnbondingDelegationResponse): _202.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _202.QueryUnbondingDelegationResponseAminoMsg): _202.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _202.QueryUnbondingDelegationResponse): _202.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _202.QueryUnbondingDelegationResponseProtoMsg): _202.QueryUnbondingDelegationResponse;
                toProto(message: _202.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _202.QueryUnbondingDelegationResponse): _202.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _202.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_202.QueryDelegatorDelegationsRequest>): _202.QueryDelegatorDelegationsRequest;
                fromAmino(object: _202.QueryDelegatorDelegationsRequestAmino): _202.QueryDelegatorDelegationsRequest;
                toAmino(message: _202.QueryDelegatorDelegationsRequest): _202.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _202.QueryDelegatorDelegationsRequestAminoMsg): _202.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _202.QueryDelegatorDelegationsRequest): _202.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _202.QueryDelegatorDelegationsRequestProtoMsg): _202.QueryDelegatorDelegationsRequest;
                toProto(message: _202.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _202.QueryDelegatorDelegationsRequest): _202.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _202.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_202.QueryDelegatorDelegationsResponse>): _202.QueryDelegatorDelegationsResponse;
                fromAmino(object: _202.QueryDelegatorDelegationsResponseAmino): _202.QueryDelegatorDelegationsResponse;
                toAmino(message: _202.QueryDelegatorDelegationsResponse): _202.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _202.QueryDelegatorDelegationsResponseAminoMsg): _202.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _202.QueryDelegatorDelegationsResponse): _202.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _202.QueryDelegatorDelegationsResponseProtoMsg): _202.QueryDelegatorDelegationsResponse;
                toProto(message: _202.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _202.QueryDelegatorDelegationsResponse): _202.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _202.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_202.QueryDelegatorUnbondingDelegationsRequest>): _202.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _202.QueryDelegatorUnbondingDelegationsRequestAmino): _202.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _202.QueryDelegatorUnbondingDelegationsRequest): _202.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _202.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _202.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _202.QueryDelegatorUnbondingDelegationsRequest): _202.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _202.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _202.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _202.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _202.QueryDelegatorUnbondingDelegationsRequest): _202.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _202.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_202.QueryDelegatorUnbondingDelegationsResponse>): _202.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _202.QueryDelegatorUnbondingDelegationsResponseAmino): _202.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _202.QueryDelegatorUnbondingDelegationsResponse): _202.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _202.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _202.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _202.QueryDelegatorUnbondingDelegationsResponse): _202.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _202.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _202.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _202.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _202.QueryDelegatorUnbondingDelegationsResponse): _202.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _202.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryRedelegationsRequest;
                fromPartial(object: Partial<_202.QueryRedelegationsRequest>): _202.QueryRedelegationsRequest;
                fromAmino(object: _202.QueryRedelegationsRequestAmino): _202.QueryRedelegationsRequest;
                toAmino(message: _202.QueryRedelegationsRequest): _202.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _202.QueryRedelegationsRequestAminoMsg): _202.QueryRedelegationsRequest;
                toAminoMsg(message: _202.QueryRedelegationsRequest): _202.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _202.QueryRedelegationsRequestProtoMsg): _202.QueryRedelegationsRequest;
                toProto(message: _202.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _202.QueryRedelegationsRequest): _202.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _202.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryRedelegationsResponse;
                fromPartial(object: Partial<_202.QueryRedelegationsResponse>): _202.QueryRedelegationsResponse;
                fromAmino(object: _202.QueryRedelegationsResponseAmino): _202.QueryRedelegationsResponse;
                toAmino(message: _202.QueryRedelegationsResponse): _202.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _202.QueryRedelegationsResponseAminoMsg): _202.QueryRedelegationsResponse;
                toAminoMsg(message: _202.QueryRedelegationsResponse): _202.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _202.QueryRedelegationsResponseProtoMsg): _202.QueryRedelegationsResponse;
                toProto(message: _202.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _202.QueryRedelegationsResponse): _202.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _202.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_202.QueryDelegatorValidatorsRequest>): _202.QueryDelegatorValidatorsRequest;
                fromAmino(object: _202.QueryDelegatorValidatorsRequestAmino): _202.QueryDelegatorValidatorsRequest;
                toAmino(message: _202.QueryDelegatorValidatorsRequest): _202.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _202.QueryDelegatorValidatorsRequestAminoMsg): _202.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _202.QueryDelegatorValidatorsRequest): _202.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _202.QueryDelegatorValidatorsRequestProtoMsg): _202.QueryDelegatorValidatorsRequest;
                toProto(message: _202.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _202.QueryDelegatorValidatorsRequest): _202.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _202.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_202.QueryDelegatorValidatorsResponse>): _202.QueryDelegatorValidatorsResponse;
                fromAmino(object: _202.QueryDelegatorValidatorsResponseAmino): _202.QueryDelegatorValidatorsResponse;
                toAmino(message: _202.QueryDelegatorValidatorsResponse): _202.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _202.QueryDelegatorValidatorsResponseAminoMsg): _202.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _202.QueryDelegatorValidatorsResponse): _202.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _202.QueryDelegatorValidatorsResponseProtoMsg): _202.QueryDelegatorValidatorsResponse;
                toProto(message: _202.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _202.QueryDelegatorValidatorsResponse): _202.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _202.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_202.QueryDelegatorValidatorRequest>): _202.QueryDelegatorValidatorRequest;
                fromAmino(object: _202.QueryDelegatorValidatorRequestAmino): _202.QueryDelegatorValidatorRequest;
                toAmino(message: _202.QueryDelegatorValidatorRequest): _202.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _202.QueryDelegatorValidatorRequestAminoMsg): _202.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _202.QueryDelegatorValidatorRequest): _202.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _202.QueryDelegatorValidatorRequestProtoMsg): _202.QueryDelegatorValidatorRequest;
                toProto(message: _202.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _202.QueryDelegatorValidatorRequest): _202.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _202.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_202.QueryDelegatorValidatorResponse>): _202.QueryDelegatorValidatorResponse;
                fromAmino(object: _202.QueryDelegatorValidatorResponseAmino): _202.QueryDelegatorValidatorResponse;
                toAmino(message: _202.QueryDelegatorValidatorResponse): _202.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _202.QueryDelegatorValidatorResponseAminoMsg): _202.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _202.QueryDelegatorValidatorResponse): _202.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _202.QueryDelegatorValidatorResponseProtoMsg): _202.QueryDelegatorValidatorResponse;
                toProto(message: _202.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _202.QueryDelegatorValidatorResponse): _202.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _202.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_202.QueryHistoricalInfoRequest>): _202.QueryHistoricalInfoRequest;
                fromAmino(object: _202.QueryHistoricalInfoRequestAmino): _202.QueryHistoricalInfoRequest;
                toAmino(message: _202.QueryHistoricalInfoRequest): _202.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _202.QueryHistoricalInfoRequestAminoMsg): _202.QueryHistoricalInfoRequest;
                toAminoMsg(message: _202.QueryHistoricalInfoRequest): _202.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _202.QueryHistoricalInfoRequestProtoMsg): _202.QueryHistoricalInfoRequest;
                toProto(message: _202.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _202.QueryHistoricalInfoRequest): _202.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _202.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_202.QueryHistoricalInfoResponse>): _202.QueryHistoricalInfoResponse;
                fromAmino(object: _202.QueryHistoricalInfoResponseAmino): _202.QueryHistoricalInfoResponse;
                toAmino(message: _202.QueryHistoricalInfoResponse): _202.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _202.QueryHistoricalInfoResponseAminoMsg): _202.QueryHistoricalInfoResponse;
                toAminoMsg(message: _202.QueryHistoricalInfoResponse): _202.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _202.QueryHistoricalInfoResponseProtoMsg): _202.QueryHistoricalInfoResponse;
                toProto(message: _202.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _202.QueryHistoricalInfoResponse): _202.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _202.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _202.QueryPoolRequest;
                fromPartial(_: Partial<_202.QueryPoolRequest>): _202.QueryPoolRequest;
                fromAmino(_: _202.QueryPoolRequestAmino): _202.QueryPoolRequest;
                toAmino(_: _202.QueryPoolRequest): _202.QueryPoolRequestAmino;
                fromAminoMsg(object: _202.QueryPoolRequestAminoMsg): _202.QueryPoolRequest;
                toAminoMsg(message: _202.QueryPoolRequest): _202.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _202.QueryPoolRequestProtoMsg): _202.QueryPoolRequest;
                toProto(message: _202.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _202.QueryPoolRequest): _202.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _202.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryPoolResponse;
                fromPartial(object: Partial<_202.QueryPoolResponse>): _202.QueryPoolResponse;
                fromAmino(object: _202.QueryPoolResponseAmino): _202.QueryPoolResponse;
                toAmino(message: _202.QueryPoolResponse): _202.QueryPoolResponseAmino;
                fromAminoMsg(object: _202.QueryPoolResponseAminoMsg): _202.QueryPoolResponse;
                toAminoMsg(message: _202.QueryPoolResponse): _202.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _202.QueryPoolResponseProtoMsg): _202.QueryPoolResponse;
                toProto(message: _202.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _202.QueryPoolResponse): _202.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _202.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _202.QueryParamsRequest;
                fromPartial(_: Partial<_202.QueryParamsRequest>): _202.QueryParamsRequest;
                fromAmino(_: _202.QueryParamsRequestAmino): _202.QueryParamsRequest;
                toAmino(_: _202.QueryParamsRequest): _202.QueryParamsRequestAmino;
                fromAminoMsg(object: _202.QueryParamsRequestAminoMsg): _202.QueryParamsRequest;
                toAminoMsg(message: _202.QueryParamsRequest): _202.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _202.QueryParamsRequestProtoMsg): _202.QueryParamsRequest;
                toProto(message: _202.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _202.QueryParamsRequest): _202.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _202.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.QueryParamsResponse;
                fromPartial(object: Partial<_202.QueryParamsResponse>): _202.QueryParamsResponse;
                fromAmino(object: _202.QueryParamsResponseAmino): _202.QueryParamsResponse;
                toAmino(message: _202.QueryParamsResponse): _202.QueryParamsResponseAmino;
                fromAminoMsg(object: _202.QueryParamsResponseAminoMsg): _202.QueryParamsResponse;
                toAminoMsg(message: _202.QueryParamsResponse): _202.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _202.QueryParamsResponseProtoMsg): _202.QueryParamsResponse;
                toProto(message: _202.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _202.QueryParamsResponse): _202.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _201.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.GenesisState;
                fromPartial(object: Partial<_201.GenesisState>): _201.GenesisState;
                fromAmino(object: _201.GenesisStateAmino): _201.GenesisState;
                toAmino(message: _201.GenesisState): _201.GenesisStateAmino;
                fromAminoMsg(object: _201.GenesisStateAminoMsg): _201.GenesisState;
                toAminoMsg(message: _201.GenesisState): _201.GenesisStateAminoMsg;
                fromProtoMsg(message: _201.GenesisStateProtoMsg): _201.GenesisState;
                toProto(message: _201.GenesisState): Uint8Array;
                toProtoMsg(message: _201.GenesisState): _201.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _201.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.LastValidatorPower;
                fromPartial(object: Partial<_201.LastValidatorPower>): _201.LastValidatorPower;
                fromAmino(object: _201.LastValidatorPowerAmino): _201.LastValidatorPower;
                toAmino(message: _201.LastValidatorPower): _201.LastValidatorPowerAmino;
                fromAminoMsg(object: _201.LastValidatorPowerAminoMsg): _201.LastValidatorPower;
                toAminoMsg(message: _201.LastValidatorPower): _201.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _201.LastValidatorPowerProtoMsg): _201.LastValidatorPower;
                toProto(message: _201.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _201.LastValidatorPower): _201.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _200.AuthorizationType;
            authorizationTypeToJSON(object: _200.AuthorizationType): string;
            AuthorizationType: typeof _200.AuthorizationType;
            AuthorizationTypeSDKType: typeof _200.AuthorizationType;
            AuthorizationTypeAmino: typeof _200.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _200.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.StakeAuthorization;
                fromPartial(object: Partial<_200.StakeAuthorization>): _200.StakeAuthorization;
                fromAmino(object: _200.StakeAuthorizationAmino): _200.StakeAuthorization;
                toAmino(message: _200.StakeAuthorization): _200.StakeAuthorizationAmino;
                fromAminoMsg(object: _200.StakeAuthorizationAminoMsg): _200.StakeAuthorization;
                toAminoMsg(message: _200.StakeAuthorization): _200.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _200.StakeAuthorizationProtoMsg): _200.StakeAuthorization;
                toProto(message: _200.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _200.StakeAuthorization): _200.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _200.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.StakeAuthorization_Validators;
                fromPartial(object: Partial<_200.StakeAuthorization_Validators>): _200.StakeAuthorization_Validators;
                fromAmino(object: _200.StakeAuthorization_ValidatorsAmino): _200.StakeAuthorization_Validators;
                toAmino(message: _200.StakeAuthorization_Validators): _200.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _200.StakeAuthorization_ValidatorsAminoMsg): _200.StakeAuthorization_Validators;
                toAminoMsg(message: _200.StakeAuthorization_Validators): _200.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _200.StakeAuthorization_ValidatorsProtoMsg): _200.StakeAuthorization_Validators;
                toProto(message: _200.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _200.StakeAuthorization_Validators): _200.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _205.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _205.Config;
                    fromPartial(object: Partial<_205.Config>): _205.Config;
                    fromAmino(object: _205.ConfigAmino): _205.Config;
                    toAmino(message: _205.Config): _205.ConfigAmino;
                    fromAminoMsg(object: _205.ConfigAminoMsg): _205.Config;
                    toAminoMsg(message: _205.Config): _205.ConfigAminoMsg;
                    fromProtoMsg(message: _205.ConfigProtoMsg): _205.Config;
                    toProto(message: _205.Config): Uint8Array;
                    toProtoMsg(message: _205.Config): _205.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _206.SignMode;
                signModeToJSON(object: _206.SignMode): string;
                SignMode: typeof _206.SignMode;
                SignModeSDKType: typeof _206.SignMode;
                SignModeAmino: typeof _206.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _206.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _206.SignatureDescriptors;
                    fromPartial(object: Partial<_206.SignatureDescriptors>): _206.SignatureDescriptors;
                    fromAmino(object: _206.SignatureDescriptorsAmino): _206.SignatureDescriptors;
                    toAmino(message: _206.SignatureDescriptors): _206.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _206.SignatureDescriptorsAminoMsg): _206.SignatureDescriptors;
                    toAminoMsg(message: _206.SignatureDescriptors): _206.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _206.SignatureDescriptorsProtoMsg): _206.SignatureDescriptors;
                    toProto(message: _206.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _206.SignatureDescriptors): _206.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _206.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _206.SignatureDescriptor;
                    fromPartial(object: Partial<_206.SignatureDescriptor>): _206.SignatureDescriptor;
                    fromAmino(object: _206.SignatureDescriptorAmino): _206.SignatureDescriptor;
                    toAmino(message: _206.SignatureDescriptor): _206.SignatureDescriptorAmino;
                    fromAminoMsg(object: _206.SignatureDescriptorAminoMsg): _206.SignatureDescriptor;
                    toAminoMsg(message: _206.SignatureDescriptor): _206.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _206.SignatureDescriptorProtoMsg): _206.SignatureDescriptor;
                    toProto(message: _206.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _206.SignatureDescriptor): _206.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _206.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _206.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_206.SignatureDescriptor_Data>): _206.SignatureDescriptor_Data;
                    fromAmino(object: _206.SignatureDescriptor_DataAmino): _206.SignatureDescriptor_Data;
                    toAmino(message: _206.SignatureDescriptor_Data): _206.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _206.SignatureDescriptor_DataAminoMsg): _206.SignatureDescriptor_Data;
                    toAminoMsg(message: _206.SignatureDescriptor_Data): _206.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _206.SignatureDescriptor_DataProtoMsg): _206.SignatureDescriptor_Data;
                    toProto(message: _206.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _206.SignatureDescriptor_Data): _206.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _206.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _206.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_206.SignatureDescriptor_Data_Single>): _206.SignatureDescriptor_Data_Single;
                    fromAmino(object: _206.SignatureDescriptor_Data_SingleAmino): _206.SignatureDescriptor_Data_Single;
                    toAmino(message: _206.SignatureDescriptor_Data_Single): _206.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _206.SignatureDescriptor_Data_SingleAminoMsg): _206.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _206.SignatureDescriptor_Data_Single): _206.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _206.SignatureDescriptor_Data_SingleProtoMsg): _206.SignatureDescriptor_Data_Single;
                    toProto(message: _206.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _206.SignatureDescriptor_Data_Single): _206.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _206.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _206.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_206.SignatureDescriptor_Data_Multi>): _206.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _206.SignatureDescriptor_Data_MultiAmino): _206.SignatureDescriptor_Data_Multi;
                    toAmino(message: _206.SignatureDescriptor_Data_Multi): _206.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _206.SignatureDescriptor_Data_MultiAminoMsg): _206.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _206.SignatureDescriptor_Data_Multi): _206.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _206.SignatureDescriptor_Data_MultiProtoMsg): _206.SignatureDescriptor_Data_Multi;
                    toProto(message: _206.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _206.SignatureDescriptor_Data_Multi): _206.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _405.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _207.SimulateRequest): Promise<_207.SimulateResponse>;
                getTx(request: _207.GetTxRequest): Promise<_207.GetTxResponse>;
                broadcastTx(request: _207.BroadcastTxRequest): Promise<_207.BroadcastTxResponse>;
                getTxsEvent(request: _207.GetTxsEventRequest): Promise<_207.GetTxsEventResponse>;
                getBlockWithTxs(request: _207.GetBlockWithTxsRequest): Promise<_207.GetBlockWithTxsResponse>;
                txDecode(request: _207.TxDecodeRequest): Promise<_207.TxDecodeResponse>;
                txEncode(request: _207.TxEncodeRequest): Promise<_207.TxEncodeResponse>;
                txEncodeAmino(request: _207.TxEncodeAminoRequest): Promise<_207.TxEncodeAminoResponse>;
                txDecodeAmino(request: _207.TxDecodeAminoRequest): Promise<_207.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _383.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _208.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.Tx;
                fromPartial(object: Partial<_208.Tx>): _208.Tx;
                fromAmino(object: _208.TxAmino): _208.Tx;
                toAmino(message: _208.Tx): _208.TxAmino;
                fromAminoMsg(object: _208.TxAminoMsg): _208.Tx;
                toAminoMsg(message: _208.Tx): _208.TxAminoMsg;
                fromProtoMsg(message: _208.TxProtoMsg): _208.Tx;
                toProto(message: _208.Tx): Uint8Array;
                toProtoMsg(message: _208.Tx): _208.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _208.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.TxRaw;
                fromPartial(object: Partial<_208.TxRaw>): _208.TxRaw;
                fromAmino(object: _208.TxRawAmino): _208.TxRaw;
                toAmino(message: _208.TxRaw): _208.TxRawAmino;
                fromAminoMsg(object: _208.TxRawAminoMsg): _208.TxRaw;
                toAminoMsg(message: _208.TxRaw): _208.TxRawAminoMsg;
                fromProtoMsg(message: _208.TxRawProtoMsg): _208.TxRaw;
                toProto(message: _208.TxRaw): Uint8Array;
                toProtoMsg(message: _208.TxRaw): _208.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _208.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.SignDoc;
                fromPartial(object: Partial<_208.SignDoc>): _208.SignDoc;
                fromAmino(object: _208.SignDocAmino): _208.SignDoc;
                toAmino(message: _208.SignDoc): _208.SignDocAmino;
                fromAminoMsg(object: _208.SignDocAminoMsg): _208.SignDoc;
                toAminoMsg(message: _208.SignDoc): _208.SignDocAminoMsg;
                fromProtoMsg(message: _208.SignDocProtoMsg): _208.SignDoc;
                toProto(message: _208.SignDoc): Uint8Array;
                toProtoMsg(message: _208.SignDoc): _208.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _208.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.SignDocDirectAux;
                fromPartial(object: Partial<_208.SignDocDirectAux>): _208.SignDocDirectAux;
                fromAmino(object: _208.SignDocDirectAuxAmino): _208.SignDocDirectAux;
                toAmino(message: _208.SignDocDirectAux): _208.SignDocDirectAuxAmino;
                fromAminoMsg(object: _208.SignDocDirectAuxAminoMsg): _208.SignDocDirectAux;
                toAminoMsg(message: _208.SignDocDirectAux): _208.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _208.SignDocDirectAuxProtoMsg): _208.SignDocDirectAux;
                toProto(message: _208.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _208.SignDocDirectAux): _208.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _208.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.TxBody;
                fromPartial(object: Partial<_208.TxBody>): _208.TxBody;
                fromAmino(object: _208.TxBodyAmino): _208.TxBody;
                toAmino(message: _208.TxBody): _208.TxBodyAmino;
                fromAminoMsg(object: _208.TxBodyAminoMsg): _208.TxBody;
                toAminoMsg(message: _208.TxBody): _208.TxBodyAminoMsg;
                fromProtoMsg(message: _208.TxBodyProtoMsg): _208.TxBody;
                toProto(message: _208.TxBody): Uint8Array;
                toProtoMsg(message: _208.TxBody): _208.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _208.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.AuthInfo;
                fromPartial(object: Partial<_208.AuthInfo>): _208.AuthInfo;
                fromAmino(object: _208.AuthInfoAmino): _208.AuthInfo;
                toAmino(message: _208.AuthInfo): _208.AuthInfoAmino;
                fromAminoMsg(object: _208.AuthInfoAminoMsg): _208.AuthInfo;
                toAminoMsg(message: _208.AuthInfo): _208.AuthInfoAminoMsg;
                fromProtoMsg(message: _208.AuthInfoProtoMsg): _208.AuthInfo;
                toProto(message: _208.AuthInfo): Uint8Array;
                toProtoMsg(message: _208.AuthInfo): _208.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _208.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.SignerInfo;
                fromPartial(object: Partial<_208.SignerInfo>): _208.SignerInfo;
                fromAmino(object: _208.SignerInfoAmino): _208.SignerInfo;
                toAmino(message: _208.SignerInfo): _208.SignerInfoAmino;
                fromAminoMsg(object: _208.SignerInfoAminoMsg): _208.SignerInfo;
                toAminoMsg(message: _208.SignerInfo): _208.SignerInfoAminoMsg;
                fromProtoMsg(message: _208.SignerInfoProtoMsg): _208.SignerInfo;
                toProto(message: _208.SignerInfo): Uint8Array;
                toProtoMsg(message: _208.SignerInfo): _208.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _208.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.ModeInfo;
                fromPartial(object: Partial<_208.ModeInfo>): _208.ModeInfo;
                fromAmino(object: _208.ModeInfoAmino): _208.ModeInfo;
                toAmino(message: _208.ModeInfo): _208.ModeInfoAmino;
                fromAminoMsg(object: _208.ModeInfoAminoMsg): _208.ModeInfo;
                toAminoMsg(message: _208.ModeInfo): _208.ModeInfoAminoMsg;
                fromProtoMsg(message: _208.ModeInfoProtoMsg): _208.ModeInfo;
                toProto(message: _208.ModeInfo): Uint8Array;
                toProtoMsg(message: _208.ModeInfo): _208.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _208.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.ModeInfo_Single;
                fromPartial(object: Partial<_208.ModeInfo_Single>): _208.ModeInfo_Single;
                fromAmino(object: _208.ModeInfo_SingleAmino): _208.ModeInfo_Single;
                toAmino(message: _208.ModeInfo_Single): _208.ModeInfo_SingleAmino;
                fromAminoMsg(object: _208.ModeInfo_SingleAminoMsg): _208.ModeInfo_Single;
                toAminoMsg(message: _208.ModeInfo_Single): _208.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _208.ModeInfo_SingleProtoMsg): _208.ModeInfo_Single;
                toProto(message: _208.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _208.ModeInfo_Single): _208.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _208.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.ModeInfo_Multi;
                fromPartial(object: Partial<_208.ModeInfo_Multi>): _208.ModeInfo_Multi;
                fromAmino(object: _208.ModeInfo_MultiAmino): _208.ModeInfo_Multi;
                toAmino(message: _208.ModeInfo_Multi): _208.ModeInfo_MultiAmino;
                fromAminoMsg(object: _208.ModeInfo_MultiAminoMsg): _208.ModeInfo_Multi;
                toAminoMsg(message: _208.ModeInfo_Multi): _208.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _208.ModeInfo_MultiProtoMsg): _208.ModeInfo_Multi;
                toProto(message: _208.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _208.ModeInfo_Multi): _208.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _208.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.Fee;
                fromPartial(object: Partial<_208.Fee>): _208.Fee;
                fromAmino(object: _208.FeeAmino): _208.Fee;
                toAmino(message: _208.Fee): _208.FeeAmino;
                fromAminoMsg(object: _208.FeeAminoMsg): _208.Fee;
                toAminoMsg(message: _208.Fee): _208.FeeAminoMsg;
                fromProtoMsg(message: _208.FeeProtoMsg): _208.Fee;
                toProto(message: _208.Fee): Uint8Array;
                toProtoMsg(message: _208.Fee): _208.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _208.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.Tip;
                fromPartial(object: Partial<_208.Tip>): _208.Tip;
                fromAmino(object: _208.TipAmino): _208.Tip;
                toAmino(message: _208.Tip): _208.TipAmino;
                fromAminoMsg(object: _208.TipAminoMsg): _208.Tip;
                toAminoMsg(message: _208.Tip): _208.TipAminoMsg;
                fromProtoMsg(message: _208.TipProtoMsg): _208.Tip;
                toProto(message: _208.Tip): Uint8Array;
                toProtoMsg(message: _208.Tip): _208.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _208.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _208.AuxSignerData;
                fromPartial(object: Partial<_208.AuxSignerData>): _208.AuxSignerData;
                fromAmino(object: _208.AuxSignerDataAmino): _208.AuxSignerData;
                toAmino(message: _208.AuxSignerData): _208.AuxSignerDataAmino;
                fromAminoMsg(object: _208.AuxSignerDataAminoMsg): _208.AuxSignerData;
                toAminoMsg(message: _208.AuxSignerData): _208.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _208.AuxSignerDataProtoMsg): _208.AuxSignerData;
                toProto(message: _208.AuxSignerData): Uint8Array;
                toProtoMsg(message: _208.AuxSignerData): _208.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _207.OrderBy;
            orderByToJSON(object: _207.OrderBy): string;
            broadcastModeFromJSON(object: any): _207.BroadcastMode;
            broadcastModeToJSON(object: _207.BroadcastMode): string;
            OrderBy: typeof _207.OrderBy;
            OrderBySDKType: typeof _207.OrderBy;
            OrderByAmino: typeof _207.OrderBy;
            BroadcastMode: typeof _207.BroadcastMode;
            BroadcastModeSDKType: typeof _207.BroadcastMode;
            BroadcastModeAmino: typeof _207.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _207.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.GetTxsEventRequest;
                fromPartial(object: Partial<_207.GetTxsEventRequest>): _207.GetTxsEventRequest;
                fromAmino(object: _207.GetTxsEventRequestAmino): _207.GetTxsEventRequest;
                toAmino(message: _207.GetTxsEventRequest): _207.GetTxsEventRequestAmino;
                fromAminoMsg(object: _207.GetTxsEventRequestAminoMsg): _207.GetTxsEventRequest;
                toAminoMsg(message: _207.GetTxsEventRequest): _207.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _207.GetTxsEventRequestProtoMsg): _207.GetTxsEventRequest;
                toProto(message: _207.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _207.GetTxsEventRequest): _207.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _207.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.GetTxsEventResponse;
                fromPartial(object: Partial<_207.GetTxsEventResponse>): _207.GetTxsEventResponse;
                fromAmino(object: _207.GetTxsEventResponseAmino): _207.GetTxsEventResponse;
                toAmino(message: _207.GetTxsEventResponse): _207.GetTxsEventResponseAmino;
                fromAminoMsg(object: _207.GetTxsEventResponseAminoMsg): _207.GetTxsEventResponse;
                toAminoMsg(message: _207.GetTxsEventResponse): _207.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _207.GetTxsEventResponseProtoMsg): _207.GetTxsEventResponse;
                toProto(message: _207.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _207.GetTxsEventResponse): _207.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _207.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.BroadcastTxRequest;
                fromPartial(object: Partial<_207.BroadcastTxRequest>): _207.BroadcastTxRequest;
                fromAmino(object: _207.BroadcastTxRequestAmino): _207.BroadcastTxRequest;
                toAmino(message: _207.BroadcastTxRequest): _207.BroadcastTxRequestAmino;
                fromAminoMsg(object: _207.BroadcastTxRequestAminoMsg): _207.BroadcastTxRequest;
                toAminoMsg(message: _207.BroadcastTxRequest): _207.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _207.BroadcastTxRequestProtoMsg): _207.BroadcastTxRequest;
                toProto(message: _207.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _207.BroadcastTxRequest): _207.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _207.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.BroadcastTxResponse;
                fromPartial(object: Partial<_207.BroadcastTxResponse>): _207.BroadcastTxResponse;
                fromAmino(object: _207.BroadcastTxResponseAmino): _207.BroadcastTxResponse;
                toAmino(message: _207.BroadcastTxResponse): _207.BroadcastTxResponseAmino;
                fromAminoMsg(object: _207.BroadcastTxResponseAminoMsg): _207.BroadcastTxResponse;
                toAminoMsg(message: _207.BroadcastTxResponse): _207.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _207.BroadcastTxResponseProtoMsg): _207.BroadcastTxResponse;
                toProto(message: _207.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _207.BroadcastTxResponse): _207.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _207.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.SimulateRequest;
                fromPartial(object: Partial<_207.SimulateRequest>): _207.SimulateRequest;
                fromAmino(object: _207.SimulateRequestAmino): _207.SimulateRequest;
                toAmino(message: _207.SimulateRequest): _207.SimulateRequestAmino;
                fromAminoMsg(object: _207.SimulateRequestAminoMsg): _207.SimulateRequest;
                toAminoMsg(message: _207.SimulateRequest): _207.SimulateRequestAminoMsg;
                fromProtoMsg(message: _207.SimulateRequestProtoMsg): _207.SimulateRequest;
                toProto(message: _207.SimulateRequest): Uint8Array;
                toProtoMsg(message: _207.SimulateRequest): _207.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _207.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.SimulateResponse;
                fromPartial(object: Partial<_207.SimulateResponse>): _207.SimulateResponse;
                fromAmino(object: _207.SimulateResponseAmino): _207.SimulateResponse;
                toAmino(message: _207.SimulateResponse): _207.SimulateResponseAmino;
                fromAminoMsg(object: _207.SimulateResponseAminoMsg): _207.SimulateResponse;
                toAminoMsg(message: _207.SimulateResponse): _207.SimulateResponseAminoMsg;
                fromProtoMsg(message: _207.SimulateResponseProtoMsg): _207.SimulateResponse;
                toProto(message: _207.SimulateResponse): Uint8Array;
                toProtoMsg(message: _207.SimulateResponse): _207.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _207.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.GetTxRequest;
                fromPartial(object: Partial<_207.GetTxRequest>): _207.GetTxRequest;
                fromAmino(object: _207.GetTxRequestAmino): _207.GetTxRequest;
                toAmino(message: _207.GetTxRequest): _207.GetTxRequestAmino;
                fromAminoMsg(object: _207.GetTxRequestAminoMsg): _207.GetTxRequest;
                toAminoMsg(message: _207.GetTxRequest): _207.GetTxRequestAminoMsg;
                fromProtoMsg(message: _207.GetTxRequestProtoMsg): _207.GetTxRequest;
                toProto(message: _207.GetTxRequest): Uint8Array;
                toProtoMsg(message: _207.GetTxRequest): _207.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _207.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.GetTxResponse;
                fromPartial(object: Partial<_207.GetTxResponse>): _207.GetTxResponse;
                fromAmino(object: _207.GetTxResponseAmino): _207.GetTxResponse;
                toAmino(message: _207.GetTxResponse): _207.GetTxResponseAmino;
                fromAminoMsg(object: _207.GetTxResponseAminoMsg): _207.GetTxResponse;
                toAminoMsg(message: _207.GetTxResponse): _207.GetTxResponseAminoMsg;
                fromProtoMsg(message: _207.GetTxResponseProtoMsg): _207.GetTxResponse;
                toProto(message: _207.GetTxResponse): Uint8Array;
                toProtoMsg(message: _207.GetTxResponse): _207.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _207.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_207.GetBlockWithTxsRequest>): _207.GetBlockWithTxsRequest;
                fromAmino(object: _207.GetBlockWithTxsRequestAmino): _207.GetBlockWithTxsRequest;
                toAmino(message: _207.GetBlockWithTxsRequest): _207.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _207.GetBlockWithTxsRequestAminoMsg): _207.GetBlockWithTxsRequest;
                toAminoMsg(message: _207.GetBlockWithTxsRequest): _207.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _207.GetBlockWithTxsRequestProtoMsg): _207.GetBlockWithTxsRequest;
                toProto(message: _207.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _207.GetBlockWithTxsRequest): _207.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _207.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_207.GetBlockWithTxsResponse>): _207.GetBlockWithTxsResponse;
                fromAmino(object: _207.GetBlockWithTxsResponseAmino): _207.GetBlockWithTxsResponse;
                toAmino(message: _207.GetBlockWithTxsResponse): _207.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _207.GetBlockWithTxsResponseAminoMsg): _207.GetBlockWithTxsResponse;
                toAminoMsg(message: _207.GetBlockWithTxsResponse): _207.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _207.GetBlockWithTxsResponseProtoMsg): _207.GetBlockWithTxsResponse;
                toProto(message: _207.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _207.GetBlockWithTxsResponse): _207.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _207.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.TxDecodeRequest;
                fromPartial(object: Partial<_207.TxDecodeRequest>): _207.TxDecodeRequest;
                fromAmino(object: _207.TxDecodeRequestAmino): _207.TxDecodeRequest;
                toAmino(message: _207.TxDecodeRequest): _207.TxDecodeRequestAmino;
                fromAminoMsg(object: _207.TxDecodeRequestAminoMsg): _207.TxDecodeRequest;
                toAminoMsg(message: _207.TxDecodeRequest): _207.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _207.TxDecodeRequestProtoMsg): _207.TxDecodeRequest;
                toProto(message: _207.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _207.TxDecodeRequest): _207.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _207.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.TxDecodeResponse;
                fromPartial(object: Partial<_207.TxDecodeResponse>): _207.TxDecodeResponse;
                fromAmino(object: _207.TxDecodeResponseAmino): _207.TxDecodeResponse;
                toAmino(message: _207.TxDecodeResponse): _207.TxDecodeResponseAmino;
                fromAminoMsg(object: _207.TxDecodeResponseAminoMsg): _207.TxDecodeResponse;
                toAminoMsg(message: _207.TxDecodeResponse): _207.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _207.TxDecodeResponseProtoMsg): _207.TxDecodeResponse;
                toProto(message: _207.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _207.TxDecodeResponse): _207.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _207.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.TxEncodeRequest;
                fromPartial(object: Partial<_207.TxEncodeRequest>): _207.TxEncodeRequest;
                fromAmino(object: _207.TxEncodeRequestAmino): _207.TxEncodeRequest;
                toAmino(message: _207.TxEncodeRequest): _207.TxEncodeRequestAmino;
                fromAminoMsg(object: _207.TxEncodeRequestAminoMsg): _207.TxEncodeRequest;
                toAminoMsg(message: _207.TxEncodeRequest): _207.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _207.TxEncodeRequestProtoMsg): _207.TxEncodeRequest;
                toProto(message: _207.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _207.TxEncodeRequest): _207.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _207.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.TxEncodeResponse;
                fromPartial(object: Partial<_207.TxEncodeResponse>): _207.TxEncodeResponse;
                fromAmino(object: _207.TxEncodeResponseAmino): _207.TxEncodeResponse;
                toAmino(message: _207.TxEncodeResponse): _207.TxEncodeResponseAmino;
                fromAminoMsg(object: _207.TxEncodeResponseAminoMsg): _207.TxEncodeResponse;
                toAminoMsg(message: _207.TxEncodeResponse): _207.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _207.TxEncodeResponseProtoMsg): _207.TxEncodeResponse;
                toProto(message: _207.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _207.TxEncodeResponse): _207.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _207.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.TxEncodeAminoRequest;
                fromPartial(object: Partial<_207.TxEncodeAminoRequest>): _207.TxEncodeAminoRequest;
                fromAmino(object: _207.TxEncodeAminoRequestAmino): _207.TxEncodeAminoRequest;
                toAmino(message: _207.TxEncodeAminoRequest): _207.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _207.TxEncodeAminoRequestAminoMsg): _207.TxEncodeAminoRequest;
                toAminoMsg(message: _207.TxEncodeAminoRequest): _207.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _207.TxEncodeAminoRequestProtoMsg): _207.TxEncodeAminoRequest;
                toProto(message: _207.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _207.TxEncodeAminoRequest): _207.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _207.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.TxEncodeAminoResponse;
                fromPartial(object: Partial<_207.TxEncodeAminoResponse>): _207.TxEncodeAminoResponse;
                fromAmino(object: _207.TxEncodeAminoResponseAmino): _207.TxEncodeAminoResponse;
                toAmino(message: _207.TxEncodeAminoResponse): _207.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _207.TxEncodeAminoResponseAminoMsg): _207.TxEncodeAminoResponse;
                toAminoMsg(message: _207.TxEncodeAminoResponse): _207.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _207.TxEncodeAminoResponseProtoMsg): _207.TxEncodeAminoResponse;
                toProto(message: _207.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _207.TxEncodeAminoResponse): _207.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _207.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.TxDecodeAminoRequest;
                fromPartial(object: Partial<_207.TxDecodeAminoRequest>): _207.TxDecodeAminoRequest;
                fromAmino(object: _207.TxDecodeAminoRequestAmino): _207.TxDecodeAminoRequest;
                toAmino(message: _207.TxDecodeAminoRequest): _207.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _207.TxDecodeAminoRequestAminoMsg): _207.TxDecodeAminoRequest;
                toAminoMsg(message: _207.TxDecodeAminoRequest): _207.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _207.TxDecodeAminoRequestProtoMsg): _207.TxDecodeAminoRequest;
                toProto(message: _207.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _207.TxDecodeAminoRequest): _207.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _207.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _207.TxDecodeAminoResponse;
                fromPartial(object: Partial<_207.TxDecodeAminoResponse>): _207.TxDecodeAminoResponse;
                fromAmino(object: _207.TxDecodeAminoResponseAmino): _207.TxDecodeAminoResponse;
                toAmino(message: _207.TxDecodeAminoResponse): _207.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _207.TxDecodeAminoResponseAminoMsg): _207.TxDecodeAminoResponse;
                toAminoMsg(message: _207.TxDecodeAminoResponse): _207.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _207.TxDecodeAminoResponseProtoMsg): _207.TxDecodeAminoResponse;
                toProto(message: _207.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _207.TxDecodeAminoResponse): _207.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _209.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _209.Module;
                    fromPartial(object: Partial<_209.Module>): _209.Module;
                    fromAmino(object: _209.ModuleAmino): _209.Module;
                    toAmino(message: _209.Module): _209.ModuleAmino;
                    fromAminoMsg(object: _209.ModuleAminoMsg): _209.Module;
                    toAminoMsg(message: _209.Module): _209.ModuleAminoMsg;
                    fromProtoMsg(message: _209.ModuleProtoMsg): _209.Module;
                    toProto(message: _209.Module): Uint8Array;
                    toProtoMsg(message: _209.Module): _209.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _422.MsgClientImpl;
            QueryClientImpl: typeof _406.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _210.QueryCurrentPlanRequest): Promise<_210.QueryCurrentPlanResponse>;
                appliedPlan(request: _210.QueryAppliedPlanRequest): Promise<_210.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _210.QueryUpgradedConsensusStateRequest): Promise<_210.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _210.QueryModuleVersionsRequest): Promise<_210.QueryModuleVersionsResponse>;
                authority(request?: _210.QueryAuthorityRequest): Promise<_210.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _384.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _211.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _211.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _211.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _211.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _211.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _211.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _211.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _211.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _211.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _211.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _211.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _211.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _211.MsgSoftwareUpgrade) => _211.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _211.MsgSoftwareUpgradeAmino) => _211.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _211.MsgCancelUpgrade) => _211.MsgCancelUpgradeAmino;
                    fromAmino: (object: _211.MsgCancelUpgradeAmino) => _211.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _212.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _212.Plan;
                fromPartial(object: Partial<_212.Plan>): _212.Plan;
                fromAmino(object: _212.PlanAmino): _212.Plan;
                toAmino(message: _212.Plan): _212.PlanAmino;
                fromAminoMsg(object: _212.PlanAminoMsg): _212.Plan;
                toAminoMsg(message: _212.Plan): _212.PlanAminoMsg;
                fromProtoMsg(message: _212.PlanProtoMsg): _212.Plan;
                toProto(message: _212.Plan): Uint8Array;
                toProtoMsg(message: _212.Plan): _212.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _212.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _212.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_212.SoftwareUpgradeProposal>): _212.SoftwareUpgradeProposal;
                fromAmino(object: _212.SoftwareUpgradeProposalAmino): _212.SoftwareUpgradeProposal;
                toAmino(message: _212.SoftwareUpgradeProposal): _212.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _212.SoftwareUpgradeProposalAminoMsg): _212.SoftwareUpgradeProposal;
                toAminoMsg(message: _212.SoftwareUpgradeProposal): _212.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _212.SoftwareUpgradeProposalProtoMsg): _212.SoftwareUpgradeProposal;
                toProto(message: _212.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _212.SoftwareUpgradeProposal): _212.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _212.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _212.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_212.CancelSoftwareUpgradeProposal>): _212.CancelSoftwareUpgradeProposal;
                fromAmino(object: _212.CancelSoftwareUpgradeProposalAmino): _212.CancelSoftwareUpgradeProposal;
                toAmino(message: _212.CancelSoftwareUpgradeProposal): _212.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _212.CancelSoftwareUpgradeProposalAminoMsg): _212.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _212.CancelSoftwareUpgradeProposal): _212.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _212.CancelSoftwareUpgradeProposalProtoMsg): _212.CancelSoftwareUpgradeProposal;
                toProto(message: _212.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _212.CancelSoftwareUpgradeProposal): _212.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _212.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _212.ModuleVersion;
                fromPartial(object: Partial<_212.ModuleVersion>): _212.ModuleVersion;
                fromAmino(object: _212.ModuleVersionAmino): _212.ModuleVersion;
                toAmino(message: _212.ModuleVersion): _212.ModuleVersionAmino;
                fromAminoMsg(object: _212.ModuleVersionAminoMsg): _212.ModuleVersion;
                toAminoMsg(message: _212.ModuleVersion): _212.ModuleVersionAminoMsg;
                fromProtoMsg(message: _212.ModuleVersionProtoMsg): _212.ModuleVersion;
                toProto(message: _212.ModuleVersion): Uint8Array;
                toProtoMsg(message: _212.ModuleVersion): _212.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _211.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _211.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_211.MsgSoftwareUpgrade>): _211.MsgSoftwareUpgrade;
                fromAmino(object: _211.MsgSoftwareUpgradeAmino): _211.MsgSoftwareUpgrade;
                toAmino(message: _211.MsgSoftwareUpgrade): _211.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _211.MsgSoftwareUpgradeAminoMsg): _211.MsgSoftwareUpgrade;
                toAminoMsg(message: _211.MsgSoftwareUpgrade): _211.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _211.MsgSoftwareUpgradeProtoMsg): _211.MsgSoftwareUpgrade;
                toProto(message: _211.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _211.MsgSoftwareUpgrade): _211.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _211.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _211.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_211.MsgSoftwareUpgradeResponse>): _211.MsgSoftwareUpgradeResponse;
                fromAmino(_: _211.MsgSoftwareUpgradeResponseAmino): _211.MsgSoftwareUpgradeResponse;
                toAmino(_: _211.MsgSoftwareUpgradeResponse): _211.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _211.MsgSoftwareUpgradeResponseAminoMsg): _211.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _211.MsgSoftwareUpgradeResponse): _211.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _211.MsgSoftwareUpgradeResponseProtoMsg): _211.MsgSoftwareUpgradeResponse;
                toProto(message: _211.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _211.MsgSoftwareUpgradeResponse): _211.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _211.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _211.MsgCancelUpgrade;
                fromPartial(object: Partial<_211.MsgCancelUpgrade>): _211.MsgCancelUpgrade;
                fromAmino(object: _211.MsgCancelUpgradeAmino): _211.MsgCancelUpgrade;
                toAmino(message: _211.MsgCancelUpgrade): _211.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _211.MsgCancelUpgradeAminoMsg): _211.MsgCancelUpgrade;
                toAminoMsg(message: _211.MsgCancelUpgrade): _211.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _211.MsgCancelUpgradeProtoMsg): _211.MsgCancelUpgrade;
                toProto(message: _211.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _211.MsgCancelUpgrade): _211.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _211.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _211.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_211.MsgCancelUpgradeResponse>): _211.MsgCancelUpgradeResponse;
                fromAmino(_: _211.MsgCancelUpgradeResponseAmino): _211.MsgCancelUpgradeResponse;
                toAmino(_: _211.MsgCancelUpgradeResponse): _211.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _211.MsgCancelUpgradeResponseAminoMsg): _211.MsgCancelUpgradeResponse;
                toAminoMsg(message: _211.MsgCancelUpgradeResponse): _211.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _211.MsgCancelUpgradeResponseProtoMsg): _211.MsgCancelUpgradeResponse;
                toProto(message: _211.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _211.MsgCancelUpgradeResponse): _211.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _210.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _210.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_210.QueryCurrentPlanRequest>): _210.QueryCurrentPlanRequest;
                fromAmino(_: _210.QueryCurrentPlanRequestAmino): _210.QueryCurrentPlanRequest;
                toAmino(_: _210.QueryCurrentPlanRequest): _210.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _210.QueryCurrentPlanRequestAminoMsg): _210.QueryCurrentPlanRequest;
                toAminoMsg(message: _210.QueryCurrentPlanRequest): _210.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _210.QueryCurrentPlanRequestProtoMsg): _210.QueryCurrentPlanRequest;
                toProto(message: _210.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _210.QueryCurrentPlanRequest): _210.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _210.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _210.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_210.QueryCurrentPlanResponse>): _210.QueryCurrentPlanResponse;
                fromAmino(object: _210.QueryCurrentPlanResponseAmino): _210.QueryCurrentPlanResponse;
                toAmino(message: _210.QueryCurrentPlanResponse): _210.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _210.QueryCurrentPlanResponseAminoMsg): _210.QueryCurrentPlanResponse;
                toAminoMsg(message: _210.QueryCurrentPlanResponse): _210.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _210.QueryCurrentPlanResponseProtoMsg): _210.QueryCurrentPlanResponse;
                toProto(message: _210.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _210.QueryCurrentPlanResponse): _210.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _210.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _210.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_210.QueryAppliedPlanRequest>): _210.QueryAppliedPlanRequest;
                fromAmino(object: _210.QueryAppliedPlanRequestAmino): _210.QueryAppliedPlanRequest;
                toAmino(message: _210.QueryAppliedPlanRequest): _210.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _210.QueryAppliedPlanRequestAminoMsg): _210.QueryAppliedPlanRequest;
                toAminoMsg(message: _210.QueryAppliedPlanRequest): _210.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _210.QueryAppliedPlanRequestProtoMsg): _210.QueryAppliedPlanRequest;
                toProto(message: _210.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _210.QueryAppliedPlanRequest): _210.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _210.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _210.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_210.QueryAppliedPlanResponse>): _210.QueryAppliedPlanResponse;
                fromAmino(object: _210.QueryAppliedPlanResponseAmino): _210.QueryAppliedPlanResponse;
                toAmino(message: _210.QueryAppliedPlanResponse): _210.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _210.QueryAppliedPlanResponseAminoMsg): _210.QueryAppliedPlanResponse;
                toAminoMsg(message: _210.QueryAppliedPlanResponse): _210.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _210.QueryAppliedPlanResponseProtoMsg): _210.QueryAppliedPlanResponse;
                toProto(message: _210.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _210.QueryAppliedPlanResponse): _210.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _210.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _210.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_210.QueryUpgradedConsensusStateRequest>): _210.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _210.QueryUpgradedConsensusStateRequestAmino): _210.QueryUpgradedConsensusStateRequest;
                toAmino(message: _210.QueryUpgradedConsensusStateRequest): _210.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _210.QueryUpgradedConsensusStateRequestAminoMsg): _210.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _210.QueryUpgradedConsensusStateRequest): _210.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _210.QueryUpgradedConsensusStateRequestProtoMsg): _210.QueryUpgradedConsensusStateRequest;
                toProto(message: _210.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _210.QueryUpgradedConsensusStateRequest): _210.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _210.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _210.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_210.QueryUpgradedConsensusStateResponse>): _210.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _210.QueryUpgradedConsensusStateResponseAmino): _210.QueryUpgradedConsensusStateResponse;
                toAmino(message: _210.QueryUpgradedConsensusStateResponse): _210.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _210.QueryUpgradedConsensusStateResponseAminoMsg): _210.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _210.QueryUpgradedConsensusStateResponse): _210.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _210.QueryUpgradedConsensusStateResponseProtoMsg): _210.QueryUpgradedConsensusStateResponse;
                toProto(message: _210.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _210.QueryUpgradedConsensusStateResponse): _210.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _210.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _210.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_210.QueryModuleVersionsRequest>): _210.QueryModuleVersionsRequest;
                fromAmino(object: _210.QueryModuleVersionsRequestAmino): _210.QueryModuleVersionsRequest;
                toAmino(message: _210.QueryModuleVersionsRequest): _210.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _210.QueryModuleVersionsRequestAminoMsg): _210.QueryModuleVersionsRequest;
                toAminoMsg(message: _210.QueryModuleVersionsRequest): _210.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _210.QueryModuleVersionsRequestProtoMsg): _210.QueryModuleVersionsRequest;
                toProto(message: _210.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _210.QueryModuleVersionsRequest): _210.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _210.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _210.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_210.QueryModuleVersionsResponse>): _210.QueryModuleVersionsResponse;
                fromAmino(object: _210.QueryModuleVersionsResponseAmino): _210.QueryModuleVersionsResponse;
                toAmino(message: _210.QueryModuleVersionsResponse): _210.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _210.QueryModuleVersionsResponseAminoMsg): _210.QueryModuleVersionsResponse;
                toAminoMsg(message: _210.QueryModuleVersionsResponse): _210.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _210.QueryModuleVersionsResponseProtoMsg): _210.QueryModuleVersionsResponse;
                toProto(message: _210.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _210.QueryModuleVersionsResponse): _210.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _210.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _210.QueryAuthorityRequest;
                fromPartial(_: Partial<_210.QueryAuthorityRequest>): _210.QueryAuthorityRequest;
                fromAmino(_: _210.QueryAuthorityRequestAmino): _210.QueryAuthorityRequest;
                toAmino(_: _210.QueryAuthorityRequest): _210.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _210.QueryAuthorityRequestAminoMsg): _210.QueryAuthorityRequest;
                toAminoMsg(message: _210.QueryAuthorityRequest): _210.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _210.QueryAuthorityRequestProtoMsg): _210.QueryAuthorityRequest;
                toProto(message: _210.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _210.QueryAuthorityRequest): _210.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _210.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _210.QueryAuthorityResponse;
                fromPartial(object: Partial<_210.QueryAuthorityResponse>): _210.QueryAuthorityResponse;
                fromAmino(object: _210.QueryAuthorityResponseAmino): _210.QueryAuthorityResponse;
                toAmino(message: _210.QueryAuthorityResponse): _210.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _210.QueryAuthorityResponseAminoMsg): _210.QueryAuthorityResponse;
                toAminoMsg(message: _210.QueryAuthorityResponse): _210.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _210.QueryAuthorityResponseProtoMsg): _210.QueryAuthorityResponse;
                toProto(message: _210.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _210.QueryAuthorityResponse): _210.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _213.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _213.Module;
                    fromPartial(_: Partial<_213.Module>): _213.Module;
                    fromAmino(_: _213.ModuleAmino): _213.Module;
                    toAmino(_: _213.Module): _213.ModuleAmino;
                    fromAminoMsg(object: _213.ModuleAminoMsg): _213.Module;
                    toAminoMsg(message: _213.Module): _213.ModuleAminoMsg;
                    fromProtoMsg(message: _213.ModuleProtoMsg): _213.Module;
                    toProto(message: _213.Module): Uint8Array;
                    toProtoMsg(message: _213.Module): _213.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _423.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _214.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _214.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _214.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createClawbackVestingAccount(value: _214.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _214.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _214.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _214.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _214.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _214.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _214.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _214.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: _214.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _214.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _214.MsgClawback): {
                        typeUrl: string;
                        value: _214.MsgClawback;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _214.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _214.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _214.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _214.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _214.MsgClawback;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _214.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _214.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _214.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _214.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _214.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _214.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: _214.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _214.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _214.MsgClawback): {
                        typeUrl: string;
                        value: _214.MsgClawback;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _214.MsgCreateVestingAccount) => _214.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _214.MsgCreateVestingAccountAmino) => _214.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _214.MsgCreatePermanentLockedAccount) => _214.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _214.MsgCreatePermanentLockedAccountAmino) => _214.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _214.MsgCreatePeriodicVestingAccount) => _214.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _214.MsgCreatePeriodicVestingAccountAmino) => _214.MsgCreatePeriodicVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _214.MsgCreateClawbackVestingAccount) => _214.MsgCreateClawbackVestingAccountAmino;
                    fromAmino: (object: _214.MsgCreateClawbackVestingAccountAmino) => _214.MsgCreateClawbackVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgClawback": {
                    aminoType: string;
                    toAmino: (message: _214.MsgClawback) => _214.MsgClawbackAmino;
                    fromAmino: (object: _214.MsgClawbackAmino) => _214.MsgClawback;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _215.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _215.BaseVestingAccount;
                fromPartial(object: Partial<_215.BaseVestingAccount>): _215.BaseVestingAccount;
                fromAmino(object: _215.BaseVestingAccountAmino): _215.BaseVestingAccount;
                toAmino(message: _215.BaseVestingAccount): _215.BaseVestingAccountAmino;
                fromAminoMsg(object: _215.BaseVestingAccountAminoMsg): _215.BaseVestingAccount;
                toAminoMsg(message: _215.BaseVestingAccount): _215.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _215.BaseVestingAccountProtoMsg): _215.BaseVestingAccount;
                toProto(message: _215.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _215.BaseVestingAccount): _215.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _215.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _215.ContinuousVestingAccount;
                fromPartial(object: Partial<_215.ContinuousVestingAccount>): _215.ContinuousVestingAccount;
                fromAmino(object: _215.ContinuousVestingAccountAmino): _215.ContinuousVestingAccount;
                toAmino(message: _215.ContinuousVestingAccount): _215.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _215.ContinuousVestingAccountAminoMsg): _215.ContinuousVestingAccount;
                toAminoMsg(message: _215.ContinuousVestingAccount): _215.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _215.ContinuousVestingAccountProtoMsg): _215.ContinuousVestingAccount;
                toProto(message: _215.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _215.ContinuousVestingAccount): _215.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _215.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _215.DelayedVestingAccount;
                fromPartial(object: Partial<_215.DelayedVestingAccount>): _215.DelayedVestingAccount;
                fromAmino(object: _215.DelayedVestingAccountAmino): _215.DelayedVestingAccount;
                toAmino(message: _215.DelayedVestingAccount): _215.DelayedVestingAccountAmino;
                fromAminoMsg(object: _215.DelayedVestingAccountAminoMsg): _215.DelayedVestingAccount;
                toAminoMsg(message: _215.DelayedVestingAccount): _215.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _215.DelayedVestingAccountProtoMsg): _215.DelayedVestingAccount;
                toProto(message: _215.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _215.DelayedVestingAccount): _215.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _215.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _215.Period;
                fromPartial(object: Partial<_215.Period>): _215.Period;
                fromAmino(object: _215.PeriodAmino): _215.Period;
                toAmino(message: _215.Period): _215.PeriodAmino;
                fromAminoMsg(object: _215.PeriodAminoMsg): _215.Period;
                toAminoMsg(message: _215.Period): _215.PeriodAminoMsg;
                fromProtoMsg(message: _215.PeriodProtoMsg): _215.Period;
                toProto(message: _215.Period): Uint8Array;
                toProtoMsg(message: _215.Period): _215.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _215.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _215.PeriodicVestingAccount;
                fromPartial(object: Partial<_215.PeriodicVestingAccount>): _215.PeriodicVestingAccount;
                fromAmino(object: _215.PeriodicVestingAccountAmino): _215.PeriodicVestingAccount;
                toAmino(message: _215.PeriodicVestingAccount): _215.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _215.PeriodicVestingAccountAminoMsg): _215.PeriodicVestingAccount;
                toAminoMsg(message: _215.PeriodicVestingAccount): _215.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _215.PeriodicVestingAccountProtoMsg): _215.PeriodicVestingAccount;
                toProto(message: _215.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _215.PeriodicVestingAccount): _215.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _215.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _215.PermanentLockedAccount;
                fromPartial(object: Partial<_215.PermanentLockedAccount>): _215.PermanentLockedAccount;
                fromAmino(object: _215.PermanentLockedAccountAmino): _215.PermanentLockedAccount;
                toAmino(message: _215.PermanentLockedAccount): _215.PermanentLockedAccountAmino;
                fromAminoMsg(object: _215.PermanentLockedAccountAminoMsg): _215.PermanentLockedAccount;
                toAminoMsg(message: _215.PermanentLockedAccount): _215.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _215.PermanentLockedAccountProtoMsg): _215.PermanentLockedAccount;
                toProto(message: _215.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _215.PermanentLockedAccount): _215.PermanentLockedAccountProtoMsg;
            };
            ClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _215.ClawbackVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _215.ClawbackVestingAccount;
                fromPartial(object: Partial<_215.ClawbackVestingAccount>): _215.ClawbackVestingAccount;
                fromAmino(object: _215.ClawbackVestingAccountAmino): _215.ClawbackVestingAccount;
                toAmino(message: _215.ClawbackVestingAccount): _215.ClawbackVestingAccountAmino;
                fromAminoMsg(object: _215.ClawbackVestingAccountAminoMsg): _215.ClawbackVestingAccount;
                toAminoMsg(message: _215.ClawbackVestingAccount): _215.ClawbackVestingAccountAminoMsg;
                fromProtoMsg(message: _215.ClawbackVestingAccountProtoMsg): _215.ClawbackVestingAccount;
                toProto(message: _215.ClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _215.ClawbackVestingAccount): _215.ClawbackVestingAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _214.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _214.MsgCreateVestingAccount;
                fromPartial(object: Partial<_214.MsgCreateVestingAccount>): _214.MsgCreateVestingAccount;
                fromAmino(object: _214.MsgCreateVestingAccountAmino): _214.MsgCreateVestingAccount;
                toAmino(message: _214.MsgCreateVestingAccount): _214.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _214.MsgCreateVestingAccountAminoMsg): _214.MsgCreateVestingAccount;
                toAminoMsg(message: _214.MsgCreateVestingAccount): _214.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _214.MsgCreateVestingAccountProtoMsg): _214.MsgCreateVestingAccount;
                toProto(message: _214.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _214.MsgCreateVestingAccount): _214.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _214.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _214.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_214.MsgCreateVestingAccountResponse>): _214.MsgCreateVestingAccountResponse;
                fromAmino(_: _214.MsgCreateVestingAccountResponseAmino): _214.MsgCreateVestingAccountResponse;
                toAmino(_: _214.MsgCreateVestingAccountResponse): _214.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _214.MsgCreateVestingAccountResponseAminoMsg): _214.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _214.MsgCreateVestingAccountResponse): _214.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _214.MsgCreateVestingAccountResponseProtoMsg): _214.MsgCreateVestingAccountResponse;
                toProto(message: _214.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _214.MsgCreateVestingAccountResponse): _214.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _214.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _214.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_214.MsgCreatePermanentLockedAccount>): _214.MsgCreatePermanentLockedAccount;
                fromAmino(object: _214.MsgCreatePermanentLockedAccountAmino): _214.MsgCreatePermanentLockedAccount;
                toAmino(message: _214.MsgCreatePermanentLockedAccount): _214.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _214.MsgCreatePermanentLockedAccountAminoMsg): _214.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _214.MsgCreatePermanentLockedAccount): _214.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _214.MsgCreatePermanentLockedAccountProtoMsg): _214.MsgCreatePermanentLockedAccount;
                toProto(message: _214.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _214.MsgCreatePermanentLockedAccount): _214.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _214.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _214.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_214.MsgCreatePermanentLockedAccountResponse>): _214.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _214.MsgCreatePermanentLockedAccountResponseAmino): _214.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _214.MsgCreatePermanentLockedAccountResponse): _214.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _214.MsgCreatePermanentLockedAccountResponseAminoMsg): _214.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _214.MsgCreatePermanentLockedAccountResponse): _214.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _214.MsgCreatePermanentLockedAccountResponseProtoMsg): _214.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _214.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _214.MsgCreatePermanentLockedAccountResponse): _214.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _214.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _214.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_214.MsgCreatePeriodicVestingAccount>): _214.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _214.MsgCreatePeriodicVestingAccountAmino): _214.MsgCreatePeriodicVestingAccount;
                toAmino(message: _214.MsgCreatePeriodicVestingAccount): _214.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _214.MsgCreatePeriodicVestingAccountAminoMsg): _214.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _214.MsgCreatePeriodicVestingAccount): _214.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _214.MsgCreatePeriodicVestingAccountProtoMsg): _214.MsgCreatePeriodicVestingAccount;
                toProto(message: _214.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _214.MsgCreatePeriodicVestingAccount): _214.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _214.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _214.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_214.MsgCreatePeriodicVestingAccountResponse>): _214.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _214.MsgCreatePeriodicVestingAccountResponseAmino): _214.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _214.MsgCreatePeriodicVestingAccountResponse): _214.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _214.MsgCreatePeriodicVestingAccountResponseAminoMsg): _214.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _214.MsgCreatePeriodicVestingAccountResponse): _214.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _214.MsgCreatePeriodicVestingAccountResponseProtoMsg): _214.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _214.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _214.MsgCreatePeriodicVestingAccountResponse): _214.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
            MsgCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _214.MsgCreateClawbackVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _214.MsgCreateClawbackVestingAccount;
                fromPartial(object: Partial<_214.MsgCreateClawbackVestingAccount>): _214.MsgCreateClawbackVestingAccount;
                fromAmino(object: _214.MsgCreateClawbackVestingAccountAmino): _214.MsgCreateClawbackVestingAccount;
                toAmino(message: _214.MsgCreateClawbackVestingAccount): _214.MsgCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _214.MsgCreateClawbackVestingAccountAminoMsg): _214.MsgCreateClawbackVestingAccount;
                toAminoMsg(message: _214.MsgCreateClawbackVestingAccount): _214.MsgCreateClawbackVestingAccountAminoMsg;
                fromProtoMsg(message: _214.MsgCreateClawbackVestingAccountProtoMsg): _214.MsgCreateClawbackVestingAccount;
                toProto(message: _214.MsgCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _214.MsgCreateClawbackVestingAccount): _214.MsgCreateClawbackVestingAccountProtoMsg;
            };
            MsgCreateClawbackVestingAccountResponse: {
                typeUrl: string;
                encode(_: _214.MsgCreateClawbackVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _214.MsgCreateClawbackVestingAccountResponse;
                fromPartial(_: Partial<_214.MsgCreateClawbackVestingAccountResponse>): _214.MsgCreateClawbackVestingAccountResponse;
                fromAmino(_: _214.MsgCreateClawbackVestingAccountResponseAmino): _214.MsgCreateClawbackVestingAccountResponse;
                toAmino(_: _214.MsgCreateClawbackVestingAccountResponse): _214.MsgCreateClawbackVestingAccountResponseAmino;
                fromAminoMsg(object: _214.MsgCreateClawbackVestingAccountResponseAminoMsg): _214.MsgCreateClawbackVestingAccountResponse;
                toAminoMsg(message: _214.MsgCreateClawbackVestingAccountResponse): _214.MsgCreateClawbackVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _214.MsgCreateClawbackVestingAccountResponseProtoMsg): _214.MsgCreateClawbackVestingAccountResponse;
                toProto(message: _214.MsgCreateClawbackVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _214.MsgCreateClawbackVestingAccountResponse): _214.MsgCreateClawbackVestingAccountResponseProtoMsg;
            };
            MsgClawback: {
                typeUrl: string;
                encode(message: _214.MsgClawback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _214.MsgClawback;
                fromPartial(object: Partial<_214.MsgClawback>): _214.MsgClawback;
                fromAmino(object: _214.MsgClawbackAmino): _214.MsgClawback;
                toAmino(message: _214.MsgClawback): _214.MsgClawbackAmino;
                fromAminoMsg(object: _214.MsgClawbackAminoMsg): _214.MsgClawback;
                toAminoMsg(message: _214.MsgClawback): _214.MsgClawbackAminoMsg;
                fromProtoMsg(message: _214.MsgClawbackProtoMsg): _214.MsgClawback;
                toProto(message: _214.MsgClawback): Uint8Array;
                toProtoMsg(message: _214.MsgClawback): _214.MsgClawbackProtoMsg;
            };
            MsgClawbackResponse: {
                typeUrl: string;
                encode(_: _214.MsgClawbackResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _214.MsgClawbackResponse;
                fromPartial(_: Partial<_214.MsgClawbackResponse>): _214.MsgClawbackResponse;
                fromAmino(_: _214.MsgClawbackResponseAmino): _214.MsgClawbackResponse;
                toAmino(_: _214.MsgClawbackResponse): _214.MsgClawbackResponseAmino;
                fromAminoMsg(object: _214.MsgClawbackResponseAminoMsg): _214.MsgClawbackResponse;
                toAminoMsg(message: _214.MsgClawbackResponse): _214.MsgClawbackResponseAminoMsg;
                fromProtoMsg(message: _214.MsgClawbackResponseProtoMsg): _214.MsgClawbackResponse;
                toProto(message: _214.MsgClawbackResponse): Uint8Array;
                toProtoMsg(message: _214.MsgClawbackResponse): _214.MsgClawbackResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _407.MsgClientImpl;
                };
                authz: {
                    v1beta1: _408.MsgClientImpl;
                };
                bank: {
                    v1beta1: _409.MsgClientImpl;
                };
                consensus: {
                    v1: _410.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _411.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _412.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _413.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _414.MsgClientImpl;
                };
                gov: {
                    v1: _415.MsgClientImpl;
                    v1beta1: _416.MsgClientImpl;
                };
                group: {
                    v1: _417.MsgClientImpl;
                };
                mint: {
                    v1beta1: _418.MsgClientImpl;
                };
                nft: {
                    v1beta1: _419.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _420.MsgClientImpl;
                };
                staking: {
                    v1beta1: _421.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _422.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _423.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _94.QueryConfigRequest): Promise<_94.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _98.QueryAccountsRequest): Promise<_98.QueryAccountsResponse>;
                        account(request: _98.QueryAccountRequest): Promise<_98.QueryAccountResponse>;
                        accountAddressByID(request: _98.QueryAccountAddressByIDRequest): Promise<_98.QueryAccountAddressByIDResponse>;
                        params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                        moduleAccounts(request?: _98.QueryModuleAccountsRequest): Promise<_98.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _98.QueryModuleAccountByNameRequest): Promise<_98.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _98.Bech32PrefixRequest): Promise<_98.Bech32PrefixResponse>;
                        addressBytesToString(request: _98.AddressBytesToStringRequest): Promise<_98.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _98.AddressStringToBytesRequest): Promise<_98.AddressStringToBytesResponse>;
                        accountInfo(request: _98.QueryAccountInfoRequest): Promise<_98.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _104.QueryGrantsRequest): Promise<_104.QueryGrantsResponse>;
                        granterGrants(request: _104.QueryGranterGrantsRequest): Promise<_104.QueryGranterGrantsResponse>;
                        granteeGrants(request: _104.QueryGranteeGrantsRequest): Promise<_104.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _107.AppOptionsRequest): Promise<_107.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _112.QueryBalanceRequest): Promise<_112.QueryBalanceResponse>;
                        allBalances(request: _112.QueryAllBalancesRequest): Promise<_112.QueryAllBalancesResponse>;
                        spendableBalances(request: _112.QuerySpendableBalancesRequest): Promise<_112.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _112.QuerySpendableBalanceByDenomRequest): Promise<_112.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _112.QueryTotalSupplyRequest): Promise<_112.QueryTotalSupplyResponse>;
                        supplyOf(request: _112.QuerySupplyOfRequest): Promise<_112.QuerySupplyOfResponse>;
                        totalSupplyWithoutOffset(request?: _112.QueryTotalSupplyWithoutOffsetRequest): Promise<_112.QueryTotalSupplyWithoutOffsetResponse>;
                        supplyOfWithoutOffset(request: _112.QuerySupplyOfWithoutOffsetRequest): Promise<_112.QuerySupplyOfWithoutOffsetResponse>;
                        params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                        denomMetadata(request: _112.QueryDenomMetadataRequest): Promise<_112.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _112.QueryDenomsMetadataRequest): Promise<_112.QueryDenomsMetadataResponse>;
                        denomOwners(request: _112.QueryDenomOwnersRequest): Promise<_112.QueryDenomOwnersResponse>;
                        sendEnabled(request: _112.QuerySendEnabledRequest): Promise<_112.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _116.ConfigRequest): Promise<_116.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _123.GetNodeInfoRequest): Promise<_123.GetNodeInfoResponse>;
                            getSyncing(request?: _123.GetSyncingRequest): Promise<_123.GetSyncingResponse>;
                            getLatestBlock(request?: _123.GetLatestBlockRequest): Promise<_123.GetLatestBlockResponse>;
                            getBlockByHeight(request: _123.GetBlockByHeightRequest): Promise<_123.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _123.GetLatestValidatorSetRequest): Promise<_123.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _123.GetValidatorSetByHeightRequest): Promise<_123.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _123.ABCIQueryRequest): Promise<_123.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                        validatorDistributionInfo(request: _144.QueryValidatorDistributionInfoRequest): Promise<_144.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _144.QueryValidatorOutstandingRewardsRequest): Promise<_144.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _144.QueryValidatorCommissionRequest): Promise<_144.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _144.QueryValidatorSlashesRequest): Promise<_144.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _144.QueryDelegationRewardsRequest): Promise<_144.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _144.QueryDelegationTotalRewardsRequest): Promise<_144.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _144.QueryDelegatorValidatorsRequest): Promise<_144.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _144.QueryDelegatorWithdrawAddressRequest): Promise<_144.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _144.QueryCommunityPoolRequest): Promise<_144.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _149.QueryEvidenceRequest): Promise<_149.QueryEvidenceResponse>;
                        allEvidence(request?: _149.QueryAllEvidenceRequest): Promise<_149.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _154.QueryAllowanceRequest): Promise<_154.QueryAllowanceResponse>;
                        allowances(request: _154.QueryAllowancesRequest): Promise<_154.QueryAllowancesResponse>;
                        allowancesByGranter(request: _154.QueryAllowancesByGranterRequest): Promise<_154.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _161.QueryProposalRequest): Promise<_161.QueryProposalResponse>;
                        proposals(request: _161.QueryProposalsRequest): Promise<_161.QueryProposalsResponse>;
                        vote(request: _161.QueryVoteRequest): Promise<_161.QueryVoteResponse>;
                        votes(request: _161.QueryVotesRequest): Promise<_161.QueryVotesResponse>;
                        params(request: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                        deposit(request: _161.QueryDepositRequest): Promise<_161.QueryDepositResponse>;
                        deposits(request: _161.QueryDepositsRequest): Promise<_161.QueryDepositsResponse>;
                        tallyResult(request: _161.QueryTallyResultRequest): Promise<_161.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _165.QueryProposalRequest): Promise<_165.QueryProposalResponse>;
                        proposals(request: _165.QueryProposalsRequest): Promise<_165.QueryProposalsResponse>;
                        vote(request: _165.QueryVoteRequest): Promise<_165.QueryVoteResponse>;
                        votes(request: _165.QueryVotesRequest): Promise<_165.QueryVotesResponse>;
                        params(request: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                        deposit(request: _165.QueryDepositRequest): Promise<_165.QueryDepositResponse>;
                        deposits(request: _165.QueryDepositsRequest): Promise<_165.QueryDepositsResponse>;
                        tallyResult(request: _165.QueryTallyResultRequest): Promise<_165.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _170.QueryGroupInfoRequest): Promise<_170.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _170.QueryGroupPolicyInfoRequest): Promise<_170.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _170.QueryGroupMembersRequest): Promise<_170.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _170.QueryGroupsByAdminRequest): Promise<_170.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _170.QueryGroupPoliciesByGroupRequest): Promise<_170.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _170.QueryGroupPoliciesByAdminRequest): Promise<_170.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _170.QueryProposalRequest): Promise<_170.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _170.QueryProposalsByGroupPolicyRequest): Promise<_170.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _170.QueryVoteByProposalVoterRequest): Promise<_170.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _170.QueryVotesByProposalRequest): Promise<_170.QueryVotesByProposalResponse>;
                        votesByVoter(request: _170.QueryVotesByVoterRequest): Promise<_170.QueryVotesByVoterResponse>;
                        groupsByMember(request: _170.QueryGroupsByMemberRequest): Promise<_170.QueryGroupsByMemberResponse>;
                        tallyResult(request: _170.QueryTallyResultRequest): Promise<_170.QueryTallyResultResponse>;
                        groups(request?: _170.QueryGroupsRequest): Promise<_170.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _176.QueryParamsRequest): Promise<_176.QueryParamsResponse>;
                        inflation(request?: _176.QueryInflationRequest): Promise<_176.QueryInflationResponse>;
                        annualProvisions(request?: _176.QueryAnnualProvisionsRequest): Promise<_176.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _183.QueryBalanceRequest): Promise<_183.QueryBalanceResponse>;
                        owner(request: _183.QueryOwnerRequest): Promise<_183.QueryOwnerResponse>;
                        supply(request: _183.QuerySupplyRequest): Promise<_183.QuerySupplyResponse>;
                        nFTs(request: _183.QueryNFTsRequest): Promise<_183.QueryNFTsResponse>;
                        nFT(request: _183.QueryNFTRequest): Promise<_183.QueryNFTResponse>;
                        class(request: _183.QueryClassRequest): Promise<_183.QueryClassResponse>;
                        classes(request?: _183.QueryClassesRequest): Promise<_183.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _186.GetRequest): Promise<_186.GetResponse>;
                            list(request: _186.ListRequest): Promise<_186.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _191.QueryParamsRequest): Promise<_191.QueryParamsResponse>;
                        subspaces(request?: _191.QuerySubspacesRequest): Promise<_191.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _196.QueryParamsRequest): Promise<_196.QueryParamsResponse>;
                        signingInfo(request: _196.QuerySigningInfoRequest): Promise<_196.QuerySigningInfoResponse>;
                        signingInfos(request?: _196.QuerySigningInfosRequest): Promise<_196.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _202.QueryValidatorsRequest): Promise<_202.QueryValidatorsResponse>;
                        validator(request: _202.QueryValidatorRequest): Promise<_202.QueryValidatorResponse>;
                        validatorDelegations(request: _202.QueryValidatorDelegationsRequest): Promise<_202.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _202.QueryValidatorUnbondingDelegationsRequest): Promise<_202.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _202.QueryDelegationRequest): Promise<_202.QueryDelegationResponse>;
                        unbondingDelegation(request: _202.QueryUnbondingDelegationRequest): Promise<_202.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _202.QueryDelegatorDelegationsRequest): Promise<_202.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _202.QueryDelegatorUnbondingDelegationsRequest): Promise<_202.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _202.QueryRedelegationsRequest): Promise<_202.QueryRedelegationsResponse>;
                        delegatorValidators(request: _202.QueryDelegatorValidatorsRequest): Promise<_202.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _202.QueryDelegatorValidatorRequest): Promise<_202.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _202.QueryHistoricalInfoRequest): Promise<_202.QueryHistoricalInfoResponse>;
                        pool(request?: _202.QueryPoolRequest): Promise<_202.QueryPoolResponse>;
                        params(request?: _202.QueryParamsRequest): Promise<_202.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _207.SimulateRequest): Promise<_207.SimulateResponse>;
                        getTx(request: _207.GetTxRequest): Promise<_207.GetTxResponse>;
                        broadcastTx(request: _207.BroadcastTxRequest): Promise<_207.BroadcastTxResponse>;
                        getTxsEvent(request: _207.GetTxsEventRequest): Promise<_207.GetTxsEventResponse>;
                        getBlockWithTxs(request: _207.GetBlockWithTxsRequest): Promise<_207.GetBlockWithTxsResponse>;
                        txDecode(request: _207.TxDecodeRequest): Promise<_207.TxDecodeResponse>;
                        txEncode(request: _207.TxEncodeRequest): Promise<_207.TxEncodeResponse>;
                        txEncodeAmino(request: _207.TxEncodeAminoRequest): Promise<_207.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _207.TxDecodeAminoRequest): Promise<_207.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _210.QueryCurrentPlanRequest): Promise<_210.QueryCurrentPlanResponse>;
                        appliedPlan(request: _210.QueryAppliedPlanRequest): Promise<_210.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _210.QueryUpgradedConsensusStateRequest): Promise<_210.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _210.QueryModuleVersionsRequest): Promise<_210.QueryModuleVersionsResponse>;
                        authority(request?: _210.QueryAuthorityRequest): Promise<_210.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _366.LCDQueryClient;
                };
                authz: {
                    v1beta1: _367.LCDQueryClient;
                };
                bank: {
                    v1beta1: _368.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _369.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _370.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _371.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _372.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _373.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _374.LCDQueryClient;
                };
                gov: {
                    v1: _375.LCDQueryClient;
                    v1beta1: _376.LCDQueryClient;
                };
                group: {
                    v1: _377.LCDQueryClient;
                };
                mint: {
                    v1beta1: _378.LCDQueryClient;
                };
                nft: {
                    v1beta1: _379.LCDQueryClient;
                };
                params: {
                    v1beta1: _380.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _381.LCDQueryClient;
                };
                staking: {
                    v1beta1: _382.LCDQueryClient;
                };
                tx: {
                    v1beta1: _383.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _384.LCDQueryClient;
                };
            };
        }>;
    };
}
