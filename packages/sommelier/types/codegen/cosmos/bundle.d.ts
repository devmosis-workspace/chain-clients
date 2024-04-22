import * as _27 from "./app/module/v1alpha1/module";
import * as _28 from "./app/v1alpha1/config";
import * as _29 from "./app/v1alpha1/module";
import * as _30 from "./app/v1alpha1/query";
import * as _31 from "./auth/v1beta1/auth";
import * as _32 from "./auth/v1beta1/genesis";
import * as _33 from "./auth/v1beta1/query";
import * as _34 from "./authz/v1beta1/authz";
import * as _35 from "./authz/v1beta1/event";
import * as _36 from "./authz/v1beta1/genesis";
import * as _37 from "./authz/v1beta1/query";
import * as _38 from "./authz/v1beta1/tx";
import * as _39 from "./bank/v1beta1/authz";
import * as _40 from "./bank/v1beta1/bank";
import * as _41 from "./bank/v1beta1/genesis";
import * as _42 from "./bank/v1beta1/query";
import * as _43 from "./bank/v1beta1/tx";
import * as _44 from "./base/abci/v1beta1/abci";
import * as _45 from "./base/kv/v1beta1/kv";
import * as _46 from "./base/node/v1beta1/query";
import * as _47 from "./base/query/v1beta1/pagination";
import * as _48 from "./base/reflection/v1beta1/reflection";
import * as _49 from "./base/reflection/v2alpha1/reflection";
import * as _50 from "./base/snapshots/v1beta1/snapshot";
import * as _51 from "./base/store/v1beta1/commit_info";
import * as _52 from "./base/store/v1beta1/listening";
import * as _53 from "./base/tendermint/v1beta1/query";
import * as _54 from "./base/tendermint/v1beta1/types";
import * as _55 from "./base/v1beta1/coin";
import * as _56 from "./capability/v1beta1/capability";
import * as _57 from "./capability/v1beta1/genesis";
import * as _58 from "./crisis/v1beta1/genesis";
import * as _59 from "./crisis/v1beta1/tx";
import * as _60 from "./crypto/ed25519/keys";
import * as _61 from "./crypto/hd/v1/hd";
import * as _62 from "./crypto/keyring/v1/record";
import * as _63 from "./crypto/multisig/keys";
import * as _64 from "./crypto/secp256k1/keys";
import * as _65 from "./crypto/secp256r1/keys";
import * as _66 from "./distribution/v1beta1/distribution";
import * as _67 from "./distribution/v1beta1/genesis";
import * as _68 from "./distribution/v1beta1/query";
import * as _69 from "./distribution/v1beta1/tx";
import * as _70 from "./evidence/v1beta1/evidence";
import * as _71 from "./evidence/v1beta1/genesis";
import * as _72 from "./evidence/v1beta1/query";
import * as _73 from "./evidence/v1beta1/tx";
import * as _74 from "./feegrant/v1beta1/feegrant";
import * as _75 from "./feegrant/v1beta1/genesis";
import * as _76 from "./feegrant/v1beta1/query";
import * as _77 from "./feegrant/v1beta1/tx";
import * as _78 from "./genutil/v1beta1/genesis";
import * as _79 from "./gov/v1/genesis";
import * as _80 from "./gov/v1/gov";
import * as _81 from "./gov/v1/query";
import * as _82 from "./gov/v1/tx";
import * as _83 from "./gov/v1beta1/genesis";
import * as _84 from "./gov/v1beta1/gov";
import * as _85 from "./gov/v1beta1/query";
import * as _86 from "./gov/v1beta1/tx";
import * as _87 from "./group/v1/events";
import * as _88 from "./group/v1/genesis";
import * as _89 from "./group/v1/query";
import * as _90 from "./group/v1/tx";
import * as _91 from "./group/v1/types";
import * as _92 from "./mint/v1beta1/genesis";
import * as _93 from "./mint/v1beta1/mint";
import * as _94 from "./mint/v1beta1/query";
import * as _96 from "./nft/v1beta1/event";
import * as _97 from "./nft/v1beta1/genesis";
import * as _98 from "./nft/v1beta1/nft";
import * as _99 from "./nft/v1beta1/query";
import * as _100 from "./nft/v1beta1/tx";
import * as _101 from "./orm/module/v1alpha1/module";
import * as _102 from "./orm/v1/orm";
import * as _103 from "./orm/v1alpha1/schema";
import * as _104 from "./params/v1beta1/params";
import * as _105 from "./params/v1beta1/query";
import * as _106 from "./slashing/v1beta1/genesis";
import * as _107 from "./slashing/v1beta1/query";
import * as _108 from "./slashing/v1beta1/slashing";
import * as _109 from "./slashing/v1beta1/tx";
import * as _110 from "./staking/v1beta1/authz";
import * as _111 from "./staking/v1beta1/genesis";
import * as _112 from "./staking/v1beta1/query";
import * as _113 from "./staking/v1beta1/staking";
import * as _114 from "./staking/v1beta1/tx";
import * as _115 from "./tx/signing/v1beta1/signing";
import * as _116 from "./tx/v1beta1/service";
import * as _117 from "./tx/v1beta1/tx";
import * as _118 from "./upgrade/v1beta1/query";
import * as _119 from "./upgrade/v1beta1/tx";
import * as _120 from "./upgrade/v1beta1/upgrade";
import * as _121 from "./vesting/v1beta1/tx";
import * as _122 from "./vesting/v1beta1/vesting";
import * as _195 from "./auth/v1beta1/query.lcd";
import * as _196 from "./authz/v1beta1/query.lcd";
import * as _197 from "./bank/v1beta1/query.lcd";
import * as _198 from "./base/node/v1beta1/query.lcd";
import * as _199 from "./base/tendermint/v1beta1/query.lcd";
import * as _200 from "./distribution/v1beta1/query.lcd";
import * as _201 from "./evidence/v1beta1/query.lcd";
import * as _202 from "./feegrant/v1beta1/query.lcd";
import * as _203 from "./gov/v1/query.lcd";
import * as _204 from "./gov/v1beta1/query.lcd";
import * as _205 from "./group/v1/query.lcd";
import * as _206 from "./mint/v1beta1/query.lcd";
import * as _207 from "./nft/v1beta1/query.lcd";
import * as _208 from "./params/v1beta1/query.lcd";
import * as _209 from "./slashing/v1beta1/query.lcd";
import * as _210 from "./staking/v1beta1/query.lcd";
import * as _211 from "./tx/v1beta1/service.lcd";
import * as _212 from "./upgrade/v1beta1/query.lcd";
import * as _213 from "./app/v1alpha1/query.rpc.Query";
import * as _214 from "./auth/v1beta1/query.rpc.Query";
import * as _215 from "./authz/v1beta1/query.rpc.Query";
import * as _216 from "./bank/v1beta1/query.rpc.Query";
import * as _217 from "./base/node/v1beta1/query.rpc.Service";
import * as _218 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _219 from "./distribution/v1beta1/query.rpc.Query";
import * as _220 from "./evidence/v1beta1/query.rpc.Query";
import * as _221 from "./feegrant/v1beta1/query.rpc.Query";
import * as _222 from "./gov/v1/query.rpc.Query";
import * as _223 from "./gov/v1beta1/query.rpc.Query";
import * as _224 from "./group/v1/query.rpc.Query";
import * as _225 from "./mint/v1beta1/query.rpc.Query";
import * as _226 from "./nft/v1beta1/query.rpc.Query";
import * as _227 from "./params/v1beta1/query.rpc.Query";
import * as _228 from "./slashing/v1beta1/query.rpc.Query";
import * as _229 from "./staking/v1beta1/query.rpc.Query";
import * as _230 from "./tx/v1beta1/service.rpc.Service";
import * as _231 from "./upgrade/v1beta1/query.rpc.Query";
import * as _232 from "./authz/v1beta1/tx.rpc.msg";
import * as _233 from "./bank/v1beta1/tx.rpc.msg";
import * as _234 from "./crisis/v1beta1/tx.rpc.msg";
import * as _235 from "./distribution/v1beta1/tx.rpc.msg";
import * as _236 from "./evidence/v1beta1/tx.rpc.msg";
import * as _237 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _238 from "./gov/v1/tx.rpc.msg";
import * as _239 from "./gov/v1beta1/tx.rpc.msg";
import * as _240 from "./group/v1/tx.rpc.msg";
import * as _241 from "./nft/v1beta1/tx.rpc.msg";
import * as _242 from "./slashing/v1beta1/tx.rpc.msg";
import * as _243 from "./staking/v1beta1/tx.rpc.msg";
import * as _244 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _245 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _27.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _27.Module;
                    fromPartial(_: Partial<_27.Module>): _27.Module;
                    fromAmino(_: _27.ModuleAmino): _27.Module;
                    toAmino(_: _27.Module): _27.ModuleAmino;
                    fromAminoMsg(object: _27.ModuleAminoMsg): _27.Module;
                    toAminoMsg(message: _27.Module): _27.ModuleAminoMsg;
                    fromProtoMsg(message: _27.ModuleProtoMsg): _27.Module;
                    toProto(message: _27.Module): Uint8Array;
                    toProtoMsg(message: _27.Module): _27.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _30.QueryConfigRequest): Promise<_30.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _30.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.QueryConfigRequest;
                fromPartial(_: Partial<_30.QueryConfigRequest>): _30.QueryConfigRequest;
                fromAmino(_: _30.QueryConfigRequestAmino): _30.QueryConfigRequest;
                toAmino(_: _30.QueryConfigRequest): _30.QueryConfigRequestAmino;
                fromAminoMsg(object: _30.QueryConfigRequestAminoMsg): _30.QueryConfigRequest;
                toAminoMsg(message: _30.QueryConfigRequest): _30.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _30.QueryConfigRequestProtoMsg): _30.QueryConfigRequest;
                toProto(message: _30.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _30.QueryConfigRequest): _30.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _30.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryConfigResponse;
                fromPartial(object: Partial<_30.QueryConfigResponse>): _30.QueryConfigResponse;
                fromAmino(object: _30.QueryConfigResponseAmino): _30.QueryConfigResponse;
                toAmino(message: _30.QueryConfigResponse): _30.QueryConfigResponseAmino;
                fromAminoMsg(object: _30.QueryConfigResponseAminoMsg): _30.QueryConfigResponse;
                toAminoMsg(message: _30.QueryConfigResponse): _30.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _30.QueryConfigResponseProtoMsg): _30.QueryConfigResponse;
                toProto(message: _30.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _30.QueryConfigResponse): _30.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _29.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.ModuleDescriptor;
                fromPartial(object: Partial<_29.ModuleDescriptor>): _29.ModuleDescriptor;
                fromAmino(object: _29.ModuleDescriptorAmino): _29.ModuleDescriptor;
                toAmino(message: _29.ModuleDescriptor): _29.ModuleDescriptorAmino;
                fromAminoMsg(object: _29.ModuleDescriptorAminoMsg): _29.ModuleDescriptor;
                toAminoMsg(message: _29.ModuleDescriptor): _29.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _29.ModuleDescriptorProtoMsg): _29.ModuleDescriptor;
                toProto(message: _29.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _29.ModuleDescriptor): _29.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _29.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.PackageReference;
                fromPartial(object: Partial<_29.PackageReference>): _29.PackageReference;
                fromAmino(object: _29.PackageReferenceAmino): _29.PackageReference;
                toAmino(message: _29.PackageReference): _29.PackageReferenceAmino;
                fromAminoMsg(object: _29.PackageReferenceAminoMsg): _29.PackageReference;
                toAminoMsg(message: _29.PackageReference): _29.PackageReferenceAminoMsg;
                fromProtoMsg(message: _29.PackageReferenceProtoMsg): _29.PackageReference;
                toProto(message: _29.PackageReference): Uint8Array;
                toProtoMsg(message: _29.PackageReference): _29.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _29.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MigrateFromInfo;
                fromPartial(object: Partial<_29.MigrateFromInfo>): _29.MigrateFromInfo;
                fromAmino(object: _29.MigrateFromInfoAmino): _29.MigrateFromInfo;
                toAmino(message: _29.MigrateFromInfo): _29.MigrateFromInfoAmino;
                fromAminoMsg(object: _29.MigrateFromInfoAminoMsg): _29.MigrateFromInfo;
                toAminoMsg(message: _29.MigrateFromInfo): _29.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _29.MigrateFromInfoProtoMsg): _29.MigrateFromInfo;
                toProto(message: _29.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _29.MigrateFromInfo): _29.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _28.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.Config;
                fromPartial(object: Partial<_28.Config>): _28.Config;
                fromAmino(object: _28.ConfigAmino): _28.Config;
                toAmino(message: _28.Config): _28.ConfigAmino;
                fromAminoMsg(object: _28.ConfigAminoMsg): _28.Config;
                toAminoMsg(message: _28.Config): _28.ConfigAminoMsg;
                fromProtoMsg(message: _28.ConfigProtoMsg): _28.Config;
                toProto(message: _28.Config): Uint8Array;
                toProtoMsg(message: _28.Config): _28.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _28.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.ModuleConfig;
                fromPartial(object: Partial<_28.ModuleConfig>): _28.ModuleConfig;
                fromAmino(object: _28.ModuleConfigAmino): _28.ModuleConfig;
                toAmino(message: _28.ModuleConfig): _28.ModuleConfigAmino;
                fromAminoMsg(object: _28.ModuleConfigAminoMsg): _28.ModuleConfig;
                toAminoMsg(message: _28.ModuleConfig): _28.ModuleConfigAminoMsg;
                fromProtoMsg(message: _28.ModuleConfigProtoMsg): _28.ModuleConfig;
                toProto(message: _28.ModuleConfig): Uint8Array;
                toProtoMsg(message: _28.ModuleConfig): _28.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _33.QueryAccountsRequest): Promise<_33.QueryAccountsResponse>;
                account(request: _33.QueryAccountRequest): Promise<_33.QueryAccountResponse>;
                accountAddressByID(request: _33.QueryAccountAddressByIDRequest): Promise<_33.QueryAccountAddressByIDResponse>;
                params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                moduleAccounts(request?: _33.QueryModuleAccountsRequest): Promise<_33.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _33.QueryModuleAccountByNameRequest): Promise<_33.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _33.Bech32PrefixRequest): Promise<_33.Bech32PrefixResponse>;
                addressBytesToString(request: _33.AddressBytesToStringRequest): Promise<_33.AddressBytesToStringResponse>;
                addressStringToBytes(request: _33.AddressStringToBytesRequest): Promise<_33.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _33.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryAccountsRequest;
                fromPartial(object: Partial<_33.QueryAccountsRequest>): _33.QueryAccountsRequest;
                fromAmino(object: _33.QueryAccountsRequestAmino): _33.QueryAccountsRequest;
                toAmino(message: _33.QueryAccountsRequest): _33.QueryAccountsRequestAmino;
                fromAminoMsg(object: _33.QueryAccountsRequestAminoMsg): _33.QueryAccountsRequest;
                toAminoMsg(message: _33.QueryAccountsRequest): _33.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryAccountsRequestProtoMsg): _33.QueryAccountsRequest;
                toProto(message: _33.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryAccountsRequest): _33.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _33.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryAccountsResponse;
                fromPartial(object: Partial<_33.QueryAccountsResponse>): _33.QueryAccountsResponse;
                fromAmino(object: _33.QueryAccountsResponseAmino): _33.QueryAccountsResponse;
                toAmino(message: _33.QueryAccountsResponse): _33.QueryAccountsResponseAmino;
                fromAminoMsg(object: _33.QueryAccountsResponseAminoMsg): _33.QueryAccountsResponse;
                toAminoMsg(message: _33.QueryAccountsResponse): _33.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryAccountsResponseProtoMsg): _33.QueryAccountsResponse;
                toProto(message: _33.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryAccountsResponse): _33.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _33.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryAccountRequest;
                fromPartial(object: Partial<_33.QueryAccountRequest>): _33.QueryAccountRequest;
                fromAmino(object: _33.QueryAccountRequestAmino): _33.QueryAccountRequest;
                toAmino(message: _33.QueryAccountRequest): _33.QueryAccountRequestAmino;
                fromAminoMsg(object: _33.QueryAccountRequestAminoMsg): _33.QueryAccountRequest;
                toAminoMsg(message: _33.QueryAccountRequest): _33.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _33.QueryAccountRequestProtoMsg): _33.QueryAccountRequest;
                toProto(message: _33.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _33.QueryAccountRequest): _33.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _33.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryAccountResponse;
                fromPartial(object: Partial<_33.QueryAccountResponse>): _33.QueryAccountResponse;
                fromAmino(object: _33.QueryAccountResponseAmino): _33.QueryAccountResponse;
                toAmino(message: _33.QueryAccountResponse): _33.QueryAccountResponseAmino;
                fromAminoMsg(object: _33.QueryAccountResponseAminoMsg): _33.QueryAccountResponse;
                toAminoMsg(message: _33.QueryAccountResponse): _33.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _33.QueryAccountResponseProtoMsg): _33.QueryAccountResponse;
                toProto(message: _33.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _33.QueryAccountResponse): _33.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _33.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.QueryParamsRequest;
                fromPartial(_: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
                fromAmino(_: _33.QueryParamsRequestAmino): _33.QueryParamsRequest;
                toAmino(_: _33.QueryParamsRequest): _33.QueryParamsRequestAmino;
                fromAminoMsg(object: _33.QueryParamsRequestAminoMsg): _33.QueryParamsRequest;
                toAminoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryParamsRequestProtoMsg): _33.QueryParamsRequest;
                toProto(message: _33.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _33.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryParamsResponse;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
                fromAmino(object: _33.QueryParamsResponseAmino): _33.QueryParamsResponse;
                toAmino(message: _33.QueryParamsResponse): _33.QueryParamsResponseAmino;
                fromAminoMsg(object: _33.QueryParamsResponseAminoMsg): _33.QueryParamsResponse;
                toAminoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryParamsResponseProtoMsg): _33.QueryParamsResponse;
                toProto(message: _33.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _33.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_33.QueryModuleAccountsRequest>): _33.QueryModuleAccountsRequest;
                fromAmino(_: _33.QueryModuleAccountsRequestAmino): _33.QueryModuleAccountsRequest;
                toAmino(_: _33.QueryModuleAccountsRequest): _33.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _33.QueryModuleAccountsRequestAminoMsg): _33.QueryModuleAccountsRequest;
                toAminoMsg(message: _33.QueryModuleAccountsRequest): _33.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryModuleAccountsRequestProtoMsg): _33.QueryModuleAccountsRequest;
                toProto(message: _33.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryModuleAccountsRequest): _33.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _33.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_33.QueryModuleAccountsResponse>): _33.QueryModuleAccountsResponse;
                fromAmino(object: _33.QueryModuleAccountsResponseAmino): _33.QueryModuleAccountsResponse;
                toAmino(message: _33.QueryModuleAccountsResponse): _33.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _33.QueryModuleAccountsResponseAminoMsg): _33.QueryModuleAccountsResponse;
                toAminoMsg(message: _33.QueryModuleAccountsResponse): _33.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryModuleAccountsResponseProtoMsg): _33.QueryModuleAccountsResponse;
                toProto(message: _33.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryModuleAccountsResponse): _33.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _33.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_33.QueryModuleAccountByNameRequest>): _33.QueryModuleAccountByNameRequest;
                fromAmino(object: _33.QueryModuleAccountByNameRequestAmino): _33.QueryModuleAccountByNameRequest;
                toAmino(message: _33.QueryModuleAccountByNameRequest): _33.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _33.QueryModuleAccountByNameRequestAminoMsg): _33.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _33.QueryModuleAccountByNameRequest): _33.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _33.QueryModuleAccountByNameRequestProtoMsg): _33.QueryModuleAccountByNameRequest;
                toProto(message: _33.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _33.QueryModuleAccountByNameRequest): _33.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _33.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_33.QueryModuleAccountByNameResponse>): _33.QueryModuleAccountByNameResponse;
                fromAmino(object: _33.QueryModuleAccountByNameResponseAmino): _33.QueryModuleAccountByNameResponse;
                toAmino(message: _33.QueryModuleAccountByNameResponse): _33.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _33.QueryModuleAccountByNameResponseAminoMsg): _33.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _33.QueryModuleAccountByNameResponse): _33.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _33.QueryModuleAccountByNameResponseProtoMsg): _33.QueryModuleAccountByNameResponse;
                toProto(message: _33.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _33.QueryModuleAccountByNameResponse): _33.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _33.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.Bech32PrefixRequest;
                fromPartial(_: Partial<_33.Bech32PrefixRequest>): _33.Bech32PrefixRequest;
                fromAmino(_: _33.Bech32PrefixRequestAmino): _33.Bech32PrefixRequest;
                toAmino(_: _33.Bech32PrefixRequest): _33.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _33.Bech32PrefixRequestAminoMsg): _33.Bech32PrefixRequest;
                toAminoMsg(message: _33.Bech32PrefixRequest): _33.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _33.Bech32PrefixRequestProtoMsg): _33.Bech32PrefixRequest;
                toProto(message: _33.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _33.Bech32PrefixRequest): _33.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _33.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Bech32PrefixResponse;
                fromPartial(object: Partial<_33.Bech32PrefixResponse>): _33.Bech32PrefixResponse;
                fromAmino(object: _33.Bech32PrefixResponseAmino): _33.Bech32PrefixResponse;
                toAmino(message: _33.Bech32PrefixResponse): _33.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _33.Bech32PrefixResponseAminoMsg): _33.Bech32PrefixResponse;
                toAminoMsg(message: _33.Bech32PrefixResponse): _33.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _33.Bech32PrefixResponseProtoMsg): _33.Bech32PrefixResponse;
                toProto(message: _33.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _33.Bech32PrefixResponse): _33.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _33.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.AddressBytesToStringRequest;
                fromPartial(object: Partial<_33.AddressBytesToStringRequest>): _33.AddressBytesToStringRequest;
                fromAmino(object: _33.AddressBytesToStringRequestAmino): _33.AddressBytesToStringRequest;
                toAmino(message: _33.AddressBytesToStringRequest): _33.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _33.AddressBytesToStringRequestAminoMsg): _33.AddressBytesToStringRequest;
                toAminoMsg(message: _33.AddressBytesToStringRequest): _33.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _33.AddressBytesToStringRequestProtoMsg): _33.AddressBytesToStringRequest;
                toProto(message: _33.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _33.AddressBytesToStringRequest): _33.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _33.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.AddressBytesToStringResponse;
                fromPartial(object: Partial<_33.AddressBytesToStringResponse>): _33.AddressBytesToStringResponse;
                fromAmino(object: _33.AddressBytesToStringResponseAmino): _33.AddressBytesToStringResponse;
                toAmino(message: _33.AddressBytesToStringResponse): _33.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _33.AddressBytesToStringResponseAminoMsg): _33.AddressBytesToStringResponse;
                toAminoMsg(message: _33.AddressBytesToStringResponse): _33.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _33.AddressBytesToStringResponseProtoMsg): _33.AddressBytesToStringResponse;
                toProto(message: _33.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _33.AddressBytesToStringResponse): _33.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _33.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.AddressStringToBytesRequest;
                fromPartial(object: Partial<_33.AddressStringToBytesRequest>): _33.AddressStringToBytesRequest;
                fromAmino(object: _33.AddressStringToBytesRequestAmino): _33.AddressStringToBytesRequest;
                toAmino(message: _33.AddressStringToBytesRequest): _33.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _33.AddressStringToBytesRequestAminoMsg): _33.AddressStringToBytesRequest;
                toAminoMsg(message: _33.AddressStringToBytesRequest): _33.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _33.AddressStringToBytesRequestProtoMsg): _33.AddressStringToBytesRequest;
                toProto(message: _33.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _33.AddressStringToBytesRequest): _33.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _33.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.AddressStringToBytesResponse;
                fromPartial(object: Partial<_33.AddressStringToBytesResponse>): _33.AddressStringToBytesResponse;
                fromAmino(object: _33.AddressStringToBytesResponseAmino): _33.AddressStringToBytesResponse;
                toAmino(message: _33.AddressStringToBytesResponse): _33.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _33.AddressStringToBytesResponseAminoMsg): _33.AddressStringToBytesResponse;
                toAminoMsg(message: _33.AddressStringToBytesResponse): _33.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _33.AddressStringToBytesResponseProtoMsg): _33.AddressStringToBytesResponse;
                toProto(message: _33.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _33.AddressStringToBytesResponse): _33.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _33.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_33.QueryAccountAddressByIDRequest>): _33.QueryAccountAddressByIDRequest;
                fromAmino(object: _33.QueryAccountAddressByIDRequestAmino): _33.QueryAccountAddressByIDRequest;
                toAmino(message: _33.QueryAccountAddressByIDRequest): _33.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _33.QueryAccountAddressByIDRequestAminoMsg): _33.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _33.QueryAccountAddressByIDRequest): _33.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _33.QueryAccountAddressByIDRequestProtoMsg): _33.QueryAccountAddressByIDRequest;
                toProto(message: _33.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _33.QueryAccountAddressByIDRequest): _33.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _33.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_33.QueryAccountAddressByIDResponse>): _33.QueryAccountAddressByIDResponse;
                fromAmino(object: _33.QueryAccountAddressByIDResponseAmino): _33.QueryAccountAddressByIDResponse;
                toAmino(message: _33.QueryAccountAddressByIDResponse): _33.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _33.QueryAccountAddressByIDResponseAminoMsg): _33.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _33.QueryAccountAddressByIDResponse): _33.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _33.QueryAccountAddressByIDResponseProtoMsg): _33.QueryAccountAddressByIDResponse;
                toProto(message: _33.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _33.QueryAccountAddressByIDResponse): _33.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _31.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _31.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _32.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                toAminoMsg(message: _32.GenesisState): _32.GenesisStateAminoMsg;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _31.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.BaseAccount;
                fromPartial(object: Partial<_31.BaseAccount>): _31.BaseAccount;
                fromAmino(object: _31.BaseAccountAmino): _31.BaseAccount;
                toAmino(message: _31.BaseAccount): _31.BaseAccountAmino;
                fromAminoMsg(object: _31.BaseAccountAminoMsg): _31.BaseAccount;
                toAminoMsg(message: _31.BaseAccount): _31.BaseAccountAminoMsg;
                fromProtoMsg(message: _31.BaseAccountProtoMsg): _31.BaseAccount;
                toProto(message: _31.BaseAccount): Uint8Array;
                toProtoMsg(message: _31.BaseAccount): _31.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _31.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.ModuleAccount;
                fromPartial(object: Partial<_31.ModuleAccount>): _31.ModuleAccount;
                fromAmino(object: _31.ModuleAccountAmino): _31.ModuleAccount;
                toAmino(message: _31.ModuleAccount): _31.ModuleAccountAmino;
                fromAminoMsg(object: _31.ModuleAccountAminoMsg): _31.ModuleAccount;
                toAminoMsg(message: _31.ModuleAccount): _31.ModuleAccountAminoMsg;
                fromProtoMsg(message: _31.ModuleAccountProtoMsg): _31.ModuleAccount;
                toProto(message: _31.ModuleAccount): Uint8Array;
                toProtoMsg(message: _31.ModuleAccount): _31.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _31.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Params;
                fromPartial(object: Partial<_31.Params>): _31.Params;
                fromAmino(object: _31.ParamsAmino): _31.Params;
                toAmino(message: _31.Params): _31.ParamsAmino;
                fromAminoMsg(object: _31.ParamsAminoMsg): _31.Params;
                toAminoMsg(message: _31.Params): _31.ParamsAminoMsg;
                fromProtoMsg(message: _31.ParamsProtoMsg): _31.Params;
                toProto(message: _31.Params): Uint8Array;
                toProtoMsg(message: _31.Params): _31.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _37.QueryGrantsRequest): Promise<_37.QueryGrantsResponse>;
                granterGrants(request: _37.QueryGranterGrantsRequest): Promise<_37.QueryGranterGrantsResponse>;
                granteeGrants(request: _37.QueryGranteeGrantsRequest): Promise<_37.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _38.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _38.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _38.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _38.MsgGrant): {
                        typeUrl: string;
                        value: _38.MsgGrant;
                    };
                    exec(value: _38.MsgExec): {
                        typeUrl: string;
                        value: _38.MsgExec;
                    };
                    revoke(value: _38.MsgRevoke): {
                        typeUrl: string;
                        value: _38.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _38.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _38.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _38.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _38.MsgGrant): {
                        typeUrl: string;
                        value: _38.MsgGrant;
                    };
                    exec(value: _38.MsgExec): {
                        typeUrl: string;
                        value: _38.MsgExec;
                    };
                    revoke(value: _38.MsgRevoke): {
                        typeUrl: string;
                        value: _38.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _38.MsgGrant) => _38.MsgGrantAmino;
                    fromAmino: (object: _38.MsgGrantAmino) => _38.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _38.MsgExec) => _38.MsgExecAmino;
                    fromAmino: (object: _38.MsgExecAmino) => _38.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _38.MsgRevoke) => _38.MsgRevokeAmino;
                    fromAmino: (object: _38.MsgRevokeAmino) => _38.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _38.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgGrant;
                fromPartial(object: Partial<_38.MsgGrant>): _38.MsgGrant;
                fromAmino(object: _38.MsgGrantAmino): _38.MsgGrant;
                toAmino(message: _38.MsgGrant): _38.MsgGrantAmino;
                fromAminoMsg(object: _38.MsgGrantAminoMsg): _38.MsgGrant;
                toAminoMsg(message: _38.MsgGrant): _38.MsgGrantAminoMsg;
                fromProtoMsg(message: _38.MsgGrantProtoMsg): _38.MsgGrant;
                toProto(message: _38.MsgGrant): Uint8Array;
                toProtoMsg(message: _38.MsgGrant): _38.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _38.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgExecResponse;
                fromPartial(object: Partial<_38.MsgExecResponse>): _38.MsgExecResponse;
                fromAmino(object: _38.MsgExecResponseAmino): _38.MsgExecResponse;
                toAmino(message: _38.MsgExecResponse): _38.MsgExecResponseAmino;
                fromAminoMsg(object: _38.MsgExecResponseAminoMsg): _38.MsgExecResponse;
                toAminoMsg(message: _38.MsgExecResponse): _38.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _38.MsgExecResponseProtoMsg): _38.MsgExecResponse;
                toProto(message: _38.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _38.MsgExecResponse): _38.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _38.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgExec;
                fromPartial(object: Partial<_38.MsgExec>): _38.MsgExec;
                fromAmino(object: _38.MsgExecAmino): _38.MsgExec;
                toAmino(message: _38.MsgExec): _38.MsgExecAmino;
                fromAminoMsg(object: _38.MsgExecAminoMsg): _38.MsgExec;
                toAminoMsg(message: _38.MsgExec): _38.MsgExecAminoMsg;
                fromProtoMsg(message: _38.MsgExecProtoMsg): _38.MsgExec;
                toProto(message: _38.MsgExec): Uint8Array;
                toProtoMsg(message: _38.MsgExec): _38.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _38.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgGrantResponse;
                fromPartial(_: Partial<_38.MsgGrantResponse>): _38.MsgGrantResponse;
                fromAmino(_: _38.MsgGrantResponseAmino): _38.MsgGrantResponse;
                toAmino(_: _38.MsgGrantResponse): _38.MsgGrantResponseAmino;
                fromAminoMsg(object: _38.MsgGrantResponseAminoMsg): _38.MsgGrantResponse;
                toAminoMsg(message: _38.MsgGrantResponse): _38.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _38.MsgGrantResponseProtoMsg): _38.MsgGrantResponse;
                toProto(message: _38.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _38.MsgGrantResponse): _38.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _38.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgRevoke;
                fromPartial(object: Partial<_38.MsgRevoke>): _38.MsgRevoke;
                fromAmino(object: _38.MsgRevokeAmino): _38.MsgRevoke;
                toAmino(message: _38.MsgRevoke): _38.MsgRevokeAmino;
                fromAminoMsg(object: _38.MsgRevokeAminoMsg): _38.MsgRevoke;
                toAminoMsg(message: _38.MsgRevoke): _38.MsgRevokeAminoMsg;
                fromProtoMsg(message: _38.MsgRevokeProtoMsg): _38.MsgRevoke;
                toProto(message: _38.MsgRevoke): Uint8Array;
                toProtoMsg(message: _38.MsgRevoke): _38.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _38.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgRevokeResponse;
                fromPartial(_: Partial<_38.MsgRevokeResponse>): _38.MsgRevokeResponse;
                fromAmino(_: _38.MsgRevokeResponseAmino): _38.MsgRevokeResponse;
                toAmino(_: _38.MsgRevokeResponse): _38.MsgRevokeResponseAmino;
                fromAminoMsg(object: _38.MsgRevokeResponseAminoMsg): _38.MsgRevokeResponse;
                toAminoMsg(message: _38.MsgRevokeResponse): _38.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _38.MsgRevokeResponseProtoMsg): _38.MsgRevokeResponse;
                toProto(message: _38.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _38.MsgRevokeResponse): _38.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _37.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryGrantsRequest;
                fromPartial(object: Partial<_37.QueryGrantsRequest>): _37.QueryGrantsRequest;
                fromAmino(object: _37.QueryGrantsRequestAmino): _37.QueryGrantsRequest;
                toAmino(message: _37.QueryGrantsRequest): _37.QueryGrantsRequestAmino;
                fromAminoMsg(object: _37.QueryGrantsRequestAminoMsg): _37.QueryGrantsRequest;
                toAminoMsg(message: _37.QueryGrantsRequest): _37.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryGrantsRequestProtoMsg): _37.QueryGrantsRequest;
                toProto(message: _37.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryGrantsRequest): _37.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _37.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryGrantsResponse;
                fromPartial(object: Partial<_37.QueryGrantsResponse>): _37.QueryGrantsResponse;
                fromAmino(object: _37.QueryGrantsResponseAmino): _37.QueryGrantsResponse;
                toAmino(message: _37.QueryGrantsResponse): _37.QueryGrantsResponseAmino;
                fromAminoMsg(object: _37.QueryGrantsResponseAminoMsg): _37.QueryGrantsResponse;
                toAminoMsg(message: _37.QueryGrantsResponse): _37.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryGrantsResponseProtoMsg): _37.QueryGrantsResponse;
                toProto(message: _37.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryGrantsResponse): _37.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _37.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_37.QueryGranterGrantsRequest>): _37.QueryGranterGrantsRequest;
                fromAmino(object: _37.QueryGranterGrantsRequestAmino): _37.QueryGranterGrantsRequest;
                toAmino(message: _37.QueryGranterGrantsRequest): _37.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _37.QueryGranterGrantsRequestAminoMsg): _37.QueryGranterGrantsRequest;
                toAminoMsg(message: _37.QueryGranterGrantsRequest): _37.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryGranterGrantsRequestProtoMsg): _37.QueryGranterGrantsRequest;
                toProto(message: _37.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryGranterGrantsRequest): _37.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _37.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_37.QueryGranterGrantsResponse>): _37.QueryGranterGrantsResponse;
                fromAmino(object: _37.QueryGranterGrantsResponseAmino): _37.QueryGranterGrantsResponse;
                toAmino(message: _37.QueryGranterGrantsResponse): _37.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _37.QueryGranterGrantsResponseAminoMsg): _37.QueryGranterGrantsResponse;
                toAminoMsg(message: _37.QueryGranterGrantsResponse): _37.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryGranterGrantsResponseProtoMsg): _37.QueryGranterGrantsResponse;
                toProto(message: _37.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryGranterGrantsResponse): _37.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _37.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_37.QueryGranteeGrantsRequest>): _37.QueryGranteeGrantsRequest;
                fromAmino(object: _37.QueryGranteeGrantsRequestAmino): _37.QueryGranteeGrantsRequest;
                toAmino(message: _37.QueryGranteeGrantsRequest): _37.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _37.QueryGranteeGrantsRequestAminoMsg): _37.QueryGranteeGrantsRequest;
                toAminoMsg(message: _37.QueryGranteeGrantsRequest): _37.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryGranteeGrantsRequestProtoMsg): _37.QueryGranteeGrantsRequest;
                toProto(message: _37.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryGranteeGrantsRequest): _37.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _37.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_37.QueryGranteeGrantsResponse>): _37.QueryGranteeGrantsResponse;
                fromAmino(object: _37.QueryGranteeGrantsResponseAmino): _37.QueryGranteeGrantsResponse;
                toAmino(message: _37.QueryGranteeGrantsResponse): _37.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _37.QueryGranteeGrantsResponseAminoMsg): _37.QueryGranteeGrantsResponse;
                toAminoMsg(message: _37.QueryGranteeGrantsResponse): _37.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryGranteeGrantsResponseProtoMsg): _37.QueryGranteeGrantsResponse;
                toProto(message: _37.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryGranteeGrantsResponse): _37.QueryGranteeGrantsResponseProtoMsg;
            };
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
            EventGrant: {
                typeUrl: string;
                encode(message: _35.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.EventGrant;
                fromPartial(object: Partial<_35.EventGrant>): _35.EventGrant;
                fromAmino(object: _35.EventGrantAmino): _35.EventGrant;
                toAmino(message: _35.EventGrant): _35.EventGrantAmino;
                fromAminoMsg(object: _35.EventGrantAminoMsg): _35.EventGrant;
                toAminoMsg(message: _35.EventGrant): _35.EventGrantAminoMsg;
                fromProtoMsg(message: _35.EventGrantProtoMsg): _35.EventGrant;
                toProto(message: _35.EventGrant): Uint8Array;
                toProtoMsg(message: _35.EventGrant): _35.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _35.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.EventRevoke;
                fromPartial(object: Partial<_35.EventRevoke>): _35.EventRevoke;
                fromAmino(object: _35.EventRevokeAmino): _35.EventRevoke;
                toAmino(message: _35.EventRevoke): _35.EventRevokeAmino;
                fromAminoMsg(object: _35.EventRevokeAminoMsg): _35.EventRevoke;
                toAminoMsg(message: _35.EventRevoke): _35.EventRevokeAminoMsg;
                fromProtoMsg(message: _35.EventRevokeProtoMsg): _35.EventRevoke;
                toProto(message: _35.EventRevoke): Uint8Array;
                toProtoMsg(message: _35.EventRevoke): _35.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _34.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.GenericAuthorization;
                fromPartial(object: Partial<_34.GenericAuthorization>): _34.GenericAuthorization;
                fromAmino(object: _34.GenericAuthorizationAmino): _34.GenericAuthorization;
                toAmino(message: _34.GenericAuthorization): _34.GenericAuthorizationAmino;
                fromAminoMsg(object: _34.GenericAuthorizationAminoMsg): _34.GenericAuthorization;
                toAminoMsg(message: _34.GenericAuthorization): _34.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _34.GenericAuthorizationProtoMsg): _34.GenericAuthorization;
                toProto(message: _34.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _34.GenericAuthorization): _34.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _34.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Grant;
                fromPartial(object: Partial<_34.Grant>): _34.Grant;
                fromAmino(object: _34.GrantAmino): _34.Grant;
                toAmino(message: _34.Grant): _34.GrantAmino;
                fromAminoMsg(object: _34.GrantAminoMsg): _34.Grant;
                toAminoMsg(message: _34.Grant): _34.GrantAminoMsg;
                fromProtoMsg(message: _34.GrantProtoMsg): _34.Grant;
                toProto(message: _34.Grant): Uint8Array;
                toProtoMsg(message: _34.Grant): _34.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _34.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.GrantAuthorization;
                fromPartial(object: Partial<_34.GrantAuthorization>): _34.GrantAuthorization;
                fromAmino(object: _34.GrantAuthorizationAmino): _34.GrantAuthorization;
                toAmino(message: _34.GrantAuthorization): _34.GrantAuthorizationAmino;
                fromAminoMsg(object: _34.GrantAuthorizationAminoMsg): _34.GrantAuthorization;
                toAminoMsg(message: _34.GrantAuthorization): _34.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _34.GrantAuthorizationProtoMsg): _34.GrantAuthorization;
                toProto(message: _34.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _34.GrantAuthorization): _34.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _34.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.GrantQueueItem;
                fromPartial(object: Partial<_34.GrantQueueItem>): _34.GrantQueueItem;
                fromAmino(object: _34.GrantQueueItemAmino): _34.GrantQueueItem;
                toAmino(message: _34.GrantQueueItem): _34.GrantQueueItemAmino;
                fromAminoMsg(object: _34.GrantQueueItemAminoMsg): _34.GrantQueueItem;
                toAminoMsg(message: _34.GrantQueueItem): _34.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _34.GrantQueueItemProtoMsg): _34.GrantQueueItem;
                toProto(message: _34.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _34.GrantQueueItem): _34.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _39.SendAuthorization | _110.StakeAuthorization | _34.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _42.QueryBalanceRequest): Promise<_42.QueryBalanceResponse>;
                allBalances(request: _42.QueryAllBalancesRequest): Promise<_42.QueryAllBalancesResponse>;
                spendableBalances(request: _42.QuerySpendableBalancesRequest): Promise<_42.QuerySpendableBalancesResponse>;
                totalSupply(request?: _42.QueryTotalSupplyRequest): Promise<_42.QueryTotalSupplyResponse>;
                supplyOf(request: _42.QuerySupplyOfRequest): Promise<_42.QuerySupplyOfResponse>;
                params(request?: _42.QueryParamsRequest): Promise<_42.QueryParamsResponse>;
                denomMetadata(request: _42.QueryDenomMetadataRequest): Promise<_42.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _42.QueryDenomsMetadataRequest): Promise<_42.QueryDenomsMetadataResponse>;
                denomOwners(request: _42.QueryDenomOwnersRequest): Promise<_42.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _197.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _43.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _43.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _43.MsgSend): {
                        typeUrl: string;
                        value: _43.MsgSend;
                    };
                    multiSend(value: _43.MsgMultiSend): {
                        typeUrl: string;
                        value: _43.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _43.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _43.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _43.MsgSend): {
                        typeUrl: string;
                        value: _43.MsgSend;
                    };
                    multiSend(value: _43.MsgMultiSend): {
                        typeUrl: string;
                        value: _43.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _43.MsgSend) => _43.MsgSendAmino;
                    fromAmino: (object: _43.MsgSendAmino) => _43.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _43.MsgMultiSend) => _43.MsgMultiSendAmino;
                    fromAmino: (object: _43.MsgMultiSendAmino) => _43.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _43.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.MsgSend;
                fromPartial(object: Partial<_43.MsgSend>): _43.MsgSend;
                fromAmino(object: _43.MsgSendAmino): _43.MsgSend;
                toAmino(message: _43.MsgSend): _43.MsgSendAmino;
                fromAminoMsg(object: _43.MsgSendAminoMsg): _43.MsgSend;
                toAminoMsg(message: _43.MsgSend): _43.MsgSendAminoMsg;
                fromProtoMsg(message: _43.MsgSendProtoMsg): _43.MsgSend;
                toProto(message: _43.MsgSend): Uint8Array;
                toProtoMsg(message: _43.MsgSend): _43.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _43.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _43.MsgSendResponse;
                fromPartial(_: Partial<_43.MsgSendResponse>): _43.MsgSendResponse;
                fromAmino(_: _43.MsgSendResponseAmino): _43.MsgSendResponse;
                toAmino(_: _43.MsgSendResponse): _43.MsgSendResponseAmino;
                fromAminoMsg(object: _43.MsgSendResponseAminoMsg): _43.MsgSendResponse;
                toAminoMsg(message: _43.MsgSendResponse): _43.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _43.MsgSendResponseProtoMsg): _43.MsgSendResponse;
                toProto(message: _43.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _43.MsgSendResponse): _43.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _43.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.MsgMultiSend;
                fromPartial(object: Partial<_43.MsgMultiSend>): _43.MsgMultiSend;
                fromAmino(object: _43.MsgMultiSendAmino): _43.MsgMultiSend;
                toAmino(message: _43.MsgMultiSend): _43.MsgMultiSendAmino;
                fromAminoMsg(object: _43.MsgMultiSendAminoMsg): _43.MsgMultiSend;
                toAminoMsg(message: _43.MsgMultiSend): _43.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _43.MsgMultiSendProtoMsg): _43.MsgMultiSend;
                toProto(message: _43.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _43.MsgMultiSend): _43.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _43.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _43.MsgMultiSendResponse;
                fromPartial(_: Partial<_43.MsgMultiSendResponse>): _43.MsgMultiSendResponse;
                fromAmino(_: _43.MsgMultiSendResponseAmino): _43.MsgMultiSendResponse;
                toAmino(_: _43.MsgMultiSendResponse): _43.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _43.MsgMultiSendResponseAminoMsg): _43.MsgMultiSendResponse;
                toAminoMsg(message: _43.MsgMultiSendResponse): _43.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _43.MsgMultiSendResponseProtoMsg): _43.MsgMultiSendResponse;
                toProto(message: _43.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _43.MsgMultiSendResponse): _43.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _42.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryBalanceRequest;
                fromPartial(object: Partial<_42.QueryBalanceRequest>): _42.QueryBalanceRequest;
                fromAmino(object: _42.QueryBalanceRequestAmino): _42.QueryBalanceRequest;
                toAmino(message: _42.QueryBalanceRequest): _42.QueryBalanceRequestAmino;
                fromAminoMsg(object: _42.QueryBalanceRequestAminoMsg): _42.QueryBalanceRequest;
                toAminoMsg(message: _42.QueryBalanceRequest): _42.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _42.QueryBalanceRequestProtoMsg): _42.QueryBalanceRequest;
                toProto(message: _42.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _42.QueryBalanceRequest): _42.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _42.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryBalanceResponse;
                fromPartial(object: Partial<_42.QueryBalanceResponse>): _42.QueryBalanceResponse;
                fromAmino(object: _42.QueryBalanceResponseAmino): _42.QueryBalanceResponse;
                toAmino(message: _42.QueryBalanceResponse): _42.QueryBalanceResponseAmino;
                fromAminoMsg(object: _42.QueryBalanceResponseAminoMsg): _42.QueryBalanceResponse;
                toAminoMsg(message: _42.QueryBalanceResponse): _42.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _42.QueryBalanceResponseProtoMsg): _42.QueryBalanceResponse;
                toProto(message: _42.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _42.QueryBalanceResponse): _42.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _42.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryAllBalancesRequest;
                fromPartial(object: Partial<_42.QueryAllBalancesRequest>): _42.QueryAllBalancesRequest;
                fromAmino(object: _42.QueryAllBalancesRequestAmino): _42.QueryAllBalancesRequest;
                toAmino(message: _42.QueryAllBalancesRequest): _42.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _42.QueryAllBalancesRequestAminoMsg): _42.QueryAllBalancesRequest;
                toAminoMsg(message: _42.QueryAllBalancesRequest): _42.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _42.QueryAllBalancesRequestProtoMsg): _42.QueryAllBalancesRequest;
                toProto(message: _42.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _42.QueryAllBalancesRequest): _42.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _42.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryAllBalancesResponse;
                fromPartial(object: Partial<_42.QueryAllBalancesResponse>): _42.QueryAllBalancesResponse;
                fromAmino(object: _42.QueryAllBalancesResponseAmino): _42.QueryAllBalancesResponse;
                toAmino(message: _42.QueryAllBalancesResponse): _42.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _42.QueryAllBalancesResponseAminoMsg): _42.QueryAllBalancesResponse;
                toAminoMsg(message: _42.QueryAllBalancesResponse): _42.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _42.QueryAllBalancesResponseProtoMsg): _42.QueryAllBalancesResponse;
                toProto(message: _42.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _42.QueryAllBalancesResponse): _42.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _42.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_42.QuerySpendableBalancesRequest>): _42.QuerySpendableBalancesRequest;
                fromAmino(object: _42.QuerySpendableBalancesRequestAmino): _42.QuerySpendableBalancesRequest;
                toAmino(message: _42.QuerySpendableBalancesRequest): _42.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _42.QuerySpendableBalancesRequestAminoMsg): _42.QuerySpendableBalancesRequest;
                toAminoMsg(message: _42.QuerySpendableBalancesRequest): _42.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _42.QuerySpendableBalancesRequestProtoMsg): _42.QuerySpendableBalancesRequest;
                toProto(message: _42.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _42.QuerySpendableBalancesRequest): _42.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _42.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_42.QuerySpendableBalancesResponse>): _42.QuerySpendableBalancesResponse;
                fromAmino(object: _42.QuerySpendableBalancesResponseAmino): _42.QuerySpendableBalancesResponse;
                toAmino(message: _42.QuerySpendableBalancesResponse): _42.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _42.QuerySpendableBalancesResponseAminoMsg): _42.QuerySpendableBalancesResponse;
                toAminoMsg(message: _42.QuerySpendableBalancesResponse): _42.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _42.QuerySpendableBalancesResponseProtoMsg): _42.QuerySpendableBalancesResponse;
                toProto(message: _42.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _42.QuerySpendableBalancesResponse): _42.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _42.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_42.QueryTotalSupplyRequest>): _42.QueryTotalSupplyRequest;
                fromAmino(object: _42.QueryTotalSupplyRequestAmino): _42.QueryTotalSupplyRequest;
                toAmino(message: _42.QueryTotalSupplyRequest): _42.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _42.QueryTotalSupplyRequestAminoMsg): _42.QueryTotalSupplyRequest;
                toAminoMsg(message: _42.QueryTotalSupplyRequest): _42.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _42.QueryTotalSupplyRequestProtoMsg): _42.QueryTotalSupplyRequest;
                toProto(message: _42.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _42.QueryTotalSupplyRequest): _42.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _42.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_42.QueryTotalSupplyResponse>): _42.QueryTotalSupplyResponse;
                fromAmino(object: _42.QueryTotalSupplyResponseAmino): _42.QueryTotalSupplyResponse;
                toAmino(message: _42.QueryTotalSupplyResponse): _42.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _42.QueryTotalSupplyResponseAminoMsg): _42.QueryTotalSupplyResponse;
                toAminoMsg(message: _42.QueryTotalSupplyResponse): _42.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _42.QueryTotalSupplyResponseProtoMsg): _42.QueryTotalSupplyResponse;
                toProto(message: _42.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _42.QueryTotalSupplyResponse): _42.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _42.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QuerySupplyOfRequest;
                fromPartial(object: Partial<_42.QuerySupplyOfRequest>): _42.QuerySupplyOfRequest;
                fromAmino(object: _42.QuerySupplyOfRequestAmino): _42.QuerySupplyOfRequest;
                toAmino(message: _42.QuerySupplyOfRequest): _42.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _42.QuerySupplyOfRequestAminoMsg): _42.QuerySupplyOfRequest;
                toAminoMsg(message: _42.QuerySupplyOfRequest): _42.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _42.QuerySupplyOfRequestProtoMsg): _42.QuerySupplyOfRequest;
                toProto(message: _42.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _42.QuerySupplyOfRequest): _42.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _42.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QuerySupplyOfResponse;
                fromPartial(object: Partial<_42.QuerySupplyOfResponse>): _42.QuerySupplyOfResponse;
                fromAmino(object: _42.QuerySupplyOfResponseAmino): _42.QuerySupplyOfResponse;
                toAmino(message: _42.QuerySupplyOfResponse): _42.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _42.QuerySupplyOfResponseAminoMsg): _42.QuerySupplyOfResponse;
                toAminoMsg(message: _42.QuerySupplyOfResponse): _42.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _42.QuerySupplyOfResponseProtoMsg): _42.QuerySupplyOfResponse;
                toProto(message: _42.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _42.QuerySupplyOfResponse): _42.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _42.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.QueryParamsRequest;
                fromPartial(_: Partial<_42.QueryParamsRequest>): _42.QueryParamsRequest;
                fromAmino(_: _42.QueryParamsRequestAmino): _42.QueryParamsRequest;
                toAmino(_: _42.QueryParamsRequest): _42.QueryParamsRequestAmino;
                fromAminoMsg(object: _42.QueryParamsRequestAminoMsg): _42.QueryParamsRequest;
                toAminoMsg(message: _42.QueryParamsRequest): _42.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _42.QueryParamsRequestProtoMsg): _42.QueryParamsRequest;
                toProto(message: _42.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _42.QueryParamsRequest): _42.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _42.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryParamsResponse;
                fromPartial(object: Partial<_42.QueryParamsResponse>): _42.QueryParamsResponse;
                fromAmino(object: _42.QueryParamsResponseAmino): _42.QueryParamsResponse;
                toAmino(message: _42.QueryParamsResponse): _42.QueryParamsResponseAmino;
                fromAminoMsg(object: _42.QueryParamsResponseAminoMsg): _42.QueryParamsResponse;
                toAminoMsg(message: _42.QueryParamsResponse): _42.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _42.QueryParamsResponseProtoMsg): _42.QueryParamsResponse;
                toProto(message: _42.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _42.QueryParamsResponse): _42.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _42.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_42.QueryDenomsMetadataRequest>): _42.QueryDenomsMetadataRequest;
                fromAmino(object: _42.QueryDenomsMetadataRequestAmino): _42.QueryDenomsMetadataRequest;
                toAmino(message: _42.QueryDenomsMetadataRequest): _42.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _42.QueryDenomsMetadataRequestAminoMsg): _42.QueryDenomsMetadataRequest;
                toAminoMsg(message: _42.QueryDenomsMetadataRequest): _42.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _42.QueryDenomsMetadataRequestProtoMsg): _42.QueryDenomsMetadataRequest;
                toProto(message: _42.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _42.QueryDenomsMetadataRequest): _42.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _42.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_42.QueryDenomsMetadataResponse>): _42.QueryDenomsMetadataResponse;
                fromAmino(object: _42.QueryDenomsMetadataResponseAmino): _42.QueryDenomsMetadataResponse;
                toAmino(message: _42.QueryDenomsMetadataResponse): _42.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _42.QueryDenomsMetadataResponseAminoMsg): _42.QueryDenomsMetadataResponse;
                toAminoMsg(message: _42.QueryDenomsMetadataResponse): _42.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _42.QueryDenomsMetadataResponseProtoMsg): _42.QueryDenomsMetadataResponse;
                toProto(message: _42.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _42.QueryDenomsMetadataResponse): _42.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _42.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_42.QueryDenomMetadataRequest>): _42.QueryDenomMetadataRequest;
                fromAmino(object: _42.QueryDenomMetadataRequestAmino): _42.QueryDenomMetadataRequest;
                toAmino(message: _42.QueryDenomMetadataRequest): _42.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _42.QueryDenomMetadataRequestAminoMsg): _42.QueryDenomMetadataRequest;
                toAminoMsg(message: _42.QueryDenomMetadataRequest): _42.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _42.QueryDenomMetadataRequestProtoMsg): _42.QueryDenomMetadataRequest;
                toProto(message: _42.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _42.QueryDenomMetadataRequest): _42.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _42.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_42.QueryDenomMetadataResponse>): _42.QueryDenomMetadataResponse;
                fromAmino(object: _42.QueryDenomMetadataResponseAmino): _42.QueryDenomMetadataResponse;
                toAmino(message: _42.QueryDenomMetadataResponse): _42.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _42.QueryDenomMetadataResponseAminoMsg): _42.QueryDenomMetadataResponse;
                toAminoMsg(message: _42.QueryDenomMetadataResponse): _42.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _42.QueryDenomMetadataResponseProtoMsg): _42.QueryDenomMetadataResponse;
                toProto(message: _42.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _42.QueryDenomMetadataResponse): _42.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _42.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_42.QueryDenomOwnersRequest>): _42.QueryDenomOwnersRequest;
                fromAmino(object: _42.QueryDenomOwnersRequestAmino): _42.QueryDenomOwnersRequest;
                toAmino(message: _42.QueryDenomOwnersRequest): _42.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _42.QueryDenomOwnersRequestAminoMsg): _42.QueryDenomOwnersRequest;
                toAminoMsg(message: _42.QueryDenomOwnersRequest): _42.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _42.QueryDenomOwnersRequestProtoMsg): _42.QueryDenomOwnersRequest;
                toProto(message: _42.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _42.QueryDenomOwnersRequest): _42.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _42.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.DenomOwner;
                fromPartial(object: Partial<_42.DenomOwner>): _42.DenomOwner;
                fromAmino(object: _42.DenomOwnerAmino): _42.DenomOwner;
                toAmino(message: _42.DenomOwner): _42.DenomOwnerAmino;
                fromAminoMsg(object: _42.DenomOwnerAminoMsg): _42.DenomOwner;
                toAminoMsg(message: _42.DenomOwner): _42.DenomOwnerAminoMsg;
                fromProtoMsg(message: _42.DenomOwnerProtoMsg): _42.DenomOwner;
                toProto(message: _42.DenomOwner): Uint8Array;
                toProtoMsg(message: _42.DenomOwner): _42.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _42.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_42.QueryDenomOwnersResponse>): _42.QueryDenomOwnersResponse;
                fromAmino(object: _42.QueryDenomOwnersResponseAmino): _42.QueryDenomOwnersResponse;
                toAmino(message: _42.QueryDenomOwnersResponse): _42.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _42.QueryDenomOwnersResponseAminoMsg): _42.QueryDenomOwnersResponse;
                toAminoMsg(message: _42.QueryDenomOwnersResponse): _42.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _42.QueryDenomOwnersResponseProtoMsg): _42.QueryDenomOwnersResponse;
                toProto(message: _42.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _42.QueryDenomOwnersResponse): _42.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _41.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.GenesisState;
                fromPartial(object: Partial<_41.GenesisState>): _41.GenesisState;
                fromAmino(object: _41.GenesisStateAmino): _41.GenesisState;
                toAmino(message: _41.GenesisState): _41.GenesisStateAmino;
                fromAminoMsg(object: _41.GenesisStateAminoMsg): _41.GenesisState;
                toAminoMsg(message: _41.GenesisState): _41.GenesisStateAminoMsg;
                fromProtoMsg(message: _41.GenesisStateProtoMsg): _41.GenesisState;
                toProto(message: _41.GenesisState): Uint8Array;
                toProtoMsg(message: _41.GenesisState): _41.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _41.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Balance;
                fromPartial(object: Partial<_41.Balance>): _41.Balance;
                fromAmino(object: _41.BalanceAmino): _41.Balance;
                toAmino(message: _41.Balance): _41.BalanceAmino;
                fromAminoMsg(object: _41.BalanceAminoMsg): _41.Balance;
                toAminoMsg(message: _41.Balance): _41.BalanceAminoMsg;
                fromProtoMsg(message: _41.BalanceProtoMsg): _41.Balance;
                toProto(message: _41.Balance): Uint8Array;
                toProtoMsg(message: _41.Balance): _41.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _40.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.Params;
                fromPartial(object: Partial<_40.Params>): _40.Params;
                fromAmino(object: _40.ParamsAmino): _40.Params;
                toAmino(message: _40.Params): _40.ParamsAmino;
                fromAminoMsg(object: _40.ParamsAminoMsg): _40.Params;
                toAminoMsg(message: _40.Params): _40.ParamsAminoMsg;
                fromProtoMsg(message: _40.ParamsProtoMsg): _40.Params;
                toProto(message: _40.Params): Uint8Array;
                toProtoMsg(message: _40.Params): _40.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _40.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.SendEnabled;
                fromPartial(object: Partial<_40.SendEnabled>): _40.SendEnabled;
                fromAmino(object: _40.SendEnabledAmino): _40.SendEnabled;
                toAmino(message: _40.SendEnabled): _40.SendEnabledAmino;
                fromAminoMsg(object: _40.SendEnabledAminoMsg): _40.SendEnabled;
                toAminoMsg(message: _40.SendEnabled): _40.SendEnabledAminoMsg;
                fromProtoMsg(message: _40.SendEnabledProtoMsg): _40.SendEnabled;
                toProto(message: _40.SendEnabled): Uint8Array;
                toProtoMsg(message: _40.SendEnabled): _40.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _40.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.Input;
                fromPartial(object: Partial<_40.Input>): _40.Input;
                fromAmino(object: _40.InputAmino): _40.Input;
                toAmino(message: _40.Input): _40.InputAmino;
                fromAminoMsg(object: _40.InputAminoMsg): _40.Input;
                toAminoMsg(message: _40.Input): _40.InputAminoMsg;
                fromProtoMsg(message: _40.InputProtoMsg): _40.Input;
                toProto(message: _40.Input): Uint8Array;
                toProtoMsg(message: _40.Input): _40.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _40.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.Output;
                fromPartial(object: Partial<_40.Output>): _40.Output;
                fromAmino(object: _40.OutputAmino): _40.Output;
                toAmino(message: _40.Output): _40.OutputAmino;
                fromAminoMsg(object: _40.OutputAminoMsg): _40.Output;
                toAminoMsg(message: _40.Output): _40.OutputAminoMsg;
                fromProtoMsg(message: _40.OutputProtoMsg): _40.Output;
                toProto(message: _40.Output): Uint8Array;
                toProtoMsg(message: _40.Output): _40.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _40.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.Supply;
                fromPartial(object: Partial<_40.Supply>): _40.Supply;
                fromAmino(object: _40.SupplyAmino): _40.Supply;
                toAmino(message: _40.Supply): _40.SupplyAmino;
                fromAminoMsg(object: _40.SupplyAminoMsg): _40.Supply;
                toAminoMsg(message: _40.Supply): _40.SupplyAminoMsg;
                fromProtoMsg(message: _40.SupplyProtoMsg): _40.Supply;
                toProto(message: _40.Supply): Uint8Array;
                toProtoMsg(message: _40.Supply): _40.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _40.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.DenomUnit;
                fromPartial(object: Partial<_40.DenomUnit>): _40.DenomUnit;
                fromAmino(object: _40.DenomUnitAmino): _40.DenomUnit;
                toAmino(message: _40.DenomUnit): _40.DenomUnitAmino;
                fromAminoMsg(object: _40.DenomUnitAminoMsg): _40.DenomUnit;
                toAminoMsg(message: _40.DenomUnit): _40.DenomUnitAminoMsg;
                fromProtoMsg(message: _40.DenomUnitProtoMsg): _40.DenomUnit;
                toProto(message: _40.DenomUnit): Uint8Array;
                toProtoMsg(message: _40.DenomUnit): _40.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _40.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.Metadata;
                fromPartial(object: Partial<_40.Metadata>): _40.Metadata;
                fromAmino(object: _40.MetadataAmino): _40.Metadata;
                toAmino(message: _40.Metadata): _40.MetadataAmino;
                fromAminoMsg(object: _40.MetadataAminoMsg): _40.Metadata;
                toAminoMsg(message: _40.Metadata): _40.MetadataAminoMsg;
                fromProtoMsg(message: _40.MetadataProtoMsg): _40.Metadata;
                toProto(message: _40.Metadata): Uint8Array;
                toProtoMsg(message: _40.Metadata): _40.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _39.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.SendAuthorization;
                fromPartial(object: Partial<_39.SendAuthorization>): _39.SendAuthorization;
                fromAmino(object: _39.SendAuthorizationAmino): _39.SendAuthorization;
                toAmino(message: _39.SendAuthorization): _39.SendAuthorizationAmino;
                fromAminoMsg(object: _39.SendAuthorizationAminoMsg): _39.SendAuthorization;
                toAminoMsg(message: _39.SendAuthorization): _39.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _39.SendAuthorizationProtoMsg): _39.SendAuthorization;
                toProto(message: _39.SendAuthorization): Uint8Array;
                toProtoMsg(message: _39.SendAuthorization): _39.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _44.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.TxResponse;
                    fromPartial(object: Partial<_44.TxResponse>): _44.TxResponse;
                    fromAmino(object: _44.TxResponseAmino): _44.TxResponse;
                    toAmino(message: _44.TxResponse): _44.TxResponseAmino;
                    fromAminoMsg(object: _44.TxResponseAminoMsg): _44.TxResponse;
                    toAminoMsg(message: _44.TxResponse): _44.TxResponseAminoMsg;
                    fromProtoMsg(message: _44.TxResponseProtoMsg): _44.TxResponse;
                    toProto(message: _44.TxResponse): Uint8Array;
                    toProtoMsg(message: _44.TxResponse): _44.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _44.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.ABCIMessageLog;
                    fromPartial(object: Partial<_44.ABCIMessageLog>): _44.ABCIMessageLog;
                    fromAmino(object: _44.ABCIMessageLogAmino): _44.ABCIMessageLog;
                    toAmino(message: _44.ABCIMessageLog): _44.ABCIMessageLogAmino;
                    fromAminoMsg(object: _44.ABCIMessageLogAminoMsg): _44.ABCIMessageLog;
                    toAminoMsg(message: _44.ABCIMessageLog): _44.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _44.ABCIMessageLogProtoMsg): _44.ABCIMessageLog;
                    toProto(message: _44.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _44.ABCIMessageLog): _44.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _44.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.StringEvent;
                    fromPartial(object: Partial<_44.StringEvent>): _44.StringEvent;
                    fromAmino(object: _44.StringEventAmino): _44.StringEvent;
                    toAmino(message: _44.StringEvent): _44.StringEventAmino;
                    fromAminoMsg(object: _44.StringEventAminoMsg): _44.StringEvent;
                    toAminoMsg(message: _44.StringEvent): _44.StringEventAminoMsg;
                    fromProtoMsg(message: _44.StringEventProtoMsg): _44.StringEvent;
                    toProto(message: _44.StringEvent): Uint8Array;
                    toProtoMsg(message: _44.StringEvent): _44.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _44.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Attribute;
                    fromPartial(object: Partial<_44.Attribute>): _44.Attribute;
                    fromAmino(object: _44.AttributeAmino): _44.Attribute;
                    toAmino(message: _44.Attribute): _44.AttributeAmino;
                    fromAminoMsg(object: _44.AttributeAminoMsg): _44.Attribute;
                    toAminoMsg(message: _44.Attribute): _44.AttributeAminoMsg;
                    fromProtoMsg(message: _44.AttributeProtoMsg): _44.Attribute;
                    toProto(message: _44.Attribute): Uint8Array;
                    toProtoMsg(message: _44.Attribute): _44.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _44.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.GasInfo;
                    fromPartial(object: Partial<_44.GasInfo>): _44.GasInfo;
                    fromAmino(object: _44.GasInfoAmino): _44.GasInfo;
                    toAmino(message: _44.GasInfo): _44.GasInfoAmino;
                    fromAminoMsg(object: _44.GasInfoAminoMsg): _44.GasInfo;
                    toAminoMsg(message: _44.GasInfo): _44.GasInfoAminoMsg;
                    fromProtoMsg(message: _44.GasInfoProtoMsg): _44.GasInfo;
                    toProto(message: _44.GasInfo): Uint8Array;
                    toProtoMsg(message: _44.GasInfo): _44.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _44.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Result;
                    fromPartial(object: Partial<_44.Result>): _44.Result;
                    fromAmino(object: _44.ResultAmino): _44.Result;
                    toAmino(message: _44.Result): _44.ResultAmino;
                    fromAminoMsg(object: _44.ResultAminoMsg): _44.Result;
                    toAminoMsg(message: _44.Result): _44.ResultAminoMsg;
                    fromProtoMsg(message: _44.ResultProtoMsg): _44.Result;
                    toProto(message: _44.Result): Uint8Array;
                    toProtoMsg(message: _44.Result): _44.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _44.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.SimulationResponse;
                    fromPartial(object: Partial<_44.SimulationResponse>): _44.SimulationResponse;
                    fromAmino(object: _44.SimulationResponseAmino): _44.SimulationResponse;
                    toAmino(message: _44.SimulationResponse): _44.SimulationResponseAmino;
                    fromAminoMsg(object: _44.SimulationResponseAminoMsg): _44.SimulationResponse;
                    toAminoMsg(message: _44.SimulationResponse): _44.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _44.SimulationResponseProtoMsg): _44.SimulationResponse;
                    toProto(message: _44.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _44.SimulationResponse): _44.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _44.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.MsgData;
                    fromPartial(object: Partial<_44.MsgData>): _44.MsgData;
                    fromAmino(object: _44.MsgDataAmino): _44.MsgData;
                    toAmino(message: _44.MsgData): _44.MsgDataAmino;
                    fromAminoMsg(object: _44.MsgDataAminoMsg): _44.MsgData;
                    toAminoMsg(message: _44.MsgData): _44.MsgDataAminoMsg;
                    fromProtoMsg(message: _44.MsgDataProtoMsg): _44.MsgData;
                    toProto(message: _44.MsgData): Uint8Array;
                    toProtoMsg(message: _44.MsgData): _44.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _44.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.TxMsgData;
                    fromPartial(object: Partial<_44.TxMsgData>): _44.TxMsgData;
                    fromAmino(object: _44.TxMsgDataAmino): _44.TxMsgData;
                    toAmino(message: _44.TxMsgData): _44.TxMsgDataAmino;
                    fromAminoMsg(object: _44.TxMsgDataAminoMsg): _44.TxMsgData;
                    toAminoMsg(message: _44.TxMsgData): _44.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _44.TxMsgDataProtoMsg): _44.TxMsgData;
                    toProto(message: _44.TxMsgData): Uint8Array;
                    toProtoMsg(message: _44.TxMsgData): _44.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _44.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.SearchTxsResult;
                    fromPartial(object: Partial<_44.SearchTxsResult>): _44.SearchTxsResult;
                    fromAmino(object: _44.SearchTxsResultAmino): _44.SearchTxsResult;
                    toAmino(message: _44.SearchTxsResult): _44.SearchTxsResultAmino;
                    fromAminoMsg(object: _44.SearchTxsResultAminoMsg): _44.SearchTxsResult;
                    toAminoMsg(message: _44.SearchTxsResult): _44.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _44.SearchTxsResultProtoMsg): _44.SearchTxsResult;
                    toProto(message: _44.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _44.SearchTxsResult): _44.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _45.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.Pairs;
                    fromPartial(object: Partial<_45.Pairs>): _45.Pairs;
                    fromAmino(object: _45.PairsAmino): _45.Pairs;
                    toAmino(message: _45.Pairs): _45.PairsAmino;
                    fromAminoMsg(object: _45.PairsAminoMsg): _45.Pairs;
                    toAminoMsg(message: _45.Pairs): _45.PairsAminoMsg;
                    fromProtoMsg(message: _45.PairsProtoMsg): _45.Pairs;
                    toProto(message: _45.Pairs): Uint8Array;
                    toProtoMsg(message: _45.Pairs): _45.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _45.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.Pair;
                    fromPartial(object: Partial<_45.Pair>): _45.Pair;
                    fromAmino(object: _45.PairAmino): _45.Pair;
                    toAmino(message: _45.Pair): _45.PairAmino;
                    fromAminoMsg(object: _45.PairAminoMsg): _45.Pair;
                    toAminoMsg(message: _45.Pair): _45.PairAminoMsg;
                    fromProtoMsg(message: _45.PairProtoMsg): _45.Pair;
                    toProto(message: _45.Pair): Uint8Array;
                    toProtoMsg(message: _45.Pair): _45.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _217.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _46.ConfigRequest): Promise<_46.ConfigResponse>;
                };
                LCDQueryClient: typeof _198.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _46.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.ConfigRequest;
                    fromPartial(_: Partial<_46.ConfigRequest>): _46.ConfigRequest;
                    fromAmino(_: _46.ConfigRequestAmino): _46.ConfigRequest;
                    toAmino(_: _46.ConfigRequest): _46.ConfigRequestAmino;
                    fromAminoMsg(object: _46.ConfigRequestAminoMsg): _46.ConfigRequest;
                    toAminoMsg(message: _46.ConfigRequest): _46.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _46.ConfigRequestProtoMsg): _46.ConfigRequest;
                    toProto(message: _46.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _46.ConfigRequest): _46.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _46.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ConfigResponse;
                    fromPartial(object: Partial<_46.ConfigResponse>): _46.ConfigResponse;
                    fromAmino(object: _46.ConfigResponseAmino): _46.ConfigResponse;
                    toAmino(message: _46.ConfigResponse): _46.ConfigResponseAmino;
                    fromAminoMsg(object: _46.ConfigResponseAminoMsg): _46.ConfigResponse;
                    toAminoMsg(message: _46.ConfigResponse): _46.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _46.ConfigResponseProtoMsg): _46.ConfigResponse;
                    toProto(message: _46.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _46.ConfigResponse): _46.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _47.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.PageRequest;
                    fromPartial(object: Partial<_47.PageRequest>): _47.PageRequest;
                    fromAmino(object: _47.PageRequestAmino): _47.PageRequest;
                    toAmino(message: _47.PageRequest): _47.PageRequestAmino;
                    fromAminoMsg(object: _47.PageRequestAminoMsg): _47.PageRequest;
                    toAminoMsg(message: _47.PageRequest): _47.PageRequestAminoMsg;
                    fromProtoMsg(message: _47.PageRequestProtoMsg): _47.PageRequest;
                    toProto(message: _47.PageRequest): Uint8Array;
                    toProtoMsg(message: _47.PageRequest): _47.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _47.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.PageResponse;
                    fromPartial(object: Partial<_47.PageResponse>): _47.PageResponse;
                    fromAmino(object: _47.PageResponseAmino): _47.PageResponse;
                    toAmino(message: _47.PageResponse): _47.PageResponseAmino;
                    fromAminoMsg(object: _47.PageResponseAminoMsg): _47.PageResponse;
                    toAminoMsg(message: _47.PageResponse): _47.PageResponseAminoMsg;
                    fromProtoMsg(message: _47.PageResponseProtoMsg): _47.PageResponse;
                    toProto(message: _47.PageResponse): Uint8Array;
                    toProtoMsg(message: _47.PageResponse): _47.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _48.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_48.ListAllInterfacesRequest>): _48.ListAllInterfacesRequest;
                    fromAmino(_: _48.ListAllInterfacesRequestAmino): _48.ListAllInterfacesRequest;
                    toAmino(_: _48.ListAllInterfacesRequest): _48.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _48.ListAllInterfacesRequestAminoMsg): _48.ListAllInterfacesRequest;
                    toAminoMsg(message: _48.ListAllInterfacesRequest): _48.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _48.ListAllInterfacesRequestProtoMsg): _48.ListAllInterfacesRequest;
                    toProto(message: _48.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _48.ListAllInterfacesRequest): _48.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _48.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_48.ListAllInterfacesResponse>): _48.ListAllInterfacesResponse;
                    fromAmino(object: _48.ListAllInterfacesResponseAmino): _48.ListAllInterfacesResponse;
                    toAmino(message: _48.ListAllInterfacesResponse): _48.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _48.ListAllInterfacesResponseAminoMsg): _48.ListAllInterfacesResponse;
                    toAminoMsg(message: _48.ListAllInterfacesResponse): _48.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _48.ListAllInterfacesResponseProtoMsg): _48.ListAllInterfacesResponse;
                    toProto(message: _48.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _48.ListAllInterfacesResponse): _48.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _48.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.ListImplementationsRequest;
                    fromPartial(object: Partial<_48.ListImplementationsRequest>): _48.ListImplementationsRequest;
                    fromAmino(object: _48.ListImplementationsRequestAmino): _48.ListImplementationsRequest;
                    toAmino(message: _48.ListImplementationsRequest): _48.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _48.ListImplementationsRequestAminoMsg): _48.ListImplementationsRequest;
                    toAminoMsg(message: _48.ListImplementationsRequest): _48.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _48.ListImplementationsRequestProtoMsg): _48.ListImplementationsRequest;
                    toProto(message: _48.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _48.ListImplementationsRequest): _48.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _48.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.ListImplementationsResponse;
                    fromPartial(object: Partial<_48.ListImplementationsResponse>): _48.ListImplementationsResponse;
                    fromAmino(object: _48.ListImplementationsResponseAmino): _48.ListImplementationsResponse;
                    toAmino(message: _48.ListImplementationsResponse): _48.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _48.ListImplementationsResponseAminoMsg): _48.ListImplementationsResponse;
                    toAminoMsg(message: _48.ListImplementationsResponse): _48.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _48.ListImplementationsResponseProtoMsg): _48.ListImplementationsResponse;
                    toProto(message: _48.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _48.ListImplementationsResponse): _48.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _49.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.AppDescriptor;
                    fromPartial(object: Partial<_49.AppDescriptor>): _49.AppDescriptor;
                    fromAmino(object: _49.AppDescriptorAmino): _49.AppDescriptor;
                    toAmino(message: _49.AppDescriptor): _49.AppDescriptorAmino;
                    fromAminoMsg(object: _49.AppDescriptorAminoMsg): _49.AppDescriptor;
                    toAminoMsg(message: _49.AppDescriptor): _49.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _49.AppDescriptorProtoMsg): _49.AppDescriptor;
                    toProto(message: _49.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _49.AppDescriptor): _49.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _49.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.TxDescriptor;
                    fromPartial(object: Partial<_49.TxDescriptor>): _49.TxDescriptor;
                    fromAmino(object: _49.TxDescriptorAmino): _49.TxDescriptor;
                    toAmino(message: _49.TxDescriptor): _49.TxDescriptorAmino;
                    fromAminoMsg(object: _49.TxDescriptorAminoMsg): _49.TxDescriptor;
                    toAminoMsg(message: _49.TxDescriptor): _49.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _49.TxDescriptorProtoMsg): _49.TxDescriptor;
                    toProto(message: _49.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _49.TxDescriptor): _49.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _49.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.AuthnDescriptor;
                    fromPartial(object: Partial<_49.AuthnDescriptor>): _49.AuthnDescriptor;
                    fromAmino(object: _49.AuthnDescriptorAmino): _49.AuthnDescriptor;
                    toAmino(message: _49.AuthnDescriptor): _49.AuthnDescriptorAmino;
                    fromAminoMsg(object: _49.AuthnDescriptorAminoMsg): _49.AuthnDescriptor;
                    toAminoMsg(message: _49.AuthnDescriptor): _49.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _49.AuthnDescriptorProtoMsg): _49.AuthnDescriptor;
                    toProto(message: _49.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _49.AuthnDescriptor): _49.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _49.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.SigningModeDescriptor;
                    fromPartial(object: Partial<_49.SigningModeDescriptor>): _49.SigningModeDescriptor;
                    fromAmino(object: _49.SigningModeDescriptorAmino): _49.SigningModeDescriptor;
                    toAmino(message: _49.SigningModeDescriptor): _49.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _49.SigningModeDescriptorAminoMsg): _49.SigningModeDescriptor;
                    toAminoMsg(message: _49.SigningModeDescriptor): _49.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _49.SigningModeDescriptorProtoMsg): _49.SigningModeDescriptor;
                    toProto(message: _49.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _49.SigningModeDescriptor): _49.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _49.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.ChainDescriptor;
                    fromPartial(object: Partial<_49.ChainDescriptor>): _49.ChainDescriptor;
                    fromAmino(object: _49.ChainDescriptorAmino): _49.ChainDescriptor;
                    toAmino(message: _49.ChainDescriptor): _49.ChainDescriptorAmino;
                    fromAminoMsg(object: _49.ChainDescriptorAminoMsg): _49.ChainDescriptor;
                    toAminoMsg(message: _49.ChainDescriptor): _49.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _49.ChainDescriptorProtoMsg): _49.ChainDescriptor;
                    toProto(message: _49.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _49.ChainDescriptor): _49.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _49.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.CodecDescriptor;
                    fromPartial(object: Partial<_49.CodecDescriptor>): _49.CodecDescriptor;
                    fromAmino(object: _49.CodecDescriptorAmino): _49.CodecDescriptor;
                    toAmino(message: _49.CodecDescriptor): _49.CodecDescriptorAmino;
                    fromAminoMsg(object: _49.CodecDescriptorAminoMsg): _49.CodecDescriptor;
                    toAminoMsg(message: _49.CodecDescriptor): _49.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _49.CodecDescriptorProtoMsg): _49.CodecDescriptor;
                    toProto(message: _49.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _49.CodecDescriptor): _49.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _49.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.InterfaceDescriptor;
                    fromPartial(object: Partial<_49.InterfaceDescriptor>): _49.InterfaceDescriptor;
                    fromAmino(object: _49.InterfaceDescriptorAmino): _49.InterfaceDescriptor;
                    toAmino(message: _49.InterfaceDescriptor): _49.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _49.InterfaceDescriptorAminoMsg): _49.InterfaceDescriptor;
                    toAminoMsg(message: _49.InterfaceDescriptor): _49.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _49.InterfaceDescriptorProtoMsg): _49.InterfaceDescriptor;
                    toProto(message: _49.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _49.InterfaceDescriptor): _49.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _49.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_49.InterfaceImplementerDescriptor>): _49.InterfaceImplementerDescriptor;
                    fromAmino(object: _49.InterfaceImplementerDescriptorAmino): _49.InterfaceImplementerDescriptor;
                    toAmino(message: _49.InterfaceImplementerDescriptor): _49.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _49.InterfaceImplementerDescriptorAminoMsg): _49.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _49.InterfaceImplementerDescriptor): _49.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _49.InterfaceImplementerDescriptorProtoMsg): _49.InterfaceImplementerDescriptor;
                    toProto(message: _49.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _49.InterfaceImplementerDescriptor): _49.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _49.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_49.InterfaceAcceptingMessageDescriptor>): _49.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _49.InterfaceAcceptingMessageDescriptorAmino): _49.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _49.InterfaceAcceptingMessageDescriptor): _49.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _49.InterfaceAcceptingMessageDescriptorAminoMsg): _49.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _49.InterfaceAcceptingMessageDescriptor): _49.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _49.InterfaceAcceptingMessageDescriptorProtoMsg): _49.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _49.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _49.InterfaceAcceptingMessageDescriptor): _49.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _49.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.ConfigurationDescriptor;
                    fromPartial(object: Partial<_49.ConfigurationDescriptor>): _49.ConfigurationDescriptor;
                    fromAmino(object: _49.ConfigurationDescriptorAmino): _49.ConfigurationDescriptor;
                    toAmino(message: _49.ConfigurationDescriptor): _49.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _49.ConfigurationDescriptorAminoMsg): _49.ConfigurationDescriptor;
                    toAminoMsg(message: _49.ConfigurationDescriptor): _49.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _49.ConfigurationDescriptorProtoMsg): _49.ConfigurationDescriptor;
                    toProto(message: _49.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _49.ConfigurationDescriptor): _49.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _49.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.MsgDescriptor;
                    fromPartial(object: Partial<_49.MsgDescriptor>): _49.MsgDescriptor;
                    fromAmino(object: _49.MsgDescriptorAmino): _49.MsgDescriptor;
                    toAmino(message: _49.MsgDescriptor): _49.MsgDescriptorAmino;
                    fromAminoMsg(object: _49.MsgDescriptorAminoMsg): _49.MsgDescriptor;
                    toAminoMsg(message: _49.MsgDescriptor): _49.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _49.MsgDescriptorProtoMsg): _49.MsgDescriptor;
                    toProto(message: _49.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _49.MsgDescriptor): _49.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _49.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_49.GetAuthnDescriptorRequest>): _49.GetAuthnDescriptorRequest;
                    fromAmino(_: _49.GetAuthnDescriptorRequestAmino): _49.GetAuthnDescriptorRequest;
                    toAmino(_: _49.GetAuthnDescriptorRequest): _49.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _49.GetAuthnDescriptorRequestAminoMsg): _49.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _49.GetAuthnDescriptorRequest): _49.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _49.GetAuthnDescriptorRequestProtoMsg): _49.GetAuthnDescriptorRequest;
                    toProto(message: _49.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _49.GetAuthnDescriptorRequest): _49.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _49.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_49.GetAuthnDescriptorResponse>): _49.GetAuthnDescriptorResponse;
                    fromAmino(object: _49.GetAuthnDescriptorResponseAmino): _49.GetAuthnDescriptorResponse;
                    toAmino(message: _49.GetAuthnDescriptorResponse): _49.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _49.GetAuthnDescriptorResponseAminoMsg): _49.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _49.GetAuthnDescriptorResponse): _49.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _49.GetAuthnDescriptorResponseProtoMsg): _49.GetAuthnDescriptorResponse;
                    toProto(message: _49.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _49.GetAuthnDescriptorResponse): _49.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _49.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_49.GetChainDescriptorRequest>): _49.GetChainDescriptorRequest;
                    fromAmino(_: _49.GetChainDescriptorRequestAmino): _49.GetChainDescriptorRequest;
                    toAmino(_: _49.GetChainDescriptorRequest): _49.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _49.GetChainDescriptorRequestAminoMsg): _49.GetChainDescriptorRequest;
                    toAminoMsg(message: _49.GetChainDescriptorRequest): _49.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _49.GetChainDescriptorRequestProtoMsg): _49.GetChainDescriptorRequest;
                    toProto(message: _49.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _49.GetChainDescriptorRequest): _49.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _49.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_49.GetChainDescriptorResponse>): _49.GetChainDescriptorResponse;
                    fromAmino(object: _49.GetChainDescriptorResponseAmino): _49.GetChainDescriptorResponse;
                    toAmino(message: _49.GetChainDescriptorResponse): _49.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _49.GetChainDescriptorResponseAminoMsg): _49.GetChainDescriptorResponse;
                    toAminoMsg(message: _49.GetChainDescriptorResponse): _49.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _49.GetChainDescriptorResponseProtoMsg): _49.GetChainDescriptorResponse;
                    toProto(message: _49.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _49.GetChainDescriptorResponse): _49.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _49.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_49.GetCodecDescriptorRequest>): _49.GetCodecDescriptorRequest;
                    fromAmino(_: _49.GetCodecDescriptorRequestAmino): _49.GetCodecDescriptorRequest;
                    toAmino(_: _49.GetCodecDescriptorRequest): _49.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _49.GetCodecDescriptorRequestAminoMsg): _49.GetCodecDescriptorRequest;
                    toAminoMsg(message: _49.GetCodecDescriptorRequest): _49.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _49.GetCodecDescriptorRequestProtoMsg): _49.GetCodecDescriptorRequest;
                    toProto(message: _49.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _49.GetCodecDescriptorRequest): _49.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _49.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_49.GetCodecDescriptorResponse>): _49.GetCodecDescriptorResponse;
                    fromAmino(object: _49.GetCodecDescriptorResponseAmino): _49.GetCodecDescriptorResponse;
                    toAmino(message: _49.GetCodecDescriptorResponse): _49.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _49.GetCodecDescriptorResponseAminoMsg): _49.GetCodecDescriptorResponse;
                    toAminoMsg(message: _49.GetCodecDescriptorResponse): _49.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _49.GetCodecDescriptorResponseProtoMsg): _49.GetCodecDescriptorResponse;
                    toProto(message: _49.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _49.GetCodecDescriptorResponse): _49.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _49.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_49.GetConfigurationDescriptorRequest>): _49.GetConfigurationDescriptorRequest;
                    fromAmino(_: _49.GetConfigurationDescriptorRequestAmino): _49.GetConfigurationDescriptorRequest;
                    toAmino(_: _49.GetConfigurationDescriptorRequest): _49.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _49.GetConfigurationDescriptorRequestAminoMsg): _49.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _49.GetConfigurationDescriptorRequest): _49.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _49.GetConfigurationDescriptorRequestProtoMsg): _49.GetConfigurationDescriptorRequest;
                    toProto(message: _49.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _49.GetConfigurationDescriptorRequest): _49.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _49.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_49.GetConfigurationDescriptorResponse>): _49.GetConfigurationDescriptorResponse;
                    fromAmino(object: _49.GetConfigurationDescriptorResponseAmino): _49.GetConfigurationDescriptorResponse;
                    toAmino(message: _49.GetConfigurationDescriptorResponse): _49.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _49.GetConfigurationDescriptorResponseAminoMsg): _49.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _49.GetConfigurationDescriptorResponse): _49.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _49.GetConfigurationDescriptorResponseProtoMsg): _49.GetConfigurationDescriptorResponse;
                    toProto(message: _49.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _49.GetConfigurationDescriptorResponse): _49.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _49.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_49.GetQueryServicesDescriptorRequest>): _49.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _49.GetQueryServicesDescriptorRequestAmino): _49.GetQueryServicesDescriptorRequest;
                    toAmino(_: _49.GetQueryServicesDescriptorRequest): _49.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _49.GetQueryServicesDescriptorRequestAminoMsg): _49.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _49.GetQueryServicesDescriptorRequest): _49.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _49.GetQueryServicesDescriptorRequestProtoMsg): _49.GetQueryServicesDescriptorRequest;
                    toProto(message: _49.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _49.GetQueryServicesDescriptorRequest): _49.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _49.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_49.GetQueryServicesDescriptorResponse>): _49.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _49.GetQueryServicesDescriptorResponseAmino): _49.GetQueryServicesDescriptorResponse;
                    toAmino(message: _49.GetQueryServicesDescriptorResponse): _49.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _49.GetQueryServicesDescriptorResponseAminoMsg): _49.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _49.GetQueryServicesDescriptorResponse): _49.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _49.GetQueryServicesDescriptorResponseProtoMsg): _49.GetQueryServicesDescriptorResponse;
                    toProto(message: _49.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _49.GetQueryServicesDescriptorResponse): _49.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _49.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_49.GetTxDescriptorRequest>): _49.GetTxDescriptorRequest;
                    fromAmino(_: _49.GetTxDescriptorRequestAmino): _49.GetTxDescriptorRequest;
                    toAmino(_: _49.GetTxDescriptorRequest): _49.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _49.GetTxDescriptorRequestAminoMsg): _49.GetTxDescriptorRequest;
                    toAminoMsg(message: _49.GetTxDescriptorRequest): _49.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _49.GetTxDescriptorRequestProtoMsg): _49.GetTxDescriptorRequest;
                    toProto(message: _49.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _49.GetTxDescriptorRequest): _49.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _49.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_49.GetTxDescriptorResponse>): _49.GetTxDescriptorResponse;
                    fromAmino(object: _49.GetTxDescriptorResponseAmino): _49.GetTxDescriptorResponse;
                    toAmino(message: _49.GetTxDescriptorResponse): _49.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _49.GetTxDescriptorResponseAminoMsg): _49.GetTxDescriptorResponse;
                    toAminoMsg(message: _49.GetTxDescriptorResponse): _49.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _49.GetTxDescriptorResponseProtoMsg): _49.GetTxDescriptorResponse;
                    toProto(message: _49.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _49.GetTxDescriptorResponse): _49.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _49.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.QueryServicesDescriptor;
                    fromPartial(object: Partial<_49.QueryServicesDescriptor>): _49.QueryServicesDescriptor;
                    fromAmino(object: _49.QueryServicesDescriptorAmino): _49.QueryServicesDescriptor;
                    toAmino(message: _49.QueryServicesDescriptor): _49.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _49.QueryServicesDescriptorAminoMsg): _49.QueryServicesDescriptor;
                    toAminoMsg(message: _49.QueryServicesDescriptor): _49.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _49.QueryServicesDescriptorProtoMsg): _49.QueryServicesDescriptor;
                    toProto(message: _49.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _49.QueryServicesDescriptor): _49.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _49.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.QueryServiceDescriptor;
                    fromPartial(object: Partial<_49.QueryServiceDescriptor>): _49.QueryServiceDescriptor;
                    fromAmino(object: _49.QueryServiceDescriptorAmino): _49.QueryServiceDescriptor;
                    toAmino(message: _49.QueryServiceDescriptor): _49.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _49.QueryServiceDescriptorAminoMsg): _49.QueryServiceDescriptor;
                    toAminoMsg(message: _49.QueryServiceDescriptor): _49.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _49.QueryServiceDescriptorProtoMsg): _49.QueryServiceDescriptor;
                    toProto(message: _49.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _49.QueryServiceDescriptor): _49.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _49.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.QueryMethodDescriptor;
                    fromPartial(object: Partial<_49.QueryMethodDescriptor>): _49.QueryMethodDescriptor;
                    fromAmino(object: _49.QueryMethodDescriptorAmino): _49.QueryMethodDescriptor;
                    toAmino(message: _49.QueryMethodDescriptor): _49.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _49.QueryMethodDescriptorAminoMsg): _49.QueryMethodDescriptor;
                    toAminoMsg(message: _49.QueryMethodDescriptor): _49.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _49.QueryMethodDescriptorProtoMsg): _49.QueryMethodDescriptor;
                    toProto(message: _49.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _49.QueryMethodDescriptor): _49.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _50.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.Snapshot;
                    fromPartial(object: Partial<_50.Snapshot>): _50.Snapshot;
                    fromAmino(object: _50.SnapshotAmino): _50.Snapshot;
                    toAmino(message: _50.Snapshot): _50.SnapshotAmino;
                    fromAminoMsg(object: _50.SnapshotAminoMsg): _50.Snapshot;
                    toAminoMsg(message: _50.Snapshot): _50.SnapshotAminoMsg;
                    fromProtoMsg(message: _50.SnapshotProtoMsg): _50.Snapshot;
                    toProto(message: _50.Snapshot): Uint8Array;
                    toProtoMsg(message: _50.Snapshot): _50.SnapshotProtoMsg;
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
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _50.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.SnapshotItem;
                    fromPartial(object: Partial<_50.SnapshotItem>): _50.SnapshotItem;
                    fromAmino(object: _50.SnapshotItemAmino): _50.SnapshotItem;
                    toAmino(message: _50.SnapshotItem): _50.SnapshotItemAmino;
                    fromAminoMsg(object: _50.SnapshotItemAminoMsg): _50.SnapshotItem;
                    toAminoMsg(message: _50.SnapshotItem): _50.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _50.SnapshotItemProtoMsg): _50.SnapshotItem;
                    toProto(message: _50.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _50.SnapshotItem): _50.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _50.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.SnapshotStoreItem;
                    fromPartial(object: Partial<_50.SnapshotStoreItem>): _50.SnapshotStoreItem;
                    fromAmino(object: _50.SnapshotStoreItemAmino): _50.SnapshotStoreItem;
                    toAmino(message: _50.SnapshotStoreItem): _50.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _50.SnapshotStoreItemAminoMsg): _50.SnapshotStoreItem;
                    toAminoMsg(message: _50.SnapshotStoreItem): _50.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _50.SnapshotStoreItemProtoMsg): _50.SnapshotStoreItem;
                    toProto(message: _50.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _50.SnapshotStoreItem): _50.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _50.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.SnapshotIAVLItem;
                    fromPartial(object: Partial<_50.SnapshotIAVLItem>): _50.SnapshotIAVLItem;
                    fromAmino(object: _50.SnapshotIAVLItemAmino): _50.SnapshotIAVLItem;
                    toAmino(message: _50.SnapshotIAVLItem): _50.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _50.SnapshotIAVLItemAminoMsg): _50.SnapshotIAVLItem;
                    toAminoMsg(message: _50.SnapshotIAVLItem): _50.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _50.SnapshotIAVLItemProtoMsg): _50.SnapshotIAVLItem;
                    toProto(message: _50.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _50.SnapshotIAVLItem): _50.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _50.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_50.SnapshotExtensionMeta>): _50.SnapshotExtensionMeta;
                    fromAmino(object: _50.SnapshotExtensionMetaAmino): _50.SnapshotExtensionMeta;
                    toAmino(message: _50.SnapshotExtensionMeta): _50.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _50.SnapshotExtensionMetaAminoMsg): _50.SnapshotExtensionMeta;
                    toAminoMsg(message: _50.SnapshotExtensionMeta): _50.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _50.SnapshotExtensionMetaProtoMsg): _50.SnapshotExtensionMeta;
                    toProto(message: _50.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _50.SnapshotExtensionMeta): _50.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _50.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_50.SnapshotExtensionPayload>): _50.SnapshotExtensionPayload;
                    fromAmino(object: _50.SnapshotExtensionPayloadAmino): _50.SnapshotExtensionPayload;
                    toAmino(message: _50.SnapshotExtensionPayload): _50.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _50.SnapshotExtensionPayloadAminoMsg): _50.SnapshotExtensionPayload;
                    toAminoMsg(message: _50.SnapshotExtensionPayload): _50.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _50.SnapshotExtensionPayloadProtoMsg): _50.SnapshotExtensionPayload;
                    toProto(message: _50.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _50.SnapshotExtensionPayload): _50.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _50.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.SnapshotKVItem;
                    fromPartial(object: Partial<_50.SnapshotKVItem>): _50.SnapshotKVItem;
                    fromAmino(object: _50.SnapshotKVItemAmino): _50.SnapshotKVItem;
                    toAmino(message: _50.SnapshotKVItem): _50.SnapshotKVItemAmino;
                    fromAminoMsg(object: _50.SnapshotKVItemAminoMsg): _50.SnapshotKVItem;
                    toAminoMsg(message: _50.SnapshotKVItem): _50.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _50.SnapshotKVItemProtoMsg): _50.SnapshotKVItem;
                    toProto(message: _50.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _50.SnapshotKVItem): _50.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _50.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.SnapshotSchema;
                    fromPartial(object: Partial<_50.SnapshotSchema>): _50.SnapshotSchema;
                    fromAmino(object: _50.SnapshotSchemaAmino): _50.SnapshotSchema;
                    toAmino(message: _50.SnapshotSchema): _50.SnapshotSchemaAmino;
                    fromAminoMsg(object: _50.SnapshotSchemaAminoMsg): _50.SnapshotSchema;
                    toAminoMsg(message: _50.SnapshotSchema): _50.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _50.SnapshotSchemaProtoMsg): _50.SnapshotSchema;
                    toProto(message: _50.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _50.SnapshotSchema): _50.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _52.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.StoreKVPair;
                    fromPartial(object: Partial<_52.StoreKVPair>): _52.StoreKVPair;
                    fromAmino(object: _52.StoreKVPairAmino): _52.StoreKVPair;
                    toAmino(message: _52.StoreKVPair): _52.StoreKVPairAmino;
                    fromAminoMsg(object: _52.StoreKVPairAminoMsg): _52.StoreKVPair;
                    toAminoMsg(message: _52.StoreKVPair): _52.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _52.StoreKVPairProtoMsg): _52.StoreKVPair;
                    toProto(message: _52.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _52.StoreKVPair): _52.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _52.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.BlockMetadata;
                    fromPartial(object: Partial<_52.BlockMetadata>): _52.BlockMetadata;
                    fromAmino(object: _52.BlockMetadataAmino): _52.BlockMetadata;
                    toAmino(message: _52.BlockMetadata): _52.BlockMetadataAmino;
                    fromAminoMsg(object: _52.BlockMetadataAminoMsg): _52.BlockMetadata;
                    toAminoMsg(message: _52.BlockMetadata): _52.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _52.BlockMetadataProtoMsg): _52.BlockMetadata;
                    toProto(message: _52.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _52.BlockMetadata): _52.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _52.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_52.BlockMetadata_DeliverTx>): _52.BlockMetadata_DeliverTx;
                    fromAmino(object: _52.BlockMetadata_DeliverTxAmino): _52.BlockMetadata_DeliverTx;
                    toAmino(message: _52.BlockMetadata_DeliverTx): _52.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _52.BlockMetadata_DeliverTxAminoMsg): _52.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _52.BlockMetadata_DeliverTx): _52.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _52.BlockMetadata_DeliverTxProtoMsg): _52.BlockMetadata_DeliverTx;
                    toProto(message: _52.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _52.BlockMetadata_DeliverTx): _52.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _51.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.CommitInfo;
                    fromPartial(object: Partial<_51.CommitInfo>): _51.CommitInfo;
                    fromAmino(object: _51.CommitInfoAmino): _51.CommitInfo;
                    toAmino(message: _51.CommitInfo): _51.CommitInfoAmino;
                    fromAminoMsg(object: _51.CommitInfoAminoMsg): _51.CommitInfo;
                    toAminoMsg(message: _51.CommitInfo): _51.CommitInfoAminoMsg;
                    fromProtoMsg(message: _51.CommitInfoProtoMsg): _51.CommitInfo;
                    toProto(message: _51.CommitInfo): Uint8Array;
                    toProtoMsg(message: _51.CommitInfo): _51.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _51.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.StoreInfo;
                    fromPartial(object: Partial<_51.StoreInfo>): _51.StoreInfo;
                    fromAmino(object: _51.StoreInfoAmino): _51.StoreInfo;
                    toAmino(message: _51.StoreInfo): _51.StoreInfoAmino;
                    fromAminoMsg(object: _51.StoreInfoAminoMsg): _51.StoreInfo;
                    toAminoMsg(message: _51.StoreInfo): _51.StoreInfoAminoMsg;
                    fromProtoMsg(message: _51.StoreInfoProtoMsg): _51.StoreInfo;
                    toProto(message: _51.StoreInfo): Uint8Array;
                    toProtoMsg(message: _51.StoreInfo): _51.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _51.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.CommitID;
                    fromPartial(object: Partial<_51.CommitID>): _51.CommitID;
                    fromAmino(object: _51.CommitIDAmino): _51.CommitID;
                    toAmino(message: _51.CommitID): _51.CommitIDAmino;
                    fromAminoMsg(object: _51.CommitIDAminoMsg): _51.CommitID;
                    toAminoMsg(message: _51.CommitID): _51.CommitIDAminoMsg;
                    fromProtoMsg(message: _51.CommitIDProtoMsg): _51.CommitID;
                    toProto(message: _51.CommitID): Uint8Array;
                    toProtoMsg(message: _51.CommitID): _51.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _218.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _53.GetNodeInfoRequest): Promise<_53.GetNodeInfoResponse>;
                    getSyncing(request?: _53.GetSyncingRequest): Promise<_53.GetSyncingResponse>;
                    getLatestBlock(request?: _53.GetLatestBlockRequest): Promise<_53.GetLatestBlockResponse>;
                    getBlockByHeight(request: _53.GetBlockByHeightRequest): Promise<_53.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _53.GetLatestValidatorSetRequest): Promise<_53.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _53.GetValidatorSetByHeightRequest): Promise<_53.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _53.ABCIQueryRequest): Promise<_53.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _199.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _54.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.Block;
                    fromPartial(object: Partial<_54.Block>): _54.Block;
                    fromAmino(object: _54.BlockAmino): _54.Block;
                    toAmino(message: _54.Block): _54.BlockAmino;
                    fromAminoMsg(object: _54.BlockAminoMsg): _54.Block;
                    toAminoMsg(message: _54.Block): _54.BlockAminoMsg;
                    fromProtoMsg(message: _54.BlockProtoMsg): _54.Block;
                    toProto(message: _54.Block): Uint8Array;
                    toProtoMsg(message: _54.Block): _54.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _54.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.Header;
                    fromPartial(object: Partial<_54.Header>): _54.Header;
                    fromAmino(object: _54.HeaderAmino): _54.Header;
                    toAmino(message: _54.Header): _54.HeaderAmino;
                    fromAminoMsg(object: _54.HeaderAminoMsg): _54.Header;
                    toAminoMsg(message: _54.Header): _54.HeaderAminoMsg;
                    fromProtoMsg(message: _54.HeaderProtoMsg): _54.Header;
                    toProto(message: _54.Header): Uint8Array;
                    toProtoMsg(message: _54.Header): _54.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _53.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_53.GetValidatorSetByHeightRequest>): _53.GetValidatorSetByHeightRequest;
                    fromAmino(object: _53.GetValidatorSetByHeightRequestAmino): _53.GetValidatorSetByHeightRequest;
                    toAmino(message: _53.GetValidatorSetByHeightRequest): _53.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _53.GetValidatorSetByHeightRequestAminoMsg): _53.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _53.GetValidatorSetByHeightRequest): _53.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _53.GetValidatorSetByHeightRequestProtoMsg): _53.GetValidatorSetByHeightRequest;
                    toProto(message: _53.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _53.GetValidatorSetByHeightRequest): _53.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _53.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_53.GetValidatorSetByHeightResponse>): _53.GetValidatorSetByHeightResponse;
                    fromAmino(object: _53.GetValidatorSetByHeightResponseAmino): _53.GetValidatorSetByHeightResponse;
                    toAmino(message: _53.GetValidatorSetByHeightResponse): _53.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _53.GetValidatorSetByHeightResponseAminoMsg): _53.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _53.GetValidatorSetByHeightResponse): _53.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _53.GetValidatorSetByHeightResponseProtoMsg): _53.GetValidatorSetByHeightResponse;
                    toProto(message: _53.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _53.GetValidatorSetByHeightResponse): _53.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _53.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_53.GetLatestValidatorSetRequest>): _53.GetLatestValidatorSetRequest;
                    fromAmino(object: _53.GetLatestValidatorSetRequestAmino): _53.GetLatestValidatorSetRequest;
                    toAmino(message: _53.GetLatestValidatorSetRequest): _53.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _53.GetLatestValidatorSetRequestAminoMsg): _53.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _53.GetLatestValidatorSetRequest): _53.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _53.GetLatestValidatorSetRequestProtoMsg): _53.GetLatestValidatorSetRequest;
                    toProto(message: _53.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _53.GetLatestValidatorSetRequest): _53.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _53.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_53.GetLatestValidatorSetResponse>): _53.GetLatestValidatorSetResponse;
                    fromAmino(object: _53.GetLatestValidatorSetResponseAmino): _53.GetLatestValidatorSetResponse;
                    toAmino(message: _53.GetLatestValidatorSetResponse): _53.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _53.GetLatestValidatorSetResponseAminoMsg): _53.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _53.GetLatestValidatorSetResponse): _53.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _53.GetLatestValidatorSetResponseProtoMsg): _53.GetLatestValidatorSetResponse;
                    toProto(message: _53.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _53.GetLatestValidatorSetResponse): _53.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _53.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.Validator;
                    fromPartial(object: Partial<_53.Validator>): _53.Validator;
                    fromAmino(object: _53.ValidatorAmino): _53.Validator;
                    toAmino(message: _53.Validator): _53.ValidatorAmino;
                    fromAminoMsg(object: _53.ValidatorAminoMsg): _53.Validator;
                    toAminoMsg(message: _53.Validator): _53.ValidatorAminoMsg;
                    fromProtoMsg(message: _53.ValidatorProtoMsg): _53.Validator;
                    toProto(message: _53.Validator): Uint8Array;
                    toProtoMsg(message: _53.Validator): _53.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _53.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_53.GetBlockByHeightRequest>): _53.GetBlockByHeightRequest;
                    fromAmino(object: _53.GetBlockByHeightRequestAmino): _53.GetBlockByHeightRequest;
                    toAmino(message: _53.GetBlockByHeightRequest): _53.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _53.GetBlockByHeightRequestAminoMsg): _53.GetBlockByHeightRequest;
                    toAminoMsg(message: _53.GetBlockByHeightRequest): _53.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _53.GetBlockByHeightRequestProtoMsg): _53.GetBlockByHeightRequest;
                    toProto(message: _53.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _53.GetBlockByHeightRequest): _53.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _53.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_53.GetBlockByHeightResponse>): _53.GetBlockByHeightResponse;
                    fromAmino(object: _53.GetBlockByHeightResponseAmino): _53.GetBlockByHeightResponse;
                    toAmino(message: _53.GetBlockByHeightResponse): _53.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _53.GetBlockByHeightResponseAminoMsg): _53.GetBlockByHeightResponse;
                    toAminoMsg(message: _53.GetBlockByHeightResponse): _53.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _53.GetBlockByHeightResponseProtoMsg): _53.GetBlockByHeightResponse;
                    toProto(message: _53.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _53.GetBlockByHeightResponse): _53.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _53.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _53.GetLatestBlockRequest;
                    fromPartial(_: Partial<_53.GetLatestBlockRequest>): _53.GetLatestBlockRequest;
                    fromAmino(_: _53.GetLatestBlockRequestAmino): _53.GetLatestBlockRequest;
                    toAmino(_: _53.GetLatestBlockRequest): _53.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _53.GetLatestBlockRequestAminoMsg): _53.GetLatestBlockRequest;
                    toAminoMsg(message: _53.GetLatestBlockRequest): _53.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _53.GetLatestBlockRequestProtoMsg): _53.GetLatestBlockRequest;
                    toProto(message: _53.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _53.GetLatestBlockRequest): _53.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _53.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.GetLatestBlockResponse;
                    fromPartial(object: Partial<_53.GetLatestBlockResponse>): _53.GetLatestBlockResponse;
                    fromAmino(object: _53.GetLatestBlockResponseAmino): _53.GetLatestBlockResponse;
                    toAmino(message: _53.GetLatestBlockResponse): _53.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _53.GetLatestBlockResponseAminoMsg): _53.GetLatestBlockResponse;
                    toAminoMsg(message: _53.GetLatestBlockResponse): _53.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _53.GetLatestBlockResponseProtoMsg): _53.GetLatestBlockResponse;
                    toProto(message: _53.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _53.GetLatestBlockResponse): _53.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _53.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _53.GetSyncingRequest;
                    fromPartial(_: Partial<_53.GetSyncingRequest>): _53.GetSyncingRequest;
                    fromAmino(_: _53.GetSyncingRequestAmino): _53.GetSyncingRequest;
                    toAmino(_: _53.GetSyncingRequest): _53.GetSyncingRequestAmino;
                    fromAminoMsg(object: _53.GetSyncingRequestAminoMsg): _53.GetSyncingRequest;
                    toAminoMsg(message: _53.GetSyncingRequest): _53.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _53.GetSyncingRequestProtoMsg): _53.GetSyncingRequest;
                    toProto(message: _53.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _53.GetSyncingRequest): _53.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _53.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.GetSyncingResponse;
                    fromPartial(object: Partial<_53.GetSyncingResponse>): _53.GetSyncingResponse;
                    fromAmino(object: _53.GetSyncingResponseAmino): _53.GetSyncingResponse;
                    toAmino(message: _53.GetSyncingResponse): _53.GetSyncingResponseAmino;
                    fromAminoMsg(object: _53.GetSyncingResponseAminoMsg): _53.GetSyncingResponse;
                    toAminoMsg(message: _53.GetSyncingResponse): _53.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _53.GetSyncingResponseProtoMsg): _53.GetSyncingResponse;
                    toProto(message: _53.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _53.GetSyncingResponse): _53.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _53.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _53.GetNodeInfoRequest;
                    fromPartial(_: Partial<_53.GetNodeInfoRequest>): _53.GetNodeInfoRequest;
                    fromAmino(_: _53.GetNodeInfoRequestAmino): _53.GetNodeInfoRequest;
                    toAmino(_: _53.GetNodeInfoRequest): _53.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _53.GetNodeInfoRequestAminoMsg): _53.GetNodeInfoRequest;
                    toAminoMsg(message: _53.GetNodeInfoRequest): _53.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _53.GetNodeInfoRequestProtoMsg): _53.GetNodeInfoRequest;
                    toProto(message: _53.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _53.GetNodeInfoRequest): _53.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _53.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.GetNodeInfoResponse;
                    fromPartial(object: Partial<_53.GetNodeInfoResponse>): _53.GetNodeInfoResponse;
                    fromAmino(object: _53.GetNodeInfoResponseAmino): _53.GetNodeInfoResponse;
                    toAmino(message: _53.GetNodeInfoResponse): _53.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _53.GetNodeInfoResponseAminoMsg): _53.GetNodeInfoResponse;
                    toAminoMsg(message: _53.GetNodeInfoResponse): _53.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _53.GetNodeInfoResponseProtoMsg): _53.GetNodeInfoResponse;
                    toProto(message: _53.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _53.GetNodeInfoResponse): _53.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _53.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.VersionInfo;
                    fromPartial(object: Partial<_53.VersionInfo>): _53.VersionInfo;
                    fromAmino(object: _53.VersionInfoAmino): _53.VersionInfo;
                    toAmino(message: _53.VersionInfo): _53.VersionInfoAmino;
                    fromAminoMsg(object: _53.VersionInfoAminoMsg): _53.VersionInfo;
                    toAminoMsg(message: _53.VersionInfo): _53.VersionInfoAminoMsg;
                    fromProtoMsg(message: _53.VersionInfoProtoMsg): _53.VersionInfo;
                    toProto(message: _53.VersionInfo): Uint8Array;
                    toProtoMsg(message: _53.VersionInfo): _53.VersionInfoProtoMsg;
                };
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
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _53.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.ABCIQueryRequest;
                    fromPartial(object: Partial<_53.ABCIQueryRequest>): _53.ABCIQueryRequest;
                    fromAmino(object: _53.ABCIQueryRequestAmino): _53.ABCIQueryRequest;
                    toAmino(message: _53.ABCIQueryRequest): _53.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _53.ABCIQueryRequestAminoMsg): _53.ABCIQueryRequest;
                    toAminoMsg(message: _53.ABCIQueryRequest): _53.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _53.ABCIQueryRequestProtoMsg): _53.ABCIQueryRequest;
                    toProto(message: _53.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _53.ABCIQueryRequest): _53.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _53.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.ABCIQueryResponse;
                    fromPartial(object: Partial<_53.ABCIQueryResponse>): _53.ABCIQueryResponse;
                    fromAmino(object: _53.ABCIQueryResponseAmino): _53.ABCIQueryResponse;
                    toAmino(message: _53.ABCIQueryResponse): _53.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _53.ABCIQueryResponseAminoMsg): _53.ABCIQueryResponse;
                    toAminoMsg(message: _53.ABCIQueryResponse): _53.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _53.ABCIQueryResponseProtoMsg): _53.ABCIQueryResponse;
                    toProto(message: _53.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _53.ABCIQueryResponse): _53.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _53.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.ProofOp;
                    fromPartial(object: Partial<_53.ProofOp>): _53.ProofOp;
                    fromAmino(object: _53.ProofOpAmino): _53.ProofOp;
                    toAmino(message: _53.ProofOp): _53.ProofOpAmino;
                    fromAminoMsg(object: _53.ProofOpAminoMsg): _53.ProofOp;
                    toAminoMsg(message: _53.ProofOp): _53.ProofOpAminoMsg;
                    fromProtoMsg(message: _53.ProofOpProtoMsg): _53.ProofOp;
                    toProto(message: _53.ProofOp): Uint8Array;
                    toProtoMsg(message: _53.ProofOp): _53.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _53.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.ProofOps;
                    fromPartial(object: Partial<_53.ProofOps>): _53.ProofOps;
                    fromAmino(object: _53.ProofOpsAmino): _53.ProofOps;
                    toAmino(message: _53.ProofOps): _53.ProofOpsAmino;
                    fromAminoMsg(object: _53.ProofOpsAminoMsg): _53.ProofOps;
                    toAminoMsg(message: _53.ProofOps): _53.ProofOpsAminoMsg;
                    fromProtoMsg(message: _53.ProofOpsProtoMsg): _53.ProofOps;
                    toProto(message: _53.ProofOps): Uint8Array;
                    toProtoMsg(message: _53.ProofOps): _53.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _55.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Coin;
                fromPartial(object: Partial<_55.Coin>): _55.Coin;
                fromAmino(object: _55.CoinAmino): _55.Coin;
                toAmino(message: _55.Coin): _55.CoinAmino;
                fromAminoMsg(object: _55.CoinAminoMsg): _55.Coin;
                toAminoMsg(message: _55.Coin): _55.CoinAminoMsg;
                fromProtoMsg(message: _55.CoinProtoMsg): _55.Coin;
                toProto(message: _55.Coin): Uint8Array;
                toProtoMsg(message: _55.Coin): _55.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _55.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.DecCoin;
                fromPartial(object: Partial<_55.DecCoin>): _55.DecCoin;
                fromAmino(object: _55.DecCoinAmino): _55.DecCoin;
                toAmino(message: _55.DecCoin): _55.DecCoinAmino;
                fromAminoMsg(object: _55.DecCoinAminoMsg): _55.DecCoin;
                toAminoMsg(message: _55.DecCoin): _55.DecCoinAminoMsg;
                fromProtoMsg(message: _55.DecCoinProtoMsg): _55.DecCoin;
                toProto(message: _55.DecCoin): Uint8Array;
                toProtoMsg(message: _55.DecCoin): _55.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _55.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.IntProto;
                fromPartial(object: Partial<_55.IntProto>): _55.IntProto;
                fromAmino(object: _55.IntProtoAmino): _55.IntProto;
                toAmino(message: _55.IntProto): _55.IntProtoAmino;
                fromAminoMsg(object: _55.IntProtoAminoMsg): _55.IntProto;
                toAminoMsg(message: _55.IntProto): _55.IntProtoAminoMsg;
                fromProtoMsg(message: _55.IntProtoProtoMsg): _55.IntProto;
                toProto(message: _55.IntProto): Uint8Array;
                toProtoMsg(message: _55.IntProto): _55.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _55.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.DecProto;
                fromPartial(object: Partial<_55.DecProto>): _55.DecProto;
                fromAmino(object: _55.DecProtoAmino): _55.DecProto;
                toAmino(message: _55.DecProto): _55.DecProtoAmino;
                fromAminoMsg(object: _55.DecProtoAminoMsg): _55.DecProto;
                toAminoMsg(message: _55.DecProto): _55.DecProtoAminoMsg;
                fromProtoMsg(message: _55.DecProtoProtoMsg): _55.DecProto;
                toProto(message: _55.DecProto): Uint8Array;
                toProtoMsg(message: _55.DecProto): _55.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _57.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.GenesisOwners;
                fromPartial(object: Partial<_57.GenesisOwners>): _57.GenesisOwners;
                fromAmino(object: _57.GenesisOwnersAmino): _57.GenesisOwners;
                toAmino(message: _57.GenesisOwners): _57.GenesisOwnersAmino;
                fromAminoMsg(object: _57.GenesisOwnersAminoMsg): _57.GenesisOwners;
                toAminoMsg(message: _57.GenesisOwners): _57.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _57.GenesisOwnersProtoMsg): _57.GenesisOwners;
                toProto(message: _57.GenesisOwners): Uint8Array;
                toProtoMsg(message: _57.GenesisOwners): _57.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _56.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Capability;
                fromPartial(object: Partial<_56.Capability>): _56.Capability;
                fromAmino(object: _56.CapabilityAmino): _56.Capability;
                toAmino(message: _56.Capability): _56.CapabilityAmino;
                fromAminoMsg(object: _56.CapabilityAminoMsg): _56.Capability;
                toAminoMsg(message: _56.Capability): _56.CapabilityAminoMsg;
                fromProtoMsg(message: _56.CapabilityProtoMsg): _56.Capability;
                toProto(message: _56.Capability): Uint8Array;
                toProtoMsg(message: _56.Capability): _56.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _56.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Owner;
                fromPartial(object: Partial<_56.Owner>): _56.Owner;
                fromAmino(object: _56.OwnerAmino): _56.Owner;
                toAmino(message: _56.Owner): _56.OwnerAmino;
                fromAminoMsg(object: _56.OwnerAminoMsg): _56.Owner;
                toAminoMsg(message: _56.Owner): _56.OwnerAminoMsg;
                fromProtoMsg(message: _56.OwnerProtoMsg): _56.Owner;
                toProto(message: _56.Owner): Uint8Array;
                toProtoMsg(message: _56.Owner): _56.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _56.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.CapabilityOwners;
                fromPartial(object: Partial<_56.CapabilityOwners>): _56.CapabilityOwners;
                fromAmino(object: _56.CapabilityOwnersAmino): _56.CapabilityOwners;
                toAmino(message: _56.CapabilityOwners): _56.CapabilityOwnersAmino;
                fromAminoMsg(object: _56.CapabilityOwnersAminoMsg): _56.CapabilityOwners;
                toAminoMsg(message: _56.CapabilityOwners): _56.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _56.CapabilityOwnersProtoMsg): _56.CapabilityOwners;
                toProto(message: _56.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _56.CapabilityOwners): _56.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _59.MsgVerifyInvariant) => _59.MsgVerifyInvariantAmino;
                    fromAmino: (object: _59.MsgVerifyInvariantAmino) => _59.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _59.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgVerifyInvariant;
                fromPartial(object: Partial<_59.MsgVerifyInvariant>): _59.MsgVerifyInvariant;
                fromAmino(object: _59.MsgVerifyInvariantAmino): _59.MsgVerifyInvariant;
                toAmino(message: _59.MsgVerifyInvariant): _59.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _59.MsgVerifyInvariantAminoMsg): _59.MsgVerifyInvariant;
                toAminoMsg(message: _59.MsgVerifyInvariant): _59.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _59.MsgVerifyInvariantProtoMsg): _59.MsgVerifyInvariant;
                toProto(message: _59.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _59.MsgVerifyInvariant): _59.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _59.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_59.MsgVerifyInvariantResponse>): _59.MsgVerifyInvariantResponse;
                fromAmino(_: _59.MsgVerifyInvariantResponseAmino): _59.MsgVerifyInvariantResponse;
                toAmino(_: _59.MsgVerifyInvariantResponse): _59.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _59.MsgVerifyInvariantResponseAminoMsg): _59.MsgVerifyInvariantResponse;
                toAminoMsg(message: _59.MsgVerifyInvariantResponse): _59.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _59.MsgVerifyInvariantResponseProtoMsg): _59.MsgVerifyInvariantResponse;
                toProto(message: _59.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _59.MsgVerifyInvariantResponse): _59.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _60.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.PubKey;
                fromPartial(object: Partial<_60.PubKey>): _60.PubKey;
                fromAmino(object: _60.PubKeyAmino): _60.PubKey;
                toAmino(message: _60.PubKey): _60.PubKeyAmino;
                fromAminoMsg(object: _60.PubKeyAminoMsg): _60.PubKey;
                toAminoMsg(message: _60.PubKey): _60.PubKeyAminoMsg;
                fromProtoMsg(message: _60.PubKeyProtoMsg): _60.PubKey;
                toProto(message: _60.PubKey): Uint8Array;
                toProtoMsg(message: _60.PubKey): _60.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _60.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.PrivKey;
                fromPartial(object: Partial<_60.PrivKey>): _60.PrivKey;
                fromAmino(object: _60.PrivKeyAmino): _60.PrivKey;
                toAmino(message: _60.PrivKey): _60.PrivKeyAmino;
                fromAminoMsg(object: _60.PrivKeyAminoMsg): _60.PrivKey;
                toAminoMsg(message: _60.PrivKey): _60.PrivKeyAminoMsg;
                fromProtoMsg(message: _60.PrivKeyProtoMsg): _60.PrivKey;
                toProto(message: _60.PrivKey): Uint8Array;
                toProtoMsg(message: _60.PrivKey): _60.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _61.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.BIP44Params;
                    fromPartial(object: Partial<_61.BIP44Params>): _61.BIP44Params;
                    fromAmino(object: _61.BIP44ParamsAmino): _61.BIP44Params;
                    toAmino(message: _61.BIP44Params): _61.BIP44ParamsAmino;
                    fromAminoMsg(object: _61.BIP44ParamsAminoMsg): _61.BIP44Params;
                    toAminoMsg(message: _61.BIP44Params): _61.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _61.BIP44ParamsProtoMsg): _61.BIP44Params;
                    toProto(message: _61.BIP44Params): Uint8Array;
                    toProtoMsg(message: _61.BIP44Params): _61.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _62.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.Record;
                    fromPartial(object: Partial<_62.Record>): _62.Record;
                    fromAmino(object: _62.RecordAmino): _62.Record;
                    toAmino(message: _62.Record): _62.RecordAmino;
                    fromAminoMsg(object: _62.RecordAminoMsg): _62.Record;
                    toAminoMsg(message: _62.Record): _62.RecordAminoMsg;
                    fromProtoMsg(message: _62.RecordProtoMsg): _62.Record;
                    toProto(message: _62.Record): Uint8Array;
                    toProtoMsg(message: _62.Record): _62.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _62.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.Record_Local;
                    fromPartial(object: Partial<_62.Record_Local>): _62.Record_Local;
                    fromAmino(object: _62.Record_LocalAmino): _62.Record_Local;
                    toAmino(message: _62.Record_Local): _62.Record_LocalAmino;
                    fromAminoMsg(object: _62.Record_LocalAminoMsg): _62.Record_Local;
                    toAminoMsg(message: _62.Record_Local): _62.Record_LocalAminoMsg;
                    fromProtoMsg(message: _62.Record_LocalProtoMsg): _62.Record_Local;
                    toProto(message: _62.Record_Local): Uint8Array;
                    toProtoMsg(message: _62.Record_Local): _62.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _62.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.Record_Ledger;
                    fromPartial(object: Partial<_62.Record_Ledger>): _62.Record_Ledger;
                    fromAmino(object: _62.Record_LedgerAmino): _62.Record_Ledger;
                    toAmino(message: _62.Record_Ledger): _62.Record_LedgerAmino;
                    fromAminoMsg(object: _62.Record_LedgerAminoMsg): _62.Record_Ledger;
                    toAminoMsg(message: _62.Record_Ledger): _62.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _62.Record_LedgerProtoMsg): _62.Record_Ledger;
                    toProto(message: _62.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _62.Record_Ledger): _62.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _62.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _62.Record_Multi;
                    fromPartial(_: Partial<_62.Record_Multi>): _62.Record_Multi;
                    fromAmino(_: _62.Record_MultiAmino): _62.Record_Multi;
                    toAmino(_: _62.Record_Multi): _62.Record_MultiAmino;
                    fromAminoMsg(object: _62.Record_MultiAminoMsg): _62.Record_Multi;
                    toAminoMsg(message: _62.Record_Multi): _62.Record_MultiAminoMsg;
                    fromProtoMsg(message: _62.Record_MultiProtoMsg): _62.Record_Multi;
                    toProto(message: _62.Record_Multi): Uint8Array;
                    toProtoMsg(message: _62.Record_Multi): _62.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _62.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _62.Record_Offline;
                    fromPartial(_: Partial<_62.Record_Offline>): _62.Record_Offline;
                    fromAmino(_: _62.Record_OfflineAmino): _62.Record_Offline;
                    toAmino(_: _62.Record_Offline): _62.Record_OfflineAmino;
                    fromAminoMsg(object: _62.Record_OfflineAminoMsg): _62.Record_Offline;
                    toAminoMsg(message: _62.Record_Offline): _62.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _62.Record_OfflineProtoMsg): _62.Record_Offline;
                    toProto(message: _62.Record_Offline): Uint8Array;
                    toProtoMsg(message: _62.Record_Offline): _62.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _63.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.LegacyAminoPubKey;
                fromPartial(object: Partial<_63.LegacyAminoPubKey>): _63.LegacyAminoPubKey;
                fromAmino(object: _63.LegacyAminoPubKeyAmino): _63.LegacyAminoPubKey;
                toAmino(message: _63.LegacyAminoPubKey): _63.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _63.LegacyAminoPubKeyAminoMsg): _63.LegacyAminoPubKey;
                toAminoMsg(message: _63.LegacyAminoPubKey): _63.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _63.LegacyAminoPubKeyProtoMsg): _63.LegacyAminoPubKey;
                toProto(message: _63.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _63.LegacyAminoPubKey): _63.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _64.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.PubKey;
                fromPartial(object: Partial<_64.PubKey>): _64.PubKey;
                fromAmino(object: _64.PubKeyAmino): _64.PubKey;
                toAmino(message: _64.PubKey): _64.PubKeyAmino;
                fromAminoMsg(object: _64.PubKeyAminoMsg): _64.PubKey;
                toAminoMsg(message: _64.PubKey): _64.PubKeyAminoMsg;
                fromProtoMsg(message: _64.PubKeyProtoMsg): _64.PubKey;
                toProto(message: _64.PubKey): Uint8Array;
                toProtoMsg(message: _64.PubKey): _64.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _64.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.PrivKey;
                fromPartial(object: Partial<_64.PrivKey>): _64.PrivKey;
                fromAmino(object: _64.PrivKeyAmino): _64.PrivKey;
                toAmino(message: _64.PrivKey): _64.PrivKeyAmino;
                fromAminoMsg(object: _64.PrivKeyAminoMsg): _64.PrivKey;
                toAminoMsg(message: _64.PrivKey): _64.PrivKeyAminoMsg;
                fromProtoMsg(message: _64.PrivKeyProtoMsg): _64.PrivKey;
                toProto(message: _64.PrivKey): Uint8Array;
                toProtoMsg(message: _64.PrivKey): _64.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _65.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.PubKey;
                fromPartial(object: Partial<_65.PubKey>): _65.PubKey;
                fromAmino(object: _65.PubKeyAmino): _65.PubKey;
                toAmino(message: _65.PubKey): _65.PubKeyAmino;
                fromAminoMsg(object: _65.PubKeyAminoMsg): _65.PubKey;
                toAminoMsg(message: _65.PubKey): _65.PubKeyAminoMsg;
                fromProtoMsg(message: _65.PubKeyProtoMsg): _65.PubKey;
                toProto(message: _65.PubKey): Uint8Array;
                toProtoMsg(message: _65.PubKey): _65.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _65.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.PrivKey;
                fromPartial(object: Partial<_65.PrivKey>): _65.PrivKey;
                fromAmino(object: _65.PrivKeyAmino): _65.PrivKey;
                toAmino(message: _65.PrivKey): _65.PrivKeyAmino;
                fromAminoMsg(object: _65.PrivKeyAminoMsg): _65.PrivKey;
                toAminoMsg(message: _65.PrivKey): _65.PrivKeyAminoMsg;
                fromProtoMsg(message: _65.PrivKeyProtoMsg): _65.PrivKey;
                toProto(message: _65.PrivKey): Uint8Array;
                toProtoMsg(message: _65.PrivKey): _65.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                validatorOutstandingRewards(request: _68.QueryValidatorOutstandingRewardsRequest): Promise<_68.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _68.QueryValidatorCommissionRequest): Promise<_68.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _68.QueryValidatorSlashesRequest): Promise<_68.QueryValidatorSlashesResponse>;
                delegationRewards(request: _68.QueryDelegationRewardsRequest): Promise<_68.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _68.QueryDelegationTotalRewardsRequest): Promise<_68.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _68.QueryDelegatorValidatorsRequest): Promise<_68.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _68.QueryDelegatorWithdrawAddressRequest): Promise<_68.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _68.QueryCommunityPoolRequest): Promise<_68.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _200.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _69.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _69.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _69.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _69.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _69.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _69.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _69.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _69.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _69.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _69.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _69.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _69.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _69.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _69.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _69.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _69.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _69.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _69.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _69.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _69.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _69.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _69.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _69.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _69.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _69.MsgSetWithdrawAddress) => _69.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _69.MsgSetWithdrawAddressAmino) => _69.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _69.MsgWithdrawDelegatorReward) => _69.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _69.MsgWithdrawDelegatorRewardAmino) => _69.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _69.MsgWithdrawValidatorCommission) => _69.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _69.MsgWithdrawValidatorCommissionAmino) => _69.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _69.MsgFundCommunityPool) => _69.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _69.MsgFundCommunityPoolAmino) => _69.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _69.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_69.MsgSetWithdrawAddress>): _69.MsgSetWithdrawAddress;
                fromAmino(object: _69.MsgSetWithdrawAddressAmino): _69.MsgSetWithdrawAddress;
                toAmino(message: _69.MsgSetWithdrawAddress): _69.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _69.MsgSetWithdrawAddressAminoMsg): _69.MsgSetWithdrawAddress;
                toAminoMsg(message: _69.MsgSetWithdrawAddress): _69.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _69.MsgSetWithdrawAddressProtoMsg): _69.MsgSetWithdrawAddress;
                toProto(message: _69.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _69.MsgSetWithdrawAddress): _69.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _69.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_69.MsgSetWithdrawAddressResponse>): _69.MsgSetWithdrawAddressResponse;
                fromAmino(_: _69.MsgSetWithdrawAddressResponseAmino): _69.MsgSetWithdrawAddressResponse;
                toAmino(_: _69.MsgSetWithdrawAddressResponse): _69.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _69.MsgSetWithdrawAddressResponseAminoMsg): _69.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _69.MsgSetWithdrawAddressResponse): _69.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _69.MsgSetWithdrawAddressResponseProtoMsg): _69.MsgSetWithdrawAddressResponse;
                toProto(message: _69.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _69.MsgSetWithdrawAddressResponse): _69.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _69.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_69.MsgWithdrawDelegatorReward>): _69.MsgWithdrawDelegatorReward;
                fromAmino(object: _69.MsgWithdrawDelegatorRewardAmino): _69.MsgWithdrawDelegatorReward;
                toAmino(message: _69.MsgWithdrawDelegatorReward): _69.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _69.MsgWithdrawDelegatorRewardAminoMsg): _69.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _69.MsgWithdrawDelegatorReward): _69.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _69.MsgWithdrawDelegatorRewardProtoMsg): _69.MsgWithdrawDelegatorReward;
                toProto(message: _69.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _69.MsgWithdrawDelegatorReward): _69.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _69.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_69.MsgWithdrawDelegatorRewardResponse>): _69.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _69.MsgWithdrawDelegatorRewardResponseAmino): _69.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _69.MsgWithdrawDelegatorRewardResponse): _69.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _69.MsgWithdrawDelegatorRewardResponseAminoMsg): _69.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _69.MsgWithdrawDelegatorRewardResponse): _69.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _69.MsgWithdrawDelegatorRewardResponseProtoMsg): _69.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _69.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _69.MsgWithdrawDelegatorRewardResponse): _69.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _69.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_69.MsgWithdrawValidatorCommission>): _69.MsgWithdrawValidatorCommission;
                fromAmino(object: _69.MsgWithdrawValidatorCommissionAmino): _69.MsgWithdrawValidatorCommission;
                toAmino(message: _69.MsgWithdrawValidatorCommission): _69.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _69.MsgWithdrawValidatorCommissionAminoMsg): _69.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _69.MsgWithdrawValidatorCommission): _69.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _69.MsgWithdrawValidatorCommissionProtoMsg): _69.MsgWithdrawValidatorCommission;
                toProto(message: _69.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _69.MsgWithdrawValidatorCommission): _69.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _69.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_69.MsgWithdrawValidatorCommissionResponse>): _69.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _69.MsgWithdrawValidatorCommissionResponseAmino): _69.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _69.MsgWithdrawValidatorCommissionResponse): _69.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _69.MsgWithdrawValidatorCommissionResponseAminoMsg): _69.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _69.MsgWithdrawValidatorCommissionResponse): _69.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _69.MsgWithdrawValidatorCommissionResponseProtoMsg): _69.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _69.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _69.MsgWithdrawValidatorCommissionResponse): _69.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _69.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgFundCommunityPool;
                fromPartial(object: Partial<_69.MsgFundCommunityPool>): _69.MsgFundCommunityPool;
                fromAmino(object: _69.MsgFundCommunityPoolAmino): _69.MsgFundCommunityPool;
                toAmino(message: _69.MsgFundCommunityPool): _69.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _69.MsgFundCommunityPoolAminoMsg): _69.MsgFundCommunityPool;
                toAminoMsg(message: _69.MsgFundCommunityPool): _69.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _69.MsgFundCommunityPoolProtoMsg): _69.MsgFundCommunityPool;
                toProto(message: _69.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _69.MsgFundCommunityPool): _69.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _69.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_69.MsgFundCommunityPoolResponse>): _69.MsgFundCommunityPoolResponse;
                fromAmino(_: _69.MsgFundCommunityPoolResponseAmino): _69.MsgFundCommunityPoolResponse;
                toAmino(_: _69.MsgFundCommunityPoolResponse): _69.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _69.MsgFundCommunityPoolResponseAminoMsg): _69.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _69.MsgFundCommunityPoolResponse): _69.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _69.MsgFundCommunityPoolResponseProtoMsg): _69.MsgFundCommunityPoolResponse;
                toProto(message: _69.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _69.MsgFundCommunityPoolResponse): _69.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _68.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.QueryParamsRequest;
                fromPartial(_: Partial<_68.QueryParamsRequest>): _68.QueryParamsRequest;
                fromAmino(_: _68.QueryParamsRequestAmino): _68.QueryParamsRequest;
                toAmino(_: _68.QueryParamsRequest): _68.QueryParamsRequestAmino;
                fromAminoMsg(object: _68.QueryParamsRequestAminoMsg): _68.QueryParamsRequest;
                toAminoMsg(message: _68.QueryParamsRequest): _68.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryParamsRequestProtoMsg): _68.QueryParamsRequest;
                toProto(message: _68.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryParamsRequest): _68.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _68.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryParamsResponse;
                fromPartial(object: Partial<_68.QueryParamsResponse>): _68.QueryParamsResponse;
                fromAmino(object: _68.QueryParamsResponseAmino): _68.QueryParamsResponse;
                toAmino(message: _68.QueryParamsResponse): _68.QueryParamsResponseAmino;
                fromAminoMsg(object: _68.QueryParamsResponseAminoMsg): _68.QueryParamsResponse;
                toAminoMsg(message: _68.QueryParamsResponse): _68.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryParamsResponseProtoMsg): _68.QueryParamsResponse;
                toProto(message: _68.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryParamsResponse): _68.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _68.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_68.QueryValidatorOutstandingRewardsRequest>): _68.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _68.QueryValidatorOutstandingRewardsRequestAmino): _68.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _68.QueryValidatorOutstandingRewardsRequest): _68.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _68.QueryValidatorOutstandingRewardsRequestAminoMsg): _68.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _68.QueryValidatorOutstandingRewardsRequest): _68.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryValidatorOutstandingRewardsRequestProtoMsg): _68.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _68.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryValidatorOutstandingRewardsRequest): _68.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _68.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_68.QueryValidatorOutstandingRewardsResponse>): _68.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _68.QueryValidatorOutstandingRewardsResponseAmino): _68.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _68.QueryValidatorOutstandingRewardsResponse): _68.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _68.QueryValidatorOutstandingRewardsResponseAminoMsg): _68.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _68.QueryValidatorOutstandingRewardsResponse): _68.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryValidatorOutstandingRewardsResponseProtoMsg): _68.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _68.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryValidatorOutstandingRewardsResponse): _68.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _68.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_68.QueryValidatorCommissionRequest>): _68.QueryValidatorCommissionRequest;
                fromAmino(object: _68.QueryValidatorCommissionRequestAmino): _68.QueryValidatorCommissionRequest;
                toAmino(message: _68.QueryValidatorCommissionRequest): _68.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _68.QueryValidatorCommissionRequestAminoMsg): _68.QueryValidatorCommissionRequest;
                toAminoMsg(message: _68.QueryValidatorCommissionRequest): _68.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _68.QueryValidatorCommissionRequestProtoMsg): _68.QueryValidatorCommissionRequest;
                toProto(message: _68.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _68.QueryValidatorCommissionRequest): _68.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _68.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_68.QueryValidatorCommissionResponse>): _68.QueryValidatorCommissionResponse;
                fromAmino(object: _68.QueryValidatorCommissionResponseAmino): _68.QueryValidatorCommissionResponse;
                toAmino(message: _68.QueryValidatorCommissionResponse): _68.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _68.QueryValidatorCommissionResponseAminoMsg): _68.QueryValidatorCommissionResponse;
                toAminoMsg(message: _68.QueryValidatorCommissionResponse): _68.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _68.QueryValidatorCommissionResponseProtoMsg): _68.QueryValidatorCommissionResponse;
                toProto(message: _68.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _68.QueryValidatorCommissionResponse): _68.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _68.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_68.QueryValidatorSlashesRequest>): _68.QueryValidatorSlashesRequest;
                fromAmino(object: _68.QueryValidatorSlashesRequestAmino): _68.QueryValidatorSlashesRequest;
                toAmino(message: _68.QueryValidatorSlashesRequest): _68.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _68.QueryValidatorSlashesRequestAminoMsg): _68.QueryValidatorSlashesRequest;
                toAminoMsg(message: _68.QueryValidatorSlashesRequest): _68.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _68.QueryValidatorSlashesRequestProtoMsg): _68.QueryValidatorSlashesRequest;
                toProto(message: _68.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _68.QueryValidatorSlashesRequest): _68.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _68.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_68.QueryValidatorSlashesResponse>): _68.QueryValidatorSlashesResponse;
                fromAmino(object: _68.QueryValidatorSlashesResponseAmino): _68.QueryValidatorSlashesResponse;
                toAmino(message: _68.QueryValidatorSlashesResponse): _68.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _68.QueryValidatorSlashesResponseAminoMsg): _68.QueryValidatorSlashesResponse;
                toAminoMsg(message: _68.QueryValidatorSlashesResponse): _68.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _68.QueryValidatorSlashesResponseProtoMsg): _68.QueryValidatorSlashesResponse;
                toProto(message: _68.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _68.QueryValidatorSlashesResponse): _68.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _68.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_68.QueryDelegationRewardsRequest>): _68.QueryDelegationRewardsRequest;
                fromAmino(object: _68.QueryDelegationRewardsRequestAmino): _68.QueryDelegationRewardsRequest;
                toAmino(message: _68.QueryDelegationRewardsRequest): _68.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _68.QueryDelegationRewardsRequestAminoMsg): _68.QueryDelegationRewardsRequest;
                toAminoMsg(message: _68.QueryDelegationRewardsRequest): _68.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryDelegationRewardsRequestProtoMsg): _68.QueryDelegationRewardsRequest;
                toProto(message: _68.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryDelegationRewardsRequest): _68.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _68.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_68.QueryDelegationRewardsResponse>): _68.QueryDelegationRewardsResponse;
                fromAmino(object: _68.QueryDelegationRewardsResponseAmino): _68.QueryDelegationRewardsResponse;
                toAmino(message: _68.QueryDelegationRewardsResponse): _68.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _68.QueryDelegationRewardsResponseAminoMsg): _68.QueryDelegationRewardsResponse;
                toAminoMsg(message: _68.QueryDelegationRewardsResponse): _68.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryDelegationRewardsResponseProtoMsg): _68.QueryDelegationRewardsResponse;
                toProto(message: _68.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryDelegationRewardsResponse): _68.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _68.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_68.QueryDelegationTotalRewardsRequest>): _68.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _68.QueryDelegationTotalRewardsRequestAmino): _68.QueryDelegationTotalRewardsRequest;
                toAmino(message: _68.QueryDelegationTotalRewardsRequest): _68.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _68.QueryDelegationTotalRewardsRequestAminoMsg): _68.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _68.QueryDelegationTotalRewardsRequest): _68.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryDelegationTotalRewardsRequestProtoMsg): _68.QueryDelegationTotalRewardsRequest;
                toProto(message: _68.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryDelegationTotalRewardsRequest): _68.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _68.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_68.QueryDelegationTotalRewardsResponse>): _68.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _68.QueryDelegationTotalRewardsResponseAmino): _68.QueryDelegationTotalRewardsResponse;
                toAmino(message: _68.QueryDelegationTotalRewardsResponse): _68.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _68.QueryDelegationTotalRewardsResponseAminoMsg): _68.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _68.QueryDelegationTotalRewardsResponse): _68.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryDelegationTotalRewardsResponseProtoMsg): _68.QueryDelegationTotalRewardsResponse;
                toProto(message: _68.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryDelegationTotalRewardsResponse): _68.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _68.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_68.QueryDelegatorValidatorsRequest>): _68.QueryDelegatorValidatorsRequest;
                fromAmino(object: _68.QueryDelegatorValidatorsRequestAmino): _68.QueryDelegatorValidatorsRequest;
                toAmino(message: _68.QueryDelegatorValidatorsRequest): _68.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _68.QueryDelegatorValidatorsRequestAminoMsg): _68.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _68.QueryDelegatorValidatorsRequest): _68.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryDelegatorValidatorsRequestProtoMsg): _68.QueryDelegatorValidatorsRequest;
                toProto(message: _68.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryDelegatorValidatorsRequest): _68.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _68.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_68.QueryDelegatorValidatorsResponse>): _68.QueryDelegatorValidatorsResponse;
                fromAmino(object: _68.QueryDelegatorValidatorsResponseAmino): _68.QueryDelegatorValidatorsResponse;
                toAmino(message: _68.QueryDelegatorValidatorsResponse): _68.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _68.QueryDelegatorValidatorsResponseAminoMsg): _68.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _68.QueryDelegatorValidatorsResponse): _68.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryDelegatorValidatorsResponseProtoMsg): _68.QueryDelegatorValidatorsResponse;
                toProto(message: _68.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryDelegatorValidatorsResponse): _68.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _68.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_68.QueryDelegatorWithdrawAddressRequest>): _68.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _68.QueryDelegatorWithdrawAddressRequestAmino): _68.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _68.QueryDelegatorWithdrawAddressRequest): _68.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _68.QueryDelegatorWithdrawAddressRequestAminoMsg): _68.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _68.QueryDelegatorWithdrawAddressRequest): _68.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _68.QueryDelegatorWithdrawAddressRequestProtoMsg): _68.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _68.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _68.QueryDelegatorWithdrawAddressRequest): _68.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _68.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_68.QueryDelegatorWithdrawAddressResponse>): _68.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _68.QueryDelegatorWithdrawAddressResponseAmino): _68.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _68.QueryDelegatorWithdrawAddressResponse): _68.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _68.QueryDelegatorWithdrawAddressResponseAminoMsg): _68.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _68.QueryDelegatorWithdrawAddressResponse): _68.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _68.QueryDelegatorWithdrawAddressResponseProtoMsg): _68.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _68.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _68.QueryDelegatorWithdrawAddressResponse): _68.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _68.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_68.QueryCommunityPoolRequest>): _68.QueryCommunityPoolRequest;
                fromAmino(_: _68.QueryCommunityPoolRequestAmino): _68.QueryCommunityPoolRequest;
                toAmino(_: _68.QueryCommunityPoolRequest): _68.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _68.QueryCommunityPoolRequestAminoMsg): _68.QueryCommunityPoolRequest;
                toAminoMsg(message: _68.QueryCommunityPoolRequest): _68.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _68.QueryCommunityPoolRequestProtoMsg): _68.QueryCommunityPoolRequest;
                toProto(message: _68.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _68.QueryCommunityPoolRequest): _68.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _68.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_68.QueryCommunityPoolResponse>): _68.QueryCommunityPoolResponse;
                fromAmino(object: _68.QueryCommunityPoolResponseAmino): _68.QueryCommunityPoolResponse;
                toAmino(message: _68.QueryCommunityPoolResponse): _68.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _68.QueryCommunityPoolResponseAminoMsg): _68.QueryCommunityPoolResponse;
                toAminoMsg(message: _68.QueryCommunityPoolResponse): _68.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _68.QueryCommunityPoolResponseProtoMsg): _68.QueryCommunityPoolResponse;
                toProto(message: _68.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _68.QueryCommunityPoolResponse): _68.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _67.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_67.DelegatorWithdrawInfo>): _67.DelegatorWithdrawInfo;
                fromAmino(object: _67.DelegatorWithdrawInfoAmino): _67.DelegatorWithdrawInfo;
                toAmino(message: _67.DelegatorWithdrawInfo): _67.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _67.DelegatorWithdrawInfoAminoMsg): _67.DelegatorWithdrawInfo;
                toAminoMsg(message: _67.DelegatorWithdrawInfo): _67.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _67.DelegatorWithdrawInfoProtoMsg): _67.DelegatorWithdrawInfo;
                toProto(message: _67.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _67.DelegatorWithdrawInfo): _67.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _67.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_67.ValidatorOutstandingRewardsRecord>): _67.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _67.ValidatorOutstandingRewardsRecordAmino): _67.ValidatorOutstandingRewardsRecord;
                toAmino(message: _67.ValidatorOutstandingRewardsRecord): _67.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _67.ValidatorOutstandingRewardsRecordAminoMsg): _67.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _67.ValidatorOutstandingRewardsRecord): _67.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _67.ValidatorOutstandingRewardsRecordProtoMsg): _67.ValidatorOutstandingRewardsRecord;
                toProto(message: _67.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _67.ValidatorOutstandingRewardsRecord): _67.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _67.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_67.ValidatorAccumulatedCommissionRecord>): _67.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _67.ValidatorAccumulatedCommissionRecordAmino): _67.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _67.ValidatorAccumulatedCommissionRecord): _67.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _67.ValidatorAccumulatedCommissionRecordAminoMsg): _67.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _67.ValidatorAccumulatedCommissionRecord): _67.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _67.ValidatorAccumulatedCommissionRecordProtoMsg): _67.ValidatorAccumulatedCommissionRecord;
                toProto(message: _67.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _67.ValidatorAccumulatedCommissionRecord): _67.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _67.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_67.ValidatorHistoricalRewardsRecord>): _67.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _67.ValidatorHistoricalRewardsRecordAmino): _67.ValidatorHistoricalRewardsRecord;
                toAmino(message: _67.ValidatorHistoricalRewardsRecord): _67.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _67.ValidatorHistoricalRewardsRecordAminoMsg): _67.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _67.ValidatorHistoricalRewardsRecord): _67.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _67.ValidatorHistoricalRewardsRecordProtoMsg): _67.ValidatorHistoricalRewardsRecord;
                toProto(message: _67.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _67.ValidatorHistoricalRewardsRecord): _67.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _67.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_67.ValidatorCurrentRewardsRecord>): _67.ValidatorCurrentRewardsRecord;
                fromAmino(object: _67.ValidatorCurrentRewardsRecordAmino): _67.ValidatorCurrentRewardsRecord;
                toAmino(message: _67.ValidatorCurrentRewardsRecord): _67.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _67.ValidatorCurrentRewardsRecordAminoMsg): _67.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _67.ValidatorCurrentRewardsRecord): _67.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _67.ValidatorCurrentRewardsRecordProtoMsg): _67.ValidatorCurrentRewardsRecord;
                toProto(message: _67.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _67.ValidatorCurrentRewardsRecord): _67.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _67.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_67.DelegatorStartingInfoRecord>): _67.DelegatorStartingInfoRecord;
                fromAmino(object: _67.DelegatorStartingInfoRecordAmino): _67.DelegatorStartingInfoRecord;
                toAmino(message: _67.DelegatorStartingInfoRecord): _67.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _67.DelegatorStartingInfoRecordAminoMsg): _67.DelegatorStartingInfoRecord;
                toAminoMsg(message: _67.DelegatorStartingInfoRecord): _67.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _67.DelegatorStartingInfoRecordProtoMsg): _67.DelegatorStartingInfoRecord;
                toProto(message: _67.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _67.DelegatorStartingInfoRecord): _67.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _67.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_67.ValidatorSlashEventRecord>): _67.ValidatorSlashEventRecord;
                fromAmino(object: _67.ValidatorSlashEventRecordAmino): _67.ValidatorSlashEventRecord;
                toAmino(message: _67.ValidatorSlashEventRecord): _67.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _67.ValidatorSlashEventRecordAminoMsg): _67.ValidatorSlashEventRecord;
                toAminoMsg(message: _67.ValidatorSlashEventRecord): _67.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _67.ValidatorSlashEventRecordProtoMsg): _67.ValidatorSlashEventRecord;
                toProto(message: _67.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _67.ValidatorSlashEventRecord): _67.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _66.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Params;
                fromPartial(object: Partial<_66.Params>): _66.Params;
                fromAmino(object: _66.ParamsAmino): _66.Params;
                toAmino(message: _66.Params): _66.ParamsAmino;
                fromAminoMsg(object: _66.ParamsAminoMsg): _66.Params;
                toAminoMsg(message: _66.Params): _66.ParamsAminoMsg;
                fromProtoMsg(message: _66.ParamsProtoMsg): _66.Params;
                toProto(message: _66.Params): Uint8Array;
                toProtoMsg(message: _66.Params): _66.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _66.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_66.ValidatorHistoricalRewards>): _66.ValidatorHistoricalRewards;
                fromAmino(object: _66.ValidatorHistoricalRewardsAmino): _66.ValidatorHistoricalRewards;
                toAmino(message: _66.ValidatorHistoricalRewards): _66.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _66.ValidatorHistoricalRewardsAminoMsg): _66.ValidatorHistoricalRewards;
                toAminoMsg(message: _66.ValidatorHistoricalRewards): _66.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _66.ValidatorHistoricalRewardsProtoMsg): _66.ValidatorHistoricalRewards;
                toProto(message: _66.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _66.ValidatorHistoricalRewards): _66.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _66.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorCurrentRewards;
                fromPartial(object: Partial<_66.ValidatorCurrentRewards>): _66.ValidatorCurrentRewards;
                fromAmino(object: _66.ValidatorCurrentRewardsAmino): _66.ValidatorCurrentRewards;
                toAmino(message: _66.ValidatorCurrentRewards): _66.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _66.ValidatorCurrentRewardsAminoMsg): _66.ValidatorCurrentRewards;
                toAminoMsg(message: _66.ValidatorCurrentRewards): _66.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _66.ValidatorCurrentRewardsProtoMsg): _66.ValidatorCurrentRewards;
                toProto(message: _66.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _66.ValidatorCurrentRewards): _66.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _66.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_66.ValidatorAccumulatedCommission>): _66.ValidatorAccumulatedCommission;
                fromAmino(object: _66.ValidatorAccumulatedCommissionAmino): _66.ValidatorAccumulatedCommission;
                toAmino(message: _66.ValidatorAccumulatedCommission): _66.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _66.ValidatorAccumulatedCommissionAminoMsg): _66.ValidatorAccumulatedCommission;
                toAminoMsg(message: _66.ValidatorAccumulatedCommission): _66.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _66.ValidatorAccumulatedCommissionProtoMsg): _66.ValidatorAccumulatedCommission;
                toProto(message: _66.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _66.ValidatorAccumulatedCommission): _66.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _66.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_66.ValidatorOutstandingRewards>): _66.ValidatorOutstandingRewards;
                fromAmino(object: _66.ValidatorOutstandingRewardsAmino): _66.ValidatorOutstandingRewards;
                toAmino(message: _66.ValidatorOutstandingRewards): _66.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _66.ValidatorOutstandingRewardsAminoMsg): _66.ValidatorOutstandingRewards;
                toAminoMsg(message: _66.ValidatorOutstandingRewards): _66.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _66.ValidatorOutstandingRewardsProtoMsg): _66.ValidatorOutstandingRewards;
                toProto(message: _66.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _66.ValidatorOutstandingRewards): _66.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _66.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorSlashEvent;
                fromPartial(object: Partial<_66.ValidatorSlashEvent>): _66.ValidatorSlashEvent;
                fromAmino(object: _66.ValidatorSlashEventAmino): _66.ValidatorSlashEvent;
                toAmino(message: _66.ValidatorSlashEvent): _66.ValidatorSlashEventAmino;
                fromAminoMsg(object: _66.ValidatorSlashEventAminoMsg): _66.ValidatorSlashEvent;
                toAminoMsg(message: _66.ValidatorSlashEvent): _66.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _66.ValidatorSlashEventProtoMsg): _66.ValidatorSlashEvent;
                toProto(message: _66.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _66.ValidatorSlashEvent): _66.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _66.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorSlashEvents;
                fromPartial(object: Partial<_66.ValidatorSlashEvents>): _66.ValidatorSlashEvents;
                fromAmino(object: _66.ValidatorSlashEventsAmino): _66.ValidatorSlashEvents;
                toAmino(message: _66.ValidatorSlashEvents): _66.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _66.ValidatorSlashEventsAminoMsg): _66.ValidatorSlashEvents;
                toAminoMsg(message: _66.ValidatorSlashEvents): _66.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _66.ValidatorSlashEventsProtoMsg): _66.ValidatorSlashEvents;
                toProto(message: _66.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _66.ValidatorSlashEvents): _66.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _66.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.FeePool;
                fromPartial(object: Partial<_66.FeePool>): _66.FeePool;
                fromAmino(object: _66.FeePoolAmino): _66.FeePool;
                toAmino(message: _66.FeePool): _66.FeePoolAmino;
                fromAminoMsg(object: _66.FeePoolAminoMsg): _66.FeePool;
                toAminoMsg(message: _66.FeePool): _66.FeePoolAminoMsg;
                fromProtoMsg(message: _66.FeePoolProtoMsg): _66.FeePool;
                toProto(message: _66.FeePool): Uint8Array;
                toProtoMsg(message: _66.FeePool): _66.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _66.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_66.CommunityPoolSpendProposal>): _66.CommunityPoolSpendProposal;
                fromAmino(object: _66.CommunityPoolSpendProposalAmino): _66.CommunityPoolSpendProposal;
                toAmino(message: _66.CommunityPoolSpendProposal): _66.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _66.CommunityPoolSpendProposalAminoMsg): _66.CommunityPoolSpendProposal;
                toAminoMsg(message: _66.CommunityPoolSpendProposal): _66.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _66.CommunityPoolSpendProposalProtoMsg): _66.CommunityPoolSpendProposal;
                toProto(message: _66.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _66.CommunityPoolSpendProposal): _66.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _66.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DelegatorStartingInfo;
                fromPartial(object: Partial<_66.DelegatorStartingInfo>): _66.DelegatorStartingInfo;
                fromAmino(object: _66.DelegatorStartingInfoAmino): _66.DelegatorStartingInfo;
                toAmino(message: _66.DelegatorStartingInfo): _66.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _66.DelegatorStartingInfoAminoMsg): _66.DelegatorStartingInfo;
                toAminoMsg(message: _66.DelegatorStartingInfo): _66.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _66.DelegatorStartingInfoProtoMsg): _66.DelegatorStartingInfo;
                toProto(message: _66.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _66.DelegatorStartingInfo): _66.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _66.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DelegationDelegatorReward;
                fromPartial(object: Partial<_66.DelegationDelegatorReward>): _66.DelegationDelegatorReward;
                fromAmino(object: _66.DelegationDelegatorRewardAmino): _66.DelegationDelegatorReward;
                toAmino(message: _66.DelegationDelegatorReward): _66.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _66.DelegationDelegatorRewardAminoMsg): _66.DelegationDelegatorReward;
                toAminoMsg(message: _66.DelegationDelegatorReward): _66.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _66.DelegationDelegatorRewardProtoMsg): _66.DelegationDelegatorReward;
                toProto(message: _66.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _66.DelegationDelegatorReward): _66.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _66.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_66.CommunityPoolSpendProposalWithDeposit>): _66.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _66.CommunityPoolSpendProposalWithDepositAmino): _66.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _66.CommunityPoolSpendProposalWithDeposit): _66.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _66.CommunityPoolSpendProposalWithDepositAminoMsg): _66.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _66.CommunityPoolSpendProposalWithDeposit): _66.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _66.CommunityPoolSpendProposalWithDepositProtoMsg): _66.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _66.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _66.CommunityPoolSpendProposalWithDeposit): _66.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _72.QueryEvidenceRequest): Promise<_72.QueryEvidenceResponse>;
                allEvidence(request?: _72.QueryAllEvidenceRequest): Promise<_72.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _201.LCDQueryClient;
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
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _76.QueryAllowanceRequest): Promise<_76.QueryAllowanceResponse>;
                allowances(request: _76.QueryAllowancesRequest): Promise<_76.QueryAllowancesResponse>;
                allowancesByGranter(request: _76.QueryAllowancesByGranterRequest): Promise<_76.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _77.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _77.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _77.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _77.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _77.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _77.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _77.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _77.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _77.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _77.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _77.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _77.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _77.MsgGrantAllowance) => _77.MsgGrantAllowanceAmino;
                    fromAmino: (object: _77.MsgGrantAllowanceAmino) => _77.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _77.MsgRevokeAllowance) => _77.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _77.MsgRevokeAllowanceAmino) => _77.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _77.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgGrantAllowance;
                fromPartial(object: Partial<_77.MsgGrantAllowance>): _77.MsgGrantAllowance;
                fromAmino(object: _77.MsgGrantAllowanceAmino): _77.MsgGrantAllowance;
                toAmino(message: _77.MsgGrantAllowance): _77.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _77.MsgGrantAllowanceAminoMsg): _77.MsgGrantAllowance;
                toAminoMsg(message: _77.MsgGrantAllowance): _77.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _77.MsgGrantAllowanceProtoMsg): _77.MsgGrantAllowance;
                toProto(message: _77.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _77.MsgGrantAllowance): _77.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _77.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_77.MsgGrantAllowanceResponse>): _77.MsgGrantAllowanceResponse;
                fromAmino(_: _77.MsgGrantAllowanceResponseAmino): _77.MsgGrantAllowanceResponse;
                toAmino(_: _77.MsgGrantAllowanceResponse): _77.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _77.MsgGrantAllowanceResponseAminoMsg): _77.MsgGrantAllowanceResponse;
                toAminoMsg(message: _77.MsgGrantAllowanceResponse): _77.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _77.MsgGrantAllowanceResponseProtoMsg): _77.MsgGrantAllowanceResponse;
                toProto(message: _77.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _77.MsgGrantAllowanceResponse): _77.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _77.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgRevokeAllowance;
                fromPartial(object: Partial<_77.MsgRevokeAllowance>): _77.MsgRevokeAllowance;
                fromAmino(object: _77.MsgRevokeAllowanceAmino): _77.MsgRevokeAllowance;
                toAmino(message: _77.MsgRevokeAllowance): _77.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _77.MsgRevokeAllowanceAminoMsg): _77.MsgRevokeAllowance;
                toAminoMsg(message: _77.MsgRevokeAllowance): _77.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _77.MsgRevokeAllowanceProtoMsg): _77.MsgRevokeAllowance;
                toProto(message: _77.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _77.MsgRevokeAllowance): _77.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _77.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_77.MsgRevokeAllowanceResponse>): _77.MsgRevokeAllowanceResponse;
                fromAmino(_: _77.MsgRevokeAllowanceResponseAmino): _77.MsgRevokeAllowanceResponse;
                toAmino(_: _77.MsgRevokeAllowanceResponse): _77.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _77.MsgRevokeAllowanceResponseAminoMsg): _77.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _77.MsgRevokeAllowanceResponse): _77.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _77.MsgRevokeAllowanceResponseProtoMsg): _77.MsgRevokeAllowanceResponse;
                toProto(message: _77.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _77.MsgRevokeAllowanceResponse): _77.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _74.BasicAllowance | _74.PeriodicAllowance | _74.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _76.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAllowanceRequest;
                fromPartial(object: Partial<_76.QueryAllowanceRequest>): _76.QueryAllowanceRequest;
                fromAmino(object: _76.QueryAllowanceRequestAmino): _76.QueryAllowanceRequest;
                toAmino(message: _76.QueryAllowanceRequest): _76.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _76.QueryAllowanceRequestAminoMsg): _76.QueryAllowanceRequest;
                toAminoMsg(message: _76.QueryAllowanceRequest): _76.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _76.QueryAllowanceRequestProtoMsg): _76.QueryAllowanceRequest;
                toProto(message: _76.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _76.QueryAllowanceRequest): _76.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _76.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAllowanceResponse;
                fromPartial(object: Partial<_76.QueryAllowanceResponse>): _76.QueryAllowanceResponse;
                fromAmino(object: _76.QueryAllowanceResponseAmino): _76.QueryAllowanceResponse;
                toAmino(message: _76.QueryAllowanceResponse): _76.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _76.QueryAllowanceResponseAminoMsg): _76.QueryAllowanceResponse;
                toAminoMsg(message: _76.QueryAllowanceResponse): _76.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _76.QueryAllowanceResponseProtoMsg): _76.QueryAllowanceResponse;
                toProto(message: _76.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _76.QueryAllowanceResponse): _76.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _76.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAllowancesRequest;
                fromPartial(object: Partial<_76.QueryAllowancesRequest>): _76.QueryAllowancesRequest;
                fromAmino(object: _76.QueryAllowancesRequestAmino): _76.QueryAllowancesRequest;
                toAmino(message: _76.QueryAllowancesRequest): _76.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _76.QueryAllowancesRequestAminoMsg): _76.QueryAllowancesRequest;
                toAminoMsg(message: _76.QueryAllowancesRequest): _76.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _76.QueryAllowancesRequestProtoMsg): _76.QueryAllowancesRequest;
                toProto(message: _76.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _76.QueryAllowancesRequest): _76.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _76.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAllowancesResponse;
                fromPartial(object: Partial<_76.QueryAllowancesResponse>): _76.QueryAllowancesResponse;
                fromAmino(object: _76.QueryAllowancesResponseAmino): _76.QueryAllowancesResponse;
                toAmino(message: _76.QueryAllowancesResponse): _76.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _76.QueryAllowancesResponseAminoMsg): _76.QueryAllowancesResponse;
                toAminoMsg(message: _76.QueryAllowancesResponse): _76.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _76.QueryAllowancesResponseProtoMsg): _76.QueryAllowancesResponse;
                toProto(message: _76.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _76.QueryAllowancesResponse): _76.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _76.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_76.QueryAllowancesByGranterRequest>): _76.QueryAllowancesByGranterRequest;
                fromAmino(object: _76.QueryAllowancesByGranterRequestAmino): _76.QueryAllowancesByGranterRequest;
                toAmino(message: _76.QueryAllowancesByGranterRequest): _76.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _76.QueryAllowancesByGranterRequestAminoMsg): _76.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _76.QueryAllowancesByGranterRequest): _76.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _76.QueryAllowancesByGranterRequestProtoMsg): _76.QueryAllowancesByGranterRequest;
                toProto(message: _76.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _76.QueryAllowancesByGranterRequest): _76.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _76.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_76.QueryAllowancesByGranterResponse>): _76.QueryAllowancesByGranterResponse;
                fromAmino(object: _76.QueryAllowancesByGranterResponseAmino): _76.QueryAllowancesByGranterResponse;
                toAmino(message: _76.QueryAllowancesByGranterResponse): _76.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _76.QueryAllowancesByGranterResponseAminoMsg): _76.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _76.QueryAllowancesByGranterResponse): _76.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _76.QueryAllowancesByGranterResponseProtoMsg): _76.QueryAllowancesByGranterResponse;
                toProto(message: _76.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _76.QueryAllowancesByGranterResponse): _76.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _74.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.BasicAllowance;
                fromPartial(object: Partial<_74.BasicAllowance>): _74.BasicAllowance;
                fromAmino(object: _74.BasicAllowanceAmino): _74.BasicAllowance;
                toAmino(message: _74.BasicAllowance): _74.BasicAllowanceAmino;
                fromAminoMsg(object: _74.BasicAllowanceAminoMsg): _74.BasicAllowance;
                toAminoMsg(message: _74.BasicAllowance): _74.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _74.BasicAllowanceProtoMsg): _74.BasicAllowance;
                toProto(message: _74.BasicAllowance): Uint8Array;
                toProtoMsg(message: _74.BasicAllowance): _74.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _74.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.PeriodicAllowance;
                fromPartial(object: Partial<_74.PeriodicAllowance>): _74.PeriodicAllowance;
                fromAmino(object: _74.PeriodicAllowanceAmino): _74.PeriodicAllowance;
                toAmino(message: _74.PeriodicAllowance): _74.PeriodicAllowanceAmino;
                fromAminoMsg(object: _74.PeriodicAllowanceAminoMsg): _74.PeriodicAllowance;
                toAminoMsg(message: _74.PeriodicAllowance): _74.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _74.PeriodicAllowanceProtoMsg): _74.PeriodicAllowance;
                toProto(message: _74.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _74.PeriodicAllowance): _74.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _74.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.AllowedMsgAllowance;
                fromPartial(object: Partial<_74.AllowedMsgAllowance>): _74.AllowedMsgAllowance;
                fromAmino(object: _74.AllowedMsgAllowanceAmino): _74.AllowedMsgAllowance;
                toAmino(message: _74.AllowedMsgAllowance): _74.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _74.AllowedMsgAllowanceAminoMsg): _74.AllowedMsgAllowance;
                toAminoMsg(message: _74.AllowedMsgAllowance): _74.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _74.AllowedMsgAllowanceProtoMsg): _74.AllowedMsgAllowance;
                toProto(message: _74.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _74.AllowedMsgAllowance): _74.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _74.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Grant;
                fromPartial(object: Partial<_74.Grant>): _74.Grant;
                fromAmino(object: _74.GrantAmino): _74.Grant;
                toAmino(message: _74.Grant): _74.GrantAmino;
                fromAminoMsg(object: _74.GrantAminoMsg): _74.Grant;
                toAminoMsg(message: _74.Grant): _74.GrantAminoMsg;
                fromProtoMsg(message: _74.GrantProtoMsg): _74.Grant;
                toProto(message: _74.Grant): Uint8Array;
                toProtoMsg(message: _74.Grant): _74.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _81.QueryProposalRequest): Promise<_81.QueryProposalResponse>;
                proposals(request: _81.QueryProposalsRequest): Promise<_81.QueryProposalsResponse>;
                vote(request: _81.QueryVoteRequest): Promise<_81.QueryVoteResponse>;
                votes(request: _81.QueryVotesRequest): Promise<_81.QueryVotesResponse>;
                params(request: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                deposit(request: _81.QueryDepositRequest): Promise<_81.QueryDepositResponse>;
                deposits(request: _81.QueryDepositsRequest): Promise<_81.QueryDepositsResponse>;
                tallyResult(request: _81.QueryTallyResultRequest): Promise<_81.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _82.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _82.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _82.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _82.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _82.MsgExecLegacyContent;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    voteWeighted(value: _82.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _82.MsgVoteWeighted;
                    };
                    deposit(value: _82.MsgDeposit): {
                        typeUrl: string;
                        value: _82.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _82.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _82.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _82.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _82.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _82.MsgExecLegacyContent;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    voteWeighted(value: _82.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _82.MsgVoteWeighted;
                    };
                    deposit(value: _82.MsgDeposit): {
                        typeUrl: string;
                        value: _82.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _82.MsgSubmitProposal) => _82.MsgSubmitProposalAmino;
                    fromAmino: (object: _82.MsgSubmitProposalAmino) => _82.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _82.MsgExecLegacyContent) => _82.MsgExecLegacyContentAmino;
                    fromAmino: (object: _82.MsgExecLegacyContentAmino) => _82.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _82.MsgVote) => _82.MsgVoteAmino;
                    fromAmino: (object: _82.MsgVoteAmino) => _82.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _82.MsgVoteWeighted) => _82.MsgVoteWeightedAmino;
                    fromAmino: (object: _82.MsgVoteWeightedAmino) => _82.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _82.MsgDeposit) => _82.MsgDepositAmino;
                    fromAmino: (object: _82.MsgDepositAmino) => _82.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _82.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgSubmitProposal;
                fromPartial(object: Partial<_82.MsgSubmitProposal>): _82.MsgSubmitProposal;
                fromAmino(object: _82.MsgSubmitProposalAmino): _82.MsgSubmitProposal;
                toAmino(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalAmino;
                fromAminoMsg(object: _82.MsgSubmitProposalAminoMsg): _82.MsgSubmitProposal;
                toAminoMsg(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _82.MsgSubmitProposalProtoMsg): _82.MsgSubmitProposal;
                toProto(message: _82.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _82.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_82.MsgSubmitProposalResponse>): _82.MsgSubmitProposalResponse;
                fromAmino(object: _82.MsgSubmitProposalResponseAmino): _82.MsgSubmitProposalResponse;
                toAmino(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _82.MsgSubmitProposalResponseAminoMsg): _82.MsgSubmitProposalResponse;
                toAminoMsg(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _82.MsgSubmitProposalResponseProtoMsg): _82.MsgSubmitProposalResponse;
                toProto(message: _82.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _82.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgExecLegacyContent;
                fromPartial(object: Partial<_82.MsgExecLegacyContent>): _82.MsgExecLegacyContent;
                fromAmino(object: _82.MsgExecLegacyContentAmino): _82.MsgExecLegacyContent;
                toAmino(message: _82.MsgExecLegacyContent): _82.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _82.MsgExecLegacyContentAminoMsg): _82.MsgExecLegacyContent;
                toAminoMsg(message: _82.MsgExecLegacyContent): _82.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _82.MsgExecLegacyContentProtoMsg): _82.MsgExecLegacyContent;
                toProto(message: _82.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _82.MsgExecLegacyContent): _82.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _82.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_82.MsgExecLegacyContentResponse>): _82.MsgExecLegacyContentResponse;
                fromAmino(_: _82.MsgExecLegacyContentResponseAmino): _82.MsgExecLegacyContentResponse;
                toAmino(_: _82.MsgExecLegacyContentResponse): _82.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _82.MsgExecLegacyContentResponseAminoMsg): _82.MsgExecLegacyContentResponse;
                toAminoMsg(message: _82.MsgExecLegacyContentResponse): _82.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _82.MsgExecLegacyContentResponseProtoMsg): _82.MsgExecLegacyContentResponse;
                toProto(message: _82.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _82.MsgExecLegacyContentResponse): _82.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _82.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgVote;
                fromPartial(object: Partial<_82.MsgVote>): _82.MsgVote;
                fromAmino(object: _82.MsgVoteAmino): _82.MsgVote;
                toAmino(message: _82.MsgVote): _82.MsgVoteAmino;
                fromAminoMsg(object: _82.MsgVoteAminoMsg): _82.MsgVote;
                toAminoMsg(message: _82.MsgVote): _82.MsgVoteAminoMsg;
                fromProtoMsg(message: _82.MsgVoteProtoMsg): _82.MsgVote;
                toProto(message: _82.MsgVote): Uint8Array;
                toProtoMsg(message: _82.MsgVote): _82.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _82.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgVoteResponse;
                fromPartial(_: Partial<_82.MsgVoteResponse>): _82.MsgVoteResponse;
                fromAmino(_: _82.MsgVoteResponseAmino): _82.MsgVoteResponse;
                toAmino(_: _82.MsgVoteResponse): _82.MsgVoteResponseAmino;
                fromAminoMsg(object: _82.MsgVoteResponseAminoMsg): _82.MsgVoteResponse;
                toAminoMsg(message: _82.MsgVoteResponse): _82.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _82.MsgVoteResponseProtoMsg): _82.MsgVoteResponse;
                toProto(message: _82.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _82.MsgVoteResponse): _82.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _82.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgVoteWeighted;
                fromPartial(object: Partial<_82.MsgVoteWeighted>): _82.MsgVoteWeighted;
                fromAmino(object: _82.MsgVoteWeightedAmino): _82.MsgVoteWeighted;
                toAmino(message: _82.MsgVoteWeighted): _82.MsgVoteWeightedAmino;
                fromAminoMsg(object: _82.MsgVoteWeightedAminoMsg): _82.MsgVoteWeighted;
                toAminoMsg(message: _82.MsgVoteWeighted): _82.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _82.MsgVoteWeightedProtoMsg): _82.MsgVoteWeighted;
                toProto(message: _82.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _82.MsgVoteWeighted): _82.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _82.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_82.MsgVoteWeightedResponse>): _82.MsgVoteWeightedResponse;
                fromAmino(_: _82.MsgVoteWeightedResponseAmino): _82.MsgVoteWeightedResponse;
                toAmino(_: _82.MsgVoteWeightedResponse): _82.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _82.MsgVoteWeightedResponseAminoMsg): _82.MsgVoteWeightedResponse;
                toAminoMsg(message: _82.MsgVoteWeightedResponse): _82.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _82.MsgVoteWeightedResponseProtoMsg): _82.MsgVoteWeightedResponse;
                toProto(message: _82.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _82.MsgVoteWeightedResponse): _82.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _82.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgDeposit;
                fromPartial(object: Partial<_82.MsgDeposit>): _82.MsgDeposit;
                fromAmino(object: _82.MsgDepositAmino): _82.MsgDeposit;
                toAmino(message: _82.MsgDeposit): _82.MsgDepositAmino;
                fromAminoMsg(object: _82.MsgDepositAminoMsg): _82.MsgDeposit;
                toAminoMsg(message: _82.MsgDeposit): _82.MsgDepositAminoMsg;
                fromProtoMsg(message: _82.MsgDepositProtoMsg): _82.MsgDeposit;
                toProto(message: _82.MsgDeposit): Uint8Array;
                toProtoMsg(message: _82.MsgDeposit): _82.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _82.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgDepositResponse;
                fromPartial(_: Partial<_82.MsgDepositResponse>): _82.MsgDepositResponse;
                fromAmino(_: _82.MsgDepositResponseAmino): _82.MsgDepositResponse;
                toAmino(_: _82.MsgDepositResponse): _82.MsgDepositResponseAmino;
                fromAminoMsg(object: _82.MsgDepositResponseAminoMsg): _82.MsgDepositResponse;
                toAminoMsg(message: _82.MsgDepositResponse): _82.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _82.MsgDepositResponseProtoMsg): _82.MsgDepositResponse;
                toProto(message: _82.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _82.MsgDepositResponse): _82.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _84.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _81.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryProposalRequest;
                fromPartial(object: Partial<_81.QueryProposalRequest>): _81.QueryProposalRequest;
                fromAmino(object: _81.QueryProposalRequestAmino): _81.QueryProposalRequest;
                toAmino(message: _81.QueryProposalRequest): _81.QueryProposalRequestAmino;
                fromAminoMsg(object: _81.QueryProposalRequestAminoMsg): _81.QueryProposalRequest;
                toAminoMsg(message: _81.QueryProposalRequest): _81.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _81.QueryProposalRequestProtoMsg): _81.QueryProposalRequest;
                toProto(message: _81.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _81.QueryProposalRequest): _81.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _81.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryProposalResponse;
                fromPartial(object: Partial<_81.QueryProposalResponse>): _81.QueryProposalResponse;
                fromAmino(object: _81.QueryProposalResponseAmino): _81.QueryProposalResponse;
                toAmino(message: _81.QueryProposalResponse): _81.QueryProposalResponseAmino;
                fromAminoMsg(object: _81.QueryProposalResponseAminoMsg): _81.QueryProposalResponse;
                toAminoMsg(message: _81.QueryProposalResponse): _81.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _81.QueryProposalResponseProtoMsg): _81.QueryProposalResponse;
                toProto(message: _81.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _81.QueryProposalResponse): _81.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _81.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryProposalsRequest;
                fromPartial(object: Partial<_81.QueryProposalsRequest>): _81.QueryProposalsRequest;
                fromAmino(object: _81.QueryProposalsRequestAmino): _81.QueryProposalsRequest;
                toAmino(message: _81.QueryProposalsRequest): _81.QueryProposalsRequestAmino;
                fromAminoMsg(object: _81.QueryProposalsRequestAminoMsg): _81.QueryProposalsRequest;
                toAminoMsg(message: _81.QueryProposalsRequest): _81.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryProposalsRequestProtoMsg): _81.QueryProposalsRequest;
                toProto(message: _81.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryProposalsRequest): _81.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _81.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryProposalsResponse;
                fromPartial(object: Partial<_81.QueryProposalsResponse>): _81.QueryProposalsResponse;
                fromAmino(object: _81.QueryProposalsResponseAmino): _81.QueryProposalsResponse;
                toAmino(message: _81.QueryProposalsResponse): _81.QueryProposalsResponseAmino;
                fromAminoMsg(object: _81.QueryProposalsResponseAminoMsg): _81.QueryProposalsResponse;
                toAminoMsg(message: _81.QueryProposalsResponse): _81.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryProposalsResponseProtoMsg): _81.QueryProposalsResponse;
                toProto(message: _81.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryProposalsResponse): _81.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _81.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryVoteRequest;
                fromPartial(object: Partial<_81.QueryVoteRequest>): _81.QueryVoteRequest;
                fromAmino(object: _81.QueryVoteRequestAmino): _81.QueryVoteRequest;
                toAmino(message: _81.QueryVoteRequest): _81.QueryVoteRequestAmino;
                fromAminoMsg(object: _81.QueryVoteRequestAminoMsg): _81.QueryVoteRequest;
                toAminoMsg(message: _81.QueryVoteRequest): _81.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _81.QueryVoteRequestProtoMsg): _81.QueryVoteRequest;
                toProto(message: _81.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _81.QueryVoteRequest): _81.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _81.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryVoteResponse;
                fromPartial(object: Partial<_81.QueryVoteResponse>): _81.QueryVoteResponse;
                fromAmino(object: _81.QueryVoteResponseAmino): _81.QueryVoteResponse;
                toAmino(message: _81.QueryVoteResponse): _81.QueryVoteResponseAmino;
                fromAminoMsg(object: _81.QueryVoteResponseAminoMsg): _81.QueryVoteResponse;
                toAminoMsg(message: _81.QueryVoteResponse): _81.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _81.QueryVoteResponseProtoMsg): _81.QueryVoteResponse;
                toProto(message: _81.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _81.QueryVoteResponse): _81.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _81.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryVotesRequest;
                fromPartial(object: Partial<_81.QueryVotesRequest>): _81.QueryVotesRequest;
                fromAmino(object: _81.QueryVotesRequestAmino): _81.QueryVotesRequest;
                toAmino(message: _81.QueryVotesRequest): _81.QueryVotesRequestAmino;
                fromAminoMsg(object: _81.QueryVotesRequestAminoMsg): _81.QueryVotesRequest;
                toAminoMsg(message: _81.QueryVotesRequest): _81.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _81.QueryVotesRequestProtoMsg): _81.QueryVotesRequest;
                toProto(message: _81.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _81.QueryVotesRequest): _81.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _81.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryVotesResponse;
                fromPartial(object: Partial<_81.QueryVotesResponse>): _81.QueryVotesResponse;
                fromAmino(object: _81.QueryVotesResponseAmino): _81.QueryVotesResponse;
                toAmino(message: _81.QueryVotesResponse): _81.QueryVotesResponseAmino;
                fromAminoMsg(object: _81.QueryVotesResponseAminoMsg): _81.QueryVotesResponse;
                toAminoMsg(message: _81.QueryVotesResponse): _81.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _81.QueryVotesResponseProtoMsg): _81.QueryVotesResponse;
                toProto(message: _81.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _81.QueryVotesResponse): _81.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _81.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryParamsRequest;
                fromPartial(object: Partial<_81.QueryParamsRequest>): _81.QueryParamsRequest;
                fromAmino(object: _81.QueryParamsRequestAmino): _81.QueryParamsRequest;
                toAmino(message: _81.QueryParamsRequest): _81.QueryParamsRequestAmino;
                fromAminoMsg(object: _81.QueryParamsRequestAminoMsg): _81.QueryParamsRequest;
                toAminoMsg(message: _81.QueryParamsRequest): _81.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryParamsRequestProtoMsg): _81.QueryParamsRequest;
                toProto(message: _81.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryParamsRequest): _81.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _81.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryParamsResponse;
                fromPartial(object: Partial<_81.QueryParamsResponse>): _81.QueryParamsResponse;
                fromAmino(object: _81.QueryParamsResponseAmino): _81.QueryParamsResponse;
                toAmino(message: _81.QueryParamsResponse): _81.QueryParamsResponseAmino;
                fromAminoMsg(object: _81.QueryParamsResponseAminoMsg): _81.QueryParamsResponse;
                toAminoMsg(message: _81.QueryParamsResponse): _81.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryParamsResponseProtoMsg): _81.QueryParamsResponse;
                toProto(message: _81.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryParamsResponse): _81.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _81.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDepositRequest;
                fromPartial(object: Partial<_81.QueryDepositRequest>): _81.QueryDepositRequest;
                fromAmino(object: _81.QueryDepositRequestAmino): _81.QueryDepositRequest;
                toAmino(message: _81.QueryDepositRequest): _81.QueryDepositRequestAmino;
                fromAminoMsg(object: _81.QueryDepositRequestAminoMsg): _81.QueryDepositRequest;
                toAminoMsg(message: _81.QueryDepositRequest): _81.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDepositRequestProtoMsg): _81.QueryDepositRequest;
                toProto(message: _81.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDepositRequest): _81.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _81.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDepositResponse;
                fromPartial(object: Partial<_81.QueryDepositResponse>): _81.QueryDepositResponse;
                fromAmino(object: _81.QueryDepositResponseAmino): _81.QueryDepositResponse;
                toAmino(message: _81.QueryDepositResponse): _81.QueryDepositResponseAmino;
                fromAminoMsg(object: _81.QueryDepositResponseAminoMsg): _81.QueryDepositResponse;
                toAminoMsg(message: _81.QueryDepositResponse): _81.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDepositResponseProtoMsg): _81.QueryDepositResponse;
                toProto(message: _81.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDepositResponse): _81.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _81.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDepositsRequest;
                fromPartial(object: Partial<_81.QueryDepositsRequest>): _81.QueryDepositsRequest;
                fromAmino(object: _81.QueryDepositsRequestAmino): _81.QueryDepositsRequest;
                toAmino(message: _81.QueryDepositsRequest): _81.QueryDepositsRequestAmino;
                fromAminoMsg(object: _81.QueryDepositsRequestAminoMsg): _81.QueryDepositsRequest;
                toAminoMsg(message: _81.QueryDepositsRequest): _81.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDepositsRequestProtoMsg): _81.QueryDepositsRequest;
                toProto(message: _81.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDepositsRequest): _81.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _81.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDepositsResponse;
                fromPartial(object: Partial<_81.QueryDepositsResponse>): _81.QueryDepositsResponse;
                fromAmino(object: _81.QueryDepositsResponseAmino): _81.QueryDepositsResponse;
                toAmino(message: _81.QueryDepositsResponse): _81.QueryDepositsResponseAmino;
                fromAminoMsg(object: _81.QueryDepositsResponseAminoMsg): _81.QueryDepositsResponse;
                toAminoMsg(message: _81.QueryDepositsResponse): _81.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDepositsResponseProtoMsg): _81.QueryDepositsResponse;
                toProto(message: _81.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDepositsResponse): _81.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _81.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryTallyResultRequest;
                fromPartial(object: Partial<_81.QueryTallyResultRequest>): _81.QueryTallyResultRequest;
                fromAmino(object: _81.QueryTallyResultRequestAmino): _81.QueryTallyResultRequest;
                toAmino(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _81.QueryTallyResultRequestAminoMsg): _81.QueryTallyResultRequest;
                toAminoMsg(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _81.QueryTallyResultRequestProtoMsg): _81.QueryTallyResultRequest;
                toProto(message: _81.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _81.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryTallyResultResponse;
                fromPartial(object: Partial<_81.QueryTallyResultResponse>): _81.QueryTallyResultResponse;
                fromAmino(object: _81.QueryTallyResultResponseAmino): _81.QueryTallyResultResponse;
                toAmino(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _81.QueryTallyResultResponseAminoMsg): _81.QueryTallyResultResponse;
                toAminoMsg(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _81.QueryTallyResultResponseProtoMsg): _81.QueryTallyResultResponse;
                toProto(message: _81.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _80.VoteOption;
            voteOptionToJSON(object: _80.VoteOption): string;
            proposalStatusFromJSON(object: any): _80.ProposalStatus;
            proposalStatusToJSON(object: _80.ProposalStatus): string;
            VoteOption: typeof _80.VoteOption;
            VoteOptionSDKType: typeof _80.VoteOption;
            VoteOptionAmino: typeof _80.VoteOption;
            ProposalStatus: typeof _80.ProposalStatus;
            ProposalStatusSDKType: typeof _80.ProposalStatus;
            ProposalStatusAmino: typeof _80.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _80.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.WeightedVoteOption;
                fromPartial(object: Partial<_80.WeightedVoteOption>): _80.WeightedVoteOption;
                fromAmino(object: _80.WeightedVoteOptionAmino): _80.WeightedVoteOption;
                toAmino(message: _80.WeightedVoteOption): _80.WeightedVoteOptionAmino;
                fromAminoMsg(object: _80.WeightedVoteOptionAminoMsg): _80.WeightedVoteOption;
                toAminoMsg(message: _80.WeightedVoteOption): _80.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _80.WeightedVoteOptionProtoMsg): _80.WeightedVoteOption;
                toProto(message: _80.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _80.WeightedVoteOption): _80.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _80.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Deposit;
                fromPartial(object: Partial<_80.Deposit>): _80.Deposit;
                fromAmino(object: _80.DepositAmino): _80.Deposit;
                toAmino(message: _80.Deposit): _80.DepositAmino;
                fromAminoMsg(object: _80.DepositAminoMsg): _80.Deposit;
                toAminoMsg(message: _80.Deposit): _80.DepositAminoMsg;
                fromProtoMsg(message: _80.DepositProtoMsg): _80.Deposit;
                toProto(message: _80.Deposit): Uint8Array;
                toProtoMsg(message: _80.Deposit): _80.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _80.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Proposal;
                fromPartial(object: Partial<_80.Proposal>): _80.Proposal;
                fromAmino(object: _80.ProposalAmino): _80.Proposal;
                toAmino(message: _80.Proposal): _80.ProposalAmino;
                fromAminoMsg(object: _80.ProposalAminoMsg): _80.Proposal;
                toAminoMsg(message: _80.Proposal): _80.ProposalAminoMsg;
                fromProtoMsg(message: _80.ProposalProtoMsg): _80.Proposal;
                toProto(message: _80.Proposal): Uint8Array;
                toProtoMsg(message: _80.Proposal): _80.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _80.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.TallyResult;
                fromPartial(object: Partial<_80.TallyResult>): _80.TallyResult;
                fromAmino(object: _80.TallyResultAmino): _80.TallyResult;
                toAmino(message: _80.TallyResult): _80.TallyResultAmino;
                fromAminoMsg(object: _80.TallyResultAminoMsg): _80.TallyResult;
                toAminoMsg(message: _80.TallyResult): _80.TallyResultAminoMsg;
                fromProtoMsg(message: _80.TallyResultProtoMsg): _80.TallyResult;
                toProto(message: _80.TallyResult): Uint8Array;
                toProtoMsg(message: _80.TallyResult): _80.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _80.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Vote;
                fromPartial(object: Partial<_80.Vote>): _80.Vote;
                fromAmino(object: _80.VoteAmino): _80.Vote;
                toAmino(message: _80.Vote): _80.VoteAmino;
                fromAminoMsg(object: _80.VoteAminoMsg): _80.Vote;
                toAminoMsg(message: _80.Vote): _80.VoteAminoMsg;
                fromProtoMsg(message: _80.VoteProtoMsg): _80.Vote;
                toProto(message: _80.Vote): Uint8Array;
                toProtoMsg(message: _80.Vote): _80.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _80.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.DepositParams;
                fromPartial(object: Partial<_80.DepositParams>): _80.DepositParams;
                fromAmino(object: _80.DepositParamsAmino): _80.DepositParams;
                toAmino(message: _80.DepositParams): _80.DepositParamsAmino;
                fromAminoMsg(object: _80.DepositParamsAminoMsg): _80.DepositParams;
                toAminoMsg(message: _80.DepositParams): _80.DepositParamsAminoMsg;
                fromProtoMsg(message: _80.DepositParamsProtoMsg): _80.DepositParams;
                toProto(message: _80.DepositParams): Uint8Array;
                toProtoMsg(message: _80.DepositParams): _80.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _80.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.VotingParams;
                fromPartial(object: Partial<_80.VotingParams>): _80.VotingParams;
                fromAmino(object: _80.VotingParamsAmino): _80.VotingParams;
                toAmino(message: _80.VotingParams): _80.VotingParamsAmino;
                fromAminoMsg(object: _80.VotingParamsAminoMsg): _80.VotingParams;
                toAminoMsg(message: _80.VotingParams): _80.VotingParamsAminoMsg;
                fromProtoMsg(message: _80.VotingParamsProtoMsg): _80.VotingParams;
                toProto(message: _80.VotingParams): Uint8Array;
                toProtoMsg(message: _80.VotingParams): _80.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _80.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.TallyParams;
                fromPartial(object: Partial<_80.TallyParams>): _80.TallyParams;
                fromAmino(object: _80.TallyParamsAmino): _80.TallyParams;
                toAmino(message: _80.TallyParams): _80.TallyParamsAmino;
                fromAminoMsg(object: _80.TallyParamsAminoMsg): _80.TallyParams;
                toAminoMsg(message: _80.TallyParams): _80.TallyParamsAminoMsg;
                fromProtoMsg(message: _80.TallyParamsProtoMsg): _80.TallyParams;
                toProto(message: _80.TallyParams): Uint8Array;
                toProtoMsg(message: _80.TallyParams): _80.TallyParamsProtoMsg;
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
        };
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _85.QueryProposalRequest): Promise<_85.QueryProposalResponse>;
                proposals(request: _85.QueryProposalsRequest): Promise<_85.QueryProposalsResponse>;
                vote(request: _85.QueryVoteRequest): Promise<_85.QueryVoteResponse>;
                votes(request: _85.QueryVotesRequest): Promise<_85.QueryVotesResponse>;
                params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                deposit(request: _85.QueryDepositRequest): Promise<_85.QueryDepositResponse>;
                deposits(request: _85.QueryDepositsRequest): Promise<_85.QueryDepositsResponse>;
                tallyResult(request: _85.QueryTallyResultRequest): Promise<_85.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _86.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _86.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    voteWeighted(value: _86.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _86.MsgVoteWeighted;
                    };
                    deposit(value: _86.MsgDeposit): {
                        typeUrl: string;
                        value: _86.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _86.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _86.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    voteWeighted(value: _86.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _86.MsgVoteWeighted;
                    };
                    deposit(value: _86.MsgDeposit): {
                        typeUrl: string;
                        value: _86.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _86.MsgSubmitProposal) => _86.MsgSubmitProposalAmino;
                    fromAmino: (object: _86.MsgSubmitProposalAmino) => _86.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _86.MsgVote) => _86.MsgVoteAmino;
                    fromAmino: (object: _86.MsgVoteAmino) => _86.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _86.MsgVoteWeighted) => _86.MsgVoteWeightedAmino;
                    fromAmino: (object: _86.MsgVoteWeightedAmino) => _86.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _86.MsgDeposit) => _86.MsgDepositAmino;
                    fromAmino: (object: _86.MsgDepositAmino) => _86.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _86.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgSubmitProposal;
                fromPartial(object: Partial<_86.MsgSubmitProposal>): _86.MsgSubmitProposal;
                fromAmino(object: _86.MsgSubmitProposalAmino): _86.MsgSubmitProposal;
                toAmino(message: _86.MsgSubmitProposal): _86.MsgSubmitProposalAmino;
                fromAminoMsg(object: _86.MsgSubmitProposalAminoMsg): _86.MsgSubmitProposal;
                toAminoMsg(message: _86.MsgSubmitProposal): _86.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _86.MsgSubmitProposalProtoMsg): _86.MsgSubmitProposal;
                toProto(message: _86.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _86.MsgSubmitProposal): _86.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _86.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_86.MsgSubmitProposalResponse>): _86.MsgSubmitProposalResponse;
                fromAmino(object: _86.MsgSubmitProposalResponseAmino): _86.MsgSubmitProposalResponse;
                toAmino(message: _86.MsgSubmitProposalResponse): _86.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _86.MsgSubmitProposalResponseAminoMsg): _86.MsgSubmitProposalResponse;
                toAminoMsg(message: _86.MsgSubmitProposalResponse): _86.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _86.MsgSubmitProposalResponseProtoMsg): _86.MsgSubmitProposalResponse;
                toProto(message: _86.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _86.MsgSubmitProposalResponse): _86.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _86.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgVote;
                fromPartial(object: Partial<_86.MsgVote>): _86.MsgVote;
                fromAmino(object: _86.MsgVoteAmino): _86.MsgVote;
                toAmino(message: _86.MsgVote): _86.MsgVoteAmino;
                fromAminoMsg(object: _86.MsgVoteAminoMsg): _86.MsgVote;
                toAminoMsg(message: _86.MsgVote): _86.MsgVoteAminoMsg;
                fromProtoMsg(message: _86.MsgVoteProtoMsg): _86.MsgVote;
                toProto(message: _86.MsgVote): Uint8Array;
                toProtoMsg(message: _86.MsgVote): _86.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _86.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgVoteResponse;
                fromPartial(_: Partial<_86.MsgVoteResponse>): _86.MsgVoteResponse;
                fromAmino(_: _86.MsgVoteResponseAmino): _86.MsgVoteResponse;
                toAmino(_: _86.MsgVoteResponse): _86.MsgVoteResponseAmino;
                fromAminoMsg(object: _86.MsgVoteResponseAminoMsg): _86.MsgVoteResponse;
                toAminoMsg(message: _86.MsgVoteResponse): _86.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _86.MsgVoteResponseProtoMsg): _86.MsgVoteResponse;
                toProto(message: _86.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _86.MsgVoteResponse): _86.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _86.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgVoteWeighted;
                fromPartial(object: Partial<_86.MsgVoteWeighted>): _86.MsgVoteWeighted;
                fromAmino(object: _86.MsgVoteWeightedAmino): _86.MsgVoteWeighted;
                toAmino(message: _86.MsgVoteWeighted): _86.MsgVoteWeightedAmino;
                fromAminoMsg(object: _86.MsgVoteWeightedAminoMsg): _86.MsgVoteWeighted;
                toAminoMsg(message: _86.MsgVoteWeighted): _86.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _86.MsgVoteWeightedProtoMsg): _86.MsgVoteWeighted;
                toProto(message: _86.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _86.MsgVoteWeighted): _86.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _86.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_86.MsgVoteWeightedResponse>): _86.MsgVoteWeightedResponse;
                fromAmino(_: _86.MsgVoteWeightedResponseAmino): _86.MsgVoteWeightedResponse;
                toAmino(_: _86.MsgVoteWeightedResponse): _86.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _86.MsgVoteWeightedResponseAminoMsg): _86.MsgVoteWeightedResponse;
                toAminoMsg(message: _86.MsgVoteWeightedResponse): _86.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _86.MsgVoteWeightedResponseProtoMsg): _86.MsgVoteWeightedResponse;
                toProto(message: _86.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _86.MsgVoteWeightedResponse): _86.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _86.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgDeposit;
                fromPartial(object: Partial<_86.MsgDeposit>): _86.MsgDeposit;
                fromAmino(object: _86.MsgDepositAmino): _86.MsgDeposit;
                toAmino(message: _86.MsgDeposit): _86.MsgDepositAmino;
                fromAminoMsg(object: _86.MsgDepositAminoMsg): _86.MsgDeposit;
                toAminoMsg(message: _86.MsgDeposit): _86.MsgDepositAminoMsg;
                fromProtoMsg(message: _86.MsgDepositProtoMsg): _86.MsgDeposit;
                toProto(message: _86.MsgDeposit): Uint8Array;
                toProtoMsg(message: _86.MsgDeposit): _86.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _86.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgDepositResponse;
                fromPartial(_: Partial<_86.MsgDepositResponse>): _86.MsgDepositResponse;
                fromAmino(_: _86.MsgDepositResponseAmino): _86.MsgDepositResponse;
                toAmino(_: _86.MsgDepositResponse): _86.MsgDepositResponseAmino;
                fromAminoMsg(object: _86.MsgDepositResponseAminoMsg): _86.MsgDepositResponse;
                toAminoMsg(message: _86.MsgDepositResponse): _86.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _86.MsgDepositResponseProtoMsg): _86.MsgDepositResponse;
                toProto(message: _86.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _86.MsgDepositResponse): _86.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _84.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _85.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryProposalRequest;
                fromPartial(object: Partial<_85.QueryProposalRequest>): _85.QueryProposalRequest;
                fromAmino(object: _85.QueryProposalRequestAmino): _85.QueryProposalRequest;
                toAmino(message: _85.QueryProposalRequest): _85.QueryProposalRequestAmino;
                fromAminoMsg(object: _85.QueryProposalRequestAminoMsg): _85.QueryProposalRequest;
                toAminoMsg(message: _85.QueryProposalRequest): _85.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _85.QueryProposalRequestProtoMsg): _85.QueryProposalRequest;
                toProto(message: _85.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _85.QueryProposalRequest): _85.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _85.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryProposalResponse;
                fromPartial(object: Partial<_85.QueryProposalResponse>): _85.QueryProposalResponse;
                fromAmino(object: _85.QueryProposalResponseAmino): _85.QueryProposalResponse;
                toAmino(message: _85.QueryProposalResponse): _85.QueryProposalResponseAmino;
                fromAminoMsg(object: _85.QueryProposalResponseAminoMsg): _85.QueryProposalResponse;
                toAminoMsg(message: _85.QueryProposalResponse): _85.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _85.QueryProposalResponseProtoMsg): _85.QueryProposalResponse;
                toProto(message: _85.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _85.QueryProposalResponse): _85.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _85.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryProposalsRequest;
                fromPartial(object: Partial<_85.QueryProposalsRequest>): _85.QueryProposalsRequest;
                fromAmino(object: _85.QueryProposalsRequestAmino): _85.QueryProposalsRequest;
                toAmino(message: _85.QueryProposalsRequest): _85.QueryProposalsRequestAmino;
                fromAminoMsg(object: _85.QueryProposalsRequestAminoMsg): _85.QueryProposalsRequest;
                toAminoMsg(message: _85.QueryProposalsRequest): _85.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryProposalsRequestProtoMsg): _85.QueryProposalsRequest;
                toProto(message: _85.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryProposalsRequest): _85.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _85.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryProposalsResponse;
                fromPartial(object: Partial<_85.QueryProposalsResponse>): _85.QueryProposalsResponse;
                fromAmino(object: _85.QueryProposalsResponseAmino): _85.QueryProposalsResponse;
                toAmino(message: _85.QueryProposalsResponse): _85.QueryProposalsResponseAmino;
                fromAminoMsg(object: _85.QueryProposalsResponseAminoMsg): _85.QueryProposalsResponse;
                toAminoMsg(message: _85.QueryProposalsResponse): _85.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryProposalsResponseProtoMsg): _85.QueryProposalsResponse;
                toProto(message: _85.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryProposalsResponse): _85.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _85.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryVoteRequest;
                fromPartial(object: Partial<_85.QueryVoteRequest>): _85.QueryVoteRequest;
                fromAmino(object: _85.QueryVoteRequestAmino): _85.QueryVoteRequest;
                toAmino(message: _85.QueryVoteRequest): _85.QueryVoteRequestAmino;
                fromAminoMsg(object: _85.QueryVoteRequestAminoMsg): _85.QueryVoteRequest;
                toAminoMsg(message: _85.QueryVoteRequest): _85.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _85.QueryVoteRequestProtoMsg): _85.QueryVoteRequest;
                toProto(message: _85.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _85.QueryVoteRequest): _85.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _85.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryVoteResponse;
                fromPartial(object: Partial<_85.QueryVoteResponse>): _85.QueryVoteResponse;
                fromAmino(object: _85.QueryVoteResponseAmino): _85.QueryVoteResponse;
                toAmino(message: _85.QueryVoteResponse): _85.QueryVoteResponseAmino;
                fromAminoMsg(object: _85.QueryVoteResponseAminoMsg): _85.QueryVoteResponse;
                toAminoMsg(message: _85.QueryVoteResponse): _85.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _85.QueryVoteResponseProtoMsg): _85.QueryVoteResponse;
                toProto(message: _85.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _85.QueryVoteResponse): _85.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _85.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryVotesRequest;
                fromPartial(object: Partial<_85.QueryVotesRequest>): _85.QueryVotesRequest;
                fromAmino(object: _85.QueryVotesRequestAmino): _85.QueryVotesRequest;
                toAmino(message: _85.QueryVotesRequest): _85.QueryVotesRequestAmino;
                fromAminoMsg(object: _85.QueryVotesRequestAminoMsg): _85.QueryVotesRequest;
                toAminoMsg(message: _85.QueryVotesRequest): _85.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _85.QueryVotesRequestProtoMsg): _85.QueryVotesRequest;
                toProto(message: _85.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _85.QueryVotesRequest): _85.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _85.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryVotesResponse;
                fromPartial(object: Partial<_85.QueryVotesResponse>): _85.QueryVotesResponse;
                fromAmino(object: _85.QueryVotesResponseAmino): _85.QueryVotesResponse;
                toAmino(message: _85.QueryVotesResponse): _85.QueryVotesResponseAmino;
                fromAminoMsg(object: _85.QueryVotesResponseAminoMsg): _85.QueryVotesResponse;
                toAminoMsg(message: _85.QueryVotesResponse): _85.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _85.QueryVotesResponseProtoMsg): _85.QueryVotesResponse;
                toProto(message: _85.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _85.QueryVotesResponse): _85.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _85.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryParamsRequest;
                fromPartial(object: Partial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
                fromAmino(object: _85.QueryParamsRequestAmino): _85.QueryParamsRequest;
                toAmino(message: _85.QueryParamsRequest): _85.QueryParamsRequestAmino;
                fromAminoMsg(object: _85.QueryParamsRequestAminoMsg): _85.QueryParamsRequest;
                toAminoMsg(message: _85.QueryParamsRequest): _85.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryParamsRequestProtoMsg): _85.QueryParamsRequest;
                toProto(message: _85.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryParamsRequest): _85.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _85.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryParamsResponse;
                fromPartial(object: Partial<_85.QueryParamsResponse>): _85.QueryParamsResponse;
                fromAmino(object: _85.QueryParamsResponseAmino): _85.QueryParamsResponse;
                toAmino(message: _85.QueryParamsResponse): _85.QueryParamsResponseAmino;
                fromAminoMsg(object: _85.QueryParamsResponseAminoMsg): _85.QueryParamsResponse;
                toAminoMsg(message: _85.QueryParamsResponse): _85.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryParamsResponseProtoMsg): _85.QueryParamsResponse;
                toProto(message: _85.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryParamsResponse): _85.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _85.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDepositRequest;
                fromPartial(object: Partial<_85.QueryDepositRequest>): _85.QueryDepositRequest;
                fromAmino(object: _85.QueryDepositRequestAmino): _85.QueryDepositRequest;
                toAmino(message: _85.QueryDepositRequest): _85.QueryDepositRequestAmino;
                fromAminoMsg(object: _85.QueryDepositRequestAminoMsg): _85.QueryDepositRequest;
                toAminoMsg(message: _85.QueryDepositRequest): _85.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _85.QueryDepositRequestProtoMsg): _85.QueryDepositRequest;
                toProto(message: _85.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _85.QueryDepositRequest): _85.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _85.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDepositResponse;
                fromPartial(object: Partial<_85.QueryDepositResponse>): _85.QueryDepositResponse;
                fromAmino(object: _85.QueryDepositResponseAmino): _85.QueryDepositResponse;
                toAmino(message: _85.QueryDepositResponse): _85.QueryDepositResponseAmino;
                fromAminoMsg(object: _85.QueryDepositResponseAminoMsg): _85.QueryDepositResponse;
                toAminoMsg(message: _85.QueryDepositResponse): _85.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _85.QueryDepositResponseProtoMsg): _85.QueryDepositResponse;
                toProto(message: _85.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _85.QueryDepositResponse): _85.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _85.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDepositsRequest;
                fromPartial(object: Partial<_85.QueryDepositsRequest>): _85.QueryDepositsRequest;
                fromAmino(object: _85.QueryDepositsRequestAmino): _85.QueryDepositsRequest;
                toAmino(message: _85.QueryDepositsRequest): _85.QueryDepositsRequestAmino;
                fromAminoMsg(object: _85.QueryDepositsRequestAminoMsg): _85.QueryDepositsRequest;
                toAminoMsg(message: _85.QueryDepositsRequest): _85.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryDepositsRequestProtoMsg): _85.QueryDepositsRequest;
                toProto(message: _85.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryDepositsRequest): _85.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _85.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDepositsResponse;
                fromPartial(object: Partial<_85.QueryDepositsResponse>): _85.QueryDepositsResponse;
                fromAmino(object: _85.QueryDepositsResponseAmino): _85.QueryDepositsResponse;
                toAmino(message: _85.QueryDepositsResponse): _85.QueryDepositsResponseAmino;
                fromAminoMsg(object: _85.QueryDepositsResponseAminoMsg): _85.QueryDepositsResponse;
                toAminoMsg(message: _85.QueryDepositsResponse): _85.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryDepositsResponseProtoMsg): _85.QueryDepositsResponse;
                toProto(message: _85.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryDepositsResponse): _85.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _85.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryTallyResultRequest;
                fromPartial(object: Partial<_85.QueryTallyResultRequest>): _85.QueryTallyResultRequest;
                fromAmino(object: _85.QueryTallyResultRequestAmino): _85.QueryTallyResultRequest;
                toAmino(message: _85.QueryTallyResultRequest): _85.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _85.QueryTallyResultRequestAminoMsg): _85.QueryTallyResultRequest;
                toAminoMsg(message: _85.QueryTallyResultRequest): _85.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _85.QueryTallyResultRequestProtoMsg): _85.QueryTallyResultRequest;
                toProto(message: _85.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _85.QueryTallyResultRequest): _85.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _85.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryTallyResultResponse;
                fromPartial(object: Partial<_85.QueryTallyResultResponse>): _85.QueryTallyResultResponse;
                fromAmino(object: _85.QueryTallyResultResponseAmino): _85.QueryTallyResultResponse;
                toAmino(message: _85.QueryTallyResultResponse): _85.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _85.QueryTallyResultResponseAminoMsg): _85.QueryTallyResultResponse;
                toAminoMsg(message: _85.QueryTallyResultResponse): _85.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _85.QueryTallyResultResponseProtoMsg): _85.QueryTallyResultResponse;
                toProto(message: _85.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _85.QueryTallyResultResponse): _85.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _84.VoteOption;
            voteOptionToJSON(object: _84.VoteOption): string;
            proposalStatusFromJSON(object: any): _84.ProposalStatus;
            proposalStatusToJSON(object: _84.ProposalStatus): string;
            VoteOption: typeof _84.VoteOption;
            VoteOptionSDKType: typeof _84.VoteOption;
            VoteOptionAmino: typeof _84.VoteOption;
            ProposalStatus: typeof _84.ProposalStatus;
            ProposalStatusSDKType: typeof _84.ProposalStatus;
            ProposalStatusAmino: typeof _84.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _84.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.WeightedVoteOption;
                fromPartial(object: Partial<_84.WeightedVoteOption>): _84.WeightedVoteOption;
                fromAmino(object: _84.WeightedVoteOptionAmino): _84.WeightedVoteOption;
                toAmino(message: _84.WeightedVoteOption): _84.WeightedVoteOptionAmino;
                fromAminoMsg(object: _84.WeightedVoteOptionAminoMsg): _84.WeightedVoteOption;
                toAminoMsg(message: _84.WeightedVoteOption): _84.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _84.WeightedVoteOptionProtoMsg): _84.WeightedVoteOption;
                toProto(message: _84.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _84.WeightedVoteOption): _84.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _84.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.TextProposal;
                fromPartial(object: Partial<_84.TextProposal>): _84.TextProposal;
                fromAmino(object: _84.TextProposalAmino): _84.TextProposal;
                toAmino(message: _84.TextProposal): _84.TextProposalAmino;
                fromAminoMsg(object: _84.TextProposalAminoMsg): _84.TextProposal;
                toAminoMsg(message: _84.TextProposal): _84.TextProposalAminoMsg;
                fromProtoMsg(message: _84.TextProposalProtoMsg): _84.TextProposal;
                toProto(message: _84.TextProposal): Uint8Array;
                toProtoMsg(message: _84.TextProposal): _84.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _84.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Deposit;
                fromPartial(object: Partial<_84.Deposit>): _84.Deposit;
                fromAmino(object: _84.DepositAmino): _84.Deposit;
                toAmino(message: _84.Deposit): _84.DepositAmino;
                fromAminoMsg(object: _84.DepositAminoMsg): _84.Deposit;
                toAminoMsg(message: _84.Deposit): _84.DepositAminoMsg;
                fromProtoMsg(message: _84.DepositProtoMsg): _84.Deposit;
                toProto(message: _84.Deposit): Uint8Array;
                toProtoMsg(message: _84.Deposit): _84.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _84.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Proposal;
                fromPartial(object: Partial<_84.Proposal>): _84.Proposal;
                fromAmino(object: _84.ProposalAmino): _84.Proposal;
                toAmino(message: _84.Proposal): _84.ProposalAmino;
                fromAminoMsg(object: _84.ProposalAminoMsg): _84.Proposal;
                toAminoMsg(message: _84.Proposal): _84.ProposalAminoMsg;
                fromProtoMsg(message: _84.ProposalProtoMsg): _84.Proposal;
                toProto(message: _84.Proposal): Uint8Array;
                toProtoMsg(message: _84.Proposal): _84.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _84.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.TallyResult;
                fromPartial(object: Partial<_84.TallyResult>): _84.TallyResult;
                fromAmino(object: _84.TallyResultAmino): _84.TallyResult;
                toAmino(message: _84.TallyResult): _84.TallyResultAmino;
                fromAminoMsg(object: _84.TallyResultAminoMsg): _84.TallyResult;
                toAminoMsg(message: _84.TallyResult): _84.TallyResultAminoMsg;
                fromProtoMsg(message: _84.TallyResultProtoMsg): _84.TallyResult;
                toProto(message: _84.TallyResult): Uint8Array;
                toProtoMsg(message: _84.TallyResult): _84.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _84.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Vote;
                fromPartial(object: Partial<_84.Vote>): _84.Vote;
                fromAmino(object: _84.VoteAmino): _84.Vote;
                toAmino(message: _84.Vote): _84.VoteAmino;
                fromAminoMsg(object: _84.VoteAminoMsg): _84.Vote;
                toAminoMsg(message: _84.Vote): _84.VoteAminoMsg;
                fromProtoMsg(message: _84.VoteProtoMsg): _84.Vote;
                toProto(message: _84.Vote): Uint8Array;
                toProtoMsg(message: _84.Vote): _84.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _84.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.DepositParams;
                fromPartial(object: Partial<_84.DepositParams>): _84.DepositParams;
                fromAmino(object: _84.DepositParamsAmino): _84.DepositParams;
                toAmino(message: _84.DepositParams): _84.DepositParamsAmino;
                fromAminoMsg(object: _84.DepositParamsAminoMsg): _84.DepositParams;
                toAminoMsg(message: _84.DepositParams): _84.DepositParamsAminoMsg;
                fromProtoMsg(message: _84.DepositParamsProtoMsg): _84.DepositParams;
                toProto(message: _84.DepositParams): Uint8Array;
                toProtoMsg(message: _84.DepositParams): _84.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _84.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.VotingParams;
                fromPartial(object: Partial<_84.VotingParams>): _84.VotingParams;
                fromAmino(object: _84.VotingParamsAmino): _84.VotingParams;
                toAmino(message: _84.VotingParams): _84.VotingParamsAmino;
                fromAminoMsg(object: _84.VotingParamsAminoMsg): _84.VotingParams;
                toAminoMsg(message: _84.VotingParams): _84.VotingParamsAminoMsg;
                fromProtoMsg(message: _84.VotingParamsProtoMsg): _84.VotingParams;
                toProto(message: _84.VotingParams): Uint8Array;
                toProtoMsg(message: _84.VotingParams): _84.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _84.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.TallyParams;
                fromPartial(object: Partial<_84.TallyParams>): _84.TallyParams;
                fromAmino(object: _84.TallyParamsAmino): _84.TallyParams;
                toAmino(message: _84.TallyParams): _84.TallyParamsAmino;
                fromAminoMsg(object: _84.TallyParamsAminoMsg): _84.TallyParams;
                toAminoMsg(message: _84.TallyParams): _84.TallyParamsAminoMsg;
                fromProtoMsg(message: _84.TallyParamsProtoMsg): _84.TallyParams;
                toProto(message: _84.TallyParams): Uint8Array;
                toProtoMsg(message: _84.TallyParams): _84.TallyParamsProtoMsg;
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
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
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
            LCDQueryClient: typeof _205.LCDQueryClient;
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
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
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
        const v1beta1: {
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                inflation(request?: _94.QueryInflationRequest): Promise<_94.QueryInflationResponse>;
                annualProvisions(request?: _94.QueryAnnualProvisionsRequest): Promise<_94.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _94.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.QueryParamsRequest;
                fromPartial(_: Partial<_94.QueryParamsRequest>): _94.QueryParamsRequest;
                fromAmino(_: _94.QueryParamsRequestAmino): _94.QueryParamsRequest;
                toAmino(_: _94.QueryParamsRequest): _94.QueryParamsRequestAmino;
                fromAminoMsg(object: _94.QueryParamsRequestAminoMsg): _94.QueryParamsRequest;
                toAminoMsg(message: _94.QueryParamsRequest): _94.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _94.QueryParamsRequestProtoMsg): _94.QueryParamsRequest;
                toProto(message: _94.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _94.QueryParamsRequest): _94.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _94.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryParamsResponse;
                fromPartial(object: Partial<_94.QueryParamsResponse>): _94.QueryParamsResponse;
                fromAmino(object: _94.QueryParamsResponseAmino): _94.QueryParamsResponse;
                toAmino(message: _94.QueryParamsResponse): _94.QueryParamsResponseAmino;
                fromAminoMsg(object: _94.QueryParamsResponseAminoMsg): _94.QueryParamsResponse;
                toAminoMsg(message: _94.QueryParamsResponse): _94.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _94.QueryParamsResponseProtoMsg): _94.QueryParamsResponse;
                toProto(message: _94.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _94.QueryParamsResponse): _94.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _94.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.QueryInflationRequest;
                fromPartial(_: Partial<_94.QueryInflationRequest>): _94.QueryInflationRequest;
                fromAmino(_: _94.QueryInflationRequestAmino): _94.QueryInflationRequest;
                toAmino(_: _94.QueryInflationRequest): _94.QueryInflationRequestAmino;
                fromAminoMsg(object: _94.QueryInflationRequestAminoMsg): _94.QueryInflationRequest;
                toAminoMsg(message: _94.QueryInflationRequest): _94.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _94.QueryInflationRequestProtoMsg): _94.QueryInflationRequest;
                toProto(message: _94.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _94.QueryInflationRequest): _94.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _94.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryInflationResponse;
                fromPartial(object: Partial<_94.QueryInflationResponse>): _94.QueryInflationResponse;
                fromAmino(object: _94.QueryInflationResponseAmino): _94.QueryInflationResponse;
                toAmino(message: _94.QueryInflationResponse): _94.QueryInflationResponseAmino;
                fromAminoMsg(object: _94.QueryInflationResponseAminoMsg): _94.QueryInflationResponse;
                toAminoMsg(message: _94.QueryInflationResponse): _94.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _94.QueryInflationResponseProtoMsg): _94.QueryInflationResponse;
                toProto(message: _94.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _94.QueryInflationResponse): _94.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _94.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_94.QueryAnnualProvisionsRequest>): _94.QueryAnnualProvisionsRequest;
                fromAmino(_: _94.QueryAnnualProvisionsRequestAmino): _94.QueryAnnualProvisionsRequest;
                toAmino(_: _94.QueryAnnualProvisionsRequest): _94.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _94.QueryAnnualProvisionsRequestAminoMsg): _94.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _94.QueryAnnualProvisionsRequest): _94.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _94.QueryAnnualProvisionsRequestProtoMsg): _94.QueryAnnualProvisionsRequest;
                toProto(message: _94.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _94.QueryAnnualProvisionsRequest): _94.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _94.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_94.QueryAnnualProvisionsResponse>): _94.QueryAnnualProvisionsResponse;
                fromAmino(object: _94.QueryAnnualProvisionsResponseAmino): _94.QueryAnnualProvisionsResponse;
                toAmino(message: _94.QueryAnnualProvisionsResponse): _94.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _94.QueryAnnualProvisionsResponseAminoMsg): _94.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _94.QueryAnnualProvisionsResponse): _94.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _94.QueryAnnualProvisionsResponseProtoMsg): _94.QueryAnnualProvisionsResponse;
                toProto(message: _94.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _94.QueryAnnualProvisionsResponse): _94.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _93.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Minter;
                fromPartial(object: Partial<_93.Minter>): _93.Minter;
                fromAmino(object: _93.MinterAmino): _93.Minter;
                toAmino(message: _93.Minter): _93.MinterAmino;
                fromAminoMsg(object: _93.MinterAminoMsg): _93.Minter;
                toAminoMsg(message: _93.Minter): _93.MinterAminoMsg;
                fromProtoMsg(message: _93.MinterProtoMsg): _93.Minter;
                toProto(message: _93.Minter): Uint8Array;
                toProtoMsg(message: _93.Minter): _93.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _93.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Params;
                fromPartial(object: Partial<_93.Params>): _93.Params;
                fromAmino(object: _93.ParamsAmino): _93.Params;
                toAmino(message: _93.Params): _93.ParamsAmino;
                fromAminoMsg(object: _93.ParamsAminoMsg): _93.Params;
                toAminoMsg(message: _93.Params): _93.ParamsAminoMsg;
                fromProtoMsg(message: _93.ParamsProtoMsg): _93.Params;
                toProto(message: _93.Params): Uint8Array;
                toProtoMsg(message: _93.Params): _93.ParamsProtoMsg;
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
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _99.QueryBalanceRequest): Promise<_99.QueryBalanceResponse>;
                owner(request: _99.QueryOwnerRequest): Promise<_99.QueryOwnerResponse>;
                supply(request: _99.QuerySupplyRequest): Promise<_99.QuerySupplyResponse>;
                nFTs(request: _99.QueryNFTsRequest): Promise<_99.QueryNFTsResponse>;
                nFT(request: _99.QueryNFTRequest): Promise<_99.QueryNFTResponse>;
                class(request: _99.QueryClassRequest): Promise<_99.QueryClassResponse>;
                classes(request?: _99.QueryClassesRequest): Promise<_99.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: _100.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _100.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: _100.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _100.MsgSend) => _100.MsgSendAmino;
                    fromAmino: (object: _100.MsgSendAmino) => _100.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _100.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgSend;
                fromPartial(object: Partial<_100.MsgSend>): _100.MsgSend;
                fromAmino(object: _100.MsgSendAmino): _100.MsgSend;
                toAmino(message: _100.MsgSend): _100.MsgSendAmino;
                fromAminoMsg(object: _100.MsgSendAminoMsg): _100.MsgSend;
                toAminoMsg(message: _100.MsgSend): _100.MsgSendAminoMsg;
                fromProtoMsg(message: _100.MsgSendProtoMsg): _100.MsgSend;
                toProto(message: _100.MsgSend): Uint8Array;
                toProtoMsg(message: _100.MsgSend): _100.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _100.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgSendResponse;
                fromPartial(_: Partial<_100.MsgSendResponse>): _100.MsgSendResponse;
                fromAmino(_: _100.MsgSendResponseAmino): _100.MsgSendResponse;
                toAmino(_: _100.MsgSendResponse): _100.MsgSendResponseAmino;
                fromAminoMsg(object: _100.MsgSendResponseAminoMsg): _100.MsgSendResponse;
                toAminoMsg(message: _100.MsgSendResponse): _100.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _100.MsgSendResponseProtoMsg): _100.MsgSendResponse;
                toProto(message: _100.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _100.MsgSendResponse): _100.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _99.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryBalanceRequest;
                fromPartial(object: Partial<_99.QueryBalanceRequest>): _99.QueryBalanceRequest;
                fromAmino(object: _99.QueryBalanceRequestAmino): _99.QueryBalanceRequest;
                toAmino(message: _99.QueryBalanceRequest): _99.QueryBalanceRequestAmino;
                fromAminoMsg(object: _99.QueryBalanceRequestAminoMsg): _99.QueryBalanceRequest;
                toAminoMsg(message: _99.QueryBalanceRequest): _99.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _99.QueryBalanceRequestProtoMsg): _99.QueryBalanceRequest;
                toProto(message: _99.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _99.QueryBalanceRequest): _99.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _99.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryBalanceResponse;
                fromPartial(object: Partial<_99.QueryBalanceResponse>): _99.QueryBalanceResponse;
                fromAmino(object: _99.QueryBalanceResponseAmino): _99.QueryBalanceResponse;
                toAmino(message: _99.QueryBalanceResponse): _99.QueryBalanceResponseAmino;
                fromAminoMsg(object: _99.QueryBalanceResponseAminoMsg): _99.QueryBalanceResponse;
                toAminoMsg(message: _99.QueryBalanceResponse): _99.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _99.QueryBalanceResponseProtoMsg): _99.QueryBalanceResponse;
                toProto(message: _99.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _99.QueryBalanceResponse): _99.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _99.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryOwnerRequest;
                fromPartial(object: Partial<_99.QueryOwnerRequest>): _99.QueryOwnerRequest;
                fromAmino(object: _99.QueryOwnerRequestAmino): _99.QueryOwnerRequest;
                toAmino(message: _99.QueryOwnerRequest): _99.QueryOwnerRequestAmino;
                fromAminoMsg(object: _99.QueryOwnerRequestAminoMsg): _99.QueryOwnerRequest;
                toAminoMsg(message: _99.QueryOwnerRequest): _99.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _99.QueryOwnerRequestProtoMsg): _99.QueryOwnerRequest;
                toProto(message: _99.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _99.QueryOwnerRequest): _99.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _99.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryOwnerResponse;
                fromPartial(object: Partial<_99.QueryOwnerResponse>): _99.QueryOwnerResponse;
                fromAmino(object: _99.QueryOwnerResponseAmino): _99.QueryOwnerResponse;
                toAmino(message: _99.QueryOwnerResponse): _99.QueryOwnerResponseAmino;
                fromAminoMsg(object: _99.QueryOwnerResponseAminoMsg): _99.QueryOwnerResponse;
                toAminoMsg(message: _99.QueryOwnerResponse): _99.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _99.QueryOwnerResponseProtoMsg): _99.QueryOwnerResponse;
                toProto(message: _99.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _99.QueryOwnerResponse): _99.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _99.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QuerySupplyRequest;
                fromPartial(object: Partial<_99.QuerySupplyRequest>): _99.QuerySupplyRequest;
                fromAmino(object: _99.QuerySupplyRequestAmino): _99.QuerySupplyRequest;
                toAmino(message: _99.QuerySupplyRequest): _99.QuerySupplyRequestAmino;
                fromAminoMsg(object: _99.QuerySupplyRequestAminoMsg): _99.QuerySupplyRequest;
                toAminoMsg(message: _99.QuerySupplyRequest): _99.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _99.QuerySupplyRequestProtoMsg): _99.QuerySupplyRequest;
                toProto(message: _99.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _99.QuerySupplyRequest): _99.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _99.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QuerySupplyResponse;
                fromPartial(object: Partial<_99.QuerySupplyResponse>): _99.QuerySupplyResponse;
                fromAmino(object: _99.QuerySupplyResponseAmino): _99.QuerySupplyResponse;
                toAmino(message: _99.QuerySupplyResponse): _99.QuerySupplyResponseAmino;
                fromAminoMsg(object: _99.QuerySupplyResponseAminoMsg): _99.QuerySupplyResponse;
                toAminoMsg(message: _99.QuerySupplyResponse): _99.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _99.QuerySupplyResponseProtoMsg): _99.QuerySupplyResponse;
                toProto(message: _99.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _99.QuerySupplyResponse): _99.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _99.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryNFTsRequest;
                fromPartial(object: Partial<_99.QueryNFTsRequest>): _99.QueryNFTsRequest;
                fromAmino(object: _99.QueryNFTsRequestAmino): _99.QueryNFTsRequest;
                toAmino(message: _99.QueryNFTsRequest): _99.QueryNFTsRequestAmino;
                fromAminoMsg(object: _99.QueryNFTsRequestAminoMsg): _99.QueryNFTsRequest;
                toAminoMsg(message: _99.QueryNFTsRequest): _99.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryNFTsRequestProtoMsg): _99.QueryNFTsRequest;
                toProto(message: _99.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryNFTsRequest): _99.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _99.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryNFTsResponse;
                fromPartial(object: Partial<_99.QueryNFTsResponse>): _99.QueryNFTsResponse;
                fromAmino(object: _99.QueryNFTsResponseAmino): _99.QueryNFTsResponse;
                toAmino(message: _99.QueryNFTsResponse): _99.QueryNFTsResponseAmino;
                fromAminoMsg(object: _99.QueryNFTsResponseAminoMsg): _99.QueryNFTsResponse;
                toAminoMsg(message: _99.QueryNFTsResponse): _99.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryNFTsResponseProtoMsg): _99.QueryNFTsResponse;
                toProto(message: _99.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryNFTsResponse): _99.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _99.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryNFTRequest;
                fromPartial(object: Partial<_99.QueryNFTRequest>): _99.QueryNFTRequest;
                fromAmino(object: _99.QueryNFTRequestAmino): _99.QueryNFTRequest;
                toAmino(message: _99.QueryNFTRequest): _99.QueryNFTRequestAmino;
                fromAminoMsg(object: _99.QueryNFTRequestAminoMsg): _99.QueryNFTRequest;
                toAminoMsg(message: _99.QueryNFTRequest): _99.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _99.QueryNFTRequestProtoMsg): _99.QueryNFTRequest;
                toProto(message: _99.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _99.QueryNFTRequest): _99.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _99.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryNFTResponse;
                fromPartial(object: Partial<_99.QueryNFTResponse>): _99.QueryNFTResponse;
                fromAmino(object: _99.QueryNFTResponseAmino): _99.QueryNFTResponse;
                toAmino(message: _99.QueryNFTResponse): _99.QueryNFTResponseAmino;
                fromAminoMsg(object: _99.QueryNFTResponseAminoMsg): _99.QueryNFTResponse;
                toAminoMsg(message: _99.QueryNFTResponse): _99.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _99.QueryNFTResponseProtoMsg): _99.QueryNFTResponse;
                toProto(message: _99.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _99.QueryNFTResponse): _99.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _99.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryClassRequest;
                fromPartial(object: Partial<_99.QueryClassRequest>): _99.QueryClassRequest;
                fromAmino(object: _99.QueryClassRequestAmino): _99.QueryClassRequest;
                toAmino(message: _99.QueryClassRequest): _99.QueryClassRequestAmino;
                fromAminoMsg(object: _99.QueryClassRequestAminoMsg): _99.QueryClassRequest;
                toAminoMsg(message: _99.QueryClassRequest): _99.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _99.QueryClassRequestProtoMsg): _99.QueryClassRequest;
                toProto(message: _99.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _99.QueryClassRequest): _99.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _99.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryClassResponse;
                fromPartial(object: Partial<_99.QueryClassResponse>): _99.QueryClassResponse;
                fromAmino(object: _99.QueryClassResponseAmino): _99.QueryClassResponse;
                toAmino(message: _99.QueryClassResponse): _99.QueryClassResponseAmino;
                fromAminoMsg(object: _99.QueryClassResponseAminoMsg): _99.QueryClassResponse;
                toAminoMsg(message: _99.QueryClassResponse): _99.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _99.QueryClassResponseProtoMsg): _99.QueryClassResponse;
                toProto(message: _99.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _99.QueryClassResponse): _99.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _99.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryClassesRequest;
                fromPartial(object: Partial<_99.QueryClassesRequest>): _99.QueryClassesRequest;
                fromAmino(object: _99.QueryClassesRequestAmino): _99.QueryClassesRequest;
                toAmino(message: _99.QueryClassesRequest): _99.QueryClassesRequestAmino;
                fromAminoMsg(object: _99.QueryClassesRequestAminoMsg): _99.QueryClassesRequest;
                toAminoMsg(message: _99.QueryClassesRequest): _99.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _99.QueryClassesRequestProtoMsg): _99.QueryClassesRequest;
                toProto(message: _99.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _99.QueryClassesRequest): _99.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _99.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryClassesResponse;
                fromPartial(object: Partial<_99.QueryClassesResponse>): _99.QueryClassesResponse;
                fromAmino(object: _99.QueryClassesResponseAmino): _99.QueryClassesResponse;
                toAmino(message: _99.QueryClassesResponse): _99.QueryClassesResponseAmino;
                fromAminoMsg(object: _99.QueryClassesResponseAminoMsg): _99.QueryClassesResponse;
                toAminoMsg(message: _99.QueryClassesResponse): _99.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _99.QueryClassesResponseProtoMsg): _99.QueryClassesResponse;
                toProto(message: _99.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _99.QueryClassesResponse): _99.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _98.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Class;
                fromPartial(object: Partial<_98.Class>): _98.Class;
                fromAmino(object: _98.ClassAmino): _98.Class;
                toAmino(message: _98.Class): _98.ClassAmino;
                fromAminoMsg(object: _98.ClassAminoMsg): _98.Class;
                toAminoMsg(message: _98.Class): _98.ClassAminoMsg;
                fromProtoMsg(message: _98.ClassProtoMsg): _98.Class;
                toProto(message: _98.Class): Uint8Array;
                toProtoMsg(message: _98.Class): _98.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _98.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.NFT;
                fromPartial(object: Partial<_98.NFT>): _98.NFT;
                fromAmino(object: _98.NFTAmino): _98.NFT;
                toAmino(message: _98.NFT): _98.NFTAmino;
                fromAminoMsg(object: _98.NFTAminoMsg): _98.NFT;
                toAminoMsg(message: _98.NFT): _98.NFTAminoMsg;
                fromProtoMsg(message: _98.NFTProtoMsg): _98.NFT;
                toProto(message: _98.NFT): Uint8Array;
                toProtoMsg(message: _98.NFT): _98.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _97.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Entry;
                fromPartial(object: Partial<_97.Entry>): _97.Entry;
                fromAmino(object: _97.EntryAmino): _97.Entry;
                toAmino(message: _97.Entry): _97.EntryAmino;
                fromAminoMsg(object: _97.EntryAminoMsg): _97.Entry;
                toAminoMsg(message: _97.Entry): _97.EntryAminoMsg;
                fromProtoMsg(message: _97.EntryProtoMsg): _97.Entry;
                toProto(message: _97.Entry): Uint8Array;
                toProtoMsg(message: _97.Entry): _97.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _96.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.EventSend;
                fromPartial(object: Partial<_96.EventSend>): _96.EventSend;
                fromAmino(object: _96.EventSendAmino): _96.EventSend;
                toAmino(message: _96.EventSend): _96.EventSendAmino;
                fromAminoMsg(object: _96.EventSendAminoMsg): _96.EventSend;
                toAminoMsg(message: _96.EventSend): _96.EventSendAminoMsg;
                fromProtoMsg(message: _96.EventSendProtoMsg): _96.EventSend;
                toProto(message: _96.EventSend): Uint8Array;
                toProtoMsg(message: _96.EventSend): _96.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _96.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.EventMint;
                fromPartial(object: Partial<_96.EventMint>): _96.EventMint;
                fromAmino(object: _96.EventMintAmino): _96.EventMint;
                toAmino(message: _96.EventMint): _96.EventMintAmino;
                fromAminoMsg(object: _96.EventMintAminoMsg): _96.EventMint;
                toAminoMsg(message: _96.EventMint): _96.EventMintAminoMsg;
                fromProtoMsg(message: _96.EventMintProtoMsg): _96.EventMint;
                toProto(message: _96.EventMint): Uint8Array;
                toProtoMsg(message: _96.EventMint): _96.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _96.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.EventBurn;
                fromPartial(object: Partial<_96.EventBurn>): _96.EventBurn;
                fromAmino(object: _96.EventBurnAmino): _96.EventBurn;
                toAmino(message: _96.EventBurn): _96.EventBurnAmino;
                fromAminoMsg(object: _96.EventBurnAminoMsg): _96.EventBurn;
                toAminoMsg(message: _96.EventBurn): _96.EventBurnAminoMsg;
                fromProtoMsg(message: _96.EventBurnProtoMsg): _96.EventBurn;
                toProto(message: _96.EventBurn): Uint8Array;
                toProtoMsg(message: _96.EventBurn): _96.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _101.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _101.Module;
                    fromPartial(_: Partial<_101.Module>): _101.Module;
                    fromAmino(_: _101.ModuleAmino): _101.Module;
                    toAmino(_: _101.Module): _101.ModuleAmino;
                    fromAminoMsg(object: _101.ModuleAminoMsg): _101.Module;
                    toAminoMsg(message: _101.Module): _101.ModuleAminoMsg;
                    fromProtoMsg(message: _101.ModuleProtoMsg): _101.Module;
                    toProto(message: _101.Module): Uint8Array;
                    toProtoMsg(message: _101.Module): _101.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _102.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.TableDescriptor;
                fromPartial(object: Partial<_102.TableDescriptor>): _102.TableDescriptor;
                fromAmino(object: _102.TableDescriptorAmino): _102.TableDescriptor;
                toAmino(message: _102.TableDescriptor): _102.TableDescriptorAmino;
                fromAminoMsg(object: _102.TableDescriptorAminoMsg): _102.TableDescriptor;
                toAminoMsg(message: _102.TableDescriptor): _102.TableDescriptorAminoMsg;
                fromProtoMsg(message: _102.TableDescriptorProtoMsg): _102.TableDescriptor;
                toProto(message: _102.TableDescriptor): Uint8Array;
                toProtoMsg(message: _102.TableDescriptor): _102.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _102.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_102.PrimaryKeyDescriptor>): _102.PrimaryKeyDescriptor;
                fromAmino(object: _102.PrimaryKeyDescriptorAmino): _102.PrimaryKeyDescriptor;
                toAmino(message: _102.PrimaryKeyDescriptor): _102.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _102.PrimaryKeyDescriptorAminoMsg): _102.PrimaryKeyDescriptor;
                toAminoMsg(message: _102.PrimaryKeyDescriptor): _102.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _102.PrimaryKeyDescriptorProtoMsg): _102.PrimaryKeyDescriptor;
                toProto(message: _102.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _102.PrimaryKeyDescriptor): _102.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _102.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_102.SecondaryIndexDescriptor>): _102.SecondaryIndexDescriptor;
                fromAmino(object: _102.SecondaryIndexDescriptorAmino): _102.SecondaryIndexDescriptor;
                toAmino(message: _102.SecondaryIndexDescriptor): _102.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _102.SecondaryIndexDescriptorAminoMsg): _102.SecondaryIndexDescriptor;
                toAminoMsg(message: _102.SecondaryIndexDescriptor): _102.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _102.SecondaryIndexDescriptorProtoMsg): _102.SecondaryIndexDescriptor;
                toProto(message: _102.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _102.SecondaryIndexDescriptor): _102.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _102.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.SingletonDescriptor;
                fromPartial(object: Partial<_102.SingletonDescriptor>): _102.SingletonDescriptor;
                fromAmino(object: _102.SingletonDescriptorAmino): _102.SingletonDescriptor;
                toAmino(message: _102.SingletonDescriptor): _102.SingletonDescriptorAmino;
                fromAminoMsg(object: _102.SingletonDescriptorAminoMsg): _102.SingletonDescriptor;
                toAminoMsg(message: _102.SingletonDescriptor): _102.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _102.SingletonDescriptorProtoMsg): _102.SingletonDescriptor;
                toProto(message: _102.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _102.SingletonDescriptor): _102.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _103.StorageType;
            storageTypeToJSON(object: _103.StorageType): string;
            StorageType: typeof _103.StorageType;
            StorageTypeSDKType: typeof _103.StorageType;
            StorageTypeAmino: typeof _103.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _103.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_103.ModuleSchemaDescriptor>): _103.ModuleSchemaDescriptor;
                fromAmino(object: _103.ModuleSchemaDescriptorAmino): _103.ModuleSchemaDescriptor;
                toAmino(message: _103.ModuleSchemaDescriptor): _103.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _103.ModuleSchemaDescriptorAminoMsg): _103.ModuleSchemaDescriptor;
                toAminoMsg(message: _103.ModuleSchemaDescriptor): _103.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _103.ModuleSchemaDescriptorProtoMsg): _103.ModuleSchemaDescriptor;
                toProto(message: _103.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _103.ModuleSchemaDescriptor): _103.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _103.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_103.ModuleSchemaDescriptor_FileEntry>): _103.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _103.ModuleSchemaDescriptor_FileEntryAmino): _103.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _103.ModuleSchemaDescriptor_FileEntry): _103.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _103.ModuleSchemaDescriptor_FileEntryAminoMsg): _103.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _103.ModuleSchemaDescriptor_FileEntry): _103.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _103.ModuleSchemaDescriptor_FileEntryProtoMsg): _103.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _103.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _103.ModuleSchemaDescriptor_FileEntry): _103.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                subspaces(request?: _105.QuerySubspacesRequest): Promise<_105.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
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
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                signingInfo(request: _107.QuerySigningInfoRequest): Promise<_107.QuerySigningInfoResponse>;
                signingInfos(request?: _107.QuerySigningInfosRequest): Promise<_107.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _109.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _109.MsgUnjail): {
                        typeUrl: string;
                        value: _109.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _109.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _109.MsgUnjail): {
                        typeUrl: string;
                        value: _109.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _109.MsgUnjail) => _109.MsgUnjailAmino;
                    fromAmino: (object: _109.MsgUnjailAmino) => _109.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _109.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgUnjail;
                fromPartial(object: Partial<_109.MsgUnjail>): _109.MsgUnjail;
                fromAmino(object: _109.MsgUnjailAmino): _109.MsgUnjail;
                toAmino(message: _109.MsgUnjail): _109.MsgUnjailAmino;
                fromAminoMsg(object: _109.MsgUnjailAminoMsg): _109.MsgUnjail;
                toAminoMsg(message: _109.MsgUnjail): _109.MsgUnjailAminoMsg;
                fromProtoMsg(message: _109.MsgUnjailProtoMsg): _109.MsgUnjail;
                toProto(message: _109.MsgUnjail): Uint8Array;
                toProtoMsg(message: _109.MsgUnjail): _109.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _109.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.MsgUnjailResponse;
                fromPartial(_: Partial<_109.MsgUnjailResponse>): _109.MsgUnjailResponse;
                fromAmino(_: _109.MsgUnjailResponseAmino): _109.MsgUnjailResponse;
                toAmino(_: _109.MsgUnjailResponse): _109.MsgUnjailResponseAmino;
                fromAminoMsg(object: _109.MsgUnjailResponseAminoMsg): _109.MsgUnjailResponse;
                toAminoMsg(message: _109.MsgUnjailResponse): _109.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _109.MsgUnjailResponseProtoMsg): _109.MsgUnjailResponse;
                toProto(message: _109.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _109.MsgUnjailResponse): _109.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _108.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.ValidatorSigningInfo;
                fromPartial(object: Partial<_108.ValidatorSigningInfo>): _108.ValidatorSigningInfo;
                fromAmino(object: _108.ValidatorSigningInfoAmino): _108.ValidatorSigningInfo;
                toAmino(message: _108.ValidatorSigningInfo): _108.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _108.ValidatorSigningInfoAminoMsg): _108.ValidatorSigningInfo;
                toAminoMsg(message: _108.ValidatorSigningInfo): _108.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _108.ValidatorSigningInfoProtoMsg): _108.ValidatorSigningInfo;
                toProto(message: _108.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _108.ValidatorSigningInfo): _108.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _108.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Params;
                fromPartial(object: Partial<_108.Params>): _108.Params;
                fromAmino(object: _108.ParamsAmino): _108.Params;
                toAmino(message: _108.Params): _108.ParamsAmino;
                fromAminoMsg(object: _108.ParamsAminoMsg): _108.Params;
                toAminoMsg(message: _108.Params): _108.ParamsAminoMsg;
                fromProtoMsg(message: _108.ParamsProtoMsg): _108.Params;
                toProto(message: _108.Params): Uint8Array;
                toProtoMsg(message: _108.Params): _108.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _107.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.QueryParamsRequest;
                fromPartial(_: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
                fromAmino(_: _107.QueryParamsRequestAmino): _107.QueryParamsRequest;
                toAmino(_: _107.QueryParamsRequest): _107.QueryParamsRequestAmino;
                fromAminoMsg(object: _107.QueryParamsRequestAminoMsg): _107.QueryParamsRequest;
                toAminoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryParamsRequestProtoMsg): _107.QueryParamsRequest;
                toProto(message: _107.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _107.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryParamsResponse;
                fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
                fromAmino(object: _107.QueryParamsResponseAmino): _107.QueryParamsResponse;
                toAmino(message: _107.QueryParamsResponse): _107.QueryParamsResponseAmino;
                fromAminoMsg(object: _107.QueryParamsResponseAminoMsg): _107.QueryParamsResponse;
                toAminoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryParamsResponseProtoMsg): _107.QueryParamsResponse;
                toProto(message: _107.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _107.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QuerySigningInfoRequest;
                fromPartial(object: Partial<_107.QuerySigningInfoRequest>): _107.QuerySigningInfoRequest;
                fromAmino(object: _107.QuerySigningInfoRequestAmino): _107.QuerySigningInfoRequest;
                toAmino(message: _107.QuerySigningInfoRequest): _107.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _107.QuerySigningInfoRequestAminoMsg): _107.QuerySigningInfoRequest;
                toAminoMsg(message: _107.QuerySigningInfoRequest): _107.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _107.QuerySigningInfoRequestProtoMsg): _107.QuerySigningInfoRequest;
                toProto(message: _107.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _107.QuerySigningInfoRequest): _107.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _107.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QuerySigningInfoResponse;
                fromPartial(object: Partial<_107.QuerySigningInfoResponse>): _107.QuerySigningInfoResponse;
                fromAmino(object: _107.QuerySigningInfoResponseAmino): _107.QuerySigningInfoResponse;
                toAmino(message: _107.QuerySigningInfoResponse): _107.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _107.QuerySigningInfoResponseAminoMsg): _107.QuerySigningInfoResponse;
                toAminoMsg(message: _107.QuerySigningInfoResponse): _107.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _107.QuerySigningInfoResponseProtoMsg): _107.QuerySigningInfoResponse;
                toProto(message: _107.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _107.QuerySigningInfoResponse): _107.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _107.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QuerySigningInfosRequest;
                fromPartial(object: Partial<_107.QuerySigningInfosRequest>): _107.QuerySigningInfosRequest;
                fromAmino(object: _107.QuerySigningInfosRequestAmino): _107.QuerySigningInfosRequest;
                toAmino(message: _107.QuerySigningInfosRequest): _107.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _107.QuerySigningInfosRequestAminoMsg): _107.QuerySigningInfosRequest;
                toAminoMsg(message: _107.QuerySigningInfosRequest): _107.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _107.QuerySigningInfosRequestProtoMsg): _107.QuerySigningInfosRequest;
                toProto(message: _107.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _107.QuerySigningInfosRequest): _107.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _107.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QuerySigningInfosResponse;
                fromPartial(object: Partial<_107.QuerySigningInfosResponse>): _107.QuerySigningInfosResponse;
                fromAmino(object: _107.QuerySigningInfosResponseAmino): _107.QuerySigningInfosResponse;
                toAmino(message: _107.QuerySigningInfosResponse): _107.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _107.QuerySigningInfosResponseAminoMsg): _107.QuerySigningInfosResponse;
                toAminoMsg(message: _107.QuerySigningInfosResponse): _107.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _107.QuerySigningInfosResponseProtoMsg): _107.QuerySigningInfosResponse;
                toProto(message: _107.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _107.QuerySigningInfosResponse): _107.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _106.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.SigningInfo;
                fromPartial(object: Partial<_106.SigningInfo>): _106.SigningInfo;
                fromAmino(object: _106.SigningInfoAmino): _106.SigningInfo;
                toAmino(message: _106.SigningInfo): _106.SigningInfoAmino;
                fromAminoMsg(object: _106.SigningInfoAminoMsg): _106.SigningInfo;
                toAminoMsg(message: _106.SigningInfo): _106.SigningInfoAminoMsg;
                fromProtoMsg(message: _106.SigningInfoProtoMsg): _106.SigningInfo;
                toProto(message: _106.SigningInfo): Uint8Array;
                toProtoMsg(message: _106.SigningInfo): _106.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _106.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.ValidatorMissedBlocks;
                fromPartial(object: Partial<_106.ValidatorMissedBlocks>): _106.ValidatorMissedBlocks;
                fromAmino(object: _106.ValidatorMissedBlocksAmino): _106.ValidatorMissedBlocks;
                toAmino(message: _106.ValidatorMissedBlocks): _106.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _106.ValidatorMissedBlocksAminoMsg): _106.ValidatorMissedBlocks;
                toAminoMsg(message: _106.ValidatorMissedBlocks): _106.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _106.ValidatorMissedBlocksProtoMsg): _106.ValidatorMissedBlocks;
                toProto(message: _106.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _106.ValidatorMissedBlocks): _106.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _106.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MissedBlock;
                fromPartial(object: Partial<_106.MissedBlock>): _106.MissedBlock;
                fromAmino(object: _106.MissedBlockAmino): _106.MissedBlock;
                toAmino(message: _106.MissedBlock): _106.MissedBlockAmino;
                fromAminoMsg(object: _106.MissedBlockAminoMsg): _106.MissedBlock;
                toAminoMsg(message: _106.MissedBlock): _106.MissedBlockAminoMsg;
                fromProtoMsg(message: _106.MissedBlockProtoMsg): _106.MissedBlock;
                toProto(message: _106.MissedBlock): Uint8Array;
                toProtoMsg(message: _106.MissedBlock): _106.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
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
            LCDQueryClient: typeof _210.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
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
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _113.BondStatus;
            bondStatusToJSON(object: _113.BondStatus): string;
            BondStatus: typeof _113.BondStatus;
            BondStatusSDKType: typeof _113.BondStatus;
            BondStatusAmino: typeof _113.BondStatus;
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
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _115.SignMode;
                signModeToJSON(object: _115.SignMode): string;
                SignMode: typeof _115.SignMode;
                SignModeSDKType: typeof _115.SignMode;
                SignModeAmino: typeof _115.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _115.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.SignatureDescriptors;
                    fromPartial(object: Partial<_115.SignatureDescriptors>): _115.SignatureDescriptors;
                    fromAmino(object: _115.SignatureDescriptorsAmino): _115.SignatureDescriptors;
                    toAmino(message: _115.SignatureDescriptors): _115.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _115.SignatureDescriptorsAminoMsg): _115.SignatureDescriptors;
                    toAminoMsg(message: _115.SignatureDescriptors): _115.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _115.SignatureDescriptorsProtoMsg): _115.SignatureDescriptors;
                    toProto(message: _115.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _115.SignatureDescriptors): _115.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _115.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.SignatureDescriptor;
                    fromPartial(object: Partial<_115.SignatureDescriptor>): _115.SignatureDescriptor;
                    fromAmino(object: _115.SignatureDescriptorAmino): _115.SignatureDescriptor;
                    toAmino(message: _115.SignatureDescriptor): _115.SignatureDescriptorAmino;
                    fromAminoMsg(object: _115.SignatureDescriptorAminoMsg): _115.SignatureDescriptor;
                    toAminoMsg(message: _115.SignatureDescriptor): _115.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _115.SignatureDescriptorProtoMsg): _115.SignatureDescriptor;
                    toProto(message: _115.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _115.SignatureDescriptor): _115.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _115.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_115.SignatureDescriptor_Data>): _115.SignatureDescriptor_Data;
                    fromAmino(object: _115.SignatureDescriptor_DataAmino): _115.SignatureDescriptor_Data;
                    toAmino(message: _115.SignatureDescriptor_Data): _115.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _115.SignatureDescriptor_DataAminoMsg): _115.SignatureDescriptor_Data;
                    toAminoMsg(message: _115.SignatureDescriptor_Data): _115.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _115.SignatureDescriptor_DataProtoMsg): _115.SignatureDescriptor_Data;
                    toProto(message: _115.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _115.SignatureDescriptor_Data): _115.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _115.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_115.SignatureDescriptor_Data_Single>): _115.SignatureDescriptor_Data_Single;
                    fromAmino(object: _115.SignatureDescriptor_Data_SingleAmino): _115.SignatureDescriptor_Data_Single;
                    toAmino(message: _115.SignatureDescriptor_Data_Single): _115.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _115.SignatureDescriptor_Data_SingleAminoMsg): _115.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _115.SignatureDescriptor_Data_Single): _115.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _115.SignatureDescriptor_Data_SingleProtoMsg): _115.SignatureDescriptor_Data_Single;
                    toProto(message: _115.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _115.SignatureDescriptor_Data_Single): _115.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _115.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_115.SignatureDescriptor_Data_Multi>): _115.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _115.SignatureDescriptor_Data_MultiAmino): _115.SignatureDescriptor_Data_Multi;
                    toAmino(message: _115.SignatureDescriptor_Data_Multi): _115.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _115.SignatureDescriptor_Data_MultiAminoMsg): _115.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _115.SignatureDescriptor_Data_Multi): _115.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _115.SignatureDescriptor_Data_MultiProtoMsg): _115.SignatureDescriptor_Data_Multi;
                    toProto(message: _115.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _115.SignatureDescriptor_Data_Multi): _115.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _230.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _116.SimulateRequest): Promise<_116.SimulateResponse>;
                getTx(request: _116.GetTxRequest): Promise<_116.GetTxResponse>;
                broadcastTx(request: _116.BroadcastTxRequest): Promise<_116.BroadcastTxResponse>;
                getTxsEvent(request: _116.GetTxsEventRequest): Promise<_116.GetTxsEventResponse>;
                getBlockWithTxs(request: _116.GetBlockWithTxsRequest): Promise<_116.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _211.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _117.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Tx;
                fromPartial(object: Partial<_117.Tx>): _117.Tx;
                fromAmino(object: _117.TxAmino): _117.Tx;
                toAmino(message: _117.Tx): _117.TxAmino;
                fromAminoMsg(object: _117.TxAminoMsg): _117.Tx;
                toAminoMsg(message: _117.Tx): _117.TxAminoMsg;
                fromProtoMsg(message: _117.TxProtoMsg): _117.Tx;
                toProto(message: _117.Tx): Uint8Array;
                toProtoMsg(message: _117.Tx): _117.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _117.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxRaw;
                fromPartial(object: Partial<_117.TxRaw>): _117.TxRaw;
                fromAmino(object: _117.TxRawAmino): _117.TxRaw;
                toAmino(message: _117.TxRaw): _117.TxRawAmino;
                fromAminoMsg(object: _117.TxRawAminoMsg): _117.TxRaw;
                toAminoMsg(message: _117.TxRaw): _117.TxRawAminoMsg;
                fromProtoMsg(message: _117.TxRawProtoMsg): _117.TxRaw;
                toProto(message: _117.TxRaw): Uint8Array;
                toProtoMsg(message: _117.TxRaw): _117.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _117.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SignDoc;
                fromPartial(object: Partial<_117.SignDoc>): _117.SignDoc;
                fromAmino(object: _117.SignDocAmino): _117.SignDoc;
                toAmino(message: _117.SignDoc): _117.SignDocAmino;
                fromAminoMsg(object: _117.SignDocAminoMsg): _117.SignDoc;
                toAminoMsg(message: _117.SignDoc): _117.SignDocAminoMsg;
                fromProtoMsg(message: _117.SignDocProtoMsg): _117.SignDoc;
                toProto(message: _117.SignDoc): Uint8Array;
                toProtoMsg(message: _117.SignDoc): _117.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _117.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SignDocDirectAux;
                fromPartial(object: Partial<_117.SignDocDirectAux>): _117.SignDocDirectAux;
                fromAmino(object: _117.SignDocDirectAuxAmino): _117.SignDocDirectAux;
                toAmino(message: _117.SignDocDirectAux): _117.SignDocDirectAuxAmino;
                fromAminoMsg(object: _117.SignDocDirectAuxAminoMsg): _117.SignDocDirectAux;
                toAminoMsg(message: _117.SignDocDirectAux): _117.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _117.SignDocDirectAuxProtoMsg): _117.SignDocDirectAux;
                toProto(message: _117.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _117.SignDocDirectAux): _117.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _117.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxBody;
                fromPartial(object: Partial<_117.TxBody>): _117.TxBody;
                fromAmino(object: _117.TxBodyAmino): _117.TxBody;
                toAmino(message: _117.TxBody): _117.TxBodyAmino;
                fromAminoMsg(object: _117.TxBodyAminoMsg): _117.TxBody;
                toAminoMsg(message: _117.TxBody): _117.TxBodyAminoMsg;
                fromProtoMsg(message: _117.TxBodyProtoMsg): _117.TxBody;
                toProto(message: _117.TxBody): Uint8Array;
                toProtoMsg(message: _117.TxBody): _117.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _117.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.AuthInfo;
                fromPartial(object: Partial<_117.AuthInfo>): _117.AuthInfo;
                fromAmino(object: _117.AuthInfoAmino): _117.AuthInfo;
                toAmino(message: _117.AuthInfo): _117.AuthInfoAmino;
                fromAminoMsg(object: _117.AuthInfoAminoMsg): _117.AuthInfo;
                toAminoMsg(message: _117.AuthInfo): _117.AuthInfoAminoMsg;
                fromProtoMsg(message: _117.AuthInfoProtoMsg): _117.AuthInfo;
                toProto(message: _117.AuthInfo): Uint8Array;
                toProtoMsg(message: _117.AuthInfo): _117.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _117.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SignerInfo;
                fromPartial(object: Partial<_117.SignerInfo>): _117.SignerInfo;
                fromAmino(object: _117.SignerInfoAmino): _117.SignerInfo;
                toAmino(message: _117.SignerInfo): _117.SignerInfoAmino;
                fromAminoMsg(object: _117.SignerInfoAminoMsg): _117.SignerInfo;
                toAminoMsg(message: _117.SignerInfo): _117.SignerInfoAminoMsg;
                fromProtoMsg(message: _117.SignerInfoProtoMsg): _117.SignerInfo;
                toProto(message: _117.SignerInfo): Uint8Array;
                toProtoMsg(message: _117.SignerInfo): _117.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _117.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.ModeInfo;
                fromPartial(object: Partial<_117.ModeInfo>): _117.ModeInfo;
                fromAmino(object: _117.ModeInfoAmino): _117.ModeInfo;
                toAmino(message: _117.ModeInfo): _117.ModeInfoAmino;
                fromAminoMsg(object: _117.ModeInfoAminoMsg): _117.ModeInfo;
                toAminoMsg(message: _117.ModeInfo): _117.ModeInfoAminoMsg;
                fromProtoMsg(message: _117.ModeInfoProtoMsg): _117.ModeInfo;
                toProto(message: _117.ModeInfo): Uint8Array;
                toProtoMsg(message: _117.ModeInfo): _117.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _117.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.ModeInfo_Single;
                fromPartial(object: Partial<_117.ModeInfo_Single>): _117.ModeInfo_Single;
                fromAmino(object: _117.ModeInfo_SingleAmino): _117.ModeInfo_Single;
                toAmino(message: _117.ModeInfo_Single): _117.ModeInfo_SingleAmino;
                fromAminoMsg(object: _117.ModeInfo_SingleAminoMsg): _117.ModeInfo_Single;
                toAminoMsg(message: _117.ModeInfo_Single): _117.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _117.ModeInfo_SingleProtoMsg): _117.ModeInfo_Single;
                toProto(message: _117.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _117.ModeInfo_Single): _117.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _117.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.ModeInfo_Multi;
                fromPartial(object: Partial<_117.ModeInfo_Multi>): _117.ModeInfo_Multi;
                fromAmino(object: _117.ModeInfo_MultiAmino): _117.ModeInfo_Multi;
                toAmino(message: _117.ModeInfo_Multi): _117.ModeInfo_MultiAmino;
                fromAminoMsg(object: _117.ModeInfo_MultiAminoMsg): _117.ModeInfo_Multi;
                toAminoMsg(message: _117.ModeInfo_Multi): _117.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _117.ModeInfo_MultiProtoMsg): _117.ModeInfo_Multi;
                toProto(message: _117.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _117.ModeInfo_Multi): _117.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _117.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Fee;
                fromPartial(object: Partial<_117.Fee>): _117.Fee;
                fromAmino(object: _117.FeeAmino): _117.Fee;
                toAmino(message: _117.Fee): _117.FeeAmino;
                fromAminoMsg(object: _117.FeeAminoMsg): _117.Fee;
                toAminoMsg(message: _117.Fee): _117.FeeAminoMsg;
                fromProtoMsg(message: _117.FeeProtoMsg): _117.Fee;
                toProto(message: _117.Fee): Uint8Array;
                toProtoMsg(message: _117.Fee): _117.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _117.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Tip;
                fromPartial(object: Partial<_117.Tip>): _117.Tip;
                fromAmino(object: _117.TipAmino): _117.Tip;
                toAmino(message: _117.Tip): _117.TipAmino;
                fromAminoMsg(object: _117.TipAminoMsg): _117.Tip;
                toAminoMsg(message: _117.Tip): _117.TipAminoMsg;
                fromProtoMsg(message: _117.TipProtoMsg): _117.Tip;
                toProto(message: _117.Tip): Uint8Array;
                toProtoMsg(message: _117.Tip): _117.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _117.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.AuxSignerData;
                fromPartial(object: Partial<_117.AuxSignerData>): _117.AuxSignerData;
                fromAmino(object: _117.AuxSignerDataAmino): _117.AuxSignerData;
                toAmino(message: _117.AuxSignerData): _117.AuxSignerDataAmino;
                fromAminoMsg(object: _117.AuxSignerDataAminoMsg): _117.AuxSignerData;
                toAminoMsg(message: _117.AuxSignerData): _117.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _117.AuxSignerDataProtoMsg): _117.AuxSignerData;
                toProto(message: _117.AuxSignerData): Uint8Array;
                toProtoMsg(message: _117.AuxSignerData): _117.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _116.OrderBy;
            orderByToJSON(object: _116.OrderBy): string;
            broadcastModeFromJSON(object: any): _116.BroadcastMode;
            broadcastModeToJSON(object: _116.BroadcastMode): string;
            OrderBy: typeof _116.OrderBy;
            OrderBySDKType: typeof _116.OrderBy;
            OrderByAmino: typeof _116.OrderBy;
            BroadcastMode: typeof _116.BroadcastMode;
            BroadcastModeSDKType: typeof _116.BroadcastMode;
            BroadcastModeAmino: typeof _116.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _116.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetTxsEventRequest;
                fromPartial(object: Partial<_116.GetTxsEventRequest>): _116.GetTxsEventRequest;
                fromAmino(object: _116.GetTxsEventRequestAmino): _116.GetTxsEventRequest;
                toAmino(message: _116.GetTxsEventRequest): _116.GetTxsEventRequestAmino;
                fromAminoMsg(object: _116.GetTxsEventRequestAminoMsg): _116.GetTxsEventRequest;
                toAminoMsg(message: _116.GetTxsEventRequest): _116.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _116.GetTxsEventRequestProtoMsg): _116.GetTxsEventRequest;
                toProto(message: _116.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _116.GetTxsEventRequest): _116.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _116.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetTxsEventResponse;
                fromPartial(object: Partial<_116.GetTxsEventResponse>): _116.GetTxsEventResponse;
                fromAmino(object: _116.GetTxsEventResponseAmino): _116.GetTxsEventResponse;
                toAmino(message: _116.GetTxsEventResponse): _116.GetTxsEventResponseAmino;
                fromAminoMsg(object: _116.GetTxsEventResponseAminoMsg): _116.GetTxsEventResponse;
                toAminoMsg(message: _116.GetTxsEventResponse): _116.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _116.GetTxsEventResponseProtoMsg): _116.GetTxsEventResponse;
                toProto(message: _116.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _116.GetTxsEventResponse): _116.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _116.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.BroadcastTxRequest;
                fromPartial(object: Partial<_116.BroadcastTxRequest>): _116.BroadcastTxRequest;
                fromAmino(object: _116.BroadcastTxRequestAmino): _116.BroadcastTxRequest;
                toAmino(message: _116.BroadcastTxRequest): _116.BroadcastTxRequestAmino;
                fromAminoMsg(object: _116.BroadcastTxRequestAminoMsg): _116.BroadcastTxRequest;
                toAminoMsg(message: _116.BroadcastTxRequest): _116.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _116.BroadcastTxRequestProtoMsg): _116.BroadcastTxRequest;
                toProto(message: _116.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _116.BroadcastTxRequest): _116.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _116.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.BroadcastTxResponse;
                fromPartial(object: Partial<_116.BroadcastTxResponse>): _116.BroadcastTxResponse;
                fromAmino(object: _116.BroadcastTxResponseAmino): _116.BroadcastTxResponse;
                toAmino(message: _116.BroadcastTxResponse): _116.BroadcastTxResponseAmino;
                fromAminoMsg(object: _116.BroadcastTxResponseAminoMsg): _116.BroadcastTxResponse;
                toAminoMsg(message: _116.BroadcastTxResponse): _116.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _116.BroadcastTxResponseProtoMsg): _116.BroadcastTxResponse;
                toProto(message: _116.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _116.BroadcastTxResponse): _116.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _116.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.SimulateRequest;
                fromPartial(object: Partial<_116.SimulateRequest>): _116.SimulateRequest;
                fromAmino(object: _116.SimulateRequestAmino): _116.SimulateRequest;
                toAmino(message: _116.SimulateRequest): _116.SimulateRequestAmino;
                fromAminoMsg(object: _116.SimulateRequestAminoMsg): _116.SimulateRequest;
                toAminoMsg(message: _116.SimulateRequest): _116.SimulateRequestAminoMsg;
                fromProtoMsg(message: _116.SimulateRequestProtoMsg): _116.SimulateRequest;
                toProto(message: _116.SimulateRequest): Uint8Array;
                toProtoMsg(message: _116.SimulateRequest): _116.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _116.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.SimulateResponse;
                fromPartial(object: Partial<_116.SimulateResponse>): _116.SimulateResponse;
                fromAmino(object: _116.SimulateResponseAmino): _116.SimulateResponse;
                toAmino(message: _116.SimulateResponse): _116.SimulateResponseAmino;
                fromAminoMsg(object: _116.SimulateResponseAminoMsg): _116.SimulateResponse;
                toAminoMsg(message: _116.SimulateResponse): _116.SimulateResponseAminoMsg;
                fromProtoMsg(message: _116.SimulateResponseProtoMsg): _116.SimulateResponse;
                toProto(message: _116.SimulateResponse): Uint8Array;
                toProtoMsg(message: _116.SimulateResponse): _116.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _116.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetTxRequest;
                fromPartial(object: Partial<_116.GetTxRequest>): _116.GetTxRequest;
                fromAmino(object: _116.GetTxRequestAmino): _116.GetTxRequest;
                toAmino(message: _116.GetTxRequest): _116.GetTxRequestAmino;
                fromAminoMsg(object: _116.GetTxRequestAminoMsg): _116.GetTxRequest;
                toAminoMsg(message: _116.GetTxRequest): _116.GetTxRequestAminoMsg;
                fromProtoMsg(message: _116.GetTxRequestProtoMsg): _116.GetTxRequest;
                toProto(message: _116.GetTxRequest): Uint8Array;
                toProtoMsg(message: _116.GetTxRequest): _116.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _116.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetTxResponse;
                fromPartial(object: Partial<_116.GetTxResponse>): _116.GetTxResponse;
                fromAmino(object: _116.GetTxResponseAmino): _116.GetTxResponse;
                toAmino(message: _116.GetTxResponse): _116.GetTxResponseAmino;
                fromAminoMsg(object: _116.GetTxResponseAminoMsg): _116.GetTxResponse;
                toAminoMsg(message: _116.GetTxResponse): _116.GetTxResponseAminoMsg;
                fromProtoMsg(message: _116.GetTxResponseProtoMsg): _116.GetTxResponse;
                toProto(message: _116.GetTxResponse): Uint8Array;
                toProtoMsg(message: _116.GetTxResponse): _116.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _116.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_116.GetBlockWithTxsRequest>): _116.GetBlockWithTxsRequest;
                fromAmino(object: _116.GetBlockWithTxsRequestAmino): _116.GetBlockWithTxsRequest;
                toAmino(message: _116.GetBlockWithTxsRequest): _116.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _116.GetBlockWithTxsRequestAminoMsg): _116.GetBlockWithTxsRequest;
                toAminoMsg(message: _116.GetBlockWithTxsRequest): _116.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _116.GetBlockWithTxsRequestProtoMsg): _116.GetBlockWithTxsRequest;
                toProto(message: _116.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _116.GetBlockWithTxsRequest): _116.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _116.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_116.GetBlockWithTxsResponse>): _116.GetBlockWithTxsResponse;
                fromAmino(object: _116.GetBlockWithTxsResponseAmino): _116.GetBlockWithTxsResponse;
                toAmino(message: _116.GetBlockWithTxsResponse): _116.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _116.GetBlockWithTxsResponseAminoMsg): _116.GetBlockWithTxsResponse;
                toAminoMsg(message: _116.GetBlockWithTxsResponse): _116.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _116.GetBlockWithTxsResponseProtoMsg): _116.GetBlockWithTxsResponse;
                toProto(message: _116.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _116.GetBlockWithTxsResponse): _116.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _118.QueryCurrentPlanRequest): Promise<_118.QueryCurrentPlanResponse>;
                appliedPlan(request: _118.QueryAppliedPlanRequest): Promise<_118.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _118.QueryUpgradedConsensusStateRequest): Promise<_118.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _118.QueryModuleVersionsRequest): Promise<_118.QueryModuleVersionsResponse>;
                authority(request?: _118.QueryAuthorityRequest): Promise<_118.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _212.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _119.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _119.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _119.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _119.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _119.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _119.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _119.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _119.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _119.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _119.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _119.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _119.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _119.MsgSoftwareUpgrade) => _119.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _119.MsgSoftwareUpgradeAmino) => _119.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _119.MsgCancelUpgrade) => _119.MsgCancelUpgradeAmino;
                    fromAmino: (object: _119.MsgCancelUpgradeAmino) => _119.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _120.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.Plan;
                fromPartial(object: Partial<_120.Plan>): _120.Plan;
                fromAmino(object: _120.PlanAmino): _120.Plan;
                toAmino(message: _120.Plan): _120.PlanAmino;
                fromAminoMsg(object: _120.PlanAminoMsg): _120.Plan;
                toAminoMsg(message: _120.Plan): _120.PlanAminoMsg;
                fromProtoMsg(message: _120.PlanProtoMsg): _120.Plan;
                toProto(message: _120.Plan): Uint8Array;
                toProtoMsg(message: _120.Plan): _120.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _120.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_120.SoftwareUpgradeProposal>): _120.SoftwareUpgradeProposal;
                fromAmino(object: _120.SoftwareUpgradeProposalAmino): _120.SoftwareUpgradeProposal;
                toAmino(message: _120.SoftwareUpgradeProposal): _120.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _120.SoftwareUpgradeProposalAminoMsg): _120.SoftwareUpgradeProposal;
                toAminoMsg(message: _120.SoftwareUpgradeProposal): _120.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _120.SoftwareUpgradeProposalProtoMsg): _120.SoftwareUpgradeProposal;
                toProto(message: _120.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _120.SoftwareUpgradeProposal): _120.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _120.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_120.CancelSoftwareUpgradeProposal>): _120.CancelSoftwareUpgradeProposal;
                fromAmino(object: _120.CancelSoftwareUpgradeProposalAmino): _120.CancelSoftwareUpgradeProposal;
                toAmino(message: _120.CancelSoftwareUpgradeProposal): _120.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _120.CancelSoftwareUpgradeProposalAminoMsg): _120.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _120.CancelSoftwareUpgradeProposal): _120.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _120.CancelSoftwareUpgradeProposalProtoMsg): _120.CancelSoftwareUpgradeProposal;
                toProto(message: _120.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _120.CancelSoftwareUpgradeProposal): _120.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _120.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ModuleVersion;
                fromPartial(object: Partial<_120.ModuleVersion>): _120.ModuleVersion;
                fromAmino(object: _120.ModuleVersionAmino): _120.ModuleVersion;
                toAmino(message: _120.ModuleVersion): _120.ModuleVersionAmino;
                fromAminoMsg(object: _120.ModuleVersionAminoMsg): _120.ModuleVersion;
                toAminoMsg(message: _120.ModuleVersion): _120.ModuleVersionAminoMsg;
                fromProtoMsg(message: _120.ModuleVersionProtoMsg): _120.ModuleVersion;
                toProto(message: _120.ModuleVersion): Uint8Array;
                toProtoMsg(message: _120.ModuleVersion): _120.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _119.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_119.MsgSoftwareUpgrade>): _119.MsgSoftwareUpgrade;
                fromAmino(object: _119.MsgSoftwareUpgradeAmino): _119.MsgSoftwareUpgrade;
                toAmino(message: _119.MsgSoftwareUpgrade): _119.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _119.MsgSoftwareUpgradeAminoMsg): _119.MsgSoftwareUpgrade;
                toAminoMsg(message: _119.MsgSoftwareUpgrade): _119.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _119.MsgSoftwareUpgradeProtoMsg): _119.MsgSoftwareUpgrade;
                toProto(message: _119.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _119.MsgSoftwareUpgrade): _119.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _119.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _119.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_119.MsgSoftwareUpgradeResponse>): _119.MsgSoftwareUpgradeResponse;
                fromAmino(_: _119.MsgSoftwareUpgradeResponseAmino): _119.MsgSoftwareUpgradeResponse;
                toAmino(_: _119.MsgSoftwareUpgradeResponse): _119.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _119.MsgSoftwareUpgradeResponseAminoMsg): _119.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _119.MsgSoftwareUpgradeResponse): _119.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _119.MsgSoftwareUpgradeResponseProtoMsg): _119.MsgSoftwareUpgradeResponse;
                toProto(message: _119.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _119.MsgSoftwareUpgradeResponse): _119.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _119.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.MsgCancelUpgrade;
                fromPartial(object: Partial<_119.MsgCancelUpgrade>): _119.MsgCancelUpgrade;
                fromAmino(object: _119.MsgCancelUpgradeAmino): _119.MsgCancelUpgrade;
                toAmino(message: _119.MsgCancelUpgrade): _119.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _119.MsgCancelUpgradeAminoMsg): _119.MsgCancelUpgrade;
                toAminoMsg(message: _119.MsgCancelUpgrade): _119.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _119.MsgCancelUpgradeProtoMsg): _119.MsgCancelUpgrade;
                toProto(message: _119.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _119.MsgCancelUpgrade): _119.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _119.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _119.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_119.MsgCancelUpgradeResponse>): _119.MsgCancelUpgradeResponse;
                fromAmino(_: _119.MsgCancelUpgradeResponseAmino): _119.MsgCancelUpgradeResponse;
                toAmino(_: _119.MsgCancelUpgradeResponse): _119.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _119.MsgCancelUpgradeResponseAminoMsg): _119.MsgCancelUpgradeResponse;
                toAminoMsg(message: _119.MsgCancelUpgradeResponse): _119.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _119.MsgCancelUpgradeResponseProtoMsg): _119.MsgCancelUpgradeResponse;
                toProto(message: _119.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _119.MsgCancelUpgradeResponse): _119.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _118.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_118.QueryCurrentPlanRequest>): _118.QueryCurrentPlanRequest;
                fromAmino(_: _118.QueryCurrentPlanRequestAmino): _118.QueryCurrentPlanRequest;
                toAmino(_: _118.QueryCurrentPlanRequest): _118.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _118.QueryCurrentPlanRequestAminoMsg): _118.QueryCurrentPlanRequest;
                toAminoMsg(message: _118.QueryCurrentPlanRequest): _118.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _118.QueryCurrentPlanRequestProtoMsg): _118.QueryCurrentPlanRequest;
                toProto(message: _118.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _118.QueryCurrentPlanRequest): _118.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _118.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_118.QueryCurrentPlanResponse>): _118.QueryCurrentPlanResponse;
                fromAmino(object: _118.QueryCurrentPlanResponseAmino): _118.QueryCurrentPlanResponse;
                toAmino(message: _118.QueryCurrentPlanResponse): _118.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _118.QueryCurrentPlanResponseAminoMsg): _118.QueryCurrentPlanResponse;
                toAminoMsg(message: _118.QueryCurrentPlanResponse): _118.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _118.QueryCurrentPlanResponseProtoMsg): _118.QueryCurrentPlanResponse;
                toProto(message: _118.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _118.QueryCurrentPlanResponse): _118.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _118.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_118.QueryAppliedPlanRequest>): _118.QueryAppliedPlanRequest;
                fromAmino(object: _118.QueryAppliedPlanRequestAmino): _118.QueryAppliedPlanRequest;
                toAmino(message: _118.QueryAppliedPlanRequest): _118.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _118.QueryAppliedPlanRequestAminoMsg): _118.QueryAppliedPlanRequest;
                toAminoMsg(message: _118.QueryAppliedPlanRequest): _118.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _118.QueryAppliedPlanRequestProtoMsg): _118.QueryAppliedPlanRequest;
                toProto(message: _118.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _118.QueryAppliedPlanRequest): _118.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _118.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_118.QueryAppliedPlanResponse>): _118.QueryAppliedPlanResponse;
                fromAmino(object: _118.QueryAppliedPlanResponseAmino): _118.QueryAppliedPlanResponse;
                toAmino(message: _118.QueryAppliedPlanResponse): _118.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _118.QueryAppliedPlanResponseAminoMsg): _118.QueryAppliedPlanResponse;
                toAminoMsg(message: _118.QueryAppliedPlanResponse): _118.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _118.QueryAppliedPlanResponseProtoMsg): _118.QueryAppliedPlanResponse;
                toProto(message: _118.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _118.QueryAppliedPlanResponse): _118.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _118.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_118.QueryUpgradedConsensusStateRequest>): _118.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _118.QueryUpgradedConsensusStateRequestAmino): _118.QueryUpgradedConsensusStateRequest;
                toAmino(message: _118.QueryUpgradedConsensusStateRequest): _118.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _118.QueryUpgradedConsensusStateRequestAminoMsg): _118.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _118.QueryUpgradedConsensusStateRequest): _118.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _118.QueryUpgradedConsensusStateRequestProtoMsg): _118.QueryUpgradedConsensusStateRequest;
                toProto(message: _118.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _118.QueryUpgradedConsensusStateRequest): _118.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _118.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_118.QueryUpgradedConsensusStateResponse>): _118.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _118.QueryUpgradedConsensusStateResponseAmino): _118.QueryUpgradedConsensusStateResponse;
                toAmino(message: _118.QueryUpgradedConsensusStateResponse): _118.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _118.QueryUpgradedConsensusStateResponseAminoMsg): _118.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _118.QueryUpgradedConsensusStateResponse): _118.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _118.QueryUpgradedConsensusStateResponseProtoMsg): _118.QueryUpgradedConsensusStateResponse;
                toProto(message: _118.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _118.QueryUpgradedConsensusStateResponse): _118.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _118.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_118.QueryModuleVersionsRequest>): _118.QueryModuleVersionsRequest;
                fromAmino(object: _118.QueryModuleVersionsRequestAmino): _118.QueryModuleVersionsRequest;
                toAmino(message: _118.QueryModuleVersionsRequest): _118.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _118.QueryModuleVersionsRequestAminoMsg): _118.QueryModuleVersionsRequest;
                toAminoMsg(message: _118.QueryModuleVersionsRequest): _118.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryModuleVersionsRequestProtoMsg): _118.QueryModuleVersionsRequest;
                toProto(message: _118.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryModuleVersionsRequest): _118.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _118.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_118.QueryModuleVersionsResponse>): _118.QueryModuleVersionsResponse;
                fromAmino(object: _118.QueryModuleVersionsResponseAmino): _118.QueryModuleVersionsResponse;
                toAmino(message: _118.QueryModuleVersionsResponse): _118.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _118.QueryModuleVersionsResponseAminoMsg): _118.QueryModuleVersionsResponse;
                toAminoMsg(message: _118.QueryModuleVersionsResponse): _118.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryModuleVersionsResponseProtoMsg): _118.QueryModuleVersionsResponse;
                toProto(message: _118.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryModuleVersionsResponse): _118.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _118.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.QueryAuthorityRequest;
                fromPartial(_: Partial<_118.QueryAuthorityRequest>): _118.QueryAuthorityRequest;
                fromAmino(_: _118.QueryAuthorityRequestAmino): _118.QueryAuthorityRequest;
                toAmino(_: _118.QueryAuthorityRequest): _118.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _118.QueryAuthorityRequestAminoMsg): _118.QueryAuthorityRequest;
                toAminoMsg(message: _118.QueryAuthorityRequest): _118.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _118.QueryAuthorityRequestProtoMsg): _118.QueryAuthorityRequest;
                toProto(message: _118.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _118.QueryAuthorityRequest): _118.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _118.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryAuthorityResponse;
                fromPartial(object: Partial<_118.QueryAuthorityResponse>): _118.QueryAuthorityResponse;
                fromAmino(object: _118.QueryAuthorityResponseAmino): _118.QueryAuthorityResponse;
                toAmino(message: _118.QueryAuthorityResponse): _118.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _118.QueryAuthorityResponseAminoMsg): _118.QueryAuthorityResponse;
                toAminoMsg(message: _118.QueryAuthorityResponse): _118.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _118.QueryAuthorityResponseProtoMsg): _118.QueryAuthorityResponse;
                toProto(message: _118.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _118.QueryAuthorityResponse): _118.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _245.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _121.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _121.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _121.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _121.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _121.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _121.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _121.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _121.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _121.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _121.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _121.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _121.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _121.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _121.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _121.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _121.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _121.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _121.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _121.MsgCreateVestingAccount) => _121.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _121.MsgCreateVestingAccountAmino) => _121.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _121.MsgCreatePermanentLockedAccount) => _121.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _121.MsgCreatePermanentLockedAccountAmino) => _121.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _121.MsgCreatePeriodicVestingAccount) => _121.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _121.MsgCreatePeriodicVestingAccountAmino) => _121.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _122.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.BaseVestingAccount;
                fromPartial(object: Partial<_122.BaseVestingAccount>): _122.BaseVestingAccount;
                fromAmino(object: _122.BaseVestingAccountAmino): _122.BaseVestingAccount;
                toAmino(message: _122.BaseVestingAccount): _122.BaseVestingAccountAmino;
                fromAminoMsg(object: _122.BaseVestingAccountAminoMsg): _122.BaseVestingAccount;
                toAminoMsg(message: _122.BaseVestingAccount): _122.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _122.BaseVestingAccountProtoMsg): _122.BaseVestingAccount;
                toProto(message: _122.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _122.BaseVestingAccount): _122.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _122.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ContinuousVestingAccount;
                fromPartial(object: Partial<_122.ContinuousVestingAccount>): _122.ContinuousVestingAccount;
                fromAmino(object: _122.ContinuousVestingAccountAmino): _122.ContinuousVestingAccount;
                toAmino(message: _122.ContinuousVestingAccount): _122.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _122.ContinuousVestingAccountAminoMsg): _122.ContinuousVestingAccount;
                toAminoMsg(message: _122.ContinuousVestingAccount): _122.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _122.ContinuousVestingAccountProtoMsg): _122.ContinuousVestingAccount;
                toProto(message: _122.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _122.ContinuousVestingAccount): _122.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _122.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.DelayedVestingAccount;
                fromPartial(object: Partial<_122.DelayedVestingAccount>): _122.DelayedVestingAccount;
                fromAmino(object: _122.DelayedVestingAccountAmino): _122.DelayedVestingAccount;
                toAmino(message: _122.DelayedVestingAccount): _122.DelayedVestingAccountAmino;
                fromAminoMsg(object: _122.DelayedVestingAccountAminoMsg): _122.DelayedVestingAccount;
                toAminoMsg(message: _122.DelayedVestingAccount): _122.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _122.DelayedVestingAccountProtoMsg): _122.DelayedVestingAccount;
                toProto(message: _122.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _122.DelayedVestingAccount): _122.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _122.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Period;
                fromPartial(object: Partial<_122.Period>): _122.Period;
                fromAmino(object: _122.PeriodAmino): _122.Period;
                toAmino(message: _122.Period): _122.PeriodAmino;
                fromAminoMsg(object: _122.PeriodAminoMsg): _122.Period;
                toAminoMsg(message: _122.Period): _122.PeriodAminoMsg;
                fromProtoMsg(message: _122.PeriodProtoMsg): _122.Period;
                toProto(message: _122.Period): Uint8Array;
                toProtoMsg(message: _122.Period): _122.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _122.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.PeriodicVestingAccount;
                fromPartial(object: Partial<_122.PeriodicVestingAccount>): _122.PeriodicVestingAccount;
                fromAmino(object: _122.PeriodicVestingAccountAmino): _122.PeriodicVestingAccount;
                toAmino(message: _122.PeriodicVestingAccount): _122.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _122.PeriodicVestingAccountAminoMsg): _122.PeriodicVestingAccount;
                toAminoMsg(message: _122.PeriodicVestingAccount): _122.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _122.PeriodicVestingAccountProtoMsg): _122.PeriodicVestingAccount;
                toProto(message: _122.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _122.PeriodicVestingAccount): _122.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _122.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.PermanentLockedAccount;
                fromPartial(object: Partial<_122.PermanentLockedAccount>): _122.PermanentLockedAccount;
                fromAmino(object: _122.PermanentLockedAccountAmino): _122.PermanentLockedAccount;
                toAmino(message: _122.PermanentLockedAccount): _122.PermanentLockedAccountAmino;
                fromAminoMsg(object: _122.PermanentLockedAccountAminoMsg): _122.PermanentLockedAccount;
                toAminoMsg(message: _122.PermanentLockedAccount): _122.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _122.PermanentLockedAccountProtoMsg): _122.PermanentLockedAccount;
                toProto(message: _122.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _122.PermanentLockedAccount): _122.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _121.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgCreateVestingAccount;
                fromPartial(object: Partial<_121.MsgCreateVestingAccount>): _121.MsgCreateVestingAccount;
                fromAmino(object: _121.MsgCreateVestingAccountAmino): _121.MsgCreateVestingAccount;
                toAmino(message: _121.MsgCreateVestingAccount): _121.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _121.MsgCreateVestingAccountAminoMsg): _121.MsgCreateVestingAccount;
                toAminoMsg(message: _121.MsgCreateVestingAccount): _121.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _121.MsgCreateVestingAccountProtoMsg): _121.MsgCreateVestingAccount;
                toProto(message: _121.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _121.MsgCreateVestingAccount): _121.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _121.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_121.MsgCreateVestingAccountResponse>): _121.MsgCreateVestingAccountResponse;
                fromAmino(_: _121.MsgCreateVestingAccountResponseAmino): _121.MsgCreateVestingAccountResponse;
                toAmino(_: _121.MsgCreateVestingAccountResponse): _121.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _121.MsgCreateVestingAccountResponseAminoMsg): _121.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _121.MsgCreateVestingAccountResponse): _121.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _121.MsgCreateVestingAccountResponseProtoMsg): _121.MsgCreateVestingAccountResponse;
                toProto(message: _121.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _121.MsgCreateVestingAccountResponse): _121.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _121.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_121.MsgCreatePermanentLockedAccount>): _121.MsgCreatePermanentLockedAccount;
                fromAmino(object: _121.MsgCreatePermanentLockedAccountAmino): _121.MsgCreatePermanentLockedAccount;
                toAmino(message: _121.MsgCreatePermanentLockedAccount): _121.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _121.MsgCreatePermanentLockedAccountAminoMsg): _121.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _121.MsgCreatePermanentLockedAccount): _121.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _121.MsgCreatePermanentLockedAccountProtoMsg): _121.MsgCreatePermanentLockedAccount;
                toProto(message: _121.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _121.MsgCreatePermanentLockedAccount): _121.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _121.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_121.MsgCreatePermanentLockedAccountResponse>): _121.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _121.MsgCreatePermanentLockedAccountResponseAmino): _121.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _121.MsgCreatePermanentLockedAccountResponse): _121.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _121.MsgCreatePermanentLockedAccountResponseAminoMsg): _121.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _121.MsgCreatePermanentLockedAccountResponse): _121.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _121.MsgCreatePermanentLockedAccountResponseProtoMsg): _121.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _121.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _121.MsgCreatePermanentLockedAccountResponse): _121.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _121.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_121.MsgCreatePeriodicVestingAccount>): _121.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _121.MsgCreatePeriodicVestingAccountAmino): _121.MsgCreatePeriodicVestingAccount;
                toAmino(message: _121.MsgCreatePeriodicVestingAccount): _121.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _121.MsgCreatePeriodicVestingAccountAminoMsg): _121.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _121.MsgCreatePeriodicVestingAccount): _121.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _121.MsgCreatePeriodicVestingAccountProtoMsg): _121.MsgCreatePeriodicVestingAccount;
                toProto(message: _121.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _121.MsgCreatePeriodicVestingAccount): _121.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _121.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_121.MsgCreatePeriodicVestingAccountResponse>): _121.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _121.MsgCreatePeriodicVestingAccountResponseAmino): _121.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _121.MsgCreatePeriodicVestingAccountResponse): _121.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _121.MsgCreatePeriodicVestingAccountResponseAminoMsg): _121.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _121.MsgCreatePeriodicVestingAccountResponse): _121.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _121.MsgCreatePeriodicVestingAccountResponseProtoMsg): _121.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _121.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _121.MsgCreatePeriodicVestingAccountResponse): _121.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _232.MsgClientImpl;
                };
                bank: {
                    v1beta1: _233.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _234.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _235.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _236.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _237.MsgClientImpl;
                };
                gov: {
                    v1: _238.MsgClientImpl;
                    v1beta1: _239.MsgClientImpl;
                };
                group: {
                    v1: _240.MsgClientImpl;
                };
                nft: {
                    v1beta1: _241.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _242.MsgClientImpl;
                };
                staking: {
                    v1beta1: _243.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _244.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _245.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _30.QueryConfigRequest): Promise<_30.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _33.QueryAccountsRequest): Promise<_33.QueryAccountsResponse>;
                        account(request: _33.QueryAccountRequest): Promise<_33.QueryAccountResponse>;
                        accountAddressByID(request: _33.QueryAccountAddressByIDRequest): Promise<_33.QueryAccountAddressByIDResponse>;
                        params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                        moduleAccounts(request?: _33.QueryModuleAccountsRequest): Promise<_33.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _33.QueryModuleAccountByNameRequest): Promise<_33.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _33.Bech32PrefixRequest): Promise<_33.Bech32PrefixResponse>;
                        addressBytesToString(request: _33.AddressBytesToStringRequest): Promise<_33.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _33.AddressStringToBytesRequest): Promise<_33.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _37.QueryGrantsRequest): Promise<_37.QueryGrantsResponse>;
                        granterGrants(request: _37.QueryGranterGrantsRequest): Promise<_37.QueryGranterGrantsResponse>;
                        granteeGrants(request: _37.QueryGranteeGrantsRequest): Promise<_37.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _42.QueryBalanceRequest): Promise<_42.QueryBalanceResponse>;
                        allBalances(request: _42.QueryAllBalancesRequest): Promise<_42.QueryAllBalancesResponse>;
                        spendableBalances(request: _42.QuerySpendableBalancesRequest): Promise<_42.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _42.QueryTotalSupplyRequest): Promise<_42.QueryTotalSupplyResponse>;
                        supplyOf(request: _42.QuerySupplyOfRequest): Promise<_42.QuerySupplyOfResponse>;
                        params(request?: _42.QueryParamsRequest): Promise<_42.QueryParamsResponse>;
                        denomMetadata(request: _42.QueryDenomMetadataRequest): Promise<_42.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _42.QueryDenomsMetadataRequest): Promise<_42.QueryDenomsMetadataResponse>;
                        denomOwners(request: _42.QueryDenomOwnersRequest): Promise<_42.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _46.ConfigRequest): Promise<_46.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _53.GetNodeInfoRequest): Promise<_53.GetNodeInfoResponse>;
                            getSyncing(request?: _53.GetSyncingRequest): Promise<_53.GetSyncingResponse>;
                            getLatestBlock(request?: _53.GetLatestBlockRequest): Promise<_53.GetLatestBlockResponse>;
                            getBlockByHeight(request: _53.GetBlockByHeightRequest): Promise<_53.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _53.GetLatestValidatorSetRequest): Promise<_53.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _53.GetValidatorSetByHeightRequest): Promise<_53.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _53.ABCIQueryRequest): Promise<_53.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _68.QueryValidatorOutstandingRewardsRequest): Promise<_68.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _68.QueryValidatorCommissionRequest): Promise<_68.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _68.QueryValidatorSlashesRequest): Promise<_68.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _68.QueryDelegationRewardsRequest): Promise<_68.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _68.QueryDelegationTotalRewardsRequest): Promise<_68.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _68.QueryDelegatorValidatorsRequest): Promise<_68.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _68.QueryDelegatorWithdrawAddressRequest): Promise<_68.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _68.QueryCommunityPoolRequest): Promise<_68.QueryCommunityPoolResponse>;
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
                        allowance(request: _76.QueryAllowanceRequest): Promise<_76.QueryAllowanceResponse>;
                        allowances(request: _76.QueryAllowancesRequest): Promise<_76.QueryAllowancesResponse>;
                        allowancesByGranter(request: _76.QueryAllowancesByGranterRequest): Promise<_76.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _81.QueryProposalRequest): Promise<_81.QueryProposalResponse>;
                        proposals(request: _81.QueryProposalsRequest): Promise<_81.QueryProposalsResponse>;
                        vote(request: _81.QueryVoteRequest): Promise<_81.QueryVoteResponse>;
                        votes(request: _81.QueryVotesRequest): Promise<_81.QueryVotesResponse>;
                        params(request: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        deposit(request: _81.QueryDepositRequest): Promise<_81.QueryDepositResponse>;
                        deposits(request: _81.QueryDepositsRequest): Promise<_81.QueryDepositsResponse>;
                        tallyResult(request: _81.QueryTallyResultRequest): Promise<_81.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _85.QueryProposalRequest): Promise<_85.QueryProposalResponse>;
                        proposals(request: _85.QueryProposalsRequest): Promise<_85.QueryProposalsResponse>;
                        vote(request: _85.QueryVoteRequest): Promise<_85.QueryVoteResponse>;
                        votes(request: _85.QueryVotesRequest): Promise<_85.QueryVotesResponse>;
                        params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                        deposit(request: _85.QueryDepositRequest): Promise<_85.QueryDepositResponse>;
                        deposits(request: _85.QueryDepositsRequest): Promise<_85.QueryDepositsResponse>;
                        tallyResult(request: _85.QueryTallyResultRequest): Promise<_85.QueryTallyResultResponse>;
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
                        params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                        inflation(request?: _94.QueryInflationRequest): Promise<_94.QueryInflationResponse>;
                        annualProvisions(request?: _94.QueryAnnualProvisionsRequest): Promise<_94.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _99.QueryBalanceRequest): Promise<_99.QueryBalanceResponse>;
                        owner(request: _99.QueryOwnerRequest): Promise<_99.QueryOwnerResponse>;
                        supply(request: _99.QuerySupplyRequest): Promise<_99.QuerySupplyResponse>;
                        nFTs(request: _99.QueryNFTsRequest): Promise<_99.QueryNFTsResponse>;
                        nFT(request: _99.QueryNFTRequest): Promise<_99.QueryNFTResponse>;
                        class(request: _99.QueryClassRequest): Promise<_99.QueryClassResponse>;
                        classes(request?: _99.QueryClassesRequest): Promise<_99.QueryClassesResponse>;
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
                        params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                        signingInfo(request: _107.QuerySigningInfoRequest): Promise<_107.QuerySigningInfoResponse>;
                        signingInfos(request?: _107.QuerySigningInfosRequest): Promise<_107.QuerySigningInfosResponse>;
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
                        simulate(request: _116.SimulateRequest): Promise<_116.SimulateResponse>;
                        getTx(request: _116.GetTxRequest): Promise<_116.GetTxResponse>;
                        broadcastTx(request: _116.BroadcastTxRequest): Promise<_116.BroadcastTxResponse>;
                        getTxsEvent(request: _116.GetTxsEventRequest): Promise<_116.GetTxsEventResponse>;
                        getBlockWithTxs(request: _116.GetBlockWithTxsRequest): Promise<_116.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _118.QueryCurrentPlanRequest): Promise<_118.QueryCurrentPlanResponse>;
                        appliedPlan(request: _118.QueryAppliedPlanRequest): Promise<_118.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _118.QueryUpgradedConsensusStateRequest): Promise<_118.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _118.QueryModuleVersionsRequest): Promise<_118.QueryModuleVersionsResponse>;
                        authority(request?: _118.QueryAuthorityRequest): Promise<_118.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _195.LCDQueryClient;
                };
                authz: {
                    v1beta1: _196.LCDQueryClient;
                };
                bank: {
                    v1beta1: _197.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _198.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _199.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _200.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _201.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _202.LCDQueryClient;
                };
                gov: {
                    v1: _203.LCDQueryClient;
                    v1beta1: _204.LCDQueryClient;
                };
                group: {
                    v1: _205.LCDQueryClient;
                };
                mint: {
                    v1beta1: _206.LCDQueryClient;
                };
                nft: {
                    v1beta1: _207.LCDQueryClient;
                };
                params: {
                    v1beta1: _208.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _209.LCDQueryClient;
                };
                staking: {
                    v1beta1: _210.LCDQueryClient;
                };
                tx: {
                    v1beta1: _211.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _212.LCDQueryClient;
                };
            };
        }>;
    };
}
