import * as _17 from "./app/module/v1alpha1/module";
import * as _18 from "./app/v1alpha1/config";
import * as _19 from "./app/v1alpha1/module";
import * as _20 from "./app/v1alpha1/query";
import * as _21 from "./auth/v1beta1/auth";
import * as _22 from "./auth/v1beta1/genesis";
import * as _23 from "./auth/v1beta1/query";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./bank/v1beta1/authz";
import * as _30 from "./bank/v1beta1/bank";
import * as _31 from "./bank/v1beta1/genesis";
import * as _32 from "./bank/v1beta1/query";
import * as _33 from "./bank/v1beta1/tx";
import * as _34 from "./base/abci/v1beta1/abci";
import * as _35 from "./base/kv/v1beta1/kv";
import * as _36 from "./base/node/v1beta1/query";
import * as _37 from "./base/query/v1beta1/pagination";
import * as _38 from "./base/reflection/v1beta1/reflection";
import * as _39 from "./base/reflection/v2alpha1/reflection";
import * as _40 from "./base/snapshots/v1beta1/snapshot";
import * as _41 from "./base/store/v1beta1/commit_info";
import * as _42 from "./base/store/v1beta1/listening";
import * as _43 from "./base/tendermint/v1beta1/query";
import * as _44 from "./base/tendermint/v1beta1/types";
import * as _45 from "./base/v1beta1/coin";
import * as _46 from "./capability/v1beta1/capability";
import * as _47 from "./capability/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/genesis";
import * as _49 from "./crisis/v1beta1/tx";
import * as _50 from "./crypto/ed25519/keys";
import * as _51 from "./crypto/hd/v1/hd";
import * as _52 from "./crypto/keyring/v1/record";
import * as _53 from "./crypto/multisig/keys";
import * as _54 from "./crypto/secp256k1/keys";
import * as _55 from "./crypto/secp256r1/keys";
import * as _56 from "./distribution/v1beta1/distribution";
import * as _57 from "./distribution/v1beta1/genesis";
import * as _58 from "./distribution/v1beta1/query";
import * as _59 from "./distribution/v1beta1/tx";
import * as _60 from "./evidence/v1beta1/evidence";
import * as _61 from "./evidence/v1beta1/genesis";
import * as _62 from "./evidence/v1beta1/query";
import * as _63 from "./evidence/v1beta1/tx";
import * as _64 from "./feegrant/v1beta1/feegrant";
import * as _65 from "./feegrant/v1beta1/genesis";
import * as _66 from "./feegrant/v1beta1/query";
import * as _67 from "./feegrant/v1beta1/tx";
import * as _68 from "./genutil/v1beta1/genesis";
import * as _69 from "./gov/v1/genesis";
import * as _70 from "./gov/v1/gov";
import * as _71 from "./gov/v1/query";
import * as _72 from "./gov/v1/tx";
import * as _73 from "./gov/v1beta1/genesis";
import * as _74 from "./gov/v1beta1/gov";
import * as _75 from "./gov/v1beta1/query";
import * as _76 from "./gov/v1beta1/tx";
import * as _77 from "./group/v1/events";
import * as _78 from "./group/v1/genesis";
import * as _79 from "./group/v1/query";
import * as _80 from "./group/v1/tx";
import * as _81 from "./group/v1/types";
import * as _82 from "./mint/v1beta1/genesis";
import * as _83 from "./mint/v1beta1/mint";
import * as _84 from "./mint/v1beta1/query";
import * as _86 from "./nft/v1beta1/event";
import * as _87 from "./nft/v1beta1/genesis";
import * as _88 from "./nft/v1beta1/nft";
import * as _89 from "./nft/v1beta1/query";
import * as _90 from "./nft/v1beta1/tx";
import * as _91 from "./orm/module/v1alpha1/module";
import * as _92 from "./orm/v1/orm";
import * as _93 from "./orm/v1alpha1/schema";
import * as _94 from "./params/v1beta1/params";
import * as _95 from "./params/v1beta1/query";
import * as _96 from "./slashing/v1beta1/genesis";
import * as _97 from "./slashing/v1beta1/query";
import * as _98 from "./slashing/v1beta1/slashing";
import * as _99 from "./slashing/v1beta1/tx";
import * as _100 from "./staking/v1beta1/authz";
import * as _101 from "./staking/v1beta1/genesis";
import * as _102 from "./staking/v1beta1/query";
import * as _103 from "./staking/v1beta1/staking";
import * as _104 from "./staking/v1beta1/tx";
import * as _105 from "./tx/signing/v1beta1/signing";
import * as _106 from "./tx/v1beta1/service";
import * as _107 from "./tx/v1beta1/tx";
import * as _108 from "./upgrade/v1beta1/query";
import * as _109 from "./upgrade/v1beta1/tx";
import * as _110 from "./upgrade/v1beta1/upgrade";
import * as _111 from "./vesting/v1beta1/tx";
import * as _112 from "./vesting/v1beta1/vesting";
import * as _215 from "./auth/v1beta1/query.lcd";
import * as _216 from "./authz/v1beta1/query.lcd";
import * as _217 from "./bank/v1beta1/query.lcd";
import * as _218 from "./base/node/v1beta1/query.lcd";
import * as _219 from "./base/tendermint/v1beta1/query.lcd";
import * as _220 from "./distribution/v1beta1/query.lcd";
import * as _221 from "./evidence/v1beta1/query.lcd";
import * as _222 from "./feegrant/v1beta1/query.lcd";
import * as _223 from "./gov/v1/query.lcd";
import * as _224 from "./gov/v1beta1/query.lcd";
import * as _225 from "./group/v1/query.lcd";
import * as _226 from "./mint/v1beta1/query.lcd";
import * as _227 from "./nft/v1beta1/query.lcd";
import * as _228 from "./params/v1beta1/query.lcd";
import * as _229 from "./slashing/v1beta1/query.lcd";
import * as _230 from "./staking/v1beta1/query.lcd";
import * as _231 from "./tx/v1beta1/service.lcd";
import * as _232 from "./upgrade/v1beta1/query.lcd";
import * as _233 from "./app/v1alpha1/query.rpc.Query";
import * as _234 from "./auth/v1beta1/query.rpc.Query";
import * as _235 from "./authz/v1beta1/query.rpc.Query";
import * as _236 from "./bank/v1beta1/query.rpc.Query";
import * as _237 from "./base/node/v1beta1/query.rpc.Service";
import * as _238 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _239 from "./distribution/v1beta1/query.rpc.Query";
import * as _240 from "./evidence/v1beta1/query.rpc.Query";
import * as _241 from "./feegrant/v1beta1/query.rpc.Query";
import * as _242 from "./gov/v1/query.rpc.Query";
import * as _243 from "./gov/v1beta1/query.rpc.Query";
import * as _244 from "./group/v1/query.rpc.Query";
import * as _245 from "./mint/v1beta1/query.rpc.Query";
import * as _246 from "./nft/v1beta1/query.rpc.Query";
import * as _247 from "./params/v1beta1/query.rpc.Query";
import * as _248 from "./slashing/v1beta1/query.rpc.Query";
import * as _249 from "./staking/v1beta1/query.rpc.Query";
import * as _250 from "./tx/v1beta1/service.rpc.Service";
import * as _251 from "./upgrade/v1beta1/query.rpc.Query";
import * as _252 from "./authz/v1beta1/tx.rpc.msg";
import * as _253 from "./bank/v1beta1/tx.rpc.msg";
import * as _254 from "./crisis/v1beta1/tx.rpc.msg";
import * as _255 from "./distribution/v1beta1/tx.rpc.msg";
import * as _256 from "./evidence/v1beta1/tx.rpc.msg";
import * as _257 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _258 from "./gov/v1/tx.rpc.msg";
import * as _259 from "./gov/v1beta1/tx.rpc.msg";
import * as _260 from "./group/v1/tx.rpc.msg";
import * as _261 from "./nft/v1beta1/tx.rpc.msg";
import * as _262 from "./slashing/v1beta1/tx.rpc.msg";
import * as _263 from "./staking/v1beta1/tx.rpc.msg";
import * as _264 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _265 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _17.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _17.Module;
                    fromPartial(_: Partial<_17.Module>): _17.Module;
                    fromAmino(_: _17.ModuleAmino): _17.Module;
                    toAmino(_: _17.Module): _17.ModuleAmino;
                    fromAminoMsg(object: _17.ModuleAminoMsg): _17.Module;
                    toAminoMsg(message: _17.Module): _17.ModuleAminoMsg;
                    fromProtoMsg(message: _17.ModuleProtoMsg): _17.Module;
                    toProto(message: _17.Module): Uint8Array;
                    toProtoMsg(message: _17.Module): _17.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _20.QueryConfigRequest): Promise<_20.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _20.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.QueryConfigRequest;
                fromPartial(_: Partial<_20.QueryConfigRequest>): _20.QueryConfigRequest;
                fromAmino(_: _20.QueryConfigRequestAmino): _20.QueryConfigRequest;
                toAmino(_: _20.QueryConfigRequest): _20.QueryConfigRequestAmino;
                fromAminoMsg(object: _20.QueryConfigRequestAminoMsg): _20.QueryConfigRequest;
                toAminoMsg(message: _20.QueryConfigRequest): _20.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _20.QueryConfigRequestProtoMsg): _20.QueryConfigRequest;
                toProto(message: _20.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _20.QueryConfigRequest): _20.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _20.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryConfigResponse;
                fromPartial(object: Partial<_20.QueryConfigResponse>): _20.QueryConfigResponse;
                fromAmino(object: _20.QueryConfigResponseAmino): _20.QueryConfigResponse;
                toAmino(message: _20.QueryConfigResponse): _20.QueryConfigResponseAmino;
                fromAminoMsg(object: _20.QueryConfigResponseAminoMsg): _20.QueryConfigResponse;
                toAminoMsg(message: _20.QueryConfigResponse): _20.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _20.QueryConfigResponseProtoMsg): _20.QueryConfigResponse;
                toProto(message: _20.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _20.QueryConfigResponse): _20.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _19.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.ModuleDescriptor;
                fromPartial(object: Partial<_19.ModuleDescriptor>): _19.ModuleDescriptor;
                fromAmino(object: _19.ModuleDescriptorAmino): _19.ModuleDescriptor;
                toAmino(message: _19.ModuleDescriptor): _19.ModuleDescriptorAmino;
                fromAminoMsg(object: _19.ModuleDescriptorAminoMsg): _19.ModuleDescriptor;
                toAminoMsg(message: _19.ModuleDescriptor): _19.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _19.ModuleDescriptorProtoMsg): _19.ModuleDescriptor;
                toProto(message: _19.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _19.ModuleDescriptor): _19.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _19.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.PackageReference;
                fromPartial(object: Partial<_19.PackageReference>): _19.PackageReference;
                fromAmino(object: _19.PackageReferenceAmino): _19.PackageReference;
                toAmino(message: _19.PackageReference): _19.PackageReferenceAmino;
                fromAminoMsg(object: _19.PackageReferenceAminoMsg): _19.PackageReference;
                toAminoMsg(message: _19.PackageReference): _19.PackageReferenceAminoMsg;
                fromProtoMsg(message: _19.PackageReferenceProtoMsg): _19.PackageReference;
                toProto(message: _19.PackageReference): Uint8Array;
                toProtoMsg(message: _19.PackageReference): _19.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _19.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MigrateFromInfo;
                fromPartial(object: Partial<_19.MigrateFromInfo>): _19.MigrateFromInfo;
                fromAmino(object: _19.MigrateFromInfoAmino): _19.MigrateFromInfo;
                toAmino(message: _19.MigrateFromInfo): _19.MigrateFromInfoAmino;
                fromAminoMsg(object: _19.MigrateFromInfoAminoMsg): _19.MigrateFromInfo;
                toAminoMsg(message: _19.MigrateFromInfo): _19.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _19.MigrateFromInfoProtoMsg): _19.MigrateFromInfo;
                toProto(message: _19.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _19.MigrateFromInfo): _19.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _18.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Config;
                fromPartial(object: Partial<_18.Config>): _18.Config;
                fromAmino(object: _18.ConfigAmino): _18.Config;
                toAmino(message: _18.Config): _18.ConfigAmino;
                fromAminoMsg(object: _18.ConfigAminoMsg): _18.Config;
                toAminoMsg(message: _18.Config): _18.ConfigAminoMsg;
                fromProtoMsg(message: _18.ConfigProtoMsg): _18.Config;
                toProto(message: _18.Config): Uint8Array;
                toProtoMsg(message: _18.Config): _18.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _18.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.ModuleConfig;
                fromPartial(object: Partial<_18.ModuleConfig>): _18.ModuleConfig;
                fromAmino(object: _18.ModuleConfigAmino): _18.ModuleConfig;
                toAmino(message: _18.ModuleConfig): _18.ModuleConfigAmino;
                fromAminoMsg(object: _18.ModuleConfigAminoMsg): _18.ModuleConfig;
                toAminoMsg(message: _18.ModuleConfig): _18.ModuleConfigAminoMsg;
                fromProtoMsg(message: _18.ModuleConfigProtoMsg): _18.ModuleConfig;
                toProto(message: _18.ModuleConfig): Uint8Array;
                toProtoMsg(message: _18.ModuleConfig): _18.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _23.QueryAccountsRequest): Promise<_23.QueryAccountsResponse>;
                account(request: _23.QueryAccountRequest): Promise<_23.QueryAccountResponse>;
                accountAddressByID(request: _23.QueryAccountAddressByIDRequest): Promise<_23.QueryAccountAddressByIDResponse>;
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                moduleAccounts(request?: _23.QueryModuleAccountsRequest): Promise<_23.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _23.QueryModuleAccountByNameRequest): Promise<_23.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _23.Bech32PrefixRequest): Promise<_23.Bech32PrefixResponse>;
                addressBytesToString(request: _23.AddressBytesToStringRequest): Promise<_23.AddressBytesToStringResponse>;
                addressStringToBytes(request: _23.AddressStringToBytesRequest): Promise<_23.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _215.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _23.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountsRequest;
                fromPartial(object: Partial<_23.QueryAccountsRequest>): _23.QueryAccountsRequest;
                fromAmino(object: _23.QueryAccountsRequestAmino): _23.QueryAccountsRequest;
                toAmino(message: _23.QueryAccountsRequest): _23.QueryAccountsRequestAmino;
                fromAminoMsg(object: _23.QueryAccountsRequestAminoMsg): _23.QueryAccountsRequest;
                toAminoMsg(message: _23.QueryAccountsRequest): _23.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryAccountsRequestProtoMsg): _23.QueryAccountsRequest;
                toProto(message: _23.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAccountsRequest): _23.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _23.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountsResponse;
                fromPartial(object: Partial<_23.QueryAccountsResponse>): _23.QueryAccountsResponse;
                fromAmino(object: _23.QueryAccountsResponseAmino): _23.QueryAccountsResponse;
                toAmino(message: _23.QueryAccountsResponse): _23.QueryAccountsResponseAmino;
                fromAminoMsg(object: _23.QueryAccountsResponseAminoMsg): _23.QueryAccountsResponse;
                toAminoMsg(message: _23.QueryAccountsResponse): _23.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryAccountsResponseProtoMsg): _23.QueryAccountsResponse;
                toProto(message: _23.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAccountsResponse): _23.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _23.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountRequest;
                fromPartial(object: Partial<_23.QueryAccountRequest>): _23.QueryAccountRequest;
                fromAmino(object: _23.QueryAccountRequestAmino): _23.QueryAccountRequest;
                toAmino(message: _23.QueryAccountRequest): _23.QueryAccountRequestAmino;
                fromAminoMsg(object: _23.QueryAccountRequestAminoMsg): _23.QueryAccountRequest;
                toAminoMsg(message: _23.QueryAccountRequest): _23.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _23.QueryAccountRequestProtoMsg): _23.QueryAccountRequest;
                toProto(message: _23.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAccountRequest): _23.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _23.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountResponse;
                fromPartial(object: Partial<_23.QueryAccountResponse>): _23.QueryAccountResponse;
                fromAmino(object: _23.QueryAccountResponseAmino): _23.QueryAccountResponse;
                toAmino(message: _23.QueryAccountResponse): _23.QueryAccountResponseAmino;
                fromAminoMsg(object: _23.QueryAccountResponseAminoMsg): _23.QueryAccountResponse;
                toAminoMsg(message: _23.QueryAccountResponse): _23.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _23.QueryAccountResponseProtoMsg): _23.QueryAccountResponse;
                toProto(message: _23.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAccountResponse): _23.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _23.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryParamsRequest;
                fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
                fromAmino(_: _23.QueryParamsRequestAmino): _23.QueryParamsRequest;
                toAmino(_: _23.QueryParamsRequest): _23.QueryParamsRequestAmino;
                fromAminoMsg(object: _23.QueryParamsRequestAminoMsg): _23.QueryParamsRequest;
                toAminoMsg(message: _23.QueryParamsRequest): _23.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryParamsRequestProtoMsg): _23.QueryParamsRequest;
                toProto(message: _23.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryParamsRequest): _23.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _23.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryParamsResponse;
                fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
                fromAmino(object: _23.QueryParamsResponseAmino): _23.QueryParamsResponse;
                toAmino(message: _23.QueryParamsResponse): _23.QueryParamsResponseAmino;
                fromAminoMsg(object: _23.QueryParamsResponseAminoMsg): _23.QueryParamsResponse;
                toAminoMsg(message: _23.QueryParamsResponse): _23.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryParamsResponseProtoMsg): _23.QueryParamsResponse;
                toProto(message: _23.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryParamsResponse): _23.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _23.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_23.QueryModuleAccountsRequest>): _23.QueryModuleAccountsRequest;
                fromAmino(_: _23.QueryModuleAccountsRequestAmino): _23.QueryModuleAccountsRequest;
                toAmino(_: _23.QueryModuleAccountsRequest): _23.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _23.QueryModuleAccountsRequestAminoMsg): _23.QueryModuleAccountsRequest;
                toAminoMsg(message: _23.QueryModuleAccountsRequest): _23.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryModuleAccountsRequestProtoMsg): _23.QueryModuleAccountsRequest;
                toProto(message: _23.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryModuleAccountsRequest): _23.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _23.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_23.QueryModuleAccountsResponse>): _23.QueryModuleAccountsResponse;
                fromAmino(object: _23.QueryModuleAccountsResponseAmino): _23.QueryModuleAccountsResponse;
                toAmino(message: _23.QueryModuleAccountsResponse): _23.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _23.QueryModuleAccountsResponseAminoMsg): _23.QueryModuleAccountsResponse;
                toAminoMsg(message: _23.QueryModuleAccountsResponse): _23.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryModuleAccountsResponseProtoMsg): _23.QueryModuleAccountsResponse;
                toProto(message: _23.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryModuleAccountsResponse): _23.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _23.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_23.QueryModuleAccountByNameRequest>): _23.QueryModuleAccountByNameRequest;
                fromAmino(object: _23.QueryModuleAccountByNameRequestAmino): _23.QueryModuleAccountByNameRequest;
                toAmino(message: _23.QueryModuleAccountByNameRequest): _23.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _23.QueryModuleAccountByNameRequestAminoMsg): _23.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _23.QueryModuleAccountByNameRequest): _23.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _23.QueryModuleAccountByNameRequestProtoMsg): _23.QueryModuleAccountByNameRequest;
                toProto(message: _23.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _23.QueryModuleAccountByNameRequest): _23.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _23.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_23.QueryModuleAccountByNameResponse>): _23.QueryModuleAccountByNameResponse;
                fromAmino(object: _23.QueryModuleAccountByNameResponseAmino): _23.QueryModuleAccountByNameResponse;
                toAmino(message: _23.QueryModuleAccountByNameResponse): _23.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _23.QueryModuleAccountByNameResponseAminoMsg): _23.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _23.QueryModuleAccountByNameResponse): _23.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _23.QueryModuleAccountByNameResponseProtoMsg): _23.QueryModuleAccountByNameResponse;
                toProto(message: _23.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _23.QueryModuleAccountByNameResponse): _23.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _23.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.Bech32PrefixRequest;
                fromPartial(_: Partial<_23.Bech32PrefixRequest>): _23.Bech32PrefixRequest;
                fromAmino(_: _23.Bech32PrefixRequestAmino): _23.Bech32PrefixRequest;
                toAmino(_: _23.Bech32PrefixRequest): _23.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _23.Bech32PrefixRequestAminoMsg): _23.Bech32PrefixRequest;
                toAminoMsg(message: _23.Bech32PrefixRequest): _23.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _23.Bech32PrefixRequestProtoMsg): _23.Bech32PrefixRequest;
                toProto(message: _23.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _23.Bech32PrefixRequest): _23.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _23.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Bech32PrefixResponse;
                fromPartial(object: Partial<_23.Bech32PrefixResponse>): _23.Bech32PrefixResponse;
                fromAmino(object: _23.Bech32PrefixResponseAmino): _23.Bech32PrefixResponse;
                toAmino(message: _23.Bech32PrefixResponse): _23.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _23.Bech32PrefixResponseAminoMsg): _23.Bech32PrefixResponse;
                toAminoMsg(message: _23.Bech32PrefixResponse): _23.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _23.Bech32PrefixResponseProtoMsg): _23.Bech32PrefixResponse;
                toProto(message: _23.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _23.Bech32PrefixResponse): _23.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _23.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.AddressBytesToStringRequest;
                fromPartial(object: Partial<_23.AddressBytesToStringRequest>): _23.AddressBytesToStringRequest;
                fromAmino(object: _23.AddressBytesToStringRequestAmino): _23.AddressBytesToStringRequest;
                toAmino(message: _23.AddressBytesToStringRequest): _23.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _23.AddressBytesToStringRequestAminoMsg): _23.AddressBytesToStringRequest;
                toAminoMsg(message: _23.AddressBytesToStringRequest): _23.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _23.AddressBytesToStringRequestProtoMsg): _23.AddressBytesToStringRequest;
                toProto(message: _23.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _23.AddressBytesToStringRequest): _23.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _23.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.AddressBytesToStringResponse;
                fromPartial(object: Partial<_23.AddressBytesToStringResponse>): _23.AddressBytesToStringResponse;
                fromAmino(object: _23.AddressBytesToStringResponseAmino): _23.AddressBytesToStringResponse;
                toAmino(message: _23.AddressBytesToStringResponse): _23.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _23.AddressBytesToStringResponseAminoMsg): _23.AddressBytesToStringResponse;
                toAminoMsg(message: _23.AddressBytesToStringResponse): _23.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _23.AddressBytesToStringResponseProtoMsg): _23.AddressBytesToStringResponse;
                toProto(message: _23.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _23.AddressBytesToStringResponse): _23.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _23.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.AddressStringToBytesRequest;
                fromPartial(object: Partial<_23.AddressStringToBytesRequest>): _23.AddressStringToBytesRequest;
                fromAmino(object: _23.AddressStringToBytesRequestAmino): _23.AddressStringToBytesRequest;
                toAmino(message: _23.AddressStringToBytesRequest): _23.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _23.AddressStringToBytesRequestAminoMsg): _23.AddressStringToBytesRequest;
                toAminoMsg(message: _23.AddressStringToBytesRequest): _23.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _23.AddressStringToBytesRequestProtoMsg): _23.AddressStringToBytesRequest;
                toProto(message: _23.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _23.AddressStringToBytesRequest): _23.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _23.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.AddressStringToBytesResponse;
                fromPartial(object: Partial<_23.AddressStringToBytesResponse>): _23.AddressStringToBytesResponse;
                fromAmino(object: _23.AddressStringToBytesResponseAmino): _23.AddressStringToBytesResponse;
                toAmino(message: _23.AddressStringToBytesResponse): _23.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _23.AddressStringToBytesResponseAminoMsg): _23.AddressStringToBytesResponse;
                toAminoMsg(message: _23.AddressStringToBytesResponse): _23.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _23.AddressStringToBytesResponseProtoMsg): _23.AddressStringToBytesResponse;
                toProto(message: _23.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _23.AddressStringToBytesResponse): _23.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _23.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_23.QueryAccountAddressByIDRequest>): _23.QueryAccountAddressByIDRequest;
                fromAmino(object: _23.QueryAccountAddressByIDRequestAmino): _23.QueryAccountAddressByIDRequest;
                toAmino(message: _23.QueryAccountAddressByIDRequest): _23.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _23.QueryAccountAddressByIDRequestAminoMsg): _23.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _23.QueryAccountAddressByIDRequest): _23.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _23.QueryAccountAddressByIDRequestProtoMsg): _23.QueryAccountAddressByIDRequest;
                toProto(message: _23.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAccountAddressByIDRequest): _23.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _23.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_23.QueryAccountAddressByIDResponse>): _23.QueryAccountAddressByIDResponse;
                fromAmino(object: _23.QueryAccountAddressByIDResponseAmino): _23.QueryAccountAddressByIDResponse;
                toAmino(message: _23.QueryAccountAddressByIDResponse): _23.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _23.QueryAccountAddressByIDResponseAminoMsg): _23.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _23.QueryAccountAddressByIDResponse): _23.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _23.QueryAccountAddressByIDResponseProtoMsg): _23.QueryAccountAddressByIDResponse;
                toProto(message: _23.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAccountAddressByIDResponse): _23.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _21.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _21.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _22.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.GenesisState;
                fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
                fromAmino(object: _22.GenesisStateAmino): _22.GenesisState;
                toAmino(message: _22.GenesisState): _22.GenesisStateAmino;
                fromAminoMsg(object: _22.GenesisStateAminoMsg): _22.GenesisState;
                toAminoMsg(message: _22.GenesisState): _22.GenesisStateAminoMsg;
                fromProtoMsg(message: _22.GenesisStateProtoMsg): _22.GenesisState;
                toProto(message: _22.GenesisState): Uint8Array;
                toProtoMsg(message: _22.GenesisState): _22.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _21.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.BaseAccount;
                fromPartial(object: Partial<_21.BaseAccount>): _21.BaseAccount;
                fromAmino(object: _21.BaseAccountAmino): _21.BaseAccount;
                toAmino(message: _21.BaseAccount): _21.BaseAccountAmino;
                fromAminoMsg(object: _21.BaseAccountAminoMsg): _21.BaseAccount;
                toAminoMsg(message: _21.BaseAccount): _21.BaseAccountAminoMsg;
                fromProtoMsg(message: _21.BaseAccountProtoMsg): _21.BaseAccount;
                toProto(message: _21.BaseAccount): Uint8Array;
                toProtoMsg(message: _21.BaseAccount): _21.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _21.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.ModuleAccount;
                fromPartial(object: Partial<_21.ModuleAccount>): _21.ModuleAccount;
                fromAmino(object: _21.ModuleAccountAmino): _21.ModuleAccount;
                toAmino(message: _21.ModuleAccount): _21.ModuleAccountAmino;
                fromAminoMsg(object: _21.ModuleAccountAminoMsg): _21.ModuleAccount;
                toAminoMsg(message: _21.ModuleAccount): _21.ModuleAccountAminoMsg;
                fromProtoMsg(message: _21.ModuleAccountProtoMsg): _21.ModuleAccount;
                toProto(message: _21.ModuleAccount): Uint8Array;
                toProtoMsg(message: _21.ModuleAccount): _21.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _21.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Params;
                fromPartial(object: Partial<_21.Params>): _21.Params;
                fromAmino(object: _21.ParamsAmino): _21.Params;
                toAmino(message: _21.Params): _21.ParamsAmino;
                fromAminoMsg(object: _21.ParamsAminoMsg): _21.Params;
                toAminoMsg(message: _21.Params): _21.ParamsAminoMsg;
                fromProtoMsg(message: _21.ParamsProtoMsg): _21.Params;
                toProto(message: _21.Params): Uint8Array;
                toProtoMsg(message: _21.Params): _21.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _27.QueryGrantsRequest): Promise<_27.QueryGrantsResponse>;
                granterGrants(request: _27.QueryGranterGrantsRequest): Promise<_27.QueryGranterGrantsResponse>;
                granteeGrants(request: _27.QueryGranteeGrantsRequest): Promise<_27.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _216.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _28.MsgGrant) => _28.MsgGrantAmino;
                    fromAmino: (object: _28.MsgGrantAmino) => _28.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _28.MsgExec) => _28.MsgExecAmino;
                    fromAmino: (object: _28.MsgExecAmino) => _28.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _28.MsgRevoke) => _28.MsgRevokeAmino;
                    fromAmino: (object: _28.MsgRevokeAmino) => _28.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _28.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgGrant;
                fromPartial(object: Partial<_28.MsgGrant>): _28.MsgGrant;
                fromAmino(object: _28.MsgGrantAmino): _28.MsgGrant;
                toAmino(message: _28.MsgGrant): _28.MsgGrantAmino;
                fromAminoMsg(object: _28.MsgGrantAminoMsg): _28.MsgGrant;
                toAminoMsg(message: _28.MsgGrant): _28.MsgGrantAminoMsg;
                fromProtoMsg(message: _28.MsgGrantProtoMsg): _28.MsgGrant;
                toProto(message: _28.MsgGrant): Uint8Array;
                toProtoMsg(message: _28.MsgGrant): _28.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _28.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgExecResponse;
                fromPartial(object: Partial<_28.MsgExecResponse>): _28.MsgExecResponse;
                fromAmino(object: _28.MsgExecResponseAmino): _28.MsgExecResponse;
                toAmino(message: _28.MsgExecResponse): _28.MsgExecResponseAmino;
                fromAminoMsg(object: _28.MsgExecResponseAminoMsg): _28.MsgExecResponse;
                toAminoMsg(message: _28.MsgExecResponse): _28.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _28.MsgExecResponseProtoMsg): _28.MsgExecResponse;
                toProto(message: _28.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _28.MsgExecResponse): _28.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _28.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgExec;
                fromPartial(object: Partial<_28.MsgExec>): _28.MsgExec;
                fromAmino(object: _28.MsgExecAmino): _28.MsgExec;
                toAmino(message: _28.MsgExec): _28.MsgExecAmino;
                fromAminoMsg(object: _28.MsgExecAminoMsg): _28.MsgExec;
                toAminoMsg(message: _28.MsgExec): _28.MsgExecAminoMsg;
                fromProtoMsg(message: _28.MsgExecProtoMsg): _28.MsgExec;
                toProto(message: _28.MsgExec): Uint8Array;
                toProtoMsg(message: _28.MsgExec): _28.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _28.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgGrantResponse;
                fromPartial(_: Partial<_28.MsgGrantResponse>): _28.MsgGrantResponse;
                fromAmino(_: _28.MsgGrantResponseAmino): _28.MsgGrantResponse;
                toAmino(_: _28.MsgGrantResponse): _28.MsgGrantResponseAmino;
                fromAminoMsg(object: _28.MsgGrantResponseAminoMsg): _28.MsgGrantResponse;
                toAminoMsg(message: _28.MsgGrantResponse): _28.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _28.MsgGrantResponseProtoMsg): _28.MsgGrantResponse;
                toProto(message: _28.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _28.MsgGrantResponse): _28.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _28.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgRevoke;
                fromPartial(object: Partial<_28.MsgRevoke>): _28.MsgRevoke;
                fromAmino(object: _28.MsgRevokeAmino): _28.MsgRevoke;
                toAmino(message: _28.MsgRevoke): _28.MsgRevokeAmino;
                fromAminoMsg(object: _28.MsgRevokeAminoMsg): _28.MsgRevoke;
                toAminoMsg(message: _28.MsgRevoke): _28.MsgRevokeAminoMsg;
                fromProtoMsg(message: _28.MsgRevokeProtoMsg): _28.MsgRevoke;
                toProto(message: _28.MsgRevoke): Uint8Array;
                toProtoMsg(message: _28.MsgRevoke): _28.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _28.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgRevokeResponse;
                fromPartial(_: Partial<_28.MsgRevokeResponse>): _28.MsgRevokeResponse;
                fromAmino(_: _28.MsgRevokeResponseAmino): _28.MsgRevokeResponse;
                toAmino(_: _28.MsgRevokeResponse): _28.MsgRevokeResponseAmino;
                fromAminoMsg(object: _28.MsgRevokeResponseAminoMsg): _28.MsgRevokeResponse;
                toAminoMsg(message: _28.MsgRevokeResponse): _28.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _28.MsgRevokeResponseProtoMsg): _28.MsgRevokeResponse;
                toProto(message: _28.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _28.MsgRevokeResponse): _28.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _27.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGrantsRequest;
                fromPartial(object: Partial<_27.QueryGrantsRequest>): _27.QueryGrantsRequest;
                fromAmino(object: _27.QueryGrantsRequestAmino): _27.QueryGrantsRequest;
                toAmino(message: _27.QueryGrantsRequest): _27.QueryGrantsRequestAmino;
                fromAminoMsg(object: _27.QueryGrantsRequestAminoMsg): _27.QueryGrantsRequest;
                toAminoMsg(message: _27.QueryGrantsRequest): _27.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryGrantsRequestProtoMsg): _27.QueryGrantsRequest;
                toProto(message: _27.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryGrantsRequest): _27.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _27.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGrantsResponse;
                fromPartial(object: Partial<_27.QueryGrantsResponse>): _27.QueryGrantsResponse;
                fromAmino(object: _27.QueryGrantsResponseAmino): _27.QueryGrantsResponse;
                toAmino(message: _27.QueryGrantsResponse): _27.QueryGrantsResponseAmino;
                fromAminoMsg(object: _27.QueryGrantsResponseAminoMsg): _27.QueryGrantsResponse;
                toAminoMsg(message: _27.QueryGrantsResponse): _27.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryGrantsResponseProtoMsg): _27.QueryGrantsResponse;
                toProto(message: _27.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryGrantsResponse): _27.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _27.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_27.QueryGranterGrantsRequest>): _27.QueryGranterGrantsRequest;
                fromAmino(object: _27.QueryGranterGrantsRequestAmino): _27.QueryGranterGrantsRequest;
                toAmino(message: _27.QueryGranterGrantsRequest): _27.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _27.QueryGranterGrantsRequestAminoMsg): _27.QueryGranterGrantsRequest;
                toAminoMsg(message: _27.QueryGranterGrantsRequest): _27.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryGranterGrantsRequestProtoMsg): _27.QueryGranterGrantsRequest;
                toProto(message: _27.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryGranterGrantsRequest): _27.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _27.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_27.QueryGranterGrantsResponse>): _27.QueryGranterGrantsResponse;
                fromAmino(object: _27.QueryGranterGrantsResponseAmino): _27.QueryGranterGrantsResponse;
                toAmino(message: _27.QueryGranterGrantsResponse): _27.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _27.QueryGranterGrantsResponseAminoMsg): _27.QueryGranterGrantsResponse;
                toAminoMsg(message: _27.QueryGranterGrantsResponse): _27.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryGranterGrantsResponseProtoMsg): _27.QueryGranterGrantsResponse;
                toProto(message: _27.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryGranterGrantsResponse): _27.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _27.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_27.QueryGranteeGrantsRequest>): _27.QueryGranteeGrantsRequest;
                fromAmino(object: _27.QueryGranteeGrantsRequestAmino): _27.QueryGranteeGrantsRequest;
                toAmino(message: _27.QueryGranteeGrantsRequest): _27.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _27.QueryGranteeGrantsRequestAminoMsg): _27.QueryGranteeGrantsRequest;
                toAminoMsg(message: _27.QueryGranteeGrantsRequest): _27.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryGranteeGrantsRequestProtoMsg): _27.QueryGranteeGrantsRequest;
                toProto(message: _27.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryGranteeGrantsRequest): _27.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _27.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_27.QueryGranteeGrantsResponse>): _27.QueryGranteeGrantsResponse;
                fromAmino(object: _27.QueryGranteeGrantsResponseAmino): _27.QueryGranteeGrantsResponse;
                toAmino(message: _27.QueryGranteeGrantsResponse): _27.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _27.QueryGranteeGrantsResponseAminoMsg): _27.QueryGranteeGrantsResponse;
                toAminoMsg(message: _27.QueryGranteeGrantsResponse): _27.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryGranteeGrantsResponseProtoMsg): _27.QueryGranteeGrantsResponse;
                toProto(message: _27.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryGranteeGrantsResponse): _27.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _26.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.GenesisState;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
                fromAmino(object: _26.GenesisStateAmino): _26.GenesisState;
                toAmino(message: _26.GenesisState): _26.GenesisStateAmino;
                fromAminoMsg(object: _26.GenesisStateAminoMsg): _26.GenesisState;
                toAminoMsg(message: _26.GenesisState): _26.GenesisStateAminoMsg;
                fromProtoMsg(message: _26.GenesisStateProtoMsg): _26.GenesisState;
                toProto(message: _26.GenesisState): Uint8Array;
                toProtoMsg(message: _26.GenesisState): _26.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _25.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.EventGrant;
                fromPartial(object: Partial<_25.EventGrant>): _25.EventGrant;
                fromAmino(object: _25.EventGrantAmino): _25.EventGrant;
                toAmino(message: _25.EventGrant): _25.EventGrantAmino;
                fromAminoMsg(object: _25.EventGrantAminoMsg): _25.EventGrant;
                toAminoMsg(message: _25.EventGrant): _25.EventGrantAminoMsg;
                fromProtoMsg(message: _25.EventGrantProtoMsg): _25.EventGrant;
                toProto(message: _25.EventGrant): Uint8Array;
                toProtoMsg(message: _25.EventGrant): _25.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _25.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.EventRevoke;
                fromPartial(object: Partial<_25.EventRevoke>): _25.EventRevoke;
                fromAmino(object: _25.EventRevokeAmino): _25.EventRevoke;
                toAmino(message: _25.EventRevoke): _25.EventRevokeAmino;
                fromAminoMsg(object: _25.EventRevokeAminoMsg): _25.EventRevoke;
                toAminoMsg(message: _25.EventRevoke): _25.EventRevokeAminoMsg;
                fromProtoMsg(message: _25.EventRevokeProtoMsg): _25.EventRevoke;
                toProto(message: _25.EventRevoke): Uint8Array;
                toProtoMsg(message: _25.EventRevoke): _25.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _24.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.GenericAuthorization;
                fromPartial(object: Partial<_24.GenericAuthorization>): _24.GenericAuthorization;
                fromAmino(object: _24.GenericAuthorizationAmino): _24.GenericAuthorization;
                toAmino(message: _24.GenericAuthorization): _24.GenericAuthorizationAmino;
                fromAminoMsg(object: _24.GenericAuthorizationAminoMsg): _24.GenericAuthorization;
                toAminoMsg(message: _24.GenericAuthorization): _24.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _24.GenericAuthorizationProtoMsg): _24.GenericAuthorization;
                toProto(message: _24.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _24.GenericAuthorization): _24.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _24.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Grant;
                fromPartial(object: Partial<_24.Grant>): _24.Grant;
                fromAmino(object: _24.GrantAmino): _24.Grant;
                toAmino(message: _24.Grant): _24.GrantAmino;
                fromAminoMsg(object: _24.GrantAminoMsg): _24.Grant;
                toAminoMsg(message: _24.Grant): _24.GrantAminoMsg;
                fromProtoMsg(message: _24.GrantProtoMsg): _24.Grant;
                toProto(message: _24.Grant): Uint8Array;
                toProtoMsg(message: _24.Grant): _24.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _24.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.GrantAuthorization;
                fromPartial(object: Partial<_24.GrantAuthorization>): _24.GrantAuthorization;
                fromAmino(object: _24.GrantAuthorizationAmino): _24.GrantAuthorization;
                toAmino(message: _24.GrantAuthorization): _24.GrantAuthorizationAmino;
                fromAminoMsg(object: _24.GrantAuthorizationAminoMsg): _24.GrantAuthorization;
                toAminoMsg(message: _24.GrantAuthorization): _24.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _24.GrantAuthorizationProtoMsg): _24.GrantAuthorization;
                toProto(message: _24.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _24.GrantAuthorization): _24.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _24.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.GrantQueueItem;
                fromPartial(object: Partial<_24.GrantQueueItem>): _24.GrantQueueItem;
                fromAmino(object: _24.GrantQueueItemAmino): _24.GrantQueueItem;
                toAmino(message: _24.GrantQueueItem): _24.GrantQueueItemAmino;
                fromAminoMsg(object: _24.GrantQueueItemAminoMsg): _24.GrantQueueItem;
                toAminoMsg(message: _24.GrantQueueItem): _24.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _24.GrantQueueItemProtoMsg): _24.GrantQueueItem;
                toProto(message: _24.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _24.GrantQueueItem): _24.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _29.SendAuthorization | _100.StakeAuthorization | _24.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _32.QueryBalanceRequest): Promise<_32.QueryBalanceResponse>;
                allBalances(request: _32.QueryAllBalancesRequest): Promise<_32.QueryAllBalancesResponse>;
                spendableBalances(request: _32.QuerySpendableBalancesRequest): Promise<_32.QuerySpendableBalancesResponse>;
                totalSupply(request?: _32.QueryTotalSupplyRequest): Promise<_32.QueryTotalSupplyResponse>;
                supplyOf(request: _32.QuerySupplyOfRequest): Promise<_32.QuerySupplyOfResponse>;
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                denomMetadata(request: _32.QueryDenomMetadataRequest): Promise<_32.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _32.QueryDenomsMetadataRequest): Promise<_32.QueryDenomsMetadataResponse>;
                denomOwners(request: _32.QueryDenomOwnersRequest): Promise<_32.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _217.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _33.MsgSend) => _33.MsgSendAmino;
                    fromAmino: (object: _33.MsgSendAmino) => _33.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _33.MsgMultiSend) => _33.MsgMultiSendAmino;
                    fromAmino: (object: _33.MsgMultiSendAmino) => _33.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _33.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.MsgSend;
                fromPartial(object: Partial<_33.MsgSend>): _33.MsgSend;
                fromAmino(object: _33.MsgSendAmino): _33.MsgSend;
                toAmino(message: _33.MsgSend): _33.MsgSendAmino;
                fromAminoMsg(object: _33.MsgSendAminoMsg): _33.MsgSend;
                toAminoMsg(message: _33.MsgSend): _33.MsgSendAminoMsg;
                fromProtoMsg(message: _33.MsgSendProtoMsg): _33.MsgSend;
                toProto(message: _33.MsgSend): Uint8Array;
                toProtoMsg(message: _33.MsgSend): _33.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _33.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.MsgSendResponse;
                fromPartial(_: Partial<_33.MsgSendResponse>): _33.MsgSendResponse;
                fromAmino(_: _33.MsgSendResponseAmino): _33.MsgSendResponse;
                toAmino(_: _33.MsgSendResponse): _33.MsgSendResponseAmino;
                fromAminoMsg(object: _33.MsgSendResponseAminoMsg): _33.MsgSendResponse;
                toAminoMsg(message: _33.MsgSendResponse): _33.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _33.MsgSendResponseProtoMsg): _33.MsgSendResponse;
                toProto(message: _33.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _33.MsgSendResponse): _33.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _33.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.MsgMultiSend;
                fromPartial(object: Partial<_33.MsgMultiSend>): _33.MsgMultiSend;
                fromAmino(object: _33.MsgMultiSendAmino): _33.MsgMultiSend;
                toAmino(message: _33.MsgMultiSend): _33.MsgMultiSendAmino;
                fromAminoMsg(object: _33.MsgMultiSendAminoMsg): _33.MsgMultiSend;
                toAminoMsg(message: _33.MsgMultiSend): _33.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _33.MsgMultiSendProtoMsg): _33.MsgMultiSend;
                toProto(message: _33.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _33.MsgMultiSend): _33.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _33.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.MsgMultiSendResponse;
                fromPartial(_: Partial<_33.MsgMultiSendResponse>): _33.MsgMultiSendResponse;
                fromAmino(_: _33.MsgMultiSendResponseAmino): _33.MsgMultiSendResponse;
                toAmino(_: _33.MsgMultiSendResponse): _33.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _33.MsgMultiSendResponseAminoMsg): _33.MsgMultiSendResponse;
                toAminoMsg(message: _33.MsgMultiSendResponse): _33.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _33.MsgMultiSendResponseProtoMsg): _33.MsgMultiSendResponse;
                toProto(message: _33.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _33.MsgMultiSendResponse): _33.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _32.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryBalanceRequest;
                fromPartial(object: Partial<_32.QueryBalanceRequest>): _32.QueryBalanceRequest;
                fromAmino(object: _32.QueryBalanceRequestAmino): _32.QueryBalanceRequest;
                toAmino(message: _32.QueryBalanceRequest): _32.QueryBalanceRequestAmino;
                fromAminoMsg(object: _32.QueryBalanceRequestAminoMsg): _32.QueryBalanceRequest;
                toAminoMsg(message: _32.QueryBalanceRequest): _32.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _32.QueryBalanceRequestProtoMsg): _32.QueryBalanceRequest;
                toProto(message: _32.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _32.QueryBalanceRequest): _32.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _32.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryBalanceResponse;
                fromPartial(object: Partial<_32.QueryBalanceResponse>): _32.QueryBalanceResponse;
                fromAmino(object: _32.QueryBalanceResponseAmino): _32.QueryBalanceResponse;
                toAmino(message: _32.QueryBalanceResponse): _32.QueryBalanceResponseAmino;
                fromAminoMsg(object: _32.QueryBalanceResponseAminoMsg): _32.QueryBalanceResponse;
                toAminoMsg(message: _32.QueryBalanceResponse): _32.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _32.QueryBalanceResponseProtoMsg): _32.QueryBalanceResponse;
                toProto(message: _32.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _32.QueryBalanceResponse): _32.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _32.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryAllBalancesRequest;
                fromPartial(object: Partial<_32.QueryAllBalancesRequest>): _32.QueryAllBalancesRequest;
                fromAmino(object: _32.QueryAllBalancesRequestAmino): _32.QueryAllBalancesRequest;
                toAmino(message: _32.QueryAllBalancesRequest): _32.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _32.QueryAllBalancesRequestAminoMsg): _32.QueryAllBalancesRequest;
                toAminoMsg(message: _32.QueryAllBalancesRequest): _32.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _32.QueryAllBalancesRequestProtoMsg): _32.QueryAllBalancesRequest;
                toProto(message: _32.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _32.QueryAllBalancesRequest): _32.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _32.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryAllBalancesResponse;
                fromPartial(object: Partial<_32.QueryAllBalancesResponse>): _32.QueryAllBalancesResponse;
                fromAmino(object: _32.QueryAllBalancesResponseAmino): _32.QueryAllBalancesResponse;
                toAmino(message: _32.QueryAllBalancesResponse): _32.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _32.QueryAllBalancesResponseAminoMsg): _32.QueryAllBalancesResponse;
                toAminoMsg(message: _32.QueryAllBalancesResponse): _32.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _32.QueryAllBalancesResponseProtoMsg): _32.QueryAllBalancesResponse;
                toProto(message: _32.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _32.QueryAllBalancesResponse): _32.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _32.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_32.QuerySpendableBalancesRequest>): _32.QuerySpendableBalancesRequest;
                fromAmino(object: _32.QuerySpendableBalancesRequestAmino): _32.QuerySpendableBalancesRequest;
                toAmino(message: _32.QuerySpendableBalancesRequest): _32.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _32.QuerySpendableBalancesRequestAminoMsg): _32.QuerySpendableBalancesRequest;
                toAminoMsg(message: _32.QuerySpendableBalancesRequest): _32.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _32.QuerySpendableBalancesRequestProtoMsg): _32.QuerySpendableBalancesRequest;
                toProto(message: _32.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _32.QuerySpendableBalancesRequest): _32.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _32.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_32.QuerySpendableBalancesResponse>): _32.QuerySpendableBalancesResponse;
                fromAmino(object: _32.QuerySpendableBalancesResponseAmino): _32.QuerySpendableBalancesResponse;
                toAmino(message: _32.QuerySpendableBalancesResponse): _32.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _32.QuerySpendableBalancesResponseAminoMsg): _32.QuerySpendableBalancesResponse;
                toAminoMsg(message: _32.QuerySpendableBalancesResponse): _32.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _32.QuerySpendableBalancesResponseProtoMsg): _32.QuerySpendableBalancesResponse;
                toProto(message: _32.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _32.QuerySpendableBalancesResponse): _32.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _32.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_32.QueryTotalSupplyRequest>): _32.QueryTotalSupplyRequest;
                fromAmino(object: _32.QueryTotalSupplyRequestAmino): _32.QueryTotalSupplyRequest;
                toAmino(message: _32.QueryTotalSupplyRequest): _32.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _32.QueryTotalSupplyRequestAminoMsg): _32.QueryTotalSupplyRequest;
                toAminoMsg(message: _32.QueryTotalSupplyRequest): _32.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _32.QueryTotalSupplyRequestProtoMsg): _32.QueryTotalSupplyRequest;
                toProto(message: _32.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _32.QueryTotalSupplyRequest): _32.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _32.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_32.QueryTotalSupplyResponse>): _32.QueryTotalSupplyResponse;
                fromAmino(object: _32.QueryTotalSupplyResponseAmino): _32.QueryTotalSupplyResponse;
                toAmino(message: _32.QueryTotalSupplyResponse): _32.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _32.QueryTotalSupplyResponseAminoMsg): _32.QueryTotalSupplyResponse;
                toAminoMsg(message: _32.QueryTotalSupplyResponse): _32.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _32.QueryTotalSupplyResponseProtoMsg): _32.QueryTotalSupplyResponse;
                toProto(message: _32.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _32.QueryTotalSupplyResponse): _32.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _32.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QuerySupplyOfRequest;
                fromPartial(object: Partial<_32.QuerySupplyOfRequest>): _32.QuerySupplyOfRequest;
                fromAmino(object: _32.QuerySupplyOfRequestAmino): _32.QuerySupplyOfRequest;
                toAmino(message: _32.QuerySupplyOfRequest): _32.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _32.QuerySupplyOfRequestAminoMsg): _32.QuerySupplyOfRequest;
                toAminoMsg(message: _32.QuerySupplyOfRequest): _32.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _32.QuerySupplyOfRequestProtoMsg): _32.QuerySupplyOfRequest;
                toProto(message: _32.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _32.QuerySupplyOfRequest): _32.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _32.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QuerySupplyOfResponse;
                fromPartial(object: Partial<_32.QuerySupplyOfResponse>): _32.QuerySupplyOfResponse;
                fromAmino(object: _32.QuerySupplyOfResponseAmino): _32.QuerySupplyOfResponse;
                toAmino(message: _32.QuerySupplyOfResponse): _32.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _32.QuerySupplyOfResponseAminoMsg): _32.QuerySupplyOfResponse;
                toAminoMsg(message: _32.QuerySupplyOfResponse): _32.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _32.QuerySupplyOfResponseProtoMsg): _32.QuerySupplyOfResponse;
                toProto(message: _32.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _32.QuerySupplyOfResponse): _32.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _32.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.QueryParamsRequest;
                fromPartial(_: Partial<_32.QueryParamsRequest>): _32.QueryParamsRequest;
                fromAmino(_: _32.QueryParamsRequestAmino): _32.QueryParamsRequest;
                toAmino(_: _32.QueryParamsRequest): _32.QueryParamsRequestAmino;
                fromAminoMsg(object: _32.QueryParamsRequestAminoMsg): _32.QueryParamsRequest;
                toAminoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryParamsRequestProtoMsg): _32.QueryParamsRequest;
                toProto(message: _32.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _32.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryParamsResponse;
                fromPartial(object: Partial<_32.QueryParamsResponse>): _32.QueryParamsResponse;
                fromAmino(object: _32.QueryParamsResponseAmino): _32.QueryParamsResponse;
                toAmino(message: _32.QueryParamsResponse): _32.QueryParamsResponseAmino;
                fromAminoMsg(object: _32.QueryParamsResponseAminoMsg): _32.QueryParamsResponse;
                toAminoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryParamsResponseProtoMsg): _32.QueryParamsResponse;
                toProto(message: _32.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _32.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_32.QueryDenomsMetadataRequest>): _32.QueryDenomsMetadataRequest;
                fromAmino(object: _32.QueryDenomsMetadataRequestAmino): _32.QueryDenomsMetadataRequest;
                toAmino(message: _32.QueryDenomsMetadataRequest): _32.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _32.QueryDenomsMetadataRequestAminoMsg): _32.QueryDenomsMetadataRequest;
                toAminoMsg(message: _32.QueryDenomsMetadataRequest): _32.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDenomsMetadataRequestProtoMsg): _32.QueryDenomsMetadataRequest;
                toProto(message: _32.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDenomsMetadataRequest): _32.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _32.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_32.QueryDenomsMetadataResponse>): _32.QueryDenomsMetadataResponse;
                fromAmino(object: _32.QueryDenomsMetadataResponseAmino): _32.QueryDenomsMetadataResponse;
                toAmino(message: _32.QueryDenomsMetadataResponse): _32.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _32.QueryDenomsMetadataResponseAminoMsg): _32.QueryDenomsMetadataResponse;
                toAminoMsg(message: _32.QueryDenomsMetadataResponse): _32.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDenomsMetadataResponseProtoMsg): _32.QueryDenomsMetadataResponse;
                toProto(message: _32.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDenomsMetadataResponse): _32.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _32.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_32.QueryDenomMetadataRequest>): _32.QueryDenomMetadataRequest;
                fromAmino(object: _32.QueryDenomMetadataRequestAmino): _32.QueryDenomMetadataRequest;
                toAmino(message: _32.QueryDenomMetadataRequest): _32.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _32.QueryDenomMetadataRequestAminoMsg): _32.QueryDenomMetadataRequest;
                toAminoMsg(message: _32.QueryDenomMetadataRequest): _32.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDenomMetadataRequestProtoMsg): _32.QueryDenomMetadataRequest;
                toProto(message: _32.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDenomMetadataRequest): _32.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _32.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_32.QueryDenomMetadataResponse>): _32.QueryDenomMetadataResponse;
                fromAmino(object: _32.QueryDenomMetadataResponseAmino): _32.QueryDenomMetadataResponse;
                toAmino(message: _32.QueryDenomMetadataResponse): _32.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _32.QueryDenomMetadataResponseAminoMsg): _32.QueryDenomMetadataResponse;
                toAminoMsg(message: _32.QueryDenomMetadataResponse): _32.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDenomMetadataResponseProtoMsg): _32.QueryDenomMetadataResponse;
                toProto(message: _32.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDenomMetadataResponse): _32.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _32.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_32.QueryDenomOwnersRequest>): _32.QueryDenomOwnersRequest;
                fromAmino(object: _32.QueryDenomOwnersRequestAmino): _32.QueryDenomOwnersRequest;
                toAmino(message: _32.QueryDenomOwnersRequest): _32.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _32.QueryDenomOwnersRequestAminoMsg): _32.QueryDenomOwnersRequest;
                toAminoMsg(message: _32.QueryDenomOwnersRequest): _32.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDenomOwnersRequestProtoMsg): _32.QueryDenomOwnersRequest;
                toProto(message: _32.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDenomOwnersRequest): _32.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _32.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.DenomOwner;
                fromPartial(object: Partial<_32.DenomOwner>): _32.DenomOwner;
                fromAmino(object: _32.DenomOwnerAmino): _32.DenomOwner;
                toAmino(message: _32.DenomOwner): _32.DenomOwnerAmino;
                fromAminoMsg(object: _32.DenomOwnerAminoMsg): _32.DenomOwner;
                toAminoMsg(message: _32.DenomOwner): _32.DenomOwnerAminoMsg;
                fromProtoMsg(message: _32.DenomOwnerProtoMsg): _32.DenomOwner;
                toProto(message: _32.DenomOwner): Uint8Array;
                toProtoMsg(message: _32.DenomOwner): _32.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _32.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_32.QueryDenomOwnersResponse>): _32.QueryDenomOwnersResponse;
                fromAmino(object: _32.QueryDenomOwnersResponseAmino): _32.QueryDenomOwnersResponse;
                toAmino(message: _32.QueryDenomOwnersResponse): _32.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _32.QueryDenomOwnersResponseAminoMsg): _32.QueryDenomOwnersResponse;
                toAminoMsg(message: _32.QueryDenomOwnersResponse): _32.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDenomOwnersResponseProtoMsg): _32.QueryDenomOwnersResponse;
                toProto(message: _32.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDenomOwnersResponse): _32.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _31.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
                fromAmino(object: _31.GenesisStateAmino): _31.GenesisState;
                toAmino(message: _31.GenesisState): _31.GenesisStateAmino;
                fromAminoMsg(object: _31.GenesisStateAminoMsg): _31.GenesisState;
                toAminoMsg(message: _31.GenesisState): _31.GenesisStateAminoMsg;
                fromProtoMsg(message: _31.GenesisStateProtoMsg): _31.GenesisState;
                toProto(message: _31.GenesisState): Uint8Array;
                toProtoMsg(message: _31.GenesisState): _31.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _31.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Balance;
                fromPartial(object: Partial<_31.Balance>): _31.Balance;
                fromAmino(object: _31.BalanceAmino): _31.Balance;
                toAmino(message: _31.Balance): _31.BalanceAmino;
                fromAminoMsg(object: _31.BalanceAminoMsg): _31.Balance;
                toAminoMsg(message: _31.Balance): _31.BalanceAminoMsg;
                fromProtoMsg(message: _31.BalanceProtoMsg): _31.Balance;
                toProto(message: _31.Balance): Uint8Array;
                toProtoMsg(message: _31.Balance): _31.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _30.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Params;
                fromPartial(object: Partial<_30.Params>): _30.Params;
                fromAmino(object: _30.ParamsAmino): _30.Params;
                toAmino(message: _30.Params): _30.ParamsAmino;
                fromAminoMsg(object: _30.ParamsAminoMsg): _30.Params;
                toAminoMsg(message: _30.Params): _30.ParamsAminoMsg;
                fromProtoMsg(message: _30.ParamsProtoMsg): _30.Params;
                toProto(message: _30.Params): Uint8Array;
                toProtoMsg(message: _30.Params): _30.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _30.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.SendEnabled;
                fromPartial(object: Partial<_30.SendEnabled>): _30.SendEnabled;
                fromAmino(object: _30.SendEnabledAmino): _30.SendEnabled;
                toAmino(message: _30.SendEnabled): _30.SendEnabledAmino;
                fromAminoMsg(object: _30.SendEnabledAminoMsg): _30.SendEnabled;
                toAminoMsg(message: _30.SendEnabled): _30.SendEnabledAminoMsg;
                fromProtoMsg(message: _30.SendEnabledProtoMsg): _30.SendEnabled;
                toProto(message: _30.SendEnabled): Uint8Array;
                toProtoMsg(message: _30.SendEnabled): _30.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _30.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Input;
                fromPartial(object: Partial<_30.Input>): _30.Input;
                fromAmino(object: _30.InputAmino): _30.Input;
                toAmino(message: _30.Input): _30.InputAmino;
                fromAminoMsg(object: _30.InputAminoMsg): _30.Input;
                toAminoMsg(message: _30.Input): _30.InputAminoMsg;
                fromProtoMsg(message: _30.InputProtoMsg): _30.Input;
                toProto(message: _30.Input): Uint8Array;
                toProtoMsg(message: _30.Input): _30.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _30.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Output;
                fromPartial(object: Partial<_30.Output>): _30.Output;
                fromAmino(object: _30.OutputAmino): _30.Output;
                toAmino(message: _30.Output): _30.OutputAmino;
                fromAminoMsg(object: _30.OutputAminoMsg): _30.Output;
                toAminoMsg(message: _30.Output): _30.OutputAminoMsg;
                fromProtoMsg(message: _30.OutputProtoMsg): _30.Output;
                toProto(message: _30.Output): Uint8Array;
                toProtoMsg(message: _30.Output): _30.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _30.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Supply;
                fromPartial(object: Partial<_30.Supply>): _30.Supply;
                fromAmino(object: _30.SupplyAmino): _30.Supply;
                toAmino(message: _30.Supply): _30.SupplyAmino;
                fromAminoMsg(object: _30.SupplyAminoMsg): _30.Supply;
                toAminoMsg(message: _30.Supply): _30.SupplyAminoMsg;
                fromProtoMsg(message: _30.SupplyProtoMsg): _30.Supply;
                toProto(message: _30.Supply): Uint8Array;
                toProtoMsg(message: _30.Supply): _30.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _30.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.DenomUnit;
                fromPartial(object: Partial<_30.DenomUnit>): _30.DenomUnit;
                fromAmino(object: _30.DenomUnitAmino): _30.DenomUnit;
                toAmino(message: _30.DenomUnit): _30.DenomUnitAmino;
                fromAminoMsg(object: _30.DenomUnitAminoMsg): _30.DenomUnit;
                toAminoMsg(message: _30.DenomUnit): _30.DenomUnitAminoMsg;
                fromProtoMsg(message: _30.DenomUnitProtoMsg): _30.DenomUnit;
                toProto(message: _30.DenomUnit): Uint8Array;
                toProtoMsg(message: _30.DenomUnit): _30.DenomUnitProtoMsg;
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
            SendAuthorization: {
                typeUrl: string;
                encode(message: _29.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.SendAuthorization;
                fromPartial(object: Partial<_29.SendAuthorization>): _29.SendAuthorization;
                fromAmino(object: _29.SendAuthorizationAmino): _29.SendAuthorization;
                toAmino(message: _29.SendAuthorization): _29.SendAuthorizationAmino;
                fromAminoMsg(object: _29.SendAuthorizationAminoMsg): _29.SendAuthorization;
                toAminoMsg(message: _29.SendAuthorization): _29.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _29.SendAuthorizationProtoMsg): _29.SendAuthorization;
                toProto(message: _29.SendAuthorization): Uint8Array;
                toProtoMsg(message: _29.SendAuthorization): _29.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _34.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.TxResponse;
                    fromPartial(object: Partial<_34.TxResponse>): _34.TxResponse;
                    fromAmino(object: _34.TxResponseAmino): _34.TxResponse;
                    toAmino(message: _34.TxResponse): _34.TxResponseAmino;
                    fromAminoMsg(object: _34.TxResponseAminoMsg): _34.TxResponse;
                    toAminoMsg(message: _34.TxResponse): _34.TxResponseAminoMsg;
                    fromProtoMsg(message: _34.TxResponseProtoMsg): _34.TxResponse;
                    toProto(message: _34.TxResponse): Uint8Array;
                    toProtoMsg(message: _34.TxResponse): _34.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _34.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.ABCIMessageLog;
                    fromPartial(object: Partial<_34.ABCIMessageLog>): _34.ABCIMessageLog;
                    fromAmino(object: _34.ABCIMessageLogAmino): _34.ABCIMessageLog;
                    toAmino(message: _34.ABCIMessageLog): _34.ABCIMessageLogAmino;
                    fromAminoMsg(object: _34.ABCIMessageLogAminoMsg): _34.ABCIMessageLog;
                    toAminoMsg(message: _34.ABCIMessageLog): _34.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _34.ABCIMessageLogProtoMsg): _34.ABCIMessageLog;
                    toProto(message: _34.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _34.ABCIMessageLog): _34.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _34.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.StringEvent;
                    fromPartial(object: Partial<_34.StringEvent>): _34.StringEvent;
                    fromAmino(object: _34.StringEventAmino): _34.StringEvent;
                    toAmino(message: _34.StringEvent): _34.StringEventAmino;
                    fromAminoMsg(object: _34.StringEventAminoMsg): _34.StringEvent;
                    toAminoMsg(message: _34.StringEvent): _34.StringEventAminoMsg;
                    fromProtoMsg(message: _34.StringEventProtoMsg): _34.StringEvent;
                    toProto(message: _34.StringEvent): Uint8Array;
                    toProtoMsg(message: _34.StringEvent): _34.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _34.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Attribute;
                    fromPartial(object: Partial<_34.Attribute>): _34.Attribute;
                    fromAmino(object: _34.AttributeAmino): _34.Attribute;
                    toAmino(message: _34.Attribute): _34.AttributeAmino;
                    fromAminoMsg(object: _34.AttributeAminoMsg): _34.Attribute;
                    toAminoMsg(message: _34.Attribute): _34.AttributeAminoMsg;
                    fromProtoMsg(message: _34.AttributeProtoMsg): _34.Attribute;
                    toProto(message: _34.Attribute): Uint8Array;
                    toProtoMsg(message: _34.Attribute): _34.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _34.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.GasInfo;
                    fromPartial(object: Partial<_34.GasInfo>): _34.GasInfo;
                    fromAmino(object: _34.GasInfoAmino): _34.GasInfo;
                    toAmino(message: _34.GasInfo): _34.GasInfoAmino;
                    fromAminoMsg(object: _34.GasInfoAminoMsg): _34.GasInfo;
                    toAminoMsg(message: _34.GasInfo): _34.GasInfoAminoMsg;
                    fromProtoMsg(message: _34.GasInfoProtoMsg): _34.GasInfo;
                    toProto(message: _34.GasInfo): Uint8Array;
                    toProtoMsg(message: _34.GasInfo): _34.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _34.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Result;
                    fromPartial(object: Partial<_34.Result>): _34.Result;
                    fromAmino(object: _34.ResultAmino): _34.Result;
                    toAmino(message: _34.Result): _34.ResultAmino;
                    fromAminoMsg(object: _34.ResultAminoMsg): _34.Result;
                    toAminoMsg(message: _34.Result): _34.ResultAminoMsg;
                    fromProtoMsg(message: _34.ResultProtoMsg): _34.Result;
                    toProto(message: _34.Result): Uint8Array;
                    toProtoMsg(message: _34.Result): _34.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _34.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SimulationResponse;
                    fromPartial(object: Partial<_34.SimulationResponse>): _34.SimulationResponse;
                    fromAmino(object: _34.SimulationResponseAmino): _34.SimulationResponse;
                    toAmino(message: _34.SimulationResponse): _34.SimulationResponseAmino;
                    fromAminoMsg(object: _34.SimulationResponseAminoMsg): _34.SimulationResponse;
                    toAminoMsg(message: _34.SimulationResponse): _34.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _34.SimulationResponseProtoMsg): _34.SimulationResponse;
                    toProto(message: _34.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _34.SimulationResponse): _34.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _34.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.MsgData;
                    fromPartial(object: Partial<_34.MsgData>): _34.MsgData;
                    fromAmino(object: _34.MsgDataAmino): _34.MsgData;
                    toAmino(message: _34.MsgData): _34.MsgDataAmino;
                    fromAminoMsg(object: _34.MsgDataAminoMsg): _34.MsgData;
                    toAminoMsg(message: _34.MsgData): _34.MsgDataAminoMsg;
                    fromProtoMsg(message: _34.MsgDataProtoMsg): _34.MsgData;
                    toProto(message: _34.MsgData): Uint8Array;
                    toProtoMsg(message: _34.MsgData): _34.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _34.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.TxMsgData;
                    fromPartial(object: Partial<_34.TxMsgData>): _34.TxMsgData;
                    fromAmino(object: _34.TxMsgDataAmino): _34.TxMsgData;
                    toAmino(message: _34.TxMsgData): _34.TxMsgDataAmino;
                    fromAminoMsg(object: _34.TxMsgDataAminoMsg): _34.TxMsgData;
                    toAminoMsg(message: _34.TxMsgData): _34.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _34.TxMsgDataProtoMsg): _34.TxMsgData;
                    toProto(message: _34.TxMsgData): Uint8Array;
                    toProtoMsg(message: _34.TxMsgData): _34.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _34.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SearchTxsResult;
                    fromPartial(object: Partial<_34.SearchTxsResult>): _34.SearchTxsResult;
                    fromAmino(object: _34.SearchTxsResultAmino): _34.SearchTxsResult;
                    toAmino(message: _34.SearchTxsResult): _34.SearchTxsResultAmino;
                    fromAminoMsg(object: _34.SearchTxsResultAminoMsg): _34.SearchTxsResult;
                    toAminoMsg(message: _34.SearchTxsResult): _34.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _34.SearchTxsResultProtoMsg): _34.SearchTxsResult;
                    toProto(message: _34.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _34.SearchTxsResult): _34.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _35.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Pairs;
                    fromPartial(object: Partial<_35.Pairs>): _35.Pairs;
                    fromAmino(object: _35.PairsAmino): _35.Pairs;
                    toAmino(message: _35.Pairs): _35.PairsAmino;
                    fromAminoMsg(object: _35.PairsAminoMsg): _35.Pairs;
                    toAminoMsg(message: _35.Pairs): _35.PairsAminoMsg;
                    fromProtoMsg(message: _35.PairsProtoMsg): _35.Pairs;
                    toProto(message: _35.Pairs): Uint8Array;
                    toProtoMsg(message: _35.Pairs): _35.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _35.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Pair;
                    fromPartial(object: Partial<_35.Pair>): _35.Pair;
                    fromAmino(object: _35.PairAmino): _35.Pair;
                    toAmino(message: _35.Pair): _35.PairAmino;
                    fromAminoMsg(object: _35.PairAminoMsg): _35.Pair;
                    toAminoMsg(message: _35.Pair): _35.PairAminoMsg;
                    fromProtoMsg(message: _35.PairProtoMsg): _35.Pair;
                    toProto(message: _35.Pair): Uint8Array;
                    toProtoMsg(message: _35.Pair): _35.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _237.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _36.ConfigRequest): Promise<_36.ConfigResponse>;
                };
                LCDQueryClient: typeof _218.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _36.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _36.ConfigRequest;
                    fromPartial(_: Partial<_36.ConfigRequest>): _36.ConfigRequest;
                    fromAmino(_: _36.ConfigRequestAmino): _36.ConfigRequest;
                    toAmino(_: _36.ConfigRequest): _36.ConfigRequestAmino;
                    fromAminoMsg(object: _36.ConfigRequestAminoMsg): _36.ConfigRequest;
                    toAminoMsg(message: _36.ConfigRequest): _36.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _36.ConfigRequestProtoMsg): _36.ConfigRequest;
                    toProto(message: _36.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _36.ConfigRequest): _36.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _36.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.ConfigResponse;
                    fromPartial(object: Partial<_36.ConfigResponse>): _36.ConfigResponse;
                    fromAmino(object: _36.ConfigResponseAmino): _36.ConfigResponse;
                    toAmino(message: _36.ConfigResponse): _36.ConfigResponseAmino;
                    fromAminoMsg(object: _36.ConfigResponseAminoMsg): _36.ConfigResponse;
                    toAminoMsg(message: _36.ConfigResponse): _36.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _36.ConfigResponseProtoMsg): _36.ConfigResponse;
                    toProto(message: _36.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _36.ConfigResponse): _36.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _37.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.PageRequest;
                    fromPartial(object: Partial<_37.PageRequest>): _37.PageRequest;
                    fromAmino(object: _37.PageRequestAmino): _37.PageRequest;
                    toAmino(message: _37.PageRequest): _37.PageRequestAmino;
                    fromAminoMsg(object: _37.PageRequestAminoMsg): _37.PageRequest;
                    toAminoMsg(message: _37.PageRequest): _37.PageRequestAminoMsg;
                    fromProtoMsg(message: _37.PageRequestProtoMsg): _37.PageRequest;
                    toProto(message: _37.PageRequest): Uint8Array;
                    toProtoMsg(message: _37.PageRequest): _37.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _37.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.PageResponse;
                    fromPartial(object: Partial<_37.PageResponse>): _37.PageResponse;
                    fromAmino(object: _37.PageResponseAmino): _37.PageResponse;
                    toAmino(message: _37.PageResponse): _37.PageResponseAmino;
                    fromAminoMsg(object: _37.PageResponseAminoMsg): _37.PageResponse;
                    toAminoMsg(message: _37.PageResponse): _37.PageResponseAminoMsg;
                    fromProtoMsg(message: _37.PageResponseProtoMsg): _37.PageResponse;
                    toProto(message: _37.PageResponse): Uint8Array;
                    toProtoMsg(message: _37.PageResponse): _37.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _38.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_38.ListAllInterfacesRequest>): _38.ListAllInterfacesRequest;
                    fromAmino(_: _38.ListAllInterfacesRequestAmino): _38.ListAllInterfacesRequest;
                    toAmino(_: _38.ListAllInterfacesRequest): _38.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _38.ListAllInterfacesRequestAminoMsg): _38.ListAllInterfacesRequest;
                    toAminoMsg(message: _38.ListAllInterfacesRequest): _38.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _38.ListAllInterfacesRequestProtoMsg): _38.ListAllInterfacesRequest;
                    toProto(message: _38.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _38.ListAllInterfacesRequest): _38.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _38.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_38.ListAllInterfacesResponse>): _38.ListAllInterfacesResponse;
                    fromAmino(object: _38.ListAllInterfacesResponseAmino): _38.ListAllInterfacesResponse;
                    toAmino(message: _38.ListAllInterfacesResponse): _38.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _38.ListAllInterfacesResponseAminoMsg): _38.ListAllInterfacesResponse;
                    toAminoMsg(message: _38.ListAllInterfacesResponse): _38.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _38.ListAllInterfacesResponseProtoMsg): _38.ListAllInterfacesResponse;
                    toProto(message: _38.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _38.ListAllInterfacesResponse): _38.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _38.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.ListImplementationsRequest;
                    fromPartial(object: Partial<_38.ListImplementationsRequest>): _38.ListImplementationsRequest;
                    fromAmino(object: _38.ListImplementationsRequestAmino): _38.ListImplementationsRequest;
                    toAmino(message: _38.ListImplementationsRequest): _38.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _38.ListImplementationsRequestAminoMsg): _38.ListImplementationsRequest;
                    toAminoMsg(message: _38.ListImplementationsRequest): _38.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _38.ListImplementationsRequestProtoMsg): _38.ListImplementationsRequest;
                    toProto(message: _38.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _38.ListImplementationsRequest): _38.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _38.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.ListImplementationsResponse;
                    fromPartial(object: Partial<_38.ListImplementationsResponse>): _38.ListImplementationsResponse;
                    fromAmino(object: _38.ListImplementationsResponseAmino): _38.ListImplementationsResponse;
                    toAmino(message: _38.ListImplementationsResponse): _38.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _38.ListImplementationsResponseAminoMsg): _38.ListImplementationsResponse;
                    toAminoMsg(message: _38.ListImplementationsResponse): _38.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _38.ListImplementationsResponseProtoMsg): _38.ListImplementationsResponse;
                    toProto(message: _38.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _38.ListImplementationsResponse): _38.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _39.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.AppDescriptor;
                    fromPartial(object: Partial<_39.AppDescriptor>): _39.AppDescriptor;
                    fromAmino(object: _39.AppDescriptorAmino): _39.AppDescriptor;
                    toAmino(message: _39.AppDescriptor): _39.AppDescriptorAmino;
                    fromAminoMsg(object: _39.AppDescriptorAminoMsg): _39.AppDescriptor;
                    toAminoMsg(message: _39.AppDescriptor): _39.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _39.AppDescriptorProtoMsg): _39.AppDescriptor;
                    toProto(message: _39.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _39.AppDescriptor): _39.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _39.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.TxDescriptor;
                    fromPartial(object: Partial<_39.TxDescriptor>): _39.TxDescriptor;
                    fromAmino(object: _39.TxDescriptorAmino): _39.TxDescriptor;
                    toAmino(message: _39.TxDescriptor): _39.TxDescriptorAmino;
                    fromAminoMsg(object: _39.TxDescriptorAminoMsg): _39.TxDescriptor;
                    toAminoMsg(message: _39.TxDescriptor): _39.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _39.TxDescriptorProtoMsg): _39.TxDescriptor;
                    toProto(message: _39.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _39.TxDescriptor): _39.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _39.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.AuthnDescriptor;
                    fromPartial(object: Partial<_39.AuthnDescriptor>): _39.AuthnDescriptor;
                    fromAmino(object: _39.AuthnDescriptorAmino): _39.AuthnDescriptor;
                    toAmino(message: _39.AuthnDescriptor): _39.AuthnDescriptorAmino;
                    fromAminoMsg(object: _39.AuthnDescriptorAminoMsg): _39.AuthnDescriptor;
                    toAminoMsg(message: _39.AuthnDescriptor): _39.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _39.AuthnDescriptorProtoMsg): _39.AuthnDescriptor;
                    toProto(message: _39.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _39.AuthnDescriptor): _39.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _39.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SigningModeDescriptor;
                    fromPartial(object: Partial<_39.SigningModeDescriptor>): _39.SigningModeDescriptor;
                    fromAmino(object: _39.SigningModeDescriptorAmino): _39.SigningModeDescriptor;
                    toAmino(message: _39.SigningModeDescriptor): _39.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _39.SigningModeDescriptorAminoMsg): _39.SigningModeDescriptor;
                    toAminoMsg(message: _39.SigningModeDescriptor): _39.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _39.SigningModeDescriptorProtoMsg): _39.SigningModeDescriptor;
                    toProto(message: _39.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _39.SigningModeDescriptor): _39.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _39.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.ChainDescriptor;
                    fromPartial(object: Partial<_39.ChainDescriptor>): _39.ChainDescriptor;
                    fromAmino(object: _39.ChainDescriptorAmino): _39.ChainDescriptor;
                    toAmino(message: _39.ChainDescriptor): _39.ChainDescriptorAmino;
                    fromAminoMsg(object: _39.ChainDescriptorAminoMsg): _39.ChainDescriptor;
                    toAminoMsg(message: _39.ChainDescriptor): _39.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _39.ChainDescriptorProtoMsg): _39.ChainDescriptor;
                    toProto(message: _39.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _39.ChainDescriptor): _39.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _39.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.CodecDescriptor;
                    fromPartial(object: Partial<_39.CodecDescriptor>): _39.CodecDescriptor;
                    fromAmino(object: _39.CodecDescriptorAmino): _39.CodecDescriptor;
                    toAmino(message: _39.CodecDescriptor): _39.CodecDescriptorAmino;
                    fromAminoMsg(object: _39.CodecDescriptorAminoMsg): _39.CodecDescriptor;
                    toAminoMsg(message: _39.CodecDescriptor): _39.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _39.CodecDescriptorProtoMsg): _39.CodecDescriptor;
                    toProto(message: _39.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _39.CodecDescriptor): _39.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _39.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.InterfaceDescriptor;
                    fromPartial(object: Partial<_39.InterfaceDescriptor>): _39.InterfaceDescriptor;
                    fromAmino(object: _39.InterfaceDescriptorAmino): _39.InterfaceDescriptor;
                    toAmino(message: _39.InterfaceDescriptor): _39.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _39.InterfaceDescriptorAminoMsg): _39.InterfaceDescriptor;
                    toAminoMsg(message: _39.InterfaceDescriptor): _39.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _39.InterfaceDescriptorProtoMsg): _39.InterfaceDescriptor;
                    toProto(message: _39.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _39.InterfaceDescriptor): _39.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _39.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_39.InterfaceImplementerDescriptor>): _39.InterfaceImplementerDescriptor;
                    fromAmino(object: _39.InterfaceImplementerDescriptorAmino): _39.InterfaceImplementerDescriptor;
                    toAmino(message: _39.InterfaceImplementerDescriptor): _39.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _39.InterfaceImplementerDescriptorAminoMsg): _39.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _39.InterfaceImplementerDescriptor): _39.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _39.InterfaceImplementerDescriptorProtoMsg): _39.InterfaceImplementerDescriptor;
                    toProto(message: _39.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _39.InterfaceImplementerDescriptor): _39.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _39.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_39.InterfaceAcceptingMessageDescriptor>): _39.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _39.InterfaceAcceptingMessageDescriptorAmino): _39.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _39.InterfaceAcceptingMessageDescriptor): _39.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _39.InterfaceAcceptingMessageDescriptorAminoMsg): _39.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _39.InterfaceAcceptingMessageDescriptor): _39.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _39.InterfaceAcceptingMessageDescriptorProtoMsg): _39.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _39.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _39.InterfaceAcceptingMessageDescriptor): _39.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _39.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.ConfigurationDescriptor;
                    fromPartial(object: Partial<_39.ConfigurationDescriptor>): _39.ConfigurationDescriptor;
                    fromAmino(object: _39.ConfigurationDescriptorAmino): _39.ConfigurationDescriptor;
                    toAmino(message: _39.ConfigurationDescriptor): _39.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _39.ConfigurationDescriptorAminoMsg): _39.ConfigurationDescriptor;
                    toAminoMsg(message: _39.ConfigurationDescriptor): _39.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _39.ConfigurationDescriptorProtoMsg): _39.ConfigurationDescriptor;
                    toProto(message: _39.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _39.ConfigurationDescriptor): _39.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _39.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.MsgDescriptor;
                    fromPartial(object: Partial<_39.MsgDescriptor>): _39.MsgDescriptor;
                    fromAmino(object: _39.MsgDescriptorAmino): _39.MsgDescriptor;
                    toAmino(message: _39.MsgDescriptor): _39.MsgDescriptorAmino;
                    fromAminoMsg(object: _39.MsgDescriptorAminoMsg): _39.MsgDescriptor;
                    toAminoMsg(message: _39.MsgDescriptor): _39.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _39.MsgDescriptorProtoMsg): _39.MsgDescriptor;
                    toProto(message: _39.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _39.MsgDescriptor): _39.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _39.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_39.GetAuthnDescriptorRequest>): _39.GetAuthnDescriptorRequest;
                    fromAmino(_: _39.GetAuthnDescriptorRequestAmino): _39.GetAuthnDescriptorRequest;
                    toAmino(_: _39.GetAuthnDescriptorRequest): _39.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _39.GetAuthnDescriptorRequestAminoMsg): _39.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _39.GetAuthnDescriptorRequest): _39.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _39.GetAuthnDescriptorRequestProtoMsg): _39.GetAuthnDescriptorRequest;
                    toProto(message: _39.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _39.GetAuthnDescriptorRequest): _39.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _39.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_39.GetAuthnDescriptorResponse>): _39.GetAuthnDescriptorResponse;
                    fromAmino(object: _39.GetAuthnDescriptorResponseAmino): _39.GetAuthnDescriptorResponse;
                    toAmino(message: _39.GetAuthnDescriptorResponse): _39.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _39.GetAuthnDescriptorResponseAminoMsg): _39.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _39.GetAuthnDescriptorResponse): _39.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _39.GetAuthnDescriptorResponseProtoMsg): _39.GetAuthnDescriptorResponse;
                    toProto(message: _39.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _39.GetAuthnDescriptorResponse): _39.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _39.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_39.GetChainDescriptorRequest>): _39.GetChainDescriptorRequest;
                    fromAmino(_: _39.GetChainDescriptorRequestAmino): _39.GetChainDescriptorRequest;
                    toAmino(_: _39.GetChainDescriptorRequest): _39.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _39.GetChainDescriptorRequestAminoMsg): _39.GetChainDescriptorRequest;
                    toAminoMsg(message: _39.GetChainDescriptorRequest): _39.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _39.GetChainDescriptorRequestProtoMsg): _39.GetChainDescriptorRequest;
                    toProto(message: _39.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _39.GetChainDescriptorRequest): _39.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _39.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_39.GetChainDescriptorResponse>): _39.GetChainDescriptorResponse;
                    fromAmino(object: _39.GetChainDescriptorResponseAmino): _39.GetChainDescriptorResponse;
                    toAmino(message: _39.GetChainDescriptorResponse): _39.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _39.GetChainDescriptorResponseAminoMsg): _39.GetChainDescriptorResponse;
                    toAminoMsg(message: _39.GetChainDescriptorResponse): _39.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _39.GetChainDescriptorResponseProtoMsg): _39.GetChainDescriptorResponse;
                    toProto(message: _39.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _39.GetChainDescriptorResponse): _39.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _39.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_39.GetCodecDescriptorRequest>): _39.GetCodecDescriptorRequest;
                    fromAmino(_: _39.GetCodecDescriptorRequestAmino): _39.GetCodecDescriptorRequest;
                    toAmino(_: _39.GetCodecDescriptorRequest): _39.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _39.GetCodecDescriptorRequestAminoMsg): _39.GetCodecDescriptorRequest;
                    toAminoMsg(message: _39.GetCodecDescriptorRequest): _39.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _39.GetCodecDescriptorRequestProtoMsg): _39.GetCodecDescriptorRequest;
                    toProto(message: _39.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _39.GetCodecDescriptorRequest): _39.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _39.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_39.GetCodecDescriptorResponse>): _39.GetCodecDescriptorResponse;
                    fromAmino(object: _39.GetCodecDescriptorResponseAmino): _39.GetCodecDescriptorResponse;
                    toAmino(message: _39.GetCodecDescriptorResponse): _39.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _39.GetCodecDescriptorResponseAminoMsg): _39.GetCodecDescriptorResponse;
                    toAminoMsg(message: _39.GetCodecDescriptorResponse): _39.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _39.GetCodecDescriptorResponseProtoMsg): _39.GetCodecDescriptorResponse;
                    toProto(message: _39.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _39.GetCodecDescriptorResponse): _39.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _39.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_39.GetConfigurationDescriptorRequest>): _39.GetConfigurationDescriptorRequest;
                    fromAmino(_: _39.GetConfigurationDescriptorRequestAmino): _39.GetConfigurationDescriptorRequest;
                    toAmino(_: _39.GetConfigurationDescriptorRequest): _39.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _39.GetConfigurationDescriptorRequestAminoMsg): _39.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _39.GetConfigurationDescriptorRequest): _39.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _39.GetConfigurationDescriptorRequestProtoMsg): _39.GetConfigurationDescriptorRequest;
                    toProto(message: _39.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _39.GetConfigurationDescriptorRequest): _39.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _39.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_39.GetConfigurationDescriptorResponse>): _39.GetConfigurationDescriptorResponse;
                    fromAmino(object: _39.GetConfigurationDescriptorResponseAmino): _39.GetConfigurationDescriptorResponse;
                    toAmino(message: _39.GetConfigurationDescriptorResponse): _39.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _39.GetConfigurationDescriptorResponseAminoMsg): _39.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _39.GetConfigurationDescriptorResponse): _39.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _39.GetConfigurationDescriptorResponseProtoMsg): _39.GetConfigurationDescriptorResponse;
                    toProto(message: _39.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _39.GetConfigurationDescriptorResponse): _39.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _39.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_39.GetQueryServicesDescriptorRequest>): _39.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _39.GetQueryServicesDescriptorRequestAmino): _39.GetQueryServicesDescriptorRequest;
                    toAmino(_: _39.GetQueryServicesDescriptorRequest): _39.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _39.GetQueryServicesDescriptorRequestAminoMsg): _39.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _39.GetQueryServicesDescriptorRequest): _39.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _39.GetQueryServicesDescriptorRequestProtoMsg): _39.GetQueryServicesDescriptorRequest;
                    toProto(message: _39.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _39.GetQueryServicesDescriptorRequest): _39.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _39.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_39.GetQueryServicesDescriptorResponse>): _39.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _39.GetQueryServicesDescriptorResponseAmino): _39.GetQueryServicesDescriptorResponse;
                    toAmino(message: _39.GetQueryServicesDescriptorResponse): _39.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _39.GetQueryServicesDescriptorResponseAminoMsg): _39.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _39.GetQueryServicesDescriptorResponse): _39.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _39.GetQueryServicesDescriptorResponseProtoMsg): _39.GetQueryServicesDescriptorResponse;
                    toProto(message: _39.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _39.GetQueryServicesDescriptorResponse): _39.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _39.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_39.GetTxDescriptorRequest>): _39.GetTxDescriptorRequest;
                    fromAmino(_: _39.GetTxDescriptorRequestAmino): _39.GetTxDescriptorRequest;
                    toAmino(_: _39.GetTxDescriptorRequest): _39.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _39.GetTxDescriptorRequestAminoMsg): _39.GetTxDescriptorRequest;
                    toAminoMsg(message: _39.GetTxDescriptorRequest): _39.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _39.GetTxDescriptorRequestProtoMsg): _39.GetTxDescriptorRequest;
                    toProto(message: _39.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _39.GetTxDescriptorRequest): _39.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _39.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_39.GetTxDescriptorResponse>): _39.GetTxDescriptorResponse;
                    fromAmino(object: _39.GetTxDescriptorResponseAmino): _39.GetTxDescriptorResponse;
                    toAmino(message: _39.GetTxDescriptorResponse): _39.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _39.GetTxDescriptorResponseAminoMsg): _39.GetTxDescriptorResponse;
                    toAminoMsg(message: _39.GetTxDescriptorResponse): _39.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _39.GetTxDescriptorResponseProtoMsg): _39.GetTxDescriptorResponse;
                    toProto(message: _39.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _39.GetTxDescriptorResponse): _39.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _39.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.QueryServicesDescriptor;
                    fromPartial(object: Partial<_39.QueryServicesDescriptor>): _39.QueryServicesDescriptor;
                    fromAmino(object: _39.QueryServicesDescriptorAmino): _39.QueryServicesDescriptor;
                    toAmino(message: _39.QueryServicesDescriptor): _39.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _39.QueryServicesDescriptorAminoMsg): _39.QueryServicesDescriptor;
                    toAminoMsg(message: _39.QueryServicesDescriptor): _39.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _39.QueryServicesDescriptorProtoMsg): _39.QueryServicesDescriptor;
                    toProto(message: _39.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _39.QueryServicesDescriptor): _39.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _39.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.QueryServiceDescriptor;
                    fromPartial(object: Partial<_39.QueryServiceDescriptor>): _39.QueryServiceDescriptor;
                    fromAmino(object: _39.QueryServiceDescriptorAmino): _39.QueryServiceDescriptor;
                    toAmino(message: _39.QueryServiceDescriptor): _39.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _39.QueryServiceDescriptorAminoMsg): _39.QueryServiceDescriptor;
                    toAminoMsg(message: _39.QueryServiceDescriptor): _39.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _39.QueryServiceDescriptorProtoMsg): _39.QueryServiceDescriptor;
                    toProto(message: _39.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _39.QueryServiceDescriptor): _39.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _39.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.QueryMethodDescriptor;
                    fromPartial(object: Partial<_39.QueryMethodDescriptor>): _39.QueryMethodDescriptor;
                    fromAmino(object: _39.QueryMethodDescriptorAmino): _39.QueryMethodDescriptor;
                    toAmino(message: _39.QueryMethodDescriptor): _39.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _39.QueryMethodDescriptorAminoMsg): _39.QueryMethodDescriptor;
                    toAminoMsg(message: _39.QueryMethodDescriptor): _39.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _39.QueryMethodDescriptorProtoMsg): _39.QueryMethodDescriptor;
                    toProto(message: _39.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _39.QueryMethodDescriptor): _39.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _40.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.Snapshot;
                    fromPartial(object: Partial<_40.Snapshot>): _40.Snapshot;
                    fromAmino(object: _40.SnapshotAmino): _40.Snapshot;
                    toAmino(message: _40.Snapshot): _40.SnapshotAmino;
                    fromAminoMsg(object: _40.SnapshotAminoMsg): _40.Snapshot;
                    toAminoMsg(message: _40.Snapshot): _40.SnapshotAminoMsg;
                    fromProtoMsg(message: _40.SnapshotProtoMsg): _40.Snapshot;
                    toProto(message: _40.Snapshot): Uint8Array;
                    toProtoMsg(message: _40.Snapshot): _40.SnapshotProtoMsg;
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
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _40.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.SnapshotItem;
                    fromPartial(object: Partial<_40.SnapshotItem>): _40.SnapshotItem;
                    fromAmino(object: _40.SnapshotItemAmino): _40.SnapshotItem;
                    toAmino(message: _40.SnapshotItem): _40.SnapshotItemAmino;
                    fromAminoMsg(object: _40.SnapshotItemAminoMsg): _40.SnapshotItem;
                    toAminoMsg(message: _40.SnapshotItem): _40.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _40.SnapshotItemProtoMsg): _40.SnapshotItem;
                    toProto(message: _40.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _40.SnapshotItem): _40.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _40.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.SnapshotStoreItem;
                    fromPartial(object: Partial<_40.SnapshotStoreItem>): _40.SnapshotStoreItem;
                    fromAmino(object: _40.SnapshotStoreItemAmino): _40.SnapshotStoreItem;
                    toAmino(message: _40.SnapshotStoreItem): _40.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _40.SnapshotStoreItemAminoMsg): _40.SnapshotStoreItem;
                    toAminoMsg(message: _40.SnapshotStoreItem): _40.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _40.SnapshotStoreItemProtoMsg): _40.SnapshotStoreItem;
                    toProto(message: _40.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _40.SnapshotStoreItem): _40.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _40.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.SnapshotIAVLItem;
                    fromPartial(object: Partial<_40.SnapshotIAVLItem>): _40.SnapshotIAVLItem;
                    fromAmino(object: _40.SnapshotIAVLItemAmino): _40.SnapshotIAVLItem;
                    toAmino(message: _40.SnapshotIAVLItem): _40.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _40.SnapshotIAVLItemAminoMsg): _40.SnapshotIAVLItem;
                    toAminoMsg(message: _40.SnapshotIAVLItem): _40.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _40.SnapshotIAVLItemProtoMsg): _40.SnapshotIAVLItem;
                    toProto(message: _40.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _40.SnapshotIAVLItem): _40.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _40.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_40.SnapshotExtensionMeta>): _40.SnapshotExtensionMeta;
                    fromAmino(object: _40.SnapshotExtensionMetaAmino): _40.SnapshotExtensionMeta;
                    toAmino(message: _40.SnapshotExtensionMeta): _40.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _40.SnapshotExtensionMetaAminoMsg): _40.SnapshotExtensionMeta;
                    toAminoMsg(message: _40.SnapshotExtensionMeta): _40.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _40.SnapshotExtensionMetaProtoMsg): _40.SnapshotExtensionMeta;
                    toProto(message: _40.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _40.SnapshotExtensionMeta): _40.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _40.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_40.SnapshotExtensionPayload>): _40.SnapshotExtensionPayload;
                    fromAmino(object: _40.SnapshotExtensionPayloadAmino): _40.SnapshotExtensionPayload;
                    toAmino(message: _40.SnapshotExtensionPayload): _40.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _40.SnapshotExtensionPayloadAminoMsg): _40.SnapshotExtensionPayload;
                    toAminoMsg(message: _40.SnapshotExtensionPayload): _40.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _40.SnapshotExtensionPayloadProtoMsg): _40.SnapshotExtensionPayload;
                    toProto(message: _40.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _40.SnapshotExtensionPayload): _40.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _40.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.SnapshotKVItem;
                    fromPartial(object: Partial<_40.SnapshotKVItem>): _40.SnapshotKVItem;
                    fromAmino(object: _40.SnapshotKVItemAmino): _40.SnapshotKVItem;
                    toAmino(message: _40.SnapshotKVItem): _40.SnapshotKVItemAmino;
                    fromAminoMsg(object: _40.SnapshotKVItemAminoMsg): _40.SnapshotKVItem;
                    toAminoMsg(message: _40.SnapshotKVItem): _40.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _40.SnapshotKVItemProtoMsg): _40.SnapshotKVItem;
                    toProto(message: _40.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _40.SnapshotKVItem): _40.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _40.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.SnapshotSchema;
                    fromPartial(object: Partial<_40.SnapshotSchema>): _40.SnapshotSchema;
                    fromAmino(object: _40.SnapshotSchemaAmino): _40.SnapshotSchema;
                    toAmino(message: _40.SnapshotSchema): _40.SnapshotSchemaAmino;
                    fromAminoMsg(object: _40.SnapshotSchemaAminoMsg): _40.SnapshotSchema;
                    toAminoMsg(message: _40.SnapshotSchema): _40.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _40.SnapshotSchemaProtoMsg): _40.SnapshotSchema;
                    toProto(message: _40.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _40.SnapshotSchema): _40.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _42.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.StoreKVPair;
                    fromPartial(object: Partial<_42.StoreKVPair>): _42.StoreKVPair;
                    fromAmino(object: _42.StoreKVPairAmino): _42.StoreKVPair;
                    toAmino(message: _42.StoreKVPair): _42.StoreKVPairAmino;
                    fromAminoMsg(object: _42.StoreKVPairAminoMsg): _42.StoreKVPair;
                    toAminoMsg(message: _42.StoreKVPair): _42.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _42.StoreKVPairProtoMsg): _42.StoreKVPair;
                    toProto(message: _42.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _42.StoreKVPair): _42.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _42.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.BlockMetadata;
                    fromPartial(object: Partial<_42.BlockMetadata>): _42.BlockMetadata;
                    fromAmino(object: _42.BlockMetadataAmino): _42.BlockMetadata;
                    toAmino(message: _42.BlockMetadata): _42.BlockMetadataAmino;
                    fromAminoMsg(object: _42.BlockMetadataAminoMsg): _42.BlockMetadata;
                    toAminoMsg(message: _42.BlockMetadata): _42.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _42.BlockMetadataProtoMsg): _42.BlockMetadata;
                    toProto(message: _42.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _42.BlockMetadata): _42.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _42.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_42.BlockMetadata_DeliverTx>): _42.BlockMetadata_DeliverTx;
                    fromAmino(object: _42.BlockMetadata_DeliverTxAmino): _42.BlockMetadata_DeliverTx;
                    toAmino(message: _42.BlockMetadata_DeliverTx): _42.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _42.BlockMetadata_DeliverTxAminoMsg): _42.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _42.BlockMetadata_DeliverTx): _42.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _42.BlockMetadata_DeliverTxProtoMsg): _42.BlockMetadata_DeliverTx;
                    toProto(message: _42.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _42.BlockMetadata_DeliverTx): _42.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _41.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.CommitInfo;
                    fromPartial(object: Partial<_41.CommitInfo>): _41.CommitInfo;
                    fromAmino(object: _41.CommitInfoAmino): _41.CommitInfo;
                    toAmino(message: _41.CommitInfo): _41.CommitInfoAmino;
                    fromAminoMsg(object: _41.CommitInfoAminoMsg): _41.CommitInfo;
                    toAminoMsg(message: _41.CommitInfo): _41.CommitInfoAminoMsg;
                    fromProtoMsg(message: _41.CommitInfoProtoMsg): _41.CommitInfo;
                    toProto(message: _41.CommitInfo): Uint8Array;
                    toProtoMsg(message: _41.CommitInfo): _41.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _41.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.StoreInfo;
                    fromPartial(object: Partial<_41.StoreInfo>): _41.StoreInfo;
                    fromAmino(object: _41.StoreInfoAmino): _41.StoreInfo;
                    toAmino(message: _41.StoreInfo): _41.StoreInfoAmino;
                    fromAminoMsg(object: _41.StoreInfoAminoMsg): _41.StoreInfo;
                    toAminoMsg(message: _41.StoreInfo): _41.StoreInfoAminoMsg;
                    fromProtoMsg(message: _41.StoreInfoProtoMsg): _41.StoreInfo;
                    toProto(message: _41.StoreInfo): Uint8Array;
                    toProtoMsg(message: _41.StoreInfo): _41.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _41.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.CommitID;
                    fromPartial(object: Partial<_41.CommitID>): _41.CommitID;
                    fromAmino(object: _41.CommitIDAmino): _41.CommitID;
                    toAmino(message: _41.CommitID): _41.CommitIDAmino;
                    fromAminoMsg(object: _41.CommitIDAminoMsg): _41.CommitID;
                    toAminoMsg(message: _41.CommitID): _41.CommitIDAminoMsg;
                    fromProtoMsg(message: _41.CommitIDProtoMsg): _41.CommitID;
                    toProto(message: _41.CommitID): Uint8Array;
                    toProtoMsg(message: _41.CommitID): _41.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _238.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _43.GetNodeInfoRequest): Promise<_43.GetNodeInfoResponse>;
                    getSyncing(request?: _43.GetSyncingRequest): Promise<_43.GetSyncingResponse>;
                    getLatestBlock(request?: _43.GetLatestBlockRequest): Promise<_43.GetLatestBlockResponse>;
                    getBlockByHeight(request: _43.GetBlockByHeightRequest): Promise<_43.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _43.GetLatestValidatorSetRequest): Promise<_43.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _43.GetValidatorSetByHeightRequest): Promise<_43.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _43.ABCIQueryRequest): Promise<_43.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _219.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _44.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Block;
                    fromPartial(object: Partial<_44.Block>): _44.Block;
                    fromAmino(object: _44.BlockAmino): _44.Block;
                    toAmino(message: _44.Block): _44.BlockAmino;
                    fromAminoMsg(object: _44.BlockAminoMsg): _44.Block;
                    toAminoMsg(message: _44.Block): _44.BlockAminoMsg;
                    fromProtoMsg(message: _44.BlockProtoMsg): _44.Block;
                    toProto(message: _44.Block): Uint8Array;
                    toProtoMsg(message: _44.Block): _44.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _44.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Header;
                    fromPartial(object: Partial<_44.Header>): _44.Header;
                    fromAmino(object: _44.HeaderAmino): _44.Header;
                    toAmino(message: _44.Header): _44.HeaderAmino;
                    fromAminoMsg(object: _44.HeaderAminoMsg): _44.Header;
                    toAminoMsg(message: _44.Header): _44.HeaderAminoMsg;
                    fromProtoMsg(message: _44.HeaderProtoMsg): _44.Header;
                    toProto(message: _44.Header): Uint8Array;
                    toProtoMsg(message: _44.Header): _44.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _43.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_43.GetValidatorSetByHeightRequest>): _43.GetValidatorSetByHeightRequest;
                    fromAmino(object: _43.GetValidatorSetByHeightRequestAmino): _43.GetValidatorSetByHeightRequest;
                    toAmino(message: _43.GetValidatorSetByHeightRequest): _43.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _43.GetValidatorSetByHeightRequestAminoMsg): _43.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _43.GetValidatorSetByHeightRequest): _43.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _43.GetValidatorSetByHeightRequestProtoMsg): _43.GetValidatorSetByHeightRequest;
                    toProto(message: _43.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _43.GetValidatorSetByHeightRequest): _43.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _43.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_43.GetValidatorSetByHeightResponse>): _43.GetValidatorSetByHeightResponse;
                    fromAmino(object: _43.GetValidatorSetByHeightResponseAmino): _43.GetValidatorSetByHeightResponse;
                    toAmino(message: _43.GetValidatorSetByHeightResponse): _43.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _43.GetValidatorSetByHeightResponseAminoMsg): _43.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _43.GetValidatorSetByHeightResponse): _43.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _43.GetValidatorSetByHeightResponseProtoMsg): _43.GetValidatorSetByHeightResponse;
                    toProto(message: _43.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _43.GetValidatorSetByHeightResponse): _43.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _43.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_43.GetLatestValidatorSetRequest>): _43.GetLatestValidatorSetRequest;
                    fromAmino(object: _43.GetLatestValidatorSetRequestAmino): _43.GetLatestValidatorSetRequest;
                    toAmino(message: _43.GetLatestValidatorSetRequest): _43.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _43.GetLatestValidatorSetRequestAminoMsg): _43.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _43.GetLatestValidatorSetRequest): _43.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _43.GetLatestValidatorSetRequestProtoMsg): _43.GetLatestValidatorSetRequest;
                    toProto(message: _43.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _43.GetLatestValidatorSetRequest): _43.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _43.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_43.GetLatestValidatorSetResponse>): _43.GetLatestValidatorSetResponse;
                    fromAmino(object: _43.GetLatestValidatorSetResponseAmino): _43.GetLatestValidatorSetResponse;
                    toAmino(message: _43.GetLatestValidatorSetResponse): _43.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _43.GetLatestValidatorSetResponseAminoMsg): _43.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _43.GetLatestValidatorSetResponse): _43.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _43.GetLatestValidatorSetResponseProtoMsg): _43.GetLatestValidatorSetResponse;
                    toProto(message: _43.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _43.GetLatestValidatorSetResponse): _43.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _43.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Validator;
                    fromPartial(object: Partial<_43.Validator>): _43.Validator;
                    fromAmino(object: _43.ValidatorAmino): _43.Validator;
                    toAmino(message: _43.Validator): _43.ValidatorAmino;
                    fromAminoMsg(object: _43.ValidatorAminoMsg): _43.Validator;
                    toAminoMsg(message: _43.Validator): _43.ValidatorAminoMsg;
                    fromProtoMsg(message: _43.ValidatorProtoMsg): _43.Validator;
                    toProto(message: _43.Validator): Uint8Array;
                    toProtoMsg(message: _43.Validator): _43.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _43.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_43.GetBlockByHeightRequest>): _43.GetBlockByHeightRequest;
                    fromAmino(object: _43.GetBlockByHeightRequestAmino): _43.GetBlockByHeightRequest;
                    toAmino(message: _43.GetBlockByHeightRequest): _43.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _43.GetBlockByHeightRequestAminoMsg): _43.GetBlockByHeightRequest;
                    toAminoMsg(message: _43.GetBlockByHeightRequest): _43.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _43.GetBlockByHeightRequestProtoMsg): _43.GetBlockByHeightRequest;
                    toProto(message: _43.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _43.GetBlockByHeightRequest): _43.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _43.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_43.GetBlockByHeightResponse>): _43.GetBlockByHeightResponse;
                    fromAmino(object: _43.GetBlockByHeightResponseAmino): _43.GetBlockByHeightResponse;
                    toAmino(message: _43.GetBlockByHeightResponse): _43.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _43.GetBlockByHeightResponseAminoMsg): _43.GetBlockByHeightResponse;
                    toAminoMsg(message: _43.GetBlockByHeightResponse): _43.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _43.GetBlockByHeightResponseProtoMsg): _43.GetBlockByHeightResponse;
                    toProto(message: _43.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _43.GetBlockByHeightResponse): _43.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _43.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetLatestBlockRequest;
                    fromPartial(_: Partial<_43.GetLatestBlockRequest>): _43.GetLatestBlockRequest;
                    fromAmino(_: _43.GetLatestBlockRequestAmino): _43.GetLatestBlockRequest;
                    toAmino(_: _43.GetLatestBlockRequest): _43.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _43.GetLatestBlockRequestAminoMsg): _43.GetLatestBlockRequest;
                    toAminoMsg(message: _43.GetLatestBlockRequest): _43.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _43.GetLatestBlockRequestProtoMsg): _43.GetLatestBlockRequest;
                    toProto(message: _43.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _43.GetLatestBlockRequest): _43.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _43.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetLatestBlockResponse;
                    fromPartial(object: Partial<_43.GetLatestBlockResponse>): _43.GetLatestBlockResponse;
                    fromAmino(object: _43.GetLatestBlockResponseAmino): _43.GetLatestBlockResponse;
                    toAmino(message: _43.GetLatestBlockResponse): _43.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _43.GetLatestBlockResponseAminoMsg): _43.GetLatestBlockResponse;
                    toAminoMsg(message: _43.GetLatestBlockResponse): _43.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _43.GetLatestBlockResponseProtoMsg): _43.GetLatestBlockResponse;
                    toProto(message: _43.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _43.GetLatestBlockResponse): _43.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _43.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetSyncingRequest;
                    fromPartial(_: Partial<_43.GetSyncingRequest>): _43.GetSyncingRequest;
                    fromAmino(_: _43.GetSyncingRequestAmino): _43.GetSyncingRequest;
                    toAmino(_: _43.GetSyncingRequest): _43.GetSyncingRequestAmino;
                    fromAminoMsg(object: _43.GetSyncingRequestAminoMsg): _43.GetSyncingRequest;
                    toAminoMsg(message: _43.GetSyncingRequest): _43.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _43.GetSyncingRequestProtoMsg): _43.GetSyncingRequest;
                    toProto(message: _43.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _43.GetSyncingRequest): _43.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _43.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetSyncingResponse;
                    fromPartial(object: Partial<_43.GetSyncingResponse>): _43.GetSyncingResponse;
                    fromAmino(object: _43.GetSyncingResponseAmino): _43.GetSyncingResponse;
                    toAmino(message: _43.GetSyncingResponse): _43.GetSyncingResponseAmino;
                    fromAminoMsg(object: _43.GetSyncingResponseAminoMsg): _43.GetSyncingResponse;
                    toAminoMsg(message: _43.GetSyncingResponse): _43.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _43.GetSyncingResponseProtoMsg): _43.GetSyncingResponse;
                    toProto(message: _43.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _43.GetSyncingResponse): _43.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _43.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _43.GetNodeInfoRequest;
                    fromPartial(_: Partial<_43.GetNodeInfoRequest>): _43.GetNodeInfoRequest;
                    fromAmino(_: _43.GetNodeInfoRequestAmino): _43.GetNodeInfoRequest;
                    toAmino(_: _43.GetNodeInfoRequest): _43.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _43.GetNodeInfoRequestAminoMsg): _43.GetNodeInfoRequest;
                    toAminoMsg(message: _43.GetNodeInfoRequest): _43.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _43.GetNodeInfoRequestProtoMsg): _43.GetNodeInfoRequest;
                    toProto(message: _43.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _43.GetNodeInfoRequest): _43.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _43.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GetNodeInfoResponse;
                    fromPartial(object: Partial<_43.GetNodeInfoResponse>): _43.GetNodeInfoResponse;
                    fromAmino(object: _43.GetNodeInfoResponseAmino): _43.GetNodeInfoResponse;
                    toAmino(message: _43.GetNodeInfoResponse): _43.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _43.GetNodeInfoResponseAminoMsg): _43.GetNodeInfoResponse;
                    toAminoMsg(message: _43.GetNodeInfoResponse): _43.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _43.GetNodeInfoResponseProtoMsg): _43.GetNodeInfoResponse;
                    toProto(message: _43.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _43.GetNodeInfoResponse): _43.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _43.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.VersionInfo;
                    fromPartial(object: Partial<_43.VersionInfo>): _43.VersionInfo;
                    fromAmino(object: _43.VersionInfoAmino): _43.VersionInfo;
                    toAmino(message: _43.VersionInfo): _43.VersionInfoAmino;
                    fromAminoMsg(object: _43.VersionInfoAminoMsg): _43.VersionInfo;
                    toAminoMsg(message: _43.VersionInfo): _43.VersionInfoAminoMsg;
                    fromProtoMsg(message: _43.VersionInfoProtoMsg): _43.VersionInfo;
                    toProto(message: _43.VersionInfo): Uint8Array;
                    toProtoMsg(message: _43.VersionInfo): _43.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _43.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Module;
                    fromPartial(object: Partial<_43.Module>): _43.Module;
                    fromAmino(object: _43.ModuleAmino): _43.Module;
                    toAmino(message: _43.Module): _43.ModuleAmino;
                    fromAminoMsg(object: _43.ModuleAminoMsg): _43.Module;
                    toAminoMsg(message: _43.Module): _43.ModuleAminoMsg;
                    fromProtoMsg(message: _43.ModuleProtoMsg): _43.Module;
                    toProto(message: _43.Module): Uint8Array;
                    toProtoMsg(message: _43.Module): _43.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _43.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.ABCIQueryRequest;
                    fromPartial(object: Partial<_43.ABCIQueryRequest>): _43.ABCIQueryRequest;
                    fromAmino(object: _43.ABCIQueryRequestAmino): _43.ABCIQueryRequest;
                    toAmino(message: _43.ABCIQueryRequest): _43.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _43.ABCIQueryRequestAminoMsg): _43.ABCIQueryRequest;
                    toAminoMsg(message: _43.ABCIQueryRequest): _43.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _43.ABCIQueryRequestProtoMsg): _43.ABCIQueryRequest;
                    toProto(message: _43.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _43.ABCIQueryRequest): _43.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _43.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.ABCIQueryResponse;
                    fromPartial(object: Partial<_43.ABCIQueryResponse>): _43.ABCIQueryResponse;
                    fromAmino(object: _43.ABCIQueryResponseAmino): _43.ABCIQueryResponse;
                    toAmino(message: _43.ABCIQueryResponse): _43.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _43.ABCIQueryResponseAminoMsg): _43.ABCIQueryResponse;
                    toAminoMsg(message: _43.ABCIQueryResponse): _43.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _43.ABCIQueryResponseProtoMsg): _43.ABCIQueryResponse;
                    toProto(message: _43.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _43.ABCIQueryResponse): _43.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _43.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.ProofOp;
                    fromPartial(object: Partial<_43.ProofOp>): _43.ProofOp;
                    fromAmino(object: _43.ProofOpAmino): _43.ProofOp;
                    toAmino(message: _43.ProofOp): _43.ProofOpAmino;
                    fromAminoMsg(object: _43.ProofOpAminoMsg): _43.ProofOp;
                    toAminoMsg(message: _43.ProofOp): _43.ProofOpAminoMsg;
                    fromProtoMsg(message: _43.ProofOpProtoMsg): _43.ProofOp;
                    toProto(message: _43.ProofOp): Uint8Array;
                    toProtoMsg(message: _43.ProofOp): _43.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _43.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.ProofOps;
                    fromPartial(object: Partial<_43.ProofOps>): _43.ProofOps;
                    fromAmino(object: _43.ProofOpsAmino): _43.ProofOps;
                    toAmino(message: _43.ProofOps): _43.ProofOpsAmino;
                    fromAminoMsg(object: _43.ProofOpsAminoMsg): _43.ProofOps;
                    toAminoMsg(message: _43.ProofOps): _43.ProofOpsAminoMsg;
                    fromProtoMsg(message: _43.ProofOpsProtoMsg): _43.ProofOps;
                    toProto(message: _43.ProofOps): Uint8Array;
                    toProtoMsg(message: _43.ProofOps): _43.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _45.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.Coin;
                fromPartial(object: Partial<_45.Coin>): _45.Coin;
                fromAmino(object: _45.CoinAmino): _45.Coin;
                toAmino(message: _45.Coin): _45.CoinAmino;
                fromAminoMsg(object: _45.CoinAminoMsg): _45.Coin;
                toAminoMsg(message: _45.Coin): _45.CoinAminoMsg;
                fromProtoMsg(message: _45.CoinProtoMsg): _45.Coin;
                toProto(message: _45.Coin): Uint8Array;
                toProtoMsg(message: _45.Coin): _45.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _45.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.DecCoin;
                fromPartial(object: Partial<_45.DecCoin>): _45.DecCoin;
                fromAmino(object: _45.DecCoinAmino): _45.DecCoin;
                toAmino(message: _45.DecCoin): _45.DecCoinAmino;
                fromAminoMsg(object: _45.DecCoinAminoMsg): _45.DecCoin;
                toAminoMsg(message: _45.DecCoin): _45.DecCoinAminoMsg;
                fromProtoMsg(message: _45.DecCoinProtoMsg): _45.DecCoin;
                toProto(message: _45.DecCoin): Uint8Array;
                toProtoMsg(message: _45.DecCoin): _45.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _45.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.IntProto;
                fromPartial(object: Partial<_45.IntProto>): _45.IntProto;
                fromAmino(object: _45.IntProtoAmino): _45.IntProto;
                toAmino(message: _45.IntProto): _45.IntProtoAmino;
                fromAminoMsg(object: _45.IntProtoAminoMsg): _45.IntProto;
                toAminoMsg(message: _45.IntProto): _45.IntProtoAminoMsg;
                fromProtoMsg(message: _45.IntProtoProtoMsg): _45.IntProto;
                toProto(message: _45.IntProto): Uint8Array;
                toProtoMsg(message: _45.IntProto): _45.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _45.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.DecProto;
                fromPartial(object: Partial<_45.DecProto>): _45.DecProto;
                fromAmino(object: _45.DecProtoAmino): _45.DecProto;
                toAmino(message: _45.DecProto): _45.DecProtoAmino;
                fromAminoMsg(object: _45.DecProtoAminoMsg): _45.DecProto;
                toAminoMsg(message: _45.DecProto): _45.DecProtoAminoMsg;
                fromProtoMsg(message: _45.DecProtoProtoMsg): _45.DecProto;
                toProto(message: _45.DecProto): Uint8Array;
                toProtoMsg(message: _45.DecProto): _45.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _47.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.GenesisOwners;
                fromPartial(object: Partial<_47.GenesisOwners>): _47.GenesisOwners;
                fromAmino(object: _47.GenesisOwnersAmino): _47.GenesisOwners;
                toAmino(message: _47.GenesisOwners): _47.GenesisOwnersAmino;
                fromAminoMsg(object: _47.GenesisOwnersAminoMsg): _47.GenesisOwners;
                toAminoMsg(message: _47.GenesisOwners): _47.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _47.GenesisOwnersProtoMsg): _47.GenesisOwners;
                toProto(message: _47.GenesisOwners): Uint8Array;
                toProtoMsg(message: _47.GenesisOwners): _47.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _47.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.GenesisState;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
                fromAmino(object: _47.GenesisStateAmino): _47.GenesisState;
                toAmino(message: _47.GenesisState): _47.GenesisStateAmino;
                fromAminoMsg(object: _47.GenesisStateAminoMsg): _47.GenesisState;
                toAminoMsg(message: _47.GenesisState): _47.GenesisStateAminoMsg;
                fromProtoMsg(message: _47.GenesisStateProtoMsg): _47.GenesisState;
                toProto(message: _47.GenesisState): Uint8Array;
                toProtoMsg(message: _47.GenesisState): _47.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _46.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Capability;
                fromPartial(object: Partial<_46.Capability>): _46.Capability;
                fromAmino(object: _46.CapabilityAmino): _46.Capability;
                toAmino(message: _46.Capability): _46.CapabilityAmino;
                fromAminoMsg(object: _46.CapabilityAminoMsg): _46.Capability;
                toAminoMsg(message: _46.Capability): _46.CapabilityAminoMsg;
                fromProtoMsg(message: _46.CapabilityProtoMsg): _46.Capability;
                toProto(message: _46.Capability): Uint8Array;
                toProtoMsg(message: _46.Capability): _46.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _46.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Owner;
                fromPartial(object: Partial<_46.Owner>): _46.Owner;
                fromAmino(object: _46.OwnerAmino): _46.Owner;
                toAmino(message: _46.Owner): _46.OwnerAmino;
                fromAminoMsg(object: _46.OwnerAminoMsg): _46.Owner;
                toAminoMsg(message: _46.Owner): _46.OwnerAminoMsg;
                fromProtoMsg(message: _46.OwnerProtoMsg): _46.Owner;
                toProto(message: _46.Owner): Uint8Array;
                toProtoMsg(message: _46.Owner): _46.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _46.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.CapabilityOwners;
                fromPartial(object: Partial<_46.CapabilityOwners>): _46.CapabilityOwners;
                fromAmino(object: _46.CapabilityOwnersAmino): _46.CapabilityOwners;
                toAmino(message: _46.CapabilityOwners): _46.CapabilityOwnersAmino;
                fromAminoMsg(object: _46.CapabilityOwnersAminoMsg): _46.CapabilityOwners;
                toAminoMsg(message: _46.CapabilityOwners): _46.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _46.CapabilityOwnersProtoMsg): _46.CapabilityOwners;
                toProto(message: _46.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _46.CapabilityOwners): _46.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _254.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _49.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _49.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _49.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _49.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _49.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _49.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _49.MsgVerifyInvariant) => _49.MsgVerifyInvariantAmino;
                    fromAmino: (object: _49.MsgVerifyInvariantAmino) => _49.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _49.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgVerifyInvariant;
                fromPartial(object: Partial<_49.MsgVerifyInvariant>): _49.MsgVerifyInvariant;
                fromAmino(object: _49.MsgVerifyInvariantAmino): _49.MsgVerifyInvariant;
                toAmino(message: _49.MsgVerifyInvariant): _49.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _49.MsgVerifyInvariantAminoMsg): _49.MsgVerifyInvariant;
                toAminoMsg(message: _49.MsgVerifyInvariant): _49.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _49.MsgVerifyInvariantProtoMsg): _49.MsgVerifyInvariant;
                toProto(message: _49.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _49.MsgVerifyInvariant): _49.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _49.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_49.MsgVerifyInvariantResponse>): _49.MsgVerifyInvariantResponse;
                fromAmino(_: _49.MsgVerifyInvariantResponseAmino): _49.MsgVerifyInvariantResponse;
                toAmino(_: _49.MsgVerifyInvariantResponse): _49.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _49.MsgVerifyInvariantResponseAminoMsg): _49.MsgVerifyInvariantResponse;
                toAminoMsg(message: _49.MsgVerifyInvariantResponse): _49.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _49.MsgVerifyInvariantResponseProtoMsg): _49.MsgVerifyInvariantResponse;
                toProto(message: _49.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _49.MsgVerifyInvariantResponse): _49.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _48.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
                fromAmino(object: _48.GenesisStateAmino): _48.GenesisState;
                toAmino(message: _48.GenesisState): _48.GenesisStateAmino;
                fromAminoMsg(object: _48.GenesisStateAminoMsg): _48.GenesisState;
                toAminoMsg(message: _48.GenesisState): _48.GenesisStateAminoMsg;
                fromProtoMsg(message: _48.GenesisStateProtoMsg): _48.GenesisState;
                toProto(message: _48.GenesisState): Uint8Array;
                toProtoMsg(message: _48.GenesisState): _48.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _51.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.BIP44Params;
                    fromPartial(object: Partial<_51.BIP44Params>): _51.BIP44Params;
                    fromAmino(object: _51.BIP44ParamsAmino): _51.BIP44Params;
                    toAmino(message: _51.BIP44Params): _51.BIP44ParamsAmino;
                    fromAminoMsg(object: _51.BIP44ParamsAminoMsg): _51.BIP44Params;
                    toAminoMsg(message: _51.BIP44Params): _51.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _51.BIP44ParamsProtoMsg): _51.BIP44Params;
                    toProto(message: _51.BIP44Params): Uint8Array;
                    toProtoMsg(message: _51.BIP44Params): _51.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _52.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.Record;
                    fromPartial(object: Partial<_52.Record>): _52.Record;
                    fromAmino(object: _52.RecordAmino): _52.Record;
                    toAmino(message: _52.Record): _52.RecordAmino;
                    fromAminoMsg(object: _52.RecordAminoMsg): _52.Record;
                    toAminoMsg(message: _52.Record): _52.RecordAminoMsg;
                    fromProtoMsg(message: _52.RecordProtoMsg): _52.Record;
                    toProto(message: _52.Record): Uint8Array;
                    toProtoMsg(message: _52.Record): _52.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _52.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.Record_Local;
                    fromPartial(object: Partial<_52.Record_Local>): _52.Record_Local;
                    fromAmino(object: _52.Record_LocalAmino): _52.Record_Local;
                    toAmino(message: _52.Record_Local): _52.Record_LocalAmino;
                    fromAminoMsg(object: _52.Record_LocalAminoMsg): _52.Record_Local;
                    toAminoMsg(message: _52.Record_Local): _52.Record_LocalAminoMsg;
                    fromProtoMsg(message: _52.Record_LocalProtoMsg): _52.Record_Local;
                    toProto(message: _52.Record_Local): Uint8Array;
                    toProtoMsg(message: _52.Record_Local): _52.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _52.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.Record_Ledger;
                    fromPartial(object: Partial<_52.Record_Ledger>): _52.Record_Ledger;
                    fromAmino(object: _52.Record_LedgerAmino): _52.Record_Ledger;
                    toAmino(message: _52.Record_Ledger): _52.Record_LedgerAmino;
                    fromAminoMsg(object: _52.Record_LedgerAminoMsg): _52.Record_Ledger;
                    toAminoMsg(message: _52.Record_Ledger): _52.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _52.Record_LedgerProtoMsg): _52.Record_Ledger;
                    toProto(message: _52.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _52.Record_Ledger): _52.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _52.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _52.Record_Multi;
                    fromPartial(_: Partial<_52.Record_Multi>): _52.Record_Multi;
                    fromAmino(_: _52.Record_MultiAmino): _52.Record_Multi;
                    toAmino(_: _52.Record_Multi): _52.Record_MultiAmino;
                    fromAminoMsg(object: _52.Record_MultiAminoMsg): _52.Record_Multi;
                    toAminoMsg(message: _52.Record_Multi): _52.Record_MultiAminoMsg;
                    fromProtoMsg(message: _52.Record_MultiProtoMsg): _52.Record_Multi;
                    toProto(message: _52.Record_Multi): Uint8Array;
                    toProtoMsg(message: _52.Record_Multi): _52.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _52.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _52.Record_Offline;
                    fromPartial(_: Partial<_52.Record_Offline>): _52.Record_Offline;
                    fromAmino(_: _52.Record_OfflineAmino): _52.Record_Offline;
                    toAmino(_: _52.Record_Offline): _52.Record_OfflineAmino;
                    fromAminoMsg(object: _52.Record_OfflineAminoMsg): _52.Record_Offline;
                    toAminoMsg(message: _52.Record_Offline): _52.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _52.Record_OfflineProtoMsg): _52.Record_Offline;
                    toProto(message: _52.Record_Offline): Uint8Array;
                    toProtoMsg(message: _52.Record_Offline): _52.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _53.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.LegacyAminoPubKey;
                fromPartial(object: Partial<_53.LegacyAminoPubKey>): _53.LegacyAminoPubKey;
                fromAmino(object: _53.LegacyAminoPubKeyAmino): _53.LegacyAminoPubKey;
                toAmino(message: _53.LegacyAminoPubKey): _53.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _53.LegacyAminoPubKeyAminoMsg): _53.LegacyAminoPubKey;
                toAminoMsg(message: _53.LegacyAminoPubKey): _53.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _53.LegacyAminoPubKeyProtoMsg): _53.LegacyAminoPubKey;
                toProto(message: _53.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _53.LegacyAminoPubKey): _53.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _54.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.PubKey;
                fromPartial(object: Partial<_54.PubKey>): _54.PubKey;
                fromAmino(object: _54.PubKeyAmino): _54.PubKey;
                toAmino(message: _54.PubKey): _54.PubKeyAmino;
                fromAminoMsg(object: _54.PubKeyAminoMsg): _54.PubKey;
                toAminoMsg(message: _54.PubKey): _54.PubKeyAminoMsg;
                fromProtoMsg(message: _54.PubKeyProtoMsg): _54.PubKey;
                toProto(message: _54.PubKey): Uint8Array;
                toProtoMsg(message: _54.PubKey): _54.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _54.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.PrivKey;
                fromPartial(object: Partial<_54.PrivKey>): _54.PrivKey;
                fromAmino(object: _54.PrivKeyAmino): _54.PrivKey;
                toAmino(message: _54.PrivKey): _54.PrivKeyAmino;
                fromAminoMsg(object: _54.PrivKeyAminoMsg): _54.PrivKey;
                toAminoMsg(message: _54.PrivKey): _54.PrivKeyAminoMsg;
                fromProtoMsg(message: _54.PrivKeyProtoMsg): _54.PrivKey;
                toProto(message: _54.PrivKey): Uint8Array;
                toProtoMsg(message: _54.PrivKey): _54.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _55.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.PubKey;
                fromPartial(object: Partial<_55.PubKey>): _55.PubKey;
                fromAmino(object: _55.PubKeyAmino): _55.PubKey;
                toAmino(message: _55.PubKey): _55.PubKeyAmino;
                fromAminoMsg(object: _55.PubKeyAminoMsg): _55.PubKey;
                toAminoMsg(message: _55.PubKey): _55.PubKeyAminoMsg;
                fromProtoMsg(message: _55.PubKeyProtoMsg): _55.PubKey;
                toProto(message: _55.PubKey): Uint8Array;
                toProtoMsg(message: _55.PubKey): _55.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _55.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.PrivKey;
                fromPartial(object: Partial<_55.PrivKey>): _55.PrivKey;
                fromAmino(object: _55.PrivKeyAmino): _55.PrivKey;
                toAmino(message: _55.PrivKey): _55.PrivKeyAmino;
                fromAminoMsg(object: _55.PrivKeyAminoMsg): _55.PrivKey;
                toAminoMsg(message: _55.PrivKey): _55.PrivKeyAminoMsg;
                fromProtoMsg(message: _55.PrivKeyProtoMsg): _55.PrivKey;
                toProto(message: _55.PrivKey): Uint8Array;
                toProtoMsg(message: _55.PrivKey): _55.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _255.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                validatorOutstandingRewards(request: _58.QueryValidatorOutstandingRewardsRequest): Promise<_58.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _58.QueryValidatorCommissionRequest): Promise<_58.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _58.QueryValidatorSlashesRequest): Promise<_58.QueryValidatorSlashesResponse>;
                delegationRewards(request: _58.QueryDelegationRewardsRequest): Promise<_58.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _58.QueryDelegationTotalRewardsRequest): Promise<_58.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _58.QueryDelegatorValidatorsRequest): Promise<_58.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _58.QueryDelegatorWithdrawAddressRequest): Promise<_58.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _58.QueryCommunityPoolRequest): Promise<_58.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSetWithdrawAddress) => _59.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _59.MsgSetWithdrawAddressAmino) => _59.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _59.MsgWithdrawDelegatorReward) => _59.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _59.MsgWithdrawDelegatorRewardAmino) => _59.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _59.MsgWithdrawValidatorCommission) => _59.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _59.MsgWithdrawValidatorCommissionAmino) => _59.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _59.MsgFundCommunityPool) => _59.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _59.MsgFundCommunityPoolAmino) => _59.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _59.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_59.MsgSetWithdrawAddress>): _59.MsgSetWithdrawAddress;
                fromAmino(object: _59.MsgSetWithdrawAddressAmino): _59.MsgSetWithdrawAddress;
                toAmino(message: _59.MsgSetWithdrawAddress): _59.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _59.MsgSetWithdrawAddressAminoMsg): _59.MsgSetWithdrawAddress;
                toAminoMsg(message: _59.MsgSetWithdrawAddress): _59.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _59.MsgSetWithdrawAddressProtoMsg): _59.MsgSetWithdrawAddress;
                toProto(message: _59.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _59.MsgSetWithdrawAddress): _59.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _59.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_59.MsgSetWithdrawAddressResponse>): _59.MsgSetWithdrawAddressResponse;
                fromAmino(_: _59.MsgSetWithdrawAddressResponseAmino): _59.MsgSetWithdrawAddressResponse;
                toAmino(_: _59.MsgSetWithdrawAddressResponse): _59.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _59.MsgSetWithdrawAddressResponseAminoMsg): _59.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _59.MsgSetWithdrawAddressResponse): _59.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSetWithdrawAddressResponseProtoMsg): _59.MsgSetWithdrawAddressResponse;
                toProto(message: _59.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSetWithdrawAddressResponse): _59.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _59.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_59.MsgWithdrawDelegatorReward>): _59.MsgWithdrawDelegatorReward;
                fromAmino(object: _59.MsgWithdrawDelegatorRewardAmino): _59.MsgWithdrawDelegatorReward;
                toAmino(message: _59.MsgWithdrawDelegatorReward): _59.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _59.MsgWithdrawDelegatorRewardAminoMsg): _59.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _59.MsgWithdrawDelegatorReward): _59.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawDelegatorRewardProtoMsg): _59.MsgWithdrawDelegatorReward;
                toProto(message: _59.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawDelegatorReward): _59.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _59.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_59.MsgWithdrawDelegatorRewardResponse>): _59.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _59.MsgWithdrawDelegatorRewardResponseAmino): _59.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _59.MsgWithdrawDelegatorRewardResponse): _59.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _59.MsgWithdrawDelegatorRewardResponseAminoMsg): _59.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _59.MsgWithdrawDelegatorRewardResponse): _59.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawDelegatorRewardResponseProtoMsg): _59.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _59.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawDelegatorRewardResponse): _59.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _59.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_59.MsgWithdrawValidatorCommission>): _59.MsgWithdrawValidatorCommission;
                fromAmino(object: _59.MsgWithdrawValidatorCommissionAmino): _59.MsgWithdrawValidatorCommission;
                toAmino(message: _59.MsgWithdrawValidatorCommission): _59.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _59.MsgWithdrawValidatorCommissionAminoMsg): _59.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _59.MsgWithdrawValidatorCommission): _59.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawValidatorCommissionProtoMsg): _59.MsgWithdrawValidatorCommission;
                toProto(message: _59.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawValidatorCommission): _59.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _59.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_59.MsgWithdrawValidatorCommissionResponse>): _59.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _59.MsgWithdrawValidatorCommissionResponseAmino): _59.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _59.MsgWithdrawValidatorCommissionResponse): _59.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _59.MsgWithdrawValidatorCommissionResponseAminoMsg): _59.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _59.MsgWithdrawValidatorCommissionResponse): _59.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawValidatorCommissionResponseProtoMsg): _59.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _59.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawValidatorCommissionResponse): _59.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _59.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgFundCommunityPool;
                fromPartial(object: Partial<_59.MsgFundCommunityPool>): _59.MsgFundCommunityPool;
                fromAmino(object: _59.MsgFundCommunityPoolAmino): _59.MsgFundCommunityPool;
                toAmino(message: _59.MsgFundCommunityPool): _59.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _59.MsgFundCommunityPoolAminoMsg): _59.MsgFundCommunityPool;
                toAminoMsg(message: _59.MsgFundCommunityPool): _59.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _59.MsgFundCommunityPoolProtoMsg): _59.MsgFundCommunityPool;
                toProto(message: _59.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _59.MsgFundCommunityPool): _59.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _59.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_59.MsgFundCommunityPoolResponse>): _59.MsgFundCommunityPoolResponse;
                fromAmino(_: _59.MsgFundCommunityPoolResponseAmino): _59.MsgFundCommunityPoolResponse;
                toAmino(_: _59.MsgFundCommunityPoolResponse): _59.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _59.MsgFundCommunityPoolResponseAminoMsg): _59.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _59.MsgFundCommunityPoolResponse): _59.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _59.MsgFundCommunityPoolResponseProtoMsg): _59.MsgFundCommunityPoolResponse;
                toProto(message: _59.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _59.MsgFundCommunityPoolResponse): _59.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _58.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.QueryParamsRequest;
                fromPartial(_: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
                fromAmino(_: _58.QueryParamsRequestAmino): _58.QueryParamsRequest;
                toAmino(_: _58.QueryParamsRequest): _58.QueryParamsRequestAmino;
                fromAminoMsg(object: _58.QueryParamsRequestAminoMsg): _58.QueryParamsRequest;
                toAminoMsg(message: _58.QueryParamsRequest): _58.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryParamsRequestProtoMsg): _58.QueryParamsRequest;
                toProto(message: _58.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryParamsRequest): _58.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _58.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryParamsResponse;
                fromPartial(object: Partial<_58.QueryParamsResponse>): _58.QueryParamsResponse;
                fromAmino(object: _58.QueryParamsResponseAmino): _58.QueryParamsResponse;
                toAmino(message: _58.QueryParamsResponse): _58.QueryParamsResponseAmino;
                fromAminoMsg(object: _58.QueryParamsResponseAminoMsg): _58.QueryParamsResponse;
                toAminoMsg(message: _58.QueryParamsResponse): _58.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryParamsResponseProtoMsg): _58.QueryParamsResponse;
                toProto(message: _58.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryParamsResponse): _58.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _58.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_58.QueryValidatorOutstandingRewardsRequest>): _58.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _58.QueryValidatorOutstandingRewardsRequestAmino): _58.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _58.QueryValidatorOutstandingRewardsRequest): _58.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _58.QueryValidatorOutstandingRewardsRequestAminoMsg): _58.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _58.QueryValidatorOutstandingRewardsRequest): _58.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorOutstandingRewardsRequestProtoMsg): _58.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _58.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorOutstandingRewardsRequest): _58.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _58.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_58.QueryValidatorOutstandingRewardsResponse>): _58.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _58.QueryValidatorOutstandingRewardsResponseAmino): _58.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _58.QueryValidatorOutstandingRewardsResponse): _58.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _58.QueryValidatorOutstandingRewardsResponseAminoMsg): _58.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _58.QueryValidatorOutstandingRewardsResponse): _58.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorOutstandingRewardsResponseProtoMsg): _58.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _58.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorOutstandingRewardsResponse): _58.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _58.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_58.QueryValidatorCommissionRequest>): _58.QueryValidatorCommissionRequest;
                fromAmino(object: _58.QueryValidatorCommissionRequestAmino): _58.QueryValidatorCommissionRequest;
                toAmino(message: _58.QueryValidatorCommissionRequest): _58.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _58.QueryValidatorCommissionRequestAminoMsg): _58.QueryValidatorCommissionRequest;
                toAminoMsg(message: _58.QueryValidatorCommissionRequest): _58.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorCommissionRequestProtoMsg): _58.QueryValidatorCommissionRequest;
                toProto(message: _58.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorCommissionRequest): _58.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _58.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_58.QueryValidatorCommissionResponse>): _58.QueryValidatorCommissionResponse;
                fromAmino(object: _58.QueryValidatorCommissionResponseAmino): _58.QueryValidatorCommissionResponse;
                toAmino(message: _58.QueryValidatorCommissionResponse): _58.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _58.QueryValidatorCommissionResponseAminoMsg): _58.QueryValidatorCommissionResponse;
                toAminoMsg(message: _58.QueryValidatorCommissionResponse): _58.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorCommissionResponseProtoMsg): _58.QueryValidatorCommissionResponse;
                toProto(message: _58.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorCommissionResponse): _58.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _58.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_58.QueryValidatorSlashesRequest>): _58.QueryValidatorSlashesRequest;
                fromAmino(object: _58.QueryValidatorSlashesRequestAmino): _58.QueryValidatorSlashesRequest;
                toAmino(message: _58.QueryValidatorSlashesRequest): _58.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _58.QueryValidatorSlashesRequestAminoMsg): _58.QueryValidatorSlashesRequest;
                toAminoMsg(message: _58.QueryValidatorSlashesRequest): _58.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorSlashesRequestProtoMsg): _58.QueryValidatorSlashesRequest;
                toProto(message: _58.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorSlashesRequest): _58.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _58.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_58.QueryValidatorSlashesResponse>): _58.QueryValidatorSlashesResponse;
                fromAmino(object: _58.QueryValidatorSlashesResponseAmino): _58.QueryValidatorSlashesResponse;
                toAmino(message: _58.QueryValidatorSlashesResponse): _58.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _58.QueryValidatorSlashesResponseAminoMsg): _58.QueryValidatorSlashesResponse;
                toAminoMsg(message: _58.QueryValidatorSlashesResponse): _58.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorSlashesResponseProtoMsg): _58.QueryValidatorSlashesResponse;
                toProto(message: _58.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorSlashesResponse): _58.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_58.QueryDelegationRewardsRequest>): _58.QueryDelegationRewardsRequest;
                fromAmino(object: _58.QueryDelegationRewardsRequestAmino): _58.QueryDelegationRewardsRequest;
                toAmino(message: _58.QueryDelegationRewardsRequest): _58.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _58.QueryDelegationRewardsRequestAminoMsg): _58.QueryDelegationRewardsRequest;
                toAminoMsg(message: _58.QueryDelegationRewardsRequest): _58.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationRewardsRequestProtoMsg): _58.QueryDelegationRewardsRequest;
                toProto(message: _58.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationRewardsRequest): _58.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_58.QueryDelegationRewardsResponse>): _58.QueryDelegationRewardsResponse;
                fromAmino(object: _58.QueryDelegationRewardsResponseAmino): _58.QueryDelegationRewardsResponse;
                toAmino(message: _58.QueryDelegationRewardsResponse): _58.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _58.QueryDelegationRewardsResponseAminoMsg): _58.QueryDelegationRewardsResponse;
                toAminoMsg(message: _58.QueryDelegationRewardsResponse): _58.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationRewardsResponseProtoMsg): _58.QueryDelegationRewardsResponse;
                toProto(message: _58.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationRewardsResponse): _58.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_58.QueryDelegationTotalRewardsRequest>): _58.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _58.QueryDelegationTotalRewardsRequestAmino): _58.QueryDelegationTotalRewardsRequest;
                toAmino(message: _58.QueryDelegationTotalRewardsRequest): _58.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _58.QueryDelegationTotalRewardsRequestAminoMsg): _58.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _58.QueryDelegationTotalRewardsRequest): _58.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationTotalRewardsRequestProtoMsg): _58.QueryDelegationTotalRewardsRequest;
                toProto(message: _58.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationTotalRewardsRequest): _58.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_58.QueryDelegationTotalRewardsResponse>): _58.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _58.QueryDelegationTotalRewardsResponseAmino): _58.QueryDelegationTotalRewardsResponse;
                toAmino(message: _58.QueryDelegationTotalRewardsResponse): _58.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _58.QueryDelegationTotalRewardsResponseAminoMsg): _58.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _58.QueryDelegationTotalRewardsResponse): _58.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationTotalRewardsResponseProtoMsg): _58.QueryDelegationTotalRewardsResponse;
                toProto(message: _58.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationTotalRewardsResponse): _58.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_58.QueryDelegatorValidatorsRequest>): _58.QueryDelegatorValidatorsRequest;
                fromAmino(object: _58.QueryDelegatorValidatorsRequestAmino): _58.QueryDelegatorValidatorsRequest;
                toAmino(message: _58.QueryDelegatorValidatorsRequest): _58.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _58.QueryDelegatorValidatorsRequestAminoMsg): _58.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _58.QueryDelegatorValidatorsRequest): _58.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorValidatorsRequestProtoMsg): _58.QueryDelegatorValidatorsRequest;
                toProto(message: _58.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorValidatorsRequest): _58.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_58.QueryDelegatorValidatorsResponse>): _58.QueryDelegatorValidatorsResponse;
                fromAmino(object: _58.QueryDelegatorValidatorsResponseAmino): _58.QueryDelegatorValidatorsResponse;
                toAmino(message: _58.QueryDelegatorValidatorsResponse): _58.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _58.QueryDelegatorValidatorsResponseAminoMsg): _58.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _58.QueryDelegatorValidatorsResponse): _58.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorValidatorsResponseProtoMsg): _58.QueryDelegatorValidatorsResponse;
                toProto(message: _58.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorValidatorsResponse): _58.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_58.QueryDelegatorWithdrawAddressRequest>): _58.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _58.QueryDelegatorWithdrawAddressRequestAmino): _58.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _58.QueryDelegatorWithdrawAddressRequest): _58.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _58.QueryDelegatorWithdrawAddressRequestAminoMsg): _58.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _58.QueryDelegatorWithdrawAddressRequest): _58.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorWithdrawAddressRequestProtoMsg): _58.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _58.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorWithdrawAddressRequest): _58.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_58.QueryDelegatorWithdrawAddressResponse>): _58.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _58.QueryDelegatorWithdrawAddressResponseAmino): _58.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _58.QueryDelegatorWithdrawAddressResponse): _58.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _58.QueryDelegatorWithdrawAddressResponseAminoMsg): _58.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _58.QueryDelegatorWithdrawAddressResponse): _58.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorWithdrawAddressResponseProtoMsg): _58.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _58.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorWithdrawAddressResponse): _58.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _58.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_58.QueryCommunityPoolRequest>): _58.QueryCommunityPoolRequest;
                fromAmino(_: _58.QueryCommunityPoolRequestAmino): _58.QueryCommunityPoolRequest;
                toAmino(_: _58.QueryCommunityPoolRequest): _58.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _58.QueryCommunityPoolRequestAminoMsg): _58.QueryCommunityPoolRequest;
                toAminoMsg(message: _58.QueryCommunityPoolRequest): _58.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _58.QueryCommunityPoolRequestProtoMsg): _58.QueryCommunityPoolRequest;
                toProto(message: _58.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _58.QueryCommunityPoolRequest): _58.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _58.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_58.QueryCommunityPoolResponse>): _58.QueryCommunityPoolResponse;
                fromAmino(object: _58.QueryCommunityPoolResponseAmino): _58.QueryCommunityPoolResponse;
                toAmino(message: _58.QueryCommunityPoolResponse): _58.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _58.QueryCommunityPoolResponseAminoMsg): _58.QueryCommunityPoolResponse;
                toAminoMsg(message: _58.QueryCommunityPoolResponse): _58.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _58.QueryCommunityPoolResponseProtoMsg): _58.QueryCommunityPoolResponse;
                toProto(message: _58.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _58.QueryCommunityPoolResponse): _58.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _57.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_57.DelegatorWithdrawInfo>): _57.DelegatorWithdrawInfo;
                fromAmino(object: _57.DelegatorWithdrawInfoAmino): _57.DelegatorWithdrawInfo;
                toAmino(message: _57.DelegatorWithdrawInfo): _57.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _57.DelegatorWithdrawInfoAminoMsg): _57.DelegatorWithdrawInfo;
                toAminoMsg(message: _57.DelegatorWithdrawInfo): _57.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _57.DelegatorWithdrawInfoProtoMsg): _57.DelegatorWithdrawInfo;
                toProto(message: _57.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _57.DelegatorWithdrawInfo): _57.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorOutstandingRewardsRecord>): _57.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _57.ValidatorOutstandingRewardsRecordAmino): _57.ValidatorOutstandingRewardsRecord;
                toAmino(message: _57.ValidatorOutstandingRewardsRecord): _57.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _57.ValidatorOutstandingRewardsRecordAminoMsg): _57.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _57.ValidatorOutstandingRewardsRecord): _57.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorOutstandingRewardsRecordProtoMsg): _57.ValidatorOutstandingRewardsRecord;
                toProto(message: _57.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorOutstandingRewardsRecord): _57.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_57.ValidatorAccumulatedCommissionRecord>): _57.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _57.ValidatorAccumulatedCommissionRecordAmino): _57.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _57.ValidatorAccumulatedCommissionRecord): _57.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _57.ValidatorAccumulatedCommissionRecordAminoMsg): _57.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _57.ValidatorAccumulatedCommissionRecord): _57.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorAccumulatedCommissionRecordProtoMsg): _57.ValidatorAccumulatedCommissionRecord;
                toProto(message: _57.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorAccumulatedCommissionRecord): _57.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorHistoricalRewardsRecord>): _57.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _57.ValidatorHistoricalRewardsRecordAmino): _57.ValidatorHistoricalRewardsRecord;
                toAmino(message: _57.ValidatorHistoricalRewardsRecord): _57.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _57.ValidatorHistoricalRewardsRecordAminoMsg): _57.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _57.ValidatorHistoricalRewardsRecord): _57.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorHistoricalRewardsRecordProtoMsg): _57.ValidatorHistoricalRewardsRecord;
                toProto(message: _57.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorHistoricalRewardsRecord): _57.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorCurrentRewardsRecord>): _57.ValidatorCurrentRewardsRecord;
                fromAmino(object: _57.ValidatorCurrentRewardsRecordAmino): _57.ValidatorCurrentRewardsRecord;
                toAmino(message: _57.ValidatorCurrentRewardsRecord): _57.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _57.ValidatorCurrentRewardsRecordAminoMsg): _57.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _57.ValidatorCurrentRewardsRecord): _57.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorCurrentRewardsRecordProtoMsg): _57.ValidatorCurrentRewardsRecord;
                toProto(message: _57.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorCurrentRewardsRecord): _57.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _57.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_57.DelegatorStartingInfoRecord>): _57.DelegatorStartingInfoRecord;
                fromAmino(object: _57.DelegatorStartingInfoRecordAmino): _57.DelegatorStartingInfoRecord;
                toAmino(message: _57.DelegatorStartingInfoRecord): _57.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _57.DelegatorStartingInfoRecordAminoMsg): _57.DelegatorStartingInfoRecord;
                toAminoMsg(message: _57.DelegatorStartingInfoRecord): _57.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _57.DelegatorStartingInfoRecordProtoMsg): _57.DelegatorStartingInfoRecord;
                toProto(message: _57.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _57.DelegatorStartingInfoRecord): _57.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_57.ValidatorSlashEventRecord>): _57.ValidatorSlashEventRecord;
                fromAmino(object: _57.ValidatorSlashEventRecordAmino): _57.ValidatorSlashEventRecord;
                toAmino(message: _57.ValidatorSlashEventRecord): _57.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _57.ValidatorSlashEventRecordAminoMsg): _57.ValidatorSlashEventRecord;
                toAminoMsg(message: _57.ValidatorSlashEventRecord): _57.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorSlashEventRecordProtoMsg): _57.ValidatorSlashEventRecord;
                toProto(message: _57.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorSlashEventRecord): _57.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _56.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Params;
                fromPartial(object: Partial<_56.Params>): _56.Params;
                fromAmino(object: _56.ParamsAmino): _56.Params;
                toAmino(message: _56.Params): _56.ParamsAmino;
                fromAminoMsg(object: _56.ParamsAminoMsg): _56.Params;
                toAminoMsg(message: _56.Params): _56.ParamsAminoMsg;
                fromProtoMsg(message: _56.ParamsProtoMsg): _56.Params;
                toProto(message: _56.Params): Uint8Array;
                toProtoMsg(message: _56.Params): _56.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _56.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_56.ValidatorHistoricalRewards>): _56.ValidatorHistoricalRewards;
                fromAmino(object: _56.ValidatorHistoricalRewardsAmino): _56.ValidatorHistoricalRewards;
                toAmino(message: _56.ValidatorHistoricalRewards): _56.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _56.ValidatorHistoricalRewardsAminoMsg): _56.ValidatorHistoricalRewards;
                toAminoMsg(message: _56.ValidatorHistoricalRewards): _56.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _56.ValidatorHistoricalRewardsProtoMsg): _56.ValidatorHistoricalRewards;
                toProto(message: _56.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _56.ValidatorHistoricalRewards): _56.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _56.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorCurrentRewards;
                fromPartial(object: Partial<_56.ValidatorCurrentRewards>): _56.ValidatorCurrentRewards;
                fromAmino(object: _56.ValidatorCurrentRewardsAmino): _56.ValidatorCurrentRewards;
                toAmino(message: _56.ValidatorCurrentRewards): _56.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _56.ValidatorCurrentRewardsAminoMsg): _56.ValidatorCurrentRewards;
                toAminoMsg(message: _56.ValidatorCurrentRewards): _56.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _56.ValidatorCurrentRewardsProtoMsg): _56.ValidatorCurrentRewards;
                toProto(message: _56.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _56.ValidatorCurrentRewards): _56.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _56.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_56.ValidatorAccumulatedCommission>): _56.ValidatorAccumulatedCommission;
                fromAmino(object: _56.ValidatorAccumulatedCommissionAmino): _56.ValidatorAccumulatedCommission;
                toAmino(message: _56.ValidatorAccumulatedCommission): _56.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _56.ValidatorAccumulatedCommissionAminoMsg): _56.ValidatorAccumulatedCommission;
                toAminoMsg(message: _56.ValidatorAccumulatedCommission): _56.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _56.ValidatorAccumulatedCommissionProtoMsg): _56.ValidatorAccumulatedCommission;
                toProto(message: _56.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _56.ValidatorAccumulatedCommission): _56.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _56.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_56.ValidatorOutstandingRewards>): _56.ValidatorOutstandingRewards;
                fromAmino(object: _56.ValidatorOutstandingRewardsAmino): _56.ValidatorOutstandingRewards;
                toAmino(message: _56.ValidatorOutstandingRewards): _56.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _56.ValidatorOutstandingRewardsAminoMsg): _56.ValidatorOutstandingRewards;
                toAminoMsg(message: _56.ValidatorOutstandingRewards): _56.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _56.ValidatorOutstandingRewardsProtoMsg): _56.ValidatorOutstandingRewards;
                toProto(message: _56.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _56.ValidatorOutstandingRewards): _56.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _56.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorSlashEvent;
                fromPartial(object: Partial<_56.ValidatorSlashEvent>): _56.ValidatorSlashEvent;
                fromAmino(object: _56.ValidatorSlashEventAmino): _56.ValidatorSlashEvent;
                toAmino(message: _56.ValidatorSlashEvent): _56.ValidatorSlashEventAmino;
                fromAminoMsg(object: _56.ValidatorSlashEventAminoMsg): _56.ValidatorSlashEvent;
                toAminoMsg(message: _56.ValidatorSlashEvent): _56.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _56.ValidatorSlashEventProtoMsg): _56.ValidatorSlashEvent;
                toProto(message: _56.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _56.ValidatorSlashEvent): _56.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _56.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorSlashEvents;
                fromPartial(object: Partial<_56.ValidatorSlashEvents>): _56.ValidatorSlashEvents;
                fromAmino(object: _56.ValidatorSlashEventsAmino): _56.ValidatorSlashEvents;
                toAmino(message: _56.ValidatorSlashEvents): _56.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _56.ValidatorSlashEventsAminoMsg): _56.ValidatorSlashEvents;
                toAminoMsg(message: _56.ValidatorSlashEvents): _56.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _56.ValidatorSlashEventsProtoMsg): _56.ValidatorSlashEvents;
                toProto(message: _56.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _56.ValidatorSlashEvents): _56.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _56.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.FeePool;
                fromPartial(object: Partial<_56.FeePool>): _56.FeePool;
                fromAmino(object: _56.FeePoolAmino): _56.FeePool;
                toAmino(message: _56.FeePool): _56.FeePoolAmino;
                fromAminoMsg(object: _56.FeePoolAminoMsg): _56.FeePool;
                toAminoMsg(message: _56.FeePool): _56.FeePoolAminoMsg;
                fromProtoMsg(message: _56.FeePoolProtoMsg): _56.FeePool;
                toProto(message: _56.FeePool): Uint8Array;
                toProtoMsg(message: _56.FeePool): _56.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _56.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_56.CommunityPoolSpendProposal>): _56.CommunityPoolSpendProposal;
                fromAmino(object: _56.CommunityPoolSpendProposalAmino): _56.CommunityPoolSpendProposal;
                toAmino(message: _56.CommunityPoolSpendProposal): _56.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _56.CommunityPoolSpendProposalAminoMsg): _56.CommunityPoolSpendProposal;
                toAminoMsg(message: _56.CommunityPoolSpendProposal): _56.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _56.CommunityPoolSpendProposalProtoMsg): _56.CommunityPoolSpendProposal;
                toProto(message: _56.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _56.CommunityPoolSpendProposal): _56.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _56.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DelegatorStartingInfo;
                fromPartial(object: Partial<_56.DelegatorStartingInfo>): _56.DelegatorStartingInfo;
                fromAmino(object: _56.DelegatorStartingInfoAmino): _56.DelegatorStartingInfo;
                toAmino(message: _56.DelegatorStartingInfo): _56.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _56.DelegatorStartingInfoAminoMsg): _56.DelegatorStartingInfo;
                toAminoMsg(message: _56.DelegatorStartingInfo): _56.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _56.DelegatorStartingInfoProtoMsg): _56.DelegatorStartingInfo;
                toProto(message: _56.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _56.DelegatorStartingInfo): _56.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _56.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DelegationDelegatorReward;
                fromPartial(object: Partial<_56.DelegationDelegatorReward>): _56.DelegationDelegatorReward;
                fromAmino(object: _56.DelegationDelegatorRewardAmino): _56.DelegationDelegatorReward;
                toAmino(message: _56.DelegationDelegatorReward): _56.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _56.DelegationDelegatorRewardAminoMsg): _56.DelegationDelegatorReward;
                toAminoMsg(message: _56.DelegationDelegatorReward): _56.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _56.DelegationDelegatorRewardProtoMsg): _56.DelegationDelegatorReward;
                toProto(message: _56.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _56.DelegationDelegatorReward): _56.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _56.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_56.CommunityPoolSpendProposalWithDeposit>): _56.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _56.CommunityPoolSpendProposalWithDepositAmino): _56.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _56.CommunityPoolSpendProposalWithDeposit): _56.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _56.CommunityPoolSpendProposalWithDepositAminoMsg): _56.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _56.CommunityPoolSpendProposalWithDeposit): _56.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _56.CommunityPoolSpendProposalWithDepositProtoMsg): _56.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _56.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _56.CommunityPoolSpendProposalWithDeposit): _56.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _256.MsgClientImpl;
            QueryClientImpl: typeof _240.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _62.QueryEvidenceRequest): Promise<_62.QueryEvidenceResponse>;
                allEvidence(request?: _62.QueryAllEvidenceRequest): Promise<_62.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _63.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _63.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _63.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _63.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _63.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _63.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _63.MsgSubmitEvidence) => _63.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _63.MsgSubmitEvidenceAmino) => _63.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _63.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgSubmitEvidence;
                fromPartial(object: Partial<_63.MsgSubmitEvidence>): _63.MsgSubmitEvidence;
                fromAmino(object: _63.MsgSubmitEvidenceAmino): _63.MsgSubmitEvidence;
                toAmino(message: _63.MsgSubmitEvidence): _63.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _63.MsgSubmitEvidenceAminoMsg): _63.MsgSubmitEvidence;
                toAminoMsg(message: _63.MsgSubmitEvidence): _63.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _63.MsgSubmitEvidenceProtoMsg): _63.MsgSubmitEvidence;
                toProto(message: _63.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _63.MsgSubmitEvidence): _63.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _63.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_63.MsgSubmitEvidenceResponse>): _63.MsgSubmitEvidenceResponse;
                fromAmino(object: _63.MsgSubmitEvidenceResponseAmino): _63.MsgSubmitEvidenceResponse;
                toAmino(message: _63.MsgSubmitEvidenceResponse): _63.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _63.MsgSubmitEvidenceResponseAminoMsg): _63.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _63.MsgSubmitEvidenceResponse): _63.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _63.MsgSubmitEvidenceResponseProtoMsg): _63.MsgSubmitEvidenceResponse;
                toProto(message: _63.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _63.MsgSubmitEvidenceResponse): _63.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _62.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryEvidenceRequest;
                fromPartial(object: Partial<_62.QueryEvidenceRequest>): _62.QueryEvidenceRequest;
                fromAmino(object: _62.QueryEvidenceRequestAmino): _62.QueryEvidenceRequest;
                toAmino(message: _62.QueryEvidenceRequest): _62.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _62.QueryEvidenceRequestAminoMsg): _62.QueryEvidenceRequest;
                toAminoMsg(message: _62.QueryEvidenceRequest): _62.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _62.QueryEvidenceRequestProtoMsg): _62.QueryEvidenceRequest;
                toProto(message: _62.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _62.QueryEvidenceRequest): _62.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _62.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryEvidenceResponse;
                fromPartial(object: Partial<_62.QueryEvidenceResponse>): _62.QueryEvidenceResponse;
                fromAmino(object: _62.QueryEvidenceResponseAmino): _62.QueryEvidenceResponse;
                toAmino(message: _62.QueryEvidenceResponse): _62.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _62.QueryEvidenceResponseAminoMsg): _62.QueryEvidenceResponse;
                toAminoMsg(message: _62.QueryEvidenceResponse): _62.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _62.QueryEvidenceResponseProtoMsg): _62.QueryEvidenceResponse;
                toProto(message: _62.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _62.QueryEvidenceResponse): _62.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _62.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_62.QueryAllEvidenceRequest>): _62.QueryAllEvidenceRequest;
                fromAmino(object: _62.QueryAllEvidenceRequestAmino): _62.QueryAllEvidenceRequest;
                toAmino(message: _62.QueryAllEvidenceRequest): _62.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _62.QueryAllEvidenceRequestAminoMsg): _62.QueryAllEvidenceRequest;
                toAminoMsg(message: _62.QueryAllEvidenceRequest): _62.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _62.QueryAllEvidenceRequestProtoMsg): _62.QueryAllEvidenceRequest;
                toProto(message: _62.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _62.QueryAllEvidenceRequest): _62.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _62.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_62.QueryAllEvidenceResponse>): _62.QueryAllEvidenceResponse;
                fromAmino(object: _62.QueryAllEvidenceResponseAmino): _62.QueryAllEvidenceResponse;
                toAmino(message: _62.QueryAllEvidenceResponse): _62.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _62.QueryAllEvidenceResponseAminoMsg): _62.QueryAllEvidenceResponse;
                toAminoMsg(message: _62.QueryAllEvidenceResponse): _62.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _62.QueryAllEvidenceResponseProtoMsg): _62.QueryAllEvidenceResponse;
                toProto(message: _62.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _62.QueryAllEvidenceResponse): _62.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _60.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Equivocation;
                fromPartial(object: Partial<_60.Equivocation>): _60.Equivocation;
                fromAmino(object: _60.EquivocationAmino): _60.Equivocation;
                toAmino(message: _60.Equivocation): _60.EquivocationAmino;
                fromAminoMsg(object: _60.EquivocationAminoMsg): _60.Equivocation;
                toAminoMsg(message: _60.Equivocation): _60.EquivocationAminoMsg;
                fromProtoMsg(message: _60.EquivocationProtoMsg): _60.Equivocation;
                toProto(message: _60.Equivocation): Uint8Array;
                toProtoMsg(message: _60.Equivocation): _60.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _257.MsgClientImpl;
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _66.QueryAllowanceRequest): Promise<_66.QueryAllowanceResponse>;
                allowances(request: _66.QueryAllowancesRequest): Promise<_66.QueryAllowancesResponse>;
                allowancesByGranter(request: _66.QueryAllowancesByGranterRequest): Promise<_66.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _67.MsgGrantAllowance) => _67.MsgGrantAllowanceAmino;
                    fromAmino: (object: _67.MsgGrantAllowanceAmino) => _67.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _67.MsgRevokeAllowance) => _67.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _67.MsgRevokeAllowanceAmino) => _67.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _67.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgGrantAllowance;
                fromPartial(object: Partial<_67.MsgGrantAllowance>): _67.MsgGrantAllowance;
                fromAmino(object: _67.MsgGrantAllowanceAmino): _67.MsgGrantAllowance;
                toAmino(message: _67.MsgGrantAllowance): _67.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _67.MsgGrantAllowanceAminoMsg): _67.MsgGrantAllowance;
                toAminoMsg(message: _67.MsgGrantAllowance): _67.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _67.MsgGrantAllowanceProtoMsg): _67.MsgGrantAllowance;
                toProto(message: _67.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _67.MsgGrantAllowance): _67.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _67.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_67.MsgGrantAllowanceResponse>): _67.MsgGrantAllowanceResponse;
                fromAmino(_: _67.MsgGrantAllowanceResponseAmino): _67.MsgGrantAllowanceResponse;
                toAmino(_: _67.MsgGrantAllowanceResponse): _67.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _67.MsgGrantAllowanceResponseAminoMsg): _67.MsgGrantAllowanceResponse;
                toAminoMsg(message: _67.MsgGrantAllowanceResponse): _67.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _67.MsgGrantAllowanceResponseProtoMsg): _67.MsgGrantAllowanceResponse;
                toProto(message: _67.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _67.MsgGrantAllowanceResponse): _67.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _67.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgRevokeAllowance;
                fromPartial(object: Partial<_67.MsgRevokeAllowance>): _67.MsgRevokeAllowance;
                fromAmino(object: _67.MsgRevokeAllowanceAmino): _67.MsgRevokeAllowance;
                toAmino(message: _67.MsgRevokeAllowance): _67.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _67.MsgRevokeAllowanceAminoMsg): _67.MsgRevokeAllowance;
                toAminoMsg(message: _67.MsgRevokeAllowance): _67.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _67.MsgRevokeAllowanceProtoMsg): _67.MsgRevokeAllowance;
                toProto(message: _67.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _67.MsgRevokeAllowance): _67.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _67.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_67.MsgRevokeAllowanceResponse>): _67.MsgRevokeAllowanceResponse;
                fromAmino(_: _67.MsgRevokeAllowanceResponseAmino): _67.MsgRevokeAllowanceResponse;
                toAmino(_: _67.MsgRevokeAllowanceResponse): _67.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _67.MsgRevokeAllowanceResponseAminoMsg): _67.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _67.MsgRevokeAllowanceResponse): _67.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _67.MsgRevokeAllowanceResponseProtoMsg): _67.MsgRevokeAllowanceResponse;
                toProto(message: _67.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _67.MsgRevokeAllowanceResponse): _67.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _64.BasicAllowance | _64.PeriodicAllowance | _64.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowanceRequest;
                fromPartial(object: Partial<_66.QueryAllowanceRequest>): _66.QueryAllowanceRequest;
                fromAmino(object: _66.QueryAllowanceRequestAmino): _66.QueryAllowanceRequest;
                toAmino(message: _66.QueryAllowanceRequest): _66.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _66.QueryAllowanceRequestAminoMsg): _66.QueryAllowanceRequest;
                toAminoMsg(message: _66.QueryAllowanceRequest): _66.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllowanceRequestProtoMsg): _66.QueryAllowanceRequest;
                toProto(message: _66.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllowanceRequest): _66.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowanceResponse;
                fromPartial(object: Partial<_66.QueryAllowanceResponse>): _66.QueryAllowanceResponse;
                fromAmino(object: _66.QueryAllowanceResponseAmino): _66.QueryAllowanceResponse;
                toAmino(message: _66.QueryAllowanceResponse): _66.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _66.QueryAllowanceResponseAminoMsg): _66.QueryAllowanceResponse;
                toAminoMsg(message: _66.QueryAllowanceResponse): _66.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllowanceResponseProtoMsg): _66.QueryAllowanceResponse;
                toProto(message: _66.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllowanceResponse): _66.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowancesRequest;
                fromPartial(object: Partial<_66.QueryAllowancesRequest>): _66.QueryAllowancesRequest;
                fromAmino(object: _66.QueryAllowancesRequestAmino): _66.QueryAllowancesRequest;
                toAmino(message: _66.QueryAllowancesRequest): _66.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _66.QueryAllowancesRequestAminoMsg): _66.QueryAllowancesRequest;
                toAminoMsg(message: _66.QueryAllowancesRequest): _66.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesRequestProtoMsg): _66.QueryAllowancesRequest;
                toProto(message: _66.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesRequest): _66.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowancesResponse;
                fromPartial(object: Partial<_66.QueryAllowancesResponse>): _66.QueryAllowancesResponse;
                fromAmino(object: _66.QueryAllowancesResponseAmino): _66.QueryAllowancesResponse;
                toAmino(message: _66.QueryAllowancesResponse): _66.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _66.QueryAllowancesResponseAminoMsg): _66.QueryAllowancesResponse;
                toAminoMsg(message: _66.QueryAllowancesResponse): _66.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesResponseProtoMsg): _66.QueryAllowancesResponse;
                toProto(message: _66.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesResponse): _66.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_66.QueryAllowancesByGranterRequest>): _66.QueryAllowancesByGranterRequest;
                fromAmino(object: _66.QueryAllowancesByGranterRequestAmino): _66.QueryAllowancesByGranterRequest;
                toAmino(message: _66.QueryAllowancesByGranterRequest): _66.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _66.QueryAllowancesByGranterRequestAminoMsg): _66.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _66.QueryAllowancesByGranterRequest): _66.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesByGranterRequestProtoMsg): _66.QueryAllowancesByGranterRequest;
                toProto(message: _66.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesByGranterRequest): _66.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_66.QueryAllowancesByGranterResponse>): _66.QueryAllowancesByGranterResponse;
                fromAmino(object: _66.QueryAllowancesByGranterResponseAmino): _66.QueryAllowancesByGranterResponse;
                toAmino(message: _66.QueryAllowancesByGranterResponse): _66.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _66.QueryAllowancesByGranterResponseAminoMsg): _66.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _66.QueryAllowancesByGranterResponse): _66.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesByGranterResponseProtoMsg): _66.QueryAllowancesByGranterResponse;
                toProto(message: _66.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesByGranterResponse): _66.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _64.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.BasicAllowance;
                fromPartial(object: Partial<_64.BasicAllowance>): _64.BasicAllowance;
                fromAmino(object: _64.BasicAllowanceAmino): _64.BasicAllowance;
                toAmino(message: _64.BasicAllowance): _64.BasicAllowanceAmino;
                fromAminoMsg(object: _64.BasicAllowanceAminoMsg): _64.BasicAllowance;
                toAminoMsg(message: _64.BasicAllowance): _64.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _64.BasicAllowanceProtoMsg): _64.BasicAllowance;
                toProto(message: _64.BasicAllowance): Uint8Array;
                toProtoMsg(message: _64.BasicAllowance): _64.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _64.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.PeriodicAllowance;
                fromPartial(object: Partial<_64.PeriodicAllowance>): _64.PeriodicAllowance;
                fromAmino(object: _64.PeriodicAllowanceAmino): _64.PeriodicAllowance;
                toAmino(message: _64.PeriodicAllowance): _64.PeriodicAllowanceAmino;
                fromAminoMsg(object: _64.PeriodicAllowanceAminoMsg): _64.PeriodicAllowance;
                toAminoMsg(message: _64.PeriodicAllowance): _64.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _64.PeriodicAllowanceProtoMsg): _64.PeriodicAllowance;
                toProto(message: _64.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _64.PeriodicAllowance): _64.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _64.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.AllowedMsgAllowance;
                fromPartial(object: Partial<_64.AllowedMsgAllowance>): _64.AllowedMsgAllowance;
                fromAmino(object: _64.AllowedMsgAllowanceAmino): _64.AllowedMsgAllowance;
                toAmino(message: _64.AllowedMsgAllowance): _64.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _64.AllowedMsgAllowanceAminoMsg): _64.AllowedMsgAllowance;
                toAminoMsg(message: _64.AllowedMsgAllowance): _64.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _64.AllowedMsgAllowanceProtoMsg): _64.AllowedMsgAllowance;
                toProto(message: _64.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _64.AllowedMsgAllowance): _64.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _64.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Grant;
                fromPartial(object: Partial<_64.Grant>): _64.Grant;
                fromAmino(object: _64.GrantAmino): _64.Grant;
                toAmino(message: _64.Grant): _64.GrantAmino;
                fromAminoMsg(object: _64.GrantAminoMsg): _64.Grant;
                toAminoMsg(message: _64.Grant): _64.GrantAminoMsg;
                fromProtoMsg(message: _64.GrantProtoMsg): _64.Grant;
                toProto(message: _64.Grant): Uint8Array;
                toProtoMsg(message: _64.Grant): _64.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _258.MsgClientImpl;
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
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
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _74.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            MsgClientImpl: typeof _259.MsgClientImpl;
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _75.QueryProposalRequest): Promise<_75.QueryProposalResponse>;
                proposals(request: _75.QueryProposalsRequest): Promise<_75.QueryProposalsResponse>;
                vote(request: _75.QueryVoteRequest): Promise<_75.QueryVoteResponse>;
                votes(request: _75.QueryVotesRequest): Promise<_75.QueryVotesResponse>;
                params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                deposit(request: _75.QueryDepositRequest): Promise<_75.QueryDepositResponse>;
                deposits(request: _75.QueryDepositsRequest): Promise<_75.QueryDepositsResponse>;
                tallyResult(request: _75.QueryTallyResultRequest): Promise<_75.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
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
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _74.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
        const v1: {
            MsgClientImpl: typeof _260.MsgClientImpl;
            QueryClientImpl: typeof _244.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _79.QueryGroupInfoRequest): Promise<_79.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _79.QueryGroupPolicyInfoRequest): Promise<_79.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _79.QueryGroupMembersRequest): Promise<_79.QueryGroupMembersResponse>;
                groupsByAdmin(request: _79.QueryGroupsByAdminRequest): Promise<_79.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _79.QueryGroupPoliciesByGroupRequest): Promise<_79.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _79.QueryGroupPoliciesByAdminRequest): Promise<_79.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _79.QueryProposalsByGroupPolicyRequest): Promise<_79.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _79.QueryVoteByProposalVoterRequest): Promise<_79.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _79.QueryVotesByProposalRequest): Promise<_79.QueryVotesByProposalResponse>;
                votesByVoter(request: _79.QueryVotesByVoterRequest): Promise<_79.QueryVotesByVoterResponse>;
                groupsByMember(request: _79.QueryGroupsByMemberRequest): Promise<_79.QueryGroupsByMemberResponse>;
                tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
                groups(request?: _79.QueryGroupsRequest): Promise<_79.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _80.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _80.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _80.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _80.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _80.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _80.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _80.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _80.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _80.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _80.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _80.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _80.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _80.MsgCreateGroup): {
                        typeUrl: string;
                        value: _80.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _80.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _80.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _80.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _80.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _80.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _80.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _80.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _80.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _80.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _80.MsgWithdrawProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    exec(value: _80.MsgExec): {
                        typeUrl: string;
                        value: _80.MsgExec;
                    };
                    leaveGroup(value: _80.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _80.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _80.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _80.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _80.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _80.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _80.MsgCreateGroup): {
                        typeUrl: string;
                        value: _80.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _80.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _80.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _80.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _80.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _80.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _80.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _80.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _80.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _80.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _80.MsgWithdrawProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    exec(value: _80.MsgExec): {
                        typeUrl: string;
                        value: _80.MsgExec;
                    };
                    leaveGroup(value: _80.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _80.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _80.MsgCreateGroup) => _80.MsgCreateGroupAmino;
                    fromAmino: (object: _80.MsgCreateGroupAmino) => _80.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _80.MsgUpdateGroupMembers) => _80.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _80.MsgUpdateGroupMembersAmino) => _80.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _80.MsgUpdateGroupAdmin) => _80.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _80.MsgUpdateGroupAdminAmino) => _80.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _80.MsgUpdateGroupMetadata) => _80.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _80.MsgUpdateGroupMetadataAmino) => _80.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _80.MsgCreateGroupPolicy) => _80.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _80.MsgCreateGroupPolicyAmino) => _80.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _80.MsgCreateGroupWithPolicy) => _80.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _80.MsgCreateGroupWithPolicyAmino) => _80.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _80.MsgUpdateGroupPolicyAdmin) => _80.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _80.MsgUpdateGroupPolicyAdminAmino) => _80.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _80.MsgUpdateGroupPolicyDecisionPolicy) => _80.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _80.MsgUpdateGroupPolicyDecisionPolicyAmino) => _80.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _80.MsgUpdateGroupPolicyMetadata) => _80.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _80.MsgUpdateGroupPolicyMetadataAmino) => _80.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _80.MsgSubmitProposal) => _80.MsgSubmitProposalAmino;
                    fromAmino: (object: _80.MsgSubmitProposalAmino) => _80.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _80.MsgWithdrawProposal) => _80.MsgWithdrawProposalAmino;
                    fromAmino: (object: _80.MsgWithdrawProposalAmino) => _80.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _80.MsgVote) => _80.MsgVoteAmino;
                    fromAmino: (object: _80.MsgVoteAmino) => _80.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _80.MsgExec) => _80.MsgExecAmino;
                    fromAmino: (object: _80.MsgExecAmino) => _80.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _80.MsgLeaveGroup) => _80.MsgLeaveGroupAmino;
                    fromAmino: (object: _80.MsgLeaveGroupAmino) => _80.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _81.VoteOption;
            voteOptionToJSON(object: _81.VoteOption): string;
            proposalStatusFromJSON(object: any): _81.ProposalStatus;
            proposalStatusToJSON(object: _81.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _81.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _81.ProposalExecutorResult): string;
            VoteOption: typeof _81.VoteOption;
            VoteOptionSDKType: typeof _81.VoteOption;
            VoteOptionAmino: typeof _81.VoteOption;
            ProposalStatus: typeof _81.ProposalStatus;
            ProposalStatusSDKType: typeof _81.ProposalStatus;
            ProposalStatusAmino: typeof _81.ProposalStatus;
            ProposalExecutorResult: typeof _81.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _81.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _81.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _81.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Member;
                fromPartial(object: Partial<_81.Member>): _81.Member;
                fromAmino(object: _81.MemberAmino): _81.Member;
                toAmino(message: _81.Member): _81.MemberAmino;
                fromAminoMsg(object: _81.MemberAminoMsg): _81.Member;
                toAminoMsg(message: _81.Member): _81.MemberAminoMsg;
                fromProtoMsg(message: _81.MemberProtoMsg): _81.Member;
                toProto(message: _81.Member): Uint8Array;
                toProtoMsg(message: _81.Member): _81.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _81.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MemberRequest;
                fromPartial(object: Partial<_81.MemberRequest>): _81.MemberRequest;
                fromAmino(object: _81.MemberRequestAmino): _81.MemberRequest;
                toAmino(message: _81.MemberRequest): _81.MemberRequestAmino;
                fromAminoMsg(object: _81.MemberRequestAminoMsg): _81.MemberRequest;
                toAminoMsg(message: _81.MemberRequest): _81.MemberRequestAminoMsg;
                fromProtoMsg(message: _81.MemberRequestProtoMsg): _81.MemberRequest;
                toProto(message: _81.MemberRequest): Uint8Array;
                toProtoMsg(message: _81.MemberRequest): _81.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _81.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_81.ThresholdDecisionPolicy>): _81.ThresholdDecisionPolicy;
                fromAmino(object: _81.ThresholdDecisionPolicyAmino): _81.ThresholdDecisionPolicy;
                toAmino(message: _81.ThresholdDecisionPolicy): _81.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _81.ThresholdDecisionPolicyAminoMsg): _81.ThresholdDecisionPolicy;
                toAminoMsg(message: _81.ThresholdDecisionPolicy): _81.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _81.ThresholdDecisionPolicyProtoMsg): _81.ThresholdDecisionPolicy;
                toProto(message: _81.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _81.ThresholdDecisionPolicy): _81.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _81.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.PercentageDecisionPolicy;
                fromPartial(object: Partial<_81.PercentageDecisionPolicy>): _81.PercentageDecisionPolicy;
                fromAmino(object: _81.PercentageDecisionPolicyAmino): _81.PercentageDecisionPolicy;
                toAmino(message: _81.PercentageDecisionPolicy): _81.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _81.PercentageDecisionPolicyAminoMsg): _81.PercentageDecisionPolicy;
                toAminoMsg(message: _81.PercentageDecisionPolicy): _81.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _81.PercentageDecisionPolicyProtoMsg): _81.PercentageDecisionPolicy;
                toProto(message: _81.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _81.PercentageDecisionPolicy): _81.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _81.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.DecisionPolicyWindows;
                fromPartial(object: Partial<_81.DecisionPolicyWindows>): _81.DecisionPolicyWindows;
                fromAmino(object: _81.DecisionPolicyWindowsAmino): _81.DecisionPolicyWindows;
                toAmino(message: _81.DecisionPolicyWindows): _81.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _81.DecisionPolicyWindowsAminoMsg): _81.DecisionPolicyWindows;
                toAminoMsg(message: _81.DecisionPolicyWindows): _81.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _81.DecisionPolicyWindowsProtoMsg): _81.DecisionPolicyWindows;
                toProto(message: _81.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _81.DecisionPolicyWindows): _81.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _81.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GroupInfo;
                fromPartial(object: Partial<_81.GroupInfo>): _81.GroupInfo;
                fromAmino(object: _81.GroupInfoAmino): _81.GroupInfo;
                toAmino(message: _81.GroupInfo): _81.GroupInfoAmino;
                fromAminoMsg(object: _81.GroupInfoAminoMsg): _81.GroupInfo;
                toAminoMsg(message: _81.GroupInfo): _81.GroupInfoAminoMsg;
                fromProtoMsg(message: _81.GroupInfoProtoMsg): _81.GroupInfo;
                toProto(message: _81.GroupInfo): Uint8Array;
                toProtoMsg(message: _81.GroupInfo): _81.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _81.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GroupMember;
                fromPartial(object: Partial<_81.GroupMember>): _81.GroupMember;
                fromAmino(object: _81.GroupMemberAmino): _81.GroupMember;
                toAmino(message: _81.GroupMember): _81.GroupMemberAmino;
                fromAminoMsg(object: _81.GroupMemberAminoMsg): _81.GroupMember;
                toAminoMsg(message: _81.GroupMember): _81.GroupMemberAminoMsg;
                fromProtoMsg(message: _81.GroupMemberProtoMsg): _81.GroupMember;
                toProto(message: _81.GroupMember): Uint8Array;
                toProtoMsg(message: _81.GroupMember): _81.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _81.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GroupPolicyInfo;
                fromPartial(object: Partial<_81.GroupPolicyInfo>): _81.GroupPolicyInfo;
                fromAmino(object: _81.GroupPolicyInfoAmino): _81.GroupPolicyInfo;
                toAmino(message: _81.GroupPolicyInfo): _81.GroupPolicyInfoAmino;
                fromAminoMsg(object: _81.GroupPolicyInfoAminoMsg): _81.GroupPolicyInfo;
                toAminoMsg(message: _81.GroupPolicyInfo): _81.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _81.GroupPolicyInfoProtoMsg): _81.GroupPolicyInfo;
                toProto(message: _81.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _81.GroupPolicyInfo): _81.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _81.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Proposal;
                fromPartial(object: Partial<_81.Proposal>): _81.Proposal;
                fromAmino(object: _81.ProposalAmino): _81.Proposal;
                toAmino(message: _81.Proposal): _81.ProposalAmino;
                fromAminoMsg(object: _81.ProposalAminoMsg): _81.Proposal;
                toAminoMsg(message: _81.Proposal): _81.ProposalAminoMsg;
                fromProtoMsg(message: _81.ProposalProtoMsg): _81.Proposal;
                toProto(message: _81.Proposal): Uint8Array;
                toProtoMsg(message: _81.Proposal): _81.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _81.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.TallyResult;
                fromPartial(object: Partial<_81.TallyResult>): _81.TallyResult;
                fromAmino(object: _81.TallyResultAmino): _81.TallyResult;
                toAmino(message: _81.TallyResult): _81.TallyResultAmino;
                fromAminoMsg(object: _81.TallyResultAminoMsg): _81.TallyResult;
                toAminoMsg(message: _81.TallyResult): _81.TallyResultAminoMsg;
                fromProtoMsg(message: _81.TallyResultProtoMsg): _81.TallyResult;
                toProto(message: _81.TallyResult): Uint8Array;
                toProtoMsg(message: _81.TallyResult): _81.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _81.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Vote;
                fromPartial(object: Partial<_81.Vote>): _81.Vote;
                fromAmino(object: _81.VoteAmino): _81.Vote;
                toAmino(message: _81.Vote): _81.VoteAmino;
                fromAminoMsg(object: _81.VoteAminoMsg): _81.Vote;
                toAminoMsg(message: _81.Vote): _81.VoteAminoMsg;
                fromProtoMsg(message: _81.VoteProtoMsg): _81.Vote;
                toProto(message: _81.Vote): Uint8Array;
                toProtoMsg(message: _81.Vote): _81.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _80.Exec;
            execToJSON(object: _80.Exec): string;
            Exec: typeof _80.Exec;
            ExecSDKType: typeof _80.Exec;
            ExecAmino: typeof _80.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _80.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgCreateGroup;
                fromPartial(object: Partial<_80.MsgCreateGroup>): _80.MsgCreateGroup;
                fromAmino(object: _80.MsgCreateGroupAmino): _80.MsgCreateGroup;
                toAmino(message: _80.MsgCreateGroup): _80.MsgCreateGroupAmino;
                fromAminoMsg(object: _80.MsgCreateGroupAminoMsg): _80.MsgCreateGroup;
                toAminoMsg(message: _80.MsgCreateGroup): _80.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _80.MsgCreateGroupProtoMsg): _80.MsgCreateGroup;
                toProto(message: _80.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _80.MsgCreateGroup): _80.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _80.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgCreateGroupResponse;
                fromPartial(object: Partial<_80.MsgCreateGroupResponse>): _80.MsgCreateGroupResponse;
                fromAmino(object: _80.MsgCreateGroupResponseAmino): _80.MsgCreateGroupResponse;
                toAmino(message: _80.MsgCreateGroupResponse): _80.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _80.MsgCreateGroupResponseAminoMsg): _80.MsgCreateGroupResponse;
                toAminoMsg(message: _80.MsgCreateGroupResponse): _80.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _80.MsgCreateGroupResponseProtoMsg): _80.MsgCreateGroupResponse;
                toProto(message: _80.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _80.MsgCreateGroupResponse): _80.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _80.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_80.MsgUpdateGroupMembers>): _80.MsgUpdateGroupMembers;
                fromAmino(object: _80.MsgUpdateGroupMembersAmino): _80.MsgUpdateGroupMembers;
                toAmino(message: _80.MsgUpdateGroupMembers): _80.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupMembersAminoMsg): _80.MsgUpdateGroupMembers;
                toAminoMsg(message: _80.MsgUpdateGroupMembers): _80.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupMembersProtoMsg): _80.MsgUpdateGroupMembers;
                toProto(message: _80.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupMembers): _80.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _80.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupMembersResponse>): _80.MsgUpdateGroupMembersResponse;
                fromAmino(_: _80.MsgUpdateGroupMembersResponseAmino): _80.MsgUpdateGroupMembersResponse;
                toAmino(_: _80.MsgUpdateGroupMembersResponse): _80.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupMembersResponseAminoMsg): _80.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _80.MsgUpdateGroupMembersResponse): _80.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupMembersResponseProtoMsg): _80.MsgUpdateGroupMembersResponse;
                toProto(message: _80.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupMembersResponse): _80.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _80.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_80.MsgUpdateGroupAdmin>): _80.MsgUpdateGroupAdmin;
                fromAmino(object: _80.MsgUpdateGroupAdminAmino): _80.MsgUpdateGroupAdmin;
                toAmino(message: _80.MsgUpdateGroupAdmin): _80.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupAdminAminoMsg): _80.MsgUpdateGroupAdmin;
                toAminoMsg(message: _80.MsgUpdateGroupAdmin): _80.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupAdminProtoMsg): _80.MsgUpdateGroupAdmin;
                toProto(message: _80.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupAdmin): _80.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _80.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupAdminResponse>): _80.MsgUpdateGroupAdminResponse;
                fromAmino(_: _80.MsgUpdateGroupAdminResponseAmino): _80.MsgUpdateGroupAdminResponse;
                toAmino(_: _80.MsgUpdateGroupAdminResponse): _80.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupAdminResponseAminoMsg): _80.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _80.MsgUpdateGroupAdminResponse): _80.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupAdminResponseProtoMsg): _80.MsgUpdateGroupAdminResponse;
                toProto(message: _80.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupAdminResponse): _80.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _80.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_80.MsgUpdateGroupMetadata>): _80.MsgUpdateGroupMetadata;
                fromAmino(object: _80.MsgUpdateGroupMetadataAmino): _80.MsgUpdateGroupMetadata;
                toAmino(message: _80.MsgUpdateGroupMetadata): _80.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupMetadataAminoMsg): _80.MsgUpdateGroupMetadata;
                toAminoMsg(message: _80.MsgUpdateGroupMetadata): _80.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupMetadataProtoMsg): _80.MsgUpdateGroupMetadata;
                toProto(message: _80.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupMetadata): _80.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _80.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupMetadataResponse>): _80.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _80.MsgUpdateGroupMetadataResponseAmino): _80.MsgUpdateGroupMetadataResponse;
                toAmino(_: _80.MsgUpdateGroupMetadataResponse): _80.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupMetadataResponseAminoMsg): _80.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _80.MsgUpdateGroupMetadataResponse): _80.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupMetadataResponseProtoMsg): _80.MsgUpdateGroupMetadataResponse;
                toProto(message: _80.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupMetadataResponse): _80.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _80.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_80.MsgCreateGroupPolicy>): _80.MsgCreateGroupPolicy;
                fromAmino(object: _80.MsgCreateGroupPolicyAmino): _80.MsgCreateGroupPolicy;
                toAmino(message: _80.MsgCreateGroupPolicy): _80.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _80.MsgCreateGroupPolicyAminoMsg): _80.MsgCreateGroupPolicy;
                toAminoMsg(message: _80.MsgCreateGroupPolicy): _80.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _80.MsgCreateGroupPolicyProtoMsg): _80.MsgCreateGroupPolicy;
                toProto(message: _80.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _80.MsgCreateGroupPolicy): _80.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _80.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_80.MsgCreateGroupPolicyResponse>): _80.MsgCreateGroupPolicyResponse;
                fromAmino(object: _80.MsgCreateGroupPolicyResponseAmino): _80.MsgCreateGroupPolicyResponse;
                toAmino(message: _80.MsgCreateGroupPolicyResponse): _80.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _80.MsgCreateGroupPolicyResponseAminoMsg): _80.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _80.MsgCreateGroupPolicyResponse): _80.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _80.MsgCreateGroupPolicyResponseProtoMsg): _80.MsgCreateGroupPolicyResponse;
                toProto(message: _80.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _80.MsgCreateGroupPolicyResponse): _80.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _80.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_80.MsgUpdateGroupPolicyAdmin>): _80.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _80.MsgUpdateGroupPolicyAdminAmino): _80.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _80.MsgUpdateGroupPolicyAdmin): _80.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupPolicyAdminAminoMsg): _80.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _80.MsgUpdateGroupPolicyAdmin): _80.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupPolicyAdminProtoMsg): _80.MsgUpdateGroupPolicyAdmin;
                toProto(message: _80.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupPolicyAdmin): _80.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _80.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_80.MsgCreateGroupWithPolicy>): _80.MsgCreateGroupWithPolicy;
                fromAmino(object: _80.MsgCreateGroupWithPolicyAmino): _80.MsgCreateGroupWithPolicy;
                toAmino(message: _80.MsgCreateGroupWithPolicy): _80.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _80.MsgCreateGroupWithPolicyAminoMsg): _80.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _80.MsgCreateGroupWithPolicy): _80.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _80.MsgCreateGroupWithPolicyProtoMsg): _80.MsgCreateGroupWithPolicy;
                toProto(message: _80.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _80.MsgCreateGroupWithPolicy): _80.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _80.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_80.MsgCreateGroupWithPolicyResponse>): _80.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _80.MsgCreateGroupWithPolicyResponseAmino): _80.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _80.MsgCreateGroupWithPolicyResponse): _80.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _80.MsgCreateGroupWithPolicyResponseAminoMsg): _80.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _80.MsgCreateGroupWithPolicyResponse): _80.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _80.MsgCreateGroupWithPolicyResponseProtoMsg): _80.MsgCreateGroupWithPolicyResponse;
                toProto(message: _80.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _80.MsgCreateGroupWithPolicyResponse): _80.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _80.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupPolicyAdminResponse>): _80.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _80.MsgUpdateGroupPolicyAdminResponseAmino): _80.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _80.MsgUpdateGroupPolicyAdminResponse): _80.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupPolicyAdminResponseAminoMsg): _80.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _80.MsgUpdateGroupPolicyAdminResponse): _80.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupPolicyAdminResponseProtoMsg): _80.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _80.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupPolicyAdminResponse): _80.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _80.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_80.MsgUpdateGroupPolicyDecisionPolicy>): _80.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _80.MsgUpdateGroupPolicyDecisionPolicyAmino): _80.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _80.MsgUpdateGroupPolicyDecisionPolicy): _80.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _80.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _80.MsgUpdateGroupPolicyDecisionPolicy): _80.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _80.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _80.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupPolicyDecisionPolicy): _80.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _80.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupPolicyDecisionPolicyResponse>): _80.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _80.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _80.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _80.MsgUpdateGroupPolicyDecisionPolicyResponse): _80.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _80.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _80.MsgUpdateGroupPolicyDecisionPolicyResponse): _80.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _80.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _80.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupPolicyDecisionPolicyResponse): _80.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _80.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_80.MsgUpdateGroupPolicyMetadata>): _80.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _80.MsgUpdateGroupPolicyMetadataAmino): _80.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _80.MsgUpdateGroupPolicyMetadata): _80.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupPolicyMetadataAminoMsg): _80.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _80.MsgUpdateGroupPolicyMetadata): _80.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupPolicyMetadataProtoMsg): _80.MsgUpdateGroupPolicyMetadata;
                toProto(message: _80.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupPolicyMetadata): _80.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _80.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupPolicyMetadataResponse>): _80.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _80.MsgUpdateGroupPolicyMetadataResponseAmino): _80.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _80.MsgUpdateGroupPolicyMetadataResponse): _80.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _80.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _80.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _80.MsgUpdateGroupPolicyMetadataResponse): _80.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _80.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _80.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateGroupPolicyMetadataResponse): _80.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _80.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgSubmitProposal;
                fromPartial(object: Partial<_80.MsgSubmitProposal>): _80.MsgSubmitProposal;
                fromAmino(object: _80.MsgSubmitProposalAmino): _80.MsgSubmitProposal;
                toAmino(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalAmino;
                fromAminoMsg(object: _80.MsgSubmitProposalAminoMsg): _80.MsgSubmitProposal;
                toAminoMsg(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _80.MsgSubmitProposalProtoMsg): _80.MsgSubmitProposal;
                toProto(message: _80.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _80.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_80.MsgSubmitProposalResponse>): _80.MsgSubmitProposalResponse;
                fromAmino(object: _80.MsgSubmitProposalResponseAmino): _80.MsgSubmitProposalResponse;
                toAmino(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _80.MsgSubmitProposalResponseAminoMsg): _80.MsgSubmitProposalResponse;
                toAminoMsg(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _80.MsgSubmitProposalResponseProtoMsg): _80.MsgSubmitProposalResponse;
                toProto(message: _80.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _80.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgWithdrawProposal;
                fromPartial(object: Partial<_80.MsgWithdrawProposal>): _80.MsgWithdrawProposal;
                fromAmino(object: _80.MsgWithdrawProposalAmino): _80.MsgWithdrawProposal;
                toAmino(message: _80.MsgWithdrawProposal): _80.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _80.MsgWithdrawProposalAminoMsg): _80.MsgWithdrawProposal;
                toAminoMsg(message: _80.MsgWithdrawProposal): _80.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _80.MsgWithdrawProposalProtoMsg): _80.MsgWithdrawProposal;
                toProto(message: _80.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _80.MsgWithdrawProposal): _80.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _80.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_80.MsgWithdrawProposalResponse>): _80.MsgWithdrawProposalResponse;
                fromAmino(_: _80.MsgWithdrawProposalResponseAmino): _80.MsgWithdrawProposalResponse;
                toAmino(_: _80.MsgWithdrawProposalResponse): _80.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _80.MsgWithdrawProposalResponseAminoMsg): _80.MsgWithdrawProposalResponse;
                toAminoMsg(message: _80.MsgWithdrawProposalResponse): _80.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _80.MsgWithdrawProposalResponseProtoMsg): _80.MsgWithdrawProposalResponse;
                toProto(message: _80.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _80.MsgWithdrawProposalResponse): _80.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _80.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgVote;
                fromPartial(object: Partial<_80.MsgVote>): _80.MsgVote;
                fromAmino(object: _80.MsgVoteAmino): _80.MsgVote;
                toAmino(message: _80.MsgVote): _80.MsgVoteAmino;
                fromAminoMsg(object: _80.MsgVoteAminoMsg): _80.MsgVote;
                toAminoMsg(message: _80.MsgVote): _80.MsgVoteAminoMsg;
                fromProtoMsg(message: _80.MsgVoteProtoMsg): _80.MsgVote;
                toProto(message: _80.MsgVote): Uint8Array;
                toProtoMsg(message: _80.MsgVote): _80.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _80.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgVoteResponse;
                fromPartial(_: Partial<_80.MsgVoteResponse>): _80.MsgVoteResponse;
                fromAmino(_: _80.MsgVoteResponseAmino): _80.MsgVoteResponse;
                toAmino(_: _80.MsgVoteResponse): _80.MsgVoteResponseAmino;
                fromAminoMsg(object: _80.MsgVoteResponseAminoMsg): _80.MsgVoteResponse;
                toAminoMsg(message: _80.MsgVoteResponse): _80.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _80.MsgVoteResponseProtoMsg): _80.MsgVoteResponse;
                toProto(message: _80.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _80.MsgVoteResponse): _80.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _80.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgExec;
                fromPartial(object: Partial<_80.MsgExec>): _80.MsgExec;
                fromAmino(object: _80.MsgExecAmino): _80.MsgExec;
                toAmino(message: _80.MsgExec): _80.MsgExecAmino;
                fromAminoMsg(object: _80.MsgExecAminoMsg): _80.MsgExec;
                toAminoMsg(message: _80.MsgExec): _80.MsgExecAminoMsg;
                fromProtoMsg(message: _80.MsgExecProtoMsg): _80.MsgExec;
                toProto(message: _80.MsgExec): Uint8Array;
                toProtoMsg(message: _80.MsgExec): _80.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _80.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgExecResponse;
                fromPartial(object: Partial<_80.MsgExecResponse>): _80.MsgExecResponse;
                fromAmino(object: _80.MsgExecResponseAmino): _80.MsgExecResponse;
                toAmino(message: _80.MsgExecResponse): _80.MsgExecResponseAmino;
                fromAminoMsg(object: _80.MsgExecResponseAminoMsg): _80.MsgExecResponse;
                toAminoMsg(message: _80.MsgExecResponse): _80.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _80.MsgExecResponseProtoMsg): _80.MsgExecResponse;
                toProto(message: _80.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _80.MsgExecResponse): _80.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _80.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgLeaveGroup;
                fromPartial(object: Partial<_80.MsgLeaveGroup>): _80.MsgLeaveGroup;
                fromAmino(object: _80.MsgLeaveGroupAmino): _80.MsgLeaveGroup;
                toAmino(message: _80.MsgLeaveGroup): _80.MsgLeaveGroupAmino;
                fromAminoMsg(object: _80.MsgLeaveGroupAminoMsg): _80.MsgLeaveGroup;
                toAminoMsg(message: _80.MsgLeaveGroup): _80.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _80.MsgLeaveGroupProtoMsg): _80.MsgLeaveGroup;
                toProto(message: _80.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _80.MsgLeaveGroup): _80.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _80.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_80.MsgLeaveGroupResponse>): _80.MsgLeaveGroupResponse;
                fromAmino(_: _80.MsgLeaveGroupResponseAmino): _80.MsgLeaveGroupResponse;
                toAmino(_: _80.MsgLeaveGroupResponse): _80.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _80.MsgLeaveGroupResponseAminoMsg): _80.MsgLeaveGroupResponse;
                toAminoMsg(message: _80.MsgLeaveGroupResponse): _80.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _80.MsgLeaveGroupResponseProtoMsg): _80.MsgLeaveGroupResponse;
                toProto(message: _80.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _80.MsgLeaveGroupResponse): _80.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _79.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupInfoRequest;
                fromPartial(object: Partial<_79.QueryGroupInfoRequest>): _79.QueryGroupInfoRequest;
                fromAmino(object: _79.QueryGroupInfoRequestAmino): _79.QueryGroupInfoRequest;
                toAmino(message: _79.QueryGroupInfoRequest): _79.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _79.QueryGroupInfoRequestAminoMsg): _79.QueryGroupInfoRequest;
                toAminoMsg(message: _79.QueryGroupInfoRequest): _79.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _79.QueryGroupInfoRequestProtoMsg): _79.QueryGroupInfoRequest;
                toProto(message: _79.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _79.QueryGroupInfoRequest): _79.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _79.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupInfoResponse;
                fromPartial(object: Partial<_79.QueryGroupInfoResponse>): _79.QueryGroupInfoResponse;
                fromAmino(object: _79.QueryGroupInfoResponseAmino): _79.QueryGroupInfoResponse;
                toAmino(message: _79.QueryGroupInfoResponse): _79.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _79.QueryGroupInfoResponseAminoMsg): _79.QueryGroupInfoResponse;
                toAminoMsg(message: _79.QueryGroupInfoResponse): _79.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _79.QueryGroupInfoResponseProtoMsg): _79.QueryGroupInfoResponse;
                toProto(message: _79.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _79.QueryGroupInfoResponse): _79.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _79.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_79.QueryGroupPolicyInfoRequest>): _79.QueryGroupPolicyInfoRequest;
                fromAmino(object: _79.QueryGroupPolicyInfoRequestAmino): _79.QueryGroupPolicyInfoRequest;
                toAmino(message: _79.QueryGroupPolicyInfoRequest): _79.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _79.QueryGroupPolicyInfoRequestAminoMsg): _79.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _79.QueryGroupPolicyInfoRequest): _79.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _79.QueryGroupPolicyInfoRequestProtoMsg): _79.QueryGroupPolicyInfoRequest;
                toProto(message: _79.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _79.QueryGroupPolicyInfoRequest): _79.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _79.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_79.QueryGroupPolicyInfoResponse>): _79.QueryGroupPolicyInfoResponse;
                fromAmino(object: _79.QueryGroupPolicyInfoResponseAmino): _79.QueryGroupPolicyInfoResponse;
                toAmino(message: _79.QueryGroupPolicyInfoResponse): _79.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _79.QueryGroupPolicyInfoResponseAminoMsg): _79.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _79.QueryGroupPolicyInfoResponse): _79.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _79.QueryGroupPolicyInfoResponseProtoMsg): _79.QueryGroupPolicyInfoResponse;
                toProto(message: _79.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _79.QueryGroupPolicyInfoResponse): _79.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _79.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupMembersRequest;
                fromPartial(object: Partial<_79.QueryGroupMembersRequest>): _79.QueryGroupMembersRequest;
                fromAmino(object: _79.QueryGroupMembersRequestAmino): _79.QueryGroupMembersRequest;
                toAmino(message: _79.QueryGroupMembersRequest): _79.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _79.QueryGroupMembersRequestAminoMsg): _79.QueryGroupMembersRequest;
                toAminoMsg(message: _79.QueryGroupMembersRequest): _79.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _79.QueryGroupMembersRequestProtoMsg): _79.QueryGroupMembersRequest;
                toProto(message: _79.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _79.QueryGroupMembersRequest): _79.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _79.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupMembersResponse;
                fromPartial(object: Partial<_79.QueryGroupMembersResponse>): _79.QueryGroupMembersResponse;
                fromAmino(object: _79.QueryGroupMembersResponseAmino): _79.QueryGroupMembersResponse;
                toAmino(message: _79.QueryGroupMembersResponse): _79.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _79.QueryGroupMembersResponseAminoMsg): _79.QueryGroupMembersResponse;
                toAminoMsg(message: _79.QueryGroupMembersResponse): _79.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _79.QueryGroupMembersResponseProtoMsg): _79.QueryGroupMembersResponse;
                toProto(message: _79.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _79.QueryGroupMembersResponse): _79.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _79.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_79.QueryGroupsByAdminRequest>): _79.QueryGroupsByAdminRequest;
                fromAmino(object: _79.QueryGroupsByAdminRequestAmino): _79.QueryGroupsByAdminRequest;
                toAmino(message: _79.QueryGroupsByAdminRequest): _79.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _79.QueryGroupsByAdminRequestAminoMsg): _79.QueryGroupsByAdminRequest;
                toAminoMsg(message: _79.QueryGroupsByAdminRequest): _79.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _79.QueryGroupsByAdminRequestProtoMsg): _79.QueryGroupsByAdminRequest;
                toProto(message: _79.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _79.QueryGroupsByAdminRequest): _79.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _79.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_79.QueryGroupsByAdminResponse>): _79.QueryGroupsByAdminResponse;
                fromAmino(object: _79.QueryGroupsByAdminResponseAmino): _79.QueryGroupsByAdminResponse;
                toAmino(message: _79.QueryGroupsByAdminResponse): _79.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _79.QueryGroupsByAdminResponseAminoMsg): _79.QueryGroupsByAdminResponse;
                toAminoMsg(message: _79.QueryGroupsByAdminResponse): _79.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _79.QueryGroupsByAdminResponseProtoMsg): _79.QueryGroupsByAdminResponse;
                toProto(message: _79.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _79.QueryGroupsByAdminResponse): _79.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _79.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByGroupRequest>): _79.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _79.QueryGroupPoliciesByGroupRequestAmino): _79.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _79.QueryGroupPoliciesByGroupRequest): _79.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _79.QueryGroupPoliciesByGroupRequestAminoMsg): _79.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _79.QueryGroupPoliciesByGroupRequest): _79.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _79.QueryGroupPoliciesByGroupRequestProtoMsg): _79.QueryGroupPoliciesByGroupRequest;
                toProto(message: _79.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _79.QueryGroupPoliciesByGroupRequest): _79.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _79.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByGroupResponse>): _79.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _79.QueryGroupPoliciesByGroupResponseAmino): _79.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _79.QueryGroupPoliciesByGroupResponse): _79.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _79.QueryGroupPoliciesByGroupResponseAminoMsg): _79.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _79.QueryGroupPoliciesByGroupResponse): _79.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _79.QueryGroupPoliciesByGroupResponseProtoMsg): _79.QueryGroupPoliciesByGroupResponse;
                toProto(message: _79.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _79.QueryGroupPoliciesByGroupResponse): _79.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _79.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByAdminRequest>): _79.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _79.QueryGroupPoliciesByAdminRequestAmino): _79.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _79.QueryGroupPoliciesByAdminRequest): _79.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _79.QueryGroupPoliciesByAdminRequestAminoMsg): _79.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _79.QueryGroupPoliciesByAdminRequest): _79.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _79.QueryGroupPoliciesByAdminRequestProtoMsg): _79.QueryGroupPoliciesByAdminRequest;
                toProto(message: _79.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _79.QueryGroupPoliciesByAdminRequest): _79.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _79.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByAdminResponse>): _79.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _79.QueryGroupPoliciesByAdminResponseAmino): _79.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _79.QueryGroupPoliciesByAdminResponse): _79.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _79.QueryGroupPoliciesByAdminResponseAminoMsg): _79.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _79.QueryGroupPoliciesByAdminResponse): _79.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _79.QueryGroupPoliciesByAdminResponseProtoMsg): _79.QueryGroupPoliciesByAdminResponse;
                toProto(message: _79.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _79.QueryGroupPoliciesByAdminResponse): _79.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _79.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalRequest;
                fromPartial(object: Partial<_79.QueryProposalRequest>): _79.QueryProposalRequest;
                fromAmino(object: _79.QueryProposalRequestAmino): _79.QueryProposalRequest;
                toAmino(message: _79.QueryProposalRequest): _79.QueryProposalRequestAmino;
                fromAminoMsg(object: _79.QueryProposalRequestAminoMsg): _79.QueryProposalRequest;
                toAminoMsg(message: _79.QueryProposalRequest): _79.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _79.QueryProposalRequestProtoMsg): _79.QueryProposalRequest;
                toProto(message: _79.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _79.QueryProposalRequest): _79.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _79.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalResponse;
                fromPartial(object: Partial<_79.QueryProposalResponse>): _79.QueryProposalResponse;
                fromAmino(object: _79.QueryProposalResponseAmino): _79.QueryProposalResponse;
                toAmino(message: _79.QueryProposalResponse): _79.QueryProposalResponseAmino;
                fromAminoMsg(object: _79.QueryProposalResponseAminoMsg): _79.QueryProposalResponse;
                toAminoMsg(message: _79.QueryProposalResponse): _79.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _79.QueryProposalResponseProtoMsg): _79.QueryProposalResponse;
                toProto(message: _79.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _79.QueryProposalResponse): _79.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _79.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_79.QueryProposalsByGroupPolicyRequest>): _79.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _79.QueryProposalsByGroupPolicyRequestAmino): _79.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _79.QueryProposalsByGroupPolicyRequest): _79.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _79.QueryProposalsByGroupPolicyRequestAminoMsg): _79.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _79.QueryProposalsByGroupPolicyRequest): _79.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _79.QueryProposalsByGroupPolicyRequestProtoMsg): _79.QueryProposalsByGroupPolicyRequest;
                toProto(message: _79.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _79.QueryProposalsByGroupPolicyRequest): _79.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _79.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_79.QueryProposalsByGroupPolicyResponse>): _79.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _79.QueryProposalsByGroupPolicyResponseAmino): _79.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _79.QueryProposalsByGroupPolicyResponse): _79.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _79.QueryProposalsByGroupPolicyResponseAminoMsg): _79.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _79.QueryProposalsByGroupPolicyResponse): _79.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _79.QueryProposalsByGroupPolicyResponseProtoMsg): _79.QueryProposalsByGroupPolicyResponse;
                toProto(message: _79.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _79.QueryProposalsByGroupPolicyResponse): _79.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _79.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_79.QueryVoteByProposalVoterRequest>): _79.QueryVoteByProposalVoterRequest;
                fromAmino(object: _79.QueryVoteByProposalVoterRequestAmino): _79.QueryVoteByProposalVoterRequest;
                toAmino(message: _79.QueryVoteByProposalVoterRequest): _79.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _79.QueryVoteByProposalVoterRequestAminoMsg): _79.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _79.QueryVoteByProposalVoterRequest): _79.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _79.QueryVoteByProposalVoterRequestProtoMsg): _79.QueryVoteByProposalVoterRequest;
                toProto(message: _79.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _79.QueryVoteByProposalVoterRequest): _79.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _79.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_79.QueryVoteByProposalVoterResponse>): _79.QueryVoteByProposalVoterResponse;
                fromAmino(object: _79.QueryVoteByProposalVoterResponseAmino): _79.QueryVoteByProposalVoterResponse;
                toAmino(message: _79.QueryVoteByProposalVoterResponse): _79.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _79.QueryVoteByProposalVoterResponseAminoMsg): _79.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _79.QueryVoteByProposalVoterResponse): _79.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _79.QueryVoteByProposalVoterResponseProtoMsg): _79.QueryVoteByProposalVoterResponse;
                toProto(message: _79.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _79.QueryVoteByProposalVoterResponse): _79.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _79.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_79.QueryVotesByProposalRequest>): _79.QueryVotesByProposalRequest;
                fromAmino(object: _79.QueryVotesByProposalRequestAmino): _79.QueryVotesByProposalRequest;
                toAmino(message: _79.QueryVotesByProposalRequest): _79.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _79.QueryVotesByProposalRequestAminoMsg): _79.QueryVotesByProposalRequest;
                toAminoMsg(message: _79.QueryVotesByProposalRequest): _79.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _79.QueryVotesByProposalRequestProtoMsg): _79.QueryVotesByProposalRequest;
                toProto(message: _79.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _79.QueryVotesByProposalRequest): _79.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _79.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_79.QueryVotesByProposalResponse>): _79.QueryVotesByProposalResponse;
                fromAmino(object: _79.QueryVotesByProposalResponseAmino): _79.QueryVotesByProposalResponse;
                toAmino(message: _79.QueryVotesByProposalResponse): _79.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _79.QueryVotesByProposalResponseAminoMsg): _79.QueryVotesByProposalResponse;
                toAminoMsg(message: _79.QueryVotesByProposalResponse): _79.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _79.QueryVotesByProposalResponseProtoMsg): _79.QueryVotesByProposalResponse;
                toProto(message: _79.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _79.QueryVotesByProposalResponse): _79.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _79.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_79.QueryVotesByVoterRequest>): _79.QueryVotesByVoterRequest;
                fromAmino(object: _79.QueryVotesByVoterRequestAmino): _79.QueryVotesByVoterRequest;
                toAmino(message: _79.QueryVotesByVoterRequest): _79.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _79.QueryVotesByVoterRequestAminoMsg): _79.QueryVotesByVoterRequest;
                toAminoMsg(message: _79.QueryVotesByVoterRequest): _79.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _79.QueryVotesByVoterRequestProtoMsg): _79.QueryVotesByVoterRequest;
                toProto(message: _79.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _79.QueryVotesByVoterRequest): _79.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _79.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_79.QueryVotesByVoterResponse>): _79.QueryVotesByVoterResponse;
                fromAmino(object: _79.QueryVotesByVoterResponseAmino): _79.QueryVotesByVoterResponse;
                toAmino(message: _79.QueryVotesByVoterResponse): _79.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _79.QueryVotesByVoterResponseAminoMsg): _79.QueryVotesByVoterResponse;
                toAminoMsg(message: _79.QueryVotesByVoterResponse): _79.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _79.QueryVotesByVoterResponseProtoMsg): _79.QueryVotesByVoterResponse;
                toProto(message: _79.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _79.QueryVotesByVoterResponse): _79.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _79.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_79.QueryGroupsByMemberRequest>): _79.QueryGroupsByMemberRequest;
                fromAmino(object: _79.QueryGroupsByMemberRequestAmino): _79.QueryGroupsByMemberRequest;
                toAmino(message: _79.QueryGroupsByMemberRequest): _79.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _79.QueryGroupsByMemberRequestAminoMsg): _79.QueryGroupsByMemberRequest;
                toAminoMsg(message: _79.QueryGroupsByMemberRequest): _79.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _79.QueryGroupsByMemberRequestProtoMsg): _79.QueryGroupsByMemberRequest;
                toProto(message: _79.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _79.QueryGroupsByMemberRequest): _79.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _79.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_79.QueryGroupsByMemberResponse>): _79.QueryGroupsByMemberResponse;
                fromAmino(object: _79.QueryGroupsByMemberResponseAmino): _79.QueryGroupsByMemberResponse;
                toAmino(message: _79.QueryGroupsByMemberResponse): _79.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _79.QueryGroupsByMemberResponseAminoMsg): _79.QueryGroupsByMemberResponse;
                toAminoMsg(message: _79.QueryGroupsByMemberResponse): _79.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _79.QueryGroupsByMemberResponseProtoMsg): _79.QueryGroupsByMemberResponse;
                toProto(message: _79.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _79.QueryGroupsByMemberResponse): _79.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _79.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryTallyResultRequest;
                fromPartial(object: Partial<_79.QueryTallyResultRequest>): _79.QueryTallyResultRequest;
                fromAmino(object: _79.QueryTallyResultRequestAmino): _79.QueryTallyResultRequest;
                toAmino(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _79.QueryTallyResultRequestAminoMsg): _79.QueryTallyResultRequest;
                toAminoMsg(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _79.QueryTallyResultRequestProtoMsg): _79.QueryTallyResultRequest;
                toProto(message: _79.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _79.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryTallyResultResponse;
                fromPartial(object: Partial<_79.QueryTallyResultResponse>): _79.QueryTallyResultResponse;
                fromAmino(object: _79.QueryTallyResultResponseAmino): _79.QueryTallyResultResponse;
                toAmino(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _79.QueryTallyResultResponseAminoMsg): _79.QueryTallyResultResponse;
                toAminoMsg(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _79.QueryTallyResultResponseProtoMsg): _79.QueryTallyResultResponse;
                toProto(message: _79.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _79.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupsRequest;
                fromPartial(object: Partial<_79.QueryGroupsRequest>): _79.QueryGroupsRequest;
                fromAmino(object: _79.QueryGroupsRequestAmino): _79.QueryGroupsRequest;
                toAmino(message: _79.QueryGroupsRequest): _79.QueryGroupsRequestAmino;
                fromAminoMsg(object: _79.QueryGroupsRequestAminoMsg): _79.QueryGroupsRequest;
                toAminoMsg(message: _79.QueryGroupsRequest): _79.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryGroupsRequestProtoMsg): _79.QueryGroupsRequest;
                toProto(message: _79.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryGroupsRequest): _79.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _79.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryGroupsResponse;
                fromPartial(object: Partial<_79.QueryGroupsResponse>): _79.QueryGroupsResponse;
                fromAmino(object: _79.QueryGroupsResponseAmino): _79.QueryGroupsResponse;
                toAmino(message: _79.QueryGroupsResponse): _79.QueryGroupsResponseAmino;
                fromAminoMsg(object: _79.QueryGroupsResponseAminoMsg): _79.QueryGroupsResponse;
                toAminoMsg(message: _79.QueryGroupsResponse): _79.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryGroupsResponseProtoMsg): _79.QueryGroupsResponse;
                toProto(message: _79.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryGroupsResponse): _79.QueryGroupsResponseProtoMsg;
            };
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _77.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.EventCreateGroup;
                fromPartial(object: Partial<_77.EventCreateGroup>): _77.EventCreateGroup;
                fromAmino(object: _77.EventCreateGroupAmino): _77.EventCreateGroup;
                toAmino(message: _77.EventCreateGroup): _77.EventCreateGroupAmino;
                fromAminoMsg(object: _77.EventCreateGroupAminoMsg): _77.EventCreateGroup;
                toAminoMsg(message: _77.EventCreateGroup): _77.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _77.EventCreateGroupProtoMsg): _77.EventCreateGroup;
                toProto(message: _77.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _77.EventCreateGroup): _77.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _77.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.EventUpdateGroup;
                fromPartial(object: Partial<_77.EventUpdateGroup>): _77.EventUpdateGroup;
                fromAmino(object: _77.EventUpdateGroupAmino): _77.EventUpdateGroup;
                toAmino(message: _77.EventUpdateGroup): _77.EventUpdateGroupAmino;
                fromAminoMsg(object: _77.EventUpdateGroupAminoMsg): _77.EventUpdateGroup;
                toAminoMsg(message: _77.EventUpdateGroup): _77.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _77.EventUpdateGroupProtoMsg): _77.EventUpdateGroup;
                toProto(message: _77.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _77.EventUpdateGroup): _77.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _77.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.EventCreateGroupPolicy;
                fromPartial(object: Partial<_77.EventCreateGroupPolicy>): _77.EventCreateGroupPolicy;
                fromAmino(object: _77.EventCreateGroupPolicyAmino): _77.EventCreateGroupPolicy;
                toAmino(message: _77.EventCreateGroupPolicy): _77.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _77.EventCreateGroupPolicyAminoMsg): _77.EventCreateGroupPolicy;
                toAminoMsg(message: _77.EventCreateGroupPolicy): _77.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _77.EventCreateGroupPolicyProtoMsg): _77.EventCreateGroupPolicy;
                toProto(message: _77.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _77.EventCreateGroupPolicy): _77.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _77.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_77.EventUpdateGroupPolicy>): _77.EventUpdateGroupPolicy;
                fromAmino(object: _77.EventUpdateGroupPolicyAmino): _77.EventUpdateGroupPolicy;
                toAmino(message: _77.EventUpdateGroupPolicy): _77.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _77.EventUpdateGroupPolicyAminoMsg): _77.EventUpdateGroupPolicy;
                toAminoMsg(message: _77.EventUpdateGroupPolicy): _77.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _77.EventUpdateGroupPolicyProtoMsg): _77.EventUpdateGroupPolicy;
                toProto(message: _77.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _77.EventUpdateGroupPolicy): _77.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _77.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.EventSubmitProposal;
                fromPartial(object: Partial<_77.EventSubmitProposal>): _77.EventSubmitProposal;
                fromAmino(object: _77.EventSubmitProposalAmino): _77.EventSubmitProposal;
                toAmino(message: _77.EventSubmitProposal): _77.EventSubmitProposalAmino;
                fromAminoMsg(object: _77.EventSubmitProposalAminoMsg): _77.EventSubmitProposal;
                toAminoMsg(message: _77.EventSubmitProposal): _77.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _77.EventSubmitProposalProtoMsg): _77.EventSubmitProposal;
                toProto(message: _77.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _77.EventSubmitProposal): _77.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _77.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.EventWithdrawProposal;
                fromPartial(object: Partial<_77.EventWithdrawProposal>): _77.EventWithdrawProposal;
                fromAmino(object: _77.EventWithdrawProposalAmino): _77.EventWithdrawProposal;
                toAmino(message: _77.EventWithdrawProposal): _77.EventWithdrawProposalAmino;
                fromAminoMsg(object: _77.EventWithdrawProposalAminoMsg): _77.EventWithdrawProposal;
                toAminoMsg(message: _77.EventWithdrawProposal): _77.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _77.EventWithdrawProposalProtoMsg): _77.EventWithdrawProposal;
                toProto(message: _77.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _77.EventWithdrawProposal): _77.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _77.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.EventVote;
                fromPartial(object: Partial<_77.EventVote>): _77.EventVote;
                fromAmino(object: _77.EventVoteAmino): _77.EventVote;
                toAmino(message: _77.EventVote): _77.EventVoteAmino;
                fromAminoMsg(object: _77.EventVoteAminoMsg): _77.EventVote;
                toAminoMsg(message: _77.EventVote): _77.EventVoteAminoMsg;
                fromProtoMsg(message: _77.EventVoteProtoMsg): _77.EventVote;
                toProto(message: _77.EventVote): Uint8Array;
                toProtoMsg(message: _77.EventVote): _77.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _77.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.EventExec;
                fromPartial(object: Partial<_77.EventExec>): _77.EventExec;
                fromAmino(object: _77.EventExecAmino): _77.EventExec;
                toAmino(message: _77.EventExec): _77.EventExecAmino;
                fromAminoMsg(object: _77.EventExecAminoMsg): _77.EventExec;
                toAminoMsg(message: _77.EventExec): _77.EventExecAminoMsg;
                fromProtoMsg(message: _77.EventExecProtoMsg): _77.EventExec;
                toProto(message: _77.EventExec): Uint8Array;
                toProtoMsg(message: _77.EventExec): _77.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _77.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.EventLeaveGroup;
                fromPartial(object: Partial<_77.EventLeaveGroup>): _77.EventLeaveGroup;
                fromAmino(object: _77.EventLeaveGroupAmino): _77.EventLeaveGroup;
                toAmino(message: _77.EventLeaveGroup): _77.EventLeaveGroupAmino;
                fromAminoMsg(object: _77.EventLeaveGroupAminoMsg): _77.EventLeaveGroup;
                toAminoMsg(message: _77.EventLeaveGroup): _77.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _77.EventLeaveGroupProtoMsg): _77.EventLeaveGroup;
                toProto(message: _77.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _77.EventLeaveGroup): _77.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _77.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.EventProposalPruned;
                fromPartial(object: Partial<_77.EventProposalPruned>): _77.EventProposalPruned;
                fromAmino(object: _77.EventProposalPrunedAmino): _77.EventProposalPruned;
                toAmino(message: _77.EventProposalPruned): _77.EventProposalPrunedAmino;
                fromAminoMsg(object: _77.EventProposalPrunedAminoMsg): _77.EventProposalPruned;
                toAminoMsg(message: _77.EventProposalPruned): _77.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _77.EventProposalPrunedProtoMsg): _77.EventProposalPruned;
                toProto(message: _77.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _77.EventProposalPruned): _77.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _245.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                inflation(request?: _84.QueryInflationRequest): Promise<_84.QueryInflationResponse>;
                annualProvisions(request?: _84.QueryAnnualProvisionsRequest): Promise<_84.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _84.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.QueryInflationRequest;
                fromPartial(_: Partial<_84.QueryInflationRequest>): _84.QueryInflationRequest;
                fromAmino(_: _84.QueryInflationRequestAmino): _84.QueryInflationRequest;
                toAmino(_: _84.QueryInflationRequest): _84.QueryInflationRequestAmino;
                fromAminoMsg(object: _84.QueryInflationRequestAminoMsg): _84.QueryInflationRequest;
                toAminoMsg(message: _84.QueryInflationRequest): _84.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _84.QueryInflationRequestProtoMsg): _84.QueryInflationRequest;
                toProto(message: _84.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _84.QueryInflationRequest): _84.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _84.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryInflationResponse;
                fromPartial(object: Partial<_84.QueryInflationResponse>): _84.QueryInflationResponse;
                fromAmino(object: _84.QueryInflationResponseAmino): _84.QueryInflationResponse;
                toAmino(message: _84.QueryInflationResponse): _84.QueryInflationResponseAmino;
                fromAminoMsg(object: _84.QueryInflationResponseAminoMsg): _84.QueryInflationResponse;
                toAminoMsg(message: _84.QueryInflationResponse): _84.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _84.QueryInflationResponseProtoMsg): _84.QueryInflationResponse;
                toProto(message: _84.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _84.QueryInflationResponse): _84.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _84.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_84.QueryAnnualProvisionsRequest>): _84.QueryAnnualProvisionsRequest;
                fromAmino(_: _84.QueryAnnualProvisionsRequestAmino): _84.QueryAnnualProvisionsRequest;
                toAmino(_: _84.QueryAnnualProvisionsRequest): _84.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _84.QueryAnnualProvisionsRequestAminoMsg): _84.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _84.QueryAnnualProvisionsRequest): _84.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryAnnualProvisionsRequestProtoMsg): _84.QueryAnnualProvisionsRequest;
                toProto(message: _84.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryAnnualProvisionsRequest): _84.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _84.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_84.QueryAnnualProvisionsResponse>): _84.QueryAnnualProvisionsResponse;
                fromAmino(object: _84.QueryAnnualProvisionsResponseAmino): _84.QueryAnnualProvisionsResponse;
                toAmino(message: _84.QueryAnnualProvisionsResponse): _84.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _84.QueryAnnualProvisionsResponseAminoMsg): _84.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _84.QueryAnnualProvisionsResponse): _84.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryAnnualProvisionsResponseProtoMsg): _84.QueryAnnualProvisionsResponse;
                toProto(message: _84.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryAnnualProvisionsResponse): _84.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _83.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Minter;
                fromPartial(object: Partial<_83.Minter>): _83.Minter;
                fromAmino(object: _83.MinterAmino): _83.Minter;
                toAmino(message: _83.Minter): _83.MinterAmino;
                fromAminoMsg(object: _83.MinterAminoMsg): _83.Minter;
                toAminoMsg(message: _83.Minter): _83.MinterAminoMsg;
                fromProtoMsg(message: _83.MinterProtoMsg): _83.Minter;
                toProto(message: _83.Minter): Uint8Array;
                toProtoMsg(message: _83.Minter): _83.MinterProtoMsg;
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
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _261.MsgClientImpl;
            QueryClientImpl: typeof _246.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _89.QueryBalanceRequest): Promise<_89.QueryBalanceResponse>;
                owner(request: _89.QueryOwnerRequest): Promise<_89.QueryOwnerResponse>;
                supply(request: _89.QuerySupplyRequest): Promise<_89.QuerySupplyResponse>;
                nFTs(request: _89.QueryNFTsRequest): Promise<_89.QueryNFTsResponse>;
                nFT(request: _89.QueryNFTRequest): Promise<_89.QueryNFTResponse>;
                class(request: _89.QueryClassRequest): Promise<_89.QueryClassResponse>;
                classes(request?: _89.QueryClassesRequest): Promise<_89.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _90.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _90.MsgSend): {
                        typeUrl: string;
                        value: _90.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _90.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _90.MsgSend): {
                        typeUrl: string;
                        value: _90.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _90.MsgSend) => _90.MsgSendAmino;
                    fromAmino: (object: _90.MsgSendAmino) => _90.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _90.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgSend;
                fromPartial(object: Partial<_90.MsgSend>): _90.MsgSend;
                fromAmino(object: _90.MsgSendAmino): _90.MsgSend;
                toAmino(message: _90.MsgSend): _90.MsgSendAmino;
                fromAminoMsg(object: _90.MsgSendAminoMsg): _90.MsgSend;
                toAminoMsg(message: _90.MsgSend): _90.MsgSendAminoMsg;
                fromProtoMsg(message: _90.MsgSendProtoMsg): _90.MsgSend;
                toProto(message: _90.MsgSend): Uint8Array;
                toProtoMsg(message: _90.MsgSend): _90.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _90.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgSendResponse;
                fromPartial(_: Partial<_90.MsgSendResponse>): _90.MsgSendResponse;
                fromAmino(_: _90.MsgSendResponseAmino): _90.MsgSendResponse;
                toAmino(_: _90.MsgSendResponse): _90.MsgSendResponseAmino;
                fromAminoMsg(object: _90.MsgSendResponseAminoMsg): _90.MsgSendResponse;
                toAminoMsg(message: _90.MsgSendResponse): _90.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _90.MsgSendResponseProtoMsg): _90.MsgSendResponse;
                toProto(message: _90.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _90.MsgSendResponse): _90.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _89.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryBalanceRequest;
                fromPartial(object: Partial<_89.QueryBalanceRequest>): _89.QueryBalanceRequest;
                fromAmino(object: _89.QueryBalanceRequestAmino): _89.QueryBalanceRequest;
                toAmino(message: _89.QueryBalanceRequest): _89.QueryBalanceRequestAmino;
                fromAminoMsg(object: _89.QueryBalanceRequestAminoMsg): _89.QueryBalanceRequest;
                toAminoMsg(message: _89.QueryBalanceRequest): _89.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _89.QueryBalanceRequestProtoMsg): _89.QueryBalanceRequest;
                toProto(message: _89.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _89.QueryBalanceRequest): _89.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _89.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryBalanceResponse;
                fromPartial(object: Partial<_89.QueryBalanceResponse>): _89.QueryBalanceResponse;
                fromAmino(object: _89.QueryBalanceResponseAmino): _89.QueryBalanceResponse;
                toAmino(message: _89.QueryBalanceResponse): _89.QueryBalanceResponseAmino;
                fromAminoMsg(object: _89.QueryBalanceResponseAminoMsg): _89.QueryBalanceResponse;
                toAminoMsg(message: _89.QueryBalanceResponse): _89.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _89.QueryBalanceResponseProtoMsg): _89.QueryBalanceResponse;
                toProto(message: _89.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _89.QueryBalanceResponse): _89.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _89.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryOwnerRequest;
                fromPartial(object: Partial<_89.QueryOwnerRequest>): _89.QueryOwnerRequest;
                fromAmino(object: _89.QueryOwnerRequestAmino): _89.QueryOwnerRequest;
                toAmino(message: _89.QueryOwnerRequest): _89.QueryOwnerRequestAmino;
                fromAminoMsg(object: _89.QueryOwnerRequestAminoMsg): _89.QueryOwnerRequest;
                toAminoMsg(message: _89.QueryOwnerRequest): _89.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _89.QueryOwnerRequestProtoMsg): _89.QueryOwnerRequest;
                toProto(message: _89.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _89.QueryOwnerRequest): _89.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _89.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryOwnerResponse;
                fromPartial(object: Partial<_89.QueryOwnerResponse>): _89.QueryOwnerResponse;
                fromAmino(object: _89.QueryOwnerResponseAmino): _89.QueryOwnerResponse;
                toAmino(message: _89.QueryOwnerResponse): _89.QueryOwnerResponseAmino;
                fromAminoMsg(object: _89.QueryOwnerResponseAminoMsg): _89.QueryOwnerResponse;
                toAminoMsg(message: _89.QueryOwnerResponse): _89.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _89.QueryOwnerResponseProtoMsg): _89.QueryOwnerResponse;
                toProto(message: _89.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _89.QueryOwnerResponse): _89.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _89.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QuerySupplyRequest;
                fromPartial(object: Partial<_89.QuerySupplyRequest>): _89.QuerySupplyRequest;
                fromAmino(object: _89.QuerySupplyRequestAmino): _89.QuerySupplyRequest;
                toAmino(message: _89.QuerySupplyRequest): _89.QuerySupplyRequestAmino;
                fromAminoMsg(object: _89.QuerySupplyRequestAminoMsg): _89.QuerySupplyRequest;
                toAminoMsg(message: _89.QuerySupplyRequest): _89.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _89.QuerySupplyRequestProtoMsg): _89.QuerySupplyRequest;
                toProto(message: _89.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _89.QuerySupplyRequest): _89.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _89.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QuerySupplyResponse;
                fromPartial(object: Partial<_89.QuerySupplyResponse>): _89.QuerySupplyResponse;
                fromAmino(object: _89.QuerySupplyResponseAmino): _89.QuerySupplyResponse;
                toAmino(message: _89.QuerySupplyResponse): _89.QuerySupplyResponseAmino;
                fromAminoMsg(object: _89.QuerySupplyResponseAminoMsg): _89.QuerySupplyResponse;
                toAminoMsg(message: _89.QuerySupplyResponse): _89.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _89.QuerySupplyResponseProtoMsg): _89.QuerySupplyResponse;
                toProto(message: _89.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _89.QuerySupplyResponse): _89.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _89.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryNFTsRequest;
                fromPartial(object: Partial<_89.QueryNFTsRequest>): _89.QueryNFTsRequest;
                fromAmino(object: _89.QueryNFTsRequestAmino): _89.QueryNFTsRequest;
                toAmino(message: _89.QueryNFTsRequest): _89.QueryNFTsRequestAmino;
                fromAminoMsg(object: _89.QueryNFTsRequestAminoMsg): _89.QueryNFTsRequest;
                toAminoMsg(message: _89.QueryNFTsRequest): _89.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _89.QueryNFTsRequestProtoMsg): _89.QueryNFTsRequest;
                toProto(message: _89.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _89.QueryNFTsRequest): _89.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _89.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryNFTsResponse;
                fromPartial(object: Partial<_89.QueryNFTsResponse>): _89.QueryNFTsResponse;
                fromAmino(object: _89.QueryNFTsResponseAmino): _89.QueryNFTsResponse;
                toAmino(message: _89.QueryNFTsResponse): _89.QueryNFTsResponseAmino;
                fromAminoMsg(object: _89.QueryNFTsResponseAminoMsg): _89.QueryNFTsResponse;
                toAminoMsg(message: _89.QueryNFTsResponse): _89.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _89.QueryNFTsResponseProtoMsg): _89.QueryNFTsResponse;
                toProto(message: _89.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _89.QueryNFTsResponse): _89.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _89.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryNFTRequest;
                fromPartial(object: Partial<_89.QueryNFTRequest>): _89.QueryNFTRequest;
                fromAmino(object: _89.QueryNFTRequestAmino): _89.QueryNFTRequest;
                toAmino(message: _89.QueryNFTRequest): _89.QueryNFTRequestAmino;
                fromAminoMsg(object: _89.QueryNFTRequestAminoMsg): _89.QueryNFTRequest;
                toAminoMsg(message: _89.QueryNFTRequest): _89.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _89.QueryNFTRequestProtoMsg): _89.QueryNFTRequest;
                toProto(message: _89.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _89.QueryNFTRequest): _89.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _89.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryNFTResponse;
                fromPartial(object: Partial<_89.QueryNFTResponse>): _89.QueryNFTResponse;
                fromAmino(object: _89.QueryNFTResponseAmino): _89.QueryNFTResponse;
                toAmino(message: _89.QueryNFTResponse): _89.QueryNFTResponseAmino;
                fromAminoMsg(object: _89.QueryNFTResponseAminoMsg): _89.QueryNFTResponse;
                toAminoMsg(message: _89.QueryNFTResponse): _89.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _89.QueryNFTResponseProtoMsg): _89.QueryNFTResponse;
                toProto(message: _89.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _89.QueryNFTResponse): _89.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _89.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryClassRequest;
                fromPartial(object: Partial<_89.QueryClassRequest>): _89.QueryClassRequest;
                fromAmino(object: _89.QueryClassRequestAmino): _89.QueryClassRequest;
                toAmino(message: _89.QueryClassRequest): _89.QueryClassRequestAmino;
                fromAminoMsg(object: _89.QueryClassRequestAminoMsg): _89.QueryClassRequest;
                toAminoMsg(message: _89.QueryClassRequest): _89.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _89.QueryClassRequestProtoMsg): _89.QueryClassRequest;
                toProto(message: _89.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _89.QueryClassRequest): _89.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _89.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryClassResponse;
                fromPartial(object: Partial<_89.QueryClassResponse>): _89.QueryClassResponse;
                fromAmino(object: _89.QueryClassResponseAmino): _89.QueryClassResponse;
                toAmino(message: _89.QueryClassResponse): _89.QueryClassResponseAmino;
                fromAminoMsg(object: _89.QueryClassResponseAminoMsg): _89.QueryClassResponse;
                toAminoMsg(message: _89.QueryClassResponse): _89.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _89.QueryClassResponseProtoMsg): _89.QueryClassResponse;
                toProto(message: _89.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _89.QueryClassResponse): _89.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _89.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryClassesRequest;
                fromPartial(object: Partial<_89.QueryClassesRequest>): _89.QueryClassesRequest;
                fromAmino(object: _89.QueryClassesRequestAmino): _89.QueryClassesRequest;
                toAmino(message: _89.QueryClassesRequest): _89.QueryClassesRequestAmino;
                fromAminoMsg(object: _89.QueryClassesRequestAminoMsg): _89.QueryClassesRequest;
                toAminoMsg(message: _89.QueryClassesRequest): _89.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _89.QueryClassesRequestProtoMsg): _89.QueryClassesRequest;
                toProto(message: _89.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _89.QueryClassesRequest): _89.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _89.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryClassesResponse;
                fromPartial(object: Partial<_89.QueryClassesResponse>): _89.QueryClassesResponse;
                fromAmino(object: _89.QueryClassesResponseAmino): _89.QueryClassesResponse;
                toAmino(message: _89.QueryClassesResponse): _89.QueryClassesResponseAmino;
                fromAminoMsg(object: _89.QueryClassesResponseAminoMsg): _89.QueryClassesResponse;
                toAminoMsg(message: _89.QueryClassesResponse): _89.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _89.QueryClassesResponseProtoMsg): _89.QueryClassesResponse;
                toProto(message: _89.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _89.QueryClassesResponse): _89.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _88.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Class;
                fromPartial(object: Partial<_88.Class>): _88.Class;
                fromAmino(object: _88.ClassAmino): _88.Class;
                toAmino(message: _88.Class): _88.ClassAmino;
                fromAminoMsg(object: _88.ClassAminoMsg): _88.Class;
                toAminoMsg(message: _88.Class): _88.ClassAminoMsg;
                fromProtoMsg(message: _88.ClassProtoMsg): _88.Class;
                toProto(message: _88.Class): Uint8Array;
                toProtoMsg(message: _88.Class): _88.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _88.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.NFT;
                fromPartial(object: Partial<_88.NFT>): _88.NFT;
                fromAmino(object: _88.NFTAmino): _88.NFT;
                toAmino(message: _88.NFT): _88.NFTAmino;
                fromAminoMsg(object: _88.NFTAminoMsg): _88.NFT;
                toAminoMsg(message: _88.NFT): _88.NFTAminoMsg;
                fromProtoMsg(message: _88.NFTProtoMsg): _88.NFT;
                toProto(message: _88.NFT): Uint8Array;
                toProtoMsg(message: _88.NFT): _88.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _87.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Entry;
                fromPartial(object: Partial<_87.Entry>): _87.Entry;
                fromAmino(object: _87.EntryAmino): _87.Entry;
                toAmino(message: _87.Entry): _87.EntryAmino;
                fromAminoMsg(object: _87.EntryAminoMsg): _87.Entry;
                toAminoMsg(message: _87.Entry): _87.EntryAminoMsg;
                fromProtoMsg(message: _87.EntryProtoMsg): _87.Entry;
                toProto(message: _87.Entry): Uint8Array;
                toProtoMsg(message: _87.Entry): _87.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _86.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventSend;
                fromPartial(object: Partial<_86.EventSend>): _86.EventSend;
                fromAmino(object: _86.EventSendAmino): _86.EventSend;
                toAmino(message: _86.EventSend): _86.EventSendAmino;
                fromAminoMsg(object: _86.EventSendAminoMsg): _86.EventSend;
                toAminoMsg(message: _86.EventSend): _86.EventSendAminoMsg;
                fromProtoMsg(message: _86.EventSendProtoMsg): _86.EventSend;
                toProto(message: _86.EventSend): Uint8Array;
                toProtoMsg(message: _86.EventSend): _86.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _86.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventMint;
                fromPartial(object: Partial<_86.EventMint>): _86.EventMint;
                fromAmino(object: _86.EventMintAmino): _86.EventMint;
                toAmino(message: _86.EventMint): _86.EventMintAmino;
                fromAminoMsg(object: _86.EventMintAminoMsg): _86.EventMint;
                toAminoMsg(message: _86.EventMint): _86.EventMintAminoMsg;
                fromProtoMsg(message: _86.EventMintProtoMsg): _86.EventMint;
                toProto(message: _86.EventMint): Uint8Array;
                toProtoMsg(message: _86.EventMint): _86.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _86.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventBurn;
                fromPartial(object: Partial<_86.EventBurn>): _86.EventBurn;
                fromAmino(object: _86.EventBurnAmino): _86.EventBurn;
                toAmino(message: _86.EventBurn): _86.EventBurnAmino;
                fromAminoMsg(object: _86.EventBurnAminoMsg): _86.EventBurn;
                toAminoMsg(message: _86.EventBurn): _86.EventBurnAminoMsg;
                fromProtoMsg(message: _86.EventBurnProtoMsg): _86.EventBurn;
                toProto(message: _86.EventBurn): Uint8Array;
                toProtoMsg(message: _86.EventBurn): _86.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
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
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _92.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.TableDescriptor;
                fromPartial(object: Partial<_92.TableDescriptor>): _92.TableDescriptor;
                fromAmino(object: _92.TableDescriptorAmino): _92.TableDescriptor;
                toAmino(message: _92.TableDescriptor): _92.TableDescriptorAmino;
                fromAminoMsg(object: _92.TableDescriptorAminoMsg): _92.TableDescriptor;
                toAminoMsg(message: _92.TableDescriptor): _92.TableDescriptorAminoMsg;
                fromProtoMsg(message: _92.TableDescriptorProtoMsg): _92.TableDescriptor;
                toProto(message: _92.TableDescriptor): Uint8Array;
                toProtoMsg(message: _92.TableDescriptor): _92.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _92.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_92.PrimaryKeyDescriptor>): _92.PrimaryKeyDescriptor;
                fromAmino(object: _92.PrimaryKeyDescriptorAmino): _92.PrimaryKeyDescriptor;
                toAmino(message: _92.PrimaryKeyDescriptor): _92.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _92.PrimaryKeyDescriptorAminoMsg): _92.PrimaryKeyDescriptor;
                toAminoMsg(message: _92.PrimaryKeyDescriptor): _92.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _92.PrimaryKeyDescriptorProtoMsg): _92.PrimaryKeyDescriptor;
                toProto(message: _92.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _92.PrimaryKeyDescriptor): _92.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _92.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_92.SecondaryIndexDescriptor>): _92.SecondaryIndexDescriptor;
                fromAmino(object: _92.SecondaryIndexDescriptorAmino): _92.SecondaryIndexDescriptor;
                toAmino(message: _92.SecondaryIndexDescriptor): _92.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _92.SecondaryIndexDescriptorAminoMsg): _92.SecondaryIndexDescriptor;
                toAminoMsg(message: _92.SecondaryIndexDescriptor): _92.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _92.SecondaryIndexDescriptorProtoMsg): _92.SecondaryIndexDescriptor;
                toProto(message: _92.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _92.SecondaryIndexDescriptor): _92.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _92.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.SingletonDescriptor;
                fromPartial(object: Partial<_92.SingletonDescriptor>): _92.SingletonDescriptor;
                fromAmino(object: _92.SingletonDescriptorAmino): _92.SingletonDescriptor;
                toAmino(message: _92.SingletonDescriptor): _92.SingletonDescriptorAmino;
                fromAminoMsg(object: _92.SingletonDescriptorAminoMsg): _92.SingletonDescriptor;
                toAminoMsg(message: _92.SingletonDescriptor): _92.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _92.SingletonDescriptorProtoMsg): _92.SingletonDescriptor;
                toProto(message: _92.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _92.SingletonDescriptor): _92.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _93.StorageType;
            storageTypeToJSON(object: _93.StorageType): string;
            StorageType: typeof _93.StorageType;
            StorageTypeSDKType: typeof _93.StorageType;
            StorageTypeAmino: typeof _93.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _93.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_93.ModuleSchemaDescriptor>): _93.ModuleSchemaDescriptor;
                fromAmino(object: _93.ModuleSchemaDescriptorAmino): _93.ModuleSchemaDescriptor;
                toAmino(message: _93.ModuleSchemaDescriptor): _93.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _93.ModuleSchemaDescriptorAminoMsg): _93.ModuleSchemaDescriptor;
                toAminoMsg(message: _93.ModuleSchemaDescriptor): _93.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _93.ModuleSchemaDescriptorProtoMsg): _93.ModuleSchemaDescriptor;
                toProto(message: _93.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _93.ModuleSchemaDescriptor): _93.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _93.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_93.ModuleSchemaDescriptor_FileEntry>): _93.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _93.ModuleSchemaDescriptor_FileEntryAmino): _93.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _93.ModuleSchemaDescriptor_FileEntry): _93.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _93.ModuleSchemaDescriptor_FileEntryAminoMsg): _93.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _93.ModuleSchemaDescriptor_FileEntry): _93.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _93.ModuleSchemaDescriptor_FileEntryProtoMsg): _93.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _93.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _93.ModuleSchemaDescriptor_FileEntry): _93.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _247.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                subspaces(request?: _95.QuerySubspacesRequest): Promise<_95.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _228.LCDQueryClient;
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
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _95.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.QuerySubspacesRequest;
                fromPartial(_: Partial<_95.QuerySubspacesRequest>): _95.QuerySubspacesRequest;
                fromAmino(_: _95.QuerySubspacesRequestAmino): _95.QuerySubspacesRequest;
                toAmino(_: _95.QuerySubspacesRequest): _95.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _95.QuerySubspacesRequestAminoMsg): _95.QuerySubspacesRequest;
                toAminoMsg(message: _95.QuerySubspacesRequest): _95.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _95.QuerySubspacesRequestProtoMsg): _95.QuerySubspacesRequest;
                toProto(message: _95.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _95.QuerySubspacesRequest): _95.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _95.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QuerySubspacesResponse;
                fromPartial(object: Partial<_95.QuerySubspacesResponse>): _95.QuerySubspacesResponse;
                fromAmino(object: _95.QuerySubspacesResponseAmino): _95.QuerySubspacesResponse;
                toAmino(message: _95.QuerySubspacesResponse): _95.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _95.QuerySubspacesResponseAminoMsg): _95.QuerySubspacesResponse;
                toAminoMsg(message: _95.QuerySubspacesResponse): _95.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _95.QuerySubspacesResponseProtoMsg): _95.QuerySubspacesResponse;
                toProto(message: _95.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _95.QuerySubspacesResponse): _95.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _95.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Subspace;
                fromPartial(object: Partial<_95.Subspace>): _95.Subspace;
                fromAmino(object: _95.SubspaceAmino): _95.Subspace;
                toAmino(message: _95.Subspace): _95.SubspaceAmino;
                fromAminoMsg(object: _95.SubspaceAminoMsg): _95.Subspace;
                toAminoMsg(message: _95.Subspace): _95.SubspaceAminoMsg;
                fromProtoMsg(message: _95.SubspaceProtoMsg): _95.Subspace;
                toProto(message: _95.Subspace): Uint8Array;
                toProtoMsg(message: _95.Subspace): _95.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _94.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.ParameterChangeProposal;
                fromPartial(object: Partial<_94.ParameterChangeProposal>): _94.ParameterChangeProposal;
                fromAmino(object: _94.ParameterChangeProposalAmino): _94.ParameterChangeProposal;
                toAmino(message: _94.ParameterChangeProposal): _94.ParameterChangeProposalAmino;
                fromAminoMsg(object: _94.ParameterChangeProposalAminoMsg): _94.ParameterChangeProposal;
                toAminoMsg(message: _94.ParameterChangeProposal): _94.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _94.ParameterChangeProposalProtoMsg): _94.ParameterChangeProposal;
                toProto(message: _94.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _94.ParameterChangeProposal): _94.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _94.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.ParamChange;
                fromPartial(object: Partial<_94.ParamChange>): _94.ParamChange;
                fromAmino(object: _94.ParamChangeAmino): _94.ParamChange;
                toAmino(message: _94.ParamChange): _94.ParamChangeAmino;
                fromAminoMsg(object: _94.ParamChangeAminoMsg): _94.ParamChange;
                toAminoMsg(message: _94.ParamChange): _94.ParamChangeAminoMsg;
                fromProtoMsg(message: _94.ParamChangeProtoMsg): _94.ParamChange;
                toProto(message: _94.ParamChange): Uint8Array;
                toProtoMsg(message: _94.ParamChange): _94.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _262.MsgClientImpl;
            QueryClientImpl: typeof _248.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                signingInfo(request: _97.QuerySigningInfoRequest): Promise<_97.QuerySigningInfoResponse>;
                signingInfos(request?: _97.QuerySigningInfosRequest): Promise<_97.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _229.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _99.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _99.MsgUnjail): {
                        typeUrl: string;
                        value: _99.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _99.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _99.MsgUnjail): {
                        typeUrl: string;
                        value: _99.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _99.MsgUnjail) => _99.MsgUnjailAmino;
                    fromAmino: (object: _99.MsgUnjailAmino) => _99.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _99.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgUnjail;
                fromPartial(object: Partial<_99.MsgUnjail>): _99.MsgUnjail;
                fromAmino(object: _99.MsgUnjailAmino): _99.MsgUnjail;
                toAmino(message: _99.MsgUnjail): _99.MsgUnjailAmino;
                fromAminoMsg(object: _99.MsgUnjailAminoMsg): _99.MsgUnjail;
                toAminoMsg(message: _99.MsgUnjail): _99.MsgUnjailAminoMsg;
                fromProtoMsg(message: _99.MsgUnjailProtoMsg): _99.MsgUnjail;
                toProto(message: _99.MsgUnjail): Uint8Array;
                toProtoMsg(message: _99.MsgUnjail): _99.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _99.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.MsgUnjailResponse;
                fromPartial(_: Partial<_99.MsgUnjailResponse>): _99.MsgUnjailResponse;
                fromAmino(_: _99.MsgUnjailResponseAmino): _99.MsgUnjailResponse;
                toAmino(_: _99.MsgUnjailResponse): _99.MsgUnjailResponseAmino;
                fromAminoMsg(object: _99.MsgUnjailResponseAminoMsg): _99.MsgUnjailResponse;
                toAminoMsg(message: _99.MsgUnjailResponse): _99.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _99.MsgUnjailResponseProtoMsg): _99.MsgUnjailResponse;
                toProto(message: _99.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _99.MsgUnjailResponse): _99.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _98.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.ValidatorSigningInfo;
                fromPartial(object: Partial<_98.ValidatorSigningInfo>): _98.ValidatorSigningInfo;
                fromAmino(object: _98.ValidatorSigningInfoAmino): _98.ValidatorSigningInfo;
                toAmino(message: _98.ValidatorSigningInfo): _98.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _98.ValidatorSigningInfoAminoMsg): _98.ValidatorSigningInfo;
                toAminoMsg(message: _98.ValidatorSigningInfo): _98.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _98.ValidatorSigningInfoProtoMsg): _98.ValidatorSigningInfo;
                toProto(message: _98.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _98.ValidatorSigningInfo): _98.ValidatorSigningInfoProtoMsg;
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
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _97.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _97.QueryParamsRequest;
                fromPartial(_: Partial<_97.QueryParamsRequest>): _97.QueryParamsRequest;
                fromAmino(_: _97.QueryParamsRequestAmino): _97.QueryParamsRequest;
                toAmino(_: _97.QueryParamsRequest): _97.QueryParamsRequestAmino;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _97.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QuerySigningInfoRequest;
                fromPartial(object: Partial<_97.QuerySigningInfoRequest>): _97.QuerySigningInfoRequest;
                fromAmino(object: _97.QuerySigningInfoRequestAmino): _97.QuerySigningInfoRequest;
                toAmino(message: _97.QuerySigningInfoRequest): _97.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _97.QuerySigningInfoRequestAminoMsg): _97.QuerySigningInfoRequest;
                toAminoMsg(message: _97.QuerySigningInfoRequest): _97.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _97.QuerySigningInfoRequestProtoMsg): _97.QuerySigningInfoRequest;
                toProto(message: _97.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _97.QuerySigningInfoRequest): _97.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _97.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QuerySigningInfoResponse;
                fromPartial(object: Partial<_97.QuerySigningInfoResponse>): _97.QuerySigningInfoResponse;
                fromAmino(object: _97.QuerySigningInfoResponseAmino): _97.QuerySigningInfoResponse;
                toAmino(message: _97.QuerySigningInfoResponse): _97.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _97.QuerySigningInfoResponseAminoMsg): _97.QuerySigningInfoResponse;
                toAminoMsg(message: _97.QuerySigningInfoResponse): _97.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _97.QuerySigningInfoResponseProtoMsg): _97.QuerySigningInfoResponse;
                toProto(message: _97.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _97.QuerySigningInfoResponse): _97.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _97.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QuerySigningInfosRequest;
                fromPartial(object: Partial<_97.QuerySigningInfosRequest>): _97.QuerySigningInfosRequest;
                fromAmino(object: _97.QuerySigningInfosRequestAmino): _97.QuerySigningInfosRequest;
                toAmino(message: _97.QuerySigningInfosRequest): _97.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _97.QuerySigningInfosRequestAminoMsg): _97.QuerySigningInfosRequest;
                toAminoMsg(message: _97.QuerySigningInfosRequest): _97.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _97.QuerySigningInfosRequestProtoMsg): _97.QuerySigningInfosRequest;
                toProto(message: _97.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _97.QuerySigningInfosRequest): _97.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _97.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QuerySigningInfosResponse;
                fromPartial(object: Partial<_97.QuerySigningInfosResponse>): _97.QuerySigningInfosResponse;
                fromAmino(object: _97.QuerySigningInfosResponseAmino): _97.QuerySigningInfosResponse;
                toAmino(message: _97.QuerySigningInfosResponse): _97.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _97.QuerySigningInfosResponseAminoMsg): _97.QuerySigningInfosResponse;
                toAminoMsg(message: _97.QuerySigningInfosResponse): _97.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _97.QuerySigningInfosResponseProtoMsg): _97.QuerySigningInfosResponse;
                toProto(message: _97.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _97.QuerySigningInfosResponse): _97.QuerySigningInfosResponseProtoMsg;
            };
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _96.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.SigningInfo;
                fromPartial(object: Partial<_96.SigningInfo>): _96.SigningInfo;
                fromAmino(object: _96.SigningInfoAmino): _96.SigningInfo;
                toAmino(message: _96.SigningInfo): _96.SigningInfoAmino;
                fromAminoMsg(object: _96.SigningInfoAminoMsg): _96.SigningInfo;
                toAminoMsg(message: _96.SigningInfo): _96.SigningInfoAminoMsg;
                fromProtoMsg(message: _96.SigningInfoProtoMsg): _96.SigningInfo;
                toProto(message: _96.SigningInfo): Uint8Array;
                toProtoMsg(message: _96.SigningInfo): _96.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _96.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.ValidatorMissedBlocks;
                fromPartial(object: Partial<_96.ValidatorMissedBlocks>): _96.ValidatorMissedBlocks;
                fromAmino(object: _96.ValidatorMissedBlocksAmino): _96.ValidatorMissedBlocks;
                toAmino(message: _96.ValidatorMissedBlocks): _96.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _96.ValidatorMissedBlocksAminoMsg): _96.ValidatorMissedBlocks;
                toAminoMsg(message: _96.ValidatorMissedBlocks): _96.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _96.ValidatorMissedBlocksProtoMsg): _96.ValidatorMissedBlocks;
                toProto(message: _96.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _96.ValidatorMissedBlocks): _96.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _96.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MissedBlock;
                fromPartial(object: Partial<_96.MissedBlock>): _96.MissedBlock;
                fromAmino(object: _96.MissedBlockAmino): _96.MissedBlock;
                toAmino(message: _96.MissedBlock): _96.MissedBlockAmino;
                fromAminoMsg(object: _96.MissedBlockAminoMsg): _96.MissedBlock;
                toAminoMsg(message: _96.MissedBlock): _96.MissedBlockAminoMsg;
                fromProtoMsg(message: _96.MissedBlockProtoMsg): _96.MissedBlock;
                toProto(message: _96.MissedBlock): Uint8Array;
                toProtoMsg(message: _96.MissedBlock): _96.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _263.MsgClientImpl;
            QueryClientImpl: typeof _249.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _102.QueryValidatorsRequest): Promise<_102.QueryValidatorsResponse>;
                validator(request: _102.QueryValidatorRequest): Promise<_102.QueryValidatorResponse>;
                validatorDelegations(request: _102.QueryValidatorDelegationsRequest): Promise<_102.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _102.QueryValidatorUnbondingDelegationsRequest): Promise<_102.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _102.QueryDelegationRequest): Promise<_102.QueryDelegationResponse>;
                unbondingDelegation(request: _102.QueryUnbondingDelegationRequest): Promise<_102.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _102.QueryDelegatorDelegationsRequest): Promise<_102.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _102.QueryDelegatorUnbondingDelegationsRequest): Promise<_102.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _102.QueryRedelegationsRequest): Promise<_102.QueryRedelegationsResponse>;
                delegatorValidators(request: _102.QueryDelegatorValidatorsRequest): Promise<_102.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _102.QueryDelegatorValidatorRequest): Promise<_102.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _102.QueryHistoricalInfoRequest): Promise<_102.QueryHistoricalInfoResponse>;
                pool(request?: _102.QueryPoolRequest): Promise<_102.QueryPoolResponse>;
                params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _230.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _104.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: _104.MsgCreateValidator;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: _104.MsgEditValidator;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: _104.MsgDelegate;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _104.MsgBeginRedelegate;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: _104.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _104.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _104.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _104.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _104.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _104.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _104.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _104.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _104.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: _104.MsgCreateValidator;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: _104.MsgEditValidator;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: _104.MsgDelegate;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _104.MsgBeginRedelegate;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: _104.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _104.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _104.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _104.MsgCreateValidator) => _104.MsgCreateValidatorAmino;
                    fromAmino: (object: _104.MsgCreateValidatorAmino) => _104.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _104.MsgEditValidator) => _104.MsgEditValidatorAmino;
                    fromAmino: (object: _104.MsgEditValidatorAmino) => _104.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _104.MsgDelegate) => _104.MsgDelegateAmino;
                    fromAmino: (object: _104.MsgDelegateAmino) => _104.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _104.MsgBeginRedelegate) => _104.MsgBeginRedelegateAmino;
                    fromAmino: (object: _104.MsgBeginRedelegateAmino) => _104.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUndelegate) => _104.MsgUndelegateAmino;
                    fromAmino: (object: _104.MsgUndelegateAmino) => _104.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _104.MsgCancelUnbondingDelegation) => _104.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _104.MsgCancelUnbondingDelegationAmino) => _104.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _104.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgCreateValidator;
                fromPartial(object: Partial<_104.MsgCreateValidator>): _104.MsgCreateValidator;
                fromAmino(object: _104.MsgCreateValidatorAmino): _104.MsgCreateValidator;
                toAmino(message: _104.MsgCreateValidator): _104.MsgCreateValidatorAmino;
                fromAminoMsg(object: _104.MsgCreateValidatorAminoMsg): _104.MsgCreateValidator;
                toAminoMsg(message: _104.MsgCreateValidator): _104.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _104.MsgCreateValidatorProtoMsg): _104.MsgCreateValidator;
                toProto(message: _104.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _104.MsgCreateValidator): _104.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _104.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_104.MsgCreateValidatorResponse>): _104.MsgCreateValidatorResponse;
                fromAmino(_: _104.MsgCreateValidatorResponseAmino): _104.MsgCreateValidatorResponse;
                toAmino(_: _104.MsgCreateValidatorResponse): _104.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _104.MsgCreateValidatorResponseAminoMsg): _104.MsgCreateValidatorResponse;
                toAminoMsg(message: _104.MsgCreateValidatorResponse): _104.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _104.MsgCreateValidatorResponseProtoMsg): _104.MsgCreateValidatorResponse;
                toProto(message: _104.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _104.MsgCreateValidatorResponse): _104.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _104.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgEditValidator;
                fromPartial(object: Partial<_104.MsgEditValidator>): _104.MsgEditValidator;
                fromAmino(object: _104.MsgEditValidatorAmino): _104.MsgEditValidator;
                toAmino(message: _104.MsgEditValidator): _104.MsgEditValidatorAmino;
                fromAminoMsg(object: _104.MsgEditValidatorAminoMsg): _104.MsgEditValidator;
                toAminoMsg(message: _104.MsgEditValidator): _104.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _104.MsgEditValidatorProtoMsg): _104.MsgEditValidator;
                toProto(message: _104.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _104.MsgEditValidator): _104.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _104.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgEditValidatorResponse;
                fromPartial(_: Partial<_104.MsgEditValidatorResponse>): _104.MsgEditValidatorResponse;
                fromAmino(_: _104.MsgEditValidatorResponseAmino): _104.MsgEditValidatorResponse;
                toAmino(_: _104.MsgEditValidatorResponse): _104.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _104.MsgEditValidatorResponseAminoMsg): _104.MsgEditValidatorResponse;
                toAminoMsg(message: _104.MsgEditValidatorResponse): _104.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _104.MsgEditValidatorResponseProtoMsg): _104.MsgEditValidatorResponse;
                toProto(message: _104.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _104.MsgEditValidatorResponse): _104.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _104.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgDelegate;
                fromPartial(object: Partial<_104.MsgDelegate>): _104.MsgDelegate;
                fromAmino(object: _104.MsgDelegateAmino): _104.MsgDelegate;
                toAmino(message: _104.MsgDelegate): _104.MsgDelegateAmino;
                fromAminoMsg(object: _104.MsgDelegateAminoMsg): _104.MsgDelegate;
                toAminoMsg(message: _104.MsgDelegate): _104.MsgDelegateAminoMsg;
                fromProtoMsg(message: _104.MsgDelegateProtoMsg): _104.MsgDelegate;
                toProto(message: _104.MsgDelegate): Uint8Array;
                toProtoMsg(message: _104.MsgDelegate): _104.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _104.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgDelegateResponse;
                fromPartial(_: Partial<_104.MsgDelegateResponse>): _104.MsgDelegateResponse;
                fromAmino(_: _104.MsgDelegateResponseAmino): _104.MsgDelegateResponse;
                toAmino(_: _104.MsgDelegateResponse): _104.MsgDelegateResponseAmino;
                fromAminoMsg(object: _104.MsgDelegateResponseAminoMsg): _104.MsgDelegateResponse;
                toAminoMsg(message: _104.MsgDelegateResponse): _104.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _104.MsgDelegateResponseProtoMsg): _104.MsgDelegateResponse;
                toProto(message: _104.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _104.MsgDelegateResponse): _104.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _104.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgBeginRedelegate;
                fromPartial(object: Partial<_104.MsgBeginRedelegate>): _104.MsgBeginRedelegate;
                fromAmino(object: _104.MsgBeginRedelegateAmino): _104.MsgBeginRedelegate;
                toAmino(message: _104.MsgBeginRedelegate): _104.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _104.MsgBeginRedelegateAminoMsg): _104.MsgBeginRedelegate;
                toAminoMsg(message: _104.MsgBeginRedelegate): _104.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _104.MsgBeginRedelegateProtoMsg): _104.MsgBeginRedelegate;
                toProto(message: _104.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _104.MsgBeginRedelegate): _104.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _104.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_104.MsgBeginRedelegateResponse>): _104.MsgBeginRedelegateResponse;
                fromAmino(object: _104.MsgBeginRedelegateResponseAmino): _104.MsgBeginRedelegateResponse;
                toAmino(message: _104.MsgBeginRedelegateResponse): _104.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _104.MsgBeginRedelegateResponseAminoMsg): _104.MsgBeginRedelegateResponse;
                toAminoMsg(message: _104.MsgBeginRedelegateResponse): _104.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _104.MsgBeginRedelegateResponseProtoMsg): _104.MsgBeginRedelegateResponse;
                toProto(message: _104.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _104.MsgBeginRedelegateResponse): _104.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _104.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgUndelegate;
                fromPartial(object: Partial<_104.MsgUndelegate>): _104.MsgUndelegate;
                fromAmino(object: _104.MsgUndelegateAmino): _104.MsgUndelegate;
                toAmino(message: _104.MsgUndelegate): _104.MsgUndelegateAmino;
                fromAminoMsg(object: _104.MsgUndelegateAminoMsg): _104.MsgUndelegate;
                toAminoMsg(message: _104.MsgUndelegate): _104.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _104.MsgUndelegateProtoMsg): _104.MsgUndelegate;
                toProto(message: _104.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _104.MsgUndelegate): _104.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _104.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgUndelegateResponse;
                fromPartial(object: Partial<_104.MsgUndelegateResponse>): _104.MsgUndelegateResponse;
                fromAmino(object: _104.MsgUndelegateResponseAmino): _104.MsgUndelegateResponse;
                toAmino(message: _104.MsgUndelegateResponse): _104.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _104.MsgUndelegateResponseAminoMsg): _104.MsgUndelegateResponse;
                toAminoMsg(message: _104.MsgUndelegateResponse): _104.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUndelegateResponseProtoMsg): _104.MsgUndelegateResponse;
                toProto(message: _104.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUndelegateResponse): _104.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _104.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_104.MsgCancelUnbondingDelegation>): _104.MsgCancelUnbondingDelegation;
                fromAmino(object: _104.MsgCancelUnbondingDelegationAmino): _104.MsgCancelUnbondingDelegation;
                toAmino(message: _104.MsgCancelUnbondingDelegation): _104.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _104.MsgCancelUnbondingDelegationAminoMsg): _104.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _104.MsgCancelUnbondingDelegation): _104.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _104.MsgCancelUnbondingDelegationProtoMsg): _104.MsgCancelUnbondingDelegation;
                toProto(message: _104.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _104.MsgCancelUnbondingDelegation): _104.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _104.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_104.MsgCancelUnbondingDelegationResponse>): _104.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _104.MsgCancelUnbondingDelegationResponseAmino): _104.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _104.MsgCancelUnbondingDelegationResponse): _104.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _104.MsgCancelUnbondingDelegationResponseAminoMsg): _104.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _104.MsgCancelUnbondingDelegationResponse): _104.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _104.MsgCancelUnbondingDelegationResponseProtoMsg): _104.MsgCancelUnbondingDelegationResponse;
                toProto(message: _104.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _104.MsgCancelUnbondingDelegationResponse): _104.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _103.BondStatus;
            bondStatusToJSON(object: _103.BondStatus): string;
            BondStatus: typeof _103.BondStatus;
            BondStatusSDKType: typeof _103.BondStatus;
            BondStatusAmino: typeof _103.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _103.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.HistoricalInfo;
                fromPartial(object: Partial<_103.HistoricalInfo>): _103.HistoricalInfo;
                fromAmino(object: _103.HistoricalInfoAmino): _103.HistoricalInfo;
                toAmino(message: _103.HistoricalInfo): _103.HistoricalInfoAmino;
                fromAminoMsg(object: _103.HistoricalInfoAminoMsg): _103.HistoricalInfo;
                toAminoMsg(message: _103.HistoricalInfo): _103.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _103.HistoricalInfoProtoMsg): _103.HistoricalInfo;
                toProto(message: _103.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _103.HistoricalInfo): _103.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _103.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.CommissionRates;
                fromPartial(object: Partial<_103.CommissionRates>): _103.CommissionRates;
                fromAmino(object: _103.CommissionRatesAmino): _103.CommissionRates;
                toAmino(message: _103.CommissionRates): _103.CommissionRatesAmino;
                fromAminoMsg(object: _103.CommissionRatesAminoMsg): _103.CommissionRates;
                toAminoMsg(message: _103.CommissionRates): _103.CommissionRatesAminoMsg;
                fromProtoMsg(message: _103.CommissionRatesProtoMsg): _103.CommissionRates;
                toProto(message: _103.CommissionRates): Uint8Array;
                toProtoMsg(message: _103.CommissionRates): _103.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _103.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Commission;
                fromPartial(object: Partial<_103.Commission>): _103.Commission;
                fromAmino(object: _103.CommissionAmino): _103.Commission;
                toAmino(message: _103.Commission): _103.CommissionAmino;
                fromAminoMsg(object: _103.CommissionAminoMsg): _103.Commission;
                toAminoMsg(message: _103.Commission): _103.CommissionAminoMsg;
                fromProtoMsg(message: _103.CommissionProtoMsg): _103.Commission;
                toProto(message: _103.Commission): Uint8Array;
                toProtoMsg(message: _103.Commission): _103.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _103.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Description;
                fromPartial(object: Partial<_103.Description>): _103.Description;
                fromAmino(object: _103.DescriptionAmino): _103.Description;
                toAmino(message: _103.Description): _103.DescriptionAmino;
                fromAminoMsg(object: _103.DescriptionAminoMsg): _103.Description;
                toAminoMsg(message: _103.Description): _103.DescriptionAminoMsg;
                fromProtoMsg(message: _103.DescriptionProtoMsg): _103.Description;
                toProto(message: _103.Description): Uint8Array;
                toProtoMsg(message: _103.Description): _103.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _103.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Validator;
                fromPartial(object: Partial<_103.Validator>): _103.Validator;
                fromAmino(object: _103.ValidatorAmino): _103.Validator;
                toAmino(message: _103.Validator): _103.ValidatorAmino;
                fromAminoMsg(object: _103.ValidatorAminoMsg): _103.Validator;
                toAminoMsg(message: _103.Validator): _103.ValidatorAminoMsg;
                fromProtoMsg(message: _103.ValidatorProtoMsg): _103.Validator;
                toProto(message: _103.Validator): Uint8Array;
                toProtoMsg(message: _103.Validator): _103.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _103.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ValAddresses;
                fromPartial(object: Partial<_103.ValAddresses>): _103.ValAddresses;
                fromAmino(object: _103.ValAddressesAmino): _103.ValAddresses;
                toAmino(message: _103.ValAddresses): _103.ValAddressesAmino;
                fromAminoMsg(object: _103.ValAddressesAminoMsg): _103.ValAddresses;
                toAminoMsg(message: _103.ValAddresses): _103.ValAddressesAminoMsg;
                fromProtoMsg(message: _103.ValAddressesProtoMsg): _103.ValAddresses;
                toProto(message: _103.ValAddresses): Uint8Array;
                toProtoMsg(message: _103.ValAddresses): _103.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _103.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.DVPair;
                fromPartial(object: Partial<_103.DVPair>): _103.DVPair;
                fromAmino(object: _103.DVPairAmino): _103.DVPair;
                toAmino(message: _103.DVPair): _103.DVPairAmino;
                fromAminoMsg(object: _103.DVPairAminoMsg): _103.DVPair;
                toAminoMsg(message: _103.DVPair): _103.DVPairAminoMsg;
                fromProtoMsg(message: _103.DVPairProtoMsg): _103.DVPair;
                toProto(message: _103.DVPair): Uint8Array;
                toProtoMsg(message: _103.DVPair): _103.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _103.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.DVPairs;
                fromPartial(object: Partial<_103.DVPairs>): _103.DVPairs;
                fromAmino(object: _103.DVPairsAmino): _103.DVPairs;
                toAmino(message: _103.DVPairs): _103.DVPairsAmino;
                fromAminoMsg(object: _103.DVPairsAminoMsg): _103.DVPairs;
                toAminoMsg(message: _103.DVPairs): _103.DVPairsAminoMsg;
                fromProtoMsg(message: _103.DVPairsProtoMsg): _103.DVPairs;
                toProto(message: _103.DVPairs): Uint8Array;
                toProtoMsg(message: _103.DVPairs): _103.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _103.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.DVVTriplet;
                fromPartial(object: Partial<_103.DVVTriplet>): _103.DVVTriplet;
                fromAmino(object: _103.DVVTripletAmino): _103.DVVTriplet;
                toAmino(message: _103.DVVTriplet): _103.DVVTripletAmino;
                fromAminoMsg(object: _103.DVVTripletAminoMsg): _103.DVVTriplet;
                toAminoMsg(message: _103.DVVTriplet): _103.DVVTripletAminoMsg;
                fromProtoMsg(message: _103.DVVTripletProtoMsg): _103.DVVTriplet;
                toProto(message: _103.DVVTriplet): Uint8Array;
                toProtoMsg(message: _103.DVVTriplet): _103.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _103.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.DVVTriplets;
                fromPartial(object: Partial<_103.DVVTriplets>): _103.DVVTriplets;
                fromAmino(object: _103.DVVTripletsAmino): _103.DVVTriplets;
                toAmino(message: _103.DVVTriplets): _103.DVVTripletsAmino;
                fromAminoMsg(object: _103.DVVTripletsAminoMsg): _103.DVVTriplets;
                toAminoMsg(message: _103.DVVTriplets): _103.DVVTripletsAminoMsg;
                fromProtoMsg(message: _103.DVVTripletsProtoMsg): _103.DVVTriplets;
                toProto(message: _103.DVVTriplets): Uint8Array;
                toProtoMsg(message: _103.DVVTriplets): _103.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _103.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Delegation;
                fromPartial(object: Partial<_103.Delegation>): _103.Delegation;
                fromAmino(object: _103.DelegationAmino): _103.Delegation;
                toAmino(message: _103.Delegation): _103.DelegationAmino;
                fromAminoMsg(object: _103.DelegationAminoMsg): _103.Delegation;
                toAminoMsg(message: _103.Delegation): _103.DelegationAminoMsg;
                fromProtoMsg(message: _103.DelegationProtoMsg): _103.Delegation;
                toProto(message: _103.Delegation): Uint8Array;
                toProtoMsg(message: _103.Delegation): _103.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _103.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.UnbondingDelegation;
                fromPartial(object: Partial<_103.UnbondingDelegation>): _103.UnbondingDelegation;
                fromAmino(object: _103.UnbondingDelegationAmino): _103.UnbondingDelegation;
                toAmino(message: _103.UnbondingDelegation): _103.UnbondingDelegationAmino;
                fromAminoMsg(object: _103.UnbondingDelegationAminoMsg): _103.UnbondingDelegation;
                toAminoMsg(message: _103.UnbondingDelegation): _103.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _103.UnbondingDelegationProtoMsg): _103.UnbondingDelegation;
                toProto(message: _103.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _103.UnbondingDelegation): _103.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _103.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.UnbondingDelegationEntry;
                fromPartial(object: Partial<_103.UnbondingDelegationEntry>): _103.UnbondingDelegationEntry;
                fromAmino(object: _103.UnbondingDelegationEntryAmino): _103.UnbondingDelegationEntry;
                toAmino(message: _103.UnbondingDelegationEntry): _103.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _103.UnbondingDelegationEntryAminoMsg): _103.UnbondingDelegationEntry;
                toAminoMsg(message: _103.UnbondingDelegationEntry): _103.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _103.UnbondingDelegationEntryProtoMsg): _103.UnbondingDelegationEntry;
                toProto(message: _103.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _103.UnbondingDelegationEntry): _103.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _103.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.RedelegationEntry;
                fromPartial(object: Partial<_103.RedelegationEntry>): _103.RedelegationEntry;
                fromAmino(object: _103.RedelegationEntryAmino): _103.RedelegationEntry;
                toAmino(message: _103.RedelegationEntry): _103.RedelegationEntryAmino;
                fromAminoMsg(object: _103.RedelegationEntryAminoMsg): _103.RedelegationEntry;
                toAminoMsg(message: _103.RedelegationEntry): _103.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _103.RedelegationEntryProtoMsg): _103.RedelegationEntry;
                toProto(message: _103.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _103.RedelegationEntry): _103.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _103.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Redelegation;
                fromPartial(object: Partial<_103.Redelegation>): _103.Redelegation;
                fromAmino(object: _103.RedelegationAmino): _103.Redelegation;
                toAmino(message: _103.Redelegation): _103.RedelegationAmino;
                fromAminoMsg(object: _103.RedelegationAminoMsg): _103.Redelegation;
                toAminoMsg(message: _103.Redelegation): _103.RedelegationAminoMsg;
                fromProtoMsg(message: _103.RedelegationProtoMsg): _103.Redelegation;
                toProto(message: _103.Redelegation): Uint8Array;
                toProtoMsg(message: _103.Redelegation): _103.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _103.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Params;
                fromPartial(object: Partial<_103.Params>): _103.Params;
                fromAmino(object: _103.ParamsAmino): _103.Params;
                toAmino(message: _103.Params): _103.ParamsAmino;
                fromAminoMsg(object: _103.ParamsAminoMsg): _103.Params;
                toAminoMsg(message: _103.Params): _103.ParamsAminoMsg;
                fromProtoMsg(message: _103.ParamsProtoMsg): _103.Params;
                toProto(message: _103.Params): Uint8Array;
                toProtoMsg(message: _103.Params): _103.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _103.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.DelegationResponse;
                fromPartial(object: Partial<_103.DelegationResponse>): _103.DelegationResponse;
                fromAmino(object: _103.DelegationResponseAmino): _103.DelegationResponse;
                toAmino(message: _103.DelegationResponse): _103.DelegationResponseAmino;
                fromAminoMsg(object: _103.DelegationResponseAminoMsg): _103.DelegationResponse;
                toAminoMsg(message: _103.DelegationResponse): _103.DelegationResponseAminoMsg;
                fromProtoMsg(message: _103.DelegationResponseProtoMsg): _103.DelegationResponse;
                toProto(message: _103.DelegationResponse): Uint8Array;
                toProtoMsg(message: _103.DelegationResponse): _103.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _103.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.RedelegationEntryResponse;
                fromPartial(object: Partial<_103.RedelegationEntryResponse>): _103.RedelegationEntryResponse;
                fromAmino(object: _103.RedelegationEntryResponseAmino): _103.RedelegationEntryResponse;
                toAmino(message: _103.RedelegationEntryResponse): _103.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _103.RedelegationEntryResponseAminoMsg): _103.RedelegationEntryResponse;
                toAminoMsg(message: _103.RedelegationEntryResponse): _103.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _103.RedelegationEntryResponseProtoMsg): _103.RedelegationEntryResponse;
                toProto(message: _103.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _103.RedelegationEntryResponse): _103.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _103.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.RedelegationResponse;
                fromPartial(object: Partial<_103.RedelegationResponse>): _103.RedelegationResponse;
                fromAmino(object: _103.RedelegationResponseAmino): _103.RedelegationResponse;
                toAmino(message: _103.RedelegationResponse): _103.RedelegationResponseAmino;
                fromAminoMsg(object: _103.RedelegationResponseAminoMsg): _103.RedelegationResponse;
                toAminoMsg(message: _103.RedelegationResponse): _103.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _103.RedelegationResponseProtoMsg): _103.RedelegationResponse;
                toProto(message: _103.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _103.RedelegationResponse): _103.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _103.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Pool;
                fromPartial(object: Partial<_103.Pool>): _103.Pool;
                fromAmino(object: _103.PoolAmino): _103.Pool;
                toAmino(message: _103.Pool): _103.PoolAmino;
                fromAminoMsg(object: _103.PoolAminoMsg): _103.Pool;
                toAminoMsg(message: _103.Pool): _103.PoolAminoMsg;
                fromProtoMsg(message: _103.PoolProtoMsg): _103.Pool;
                toProto(message: _103.Pool): Uint8Array;
                toProtoMsg(message: _103.Pool): _103.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorsRequest;
                fromPartial(object: Partial<_102.QueryValidatorsRequest>): _102.QueryValidatorsRequest;
                fromAmino(object: _102.QueryValidatorsRequestAmino): _102.QueryValidatorsRequest;
                toAmino(message: _102.QueryValidatorsRequest): _102.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorsRequestAminoMsg): _102.QueryValidatorsRequest;
                toAminoMsg(message: _102.QueryValidatorsRequest): _102.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorsRequestProtoMsg): _102.QueryValidatorsRequest;
                toProto(message: _102.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorsRequest): _102.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorsResponse;
                fromPartial(object: Partial<_102.QueryValidatorsResponse>): _102.QueryValidatorsResponse;
                fromAmino(object: _102.QueryValidatorsResponseAmino): _102.QueryValidatorsResponse;
                toAmino(message: _102.QueryValidatorsResponse): _102.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorsResponseAminoMsg): _102.QueryValidatorsResponse;
                toAminoMsg(message: _102.QueryValidatorsResponse): _102.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorsResponseProtoMsg): _102.QueryValidatorsResponse;
                toProto(message: _102.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorsResponse): _102.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorRequest;
                fromPartial(object: Partial<_102.QueryValidatorRequest>): _102.QueryValidatorRequest;
                fromAmino(object: _102.QueryValidatorRequestAmino): _102.QueryValidatorRequest;
                toAmino(message: _102.QueryValidatorRequest): _102.QueryValidatorRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorRequestAminoMsg): _102.QueryValidatorRequest;
                toAminoMsg(message: _102.QueryValidatorRequest): _102.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorRequestProtoMsg): _102.QueryValidatorRequest;
                toProto(message: _102.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorRequest): _102.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorResponse;
                fromPartial(object: Partial<_102.QueryValidatorResponse>): _102.QueryValidatorResponse;
                fromAmino(object: _102.QueryValidatorResponseAmino): _102.QueryValidatorResponse;
                toAmino(message: _102.QueryValidatorResponse): _102.QueryValidatorResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorResponseAminoMsg): _102.QueryValidatorResponse;
                toAminoMsg(message: _102.QueryValidatorResponse): _102.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorResponseProtoMsg): _102.QueryValidatorResponse;
                toProto(message: _102.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorResponse): _102.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_102.QueryValidatorDelegationsRequest>): _102.QueryValidatorDelegationsRequest;
                fromAmino(object: _102.QueryValidatorDelegationsRequestAmino): _102.QueryValidatorDelegationsRequest;
                toAmino(message: _102.QueryValidatorDelegationsRequest): _102.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorDelegationsRequestAminoMsg): _102.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _102.QueryValidatorDelegationsRequest): _102.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorDelegationsRequestProtoMsg): _102.QueryValidatorDelegationsRequest;
                toProto(message: _102.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorDelegationsRequest): _102.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_102.QueryValidatorDelegationsResponse>): _102.QueryValidatorDelegationsResponse;
                fromAmino(object: _102.QueryValidatorDelegationsResponseAmino): _102.QueryValidatorDelegationsResponse;
                toAmino(message: _102.QueryValidatorDelegationsResponse): _102.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorDelegationsResponseAminoMsg): _102.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _102.QueryValidatorDelegationsResponse): _102.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorDelegationsResponseProtoMsg): _102.QueryValidatorDelegationsResponse;
                toProto(message: _102.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorDelegationsResponse): _102.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_102.QueryValidatorUnbondingDelegationsRequest>): _102.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _102.QueryValidatorUnbondingDelegationsRequestAmino): _102.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _102.QueryValidatorUnbondingDelegationsRequest): _102.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorUnbondingDelegationsRequestAminoMsg): _102.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _102.QueryValidatorUnbondingDelegationsRequest): _102.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorUnbondingDelegationsRequestProtoMsg): _102.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _102.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorUnbondingDelegationsRequest): _102.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_102.QueryValidatorUnbondingDelegationsResponse>): _102.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _102.QueryValidatorUnbondingDelegationsResponseAmino): _102.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _102.QueryValidatorUnbondingDelegationsResponse): _102.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorUnbondingDelegationsResponseAminoMsg): _102.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _102.QueryValidatorUnbondingDelegationsResponse): _102.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorUnbondingDelegationsResponseProtoMsg): _102.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _102.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorUnbondingDelegationsResponse): _102.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegationRequest;
                fromPartial(object: Partial<_102.QueryDelegationRequest>): _102.QueryDelegationRequest;
                fromAmino(object: _102.QueryDelegationRequestAmino): _102.QueryDelegationRequest;
                toAmino(message: _102.QueryDelegationRequest): _102.QueryDelegationRequestAmino;
                fromAminoMsg(object: _102.QueryDelegationRequestAminoMsg): _102.QueryDelegationRequest;
                toAminoMsg(message: _102.QueryDelegationRequest): _102.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegationRequestProtoMsg): _102.QueryDelegationRequest;
                toProto(message: _102.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegationRequest): _102.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegationResponse;
                fromPartial(object: Partial<_102.QueryDelegationResponse>): _102.QueryDelegationResponse;
                fromAmino(object: _102.QueryDelegationResponseAmino): _102.QueryDelegationResponse;
                toAmino(message: _102.QueryDelegationResponse): _102.QueryDelegationResponseAmino;
                fromAminoMsg(object: _102.QueryDelegationResponseAminoMsg): _102.QueryDelegationResponse;
                toAminoMsg(message: _102.QueryDelegationResponse): _102.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegationResponseProtoMsg): _102.QueryDelegationResponse;
                toProto(message: _102.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegationResponse): _102.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _102.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_102.QueryUnbondingDelegationRequest>): _102.QueryUnbondingDelegationRequest;
                fromAmino(object: _102.QueryUnbondingDelegationRequestAmino): _102.QueryUnbondingDelegationRequest;
                toAmino(message: _102.QueryUnbondingDelegationRequest): _102.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _102.QueryUnbondingDelegationRequestAminoMsg): _102.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _102.QueryUnbondingDelegationRequest): _102.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _102.QueryUnbondingDelegationRequestProtoMsg): _102.QueryUnbondingDelegationRequest;
                toProto(message: _102.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _102.QueryUnbondingDelegationRequest): _102.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _102.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_102.QueryUnbondingDelegationResponse>): _102.QueryUnbondingDelegationResponse;
                fromAmino(object: _102.QueryUnbondingDelegationResponseAmino): _102.QueryUnbondingDelegationResponse;
                toAmino(message: _102.QueryUnbondingDelegationResponse): _102.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _102.QueryUnbondingDelegationResponseAminoMsg): _102.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _102.QueryUnbondingDelegationResponse): _102.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _102.QueryUnbondingDelegationResponseProtoMsg): _102.QueryUnbondingDelegationResponse;
                toProto(message: _102.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _102.QueryUnbondingDelegationResponse): _102.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_102.QueryDelegatorDelegationsRequest>): _102.QueryDelegatorDelegationsRequest;
                fromAmino(object: _102.QueryDelegatorDelegationsRequestAmino): _102.QueryDelegatorDelegationsRequest;
                toAmino(message: _102.QueryDelegatorDelegationsRequest): _102.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _102.QueryDelegatorDelegationsRequestAminoMsg): _102.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _102.QueryDelegatorDelegationsRequest): _102.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorDelegationsRequestProtoMsg): _102.QueryDelegatorDelegationsRequest;
                toProto(message: _102.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorDelegationsRequest): _102.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_102.QueryDelegatorDelegationsResponse>): _102.QueryDelegatorDelegationsResponse;
                fromAmino(object: _102.QueryDelegatorDelegationsResponseAmino): _102.QueryDelegatorDelegationsResponse;
                toAmino(message: _102.QueryDelegatorDelegationsResponse): _102.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _102.QueryDelegatorDelegationsResponseAminoMsg): _102.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _102.QueryDelegatorDelegationsResponse): _102.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorDelegationsResponseProtoMsg): _102.QueryDelegatorDelegationsResponse;
                toProto(message: _102.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorDelegationsResponse): _102.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_102.QueryDelegatorUnbondingDelegationsRequest>): _102.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _102.QueryDelegatorUnbondingDelegationsRequestAmino): _102.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _102.QueryDelegatorUnbondingDelegationsRequest): _102.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _102.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _102.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _102.QueryDelegatorUnbondingDelegationsRequest): _102.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _102.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _102.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorUnbondingDelegationsRequest): _102.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_102.QueryDelegatorUnbondingDelegationsResponse>): _102.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _102.QueryDelegatorUnbondingDelegationsResponseAmino): _102.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _102.QueryDelegatorUnbondingDelegationsResponse): _102.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _102.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _102.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _102.QueryDelegatorUnbondingDelegationsResponse): _102.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _102.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _102.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorUnbondingDelegationsResponse): _102.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _102.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryRedelegationsRequest;
                fromPartial(object: Partial<_102.QueryRedelegationsRequest>): _102.QueryRedelegationsRequest;
                fromAmino(object: _102.QueryRedelegationsRequestAmino): _102.QueryRedelegationsRequest;
                toAmino(message: _102.QueryRedelegationsRequest): _102.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _102.QueryRedelegationsRequestAminoMsg): _102.QueryRedelegationsRequest;
                toAminoMsg(message: _102.QueryRedelegationsRequest): _102.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryRedelegationsRequestProtoMsg): _102.QueryRedelegationsRequest;
                toProto(message: _102.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryRedelegationsRequest): _102.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _102.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryRedelegationsResponse;
                fromPartial(object: Partial<_102.QueryRedelegationsResponse>): _102.QueryRedelegationsResponse;
                fromAmino(object: _102.QueryRedelegationsResponseAmino): _102.QueryRedelegationsResponse;
                toAmino(message: _102.QueryRedelegationsResponse): _102.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _102.QueryRedelegationsResponseAminoMsg): _102.QueryRedelegationsResponse;
                toAminoMsg(message: _102.QueryRedelegationsResponse): _102.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryRedelegationsResponseProtoMsg): _102.QueryRedelegationsResponse;
                toProto(message: _102.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryRedelegationsResponse): _102.QueryRedelegationsResponseProtoMsg;
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
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorRequest>): _102.QueryDelegatorValidatorRequest;
                fromAmino(object: _102.QueryDelegatorValidatorRequestAmino): _102.QueryDelegatorValidatorRequest;
                toAmino(message: _102.QueryDelegatorValidatorRequest): _102.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _102.QueryDelegatorValidatorRequestAminoMsg): _102.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _102.QueryDelegatorValidatorRequest): _102.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorValidatorRequestProtoMsg): _102.QueryDelegatorValidatorRequest;
                toProto(message: _102.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorValidatorRequest): _102.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorResponse>): _102.QueryDelegatorValidatorResponse;
                fromAmino(object: _102.QueryDelegatorValidatorResponseAmino): _102.QueryDelegatorValidatorResponse;
                toAmino(message: _102.QueryDelegatorValidatorResponse): _102.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _102.QueryDelegatorValidatorResponseAminoMsg): _102.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _102.QueryDelegatorValidatorResponse): _102.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorValidatorResponseProtoMsg): _102.QueryDelegatorValidatorResponse;
                toProto(message: _102.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorValidatorResponse): _102.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _102.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_102.QueryHistoricalInfoRequest>): _102.QueryHistoricalInfoRequest;
                fromAmino(object: _102.QueryHistoricalInfoRequestAmino): _102.QueryHistoricalInfoRequest;
                toAmino(message: _102.QueryHistoricalInfoRequest): _102.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _102.QueryHistoricalInfoRequestAminoMsg): _102.QueryHistoricalInfoRequest;
                toAminoMsg(message: _102.QueryHistoricalInfoRequest): _102.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _102.QueryHistoricalInfoRequestProtoMsg): _102.QueryHistoricalInfoRequest;
                toProto(message: _102.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _102.QueryHistoricalInfoRequest): _102.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _102.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_102.QueryHistoricalInfoResponse>): _102.QueryHistoricalInfoResponse;
                fromAmino(object: _102.QueryHistoricalInfoResponseAmino): _102.QueryHistoricalInfoResponse;
                toAmino(message: _102.QueryHistoricalInfoResponse): _102.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _102.QueryHistoricalInfoResponseAminoMsg): _102.QueryHistoricalInfoResponse;
                toAminoMsg(message: _102.QueryHistoricalInfoResponse): _102.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _102.QueryHistoricalInfoResponseProtoMsg): _102.QueryHistoricalInfoResponse;
                toProto(message: _102.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _102.QueryHistoricalInfoResponse): _102.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _102.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _102.QueryPoolRequest;
                fromPartial(_: Partial<_102.QueryPoolRequest>): _102.QueryPoolRequest;
                fromAmino(_: _102.QueryPoolRequestAmino): _102.QueryPoolRequest;
                toAmino(_: _102.QueryPoolRequest): _102.QueryPoolRequestAmino;
                fromAminoMsg(object: _102.QueryPoolRequestAminoMsg): _102.QueryPoolRequest;
                toAminoMsg(message: _102.QueryPoolRequest): _102.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _102.QueryPoolRequestProtoMsg): _102.QueryPoolRequest;
                toProto(message: _102.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _102.QueryPoolRequest): _102.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _102.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryPoolResponse;
                fromPartial(object: Partial<_102.QueryPoolResponse>): _102.QueryPoolResponse;
                fromAmino(object: _102.QueryPoolResponseAmino): _102.QueryPoolResponse;
                toAmino(message: _102.QueryPoolResponse): _102.QueryPoolResponseAmino;
                fromAminoMsg(object: _102.QueryPoolResponseAminoMsg): _102.QueryPoolResponse;
                toAminoMsg(message: _102.QueryPoolResponse): _102.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _102.QueryPoolResponseProtoMsg): _102.QueryPoolResponse;
                toProto(message: _102.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _102.QueryPoolResponse): _102.QueryPoolResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _101.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.LastValidatorPower;
                fromPartial(object: Partial<_101.LastValidatorPower>): _101.LastValidatorPower;
                fromAmino(object: _101.LastValidatorPowerAmino): _101.LastValidatorPower;
                toAmino(message: _101.LastValidatorPower): _101.LastValidatorPowerAmino;
                fromAminoMsg(object: _101.LastValidatorPowerAminoMsg): _101.LastValidatorPower;
                toAminoMsg(message: _101.LastValidatorPower): _101.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _101.LastValidatorPowerProtoMsg): _101.LastValidatorPower;
                toProto(message: _101.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _101.LastValidatorPower): _101.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _100.AuthorizationType;
            authorizationTypeToJSON(object: _100.AuthorizationType): string;
            AuthorizationType: typeof _100.AuthorizationType;
            AuthorizationTypeSDKType: typeof _100.AuthorizationType;
            AuthorizationTypeAmino: typeof _100.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _100.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.StakeAuthorization;
                fromPartial(object: Partial<_100.StakeAuthorization>): _100.StakeAuthorization;
                fromAmino(object: _100.StakeAuthorizationAmino): _100.StakeAuthorization;
                toAmino(message: _100.StakeAuthorization): _100.StakeAuthorizationAmino;
                fromAminoMsg(object: _100.StakeAuthorizationAminoMsg): _100.StakeAuthorization;
                toAminoMsg(message: _100.StakeAuthorization): _100.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _100.StakeAuthorizationProtoMsg): _100.StakeAuthorization;
                toProto(message: _100.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _100.StakeAuthorization): _100.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _100.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.StakeAuthorization_Validators;
                fromPartial(object: Partial<_100.StakeAuthorization_Validators>): _100.StakeAuthorization_Validators;
                fromAmino(object: _100.StakeAuthorization_ValidatorsAmino): _100.StakeAuthorization_Validators;
                toAmino(message: _100.StakeAuthorization_Validators): _100.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _100.StakeAuthorization_ValidatorsAminoMsg): _100.StakeAuthorization_Validators;
                toAminoMsg(message: _100.StakeAuthorization_Validators): _100.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _100.StakeAuthorization_ValidatorsProtoMsg): _100.StakeAuthorization_Validators;
                toProto(message: _100.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _100.StakeAuthorization_Validators): _100.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _105.SignMode;
                signModeToJSON(object: _105.SignMode): string;
                SignMode: typeof _105.SignMode;
                SignModeSDKType: typeof _105.SignMode;
                SignModeAmino: typeof _105.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _105.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.SignatureDescriptors;
                    fromPartial(object: Partial<_105.SignatureDescriptors>): _105.SignatureDescriptors;
                    fromAmino(object: _105.SignatureDescriptorsAmino): _105.SignatureDescriptors;
                    toAmino(message: _105.SignatureDescriptors): _105.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _105.SignatureDescriptorsAminoMsg): _105.SignatureDescriptors;
                    toAminoMsg(message: _105.SignatureDescriptors): _105.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _105.SignatureDescriptorsProtoMsg): _105.SignatureDescriptors;
                    toProto(message: _105.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _105.SignatureDescriptors): _105.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _105.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.SignatureDescriptor;
                    fromPartial(object: Partial<_105.SignatureDescriptor>): _105.SignatureDescriptor;
                    fromAmino(object: _105.SignatureDescriptorAmino): _105.SignatureDescriptor;
                    toAmino(message: _105.SignatureDescriptor): _105.SignatureDescriptorAmino;
                    fromAminoMsg(object: _105.SignatureDescriptorAminoMsg): _105.SignatureDescriptor;
                    toAminoMsg(message: _105.SignatureDescriptor): _105.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _105.SignatureDescriptorProtoMsg): _105.SignatureDescriptor;
                    toProto(message: _105.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _105.SignatureDescriptor): _105.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _105.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_105.SignatureDescriptor_Data>): _105.SignatureDescriptor_Data;
                    fromAmino(object: _105.SignatureDescriptor_DataAmino): _105.SignatureDescriptor_Data;
                    toAmino(message: _105.SignatureDescriptor_Data): _105.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _105.SignatureDescriptor_DataAminoMsg): _105.SignatureDescriptor_Data;
                    toAminoMsg(message: _105.SignatureDescriptor_Data): _105.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _105.SignatureDescriptor_DataProtoMsg): _105.SignatureDescriptor_Data;
                    toProto(message: _105.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _105.SignatureDescriptor_Data): _105.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _105.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_105.SignatureDescriptor_Data_Single>): _105.SignatureDescriptor_Data_Single;
                    fromAmino(object: _105.SignatureDescriptor_Data_SingleAmino): _105.SignatureDescriptor_Data_Single;
                    toAmino(message: _105.SignatureDescriptor_Data_Single): _105.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _105.SignatureDescriptor_Data_SingleAminoMsg): _105.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _105.SignatureDescriptor_Data_Single): _105.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _105.SignatureDescriptor_Data_SingleProtoMsg): _105.SignatureDescriptor_Data_Single;
                    toProto(message: _105.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _105.SignatureDescriptor_Data_Single): _105.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _105.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_105.SignatureDescriptor_Data_Multi>): _105.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _105.SignatureDescriptor_Data_MultiAmino): _105.SignatureDescriptor_Data_Multi;
                    toAmino(message: _105.SignatureDescriptor_Data_Multi): _105.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _105.SignatureDescriptor_Data_MultiAminoMsg): _105.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _105.SignatureDescriptor_Data_Multi): _105.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _105.SignatureDescriptor_Data_MultiProtoMsg): _105.SignatureDescriptor_Data_Multi;
                    toProto(message: _105.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _105.SignatureDescriptor_Data_Multi): _105.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _250.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _106.SimulateRequest): Promise<_106.SimulateResponse>;
                getTx(request: _106.GetTxRequest): Promise<_106.GetTxResponse>;
                broadcastTx(request: _106.BroadcastTxRequest): Promise<_106.BroadcastTxResponse>;
                getTxsEvent(request: _106.GetTxsEventRequest): Promise<_106.GetTxsEventResponse>;
                getBlockWithTxs(request: _106.GetBlockWithTxsRequest): Promise<_106.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _231.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _107.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.Tx;
                fromPartial(object: Partial<_107.Tx>): _107.Tx;
                fromAmino(object: _107.TxAmino): _107.Tx;
                toAmino(message: _107.Tx): _107.TxAmino;
                fromAminoMsg(object: _107.TxAminoMsg): _107.Tx;
                toAminoMsg(message: _107.Tx): _107.TxAminoMsg;
                fromProtoMsg(message: _107.TxProtoMsg): _107.Tx;
                toProto(message: _107.Tx): Uint8Array;
                toProtoMsg(message: _107.Tx): _107.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _107.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.TxRaw;
                fromPartial(object: Partial<_107.TxRaw>): _107.TxRaw;
                fromAmino(object: _107.TxRawAmino): _107.TxRaw;
                toAmino(message: _107.TxRaw): _107.TxRawAmino;
                fromAminoMsg(object: _107.TxRawAminoMsg): _107.TxRaw;
                toAminoMsg(message: _107.TxRaw): _107.TxRawAminoMsg;
                fromProtoMsg(message: _107.TxRawProtoMsg): _107.TxRaw;
                toProto(message: _107.TxRaw): Uint8Array;
                toProtoMsg(message: _107.TxRaw): _107.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _107.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.SignDoc;
                fromPartial(object: Partial<_107.SignDoc>): _107.SignDoc;
                fromAmino(object: _107.SignDocAmino): _107.SignDoc;
                toAmino(message: _107.SignDoc): _107.SignDocAmino;
                fromAminoMsg(object: _107.SignDocAminoMsg): _107.SignDoc;
                toAminoMsg(message: _107.SignDoc): _107.SignDocAminoMsg;
                fromProtoMsg(message: _107.SignDocProtoMsg): _107.SignDoc;
                toProto(message: _107.SignDoc): Uint8Array;
                toProtoMsg(message: _107.SignDoc): _107.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _107.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.SignDocDirectAux;
                fromPartial(object: Partial<_107.SignDocDirectAux>): _107.SignDocDirectAux;
                fromAmino(object: _107.SignDocDirectAuxAmino): _107.SignDocDirectAux;
                toAmino(message: _107.SignDocDirectAux): _107.SignDocDirectAuxAmino;
                fromAminoMsg(object: _107.SignDocDirectAuxAminoMsg): _107.SignDocDirectAux;
                toAminoMsg(message: _107.SignDocDirectAux): _107.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _107.SignDocDirectAuxProtoMsg): _107.SignDocDirectAux;
                toProto(message: _107.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _107.SignDocDirectAux): _107.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _107.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.TxBody;
                fromPartial(object: Partial<_107.TxBody>): _107.TxBody;
                fromAmino(object: _107.TxBodyAmino): _107.TxBody;
                toAmino(message: _107.TxBody): _107.TxBodyAmino;
                fromAminoMsg(object: _107.TxBodyAminoMsg): _107.TxBody;
                toAminoMsg(message: _107.TxBody): _107.TxBodyAminoMsg;
                fromProtoMsg(message: _107.TxBodyProtoMsg): _107.TxBody;
                toProto(message: _107.TxBody): Uint8Array;
                toProtoMsg(message: _107.TxBody): _107.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _107.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.AuthInfo;
                fromPartial(object: Partial<_107.AuthInfo>): _107.AuthInfo;
                fromAmino(object: _107.AuthInfoAmino): _107.AuthInfo;
                toAmino(message: _107.AuthInfo): _107.AuthInfoAmino;
                fromAminoMsg(object: _107.AuthInfoAminoMsg): _107.AuthInfo;
                toAminoMsg(message: _107.AuthInfo): _107.AuthInfoAminoMsg;
                fromProtoMsg(message: _107.AuthInfoProtoMsg): _107.AuthInfo;
                toProto(message: _107.AuthInfo): Uint8Array;
                toProtoMsg(message: _107.AuthInfo): _107.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _107.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.SignerInfo;
                fromPartial(object: Partial<_107.SignerInfo>): _107.SignerInfo;
                fromAmino(object: _107.SignerInfoAmino): _107.SignerInfo;
                toAmino(message: _107.SignerInfo): _107.SignerInfoAmino;
                fromAminoMsg(object: _107.SignerInfoAminoMsg): _107.SignerInfo;
                toAminoMsg(message: _107.SignerInfo): _107.SignerInfoAminoMsg;
                fromProtoMsg(message: _107.SignerInfoProtoMsg): _107.SignerInfo;
                toProto(message: _107.SignerInfo): Uint8Array;
                toProtoMsg(message: _107.SignerInfo): _107.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _107.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.ModeInfo;
                fromPartial(object: Partial<_107.ModeInfo>): _107.ModeInfo;
                fromAmino(object: _107.ModeInfoAmino): _107.ModeInfo;
                toAmino(message: _107.ModeInfo): _107.ModeInfoAmino;
                fromAminoMsg(object: _107.ModeInfoAminoMsg): _107.ModeInfo;
                toAminoMsg(message: _107.ModeInfo): _107.ModeInfoAminoMsg;
                fromProtoMsg(message: _107.ModeInfoProtoMsg): _107.ModeInfo;
                toProto(message: _107.ModeInfo): Uint8Array;
                toProtoMsg(message: _107.ModeInfo): _107.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _107.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.ModeInfo_Single;
                fromPartial(object: Partial<_107.ModeInfo_Single>): _107.ModeInfo_Single;
                fromAmino(object: _107.ModeInfo_SingleAmino): _107.ModeInfo_Single;
                toAmino(message: _107.ModeInfo_Single): _107.ModeInfo_SingleAmino;
                fromAminoMsg(object: _107.ModeInfo_SingleAminoMsg): _107.ModeInfo_Single;
                toAminoMsg(message: _107.ModeInfo_Single): _107.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _107.ModeInfo_SingleProtoMsg): _107.ModeInfo_Single;
                toProto(message: _107.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _107.ModeInfo_Single): _107.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _107.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.ModeInfo_Multi;
                fromPartial(object: Partial<_107.ModeInfo_Multi>): _107.ModeInfo_Multi;
                fromAmino(object: _107.ModeInfo_MultiAmino): _107.ModeInfo_Multi;
                toAmino(message: _107.ModeInfo_Multi): _107.ModeInfo_MultiAmino;
                fromAminoMsg(object: _107.ModeInfo_MultiAminoMsg): _107.ModeInfo_Multi;
                toAminoMsg(message: _107.ModeInfo_Multi): _107.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _107.ModeInfo_MultiProtoMsg): _107.ModeInfo_Multi;
                toProto(message: _107.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _107.ModeInfo_Multi): _107.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _107.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.Fee;
                fromPartial(object: Partial<_107.Fee>): _107.Fee;
                fromAmino(object: _107.FeeAmino): _107.Fee;
                toAmino(message: _107.Fee): _107.FeeAmino;
                fromAminoMsg(object: _107.FeeAminoMsg): _107.Fee;
                toAminoMsg(message: _107.Fee): _107.FeeAminoMsg;
                fromProtoMsg(message: _107.FeeProtoMsg): _107.Fee;
                toProto(message: _107.Fee): Uint8Array;
                toProtoMsg(message: _107.Fee): _107.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _107.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.Tip;
                fromPartial(object: Partial<_107.Tip>): _107.Tip;
                fromAmino(object: _107.TipAmino): _107.Tip;
                toAmino(message: _107.Tip): _107.TipAmino;
                fromAminoMsg(object: _107.TipAminoMsg): _107.Tip;
                toAminoMsg(message: _107.Tip): _107.TipAminoMsg;
                fromProtoMsg(message: _107.TipProtoMsg): _107.Tip;
                toProto(message: _107.Tip): Uint8Array;
                toProtoMsg(message: _107.Tip): _107.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _107.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.AuxSignerData;
                fromPartial(object: Partial<_107.AuxSignerData>): _107.AuxSignerData;
                fromAmino(object: _107.AuxSignerDataAmino): _107.AuxSignerData;
                toAmino(message: _107.AuxSignerData): _107.AuxSignerDataAmino;
                fromAminoMsg(object: _107.AuxSignerDataAminoMsg): _107.AuxSignerData;
                toAminoMsg(message: _107.AuxSignerData): _107.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _107.AuxSignerDataProtoMsg): _107.AuxSignerData;
                toProto(message: _107.AuxSignerData): Uint8Array;
                toProtoMsg(message: _107.AuxSignerData): _107.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _106.OrderBy;
            orderByToJSON(object: _106.OrderBy): string;
            broadcastModeFromJSON(object: any): _106.BroadcastMode;
            broadcastModeToJSON(object: _106.BroadcastMode): string;
            OrderBy: typeof _106.OrderBy;
            OrderBySDKType: typeof _106.OrderBy;
            OrderByAmino: typeof _106.OrderBy;
            BroadcastMode: typeof _106.BroadcastMode;
            BroadcastModeSDKType: typeof _106.BroadcastMode;
            BroadcastModeAmino: typeof _106.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _106.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GetTxsEventRequest;
                fromPartial(object: Partial<_106.GetTxsEventRequest>): _106.GetTxsEventRequest;
                fromAmino(object: _106.GetTxsEventRequestAmino): _106.GetTxsEventRequest;
                toAmino(message: _106.GetTxsEventRequest): _106.GetTxsEventRequestAmino;
                fromAminoMsg(object: _106.GetTxsEventRequestAminoMsg): _106.GetTxsEventRequest;
                toAminoMsg(message: _106.GetTxsEventRequest): _106.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _106.GetTxsEventRequestProtoMsg): _106.GetTxsEventRequest;
                toProto(message: _106.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _106.GetTxsEventRequest): _106.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _106.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GetTxsEventResponse;
                fromPartial(object: Partial<_106.GetTxsEventResponse>): _106.GetTxsEventResponse;
                fromAmino(object: _106.GetTxsEventResponseAmino): _106.GetTxsEventResponse;
                toAmino(message: _106.GetTxsEventResponse): _106.GetTxsEventResponseAmino;
                fromAminoMsg(object: _106.GetTxsEventResponseAminoMsg): _106.GetTxsEventResponse;
                toAminoMsg(message: _106.GetTxsEventResponse): _106.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _106.GetTxsEventResponseProtoMsg): _106.GetTxsEventResponse;
                toProto(message: _106.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _106.GetTxsEventResponse): _106.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _106.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.BroadcastTxRequest;
                fromPartial(object: Partial<_106.BroadcastTxRequest>): _106.BroadcastTxRequest;
                fromAmino(object: _106.BroadcastTxRequestAmino): _106.BroadcastTxRequest;
                toAmino(message: _106.BroadcastTxRequest): _106.BroadcastTxRequestAmino;
                fromAminoMsg(object: _106.BroadcastTxRequestAminoMsg): _106.BroadcastTxRequest;
                toAminoMsg(message: _106.BroadcastTxRequest): _106.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _106.BroadcastTxRequestProtoMsg): _106.BroadcastTxRequest;
                toProto(message: _106.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _106.BroadcastTxRequest): _106.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _106.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.BroadcastTxResponse;
                fromPartial(object: Partial<_106.BroadcastTxResponse>): _106.BroadcastTxResponse;
                fromAmino(object: _106.BroadcastTxResponseAmino): _106.BroadcastTxResponse;
                toAmino(message: _106.BroadcastTxResponse): _106.BroadcastTxResponseAmino;
                fromAminoMsg(object: _106.BroadcastTxResponseAminoMsg): _106.BroadcastTxResponse;
                toAminoMsg(message: _106.BroadcastTxResponse): _106.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _106.BroadcastTxResponseProtoMsg): _106.BroadcastTxResponse;
                toProto(message: _106.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _106.BroadcastTxResponse): _106.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _106.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.SimulateRequest;
                fromPartial(object: Partial<_106.SimulateRequest>): _106.SimulateRequest;
                fromAmino(object: _106.SimulateRequestAmino): _106.SimulateRequest;
                toAmino(message: _106.SimulateRequest): _106.SimulateRequestAmino;
                fromAminoMsg(object: _106.SimulateRequestAminoMsg): _106.SimulateRequest;
                toAminoMsg(message: _106.SimulateRequest): _106.SimulateRequestAminoMsg;
                fromProtoMsg(message: _106.SimulateRequestProtoMsg): _106.SimulateRequest;
                toProto(message: _106.SimulateRequest): Uint8Array;
                toProtoMsg(message: _106.SimulateRequest): _106.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _106.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.SimulateResponse;
                fromPartial(object: Partial<_106.SimulateResponse>): _106.SimulateResponse;
                fromAmino(object: _106.SimulateResponseAmino): _106.SimulateResponse;
                toAmino(message: _106.SimulateResponse): _106.SimulateResponseAmino;
                fromAminoMsg(object: _106.SimulateResponseAminoMsg): _106.SimulateResponse;
                toAminoMsg(message: _106.SimulateResponse): _106.SimulateResponseAminoMsg;
                fromProtoMsg(message: _106.SimulateResponseProtoMsg): _106.SimulateResponse;
                toProto(message: _106.SimulateResponse): Uint8Array;
                toProtoMsg(message: _106.SimulateResponse): _106.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _106.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GetTxRequest;
                fromPartial(object: Partial<_106.GetTxRequest>): _106.GetTxRequest;
                fromAmino(object: _106.GetTxRequestAmino): _106.GetTxRequest;
                toAmino(message: _106.GetTxRequest): _106.GetTxRequestAmino;
                fromAminoMsg(object: _106.GetTxRequestAminoMsg): _106.GetTxRequest;
                toAminoMsg(message: _106.GetTxRequest): _106.GetTxRequestAminoMsg;
                fromProtoMsg(message: _106.GetTxRequestProtoMsg): _106.GetTxRequest;
                toProto(message: _106.GetTxRequest): Uint8Array;
                toProtoMsg(message: _106.GetTxRequest): _106.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _106.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GetTxResponse;
                fromPartial(object: Partial<_106.GetTxResponse>): _106.GetTxResponse;
                fromAmino(object: _106.GetTxResponseAmino): _106.GetTxResponse;
                toAmino(message: _106.GetTxResponse): _106.GetTxResponseAmino;
                fromAminoMsg(object: _106.GetTxResponseAminoMsg): _106.GetTxResponse;
                toAminoMsg(message: _106.GetTxResponse): _106.GetTxResponseAminoMsg;
                fromProtoMsg(message: _106.GetTxResponseProtoMsg): _106.GetTxResponse;
                toProto(message: _106.GetTxResponse): Uint8Array;
                toProtoMsg(message: _106.GetTxResponse): _106.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _106.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_106.GetBlockWithTxsRequest>): _106.GetBlockWithTxsRequest;
                fromAmino(object: _106.GetBlockWithTxsRequestAmino): _106.GetBlockWithTxsRequest;
                toAmino(message: _106.GetBlockWithTxsRequest): _106.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _106.GetBlockWithTxsRequestAminoMsg): _106.GetBlockWithTxsRequest;
                toAminoMsg(message: _106.GetBlockWithTxsRequest): _106.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _106.GetBlockWithTxsRequestProtoMsg): _106.GetBlockWithTxsRequest;
                toProto(message: _106.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _106.GetBlockWithTxsRequest): _106.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _106.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_106.GetBlockWithTxsResponse>): _106.GetBlockWithTxsResponse;
                fromAmino(object: _106.GetBlockWithTxsResponseAmino): _106.GetBlockWithTxsResponse;
                toAmino(message: _106.GetBlockWithTxsResponse): _106.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _106.GetBlockWithTxsResponseAminoMsg): _106.GetBlockWithTxsResponse;
                toAminoMsg(message: _106.GetBlockWithTxsResponse): _106.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _106.GetBlockWithTxsResponseProtoMsg): _106.GetBlockWithTxsResponse;
                toProto(message: _106.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _106.GetBlockWithTxsResponse): _106.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _264.MsgClientImpl;
            QueryClientImpl: typeof _251.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _108.QueryCurrentPlanRequest): Promise<_108.QueryCurrentPlanResponse>;
                appliedPlan(request: _108.QueryAppliedPlanRequest): Promise<_108.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _108.QueryUpgradedConsensusStateRequest): Promise<_108.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _108.QueryModuleVersionsRequest): Promise<_108.QueryModuleVersionsResponse>;
                authority(request?: _108.QueryAuthorityRequest): Promise<_108.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _232.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _109.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _109.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _109.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _109.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _109.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _109.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _109.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _109.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _109.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _109.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _109.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _109.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _109.MsgSoftwareUpgrade) => _109.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _109.MsgSoftwareUpgradeAmino) => _109.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _109.MsgCancelUpgrade) => _109.MsgCancelUpgradeAmino;
                    fromAmino: (object: _109.MsgCancelUpgradeAmino) => _109.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _110.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Plan;
                fromPartial(object: Partial<_110.Plan>): _110.Plan;
                fromAmino(object: _110.PlanAmino): _110.Plan;
                toAmino(message: _110.Plan): _110.PlanAmino;
                fromAminoMsg(object: _110.PlanAminoMsg): _110.Plan;
                toAminoMsg(message: _110.Plan): _110.PlanAminoMsg;
                fromProtoMsg(message: _110.PlanProtoMsg): _110.Plan;
                toProto(message: _110.Plan): Uint8Array;
                toProtoMsg(message: _110.Plan): _110.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _110.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_110.SoftwareUpgradeProposal>): _110.SoftwareUpgradeProposal;
                fromAmino(object: _110.SoftwareUpgradeProposalAmino): _110.SoftwareUpgradeProposal;
                toAmino(message: _110.SoftwareUpgradeProposal): _110.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _110.SoftwareUpgradeProposalAminoMsg): _110.SoftwareUpgradeProposal;
                toAminoMsg(message: _110.SoftwareUpgradeProposal): _110.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _110.SoftwareUpgradeProposalProtoMsg): _110.SoftwareUpgradeProposal;
                toProto(message: _110.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _110.SoftwareUpgradeProposal): _110.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _110.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_110.CancelSoftwareUpgradeProposal>): _110.CancelSoftwareUpgradeProposal;
                fromAmino(object: _110.CancelSoftwareUpgradeProposalAmino): _110.CancelSoftwareUpgradeProposal;
                toAmino(message: _110.CancelSoftwareUpgradeProposal): _110.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _110.CancelSoftwareUpgradeProposalAminoMsg): _110.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _110.CancelSoftwareUpgradeProposal): _110.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _110.CancelSoftwareUpgradeProposalProtoMsg): _110.CancelSoftwareUpgradeProposal;
                toProto(message: _110.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _110.CancelSoftwareUpgradeProposal): _110.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _110.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.ModuleVersion;
                fromPartial(object: Partial<_110.ModuleVersion>): _110.ModuleVersion;
                fromAmino(object: _110.ModuleVersionAmino): _110.ModuleVersion;
                toAmino(message: _110.ModuleVersion): _110.ModuleVersionAmino;
                fromAminoMsg(object: _110.ModuleVersionAminoMsg): _110.ModuleVersion;
                toAminoMsg(message: _110.ModuleVersion): _110.ModuleVersionAminoMsg;
                fromProtoMsg(message: _110.ModuleVersionProtoMsg): _110.ModuleVersion;
                toProto(message: _110.ModuleVersion): Uint8Array;
                toProtoMsg(message: _110.ModuleVersion): _110.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _109.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_109.MsgSoftwareUpgrade>): _109.MsgSoftwareUpgrade;
                fromAmino(object: _109.MsgSoftwareUpgradeAmino): _109.MsgSoftwareUpgrade;
                toAmino(message: _109.MsgSoftwareUpgrade): _109.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _109.MsgSoftwareUpgradeAminoMsg): _109.MsgSoftwareUpgrade;
                toAminoMsg(message: _109.MsgSoftwareUpgrade): _109.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _109.MsgSoftwareUpgradeProtoMsg): _109.MsgSoftwareUpgrade;
                toProto(message: _109.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _109.MsgSoftwareUpgrade): _109.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _109.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_109.MsgSoftwareUpgradeResponse>): _109.MsgSoftwareUpgradeResponse;
                fromAmino(_: _109.MsgSoftwareUpgradeResponseAmino): _109.MsgSoftwareUpgradeResponse;
                toAmino(_: _109.MsgSoftwareUpgradeResponse): _109.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _109.MsgSoftwareUpgradeResponseAminoMsg): _109.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _109.MsgSoftwareUpgradeResponse): _109.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _109.MsgSoftwareUpgradeResponseProtoMsg): _109.MsgSoftwareUpgradeResponse;
                toProto(message: _109.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _109.MsgSoftwareUpgradeResponse): _109.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _109.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgCancelUpgrade;
                fromPartial(object: Partial<_109.MsgCancelUpgrade>): _109.MsgCancelUpgrade;
                fromAmino(object: _109.MsgCancelUpgradeAmino): _109.MsgCancelUpgrade;
                toAmino(message: _109.MsgCancelUpgrade): _109.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _109.MsgCancelUpgradeAminoMsg): _109.MsgCancelUpgrade;
                toAminoMsg(message: _109.MsgCancelUpgrade): _109.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _109.MsgCancelUpgradeProtoMsg): _109.MsgCancelUpgrade;
                toProto(message: _109.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _109.MsgCancelUpgrade): _109.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _109.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_109.MsgCancelUpgradeResponse>): _109.MsgCancelUpgradeResponse;
                fromAmino(_: _109.MsgCancelUpgradeResponseAmino): _109.MsgCancelUpgradeResponse;
                toAmino(_: _109.MsgCancelUpgradeResponse): _109.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _109.MsgCancelUpgradeResponseAminoMsg): _109.MsgCancelUpgradeResponse;
                toAminoMsg(message: _109.MsgCancelUpgradeResponse): _109.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _109.MsgCancelUpgradeResponseProtoMsg): _109.MsgCancelUpgradeResponse;
                toProto(message: _109.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _109.MsgCancelUpgradeResponse): _109.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _108.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_108.QueryCurrentPlanRequest>): _108.QueryCurrentPlanRequest;
                fromAmino(_: _108.QueryCurrentPlanRequestAmino): _108.QueryCurrentPlanRequest;
                toAmino(_: _108.QueryCurrentPlanRequest): _108.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _108.QueryCurrentPlanRequestAminoMsg): _108.QueryCurrentPlanRequest;
                toAminoMsg(message: _108.QueryCurrentPlanRequest): _108.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _108.QueryCurrentPlanRequestProtoMsg): _108.QueryCurrentPlanRequest;
                toProto(message: _108.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _108.QueryCurrentPlanRequest): _108.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _108.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_108.QueryCurrentPlanResponse>): _108.QueryCurrentPlanResponse;
                fromAmino(object: _108.QueryCurrentPlanResponseAmino): _108.QueryCurrentPlanResponse;
                toAmino(message: _108.QueryCurrentPlanResponse): _108.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _108.QueryCurrentPlanResponseAminoMsg): _108.QueryCurrentPlanResponse;
                toAminoMsg(message: _108.QueryCurrentPlanResponse): _108.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _108.QueryCurrentPlanResponseProtoMsg): _108.QueryCurrentPlanResponse;
                toProto(message: _108.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _108.QueryCurrentPlanResponse): _108.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _108.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_108.QueryAppliedPlanRequest>): _108.QueryAppliedPlanRequest;
                fromAmino(object: _108.QueryAppliedPlanRequestAmino): _108.QueryAppliedPlanRequest;
                toAmino(message: _108.QueryAppliedPlanRequest): _108.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _108.QueryAppliedPlanRequestAminoMsg): _108.QueryAppliedPlanRequest;
                toAminoMsg(message: _108.QueryAppliedPlanRequest): _108.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _108.QueryAppliedPlanRequestProtoMsg): _108.QueryAppliedPlanRequest;
                toProto(message: _108.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _108.QueryAppliedPlanRequest): _108.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _108.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_108.QueryAppliedPlanResponse>): _108.QueryAppliedPlanResponse;
                fromAmino(object: _108.QueryAppliedPlanResponseAmino): _108.QueryAppliedPlanResponse;
                toAmino(message: _108.QueryAppliedPlanResponse): _108.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _108.QueryAppliedPlanResponseAminoMsg): _108.QueryAppliedPlanResponse;
                toAminoMsg(message: _108.QueryAppliedPlanResponse): _108.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _108.QueryAppliedPlanResponseProtoMsg): _108.QueryAppliedPlanResponse;
                toProto(message: _108.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _108.QueryAppliedPlanResponse): _108.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _108.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_108.QueryUpgradedConsensusStateRequest>): _108.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _108.QueryUpgradedConsensusStateRequestAmino): _108.QueryUpgradedConsensusStateRequest;
                toAmino(message: _108.QueryUpgradedConsensusStateRequest): _108.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _108.QueryUpgradedConsensusStateRequestAminoMsg): _108.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _108.QueryUpgradedConsensusStateRequest): _108.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _108.QueryUpgradedConsensusStateRequestProtoMsg): _108.QueryUpgradedConsensusStateRequest;
                toProto(message: _108.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _108.QueryUpgradedConsensusStateRequest): _108.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _108.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_108.QueryUpgradedConsensusStateResponse>): _108.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _108.QueryUpgradedConsensusStateResponseAmino): _108.QueryUpgradedConsensusStateResponse;
                toAmino(message: _108.QueryUpgradedConsensusStateResponse): _108.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _108.QueryUpgradedConsensusStateResponseAminoMsg): _108.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _108.QueryUpgradedConsensusStateResponse): _108.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _108.QueryUpgradedConsensusStateResponseProtoMsg): _108.QueryUpgradedConsensusStateResponse;
                toProto(message: _108.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _108.QueryUpgradedConsensusStateResponse): _108.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _108.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_108.QueryModuleVersionsRequest>): _108.QueryModuleVersionsRequest;
                fromAmino(object: _108.QueryModuleVersionsRequestAmino): _108.QueryModuleVersionsRequest;
                toAmino(message: _108.QueryModuleVersionsRequest): _108.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _108.QueryModuleVersionsRequestAminoMsg): _108.QueryModuleVersionsRequest;
                toAminoMsg(message: _108.QueryModuleVersionsRequest): _108.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryModuleVersionsRequestProtoMsg): _108.QueryModuleVersionsRequest;
                toProto(message: _108.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryModuleVersionsRequest): _108.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _108.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_108.QueryModuleVersionsResponse>): _108.QueryModuleVersionsResponse;
                fromAmino(object: _108.QueryModuleVersionsResponseAmino): _108.QueryModuleVersionsResponse;
                toAmino(message: _108.QueryModuleVersionsResponse): _108.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _108.QueryModuleVersionsResponseAminoMsg): _108.QueryModuleVersionsResponse;
                toAminoMsg(message: _108.QueryModuleVersionsResponse): _108.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryModuleVersionsResponseProtoMsg): _108.QueryModuleVersionsResponse;
                toProto(message: _108.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryModuleVersionsResponse): _108.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _108.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.QueryAuthorityRequest;
                fromPartial(_: Partial<_108.QueryAuthorityRequest>): _108.QueryAuthorityRequest;
                fromAmino(_: _108.QueryAuthorityRequestAmino): _108.QueryAuthorityRequest;
                toAmino(_: _108.QueryAuthorityRequest): _108.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _108.QueryAuthorityRequestAminoMsg): _108.QueryAuthorityRequest;
                toAminoMsg(message: _108.QueryAuthorityRequest): _108.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _108.QueryAuthorityRequestProtoMsg): _108.QueryAuthorityRequest;
                toProto(message: _108.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _108.QueryAuthorityRequest): _108.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _108.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAuthorityResponse;
                fromPartial(object: Partial<_108.QueryAuthorityResponse>): _108.QueryAuthorityResponse;
                fromAmino(object: _108.QueryAuthorityResponseAmino): _108.QueryAuthorityResponse;
                toAmino(message: _108.QueryAuthorityResponse): _108.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _108.QueryAuthorityResponseAminoMsg): _108.QueryAuthorityResponse;
                toAminoMsg(message: _108.QueryAuthorityResponse): _108.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _108.QueryAuthorityResponseProtoMsg): _108.QueryAuthorityResponse;
                toProto(message: _108.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _108.QueryAuthorityResponse): _108.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _265.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _111.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _111.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _111.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _111.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _111.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _111.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _111.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _111.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _111.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _111.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _111.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _111.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _111.MsgCreateVestingAccount) => _111.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _111.MsgCreateVestingAccountAmino) => _111.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _111.MsgCreatePermanentLockedAccount) => _111.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _111.MsgCreatePermanentLockedAccountAmino) => _111.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _111.MsgCreatePeriodicVestingAccount) => _111.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _111.MsgCreatePeriodicVestingAccountAmino) => _111.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _112.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.BaseVestingAccount;
                fromPartial(object: Partial<_112.BaseVestingAccount>): _112.BaseVestingAccount;
                fromAmino(object: _112.BaseVestingAccountAmino): _112.BaseVestingAccount;
                toAmino(message: _112.BaseVestingAccount): _112.BaseVestingAccountAmino;
                fromAminoMsg(object: _112.BaseVestingAccountAminoMsg): _112.BaseVestingAccount;
                toAminoMsg(message: _112.BaseVestingAccount): _112.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _112.BaseVestingAccountProtoMsg): _112.BaseVestingAccount;
                toProto(message: _112.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _112.BaseVestingAccount): _112.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _112.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.ContinuousVestingAccount;
                fromPartial(object: Partial<_112.ContinuousVestingAccount>): _112.ContinuousVestingAccount;
                fromAmino(object: _112.ContinuousVestingAccountAmino): _112.ContinuousVestingAccount;
                toAmino(message: _112.ContinuousVestingAccount): _112.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _112.ContinuousVestingAccountAminoMsg): _112.ContinuousVestingAccount;
                toAminoMsg(message: _112.ContinuousVestingAccount): _112.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _112.ContinuousVestingAccountProtoMsg): _112.ContinuousVestingAccount;
                toProto(message: _112.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _112.ContinuousVestingAccount): _112.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _112.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.DelayedVestingAccount;
                fromPartial(object: Partial<_112.DelayedVestingAccount>): _112.DelayedVestingAccount;
                fromAmino(object: _112.DelayedVestingAccountAmino): _112.DelayedVestingAccount;
                toAmino(message: _112.DelayedVestingAccount): _112.DelayedVestingAccountAmino;
                fromAminoMsg(object: _112.DelayedVestingAccountAminoMsg): _112.DelayedVestingAccount;
                toAminoMsg(message: _112.DelayedVestingAccount): _112.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _112.DelayedVestingAccountProtoMsg): _112.DelayedVestingAccount;
                toProto(message: _112.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _112.DelayedVestingAccount): _112.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _112.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Period;
                fromPartial(object: Partial<_112.Period>): _112.Period;
                fromAmino(object: _112.PeriodAmino): _112.Period;
                toAmino(message: _112.Period): _112.PeriodAmino;
                fromAminoMsg(object: _112.PeriodAminoMsg): _112.Period;
                toAminoMsg(message: _112.Period): _112.PeriodAminoMsg;
                fromProtoMsg(message: _112.PeriodProtoMsg): _112.Period;
                toProto(message: _112.Period): Uint8Array;
                toProtoMsg(message: _112.Period): _112.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _112.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.PeriodicVestingAccount;
                fromPartial(object: Partial<_112.PeriodicVestingAccount>): _112.PeriodicVestingAccount;
                fromAmino(object: _112.PeriodicVestingAccountAmino): _112.PeriodicVestingAccount;
                toAmino(message: _112.PeriodicVestingAccount): _112.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _112.PeriodicVestingAccountAminoMsg): _112.PeriodicVestingAccount;
                toAminoMsg(message: _112.PeriodicVestingAccount): _112.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _112.PeriodicVestingAccountProtoMsg): _112.PeriodicVestingAccount;
                toProto(message: _112.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _112.PeriodicVestingAccount): _112.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _112.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.PermanentLockedAccount;
                fromPartial(object: Partial<_112.PermanentLockedAccount>): _112.PermanentLockedAccount;
                fromAmino(object: _112.PermanentLockedAccountAmino): _112.PermanentLockedAccount;
                toAmino(message: _112.PermanentLockedAccount): _112.PermanentLockedAccountAmino;
                fromAminoMsg(object: _112.PermanentLockedAccountAminoMsg): _112.PermanentLockedAccount;
                toAminoMsg(message: _112.PermanentLockedAccount): _112.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _112.PermanentLockedAccountProtoMsg): _112.PermanentLockedAccount;
                toProto(message: _112.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _112.PermanentLockedAccount): _112.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _111.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgCreateVestingAccount;
                fromPartial(object: Partial<_111.MsgCreateVestingAccount>): _111.MsgCreateVestingAccount;
                fromAmino(object: _111.MsgCreateVestingAccountAmino): _111.MsgCreateVestingAccount;
                toAmino(message: _111.MsgCreateVestingAccount): _111.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _111.MsgCreateVestingAccountAminoMsg): _111.MsgCreateVestingAccount;
                toAminoMsg(message: _111.MsgCreateVestingAccount): _111.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _111.MsgCreateVestingAccountProtoMsg): _111.MsgCreateVestingAccount;
                toProto(message: _111.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _111.MsgCreateVestingAccount): _111.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _111.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_111.MsgCreateVestingAccountResponse>): _111.MsgCreateVestingAccountResponse;
                fromAmino(_: _111.MsgCreateVestingAccountResponseAmino): _111.MsgCreateVestingAccountResponse;
                toAmino(_: _111.MsgCreateVestingAccountResponse): _111.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _111.MsgCreateVestingAccountResponseAminoMsg): _111.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _111.MsgCreateVestingAccountResponse): _111.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _111.MsgCreateVestingAccountResponseProtoMsg): _111.MsgCreateVestingAccountResponse;
                toProto(message: _111.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _111.MsgCreateVestingAccountResponse): _111.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _111.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_111.MsgCreatePermanentLockedAccount>): _111.MsgCreatePermanentLockedAccount;
                fromAmino(object: _111.MsgCreatePermanentLockedAccountAmino): _111.MsgCreatePermanentLockedAccount;
                toAmino(message: _111.MsgCreatePermanentLockedAccount): _111.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _111.MsgCreatePermanentLockedAccountAminoMsg): _111.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _111.MsgCreatePermanentLockedAccount): _111.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _111.MsgCreatePermanentLockedAccountProtoMsg): _111.MsgCreatePermanentLockedAccount;
                toProto(message: _111.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _111.MsgCreatePermanentLockedAccount): _111.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _111.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_111.MsgCreatePermanentLockedAccountResponse>): _111.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _111.MsgCreatePermanentLockedAccountResponseAmino): _111.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _111.MsgCreatePermanentLockedAccountResponse): _111.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _111.MsgCreatePermanentLockedAccountResponseAminoMsg): _111.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _111.MsgCreatePermanentLockedAccountResponse): _111.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _111.MsgCreatePermanentLockedAccountResponseProtoMsg): _111.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _111.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _111.MsgCreatePermanentLockedAccountResponse): _111.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _111.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_111.MsgCreatePeriodicVestingAccount>): _111.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _111.MsgCreatePeriodicVestingAccountAmino): _111.MsgCreatePeriodicVestingAccount;
                toAmino(message: _111.MsgCreatePeriodicVestingAccount): _111.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _111.MsgCreatePeriodicVestingAccountAminoMsg): _111.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _111.MsgCreatePeriodicVestingAccount): _111.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _111.MsgCreatePeriodicVestingAccountProtoMsg): _111.MsgCreatePeriodicVestingAccount;
                toProto(message: _111.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _111.MsgCreatePeriodicVestingAccount): _111.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _111.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_111.MsgCreatePeriodicVestingAccountResponse>): _111.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _111.MsgCreatePeriodicVestingAccountResponseAmino): _111.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _111.MsgCreatePeriodicVestingAccountResponse): _111.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _111.MsgCreatePeriodicVestingAccountResponseAminoMsg): _111.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _111.MsgCreatePeriodicVestingAccountResponse): _111.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _111.MsgCreatePeriodicVestingAccountResponseProtoMsg): _111.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _111.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _111.MsgCreatePeriodicVestingAccountResponse): _111.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _252.MsgClientImpl;
                };
                bank: {
                    v1beta1: _253.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _254.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _255.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _256.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _257.MsgClientImpl;
                };
                gov: {
                    v1: _258.MsgClientImpl;
                    v1beta1: _259.MsgClientImpl;
                };
                group: {
                    v1: _260.MsgClientImpl;
                };
                nft: {
                    v1beta1: _261.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _262.MsgClientImpl;
                };
                staking: {
                    v1beta1: _263.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _264.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _265.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _20.QueryConfigRequest): Promise<_20.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _23.QueryAccountsRequest): Promise<_23.QueryAccountsResponse>;
                        account(request: _23.QueryAccountRequest): Promise<_23.QueryAccountResponse>;
                        accountAddressByID(request: _23.QueryAccountAddressByIDRequest): Promise<_23.QueryAccountAddressByIDResponse>;
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                        moduleAccounts(request?: _23.QueryModuleAccountsRequest): Promise<_23.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _23.QueryModuleAccountByNameRequest): Promise<_23.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _23.Bech32PrefixRequest): Promise<_23.Bech32PrefixResponse>;
                        addressBytesToString(request: _23.AddressBytesToStringRequest): Promise<_23.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _23.AddressStringToBytesRequest): Promise<_23.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _27.QueryGrantsRequest): Promise<_27.QueryGrantsResponse>;
                        granterGrants(request: _27.QueryGranterGrantsRequest): Promise<_27.QueryGranterGrantsResponse>;
                        granteeGrants(request: _27.QueryGranteeGrantsRequest): Promise<_27.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _32.QueryBalanceRequest): Promise<_32.QueryBalanceResponse>;
                        allBalances(request: _32.QueryAllBalancesRequest): Promise<_32.QueryAllBalancesResponse>;
                        spendableBalances(request: _32.QuerySpendableBalancesRequest): Promise<_32.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _32.QueryTotalSupplyRequest): Promise<_32.QueryTotalSupplyResponse>;
                        supplyOf(request: _32.QuerySupplyOfRequest): Promise<_32.QuerySupplyOfResponse>;
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        denomMetadata(request: _32.QueryDenomMetadataRequest): Promise<_32.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _32.QueryDenomsMetadataRequest): Promise<_32.QueryDenomsMetadataResponse>;
                        denomOwners(request: _32.QueryDenomOwnersRequest): Promise<_32.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _36.ConfigRequest): Promise<_36.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _43.GetNodeInfoRequest): Promise<_43.GetNodeInfoResponse>;
                            getSyncing(request?: _43.GetSyncingRequest): Promise<_43.GetSyncingResponse>;
                            getLatestBlock(request?: _43.GetLatestBlockRequest): Promise<_43.GetLatestBlockResponse>;
                            getBlockByHeight(request: _43.GetBlockByHeightRequest): Promise<_43.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _43.GetLatestValidatorSetRequest): Promise<_43.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _43.GetValidatorSetByHeightRequest): Promise<_43.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _43.ABCIQueryRequest): Promise<_43.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _58.QueryValidatorOutstandingRewardsRequest): Promise<_58.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _58.QueryValidatorCommissionRequest): Promise<_58.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _58.QueryValidatorSlashesRequest): Promise<_58.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _58.QueryDelegationRewardsRequest): Promise<_58.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _58.QueryDelegationTotalRewardsRequest): Promise<_58.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _58.QueryDelegatorValidatorsRequest): Promise<_58.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _58.QueryDelegatorWithdrawAddressRequest): Promise<_58.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _58.QueryCommunityPoolRequest): Promise<_58.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _62.QueryEvidenceRequest): Promise<_62.QueryEvidenceResponse>;
                        allEvidence(request?: _62.QueryAllEvidenceRequest): Promise<_62.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _66.QueryAllowanceRequest): Promise<_66.QueryAllowanceResponse>;
                        allowances(request: _66.QueryAllowancesRequest): Promise<_66.QueryAllowancesResponse>;
                        allowancesByGranter(request: _66.QueryAllowancesByGranterRequest): Promise<_66.QueryAllowancesByGranterResponse>;
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
                        groupInfo(request: _79.QueryGroupInfoRequest): Promise<_79.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _79.QueryGroupPolicyInfoRequest): Promise<_79.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _79.QueryGroupMembersRequest): Promise<_79.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _79.QueryGroupsByAdminRequest): Promise<_79.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _79.QueryGroupPoliciesByGroupRequest): Promise<_79.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _79.QueryGroupPoliciesByAdminRequest): Promise<_79.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _79.QueryProposalsByGroupPolicyRequest): Promise<_79.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _79.QueryVoteByProposalVoterRequest): Promise<_79.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _79.QueryVotesByProposalRequest): Promise<_79.QueryVotesByProposalResponse>;
                        votesByVoter(request: _79.QueryVotesByVoterRequest): Promise<_79.QueryVotesByVoterResponse>;
                        groupsByMember(request: _79.QueryGroupsByMemberRequest): Promise<_79.QueryGroupsByMemberResponse>;
                        tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
                        groups(request?: _79.QueryGroupsRequest): Promise<_79.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                        inflation(request?: _84.QueryInflationRequest): Promise<_84.QueryInflationResponse>;
                        annualProvisions(request?: _84.QueryAnnualProvisionsRequest): Promise<_84.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _89.QueryBalanceRequest): Promise<_89.QueryBalanceResponse>;
                        owner(request: _89.QueryOwnerRequest): Promise<_89.QueryOwnerResponse>;
                        supply(request: _89.QuerySupplyRequest): Promise<_89.QuerySupplyResponse>;
                        nFTs(request: _89.QueryNFTsRequest): Promise<_89.QueryNFTsResponse>;
                        nFT(request: _89.QueryNFTRequest): Promise<_89.QueryNFTResponse>;
                        class(request: _89.QueryClassRequest): Promise<_89.QueryClassResponse>;
                        classes(request?: _89.QueryClassesRequest): Promise<_89.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                        subspaces(request?: _95.QuerySubspacesRequest): Promise<_95.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                        signingInfo(request: _97.QuerySigningInfoRequest): Promise<_97.QuerySigningInfoResponse>;
                        signingInfos(request?: _97.QuerySigningInfosRequest): Promise<_97.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _102.QueryValidatorsRequest): Promise<_102.QueryValidatorsResponse>;
                        validator(request: _102.QueryValidatorRequest): Promise<_102.QueryValidatorResponse>;
                        validatorDelegations(request: _102.QueryValidatorDelegationsRequest): Promise<_102.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _102.QueryValidatorUnbondingDelegationsRequest): Promise<_102.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _102.QueryDelegationRequest): Promise<_102.QueryDelegationResponse>;
                        unbondingDelegation(request: _102.QueryUnbondingDelegationRequest): Promise<_102.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _102.QueryDelegatorDelegationsRequest): Promise<_102.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _102.QueryDelegatorUnbondingDelegationsRequest): Promise<_102.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _102.QueryRedelegationsRequest): Promise<_102.QueryRedelegationsResponse>;
                        delegatorValidators(request: _102.QueryDelegatorValidatorsRequest): Promise<_102.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _102.QueryDelegatorValidatorRequest): Promise<_102.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _102.QueryHistoricalInfoRequest): Promise<_102.QueryHistoricalInfoResponse>;
                        pool(request?: _102.QueryPoolRequest): Promise<_102.QueryPoolResponse>;
                        params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _106.SimulateRequest): Promise<_106.SimulateResponse>;
                        getTx(request: _106.GetTxRequest): Promise<_106.GetTxResponse>;
                        broadcastTx(request: _106.BroadcastTxRequest): Promise<_106.BroadcastTxResponse>;
                        getTxsEvent(request: _106.GetTxsEventRequest): Promise<_106.GetTxsEventResponse>;
                        getBlockWithTxs(request: _106.GetBlockWithTxsRequest): Promise<_106.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _108.QueryCurrentPlanRequest): Promise<_108.QueryCurrentPlanResponse>;
                        appliedPlan(request: _108.QueryAppliedPlanRequest): Promise<_108.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _108.QueryUpgradedConsensusStateRequest): Promise<_108.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _108.QueryModuleVersionsRequest): Promise<_108.QueryModuleVersionsResponse>;
                        authority(request?: _108.QueryAuthorityRequest): Promise<_108.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _215.LCDQueryClient;
                };
                authz: {
                    v1beta1: _216.LCDQueryClient;
                };
                bank: {
                    v1beta1: _217.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _218.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _219.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _220.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _221.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _222.LCDQueryClient;
                };
                gov: {
                    v1: _223.LCDQueryClient;
                    v1beta1: _224.LCDQueryClient;
                };
                group: {
                    v1: _225.LCDQueryClient;
                };
                mint: {
                    v1beta1: _226.LCDQueryClient;
                };
                nft: {
                    v1beta1: _227.LCDQueryClient;
                };
                params: {
                    v1beta1: _228.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _229.LCDQueryClient;
                };
                staking: {
                    v1beta1: _230.LCDQueryClient;
                };
                tx: {
                    v1beta1: _231.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _232.LCDQueryClient;
                };
            };
        }>;
    };
}
