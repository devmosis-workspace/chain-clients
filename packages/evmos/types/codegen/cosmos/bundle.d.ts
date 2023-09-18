import * as _46 from "./app/module/v1alpha1/module";
import * as _47 from "./app/v1alpha1/config";
import * as _48 from "./app/v1alpha1/module";
import * as _49 from "./app/v1alpha1/query";
import * as _50 from "./auth/v1beta1/auth";
import * as _51 from "./auth/v1beta1/genesis";
import * as _52 from "./auth/v1beta1/query";
import * as _53 from "./authz/v1beta1/authz";
import * as _54 from "./authz/v1beta1/event";
import * as _55 from "./authz/v1beta1/genesis";
import * as _56 from "./authz/v1beta1/query";
import * as _57 from "./authz/v1beta1/tx";
import * as _58 from "./bank/v1beta1/authz";
import * as _59 from "./bank/v1beta1/bank";
import * as _60 from "./bank/v1beta1/genesis";
import * as _61 from "./bank/v1beta1/query";
import * as _62 from "./bank/v1beta1/tx";
import * as _63 from "./base/abci/v1beta1/abci";
import * as _64 from "./base/kv/v1beta1/kv";
import * as _65 from "./base/node/v1beta1/query";
import * as _66 from "./base/query/v1beta1/pagination";
import * as _67 from "./base/reflection/v1beta1/reflection";
import * as _68 from "./base/reflection/v2alpha1/reflection";
import * as _69 from "./base/snapshots/v1beta1/snapshot";
import * as _70 from "./base/store/v1beta1/commit_info";
import * as _71 from "./base/store/v1beta1/listening";
import * as _72 from "./base/tendermint/v1beta1/query";
import * as _73 from "./base/tendermint/v1beta1/types";
import * as _74 from "./base/v1beta1/coin";
import * as _75 from "./capability/v1beta1/capability";
import * as _76 from "./capability/v1beta1/genesis";
import * as _77 from "./crisis/v1beta1/genesis";
import * as _78 from "./crisis/v1beta1/tx";
import * as _79 from "./crypto/ed25519/keys";
import * as _80 from "./crypto/hd/v1/hd";
import * as _81 from "./crypto/keyring/v1/record";
import * as _82 from "./crypto/multisig/keys";
import * as _83 from "./crypto/secp256k1/keys";
import * as _84 from "./crypto/secp256r1/keys";
import * as _85 from "./distribution/v1beta1/authz";
import * as _86 from "./distribution/v1beta1/distribution";
import * as _87 from "./distribution/v1beta1/genesis";
import * as _88 from "./distribution/v1beta1/query";
import * as _89 from "./distribution/v1beta1/tx";
import * as _90 from "./evidence/v1beta1/evidence";
import * as _91 from "./evidence/v1beta1/genesis";
import * as _92 from "./evidence/v1beta1/query";
import * as _93 from "./evidence/v1beta1/tx";
import * as _94 from "./feegrant/v1beta1/feegrant";
import * as _95 from "./feegrant/v1beta1/genesis";
import * as _96 from "./feegrant/v1beta1/query";
import * as _97 from "./feegrant/v1beta1/tx";
import * as _98 from "./genutil/v1beta1/genesis";
import * as _99 from "./gov/v1/genesis";
import * as _100 from "./gov/v1/gov";
import * as _101 from "./gov/v1/query";
import * as _102 from "./gov/v1/tx";
import * as _103 from "./gov/v1beta1/genesis";
import * as _104 from "./gov/v1beta1/gov";
import * as _105 from "./gov/v1beta1/query";
import * as _106 from "./gov/v1beta1/tx";
import * as _107 from "./group/v1/events";
import * as _108 from "./group/v1/genesis";
import * as _109 from "./group/v1/query";
import * as _110 from "./group/v1/tx";
import * as _111 from "./group/v1/types";
import * as _112 from "./mint/v1beta1/genesis";
import * as _113 from "./mint/v1beta1/mint";
import * as _114 from "./mint/v1beta1/query";
import * as _116 from "./nft/v1beta1/event";
import * as _117 from "./nft/v1beta1/genesis";
import * as _118 from "./nft/v1beta1/nft";
import * as _119 from "./nft/v1beta1/query";
import * as _120 from "./nft/v1beta1/tx";
import * as _121 from "./orm/module/v1alpha1/module";
import * as _122 from "./orm/v1/orm";
import * as _123 from "./orm/v1alpha1/schema";
import * as _124 from "./params/v1beta1/params";
import * as _125 from "./params/v1beta1/query";
import * as _126 from "./slashing/v1beta1/genesis";
import * as _127 from "./slashing/v1beta1/query";
import * as _128 from "./slashing/v1beta1/slashing";
import * as _129 from "./slashing/v1beta1/tx";
import * as _130 from "./staking/v1beta1/authz";
import * as _131 from "./staking/v1beta1/genesis";
import * as _132 from "./staking/v1beta1/query";
import * as _133 from "./staking/v1beta1/staking";
import * as _134 from "./staking/v1beta1/tx";
import * as _135 from "./tx/signing/v1beta1/signing";
import * as _136 from "./tx/v1beta1/service";
import * as _137 from "./tx/v1beta1/tx";
import * as _138 from "./upgrade/v1beta1/query";
import * as _139 from "./upgrade/v1beta1/tx";
import * as _140 from "./upgrade/v1beta1/upgrade";
import * as _141 from "./vesting/v1beta1/tx";
import * as _142 from "./vesting/v1beta1/vesting";
import * as _237 from "./auth/v1beta1/query.lcd";
import * as _238 from "./authz/v1beta1/query.lcd";
import * as _239 from "./bank/v1beta1/query.lcd";
import * as _240 from "./base/node/v1beta1/query.lcd";
import * as _241 from "./base/tendermint/v1beta1/query.lcd";
import * as _242 from "./distribution/v1beta1/query.lcd";
import * as _243 from "./evidence/v1beta1/query.lcd";
import * as _244 from "./feegrant/v1beta1/query.lcd";
import * as _245 from "./gov/v1/query.lcd";
import * as _246 from "./gov/v1beta1/query.lcd";
import * as _247 from "./group/v1/query.lcd";
import * as _248 from "./mint/v1beta1/query.lcd";
import * as _249 from "./nft/v1beta1/query.lcd";
import * as _250 from "./params/v1beta1/query.lcd";
import * as _251 from "./slashing/v1beta1/query.lcd";
import * as _252 from "./staking/v1beta1/query.lcd";
import * as _253 from "./tx/v1beta1/service.lcd";
import * as _254 from "./upgrade/v1beta1/query.lcd";
import * as _255 from "./app/v1alpha1/query.rpc.Query";
import * as _256 from "./auth/v1beta1/query.rpc.Query";
import * as _257 from "./authz/v1beta1/query.rpc.Query";
import * as _258 from "./bank/v1beta1/query.rpc.Query";
import * as _259 from "./base/node/v1beta1/query.rpc.Service";
import * as _260 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _261 from "./distribution/v1beta1/query.rpc.Query";
import * as _262 from "./evidence/v1beta1/query.rpc.Query";
import * as _263 from "./feegrant/v1beta1/query.rpc.Query";
import * as _264 from "./gov/v1/query.rpc.Query";
import * as _265 from "./gov/v1beta1/query.rpc.Query";
import * as _266 from "./group/v1/query.rpc.Query";
import * as _267 from "./mint/v1beta1/query.rpc.Query";
import * as _268 from "./nft/v1beta1/query.rpc.Query";
import * as _269 from "./params/v1beta1/query.rpc.Query";
import * as _270 from "./slashing/v1beta1/query.rpc.Query";
import * as _271 from "./staking/v1beta1/query.rpc.Query";
import * as _272 from "./tx/v1beta1/service.rpc.Service";
import * as _273 from "./upgrade/v1beta1/query.rpc.Query";
import * as _274 from "./authz/v1beta1/tx.rpc.msg";
import * as _275 from "./bank/v1beta1/tx.rpc.msg";
import * as _276 from "./crisis/v1beta1/tx.rpc.msg";
import * as _277 from "./distribution/v1beta1/tx.rpc.msg";
import * as _278 from "./evidence/v1beta1/tx.rpc.msg";
import * as _279 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _280 from "./gov/v1/tx.rpc.msg";
import * as _281 from "./gov/v1beta1/tx.rpc.msg";
import * as _282 from "./group/v1/tx.rpc.msg";
import * as _283 from "./nft/v1beta1/tx.rpc.msg";
import * as _284 from "./slashing/v1beta1/tx.rpc.msg";
import * as _285 from "./staking/v1beta1/tx.rpc.msg";
import * as _286 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _287 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _46.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.Module;
                    fromPartial(_: Partial<_46.Module>): _46.Module;
                    fromAmino(_: _46.ModuleAmino): _46.Module;
                    toAmino(_: _46.Module): _46.ModuleAmino;
                    fromAminoMsg(object: _46.ModuleAminoMsg): _46.Module;
                    toAminoMsg(message: _46.Module): _46.ModuleAminoMsg;
                    fromProtoMsg(message: _46.ModuleProtoMsg): _46.Module;
                    toProto(message: _46.Module): Uint8Array;
                    toProtoMsg(message: _46.Module): _46.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _255.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _49.QueryConfigRequest): Promise<_49.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _49.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.QueryConfigRequest;
                fromPartial(_: Partial<_49.QueryConfigRequest>): _49.QueryConfigRequest;
                fromAmino(_: _49.QueryConfigRequestAmino): _49.QueryConfigRequest;
                toAmino(_: _49.QueryConfigRequest): _49.QueryConfigRequestAmino;
                fromAminoMsg(object: _49.QueryConfigRequestAminoMsg): _49.QueryConfigRequest;
                toAminoMsg(message: _49.QueryConfigRequest): _49.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _49.QueryConfigRequestProtoMsg): _49.QueryConfigRequest;
                toProto(message: _49.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _49.QueryConfigRequest): _49.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _49.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryConfigResponse;
                fromPartial(object: Partial<_49.QueryConfigResponse>): _49.QueryConfigResponse;
                fromAmino(object: _49.QueryConfigResponseAmino): _49.QueryConfigResponse;
                toAmino(message: _49.QueryConfigResponse): _49.QueryConfigResponseAmino;
                fromAminoMsg(object: _49.QueryConfigResponseAminoMsg): _49.QueryConfigResponse;
                toAminoMsg(message: _49.QueryConfigResponse): _49.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _49.QueryConfigResponseProtoMsg): _49.QueryConfigResponse;
                toProto(message: _49.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _49.QueryConfigResponse): _49.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _48.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.ModuleDescriptor;
                fromPartial(object: Partial<_48.ModuleDescriptor>): _48.ModuleDescriptor;
                fromAmino(object: _48.ModuleDescriptorAmino): _48.ModuleDescriptor;
                toAmino(message: _48.ModuleDescriptor): _48.ModuleDescriptorAmino;
                fromAminoMsg(object: _48.ModuleDescriptorAminoMsg): _48.ModuleDescriptor;
                toAminoMsg(message: _48.ModuleDescriptor): _48.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _48.ModuleDescriptorProtoMsg): _48.ModuleDescriptor;
                toProto(message: _48.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _48.ModuleDescriptor): _48.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _48.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.PackageReference;
                fromPartial(object: Partial<_48.PackageReference>): _48.PackageReference;
                fromAmino(object: _48.PackageReferenceAmino): _48.PackageReference;
                toAmino(message: _48.PackageReference): _48.PackageReferenceAmino;
                fromAminoMsg(object: _48.PackageReferenceAminoMsg): _48.PackageReference;
                toAminoMsg(message: _48.PackageReference): _48.PackageReferenceAminoMsg;
                fromProtoMsg(message: _48.PackageReferenceProtoMsg): _48.PackageReference;
                toProto(message: _48.PackageReference): Uint8Array;
                toProtoMsg(message: _48.PackageReference): _48.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _48.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MigrateFromInfo;
                fromPartial(object: Partial<_48.MigrateFromInfo>): _48.MigrateFromInfo;
                fromAmino(object: _48.MigrateFromInfoAmino): _48.MigrateFromInfo;
                toAmino(message: _48.MigrateFromInfo): _48.MigrateFromInfoAmino;
                fromAminoMsg(object: _48.MigrateFromInfoAminoMsg): _48.MigrateFromInfo;
                toAminoMsg(message: _48.MigrateFromInfo): _48.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _48.MigrateFromInfoProtoMsg): _48.MigrateFromInfo;
                toProto(message: _48.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _48.MigrateFromInfo): _48.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _47.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.Config;
                fromPartial(object: Partial<_47.Config>): _47.Config;
                fromAmino(object: _47.ConfigAmino): _47.Config;
                toAmino(message: _47.Config): _47.ConfigAmino;
                fromAminoMsg(object: _47.ConfigAminoMsg): _47.Config;
                toAminoMsg(message: _47.Config): _47.ConfigAminoMsg;
                fromProtoMsg(message: _47.ConfigProtoMsg): _47.Config;
                toProto(message: _47.Config): Uint8Array;
                toProtoMsg(message: _47.Config): _47.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _47.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ModuleConfig;
                fromPartial(object: Partial<_47.ModuleConfig>): _47.ModuleConfig;
                fromAmino(object: _47.ModuleConfigAmino): _47.ModuleConfig;
                toAmino(message: _47.ModuleConfig): _47.ModuleConfigAmino;
                fromAminoMsg(object: _47.ModuleConfigAminoMsg): _47.ModuleConfig;
                toAminoMsg(message: _47.ModuleConfig): _47.ModuleConfigAminoMsg;
                fromProtoMsg(message: _47.ModuleConfigProtoMsg): _47.ModuleConfig;
                toProto(message: _47.ModuleConfig): Uint8Array;
                toProtoMsg(message: _47.ModuleConfig): _47.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _256.QueryClientImpl;
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
            };
            LCDQueryClient: typeof _237.LCDQueryClient;
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
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _50.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _50.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
        const v1beta1: {
            MsgClientImpl: typeof _274.MsgClientImpl;
            QueryClientImpl: typeof _257.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _56.QueryGrantsRequest): Promise<_56.QueryGrantsResponse>;
                granterGrants(request: _56.QueryGranterGrantsRequest): Promise<_56.QueryGranterGrantsResponse>;
                granteeGrants(request: _56.QueryGranteeGrantsRequest): Promise<_56.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _238.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _57.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _57.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _57.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _57.MsgGrant): {
                        typeUrl: string;
                        value: _57.MsgGrant;
                    };
                    exec(value: _57.MsgExec): {
                        typeUrl: string;
                        value: _57.MsgExec;
                    };
                    revoke(value: _57.MsgRevoke): {
                        typeUrl: string;
                        value: _57.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _57.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _57.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _57.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _57.MsgGrant): {
                        typeUrl: string;
                        value: _57.MsgGrant;
                    };
                    exec(value: _57.MsgExec): {
                        typeUrl: string;
                        value: _57.MsgExec;
                    };
                    revoke(value: _57.MsgRevoke): {
                        typeUrl: string;
                        value: _57.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _57.MsgGrant) => _57.MsgGrantAmino;
                    fromAmino: (object: _57.MsgGrantAmino) => _57.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _57.MsgExec) => _57.MsgExecAmino;
                    fromAmino: (object: _57.MsgExecAmino) => _57.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _57.MsgRevoke) => _57.MsgRevokeAmino;
                    fromAmino: (object: _57.MsgRevokeAmino) => _57.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _57.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgGrant;
                fromPartial(object: Partial<_57.MsgGrant>): _57.MsgGrant;
                fromAmino(object: _57.MsgGrantAmino): _57.MsgGrant;
                toAmino(message: _57.MsgGrant): _57.MsgGrantAmino;
                fromAminoMsg(object: _57.MsgGrantAminoMsg): _57.MsgGrant;
                toAminoMsg(message: _57.MsgGrant): _57.MsgGrantAminoMsg;
                fromProtoMsg(message: _57.MsgGrantProtoMsg): _57.MsgGrant;
                toProto(message: _57.MsgGrant): Uint8Array;
                toProtoMsg(message: _57.MsgGrant): _57.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _57.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgExecResponse;
                fromPartial(object: Partial<_57.MsgExecResponse>): _57.MsgExecResponse;
                fromAmino(object: _57.MsgExecResponseAmino): _57.MsgExecResponse;
                toAmino(message: _57.MsgExecResponse): _57.MsgExecResponseAmino;
                fromAminoMsg(object: _57.MsgExecResponseAminoMsg): _57.MsgExecResponse;
                toAminoMsg(message: _57.MsgExecResponse): _57.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _57.MsgExecResponseProtoMsg): _57.MsgExecResponse;
                toProto(message: _57.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _57.MsgExecResponse): _57.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _57.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgExec;
                fromPartial(object: Partial<_57.MsgExec>): _57.MsgExec;
                fromAmino(object: _57.MsgExecAmino): _57.MsgExec;
                toAmino(message: _57.MsgExec): _57.MsgExecAmino;
                fromAminoMsg(object: _57.MsgExecAminoMsg): _57.MsgExec;
                toAminoMsg(message: _57.MsgExec): _57.MsgExecAminoMsg;
                fromProtoMsg(message: _57.MsgExecProtoMsg): _57.MsgExec;
                toProto(message: _57.MsgExec): Uint8Array;
                toProtoMsg(message: _57.MsgExec): _57.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _57.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgGrantResponse;
                fromPartial(_: Partial<_57.MsgGrantResponse>): _57.MsgGrantResponse;
                fromAmino(_: _57.MsgGrantResponseAmino): _57.MsgGrantResponse;
                toAmino(_: _57.MsgGrantResponse): _57.MsgGrantResponseAmino;
                fromAminoMsg(object: _57.MsgGrantResponseAminoMsg): _57.MsgGrantResponse;
                toAminoMsg(message: _57.MsgGrantResponse): _57.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _57.MsgGrantResponseProtoMsg): _57.MsgGrantResponse;
                toProto(message: _57.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _57.MsgGrantResponse): _57.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _57.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgRevoke;
                fromPartial(object: Partial<_57.MsgRevoke>): _57.MsgRevoke;
                fromAmino(object: _57.MsgRevokeAmino): _57.MsgRevoke;
                toAmino(message: _57.MsgRevoke): _57.MsgRevokeAmino;
                fromAminoMsg(object: _57.MsgRevokeAminoMsg): _57.MsgRevoke;
                toAminoMsg(message: _57.MsgRevoke): _57.MsgRevokeAminoMsg;
                fromProtoMsg(message: _57.MsgRevokeProtoMsg): _57.MsgRevoke;
                toProto(message: _57.MsgRevoke): Uint8Array;
                toProtoMsg(message: _57.MsgRevoke): _57.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _57.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgRevokeResponse;
                fromPartial(_: Partial<_57.MsgRevokeResponse>): _57.MsgRevokeResponse;
                fromAmino(_: _57.MsgRevokeResponseAmino): _57.MsgRevokeResponse;
                toAmino(_: _57.MsgRevokeResponse): _57.MsgRevokeResponseAmino;
                fromAminoMsg(object: _57.MsgRevokeResponseAminoMsg): _57.MsgRevokeResponse;
                toAminoMsg(message: _57.MsgRevokeResponse): _57.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _57.MsgRevokeResponseProtoMsg): _57.MsgRevokeResponse;
                toProto(message: _57.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _57.MsgRevokeResponse): _57.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _56.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryGrantsRequest;
                fromPartial(object: Partial<_56.QueryGrantsRequest>): _56.QueryGrantsRequest;
                fromAmino(object: _56.QueryGrantsRequestAmino): _56.QueryGrantsRequest;
                toAmino(message: _56.QueryGrantsRequest): _56.QueryGrantsRequestAmino;
                fromAminoMsg(object: _56.QueryGrantsRequestAminoMsg): _56.QueryGrantsRequest;
                toAminoMsg(message: _56.QueryGrantsRequest): _56.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryGrantsRequestProtoMsg): _56.QueryGrantsRequest;
                toProto(message: _56.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryGrantsRequest): _56.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _56.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryGrantsResponse;
                fromPartial(object: Partial<_56.QueryGrantsResponse>): _56.QueryGrantsResponse;
                fromAmino(object: _56.QueryGrantsResponseAmino): _56.QueryGrantsResponse;
                toAmino(message: _56.QueryGrantsResponse): _56.QueryGrantsResponseAmino;
                fromAminoMsg(object: _56.QueryGrantsResponseAminoMsg): _56.QueryGrantsResponse;
                toAminoMsg(message: _56.QueryGrantsResponse): _56.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryGrantsResponseProtoMsg): _56.QueryGrantsResponse;
                toProto(message: _56.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryGrantsResponse): _56.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _56.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_56.QueryGranterGrantsRequest>): _56.QueryGranterGrantsRequest;
                fromAmino(object: _56.QueryGranterGrantsRequestAmino): _56.QueryGranterGrantsRequest;
                toAmino(message: _56.QueryGranterGrantsRequest): _56.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _56.QueryGranterGrantsRequestAminoMsg): _56.QueryGranterGrantsRequest;
                toAminoMsg(message: _56.QueryGranterGrantsRequest): _56.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryGranterGrantsRequestProtoMsg): _56.QueryGranterGrantsRequest;
                toProto(message: _56.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryGranterGrantsRequest): _56.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _56.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_56.QueryGranterGrantsResponse>): _56.QueryGranterGrantsResponse;
                fromAmino(object: _56.QueryGranterGrantsResponseAmino): _56.QueryGranterGrantsResponse;
                toAmino(message: _56.QueryGranterGrantsResponse): _56.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _56.QueryGranterGrantsResponseAminoMsg): _56.QueryGranterGrantsResponse;
                toAminoMsg(message: _56.QueryGranterGrantsResponse): _56.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryGranterGrantsResponseProtoMsg): _56.QueryGranterGrantsResponse;
                toProto(message: _56.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryGranterGrantsResponse): _56.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _56.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_56.QueryGranteeGrantsRequest>): _56.QueryGranteeGrantsRequest;
                fromAmino(object: _56.QueryGranteeGrantsRequestAmino): _56.QueryGranteeGrantsRequest;
                toAmino(message: _56.QueryGranteeGrantsRequest): _56.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _56.QueryGranteeGrantsRequestAminoMsg): _56.QueryGranteeGrantsRequest;
                toAminoMsg(message: _56.QueryGranteeGrantsRequest): _56.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryGranteeGrantsRequestProtoMsg): _56.QueryGranteeGrantsRequest;
                toProto(message: _56.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryGranteeGrantsRequest): _56.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _56.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_56.QueryGranteeGrantsResponse>): _56.QueryGranteeGrantsResponse;
                fromAmino(object: _56.QueryGranteeGrantsResponseAmino): _56.QueryGranteeGrantsResponse;
                toAmino(message: _56.QueryGranteeGrantsResponse): _56.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _56.QueryGranteeGrantsResponseAminoMsg): _56.QueryGranteeGrantsResponse;
                toAminoMsg(message: _56.QueryGranteeGrantsResponse): _56.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryGranteeGrantsResponseProtoMsg): _56.QueryGranteeGrantsResponse;
                toProto(message: _56.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryGranteeGrantsResponse): _56.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _54.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.EventGrant;
                fromPartial(object: Partial<_54.EventGrant>): _54.EventGrant;
                fromAmino(object: _54.EventGrantAmino): _54.EventGrant;
                toAmino(message: _54.EventGrant): _54.EventGrantAmino;
                fromAminoMsg(object: _54.EventGrantAminoMsg): _54.EventGrant;
                toAminoMsg(message: _54.EventGrant): _54.EventGrantAminoMsg;
                fromProtoMsg(message: _54.EventGrantProtoMsg): _54.EventGrant;
                toProto(message: _54.EventGrant): Uint8Array;
                toProtoMsg(message: _54.EventGrant): _54.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _54.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.EventRevoke;
                fromPartial(object: Partial<_54.EventRevoke>): _54.EventRevoke;
                fromAmino(object: _54.EventRevokeAmino): _54.EventRevoke;
                toAmino(message: _54.EventRevoke): _54.EventRevokeAmino;
                fromAminoMsg(object: _54.EventRevokeAminoMsg): _54.EventRevoke;
                toAminoMsg(message: _54.EventRevoke): _54.EventRevokeAminoMsg;
                fromProtoMsg(message: _54.EventRevokeProtoMsg): _54.EventRevoke;
                toProto(message: _54.EventRevoke): Uint8Array;
                toProtoMsg(message: _54.EventRevoke): _54.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _53.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.GenericAuthorization;
                fromPartial(object: Partial<_53.GenericAuthorization>): _53.GenericAuthorization;
                fromAmino(object: _53.GenericAuthorizationAmino): _53.GenericAuthorization;
                toAmino(message: _53.GenericAuthorization): _53.GenericAuthorizationAmino;
                fromAminoMsg(object: _53.GenericAuthorizationAminoMsg): _53.GenericAuthorization;
                toAminoMsg(message: _53.GenericAuthorization): _53.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _53.GenericAuthorizationProtoMsg): _53.GenericAuthorization;
                toProto(message: _53.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _53.GenericAuthorization): _53.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _53.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Grant;
                fromPartial(object: Partial<_53.Grant>): _53.Grant;
                fromAmino(object: _53.GrantAmino): _53.Grant;
                toAmino(message: _53.Grant): _53.GrantAmino;
                fromAminoMsg(object: _53.GrantAminoMsg): _53.Grant;
                toAminoMsg(message: _53.Grant): _53.GrantAminoMsg;
                fromProtoMsg(message: _53.GrantProtoMsg): _53.Grant;
                toProto(message: _53.Grant): Uint8Array;
                toProtoMsg(message: _53.Grant): _53.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _53.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.GrantAuthorization;
                fromPartial(object: Partial<_53.GrantAuthorization>): _53.GrantAuthorization;
                fromAmino(object: _53.GrantAuthorizationAmino): _53.GrantAuthorization;
                toAmino(message: _53.GrantAuthorization): _53.GrantAuthorizationAmino;
                fromAminoMsg(object: _53.GrantAuthorizationAminoMsg): _53.GrantAuthorization;
                toAminoMsg(message: _53.GrantAuthorization): _53.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _53.GrantAuthorizationProtoMsg): _53.GrantAuthorization;
                toProto(message: _53.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _53.GrantAuthorization): _53.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _53.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.GrantQueueItem;
                fromPartial(object: Partial<_53.GrantQueueItem>): _53.GrantQueueItem;
                fromAmino(object: _53.GrantQueueItemAmino): _53.GrantQueueItem;
                toAmino(message: _53.GrantQueueItem): _53.GrantQueueItemAmino;
                fromAminoMsg(object: _53.GrantQueueItemAminoMsg): _53.GrantQueueItem;
                toAminoMsg(message: _53.GrantQueueItem): _53.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _53.GrantQueueItemProtoMsg): _53.GrantQueueItem;
                toProto(message: _53.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _53.GrantQueueItem): _53.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _58.SendAuthorization | _85.DistributionAuthorization | _130.StakeAuthorization | _53.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _275.MsgClientImpl;
            QueryClientImpl: typeof _258.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _61.QueryBalanceRequest): Promise<_61.QueryBalanceResponse>;
                allBalances(request: _61.QueryAllBalancesRequest): Promise<_61.QueryAllBalancesResponse>;
                spendableBalances(request: _61.QuerySpendableBalancesRequest): Promise<_61.QuerySpendableBalancesResponse>;
                totalSupply(request?: _61.QueryTotalSupplyRequest): Promise<_61.QueryTotalSupplyResponse>;
                supplyOf(request: _61.QuerySupplyOfRequest): Promise<_61.QuerySupplyOfResponse>;
                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                denomMetadata(request: _61.QueryDenomMetadataRequest): Promise<_61.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _61.QueryDenomsMetadataRequest): Promise<_61.QueryDenomsMetadataResponse>;
                denomOwners(request: _61.QueryDenomOwnersRequest): Promise<_61.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _239.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _62.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _62.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _62.MsgSend): {
                        typeUrl: string;
                        value: _62.MsgSend;
                    };
                    multiSend(value: _62.MsgMultiSend): {
                        typeUrl: string;
                        value: _62.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _62.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _62.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _62.MsgSend): {
                        typeUrl: string;
                        value: _62.MsgSend;
                    };
                    multiSend(value: _62.MsgMultiSend): {
                        typeUrl: string;
                        value: _62.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _62.MsgSend) => _62.MsgSendAmino;
                    fromAmino: (object: _62.MsgSendAmino) => _62.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _62.MsgMultiSend) => _62.MsgMultiSendAmino;
                    fromAmino: (object: _62.MsgMultiSendAmino) => _62.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _62.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgSend;
                fromPartial(object: Partial<_62.MsgSend>): _62.MsgSend;
                fromAmino(object: _62.MsgSendAmino): _62.MsgSend;
                toAmino(message: _62.MsgSend): _62.MsgSendAmino;
                fromAminoMsg(object: _62.MsgSendAminoMsg): _62.MsgSend;
                toAminoMsg(message: _62.MsgSend): _62.MsgSendAminoMsg;
                fromProtoMsg(message: _62.MsgSendProtoMsg): _62.MsgSend;
                toProto(message: _62.MsgSend): Uint8Array;
                toProtoMsg(message: _62.MsgSend): _62.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _62.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgSendResponse;
                fromPartial(_: Partial<_62.MsgSendResponse>): _62.MsgSendResponse;
                fromAmino(_: _62.MsgSendResponseAmino): _62.MsgSendResponse;
                toAmino(_: _62.MsgSendResponse): _62.MsgSendResponseAmino;
                fromAminoMsg(object: _62.MsgSendResponseAminoMsg): _62.MsgSendResponse;
                toAminoMsg(message: _62.MsgSendResponse): _62.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _62.MsgSendResponseProtoMsg): _62.MsgSendResponse;
                toProto(message: _62.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _62.MsgSendResponse): _62.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _62.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgMultiSend;
                fromPartial(object: Partial<_62.MsgMultiSend>): _62.MsgMultiSend;
                fromAmino(object: _62.MsgMultiSendAmino): _62.MsgMultiSend;
                toAmino(message: _62.MsgMultiSend): _62.MsgMultiSendAmino;
                fromAminoMsg(object: _62.MsgMultiSendAminoMsg): _62.MsgMultiSend;
                toAminoMsg(message: _62.MsgMultiSend): _62.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _62.MsgMultiSendProtoMsg): _62.MsgMultiSend;
                toProto(message: _62.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _62.MsgMultiSend): _62.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _62.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgMultiSendResponse;
                fromPartial(_: Partial<_62.MsgMultiSendResponse>): _62.MsgMultiSendResponse;
                fromAmino(_: _62.MsgMultiSendResponseAmino): _62.MsgMultiSendResponse;
                toAmino(_: _62.MsgMultiSendResponse): _62.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _62.MsgMultiSendResponseAminoMsg): _62.MsgMultiSendResponse;
                toAminoMsg(message: _62.MsgMultiSendResponse): _62.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _62.MsgMultiSendResponseProtoMsg): _62.MsgMultiSendResponse;
                toProto(message: _62.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _62.MsgMultiSendResponse): _62.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _61.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryBalanceRequest;
                fromPartial(object: Partial<_61.QueryBalanceRequest>): _61.QueryBalanceRequest;
                fromAmino(object: _61.QueryBalanceRequestAmino): _61.QueryBalanceRequest;
                toAmino(message: _61.QueryBalanceRequest): _61.QueryBalanceRequestAmino;
                fromAminoMsg(object: _61.QueryBalanceRequestAminoMsg): _61.QueryBalanceRequest;
                toAminoMsg(message: _61.QueryBalanceRequest): _61.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _61.QueryBalanceRequestProtoMsg): _61.QueryBalanceRequest;
                toProto(message: _61.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _61.QueryBalanceRequest): _61.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _61.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryBalanceResponse;
                fromPartial(object: Partial<_61.QueryBalanceResponse>): _61.QueryBalanceResponse;
                fromAmino(object: _61.QueryBalanceResponseAmino): _61.QueryBalanceResponse;
                toAmino(message: _61.QueryBalanceResponse): _61.QueryBalanceResponseAmino;
                fromAminoMsg(object: _61.QueryBalanceResponseAminoMsg): _61.QueryBalanceResponse;
                toAminoMsg(message: _61.QueryBalanceResponse): _61.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _61.QueryBalanceResponseProtoMsg): _61.QueryBalanceResponse;
                toProto(message: _61.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _61.QueryBalanceResponse): _61.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _61.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryAllBalancesRequest;
                fromPartial(object: Partial<_61.QueryAllBalancesRequest>): _61.QueryAllBalancesRequest;
                fromAmino(object: _61.QueryAllBalancesRequestAmino): _61.QueryAllBalancesRequest;
                toAmino(message: _61.QueryAllBalancesRequest): _61.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _61.QueryAllBalancesRequestAminoMsg): _61.QueryAllBalancesRequest;
                toAminoMsg(message: _61.QueryAllBalancesRequest): _61.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _61.QueryAllBalancesRequestProtoMsg): _61.QueryAllBalancesRequest;
                toProto(message: _61.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _61.QueryAllBalancesRequest): _61.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _61.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryAllBalancesResponse;
                fromPartial(object: Partial<_61.QueryAllBalancesResponse>): _61.QueryAllBalancesResponse;
                fromAmino(object: _61.QueryAllBalancesResponseAmino): _61.QueryAllBalancesResponse;
                toAmino(message: _61.QueryAllBalancesResponse): _61.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _61.QueryAllBalancesResponseAminoMsg): _61.QueryAllBalancesResponse;
                toAminoMsg(message: _61.QueryAllBalancesResponse): _61.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _61.QueryAllBalancesResponseProtoMsg): _61.QueryAllBalancesResponse;
                toProto(message: _61.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _61.QueryAllBalancesResponse): _61.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _61.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_61.QuerySpendableBalancesRequest>): _61.QuerySpendableBalancesRequest;
                fromAmino(object: _61.QuerySpendableBalancesRequestAmino): _61.QuerySpendableBalancesRequest;
                toAmino(message: _61.QuerySpendableBalancesRequest): _61.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _61.QuerySpendableBalancesRequestAminoMsg): _61.QuerySpendableBalancesRequest;
                toAminoMsg(message: _61.QuerySpendableBalancesRequest): _61.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _61.QuerySpendableBalancesRequestProtoMsg): _61.QuerySpendableBalancesRequest;
                toProto(message: _61.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _61.QuerySpendableBalancesRequest): _61.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _61.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_61.QuerySpendableBalancesResponse>): _61.QuerySpendableBalancesResponse;
                fromAmino(object: _61.QuerySpendableBalancesResponseAmino): _61.QuerySpendableBalancesResponse;
                toAmino(message: _61.QuerySpendableBalancesResponse): _61.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _61.QuerySpendableBalancesResponseAminoMsg): _61.QuerySpendableBalancesResponse;
                toAminoMsg(message: _61.QuerySpendableBalancesResponse): _61.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _61.QuerySpendableBalancesResponseProtoMsg): _61.QuerySpendableBalancesResponse;
                toProto(message: _61.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _61.QuerySpendableBalancesResponse): _61.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _61.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_61.QueryTotalSupplyRequest>): _61.QueryTotalSupplyRequest;
                fromAmino(object: _61.QueryTotalSupplyRequestAmino): _61.QueryTotalSupplyRequest;
                toAmino(message: _61.QueryTotalSupplyRequest): _61.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _61.QueryTotalSupplyRequestAminoMsg): _61.QueryTotalSupplyRequest;
                toAminoMsg(message: _61.QueryTotalSupplyRequest): _61.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _61.QueryTotalSupplyRequestProtoMsg): _61.QueryTotalSupplyRequest;
                toProto(message: _61.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _61.QueryTotalSupplyRequest): _61.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _61.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_61.QueryTotalSupplyResponse>): _61.QueryTotalSupplyResponse;
                fromAmino(object: _61.QueryTotalSupplyResponseAmino): _61.QueryTotalSupplyResponse;
                toAmino(message: _61.QueryTotalSupplyResponse): _61.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _61.QueryTotalSupplyResponseAminoMsg): _61.QueryTotalSupplyResponse;
                toAminoMsg(message: _61.QueryTotalSupplyResponse): _61.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _61.QueryTotalSupplyResponseProtoMsg): _61.QueryTotalSupplyResponse;
                toProto(message: _61.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _61.QueryTotalSupplyResponse): _61.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _61.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QuerySupplyOfRequest;
                fromPartial(object: Partial<_61.QuerySupplyOfRequest>): _61.QuerySupplyOfRequest;
                fromAmino(object: _61.QuerySupplyOfRequestAmino): _61.QuerySupplyOfRequest;
                toAmino(message: _61.QuerySupplyOfRequest): _61.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _61.QuerySupplyOfRequestAminoMsg): _61.QuerySupplyOfRequest;
                toAminoMsg(message: _61.QuerySupplyOfRequest): _61.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _61.QuerySupplyOfRequestProtoMsg): _61.QuerySupplyOfRequest;
                toProto(message: _61.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _61.QuerySupplyOfRequest): _61.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _61.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QuerySupplyOfResponse;
                fromPartial(object: Partial<_61.QuerySupplyOfResponse>): _61.QuerySupplyOfResponse;
                fromAmino(object: _61.QuerySupplyOfResponseAmino): _61.QuerySupplyOfResponse;
                toAmino(message: _61.QuerySupplyOfResponse): _61.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _61.QuerySupplyOfResponseAminoMsg): _61.QuerySupplyOfResponse;
                toAminoMsg(message: _61.QuerySupplyOfResponse): _61.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _61.QuerySupplyOfResponseProtoMsg): _61.QuerySupplyOfResponse;
                toProto(message: _61.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _61.QuerySupplyOfResponse): _61.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _61.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.QueryParamsRequest;
                fromPartial(_: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
                fromAmino(_: _61.QueryParamsRequestAmino): _61.QueryParamsRequest;
                toAmino(_: _61.QueryParamsRequest): _61.QueryParamsRequestAmino;
                fromAminoMsg(object: _61.QueryParamsRequestAminoMsg): _61.QueryParamsRequest;
                toAminoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryParamsRequestProtoMsg): _61.QueryParamsRequest;
                toProto(message: _61.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _61.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryParamsResponse;
                fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
                fromAmino(object: _61.QueryParamsResponseAmino): _61.QueryParamsResponse;
                toAmino(message: _61.QueryParamsResponse): _61.QueryParamsResponseAmino;
                fromAminoMsg(object: _61.QueryParamsResponseAminoMsg): _61.QueryParamsResponse;
                toAminoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryParamsResponseProtoMsg): _61.QueryParamsResponse;
                toProto(message: _61.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _61.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_61.QueryDenomsMetadataRequest>): _61.QueryDenomsMetadataRequest;
                fromAmino(object: _61.QueryDenomsMetadataRequestAmino): _61.QueryDenomsMetadataRequest;
                toAmino(message: _61.QueryDenomsMetadataRequest): _61.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _61.QueryDenomsMetadataRequestAminoMsg): _61.QueryDenomsMetadataRequest;
                toAminoMsg(message: _61.QueryDenomsMetadataRequest): _61.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDenomsMetadataRequestProtoMsg): _61.QueryDenomsMetadataRequest;
                toProto(message: _61.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDenomsMetadataRequest): _61.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _61.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_61.QueryDenomsMetadataResponse>): _61.QueryDenomsMetadataResponse;
                fromAmino(object: _61.QueryDenomsMetadataResponseAmino): _61.QueryDenomsMetadataResponse;
                toAmino(message: _61.QueryDenomsMetadataResponse): _61.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _61.QueryDenomsMetadataResponseAminoMsg): _61.QueryDenomsMetadataResponse;
                toAminoMsg(message: _61.QueryDenomsMetadataResponse): _61.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDenomsMetadataResponseProtoMsg): _61.QueryDenomsMetadataResponse;
                toProto(message: _61.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDenomsMetadataResponse): _61.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _61.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_61.QueryDenomMetadataRequest>): _61.QueryDenomMetadataRequest;
                fromAmino(object: _61.QueryDenomMetadataRequestAmino): _61.QueryDenomMetadataRequest;
                toAmino(message: _61.QueryDenomMetadataRequest): _61.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _61.QueryDenomMetadataRequestAminoMsg): _61.QueryDenomMetadataRequest;
                toAminoMsg(message: _61.QueryDenomMetadataRequest): _61.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDenomMetadataRequestProtoMsg): _61.QueryDenomMetadataRequest;
                toProto(message: _61.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDenomMetadataRequest): _61.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _61.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_61.QueryDenomMetadataResponse>): _61.QueryDenomMetadataResponse;
                fromAmino(object: _61.QueryDenomMetadataResponseAmino): _61.QueryDenomMetadataResponse;
                toAmino(message: _61.QueryDenomMetadataResponse): _61.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _61.QueryDenomMetadataResponseAminoMsg): _61.QueryDenomMetadataResponse;
                toAminoMsg(message: _61.QueryDenomMetadataResponse): _61.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDenomMetadataResponseProtoMsg): _61.QueryDenomMetadataResponse;
                toProto(message: _61.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDenomMetadataResponse): _61.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _61.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_61.QueryDenomOwnersRequest>): _61.QueryDenomOwnersRequest;
                fromAmino(object: _61.QueryDenomOwnersRequestAmino): _61.QueryDenomOwnersRequest;
                toAmino(message: _61.QueryDenomOwnersRequest): _61.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _61.QueryDenomOwnersRequestAminoMsg): _61.QueryDenomOwnersRequest;
                toAminoMsg(message: _61.QueryDenomOwnersRequest): _61.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDenomOwnersRequestProtoMsg): _61.QueryDenomOwnersRequest;
                toProto(message: _61.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDenomOwnersRequest): _61.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _61.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DenomOwner;
                fromPartial(object: Partial<_61.DenomOwner>): _61.DenomOwner;
                fromAmino(object: _61.DenomOwnerAmino): _61.DenomOwner;
                toAmino(message: _61.DenomOwner): _61.DenomOwnerAmino;
                fromAminoMsg(object: _61.DenomOwnerAminoMsg): _61.DenomOwner;
                toAminoMsg(message: _61.DenomOwner): _61.DenomOwnerAminoMsg;
                fromProtoMsg(message: _61.DenomOwnerProtoMsg): _61.DenomOwner;
                toProto(message: _61.DenomOwner): Uint8Array;
                toProtoMsg(message: _61.DenomOwner): _61.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _61.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_61.QueryDenomOwnersResponse>): _61.QueryDenomOwnersResponse;
                fromAmino(object: _61.QueryDenomOwnersResponseAmino): _61.QueryDenomOwnersResponse;
                toAmino(message: _61.QueryDenomOwnersResponse): _61.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _61.QueryDenomOwnersResponseAminoMsg): _61.QueryDenomOwnersResponse;
                toAminoMsg(message: _61.QueryDenomOwnersResponse): _61.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDenomOwnersResponseProtoMsg): _61.QueryDenomOwnersResponse;
                toProto(message: _61.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDenomOwnersResponse): _61.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _60.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
                fromAmino(object: _60.GenesisStateAmino): _60.GenesisState;
                toAmino(message: _60.GenesisState): _60.GenesisStateAmino;
                fromAminoMsg(object: _60.GenesisStateAminoMsg): _60.GenesisState;
                toAminoMsg(message: _60.GenesisState): _60.GenesisStateAminoMsg;
                fromProtoMsg(message: _60.GenesisStateProtoMsg): _60.GenesisState;
                toProto(message: _60.GenesisState): Uint8Array;
                toProtoMsg(message: _60.GenesisState): _60.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _60.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Balance;
                fromPartial(object: Partial<_60.Balance>): _60.Balance;
                fromAmino(object: _60.BalanceAmino): _60.Balance;
                toAmino(message: _60.Balance): _60.BalanceAmino;
                fromAminoMsg(object: _60.BalanceAminoMsg): _60.Balance;
                toAminoMsg(message: _60.Balance): _60.BalanceAminoMsg;
                fromProtoMsg(message: _60.BalanceProtoMsg): _60.Balance;
                toProto(message: _60.Balance): Uint8Array;
                toProtoMsg(message: _60.Balance): _60.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _59.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.Params;
                fromPartial(object: Partial<_59.Params>): _59.Params;
                fromAmino(object: _59.ParamsAmino): _59.Params;
                toAmino(message: _59.Params): _59.ParamsAmino;
                fromAminoMsg(object: _59.ParamsAminoMsg): _59.Params;
                toAminoMsg(message: _59.Params): _59.ParamsAminoMsg;
                fromProtoMsg(message: _59.ParamsProtoMsg): _59.Params;
                toProto(message: _59.Params): Uint8Array;
                toProtoMsg(message: _59.Params): _59.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _59.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.SendEnabled;
                fromPartial(object: Partial<_59.SendEnabled>): _59.SendEnabled;
                fromAmino(object: _59.SendEnabledAmino): _59.SendEnabled;
                toAmino(message: _59.SendEnabled): _59.SendEnabledAmino;
                fromAminoMsg(object: _59.SendEnabledAminoMsg): _59.SendEnabled;
                toAminoMsg(message: _59.SendEnabled): _59.SendEnabledAminoMsg;
                fromProtoMsg(message: _59.SendEnabledProtoMsg): _59.SendEnabled;
                toProto(message: _59.SendEnabled): Uint8Array;
                toProtoMsg(message: _59.SendEnabled): _59.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _59.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.Input;
                fromPartial(object: Partial<_59.Input>): _59.Input;
                fromAmino(object: _59.InputAmino): _59.Input;
                toAmino(message: _59.Input): _59.InputAmino;
                fromAminoMsg(object: _59.InputAminoMsg): _59.Input;
                toAminoMsg(message: _59.Input): _59.InputAminoMsg;
                fromProtoMsg(message: _59.InputProtoMsg): _59.Input;
                toProto(message: _59.Input): Uint8Array;
                toProtoMsg(message: _59.Input): _59.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _59.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.Output;
                fromPartial(object: Partial<_59.Output>): _59.Output;
                fromAmino(object: _59.OutputAmino): _59.Output;
                toAmino(message: _59.Output): _59.OutputAmino;
                fromAminoMsg(object: _59.OutputAminoMsg): _59.Output;
                toAminoMsg(message: _59.Output): _59.OutputAminoMsg;
                fromProtoMsg(message: _59.OutputProtoMsg): _59.Output;
                toProto(message: _59.Output): Uint8Array;
                toProtoMsg(message: _59.Output): _59.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _59.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.Supply;
                fromPartial(object: Partial<_59.Supply>): _59.Supply;
                fromAmino(object: _59.SupplyAmino): _59.Supply;
                toAmino(message: _59.Supply): _59.SupplyAmino;
                fromAminoMsg(object: _59.SupplyAminoMsg): _59.Supply;
                toAminoMsg(message: _59.Supply): _59.SupplyAminoMsg;
                fromProtoMsg(message: _59.SupplyProtoMsg): _59.Supply;
                toProto(message: _59.Supply): Uint8Array;
                toProtoMsg(message: _59.Supply): _59.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _59.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.DenomUnit;
                fromPartial(object: Partial<_59.DenomUnit>): _59.DenomUnit;
                fromAmino(object: _59.DenomUnitAmino): _59.DenomUnit;
                toAmino(message: _59.DenomUnit): _59.DenomUnitAmino;
                fromAminoMsg(object: _59.DenomUnitAminoMsg): _59.DenomUnit;
                toAminoMsg(message: _59.DenomUnit): _59.DenomUnitAminoMsg;
                fromProtoMsg(message: _59.DenomUnitProtoMsg): _59.DenomUnit;
                toProto(message: _59.DenomUnit): Uint8Array;
                toProtoMsg(message: _59.DenomUnit): _59.DenomUnitProtoMsg;
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
            SendAuthorization: {
                typeUrl: string;
                encode(message: _58.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.SendAuthorization;
                fromPartial(object: Partial<_58.SendAuthorization>): _58.SendAuthorization;
                fromAmino(object: _58.SendAuthorizationAmino): _58.SendAuthorization;
                toAmino(message: _58.SendAuthorization): _58.SendAuthorizationAmino;
                fromAminoMsg(object: _58.SendAuthorizationAminoMsg): _58.SendAuthorization;
                toAminoMsg(message: _58.SendAuthorization): _58.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _58.SendAuthorizationProtoMsg): _58.SendAuthorization;
                toProto(message: _58.SendAuthorization): Uint8Array;
                toProtoMsg(message: _58.SendAuthorization): _58.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _63.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.TxResponse;
                    fromPartial(object: Partial<_63.TxResponse>): _63.TxResponse;
                    fromAmino(object: _63.TxResponseAmino): _63.TxResponse;
                    toAmino(message: _63.TxResponse): _63.TxResponseAmino;
                    fromAminoMsg(object: _63.TxResponseAminoMsg): _63.TxResponse;
                    toAminoMsg(message: _63.TxResponse): _63.TxResponseAminoMsg;
                    fromProtoMsg(message: _63.TxResponseProtoMsg): _63.TxResponse;
                    toProto(message: _63.TxResponse): Uint8Array;
                    toProtoMsg(message: _63.TxResponse): _63.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _63.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.ABCIMessageLog;
                    fromPartial(object: Partial<_63.ABCIMessageLog>): _63.ABCIMessageLog;
                    fromAmino(object: _63.ABCIMessageLogAmino): _63.ABCIMessageLog;
                    toAmino(message: _63.ABCIMessageLog): _63.ABCIMessageLogAmino;
                    fromAminoMsg(object: _63.ABCIMessageLogAminoMsg): _63.ABCIMessageLog;
                    toAminoMsg(message: _63.ABCIMessageLog): _63.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _63.ABCIMessageLogProtoMsg): _63.ABCIMessageLog;
                    toProto(message: _63.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _63.ABCIMessageLog): _63.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _63.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.StringEvent;
                    fromPartial(object: Partial<_63.StringEvent>): _63.StringEvent;
                    fromAmino(object: _63.StringEventAmino): _63.StringEvent;
                    toAmino(message: _63.StringEvent): _63.StringEventAmino;
                    fromAminoMsg(object: _63.StringEventAminoMsg): _63.StringEvent;
                    toAminoMsg(message: _63.StringEvent): _63.StringEventAminoMsg;
                    fromProtoMsg(message: _63.StringEventProtoMsg): _63.StringEvent;
                    toProto(message: _63.StringEvent): Uint8Array;
                    toProtoMsg(message: _63.StringEvent): _63.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _63.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.Attribute;
                    fromPartial(object: Partial<_63.Attribute>): _63.Attribute;
                    fromAmino(object: _63.AttributeAmino): _63.Attribute;
                    toAmino(message: _63.Attribute): _63.AttributeAmino;
                    fromAminoMsg(object: _63.AttributeAminoMsg): _63.Attribute;
                    toAminoMsg(message: _63.Attribute): _63.AttributeAminoMsg;
                    fromProtoMsg(message: _63.AttributeProtoMsg): _63.Attribute;
                    toProto(message: _63.Attribute): Uint8Array;
                    toProtoMsg(message: _63.Attribute): _63.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _63.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GasInfo;
                    fromPartial(object: Partial<_63.GasInfo>): _63.GasInfo;
                    fromAmino(object: _63.GasInfoAmino): _63.GasInfo;
                    toAmino(message: _63.GasInfo): _63.GasInfoAmino;
                    fromAminoMsg(object: _63.GasInfoAminoMsg): _63.GasInfo;
                    toAminoMsg(message: _63.GasInfo): _63.GasInfoAminoMsg;
                    fromProtoMsg(message: _63.GasInfoProtoMsg): _63.GasInfo;
                    toProto(message: _63.GasInfo): Uint8Array;
                    toProtoMsg(message: _63.GasInfo): _63.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _63.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.Result;
                    fromPartial(object: Partial<_63.Result>): _63.Result;
                    fromAmino(object: _63.ResultAmino): _63.Result;
                    toAmino(message: _63.Result): _63.ResultAmino;
                    fromAminoMsg(object: _63.ResultAminoMsg): _63.Result;
                    toAminoMsg(message: _63.Result): _63.ResultAminoMsg;
                    fromProtoMsg(message: _63.ResultProtoMsg): _63.Result;
                    toProto(message: _63.Result): Uint8Array;
                    toProtoMsg(message: _63.Result): _63.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _63.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.SimulationResponse;
                    fromPartial(object: Partial<_63.SimulationResponse>): _63.SimulationResponse;
                    fromAmino(object: _63.SimulationResponseAmino): _63.SimulationResponse;
                    toAmino(message: _63.SimulationResponse): _63.SimulationResponseAmino;
                    fromAminoMsg(object: _63.SimulationResponseAminoMsg): _63.SimulationResponse;
                    toAminoMsg(message: _63.SimulationResponse): _63.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _63.SimulationResponseProtoMsg): _63.SimulationResponse;
                    toProto(message: _63.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _63.SimulationResponse): _63.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _63.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.MsgData;
                    fromPartial(object: Partial<_63.MsgData>): _63.MsgData;
                    fromAmino(object: _63.MsgDataAmino): _63.MsgData;
                    toAmino(message: _63.MsgData): _63.MsgDataAmino;
                    fromAminoMsg(object: _63.MsgDataAminoMsg): _63.MsgData;
                    toAminoMsg(message: _63.MsgData): _63.MsgDataAminoMsg;
                    fromProtoMsg(message: _63.MsgDataProtoMsg): _63.MsgData;
                    toProto(message: _63.MsgData): Uint8Array;
                    toProtoMsg(message: _63.MsgData): _63.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _63.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.TxMsgData;
                    fromPartial(object: Partial<_63.TxMsgData>): _63.TxMsgData;
                    fromAmino(object: _63.TxMsgDataAmino): _63.TxMsgData;
                    toAmino(message: _63.TxMsgData): _63.TxMsgDataAmino;
                    fromAminoMsg(object: _63.TxMsgDataAminoMsg): _63.TxMsgData;
                    toAminoMsg(message: _63.TxMsgData): _63.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _63.TxMsgDataProtoMsg): _63.TxMsgData;
                    toProto(message: _63.TxMsgData): Uint8Array;
                    toProtoMsg(message: _63.TxMsgData): _63.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _63.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.SearchTxsResult;
                    fromPartial(object: Partial<_63.SearchTxsResult>): _63.SearchTxsResult;
                    fromAmino(object: _63.SearchTxsResultAmino): _63.SearchTxsResult;
                    toAmino(message: _63.SearchTxsResult): _63.SearchTxsResultAmino;
                    fromAminoMsg(object: _63.SearchTxsResultAminoMsg): _63.SearchTxsResult;
                    toAminoMsg(message: _63.SearchTxsResult): _63.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _63.SearchTxsResultProtoMsg): _63.SearchTxsResult;
                    toProto(message: _63.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _63.SearchTxsResult): _63.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _64.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.Pairs;
                    fromPartial(object: Partial<_64.Pairs>): _64.Pairs;
                    fromAmino(object: _64.PairsAmino): _64.Pairs;
                    toAmino(message: _64.Pairs): _64.PairsAmino;
                    fromAminoMsg(object: _64.PairsAminoMsg): _64.Pairs;
                    toAminoMsg(message: _64.Pairs): _64.PairsAminoMsg;
                    fromProtoMsg(message: _64.PairsProtoMsg): _64.Pairs;
                    toProto(message: _64.Pairs): Uint8Array;
                    toProtoMsg(message: _64.Pairs): _64.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _64.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.Pair;
                    fromPartial(object: Partial<_64.Pair>): _64.Pair;
                    fromAmino(object: _64.PairAmino): _64.Pair;
                    toAmino(message: _64.Pair): _64.PairAmino;
                    fromAminoMsg(object: _64.PairAminoMsg): _64.Pair;
                    toAminoMsg(message: _64.Pair): _64.PairAminoMsg;
                    fromProtoMsg(message: _64.PairProtoMsg): _64.Pair;
                    toProto(message: _64.Pair): Uint8Array;
                    toProtoMsg(message: _64.Pair): _64.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _259.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _65.ConfigRequest): Promise<_65.ConfigResponse>;
                };
                LCDQueryClient: typeof _240.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _65.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _65.ConfigRequest;
                    fromPartial(_: Partial<_65.ConfigRequest>): _65.ConfigRequest;
                    fromAmino(_: _65.ConfigRequestAmino): _65.ConfigRequest;
                    toAmino(_: _65.ConfigRequest): _65.ConfigRequestAmino;
                    fromAminoMsg(object: _65.ConfigRequestAminoMsg): _65.ConfigRequest;
                    toAminoMsg(message: _65.ConfigRequest): _65.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _65.ConfigRequestProtoMsg): _65.ConfigRequest;
                    toProto(message: _65.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _65.ConfigRequest): _65.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _65.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.ConfigResponse;
                    fromPartial(object: Partial<_65.ConfigResponse>): _65.ConfigResponse;
                    fromAmino(object: _65.ConfigResponseAmino): _65.ConfigResponse;
                    toAmino(message: _65.ConfigResponse): _65.ConfigResponseAmino;
                    fromAminoMsg(object: _65.ConfigResponseAminoMsg): _65.ConfigResponse;
                    toAminoMsg(message: _65.ConfigResponse): _65.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _65.ConfigResponseProtoMsg): _65.ConfigResponse;
                    toProto(message: _65.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _65.ConfigResponse): _65.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _66.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.PageRequest;
                    fromPartial(object: Partial<_66.PageRequest>): _66.PageRequest;
                    fromAmino(object: _66.PageRequestAmino): _66.PageRequest;
                    toAmino(message: _66.PageRequest): _66.PageRequestAmino;
                    fromAminoMsg(object: _66.PageRequestAminoMsg): _66.PageRequest;
                    toAminoMsg(message: _66.PageRequest): _66.PageRequestAminoMsg;
                    fromProtoMsg(message: _66.PageRequestProtoMsg): _66.PageRequest;
                    toProto(message: _66.PageRequest): Uint8Array;
                    toProtoMsg(message: _66.PageRequest): _66.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _66.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.PageResponse;
                    fromPartial(object: Partial<_66.PageResponse>): _66.PageResponse;
                    fromAmino(object: _66.PageResponseAmino): _66.PageResponse;
                    toAmino(message: _66.PageResponse): _66.PageResponseAmino;
                    fromAminoMsg(object: _66.PageResponseAminoMsg): _66.PageResponse;
                    toAminoMsg(message: _66.PageResponse): _66.PageResponseAminoMsg;
                    fromProtoMsg(message: _66.PageResponseProtoMsg): _66.PageResponse;
                    toProto(message: _66.PageResponse): Uint8Array;
                    toProtoMsg(message: _66.PageResponse): _66.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _67.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _67.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_67.ListAllInterfacesRequest>): _67.ListAllInterfacesRequest;
                    fromAmino(_: _67.ListAllInterfacesRequestAmino): _67.ListAllInterfacesRequest;
                    toAmino(_: _67.ListAllInterfacesRequest): _67.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _67.ListAllInterfacesRequestAminoMsg): _67.ListAllInterfacesRequest;
                    toAminoMsg(message: _67.ListAllInterfacesRequest): _67.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _67.ListAllInterfacesRequestProtoMsg): _67.ListAllInterfacesRequest;
                    toProto(message: _67.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _67.ListAllInterfacesRequest): _67.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _67.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_67.ListAllInterfacesResponse>): _67.ListAllInterfacesResponse;
                    fromAmino(object: _67.ListAllInterfacesResponseAmino): _67.ListAllInterfacesResponse;
                    toAmino(message: _67.ListAllInterfacesResponse): _67.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _67.ListAllInterfacesResponseAminoMsg): _67.ListAllInterfacesResponse;
                    toAminoMsg(message: _67.ListAllInterfacesResponse): _67.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _67.ListAllInterfacesResponseProtoMsg): _67.ListAllInterfacesResponse;
                    toProto(message: _67.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _67.ListAllInterfacesResponse): _67.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _67.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.ListImplementationsRequest;
                    fromPartial(object: Partial<_67.ListImplementationsRequest>): _67.ListImplementationsRequest;
                    fromAmino(object: _67.ListImplementationsRequestAmino): _67.ListImplementationsRequest;
                    toAmino(message: _67.ListImplementationsRequest): _67.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _67.ListImplementationsRequestAminoMsg): _67.ListImplementationsRequest;
                    toAminoMsg(message: _67.ListImplementationsRequest): _67.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _67.ListImplementationsRequestProtoMsg): _67.ListImplementationsRequest;
                    toProto(message: _67.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _67.ListImplementationsRequest): _67.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _67.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.ListImplementationsResponse;
                    fromPartial(object: Partial<_67.ListImplementationsResponse>): _67.ListImplementationsResponse;
                    fromAmino(object: _67.ListImplementationsResponseAmino): _67.ListImplementationsResponse;
                    toAmino(message: _67.ListImplementationsResponse): _67.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _67.ListImplementationsResponseAminoMsg): _67.ListImplementationsResponse;
                    toAminoMsg(message: _67.ListImplementationsResponse): _67.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _67.ListImplementationsResponseProtoMsg): _67.ListImplementationsResponse;
                    toProto(message: _67.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _67.ListImplementationsResponse): _67.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _68.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.AppDescriptor;
                    fromPartial(object: Partial<_68.AppDescriptor>): _68.AppDescriptor;
                    fromAmino(object: _68.AppDescriptorAmino): _68.AppDescriptor;
                    toAmino(message: _68.AppDescriptor): _68.AppDescriptorAmino;
                    fromAminoMsg(object: _68.AppDescriptorAminoMsg): _68.AppDescriptor;
                    toAminoMsg(message: _68.AppDescriptor): _68.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _68.AppDescriptorProtoMsg): _68.AppDescriptor;
                    toProto(message: _68.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _68.AppDescriptor): _68.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _68.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.TxDescriptor;
                    fromPartial(object: Partial<_68.TxDescriptor>): _68.TxDescriptor;
                    fromAmino(object: _68.TxDescriptorAmino): _68.TxDescriptor;
                    toAmino(message: _68.TxDescriptor): _68.TxDescriptorAmino;
                    fromAminoMsg(object: _68.TxDescriptorAminoMsg): _68.TxDescriptor;
                    toAminoMsg(message: _68.TxDescriptor): _68.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _68.TxDescriptorProtoMsg): _68.TxDescriptor;
                    toProto(message: _68.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _68.TxDescriptor): _68.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _68.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.AuthnDescriptor;
                    fromPartial(object: Partial<_68.AuthnDescriptor>): _68.AuthnDescriptor;
                    fromAmino(object: _68.AuthnDescriptorAmino): _68.AuthnDescriptor;
                    toAmino(message: _68.AuthnDescriptor): _68.AuthnDescriptorAmino;
                    fromAminoMsg(object: _68.AuthnDescriptorAminoMsg): _68.AuthnDescriptor;
                    toAminoMsg(message: _68.AuthnDescriptor): _68.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _68.AuthnDescriptorProtoMsg): _68.AuthnDescriptor;
                    toProto(message: _68.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _68.AuthnDescriptor): _68.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _68.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.SigningModeDescriptor;
                    fromPartial(object: Partial<_68.SigningModeDescriptor>): _68.SigningModeDescriptor;
                    fromAmino(object: _68.SigningModeDescriptorAmino): _68.SigningModeDescriptor;
                    toAmino(message: _68.SigningModeDescriptor): _68.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _68.SigningModeDescriptorAminoMsg): _68.SigningModeDescriptor;
                    toAminoMsg(message: _68.SigningModeDescriptor): _68.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _68.SigningModeDescriptorProtoMsg): _68.SigningModeDescriptor;
                    toProto(message: _68.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _68.SigningModeDescriptor): _68.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _68.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.ChainDescriptor;
                    fromPartial(object: Partial<_68.ChainDescriptor>): _68.ChainDescriptor;
                    fromAmino(object: _68.ChainDescriptorAmino): _68.ChainDescriptor;
                    toAmino(message: _68.ChainDescriptor): _68.ChainDescriptorAmino;
                    fromAminoMsg(object: _68.ChainDescriptorAminoMsg): _68.ChainDescriptor;
                    toAminoMsg(message: _68.ChainDescriptor): _68.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _68.ChainDescriptorProtoMsg): _68.ChainDescriptor;
                    toProto(message: _68.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _68.ChainDescriptor): _68.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _68.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.CodecDescriptor;
                    fromPartial(object: Partial<_68.CodecDescriptor>): _68.CodecDescriptor;
                    fromAmino(object: _68.CodecDescriptorAmino): _68.CodecDescriptor;
                    toAmino(message: _68.CodecDescriptor): _68.CodecDescriptorAmino;
                    fromAminoMsg(object: _68.CodecDescriptorAminoMsg): _68.CodecDescriptor;
                    toAminoMsg(message: _68.CodecDescriptor): _68.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _68.CodecDescriptorProtoMsg): _68.CodecDescriptor;
                    toProto(message: _68.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _68.CodecDescriptor): _68.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _68.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.InterfaceDescriptor;
                    fromPartial(object: Partial<_68.InterfaceDescriptor>): _68.InterfaceDescriptor;
                    fromAmino(object: _68.InterfaceDescriptorAmino): _68.InterfaceDescriptor;
                    toAmino(message: _68.InterfaceDescriptor): _68.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _68.InterfaceDescriptorAminoMsg): _68.InterfaceDescriptor;
                    toAminoMsg(message: _68.InterfaceDescriptor): _68.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _68.InterfaceDescriptorProtoMsg): _68.InterfaceDescriptor;
                    toProto(message: _68.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _68.InterfaceDescriptor): _68.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _68.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_68.InterfaceImplementerDescriptor>): _68.InterfaceImplementerDescriptor;
                    fromAmino(object: _68.InterfaceImplementerDescriptorAmino): _68.InterfaceImplementerDescriptor;
                    toAmino(message: _68.InterfaceImplementerDescriptor): _68.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _68.InterfaceImplementerDescriptorAminoMsg): _68.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _68.InterfaceImplementerDescriptor): _68.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _68.InterfaceImplementerDescriptorProtoMsg): _68.InterfaceImplementerDescriptor;
                    toProto(message: _68.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _68.InterfaceImplementerDescriptor): _68.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _68.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_68.InterfaceAcceptingMessageDescriptor>): _68.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _68.InterfaceAcceptingMessageDescriptorAmino): _68.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _68.InterfaceAcceptingMessageDescriptor): _68.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _68.InterfaceAcceptingMessageDescriptorAminoMsg): _68.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _68.InterfaceAcceptingMessageDescriptor): _68.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _68.InterfaceAcceptingMessageDescriptorProtoMsg): _68.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _68.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _68.InterfaceAcceptingMessageDescriptor): _68.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _68.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.ConfigurationDescriptor;
                    fromPartial(object: Partial<_68.ConfigurationDescriptor>): _68.ConfigurationDescriptor;
                    fromAmino(object: _68.ConfigurationDescriptorAmino): _68.ConfigurationDescriptor;
                    toAmino(message: _68.ConfigurationDescriptor): _68.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _68.ConfigurationDescriptorAminoMsg): _68.ConfigurationDescriptor;
                    toAminoMsg(message: _68.ConfigurationDescriptor): _68.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _68.ConfigurationDescriptorProtoMsg): _68.ConfigurationDescriptor;
                    toProto(message: _68.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _68.ConfigurationDescriptor): _68.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _68.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.MsgDescriptor;
                    fromPartial(object: Partial<_68.MsgDescriptor>): _68.MsgDescriptor;
                    fromAmino(object: _68.MsgDescriptorAmino): _68.MsgDescriptor;
                    toAmino(message: _68.MsgDescriptor): _68.MsgDescriptorAmino;
                    fromAminoMsg(object: _68.MsgDescriptorAminoMsg): _68.MsgDescriptor;
                    toAminoMsg(message: _68.MsgDescriptor): _68.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _68.MsgDescriptorProtoMsg): _68.MsgDescriptor;
                    toProto(message: _68.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _68.MsgDescriptor): _68.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _68.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _68.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_68.GetAuthnDescriptorRequest>): _68.GetAuthnDescriptorRequest;
                    fromAmino(_: _68.GetAuthnDescriptorRequestAmino): _68.GetAuthnDescriptorRequest;
                    toAmino(_: _68.GetAuthnDescriptorRequest): _68.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _68.GetAuthnDescriptorRequestAminoMsg): _68.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _68.GetAuthnDescriptorRequest): _68.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _68.GetAuthnDescriptorRequestProtoMsg): _68.GetAuthnDescriptorRequest;
                    toProto(message: _68.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _68.GetAuthnDescriptorRequest): _68.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _68.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_68.GetAuthnDescriptorResponse>): _68.GetAuthnDescriptorResponse;
                    fromAmino(object: _68.GetAuthnDescriptorResponseAmino): _68.GetAuthnDescriptorResponse;
                    toAmino(message: _68.GetAuthnDescriptorResponse): _68.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _68.GetAuthnDescriptorResponseAminoMsg): _68.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _68.GetAuthnDescriptorResponse): _68.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _68.GetAuthnDescriptorResponseProtoMsg): _68.GetAuthnDescriptorResponse;
                    toProto(message: _68.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _68.GetAuthnDescriptorResponse): _68.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _68.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _68.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_68.GetChainDescriptorRequest>): _68.GetChainDescriptorRequest;
                    fromAmino(_: _68.GetChainDescriptorRequestAmino): _68.GetChainDescriptorRequest;
                    toAmino(_: _68.GetChainDescriptorRequest): _68.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _68.GetChainDescriptorRequestAminoMsg): _68.GetChainDescriptorRequest;
                    toAminoMsg(message: _68.GetChainDescriptorRequest): _68.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _68.GetChainDescriptorRequestProtoMsg): _68.GetChainDescriptorRequest;
                    toProto(message: _68.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _68.GetChainDescriptorRequest): _68.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _68.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_68.GetChainDescriptorResponse>): _68.GetChainDescriptorResponse;
                    fromAmino(object: _68.GetChainDescriptorResponseAmino): _68.GetChainDescriptorResponse;
                    toAmino(message: _68.GetChainDescriptorResponse): _68.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _68.GetChainDescriptorResponseAminoMsg): _68.GetChainDescriptorResponse;
                    toAminoMsg(message: _68.GetChainDescriptorResponse): _68.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _68.GetChainDescriptorResponseProtoMsg): _68.GetChainDescriptorResponse;
                    toProto(message: _68.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _68.GetChainDescriptorResponse): _68.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _68.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _68.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_68.GetCodecDescriptorRequest>): _68.GetCodecDescriptorRequest;
                    fromAmino(_: _68.GetCodecDescriptorRequestAmino): _68.GetCodecDescriptorRequest;
                    toAmino(_: _68.GetCodecDescriptorRequest): _68.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _68.GetCodecDescriptorRequestAminoMsg): _68.GetCodecDescriptorRequest;
                    toAminoMsg(message: _68.GetCodecDescriptorRequest): _68.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _68.GetCodecDescriptorRequestProtoMsg): _68.GetCodecDescriptorRequest;
                    toProto(message: _68.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _68.GetCodecDescriptorRequest): _68.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _68.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_68.GetCodecDescriptorResponse>): _68.GetCodecDescriptorResponse;
                    fromAmino(object: _68.GetCodecDescriptorResponseAmino): _68.GetCodecDescriptorResponse;
                    toAmino(message: _68.GetCodecDescriptorResponse): _68.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _68.GetCodecDescriptorResponseAminoMsg): _68.GetCodecDescriptorResponse;
                    toAminoMsg(message: _68.GetCodecDescriptorResponse): _68.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _68.GetCodecDescriptorResponseProtoMsg): _68.GetCodecDescriptorResponse;
                    toProto(message: _68.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _68.GetCodecDescriptorResponse): _68.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _68.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _68.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_68.GetConfigurationDescriptorRequest>): _68.GetConfigurationDescriptorRequest;
                    fromAmino(_: _68.GetConfigurationDescriptorRequestAmino): _68.GetConfigurationDescriptorRequest;
                    toAmino(_: _68.GetConfigurationDescriptorRequest): _68.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _68.GetConfigurationDescriptorRequestAminoMsg): _68.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _68.GetConfigurationDescriptorRequest): _68.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _68.GetConfigurationDescriptorRequestProtoMsg): _68.GetConfigurationDescriptorRequest;
                    toProto(message: _68.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _68.GetConfigurationDescriptorRequest): _68.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _68.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_68.GetConfigurationDescriptorResponse>): _68.GetConfigurationDescriptorResponse;
                    fromAmino(object: _68.GetConfigurationDescriptorResponseAmino): _68.GetConfigurationDescriptorResponse;
                    toAmino(message: _68.GetConfigurationDescriptorResponse): _68.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _68.GetConfigurationDescriptorResponseAminoMsg): _68.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _68.GetConfigurationDescriptorResponse): _68.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _68.GetConfigurationDescriptorResponseProtoMsg): _68.GetConfigurationDescriptorResponse;
                    toProto(message: _68.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _68.GetConfigurationDescriptorResponse): _68.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _68.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _68.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_68.GetQueryServicesDescriptorRequest>): _68.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _68.GetQueryServicesDescriptorRequestAmino): _68.GetQueryServicesDescriptorRequest;
                    toAmino(_: _68.GetQueryServicesDescriptorRequest): _68.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _68.GetQueryServicesDescriptorRequestAminoMsg): _68.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _68.GetQueryServicesDescriptorRequest): _68.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _68.GetQueryServicesDescriptorRequestProtoMsg): _68.GetQueryServicesDescriptorRequest;
                    toProto(message: _68.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _68.GetQueryServicesDescriptorRequest): _68.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _68.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_68.GetQueryServicesDescriptorResponse>): _68.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _68.GetQueryServicesDescriptorResponseAmino): _68.GetQueryServicesDescriptorResponse;
                    toAmino(message: _68.GetQueryServicesDescriptorResponse): _68.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _68.GetQueryServicesDescriptorResponseAminoMsg): _68.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _68.GetQueryServicesDescriptorResponse): _68.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _68.GetQueryServicesDescriptorResponseProtoMsg): _68.GetQueryServicesDescriptorResponse;
                    toProto(message: _68.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _68.GetQueryServicesDescriptorResponse): _68.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _68.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _68.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_68.GetTxDescriptorRequest>): _68.GetTxDescriptorRequest;
                    fromAmino(_: _68.GetTxDescriptorRequestAmino): _68.GetTxDescriptorRequest;
                    toAmino(_: _68.GetTxDescriptorRequest): _68.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _68.GetTxDescriptorRequestAminoMsg): _68.GetTxDescriptorRequest;
                    toAminoMsg(message: _68.GetTxDescriptorRequest): _68.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _68.GetTxDescriptorRequestProtoMsg): _68.GetTxDescriptorRequest;
                    toProto(message: _68.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _68.GetTxDescriptorRequest): _68.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _68.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_68.GetTxDescriptorResponse>): _68.GetTxDescriptorResponse;
                    fromAmino(object: _68.GetTxDescriptorResponseAmino): _68.GetTxDescriptorResponse;
                    toAmino(message: _68.GetTxDescriptorResponse): _68.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _68.GetTxDescriptorResponseAminoMsg): _68.GetTxDescriptorResponse;
                    toAminoMsg(message: _68.GetTxDescriptorResponse): _68.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _68.GetTxDescriptorResponseProtoMsg): _68.GetTxDescriptorResponse;
                    toProto(message: _68.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _68.GetTxDescriptorResponse): _68.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _68.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.QueryServicesDescriptor;
                    fromPartial(object: Partial<_68.QueryServicesDescriptor>): _68.QueryServicesDescriptor;
                    fromAmino(object: _68.QueryServicesDescriptorAmino): _68.QueryServicesDescriptor;
                    toAmino(message: _68.QueryServicesDescriptor): _68.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _68.QueryServicesDescriptorAminoMsg): _68.QueryServicesDescriptor;
                    toAminoMsg(message: _68.QueryServicesDescriptor): _68.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _68.QueryServicesDescriptorProtoMsg): _68.QueryServicesDescriptor;
                    toProto(message: _68.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _68.QueryServicesDescriptor): _68.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _68.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.QueryServiceDescriptor;
                    fromPartial(object: Partial<_68.QueryServiceDescriptor>): _68.QueryServiceDescriptor;
                    fromAmino(object: _68.QueryServiceDescriptorAmino): _68.QueryServiceDescriptor;
                    toAmino(message: _68.QueryServiceDescriptor): _68.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _68.QueryServiceDescriptorAminoMsg): _68.QueryServiceDescriptor;
                    toAminoMsg(message: _68.QueryServiceDescriptor): _68.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _68.QueryServiceDescriptorProtoMsg): _68.QueryServiceDescriptor;
                    toProto(message: _68.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _68.QueryServiceDescriptor): _68.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _68.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.QueryMethodDescriptor;
                    fromPartial(object: Partial<_68.QueryMethodDescriptor>): _68.QueryMethodDescriptor;
                    fromAmino(object: _68.QueryMethodDescriptorAmino): _68.QueryMethodDescriptor;
                    toAmino(message: _68.QueryMethodDescriptor): _68.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _68.QueryMethodDescriptorAminoMsg): _68.QueryMethodDescriptor;
                    toAminoMsg(message: _68.QueryMethodDescriptor): _68.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _68.QueryMethodDescriptorProtoMsg): _68.QueryMethodDescriptor;
                    toProto(message: _68.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _68.QueryMethodDescriptor): _68.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _69.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Snapshot;
                    fromPartial(object: Partial<_69.Snapshot>): _69.Snapshot;
                    fromAmino(object: _69.SnapshotAmino): _69.Snapshot;
                    toAmino(message: _69.Snapshot): _69.SnapshotAmino;
                    fromAminoMsg(object: _69.SnapshotAminoMsg): _69.Snapshot;
                    toAminoMsg(message: _69.Snapshot): _69.SnapshotAminoMsg;
                    fromProtoMsg(message: _69.SnapshotProtoMsg): _69.Snapshot;
                    toProto(message: _69.Snapshot): Uint8Array;
                    toProtoMsg(message: _69.Snapshot): _69.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _69.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Metadata;
                    fromPartial(object: Partial<_69.Metadata>): _69.Metadata;
                    fromAmino(object: _69.MetadataAmino): _69.Metadata;
                    toAmino(message: _69.Metadata): _69.MetadataAmino;
                    fromAminoMsg(object: _69.MetadataAminoMsg): _69.Metadata;
                    toAminoMsg(message: _69.Metadata): _69.MetadataAminoMsg;
                    fromProtoMsg(message: _69.MetadataProtoMsg): _69.Metadata;
                    toProto(message: _69.Metadata): Uint8Array;
                    toProtoMsg(message: _69.Metadata): _69.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _69.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.SnapshotItem;
                    fromPartial(object: Partial<_69.SnapshotItem>): _69.SnapshotItem;
                    fromAmino(object: _69.SnapshotItemAmino): _69.SnapshotItem;
                    toAmino(message: _69.SnapshotItem): _69.SnapshotItemAmino;
                    fromAminoMsg(object: _69.SnapshotItemAminoMsg): _69.SnapshotItem;
                    toAminoMsg(message: _69.SnapshotItem): _69.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _69.SnapshotItemProtoMsg): _69.SnapshotItem;
                    toProto(message: _69.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _69.SnapshotItem): _69.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _69.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.SnapshotStoreItem;
                    fromPartial(object: Partial<_69.SnapshotStoreItem>): _69.SnapshotStoreItem;
                    fromAmino(object: _69.SnapshotStoreItemAmino): _69.SnapshotStoreItem;
                    toAmino(message: _69.SnapshotStoreItem): _69.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _69.SnapshotStoreItemAminoMsg): _69.SnapshotStoreItem;
                    toAminoMsg(message: _69.SnapshotStoreItem): _69.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _69.SnapshotStoreItemProtoMsg): _69.SnapshotStoreItem;
                    toProto(message: _69.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _69.SnapshotStoreItem): _69.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _69.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.SnapshotIAVLItem;
                    fromPartial(object: Partial<_69.SnapshotIAVLItem>): _69.SnapshotIAVLItem;
                    fromAmino(object: _69.SnapshotIAVLItemAmino): _69.SnapshotIAVLItem;
                    toAmino(message: _69.SnapshotIAVLItem): _69.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _69.SnapshotIAVLItemAminoMsg): _69.SnapshotIAVLItem;
                    toAminoMsg(message: _69.SnapshotIAVLItem): _69.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _69.SnapshotIAVLItemProtoMsg): _69.SnapshotIAVLItem;
                    toProto(message: _69.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _69.SnapshotIAVLItem): _69.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _69.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_69.SnapshotExtensionMeta>): _69.SnapshotExtensionMeta;
                    fromAmino(object: _69.SnapshotExtensionMetaAmino): _69.SnapshotExtensionMeta;
                    toAmino(message: _69.SnapshotExtensionMeta): _69.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _69.SnapshotExtensionMetaAminoMsg): _69.SnapshotExtensionMeta;
                    toAminoMsg(message: _69.SnapshotExtensionMeta): _69.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _69.SnapshotExtensionMetaProtoMsg): _69.SnapshotExtensionMeta;
                    toProto(message: _69.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _69.SnapshotExtensionMeta): _69.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _69.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_69.SnapshotExtensionPayload>): _69.SnapshotExtensionPayload;
                    fromAmino(object: _69.SnapshotExtensionPayloadAmino): _69.SnapshotExtensionPayload;
                    toAmino(message: _69.SnapshotExtensionPayload): _69.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _69.SnapshotExtensionPayloadAminoMsg): _69.SnapshotExtensionPayload;
                    toAminoMsg(message: _69.SnapshotExtensionPayload): _69.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _69.SnapshotExtensionPayloadProtoMsg): _69.SnapshotExtensionPayload;
                    toProto(message: _69.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _69.SnapshotExtensionPayload): _69.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _69.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.SnapshotKVItem;
                    fromPartial(object: Partial<_69.SnapshotKVItem>): _69.SnapshotKVItem;
                    fromAmino(object: _69.SnapshotKVItemAmino): _69.SnapshotKVItem;
                    toAmino(message: _69.SnapshotKVItem): _69.SnapshotKVItemAmino;
                    fromAminoMsg(object: _69.SnapshotKVItemAminoMsg): _69.SnapshotKVItem;
                    toAminoMsg(message: _69.SnapshotKVItem): _69.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _69.SnapshotKVItemProtoMsg): _69.SnapshotKVItem;
                    toProto(message: _69.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _69.SnapshotKVItem): _69.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _69.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.SnapshotSchema;
                    fromPartial(object: Partial<_69.SnapshotSchema>): _69.SnapshotSchema;
                    fromAmino(object: _69.SnapshotSchemaAmino): _69.SnapshotSchema;
                    toAmino(message: _69.SnapshotSchema): _69.SnapshotSchemaAmino;
                    fromAminoMsg(object: _69.SnapshotSchemaAminoMsg): _69.SnapshotSchema;
                    toAminoMsg(message: _69.SnapshotSchema): _69.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _69.SnapshotSchemaProtoMsg): _69.SnapshotSchema;
                    toProto(message: _69.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _69.SnapshotSchema): _69.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _71.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.StoreKVPair;
                    fromPartial(object: Partial<_71.StoreKVPair>): _71.StoreKVPair;
                    fromAmino(object: _71.StoreKVPairAmino): _71.StoreKVPair;
                    toAmino(message: _71.StoreKVPair): _71.StoreKVPairAmino;
                    fromAminoMsg(object: _71.StoreKVPairAminoMsg): _71.StoreKVPair;
                    toAminoMsg(message: _71.StoreKVPair): _71.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _71.StoreKVPairProtoMsg): _71.StoreKVPair;
                    toProto(message: _71.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _71.StoreKVPair): _71.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _71.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.BlockMetadata;
                    fromPartial(object: Partial<_71.BlockMetadata>): _71.BlockMetadata;
                    fromAmino(object: _71.BlockMetadataAmino): _71.BlockMetadata;
                    toAmino(message: _71.BlockMetadata): _71.BlockMetadataAmino;
                    fromAminoMsg(object: _71.BlockMetadataAminoMsg): _71.BlockMetadata;
                    toAminoMsg(message: _71.BlockMetadata): _71.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _71.BlockMetadataProtoMsg): _71.BlockMetadata;
                    toProto(message: _71.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _71.BlockMetadata): _71.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _71.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_71.BlockMetadata_DeliverTx>): _71.BlockMetadata_DeliverTx;
                    fromAmino(object: _71.BlockMetadata_DeliverTxAmino): _71.BlockMetadata_DeliverTx;
                    toAmino(message: _71.BlockMetadata_DeliverTx): _71.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _71.BlockMetadata_DeliverTxAminoMsg): _71.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _71.BlockMetadata_DeliverTx): _71.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _71.BlockMetadata_DeliverTxProtoMsg): _71.BlockMetadata_DeliverTx;
                    toProto(message: _71.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _71.BlockMetadata_DeliverTx): _71.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _70.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.CommitInfo;
                    fromPartial(object: Partial<_70.CommitInfo>): _70.CommitInfo;
                    fromAmino(object: _70.CommitInfoAmino): _70.CommitInfo;
                    toAmino(message: _70.CommitInfo): _70.CommitInfoAmino;
                    fromAminoMsg(object: _70.CommitInfoAminoMsg): _70.CommitInfo;
                    toAminoMsg(message: _70.CommitInfo): _70.CommitInfoAminoMsg;
                    fromProtoMsg(message: _70.CommitInfoProtoMsg): _70.CommitInfo;
                    toProto(message: _70.CommitInfo): Uint8Array;
                    toProtoMsg(message: _70.CommitInfo): _70.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _70.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.StoreInfo;
                    fromPartial(object: Partial<_70.StoreInfo>): _70.StoreInfo;
                    fromAmino(object: _70.StoreInfoAmino): _70.StoreInfo;
                    toAmino(message: _70.StoreInfo): _70.StoreInfoAmino;
                    fromAminoMsg(object: _70.StoreInfoAminoMsg): _70.StoreInfo;
                    toAminoMsg(message: _70.StoreInfo): _70.StoreInfoAminoMsg;
                    fromProtoMsg(message: _70.StoreInfoProtoMsg): _70.StoreInfo;
                    toProto(message: _70.StoreInfo): Uint8Array;
                    toProtoMsg(message: _70.StoreInfo): _70.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _70.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.CommitID;
                    fromPartial(object: Partial<_70.CommitID>): _70.CommitID;
                    fromAmino(object: _70.CommitIDAmino): _70.CommitID;
                    toAmino(message: _70.CommitID): _70.CommitIDAmino;
                    fromAminoMsg(object: _70.CommitIDAminoMsg): _70.CommitID;
                    toAminoMsg(message: _70.CommitID): _70.CommitIDAminoMsg;
                    fromProtoMsg(message: _70.CommitIDProtoMsg): _70.CommitID;
                    toProto(message: _70.CommitID): Uint8Array;
                    toProtoMsg(message: _70.CommitID): _70.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _260.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _72.GetNodeInfoRequest): Promise<_72.GetNodeInfoResponse>;
                    getSyncing(request?: _72.GetSyncingRequest): Promise<_72.GetSyncingResponse>;
                    getLatestBlock(request?: _72.GetLatestBlockRequest): Promise<_72.GetLatestBlockResponse>;
                    getBlockByHeight(request: _72.GetBlockByHeightRequest): Promise<_72.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _72.GetLatestValidatorSetRequest): Promise<_72.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _72.GetValidatorSetByHeightRequest): Promise<_72.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _72.ABCIQueryRequest): Promise<_72.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _241.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _73.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.Block;
                    fromPartial(object: Partial<_73.Block>): _73.Block;
                    fromAmino(object: _73.BlockAmino): _73.Block;
                    toAmino(message: _73.Block): _73.BlockAmino;
                    fromAminoMsg(object: _73.BlockAminoMsg): _73.Block;
                    toAminoMsg(message: _73.Block): _73.BlockAminoMsg;
                    fromProtoMsg(message: _73.BlockProtoMsg): _73.Block;
                    toProto(message: _73.Block): Uint8Array;
                    toProtoMsg(message: _73.Block): _73.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _73.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.Header;
                    fromPartial(object: Partial<_73.Header>): _73.Header;
                    fromAmino(object: _73.HeaderAmino): _73.Header;
                    toAmino(message: _73.Header): _73.HeaderAmino;
                    fromAminoMsg(object: _73.HeaderAminoMsg): _73.Header;
                    toAminoMsg(message: _73.Header): _73.HeaderAminoMsg;
                    fromProtoMsg(message: _73.HeaderProtoMsg): _73.Header;
                    toProto(message: _73.Header): Uint8Array;
                    toProtoMsg(message: _73.Header): _73.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _72.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_72.GetValidatorSetByHeightRequest>): _72.GetValidatorSetByHeightRequest;
                    fromAmino(object: _72.GetValidatorSetByHeightRequestAmino): _72.GetValidatorSetByHeightRequest;
                    toAmino(message: _72.GetValidatorSetByHeightRequest): _72.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _72.GetValidatorSetByHeightRequestAminoMsg): _72.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _72.GetValidatorSetByHeightRequest): _72.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _72.GetValidatorSetByHeightRequestProtoMsg): _72.GetValidatorSetByHeightRequest;
                    toProto(message: _72.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _72.GetValidatorSetByHeightRequest): _72.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _72.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_72.GetValidatorSetByHeightResponse>): _72.GetValidatorSetByHeightResponse;
                    fromAmino(object: _72.GetValidatorSetByHeightResponseAmino): _72.GetValidatorSetByHeightResponse;
                    toAmino(message: _72.GetValidatorSetByHeightResponse): _72.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _72.GetValidatorSetByHeightResponseAminoMsg): _72.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _72.GetValidatorSetByHeightResponse): _72.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _72.GetValidatorSetByHeightResponseProtoMsg): _72.GetValidatorSetByHeightResponse;
                    toProto(message: _72.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _72.GetValidatorSetByHeightResponse): _72.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _72.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_72.GetLatestValidatorSetRequest>): _72.GetLatestValidatorSetRequest;
                    fromAmino(object: _72.GetLatestValidatorSetRequestAmino): _72.GetLatestValidatorSetRequest;
                    toAmino(message: _72.GetLatestValidatorSetRequest): _72.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _72.GetLatestValidatorSetRequestAminoMsg): _72.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _72.GetLatestValidatorSetRequest): _72.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _72.GetLatestValidatorSetRequestProtoMsg): _72.GetLatestValidatorSetRequest;
                    toProto(message: _72.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _72.GetLatestValidatorSetRequest): _72.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _72.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_72.GetLatestValidatorSetResponse>): _72.GetLatestValidatorSetResponse;
                    fromAmino(object: _72.GetLatestValidatorSetResponseAmino): _72.GetLatestValidatorSetResponse;
                    toAmino(message: _72.GetLatestValidatorSetResponse): _72.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _72.GetLatestValidatorSetResponseAminoMsg): _72.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _72.GetLatestValidatorSetResponse): _72.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _72.GetLatestValidatorSetResponseProtoMsg): _72.GetLatestValidatorSetResponse;
                    toProto(message: _72.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _72.GetLatestValidatorSetResponse): _72.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _72.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.Validator;
                    fromPartial(object: Partial<_72.Validator>): _72.Validator;
                    fromAmino(object: _72.ValidatorAmino): _72.Validator;
                    toAmino(message: _72.Validator): _72.ValidatorAmino;
                    fromAminoMsg(object: _72.ValidatorAminoMsg): _72.Validator;
                    toAminoMsg(message: _72.Validator): _72.ValidatorAminoMsg;
                    fromProtoMsg(message: _72.ValidatorProtoMsg): _72.Validator;
                    toProto(message: _72.Validator): Uint8Array;
                    toProtoMsg(message: _72.Validator): _72.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _72.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_72.GetBlockByHeightRequest>): _72.GetBlockByHeightRequest;
                    fromAmino(object: _72.GetBlockByHeightRequestAmino): _72.GetBlockByHeightRequest;
                    toAmino(message: _72.GetBlockByHeightRequest): _72.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _72.GetBlockByHeightRequestAminoMsg): _72.GetBlockByHeightRequest;
                    toAminoMsg(message: _72.GetBlockByHeightRequest): _72.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _72.GetBlockByHeightRequestProtoMsg): _72.GetBlockByHeightRequest;
                    toProto(message: _72.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _72.GetBlockByHeightRequest): _72.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _72.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_72.GetBlockByHeightResponse>): _72.GetBlockByHeightResponse;
                    fromAmino(object: _72.GetBlockByHeightResponseAmino): _72.GetBlockByHeightResponse;
                    toAmino(message: _72.GetBlockByHeightResponse): _72.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _72.GetBlockByHeightResponseAminoMsg): _72.GetBlockByHeightResponse;
                    toAminoMsg(message: _72.GetBlockByHeightResponse): _72.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _72.GetBlockByHeightResponseProtoMsg): _72.GetBlockByHeightResponse;
                    toProto(message: _72.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _72.GetBlockByHeightResponse): _72.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _72.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _72.GetLatestBlockRequest;
                    fromPartial(_: Partial<_72.GetLatestBlockRequest>): _72.GetLatestBlockRequest;
                    fromAmino(_: _72.GetLatestBlockRequestAmino): _72.GetLatestBlockRequest;
                    toAmino(_: _72.GetLatestBlockRequest): _72.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _72.GetLatestBlockRequestAminoMsg): _72.GetLatestBlockRequest;
                    toAminoMsg(message: _72.GetLatestBlockRequest): _72.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _72.GetLatestBlockRequestProtoMsg): _72.GetLatestBlockRequest;
                    toProto(message: _72.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _72.GetLatestBlockRequest): _72.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _72.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.GetLatestBlockResponse;
                    fromPartial(object: Partial<_72.GetLatestBlockResponse>): _72.GetLatestBlockResponse;
                    fromAmino(object: _72.GetLatestBlockResponseAmino): _72.GetLatestBlockResponse;
                    toAmino(message: _72.GetLatestBlockResponse): _72.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _72.GetLatestBlockResponseAminoMsg): _72.GetLatestBlockResponse;
                    toAminoMsg(message: _72.GetLatestBlockResponse): _72.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _72.GetLatestBlockResponseProtoMsg): _72.GetLatestBlockResponse;
                    toProto(message: _72.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _72.GetLatestBlockResponse): _72.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _72.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _72.GetSyncingRequest;
                    fromPartial(_: Partial<_72.GetSyncingRequest>): _72.GetSyncingRequest;
                    fromAmino(_: _72.GetSyncingRequestAmino): _72.GetSyncingRequest;
                    toAmino(_: _72.GetSyncingRequest): _72.GetSyncingRequestAmino;
                    fromAminoMsg(object: _72.GetSyncingRequestAminoMsg): _72.GetSyncingRequest;
                    toAminoMsg(message: _72.GetSyncingRequest): _72.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _72.GetSyncingRequestProtoMsg): _72.GetSyncingRequest;
                    toProto(message: _72.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _72.GetSyncingRequest): _72.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _72.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.GetSyncingResponse;
                    fromPartial(object: Partial<_72.GetSyncingResponse>): _72.GetSyncingResponse;
                    fromAmino(object: _72.GetSyncingResponseAmino): _72.GetSyncingResponse;
                    toAmino(message: _72.GetSyncingResponse): _72.GetSyncingResponseAmino;
                    fromAminoMsg(object: _72.GetSyncingResponseAminoMsg): _72.GetSyncingResponse;
                    toAminoMsg(message: _72.GetSyncingResponse): _72.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _72.GetSyncingResponseProtoMsg): _72.GetSyncingResponse;
                    toProto(message: _72.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _72.GetSyncingResponse): _72.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _72.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _72.GetNodeInfoRequest;
                    fromPartial(_: Partial<_72.GetNodeInfoRequest>): _72.GetNodeInfoRequest;
                    fromAmino(_: _72.GetNodeInfoRequestAmino): _72.GetNodeInfoRequest;
                    toAmino(_: _72.GetNodeInfoRequest): _72.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _72.GetNodeInfoRequestAminoMsg): _72.GetNodeInfoRequest;
                    toAminoMsg(message: _72.GetNodeInfoRequest): _72.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _72.GetNodeInfoRequestProtoMsg): _72.GetNodeInfoRequest;
                    toProto(message: _72.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _72.GetNodeInfoRequest): _72.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _72.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.GetNodeInfoResponse;
                    fromPartial(object: Partial<_72.GetNodeInfoResponse>): _72.GetNodeInfoResponse;
                    fromAmino(object: _72.GetNodeInfoResponseAmino): _72.GetNodeInfoResponse;
                    toAmino(message: _72.GetNodeInfoResponse): _72.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _72.GetNodeInfoResponseAminoMsg): _72.GetNodeInfoResponse;
                    toAminoMsg(message: _72.GetNodeInfoResponse): _72.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _72.GetNodeInfoResponseProtoMsg): _72.GetNodeInfoResponse;
                    toProto(message: _72.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _72.GetNodeInfoResponse): _72.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _72.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.VersionInfo;
                    fromPartial(object: Partial<_72.VersionInfo>): _72.VersionInfo;
                    fromAmino(object: _72.VersionInfoAmino): _72.VersionInfo;
                    toAmino(message: _72.VersionInfo): _72.VersionInfoAmino;
                    fromAminoMsg(object: _72.VersionInfoAminoMsg): _72.VersionInfo;
                    toAminoMsg(message: _72.VersionInfo): _72.VersionInfoAminoMsg;
                    fromProtoMsg(message: _72.VersionInfoProtoMsg): _72.VersionInfo;
                    toProto(message: _72.VersionInfo): Uint8Array;
                    toProtoMsg(message: _72.VersionInfo): _72.VersionInfoProtoMsg;
                };
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
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _72.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.ABCIQueryRequest;
                    fromPartial(object: Partial<_72.ABCIQueryRequest>): _72.ABCIQueryRequest;
                    fromAmino(object: _72.ABCIQueryRequestAmino): _72.ABCIQueryRequest;
                    toAmino(message: _72.ABCIQueryRequest): _72.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _72.ABCIQueryRequestAminoMsg): _72.ABCIQueryRequest;
                    toAminoMsg(message: _72.ABCIQueryRequest): _72.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _72.ABCIQueryRequestProtoMsg): _72.ABCIQueryRequest;
                    toProto(message: _72.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _72.ABCIQueryRequest): _72.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _72.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.ABCIQueryResponse;
                    fromPartial(object: Partial<_72.ABCIQueryResponse>): _72.ABCIQueryResponse;
                    fromAmino(object: _72.ABCIQueryResponseAmino): _72.ABCIQueryResponse;
                    toAmino(message: _72.ABCIQueryResponse): _72.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _72.ABCIQueryResponseAminoMsg): _72.ABCIQueryResponse;
                    toAminoMsg(message: _72.ABCIQueryResponse): _72.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _72.ABCIQueryResponseProtoMsg): _72.ABCIQueryResponse;
                    toProto(message: _72.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _72.ABCIQueryResponse): _72.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _72.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.ProofOp;
                    fromPartial(object: Partial<_72.ProofOp>): _72.ProofOp;
                    fromAmino(object: _72.ProofOpAmino): _72.ProofOp;
                    toAmino(message: _72.ProofOp): _72.ProofOpAmino;
                    fromAminoMsg(object: _72.ProofOpAminoMsg): _72.ProofOp;
                    toAminoMsg(message: _72.ProofOp): _72.ProofOpAminoMsg;
                    fromProtoMsg(message: _72.ProofOpProtoMsg): _72.ProofOp;
                    toProto(message: _72.ProofOp): Uint8Array;
                    toProtoMsg(message: _72.ProofOp): _72.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _72.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.ProofOps;
                    fromPartial(object: Partial<_72.ProofOps>): _72.ProofOps;
                    fromAmino(object: _72.ProofOpsAmino): _72.ProofOps;
                    toAmino(message: _72.ProofOps): _72.ProofOpsAmino;
                    fromAminoMsg(object: _72.ProofOpsAminoMsg): _72.ProofOps;
                    toAminoMsg(message: _72.ProofOps): _72.ProofOpsAminoMsg;
                    fromProtoMsg(message: _72.ProofOpsProtoMsg): _72.ProofOps;
                    toProto(message: _72.ProofOps): Uint8Array;
                    toProtoMsg(message: _72.ProofOps): _72.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _74.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Coin;
                fromPartial(object: Partial<_74.Coin>): _74.Coin;
                fromAmino(object: _74.CoinAmino): _74.Coin;
                toAmino(message: _74.Coin): _74.CoinAmino;
                fromAminoMsg(object: _74.CoinAminoMsg): _74.Coin;
                toAminoMsg(message: _74.Coin): _74.CoinAminoMsg;
                fromProtoMsg(message: _74.CoinProtoMsg): _74.Coin;
                toProto(message: _74.Coin): Uint8Array;
                toProtoMsg(message: _74.Coin): _74.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _74.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.DecCoin;
                fromPartial(object: Partial<_74.DecCoin>): _74.DecCoin;
                fromAmino(object: _74.DecCoinAmino): _74.DecCoin;
                toAmino(message: _74.DecCoin): _74.DecCoinAmino;
                fromAminoMsg(object: _74.DecCoinAminoMsg): _74.DecCoin;
                toAminoMsg(message: _74.DecCoin): _74.DecCoinAminoMsg;
                fromProtoMsg(message: _74.DecCoinProtoMsg): _74.DecCoin;
                toProto(message: _74.DecCoin): Uint8Array;
                toProtoMsg(message: _74.DecCoin): _74.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _74.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.IntProto;
                fromPartial(object: Partial<_74.IntProto>): _74.IntProto;
                fromAmino(object: _74.IntProtoAmino): _74.IntProto;
                toAmino(message: _74.IntProto): _74.IntProtoAmino;
                fromAminoMsg(object: _74.IntProtoAminoMsg): _74.IntProto;
                toAminoMsg(message: _74.IntProto): _74.IntProtoAminoMsg;
                fromProtoMsg(message: _74.IntProtoProtoMsg): _74.IntProto;
                toProto(message: _74.IntProto): Uint8Array;
                toProtoMsg(message: _74.IntProto): _74.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _74.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.DecProto;
                fromPartial(object: Partial<_74.DecProto>): _74.DecProto;
                fromAmino(object: _74.DecProtoAmino): _74.DecProto;
                toAmino(message: _74.DecProto): _74.DecProtoAmino;
                fromAminoMsg(object: _74.DecProtoAminoMsg): _74.DecProto;
                toAminoMsg(message: _74.DecProto): _74.DecProtoAminoMsg;
                fromProtoMsg(message: _74.DecProtoProtoMsg): _74.DecProto;
                toProto(message: _74.DecProto): Uint8Array;
                toProtoMsg(message: _74.DecProto): _74.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _76.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.GenesisOwners;
                fromPartial(object: Partial<_76.GenesisOwners>): _76.GenesisOwners;
                fromAmino(object: _76.GenesisOwnersAmino): _76.GenesisOwners;
                toAmino(message: _76.GenesisOwners): _76.GenesisOwnersAmino;
                fromAminoMsg(object: _76.GenesisOwnersAminoMsg): _76.GenesisOwners;
                toAminoMsg(message: _76.GenesisOwners): _76.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _76.GenesisOwnersProtoMsg): _76.GenesisOwners;
                toProto(message: _76.GenesisOwners): Uint8Array;
                toProtoMsg(message: _76.GenesisOwners): _76.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _75.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Capability;
                fromPartial(object: Partial<_75.Capability>): _75.Capability;
                fromAmino(object: _75.CapabilityAmino): _75.Capability;
                toAmino(message: _75.Capability): _75.CapabilityAmino;
                fromAminoMsg(object: _75.CapabilityAminoMsg): _75.Capability;
                toAminoMsg(message: _75.Capability): _75.CapabilityAminoMsg;
                fromProtoMsg(message: _75.CapabilityProtoMsg): _75.Capability;
                toProto(message: _75.Capability): Uint8Array;
                toProtoMsg(message: _75.Capability): _75.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _75.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Owner;
                fromPartial(object: Partial<_75.Owner>): _75.Owner;
                fromAmino(object: _75.OwnerAmino): _75.Owner;
                toAmino(message: _75.Owner): _75.OwnerAmino;
                fromAminoMsg(object: _75.OwnerAminoMsg): _75.Owner;
                toAminoMsg(message: _75.Owner): _75.OwnerAminoMsg;
                fromProtoMsg(message: _75.OwnerProtoMsg): _75.Owner;
                toProto(message: _75.Owner): Uint8Array;
                toProtoMsg(message: _75.Owner): _75.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _75.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.CapabilityOwners;
                fromPartial(object: Partial<_75.CapabilityOwners>): _75.CapabilityOwners;
                fromAmino(object: _75.CapabilityOwnersAmino): _75.CapabilityOwners;
                toAmino(message: _75.CapabilityOwners): _75.CapabilityOwnersAmino;
                fromAminoMsg(object: _75.CapabilityOwnersAminoMsg): _75.CapabilityOwners;
                toAminoMsg(message: _75.CapabilityOwners): _75.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _75.CapabilityOwnersProtoMsg): _75.CapabilityOwners;
                toProto(message: _75.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _75.CapabilityOwners): _75.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _276.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _78.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _78.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _78.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _78.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _78.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _78.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _78.MsgVerifyInvariant) => _78.MsgVerifyInvariantAmino;
                    fromAmino: (object: _78.MsgVerifyInvariantAmino) => _78.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _78.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgVerifyInvariant;
                fromPartial(object: Partial<_78.MsgVerifyInvariant>): _78.MsgVerifyInvariant;
                fromAmino(object: _78.MsgVerifyInvariantAmino): _78.MsgVerifyInvariant;
                toAmino(message: _78.MsgVerifyInvariant): _78.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _78.MsgVerifyInvariantAminoMsg): _78.MsgVerifyInvariant;
                toAminoMsg(message: _78.MsgVerifyInvariant): _78.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _78.MsgVerifyInvariantProtoMsg): _78.MsgVerifyInvariant;
                toProto(message: _78.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _78.MsgVerifyInvariant): _78.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _78.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_78.MsgVerifyInvariantResponse>): _78.MsgVerifyInvariantResponse;
                fromAmino(_: _78.MsgVerifyInvariantResponseAmino): _78.MsgVerifyInvariantResponse;
                toAmino(_: _78.MsgVerifyInvariantResponse): _78.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _78.MsgVerifyInvariantResponseAminoMsg): _78.MsgVerifyInvariantResponse;
                toAminoMsg(message: _78.MsgVerifyInvariantResponse): _78.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _78.MsgVerifyInvariantResponseProtoMsg): _78.MsgVerifyInvariantResponse;
                toProto(message: _78.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _78.MsgVerifyInvariantResponse): _78.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _80.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.BIP44Params;
                    fromPartial(object: Partial<_80.BIP44Params>): _80.BIP44Params;
                    fromAmino(object: _80.BIP44ParamsAmino): _80.BIP44Params;
                    toAmino(message: _80.BIP44Params): _80.BIP44ParamsAmino;
                    fromAminoMsg(object: _80.BIP44ParamsAminoMsg): _80.BIP44Params;
                    toAminoMsg(message: _80.BIP44Params): _80.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _80.BIP44ParamsProtoMsg): _80.BIP44Params;
                    toProto(message: _80.BIP44Params): Uint8Array;
                    toProtoMsg(message: _80.BIP44Params): _80.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _81.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.Record;
                    fromPartial(object: Partial<_81.Record>): _81.Record;
                    fromAmino(object: _81.RecordAmino): _81.Record;
                    toAmino(message: _81.Record): _81.RecordAmino;
                    fromAminoMsg(object: _81.RecordAminoMsg): _81.Record;
                    toAminoMsg(message: _81.Record): _81.RecordAminoMsg;
                    fromProtoMsg(message: _81.RecordProtoMsg): _81.Record;
                    toProto(message: _81.Record): Uint8Array;
                    toProtoMsg(message: _81.Record): _81.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _81.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.Record_Local;
                    fromPartial(object: Partial<_81.Record_Local>): _81.Record_Local;
                    fromAmino(object: _81.Record_LocalAmino): _81.Record_Local;
                    toAmino(message: _81.Record_Local): _81.Record_LocalAmino;
                    fromAminoMsg(object: _81.Record_LocalAminoMsg): _81.Record_Local;
                    toAminoMsg(message: _81.Record_Local): _81.Record_LocalAminoMsg;
                    fromProtoMsg(message: _81.Record_LocalProtoMsg): _81.Record_Local;
                    toProto(message: _81.Record_Local): Uint8Array;
                    toProtoMsg(message: _81.Record_Local): _81.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _81.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.Record_Ledger;
                    fromPartial(object: Partial<_81.Record_Ledger>): _81.Record_Ledger;
                    fromAmino(object: _81.Record_LedgerAmino): _81.Record_Ledger;
                    toAmino(message: _81.Record_Ledger): _81.Record_LedgerAmino;
                    fromAminoMsg(object: _81.Record_LedgerAminoMsg): _81.Record_Ledger;
                    toAminoMsg(message: _81.Record_Ledger): _81.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _81.Record_LedgerProtoMsg): _81.Record_Ledger;
                    toProto(message: _81.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _81.Record_Ledger): _81.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _81.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.Record_Multi;
                    fromPartial(_: Partial<_81.Record_Multi>): _81.Record_Multi;
                    fromAmino(_: _81.Record_MultiAmino): _81.Record_Multi;
                    toAmino(_: _81.Record_Multi): _81.Record_MultiAmino;
                    fromAminoMsg(object: _81.Record_MultiAminoMsg): _81.Record_Multi;
                    toAminoMsg(message: _81.Record_Multi): _81.Record_MultiAminoMsg;
                    fromProtoMsg(message: _81.Record_MultiProtoMsg): _81.Record_Multi;
                    toProto(message: _81.Record_Multi): Uint8Array;
                    toProtoMsg(message: _81.Record_Multi): _81.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _81.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.Record_Offline;
                    fromPartial(_: Partial<_81.Record_Offline>): _81.Record_Offline;
                    fromAmino(_: _81.Record_OfflineAmino): _81.Record_Offline;
                    toAmino(_: _81.Record_Offline): _81.Record_OfflineAmino;
                    fromAminoMsg(object: _81.Record_OfflineAminoMsg): _81.Record_Offline;
                    toAminoMsg(message: _81.Record_Offline): _81.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _81.Record_OfflineProtoMsg): _81.Record_Offline;
                    toProto(message: _81.Record_Offline): Uint8Array;
                    toProtoMsg(message: _81.Record_Offline): _81.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _82.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.LegacyAminoPubKey;
                fromPartial(object: Partial<_82.LegacyAminoPubKey>): _82.LegacyAminoPubKey;
                fromAmino(object: _82.LegacyAminoPubKeyAmino): _82.LegacyAminoPubKey;
                toAmino(message: _82.LegacyAminoPubKey): _82.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _82.LegacyAminoPubKeyAminoMsg): _82.LegacyAminoPubKey;
                toAminoMsg(message: _82.LegacyAminoPubKey): _82.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _82.LegacyAminoPubKeyProtoMsg): _82.LegacyAminoPubKey;
                toProto(message: _82.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _82.LegacyAminoPubKey): _82.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _83.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.PubKey;
                fromPartial(object: Partial<_83.PubKey>): _83.PubKey;
                fromAmino(object: _83.PubKeyAmino): _83.PubKey;
                toAmino(message: _83.PubKey): _83.PubKeyAmino;
                fromAminoMsg(object: _83.PubKeyAminoMsg): _83.PubKey;
                toAminoMsg(message: _83.PubKey): _83.PubKeyAminoMsg;
                fromProtoMsg(message: _83.PubKeyProtoMsg): _83.PubKey;
                toProto(message: _83.PubKey): Uint8Array;
                toProtoMsg(message: _83.PubKey): _83.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _83.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.PrivKey;
                fromPartial(object: Partial<_83.PrivKey>): _83.PrivKey;
                fromAmino(object: _83.PrivKeyAmino): _83.PrivKey;
                toAmino(message: _83.PrivKey): _83.PrivKeyAmino;
                fromAminoMsg(object: _83.PrivKeyAminoMsg): _83.PrivKey;
                toAminoMsg(message: _83.PrivKey): _83.PrivKeyAminoMsg;
                fromProtoMsg(message: _83.PrivKeyProtoMsg): _83.PrivKey;
                toProto(message: _83.PrivKey): Uint8Array;
                toProtoMsg(message: _83.PrivKey): _83.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _84.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.PubKey;
                fromPartial(object: Partial<_84.PubKey>): _84.PubKey;
                fromAmino(object: _84.PubKeyAmino): _84.PubKey;
                toAmino(message: _84.PubKey): _84.PubKeyAmino;
                fromAminoMsg(object: _84.PubKeyAminoMsg): _84.PubKey;
                toAminoMsg(message: _84.PubKey): _84.PubKeyAminoMsg;
                fromProtoMsg(message: _84.PubKeyProtoMsg): _84.PubKey;
                toProto(message: _84.PubKey): Uint8Array;
                toProtoMsg(message: _84.PubKey): _84.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _84.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.PrivKey;
                fromPartial(object: Partial<_84.PrivKey>): _84.PrivKey;
                fromAmino(object: _84.PrivKeyAmino): _84.PrivKey;
                toAmino(message: _84.PrivKey): _84.PrivKeyAmino;
                fromAminoMsg(object: _84.PrivKeyAminoMsg): _84.PrivKey;
                toAminoMsg(message: _84.PrivKey): _84.PrivKeyAminoMsg;
                fromProtoMsg(message: _84.PrivKeyProtoMsg): _84.PrivKey;
                toProto(message: _84.PrivKey): Uint8Array;
                toProtoMsg(message: _84.PrivKey): _84.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _277.MsgClientImpl;
            QueryClientImpl: typeof _261.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                validatorDistributionInfo(request: _88.QueryValidatorDistributionInfoRequest): Promise<_88.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _88.QueryValidatorOutstandingRewardsRequest): Promise<_88.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _88.QueryValidatorCommissionRequest): Promise<_88.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _88.QueryValidatorSlashesRequest): Promise<_88.QueryValidatorSlashesResponse>;
                delegationRewards(request: _88.QueryDelegationRewardsRequest): Promise<_88.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _88.QueryDelegationTotalRewardsRequest): Promise<_88.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _88.QueryDelegatorValidatorsRequest): Promise<_88.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _88.QueryDelegatorWithdrawAddressRequest): Promise<_88.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _88.QueryCommunityPoolRequest): Promise<_88.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _242.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _89.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _89.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _89.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _89.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _89.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _89.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _89.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _89.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _89.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _89.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _89.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _89.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _89.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _89.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _89.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _89.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _89.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _89.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _89.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _89.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _89.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _89.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _89.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _89.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _89.MsgSetWithdrawAddress) => _89.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _89.MsgSetWithdrawAddressAmino) => _89.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _89.MsgWithdrawDelegatorReward) => _89.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _89.MsgWithdrawDelegatorRewardAmino) => _89.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _89.MsgWithdrawValidatorCommission) => _89.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _89.MsgWithdrawValidatorCommissionAmino) => _89.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _89.MsgFundCommunityPool) => _89.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _89.MsgFundCommunityPoolAmino) => _89.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _89.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_89.MsgSetWithdrawAddress>): _89.MsgSetWithdrawAddress;
                fromAmino(object: _89.MsgSetWithdrawAddressAmino): _89.MsgSetWithdrawAddress;
                toAmino(message: _89.MsgSetWithdrawAddress): _89.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _89.MsgSetWithdrawAddressAminoMsg): _89.MsgSetWithdrawAddress;
                toAminoMsg(message: _89.MsgSetWithdrawAddress): _89.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _89.MsgSetWithdrawAddressProtoMsg): _89.MsgSetWithdrawAddress;
                toProto(message: _89.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _89.MsgSetWithdrawAddress): _89.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _89.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_89.MsgSetWithdrawAddressResponse>): _89.MsgSetWithdrawAddressResponse;
                fromAmino(_: _89.MsgSetWithdrawAddressResponseAmino): _89.MsgSetWithdrawAddressResponse;
                toAmino(_: _89.MsgSetWithdrawAddressResponse): _89.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _89.MsgSetWithdrawAddressResponseAminoMsg): _89.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _89.MsgSetWithdrawAddressResponse): _89.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _89.MsgSetWithdrawAddressResponseProtoMsg): _89.MsgSetWithdrawAddressResponse;
                toProto(message: _89.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _89.MsgSetWithdrawAddressResponse): _89.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _89.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_89.MsgWithdrawDelegatorReward>): _89.MsgWithdrawDelegatorReward;
                fromAmino(object: _89.MsgWithdrawDelegatorRewardAmino): _89.MsgWithdrawDelegatorReward;
                toAmino(message: _89.MsgWithdrawDelegatorReward): _89.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _89.MsgWithdrawDelegatorRewardAminoMsg): _89.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _89.MsgWithdrawDelegatorReward): _89.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _89.MsgWithdrawDelegatorRewardProtoMsg): _89.MsgWithdrawDelegatorReward;
                toProto(message: _89.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _89.MsgWithdrawDelegatorReward): _89.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _89.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_89.MsgWithdrawDelegatorRewardResponse>): _89.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _89.MsgWithdrawDelegatorRewardResponseAmino): _89.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _89.MsgWithdrawDelegatorRewardResponse): _89.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _89.MsgWithdrawDelegatorRewardResponseAminoMsg): _89.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _89.MsgWithdrawDelegatorRewardResponse): _89.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _89.MsgWithdrawDelegatorRewardResponseProtoMsg): _89.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _89.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _89.MsgWithdrawDelegatorRewardResponse): _89.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _89.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_89.MsgWithdrawValidatorCommission>): _89.MsgWithdrawValidatorCommission;
                fromAmino(object: _89.MsgWithdrawValidatorCommissionAmino): _89.MsgWithdrawValidatorCommission;
                toAmino(message: _89.MsgWithdrawValidatorCommission): _89.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _89.MsgWithdrawValidatorCommissionAminoMsg): _89.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _89.MsgWithdrawValidatorCommission): _89.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _89.MsgWithdrawValidatorCommissionProtoMsg): _89.MsgWithdrawValidatorCommission;
                toProto(message: _89.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _89.MsgWithdrawValidatorCommission): _89.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _89.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_89.MsgWithdrawValidatorCommissionResponse>): _89.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _89.MsgWithdrawValidatorCommissionResponseAmino): _89.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _89.MsgWithdrawValidatorCommissionResponse): _89.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _89.MsgWithdrawValidatorCommissionResponseAminoMsg): _89.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _89.MsgWithdrawValidatorCommissionResponse): _89.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _89.MsgWithdrawValidatorCommissionResponseProtoMsg): _89.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _89.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _89.MsgWithdrawValidatorCommissionResponse): _89.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _89.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgFundCommunityPool;
                fromPartial(object: Partial<_89.MsgFundCommunityPool>): _89.MsgFundCommunityPool;
                fromAmino(object: _89.MsgFundCommunityPoolAmino): _89.MsgFundCommunityPool;
                toAmino(message: _89.MsgFundCommunityPool): _89.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _89.MsgFundCommunityPoolAminoMsg): _89.MsgFundCommunityPool;
                toAminoMsg(message: _89.MsgFundCommunityPool): _89.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _89.MsgFundCommunityPoolProtoMsg): _89.MsgFundCommunityPool;
                toProto(message: _89.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _89.MsgFundCommunityPool): _89.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _89.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_89.MsgFundCommunityPoolResponse>): _89.MsgFundCommunityPoolResponse;
                fromAmino(_: _89.MsgFundCommunityPoolResponseAmino): _89.MsgFundCommunityPoolResponse;
                toAmino(_: _89.MsgFundCommunityPoolResponse): _89.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _89.MsgFundCommunityPoolResponseAminoMsg): _89.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _89.MsgFundCommunityPoolResponse): _89.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _89.MsgFundCommunityPoolResponseProtoMsg): _89.MsgFundCommunityPoolResponse;
                toProto(message: _89.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _89.MsgFundCommunityPoolResponse): _89.MsgFundCommunityPoolResponseProtoMsg;
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
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _88.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_88.QueryValidatorDistributionInfoRequest>): _88.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _88.QueryValidatorDistributionInfoRequestAmino): _88.QueryValidatorDistributionInfoRequest;
                toAmino(message: _88.QueryValidatorDistributionInfoRequest): _88.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _88.QueryValidatorDistributionInfoRequestAminoMsg): _88.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _88.QueryValidatorDistributionInfoRequest): _88.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorDistributionInfoRequestProtoMsg): _88.QueryValidatorDistributionInfoRequest;
                toProto(message: _88.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorDistributionInfoRequest): _88.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _88.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_88.QueryValidatorDistributionInfoResponse>): _88.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _88.QueryValidatorDistributionInfoResponseAmino): _88.QueryValidatorDistributionInfoResponse;
                toAmino(message: _88.QueryValidatorDistributionInfoResponse): _88.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _88.QueryValidatorDistributionInfoResponseAminoMsg): _88.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _88.QueryValidatorDistributionInfoResponse): _88.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorDistributionInfoResponseProtoMsg): _88.QueryValidatorDistributionInfoResponse;
                toProto(message: _88.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorDistributionInfoResponse): _88.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _88.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_88.QueryValidatorOutstandingRewardsRequest>): _88.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _88.QueryValidatorOutstandingRewardsRequestAmino): _88.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _88.QueryValidatorOutstandingRewardsRequest): _88.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _88.QueryValidatorOutstandingRewardsRequestAminoMsg): _88.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _88.QueryValidatorOutstandingRewardsRequest): _88.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorOutstandingRewardsRequestProtoMsg): _88.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _88.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorOutstandingRewardsRequest): _88.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _88.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_88.QueryValidatorOutstandingRewardsResponse>): _88.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _88.QueryValidatorOutstandingRewardsResponseAmino): _88.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _88.QueryValidatorOutstandingRewardsResponse): _88.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _88.QueryValidatorOutstandingRewardsResponseAminoMsg): _88.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _88.QueryValidatorOutstandingRewardsResponse): _88.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorOutstandingRewardsResponseProtoMsg): _88.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _88.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorOutstandingRewardsResponse): _88.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _88.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_88.QueryValidatorCommissionRequest>): _88.QueryValidatorCommissionRequest;
                fromAmino(object: _88.QueryValidatorCommissionRequestAmino): _88.QueryValidatorCommissionRequest;
                toAmino(message: _88.QueryValidatorCommissionRequest): _88.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _88.QueryValidatorCommissionRequestAminoMsg): _88.QueryValidatorCommissionRequest;
                toAminoMsg(message: _88.QueryValidatorCommissionRequest): _88.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorCommissionRequestProtoMsg): _88.QueryValidatorCommissionRequest;
                toProto(message: _88.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorCommissionRequest): _88.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _88.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_88.QueryValidatorCommissionResponse>): _88.QueryValidatorCommissionResponse;
                fromAmino(object: _88.QueryValidatorCommissionResponseAmino): _88.QueryValidatorCommissionResponse;
                toAmino(message: _88.QueryValidatorCommissionResponse): _88.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _88.QueryValidatorCommissionResponseAminoMsg): _88.QueryValidatorCommissionResponse;
                toAminoMsg(message: _88.QueryValidatorCommissionResponse): _88.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorCommissionResponseProtoMsg): _88.QueryValidatorCommissionResponse;
                toProto(message: _88.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorCommissionResponse): _88.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _88.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_88.QueryValidatorSlashesRequest>): _88.QueryValidatorSlashesRequest;
                fromAmino(object: _88.QueryValidatorSlashesRequestAmino): _88.QueryValidatorSlashesRequest;
                toAmino(message: _88.QueryValidatorSlashesRequest): _88.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _88.QueryValidatorSlashesRequestAminoMsg): _88.QueryValidatorSlashesRequest;
                toAminoMsg(message: _88.QueryValidatorSlashesRequest): _88.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorSlashesRequestProtoMsg): _88.QueryValidatorSlashesRequest;
                toProto(message: _88.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorSlashesRequest): _88.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _88.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_88.QueryValidatorSlashesResponse>): _88.QueryValidatorSlashesResponse;
                fromAmino(object: _88.QueryValidatorSlashesResponseAmino): _88.QueryValidatorSlashesResponse;
                toAmino(message: _88.QueryValidatorSlashesResponse): _88.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _88.QueryValidatorSlashesResponseAminoMsg): _88.QueryValidatorSlashesResponse;
                toAminoMsg(message: _88.QueryValidatorSlashesResponse): _88.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _88.QueryValidatorSlashesResponseProtoMsg): _88.QueryValidatorSlashesResponse;
                toProto(message: _88.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _88.QueryValidatorSlashesResponse): _88.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _88.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_88.QueryDelegationRewardsRequest>): _88.QueryDelegationRewardsRequest;
                fromAmino(object: _88.QueryDelegationRewardsRequestAmino): _88.QueryDelegationRewardsRequest;
                toAmino(message: _88.QueryDelegationRewardsRequest): _88.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _88.QueryDelegationRewardsRequestAminoMsg): _88.QueryDelegationRewardsRequest;
                toAminoMsg(message: _88.QueryDelegationRewardsRequest): _88.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryDelegationRewardsRequestProtoMsg): _88.QueryDelegationRewardsRequest;
                toProto(message: _88.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryDelegationRewardsRequest): _88.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _88.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_88.QueryDelegationRewardsResponse>): _88.QueryDelegationRewardsResponse;
                fromAmino(object: _88.QueryDelegationRewardsResponseAmino): _88.QueryDelegationRewardsResponse;
                toAmino(message: _88.QueryDelegationRewardsResponse): _88.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _88.QueryDelegationRewardsResponseAminoMsg): _88.QueryDelegationRewardsResponse;
                toAminoMsg(message: _88.QueryDelegationRewardsResponse): _88.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryDelegationRewardsResponseProtoMsg): _88.QueryDelegationRewardsResponse;
                toProto(message: _88.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryDelegationRewardsResponse): _88.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _88.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_88.QueryDelegationTotalRewardsRequest>): _88.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _88.QueryDelegationTotalRewardsRequestAmino): _88.QueryDelegationTotalRewardsRequest;
                toAmino(message: _88.QueryDelegationTotalRewardsRequest): _88.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _88.QueryDelegationTotalRewardsRequestAminoMsg): _88.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _88.QueryDelegationTotalRewardsRequest): _88.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryDelegationTotalRewardsRequestProtoMsg): _88.QueryDelegationTotalRewardsRequest;
                toProto(message: _88.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryDelegationTotalRewardsRequest): _88.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _88.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_88.QueryDelegationTotalRewardsResponse>): _88.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _88.QueryDelegationTotalRewardsResponseAmino): _88.QueryDelegationTotalRewardsResponse;
                toAmino(message: _88.QueryDelegationTotalRewardsResponse): _88.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _88.QueryDelegationTotalRewardsResponseAminoMsg): _88.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _88.QueryDelegationTotalRewardsResponse): _88.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryDelegationTotalRewardsResponseProtoMsg): _88.QueryDelegationTotalRewardsResponse;
                toProto(message: _88.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryDelegationTotalRewardsResponse): _88.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _88.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_88.QueryDelegatorValidatorsRequest>): _88.QueryDelegatorValidatorsRequest;
                fromAmino(object: _88.QueryDelegatorValidatorsRequestAmino): _88.QueryDelegatorValidatorsRequest;
                toAmino(message: _88.QueryDelegatorValidatorsRequest): _88.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _88.QueryDelegatorValidatorsRequestAminoMsg): _88.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _88.QueryDelegatorValidatorsRequest): _88.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorValidatorsRequestProtoMsg): _88.QueryDelegatorValidatorsRequest;
                toProto(message: _88.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorValidatorsRequest): _88.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _88.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_88.QueryDelegatorValidatorsResponse>): _88.QueryDelegatorValidatorsResponse;
                fromAmino(object: _88.QueryDelegatorValidatorsResponseAmino): _88.QueryDelegatorValidatorsResponse;
                toAmino(message: _88.QueryDelegatorValidatorsResponse): _88.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _88.QueryDelegatorValidatorsResponseAminoMsg): _88.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _88.QueryDelegatorValidatorsResponse): _88.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorValidatorsResponseProtoMsg): _88.QueryDelegatorValidatorsResponse;
                toProto(message: _88.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorValidatorsResponse): _88.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _88.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_88.QueryDelegatorWithdrawAddressRequest>): _88.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _88.QueryDelegatorWithdrawAddressRequestAmino): _88.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _88.QueryDelegatorWithdrawAddressRequest): _88.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _88.QueryDelegatorWithdrawAddressRequestAminoMsg): _88.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _88.QueryDelegatorWithdrawAddressRequest): _88.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorWithdrawAddressRequestProtoMsg): _88.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _88.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorWithdrawAddressRequest): _88.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _88.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_88.QueryDelegatorWithdrawAddressResponse>): _88.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _88.QueryDelegatorWithdrawAddressResponseAmino): _88.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _88.QueryDelegatorWithdrawAddressResponse): _88.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _88.QueryDelegatorWithdrawAddressResponseAminoMsg): _88.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _88.QueryDelegatorWithdrawAddressResponse): _88.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _88.QueryDelegatorWithdrawAddressResponseProtoMsg): _88.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _88.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _88.QueryDelegatorWithdrawAddressResponse): _88.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _88.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_88.QueryCommunityPoolRequest>): _88.QueryCommunityPoolRequest;
                fromAmino(_: _88.QueryCommunityPoolRequestAmino): _88.QueryCommunityPoolRequest;
                toAmino(_: _88.QueryCommunityPoolRequest): _88.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _88.QueryCommunityPoolRequestAminoMsg): _88.QueryCommunityPoolRequest;
                toAminoMsg(message: _88.QueryCommunityPoolRequest): _88.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _88.QueryCommunityPoolRequestProtoMsg): _88.QueryCommunityPoolRequest;
                toProto(message: _88.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _88.QueryCommunityPoolRequest): _88.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _88.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_88.QueryCommunityPoolResponse>): _88.QueryCommunityPoolResponse;
                fromAmino(object: _88.QueryCommunityPoolResponseAmino): _88.QueryCommunityPoolResponse;
                toAmino(message: _88.QueryCommunityPoolResponse): _88.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _88.QueryCommunityPoolResponseAminoMsg): _88.QueryCommunityPoolResponse;
                toAminoMsg(message: _88.QueryCommunityPoolResponse): _88.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _88.QueryCommunityPoolResponseProtoMsg): _88.QueryCommunityPoolResponse;
                toProto(message: _88.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _88.QueryCommunityPoolResponse): _88.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _87.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_87.DelegatorWithdrawInfo>): _87.DelegatorWithdrawInfo;
                fromAmino(object: _87.DelegatorWithdrawInfoAmino): _87.DelegatorWithdrawInfo;
                toAmino(message: _87.DelegatorWithdrawInfo): _87.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _87.DelegatorWithdrawInfoAminoMsg): _87.DelegatorWithdrawInfo;
                toAminoMsg(message: _87.DelegatorWithdrawInfo): _87.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _87.DelegatorWithdrawInfoProtoMsg): _87.DelegatorWithdrawInfo;
                toProto(message: _87.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _87.DelegatorWithdrawInfo): _87.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _87.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_87.ValidatorOutstandingRewardsRecord>): _87.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _87.ValidatorOutstandingRewardsRecordAmino): _87.ValidatorOutstandingRewardsRecord;
                toAmino(message: _87.ValidatorOutstandingRewardsRecord): _87.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _87.ValidatorOutstandingRewardsRecordAminoMsg): _87.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _87.ValidatorOutstandingRewardsRecord): _87.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _87.ValidatorOutstandingRewardsRecordProtoMsg): _87.ValidatorOutstandingRewardsRecord;
                toProto(message: _87.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _87.ValidatorOutstandingRewardsRecord): _87.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _87.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_87.ValidatorAccumulatedCommissionRecord>): _87.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _87.ValidatorAccumulatedCommissionRecordAmino): _87.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _87.ValidatorAccumulatedCommissionRecord): _87.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _87.ValidatorAccumulatedCommissionRecordAminoMsg): _87.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _87.ValidatorAccumulatedCommissionRecord): _87.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _87.ValidatorAccumulatedCommissionRecordProtoMsg): _87.ValidatorAccumulatedCommissionRecord;
                toProto(message: _87.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _87.ValidatorAccumulatedCommissionRecord): _87.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _87.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_87.ValidatorHistoricalRewardsRecord>): _87.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _87.ValidatorHistoricalRewardsRecordAmino): _87.ValidatorHistoricalRewardsRecord;
                toAmino(message: _87.ValidatorHistoricalRewardsRecord): _87.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _87.ValidatorHistoricalRewardsRecordAminoMsg): _87.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _87.ValidatorHistoricalRewardsRecord): _87.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _87.ValidatorHistoricalRewardsRecordProtoMsg): _87.ValidatorHistoricalRewardsRecord;
                toProto(message: _87.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _87.ValidatorHistoricalRewardsRecord): _87.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _87.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_87.ValidatorCurrentRewardsRecord>): _87.ValidatorCurrentRewardsRecord;
                fromAmino(object: _87.ValidatorCurrentRewardsRecordAmino): _87.ValidatorCurrentRewardsRecord;
                toAmino(message: _87.ValidatorCurrentRewardsRecord): _87.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _87.ValidatorCurrentRewardsRecordAminoMsg): _87.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _87.ValidatorCurrentRewardsRecord): _87.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _87.ValidatorCurrentRewardsRecordProtoMsg): _87.ValidatorCurrentRewardsRecord;
                toProto(message: _87.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _87.ValidatorCurrentRewardsRecord): _87.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _87.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_87.DelegatorStartingInfoRecord>): _87.DelegatorStartingInfoRecord;
                fromAmino(object: _87.DelegatorStartingInfoRecordAmino): _87.DelegatorStartingInfoRecord;
                toAmino(message: _87.DelegatorStartingInfoRecord): _87.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _87.DelegatorStartingInfoRecordAminoMsg): _87.DelegatorStartingInfoRecord;
                toAminoMsg(message: _87.DelegatorStartingInfoRecord): _87.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _87.DelegatorStartingInfoRecordProtoMsg): _87.DelegatorStartingInfoRecord;
                toProto(message: _87.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _87.DelegatorStartingInfoRecord): _87.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _87.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_87.ValidatorSlashEventRecord>): _87.ValidatorSlashEventRecord;
                fromAmino(object: _87.ValidatorSlashEventRecordAmino): _87.ValidatorSlashEventRecord;
                toAmino(message: _87.ValidatorSlashEventRecord): _87.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _87.ValidatorSlashEventRecordAminoMsg): _87.ValidatorSlashEventRecord;
                toAminoMsg(message: _87.ValidatorSlashEventRecord): _87.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _87.ValidatorSlashEventRecordProtoMsg): _87.ValidatorSlashEventRecord;
                toProto(message: _87.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _87.ValidatorSlashEventRecord): _87.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _86.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Params;
                fromPartial(object: Partial<_86.Params>): _86.Params;
                fromAmino(object: _86.ParamsAmino): _86.Params;
                toAmino(message: _86.Params): _86.ParamsAmino;
                fromAminoMsg(object: _86.ParamsAminoMsg): _86.Params;
                toAminoMsg(message: _86.Params): _86.ParamsAminoMsg;
                fromProtoMsg(message: _86.ParamsProtoMsg): _86.Params;
                toProto(message: _86.Params): Uint8Array;
                toProtoMsg(message: _86.Params): _86.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _86.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_86.ValidatorHistoricalRewards>): _86.ValidatorHistoricalRewards;
                fromAmino(object: _86.ValidatorHistoricalRewardsAmino): _86.ValidatorHistoricalRewards;
                toAmino(message: _86.ValidatorHistoricalRewards): _86.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _86.ValidatorHistoricalRewardsAminoMsg): _86.ValidatorHistoricalRewards;
                toAminoMsg(message: _86.ValidatorHistoricalRewards): _86.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _86.ValidatorHistoricalRewardsProtoMsg): _86.ValidatorHistoricalRewards;
                toProto(message: _86.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _86.ValidatorHistoricalRewards): _86.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _86.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ValidatorCurrentRewards;
                fromPartial(object: Partial<_86.ValidatorCurrentRewards>): _86.ValidatorCurrentRewards;
                fromAmino(object: _86.ValidatorCurrentRewardsAmino): _86.ValidatorCurrentRewards;
                toAmino(message: _86.ValidatorCurrentRewards): _86.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _86.ValidatorCurrentRewardsAminoMsg): _86.ValidatorCurrentRewards;
                toAminoMsg(message: _86.ValidatorCurrentRewards): _86.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _86.ValidatorCurrentRewardsProtoMsg): _86.ValidatorCurrentRewards;
                toProto(message: _86.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _86.ValidatorCurrentRewards): _86.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _86.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_86.ValidatorAccumulatedCommission>): _86.ValidatorAccumulatedCommission;
                fromAmino(object: _86.ValidatorAccumulatedCommissionAmino): _86.ValidatorAccumulatedCommission;
                toAmino(message: _86.ValidatorAccumulatedCommission): _86.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _86.ValidatorAccumulatedCommissionAminoMsg): _86.ValidatorAccumulatedCommission;
                toAminoMsg(message: _86.ValidatorAccumulatedCommission): _86.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _86.ValidatorAccumulatedCommissionProtoMsg): _86.ValidatorAccumulatedCommission;
                toProto(message: _86.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _86.ValidatorAccumulatedCommission): _86.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _86.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_86.ValidatorOutstandingRewards>): _86.ValidatorOutstandingRewards;
                fromAmino(object: _86.ValidatorOutstandingRewardsAmino): _86.ValidatorOutstandingRewards;
                toAmino(message: _86.ValidatorOutstandingRewards): _86.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _86.ValidatorOutstandingRewardsAminoMsg): _86.ValidatorOutstandingRewards;
                toAminoMsg(message: _86.ValidatorOutstandingRewards): _86.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _86.ValidatorOutstandingRewardsProtoMsg): _86.ValidatorOutstandingRewards;
                toProto(message: _86.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _86.ValidatorOutstandingRewards): _86.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _86.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ValidatorSlashEvent;
                fromPartial(object: Partial<_86.ValidatorSlashEvent>): _86.ValidatorSlashEvent;
                fromAmino(object: _86.ValidatorSlashEventAmino): _86.ValidatorSlashEvent;
                toAmino(message: _86.ValidatorSlashEvent): _86.ValidatorSlashEventAmino;
                fromAminoMsg(object: _86.ValidatorSlashEventAminoMsg): _86.ValidatorSlashEvent;
                toAminoMsg(message: _86.ValidatorSlashEvent): _86.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _86.ValidatorSlashEventProtoMsg): _86.ValidatorSlashEvent;
                toProto(message: _86.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _86.ValidatorSlashEvent): _86.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _86.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ValidatorSlashEvents;
                fromPartial(object: Partial<_86.ValidatorSlashEvents>): _86.ValidatorSlashEvents;
                fromAmino(object: _86.ValidatorSlashEventsAmino): _86.ValidatorSlashEvents;
                toAmino(message: _86.ValidatorSlashEvents): _86.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _86.ValidatorSlashEventsAminoMsg): _86.ValidatorSlashEvents;
                toAminoMsg(message: _86.ValidatorSlashEvents): _86.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _86.ValidatorSlashEventsProtoMsg): _86.ValidatorSlashEvents;
                toProto(message: _86.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _86.ValidatorSlashEvents): _86.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _86.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.FeePool;
                fromPartial(object: Partial<_86.FeePool>): _86.FeePool;
                fromAmino(object: _86.FeePoolAmino): _86.FeePool;
                toAmino(message: _86.FeePool): _86.FeePoolAmino;
                fromAminoMsg(object: _86.FeePoolAminoMsg): _86.FeePool;
                toAminoMsg(message: _86.FeePool): _86.FeePoolAminoMsg;
                fromProtoMsg(message: _86.FeePoolProtoMsg): _86.FeePool;
                toProto(message: _86.FeePool): Uint8Array;
                toProtoMsg(message: _86.FeePool): _86.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _86.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_86.CommunityPoolSpendProposal>): _86.CommunityPoolSpendProposal;
                fromAmino(object: _86.CommunityPoolSpendProposalAmino): _86.CommunityPoolSpendProposal;
                toAmino(message: _86.CommunityPoolSpendProposal): _86.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _86.CommunityPoolSpendProposalAminoMsg): _86.CommunityPoolSpendProposal;
                toAminoMsg(message: _86.CommunityPoolSpendProposal): _86.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _86.CommunityPoolSpendProposalProtoMsg): _86.CommunityPoolSpendProposal;
                toProto(message: _86.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _86.CommunityPoolSpendProposal): _86.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _86.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.DelegatorStartingInfo;
                fromPartial(object: Partial<_86.DelegatorStartingInfo>): _86.DelegatorStartingInfo;
                fromAmino(object: _86.DelegatorStartingInfoAmino): _86.DelegatorStartingInfo;
                toAmino(message: _86.DelegatorStartingInfo): _86.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _86.DelegatorStartingInfoAminoMsg): _86.DelegatorStartingInfo;
                toAminoMsg(message: _86.DelegatorStartingInfo): _86.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _86.DelegatorStartingInfoProtoMsg): _86.DelegatorStartingInfo;
                toProto(message: _86.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _86.DelegatorStartingInfo): _86.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _86.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.DelegationDelegatorReward;
                fromPartial(object: Partial<_86.DelegationDelegatorReward>): _86.DelegationDelegatorReward;
                fromAmino(object: _86.DelegationDelegatorRewardAmino): _86.DelegationDelegatorReward;
                toAmino(message: _86.DelegationDelegatorReward): _86.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _86.DelegationDelegatorRewardAminoMsg): _86.DelegationDelegatorReward;
                toAminoMsg(message: _86.DelegationDelegatorReward): _86.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _86.DelegationDelegatorRewardProtoMsg): _86.DelegationDelegatorReward;
                toProto(message: _86.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _86.DelegationDelegatorReward): _86.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _86.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_86.CommunityPoolSpendProposalWithDeposit>): _86.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _86.CommunityPoolSpendProposalWithDepositAmino): _86.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _86.CommunityPoolSpendProposalWithDeposit): _86.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _86.CommunityPoolSpendProposalWithDepositAminoMsg): _86.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _86.CommunityPoolSpendProposalWithDeposit): _86.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _86.CommunityPoolSpendProposalWithDepositProtoMsg): _86.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _86.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _86.CommunityPoolSpendProposalWithDeposit): _86.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
            DistributionAuthorization: {
                typeUrl: string;
                encode(message: _85.DistributionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.DistributionAuthorization;
                fromPartial(object: Partial<_85.DistributionAuthorization>): _85.DistributionAuthorization;
                fromAmino(object: _85.DistributionAuthorizationAmino): _85.DistributionAuthorization;
                toAmino(message: _85.DistributionAuthorization): _85.DistributionAuthorizationAmino;
                fromAminoMsg(object: _85.DistributionAuthorizationAminoMsg): _85.DistributionAuthorization;
                toAminoMsg(message: _85.DistributionAuthorization): _85.DistributionAuthorizationAminoMsg;
                fromProtoMsg(message: _85.DistributionAuthorizationProtoMsg): _85.DistributionAuthorization;
                toProto(message: _85.DistributionAuthorization): Uint8Array;
                toProtoMsg(message: _85.DistributionAuthorization): _85.DistributionAuthorizationProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _278.MsgClientImpl;
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _92.QueryEvidenceRequest): Promise<_92.QueryEvidenceResponse>;
                allEvidence(request?: _92.QueryAllEvidenceRequest): Promise<_92.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _243.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _93.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _93.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _93.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _93.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _93.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _93.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _93.MsgSubmitEvidence) => _93.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _93.MsgSubmitEvidenceAmino) => _93.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _93.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.MsgSubmitEvidence;
                fromPartial(object: Partial<_93.MsgSubmitEvidence>): _93.MsgSubmitEvidence;
                fromAmino(object: _93.MsgSubmitEvidenceAmino): _93.MsgSubmitEvidence;
                toAmino(message: _93.MsgSubmitEvidence): _93.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _93.MsgSubmitEvidenceAminoMsg): _93.MsgSubmitEvidence;
                toAminoMsg(message: _93.MsgSubmitEvidence): _93.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _93.MsgSubmitEvidenceProtoMsg): _93.MsgSubmitEvidence;
                toProto(message: _93.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _93.MsgSubmitEvidence): _93.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _93.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_93.MsgSubmitEvidenceResponse>): _93.MsgSubmitEvidenceResponse;
                fromAmino(object: _93.MsgSubmitEvidenceResponseAmino): _93.MsgSubmitEvidenceResponse;
                toAmino(message: _93.MsgSubmitEvidenceResponse): _93.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _93.MsgSubmitEvidenceResponseAminoMsg): _93.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _93.MsgSubmitEvidenceResponse): _93.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _93.MsgSubmitEvidenceResponseProtoMsg): _93.MsgSubmitEvidenceResponse;
                toProto(message: _93.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _93.MsgSubmitEvidenceResponse): _93.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _92.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryEvidenceRequest;
                fromPartial(object: Partial<_92.QueryEvidenceRequest>): _92.QueryEvidenceRequest;
                fromAmino(object: _92.QueryEvidenceRequestAmino): _92.QueryEvidenceRequest;
                toAmino(message: _92.QueryEvidenceRequest): _92.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _92.QueryEvidenceRequestAminoMsg): _92.QueryEvidenceRequest;
                toAminoMsg(message: _92.QueryEvidenceRequest): _92.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _92.QueryEvidenceRequestProtoMsg): _92.QueryEvidenceRequest;
                toProto(message: _92.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _92.QueryEvidenceRequest): _92.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _92.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryEvidenceResponse;
                fromPartial(object: Partial<_92.QueryEvidenceResponse>): _92.QueryEvidenceResponse;
                fromAmino(object: _92.QueryEvidenceResponseAmino): _92.QueryEvidenceResponse;
                toAmino(message: _92.QueryEvidenceResponse): _92.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _92.QueryEvidenceResponseAminoMsg): _92.QueryEvidenceResponse;
                toAminoMsg(message: _92.QueryEvidenceResponse): _92.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _92.QueryEvidenceResponseProtoMsg): _92.QueryEvidenceResponse;
                toProto(message: _92.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _92.QueryEvidenceResponse): _92.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _92.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_92.QueryAllEvidenceRequest>): _92.QueryAllEvidenceRequest;
                fromAmino(object: _92.QueryAllEvidenceRequestAmino): _92.QueryAllEvidenceRequest;
                toAmino(message: _92.QueryAllEvidenceRequest): _92.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _92.QueryAllEvidenceRequestAminoMsg): _92.QueryAllEvidenceRequest;
                toAminoMsg(message: _92.QueryAllEvidenceRequest): _92.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _92.QueryAllEvidenceRequestProtoMsg): _92.QueryAllEvidenceRequest;
                toProto(message: _92.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _92.QueryAllEvidenceRequest): _92.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _92.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_92.QueryAllEvidenceResponse>): _92.QueryAllEvidenceResponse;
                fromAmino(object: _92.QueryAllEvidenceResponseAmino): _92.QueryAllEvidenceResponse;
                toAmino(message: _92.QueryAllEvidenceResponse): _92.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _92.QueryAllEvidenceResponseAminoMsg): _92.QueryAllEvidenceResponse;
                toAminoMsg(message: _92.QueryAllEvidenceResponse): _92.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _92.QueryAllEvidenceResponseProtoMsg): _92.QueryAllEvidenceResponse;
                toProto(message: _92.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _92.QueryAllEvidenceResponse): _92.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _90.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.Equivocation;
                fromPartial(object: Partial<_90.Equivocation>): _90.Equivocation;
                fromAmino(object: _90.EquivocationAmino): _90.Equivocation;
                toAmino(message: _90.Equivocation): _90.EquivocationAmino;
                fromAminoMsg(object: _90.EquivocationAminoMsg): _90.Equivocation;
                toAminoMsg(message: _90.Equivocation): _90.EquivocationAminoMsg;
                fromProtoMsg(message: _90.EquivocationProtoMsg): _90.Equivocation;
                toProto(message: _90.Equivocation): Uint8Array;
                toProtoMsg(message: _90.Equivocation): _90.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _279.MsgClientImpl;
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _96.QueryAllowanceRequest): Promise<_96.QueryAllowanceResponse>;
                allowances(request: _96.QueryAllowancesRequest): Promise<_96.QueryAllowancesResponse>;
                allowancesByGranter(request: _96.QueryAllowancesByGranterRequest): Promise<_96.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _244.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _97.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _97.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _97.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _97.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _97.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _97.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _97.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _97.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _97.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _97.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _97.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _97.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _97.MsgGrantAllowance) => _97.MsgGrantAllowanceAmino;
                    fromAmino: (object: _97.MsgGrantAllowanceAmino) => _97.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _97.MsgRevokeAllowance) => _97.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _97.MsgRevokeAllowanceAmino) => _97.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _97.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgGrantAllowance;
                fromPartial(object: Partial<_97.MsgGrantAllowance>): _97.MsgGrantAllowance;
                fromAmino(object: _97.MsgGrantAllowanceAmino): _97.MsgGrantAllowance;
                toAmino(message: _97.MsgGrantAllowance): _97.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _97.MsgGrantAllowanceAminoMsg): _97.MsgGrantAllowance;
                toAminoMsg(message: _97.MsgGrantAllowance): _97.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _97.MsgGrantAllowanceProtoMsg): _97.MsgGrantAllowance;
                toProto(message: _97.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _97.MsgGrantAllowance): _97.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _97.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _97.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_97.MsgGrantAllowanceResponse>): _97.MsgGrantAllowanceResponse;
                fromAmino(_: _97.MsgGrantAllowanceResponseAmino): _97.MsgGrantAllowanceResponse;
                toAmino(_: _97.MsgGrantAllowanceResponse): _97.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _97.MsgGrantAllowanceResponseAminoMsg): _97.MsgGrantAllowanceResponse;
                toAminoMsg(message: _97.MsgGrantAllowanceResponse): _97.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _97.MsgGrantAllowanceResponseProtoMsg): _97.MsgGrantAllowanceResponse;
                toProto(message: _97.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _97.MsgGrantAllowanceResponse): _97.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _97.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgRevokeAllowance;
                fromPartial(object: Partial<_97.MsgRevokeAllowance>): _97.MsgRevokeAllowance;
                fromAmino(object: _97.MsgRevokeAllowanceAmino): _97.MsgRevokeAllowance;
                toAmino(message: _97.MsgRevokeAllowance): _97.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _97.MsgRevokeAllowanceAminoMsg): _97.MsgRevokeAllowance;
                toAminoMsg(message: _97.MsgRevokeAllowance): _97.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _97.MsgRevokeAllowanceProtoMsg): _97.MsgRevokeAllowance;
                toProto(message: _97.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _97.MsgRevokeAllowance): _97.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _97.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _97.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_97.MsgRevokeAllowanceResponse>): _97.MsgRevokeAllowanceResponse;
                fromAmino(_: _97.MsgRevokeAllowanceResponseAmino): _97.MsgRevokeAllowanceResponse;
                toAmino(_: _97.MsgRevokeAllowanceResponse): _97.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _97.MsgRevokeAllowanceResponseAminoMsg): _97.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _97.MsgRevokeAllowanceResponse): _97.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _97.MsgRevokeAllowanceResponseProtoMsg): _97.MsgRevokeAllowanceResponse;
                toProto(message: _97.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _97.MsgRevokeAllowanceResponse): _97.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _94.BasicAllowance | _94.PeriodicAllowance | _94.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _96.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryAllowanceRequest;
                fromPartial(object: Partial<_96.QueryAllowanceRequest>): _96.QueryAllowanceRequest;
                fromAmino(object: _96.QueryAllowanceRequestAmino): _96.QueryAllowanceRequest;
                toAmino(message: _96.QueryAllowanceRequest): _96.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _96.QueryAllowanceRequestAminoMsg): _96.QueryAllowanceRequest;
                toAminoMsg(message: _96.QueryAllowanceRequest): _96.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _96.QueryAllowanceRequestProtoMsg): _96.QueryAllowanceRequest;
                toProto(message: _96.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _96.QueryAllowanceRequest): _96.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _96.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryAllowanceResponse;
                fromPartial(object: Partial<_96.QueryAllowanceResponse>): _96.QueryAllowanceResponse;
                fromAmino(object: _96.QueryAllowanceResponseAmino): _96.QueryAllowanceResponse;
                toAmino(message: _96.QueryAllowanceResponse): _96.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _96.QueryAllowanceResponseAminoMsg): _96.QueryAllowanceResponse;
                toAminoMsg(message: _96.QueryAllowanceResponse): _96.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _96.QueryAllowanceResponseProtoMsg): _96.QueryAllowanceResponse;
                toProto(message: _96.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _96.QueryAllowanceResponse): _96.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _96.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryAllowancesRequest;
                fromPartial(object: Partial<_96.QueryAllowancesRequest>): _96.QueryAllowancesRequest;
                fromAmino(object: _96.QueryAllowancesRequestAmino): _96.QueryAllowancesRequest;
                toAmino(message: _96.QueryAllowancesRequest): _96.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _96.QueryAllowancesRequestAminoMsg): _96.QueryAllowancesRequest;
                toAminoMsg(message: _96.QueryAllowancesRequest): _96.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _96.QueryAllowancesRequestProtoMsg): _96.QueryAllowancesRequest;
                toProto(message: _96.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _96.QueryAllowancesRequest): _96.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _96.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryAllowancesResponse;
                fromPartial(object: Partial<_96.QueryAllowancesResponse>): _96.QueryAllowancesResponse;
                fromAmino(object: _96.QueryAllowancesResponseAmino): _96.QueryAllowancesResponse;
                toAmino(message: _96.QueryAllowancesResponse): _96.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _96.QueryAllowancesResponseAminoMsg): _96.QueryAllowancesResponse;
                toAminoMsg(message: _96.QueryAllowancesResponse): _96.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _96.QueryAllowancesResponseProtoMsg): _96.QueryAllowancesResponse;
                toProto(message: _96.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _96.QueryAllowancesResponse): _96.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _96.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_96.QueryAllowancesByGranterRequest>): _96.QueryAllowancesByGranterRequest;
                fromAmino(object: _96.QueryAllowancesByGranterRequestAmino): _96.QueryAllowancesByGranterRequest;
                toAmino(message: _96.QueryAllowancesByGranterRequest): _96.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _96.QueryAllowancesByGranterRequestAminoMsg): _96.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _96.QueryAllowancesByGranterRequest): _96.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _96.QueryAllowancesByGranterRequestProtoMsg): _96.QueryAllowancesByGranterRequest;
                toProto(message: _96.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _96.QueryAllowancesByGranterRequest): _96.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _96.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_96.QueryAllowancesByGranterResponse>): _96.QueryAllowancesByGranterResponse;
                fromAmino(object: _96.QueryAllowancesByGranterResponseAmino): _96.QueryAllowancesByGranterResponse;
                toAmino(message: _96.QueryAllowancesByGranterResponse): _96.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _96.QueryAllowancesByGranterResponseAminoMsg): _96.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _96.QueryAllowancesByGranterResponse): _96.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _96.QueryAllowancesByGranterResponseProtoMsg): _96.QueryAllowancesByGranterResponse;
                toProto(message: _96.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _96.QueryAllowancesByGranterResponse): _96.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _95.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.GenesisState;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
                fromAmino(object: _95.GenesisStateAmino): _95.GenesisState;
                toAmino(message: _95.GenesisState): _95.GenesisStateAmino;
                fromAminoMsg(object: _95.GenesisStateAminoMsg): _95.GenesisState;
                toAminoMsg(message: _95.GenesisState): _95.GenesisStateAminoMsg;
                fromProtoMsg(message: _95.GenesisStateProtoMsg): _95.GenesisState;
                toProto(message: _95.GenesisState): Uint8Array;
                toProtoMsg(message: _95.GenesisState): _95.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _94.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.BasicAllowance;
                fromPartial(object: Partial<_94.BasicAllowance>): _94.BasicAllowance;
                fromAmino(object: _94.BasicAllowanceAmino): _94.BasicAllowance;
                toAmino(message: _94.BasicAllowance): _94.BasicAllowanceAmino;
                fromAminoMsg(object: _94.BasicAllowanceAminoMsg): _94.BasicAllowance;
                toAminoMsg(message: _94.BasicAllowance): _94.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _94.BasicAllowanceProtoMsg): _94.BasicAllowance;
                toProto(message: _94.BasicAllowance): Uint8Array;
                toProtoMsg(message: _94.BasicAllowance): _94.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _94.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.PeriodicAllowance;
                fromPartial(object: Partial<_94.PeriodicAllowance>): _94.PeriodicAllowance;
                fromAmino(object: _94.PeriodicAllowanceAmino): _94.PeriodicAllowance;
                toAmino(message: _94.PeriodicAllowance): _94.PeriodicAllowanceAmino;
                fromAminoMsg(object: _94.PeriodicAllowanceAminoMsg): _94.PeriodicAllowance;
                toAminoMsg(message: _94.PeriodicAllowance): _94.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _94.PeriodicAllowanceProtoMsg): _94.PeriodicAllowance;
                toProto(message: _94.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _94.PeriodicAllowance): _94.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _94.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.AllowedMsgAllowance;
                fromPartial(object: Partial<_94.AllowedMsgAllowance>): _94.AllowedMsgAllowance;
                fromAmino(object: _94.AllowedMsgAllowanceAmino): _94.AllowedMsgAllowance;
                toAmino(message: _94.AllowedMsgAllowance): _94.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _94.AllowedMsgAllowanceAminoMsg): _94.AllowedMsgAllowance;
                toAminoMsg(message: _94.AllowedMsgAllowance): _94.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _94.AllowedMsgAllowanceProtoMsg): _94.AllowedMsgAllowance;
                toProto(message: _94.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _94.AllowedMsgAllowance): _94.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _94.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.Grant;
                fromPartial(object: Partial<_94.Grant>): _94.Grant;
                fromAmino(object: _94.GrantAmino): _94.Grant;
                toAmino(message: _94.Grant): _94.GrantAmino;
                fromAminoMsg(object: _94.GrantAminoMsg): _94.Grant;
                toAminoMsg(message: _94.Grant): _94.GrantAminoMsg;
                fromProtoMsg(message: _94.GrantProtoMsg): _94.Grant;
                toProto(message: _94.Grant): Uint8Array;
                toProtoMsg(message: _94.Grant): _94.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _280.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
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
            LCDQueryClient: typeof _245.LCDQueryClient;
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
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _104.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            MsgClientImpl: typeof _281.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
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
            LCDQueryClient: typeof _246.LCDQueryClient;
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
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _104.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
        const v1: {
            MsgClientImpl: typeof _282.MsgClientImpl;
            QueryClientImpl: typeof _266.QueryClientImpl;
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
            LCDQueryClient: typeof _247.LCDQueryClient;
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
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
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
        const v1beta1: {
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                inflation(request?: _114.QueryInflationRequest): Promise<_114.QueryInflationResponse>;
                annualProvisions(request?: _114.QueryAnnualProvisionsRequest): Promise<_114.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _248.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _114.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.QueryParamsRequest;
                fromPartial(_: Partial<_114.QueryParamsRequest>): _114.QueryParamsRequest;
                fromAmino(_: _114.QueryParamsRequestAmino): _114.QueryParamsRequest;
                toAmino(_: _114.QueryParamsRequest): _114.QueryParamsRequestAmino;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _114.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.QueryInflationRequest;
                fromPartial(_: Partial<_114.QueryInflationRequest>): _114.QueryInflationRequest;
                fromAmino(_: _114.QueryInflationRequestAmino): _114.QueryInflationRequest;
                toAmino(_: _114.QueryInflationRequest): _114.QueryInflationRequestAmino;
                fromAminoMsg(object: _114.QueryInflationRequestAminoMsg): _114.QueryInflationRequest;
                toAminoMsg(message: _114.QueryInflationRequest): _114.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _114.QueryInflationRequestProtoMsg): _114.QueryInflationRequest;
                toProto(message: _114.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _114.QueryInflationRequest): _114.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _114.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryInflationResponse;
                fromPartial(object: Partial<_114.QueryInflationResponse>): _114.QueryInflationResponse;
                fromAmino(object: _114.QueryInflationResponseAmino): _114.QueryInflationResponse;
                toAmino(message: _114.QueryInflationResponse): _114.QueryInflationResponseAmino;
                fromAminoMsg(object: _114.QueryInflationResponseAminoMsg): _114.QueryInflationResponse;
                toAminoMsg(message: _114.QueryInflationResponse): _114.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _114.QueryInflationResponseProtoMsg): _114.QueryInflationResponse;
                toProto(message: _114.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _114.QueryInflationResponse): _114.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _114.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_114.QueryAnnualProvisionsRequest>): _114.QueryAnnualProvisionsRequest;
                fromAmino(_: _114.QueryAnnualProvisionsRequestAmino): _114.QueryAnnualProvisionsRequest;
                toAmino(_: _114.QueryAnnualProvisionsRequest): _114.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _114.QueryAnnualProvisionsRequestAminoMsg): _114.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _114.QueryAnnualProvisionsRequest): _114.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryAnnualProvisionsRequestProtoMsg): _114.QueryAnnualProvisionsRequest;
                toProto(message: _114.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryAnnualProvisionsRequest): _114.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _114.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_114.QueryAnnualProvisionsResponse>): _114.QueryAnnualProvisionsResponse;
                fromAmino(object: _114.QueryAnnualProvisionsResponseAmino): _114.QueryAnnualProvisionsResponse;
                toAmino(message: _114.QueryAnnualProvisionsResponse): _114.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _114.QueryAnnualProvisionsResponseAminoMsg): _114.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _114.QueryAnnualProvisionsResponse): _114.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryAnnualProvisionsResponseProtoMsg): _114.QueryAnnualProvisionsResponse;
                toProto(message: _114.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryAnnualProvisionsResponse): _114.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _113.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Minter;
                fromPartial(object: Partial<_113.Minter>): _113.Minter;
                fromAmino(object: _113.MinterAmino): _113.Minter;
                toAmino(message: _113.Minter): _113.MinterAmino;
                fromAminoMsg(object: _113.MinterAminoMsg): _113.Minter;
                toAminoMsg(message: _113.Minter): _113.MinterAminoMsg;
                fromProtoMsg(message: _113.MinterProtoMsg): _113.Minter;
                toProto(message: _113.Minter): Uint8Array;
                toProtoMsg(message: _113.Minter): _113.MinterProtoMsg;
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
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _283.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _119.QueryBalanceRequest): Promise<_119.QueryBalanceResponse>;
                owner(request: _119.QueryOwnerRequest): Promise<_119.QueryOwnerResponse>;
                supply(request: _119.QuerySupplyRequest): Promise<_119.QuerySupplyResponse>;
                nFTs(request: _119.QueryNFTsRequest): Promise<_119.QueryNFTsResponse>;
                nFT(request: _119.QueryNFTRequest): Promise<_119.QueryNFTResponse>;
                class(request: _119.QueryClassRequest): Promise<_119.QueryClassResponse>;
                classes(request?: _119.QueryClassesRequest): Promise<_119.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _249.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _120.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _120.MsgSend): {
                        typeUrl: string;
                        value: _120.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _120.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _120.MsgSend): {
                        typeUrl: string;
                        value: _120.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _120.MsgSend) => _120.MsgSendAmino;
                    fromAmino: (object: _120.MsgSendAmino) => _120.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _120.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgSend;
                fromPartial(object: Partial<_120.MsgSend>): _120.MsgSend;
                fromAmino(object: _120.MsgSendAmino): _120.MsgSend;
                toAmino(message: _120.MsgSend): _120.MsgSendAmino;
                fromAminoMsg(object: _120.MsgSendAminoMsg): _120.MsgSend;
                toAminoMsg(message: _120.MsgSend): _120.MsgSendAminoMsg;
                fromProtoMsg(message: _120.MsgSendProtoMsg): _120.MsgSend;
                toProto(message: _120.MsgSend): Uint8Array;
                toProtoMsg(message: _120.MsgSend): _120.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _120.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgSendResponse;
                fromPartial(_: Partial<_120.MsgSendResponse>): _120.MsgSendResponse;
                fromAmino(_: _120.MsgSendResponseAmino): _120.MsgSendResponse;
                toAmino(_: _120.MsgSendResponse): _120.MsgSendResponseAmino;
                fromAminoMsg(object: _120.MsgSendResponseAminoMsg): _120.MsgSendResponse;
                toAminoMsg(message: _120.MsgSendResponse): _120.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _120.MsgSendResponseProtoMsg): _120.MsgSendResponse;
                toProto(message: _120.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _120.MsgSendResponse): _120.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _119.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryBalanceRequest;
                fromPartial(object: Partial<_119.QueryBalanceRequest>): _119.QueryBalanceRequest;
                fromAmino(object: _119.QueryBalanceRequestAmino): _119.QueryBalanceRequest;
                toAmino(message: _119.QueryBalanceRequest): _119.QueryBalanceRequestAmino;
                fromAminoMsg(object: _119.QueryBalanceRequestAminoMsg): _119.QueryBalanceRequest;
                toAminoMsg(message: _119.QueryBalanceRequest): _119.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _119.QueryBalanceRequestProtoMsg): _119.QueryBalanceRequest;
                toProto(message: _119.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _119.QueryBalanceRequest): _119.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _119.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryBalanceResponse;
                fromPartial(object: Partial<_119.QueryBalanceResponse>): _119.QueryBalanceResponse;
                fromAmino(object: _119.QueryBalanceResponseAmino): _119.QueryBalanceResponse;
                toAmino(message: _119.QueryBalanceResponse): _119.QueryBalanceResponseAmino;
                fromAminoMsg(object: _119.QueryBalanceResponseAminoMsg): _119.QueryBalanceResponse;
                toAminoMsg(message: _119.QueryBalanceResponse): _119.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _119.QueryBalanceResponseProtoMsg): _119.QueryBalanceResponse;
                toProto(message: _119.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _119.QueryBalanceResponse): _119.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _119.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryOwnerRequest;
                fromPartial(object: Partial<_119.QueryOwnerRequest>): _119.QueryOwnerRequest;
                fromAmino(object: _119.QueryOwnerRequestAmino): _119.QueryOwnerRequest;
                toAmino(message: _119.QueryOwnerRequest): _119.QueryOwnerRequestAmino;
                fromAminoMsg(object: _119.QueryOwnerRequestAminoMsg): _119.QueryOwnerRequest;
                toAminoMsg(message: _119.QueryOwnerRequest): _119.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _119.QueryOwnerRequestProtoMsg): _119.QueryOwnerRequest;
                toProto(message: _119.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _119.QueryOwnerRequest): _119.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _119.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryOwnerResponse;
                fromPartial(object: Partial<_119.QueryOwnerResponse>): _119.QueryOwnerResponse;
                fromAmino(object: _119.QueryOwnerResponseAmino): _119.QueryOwnerResponse;
                toAmino(message: _119.QueryOwnerResponse): _119.QueryOwnerResponseAmino;
                fromAminoMsg(object: _119.QueryOwnerResponseAminoMsg): _119.QueryOwnerResponse;
                toAminoMsg(message: _119.QueryOwnerResponse): _119.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _119.QueryOwnerResponseProtoMsg): _119.QueryOwnerResponse;
                toProto(message: _119.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _119.QueryOwnerResponse): _119.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _119.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QuerySupplyRequest;
                fromPartial(object: Partial<_119.QuerySupplyRequest>): _119.QuerySupplyRequest;
                fromAmino(object: _119.QuerySupplyRequestAmino): _119.QuerySupplyRequest;
                toAmino(message: _119.QuerySupplyRequest): _119.QuerySupplyRequestAmino;
                fromAminoMsg(object: _119.QuerySupplyRequestAminoMsg): _119.QuerySupplyRequest;
                toAminoMsg(message: _119.QuerySupplyRequest): _119.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _119.QuerySupplyRequestProtoMsg): _119.QuerySupplyRequest;
                toProto(message: _119.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _119.QuerySupplyRequest): _119.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _119.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QuerySupplyResponse;
                fromPartial(object: Partial<_119.QuerySupplyResponse>): _119.QuerySupplyResponse;
                fromAmino(object: _119.QuerySupplyResponseAmino): _119.QuerySupplyResponse;
                toAmino(message: _119.QuerySupplyResponse): _119.QuerySupplyResponseAmino;
                fromAminoMsg(object: _119.QuerySupplyResponseAminoMsg): _119.QuerySupplyResponse;
                toAminoMsg(message: _119.QuerySupplyResponse): _119.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _119.QuerySupplyResponseProtoMsg): _119.QuerySupplyResponse;
                toProto(message: _119.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _119.QuerySupplyResponse): _119.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _119.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryNFTsRequest;
                fromPartial(object: Partial<_119.QueryNFTsRequest>): _119.QueryNFTsRequest;
                fromAmino(object: _119.QueryNFTsRequestAmino): _119.QueryNFTsRequest;
                toAmino(message: _119.QueryNFTsRequest): _119.QueryNFTsRequestAmino;
                fromAminoMsg(object: _119.QueryNFTsRequestAminoMsg): _119.QueryNFTsRequest;
                toAminoMsg(message: _119.QueryNFTsRequest): _119.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryNFTsRequestProtoMsg): _119.QueryNFTsRequest;
                toProto(message: _119.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryNFTsRequest): _119.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _119.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryNFTsResponse;
                fromPartial(object: Partial<_119.QueryNFTsResponse>): _119.QueryNFTsResponse;
                fromAmino(object: _119.QueryNFTsResponseAmino): _119.QueryNFTsResponse;
                toAmino(message: _119.QueryNFTsResponse): _119.QueryNFTsResponseAmino;
                fromAminoMsg(object: _119.QueryNFTsResponseAminoMsg): _119.QueryNFTsResponse;
                toAminoMsg(message: _119.QueryNFTsResponse): _119.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryNFTsResponseProtoMsg): _119.QueryNFTsResponse;
                toProto(message: _119.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryNFTsResponse): _119.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _119.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryNFTRequest;
                fromPartial(object: Partial<_119.QueryNFTRequest>): _119.QueryNFTRequest;
                fromAmino(object: _119.QueryNFTRequestAmino): _119.QueryNFTRequest;
                toAmino(message: _119.QueryNFTRequest): _119.QueryNFTRequestAmino;
                fromAminoMsg(object: _119.QueryNFTRequestAminoMsg): _119.QueryNFTRequest;
                toAminoMsg(message: _119.QueryNFTRequest): _119.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _119.QueryNFTRequestProtoMsg): _119.QueryNFTRequest;
                toProto(message: _119.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _119.QueryNFTRequest): _119.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _119.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryNFTResponse;
                fromPartial(object: Partial<_119.QueryNFTResponse>): _119.QueryNFTResponse;
                fromAmino(object: _119.QueryNFTResponseAmino): _119.QueryNFTResponse;
                toAmino(message: _119.QueryNFTResponse): _119.QueryNFTResponseAmino;
                fromAminoMsg(object: _119.QueryNFTResponseAminoMsg): _119.QueryNFTResponse;
                toAminoMsg(message: _119.QueryNFTResponse): _119.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _119.QueryNFTResponseProtoMsg): _119.QueryNFTResponse;
                toProto(message: _119.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _119.QueryNFTResponse): _119.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _119.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryClassRequest;
                fromPartial(object: Partial<_119.QueryClassRequest>): _119.QueryClassRequest;
                fromAmino(object: _119.QueryClassRequestAmino): _119.QueryClassRequest;
                toAmino(message: _119.QueryClassRequest): _119.QueryClassRequestAmino;
                fromAminoMsg(object: _119.QueryClassRequestAminoMsg): _119.QueryClassRequest;
                toAminoMsg(message: _119.QueryClassRequest): _119.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _119.QueryClassRequestProtoMsg): _119.QueryClassRequest;
                toProto(message: _119.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _119.QueryClassRequest): _119.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _119.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryClassResponse;
                fromPartial(object: Partial<_119.QueryClassResponse>): _119.QueryClassResponse;
                fromAmino(object: _119.QueryClassResponseAmino): _119.QueryClassResponse;
                toAmino(message: _119.QueryClassResponse): _119.QueryClassResponseAmino;
                fromAminoMsg(object: _119.QueryClassResponseAminoMsg): _119.QueryClassResponse;
                toAminoMsg(message: _119.QueryClassResponse): _119.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _119.QueryClassResponseProtoMsg): _119.QueryClassResponse;
                toProto(message: _119.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _119.QueryClassResponse): _119.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _119.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryClassesRequest;
                fromPartial(object: Partial<_119.QueryClassesRequest>): _119.QueryClassesRequest;
                fromAmino(object: _119.QueryClassesRequestAmino): _119.QueryClassesRequest;
                toAmino(message: _119.QueryClassesRequest): _119.QueryClassesRequestAmino;
                fromAminoMsg(object: _119.QueryClassesRequestAminoMsg): _119.QueryClassesRequest;
                toAminoMsg(message: _119.QueryClassesRequest): _119.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _119.QueryClassesRequestProtoMsg): _119.QueryClassesRequest;
                toProto(message: _119.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _119.QueryClassesRequest): _119.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _119.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryClassesResponse;
                fromPartial(object: Partial<_119.QueryClassesResponse>): _119.QueryClassesResponse;
                fromAmino(object: _119.QueryClassesResponseAmino): _119.QueryClassesResponse;
                toAmino(message: _119.QueryClassesResponse): _119.QueryClassesResponseAmino;
                fromAminoMsg(object: _119.QueryClassesResponseAminoMsg): _119.QueryClassesResponse;
                toAminoMsg(message: _119.QueryClassesResponse): _119.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _119.QueryClassesResponseProtoMsg): _119.QueryClassesResponse;
                toProto(message: _119.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _119.QueryClassesResponse): _119.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _118.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Class;
                fromPartial(object: Partial<_118.Class>): _118.Class;
                fromAmino(object: _118.ClassAmino): _118.Class;
                toAmino(message: _118.Class): _118.ClassAmino;
                fromAminoMsg(object: _118.ClassAminoMsg): _118.Class;
                toAminoMsg(message: _118.Class): _118.ClassAminoMsg;
                fromProtoMsg(message: _118.ClassProtoMsg): _118.Class;
                toProto(message: _118.Class): Uint8Array;
                toProtoMsg(message: _118.Class): _118.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _118.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.NFT;
                fromPartial(object: Partial<_118.NFT>): _118.NFT;
                fromAmino(object: _118.NFTAmino): _118.NFT;
                toAmino(message: _118.NFT): _118.NFTAmino;
                fromAminoMsg(object: _118.NFTAminoMsg): _118.NFT;
                toAminoMsg(message: _118.NFT): _118.NFTAminoMsg;
                fromProtoMsg(message: _118.NFTProtoMsg): _118.NFT;
                toProto(message: _118.NFT): Uint8Array;
                toProtoMsg(message: _118.NFT): _118.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _117.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Entry;
                fromPartial(object: Partial<_117.Entry>): _117.Entry;
                fromAmino(object: _117.EntryAmino): _117.Entry;
                toAmino(message: _117.Entry): _117.EntryAmino;
                fromAminoMsg(object: _117.EntryAminoMsg): _117.Entry;
                toAminoMsg(message: _117.Entry): _117.EntryAminoMsg;
                fromProtoMsg(message: _117.EntryProtoMsg): _117.Entry;
                toProto(message: _117.Entry): Uint8Array;
                toProtoMsg(message: _117.Entry): _117.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _116.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.EventSend;
                fromPartial(object: Partial<_116.EventSend>): _116.EventSend;
                fromAmino(object: _116.EventSendAmino): _116.EventSend;
                toAmino(message: _116.EventSend): _116.EventSendAmino;
                fromAminoMsg(object: _116.EventSendAminoMsg): _116.EventSend;
                toAminoMsg(message: _116.EventSend): _116.EventSendAminoMsg;
                fromProtoMsg(message: _116.EventSendProtoMsg): _116.EventSend;
                toProto(message: _116.EventSend): Uint8Array;
                toProtoMsg(message: _116.EventSend): _116.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _116.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.EventMint;
                fromPartial(object: Partial<_116.EventMint>): _116.EventMint;
                fromAmino(object: _116.EventMintAmino): _116.EventMint;
                toAmino(message: _116.EventMint): _116.EventMintAmino;
                fromAminoMsg(object: _116.EventMintAminoMsg): _116.EventMint;
                toAminoMsg(message: _116.EventMint): _116.EventMintAminoMsg;
                fromProtoMsg(message: _116.EventMintProtoMsg): _116.EventMint;
                toProto(message: _116.EventMint): Uint8Array;
                toProtoMsg(message: _116.EventMint): _116.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _116.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.EventBurn;
                fromPartial(object: Partial<_116.EventBurn>): _116.EventBurn;
                fromAmino(object: _116.EventBurnAmino): _116.EventBurn;
                toAmino(message: _116.EventBurn): _116.EventBurnAmino;
                fromAminoMsg(object: _116.EventBurnAminoMsg): _116.EventBurn;
                toAminoMsg(message: _116.EventBurn): _116.EventBurnAminoMsg;
                fromProtoMsg(message: _116.EventBurnProtoMsg): _116.EventBurn;
                toProto(message: _116.EventBurn): Uint8Array;
                toProtoMsg(message: _116.EventBurn): _116.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _121.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _121.Module;
                    fromPartial(_: Partial<_121.Module>): _121.Module;
                    fromAmino(_: _121.ModuleAmino): _121.Module;
                    toAmino(_: _121.Module): _121.ModuleAmino;
                    fromAminoMsg(object: _121.ModuleAminoMsg): _121.Module;
                    toAminoMsg(message: _121.Module): _121.ModuleAminoMsg;
                    fromProtoMsg(message: _121.ModuleProtoMsg): _121.Module;
                    toProto(message: _121.Module): Uint8Array;
                    toProtoMsg(message: _121.Module): _121.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _122.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.TableDescriptor;
                fromPartial(object: Partial<_122.TableDescriptor>): _122.TableDescriptor;
                fromAmino(object: _122.TableDescriptorAmino): _122.TableDescriptor;
                toAmino(message: _122.TableDescriptor): _122.TableDescriptorAmino;
                fromAminoMsg(object: _122.TableDescriptorAminoMsg): _122.TableDescriptor;
                toAminoMsg(message: _122.TableDescriptor): _122.TableDescriptorAminoMsg;
                fromProtoMsg(message: _122.TableDescriptorProtoMsg): _122.TableDescriptor;
                toProto(message: _122.TableDescriptor): Uint8Array;
                toProtoMsg(message: _122.TableDescriptor): _122.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _122.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_122.PrimaryKeyDescriptor>): _122.PrimaryKeyDescriptor;
                fromAmino(object: _122.PrimaryKeyDescriptorAmino): _122.PrimaryKeyDescriptor;
                toAmino(message: _122.PrimaryKeyDescriptor): _122.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _122.PrimaryKeyDescriptorAminoMsg): _122.PrimaryKeyDescriptor;
                toAminoMsg(message: _122.PrimaryKeyDescriptor): _122.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _122.PrimaryKeyDescriptorProtoMsg): _122.PrimaryKeyDescriptor;
                toProto(message: _122.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _122.PrimaryKeyDescriptor): _122.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _122.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_122.SecondaryIndexDescriptor>): _122.SecondaryIndexDescriptor;
                fromAmino(object: _122.SecondaryIndexDescriptorAmino): _122.SecondaryIndexDescriptor;
                toAmino(message: _122.SecondaryIndexDescriptor): _122.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _122.SecondaryIndexDescriptorAminoMsg): _122.SecondaryIndexDescriptor;
                toAminoMsg(message: _122.SecondaryIndexDescriptor): _122.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _122.SecondaryIndexDescriptorProtoMsg): _122.SecondaryIndexDescriptor;
                toProto(message: _122.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _122.SecondaryIndexDescriptor): _122.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _122.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.SingletonDescriptor;
                fromPartial(object: Partial<_122.SingletonDescriptor>): _122.SingletonDescriptor;
                fromAmino(object: _122.SingletonDescriptorAmino): _122.SingletonDescriptor;
                toAmino(message: _122.SingletonDescriptor): _122.SingletonDescriptorAmino;
                fromAminoMsg(object: _122.SingletonDescriptorAminoMsg): _122.SingletonDescriptor;
                toAminoMsg(message: _122.SingletonDescriptor): _122.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _122.SingletonDescriptorProtoMsg): _122.SingletonDescriptor;
                toProto(message: _122.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _122.SingletonDescriptor): _122.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _123.StorageType;
            storageTypeToJSON(object: _123.StorageType): string;
            StorageType: typeof _123.StorageType;
            StorageTypeSDKType: typeof _123.StorageType;
            StorageTypeAmino: typeof _123.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _123.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_123.ModuleSchemaDescriptor>): _123.ModuleSchemaDescriptor;
                fromAmino(object: _123.ModuleSchemaDescriptorAmino): _123.ModuleSchemaDescriptor;
                toAmino(message: _123.ModuleSchemaDescriptor): _123.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _123.ModuleSchemaDescriptorAminoMsg): _123.ModuleSchemaDescriptor;
                toAminoMsg(message: _123.ModuleSchemaDescriptor): _123.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _123.ModuleSchemaDescriptorProtoMsg): _123.ModuleSchemaDescriptor;
                toProto(message: _123.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _123.ModuleSchemaDescriptor): _123.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _123.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_123.ModuleSchemaDescriptor_FileEntry>): _123.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _123.ModuleSchemaDescriptor_FileEntryAmino): _123.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _123.ModuleSchemaDescriptor_FileEntry): _123.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _123.ModuleSchemaDescriptor_FileEntryAminoMsg): _123.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _123.ModuleSchemaDescriptor_FileEntry): _123.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _123.ModuleSchemaDescriptor_FileEntryProtoMsg): _123.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _123.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _123.ModuleSchemaDescriptor_FileEntry): _123.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _269.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
                subspaces(request?: _125.QuerySubspacesRequest): Promise<_125.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _250.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _125.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryParamsRequest;
                fromPartial(object: Partial<_125.QueryParamsRequest>): _125.QueryParamsRequest;
                fromAmino(object: _125.QueryParamsRequestAmino): _125.QueryParamsRequest;
                toAmino(message: _125.QueryParamsRequest): _125.QueryParamsRequestAmino;
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
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _125.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.QuerySubspacesRequest;
                fromPartial(_: Partial<_125.QuerySubspacesRequest>): _125.QuerySubspacesRequest;
                fromAmino(_: _125.QuerySubspacesRequestAmino): _125.QuerySubspacesRequest;
                toAmino(_: _125.QuerySubspacesRequest): _125.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _125.QuerySubspacesRequestAminoMsg): _125.QuerySubspacesRequest;
                toAminoMsg(message: _125.QuerySubspacesRequest): _125.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _125.QuerySubspacesRequestProtoMsg): _125.QuerySubspacesRequest;
                toProto(message: _125.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _125.QuerySubspacesRequest): _125.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _125.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QuerySubspacesResponse;
                fromPartial(object: Partial<_125.QuerySubspacesResponse>): _125.QuerySubspacesResponse;
                fromAmino(object: _125.QuerySubspacesResponseAmino): _125.QuerySubspacesResponse;
                toAmino(message: _125.QuerySubspacesResponse): _125.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _125.QuerySubspacesResponseAminoMsg): _125.QuerySubspacesResponse;
                toAminoMsg(message: _125.QuerySubspacesResponse): _125.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _125.QuerySubspacesResponseProtoMsg): _125.QuerySubspacesResponse;
                toProto(message: _125.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _125.QuerySubspacesResponse): _125.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _125.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.Subspace;
                fromPartial(object: Partial<_125.Subspace>): _125.Subspace;
                fromAmino(object: _125.SubspaceAmino): _125.Subspace;
                toAmino(message: _125.Subspace): _125.SubspaceAmino;
                fromAminoMsg(object: _125.SubspaceAminoMsg): _125.Subspace;
                toAminoMsg(message: _125.Subspace): _125.SubspaceAminoMsg;
                fromProtoMsg(message: _125.SubspaceProtoMsg): _125.Subspace;
                toProto(message: _125.Subspace): Uint8Array;
                toProtoMsg(message: _125.Subspace): _125.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _124.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.ParameterChangeProposal;
                fromPartial(object: Partial<_124.ParameterChangeProposal>): _124.ParameterChangeProposal;
                fromAmino(object: _124.ParameterChangeProposalAmino): _124.ParameterChangeProposal;
                toAmino(message: _124.ParameterChangeProposal): _124.ParameterChangeProposalAmino;
                fromAminoMsg(object: _124.ParameterChangeProposalAminoMsg): _124.ParameterChangeProposal;
                toAminoMsg(message: _124.ParameterChangeProposal): _124.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _124.ParameterChangeProposalProtoMsg): _124.ParameterChangeProposal;
                toProto(message: _124.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _124.ParameterChangeProposal): _124.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _124.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.ParamChange;
                fromPartial(object: Partial<_124.ParamChange>): _124.ParamChange;
                fromAmino(object: _124.ParamChangeAmino): _124.ParamChange;
                toAmino(message: _124.ParamChange): _124.ParamChangeAmino;
                fromAminoMsg(object: _124.ParamChangeAminoMsg): _124.ParamChange;
                toAminoMsg(message: _124.ParamChange): _124.ParamChangeAminoMsg;
                fromProtoMsg(message: _124.ParamChangeProtoMsg): _124.ParamChange;
                toProto(message: _124.ParamChange): Uint8Array;
                toProtoMsg(message: _124.ParamChange): _124.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _284.MsgClientImpl;
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                signingInfo(request: _127.QuerySigningInfoRequest): Promise<_127.QuerySigningInfoResponse>;
                signingInfos(request?: _127.QuerySigningInfosRequest): Promise<_127.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _251.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _129.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _129.MsgUnjail): {
                        typeUrl: string;
                        value: _129.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _129.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _129.MsgUnjail): {
                        typeUrl: string;
                        value: _129.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _129.MsgUnjail) => _129.MsgUnjailAmino;
                    fromAmino: (object: _129.MsgUnjailAmino) => _129.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _129.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgUnjail;
                fromPartial(object: Partial<_129.MsgUnjail>): _129.MsgUnjail;
                fromAmino(object: _129.MsgUnjailAmino): _129.MsgUnjail;
                toAmino(message: _129.MsgUnjail): _129.MsgUnjailAmino;
                fromAminoMsg(object: _129.MsgUnjailAminoMsg): _129.MsgUnjail;
                toAminoMsg(message: _129.MsgUnjail): _129.MsgUnjailAminoMsg;
                fromProtoMsg(message: _129.MsgUnjailProtoMsg): _129.MsgUnjail;
                toProto(message: _129.MsgUnjail): Uint8Array;
                toProtoMsg(message: _129.MsgUnjail): _129.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _129.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgUnjailResponse;
                fromPartial(_: Partial<_129.MsgUnjailResponse>): _129.MsgUnjailResponse;
                fromAmino(_: _129.MsgUnjailResponseAmino): _129.MsgUnjailResponse;
                toAmino(_: _129.MsgUnjailResponse): _129.MsgUnjailResponseAmino;
                fromAminoMsg(object: _129.MsgUnjailResponseAminoMsg): _129.MsgUnjailResponse;
                toAminoMsg(message: _129.MsgUnjailResponse): _129.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _129.MsgUnjailResponseProtoMsg): _129.MsgUnjailResponse;
                toProto(message: _129.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _129.MsgUnjailResponse): _129.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _128.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.ValidatorSigningInfo;
                fromPartial(object: Partial<_128.ValidatorSigningInfo>): _128.ValidatorSigningInfo;
                fromAmino(object: _128.ValidatorSigningInfoAmino): _128.ValidatorSigningInfo;
                toAmino(message: _128.ValidatorSigningInfo): _128.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _128.ValidatorSigningInfoAminoMsg): _128.ValidatorSigningInfo;
                toAminoMsg(message: _128.ValidatorSigningInfo): _128.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _128.ValidatorSigningInfoProtoMsg): _128.ValidatorSigningInfo;
                toProto(message: _128.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _128.ValidatorSigningInfo): _128.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _128.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Params;
                fromPartial(object: Partial<_128.Params>): _128.Params;
                fromAmino(object: _128.ParamsAmino): _128.Params;
                toAmino(message: _128.Params): _128.ParamsAmino;
                fromAminoMsg(object: _128.ParamsAminoMsg): _128.Params;
                toAminoMsg(message: _128.Params): _128.ParamsAminoMsg;
                fromProtoMsg(message: _128.ParamsProtoMsg): _128.Params;
                toProto(message: _128.Params): Uint8Array;
                toProtoMsg(message: _128.Params): _128.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _127.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.QueryParamsRequest;
                fromPartial(_: Partial<_127.QueryParamsRequest>): _127.QueryParamsRequest;
                fromAmino(_: _127.QueryParamsRequestAmino): _127.QueryParamsRequest;
                toAmino(_: _127.QueryParamsRequest): _127.QueryParamsRequestAmino;
                fromAminoMsg(object: _127.QueryParamsRequestAminoMsg): _127.QueryParamsRequest;
                toAminoMsg(message: _127.QueryParamsRequest): _127.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _127.QueryParamsRequestProtoMsg): _127.QueryParamsRequest;
                toProto(message: _127.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _127.QueryParamsRequest): _127.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _127.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryParamsResponse;
                fromPartial(object: Partial<_127.QueryParamsResponse>): _127.QueryParamsResponse;
                fromAmino(object: _127.QueryParamsResponseAmino): _127.QueryParamsResponse;
                toAmino(message: _127.QueryParamsResponse): _127.QueryParamsResponseAmino;
                fromAminoMsg(object: _127.QueryParamsResponseAminoMsg): _127.QueryParamsResponse;
                toAminoMsg(message: _127.QueryParamsResponse): _127.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _127.QueryParamsResponseProtoMsg): _127.QueryParamsResponse;
                toProto(message: _127.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _127.QueryParamsResponse): _127.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _127.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QuerySigningInfoRequest;
                fromPartial(object: Partial<_127.QuerySigningInfoRequest>): _127.QuerySigningInfoRequest;
                fromAmino(object: _127.QuerySigningInfoRequestAmino): _127.QuerySigningInfoRequest;
                toAmino(message: _127.QuerySigningInfoRequest): _127.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _127.QuerySigningInfoRequestAminoMsg): _127.QuerySigningInfoRequest;
                toAminoMsg(message: _127.QuerySigningInfoRequest): _127.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _127.QuerySigningInfoRequestProtoMsg): _127.QuerySigningInfoRequest;
                toProto(message: _127.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _127.QuerySigningInfoRequest): _127.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _127.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QuerySigningInfoResponse;
                fromPartial(object: Partial<_127.QuerySigningInfoResponse>): _127.QuerySigningInfoResponse;
                fromAmino(object: _127.QuerySigningInfoResponseAmino): _127.QuerySigningInfoResponse;
                toAmino(message: _127.QuerySigningInfoResponse): _127.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _127.QuerySigningInfoResponseAminoMsg): _127.QuerySigningInfoResponse;
                toAminoMsg(message: _127.QuerySigningInfoResponse): _127.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _127.QuerySigningInfoResponseProtoMsg): _127.QuerySigningInfoResponse;
                toProto(message: _127.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _127.QuerySigningInfoResponse): _127.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _127.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QuerySigningInfosRequest;
                fromPartial(object: Partial<_127.QuerySigningInfosRequest>): _127.QuerySigningInfosRequest;
                fromAmino(object: _127.QuerySigningInfosRequestAmino): _127.QuerySigningInfosRequest;
                toAmino(message: _127.QuerySigningInfosRequest): _127.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _127.QuerySigningInfosRequestAminoMsg): _127.QuerySigningInfosRequest;
                toAminoMsg(message: _127.QuerySigningInfosRequest): _127.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _127.QuerySigningInfosRequestProtoMsg): _127.QuerySigningInfosRequest;
                toProto(message: _127.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _127.QuerySigningInfosRequest): _127.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _127.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QuerySigningInfosResponse;
                fromPartial(object: Partial<_127.QuerySigningInfosResponse>): _127.QuerySigningInfosResponse;
                fromAmino(object: _127.QuerySigningInfosResponseAmino): _127.QuerySigningInfosResponse;
                toAmino(message: _127.QuerySigningInfosResponse): _127.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _127.QuerySigningInfosResponseAminoMsg): _127.QuerySigningInfosResponse;
                toAminoMsg(message: _127.QuerySigningInfosResponse): _127.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _127.QuerySigningInfosResponseProtoMsg): _127.QuerySigningInfosResponse;
                toProto(message: _127.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _127.QuerySigningInfosResponse): _127.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _126.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GenesisState;
                fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
                fromAmino(object: _126.GenesisStateAmino): _126.GenesisState;
                toAmino(message: _126.GenesisState): _126.GenesisStateAmino;
                fromAminoMsg(object: _126.GenesisStateAminoMsg): _126.GenesisState;
                toAminoMsg(message: _126.GenesisState): _126.GenesisStateAminoMsg;
                fromProtoMsg(message: _126.GenesisStateProtoMsg): _126.GenesisState;
                toProto(message: _126.GenesisState): Uint8Array;
                toProtoMsg(message: _126.GenesisState): _126.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _126.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.SigningInfo;
                fromPartial(object: Partial<_126.SigningInfo>): _126.SigningInfo;
                fromAmino(object: _126.SigningInfoAmino): _126.SigningInfo;
                toAmino(message: _126.SigningInfo): _126.SigningInfoAmino;
                fromAminoMsg(object: _126.SigningInfoAminoMsg): _126.SigningInfo;
                toAminoMsg(message: _126.SigningInfo): _126.SigningInfoAminoMsg;
                fromProtoMsg(message: _126.SigningInfoProtoMsg): _126.SigningInfo;
                toProto(message: _126.SigningInfo): Uint8Array;
                toProtoMsg(message: _126.SigningInfo): _126.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _126.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.ValidatorMissedBlocks;
                fromPartial(object: Partial<_126.ValidatorMissedBlocks>): _126.ValidatorMissedBlocks;
                fromAmino(object: _126.ValidatorMissedBlocksAmino): _126.ValidatorMissedBlocks;
                toAmino(message: _126.ValidatorMissedBlocks): _126.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _126.ValidatorMissedBlocksAminoMsg): _126.ValidatorMissedBlocks;
                toAminoMsg(message: _126.ValidatorMissedBlocks): _126.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _126.ValidatorMissedBlocksProtoMsg): _126.ValidatorMissedBlocks;
                toProto(message: _126.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _126.ValidatorMissedBlocks): _126.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _126.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.MissedBlock;
                fromPartial(object: Partial<_126.MissedBlock>): _126.MissedBlock;
                fromAmino(object: _126.MissedBlockAmino): _126.MissedBlock;
                toAmino(message: _126.MissedBlock): _126.MissedBlockAmino;
                fromAminoMsg(object: _126.MissedBlockAminoMsg): _126.MissedBlock;
                toAminoMsg(message: _126.MissedBlock): _126.MissedBlockAminoMsg;
                fromProtoMsg(message: _126.MissedBlockProtoMsg): _126.MissedBlock;
                toProto(message: _126.MissedBlock): Uint8Array;
                toProtoMsg(message: _126.MissedBlock): _126.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _132.QueryValidatorsRequest): Promise<_132.QueryValidatorsResponse>;
                validator(request: _132.QueryValidatorRequest): Promise<_132.QueryValidatorResponse>;
                validatorDelegations(request: _132.QueryValidatorDelegationsRequest): Promise<_132.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _132.QueryValidatorUnbondingDelegationsRequest): Promise<_132.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _132.QueryDelegationRequest): Promise<_132.QueryDelegationResponse>;
                unbondingDelegation(request: _132.QueryUnbondingDelegationRequest): Promise<_132.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _132.QueryDelegatorDelegationsRequest): Promise<_132.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _132.QueryDelegatorUnbondingDelegationsRequest): Promise<_132.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _132.QueryRedelegationsRequest): Promise<_132.QueryRedelegationsResponse>;
                delegatorValidators(request: _132.QueryDelegatorValidatorsRequest): Promise<_132.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _132.QueryDelegatorValidatorRequest): Promise<_132.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _132.QueryHistoricalInfoRequest): Promise<_132.QueryHistoricalInfoResponse>;
                pool(request?: _132.QueryPoolRequest): Promise<_132.QueryPoolResponse>;
                params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _134.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: _134.MsgCreateValidator;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: _134.MsgEditValidator;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: _134.MsgDelegate;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _134.MsgBeginRedelegate;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: _134.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _134.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _134.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _134.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _134.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _134.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _134.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _134.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _134.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: _134.MsgCreateValidator;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: _134.MsgEditValidator;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: _134.MsgDelegate;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _134.MsgBeginRedelegate;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: _134.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _134.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _134.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _134.MsgCreateValidator) => _134.MsgCreateValidatorAmino;
                    fromAmino: (object: _134.MsgCreateValidatorAmino) => _134.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _134.MsgEditValidator) => _134.MsgEditValidatorAmino;
                    fromAmino: (object: _134.MsgEditValidatorAmino) => _134.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _134.MsgDelegate) => _134.MsgDelegateAmino;
                    fromAmino: (object: _134.MsgDelegateAmino) => _134.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _134.MsgBeginRedelegate) => _134.MsgBeginRedelegateAmino;
                    fromAmino: (object: _134.MsgBeginRedelegateAmino) => _134.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _134.MsgUndelegate) => _134.MsgUndelegateAmino;
                    fromAmino: (object: _134.MsgUndelegateAmino) => _134.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _134.MsgCancelUnbondingDelegation) => _134.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _134.MsgCancelUnbondingDelegationAmino) => _134.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _134.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgCreateValidator;
                fromPartial(object: Partial<_134.MsgCreateValidator>): _134.MsgCreateValidator;
                fromAmino(object: _134.MsgCreateValidatorAmino): _134.MsgCreateValidator;
                toAmino(message: _134.MsgCreateValidator): _134.MsgCreateValidatorAmino;
                fromAminoMsg(object: _134.MsgCreateValidatorAminoMsg): _134.MsgCreateValidator;
                toAminoMsg(message: _134.MsgCreateValidator): _134.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _134.MsgCreateValidatorProtoMsg): _134.MsgCreateValidator;
                toProto(message: _134.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _134.MsgCreateValidator): _134.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _134.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_134.MsgCreateValidatorResponse>): _134.MsgCreateValidatorResponse;
                fromAmino(_: _134.MsgCreateValidatorResponseAmino): _134.MsgCreateValidatorResponse;
                toAmino(_: _134.MsgCreateValidatorResponse): _134.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _134.MsgCreateValidatorResponseAminoMsg): _134.MsgCreateValidatorResponse;
                toAminoMsg(message: _134.MsgCreateValidatorResponse): _134.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _134.MsgCreateValidatorResponseProtoMsg): _134.MsgCreateValidatorResponse;
                toProto(message: _134.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _134.MsgCreateValidatorResponse): _134.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _134.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgEditValidator;
                fromPartial(object: Partial<_134.MsgEditValidator>): _134.MsgEditValidator;
                fromAmino(object: _134.MsgEditValidatorAmino): _134.MsgEditValidator;
                toAmino(message: _134.MsgEditValidator): _134.MsgEditValidatorAmino;
                fromAminoMsg(object: _134.MsgEditValidatorAminoMsg): _134.MsgEditValidator;
                toAminoMsg(message: _134.MsgEditValidator): _134.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _134.MsgEditValidatorProtoMsg): _134.MsgEditValidator;
                toProto(message: _134.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _134.MsgEditValidator): _134.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _134.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.MsgEditValidatorResponse;
                fromPartial(_: Partial<_134.MsgEditValidatorResponse>): _134.MsgEditValidatorResponse;
                fromAmino(_: _134.MsgEditValidatorResponseAmino): _134.MsgEditValidatorResponse;
                toAmino(_: _134.MsgEditValidatorResponse): _134.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _134.MsgEditValidatorResponseAminoMsg): _134.MsgEditValidatorResponse;
                toAminoMsg(message: _134.MsgEditValidatorResponse): _134.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _134.MsgEditValidatorResponseProtoMsg): _134.MsgEditValidatorResponse;
                toProto(message: _134.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _134.MsgEditValidatorResponse): _134.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _134.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgDelegate;
                fromPartial(object: Partial<_134.MsgDelegate>): _134.MsgDelegate;
                fromAmino(object: _134.MsgDelegateAmino): _134.MsgDelegate;
                toAmino(message: _134.MsgDelegate): _134.MsgDelegateAmino;
                fromAminoMsg(object: _134.MsgDelegateAminoMsg): _134.MsgDelegate;
                toAminoMsg(message: _134.MsgDelegate): _134.MsgDelegateAminoMsg;
                fromProtoMsg(message: _134.MsgDelegateProtoMsg): _134.MsgDelegate;
                toProto(message: _134.MsgDelegate): Uint8Array;
                toProtoMsg(message: _134.MsgDelegate): _134.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _134.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.MsgDelegateResponse;
                fromPartial(_: Partial<_134.MsgDelegateResponse>): _134.MsgDelegateResponse;
                fromAmino(_: _134.MsgDelegateResponseAmino): _134.MsgDelegateResponse;
                toAmino(_: _134.MsgDelegateResponse): _134.MsgDelegateResponseAmino;
                fromAminoMsg(object: _134.MsgDelegateResponseAminoMsg): _134.MsgDelegateResponse;
                toAminoMsg(message: _134.MsgDelegateResponse): _134.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _134.MsgDelegateResponseProtoMsg): _134.MsgDelegateResponse;
                toProto(message: _134.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _134.MsgDelegateResponse): _134.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _134.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgBeginRedelegate;
                fromPartial(object: Partial<_134.MsgBeginRedelegate>): _134.MsgBeginRedelegate;
                fromAmino(object: _134.MsgBeginRedelegateAmino): _134.MsgBeginRedelegate;
                toAmino(message: _134.MsgBeginRedelegate): _134.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _134.MsgBeginRedelegateAminoMsg): _134.MsgBeginRedelegate;
                toAminoMsg(message: _134.MsgBeginRedelegate): _134.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _134.MsgBeginRedelegateProtoMsg): _134.MsgBeginRedelegate;
                toProto(message: _134.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _134.MsgBeginRedelegate): _134.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _134.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_134.MsgBeginRedelegateResponse>): _134.MsgBeginRedelegateResponse;
                fromAmino(object: _134.MsgBeginRedelegateResponseAmino): _134.MsgBeginRedelegateResponse;
                toAmino(message: _134.MsgBeginRedelegateResponse): _134.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _134.MsgBeginRedelegateResponseAminoMsg): _134.MsgBeginRedelegateResponse;
                toAminoMsg(message: _134.MsgBeginRedelegateResponse): _134.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _134.MsgBeginRedelegateResponseProtoMsg): _134.MsgBeginRedelegateResponse;
                toProto(message: _134.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _134.MsgBeginRedelegateResponse): _134.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _134.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgUndelegate;
                fromPartial(object: Partial<_134.MsgUndelegate>): _134.MsgUndelegate;
                fromAmino(object: _134.MsgUndelegateAmino): _134.MsgUndelegate;
                toAmino(message: _134.MsgUndelegate): _134.MsgUndelegateAmino;
                fromAminoMsg(object: _134.MsgUndelegateAminoMsg): _134.MsgUndelegate;
                toAminoMsg(message: _134.MsgUndelegate): _134.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _134.MsgUndelegateProtoMsg): _134.MsgUndelegate;
                toProto(message: _134.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _134.MsgUndelegate): _134.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _134.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgUndelegateResponse;
                fromPartial(object: Partial<_134.MsgUndelegateResponse>): _134.MsgUndelegateResponse;
                fromAmino(object: _134.MsgUndelegateResponseAmino): _134.MsgUndelegateResponse;
                toAmino(message: _134.MsgUndelegateResponse): _134.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _134.MsgUndelegateResponseAminoMsg): _134.MsgUndelegateResponse;
                toAminoMsg(message: _134.MsgUndelegateResponse): _134.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _134.MsgUndelegateResponseProtoMsg): _134.MsgUndelegateResponse;
                toProto(message: _134.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _134.MsgUndelegateResponse): _134.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _134.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_134.MsgCancelUnbondingDelegation>): _134.MsgCancelUnbondingDelegation;
                fromAmino(object: _134.MsgCancelUnbondingDelegationAmino): _134.MsgCancelUnbondingDelegation;
                toAmino(message: _134.MsgCancelUnbondingDelegation): _134.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _134.MsgCancelUnbondingDelegationAminoMsg): _134.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _134.MsgCancelUnbondingDelegation): _134.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _134.MsgCancelUnbondingDelegationProtoMsg): _134.MsgCancelUnbondingDelegation;
                toProto(message: _134.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _134.MsgCancelUnbondingDelegation): _134.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _134.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_134.MsgCancelUnbondingDelegationResponse>): _134.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _134.MsgCancelUnbondingDelegationResponseAmino): _134.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _134.MsgCancelUnbondingDelegationResponse): _134.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _134.MsgCancelUnbondingDelegationResponseAminoMsg): _134.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _134.MsgCancelUnbondingDelegationResponse): _134.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _134.MsgCancelUnbondingDelegationResponseProtoMsg): _134.MsgCancelUnbondingDelegationResponse;
                toProto(message: _134.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _134.MsgCancelUnbondingDelegationResponse): _134.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _133.BondStatus;
            bondStatusToJSON(object: _133.BondStatus): string;
            BondStatus: typeof _133.BondStatus;
            BondStatusSDKType: typeof _133.BondStatus;
            BondStatusAmino: typeof _133.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _133.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.HistoricalInfo;
                fromPartial(object: Partial<_133.HistoricalInfo>): _133.HistoricalInfo;
                fromAmino(object: _133.HistoricalInfoAmino): _133.HistoricalInfo;
                toAmino(message: _133.HistoricalInfo): _133.HistoricalInfoAmino;
                fromAminoMsg(object: _133.HistoricalInfoAminoMsg): _133.HistoricalInfo;
                toAminoMsg(message: _133.HistoricalInfo): _133.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _133.HistoricalInfoProtoMsg): _133.HistoricalInfo;
                toProto(message: _133.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _133.HistoricalInfo): _133.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _133.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.CommissionRates;
                fromPartial(object: Partial<_133.CommissionRates>): _133.CommissionRates;
                fromAmino(object: _133.CommissionRatesAmino): _133.CommissionRates;
                toAmino(message: _133.CommissionRates): _133.CommissionRatesAmino;
                fromAminoMsg(object: _133.CommissionRatesAminoMsg): _133.CommissionRates;
                toAminoMsg(message: _133.CommissionRates): _133.CommissionRatesAminoMsg;
                fromProtoMsg(message: _133.CommissionRatesProtoMsg): _133.CommissionRates;
                toProto(message: _133.CommissionRates): Uint8Array;
                toProtoMsg(message: _133.CommissionRates): _133.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _133.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Commission;
                fromPartial(object: Partial<_133.Commission>): _133.Commission;
                fromAmino(object: _133.CommissionAmino): _133.Commission;
                toAmino(message: _133.Commission): _133.CommissionAmino;
                fromAminoMsg(object: _133.CommissionAminoMsg): _133.Commission;
                toAminoMsg(message: _133.Commission): _133.CommissionAminoMsg;
                fromProtoMsg(message: _133.CommissionProtoMsg): _133.Commission;
                toProto(message: _133.Commission): Uint8Array;
                toProtoMsg(message: _133.Commission): _133.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _133.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Description;
                fromPartial(object: Partial<_133.Description>): _133.Description;
                fromAmino(object: _133.DescriptionAmino): _133.Description;
                toAmino(message: _133.Description): _133.DescriptionAmino;
                fromAminoMsg(object: _133.DescriptionAminoMsg): _133.Description;
                toAminoMsg(message: _133.Description): _133.DescriptionAminoMsg;
                fromProtoMsg(message: _133.DescriptionProtoMsg): _133.Description;
                toProto(message: _133.Description): Uint8Array;
                toProtoMsg(message: _133.Description): _133.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _133.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Validator;
                fromPartial(object: Partial<_133.Validator>): _133.Validator;
                fromAmino(object: _133.ValidatorAmino): _133.Validator;
                toAmino(message: _133.Validator): _133.ValidatorAmino;
                fromAminoMsg(object: _133.ValidatorAminoMsg): _133.Validator;
                toAminoMsg(message: _133.Validator): _133.ValidatorAminoMsg;
                fromProtoMsg(message: _133.ValidatorProtoMsg): _133.Validator;
                toProto(message: _133.Validator): Uint8Array;
                toProtoMsg(message: _133.Validator): _133.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _133.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.ValAddresses;
                fromPartial(object: Partial<_133.ValAddresses>): _133.ValAddresses;
                fromAmino(object: _133.ValAddressesAmino): _133.ValAddresses;
                toAmino(message: _133.ValAddresses): _133.ValAddressesAmino;
                fromAminoMsg(object: _133.ValAddressesAminoMsg): _133.ValAddresses;
                toAminoMsg(message: _133.ValAddresses): _133.ValAddressesAminoMsg;
                fromProtoMsg(message: _133.ValAddressesProtoMsg): _133.ValAddresses;
                toProto(message: _133.ValAddresses): Uint8Array;
                toProtoMsg(message: _133.ValAddresses): _133.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _133.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DVPair;
                fromPartial(object: Partial<_133.DVPair>): _133.DVPair;
                fromAmino(object: _133.DVPairAmino): _133.DVPair;
                toAmino(message: _133.DVPair): _133.DVPairAmino;
                fromAminoMsg(object: _133.DVPairAminoMsg): _133.DVPair;
                toAminoMsg(message: _133.DVPair): _133.DVPairAminoMsg;
                fromProtoMsg(message: _133.DVPairProtoMsg): _133.DVPair;
                toProto(message: _133.DVPair): Uint8Array;
                toProtoMsg(message: _133.DVPair): _133.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _133.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DVPairs;
                fromPartial(object: Partial<_133.DVPairs>): _133.DVPairs;
                fromAmino(object: _133.DVPairsAmino): _133.DVPairs;
                toAmino(message: _133.DVPairs): _133.DVPairsAmino;
                fromAminoMsg(object: _133.DVPairsAminoMsg): _133.DVPairs;
                toAminoMsg(message: _133.DVPairs): _133.DVPairsAminoMsg;
                fromProtoMsg(message: _133.DVPairsProtoMsg): _133.DVPairs;
                toProto(message: _133.DVPairs): Uint8Array;
                toProtoMsg(message: _133.DVPairs): _133.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _133.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DVVTriplet;
                fromPartial(object: Partial<_133.DVVTriplet>): _133.DVVTriplet;
                fromAmino(object: _133.DVVTripletAmino): _133.DVVTriplet;
                toAmino(message: _133.DVVTriplet): _133.DVVTripletAmino;
                fromAminoMsg(object: _133.DVVTripletAminoMsg): _133.DVVTriplet;
                toAminoMsg(message: _133.DVVTriplet): _133.DVVTripletAminoMsg;
                fromProtoMsg(message: _133.DVVTripletProtoMsg): _133.DVVTriplet;
                toProto(message: _133.DVVTriplet): Uint8Array;
                toProtoMsg(message: _133.DVVTriplet): _133.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _133.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DVVTriplets;
                fromPartial(object: Partial<_133.DVVTriplets>): _133.DVVTriplets;
                fromAmino(object: _133.DVVTripletsAmino): _133.DVVTriplets;
                toAmino(message: _133.DVVTriplets): _133.DVVTripletsAmino;
                fromAminoMsg(object: _133.DVVTripletsAminoMsg): _133.DVVTriplets;
                toAminoMsg(message: _133.DVVTriplets): _133.DVVTripletsAminoMsg;
                fromProtoMsg(message: _133.DVVTripletsProtoMsg): _133.DVVTriplets;
                toProto(message: _133.DVVTriplets): Uint8Array;
                toProtoMsg(message: _133.DVVTriplets): _133.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _133.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Delegation;
                fromPartial(object: Partial<_133.Delegation>): _133.Delegation;
                fromAmino(object: _133.DelegationAmino): _133.Delegation;
                toAmino(message: _133.Delegation): _133.DelegationAmino;
                fromAminoMsg(object: _133.DelegationAminoMsg): _133.Delegation;
                toAminoMsg(message: _133.Delegation): _133.DelegationAminoMsg;
                fromProtoMsg(message: _133.DelegationProtoMsg): _133.Delegation;
                toProto(message: _133.Delegation): Uint8Array;
                toProtoMsg(message: _133.Delegation): _133.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _133.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.UnbondingDelegation;
                fromPartial(object: Partial<_133.UnbondingDelegation>): _133.UnbondingDelegation;
                fromAmino(object: _133.UnbondingDelegationAmino): _133.UnbondingDelegation;
                toAmino(message: _133.UnbondingDelegation): _133.UnbondingDelegationAmino;
                fromAminoMsg(object: _133.UnbondingDelegationAminoMsg): _133.UnbondingDelegation;
                toAminoMsg(message: _133.UnbondingDelegation): _133.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _133.UnbondingDelegationProtoMsg): _133.UnbondingDelegation;
                toProto(message: _133.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _133.UnbondingDelegation): _133.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _133.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.UnbondingDelegationEntry;
                fromPartial(object: Partial<_133.UnbondingDelegationEntry>): _133.UnbondingDelegationEntry;
                fromAmino(object: _133.UnbondingDelegationEntryAmino): _133.UnbondingDelegationEntry;
                toAmino(message: _133.UnbondingDelegationEntry): _133.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _133.UnbondingDelegationEntryAminoMsg): _133.UnbondingDelegationEntry;
                toAminoMsg(message: _133.UnbondingDelegationEntry): _133.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _133.UnbondingDelegationEntryProtoMsg): _133.UnbondingDelegationEntry;
                toProto(message: _133.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _133.UnbondingDelegationEntry): _133.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _133.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.RedelegationEntry;
                fromPartial(object: Partial<_133.RedelegationEntry>): _133.RedelegationEntry;
                fromAmino(object: _133.RedelegationEntryAmino): _133.RedelegationEntry;
                toAmino(message: _133.RedelegationEntry): _133.RedelegationEntryAmino;
                fromAminoMsg(object: _133.RedelegationEntryAminoMsg): _133.RedelegationEntry;
                toAminoMsg(message: _133.RedelegationEntry): _133.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _133.RedelegationEntryProtoMsg): _133.RedelegationEntry;
                toProto(message: _133.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _133.RedelegationEntry): _133.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _133.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Redelegation;
                fromPartial(object: Partial<_133.Redelegation>): _133.Redelegation;
                fromAmino(object: _133.RedelegationAmino): _133.Redelegation;
                toAmino(message: _133.Redelegation): _133.RedelegationAmino;
                fromAminoMsg(object: _133.RedelegationAminoMsg): _133.Redelegation;
                toAminoMsg(message: _133.Redelegation): _133.RedelegationAminoMsg;
                fromProtoMsg(message: _133.RedelegationProtoMsg): _133.Redelegation;
                toProto(message: _133.Redelegation): Uint8Array;
                toProtoMsg(message: _133.Redelegation): _133.RedelegationProtoMsg;
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
            DelegationResponse: {
                typeUrl: string;
                encode(message: _133.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DelegationResponse;
                fromPartial(object: Partial<_133.DelegationResponse>): _133.DelegationResponse;
                fromAmino(object: _133.DelegationResponseAmino): _133.DelegationResponse;
                toAmino(message: _133.DelegationResponse): _133.DelegationResponseAmino;
                fromAminoMsg(object: _133.DelegationResponseAminoMsg): _133.DelegationResponse;
                toAminoMsg(message: _133.DelegationResponse): _133.DelegationResponseAminoMsg;
                fromProtoMsg(message: _133.DelegationResponseProtoMsg): _133.DelegationResponse;
                toProto(message: _133.DelegationResponse): Uint8Array;
                toProtoMsg(message: _133.DelegationResponse): _133.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _133.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.RedelegationEntryResponse;
                fromPartial(object: Partial<_133.RedelegationEntryResponse>): _133.RedelegationEntryResponse;
                fromAmino(object: _133.RedelegationEntryResponseAmino): _133.RedelegationEntryResponse;
                toAmino(message: _133.RedelegationEntryResponse): _133.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _133.RedelegationEntryResponseAminoMsg): _133.RedelegationEntryResponse;
                toAminoMsg(message: _133.RedelegationEntryResponse): _133.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _133.RedelegationEntryResponseProtoMsg): _133.RedelegationEntryResponse;
                toProto(message: _133.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _133.RedelegationEntryResponse): _133.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _133.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.RedelegationResponse;
                fromPartial(object: Partial<_133.RedelegationResponse>): _133.RedelegationResponse;
                fromAmino(object: _133.RedelegationResponseAmino): _133.RedelegationResponse;
                toAmino(message: _133.RedelegationResponse): _133.RedelegationResponseAmino;
                fromAminoMsg(object: _133.RedelegationResponseAminoMsg): _133.RedelegationResponse;
                toAminoMsg(message: _133.RedelegationResponse): _133.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _133.RedelegationResponseProtoMsg): _133.RedelegationResponse;
                toProto(message: _133.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _133.RedelegationResponse): _133.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _133.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Pool;
                fromPartial(object: Partial<_133.Pool>): _133.Pool;
                fromAmino(object: _133.PoolAmino): _133.Pool;
                toAmino(message: _133.Pool): _133.PoolAmino;
                fromAminoMsg(object: _133.PoolAminoMsg): _133.Pool;
                toAminoMsg(message: _133.Pool): _133.PoolAminoMsg;
                fromProtoMsg(message: _133.PoolProtoMsg): _133.Pool;
                toProto(message: _133.Pool): Uint8Array;
                toProtoMsg(message: _133.Pool): _133.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorsRequest;
                fromPartial(object: Partial<_132.QueryValidatorsRequest>): _132.QueryValidatorsRequest;
                fromAmino(object: _132.QueryValidatorsRequestAmino): _132.QueryValidatorsRequest;
                toAmino(message: _132.QueryValidatorsRequest): _132.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorsRequestAminoMsg): _132.QueryValidatorsRequest;
                toAminoMsg(message: _132.QueryValidatorsRequest): _132.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorsRequestProtoMsg): _132.QueryValidatorsRequest;
                toProto(message: _132.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorsRequest): _132.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorsResponse;
                fromPartial(object: Partial<_132.QueryValidatorsResponse>): _132.QueryValidatorsResponse;
                fromAmino(object: _132.QueryValidatorsResponseAmino): _132.QueryValidatorsResponse;
                toAmino(message: _132.QueryValidatorsResponse): _132.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorsResponseAminoMsg): _132.QueryValidatorsResponse;
                toAminoMsg(message: _132.QueryValidatorsResponse): _132.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorsResponseProtoMsg): _132.QueryValidatorsResponse;
                toProto(message: _132.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorsResponse): _132.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorRequest;
                fromPartial(object: Partial<_132.QueryValidatorRequest>): _132.QueryValidatorRequest;
                fromAmino(object: _132.QueryValidatorRequestAmino): _132.QueryValidatorRequest;
                toAmino(message: _132.QueryValidatorRequest): _132.QueryValidatorRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorRequestAminoMsg): _132.QueryValidatorRequest;
                toAminoMsg(message: _132.QueryValidatorRequest): _132.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorRequestProtoMsg): _132.QueryValidatorRequest;
                toProto(message: _132.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorRequest): _132.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorResponse;
                fromPartial(object: Partial<_132.QueryValidatorResponse>): _132.QueryValidatorResponse;
                fromAmino(object: _132.QueryValidatorResponseAmino): _132.QueryValidatorResponse;
                toAmino(message: _132.QueryValidatorResponse): _132.QueryValidatorResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorResponseAminoMsg): _132.QueryValidatorResponse;
                toAminoMsg(message: _132.QueryValidatorResponse): _132.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorResponseProtoMsg): _132.QueryValidatorResponse;
                toProto(message: _132.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorResponse): _132.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_132.QueryValidatorDelegationsRequest>): _132.QueryValidatorDelegationsRequest;
                fromAmino(object: _132.QueryValidatorDelegationsRequestAmino): _132.QueryValidatorDelegationsRequest;
                toAmino(message: _132.QueryValidatorDelegationsRequest): _132.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorDelegationsRequestAminoMsg): _132.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _132.QueryValidatorDelegationsRequest): _132.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorDelegationsRequestProtoMsg): _132.QueryValidatorDelegationsRequest;
                toProto(message: _132.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorDelegationsRequest): _132.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_132.QueryValidatorDelegationsResponse>): _132.QueryValidatorDelegationsResponse;
                fromAmino(object: _132.QueryValidatorDelegationsResponseAmino): _132.QueryValidatorDelegationsResponse;
                toAmino(message: _132.QueryValidatorDelegationsResponse): _132.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorDelegationsResponseAminoMsg): _132.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _132.QueryValidatorDelegationsResponse): _132.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorDelegationsResponseProtoMsg): _132.QueryValidatorDelegationsResponse;
                toProto(message: _132.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorDelegationsResponse): _132.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_132.QueryValidatorUnbondingDelegationsRequest>): _132.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _132.QueryValidatorUnbondingDelegationsRequestAmino): _132.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _132.QueryValidatorUnbondingDelegationsRequest): _132.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorUnbondingDelegationsRequestAminoMsg): _132.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _132.QueryValidatorUnbondingDelegationsRequest): _132.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorUnbondingDelegationsRequestProtoMsg): _132.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _132.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorUnbondingDelegationsRequest): _132.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_132.QueryValidatorUnbondingDelegationsResponse>): _132.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _132.QueryValidatorUnbondingDelegationsResponseAmino): _132.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _132.QueryValidatorUnbondingDelegationsResponse): _132.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorUnbondingDelegationsResponseAminoMsg): _132.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _132.QueryValidatorUnbondingDelegationsResponse): _132.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorUnbondingDelegationsResponseProtoMsg): _132.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _132.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorUnbondingDelegationsResponse): _132.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegationRequest;
                fromPartial(object: Partial<_132.QueryDelegationRequest>): _132.QueryDelegationRequest;
                fromAmino(object: _132.QueryDelegationRequestAmino): _132.QueryDelegationRequest;
                toAmino(message: _132.QueryDelegationRequest): _132.QueryDelegationRequestAmino;
                fromAminoMsg(object: _132.QueryDelegationRequestAminoMsg): _132.QueryDelegationRequest;
                toAminoMsg(message: _132.QueryDelegationRequest): _132.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegationRequestProtoMsg): _132.QueryDelegationRequest;
                toProto(message: _132.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegationRequest): _132.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegationResponse;
                fromPartial(object: Partial<_132.QueryDelegationResponse>): _132.QueryDelegationResponse;
                fromAmino(object: _132.QueryDelegationResponseAmino): _132.QueryDelegationResponse;
                toAmino(message: _132.QueryDelegationResponse): _132.QueryDelegationResponseAmino;
                fromAminoMsg(object: _132.QueryDelegationResponseAminoMsg): _132.QueryDelegationResponse;
                toAminoMsg(message: _132.QueryDelegationResponse): _132.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegationResponseProtoMsg): _132.QueryDelegationResponse;
                toProto(message: _132.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegationResponse): _132.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _132.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_132.QueryUnbondingDelegationRequest>): _132.QueryUnbondingDelegationRequest;
                fromAmino(object: _132.QueryUnbondingDelegationRequestAmino): _132.QueryUnbondingDelegationRequest;
                toAmino(message: _132.QueryUnbondingDelegationRequest): _132.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _132.QueryUnbondingDelegationRequestAminoMsg): _132.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _132.QueryUnbondingDelegationRequest): _132.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _132.QueryUnbondingDelegationRequestProtoMsg): _132.QueryUnbondingDelegationRequest;
                toProto(message: _132.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _132.QueryUnbondingDelegationRequest): _132.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _132.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_132.QueryUnbondingDelegationResponse>): _132.QueryUnbondingDelegationResponse;
                fromAmino(object: _132.QueryUnbondingDelegationResponseAmino): _132.QueryUnbondingDelegationResponse;
                toAmino(message: _132.QueryUnbondingDelegationResponse): _132.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _132.QueryUnbondingDelegationResponseAminoMsg): _132.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _132.QueryUnbondingDelegationResponse): _132.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _132.QueryUnbondingDelegationResponseProtoMsg): _132.QueryUnbondingDelegationResponse;
                toProto(message: _132.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _132.QueryUnbondingDelegationResponse): _132.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorDelegationsRequest>): _132.QueryDelegatorDelegationsRequest;
                fromAmino(object: _132.QueryDelegatorDelegationsRequestAmino): _132.QueryDelegatorDelegationsRequest;
                toAmino(message: _132.QueryDelegatorDelegationsRequest): _132.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorDelegationsRequestAminoMsg): _132.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _132.QueryDelegatorDelegationsRequest): _132.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorDelegationsRequestProtoMsg): _132.QueryDelegatorDelegationsRequest;
                toProto(message: _132.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorDelegationsRequest): _132.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorDelegationsResponse>): _132.QueryDelegatorDelegationsResponse;
                fromAmino(object: _132.QueryDelegatorDelegationsResponseAmino): _132.QueryDelegatorDelegationsResponse;
                toAmino(message: _132.QueryDelegatorDelegationsResponse): _132.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorDelegationsResponseAminoMsg): _132.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _132.QueryDelegatorDelegationsResponse): _132.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorDelegationsResponseProtoMsg): _132.QueryDelegatorDelegationsResponse;
                toProto(message: _132.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorDelegationsResponse): _132.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorUnbondingDelegationsRequest>): _132.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _132.QueryDelegatorUnbondingDelegationsRequestAmino): _132.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _132.QueryDelegatorUnbondingDelegationsRequest): _132.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _132.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _132.QueryDelegatorUnbondingDelegationsRequest): _132.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _132.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _132.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsRequest): _132.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorUnbondingDelegationsResponse>): _132.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _132.QueryDelegatorUnbondingDelegationsResponseAmino): _132.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _132.QueryDelegatorUnbondingDelegationsResponse): _132.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _132.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _132.QueryDelegatorUnbondingDelegationsResponse): _132.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _132.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _132.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsResponse): _132.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryRedelegationsRequest;
                fromPartial(object: Partial<_132.QueryRedelegationsRequest>): _132.QueryRedelegationsRequest;
                fromAmino(object: _132.QueryRedelegationsRequestAmino): _132.QueryRedelegationsRequest;
                toAmino(message: _132.QueryRedelegationsRequest): _132.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryRedelegationsRequestAminoMsg): _132.QueryRedelegationsRequest;
                toAminoMsg(message: _132.QueryRedelegationsRequest): _132.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryRedelegationsRequestProtoMsg): _132.QueryRedelegationsRequest;
                toProto(message: _132.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryRedelegationsRequest): _132.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryRedelegationsResponse;
                fromPartial(object: Partial<_132.QueryRedelegationsResponse>): _132.QueryRedelegationsResponse;
                fromAmino(object: _132.QueryRedelegationsResponseAmino): _132.QueryRedelegationsResponse;
                toAmino(message: _132.QueryRedelegationsResponse): _132.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryRedelegationsResponseAminoMsg): _132.QueryRedelegationsResponse;
                toAminoMsg(message: _132.QueryRedelegationsResponse): _132.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryRedelegationsResponseProtoMsg): _132.QueryRedelegationsResponse;
                toProto(message: _132.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryRedelegationsResponse): _132.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorsRequest>): _132.QueryDelegatorValidatorsRequest;
                fromAmino(object: _132.QueryDelegatorValidatorsRequestAmino): _132.QueryDelegatorValidatorsRequest;
                toAmino(message: _132.QueryDelegatorValidatorsRequest): _132.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorsRequestAminoMsg): _132.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _132.QueryDelegatorValidatorsRequest): _132.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorsRequestProtoMsg): _132.QueryDelegatorValidatorsRequest;
                toProto(message: _132.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorsRequest): _132.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorsResponse>): _132.QueryDelegatorValidatorsResponse;
                fromAmino(object: _132.QueryDelegatorValidatorsResponseAmino): _132.QueryDelegatorValidatorsResponse;
                toAmino(message: _132.QueryDelegatorValidatorsResponse): _132.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorsResponseAminoMsg): _132.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _132.QueryDelegatorValidatorsResponse): _132.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorsResponseProtoMsg): _132.QueryDelegatorValidatorsResponse;
                toProto(message: _132.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorsResponse): _132.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorRequest>): _132.QueryDelegatorValidatorRequest;
                fromAmino(object: _132.QueryDelegatorValidatorRequestAmino): _132.QueryDelegatorValidatorRequest;
                toAmino(message: _132.QueryDelegatorValidatorRequest): _132.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorRequestAminoMsg): _132.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _132.QueryDelegatorValidatorRequest): _132.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorRequestProtoMsg): _132.QueryDelegatorValidatorRequest;
                toProto(message: _132.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorRequest): _132.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorResponse>): _132.QueryDelegatorValidatorResponse;
                fromAmino(object: _132.QueryDelegatorValidatorResponseAmino): _132.QueryDelegatorValidatorResponse;
                toAmino(message: _132.QueryDelegatorValidatorResponse): _132.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorResponseAminoMsg): _132.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _132.QueryDelegatorValidatorResponse): _132.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorResponseProtoMsg): _132.QueryDelegatorValidatorResponse;
                toProto(message: _132.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorResponse): _132.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _132.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_132.QueryHistoricalInfoRequest>): _132.QueryHistoricalInfoRequest;
                fromAmino(object: _132.QueryHistoricalInfoRequestAmino): _132.QueryHistoricalInfoRequest;
                toAmino(message: _132.QueryHistoricalInfoRequest): _132.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _132.QueryHistoricalInfoRequestAminoMsg): _132.QueryHistoricalInfoRequest;
                toAminoMsg(message: _132.QueryHistoricalInfoRequest): _132.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _132.QueryHistoricalInfoRequestProtoMsg): _132.QueryHistoricalInfoRequest;
                toProto(message: _132.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _132.QueryHistoricalInfoRequest): _132.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _132.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_132.QueryHistoricalInfoResponse>): _132.QueryHistoricalInfoResponse;
                fromAmino(object: _132.QueryHistoricalInfoResponseAmino): _132.QueryHistoricalInfoResponse;
                toAmino(message: _132.QueryHistoricalInfoResponse): _132.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _132.QueryHistoricalInfoResponseAminoMsg): _132.QueryHistoricalInfoResponse;
                toAminoMsg(message: _132.QueryHistoricalInfoResponse): _132.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _132.QueryHistoricalInfoResponseProtoMsg): _132.QueryHistoricalInfoResponse;
                toProto(message: _132.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _132.QueryHistoricalInfoResponse): _132.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _132.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _132.QueryPoolRequest;
                fromPartial(_: Partial<_132.QueryPoolRequest>): _132.QueryPoolRequest;
                fromAmino(_: _132.QueryPoolRequestAmino): _132.QueryPoolRequest;
                toAmino(_: _132.QueryPoolRequest): _132.QueryPoolRequestAmino;
                fromAminoMsg(object: _132.QueryPoolRequestAminoMsg): _132.QueryPoolRequest;
                toAminoMsg(message: _132.QueryPoolRequest): _132.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _132.QueryPoolRequestProtoMsg): _132.QueryPoolRequest;
                toProto(message: _132.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _132.QueryPoolRequest): _132.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _132.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryPoolResponse;
                fromPartial(object: Partial<_132.QueryPoolResponse>): _132.QueryPoolResponse;
                fromAmino(object: _132.QueryPoolResponseAmino): _132.QueryPoolResponse;
                toAmino(message: _132.QueryPoolResponse): _132.QueryPoolResponseAmino;
                fromAminoMsg(object: _132.QueryPoolResponseAminoMsg): _132.QueryPoolResponse;
                toAminoMsg(message: _132.QueryPoolResponse): _132.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _132.QueryPoolResponseProtoMsg): _132.QueryPoolResponse;
                toProto(message: _132.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _132.QueryPoolResponse): _132.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _132.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _132.QueryParamsRequest;
                fromPartial(_: Partial<_132.QueryParamsRequest>): _132.QueryParamsRequest;
                fromAmino(_: _132.QueryParamsRequestAmino): _132.QueryParamsRequest;
                toAmino(_: _132.QueryParamsRequest): _132.QueryParamsRequestAmino;
                fromAminoMsg(object: _132.QueryParamsRequestAminoMsg): _132.QueryParamsRequest;
                toAminoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryParamsRequestProtoMsg): _132.QueryParamsRequest;
                toProto(message: _132.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _132.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryParamsResponse;
                fromPartial(object: Partial<_132.QueryParamsResponse>): _132.QueryParamsResponse;
                fromAmino(object: _132.QueryParamsResponseAmino): _132.QueryParamsResponse;
                toAmino(message: _132.QueryParamsResponse): _132.QueryParamsResponseAmino;
                fromAminoMsg(object: _132.QueryParamsResponseAminoMsg): _132.QueryParamsResponse;
                toAminoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryParamsResponseProtoMsg): _132.QueryParamsResponse;
                toProto(message: _132.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _131.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.GenesisState;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
                fromAmino(object: _131.GenesisStateAmino): _131.GenesisState;
                toAmino(message: _131.GenesisState): _131.GenesisStateAmino;
                fromAminoMsg(object: _131.GenesisStateAminoMsg): _131.GenesisState;
                toAminoMsg(message: _131.GenesisState): _131.GenesisStateAminoMsg;
                fromProtoMsg(message: _131.GenesisStateProtoMsg): _131.GenesisState;
                toProto(message: _131.GenesisState): Uint8Array;
                toProtoMsg(message: _131.GenesisState): _131.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _131.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.LastValidatorPower;
                fromPartial(object: Partial<_131.LastValidatorPower>): _131.LastValidatorPower;
                fromAmino(object: _131.LastValidatorPowerAmino): _131.LastValidatorPower;
                toAmino(message: _131.LastValidatorPower): _131.LastValidatorPowerAmino;
                fromAminoMsg(object: _131.LastValidatorPowerAminoMsg): _131.LastValidatorPower;
                toAminoMsg(message: _131.LastValidatorPower): _131.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _131.LastValidatorPowerProtoMsg): _131.LastValidatorPower;
                toProto(message: _131.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _131.LastValidatorPower): _131.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _130.AuthorizationType;
            authorizationTypeToJSON(object: _130.AuthorizationType): string;
            AuthorizationType: typeof _130.AuthorizationType;
            AuthorizationTypeSDKType: typeof _130.AuthorizationType;
            AuthorizationTypeAmino: typeof _130.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _130.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.StakeAuthorization;
                fromPartial(object: Partial<_130.StakeAuthorization>): _130.StakeAuthorization;
                fromAmino(object: _130.StakeAuthorizationAmino): _130.StakeAuthorization;
                toAmino(message: _130.StakeAuthorization): _130.StakeAuthorizationAmino;
                fromAminoMsg(object: _130.StakeAuthorizationAminoMsg): _130.StakeAuthorization;
                toAminoMsg(message: _130.StakeAuthorization): _130.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _130.StakeAuthorizationProtoMsg): _130.StakeAuthorization;
                toProto(message: _130.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _130.StakeAuthorization): _130.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _130.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.StakeAuthorization_Validators;
                fromPartial(object: Partial<_130.StakeAuthorization_Validators>): _130.StakeAuthorization_Validators;
                fromAmino(object: _130.StakeAuthorization_ValidatorsAmino): _130.StakeAuthorization_Validators;
                toAmino(message: _130.StakeAuthorization_Validators): _130.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _130.StakeAuthorization_ValidatorsAminoMsg): _130.StakeAuthorization_Validators;
                toAminoMsg(message: _130.StakeAuthorization_Validators): _130.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _130.StakeAuthorization_ValidatorsProtoMsg): _130.StakeAuthorization_Validators;
                toProto(message: _130.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _130.StakeAuthorization_Validators): _130.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _135.SignMode;
                signModeToJSON(object: _135.SignMode): string;
                SignMode: typeof _135.SignMode;
                SignModeSDKType: typeof _135.SignMode;
                SignModeAmino: typeof _135.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignatureDescriptors;
                    fromPartial(object: Partial<_135.SignatureDescriptors>): _135.SignatureDescriptors;
                    fromAmino(object: _135.SignatureDescriptorsAmino): _135.SignatureDescriptors;
                    toAmino(message: _135.SignatureDescriptors): _135.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _135.SignatureDescriptorsAminoMsg): _135.SignatureDescriptors;
                    toAminoMsg(message: _135.SignatureDescriptors): _135.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptorsProtoMsg): _135.SignatureDescriptors;
                    toProto(message: _135.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptors): _135.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignatureDescriptor;
                    fromPartial(object: Partial<_135.SignatureDescriptor>): _135.SignatureDescriptor;
                    fromAmino(object: _135.SignatureDescriptorAmino): _135.SignatureDescriptor;
                    toAmino(message: _135.SignatureDescriptor): _135.SignatureDescriptorAmino;
                    fromAminoMsg(object: _135.SignatureDescriptorAminoMsg): _135.SignatureDescriptor;
                    toAminoMsg(message: _135.SignatureDescriptor): _135.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptorProtoMsg): _135.SignatureDescriptor;
                    toProto(message: _135.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor): _135.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data>): _135.SignatureDescriptor_Data;
                    fromAmino(object: _135.SignatureDescriptor_DataAmino): _135.SignatureDescriptor_Data;
                    toAmino(message: _135.SignatureDescriptor_Data): _135.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _135.SignatureDescriptor_DataAminoMsg): _135.SignatureDescriptor_Data;
                    toAminoMsg(message: _135.SignatureDescriptor_Data): _135.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptor_DataProtoMsg): _135.SignatureDescriptor_Data;
                    toProto(message: _135.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor_Data): _135.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data_Single>): _135.SignatureDescriptor_Data_Single;
                    fromAmino(object: _135.SignatureDescriptor_Data_SingleAmino): _135.SignatureDescriptor_Data_Single;
                    toAmino(message: _135.SignatureDescriptor_Data_Single): _135.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _135.SignatureDescriptor_Data_SingleAminoMsg): _135.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _135.SignatureDescriptor_Data_Single): _135.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptor_Data_SingleProtoMsg): _135.SignatureDescriptor_Data_Single;
                    toProto(message: _135.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor_Data_Single): _135.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data_Multi>): _135.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _135.SignatureDescriptor_Data_MultiAmino): _135.SignatureDescriptor_Data_Multi;
                    toAmino(message: _135.SignatureDescriptor_Data_Multi): _135.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _135.SignatureDescriptor_Data_MultiAminoMsg): _135.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _135.SignatureDescriptor_Data_Multi): _135.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptor_Data_MultiProtoMsg): _135.SignatureDescriptor_Data_Multi;
                    toProto(message: _135.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor_Data_Multi): _135.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _272.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _136.SimulateRequest): Promise<_136.SimulateResponse>;
                getTx(request: _136.GetTxRequest): Promise<_136.GetTxResponse>;
                broadcastTx(request: _136.BroadcastTxRequest): Promise<_136.BroadcastTxResponse>;
                getTxsEvent(request: _136.GetTxsEventRequest): Promise<_136.GetTxsEventResponse>;
                getBlockWithTxs(request: _136.GetBlockWithTxsRequest): Promise<_136.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _137.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.Tx;
                fromPartial(object: Partial<_137.Tx>): _137.Tx;
                fromAmino(object: _137.TxAmino): _137.Tx;
                toAmino(message: _137.Tx): _137.TxAmino;
                fromAminoMsg(object: _137.TxAminoMsg): _137.Tx;
                toAminoMsg(message: _137.Tx): _137.TxAminoMsg;
                fromProtoMsg(message: _137.TxProtoMsg): _137.Tx;
                toProto(message: _137.Tx): Uint8Array;
                toProtoMsg(message: _137.Tx): _137.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _137.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.TxRaw;
                fromPartial(object: Partial<_137.TxRaw>): _137.TxRaw;
                fromAmino(object: _137.TxRawAmino): _137.TxRaw;
                toAmino(message: _137.TxRaw): _137.TxRawAmino;
                fromAminoMsg(object: _137.TxRawAminoMsg): _137.TxRaw;
                toAminoMsg(message: _137.TxRaw): _137.TxRawAminoMsg;
                fromProtoMsg(message: _137.TxRawProtoMsg): _137.TxRaw;
                toProto(message: _137.TxRaw): Uint8Array;
                toProtoMsg(message: _137.TxRaw): _137.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _137.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.SignDoc;
                fromPartial(object: Partial<_137.SignDoc>): _137.SignDoc;
                fromAmino(object: _137.SignDocAmino): _137.SignDoc;
                toAmino(message: _137.SignDoc): _137.SignDocAmino;
                fromAminoMsg(object: _137.SignDocAminoMsg): _137.SignDoc;
                toAminoMsg(message: _137.SignDoc): _137.SignDocAminoMsg;
                fromProtoMsg(message: _137.SignDocProtoMsg): _137.SignDoc;
                toProto(message: _137.SignDoc): Uint8Array;
                toProtoMsg(message: _137.SignDoc): _137.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _137.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.SignDocDirectAux;
                fromPartial(object: Partial<_137.SignDocDirectAux>): _137.SignDocDirectAux;
                fromAmino(object: _137.SignDocDirectAuxAmino): _137.SignDocDirectAux;
                toAmino(message: _137.SignDocDirectAux): _137.SignDocDirectAuxAmino;
                fromAminoMsg(object: _137.SignDocDirectAuxAminoMsg): _137.SignDocDirectAux;
                toAminoMsg(message: _137.SignDocDirectAux): _137.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _137.SignDocDirectAuxProtoMsg): _137.SignDocDirectAux;
                toProto(message: _137.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _137.SignDocDirectAux): _137.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _137.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.TxBody;
                fromPartial(object: Partial<_137.TxBody>): _137.TxBody;
                fromAmino(object: _137.TxBodyAmino): _137.TxBody;
                toAmino(message: _137.TxBody): _137.TxBodyAmino;
                fromAminoMsg(object: _137.TxBodyAminoMsg): _137.TxBody;
                toAminoMsg(message: _137.TxBody): _137.TxBodyAminoMsg;
                fromProtoMsg(message: _137.TxBodyProtoMsg): _137.TxBody;
                toProto(message: _137.TxBody): Uint8Array;
                toProtoMsg(message: _137.TxBody): _137.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _137.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.AuthInfo;
                fromPartial(object: Partial<_137.AuthInfo>): _137.AuthInfo;
                fromAmino(object: _137.AuthInfoAmino): _137.AuthInfo;
                toAmino(message: _137.AuthInfo): _137.AuthInfoAmino;
                fromAminoMsg(object: _137.AuthInfoAminoMsg): _137.AuthInfo;
                toAminoMsg(message: _137.AuthInfo): _137.AuthInfoAminoMsg;
                fromProtoMsg(message: _137.AuthInfoProtoMsg): _137.AuthInfo;
                toProto(message: _137.AuthInfo): Uint8Array;
                toProtoMsg(message: _137.AuthInfo): _137.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _137.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.SignerInfo;
                fromPartial(object: Partial<_137.SignerInfo>): _137.SignerInfo;
                fromAmino(object: _137.SignerInfoAmino): _137.SignerInfo;
                toAmino(message: _137.SignerInfo): _137.SignerInfoAmino;
                fromAminoMsg(object: _137.SignerInfoAminoMsg): _137.SignerInfo;
                toAminoMsg(message: _137.SignerInfo): _137.SignerInfoAminoMsg;
                fromProtoMsg(message: _137.SignerInfoProtoMsg): _137.SignerInfo;
                toProto(message: _137.SignerInfo): Uint8Array;
                toProtoMsg(message: _137.SignerInfo): _137.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _137.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.ModeInfo;
                fromPartial(object: Partial<_137.ModeInfo>): _137.ModeInfo;
                fromAmino(object: _137.ModeInfoAmino): _137.ModeInfo;
                toAmino(message: _137.ModeInfo): _137.ModeInfoAmino;
                fromAminoMsg(object: _137.ModeInfoAminoMsg): _137.ModeInfo;
                toAminoMsg(message: _137.ModeInfo): _137.ModeInfoAminoMsg;
                fromProtoMsg(message: _137.ModeInfoProtoMsg): _137.ModeInfo;
                toProto(message: _137.ModeInfo): Uint8Array;
                toProtoMsg(message: _137.ModeInfo): _137.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _137.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.ModeInfo_Single;
                fromPartial(object: Partial<_137.ModeInfo_Single>): _137.ModeInfo_Single;
                fromAmino(object: _137.ModeInfo_SingleAmino): _137.ModeInfo_Single;
                toAmino(message: _137.ModeInfo_Single): _137.ModeInfo_SingleAmino;
                fromAminoMsg(object: _137.ModeInfo_SingleAminoMsg): _137.ModeInfo_Single;
                toAminoMsg(message: _137.ModeInfo_Single): _137.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _137.ModeInfo_SingleProtoMsg): _137.ModeInfo_Single;
                toProto(message: _137.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _137.ModeInfo_Single): _137.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _137.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.ModeInfo_Multi;
                fromPartial(object: Partial<_137.ModeInfo_Multi>): _137.ModeInfo_Multi;
                fromAmino(object: _137.ModeInfo_MultiAmino): _137.ModeInfo_Multi;
                toAmino(message: _137.ModeInfo_Multi): _137.ModeInfo_MultiAmino;
                fromAminoMsg(object: _137.ModeInfo_MultiAminoMsg): _137.ModeInfo_Multi;
                toAminoMsg(message: _137.ModeInfo_Multi): _137.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _137.ModeInfo_MultiProtoMsg): _137.ModeInfo_Multi;
                toProto(message: _137.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _137.ModeInfo_Multi): _137.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _137.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.Fee;
                fromPartial(object: Partial<_137.Fee>): _137.Fee;
                fromAmino(object: _137.FeeAmino): _137.Fee;
                toAmino(message: _137.Fee): _137.FeeAmino;
                fromAminoMsg(object: _137.FeeAminoMsg): _137.Fee;
                toAminoMsg(message: _137.Fee): _137.FeeAminoMsg;
                fromProtoMsg(message: _137.FeeProtoMsg): _137.Fee;
                toProto(message: _137.Fee): Uint8Array;
                toProtoMsg(message: _137.Fee): _137.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _137.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.Tip;
                fromPartial(object: Partial<_137.Tip>): _137.Tip;
                fromAmino(object: _137.TipAmino): _137.Tip;
                toAmino(message: _137.Tip): _137.TipAmino;
                fromAminoMsg(object: _137.TipAminoMsg): _137.Tip;
                toAminoMsg(message: _137.Tip): _137.TipAminoMsg;
                fromProtoMsg(message: _137.TipProtoMsg): _137.Tip;
                toProto(message: _137.Tip): Uint8Array;
                toProtoMsg(message: _137.Tip): _137.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _137.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.AuxSignerData;
                fromPartial(object: Partial<_137.AuxSignerData>): _137.AuxSignerData;
                fromAmino(object: _137.AuxSignerDataAmino): _137.AuxSignerData;
                toAmino(message: _137.AuxSignerData): _137.AuxSignerDataAmino;
                fromAminoMsg(object: _137.AuxSignerDataAminoMsg): _137.AuxSignerData;
                toAminoMsg(message: _137.AuxSignerData): _137.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _137.AuxSignerDataProtoMsg): _137.AuxSignerData;
                toProto(message: _137.AuxSignerData): Uint8Array;
                toProtoMsg(message: _137.AuxSignerData): _137.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _136.OrderBy;
            orderByToJSON(object: _136.OrderBy): string;
            broadcastModeFromJSON(object: any): _136.BroadcastMode;
            broadcastModeToJSON(object: _136.BroadcastMode): string;
            OrderBy: typeof _136.OrderBy;
            OrderBySDKType: typeof _136.OrderBy;
            OrderByAmino: typeof _136.OrderBy;
            BroadcastMode: typeof _136.BroadcastMode;
            BroadcastModeSDKType: typeof _136.BroadcastMode;
            BroadcastModeAmino: typeof _136.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _136.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetTxsEventRequest;
                fromPartial(object: Partial<_136.GetTxsEventRequest>): _136.GetTxsEventRequest;
                fromAmino(object: _136.GetTxsEventRequestAmino): _136.GetTxsEventRequest;
                toAmino(message: _136.GetTxsEventRequest): _136.GetTxsEventRequestAmino;
                fromAminoMsg(object: _136.GetTxsEventRequestAminoMsg): _136.GetTxsEventRequest;
                toAminoMsg(message: _136.GetTxsEventRequest): _136.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _136.GetTxsEventRequestProtoMsg): _136.GetTxsEventRequest;
                toProto(message: _136.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _136.GetTxsEventRequest): _136.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _136.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetTxsEventResponse;
                fromPartial(object: Partial<_136.GetTxsEventResponse>): _136.GetTxsEventResponse;
                fromAmino(object: _136.GetTxsEventResponseAmino): _136.GetTxsEventResponse;
                toAmino(message: _136.GetTxsEventResponse): _136.GetTxsEventResponseAmino;
                fromAminoMsg(object: _136.GetTxsEventResponseAminoMsg): _136.GetTxsEventResponse;
                toAminoMsg(message: _136.GetTxsEventResponse): _136.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _136.GetTxsEventResponseProtoMsg): _136.GetTxsEventResponse;
                toProto(message: _136.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _136.GetTxsEventResponse): _136.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _136.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.BroadcastTxRequest;
                fromPartial(object: Partial<_136.BroadcastTxRequest>): _136.BroadcastTxRequest;
                fromAmino(object: _136.BroadcastTxRequestAmino): _136.BroadcastTxRequest;
                toAmino(message: _136.BroadcastTxRequest): _136.BroadcastTxRequestAmino;
                fromAminoMsg(object: _136.BroadcastTxRequestAminoMsg): _136.BroadcastTxRequest;
                toAminoMsg(message: _136.BroadcastTxRequest): _136.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _136.BroadcastTxRequestProtoMsg): _136.BroadcastTxRequest;
                toProto(message: _136.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _136.BroadcastTxRequest): _136.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _136.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.BroadcastTxResponse;
                fromPartial(object: Partial<_136.BroadcastTxResponse>): _136.BroadcastTxResponse;
                fromAmino(object: _136.BroadcastTxResponseAmino): _136.BroadcastTxResponse;
                toAmino(message: _136.BroadcastTxResponse): _136.BroadcastTxResponseAmino;
                fromAminoMsg(object: _136.BroadcastTxResponseAminoMsg): _136.BroadcastTxResponse;
                toAminoMsg(message: _136.BroadcastTxResponse): _136.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _136.BroadcastTxResponseProtoMsg): _136.BroadcastTxResponse;
                toProto(message: _136.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _136.BroadcastTxResponse): _136.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _136.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.SimulateRequest;
                fromPartial(object: Partial<_136.SimulateRequest>): _136.SimulateRequest;
                fromAmino(object: _136.SimulateRequestAmino): _136.SimulateRequest;
                toAmino(message: _136.SimulateRequest): _136.SimulateRequestAmino;
                fromAminoMsg(object: _136.SimulateRequestAminoMsg): _136.SimulateRequest;
                toAminoMsg(message: _136.SimulateRequest): _136.SimulateRequestAminoMsg;
                fromProtoMsg(message: _136.SimulateRequestProtoMsg): _136.SimulateRequest;
                toProto(message: _136.SimulateRequest): Uint8Array;
                toProtoMsg(message: _136.SimulateRequest): _136.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _136.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.SimulateResponse;
                fromPartial(object: Partial<_136.SimulateResponse>): _136.SimulateResponse;
                fromAmino(object: _136.SimulateResponseAmino): _136.SimulateResponse;
                toAmino(message: _136.SimulateResponse): _136.SimulateResponseAmino;
                fromAminoMsg(object: _136.SimulateResponseAminoMsg): _136.SimulateResponse;
                toAminoMsg(message: _136.SimulateResponse): _136.SimulateResponseAminoMsg;
                fromProtoMsg(message: _136.SimulateResponseProtoMsg): _136.SimulateResponse;
                toProto(message: _136.SimulateResponse): Uint8Array;
                toProtoMsg(message: _136.SimulateResponse): _136.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _136.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetTxRequest;
                fromPartial(object: Partial<_136.GetTxRequest>): _136.GetTxRequest;
                fromAmino(object: _136.GetTxRequestAmino): _136.GetTxRequest;
                toAmino(message: _136.GetTxRequest): _136.GetTxRequestAmino;
                fromAminoMsg(object: _136.GetTxRequestAminoMsg): _136.GetTxRequest;
                toAminoMsg(message: _136.GetTxRequest): _136.GetTxRequestAminoMsg;
                fromProtoMsg(message: _136.GetTxRequestProtoMsg): _136.GetTxRequest;
                toProto(message: _136.GetTxRequest): Uint8Array;
                toProtoMsg(message: _136.GetTxRequest): _136.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _136.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetTxResponse;
                fromPartial(object: Partial<_136.GetTxResponse>): _136.GetTxResponse;
                fromAmino(object: _136.GetTxResponseAmino): _136.GetTxResponse;
                toAmino(message: _136.GetTxResponse): _136.GetTxResponseAmino;
                fromAminoMsg(object: _136.GetTxResponseAminoMsg): _136.GetTxResponse;
                toAminoMsg(message: _136.GetTxResponse): _136.GetTxResponseAminoMsg;
                fromProtoMsg(message: _136.GetTxResponseProtoMsg): _136.GetTxResponse;
                toProto(message: _136.GetTxResponse): Uint8Array;
                toProtoMsg(message: _136.GetTxResponse): _136.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _136.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_136.GetBlockWithTxsRequest>): _136.GetBlockWithTxsRequest;
                fromAmino(object: _136.GetBlockWithTxsRequestAmino): _136.GetBlockWithTxsRequest;
                toAmino(message: _136.GetBlockWithTxsRequest): _136.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _136.GetBlockWithTxsRequestAminoMsg): _136.GetBlockWithTxsRequest;
                toAminoMsg(message: _136.GetBlockWithTxsRequest): _136.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _136.GetBlockWithTxsRequestProtoMsg): _136.GetBlockWithTxsRequest;
                toProto(message: _136.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _136.GetBlockWithTxsRequest): _136.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _136.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_136.GetBlockWithTxsResponse>): _136.GetBlockWithTxsResponse;
                fromAmino(object: _136.GetBlockWithTxsResponseAmino): _136.GetBlockWithTxsResponse;
                toAmino(message: _136.GetBlockWithTxsResponse): _136.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _136.GetBlockWithTxsResponseAminoMsg): _136.GetBlockWithTxsResponse;
                toAminoMsg(message: _136.GetBlockWithTxsResponse): _136.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _136.GetBlockWithTxsResponseProtoMsg): _136.GetBlockWithTxsResponse;
                toProto(message: _136.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _136.GetBlockWithTxsResponse): _136.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _286.MsgClientImpl;
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _138.QueryCurrentPlanRequest): Promise<_138.QueryCurrentPlanResponse>;
                appliedPlan(request: _138.QueryAppliedPlanRequest): Promise<_138.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _138.QueryUpgradedConsensusStateRequest): Promise<_138.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _138.QueryModuleVersionsRequest): Promise<_138.QueryModuleVersionsResponse>;
                authority(request?: _138.QueryAuthorityRequest): Promise<_138.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _139.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _139.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _139.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _139.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _139.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _139.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _139.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _139.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _139.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _139.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _139.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _139.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _139.MsgSoftwareUpgrade) => _139.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _139.MsgSoftwareUpgradeAmino) => _139.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _139.MsgCancelUpgrade) => _139.MsgCancelUpgradeAmino;
                    fromAmino: (object: _139.MsgCancelUpgradeAmino) => _139.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _140.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.Plan;
                fromPartial(object: Partial<_140.Plan>): _140.Plan;
                fromAmino(object: _140.PlanAmino): _140.Plan;
                toAmino(message: _140.Plan): _140.PlanAmino;
                fromAminoMsg(object: _140.PlanAminoMsg): _140.Plan;
                toAminoMsg(message: _140.Plan): _140.PlanAminoMsg;
                fromProtoMsg(message: _140.PlanProtoMsg): _140.Plan;
                toProto(message: _140.Plan): Uint8Array;
                toProtoMsg(message: _140.Plan): _140.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _140.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_140.SoftwareUpgradeProposal>): _140.SoftwareUpgradeProposal;
                fromAmino(object: _140.SoftwareUpgradeProposalAmino): _140.SoftwareUpgradeProposal;
                toAmino(message: _140.SoftwareUpgradeProposal): _140.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _140.SoftwareUpgradeProposalAminoMsg): _140.SoftwareUpgradeProposal;
                toAminoMsg(message: _140.SoftwareUpgradeProposal): _140.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _140.SoftwareUpgradeProposalProtoMsg): _140.SoftwareUpgradeProposal;
                toProto(message: _140.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _140.SoftwareUpgradeProposal): _140.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _140.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_140.CancelSoftwareUpgradeProposal>): _140.CancelSoftwareUpgradeProposal;
                fromAmino(object: _140.CancelSoftwareUpgradeProposalAmino): _140.CancelSoftwareUpgradeProposal;
                toAmino(message: _140.CancelSoftwareUpgradeProposal): _140.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _140.CancelSoftwareUpgradeProposalAminoMsg): _140.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _140.CancelSoftwareUpgradeProposal): _140.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _140.CancelSoftwareUpgradeProposalProtoMsg): _140.CancelSoftwareUpgradeProposal;
                toProto(message: _140.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _140.CancelSoftwareUpgradeProposal): _140.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _140.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.ModuleVersion;
                fromPartial(object: Partial<_140.ModuleVersion>): _140.ModuleVersion;
                fromAmino(object: _140.ModuleVersionAmino): _140.ModuleVersion;
                toAmino(message: _140.ModuleVersion): _140.ModuleVersionAmino;
                fromAminoMsg(object: _140.ModuleVersionAminoMsg): _140.ModuleVersion;
                toAminoMsg(message: _140.ModuleVersion): _140.ModuleVersionAminoMsg;
                fromProtoMsg(message: _140.ModuleVersionProtoMsg): _140.ModuleVersion;
                toProto(message: _140.ModuleVersion): Uint8Array;
                toProtoMsg(message: _140.ModuleVersion): _140.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _139.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_139.MsgSoftwareUpgrade>): _139.MsgSoftwareUpgrade;
                fromAmino(object: _139.MsgSoftwareUpgradeAmino): _139.MsgSoftwareUpgrade;
                toAmino(message: _139.MsgSoftwareUpgrade): _139.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _139.MsgSoftwareUpgradeAminoMsg): _139.MsgSoftwareUpgrade;
                toAminoMsg(message: _139.MsgSoftwareUpgrade): _139.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _139.MsgSoftwareUpgradeProtoMsg): _139.MsgSoftwareUpgrade;
                toProto(message: _139.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _139.MsgSoftwareUpgrade): _139.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _139.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _139.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_139.MsgSoftwareUpgradeResponse>): _139.MsgSoftwareUpgradeResponse;
                fromAmino(_: _139.MsgSoftwareUpgradeResponseAmino): _139.MsgSoftwareUpgradeResponse;
                toAmino(_: _139.MsgSoftwareUpgradeResponse): _139.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _139.MsgSoftwareUpgradeResponseAminoMsg): _139.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _139.MsgSoftwareUpgradeResponse): _139.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _139.MsgSoftwareUpgradeResponseProtoMsg): _139.MsgSoftwareUpgradeResponse;
                toProto(message: _139.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _139.MsgSoftwareUpgradeResponse): _139.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _139.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.MsgCancelUpgrade;
                fromPartial(object: Partial<_139.MsgCancelUpgrade>): _139.MsgCancelUpgrade;
                fromAmino(object: _139.MsgCancelUpgradeAmino): _139.MsgCancelUpgrade;
                toAmino(message: _139.MsgCancelUpgrade): _139.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _139.MsgCancelUpgradeAminoMsg): _139.MsgCancelUpgrade;
                toAminoMsg(message: _139.MsgCancelUpgrade): _139.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _139.MsgCancelUpgradeProtoMsg): _139.MsgCancelUpgrade;
                toProto(message: _139.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _139.MsgCancelUpgrade): _139.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _139.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _139.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_139.MsgCancelUpgradeResponse>): _139.MsgCancelUpgradeResponse;
                fromAmino(_: _139.MsgCancelUpgradeResponseAmino): _139.MsgCancelUpgradeResponse;
                toAmino(_: _139.MsgCancelUpgradeResponse): _139.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _139.MsgCancelUpgradeResponseAminoMsg): _139.MsgCancelUpgradeResponse;
                toAminoMsg(message: _139.MsgCancelUpgradeResponse): _139.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _139.MsgCancelUpgradeResponseProtoMsg): _139.MsgCancelUpgradeResponse;
                toProto(message: _139.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _139.MsgCancelUpgradeResponse): _139.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _138.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_138.QueryCurrentPlanRequest>): _138.QueryCurrentPlanRequest;
                fromAmino(_: _138.QueryCurrentPlanRequestAmino): _138.QueryCurrentPlanRequest;
                toAmino(_: _138.QueryCurrentPlanRequest): _138.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _138.QueryCurrentPlanRequestAminoMsg): _138.QueryCurrentPlanRequest;
                toAminoMsg(message: _138.QueryCurrentPlanRequest): _138.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _138.QueryCurrentPlanRequestProtoMsg): _138.QueryCurrentPlanRequest;
                toProto(message: _138.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _138.QueryCurrentPlanRequest): _138.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _138.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_138.QueryCurrentPlanResponse>): _138.QueryCurrentPlanResponse;
                fromAmino(object: _138.QueryCurrentPlanResponseAmino): _138.QueryCurrentPlanResponse;
                toAmino(message: _138.QueryCurrentPlanResponse): _138.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _138.QueryCurrentPlanResponseAminoMsg): _138.QueryCurrentPlanResponse;
                toAminoMsg(message: _138.QueryCurrentPlanResponse): _138.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _138.QueryCurrentPlanResponseProtoMsg): _138.QueryCurrentPlanResponse;
                toProto(message: _138.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _138.QueryCurrentPlanResponse): _138.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _138.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_138.QueryAppliedPlanRequest>): _138.QueryAppliedPlanRequest;
                fromAmino(object: _138.QueryAppliedPlanRequestAmino): _138.QueryAppliedPlanRequest;
                toAmino(message: _138.QueryAppliedPlanRequest): _138.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _138.QueryAppliedPlanRequestAminoMsg): _138.QueryAppliedPlanRequest;
                toAminoMsg(message: _138.QueryAppliedPlanRequest): _138.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _138.QueryAppliedPlanRequestProtoMsg): _138.QueryAppliedPlanRequest;
                toProto(message: _138.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _138.QueryAppliedPlanRequest): _138.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _138.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_138.QueryAppliedPlanResponse>): _138.QueryAppliedPlanResponse;
                fromAmino(object: _138.QueryAppliedPlanResponseAmino): _138.QueryAppliedPlanResponse;
                toAmino(message: _138.QueryAppliedPlanResponse): _138.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _138.QueryAppliedPlanResponseAminoMsg): _138.QueryAppliedPlanResponse;
                toAminoMsg(message: _138.QueryAppliedPlanResponse): _138.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _138.QueryAppliedPlanResponseProtoMsg): _138.QueryAppliedPlanResponse;
                toProto(message: _138.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _138.QueryAppliedPlanResponse): _138.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _138.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_138.QueryUpgradedConsensusStateRequest>): _138.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _138.QueryUpgradedConsensusStateRequestAmino): _138.QueryUpgradedConsensusStateRequest;
                toAmino(message: _138.QueryUpgradedConsensusStateRequest): _138.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _138.QueryUpgradedConsensusStateRequestAminoMsg): _138.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _138.QueryUpgradedConsensusStateRequest): _138.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _138.QueryUpgradedConsensusStateRequestProtoMsg): _138.QueryUpgradedConsensusStateRequest;
                toProto(message: _138.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _138.QueryUpgradedConsensusStateRequest): _138.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _138.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_138.QueryUpgradedConsensusStateResponse>): _138.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _138.QueryUpgradedConsensusStateResponseAmino): _138.QueryUpgradedConsensusStateResponse;
                toAmino(message: _138.QueryUpgradedConsensusStateResponse): _138.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _138.QueryUpgradedConsensusStateResponseAminoMsg): _138.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _138.QueryUpgradedConsensusStateResponse): _138.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _138.QueryUpgradedConsensusStateResponseProtoMsg): _138.QueryUpgradedConsensusStateResponse;
                toProto(message: _138.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _138.QueryUpgradedConsensusStateResponse): _138.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _138.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_138.QueryModuleVersionsRequest>): _138.QueryModuleVersionsRequest;
                fromAmino(object: _138.QueryModuleVersionsRequestAmino): _138.QueryModuleVersionsRequest;
                toAmino(message: _138.QueryModuleVersionsRequest): _138.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _138.QueryModuleVersionsRequestAminoMsg): _138.QueryModuleVersionsRequest;
                toAminoMsg(message: _138.QueryModuleVersionsRequest): _138.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _138.QueryModuleVersionsRequestProtoMsg): _138.QueryModuleVersionsRequest;
                toProto(message: _138.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _138.QueryModuleVersionsRequest): _138.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _138.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_138.QueryModuleVersionsResponse>): _138.QueryModuleVersionsResponse;
                fromAmino(object: _138.QueryModuleVersionsResponseAmino): _138.QueryModuleVersionsResponse;
                toAmino(message: _138.QueryModuleVersionsResponse): _138.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _138.QueryModuleVersionsResponseAminoMsg): _138.QueryModuleVersionsResponse;
                toAminoMsg(message: _138.QueryModuleVersionsResponse): _138.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _138.QueryModuleVersionsResponseProtoMsg): _138.QueryModuleVersionsResponse;
                toProto(message: _138.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _138.QueryModuleVersionsResponse): _138.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _138.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.QueryAuthorityRequest;
                fromPartial(_: Partial<_138.QueryAuthorityRequest>): _138.QueryAuthorityRequest;
                fromAmino(_: _138.QueryAuthorityRequestAmino): _138.QueryAuthorityRequest;
                toAmino(_: _138.QueryAuthorityRequest): _138.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _138.QueryAuthorityRequestAminoMsg): _138.QueryAuthorityRequest;
                toAminoMsg(message: _138.QueryAuthorityRequest): _138.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _138.QueryAuthorityRequestProtoMsg): _138.QueryAuthorityRequest;
                toProto(message: _138.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _138.QueryAuthorityRequest): _138.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _138.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryAuthorityResponse;
                fromPartial(object: Partial<_138.QueryAuthorityResponse>): _138.QueryAuthorityResponse;
                fromAmino(object: _138.QueryAuthorityResponseAmino): _138.QueryAuthorityResponse;
                toAmino(message: _138.QueryAuthorityResponse): _138.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _138.QueryAuthorityResponseAminoMsg): _138.QueryAuthorityResponse;
                toAminoMsg(message: _138.QueryAuthorityResponse): _138.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _138.QueryAuthorityResponseProtoMsg): _138.QueryAuthorityResponse;
                toProto(message: _138.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _138.QueryAuthorityResponse): _138.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _141.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _141.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _141.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _141.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _141.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _141.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _141.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _141.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _141.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _141.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _141.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _141.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _141.MsgCreateVestingAccount) => _141.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _141.MsgCreateVestingAccountAmino) => _141.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _141.MsgCreatePermanentLockedAccount) => _141.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _141.MsgCreatePermanentLockedAccountAmino) => _141.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _141.MsgCreatePeriodicVestingAccount) => _141.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _141.MsgCreatePeriodicVestingAccountAmino) => _141.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _142.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.BaseVestingAccount;
                fromPartial(object: Partial<_142.BaseVestingAccount>): _142.BaseVestingAccount;
                fromAmino(object: _142.BaseVestingAccountAmino): _142.BaseVestingAccount;
                toAmino(message: _142.BaseVestingAccount): _142.BaseVestingAccountAmino;
                fromAminoMsg(object: _142.BaseVestingAccountAminoMsg): _142.BaseVestingAccount;
                toAminoMsg(message: _142.BaseVestingAccount): _142.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _142.BaseVestingAccountProtoMsg): _142.BaseVestingAccount;
                toProto(message: _142.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _142.BaseVestingAccount): _142.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _142.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ContinuousVestingAccount;
                fromPartial(object: Partial<_142.ContinuousVestingAccount>): _142.ContinuousVestingAccount;
                fromAmino(object: _142.ContinuousVestingAccountAmino): _142.ContinuousVestingAccount;
                toAmino(message: _142.ContinuousVestingAccount): _142.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _142.ContinuousVestingAccountAminoMsg): _142.ContinuousVestingAccount;
                toAminoMsg(message: _142.ContinuousVestingAccount): _142.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _142.ContinuousVestingAccountProtoMsg): _142.ContinuousVestingAccount;
                toProto(message: _142.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _142.ContinuousVestingAccount): _142.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _142.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.DelayedVestingAccount;
                fromPartial(object: Partial<_142.DelayedVestingAccount>): _142.DelayedVestingAccount;
                fromAmino(object: _142.DelayedVestingAccountAmino): _142.DelayedVestingAccount;
                toAmino(message: _142.DelayedVestingAccount): _142.DelayedVestingAccountAmino;
                fromAminoMsg(object: _142.DelayedVestingAccountAminoMsg): _142.DelayedVestingAccount;
                toAminoMsg(message: _142.DelayedVestingAccount): _142.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _142.DelayedVestingAccountProtoMsg): _142.DelayedVestingAccount;
                toProto(message: _142.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _142.DelayedVestingAccount): _142.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _142.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Period;
                fromPartial(object: Partial<_142.Period>): _142.Period;
                fromAmino(object: _142.PeriodAmino): _142.Period;
                toAmino(message: _142.Period): _142.PeriodAmino;
                fromAminoMsg(object: _142.PeriodAminoMsg): _142.Period;
                toAminoMsg(message: _142.Period): _142.PeriodAminoMsg;
                fromProtoMsg(message: _142.PeriodProtoMsg): _142.Period;
                toProto(message: _142.Period): Uint8Array;
                toProtoMsg(message: _142.Period): _142.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _142.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.PeriodicVestingAccount;
                fromPartial(object: Partial<_142.PeriodicVestingAccount>): _142.PeriodicVestingAccount;
                fromAmino(object: _142.PeriodicVestingAccountAmino): _142.PeriodicVestingAccount;
                toAmino(message: _142.PeriodicVestingAccount): _142.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _142.PeriodicVestingAccountAminoMsg): _142.PeriodicVestingAccount;
                toAminoMsg(message: _142.PeriodicVestingAccount): _142.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _142.PeriodicVestingAccountProtoMsg): _142.PeriodicVestingAccount;
                toProto(message: _142.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _142.PeriodicVestingAccount): _142.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _142.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.PermanentLockedAccount;
                fromPartial(object: Partial<_142.PermanentLockedAccount>): _142.PermanentLockedAccount;
                fromAmino(object: _142.PermanentLockedAccountAmino): _142.PermanentLockedAccount;
                toAmino(message: _142.PermanentLockedAccount): _142.PermanentLockedAccountAmino;
                fromAminoMsg(object: _142.PermanentLockedAccountAminoMsg): _142.PermanentLockedAccount;
                toAminoMsg(message: _142.PermanentLockedAccount): _142.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _142.PermanentLockedAccountProtoMsg): _142.PermanentLockedAccount;
                toProto(message: _142.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _142.PermanentLockedAccount): _142.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _141.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.MsgCreateVestingAccount;
                fromPartial(object: Partial<_141.MsgCreateVestingAccount>): _141.MsgCreateVestingAccount;
                fromAmino(object: _141.MsgCreateVestingAccountAmino): _141.MsgCreateVestingAccount;
                toAmino(message: _141.MsgCreateVestingAccount): _141.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _141.MsgCreateVestingAccountAminoMsg): _141.MsgCreateVestingAccount;
                toAminoMsg(message: _141.MsgCreateVestingAccount): _141.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _141.MsgCreateVestingAccountProtoMsg): _141.MsgCreateVestingAccount;
                toProto(message: _141.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _141.MsgCreateVestingAccount): _141.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _141.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _141.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_141.MsgCreateVestingAccountResponse>): _141.MsgCreateVestingAccountResponse;
                fromAmino(_: _141.MsgCreateVestingAccountResponseAmino): _141.MsgCreateVestingAccountResponse;
                toAmino(_: _141.MsgCreateVestingAccountResponse): _141.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _141.MsgCreateVestingAccountResponseAminoMsg): _141.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _141.MsgCreateVestingAccountResponse): _141.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _141.MsgCreateVestingAccountResponseProtoMsg): _141.MsgCreateVestingAccountResponse;
                toProto(message: _141.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _141.MsgCreateVestingAccountResponse): _141.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _141.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_141.MsgCreatePermanentLockedAccount>): _141.MsgCreatePermanentLockedAccount;
                fromAmino(object: _141.MsgCreatePermanentLockedAccountAmino): _141.MsgCreatePermanentLockedAccount;
                toAmino(message: _141.MsgCreatePermanentLockedAccount): _141.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _141.MsgCreatePermanentLockedAccountAminoMsg): _141.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _141.MsgCreatePermanentLockedAccount): _141.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _141.MsgCreatePermanentLockedAccountProtoMsg): _141.MsgCreatePermanentLockedAccount;
                toProto(message: _141.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _141.MsgCreatePermanentLockedAccount): _141.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _141.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _141.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_141.MsgCreatePermanentLockedAccountResponse>): _141.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _141.MsgCreatePermanentLockedAccountResponseAmino): _141.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _141.MsgCreatePermanentLockedAccountResponse): _141.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _141.MsgCreatePermanentLockedAccountResponseAminoMsg): _141.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _141.MsgCreatePermanentLockedAccountResponse): _141.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _141.MsgCreatePermanentLockedAccountResponseProtoMsg): _141.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _141.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _141.MsgCreatePermanentLockedAccountResponse): _141.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _141.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_141.MsgCreatePeriodicVestingAccount>): _141.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _141.MsgCreatePeriodicVestingAccountAmino): _141.MsgCreatePeriodicVestingAccount;
                toAmino(message: _141.MsgCreatePeriodicVestingAccount): _141.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _141.MsgCreatePeriodicVestingAccountAminoMsg): _141.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _141.MsgCreatePeriodicVestingAccount): _141.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _141.MsgCreatePeriodicVestingAccountProtoMsg): _141.MsgCreatePeriodicVestingAccount;
                toProto(message: _141.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _141.MsgCreatePeriodicVestingAccount): _141.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _141.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _141.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_141.MsgCreatePeriodicVestingAccountResponse>): _141.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _141.MsgCreatePeriodicVestingAccountResponseAmino): _141.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _141.MsgCreatePeriodicVestingAccountResponse): _141.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _141.MsgCreatePeriodicVestingAccountResponseAminoMsg): _141.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _141.MsgCreatePeriodicVestingAccountResponse): _141.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _141.MsgCreatePeriodicVestingAccountResponseProtoMsg): _141.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _141.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _141.MsgCreatePeriodicVestingAccountResponse): _141.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _274.MsgClientImpl;
                };
                bank: {
                    v1beta1: _275.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _276.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _277.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _278.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _279.MsgClientImpl;
                };
                gov: {
                    v1: _280.MsgClientImpl;
                    v1beta1: _281.MsgClientImpl;
                };
                group: {
                    v1: _282.MsgClientImpl;
                };
                nft: {
                    v1beta1: _283.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _284.MsgClientImpl;
                };
                staking: {
                    v1beta1: _285.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _286.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _287.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _49.QueryConfigRequest): Promise<_49.QueryConfigResponse>;
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
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _56.QueryGrantsRequest): Promise<_56.QueryGrantsResponse>;
                        granterGrants(request: _56.QueryGranterGrantsRequest): Promise<_56.QueryGranterGrantsResponse>;
                        granteeGrants(request: _56.QueryGranteeGrantsRequest): Promise<_56.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _61.QueryBalanceRequest): Promise<_61.QueryBalanceResponse>;
                        allBalances(request: _61.QueryAllBalancesRequest): Promise<_61.QueryAllBalancesResponse>;
                        spendableBalances(request: _61.QuerySpendableBalancesRequest): Promise<_61.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _61.QueryTotalSupplyRequest): Promise<_61.QueryTotalSupplyResponse>;
                        supplyOf(request: _61.QuerySupplyOfRequest): Promise<_61.QuerySupplyOfResponse>;
                        params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        denomMetadata(request: _61.QueryDenomMetadataRequest): Promise<_61.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _61.QueryDenomsMetadataRequest): Promise<_61.QueryDenomsMetadataResponse>;
                        denomOwners(request: _61.QueryDenomOwnersRequest): Promise<_61.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _65.ConfigRequest): Promise<_65.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _72.GetNodeInfoRequest): Promise<_72.GetNodeInfoResponse>;
                            getSyncing(request?: _72.GetSyncingRequest): Promise<_72.GetSyncingResponse>;
                            getLatestBlock(request?: _72.GetLatestBlockRequest): Promise<_72.GetLatestBlockResponse>;
                            getBlockByHeight(request: _72.GetBlockByHeightRequest): Promise<_72.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _72.GetLatestValidatorSetRequest): Promise<_72.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _72.GetValidatorSetByHeightRequest): Promise<_72.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _72.ABCIQueryRequest): Promise<_72.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                        validatorDistributionInfo(request: _88.QueryValidatorDistributionInfoRequest): Promise<_88.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _88.QueryValidatorOutstandingRewardsRequest): Promise<_88.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _88.QueryValidatorCommissionRequest): Promise<_88.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _88.QueryValidatorSlashesRequest): Promise<_88.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _88.QueryDelegationRewardsRequest): Promise<_88.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _88.QueryDelegationTotalRewardsRequest): Promise<_88.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _88.QueryDelegatorValidatorsRequest): Promise<_88.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _88.QueryDelegatorWithdrawAddressRequest): Promise<_88.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _88.QueryCommunityPoolRequest): Promise<_88.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _92.QueryEvidenceRequest): Promise<_92.QueryEvidenceResponse>;
                        allEvidence(request?: _92.QueryAllEvidenceRequest): Promise<_92.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _96.QueryAllowanceRequest): Promise<_96.QueryAllowanceResponse>;
                        allowances(request: _96.QueryAllowancesRequest): Promise<_96.QueryAllowancesResponse>;
                        allowancesByGranter(request: _96.QueryAllowancesByGranterRequest): Promise<_96.QueryAllowancesByGranterResponse>;
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
                        params(request?: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                        inflation(request?: _114.QueryInflationRequest): Promise<_114.QueryInflationResponse>;
                        annualProvisions(request?: _114.QueryAnnualProvisionsRequest): Promise<_114.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _119.QueryBalanceRequest): Promise<_119.QueryBalanceResponse>;
                        owner(request: _119.QueryOwnerRequest): Promise<_119.QueryOwnerResponse>;
                        supply(request: _119.QuerySupplyRequest): Promise<_119.QuerySupplyResponse>;
                        nFTs(request: _119.QueryNFTsRequest): Promise<_119.QueryNFTsResponse>;
                        nFT(request: _119.QueryNFTRequest): Promise<_119.QueryNFTResponse>;
                        class(request: _119.QueryClassRequest): Promise<_119.QueryClassResponse>;
                        classes(request?: _119.QueryClassesRequest): Promise<_119.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
                        subspaces(request?: _125.QuerySubspacesRequest): Promise<_125.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                        signingInfo(request: _127.QuerySigningInfoRequest): Promise<_127.QuerySigningInfoResponse>;
                        signingInfos(request?: _127.QuerySigningInfosRequest): Promise<_127.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _132.QueryValidatorsRequest): Promise<_132.QueryValidatorsResponse>;
                        validator(request: _132.QueryValidatorRequest): Promise<_132.QueryValidatorResponse>;
                        validatorDelegations(request: _132.QueryValidatorDelegationsRequest): Promise<_132.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _132.QueryValidatorUnbondingDelegationsRequest): Promise<_132.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _132.QueryDelegationRequest): Promise<_132.QueryDelegationResponse>;
                        unbondingDelegation(request: _132.QueryUnbondingDelegationRequest): Promise<_132.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _132.QueryDelegatorDelegationsRequest): Promise<_132.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _132.QueryDelegatorUnbondingDelegationsRequest): Promise<_132.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _132.QueryRedelegationsRequest): Promise<_132.QueryRedelegationsResponse>;
                        delegatorValidators(request: _132.QueryDelegatorValidatorsRequest): Promise<_132.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _132.QueryDelegatorValidatorRequest): Promise<_132.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _132.QueryHistoricalInfoRequest): Promise<_132.QueryHistoricalInfoResponse>;
                        pool(request?: _132.QueryPoolRequest): Promise<_132.QueryPoolResponse>;
                        params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _136.SimulateRequest): Promise<_136.SimulateResponse>;
                        getTx(request: _136.GetTxRequest): Promise<_136.GetTxResponse>;
                        broadcastTx(request: _136.BroadcastTxRequest): Promise<_136.BroadcastTxResponse>;
                        getTxsEvent(request: _136.GetTxsEventRequest): Promise<_136.GetTxsEventResponse>;
                        getBlockWithTxs(request: _136.GetBlockWithTxsRequest): Promise<_136.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _138.QueryCurrentPlanRequest): Promise<_138.QueryCurrentPlanResponse>;
                        appliedPlan(request: _138.QueryAppliedPlanRequest): Promise<_138.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _138.QueryUpgradedConsensusStateRequest): Promise<_138.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _138.QueryModuleVersionsRequest): Promise<_138.QueryModuleVersionsResponse>;
                        authority(request?: _138.QueryAuthorityRequest): Promise<_138.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _237.LCDQueryClient;
                };
                authz: {
                    v1beta1: _238.LCDQueryClient;
                };
                bank: {
                    v1beta1: _239.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _240.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _241.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _242.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _243.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _244.LCDQueryClient;
                };
                gov: {
                    v1: _245.LCDQueryClient;
                    v1beta1: _246.LCDQueryClient;
                };
                group: {
                    v1: _247.LCDQueryClient;
                };
                mint: {
                    v1beta1: _248.LCDQueryClient;
                };
                nft: {
                    v1beta1: _249.LCDQueryClient;
                };
                params: {
                    v1beta1: _250.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _251.LCDQueryClient;
                };
                staking: {
                    v1beta1: _252.LCDQueryClient;
                };
                tx: {
                    v1beta1: _253.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _254.LCDQueryClient;
                };
            };
        }>;
    };
}
