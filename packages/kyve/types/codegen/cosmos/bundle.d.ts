import * as _41 from "./app/module/v1alpha1/module";
import * as _42 from "./app/v1alpha1/config";
import * as _43 from "./app/v1alpha1/module";
import * as _44 from "./app/v1alpha1/query";
import * as _45 from "./auth/v1beta1/auth";
import * as _46 from "./auth/v1beta1/genesis";
import * as _47 from "./auth/v1beta1/query";
import * as _48 from "./authz/v1beta1/authz";
import * as _49 from "./authz/v1beta1/event";
import * as _50 from "./authz/v1beta1/genesis";
import * as _51 from "./authz/v1beta1/query";
import * as _52 from "./authz/v1beta1/tx";
import * as _53 from "./bank/v1beta1/authz";
import * as _54 from "./bank/v1beta1/bank";
import * as _55 from "./bank/v1beta1/genesis";
import * as _56 from "./bank/v1beta1/query";
import * as _57 from "./bank/v1beta1/tx";
import * as _58 from "./base/abci/v1beta1/abci";
import * as _59 from "./base/kv/v1beta1/kv";
import * as _60 from "./base/node/v1beta1/query";
import * as _61 from "./base/query/v1beta1/pagination";
import * as _62 from "./base/reflection/v1beta1/reflection";
import * as _63 from "./base/reflection/v2alpha1/reflection";
import * as _64 from "./base/snapshots/v1beta1/snapshot";
import * as _65 from "./base/store/v1beta1/commit_info";
import * as _66 from "./base/store/v1beta1/listening";
import * as _67 from "./base/tendermint/v1beta1/query";
import * as _68 from "./base/tendermint/v1beta1/types";
import * as _69 from "./base/v1beta1/coin";
import * as _70 from "./capability/v1beta1/capability";
import * as _71 from "./capability/v1beta1/genesis";
import * as _72 from "./crisis/v1beta1/genesis";
import * as _73 from "./crisis/v1beta1/tx";
import * as _74 from "./crypto/ed25519/keys";
import * as _75 from "./crypto/hd/v1/hd";
import * as _76 from "./crypto/keyring/v1/record";
import * as _77 from "./crypto/multisig/keys";
import * as _78 from "./crypto/secp256k1/keys";
import * as _79 from "./crypto/secp256r1/keys";
import * as _80 from "./distribution/v1beta1/distribution";
import * as _81 from "./distribution/v1beta1/genesis";
import * as _82 from "./distribution/v1beta1/query";
import * as _83 from "./distribution/v1beta1/tx";
import * as _84 from "./evidence/v1beta1/evidence";
import * as _85 from "./evidence/v1beta1/genesis";
import * as _86 from "./evidence/v1beta1/query";
import * as _87 from "./evidence/v1beta1/tx";
import * as _88 from "./feegrant/v1beta1/feegrant";
import * as _89 from "./feegrant/v1beta1/genesis";
import * as _90 from "./feegrant/v1beta1/query";
import * as _91 from "./feegrant/v1beta1/tx";
import * as _92 from "./genutil/v1beta1/genesis";
import * as _93 from "./gov/v1/genesis";
import * as _94 from "./gov/v1/gov";
import * as _95 from "./gov/v1/query";
import * as _96 from "./gov/v1/tx";
import * as _97 from "./gov/v1beta1/genesis";
import * as _98 from "./gov/v1beta1/gov";
import * as _99 from "./gov/v1beta1/query";
import * as _100 from "./gov/v1beta1/tx";
import * as _101 from "./group/v1/events";
import * as _102 from "./group/v1/genesis";
import * as _103 from "./group/v1/query";
import * as _104 from "./group/v1/tx";
import * as _105 from "./group/v1/types";
import * as _106 from "./mint/v1beta1/genesis";
import * as _107 from "./mint/v1beta1/mint";
import * as _108 from "./mint/v1beta1/query";
import * as _110 from "./nft/v1beta1/event";
import * as _111 from "./nft/v1beta1/genesis";
import * as _112 from "./nft/v1beta1/nft";
import * as _113 from "./nft/v1beta1/query";
import * as _114 from "./nft/v1beta1/tx";
import * as _115 from "./orm/module/v1alpha1/module";
import * as _116 from "./orm/v1/orm";
import * as _117 from "./orm/v1alpha1/schema";
import * as _118 from "./params/v1beta1/params";
import * as _119 from "./params/v1beta1/query";
import * as _120 from "./slashing/v1beta1/genesis";
import * as _121 from "./slashing/v1beta1/query";
import * as _122 from "./slashing/v1beta1/slashing";
import * as _123 from "./slashing/v1beta1/tx";
import * as _124 from "./staking/v1beta1/authz";
import * as _125 from "./staking/v1beta1/genesis";
import * as _126 from "./staking/v1beta1/query";
import * as _127 from "./staking/v1beta1/staking";
import * as _128 from "./staking/v1beta1/tx";
import * as _129 from "./tx/signing/v1beta1/signing";
import * as _130 from "./tx/v1beta1/service";
import * as _131 from "./tx/v1beta1/tx";
import * as _132 from "./upgrade/v1beta1/query";
import * as _133 from "./upgrade/v1beta1/tx";
import * as _134 from "./upgrade/v1beta1/upgrade";
import * as _135 from "./vesting/v1beta1/tx";
import * as _136 from "./vesting/v1beta1/vesting";
import * as _214 from "./auth/v1beta1/query.lcd";
import * as _215 from "./authz/v1beta1/query.lcd";
import * as _216 from "./bank/v1beta1/query.lcd";
import * as _217 from "./base/node/v1beta1/query.lcd";
import * as _218 from "./base/tendermint/v1beta1/query.lcd";
import * as _219 from "./distribution/v1beta1/query.lcd";
import * as _220 from "./evidence/v1beta1/query.lcd";
import * as _221 from "./feegrant/v1beta1/query.lcd";
import * as _222 from "./gov/v1/query.lcd";
import * as _223 from "./gov/v1beta1/query.lcd";
import * as _224 from "./group/v1/query.lcd";
import * as _225 from "./mint/v1beta1/query.lcd";
import * as _226 from "./nft/v1beta1/query.lcd";
import * as _227 from "./params/v1beta1/query.lcd";
import * as _228 from "./slashing/v1beta1/query.lcd";
import * as _229 from "./staking/v1beta1/query.lcd";
import * as _230 from "./tx/v1beta1/service.lcd";
import * as _231 from "./upgrade/v1beta1/query.lcd";
import * as _232 from "./app/v1alpha1/query.rpc.Query";
import * as _233 from "./auth/v1beta1/query.rpc.Query";
import * as _234 from "./authz/v1beta1/query.rpc.Query";
import * as _235 from "./bank/v1beta1/query.rpc.Query";
import * as _236 from "./base/node/v1beta1/query.rpc.Service";
import * as _237 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _238 from "./distribution/v1beta1/query.rpc.Query";
import * as _239 from "./evidence/v1beta1/query.rpc.Query";
import * as _240 from "./feegrant/v1beta1/query.rpc.Query";
import * as _241 from "./gov/v1/query.rpc.Query";
import * as _242 from "./gov/v1beta1/query.rpc.Query";
import * as _243 from "./group/v1/query.rpc.Query";
import * as _244 from "./mint/v1beta1/query.rpc.Query";
import * as _245 from "./nft/v1beta1/query.rpc.Query";
import * as _246 from "./params/v1beta1/query.rpc.Query";
import * as _247 from "./slashing/v1beta1/query.rpc.Query";
import * as _248 from "./staking/v1beta1/query.rpc.Query";
import * as _249 from "./tx/v1beta1/service.rpc.Service";
import * as _250 from "./upgrade/v1beta1/query.rpc.Query";
import * as _251 from "./authz/v1beta1/tx.rpc.msg";
import * as _252 from "./bank/v1beta1/tx.rpc.msg";
import * as _253 from "./crisis/v1beta1/tx.rpc.msg";
import * as _254 from "./distribution/v1beta1/tx.rpc.msg";
import * as _255 from "./evidence/v1beta1/tx.rpc.msg";
import * as _256 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _257 from "./gov/v1/tx.rpc.msg";
import * as _258 from "./gov/v1beta1/tx.rpc.msg";
import * as _259 from "./group/v1/tx.rpc.msg";
import * as _260 from "./nft/v1beta1/tx.rpc.msg";
import * as _261 from "./slashing/v1beta1/tx.rpc.msg";
import * as _262 from "./staking/v1beta1/tx.rpc.msg";
import * as _263 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _264 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _41.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _41.Module;
                    fromPartial(_: Partial<_41.Module>): _41.Module;
                    fromAmino(_: _41.ModuleAmino): _41.Module;
                    toAmino(_: _41.Module): _41.ModuleAmino;
                    fromAminoMsg(object: _41.ModuleAminoMsg): _41.Module;
                    toAminoMsg(message: _41.Module): _41.ModuleAminoMsg;
                    fromProtoMsg(message: _41.ModuleProtoMsg): _41.Module;
                    toProto(message: _41.Module): Uint8Array;
                    toProtoMsg(message: _41.Module): _41.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _44.QueryConfigRequest): Promise<_44.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _44.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.QueryConfigRequest;
                fromPartial(_: Partial<_44.QueryConfigRequest>): _44.QueryConfigRequest;
                fromAmino(_: _44.QueryConfigRequestAmino): _44.QueryConfigRequest;
                toAmino(_: _44.QueryConfigRequest): _44.QueryConfigRequestAmino;
                fromAminoMsg(object: _44.QueryConfigRequestAminoMsg): _44.QueryConfigRequest;
                toAminoMsg(message: _44.QueryConfigRequest): _44.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _44.QueryConfigRequestProtoMsg): _44.QueryConfigRequest;
                toProto(message: _44.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _44.QueryConfigRequest): _44.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _44.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryConfigResponse;
                fromPartial(object: Partial<_44.QueryConfigResponse>): _44.QueryConfigResponse;
                fromAmino(object: _44.QueryConfigResponseAmino): _44.QueryConfigResponse;
                toAmino(message: _44.QueryConfigResponse): _44.QueryConfigResponseAmino;
                fromAminoMsg(object: _44.QueryConfigResponseAminoMsg): _44.QueryConfigResponse;
                toAminoMsg(message: _44.QueryConfigResponse): _44.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _44.QueryConfigResponseProtoMsg): _44.QueryConfigResponse;
                toProto(message: _44.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _44.QueryConfigResponse): _44.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _43.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ModuleDescriptor;
                fromPartial(object: Partial<_43.ModuleDescriptor>): _43.ModuleDescriptor;
                fromAmino(object: _43.ModuleDescriptorAmino): _43.ModuleDescriptor;
                toAmino(message: _43.ModuleDescriptor): _43.ModuleDescriptorAmino;
                fromAminoMsg(object: _43.ModuleDescriptorAminoMsg): _43.ModuleDescriptor;
                toAminoMsg(message: _43.ModuleDescriptor): _43.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _43.ModuleDescriptorProtoMsg): _43.ModuleDescriptor;
                toProto(message: _43.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _43.ModuleDescriptor): _43.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _43.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.PackageReference;
                fromPartial(object: Partial<_43.PackageReference>): _43.PackageReference;
                fromAmino(object: _43.PackageReferenceAmino): _43.PackageReference;
                toAmino(message: _43.PackageReference): _43.PackageReferenceAmino;
                fromAminoMsg(object: _43.PackageReferenceAminoMsg): _43.PackageReference;
                toAminoMsg(message: _43.PackageReference): _43.PackageReferenceAminoMsg;
                fromProtoMsg(message: _43.PackageReferenceProtoMsg): _43.PackageReference;
                toProto(message: _43.PackageReference): Uint8Array;
                toProtoMsg(message: _43.PackageReference): _43.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _43.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.MigrateFromInfo;
                fromPartial(object: Partial<_43.MigrateFromInfo>): _43.MigrateFromInfo;
                fromAmino(object: _43.MigrateFromInfoAmino): _43.MigrateFromInfo;
                toAmino(message: _43.MigrateFromInfo): _43.MigrateFromInfoAmino;
                fromAminoMsg(object: _43.MigrateFromInfoAminoMsg): _43.MigrateFromInfo;
                toAminoMsg(message: _43.MigrateFromInfo): _43.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _43.MigrateFromInfoProtoMsg): _43.MigrateFromInfo;
                toProto(message: _43.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _43.MigrateFromInfo): _43.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _42.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Config;
                fromPartial(object: Partial<_42.Config>): _42.Config;
                fromAmino(object: _42.ConfigAmino): _42.Config;
                toAmino(message: _42.Config): _42.ConfigAmino;
                fromAminoMsg(object: _42.ConfigAminoMsg): _42.Config;
                toAminoMsg(message: _42.Config): _42.ConfigAminoMsg;
                fromProtoMsg(message: _42.ConfigProtoMsg): _42.Config;
                toProto(message: _42.Config): Uint8Array;
                toProtoMsg(message: _42.Config): _42.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _42.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ModuleConfig;
                fromPartial(object: Partial<_42.ModuleConfig>): _42.ModuleConfig;
                fromAmino(object: _42.ModuleConfigAmino): _42.ModuleConfig;
                toAmino(message: _42.ModuleConfig): _42.ModuleConfigAmino;
                fromAminoMsg(object: _42.ModuleConfigAminoMsg): _42.ModuleConfig;
                toAminoMsg(message: _42.ModuleConfig): _42.ModuleConfigAminoMsg;
                fromProtoMsg(message: _42.ModuleConfigProtoMsg): _42.ModuleConfig;
                toProto(message: _42.ModuleConfig): Uint8Array;
                toProtoMsg(message: _42.ModuleConfig): _42.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _47.QueryAccountsRequest): Promise<_47.QueryAccountsResponse>;
                account(request: _47.QueryAccountRequest): Promise<_47.QueryAccountResponse>;
                accountAddressByID(request: _47.QueryAccountAddressByIDRequest): Promise<_47.QueryAccountAddressByIDResponse>;
                params(request?: _47.QueryParamsRequest): Promise<_47.QueryParamsResponse>;
                moduleAccounts(request?: _47.QueryModuleAccountsRequest): Promise<_47.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _47.QueryModuleAccountByNameRequest): Promise<_47.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _47.Bech32PrefixRequest): Promise<_47.Bech32PrefixResponse>;
                addressBytesToString(request: _47.AddressBytesToStringRequest): Promise<_47.AddressBytesToStringResponse>;
                addressStringToBytes(request: _47.AddressStringToBytesRequest): Promise<_47.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _214.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _47.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAccountsRequest;
                fromPartial(object: Partial<_47.QueryAccountsRequest>): _47.QueryAccountsRequest;
                fromAmino(object: _47.QueryAccountsRequestAmino): _47.QueryAccountsRequest;
                toAmino(message: _47.QueryAccountsRequest): _47.QueryAccountsRequestAmino;
                fromAminoMsg(object: _47.QueryAccountsRequestAminoMsg): _47.QueryAccountsRequest;
                toAminoMsg(message: _47.QueryAccountsRequest): _47.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryAccountsRequestProtoMsg): _47.QueryAccountsRequest;
                toProto(message: _47.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryAccountsRequest): _47.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _47.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAccountsResponse;
                fromPartial(object: Partial<_47.QueryAccountsResponse>): _47.QueryAccountsResponse;
                fromAmino(object: _47.QueryAccountsResponseAmino): _47.QueryAccountsResponse;
                toAmino(message: _47.QueryAccountsResponse): _47.QueryAccountsResponseAmino;
                fromAminoMsg(object: _47.QueryAccountsResponseAminoMsg): _47.QueryAccountsResponse;
                toAminoMsg(message: _47.QueryAccountsResponse): _47.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryAccountsResponseProtoMsg): _47.QueryAccountsResponse;
                toProto(message: _47.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryAccountsResponse): _47.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _47.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAccountRequest;
                fromPartial(object: Partial<_47.QueryAccountRequest>): _47.QueryAccountRequest;
                fromAmino(object: _47.QueryAccountRequestAmino): _47.QueryAccountRequest;
                toAmino(message: _47.QueryAccountRequest): _47.QueryAccountRequestAmino;
                fromAminoMsg(object: _47.QueryAccountRequestAminoMsg): _47.QueryAccountRequest;
                toAminoMsg(message: _47.QueryAccountRequest): _47.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _47.QueryAccountRequestProtoMsg): _47.QueryAccountRequest;
                toProto(message: _47.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _47.QueryAccountRequest): _47.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _47.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAccountResponse;
                fromPartial(object: Partial<_47.QueryAccountResponse>): _47.QueryAccountResponse;
                fromAmino(object: _47.QueryAccountResponseAmino): _47.QueryAccountResponse;
                toAmino(message: _47.QueryAccountResponse): _47.QueryAccountResponseAmino;
                fromAminoMsg(object: _47.QueryAccountResponseAminoMsg): _47.QueryAccountResponse;
                toAminoMsg(message: _47.QueryAccountResponse): _47.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _47.QueryAccountResponseProtoMsg): _47.QueryAccountResponse;
                toProto(message: _47.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _47.QueryAccountResponse): _47.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _47.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.QueryParamsRequest;
                fromPartial(_: Partial<_47.QueryParamsRequest>): _47.QueryParamsRequest;
                fromAmino(_: _47.QueryParamsRequestAmino): _47.QueryParamsRequest;
                toAmino(_: _47.QueryParamsRequest): _47.QueryParamsRequestAmino;
                fromAminoMsg(object: _47.QueryParamsRequestAminoMsg): _47.QueryParamsRequest;
                toAminoMsg(message: _47.QueryParamsRequest): _47.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryParamsRequestProtoMsg): _47.QueryParamsRequest;
                toProto(message: _47.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryParamsRequest): _47.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _47.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryParamsResponse;
                fromPartial(object: Partial<_47.QueryParamsResponse>): _47.QueryParamsResponse;
                fromAmino(object: _47.QueryParamsResponseAmino): _47.QueryParamsResponse;
                toAmino(message: _47.QueryParamsResponse): _47.QueryParamsResponseAmino;
                fromAminoMsg(object: _47.QueryParamsResponseAminoMsg): _47.QueryParamsResponse;
                toAminoMsg(message: _47.QueryParamsResponse): _47.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryParamsResponseProtoMsg): _47.QueryParamsResponse;
                toProto(message: _47.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryParamsResponse): _47.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _47.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_47.QueryModuleAccountsRequest>): _47.QueryModuleAccountsRequest;
                fromAmino(_: _47.QueryModuleAccountsRequestAmino): _47.QueryModuleAccountsRequest;
                toAmino(_: _47.QueryModuleAccountsRequest): _47.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _47.QueryModuleAccountsRequestAminoMsg): _47.QueryModuleAccountsRequest;
                toAminoMsg(message: _47.QueryModuleAccountsRequest): _47.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryModuleAccountsRequestProtoMsg): _47.QueryModuleAccountsRequest;
                toProto(message: _47.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryModuleAccountsRequest): _47.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _47.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_47.QueryModuleAccountsResponse>): _47.QueryModuleAccountsResponse;
                fromAmino(object: _47.QueryModuleAccountsResponseAmino): _47.QueryModuleAccountsResponse;
                toAmino(message: _47.QueryModuleAccountsResponse): _47.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _47.QueryModuleAccountsResponseAminoMsg): _47.QueryModuleAccountsResponse;
                toAminoMsg(message: _47.QueryModuleAccountsResponse): _47.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryModuleAccountsResponseProtoMsg): _47.QueryModuleAccountsResponse;
                toProto(message: _47.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryModuleAccountsResponse): _47.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _47.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_47.QueryModuleAccountByNameRequest>): _47.QueryModuleAccountByNameRequest;
                fromAmino(object: _47.QueryModuleAccountByNameRequestAmino): _47.QueryModuleAccountByNameRequest;
                toAmino(message: _47.QueryModuleAccountByNameRequest): _47.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _47.QueryModuleAccountByNameRequestAminoMsg): _47.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _47.QueryModuleAccountByNameRequest): _47.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _47.QueryModuleAccountByNameRequestProtoMsg): _47.QueryModuleAccountByNameRequest;
                toProto(message: _47.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _47.QueryModuleAccountByNameRequest): _47.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _47.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_47.QueryModuleAccountByNameResponse>): _47.QueryModuleAccountByNameResponse;
                fromAmino(object: _47.QueryModuleAccountByNameResponseAmino): _47.QueryModuleAccountByNameResponse;
                toAmino(message: _47.QueryModuleAccountByNameResponse): _47.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _47.QueryModuleAccountByNameResponseAminoMsg): _47.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _47.QueryModuleAccountByNameResponse): _47.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _47.QueryModuleAccountByNameResponseProtoMsg): _47.QueryModuleAccountByNameResponse;
                toProto(message: _47.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _47.QueryModuleAccountByNameResponse): _47.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _47.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.Bech32PrefixRequest;
                fromPartial(_: Partial<_47.Bech32PrefixRequest>): _47.Bech32PrefixRequest;
                fromAmino(_: _47.Bech32PrefixRequestAmino): _47.Bech32PrefixRequest;
                toAmino(_: _47.Bech32PrefixRequest): _47.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _47.Bech32PrefixRequestAminoMsg): _47.Bech32PrefixRequest;
                toAminoMsg(message: _47.Bech32PrefixRequest): _47.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _47.Bech32PrefixRequestProtoMsg): _47.Bech32PrefixRequest;
                toProto(message: _47.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _47.Bech32PrefixRequest): _47.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _47.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.Bech32PrefixResponse;
                fromPartial(object: Partial<_47.Bech32PrefixResponse>): _47.Bech32PrefixResponse;
                fromAmino(object: _47.Bech32PrefixResponseAmino): _47.Bech32PrefixResponse;
                toAmino(message: _47.Bech32PrefixResponse): _47.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _47.Bech32PrefixResponseAminoMsg): _47.Bech32PrefixResponse;
                toAminoMsg(message: _47.Bech32PrefixResponse): _47.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _47.Bech32PrefixResponseProtoMsg): _47.Bech32PrefixResponse;
                toProto(message: _47.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _47.Bech32PrefixResponse): _47.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _47.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.AddressBytesToStringRequest;
                fromPartial(object: Partial<_47.AddressBytesToStringRequest>): _47.AddressBytesToStringRequest;
                fromAmino(object: _47.AddressBytesToStringRequestAmino): _47.AddressBytesToStringRequest;
                toAmino(message: _47.AddressBytesToStringRequest): _47.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _47.AddressBytesToStringRequestAminoMsg): _47.AddressBytesToStringRequest;
                toAminoMsg(message: _47.AddressBytesToStringRequest): _47.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _47.AddressBytesToStringRequestProtoMsg): _47.AddressBytesToStringRequest;
                toProto(message: _47.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _47.AddressBytesToStringRequest): _47.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _47.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.AddressBytesToStringResponse;
                fromPartial(object: Partial<_47.AddressBytesToStringResponse>): _47.AddressBytesToStringResponse;
                fromAmino(object: _47.AddressBytesToStringResponseAmino): _47.AddressBytesToStringResponse;
                toAmino(message: _47.AddressBytesToStringResponse): _47.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _47.AddressBytesToStringResponseAminoMsg): _47.AddressBytesToStringResponse;
                toAminoMsg(message: _47.AddressBytesToStringResponse): _47.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _47.AddressBytesToStringResponseProtoMsg): _47.AddressBytesToStringResponse;
                toProto(message: _47.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _47.AddressBytesToStringResponse): _47.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _47.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.AddressStringToBytesRequest;
                fromPartial(object: Partial<_47.AddressStringToBytesRequest>): _47.AddressStringToBytesRequest;
                fromAmino(object: _47.AddressStringToBytesRequestAmino): _47.AddressStringToBytesRequest;
                toAmino(message: _47.AddressStringToBytesRequest): _47.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _47.AddressStringToBytesRequestAminoMsg): _47.AddressStringToBytesRequest;
                toAminoMsg(message: _47.AddressStringToBytesRequest): _47.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _47.AddressStringToBytesRequestProtoMsg): _47.AddressStringToBytesRequest;
                toProto(message: _47.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _47.AddressStringToBytesRequest): _47.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _47.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.AddressStringToBytesResponse;
                fromPartial(object: Partial<_47.AddressStringToBytesResponse>): _47.AddressStringToBytesResponse;
                fromAmino(object: _47.AddressStringToBytesResponseAmino): _47.AddressStringToBytesResponse;
                toAmino(message: _47.AddressStringToBytesResponse): _47.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _47.AddressStringToBytesResponseAminoMsg): _47.AddressStringToBytesResponse;
                toAminoMsg(message: _47.AddressStringToBytesResponse): _47.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _47.AddressStringToBytesResponseProtoMsg): _47.AddressStringToBytesResponse;
                toProto(message: _47.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _47.AddressStringToBytesResponse): _47.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _47.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_47.QueryAccountAddressByIDRequest>): _47.QueryAccountAddressByIDRequest;
                fromAmino(object: _47.QueryAccountAddressByIDRequestAmino): _47.QueryAccountAddressByIDRequest;
                toAmino(message: _47.QueryAccountAddressByIDRequest): _47.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _47.QueryAccountAddressByIDRequestAminoMsg): _47.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _47.QueryAccountAddressByIDRequest): _47.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _47.QueryAccountAddressByIDRequestProtoMsg): _47.QueryAccountAddressByIDRequest;
                toProto(message: _47.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _47.QueryAccountAddressByIDRequest): _47.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _47.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_47.QueryAccountAddressByIDResponse>): _47.QueryAccountAddressByIDResponse;
                fromAmino(object: _47.QueryAccountAddressByIDResponseAmino): _47.QueryAccountAddressByIDResponse;
                toAmino(message: _47.QueryAccountAddressByIDResponse): _47.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _47.QueryAccountAddressByIDResponseAminoMsg): _47.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _47.QueryAccountAddressByIDResponse): _47.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _47.QueryAccountAddressByIDResponseProtoMsg): _47.QueryAccountAddressByIDResponse;
                toProto(message: _47.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _47.QueryAccountAddressByIDResponse): _47.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _45.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _45.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _46.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
                fromAmino(object: _46.GenesisStateAmino): _46.GenesisState;
                toAmino(message: _46.GenesisState): _46.GenesisStateAmino;
                fromAminoMsg(object: _46.GenesisStateAminoMsg): _46.GenesisState;
                toAminoMsg(message: _46.GenesisState): _46.GenesisStateAminoMsg;
                fromProtoMsg(message: _46.GenesisStateProtoMsg): _46.GenesisState;
                toProto(message: _46.GenesisState): Uint8Array;
                toProtoMsg(message: _46.GenesisState): _46.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _45.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.BaseAccount;
                fromPartial(object: Partial<_45.BaseAccount>): _45.BaseAccount;
                fromAmino(object: _45.BaseAccountAmino): _45.BaseAccount;
                toAmino(message: _45.BaseAccount): _45.BaseAccountAmino;
                fromAminoMsg(object: _45.BaseAccountAminoMsg): _45.BaseAccount;
                toAminoMsg(message: _45.BaseAccount): _45.BaseAccountAminoMsg;
                fromProtoMsg(message: _45.BaseAccountProtoMsg): _45.BaseAccount;
                toProto(message: _45.BaseAccount): Uint8Array;
                toProtoMsg(message: _45.BaseAccount): _45.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _45.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.ModuleAccount;
                fromPartial(object: Partial<_45.ModuleAccount>): _45.ModuleAccount;
                fromAmino(object: _45.ModuleAccountAmino): _45.ModuleAccount;
                toAmino(message: _45.ModuleAccount): _45.ModuleAccountAmino;
                fromAminoMsg(object: _45.ModuleAccountAminoMsg): _45.ModuleAccount;
                toAminoMsg(message: _45.ModuleAccount): _45.ModuleAccountAminoMsg;
                fromProtoMsg(message: _45.ModuleAccountProtoMsg): _45.ModuleAccount;
                toProto(message: _45.ModuleAccount): Uint8Array;
                toProtoMsg(message: _45.ModuleAccount): _45.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _45.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.Params;
                fromPartial(object: Partial<_45.Params>): _45.Params;
                fromAmino(object: _45.ParamsAmino): _45.Params;
                toAmino(message: _45.Params): _45.ParamsAmino;
                fromAminoMsg(object: _45.ParamsAminoMsg): _45.Params;
                toAminoMsg(message: _45.Params): _45.ParamsAminoMsg;
                fromProtoMsg(message: _45.ParamsProtoMsg): _45.Params;
                toProto(message: _45.Params): Uint8Array;
                toProtoMsg(message: _45.Params): _45.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _51.QueryGrantsRequest): Promise<_51.QueryGrantsResponse>;
                granterGrants(request: _51.QueryGranterGrantsRequest): Promise<_51.QueryGranterGrantsResponse>;
                granteeGrants(request: _51.QueryGranteeGrantsRequest): Promise<_51.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _215.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _52.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _52.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _52.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _52.MsgGrant): {
                        typeUrl: string;
                        value: _52.MsgGrant;
                    };
                    exec(value: _52.MsgExec): {
                        typeUrl: string;
                        value: _52.MsgExec;
                    };
                    revoke(value: _52.MsgRevoke): {
                        typeUrl: string;
                        value: _52.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _52.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _52.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _52.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _52.MsgGrant): {
                        typeUrl: string;
                        value: _52.MsgGrant;
                    };
                    exec(value: _52.MsgExec): {
                        typeUrl: string;
                        value: _52.MsgExec;
                    };
                    revoke(value: _52.MsgRevoke): {
                        typeUrl: string;
                        value: _52.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _52.MsgGrant) => _52.MsgGrantAmino;
                    fromAmino: (object: _52.MsgGrantAmino) => _52.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _52.MsgExec) => _52.MsgExecAmino;
                    fromAmino: (object: _52.MsgExecAmino) => _52.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _52.MsgRevoke) => _52.MsgRevokeAmino;
                    fromAmino: (object: _52.MsgRevokeAmino) => _52.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _52.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgGrant;
                fromPartial(object: Partial<_52.MsgGrant>): _52.MsgGrant;
                fromAmino(object: _52.MsgGrantAmino): _52.MsgGrant;
                toAmino(message: _52.MsgGrant): _52.MsgGrantAmino;
                fromAminoMsg(object: _52.MsgGrantAminoMsg): _52.MsgGrant;
                toAminoMsg(message: _52.MsgGrant): _52.MsgGrantAminoMsg;
                fromProtoMsg(message: _52.MsgGrantProtoMsg): _52.MsgGrant;
                toProto(message: _52.MsgGrant): Uint8Array;
                toProtoMsg(message: _52.MsgGrant): _52.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _52.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgExecResponse;
                fromPartial(object: Partial<_52.MsgExecResponse>): _52.MsgExecResponse;
                fromAmino(object: _52.MsgExecResponseAmino): _52.MsgExecResponse;
                toAmino(message: _52.MsgExecResponse): _52.MsgExecResponseAmino;
                fromAminoMsg(object: _52.MsgExecResponseAminoMsg): _52.MsgExecResponse;
                toAminoMsg(message: _52.MsgExecResponse): _52.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _52.MsgExecResponseProtoMsg): _52.MsgExecResponse;
                toProto(message: _52.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _52.MsgExecResponse): _52.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _52.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgExec;
                fromPartial(object: Partial<_52.MsgExec>): _52.MsgExec;
                fromAmino(object: _52.MsgExecAmino): _52.MsgExec;
                toAmino(message: _52.MsgExec): _52.MsgExecAmino;
                fromAminoMsg(object: _52.MsgExecAminoMsg): _52.MsgExec;
                toAminoMsg(message: _52.MsgExec): _52.MsgExecAminoMsg;
                fromProtoMsg(message: _52.MsgExecProtoMsg): _52.MsgExec;
                toProto(message: _52.MsgExec): Uint8Array;
                toProtoMsg(message: _52.MsgExec): _52.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _52.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgGrantResponse;
                fromPartial(_: Partial<_52.MsgGrantResponse>): _52.MsgGrantResponse;
                fromAmino(_: _52.MsgGrantResponseAmino): _52.MsgGrantResponse;
                toAmino(_: _52.MsgGrantResponse): _52.MsgGrantResponseAmino;
                fromAminoMsg(object: _52.MsgGrantResponseAminoMsg): _52.MsgGrantResponse;
                toAminoMsg(message: _52.MsgGrantResponse): _52.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _52.MsgGrantResponseProtoMsg): _52.MsgGrantResponse;
                toProto(message: _52.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _52.MsgGrantResponse): _52.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _52.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgRevoke;
                fromPartial(object: Partial<_52.MsgRevoke>): _52.MsgRevoke;
                fromAmino(object: _52.MsgRevokeAmino): _52.MsgRevoke;
                toAmino(message: _52.MsgRevoke): _52.MsgRevokeAmino;
                fromAminoMsg(object: _52.MsgRevokeAminoMsg): _52.MsgRevoke;
                toAminoMsg(message: _52.MsgRevoke): _52.MsgRevokeAminoMsg;
                fromProtoMsg(message: _52.MsgRevokeProtoMsg): _52.MsgRevoke;
                toProto(message: _52.MsgRevoke): Uint8Array;
                toProtoMsg(message: _52.MsgRevoke): _52.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _52.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgRevokeResponse;
                fromPartial(_: Partial<_52.MsgRevokeResponse>): _52.MsgRevokeResponse;
                fromAmino(_: _52.MsgRevokeResponseAmino): _52.MsgRevokeResponse;
                toAmino(_: _52.MsgRevokeResponse): _52.MsgRevokeResponseAmino;
                fromAminoMsg(object: _52.MsgRevokeResponseAminoMsg): _52.MsgRevokeResponse;
                toAminoMsg(message: _52.MsgRevokeResponse): _52.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _52.MsgRevokeResponseProtoMsg): _52.MsgRevokeResponse;
                toProto(message: _52.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _52.MsgRevokeResponse): _52.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _51.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryGrantsRequest;
                fromPartial(object: Partial<_51.QueryGrantsRequest>): _51.QueryGrantsRequest;
                fromAmino(object: _51.QueryGrantsRequestAmino): _51.QueryGrantsRequest;
                toAmino(message: _51.QueryGrantsRequest): _51.QueryGrantsRequestAmino;
                fromAminoMsg(object: _51.QueryGrantsRequestAminoMsg): _51.QueryGrantsRequest;
                toAminoMsg(message: _51.QueryGrantsRequest): _51.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _51.QueryGrantsRequestProtoMsg): _51.QueryGrantsRequest;
                toProto(message: _51.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryGrantsRequest): _51.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _51.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryGrantsResponse;
                fromPartial(object: Partial<_51.QueryGrantsResponse>): _51.QueryGrantsResponse;
                fromAmino(object: _51.QueryGrantsResponseAmino): _51.QueryGrantsResponse;
                toAmino(message: _51.QueryGrantsResponse): _51.QueryGrantsResponseAmino;
                fromAminoMsg(object: _51.QueryGrantsResponseAminoMsg): _51.QueryGrantsResponse;
                toAminoMsg(message: _51.QueryGrantsResponse): _51.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _51.QueryGrantsResponseProtoMsg): _51.QueryGrantsResponse;
                toProto(message: _51.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryGrantsResponse): _51.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _51.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_51.QueryGranterGrantsRequest>): _51.QueryGranterGrantsRequest;
                fromAmino(object: _51.QueryGranterGrantsRequestAmino): _51.QueryGranterGrantsRequest;
                toAmino(message: _51.QueryGranterGrantsRequest): _51.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _51.QueryGranterGrantsRequestAminoMsg): _51.QueryGranterGrantsRequest;
                toAminoMsg(message: _51.QueryGranterGrantsRequest): _51.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _51.QueryGranterGrantsRequestProtoMsg): _51.QueryGranterGrantsRequest;
                toProto(message: _51.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryGranterGrantsRequest): _51.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _51.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_51.QueryGranterGrantsResponse>): _51.QueryGranterGrantsResponse;
                fromAmino(object: _51.QueryGranterGrantsResponseAmino): _51.QueryGranterGrantsResponse;
                toAmino(message: _51.QueryGranterGrantsResponse): _51.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _51.QueryGranterGrantsResponseAminoMsg): _51.QueryGranterGrantsResponse;
                toAminoMsg(message: _51.QueryGranterGrantsResponse): _51.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _51.QueryGranterGrantsResponseProtoMsg): _51.QueryGranterGrantsResponse;
                toProto(message: _51.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryGranterGrantsResponse): _51.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _51.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_51.QueryGranteeGrantsRequest>): _51.QueryGranteeGrantsRequest;
                fromAmino(object: _51.QueryGranteeGrantsRequestAmino): _51.QueryGranteeGrantsRequest;
                toAmino(message: _51.QueryGranteeGrantsRequest): _51.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _51.QueryGranteeGrantsRequestAminoMsg): _51.QueryGranteeGrantsRequest;
                toAminoMsg(message: _51.QueryGranteeGrantsRequest): _51.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _51.QueryGranteeGrantsRequestProtoMsg): _51.QueryGranteeGrantsRequest;
                toProto(message: _51.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryGranteeGrantsRequest): _51.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _51.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_51.QueryGranteeGrantsResponse>): _51.QueryGranteeGrantsResponse;
                fromAmino(object: _51.QueryGranteeGrantsResponseAmino): _51.QueryGranteeGrantsResponse;
                toAmino(message: _51.QueryGranteeGrantsResponse): _51.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _51.QueryGranteeGrantsResponseAminoMsg): _51.QueryGranteeGrantsResponse;
                toAminoMsg(message: _51.QueryGranteeGrantsResponse): _51.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _51.QueryGranteeGrantsResponseProtoMsg): _51.QueryGranteeGrantsResponse;
                toProto(message: _51.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryGranteeGrantsResponse): _51.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _49.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.EventGrant;
                fromPartial(object: Partial<_49.EventGrant>): _49.EventGrant;
                fromAmino(object: _49.EventGrantAmino): _49.EventGrant;
                toAmino(message: _49.EventGrant): _49.EventGrantAmino;
                fromAminoMsg(object: _49.EventGrantAminoMsg): _49.EventGrant;
                toAminoMsg(message: _49.EventGrant): _49.EventGrantAminoMsg;
                fromProtoMsg(message: _49.EventGrantProtoMsg): _49.EventGrant;
                toProto(message: _49.EventGrant): Uint8Array;
                toProtoMsg(message: _49.EventGrant): _49.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _49.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.EventRevoke;
                fromPartial(object: Partial<_49.EventRevoke>): _49.EventRevoke;
                fromAmino(object: _49.EventRevokeAmino): _49.EventRevoke;
                toAmino(message: _49.EventRevoke): _49.EventRevokeAmino;
                fromAminoMsg(object: _49.EventRevokeAminoMsg): _49.EventRevoke;
                toAminoMsg(message: _49.EventRevoke): _49.EventRevokeAminoMsg;
                fromProtoMsg(message: _49.EventRevokeProtoMsg): _49.EventRevoke;
                toProto(message: _49.EventRevoke): Uint8Array;
                toProtoMsg(message: _49.EventRevoke): _49.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _48.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.GenericAuthorization;
                fromPartial(object: Partial<_48.GenericAuthorization>): _48.GenericAuthorization;
                fromAmino(object: _48.GenericAuthorizationAmino): _48.GenericAuthorization;
                toAmino(message: _48.GenericAuthorization): _48.GenericAuthorizationAmino;
                fromAminoMsg(object: _48.GenericAuthorizationAminoMsg): _48.GenericAuthorization;
                toAminoMsg(message: _48.GenericAuthorization): _48.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _48.GenericAuthorizationProtoMsg): _48.GenericAuthorization;
                toProto(message: _48.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _48.GenericAuthorization): _48.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _48.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.Grant;
                fromPartial(object: Partial<_48.Grant>): _48.Grant;
                fromAmino(object: _48.GrantAmino): _48.Grant;
                toAmino(message: _48.Grant): _48.GrantAmino;
                fromAminoMsg(object: _48.GrantAminoMsg): _48.Grant;
                toAminoMsg(message: _48.Grant): _48.GrantAminoMsg;
                fromProtoMsg(message: _48.GrantProtoMsg): _48.Grant;
                toProto(message: _48.Grant): Uint8Array;
                toProtoMsg(message: _48.Grant): _48.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _48.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.GrantAuthorization;
                fromPartial(object: Partial<_48.GrantAuthorization>): _48.GrantAuthorization;
                fromAmino(object: _48.GrantAuthorizationAmino): _48.GrantAuthorization;
                toAmino(message: _48.GrantAuthorization): _48.GrantAuthorizationAmino;
                fromAminoMsg(object: _48.GrantAuthorizationAminoMsg): _48.GrantAuthorization;
                toAminoMsg(message: _48.GrantAuthorization): _48.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _48.GrantAuthorizationProtoMsg): _48.GrantAuthorization;
                toProto(message: _48.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _48.GrantAuthorization): _48.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _48.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.GrantQueueItem;
                fromPartial(object: Partial<_48.GrantQueueItem>): _48.GrantQueueItem;
                fromAmino(object: _48.GrantQueueItemAmino): _48.GrantQueueItem;
                toAmino(message: _48.GrantQueueItem): _48.GrantQueueItemAmino;
                fromAminoMsg(object: _48.GrantQueueItemAminoMsg): _48.GrantQueueItem;
                toAminoMsg(message: _48.GrantQueueItem): _48.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _48.GrantQueueItemProtoMsg): _48.GrantQueueItem;
                toProto(message: _48.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _48.GrantQueueItem): _48.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _53.SendAuthorization | _124.StakeAuthorization | _48.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _56.QueryBalanceRequest): Promise<_56.QueryBalanceResponse>;
                allBalances(request: _56.QueryAllBalancesRequest): Promise<_56.QueryAllBalancesResponse>;
                spendableBalances(request: _56.QuerySpendableBalancesRequest): Promise<_56.QuerySpendableBalancesResponse>;
                totalSupply(request?: _56.QueryTotalSupplyRequest): Promise<_56.QueryTotalSupplyResponse>;
                supplyOf(request: _56.QuerySupplyOfRequest): Promise<_56.QuerySupplyOfResponse>;
                params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                denomMetadata(request: _56.QueryDenomMetadataRequest): Promise<_56.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _56.QueryDenomsMetadataRequest): Promise<_56.QueryDenomsMetadataResponse>;
                denomOwners(request: _56.QueryDenomOwnersRequest): Promise<_56.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _216.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _57.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _57.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _57.MsgSend): {
                        typeUrl: string;
                        value: _57.MsgSend;
                    };
                    multiSend(value: _57.MsgMultiSend): {
                        typeUrl: string;
                        value: _57.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _57.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _57.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _57.MsgSend): {
                        typeUrl: string;
                        value: _57.MsgSend;
                    };
                    multiSend(value: _57.MsgMultiSend): {
                        typeUrl: string;
                        value: _57.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _57.MsgSend) => _57.MsgSendAmino;
                    fromAmino: (object: _57.MsgSendAmino) => _57.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _57.MsgMultiSend) => _57.MsgMultiSendAmino;
                    fromAmino: (object: _57.MsgMultiSendAmino) => _57.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _57.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgSend;
                fromPartial(object: Partial<_57.MsgSend>): _57.MsgSend;
                fromAmino(object: _57.MsgSendAmino): _57.MsgSend;
                toAmino(message: _57.MsgSend): _57.MsgSendAmino;
                fromAminoMsg(object: _57.MsgSendAminoMsg): _57.MsgSend;
                toAminoMsg(message: _57.MsgSend): _57.MsgSendAminoMsg;
                fromProtoMsg(message: _57.MsgSendProtoMsg): _57.MsgSend;
                toProto(message: _57.MsgSend): Uint8Array;
                toProtoMsg(message: _57.MsgSend): _57.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _57.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgSendResponse;
                fromPartial(_: Partial<_57.MsgSendResponse>): _57.MsgSendResponse;
                fromAmino(_: _57.MsgSendResponseAmino): _57.MsgSendResponse;
                toAmino(_: _57.MsgSendResponse): _57.MsgSendResponseAmino;
                fromAminoMsg(object: _57.MsgSendResponseAminoMsg): _57.MsgSendResponse;
                toAminoMsg(message: _57.MsgSendResponse): _57.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _57.MsgSendResponseProtoMsg): _57.MsgSendResponse;
                toProto(message: _57.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _57.MsgSendResponse): _57.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _57.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgMultiSend;
                fromPartial(object: Partial<_57.MsgMultiSend>): _57.MsgMultiSend;
                fromAmino(object: _57.MsgMultiSendAmino): _57.MsgMultiSend;
                toAmino(message: _57.MsgMultiSend): _57.MsgMultiSendAmino;
                fromAminoMsg(object: _57.MsgMultiSendAminoMsg): _57.MsgMultiSend;
                toAminoMsg(message: _57.MsgMultiSend): _57.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _57.MsgMultiSendProtoMsg): _57.MsgMultiSend;
                toProto(message: _57.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _57.MsgMultiSend): _57.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _57.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgMultiSendResponse;
                fromPartial(_: Partial<_57.MsgMultiSendResponse>): _57.MsgMultiSendResponse;
                fromAmino(_: _57.MsgMultiSendResponseAmino): _57.MsgMultiSendResponse;
                toAmino(_: _57.MsgMultiSendResponse): _57.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _57.MsgMultiSendResponseAminoMsg): _57.MsgMultiSendResponse;
                toAminoMsg(message: _57.MsgMultiSendResponse): _57.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _57.MsgMultiSendResponseProtoMsg): _57.MsgMultiSendResponse;
                toProto(message: _57.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _57.MsgMultiSendResponse): _57.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _56.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryBalanceRequest;
                fromPartial(object: Partial<_56.QueryBalanceRequest>): _56.QueryBalanceRequest;
                fromAmino(object: _56.QueryBalanceRequestAmino): _56.QueryBalanceRequest;
                toAmino(message: _56.QueryBalanceRequest): _56.QueryBalanceRequestAmino;
                fromAminoMsg(object: _56.QueryBalanceRequestAminoMsg): _56.QueryBalanceRequest;
                toAminoMsg(message: _56.QueryBalanceRequest): _56.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _56.QueryBalanceRequestProtoMsg): _56.QueryBalanceRequest;
                toProto(message: _56.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _56.QueryBalanceRequest): _56.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _56.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryBalanceResponse;
                fromPartial(object: Partial<_56.QueryBalanceResponse>): _56.QueryBalanceResponse;
                fromAmino(object: _56.QueryBalanceResponseAmino): _56.QueryBalanceResponse;
                toAmino(message: _56.QueryBalanceResponse): _56.QueryBalanceResponseAmino;
                fromAminoMsg(object: _56.QueryBalanceResponseAminoMsg): _56.QueryBalanceResponse;
                toAminoMsg(message: _56.QueryBalanceResponse): _56.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _56.QueryBalanceResponseProtoMsg): _56.QueryBalanceResponse;
                toProto(message: _56.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _56.QueryBalanceResponse): _56.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _56.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllBalancesRequest;
                fromPartial(object: Partial<_56.QueryAllBalancesRequest>): _56.QueryAllBalancesRequest;
                fromAmino(object: _56.QueryAllBalancesRequestAmino): _56.QueryAllBalancesRequest;
                toAmino(message: _56.QueryAllBalancesRequest): _56.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _56.QueryAllBalancesRequestAminoMsg): _56.QueryAllBalancesRequest;
                toAminoMsg(message: _56.QueryAllBalancesRequest): _56.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAllBalancesRequestProtoMsg): _56.QueryAllBalancesRequest;
                toProto(message: _56.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAllBalancesRequest): _56.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _56.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllBalancesResponse;
                fromPartial(object: Partial<_56.QueryAllBalancesResponse>): _56.QueryAllBalancesResponse;
                fromAmino(object: _56.QueryAllBalancesResponseAmino): _56.QueryAllBalancesResponse;
                toAmino(message: _56.QueryAllBalancesResponse): _56.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _56.QueryAllBalancesResponseAminoMsg): _56.QueryAllBalancesResponse;
                toAminoMsg(message: _56.QueryAllBalancesResponse): _56.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAllBalancesResponseProtoMsg): _56.QueryAllBalancesResponse;
                toProto(message: _56.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAllBalancesResponse): _56.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _56.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_56.QuerySpendableBalancesRequest>): _56.QuerySpendableBalancesRequest;
                fromAmino(object: _56.QuerySpendableBalancesRequestAmino): _56.QuerySpendableBalancesRequest;
                toAmino(message: _56.QuerySpendableBalancesRequest): _56.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _56.QuerySpendableBalancesRequestAminoMsg): _56.QuerySpendableBalancesRequest;
                toAminoMsg(message: _56.QuerySpendableBalancesRequest): _56.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _56.QuerySpendableBalancesRequestProtoMsg): _56.QuerySpendableBalancesRequest;
                toProto(message: _56.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _56.QuerySpendableBalancesRequest): _56.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _56.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_56.QuerySpendableBalancesResponse>): _56.QuerySpendableBalancesResponse;
                fromAmino(object: _56.QuerySpendableBalancesResponseAmino): _56.QuerySpendableBalancesResponse;
                toAmino(message: _56.QuerySpendableBalancesResponse): _56.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _56.QuerySpendableBalancesResponseAminoMsg): _56.QuerySpendableBalancesResponse;
                toAminoMsg(message: _56.QuerySpendableBalancesResponse): _56.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _56.QuerySpendableBalancesResponseProtoMsg): _56.QuerySpendableBalancesResponse;
                toProto(message: _56.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _56.QuerySpendableBalancesResponse): _56.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _56.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_56.QueryTotalSupplyRequest>): _56.QueryTotalSupplyRequest;
                fromAmino(object: _56.QueryTotalSupplyRequestAmino): _56.QueryTotalSupplyRequest;
                toAmino(message: _56.QueryTotalSupplyRequest): _56.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _56.QueryTotalSupplyRequestAminoMsg): _56.QueryTotalSupplyRequest;
                toAminoMsg(message: _56.QueryTotalSupplyRequest): _56.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _56.QueryTotalSupplyRequestProtoMsg): _56.QueryTotalSupplyRequest;
                toProto(message: _56.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _56.QueryTotalSupplyRequest): _56.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _56.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_56.QueryTotalSupplyResponse>): _56.QueryTotalSupplyResponse;
                fromAmino(object: _56.QueryTotalSupplyResponseAmino): _56.QueryTotalSupplyResponse;
                toAmino(message: _56.QueryTotalSupplyResponse): _56.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _56.QueryTotalSupplyResponseAminoMsg): _56.QueryTotalSupplyResponse;
                toAminoMsg(message: _56.QueryTotalSupplyResponse): _56.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _56.QueryTotalSupplyResponseProtoMsg): _56.QueryTotalSupplyResponse;
                toProto(message: _56.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _56.QueryTotalSupplyResponse): _56.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _56.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QuerySupplyOfRequest;
                fromPartial(object: Partial<_56.QuerySupplyOfRequest>): _56.QuerySupplyOfRequest;
                fromAmino(object: _56.QuerySupplyOfRequestAmino): _56.QuerySupplyOfRequest;
                toAmino(message: _56.QuerySupplyOfRequest): _56.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _56.QuerySupplyOfRequestAminoMsg): _56.QuerySupplyOfRequest;
                toAminoMsg(message: _56.QuerySupplyOfRequest): _56.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _56.QuerySupplyOfRequestProtoMsg): _56.QuerySupplyOfRequest;
                toProto(message: _56.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _56.QuerySupplyOfRequest): _56.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _56.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QuerySupplyOfResponse;
                fromPartial(object: Partial<_56.QuerySupplyOfResponse>): _56.QuerySupplyOfResponse;
                fromAmino(object: _56.QuerySupplyOfResponseAmino): _56.QuerySupplyOfResponse;
                toAmino(message: _56.QuerySupplyOfResponse): _56.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _56.QuerySupplyOfResponseAminoMsg): _56.QuerySupplyOfResponse;
                toAminoMsg(message: _56.QuerySupplyOfResponse): _56.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _56.QuerySupplyOfResponseProtoMsg): _56.QuerySupplyOfResponse;
                toProto(message: _56.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _56.QuerySupplyOfResponse): _56.QuerySupplyOfResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _56.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_56.QueryDenomsMetadataRequest>): _56.QueryDenomsMetadataRequest;
                fromAmino(object: _56.QueryDenomsMetadataRequestAmino): _56.QueryDenomsMetadataRequest;
                toAmino(message: _56.QueryDenomsMetadataRequest): _56.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _56.QueryDenomsMetadataRequestAminoMsg): _56.QueryDenomsMetadataRequest;
                toAminoMsg(message: _56.QueryDenomsMetadataRequest): _56.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDenomsMetadataRequestProtoMsg): _56.QueryDenomsMetadataRequest;
                toProto(message: _56.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDenomsMetadataRequest): _56.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _56.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_56.QueryDenomsMetadataResponse>): _56.QueryDenomsMetadataResponse;
                fromAmino(object: _56.QueryDenomsMetadataResponseAmino): _56.QueryDenomsMetadataResponse;
                toAmino(message: _56.QueryDenomsMetadataResponse): _56.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _56.QueryDenomsMetadataResponseAminoMsg): _56.QueryDenomsMetadataResponse;
                toAminoMsg(message: _56.QueryDenomsMetadataResponse): _56.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDenomsMetadataResponseProtoMsg): _56.QueryDenomsMetadataResponse;
                toProto(message: _56.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDenomsMetadataResponse): _56.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _56.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_56.QueryDenomMetadataRequest>): _56.QueryDenomMetadataRequest;
                fromAmino(object: _56.QueryDenomMetadataRequestAmino): _56.QueryDenomMetadataRequest;
                toAmino(message: _56.QueryDenomMetadataRequest): _56.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _56.QueryDenomMetadataRequestAminoMsg): _56.QueryDenomMetadataRequest;
                toAminoMsg(message: _56.QueryDenomMetadataRequest): _56.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDenomMetadataRequestProtoMsg): _56.QueryDenomMetadataRequest;
                toProto(message: _56.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDenomMetadataRequest): _56.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _56.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_56.QueryDenomMetadataResponse>): _56.QueryDenomMetadataResponse;
                fromAmino(object: _56.QueryDenomMetadataResponseAmino): _56.QueryDenomMetadataResponse;
                toAmino(message: _56.QueryDenomMetadataResponse): _56.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _56.QueryDenomMetadataResponseAminoMsg): _56.QueryDenomMetadataResponse;
                toAminoMsg(message: _56.QueryDenomMetadataResponse): _56.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDenomMetadataResponseProtoMsg): _56.QueryDenomMetadataResponse;
                toProto(message: _56.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDenomMetadataResponse): _56.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _56.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_56.QueryDenomOwnersRequest>): _56.QueryDenomOwnersRequest;
                fromAmino(object: _56.QueryDenomOwnersRequestAmino): _56.QueryDenomOwnersRequest;
                toAmino(message: _56.QueryDenomOwnersRequest): _56.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _56.QueryDenomOwnersRequestAminoMsg): _56.QueryDenomOwnersRequest;
                toAminoMsg(message: _56.QueryDenomOwnersRequest): _56.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDenomOwnersRequestProtoMsg): _56.QueryDenomOwnersRequest;
                toProto(message: _56.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDenomOwnersRequest): _56.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _56.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DenomOwner;
                fromPartial(object: Partial<_56.DenomOwner>): _56.DenomOwner;
                fromAmino(object: _56.DenomOwnerAmino): _56.DenomOwner;
                toAmino(message: _56.DenomOwner): _56.DenomOwnerAmino;
                fromAminoMsg(object: _56.DenomOwnerAminoMsg): _56.DenomOwner;
                toAminoMsg(message: _56.DenomOwner): _56.DenomOwnerAminoMsg;
                fromProtoMsg(message: _56.DenomOwnerProtoMsg): _56.DenomOwner;
                toProto(message: _56.DenomOwner): Uint8Array;
                toProtoMsg(message: _56.DenomOwner): _56.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _56.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_56.QueryDenomOwnersResponse>): _56.QueryDenomOwnersResponse;
                fromAmino(object: _56.QueryDenomOwnersResponseAmino): _56.QueryDenomOwnersResponse;
                toAmino(message: _56.QueryDenomOwnersResponse): _56.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _56.QueryDenomOwnersResponseAminoMsg): _56.QueryDenomOwnersResponse;
                toAminoMsg(message: _56.QueryDenomOwnersResponse): _56.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDenomOwnersResponseProtoMsg): _56.QueryDenomOwnersResponse;
                toProto(message: _56.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDenomOwnersResponse): _56.QueryDenomOwnersResponseProtoMsg;
            };
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
            Balance: {
                typeUrl: string;
                encode(message: _55.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Balance;
                fromPartial(object: Partial<_55.Balance>): _55.Balance;
                fromAmino(object: _55.BalanceAmino): _55.Balance;
                toAmino(message: _55.Balance): _55.BalanceAmino;
                fromAminoMsg(object: _55.BalanceAminoMsg): _55.Balance;
                toAminoMsg(message: _55.Balance): _55.BalanceAminoMsg;
                fromProtoMsg(message: _55.BalanceProtoMsg): _55.Balance;
                toProto(message: _55.Balance): Uint8Array;
                toProtoMsg(message: _55.Balance): _55.BalanceProtoMsg;
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
            SendEnabled: {
                typeUrl: string;
                encode(message: _54.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.SendEnabled;
                fromPartial(object: Partial<_54.SendEnabled>): _54.SendEnabled;
                fromAmino(object: _54.SendEnabledAmino): _54.SendEnabled;
                toAmino(message: _54.SendEnabled): _54.SendEnabledAmino;
                fromAminoMsg(object: _54.SendEnabledAminoMsg): _54.SendEnabled;
                toAminoMsg(message: _54.SendEnabled): _54.SendEnabledAminoMsg;
                fromProtoMsg(message: _54.SendEnabledProtoMsg): _54.SendEnabled;
                toProto(message: _54.SendEnabled): Uint8Array;
                toProtoMsg(message: _54.SendEnabled): _54.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _54.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Input;
                fromPartial(object: Partial<_54.Input>): _54.Input;
                fromAmino(object: _54.InputAmino): _54.Input;
                toAmino(message: _54.Input): _54.InputAmino;
                fromAminoMsg(object: _54.InputAminoMsg): _54.Input;
                toAminoMsg(message: _54.Input): _54.InputAminoMsg;
                fromProtoMsg(message: _54.InputProtoMsg): _54.Input;
                toProto(message: _54.Input): Uint8Array;
                toProtoMsg(message: _54.Input): _54.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _54.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Output;
                fromPartial(object: Partial<_54.Output>): _54.Output;
                fromAmino(object: _54.OutputAmino): _54.Output;
                toAmino(message: _54.Output): _54.OutputAmino;
                fromAminoMsg(object: _54.OutputAminoMsg): _54.Output;
                toAminoMsg(message: _54.Output): _54.OutputAminoMsg;
                fromProtoMsg(message: _54.OutputProtoMsg): _54.Output;
                toProto(message: _54.Output): Uint8Array;
                toProtoMsg(message: _54.Output): _54.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _54.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Supply;
                fromPartial(object: Partial<_54.Supply>): _54.Supply;
                fromAmino(object: _54.SupplyAmino): _54.Supply;
                toAmino(message: _54.Supply): _54.SupplyAmino;
                fromAminoMsg(object: _54.SupplyAminoMsg): _54.Supply;
                toAminoMsg(message: _54.Supply): _54.SupplyAminoMsg;
                fromProtoMsg(message: _54.SupplyProtoMsg): _54.Supply;
                toProto(message: _54.Supply): Uint8Array;
                toProtoMsg(message: _54.Supply): _54.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _54.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.DenomUnit;
                fromPartial(object: Partial<_54.DenomUnit>): _54.DenomUnit;
                fromAmino(object: _54.DenomUnitAmino): _54.DenomUnit;
                toAmino(message: _54.DenomUnit): _54.DenomUnitAmino;
                fromAminoMsg(object: _54.DenomUnitAminoMsg): _54.DenomUnit;
                toAminoMsg(message: _54.DenomUnit): _54.DenomUnitAminoMsg;
                fromProtoMsg(message: _54.DenomUnitProtoMsg): _54.DenomUnit;
                toProto(message: _54.DenomUnit): Uint8Array;
                toProtoMsg(message: _54.DenomUnit): _54.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _54.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Metadata;
                fromPartial(object: Partial<_54.Metadata>): _54.Metadata;
                fromAmino(object: _54.MetadataAmino): _54.Metadata;
                toAmino(message: _54.Metadata): _54.MetadataAmino;
                fromAminoMsg(object: _54.MetadataAminoMsg): _54.Metadata;
                toAminoMsg(message: _54.Metadata): _54.MetadataAminoMsg;
                fromProtoMsg(message: _54.MetadataProtoMsg): _54.Metadata;
                toProto(message: _54.Metadata): Uint8Array;
                toProtoMsg(message: _54.Metadata): _54.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _53.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.SendAuthorization;
                fromPartial(object: Partial<_53.SendAuthorization>): _53.SendAuthorization;
                fromAmino(object: _53.SendAuthorizationAmino): _53.SendAuthorization;
                toAmino(message: _53.SendAuthorization): _53.SendAuthorizationAmino;
                fromAminoMsg(object: _53.SendAuthorizationAminoMsg): _53.SendAuthorization;
                toAminoMsg(message: _53.SendAuthorization): _53.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _53.SendAuthorizationProtoMsg): _53.SendAuthorization;
                toProto(message: _53.SendAuthorization): Uint8Array;
                toProtoMsg(message: _53.SendAuthorization): _53.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _58.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.TxResponse;
                    fromPartial(object: Partial<_58.TxResponse>): _58.TxResponse;
                    fromAmino(object: _58.TxResponseAmino): _58.TxResponse;
                    toAmino(message: _58.TxResponse): _58.TxResponseAmino;
                    fromAminoMsg(object: _58.TxResponseAminoMsg): _58.TxResponse;
                    toAminoMsg(message: _58.TxResponse): _58.TxResponseAminoMsg;
                    fromProtoMsg(message: _58.TxResponseProtoMsg): _58.TxResponse;
                    toProto(message: _58.TxResponse): Uint8Array;
                    toProtoMsg(message: _58.TxResponse): _58.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _58.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.ABCIMessageLog;
                    fromPartial(object: Partial<_58.ABCIMessageLog>): _58.ABCIMessageLog;
                    fromAmino(object: _58.ABCIMessageLogAmino): _58.ABCIMessageLog;
                    toAmino(message: _58.ABCIMessageLog): _58.ABCIMessageLogAmino;
                    fromAminoMsg(object: _58.ABCIMessageLogAminoMsg): _58.ABCIMessageLog;
                    toAminoMsg(message: _58.ABCIMessageLog): _58.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _58.ABCIMessageLogProtoMsg): _58.ABCIMessageLog;
                    toProto(message: _58.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _58.ABCIMessageLog): _58.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _58.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.StringEvent;
                    fromPartial(object: Partial<_58.StringEvent>): _58.StringEvent;
                    fromAmino(object: _58.StringEventAmino): _58.StringEvent;
                    toAmino(message: _58.StringEvent): _58.StringEventAmino;
                    fromAminoMsg(object: _58.StringEventAminoMsg): _58.StringEvent;
                    toAminoMsg(message: _58.StringEvent): _58.StringEventAminoMsg;
                    fromProtoMsg(message: _58.StringEventProtoMsg): _58.StringEvent;
                    toProto(message: _58.StringEvent): Uint8Array;
                    toProtoMsg(message: _58.StringEvent): _58.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _58.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.Attribute;
                    fromPartial(object: Partial<_58.Attribute>): _58.Attribute;
                    fromAmino(object: _58.AttributeAmino): _58.Attribute;
                    toAmino(message: _58.Attribute): _58.AttributeAmino;
                    fromAminoMsg(object: _58.AttributeAminoMsg): _58.Attribute;
                    toAminoMsg(message: _58.Attribute): _58.AttributeAminoMsg;
                    fromProtoMsg(message: _58.AttributeProtoMsg): _58.Attribute;
                    toProto(message: _58.Attribute): Uint8Array;
                    toProtoMsg(message: _58.Attribute): _58.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _58.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.GasInfo;
                    fromPartial(object: Partial<_58.GasInfo>): _58.GasInfo;
                    fromAmino(object: _58.GasInfoAmino): _58.GasInfo;
                    toAmino(message: _58.GasInfo): _58.GasInfoAmino;
                    fromAminoMsg(object: _58.GasInfoAminoMsg): _58.GasInfo;
                    toAminoMsg(message: _58.GasInfo): _58.GasInfoAminoMsg;
                    fromProtoMsg(message: _58.GasInfoProtoMsg): _58.GasInfo;
                    toProto(message: _58.GasInfo): Uint8Array;
                    toProtoMsg(message: _58.GasInfo): _58.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _58.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.Result;
                    fromPartial(object: Partial<_58.Result>): _58.Result;
                    fromAmino(object: _58.ResultAmino): _58.Result;
                    toAmino(message: _58.Result): _58.ResultAmino;
                    fromAminoMsg(object: _58.ResultAminoMsg): _58.Result;
                    toAminoMsg(message: _58.Result): _58.ResultAminoMsg;
                    fromProtoMsg(message: _58.ResultProtoMsg): _58.Result;
                    toProto(message: _58.Result): Uint8Array;
                    toProtoMsg(message: _58.Result): _58.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _58.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.SimulationResponse;
                    fromPartial(object: Partial<_58.SimulationResponse>): _58.SimulationResponse;
                    fromAmino(object: _58.SimulationResponseAmino): _58.SimulationResponse;
                    toAmino(message: _58.SimulationResponse): _58.SimulationResponseAmino;
                    fromAminoMsg(object: _58.SimulationResponseAminoMsg): _58.SimulationResponse;
                    toAminoMsg(message: _58.SimulationResponse): _58.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _58.SimulationResponseProtoMsg): _58.SimulationResponse;
                    toProto(message: _58.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _58.SimulationResponse): _58.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _58.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.MsgData;
                    fromPartial(object: Partial<_58.MsgData>): _58.MsgData;
                    fromAmino(object: _58.MsgDataAmino): _58.MsgData;
                    toAmino(message: _58.MsgData): _58.MsgDataAmino;
                    fromAminoMsg(object: _58.MsgDataAminoMsg): _58.MsgData;
                    toAminoMsg(message: _58.MsgData): _58.MsgDataAminoMsg;
                    fromProtoMsg(message: _58.MsgDataProtoMsg): _58.MsgData;
                    toProto(message: _58.MsgData): Uint8Array;
                    toProtoMsg(message: _58.MsgData): _58.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _58.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.TxMsgData;
                    fromPartial(object: Partial<_58.TxMsgData>): _58.TxMsgData;
                    fromAmino(object: _58.TxMsgDataAmino): _58.TxMsgData;
                    toAmino(message: _58.TxMsgData): _58.TxMsgDataAmino;
                    fromAminoMsg(object: _58.TxMsgDataAminoMsg): _58.TxMsgData;
                    toAminoMsg(message: _58.TxMsgData): _58.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _58.TxMsgDataProtoMsg): _58.TxMsgData;
                    toProto(message: _58.TxMsgData): Uint8Array;
                    toProtoMsg(message: _58.TxMsgData): _58.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _58.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.SearchTxsResult;
                    fromPartial(object: Partial<_58.SearchTxsResult>): _58.SearchTxsResult;
                    fromAmino(object: _58.SearchTxsResultAmino): _58.SearchTxsResult;
                    toAmino(message: _58.SearchTxsResult): _58.SearchTxsResultAmino;
                    fromAminoMsg(object: _58.SearchTxsResultAminoMsg): _58.SearchTxsResult;
                    toAminoMsg(message: _58.SearchTxsResult): _58.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _58.SearchTxsResultProtoMsg): _58.SearchTxsResult;
                    toProto(message: _58.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _58.SearchTxsResult): _58.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _59.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.Pairs;
                    fromPartial(object: Partial<_59.Pairs>): _59.Pairs;
                    fromAmino(object: _59.PairsAmino): _59.Pairs;
                    toAmino(message: _59.Pairs): _59.PairsAmino;
                    fromAminoMsg(object: _59.PairsAminoMsg): _59.Pairs;
                    toAminoMsg(message: _59.Pairs): _59.PairsAminoMsg;
                    fromProtoMsg(message: _59.PairsProtoMsg): _59.Pairs;
                    toProto(message: _59.Pairs): Uint8Array;
                    toProtoMsg(message: _59.Pairs): _59.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _59.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.Pair;
                    fromPartial(object: Partial<_59.Pair>): _59.Pair;
                    fromAmino(object: _59.PairAmino): _59.Pair;
                    toAmino(message: _59.Pair): _59.PairAmino;
                    fromAminoMsg(object: _59.PairAminoMsg): _59.Pair;
                    toAminoMsg(message: _59.Pair): _59.PairAminoMsg;
                    fromProtoMsg(message: _59.PairProtoMsg): _59.Pair;
                    toProto(message: _59.Pair): Uint8Array;
                    toProtoMsg(message: _59.Pair): _59.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _236.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _60.ConfigRequest): Promise<_60.ConfigResponse>;
                };
                LCDQueryClient: typeof _217.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _60.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _60.ConfigRequest;
                    fromPartial(_: Partial<_60.ConfigRequest>): _60.ConfigRequest;
                    fromAmino(_: _60.ConfigRequestAmino): _60.ConfigRequest;
                    toAmino(_: _60.ConfigRequest): _60.ConfigRequestAmino;
                    fromAminoMsg(object: _60.ConfigRequestAminoMsg): _60.ConfigRequest;
                    toAminoMsg(message: _60.ConfigRequest): _60.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _60.ConfigRequestProtoMsg): _60.ConfigRequest;
                    toProto(message: _60.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _60.ConfigRequest): _60.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _60.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.ConfigResponse;
                    fromPartial(object: Partial<_60.ConfigResponse>): _60.ConfigResponse;
                    fromAmino(object: _60.ConfigResponseAmino): _60.ConfigResponse;
                    toAmino(message: _60.ConfigResponse): _60.ConfigResponseAmino;
                    fromAminoMsg(object: _60.ConfigResponseAminoMsg): _60.ConfigResponse;
                    toAminoMsg(message: _60.ConfigResponse): _60.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _60.ConfigResponseProtoMsg): _60.ConfigResponse;
                    toProto(message: _60.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _60.ConfigResponse): _60.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _61.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.PageRequest;
                    fromPartial(object: Partial<_61.PageRequest>): _61.PageRequest;
                    fromAmino(object: _61.PageRequestAmino): _61.PageRequest;
                    toAmino(message: _61.PageRequest): _61.PageRequestAmino;
                    fromAminoMsg(object: _61.PageRequestAminoMsg): _61.PageRequest;
                    toAminoMsg(message: _61.PageRequest): _61.PageRequestAminoMsg;
                    fromProtoMsg(message: _61.PageRequestProtoMsg): _61.PageRequest;
                    toProto(message: _61.PageRequest): Uint8Array;
                    toProtoMsg(message: _61.PageRequest): _61.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _61.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.PageResponse;
                    fromPartial(object: Partial<_61.PageResponse>): _61.PageResponse;
                    fromAmino(object: _61.PageResponseAmino): _61.PageResponse;
                    toAmino(message: _61.PageResponse): _61.PageResponseAmino;
                    fromAminoMsg(object: _61.PageResponseAminoMsg): _61.PageResponse;
                    toAminoMsg(message: _61.PageResponse): _61.PageResponseAminoMsg;
                    fromProtoMsg(message: _61.PageResponseProtoMsg): _61.PageResponse;
                    toProto(message: _61.PageResponse): Uint8Array;
                    toProtoMsg(message: _61.PageResponse): _61.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _62.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _62.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_62.ListAllInterfacesRequest>): _62.ListAllInterfacesRequest;
                    fromAmino(_: _62.ListAllInterfacesRequestAmino): _62.ListAllInterfacesRequest;
                    toAmino(_: _62.ListAllInterfacesRequest): _62.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _62.ListAllInterfacesRequestAminoMsg): _62.ListAllInterfacesRequest;
                    toAminoMsg(message: _62.ListAllInterfacesRequest): _62.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _62.ListAllInterfacesRequestProtoMsg): _62.ListAllInterfacesRequest;
                    toProto(message: _62.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _62.ListAllInterfacesRequest): _62.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _62.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_62.ListAllInterfacesResponse>): _62.ListAllInterfacesResponse;
                    fromAmino(object: _62.ListAllInterfacesResponseAmino): _62.ListAllInterfacesResponse;
                    toAmino(message: _62.ListAllInterfacesResponse): _62.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _62.ListAllInterfacesResponseAminoMsg): _62.ListAllInterfacesResponse;
                    toAminoMsg(message: _62.ListAllInterfacesResponse): _62.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _62.ListAllInterfacesResponseProtoMsg): _62.ListAllInterfacesResponse;
                    toProto(message: _62.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _62.ListAllInterfacesResponse): _62.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _62.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.ListImplementationsRequest;
                    fromPartial(object: Partial<_62.ListImplementationsRequest>): _62.ListImplementationsRequest;
                    fromAmino(object: _62.ListImplementationsRequestAmino): _62.ListImplementationsRequest;
                    toAmino(message: _62.ListImplementationsRequest): _62.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _62.ListImplementationsRequestAminoMsg): _62.ListImplementationsRequest;
                    toAminoMsg(message: _62.ListImplementationsRequest): _62.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _62.ListImplementationsRequestProtoMsg): _62.ListImplementationsRequest;
                    toProto(message: _62.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _62.ListImplementationsRequest): _62.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _62.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.ListImplementationsResponse;
                    fromPartial(object: Partial<_62.ListImplementationsResponse>): _62.ListImplementationsResponse;
                    fromAmino(object: _62.ListImplementationsResponseAmino): _62.ListImplementationsResponse;
                    toAmino(message: _62.ListImplementationsResponse): _62.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _62.ListImplementationsResponseAminoMsg): _62.ListImplementationsResponse;
                    toAminoMsg(message: _62.ListImplementationsResponse): _62.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _62.ListImplementationsResponseProtoMsg): _62.ListImplementationsResponse;
                    toProto(message: _62.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _62.ListImplementationsResponse): _62.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _63.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.AppDescriptor;
                    fromPartial(object: Partial<_63.AppDescriptor>): _63.AppDescriptor;
                    fromAmino(object: _63.AppDescriptorAmino): _63.AppDescriptor;
                    toAmino(message: _63.AppDescriptor): _63.AppDescriptorAmino;
                    fromAminoMsg(object: _63.AppDescriptorAminoMsg): _63.AppDescriptor;
                    toAminoMsg(message: _63.AppDescriptor): _63.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _63.AppDescriptorProtoMsg): _63.AppDescriptor;
                    toProto(message: _63.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _63.AppDescriptor): _63.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _63.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.TxDescriptor;
                    fromPartial(object: Partial<_63.TxDescriptor>): _63.TxDescriptor;
                    fromAmino(object: _63.TxDescriptorAmino): _63.TxDescriptor;
                    toAmino(message: _63.TxDescriptor): _63.TxDescriptorAmino;
                    fromAminoMsg(object: _63.TxDescriptorAminoMsg): _63.TxDescriptor;
                    toAminoMsg(message: _63.TxDescriptor): _63.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _63.TxDescriptorProtoMsg): _63.TxDescriptor;
                    toProto(message: _63.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _63.TxDescriptor): _63.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _63.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.AuthnDescriptor;
                    fromPartial(object: Partial<_63.AuthnDescriptor>): _63.AuthnDescriptor;
                    fromAmino(object: _63.AuthnDescriptorAmino): _63.AuthnDescriptor;
                    toAmino(message: _63.AuthnDescriptor): _63.AuthnDescriptorAmino;
                    fromAminoMsg(object: _63.AuthnDescriptorAminoMsg): _63.AuthnDescriptor;
                    toAminoMsg(message: _63.AuthnDescriptor): _63.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _63.AuthnDescriptorProtoMsg): _63.AuthnDescriptor;
                    toProto(message: _63.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _63.AuthnDescriptor): _63.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _63.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.SigningModeDescriptor;
                    fromPartial(object: Partial<_63.SigningModeDescriptor>): _63.SigningModeDescriptor;
                    fromAmino(object: _63.SigningModeDescriptorAmino): _63.SigningModeDescriptor;
                    toAmino(message: _63.SigningModeDescriptor): _63.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _63.SigningModeDescriptorAminoMsg): _63.SigningModeDescriptor;
                    toAminoMsg(message: _63.SigningModeDescriptor): _63.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _63.SigningModeDescriptorProtoMsg): _63.SigningModeDescriptor;
                    toProto(message: _63.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _63.SigningModeDescriptor): _63.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _63.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.ChainDescriptor;
                    fromPartial(object: Partial<_63.ChainDescriptor>): _63.ChainDescriptor;
                    fromAmino(object: _63.ChainDescriptorAmino): _63.ChainDescriptor;
                    toAmino(message: _63.ChainDescriptor): _63.ChainDescriptorAmino;
                    fromAminoMsg(object: _63.ChainDescriptorAminoMsg): _63.ChainDescriptor;
                    toAminoMsg(message: _63.ChainDescriptor): _63.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _63.ChainDescriptorProtoMsg): _63.ChainDescriptor;
                    toProto(message: _63.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _63.ChainDescriptor): _63.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _63.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.CodecDescriptor;
                    fromPartial(object: Partial<_63.CodecDescriptor>): _63.CodecDescriptor;
                    fromAmino(object: _63.CodecDescriptorAmino): _63.CodecDescriptor;
                    toAmino(message: _63.CodecDescriptor): _63.CodecDescriptorAmino;
                    fromAminoMsg(object: _63.CodecDescriptorAminoMsg): _63.CodecDescriptor;
                    toAminoMsg(message: _63.CodecDescriptor): _63.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _63.CodecDescriptorProtoMsg): _63.CodecDescriptor;
                    toProto(message: _63.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _63.CodecDescriptor): _63.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _63.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.InterfaceDescriptor;
                    fromPartial(object: Partial<_63.InterfaceDescriptor>): _63.InterfaceDescriptor;
                    fromAmino(object: _63.InterfaceDescriptorAmino): _63.InterfaceDescriptor;
                    toAmino(message: _63.InterfaceDescriptor): _63.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _63.InterfaceDescriptorAminoMsg): _63.InterfaceDescriptor;
                    toAminoMsg(message: _63.InterfaceDescriptor): _63.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _63.InterfaceDescriptorProtoMsg): _63.InterfaceDescriptor;
                    toProto(message: _63.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _63.InterfaceDescriptor): _63.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _63.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_63.InterfaceImplementerDescriptor>): _63.InterfaceImplementerDescriptor;
                    fromAmino(object: _63.InterfaceImplementerDescriptorAmino): _63.InterfaceImplementerDescriptor;
                    toAmino(message: _63.InterfaceImplementerDescriptor): _63.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _63.InterfaceImplementerDescriptorAminoMsg): _63.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _63.InterfaceImplementerDescriptor): _63.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _63.InterfaceImplementerDescriptorProtoMsg): _63.InterfaceImplementerDescriptor;
                    toProto(message: _63.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _63.InterfaceImplementerDescriptor): _63.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _63.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_63.InterfaceAcceptingMessageDescriptor>): _63.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _63.InterfaceAcceptingMessageDescriptorAmino): _63.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _63.InterfaceAcceptingMessageDescriptor): _63.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _63.InterfaceAcceptingMessageDescriptorAminoMsg): _63.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _63.InterfaceAcceptingMessageDescriptor): _63.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _63.InterfaceAcceptingMessageDescriptorProtoMsg): _63.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _63.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _63.InterfaceAcceptingMessageDescriptor): _63.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _63.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.ConfigurationDescriptor;
                    fromPartial(object: Partial<_63.ConfigurationDescriptor>): _63.ConfigurationDescriptor;
                    fromAmino(object: _63.ConfigurationDescriptorAmino): _63.ConfigurationDescriptor;
                    toAmino(message: _63.ConfigurationDescriptor): _63.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _63.ConfigurationDescriptorAminoMsg): _63.ConfigurationDescriptor;
                    toAminoMsg(message: _63.ConfigurationDescriptor): _63.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _63.ConfigurationDescriptorProtoMsg): _63.ConfigurationDescriptor;
                    toProto(message: _63.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _63.ConfigurationDescriptor): _63.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _63.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.MsgDescriptor;
                    fromPartial(object: Partial<_63.MsgDescriptor>): _63.MsgDescriptor;
                    fromAmino(object: _63.MsgDescriptorAmino): _63.MsgDescriptor;
                    toAmino(message: _63.MsgDescriptor): _63.MsgDescriptorAmino;
                    fromAminoMsg(object: _63.MsgDescriptorAminoMsg): _63.MsgDescriptor;
                    toAminoMsg(message: _63.MsgDescriptor): _63.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _63.MsgDescriptorProtoMsg): _63.MsgDescriptor;
                    toProto(message: _63.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _63.MsgDescriptor): _63.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _63.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_63.GetAuthnDescriptorRequest>): _63.GetAuthnDescriptorRequest;
                    fromAmino(_: _63.GetAuthnDescriptorRequestAmino): _63.GetAuthnDescriptorRequest;
                    toAmino(_: _63.GetAuthnDescriptorRequest): _63.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _63.GetAuthnDescriptorRequestAminoMsg): _63.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _63.GetAuthnDescriptorRequest): _63.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _63.GetAuthnDescriptorRequestProtoMsg): _63.GetAuthnDescriptorRequest;
                    toProto(message: _63.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _63.GetAuthnDescriptorRequest): _63.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _63.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_63.GetAuthnDescriptorResponse>): _63.GetAuthnDescriptorResponse;
                    fromAmino(object: _63.GetAuthnDescriptorResponseAmino): _63.GetAuthnDescriptorResponse;
                    toAmino(message: _63.GetAuthnDescriptorResponse): _63.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _63.GetAuthnDescriptorResponseAminoMsg): _63.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _63.GetAuthnDescriptorResponse): _63.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _63.GetAuthnDescriptorResponseProtoMsg): _63.GetAuthnDescriptorResponse;
                    toProto(message: _63.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _63.GetAuthnDescriptorResponse): _63.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _63.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_63.GetChainDescriptorRequest>): _63.GetChainDescriptorRequest;
                    fromAmino(_: _63.GetChainDescriptorRequestAmino): _63.GetChainDescriptorRequest;
                    toAmino(_: _63.GetChainDescriptorRequest): _63.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _63.GetChainDescriptorRequestAminoMsg): _63.GetChainDescriptorRequest;
                    toAminoMsg(message: _63.GetChainDescriptorRequest): _63.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _63.GetChainDescriptorRequestProtoMsg): _63.GetChainDescriptorRequest;
                    toProto(message: _63.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _63.GetChainDescriptorRequest): _63.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _63.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_63.GetChainDescriptorResponse>): _63.GetChainDescriptorResponse;
                    fromAmino(object: _63.GetChainDescriptorResponseAmino): _63.GetChainDescriptorResponse;
                    toAmino(message: _63.GetChainDescriptorResponse): _63.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _63.GetChainDescriptorResponseAminoMsg): _63.GetChainDescriptorResponse;
                    toAminoMsg(message: _63.GetChainDescriptorResponse): _63.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _63.GetChainDescriptorResponseProtoMsg): _63.GetChainDescriptorResponse;
                    toProto(message: _63.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _63.GetChainDescriptorResponse): _63.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _63.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_63.GetCodecDescriptorRequest>): _63.GetCodecDescriptorRequest;
                    fromAmino(_: _63.GetCodecDescriptorRequestAmino): _63.GetCodecDescriptorRequest;
                    toAmino(_: _63.GetCodecDescriptorRequest): _63.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _63.GetCodecDescriptorRequestAminoMsg): _63.GetCodecDescriptorRequest;
                    toAminoMsg(message: _63.GetCodecDescriptorRequest): _63.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _63.GetCodecDescriptorRequestProtoMsg): _63.GetCodecDescriptorRequest;
                    toProto(message: _63.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _63.GetCodecDescriptorRequest): _63.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _63.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_63.GetCodecDescriptorResponse>): _63.GetCodecDescriptorResponse;
                    fromAmino(object: _63.GetCodecDescriptorResponseAmino): _63.GetCodecDescriptorResponse;
                    toAmino(message: _63.GetCodecDescriptorResponse): _63.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _63.GetCodecDescriptorResponseAminoMsg): _63.GetCodecDescriptorResponse;
                    toAminoMsg(message: _63.GetCodecDescriptorResponse): _63.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _63.GetCodecDescriptorResponseProtoMsg): _63.GetCodecDescriptorResponse;
                    toProto(message: _63.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _63.GetCodecDescriptorResponse): _63.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _63.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_63.GetConfigurationDescriptorRequest>): _63.GetConfigurationDescriptorRequest;
                    fromAmino(_: _63.GetConfigurationDescriptorRequestAmino): _63.GetConfigurationDescriptorRequest;
                    toAmino(_: _63.GetConfigurationDescriptorRequest): _63.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _63.GetConfigurationDescriptorRequestAminoMsg): _63.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _63.GetConfigurationDescriptorRequest): _63.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _63.GetConfigurationDescriptorRequestProtoMsg): _63.GetConfigurationDescriptorRequest;
                    toProto(message: _63.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _63.GetConfigurationDescriptorRequest): _63.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _63.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_63.GetConfigurationDescriptorResponse>): _63.GetConfigurationDescriptorResponse;
                    fromAmino(object: _63.GetConfigurationDescriptorResponseAmino): _63.GetConfigurationDescriptorResponse;
                    toAmino(message: _63.GetConfigurationDescriptorResponse): _63.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _63.GetConfigurationDescriptorResponseAminoMsg): _63.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _63.GetConfigurationDescriptorResponse): _63.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _63.GetConfigurationDescriptorResponseProtoMsg): _63.GetConfigurationDescriptorResponse;
                    toProto(message: _63.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _63.GetConfigurationDescriptorResponse): _63.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _63.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_63.GetQueryServicesDescriptorRequest>): _63.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _63.GetQueryServicesDescriptorRequestAmino): _63.GetQueryServicesDescriptorRequest;
                    toAmino(_: _63.GetQueryServicesDescriptorRequest): _63.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _63.GetQueryServicesDescriptorRequestAminoMsg): _63.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _63.GetQueryServicesDescriptorRequest): _63.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _63.GetQueryServicesDescriptorRequestProtoMsg): _63.GetQueryServicesDescriptorRequest;
                    toProto(message: _63.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _63.GetQueryServicesDescriptorRequest): _63.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _63.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_63.GetQueryServicesDescriptorResponse>): _63.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _63.GetQueryServicesDescriptorResponseAmino): _63.GetQueryServicesDescriptorResponse;
                    toAmino(message: _63.GetQueryServicesDescriptorResponse): _63.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _63.GetQueryServicesDescriptorResponseAminoMsg): _63.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _63.GetQueryServicesDescriptorResponse): _63.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _63.GetQueryServicesDescriptorResponseProtoMsg): _63.GetQueryServicesDescriptorResponse;
                    toProto(message: _63.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _63.GetQueryServicesDescriptorResponse): _63.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _63.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_63.GetTxDescriptorRequest>): _63.GetTxDescriptorRequest;
                    fromAmino(_: _63.GetTxDescriptorRequestAmino): _63.GetTxDescriptorRequest;
                    toAmino(_: _63.GetTxDescriptorRequest): _63.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _63.GetTxDescriptorRequestAminoMsg): _63.GetTxDescriptorRequest;
                    toAminoMsg(message: _63.GetTxDescriptorRequest): _63.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _63.GetTxDescriptorRequestProtoMsg): _63.GetTxDescriptorRequest;
                    toProto(message: _63.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _63.GetTxDescriptorRequest): _63.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _63.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_63.GetTxDescriptorResponse>): _63.GetTxDescriptorResponse;
                    fromAmino(object: _63.GetTxDescriptorResponseAmino): _63.GetTxDescriptorResponse;
                    toAmino(message: _63.GetTxDescriptorResponse): _63.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _63.GetTxDescriptorResponseAminoMsg): _63.GetTxDescriptorResponse;
                    toAminoMsg(message: _63.GetTxDescriptorResponse): _63.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _63.GetTxDescriptorResponseProtoMsg): _63.GetTxDescriptorResponse;
                    toProto(message: _63.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _63.GetTxDescriptorResponse): _63.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _63.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.QueryServicesDescriptor;
                    fromPartial(object: Partial<_63.QueryServicesDescriptor>): _63.QueryServicesDescriptor;
                    fromAmino(object: _63.QueryServicesDescriptorAmino): _63.QueryServicesDescriptor;
                    toAmino(message: _63.QueryServicesDescriptor): _63.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _63.QueryServicesDescriptorAminoMsg): _63.QueryServicesDescriptor;
                    toAminoMsg(message: _63.QueryServicesDescriptor): _63.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _63.QueryServicesDescriptorProtoMsg): _63.QueryServicesDescriptor;
                    toProto(message: _63.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _63.QueryServicesDescriptor): _63.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _63.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.QueryServiceDescriptor;
                    fromPartial(object: Partial<_63.QueryServiceDescriptor>): _63.QueryServiceDescriptor;
                    fromAmino(object: _63.QueryServiceDescriptorAmino): _63.QueryServiceDescriptor;
                    toAmino(message: _63.QueryServiceDescriptor): _63.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _63.QueryServiceDescriptorAminoMsg): _63.QueryServiceDescriptor;
                    toAminoMsg(message: _63.QueryServiceDescriptor): _63.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _63.QueryServiceDescriptorProtoMsg): _63.QueryServiceDescriptor;
                    toProto(message: _63.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _63.QueryServiceDescriptor): _63.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _63.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.QueryMethodDescriptor;
                    fromPartial(object: Partial<_63.QueryMethodDescriptor>): _63.QueryMethodDescriptor;
                    fromAmino(object: _63.QueryMethodDescriptorAmino): _63.QueryMethodDescriptor;
                    toAmino(message: _63.QueryMethodDescriptor): _63.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _63.QueryMethodDescriptorAminoMsg): _63.QueryMethodDescriptor;
                    toAminoMsg(message: _63.QueryMethodDescriptor): _63.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _63.QueryMethodDescriptorProtoMsg): _63.QueryMethodDescriptor;
                    toProto(message: _63.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _63.QueryMethodDescriptor): _63.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _64.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.Snapshot;
                    fromPartial(object: Partial<_64.Snapshot>): _64.Snapshot;
                    fromAmino(object: _64.SnapshotAmino): _64.Snapshot;
                    toAmino(message: _64.Snapshot): _64.SnapshotAmino;
                    fromAminoMsg(object: _64.SnapshotAminoMsg): _64.Snapshot;
                    toAminoMsg(message: _64.Snapshot): _64.SnapshotAminoMsg;
                    fromProtoMsg(message: _64.SnapshotProtoMsg): _64.Snapshot;
                    toProto(message: _64.Snapshot): Uint8Array;
                    toProtoMsg(message: _64.Snapshot): _64.SnapshotProtoMsg;
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
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _64.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.SnapshotItem;
                    fromPartial(object: Partial<_64.SnapshotItem>): _64.SnapshotItem;
                    fromAmino(object: _64.SnapshotItemAmino): _64.SnapshotItem;
                    toAmino(message: _64.SnapshotItem): _64.SnapshotItemAmino;
                    fromAminoMsg(object: _64.SnapshotItemAminoMsg): _64.SnapshotItem;
                    toAminoMsg(message: _64.SnapshotItem): _64.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _64.SnapshotItemProtoMsg): _64.SnapshotItem;
                    toProto(message: _64.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _64.SnapshotItem): _64.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _64.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.SnapshotStoreItem;
                    fromPartial(object: Partial<_64.SnapshotStoreItem>): _64.SnapshotStoreItem;
                    fromAmino(object: _64.SnapshotStoreItemAmino): _64.SnapshotStoreItem;
                    toAmino(message: _64.SnapshotStoreItem): _64.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _64.SnapshotStoreItemAminoMsg): _64.SnapshotStoreItem;
                    toAminoMsg(message: _64.SnapshotStoreItem): _64.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _64.SnapshotStoreItemProtoMsg): _64.SnapshotStoreItem;
                    toProto(message: _64.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _64.SnapshotStoreItem): _64.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _64.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.SnapshotIAVLItem;
                    fromPartial(object: Partial<_64.SnapshotIAVLItem>): _64.SnapshotIAVLItem;
                    fromAmino(object: _64.SnapshotIAVLItemAmino): _64.SnapshotIAVLItem;
                    toAmino(message: _64.SnapshotIAVLItem): _64.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _64.SnapshotIAVLItemAminoMsg): _64.SnapshotIAVLItem;
                    toAminoMsg(message: _64.SnapshotIAVLItem): _64.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _64.SnapshotIAVLItemProtoMsg): _64.SnapshotIAVLItem;
                    toProto(message: _64.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _64.SnapshotIAVLItem): _64.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _64.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_64.SnapshotExtensionMeta>): _64.SnapshotExtensionMeta;
                    fromAmino(object: _64.SnapshotExtensionMetaAmino): _64.SnapshotExtensionMeta;
                    toAmino(message: _64.SnapshotExtensionMeta): _64.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _64.SnapshotExtensionMetaAminoMsg): _64.SnapshotExtensionMeta;
                    toAminoMsg(message: _64.SnapshotExtensionMeta): _64.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _64.SnapshotExtensionMetaProtoMsg): _64.SnapshotExtensionMeta;
                    toProto(message: _64.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _64.SnapshotExtensionMeta): _64.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _64.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_64.SnapshotExtensionPayload>): _64.SnapshotExtensionPayload;
                    fromAmino(object: _64.SnapshotExtensionPayloadAmino): _64.SnapshotExtensionPayload;
                    toAmino(message: _64.SnapshotExtensionPayload): _64.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _64.SnapshotExtensionPayloadAminoMsg): _64.SnapshotExtensionPayload;
                    toAminoMsg(message: _64.SnapshotExtensionPayload): _64.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _64.SnapshotExtensionPayloadProtoMsg): _64.SnapshotExtensionPayload;
                    toProto(message: _64.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _64.SnapshotExtensionPayload): _64.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _64.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.SnapshotKVItem;
                    fromPartial(object: Partial<_64.SnapshotKVItem>): _64.SnapshotKVItem;
                    fromAmino(object: _64.SnapshotKVItemAmino): _64.SnapshotKVItem;
                    toAmino(message: _64.SnapshotKVItem): _64.SnapshotKVItemAmino;
                    fromAminoMsg(object: _64.SnapshotKVItemAminoMsg): _64.SnapshotKVItem;
                    toAminoMsg(message: _64.SnapshotKVItem): _64.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _64.SnapshotKVItemProtoMsg): _64.SnapshotKVItem;
                    toProto(message: _64.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _64.SnapshotKVItem): _64.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _64.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.SnapshotSchema;
                    fromPartial(object: Partial<_64.SnapshotSchema>): _64.SnapshotSchema;
                    fromAmino(object: _64.SnapshotSchemaAmino): _64.SnapshotSchema;
                    toAmino(message: _64.SnapshotSchema): _64.SnapshotSchemaAmino;
                    fromAminoMsg(object: _64.SnapshotSchemaAminoMsg): _64.SnapshotSchema;
                    toAminoMsg(message: _64.SnapshotSchema): _64.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _64.SnapshotSchemaProtoMsg): _64.SnapshotSchema;
                    toProto(message: _64.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _64.SnapshotSchema): _64.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _66.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.StoreKVPair;
                    fromPartial(object: Partial<_66.StoreKVPair>): _66.StoreKVPair;
                    fromAmino(object: _66.StoreKVPairAmino): _66.StoreKVPair;
                    toAmino(message: _66.StoreKVPair): _66.StoreKVPairAmino;
                    fromAminoMsg(object: _66.StoreKVPairAminoMsg): _66.StoreKVPair;
                    toAminoMsg(message: _66.StoreKVPair): _66.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _66.StoreKVPairProtoMsg): _66.StoreKVPair;
                    toProto(message: _66.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _66.StoreKVPair): _66.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _66.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.BlockMetadata;
                    fromPartial(object: Partial<_66.BlockMetadata>): _66.BlockMetadata;
                    fromAmino(object: _66.BlockMetadataAmino): _66.BlockMetadata;
                    toAmino(message: _66.BlockMetadata): _66.BlockMetadataAmino;
                    fromAminoMsg(object: _66.BlockMetadataAminoMsg): _66.BlockMetadata;
                    toAminoMsg(message: _66.BlockMetadata): _66.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _66.BlockMetadataProtoMsg): _66.BlockMetadata;
                    toProto(message: _66.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _66.BlockMetadata): _66.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _66.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_66.BlockMetadata_DeliverTx>): _66.BlockMetadata_DeliverTx;
                    fromAmino(object: _66.BlockMetadata_DeliverTxAmino): _66.BlockMetadata_DeliverTx;
                    toAmino(message: _66.BlockMetadata_DeliverTx): _66.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _66.BlockMetadata_DeliverTxAminoMsg): _66.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _66.BlockMetadata_DeliverTx): _66.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _66.BlockMetadata_DeliverTxProtoMsg): _66.BlockMetadata_DeliverTx;
                    toProto(message: _66.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _66.BlockMetadata_DeliverTx): _66.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _65.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.CommitInfo;
                    fromPartial(object: Partial<_65.CommitInfo>): _65.CommitInfo;
                    fromAmino(object: _65.CommitInfoAmino): _65.CommitInfo;
                    toAmino(message: _65.CommitInfo): _65.CommitInfoAmino;
                    fromAminoMsg(object: _65.CommitInfoAminoMsg): _65.CommitInfo;
                    toAminoMsg(message: _65.CommitInfo): _65.CommitInfoAminoMsg;
                    fromProtoMsg(message: _65.CommitInfoProtoMsg): _65.CommitInfo;
                    toProto(message: _65.CommitInfo): Uint8Array;
                    toProtoMsg(message: _65.CommitInfo): _65.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _65.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.StoreInfo;
                    fromPartial(object: Partial<_65.StoreInfo>): _65.StoreInfo;
                    fromAmino(object: _65.StoreInfoAmino): _65.StoreInfo;
                    toAmino(message: _65.StoreInfo): _65.StoreInfoAmino;
                    fromAminoMsg(object: _65.StoreInfoAminoMsg): _65.StoreInfo;
                    toAminoMsg(message: _65.StoreInfo): _65.StoreInfoAminoMsg;
                    fromProtoMsg(message: _65.StoreInfoProtoMsg): _65.StoreInfo;
                    toProto(message: _65.StoreInfo): Uint8Array;
                    toProtoMsg(message: _65.StoreInfo): _65.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _65.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.CommitID;
                    fromPartial(object: Partial<_65.CommitID>): _65.CommitID;
                    fromAmino(object: _65.CommitIDAmino): _65.CommitID;
                    toAmino(message: _65.CommitID): _65.CommitIDAmino;
                    fromAminoMsg(object: _65.CommitIDAminoMsg): _65.CommitID;
                    toAminoMsg(message: _65.CommitID): _65.CommitIDAminoMsg;
                    fromProtoMsg(message: _65.CommitIDProtoMsg): _65.CommitID;
                    toProto(message: _65.CommitID): Uint8Array;
                    toProtoMsg(message: _65.CommitID): _65.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _237.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _67.GetNodeInfoRequest): Promise<_67.GetNodeInfoResponse>;
                    getSyncing(request?: _67.GetSyncingRequest): Promise<_67.GetSyncingResponse>;
                    getLatestBlock(request?: _67.GetLatestBlockRequest): Promise<_67.GetLatestBlockResponse>;
                    getBlockByHeight(request: _67.GetBlockByHeightRequest): Promise<_67.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _67.GetLatestValidatorSetRequest): Promise<_67.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _67.GetValidatorSetByHeightRequest): Promise<_67.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _67.ABCIQueryRequest): Promise<_67.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _218.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _68.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.Block;
                    fromPartial(object: Partial<_68.Block>): _68.Block;
                    fromAmino(object: _68.BlockAmino): _68.Block;
                    toAmino(message: _68.Block): _68.BlockAmino;
                    fromAminoMsg(object: _68.BlockAminoMsg): _68.Block;
                    toAminoMsg(message: _68.Block): _68.BlockAminoMsg;
                    fromProtoMsg(message: _68.BlockProtoMsg): _68.Block;
                    toProto(message: _68.Block): Uint8Array;
                    toProtoMsg(message: _68.Block): _68.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _68.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.Header;
                    fromPartial(object: Partial<_68.Header>): _68.Header;
                    fromAmino(object: _68.HeaderAmino): _68.Header;
                    toAmino(message: _68.Header): _68.HeaderAmino;
                    fromAminoMsg(object: _68.HeaderAminoMsg): _68.Header;
                    toAminoMsg(message: _68.Header): _68.HeaderAminoMsg;
                    fromProtoMsg(message: _68.HeaderProtoMsg): _68.Header;
                    toProto(message: _68.Header): Uint8Array;
                    toProtoMsg(message: _68.Header): _68.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _67.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_67.GetValidatorSetByHeightRequest>): _67.GetValidatorSetByHeightRequest;
                    fromAmino(object: _67.GetValidatorSetByHeightRequestAmino): _67.GetValidatorSetByHeightRequest;
                    toAmino(message: _67.GetValidatorSetByHeightRequest): _67.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _67.GetValidatorSetByHeightRequestAminoMsg): _67.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _67.GetValidatorSetByHeightRequest): _67.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _67.GetValidatorSetByHeightRequestProtoMsg): _67.GetValidatorSetByHeightRequest;
                    toProto(message: _67.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _67.GetValidatorSetByHeightRequest): _67.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _67.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_67.GetValidatorSetByHeightResponse>): _67.GetValidatorSetByHeightResponse;
                    fromAmino(object: _67.GetValidatorSetByHeightResponseAmino): _67.GetValidatorSetByHeightResponse;
                    toAmino(message: _67.GetValidatorSetByHeightResponse): _67.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _67.GetValidatorSetByHeightResponseAminoMsg): _67.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _67.GetValidatorSetByHeightResponse): _67.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _67.GetValidatorSetByHeightResponseProtoMsg): _67.GetValidatorSetByHeightResponse;
                    toProto(message: _67.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _67.GetValidatorSetByHeightResponse): _67.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _67.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_67.GetLatestValidatorSetRequest>): _67.GetLatestValidatorSetRequest;
                    fromAmino(object: _67.GetLatestValidatorSetRequestAmino): _67.GetLatestValidatorSetRequest;
                    toAmino(message: _67.GetLatestValidatorSetRequest): _67.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _67.GetLatestValidatorSetRequestAminoMsg): _67.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _67.GetLatestValidatorSetRequest): _67.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _67.GetLatestValidatorSetRequestProtoMsg): _67.GetLatestValidatorSetRequest;
                    toProto(message: _67.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _67.GetLatestValidatorSetRequest): _67.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _67.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_67.GetLatestValidatorSetResponse>): _67.GetLatestValidatorSetResponse;
                    fromAmino(object: _67.GetLatestValidatorSetResponseAmino): _67.GetLatestValidatorSetResponse;
                    toAmino(message: _67.GetLatestValidatorSetResponse): _67.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _67.GetLatestValidatorSetResponseAminoMsg): _67.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _67.GetLatestValidatorSetResponse): _67.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _67.GetLatestValidatorSetResponseProtoMsg): _67.GetLatestValidatorSetResponse;
                    toProto(message: _67.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _67.GetLatestValidatorSetResponse): _67.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _67.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.Validator;
                    fromPartial(object: Partial<_67.Validator>): _67.Validator;
                    fromAmino(object: _67.ValidatorAmino): _67.Validator;
                    toAmino(message: _67.Validator): _67.ValidatorAmino;
                    fromAminoMsg(object: _67.ValidatorAminoMsg): _67.Validator;
                    toAminoMsg(message: _67.Validator): _67.ValidatorAminoMsg;
                    fromProtoMsg(message: _67.ValidatorProtoMsg): _67.Validator;
                    toProto(message: _67.Validator): Uint8Array;
                    toProtoMsg(message: _67.Validator): _67.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _67.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_67.GetBlockByHeightRequest>): _67.GetBlockByHeightRequest;
                    fromAmino(object: _67.GetBlockByHeightRequestAmino): _67.GetBlockByHeightRequest;
                    toAmino(message: _67.GetBlockByHeightRequest): _67.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _67.GetBlockByHeightRequestAminoMsg): _67.GetBlockByHeightRequest;
                    toAminoMsg(message: _67.GetBlockByHeightRequest): _67.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _67.GetBlockByHeightRequestProtoMsg): _67.GetBlockByHeightRequest;
                    toProto(message: _67.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _67.GetBlockByHeightRequest): _67.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _67.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_67.GetBlockByHeightResponse>): _67.GetBlockByHeightResponse;
                    fromAmino(object: _67.GetBlockByHeightResponseAmino): _67.GetBlockByHeightResponse;
                    toAmino(message: _67.GetBlockByHeightResponse): _67.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _67.GetBlockByHeightResponseAminoMsg): _67.GetBlockByHeightResponse;
                    toAminoMsg(message: _67.GetBlockByHeightResponse): _67.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _67.GetBlockByHeightResponseProtoMsg): _67.GetBlockByHeightResponse;
                    toProto(message: _67.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _67.GetBlockByHeightResponse): _67.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _67.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _67.GetLatestBlockRequest;
                    fromPartial(_: Partial<_67.GetLatestBlockRequest>): _67.GetLatestBlockRequest;
                    fromAmino(_: _67.GetLatestBlockRequestAmino): _67.GetLatestBlockRequest;
                    toAmino(_: _67.GetLatestBlockRequest): _67.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _67.GetLatestBlockRequestAminoMsg): _67.GetLatestBlockRequest;
                    toAminoMsg(message: _67.GetLatestBlockRequest): _67.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _67.GetLatestBlockRequestProtoMsg): _67.GetLatestBlockRequest;
                    toProto(message: _67.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _67.GetLatestBlockRequest): _67.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _67.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.GetLatestBlockResponse;
                    fromPartial(object: Partial<_67.GetLatestBlockResponse>): _67.GetLatestBlockResponse;
                    fromAmino(object: _67.GetLatestBlockResponseAmino): _67.GetLatestBlockResponse;
                    toAmino(message: _67.GetLatestBlockResponse): _67.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _67.GetLatestBlockResponseAminoMsg): _67.GetLatestBlockResponse;
                    toAminoMsg(message: _67.GetLatestBlockResponse): _67.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _67.GetLatestBlockResponseProtoMsg): _67.GetLatestBlockResponse;
                    toProto(message: _67.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _67.GetLatestBlockResponse): _67.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _67.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _67.GetSyncingRequest;
                    fromPartial(_: Partial<_67.GetSyncingRequest>): _67.GetSyncingRequest;
                    fromAmino(_: _67.GetSyncingRequestAmino): _67.GetSyncingRequest;
                    toAmino(_: _67.GetSyncingRequest): _67.GetSyncingRequestAmino;
                    fromAminoMsg(object: _67.GetSyncingRequestAminoMsg): _67.GetSyncingRequest;
                    toAminoMsg(message: _67.GetSyncingRequest): _67.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _67.GetSyncingRequestProtoMsg): _67.GetSyncingRequest;
                    toProto(message: _67.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _67.GetSyncingRequest): _67.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _67.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.GetSyncingResponse;
                    fromPartial(object: Partial<_67.GetSyncingResponse>): _67.GetSyncingResponse;
                    fromAmino(object: _67.GetSyncingResponseAmino): _67.GetSyncingResponse;
                    toAmino(message: _67.GetSyncingResponse): _67.GetSyncingResponseAmino;
                    fromAminoMsg(object: _67.GetSyncingResponseAminoMsg): _67.GetSyncingResponse;
                    toAminoMsg(message: _67.GetSyncingResponse): _67.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _67.GetSyncingResponseProtoMsg): _67.GetSyncingResponse;
                    toProto(message: _67.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _67.GetSyncingResponse): _67.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _67.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _67.GetNodeInfoRequest;
                    fromPartial(_: Partial<_67.GetNodeInfoRequest>): _67.GetNodeInfoRequest;
                    fromAmino(_: _67.GetNodeInfoRequestAmino): _67.GetNodeInfoRequest;
                    toAmino(_: _67.GetNodeInfoRequest): _67.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _67.GetNodeInfoRequestAminoMsg): _67.GetNodeInfoRequest;
                    toAminoMsg(message: _67.GetNodeInfoRequest): _67.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _67.GetNodeInfoRequestProtoMsg): _67.GetNodeInfoRequest;
                    toProto(message: _67.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _67.GetNodeInfoRequest): _67.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _67.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.GetNodeInfoResponse;
                    fromPartial(object: Partial<_67.GetNodeInfoResponse>): _67.GetNodeInfoResponse;
                    fromAmino(object: _67.GetNodeInfoResponseAmino): _67.GetNodeInfoResponse;
                    toAmino(message: _67.GetNodeInfoResponse): _67.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _67.GetNodeInfoResponseAminoMsg): _67.GetNodeInfoResponse;
                    toAminoMsg(message: _67.GetNodeInfoResponse): _67.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _67.GetNodeInfoResponseProtoMsg): _67.GetNodeInfoResponse;
                    toProto(message: _67.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _67.GetNodeInfoResponse): _67.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _67.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.VersionInfo;
                    fromPartial(object: Partial<_67.VersionInfo>): _67.VersionInfo;
                    fromAmino(object: _67.VersionInfoAmino): _67.VersionInfo;
                    toAmino(message: _67.VersionInfo): _67.VersionInfoAmino;
                    fromAminoMsg(object: _67.VersionInfoAminoMsg): _67.VersionInfo;
                    toAminoMsg(message: _67.VersionInfo): _67.VersionInfoAminoMsg;
                    fromProtoMsg(message: _67.VersionInfoProtoMsg): _67.VersionInfo;
                    toProto(message: _67.VersionInfo): Uint8Array;
                    toProtoMsg(message: _67.VersionInfo): _67.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _67.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.Module;
                    fromPartial(object: Partial<_67.Module>): _67.Module;
                    fromAmino(object: _67.ModuleAmino): _67.Module;
                    toAmino(message: _67.Module): _67.ModuleAmino;
                    fromAminoMsg(object: _67.ModuleAminoMsg): _67.Module;
                    toAminoMsg(message: _67.Module): _67.ModuleAminoMsg;
                    fromProtoMsg(message: _67.ModuleProtoMsg): _67.Module;
                    toProto(message: _67.Module): Uint8Array;
                    toProtoMsg(message: _67.Module): _67.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _67.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.ABCIQueryRequest;
                    fromPartial(object: Partial<_67.ABCIQueryRequest>): _67.ABCIQueryRequest;
                    fromAmino(object: _67.ABCIQueryRequestAmino): _67.ABCIQueryRequest;
                    toAmino(message: _67.ABCIQueryRequest): _67.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _67.ABCIQueryRequestAminoMsg): _67.ABCIQueryRequest;
                    toAminoMsg(message: _67.ABCIQueryRequest): _67.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _67.ABCIQueryRequestProtoMsg): _67.ABCIQueryRequest;
                    toProto(message: _67.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _67.ABCIQueryRequest): _67.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _67.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.ABCIQueryResponse;
                    fromPartial(object: Partial<_67.ABCIQueryResponse>): _67.ABCIQueryResponse;
                    fromAmino(object: _67.ABCIQueryResponseAmino): _67.ABCIQueryResponse;
                    toAmino(message: _67.ABCIQueryResponse): _67.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _67.ABCIQueryResponseAminoMsg): _67.ABCIQueryResponse;
                    toAminoMsg(message: _67.ABCIQueryResponse): _67.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _67.ABCIQueryResponseProtoMsg): _67.ABCIQueryResponse;
                    toProto(message: _67.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _67.ABCIQueryResponse): _67.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _67.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.ProofOp;
                    fromPartial(object: Partial<_67.ProofOp>): _67.ProofOp;
                    fromAmino(object: _67.ProofOpAmino): _67.ProofOp;
                    toAmino(message: _67.ProofOp): _67.ProofOpAmino;
                    fromAminoMsg(object: _67.ProofOpAminoMsg): _67.ProofOp;
                    toAminoMsg(message: _67.ProofOp): _67.ProofOpAminoMsg;
                    fromProtoMsg(message: _67.ProofOpProtoMsg): _67.ProofOp;
                    toProto(message: _67.ProofOp): Uint8Array;
                    toProtoMsg(message: _67.ProofOp): _67.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _67.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.ProofOps;
                    fromPartial(object: Partial<_67.ProofOps>): _67.ProofOps;
                    fromAmino(object: _67.ProofOpsAmino): _67.ProofOps;
                    toAmino(message: _67.ProofOps): _67.ProofOpsAmino;
                    fromAminoMsg(object: _67.ProofOpsAminoMsg): _67.ProofOps;
                    toAminoMsg(message: _67.ProofOps): _67.ProofOpsAminoMsg;
                    fromProtoMsg(message: _67.ProofOpsProtoMsg): _67.ProofOps;
                    toProto(message: _67.ProofOps): Uint8Array;
                    toProtoMsg(message: _67.ProofOps): _67.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _69.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Coin;
                fromPartial(object: Partial<_69.Coin>): _69.Coin;
                fromAmino(object: _69.CoinAmino): _69.Coin;
                toAmino(message: _69.Coin): _69.CoinAmino;
                fromAminoMsg(object: _69.CoinAminoMsg): _69.Coin;
                toAminoMsg(message: _69.Coin): _69.CoinAminoMsg;
                fromProtoMsg(message: _69.CoinProtoMsg): _69.Coin;
                toProto(message: _69.Coin): Uint8Array;
                toProtoMsg(message: _69.Coin): _69.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _69.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.DecCoin;
                fromPartial(object: Partial<_69.DecCoin>): _69.DecCoin;
                fromAmino(object: _69.DecCoinAmino): _69.DecCoin;
                toAmino(message: _69.DecCoin): _69.DecCoinAmino;
                fromAminoMsg(object: _69.DecCoinAminoMsg): _69.DecCoin;
                toAminoMsg(message: _69.DecCoin): _69.DecCoinAminoMsg;
                fromProtoMsg(message: _69.DecCoinProtoMsg): _69.DecCoin;
                toProto(message: _69.DecCoin): Uint8Array;
                toProtoMsg(message: _69.DecCoin): _69.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _69.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.IntProto;
                fromPartial(object: Partial<_69.IntProto>): _69.IntProto;
                fromAmino(object: _69.IntProtoAmino): _69.IntProto;
                toAmino(message: _69.IntProto): _69.IntProtoAmino;
                fromAminoMsg(object: _69.IntProtoAminoMsg): _69.IntProto;
                toAminoMsg(message: _69.IntProto): _69.IntProtoAminoMsg;
                fromProtoMsg(message: _69.IntProtoProtoMsg): _69.IntProto;
                toProto(message: _69.IntProto): Uint8Array;
                toProtoMsg(message: _69.IntProto): _69.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _69.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.DecProto;
                fromPartial(object: Partial<_69.DecProto>): _69.DecProto;
                fromAmino(object: _69.DecProtoAmino): _69.DecProto;
                toAmino(message: _69.DecProto): _69.DecProtoAmino;
                fromAminoMsg(object: _69.DecProtoAminoMsg): _69.DecProto;
                toAminoMsg(message: _69.DecProto): _69.DecProtoAminoMsg;
                fromProtoMsg(message: _69.DecProtoProtoMsg): _69.DecProto;
                toProto(message: _69.DecProto): Uint8Array;
                toProtoMsg(message: _69.DecProto): _69.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _71.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GenesisOwners;
                fromPartial(object: Partial<_71.GenesisOwners>): _71.GenesisOwners;
                fromAmino(object: _71.GenesisOwnersAmino): _71.GenesisOwners;
                toAmino(message: _71.GenesisOwners): _71.GenesisOwnersAmino;
                fromAminoMsg(object: _71.GenesisOwnersAminoMsg): _71.GenesisOwners;
                toAminoMsg(message: _71.GenesisOwners): _71.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _71.GenesisOwnersProtoMsg): _71.GenesisOwners;
                toProto(message: _71.GenesisOwners): Uint8Array;
                toProtoMsg(message: _71.GenesisOwners): _71.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _70.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Capability;
                fromPartial(object: Partial<_70.Capability>): _70.Capability;
                fromAmino(object: _70.CapabilityAmino): _70.Capability;
                toAmino(message: _70.Capability): _70.CapabilityAmino;
                fromAminoMsg(object: _70.CapabilityAminoMsg): _70.Capability;
                toAminoMsg(message: _70.Capability): _70.CapabilityAminoMsg;
                fromProtoMsg(message: _70.CapabilityProtoMsg): _70.Capability;
                toProto(message: _70.Capability): Uint8Array;
                toProtoMsg(message: _70.Capability): _70.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _70.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Owner;
                fromPartial(object: Partial<_70.Owner>): _70.Owner;
                fromAmino(object: _70.OwnerAmino): _70.Owner;
                toAmino(message: _70.Owner): _70.OwnerAmino;
                fromAminoMsg(object: _70.OwnerAminoMsg): _70.Owner;
                toAminoMsg(message: _70.Owner): _70.OwnerAminoMsg;
                fromProtoMsg(message: _70.OwnerProtoMsg): _70.Owner;
                toProto(message: _70.Owner): Uint8Array;
                toProtoMsg(message: _70.Owner): _70.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _70.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.CapabilityOwners;
                fromPartial(object: Partial<_70.CapabilityOwners>): _70.CapabilityOwners;
                fromAmino(object: _70.CapabilityOwnersAmino): _70.CapabilityOwners;
                toAmino(message: _70.CapabilityOwners): _70.CapabilityOwnersAmino;
                fromAminoMsg(object: _70.CapabilityOwnersAminoMsg): _70.CapabilityOwners;
                toAminoMsg(message: _70.CapabilityOwners): _70.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _70.CapabilityOwnersProtoMsg): _70.CapabilityOwners;
                toProto(message: _70.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _70.CapabilityOwners): _70.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _73.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _73.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _73.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _73.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _73.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _73.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _73.MsgVerifyInvariant) => _73.MsgVerifyInvariantAmino;
                    fromAmino: (object: _73.MsgVerifyInvariantAmino) => _73.MsgVerifyInvariant;
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
        const v1beta1: {
            MsgClientImpl: typeof _254.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                validatorOutstandingRewards(request: _82.QueryValidatorOutstandingRewardsRequest): Promise<_82.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _82.QueryValidatorCommissionRequest): Promise<_82.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _82.QueryValidatorSlashesRequest): Promise<_82.QueryValidatorSlashesResponse>;
                delegationRewards(request: _82.QueryDelegationRewardsRequest): Promise<_82.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _82.QueryDelegationTotalRewardsRequest): Promise<_82.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _82.QueryDelegatorValidatorsRequest): Promise<_82.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _82.QueryDelegatorWithdrawAddressRequest): Promise<_82.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _82.QueryCommunityPoolRequest): Promise<_82.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _83.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _83.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _83.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _83.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _83.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _83.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _83.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _83.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _83.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _83.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _83.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _83.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _83.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _83.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _83.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _83.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _83.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _83.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _83.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _83.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _83.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _83.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _83.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _83.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _83.MsgSetWithdrawAddress) => _83.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _83.MsgSetWithdrawAddressAmino) => _83.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _83.MsgWithdrawDelegatorReward) => _83.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _83.MsgWithdrawDelegatorRewardAmino) => _83.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _83.MsgWithdrawValidatorCommission) => _83.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _83.MsgWithdrawValidatorCommissionAmino) => _83.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _83.MsgFundCommunityPool) => _83.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _83.MsgFundCommunityPoolAmino) => _83.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _83.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_83.MsgSetWithdrawAddress>): _83.MsgSetWithdrawAddress;
                fromAmino(object: _83.MsgSetWithdrawAddressAmino): _83.MsgSetWithdrawAddress;
                toAmino(message: _83.MsgSetWithdrawAddress): _83.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _83.MsgSetWithdrawAddressAminoMsg): _83.MsgSetWithdrawAddress;
                toAminoMsg(message: _83.MsgSetWithdrawAddress): _83.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _83.MsgSetWithdrawAddressProtoMsg): _83.MsgSetWithdrawAddress;
                toProto(message: _83.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _83.MsgSetWithdrawAddress): _83.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _83.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_83.MsgSetWithdrawAddressResponse>): _83.MsgSetWithdrawAddressResponse;
                fromAmino(_: _83.MsgSetWithdrawAddressResponseAmino): _83.MsgSetWithdrawAddressResponse;
                toAmino(_: _83.MsgSetWithdrawAddressResponse): _83.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _83.MsgSetWithdrawAddressResponseAminoMsg): _83.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _83.MsgSetWithdrawAddressResponse): _83.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _83.MsgSetWithdrawAddressResponseProtoMsg): _83.MsgSetWithdrawAddressResponse;
                toProto(message: _83.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _83.MsgSetWithdrawAddressResponse): _83.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _83.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_83.MsgWithdrawDelegatorReward>): _83.MsgWithdrawDelegatorReward;
                fromAmino(object: _83.MsgWithdrawDelegatorRewardAmino): _83.MsgWithdrawDelegatorReward;
                toAmino(message: _83.MsgWithdrawDelegatorReward): _83.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _83.MsgWithdrawDelegatorRewardAminoMsg): _83.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _83.MsgWithdrawDelegatorReward): _83.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _83.MsgWithdrawDelegatorRewardProtoMsg): _83.MsgWithdrawDelegatorReward;
                toProto(message: _83.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _83.MsgWithdrawDelegatorReward): _83.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _83.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_83.MsgWithdrawDelegatorRewardResponse>): _83.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _83.MsgWithdrawDelegatorRewardResponseAmino): _83.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _83.MsgWithdrawDelegatorRewardResponse): _83.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _83.MsgWithdrawDelegatorRewardResponseAminoMsg): _83.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _83.MsgWithdrawDelegatorRewardResponse): _83.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _83.MsgWithdrawDelegatorRewardResponseProtoMsg): _83.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _83.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _83.MsgWithdrawDelegatorRewardResponse): _83.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _83.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_83.MsgWithdrawValidatorCommission>): _83.MsgWithdrawValidatorCommission;
                fromAmino(object: _83.MsgWithdrawValidatorCommissionAmino): _83.MsgWithdrawValidatorCommission;
                toAmino(message: _83.MsgWithdrawValidatorCommission): _83.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _83.MsgWithdrawValidatorCommissionAminoMsg): _83.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _83.MsgWithdrawValidatorCommission): _83.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _83.MsgWithdrawValidatorCommissionProtoMsg): _83.MsgWithdrawValidatorCommission;
                toProto(message: _83.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _83.MsgWithdrawValidatorCommission): _83.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _83.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_83.MsgWithdrawValidatorCommissionResponse>): _83.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _83.MsgWithdrawValidatorCommissionResponseAmino): _83.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _83.MsgWithdrawValidatorCommissionResponse): _83.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _83.MsgWithdrawValidatorCommissionResponseAminoMsg): _83.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _83.MsgWithdrawValidatorCommissionResponse): _83.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _83.MsgWithdrawValidatorCommissionResponseProtoMsg): _83.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _83.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _83.MsgWithdrawValidatorCommissionResponse): _83.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _83.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgFundCommunityPool;
                fromPartial(object: Partial<_83.MsgFundCommunityPool>): _83.MsgFundCommunityPool;
                fromAmino(object: _83.MsgFundCommunityPoolAmino): _83.MsgFundCommunityPool;
                toAmino(message: _83.MsgFundCommunityPool): _83.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _83.MsgFundCommunityPoolAminoMsg): _83.MsgFundCommunityPool;
                toAminoMsg(message: _83.MsgFundCommunityPool): _83.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _83.MsgFundCommunityPoolProtoMsg): _83.MsgFundCommunityPool;
                toProto(message: _83.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _83.MsgFundCommunityPool): _83.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _83.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_83.MsgFundCommunityPoolResponse>): _83.MsgFundCommunityPoolResponse;
                fromAmino(_: _83.MsgFundCommunityPoolResponseAmino): _83.MsgFundCommunityPoolResponse;
                toAmino(_: _83.MsgFundCommunityPoolResponse): _83.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _83.MsgFundCommunityPoolResponseAminoMsg): _83.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _83.MsgFundCommunityPoolResponse): _83.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _83.MsgFundCommunityPoolResponseProtoMsg): _83.MsgFundCommunityPoolResponse;
                toProto(message: _83.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _83.MsgFundCommunityPoolResponse): _83.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _82.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.QueryParamsRequest;
                fromPartial(_: Partial<_82.QueryParamsRequest>): _82.QueryParamsRequest;
                fromAmino(_: _82.QueryParamsRequestAmino): _82.QueryParamsRequest;
                toAmino(_: _82.QueryParamsRequest): _82.QueryParamsRequestAmino;
                fromAminoMsg(object: _82.QueryParamsRequestAminoMsg): _82.QueryParamsRequest;
                toAminoMsg(message: _82.QueryParamsRequest): _82.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryParamsRequestProtoMsg): _82.QueryParamsRequest;
                toProto(message: _82.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryParamsRequest): _82.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _82.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryParamsResponse;
                fromPartial(object: Partial<_82.QueryParamsResponse>): _82.QueryParamsResponse;
                fromAmino(object: _82.QueryParamsResponseAmino): _82.QueryParamsResponse;
                toAmino(message: _82.QueryParamsResponse): _82.QueryParamsResponseAmino;
                fromAminoMsg(object: _82.QueryParamsResponseAminoMsg): _82.QueryParamsResponse;
                toAminoMsg(message: _82.QueryParamsResponse): _82.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryParamsResponseProtoMsg): _82.QueryParamsResponse;
                toProto(message: _82.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryParamsResponse): _82.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _82.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_82.QueryValidatorOutstandingRewardsRequest>): _82.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _82.QueryValidatorOutstandingRewardsRequestAmino): _82.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _82.QueryValidatorOutstandingRewardsRequest): _82.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _82.QueryValidatorOutstandingRewardsRequestAminoMsg): _82.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _82.QueryValidatorOutstandingRewardsRequest): _82.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorOutstandingRewardsRequestProtoMsg): _82.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _82.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorOutstandingRewardsRequest): _82.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _82.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_82.QueryValidatorOutstandingRewardsResponse>): _82.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _82.QueryValidatorOutstandingRewardsResponseAmino): _82.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _82.QueryValidatorOutstandingRewardsResponse): _82.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _82.QueryValidatorOutstandingRewardsResponseAminoMsg): _82.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _82.QueryValidatorOutstandingRewardsResponse): _82.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorOutstandingRewardsResponseProtoMsg): _82.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _82.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorOutstandingRewardsResponse): _82.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _82.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_82.QueryValidatorCommissionRequest>): _82.QueryValidatorCommissionRequest;
                fromAmino(object: _82.QueryValidatorCommissionRequestAmino): _82.QueryValidatorCommissionRequest;
                toAmino(message: _82.QueryValidatorCommissionRequest): _82.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _82.QueryValidatorCommissionRequestAminoMsg): _82.QueryValidatorCommissionRequest;
                toAminoMsg(message: _82.QueryValidatorCommissionRequest): _82.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorCommissionRequestProtoMsg): _82.QueryValidatorCommissionRequest;
                toProto(message: _82.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorCommissionRequest): _82.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _82.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_82.QueryValidatorCommissionResponse>): _82.QueryValidatorCommissionResponse;
                fromAmino(object: _82.QueryValidatorCommissionResponseAmino): _82.QueryValidatorCommissionResponse;
                toAmino(message: _82.QueryValidatorCommissionResponse): _82.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _82.QueryValidatorCommissionResponseAminoMsg): _82.QueryValidatorCommissionResponse;
                toAminoMsg(message: _82.QueryValidatorCommissionResponse): _82.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorCommissionResponseProtoMsg): _82.QueryValidatorCommissionResponse;
                toProto(message: _82.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorCommissionResponse): _82.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _82.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_82.QueryValidatorSlashesRequest>): _82.QueryValidatorSlashesRequest;
                fromAmino(object: _82.QueryValidatorSlashesRequestAmino): _82.QueryValidatorSlashesRequest;
                toAmino(message: _82.QueryValidatorSlashesRequest): _82.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _82.QueryValidatorSlashesRequestAminoMsg): _82.QueryValidatorSlashesRequest;
                toAminoMsg(message: _82.QueryValidatorSlashesRequest): _82.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorSlashesRequestProtoMsg): _82.QueryValidatorSlashesRequest;
                toProto(message: _82.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorSlashesRequest): _82.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _82.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_82.QueryValidatorSlashesResponse>): _82.QueryValidatorSlashesResponse;
                fromAmino(object: _82.QueryValidatorSlashesResponseAmino): _82.QueryValidatorSlashesResponse;
                toAmino(message: _82.QueryValidatorSlashesResponse): _82.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _82.QueryValidatorSlashesResponseAminoMsg): _82.QueryValidatorSlashesResponse;
                toAminoMsg(message: _82.QueryValidatorSlashesResponse): _82.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorSlashesResponseProtoMsg): _82.QueryValidatorSlashesResponse;
                toProto(message: _82.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorSlashesResponse): _82.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _82.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_82.QueryDelegationRewardsRequest>): _82.QueryDelegationRewardsRequest;
                fromAmino(object: _82.QueryDelegationRewardsRequestAmino): _82.QueryDelegationRewardsRequest;
                toAmino(message: _82.QueryDelegationRewardsRequest): _82.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _82.QueryDelegationRewardsRequestAminoMsg): _82.QueryDelegationRewardsRequest;
                toAminoMsg(message: _82.QueryDelegationRewardsRequest): _82.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryDelegationRewardsRequestProtoMsg): _82.QueryDelegationRewardsRequest;
                toProto(message: _82.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryDelegationRewardsRequest): _82.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _82.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_82.QueryDelegationRewardsResponse>): _82.QueryDelegationRewardsResponse;
                fromAmino(object: _82.QueryDelegationRewardsResponseAmino): _82.QueryDelegationRewardsResponse;
                toAmino(message: _82.QueryDelegationRewardsResponse): _82.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _82.QueryDelegationRewardsResponseAminoMsg): _82.QueryDelegationRewardsResponse;
                toAminoMsg(message: _82.QueryDelegationRewardsResponse): _82.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryDelegationRewardsResponseProtoMsg): _82.QueryDelegationRewardsResponse;
                toProto(message: _82.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryDelegationRewardsResponse): _82.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _82.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_82.QueryDelegationTotalRewardsRequest>): _82.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _82.QueryDelegationTotalRewardsRequestAmino): _82.QueryDelegationTotalRewardsRequest;
                toAmino(message: _82.QueryDelegationTotalRewardsRequest): _82.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _82.QueryDelegationTotalRewardsRequestAminoMsg): _82.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _82.QueryDelegationTotalRewardsRequest): _82.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryDelegationTotalRewardsRequestProtoMsg): _82.QueryDelegationTotalRewardsRequest;
                toProto(message: _82.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryDelegationTotalRewardsRequest): _82.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _82.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_82.QueryDelegationTotalRewardsResponse>): _82.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _82.QueryDelegationTotalRewardsResponseAmino): _82.QueryDelegationTotalRewardsResponse;
                toAmino(message: _82.QueryDelegationTotalRewardsResponse): _82.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _82.QueryDelegationTotalRewardsResponseAminoMsg): _82.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _82.QueryDelegationTotalRewardsResponse): _82.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryDelegationTotalRewardsResponseProtoMsg): _82.QueryDelegationTotalRewardsResponse;
                toProto(message: _82.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryDelegationTotalRewardsResponse): _82.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorsRequest>): _82.QueryDelegatorValidatorsRequest;
                fromAmino(object: _82.QueryDelegatorValidatorsRequestAmino): _82.QueryDelegatorValidatorsRequest;
                toAmino(message: _82.QueryDelegatorValidatorsRequest): _82.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _82.QueryDelegatorValidatorsRequestAminoMsg): _82.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _82.QueryDelegatorValidatorsRequest): _82.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorValidatorsRequestProtoMsg): _82.QueryDelegatorValidatorsRequest;
                toProto(message: _82.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorValidatorsRequest): _82.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorsResponse>): _82.QueryDelegatorValidatorsResponse;
                fromAmino(object: _82.QueryDelegatorValidatorsResponseAmino): _82.QueryDelegatorValidatorsResponse;
                toAmino(message: _82.QueryDelegatorValidatorsResponse): _82.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _82.QueryDelegatorValidatorsResponseAminoMsg): _82.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _82.QueryDelegatorValidatorsResponse): _82.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorValidatorsResponseProtoMsg): _82.QueryDelegatorValidatorsResponse;
                toProto(message: _82.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorValidatorsResponse): _82.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_82.QueryDelegatorWithdrawAddressRequest>): _82.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _82.QueryDelegatorWithdrawAddressRequestAmino): _82.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _82.QueryDelegatorWithdrawAddressRequest): _82.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _82.QueryDelegatorWithdrawAddressRequestAminoMsg): _82.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _82.QueryDelegatorWithdrawAddressRequest): _82.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorWithdrawAddressRequestProtoMsg): _82.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _82.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorWithdrawAddressRequest): _82.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_82.QueryDelegatorWithdrawAddressResponse>): _82.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _82.QueryDelegatorWithdrawAddressResponseAmino): _82.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _82.QueryDelegatorWithdrawAddressResponse): _82.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _82.QueryDelegatorWithdrawAddressResponseAminoMsg): _82.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _82.QueryDelegatorWithdrawAddressResponse): _82.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorWithdrawAddressResponseProtoMsg): _82.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _82.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorWithdrawAddressResponse): _82.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _82.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_82.QueryCommunityPoolRequest>): _82.QueryCommunityPoolRequest;
                fromAmino(_: _82.QueryCommunityPoolRequestAmino): _82.QueryCommunityPoolRequest;
                toAmino(_: _82.QueryCommunityPoolRequest): _82.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _82.QueryCommunityPoolRequestAminoMsg): _82.QueryCommunityPoolRequest;
                toAminoMsg(message: _82.QueryCommunityPoolRequest): _82.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _82.QueryCommunityPoolRequestProtoMsg): _82.QueryCommunityPoolRequest;
                toProto(message: _82.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _82.QueryCommunityPoolRequest): _82.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _82.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_82.QueryCommunityPoolResponse>): _82.QueryCommunityPoolResponse;
                fromAmino(object: _82.QueryCommunityPoolResponseAmino): _82.QueryCommunityPoolResponse;
                toAmino(message: _82.QueryCommunityPoolResponse): _82.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _82.QueryCommunityPoolResponseAminoMsg): _82.QueryCommunityPoolResponse;
                toAminoMsg(message: _82.QueryCommunityPoolResponse): _82.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _82.QueryCommunityPoolResponseProtoMsg): _82.QueryCommunityPoolResponse;
                toProto(message: _82.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _82.QueryCommunityPoolResponse): _82.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _81.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_81.DelegatorWithdrawInfo>): _81.DelegatorWithdrawInfo;
                fromAmino(object: _81.DelegatorWithdrawInfoAmino): _81.DelegatorWithdrawInfo;
                toAmino(message: _81.DelegatorWithdrawInfo): _81.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _81.DelegatorWithdrawInfoAminoMsg): _81.DelegatorWithdrawInfo;
                toAminoMsg(message: _81.DelegatorWithdrawInfo): _81.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _81.DelegatorWithdrawInfoProtoMsg): _81.DelegatorWithdrawInfo;
                toProto(message: _81.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _81.DelegatorWithdrawInfo): _81.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _81.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_81.ValidatorOutstandingRewardsRecord>): _81.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _81.ValidatorOutstandingRewardsRecordAmino): _81.ValidatorOutstandingRewardsRecord;
                toAmino(message: _81.ValidatorOutstandingRewardsRecord): _81.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _81.ValidatorOutstandingRewardsRecordAminoMsg): _81.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _81.ValidatorOutstandingRewardsRecord): _81.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _81.ValidatorOutstandingRewardsRecordProtoMsg): _81.ValidatorOutstandingRewardsRecord;
                toProto(message: _81.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _81.ValidatorOutstandingRewardsRecord): _81.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _81.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_81.ValidatorAccumulatedCommissionRecord>): _81.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _81.ValidatorAccumulatedCommissionRecordAmino): _81.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _81.ValidatorAccumulatedCommissionRecord): _81.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _81.ValidatorAccumulatedCommissionRecordAminoMsg): _81.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _81.ValidatorAccumulatedCommissionRecord): _81.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _81.ValidatorAccumulatedCommissionRecordProtoMsg): _81.ValidatorAccumulatedCommissionRecord;
                toProto(message: _81.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _81.ValidatorAccumulatedCommissionRecord): _81.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _81.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_81.ValidatorHistoricalRewardsRecord>): _81.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _81.ValidatorHistoricalRewardsRecordAmino): _81.ValidatorHistoricalRewardsRecord;
                toAmino(message: _81.ValidatorHistoricalRewardsRecord): _81.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _81.ValidatorHistoricalRewardsRecordAminoMsg): _81.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _81.ValidatorHistoricalRewardsRecord): _81.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _81.ValidatorHistoricalRewardsRecordProtoMsg): _81.ValidatorHistoricalRewardsRecord;
                toProto(message: _81.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _81.ValidatorHistoricalRewardsRecord): _81.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _81.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_81.ValidatorCurrentRewardsRecord>): _81.ValidatorCurrentRewardsRecord;
                fromAmino(object: _81.ValidatorCurrentRewardsRecordAmino): _81.ValidatorCurrentRewardsRecord;
                toAmino(message: _81.ValidatorCurrentRewardsRecord): _81.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _81.ValidatorCurrentRewardsRecordAminoMsg): _81.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _81.ValidatorCurrentRewardsRecord): _81.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _81.ValidatorCurrentRewardsRecordProtoMsg): _81.ValidatorCurrentRewardsRecord;
                toProto(message: _81.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _81.ValidatorCurrentRewardsRecord): _81.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _81.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_81.DelegatorStartingInfoRecord>): _81.DelegatorStartingInfoRecord;
                fromAmino(object: _81.DelegatorStartingInfoRecordAmino): _81.DelegatorStartingInfoRecord;
                toAmino(message: _81.DelegatorStartingInfoRecord): _81.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _81.DelegatorStartingInfoRecordAminoMsg): _81.DelegatorStartingInfoRecord;
                toAminoMsg(message: _81.DelegatorStartingInfoRecord): _81.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _81.DelegatorStartingInfoRecordProtoMsg): _81.DelegatorStartingInfoRecord;
                toProto(message: _81.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _81.DelegatorStartingInfoRecord): _81.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _81.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_81.ValidatorSlashEventRecord>): _81.ValidatorSlashEventRecord;
                fromAmino(object: _81.ValidatorSlashEventRecordAmino): _81.ValidatorSlashEventRecord;
                toAmino(message: _81.ValidatorSlashEventRecord): _81.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _81.ValidatorSlashEventRecordAminoMsg): _81.ValidatorSlashEventRecord;
                toAminoMsg(message: _81.ValidatorSlashEventRecord): _81.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _81.ValidatorSlashEventRecordProtoMsg): _81.ValidatorSlashEventRecord;
                toProto(message: _81.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _81.ValidatorSlashEventRecord): _81.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _81.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GenesisState;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
                fromAmino(object: _81.GenesisStateAmino): _81.GenesisState;
                toAmino(message: _81.GenesisState): _81.GenesisStateAmino;
                fromAminoMsg(object: _81.GenesisStateAminoMsg): _81.GenesisState;
                toAminoMsg(message: _81.GenesisState): _81.GenesisStateAminoMsg;
                fromProtoMsg(message: _81.GenesisStateProtoMsg): _81.GenesisState;
                toProto(message: _81.GenesisState): Uint8Array;
                toProtoMsg(message: _81.GenesisState): _81.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _80.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Params;
                fromPartial(object: Partial<_80.Params>): _80.Params;
                fromAmino(object: _80.ParamsAmino): _80.Params;
                toAmino(message: _80.Params): _80.ParamsAmino;
                fromAminoMsg(object: _80.ParamsAminoMsg): _80.Params;
                toAminoMsg(message: _80.Params): _80.ParamsAminoMsg;
                fromProtoMsg(message: _80.ParamsProtoMsg): _80.Params;
                toProto(message: _80.Params): Uint8Array;
                toProtoMsg(message: _80.Params): _80.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _80.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_80.ValidatorHistoricalRewards>): _80.ValidatorHistoricalRewards;
                fromAmino(object: _80.ValidatorHistoricalRewardsAmino): _80.ValidatorHistoricalRewards;
                toAmino(message: _80.ValidatorHistoricalRewards): _80.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _80.ValidatorHistoricalRewardsAminoMsg): _80.ValidatorHistoricalRewards;
                toAminoMsg(message: _80.ValidatorHistoricalRewards): _80.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _80.ValidatorHistoricalRewardsProtoMsg): _80.ValidatorHistoricalRewards;
                toProto(message: _80.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _80.ValidatorHistoricalRewards): _80.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _80.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorCurrentRewards;
                fromPartial(object: Partial<_80.ValidatorCurrentRewards>): _80.ValidatorCurrentRewards;
                fromAmino(object: _80.ValidatorCurrentRewardsAmino): _80.ValidatorCurrentRewards;
                toAmino(message: _80.ValidatorCurrentRewards): _80.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _80.ValidatorCurrentRewardsAminoMsg): _80.ValidatorCurrentRewards;
                toAminoMsg(message: _80.ValidatorCurrentRewards): _80.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _80.ValidatorCurrentRewardsProtoMsg): _80.ValidatorCurrentRewards;
                toProto(message: _80.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _80.ValidatorCurrentRewards): _80.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _80.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_80.ValidatorAccumulatedCommission>): _80.ValidatorAccumulatedCommission;
                fromAmino(object: _80.ValidatorAccumulatedCommissionAmino): _80.ValidatorAccumulatedCommission;
                toAmino(message: _80.ValidatorAccumulatedCommission): _80.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _80.ValidatorAccumulatedCommissionAminoMsg): _80.ValidatorAccumulatedCommission;
                toAminoMsg(message: _80.ValidatorAccumulatedCommission): _80.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _80.ValidatorAccumulatedCommissionProtoMsg): _80.ValidatorAccumulatedCommission;
                toProto(message: _80.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _80.ValidatorAccumulatedCommission): _80.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _80.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_80.ValidatorOutstandingRewards>): _80.ValidatorOutstandingRewards;
                fromAmino(object: _80.ValidatorOutstandingRewardsAmino): _80.ValidatorOutstandingRewards;
                toAmino(message: _80.ValidatorOutstandingRewards): _80.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _80.ValidatorOutstandingRewardsAminoMsg): _80.ValidatorOutstandingRewards;
                toAminoMsg(message: _80.ValidatorOutstandingRewards): _80.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _80.ValidatorOutstandingRewardsProtoMsg): _80.ValidatorOutstandingRewards;
                toProto(message: _80.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _80.ValidatorOutstandingRewards): _80.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _80.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorSlashEvent;
                fromPartial(object: Partial<_80.ValidatorSlashEvent>): _80.ValidatorSlashEvent;
                fromAmino(object: _80.ValidatorSlashEventAmino): _80.ValidatorSlashEvent;
                toAmino(message: _80.ValidatorSlashEvent): _80.ValidatorSlashEventAmino;
                fromAminoMsg(object: _80.ValidatorSlashEventAminoMsg): _80.ValidatorSlashEvent;
                toAminoMsg(message: _80.ValidatorSlashEvent): _80.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _80.ValidatorSlashEventProtoMsg): _80.ValidatorSlashEvent;
                toProto(message: _80.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _80.ValidatorSlashEvent): _80.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _80.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorSlashEvents;
                fromPartial(object: Partial<_80.ValidatorSlashEvents>): _80.ValidatorSlashEvents;
                fromAmino(object: _80.ValidatorSlashEventsAmino): _80.ValidatorSlashEvents;
                toAmino(message: _80.ValidatorSlashEvents): _80.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _80.ValidatorSlashEventsAminoMsg): _80.ValidatorSlashEvents;
                toAminoMsg(message: _80.ValidatorSlashEvents): _80.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _80.ValidatorSlashEventsProtoMsg): _80.ValidatorSlashEvents;
                toProto(message: _80.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _80.ValidatorSlashEvents): _80.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _80.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.FeePool;
                fromPartial(object: Partial<_80.FeePool>): _80.FeePool;
                fromAmino(object: _80.FeePoolAmino): _80.FeePool;
                toAmino(message: _80.FeePool): _80.FeePoolAmino;
                fromAminoMsg(object: _80.FeePoolAminoMsg): _80.FeePool;
                toAminoMsg(message: _80.FeePool): _80.FeePoolAminoMsg;
                fromProtoMsg(message: _80.FeePoolProtoMsg): _80.FeePool;
                toProto(message: _80.FeePool): Uint8Array;
                toProtoMsg(message: _80.FeePool): _80.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _80.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_80.CommunityPoolSpendProposal>): _80.CommunityPoolSpendProposal;
                fromAmino(object: _80.CommunityPoolSpendProposalAmino): _80.CommunityPoolSpendProposal;
                toAmino(message: _80.CommunityPoolSpendProposal): _80.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _80.CommunityPoolSpendProposalAminoMsg): _80.CommunityPoolSpendProposal;
                toAminoMsg(message: _80.CommunityPoolSpendProposal): _80.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _80.CommunityPoolSpendProposalProtoMsg): _80.CommunityPoolSpendProposal;
                toProto(message: _80.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _80.CommunityPoolSpendProposal): _80.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _80.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.DelegatorStartingInfo;
                fromPartial(object: Partial<_80.DelegatorStartingInfo>): _80.DelegatorStartingInfo;
                fromAmino(object: _80.DelegatorStartingInfoAmino): _80.DelegatorStartingInfo;
                toAmino(message: _80.DelegatorStartingInfo): _80.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _80.DelegatorStartingInfoAminoMsg): _80.DelegatorStartingInfo;
                toAminoMsg(message: _80.DelegatorStartingInfo): _80.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _80.DelegatorStartingInfoProtoMsg): _80.DelegatorStartingInfo;
                toProto(message: _80.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _80.DelegatorStartingInfo): _80.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _80.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.DelegationDelegatorReward;
                fromPartial(object: Partial<_80.DelegationDelegatorReward>): _80.DelegationDelegatorReward;
                fromAmino(object: _80.DelegationDelegatorRewardAmino): _80.DelegationDelegatorReward;
                toAmino(message: _80.DelegationDelegatorReward): _80.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _80.DelegationDelegatorRewardAminoMsg): _80.DelegationDelegatorReward;
                toAminoMsg(message: _80.DelegationDelegatorReward): _80.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _80.DelegationDelegatorRewardProtoMsg): _80.DelegationDelegatorReward;
                toProto(message: _80.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _80.DelegationDelegatorReward): _80.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _80.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_80.CommunityPoolSpendProposalWithDeposit>): _80.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _80.CommunityPoolSpendProposalWithDepositAmino): _80.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _80.CommunityPoolSpendProposalWithDeposit): _80.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _80.CommunityPoolSpendProposalWithDepositAminoMsg): _80.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _80.CommunityPoolSpendProposalWithDeposit): _80.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _80.CommunityPoolSpendProposalWithDepositProtoMsg): _80.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _80.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _80.CommunityPoolSpendProposalWithDeposit): _80.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _255.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _86.QueryEvidenceRequest): Promise<_86.QueryEvidenceResponse>;
                allEvidence(request?: _86.QueryAllEvidenceRequest): Promise<_86.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _87.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _87.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _87.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _87.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _87.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _87.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _87.MsgSubmitEvidence) => _87.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _87.MsgSubmitEvidenceAmino) => _87.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _87.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgSubmitEvidence;
                fromPartial(object: Partial<_87.MsgSubmitEvidence>): _87.MsgSubmitEvidence;
                fromAmino(object: _87.MsgSubmitEvidenceAmino): _87.MsgSubmitEvidence;
                toAmino(message: _87.MsgSubmitEvidence): _87.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _87.MsgSubmitEvidenceAminoMsg): _87.MsgSubmitEvidence;
                toAminoMsg(message: _87.MsgSubmitEvidence): _87.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _87.MsgSubmitEvidenceProtoMsg): _87.MsgSubmitEvidence;
                toProto(message: _87.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _87.MsgSubmitEvidence): _87.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _87.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_87.MsgSubmitEvidenceResponse>): _87.MsgSubmitEvidenceResponse;
                fromAmino(object: _87.MsgSubmitEvidenceResponseAmino): _87.MsgSubmitEvidenceResponse;
                toAmino(message: _87.MsgSubmitEvidenceResponse): _87.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _87.MsgSubmitEvidenceResponseAminoMsg): _87.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _87.MsgSubmitEvidenceResponse): _87.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _87.MsgSubmitEvidenceResponseProtoMsg): _87.MsgSubmitEvidenceResponse;
                toProto(message: _87.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _87.MsgSubmitEvidenceResponse): _87.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _86.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryEvidenceRequest;
                fromPartial(object: Partial<_86.QueryEvidenceRequest>): _86.QueryEvidenceRequest;
                fromAmino(object: _86.QueryEvidenceRequestAmino): _86.QueryEvidenceRequest;
                toAmino(message: _86.QueryEvidenceRequest): _86.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _86.QueryEvidenceRequestAminoMsg): _86.QueryEvidenceRequest;
                toAminoMsg(message: _86.QueryEvidenceRequest): _86.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _86.QueryEvidenceRequestProtoMsg): _86.QueryEvidenceRequest;
                toProto(message: _86.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _86.QueryEvidenceRequest): _86.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _86.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryEvidenceResponse;
                fromPartial(object: Partial<_86.QueryEvidenceResponse>): _86.QueryEvidenceResponse;
                fromAmino(object: _86.QueryEvidenceResponseAmino): _86.QueryEvidenceResponse;
                toAmino(message: _86.QueryEvidenceResponse): _86.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _86.QueryEvidenceResponseAminoMsg): _86.QueryEvidenceResponse;
                toAminoMsg(message: _86.QueryEvidenceResponse): _86.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _86.QueryEvidenceResponseProtoMsg): _86.QueryEvidenceResponse;
                toProto(message: _86.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _86.QueryEvidenceResponse): _86.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _86.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_86.QueryAllEvidenceRequest>): _86.QueryAllEvidenceRequest;
                fromAmino(object: _86.QueryAllEvidenceRequestAmino): _86.QueryAllEvidenceRequest;
                toAmino(message: _86.QueryAllEvidenceRequest): _86.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _86.QueryAllEvidenceRequestAminoMsg): _86.QueryAllEvidenceRequest;
                toAminoMsg(message: _86.QueryAllEvidenceRequest): _86.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _86.QueryAllEvidenceRequestProtoMsg): _86.QueryAllEvidenceRequest;
                toProto(message: _86.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAllEvidenceRequest): _86.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _86.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_86.QueryAllEvidenceResponse>): _86.QueryAllEvidenceResponse;
                fromAmino(object: _86.QueryAllEvidenceResponseAmino): _86.QueryAllEvidenceResponse;
                toAmino(message: _86.QueryAllEvidenceResponse): _86.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _86.QueryAllEvidenceResponseAminoMsg): _86.QueryAllEvidenceResponse;
                toAminoMsg(message: _86.QueryAllEvidenceResponse): _86.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _86.QueryAllEvidenceResponseProtoMsg): _86.QueryAllEvidenceResponse;
                toProto(message: _86.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _86.QueryAllEvidenceResponse): _86.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _84.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Equivocation;
                fromPartial(object: Partial<_84.Equivocation>): _84.Equivocation;
                fromAmino(object: _84.EquivocationAmino): _84.Equivocation;
                toAmino(message: _84.Equivocation): _84.EquivocationAmino;
                fromAminoMsg(object: _84.EquivocationAminoMsg): _84.Equivocation;
                toAminoMsg(message: _84.Equivocation): _84.EquivocationAminoMsg;
                fromProtoMsg(message: _84.EquivocationProtoMsg): _84.Equivocation;
                toProto(message: _84.Equivocation): Uint8Array;
                toProtoMsg(message: _84.Equivocation): _84.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _256.MsgClientImpl;
            QueryClientImpl: typeof _240.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _90.QueryAllowanceRequest): Promise<_90.QueryAllowanceResponse>;
                allowances(request: _90.QueryAllowancesRequest): Promise<_90.QueryAllowancesResponse>;
                allowancesByGranter(request: _90.QueryAllowancesByGranterRequest): Promise<_90.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _91.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _91.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _91.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _91.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _91.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _91.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _91.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _91.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _91.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _91.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _91.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _91.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _91.MsgGrantAllowance) => _91.MsgGrantAllowanceAmino;
                    fromAmino: (object: _91.MsgGrantAllowanceAmino) => _91.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _91.MsgRevokeAllowance) => _91.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _91.MsgRevokeAllowanceAmino) => _91.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _91.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgGrantAllowance;
                fromPartial(object: Partial<_91.MsgGrantAllowance>): _91.MsgGrantAllowance;
                fromAmino(object: _91.MsgGrantAllowanceAmino): _91.MsgGrantAllowance;
                toAmino(message: _91.MsgGrantAllowance): _91.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _91.MsgGrantAllowanceAminoMsg): _91.MsgGrantAllowance;
                toAminoMsg(message: _91.MsgGrantAllowance): _91.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _91.MsgGrantAllowanceProtoMsg): _91.MsgGrantAllowance;
                toProto(message: _91.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _91.MsgGrantAllowance): _91.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _91.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_91.MsgGrantAllowanceResponse>): _91.MsgGrantAllowanceResponse;
                fromAmino(_: _91.MsgGrantAllowanceResponseAmino): _91.MsgGrantAllowanceResponse;
                toAmino(_: _91.MsgGrantAllowanceResponse): _91.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _91.MsgGrantAllowanceResponseAminoMsg): _91.MsgGrantAllowanceResponse;
                toAminoMsg(message: _91.MsgGrantAllowanceResponse): _91.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _91.MsgGrantAllowanceResponseProtoMsg): _91.MsgGrantAllowanceResponse;
                toProto(message: _91.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _91.MsgGrantAllowanceResponse): _91.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _91.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgRevokeAllowance;
                fromPartial(object: Partial<_91.MsgRevokeAllowance>): _91.MsgRevokeAllowance;
                fromAmino(object: _91.MsgRevokeAllowanceAmino): _91.MsgRevokeAllowance;
                toAmino(message: _91.MsgRevokeAllowance): _91.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _91.MsgRevokeAllowanceAminoMsg): _91.MsgRevokeAllowance;
                toAminoMsg(message: _91.MsgRevokeAllowance): _91.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _91.MsgRevokeAllowanceProtoMsg): _91.MsgRevokeAllowance;
                toProto(message: _91.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _91.MsgRevokeAllowance): _91.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _91.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_91.MsgRevokeAllowanceResponse>): _91.MsgRevokeAllowanceResponse;
                fromAmino(_: _91.MsgRevokeAllowanceResponseAmino): _91.MsgRevokeAllowanceResponse;
                toAmino(_: _91.MsgRevokeAllowanceResponse): _91.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _91.MsgRevokeAllowanceResponseAminoMsg): _91.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _91.MsgRevokeAllowanceResponse): _91.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _91.MsgRevokeAllowanceResponseProtoMsg): _91.MsgRevokeAllowanceResponse;
                toProto(message: _91.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _91.MsgRevokeAllowanceResponse): _91.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _88.BasicAllowance | _88.PeriodicAllowance | _88.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _90.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAllowanceRequest;
                fromPartial(object: Partial<_90.QueryAllowanceRequest>): _90.QueryAllowanceRequest;
                fromAmino(object: _90.QueryAllowanceRequestAmino): _90.QueryAllowanceRequest;
                toAmino(message: _90.QueryAllowanceRequest): _90.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _90.QueryAllowanceRequestAminoMsg): _90.QueryAllowanceRequest;
                toAminoMsg(message: _90.QueryAllowanceRequest): _90.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAllowanceRequestProtoMsg): _90.QueryAllowanceRequest;
                toProto(message: _90.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAllowanceRequest): _90.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _90.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAllowanceResponse;
                fromPartial(object: Partial<_90.QueryAllowanceResponse>): _90.QueryAllowanceResponse;
                fromAmino(object: _90.QueryAllowanceResponseAmino): _90.QueryAllowanceResponse;
                toAmino(message: _90.QueryAllowanceResponse): _90.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _90.QueryAllowanceResponseAminoMsg): _90.QueryAllowanceResponse;
                toAminoMsg(message: _90.QueryAllowanceResponse): _90.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAllowanceResponseProtoMsg): _90.QueryAllowanceResponse;
                toProto(message: _90.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAllowanceResponse): _90.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _90.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAllowancesRequest;
                fromPartial(object: Partial<_90.QueryAllowancesRequest>): _90.QueryAllowancesRequest;
                fromAmino(object: _90.QueryAllowancesRequestAmino): _90.QueryAllowancesRequest;
                toAmino(message: _90.QueryAllowancesRequest): _90.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _90.QueryAllowancesRequestAminoMsg): _90.QueryAllowancesRequest;
                toAminoMsg(message: _90.QueryAllowancesRequest): _90.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAllowancesRequestProtoMsg): _90.QueryAllowancesRequest;
                toProto(message: _90.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAllowancesRequest): _90.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _90.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAllowancesResponse;
                fromPartial(object: Partial<_90.QueryAllowancesResponse>): _90.QueryAllowancesResponse;
                fromAmino(object: _90.QueryAllowancesResponseAmino): _90.QueryAllowancesResponse;
                toAmino(message: _90.QueryAllowancesResponse): _90.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _90.QueryAllowancesResponseAminoMsg): _90.QueryAllowancesResponse;
                toAminoMsg(message: _90.QueryAllowancesResponse): _90.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAllowancesResponseProtoMsg): _90.QueryAllowancesResponse;
                toProto(message: _90.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAllowancesResponse): _90.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _90.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_90.QueryAllowancesByGranterRequest>): _90.QueryAllowancesByGranterRequest;
                fromAmino(object: _90.QueryAllowancesByGranterRequestAmino): _90.QueryAllowancesByGranterRequest;
                toAmino(message: _90.QueryAllowancesByGranterRequest): _90.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _90.QueryAllowancesByGranterRequestAminoMsg): _90.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _90.QueryAllowancesByGranterRequest): _90.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAllowancesByGranterRequestProtoMsg): _90.QueryAllowancesByGranterRequest;
                toProto(message: _90.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAllowancesByGranterRequest): _90.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _90.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_90.QueryAllowancesByGranterResponse>): _90.QueryAllowancesByGranterResponse;
                fromAmino(object: _90.QueryAllowancesByGranterResponseAmino): _90.QueryAllowancesByGranterResponse;
                toAmino(message: _90.QueryAllowancesByGranterResponse): _90.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _90.QueryAllowancesByGranterResponseAminoMsg): _90.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _90.QueryAllowancesByGranterResponse): _90.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAllowancesByGranterResponseProtoMsg): _90.QueryAllowancesByGranterResponse;
                toProto(message: _90.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAllowancesByGranterResponse): _90.QueryAllowancesByGranterResponseProtoMsg;
            };
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _88.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.BasicAllowance;
                fromPartial(object: Partial<_88.BasicAllowance>): _88.BasicAllowance;
                fromAmino(object: _88.BasicAllowanceAmino): _88.BasicAllowance;
                toAmino(message: _88.BasicAllowance): _88.BasicAllowanceAmino;
                fromAminoMsg(object: _88.BasicAllowanceAminoMsg): _88.BasicAllowance;
                toAminoMsg(message: _88.BasicAllowance): _88.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _88.BasicAllowanceProtoMsg): _88.BasicAllowance;
                toProto(message: _88.BasicAllowance): Uint8Array;
                toProtoMsg(message: _88.BasicAllowance): _88.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _88.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.PeriodicAllowance;
                fromPartial(object: Partial<_88.PeriodicAllowance>): _88.PeriodicAllowance;
                fromAmino(object: _88.PeriodicAllowanceAmino): _88.PeriodicAllowance;
                toAmino(message: _88.PeriodicAllowance): _88.PeriodicAllowanceAmino;
                fromAminoMsg(object: _88.PeriodicAllowanceAminoMsg): _88.PeriodicAllowance;
                toAminoMsg(message: _88.PeriodicAllowance): _88.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _88.PeriodicAllowanceProtoMsg): _88.PeriodicAllowance;
                toProto(message: _88.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _88.PeriodicAllowance): _88.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _88.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.AllowedMsgAllowance;
                fromPartial(object: Partial<_88.AllowedMsgAllowance>): _88.AllowedMsgAllowance;
                fromAmino(object: _88.AllowedMsgAllowanceAmino): _88.AllowedMsgAllowance;
                toAmino(message: _88.AllowedMsgAllowance): _88.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _88.AllowedMsgAllowanceAminoMsg): _88.AllowedMsgAllowance;
                toAminoMsg(message: _88.AllowedMsgAllowance): _88.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _88.AllowedMsgAllowanceProtoMsg): _88.AllowedMsgAllowance;
                toProto(message: _88.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _88.AllowedMsgAllowance): _88.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _88.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Grant;
                fromPartial(object: Partial<_88.Grant>): _88.Grant;
                fromAmino(object: _88.GrantAmino): _88.Grant;
                toAmino(message: _88.Grant): _88.GrantAmino;
                fromAminoMsg(object: _88.GrantAminoMsg): _88.Grant;
                toAminoMsg(message: _88.Grant): _88.GrantAminoMsg;
                fromProtoMsg(message: _88.GrantProtoMsg): _88.Grant;
                toProto(message: _88.Grant): Uint8Array;
                toProtoMsg(message: _88.Grant): _88.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _257.MsgClientImpl;
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _95.QueryProposalRequest): Promise<_95.QueryProposalResponse>;
                proposals(request: _95.QueryProposalsRequest): Promise<_95.QueryProposalsResponse>;
                vote(request: _95.QueryVoteRequest): Promise<_95.QueryVoteResponse>;
                votes(request: _95.QueryVotesRequest): Promise<_95.QueryVotesResponse>;
                params(request: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                deposit(request: _95.QueryDepositRequest): Promise<_95.QueryDepositResponse>;
                deposits(request: _95.QueryDepositsRequest): Promise<_95.QueryDepositsResponse>;
                tallyResult(request: _95.QueryTallyResultRequest): Promise<_95.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _96.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _96.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _96.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _96.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _96.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _96.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _96.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _96.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _96.MsgExecLegacyContent;
                    };
                    vote(value: _96.MsgVote): {
                        typeUrl: string;
                        value: _96.MsgVote;
                    };
                    voteWeighted(value: _96.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _96.MsgVoteWeighted;
                    };
                    deposit(value: _96.MsgDeposit): {
                        typeUrl: string;
                        value: _96.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _96.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _96.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _96.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _96.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _96.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _96.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _96.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _96.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _96.MsgExecLegacyContent;
                    };
                    vote(value: _96.MsgVote): {
                        typeUrl: string;
                        value: _96.MsgVote;
                    };
                    voteWeighted(value: _96.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _96.MsgVoteWeighted;
                    };
                    deposit(value: _96.MsgDeposit): {
                        typeUrl: string;
                        value: _96.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _96.MsgSubmitProposal) => _96.MsgSubmitProposalAmino;
                    fromAmino: (object: _96.MsgSubmitProposalAmino) => _96.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _96.MsgExecLegacyContent) => _96.MsgExecLegacyContentAmino;
                    fromAmino: (object: _96.MsgExecLegacyContentAmino) => _96.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _96.MsgVote) => _96.MsgVoteAmino;
                    fromAmino: (object: _96.MsgVoteAmino) => _96.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _96.MsgVoteWeighted) => _96.MsgVoteWeightedAmino;
                    fromAmino: (object: _96.MsgVoteWeightedAmino) => _96.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _96.MsgDeposit) => _96.MsgDepositAmino;
                    fromAmino: (object: _96.MsgDepositAmino) => _96.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _96.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgSubmitProposal;
                fromPartial(object: Partial<_96.MsgSubmitProposal>): _96.MsgSubmitProposal;
                fromAmino(object: _96.MsgSubmitProposalAmino): _96.MsgSubmitProposal;
                toAmino(message: _96.MsgSubmitProposal): _96.MsgSubmitProposalAmino;
                fromAminoMsg(object: _96.MsgSubmitProposalAminoMsg): _96.MsgSubmitProposal;
                toAminoMsg(message: _96.MsgSubmitProposal): _96.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _96.MsgSubmitProposalProtoMsg): _96.MsgSubmitProposal;
                toProto(message: _96.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _96.MsgSubmitProposal): _96.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _96.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_96.MsgSubmitProposalResponse>): _96.MsgSubmitProposalResponse;
                fromAmino(object: _96.MsgSubmitProposalResponseAmino): _96.MsgSubmitProposalResponse;
                toAmino(message: _96.MsgSubmitProposalResponse): _96.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _96.MsgSubmitProposalResponseAminoMsg): _96.MsgSubmitProposalResponse;
                toAminoMsg(message: _96.MsgSubmitProposalResponse): _96.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _96.MsgSubmitProposalResponseProtoMsg): _96.MsgSubmitProposalResponse;
                toProto(message: _96.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _96.MsgSubmitProposalResponse): _96.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _96.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgExecLegacyContent;
                fromPartial(object: Partial<_96.MsgExecLegacyContent>): _96.MsgExecLegacyContent;
                fromAmino(object: _96.MsgExecLegacyContentAmino): _96.MsgExecLegacyContent;
                toAmino(message: _96.MsgExecLegacyContent): _96.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _96.MsgExecLegacyContentAminoMsg): _96.MsgExecLegacyContent;
                toAminoMsg(message: _96.MsgExecLegacyContent): _96.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _96.MsgExecLegacyContentProtoMsg): _96.MsgExecLegacyContent;
                toProto(message: _96.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _96.MsgExecLegacyContent): _96.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _96.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_96.MsgExecLegacyContentResponse>): _96.MsgExecLegacyContentResponse;
                fromAmino(_: _96.MsgExecLegacyContentResponseAmino): _96.MsgExecLegacyContentResponse;
                toAmino(_: _96.MsgExecLegacyContentResponse): _96.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _96.MsgExecLegacyContentResponseAminoMsg): _96.MsgExecLegacyContentResponse;
                toAminoMsg(message: _96.MsgExecLegacyContentResponse): _96.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _96.MsgExecLegacyContentResponseProtoMsg): _96.MsgExecLegacyContentResponse;
                toProto(message: _96.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _96.MsgExecLegacyContentResponse): _96.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _96.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgVote;
                fromPartial(object: Partial<_96.MsgVote>): _96.MsgVote;
                fromAmino(object: _96.MsgVoteAmino): _96.MsgVote;
                toAmino(message: _96.MsgVote): _96.MsgVoteAmino;
                fromAminoMsg(object: _96.MsgVoteAminoMsg): _96.MsgVote;
                toAminoMsg(message: _96.MsgVote): _96.MsgVoteAminoMsg;
                fromProtoMsg(message: _96.MsgVoteProtoMsg): _96.MsgVote;
                toProto(message: _96.MsgVote): Uint8Array;
                toProtoMsg(message: _96.MsgVote): _96.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _96.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgVoteResponse;
                fromPartial(_: Partial<_96.MsgVoteResponse>): _96.MsgVoteResponse;
                fromAmino(_: _96.MsgVoteResponseAmino): _96.MsgVoteResponse;
                toAmino(_: _96.MsgVoteResponse): _96.MsgVoteResponseAmino;
                fromAminoMsg(object: _96.MsgVoteResponseAminoMsg): _96.MsgVoteResponse;
                toAminoMsg(message: _96.MsgVoteResponse): _96.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _96.MsgVoteResponseProtoMsg): _96.MsgVoteResponse;
                toProto(message: _96.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _96.MsgVoteResponse): _96.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _96.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgVoteWeighted;
                fromPartial(object: Partial<_96.MsgVoteWeighted>): _96.MsgVoteWeighted;
                fromAmino(object: _96.MsgVoteWeightedAmino): _96.MsgVoteWeighted;
                toAmino(message: _96.MsgVoteWeighted): _96.MsgVoteWeightedAmino;
                fromAminoMsg(object: _96.MsgVoteWeightedAminoMsg): _96.MsgVoteWeighted;
                toAminoMsg(message: _96.MsgVoteWeighted): _96.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _96.MsgVoteWeightedProtoMsg): _96.MsgVoteWeighted;
                toProto(message: _96.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _96.MsgVoteWeighted): _96.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _96.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_96.MsgVoteWeightedResponse>): _96.MsgVoteWeightedResponse;
                fromAmino(_: _96.MsgVoteWeightedResponseAmino): _96.MsgVoteWeightedResponse;
                toAmino(_: _96.MsgVoteWeightedResponse): _96.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _96.MsgVoteWeightedResponseAminoMsg): _96.MsgVoteWeightedResponse;
                toAminoMsg(message: _96.MsgVoteWeightedResponse): _96.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _96.MsgVoteWeightedResponseProtoMsg): _96.MsgVoteWeightedResponse;
                toProto(message: _96.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _96.MsgVoteWeightedResponse): _96.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _96.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgDeposit;
                fromPartial(object: Partial<_96.MsgDeposit>): _96.MsgDeposit;
                fromAmino(object: _96.MsgDepositAmino): _96.MsgDeposit;
                toAmino(message: _96.MsgDeposit): _96.MsgDepositAmino;
                fromAminoMsg(object: _96.MsgDepositAminoMsg): _96.MsgDeposit;
                toAminoMsg(message: _96.MsgDeposit): _96.MsgDepositAminoMsg;
                fromProtoMsg(message: _96.MsgDepositProtoMsg): _96.MsgDeposit;
                toProto(message: _96.MsgDeposit): Uint8Array;
                toProtoMsg(message: _96.MsgDeposit): _96.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _96.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgDepositResponse;
                fromPartial(_: Partial<_96.MsgDepositResponse>): _96.MsgDepositResponse;
                fromAmino(_: _96.MsgDepositResponseAmino): _96.MsgDepositResponse;
                toAmino(_: _96.MsgDepositResponse): _96.MsgDepositResponseAmino;
                fromAminoMsg(object: _96.MsgDepositResponseAminoMsg): _96.MsgDepositResponse;
                toAminoMsg(message: _96.MsgDepositResponse): _96.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _96.MsgDepositResponseProtoMsg): _96.MsgDepositResponse;
                toProto(message: _96.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _96.MsgDepositResponse): _96.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _98.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _95.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryProposalRequest;
                fromPartial(object: Partial<_95.QueryProposalRequest>): _95.QueryProposalRequest;
                fromAmino(object: _95.QueryProposalRequestAmino): _95.QueryProposalRequest;
                toAmino(message: _95.QueryProposalRequest): _95.QueryProposalRequestAmino;
                fromAminoMsg(object: _95.QueryProposalRequestAminoMsg): _95.QueryProposalRequest;
                toAminoMsg(message: _95.QueryProposalRequest): _95.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _95.QueryProposalRequestProtoMsg): _95.QueryProposalRequest;
                toProto(message: _95.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _95.QueryProposalRequest): _95.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _95.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryProposalResponse;
                fromPartial(object: Partial<_95.QueryProposalResponse>): _95.QueryProposalResponse;
                fromAmino(object: _95.QueryProposalResponseAmino): _95.QueryProposalResponse;
                toAmino(message: _95.QueryProposalResponse): _95.QueryProposalResponseAmino;
                fromAminoMsg(object: _95.QueryProposalResponseAminoMsg): _95.QueryProposalResponse;
                toAminoMsg(message: _95.QueryProposalResponse): _95.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _95.QueryProposalResponseProtoMsg): _95.QueryProposalResponse;
                toProto(message: _95.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _95.QueryProposalResponse): _95.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _95.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryProposalsRequest;
                fromPartial(object: Partial<_95.QueryProposalsRequest>): _95.QueryProposalsRequest;
                fromAmino(object: _95.QueryProposalsRequestAmino): _95.QueryProposalsRequest;
                toAmino(message: _95.QueryProposalsRequest): _95.QueryProposalsRequestAmino;
                fromAminoMsg(object: _95.QueryProposalsRequestAminoMsg): _95.QueryProposalsRequest;
                toAminoMsg(message: _95.QueryProposalsRequest): _95.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _95.QueryProposalsRequestProtoMsg): _95.QueryProposalsRequest;
                toProto(message: _95.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _95.QueryProposalsRequest): _95.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _95.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryProposalsResponse;
                fromPartial(object: Partial<_95.QueryProposalsResponse>): _95.QueryProposalsResponse;
                fromAmino(object: _95.QueryProposalsResponseAmino): _95.QueryProposalsResponse;
                toAmino(message: _95.QueryProposalsResponse): _95.QueryProposalsResponseAmino;
                fromAminoMsg(object: _95.QueryProposalsResponseAminoMsg): _95.QueryProposalsResponse;
                toAminoMsg(message: _95.QueryProposalsResponse): _95.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _95.QueryProposalsResponseProtoMsg): _95.QueryProposalsResponse;
                toProto(message: _95.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _95.QueryProposalsResponse): _95.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _95.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryVoteRequest;
                fromPartial(object: Partial<_95.QueryVoteRequest>): _95.QueryVoteRequest;
                fromAmino(object: _95.QueryVoteRequestAmino): _95.QueryVoteRequest;
                toAmino(message: _95.QueryVoteRequest): _95.QueryVoteRequestAmino;
                fromAminoMsg(object: _95.QueryVoteRequestAminoMsg): _95.QueryVoteRequest;
                toAminoMsg(message: _95.QueryVoteRequest): _95.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _95.QueryVoteRequestProtoMsg): _95.QueryVoteRequest;
                toProto(message: _95.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _95.QueryVoteRequest): _95.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _95.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryVoteResponse;
                fromPartial(object: Partial<_95.QueryVoteResponse>): _95.QueryVoteResponse;
                fromAmino(object: _95.QueryVoteResponseAmino): _95.QueryVoteResponse;
                toAmino(message: _95.QueryVoteResponse): _95.QueryVoteResponseAmino;
                fromAminoMsg(object: _95.QueryVoteResponseAminoMsg): _95.QueryVoteResponse;
                toAminoMsg(message: _95.QueryVoteResponse): _95.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _95.QueryVoteResponseProtoMsg): _95.QueryVoteResponse;
                toProto(message: _95.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _95.QueryVoteResponse): _95.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _95.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryVotesRequest;
                fromPartial(object: Partial<_95.QueryVotesRequest>): _95.QueryVotesRequest;
                fromAmino(object: _95.QueryVotesRequestAmino): _95.QueryVotesRequest;
                toAmino(message: _95.QueryVotesRequest): _95.QueryVotesRequestAmino;
                fromAminoMsg(object: _95.QueryVotesRequestAminoMsg): _95.QueryVotesRequest;
                toAminoMsg(message: _95.QueryVotesRequest): _95.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _95.QueryVotesRequestProtoMsg): _95.QueryVotesRequest;
                toProto(message: _95.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _95.QueryVotesRequest): _95.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _95.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryVotesResponse;
                fromPartial(object: Partial<_95.QueryVotesResponse>): _95.QueryVotesResponse;
                fromAmino(object: _95.QueryVotesResponseAmino): _95.QueryVotesResponse;
                toAmino(message: _95.QueryVotesResponse): _95.QueryVotesResponseAmino;
                fromAminoMsg(object: _95.QueryVotesResponseAminoMsg): _95.QueryVotesResponse;
                toAminoMsg(message: _95.QueryVotesResponse): _95.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _95.QueryVotesResponseProtoMsg): _95.QueryVotesResponse;
                toProto(message: _95.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _95.QueryVotesResponse): _95.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _95.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryParamsRequest;
                fromPartial(object: Partial<_95.QueryParamsRequest>): _95.QueryParamsRequest;
                fromAmino(object: _95.QueryParamsRequestAmino): _95.QueryParamsRequest;
                toAmino(message: _95.QueryParamsRequest): _95.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _95.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryDepositRequest;
                fromPartial(object: Partial<_95.QueryDepositRequest>): _95.QueryDepositRequest;
                fromAmino(object: _95.QueryDepositRequestAmino): _95.QueryDepositRequest;
                toAmino(message: _95.QueryDepositRequest): _95.QueryDepositRequestAmino;
                fromAminoMsg(object: _95.QueryDepositRequestAminoMsg): _95.QueryDepositRequest;
                toAminoMsg(message: _95.QueryDepositRequest): _95.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _95.QueryDepositRequestProtoMsg): _95.QueryDepositRequest;
                toProto(message: _95.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _95.QueryDepositRequest): _95.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _95.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryDepositResponse;
                fromPartial(object: Partial<_95.QueryDepositResponse>): _95.QueryDepositResponse;
                fromAmino(object: _95.QueryDepositResponseAmino): _95.QueryDepositResponse;
                toAmino(message: _95.QueryDepositResponse): _95.QueryDepositResponseAmino;
                fromAminoMsg(object: _95.QueryDepositResponseAminoMsg): _95.QueryDepositResponse;
                toAminoMsg(message: _95.QueryDepositResponse): _95.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _95.QueryDepositResponseProtoMsg): _95.QueryDepositResponse;
                toProto(message: _95.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _95.QueryDepositResponse): _95.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _95.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryDepositsRequest;
                fromPartial(object: Partial<_95.QueryDepositsRequest>): _95.QueryDepositsRequest;
                fromAmino(object: _95.QueryDepositsRequestAmino): _95.QueryDepositsRequest;
                toAmino(message: _95.QueryDepositsRequest): _95.QueryDepositsRequestAmino;
                fromAminoMsg(object: _95.QueryDepositsRequestAminoMsg): _95.QueryDepositsRequest;
                toAminoMsg(message: _95.QueryDepositsRequest): _95.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _95.QueryDepositsRequestProtoMsg): _95.QueryDepositsRequest;
                toProto(message: _95.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _95.QueryDepositsRequest): _95.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _95.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryDepositsResponse;
                fromPartial(object: Partial<_95.QueryDepositsResponse>): _95.QueryDepositsResponse;
                fromAmino(object: _95.QueryDepositsResponseAmino): _95.QueryDepositsResponse;
                toAmino(message: _95.QueryDepositsResponse): _95.QueryDepositsResponseAmino;
                fromAminoMsg(object: _95.QueryDepositsResponseAminoMsg): _95.QueryDepositsResponse;
                toAminoMsg(message: _95.QueryDepositsResponse): _95.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _95.QueryDepositsResponseProtoMsg): _95.QueryDepositsResponse;
                toProto(message: _95.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _95.QueryDepositsResponse): _95.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _95.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryTallyResultRequest;
                fromPartial(object: Partial<_95.QueryTallyResultRequest>): _95.QueryTallyResultRequest;
                fromAmino(object: _95.QueryTallyResultRequestAmino): _95.QueryTallyResultRequest;
                toAmino(message: _95.QueryTallyResultRequest): _95.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _95.QueryTallyResultRequestAminoMsg): _95.QueryTallyResultRequest;
                toAminoMsg(message: _95.QueryTallyResultRequest): _95.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _95.QueryTallyResultRequestProtoMsg): _95.QueryTallyResultRequest;
                toProto(message: _95.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _95.QueryTallyResultRequest): _95.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _95.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryTallyResultResponse;
                fromPartial(object: Partial<_95.QueryTallyResultResponse>): _95.QueryTallyResultResponse;
                fromAmino(object: _95.QueryTallyResultResponseAmino): _95.QueryTallyResultResponse;
                toAmino(message: _95.QueryTallyResultResponse): _95.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _95.QueryTallyResultResponseAminoMsg): _95.QueryTallyResultResponse;
                toAminoMsg(message: _95.QueryTallyResultResponse): _95.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _95.QueryTallyResultResponseProtoMsg): _95.QueryTallyResultResponse;
                toProto(message: _95.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _95.QueryTallyResultResponse): _95.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _94.VoteOption;
            voteOptionToJSON(object: _94.VoteOption): string;
            proposalStatusFromJSON(object: any): _94.ProposalStatus;
            proposalStatusToJSON(object: _94.ProposalStatus): string;
            VoteOption: typeof _94.VoteOption;
            VoteOptionSDKType: typeof _94.VoteOption;
            VoteOptionAmino: typeof _94.VoteOption;
            ProposalStatus: typeof _94.ProposalStatus;
            ProposalStatusSDKType: typeof _94.ProposalStatus;
            ProposalStatusAmino: typeof _94.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _94.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.WeightedVoteOption;
                fromPartial(object: Partial<_94.WeightedVoteOption>): _94.WeightedVoteOption;
                fromAmino(object: _94.WeightedVoteOptionAmino): _94.WeightedVoteOption;
                toAmino(message: _94.WeightedVoteOption): _94.WeightedVoteOptionAmino;
                fromAminoMsg(object: _94.WeightedVoteOptionAminoMsg): _94.WeightedVoteOption;
                toAminoMsg(message: _94.WeightedVoteOption): _94.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _94.WeightedVoteOptionProtoMsg): _94.WeightedVoteOption;
                toProto(message: _94.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _94.WeightedVoteOption): _94.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _94.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.Deposit;
                fromPartial(object: Partial<_94.Deposit>): _94.Deposit;
                fromAmino(object: _94.DepositAmino): _94.Deposit;
                toAmino(message: _94.Deposit): _94.DepositAmino;
                fromAminoMsg(object: _94.DepositAminoMsg): _94.Deposit;
                toAminoMsg(message: _94.Deposit): _94.DepositAminoMsg;
                fromProtoMsg(message: _94.DepositProtoMsg): _94.Deposit;
                toProto(message: _94.Deposit): Uint8Array;
                toProtoMsg(message: _94.Deposit): _94.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _94.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.Proposal;
                fromPartial(object: Partial<_94.Proposal>): _94.Proposal;
                fromAmino(object: _94.ProposalAmino): _94.Proposal;
                toAmino(message: _94.Proposal): _94.ProposalAmino;
                fromAminoMsg(object: _94.ProposalAminoMsg): _94.Proposal;
                toAminoMsg(message: _94.Proposal): _94.ProposalAminoMsg;
                fromProtoMsg(message: _94.ProposalProtoMsg): _94.Proposal;
                toProto(message: _94.Proposal): Uint8Array;
                toProtoMsg(message: _94.Proposal): _94.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _94.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.TallyResult;
                fromPartial(object: Partial<_94.TallyResult>): _94.TallyResult;
                fromAmino(object: _94.TallyResultAmino): _94.TallyResult;
                toAmino(message: _94.TallyResult): _94.TallyResultAmino;
                fromAminoMsg(object: _94.TallyResultAminoMsg): _94.TallyResult;
                toAminoMsg(message: _94.TallyResult): _94.TallyResultAminoMsg;
                fromProtoMsg(message: _94.TallyResultProtoMsg): _94.TallyResult;
                toProto(message: _94.TallyResult): Uint8Array;
                toProtoMsg(message: _94.TallyResult): _94.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _94.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.Vote;
                fromPartial(object: Partial<_94.Vote>): _94.Vote;
                fromAmino(object: _94.VoteAmino): _94.Vote;
                toAmino(message: _94.Vote): _94.VoteAmino;
                fromAminoMsg(object: _94.VoteAminoMsg): _94.Vote;
                toAminoMsg(message: _94.Vote): _94.VoteAminoMsg;
                fromProtoMsg(message: _94.VoteProtoMsg): _94.Vote;
                toProto(message: _94.Vote): Uint8Array;
                toProtoMsg(message: _94.Vote): _94.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _94.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.DepositParams;
                fromPartial(object: Partial<_94.DepositParams>): _94.DepositParams;
                fromAmino(object: _94.DepositParamsAmino): _94.DepositParams;
                toAmino(message: _94.DepositParams): _94.DepositParamsAmino;
                fromAminoMsg(object: _94.DepositParamsAminoMsg): _94.DepositParams;
                toAminoMsg(message: _94.DepositParams): _94.DepositParamsAminoMsg;
                fromProtoMsg(message: _94.DepositParamsProtoMsg): _94.DepositParams;
                toProto(message: _94.DepositParams): Uint8Array;
                toProtoMsg(message: _94.DepositParams): _94.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _94.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.VotingParams;
                fromPartial(object: Partial<_94.VotingParams>): _94.VotingParams;
                fromAmino(object: _94.VotingParamsAmino): _94.VotingParams;
                toAmino(message: _94.VotingParams): _94.VotingParamsAmino;
                fromAminoMsg(object: _94.VotingParamsAminoMsg): _94.VotingParams;
                toAminoMsg(message: _94.VotingParams): _94.VotingParamsAminoMsg;
                fromProtoMsg(message: _94.VotingParamsProtoMsg): _94.VotingParams;
                toProto(message: _94.VotingParams): Uint8Array;
                toProtoMsg(message: _94.VotingParams): _94.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _94.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.TallyParams;
                fromPartial(object: Partial<_94.TallyParams>): _94.TallyParams;
                fromAmino(object: _94.TallyParamsAmino): _94.TallyParams;
                toAmino(message: _94.TallyParams): _94.TallyParamsAmino;
                fromAminoMsg(object: _94.TallyParamsAminoMsg): _94.TallyParams;
                toAminoMsg(message: _94.TallyParams): _94.TallyParamsAminoMsg;
                fromProtoMsg(message: _94.TallyParamsProtoMsg): _94.TallyParams;
                toProto(message: _94.TallyParams): Uint8Array;
                toProtoMsg(message: _94.TallyParams): _94.TallyParamsProtoMsg;
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
        const v1beta1: {
            MsgClientImpl: typeof _258.MsgClientImpl;
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _99.QueryProposalRequest): Promise<_99.QueryProposalResponse>;
                proposals(request: _99.QueryProposalsRequest): Promise<_99.QueryProposalsResponse>;
                vote(request: _99.QueryVoteRequest): Promise<_99.QueryVoteResponse>;
                votes(request: _99.QueryVotesRequest): Promise<_99.QueryVotesResponse>;
                params(request: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                deposit(request: _99.QueryDepositRequest): Promise<_99.QueryDepositResponse>;
                deposits(request: _99.QueryDepositsRequest): Promise<_99.QueryDepositsResponse>;
                tallyResult(request: _99.QueryTallyResultRequest): Promise<_99.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _100.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _100.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _100.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _100.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _100.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _100.MsgSubmitProposal;
                    };
                    vote(value: _100.MsgVote): {
                        typeUrl: string;
                        value: _100.MsgVote;
                    };
                    voteWeighted(value: _100.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _100.MsgVoteWeighted;
                    };
                    deposit(value: _100.MsgDeposit): {
                        typeUrl: string;
                        value: _100.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _100.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _100.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _100.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _100.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _100.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _100.MsgSubmitProposal;
                    };
                    vote(value: _100.MsgVote): {
                        typeUrl: string;
                        value: _100.MsgVote;
                    };
                    voteWeighted(value: _100.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _100.MsgVoteWeighted;
                    };
                    deposit(value: _100.MsgDeposit): {
                        typeUrl: string;
                        value: _100.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _100.MsgSubmitProposal) => _100.MsgSubmitProposalAmino;
                    fromAmino: (object: _100.MsgSubmitProposalAmino) => _100.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _100.MsgVote) => _100.MsgVoteAmino;
                    fromAmino: (object: _100.MsgVoteAmino) => _100.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _100.MsgVoteWeighted) => _100.MsgVoteWeightedAmino;
                    fromAmino: (object: _100.MsgVoteWeightedAmino) => _100.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _100.MsgDeposit) => _100.MsgDepositAmino;
                    fromAmino: (object: _100.MsgDepositAmino) => _100.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _100.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgSubmitProposal;
                fromPartial(object: Partial<_100.MsgSubmitProposal>): _100.MsgSubmitProposal;
                fromAmino(object: _100.MsgSubmitProposalAmino): _100.MsgSubmitProposal;
                toAmino(message: _100.MsgSubmitProposal): _100.MsgSubmitProposalAmino;
                fromAminoMsg(object: _100.MsgSubmitProposalAminoMsg): _100.MsgSubmitProposal;
                toAminoMsg(message: _100.MsgSubmitProposal): _100.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _100.MsgSubmitProposalProtoMsg): _100.MsgSubmitProposal;
                toProto(message: _100.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _100.MsgSubmitProposal): _100.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _100.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_100.MsgSubmitProposalResponse>): _100.MsgSubmitProposalResponse;
                fromAmino(object: _100.MsgSubmitProposalResponseAmino): _100.MsgSubmitProposalResponse;
                toAmino(message: _100.MsgSubmitProposalResponse): _100.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _100.MsgSubmitProposalResponseAminoMsg): _100.MsgSubmitProposalResponse;
                toAminoMsg(message: _100.MsgSubmitProposalResponse): _100.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _100.MsgSubmitProposalResponseProtoMsg): _100.MsgSubmitProposalResponse;
                toProto(message: _100.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _100.MsgSubmitProposalResponse): _100.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _100.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgVote;
                fromPartial(object: Partial<_100.MsgVote>): _100.MsgVote;
                fromAmino(object: _100.MsgVoteAmino): _100.MsgVote;
                toAmino(message: _100.MsgVote): _100.MsgVoteAmino;
                fromAminoMsg(object: _100.MsgVoteAminoMsg): _100.MsgVote;
                toAminoMsg(message: _100.MsgVote): _100.MsgVoteAminoMsg;
                fromProtoMsg(message: _100.MsgVoteProtoMsg): _100.MsgVote;
                toProto(message: _100.MsgVote): Uint8Array;
                toProtoMsg(message: _100.MsgVote): _100.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _100.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgVoteResponse;
                fromPartial(_: Partial<_100.MsgVoteResponse>): _100.MsgVoteResponse;
                fromAmino(_: _100.MsgVoteResponseAmino): _100.MsgVoteResponse;
                toAmino(_: _100.MsgVoteResponse): _100.MsgVoteResponseAmino;
                fromAminoMsg(object: _100.MsgVoteResponseAminoMsg): _100.MsgVoteResponse;
                toAminoMsg(message: _100.MsgVoteResponse): _100.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _100.MsgVoteResponseProtoMsg): _100.MsgVoteResponse;
                toProto(message: _100.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _100.MsgVoteResponse): _100.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _100.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgVoteWeighted;
                fromPartial(object: Partial<_100.MsgVoteWeighted>): _100.MsgVoteWeighted;
                fromAmino(object: _100.MsgVoteWeightedAmino): _100.MsgVoteWeighted;
                toAmino(message: _100.MsgVoteWeighted): _100.MsgVoteWeightedAmino;
                fromAminoMsg(object: _100.MsgVoteWeightedAminoMsg): _100.MsgVoteWeighted;
                toAminoMsg(message: _100.MsgVoteWeighted): _100.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _100.MsgVoteWeightedProtoMsg): _100.MsgVoteWeighted;
                toProto(message: _100.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _100.MsgVoteWeighted): _100.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _100.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_100.MsgVoteWeightedResponse>): _100.MsgVoteWeightedResponse;
                fromAmino(_: _100.MsgVoteWeightedResponseAmino): _100.MsgVoteWeightedResponse;
                toAmino(_: _100.MsgVoteWeightedResponse): _100.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _100.MsgVoteWeightedResponseAminoMsg): _100.MsgVoteWeightedResponse;
                toAminoMsg(message: _100.MsgVoteWeightedResponse): _100.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _100.MsgVoteWeightedResponseProtoMsg): _100.MsgVoteWeightedResponse;
                toProto(message: _100.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _100.MsgVoteWeightedResponse): _100.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _100.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgDeposit;
                fromPartial(object: Partial<_100.MsgDeposit>): _100.MsgDeposit;
                fromAmino(object: _100.MsgDepositAmino): _100.MsgDeposit;
                toAmino(message: _100.MsgDeposit): _100.MsgDepositAmino;
                fromAminoMsg(object: _100.MsgDepositAminoMsg): _100.MsgDeposit;
                toAminoMsg(message: _100.MsgDeposit): _100.MsgDepositAminoMsg;
                fromProtoMsg(message: _100.MsgDepositProtoMsg): _100.MsgDeposit;
                toProto(message: _100.MsgDeposit): Uint8Array;
                toProtoMsg(message: _100.MsgDeposit): _100.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _100.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgDepositResponse;
                fromPartial(_: Partial<_100.MsgDepositResponse>): _100.MsgDepositResponse;
                fromAmino(_: _100.MsgDepositResponseAmino): _100.MsgDepositResponse;
                toAmino(_: _100.MsgDepositResponse): _100.MsgDepositResponseAmino;
                fromAminoMsg(object: _100.MsgDepositResponseAminoMsg): _100.MsgDepositResponse;
                toAminoMsg(message: _100.MsgDepositResponse): _100.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _100.MsgDepositResponseProtoMsg): _100.MsgDepositResponse;
                toProto(message: _100.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _100.MsgDepositResponse): _100.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _98.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _99.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryProposalRequest;
                fromPartial(object: Partial<_99.QueryProposalRequest>): _99.QueryProposalRequest;
                fromAmino(object: _99.QueryProposalRequestAmino): _99.QueryProposalRequest;
                toAmino(message: _99.QueryProposalRequest): _99.QueryProposalRequestAmino;
                fromAminoMsg(object: _99.QueryProposalRequestAminoMsg): _99.QueryProposalRequest;
                toAminoMsg(message: _99.QueryProposalRequest): _99.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _99.QueryProposalRequestProtoMsg): _99.QueryProposalRequest;
                toProto(message: _99.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _99.QueryProposalRequest): _99.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _99.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryProposalResponse;
                fromPartial(object: Partial<_99.QueryProposalResponse>): _99.QueryProposalResponse;
                fromAmino(object: _99.QueryProposalResponseAmino): _99.QueryProposalResponse;
                toAmino(message: _99.QueryProposalResponse): _99.QueryProposalResponseAmino;
                fromAminoMsg(object: _99.QueryProposalResponseAminoMsg): _99.QueryProposalResponse;
                toAminoMsg(message: _99.QueryProposalResponse): _99.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _99.QueryProposalResponseProtoMsg): _99.QueryProposalResponse;
                toProto(message: _99.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _99.QueryProposalResponse): _99.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _99.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryProposalsRequest;
                fromPartial(object: Partial<_99.QueryProposalsRequest>): _99.QueryProposalsRequest;
                fromAmino(object: _99.QueryProposalsRequestAmino): _99.QueryProposalsRequest;
                toAmino(message: _99.QueryProposalsRequest): _99.QueryProposalsRequestAmino;
                fromAminoMsg(object: _99.QueryProposalsRequestAminoMsg): _99.QueryProposalsRequest;
                toAminoMsg(message: _99.QueryProposalsRequest): _99.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryProposalsRequestProtoMsg): _99.QueryProposalsRequest;
                toProto(message: _99.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryProposalsRequest): _99.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _99.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryProposalsResponse;
                fromPartial(object: Partial<_99.QueryProposalsResponse>): _99.QueryProposalsResponse;
                fromAmino(object: _99.QueryProposalsResponseAmino): _99.QueryProposalsResponse;
                toAmino(message: _99.QueryProposalsResponse): _99.QueryProposalsResponseAmino;
                fromAminoMsg(object: _99.QueryProposalsResponseAminoMsg): _99.QueryProposalsResponse;
                toAminoMsg(message: _99.QueryProposalsResponse): _99.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryProposalsResponseProtoMsg): _99.QueryProposalsResponse;
                toProto(message: _99.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryProposalsResponse): _99.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _99.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryVoteRequest;
                fromPartial(object: Partial<_99.QueryVoteRequest>): _99.QueryVoteRequest;
                fromAmino(object: _99.QueryVoteRequestAmino): _99.QueryVoteRequest;
                toAmino(message: _99.QueryVoteRequest): _99.QueryVoteRequestAmino;
                fromAminoMsg(object: _99.QueryVoteRequestAminoMsg): _99.QueryVoteRequest;
                toAminoMsg(message: _99.QueryVoteRequest): _99.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _99.QueryVoteRequestProtoMsg): _99.QueryVoteRequest;
                toProto(message: _99.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _99.QueryVoteRequest): _99.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _99.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryVoteResponse;
                fromPartial(object: Partial<_99.QueryVoteResponse>): _99.QueryVoteResponse;
                fromAmino(object: _99.QueryVoteResponseAmino): _99.QueryVoteResponse;
                toAmino(message: _99.QueryVoteResponse): _99.QueryVoteResponseAmino;
                fromAminoMsg(object: _99.QueryVoteResponseAminoMsg): _99.QueryVoteResponse;
                toAminoMsg(message: _99.QueryVoteResponse): _99.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _99.QueryVoteResponseProtoMsg): _99.QueryVoteResponse;
                toProto(message: _99.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _99.QueryVoteResponse): _99.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _99.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryVotesRequest;
                fromPartial(object: Partial<_99.QueryVotesRequest>): _99.QueryVotesRequest;
                fromAmino(object: _99.QueryVotesRequestAmino): _99.QueryVotesRequest;
                toAmino(message: _99.QueryVotesRequest): _99.QueryVotesRequestAmino;
                fromAminoMsg(object: _99.QueryVotesRequestAminoMsg): _99.QueryVotesRequest;
                toAminoMsg(message: _99.QueryVotesRequest): _99.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _99.QueryVotesRequestProtoMsg): _99.QueryVotesRequest;
                toProto(message: _99.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _99.QueryVotesRequest): _99.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _99.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryVotesResponse;
                fromPartial(object: Partial<_99.QueryVotesResponse>): _99.QueryVotesResponse;
                fromAmino(object: _99.QueryVotesResponseAmino): _99.QueryVotesResponse;
                toAmino(message: _99.QueryVotesResponse): _99.QueryVotesResponseAmino;
                fromAminoMsg(object: _99.QueryVotesResponseAminoMsg): _99.QueryVotesResponse;
                toAminoMsg(message: _99.QueryVotesResponse): _99.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _99.QueryVotesResponseProtoMsg): _99.QueryVotesResponse;
                toProto(message: _99.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _99.QueryVotesResponse): _99.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _99.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryParamsRequest;
                fromPartial(object: Partial<_99.QueryParamsRequest>): _99.QueryParamsRequest;
                fromAmino(object: _99.QueryParamsRequestAmino): _99.QueryParamsRequest;
                toAmino(message: _99.QueryParamsRequest): _99.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _99.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDepositRequest;
                fromPartial(object: Partial<_99.QueryDepositRequest>): _99.QueryDepositRequest;
                fromAmino(object: _99.QueryDepositRequestAmino): _99.QueryDepositRequest;
                toAmino(message: _99.QueryDepositRequest): _99.QueryDepositRequestAmino;
                fromAminoMsg(object: _99.QueryDepositRequestAminoMsg): _99.QueryDepositRequest;
                toAminoMsg(message: _99.QueryDepositRequest): _99.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _99.QueryDepositRequestProtoMsg): _99.QueryDepositRequest;
                toProto(message: _99.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _99.QueryDepositRequest): _99.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _99.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDepositResponse;
                fromPartial(object: Partial<_99.QueryDepositResponse>): _99.QueryDepositResponse;
                fromAmino(object: _99.QueryDepositResponseAmino): _99.QueryDepositResponse;
                toAmino(message: _99.QueryDepositResponse): _99.QueryDepositResponseAmino;
                fromAminoMsg(object: _99.QueryDepositResponseAminoMsg): _99.QueryDepositResponse;
                toAminoMsg(message: _99.QueryDepositResponse): _99.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _99.QueryDepositResponseProtoMsg): _99.QueryDepositResponse;
                toProto(message: _99.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _99.QueryDepositResponse): _99.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _99.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDepositsRequest;
                fromPartial(object: Partial<_99.QueryDepositsRequest>): _99.QueryDepositsRequest;
                fromAmino(object: _99.QueryDepositsRequestAmino): _99.QueryDepositsRequest;
                toAmino(message: _99.QueryDepositsRequest): _99.QueryDepositsRequestAmino;
                fromAminoMsg(object: _99.QueryDepositsRequestAminoMsg): _99.QueryDepositsRequest;
                toAminoMsg(message: _99.QueryDepositsRequest): _99.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryDepositsRequestProtoMsg): _99.QueryDepositsRequest;
                toProto(message: _99.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryDepositsRequest): _99.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _99.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDepositsResponse;
                fromPartial(object: Partial<_99.QueryDepositsResponse>): _99.QueryDepositsResponse;
                fromAmino(object: _99.QueryDepositsResponseAmino): _99.QueryDepositsResponse;
                toAmino(message: _99.QueryDepositsResponse): _99.QueryDepositsResponseAmino;
                fromAminoMsg(object: _99.QueryDepositsResponseAminoMsg): _99.QueryDepositsResponse;
                toAminoMsg(message: _99.QueryDepositsResponse): _99.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryDepositsResponseProtoMsg): _99.QueryDepositsResponse;
                toProto(message: _99.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryDepositsResponse): _99.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _99.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryTallyResultRequest;
                fromPartial(object: Partial<_99.QueryTallyResultRequest>): _99.QueryTallyResultRequest;
                fromAmino(object: _99.QueryTallyResultRequestAmino): _99.QueryTallyResultRequest;
                toAmino(message: _99.QueryTallyResultRequest): _99.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _99.QueryTallyResultRequestAminoMsg): _99.QueryTallyResultRequest;
                toAminoMsg(message: _99.QueryTallyResultRequest): _99.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _99.QueryTallyResultRequestProtoMsg): _99.QueryTallyResultRequest;
                toProto(message: _99.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _99.QueryTallyResultRequest): _99.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _99.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryTallyResultResponse;
                fromPartial(object: Partial<_99.QueryTallyResultResponse>): _99.QueryTallyResultResponse;
                fromAmino(object: _99.QueryTallyResultResponseAmino): _99.QueryTallyResultResponse;
                toAmino(message: _99.QueryTallyResultResponse): _99.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _99.QueryTallyResultResponseAminoMsg): _99.QueryTallyResultResponse;
                toAminoMsg(message: _99.QueryTallyResultResponse): _99.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _99.QueryTallyResultResponseProtoMsg): _99.QueryTallyResultResponse;
                toProto(message: _99.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _99.QueryTallyResultResponse): _99.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _98.VoteOption;
            voteOptionToJSON(object: _98.VoteOption): string;
            proposalStatusFromJSON(object: any): _98.ProposalStatus;
            proposalStatusToJSON(object: _98.ProposalStatus): string;
            VoteOption: typeof _98.VoteOption;
            VoteOptionSDKType: typeof _98.VoteOption;
            VoteOptionAmino: typeof _98.VoteOption;
            ProposalStatus: typeof _98.ProposalStatus;
            ProposalStatusSDKType: typeof _98.ProposalStatus;
            ProposalStatusAmino: typeof _98.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _98.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.WeightedVoteOption;
                fromPartial(object: Partial<_98.WeightedVoteOption>): _98.WeightedVoteOption;
                fromAmino(object: _98.WeightedVoteOptionAmino): _98.WeightedVoteOption;
                toAmino(message: _98.WeightedVoteOption): _98.WeightedVoteOptionAmino;
                fromAminoMsg(object: _98.WeightedVoteOptionAminoMsg): _98.WeightedVoteOption;
                toAminoMsg(message: _98.WeightedVoteOption): _98.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _98.WeightedVoteOptionProtoMsg): _98.WeightedVoteOption;
                toProto(message: _98.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _98.WeightedVoteOption): _98.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _98.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.TextProposal;
                fromPartial(object: Partial<_98.TextProposal>): _98.TextProposal;
                fromAmino(object: _98.TextProposalAmino): _98.TextProposal;
                toAmino(message: _98.TextProposal): _98.TextProposalAmino;
                fromAminoMsg(object: _98.TextProposalAminoMsg): _98.TextProposal;
                toAminoMsg(message: _98.TextProposal): _98.TextProposalAminoMsg;
                fromProtoMsg(message: _98.TextProposalProtoMsg): _98.TextProposal;
                toProto(message: _98.TextProposal): Uint8Array;
                toProtoMsg(message: _98.TextProposal): _98.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _98.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Deposit;
                fromPartial(object: Partial<_98.Deposit>): _98.Deposit;
                fromAmino(object: _98.DepositAmino): _98.Deposit;
                toAmino(message: _98.Deposit): _98.DepositAmino;
                fromAminoMsg(object: _98.DepositAminoMsg): _98.Deposit;
                toAminoMsg(message: _98.Deposit): _98.DepositAminoMsg;
                fromProtoMsg(message: _98.DepositProtoMsg): _98.Deposit;
                toProto(message: _98.Deposit): Uint8Array;
                toProtoMsg(message: _98.Deposit): _98.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _98.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Proposal;
                fromPartial(object: Partial<_98.Proposal>): _98.Proposal;
                fromAmino(object: _98.ProposalAmino): _98.Proposal;
                toAmino(message: _98.Proposal): _98.ProposalAmino;
                fromAminoMsg(object: _98.ProposalAminoMsg): _98.Proposal;
                toAminoMsg(message: _98.Proposal): _98.ProposalAminoMsg;
                fromProtoMsg(message: _98.ProposalProtoMsg): _98.Proposal;
                toProto(message: _98.Proposal): Uint8Array;
                toProtoMsg(message: _98.Proposal): _98.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _98.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.TallyResult;
                fromPartial(object: Partial<_98.TallyResult>): _98.TallyResult;
                fromAmino(object: _98.TallyResultAmino): _98.TallyResult;
                toAmino(message: _98.TallyResult): _98.TallyResultAmino;
                fromAminoMsg(object: _98.TallyResultAminoMsg): _98.TallyResult;
                toAminoMsg(message: _98.TallyResult): _98.TallyResultAminoMsg;
                fromProtoMsg(message: _98.TallyResultProtoMsg): _98.TallyResult;
                toProto(message: _98.TallyResult): Uint8Array;
                toProtoMsg(message: _98.TallyResult): _98.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _98.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Vote;
                fromPartial(object: Partial<_98.Vote>): _98.Vote;
                fromAmino(object: _98.VoteAmino): _98.Vote;
                toAmino(message: _98.Vote): _98.VoteAmino;
                fromAminoMsg(object: _98.VoteAminoMsg): _98.Vote;
                toAminoMsg(message: _98.Vote): _98.VoteAminoMsg;
                fromProtoMsg(message: _98.VoteProtoMsg): _98.Vote;
                toProto(message: _98.Vote): Uint8Array;
                toProtoMsg(message: _98.Vote): _98.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _98.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.DepositParams;
                fromPartial(object: Partial<_98.DepositParams>): _98.DepositParams;
                fromAmino(object: _98.DepositParamsAmino): _98.DepositParams;
                toAmino(message: _98.DepositParams): _98.DepositParamsAmino;
                fromAminoMsg(object: _98.DepositParamsAminoMsg): _98.DepositParams;
                toAminoMsg(message: _98.DepositParams): _98.DepositParamsAminoMsg;
                fromProtoMsg(message: _98.DepositParamsProtoMsg): _98.DepositParams;
                toProto(message: _98.DepositParams): Uint8Array;
                toProtoMsg(message: _98.DepositParams): _98.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _98.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.VotingParams;
                fromPartial(object: Partial<_98.VotingParams>): _98.VotingParams;
                fromAmino(object: _98.VotingParamsAmino): _98.VotingParams;
                toAmino(message: _98.VotingParams): _98.VotingParamsAmino;
                fromAminoMsg(object: _98.VotingParamsAminoMsg): _98.VotingParams;
                toAminoMsg(message: _98.VotingParams): _98.VotingParamsAminoMsg;
                fromProtoMsg(message: _98.VotingParamsProtoMsg): _98.VotingParams;
                toProto(message: _98.VotingParams): Uint8Array;
                toProtoMsg(message: _98.VotingParams): _98.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _98.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.TallyParams;
                fromPartial(object: Partial<_98.TallyParams>): _98.TallyParams;
                fromAmino(object: _98.TallyParamsAmino): _98.TallyParams;
                toAmino(message: _98.TallyParams): _98.TallyParamsAmino;
                fromAminoMsg(object: _98.TallyParamsAminoMsg): _98.TallyParams;
                toAminoMsg(message: _98.TallyParams): _98.TallyParamsAminoMsg;
                fromProtoMsg(message: _98.TallyParamsProtoMsg): _98.TallyParams;
                toProto(message: _98.TallyParams): Uint8Array;
                toProtoMsg(message: _98.TallyParams): _98.TallyParamsProtoMsg;
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
    namespace group {
        const v1: {
            MsgClientImpl: typeof _259.MsgClientImpl;
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _103.QueryGroupInfoRequest): Promise<_103.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _103.QueryGroupPolicyInfoRequest): Promise<_103.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _103.QueryGroupMembersRequest): Promise<_103.QueryGroupMembersResponse>;
                groupsByAdmin(request: _103.QueryGroupsByAdminRequest): Promise<_103.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _103.QueryGroupPoliciesByGroupRequest): Promise<_103.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _103.QueryGroupPoliciesByAdminRequest): Promise<_103.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _103.QueryProposalRequest): Promise<_103.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _103.QueryProposalsByGroupPolicyRequest): Promise<_103.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _103.QueryVoteByProposalVoterRequest): Promise<_103.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _103.QueryVotesByProposalRequest): Promise<_103.QueryVotesByProposalResponse>;
                votesByVoter(request: _103.QueryVotesByVoterRequest): Promise<_103.QueryVotesByVoterResponse>;
                groupsByMember(request: _103.QueryGroupsByMemberRequest): Promise<_103.QueryGroupsByMemberResponse>;
                tallyResult(request: _103.QueryTallyResultRequest): Promise<_103.QueryTallyResultResponse>;
                groups(request?: _103.QueryGroupsRequest): Promise<_103.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _104.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _104.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _104.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _104.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _104.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _104.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _104.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _104.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _104.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _104.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _104.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _104.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _104.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _104.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _104.MsgCreateGroup): {
                        typeUrl: string;
                        value: _104.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _104.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _104.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _104.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _104.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _104.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _104.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _104.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _104.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _104.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _104.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _104.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _104.MsgWithdrawProposal;
                    };
                    vote(value: _104.MsgVote): {
                        typeUrl: string;
                        value: _104.MsgVote;
                    };
                    exec(value: _104.MsgExec): {
                        typeUrl: string;
                        value: _104.MsgExec;
                    };
                    leaveGroup(value: _104.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _104.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _104.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _104.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _104.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _104.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _104.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _104.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _104.MsgCreateGroup): {
                        typeUrl: string;
                        value: _104.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _104.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _104.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _104.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _104.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _104.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _104.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _104.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _104.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _104.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _104.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _104.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _104.MsgWithdrawProposal;
                    };
                    vote(value: _104.MsgVote): {
                        typeUrl: string;
                        value: _104.MsgVote;
                    };
                    exec(value: _104.MsgExec): {
                        typeUrl: string;
                        value: _104.MsgExec;
                    };
                    leaveGroup(value: _104.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _104.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _104.MsgCreateGroup) => _104.MsgCreateGroupAmino;
                    fromAmino: (object: _104.MsgCreateGroupAmino) => _104.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUpdateGroupMembers) => _104.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _104.MsgUpdateGroupMembersAmino) => _104.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUpdateGroupAdmin) => _104.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _104.MsgUpdateGroupAdminAmino) => _104.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUpdateGroupMetadata) => _104.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _104.MsgUpdateGroupMetadataAmino) => _104.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _104.MsgCreateGroupPolicy) => _104.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _104.MsgCreateGroupPolicyAmino) => _104.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _104.MsgCreateGroupWithPolicy) => _104.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _104.MsgCreateGroupWithPolicyAmino) => _104.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUpdateGroupPolicyAdmin) => _104.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _104.MsgUpdateGroupPolicyAdminAmino) => _104.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUpdateGroupPolicyDecisionPolicy) => _104.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _104.MsgUpdateGroupPolicyDecisionPolicyAmino) => _104.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUpdateGroupPolicyMetadata) => _104.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _104.MsgUpdateGroupPolicyMetadataAmino) => _104.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _104.MsgSubmitProposal) => _104.MsgSubmitProposalAmino;
                    fromAmino: (object: _104.MsgSubmitProposalAmino) => _104.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _104.MsgWithdrawProposal) => _104.MsgWithdrawProposalAmino;
                    fromAmino: (object: _104.MsgWithdrawProposalAmino) => _104.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _104.MsgVote) => _104.MsgVoteAmino;
                    fromAmino: (object: _104.MsgVoteAmino) => _104.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _104.MsgExec) => _104.MsgExecAmino;
                    fromAmino: (object: _104.MsgExecAmino) => _104.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _104.MsgLeaveGroup) => _104.MsgLeaveGroupAmino;
                    fromAmino: (object: _104.MsgLeaveGroupAmino) => _104.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _105.VoteOption;
            voteOptionToJSON(object: _105.VoteOption): string;
            proposalStatusFromJSON(object: any): _105.ProposalStatus;
            proposalStatusToJSON(object: _105.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _105.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _105.ProposalExecutorResult): string;
            VoteOption: typeof _105.VoteOption;
            VoteOptionSDKType: typeof _105.VoteOption;
            VoteOptionAmino: typeof _105.VoteOption;
            ProposalStatus: typeof _105.ProposalStatus;
            ProposalStatusSDKType: typeof _105.ProposalStatus;
            ProposalStatusAmino: typeof _105.ProposalStatus;
            ProposalExecutorResult: typeof _105.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _105.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _105.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _105.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.Member;
                fromPartial(object: Partial<_105.Member>): _105.Member;
                fromAmino(object: _105.MemberAmino): _105.Member;
                toAmino(message: _105.Member): _105.MemberAmino;
                fromAminoMsg(object: _105.MemberAminoMsg): _105.Member;
                toAminoMsg(message: _105.Member): _105.MemberAminoMsg;
                fromProtoMsg(message: _105.MemberProtoMsg): _105.Member;
                toProto(message: _105.Member): Uint8Array;
                toProtoMsg(message: _105.Member): _105.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _105.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MemberRequest;
                fromPartial(object: Partial<_105.MemberRequest>): _105.MemberRequest;
                fromAmino(object: _105.MemberRequestAmino): _105.MemberRequest;
                toAmino(message: _105.MemberRequest): _105.MemberRequestAmino;
                fromAminoMsg(object: _105.MemberRequestAminoMsg): _105.MemberRequest;
                toAminoMsg(message: _105.MemberRequest): _105.MemberRequestAminoMsg;
                fromProtoMsg(message: _105.MemberRequestProtoMsg): _105.MemberRequest;
                toProto(message: _105.MemberRequest): Uint8Array;
                toProtoMsg(message: _105.MemberRequest): _105.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _105.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_105.ThresholdDecisionPolicy>): _105.ThresholdDecisionPolicy;
                fromAmino(object: _105.ThresholdDecisionPolicyAmino): _105.ThresholdDecisionPolicy;
                toAmino(message: _105.ThresholdDecisionPolicy): _105.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _105.ThresholdDecisionPolicyAminoMsg): _105.ThresholdDecisionPolicy;
                toAminoMsg(message: _105.ThresholdDecisionPolicy): _105.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _105.ThresholdDecisionPolicyProtoMsg): _105.ThresholdDecisionPolicy;
                toProto(message: _105.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _105.ThresholdDecisionPolicy): _105.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _105.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.PercentageDecisionPolicy;
                fromPartial(object: Partial<_105.PercentageDecisionPolicy>): _105.PercentageDecisionPolicy;
                fromAmino(object: _105.PercentageDecisionPolicyAmino): _105.PercentageDecisionPolicy;
                toAmino(message: _105.PercentageDecisionPolicy): _105.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _105.PercentageDecisionPolicyAminoMsg): _105.PercentageDecisionPolicy;
                toAminoMsg(message: _105.PercentageDecisionPolicy): _105.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _105.PercentageDecisionPolicyProtoMsg): _105.PercentageDecisionPolicy;
                toProto(message: _105.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _105.PercentageDecisionPolicy): _105.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _105.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.DecisionPolicyWindows;
                fromPartial(object: Partial<_105.DecisionPolicyWindows>): _105.DecisionPolicyWindows;
                fromAmino(object: _105.DecisionPolicyWindowsAmino): _105.DecisionPolicyWindows;
                toAmino(message: _105.DecisionPolicyWindows): _105.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _105.DecisionPolicyWindowsAminoMsg): _105.DecisionPolicyWindows;
                toAminoMsg(message: _105.DecisionPolicyWindows): _105.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _105.DecisionPolicyWindowsProtoMsg): _105.DecisionPolicyWindows;
                toProto(message: _105.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _105.DecisionPolicyWindows): _105.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _105.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.GroupInfo;
                fromPartial(object: Partial<_105.GroupInfo>): _105.GroupInfo;
                fromAmino(object: _105.GroupInfoAmino): _105.GroupInfo;
                toAmino(message: _105.GroupInfo): _105.GroupInfoAmino;
                fromAminoMsg(object: _105.GroupInfoAminoMsg): _105.GroupInfo;
                toAminoMsg(message: _105.GroupInfo): _105.GroupInfoAminoMsg;
                fromProtoMsg(message: _105.GroupInfoProtoMsg): _105.GroupInfo;
                toProto(message: _105.GroupInfo): Uint8Array;
                toProtoMsg(message: _105.GroupInfo): _105.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _105.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.GroupMember;
                fromPartial(object: Partial<_105.GroupMember>): _105.GroupMember;
                fromAmino(object: _105.GroupMemberAmino): _105.GroupMember;
                toAmino(message: _105.GroupMember): _105.GroupMemberAmino;
                fromAminoMsg(object: _105.GroupMemberAminoMsg): _105.GroupMember;
                toAminoMsg(message: _105.GroupMember): _105.GroupMemberAminoMsg;
                fromProtoMsg(message: _105.GroupMemberProtoMsg): _105.GroupMember;
                toProto(message: _105.GroupMember): Uint8Array;
                toProtoMsg(message: _105.GroupMember): _105.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _105.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.GroupPolicyInfo;
                fromPartial(object: Partial<_105.GroupPolicyInfo>): _105.GroupPolicyInfo;
                fromAmino(object: _105.GroupPolicyInfoAmino): _105.GroupPolicyInfo;
                toAmino(message: _105.GroupPolicyInfo): _105.GroupPolicyInfoAmino;
                fromAminoMsg(object: _105.GroupPolicyInfoAminoMsg): _105.GroupPolicyInfo;
                toAminoMsg(message: _105.GroupPolicyInfo): _105.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _105.GroupPolicyInfoProtoMsg): _105.GroupPolicyInfo;
                toProto(message: _105.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _105.GroupPolicyInfo): _105.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _105.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.Proposal;
                fromPartial(object: Partial<_105.Proposal>): _105.Proposal;
                fromAmino(object: _105.ProposalAmino): _105.Proposal;
                toAmino(message: _105.Proposal): _105.ProposalAmino;
                fromAminoMsg(object: _105.ProposalAminoMsg): _105.Proposal;
                toAminoMsg(message: _105.Proposal): _105.ProposalAminoMsg;
                fromProtoMsg(message: _105.ProposalProtoMsg): _105.Proposal;
                toProto(message: _105.Proposal): Uint8Array;
                toProtoMsg(message: _105.Proposal): _105.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _105.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.TallyResult;
                fromPartial(object: Partial<_105.TallyResult>): _105.TallyResult;
                fromAmino(object: _105.TallyResultAmino): _105.TallyResult;
                toAmino(message: _105.TallyResult): _105.TallyResultAmino;
                fromAminoMsg(object: _105.TallyResultAminoMsg): _105.TallyResult;
                toAminoMsg(message: _105.TallyResult): _105.TallyResultAminoMsg;
                fromProtoMsg(message: _105.TallyResultProtoMsg): _105.TallyResult;
                toProto(message: _105.TallyResult): Uint8Array;
                toProtoMsg(message: _105.TallyResult): _105.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _105.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.Vote;
                fromPartial(object: Partial<_105.Vote>): _105.Vote;
                fromAmino(object: _105.VoteAmino): _105.Vote;
                toAmino(message: _105.Vote): _105.VoteAmino;
                fromAminoMsg(object: _105.VoteAminoMsg): _105.Vote;
                toAminoMsg(message: _105.Vote): _105.VoteAminoMsg;
                fromProtoMsg(message: _105.VoteProtoMsg): _105.Vote;
                toProto(message: _105.Vote): Uint8Array;
                toProtoMsg(message: _105.Vote): _105.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _104.Exec;
            execToJSON(object: _104.Exec): string;
            Exec: typeof _104.Exec;
            ExecSDKType: typeof _104.Exec;
            ExecAmino: typeof _104.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _104.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgCreateGroup;
                fromPartial(object: Partial<_104.MsgCreateGroup>): _104.MsgCreateGroup;
                fromAmino(object: _104.MsgCreateGroupAmino): _104.MsgCreateGroup;
                toAmino(message: _104.MsgCreateGroup): _104.MsgCreateGroupAmino;
                fromAminoMsg(object: _104.MsgCreateGroupAminoMsg): _104.MsgCreateGroup;
                toAminoMsg(message: _104.MsgCreateGroup): _104.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _104.MsgCreateGroupProtoMsg): _104.MsgCreateGroup;
                toProto(message: _104.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _104.MsgCreateGroup): _104.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _104.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgCreateGroupResponse;
                fromPartial(object: Partial<_104.MsgCreateGroupResponse>): _104.MsgCreateGroupResponse;
                fromAmino(object: _104.MsgCreateGroupResponseAmino): _104.MsgCreateGroupResponse;
                toAmino(message: _104.MsgCreateGroupResponse): _104.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _104.MsgCreateGroupResponseAminoMsg): _104.MsgCreateGroupResponse;
                toAminoMsg(message: _104.MsgCreateGroupResponse): _104.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _104.MsgCreateGroupResponseProtoMsg): _104.MsgCreateGroupResponse;
                toProto(message: _104.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _104.MsgCreateGroupResponse): _104.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _104.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_104.MsgUpdateGroupMembers>): _104.MsgUpdateGroupMembers;
                fromAmino(object: _104.MsgUpdateGroupMembersAmino): _104.MsgUpdateGroupMembers;
                toAmino(message: _104.MsgUpdateGroupMembers): _104.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupMembersAminoMsg): _104.MsgUpdateGroupMembers;
                toAminoMsg(message: _104.MsgUpdateGroupMembers): _104.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupMembersProtoMsg): _104.MsgUpdateGroupMembers;
                toProto(message: _104.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupMembers): _104.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _104.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupMembersResponse>): _104.MsgUpdateGroupMembersResponse;
                fromAmino(_: _104.MsgUpdateGroupMembersResponseAmino): _104.MsgUpdateGroupMembersResponse;
                toAmino(_: _104.MsgUpdateGroupMembersResponse): _104.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupMembersResponseAminoMsg): _104.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _104.MsgUpdateGroupMembersResponse): _104.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupMembersResponseProtoMsg): _104.MsgUpdateGroupMembersResponse;
                toProto(message: _104.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupMembersResponse): _104.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _104.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_104.MsgUpdateGroupAdmin>): _104.MsgUpdateGroupAdmin;
                fromAmino(object: _104.MsgUpdateGroupAdminAmino): _104.MsgUpdateGroupAdmin;
                toAmino(message: _104.MsgUpdateGroupAdmin): _104.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupAdminAminoMsg): _104.MsgUpdateGroupAdmin;
                toAminoMsg(message: _104.MsgUpdateGroupAdmin): _104.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupAdminProtoMsg): _104.MsgUpdateGroupAdmin;
                toProto(message: _104.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupAdmin): _104.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _104.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupAdminResponse>): _104.MsgUpdateGroupAdminResponse;
                fromAmino(_: _104.MsgUpdateGroupAdminResponseAmino): _104.MsgUpdateGroupAdminResponse;
                toAmino(_: _104.MsgUpdateGroupAdminResponse): _104.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupAdminResponseAminoMsg): _104.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _104.MsgUpdateGroupAdminResponse): _104.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupAdminResponseProtoMsg): _104.MsgUpdateGroupAdminResponse;
                toProto(message: _104.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupAdminResponse): _104.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _104.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_104.MsgUpdateGroupMetadata>): _104.MsgUpdateGroupMetadata;
                fromAmino(object: _104.MsgUpdateGroupMetadataAmino): _104.MsgUpdateGroupMetadata;
                toAmino(message: _104.MsgUpdateGroupMetadata): _104.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupMetadataAminoMsg): _104.MsgUpdateGroupMetadata;
                toAminoMsg(message: _104.MsgUpdateGroupMetadata): _104.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupMetadataProtoMsg): _104.MsgUpdateGroupMetadata;
                toProto(message: _104.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupMetadata): _104.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _104.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupMetadataResponse>): _104.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _104.MsgUpdateGroupMetadataResponseAmino): _104.MsgUpdateGroupMetadataResponse;
                toAmino(_: _104.MsgUpdateGroupMetadataResponse): _104.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupMetadataResponseAminoMsg): _104.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _104.MsgUpdateGroupMetadataResponse): _104.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupMetadataResponseProtoMsg): _104.MsgUpdateGroupMetadataResponse;
                toProto(message: _104.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupMetadataResponse): _104.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _104.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_104.MsgCreateGroupPolicy>): _104.MsgCreateGroupPolicy;
                fromAmino(object: _104.MsgCreateGroupPolicyAmino): _104.MsgCreateGroupPolicy;
                toAmino(message: _104.MsgCreateGroupPolicy): _104.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _104.MsgCreateGroupPolicyAminoMsg): _104.MsgCreateGroupPolicy;
                toAminoMsg(message: _104.MsgCreateGroupPolicy): _104.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _104.MsgCreateGroupPolicyProtoMsg): _104.MsgCreateGroupPolicy;
                toProto(message: _104.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _104.MsgCreateGroupPolicy): _104.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _104.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_104.MsgCreateGroupPolicyResponse>): _104.MsgCreateGroupPolicyResponse;
                fromAmino(object: _104.MsgCreateGroupPolicyResponseAmino): _104.MsgCreateGroupPolicyResponse;
                toAmino(message: _104.MsgCreateGroupPolicyResponse): _104.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _104.MsgCreateGroupPolicyResponseAminoMsg): _104.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _104.MsgCreateGroupPolicyResponse): _104.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _104.MsgCreateGroupPolicyResponseProtoMsg): _104.MsgCreateGroupPolicyResponse;
                toProto(message: _104.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _104.MsgCreateGroupPolicyResponse): _104.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _104.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_104.MsgUpdateGroupPolicyAdmin>): _104.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _104.MsgUpdateGroupPolicyAdminAmino): _104.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _104.MsgUpdateGroupPolicyAdmin): _104.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupPolicyAdminAminoMsg): _104.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _104.MsgUpdateGroupPolicyAdmin): _104.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupPolicyAdminProtoMsg): _104.MsgUpdateGroupPolicyAdmin;
                toProto(message: _104.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupPolicyAdmin): _104.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _104.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_104.MsgCreateGroupWithPolicy>): _104.MsgCreateGroupWithPolicy;
                fromAmino(object: _104.MsgCreateGroupWithPolicyAmino): _104.MsgCreateGroupWithPolicy;
                toAmino(message: _104.MsgCreateGroupWithPolicy): _104.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _104.MsgCreateGroupWithPolicyAminoMsg): _104.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _104.MsgCreateGroupWithPolicy): _104.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _104.MsgCreateGroupWithPolicyProtoMsg): _104.MsgCreateGroupWithPolicy;
                toProto(message: _104.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _104.MsgCreateGroupWithPolicy): _104.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _104.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_104.MsgCreateGroupWithPolicyResponse>): _104.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _104.MsgCreateGroupWithPolicyResponseAmino): _104.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _104.MsgCreateGroupWithPolicyResponse): _104.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _104.MsgCreateGroupWithPolicyResponseAminoMsg): _104.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _104.MsgCreateGroupWithPolicyResponse): _104.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _104.MsgCreateGroupWithPolicyResponseProtoMsg): _104.MsgCreateGroupWithPolicyResponse;
                toProto(message: _104.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _104.MsgCreateGroupWithPolicyResponse): _104.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _104.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupPolicyAdminResponse>): _104.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _104.MsgUpdateGroupPolicyAdminResponseAmino): _104.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _104.MsgUpdateGroupPolicyAdminResponse): _104.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupPolicyAdminResponseAminoMsg): _104.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _104.MsgUpdateGroupPolicyAdminResponse): _104.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupPolicyAdminResponseProtoMsg): _104.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _104.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupPolicyAdminResponse): _104.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _104.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_104.MsgUpdateGroupPolicyDecisionPolicy>): _104.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _104.MsgUpdateGroupPolicyDecisionPolicyAmino): _104.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _104.MsgUpdateGroupPolicyDecisionPolicy): _104.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _104.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _104.MsgUpdateGroupPolicyDecisionPolicy): _104.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _104.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _104.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupPolicyDecisionPolicy): _104.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _104.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupPolicyDecisionPolicyResponse>): _104.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _104.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _104.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _104.MsgUpdateGroupPolicyDecisionPolicyResponse): _104.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _104.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _104.MsgUpdateGroupPolicyDecisionPolicyResponse): _104.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _104.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _104.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupPolicyDecisionPolicyResponse): _104.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _104.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_104.MsgUpdateGroupPolicyMetadata>): _104.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _104.MsgUpdateGroupPolicyMetadataAmino): _104.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _104.MsgUpdateGroupPolicyMetadata): _104.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupPolicyMetadataAminoMsg): _104.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _104.MsgUpdateGroupPolicyMetadata): _104.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupPolicyMetadataProtoMsg): _104.MsgUpdateGroupPolicyMetadata;
                toProto(message: _104.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupPolicyMetadata): _104.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _104.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupPolicyMetadataResponse>): _104.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _104.MsgUpdateGroupPolicyMetadataResponseAmino): _104.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _104.MsgUpdateGroupPolicyMetadataResponse): _104.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _104.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _104.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _104.MsgUpdateGroupPolicyMetadataResponse): _104.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _104.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _104.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateGroupPolicyMetadataResponse): _104.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _104.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgSubmitProposal;
                fromPartial(object: Partial<_104.MsgSubmitProposal>): _104.MsgSubmitProposal;
                fromAmino(object: _104.MsgSubmitProposalAmino): _104.MsgSubmitProposal;
                toAmino(message: _104.MsgSubmitProposal): _104.MsgSubmitProposalAmino;
                fromAminoMsg(object: _104.MsgSubmitProposalAminoMsg): _104.MsgSubmitProposal;
                toAminoMsg(message: _104.MsgSubmitProposal): _104.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _104.MsgSubmitProposalProtoMsg): _104.MsgSubmitProposal;
                toProto(message: _104.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _104.MsgSubmitProposal): _104.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _104.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_104.MsgSubmitProposalResponse>): _104.MsgSubmitProposalResponse;
                fromAmino(object: _104.MsgSubmitProposalResponseAmino): _104.MsgSubmitProposalResponse;
                toAmino(message: _104.MsgSubmitProposalResponse): _104.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _104.MsgSubmitProposalResponseAminoMsg): _104.MsgSubmitProposalResponse;
                toAminoMsg(message: _104.MsgSubmitProposalResponse): _104.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _104.MsgSubmitProposalResponseProtoMsg): _104.MsgSubmitProposalResponse;
                toProto(message: _104.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _104.MsgSubmitProposalResponse): _104.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _104.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgWithdrawProposal;
                fromPartial(object: Partial<_104.MsgWithdrawProposal>): _104.MsgWithdrawProposal;
                fromAmino(object: _104.MsgWithdrawProposalAmino): _104.MsgWithdrawProposal;
                toAmino(message: _104.MsgWithdrawProposal): _104.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _104.MsgWithdrawProposalAminoMsg): _104.MsgWithdrawProposal;
                toAminoMsg(message: _104.MsgWithdrawProposal): _104.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _104.MsgWithdrawProposalProtoMsg): _104.MsgWithdrawProposal;
                toProto(message: _104.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _104.MsgWithdrawProposal): _104.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _104.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_104.MsgWithdrawProposalResponse>): _104.MsgWithdrawProposalResponse;
                fromAmino(_: _104.MsgWithdrawProposalResponseAmino): _104.MsgWithdrawProposalResponse;
                toAmino(_: _104.MsgWithdrawProposalResponse): _104.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _104.MsgWithdrawProposalResponseAminoMsg): _104.MsgWithdrawProposalResponse;
                toAminoMsg(message: _104.MsgWithdrawProposalResponse): _104.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _104.MsgWithdrawProposalResponseProtoMsg): _104.MsgWithdrawProposalResponse;
                toProto(message: _104.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _104.MsgWithdrawProposalResponse): _104.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _104.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgVote;
                fromPartial(object: Partial<_104.MsgVote>): _104.MsgVote;
                fromAmino(object: _104.MsgVoteAmino): _104.MsgVote;
                toAmino(message: _104.MsgVote): _104.MsgVoteAmino;
                fromAminoMsg(object: _104.MsgVoteAminoMsg): _104.MsgVote;
                toAminoMsg(message: _104.MsgVote): _104.MsgVoteAminoMsg;
                fromProtoMsg(message: _104.MsgVoteProtoMsg): _104.MsgVote;
                toProto(message: _104.MsgVote): Uint8Array;
                toProtoMsg(message: _104.MsgVote): _104.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _104.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgVoteResponse;
                fromPartial(_: Partial<_104.MsgVoteResponse>): _104.MsgVoteResponse;
                fromAmino(_: _104.MsgVoteResponseAmino): _104.MsgVoteResponse;
                toAmino(_: _104.MsgVoteResponse): _104.MsgVoteResponseAmino;
                fromAminoMsg(object: _104.MsgVoteResponseAminoMsg): _104.MsgVoteResponse;
                toAminoMsg(message: _104.MsgVoteResponse): _104.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _104.MsgVoteResponseProtoMsg): _104.MsgVoteResponse;
                toProto(message: _104.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _104.MsgVoteResponse): _104.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _104.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgExec;
                fromPartial(object: Partial<_104.MsgExec>): _104.MsgExec;
                fromAmino(object: _104.MsgExecAmino): _104.MsgExec;
                toAmino(message: _104.MsgExec): _104.MsgExecAmino;
                fromAminoMsg(object: _104.MsgExecAminoMsg): _104.MsgExec;
                toAminoMsg(message: _104.MsgExec): _104.MsgExecAminoMsg;
                fromProtoMsg(message: _104.MsgExecProtoMsg): _104.MsgExec;
                toProto(message: _104.MsgExec): Uint8Array;
                toProtoMsg(message: _104.MsgExec): _104.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _104.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgExecResponse;
                fromPartial(object: Partial<_104.MsgExecResponse>): _104.MsgExecResponse;
                fromAmino(object: _104.MsgExecResponseAmino): _104.MsgExecResponse;
                toAmino(message: _104.MsgExecResponse): _104.MsgExecResponseAmino;
                fromAminoMsg(object: _104.MsgExecResponseAminoMsg): _104.MsgExecResponse;
                toAminoMsg(message: _104.MsgExecResponse): _104.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _104.MsgExecResponseProtoMsg): _104.MsgExecResponse;
                toProto(message: _104.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _104.MsgExecResponse): _104.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _104.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgLeaveGroup;
                fromPartial(object: Partial<_104.MsgLeaveGroup>): _104.MsgLeaveGroup;
                fromAmino(object: _104.MsgLeaveGroupAmino): _104.MsgLeaveGroup;
                toAmino(message: _104.MsgLeaveGroup): _104.MsgLeaveGroupAmino;
                fromAminoMsg(object: _104.MsgLeaveGroupAminoMsg): _104.MsgLeaveGroup;
                toAminoMsg(message: _104.MsgLeaveGroup): _104.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _104.MsgLeaveGroupProtoMsg): _104.MsgLeaveGroup;
                toProto(message: _104.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _104.MsgLeaveGroup): _104.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _104.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_104.MsgLeaveGroupResponse>): _104.MsgLeaveGroupResponse;
                fromAmino(_: _104.MsgLeaveGroupResponseAmino): _104.MsgLeaveGroupResponse;
                toAmino(_: _104.MsgLeaveGroupResponse): _104.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _104.MsgLeaveGroupResponseAminoMsg): _104.MsgLeaveGroupResponse;
                toAminoMsg(message: _104.MsgLeaveGroupResponse): _104.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _104.MsgLeaveGroupResponseProtoMsg): _104.MsgLeaveGroupResponse;
                toProto(message: _104.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _104.MsgLeaveGroupResponse): _104.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _103.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupInfoRequest;
                fromPartial(object: Partial<_103.QueryGroupInfoRequest>): _103.QueryGroupInfoRequest;
                fromAmino(object: _103.QueryGroupInfoRequestAmino): _103.QueryGroupInfoRequest;
                toAmino(message: _103.QueryGroupInfoRequest): _103.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _103.QueryGroupInfoRequestAminoMsg): _103.QueryGroupInfoRequest;
                toAminoMsg(message: _103.QueryGroupInfoRequest): _103.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _103.QueryGroupInfoRequestProtoMsg): _103.QueryGroupInfoRequest;
                toProto(message: _103.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _103.QueryGroupInfoRequest): _103.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _103.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupInfoResponse;
                fromPartial(object: Partial<_103.QueryGroupInfoResponse>): _103.QueryGroupInfoResponse;
                fromAmino(object: _103.QueryGroupInfoResponseAmino): _103.QueryGroupInfoResponse;
                toAmino(message: _103.QueryGroupInfoResponse): _103.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _103.QueryGroupInfoResponseAminoMsg): _103.QueryGroupInfoResponse;
                toAminoMsg(message: _103.QueryGroupInfoResponse): _103.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _103.QueryGroupInfoResponseProtoMsg): _103.QueryGroupInfoResponse;
                toProto(message: _103.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _103.QueryGroupInfoResponse): _103.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _103.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_103.QueryGroupPolicyInfoRequest>): _103.QueryGroupPolicyInfoRequest;
                fromAmino(object: _103.QueryGroupPolicyInfoRequestAmino): _103.QueryGroupPolicyInfoRequest;
                toAmino(message: _103.QueryGroupPolicyInfoRequest): _103.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _103.QueryGroupPolicyInfoRequestAminoMsg): _103.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _103.QueryGroupPolicyInfoRequest): _103.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _103.QueryGroupPolicyInfoRequestProtoMsg): _103.QueryGroupPolicyInfoRequest;
                toProto(message: _103.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _103.QueryGroupPolicyInfoRequest): _103.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _103.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_103.QueryGroupPolicyInfoResponse>): _103.QueryGroupPolicyInfoResponse;
                fromAmino(object: _103.QueryGroupPolicyInfoResponseAmino): _103.QueryGroupPolicyInfoResponse;
                toAmino(message: _103.QueryGroupPolicyInfoResponse): _103.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _103.QueryGroupPolicyInfoResponseAminoMsg): _103.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _103.QueryGroupPolicyInfoResponse): _103.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _103.QueryGroupPolicyInfoResponseProtoMsg): _103.QueryGroupPolicyInfoResponse;
                toProto(message: _103.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _103.QueryGroupPolicyInfoResponse): _103.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _103.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupMembersRequest;
                fromPartial(object: Partial<_103.QueryGroupMembersRequest>): _103.QueryGroupMembersRequest;
                fromAmino(object: _103.QueryGroupMembersRequestAmino): _103.QueryGroupMembersRequest;
                toAmino(message: _103.QueryGroupMembersRequest): _103.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _103.QueryGroupMembersRequestAminoMsg): _103.QueryGroupMembersRequest;
                toAminoMsg(message: _103.QueryGroupMembersRequest): _103.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _103.QueryGroupMembersRequestProtoMsg): _103.QueryGroupMembersRequest;
                toProto(message: _103.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _103.QueryGroupMembersRequest): _103.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _103.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupMembersResponse;
                fromPartial(object: Partial<_103.QueryGroupMembersResponse>): _103.QueryGroupMembersResponse;
                fromAmino(object: _103.QueryGroupMembersResponseAmino): _103.QueryGroupMembersResponse;
                toAmino(message: _103.QueryGroupMembersResponse): _103.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _103.QueryGroupMembersResponseAminoMsg): _103.QueryGroupMembersResponse;
                toAminoMsg(message: _103.QueryGroupMembersResponse): _103.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _103.QueryGroupMembersResponseProtoMsg): _103.QueryGroupMembersResponse;
                toProto(message: _103.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _103.QueryGroupMembersResponse): _103.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _103.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_103.QueryGroupsByAdminRequest>): _103.QueryGroupsByAdminRequest;
                fromAmino(object: _103.QueryGroupsByAdminRequestAmino): _103.QueryGroupsByAdminRequest;
                toAmino(message: _103.QueryGroupsByAdminRequest): _103.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _103.QueryGroupsByAdminRequestAminoMsg): _103.QueryGroupsByAdminRequest;
                toAminoMsg(message: _103.QueryGroupsByAdminRequest): _103.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _103.QueryGroupsByAdminRequestProtoMsg): _103.QueryGroupsByAdminRequest;
                toProto(message: _103.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _103.QueryGroupsByAdminRequest): _103.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _103.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_103.QueryGroupsByAdminResponse>): _103.QueryGroupsByAdminResponse;
                fromAmino(object: _103.QueryGroupsByAdminResponseAmino): _103.QueryGroupsByAdminResponse;
                toAmino(message: _103.QueryGroupsByAdminResponse): _103.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _103.QueryGroupsByAdminResponseAminoMsg): _103.QueryGroupsByAdminResponse;
                toAminoMsg(message: _103.QueryGroupsByAdminResponse): _103.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _103.QueryGroupsByAdminResponseProtoMsg): _103.QueryGroupsByAdminResponse;
                toProto(message: _103.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _103.QueryGroupsByAdminResponse): _103.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _103.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_103.QueryGroupPoliciesByGroupRequest>): _103.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _103.QueryGroupPoliciesByGroupRequestAmino): _103.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _103.QueryGroupPoliciesByGroupRequest): _103.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _103.QueryGroupPoliciesByGroupRequestAminoMsg): _103.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _103.QueryGroupPoliciesByGroupRequest): _103.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _103.QueryGroupPoliciesByGroupRequestProtoMsg): _103.QueryGroupPoliciesByGroupRequest;
                toProto(message: _103.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _103.QueryGroupPoliciesByGroupRequest): _103.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _103.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_103.QueryGroupPoliciesByGroupResponse>): _103.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _103.QueryGroupPoliciesByGroupResponseAmino): _103.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _103.QueryGroupPoliciesByGroupResponse): _103.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _103.QueryGroupPoliciesByGroupResponseAminoMsg): _103.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _103.QueryGroupPoliciesByGroupResponse): _103.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _103.QueryGroupPoliciesByGroupResponseProtoMsg): _103.QueryGroupPoliciesByGroupResponse;
                toProto(message: _103.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _103.QueryGroupPoliciesByGroupResponse): _103.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _103.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_103.QueryGroupPoliciesByAdminRequest>): _103.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _103.QueryGroupPoliciesByAdminRequestAmino): _103.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _103.QueryGroupPoliciesByAdminRequest): _103.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _103.QueryGroupPoliciesByAdminRequestAminoMsg): _103.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _103.QueryGroupPoliciesByAdminRequest): _103.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _103.QueryGroupPoliciesByAdminRequestProtoMsg): _103.QueryGroupPoliciesByAdminRequest;
                toProto(message: _103.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _103.QueryGroupPoliciesByAdminRequest): _103.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _103.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_103.QueryGroupPoliciesByAdminResponse>): _103.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _103.QueryGroupPoliciesByAdminResponseAmino): _103.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _103.QueryGroupPoliciesByAdminResponse): _103.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _103.QueryGroupPoliciesByAdminResponseAminoMsg): _103.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _103.QueryGroupPoliciesByAdminResponse): _103.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _103.QueryGroupPoliciesByAdminResponseProtoMsg): _103.QueryGroupPoliciesByAdminResponse;
                toProto(message: _103.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _103.QueryGroupPoliciesByAdminResponse): _103.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _103.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryProposalRequest;
                fromPartial(object: Partial<_103.QueryProposalRequest>): _103.QueryProposalRequest;
                fromAmino(object: _103.QueryProposalRequestAmino): _103.QueryProposalRequest;
                toAmino(message: _103.QueryProposalRequest): _103.QueryProposalRequestAmino;
                fromAminoMsg(object: _103.QueryProposalRequestAminoMsg): _103.QueryProposalRequest;
                toAminoMsg(message: _103.QueryProposalRequest): _103.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _103.QueryProposalRequestProtoMsg): _103.QueryProposalRequest;
                toProto(message: _103.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _103.QueryProposalRequest): _103.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _103.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryProposalResponse;
                fromPartial(object: Partial<_103.QueryProposalResponse>): _103.QueryProposalResponse;
                fromAmino(object: _103.QueryProposalResponseAmino): _103.QueryProposalResponse;
                toAmino(message: _103.QueryProposalResponse): _103.QueryProposalResponseAmino;
                fromAminoMsg(object: _103.QueryProposalResponseAminoMsg): _103.QueryProposalResponse;
                toAminoMsg(message: _103.QueryProposalResponse): _103.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _103.QueryProposalResponseProtoMsg): _103.QueryProposalResponse;
                toProto(message: _103.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _103.QueryProposalResponse): _103.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _103.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_103.QueryProposalsByGroupPolicyRequest>): _103.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _103.QueryProposalsByGroupPolicyRequestAmino): _103.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _103.QueryProposalsByGroupPolicyRequest): _103.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _103.QueryProposalsByGroupPolicyRequestAminoMsg): _103.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _103.QueryProposalsByGroupPolicyRequest): _103.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _103.QueryProposalsByGroupPolicyRequestProtoMsg): _103.QueryProposalsByGroupPolicyRequest;
                toProto(message: _103.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _103.QueryProposalsByGroupPolicyRequest): _103.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _103.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_103.QueryProposalsByGroupPolicyResponse>): _103.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _103.QueryProposalsByGroupPolicyResponseAmino): _103.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _103.QueryProposalsByGroupPolicyResponse): _103.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _103.QueryProposalsByGroupPolicyResponseAminoMsg): _103.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _103.QueryProposalsByGroupPolicyResponse): _103.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _103.QueryProposalsByGroupPolicyResponseProtoMsg): _103.QueryProposalsByGroupPolicyResponse;
                toProto(message: _103.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _103.QueryProposalsByGroupPolicyResponse): _103.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _103.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_103.QueryVoteByProposalVoterRequest>): _103.QueryVoteByProposalVoterRequest;
                fromAmino(object: _103.QueryVoteByProposalVoterRequestAmino): _103.QueryVoteByProposalVoterRequest;
                toAmino(message: _103.QueryVoteByProposalVoterRequest): _103.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _103.QueryVoteByProposalVoterRequestAminoMsg): _103.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _103.QueryVoteByProposalVoterRequest): _103.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _103.QueryVoteByProposalVoterRequestProtoMsg): _103.QueryVoteByProposalVoterRequest;
                toProto(message: _103.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _103.QueryVoteByProposalVoterRequest): _103.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _103.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_103.QueryVoteByProposalVoterResponse>): _103.QueryVoteByProposalVoterResponse;
                fromAmino(object: _103.QueryVoteByProposalVoterResponseAmino): _103.QueryVoteByProposalVoterResponse;
                toAmino(message: _103.QueryVoteByProposalVoterResponse): _103.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _103.QueryVoteByProposalVoterResponseAminoMsg): _103.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _103.QueryVoteByProposalVoterResponse): _103.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _103.QueryVoteByProposalVoterResponseProtoMsg): _103.QueryVoteByProposalVoterResponse;
                toProto(message: _103.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _103.QueryVoteByProposalVoterResponse): _103.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _103.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_103.QueryVotesByProposalRequest>): _103.QueryVotesByProposalRequest;
                fromAmino(object: _103.QueryVotesByProposalRequestAmino): _103.QueryVotesByProposalRequest;
                toAmino(message: _103.QueryVotesByProposalRequest): _103.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _103.QueryVotesByProposalRequestAminoMsg): _103.QueryVotesByProposalRequest;
                toAminoMsg(message: _103.QueryVotesByProposalRequest): _103.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _103.QueryVotesByProposalRequestProtoMsg): _103.QueryVotesByProposalRequest;
                toProto(message: _103.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _103.QueryVotesByProposalRequest): _103.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _103.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_103.QueryVotesByProposalResponse>): _103.QueryVotesByProposalResponse;
                fromAmino(object: _103.QueryVotesByProposalResponseAmino): _103.QueryVotesByProposalResponse;
                toAmino(message: _103.QueryVotesByProposalResponse): _103.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _103.QueryVotesByProposalResponseAminoMsg): _103.QueryVotesByProposalResponse;
                toAminoMsg(message: _103.QueryVotesByProposalResponse): _103.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _103.QueryVotesByProposalResponseProtoMsg): _103.QueryVotesByProposalResponse;
                toProto(message: _103.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _103.QueryVotesByProposalResponse): _103.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _103.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_103.QueryVotesByVoterRequest>): _103.QueryVotesByVoterRequest;
                fromAmino(object: _103.QueryVotesByVoterRequestAmino): _103.QueryVotesByVoterRequest;
                toAmino(message: _103.QueryVotesByVoterRequest): _103.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _103.QueryVotesByVoterRequestAminoMsg): _103.QueryVotesByVoterRequest;
                toAminoMsg(message: _103.QueryVotesByVoterRequest): _103.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _103.QueryVotesByVoterRequestProtoMsg): _103.QueryVotesByVoterRequest;
                toProto(message: _103.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _103.QueryVotesByVoterRequest): _103.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _103.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_103.QueryVotesByVoterResponse>): _103.QueryVotesByVoterResponse;
                fromAmino(object: _103.QueryVotesByVoterResponseAmino): _103.QueryVotesByVoterResponse;
                toAmino(message: _103.QueryVotesByVoterResponse): _103.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _103.QueryVotesByVoterResponseAminoMsg): _103.QueryVotesByVoterResponse;
                toAminoMsg(message: _103.QueryVotesByVoterResponse): _103.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _103.QueryVotesByVoterResponseProtoMsg): _103.QueryVotesByVoterResponse;
                toProto(message: _103.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _103.QueryVotesByVoterResponse): _103.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _103.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_103.QueryGroupsByMemberRequest>): _103.QueryGroupsByMemberRequest;
                fromAmino(object: _103.QueryGroupsByMemberRequestAmino): _103.QueryGroupsByMemberRequest;
                toAmino(message: _103.QueryGroupsByMemberRequest): _103.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _103.QueryGroupsByMemberRequestAminoMsg): _103.QueryGroupsByMemberRequest;
                toAminoMsg(message: _103.QueryGroupsByMemberRequest): _103.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _103.QueryGroupsByMemberRequestProtoMsg): _103.QueryGroupsByMemberRequest;
                toProto(message: _103.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _103.QueryGroupsByMemberRequest): _103.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _103.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_103.QueryGroupsByMemberResponse>): _103.QueryGroupsByMemberResponse;
                fromAmino(object: _103.QueryGroupsByMemberResponseAmino): _103.QueryGroupsByMemberResponse;
                toAmino(message: _103.QueryGroupsByMemberResponse): _103.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _103.QueryGroupsByMemberResponseAminoMsg): _103.QueryGroupsByMemberResponse;
                toAminoMsg(message: _103.QueryGroupsByMemberResponse): _103.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _103.QueryGroupsByMemberResponseProtoMsg): _103.QueryGroupsByMemberResponse;
                toProto(message: _103.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _103.QueryGroupsByMemberResponse): _103.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _103.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryTallyResultRequest;
                fromPartial(object: Partial<_103.QueryTallyResultRequest>): _103.QueryTallyResultRequest;
                fromAmino(object: _103.QueryTallyResultRequestAmino): _103.QueryTallyResultRequest;
                toAmino(message: _103.QueryTallyResultRequest): _103.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _103.QueryTallyResultRequestAminoMsg): _103.QueryTallyResultRequest;
                toAminoMsg(message: _103.QueryTallyResultRequest): _103.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _103.QueryTallyResultRequestProtoMsg): _103.QueryTallyResultRequest;
                toProto(message: _103.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _103.QueryTallyResultRequest): _103.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _103.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryTallyResultResponse;
                fromPartial(object: Partial<_103.QueryTallyResultResponse>): _103.QueryTallyResultResponse;
                fromAmino(object: _103.QueryTallyResultResponseAmino): _103.QueryTallyResultResponse;
                toAmino(message: _103.QueryTallyResultResponse): _103.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _103.QueryTallyResultResponseAminoMsg): _103.QueryTallyResultResponse;
                toAminoMsg(message: _103.QueryTallyResultResponse): _103.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _103.QueryTallyResultResponseProtoMsg): _103.QueryTallyResultResponse;
                toProto(message: _103.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _103.QueryTallyResultResponse): _103.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _103.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupsRequest;
                fromPartial(object: Partial<_103.QueryGroupsRequest>): _103.QueryGroupsRequest;
                fromAmino(object: _103.QueryGroupsRequestAmino): _103.QueryGroupsRequest;
                toAmino(message: _103.QueryGroupsRequest): _103.QueryGroupsRequestAmino;
                fromAminoMsg(object: _103.QueryGroupsRequestAminoMsg): _103.QueryGroupsRequest;
                toAminoMsg(message: _103.QueryGroupsRequest): _103.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryGroupsRequestProtoMsg): _103.QueryGroupsRequest;
                toProto(message: _103.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryGroupsRequest): _103.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _103.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryGroupsResponse;
                fromPartial(object: Partial<_103.QueryGroupsResponse>): _103.QueryGroupsResponse;
                fromAmino(object: _103.QueryGroupsResponseAmino): _103.QueryGroupsResponse;
                toAmino(message: _103.QueryGroupsResponse): _103.QueryGroupsResponseAmino;
                fromAminoMsg(object: _103.QueryGroupsResponseAminoMsg): _103.QueryGroupsResponse;
                toAminoMsg(message: _103.QueryGroupsResponse): _103.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryGroupsResponseProtoMsg): _103.QueryGroupsResponse;
                toProto(message: _103.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryGroupsResponse): _103.QueryGroupsResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _101.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.EventCreateGroup;
                fromPartial(object: Partial<_101.EventCreateGroup>): _101.EventCreateGroup;
                fromAmino(object: _101.EventCreateGroupAmino): _101.EventCreateGroup;
                toAmino(message: _101.EventCreateGroup): _101.EventCreateGroupAmino;
                fromAminoMsg(object: _101.EventCreateGroupAminoMsg): _101.EventCreateGroup;
                toAminoMsg(message: _101.EventCreateGroup): _101.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _101.EventCreateGroupProtoMsg): _101.EventCreateGroup;
                toProto(message: _101.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _101.EventCreateGroup): _101.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _101.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.EventUpdateGroup;
                fromPartial(object: Partial<_101.EventUpdateGroup>): _101.EventUpdateGroup;
                fromAmino(object: _101.EventUpdateGroupAmino): _101.EventUpdateGroup;
                toAmino(message: _101.EventUpdateGroup): _101.EventUpdateGroupAmino;
                fromAminoMsg(object: _101.EventUpdateGroupAminoMsg): _101.EventUpdateGroup;
                toAminoMsg(message: _101.EventUpdateGroup): _101.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _101.EventUpdateGroupProtoMsg): _101.EventUpdateGroup;
                toProto(message: _101.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _101.EventUpdateGroup): _101.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _101.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.EventCreateGroupPolicy;
                fromPartial(object: Partial<_101.EventCreateGroupPolicy>): _101.EventCreateGroupPolicy;
                fromAmino(object: _101.EventCreateGroupPolicyAmino): _101.EventCreateGroupPolicy;
                toAmino(message: _101.EventCreateGroupPolicy): _101.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _101.EventCreateGroupPolicyAminoMsg): _101.EventCreateGroupPolicy;
                toAminoMsg(message: _101.EventCreateGroupPolicy): _101.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _101.EventCreateGroupPolicyProtoMsg): _101.EventCreateGroupPolicy;
                toProto(message: _101.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _101.EventCreateGroupPolicy): _101.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _101.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_101.EventUpdateGroupPolicy>): _101.EventUpdateGroupPolicy;
                fromAmino(object: _101.EventUpdateGroupPolicyAmino): _101.EventUpdateGroupPolicy;
                toAmino(message: _101.EventUpdateGroupPolicy): _101.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _101.EventUpdateGroupPolicyAminoMsg): _101.EventUpdateGroupPolicy;
                toAminoMsg(message: _101.EventUpdateGroupPolicy): _101.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _101.EventUpdateGroupPolicyProtoMsg): _101.EventUpdateGroupPolicy;
                toProto(message: _101.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _101.EventUpdateGroupPolicy): _101.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _101.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.EventSubmitProposal;
                fromPartial(object: Partial<_101.EventSubmitProposal>): _101.EventSubmitProposal;
                fromAmino(object: _101.EventSubmitProposalAmino): _101.EventSubmitProposal;
                toAmino(message: _101.EventSubmitProposal): _101.EventSubmitProposalAmino;
                fromAminoMsg(object: _101.EventSubmitProposalAminoMsg): _101.EventSubmitProposal;
                toAminoMsg(message: _101.EventSubmitProposal): _101.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _101.EventSubmitProposalProtoMsg): _101.EventSubmitProposal;
                toProto(message: _101.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _101.EventSubmitProposal): _101.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _101.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.EventWithdrawProposal;
                fromPartial(object: Partial<_101.EventWithdrawProposal>): _101.EventWithdrawProposal;
                fromAmino(object: _101.EventWithdrawProposalAmino): _101.EventWithdrawProposal;
                toAmino(message: _101.EventWithdrawProposal): _101.EventWithdrawProposalAmino;
                fromAminoMsg(object: _101.EventWithdrawProposalAminoMsg): _101.EventWithdrawProposal;
                toAminoMsg(message: _101.EventWithdrawProposal): _101.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _101.EventWithdrawProposalProtoMsg): _101.EventWithdrawProposal;
                toProto(message: _101.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _101.EventWithdrawProposal): _101.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _101.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.EventVote;
                fromPartial(object: Partial<_101.EventVote>): _101.EventVote;
                fromAmino(object: _101.EventVoteAmino): _101.EventVote;
                toAmino(message: _101.EventVote): _101.EventVoteAmino;
                fromAminoMsg(object: _101.EventVoteAminoMsg): _101.EventVote;
                toAminoMsg(message: _101.EventVote): _101.EventVoteAminoMsg;
                fromProtoMsg(message: _101.EventVoteProtoMsg): _101.EventVote;
                toProto(message: _101.EventVote): Uint8Array;
                toProtoMsg(message: _101.EventVote): _101.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _101.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.EventExec;
                fromPartial(object: Partial<_101.EventExec>): _101.EventExec;
                fromAmino(object: _101.EventExecAmino): _101.EventExec;
                toAmino(message: _101.EventExec): _101.EventExecAmino;
                fromAminoMsg(object: _101.EventExecAminoMsg): _101.EventExec;
                toAminoMsg(message: _101.EventExec): _101.EventExecAminoMsg;
                fromProtoMsg(message: _101.EventExecProtoMsg): _101.EventExec;
                toProto(message: _101.EventExec): Uint8Array;
                toProtoMsg(message: _101.EventExec): _101.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _101.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.EventLeaveGroup;
                fromPartial(object: Partial<_101.EventLeaveGroup>): _101.EventLeaveGroup;
                fromAmino(object: _101.EventLeaveGroupAmino): _101.EventLeaveGroup;
                toAmino(message: _101.EventLeaveGroup): _101.EventLeaveGroupAmino;
                fromAminoMsg(object: _101.EventLeaveGroupAminoMsg): _101.EventLeaveGroup;
                toAminoMsg(message: _101.EventLeaveGroup): _101.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _101.EventLeaveGroupProtoMsg): _101.EventLeaveGroup;
                toProto(message: _101.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _101.EventLeaveGroup): _101.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _101.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.EventProposalPruned;
                fromPartial(object: Partial<_101.EventProposalPruned>): _101.EventProposalPruned;
                fromAmino(object: _101.EventProposalPrunedAmino): _101.EventProposalPruned;
                toAmino(message: _101.EventProposalPruned): _101.EventProposalPrunedAmino;
                fromAminoMsg(object: _101.EventProposalPrunedAminoMsg): _101.EventProposalPruned;
                toAminoMsg(message: _101.EventProposalPruned): _101.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _101.EventProposalPrunedProtoMsg): _101.EventProposalPruned;
                toProto(message: _101.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _101.EventProposalPruned): _101.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _244.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                inflation(request?: _108.QueryInflationRequest): Promise<_108.QueryInflationResponse>;
                annualProvisions(request?: _108.QueryAnnualProvisionsRequest): Promise<_108.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
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
        const v1beta1: {
            MsgClientImpl: typeof _260.MsgClientImpl;
            QueryClientImpl: typeof _245.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _113.QueryBalanceRequest): Promise<_113.QueryBalanceResponse>;
                owner(request: _113.QueryOwnerRequest): Promise<_113.QueryOwnerResponse>;
                supply(request: _113.QuerySupplyRequest): Promise<_113.QuerySupplyResponse>;
                nFTs(request: _113.QueryNFTsRequest): Promise<_113.QueryNFTsResponse>;
                nFT(request: _113.QueryNFTRequest): Promise<_113.QueryNFTResponse>;
                class(request: _113.QueryClassRequest): Promise<_113.QueryClassResponse>;
                classes(request?: _113.QueryClassesRequest): Promise<_113.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _114.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _114.MsgSend): {
                        typeUrl: string;
                        value: _114.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _114.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _114.MsgSend): {
                        typeUrl: string;
                        value: _114.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _114.MsgSend) => _114.MsgSendAmino;
                    fromAmino: (object: _114.MsgSendAmino) => _114.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _114.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgSend;
                fromPartial(object: Partial<_114.MsgSend>): _114.MsgSend;
                fromAmino(object: _114.MsgSendAmino): _114.MsgSend;
                toAmino(message: _114.MsgSend): _114.MsgSendAmino;
                fromAminoMsg(object: _114.MsgSendAminoMsg): _114.MsgSend;
                toAminoMsg(message: _114.MsgSend): _114.MsgSendAminoMsg;
                fromProtoMsg(message: _114.MsgSendProtoMsg): _114.MsgSend;
                toProto(message: _114.MsgSend): Uint8Array;
                toProtoMsg(message: _114.MsgSend): _114.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _114.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgSendResponse;
                fromPartial(_: Partial<_114.MsgSendResponse>): _114.MsgSendResponse;
                fromAmino(_: _114.MsgSendResponseAmino): _114.MsgSendResponse;
                toAmino(_: _114.MsgSendResponse): _114.MsgSendResponseAmino;
                fromAminoMsg(object: _114.MsgSendResponseAminoMsg): _114.MsgSendResponse;
                toAminoMsg(message: _114.MsgSendResponse): _114.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _114.MsgSendResponseProtoMsg): _114.MsgSendResponse;
                toProto(message: _114.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _114.MsgSendResponse): _114.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _113.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryBalanceRequest;
                fromPartial(object: Partial<_113.QueryBalanceRequest>): _113.QueryBalanceRequest;
                fromAmino(object: _113.QueryBalanceRequestAmino): _113.QueryBalanceRequest;
                toAmino(message: _113.QueryBalanceRequest): _113.QueryBalanceRequestAmino;
                fromAminoMsg(object: _113.QueryBalanceRequestAminoMsg): _113.QueryBalanceRequest;
                toAminoMsg(message: _113.QueryBalanceRequest): _113.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _113.QueryBalanceRequestProtoMsg): _113.QueryBalanceRequest;
                toProto(message: _113.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _113.QueryBalanceRequest): _113.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _113.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryBalanceResponse;
                fromPartial(object: Partial<_113.QueryBalanceResponse>): _113.QueryBalanceResponse;
                fromAmino(object: _113.QueryBalanceResponseAmino): _113.QueryBalanceResponse;
                toAmino(message: _113.QueryBalanceResponse): _113.QueryBalanceResponseAmino;
                fromAminoMsg(object: _113.QueryBalanceResponseAminoMsg): _113.QueryBalanceResponse;
                toAminoMsg(message: _113.QueryBalanceResponse): _113.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _113.QueryBalanceResponseProtoMsg): _113.QueryBalanceResponse;
                toProto(message: _113.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _113.QueryBalanceResponse): _113.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _113.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryOwnerRequest;
                fromPartial(object: Partial<_113.QueryOwnerRequest>): _113.QueryOwnerRequest;
                fromAmino(object: _113.QueryOwnerRequestAmino): _113.QueryOwnerRequest;
                toAmino(message: _113.QueryOwnerRequest): _113.QueryOwnerRequestAmino;
                fromAminoMsg(object: _113.QueryOwnerRequestAminoMsg): _113.QueryOwnerRequest;
                toAminoMsg(message: _113.QueryOwnerRequest): _113.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _113.QueryOwnerRequestProtoMsg): _113.QueryOwnerRequest;
                toProto(message: _113.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _113.QueryOwnerRequest): _113.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _113.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryOwnerResponse;
                fromPartial(object: Partial<_113.QueryOwnerResponse>): _113.QueryOwnerResponse;
                fromAmino(object: _113.QueryOwnerResponseAmino): _113.QueryOwnerResponse;
                toAmino(message: _113.QueryOwnerResponse): _113.QueryOwnerResponseAmino;
                fromAminoMsg(object: _113.QueryOwnerResponseAminoMsg): _113.QueryOwnerResponse;
                toAminoMsg(message: _113.QueryOwnerResponse): _113.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _113.QueryOwnerResponseProtoMsg): _113.QueryOwnerResponse;
                toProto(message: _113.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _113.QueryOwnerResponse): _113.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _113.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QuerySupplyRequest;
                fromPartial(object: Partial<_113.QuerySupplyRequest>): _113.QuerySupplyRequest;
                fromAmino(object: _113.QuerySupplyRequestAmino): _113.QuerySupplyRequest;
                toAmino(message: _113.QuerySupplyRequest): _113.QuerySupplyRequestAmino;
                fromAminoMsg(object: _113.QuerySupplyRequestAminoMsg): _113.QuerySupplyRequest;
                toAminoMsg(message: _113.QuerySupplyRequest): _113.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _113.QuerySupplyRequestProtoMsg): _113.QuerySupplyRequest;
                toProto(message: _113.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _113.QuerySupplyRequest): _113.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _113.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QuerySupplyResponse;
                fromPartial(object: Partial<_113.QuerySupplyResponse>): _113.QuerySupplyResponse;
                fromAmino(object: _113.QuerySupplyResponseAmino): _113.QuerySupplyResponse;
                toAmino(message: _113.QuerySupplyResponse): _113.QuerySupplyResponseAmino;
                fromAminoMsg(object: _113.QuerySupplyResponseAminoMsg): _113.QuerySupplyResponse;
                toAminoMsg(message: _113.QuerySupplyResponse): _113.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _113.QuerySupplyResponseProtoMsg): _113.QuerySupplyResponse;
                toProto(message: _113.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _113.QuerySupplyResponse): _113.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _113.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryNFTsRequest;
                fromPartial(object: Partial<_113.QueryNFTsRequest>): _113.QueryNFTsRequest;
                fromAmino(object: _113.QueryNFTsRequestAmino): _113.QueryNFTsRequest;
                toAmino(message: _113.QueryNFTsRequest): _113.QueryNFTsRequestAmino;
                fromAminoMsg(object: _113.QueryNFTsRequestAminoMsg): _113.QueryNFTsRequest;
                toAminoMsg(message: _113.QueryNFTsRequest): _113.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryNFTsRequestProtoMsg): _113.QueryNFTsRequest;
                toProto(message: _113.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryNFTsRequest): _113.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _113.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryNFTsResponse;
                fromPartial(object: Partial<_113.QueryNFTsResponse>): _113.QueryNFTsResponse;
                fromAmino(object: _113.QueryNFTsResponseAmino): _113.QueryNFTsResponse;
                toAmino(message: _113.QueryNFTsResponse): _113.QueryNFTsResponseAmino;
                fromAminoMsg(object: _113.QueryNFTsResponseAminoMsg): _113.QueryNFTsResponse;
                toAminoMsg(message: _113.QueryNFTsResponse): _113.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryNFTsResponseProtoMsg): _113.QueryNFTsResponse;
                toProto(message: _113.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryNFTsResponse): _113.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _113.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryNFTRequest;
                fromPartial(object: Partial<_113.QueryNFTRequest>): _113.QueryNFTRequest;
                fromAmino(object: _113.QueryNFTRequestAmino): _113.QueryNFTRequest;
                toAmino(message: _113.QueryNFTRequest): _113.QueryNFTRequestAmino;
                fromAminoMsg(object: _113.QueryNFTRequestAminoMsg): _113.QueryNFTRequest;
                toAminoMsg(message: _113.QueryNFTRequest): _113.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _113.QueryNFTRequestProtoMsg): _113.QueryNFTRequest;
                toProto(message: _113.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _113.QueryNFTRequest): _113.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _113.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryNFTResponse;
                fromPartial(object: Partial<_113.QueryNFTResponse>): _113.QueryNFTResponse;
                fromAmino(object: _113.QueryNFTResponseAmino): _113.QueryNFTResponse;
                toAmino(message: _113.QueryNFTResponse): _113.QueryNFTResponseAmino;
                fromAminoMsg(object: _113.QueryNFTResponseAminoMsg): _113.QueryNFTResponse;
                toAminoMsg(message: _113.QueryNFTResponse): _113.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _113.QueryNFTResponseProtoMsg): _113.QueryNFTResponse;
                toProto(message: _113.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _113.QueryNFTResponse): _113.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _113.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryClassRequest;
                fromPartial(object: Partial<_113.QueryClassRequest>): _113.QueryClassRequest;
                fromAmino(object: _113.QueryClassRequestAmino): _113.QueryClassRequest;
                toAmino(message: _113.QueryClassRequest): _113.QueryClassRequestAmino;
                fromAminoMsg(object: _113.QueryClassRequestAminoMsg): _113.QueryClassRequest;
                toAminoMsg(message: _113.QueryClassRequest): _113.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _113.QueryClassRequestProtoMsg): _113.QueryClassRequest;
                toProto(message: _113.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _113.QueryClassRequest): _113.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _113.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryClassResponse;
                fromPartial(object: Partial<_113.QueryClassResponse>): _113.QueryClassResponse;
                fromAmino(object: _113.QueryClassResponseAmino): _113.QueryClassResponse;
                toAmino(message: _113.QueryClassResponse): _113.QueryClassResponseAmino;
                fromAminoMsg(object: _113.QueryClassResponseAminoMsg): _113.QueryClassResponse;
                toAminoMsg(message: _113.QueryClassResponse): _113.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _113.QueryClassResponseProtoMsg): _113.QueryClassResponse;
                toProto(message: _113.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _113.QueryClassResponse): _113.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _113.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryClassesRequest;
                fromPartial(object: Partial<_113.QueryClassesRequest>): _113.QueryClassesRequest;
                fromAmino(object: _113.QueryClassesRequestAmino): _113.QueryClassesRequest;
                toAmino(message: _113.QueryClassesRequest): _113.QueryClassesRequestAmino;
                fromAminoMsg(object: _113.QueryClassesRequestAminoMsg): _113.QueryClassesRequest;
                toAminoMsg(message: _113.QueryClassesRequest): _113.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _113.QueryClassesRequestProtoMsg): _113.QueryClassesRequest;
                toProto(message: _113.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _113.QueryClassesRequest): _113.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _113.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryClassesResponse;
                fromPartial(object: Partial<_113.QueryClassesResponse>): _113.QueryClassesResponse;
                fromAmino(object: _113.QueryClassesResponseAmino): _113.QueryClassesResponse;
                toAmino(message: _113.QueryClassesResponse): _113.QueryClassesResponseAmino;
                fromAminoMsg(object: _113.QueryClassesResponseAminoMsg): _113.QueryClassesResponse;
                toAminoMsg(message: _113.QueryClassesResponse): _113.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _113.QueryClassesResponseProtoMsg): _113.QueryClassesResponse;
                toProto(message: _113.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _113.QueryClassesResponse): _113.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _112.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Class;
                fromPartial(object: Partial<_112.Class>): _112.Class;
                fromAmino(object: _112.ClassAmino): _112.Class;
                toAmino(message: _112.Class): _112.ClassAmino;
                fromAminoMsg(object: _112.ClassAminoMsg): _112.Class;
                toAminoMsg(message: _112.Class): _112.ClassAminoMsg;
                fromProtoMsg(message: _112.ClassProtoMsg): _112.Class;
                toProto(message: _112.Class): Uint8Array;
                toProtoMsg(message: _112.Class): _112.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _112.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.NFT;
                fromPartial(object: Partial<_112.NFT>): _112.NFT;
                fromAmino(object: _112.NFTAmino): _112.NFT;
                toAmino(message: _112.NFT): _112.NFTAmino;
                fromAminoMsg(object: _112.NFTAminoMsg): _112.NFT;
                toAminoMsg(message: _112.NFT): _112.NFTAminoMsg;
                fromProtoMsg(message: _112.NFTProtoMsg): _112.NFT;
                toProto(message: _112.NFT): Uint8Array;
                toProtoMsg(message: _112.NFT): _112.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _111.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.Entry;
                fromPartial(object: Partial<_111.Entry>): _111.Entry;
                fromAmino(object: _111.EntryAmino): _111.Entry;
                toAmino(message: _111.Entry): _111.EntryAmino;
                fromAminoMsg(object: _111.EntryAminoMsg): _111.Entry;
                toAminoMsg(message: _111.Entry): _111.EntryAminoMsg;
                fromProtoMsg(message: _111.EntryProtoMsg): _111.Entry;
                toProto(message: _111.Entry): Uint8Array;
                toProtoMsg(message: _111.Entry): _111.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _110.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.EventSend;
                fromPartial(object: Partial<_110.EventSend>): _110.EventSend;
                fromAmino(object: _110.EventSendAmino): _110.EventSend;
                toAmino(message: _110.EventSend): _110.EventSendAmino;
                fromAminoMsg(object: _110.EventSendAminoMsg): _110.EventSend;
                toAminoMsg(message: _110.EventSend): _110.EventSendAminoMsg;
                fromProtoMsg(message: _110.EventSendProtoMsg): _110.EventSend;
                toProto(message: _110.EventSend): Uint8Array;
                toProtoMsg(message: _110.EventSend): _110.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _110.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.EventMint;
                fromPartial(object: Partial<_110.EventMint>): _110.EventMint;
                fromAmino(object: _110.EventMintAmino): _110.EventMint;
                toAmino(message: _110.EventMint): _110.EventMintAmino;
                fromAminoMsg(object: _110.EventMintAminoMsg): _110.EventMint;
                toAminoMsg(message: _110.EventMint): _110.EventMintAminoMsg;
                fromProtoMsg(message: _110.EventMintProtoMsg): _110.EventMint;
                toProto(message: _110.EventMint): Uint8Array;
                toProtoMsg(message: _110.EventMint): _110.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _110.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.EventBurn;
                fromPartial(object: Partial<_110.EventBurn>): _110.EventBurn;
                fromAmino(object: _110.EventBurnAmino): _110.EventBurn;
                toAmino(message: _110.EventBurn): _110.EventBurnAmino;
                fromAminoMsg(object: _110.EventBurnAminoMsg): _110.EventBurn;
                toAminoMsg(message: _110.EventBurn): _110.EventBurnAminoMsg;
                fromProtoMsg(message: _110.EventBurnProtoMsg): _110.EventBurn;
                toProto(message: _110.EventBurn): Uint8Array;
                toProtoMsg(message: _110.EventBurn): _110.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _115.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _115.Module;
                    fromPartial(_: Partial<_115.Module>): _115.Module;
                    fromAmino(_: _115.ModuleAmino): _115.Module;
                    toAmino(_: _115.Module): _115.ModuleAmino;
                    fromAminoMsg(object: _115.ModuleAminoMsg): _115.Module;
                    toAminoMsg(message: _115.Module): _115.ModuleAminoMsg;
                    fromProtoMsg(message: _115.ModuleProtoMsg): _115.Module;
                    toProto(message: _115.Module): Uint8Array;
                    toProtoMsg(message: _115.Module): _115.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _116.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.TableDescriptor;
                fromPartial(object: Partial<_116.TableDescriptor>): _116.TableDescriptor;
                fromAmino(object: _116.TableDescriptorAmino): _116.TableDescriptor;
                toAmino(message: _116.TableDescriptor): _116.TableDescriptorAmino;
                fromAminoMsg(object: _116.TableDescriptorAminoMsg): _116.TableDescriptor;
                toAminoMsg(message: _116.TableDescriptor): _116.TableDescriptorAminoMsg;
                fromProtoMsg(message: _116.TableDescriptorProtoMsg): _116.TableDescriptor;
                toProto(message: _116.TableDescriptor): Uint8Array;
                toProtoMsg(message: _116.TableDescriptor): _116.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _116.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_116.PrimaryKeyDescriptor>): _116.PrimaryKeyDescriptor;
                fromAmino(object: _116.PrimaryKeyDescriptorAmino): _116.PrimaryKeyDescriptor;
                toAmino(message: _116.PrimaryKeyDescriptor): _116.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _116.PrimaryKeyDescriptorAminoMsg): _116.PrimaryKeyDescriptor;
                toAminoMsg(message: _116.PrimaryKeyDescriptor): _116.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _116.PrimaryKeyDescriptorProtoMsg): _116.PrimaryKeyDescriptor;
                toProto(message: _116.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _116.PrimaryKeyDescriptor): _116.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _116.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_116.SecondaryIndexDescriptor>): _116.SecondaryIndexDescriptor;
                fromAmino(object: _116.SecondaryIndexDescriptorAmino): _116.SecondaryIndexDescriptor;
                toAmino(message: _116.SecondaryIndexDescriptor): _116.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _116.SecondaryIndexDescriptorAminoMsg): _116.SecondaryIndexDescriptor;
                toAminoMsg(message: _116.SecondaryIndexDescriptor): _116.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _116.SecondaryIndexDescriptorProtoMsg): _116.SecondaryIndexDescriptor;
                toProto(message: _116.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _116.SecondaryIndexDescriptor): _116.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _116.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.SingletonDescriptor;
                fromPartial(object: Partial<_116.SingletonDescriptor>): _116.SingletonDescriptor;
                fromAmino(object: _116.SingletonDescriptorAmino): _116.SingletonDescriptor;
                toAmino(message: _116.SingletonDescriptor): _116.SingletonDescriptorAmino;
                fromAminoMsg(object: _116.SingletonDescriptorAminoMsg): _116.SingletonDescriptor;
                toAminoMsg(message: _116.SingletonDescriptor): _116.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _116.SingletonDescriptorProtoMsg): _116.SingletonDescriptor;
                toProto(message: _116.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _116.SingletonDescriptor): _116.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _117.StorageType;
            storageTypeToJSON(object: _117.StorageType): string;
            StorageType: typeof _117.StorageType;
            StorageTypeSDKType: typeof _117.StorageType;
            StorageTypeAmino: typeof _117.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _117.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_117.ModuleSchemaDescriptor>): _117.ModuleSchemaDescriptor;
                fromAmino(object: _117.ModuleSchemaDescriptorAmino): _117.ModuleSchemaDescriptor;
                toAmino(message: _117.ModuleSchemaDescriptor): _117.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _117.ModuleSchemaDescriptorAminoMsg): _117.ModuleSchemaDescriptor;
                toAminoMsg(message: _117.ModuleSchemaDescriptor): _117.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _117.ModuleSchemaDescriptorProtoMsg): _117.ModuleSchemaDescriptor;
                toProto(message: _117.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _117.ModuleSchemaDescriptor): _117.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _117.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_117.ModuleSchemaDescriptor_FileEntry>): _117.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _117.ModuleSchemaDescriptor_FileEntryAmino): _117.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _117.ModuleSchemaDescriptor_FileEntry): _117.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _117.ModuleSchemaDescriptor_FileEntryAminoMsg): _117.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _117.ModuleSchemaDescriptor_FileEntry): _117.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _117.ModuleSchemaDescriptor_FileEntryProtoMsg): _117.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _117.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _117.ModuleSchemaDescriptor_FileEntry): _117.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _246.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                subspaces(request?: _119.QuerySubspacesRequest): Promise<_119.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
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
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _119.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _119.QuerySubspacesRequest;
                fromPartial(_: Partial<_119.QuerySubspacesRequest>): _119.QuerySubspacesRequest;
                fromAmino(_: _119.QuerySubspacesRequestAmino): _119.QuerySubspacesRequest;
                toAmino(_: _119.QuerySubspacesRequest): _119.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _119.QuerySubspacesRequestAminoMsg): _119.QuerySubspacesRequest;
                toAminoMsg(message: _119.QuerySubspacesRequest): _119.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _119.QuerySubspacesRequestProtoMsg): _119.QuerySubspacesRequest;
                toProto(message: _119.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _119.QuerySubspacesRequest): _119.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _119.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QuerySubspacesResponse;
                fromPartial(object: Partial<_119.QuerySubspacesResponse>): _119.QuerySubspacesResponse;
                fromAmino(object: _119.QuerySubspacesResponseAmino): _119.QuerySubspacesResponse;
                toAmino(message: _119.QuerySubspacesResponse): _119.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _119.QuerySubspacesResponseAminoMsg): _119.QuerySubspacesResponse;
                toAminoMsg(message: _119.QuerySubspacesResponse): _119.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _119.QuerySubspacesResponseProtoMsg): _119.QuerySubspacesResponse;
                toProto(message: _119.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _119.QuerySubspacesResponse): _119.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _119.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Subspace;
                fromPartial(object: Partial<_119.Subspace>): _119.Subspace;
                fromAmino(object: _119.SubspaceAmino): _119.Subspace;
                toAmino(message: _119.Subspace): _119.SubspaceAmino;
                fromAminoMsg(object: _119.SubspaceAminoMsg): _119.Subspace;
                toAminoMsg(message: _119.Subspace): _119.SubspaceAminoMsg;
                fromProtoMsg(message: _119.SubspaceProtoMsg): _119.Subspace;
                toProto(message: _119.Subspace): Uint8Array;
                toProtoMsg(message: _119.Subspace): _119.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _118.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ParameterChangeProposal;
                fromPartial(object: Partial<_118.ParameterChangeProposal>): _118.ParameterChangeProposal;
                fromAmino(object: _118.ParameterChangeProposalAmino): _118.ParameterChangeProposal;
                toAmino(message: _118.ParameterChangeProposal): _118.ParameterChangeProposalAmino;
                fromAminoMsg(object: _118.ParameterChangeProposalAminoMsg): _118.ParameterChangeProposal;
                toAminoMsg(message: _118.ParameterChangeProposal): _118.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _118.ParameterChangeProposalProtoMsg): _118.ParameterChangeProposal;
                toProto(message: _118.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _118.ParameterChangeProposal): _118.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _118.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ParamChange;
                fromPartial(object: Partial<_118.ParamChange>): _118.ParamChange;
                fromAmino(object: _118.ParamChangeAmino): _118.ParamChange;
                toAmino(message: _118.ParamChange): _118.ParamChangeAmino;
                fromAminoMsg(object: _118.ParamChangeAminoMsg): _118.ParamChange;
                toAminoMsg(message: _118.ParamChange): _118.ParamChangeAminoMsg;
                fromProtoMsg(message: _118.ParamChangeProtoMsg): _118.ParamChange;
                toProto(message: _118.ParamChange): Uint8Array;
                toProtoMsg(message: _118.ParamChange): _118.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _261.MsgClientImpl;
            QueryClientImpl: typeof _247.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                signingInfo(request: _121.QuerySigningInfoRequest): Promise<_121.QuerySigningInfoResponse>;
                signingInfos(request?: _121.QuerySigningInfosRequest): Promise<_121.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _228.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _123.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _123.MsgUnjail): {
                        typeUrl: string;
                        value: _123.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _123.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _123.MsgUnjail): {
                        typeUrl: string;
                        value: _123.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _123.MsgUnjail) => _123.MsgUnjailAmino;
                    fromAmino: (object: _123.MsgUnjailAmino) => _123.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _123.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgUnjail;
                fromPartial(object: Partial<_123.MsgUnjail>): _123.MsgUnjail;
                fromAmino(object: _123.MsgUnjailAmino): _123.MsgUnjail;
                toAmino(message: _123.MsgUnjail): _123.MsgUnjailAmino;
                fromAminoMsg(object: _123.MsgUnjailAminoMsg): _123.MsgUnjail;
                toAminoMsg(message: _123.MsgUnjail): _123.MsgUnjailAminoMsg;
                fromProtoMsg(message: _123.MsgUnjailProtoMsg): _123.MsgUnjail;
                toProto(message: _123.MsgUnjail): Uint8Array;
                toProtoMsg(message: _123.MsgUnjail): _123.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _123.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgUnjailResponse;
                fromPartial(_: Partial<_123.MsgUnjailResponse>): _123.MsgUnjailResponse;
                fromAmino(_: _123.MsgUnjailResponseAmino): _123.MsgUnjailResponse;
                toAmino(_: _123.MsgUnjailResponse): _123.MsgUnjailResponseAmino;
                fromAminoMsg(object: _123.MsgUnjailResponseAminoMsg): _123.MsgUnjailResponse;
                toAminoMsg(message: _123.MsgUnjailResponse): _123.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _123.MsgUnjailResponseProtoMsg): _123.MsgUnjailResponse;
                toProto(message: _123.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _123.MsgUnjailResponse): _123.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _122.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ValidatorSigningInfo;
                fromPartial(object: Partial<_122.ValidatorSigningInfo>): _122.ValidatorSigningInfo;
                fromAmino(object: _122.ValidatorSigningInfoAmino): _122.ValidatorSigningInfo;
                toAmino(message: _122.ValidatorSigningInfo): _122.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _122.ValidatorSigningInfoAminoMsg): _122.ValidatorSigningInfo;
                toAminoMsg(message: _122.ValidatorSigningInfo): _122.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _122.ValidatorSigningInfoProtoMsg): _122.ValidatorSigningInfo;
                toProto(message: _122.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _122.ValidatorSigningInfo): _122.ValidatorSigningInfoProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _121.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QuerySigningInfoRequest;
                fromPartial(object: Partial<_121.QuerySigningInfoRequest>): _121.QuerySigningInfoRequest;
                fromAmino(object: _121.QuerySigningInfoRequestAmino): _121.QuerySigningInfoRequest;
                toAmino(message: _121.QuerySigningInfoRequest): _121.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _121.QuerySigningInfoRequestAminoMsg): _121.QuerySigningInfoRequest;
                toAminoMsg(message: _121.QuerySigningInfoRequest): _121.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _121.QuerySigningInfoRequestProtoMsg): _121.QuerySigningInfoRequest;
                toProto(message: _121.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _121.QuerySigningInfoRequest): _121.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _121.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QuerySigningInfoResponse;
                fromPartial(object: Partial<_121.QuerySigningInfoResponse>): _121.QuerySigningInfoResponse;
                fromAmino(object: _121.QuerySigningInfoResponseAmino): _121.QuerySigningInfoResponse;
                toAmino(message: _121.QuerySigningInfoResponse): _121.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _121.QuerySigningInfoResponseAminoMsg): _121.QuerySigningInfoResponse;
                toAminoMsg(message: _121.QuerySigningInfoResponse): _121.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _121.QuerySigningInfoResponseProtoMsg): _121.QuerySigningInfoResponse;
                toProto(message: _121.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _121.QuerySigningInfoResponse): _121.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _121.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QuerySigningInfosRequest;
                fromPartial(object: Partial<_121.QuerySigningInfosRequest>): _121.QuerySigningInfosRequest;
                fromAmino(object: _121.QuerySigningInfosRequestAmino): _121.QuerySigningInfosRequest;
                toAmino(message: _121.QuerySigningInfosRequest): _121.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _121.QuerySigningInfosRequestAminoMsg): _121.QuerySigningInfosRequest;
                toAminoMsg(message: _121.QuerySigningInfosRequest): _121.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _121.QuerySigningInfosRequestProtoMsg): _121.QuerySigningInfosRequest;
                toProto(message: _121.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _121.QuerySigningInfosRequest): _121.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _121.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QuerySigningInfosResponse;
                fromPartial(object: Partial<_121.QuerySigningInfosResponse>): _121.QuerySigningInfosResponse;
                fromAmino(object: _121.QuerySigningInfosResponseAmino): _121.QuerySigningInfosResponse;
                toAmino(message: _121.QuerySigningInfosResponse): _121.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _121.QuerySigningInfosResponseAminoMsg): _121.QuerySigningInfosResponse;
                toAminoMsg(message: _121.QuerySigningInfosResponse): _121.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _121.QuerySigningInfosResponseProtoMsg): _121.QuerySigningInfosResponse;
                toProto(message: _121.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _121.QuerySigningInfosResponse): _121.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _120.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.SigningInfo;
                fromPartial(object: Partial<_120.SigningInfo>): _120.SigningInfo;
                fromAmino(object: _120.SigningInfoAmino): _120.SigningInfo;
                toAmino(message: _120.SigningInfo): _120.SigningInfoAmino;
                fromAminoMsg(object: _120.SigningInfoAminoMsg): _120.SigningInfo;
                toAminoMsg(message: _120.SigningInfo): _120.SigningInfoAminoMsg;
                fromProtoMsg(message: _120.SigningInfoProtoMsg): _120.SigningInfo;
                toProto(message: _120.SigningInfo): Uint8Array;
                toProtoMsg(message: _120.SigningInfo): _120.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _120.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorMissedBlocks;
                fromPartial(object: Partial<_120.ValidatorMissedBlocks>): _120.ValidatorMissedBlocks;
                fromAmino(object: _120.ValidatorMissedBlocksAmino): _120.ValidatorMissedBlocks;
                toAmino(message: _120.ValidatorMissedBlocks): _120.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _120.ValidatorMissedBlocksAminoMsg): _120.ValidatorMissedBlocks;
                toAminoMsg(message: _120.ValidatorMissedBlocks): _120.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _120.ValidatorMissedBlocksProtoMsg): _120.ValidatorMissedBlocks;
                toProto(message: _120.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _120.ValidatorMissedBlocks): _120.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _120.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MissedBlock;
                fromPartial(object: Partial<_120.MissedBlock>): _120.MissedBlock;
                fromAmino(object: _120.MissedBlockAmino): _120.MissedBlock;
                toAmino(message: _120.MissedBlock): _120.MissedBlockAmino;
                fromAminoMsg(object: _120.MissedBlockAminoMsg): _120.MissedBlock;
                toAminoMsg(message: _120.MissedBlock): _120.MissedBlockAminoMsg;
                fromProtoMsg(message: _120.MissedBlockProtoMsg): _120.MissedBlock;
                toProto(message: _120.MissedBlock): Uint8Array;
                toProtoMsg(message: _120.MissedBlock): _120.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _262.MsgClientImpl;
            QueryClientImpl: typeof _248.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _126.QueryValidatorsRequest): Promise<_126.QueryValidatorsResponse>;
                validator(request: _126.QueryValidatorRequest): Promise<_126.QueryValidatorResponse>;
                validatorDelegations(request: _126.QueryValidatorDelegationsRequest): Promise<_126.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _126.QueryValidatorUnbondingDelegationsRequest): Promise<_126.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _126.QueryDelegationRequest): Promise<_126.QueryDelegationResponse>;
                unbondingDelegation(request: _126.QueryUnbondingDelegationRequest): Promise<_126.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _126.QueryDelegatorDelegationsRequest): Promise<_126.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _126.QueryDelegatorUnbondingDelegationsRequest): Promise<_126.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _126.QueryRedelegationsRequest): Promise<_126.QueryRedelegationsResponse>;
                delegatorValidators(request: _126.QueryDelegatorValidatorsRequest): Promise<_126.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _126.QueryDelegatorValidatorRequest): Promise<_126.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _126.QueryHistoricalInfoRequest): Promise<_126.QueryHistoricalInfoResponse>;
                pool(request?: _126.QueryPoolRequest): Promise<_126.QueryPoolResponse>;
                params(request?: _126.QueryParamsRequest): Promise<_126.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _229.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _128.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _128.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _128.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _128.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _128.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _128.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _128.MsgCreateValidator): {
                        typeUrl: string;
                        value: _128.MsgCreateValidator;
                    };
                    editValidator(value: _128.MsgEditValidator): {
                        typeUrl: string;
                        value: _128.MsgEditValidator;
                    };
                    delegate(value: _128.MsgDelegate): {
                        typeUrl: string;
                        value: _128.MsgDelegate;
                    };
                    beginRedelegate(value: _128.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _128.MsgBeginRedelegate;
                    };
                    undelegate(value: _128.MsgUndelegate): {
                        typeUrl: string;
                        value: _128.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _128.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _128.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _128.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _128.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _128.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _128.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _128.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _128.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _128.MsgCreateValidator): {
                        typeUrl: string;
                        value: _128.MsgCreateValidator;
                    };
                    editValidator(value: _128.MsgEditValidator): {
                        typeUrl: string;
                        value: _128.MsgEditValidator;
                    };
                    delegate(value: _128.MsgDelegate): {
                        typeUrl: string;
                        value: _128.MsgDelegate;
                    };
                    beginRedelegate(value: _128.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _128.MsgBeginRedelegate;
                    };
                    undelegate(value: _128.MsgUndelegate): {
                        typeUrl: string;
                        value: _128.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _128.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _128.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _128.MsgCreateValidator) => _128.MsgCreateValidatorAmino;
                    fromAmino: (object: _128.MsgCreateValidatorAmino) => _128.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _128.MsgEditValidator) => _128.MsgEditValidatorAmino;
                    fromAmino: (object: _128.MsgEditValidatorAmino) => _128.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _128.MsgDelegate) => _128.MsgDelegateAmino;
                    fromAmino: (object: _128.MsgDelegateAmino) => _128.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _128.MsgBeginRedelegate) => _128.MsgBeginRedelegateAmino;
                    fromAmino: (object: _128.MsgBeginRedelegateAmino) => _128.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _128.MsgUndelegate) => _128.MsgUndelegateAmino;
                    fromAmino: (object: _128.MsgUndelegateAmino) => _128.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _128.MsgCancelUnbondingDelegation) => _128.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _128.MsgCancelUnbondingDelegationAmino) => _128.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _128.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgCreateValidator;
                fromPartial(object: Partial<_128.MsgCreateValidator>): _128.MsgCreateValidator;
                fromAmino(object: _128.MsgCreateValidatorAmino): _128.MsgCreateValidator;
                toAmino(message: _128.MsgCreateValidator): _128.MsgCreateValidatorAmino;
                fromAminoMsg(object: _128.MsgCreateValidatorAminoMsg): _128.MsgCreateValidator;
                toAminoMsg(message: _128.MsgCreateValidator): _128.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _128.MsgCreateValidatorProtoMsg): _128.MsgCreateValidator;
                toProto(message: _128.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _128.MsgCreateValidator): _128.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _128.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_128.MsgCreateValidatorResponse>): _128.MsgCreateValidatorResponse;
                fromAmino(_: _128.MsgCreateValidatorResponseAmino): _128.MsgCreateValidatorResponse;
                toAmino(_: _128.MsgCreateValidatorResponse): _128.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _128.MsgCreateValidatorResponseAminoMsg): _128.MsgCreateValidatorResponse;
                toAminoMsg(message: _128.MsgCreateValidatorResponse): _128.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _128.MsgCreateValidatorResponseProtoMsg): _128.MsgCreateValidatorResponse;
                toProto(message: _128.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _128.MsgCreateValidatorResponse): _128.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _128.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgEditValidator;
                fromPartial(object: Partial<_128.MsgEditValidator>): _128.MsgEditValidator;
                fromAmino(object: _128.MsgEditValidatorAmino): _128.MsgEditValidator;
                toAmino(message: _128.MsgEditValidator): _128.MsgEditValidatorAmino;
                fromAminoMsg(object: _128.MsgEditValidatorAminoMsg): _128.MsgEditValidator;
                toAminoMsg(message: _128.MsgEditValidator): _128.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _128.MsgEditValidatorProtoMsg): _128.MsgEditValidator;
                toProto(message: _128.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _128.MsgEditValidator): _128.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _128.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.MsgEditValidatorResponse;
                fromPartial(_: Partial<_128.MsgEditValidatorResponse>): _128.MsgEditValidatorResponse;
                fromAmino(_: _128.MsgEditValidatorResponseAmino): _128.MsgEditValidatorResponse;
                toAmino(_: _128.MsgEditValidatorResponse): _128.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _128.MsgEditValidatorResponseAminoMsg): _128.MsgEditValidatorResponse;
                toAminoMsg(message: _128.MsgEditValidatorResponse): _128.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _128.MsgEditValidatorResponseProtoMsg): _128.MsgEditValidatorResponse;
                toProto(message: _128.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _128.MsgEditValidatorResponse): _128.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _128.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgDelegate;
                fromPartial(object: Partial<_128.MsgDelegate>): _128.MsgDelegate;
                fromAmino(object: _128.MsgDelegateAmino): _128.MsgDelegate;
                toAmino(message: _128.MsgDelegate): _128.MsgDelegateAmino;
                fromAminoMsg(object: _128.MsgDelegateAminoMsg): _128.MsgDelegate;
                toAminoMsg(message: _128.MsgDelegate): _128.MsgDelegateAminoMsg;
                fromProtoMsg(message: _128.MsgDelegateProtoMsg): _128.MsgDelegate;
                toProto(message: _128.MsgDelegate): Uint8Array;
                toProtoMsg(message: _128.MsgDelegate): _128.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _128.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.MsgDelegateResponse;
                fromPartial(_: Partial<_128.MsgDelegateResponse>): _128.MsgDelegateResponse;
                fromAmino(_: _128.MsgDelegateResponseAmino): _128.MsgDelegateResponse;
                toAmino(_: _128.MsgDelegateResponse): _128.MsgDelegateResponseAmino;
                fromAminoMsg(object: _128.MsgDelegateResponseAminoMsg): _128.MsgDelegateResponse;
                toAminoMsg(message: _128.MsgDelegateResponse): _128.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _128.MsgDelegateResponseProtoMsg): _128.MsgDelegateResponse;
                toProto(message: _128.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _128.MsgDelegateResponse): _128.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _128.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgBeginRedelegate;
                fromPartial(object: Partial<_128.MsgBeginRedelegate>): _128.MsgBeginRedelegate;
                fromAmino(object: _128.MsgBeginRedelegateAmino): _128.MsgBeginRedelegate;
                toAmino(message: _128.MsgBeginRedelegate): _128.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _128.MsgBeginRedelegateAminoMsg): _128.MsgBeginRedelegate;
                toAminoMsg(message: _128.MsgBeginRedelegate): _128.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _128.MsgBeginRedelegateProtoMsg): _128.MsgBeginRedelegate;
                toProto(message: _128.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _128.MsgBeginRedelegate): _128.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _128.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_128.MsgBeginRedelegateResponse>): _128.MsgBeginRedelegateResponse;
                fromAmino(object: _128.MsgBeginRedelegateResponseAmino): _128.MsgBeginRedelegateResponse;
                toAmino(message: _128.MsgBeginRedelegateResponse): _128.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _128.MsgBeginRedelegateResponseAminoMsg): _128.MsgBeginRedelegateResponse;
                toAminoMsg(message: _128.MsgBeginRedelegateResponse): _128.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _128.MsgBeginRedelegateResponseProtoMsg): _128.MsgBeginRedelegateResponse;
                toProto(message: _128.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _128.MsgBeginRedelegateResponse): _128.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _128.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgUndelegate;
                fromPartial(object: Partial<_128.MsgUndelegate>): _128.MsgUndelegate;
                fromAmino(object: _128.MsgUndelegateAmino): _128.MsgUndelegate;
                toAmino(message: _128.MsgUndelegate): _128.MsgUndelegateAmino;
                fromAminoMsg(object: _128.MsgUndelegateAminoMsg): _128.MsgUndelegate;
                toAminoMsg(message: _128.MsgUndelegate): _128.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _128.MsgUndelegateProtoMsg): _128.MsgUndelegate;
                toProto(message: _128.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _128.MsgUndelegate): _128.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _128.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgUndelegateResponse;
                fromPartial(object: Partial<_128.MsgUndelegateResponse>): _128.MsgUndelegateResponse;
                fromAmino(object: _128.MsgUndelegateResponseAmino): _128.MsgUndelegateResponse;
                toAmino(message: _128.MsgUndelegateResponse): _128.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _128.MsgUndelegateResponseAminoMsg): _128.MsgUndelegateResponse;
                toAminoMsg(message: _128.MsgUndelegateResponse): _128.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _128.MsgUndelegateResponseProtoMsg): _128.MsgUndelegateResponse;
                toProto(message: _128.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _128.MsgUndelegateResponse): _128.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _128.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_128.MsgCancelUnbondingDelegation>): _128.MsgCancelUnbondingDelegation;
                fromAmino(object: _128.MsgCancelUnbondingDelegationAmino): _128.MsgCancelUnbondingDelegation;
                toAmino(message: _128.MsgCancelUnbondingDelegation): _128.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _128.MsgCancelUnbondingDelegationAminoMsg): _128.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _128.MsgCancelUnbondingDelegation): _128.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _128.MsgCancelUnbondingDelegationProtoMsg): _128.MsgCancelUnbondingDelegation;
                toProto(message: _128.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _128.MsgCancelUnbondingDelegation): _128.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _128.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_128.MsgCancelUnbondingDelegationResponse>): _128.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _128.MsgCancelUnbondingDelegationResponseAmino): _128.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _128.MsgCancelUnbondingDelegationResponse): _128.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _128.MsgCancelUnbondingDelegationResponseAminoMsg): _128.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _128.MsgCancelUnbondingDelegationResponse): _128.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _128.MsgCancelUnbondingDelegationResponseProtoMsg): _128.MsgCancelUnbondingDelegationResponse;
                toProto(message: _128.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _128.MsgCancelUnbondingDelegationResponse): _128.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _127.BondStatus;
            bondStatusToJSON(object: _127.BondStatus): string;
            BondStatus: typeof _127.BondStatus;
            BondStatusSDKType: typeof _127.BondStatus;
            BondStatusAmino: typeof _127.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _127.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.HistoricalInfo;
                fromPartial(object: Partial<_127.HistoricalInfo>): _127.HistoricalInfo;
                fromAmino(object: _127.HistoricalInfoAmino): _127.HistoricalInfo;
                toAmino(message: _127.HistoricalInfo): _127.HistoricalInfoAmino;
                fromAminoMsg(object: _127.HistoricalInfoAminoMsg): _127.HistoricalInfo;
                toAminoMsg(message: _127.HistoricalInfo): _127.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _127.HistoricalInfoProtoMsg): _127.HistoricalInfo;
                toProto(message: _127.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _127.HistoricalInfo): _127.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _127.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.CommissionRates;
                fromPartial(object: Partial<_127.CommissionRates>): _127.CommissionRates;
                fromAmino(object: _127.CommissionRatesAmino): _127.CommissionRates;
                toAmino(message: _127.CommissionRates): _127.CommissionRatesAmino;
                fromAminoMsg(object: _127.CommissionRatesAminoMsg): _127.CommissionRates;
                toAminoMsg(message: _127.CommissionRates): _127.CommissionRatesAminoMsg;
                fromProtoMsg(message: _127.CommissionRatesProtoMsg): _127.CommissionRates;
                toProto(message: _127.CommissionRates): Uint8Array;
                toProtoMsg(message: _127.CommissionRates): _127.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _127.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Commission;
                fromPartial(object: Partial<_127.Commission>): _127.Commission;
                fromAmino(object: _127.CommissionAmino): _127.Commission;
                toAmino(message: _127.Commission): _127.CommissionAmino;
                fromAminoMsg(object: _127.CommissionAminoMsg): _127.Commission;
                toAminoMsg(message: _127.Commission): _127.CommissionAminoMsg;
                fromProtoMsg(message: _127.CommissionProtoMsg): _127.Commission;
                toProto(message: _127.Commission): Uint8Array;
                toProtoMsg(message: _127.Commission): _127.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _127.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Description;
                fromPartial(object: Partial<_127.Description>): _127.Description;
                fromAmino(object: _127.DescriptionAmino): _127.Description;
                toAmino(message: _127.Description): _127.DescriptionAmino;
                fromAminoMsg(object: _127.DescriptionAminoMsg): _127.Description;
                toAminoMsg(message: _127.Description): _127.DescriptionAminoMsg;
                fromProtoMsg(message: _127.DescriptionProtoMsg): _127.Description;
                toProto(message: _127.Description): Uint8Array;
                toProtoMsg(message: _127.Description): _127.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _127.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Validator;
                fromPartial(object: Partial<_127.Validator>): _127.Validator;
                fromAmino(object: _127.ValidatorAmino): _127.Validator;
                toAmino(message: _127.Validator): _127.ValidatorAmino;
                fromAminoMsg(object: _127.ValidatorAminoMsg): _127.Validator;
                toAminoMsg(message: _127.Validator): _127.ValidatorAminoMsg;
                fromProtoMsg(message: _127.ValidatorProtoMsg): _127.Validator;
                toProto(message: _127.Validator): Uint8Array;
                toProtoMsg(message: _127.Validator): _127.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _127.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ValAddresses;
                fromPartial(object: Partial<_127.ValAddresses>): _127.ValAddresses;
                fromAmino(object: _127.ValAddressesAmino): _127.ValAddresses;
                toAmino(message: _127.ValAddresses): _127.ValAddressesAmino;
                fromAminoMsg(object: _127.ValAddressesAminoMsg): _127.ValAddresses;
                toAminoMsg(message: _127.ValAddresses): _127.ValAddressesAminoMsg;
                fromProtoMsg(message: _127.ValAddressesProtoMsg): _127.ValAddresses;
                toProto(message: _127.ValAddresses): Uint8Array;
                toProtoMsg(message: _127.ValAddresses): _127.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _127.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.DVPair;
                fromPartial(object: Partial<_127.DVPair>): _127.DVPair;
                fromAmino(object: _127.DVPairAmino): _127.DVPair;
                toAmino(message: _127.DVPair): _127.DVPairAmino;
                fromAminoMsg(object: _127.DVPairAminoMsg): _127.DVPair;
                toAminoMsg(message: _127.DVPair): _127.DVPairAminoMsg;
                fromProtoMsg(message: _127.DVPairProtoMsg): _127.DVPair;
                toProto(message: _127.DVPair): Uint8Array;
                toProtoMsg(message: _127.DVPair): _127.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _127.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.DVPairs;
                fromPartial(object: Partial<_127.DVPairs>): _127.DVPairs;
                fromAmino(object: _127.DVPairsAmino): _127.DVPairs;
                toAmino(message: _127.DVPairs): _127.DVPairsAmino;
                fromAminoMsg(object: _127.DVPairsAminoMsg): _127.DVPairs;
                toAminoMsg(message: _127.DVPairs): _127.DVPairsAminoMsg;
                fromProtoMsg(message: _127.DVPairsProtoMsg): _127.DVPairs;
                toProto(message: _127.DVPairs): Uint8Array;
                toProtoMsg(message: _127.DVPairs): _127.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _127.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.DVVTriplet;
                fromPartial(object: Partial<_127.DVVTriplet>): _127.DVVTriplet;
                fromAmino(object: _127.DVVTripletAmino): _127.DVVTriplet;
                toAmino(message: _127.DVVTriplet): _127.DVVTripletAmino;
                fromAminoMsg(object: _127.DVVTripletAminoMsg): _127.DVVTriplet;
                toAminoMsg(message: _127.DVVTriplet): _127.DVVTripletAminoMsg;
                fromProtoMsg(message: _127.DVVTripletProtoMsg): _127.DVVTriplet;
                toProto(message: _127.DVVTriplet): Uint8Array;
                toProtoMsg(message: _127.DVVTriplet): _127.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _127.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.DVVTriplets;
                fromPartial(object: Partial<_127.DVVTriplets>): _127.DVVTriplets;
                fromAmino(object: _127.DVVTripletsAmino): _127.DVVTriplets;
                toAmino(message: _127.DVVTriplets): _127.DVVTripletsAmino;
                fromAminoMsg(object: _127.DVVTripletsAminoMsg): _127.DVVTriplets;
                toAminoMsg(message: _127.DVVTriplets): _127.DVVTripletsAminoMsg;
                fromProtoMsg(message: _127.DVVTripletsProtoMsg): _127.DVVTriplets;
                toProto(message: _127.DVVTriplets): Uint8Array;
                toProtoMsg(message: _127.DVVTriplets): _127.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _127.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Delegation;
                fromPartial(object: Partial<_127.Delegation>): _127.Delegation;
                fromAmino(object: _127.DelegationAmino): _127.Delegation;
                toAmino(message: _127.Delegation): _127.DelegationAmino;
                fromAminoMsg(object: _127.DelegationAminoMsg): _127.Delegation;
                toAminoMsg(message: _127.Delegation): _127.DelegationAminoMsg;
                fromProtoMsg(message: _127.DelegationProtoMsg): _127.Delegation;
                toProto(message: _127.Delegation): Uint8Array;
                toProtoMsg(message: _127.Delegation): _127.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _127.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.UnbondingDelegation;
                fromPartial(object: Partial<_127.UnbondingDelegation>): _127.UnbondingDelegation;
                fromAmino(object: _127.UnbondingDelegationAmino): _127.UnbondingDelegation;
                toAmino(message: _127.UnbondingDelegation): _127.UnbondingDelegationAmino;
                fromAminoMsg(object: _127.UnbondingDelegationAminoMsg): _127.UnbondingDelegation;
                toAminoMsg(message: _127.UnbondingDelegation): _127.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _127.UnbondingDelegationProtoMsg): _127.UnbondingDelegation;
                toProto(message: _127.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _127.UnbondingDelegation): _127.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _127.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.UnbondingDelegationEntry;
                fromPartial(object: Partial<_127.UnbondingDelegationEntry>): _127.UnbondingDelegationEntry;
                fromAmino(object: _127.UnbondingDelegationEntryAmino): _127.UnbondingDelegationEntry;
                toAmino(message: _127.UnbondingDelegationEntry): _127.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _127.UnbondingDelegationEntryAminoMsg): _127.UnbondingDelegationEntry;
                toAminoMsg(message: _127.UnbondingDelegationEntry): _127.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _127.UnbondingDelegationEntryProtoMsg): _127.UnbondingDelegationEntry;
                toProto(message: _127.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _127.UnbondingDelegationEntry): _127.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _127.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.RedelegationEntry;
                fromPartial(object: Partial<_127.RedelegationEntry>): _127.RedelegationEntry;
                fromAmino(object: _127.RedelegationEntryAmino): _127.RedelegationEntry;
                toAmino(message: _127.RedelegationEntry): _127.RedelegationEntryAmino;
                fromAminoMsg(object: _127.RedelegationEntryAminoMsg): _127.RedelegationEntry;
                toAminoMsg(message: _127.RedelegationEntry): _127.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _127.RedelegationEntryProtoMsg): _127.RedelegationEntry;
                toProto(message: _127.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _127.RedelegationEntry): _127.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _127.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Redelegation;
                fromPartial(object: Partial<_127.Redelegation>): _127.Redelegation;
                fromAmino(object: _127.RedelegationAmino): _127.Redelegation;
                toAmino(message: _127.Redelegation): _127.RedelegationAmino;
                fromAminoMsg(object: _127.RedelegationAminoMsg): _127.Redelegation;
                toAminoMsg(message: _127.Redelegation): _127.RedelegationAminoMsg;
                fromProtoMsg(message: _127.RedelegationProtoMsg): _127.Redelegation;
                toProto(message: _127.Redelegation): Uint8Array;
                toProtoMsg(message: _127.Redelegation): _127.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _127.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Params;
                fromPartial(object: Partial<_127.Params>): _127.Params;
                fromAmino(object: _127.ParamsAmino): _127.Params;
                toAmino(message: _127.Params): _127.ParamsAmino;
                fromAminoMsg(object: _127.ParamsAminoMsg): _127.Params;
                toAminoMsg(message: _127.Params): _127.ParamsAminoMsg;
                fromProtoMsg(message: _127.ParamsProtoMsg): _127.Params;
                toProto(message: _127.Params): Uint8Array;
                toProtoMsg(message: _127.Params): _127.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _127.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.DelegationResponse;
                fromPartial(object: Partial<_127.DelegationResponse>): _127.DelegationResponse;
                fromAmino(object: _127.DelegationResponseAmino): _127.DelegationResponse;
                toAmino(message: _127.DelegationResponse): _127.DelegationResponseAmino;
                fromAminoMsg(object: _127.DelegationResponseAminoMsg): _127.DelegationResponse;
                toAminoMsg(message: _127.DelegationResponse): _127.DelegationResponseAminoMsg;
                fromProtoMsg(message: _127.DelegationResponseProtoMsg): _127.DelegationResponse;
                toProto(message: _127.DelegationResponse): Uint8Array;
                toProtoMsg(message: _127.DelegationResponse): _127.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _127.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.RedelegationEntryResponse;
                fromPartial(object: Partial<_127.RedelegationEntryResponse>): _127.RedelegationEntryResponse;
                fromAmino(object: _127.RedelegationEntryResponseAmino): _127.RedelegationEntryResponse;
                toAmino(message: _127.RedelegationEntryResponse): _127.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _127.RedelegationEntryResponseAminoMsg): _127.RedelegationEntryResponse;
                toAminoMsg(message: _127.RedelegationEntryResponse): _127.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _127.RedelegationEntryResponseProtoMsg): _127.RedelegationEntryResponse;
                toProto(message: _127.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _127.RedelegationEntryResponse): _127.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _127.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.RedelegationResponse;
                fromPartial(object: Partial<_127.RedelegationResponse>): _127.RedelegationResponse;
                fromAmino(object: _127.RedelegationResponseAmino): _127.RedelegationResponse;
                toAmino(message: _127.RedelegationResponse): _127.RedelegationResponseAmino;
                fromAminoMsg(object: _127.RedelegationResponseAminoMsg): _127.RedelegationResponse;
                toAminoMsg(message: _127.RedelegationResponse): _127.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _127.RedelegationResponseProtoMsg): _127.RedelegationResponse;
                toProto(message: _127.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _127.RedelegationResponse): _127.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _127.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Pool;
                fromPartial(object: Partial<_127.Pool>): _127.Pool;
                fromAmino(object: _127.PoolAmino): _127.Pool;
                toAmino(message: _127.Pool): _127.PoolAmino;
                fromAminoMsg(object: _127.PoolAminoMsg): _127.Pool;
                toAminoMsg(message: _127.Pool): _127.PoolAminoMsg;
                fromProtoMsg(message: _127.PoolProtoMsg): _127.Pool;
                toProto(message: _127.Pool): Uint8Array;
                toProtoMsg(message: _127.Pool): _127.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _126.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryValidatorsRequest;
                fromPartial(object: Partial<_126.QueryValidatorsRequest>): _126.QueryValidatorsRequest;
                fromAmino(object: _126.QueryValidatorsRequestAmino): _126.QueryValidatorsRequest;
                toAmino(message: _126.QueryValidatorsRequest): _126.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _126.QueryValidatorsRequestAminoMsg): _126.QueryValidatorsRequest;
                toAminoMsg(message: _126.QueryValidatorsRequest): _126.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryValidatorsRequestProtoMsg): _126.QueryValidatorsRequest;
                toProto(message: _126.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryValidatorsRequest): _126.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _126.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryValidatorsResponse;
                fromPartial(object: Partial<_126.QueryValidatorsResponse>): _126.QueryValidatorsResponse;
                fromAmino(object: _126.QueryValidatorsResponseAmino): _126.QueryValidatorsResponse;
                toAmino(message: _126.QueryValidatorsResponse): _126.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _126.QueryValidatorsResponseAminoMsg): _126.QueryValidatorsResponse;
                toAminoMsg(message: _126.QueryValidatorsResponse): _126.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryValidatorsResponseProtoMsg): _126.QueryValidatorsResponse;
                toProto(message: _126.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryValidatorsResponse): _126.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _126.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryValidatorRequest;
                fromPartial(object: Partial<_126.QueryValidatorRequest>): _126.QueryValidatorRequest;
                fromAmino(object: _126.QueryValidatorRequestAmino): _126.QueryValidatorRequest;
                toAmino(message: _126.QueryValidatorRequest): _126.QueryValidatorRequestAmino;
                fromAminoMsg(object: _126.QueryValidatorRequestAminoMsg): _126.QueryValidatorRequest;
                toAminoMsg(message: _126.QueryValidatorRequest): _126.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _126.QueryValidatorRequestProtoMsg): _126.QueryValidatorRequest;
                toProto(message: _126.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _126.QueryValidatorRequest): _126.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _126.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryValidatorResponse;
                fromPartial(object: Partial<_126.QueryValidatorResponse>): _126.QueryValidatorResponse;
                fromAmino(object: _126.QueryValidatorResponseAmino): _126.QueryValidatorResponse;
                toAmino(message: _126.QueryValidatorResponse): _126.QueryValidatorResponseAmino;
                fromAminoMsg(object: _126.QueryValidatorResponseAminoMsg): _126.QueryValidatorResponse;
                toAminoMsg(message: _126.QueryValidatorResponse): _126.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _126.QueryValidatorResponseProtoMsg): _126.QueryValidatorResponse;
                toProto(message: _126.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _126.QueryValidatorResponse): _126.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _126.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_126.QueryValidatorDelegationsRequest>): _126.QueryValidatorDelegationsRequest;
                fromAmino(object: _126.QueryValidatorDelegationsRequestAmino): _126.QueryValidatorDelegationsRequest;
                toAmino(message: _126.QueryValidatorDelegationsRequest): _126.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _126.QueryValidatorDelegationsRequestAminoMsg): _126.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _126.QueryValidatorDelegationsRequest): _126.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryValidatorDelegationsRequestProtoMsg): _126.QueryValidatorDelegationsRequest;
                toProto(message: _126.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryValidatorDelegationsRequest): _126.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _126.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_126.QueryValidatorDelegationsResponse>): _126.QueryValidatorDelegationsResponse;
                fromAmino(object: _126.QueryValidatorDelegationsResponseAmino): _126.QueryValidatorDelegationsResponse;
                toAmino(message: _126.QueryValidatorDelegationsResponse): _126.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _126.QueryValidatorDelegationsResponseAminoMsg): _126.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _126.QueryValidatorDelegationsResponse): _126.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryValidatorDelegationsResponseProtoMsg): _126.QueryValidatorDelegationsResponse;
                toProto(message: _126.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryValidatorDelegationsResponse): _126.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _126.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_126.QueryValidatorUnbondingDelegationsRequest>): _126.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _126.QueryValidatorUnbondingDelegationsRequestAmino): _126.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _126.QueryValidatorUnbondingDelegationsRequest): _126.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _126.QueryValidatorUnbondingDelegationsRequestAminoMsg): _126.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _126.QueryValidatorUnbondingDelegationsRequest): _126.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryValidatorUnbondingDelegationsRequestProtoMsg): _126.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _126.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryValidatorUnbondingDelegationsRequest): _126.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _126.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_126.QueryValidatorUnbondingDelegationsResponse>): _126.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _126.QueryValidatorUnbondingDelegationsResponseAmino): _126.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _126.QueryValidatorUnbondingDelegationsResponse): _126.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _126.QueryValidatorUnbondingDelegationsResponseAminoMsg): _126.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _126.QueryValidatorUnbondingDelegationsResponse): _126.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryValidatorUnbondingDelegationsResponseProtoMsg): _126.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _126.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryValidatorUnbondingDelegationsResponse): _126.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _126.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryDelegationRequest;
                fromPartial(object: Partial<_126.QueryDelegationRequest>): _126.QueryDelegationRequest;
                fromAmino(object: _126.QueryDelegationRequestAmino): _126.QueryDelegationRequest;
                toAmino(message: _126.QueryDelegationRequest): _126.QueryDelegationRequestAmino;
                fromAminoMsg(object: _126.QueryDelegationRequestAminoMsg): _126.QueryDelegationRequest;
                toAminoMsg(message: _126.QueryDelegationRequest): _126.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _126.QueryDelegationRequestProtoMsg): _126.QueryDelegationRequest;
                toProto(message: _126.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _126.QueryDelegationRequest): _126.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _126.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryDelegationResponse;
                fromPartial(object: Partial<_126.QueryDelegationResponse>): _126.QueryDelegationResponse;
                fromAmino(object: _126.QueryDelegationResponseAmino): _126.QueryDelegationResponse;
                toAmino(message: _126.QueryDelegationResponse): _126.QueryDelegationResponseAmino;
                fromAminoMsg(object: _126.QueryDelegationResponseAminoMsg): _126.QueryDelegationResponse;
                toAminoMsg(message: _126.QueryDelegationResponse): _126.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _126.QueryDelegationResponseProtoMsg): _126.QueryDelegationResponse;
                toProto(message: _126.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _126.QueryDelegationResponse): _126.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _126.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_126.QueryUnbondingDelegationRequest>): _126.QueryUnbondingDelegationRequest;
                fromAmino(object: _126.QueryUnbondingDelegationRequestAmino): _126.QueryUnbondingDelegationRequest;
                toAmino(message: _126.QueryUnbondingDelegationRequest): _126.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _126.QueryUnbondingDelegationRequestAminoMsg): _126.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _126.QueryUnbondingDelegationRequest): _126.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _126.QueryUnbondingDelegationRequestProtoMsg): _126.QueryUnbondingDelegationRequest;
                toProto(message: _126.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _126.QueryUnbondingDelegationRequest): _126.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _126.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_126.QueryUnbondingDelegationResponse>): _126.QueryUnbondingDelegationResponse;
                fromAmino(object: _126.QueryUnbondingDelegationResponseAmino): _126.QueryUnbondingDelegationResponse;
                toAmino(message: _126.QueryUnbondingDelegationResponse): _126.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _126.QueryUnbondingDelegationResponseAminoMsg): _126.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _126.QueryUnbondingDelegationResponse): _126.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _126.QueryUnbondingDelegationResponseProtoMsg): _126.QueryUnbondingDelegationResponse;
                toProto(message: _126.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _126.QueryUnbondingDelegationResponse): _126.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _126.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_126.QueryDelegatorDelegationsRequest>): _126.QueryDelegatorDelegationsRequest;
                fromAmino(object: _126.QueryDelegatorDelegationsRequestAmino): _126.QueryDelegatorDelegationsRequest;
                toAmino(message: _126.QueryDelegatorDelegationsRequest): _126.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _126.QueryDelegatorDelegationsRequestAminoMsg): _126.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _126.QueryDelegatorDelegationsRequest): _126.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryDelegatorDelegationsRequestProtoMsg): _126.QueryDelegatorDelegationsRequest;
                toProto(message: _126.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryDelegatorDelegationsRequest): _126.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _126.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_126.QueryDelegatorDelegationsResponse>): _126.QueryDelegatorDelegationsResponse;
                fromAmino(object: _126.QueryDelegatorDelegationsResponseAmino): _126.QueryDelegatorDelegationsResponse;
                toAmino(message: _126.QueryDelegatorDelegationsResponse): _126.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _126.QueryDelegatorDelegationsResponseAminoMsg): _126.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _126.QueryDelegatorDelegationsResponse): _126.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryDelegatorDelegationsResponseProtoMsg): _126.QueryDelegatorDelegationsResponse;
                toProto(message: _126.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryDelegatorDelegationsResponse): _126.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _126.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_126.QueryDelegatorUnbondingDelegationsRequest>): _126.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _126.QueryDelegatorUnbondingDelegationsRequestAmino): _126.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _126.QueryDelegatorUnbondingDelegationsRequest): _126.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _126.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _126.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _126.QueryDelegatorUnbondingDelegationsRequest): _126.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _126.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _126.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryDelegatorUnbondingDelegationsRequest): _126.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _126.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_126.QueryDelegatorUnbondingDelegationsResponse>): _126.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _126.QueryDelegatorUnbondingDelegationsResponseAmino): _126.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _126.QueryDelegatorUnbondingDelegationsResponse): _126.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _126.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _126.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _126.QueryDelegatorUnbondingDelegationsResponse): _126.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _126.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _126.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryDelegatorUnbondingDelegationsResponse): _126.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _126.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryRedelegationsRequest;
                fromPartial(object: Partial<_126.QueryRedelegationsRequest>): _126.QueryRedelegationsRequest;
                fromAmino(object: _126.QueryRedelegationsRequestAmino): _126.QueryRedelegationsRequest;
                toAmino(message: _126.QueryRedelegationsRequest): _126.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _126.QueryRedelegationsRequestAminoMsg): _126.QueryRedelegationsRequest;
                toAminoMsg(message: _126.QueryRedelegationsRequest): _126.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryRedelegationsRequestProtoMsg): _126.QueryRedelegationsRequest;
                toProto(message: _126.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryRedelegationsRequest): _126.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _126.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryRedelegationsResponse;
                fromPartial(object: Partial<_126.QueryRedelegationsResponse>): _126.QueryRedelegationsResponse;
                fromAmino(object: _126.QueryRedelegationsResponseAmino): _126.QueryRedelegationsResponse;
                toAmino(message: _126.QueryRedelegationsResponse): _126.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _126.QueryRedelegationsResponseAminoMsg): _126.QueryRedelegationsResponse;
                toAminoMsg(message: _126.QueryRedelegationsResponse): _126.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryRedelegationsResponseProtoMsg): _126.QueryRedelegationsResponse;
                toProto(message: _126.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryRedelegationsResponse): _126.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _126.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_126.QueryDelegatorValidatorsRequest>): _126.QueryDelegatorValidatorsRequest;
                fromAmino(object: _126.QueryDelegatorValidatorsRequestAmino): _126.QueryDelegatorValidatorsRequest;
                toAmino(message: _126.QueryDelegatorValidatorsRequest): _126.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _126.QueryDelegatorValidatorsRequestAminoMsg): _126.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _126.QueryDelegatorValidatorsRequest): _126.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryDelegatorValidatorsRequestProtoMsg): _126.QueryDelegatorValidatorsRequest;
                toProto(message: _126.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryDelegatorValidatorsRequest): _126.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _126.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_126.QueryDelegatorValidatorsResponse>): _126.QueryDelegatorValidatorsResponse;
                fromAmino(object: _126.QueryDelegatorValidatorsResponseAmino): _126.QueryDelegatorValidatorsResponse;
                toAmino(message: _126.QueryDelegatorValidatorsResponse): _126.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _126.QueryDelegatorValidatorsResponseAminoMsg): _126.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _126.QueryDelegatorValidatorsResponse): _126.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryDelegatorValidatorsResponseProtoMsg): _126.QueryDelegatorValidatorsResponse;
                toProto(message: _126.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryDelegatorValidatorsResponse): _126.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _126.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_126.QueryDelegatorValidatorRequest>): _126.QueryDelegatorValidatorRequest;
                fromAmino(object: _126.QueryDelegatorValidatorRequestAmino): _126.QueryDelegatorValidatorRequest;
                toAmino(message: _126.QueryDelegatorValidatorRequest): _126.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _126.QueryDelegatorValidatorRequestAminoMsg): _126.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _126.QueryDelegatorValidatorRequest): _126.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _126.QueryDelegatorValidatorRequestProtoMsg): _126.QueryDelegatorValidatorRequest;
                toProto(message: _126.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _126.QueryDelegatorValidatorRequest): _126.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _126.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_126.QueryDelegatorValidatorResponse>): _126.QueryDelegatorValidatorResponse;
                fromAmino(object: _126.QueryDelegatorValidatorResponseAmino): _126.QueryDelegatorValidatorResponse;
                toAmino(message: _126.QueryDelegatorValidatorResponse): _126.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _126.QueryDelegatorValidatorResponseAminoMsg): _126.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _126.QueryDelegatorValidatorResponse): _126.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _126.QueryDelegatorValidatorResponseProtoMsg): _126.QueryDelegatorValidatorResponse;
                toProto(message: _126.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _126.QueryDelegatorValidatorResponse): _126.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _126.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_126.QueryHistoricalInfoRequest>): _126.QueryHistoricalInfoRequest;
                fromAmino(object: _126.QueryHistoricalInfoRequestAmino): _126.QueryHistoricalInfoRequest;
                toAmino(message: _126.QueryHistoricalInfoRequest): _126.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _126.QueryHistoricalInfoRequestAminoMsg): _126.QueryHistoricalInfoRequest;
                toAminoMsg(message: _126.QueryHistoricalInfoRequest): _126.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _126.QueryHistoricalInfoRequestProtoMsg): _126.QueryHistoricalInfoRequest;
                toProto(message: _126.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _126.QueryHistoricalInfoRequest): _126.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _126.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_126.QueryHistoricalInfoResponse>): _126.QueryHistoricalInfoResponse;
                fromAmino(object: _126.QueryHistoricalInfoResponseAmino): _126.QueryHistoricalInfoResponse;
                toAmino(message: _126.QueryHistoricalInfoResponse): _126.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _126.QueryHistoricalInfoResponseAminoMsg): _126.QueryHistoricalInfoResponse;
                toAminoMsg(message: _126.QueryHistoricalInfoResponse): _126.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _126.QueryHistoricalInfoResponseProtoMsg): _126.QueryHistoricalInfoResponse;
                toProto(message: _126.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _126.QueryHistoricalInfoResponse): _126.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _126.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _126.QueryPoolRequest;
                fromPartial(_: Partial<_126.QueryPoolRequest>): _126.QueryPoolRequest;
                fromAmino(_: _126.QueryPoolRequestAmino): _126.QueryPoolRequest;
                toAmino(_: _126.QueryPoolRequest): _126.QueryPoolRequestAmino;
                fromAminoMsg(object: _126.QueryPoolRequestAminoMsg): _126.QueryPoolRequest;
                toAminoMsg(message: _126.QueryPoolRequest): _126.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _126.QueryPoolRequestProtoMsg): _126.QueryPoolRequest;
                toProto(message: _126.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _126.QueryPoolRequest): _126.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _126.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryPoolResponse;
                fromPartial(object: Partial<_126.QueryPoolResponse>): _126.QueryPoolResponse;
                fromAmino(object: _126.QueryPoolResponseAmino): _126.QueryPoolResponse;
                toAmino(message: _126.QueryPoolResponse): _126.QueryPoolResponseAmino;
                fromAminoMsg(object: _126.QueryPoolResponseAminoMsg): _126.QueryPoolResponse;
                toAminoMsg(message: _126.QueryPoolResponse): _126.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _126.QueryPoolResponseProtoMsg): _126.QueryPoolResponse;
                toProto(message: _126.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _126.QueryPoolResponse): _126.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _126.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _126.QueryParamsRequest;
                fromPartial(_: Partial<_126.QueryParamsRequest>): _126.QueryParamsRequest;
                fromAmino(_: _126.QueryParamsRequestAmino): _126.QueryParamsRequest;
                toAmino(_: _126.QueryParamsRequest): _126.QueryParamsRequestAmino;
                fromAminoMsg(object: _126.QueryParamsRequestAminoMsg): _126.QueryParamsRequest;
                toAminoMsg(message: _126.QueryParamsRequest): _126.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryParamsRequestProtoMsg): _126.QueryParamsRequest;
                toProto(message: _126.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryParamsRequest): _126.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _126.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryParamsResponse;
                fromPartial(object: Partial<_126.QueryParamsResponse>): _126.QueryParamsResponse;
                fromAmino(object: _126.QueryParamsResponseAmino): _126.QueryParamsResponse;
                toAmino(message: _126.QueryParamsResponse): _126.QueryParamsResponseAmino;
                fromAminoMsg(object: _126.QueryParamsResponseAminoMsg): _126.QueryParamsResponse;
                toAminoMsg(message: _126.QueryParamsResponse): _126.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryParamsResponseProtoMsg): _126.QueryParamsResponse;
                toProto(message: _126.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryParamsResponse): _126.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _125.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.GenesisState;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
                fromAmino(object: _125.GenesisStateAmino): _125.GenesisState;
                toAmino(message: _125.GenesisState): _125.GenesisStateAmino;
                fromAminoMsg(object: _125.GenesisStateAminoMsg): _125.GenesisState;
                toAminoMsg(message: _125.GenesisState): _125.GenesisStateAminoMsg;
                fromProtoMsg(message: _125.GenesisStateProtoMsg): _125.GenesisState;
                toProto(message: _125.GenesisState): Uint8Array;
                toProtoMsg(message: _125.GenesisState): _125.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _125.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.LastValidatorPower;
                fromPartial(object: Partial<_125.LastValidatorPower>): _125.LastValidatorPower;
                fromAmino(object: _125.LastValidatorPowerAmino): _125.LastValidatorPower;
                toAmino(message: _125.LastValidatorPower): _125.LastValidatorPowerAmino;
                fromAminoMsg(object: _125.LastValidatorPowerAminoMsg): _125.LastValidatorPower;
                toAminoMsg(message: _125.LastValidatorPower): _125.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _125.LastValidatorPowerProtoMsg): _125.LastValidatorPower;
                toProto(message: _125.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _125.LastValidatorPower): _125.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _124.AuthorizationType;
            authorizationTypeToJSON(object: _124.AuthorizationType): string;
            AuthorizationType: typeof _124.AuthorizationType;
            AuthorizationTypeSDKType: typeof _124.AuthorizationType;
            AuthorizationTypeAmino: typeof _124.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _124.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.StakeAuthorization;
                fromPartial(object: Partial<_124.StakeAuthorization>): _124.StakeAuthorization;
                fromAmino(object: _124.StakeAuthorizationAmino): _124.StakeAuthorization;
                toAmino(message: _124.StakeAuthorization): _124.StakeAuthorizationAmino;
                fromAminoMsg(object: _124.StakeAuthorizationAminoMsg): _124.StakeAuthorization;
                toAminoMsg(message: _124.StakeAuthorization): _124.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _124.StakeAuthorizationProtoMsg): _124.StakeAuthorization;
                toProto(message: _124.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _124.StakeAuthorization): _124.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _124.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.StakeAuthorization_Validators;
                fromPartial(object: Partial<_124.StakeAuthorization_Validators>): _124.StakeAuthorization_Validators;
                fromAmino(object: _124.StakeAuthorization_ValidatorsAmino): _124.StakeAuthorization_Validators;
                toAmino(message: _124.StakeAuthorization_Validators): _124.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _124.StakeAuthorization_ValidatorsAminoMsg): _124.StakeAuthorization_Validators;
                toAminoMsg(message: _124.StakeAuthorization_Validators): _124.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _124.StakeAuthorization_ValidatorsProtoMsg): _124.StakeAuthorization_Validators;
                toProto(message: _124.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _124.StakeAuthorization_Validators): _124.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
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
            ServiceClientImpl: typeof _249.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _130.SimulateRequest): Promise<_130.SimulateResponse>;
                getTx(request: _130.GetTxRequest): Promise<_130.GetTxResponse>;
                broadcastTx(request: _130.BroadcastTxRequest): Promise<_130.BroadcastTxResponse>;
                getTxsEvent(request: _130.GetTxsEventRequest): Promise<_130.GetTxsEventResponse>;
                getBlockWithTxs(request: _130.GetBlockWithTxsRequest): Promise<_130.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _230.LCDQueryClient;
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
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _263.MsgClientImpl;
            QueryClientImpl: typeof _250.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _132.QueryCurrentPlanRequest): Promise<_132.QueryCurrentPlanResponse>;
                appliedPlan(request: _132.QueryAppliedPlanRequest): Promise<_132.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _132.QueryUpgradedConsensusStateRequest): Promise<_132.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _132.QueryModuleVersionsRequest): Promise<_132.QueryModuleVersionsResponse>;
                authority(request?: _132.QueryAuthorityRequest): Promise<_132.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _231.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _133.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _133.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _133.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _133.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _133.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _133.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _133.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _133.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _133.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _133.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _133.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _133.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _133.MsgSoftwareUpgrade) => _133.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _133.MsgSoftwareUpgradeAmino) => _133.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _133.MsgCancelUpgrade) => _133.MsgCancelUpgradeAmino;
                    fromAmino: (object: _133.MsgCancelUpgradeAmino) => _133.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _134.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Plan;
                fromPartial(object: Partial<_134.Plan>): _134.Plan;
                fromAmino(object: _134.PlanAmino): _134.Plan;
                toAmino(message: _134.Plan): _134.PlanAmino;
                fromAminoMsg(object: _134.PlanAminoMsg): _134.Plan;
                toAminoMsg(message: _134.Plan): _134.PlanAminoMsg;
                fromProtoMsg(message: _134.PlanProtoMsg): _134.Plan;
                toProto(message: _134.Plan): Uint8Array;
                toProtoMsg(message: _134.Plan): _134.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _134.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_134.SoftwareUpgradeProposal>): _134.SoftwareUpgradeProposal;
                fromAmino(object: _134.SoftwareUpgradeProposalAmino): _134.SoftwareUpgradeProposal;
                toAmino(message: _134.SoftwareUpgradeProposal): _134.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _134.SoftwareUpgradeProposalAminoMsg): _134.SoftwareUpgradeProposal;
                toAminoMsg(message: _134.SoftwareUpgradeProposal): _134.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _134.SoftwareUpgradeProposalProtoMsg): _134.SoftwareUpgradeProposal;
                toProto(message: _134.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _134.SoftwareUpgradeProposal): _134.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _134.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_134.CancelSoftwareUpgradeProposal>): _134.CancelSoftwareUpgradeProposal;
                fromAmino(object: _134.CancelSoftwareUpgradeProposalAmino): _134.CancelSoftwareUpgradeProposal;
                toAmino(message: _134.CancelSoftwareUpgradeProposal): _134.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _134.CancelSoftwareUpgradeProposalAminoMsg): _134.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _134.CancelSoftwareUpgradeProposal): _134.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _134.CancelSoftwareUpgradeProposalProtoMsg): _134.CancelSoftwareUpgradeProposal;
                toProto(message: _134.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _134.CancelSoftwareUpgradeProposal): _134.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _134.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.ModuleVersion;
                fromPartial(object: Partial<_134.ModuleVersion>): _134.ModuleVersion;
                fromAmino(object: _134.ModuleVersionAmino): _134.ModuleVersion;
                toAmino(message: _134.ModuleVersion): _134.ModuleVersionAmino;
                fromAminoMsg(object: _134.ModuleVersionAminoMsg): _134.ModuleVersion;
                toAminoMsg(message: _134.ModuleVersion): _134.ModuleVersionAminoMsg;
                fromProtoMsg(message: _134.ModuleVersionProtoMsg): _134.ModuleVersion;
                toProto(message: _134.ModuleVersion): Uint8Array;
                toProtoMsg(message: _134.ModuleVersion): _134.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _133.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_133.MsgSoftwareUpgrade>): _133.MsgSoftwareUpgrade;
                fromAmino(object: _133.MsgSoftwareUpgradeAmino): _133.MsgSoftwareUpgrade;
                toAmino(message: _133.MsgSoftwareUpgrade): _133.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _133.MsgSoftwareUpgradeAminoMsg): _133.MsgSoftwareUpgrade;
                toAminoMsg(message: _133.MsgSoftwareUpgrade): _133.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _133.MsgSoftwareUpgradeProtoMsg): _133.MsgSoftwareUpgrade;
                toProto(message: _133.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _133.MsgSoftwareUpgrade): _133.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _133.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_133.MsgSoftwareUpgradeResponse>): _133.MsgSoftwareUpgradeResponse;
                fromAmino(_: _133.MsgSoftwareUpgradeResponseAmino): _133.MsgSoftwareUpgradeResponse;
                toAmino(_: _133.MsgSoftwareUpgradeResponse): _133.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _133.MsgSoftwareUpgradeResponseAminoMsg): _133.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _133.MsgSoftwareUpgradeResponse): _133.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _133.MsgSoftwareUpgradeResponseProtoMsg): _133.MsgSoftwareUpgradeResponse;
                toProto(message: _133.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _133.MsgSoftwareUpgradeResponse): _133.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _133.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgCancelUpgrade;
                fromPartial(object: Partial<_133.MsgCancelUpgrade>): _133.MsgCancelUpgrade;
                fromAmino(object: _133.MsgCancelUpgradeAmino): _133.MsgCancelUpgrade;
                toAmino(message: _133.MsgCancelUpgrade): _133.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _133.MsgCancelUpgradeAminoMsg): _133.MsgCancelUpgrade;
                toAminoMsg(message: _133.MsgCancelUpgrade): _133.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _133.MsgCancelUpgradeProtoMsg): _133.MsgCancelUpgrade;
                toProto(message: _133.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _133.MsgCancelUpgrade): _133.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _133.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_133.MsgCancelUpgradeResponse>): _133.MsgCancelUpgradeResponse;
                fromAmino(_: _133.MsgCancelUpgradeResponseAmino): _133.MsgCancelUpgradeResponse;
                toAmino(_: _133.MsgCancelUpgradeResponse): _133.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _133.MsgCancelUpgradeResponseAminoMsg): _133.MsgCancelUpgradeResponse;
                toAminoMsg(message: _133.MsgCancelUpgradeResponse): _133.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _133.MsgCancelUpgradeResponseProtoMsg): _133.MsgCancelUpgradeResponse;
                toProto(message: _133.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _133.MsgCancelUpgradeResponse): _133.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _132.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _132.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_132.QueryCurrentPlanRequest>): _132.QueryCurrentPlanRequest;
                fromAmino(_: _132.QueryCurrentPlanRequestAmino): _132.QueryCurrentPlanRequest;
                toAmino(_: _132.QueryCurrentPlanRequest): _132.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _132.QueryCurrentPlanRequestAminoMsg): _132.QueryCurrentPlanRequest;
                toAminoMsg(message: _132.QueryCurrentPlanRequest): _132.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _132.QueryCurrentPlanRequestProtoMsg): _132.QueryCurrentPlanRequest;
                toProto(message: _132.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _132.QueryCurrentPlanRequest): _132.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _132.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_132.QueryCurrentPlanResponse>): _132.QueryCurrentPlanResponse;
                fromAmino(object: _132.QueryCurrentPlanResponseAmino): _132.QueryCurrentPlanResponse;
                toAmino(message: _132.QueryCurrentPlanResponse): _132.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _132.QueryCurrentPlanResponseAminoMsg): _132.QueryCurrentPlanResponse;
                toAminoMsg(message: _132.QueryCurrentPlanResponse): _132.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _132.QueryCurrentPlanResponseProtoMsg): _132.QueryCurrentPlanResponse;
                toProto(message: _132.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _132.QueryCurrentPlanResponse): _132.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _132.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_132.QueryAppliedPlanRequest>): _132.QueryAppliedPlanRequest;
                fromAmino(object: _132.QueryAppliedPlanRequestAmino): _132.QueryAppliedPlanRequest;
                toAmino(message: _132.QueryAppliedPlanRequest): _132.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _132.QueryAppliedPlanRequestAminoMsg): _132.QueryAppliedPlanRequest;
                toAminoMsg(message: _132.QueryAppliedPlanRequest): _132.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _132.QueryAppliedPlanRequestProtoMsg): _132.QueryAppliedPlanRequest;
                toProto(message: _132.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _132.QueryAppliedPlanRequest): _132.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _132.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_132.QueryAppliedPlanResponse>): _132.QueryAppliedPlanResponse;
                fromAmino(object: _132.QueryAppliedPlanResponseAmino): _132.QueryAppliedPlanResponse;
                toAmino(message: _132.QueryAppliedPlanResponse): _132.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _132.QueryAppliedPlanResponseAminoMsg): _132.QueryAppliedPlanResponse;
                toAminoMsg(message: _132.QueryAppliedPlanResponse): _132.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _132.QueryAppliedPlanResponseProtoMsg): _132.QueryAppliedPlanResponse;
                toProto(message: _132.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _132.QueryAppliedPlanResponse): _132.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _132.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_132.QueryUpgradedConsensusStateRequest>): _132.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _132.QueryUpgradedConsensusStateRequestAmino): _132.QueryUpgradedConsensusStateRequest;
                toAmino(message: _132.QueryUpgradedConsensusStateRequest): _132.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _132.QueryUpgradedConsensusStateRequestAminoMsg): _132.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _132.QueryUpgradedConsensusStateRequest): _132.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _132.QueryUpgradedConsensusStateRequestProtoMsg): _132.QueryUpgradedConsensusStateRequest;
                toProto(message: _132.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _132.QueryUpgradedConsensusStateRequest): _132.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _132.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_132.QueryUpgradedConsensusStateResponse>): _132.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _132.QueryUpgradedConsensusStateResponseAmino): _132.QueryUpgradedConsensusStateResponse;
                toAmino(message: _132.QueryUpgradedConsensusStateResponse): _132.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _132.QueryUpgradedConsensusStateResponseAminoMsg): _132.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _132.QueryUpgradedConsensusStateResponse): _132.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _132.QueryUpgradedConsensusStateResponseProtoMsg): _132.QueryUpgradedConsensusStateResponse;
                toProto(message: _132.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _132.QueryUpgradedConsensusStateResponse): _132.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _132.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_132.QueryModuleVersionsRequest>): _132.QueryModuleVersionsRequest;
                fromAmino(object: _132.QueryModuleVersionsRequestAmino): _132.QueryModuleVersionsRequest;
                toAmino(message: _132.QueryModuleVersionsRequest): _132.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _132.QueryModuleVersionsRequestAminoMsg): _132.QueryModuleVersionsRequest;
                toAminoMsg(message: _132.QueryModuleVersionsRequest): _132.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryModuleVersionsRequestProtoMsg): _132.QueryModuleVersionsRequest;
                toProto(message: _132.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryModuleVersionsRequest): _132.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _132.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_132.QueryModuleVersionsResponse>): _132.QueryModuleVersionsResponse;
                fromAmino(object: _132.QueryModuleVersionsResponseAmino): _132.QueryModuleVersionsResponse;
                toAmino(message: _132.QueryModuleVersionsResponse): _132.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _132.QueryModuleVersionsResponseAminoMsg): _132.QueryModuleVersionsResponse;
                toAminoMsg(message: _132.QueryModuleVersionsResponse): _132.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryModuleVersionsResponseProtoMsg): _132.QueryModuleVersionsResponse;
                toProto(message: _132.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryModuleVersionsResponse): _132.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _132.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _132.QueryAuthorityRequest;
                fromPartial(_: Partial<_132.QueryAuthorityRequest>): _132.QueryAuthorityRequest;
                fromAmino(_: _132.QueryAuthorityRequestAmino): _132.QueryAuthorityRequest;
                toAmino(_: _132.QueryAuthorityRequest): _132.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _132.QueryAuthorityRequestAminoMsg): _132.QueryAuthorityRequest;
                toAminoMsg(message: _132.QueryAuthorityRequest): _132.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _132.QueryAuthorityRequestProtoMsg): _132.QueryAuthorityRequest;
                toProto(message: _132.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _132.QueryAuthorityRequest): _132.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _132.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryAuthorityResponse;
                fromPartial(object: Partial<_132.QueryAuthorityResponse>): _132.QueryAuthorityResponse;
                fromAmino(object: _132.QueryAuthorityResponseAmino): _132.QueryAuthorityResponse;
                toAmino(message: _132.QueryAuthorityResponse): _132.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _132.QueryAuthorityResponseAminoMsg): _132.QueryAuthorityResponse;
                toAminoMsg(message: _132.QueryAuthorityResponse): _132.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _132.QueryAuthorityResponseProtoMsg): _132.QueryAuthorityResponse;
                toProto(message: _132.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _132.QueryAuthorityResponse): _132.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _264.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _135.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _135.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _135.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _135.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _135.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _135.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _135.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _135.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _135.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _135.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _135.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _135.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _135.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _135.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _135.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _135.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _135.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _135.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _135.MsgCreateVestingAccount) => _135.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _135.MsgCreateVestingAccountAmino) => _135.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _135.MsgCreatePermanentLockedAccount) => _135.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _135.MsgCreatePermanentLockedAccountAmino) => _135.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _135.MsgCreatePeriodicVestingAccount) => _135.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _135.MsgCreatePeriodicVestingAccountAmino) => _135.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _136.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.BaseVestingAccount;
                fromPartial(object: Partial<_136.BaseVestingAccount>): _136.BaseVestingAccount;
                fromAmino(object: _136.BaseVestingAccountAmino): _136.BaseVestingAccount;
                toAmino(message: _136.BaseVestingAccount): _136.BaseVestingAccountAmino;
                fromAminoMsg(object: _136.BaseVestingAccountAminoMsg): _136.BaseVestingAccount;
                toAminoMsg(message: _136.BaseVestingAccount): _136.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _136.BaseVestingAccountProtoMsg): _136.BaseVestingAccount;
                toProto(message: _136.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _136.BaseVestingAccount): _136.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _136.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.ContinuousVestingAccount;
                fromPartial(object: Partial<_136.ContinuousVestingAccount>): _136.ContinuousVestingAccount;
                fromAmino(object: _136.ContinuousVestingAccountAmino): _136.ContinuousVestingAccount;
                toAmino(message: _136.ContinuousVestingAccount): _136.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _136.ContinuousVestingAccountAminoMsg): _136.ContinuousVestingAccount;
                toAminoMsg(message: _136.ContinuousVestingAccount): _136.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _136.ContinuousVestingAccountProtoMsg): _136.ContinuousVestingAccount;
                toProto(message: _136.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _136.ContinuousVestingAccount): _136.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _136.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.DelayedVestingAccount;
                fromPartial(object: Partial<_136.DelayedVestingAccount>): _136.DelayedVestingAccount;
                fromAmino(object: _136.DelayedVestingAccountAmino): _136.DelayedVestingAccount;
                toAmino(message: _136.DelayedVestingAccount): _136.DelayedVestingAccountAmino;
                fromAminoMsg(object: _136.DelayedVestingAccountAminoMsg): _136.DelayedVestingAccount;
                toAminoMsg(message: _136.DelayedVestingAccount): _136.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _136.DelayedVestingAccountProtoMsg): _136.DelayedVestingAccount;
                toProto(message: _136.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _136.DelayedVestingAccount): _136.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _136.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.Period;
                fromPartial(object: Partial<_136.Period>): _136.Period;
                fromAmino(object: _136.PeriodAmino): _136.Period;
                toAmino(message: _136.Period): _136.PeriodAmino;
                fromAminoMsg(object: _136.PeriodAminoMsg): _136.Period;
                toAminoMsg(message: _136.Period): _136.PeriodAminoMsg;
                fromProtoMsg(message: _136.PeriodProtoMsg): _136.Period;
                toProto(message: _136.Period): Uint8Array;
                toProtoMsg(message: _136.Period): _136.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _136.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.PeriodicVestingAccount;
                fromPartial(object: Partial<_136.PeriodicVestingAccount>): _136.PeriodicVestingAccount;
                fromAmino(object: _136.PeriodicVestingAccountAmino): _136.PeriodicVestingAccount;
                toAmino(message: _136.PeriodicVestingAccount): _136.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _136.PeriodicVestingAccountAminoMsg): _136.PeriodicVestingAccount;
                toAminoMsg(message: _136.PeriodicVestingAccount): _136.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _136.PeriodicVestingAccountProtoMsg): _136.PeriodicVestingAccount;
                toProto(message: _136.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _136.PeriodicVestingAccount): _136.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _136.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.PermanentLockedAccount;
                fromPartial(object: Partial<_136.PermanentLockedAccount>): _136.PermanentLockedAccount;
                fromAmino(object: _136.PermanentLockedAccountAmino): _136.PermanentLockedAccount;
                toAmino(message: _136.PermanentLockedAccount): _136.PermanentLockedAccountAmino;
                fromAminoMsg(object: _136.PermanentLockedAccountAminoMsg): _136.PermanentLockedAccount;
                toAminoMsg(message: _136.PermanentLockedAccount): _136.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _136.PermanentLockedAccountProtoMsg): _136.PermanentLockedAccount;
                toProto(message: _136.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _136.PermanentLockedAccount): _136.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _135.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgCreateVestingAccount;
                fromPartial(object: Partial<_135.MsgCreateVestingAccount>): _135.MsgCreateVestingAccount;
                fromAmino(object: _135.MsgCreateVestingAccountAmino): _135.MsgCreateVestingAccount;
                toAmino(message: _135.MsgCreateVestingAccount): _135.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _135.MsgCreateVestingAccountAminoMsg): _135.MsgCreateVestingAccount;
                toAminoMsg(message: _135.MsgCreateVestingAccount): _135.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _135.MsgCreateVestingAccountProtoMsg): _135.MsgCreateVestingAccount;
                toProto(message: _135.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _135.MsgCreateVestingAccount): _135.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _135.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_135.MsgCreateVestingAccountResponse>): _135.MsgCreateVestingAccountResponse;
                fromAmino(_: _135.MsgCreateVestingAccountResponseAmino): _135.MsgCreateVestingAccountResponse;
                toAmino(_: _135.MsgCreateVestingAccountResponse): _135.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _135.MsgCreateVestingAccountResponseAminoMsg): _135.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _135.MsgCreateVestingAccountResponse): _135.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _135.MsgCreateVestingAccountResponseProtoMsg): _135.MsgCreateVestingAccountResponse;
                toProto(message: _135.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _135.MsgCreateVestingAccountResponse): _135.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _135.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_135.MsgCreatePermanentLockedAccount>): _135.MsgCreatePermanentLockedAccount;
                fromAmino(object: _135.MsgCreatePermanentLockedAccountAmino): _135.MsgCreatePermanentLockedAccount;
                toAmino(message: _135.MsgCreatePermanentLockedAccount): _135.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _135.MsgCreatePermanentLockedAccountAminoMsg): _135.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _135.MsgCreatePermanentLockedAccount): _135.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _135.MsgCreatePermanentLockedAccountProtoMsg): _135.MsgCreatePermanentLockedAccount;
                toProto(message: _135.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _135.MsgCreatePermanentLockedAccount): _135.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _135.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_135.MsgCreatePermanentLockedAccountResponse>): _135.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _135.MsgCreatePermanentLockedAccountResponseAmino): _135.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _135.MsgCreatePermanentLockedAccountResponse): _135.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _135.MsgCreatePermanentLockedAccountResponseAminoMsg): _135.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _135.MsgCreatePermanentLockedAccountResponse): _135.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _135.MsgCreatePermanentLockedAccountResponseProtoMsg): _135.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _135.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _135.MsgCreatePermanentLockedAccountResponse): _135.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _135.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_135.MsgCreatePeriodicVestingAccount>): _135.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _135.MsgCreatePeriodicVestingAccountAmino): _135.MsgCreatePeriodicVestingAccount;
                toAmino(message: _135.MsgCreatePeriodicVestingAccount): _135.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _135.MsgCreatePeriodicVestingAccountAminoMsg): _135.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _135.MsgCreatePeriodicVestingAccount): _135.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _135.MsgCreatePeriodicVestingAccountProtoMsg): _135.MsgCreatePeriodicVestingAccount;
                toProto(message: _135.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _135.MsgCreatePeriodicVestingAccount): _135.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _135.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_135.MsgCreatePeriodicVestingAccountResponse>): _135.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _135.MsgCreatePeriodicVestingAccountResponseAmino): _135.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _135.MsgCreatePeriodicVestingAccountResponse): _135.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _135.MsgCreatePeriodicVestingAccountResponseAminoMsg): _135.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _135.MsgCreatePeriodicVestingAccountResponse): _135.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _135.MsgCreatePeriodicVestingAccountResponseProtoMsg): _135.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _135.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _135.MsgCreatePeriodicVestingAccountResponse): _135.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _251.MsgClientImpl;
                };
                bank: {
                    v1beta1: _252.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _253.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _254.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _255.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _256.MsgClientImpl;
                };
                gov: {
                    v1: _257.MsgClientImpl;
                    v1beta1: _258.MsgClientImpl;
                };
                group: {
                    v1: _259.MsgClientImpl;
                };
                nft: {
                    v1beta1: _260.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _261.MsgClientImpl;
                };
                staking: {
                    v1beta1: _262.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _263.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _264.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _44.QueryConfigRequest): Promise<_44.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _47.QueryAccountsRequest): Promise<_47.QueryAccountsResponse>;
                        account(request: _47.QueryAccountRequest): Promise<_47.QueryAccountResponse>;
                        accountAddressByID(request: _47.QueryAccountAddressByIDRequest): Promise<_47.QueryAccountAddressByIDResponse>;
                        params(request?: _47.QueryParamsRequest): Promise<_47.QueryParamsResponse>;
                        moduleAccounts(request?: _47.QueryModuleAccountsRequest): Promise<_47.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _47.QueryModuleAccountByNameRequest): Promise<_47.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _47.Bech32PrefixRequest): Promise<_47.Bech32PrefixResponse>;
                        addressBytesToString(request: _47.AddressBytesToStringRequest): Promise<_47.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _47.AddressStringToBytesRequest): Promise<_47.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _51.QueryGrantsRequest): Promise<_51.QueryGrantsResponse>;
                        granterGrants(request: _51.QueryGranterGrantsRequest): Promise<_51.QueryGranterGrantsResponse>;
                        granteeGrants(request: _51.QueryGranteeGrantsRequest): Promise<_51.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _56.QueryBalanceRequest): Promise<_56.QueryBalanceResponse>;
                        allBalances(request: _56.QueryAllBalancesRequest): Promise<_56.QueryAllBalancesResponse>;
                        spendableBalances(request: _56.QuerySpendableBalancesRequest): Promise<_56.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _56.QueryTotalSupplyRequest): Promise<_56.QueryTotalSupplyResponse>;
                        supplyOf(request: _56.QuerySupplyOfRequest): Promise<_56.QuerySupplyOfResponse>;
                        params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        denomMetadata(request: _56.QueryDenomMetadataRequest): Promise<_56.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _56.QueryDenomsMetadataRequest): Promise<_56.QueryDenomsMetadataResponse>;
                        denomOwners(request: _56.QueryDenomOwnersRequest): Promise<_56.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _60.ConfigRequest): Promise<_60.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _67.GetNodeInfoRequest): Promise<_67.GetNodeInfoResponse>;
                            getSyncing(request?: _67.GetSyncingRequest): Promise<_67.GetSyncingResponse>;
                            getLatestBlock(request?: _67.GetLatestBlockRequest): Promise<_67.GetLatestBlockResponse>;
                            getBlockByHeight(request: _67.GetBlockByHeightRequest): Promise<_67.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _67.GetLatestValidatorSetRequest): Promise<_67.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _67.GetValidatorSetByHeightRequest): Promise<_67.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _67.ABCIQueryRequest): Promise<_67.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _82.QueryValidatorOutstandingRewardsRequest): Promise<_82.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _82.QueryValidatorCommissionRequest): Promise<_82.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _82.QueryValidatorSlashesRequest): Promise<_82.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _82.QueryDelegationRewardsRequest): Promise<_82.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _82.QueryDelegationTotalRewardsRequest): Promise<_82.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _82.QueryDelegatorValidatorsRequest): Promise<_82.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _82.QueryDelegatorWithdrawAddressRequest): Promise<_82.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _82.QueryCommunityPoolRequest): Promise<_82.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _86.QueryEvidenceRequest): Promise<_86.QueryEvidenceResponse>;
                        allEvidence(request?: _86.QueryAllEvidenceRequest): Promise<_86.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _90.QueryAllowanceRequest): Promise<_90.QueryAllowanceResponse>;
                        allowances(request: _90.QueryAllowancesRequest): Promise<_90.QueryAllowancesResponse>;
                        allowancesByGranter(request: _90.QueryAllowancesByGranterRequest): Promise<_90.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _95.QueryProposalRequest): Promise<_95.QueryProposalResponse>;
                        proposals(request: _95.QueryProposalsRequest): Promise<_95.QueryProposalsResponse>;
                        vote(request: _95.QueryVoteRequest): Promise<_95.QueryVoteResponse>;
                        votes(request: _95.QueryVotesRequest): Promise<_95.QueryVotesResponse>;
                        params(request: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                        deposit(request: _95.QueryDepositRequest): Promise<_95.QueryDepositResponse>;
                        deposits(request: _95.QueryDepositsRequest): Promise<_95.QueryDepositsResponse>;
                        tallyResult(request: _95.QueryTallyResultRequest): Promise<_95.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _99.QueryProposalRequest): Promise<_99.QueryProposalResponse>;
                        proposals(request: _99.QueryProposalsRequest): Promise<_99.QueryProposalsResponse>;
                        vote(request: _99.QueryVoteRequest): Promise<_99.QueryVoteResponse>;
                        votes(request: _99.QueryVotesRequest): Promise<_99.QueryVotesResponse>;
                        params(request: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                        deposit(request: _99.QueryDepositRequest): Promise<_99.QueryDepositResponse>;
                        deposits(request: _99.QueryDepositsRequest): Promise<_99.QueryDepositsResponse>;
                        tallyResult(request: _99.QueryTallyResultRequest): Promise<_99.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _103.QueryGroupInfoRequest): Promise<_103.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _103.QueryGroupPolicyInfoRequest): Promise<_103.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _103.QueryGroupMembersRequest): Promise<_103.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _103.QueryGroupsByAdminRequest): Promise<_103.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _103.QueryGroupPoliciesByGroupRequest): Promise<_103.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _103.QueryGroupPoliciesByAdminRequest): Promise<_103.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _103.QueryProposalRequest): Promise<_103.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _103.QueryProposalsByGroupPolicyRequest): Promise<_103.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _103.QueryVoteByProposalVoterRequest): Promise<_103.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _103.QueryVotesByProposalRequest): Promise<_103.QueryVotesByProposalResponse>;
                        votesByVoter(request: _103.QueryVotesByVoterRequest): Promise<_103.QueryVotesByVoterResponse>;
                        groupsByMember(request: _103.QueryGroupsByMemberRequest): Promise<_103.QueryGroupsByMemberResponse>;
                        tallyResult(request: _103.QueryTallyResultRequest): Promise<_103.QueryTallyResultResponse>;
                        groups(request?: _103.QueryGroupsRequest): Promise<_103.QueryGroupsResponse>;
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
                        balance(request: _113.QueryBalanceRequest): Promise<_113.QueryBalanceResponse>;
                        owner(request: _113.QueryOwnerRequest): Promise<_113.QueryOwnerResponse>;
                        supply(request: _113.QuerySupplyRequest): Promise<_113.QuerySupplyResponse>;
                        nFTs(request: _113.QueryNFTsRequest): Promise<_113.QueryNFTsResponse>;
                        nFT(request: _113.QueryNFTRequest): Promise<_113.QueryNFTResponse>;
                        class(request: _113.QueryClassRequest): Promise<_113.QueryClassResponse>;
                        classes(request?: _113.QueryClassesRequest): Promise<_113.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                        subspaces(request?: _119.QuerySubspacesRequest): Promise<_119.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                        signingInfo(request: _121.QuerySigningInfoRequest): Promise<_121.QuerySigningInfoResponse>;
                        signingInfos(request?: _121.QuerySigningInfosRequest): Promise<_121.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _126.QueryValidatorsRequest): Promise<_126.QueryValidatorsResponse>;
                        validator(request: _126.QueryValidatorRequest): Promise<_126.QueryValidatorResponse>;
                        validatorDelegations(request: _126.QueryValidatorDelegationsRequest): Promise<_126.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _126.QueryValidatorUnbondingDelegationsRequest): Promise<_126.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _126.QueryDelegationRequest): Promise<_126.QueryDelegationResponse>;
                        unbondingDelegation(request: _126.QueryUnbondingDelegationRequest): Promise<_126.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _126.QueryDelegatorDelegationsRequest): Promise<_126.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _126.QueryDelegatorUnbondingDelegationsRequest): Promise<_126.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _126.QueryRedelegationsRequest): Promise<_126.QueryRedelegationsResponse>;
                        delegatorValidators(request: _126.QueryDelegatorValidatorsRequest): Promise<_126.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _126.QueryDelegatorValidatorRequest): Promise<_126.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _126.QueryHistoricalInfoRequest): Promise<_126.QueryHistoricalInfoResponse>;
                        pool(request?: _126.QueryPoolRequest): Promise<_126.QueryPoolResponse>;
                        params(request?: _126.QueryParamsRequest): Promise<_126.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _130.SimulateRequest): Promise<_130.SimulateResponse>;
                        getTx(request: _130.GetTxRequest): Promise<_130.GetTxResponse>;
                        broadcastTx(request: _130.BroadcastTxRequest): Promise<_130.BroadcastTxResponse>;
                        getTxsEvent(request: _130.GetTxsEventRequest): Promise<_130.GetTxsEventResponse>;
                        getBlockWithTxs(request: _130.GetBlockWithTxsRequest): Promise<_130.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _132.QueryCurrentPlanRequest): Promise<_132.QueryCurrentPlanResponse>;
                        appliedPlan(request: _132.QueryAppliedPlanRequest): Promise<_132.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _132.QueryUpgradedConsensusStateRequest): Promise<_132.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _132.QueryModuleVersionsRequest): Promise<_132.QueryModuleVersionsResponse>;
                        authority(request?: _132.QueryAuthorityRequest): Promise<_132.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _214.LCDQueryClient;
                };
                authz: {
                    v1beta1: _215.LCDQueryClient;
                };
                bank: {
                    v1beta1: _216.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _217.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _218.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _219.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _220.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _221.LCDQueryClient;
                };
                gov: {
                    v1: _222.LCDQueryClient;
                    v1beta1: _223.LCDQueryClient;
                };
                group: {
                    v1: _224.LCDQueryClient;
                };
                mint: {
                    v1beta1: _225.LCDQueryClient;
                };
                nft: {
                    v1beta1: _226.LCDQueryClient;
                };
                params: {
                    v1beta1: _227.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _228.LCDQueryClient;
                };
                staking: {
                    v1beta1: _229.LCDQueryClient;
                };
                tx: {
                    v1beta1: _230.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _231.LCDQueryClient;
                };
            };
        }>;
    };
}
