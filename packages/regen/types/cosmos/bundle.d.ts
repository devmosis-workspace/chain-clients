import * as _33 from "./app/module/v1alpha1/module";
import * as _34 from "./app/v1alpha1/config";
import * as _35 from "./app/v1alpha1/module";
import * as _36 from "./app/v1alpha1/query";
import * as _37 from "./auth/v1beta1/auth";
import * as _38 from "./auth/v1beta1/genesis";
import * as _39 from "./auth/v1beta1/query";
import * as _40 from "./authz/v1beta1/authz";
import * as _41 from "./authz/v1beta1/event";
import * as _42 from "./authz/v1beta1/genesis";
import * as _43 from "./authz/v1beta1/query";
import * as _44 from "./authz/v1beta1/tx";
import * as _45 from "./bank/v1beta1/authz";
import * as _46 from "./bank/v1beta1/bank";
import * as _47 from "./bank/v1beta1/genesis";
import * as _48 from "./bank/v1beta1/query";
import * as _49 from "./bank/v1beta1/tx";
import * as _50 from "./base/abci/v1beta1/abci";
import * as _51 from "./base/kv/v1beta1/kv";
import * as _52 from "./base/node/v1beta1/query";
import * as _53 from "./base/query/v1beta1/pagination";
import * as _54 from "./base/reflection/v1beta1/reflection";
import * as _55 from "./base/reflection/v2alpha1/reflection";
import * as _56 from "./base/snapshots/v1beta1/snapshot";
import * as _57 from "./base/store/v1beta1/commit_info";
import * as _58 from "./base/store/v1beta1/listening";
import * as _59 from "./base/tendermint/v1beta1/query";
import * as _60 from "./base/tendermint/v1beta1/types";
import * as _61 from "./base/v1beta1/coin";
import * as _62 from "./capability/v1beta1/capability";
import * as _63 from "./capability/v1beta1/genesis";
import * as _64 from "./crisis/v1beta1/genesis";
import * as _65 from "./crisis/v1beta1/tx";
import * as _66 from "./crypto/ed25519/keys";
import * as _67 from "./crypto/hd/v1/hd";
import * as _68 from "./crypto/keyring/v1/record";
import * as _69 from "./crypto/multisig/keys";
import * as _70 from "./crypto/secp256k1/keys";
import * as _71 from "./crypto/secp256r1/keys";
import * as _72 from "./distribution/v1beta1/distribution";
import * as _73 from "./distribution/v1beta1/genesis";
import * as _74 from "./distribution/v1beta1/query";
import * as _75 from "./distribution/v1beta1/tx";
import * as _76 from "./evidence/v1beta1/evidence";
import * as _77 from "./evidence/v1beta1/genesis";
import * as _78 from "./evidence/v1beta1/query";
import * as _79 from "./evidence/v1beta1/tx";
import * as _80 from "./feegrant/v1beta1/feegrant";
import * as _81 from "./feegrant/v1beta1/genesis";
import * as _82 from "./feegrant/v1beta1/query";
import * as _83 from "./feegrant/v1beta1/tx";
import * as _84 from "./genutil/v1beta1/genesis";
import * as _85 from "./gov/v1/genesis";
import * as _86 from "./gov/v1/gov";
import * as _87 from "./gov/v1/query";
import * as _88 from "./gov/v1/tx";
import * as _89 from "./gov/v1beta1/genesis";
import * as _90 from "./gov/v1beta1/gov";
import * as _91 from "./gov/v1beta1/query";
import * as _92 from "./gov/v1beta1/tx";
import * as _93 from "./group/v1/events";
import * as _94 from "./group/v1/genesis";
import * as _95 from "./group/v1/query";
import * as _96 from "./group/v1/tx";
import * as _97 from "./group/v1/types";
import * as _98 from "./mint/v1beta1/genesis";
import * as _99 from "./mint/v1beta1/mint";
import * as _100 from "./mint/v1beta1/query";
import * as _102 from "./nft/v1beta1/event";
import * as _103 from "./nft/v1beta1/genesis";
import * as _104 from "./nft/v1beta1/nft";
import * as _105 from "./nft/v1beta1/query";
import * as _106 from "./nft/v1beta1/tx";
import * as _107 from "./orm/module/v1alpha1/module";
import * as _108 from "./orm/v1/orm";
import * as _109 from "./orm/v1alpha1/schema";
import * as _110 from "./params/v1beta1/params";
import * as _111 from "./params/v1beta1/query";
import * as _112 from "./slashing/v1beta1/genesis";
import * as _113 from "./slashing/v1beta1/query";
import * as _114 from "./slashing/v1beta1/slashing";
import * as _115 from "./slashing/v1beta1/tx";
import * as _116 from "./staking/v1beta1/authz";
import * as _117 from "./staking/v1beta1/genesis";
import * as _118 from "./staking/v1beta1/query";
import * as _119 from "./staking/v1beta1/staking";
import * as _120 from "./staking/v1beta1/tx";
import * as _121 from "./tx/signing/v1beta1/signing";
import * as _122 from "./tx/v1beta1/service";
import * as _123 from "./tx/v1beta1/tx";
import * as _124 from "./upgrade/v1beta1/query";
import * as _125 from "./upgrade/v1beta1/tx";
import * as _126 from "./upgrade/v1beta1/upgrade";
import * as _127 from "./vesting/v1beta1/tx";
import * as _128 from "./vesting/v1beta1/vesting";
import * as _212 from "./auth/v1beta1/query.lcd";
import * as _213 from "./authz/v1beta1/query.lcd";
import * as _214 from "./bank/v1beta1/query.lcd";
import * as _215 from "./base/node/v1beta1/query.lcd";
import * as _216 from "./base/tendermint/v1beta1/query.lcd";
import * as _217 from "./distribution/v1beta1/query.lcd";
import * as _218 from "./evidence/v1beta1/query.lcd";
import * as _219 from "./feegrant/v1beta1/query.lcd";
import * as _220 from "./gov/v1/query.lcd";
import * as _221 from "./gov/v1beta1/query.lcd";
import * as _222 from "./group/v1/query.lcd";
import * as _223 from "./mint/v1beta1/query.lcd";
import * as _224 from "./nft/v1beta1/query.lcd";
import * as _225 from "./params/v1beta1/query.lcd";
import * as _226 from "./slashing/v1beta1/query.lcd";
import * as _227 from "./staking/v1beta1/query.lcd";
import * as _228 from "./tx/v1beta1/service.lcd";
import * as _229 from "./upgrade/v1beta1/query.lcd";
import * as _230 from "./app/v1alpha1/query.rpc.Query";
import * as _231 from "./auth/v1beta1/query.rpc.Query";
import * as _232 from "./authz/v1beta1/query.rpc.Query";
import * as _233 from "./bank/v1beta1/query.rpc.Query";
import * as _234 from "./base/node/v1beta1/query.rpc.Service";
import * as _235 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _236 from "./distribution/v1beta1/query.rpc.Query";
import * as _237 from "./evidence/v1beta1/query.rpc.Query";
import * as _238 from "./feegrant/v1beta1/query.rpc.Query";
import * as _239 from "./gov/v1/query.rpc.Query";
import * as _240 from "./gov/v1beta1/query.rpc.Query";
import * as _241 from "./group/v1/query.rpc.Query";
import * as _242 from "./mint/v1beta1/query.rpc.Query";
import * as _243 from "./nft/v1beta1/query.rpc.Query";
import * as _244 from "./params/v1beta1/query.rpc.Query";
import * as _245 from "./slashing/v1beta1/query.rpc.Query";
import * as _246 from "./staking/v1beta1/query.rpc.Query";
import * as _247 from "./tx/v1beta1/service.rpc.Service";
import * as _248 from "./upgrade/v1beta1/query.rpc.Query";
import * as _249 from "./authz/v1beta1/tx.rpc.msg";
import * as _250 from "./bank/v1beta1/tx.rpc.msg";
import * as _251 from "./crisis/v1beta1/tx.rpc.msg";
import * as _252 from "./distribution/v1beta1/tx.rpc.msg";
import * as _253 from "./evidence/v1beta1/tx.rpc.msg";
import * as _254 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _255 from "./gov/v1/tx.rpc.msg";
import * as _256 from "./gov/v1beta1/tx.rpc.msg";
import * as _257 from "./group/v1/tx.rpc.msg";
import * as _258 from "./nft/v1beta1/tx.rpc.msg";
import * as _259 from "./slashing/v1beta1/tx.rpc.msg";
import * as _260 from "./staking/v1beta1/tx.rpc.msg";
import * as _261 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _262 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _33.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.Module;
                    fromPartial(_: Partial<_33.Module>): _33.Module;
                    fromAmino(_: _33.ModuleAmino): _33.Module;
                    toAmino(_: _33.Module): _33.ModuleAmino;
                    fromAminoMsg(object: _33.ModuleAminoMsg): _33.Module;
                    toAminoMsg(message: _33.Module): _33.ModuleAminoMsg;
                    fromProtoMsg(message: _33.ModuleProtoMsg): _33.Module;
                    toProto(message: _33.Module): Uint8Array;
                    toProtoMsg(message: _33.Module): _33.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _36.QueryConfigRequest): Promise<_36.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _36.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.QueryConfigRequest;
                fromPartial(_: Partial<_36.QueryConfigRequest>): _36.QueryConfigRequest;
                fromAmino(_: _36.QueryConfigRequestAmino): _36.QueryConfigRequest;
                toAmino(_: _36.QueryConfigRequest): _36.QueryConfigRequestAmino;
                fromAminoMsg(object: _36.QueryConfigRequestAminoMsg): _36.QueryConfigRequest;
                toAminoMsg(message: _36.QueryConfigRequest): _36.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _36.QueryConfigRequestProtoMsg): _36.QueryConfigRequest;
                toProto(message: _36.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _36.QueryConfigRequest): _36.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _36.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryConfigResponse;
                fromPartial(object: Partial<_36.QueryConfigResponse>): _36.QueryConfigResponse;
                fromAmino(object: _36.QueryConfigResponseAmino): _36.QueryConfigResponse;
                toAmino(message: _36.QueryConfigResponse): _36.QueryConfigResponseAmino;
                fromAminoMsg(object: _36.QueryConfigResponseAminoMsg): _36.QueryConfigResponse;
                toAminoMsg(message: _36.QueryConfigResponse): _36.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _36.QueryConfigResponseProtoMsg): _36.QueryConfigResponse;
                toProto(message: _36.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _36.QueryConfigResponse): _36.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _35.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.ModuleDescriptor;
                fromPartial(object: Partial<_35.ModuleDescriptor>): _35.ModuleDescriptor;
                fromAmino(object: _35.ModuleDescriptorAmino): _35.ModuleDescriptor;
                toAmino(message: _35.ModuleDescriptor): _35.ModuleDescriptorAmino;
                fromAminoMsg(object: _35.ModuleDescriptorAminoMsg): _35.ModuleDescriptor;
                toAminoMsg(message: _35.ModuleDescriptor): _35.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _35.ModuleDescriptorProtoMsg): _35.ModuleDescriptor;
                toProto(message: _35.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _35.ModuleDescriptor): _35.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _35.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.PackageReference;
                fromPartial(object: Partial<_35.PackageReference>): _35.PackageReference;
                fromAmino(object: _35.PackageReferenceAmino): _35.PackageReference;
                toAmino(message: _35.PackageReference): _35.PackageReferenceAmino;
                fromAminoMsg(object: _35.PackageReferenceAminoMsg): _35.PackageReference;
                toAminoMsg(message: _35.PackageReference): _35.PackageReferenceAminoMsg;
                fromProtoMsg(message: _35.PackageReferenceProtoMsg): _35.PackageReference;
                toProto(message: _35.PackageReference): Uint8Array;
                toProtoMsg(message: _35.PackageReference): _35.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _35.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MigrateFromInfo;
                fromPartial(object: Partial<_35.MigrateFromInfo>): _35.MigrateFromInfo;
                fromAmino(object: _35.MigrateFromInfoAmino): _35.MigrateFromInfo;
                toAmino(message: _35.MigrateFromInfo): _35.MigrateFromInfoAmino;
                fromAminoMsg(object: _35.MigrateFromInfoAminoMsg): _35.MigrateFromInfo;
                toAminoMsg(message: _35.MigrateFromInfo): _35.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _35.MigrateFromInfoProtoMsg): _35.MigrateFromInfo;
                toProto(message: _35.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _35.MigrateFromInfo): _35.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _34.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Config;
                fromPartial(object: Partial<_34.Config>): _34.Config;
                fromAmino(object: _34.ConfigAmino): _34.Config;
                toAmino(message: _34.Config): _34.ConfigAmino;
                fromAminoMsg(object: _34.ConfigAminoMsg): _34.Config;
                toAminoMsg(message: _34.Config): _34.ConfigAminoMsg;
                fromProtoMsg(message: _34.ConfigProtoMsg): _34.Config;
                toProto(message: _34.Config): Uint8Array;
                toProtoMsg(message: _34.Config): _34.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _34.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.ModuleConfig;
                fromPartial(object: Partial<_34.ModuleConfig>): _34.ModuleConfig;
                fromAmino(object: _34.ModuleConfigAmino): _34.ModuleConfig;
                toAmino(message: _34.ModuleConfig): _34.ModuleConfigAmino;
                fromAminoMsg(object: _34.ModuleConfigAminoMsg): _34.ModuleConfig;
                toAminoMsg(message: _34.ModuleConfig): _34.ModuleConfigAminoMsg;
                fromProtoMsg(message: _34.ModuleConfigProtoMsg): _34.ModuleConfig;
                toProto(message: _34.ModuleConfig): Uint8Array;
                toProtoMsg(message: _34.ModuleConfig): _34.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _39.QueryAccountsRequest): Promise<_39.QueryAccountsResponse>;
                account(request: _39.QueryAccountRequest): Promise<_39.QueryAccountResponse>;
                accountAddressByID(request: _39.QueryAccountAddressByIDRequest): Promise<_39.QueryAccountAddressByIDResponse>;
                params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                moduleAccounts(request?: _39.QueryModuleAccountsRequest): Promise<_39.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _39.QueryModuleAccountByNameRequest): Promise<_39.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _39.Bech32PrefixRequest): Promise<_39.Bech32PrefixResponse>;
                addressBytesToString(request: _39.AddressBytesToStringRequest): Promise<_39.AddressBytesToStringResponse>;
                addressStringToBytes(request: _39.AddressStringToBytesRequest): Promise<_39.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _212.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _39.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryAccountsRequest;
                fromPartial(object: Partial<_39.QueryAccountsRequest>): _39.QueryAccountsRequest;
                fromAmino(object: _39.QueryAccountsRequestAmino): _39.QueryAccountsRequest;
                toAmino(message: _39.QueryAccountsRequest): _39.QueryAccountsRequestAmino;
                fromAminoMsg(object: _39.QueryAccountsRequestAminoMsg): _39.QueryAccountsRequest;
                toAminoMsg(message: _39.QueryAccountsRequest): _39.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryAccountsRequestProtoMsg): _39.QueryAccountsRequest;
                toProto(message: _39.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryAccountsRequest): _39.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _39.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryAccountsResponse;
                fromPartial(object: Partial<_39.QueryAccountsResponse>): _39.QueryAccountsResponse;
                fromAmino(object: _39.QueryAccountsResponseAmino): _39.QueryAccountsResponse;
                toAmino(message: _39.QueryAccountsResponse): _39.QueryAccountsResponseAmino;
                fromAminoMsg(object: _39.QueryAccountsResponseAminoMsg): _39.QueryAccountsResponse;
                toAminoMsg(message: _39.QueryAccountsResponse): _39.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryAccountsResponseProtoMsg): _39.QueryAccountsResponse;
                toProto(message: _39.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryAccountsResponse): _39.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _39.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryAccountRequest;
                fromPartial(object: Partial<_39.QueryAccountRequest>): _39.QueryAccountRequest;
                fromAmino(object: _39.QueryAccountRequestAmino): _39.QueryAccountRequest;
                toAmino(message: _39.QueryAccountRequest): _39.QueryAccountRequestAmino;
                fromAminoMsg(object: _39.QueryAccountRequestAminoMsg): _39.QueryAccountRequest;
                toAminoMsg(message: _39.QueryAccountRequest): _39.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _39.QueryAccountRequestProtoMsg): _39.QueryAccountRequest;
                toProto(message: _39.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _39.QueryAccountRequest): _39.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _39.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryAccountResponse;
                fromPartial(object: Partial<_39.QueryAccountResponse>): _39.QueryAccountResponse;
                fromAmino(object: _39.QueryAccountResponseAmino): _39.QueryAccountResponse;
                toAmino(message: _39.QueryAccountResponse): _39.QueryAccountResponseAmino;
                fromAminoMsg(object: _39.QueryAccountResponseAminoMsg): _39.QueryAccountResponse;
                toAminoMsg(message: _39.QueryAccountResponse): _39.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _39.QueryAccountResponseProtoMsg): _39.QueryAccountResponse;
                toProto(message: _39.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _39.QueryAccountResponse): _39.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _39.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.QueryParamsRequest;
                fromPartial(_: Partial<_39.QueryParamsRequest>): _39.QueryParamsRequest;
                fromAmino(_: _39.QueryParamsRequestAmino): _39.QueryParamsRequest;
                toAmino(_: _39.QueryParamsRequest): _39.QueryParamsRequestAmino;
                fromAminoMsg(object: _39.QueryParamsRequestAminoMsg): _39.QueryParamsRequest;
                toAminoMsg(message: _39.QueryParamsRequest): _39.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryParamsRequestProtoMsg): _39.QueryParamsRequest;
                toProto(message: _39.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryParamsRequest): _39.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _39.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryParamsResponse;
                fromPartial(object: Partial<_39.QueryParamsResponse>): _39.QueryParamsResponse;
                fromAmino(object: _39.QueryParamsResponseAmino): _39.QueryParamsResponse;
                toAmino(message: _39.QueryParamsResponse): _39.QueryParamsResponseAmino;
                fromAminoMsg(object: _39.QueryParamsResponseAminoMsg): _39.QueryParamsResponse;
                toAminoMsg(message: _39.QueryParamsResponse): _39.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryParamsResponseProtoMsg): _39.QueryParamsResponse;
                toProto(message: _39.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryParamsResponse): _39.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _39.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_39.QueryModuleAccountsRequest>): _39.QueryModuleAccountsRequest;
                fromAmino(_: _39.QueryModuleAccountsRequestAmino): _39.QueryModuleAccountsRequest;
                toAmino(_: _39.QueryModuleAccountsRequest): _39.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _39.QueryModuleAccountsRequestAminoMsg): _39.QueryModuleAccountsRequest;
                toAminoMsg(message: _39.QueryModuleAccountsRequest): _39.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryModuleAccountsRequestProtoMsg): _39.QueryModuleAccountsRequest;
                toProto(message: _39.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryModuleAccountsRequest): _39.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _39.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_39.QueryModuleAccountsResponse>): _39.QueryModuleAccountsResponse;
                fromAmino(object: _39.QueryModuleAccountsResponseAmino): _39.QueryModuleAccountsResponse;
                toAmino(message: _39.QueryModuleAccountsResponse): _39.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _39.QueryModuleAccountsResponseAminoMsg): _39.QueryModuleAccountsResponse;
                toAminoMsg(message: _39.QueryModuleAccountsResponse): _39.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryModuleAccountsResponseProtoMsg): _39.QueryModuleAccountsResponse;
                toProto(message: _39.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryModuleAccountsResponse): _39.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _39.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_39.QueryModuleAccountByNameRequest>): _39.QueryModuleAccountByNameRequest;
                fromAmino(object: _39.QueryModuleAccountByNameRequestAmino): _39.QueryModuleAccountByNameRequest;
                toAmino(message: _39.QueryModuleAccountByNameRequest): _39.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _39.QueryModuleAccountByNameRequestAminoMsg): _39.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _39.QueryModuleAccountByNameRequest): _39.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _39.QueryModuleAccountByNameRequestProtoMsg): _39.QueryModuleAccountByNameRequest;
                toProto(message: _39.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _39.QueryModuleAccountByNameRequest): _39.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _39.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_39.QueryModuleAccountByNameResponse>): _39.QueryModuleAccountByNameResponse;
                fromAmino(object: _39.QueryModuleAccountByNameResponseAmino): _39.QueryModuleAccountByNameResponse;
                toAmino(message: _39.QueryModuleAccountByNameResponse): _39.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _39.QueryModuleAccountByNameResponseAminoMsg): _39.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _39.QueryModuleAccountByNameResponse): _39.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _39.QueryModuleAccountByNameResponseProtoMsg): _39.QueryModuleAccountByNameResponse;
                toProto(message: _39.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _39.QueryModuleAccountByNameResponse): _39.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _39.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.Bech32PrefixRequest;
                fromPartial(_: Partial<_39.Bech32PrefixRequest>): _39.Bech32PrefixRequest;
                fromAmino(_: _39.Bech32PrefixRequestAmino): _39.Bech32PrefixRequest;
                toAmino(_: _39.Bech32PrefixRequest): _39.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _39.Bech32PrefixRequestAminoMsg): _39.Bech32PrefixRequest;
                toAminoMsg(message: _39.Bech32PrefixRequest): _39.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _39.Bech32PrefixRequestProtoMsg): _39.Bech32PrefixRequest;
                toProto(message: _39.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _39.Bech32PrefixRequest): _39.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _39.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Bech32PrefixResponse;
                fromPartial(object: Partial<_39.Bech32PrefixResponse>): _39.Bech32PrefixResponse;
                fromAmino(object: _39.Bech32PrefixResponseAmino): _39.Bech32PrefixResponse;
                toAmino(message: _39.Bech32PrefixResponse): _39.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _39.Bech32PrefixResponseAminoMsg): _39.Bech32PrefixResponse;
                toAminoMsg(message: _39.Bech32PrefixResponse): _39.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _39.Bech32PrefixResponseProtoMsg): _39.Bech32PrefixResponse;
                toProto(message: _39.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _39.Bech32PrefixResponse): _39.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _39.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.AddressBytesToStringRequest;
                fromPartial(object: Partial<_39.AddressBytesToStringRequest>): _39.AddressBytesToStringRequest;
                fromAmino(object: _39.AddressBytesToStringRequestAmino): _39.AddressBytesToStringRequest;
                toAmino(message: _39.AddressBytesToStringRequest): _39.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _39.AddressBytesToStringRequestAminoMsg): _39.AddressBytesToStringRequest;
                toAminoMsg(message: _39.AddressBytesToStringRequest): _39.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _39.AddressBytesToStringRequestProtoMsg): _39.AddressBytesToStringRequest;
                toProto(message: _39.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _39.AddressBytesToStringRequest): _39.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _39.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.AddressBytesToStringResponse;
                fromPartial(object: Partial<_39.AddressBytesToStringResponse>): _39.AddressBytesToStringResponse;
                fromAmino(object: _39.AddressBytesToStringResponseAmino): _39.AddressBytesToStringResponse;
                toAmino(message: _39.AddressBytesToStringResponse): _39.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _39.AddressBytesToStringResponseAminoMsg): _39.AddressBytesToStringResponse;
                toAminoMsg(message: _39.AddressBytesToStringResponse): _39.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _39.AddressBytesToStringResponseProtoMsg): _39.AddressBytesToStringResponse;
                toProto(message: _39.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _39.AddressBytesToStringResponse): _39.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _39.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.AddressStringToBytesRequest;
                fromPartial(object: Partial<_39.AddressStringToBytesRequest>): _39.AddressStringToBytesRequest;
                fromAmino(object: _39.AddressStringToBytesRequestAmino): _39.AddressStringToBytesRequest;
                toAmino(message: _39.AddressStringToBytesRequest): _39.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _39.AddressStringToBytesRequestAminoMsg): _39.AddressStringToBytesRequest;
                toAminoMsg(message: _39.AddressStringToBytesRequest): _39.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _39.AddressStringToBytesRequestProtoMsg): _39.AddressStringToBytesRequest;
                toProto(message: _39.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _39.AddressStringToBytesRequest): _39.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _39.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.AddressStringToBytesResponse;
                fromPartial(object: Partial<_39.AddressStringToBytesResponse>): _39.AddressStringToBytesResponse;
                fromAmino(object: _39.AddressStringToBytesResponseAmino): _39.AddressStringToBytesResponse;
                toAmino(message: _39.AddressStringToBytesResponse): _39.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _39.AddressStringToBytesResponseAminoMsg): _39.AddressStringToBytesResponse;
                toAminoMsg(message: _39.AddressStringToBytesResponse): _39.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _39.AddressStringToBytesResponseProtoMsg): _39.AddressStringToBytesResponse;
                toProto(message: _39.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _39.AddressStringToBytesResponse): _39.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _39.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_39.QueryAccountAddressByIDRequest>): _39.QueryAccountAddressByIDRequest;
                fromAmino(object: _39.QueryAccountAddressByIDRequestAmino): _39.QueryAccountAddressByIDRequest;
                toAmino(message: _39.QueryAccountAddressByIDRequest): _39.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _39.QueryAccountAddressByIDRequestAminoMsg): _39.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _39.QueryAccountAddressByIDRequest): _39.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _39.QueryAccountAddressByIDRequestProtoMsg): _39.QueryAccountAddressByIDRequest;
                toProto(message: _39.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _39.QueryAccountAddressByIDRequest): _39.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _39.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_39.QueryAccountAddressByIDResponse>): _39.QueryAccountAddressByIDResponse;
                fromAmino(object: _39.QueryAccountAddressByIDResponseAmino): _39.QueryAccountAddressByIDResponse;
                toAmino(message: _39.QueryAccountAddressByIDResponse): _39.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _39.QueryAccountAddressByIDResponseAminoMsg): _39.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _39.QueryAccountAddressByIDResponse): _39.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _39.QueryAccountAddressByIDResponseProtoMsg): _39.QueryAccountAddressByIDResponse;
                toProto(message: _39.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _39.QueryAccountAddressByIDResponse): _39.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _37.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _37.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _38.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
                fromAmino(object: _38.GenesisStateAmino): _38.GenesisState;
                toAmino(message: _38.GenesisState): _38.GenesisStateAmino;
                fromAminoMsg(object: _38.GenesisStateAminoMsg): _38.GenesisState;
                toAminoMsg(message: _38.GenesisState): _38.GenesisStateAminoMsg;
                fromProtoMsg(message: _38.GenesisStateProtoMsg): _38.GenesisState;
                toProto(message: _38.GenesisState): Uint8Array;
                toProtoMsg(message: _38.GenesisState): _38.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _37.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.BaseAccount;
                fromPartial(object: Partial<_37.BaseAccount>): _37.BaseAccount;
                fromAmino(object: _37.BaseAccountAmino): _37.BaseAccount;
                toAmino(message: _37.BaseAccount): _37.BaseAccountAmino;
                fromAminoMsg(object: _37.BaseAccountAminoMsg): _37.BaseAccount;
                toAminoMsg(message: _37.BaseAccount): _37.BaseAccountAminoMsg;
                fromProtoMsg(message: _37.BaseAccountProtoMsg): _37.BaseAccount;
                toProto(message: _37.BaseAccount): Uint8Array;
                toProtoMsg(message: _37.BaseAccount): _37.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _37.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.ModuleAccount;
                fromPartial(object: Partial<_37.ModuleAccount>): _37.ModuleAccount;
                fromAmino(object: _37.ModuleAccountAmino): _37.ModuleAccount;
                toAmino(message: _37.ModuleAccount): _37.ModuleAccountAmino;
                fromAminoMsg(object: _37.ModuleAccountAminoMsg): _37.ModuleAccount;
                toAminoMsg(message: _37.ModuleAccount): _37.ModuleAccountAminoMsg;
                fromProtoMsg(message: _37.ModuleAccountProtoMsg): _37.ModuleAccount;
                toProto(message: _37.ModuleAccount): Uint8Array;
                toProtoMsg(message: _37.ModuleAccount): _37.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _37.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.Params;
                fromPartial(object: Partial<_37.Params>): _37.Params;
                fromAmino(object: _37.ParamsAmino): _37.Params;
                toAmino(message: _37.Params): _37.ParamsAmino;
                fromAminoMsg(object: _37.ParamsAminoMsg): _37.Params;
                toAminoMsg(message: _37.Params): _37.ParamsAminoMsg;
                fromProtoMsg(message: _37.ParamsProtoMsg): _37.Params;
                toProto(message: _37.Params): Uint8Array;
                toProtoMsg(message: _37.Params): _37.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _43.QueryGrantsRequest): Promise<_43.QueryGrantsResponse>;
                granterGrants(request: _43.QueryGranterGrantsRequest): Promise<_43.QueryGranterGrantsResponse>;
                granteeGrants(request: _43.QueryGranteeGrantsRequest): Promise<_43.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _213.LCDQueryClient;
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
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _45.SendAuthorization | _116.StakeAuthorization | _40.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _48.QueryBalanceRequest): Promise<_48.QueryBalanceResponse>;
                allBalances(request: _48.QueryAllBalancesRequest): Promise<_48.QueryAllBalancesResponse>;
                spendableBalances(request: _48.QuerySpendableBalancesRequest): Promise<_48.QuerySpendableBalancesResponse>;
                totalSupply(request?: _48.QueryTotalSupplyRequest): Promise<_48.QueryTotalSupplyResponse>;
                supplyOf(request: _48.QuerySupplyOfRequest): Promise<_48.QuerySupplyOfResponse>;
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                denomMetadata(request: _48.QueryDenomMetadataRequest): Promise<_48.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _48.QueryDenomsMetadataRequest): Promise<_48.QueryDenomsMetadataResponse>;
                denomOwners(request: _48.QueryDenomOwnersRequest): Promise<_48.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _214.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _49.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _49.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _49.MsgSend): {
                        typeUrl: string;
                        value: _49.MsgSend;
                    };
                    multiSend(value: _49.MsgMultiSend): {
                        typeUrl: string;
                        value: _49.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _49.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _49.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _49.MsgSend): {
                        typeUrl: string;
                        value: _49.MsgSend;
                    };
                    multiSend(value: _49.MsgMultiSend): {
                        typeUrl: string;
                        value: _49.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _49.MsgSend) => _49.MsgSendAmino;
                    fromAmino: (object: _49.MsgSendAmino) => _49.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _49.MsgMultiSend) => _49.MsgMultiSendAmino;
                    fromAmino: (object: _49.MsgMultiSendAmino) => _49.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _49.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgSend;
                fromPartial(object: Partial<_49.MsgSend>): _49.MsgSend;
                fromAmino(object: _49.MsgSendAmino): _49.MsgSend;
                toAmino(message: _49.MsgSend): _49.MsgSendAmino;
                fromAminoMsg(object: _49.MsgSendAminoMsg): _49.MsgSend;
                toAminoMsg(message: _49.MsgSend): _49.MsgSendAminoMsg;
                fromProtoMsg(message: _49.MsgSendProtoMsg): _49.MsgSend;
                toProto(message: _49.MsgSend): Uint8Array;
                toProtoMsg(message: _49.MsgSend): _49.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _49.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgSendResponse;
                fromPartial(_: Partial<_49.MsgSendResponse>): _49.MsgSendResponse;
                fromAmino(_: _49.MsgSendResponseAmino): _49.MsgSendResponse;
                toAmino(_: _49.MsgSendResponse): _49.MsgSendResponseAmino;
                fromAminoMsg(object: _49.MsgSendResponseAminoMsg): _49.MsgSendResponse;
                toAminoMsg(message: _49.MsgSendResponse): _49.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _49.MsgSendResponseProtoMsg): _49.MsgSendResponse;
                toProto(message: _49.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _49.MsgSendResponse): _49.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _49.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgMultiSend;
                fromPartial(object: Partial<_49.MsgMultiSend>): _49.MsgMultiSend;
                fromAmino(object: _49.MsgMultiSendAmino): _49.MsgMultiSend;
                toAmino(message: _49.MsgMultiSend): _49.MsgMultiSendAmino;
                fromAminoMsg(object: _49.MsgMultiSendAminoMsg): _49.MsgMultiSend;
                toAminoMsg(message: _49.MsgMultiSend): _49.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _49.MsgMultiSendProtoMsg): _49.MsgMultiSend;
                toProto(message: _49.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _49.MsgMultiSend): _49.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _49.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgMultiSendResponse;
                fromPartial(_: Partial<_49.MsgMultiSendResponse>): _49.MsgMultiSendResponse;
                fromAmino(_: _49.MsgMultiSendResponseAmino): _49.MsgMultiSendResponse;
                toAmino(_: _49.MsgMultiSendResponse): _49.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _49.MsgMultiSendResponseAminoMsg): _49.MsgMultiSendResponse;
                toAminoMsg(message: _49.MsgMultiSendResponse): _49.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _49.MsgMultiSendResponseProtoMsg): _49.MsgMultiSendResponse;
                toProto(message: _49.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _49.MsgMultiSendResponse): _49.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _48.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryBalanceRequest;
                fromPartial(object: Partial<_48.QueryBalanceRequest>): _48.QueryBalanceRequest;
                fromAmino(object: _48.QueryBalanceRequestAmino): _48.QueryBalanceRequest;
                toAmino(message: _48.QueryBalanceRequest): _48.QueryBalanceRequestAmino;
                fromAminoMsg(object: _48.QueryBalanceRequestAminoMsg): _48.QueryBalanceRequest;
                toAminoMsg(message: _48.QueryBalanceRequest): _48.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _48.QueryBalanceRequestProtoMsg): _48.QueryBalanceRequest;
                toProto(message: _48.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _48.QueryBalanceRequest): _48.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _48.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryBalanceResponse;
                fromPartial(object: Partial<_48.QueryBalanceResponse>): _48.QueryBalanceResponse;
                fromAmino(object: _48.QueryBalanceResponseAmino): _48.QueryBalanceResponse;
                toAmino(message: _48.QueryBalanceResponse): _48.QueryBalanceResponseAmino;
                fromAminoMsg(object: _48.QueryBalanceResponseAminoMsg): _48.QueryBalanceResponse;
                toAminoMsg(message: _48.QueryBalanceResponse): _48.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _48.QueryBalanceResponseProtoMsg): _48.QueryBalanceResponse;
                toProto(message: _48.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _48.QueryBalanceResponse): _48.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _48.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryAllBalancesRequest;
                fromPartial(object: Partial<_48.QueryAllBalancesRequest>): _48.QueryAllBalancesRequest;
                fromAmino(object: _48.QueryAllBalancesRequestAmino): _48.QueryAllBalancesRequest;
                toAmino(message: _48.QueryAllBalancesRequest): _48.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _48.QueryAllBalancesRequestAminoMsg): _48.QueryAllBalancesRequest;
                toAminoMsg(message: _48.QueryAllBalancesRequest): _48.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAllBalancesRequestProtoMsg): _48.QueryAllBalancesRequest;
                toProto(message: _48.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAllBalancesRequest): _48.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _48.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryAllBalancesResponse;
                fromPartial(object: Partial<_48.QueryAllBalancesResponse>): _48.QueryAllBalancesResponse;
                fromAmino(object: _48.QueryAllBalancesResponseAmino): _48.QueryAllBalancesResponse;
                toAmino(message: _48.QueryAllBalancesResponse): _48.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _48.QueryAllBalancesResponseAminoMsg): _48.QueryAllBalancesResponse;
                toAminoMsg(message: _48.QueryAllBalancesResponse): _48.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _48.QueryAllBalancesResponseProtoMsg): _48.QueryAllBalancesResponse;
                toProto(message: _48.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _48.QueryAllBalancesResponse): _48.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _48.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_48.QuerySpendableBalancesRequest>): _48.QuerySpendableBalancesRequest;
                fromAmino(object: _48.QuerySpendableBalancesRequestAmino): _48.QuerySpendableBalancesRequest;
                toAmino(message: _48.QuerySpendableBalancesRequest): _48.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _48.QuerySpendableBalancesRequestAminoMsg): _48.QuerySpendableBalancesRequest;
                toAminoMsg(message: _48.QuerySpendableBalancesRequest): _48.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _48.QuerySpendableBalancesRequestProtoMsg): _48.QuerySpendableBalancesRequest;
                toProto(message: _48.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _48.QuerySpendableBalancesRequest): _48.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _48.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_48.QuerySpendableBalancesResponse>): _48.QuerySpendableBalancesResponse;
                fromAmino(object: _48.QuerySpendableBalancesResponseAmino): _48.QuerySpendableBalancesResponse;
                toAmino(message: _48.QuerySpendableBalancesResponse): _48.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _48.QuerySpendableBalancesResponseAminoMsg): _48.QuerySpendableBalancesResponse;
                toAminoMsg(message: _48.QuerySpendableBalancesResponse): _48.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _48.QuerySpendableBalancesResponseProtoMsg): _48.QuerySpendableBalancesResponse;
                toProto(message: _48.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _48.QuerySpendableBalancesResponse): _48.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _48.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_48.QueryTotalSupplyRequest>): _48.QueryTotalSupplyRequest;
                fromAmino(object: _48.QueryTotalSupplyRequestAmino): _48.QueryTotalSupplyRequest;
                toAmino(message: _48.QueryTotalSupplyRequest): _48.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _48.QueryTotalSupplyRequestAminoMsg): _48.QueryTotalSupplyRequest;
                toAminoMsg(message: _48.QueryTotalSupplyRequest): _48.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _48.QueryTotalSupplyRequestProtoMsg): _48.QueryTotalSupplyRequest;
                toProto(message: _48.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _48.QueryTotalSupplyRequest): _48.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _48.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_48.QueryTotalSupplyResponse>): _48.QueryTotalSupplyResponse;
                fromAmino(object: _48.QueryTotalSupplyResponseAmino): _48.QueryTotalSupplyResponse;
                toAmino(message: _48.QueryTotalSupplyResponse): _48.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _48.QueryTotalSupplyResponseAminoMsg): _48.QueryTotalSupplyResponse;
                toAminoMsg(message: _48.QueryTotalSupplyResponse): _48.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _48.QueryTotalSupplyResponseProtoMsg): _48.QueryTotalSupplyResponse;
                toProto(message: _48.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _48.QueryTotalSupplyResponse): _48.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _48.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QuerySupplyOfRequest;
                fromPartial(object: Partial<_48.QuerySupplyOfRequest>): _48.QuerySupplyOfRequest;
                fromAmino(object: _48.QuerySupplyOfRequestAmino): _48.QuerySupplyOfRequest;
                toAmino(message: _48.QuerySupplyOfRequest): _48.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _48.QuerySupplyOfRequestAminoMsg): _48.QuerySupplyOfRequest;
                toAminoMsg(message: _48.QuerySupplyOfRequest): _48.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _48.QuerySupplyOfRequestProtoMsg): _48.QuerySupplyOfRequest;
                toProto(message: _48.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _48.QuerySupplyOfRequest): _48.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _48.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QuerySupplyOfResponse;
                fromPartial(object: Partial<_48.QuerySupplyOfResponse>): _48.QuerySupplyOfResponse;
                fromAmino(object: _48.QuerySupplyOfResponseAmino): _48.QuerySupplyOfResponse;
                toAmino(message: _48.QuerySupplyOfResponse): _48.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _48.QuerySupplyOfResponseAminoMsg): _48.QuerySupplyOfResponse;
                toAminoMsg(message: _48.QuerySupplyOfResponse): _48.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _48.QuerySupplyOfResponseProtoMsg): _48.QuerySupplyOfResponse;
                toProto(message: _48.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _48.QuerySupplyOfResponse): _48.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _48.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryParamsRequest;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
                fromAmino(_: _48.QueryParamsRequestAmino): _48.QueryParamsRequest;
                toAmino(_: _48.QueryParamsRequest): _48.QueryParamsRequestAmino;
                fromAminoMsg(object: _48.QueryParamsRequestAminoMsg): _48.QueryParamsRequest;
                toAminoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryParamsRequestProtoMsg): _48.QueryParamsRequest;
                toProto(message: _48.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _48.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryParamsResponse;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
                fromAmino(object: _48.QueryParamsResponseAmino): _48.QueryParamsResponse;
                toAmino(message: _48.QueryParamsResponse): _48.QueryParamsResponseAmino;
                fromAminoMsg(object: _48.QueryParamsResponseAminoMsg): _48.QueryParamsResponse;
                toAminoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryParamsResponseProtoMsg): _48.QueryParamsResponse;
                toProto(message: _48.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _48.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_48.QueryDenomsMetadataRequest>): _48.QueryDenomsMetadataRequest;
                fromAmino(object: _48.QueryDenomsMetadataRequestAmino): _48.QueryDenomsMetadataRequest;
                toAmino(message: _48.QueryDenomsMetadataRequest): _48.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _48.QueryDenomsMetadataRequestAminoMsg): _48.QueryDenomsMetadataRequest;
                toAminoMsg(message: _48.QueryDenomsMetadataRequest): _48.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDenomsMetadataRequestProtoMsg): _48.QueryDenomsMetadataRequest;
                toProto(message: _48.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDenomsMetadataRequest): _48.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _48.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_48.QueryDenomsMetadataResponse>): _48.QueryDenomsMetadataResponse;
                fromAmino(object: _48.QueryDenomsMetadataResponseAmino): _48.QueryDenomsMetadataResponse;
                toAmino(message: _48.QueryDenomsMetadataResponse): _48.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _48.QueryDenomsMetadataResponseAminoMsg): _48.QueryDenomsMetadataResponse;
                toAminoMsg(message: _48.QueryDenomsMetadataResponse): _48.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDenomsMetadataResponseProtoMsg): _48.QueryDenomsMetadataResponse;
                toProto(message: _48.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDenomsMetadataResponse): _48.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _48.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_48.QueryDenomMetadataRequest>): _48.QueryDenomMetadataRequest;
                fromAmino(object: _48.QueryDenomMetadataRequestAmino): _48.QueryDenomMetadataRequest;
                toAmino(message: _48.QueryDenomMetadataRequest): _48.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _48.QueryDenomMetadataRequestAminoMsg): _48.QueryDenomMetadataRequest;
                toAminoMsg(message: _48.QueryDenomMetadataRequest): _48.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDenomMetadataRequestProtoMsg): _48.QueryDenomMetadataRequest;
                toProto(message: _48.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDenomMetadataRequest): _48.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _48.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_48.QueryDenomMetadataResponse>): _48.QueryDenomMetadataResponse;
                fromAmino(object: _48.QueryDenomMetadataResponseAmino): _48.QueryDenomMetadataResponse;
                toAmino(message: _48.QueryDenomMetadataResponse): _48.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _48.QueryDenomMetadataResponseAminoMsg): _48.QueryDenomMetadataResponse;
                toAminoMsg(message: _48.QueryDenomMetadataResponse): _48.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDenomMetadataResponseProtoMsg): _48.QueryDenomMetadataResponse;
                toProto(message: _48.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDenomMetadataResponse): _48.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _48.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_48.QueryDenomOwnersRequest>): _48.QueryDenomOwnersRequest;
                fromAmino(object: _48.QueryDenomOwnersRequestAmino): _48.QueryDenomOwnersRequest;
                toAmino(message: _48.QueryDenomOwnersRequest): _48.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _48.QueryDenomOwnersRequestAminoMsg): _48.QueryDenomOwnersRequest;
                toAminoMsg(message: _48.QueryDenomOwnersRequest): _48.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDenomOwnersRequestProtoMsg): _48.QueryDenomOwnersRequest;
                toProto(message: _48.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDenomOwnersRequest): _48.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _48.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.DenomOwner;
                fromPartial(object: Partial<_48.DenomOwner>): _48.DenomOwner;
                fromAmino(object: _48.DenomOwnerAmino): _48.DenomOwner;
                toAmino(message: _48.DenomOwner): _48.DenomOwnerAmino;
                fromAminoMsg(object: _48.DenomOwnerAminoMsg): _48.DenomOwner;
                toAminoMsg(message: _48.DenomOwner): _48.DenomOwnerAminoMsg;
                fromProtoMsg(message: _48.DenomOwnerProtoMsg): _48.DenomOwner;
                toProto(message: _48.DenomOwner): Uint8Array;
                toProtoMsg(message: _48.DenomOwner): _48.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _48.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_48.QueryDenomOwnersResponse>): _48.QueryDenomOwnersResponse;
                fromAmino(object: _48.QueryDenomOwnersResponseAmino): _48.QueryDenomOwnersResponse;
                toAmino(message: _48.QueryDenomOwnersResponse): _48.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _48.QueryDenomOwnersResponseAminoMsg): _48.QueryDenomOwnersResponse;
                toAminoMsg(message: _48.QueryDenomOwnersResponse): _48.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDenomOwnersResponseProtoMsg): _48.QueryDenomOwnersResponse;
                toProto(message: _48.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDenomOwnersResponse): _48.QueryDenomOwnersResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _47.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.Balance;
                fromPartial(object: Partial<_47.Balance>): _47.Balance;
                fromAmino(object: _47.BalanceAmino): _47.Balance;
                toAmino(message: _47.Balance): _47.BalanceAmino;
                fromAminoMsg(object: _47.BalanceAminoMsg): _47.Balance;
                toAminoMsg(message: _47.Balance): _47.BalanceAminoMsg;
                fromProtoMsg(message: _47.BalanceProtoMsg): _47.Balance;
                toProto(message: _47.Balance): Uint8Array;
                toProtoMsg(message: _47.Balance): _47.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _46.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Params;
                fromPartial(object: Partial<_46.Params>): _46.Params;
                fromAmino(object: _46.ParamsAmino): _46.Params;
                toAmino(message: _46.Params): _46.ParamsAmino;
                fromAminoMsg(object: _46.ParamsAminoMsg): _46.Params;
                toAminoMsg(message: _46.Params): _46.ParamsAminoMsg;
                fromProtoMsg(message: _46.ParamsProtoMsg): _46.Params;
                toProto(message: _46.Params): Uint8Array;
                toProtoMsg(message: _46.Params): _46.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _46.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.SendEnabled;
                fromPartial(object: Partial<_46.SendEnabled>): _46.SendEnabled;
                fromAmino(object: _46.SendEnabledAmino): _46.SendEnabled;
                toAmino(message: _46.SendEnabled): _46.SendEnabledAmino;
                fromAminoMsg(object: _46.SendEnabledAminoMsg): _46.SendEnabled;
                toAminoMsg(message: _46.SendEnabled): _46.SendEnabledAminoMsg;
                fromProtoMsg(message: _46.SendEnabledProtoMsg): _46.SendEnabled;
                toProto(message: _46.SendEnabled): Uint8Array;
                toProtoMsg(message: _46.SendEnabled): _46.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _46.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Input;
                fromPartial(object: Partial<_46.Input>): _46.Input;
                fromAmino(object: _46.InputAmino): _46.Input;
                toAmino(message: _46.Input): _46.InputAmino;
                fromAminoMsg(object: _46.InputAminoMsg): _46.Input;
                toAminoMsg(message: _46.Input): _46.InputAminoMsg;
                fromProtoMsg(message: _46.InputProtoMsg): _46.Input;
                toProto(message: _46.Input): Uint8Array;
                toProtoMsg(message: _46.Input): _46.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _46.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Output;
                fromPartial(object: Partial<_46.Output>): _46.Output;
                fromAmino(object: _46.OutputAmino): _46.Output;
                toAmino(message: _46.Output): _46.OutputAmino;
                fromAminoMsg(object: _46.OutputAminoMsg): _46.Output;
                toAminoMsg(message: _46.Output): _46.OutputAminoMsg;
                fromProtoMsg(message: _46.OutputProtoMsg): _46.Output;
                toProto(message: _46.Output): Uint8Array;
                toProtoMsg(message: _46.Output): _46.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _46.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Supply;
                fromPartial(object: Partial<_46.Supply>): _46.Supply;
                fromAmino(object: _46.SupplyAmino): _46.Supply;
                toAmino(message: _46.Supply): _46.SupplyAmino;
                fromAminoMsg(object: _46.SupplyAminoMsg): _46.Supply;
                toAminoMsg(message: _46.Supply): _46.SupplyAminoMsg;
                fromProtoMsg(message: _46.SupplyProtoMsg): _46.Supply;
                toProto(message: _46.Supply): Uint8Array;
                toProtoMsg(message: _46.Supply): _46.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _46.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.DenomUnit;
                fromPartial(object: Partial<_46.DenomUnit>): _46.DenomUnit;
                fromAmino(object: _46.DenomUnitAmino): _46.DenomUnit;
                toAmino(message: _46.DenomUnit): _46.DenomUnitAmino;
                fromAminoMsg(object: _46.DenomUnitAminoMsg): _46.DenomUnit;
                toAminoMsg(message: _46.DenomUnit): _46.DenomUnitAminoMsg;
                fromProtoMsg(message: _46.DenomUnitProtoMsg): _46.DenomUnit;
                toProto(message: _46.DenomUnit): Uint8Array;
                toProtoMsg(message: _46.DenomUnit): _46.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _46.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Metadata;
                fromPartial(object: Partial<_46.Metadata>): _46.Metadata;
                fromAmino(object: _46.MetadataAmino): _46.Metadata;
                toAmino(message: _46.Metadata): _46.MetadataAmino;
                fromAminoMsg(object: _46.MetadataAminoMsg): _46.Metadata;
                toAminoMsg(message: _46.Metadata): _46.MetadataAminoMsg;
                fromProtoMsg(message: _46.MetadataProtoMsg): _46.Metadata;
                toProto(message: _46.Metadata): Uint8Array;
                toProtoMsg(message: _46.Metadata): _46.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _45.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.SendAuthorization;
                fromPartial(object: Partial<_45.SendAuthorization>): _45.SendAuthorization;
                fromAmino(object: _45.SendAuthorizationAmino): _45.SendAuthorization;
                toAmino(message: _45.SendAuthorization): _45.SendAuthorizationAmino;
                fromAminoMsg(object: _45.SendAuthorizationAminoMsg): _45.SendAuthorization;
                toAminoMsg(message: _45.SendAuthorization): _45.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _45.SendAuthorizationProtoMsg): _45.SendAuthorization;
                toProto(message: _45.SendAuthorization): Uint8Array;
                toProtoMsg(message: _45.SendAuthorization): _45.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _50.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.TxResponse;
                    fromPartial(object: Partial<_50.TxResponse>): _50.TxResponse;
                    fromAmino(object: _50.TxResponseAmino): _50.TxResponse;
                    toAmino(message: _50.TxResponse): _50.TxResponseAmino;
                    fromAminoMsg(object: _50.TxResponseAminoMsg): _50.TxResponse;
                    toAminoMsg(message: _50.TxResponse): _50.TxResponseAminoMsg;
                    fromProtoMsg(message: _50.TxResponseProtoMsg): _50.TxResponse;
                    toProto(message: _50.TxResponse): Uint8Array;
                    toProtoMsg(message: _50.TxResponse): _50.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _50.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.ABCIMessageLog;
                    fromPartial(object: Partial<_50.ABCIMessageLog>): _50.ABCIMessageLog;
                    fromAmino(object: _50.ABCIMessageLogAmino): _50.ABCIMessageLog;
                    toAmino(message: _50.ABCIMessageLog): _50.ABCIMessageLogAmino;
                    fromAminoMsg(object: _50.ABCIMessageLogAminoMsg): _50.ABCIMessageLog;
                    toAminoMsg(message: _50.ABCIMessageLog): _50.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _50.ABCIMessageLogProtoMsg): _50.ABCIMessageLog;
                    toProto(message: _50.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _50.ABCIMessageLog): _50.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _50.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.StringEvent;
                    fromPartial(object: Partial<_50.StringEvent>): _50.StringEvent;
                    fromAmino(object: _50.StringEventAmino): _50.StringEvent;
                    toAmino(message: _50.StringEvent): _50.StringEventAmino;
                    fromAminoMsg(object: _50.StringEventAminoMsg): _50.StringEvent;
                    toAminoMsg(message: _50.StringEvent): _50.StringEventAminoMsg;
                    fromProtoMsg(message: _50.StringEventProtoMsg): _50.StringEvent;
                    toProto(message: _50.StringEvent): Uint8Array;
                    toProtoMsg(message: _50.StringEvent): _50.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _50.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.Attribute;
                    fromPartial(object: Partial<_50.Attribute>): _50.Attribute;
                    fromAmino(object: _50.AttributeAmino): _50.Attribute;
                    toAmino(message: _50.Attribute): _50.AttributeAmino;
                    fromAminoMsg(object: _50.AttributeAminoMsg): _50.Attribute;
                    toAminoMsg(message: _50.Attribute): _50.AttributeAminoMsg;
                    fromProtoMsg(message: _50.AttributeProtoMsg): _50.Attribute;
                    toProto(message: _50.Attribute): Uint8Array;
                    toProtoMsg(message: _50.Attribute): _50.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _50.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.GasInfo;
                    fromPartial(object: Partial<_50.GasInfo>): _50.GasInfo;
                    fromAmino(object: _50.GasInfoAmino): _50.GasInfo;
                    toAmino(message: _50.GasInfo): _50.GasInfoAmino;
                    fromAminoMsg(object: _50.GasInfoAminoMsg): _50.GasInfo;
                    toAminoMsg(message: _50.GasInfo): _50.GasInfoAminoMsg;
                    fromProtoMsg(message: _50.GasInfoProtoMsg): _50.GasInfo;
                    toProto(message: _50.GasInfo): Uint8Array;
                    toProtoMsg(message: _50.GasInfo): _50.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _50.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.Result;
                    fromPartial(object: Partial<_50.Result>): _50.Result;
                    fromAmino(object: _50.ResultAmino): _50.Result;
                    toAmino(message: _50.Result): _50.ResultAmino;
                    fromAminoMsg(object: _50.ResultAminoMsg): _50.Result;
                    toAminoMsg(message: _50.Result): _50.ResultAminoMsg;
                    fromProtoMsg(message: _50.ResultProtoMsg): _50.Result;
                    toProto(message: _50.Result): Uint8Array;
                    toProtoMsg(message: _50.Result): _50.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _50.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.SimulationResponse;
                    fromPartial(object: Partial<_50.SimulationResponse>): _50.SimulationResponse;
                    fromAmino(object: _50.SimulationResponseAmino): _50.SimulationResponse;
                    toAmino(message: _50.SimulationResponse): _50.SimulationResponseAmino;
                    fromAminoMsg(object: _50.SimulationResponseAminoMsg): _50.SimulationResponse;
                    toAminoMsg(message: _50.SimulationResponse): _50.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _50.SimulationResponseProtoMsg): _50.SimulationResponse;
                    toProto(message: _50.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _50.SimulationResponse): _50.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _50.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.MsgData;
                    fromPartial(object: Partial<_50.MsgData>): _50.MsgData;
                    fromAmino(object: _50.MsgDataAmino): _50.MsgData;
                    toAmino(message: _50.MsgData): _50.MsgDataAmino;
                    fromAminoMsg(object: _50.MsgDataAminoMsg): _50.MsgData;
                    toAminoMsg(message: _50.MsgData): _50.MsgDataAminoMsg;
                    fromProtoMsg(message: _50.MsgDataProtoMsg): _50.MsgData;
                    toProto(message: _50.MsgData): Uint8Array;
                    toProtoMsg(message: _50.MsgData): _50.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _50.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.TxMsgData;
                    fromPartial(object: Partial<_50.TxMsgData>): _50.TxMsgData;
                    fromAmino(object: _50.TxMsgDataAmino): _50.TxMsgData;
                    toAmino(message: _50.TxMsgData): _50.TxMsgDataAmino;
                    fromAminoMsg(object: _50.TxMsgDataAminoMsg): _50.TxMsgData;
                    toAminoMsg(message: _50.TxMsgData): _50.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _50.TxMsgDataProtoMsg): _50.TxMsgData;
                    toProto(message: _50.TxMsgData): Uint8Array;
                    toProtoMsg(message: _50.TxMsgData): _50.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _50.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.SearchTxsResult;
                    fromPartial(object: Partial<_50.SearchTxsResult>): _50.SearchTxsResult;
                    fromAmino(object: _50.SearchTxsResultAmino): _50.SearchTxsResult;
                    toAmino(message: _50.SearchTxsResult): _50.SearchTxsResultAmino;
                    fromAminoMsg(object: _50.SearchTxsResultAminoMsg): _50.SearchTxsResult;
                    toAminoMsg(message: _50.SearchTxsResult): _50.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _50.SearchTxsResultProtoMsg): _50.SearchTxsResult;
                    toProto(message: _50.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _50.SearchTxsResult): _50.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _51.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.Pairs;
                    fromPartial(object: Partial<_51.Pairs>): _51.Pairs;
                    fromAmino(object: _51.PairsAmino): _51.Pairs;
                    toAmino(message: _51.Pairs): _51.PairsAmino;
                    fromAminoMsg(object: _51.PairsAminoMsg): _51.Pairs;
                    toAminoMsg(message: _51.Pairs): _51.PairsAminoMsg;
                    fromProtoMsg(message: _51.PairsProtoMsg): _51.Pairs;
                    toProto(message: _51.Pairs): Uint8Array;
                    toProtoMsg(message: _51.Pairs): _51.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _51.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.Pair;
                    fromPartial(object: Partial<_51.Pair>): _51.Pair;
                    fromAmino(object: _51.PairAmino): _51.Pair;
                    toAmino(message: _51.Pair): _51.PairAmino;
                    fromAminoMsg(object: _51.PairAminoMsg): _51.Pair;
                    toAminoMsg(message: _51.Pair): _51.PairAminoMsg;
                    fromProtoMsg(message: _51.PairProtoMsg): _51.Pair;
                    toProto(message: _51.Pair): Uint8Array;
                    toProtoMsg(message: _51.Pair): _51.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _234.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _52.ConfigRequest): Promise<_52.ConfigResponse>;
                };
                LCDQueryClient: typeof _215.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _52.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _52.ConfigRequest;
                    fromPartial(_: Partial<_52.ConfigRequest>): _52.ConfigRequest;
                    fromAmino(_: _52.ConfigRequestAmino): _52.ConfigRequest;
                    toAmino(_: _52.ConfigRequest): _52.ConfigRequestAmino;
                    fromAminoMsg(object: _52.ConfigRequestAminoMsg): _52.ConfigRequest;
                    toAminoMsg(message: _52.ConfigRequest): _52.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _52.ConfigRequestProtoMsg): _52.ConfigRequest;
                    toProto(message: _52.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _52.ConfigRequest): _52.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _52.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.ConfigResponse;
                    fromPartial(object: Partial<_52.ConfigResponse>): _52.ConfigResponse;
                    fromAmino(object: _52.ConfigResponseAmino): _52.ConfigResponse;
                    toAmino(message: _52.ConfigResponse): _52.ConfigResponseAmino;
                    fromAminoMsg(object: _52.ConfigResponseAminoMsg): _52.ConfigResponse;
                    toAminoMsg(message: _52.ConfigResponse): _52.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _52.ConfigResponseProtoMsg): _52.ConfigResponse;
                    toProto(message: _52.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _52.ConfigResponse): _52.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _53.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.PageRequest;
                    fromPartial(object: Partial<_53.PageRequest>): _53.PageRequest;
                    fromAmino(object: _53.PageRequestAmino): _53.PageRequest;
                    toAmino(message: _53.PageRequest): _53.PageRequestAmino;
                    fromAminoMsg(object: _53.PageRequestAminoMsg): _53.PageRequest;
                    toAminoMsg(message: _53.PageRequest): _53.PageRequestAminoMsg;
                    fromProtoMsg(message: _53.PageRequestProtoMsg): _53.PageRequest;
                    toProto(message: _53.PageRequest): Uint8Array;
                    toProtoMsg(message: _53.PageRequest): _53.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _53.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.PageResponse;
                    fromPartial(object: Partial<_53.PageResponse>): _53.PageResponse;
                    fromAmino(object: _53.PageResponseAmino): _53.PageResponse;
                    toAmino(message: _53.PageResponse): _53.PageResponseAmino;
                    fromAminoMsg(object: _53.PageResponseAminoMsg): _53.PageResponse;
                    toAminoMsg(message: _53.PageResponse): _53.PageResponseAminoMsg;
                    fromProtoMsg(message: _53.PageResponseProtoMsg): _53.PageResponse;
                    toProto(message: _53.PageResponse): Uint8Array;
                    toProtoMsg(message: _53.PageResponse): _53.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _54.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _54.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_54.ListAllInterfacesRequest>): _54.ListAllInterfacesRequest;
                    fromAmino(_: _54.ListAllInterfacesRequestAmino): _54.ListAllInterfacesRequest;
                    toAmino(_: _54.ListAllInterfacesRequest): _54.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _54.ListAllInterfacesRequestAminoMsg): _54.ListAllInterfacesRequest;
                    toAminoMsg(message: _54.ListAllInterfacesRequest): _54.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _54.ListAllInterfacesRequestProtoMsg): _54.ListAllInterfacesRequest;
                    toProto(message: _54.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _54.ListAllInterfacesRequest): _54.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _54.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_54.ListAllInterfacesResponse>): _54.ListAllInterfacesResponse;
                    fromAmino(object: _54.ListAllInterfacesResponseAmino): _54.ListAllInterfacesResponse;
                    toAmino(message: _54.ListAllInterfacesResponse): _54.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _54.ListAllInterfacesResponseAminoMsg): _54.ListAllInterfacesResponse;
                    toAminoMsg(message: _54.ListAllInterfacesResponse): _54.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _54.ListAllInterfacesResponseProtoMsg): _54.ListAllInterfacesResponse;
                    toProto(message: _54.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _54.ListAllInterfacesResponse): _54.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _54.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.ListImplementationsRequest;
                    fromPartial(object: Partial<_54.ListImplementationsRequest>): _54.ListImplementationsRequest;
                    fromAmino(object: _54.ListImplementationsRequestAmino): _54.ListImplementationsRequest;
                    toAmino(message: _54.ListImplementationsRequest): _54.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _54.ListImplementationsRequestAminoMsg): _54.ListImplementationsRequest;
                    toAminoMsg(message: _54.ListImplementationsRequest): _54.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _54.ListImplementationsRequestProtoMsg): _54.ListImplementationsRequest;
                    toProto(message: _54.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _54.ListImplementationsRequest): _54.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _54.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.ListImplementationsResponse;
                    fromPartial(object: Partial<_54.ListImplementationsResponse>): _54.ListImplementationsResponse;
                    fromAmino(object: _54.ListImplementationsResponseAmino): _54.ListImplementationsResponse;
                    toAmino(message: _54.ListImplementationsResponse): _54.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _54.ListImplementationsResponseAminoMsg): _54.ListImplementationsResponse;
                    toAminoMsg(message: _54.ListImplementationsResponse): _54.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _54.ListImplementationsResponseProtoMsg): _54.ListImplementationsResponse;
                    toProto(message: _54.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _54.ListImplementationsResponse): _54.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _55.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.AppDescriptor;
                    fromPartial(object: Partial<_55.AppDescriptor>): _55.AppDescriptor;
                    fromAmino(object: _55.AppDescriptorAmino): _55.AppDescriptor;
                    toAmino(message: _55.AppDescriptor): _55.AppDescriptorAmino;
                    fromAminoMsg(object: _55.AppDescriptorAminoMsg): _55.AppDescriptor;
                    toAminoMsg(message: _55.AppDescriptor): _55.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _55.AppDescriptorProtoMsg): _55.AppDescriptor;
                    toProto(message: _55.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _55.AppDescriptor): _55.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _55.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.TxDescriptor;
                    fromPartial(object: Partial<_55.TxDescriptor>): _55.TxDescriptor;
                    fromAmino(object: _55.TxDescriptorAmino): _55.TxDescriptor;
                    toAmino(message: _55.TxDescriptor): _55.TxDescriptorAmino;
                    fromAminoMsg(object: _55.TxDescriptorAminoMsg): _55.TxDescriptor;
                    toAminoMsg(message: _55.TxDescriptor): _55.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _55.TxDescriptorProtoMsg): _55.TxDescriptor;
                    toProto(message: _55.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _55.TxDescriptor): _55.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _55.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.AuthnDescriptor;
                    fromPartial(object: Partial<_55.AuthnDescriptor>): _55.AuthnDescriptor;
                    fromAmino(object: _55.AuthnDescriptorAmino): _55.AuthnDescriptor;
                    toAmino(message: _55.AuthnDescriptor): _55.AuthnDescriptorAmino;
                    fromAminoMsg(object: _55.AuthnDescriptorAminoMsg): _55.AuthnDescriptor;
                    toAminoMsg(message: _55.AuthnDescriptor): _55.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _55.AuthnDescriptorProtoMsg): _55.AuthnDescriptor;
                    toProto(message: _55.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _55.AuthnDescriptor): _55.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _55.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.SigningModeDescriptor;
                    fromPartial(object: Partial<_55.SigningModeDescriptor>): _55.SigningModeDescriptor;
                    fromAmino(object: _55.SigningModeDescriptorAmino): _55.SigningModeDescriptor;
                    toAmino(message: _55.SigningModeDescriptor): _55.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _55.SigningModeDescriptorAminoMsg): _55.SigningModeDescriptor;
                    toAminoMsg(message: _55.SigningModeDescriptor): _55.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _55.SigningModeDescriptorProtoMsg): _55.SigningModeDescriptor;
                    toProto(message: _55.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _55.SigningModeDescriptor): _55.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _55.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.ChainDescriptor;
                    fromPartial(object: Partial<_55.ChainDescriptor>): _55.ChainDescriptor;
                    fromAmino(object: _55.ChainDescriptorAmino): _55.ChainDescriptor;
                    toAmino(message: _55.ChainDescriptor): _55.ChainDescriptorAmino;
                    fromAminoMsg(object: _55.ChainDescriptorAminoMsg): _55.ChainDescriptor;
                    toAminoMsg(message: _55.ChainDescriptor): _55.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _55.ChainDescriptorProtoMsg): _55.ChainDescriptor;
                    toProto(message: _55.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _55.ChainDescriptor): _55.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _55.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.CodecDescriptor;
                    fromPartial(object: Partial<_55.CodecDescriptor>): _55.CodecDescriptor;
                    fromAmino(object: _55.CodecDescriptorAmino): _55.CodecDescriptor;
                    toAmino(message: _55.CodecDescriptor): _55.CodecDescriptorAmino;
                    fromAminoMsg(object: _55.CodecDescriptorAminoMsg): _55.CodecDescriptor;
                    toAminoMsg(message: _55.CodecDescriptor): _55.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _55.CodecDescriptorProtoMsg): _55.CodecDescriptor;
                    toProto(message: _55.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _55.CodecDescriptor): _55.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _55.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.InterfaceDescriptor;
                    fromPartial(object: Partial<_55.InterfaceDescriptor>): _55.InterfaceDescriptor;
                    fromAmino(object: _55.InterfaceDescriptorAmino): _55.InterfaceDescriptor;
                    toAmino(message: _55.InterfaceDescriptor): _55.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _55.InterfaceDescriptorAminoMsg): _55.InterfaceDescriptor;
                    toAminoMsg(message: _55.InterfaceDescriptor): _55.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _55.InterfaceDescriptorProtoMsg): _55.InterfaceDescriptor;
                    toProto(message: _55.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _55.InterfaceDescriptor): _55.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _55.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_55.InterfaceImplementerDescriptor>): _55.InterfaceImplementerDescriptor;
                    fromAmino(object: _55.InterfaceImplementerDescriptorAmino): _55.InterfaceImplementerDescriptor;
                    toAmino(message: _55.InterfaceImplementerDescriptor): _55.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _55.InterfaceImplementerDescriptorAminoMsg): _55.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _55.InterfaceImplementerDescriptor): _55.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _55.InterfaceImplementerDescriptorProtoMsg): _55.InterfaceImplementerDescriptor;
                    toProto(message: _55.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _55.InterfaceImplementerDescriptor): _55.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _55.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_55.InterfaceAcceptingMessageDescriptor>): _55.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _55.InterfaceAcceptingMessageDescriptorAmino): _55.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _55.InterfaceAcceptingMessageDescriptor): _55.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _55.InterfaceAcceptingMessageDescriptorAminoMsg): _55.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _55.InterfaceAcceptingMessageDescriptor): _55.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _55.InterfaceAcceptingMessageDescriptorProtoMsg): _55.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _55.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _55.InterfaceAcceptingMessageDescriptor): _55.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _55.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.ConfigurationDescriptor;
                    fromPartial(object: Partial<_55.ConfigurationDescriptor>): _55.ConfigurationDescriptor;
                    fromAmino(object: _55.ConfigurationDescriptorAmino): _55.ConfigurationDescriptor;
                    toAmino(message: _55.ConfigurationDescriptor): _55.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _55.ConfigurationDescriptorAminoMsg): _55.ConfigurationDescriptor;
                    toAminoMsg(message: _55.ConfigurationDescriptor): _55.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _55.ConfigurationDescriptorProtoMsg): _55.ConfigurationDescriptor;
                    toProto(message: _55.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _55.ConfigurationDescriptor): _55.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _55.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.MsgDescriptor;
                    fromPartial(object: Partial<_55.MsgDescriptor>): _55.MsgDescriptor;
                    fromAmino(object: _55.MsgDescriptorAmino): _55.MsgDescriptor;
                    toAmino(message: _55.MsgDescriptor): _55.MsgDescriptorAmino;
                    fromAminoMsg(object: _55.MsgDescriptorAminoMsg): _55.MsgDescriptor;
                    toAminoMsg(message: _55.MsgDescriptor): _55.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _55.MsgDescriptorProtoMsg): _55.MsgDescriptor;
                    toProto(message: _55.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _55.MsgDescriptor): _55.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _55.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_55.GetAuthnDescriptorRequest>): _55.GetAuthnDescriptorRequest;
                    fromAmino(_: _55.GetAuthnDescriptorRequestAmino): _55.GetAuthnDescriptorRequest;
                    toAmino(_: _55.GetAuthnDescriptorRequest): _55.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _55.GetAuthnDescriptorRequestAminoMsg): _55.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _55.GetAuthnDescriptorRequest): _55.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _55.GetAuthnDescriptorRequestProtoMsg): _55.GetAuthnDescriptorRequest;
                    toProto(message: _55.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _55.GetAuthnDescriptorRequest): _55.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _55.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_55.GetAuthnDescriptorResponse>): _55.GetAuthnDescriptorResponse;
                    fromAmino(object: _55.GetAuthnDescriptorResponseAmino): _55.GetAuthnDescriptorResponse;
                    toAmino(message: _55.GetAuthnDescriptorResponse): _55.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _55.GetAuthnDescriptorResponseAminoMsg): _55.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _55.GetAuthnDescriptorResponse): _55.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _55.GetAuthnDescriptorResponseProtoMsg): _55.GetAuthnDescriptorResponse;
                    toProto(message: _55.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _55.GetAuthnDescriptorResponse): _55.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _55.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_55.GetChainDescriptorRequest>): _55.GetChainDescriptorRequest;
                    fromAmino(_: _55.GetChainDescriptorRequestAmino): _55.GetChainDescriptorRequest;
                    toAmino(_: _55.GetChainDescriptorRequest): _55.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _55.GetChainDescriptorRequestAminoMsg): _55.GetChainDescriptorRequest;
                    toAminoMsg(message: _55.GetChainDescriptorRequest): _55.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _55.GetChainDescriptorRequestProtoMsg): _55.GetChainDescriptorRequest;
                    toProto(message: _55.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _55.GetChainDescriptorRequest): _55.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _55.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_55.GetChainDescriptorResponse>): _55.GetChainDescriptorResponse;
                    fromAmino(object: _55.GetChainDescriptorResponseAmino): _55.GetChainDescriptorResponse;
                    toAmino(message: _55.GetChainDescriptorResponse): _55.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _55.GetChainDescriptorResponseAminoMsg): _55.GetChainDescriptorResponse;
                    toAminoMsg(message: _55.GetChainDescriptorResponse): _55.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _55.GetChainDescriptorResponseProtoMsg): _55.GetChainDescriptorResponse;
                    toProto(message: _55.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _55.GetChainDescriptorResponse): _55.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _55.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_55.GetCodecDescriptorRequest>): _55.GetCodecDescriptorRequest;
                    fromAmino(_: _55.GetCodecDescriptorRequestAmino): _55.GetCodecDescriptorRequest;
                    toAmino(_: _55.GetCodecDescriptorRequest): _55.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _55.GetCodecDescriptorRequestAminoMsg): _55.GetCodecDescriptorRequest;
                    toAminoMsg(message: _55.GetCodecDescriptorRequest): _55.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _55.GetCodecDescriptorRequestProtoMsg): _55.GetCodecDescriptorRequest;
                    toProto(message: _55.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _55.GetCodecDescriptorRequest): _55.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _55.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_55.GetCodecDescriptorResponse>): _55.GetCodecDescriptorResponse;
                    fromAmino(object: _55.GetCodecDescriptorResponseAmino): _55.GetCodecDescriptorResponse;
                    toAmino(message: _55.GetCodecDescriptorResponse): _55.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _55.GetCodecDescriptorResponseAminoMsg): _55.GetCodecDescriptorResponse;
                    toAminoMsg(message: _55.GetCodecDescriptorResponse): _55.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _55.GetCodecDescriptorResponseProtoMsg): _55.GetCodecDescriptorResponse;
                    toProto(message: _55.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _55.GetCodecDescriptorResponse): _55.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _55.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_55.GetConfigurationDescriptorRequest>): _55.GetConfigurationDescriptorRequest;
                    fromAmino(_: _55.GetConfigurationDescriptorRequestAmino): _55.GetConfigurationDescriptorRequest;
                    toAmino(_: _55.GetConfigurationDescriptorRequest): _55.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _55.GetConfigurationDescriptorRequestAminoMsg): _55.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _55.GetConfigurationDescriptorRequest): _55.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _55.GetConfigurationDescriptorRequestProtoMsg): _55.GetConfigurationDescriptorRequest;
                    toProto(message: _55.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _55.GetConfigurationDescriptorRequest): _55.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _55.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_55.GetConfigurationDescriptorResponse>): _55.GetConfigurationDescriptorResponse;
                    fromAmino(object: _55.GetConfigurationDescriptorResponseAmino): _55.GetConfigurationDescriptorResponse;
                    toAmino(message: _55.GetConfigurationDescriptorResponse): _55.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _55.GetConfigurationDescriptorResponseAminoMsg): _55.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _55.GetConfigurationDescriptorResponse): _55.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _55.GetConfigurationDescriptorResponseProtoMsg): _55.GetConfigurationDescriptorResponse;
                    toProto(message: _55.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _55.GetConfigurationDescriptorResponse): _55.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _55.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_55.GetQueryServicesDescriptorRequest>): _55.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _55.GetQueryServicesDescriptorRequestAmino): _55.GetQueryServicesDescriptorRequest;
                    toAmino(_: _55.GetQueryServicesDescriptorRequest): _55.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _55.GetQueryServicesDescriptorRequestAminoMsg): _55.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _55.GetQueryServicesDescriptorRequest): _55.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _55.GetQueryServicesDescriptorRequestProtoMsg): _55.GetQueryServicesDescriptorRequest;
                    toProto(message: _55.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _55.GetQueryServicesDescriptorRequest): _55.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _55.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_55.GetQueryServicesDescriptorResponse>): _55.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _55.GetQueryServicesDescriptorResponseAmino): _55.GetQueryServicesDescriptorResponse;
                    toAmino(message: _55.GetQueryServicesDescriptorResponse): _55.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _55.GetQueryServicesDescriptorResponseAminoMsg): _55.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _55.GetQueryServicesDescriptorResponse): _55.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _55.GetQueryServicesDescriptorResponseProtoMsg): _55.GetQueryServicesDescriptorResponse;
                    toProto(message: _55.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _55.GetQueryServicesDescriptorResponse): _55.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _55.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_55.GetTxDescriptorRequest>): _55.GetTxDescriptorRequest;
                    fromAmino(_: _55.GetTxDescriptorRequestAmino): _55.GetTxDescriptorRequest;
                    toAmino(_: _55.GetTxDescriptorRequest): _55.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _55.GetTxDescriptorRequestAminoMsg): _55.GetTxDescriptorRequest;
                    toAminoMsg(message: _55.GetTxDescriptorRequest): _55.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _55.GetTxDescriptorRequestProtoMsg): _55.GetTxDescriptorRequest;
                    toProto(message: _55.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _55.GetTxDescriptorRequest): _55.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _55.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_55.GetTxDescriptorResponse>): _55.GetTxDescriptorResponse;
                    fromAmino(object: _55.GetTxDescriptorResponseAmino): _55.GetTxDescriptorResponse;
                    toAmino(message: _55.GetTxDescriptorResponse): _55.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _55.GetTxDescriptorResponseAminoMsg): _55.GetTxDescriptorResponse;
                    toAminoMsg(message: _55.GetTxDescriptorResponse): _55.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _55.GetTxDescriptorResponseProtoMsg): _55.GetTxDescriptorResponse;
                    toProto(message: _55.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _55.GetTxDescriptorResponse): _55.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _55.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.QueryServicesDescriptor;
                    fromPartial(object: Partial<_55.QueryServicesDescriptor>): _55.QueryServicesDescriptor;
                    fromAmino(object: _55.QueryServicesDescriptorAmino): _55.QueryServicesDescriptor;
                    toAmino(message: _55.QueryServicesDescriptor): _55.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _55.QueryServicesDescriptorAminoMsg): _55.QueryServicesDescriptor;
                    toAminoMsg(message: _55.QueryServicesDescriptor): _55.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _55.QueryServicesDescriptorProtoMsg): _55.QueryServicesDescriptor;
                    toProto(message: _55.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _55.QueryServicesDescriptor): _55.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _55.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.QueryServiceDescriptor;
                    fromPartial(object: Partial<_55.QueryServiceDescriptor>): _55.QueryServiceDescriptor;
                    fromAmino(object: _55.QueryServiceDescriptorAmino): _55.QueryServiceDescriptor;
                    toAmino(message: _55.QueryServiceDescriptor): _55.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _55.QueryServiceDescriptorAminoMsg): _55.QueryServiceDescriptor;
                    toAminoMsg(message: _55.QueryServiceDescriptor): _55.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _55.QueryServiceDescriptorProtoMsg): _55.QueryServiceDescriptor;
                    toProto(message: _55.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _55.QueryServiceDescriptor): _55.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _55.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.QueryMethodDescriptor;
                    fromPartial(object: Partial<_55.QueryMethodDescriptor>): _55.QueryMethodDescriptor;
                    fromAmino(object: _55.QueryMethodDescriptorAmino): _55.QueryMethodDescriptor;
                    toAmino(message: _55.QueryMethodDescriptor): _55.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _55.QueryMethodDescriptorAminoMsg): _55.QueryMethodDescriptor;
                    toAminoMsg(message: _55.QueryMethodDescriptor): _55.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _55.QueryMethodDescriptorProtoMsg): _55.QueryMethodDescriptor;
                    toProto(message: _55.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _55.QueryMethodDescriptor): _55.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _56.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.Snapshot;
                    fromPartial(object: Partial<_56.Snapshot>): _56.Snapshot;
                    fromAmino(object: _56.SnapshotAmino): _56.Snapshot;
                    toAmino(message: _56.Snapshot): _56.SnapshotAmino;
                    fromAminoMsg(object: _56.SnapshotAminoMsg): _56.Snapshot;
                    toAminoMsg(message: _56.Snapshot): _56.SnapshotAminoMsg;
                    fromProtoMsg(message: _56.SnapshotProtoMsg): _56.Snapshot;
                    toProto(message: _56.Snapshot): Uint8Array;
                    toProtoMsg(message: _56.Snapshot): _56.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _56.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.Metadata;
                    fromPartial(object: Partial<_56.Metadata>): _56.Metadata;
                    fromAmino(object: _56.MetadataAmino): _56.Metadata;
                    toAmino(message: _56.Metadata): _56.MetadataAmino;
                    fromAminoMsg(object: _56.MetadataAminoMsg): _56.Metadata;
                    toAminoMsg(message: _56.Metadata): _56.MetadataAminoMsg;
                    fromProtoMsg(message: _56.MetadataProtoMsg): _56.Metadata;
                    toProto(message: _56.Metadata): Uint8Array;
                    toProtoMsg(message: _56.Metadata): _56.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _56.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.SnapshotItem;
                    fromPartial(object: Partial<_56.SnapshotItem>): _56.SnapshotItem;
                    fromAmino(object: _56.SnapshotItemAmino): _56.SnapshotItem;
                    toAmino(message: _56.SnapshotItem): _56.SnapshotItemAmino;
                    fromAminoMsg(object: _56.SnapshotItemAminoMsg): _56.SnapshotItem;
                    toAminoMsg(message: _56.SnapshotItem): _56.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _56.SnapshotItemProtoMsg): _56.SnapshotItem;
                    toProto(message: _56.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _56.SnapshotItem): _56.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _56.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.SnapshotStoreItem;
                    fromPartial(object: Partial<_56.SnapshotStoreItem>): _56.SnapshotStoreItem;
                    fromAmino(object: _56.SnapshotStoreItemAmino): _56.SnapshotStoreItem;
                    toAmino(message: _56.SnapshotStoreItem): _56.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _56.SnapshotStoreItemAminoMsg): _56.SnapshotStoreItem;
                    toAminoMsg(message: _56.SnapshotStoreItem): _56.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _56.SnapshotStoreItemProtoMsg): _56.SnapshotStoreItem;
                    toProto(message: _56.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _56.SnapshotStoreItem): _56.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _56.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.SnapshotIAVLItem;
                    fromPartial(object: Partial<_56.SnapshotIAVLItem>): _56.SnapshotIAVLItem;
                    fromAmino(object: _56.SnapshotIAVLItemAmino): _56.SnapshotIAVLItem;
                    toAmino(message: _56.SnapshotIAVLItem): _56.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _56.SnapshotIAVLItemAminoMsg): _56.SnapshotIAVLItem;
                    toAminoMsg(message: _56.SnapshotIAVLItem): _56.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _56.SnapshotIAVLItemProtoMsg): _56.SnapshotIAVLItem;
                    toProto(message: _56.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _56.SnapshotIAVLItem): _56.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _56.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_56.SnapshotExtensionMeta>): _56.SnapshotExtensionMeta;
                    fromAmino(object: _56.SnapshotExtensionMetaAmino): _56.SnapshotExtensionMeta;
                    toAmino(message: _56.SnapshotExtensionMeta): _56.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _56.SnapshotExtensionMetaAminoMsg): _56.SnapshotExtensionMeta;
                    toAminoMsg(message: _56.SnapshotExtensionMeta): _56.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _56.SnapshotExtensionMetaProtoMsg): _56.SnapshotExtensionMeta;
                    toProto(message: _56.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _56.SnapshotExtensionMeta): _56.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _56.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_56.SnapshotExtensionPayload>): _56.SnapshotExtensionPayload;
                    fromAmino(object: _56.SnapshotExtensionPayloadAmino): _56.SnapshotExtensionPayload;
                    toAmino(message: _56.SnapshotExtensionPayload): _56.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _56.SnapshotExtensionPayloadAminoMsg): _56.SnapshotExtensionPayload;
                    toAminoMsg(message: _56.SnapshotExtensionPayload): _56.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _56.SnapshotExtensionPayloadProtoMsg): _56.SnapshotExtensionPayload;
                    toProto(message: _56.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _56.SnapshotExtensionPayload): _56.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _56.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.SnapshotKVItem;
                    fromPartial(object: Partial<_56.SnapshotKVItem>): _56.SnapshotKVItem;
                    fromAmino(object: _56.SnapshotKVItemAmino): _56.SnapshotKVItem;
                    toAmino(message: _56.SnapshotKVItem): _56.SnapshotKVItemAmino;
                    fromAminoMsg(object: _56.SnapshotKVItemAminoMsg): _56.SnapshotKVItem;
                    toAminoMsg(message: _56.SnapshotKVItem): _56.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _56.SnapshotKVItemProtoMsg): _56.SnapshotKVItem;
                    toProto(message: _56.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _56.SnapshotKVItem): _56.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _56.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.SnapshotSchema;
                    fromPartial(object: Partial<_56.SnapshotSchema>): _56.SnapshotSchema;
                    fromAmino(object: _56.SnapshotSchemaAmino): _56.SnapshotSchema;
                    toAmino(message: _56.SnapshotSchema): _56.SnapshotSchemaAmino;
                    fromAminoMsg(object: _56.SnapshotSchemaAminoMsg): _56.SnapshotSchema;
                    toAminoMsg(message: _56.SnapshotSchema): _56.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _56.SnapshotSchemaProtoMsg): _56.SnapshotSchema;
                    toProto(message: _56.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _56.SnapshotSchema): _56.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _58.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.StoreKVPair;
                    fromPartial(object: Partial<_58.StoreKVPair>): _58.StoreKVPair;
                    fromAmino(object: _58.StoreKVPairAmino): _58.StoreKVPair;
                    toAmino(message: _58.StoreKVPair): _58.StoreKVPairAmino;
                    fromAminoMsg(object: _58.StoreKVPairAminoMsg): _58.StoreKVPair;
                    toAminoMsg(message: _58.StoreKVPair): _58.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _58.StoreKVPairProtoMsg): _58.StoreKVPair;
                    toProto(message: _58.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _58.StoreKVPair): _58.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _58.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.BlockMetadata;
                    fromPartial(object: Partial<_58.BlockMetadata>): _58.BlockMetadata;
                    fromAmino(object: _58.BlockMetadataAmino): _58.BlockMetadata;
                    toAmino(message: _58.BlockMetadata): _58.BlockMetadataAmino;
                    fromAminoMsg(object: _58.BlockMetadataAminoMsg): _58.BlockMetadata;
                    toAminoMsg(message: _58.BlockMetadata): _58.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _58.BlockMetadataProtoMsg): _58.BlockMetadata;
                    toProto(message: _58.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _58.BlockMetadata): _58.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _58.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_58.BlockMetadata_DeliverTx>): _58.BlockMetadata_DeliverTx;
                    fromAmino(object: _58.BlockMetadata_DeliverTxAmino): _58.BlockMetadata_DeliverTx;
                    toAmino(message: _58.BlockMetadata_DeliverTx): _58.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _58.BlockMetadata_DeliverTxAminoMsg): _58.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _58.BlockMetadata_DeliverTx): _58.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _58.BlockMetadata_DeliverTxProtoMsg): _58.BlockMetadata_DeliverTx;
                    toProto(message: _58.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _58.BlockMetadata_DeliverTx): _58.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _57.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _57.CommitInfo;
                    fromPartial(object: Partial<_57.CommitInfo>): _57.CommitInfo;
                    fromAmino(object: _57.CommitInfoAmino): _57.CommitInfo;
                    toAmino(message: _57.CommitInfo): _57.CommitInfoAmino;
                    fromAminoMsg(object: _57.CommitInfoAminoMsg): _57.CommitInfo;
                    toAminoMsg(message: _57.CommitInfo): _57.CommitInfoAminoMsg;
                    fromProtoMsg(message: _57.CommitInfoProtoMsg): _57.CommitInfo;
                    toProto(message: _57.CommitInfo): Uint8Array;
                    toProtoMsg(message: _57.CommitInfo): _57.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _57.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _57.StoreInfo;
                    fromPartial(object: Partial<_57.StoreInfo>): _57.StoreInfo;
                    fromAmino(object: _57.StoreInfoAmino): _57.StoreInfo;
                    toAmino(message: _57.StoreInfo): _57.StoreInfoAmino;
                    fromAminoMsg(object: _57.StoreInfoAminoMsg): _57.StoreInfo;
                    toAminoMsg(message: _57.StoreInfo): _57.StoreInfoAminoMsg;
                    fromProtoMsg(message: _57.StoreInfoProtoMsg): _57.StoreInfo;
                    toProto(message: _57.StoreInfo): Uint8Array;
                    toProtoMsg(message: _57.StoreInfo): _57.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _57.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _57.CommitID;
                    fromPartial(object: Partial<_57.CommitID>): _57.CommitID;
                    fromAmino(object: _57.CommitIDAmino): _57.CommitID;
                    toAmino(message: _57.CommitID): _57.CommitIDAmino;
                    fromAminoMsg(object: _57.CommitIDAminoMsg): _57.CommitID;
                    toAminoMsg(message: _57.CommitID): _57.CommitIDAminoMsg;
                    fromProtoMsg(message: _57.CommitIDProtoMsg): _57.CommitID;
                    toProto(message: _57.CommitID): Uint8Array;
                    toProtoMsg(message: _57.CommitID): _57.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _235.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _59.GetNodeInfoRequest): Promise<_59.GetNodeInfoResponse>;
                    getSyncing(request?: _59.GetSyncingRequest): Promise<_59.GetSyncingResponse>;
                    getLatestBlock(request?: _59.GetLatestBlockRequest): Promise<_59.GetLatestBlockResponse>;
                    getBlockByHeight(request: _59.GetBlockByHeightRequest): Promise<_59.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _59.GetLatestValidatorSetRequest): Promise<_59.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _59.GetValidatorSetByHeightRequest): Promise<_59.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _59.ABCIQueryRequest): Promise<_59.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _216.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _60.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Block;
                    fromPartial(object: Partial<_60.Block>): _60.Block;
                    fromAmino(object: _60.BlockAmino): _60.Block;
                    toAmino(message: _60.Block): _60.BlockAmino;
                    fromAminoMsg(object: _60.BlockAminoMsg): _60.Block;
                    toAminoMsg(message: _60.Block): _60.BlockAminoMsg;
                    fromProtoMsg(message: _60.BlockProtoMsg): _60.Block;
                    toProto(message: _60.Block): Uint8Array;
                    toProtoMsg(message: _60.Block): _60.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _60.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Header;
                    fromPartial(object: Partial<_60.Header>): _60.Header;
                    fromAmino(object: _60.HeaderAmino): _60.Header;
                    toAmino(message: _60.Header): _60.HeaderAmino;
                    fromAminoMsg(object: _60.HeaderAminoMsg): _60.Header;
                    toAminoMsg(message: _60.Header): _60.HeaderAminoMsg;
                    fromProtoMsg(message: _60.HeaderProtoMsg): _60.Header;
                    toProto(message: _60.Header): Uint8Array;
                    toProtoMsg(message: _60.Header): _60.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _59.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_59.GetValidatorSetByHeightRequest>): _59.GetValidatorSetByHeightRequest;
                    fromAmino(object: _59.GetValidatorSetByHeightRequestAmino): _59.GetValidatorSetByHeightRequest;
                    toAmino(message: _59.GetValidatorSetByHeightRequest): _59.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _59.GetValidatorSetByHeightRequestAminoMsg): _59.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _59.GetValidatorSetByHeightRequest): _59.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _59.GetValidatorSetByHeightRequestProtoMsg): _59.GetValidatorSetByHeightRequest;
                    toProto(message: _59.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _59.GetValidatorSetByHeightRequest): _59.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _59.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_59.GetValidatorSetByHeightResponse>): _59.GetValidatorSetByHeightResponse;
                    fromAmino(object: _59.GetValidatorSetByHeightResponseAmino): _59.GetValidatorSetByHeightResponse;
                    toAmino(message: _59.GetValidatorSetByHeightResponse): _59.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _59.GetValidatorSetByHeightResponseAminoMsg): _59.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _59.GetValidatorSetByHeightResponse): _59.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _59.GetValidatorSetByHeightResponseProtoMsg): _59.GetValidatorSetByHeightResponse;
                    toProto(message: _59.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _59.GetValidatorSetByHeightResponse): _59.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _59.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_59.GetLatestValidatorSetRequest>): _59.GetLatestValidatorSetRequest;
                    fromAmino(object: _59.GetLatestValidatorSetRequestAmino): _59.GetLatestValidatorSetRequest;
                    toAmino(message: _59.GetLatestValidatorSetRequest): _59.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _59.GetLatestValidatorSetRequestAminoMsg): _59.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _59.GetLatestValidatorSetRequest): _59.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _59.GetLatestValidatorSetRequestProtoMsg): _59.GetLatestValidatorSetRequest;
                    toProto(message: _59.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _59.GetLatestValidatorSetRequest): _59.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _59.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_59.GetLatestValidatorSetResponse>): _59.GetLatestValidatorSetResponse;
                    fromAmino(object: _59.GetLatestValidatorSetResponseAmino): _59.GetLatestValidatorSetResponse;
                    toAmino(message: _59.GetLatestValidatorSetResponse): _59.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _59.GetLatestValidatorSetResponseAminoMsg): _59.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _59.GetLatestValidatorSetResponse): _59.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _59.GetLatestValidatorSetResponseProtoMsg): _59.GetLatestValidatorSetResponse;
                    toProto(message: _59.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _59.GetLatestValidatorSetResponse): _59.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _59.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.Validator;
                    fromPartial(object: Partial<_59.Validator>): _59.Validator;
                    fromAmino(object: _59.ValidatorAmino): _59.Validator;
                    toAmino(message: _59.Validator): _59.ValidatorAmino;
                    fromAminoMsg(object: _59.ValidatorAminoMsg): _59.Validator;
                    toAminoMsg(message: _59.Validator): _59.ValidatorAminoMsg;
                    fromProtoMsg(message: _59.ValidatorProtoMsg): _59.Validator;
                    toProto(message: _59.Validator): Uint8Array;
                    toProtoMsg(message: _59.Validator): _59.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _59.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_59.GetBlockByHeightRequest>): _59.GetBlockByHeightRequest;
                    fromAmino(object: _59.GetBlockByHeightRequestAmino): _59.GetBlockByHeightRequest;
                    toAmino(message: _59.GetBlockByHeightRequest): _59.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _59.GetBlockByHeightRequestAminoMsg): _59.GetBlockByHeightRequest;
                    toAminoMsg(message: _59.GetBlockByHeightRequest): _59.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _59.GetBlockByHeightRequestProtoMsg): _59.GetBlockByHeightRequest;
                    toProto(message: _59.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _59.GetBlockByHeightRequest): _59.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _59.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_59.GetBlockByHeightResponse>): _59.GetBlockByHeightResponse;
                    fromAmino(object: _59.GetBlockByHeightResponseAmino): _59.GetBlockByHeightResponse;
                    toAmino(message: _59.GetBlockByHeightResponse): _59.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _59.GetBlockByHeightResponseAminoMsg): _59.GetBlockByHeightResponse;
                    toAminoMsg(message: _59.GetBlockByHeightResponse): _59.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _59.GetBlockByHeightResponseProtoMsg): _59.GetBlockByHeightResponse;
                    toProto(message: _59.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _59.GetBlockByHeightResponse): _59.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _59.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _59.GetLatestBlockRequest;
                    fromPartial(_: Partial<_59.GetLatestBlockRequest>): _59.GetLatestBlockRequest;
                    fromAmino(_: _59.GetLatestBlockRequestAmino): _59.GetLatestBlockRequest;
                    toAmino(_: _59.GetLatestBlockRequest): _59.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _59.GetLatestBlockRequestAminoMsg): _59.GetLatestBlockRequest;
                    toAminoMsg(message: _59.GetLatestBlockRequest): _59.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _59.GetLatestBlockRequestProtoMsg): _59.GetLatestBlockRequest;
                    toProto(message: _59.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _59.GetLatestBlockRequest): _59.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _59.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetLatestBlockResponse;
                    fromPartial(object: Partial<_59.GetLatestBlockResponse>): _59.GetLatestBlockResponse;
                    fromAmino(object: _59.GetLatestBlockResponseAmino): _59.GetLatestBlockResponse;
                    toAmino(message: _59.GetLatestBlockResponse): _59.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _59.GetLatestBlockResponseAminoMsg): _59.GetLatestBlockResponse;
                    toAminoMsg(message: _59.GetLatestBlockResponse): _59.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _59.GetLatestBlockResponseProtoMsg): _59.GetLatestBlockResponse;
                    toProto(message: _59.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _59.GetLatestBlockResponse): _59.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _59.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _59.GetSyncingRequest;
                    fromPartial(_: Partial<_59.GetSyncingRequest>): _59.GetSyncingRequest;
                    fromAmino(_: _59.GetSyncingRequestAmino): _59.GetSyncingRequest;
                    toAmino(_: _59.GetSyncingRequest): _59.GetSyncingRequestAmino;
                    fromAminoMsg(object: _59.GetSyncingRequestAminoMsg): _59.GetSyncingRequest;
                    toAminoMsg(message: _59.GetSyncingRequest): _59.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _59.GetSyncingRequestProtoMsg): _59.GetSyncingRequest;
                    toProto(message: _59.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _59.GetSyncingRequest): _59.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _59.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetSyncingResponse;
                    fromPartial(object: Partial<_59.GetSyncingResponse>): _59.GetSyncingResponse;
                    fromAmino(object: _59.GetSyncingResponseAmino): _59.GetSyncingResponse;
                    toAmino(message: _59.GetSyncingResponse): _59.GetSyncingResponseAmino;
                    fromAminoMsg(object: _59.GetSyncingResponseAminoMsg): _59.GetSyncingResponse;
                    toAminoMsg(message: _59.GetSyncingResponse): _59.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _59.GetSyncingResponseProtoMsg): _59.GetSyncingResponse;
                    toProto(message: _59.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _59.GetSyncingResponse): _59.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _59.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _59.GetNodeInfoRequest;
                    fromPartial(_: Partial<_59.GetNodeInfoRequest>): _59.GetNodeInfoRequest;
                    fromAmino(_: _59.GetNodeInfoRequestAmino): _59.GetNodeInfoRequest;
                    toAmino(_: _59.GetNodeInfoRequest): _59.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _59.GetNodeInfoRequestAminoMsg): _59.GetNodeInfoRequest;
                    toAminoMsg(message: _59.GetNodeInfoRequest): _59.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _59.GetNodeInfoRequestProtoMsg): _59.GetNodeInfoRequest;
                    toProto(message: _59.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _59.GetNodeInfoRequest): _59.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _59.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetNodeInfoResponse;
                    fromPartial(object: Partial<_59.GetNodeInfoResponse>): _59.GetNodeInfoResponse;
                    fromAmino(object: _59.GetNodeInfoResponseAmino): _59.GetNodeInfoResponse;
                    toAmino(message: _59.GetNodeInfoResponse): _59.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _59.GetNodeInfoResponseAminoMsg): _59.GetNodeInfoResponse;
                    toAminoMsg(message: _59.GetNodeInfoResponse): _59.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _59.GetNodeInfoResponseProtoMsg): _59.GetNodeInfoResponse;
                    toProto(message: _59.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _59.GetNodeInfoResponse): _59.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _59.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.VersionInfo;
                    fromPartial(object: Partial<_59.VersionInfo>): _59.VersionInfo;
                    fromAmino(object: _59.VersionInfoAmino): _59.VersionInfo;
                    toAmino(message: _59.VersionInfo): _59.VersionInfoAmino;
                    fromAminoMsg(object: _59.VersionInfoAminoMsg): _59.VersionInfo;
                    toAminoMsg(message: _59.VersionInfo): _59.VersionInfoAminoMsg;
                    fromProtoMsg(message: _59.VersionInfoProtoMsg): _59.VersionInfo;
                    toProto(message: _59.VersionInfo): Uint8Array;
                    toProtoMsg(message: _59.VersionInfo): _59.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _59.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.Module;
                    fromPartial(object: Partial<_59.Module>): _59.Module;
                    fromAmino(object: _59.ModuleAmino): _59.Module;
                    toAmino(message: _59.Module): _59.ModuleAmino;
                    fromAminoMsg(object: _59.ModuleAminoMsg): _59.Module;
                    toAminoMsg(message: _59.Module): _59.ModuleAminoMsg;
                    fromProtoMsg(message: _59.ModuleProtoMsg): _59.Module;
                    toProto(message: _59.Module): Uint8Array;
                    toProtoMsg(message: _59.Module): _59.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _59.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.ABCIQueryRequest;
                    fromPartial(object: Partial<_59.ABCIQueryRequest>): _59.ABCIQueryRequest;
                    fromAmino(object: _59.ABCIQueryRequestAmino): _59.ABCIQueryRequest;
                    toAmino(message: _59.ABCIQueryRequest): _59.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _59.ABCIQueryRequestAminoMsg): _59.ABCIQueryRequest;
                    toAminoMsg(message: _59.ABCIQueryRequest): _59.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _59.ABCIQueryRequestProtoMsg): _59.ABCIQueryRequest;
                    toProto(message: _59.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _59.ABCIQueryRequest): _59.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _59.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.ABCIQueryResponse;
                    fromPartial(object: Partial<_59.ABCIQueryResponse>): _59.ABCIQueryResponse;
                    fromAmino(object: _59.ABCIQueryResponseAmino): _59.ABCIQueryResponse;
                    toAmino(message: _59.ABCIQueryResponse): _59.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _59.ABCIQueryResponseAminoMsg): _59.ABCIQueryResponse;
                    toAminoMsg(message: _59.ABCIQueryResponse): _59.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _59.ABCIQueryResponseProtoMsg): _59.ABCIQueryResponse;
                    toProto(message: _59.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _59.ABCIQueryResponse): _59.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _59.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.ProofOp;
                    fromPartial(object: Partial<_59.ProofOp>): _59.ProofOp;
                    fromAmino(object: _59.ProofOpAmino): _59.ProofOp;
                    toAmino(message: _59.ProofOp): _59.ProofOpAmino;
                    fromAminoMsg(object: _59.ProofOpAminoMsg): _59.ProofOp;
                    toAminoMsg(message: _59.ProofOp): _59.ProofOpAminoMsg;
                    fromProtoMsg(message: _59.ProofOpProtoMsg): _59.ProofOp;
                    toProto(message: _59.ProofOp): Uint8Array;
                    toProtoMsg(message: _59.ProofOp): _59.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _59.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.ProofOps;
                    fromPartial(object: Partial<_59.ProofOps>): _59.ProofOps;
                    fromAmino(object: _59.ProofOpsAmino): _59.ProofOps;
                    toAmino(message: _59.ProofOps): _59.ProofOpsAmino;
                    fromAminoMsg(object: _59.ProofOpsAminoMsg): _59.ProofOps;
                    toAminoMsg(message: _59.ProofOps): _59.ProofOpsAminoMsg;
                    fromProtoMsg(message: _59.ProofOpsProtoMsg): _59.ProofOps;
                    toProto(message: _59.ProofOps): Uint8Array;
                    toProtoMsg(message: _59.ProofOps): _59.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _61.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Coin;
                fromPartial(object: Partial<_61.Coin>): _61.Coin;
                fromAmino(object: _61.CoinAmino): _61.Coin;
                toAmino(message: _61.Coin): _61.CoinAmino;
                fromAminoMsg(object: _61.CoinAminoMsg): _61.Coin;
                toAminoMsg(message: _61.Coin): _61.CoinAminoMsg;
                fromProtoMsg(message: _61.CoinProtoMsg): _61.Coin;
                toProto(message: _61.Coin): Uint8Array;
                toProtoMsg(message: _61.Coin): _61.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _61.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DecCoin;
                fromPartial(object: Partial<_61.DecCoin>): _61.DecCoin;
                fromAmino(object: _61.DecCoinAmino): _61.DecCoin;
                toAmino(message: _61.DecCoin): _61.DecCoinAmino;
                fromAminoMsg(object: _61.DecCoinAminoMsg): _61.DecCoin;
                toAminoMsg(message: _61.DecCoin): _61.DecCoinAminoMsg;
                fromProtoMsg(message: _61.DecCoinProtoMsg): _61.DecCoin;
                toProto(message: _61.DecCoin): Uint8Array;
                toProtoMsg(message: _61.DecCoin): _61.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _61.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.IntProto;
                fromPartial(object: Partial<_61.IntProto>): _61.IntProto;
                fromAmino(object: _61.IntProtoAmino): _61.IntProto;
                toAmino(message: _61.IntProto): _61.IntProtoAmino;
                fromAminoMsg(object: _61.IntProtoAminoMsg): _61.IntProto;
                toAminoMsg(message: _61.IntProto): _61.IntProtoAminoMsg;
                fromProtoMsg(message: _61.IntProtoProtoMsg): _61.IntProto;
                toProto(message: _61.IntProto): Uint8Array;
                toProtoMsg(message: _61.IntProto): _61.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _61.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DecProto;
                fromPartial(object: Partial<_61.DecProto>): _61.DecProto;
                fromAmino(object: _61.DecProtoAmino): _61.DecProto;
                toAmino(message: _61.DecProto): _61.DecProtoAmino;
                fromAminoMsg(object: _61.DecProtoAminoMsg): _61.DecProto;
                toAminoMsg(message: _61.DecProto): _61.DecProtoAminoMsg;
                fromProtoMsg(message: _61.DecProtoProtoMsg): _61.DecProto;
                toProto(message: _61.DecProto): Uint8Array;
                toProtoMsg(message: _61.DecProto): _61.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _63.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.GenesisOwners;
                fromPartial(object: Partial<_63.GenesisOwners>): _63.GenesisOwners;
                fromAmino(object: _63.GenesisOwnersAmino): _63.GenesisOwners;
                toAmino(message: _63.GenesisOwners): _63.GenesisOwnersAmino;
                fromAminoMsg(object: _63.GenesisOwnersAminoMsg): _63.GenesisOwners;
                toAminoMsg(message: _63.GenesisOwners): _63.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _63.GenesisOwnersProtoMsg): _63.GenesisOwners;
                toProto(message: _63.GenesisOwners): Uint8Array;
                toProtoMsg(message: _63.GenesisOwners): _63.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _63.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.GenesisState;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                toAminoMsg(message: _63.GenesisState): _63.GenesisStateAminoMsg;
                fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                toProto(message: _63.GenesisState): Uint8Array;
                toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _62.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Capability;
                fromPartial(object: Partial<_62.Capability>): _62.Capability;
                fromAmino(object: _62.CapabilityAmino): _62.Capability;
                toAmino(message: _62.Capability): _62.CapabilityAmino;
                fromAminoMsg(object: _62.CapabilityAminoMsg): _62.Capability;
                toAminoMsg(message: _62.Capability): _62.CapabilityAminoMsg;
                fromProtoMsg(message: _62.CapabilityProtoMsg): _62.Capability;
                toProto(message: _62.Capability): Uint8Array;
                toProtoMsg(message: _62.Capability): _62.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _62.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Owner;
                fromPartial(object: Partial<_62.Owner>): _62.Owner;
                fromAmino(object: _62.OwnerAmino): _62.Owner;
                toAmino(message: _62.Owner): _62.OwnerAmino;
                fromAminoMsg(object: _62.OwnerAminoMsg): _62.Owner;
                toAminoMsg(message: _62.Owner): _62.OwnerAminoMsg;
                fromProtoMsg(message: _62.OwnerProtoMsg): _62.Owner;
                toProto(message: _62.Owner): Uint8Array;
                toProtoMsg(message: _62.Owner): _62.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _62.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.CapabilityOwners;
                fromPartial(object: Partial<_62.CapabilityOwners>): _62.CapabilityOwners;
                fromAmino(object: _62.CapabilityOwnersAmino): _62.CapabilityOwners;
                toAmino(message: _62.CapabilityOwners): _62.CapabilityOwnersAmino;
                fromAminoMsg(object: _62.CapabilityOwnersAminoMsg): _62.CapabilityOwners;
                toAminoMsg(message: _62.CapabilityOwners): _62.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _62.CapabilityOwnersProtoMsg): _62.CapabilityOwners;
                toProto(message: _62.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _62.CapabilityOwners): _62.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _65.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _65.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _65.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _65.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _65.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _65.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _65.MsgVerifyInvariant) => _65.MsgVerifyInvariantAmino;
                    fromAmino: (object: _65.MsgVerifyInvariantAmino) => _65.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _65.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgVerifyInvariant;
                fromPartial(object: Partial<_65.MsgVerifyInvariant>): _65.MsgVerifyInvariant;
                fromAmino(object: _65.MsgVerifyInvariantAmino): _65.MsgVerifyInvariant;
                toAmino(message: _65.MsgVerifyInvariant): _65.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _65.MsgVerifyInvariantAminoMsg): _65.MsgVerifyInvariant;
                toAminoMsg(message: _65.MsgVerifyInvariant): _65.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _65.MsgVerifyInvariantProtoMsg): _65.MsgVerifyInvariant;
                toProto(message: _65.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _65.MsgVerifyInvariant): _65.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _65.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_65.MsgVerifyInvariantResponse>): _65.MsgVerifyInvariantResponse;
                fromAmino(_: _65.MsgVerifyInvariantResponseAmino): _65.MsgVerifyInvariantResponse;
                toAmino(_: _65.MsgVerifyInvariantResponse): _65.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _65.MsgVerifyInvariantResponseAminoMsg): _65.MsgVerifyInvariantResponse;
                toAminoMsg(message: _65.MsgVerifyInvariantResponse): _65.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _65.MsgVerifyInvariantResponseProtoMsg): _65.MsgVerifyInvariantResponse;
                toProto(message: _65.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _65.MsgVerifyInvariantResponse): _65.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _64.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                toAminoMsg(message: _64.GenesisState): _64.GenesisStateAminoMsg;
                fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                toProto(message: _64.GenesisState): Uint8Array;
                toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _66.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.PubKey;
                fromPartial(object: Partial<_66.PubKey>): _66.PubKey;
                fromAmino(object: _66.PubKeyAmino): _66.PubKey;
                toAmino(message: _66.PubKey): _66.PubKeyAmino;
                fromAminoMsg(object: _66.PubKeyAminoMsg): _66.PubKey;
                toAminoMsg(message: _66.PubKey): _66.PubKeyAminoMsg;
                fromProtoMsg(message: _66.PubKeyProtoMsg): _66.PubKey;
                toProto(message: _66.PubKey): Uint8Array;
                toProtoMsg(message: _66.PubKey): _66.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _66.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.PrivKey;
                fromPartial(object: Partial<_66.PrivKey>): _66.PrivKey;
                fromAmino(object: _66.PrivKeyAmino): _66.PrivKey;
                toAmino(message: _66.PrivKey): _66.PrivKeyAmino;
                fromAminoMsg(object: _66.PrivKeyAminoMsg): _66.PrivKey;
                toAminoMsg(message: _66.PrivKey): _66.PrivKeyAminoMsg;
                fromProtoMsg(message: _66.PrivKeyProtoMsg): _66.PrivKey;
                toProto(message: _66.PrivKey): Uint8Array;
                toProtoMsg(message: _66.PrivKey): _66.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _67.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.BIP44Params;
                    fromPartial(object: Partial<_67.BIP44Params>): _67.BIP44Params;
                    fromAmino(object: _67.BIP44ParamsAmino): _67.BIP44Params;
                    toAmino(message: _67.BIP44Params): _67.BIP44ParamsAmino;
                    fromAminoMsg(object: _67.BIP44ParamsAminoMsg): _67.BIP44Params;
                    toAminoMsg(message: _67.BIP44Params): _67.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _67.BIP44ParamsProtoMsg): _67.BIP44Params;
                    toProto(message: _67.BIP44Params): Uint8Array;
                    toProtoMsg(message: _67.BIP44Params): _67.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _68.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.Record;
                    fromPartial(object: Partial<_68.Record>): _68.Record;
                    fromAmino(object: _68.RecordAmino): _68.Record;
                    toAmino(message: _68.Record): _68.RecordAmino;
                    fromAminoMsg(object: _68.RecordAminoMsg): _68.Record;
                    toAminoMsg(message: _68.Record): _68.RecordAminoMsg;
                    fromProtoMsg(message: _68.RecordProtoMsg): _68.Record;
                    toProto(message: _68.Record): Uint8Array;
                    toProtoMsg(message: _68.Record): _68.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _68.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.Record_Local;
                    fromPartial(object: Partial<_68.Record_Local>): _68.Record_Local;
                    fromAmino(object: _68.Record_LocalAmino): _68.Record_Local;
                    toAmino(message: _68.Record_Local): _68.Record_LocalAmino;
                    fromAminoMsg(object: _68.Record_LocalAminoMsg): _68.Record_Local;
                    toAminoMsg(message: _68.Record_Local): _68.Record_LocalAminoMsg;
                    fromProtoMsg(message: _68.Record_LocalProtoMsg): _68.Record_Local;
                    toProto(message: _68.Record_Local): Uint8Array;
                    toProtoMsg(message: _68.Record_Local): _68.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _68.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.Record_Ledger;
                    fromPartial(object: Partial<_68.Record_Ledger>): _68.Record_Ledger;
                    fromAmino(object: _68.Record_LedgerAmino): _68.Record_Ledger;
                    toAmino(message: _68.Record_Ledger): _68.Record_LedgerAmino;
                    fromAminoMsg(object: _68.Record_LedgerAminoMsg): _68.Record_Ledger;
                    toAminoMsg(message: _68.Record_Ledger): _68.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _68.Record_LedgerProtoMsg): _68.Record_Ledger;
                    toProto(message: _68.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _68.Record_Ledger): _68.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _68.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _68.Record_Multi;
                    fromPartial(_: Partial<_68.Record_Multi>): _68.Record_Multi;
                    fromAmino(_: _68.Record_MultiAmino): _68.Record_Multi;
                    toAmino(_: _68.Record_Multi): _68.Record_MultiAmino;
                    fromAminoMsg(object: _68.Record_MultiAminoMsg): _68.Record_Multi;
                    toAminoMsg(message: _68.Record_Multi): _68.Record_MultiAminoMsg;
                    fromProtoMsg(message: _68.Record_MultiProtoMsg): _68.Record_Multi;
                    toProto(message: _68.Record_Multi): Uint8Array;
                    toProtoMsg(message: _68.Record_Multi): _68.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _68.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _68.Record_Offline;
                    fromPartial(_: Partial<_68.Record_Offline>): _68.Record_Offline;
                    fromAmino(_: _68.Record_OfflineAmino): _68.Record_Offline;
                    toAmino(_: _68.Record_Offline): _68.Record_OfflineAmino;
                    fromAminoMsg(object: _68.Record_OfflineAminoMsg): _68.Record_Offline;
                    toAminoMsg(message: _68.Record_Offline): _68.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _68.Record_OfflineProtoMsg): _68.Record_Offline;
                    toProto(message: _68.Record_Offline): Uint8Array;
                    toProtoMsg(message: _68.Record_Offline): _68.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _69.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.LegacyAminoPubKey;
                fromPartial(object: Partial<_69.LegacyAminoPubKey>): _69.LegacyAminoPubKey;
                fromAmino(object: _69.LegacyAminoPubKeyAmino): _69.LegacyAminoPubKey;
                toAmino(message: _69.LegacyAminoPubKey): _69.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _69.LegacyAminoPubKeyAminoMsg): _69.LegacyAminoPubKey;
                toAminoMsg(message: _69.LegacyAminoPubKey): _69.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _69.LegacyAminoPubKeyProtoMsg): _69.LegacyAminoPubKey;
                toProto(message: _69.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _69.LegacyAminoPubKey): _69.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _70.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.PubKey;
                fromPartial(object: Partial<_70.PubKey>): _70.PubKey;
                fromAmino(object: _70.PubKeyAmino): _70.PubKey;
                toAmino(message: _70.PubKey): _70.PubKeyAmino;
                fromAminoMsg(object: _70.PubKeyAminoMsg): _70.PubKey;
                toAminoMsg(message: _70.PubKey): _70.PubKeyAminoMsg;
                fromProtoMsg(message: _70.PubKeyProtoMsg): _70.PubKey;
                toProto(message: _70.PubKey): Uint8Array;
                toProtoMsg(message: _70.PubKey): _70.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _70.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.PrivKey;
                fromPartial(object: Partial<_70.PrivKey>): _70.PrivKey;
                fromAmino(object: _70.PrivKeyAmino): _70.PrivKey;
                toAmino(message: _70.PrivKey): _70.PrivKeyAmino;
                fromAminoMsg(object: _70.PrivKeyAminoMsg): _70.PrivKey;
                toAminoMsg(message: _70.PrivKey): _70.PrivKeyAminoMsg;
                fromProtoMsg(message: _70.PrivKeyProtoMsg): _70.PrivKey;
                toProto(message: _70.PrivKey): Uint8Array;
                toProtoMsg(message: _70.PrivKey): _70.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                validatorOutstandingRewards(request: _74.QueryValidatorOutstandingRewardsRequest): Promise<_74.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _74.QueryValidatorCommissionRequest): Promise<_74.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _74.QueryValidatorSlashesRequest): Promise<_74.QueryValidatorSlashesResponse>;
                delegationRewards(request: _74.QueryDelegationRewardsRequest): Promise<_74.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _74.QueryDelegationTotalRewardsRequest): Promise<_74.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _74.QueryDelegatorValidatorsRequest): Promise<_74.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _74.QueryDelegatorWithdrawAddressRequest): Promise<_74.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _74.QueryCommunityPoolRequest): Promise<_74.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _217.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _75.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _75.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _75.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _75.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _75.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _75.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _75.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _75.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _75.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _75.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _75.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _75.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _75.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _75.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _75.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _75.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _75.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _75.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _75.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _75.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _75.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _75.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _75.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _75.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _75.MsgSetWithdrawAddress) => _75.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _75.MsgSetWithdrawAddressAmino) => _75.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _75.MsgWithdrawDelegatorReward) => _75.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _75.MsgWithdrawDelegatorRewardAmino) => _75.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _75.MsgWithdrawValidatorCommission) => _75.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _75.MsgWithdrawValidatorCommissionAmino) => _75.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _75.MsgFundCommunityPool) => _75.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _75.MsgFundCommunityPoolAmino) => _75.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _75.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_75.MsgSetWithdrawAddress>): _75.MsgSetWithdrawAddress;
                fromAmino(object: _75.MsgSetWithdrawAddressAmino): _75.MsgSetWithdrawAddress;
                toAmino(message: _75.MsgSetWithdrawAddress): _75.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _75.MsgSetWithdrawAddressAminoMsg): _75.MsgSetWithdrawAddress;
                toAminoMsg(message: _75.MsgSetWithdrawAddress): _75.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _75.MsgSetWithdrawAddressProtoMsg): _75.MsgSetWithdrawAddress;
                toProto(message: _75.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _75.MsgSetWithdrawAddress): _75.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _75.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_75.MsgSetWithdrawAddressResponse>): _75.MsgSetWithdrawAddressResponse;
                fromAmino(_: _75.MsgSetWithdrawAddressResponseAmino): _75.MsgSetWithdrawAddressResponse;
                toAmino(_: _75.MsgSetWithdrawAddressResponse): _75.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _75.MsgSetWithdrawAddressResponseAminoMsg): _75.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _75.MsgSetWithdrawAddressResponse): _75.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _75.MsgSetWithdrawAddressResponseProtoMsg): _75.MsgSetWithdrawAddressResponse;
                toProto(message: _75.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _75.MsgSetWithdrawAddressResponse): _75.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _75.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_75.MsgWithdrawDelegatorReward>): _75.MsgWithdrawDelegatorReward;
                fromAmino(object: _75.MsgWithdrawDelegatorRewardAmino): _75.MsgWithdrawDelegatorReward;
                toAmino(message: _75.MsgWithdrawDelegatorReward): _75.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _75.MsgWithdrawDelegatorRewardAminoMsg): _75.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _75.MsgWithdrawDelegatorReward): _75.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _75.MsgWithdrawDelegatorRewardProtoMsg): _75.MsgWithdrawDelegatorReward;
                toProto(message: _75.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _75.MsgWithdrawDelegatorReward): _75.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _75.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_75.MsgWithdrawDelegatorRewardResponse>): _75.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _75.MsgWithdrawDelegatorRewardResponseAmino): _75.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _75.MsgWithdrawDelegatorRewardResponse): _75.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _75.MsgWithdrawDelegatorRewardResponseAminoMsg): _75.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _75.MsgWithdrawDelegatorRewardResponse): _75.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _75.MsgWithdrawDelegatorRewardResponseProtoMsg): _75.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _75.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _75.MsgWithdrawDelegatorRewardResponse): _75.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _75.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_75.MsgWithdrawValidatorCommission>): _75.MsgWithdrawValidatorCommission;
                fromAmino(object: _75.MsgWithdrawValidatorCommissionAmino): _75.MsgWithdrawValidatorCommission;
                toAmino(message: _75.MsgWithdrawValidatorCommission): _75.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _75.MsgWithdrawValidatorCommissionAminoMsg): _75.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _75.MsgWithdrawValidatorCommission): _75.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _75.MsgWithdrawValidatorCommissionProtoMsg): _75.MsgWithdrawValidatorCommission;
                toProto(message: _75.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _75.MsgWithdrawValidatorCommission): _75.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _75.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_75.MsgWithdrawValidatorCommissionResponse>): _75.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _75.MsgWithdrawValidatorCommissionResponseAmino): _75.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _75.MsgWithdrawValidatorCommissionResponse): _75.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _75.MsgWithdrawValidatorCommissionResponseAminoMsg): _75.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _75.MsgWithdrawValidatorCommissionResponse): _75.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _75.MsgWithdrawValidatorCommissionResponseProtoMsg): _75.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _75.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _75.MsgWithdrawValidatorCommissionResponse): _75.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _75.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgFundCommunityPool;
                fromPartial(object: Partial<_75.MsgFundCommunityPool>): _75.MsgFundCommunityPool;
                fromAmino(object: _75.MsgFundCommunityPoolAmino): _75.MsgFundCommunityPool;
                toAmino(message: _75.MsgFundCommunityPool): _75.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _75.MsgFundCommunityPoolAminoMsg): _75.MsgFundCommunityPool;
                toAminoMsg(message: _75.MsgFundCommunityPool): _75.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _75.MsgFundCommunityPoolProtoMsg): _75.MsgFundCommunityPool;
                toProto(message: _75.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _75.MsgFundCommunityPool): _75.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _75.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_75.MsgFundCommunityPoolResponse>): _75.MsgFundCommunityPoolResponse;
                fromAmino(_: _75.MsgFundCommunityPoolResponseAmino): _75.MsgFundCommunityPoolResponse;
                toAmino(_: _75.MsgFundCommunityPoolResponse): _75.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _75.MsgFundCommunityPoolResponseAminoMsg): _75.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _75.MsgFundCommunityPoolResponse): _75.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _75.MsgFundCommunityPoolResponseProtoMsg): _75.MsgFundCommunityPoolResponse;
                toProto(message: _75.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _75.MsgFundCommunityPoolResponse): _75.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _74.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.QueryParamsRequest;
                fromPartial(_: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
                fromAmino(_: _74.QueryParamsRequestAmino): _74.QueryParamsRequest;
                toAmino(_: _74.QueryParamsRequest): _74.QueryParamsRequestAmino;
                fromAminoMsg(object: _74.QueryParamsRequestAminoMsg): _74.QueryParamsRequest;
                toAminoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryParamsRequestProtoMsg): _74.QueryParamsRequest;
                toProto(message: _74.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _74.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryParamsResponse;
                fromPartial(object: Partial<_74.QueryParamsResponse>): _74.QueryParamsResponse;
                fromAmino(object: _74.QueryParamsResponseAmino): _74.QueryParamsResponse;
                toAmino(message: _74.QueryParamsResponse): _74.QueryParamsResponseAmino;
                fromAminoMsg(object: _74.QueryParamsResponseAminoMsg): _74.QueryParamsResponse;
                toAminoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryParamsResponseProtoMsg): _74.QueryParamsResponse;
                toProto(message: _74.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _74.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_74.QueryValidatorOutstandingRewardsRequest>): _74.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _74.QueryValidatorOutstandingRewardsRequestAmino): _74.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _74.QueryValidatorOutstandingRewardsRequest): _74.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _74.QueryValidatorOutstandingRewardsRequestAminoMsg): _74.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _74.QueryValidatorOutstandingRewardsRequest): _74.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorOutstandingRewardsRequestProtoMsg): _74.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _74.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorOutstandingRewardsRequest): _74.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _74.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_74.QueryValidatorOutstandingRewardsResponse>): _74.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _74.QueryValidatorOutstandingRewardsResponseAmino): _74.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _74.QueryValidatorOutstandingRewardsResponse): _74.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _74.QueryValidatorOutstandingRewardsResponseAminoMsg): _74.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _74.QueryValidatorOutstandingRewardsResponse): _74.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorOutstandingRewardsResponseProtoMsg): _74.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _74.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorOutstandingRewardsResponse): _74.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _74.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_74.QueryValidatorCommissionRequest>): _74.QueryValidatorCommissionRequest;
                fromAmino(object: _74.QueryValidatorCommissionRequestAmino): _74.QueryValidatorCommissionRequest;
                toAmino(message: _74.QueryValidatorCommissionRequest): _74.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _74.QueryValidatorCommissionRequestAminoMsg): _74.QueryValidatorCommissionRequest;
                toAminoMsg(message: _74.QueryValidatorCommissionRequest): _74.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorCommissionRequestProtoMsg): _74.QueryValidatorCommissionRequest;
                toProto(message: _74.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorCommissionRequest): _74.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _74.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_74.QueryValidatorCommissionResponse>): _74.QueryValidatorCommissionResponse;
                fromAmino(object: _74.QueryValidatorCommissionResponseAmino): _74.QueryValidatorCommissionResponse;
                toAmino(message: _74.QueryValidatorCommissionResponse): _74.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _74.QueryValidatorCommissionResponseAminoMsg): _74.QueryValidatorCommissionResponse;
                toAminoMsg(message: _74.QueryValidatorCommissionResponse): _74.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorCommissionResponseProtoMsg): _74.QueryValidatorCommissionResponse;
                toProto(message: _74.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorCommissionResponse): _74.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _74.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_74.QueryValidatorSlashesRequest>): _74.QueryValidatorSlashesRequest;
                fromAmino(object: _74.QueryValidatorSlashesRequestAmino): _74.QueryValidatorSlashesRequest;
                toAmino(message: _74.QueryValidatorSlashesRequest): _74.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _74.QueryValidatorSlashesRequestAminoMsg): _74.QueryValidatorSlashesRequest;
                toAminoMsg(message: _74.QueryValidatorSlashesRequest): _74.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorSlashesRequestProtoMsg): _74.QueryValidatorSlashesRequest;
                toProto(message: _74.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorSlashesRequest): _74.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _74.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_74.QueryValidatorSlashesResponse>): _74.QueryValidatorSlashesResponse;
                fromAmino(object: _74.QueryValidatorSlashesResponseAmino): _74.QueryValidatorSlashesResponse;
                toAmino(message: _74.QueryValidatorSlashesResponse): _74.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _74.QueryValidatorSlashesResponseAminoMsg): _74.QueryValidatorSlashesResponse;
                toAminoMsg(message: _74.QueryValidatorSlashesResponse): _74.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _74.QueryValidatorSlashesResponseProtoMsg): _74.QueryValidatorSlashesResponse;
                toProto(message: _74.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _74.QueryValidatorSlashesResponse): _74.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _74.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_74.QueryDelegationRewardsRequest>): _74.QueryDelegationRewardsRequest;
                fromAmino(object: _74.QueryDelegationRewardsRequestAmino): _74.QueryDelegationRewardsRequest;
                toAmino(message: _74.QueryDelegationRewardsRequest): _74.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _74.QueryDelegationRewardsRequestAminoMsg): _74.QueryDelegationRewardsRequest;
                toAminoMsg(message: _74.QueryDelegationRewardsRequest): _74.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDelegationRewardsRequestProtoMsg): _74.QueryDelegationRewardsRequest;
                toProto(message: _74.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDelegationRewardsRequest): _74.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _74.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_74.QueryDelegationRewardsResponse>): _74.QueryDelegationRewardsResponse;
                fromAmino(object: _74.QueryDelegationRewardsResponseAmino): _74.QueryDelegationRewardsResponse;
                toAmino(message: _74.QueryDelegationRewardsResponse): _74.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _74.QueryDelegationRewardsResponseAminoMsg): _74.QueryDelegationRewardsResponse;
                toAminoMsg(message: _74.QueryDelegationRewardsResponse): _74.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDelegationRewardsResponseProtoMsg): _74.QueryDelegationRewardsResponse;
                toProto(message: _74.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDelegationRewardsResponse): _74.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _74.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_74.QueryDelegationTotalRewardsRequest>): _74.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _74.QueryDelegationTotalRewardsRequestAmino): _74.QueryDelegationTotalRewardsRequest;
                toAmino(message: _74.QueryDelegationTotalRewardsRequest): _74.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _74.QueryDelegationTotalRewardsRequestAminoMsg): _74.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _74.QueryDelegationTotalRewardsRequest): _74.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDelegationTotalRewardsRequestProtoMsg): _74.QueryDelegationTotalRewardsRequest;
                toProto(message: _74.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDelegationTotalRewardsRequest): _74.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _74.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_74.QueryDelegationTotalRewardsResponse>): _74.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _74.QueryDelegationTotalRewardsResponseAmino): _74.QueryDelegationTotalRewardsResponse;
                toAmino(message: _74.QueryDelegationTotalRewardsResponse): _74.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _74.QueryDelegationTotalRewardsResponseAminoMsg): _74.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _74.QueryDelegationTotalRewardsResponse): _74.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDelegationTotalRewardsResponseProtoMsg): _74.QueryDelegationTotalRewardsResponse;
                toProto(message: _74.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDelegationTotalRewardsResponse): _74.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_74.QueryDelegatorValidatorsRequest>): _74.QueryDelegatorValidatorsRequest;
                fromAmino(object: _74.QueryDelegatorValidatorsRequestAmino): _74.QueryDelegatorValidatorsRequest;
                toAmino(message: _74.QueryDelegatorValidatorsRequest): _74.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _74.QueryDelegatorValidatorsRequestAminoMsg): _74.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _74.QueryDelegatorValidatorsRequest): _74.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorValidatorsRequestProtoMsg): _74.QueryDelegatorValidatorsRequest;
                toProto(message: _74.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorValidatorsRequest): _74.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_74.QueryDelegatorValidatorsResponse>): _74.QueryDelegatorValidatorsResponse;
                fromAmino(object: _74.QueryDelegatorValidatorsResponseAmino): _74.QueryDelegatorValidatorsResponse;
                toAmino(message: _74.QueryDelegatorValidatorsResponse): _74.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _74.QueryDelegatorValidatorsResponseAminoMsg): _74.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _74.QueryDelegatorValidatorsResponse): _74.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorValidatorsResponseProtoMsg): _74.QueryDelegatorValidatorsResponse;
                toProto(message: _74.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorValidatorsResponse): _74.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_74.QueryDelegatorWithdrawAddressRequest>): _74.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _74.QueryDelegatorWithdrawAddressRequestAmino): _74.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _74.QueryDelegatorWithdrawAddressRequest): _74.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _74.QueryDelegatorWithdrawAddressRequestAminoMsg): _74.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _74.QueryDelegatorWithdrawAddressRequest): _74.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorWithdrawAddressRequestProtoMsg): _74.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _74.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorWithdrawAddressRequest): _74.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _74.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_74.QueryDelegatorWithdrawAddressResponse>): _74.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _74.QueryDelegatorWithdrawAddressResponseAmino): _74.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _74.QueryDelegatorWithdrawAddressResponse): _74.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _74.QueryDelegatorWithdrawAddressResponseAminoMsg): _74.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _74.QueryDelegatorWithdrawAddressResponse): _74.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDelegatorWithdrawAddressResponseProtoMsg): _74.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _74.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDelegatorWithdrawAddressResponse): _74.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _74.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_74.QueryCommunityPoolRequest>): _74.QueryCommunityPoolRequest;
                fromAmino(_: _74.QueryCommunityPoolRequestAmino): _74.QueryCommunityPoolRequest;
                toAmino(_: _74.QueryCommunityPoolRequest): _74.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _74.QueryCommunityPoolRequestAminoMsg): _74.QueryCommunityPoolRequest;
                toAminoMsg(message: _74.QueryCommunityPoolRequest): _74.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _74.QueryCommunityPoolRequestProtoMsg): _74.QueryCommunityPoolRequest;
                toProto(message: _74.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _74.QueryCommunityPoolRequest): _74.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _74.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_74.QueryCommunityPoolResponse>): _74.QueryCommunityPoolResponse;
                fromAmino(object: _74.QueryCommunityPoolResponseAmino): _74.QueryCommunityPoolResponse;
                toAmino(message: _74.QueryCommunityPoolResponse): _74.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _74.QueryCommunityPoolResponseAminoMsg): _74.QueryCommunityPoolResponse;
                toAminoMsg(message: _74.QueryCommunityPoolResponse): _74.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _74.QueryCommunityPoolResponseProtoMsg): _74.QueryCommunityPoolResponse;
                toProto(message: _74.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _74.QueryCommunityPoolResponse): _74.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _73.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_73.DelegatorWithdrawInfo>): _73.DelegatorWithdrawInfo;
                fromAmino(object: _73.DelegatorWithdrawInfoAmino): _73.DelegatorWithdrawInfo;
                toAmino(message: _73.DelegatorWithdrawInfo): _73.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _73.DelegatorWithdrawInfoAminoMsg): _73.DelegatorWithdrawInfo;
                toAminoMsg(message: _73.DelegatorWithdrawInfo): _73.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _73.DelegatorWithdrawInfoProtoMsg): _73.DelegatorWithdrawInfo;
                toProto(message: _73.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _73.DelegatorWithdrawInfo): _73.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _73.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_73.ValidatorOutstandingRewardsRecord>): _73.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _73.ValidatorOutstandingRewardsRecordAmino): _73.ValidatorOutstandingRewardsRecord;
                toAmino(message: _73.ValidatorOutstandingRewardsRecord): _73.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _73.ValidatorOutstandingRewardsRecordAminoMsg): _73.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _73.ValidatorOutstandingRewardsRecord): _73.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _73.ValidatorOutstandingRewardsRecordProtoMsg): _73.ValidatorOutstandingRewardsRecord;
                toProto(message: _73.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _73.ValidatorOutstandingRewardsRecord): _73.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _73.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_73.ValidatorAccumulatedCommissionRecord>): _73.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _73.ValidatorAccumulatedCommissionRecordAmino): _73.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _73.ValidatorAccumulatedCommissionRecord): _73.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _73.ValidatorAccumulatedCommissionRecordAminoMsg): _73.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _73.ValidatorAccumulatedCommissionRecord): _73.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _73.ValidatorAccumulatedCommissionRecordProtoMsg): _73.ValidatorAccumulatedCommissionRecord;
                toProto(message: _73.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _73.ValidatorAccumulatedCommissionRecord): _73.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _73.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_73.ValidatorHistoricalRewardsRecord>): _73.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _73.ValidatorHistoricalRewardsRecordAmino): _73.ValidatorHistoricalRewardsRecord;
                toAmino(message: _73.ValidatorHistoricalRewardsRecord): _73.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _73.ValidatorHistoricalRewardsRecordAminoMsg): _73.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _73.ValidatorHistoricalRewardsRecord): _73.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _73.ValidatorHistoricalRewardsRecordProtoMsg): _73.ValidatorHistoricalRewardsRecord;
                toProto(message: _73.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _73.ValidatorHistoricalRewardsRecord): _73.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _73.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_73.ValidatorCurrentRewardsRecord>): _73.ValidatorCurrentRewardsRecord;
                fromAmino(object: _73.ValidatorCurrentRewardsRecordAmino): _73.ValidatorCurrentRewardsRecord;
                toAmino(message: _73.ValidatorCurrentRewardsRecord): _73.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _73.ValidatorCurrentRewardsRecordAminoMsg): _73.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _73.ValidatorCurrentRewardsRecord): _73.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _73.ValidatorCurrentRewardsRecordProtoMsg): _73.ValidatorCurrentRewardsRecord;
                toProto(message: _73.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _73.ValidatorCurrentRewardsRecord): _73.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _73.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_73.DelegatorStartingInfoRecord>): _73.DelegatorStartingInfoRecord;
                fromAmino(object: _73.DelegatorStartingInfoRecordAmino): _73.DelegatorStartingInfoRecord;
                toAmino(message: _73.DelegatorStartingInfoRecord): _73.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _73.DelegatorStartingInfoRecordAminoMsg): _73.DelegatorStartingInfoRecord;
                toAminoMsg(message: _73.DelegatorStartingInfoRecord): _73.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _73.DelegatorStartingInfoRecordProtoMsg): _73.DelegatorStartingInfoRecord;
                toProto(message: _73.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _73.DelegatorStartingInfoRecord): _73.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _73.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_73.ValidatorSlashEventRecord>): _73.ValidatorSlashEventRecord;
                fromAmino(object: _73.ValidatorSlashEventRecordAmino): _73.ValidatorSlashEventRecord;
                toAmino(message: _73.ValidatorSlashEventRecord): _73.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _73.ValidatorSlashEventRecordAminoMsg): _73.ValidatorSlashEventRecord;
                toAminoMsg(message: _73.ValidatorSlashEventRecord): _73.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _73.ValidatorSlashEventRecordProtoMsg): _73.ValidatorSlashEventRecord;
                toProto(message: _73.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _73.ValidatorSlashEventRecord): _73.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _72.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Params;
                fromPartial(object: Partial<_72.Params>): _72.Params;
                fromAmino(object: _72.ParamsAmino): _72.Params;
                toAmino(message: _72.Params): _72.ParamsAmino;
                fromAminoMsg(object: _72.ParamsAminoMsg): _72.Params;
                toAminoMsg(message: _72.Params): _72.ParamsAminoMsg;
                fromProtoMsg(message: _72.ParamsProtoMsg): _72.Params;
                toProto(message: _72.Params): Uint8Array;
                toProtoMsg(message: _72.Params): _72.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _72.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_72.ValidatorHistoricalRewards>): _72.ValidatorHistoricalRewards;
                fromAmino(object: _72.ValidatorHistoricalRewardsAmino): _72.ValidatorHistoricalRewards;
                toAmino(message: _72.ValidatorHistoricalRewards): _72.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _72.ValidatorHistoricalRewardsAminoMsg): _72.ValidatorHistoricalRewards;
                toAminoMsg(message: _72.ValidatorHistoricalRewards): _72.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _72.ValidatorHistoricalRewardsProtoMsg): _72.ValidatorHistoricalRewards;
                toProto(message: _72.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _72.ValidatorHistoricalRewards): _72.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _72.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ValidatorCurrentRewards;
                fromPartial(object: Partial<_72.ValidatorCurrentRewards>): _72.ValidatorCurrentRewards;
                fromAmino(object: _72.ValidatorCurrentRewardsAmino): _72.ValidatorCurrentRewards;
                toAmino(message: _72.ValidatorCurrentRewards): _72.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _72.ValidatorCurrentRewardsAminoMsg): _72.ValidatorCurrentRewards;
                toAminoMsg(message: _72.ValidatorCurrentRewards): _72.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _72.ValidatorCurrentRewardsProtoMsg): _72.ValidatorCurrentRewards;
                toProto(message: _72.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _72.ValidatorCurrentRewards): _72.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _72.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_72.ValidatorAccumulatedCommission>): _72.ValidatorAccumulatedCommission;
                fromAmino(object: _72.ValidatorAccumulatedCommissionAmino): _72.ValidatorAccumulatedCommission;
                toAmino(message: _72.ValidatorAccumulatedCommission): _72.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _72.ValidatorAccumulatedCommissionAminoMsg): _72.ValidatorAccumulatedCommission;
                toAminoMsg(message: _72.ValidatorAccumulatedCommission): _72.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _72.ValidatorAccumulatedCommissionProtoMsg): _72.ValidatorAccumulatedCommission;
                toProto(message: _72.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _72.ValidatorAccumulatedCommission): _72.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _72.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_72.ValidatorOutstandingRewards>): _72.ValidatorOutstandingRewards;
                fromAmino(object: _72.ValidatorOutstandingRewardsAmino): _72.ValidatorOutstandingRewards;
                toAmino(message: _72.ValidatorOutstandingRewards): _72.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _72.ValidatorOutstandingRewardsAminoMsg): _72.ValidatorOutstandingRewards;
                toAminoMsg(message: _72.ValidatorOutstandingRewards): _72.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _72.ValidatorOutstandingRewardsProtoMsg): _72.ValidatorOutstandingRewards;
                toProto(message: _72.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _72.ValidatorOutstandingRewards): _72.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _72.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ValidatorSlashEvent;
                fromPartial(object: Partial<_72.ValidatorSlashEvent>): _72.ValidatorSlashEvent;
                fromAmino(object: _72.ValidatorSlashEventAmino): _72.ValidatorSlashEvent;
                toAmino(message: _72.ValidatorSlashEvent): _72.ValidatorSlashEventAmino;
                fromAminoMsg(object: _72.ValidatorSlashEventAminoMsg): _72.ValidatorSlashEvent;
                toAminoMsg(message: _72.ValidatorSlashEvent): _72.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _72.ValidatorSlashEventProtoMsg): _72.ValidatorSlashEvent;
                toProto(message: _72.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _72.ValidatorSlashEvent): _72.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _72.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ValidatorSlashEvents;
                fromPartial(object: Partial<_72.ValidatorSlashEvents>): _72.ValidatorSlashEvents;
                fromAmino(object: _72.ValidatorSlashEventsAmino): _72.ValidatorSlashEvents;
                toAmino(message: _72.ValidatorSlashEvents): _72.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _72.ValidatorSlashEventsAminoMsg): _72.ValidatorSlashEvents;
                toAminoMsg(message: _72.ValidatorSlashEvents): _72.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _72.ValidatorSlashEventsProtoMsg): _72.ValidatorSlashEvents;
                toProto(message: _72.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _72.ValidatorSlashEvents): _72.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _72.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.FeePool;
                fromPartial(object: Partial<_72.FeePool>): _72.FeePool;
                fromAmino(object: _72.FeePoolAmino): _72.FeePool;
                toAmino(message: _72.FeePool): _72.FeePoolAmino;
                fromAminoMsg(object: _72.FeePoolAminoMsg): _72.FeePool;
                toAminoMsg(message: _72.FeePool): _72.FeePoolAminoMsg;
                fromProtoMsg(message: _72.FeePoolProtoMsg): _72.FeePool;
                toProto(message: _72.FeePool): Uint8Array;
                toProtoMsg(message: _72.FeePool): _72.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _72.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_72.CommunityPoolSpendProposal>): _72.CommunityPoolSpendProposal;
                fromAmino(object: _72.CommunityPoolSpendProposalAmino): _72.CommunityPoolSpendProposal;
                toAmino(message: _72.CommunityPoolSpendProposal): _72.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _72.CommunityPoolSpendProposalAminoMsg): _72.CommunityPoolSpendProposal;
                toAminoMsg(message: _72.CommunityPoolSpendProposal): _72.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _72.CommunityPoolSpendProposalProtoMsg): _72.CommunityPoolSpendProposal;
                toProto(message: _72.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _72.CommunityPoolSpendProposal): _72.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _72.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.DelegatorStartingInfo;
                fromPartial(object: Partial<_72.DelegatorStartingInfo>): _72.DelegatorStartingInfo;
                fromAmino(object: _72.DelegatorStartingInfoAmino): _72.DelegatorStartingInfo;
                toAmino(message: _72.DelegatorStartingInfo): _72.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _72.DelegatorStartingInfoAminoMsg): _72.DelegatorStartingInfo;
                toAminoMsg(message: _72.DelegatorStartingInfo): _72.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _72.DelegatorStartingInfoProtoMsg): _72.DelegatorStartingInfo;
                toProto(message: _72.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _72.DelegatorStartingInfo): _72.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _72.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.DelegationDelegatorReward;
                fromPartial(object: Partial<_72.DelegationDelegatorReward>): _72.DelegationDelegatorReward;
                fromAmino(object: _72.DelegationDelegatorRewardAmino): _72.DelegationDelegatorReward;
                toAmino(message: _72.DelegationDelegatorReward): _72.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _72.DelegationDelegatorRewardAminoMsg): _72.DelegationDelegatorReward;
                toAminoMsg(message: _72.DelegationDelegatorReward): _72.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _72.DelegationDelegatorRewardProtoMsg): _72.DelegationDelegatorReward;
                toProto(message: _72.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _72.DelegationDelegatorReward): _72.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _72.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_72.CommunityPoolSpendProposalWithDeposit>): _72.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _72.CommunityPoolSpendProposalWithDepositAmino): _72.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _72.CommunityPoolSpendProposalWithDeposit): _72.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _72.CommunityPoolSpendProposalWithDepositAminoMsg): _72.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _72.CommunityPoolSpendProposalWithDeposit): _72.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _72.CommunityPoolSpendProposalWithDepositProtoMsg): _72.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _72.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _72.CommunityPoolSpendProposalWithDeposit): _72.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _78.QueryEvidenceRequest): Promise<_78.QueryEvidenceResponse>;
                allEvidence(request?: _78.QueryAllEvidenceRequest): Promise<_78.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _79.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _79.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _79.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _79.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _79.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _79.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _79.MsgSubmitEvidence) => _79.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _79.MsgSubmitEvidenceAmino) => _79.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _79.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgSubmitEvidence;
                fromPartial(object: Partial<_79.MsgSubmitEvidence>): _79.MsgSubmitEvidence;
                fromAmino(object: _79.MsgSubmitEvidenceAmino): _79.MsgSubmitEvidence;
                toAmino(message: _79.MsgSubmitEvidence): _79.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _79.MsgSubmitEvidenceAminoMsg): _79.MsgSubmitEvidence;
                toAminoMsg(message: _79.MsgSubmitEvidence): _79.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _79.MsgSubmitEvidenceProtoMsg): _79.MsgSubmitEvidence;
                toProto(message: _79.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _79.MsgSubmitEvidence): _79.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _79.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_79.MsgSubmitEvidenceResponse>): _79.MsgSubmitEvidenceResponse;
                fromAmino(object: _79.MsgSubmitEvidenceResponseAmino): _79.MsgSubmitEvidenceResponse;
                toAmino(message: _79.MsgSubmitEvidenceResponse): _79.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _79.MsgSubmitEvidenceResponseAminoMsg): _79.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _79.MsgSubmitEvidenceResponse): _79.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _79.MsgSubmitEvidenceResponseProtoMsg): _79.MsgSubmitEvidenceResponse;
                toProto(message: _79.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _79.MsgSubmitEvidenceResponse): _79.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _78.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryEvidenceRequest;
                fromPartial(object: Partial<_78.QueryEvidenceRequest>): _78.QueryEvidenceRequest;
                fromAmino(object: _78.QueryEvidenceRequestAmino): _78.QueryEvidenceRequest;
                toAmino(message: _78.QueryEvidenceRequest): _78.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _78.QueryEvidenceRequestAminoMsg): _78.QueryEvidenceRequest;
                toAminoMsg(message: _78.QueryEvidenceRequest): _78.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _78.QueryEvidenceRequestProtoMsg): _78.QueryEvidenceRequest;
                toProto(message: _78.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _78.QueryEvidenceRequest): _78.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _78.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryEvidenceResponse;
                fromPartial(object: Partial<_78.QueryEvidenceResponse>): _78.QueryEvidenceResponse;
                fromAmino(object: _78.QueryEvidenceResponseAmino): _78.QueryEvidenceResponse;
                toAmino(message: _78.QueryEvidenceResponse): _78.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _78.QueryEvidenceResponseAminoMsg): _78.QueryEvidenceResponse;
                toAminoMsg(message: _78.QueryEvidenceResponse): _78.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _78.QueryEvidenceResponseProtoMsg): _78.QueryEvidenceResponse;
                toProto(message: _78.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _78.QueryEvidenceResponse): _78.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _78.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_78.QueryAllEvidenceRequest>): _78.QueryAllEvidenceRequest;
                fromAmino(object: _78.QueryAllEvidenceRequestAmino): _78.QueryAllEvidenceRequest;
                toAmino(message: _78.QueryAllEvidenceRequest): _78.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _78.QueryAllEvidenceRequestAminoMsg): _78.QueryAllEvidenceRequest;
                toAminoMsg(message: _78.QueryAllEvidenceRequest): _78.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _78.QueryAllEvidenceRequestProtoMsg): _78.QueryAllEvidenceRequest;
                toProto(message: _78.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _78.QueryAllEvidenceRequest): _78.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _78.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_78.QueryAllEvidenceResponse>): _78.QueryAllEvidenceResponse;
                fromAmino(object: _78.QueryAllEvidenceResponseAmino): _78.QueryAllEvidenceResponse;
                toAmino(message: _78.QueryAllEvidenceResponse): _78.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _78.QueryAllEvidenceResponseAminoMsg): _78.QueryAllEvidenceResponse;
                toAminoMsg(message: _78.QueryAllEvidenceResponse): _78.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _78.QueryAllEvidenceResponseProtoMsg): _78.QueryAllEvidenceResponse;
                toProto(message: _78.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _78.QueryAllEvidenceResponse): _78.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _77.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.GenesisState;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
                fromAmino(object: _77.GenesisStateAmino): _77.GenesisState;
                toAmino(message: _77.GenesisState): _77.GenesisStateAmino;
                fromAminoMsg(object: _77.GenesisStateAminoMsg): _77.GenesisState;
                toAminoMsg(message: _77.GenesisState): _77.GenesisStateAminoMsg;
                fromProtoMsg(message: _77.GenesisStateProtoMsg): _77.GenesisState;
                toProto(message: _77.GenesisState): Uint8Array;
                toProtoMsg(message: _77.GenesisState): _77.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _76.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Equivocation;
                fromPartial(object: Partial<_76.Equivocation>): _76.Equivocation;
                fromAmino(object: _76.EquivocationAmino): _76.Equivocation;
                toAmino(message: _76.Equivocation): _76.EquivocationAmino;
                fromAminoMsg(object: _76.EquivocationAminoMsg): _76.Equivocation;
                toAminoMsg(message: _76.Equivocation): _76.EquivocationAminoMsg;
                fromProtoMsg(message: _76.EquivocationProtoMsg): _76.Equivocation;
                toProto(message: _76.Equivocation): Uint8Array;
                toProtoMsg(message: _76.Equivocation): _76.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _254.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _82.QueryAllowanceRequest): Promise<_82.QueryAllowanceResponse>;
                allowances(request: _82.QueryAllowancesRequest): Promise<_82.QueryAllowancesResponse>;
                allowancesByGranter(request: _82.QueryAllowancesByGranterRequest): Promise<_82.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _83.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _83.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _83.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _83.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _83.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _83.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _83.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _83.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _83.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _83.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _83.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _83.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _83.MsgGrantAllowance) => _83.MsgGrantAllowanceAmino;
                    fromAmino: (object: _83.MsgGrantAllowanceAmino) => _83.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _83.MsgRevokeAllowance) => _83.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _83.MsgRevokeAllowanceAmino) => _83.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _83.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgGrantAllowance;
                fromPartial(object: Partial<_83.MsgGrantAllowance>): _83.MsgGrantAllowance;
                fromAmino(object: _83.MsgGrantAllowanceAmino): _83.MsgGrantAllowance;
                toAmino(message: _83.MsgGrantAllowance): _83.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _83.MsgGrantAllowanceAminoMsg): _83.MsgGrantAllowance;
                toAminoMsg(message: _83.MsgGrantAllowance): _83.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _83.MsgGrantAllowanceProtoMsg): _83.MsgGrantAllowance;
                toProto(message: _83.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _83.MsgGrantAllowance): _83.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _83.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_83.MsgGrantAllowanceResponse>): _83.MsgGrantAllowanceResponse;
                fromAmino(_: _83.MsgGrantAllowanceResponseAmino): _83.MsgGrantAllowanceResponse;
                toAmino(_: _83.MsgGrantAllowanceResponse): _83.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _83.MsgGrantAllowanceResponseAminoMsg): _83.MsgGrantAllowanceResponse;
                toAminoMsg(message: _83.MsgGrantAllowanceResponse): _83.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _83.MsgGrantAllowanceResponseProtoMsg): _83.MsgGrantAllowanceResponse;
                toProto(message: _83.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _83.MsgGrantAllowanceResponse): _83.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _83.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgRevokeAllowance;
                fromPartial(object: Partial<_83.MsgRevokeAllowance>): _83.MsgRevokeAllowance;
                fromAmino(object: _83.MsgRevokeAllowanceAmino): _83.MsgRevokeAllowance;
                toAmino(message: _83.MsgRevokeAllowance): _83.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _83.MsgRevokeAllowanceAminoMsg): _83.MsgRevokeAllowance;
                toAminoMsg(message: _83.MsgRevokeAllowance): _83.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _83.MsgRevokeAllowanceProtoMsg): _83.MsgRevokeAllowance;
                toProto(message: _83.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _83.MsgRevokeAllowance): _83.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _83.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_83.MsgRevokeAllowanceResponse>): _83.MsgRevokeAllowanceResponse;
                fromAmino(_: _83.MsgRevokeAllowanceResponseAmino): _83.MsgRevokeAllowanceResponse;
                toAmino(_: _83.MsgRevokeAllowanceResponse): _83.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _83.MsgRevokeAllowanceResponseAminoMsg): _83.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _83.MsgRevokeAllowanceResponse): _83.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _83.MsgRevokeAllowanceResponseProtoMsg): _83.MsgRevokeAllowanceResponse;
                toProto(message: _83.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _83.MsgRevokeAllowanceResponse): _83.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _80.BasicAllowance | _80.PeriodicAllowance | _80.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _82.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryAllowanceRequest;
                fromPartial(object: Partial<_82.QueryAllowanceRequest>): _82.QueryAllowanceRequest;
                fromAmino(object: _82.QueryAllowanceRequestAmino): _82.QueryAllowanceRequest;
                toAmino(message: _82.QueryAllowanceRequest): _82.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _82.QueryAllowanceRequestAminoMsg): _82.QueryAllowanceRequest;
                toAminoMsg(message: _82.QueryAllowanceRequest): _82.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _82.QueryAllowanceRequestProtoMsg): _82.QueryAllowanceRequest;
                toProto(message: _82.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _82.QueryAllowanceRequest): _82.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _82.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryAllowanceResponse;
                fromPartial(object: Partial<_82.QueryAllowanceResponse>): _82.QueryAllowanceResponse;
                fromAmino(object: _82.QueryAllowanceResponseAmino): _82.QueryAllowanceResponse;
                toAmino(message: _82.QueryAllowanceResponse): _82.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _82.QueryAllowanceResponseAminoMsg): _82.QueryAllowanceResponse;
                toAminoMsg(message: _82.QueryAllowanceResponse): _82.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _82.QueryAllowanceResponseProtoMsg): _82.QueryAllowanceResponse;
                toProto(message: _82.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _82.QueryAllowanceResponse): _82.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _82.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryAllowancesRequest;
                fromPartial(object: Partial<_82.QueryAllowancesRequest>): _82.QueryAllowancesRequest;
                fromAmino(object: _82.QueryAllowancesRequestAmino): _82.QueryAllowancesRequest;
                toAmino(message: _82.QueryAllowancesRequest): _82.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _82.QueryAllowancesRequestAminoMsg): _82.QueryAllowancesRequest;
                toAminoMsg(message: _82.QueryAllowancesRequest): _82.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _82.QueryAllowancesRequestProtoMsg): _82.QueryAllowancesRequest;
                toProto(message: _82.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _82.QueryAllowancesRequest): _82.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _82.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryAllowancesResponse;
                fromPartial(object: Partial<_82.QueryAllowancesResponse>): _82.QueryAllowancesResponse;
                fromAmino(object: _82.QueryAllowancesResponseAmino): _82.QueryAllowancesResponse;
                toAmino(message: _82.QueryAllowancesResponse): _82.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _82.QueryAllowancesResponseAminoMsg): _82.QueryAllowancesResponse;
                toAminoMsg(message: _82.QueryAllowancesResponse): _82.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _82.QueryAllowancesResponseProtoMsg): _82.QueryAllowancesResponse;
                toProto(message: _82.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _82.QueryAllowancesResponse): _82.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _82.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_82.QueryAllowancesByGranterRequest>): _82.QueryAllowancesByGranterRequest;
                fromAmino(object: _82.QueryAllowancesByGranterRequestAmino): _82.QueryAllowancesByGranterRequest;
                toAmino(message: _82.QueryAllowancesByGranterRequest): _82.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _82.QueryAllowancesByGranterRequestAminoMsg): _82.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _82.QueryAllowancesByGranterRequest): _82.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _82.QueryAllowancesByGranterRequestProtoMsg): _82.QueryAllowancesByGranterRequest;
                toProto(message: _82.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _82.QueryAllowancesByGranterRequest): _82.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _82.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_82.QueryAllowancesByGranterResponse>): _82.QueryAllowancesByGranterResponse;
                fromAmino(object: _82.QueryAllowancesByGranterResponseAmino): _82.QueryAllowancesByGranterResponse;
                toAmino(message: _82.QueryAllowancesByGranterResponse): _82.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _82.QueryAllowancesByGranterResponseAminoMsg): _82.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _82.QueryAllowancesByGranterResponse): _82.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _82.QueryAllowancesByGranterResponseProtoMsg): _82.QueryAllowancesByGranterResponse;
                toProto(message: _82.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _82.QueryAllowancesByGranterResponse): _82.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _80.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.BasicAllowance;
                fromPartial(object: Partial<_80.BasicAllowance>): _80.BasicAllowance;
                fromAmino(object: _80.BasicAllowanceAmino): _80.BasicAllowance;
                toAmino(message: _80.BasicAllowance): _80.BasicAllowanceAmino;
                fromAminoMsg(object: _80.BasicAllowanceAminoMsg): _80.BasicAllowance;
                toAminoMsg(message: _80.BasicAllowance): _80.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _80.BasicAllowanceProtoMsg): _80.BasicAllowance;
                toProto(message: _80.BasicAllowance): Uint8Array;
                toProtoMsg(message: _80.BasicAllowance): _80.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _80.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.PeriodicAllowance;
                fromPartial(object: Partial<_80.PeriodicAllowance>): _80.PeriodicAllowance;
                fromAmino(object: _80.PeriodicAllowanceAmino): _80.PeriodicAllowance;
                toAmino(message: _80.PeriodicAllowance): _80.PeriodicAllowanceAmino;
                fromAminoMsg(object: _80.PeriodicAllowanceAminoMsg): _80.PeriodicAllowance;
                toAminoMsg(message: _80.PeriodicAllowance): _80.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _80.PeriodicAllowanceProtoMsg): _80.PeriodicAllowance;
                toProto(message: _80.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _80.PeriodicAllowance): _80.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _80.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.AllowedMsgAllowance;
                fromPartial(object: Partial<_80.AllowedMsgAllowance>): _80.AllowedMsgAllowance;
                fromAmino(object: _80.AllowedMsgAllowanceAmino): _80.AllowedMsgAllowance;
                toAmino(message: _80.AllowedMsgAllowance): _80.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _80.AllowedMsgAllowanceAminoMsg): _80.AllowedMsgAllowance;
                toAminoMsg(message: _80.AllowedMsgAllowance): _80.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _80.AllowedMsgAllowanceProtoMsg): _80.AllowedMsgAllowance;
                toProto(message: _80.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _80.AllowedMsgAllowance): _80.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _80.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Grant;
                fromPartial(object: Partial<_80.Grant>): _80.Grant;
                fromAmino(object: _80.GrantAmino): _80.Grant;
                toAmino(message: _80.Grant): _80.GrantAmino;
                fromAminoMsg(object: _80.GrantAminoMsg): _80.Grant;
                toAminoMsg(message: _80.Grant): _80.GrantAminoMsg;
                fromProtoMsg(message: _80.GrantProtoMsg): _80.Grant;
                toProto(message: _80.Grant): Uint8Array;
                toProtoMsg(message: _80.Grant): _80.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _84.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.GenesisState;
                fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
                fromAmino(object: _84.GenesisStateAmino): _84.GenesisState;
                toAmino(message: _84.GenesisState): _84.GenesisStateAmino;
                fromAminoMsg(object: _84.GenesisStateAminoMsg): _84.GenesisState;
                toAminoMsg(message: _84.GenesisState): _84.GenesisStateAminoMsg;
                fromProtoMsg(message: _84.GenesisStateProtoMsg): _84.GenesisState;
                toProto(message: _84.GenesisState): Uint8Array;
                toProtoMsg(message: _84.GenesisState): _84.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _255.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _87.QueryProposalRequest): Promise<_87.QueryProposalResponse>;
                proposals(request: _87.QueryProposalsRequest): Promise<_87.QueryProposalsResponse>;
                vote(request: _87.QueryVoteRequest): Promise<_87.QueryVoteResponse>;
                votes(request: _87.QueryVotesRequest): Promise<_87.QueryVotesResponse>;
                params(request: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                deposit(request: _87.QueryDepositRequest): Promise<_87.QueryDepositResponse>;
                deposits(request: _87.QueryDepositsRequest): Promise<_87.QueryDepositsResponse>;
                tallyResult(request: _87.QueryTallyResultRequest): Promise<_87.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _88.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _88.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _88.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _88.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _88.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _88.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _88.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _88.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _88.MsgExecLegacyContent;
                    };
                    vote(value: _88.MsgVote): {
                        typeUrl: string;
                        value: _88.MsgVote;
                    };
                    voteWeighted(value: _88.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _88.MsgVoteWeighted;
                    };
                    deposit(value: _88.MsgDeposit): {
                        typeUrl: string;
                        value: _88.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _88.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _88.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _88.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _88.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _88.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _88.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _88.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _88.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _88.MsgExecLegacyContent;
                    };
                    vote(value: _88.MsgVote): {
                        typeUrl: string;
                        value: _88.MsgVote;
                    };
                    voteWeighted(value: _88.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _88.MsgVoteWeighted;
                    };
                    deposit(value: _88.MsgDeposit): {
                        typeUrl: string;
                        value: _88.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _88.MsgSubmitProposal) => _88.MsgSubmitProposalAmino;
                    fromAmino: (object: _88.MsgSubmitProposalAmino) => _88.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _88.MsgExecLegacyContent) => _88.MsgExecLegacyContentAmino;
                    fromAmino: (object: _88.MsgExecLegacyContentAmino) => _88.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _88.MsgVote) => _88.MsgVoteAmino;
                    fromAmino: (object: _88.MsgVoteAmino) => _88.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _88.MsgVoteWeighted) => _88.MsgVoteWeightedAmino;
                    fromAmino: (object: _88.MsgVoteWeightedAmino) => _88.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _88.MsgDeposit) => _88.MsgDepositAmino;
                    fromAmino: (object: _88.MsgDepositAmino) => _88.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _88.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgSubmitProposal;
                fromPartial(object: Partial<_88.MsgSubmitProposal>): _88.MsgSubmitProposal;
                fromAmino(object: _88.MsgSubmitProposalAmino): _88.MsgSubmitProposal;
                toAmino(message: _88.MsgSubmitProposal): _88.MsgSubmitProposalAmino;
                fromAminoMsg(object: _88.MsgSubmitProposalAminoMsg): _88.MsgSubmitProposal;
                toAminoMsg(message: _88.MsgSubmitProposal): _88.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _88.MsgSubmitProposalProtoMsg): _88.MsgSubmitProposal;
                toProto(message: _88.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _88.MsgSubmitProposal): _88.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _88.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_88.MsgSubmitProposalResponse>): _88.MsgSubmitProposalResponse;
                fromAmino(object: _88.MsgSubmitProposalResponseAmino): _88.MsgSubmitProposalResponse;
                toAmino(message: _88.MsgSubmitProposalResponse): _88.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _88.MsgSubmitProposalResponseAminoMsg): _88.MsgSubmitProposalResponse;
                toAminoMsg(message: _88.MsgSubmitProposalResponse): _88.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _88.MsgSubmitProposalResponseProtoMsg): _88.MsgSubmitProposalResponse;
                toProto(message: _88.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _88.MsgSubmitProposalResponse): _88.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _88.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgExecLegacyContent;
                fromPartial(object: Partial<_88.MsgExecLegacyContent>): _88.MsgExecLegacyContent;
                fromAmino(object: _88.MsgExecLegacyContentAmino): _88.MsgExecLegacyContent;
                toAmino(message: _88.MsgExecLegacyContent): _88.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _88.MsgExecLegacyContentAminoMsg): _88.MsgExecLegacyContent;
                toAminoMsg(message: _88.MsgExecLegacyContent): _88.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _88.MsgExecLegacyContentProtoMsg): _88.MsgExecLegacyContent;
                toProto(message: _88.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _88.MsgExecLegacyContent): _88.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _88.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_88.MsgExecLegacyContentResponse>): _88.MsgExecLegacyContentResponse;
                fromAmino(_: _88.MsgExecLegacyContentResponseAmino): _88.MsgExecLegacyContentResponse;
                toAmino(_: _88.MsgExecLegacyContentResponse): _88.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _88.MsgExecLegacyContentResponseAminoMsg): _88.MsgExecLegacyContentResponse;
                toAminoMsg(message: _88.MsgExecLegacyContentResponse): _88.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _88.MsgExecLegacyContentResponseProtoMsg): _88.MsgExecLegacyContentResponse;
                toProto(message: _88.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _88.MsgExecLegacyContentResponse): _88.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _88.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgVote;
                fromPartial(object: Partial<_88.MsgVote>): _88.MsgVote;
                fromAmino(object: _88.MsgVoteAmino): _88.MsgVote;
                toAmino(message: _88.MsgVote): _88.MsgVoteAmino;
                fromAminoMsg(object: _88.MsgVoteAminoMsg): _88.MsgVote;
                toAminoMsg(message: _88.MsgVote): _88.MsgVoteAminoMsg;
                fromProtoMsg(message: _88.MsgVoteProtoMsg): _88.MsgVote;
                toProto(message: _88.MsgVote): Uint8Array;
                toProtoMsg(message: _88.MsgVote): _88.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _88.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.MsgVoteResponse;
                fromPartial(_: Partial<_88.MsgVoteResponse>): _88.MsgVoteResponse;
                fromAmino(_: _88.MsgVoteResponseAmino): _88.MsgVoteResponse;
                toAmino(_: _88.MsgVoteResponse): _88.MsgVoteResponseAmino;
                fromAminoMsg(object: _88.MsgVoteResponseAminoMsg): _88.MsgVoteResponse;
                toAminoMsg(message: _88.MsgVoteResponse): _88.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _88.MsgVoteResponseProtoMsg): _88.MsgVoteResponse;
                toProto(message: _88.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _88.MsgVoteResponse): _88.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _88.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgVoteWeighted;
                fromPartial(object: Partial<_88.MsgVoteWeighted>): _88.MsgVoteWeighted;
                fromAmino(object: _88.MsgVoteWeightedAmino): _88.MsgVoteWeighted;
                toAmino(message: _88.MsgVoteWeighted): _88.MsgVoteWeightedAmino;
                fromAminoMsg(object: _88.MsgVoteWeightedAminoMsg): _88.MsgVoteWeighted;
                toAminoMsg(message: _88.MsgVoteWeighted): _88.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _88.MsgVoteWeightedProtoMsg): _88.MsgVoteWeighted;
                toProto(message: _88.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _88.MsgVoteWeighted): _88.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _88.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_88.MsgVoteWeightedResponse>): _88.MsgVoteWeightedResponse;
                fromAmino(_: _88.MsgVoteWeightedResponseAmino): _88.MsgVoteWeightedResponse;
                toAmino(_: _88.MsgVoteWeightedResponse): _88.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _88.MsgVoteWeightedResponseAminoMsg): _88.MsgVoteWeightedResponse;
                toAminoMsg(message: _88.MsgVoteWeightedResponse): _88.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _88.MsgVoteWeightedResponseProtoMsg): _88.MsgVoteWeightedResponse;
                toProto(message: _88.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _88.MsgVoteWeightedResponse): _88.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _88.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgDeposit;
                fromPartial(object: Partial<_88.MsgDeposit>): _88.MsgDeposit;
                fromAmino(object: _88.MsgDepositAmino): _88.MsgDeposit;
                toAmino(message: _88.MsgDeposit): _88.MsgDepositAmino;
                fromAminoMsg(object: _88.MsgDepositAminoMsg): _88.MsgDeposit;
                toAminoMsg(message: _88.MsgDeposit): _88.MsgDepositAminoMsg;
                fromProtoMsg(message: _88.MsgDepositProtoMsg): _88.MsgDeposit;
                toProto(message: _88.MsgDeposit): Uint8Array;
                toProtoMsg(message: _88.MsgDeposit): _88.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _88.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.MsgDepositResponse;
                fromPartial(_: Partial<_88.MsgDepositResponse>): _88.MsgDepositResponse;
                fromAmino(_: _88.MsgDepositResponseAmino): _88.MsgDepositResponse;
                toAmino(_: _88.MsgDepositResponse): _88.MsgDepositResponseAmino;
                fromAminoMsg(object: _88.MsgDepositResponseAminoMsg): _88.MsgDepositResponse;
                toAminoMsg(message: _88.MsgDepositResponse): _88.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _88.MsgDepositResponseProtoMsg): _88.MsgDepositResponse;
                toProto(message: _88.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _88.MsgDepositResponse): _88.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _90.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _87.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryProposalRequest;
                fromPartial(object: Partial<_87.QueryProposalRequest>): _87.QueryProposalRequest;
                fromAmino(object: _87.QueryProposalRequestAmino): _87.QueryProposalRequest;
                toAmino(message: _87.QueryProposalRequest): _87.QueryProposalRequestAmino;
                fromAminoMsg(object: _87.QueryProposalRequestAminoMsg): _87.QueryProposalRequest;
                toAminoMsg(message: _87.QueryProposalRequest): _87.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _87.QueryProposalRequestProtoMsg): _87.QueryProposalRequest;
                toProto(message: _87.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _87.QueryProposalRequest): _87.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _87.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryProposalResponse;
                fromPartial(object: Partial<_87.QueryProposalResponse>): _87.QueryProposalResponse;
                fromAmino(object: _87.QueryProposalResponseAmino): _87.QueryProposalResponse;
                toAmino(message: _87.QueryProposalResponse): _87.QueryProposalResponseAmino;
                fromAminoMsg(object: _87.QueryProposalResponseAminoMsg): _87.QueryProposalResponse;
                toAminoMsg(message: _87.QueryProposalResponse): _87.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _87.QueryProposalResponseProtoMsg): _87.QueryProposalResponse;
                toProto(message: _87.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _87.QueryProposalResponse): _87.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _87.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryProposalsRequest;
                fromPartial(object: Partial<_87.QueryProposalsRequest>): _87.QueryProposalsRequest;
                fromAmino(object: _87.QueryProposalsRequestAmino): _87.QueryProposalsRequest;
                toAmino(message: _87.QueryProposalsRequest): _87.QueryProposalsRequestAmino;
                fromAminoMsg(object: _87.QueryProposalsRequestAminoMsg): _87.QueryProposalsRequest;
                toAminoMsg(message: _87.QueryProposalsRequest): _87.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryProposalsRequestProtoMsg): _87.QueryProposalsRequest;
                toProto(message: _87.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryProposalsRequest): _87.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _87.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryProposalsResponse;
                fromPartial(object: Partial<_87.QueryProposalsResponse>): _87.QueryProposalsResponse;
                fromAmino(object: _87.QueryProposalsResponseAmino): _87.QueryProposalsResponse;
                toAmino(message: _87.QueryProposalsResponse): _87.QueryProposalsResponseAmino;
                fromAminoMsg(object: _87.QueryProposalsResponseAminoMsg): _87.QueryProposalsResponse;
                toAminoMsg(message: _87.QueryProposalsResponse): _87.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryProposalsResponseProtoMsg): _87.QueryProposalsResponse;
                toProto(message: _87.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryProposalsResponse): _87.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _87.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryVoteRequest;
                fromPartial(object: Partial<_87.QueryVoteRequest>): _87.QueryVoteRequest;
                fromAmino(object: _87.QueryVoteRequestAmino): _87.QueryVoteRequest;
                toAmino(message: _87.QueryVoteRequest): _87.QueryVoteRequestAmino;
                fromAminoMsg(object: _87.QueryVoteRequestAminoMsg): _87.QueryVoteRequest;
                toAminoMsg(message: _87.QueryVoteRequest): _87.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _87.QueryVoteRequestProtoMsg): _87.QueryVoteRequest;
                toProto(message: _87.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _87.QueryVoteRequest): _87.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _87.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryVoteResponse;
                fromPartial(object: Partial<_87.QueryVoteResponse>): _87.QueryVoteResponse;
                fromAmino(object: _87.QueryVoteResponseAmino): _87.QueryVoteResponse;
                toAmino(message: _87.QueryVoteResponse): _87.QueryVoteResponseAmino;
                fromAminoMsg(object: _87.QueryVoteResponseAminoMsg): _87.QueryVoteResponse;
                toAminoMsg(message: _87.QueryVoteResponse): _87.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _87.QueryVoteResponseProtoMsg): _87.QueryVoteResponse;
                toProto(message: _87.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _87.QueryVoteResponse): _87.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _87.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryVotesRequest;
                fromPartial(object: Partial<_87.QueryVotesRequest>): _87.QueryVotesRequest;
                fromAmino(object: _87.QueryVotesRequestAmino): _87.QueryVotesRequest;
                toAmino(message: _87.QueryVotesRequest): _87.QueryVotesRequestAmino;
                fromAminoMsg(object: _87.QueryVotesRequestAminoMsg): _87.QueryVotesRequest;
                toAminoMsg(message: _87.QueryVotesRequest): _87.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _87.QueryVotesRequestProtoMsg): _87.QueryVotesRequest;
                toProto(message: _87.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _87.QueryVotesRequest): _87.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _87.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryVotesResponse;
                fromPartial(object: Partial<_87.QueryVotesResponse>): _87.QueryVotesResponse;
                fromAmino(object: _87.QueryVotesResponseAmino): _87.QueryVotesResponse;
                toAmino(message: _87.QueryVotesResponse): _87.QueryVotesResponseAmino;
                fromAminoMsg(object: _87.QueryVotesResponseAminoMsg): _87.QueryVotesResponse;
                toAminoMsg(message: _87.QueryVotesResponse): _87.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _87.QueryVotesResponseProtoMsg): _87.QueryVotesResponse;
                toProto(message: _87.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _87.QueryVotesResponse): _87.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _87.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryParamsRequest;
                fromPartial(object: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                fromAmino(object: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                toAmino(message: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
                fromAminoMsg(object: _87.QueryParamsRequestAminoMsg): _87.QueryParamsRequest;
                toAminoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryParamsRequestProtoMsg): _87.QueryParamsRequest;
                toProto(message: _87.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _87.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryParamsResponse;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
                fromAmino(object: _87.QueryParamsResponseAmino): _87.QueryParamsResponse;
                toAmino(message: _87.QueryParamsResponse): _87.QueryParamsResponseAmino;
                fromAminoMsg(object: _87.QueryParamsResponseAminoMsg): _87.QueryParamsResponse;
                toAminoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryParamsResponseProtoMsg): _87.QueryParamsResponse;
                toProto(message: _87.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _87.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryDepositRequest;
                fromPartial(object: Partial<_87.QueryDepositRequest>): _87.QueryDepositRequest;
                fromAmino(object: _87.QueryDepositRequestAmino): _87.QueryDepositRequest;
                toAmino(message: _87.QueryDepositRequest): _87.QueryDepositRequestAmino;
                fromAminoMsg(object: _87.QueryDepositRequestAminoMsg): _87.QueryDepositRequest;
                toAminoMsg(message: _87.QueryDepositRequest): _87.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _87.QueryDepositRequestProtoMsg): _87.QueryDepositRequest;
                toProto(message: _87.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDepositRequest): _87.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _87.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryDepositResponse;
                fromPartial(object: Partial<_87.QueryDepositResponse>): _87.QueryDepositResponse;
                fromAmino(object: _87.QueryDepositResponseAmino): _87.QueryDepositResponse;
                toAmino(message: _87.QueryDepositResponse): _87.QueryDepositResponseAmino;
                fromAminoMsg(object: _87.QueryDepositResponseAminoMsg): _87.QueryDepositResponse;
                toAminoMsg(message: _87.QueryDepositResponse): _87.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _87.QueryDepositResponseProtoMsg): _87.QueryDepositResponse;
                toProto(message: _87.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDepositResponse): _87.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _87.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryDepositsRequest;
                fromPartial(object: Partial<_87.QueryDepositsRequest>): _87.QueryDepositsRequest;
                fromAmino(object: _87.QueryDepositsRequestAmino): _87.QueryDepositsRequest;
                toAmino(message: _87.QueryDepositsRequest): _87.QueryDepositsRequestAmino;
                fromAminoMsg(object: _87.QueryDepositsRequestAminoMsg): _87.QueryDepositsRequest;
                toAminoMsg(message: _87.QueryDepositsRequest): _87.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryDepositsRequestProtoMsg): _87.QueryDepositsRequest;
                toProto(message: _87.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDepositsRequest): _87.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _87.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryDepositsResponse;
                fromPartial(object: Partial<_87.QueryDepositsResponse>): _87.QueryDepositsResponse;
                fromAmino(object: _87.QueryDepositsResponseAmino): _87.QueryDepositsResponse;
                toAmino(message: _87.QueryDepositsResponse): _87.QueryDepositsResponseAmino;
                fromAminoMsg(object: _87.QueryDepositsResponseAminoMsg): _87.QueryDepositsResponse;
                toAminoMsg(message: _87.QueryDepositsResponse): _87.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryDepositsResponseProtoMsg): _87.QueryDepositsResponse;
                toProto(message: _87.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDepositsResponse): _87.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _87.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryTallyResultRequest;
                fromPartial(object: Partial<_87.QueryTallyResultRequest>): _87.QueryTallyResultRequest;
                fromAmino(object: _87.QueryTallyResultRequestAmino): _87.QueryTallyResultRequest;
                toAmino(message: _87.QueryTallyResultRequest): _87.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _87.QueryTallyResultRequestAminoMsg): _87.QueryTallyResultRequest;
                toAminoMsg(message: _87.QueryTallyResultRequest): _87.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _87.QueryTallyResultRequestProtoMsg): _87.QueryTallyResultRequest;
                toProto(message: _87.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _87.QueryTallyResultRequest): _87.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _87.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryTallyResultResponse;
                fromPartial(object: Partial<_87.QueryTallyResultResponse>): _87.QueryTallyResultResponse;
                fromAmino(object: _87.QueryTallyResultResponseAmino): _87.QueryTallyResultResponse;
                toAmino(message: _87.QueryTallyResultResponse): _87.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _87.QueryTallyResultResponseAminoMsg): _87.QueryTallyResultResponse;
                toAminoMsg(message: _87.QueryTallyResultResponse): _87.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _87.QueryTallyResultResponseProtoMsg): _87.QueryTallyResultResponse;
                toProto(message: _87.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _87.QueryTallyResultResponse): _87.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _86.VoteOption;
            voteOptionToJSON(object: _86.VoteOption): string;
            proposalStatusFromJSON(object: any): _86.ProposalStatus;
            proposalStatusToJSON(object: _86.ProposalStatus): string;
            VoteOption: typeof _86.VoteOption;
            VoteOptionSDKType: typeof _86.VoteOption;
            VoteOptionAmino: typeof _86.VoteOption;
            ProposalStatus: typeof _86.ProposalStatus;
            ProposalStatusSDKType: typeof _86.ProposalStatus;
            ProposalStatusAmino: typeof _86.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _86.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.WeightedVoteOption;
                fromPartial(object: Partial<_86.WeightedVoteOption>): _86.WeightedVoteOption;
                fromAmino(object: _86.WeightedVoteOptionAmino): _86.WeightedVoteOption;
                toAmino(message: _86.WeightedVoteOption): _86.WeightedVoteOptionAmino;
                fromAminoMsg(object: _86.WeightedVoteOptionAminoMsg): _86.WeightedVoteOption;
                toAminoMsg(message: _86.WeightedVoteOption): _86.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _86.WeightedVoteOptionProtoMsg): _86.WeightedVoteOption;
                toProto(message: _86.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _86.WeightedVoteOption): _86.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _86.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Deposit;
                fromPartial(object: Partial<_86.Deposit>): _86.Deposit;
                fromAmino(object: _86.DepositAmino): _86.Deposit;
                toAmino(message: _86.Deposit): _86.DepositAmino;
                fromAminoMsg(object: _86.DepositAminoMsg): _86.Deposit;
                toAminoMsg(message: _86.Deposit): _86.DepositAminoMsg;
                fromProtoMsg(message: _86.DepositProtoMsg): _86.Deposit;
                toProto(message: _86.Deposit): Uint8Array;
                toProtoMsg(message: _86.Deposit): _86.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _86.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Proposal;
                fromPartial(object: Partial<_86.Proposal>): _86.Proposal;
                fromAmino(object: _86.ProposalAmino): _86.Proposal;
                toAmino(message: _86.Proposal): _86.ProposalAmino;
                fromAminoMsg(object: _86.ProposalAminoMsg): _86.Proposal;
                toAminoMsg(message: _86.Proposal): _86.ProposalAminoMsg;
                fromProtoMsg(message: _86.ProposalProtoMsg): _86.Proposal;
                toProto(message: _86.Proposal): Uint8Array;
                toProtoMsg(message: _86.Proposal): _86.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _86.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.TallyResult;
                fromPartial(object: Partial<_86.TallyResult>): _86.TallyResult;
                fromAmino(object: _86.TallyResultAmino): _86.TallyResult;
                toAmino(message: _86.TallyResult): _86.TallyResultAmino;
                fromAminoMsg(object: _86.TallyResultAminoMsg): _86.TallyResult;
                toAminoMsg(message: _86.TallyResult): _86.TallyResultAminoMsg;
                fromProtoMsg(message: _86.TallyResultProtoMsg): _86.TallyResult;
                toProto(message: _86.TallyResult): Uint8Array;
                toProtoMsg(message: _86.TallyResult): _86.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _86.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Vote;
                fromPartial(object: Partial<_86.Vote>): _86.Vote;
                fromAmino(object: _86.VoteAmino): _86.Vote;
                toAmino(message: _86.Vote): _86.VoteAmino;
                fromAminoMsg(object: _86.VoteAminoMsg): _86.Vote;
                toAminoMsg(message: _86.Vote): _86.VoteAminoMsg;
                fromProtoMsg(message: _86.VoteProtoMsg): _86.Vote;
                toProto(message: _86.Vote): Uint8Array;
                toProtoMsg(message: _86.Vote): _86.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _86.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.DepositParams;
                fromPartial(object: Partial<_86.DepositParams>): _86.DepositParams;
                fromAmino(object: _86.DepositParamsAmino): _86.DepositParams;
                toAmino(message: _86.DepositParams): _86.DepositParamsAmino;
                fromAminoMsg(object: _86.DepositParamsAminoMsg): _86.DepositParams;
                toAminoMsg(message: _86.DepositParams): _86.DepositParamsAminoMsg;
                fromProtoMsg(message: _86.DepositParamsProtoMsg): _86.DepositParams;
                toProto(message: _86.DepositParams): Uint8Array;
                toProtoMsg(message: _86.DepositParams): _86.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _86.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.VotingParams;
                fromPartial(object: Partial<_86.VotingParams>): _86.VotingParams;
                fromAmino(object: _86.VotingParamsAmino): _86.VotingParams;
                toAmino(message: _86.VotingParams): _86.VotingParamsAmino;
                fromAminoMsg(object: _86.VotingParamsAminoMsg): _86.VotingParams;
                toAminoMsg(message: _86.VotingParams): _86.VotingParamsAminoMsg;
                fromProtoMsg(message: _86.VotingParamsProtoMsg): _86.VotingParams;
                toProto(message: _86.VotingParams): Uint8Array;
                toProtoMsg(message: _86.VotingParams): _86.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _86.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.TallyParams;
                fromPartial(object: Partial<_86.TallyParams>): _86.TallyParams;
                fromAmino(object: _86.TallyParamsAmino): _86.TallyParams;
                toAmino(message: _86.TallyParams): _86.TallyParamsAmino;
                fromAminoMsg(object: _86.TallyParamsAminoMsg): _86.TallyParams;
                toAminoMsg(message: _86.TallyParams): _86.TallyParamsAminoMsg;
                fromProtoMsg(message: _86.TallyParamsProtoMsg): _86.TallyParams;
                toProto(message: _86.TallyParams): Uint8Array;
                toProtoMsg(message: _86.TallyParams): _86.TallyParamsProtoMsg;
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
        };
        const v1beta1: {
            MsgClientImpl: typeof _256.MsgClientImpl;
            QueryClientImpl: typeof _240.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _91.QueryProposalRequest): Promise<_91.QueryProposalResponse>;
                proposals(request: _91.QueryProposalsRequest): Promise<_91.QueryProposalsResponse>;
                vote(request: _91.QueryVoteRequest): Promise<_91.QueryVoteResponse>;
                votes(request: _91.QueryVotesRequest): Promise<_91.QueryVotesResponse>;
                params(request: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                deposit(request: _91.QueryDepositRequest): Promise<_91.QueryDepositResponse>;
                deposits(request: _91.QueryDepositsRequest): Promise<_91.QueryDepositsResponse>;
                tallyResult(request: _91.QueryTallyResultRequest): Promise<_91.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _92.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _92.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _92.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _92.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _92.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _92.MsgSubmitProposal;
                    };
                    vote(value: _92.MsgVote): {
                        typeUrl: string;
                        value: _92.MsgVote;
                    };
                    voteWeighted(value: _92.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _92.MsgVoteWeighted;
                    };
                    deposit(value: _92.MsgDeposit): {
                        typeUrl: string;
                        value: _92.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _92.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _92.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _92.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _92.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _92.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _92.MsgSubmitProposal;
                    };
                    vote(value: _92.MsgVote): {
                        typeUrl: string;
                        value: _92.MsgVote;
                    };
                    voteWeighted(value: _92.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _92.MsgVoteWeighted;
                    };
                    deposit(value: _92.MsgDeposit): {
                        typeUrl: string;
                        value: _92.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _92.MsgSubmitProposal) => _92.MsgSubmitProposalAmino;
                    fromAmino: (object: _92.MsgSubmitProposalAmino) => _92.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _92.MsgVote) => _92.MsgVoteAmino;
                    fromAmino: (object: _92.MsgVoteAmino) => _92.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _92.MsgVoteWeighted) => _92.MsgVoteWeightedAmino;
                    fromAmino: (object: _92.MsgVoteWeightedAmino) => _92.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _92.MsgDeposit) => _92.MsgDepositAmino;
                    fromAmino: (object: _92.MsgDepositAmino) => _92.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _92.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgSubmitProposal;
                fromPartial(object: Partial<_92.MsgSubmitProposal>): _92.MsgSubmitProposal;
                fromAmino(object: _92.MsgSubmitProposalAmino): _92.MsgSubmitProposal;
                toAmino(message: _92.MsgSubmitProposal): _92.MsgSubmitProposalAmino;
                fromAminoMsg(object: _92.MsgSubmitProposalAminoMsg): _92.MsgSubmitProposal;
                toAminoMsg(message: _92.MsgSubmitProposal): _92.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _92.MsgSubmitProposalProtoMsg): _92.MsgSubmitProposal;
                toProto(message: _92.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _92.MsgSubmitProposal): _92.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _92.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_92.MsgSubmitProposalResponse>): _92.MsgSubmitProposalResponse;
                fromAmino(object: _92.MsgSubmitProposalResponseAmino): _92.MsgSubmitProposalResponse;
                toAmino(message: _92.MsgSubmitProposalResponse): _92.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _92.MsgSubmitProposalResponseAminoMsg): _92.MsgSubmitProposalResponse;
                toAminoMsg(message: _92.MsgSubmitProposalResponse): _92.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _92.MsgSubmitProposalResponseProtoMsg): _92.MsgSubmitProposalResponse;
                toProto(message: _92.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _92.MsgSubmitProposalResponse): _92.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _92.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgVote;
                fromPartial(object: Partial<_92.MsgVote>): _92.MsgVote;
                fromAmino(object: _92.MsgVoteAmino): _92.MsgVote;
                toAmino(message: _92.MsgVote): _92.MsgVoteAmino;
                fromAminoMsg(object: _92.MsgVoteAminoMsg): _92.MsgVote;
                toAminoMsg(message: _92.MsgVote): _92.MsgVoteAminoMsg;
                fromProtoMsg(message: _92.MsgVoteProtoMsg): _92.MsgVote;
                toProto(message: _92.MsgVote): Uint8Array;
                toProtoMsg(message: _92.MsgVote): _92.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _92.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgVoteResponse;
                fromPartial(_: Partial<_92.MsgVoteResponse>): _92.MsgVoteResponse;
                fromAmino(_: _92.MsgVoteResponseAmino): _92.MsgVoteResponse;
                toAmino(_: _92.MsgVoteResponse): _92.MsgVoteResponseAmino;
                fromAminoMsg(object: _92.MsgVoteResponseAminoMsg): _92.MsgVoteResponse;
                toAminoMsg(message: _92.MsgVoteResponse): _92.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _92.MsgVoteResponseProtoMsg): _92.MsgVoteResponse;
                toProto(message: _92.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _92.MsgVoteResponse): _92.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _92.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgVoteWeighted;
                fromPartial(object: Partial<_92.MsgVoteWeighted>): _92.MsgVoteWeighted;
                fromAmino(object: _92.MsgVoteWeightedAmino): _92.MsgVoteWeighted;
                toAmino(message: _92.MsgVoteWeighted): _92.MsgVoteWeightedAmino;
                fromAminoMsg(object: _92.MsgVoteWeightedAminoMsg): _92.MsgVoteWeighted;
                toAminoMsg(message: _92.MsgVoteWeighted): _92.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _92.MsgVoteWeightedProtoMsg): _92.MsgVoteWeighted;
                toProto(message: _92.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _92.MsgVoteWeighted): _92.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _92.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_92.MsgVoteWeightedResponse>): _92.MsgVoteWeightedResponse;
                fromAmino(_: _92.MsgVoteWeightedResponseAmino): _92.MsgVoteWeightedResponse;
                toAmino(_: _92.MsgVoteWeightedResponse): _92.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _92.MsgVoteWeightedResponseAminoMsg): _92.MsgVoteWeightedResponse;
                toAminoMsg(message: _92.MsgVoteWeightedResponse): _92.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _92.MsgVoteWeightedResponseProtoMsg): _92.MsgVoteWeightedResponse;
                toProto(message: _92.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _92.MsgVoteWeightedResponse): _92.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _92.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgDeposit;
                fromPartial(object: Partial<_92.MsgDeposit>): _92.MsgDeposit;
                fromAmino(object: _92.MsgDepositAmino): _92.MsgDeposit;
                toAmino(message: _92.MsgDeposit): _92.MsgDepositAmino;
                fromAminoMsg(object: _92.MsgDepositAminoMsg): _92.MsgDeposit;
                toAminoMsg(message: _92.MsgDeposit): _92.MsgDepositAminoMsg;
                fromProtoMsg(message: _92.MsgDepositProtoMsg): _92.MsgDeposit;
                toProto(message: _92.MsgDeposit): Uint8Array;
                toProtoMsg(message: _92.MsgDeposit): _92.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _92.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgDepositResponse;
                fromPartial(_: Partial<_92.MsgDepositResponse>): _92.MsgDepositResponse;
                fromAmino(_: _92.MsgDepositResponseAmino): _92.MsgDepositResponse;
                toAmino(_: _92.MsgDepositResponse): _92.MsgDepositResponseAmino;
                fromAminoMsg(object: _92.MsgDepositResponseAminoMsg): _92.MsgDepositResponse;
                toAminoMsg(message: _92.MsgDepositResponse): _92.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _92.MsgDepositResponseProtoMsg): _92.MsgDepositResponse;
                toProto(message: _92.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _92.MsgDepositResponse): _92.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _90.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _91.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryProposalRequest;
                fromPartial(object: Partial<_91.QueryProposalRequest>): _91.QueryProposalRequest;
                fromAmino(object: _91.QueryProposalRequestAmino): _91.QueryProposalRequest;
                toAmino(message: _91.QueryProposalRequest): _91.QueryProposalRequestAmino;
                fromAminoMsg(object: _91.QueryProposalRequestAminoMsg): _91.QueryProposalRequest;
                toAminoMsg(message: _91.QueryProposalRequest): _91.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _91.QueryProposalRequestProtoMsg): _91.QueryProposalRequest;
                toProto(message: _91.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _91.QueryProposalRequest): _91.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _91.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryProposalResponse;
                fromPartial(object: Partial<_91.QueryProposalResponse>): _91.QueryProposalResponse;
                fromAmino(object: _91.QueryProposalResponseAmino): _91.QueryProposalResponse;
                toAmino(message: _91.QueryProposalResponse): _91.QueryProposalResponseAmino;
                fromAminoMsg(object: _91.QueryProposalResponseAminoMsg): _91.QueryProposalResponse;
                toAminoMsg(message: _91.QueryProposalResponse): _91.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _91.QueryProposalResponseProtoMsg): _91.QueryProposalResponse;
                toProto(message: _91.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _91.QueryProposalResponse): _91.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _91.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryProposalsRequest;
                fromPartial(object: Partial<_91.QueryProposalsRequest>): _91.QueryProposalsRequest;
                fromAmino(object: _91.QueryProposalsRequestAmino): _91.QueryProposalsRequest;
                toAmino(message: _91.QueryProposalsRequest): _91.QueryProposalsRequestAmino;
                fromAminoMsg(object: _91.QueryProposalsRequestAminoMsg): _91.QueryProposalsRequest;
                toAminoMsg(message: _91.QueryProposalsRequest): _91.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _91.QueryProposalsRequestProtoMsg): _91.QueryProposalsRequest;
                toProto(message: _91.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _91.QueryProposalsRequest): _91.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _91.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryProposalsResponse;
                fromPartial(object: Partial<_91.QueryProposalsResponse>): _91.QueryProposalsResponse;
                fromAmino(object: _91.QueryProposalsResponseAmino): _91.QueryProposalsResponse;
                toAmino(message: _91.QueryProposalsResponse): _91.QueryProposalsResponseAmino;
                fromAminoMsg(object: _91.QueryProposalsResponseAminoMsg): _91.QueryProposalsResponse;
                toAminoMsg(message: _91.QueryProposalsResponse): _91.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _91.QueryProposalsResponseProtoMsg): _91.QueryProposalsResponse;
                toProto(message: _91.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _91.QueryProposalsResponse): _91.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _91.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryVoteRequest;
                fromPartial(object: Partial<_91.QueryVoteRequest>): _91.QueryVoteRequest;
                fromAmino(object: _91.QueryVoteRequestAmino): _91.QueryVoteRequest;
                toAmino(message: _91.QueryVoteRequest): _91.QueryVoteRequestAmino;
                fromAminoMsg(object: _91.QueryVoteRequestAminoMsg): _91.QueryVoteRequest;
                toAminoMsg(message: _91.QueryVoteRequest): _91.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _91.QueryVoteRequestProtoMsg): _91.QueryVoteRequest;
                toProto(message: _91.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _91.QueryVoteRequest): _91.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _91.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryVoteResponse;
                fromPartial(object: Partial<_91.QueryVoteResponse>): _91.QueryVoteResponse;
                fromAmino(object: _91.QueryVoteResponseAmino): _91.QueryVoteResponse;
                toAmino(message: _91.QueryVoteResponse): _91.QueryVoteResponseAmino;
                fromAminoMsg(object: _91.QueryVoteResponseAminoMsg): _91.QueryVoteResponse;
                toAminoMsg(message: _91.QueryVoteResponse): _91.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _91.QueryVoteResponseProtoMsg): _91.QueryVoteResponse;
                toProto(message: _91.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _91.QueryVoteResponse): _91.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _91.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryVotesRequest;
                fromPartial(object: Partial<_91.QueryVotesRequest>): _91.QueryVotesRequest;
                fromAmino(object: _91.QueryVotesRequestAmino): _91.QueryVotesRequest;
                toAmino(message: _91.QueryVotesRequest): _91.QueryVotesRequestAmino;
                fromAminoMsg(object: _91.QueryVotesRequestAminoMsg): _91.QueryVotesRequest;
                toAminoMsg(message: _91.QueryVotesRequest): _91.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _91.QueryVotesRequestProtoMsg): _91.QueryVotesRequest;
                toProto(message: _91.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _91.QueryVotesRequest): _91.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _91.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryVotesResponse;
                fromPartial(object: Partial<_91.QueryVotesResponse>): _91.QueryVotesResponse;
                fromAmino(object: _91.QueryVotesResponseAmino): _91.QueryVotesResponse;
                toAmino(message: _91.QueryVotesResponse): _91.QueryVotesResponseAmino;
                fromAminoMsg(object: _91.QueryVotesResponseAminoMsg): _91.QueryVotesResponse;
                toAminoMsg(message: _91.QueryVotesResponse): _91.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _91.QueryVotesResponseProtoMsg): _91.QueryVotesResponse;
                toProto(message: _91.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _91.QueryVotesResponse): _91.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _91.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryParamsRequest;
                fromPartial(object: Partial<_91.QueryParamsRequest>): _91.QueryParamsRequest;
                fromAmino(object: _91.QueryParamsRequestAmino): _91.QueryParamsRequest;
                toAmino(message: _91.QueryParamsRequest): _91.QueryParamsRequestAmino;
                fromAminoMsg(object: _91.QueryParamsRequestAminoMsg): _91.QueryParamsRequest;
                toAminoMsg(message: _91.QueryParamsRequest): _91.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _91.QueryParamsRequestProtoMsg): _91.QueryParamsRequest;
                toProto(message: _91.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _91.QueryParamsRequest): _91.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _91.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryParamsResponse;
                fromPartial(object: Partial<_91.QueryParamsResponse>): _91.QueryParamsResponse;
                fromAmino(object: _91.QueryParamsResponseAmino): _91.QueryParamsResponse;
                toAmino(message: _91.QueryParamsResponse): _91.QueryParamsResponseAmino;
                fromAminoMsg(object: _91.QueryParamsResponseAminoMsg): _91.QueryParamsResponse;
                toAminoMsg(message: _91.QueryParamsResponse): _91.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _91.QueryParamsResponseProtoMsg): _91.QueryParamsResponse;
                toProto(message: _91.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _91.QueryParamsResponse): _91.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _91.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryDepositRequest;
                fromPartial(object: Partial<_91.QueryDepositRequest>): _91.QueryDepositRequest;
                fromAmino(object: _91.QueryDepositRequestAmino): _91.QueryDepositRequest;
                toAmino(message: _91.QueryDepositRequest): _91.QueryDepositRequestAmino;
                fromAminoMsg(object: _91.QueryDepositRequestAminoMsg): _91.QueryDepositRequest;
                toAminoMsg(message: _91.QueryDepositRequest): _91.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _91.QueryDepositRequestProtoMsg): _91.QueryDepositRequest;
                toProto(message: _91.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _91.QueryDepositRequest): _91.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _91.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryDepositResponse;
                fromPartial(object: Partial<_91.QueryDepositResponse>): _91.QueryDepositResponse;
                fromAmino(object: _91.QueryDepositResponseAmino): _91.QueryDepositResponse;
                toAmino(message: _91.QueryDepositResponse): _91.QueryDepositResponseAmino;
                fromAminoMsg(object: _91.QueryDepositResponseAminoMsg): _91.QueryDepositResponse;
                toAminoMsg(message: _91.QueryDepositResponse): _91.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _91.QueryDepositResponseProtoMsg): _91.QueryDepositResponse;
                toProto(message: _91.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _91.QueryDepositResponse): _91.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _91.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryDepositsRequest;
                fromPartial(object: Partial<_91.QueryDepositsRequest>): _91.QueryDepositsRequest;
                fromAmino(object: _91.QueryDepositsRequestAmino): _91.QueryDepositsRequest;
                toAmino(message: _91.QueryDepositsRequest): _91.QueryDepositsRequestAmino;
                fromAminoMsg(object: _91.QueryDepositsRequestAminoMsg): _91.QueryDepositsRequest;
                toAminoMsg(message: _91.QueryDepositsRequest): _91.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _91.QueryDepositsRequestProtoMsg): _91.QueryDepositsRequest;
                toProto(message: _91.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _91.QueryDepositsRequest): _91.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _91.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryDepositsResponse;
                fromPartial(object: Partial<_91.QueryDepositsResponse>): _91.QueryDepositsResponse;
                fromAmino(object: _91.QueryDepositsResponseAmino): _91.QueryDepositsResponse;
                toAmino(message: _91.QueryDepositsResponse): _91.QueryDepositsResponseAmino;
                fromAminoMsg(object: _91.QueryDepositsResponseAminoMsg): _91.QueryDepositsResponse;
                toAminoMsg(message: _91.QueryDepositsResponse): _91.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _91.QueryDepositsResponseProtoMsg): _91.QueryDepositsResponse;
                toProto(message: _91.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _91.QueryDepositsResponse): _91.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _91.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryTallyResultRequest;
                fromPartial(object: Partial<_91.QueryTallyResultRequest>): _91.QueryTallyResultRequest;
                fromAmino(object: _91.QueryTallyResultRequestAmino): _91.QueryTallyResultRequest;
                toAmino(message: _91.QueryTallyResultRequest): _91.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _91.QueryTallyResultRequestAminoMsg): _91.QueryTallyResultRequest;
                toAminoMsg(message: _91.QueryTallyResultRequest): _91.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _91.QueryTallyResultRequestProtoMsg): _91.QueryTallyResultRequest;
                toProto(message: _91.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _91.QueryTallyResultRequest): _91.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _91.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryTallyResultResponse;
                fromPartial(object: Partial<_91.QueryTallyResultResponse>): _91.QueryTallyResultResponse;
                fromAmino(object: _91.QueryTallyResultResponseAmino): _91.QueryTallyResultResponse;
                toAmino(message: _91.QueryTallyResultResponse): _91.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _91.QueryTallyResultResponseAminoMsg): _91.QueryTallyResultResponse;
                toAminoMsg(message: _91.QueryTallyResultResponse): _91.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _91.QueryTallyResultResponseProtoMsg): _91.QueryTallyResultResponse;
                toProto(message: _91.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _91.QueryTallyResultResponse): _91.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _90.VoteOption;
            voteOptionToJSON(object: _90.VoteOption): string;
            proposalStatusFromJSON(object: any): _90.ProposalStatus;
            proposalStatusToJSON(object: _90.ProposalStatus): string;
            VoteOption: typeof _90.VoteOption;
            VoteOptionSDKType: typeof _90.VoteOption;
            VoteOptionAmino: typeof _90.VoteOption;
            ProposalStatus: typeof _90.ProposalStatus;
            ProposalStatusSDKType: typeof _90.ProposalStatus;
            ProposalStatusAmino: typeof _90.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _90.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.WeightedVoteOption;
                fromPartial(object: Partial<_90.WeightedVoteOption>): _90.WeightedVoteOption;
                fromAmino(object: _90.WeightedVoteOptionAmino): _90.WeightedVoteOption;
                toAmino(message: _90.WeightedVoteOption): _90.WeightedVoteOptionAmino;
                fromAminoMsg(object: _90.WeightedVoteOptionAminoMsg): _90.WeightedVoteOption;
                toAminoMsg(message: _90.WeightedVoteOption): _90.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _90.WeightedVoteOptionProtoMsg): _90.WeightedVoteOption;
                toProto(message: _90.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _90.WeightedVoteOption): _90.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _90.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.TextProposal;
                fromPartial(object: Partial<_90.TextProposal>): _90.TextProposal;
                fromAmino(object: _90.TextProposalAmino): _90.TextProposal;
                toAmino(message: _90.TextProposal): _90.TextProposalAmino;
                fromAminoMsg(object: _90.TextProposalAminoMsg): _90.TextProposal;
                toAminoMsg(message: _90.TextProposal): _90.TextProposalAminoMsg;
                fromProtoMsg(message: _90.TextProposalProtoMsg): _90.TextProposal;
                toProto(message: _90.TextProposal): Uint8Array;
                toProtoMsg(message: _90.TextProposal): _90.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _90.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.Deposit;
                fromPartial(object: Partial<_90.Deposit>): _90.Deposit;
                fromAmino(object: _90.DepositAmino): _90.Deposit;
                toAmino(message: _90.Deposit): _90.DepositAmino;
                fromAminoMsg(object: _90.DepositAminoMsg): _90.Deposit;
                toAminoMsg(message: _90.Deposit): _90.DepositAminoMsg;
                fromProtoMsg(message: _90.DepositProtoMsg): _90.Deposit;
                toProto(message: _90.Deposit): Uint8Array;
                toProtoMsg(message: _90.Deposit): _90.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _90.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.Proposal;
                fromPartial(object: Partial<_90.Proposal>): _90.Proposal;
                fromAmino(object: _90.ProposalAmino): _90.Proposal;
                toAmino(message: _90.Proposal): _90.ProposalAmino;
                fromAminoMsg(object: _90.ProposalAminoMsg): _90.Proposal;
                toAminoMsg(message: _90.Proposal): _90.ProposalAminoMsg;
                fromProtoMsg(message: _90.ProposalProtoMsg): _90.Proposal;
                toProto(message: _90.Proposal): Uint8Array;
                toProtoMsg(message: _90.Proposal): _90.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _90.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.TallyResult;
                fromPartial(object: Partial<_90.TallyResult>): _90.TallyResult;
                fromAmino(object: _90.TallyResultAmino): _90.TallyResult;
                toAmino(message: _90.TallyResult): _90.TallyResultAmino;
                fromAminoMsg(object: _90.TallyResultAminoMsg): _90.TallyResult;
                toAminoMsg(message: _90.TallyResult): _90.TallyResultAminoMsg;
                fromProtoMsg(message: _90.TallyResultProtoMsg): _90.TallyResult;
                toProto(message: _90.TallyResult): Uint8Array;
                toProtoMsg(message: _90.TallyResult): _90.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _90.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.Vote;
                fromPartial(object: Partial<_90.Vote>): _90.Vote;
                fromAmino(object: _90.VoteAmino): _90.Vote;
                toAmino(message: _90.Vote): _90.VoteAmino;
                fromAminoMsg(object: _90.VoteAminoMsg): _90.Vote;
                toAminoMsg(message: _90.Vote): _90.VoteAminoMsg;
                fromProtoMsg(message: _90.VoteProtoMsg): _90.Vote;
                toProto(message: _90.Vote): Uint8Array;
                toProtoMsg(message: _90.Vote): _90.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _90.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.DepositParams;
                fromPartial(object: Partial<_90.DepositParams>): _90.DepositParams;
                fromAmino(object: _90.DepositParamsAmino): _90.DepositParams;
                toAmino(message: _90.DepositParams): _90.DepositParamsAmino;
                fromAminoMsg(object: _90.DepositParamsAminoMsg): _90.DepositParams;
                toAminoMsg(message: _90.DepositParams): _90.DepositParamsAminoMsg;
                fromProtoMsg(message: _90.DepositParamsProtoMsg): _90.DepositParams;
                toProto(message: _90.DepositParams): Uint8Array;
                toProtoMsg(message: _90.DepositParams): _90.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _90.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.VotingParams;
                fromPartial(object: Partial<_90.VotingParams>): _90.VotingParams;
                fromAmino(object: _90.VotingParamsAmino): _90.VotingParams;
                toAmino(message: _90.VotingParams): _90.VotingParamsAmino;
                fromAminoMsg(object: _90.VotingParamsAminoMsg): _90.VotingParams;
                toAminoMsg(message: _90.VotingParams): _90.VotingParamsAminoMsg;
                fromProtoMsg(message: _90.VotingParamsProtoMsg): _90.VotingParams;
                toProto(message: _90.VotingParams): Uint8Array;
                toProtoMsg(message: _90.VotingParams): _90.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _90.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.TallyParams;
                fromPartial(object: Partial<_90.TallyParams>): _90.TallyParams;
                fromAmino(object: _90.TallyParamsAmino): _90.TallyParams;
                toAmino(message: _90.TallyParams): _90.TallyParamsAmino;
                fromAminoMsg(object: _90.TallyParamsAminoMsg): _90.TallyParams;
                toAminoMsg(message: _90.TallyParams): _90.TallyParamsAminoMsg;
                fromProtoMsg(message: _90.TallyParamsProtoMsg): _90.TallyParams;
                toProto(message: _90.TallyParams): Uint8Array;
                toProtoMsg(message: _90.TallyParams): _90.TallyParamsProtoMsg;
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
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _257.MsgClientImpl;
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _95.QueryGroupInfoRequest): Promise<_95.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _95.QueryGroupPolicyInfoRequest): Promise<_95.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _95.QueryGroupMembersRequest): Promise<_95.QueryGroupMembersResponse>;
                groupsByAdmin(request: _95.QueryGroupsByAdminRequest): Promise<_95.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _95.QueryGroupPoliciesByGroupRequest): Promise<_95.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _95.QueryGroupPoliciesByAdminRequest): Promise<_95.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _95.QueryProposalRequest): Promise<_95.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _95.QueryProposalsByGroupPolicyRequest): Promise<_95.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _95.QueryVoteByProposalVoterRequest): Promise<_95.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _95.QueryVotesByProposalRequest): Promise<_95.QueryVotesByProposalResponse>;
                votesByVoter(request: _95.QueryVotesByVoterRequest): Promise<_95.QueryVotesByVoterResponse>;
                groupsByMember(request: _95.QueryGroupsByMemberRequest): Promise<_95.QueryGroupsByMemberResponse>;
                tallyResult(request: _95.QueryTallyResultRequest): Promise<_95.QueryTallyResultResponse>;
                groups(request?: _95.QueryGroupsRequest): Promise<_95.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _96.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _96.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _96.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _96.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _96.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _96.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _96.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _96.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _96.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _96.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _96.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _96.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _96.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _96.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _96.MsgCreateGroup): {
                        typeUrl: string;
                        value: _96.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _96.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _96.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _96.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _96.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _96.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _96.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _96.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _96.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _96.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _96.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _96.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _96.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _96.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _96.MsgWithdrawProposal;
                    };
                    vote(value: _96.MsgVote): {
                        typeUrl: string;
                        value: _96.MsgVote;
                    };
                    exec(value: _96.MsgExec): {
                        typeUrl: string;
                        value: _96.MsgExec;
                    };
                    leaveGroup(value: _96.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _96.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _96.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _96.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _96.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _96.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _96.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _96.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _96.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _96.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _96.MsgCreateGroup): {
                        typeUrl: string;
                        value: _96.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _96.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _96.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _96.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _96.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _96.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _96.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _96.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _96.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _96.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _96.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _96.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _96.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _96.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _96.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _96.MsgWithdrawProposal;
                    };
                    vote(value: _96.MsgVote): {
                        typeUrl: string;
                        value: _96.MsgVote;
                    };
                    exec(value: _96.MsgExec): {
                        typeUrl: string;
                        value: _96.MsgExec;
                    };
                    leaveGroup(value: _96.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _96.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _96.MsgCreateGroup) => _96.MsgCreateGroupAmino;
                    fromAmino: (object: _96.MsgCreateGroupAmino) => _96.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUpdateGroupMembers) => _96.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _96.MsgUpdateGroupMembersAmino) => _96.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUpdateGroupAdmin) => _96.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _96.MsgUpdateGroupAdminAmino) => _96.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUpdateGroupMetadata) => _96.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _96.MsgUpdateGroupMetadataAmino) => _96.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _96.MsgCreateGroupPolicy) => _96.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _96.MsgCreateGroupPolicyAmino) => _96.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _96.MsgCreateGroupWithPolicy) => _96.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _96.MsgCreateGroupWithPolicyAmino) => _96.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUpdateGroupPolicyAdmin) => _96.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _96.MsgUpdateGroupPolicyAdminAmino) => _96.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUpdateGroupPolicyDecisionPolicy) => _96.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _96.MsgUpdateGroupPolicyDecisionPolicyAmino) => _96.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUpdateGroupPolicyMetadata) => _96.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _96.MsgUpdateGroupPolicyMetadataAmino) => _96.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _96.MsgSubmitProposal) => _96.MsgSubmitProposalAmino;
                    fromAmino: (object: _96.MsgSubmitProposalAmino) => _96.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _96.MsgWithdrawProposal) => _96.MsgWithdrawProposalAmino;
                    fromAmino: (object: _96.MsgWithdrawProposalAmino) => _96.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _96.MsgVote) => _96.MsgVoteAmino;
                    fromAmino: (object: _96.MsgVoteAmino) => _96.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _96.MsgExec) => _96.MsgExecAmino;
                    fromAmino: (object: _96.MsgExecAmino) => _96.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _96.MsgLeaveGroup) => _96.MsgLeaveGroupAmino;
                    fromAmino: (object: _96.MsgLeaveGroupAmino) => _96.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _97.VoteOption;
            voteOptionToJSON(object: _97.VoteOption): string;
            proposalStatusFromJSON(object: any): _97.ProposalStatus;
            proposalStatusToJSON(object: _97.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _97.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _97.ProposalExecutorResult): string;
            VoteOption: typeof _97.VoteOption;
            VoteOptionSDKType: typeof _97.VoteOption;
            VoteOptionAmino: typeof _97.VoteOption;
            ProposalStatus: typeof _97.ProposalStatus;
            ProposalStatusSDKType: typeof _97.ProposalStatus;
            ProposalStatusAmino: typeof _97.ProposalStatus;
            ProposalExecutorResult: typeof _97.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _97.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _97.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _97.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Member;
                fromPartial(object: Partial<_97.Member>): _97.Member;
                fromAmino(object: _97.MemberAmino): _97.Member;
                toAmino(message: _97.Member): _97.MemberAmino;
                fromAminoMsg(object: _97.MemberAminoMsg): _97.Member;
                toAminoMsg(message: _97.Member): _97.MemberAminoMsg;
                fromProtoMsg(message: _97.MemberProtoMsg): _97.Member;
                toProto(message: _97.Member): Uint8Array;
                toProtoMsg(message: _97.Member): _97.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _97.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MemberRequest;
                fromPartial(object: Partial<_97.MemberRequest>): _97.MemberRequest;
                fromAmino(object: _97.MemberRequestAmino): _97.MemberRequest;
                toAmino(message: _97.MemberRequest): _97.MemberRequestAmino;
                fromAminoMsg(object: _97.MemberRequestAminoMsg): _97.MemberRequest;
                toAminoMsg(message: _97.MemberRequest): _97.MemberRequestAminoMsg;
                fromProtoMsg(message: _97.MemberRequestProtoMsg): _97.MemberRequest;
                toProto(message: _97.MemberRequest): Uint8Array;
                toProtoMsg(message: _97.MemberRequest): _97.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _97.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_97.ThresholdDecisionPolicy>): _97.ThresholdDecisionPolicy;
                fromAmino(object: _97.ThresholdDecisionPolicyAmino): _97.ThresholdDecisionPolicy;
                toAmino(message: _97.ThresholdDecisionPolicy): _97.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _97.ThresholdDecisionPolicyAminoMsg): _97.ThresholdDecisionPolicy;
                toAminoMsg(message: _97.ThresholdDecisionPolicy): _97.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _97.ThresholdDecisionPolicyProtoMsg): _97.ThresholdDecisionPolicy;
                toProto(message: _97.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _97.ThresholdDecisionPolicy): _97.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _97.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.PercentageDecisionPolicy;
                fromPartial(object: Partial<_97.PercentageDecisionPolicy>): _97.PercentageDecisionPolicy;
                fromAmino(object: _97.PercentageDecisionPolicyAmino): _97.PercentageDecisionPolicy;
                toAmino(message: _97.PercentageDecisionPolicy): _97.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _97.PercentageDecisionPolicyAminoMsg): _97.PercentageDecisionPolicy;
                toAminoMsg(message: _97.PercentageDecisionPolicy): _97.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _97.PercentageDecisionPolicyProtoMsg): _97.PercentageDecisionPolicy;
                toProto(message: _97.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _97.PercentageDecisionPolicy): _97.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _97.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.DecisionPolicyWindows;
                fromPartial(object: Partial<_97.DecisionPolicyWindows>): _97.DecisionPolicyWindows;
                fromAmino(object: _97.DecisionPolicyWindowsAmino): _97.DecisionPolicyWindows;
                toAmino(message: _97.DecisionPolicyWindows): _97.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _97.DecisionPolicyWindowsAminoMsg): _97.DecisionPolicyWindows;
                toAminoMsg(message: _97.DecisionPolicyWindows): _97.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _97.DecisionPolicyWindowsProtoMsg): _97.DecisionPolicyWindows;
                toProto(message: _97.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _97.DecisionPolicyWindows): _97.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _97.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.GroupInfo;
                fromPartial(object: Partial<_97.GroupInfo>): _97.GroupInfo;
                fromAmino(object: _97.GroupInfoAmino): _97.GroupInfo;
                toAmino(message: _97.GroupInfo): _97.GroupInfoAmino;
                fromAminoMsg(object: _97.GroupInfoAminoMsg): _97.GroupInfo;
                toAminoMsg(message: _97.GroupInfo): _97.GroupInfoAminoMsg;
                fromProtoMsg(message: _97.GroupInfoProtoMsg): _97.GroupInfo;
                toProto(message: _97.GroupInfo): Uint8Array;
                toProtoMsg(message: _97.GroupInfo): _97.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _97.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.GroupMember;
                fromPartial(object: Partial<_97.GroupMember>): _97.GroupMember;
                fromAmino(object: _97.GroupMemberAmino): _97.GroupMember;
                toAmino(message: _97.GroupMember): _97.GroupMemberAmino;
                fromAminoMsg(object: _97.GroupMemberAminoMsg): _97.GroupMember;
                toAminoMsg(message: _97.GroupMember): _97.GroupMemberAminoMsg;
                fromProtoMsg(message: _97.GroupMemberProtoMsg): _97.GroupMember;
                toProto(message: _97.GroupMember): Uint8Array;
                toProtoMsg(message: _97.GroupMember): _97.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _97.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.GroupPolicyInfo;
                fromPartial(object: Partial<_97.GroupPolicyInfo>): _97.GroupPolicyInfo;
                fromAmino(object: _97.GroupPolicyInfoAmino): _97.GroupPolicyInfo;
                toAmino(message: _97.GroupPolicyInfo): _97.GroupPolicyInfoAmino;
                fromAminoMsg(object: _97.GroupPolicyInfoAminoMsg): _97.GroupPolicyInfo;
                toAminoMsg(message: _97.GroupPolicyInfo): _97.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _97.GroupPolicyInfoProtoMsg): _97.GroupPolicyInfo;
                toProto(message: _97.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _97.GroupPolicyInfo): _97.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _97.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Proposal;
                fromPartial(object: Partial<_97.Proposal>): _97.Proposal;
                fromAmino(object: _97.ProposalAmino): _97.Proposal;
                toAmino(message: _97.Proposal): _97.ProposalAmino;
                fromAminoMsg(object: _97.ProposalAminoMsg): _97.Proposal;
                toAminoMsg(message: _97.Proposal): _97.ProposalAminoMsg;
                fromProtoMsg(message: _97.ProposalProtoMsg): _97.Proposal;
                toProto(message: _97.Proposal): Uint8Array;
                toProtoMsg(message: _97.Proposal): _97.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _97.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.TallyResult;
                fromPartial(object: Partial<_97.TallyResult>): _97.TallyResult;
                fromAmino(object: _97.TallyResultAmino): _97.TallyResult;
                toAmino(message: _97.TallyResult): _97.TallyResultAmino;
                fromAminoMsg(object: _97.TallyResultAminoMsg): _97.TallyResult;
                toAminoMsg(message: _97.TallyResult): _97.TallyResultAminoMsg;
                fromProtoMsg(message: _97.TallyResultProtoMsg): _97.TallyResult;
                toProto(message: _97.TallyResult): Uint8Array;
                toProtoMsg(message: _97.TallyResult): _97.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _97.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Vote;
                fromPartial(object: Partial<_97.Vote>): _97.Vote;
                fromAmino(object: _97.VoteAmino): _97.Vote;
                toAmino(message: _97.Vote): _97.VoteAmino;
                fromAminoMsg(object: _97.VoteAminoMsg): _97.Vote;
                toAminoMsg(message: _97.Vote): _97.VoteAminoMsg;
                fromProtoMsg(message: _97.VoteProtoMsg): _97.Vote;
                toProto(message: _97.Vote): Uint8Array;
                toProtoMsg(message: _97.Vote): _97.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _96.Exec;
            execToJSON(object: _96.Exec): string;
            Exec: typeof _96.Exec;
            ExecSDKType: typeof _96.Exec;
            ExecAmino: typeof _96.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _96.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgCreateGroup;
                fromPartial(object: Partial<_96.MsgCreateGroup>): _96.MsgCreateGroup;
                fromAmino(object: _96.MsgCreateGroupAmino): _96.MsgCreateGroup;
                toAmino(message: _96.MsgCreateGroup): _96.MsgCreateGroupAmino;
                fromAminoMsg(object: _96.MsgCreateGroupAminoMsg): _96.MsgCreateGroup;
                toAminoMsg(message: _96.MsgCreateGroup): _96.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _96.MsgCreateGroupProtoMsg): _96.MsgCreateGroup;
                toProto(message: _96.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _96.MsgCreateGroup): _96.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _96.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgCreateGroupResponse;
                fromPartial(object: Partial<_96.MsgCreateGroupResponse>): _96.MsgCreateGroupResponse;
                fromAmino(object: _96.MsgCreateGroupResponseAmino): _96.MsgCreateGroupResponse;
                toAmino(message: _96.MsgCreateGroupResponse): _96.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _96.MsgCreateGroupResponseAminoMsg): _96.MsgCreateGroupResponse;
                toAminoMsg(message: _96.MsgCreateGroupResponse): _96.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _96.MsgCreateGroupResponseProtoMsg): _96.MsgCreateGroupResponse;
                toProto(message: _96.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _96.MsgCreateGroupResponse): _96.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _96.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_96.MsgUpdateGroupMembers>): _96.MsgUpdateGroupMembers;
                fromAmino(object: _96.MsgUpdateGroupMembersAmino): _96.MsgUpdateGroupMembers;
                toAmino(message: _96.MsgUpdateGroupMembers): _96.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupMembersAminoMsg): _96.MsgUpdateGroupMembers;
                toAminoMsg(message: _96.MsgUpdateGroupMembers): _96.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupMembersProtoMsg): _96.MsgUpdateGroupMembers;
                toProto(message: _96.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupMembers): _96.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _96.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_96.MsgUpdateGroupMembersResponse>): _96.MsgUpdateGroupMembersResponse;
                fromAmino(_: _96.MsgUpdateGroupMembersResponseAmino): _96.MsgUpdateGroupMembersResponse;
                toAmino(_: _96.MsgUpdateGroupMembersResponse): _96.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupMembersResponseAminoMsg): _96.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _96.MsgUpdateGroupMembersResponse): _96.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupMembersResponseProtoMsg): _96.MsgUpdateGroupMembersResponse;
                toProto(message: _96.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupMembersResponse): _96.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _96.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_96.MsgUpdateGroupAdmin>): _96.MsgUpdateGroupAdmin;
                fromAmino(object: _96.MsgUpdateGroupAdminAmino): _96.MsgUpdateGroupAdmin;
                toAmino(message: _96.MsgUpdateGroupAdmin): _96.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupAdminAminoMsg): _96.MsgUpdateGroupAdmin;
                toAminoMsg(message: _96.MsgUpdateGroupAdmin): _96.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupAdminProtoMsg): _96.MsgUpdateGroupAdmin;
                toProto(message: _96.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupAdmin): _96.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _96.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_96.MsgUpdateGroupAdminResponse>): _96.MsgUpdateGroupAdminResponse;
                fromAmino(_: _96.MsgUpdateGroupAdminResponseAmino): _96.MsgUpdateGroupAdminResponse;
                toAmino(_: _96.MsgUpdateGroupAdminResponse): _96.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupAdminResponseAminoMsg): _96.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _96.MsgUpdateGroupAdminResponse): _96.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupAdminResponseProtoMsg): _96.MsgUpdateGroupAdminResponse;
                toProto(message: _96.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupAdminResponse): _96.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _96.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_96.MsgUpdateGroupMetadata>): _96.MsgUpdateGroupMetadata;
                fromAmino(object: _96.MsgUpdateGroupMetadataAmino): _96.MsgUpdateGroupMetadata;
                toAmino(message: _96.MsgUpdateGroupMetadata): _96.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupMetadataAminoMsg): _96.MsgUpdateGroupMetadata;
                toAminoMsg(message: _96.MsgUpdateGroupMetadata): _96.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupMetadataProtoMsg): _96.MsgUpdateGroupMetadata;
                toProto(message: _96.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupMetadata): _96.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _96.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_96.MsgUpdateGroupMetadataResponse>): _96.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _96.MsgUpdateGroupMetadataResponseAmino): _96.MsgUpdateGroupMetadataResponse;
                toAmino(_: _96.MsgUpdateGroupMetadataResponse): _96.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupMetadataResponseAminoMsg): _96.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _96.MsgUpdateGroupMetadataResponse): _96.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupMetadataResponseProtoMsg): _96.MsgUpdateGroupMetadataResponse;
                toProto(message: _96.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupMetadataResponse): _96.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _96.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_96.MsgCreateGroupPolicy>): _96.MsgCreateGroupPolicy;
                fromAmino(object: _96.MsgCreateGroupPolicyAmino): _96.MsgCreateGroupPolicy;
                toAmino(message: _96.MsgCreateGroupPolicy): _96.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _96.MsgCreateGroupPolicyAminoMsg): _96.MsgCreateGroupPolicy;
                toAminoMsg(message: _96.MsgCreateGroupPolicy): _96.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _96.MsgCreateGroupPolicyProtoMsg): _96.MsgCreateGroupPolicy;
                toProto(message: _96.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _96.MsgCreateGroupPolicy): _96.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _96.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_96.MsgCreateGroupPolicyResponse>): _96.MsgCreateGroupPolicyResponse;
                fromAmino(object: _96.MsgCreateGroupPolicyResponseAmino): _96.MsgCreateGroupPolicyResponse;
                toAmino(message: _96.MsgCreateGroupPolicyResponse): _96.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _96.MsgCreateGroupPolicyResponseAminoMsg): _96.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _96.MsgCreateGroupPolicyResponse): _96.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _96.MsgCreateGroupPolicyResponseProtoMsg): _96.MsgCreateGroupPolicyResponse;
                toProto(message: _96.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _96.MsgCreateGroupPolicyResponse): _96.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _96.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_96.MsgUpdateGroupPolicyAdmin>): _96.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _96.MsgUpdateGroupPolicyAdminAmino): _96.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _96.MsgUpdateGroupPolicyAdmin): _96.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupPolicyAdminAminoMsg): _96.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _96.MsgUpdateGroupPolicyAdmin): _96.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupPolicyAdminProtoMsg): _96.MsgUpdateGroupPolicyAdmin;
                toProto(message: _96.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupPolicyAdmin): _96.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _96.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_96.MsgCreateGroupWithPolicy>): _96.MsgCreateGroupWithPolicy;
                fromAmino(object: _96.MsgCreateGroupWithPolicyAmino): _96.MsgCreateGroupWithPolicy;
                toAmino(message: _96.MsgCreateGroupWithPolicy): _96.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _96.MsgCreateGroupWithPolicyAminoMsg): _96.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _96.MsgCreateGroupWithPolicy): _96.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _96.MsgCreateGroupWithPolicyProtoMsg): _96.MsgCreateGroupWithPolicy;
                toProto(message: _96.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _96.MsgCreateGroupWithPolicy): _96.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _96.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_96.MsgCreateGroupWithPolicyResponse>): _96.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _96.MsgCreateGroupWithPolicyResponseAmino): _96.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _96.MsgCreateGroupWithPolicyResponse): _96.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _96.MsgCreateGroupWithPolicyResponseAminoMsg): _96.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _96.MsgCreateGroupWithPolicyResponse): _96.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _96.MsgCreateGroupWithPolicyResponseProtoMsg): _96.MsgCreateGroupWithPolicyResponse;
                toProto(message: _96.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _96.MsgCreateGroupWithPolicyResponse): _96.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _96.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_96.MsgUpdateGroupPolicyAdminResponse>): _96.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _96.MsgUpdateGroupPolicyAdminResponseAmino): _96.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _96.MsgUpdateGroupPolicyAdminResponse): _96.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupPolicyAdminResponseAminoMsg): _96.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _96.MsgUpdateGroupPolicyAdminResponse): _96.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupPolicyAdminResponseProtoMsg): _96.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _96.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupPolicyAdminResponse): _96.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _96.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_96.MsgUpdateGroupPolicyDecisionPolicy>): _96.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _96.MsgUpdateGroupPolicyDecisionPolicyAmino): _96.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _96.MsgUpdateGroupPolicyDecisionPolicy): _96.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _96.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _96.MsgUpdateGroupPolicyDecisionPolicy): _96.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _96.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _96.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupPolicyDecisionPolicy): _96.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _96.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_96.MsgUpdateGroupPolicyDecisionPolicyResponse>): _96.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _96.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _96.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _96.MsgUpdateGroupPolicyDecisionPolicyResponse): _96.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _96.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _96.MsgUpdateGroupPolicyDecisionPolicyResponse): _96.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _96.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _96.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupPolicyDecisionPolicyResponse): _96.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _96.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_96.MsgUpdateGroupPolicyMetadata>): _96.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _96.MsgUpdateGroupPolicyMetadataAmino): _96.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _96.MsgUpdateGroupPolicyMetadata): _96.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupPolicyMetadataAminoMsg): _96.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _96.MsgUpdateGroupPolicyMetadata): _96.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupPolicyMetadataProtoMsg): _96.MsgUpdateGroupPolicyMetadata;
                toProto(message: _96.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupPolicyMetadata): _96.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _96.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_96.MsgUpdateGroupPolicyMetadataResponse>): _96.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _96.MsgUpdateGroupPolicyMetadataResponseAmino): _96.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _96.MsgUpdateGroupPolicyMetadataResponse): _96.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _96.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _96.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _96.MsgUpdateGroupPolicyMetadataResponse): _96.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _96.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _96.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateGroupPolicyMetadataResponse): _96.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
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
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _96.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgWithdrawProposal;
                fromPartial(object: Partial<_96.MsgWithdrawProposal>): _96.MsgWithdrawProposal;
                fromAmino(object: _96.MsgWithdrawProposalAmino): _96.MsgWithdrawProposal;
                toAmino(message: _96.MsgWithdrawProposal): _96.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _96.MsgWithdrawProposalAminoMsg): _96.MsgWithdrawProposal;
                toAminoMsg(message: _96.MsgWithdrawProposal): _96.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _96.MsgWithdrawProposalProtoMsg): _96.MsgWithdrawProposal;
                toProto(message: _96.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _96.MsgWithdrawProposal): _96.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _96.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_96.MsgWithdrawProposalResponse>): _96.MsgWithdrawProposalResponse;
                fromAmino(_: _96.MsgWithdrawProposalResponseAmino): _96.MsgWithdrawProposalResponse;
                toAmino(_: _96.MsgWithdrawProposalResponse): _96.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _96.MsgWithdrawProposalResponseAminoMsg): _96.MsgWithdrawProposalResponse;
                toAminoMsg(message: _96.MsgWithdrawProposalResponse): _96.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _96.MsgWithdrawProposalResponseProtoMsg): _96.MsgWithdrawProposalResponse;
                toProto(message: _96.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _96.MsgWithdrawProposalResponse): _96.MsgWithdrawProposalResponseProtoMsg;
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
            MsgExec: {
                typeUrl: string;
                encode(message: _96.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgExec;
                fromPartial(object: Partial<_96.MsgExec>): _96.MsgExec;
                fromAmino(object: _96.MsgExecAmino): _96.MsgExec;
                toAmino(message: _96.MsgExec): _96.MsgExecAmino;
                fromAminoMsg(object: _96.MsgExecAminoMsg): _96.MsgExec;
                toAminoMsg(message: _96.MsgExec): _96.MsgExecAminoMsg;
                fromProtoMsg(message: _96.MsgExecProtoMsg): _96.MsgExec;
                toProto(message: _96.MsgExec): Uint8Array;
                toProtoMsg(message: _96.MsgExec): _96.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _96.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgExecResponse;
                fromPartial(object: Partial<_96.MsgExecResponse>): _96.MsgExecResponse;
                fromAmino(object: _96.MsgExecResponseAmino): _96.MsgExecResponse;
                toAmino(message: _96.MsgExecResponse): _96.MsgExecResponseAmino;
                fromAminoMsg(object: _96.MsgExecResponseAminoMsg): _96.MsgExecResponse;
                toAminoMsg(message: _96.MsgExecResponse): _96.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _96.MsgExecResponseProtoMsg): _96.MsgExecResponse;
                toProto(message: _96.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _96.MsgExecResponse): _96.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _96.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgLeaveGroup;
                fromPartial(object: Partial<_96.MsgLeaveGroup>): _96.MsgLeaveGroup;
                fromAmino(object: _96.MsgLeaveGroupAmino): _96.MsgLeaveGroup;
                toAmino(message: _96.MsgLeaveGroup): _96.MsgLeaveGroupAmino;
                fromAminoMsg(object: _96.MsgLeaveGroupAminoMsg): _96.MsgLeaveGroup;
                toAminoMsg(message: _96.MsgLeaveGroup): _96.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _96.MsgLeaveGroupProtoMsg): _96.MsgLeaveGroup;
                toProto(message: _96.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _96.MsgLeaveGroup): _96.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _96.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_96.MsgLeaveGroupResponse>): _96.MsgLeaveGroupResponse;
                fromAmino(_: _96.MsgLeaveGroupResponseAmino): _96.MsgLeaveGroupResponse;
                toAmino(_: _96.MsgLeaveGroupResponse): _96.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _96.MsgLeaveGroupResponseAminoMsg): _96.MsgLeaveGroupResponse;
                toAminoMsg(message: _96.MsgLeaveGroupResponse): _96.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _96.MsgLeaveGroupResponseProtoMsg): _96.MsgLeaveGroupResponse;
                toProto(message: _96.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _96.MsgLeaveGroupResponse): _96.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _95.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupInfoRequest;
                fromPartial(object: Partial<_95.QueryGroupInfoRequest>): _95.QueryGroupInfoRequest;
                fromAmino(object: _95.QueryGroupInfoRequestAmino): _95.QueryGroupInfoRequest;
                toAmino(message: _95.QueryGroupInfoRequest): _95.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _95.QueryGroupInfoRequestAminoMsg): _95.QueryGroupInfoRequest;
                toAminoMsg(message: _95.QueryGroupInfoRequest): _95.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _95.QueryGroupInfoRequestProtoMsg): _95.QueryGroupInfoRequest;
                toProto(message: _95.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _95.QueryGroupInfoRequest): _95.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _95.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupInfoResponse;
                fromPartial(object: Partial<_95.QueryGroupInfoResponse>): _95.QueryGroupInfoResponse;
                fromAmino(object: _95.QueryGroupInfoResponseAmino): _95.QueryGroupInfoResponse;
                toAmino(message: _95.QueryGroupInfoResponse): _95.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _95.QueryGroupInfoResponseAminoMsg): _95.QueryGroupInfoResponse;
                toAminoMsg(message: _95.QueryGroupInfoResponse): _95.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _95.QueryGroupInfoResponseProtoMsg): _95.QueryGroupInfoResponse;
                toProto(message: _95.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _95.QueryGroupInfoResponse): _95.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _95.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_95.QueryGroupPolicyInfoRequest>): _95.QueryGroupPolicyInfoRequest;
                fromAmino(object: _95.QueryGroupPolicyInfoRequestAmino): _95.QueryGroupPolicyInfoRequest;
                toAmino(message: _95.QueryGroupPolicyInfoRequest): _95.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _95.QueryGroupPolicyInfoRequestAminoMsg): _95.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _95.QueryGroupPolicyInfoRequest): _95.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _95.QueryGroupPolicyInfoRequestProtoMsg): _95.QueryGroupPolicyInfoRequest;
                toProto(message: _95.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _95.QueryGroupPolicyInfoRequest): _95.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _95.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_95.QueryGroupPolicyInfoResponse>): _95.QueryGroupPolicyInfoResponse;
                fromAmino(object: _95.QueryGroupPolicyInfoResponseAmino): _95.QueryGroupPolicyInfoResponse;
                toAmino(message: _95.QueryGroupPolicyInfoResponse): _95.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _95.QueryGroupPolicyInfoResponseAminoMsg): _95.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _95.QueryGroupPolicyInfoResponse): _95.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _95.QueryGroupPolicyInfoResponseProtoMsg): _95.QueryGroupPolicyInfoResponse;
                toProto(message: _95.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _95.QueryGroupPolicyInfoResponse): _95.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _95.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupMembersRequest;
                fromPartial(object: Partial<_95.QueryGroupMembersRequest>): _95.QueryGroupMembersRequest;
                fromAmino(object: _95.QueryGroupMembersRequestAmino): _95.QueryGroupMembersRequest;
                toAmino(message: _95.QueryGroupMembersRequest): _95.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _95.QueryGroupMembersRequestAminoMsg): _95.QueryGroupMembersRequest;
                toAminoMsg(message: _95.QueryGroupMembersRequest): _95.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _95.QueryGroupMembersRequestProtoMsg): _95.QueryGroupMembersRequest;
                toProto(message: _95.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _95.QueryGroupMembersRequest): _95.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _95.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupMembersResponse;
                fromPartial(object: Partial<_95.QueryGroupMembersResponse>): _95.QueryGroupMembersResponse;
                fromAmino(object: _95.QueryGroupMembersResponseAmino): _95.QueryGroupMembersResponse;
                toAmino(message: _95.QueryGroupMembersResponse): _95.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _95.QueryGroupMembersResponseAminoMsg): _95.QueryGroupMembersResponse;
                toAminoMsg(message: _95.QueryGroupMembersResponse): _95.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _95.QueryGroupMembersResponseProtoMsg): _95.QueryGroupMembersResponse;
                toProto(message: _95.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _95.QueryGroupMembersResponse): _95.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _95.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_95.QueryGroupsByAdminRequest>): _95.QueryGroupsByAdminRequest;
                fromAmino(object: _95.QueryGroupsByAdminRequestAmino): _95.QueryGroupsByAdminRequest;
                toAmino(message: _95.QueryGroupsByAdminRequest): _95.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _95.QueryGroupsByAdminRequestAminoMsg): _95.QueryGroupsByAdminRequest;
                toAminoMsg(message: _95.QueryGroupsByAdminRequest): _95.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _95.QueryGroupsByAdminRequestProtoMsg): _95.QueryGroupsByAdminRequest;
                toProto(message: _95.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _95.QueryGroupsByAdminRequest): _95.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _95.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_95.QueryGroupsByAdminResponse>): _95.QueryGroupsByAdminResponse;
                fromAmino(object: _95.QueryGroupsByAdminResponseAmino): _95.QueryGroupsByAdminResponse;
                toAmino(message: _95.QueryGroupsByAdminResponse): _95.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _95.QueryGroupsByAdminResponseAminoMsg): _95.QueryGroupsByAdminResponse;
                toAminoMsg(message: _95.QueryGroupsByAdminResponse): _95.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _95.QueryGroupsByAdminResponseProtoMsg): _95.QueryGroupsByAdminResponse;
                toProto(message: _95.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _95.QueryGroupsByAdminResponse): _95.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _95.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_95.QueryGroupPoliciesByGroupRequest>): _95.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _95.QueryGroupPoliciesByGroupRequestAmino): _95.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _95.QueryGroupPoliciesByGroupRequest): _95.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _95.QueryGroupPoliciesByGroupRequestAminoMsg): _95.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _95.QueryGroupPoliciesByGroupRequest): _95.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _95.QueryGroupPoliciesByGroupRequestProtoMsg): _95.QueryGroupPoliciesByGroupRequest;
                toProto(message: _95.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _95.QueryGroupPoliciesByGroupRequest): _95.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _95.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_95.QueryGroupPoliciesByGroupResponse>): _95.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _95.QueryGroupPoliciesByGroupResponseAmino): _95.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _95.QueryGroupPoliciesByGroupResponse): _95.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _95.QueryGroupPoliciesByGroupResponseAminoMsg): _95.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _95.QueryGroupPoliciesByGroupResponse): _95.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _95.QueryGroupPoliciesByGroupResponseProtoMsg): _95.QueryGroupPoliciesByGroupResponse;
                toProto(message: _95.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _95.QueryGroupPoliciesByGroupResponse): _95.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _95.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_95.QueryGroupPoliciesByAdminRequest>): _95.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _95.QueryGroupPoliciesByAdminRequestAmino): _95.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _95.QueryGroupPoliciesByAdminRequest): _95.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _95.QueryGroupPoliciesByAdminRequestAminoMsg): _95.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _95.QueryGroupPoliciesByAdminRequest): _95.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _95.QueryGroupPoliciesByAdminRequestProtoMsg): _95.QueryGroupPoliciesByAdminRequest;
                toProto(message: _95.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _95.QueryGroupPoliciesByAdminRequest): _95.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _95.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_95.QueryGroupPoliciesByAdminResponse>): _95.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _95.QueryGroupPoliciesByAdminResponseAmino): _95.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _95.QueryGroupPoliciesByAdminResponse): _95.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _95.QueryGroupPoliciesByAdminResponseAminoMsg): _95.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _95.QueryGroupPoliciesByAdminResponse): _95.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _95.QueryGroupPoliciesByAdminResponseProtoMsg): _95.QueryGroupPoliciesByAdminResponse;
                toProto(message: _95.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _95.QueryGroupPoliciesByAdminResponse): _95.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
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
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _95.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_95.QueryProposalsByGroupPolicyRequest>): _95.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _95.QueryProposalsByGroupPolicyRequestAmino): _95.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _95.QueryProposalsByGroupPolicyRequest): _95.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _95.QueryProposalsByGroupPolicyRequestAminoMsg): _95.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _95.QueryProposalsByGroupPolicyRequest): _95.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _95.QueryProposalsByGroupPolicyRequestProtoMsg): _95.QueryProposalsByGroupPolicyRequest;
                toProto(message: _95.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _95.QueryProposalsByGroupPolicyRequest): _95.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _95.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_95.QueryProposalsByGroupPolicyResponse>): _95.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _95.QueryProposalsByGroupPolicyResponseAmino): _95.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _95.QueryProposalsByGroupPolicyResponse): _95.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _95.QueryProposalsByGroupPolicyResponseAminoMsg): _95.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _95.QueryProposalsByGroupPolicyResponse): _95.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _95.QueryProposalsByGroupPolicyResponseProtoMsg): _95.QueryProposalsByGroupPolicyResponse;
                toProto(message: _95.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _95.QueryProposalsByGroupPolicyResponse): _95.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _95.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_95.QueryVoteByProposalVoterRequest>): _95.QueryVoteByProposalVoterRequest;
                fromAmino(object: _95.QueryVoteByProposalVoterRequestAmino): _95.QueryVoteByProposalVoterRequest;
                toAmino(message: _95.QueryVoteByProposalVoterRequest): _95.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _95.QueryVoteByProposalVoterRequestAminoMsg): _95.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _95.QueryVoteByProposalVoterRequest): _95.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _95.QueryVoteByProposalVoterRequestProtoMsg): _95.QueryVoteByProposalVoterRequest;
                toProto(message: _95.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _95.QueryVoteByProposalVoterRequest): _95.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _95.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_95.QueryVoteByProposalVoterResponse>): _95.QueryVoteByProposalVoterResponse;
                fromAmino(object: _95.QueryVoteByProposalVoterResponseAmino): _95.QueryVoteByProposalVoterResponse;
                toAmino(message: _95.QueryVoteByProposalVoterResponse): _95.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _95.QueryVoteByProposalVoterResponseAminoMsg): _95.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _95.QueryVoteByProposalVoterResponse): _95.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _95.QueryVoteByProposalVoterResponseProtoMsg): _95.QueryVoteByProposalVoterResponse;
                toProto(message: _95.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _95.QueryVoteByProposalVoterResponse): _95.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _95.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_95.QueryVotesByProposalRequest>): _95.QueryVotesByProposalRequest;
                fromAmino(object: _95.QueryVotesByProposalRequestAmino): _95.QueryVotesByProposalRequest;
                toAmino(message: _95.QueryVotesByProposalRequest): _95.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _95.QueryVotesByProposalRequestAminoMsg): _95.QueryVotesByProposalRequest;
                toAminoMsg(message: _95.QueryVotesByProposalRequest): _95.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _95.QueryVotesByProposalRequestProtoMsg): _95.QueryVotesByProposalRequest;
                toProto(message: _95.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _95.QueryVotesByProposalRequest): _95.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _95.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_95.QueryVotesByProposalResponse>): _95.QueryVotesByProposalResponse;
                fromAmino(object: _95.QueryVotesByProposalResponseAmino): _95.QueryVotesByProposalResponse;
                toAmino(message: _95.QueryVotesByProposalResponse): _95.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _95.QueryVotesByProposalResponseAminoMsg): _95.QueryVotesByProposalResponse;
                toAminoMsg(message: _95.QueryVotesByProposalResponse): _95.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _95.QueryVotesByProposalResponseProtoMsg): _95.QueryVotesByProposalResponse;
                toProto(message: _95.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _95.QueryVotesByProposalResponse): _95.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _95.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_95.QueryVotesByVoterRequest>): _95.QueryVotesByVoterRequest;
                fromAmino(object: _95.QueryVotesByVoterRequestAmino): _95.QueryVotesByVoterRequest;
                toAmino(message: _95.QueryVotesByVoterRequest): _95.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _95.QueryVotesByVoterRequestAminoMsg): _95.QueryVotesByVoterRequest;
                toAminoMsg(message: _95.QueryVotesByVoterRequest): _95.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _95.QueryVotesByVoterRequestProtoMsg): _95.QueryVotesByVoterRequest;
                toProto(message: _95.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _95.QueryVotesByVoterRequest): _95.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _95.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_95.QueryVotesByVoterResponse>): _95.QueryVotesByVoterResponse;
                fromAmino(object: _95.QueryVotesByVoterResponseAmino): _95.QueryVotesByVoterResponse;
                toAmino(message: _95.QueryVotesByVoterResponse): _95.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _95.QueryVotesByVoterResponseAminoMsg): _95.QueryVotesByVoterResponse;
                toAminoMsg(message: _95.QueryVotesByVoterResponse): _95.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _95.QueryVotesByVoterResponseProtoMsg): _95.QueryVotesByVoterResponse;
                toProto(message: _95.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _95.QueryVotesByVoterResponse): _95.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _95.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_95.QueryGroupsByMemberRequest>): _95.QueryGroupsByMemberRequest;
                fromAmino(object: _95.QueryGroupsByMemberRequestAmino): _95.QueryGroupsByMemberRequest;
                toAmino(message: _95.QueryGroupsByMemberRequest): _95.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _95.QueryGroupsByMemberRequestAminoMsg): _95.QueryGroupsByMemberRequest;
                toAminoMsg(message: _95.QueryGroupsByMemberRequest): _95.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _95.QueryGroupsByMemberRequestProtoMsg): _95.QueryGroupsByMemberRequest;
                toProto(message: _95.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _95.QueryGroupsByMemberRequest): _95.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _95.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_95.QueryGroupsByMemberResponse>): _95.QueryGroupsByMemberResponse;
                fromAmino(object: _95.QueryGroupsByMemberResponseAmino): _95.QueryGroupsByMemberResponse;
                toAmino(message: _95.QueryGroupsByMemberResponse): _95.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _95.QueryGroupsByMemberResponseAminoMsg): _95.QueryGroupsByMemberResponse;
                toAminoMsg(message: _95.QueryGroupsByMemberResponse): _95.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _95.QueryGroupsByMemberResponseProtoMsg): _95.QueryGroupsByMemberResponse;
                toProto(message: _95.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _95.QueryGroupsByMemberResponse): _95.QueryGroupsByMemberResponseProtoMsg;
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
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _95.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupsRequest;
                fromPartial(object: Partial<_95.QueryGroupsRequest>): _95.QueryGroupsRequest;
                fromAmino(object: _95.QueryGroupsRequestAmino): _95.QueryGroupsRequest;
                toAmino(message: _95.QueryGroupsRequest): _95.QueryGroupsRequestAmino;
                fromAminoMsg(object: _95.QueryGroupsRequestAminoMsg): _95.QueryGroupsRequest;
                toAminoMsg(message: _95.QueryGroupsRequest): _95.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _95.QueryGroupsRequestProtoMsg): _95.QueryGroupsRequest;
                toProto(message: _95.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _95.QueryGroupsRequest): _95.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _95.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryGroupsResponse;
                fromPartial(object: Partial<_95.QueryGroupsResponse>): _95.QueryGroupsResponse;
                fromAmino(object: _95.QueryGroupsResponseAmino): _95.QueryGroupsResponse;
                toAmino(message: _95.QueryGroupsResponse): _95.QueryGroupsResponseAmino;
                fromAminoMsg(object: _95.QueryGroupsResponseAminoMsg): _95.QueryGroupsResponse;
                toAminoMsg(message: _95.QueryGroupsResponse): _95.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _95.QueryGroupsResponseProtoMsg): _95.QueryGroupsResponse;
                toProto(message: _95.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _95.QueryGroupsResponse): _95.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _94.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.GenesisState;
                fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
                fromAmino(object: _94.GenesisStateAmino): _94.GenesisState;
                toAmino(message: _94.GenesisState): _94.GenesisStateAmino;
                fromAminoMsg(object: _94.GenesisStateAminoMsg): _94.GenesisState;
                toAminoMsg(message: _94.GenesisState): _94.GenesisStateAminoMsg;
                fromProtoMsg(message: _94.GenesisStateProtoMsg): _94.GenesisState;
                toProto(message: _94.GenesisState): Uint8Array;
                toProtoMsg(message: _94.GenesisState): _94.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _93.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.EventCreateGroup;
                fromPartial(object: Partial<_93.EventCreateGroup>): _93.EventCreateGroup;
                fromAmino(object: _93.EventCreateGroupAmino): _93.EventCreateGroup;
                toAmino(message: _93.EventCreateGroup): _93.EventCreateGroupAmino;
                fromAminoMsg(object: _93.EventCreateGroupAminoMsg): _93.EventCreateGroup;
                toAminoMsg(message: _93.EventCreateGroup): _93.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _93.EventCreateGroupProtoMsg): _93.EventCreateGroup;
                toProto(message: _93.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _93.EventCreateGroup): _93.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _93.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.EventUpdateGroup;
                fromPartial(object: Partial<_93.EventUpdateGroup>): _93.EventUpdateGroup;
                fromAmino(object: _93.EventUpdateGroupAmino): _93.EventUpdateGroup;
                toAmino(message: _93.EventUpdateGroup): _93.EventUpdateGroupAmino;
                fromAminoMsg(object: _93.EventUpdateGroupAminoMsg): _93.EventUpdateGroup;
                toAminoMsg(message: _93.EventUpdateGroup): _93.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _93.EventUpdateGroupProtoMsg): _93.EventUpdateGroup;
                toProto(message: _93.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _93.EventUpdateGroup): _93.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _93.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.EventCreateGroupPolicy;
                fromPartial(object: Partial<_93.EventCreateGroupPolicy>): _93.EventCreateGroupPolicy;
                fromAmino(object: _93.EventCreateGroupPolicyAmino): _93.EventCreateGroupPolicy;
                toAmino(message: _93.EventCreateGroupPolicy): _93.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _93.EventCreateGroupPolicyAminoMsg): _93.EventCreateGroupPolicy;
                toAminoMsg(message: _93.EventCreateGroupPolicy): _93.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _93.EventCreateGroupPolicyProtoMsg): _93.EventCreateGroupPolicy;
                toProto(message: _93.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _93.EventCreateGroupPolicy): _93.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _93.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_93.EventUpdateGroupPolicy>): _93.EventUpdateGroupPolicy;
                fromAmino(object: _93.EventUpdateGroupPolicyAmino): _93.EventUpdateGroupPolicy;
                toAmino(message: _93.EventUpdateGroupPolicy): _93.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _93.EventUpdateGroupPolicyAminoMsg): _93.EventUpdateGroupPolicy;
                toAminoMsg(message: _93.EventUpdateGroupPolicy): _93.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _93.EventUpdateGroupPolicyProtoMsg): _93.EventUpdateGroupPolicy;
                toProto(message: _93.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _93.EventUpdateGroupPolicy): _93.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _93.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.EventSubmitProposal;
                fromPartial(object: Partial<_93.EventSubmitProposal>): _93.EventSubmitProposal;
                fromAmino(object: _93.EventSubmitProposalAmino): _93.EventSubmitProposal;
                toAmino(message: _93.EventSubmitProposal): _93.EventSubmitProposalAmino;
                fromAminoMsg(object: _93.EventSubmitProposalAminoMsg): _93.EventSubmitProposal;
                toAminoMsg(message: _93.EventSubmitProposal): _93.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _93.EventSubmitProposalProtoMsg): _93.EventSubmitProposal;
                toProto(message: _93.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _93.EventSubmitProposal): _93.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _93.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.EventWithdrawProposal;
                fromPartial(object: Partial<_93.EventWithdrawProposal>): _93.EventWithdrawProposal;
                fromAmino(object: _93.EventWithdrawProposalAmino): _93.EventWithdrawProposal;
                toAmino(message: _93.EventWithdrawProposal): _93.EventWithdrawProposalAmino;
                fromAminoMsg(object: _93.EventWithdrawProposalAminoMsg): _93.EventWithdrawProposal;
                toAminoMsg(message: _93.EventWithdrawProposal): _93.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _93.EventWithdrawProposalProtoMsg): _93.EventWithdrawProposal;
                toProto(message: _93.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _93.EventWithdrawProposal): _93.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _93.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.EventVote;
                fromPartial(object: Partial<_93.EventVote>): _93.EventVote;
                fromAmino(object: _93.EventVoteAmino): _93.EventVote;
                toAmino(message: _93.EventVote): _93.EventVoteAmino;
                fromAminoMsg(object: _93.EventVoteAminoMsg): _93.EventVote;
                toAminoMsg(message: _93.EventVote): _93.EventVoteAminoMsg;
                fromProtoMsg(message: _93.EventVoteProtoMsg): _93.EventVote;
                toProto(message: _93.EventVote): Uint8Array;
                toProtoMsg(message: _93.EventVote): _93.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _93.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.EventExec;
                fromPartial(object: Partial<_93.EventExec>): _93.EventExec;
                fromAmino(object: _93.EventExecAmino): _93.EventExec;
                toAmino(message: _93.EventExec): _93.EventExecAmino;
                fromAminoMsg(object: _93.EventExecAminoMsg): _93.EventExec;
                toAminoMsg(message: _93.EventExec): _93.EventExecAminoMsg;
                fromProtoMsg(message: _93.EventExecProtoMsg): _93.EventExec;
                toProto(message: _93.EventExec): Uint8Array;
                toProtoMsg(message: _93.EventExec): _93.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _93.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.EventLeaveGroup;
                fromPartial(object: Partial<_93.EventLeaveGroup>): _93.EventLeaveGroup;
                fromAmino(object: _93.EventLeaveGroupAmino): _93.EventLeaveGroup;
                toAmino(message: _93.EventLeaveGroup): _93.EventLeaveGroupAmino;
                fromAminoMsg(object: _93.EventLeaveGroupAminoMsg): _93.EventLeaveGroup;
                toAminoMsg(message: _93.EventLeaveGroup): _93.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _93.EventLeaveGroupProtoMsg): _93.EventLeaveGroup;
                toProto(message: _93.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _93.EventLeaveGroup): _93.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _93.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.EventProposalPruned;
                fromPartial(object: Partial<_93.EventProposalPruned>): _93.EventProposalPruned;
                fromAmino(object: _93.EventProposalPrunedAmino): _93.EventProposalPruned;
                toAmino(message: _93.EventProposalPruned): _93.EventProposalPrunedAmino;
                fromAminoMsg(object: _93.EventProposalPrunedAminoMsg): _93.EventProposalPruned;
                toAminoMsg(message: _93.EventProposalPruned): _93.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _93.EventProposalPrunedProtoMsg): _93.EventProposalPruned;
                toProto(message: _93.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _93.EventProposalPruned): _93.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                inflation(request?: _100.QueryInflationRequest): Promise<_100.QueryInflationResponse>;
                annualProvisions(request?: _100.QueryAnnualProvisionsRequest): Promise<_100.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _100.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.QueryParamsRequest;
                fromPartial(_: Partial<_100.QueryParamsRequest>): _100.QueryParamsRequest;
                fromAmino(_: _100.QueryParamsRequestAmino): _100.QueryParamsRequest;
                toAmino(_: _100.QueryParamsRequest): _100.QueryParamsRequestAmino;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _100.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.QueryInflationRequest;
                fromPartial(_: Partial<_100.QueryInflationRequest>): _100.QueryInflationRequest;
                fromAmino(_: _100.QueryInflationRequestAmino): _100.QueryInflationRequest;
                toAmino(_: _100.QueryInflationRequest): _100.QueryInflationRequestAmino;
                fromAminoMsg(object: _100.QueryInflationRequestAminoMsg): _100.QueryInflationRequest;
                toAminoMsg(message: _100.QueryInflationRequest): _100.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _100.QueryInflationRequestProtoMsg): _100.QueryInflationRequest;
                toProto(message: _100.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _100.QueryInflationRequest): _100.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _100.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryInflationResponse;
                fromPartial(object: Partial<_100.QueryInflationResponse>): _100.QueryInflationResponse;
                fromAmino(object: _100.QueryInflationResponseAmino): _100.QueryInflationResponse;
                toAmino(message: _100.QueryInflationResponse): _100.QueryInflationResponseAmino;
                fromAminoMsg(object: _100.QueryInflationResponseAminoMsg): _100.QueryInflationResponse;
                toAminoMsg(message: _100.QueryInflationResponse): _100.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _100.QueryInflationResponseProtoMsg): _100.QueryInflationResponse;
                toProto(message: _100.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _100.QueryInflationResponse): _100.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _100.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_100.QueryAnnualProvisionsRequest>): _100.QueryAnnualProvisionsRequest;
                fromAmino(_: _100.QueryAnnualProvisionsRequestAmino): _100.QueryAnnualProvisionsRequest;
                toAmino(_: _100.QueryAnnualProvisionsRequest): _100.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _100.QueryAnnualProvisionsRequestAminoMsg): _100.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _100.QueryAnnualProvisionsRequest): _100.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _100.QueryAnnualProvisionsRequestProtoMsg): _100.QueryAnnualProvisionsRequest;
                toProto(message: _100.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryAnnualProvisionsRequest): _100.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _100.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_100.QueryAnnualProvisionsResponse>): _100.QueryAnnualProvisionsResponse;
                fromAmino(object: _100.QueryAnnualProvisionsResponseAmino): _100.QueryAnnualProvisionsResponse;
                toAmino(message: _100.QueryAnnualProvisionsResponse): _100.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _100.QueryAnnualProvisionsResponseAminoMsg): _100.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _100.QueryAnnualProvisionsResponse): _100.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _100.QueryAnnualProvisionsResponseProtoMsg): _100.QueryAnnualProvisionsResponse;
                toProto(message: _100.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryAnnualProvisionsResponse): _100.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _99.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Minter;
                fromPartial(object: Partial<_99.Minter>): _99.Minter;
                fromAmino(object: _99.MinterAmino): _99.Minter;
                toAmino(message: _99.Minter): _99.MinterAmino;
                fromAminoMsg(object: _99.MinterAminoMsg): _99.Minter;
                toAminoMsg(message: _99.Minter): _99.MinterAminoMsg;
                fromProtoMsg(message: _99.MinterProtoMsg): _99.Minter;
                toProto(message: _99.Minter): Uint8Array;
                toProtoMsg(message: _99.Minter): _99.MinterProtoMsg;
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
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _258.MsgClientImpl;
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _105.QueryBalanceRequest): Promise<_105.QueryBalanceResponse>;
                owner(request: _105.QueryOwnerRequest): Promise<_105.QueryOwnerResponse>;
                supply(request: _105.QuerySupplyRequest): Promise<_105.QuerySupplyResponse>;
                nFTs(request: _105.QueryNFTsRequest): Promise<_105.QueryNFTsResponse>;
                nFT(request: _105.QueryNFTRequest): Promise<_105.QueryNFTResponse>;
                class(request: _105.QueryClassRequest): Promise<_105.QueryClassResponse>;
                classes(request?: _105.QueryClassesRequest): Promise<_105.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _106.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _106.MsgSend): {
                        typeUrl: string;
                        value: _106.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _106.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _106.MsgSend): {
                        typeUrl: string;
                        value: _106.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _106.MsgSend) => _106.MsgSendAmino;
                    fromAmino: (object: _106.MsgSendAmino) => _106.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _106.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgSend;
                fromPartial(object: Partial<_106.MsgSend>): _106.MsgSend;
                fromAmino(object: _106.MsgSendAmino): _106.MsgSend;
                toAmino(message: _106.MsgSend): _106.MsgSendAmino;
                fromAminoMsg(object: _106.MsgSendAminoMsg): _106.MsgSend;
                toAminoMsg(message: _106.MsgSend): _106.MsgSendAminoMsg;
                fromProtoMsg(message: _106.MsgSendProtoMsg): _106.MsgSend;
                toProto(message: _106.MsgSend): Uint8Array;
                toProtoMsg(message: _106.MsgSend): _106.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _106.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.MsgSendResponse;
                fromPartial(_: Partial<_106.MsgSendResponse>): _106.MsgSendResponse;
                fromAmino(_: _106.MsgSendResponseAmino): _106.MsgSendResponse;
                toAmino(_: _106.MsgSendResponse): _106.MsgSendResponseAmino;
                fromAminoMsg(object: _106.MsgSendResponseAminoMsg): _106.MsgSendResponse;
                toAminoMsg(message: _106.MsgSendResponse): _106.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _106.MsgSendResponseProtoMsg): _106.MsgSendResponse;
                toProto(message: _106.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _106.MsgSendResponse): _106.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _105.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryBalanceRequest;
                fromPartial(object: Partial<_105.QueryBalanceRequest>): _105.QueryBalanceRequest;
                fromAmino(object: _105.QueryBalanceRequestAmino): _105.QueryBalanceRequest;
                toAmino(message: _105.QueryBalanceRequest): _105.QueryBalanceRequestAmino;
                fromAminoMsg(object: _105.QueryBalanceRequestAminoMsg): _105.QueryBalanceRequest;
                toAminoMsg(message: _105.QueryBalanceRequest): _105.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _105.QueryBalanceRequestProtoMsg): _105.QueryBalanceRequest;
                toProto(message: _105.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _105.QueryBalanceRequest): _105.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _105.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryBalanceResponse;
                fromPartial(object: Partial<_105.QueryBalanceResponse>): _105.QueryBalanceResponse;
                fromAmino(object: _105.QueryBalanceResponseAmino): _105.QueryBalanceResponse;
                toAmino(message: _105.QueryBalanceResponse): _105.QueryBalanceResponseAmino;
                fromAminoMsg(object: _105.QueryBalanceResponseAminoMsg): _105.QueryBalanceResponse;
                toAminoMsg(message: _105.QueryBalanceResponse): _105.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _105.QueryBalanceResponseProtoMsg): _105.QueryBalanceResponse;
                toProto(message: _105.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _105.QueryBalanceResponse): _105.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _105.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryOwnerRequest;
                fromPartial(object: Partial<_105.QueryOwnerRequest>): _105.QueryOwnerRequest;
                fromAmino(object: _105.QueryOwnerRequestAmino): _105.QueryOwnerRequest;
                toAmino(message: _105.QueryOwnerRequest): _105.QueryOwnerRequestAmino;
                fromAminoMsg(object: _105.QueryOwnerRequestAminoMsg): _105.QueryOwnerRequest;
                toAminoMsg(message: _105.QueryOwnerRequest): _105.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _105.QueryOwnerRequestProtoMsg): _105.QueryOwnerRequest;
                toProto(message: _105.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _105.QueryOwnerRequest): _105.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _105.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryOwnerResponse;
                fromPartial(object: Partial<_105.QueryOwnerResponse>): _105.QueryOwnerResponse;
                fromAmino(object: _105.QueryOwnerResponseAmino): _105.QueryOwnerResponse;
                toAmino(message: _105.QueryOwnerResponse): _105.QueryOwnerResponseAmino;
                fromAminoMsg(object: _105.QueryOwnerResponseAminoMsg): _105.QueryOwnerResponse;
                toAminoMsg(message: _105.QueryOwnerResponse): _105.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _105.QueryOwnerResponseProtoMsg): _105.QueryOwnerResponse;
                toProto(message: _105.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _105.QueryOwnerResponse): _105.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _105.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QuerySupplyRequest;
                fromPartial(object: Partial<_105.QuerySupplyRequest>): _105.QuerySupplyRequest;
                fromAmino(object: _105.QuerySupplyRequestAmino): _105.QuerySupplyRequest;
                toAmino(message: _105.QuerySupplyRequest): _105.QuerySupplyRequestAmino;
                fromAminoMsg(object: _105.QuerySupplyRequestAminoMsg): _105.QuerySupplyRequest;
                toAminoMsg(message: _105.QuerySupplyRequest): _105.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _105.QuerySupplyRequestProtoMsg): _105.QuerySupplyRequest;
                toProto(message: _105.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _105.QuerySupplyRequest): _105.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _105.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QuerySupplyResponse;
                fromPartial(object: Partial<_105.QuerySupplyResponse>): _105.QuerySupplyResponse;
                fromAmino(object: _105.QuerySupplyResponseAmino): _105.QuerySupplyResponse;
                toAmino(message: _105.QuerySupplyResponse): _105.QuerySupplyResponseAmino;
                fromAminoMsg(object: _105.QuerySupplyResponseAminoMsg): _105.QuerySupplyResponse;
                toAminoMsg(message: _105.QuerySupplyResponse): _105.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _105.QuerySupplyResponseProtoMsg): _105.QuerySupplyResponse;
                toProto(message: _105.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _105.QuerySupplyResponse): _105.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _105.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryNFTsRequest;
                fromPartial(object: Partial<_105.QueryNFTsRequest>): _105.QueryNFTsRequest;
                fromAmino(object: _105.QueryNFTsRequestAmino): _105.QueryNFTsRequest;
                toAmino(message: _105.QueryNFTsRequest): _105.QueryNFTsRequestAmino;
                fromAminoMsg(object: _105.QueryNFTsRequestAminoMsg): _105.QueryNFTsRequest;
                toAminoMsg(message: _105.QueryNFTsRequest): _105.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryNFTsRequestProtoMsg): _105.QueryNFTsRequest;
                toProto(message: _105.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryNFTsRequest): _105.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _105.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryNFTsResponse;
                fromPartial(object: Partial<_105.QueryNFTsResponse>): _105.QueryNFTsResponse;
                fromAmino(object: _105.QueryNFTsResponseAmino): _105.QueryNFTsResponse;
                toAmino(message: _105.QueryNFTsResponse): _105.QueryNFTsResponseAmino;
                fromAminoMsg(object: _105.QueryNFTsResponseAminoMsg): _105.QueryNFTsResponse;
                toAminoMsg(message: _105.QueryNFTsResponse): _105.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryNFTsResponseProtoMsg): _105.QueryNFTsResponse;
                toProto(message: _105.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryNFTsResponse): _105.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _105.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryNFTRequest;
                fromPartial(object: Partial<_105.QueryNFTRequest>): _105.QueryNFTRequest;
                fromAmino(object: _105.QueryNFTRequestAmino): _105.QueryNFTRequest;
                toAmino(message: _105.QueryNFTRequest): _105.QueryNFTRequestAmino;
                fromAminoMsg(object: _105.QueryNFTRequestAminoMsg): _105.QueryNFTRequest;
                toAminoMsg(message: _105.QueryNFTRequest): _105.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _105.QueryNFTRequestProtoMsg): _105.QueryNFTRequest;
                toProto(message: _105.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _105.QueryNFTRequest): _105.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _105.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryNFTResponse;
                fromPartial(object: Partial<_105.QueryNFTResponse>): _105.QueryNFTResponse;
                fromAmino(object: _105.QueryNFTResponseAmino): _105.QueryNFTResponse;
                toAmino(message: _105.QueryNFTResponse): _105.QueryNFTResponseAmino;
                fromAminoMsg(object: _105.QueryNFTResponseAminoMsg): _105.QueryNFTResponse;
                toAminoMsg(message: _105.QueryNFTResponse): _105.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _105.QueryNFTResponseProtoMsg): _105.QueryNFTResponse;
                toProto(message: _105.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _105.QueryNFTResponse): _105.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _105.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryClassRequest;
                fromPartial(object: Partial<_105.QueryClassRequest>): _105.QueryClassRequest;
                fromAmino(object: _105.QueryClassRequestAmino): _105.QueryClassRequest;
                toAmino(message: _105.QueryClassRequest): _105.QueryClassRequestAmino;
                fromAminoMsg(object: _105.QueryClassRequestAminoMsg): _105.QueryClassRequest;
                toAminoMsg(message: _105.QueryClassRequest): _105.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _105.QueryClassRequestProtoMsg): _105.QueryClassRequest;
                toProto(message: _105.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _105.QueryClassRequest): _105.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _105.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryClassResponse;
                fromPartial(object: Partial<_105.QueryClassResponse>): _105.QueryClassResponse;
                fromAmino(object: _105.QueryClassResponseAmino): _105.QueryClassResponse;
                toAmino(message: _105.QueryClassResponse): _105.QueryClassResponseAmino;
                fromAminoMsg(object: _105.QueryClassResponseAminoMsg): _105.QueryClassResponse;
                toAminoMsg(message: _105.QueryClassResponse): _105.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _105.QueryClassResponseProtoMsg): _105.QueryClassResponse;
                toProto(message: _105.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _105.QueryClassResponse): _105.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _105.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryClassesRequest;
                fromPartial(object: Partial<_105.QueryClassesRequest>): _105.QueryClassesRequest;
                fromAmino(object: _105.QueryClassesRequestAmino): _105.QueryClassesRequest;
                toAmino(message: _105.QueryClassesRequest): _105.QueryClassesRequestAmino;
                fromAminoMsg(object: _105.QueryClassesRequestAminoMsg): _105.QueryClassesRequest;
                toAminoMsg(message: _105.QueryClassesRequest): _105.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _105.QueryClassesRequestProtoMsg): _105.QueryClassesRequest;
                toProto(message: _105.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _105.QueryClassesRequest): _105.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _105.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryClassesResponse;
                fromPartial(object: Partial<_105.QueryClassesResponse>): _105.QueryClassesResponse;
                fromAmino(object: _105.QueryClassesResponseAmino): _105.QueryClassesResponse;
                toAmino(message: _105.QueryClassesResponse): _105.QueryClassesResponseAmino;
                fromAminoMsg(object: _105.QueryClassesResponseAminoMsg): _105.QueryClassesResponse;
                toAminoMsg(message: _105.QueryClassesResponse): _105.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _105.QueryClassesResponseProtoMsg): _105.QueryClassesResponse;
                toProto(message: _105.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _105.QueryClassesResponse): _105.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _104.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Class;
                fromPartial(object: Partial<_104.Class>): _104.Class;
                fromAmino(object: _104.ClassAmino): _104.Class;
                toAmino(message: _104.Class): _104.ClassAmino;
                fromAminoMsg(object: _104.ClassAminoMsg): _104.Class;
                toAminoMsg(message: _104.Class): _104.ClassAminoMsg;
                fromProtoMsg(message: _104.ClassProtoMsg): _104.Class;
                toProto(message: _104.Class): Uint8Array;
                toProtoMsg(message: _104.Class): _104.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _104.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.NFT;
                fromPartial(object: Partial<_104.NFT>): _104.NFT;
                fromAmino(object: _104.NFTAmino): _104.NFT;
                toAmino(message: _104.NFT): _104.NFTAmino;
                fromAminoMsg(object: _104.NFTAminoMsg): _104.NFT;
                toAminoMsg(message: _104.NFT): _104.NFTAminoMsg;
                fromProtoMsg(message: _104.NFTProtoMsg): _104.NFT;
                toProto(message: _104.NFT): Uint8Array;
                toProtoMsg(message: _104.NFT): _104.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _103.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Entry;
                fromPartial(object: Partial<_103.Entry>): _103.Entry;
                fromAmino(object: _103.EntryAmino): _103.Entry;
                toAmino(message: _103.Entry): _103.EntryAmino;
                fromAminoMsg(object: _103.EntryAminoMsg): _103.Entry;
                toAminoMsg(message: _103.Entry): _103.EntryAminoMsg;
                fromProtoMsg(message: _103.EntryProtoMsg): _103.Entry;
                toProto(message: _103.Entry): Uint8Array;
                toProtoMsg(message: _103.Entry): _103.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _102.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventSend;
                fromPartial(object: Partial<_102.EventSend>): _102.EventSend;
                fromAmino(object: _102.EventSendAmino): _102.EventSend;
                toAmino(message: _102.EventSend): _102.EventSendAmino;
                fromAminoMsg(object: _102.EventSendAminoMsg): _102.EventSend;
                toAminoMsg(message: _102.EventSend): _102.EventSendAminoMsg;
                fromProtoMsg(message: _102.EventSendProtoMsg): _102.EventSend;
                toProto(message: _102.EventSend): Uint8Array;
                toProtoMsg(message: _102.EventSend): _102.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _102.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventMint;
                fromPartial(object: Partial<_102.EventMint>): _102.EventMint;
                fromAmino(object: _102.EventMintAmino): _102.EventMint;
                toAmino(message: _102.EventMint): _102.EventMintAmino;
                fromAminoMsg(object: _102.EventMintAminoMsg): _102.EventMint;
                toAminoMsg(message: _102.EventMint): _102.EventMintAminoMsg;
                fromProtoMsg(message: _102.EventMintProtoMsg): _102.EventMint;
                toProto(message: _102.EventMint): Uint8Array;
                toProtoMsg(message: _102.EventMint): _102.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _102.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventBurn;
                fromPartial(object: Partial<_102.EventBurn>): _102.EventBurn;
                fromAmino(object: _102.EventBurnAmino): _102.EventBurn;
                toAmino(message: _102.EventBurn): _102.EventBurnAmino;
                fromAminoMsg(object: _102.EventBurnAminoMsg): _102.EventBurn;
                toAminoMsg(message: _102.EventBurn): _102.EventBurnAminoMsg;
                fromProtoMsg(message: _102.EventBurnProtoMsg): _102.EventBurn;
                toProto(message: _102.EventBurn): Uint8Array;
                toProtoMsg(message: _102.EventBurn): _102.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _107.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _107.Module;
                    fromPartial(_: Partial<_107.Module>): _107.Module;
                    fromAmino(_: _107.ModuleAmino): _107.Module;
                    toAmino(_: _107.Module): _107.ModuleAmino;
                    fromAminoMsg(object: _107.ModuleAminoMsg): _107.Module;
                    toAminoMsg(message: _107.Module): _107.ModuleAminoMsg;
                    fromProtoMsg(message: _107.ModuleProtoMsg): _107.Module;
                    toProto(message: _107.Module): Uint8Array;
                    toProtoMsg(message: _107.Module): _107.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _108.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.TableDescriptor;
                fromPartial(object: Partial<_108.TableDescriptor>): _108.TableDescriptor;
                fromAmino(object: _108.TableDescriptorAmino): _108.TableDescriptor;
                toAmino(message: _108.TableDescriptor): _108.TableDescriptorAmino;
                fromAminoMsg(object: _108.TableDescriptorAminoMsg): _108.TableDescriptor;
                toAminoMsg(message: _108.TableDescriptor): _108.TableDescriptorAminoMsg;
                fromProtoMsg(message: _108.TableDescriptorProtoMsg): _108.TableDescriptor;
                toProto(message: _108.TableDescriptor): Uint8Array;
                toProtoMsg(message: _108.TableDescriptor): _108.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _108.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_108.PrimaryKeyDescriptor>): _108.PrimaryKeyDescriptor;
                fromAmino(object: _108.PrimaryKeyDescriptorAmino): _108.PrimaryKeyDescriptor;
                toAmino(message: _108.PrimaryKeyDescriptor): _108.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _108.PrimaryKeyDescriptorAminoMsg): _108.PrimaryKeyDescriptor;
                toAminoMsg(message: _108.PrimaryKeyDescriptor): _108.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _108.PrimaryKeyDescriptorProtoMsg): _108.PrimaryKeyDescriptor;
                toProto(message: _108.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _108.PrimaryKeyDescriptor): _108.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _108.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_108.SecondaryIndexDescriptor>): _108.SecondaryIndexDescriptor;
                fromAmino(object: _108.SecondaryIndexDescriptorAmino): _108.SecondaryIndexDescriptor;
                toAmino(message: _108.SecondaryIndexDescriptor): _108.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _108.SecondaryIndexDescriptorAminoMsg): _108.SecondaryIndexDescriptor;
                toAminoMsg(message: _108.SecondaryIndexDescriptor): _108.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _108.SecondaryIndexDescriptorProtoMsg): _108.SecondaryIndexDescriptor;
                toProto(message: _108.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _108.SecondaryIndexDescriptor): _108.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _108.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.SingletonDescriptor;
                fromPartial(object: Partial<_108.SingletonDescriptor>): _108.SingletonDescriptor;
                fromAmino(object: _108.SingletonDescriptorAmino): _108.SingletonDescriptor;
                toAmino(message: _108.SingletonDescriptor): _108.SingletonDescriptorAmino;
                fromAminoMsg(object: _108.SingletonDescriptorAminoMsg): _108.SingletonDescriptor;
                toAminoMsg(message: _108.SingletonDescriptor): _108.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _108.SingletonDescriptorProtoMsg): _108.SingletonDescriptor;
                toProto(message: _108.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _108.SingletonDescriptor): _108.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _109.StorageType;
            storageTypeToJSON(object: _109.StorageType): string;
            StorageType: typeof _109.StorageType;
            StorageTypeSDKType: typeof _109.StorageType;
            StorageTypeAmino: typeof _109.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _109.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_109.ModuleSchemaDescriptor>): _109.ModuleSchemaDescriptor;
                fromAmino(object: _109.ModuleSchemaDescriptorAmino): _109.ModuleSchemaDescriptor;
                toAmino(message: _109.ModuleSchemaDescriptor): _109.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _109.ModuleSchemaDescriptorAminoMsg): _109.ModuleSchemaDescriptor;
                toAminoMsg(message: _109.ModuleSchemaDescriptor): _109.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _109.ModuleSchemaDescriptorProtoMsg): _109.ModuleSchemaDescriptor;
                toProto(message: _109.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _109.ModuleSchemaDescriptor): _109.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _109.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_109.ModuleSchemaDescriptor_FileEntry>): _109.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _109.ModuleSchemaDescriptor_FileEntryAmino): _109.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _109.ModuleSchemaDescriptor_FileEntry): _109.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _109.ModuleSchemaDescriptor_FileEntryAminoMsg): _109.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _109.ModuleSchemaDescriptor_FileEntry): _109.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _109.ModuleSchemaDescriptor_FileEntryProtoMsg): _109.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _109.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _109.ModuleSchemaDescriptor_FileEntry): _109.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _244.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                subspaces(request?: _111.QuerySubspacesRequest): Promise<_111.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _111.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryParamsRequest;
                fromPartial(object: Partial<_111.QueryParamsRequest>): _111.QueryParamsRequest;
                fromAmino(object: _111.QueryParamsRequestAmino): _111.QueryParamsRequest;
                toAmino(message: _111.QueryParamsRequest): _111.QueryParamsRequestAmino;
                fromAminoMsg(object: _111.QueryParamsRequestAminoMsg): _111.QueryParamsRequest;
                toAminoMsg(message: _111.QueryParamsRequest): _111.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryParamsRequestProtoMsg): _111.QueryParamsRequest;
                toProto(message: _111.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryParamsRequest): _111.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _111.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryParamsResponse;
                fromPartial(object: Partial<_111.QueryParamsResponse>): _111.QueryParamsResponse;
                fromAmino(object: _111.QueryParamsResponseAmino): _111.QueryParamsResponse;
                toAmino(message: _111.QueryParamsResponse): _111.QueryParamsResponseAmino;
                fromAminoMsg(object: _111.QueryParamsResponseAminoMsg): _111.QueryParamsResponse;
                toAminoMsg(message: _111.QueryParamsResponse): _111.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryParamsResponseProtoMsg): _111.QueryParamsResponse;
                toProto(message: _111.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryParamsResponse): _111.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _111.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.QuerySubspacesRequest;
                fromPartial(_: Partial<_111.QuerySubspacesRequest>): _111.QuerySubspacesRequest;
                fromAmino(_: _111.QuerySubspacesRequestAmino): _111.QuerySubspacesRequest;
                toAmino(_: _111.QuerySubspacesRequest): _111.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _111.QuerySubspacesRequestAminoMsg): _111.QuerySubspacesRequest;
                toAminoMsg(message: _111.QuerySubspacesRequest): _111.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _111.QuerySubspacesRequestProtoMsg): _111.QuerySubspacesRequest;
                toProto(message: _111.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _111.QuerySubspacesRequest): _111.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _111.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QuerySubspacesResponse;
                fromPartial(object: Partial<_111.QuerySubspacesResponse>): _111.QuerySubspacesResponse;
                fromAmino(object: _111.QuerySubspacesResponseAmino): _111.QuerySubspacesResponse;
                toAmino(message: _111.QuerySubspacesResponse): _111.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _111.QuerySubspacesResponseAminoMsg): _111.QuerySubspacesResponse;
                toAminoMsg(message: _111.QuerySubspacesResponse): _111.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _111.QuerySubspacesResponseProtoMsg): _111.QuerySubspacesResponse;
                toProto(message: _111.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _111.QuerySubspacesResponse): _111.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _111.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.Subspace;
                fromPartial(object: Partial<_111.Subspace>): _111.Subspace;
                fromAmino(object: _111.SubspaceAmino): _111.Subspace;
                toAmino(message: _111.Subspace): _111.SubspaceAmino;
                fromAminoMsg(object: _111.SubspaceAminoMsg): _111.Subspace;
                toAminoMsg(message: _111.Subspace): _111.SubspaceAminoMsg;
                fromProtoMsg(message: _111.SubspaceProtoMsg): _111.Subspace;
                toProto(message: _111.Subspace): Uint8Array;
                toProtoMsg(message: _111.Subspace): _111.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _110.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.ParameterChangeProposal;
                fromPartial(object: Partial<_110.ParameterChangeProposal>): _110.ParameterChangeProposal;
                fromAmino(object: _110.ParameterChangeProposalAmino): _110.ParameterChangeProposal;
                toAmino(message: _110.ParameterChangeProposal): _110.ParameterChangeProposalAmino;
                fromAminoMsg(object: _110.ParameterChangeProposalAminoMsg): _110.ParameterChangeProposal;
                toAminoMsg(message: _110.ParameterChangeProposal): _110.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _110.ParameterChangeProposalProtoMsg): _110.ParameterChangeProposal;
                toProto(message: _110.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _110.ParameterChangeProposal): _110.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _110.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.ParamChange;
                fromPartial(object: Partial<_110.ParamChange>): _110.ParamChange;
                fromAmino(object: _110.ParamChangeAmino): _110.ParamChange;
                toAmino(message: _110.ParamChange): _110.ParamChangeAmino;
                fromAminoMsg(object: _110.ParamChangeAminoMsg): _110.ParamChange;
                toAminoMsg(message: _110.ParamChange): _110.ParamChangeAminoMsg;
                fromProtoMsg(message: _110.ParamChangeProtoMsg): _110.ParamChange;
                toProto(message: _110.ParamChange): Uint8Array;
                toProtoMsg(message: _110.ParamChange): _110.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _259.MsgClientImpl;
            QueryClientImpl: typeof _245.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
                signingInfo(request: _113.QuerySigningInfoRequest): Promise<_113.QuerySigningInfoResponse>;
                signingInfos(request?: _113.QuerySigningInfosRequest): Promise<_113.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _115.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _115.MsgUnjail): {
                        typeUrl: string;
                        value: _115.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _115.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _115.MsgUnjail): {
                        typeUrl: string;
                        value: _115.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _115.MsgUnjail) => _115.MsgUnjailAmino;
                    fromAmino: (object: _115.MsgUnjailAmino) => _115.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _115.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgUnjail;
                fromPartial(object: Partial<_115.MsgUnjail>): _115.MsgUnjail;
                fromAmino(object: _115.MsgUnjailAmino): _115.MsgUnjail;
                toAmino(message: _115.MsgUnjail): _115.MsgUnjailAmino;
                fromAminoMsg(object: _115.MsgUnjailAminoMsg): _115.MsgUnjail;
                toAminoMsg(message: _115.MsgUnjail): _115.MsgUnjailAminoMsg;
                fromProtoMsg(message: _115.MsgUnjailProtoMsg): _115.MsgUnjail;
                toProto(message: _115.MsgUnjail): Uint8Array;
                toProtoMsg(message: _115.MsgUnjail): _115.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _115.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.MsgUnjailResponse;
                fromPartial(_: Partial<_115.MsgUnjailResponse>): _115.MsgUnjailResponse;
                fromAmino(_: _115.MsgUnjailResponseAmino): _115.MsgUnjailResponse;
                toAmino(_: _115.MsgUnjailResponse): _115.MsgUnjailResponseAmino;
                fromAminoMsg(object: _115.MsgUnjailResponseAminoMsg): _115.MsgUnjailResponse;
                toAminoMsg(message: _115.MsgUnjailResponse): _115.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _115.MsgUnjailResponseProtoMsg): _115.MsgUnjailResponse;
                toProto(message: _115.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _115.MsgUnjailResponse): _115.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _114.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.ValidatorSigningInfo;
                fromPartial(object: Partial<_114.ValidatorSigningInfo>): _114.ValidatorSigningInfo;
                fromAmino(object: _114.ValidatorSigningInfoAmino): _114.ValidatorSigningInfo;
                toAmino(message: _114.ValidatorSigningInfo): _114.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _114.ValidatorSigningInfoAminoMsg): _114.ValidatorSigningInfo;
                toAminoMsg(message: _114.ValidatorSigningInfo): _114.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _114.ValidatorSigningInfoProtoMsg): _114.ValidatorSigningInfo;
                toProto(message: _114.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _114.ValidatorSigningInfo): _114.ValidatorSigningInfoProtoMsg;
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
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _113.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.QueryParamsRequest;
                fromPartial(_: Partial<_113.QueryParamsRequest>): _113.QueryParamsRequest;
                fromAmino(_: _113.QueryParamsRequestAmino): _113.QueryParamsRequest;
                toAmino(_: _113.QueryParamsRequest): _113.QueryParamsRequestAmino;
                fromAminoMsg(object: _113.QueryParamsRequestAminoMsg): _113.QueryParamsRequest;
                toAminoMsg(message: _113.QueryParamsRequest): _113.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryParamsRequestProtoMsg): _113.QueryParamsRequest;
                toProto(message: _113.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryParamsRequest): _113.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _113.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryParamsResponse;
                fromPartial(object: Partial<_113.QueryParamsResponse>): _113.QueryParamsResponse;
                fromAmino(object: _113.QueryParamsResponseAmino): _113.QueryParamsResponse;
                toAmino(message: _113.QueryParamsResponse): _113.QueryParamsResponseAmino;
                fromAminoMsg(object: _113.QueryParamsResponseAminoMsg): _113.QueryParamsResponse;
                toAminoMsg(message: _113.QueryParamsResponse): _113.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryParamsResponseProtoMsg): _113.QueryParamsResponse;
                toProto(message: _113.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryParamsResponse): _113.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _113.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QuerySigningInfoRequest;
                fromPartial(object: Partial<_113.QuerySigningInfoRequest>): _113.QuerySigningInfoRequest;
                fromAmino(object: _113.QuerySigningInfoRequestAmino): _113.QuerySigningInfoRequest;
                toAmino(message: _113.QuerySigningInfoRequest): _113.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _113.QuerySigningInfoRequestAminoMsg): _113.QuerySigningInfoRequest;
                toAminoMsg(message: _113.QuerySigningInfoRequest): _113.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _113.QuerySigningInfoRequestProtoMsg): _113.QuerySigningInfoRequest;
                toProto(message: _113.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _113.QuerySigningInfoRequest): _113.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _113.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QuerySigningInfoResponse;
                fromPartial(object: Partial<_113.QuerySigningInfoResponse>): _113.QuerySigningInfoResponse;
                fromAmino(object: _113.QuerySigningInfoResponseAmino): _113.QuerySigningInfoResponse;
                toAmino(message: _113.QuerySigningInfoResponse): _113.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _113.QuerySigningInfoResponseAminoMsg): _113.QuerySigningInfoResponse;
                toAminoMsg(message: _113.QuerySigningInfoResponse): _113.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _113.QuerySigningInfoResponseProtoMsg): _113.QuerySigningInfoResponse;
                toProto(message: _113.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _113.QuerySigningInfoResponse): _113.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _113.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QuerySigningInfosRequest;
                fromPartial(object: Partial<_113.QuerySigningInfosRequest>): _113.QuerySigningInfosRequest;
                fromAmino(object: _113.QuerySigningInfosRequestAmino): _113.QuerySigningInfosRequest;
                toAmino(message: _113.QuerySigningInfosRequest): _113.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _113.QuerySigningInfosRequestAminoMsg): _113.QuerySigningInfosRequest;
                toAminoMsg(message: _113.QuerySigningInfosRequest): _113.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _113.QuerySigningInfosRequestProtoMsg): _113.QuerySigningInfosRequest;
                toProto(message: _113.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _113.QuerySigningInfosRequest): _113.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _113.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QuerySigningInfosResponse;
                fromPartial(object: Partial<_113.QuerySigningInfosResponse>): _113.QuerySigningInfosResponse;
                fromAmino(object: _113.QuerySigningInfosResponseAmino): _113.QuerySigningInfosResponse;
                toAmino(message: _113.QuerySigningInfosResponse): _113.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _113.QuerySigningInfosResponseAminoMsg): _113.QuerySigningInfosResponse;
                toAminoMsg(message: _113.QuerySigningInfosResponse): _113.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _113.QuerySigningInfosResponseProtoMsg): _113.QuerySigningInfosResponse;
                toProto(message: _113.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _113.QuerySigningInfosResponse): _113.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _112.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GenesisState;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
                fromAmino(object: _112.GenesisStateAmino): _112.GenesisState;
                toAmino(message: _112.GenesisState): _112.GenesisStateAmino;
                fromAminoMsg(object: _112.GenesisStateAminoMsg): _112.GenesisState;
                toAminoMsg(message: _112.GenesisState): _112.GenesisStateAminoMsg;
                fromProtoMsg(message: _112.GenesisStateProtoMsg): _112.GenesisState;
                toProto(message: _112.GenesisState): Uint8Array;
                toProtoMsg(message: _112.GenesisState): _112.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _112.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.SigningInfo;
                fromPartial(object: Partial<_112.SigningInfo>): _112.SigningInfo;
                fromAmino(object: _112.SigningInfoAmino): _112.SigningInfo;
                toAmino(message: _112.SigningInfo): _112.SigningInfoAmino;
                fromAminoMsg(object: _112.SigningInfoAminoMsg): _112.SigningInfo;
                toAminoMsg(message: _112.SigningInfo): _112.SigningInfoAminoMsg;
                fromProtoMsg(message: _112.SigningInfoProtoMsg): _112.SigningInfo;
                toProto(message: _112.SigningInfo): Uint8Array;
                toProtoMsg(message: _112.SigningInfo): _112.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _112.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.ValidatorMissedBlocks;
                fromPartial(object: Partial<_112.ValidatorMissedBlocks>): _112.ValidatorMissedBlocks;
                fromAmino(object: _112.ValidatorMissedBlocksAmino): _112.ValidatorMissedBlocks;
                toAmino(message: _112.ValidatorMissedBlocks): _112.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _112.ValidatorMissedBlocksAminoMsg): _112.ValidatorMissedBlocks;
                toAminoMsg(message: _112.ValidatorMissedBlocks): _112.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _112.ValidatorMissedBlocksProtoMsg): _112.ValidatorMissedBlocks;
                toProto(message: _112.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _112.ValidatorMissedBlocks): _112.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _112.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.MissedBlock;
                fromPartial(object: Partial<_112.MissedBlock>): _112.MissedBlock;
                fromAmino(object: _112.MissedBlockAmino): _112.MissedBlock;
                toAmino(message: _112.MissedBlock): _112.MissedBlockAmino;
                fromAminoMsg(object: _112.MissedBlockAminoMsg): _112.MissedBlock;
                toAminoMsg(message: _112.MissedBlock): _112.MissedBlockAminoMsg;
                fromProtoMsg(message: _112.MissedBlockProtoMsg): _112.MissedBlock;
                toProto(message: _112.MissedBlock): Uint8Array;
                toProtoMsg(message: _112.MissedBlock): _112.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _260.MsgClientImpl;
            QueryClientImpl: typeof _246.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _118.QueryValidatorsRequest): Promise<_118.QueryValidatorsResponse>;
                validator(request: _118.QueryValidatorRequest): Promise<_118.QueryValidatorResponse>;
                validatorDelegations(request: _118.QueryValidatorDelegationsRequest): Promise<_118.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _118.QueryValidatorUnbondingDelegationsRequest): Promise<_118.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _118.QueryDelegationRequest): Promise<_118.QueryDelegationResponse>;
                unbondingDelegation(request: _118.QueryUnbondingDelegationRequest): Promise<_118.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _118.QueryDelegatorDelegationsRequest): Promise<_118.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _118.QueryDelegatorUnbondingDelegationsRequest): Promise<_118.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _118.QueryRedelegationsRequest): Promise<_118.QueryRedelegationsResponse>;
                delegatorValidators(request: _118.QueryDelegatorValidatorsRequest): Promise<_118.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _118.QueryDelegatorValidatorRequest): Promise<_118.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _118.QueryHistoricalInfoRequest): Promise<_118.QueryHistoricalInfoResponse>;
                pool(request?: _118.QueryPoolRequest): Promise<_118.QueryPoolResponse>;
                params(request?: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _120.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _120.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _120.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _120.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _120.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _120.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _120.MsgCreateValidator): {
                        typeUrl: string;
                        value: _120.MsgCreateValidator;
                    };
                    editValidator(value: _120.MsgEditValidator): {
                        typeUrl: string;
                        value: _120.MsgEditValidator;
                    };
                    delegate(value: _120.MsgDelegate): {
                        typeUrl: string;
                        value: _120.MsgDelegate;
                    };
                    beginRedelegate(value: _120.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _120.MsgBeginRedelegate;
                    };
                    undelegate(value: _120.MsgUndelegate): {
                        typeUrl: string;
                        value: _120.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _120.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _120.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _120.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _120.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _120.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _120.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _120.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _120.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _120.MsgCreateValidator): {
                        typeUrl: string;
                        value: _120.MsgCreateValidator;
                    };
                    editValidator(value: _120.MsgEditValidator): {
                        typeUrl: string;
                        value: _120.MsgEditValidator;
                    };
                    delegate(value: _120.MsgDelegate): {
                        typeUrl: string;
                        value: _120.MsgDelegate;
                    };
                    beginRedelegate(value: _120.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _120.MsgBeginRedelegate;
                    };
                    undelegate(value: _120.MsgUndelegate): {
                        typeUrl: string;
                        value: _120.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _120.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _120.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _120.MsgCreateValidator) => _120.MsgCreateValidatorAmino;
                    fromAmino: (object: _120.MsgCreateValidatorAmino) => _120.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _120.MsgEditValidator) => _120.MsgEditValidatorAmino;
                    fromAmino: (object: _120.MsgEditValidatorAmino) => _120.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _120.MsgDelegate) => _120.MsgDelegateAmino;
                    fromAmino: (object: _120.MsgDelegateAmino) => _120.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _120.MsgBeginRedelegate) => _120.MsgBeginRedelegateAmino;
                    fromAmino: (object: _120.MsgBeginRedelegateAmino) => _120.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _120.MsgUndelegate) => _120.MsgUndelegateAmino;
                    fromAmino: (object: _120.MsgUndelegateAmino) => _120.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _120.MsgCancelUnbondingDelegation) => _120.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _120.MsgCancelUnbondingDelegationAmino) => _120.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _120.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgCreateValidator;
                fromPartial(object: Partial<_120.MsgCreateValidator>): _120.MsgCreateValidator;
                fromAmino(object: _120.MsgCreateValidatorAmino): _120.MsgCreateValidator;
                toAmino(message: _120.MsgCreateValidator): _120.MsgCreateValidatorAmino;
                fromAminoMsg(object: _120.MsgCreateValidatorAminoMsg): _120.MsgCreateValidator;
                toAminoMsg(message: _120.MsgCreateValidator): _120.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _120.MsgCreateValidatorProtoMsg): _120.MsgCreateValidator;
                toProto(message: _120.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _120.MsgCreateValidator): _120.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _120.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_120.MsgCreateValidatorResponse>): _120.MsgCreateValidatorResponse;
                fromAmino(_: _120.MsgCreateValidatorResponseAmino): _120.MsgCreateValidatorResponse;
                toAmino(_: _120.MsgCreateValidatorResponse): _120.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _120.MsgCreateValidatorResponseAminoMsg): _120.MsgCreateValidatorResponse;
                toAminoMsg(message: _120.MsgCreateValidatorResponse): _120.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _120.MsgCreateValidatorResponseProtoMsg): _120.MsgCreateValidatorResponse;
                toProto(message: _120.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _120.MsgCreateValidatorResponse): _120.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _120.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgEditValidator;
                fromPartial(object: Partial<_120.MsgEditValidator>): _120.MsgEditValidator;
                fromAmino(object: _120.MsgEditValidatorAmino): _120.MsgEditValidator;
                toAmino(message: _120.MsgEditValidator): _120.MsgEditValidatorAmino;
                fromAminoMsg(object: _120.MsgEditValidatorAminoMsg): _120.MsgEditValidator;
                toAminoMsg(message: _120.MsgEditValidator): _120.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _120.MsgEditValidatorProtoMsg): _120.MsgEditValidator;
                toProto(message: _120.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _120.MsgEditValidator): _120.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _120.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgEditValidatorResponse;
                fromPartial(_: Partial<_120.MsgEditValidatorResponse>): _120.MsgEditValidatorResponse;
                fromAmino(_: _120.MsgEditValidatorResponseAmino): _120.MsgEditValidatorResponse;
                toAmino(_: _120.MsgEditValidatorResponse): _120.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _120.MsgEditValidatorResponseAminoMsg): _120.MsgEditValidatorResponse;
                toAminoMsg(message: _120.MsgEditValidatorResponse): _120.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _120.MsgEditValidatorResponseProtoMsg): _120.MsgEditValidatorResponse;
                toProto(message: _120.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _120.MsgEditValidatorResponse): _120.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _120.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgDelegate;
                fromPartial(object: Partial<_120.MsgDelegate>): _120.MsgDelegate;
                fromAmino(object: _120.MsgDelegateAmino): _120.MsgDelegate;
                toAmino(message: _120.MsgDelegate): _120.MsgDelegateAmino;
                fromAminoMsg(object: _120.MsgDelegateAminoMsg): _120.MsgDelegate;
                toAminoMsg(message: _120.MsgDelegate): _120.MsgDelegateAminoMsg;
                fromProtoMsg(message: _120.MsgDelegateProtoMsg): _120.MsgDelegate;
                toProto(message: _120.MsgDelegate): Uint8Array;
                toProtoMsg(message: _120.MsgDelegate): _120.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _120.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgDelegateResponse;
                fromPartial(_: Partial<_120.MsgDelegateResponse>): _120.MsgDelegateResponse;
                fromAmino(_: _120.MsgDelegateResponseAmino): _120.MsgDelegateResponse;
                toAmino(_: _120.MsgDelegateResponse): _120.MsgDelegateResponseAmino;
                fromAminoMsg(object: _120.MsgDelegateResponseAminoMsg): _120.MsgDelegateResponse;
                toAminoMsg(message: _120.MsgDelegateResponse): _120.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _120.MsgDelegateResponseProtoMsg): _120.MsgDelegateResponse;
                toProto(message: _120.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _120.MsgDelegateResponse): _120.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _120.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgBeginRedelegate;
                fromPartial(object: Partial<_120.MsgBeginRedelegate>): _120.MsgBeginRedelegate;
                fromAmino(object: _120.MsgBeginRedelegateAmino): _120.MsgBeginRedelegate;
                toAmino(message: _120.MsgBeginRedelegate): _120.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _120.MsgBeginRedelegateAminoMsg): _120.MsgBeginRedelegate;
                toAminoMsg(message: _120.MsgBeginRedelegate): _120.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _120.MsgBeginRedelegateProtoMsg): _120.MsgBeginRedelegate;
                toProto(message: _120.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _120.MsgBeginRedelegate): _120.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _120.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_120.MsgBeginRedelegateResponse>): _120.MsgBeginRedelegateResponse;
                fromAmino(object: _120.MsgBeginRedelegateResponseAmino): _120.MsgBeginRedelegateResponse;
                toAmino(message: _120.MsgBeginRedelegateResponse): _120.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _120.MsgBeginRedelegateResponseAminoMsg): _120.MsgBeginRedelegateResponse;
                toAminoMsg(message: _120.MsgBeginRedelegateResponse): _120.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _120.MsgBeginRedelegateResponseProtoMsg): _120.MsgBeginRedelegateResponse;
                toProto(message: _120.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _120.MsgBeginRedelegateResponse): _120.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _120.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgUndelegate;
                fromPartial(object: Partial<_120.MsgUndelegate>): _120.MsgUndelegate;
                fromAmino(object: _120.MsgUndelegateAmino): _120.MsgUndelegate;
                toAmino(message: _120.MsgUndelegate): _120.MsgUndelegateAmino;
                fromAminoMsg(object: _120.MsgUndelegateAminoMsg): _120.MsgUndelegate;
                toAminoMsg(message: _120.MsgUndelegate): _120.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _120.MsgUndelegateProtoMsg): _120.MsgUndelegate;
                toProto(message: _120.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _120.MsgUndelegate): _120.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _120.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgUndelegateResponse;
                fromPartial(object: Partial<_120.MsgUndelegateResponse>): _120.MsgUndelegateResponse;
                fromAmino(object: _120.MsgUndelegateResponseAmino): _120.MsgUndelegateResponse;
                toAmino(message: _120.MsgUndelegateResponse): _120.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _120.MsgUndelegateResponseAminoMsg): _120.MsgUndelegateResponse;
                toAminoMsg(message: _120.MsgUndelegateResponse): _120.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _120.MsgUndelegateResponseProtoMsg): _120.MsgUndelegateResponse;
                toProto(message: _120.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _120.MsgUndelegateResponse): _120.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _120.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_120.MsgCancelUnbondingDelegation>): _120.MsgCancelUnbondingDelegation;
                fromAmino(object: _120.MsgCancelUnbondingDelegationAmino): _120.MsgCancelUnbondingDelegation;
                toAmino(message: _120.MsgCancelUnbondingDelegation): _120.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _120.MsgCancelUnbondingDelegationAminoMsg): _120.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _120.MsgCancelUnbondingDelegation): _120.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _120.MsgCancelUnbondingDelegationProtoMsg): _120.MsgCancelUnbondingDelegation;
                toProto(message: _120.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _120.MsgCancelUnbondingDelegation): _120.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _120.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_120.MsgCancelUnbondingDelegationResponse>): _120.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _120.MsgCancelUnbondingDelegationResponseAmino): _120.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _120.MsgCancelUnbondingDelegationResponse): _120.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _120.MsgCancelUnbondingDelegationResponseAminoMsg): _120.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _120.MsgCancelUnbondingDelegationResponse): _120.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _120.MsgCancelUnbondingDelegationResponseProtoMsg): _120.MsgCancelUnbondingDelegationResponse;
                toProto(message: _120.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _120.MsgCancelUnbondingDelegationResponse): _120.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _119.BondStatus;
            bondStatusToJSON(object: _119.BondStatus): string;
            BondStatus: typeof _119.BondStatus;
            BondStatusSDKType: typeof _119.BondStatus;
            BondStatusAmino: typeof _119.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _119.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.HistoricalInfo;
                fromPartial(object: Partial<_119.HistoricalInfo>): _119.HistoricalInfo;
                fromAmino(object: _119.HistoricalInfoAmino): _119.HistoricalInfo;
                toAmino(message: _119.HistoricalInfo): _119.HistoricalInfoAmino;
                fromAminoMsg(object: _119.HistoricalInfoAminoMsg): _119.HistoricalInfo;
                toAminoMsg(message: _119.HistoricalInfo): _119.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _119.HistoricalInfoProtoMsg): _119.HistoricalInfo;
                toProto(message: _119.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _119.HistoricalInfo): _119.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _119.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.CommissionRates;
                fromPartial(object: Partial<_119.CommissionRates>): _119.CommissionRates;
                fromAmino(object: _119.CommissionRatesAmino): _119.CommissionRates;
                toAmino(message: _119.CommissionRates): _119.CommissionRatesAmino;
                fromAminoMsg(object: _119.CommissionRatesAminoMsg): _119.CommissionRates;
                toAminoMsg(message: _119.CommissionRates): _119.CommissionRatesAminoMsg;
                fromProtoMsg(message: _119.CommissionRatesProtoMsg): _119.CommissionRates;
                toProto(message: _119.CommissionRates): Uint8Array;
                toProtoMsg(message: _119.CommissionRates): _119.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _119.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Commission;
                fromPartial(object: Partial<_119.Commission>): _119.Commission;
                fromAmino(object: _119.CommissionAmino): _119.Commission;
                toAmino(message: _119.Commission): _119.CommissionAmino;
                fromAminoMsg(object: _119.CommissionAminoMsg): _119.Commission;
                toAminoMsg(message: _119.Commission): _119.CommissionAminoMsg;
                fromProtoMsg(message: _119.CommissionProtoMsg): _119.Commission;
                toProto(message: _119.Commission): Uint8Array;
                toProtoMsg(message: _119.Commission): _119.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _119.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Description;
                fromPartial(object: Partial<_119.Description>): _119.Description;
                fromAmino(object: _119.DescriptionAmino): _119.Description;
                toAmino(message: _119.Description): _119.DescriptionAmino;
                fromAminoMsg(object: _119.DescriptionAminoMsg): _119.Description;
                toAminoMsg(message: _119.Description): _119.DescriptionAminoMsg;
                fromProtoMsg(message: _119.DescriptionProtoMsg): _119.Description;
                toProto(message: _119.Description): Uint8Array;
                toProtoMsg(message: _119.Description): _119.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _119.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Validator;
                fromPartial(object: Partial<_119.Validator>): _119.Validator;
                fromAmino(object: _119.ValidatorAmino): _119.Validator;
                toAmino(message: _119.Validator): _119.ValidatorAmino;
                fromAminoMsg(object: _119.ValidatorAminoMsg): _119.Validator;
                toAminoMsg(message: _119.Validator): _119.ValidatorAminoMsg;
                fromProtoMsg(message: _119.ValidatorProtoMsg): _119.Validator;
                toProto(message: _119.Validator): Uint8Array;
                toProtoMsg(message: _119.Validator): _119.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _119.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.ValAddresses;
                fromPartial(object: Partial<_119.ValAddresses>): _119.ValAddresses;
                fromAmino(object: _119.ValAddressesAmino): _119.ValAddresses;
                toAmino(message: _119.ValAddresses): _119.ValAddressesAmino;
                fromAminoMsg(object: _119.ValAddressesAminoMsg): _119.ValAddresses;
                toAminoMsg(message: _119.ValAddresses): _119.ValAddressesAminoMsg;
                fromProtoMsg(message: _119.ValAddressesProtoMsg): _119.ValAddresses;
                toProto(message: _119.ValAddresses): Uint8Array;
                toProtoMsg(message: _119.ValAddresses): _119.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _119.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.DVPair;
                fromPartial(object: Partial<_119.DVPair>): _119.DVPair;
                fromAmino(object: _119.DVPairAmino): _119.DVPair;
                toAmino(message: _119.DVPair): _119.DVPairAmino;
                fromAminoMsg(object: _119.DVPairAminoMsg): _119.DVPair;
                toAminoMsg(message: _119.DVPair): _119.DVPairAminoMsg;
                fromProtoMsg(message: _119.DVPairProtoMsg): _119.DVPair;
                toProto(message: _119.DVPair): Uint8Array;
                toProtoMsg(message: _119.DVPair): _119.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _119.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.DVPairs;
                fromPartial(object: Partial<_119.DVPairs>): _119.DVPairs;
                fromAmino(object: _119.DVPairsAmino): _119.DVPairs;
                toAmino(message: _119.DVPairs): _119.DVPairsAmino;
                fromAminoMsg(object: _119.DVPairsAminoMsg): _119.DVPairs;
                toAminoMsg(message: _119.DVPairs): _119.DVPairsAminoMsg;
                fromProtoMsg(message: _119.DVPairsProtoMsg): _119.DVPairs;
                toProto(message: _119.DVPairs): Uint8Array;
                toProtoMsg(message: _119.DVPairs): _119.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _119.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.DVVTriplet;
                fromPartial(object: Partial<_119.DVVTriplet>): _119.DVVTriplet;
                fromAmino(object: _119.DVVTripletAmino): _119.DVVTriplet;
                toAmino(message: _119.DVVTriplet): _119.DVVTripletAmino;
                fromAminoMsg(object: _119.DVVTripletAminoMsg): _119.DVVTriplet;
                toAminoMsg(message: _119.DVVTriplet): _119.DVVTripletAminoMsg;
                fromProtoMsg(message: _119.DVVTripletProtoMsg): _119.DVVTriplet;
                toProto(message: _119.DVVTriplet): Uint8Array;
                toProtoMsg(message: _119.DVVTriplet): _119.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _119.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.DVVTriplets;
                fromPartial(object: Partial<_119.DVVTriplets>): _119.DVVTriplets;
                fromAmino(object: _119.DVVTripletsAmino): _119.DVVTriplets;
                toAmino(message: _119.DVVTriplets): _119.DVVTripletsAmino;
                fromAminoMsg(object: _119.DVVTripletsAminoMsg): _119.DVVTriplets;
                toAminoMsg(message: _119.DVVTriplets): _119.DVVTripletsAminoMsg;
                fromProtoMsg(message: _119.DVVTripletsProtoMsg): _119.DVVTriplets;
                toProto(message: _119.DVVTriplets): Uint8Array;
                toProtoMsg(message: _119.DVVTriplets): _119.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _119.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Delegation;
                fromPartial(object: Partial<_119.Delegation>): _119.Delegation;
                fromAmino(object: _119.DelegationAmino): _119.Delegation;
                toAmino(message: _119.Delegation): _119.DelegationAmino;
                fromAminoMsg(object: _119.DelegationAminoMsg): _119.Delegation;
                toAminoMsg(message: _119.Delegation): _119.DelegationAminoMsg;
                fromProtoMsg(message: _119.DelegationProtoMsg): _119.Delegation;
                toProto(message: _119.Delegation): Uint8Array;
                toProtoMsg(message: _119.Delegation): _119.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _119.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.UnbondingDelegation;
                fromPartial(object: Partial<_119.UnbondingDelegation>): _119.UnbondingDelegation;
                fromAmino(object: _119.UnbondingDelegationAmino): _119.UnbondingDelegation;
                toAmino(message: _119.UnbondingDelegation): _119.UnbondingDelegationAmino;
                fromAminoMsg(object: _119.UnbondingDelegationAminoMsg): _119.UnbondingDelegation;
                toAminoMsg(message: _119.UnbondingDelegation): _119.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _119.UnbondingDelegationProtoMsg): _119.UnbondingDelegation;
                toProto(message: _119.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _119.UnbondingDelegation): _119.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _119.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.UnbondingDelegationEntry;
                fromPartial(object: Partial<_119.UnbondingDelegationEntry>): _119.UnbondingDelegationEntry;
                fromAmino(object: _119.UnbondingDelegationEntryAmino): _119.UnbondingDelegationEntry;
                toAmino(message: _119.UnbondingDelegationEntry): _119.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _119.UnbondingDelegationEntryAminoMsg): _119.UnbondingDelegationEntry;
                toAminoMsg(message: _119.UnbondingDelegationEntry): _119.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _119.UnbondingDelegationEntryProtoMsg): _119.UnbondingDelegationEntry;
                toProto(message: _119.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _119.UnbondingDelegationEntry): _119.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _119.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.RedelegationEntry;
                fromPartial(object: Partial<_119.RedelegationEntry>): _119.RedelegationEntry;
                fromAmino(object: _119.RedelegationEntryAmino): _119.RedelegationEntry;
                toAmino(message: _119.RedelegationEntry): _119.RedelegationEntryAmino;
                fromAminoMsg(object: _119.RedelegationEntryAminoMsg): _119.RedelegationEntry;
                toAminoMsg(message: _119.RedelegationEntry): _119.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _119.RedelegationEntryProtoMsg): _119.RedelegationEntry;
                toProto(message: _119.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _119.RedelegationEntry): _119.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _119.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Redelegation;
                fromPartial(object: Partial<_119.Redelegation>): _119.Redelegation;
                fromAmino(object: _119.RedelegationAmino): _119.Redelegation;
                toAmino(message: _119.Redelegation): _119.RedelegationAmino;
                fromAminoMsg(object: _119.RedelegationAminoMsg): _119.Redelegation;
                toAminoMsg(message: _119.Redelegation): _119.RedelegationAminoMsg;
                fromProtoMsg(message: _119.RedelegationProtoMsg): _119.Redelegation;
                toProto(message: _119.Redelegation): Uint8Array;
                toProtoMsg(message: _119.Redelegation): _119.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _119.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Params;
                fromPartial(object: Partial<_119.Params>): _119.Params;
                fromAmino(object: _119.ParamsAmino): _119.Params;
                toAmino(message: _119.Params): _119.ParamsAmino;
                fromAminoMsg(object: _119.ParamsAminoMsg): _119.Params;
                toAminoMsg(message: _119.Params): _119.ParamsAminoMsg;
                fromProtoMsg(message: _119.ParamsProtoMsg): _119.Params;
                toProto(message: _119.Params): Uint8Array;
                toProtoMsg(message: _119.Params): _119.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _119.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.DelegationResponse;
                fromPartial(object: Partial<_119.DelegationResponse>): _119.DelegationResponse;
                fromAmino(object: _119.DelegationResponseAmino): _119.DelegationResponse;
                toAmino(message: _119.DelegationResponse): _119.DelegationResponseAmino;
                fromAminoMsg(object: _119.DelegationResponseAminoMsg): _119.DelegationResponse;
                toAminoMsg(message: _119.DelegationResponse): _119.DelegationResponseAminoMsg;
                fromProtoMsg(message: _119.DelegationResponseProtoMsg): _119.DelegationResponse;
                toProto(message: _119.DelegationResponse): Uint8Array;
                toProtoMsg(message: _119.DelegationResponse): _119.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _119.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.RedelegationEntryResponse;
                fromPartial(object: Partial<_119.RedelegationEntryResponse>): _119.RedelegationEntryResponse;
                fromAmino(object: _119.RedelegationEntryResponseAmino): _119.RedelegationEntryResponse;
                toAmino(message: _119.RedelegationEntryResponse): _119.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _119.RedelegationEntryResponseAminoMsg): _119.RedelegationEntryResponse;
                toAminoMsg(message: _119.RedelegationEntryResponse): _119.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _119.RedelegationEntryResponseProtoMsg): _119.RedelegationEntryResponse;
                toProto(message: _119.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _119.RedelegationEntryResponse): _119.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _119.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.RedelegationResponse;
                fromPartial(object: Partial<_119.RedelegationResponse>): _119.RedelegationResponse;
                fromAmino(object: _119.RedelegationResponseAmino): _119.RedelegationResponse;
                toAmino(message: _119.RedelegationResponse): _119.RedelegationResponseAmino;
                fromAminoMsg(object: _119.RedelegationResponseAminoMsg): _119.RedelegationResponse;
                toAminoMsg(message: _119.RedelegationResponse): _119.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _119.RedelegationResponseProtoMsg): _119.RedelegationResponse;
                toProto(message: _119.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _119.RedelegationResponse): _119.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _119.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Pool;
                fromPartial(object: Partial<_119.Pool>): _119.Pool;
                fromAmino(object: _119.PoolAmino): _119.Pool;
                toAmino(message: _119.Pool): _119.PoolAmino;
                fromAminoMsg(object: _119.PoolAminoMsg): _119.Pool;
                toAminoMsg(message: _119.Pool): _119.PoolAminoMsg;
                fromProtoMsg(message: _119.PoolProtoMsg): _119.Pool;
                toProto(message: _119.Pool): Uint8Array;
                toProtoMsg(message: _119.Pool): _119.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _118.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryValidatorsRequest;
                fromPartial(object: Partial<_118.QueryValidatorsRequest>): _118.QueryValidatorsRequest;
                fromAmino(object: _118.QueryValidatorsRequestAmino): _118.QueryValidatorsRequest;
                toAmino(message: _118.QueryValidatorsRequest): _118.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _118.QueryValidatorsRequestAminoMsg): _118.QueryValidatorsRequest;
                toAminoMsg(message: _118.QueryValidatorsRequest): _118.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryValidatorsRequestProtoMsg): _118.QueryValidatorsRequest;
                toProto(message: _118.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryValidatorsRequest): _118.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _118.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryValidatorsResponse;
                fromPartial(object: Partial<_118.QueryValidatorsResponse>): _118.QueryValidatorsResponse;
                fromAmino(object: _118.QueryValidatorsResponseAmino): _118.QueryValidatorsResponse;
                toAmino(message: _118.QueryValidatorsResponse): _118.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _118.QueryValidatorsResponseAminoMsg): _118.QueryValidatorsResponse;
                toAminoMsg(message: _118.QueryValidatorsResponse): _118.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryValidatorsResponseProtoMsg): _118.QueryValidatorsResponse;
                toProto(message: _118.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryValidatorsResponse): _118.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _118.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryValidatorRequest;
                fromPartial(object: Partial<_118.QueryValidatorRequest>): _118.QueryValidatorRequest;
                fromAmino(object: _118.QueryValidatorRequestAmino): _118.QueryValidatorRequest;
                toAmino(message: _118.QueryValidatorRequest): _118.QueryValidatorRequestAmino;
                fromAminoMsg(object: _118.QueryValidatorRequestAminoMsg): _118.QueryValidatorRequest;
                toAminoMsg(message: _118.QueryValidatorRequest): _118.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _118.QueryValidatorRequestProtoMsg): _118.QueryValidatorRequest;
                toProto(message: _118.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _118.QueryValidatorRequest): _118.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _118.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryValidatorResponse;
                fromPartial(object: Partial<_118.QueryValidatorResponse>): _118.QueryValidatorResponse;
                fromAmino(object: _118.QueryValidatorResponseAmino): _118.QueryValidatorResponse;
                toAmino(message: _118.QueryValidatorResponse): _118.QueryValidatorResponseAmino;
                fromAminoMsg(object: _118.QueryValidatorResponseAminoMsg): _118.QueryValidatorResponse;
                toAminoMsg(message: _118.QueryValidatorResponse): _118.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _118.QueryValidatorResponseProtoMsg): _118.QueryValidatorResponse;
                toProto(message: _118.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _118.QueryValidatorResponse): _118.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _118.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_118.QueryValidatorDelegationsRequest>): _118.QueryValidatorDelegationsRequest;
                fromAmino(object: _118.QueryValidatorDelegationsRequestAmino): _118.QueryValidatorDelegationsRequest;
                toAmino(message: _118.QueryValidatorDelegationsRequest): _118.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _118.QueryValidatorDelegationsRequestAminoMsg): _118.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _118.QueryValidatorDelegationsRequest): _118.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryValidatorDelegationsRequestProtoMsg): _118.QueryValidatorDelegationsRequest;
                toProto(message: _118.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryValidatorDelegationsRequest): _118.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _118.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_118.QueryValidatorDelegationsResponse>): _118.QueryValidatorDelegationsResponse;
                fromAmino(object: _118.QueryValidatorDelegationsResponseAmino): _118.QueryValidatorDelegationsResponse;
                toAmino(message: _118.QueryValidatorDelegationsResponse): _118.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _118.QueryValidatorDelegationsResponseAminoMsg): _118.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _118.QueryValidatorDelegationsResponse): _118.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryValidatorDelegationsResponseProtoMsg): _118.QueryValidatorDelegationsResponse;
                toProto(message: _118.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryValidatorDelegationsResponse): _118.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _118.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_118.QueryValidatorUnbondingDelegationsRequest>): _118.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _118.QueryValidatorUnbondingDelegationsRequestAmino): _118.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _118.QueryValidatorUnbondingDelegationsRequest): _118.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _118.QueryValidatorUnbondingDelegationsRequestAminoMsg): _118.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _118.QueryValidatorUnbondingDelegationsRequest): _118.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryValidatorUnbondingDelegationsRequestProtoMsg): _118.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _118.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryValidatorUnbondingDelegationsRequest): _118.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _118.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_118.QueryValidatorUnbondingDelegationsResponse>): _118.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _118.QueryValidatorUnbondingDelegationsResponseAmino): _118.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _118.QueryValidatorUnbondingDelegationsResponse): _118.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _118.QueryValidatorUnbondingDelegationsResponseAminoMsg): _118.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _118.QueryValidatorUnbondingDelegationsResponse): _118.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryValidatorUnbondingDelegationsResponseProtoMsg): _118.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _118.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryValidatorUnbondingDelegationsResponse): _118.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _118.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDelegationRequest;
                fromPartial(object: Partial<_118.QueryDelegationRequest>): _118.QueryDelegationRequest;
                fromAmino(object: _118.QueryDelegationRequestAmino): _118.QueryDelegationRequest;
                toAmino(message: _118.QueryDelegationRequest): _118.QueryDelegationRequestAmino;
                fromAminoMsg(object: _118.QueryDelegationRequestAminoMsg): _118.QueryDelegationRequest;
                toAminoMsg(message: _118.QueryDelegationRequest): _118.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _118.QueryDelegationRequestProtoMsg): _118.QueryDelegationRequest;
                toProto(message: _118.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _118.QueryDelegationRequest): _118.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _118.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDelegationResponse;
                fromPartial(object: Partial<_118.QueryDelegationResponse>): _118.QueryDelegationResponse;
                fromAmino(object: _118.QueryDelegationResponseAmino): _118.QueryDelegationResponse;
                toAmino(message: _118.QueryDelegationResponse): _118.QueryDelegationResponseAmino;
                fromAminoMsg(object: _118.QueryDelegationResponseAminoMsg): _118.QueryDelegationResponse;
                toAminoMsg(message: _118.QueryDelegationResponse): _118.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _118.QueryDelegationResponseProtoMsg): _118.QueryDelegationResponse;
                toProto(message: _118.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _118.QueryDelegationResponse): _118.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _118.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_118.QueryUnbondingDelegationRequest>): _118.QueryUnbondingDelegationRequest;
                fromAmino(object: _118.QueryUnbondingDelegationRequestAmino): _118.QueryUnbondingDelegationRequest;
                toAmino(message: _118.QueryUnbondingDelegationRequest): _118.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _118.QueryUnbondingDelegationRequestAminoMsg): _118.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _118.QueryUnbondingDelegationRequest): _118.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _118.QueryUnbondingDelegationRequestProtoMsg): _118.QueryUnbondingDelegationRequest;
                toProto(message: _118.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _118.QueryUnbondingDelegationRequest): _118.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _118.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_118.QueryUnbondingDelegationResponse>): _118.QueryUnbondingDelegationResponse;
                fromAmino(object: _118.QueryUnbondingDelegationResponseAmino): _118.QueryUnbondingDelegationResponse;
                toAmino(message: _118.QueryUnbondingDelegationResponse): _118.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _118.QueryUnbondingDelegationResponseAminoMsg): _118.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _118.QueryUnbondingDelegationResponse): _118.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _118.QueryUnbondingDelegationResponseProtoMsg): _118.QueryUnbondingDelegationResponse;
                toProto(message: _118.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _118.QueryUnbondingDelegationResponse): _118.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _118.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_118.QueryDelegatorDelegationsRequest>): _118.QueryDelegatorDelegationsRequest;
                fromAmino(object: _118.QueryDelegatorDelegationsRequestAmino): _118.QueryDelegatorDelegationsRequest;
                toAmino(message: _118.QueryDelegatorDelegationsRequest): _118.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _118.QueryDelegatorDelegationsRequestAminoMsg): _118.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _118.QueryDelegatorDelegationsRequest): _118.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryDelegatorDelegationsRequestProtoMsg): _118.QueryDelegatorDelegationsRequest;
                toProto(message: _118.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryDelegatorDelegationsRequest): _118.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _118.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_118.QueryDelegatorDelegationsResponse>): _118.QueryDelegatorDelegationsResponse;
                fromAmino(object: _118.QueryDelegatorDelegationsResponseAmino): _118.QueryDelegatorDelegationsResponse;
                toAmino(message: _118.QueryDelegatorDelegationsResponse): _118.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _118.QueryDelegatorDelegationsResponseAminoMsg): _118.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _118.QueryDelegatorDelegationsResponse): _118.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryDelegatorDelegationsResponseProtoMsg): _118.QueryDelegatorDelegationsResponse;
                toProto(message: _118.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryDelegatorDelegationsResponse): _118.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _118.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_118.QueryDelegatorUnbondingDelegationsRequest>): _118.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _118.QueryDelegatorUnbondingDelegationsRequestAmino): _118.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _118.QueryDelegatorUnbondingDelegationsRequest): _118.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _118.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _118.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _118.QueryDelegatorUnbondingDelegationsRequest): _118.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _118.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _118.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryDelegatorUnbondingDelegationsRequest): _118.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _118.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_118.QueryDelegatorUnbondingDelegationsResponse>): _118.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _118.QueryDelegatorUnbondingDelegationsResponseAmino): _118.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _118.QueryDelegatorUnbondingDelegationsResponse): _118.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _118.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _118.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _118.QueryDelegatorUnbondingDelegationsResponse): _118.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _118.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _118.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryDelegatorUnbondingDelegationsResponse): _118.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _118.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryRedelegationsRequest;
                fromPartial(object: Partial<_118.QueryRedelegationsRequest>): _118.QueryRedelegationsRequest;
                fromAmino(object: _118.QueryRedelegationsRequestAmino): _118.QueryRedelegationsRequest;
                toAmino(message: _118.QueryRedelegationsRequest): _118.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _118.QueryRedelegationsRequestAminoMsg): _118.QueryRedelegationsRequest;
                toAminoMsg(message: _118.QueryRedelegationsRequest): _118.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryRedelegationsRequestProtoMsg): _118.QueryRedelegationsRequest;
                toProto(message: _118.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryRedelegationsRequest): _118.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _118.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryRedelegationsResponse;
                fromPartial(object: Partial<_118.QueryRedelegationsResponse>): _118.QueryRedelegationsResponse;
                fromAmino(object: _118.QueryRedelegationsResponseAmino): _118.QueryRedelegationsResponse;
                toAmino(message: _118.QueryRedelegationsResponse): _118.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _118.QueryRedelegationsResponseAminoMsg): _118.QueryRedelegationsResponse;
                toAminoMsg(message: _118.QueryRedelegationsResponse): _118.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryRedelegationsResponseProtoMsg): _118.QueryRedelegationsResponse;
                toProto(message: _118.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryRedelegationsResponse): _118.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _118.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_118.QueryDelegatorValidatorsRequest>): _118.QueryDelegatorValidatorsRequest;
                fromAmino(object: _118.QueryDelegatorValidatorsRequestAmino): _118.QueryDelegatorValidatorsRequest;
                toAmino(message: _118.QueryDelegatorValidatorsRequest): _118.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _118.QueryDelegatorValidatorsRequestAminoMsg): _118.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _118.QueryDelegatorValidatorsRequest): _118.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryDelegatorValidatorsRequestProtoMsg): _118.QueryDelegatorValidatorsRequest;
                toProto(message: _118.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryDelegatorValidatorsRequest): _118.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _118.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_118.QueryDelegatorValidatorsResponse>): _118.QueryDelegatorValidatorsResponse;
                fromAmino(object: _118.QueryDelegatorValidatorsResponseAmino): _118.QueryDelegatorValidatorsResponse;
                toAmino(message: _118.QueryDelegatorValidatorsResponse): _118.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _118.QueryDelegatorValidatorsResponseAminoMsg): _118.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _118.QueryDelegatorValidatorsResponse): _118.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryDelegatorValidatorsResponseProtoMsg): _118.QueryDelegatorValidatorsResponse;
                toProto(message: _118.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryDelegatorValidatorsResponse): _118.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _118.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_118.QueryDelegatorValidatorRequest>): _118.QueryDelegatorValidatorRequest;
                fromAmino(object: _118.QueryDelegatorValidatorRequestAmino): _118.QueryDelegatorValidatorRequest;
                toAmino(message: _118.QueryDelegatorValidatorRequest): _118.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _118.QueryDelegatorValidatorRequestAminoMsg): _118.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _118.QueryDelegatorValidatorRequest): _118.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _118.QueryDelegatorValidatorRequestProtoMsg): _118.QueryDelegatorValidatorRequest;
                toProto(message: _118.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _118.QueryDelegatorValidatorRequest): _118.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _118.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_118.QueryDelegatorValidatorResponse>): _118.QueryDelegatorValidatorResponse;
                fromAmino(object: _118.QueryDelegatorValidatorResponseAmino): _118.QueryDelegatorValidatorResponse;
                toAmino(message: _118.QueryDelegatorValidatorResponse): _118.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _118.QueryDelegatorValidatorResponseAminoMsg): _118.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _118.QueryDelegatorValidatorResponse): _118.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _118.QueryDelegatorValidatorResponseProtoMsg): _118.QueryDelegatorValidatorResponse;
                toProto(message: _118.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _118.QueryDelegatorValidatorResponse): _118.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _118.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_118.QueryHistoricalInfoRequest>): _118.QueryHistoricalInfoRequest;
                fromAmino(object: _118.QueryHistoricalInfoRequestAmino): _118.QueryHistoricalInfoRequest;
                toAmino(message: _118.QueryHistoricalInfoRequest): _118.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _118.QueryHistoricalInfoRequestAminoMsg): _118.QueryHistoricalInfoRequest;
                toAminoMsg(message: _118.QueryHistoricalInfoRequest): _118.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _118.QueryHistoricalInfoRequestProtoMsg): _118.QueryHistoricalInfoRequest;
                toProto(message: _118.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _118.QueryHistoricalInfoRequest): _118.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _118.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_118.QueryHistoricalInfoResponse>): _118.QueryHistoricalInfoResponse;
                fromAmino(object: _118.QueryHistoricalInfoResponseAmino): _118.QueryHistoricalInfoResponse;
                toAmino(message: _118.QueryHistoricalInfoResponse): _118.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _118.QueryHistoricalInfoResponseAminoMsg): _118.QueryHistoricalInfoResponse;
                toAminoMsg(message: _118.QueryHistoricalInfoResponse): _118.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _118.QueryHistoricalInfoResponseProtoMsg): _118.QueryHistoricalInfoResponse;
                toProto(message: _118.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _118.QueryHistoricalInfoResponse): _118.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _118.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.QueryPoolRequest;
                fromPartial(_: Partial<_118.QueryPoolRequest>): _118.QueryPoolRequest;
                fromAmino(_: _118.QueryPoolRequestAmino): _118.QueryPoolRequest;
                toAmino(_: _118.QueryPoolRequest): _118.QueryPoolRequestAmino;
                fromAminoMsg(object: _118.QueryPoolRequestAminoMsg): _118.QueryPoolRequest;
                toAminoMsg(message: _118.QueryPoolRequest): _118.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _118.QueryPoolRequestProtoMsg): _118.QueryPoolRequest;
                toProto(message: _118.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _118.QueryPoolRequest): _118.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _118.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryPoolResponse;
                fromPartial(object: Partial<_118.QueryPoolResponse>): _118.QueryPoolResponse;
                fromAmino(object: _118.QueryPoolResponseAmino): _118.QueryPoolResponse;
                toAmino(message: _118.QueryPoolResponse): _118.QueryPoolResponseAmino;
                fromAminoMsg(object: _118.QueryPoolResponseAminoMsg): _118.QueryPoolResponse;
                toAminoMsg(message: _118.QueryPoolResponse): _118.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _118.QueryPoolResponseProtoMsg): _118.QueryPoolResponse;
                toProto(message: _118.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _118.QueryPoolResponse): _118.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _118.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.QueryParamsRequest;
                fromPartial(_: Partial<_118.QueryParamsRequest>): _118.QueryParamsRequest;
                fromAmino(_: _118.QueryParamsRequestAmino): _118.QueryParamsRequest;
                toAmino(_: _118.QueryParamsRequest): _118.QueryParamsRequestAmino;
                fromAminoMsg(object: _118.QueryParamsRequestAminoMsg): _118.QueryParamsRequest;
                toAminoMsg(message: _118.QueryParamsRequest): _118.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryParamsRequestProtoMsg): _118.QueryParamsRequest;
                toProto(message: _118.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryParamsRequest): _118.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _118.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryParamsResponse;
                fromPartial(object: Partial<_118.QueryParamsResponse>): _118.QueryParamsResponse;
                fromAmino(object: _118.QueryParamsResponseAmino): _118.QueryParamsResponse;
                toAmino(message: _118.QueryParamsResponse): _118.QueryParamsResponseAmino;
                fromAminoMsg(object: _118.QueryParamsResponseAminoMsg): _118.QueryParamsResponse;
                toAminoMsg(message: _118.QueryParamsResponse): _118.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryParamsResponseProtoMsg): _118.QueryParamsResponse;
                toProto(message: _118.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryParamsResponse): _118.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _117.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.LastValidatorPower;
                fromPartial(object: Partial<_117.LastValidatorPower>): _117.LastValidatorPower;
                fromAmino(object: _117.LastValidatorPowerAmino): _117.LastValidatorPower;
                toAmino(message: _117.LastValidatorPower): _117.LastValidatorPowerAmino;
                fromAminoMsg(object: _117.LastValidatorPowerAminoMsg): _117.LastValidatorPower;
                toAminoMsg(message: _117.LastValidatorPower): _117.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _117.LastValidatorPowerProtoMsg): _117.LastValidatorPower;
                toProto(message: _117.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _117.LastValidatorPower): _117.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _116.AuthorizationType;
            authorizationTypeToJSON(object: _116.AuthorizationType): string;
            AuthorizationType: typeof _116.AuthorizationType;
            AuthorizationTypeSDKType: typeof _116.AuthorizationType;
            AuthorizationTypeAmino: typeof _116.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _116.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.StakeAuthorization;
                fromPartial(object: Partial<_116.StakeAuthorization>): _116.StakeAuthorization;
                fromAmino(object: _116.StakeAuthorizationAmino): _116.StakeAuthorization;
                toAmino(message: _116.StakeAuthorization): _116.StakeAuthorizationAmino;
                fromAminoMsg(object: _116.StakeAuthorizationAminoMsg): _116.StakeAuthorization;
                toAminoMsg(message: _116.StakeAuthorization): _116.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _116.StakeAuthorizationProtoMsg): _116.StakeAuthorization;
                toProto(message: _116.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _116.StakeAuthorization): _116.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _116.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.StakeAuthorization_Validators;
                fromPartial(object: Partial<_116.StakeAuthorization_Validators>): _116.StakeAuthorization_Validators;
                fromAmino(object: _116.StakeAuthorization_ValidatorsAmino): _116.StakeAuthorization_Validators;
                toAmino(message: _116.StakeAuthorization_Validators): _116.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _116.StakeAuthorization_ValidatorsAminoMsg): _116.StakeAuthorization_Validators;
                toAminoMsg(message: _116.StakeAuthorization_Validators): _116.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _116.StakeAuthorization_ValidatorsProtoMsg): _116.StakeAuthorization_Validators;
                toProto(message: _116.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _116.StakeAuthorization_Validators): _116.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _121.SignMode;
                signModeToJSON(object: _121.SignMode): string;
                SignMode: typeof _121.SignMode;
                SignModeSDKType: typeof _121.SignMode;
                SignModeAmino: typeof _121.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _121.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.SignatureDescriptors;
                    fromPartial(object: Partial<_121.SignatureDescriptors>): _121.SignatureDescriptors;
                    fromAmino(object: _121.SignatureDescriptorsAmino): _121.SignatureDescriptors;
                    toAmino(message: _121.SignatureDescriptors): _121.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _121.SignatureDescriptorsAminoMsg): _121.SignatureDescriptors;
                    toAminoMsg(message: _121.SignatureDescriptors): _121.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _121.SignatureDescriptorsProtoMsg): _121.SignatureDescriptors;
                    toProto(message: _121.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _121.SignatureDescriptors): _121.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _121.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.SignatureDescriptor;
                    fromPartial(object: Partial<_121.SignatureDescriptor>): _121.SignatureDescriptor;
                    fromAmino(object: _121.SignatureDescriptorAmino): _121.SignatureDescriptor;
                    toAmino(message: _121.SignatureDescriptor): _121.SignatureDescriptorAmino;
                    fromAminoMsg(object: _121.SignatureDescriptorAminoMsg): _121.SignatureDescriptor;
                    toAminoMsg(message: _121.SignatureDescriptor): _121.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _121.SignatureDescriptorProtoMsg): _121.SignatureDescriptor;
                    toProto(message: _121.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _121.SignatureDescriptor): _121.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _121.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_121.SignatureDescriptor_Data>): _121.SignatureDescriptor_Data;
                    fromAmino(object: _121.SignatureDescriptor_DataAmino): _121.SignatureDescriptor_Data;
                    toAmino(message: _121.SignatureDescriptor_Data): _121.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _121.SignatureDescriptor_DataAminoMsg): _121.SignatureDescriptor_Data;
                    toAminoMsg(message: _121.SignatureDescriptor_Data): _121.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _121.SignatureDescriptor_DataProtoMsg): _121.SignatureDescriptor_Data;
                    toProto(message: _121.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _121.SignatureDescriptor_Data): _121.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _121.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_121.SignatureDescriptor_Data_Single>): _121.SignatureDescriptor_Data_Single;
                    fromAmino(object: _121.SignatureDescriptor_Data_SingleAmino): _121.SignatureDescriptor_Data_Single;
                    toAmino(message: _121.SignatureDescriptor_Data_Single): _121.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _121.SignatureDescriptor_Data_SingleAminoMsg): _121.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _121.SignatureDescriptor_Data_Single): _121.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _121.SignatureDescriptor_Data_SingleProtoMsg): _121.SignatureDescriptor_Data_Single;
                    toProto(message: _121.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _121.SignatureDescriptor_Data_Single): _121.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _121.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_121.SignatureDescriptor_Data_Multi>): _121.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _121.SignatureDescriptor_Data_MultiAmino): _121.SignatureDescriptor_Data_Multi;
                    toAmino(message: _121.SignatureDescriptor_Data_Multi): _121.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _121.SignatureDescriptor_Data_MultiAminoMsg): _121.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _121.SignatureDescriptor_Data_Multi): _121.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _121.SignatureDescriptor_Data_MultiProtoMsg): _121.SignatureDescriptor_Data_Multi;
                    toProto(message: _121.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _121.SignatureDescriptor_Data_Multi): _121.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _247.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _122.SimulateRequest): Promise<_122.SimulateResponse>;
                getTx(request: _122.GetTxRequest): Promise<_122.GetTxResponse>;
                broadcastTx(request: _122.BroadcastTxRequest): Promise<_122.BroadcastTxResponse>;
                getTxsEvent(request: _122.GetTxsEventRequest): Promise<_122.GetTxsEventResponse>;
                getBlockWithTxs(request: _122.GetBlockWithTxsRequest): Promise<_122.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _228.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _123.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Tx;
                fromPartial(object: Partial<_123.Tx>): _123.Tx;
                fromAmino(object: _123.TxAmino): _123.Tx;
                toAmino(message: _123.Tx): _123.TxAmino;
                fromAminoMsg(object: _123.TxAminoMsg): _123.Tx;
                toAminoMsg(message: _123.Tx): _123.TxAminoMsg;
                fromProtoMsg(message: _123.TxProtoMsg): _123.Tx;
                toProto(message: _123.Tx): Uint8Array;
                toProtoMsg(message: _123.Tx): _123.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _123.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.TxRaw;
                fromPartial(object: Partial<_123.TxRaw>): _123.TxRaw;
                fromAmino(object: _123.TxRawAmino): _123.TxRaw;
                toAmino(message: _123.TxRaw): _123.TxRawAmino;
                fromAminoMsg(object: _123.TxRawAminoMsg): _123.TxRaw;
                toAminoMsg(message: _123.TxRaw): _123.TxRawAminoMsg;
                fromProtoMsg(message: _123.TxRawProtoMsg): _123.TxRaw;
                toProto(message: _123.TxRaw): Uint8Array;
                toProtoMsg(message: _123.TxRaw): _123.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _123.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.SignDoc;
                fromPartial(object: Partial<_123.SignDoc>): _123.SignDoc;
                fromAmino(object: _123.SignDocAmino): _123.SignDoc;
                toAmino(message: _123.SignDoc): _123.SignDocAmino;
                fromAminoMsg(object: _123.SignDocAminoMsg): _123.SignDoc;
                toAminoMsg(message: _123.SignDoc): _123.SignDocAminoMsg;
                fromProtoMsg(message: _123.SignDocProtoMsg): _123.SignDoc;
                toProto(message: _123.SignDoc): Uint8Array;
                toProtoMsg(message: _123.SignDoc): _123.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _123.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.SignDocDirectAux;
                fromPartial(object: Partial<_123.SignDocDirectAux>): _123.SignDocDirectAux;
                fromAmino(object: _123.SignDocDirectAuxAmino): _123.SignDocDirectAux;
                toAmino(message: _123.SignDocDirectAux): _123.SignDocDirectAuxAmino;
                fromAminoMsg(object: _123.SignDocDirectAuxAminoMsg): _123.SignDocDirectAux;
                toAminoMsg(message: _123.SignDocDirectAux): _123.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _123.SignDocDirectAuxProtoMsg): _123.SignDocDirectAux;
                toProto(message: _123.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _123.SignDocDirectAux): _123.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _123.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.TxBody;
                fromPartial(object: Partial<_123.TxBody>): _123.TxBody;
                fromAmino(object: _123.TxBodyAmino): _123.TxBody;
                toAmino(message: _123.TxBody): _123.TxBodyAmino;
                fromAminoMsg(object: _123.TxBodyAminoMsg): _123.TxBody;
                toAminoMsg(message: _123.TxBody): _123.TxBodyAminoMsg;
                fromProtoMsg(message: _123.TxBodyProtoMsg): _123.TxBody;
                toProto(message: _123.TxBody): Uint8Array;
                toProtoMsg(message: _123.TxBody): _123.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _123.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.AuthInfo;
                fromPartial(object: Partial<_123.AuthInfo>): _123.AuthInfo;
                fromAmino(object: _123.AuthInfoAmino): _123.AuthInfo;
                toAmino(message: _123.AuthInfo): _123.AuthInfoAmino;
                fromAminoMsg(object: _123.AuthInfoAminoMsg): _123.AuthInfo;
                toAminoMsg(message: _123.AuthInfo): _123.AuthInfoAminoMsg;
                fromProtoMsg(message: _123.AuthInfoProtoMsg): _123.AuthInfo;
                toProto(message: _123.AuthInfo): Uint8Array;
                toProtoMsg(message: _123.AuthInfo): _123.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _123.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.SignerInfo;
                fromPartial(object: Partial<_123.SignerInfo>): _123.SignerInfo;
                fromAmino(object: _123.SignerInfoAmino): _123.SignerInfo;
                toAmino(message: _123.SignerInfo): _123.SignerInfoAmino;
                fromAminoMsg(object: _123.SignerInfoAminoMsg): _123.SignerInfo;
                toAminoMsg(message: _123.SignerInfo): _123.SignerInfoAminoMsg;
                fromProtoMsg(message: _123.SignerInfoProtoMsg): _123.SignerInfo;
                toProto(message: _123.SignerInfo): Uint8Array;
                toProtoMsg(message: _123.SignerInfo): _123.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _123.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.ModeInfo;
                fromPartial(object: Partial<_123.ModeInfo>): _123.ModeInfo;
                fromAmino(object: _123.ModeInfoAmino): _123.ModeInfo;
                toAmino(message: _123.ModeInfo): _123.ModeInfoAmino;
                fromAminoMsg(object: _123.ModeInfoAminoMsg): _123.ModeInfo;
                toAminoMsg(message: _123.ModeInfo): _123.ModeInfoAminoMsg;
                fromProtoMsg(message: _123.ModeInfoProtoMsg): _123.ModeInfo;
                toProto(message: _123.ModeInfo): Uint8Array;
                toProtoMsg(message: _123.ModeInfo): _123.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _123.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.ModeInfo_Single;
                fromPartial(object: Partial<_123.ModeInfo_Single>): _123.ModeInfo_Single;
                fromAmino(object: _123.ModeInfo_SingleAmino): _123.ModeInfo_Single;
                toAmino(message: _123.ModeInfo_Single): _123.ModeInfo_SingleAmino;
                fromAminoMsg(object: _123.ModeInfo_SingleAminoMsg): _123.ModeInfo_Single;
                toAminoMsg(message: _123.ModeInfo_Single): _123.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _123.ModeInfo_SingleProtoMsg): _123.ModeInfo_Single;
                toProto(message: _123.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _123.ModeInfo_Single): _123.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _123.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.ModeInfo_Multi;
                fromPartial(object: Partial<_123.ModeInfo_Multi>): _123.ModeInfo_Multi;
                fromAmino(object: _123.ModeInfo_MultiAmino): _123.ModeInfo_Multi;
                toAmino(message: _123.ModeInfo_Multi): _123.ModeInfo_MultiAmino;
                fromAminoMsg(object: _123.ModeInfo_MultiAminoMsg): _123.ModeInfo_Multi;
                toAminoMsg(message: _123.ModeInfo_Multi): _123.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _123.ModeInfo_MultiProtoMsg): _123.ModeInfo_Multi;
                toProto(message: _123.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _123.ModeInfo_Multi): _123.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _123.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Fee;
                fromPartial(object: Partial<_123.Fee>): _123.Fee;
                fromAmino(object: _123.FeeAmino): _123.Fee;
                toAmino(message: _123.Fee): _123.FeeAmino;
                fromAminoMsg(object: _123.FeeAminoMsg): _123.Fee;
                toAminoMsg(message: _123.Fee): _123.FeeAminoMsg;
                fromProtoMsg(message: _123.FeeProtoMsg): _123.Fee;
                toProto(message: _123.Fee): Uint8Array;
                toProtoMsg(message: _123.Fee): _123.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _123.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Tip;
                fromPartial(object: Partial<_123.Tip>): _123.Tip;
                fromAmino(object: _123.TipAmino): _123.Tip;
                toAmino(message: _123.Tip): _123.TipAmino;
                fromAminoMsg(object: _123.TipAminoMsg): _123.Tip;
                toAminoMsg(message: _123.Tip): _123.TipAminoMsg;
                fromProtoMsg(message: _123.TipProtoMsg): _123.Tip;
                toProto(message: _123.Tip): Uint8Array;
                toProtoMsg(message: _123.Tip): _123.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _123.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.AuxSignerData;
                fromPartial(object: Partial<_123.AuxSignerData>): _123.AuxSignerData;
                fromAmino(object: _123.AuxSignerDataAmino): _123.AuxSignerData;
                toAmino(message: _123.AuxSignerData): _123.AuxSignerDataAmino;
                fromAminoMsg(object: _123.AuxSignerDataAminoMsg): _123.AuxSignerData;
                toAminoMsg(message: _123.AuxSignerData): _123.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _123.AuxSignerDataProtoMsg): _123.AuxSignerData;
                toProto(message: _123.AuxSignerData): Uint8Array;
                toProtoMsg(message: _123.AuxSignerData): _123.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _122.OrderBy;
            orderByToJSON(object: _122.OrderBy): string;
            broadcastModeFromJSON(object: any): _122.BroadcastMode;
            broadcastModeToJSON(object: _122.BroadcastMode): string;
            OrderBy: typeof _122.OrderBy;
            OrderBySDKType: typeof _122.OrderBy;
            OrderByAmino: typeof _122.OrderBy;
            BroadcastMode: typeof _122.BroadcastMode;
            BroadcastModeSDKType: typeof _122.BroadcastMode;
            BroadcastModeAmino: typeof _122.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _122.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.GetTxsEventRequest;
                fromPartial(object: Partial<_122.GetTxsEventRequest>): _122.GetTxsEventRequest;
                fromAmino(object: _122.GetTxsEventRequestAmino): _122.GetTxsEventRequest;
                toAmino(message: _122.GetTxsEventRequest): _122.GetTxsEventRequestAmino;
                fromAminoMsg(object: _122.GetTxsEventRequestAminoMsg): _122.GetTxsEventRequest;
                toAminoMsg(message: _122.GetTxsEventRequest): _122.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _122.GetTxsEventRequestProtoMsg): _122.GetTxsEventRequest;
                toProto(message: _122.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _122.GetTxsEventRequest): _122.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _122.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.GetTxsEventResponse;
                fromPartial(object: Partial<_122.GetTxsEventResponse>): _122.GetTxsEventResponse;
                fromAmino(object: _122.GetTxsEventResponseAmino): _122.GetTxsEventResponse;
                toAmino(message: _122.GetTxsEventResponse): _122.GetTxsEventResponseAmino;
                fromAminoMsg(object: _122.GetTxsEventResponseAminoMsg): _122.GetTxsEventResponse;
                toAminoMsg(message: _122.GetTxsEventResponse): _122.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _122.GetTxsEventResponseProtoMsg): _122.GetTxsEventResponse;
                toProto(message: _122.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _122.GetTxsEventResponse): _122.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _122.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.BroadcastTxRequest;
                fromPartial(object: Partial<_122.BroadcastTxRequest>): _122.BroadcastTxRequest;
                fromAmino(object: _122.BroadcastTxRequestAmino): _122.BroadcastTxRequest;
                toAmino(message: _122.BroadcastTxRequest): _122.BroadcastTxRequestAmino;
                fromAminoMsg(object: _122.BroadcastTxRequestAminoMsg): _122.BroadcastTxRequest;
                toAminoMsg(message: _122.BroadcastTxRequest): _122.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _122.BroadcastTxRequestProtoMsg): _122.BroadcastTxRequest;
                toProto(message: _122.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _122.BroadcastTxRequest): _122.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _122.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.BroadcastTxResponse;
                fromPartial(object: Partial<_122.BroadcastTxResponse>): _122.BroadcastTxResponse;
                fromAmino(object: _122.BroadcastTxResponseAmino): _122.BroadcastTxResponse;
                toAmino(message: _122.BroadcastTxResponse): _122.BroadcastTxResponseAmino;
                fromAminoMsg(object: _122.BroadcastTxResponseAminoMsg): _122.BroadcastTxResponse;
                toAminoMsg(message: _122.BroadcastTxResponse): _122.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _122.BroadcastTxResponseProtoMsg): _122.BroadcastTxResponse;
                toProto(message: _122.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _122.BroadcastTxResponse): _122.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _122.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.SimulateRequest;
                fromPartial(object: Partial<_122.SimulateRequest>): _122.SimulateRequest;
                fromAmino(object: _122.SimulateRequestAmino): _122.SimulateRequest;
                toAmino(message: _122.SimulateRequest): _122.SimulateRequestAmino;
                fromAminoMsg(object: _122.SimulateRequestAminoMsg): _122.SimulateRequest;
                toAminoMsg(message: _122.SimulateRequest): _122.SimulateRequestAminoMsg;
                fromProtoMsg(message: _122.SimulateRequestProtoMsg): _122.SimulateRequest;
                toProto(message: _122.SimulateRequest): Uint8Array;
                toProtoMsg(message: _122.SimulateRequest): _122.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _122.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.SimulateResponse;
                fromPartial(object: Partial<_122.SimulateResponse>): _122.SimulateResponse;
                fromAmino(object: _122.SimulateResponseAmino): _122.SimulateResponse;
                toAmino(message: _122.SimulateResponse): _122.SimulateResponseAmino;
                fromAminoMsg(object: _122.SimulateResponseAminoMsg): _122.SimulateResponse;
                toAminoMsg(message: _122.SimulateResponse): _122.SimulateResponseAminoMsg;
                fromProtoMsg(message: _122.SimulateResponseProtoMsg): _122.SimulateResponse;
                toProto(message: _122.SimulateResponse): Uint8Array;
                toProtoMsg(message: _122.SimulateResponse): _122.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _122.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.GetTxRequest;
                fromPartial(object: Partial<_122.GetTxRequest>): _122.GetTxRequest;
                fromAmino(object: _122.GetTxRequestAmino): _122.GetTxRequest;
                toAmino(message: _122.GetTxRequest): _122.GetTxRequestAmino;
                fromAminoMsg(object: _122.GetTxRequestAminoMsg): _122.GetTxRequest;
                toAminoMsg(message: _122.GetTxRequest): _122.GetTxRequestAminoMsg;
                fromProtoMsg(message: _122.GetTxRequestProtoMsg): _122.GetTxRequest;
                toProto(message: _122.GetTxRequest): Uint8Array;
                toProtoMsg(message: _122.GetTxRequest): _122.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _122.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.GetTxResponse;
                fromPartial(object: Partial<_122.GetTxResponse>): _122.GetTxResponse;
                fromAmino(object: _122.GetTxResponseAmino): _122.GetTxResponse;
                toAmino(message: _122.GetTxResponse): _122.GetTxResponseAmino;
                fromAminoMsg(object: _122.GetTxResponseAminoMsg): _122.GetTxResponse;
                toAminoMsg(message: _122.GetTxResponse): _122.GetTxResponseAminoMsg;
                fromProtoMsg(message: _122.GetTxResponseProtoMsg): _122.GetTxResponse;
                toProto(message: _122.GetTxResponse): Uint8Array;
                toProtoMsg(message: _122.GetTxResponse): _122.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _122.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_122.GetBlockWithTxsRequest>): _122.GetBlockWithTxsRequest;
                fromAmino(object: _122.GetBlockWithTxsRequestAmino): _122.GetBlockWithTxsRequest;
                toAmino(message: _122.GetBlockWithTxsRequest): _122.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _122.GetBlockWithTxsRequestAminoMsg): _122.GetBlockWithTxsRequest;
                toAminoMsg(message: _122.GetBlockWithTxsRequest): _122.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _122.GetBlockWithTxsRequestProtoMsg): _122.GetBlockWithTxsRequest;
                toProto(message: _122.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _122.GetBlockWithTxsRequest): _122.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _122.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_122.GetBlockWithTxsResponse>): _122.GetBlockWithTxsResponse;
                fromAmino(object: _122.GetBlockWithTxsResponseAmino): _122.GetBlockWithTxsResponse;
                toAmino(message: _122.GetBlockWithTxsResponse): _122.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _122.GetBlockWithTxsResponseAminoMsg): _122.GetBlockWithTxsResponse;
                toAminoMsg(message: _122.GetBlockWithTxsResponse): _122.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _122.GetBlockWithTxsResponseProtoMsg): _122.GetBlockWithTxsResponse;
                toProto(message: _122.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _122.GetBlockWithTxsResponse): _122.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _261.MsgClientImpl;
            QueryClientImpl: typeof _248.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _124.QueryCurrentPlanRequest): Promise<_124.QueryCurrentPlanResponse>;
                appliedPlan(request: _124.QueryAppliedPlanRequest): Promise<_124.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _124.QueryUpgradedConsensusStateRequest): Promise<_124.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _124.QueryModuleVersionsRequest): Promise<_124.QueryModuleVersionsResponse>;
                authority(request?: _124.QueryAuthorityRequest): Promise<_124.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _229.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _125.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _125.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _125.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _125.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _125.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _125.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _125.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _125.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _125.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _125.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _125.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _125.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _125.MsgSoftwareUpgrade) => _125.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _125.MsgSoftwareUpgradeAmino) => _125.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _125.MsgCancelUpgrade) => _125.MsgCancelUpgradeAmino;
                    fromAmino: (object: _125.MsgCancelUpgradeAmino) => _125.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _126.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Plan;
                fromPartial(object: Partial<_126.Plan>): _126.Plan;
                fromAmino(object: _126.PlanAmino): _126.Plan;
                toAmino(message: _126.Plan): _126.PlanAmino;
                fromAminoMsg(object: _126.PlanAminoMsg): _126.Plan;
                toAminoMsg(message: _126.Plan): _126.PlanAminoMsg;
                fromProtoMsg(message: _126.PlanProtoMsg): _126.Plan;
                toProto(message: _126.Plan): Uint8Array;
                toProtoMsg(message: _126.Plan): _126.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _126.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_126.SoftwareUpgradeProposal>): _126.SoftwareUpgradeProposal;
                fromAmino(object: _126.SoftwareUpgradeProposalAmino): _126.SoftwareUpgradeProposal;
                toAmino(message: _126.SoftwareUpgradeProposal): _126.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _126.SoftwareUpgradeProposalAminoMsg): _126.SoftwareUpgradeProposal;
                toAminoMsg(message: _126.SoftwareUpgradeProposal): _126.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _126.SoftwareUpgradeProposalProtoMsg): _126.SoftwareUpgradeProposal;
                toProto(message: _126.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _126.SoftwareUpgradeProposal): _126.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _126.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_126.CancelSoftwareUpgradeProposal>): _126.CancelSoftwareUpgradeProposal;
                fromAmino(object: _126.CancelSoftwareUpgradeProposalAmino): _126.CancelSoftwareUpgradeProposal;
                toAmino(message: _126.CancelSoftwareUpgradeProposal): _126.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _126.CancelSoftwareUpgradeProposalAminoMsg): _126.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _126.CancelSoftwareUpgradeProposal): _126.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _126.CancelSoftwareUpgradeProposalProtoMsg): _126.CancelSoftwareUpgradeProposal;
                toProto(message: _126.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _126.CancelSoftwareUpgradeProposal): _126.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _126.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.ModuleVersion;
                fromPartial(object: Partial<_126.ModuleVersion>): _126.ModuleVersion;
                fromAmino(object: _126.ModuleVersionAmino): _126.ModuleVersion;
                toAmino(message: _126.ModuleVersion): _126.ModuleVersionAmino;
                fromAminoMsg(object: _126.ModuleVersionAminoMsg): _126.ModuleVersion;
                toAminoMsg(message: _126.ModuleVersion): _126.ModuleVersionAminoMsg;
                fromProtoMsg(message: _126.ModuleVersionProtoMsg): _126.ModuleVersion;
                toProto(message: _126.ModuleVersion): Uint8Array;
                toProtoMsg(message: _126.ModuleVersion): _126.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _125.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_125.MsgSoftwareUpgrade>): _125.MsgSoftwareUpgrade;
                fromAmino(object: _125.MsgSoftwareUpgradeAmino): _125.MsgSoftwareUpgrade;
                toAmino(message: _125.MsgSoftwareUpgrade): _125.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _125.MsgSoftwareUpgradeAminoMsg): _125.MsgSoftwareUpgrade;
                toAminoMsg(message: _125.MsgSoftwareUpgrade): _125.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _125.MsgSoftwareUpgradeProtoMsg): _125.MsgSoftwareUpgrade;
                toProto(message: _125.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _125.MsgSoftwareUpgrade): _125.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _125.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_125.MsgSoftwareUpgradeResponse>): _125.MsgSoftwareUpgradeResponse;
                fromAmino(_: _125.MsgSoftwareUpgradeResponseAmino): _125.MsgSoftwareUpgradeResponse;
                toAmino(_: _125.MsgSoftwareUpgradeResponse): _125.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _125.MsgSoftwareUpgradeResponseAminoMsg): _125.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _125.MsgSoftwareUpgradeResponse): _125.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _125.MsgSoftwareUpgradeResponseProtoMsg): _125.MsgSoftwareUpgradeResponse;
                toProto(message: _125.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _125.MsgSoftwareUpgradeResponse): _125.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _125.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgCancelUpgrade;
                fromPartial(object: Partial<_125.MsgCancelUpgrade>): _125.MsgCancelUpgrade;
                fromAmino(object: _125.MsgCancelUpgradeAmino): _125.MsgCancelUpgrade;
                toAmino(message: _125.MsgCancelUpgrade): _125.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _125.MsgCancelUpgradeAminoMsg): _125.MsgCancelUpgrade;
                toAminoMsg(message: _125.MsgCancelUpgrade): _125.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _125.MsgCancelUpgradeProtoMsg): _125.MsgCancelUpgrade;
                toProto(message: _125.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _125.MsgCancelUpgrade): _125.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _125.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_125.MsgCancelUpgradeResponse>): _125.MsgCancelUpgradeResponse;
                fromAmino(_: _125.MsgCancelUpgradeResponseAmino): _125.MsgCancelUpgradeResponse;
                toAmino(_: _125.MsgCancelUpgradeResponse): _125.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _125.MsgCancelUpgradeResponseAminoMsg): _125.MsgCancelUpgradeResponse;
                toAminoMsg(message: _125.MsgCancelUpgradeResponse): _125.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _125.MsgCancelUpgradeResponseProtoMsg): _125.MsgCancelUpgradeResponse;
                toProto(message: _125.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _125.MsgCancelUpgradeResponse): _125.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _124.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_124.QueryCurrentPlanRequest>): _124.QueryCurrentPlanRequest;
                fromAmino(_: _124.QueryCurrentPlanRequestAmino): _124.QueryCurrentPlanRequest;
                toAmino(_: _124.QueryCurrentPlanRequest): _124.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _124.QueryCurrentPlanRequestAminoMsg): _124.QueryCurrentPlanRequest;
                toAminoMsg(message: _124.QueryCurrentPlanRequest): _124.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _124.QueryCurrentPlanRequestProtoMsg): _124.QueryCurrentPlanRequest;
                toProto(message: _124.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _124.QueryCurrentPlanRequest): _124.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _124.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_124.QueryCurrentPlanResponse>): _124.QueryCurrentPlanResponse;
                fromAmino(object: _124.QueryCurrentPlanResponseAmino): _124.QueryCurrentPlanResponse;
                toAmino(message: _124.QueryCurrentPlanResponse): _124.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _124.QueryCurrentPlanResponseAminoMsg): _124.QueryCurrentPlanResponse;
                toAminoMsg(message: _124.QueryCurrentPlanResponse): _124.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _124.QueryCurrentPlanResponseProtoMsg): _124.QueryCurrentPlanResponse;
                toProto(message: _124.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _124.QueryCurrentPlanResponse): _124.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _124.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_124.QueryAppliedPlanRequest>): _124.QueryAppliedPlanRequest;
                fromAmino(object: _124.QueryAppliedPlanRequestAmino): _124.QueryAppliedPlanRequest;
                toAmino(message: _124.QueryAppliedPlanRequest): _124.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _124.QueryAppliedPlanRequestAminoMsg): _124.QueryAppliedPlanRequest;
                toAminoMsg(message: _124.QueryAppliedPlanRequest): _124.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _124.QueryAppliedPlanRequestProtoMsg): _124.QueryAppliedPlanRequest;
                toProto(message: _124.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _124.QueryAppliedPlanRequest): _124.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _124.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_124.QueryAppliedPlanResponse>): _124.QueryAppliedPlanResponse;
                fromAmino(object: _124.QueryAppliedPlanResponseAmino): _124.QueryAppliedPlanResponse;
                toAmino(message: _124.QueryAppliedPlanResponse): _124.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _124.QueryAppliedPlanResponseAminoMsg): _124.QueryAppliedPlanResponse;
                toAminoMsg(message: _124.QueryAppliedPlanResponse): _124.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _124.QueryAppliedPlanResponseProtoMsg): _124.QueryAppliedPlanResponse;
                toProto(message: _124.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _124.QueryAppliedPlanResponse): _124.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _124.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_124.QueryUpgradedConsensusStateRequest>): _124.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _124.QueryUpgradedConsensusStateRequestAmino): _124.QueryUpgradedConsensusStateRequest;
                toAmino(message: _124.QueryUpgradedConsensusStateRequest): _124.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _124.QueryUpgradedConsensusStateRequestAminoMsg): _124.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _124.QueryUpgradedConsensusStateRequest): _124.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _124.QueryUpgradedConsensusStateRequestProtoMsg): _124.QueryUpgradedConsensusStateRequest;
                toProto(message: _124.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _124.QueryUpgradedConsensusStateRequest): _124.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _124.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_124.QueryUpgradedConsensusStateResponse>): _124.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _124.QueryUpgradedConsensusStateResponseAmino): _124.QueryUpgradedConsensusStateResponse;
                toAmino(message: _124.QueryUpgradedConsensusStateResponse): _124.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _124.QueryUpgradedConsensusStateResponseAminoMsg): _124.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _124.QueryUpgradedConsensusStateResponse): _124.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _124.QueryUpgradedConsensusStateResponseProtoMsg): _124.QueryUpgradedConsensusStateResponse;
                toProto(message: _124.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _124.QueryUpgradedConsensusStateResponse): _124.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _124.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_124.QueryModuleVersionsRequest>): _124.QueryModuleVersionsRequest;
                fromAmino(object: _124.QueryModuleVersionsRequestAmino): _124.QueryModuleVersionsRequest;
                toAmino(message: _124.QueryModuleVersionsRequest): _124.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _124.QueryModuleVersionsRequestAminoMsg): _124.QueryModuleVersionsRequest;
                toAminoMsg(message: _124.QueryModuleVersionsRequest): _124.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _124.QueryModuleVersionsRequestProtoMsg): _124.QueryModuleVersionsRequest;
                toProto(message: _124.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _124.QueryModuleVersionsRequest): _124.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _124.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_124.QueryModuleVersionsResponse>): _124.QueryModuleVersionsResponse;
                fromAmino(object: _124.QueryModuleVersionsResponseAmino): _124.QueryModuleVersionsResponse;
                toAmino(message: _124.QueryModuleVersionsResponse): _124.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _124.QueryModuleVersionsResponseAminoMsg): _124.QueryModuleVersionsResponse;
                toAminoMsg(message: _124.QueryModuleVersionsResponse): _124.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _124.QueryModuleVersionsResponseProtoMsg): _124.QueryModuleVersionsResponse;
                toProto(message: _124.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _124.QueryModuleVersionsResponse): _124.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _124.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.QueryAuthorityRequest;
                fromPartial(_: Partial<_124.QueryAuthorityRequest>): _124.QueryAuthorityRequest;
                fromAmino(_: _124.QueryAuthorityRequestAmino): _124.QueryAuthorityRequest;
                toAmino(_: _124.QueryAuthorityRequest): _124.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _124.QueryAuthorityRequestAminoMsg): _124.QueryAuthorityRequest;
                toAminoMsg(message: _124.QueryAuthorityRequest): _124.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _124.QueryAuthorityRequestProtoMsg): _124.QueryAuthorityRequest;
                toProto(message: _124.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _124.QueryAuthorityRequest): _124.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _124.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryAuthorityResponse;
                fromPartial(object: Partial<_124.QueryAuthorityResponse>): _124.QueryAuthorityResponse;
                fromAmino(object: _124.QueryAuthorityResponseAmino): _124.QueryAuthorityResponse;
                toAmino(message: _124.QueryAuthorityResponse): _124.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _124.QueryAuthorityResponseAminoMsg): _124.QueryAuthorityResponse;
                toAminoMsg(message: _124.QueryAuthorityResponse): _124.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _124.QueryAuthorityResponseProtoMsg): _124.QueryAuthorityResponse;
                toProto(message: _124.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _124.QueryAuthorityResponse): _124.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _262.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _127.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _127.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _127.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _127.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _127.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _127.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _127.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _127.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _127.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _127.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _127.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _127.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _127.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _127.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _127.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _127.MsgCreateVestingAccount) => _127.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _127.MsgCreateVestingAccountAmino) => _127.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _127.MsgCreatePermanentLockedAccount) => _127.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _127.MsgCreatePermanentLockedAccountAmino) => _127.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _127.MsgCreatePeriodicVestingAccount) => _127.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _127.MsgCreatePeriodicVestingAccountAmino) => _127.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _128.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.BaseVestingAccount;
                fromPartial(object: Partial<_128.BaseVestingAccount>): _128.BaseVestingAccount;
                fromAmino(object: _128.BaseVestingAccountAmino): _128.BaseVestingAccount;
                toAmino(message: _128.BaseVestingAccount): _128.BaseVestingAccountAmino;
                fromAminoMsg(object: _128.BaseVestingAccountAminoMsg): _128.BaseVestingAccount;
                toAminoMsg(message: _128.BaseVestingAccount): _128.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _128.BaseVestingAccountProtoMsg): _128.BaseVestingAccount;
                toProto(message: _128.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _128.BaseVestingAccount): _128.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _128.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.ContinuousVestingAccount;
                fromPartial(object: Partial<_128.ContinuousVestingAccount>): _128.ContinuousVestingAccount;
                fromAmino(object: _128.ContinuousVestingAccountAmino): _128.ContinuousVestingAccount;
                toAmino(message: _128.ContinuousVestingAccount): _128.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _128.ContinuousVestingAccountAminoMsg): _128.ContinuousVestingAccount;
                toAminoMsg(message: _128.ContinuousVestingAccount): _128.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _128.ContinuousVestingAccountProtoMsg): _128.ContinuousVestingAccount;
                toProto(message: _128.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _128.ContinuousVestingAccount): _128.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _128.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.DelayedVestingAccount;
                fromPartial(object: Partial<_128.DelayedVestingAccount>): _128.DelayedVestingAccount;
                fromAmino(object: _128.DelayedVestingAccountAmino): _128.DelayedVestingAccount;
                toAmino(message: _128.DelayedVestingAccount): _128.DelayedVestingAccountAmino;
                fromAminoMsg(object: _128.DelayedVestingAccountAminoMsg): _128.DelayedVestingAccount;
                toAminoMsg(message: _128.DelayedVestingAccount): _128.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _128.DelayedVestingAccountProtoMsg): _128.DelayedVestingAccount;
                toProto(message: _128.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _128.DelayedVestingAccount): _128.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _128.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Period;
                fromPartial(object: Partial<_128.Period>): _128.Period;
                fromAmino(object: _128.PeriodAmino): _128.Period;
                toAmino(message: _128.Period): _128.PeriodAmino;
                fromAminoMsg(object: _128.PeriodAminoMsg): _128.Period;
                toAminoMsg(message: _128.Period): _128.PeriodAminoMsg;
                fromProtoMsg(message: _128.PeriodProtoMsg): _128.Period;
                toProto(message: _128.Period): Uint8Array;
                toProtoMsg(message: _128.Period): _128.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _128.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.PeriodicVestingAccount;
                fromPartial(object: Partial<_128.PeriodicVestingAccount>): _128.PeriodicVestingAccount;
                fromAmino(object: _128.PeriodicVestingAccountAmino): _128.PeriodicVestingAccount;
                toAmino(message: _128.PeriodicVestingAccount): _128.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _128.PeriodicVestingAccountAminoMsg): _128.PeriodicVestingAccount;
                toAminoMsg(message: _128.PeriodicVestingAccount): _128.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _128.PeriodicVestingAccountProtoMsg): _128.PeriodicVestingAccount;
                toProto(message: _128.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _128.PeriodicVestingAccount): _128.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _128.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.PermanentLockedAccount;
                fromPartial(object: Partial<_128.PermanentLockedAccount>): _128.PermanentLockedAccount;
                fromAmino(object: _128.PermanentLockedAccountAmino): _128.PermanentLockedAccount;
                toAmino(message: _128.PermanentLockedAccount): _128.PermanentLockedAccountAmino;
                fromAminoMsg(object: _128.PermanentLockedAccountAminoMsg): _128.PermanentLockedAccount;
                toAminoMsg(message: _128.PermanentLockedAccount): _128.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _128.PermanentLockedAccountProtoMsg): _128.PermanentLockedAccount;
                toProto(message: _128.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _128.PermanentLockedAccount): _128.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _127.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgCreateVestingAccount;
                fromPartial(object: Partial<_127.MsgCreateVestingAccount>): _127.MsgCreateVestingAccount;
                fromAmino(object: _127.MsgCreateVestingAccountAmino): _127.MsgCreateVestingAccount;
                toAmino(message: _127.MsgCreateVestingAccount): _127.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _127.MsgCreateVestingAccountAminoMsg): _127.MsgCreateVestingAccount;
                toAminoMsg(message: _127.MsgCreateVestingAccount): _127.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _127.MsgCreateVestingAccountProtoMsg): _127.MsgCreateVestingAccount;
                toProto(message: _127.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _127.MsgCreateVestingAccount): _127.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _127.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_127.MsgCreateVestingAccountResponse>): _127.MsgCreateVestingAccountResponse;
                fromAmino(_: _127.MsgCreateVestingAccountResponseAmino): _127.MsgCreateVestingAccountResponse;
                toAmino(_: _127.MsgCreateVestingAccountResponse): _127.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _127.MsgCreateVestingAccountResponseAminoMsg): _127.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _127.MsgCreateVestingAccountResponse): _127.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _127.MsgCreateVestingAccountResponseProtoMsg): _127.MsgCreateVestingAccountResponse;
                toProto(message: _127.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _127.MsgCreateVestingAccountResponse): _127.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _127.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_127.MsgCreatePermanentLockedAccount>): _127.MsgCreatePermanentLockedAccount;
                fromAmino(object: _127.MsgCreatePermanentLockedAccountAmino): _127.MsgCreatePermanentLockedAccount;
                toAmino(message: _127.MsgCreatePermanentLockedAccount): _127.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _127.MsgCreatePermanentLockedAccountAminoMsg): _127.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _127.MsgCreatePermanentLockedAccount): _127.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _127.MsgCreatePermanentLockedAccountProtoMsg): _127.MsgCreatePermanentLockedAccount;
                toProto(message: _127.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _127.MsgCreatePermanentLockedAccount): _127.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _127.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_127.MsgCreatePermanentLockedAccountResponse>): _127.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _127.MsgCreatePermanentLockedAccountResponseAmino): _127.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _127.MsgCreatePermanentLockedAccountResponse): _127.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _127.MsgCreatePermanentLockedAccountResponseAminoMsg): _127.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _127.MsgCreatePermanentLockedAccountResponse): _127.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _127.MsgCreatePermanentLockedAccountResponseProtoMsg): _127.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _127.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _127.MsgCreatePermanentLockedAccountResponse): _127.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _127.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_127.MsgCreatePeriodicVestingAccount>): _127.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _127.MsgCreatePeriodicVestingAccountAmino): _127.MsgCreatePeriodicVestingAccount;
                toAmino(message: _127.MsgCreatePeriodicVestingAccount): _127.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _127.MsgCreatePeriodicVestingAccountAminoMsg): _127.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _127.MsgCreatePeriodicVestingAccount): _127.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _127.MsgCreatePeriodicVestingAccountProtoMsg): _127.MsgCreatePeriodicVestingAccount;
                toProto(message: _127.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _127.MsgCreatePeriodicVestingAccount): _127.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _127.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_127.MsgCreatePeriodicVestingAccountResponse>): _127.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _127.MsgCreatePeriodicVestingAccountResponseAmino): _127.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _127.MsgCreatePeriodicVestingAccountResponse): _127.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _127.MsgCreatePeriodicVestingAccountResponseAminoMsg): _127.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _127.MsgCreatePeriodicVestingAccountResponse): _127.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _127.MsgCreatePeriodicVestingAccountResponseProtoMsg): _127.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _127.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _127.MsgCreatePeriodicVestingAccountResponse): _127.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _249.MsgClientImpl;
                };
                bank: {
                    v1beta1: _250.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _251.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _252.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _253.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _254.MsgClientImpl;
                };
                gov: {
                    v1: _255.MsgClientImpl;
                    v1beta1: _256.MsgClientImpl;
                };
                group: {
                    v1: _257.MsgClientImpl;
                };
                nft: {
                    v1beta1: _258.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _259.MsgClientImpl;
                };
                staking: {
                    v1beta1: _260.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _261.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _262.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _36.QueryConfigRequest): Promise<_36.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _39.QueryAccountsRequest): Promise<_39.QueryAccountsResponse>;
                        account(request: _39.QueryAccountRequest): Promise<_39.QueryAccountResponse>;
                        accountAddressByID(request: _39.QueryAccountAddressByIDRequest): Promise<_39.QueryAccountAddressByIDResponse>;
                        params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                        moduleAccounts(request?: _39.QueryModuleAccountsRequest): Promise<_39.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _39.QueryModuleAccountByNameRequest): Promise<_39.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _39.Bech32PrefixRequest): Promise<_39.Bech32PrefixResponse>;
                        addressBytesToString(request: _39.AddressBytesToStringRequest): Promise<_39.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _39.AddressStringToBytesRequest): Promise<_39.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _43.QueryGrantsRequest): Promise<_43.QueryGrantsResponse>;
                        granterGrants(request: _43.QueryGranterGrantsRequest): Promise<_43.QueryGranterGrantsResponse>;
                        granteeGrants(request: _43.QueryGranteeGrantsRequest): Promise<_43.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _48.QueryBalanceRequest): Promise<_48.QueryBalanceResponse>;
                        allBalances(request: _48.QueryAllBalancesRequest): Promise<_48.QueryAllBalancesResponse>;
                        spendableBalances(request: _48.QuerySpendableBalancesRequest): Promise<_48.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _48.QueryTotalSupplyRequest): Promise<_48.QueryTotalSupplyResponse>;
                        supplyOf(request: _48.QuerySupplyOfRequest): Promise<_48.QuerySupplyOfResponse>;
                        params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        denomMetadata(request: _48.QueryDenomMetadataRequest): Promise<_48.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _48.QueryDenomsMetadataRequest): Promise<_48.QueryDenomsMetadataResponse>;
                        denomOwners(request: _48.QueryDenomOwnersRequest): Promise<_48.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _52.ConfigRequest): Promise<_52.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _59.GetNodeInfoRequest): Promise<_59.GetNodeInfoResponse>;
                            getSyncing(request?: _59.GetSyncingRequest): Promise<_59.GetSyncingResponse>;
                            getLatestBlock(request?: _59.GetLatestBlockRequest): Promise<_59.GetLatestBlockResponse>;
                            getBlockByHeight(request: _59.GetBlockByHeightRequest): Promise<_59.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _59.GetLatestValidatorSetRequest): Promise<_59.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _59.GetValidatorSetByHeightRequest): Promise<_59.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _59.ABCIQueryRequest): Promise<_59.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _74.QueryValidatorOutstandingRewardsRequest): Promise<_74.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _74.QueryValidatorCommissionRequest): Promise<_74.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _74.QueryValidatorSlashesRequest): Promise<_74.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _74.QueryDelegationRewardsRequest): Promise<_74.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _74.QueryDelegationTotalRewardsRequest): Promise<_74.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _74.QueryDelegatorValidatorsRequest): Promise<_74.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _74.QueryDelegatorWithdrawAddressRequest): Promise<_74.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _74.QueryCommunityPoolRequest): Promise<_74.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _78.QueryEvidenceRequest): Promise<_78.QueryEvidenceResponse>;
                        allEvidence(request?: _78.QueryAllEvidenceRequest): Promise<_78.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _82.QueryAllowanceRequest): Promise<_82.QueryAllowanceResponse>;
                        allowances(request: _82.QueryAllowancesRequest): Promise<_82.QueryAllowancesResponse>;
                        allowancesByGranter(request: _82.QueryAllowancesByGranterRequest): Promise<_82.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _87.QueryProposalRequest): Promise<_87.QueryProposalResponse>;
                        proposals(request: _87.QueryProposalsRequest): Promise<_87.QueryProposalsResponse>;
                        vote(request: _87.QueryVoteRequest): Promise<_87.QueryVoteResponse>;
                        votes(request: _87.QueryVotesRequest): Promise<_87.QueryVotesResponse>;
                        params(request: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        deposit(request: _87.QueryDepositRequest): Promise<_87.QueryDepositResponse>;
                        deposits(request: _87.QueryDepositsRequest): Promise<_87.QueryDepositsResponse>;
                        tallyResult(request: _87.QueryTallyResultRequest): Promise<_87.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _91.QueryProposalRequest): Promise<_91.QueryProposalResponse>;
                        proposals(request: _91.QueryProposalsRequest): Promise<_91.QueryProposalsResponse>;
                        vote(request: _91.QueryVoteRequest): Promise<_91.QueryVoteResponse>;
                        votes(request: _91.QueryVotesRequest): Promise<_91.QueryVotesResponse>;
                        params(request: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                        deposit(request: _91.QueryDepositRequest): Promise<_91.QueryDepositResponse>;
                        deposits(request: _91.QueryDepositsRequest): Promise<_91.QueryDepositsResponse>;
                        tallyResult(request: _91.QueryTallyResultRequest): Promise<_91.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _95.QueryGroupInfoRequest): Promise<_95.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _95.QueryGroupPolicyInfoRequest): Promise<_95.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _95.QueryGroupMembersRequest): Promise<_95.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _95.QueryGroupsByAdminRequest): Promise<_95.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _95.QueryGroupPoliciesByGroupRequest): Promise<_95.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _95.QueryGroupPoliciesByAdminRequest): Promise<_95.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _95.QueryProposalRequest): Promise<_95.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _95.QueryProposalsByGroupPolicyRequest): Promise<_95.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _95.QueryVoteByProposalVoterRequest): Promise<_95.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _95.QueryVotesByProposalRequest): Promise<_95.QueryVotesByProposalResponse>;
                        votesByVoter(request: _95.QueryVotesByVoterRequest): Promise<_95.QueryVotesByVoterResponse>;
                        groupsByMember(request: _95.QueryGroupsByMemberRequest): Promise<_95.QueryGroupsByMemberResponse>;
                        tallyResult(request: _95.QueryTallyResultRequest): Promise<_95.QueryTallyResultResponse>;
                        groups(request?: _95.QueryGroupsRequest): Promise<_95.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                        inflation(request?: _100.QueryInflationRequest): Promise<_100.QueryInflationResponse>;
                        annualProvisions(request?: _100.QueryAnnualProvisionsRequest): Promise<_100.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _105.QueryBalanceRequest): Promise<_105.QueryBalanceResponse>;
                        owner(request: _105.QueryOwnerRequest): Promise<_105.QueryOwnerResponse>;
                        supply(request: _105.QuerySupplyRequest): Promise<_105.QuerySupplyResponse>;
                        nFTs(request: _105.QueryNFTsRequest): Promise<_105.QueryNFTsResponse>;
                        nFT(request: _105.QueryNFTRequest): Promise<_105.QueryNFTResponse>;
                        class(request: _105.QueryClassRequest): Promise<_105.QueryClassResponse>;
                        classes(request?: _105.QueryClassesRequest): Promise<_105.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                        subspaces(request?: _111.QuerySubspacesRequest): Promise<_111.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
                        signingInfo(request: _113.QuerySigningInfoRequest): Promise<_113.QuerySigningInfoResponse>;
                        signingInfos(request?: _113.QuerySigningInfosRequest): Promise<_113.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _118.QueryValidatorsRequest): Promise<_118.QueryValidatorsResponse>;
                        validator(request: _118.QueryValidatorRequest): Promise<_118.QueryValidatorResponse>;
                        validatorDelegations(request: _118.QueryValidatorDelegationsRequest): Promise<_118.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _118.QueryValidatorUnbondingDelegationsRequest): Promise<_118.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _118.QueryDelegationRequest): Promise<_118.QueryDelegationResponse>;
                        unbondingDelegation(request: _118.QueryUnbondingDelegationRequest): Promise<_118.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _118.QueryDelegatorDelegationsRequest): Promise<_118.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _118.QueryDelegatorUnbondingDelegationsRequest): Promise<_118.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _118.QueryRedelegationsRequest): Promise<_118.QueryRedelegationsResponse>;
                        delegatorValidators(request: _118.QueryDelegatorValidatorsRequest): Promise<_118.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _118.QueryDelegatorValidatorRequest): Promise<_118.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _118.QueryHistoricalInfoRequest): Promise<_118.QueryHistoricalInfoResponse>;
                        pool(request?: _118.QueryPoolRequest): Promise<_118.QueryPoolResponse>;
                        params(request?: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _122.SimulateRequest): Promise<_122.SimulateResponse>;
                        getTx(request: _122.GetTxRequest): Promise<_122.GetTxResponse>;
                        broadcastTx(request: _122.BroadcastTxRequest): Promise<_122.BroadcastTxResponse>;
                        getTxsEvent(request: _122.GetTxsEventRequest): Promise<_122.GetTxsEventResponse>;
                        getBlockWithTxs(request: _122.GetBlockWithTxsRequest): Promise<_122.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _124.QueryCurrentPlanRequest): Promise<_124.QueryCurrentPlanResponse>;
                        appliedPlan(request: _124.QueryAppliedPlanRequest): Promise<_124.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _124.QueryUpgradedConsensusStateRequest): Promise<_124.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _124.QueryModuleVersionsRequest): Promise<_124.QueryModuleVersionsResponse>;
                        authority(request?: _124.QueryAuthorityRequest): Promise<_124.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _212.LCDQueryClient;
                };
                authz: {
                    v1beta1: _213.LCDQueryClient;
                };
                bank: {
                    v1beta1: _214.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _215.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _216.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _217.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _218.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _219.LCDQueryClient;
                };
                gov: {
                    v1: _220.LCDQueryClient;
                    v1beta1: _221.LCDQueryClient;
                };
                group: {
                    v1: _222.LCDQueryClient;
                };
                mint: {
                    v1beta1: _223.LCDQueryClient;
                };
                nft: {
                    v1beta1: _224.LCDQueryClient;
                };
                params: {
                    v1beta1: _225.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _226.LCDQueryClient;
                };
                staking: {
                    v1beta1: _227.LCDQueryClient;
                };
                tx: {
                    v1beta1: _228.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _229.LCDQueryClient;
                };
            };
        }>;
    };
}
