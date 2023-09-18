import * as _64 from "./app/module/v1alpha1/module";
import * as _65 from "./app/v1alpha1/config";
import * as _66 from "./app/v1alpha1/module";
import * as _67 from "./app/v1alpha1/query";
import * as _68 from "./auth/v1beta1/auth";
import * as _69 from "./auth/v1beta1/genesis";
import * as _70 from "./auth/v1beta1/query";
import * as _71 from "./authz/v1beta1/authz";
import * as _72 from "./authz/v1beta1/event";
import * as _73 from "./authz/v1beta1/genesis";
import * as _74 from "./authz/v1beta1/query";
import * as _75 from "./authz/v1beta1/tx";
import * as _76 from "./bank/v1beta1/authz";
import * as _77 from "./bank/v1beta1/bank";
import * as _78 from "./bank/v1beta1/genesis";
import * as _79 from "./bank/v1beta1/query";
import * as _80 from "./bank/v1beta1/tx";
import * as _81 from "./base/abci/v1beta1/abci";
import * as _82 from "./base/kv/v1beta1/kv";
import * as _83 from "./base/node/v1beta1/query";
import * as _84 from "./base/query/v1beta1/pagination";
import * as _85 from "./base/reflection/v1beta1/reflection";
import * as _86 from "./base/reflection/v2alpha1/reflection";
import * as _87 from "./base/snapshots/v1beta1/snapshot";
import * as _88 from "./base/store/v1beta1/commit_info";
import * as _89 from "./base/store/v1beta1/listening";
import * as _90 from "./base/tendermint/v1beta1/query";
import * as _91 from "./base/tendermint/v1beta1/types";
import * as _92 from "./base/v1beta1/coin";
import * as _93 from "./capability/v1beta1/capability";
import * as _94 from "./capability/v1beta1/genesis";
import * as _95 from "./crisis/v1beta1/genesis";
import * as _96 from "./crisis/v1beta1/tx";
import * as _97 from "./crypto/ed25519/keys";
import * as _98 from "./crypto/hd/v1/hd";
import * as _99 from "./crypto/keyring/v1/record";
import * as _100 from "./crypto/multisig/keys";
import * as _101 from "./crypto/secp256k1/keys";
import * as _102 from "./crypto/secp256r1/keys";
import * as _103 from "./distribution/v1beta1/distribution";
import * as _104 from "./distribution/v1beta1/genesis";
import * as _105 from "./distribution/v1beta1/query";
import * as _106 from "./distribution/v1beta1/tx";
import * as _107 from "./evidence/v1beta1/evidence";
import * as _108 from "./evidence/v1beta1/genesis";
import * as _109 from "./evidence/v1beta1/query";
import * as _110 from "./evidence/v1beta1/tx";
import * as _111 from "./feegrant/v1beta1/feegrant";
import * as _112 from "./feegrant/v1beta1/genesis";
import * as _113 from "./feegrant/v1beta1/query";
import * as _114 from "./feegrant/v1beta1/tx";
import * as _115 from "./genutil/v1beta1/genesis";
import * as _116 from "./gov/v1/genesis";
import * as _117 from "./gov/v1/gov";
import * as _118 from "./gov/v1/query";
import * as _119 from "./gov/v1/tx";
import * as _120 from "./gov/v1beta1/genesis";
import * as _121 from "./gov/v1beta1/gov";
import * as _122 from "./gov/v1beta1/query";
import * as _123 from "./gov/v1beta1/tx";
import * as _124 from "./group/v1/events";
import * as _125 from "./group/v1/genesis";
import * as _126 from "./group/v1/query";
import * as _127 from "./group/v1/tx";
import * as _128 from "./group/v1/types";
import * as _129 from "./mint/v1beta1/genesis";
import * as _130 from "./mint/v1beta1/mint";
import * as _131 from "./mint/v1beta1/query";
import * as _133 from "./nft/v1beta1/event";
import * as _134 from "./nft/v1beta1/genesis";
import * as _135 from "./nft/v1beta1/nft";
import * as _136 from "./nft/v1beta1/query";
import * as _137 from "./nft/v1beta1/tx";
import * as _138 from "./orm/module/v1alpha1/module";
import * as _139 from "./orm/v1/orm";
import * as _140 from "./orm/v1alpha1/schema";
import * as _141 from "./params/v1beta1/params";
import * as _142 from "./params/v1beta1/query";
import * as _143 from "./slashing/v1beta1/genesis";
import * as _144 from "./slashing/v1beta1/query";
import * as _145 from "./slashing/v1beta1/slashing";
import * as _146 from "./slashing/v1beta1/tx";
import * as _147 from "./staking/v1beta1/authz";
import * as _148 from "./staking/v1beta1/genesis";
import * as _149 from "./staking/v1beta1/query";
import * as _150 from "./staking/v1beta1/staking";
import * as _151 from "./staking/v1beta1/tx";
import * as _152 from "./tx/signing/v1beta1/signing";
import * as _153 from "./tx/v1beta1/service";
import * as _154 from "./tx/v1beta1/tx";
import * as _155 from "./upgrade/v1beta1/query";
import * as _156 from "./upgrade/v1beta1/tx";
import * as _157 from "./upgrade/v1beta1/upgrade";
import * as _158 from "./vesting/v1beta1/tx";
import * as _159 from "./vesting/v1beta1/vesting";
import * as _282 from "./auth/v1beta1/query.lcd";
import * as _283 from "./authz/v1beta1/query.lcd";
import * as _284 from "./bank/v1beta1/query.lcd";
import * as _285 from "./base/node/v1beta1/query.lcd";
import * as _286 from "./base/tendermint/v1beta1/query.lcd";
import * as _287 from "./distribution/v1beta1/query.lcd";
import * as _288 from "./evidence/v1beta1/query.lcd";
import * as _289 from "./feegrant/v1beta1/query.lcd";
import * as _290 from "./gov/v1/query.lcd";
import * as _291 from "./gov/v1beta1/query.lcd";
import * as _292 from "./group/v1/query.lcd";
import * as _293 from "./mint/v1beta1/query.lcd";
import * as _294 from "./nft/v1beta1/query.lcd";
import * as _295 from "./params/v1beta1/query.lcd";
import * as _296 from "./slashing/v1beta1/query.lcd";
import * as _297 from "./staking/v1beta1/query.lcd";
import * as _298 from "./tx/v1beta1/service.lcd";
import * as _299 from "./upgrade/v1beta1/query.lcd";
import * as _300 from "./app/v1alpha1/query.rpc.Query";
import * as _301 from "./auth/v1beta1/query.rpc.Query";
import * as _302 from "./authz/v1beta1/query.rpc.Query";
import * as _303 from "./bank/v1beta1/query.rpc.Query";
import * as _304 from "./base/node/v1beta1/query.rpc.Service";
import * as _305 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _306 from "./distribution/v1beta1/query.rpc.Query";
import * as _307 from "./evidence/v1beta1/query.rpc.Query";
import * as _308 from "./feegrant/v1beta1/query.rpc.Query";
import * as _309 from "./gov/v1/query.rpc.Query";
import * as _310 from "./gov/v1beta1/query.rpc.Query";
import * as _311 from "./group/v1/query.rpc.Query";
import * as _312 from "./mint/v1beta1/query.rpc.Query";
import * as _313 from "./nft/v1beta1/query.rpc.Query";
import * as _314 from "./params/v1beta1/query.rpc.Query";
import * as _315 from "./slashing/v1beta1/query.rpc.Query";
import * as _316 from "./staking/v1beta1/query.rpc.Query";
import * as _317 from "./tx/v1beta1/service.rpc.Service";
import * as _318 from "./upgrade/v1beta1/query.rpc.Query";
import * as _319 from "./authz/v1beta1/tx.rpc.msg";
import * as _320 from "./bank/v1beta1/tx.rpc.msg";
import * as _321 from "./crisis/v1beta1/tx.rpc.msg";
import * as _322 from "./distribution/v1beta1/tx.rpc.msg";
import * as _323 from "./evidence/v1beta1/tx.rpc.msg";
import * as _324 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _325 from "./gov/v1/tx.rpc.msg";
import * as _326 from "./gov/v1beta1/tx.rpc.msg";
import * as _327 from "./group/v1/tx.rpc.msg";
import * as _328 from "./nft/v1beta1/tx.rpc.msg";
import * as _329 from "./slashing/v1beta1/tx.rpc.msg";
import * as _330 from "./staking/v1beta1/tx.rpc.msg";
import * as _331 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _332 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _64.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _64.Module;
                    fromPartial(_: Partial<_64.Module>): _64.Module;
                    fromAmino(_: _64.ModuleAmino): _64.Module;
                    toAmino(_: _64.Module): _64.ModuleAmino;
                    fromAminoMsg(object: _64.ModuleAminoMsg): _64.Module;
                    toAminoMsg(message: _64.Module): _64.ModuleAminoMsg;
                    fromProtoMsg(message: _64.ModuleProtoMsg): _64.Module;
                    toProto(message: _64.Module): Uint8Array;
                    toProtoMsg(message: _64.Module): _64.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _67.QueryConfigRequest): Promise<_67.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _67.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryConfigRequest;
                fromPartial(_: Partial<_67.QueryConfigRequest>): _67.QueryConfigRequest;
                fromAmino(_: _67.QueryConfigRequestAmino): _67.QueryConfigRequest;
                toAmino(_: _67.QueryConfigRequest): _67.QueryConfigRequestAmino;
                fromAminoMsg(object: _67.QueryConfigRequestAminoMsg): _67.QueryConfigRequest;
                toAminoMsg(message: _67.QueryConfigRequest): _67.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _67.QueryConfigRequestProtoMsg): _67.QueryConfigRequest;
                toProto(message: _67.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _67.QueryConfigRequest): _67.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _67.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryConfigResponse;
                fromPartial(object: Partial<_67.QueryConfigResponse>): _67.QueryConfigResponse;
                fromAmino(object: _67.QueryConfigResponseAmino): _67.QueryConfigResponse;
                toAmino(message: _67.QueryConfigResponse): _67.QueryConfigResponseAmino;
                fromAminoMsg(object: _67.QueryConfigResponseAminoMsg): _67.QueryConfigResponse;
                toAminoMsg(message: _67.QueryConfigResponse): _67.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _67.QueryConfigResponseProtoMsg): _67.QueryConfigResponse;
                toProto(message: _67.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _67.QueryConfigResponse): _67.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _66.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ModuleDescriptor;
                fromPartial(object: Partial<_66.ModuleDescriptor>): _66.ModuleDescriptor;
                fromAmino(object: _66.ModuleDescriptorAmino): _66.ModuleDescriptor;
                toAmino(message: _66.ModuleDescriptor): _66.ModuleDescriptorAmino;
                fromAminoMsg(object: _66.ModuleDescriptorAminoMsg): _66.ModuleDescriptor;
                toAminoMsg(message: _66.ModuleDescriptor): _66.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _66.ModuleDescriptorProtoMsg): _66.ModuleDescriptor;
                toProto(message: _66.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _66.ModuleDescriptor): _66.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _66.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.PackageReference;
                fromPartial(object: Partial<_66.PackageReference>): _66.PackageReference;
                fromAmino(object: _66.PackageReferenceAmino): _66.PackageReference;
                toAmino(message: _66.PackageReference): _66.PackageReferenceAmino;
                fromAminoMsg(object: _66.PackageReferenceAminoMsg): _66.PackageReference;
                toAminoMsg(message: _66.PackageReference): _66.PackageReferenceAminoMsg;
                fromProtoMsg(message: _66.PackageReferenceProtoMsg): _66.PackageReference;
                toProto(message: _66.PackageReference): Uint8Array;
                toProtoMsg(message: _66.PackageReference): _66.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _66.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MigrateFromInfo;
                fromPartial(object: Partial<_66.MigrateFromInfo>): _66.MigrateFromInfo;
                fromAmino(object: _66.MigrateFromInfoAmino): _66.MigrateFromInfo;
                toAmino(message: _66.MigrateFromInfo): _66.MigrateFromInfoAmino;
                fromAminoMsg(object: _66.MigrateFromInfoAminoMsg): _66.MigrateFromInfo;
                toAminoMsg(message: _66.MigrateFromInfo): _66.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _66.MigrateFromInfoProtoMsg): _66.MigrateFromInfo;
                toProto(message: _66.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _66.MigrateFromInfo): _66.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _65.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Config;
                fromPartial(object: Partial<_65.Config>): _65.Config;
                fromAmino(object: _65.ConfigAmino): _65.Config;
                toAmino(message: _65.Config): _65.ConfigAmino;
                fromAminoMsg(object: _65.ConfigAminoMsg): _65.Config;
                toAminoMsg(message: _65.Config): _65.ConfigAminoMsg;
                fromProtoMsg(message: _65.ConfigProtoMsg): _65.Config;
                toProto(message: _65.Config): Uint8Array;
                toProtoMsg(message: _65.Config): _65.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _65.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ModuleConfig;
                fromPartial(object: Partial<_65.ModuleConfig>): _65.ModuleConfig;
                fromAmino(object: _65.ModuleConfigAmino): _65.ModuleConfig;
                toAmino(message: _65.ModuleConfig): _65.ModuleConfigAmino;
                fromAminoMsg(object: _65.ModuleConfigAminoMsg): _65.ModuleConfig;
                toAminoMsg(message: _65.ModuleConfig): _65.ModuleConfigAminoMsg;
                fromProtoMsg(message: _65.ModuleConfigProtoMsg): _65.ModuleConfig;
                toProto(message: _65.ModuleConfig): Uint8Array;
                toProtoMsg(message: _65.ModuleConfig): _65.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _301.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _70.QueryAccountsRequest): Promise<_70.QueryAccountsResponse>;
                account(request: _70.QueryAccountRequest): Promise<_70.QueryAccountResponse>;
                accountAddressByID(request: _70.QueryAccountAddressByIDRequest): Promise<_70.QueryAccountAddressByIDResponse>;
                params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                moduleAccounts(request?: _70.QueryModuleAccountsRequest): Promise<_70.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _70.QueryModuleAccountByNameRequest): Promise<_70.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _70.Bech32PrefixRequest): Promise<_70.Bech32PrefixResponse>;
                addressBytesToString(request: _70.AddressBytesToStringRequest): Promise<_70.AddressBytesToStringResponse>;
                addressStringToBytes(request: _70.AddressStringToBytesRequest): Promise<_70.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _282.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _70.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAccountsRequest;
                fromPartial(object: Partial<_70.QueryAccountsRequest>): _70.QueryAccountsRequest;
                fromAmino(object: _70.QueryAccountsRequestAmino): _70.QueryAccountsRequest;
                toAmino(message: _70.QueryAccountsRequest): _70.QueryAccountsRequestAmino;
                fromAminoMsg(object: _70.QueryAccountsRequestAminoMsg): _70.QueryAccountsRequest;
                toAminoMsg(message: _70.QueryAccountsRequest): _70.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAccountsRequestProtoMsg): _70.QueryAccountsRequest;
                toProto(message: _70.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAccountsRequest): _70.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _70.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAccountsResponse;
                fromPartial(object: Partial<_70.QueryAccountsResponse>): _70.QueryAccountsResponse;
                fromAmino(object: _70.QueryAccountsResponseAmino): _70.QueryAccountsResponse;
                toAmino(message: _70.QueryAccountsResponse): _70.QueryAccountsResponseAmino;
                fromAminoMsg(object: _70.QueryAccountsResponseAminoMsg): _70.QueryAccountsResponse;
                toAminoMsg(message: _70.QueryAccountsResponse): _70.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAccountsResponseProtoMsg): _70.QueryAccountsResponse;
                toProto(message: _70.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAccountsResponse): _70.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _70.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAccountRequest;
                fromPartial(object: Partial<_70.QueryAccountRequest>): _70.QueryAccountRequest;
                fromAmino(object: _70.QueryAccountRequestAmino): _70.QueryAccountRequest;
                toAmino(message: _70.QueryAccountRequest): _70.QueryAccountRequestAmino;
                fromAminoMsg(object: _70.QueryAccountRequestAminoMsg): _70.QueryAccountRequest;
                toAminoMsg(message: _70.QueryAccountRequest): _70.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAccountRequestProtoMsg): _70.QueryAccountRequest;
                toProto(message: _70.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAccountRequest): _70.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _70.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAccountResponse;
                fromPartial(object: Partial<_70.QueryAccountResponse>): _70.QueryAccountResponse;
                fromAmino(object: _70.QueryAccountResponseAmino): _70.QueryAccountResponse;
                toAmino(message: _70.QueryAccountResponse): _70.QueryAccountResponseAmino;
                fromAminoMsg(object: _70.QueryAccountResponseAminoMsg): _70.QueryAccountResponse;
                toAminoMsg(message: _70.QueryAccountResponse): _70.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAccountResponseProtoMsg): _70.QueryAccountResponse;
                toProto(message: _70.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAccountResponse): _70.QueryAccountResponseProtoMsg;
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
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _70.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_70.QueryModuleAccountsRequest>): _70.QueryModuleAccountsRequest;
                fromAmino(_: _70.QueryModuleAccountsRequestAmino): _70.QueryModuleAccountsRequest;
                toAmino(_: _70.QueryModuleAccountsRequest): _70.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _70.QueryModuleAccountsRequestAminoMsg): _70.QueryModuleAccountsRequest;
                toAminoMsg(message: _70.QueryModuleAccountsRequest): _70.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryModuleAccountsRequestProtoMsg): _70.QueryModuleAccountsRequest;
                toProto(message: _70.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryModuleAccountsRequest): _70.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _70.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_70.QueryModuleAccountsResponse>): _70.QueryModuleAccountsResponse;
                fromAmino(object: _70.QueryModuleAccountsResponseAmino): _70.QueryModuleAccountsResponse;
                toAmino(message: _70.QueryModuleAccountsResponse): _70.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _70.QueryModuleAccountsResponseAminoMsg): _70.QueryModuleAccountsResponse;
                toAminoMsg(message: _70.QueryModuleAccountsResponse): _70.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryModuleAccountsResponseProtoMsg): _70.QueryModuleAccountsResponse;
                toProto(message: _70.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryModuleAccountsResponse): _70.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _70.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_70.QueryModuleAccountByNameRequest>): _70.QueryModuleAccountByNameRequest;
                fromAmino(object: _70.QueryModuleAccountByNameRequestAmino): _70.QueryModuleAccountByNameRequest;
                toAmino(message: _70.QueryModuleAccountByNameRequest): _70.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _70.QueryModuleAccountByNameRequestAminoMsg): _70.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _70.QueryModuleAccountByNameRequest): _70.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _70.QueryModuleAccountByNameRequestProtoMsg): _70.QueryModuleAccountByNameRequest;
                toProto(message: _70.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _70.QueryModuleAccountByNameRequest): _70.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _70.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_70.QueryModuleAccountByNameResponse>): _70.QueryModuleAccountByNameResponse;
                fromAmino(object: _70.QueryModuleAccountByNameResponseAmino): _70.QueryModuleAccountByNameResponse;
                toAmino(message: _70.QueryModuleAccountByNameResponse): _70.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _70.QueryModuleAccountByNameResponseAminoMsg): _70.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _70.QueryModuleAccountByNameResponse): _70.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _70.QueryModuleAccountByNameResponseProtoMsg): _70.QueryModuleAccountByNameResponse;
                toProto(message: _70.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _70.QueryModuleAccountByNameResponse): _70.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _70.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.Bech32PrefixRequest;
                fromPartial(_: Partial<_70.Bech32PrefixRequest>): _70.Bech32PrefixRequest;
                fromAmino(_: _70.Bech32PrefixRequestAmino): _70.Bech32PrefixRequest;
                toAmino(_: _70.Bech32PrefixRequest): _70.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _70.Bech32PrefixRequestAminoMsg): _70.Bech32PrefixRequest;
                toAminoMsg(message: _70.Bech32PrefixRequest): _70.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _70.Bech32PrefixRequestProtoMsg): _70.Bech32PrefixRequest;
                toProto(message: _70.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _70.Bech32PrefixRequest): _70.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _70.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Bech32PrefixResponse;
                fromPartial(object: Partial<_70.Bech32PrefixResponse>): _70.Bech32PrefixResponse;
                fromAmino(object: _70.Bech32PrefixResponseAmino): _70.Bech32PrefixResponse;
                toAmino(message: _70.Bech32PrefixResponse): _70.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _70.Bech32PrefixResponseAminoMsg): _70.Bech32PrefixResponse;
                toAminoMsg(message: _70.Bech32PrefixResponse): _70.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _70.Bech32PrefixResponseProtoMsg): _70.Bech32PrefixResponse;
                toProto(message: _70.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _70.Bech32PrefixResponse): _70.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _70.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.AddressBytesToStringRequest;
                fromPartial(object: Partial<_70.AddressBytesToStringRequest>): _70.AddressBytesToStringRequest;
                fromAmino(object: _70.AddressBytesToStringRequestAmino): _70.AddressBytesToStringRequest;
                toAmino(message: _70.AddressBytesToStringRequest): _70.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _70.AddressBytesToStringRequestAminoMsg): _70.AddressBytesToStringRequest;
                toAminoMsg(message: _70.AddressBytesToStringRequest): _70.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _70.AddressBytesToStringRequestProtoMsg): _70.AddressBytesToStringRequest;
                toProto(message: _70.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _70.AddressBytesToStringRequest): _70.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _70.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.AddressBytesToStringResponse;
                fromPartial(object: Partial<_70.AddressBytesToStringResponse>): _70.AddressBytesToStringResponse;
                fromAmino(object: _70.AddressBytesToStringResponseAmino): _70.AddressBytesToStringResponse;
                toAmino(message: _70.AddressBytesToStringResponse): _70.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _70.AddressBytesToStringResponseAminoMsg): _70.AddressBytesToStringResponse;
                toAminoMsg(message: _70.AddressBytesToStringResponse): _70.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _70.AddressBytesToStringResponseProtoMsg): _70.AddressBytesToStringResponse;
                toProto(message: _70.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _70.AddressBytesToStringResponse): _70.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _70.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.AddressStringToBytesRequest;
                fromPartial(object: Partial<_70.AddressStringToBytesRequest>): _70.AddressStringToBytesRequest;
                fromAmino(object: _70.AddressStringToBytesRequestAmino): _70.AddressStringToBytesRequest;
                toAmino(message: _70.AddressStringToBytesRequest): _70.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _70.AddressStringToBytesRequestAminoMsg): _70.AddressStringToBytesRequest;
                toAminoMsg(message: _70.AddressStringToBytesRequest): _70.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _70.AddressStringToBytesRequestProtoMsg): _70.AddressStringToBytesRequest;
                toProto(message: _70.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _70.AddressStringToBytesRequest): _70.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _70.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.AddressStringToBytesResponse;
                fromPartial(object: Partial<_70.AddressStringToBytesResponse>): _70.AddressStringToBytesResponse;
                fromAmino(object: _70.AddressStringToBytesResponseAmino): _70.AddressStringToBytesResponse;
                toAmino(message: _70.AddressStringToBytesResponse): _70.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _70.AddressStringToBytesResponseAminoMsg): _70.AddressStringToBytesResponse;
                toAminoMsg(message: _70.AddressStringToBytesResponse): _70.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _70.AddressStringToBytesResponseProtoMsg): _70.AddressStringToBytesResponse;
                toProto(message: _70.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _70.AddressStringToBytesResponse): _70.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _70.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_70.QueryAccountAddressByIDRequest>): _70.QueryAccountAddressByIDRequest;
                fromAmino(object: _70.QueryAccountAddressByIDRequestAmino): _70.QueryAccountAddressByIDRequest;
                toAmino(message: _70.QueryAccountAddressByIDRequest): _70.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _70.QueryAccountAddressByIDRequestAminoMsg): _70.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _70.QueryAccountAddressByIDRequest): _70.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAccountAddressByIDRequestProtoMsg): _70.QueryAccountAddressByIDRequest;
                toProto(message: _70.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAccountAddressByIDRequest): _70.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _70.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_70.QueryAccountAddressByIDResponse>): _70.QueryAccountAddressByIDResponse;
                fromAmino(object: _70.QueryAccountAddressByIDResponseAmino): _70.QueryAccountAddressByIDResponse;
                toAmino(message: _70.QueryAccountAddressByIDResponse): _70.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _70.QueryAccountAddressByIDResponseAminoMsg): _70.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _70.QueryAccountAddressByIDResponse): _70.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAccountAddressByIDResponseProtoMsg): _70.QueryAccountAddressByIDResponse;
                toProto(message: _70.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAccountAddressByIDResponse): _70.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _68.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _68.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _68.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.BaseAccount;
                fromPartial(object: Partial<_68.BaseAccount>): _68.BaseAccount;
                fromAmino(object: _68.BaseAccountAmino): _68.BaseAccount;
                toAmino(message: _68.BaseAccount): _68.BaseAccountAmino;
                fromAminoMsg(object: _68.BaseAccountAminoMsg): _68.BaseAccount;
                toAminoMsg(message: _68.BaseAccount): _68.BaseAccountAminoMsg;
                fromProtoMsg(message: _68.BaseAccountProtoMsg): _68.BaseAccount;
                toProto(message: _68.BaseAccount): Uint8Array;
                toProtoMsg(message: _68.BaseAccount): _68.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _68.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.ModuleAccount;
                fromPartial(object: Partial<_68.ModuleAccount>): _68.ModuleAccount;
                fromAmino(object: _68.ModuleAccountAmino): _68.ModuleAccount;
                toAmino(message: _68.ModuleAccount): _68.ModuleAccountAmino;
                fromAminoMsg(object: _68.ModuleAccountAminoMsg): _68.ModuleAccount;
                toAminoMsg(message: _68.ModuleAccount): _68.ModuleAccountAminoMsg;
                fromProtoMsg(message: _68.ModuleAccountProtoMsg): _68.ModuleAccount;
                toProto(message: _68.ModuleAccount): Uint8Array;
                toProtoMsg(message: _68.ModuleAccount): _68.ModuleAccountProtoMsg;
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
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _319.MsgClientImpl;
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _74.QueryGrantsRequest): Promise<_74.QueryGrantsResponse>;
                granterGrants(request: _74.QueryGranterGrantsRequest): Promise<_74.QueryGranterGrantsResponse>;
                granteeGrants(request: _74.QueryGranteeGrantsRequest): Promise<_74.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _283.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _75.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _75.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _75.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _75.MsgGrant): {
                        typeUrl: string;
                        value: _75.MsgGrant;
                    };
                    exec(value: _75.MsgExec): {
                        typeUrl: string;
                        value: _75.MsgExec;
                    };
                    revoke(value: _75.MsgRevoke): {
                        typeUrl: string;
                        value: _75.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _75.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _75.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _75.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _75.MsgGrant): {
                        typeUrl: string;
                        value: _75.MsgGrant;
                    };
                    exec(value: _75.MsgExec): {
                        typeUrl: string;
                        value: _75.MsgExec;
                    };
                    revoke(value: _75.MsgRevoke): {
                        typeUrl: string;
                        value: _75.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _75.MsgGrant) => _75.MsgGrantAmino;
                    fromAmino: (object: _75.MsgGrantAmino) => _75.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _75.MsgExec) => _75.MsgExecAmino;
                    fromAmino: (object: _75.MsgExecAmino) => _75.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _75.MsgRevoke) => _75.MsgRevokeAmino;
                    fromAmino: (object: _75.MsgRevokeAmino) => _75.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _75.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgGrant;
                fromPartial(object: Partial<_75.MsgGrant>): _75.MsgGrant;
                fromAmino(object: _75.MsgGrantAmino): _75.MsgGrant;
                toAmino(message: _75.MsgGrant): _75.MsgGrantAmino;
                fromAminoMsg(object: _75.MsgGrantAminoMsg): _75.MsgGrant;
                toAminoMsg(message: _75.MsgGrant): _75.MsgGrantAminoMsg;
                fromProtoMsg(message: _75.MsgGrantProtoMsg): _75.MsgGrant;
                toProto(message: _75.MsgGrant): Uint8Array;
                toProtoMsg(message: _75.MsgGrant): _75.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _75.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgExecResponse;
                fromPartial(object: Partial<_75.MsgExecResponse>): _75.MsgExecResponse;
                fromAmino(object: _75.MsgExecResponseAmino): _75.MsgExecResponse;
                toAmino(message: _75.MsgExecResponse): _75.MsgExecResponseAmino;
                fromAminoMsg(object: _75.MsgExecResponseAminoMsg): _75.MsgExecResponse;
                toAminoMsg(message: _75.MsgExecResponse): _75.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _75.MsgExecResponseProtoMsg): _75.MsgExecResponse;
                toProto(message: _75.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _75.MsgExecResponse): _75.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _75.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgExec;
                fromPartial(object: Partial<_75.MsgExec>): _75.MsgExec;
                fromAmino(object: _75.MsgExecAmino): _75.MsgExec;
                toAmino(message: _75.MsgExec): _75.MsgExecAmino;
                fromAminoMsg(object: _75.MsgExecAminoMsg): _75.MsgExec;
                toAminoMsg(message: _75.MsgExec): _75.MsgExecAminoMsg;
                fromProtoMsg(message: _75.MsgExecProtoMsg): _75.MsgExec;
                toProto(message: _75.MsgExec): Uint8Array;
                toProtoMsg(message: _75.MsgExec): _75.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _75.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgGrantResponse;
                fromPartial(_: Partial<_75.MsgGrantResponse>): _75.MsgGrantResponse;
                fromAmino(_: _75.MsgGrantResponseAmino): _75.MsgGrantResponse;
                toAmino(_: _75.MsgGrantResponse): _75.MsgGrantResponseAmino;
                fromAminoMsg(object: _75.MsgGrantResponseAminoMsg): _75.MsgGrantResponse;
                toAminoMsg(message: _75.MsgGrantResponse): _75.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _75.MsgGrantResponseProtoMsg): _75.MsgGrantResponse;
                toProto(message: _75.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _75.MsgGrantResponse): _75.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _75.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgRevoke;
                fromPartial(object: Partial<_75.MsgRevoke>): _75.MsgRevoke;
                fromAmino(object: _75.MsgRevokeAmino): _75.MsgRevoke;
                toAmino(message: _75.MsgRevoke): _75.MsgRevokeAmino;
                fromAminoMsg(object: _75.MsgRevokeAminoMsg): _75.MsgRevoke;
                toAminoMsg(message: _75.MsgRevoke): _75.MsgRevokeAminoMsg;
                fromProtoMsg(message: _75.MsgRevokeProtoMsg): _75.MsgRevoke;
                toProto(message: _75.MsgRevoke): Uint8Array;
                toProtoMsg(message: _75.MsgRevoke): _75.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _75.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgRevokeResponse;
                fromPartial(_: Partial<_75.MsgRevokeResponse>): _75.MsgRevokeResponse;
                fromAmino(_: _75.MsgRevokeResponseAmino): _75.MsgRevokeResponse;
                toAmino(_: _75.MsgRevokeResponse): _75.MsgRevokeResponseAmino;
                fromAminoMsg(object: _75.MsgRevokeResponseAminoMsg): _75.MsgRevokeResponse;
                toAminoMsg(message: _75.MsgRevokeResponse): _75.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _75.MsgRevokeResponseProtoMsg): _75.MsgRevokeResponse;
                toProto(message: _75.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _75.MsgRevokeResponse): _75.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _74.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryGrantsRequest;
                fromPartial(object: Partial<_74.QueryGrantsRequest>): _74.QueryGrantsRequest;
                fromAmino(object: _74.QueryGrantsRequestAmino): _74.QueryGrantsRequest;
                toAmino(message: _74.QueryGrantsRequest): _74.QueryGrantsRequestAmino;
                fromAminoMsg(object: _74.QueryGrantsRequestAminoMsg): _74.QueryGrantsRequest;
                toAminoMsg(message: _74.QueryGrantsRequest): _74.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryGrantsRequestProtoMsg): _74.QueryGrantsRequest;
                toProto(message: _74.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryGrantsRequest): _74.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _74.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryGrantsResponse;
                fromPartial(object: Partial<_74.QueryGrantsResponse>): _74.QueryGrantsResponse;
                fromAmino(object: _74.QueryGrantsResponseAmino): _74.QueryGrantsResponse;
                toAmino(message: _74.QueryGrantsResponse): _74.QueryGrantsResponseAmino;
                fromAminoMsg(object: _74.QueryGrantsResponseAminoMsg): _74.QueryGrantsResponse;
                toAminoMsg(message: _74.QueryGrantsResponse): _74.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryGrantsResponseProtoMsg): _74.QueryGrantsResponse;
                toProto(message: _74.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryGrantsResponse): _74.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _74.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_74.QueryGranterGrantsRequest>): _74.QueryGranterGrantsRequest;
                fromAmino(object: _74.QueryGranterGrantsRequestAmino): _74.QueryGranterGrantsRequest;
                toAmino(message: _74.QueryGranterGrantsRequest): _74.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _74.QueryGranterGrantsRequestAminoMsg): _74.QueryGranterGrantsRequest;
                toAminoMsg(message: _74.QueryGranterGrantsRequest): _74.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryGranterGrantsRequestProtoMsg): _74.QueryGranterGrantsRequest;
                toProto(message: _74.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryGranterGrantsRequest): _74.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _74.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_74.QueryGranterGrantsResponse>): _74.QueryGranterGrantsResponse;
                fromAmino(object: _74.QueryGranterGrantsResponseAmino): _74.QueryGranterGrantsResponse;
                toAmino(message: _74.QueryGranterGrantsResponse): _74.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _74.QueryGranterGrantsResponseAminoMsg): _74.QueryGranterGrantsResponse;
                toAminoMsg(message: _74.QueryGranterGrantsResponse): _74.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryGranterGrantsResponseProtoMsg): _74.QueryGranterGrantsResponse;
                toProto(message: _74.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryGranterGrantsResponse): _74.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _74.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_74.QueryGranteeGrantsRequest>): _74.QueryGranteeGrantsRequest;
                fromAmino(object: _74.QueryGranteeGrantsRequestAmino): _74.QueryGranteeGrantsRequest;
                toAmino(message: _74.QueryGranteeGrantsRequest): _74.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _74.QueryGranteeGrantsRequestAminoMsg): _74.QueryGranteeGrantsRequest;
                toAminoMsg(message: _74.QueryGranteeGrantsRequest): _74.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryGranteeGrantsRequestProtoMsg): _74.QueryGranteeGrantsRequest;
                toProto(message: _74.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryGranteeGrantsRequest): _74.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _74.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_74.QueryGranteeGrantsResponse>): _74.QueryGranteeGrantsResponse;
                fromAmino(object: _74.QueryGranteeGrantsResponseAmino): _74.QueryGranteeGrantsResponse;
                toAmino(message: _74.QueryGranteeGrantsResponse): _74.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _74.QueryGranteeGrantsResponseAminoMsg): _74.QueryGranteeGrantsResponse;
                toAminoMsg(message: _74.QueryGranteeGrantsResponse): _74.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryGranteeGrantsResponseProtoMsg): _74.QueryGranteeGrantsResponse;
                toProto(message: _74.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryGranteeGrantsResponse): _74.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _72.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.EventGrant;
                fromPartial(object: Partial<_72.EventGrant>): _72.EventGrant;
                fromAmino(object: _72.EventGrantAmino): _72.EventGrant;
                toAmino(message: _72.EventGrant): _72.EventGrantAmino;
                fromAminoMsg(object: _72.EventGrantAminoMsg): _72.EventGrant;
                toAminoMsg(message: _72.EventGrant): _72.EventGrantAminoMsg;
                fromProtoMsg(message: _72.EventGrantProtoMsg): _72.EventGrant;
                toProto(message: _72.EventGrant): Uint8Array;
                toProtoMsg(message: _72.EventGrant): _72.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _72.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.EventRevoke;
                fromPartial(object: Partial<_72.EventRevoke>): _72.EventRevoke;
                fromAmino(object: _72.EventRevokeAmino): _72.EventRevoke;
                toAmino(message: _72.EventRevoke): _72.EventRevokeAmino;
                fromAminoMsg(object: _72.EventRevokeAminoMsg): _72.EventRevoke;
                toAminoMsg(message: _72.EventRevoke): _72.EventRevokeAminoMsg;
                fromProtoMsg(message: _72.EventRevokeProtoMsg): _72.EventRevoke;
                toProto(message: _72.EventRevoke): Uint8Array;
                toProtoMsg(message: _72.EventRevoke): _72.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _71.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GenericAuthorization;
                fromPartial(object: Partial<_71.GenericAuthorization>): _71.GenericAuthorization;
                fromAmino(object: _71.GenericAuthorizationAmino): _71.GenericAuthorization;
                toAmino(message: _71.GenericAuthorization): _71.GenericAuthorizationAmino;
                fromAminoMsg(object: _71.GenericAuthorizationAminoMsg): _71.GenericAuthorization;
                toAminoMsg(message: _71.GenericAuthorization): _71.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _71.GenericAuthorizationProtoMsg): _71.GenericAuthorization;
                toProto(message: _71.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _71.GenericAuthorization): _71.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _71.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Grant;
                fromPartial(object: Partial<_71.Grant>): _71.Grant;
                fromAmino(object: _71.GrantAmino): _71.Grant;
                toAmino(message: _71.Grant): _71.GrantAmino;
                fromAminoMsg(object: _71.GrantAminoMsg): _71.Grant;
                toAminoMsg(message: _71.Grant): _71.GrantAminoMsg;
                fromProtoMsg(message: _71.GrantProtoMsg): _71.Grant;
                toProto(message: _71.Grant): Uint8Array;
                toProtoMsg(message: _71.Grant): _71.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _71.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GrantAuthorization;
                fromPartial(object: Partial<_71.GrantAuthorization>): _71.GrantAuthorization;
                fromAmino(object: _71.GrantAuthorizationAmino): _71.GrantAuthorization;
                toAmino(message: _71.GrantAuthorization): _71.GrantAuthorizationAmino;
                fromAminoMsg(object: _71.GrantAuthorizationAminoMsg): _71.GrantAuthorization;
                toAminoMsg(message: _71.GrantAuthorization): _71.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _71.GrantAuthorizationProtoMsg): _71.GrantAuthorization;
                toProto(message: _71.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _71.GrantAuthorization): _71.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _71.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GrantQueueItem;
                fromPartial(object: Partial<_71.GrantQueueItem>): _71.GrantQueueItem;
                fromAmino(object: _71.GrantQueueItemAmino): _71.GrantQueueItem;
                toAmino(message: _71.GrantQueueItem): _71.GrantQueueItemAmino;
                fromAminoMsg(object: _71.GrantQueueItemAminoMsg): _71.GrantQueueItem;
                toAminoMsg(message: _71.GrantQueueItem): _71.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _71.GrantQueueItemProtoMsg): _71.GrantQueueItem;
                toProto(message: _71.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _71.GrantQueueItem): _71.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _76.SendAuthorization | _147.StakeAuthorization | _71.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _320.MsgClientImpl;
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                allBalances(request: _79.QueryAllBalancesRequest): Promise<_79.QueryAllBalancesResponse>;
                spendableBalances(request: _79.QuerySpendableBalancesRequest): Promise<_79.QuerySpendableBalancesResponse>;
                totalSupply(request?: _79.QueryTotalSupplyRequest): Promise<_79.QueryTotalSupplyResponse>;
                supplyOf(request: _79.QuerySupplyOfRequest): Promise<_79.QuerySupplyOfResponse>;
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                denomMetadata(request: _79.QueryDenomMetadataRequest): Promise<_79.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _79.QueryDenomsMetadataRequest): Promise<_79.QueryDenomsMetadataResponse>;
                denomOwners(request: _79.QueryDenomOwnersRequest): Promise<_79.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _284.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _80.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                    multiSend(value: _80.MsgMultiSend): {
                        typeUrl: string;
                        value: _80.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _80.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                    multiSend(value: _80.MsgMultiSend): {
                        typeUrl: string;
                        value: _80.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _80.MsgSend) => _80.MsgSendAmino;
                    fromAmino: (object: _80.MsgSendAmino) => _80.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _80.MsgMultiSend) => _80.MsgMultiSendAmino;
                    fromAmino: (object: _80.MsgMultiSendAmino) => _80.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _80.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgSend;
                fromPartial(object: Partial<_80.MsgSend>): _80.MsgSend;
                fromAmino(object: _80.MsgSendAmino): _80.MsgSend;
                toAmino(message: _80.MsgSend): _80.MsgSendAmino;
                fromAminoMsg(object: _80.MsgSendAminoMsg): _80.MsgSend;
                toAminoMsg(message: _80.MsgSend): _80.MsgSendAminoMsg;
                fromProtoMsg(message: _80.MsgSendProtoMsg): _80.MsgSend;
                toProto(message: _80.MsgSend): Uint8Array;
                toProtoMsg(message: _80.MsgSend): _80.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _80.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgSendResponse;
                fromPartial(_: Partial<_80.MsgSendResponse>): _80.MsgSendResponse;
                fromAmino(_: _80.MsgSendResponseAmino): _80.MsgSendResponse;
                toAmino(_: _80.MsgSendResponse): _80.MsgSendResponseAmino;
                fromAminoMsg(object: _80.MsgSendResponseAminoMsg): _80.MsgSendResponse;
                toAminoMsg(message: _80.MsgSendResponse): _80.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _80.MsgSendResponseProtoMsg): _80.MsgSendResponse;
                toProto(message: _80.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _80.MsgSendResponse): _80.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _80.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgMultiSend;
                fromPartial(object: Partial<_80.MsgMultiSend>): _80.MsgMultiSend;
                fromAmino(object: _80.MsgMultiSendAmino): _80.MsgMultiSend;
                toAmino(message: _80.MsgMultiSend): _80.MsgMultiSendAmino;
                fromAminoMsg(object: _80.MsgMultiSendAminoMsg): _80.MsgMultiSend;
                toAminoMsg(message: _80.MsgMultiSend): _80.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _80.MsgMultiSendProtoMsg): _80.MsgMultiSend;
                toProto(message: _80.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _80.MsgMultiSend): _80.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _80.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgMultiSendResponse;
                fromPartial(_: Partial<_80.MsgMultiSendResponse>): _80.MsgMultiSendResponse;
                fromAmino(_: _80.MsgMultiSendResponseAmino): _80.MsgMultiSendResponse;
                toAmino(_: _80.MsgMultiSendResponse): _80.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _80.MsgMultiSendResponseAminoMsg): _80.MsgMultiSendResponse;
                toAminoMsg(message: _80.MsgMultiSendResponse): _80.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _80.MsgMultiSendResponseProtoMsg): _80.MsgMultiSendResponse;
                toProto(message: _80.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _80.MsgMultiSendResponse): _80.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _79.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryBalanceRequest;
                fromPartial(object: Partial<_79.QueryBalanceRequest>): _79.QueryBalanceRequest;
                fromAmino(object: _79.QueryBalanceRequestAmino): _79.QueryBalanceRequest;
                toAmino(message: _79.QueryBalanceRequest): _79.QueryBalanceRequestAmino;
                fromAminoMsg(object: _79.QueryBalanceRequestAminoMsg): _79.QueryBalanceRequest;
                toAminoMsg(message: _79.QueryBalanceRequest): _79.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _79.QueryBalanceRequestProtoMsg): _79.QueryBalanceRequest;
                toProto(message: _79.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _79.QueryBalanceRequest): _79.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _79.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryBalanceResponse;
                fromPartial(object: Partial<_79.QueryBalanceResponse>): _79.QueryBalanceResponse;
                fromAmino(object: _79.QueryBalanceResponseAmino): _79.QueryBalanceResponse;
                toAmino(message: _79.QueryBalanceResponse): _79.QueryBalanceResponseAmino;
                fromAminoMsg(object: _79.QueryBalanceResponseAminoMsg): _79.QueryBalanceResponse;
                toAminoMsg(message: _79.QueryBalanceResponse): _79.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _79.QueryBalanceResponseProtoMsg): _79.QueryBalanceResponse;
                toProto(message: _79.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _79.QueryBalanceResponse): _79.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _79.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryAllBalancesRequest;
                fromPartial(object: Partial<_79.QueryAllBalancesRequest>): _79.QueryAllBalancesRequest;
                fromAmino(object: _79.QueryAllBalancesRequestAmino): _79.QueryAllBalancesRequest;
                toAmino(message: _79.QueryAllBalancesRequest): _79.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _79.QueryAllBalancesRequestAminoMsg): _79.QueryAllBalancesRequest;
                toAminoMsg(message: _79.QueryAllBalancesRequest): _79.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _79.QueryAllBalancesRequestProtoMsg): _79.QueryAllBalancesRequest;
                toProto(message: _79.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _79.QueryAllBalancesRequest): _79.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _79.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryAllBalancesResponse;
                fromPartial(object: Partial<_79.QueryAllBalancesResponse>): _79.QueryAllBalancesResponse;
                fromAmino(object: _79.QueryAllBalancesResponseAmino): _79.QueryAllBalancesResponse;
                toAmino(message: _79.QueryAllBalancesResponse): _79.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _79.QueryAllBalancesResponseAminoMsg): _79.QueryAllBalancesResponse;
                toAminoMsg(message: _79.QueryAllBalancesResponse): _79.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _79.QueryAllBalancesResponseProtoMsg): _79.QueryAllBalancesResponse;
                toProto(message: _79.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _79.QueryAllBalancesResponse): _79.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _79.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_79.QuerySpendableBalancesRequest>): _79.QuerySpendableBalancesRequest;
                fromAmino(object: _79.QuerySpendableBalancesRequestAmino): _79.QuerySpendableBalancesRequest;
                toAmino(message: _79.QuerySpendableBalancesRequest): _79.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _79.QuerySpendableBalancesRequestAminoMsg): _79.QuerySpendableBalancesRequest;
                toAminoMsg(message: _79.QuerySpendableBalancesRequest): _79.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _79.QuerySpendableBalancesRequestProtoMsg): _79.QuerySpendableBalancesRequest;
                toProto(message: _79.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _79.QuerySpendableBalancesRequest): _79.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _79.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_79.QuerySpendableBalancesResponse>): _79.QuerySpendableBalancesResponse;
                fromAmino(object: _79.QuerySpendableBalancesResponseAmino): _79.QuerySpendableBalancesResponse;
                toAmino(message: _79.QuerySpendableBalancesResponse): _79.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _79.QuerySpendableBalancesResponseAminoMsg): _79.QuerySpendableBalancesResponse;
                toAminoMsg(message: _79.QuerySpendableBalancesResponse): _79.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _79.QuerySpendableBalancesResponseProtoMsg): _79.QuerySpendableBalancesResponse;
                toProto(message: _79.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _79.QuerySpendableBalancesResponse): _79.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _79.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_79.QueryTotalSupplyRequest>): _79.QueryTotalSupplyRequest;
                fromAmino(object: _79.QueryTotalSupplyRequestAmino): _79.QueryTotalSupplyRequest;
                toAmino(message: _79.QueryTotalSupplyRequest): _79.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _79.QueryTotalSupplyRequestAminoMsg): _79.QueryTotalSupplyRequest;
                toAminoMsg(message: _79.QueryTotalSupplyRequest): _79.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _79.QueryTotalSupplyRequestProtoMsg): _79.QueryTotalSupplyRequest;
                toProto(message: _79.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _79.QueryTotalSupplyRequest): _79.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _79.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_79.QueryTotalSupplyResponse>): _79.QueryTotalSupplyResponse;
                fromAmino(object: _79.QueryTotalSupplyResponseAmino): _79.QueryTotalSupplyResponse;
                toAmino(message: _79.QueryTotalSupplyResponse): _79.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _79.QueryTotalSupplyResponseAminoMsg): _79.QueryTotalSupplyResponse;
                toAminoMsg(message: _79.QueryTotalSupplyResponse): _79.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _79.QueryTotalSupplyResponseProtoMsg): _79.QueryTotalSupplyResponse;
                toProto(message: _79.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _79.QueryTotalSupplyResponse): _79.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _79.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySupplyOfRequest;
                fromPartial(object: Partial<_79.QuerySupplyOfRequest>): _79.QuerySupplyOfRequest;
                fromAmino(object: _79.QuerySupplyOfRequestAmino): _79.QuerySupplyOfRequest;
                toAmino(message: _79.QuerySupplyOfRequest): _79.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _79.QuerySupplyOfRequestAminoMsg): _79.QuerySupplyOfRequest;
                toAminoMsg(message: _79.QuerySupplyOfRequest): _79.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _79.QuerySupplyOfRequestProtoMsg): _79.QuerySupplyOfRequest;
                toProto(message: _79.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _79.QuerySupplyOfRequest): _79.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _79.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySupplyOfResponse;
                fromPartial(object: Partial<_79.QuerySupplyOfResponse>): _79.QuerySupplyOfResponse;
                fromAmino(object: _79.QuerySupplyOfResponseAmino): _79.QuerySupplyOfResponse;
                toAmino(message: _79.QuerySupplyOfResponse): _79.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _79.QuerySupplyOfResponseAminoMsg): _79.QuerySupplyOfResponse;
                toAminoMsg(message: _79.QuerySupplyOfResponse): _79.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _79.QuerySupplyOfResponseProtoMsg): _79.QuerySupplyOfResponse;
                toProto(message: _79.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _79.QuerySupplyOfResponse): _79.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _79.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.QueryParamsRequest;
                fromPartial(_: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
                fromAmino(_: _79.QueryParamsRequestAmino): _79.QueryParamsRequest;
                toAmino(_: _79.QueryParamsRequest): _79.QueryParamsRequestAmino;
                fromAminoMsg(object: _79.QueryParamsRequestAminoMsg): _79.QueryParamsRequest;
                toAminoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryParamsRequestProtoMsg): _79.QueryParamsRequest;
                toProto(message: _79.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _79.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryParamsResponse;
                fromPartial(object: Partial<_79.QueryParamsResponse>): _79.QueryParamsResponse;
                fromAmino(object: _79.QueryParamsResponseAmino): _79.QueryParamsResponse;
                toAmino(message: _79.QueryParamsResponse): _79.QueryParamsResponseAmino;
                fromAminoMsg(object: _79.QueryParamsResponseAminoMsg): _79.QueryParamsResponse;
                toAminoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryParamsResponseProtoMsg): _79.QueryParamsResponse;
                toProto(message: _79.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _79.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_79.QueryDenomsMetadataRequest>): _79.QueryDenomsMetadataRequest;
                fromAmino(object: _79.QueryDenomsMetadataRequestAmino): _79.QueryDenomsMetadataRequest;
                toAmino(message: _79.QueryDenomsMetadataRequest): _79.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _79.QueryDenomsMetadataRequestAminoMsg): _79.QueryDenomsMetadataRequest;
                toAminoMsg(message: _79.QueryDenomsMetadataRequest): _79.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _79.QueryDenomsMetadataRequestProtoMsg): _79.QueryDenomsMetadataRequest;
                toProto(message: _79.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDenomsMetadataRequest): _79.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _79.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_79.QueryDenomsMetadataResponse>): _79.QueryDenomsMetadataResponse;
                fromAmino(object: _79.QueryDenomsMetadataResponseAmino): _79.QueryDenomsMetadataResponse;
                toAmino(message: _79.QueryDenomsMetadataResponse): _79.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _79.QueryDenomsMetadataResponseAminoMsg): _79.QueryDenomsMetadataResponse;
                toAminoMsg(message: _79.QueryDenomsMetadataResponse): _79.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _79.QueryDenomsMetadataResponseProtoMsg): _79.QueryDenomsMetadataResponse;
                toProto(message: _79.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDenomsMetadataResponse): _79.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _79.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_79.QueryDenomMetadataRequest>): _79.QueryDenomMetadataRequest;
                fromAmino(object: _79.QueryDenomMetadataRequestAmino): _79.QueryDenomMetadataRequest;
                toAmino(message: _79.QueryDenomMetadataRequest): _79.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _79.QueryDenomMetadataRequestAminoMsg): _79.QueryDenomMetadataRequest;
                toAminoMsg(message: _79.QueryDenomMetadataRequest): _79.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _79.QueryDenomMetadataRequestProtoMsg): _79.QueryDenomMetadataRequest;
                toProto(message: _79.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDenomMetadataRequest): _79.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _79.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_79.QueryDenomMetadataResponse>): _79.QueryDenomMetadataResponse;
                fromAmino(object: _79.QueryDenomMetadataResponseAmino): _79.QueryDenomMetadataResponse;
                toAmino(message: _79.QueryDenomMetadataResponse): _79.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _79.QueryDenomMetadataResponseAminoMsg): _79.QueryDenomMetadataResponse;
                toAminoMsg(message: _79.QueryDenomMetadataResponse): _79.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _79.QueryDenomMetadataResponseProtoMsg): _79.QueryDenomMetadataResponse;
                toProto(message: _79.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDenomMetadataResponse): _79.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _79.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_79.QueryDenomOwnersRequest>): _79.QueryDenomOwnersRequest;
                fromAmino(object: _79.QueryDenomOwnersRequestAmino): _79.QueryDenomOwnersRequest;
                toAmino(message: _79.QueryDenomOwnersRequest): _79.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _79.QueryDenomOwnersRequestAminoMsg): _79.QueryDenomOwnersRequest;
                toAminoMsg(message: _79.QueryDenomOwnersRequest): _79.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _79.QueryDenomOwnersRequestProtoMsg): _79.QueryDenomOwnersRequest;
                toProto(message: _79.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDenomOwnersRequest): _79.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _79.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.DenomOwner;
                fromPartial(object: Partial<_79.DenomOwner>): _79.DenomOwner;
                fromAmino(object: _79.DenomOwnerAmino): _79.DenomOwner;
                toAmino(message: _79.DenomOwner): _79.DenomOwnerAmino;
                fromAminoMsg(object: _79.DenomOwnerAminoMsg): _79.DenomOwner;
                toAminoMsg(message: _79.DenomOwner): _79.DenomOwnerAminoMsg;
                fromProtoMsg(message: _79.DenomOwnerProtoMsg): _79.DenomOwner;
                toProto(message: _79.DenomOwner): Uint8Array;
                toProtoMsg(message: _79.DenomOwner): _79.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _79.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_79.QueryDenomOwnersResponse>): _79.QueryDenomOwnersResponse;
                fromAmino(object: _79.QueryDenomOwnersResponseAmino): _79.QueryDenomOwnersResponse;
                toAmino(message: _79.QueryDenomOwnersResponse): _79.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _79.QueryDenomOwnersResponseAminoMsg): _79.QueryDenomOwnersResponse;
                toAminoMsg(message: _79.QueryDenomOwnersResponse): _79.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _79.QueryDenomOwnersResponseProtoMsg): _79.QueryDenomOwnersResponse;
                toProto(message: _79.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDenomOwnersResponse): _79.QueryDenomOwnersResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _78.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Balance;
                fromPartial(object: Partial<_78.Balance>): _78.Balance;
                fromAmino(object: _78.BalanceAmino): _78.Balance;
                toAmino(message: _78.Balance): _78.BalanceAmino;
                fromAminoMsg(object: _78.BalanceAminoMsg): _78.Balance;
                toAminoMsg(message: _78.Balance): _78.BalanceAminoMsg;
                fromProtoMsg(message: _78.BalanceProtoMsg): _78.Balance;
                toProto(message: _78.Balance): Uint8Array;
                toProtoMsg(message: _78.Balance): _78.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _77.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Params;
                fromPartial(object: Partial<_77.Params>): _77.Params;
                fromAmino(object: _77.ParamsAmino): _77.Params;
                toAmino(message: _77.Params): _77.ParamsAmino;
                fromAminoMsg(object: _77.ParamsAminoMsg): _77.Params;
                toAminoMsg(message: _77.Params): _77.ParamsAminoMsg;
                fromProtoMsg(message: _77.ParamsProtoMsg): _77.Params;
                toProto(message: _77.Params): Uint8Array;
                toProtoMsg(message: _77.Params): _77.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _77.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.SendEnabled;
                fromPartial(object: Partial<_77.SendEnabled>): _77.SendEnabled;
                fromAmino(object: _77.SendEnabledAmino): _77.SendEnabled;
                toAmino(message: _77.SendEnabled): _77.SendEnabledAmino;
                fromAminoMsg(object: _77.SendEnabledAminoMsg): _77.SendEnabled;
                toAminoMsg(message: _77.SendEnabled): _77.SendEnabledAminoMsg;
                fromProtoMsg(message: _77.SendEnabledProtoMsg): _77.SendEnabled;
                toProto(message: _77.SendEnabled): Uint8Array;
                toProtoMsg(message: _77.SendEnabled): _77.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _77.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Input;
                fromPartial(object: Partial<_77.Input>): _77.Input;
                fromAmino(object: _77.InputAmino): _77.Input;
                toAmino(message: _77.Input): _77.InputAmino;
                fromAminoMsg(object: _77.InputAminoMsg): _77.Input;
                toAminoMsg(message: _77.Input): _77.InputAminoMsg;
                fromProtoMsg(message: _77.InputProtoMsg): _77.Input;
                toProto(message: _77.Input): Uint8Array;
                toProtoMsg(message: _77.Input): _77.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _77.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Output;
                fromPartial(object: Partial<_77.Output>): _77.Output;
                fromAmino(object: _77.OutputAmino): _77.Output;
                toAmino(message: _77.Output): _77.OutputAmino;
                fromAminoMsg(object: _77.OutputAminoMsg): _77.Output;
                toAminoMsg(message: _77.Output): _77.OutputAminoMsg;
                fromProtoMsg(message: _77.OutputProtoMsg): _77.Output;
                toProto(message: _77.Output): Uint8Array;
                toProtoMsg(message: _77.Output): _77.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _77.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Supply;
                fromPartial(object: Partial<_77.Supply>): _77.Supply;
                fromAmino(object: _77.SupplyAmino): _77.Supply;
                toAmino(message: _77.Supply): _77.SupplyAmino;
                fromAminoMsg(object: _77.SupplyAminoMsg): _77.Supply;
                toAminoMsg(message: _77.Supply): _77.SupplyAminoMsg;
                fromProtoMsg(message: _77.SupplyProtoMsg): _77.Supply;
                toProto(message: _77.Supply): Uint8Array;
                toProtoMsg(message: _77.Supply): _77.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _77.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.DenomUnit;
                fromPartial(object: Partial<_77.DenomUnit>): _77.DenomUnit;
                fromAmino(object: _77.DenomUnitAmino): _77.DenomUnit;
                toAmino(message: _77.DenomUnit): _77.DenomUnitAmino;
                fromAminoMsg(object: _77.DenomUnitAminoMsg): _77.DenomUnit;
                toAminoMsg(message: _77.DenomUnit): _77.DenomUnitAminoMsg;
                fromProtoMsg(message: _77.DenomUnitProtoMsg): _77.DenomUnit;
                toProto(message: _77.DenomUnit): Uint8Array;
                toProtoMsg(message: _77.DenomUnit): _77.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _77.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Metadata;
                fromPartial(object: Partial<_77.Metadata>): _77.Metadata;
                fromAmino(object: _77.MetadataAmino): _77.Metadata;
                toAmino(message: _77.Metadata): _77.MetadataAmino;
                fromAminoMsg(object: _77.MetadataAminoMsg): _77.Metadata;
                toAminoMsg(message: _77.Metadata): _77.MetadataAminoMsg;
                fromProtoMsg(message: _77.MetadataProtoMsg): _77.Metadata;
                toProto(message: _77.Metadata): Uint8Array;
                toProtoMsg(message: _77.Metadata): _77.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _76.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.SendAuthorization;
                fromPartial(object: Partial<_76.SendAuthorization>): _76.SendAuthorization;
                fromAmino(object: _76.SendAuthorizationAmino): _76.SendAuthorization;
                toAmino(message: _76.SendAuthorization): _76.SendAuthorizationAmino;
                fromAminoMsg(object: _76.SendAuthorizationAminoMsg): _76.SendAuthorization;
                toAminoMsg(message: _76.SendAuthorization): _76.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _76.SendAuthorizationProtoMsg): _76.SendAuthorization;
                toProto(message: _76.SendAuthorization): Uint8Array;
                toProtoMsg(message: _76.SendAuthorization): _76.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _81.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.TxResponse;
                    fromPartial(object: Partial<_81.TxResponse>): _81.TxResponse;
                    fromAmino(object: _81.TxResponseAmino): _81.TxResponse;
                    toAmino(message: _81.TxResponse): _81.TxResponseAmino;
                    fromAminoMsg(object: _81.TxResponseAminoMsg): _81.TxResponse;
                    toAminoMsg(message: _81.TxResponse): _81.TxResponseAminoMsg;
                    fromProtoMsg(message: _81.TxResponseProtoMsg): _81.TxResponse;
                    toProto(message: _81.TxResponse): Uint8Array;
                    toProtoMsg(message: _81.TxResponse): _81.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _81.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.ABCIMessageLog;
                    fromPartial(object: Partial<_81.ABCIMessageLog>): _81.ABCIMessageLog;
                    fromAmino(object: _81.ABCIMessageLogAmino): _81.ABCIMessageLog;
                    toAmino(message: _81.ABCIMessageLog): _81.ABCIMessageLogAmino;
                    fromAminoMsg(object: _81.ABCIMessageLogAminoMsg): _81.ABCIMessageLog;
                    toAminoMsg(message: _81.ABCIMessageLog): _81.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _81.ABCIMessageLogProtoMsg): _81.ABCIMessageLog;
                    toProto(message: _81.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _81.ABCIMessageLog): _81.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _81.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.StringEvent;
                    fromPartial(object: Partial<_81.StringEvent>): _81.StringEvent;
                    fromAmino(object: _81.StringEventAmino): _81.StringEvent;
                    toAmino(message: _81.StringEvent): _81.StringEventAmino;
                    fromAminoMsg(object: _81.StringEventAminoMsg): _81.StringEvent;
                    toAminoMsg(message: _81.StringEvent): _81.StringEventAminoMsg;
                    fromProtoMsg(message: _81.StringEventProtoMsg): _81.StringEvent;
                    toProto(message: _81.StringEvent): Uint8Array;
                    toProtoMsg(message: _81.StringEvent): _81.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _81.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.Attribute;
                    fromPartial(object: Partial<_81.Attribute>): _81.Attribute;
                    fromAmino(object: _81.AttributeAmino): _81.Attribute;
                    toAmino(message: _81.Attribute): _81.AttributeAmino;
                    fromAminoMsg(object: _81.AttributeAminoMsg): _81.Attribute;
                    toAminoMsg(message: _81.Attribute): _81.AttributeAminoMsg;
                    fromProtoMsg(message: _81.AttributeProtoMsg): _81.Attribute;
                    toProto(message: _81.Attribute): Uint8Array;
                    toProtoMsg(message: _81.Attribute): _81.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _81.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GasInfo;
                    fromPartial(object: Partial<_81.GasInfo>): _81.GasInfo;
                    fromAmino(object: _81.GasInfoAmino): _81.GasInfo;
                    toAmino(message: _81.GasInfo): _81.GasInfoAmino;
                    fromAminoMsg(object: _81.GasInfoAminoMsg): _81.GasInfo;
                    toAminoMsg(message: _81.GasInfo): _81.GasInfoAminoMsg;
                    fromProtoMsg(message: _81.GasInfoProtoMsg): _81.GasInfo;
                    toProto(message: _81.GasInfo): Uint8Array;
                    toProtoMsg(message: _81.GasInfo): _81.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _81.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.Result;
                    fromPartial(object: Partial<_81.Result>): _81.Result;
                    fromAmino(object: _81.ResultAmino): _81.Result;
                    toAmino(message: _81.Result): _81.ResultAmino;
                    fromAminoMsg(object: _81.ResultAminoMsg): _81.Result;
                    toAminoMsg(message: _81.Result): _81.ResultAminoMsg;
                    fromProtoMsg(message: _81.ResultProtoMsg): _81.Result;
                    toProto(message: _81.Result): Uint8Array;
                    toProtoMsg(message: _81.Result): _81.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _81.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.SimulationResponse;
                    fromPartial(object: Partial<_81.SimulationResponse>): _81.SimulationResponse;
                    fromAmino(object: _81.SimulationResponseAmino): _81.SimulationResponse;
                    toAmino(message: _81.SimulationResponse): _81.SimulationResponseAmino;
                    fromAminoMsg(object: _81.SimulationResponseAminoMsg): _81.SimulationResponse;
                    toAminoMsg(message: _81.SimulationResponse): _81.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _81.SimulationResponseProtoMsg): _81.SimulationResponse;
                    toProto(message: _81.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _81.SimulationResponse): _81.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _81.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.MsgData;
                    fromPartial(object: Partial<_81.MsgData>): _81.MsgData;
                    fromAmino(object: _81.MsgDataAmino): _81.MsgData;
                    toAmino(message: _81.MsgData): _81.MsgDataAmino;
                    fromAminoMsg(object: _81.MsgDataAminoMsg): _81.MsgData;
                    toAminoMsg(message: _81.MsgData): _81.MsgDataAminoMsg;
                    fromProtoMsg(message: _81.MsgDataProtoMsg): _81.MsgData;
                    toProto(message: _81.MsgData): Uint8Array;
                    toProtoMsg(message: _81.MsgData): _81.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _81.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.TxMsgData;
                    fromPartial(object: Partial<_81.TxMsgData>): _81.TxMsgData;
                    fromAmino(object: _81.TxMsgDataAmino): _81.TxMsgData;
                    toAmino(message: _81.TxMsgData): _81.TxMsgDataAmino;
                    fromAminoMsg(object: _81.TxMsgDataAminoMsg): _81.TxMsgData;
                    toAminoMsg(message: _81.TxMsgData): _81.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _81.TxMsgDataProtoMsg): _81.TxMsgData;
                    toProto(message: _81.TxMsgData): Uint8Array;
                    toProtoMsg(message: _81.TxMsgData): _81.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _81.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.SearchTxsResult;
                    fromPartial(object: Partial<_81.SearchTxsResult>): _81.SearchTxsResult;
                    fromAmino(object: _81.SearchTxsResultAmino): _81.SearchTxsResult;
                    toAmino(message: _81.SearchTxsResult): _81.SearchTxsResultAmino;
                    fromAminoMsg(object: _81.SearchTxsResultAminoMsg): _81.SearchTxsResult;
                    toAminoMsg(message: _81.SearchTxsResult): _81.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _81.SearchTxsResultProtoMsg): _81.SearchTxsResult;
                    toProto(message: _81.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _81.SearchTxsResult): _81.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _82.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.Pairs;
                    fromPartial(object: Partial<_82.Pairs>): _82.Pairs;
                    fromAmino(object: _82.PairsAmino): _82.Pairs;
                    toAmino(message: _82.Pairs): _82.PairsAmino;
                    fromAminoMsg(object: _82.PairsAminoMsg): _82.Pairs;
                    toAminoMsg(message: _82.Pairs): _82.PairsAminoMsg;
                    fromProtoMsg(message: _82.PairsProtoMsg): _82.Pairs;
                    toProto(message: _82.Pairs): Uint8Array;
                    toProtoMsg(message: _82.Pairs): _82.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _82.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.Pair;
                    fromPartial(object: Partial<_82.Pair>): _82.Pair;
                    fromAmino(object: _82.PairAmino): _82.Pair;
                    toAmino(message: _82.Pair): _82.PairAmino;
                    fromAminoMsg(object: _82.PairAminoMsg): _82.Pair;
                    toAminoMsg(message: _82.Pair): _82.PairAminoMsg;
                    fromProtoMsg(message: _82.PairProtoMsg): _82.Pair;
                    toProto(message: _82.Pair): Uint8Array;
                    toProtoMsg(message: _82.Pair): _82.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _304.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _83.ConfigRequest): Promise<_83.ConfigResponse>;
                };
                LCDQueryClient: typeof _285.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _83.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _83.ConfigRequest;
                    fromPartial(_: Partial<_83.ConfigRequest>): _83.ConfigRequest;
                    fromAmino(_: _83.ConfigRequestAmino): _83.ConfigRequest;
                    toAmino(_: _83.ConfigRequest): _83.ConfigRequestAmino;
                    fromAminoMsg(object: _83.ConfigRequestAminoMsg): _83.ConfigRequest;
                    toAminoMsg(message: _83.ConfigRequest): _83.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _83.ConfigRequestProtoMsg): _83.ConfigRequest;
                    toProto(message: _83.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _83.ConfigRequest): _83.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _83.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _83.ConfigResponse;
                    fromPartial(object: Partial<_83.ConfigResponse>): _83.ConfigResponse;
                    fromAmino(object: _83.ConfigResponseAmino): _83.ConfigResponse;
                    toAmino(message: _83.ConfigResponse): _83.ConfigResponseAmino;
                    fromAminoMsg(object: _83.ConfigResponseAminoMsg): _83.ConfigResponse;
                    toAminoMsg(message: _83.ConfigResponse): _83.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _83.ConfigResponseProtoMsg): _83.ConfigResponse;
                    toProto(message: _83.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _83.ConfigResponse): _83.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _84.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.PageRequest;
                    fromPartial(object: Partial<_84.PageRequest>): _84.PageRequest;
                    fromAmino(object: _84.PageRequestAmino): _84.PageRequest;
                    toAmino(message: _84.PageRequest): _84.PageRequestAmino;
                    fromAminoMsg(object: _84.PageRequestAminoMsg): _84.PageRequest;
                    toAminoMsg(message: _84.PageRequest): _84.PageRequestAminoMsg;
                    fromProtoMsg(message: _84.PageRequestProtoMsg): _84.PageRequest;
                    toProto(message: _84.PageRequest): Uint8Array;
                    toProtoMsg(message: _84.PageRequest): _84.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _84.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.PageResponse;
                    fromPartial(object: Partial<_84.PageResponse>): _84.PageResponse;
                    fromAmino(object: _84.PageResponseAmino): _84.PageResponse;
                    toAmino(message: _84.PageResponse): _84.PageResponseAmino;
                    fromAminoMsg(object: _84.PageResponseAminoMsg): _84.PageResponse;
                    toAminoMsg(message: _84.PageResponse): _84.PageResponseAminoMsg;
                    fromProtoMsg(message: _84.PageResponseProtoMsg): _84.PageResponse;
                    toProto(message: _84.PageResponse): Uint8Array;
                    toProtoMsg(message: _84.PageResponse): _84.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _85.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _85.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_85.ListAllInterfacesRequest>): _85.ListAllInterfacesRequest;
                    fromAmino(_: _85.ListAllInterfacesRequestAmino): _85.ListAllInterfacesRequest;
                    toAmino(_: _85.ListAllInterfacesRequest): _85.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _85.ListAllInterfacesRequestAminoMsg): _85.ListAllInterfacesRequest;
                    toAminoMsg(message: _85.ListAllInterfacesRequest): _85.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _85.ListAllInterfacesRequestProtoMsg): _85.ListAllInterfacesRequest;
                    toProto(message: _85.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _85.ListAllInterfacesRequest): _85.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _85.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_85.ListAllInterfacesResponse>): _85.ListAllInterfacesResponse;
                    fromAmino(object: _85.ListAllInterfacesResponseAmino): _85.ListAllInterfacesResponse;
                    toAmino(message: _85.ListAllInterfacesResponse): _85.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _85.ListAllInterfacesResponseAminoMsg): _85.ListAllInterfacesResponse;
                    toAminoMsg(message: _85.ListAllInterfacesResponse): _85.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _85.ListAllInterfacesResponseProtoMsg): _85.ListAllInterfacesResponse;
                    toProto(message: _85.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _85.ListAllInterfacesResponse): _85.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _85.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.ListImplementationsRequest;
                    fromPartial(object: Partial<_85.ListImplementationsRequest>): _85.ListImplementationsRequest;
                    fromAmino(object: _85.ListImplementationsRequestAmino): _85.ListImplementationsRequest;
                    toAmino(message: _85.ListImplementationsRequest): _85.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _85.ListImplementationsRequestAminoMsg): _85.ListImplementationsRequest;
                    toAminoMsg(message: _85.ListImplementationsRequest): _85.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _85.ListImplementationsRequestProtoMsg): _85.ListImplementationsRequest;
                    toProto(message: _85.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _85.ListImplementationsRequest): _85.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _85.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.ListImplementationsResponse;
                    fromPartial(object: Partial<_85.ListImplementationsResponse>): _85.ListImplementationsResponse;
                    fromAmino(object: _85.ListImplementationsResponseAmino): _85.ListImplementationsResponse;
                    toAmino(message: _85.ListImplementationsResponse): _85.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _85.ListImplementationsResponseAminoMsg): _85.ListImplementationsResponse;
                    toAminoMsg(message: _85.ListImplementationsResponse): _85.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _85.ListImplementationsResponseProtoMsg): _85.ListImplementationsResponse;
                    toProto(message: _85.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _85.ListImplementationsResponse): _85.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _86.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.AppDescriptor;
                    fromPartial(object: Partial<_86.AppDescriptor>): _86.AppDescriptor;
                    fromAmino(object: _86.AppDescriptorAmino): _86.AppDescriptor;
                    toAmino(message: _86.AppDescriptor): _86.AppDescriptorAmino;
                    fromAminoMsg(object: _86.AppDescriptorAminoMsg): _86.AppDescriptor;
                    toAminoMsg(message: _86.AppDescriptor): _86.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _86.AppDescriptorProtoMsg): _86.AppDescriptor;
                    toProto(message: _86.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _86.AppDescriptor): _86.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _86.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.TxDescriptor;
                    fromPartial(object: Partial<_86.TxDescriptor>): _86.TxDescriptor;
                    fromAmino(object: _86.TxDescriptorAmino): _86.TxDescriptor;
                    toAmino(message: _86.TxDescriptor): _86.TxDescriptorAmino;
                    fromAminoMsg(object: _86.TxDescriptorAminoMsg): _86.TxDescriptor;
                    toAminoMsg(message: _86.TxDescriptor): _86.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _86.TxDescriptorProtoMsg): _86.TxDescriptor;
                    toProto(message: _86.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _86.TxDescriptor): _86.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _86.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.AuthnDescriptor;
                    fromPartial(object: Partial<_86.AuthnDescriptor>): _86.AuthnDescriptor;
                    fromAmino(object: _86.AuthnDescriptorAmino): _86.AuthnDescriptor;
                    toAmino(message: _86.AuthnDescriptor): _86.AuthnDescriptorAmino;
                    fromAminoMsg(object: _86.AuthnDescriptorAminoMsg): _86.AuthnDescriptor;
                    toAminoMsg(message: _86.AuthnDescriptor): _86.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _86.AuthnDescriptorProtoMsg): _86.AuthnDescriptor;
                    toProto(message: _86.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _86.AuthnDescriptor): _86.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _86.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.SigningModeDescriptor;
                    fromPartial(object: Partial<_86.SigningModeDescriptor>): _86.SigningModeDescriptor;
                    fromAmino(object: _86.SigningModeDescriptorAmino): _86.SigningModeDescriptor;
                    toAmino(message: _86.SigningModeDescriptor): _86.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _86.SigningModeDescriptorAminoMsg): _86.SigningModeDescriptor;
                    toAminoMsg(message: _86.SigningModeDescriptor): _86.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _86.SigningModeDescriptorProtoMsg): _86.SigningModeDescriptor;
                    toProto(message: _86.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _86.SigningModeDescriptor): _86.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _86.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.ChainDescriptor;
                    fromPartial(object: Partial<_86.ChainDescriptor>): _86.ChainDescriptor;
                    fromAmino(object: _86.ChainDescriptorAmino): _86.ChainDescriptor;
                    toAmino(message: _86.ChainDescriptor): _86.ChainDescriptorAmino;
                    fromAminoMsg(object: _86.ChainDescriptorAminoMsg): _86.ChainDescriptor;
                    toAminoMsg(message: _86.ChainDescriptor): _86.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _86.ChainDescriptorProtoMsg): _86.ChainDescriptor;
                    toProto(message: _86.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _86.ChainDescriptor): _86.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _86.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.CodecDescriptor;
                    fromPartial(object: Partial<_86.CodecDescriptor>): _86.CodecDescriptor;
                    fromAmino(object: _86.CodecDescriptorAmino): _86.CodecDescriptor;
                    toAmino(message: _86.CodecDescriptor): _86.CodecDescriptorAmino;
                    fromAminoMsg(object: _86.CodecDescriptorAminoMsg): _86.CodecDescriptor;
                    toAminoMsg(message: _86.CodecDescriptor): _86.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _86.CodecDescriptorProtoMsg): _86.CodecDescriptor;
                    toProto(message: _86.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _86.CodecDescriptor): _86.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _86.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.InterfaceDescriptor;
                    fromPartial(object: Partial<_86.InterfaceDescriptor>): _86.InterfaceDescriptor;
                    fromAmino(object: _86.InterfaceDescriptorAmino): _86.InterfaceDescriptor;
                    toAmino(message: _86.InterfaceDescriptor): _86.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _86.InterfaceDescriptorAminoMsg): _86.InterfaceDescriptor;
                    toAminoMsg(message: _86.InterfaceDescriptor): _86.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _86.InterfaceDescriptorProtoMsg): _86.InterfaceDescriptor;
                    toProto(message: _86.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _86.InterfaceDescriptor): _86.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _86.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_86.InterfaceImplementerDescriptor>): _86.InterfaceImplementerDescriptor;
                    fromAmino(object: _86.InterfaceImplementerDescriptorAmino): _86.InterfaceImplementerDescriptor;
                    toAmino(message: _86.InterfaceImplementerDescriptor): _86.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _86.InterfaceImplementerDescriptorAminoMsg): _86.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _86.InterfaceImplementerDescriptor): _86.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _86.InterfaceImplementerDescriptorProtoMsg): _86.InterfaceImplementerDescriptor;
                    toProto(message: _86.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _86.InterfaceImplementerDescriptor): _86.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _86.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_86.InterfaceAcceptingMessageDescriptor>): _86.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _86.InterfaceAcceptingMessageDescriptorAmino): _86.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _86.InterfaceAcceptingMessageDescriptor): _86.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _86.InterfaceAcceptingMessageDescriptorAminoMsg): _86.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _86.InterfaceAcceptingMessageDescriptor): _86.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _86.InterfaceAcceptingMessageDescriptorProtoMsg): _86.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _86.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _86.InterfaceAcceptingMessageDescriptor): _86.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _86.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.ConfigurationDescriptor;
                    fromPartial(object: Partial<_86.ConfigurationDescriptor>): _86.ConfigurationDescriptor;
                    fromAmino(object: _86.ConfigurationDescriptorAmino): _86.ConfigurationDescriptor;
                    toAmino(message: _86.ConfigurationDescriptor): _86.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _86.ConfigurationDescriptorAminoMsg): _86.ConfigurationDescriptor;
                    toAminoMsg(message: _86.ConfigurationDescriptor): _86.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _86.ConfigurationDescriptorProtoMsg): _86.ConfigurationDescriptor;
                    toProto(message: _86.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _86.ConfigurationDescriptor): _86.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _86.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.MsgDescriptor;
                    fromPartial(object: Partial<_86.MsgDescriptor>): _86.MsgDescriptor;
                    fromAmino(object: _86.MsgDescriptorAmino): _86.MsgDescriptor;
                    toAmino(message: _86.MsgDescriptor): _86.MsgDescriptorAmino;
                    fromAminoMsg(object: _86.MsgDescriptorAminoMsg): _86.MsgDescriptor;
                    toAminoMsg(message: _86.MsgDescriptor): _86.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _86.MsgDescriptorProtoMsg): _86.MsgDescriptor;
                    toProto(message: _86.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _86.MsgDescriptor): _86.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _86.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _86.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_86.GetAuthnDescriptorRequest>): _86.GetAuthnDescriptorRequest;
                    fromAmino(_: _86.GetAuthnDescriptorRequestAmino): _86.GetAuthnDescriptorRequest;
                    toAmino(_: _86.GetAuthnDescriptorRequest): _86.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _86.GetAuthnDescriptorRequestAminoMsg): _86.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _86.GetAuthnDescriptorRequest): _86.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _86.GetAuthnDescriptorRequestProtoMsg): _86.GetAuthnDescriptorRequest;
                    toProto(message: _86.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _86.GetAuthnDescriptorRequest): _86.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _86.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_86.GetAuthnDescriptorResponse>): _86.GetAuthnDescriptorResponse;
                    fromAmino(object: _86.GetAuthnDescriptorResponseAmino): _86.GetAuthnDescriptorResponse;
                    toAmino(message: _86.GetAuthnDescriptorResponse): _86.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _86.GetAuthnDescriptorResponseAminoMsg): _86.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _86.GetAuthnDescriptorResponse): _86.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _86.GetAuthnDescriptorResponseProtoMsg): _86.GetAuthnDescriptorResponse;
                    toProto(message: _86.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _86.GetAuthnDescriptorResponse): _86.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _86.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _86.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_86.GetChainDescriptorRequest>): _86.GetChainDescriptorRequest;
                    fromAmino(_: _86.GetChainDescriptorRequestAmino): _86.GetChainDescriptorRequest;
                    toAmino(_: _86.GetChainDescriptorRequest): _86.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _86.GetChainDescriptorRequestAminoMsg): _86.GetChainDescriptorRequest;
                    toAminoMsg(message: _86.GetChainDescriptorRequest): _86.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _86.GetChainDescriptorRequestProtoMsg): _86.GetChainDescriptorRequest;
                    toProto(message: _86.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _86.GetChainDescriptorRequest): _86.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _86.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_86.GetChainDescriptorResponse>): _86.GetChainDescriptorResponse;
                    fromAmino(object: _86.GetChainDescriptorResponseAmino): _86.GetChainDescriptorResponse;
                    toAmino(message: _86.GetChainDescriptorResponse): _86.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _86.GetChainDescriptorResponseAminoMsg): _86.GetChainDescriptorResponse;
                    toAminoMsg(message: _86.GetChainDescriptorResponse): _86.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _86.GetChainDescriptorResponseProtoMsg): _86.GetChainDescriptorResponse;
                    toProto(message: _86.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _86.GetChainDescriptorResponse): _86.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _86.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _86.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_86.GetCodecDescriptorRequest>): _86.GetCodecDescriptorRequest;
                    fromAmino(_: _86.GetCodecDescriptorRequestAmino): _86.GetCodecDescriptorRequest;
                    toAmino(_: _86.GetCodecDescriptorRequest): _86.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _86.GetCodecDescriptorRequestAminoMsg): _86.GetCodecDescriptorRequest;
                    toAminoMsg(message: _86.GetCodecDescriptorRequest): _86.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _86.GetCodecDescriptorRequestProtoMsg): _86.GetCodecDescriptorRequest;
                    toProto(message: _86.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _86.GetCodecDescriptorRequest): _86.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _86.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_86.GetCodecDescriptorResponse>): _86.GetCodecDescriptorResponse;
                    fromAmino(object: _86.GetCodecDescriptorResponseAmino): _86.GetCodecDescriptorResponse;
                    toAmino(message: _86.GetCodecDescriptorResponse): _86.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _86.GetCodecDescriptorResponseAminoMsg): _86.GetCodecDescriptorResponse;
                    toAminoMsg(message: _86.GetCodecDescriptorResponse): _86.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _86.GetCodecDescriptorResponseProtoMsg): _86.GetCodecDescriptorResponse;
                    toProto(message: _86.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _86.GetCodecDescriptorResponse): _86.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _86.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _86.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_86.GetConfigurationDescriptorRequest>): _86.GetConfigurationDescriptorRequest;
                    fromAmino(_: _86.GetConfigurationDescriptorRequestAmino): _86.GetConfigurationDescriptorRequest;
                    toAmino(_: _86.GetConfigurationDescriptorRequest): _86.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _86.GetConfigurationDescriptorRequestAminoMsg): _86.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _86.GetConfigurationDescriptorRequest): _86.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _86.GetConfigurationDescriptorRequestProtoMsg): _86.GetConfigurationDescriptorRequest;
                    toProto(message: _86.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _86.GetConfigurationDescriptorRequest): _86.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _86.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_86.GetConfigurationDescriptorResponse>): _86.GetConfigurationDescriptorResponse;
                    fromAmino(object: _86.GetConfigurationDescriptorResponseAmino): _86.GetConfigurationDescriptorResponse;
                    toAmino(message: _86.GetConfigurationDescriptorResponse): _86.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _86.GetConfigurationDescriptorResponseAminoMsg): _86.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _86.GetConfigurationDescriptorResponse): _86.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _86.GetConfigurationDescriptorResponseProtoMsg): _86.GetConfigurationDescriptorResponse;
                    toProto(message: _86.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _86.GetConfigurationDescriptorResponse): _86.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _86.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _86.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_86.GetQueryServicesDescriptorRequest>): _86.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _86.GetQueryServicesDescriptorRequestAmino): _86.GetQueryServicesDescriptorRequest;
                    toAmino(_: _86.GetQueryServicesDescriptorRequest): _86.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _86.GetQueryServicesDescriptorRequestAminoMsg): _86.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _86.GetQueryServicesDescriptorRequest): _86.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _86.GetQueryServicesDescriptorRequestProtoMsg): _86.GetQueryServicesDescriptorRequest;
                    toProto(message: _86.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _86.GetQueryServicesDescriptorRequest): _86.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _86.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_86.GetQueryServicesDescriptorResponse>): _86.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _86.GetQueryServicesDescriptorResponseAmino): _86.GetQueryServicesDescriptorResponse;
                    toAmino(message: _86.GetQueryServicesDescriptorResponse): _86.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _86.GetQueryServicesDescriptorResponseAminoMsg): _86.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _86.GetQueryServicesDescriptorResponse): _86.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _86.GetQueryServicesDescriptorResponseProtoMsg): _86.GetQueryServicesDescriptorResponse;
                    toProto(message: _86.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _86.GetQueryServicesDescriptorResponse): _86.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _86.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _86.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_86.GetTxDescriptorRequest>): _86.GetTxDescriptorRequest;
                    fromAmino(_: _86.GetTxDescriptorRequestAmino): _86.GetTxDescriptorRequest;
                    toAmino(_: _86.GetTxDescriptorRequest): _86.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _86.GetTxDescriptorRequestAminoMsg): _86.GetTxDescriptorRequest;
                    toAminoMsg(message: _86.GetTxDescriptorRequest): _86.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _86.GetTxDescriptorRequestProtoMsg): _86.GetTxDescriptorRequest;
                    toProto(message: _86.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _86.GetTxDescriptorRequest): _86.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _86.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_86.GetTxDescriptorResponse>): _86.GetTxDescriptorResponse;
                    fromAmino(object: _86.GetTxDescriptorResponseAmino): _86.GetTxDescriptorResponse;
                    toAmino(message: _86.GetTxDescriptorResponse): _86.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _86.GetTxDescriptorResponseAminoMsg): _86.GetTxDescriptorResponse;
                    toAminoMsg(message: _86.GetTxDescriptorResponse): _86.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _86.GetTxDescriptorResponseProtoMsg): _86.GetTxDescriptorResponse;
                    toProto(message: _86.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _86.GetTxDescriptorResponse): _86.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _86.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.QueryServicesDescriptor;
                    fromPartial(object: Partial<_86.QueryServicesDescriptor>): _86.QueryServicesDescriptor;
                    fromAmino(object: _86.QueryServicesDescriptorAmino): _86.QueryServicesDescriptor;
                    toAmino(message: _86.QueryServicesDescriptor): _86.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _86.QueryServicesDescriptorAminoMsg): _86.QueryServicesDescriptor;
                    toAminoMsg(message: _86.QueryServicesDescriptor): _86.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _86.QueryServicesDescriptorProtoMsg): _86.QueryServicesDescriptor;
                    toProto(message: _86.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _86.QueryServicesDescriptor): _86.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _86.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.QueryServiceDescriptor;
                    fromPartial(object: Partial<_86.QueryServiceDescriptor>): _86.QueryServiceDescriptor;
                    fromAmino(object: _86.QueryServiceDescriptorAmino): _86.QueryServiceDescriptor;
                    toAmino(message: _86.QueryServiceDescriptor): _86.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _86.QueryServiceDescriptorAminoMsg): _86.QueryServiceDescriptor;
                    toAminoMsg(message: _86.QueryServiceDescriptor): _86.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _86.QueryServiceDescriptorProtoMsg): _86.QueryServiceDescriptor;
                    toProto(message: _86.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _86.QueryServiceDescriptor): _86.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _86.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.QueryMethodDescriptor;
                    fromPartial(object: Partial<_86.QueryMethodDescriptor>): _86.QueryMethodDescriptor;
                    fromAmino(object: _86.QueryMethodDescriptorAmino): _86.QueryMethodDescriptor;
                    toAmino(message: _86.QueryMethodDescriptor): _86.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _86.QueryMethodDescriptorAminoMsg): _86.QueryMethodDescriptor;
                    toAminoMsg(message: _86.QueryMethodDescriptor): _86.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _86.QueryMethodDescriptorProtoMsg): _86.QueryMethodDescriptor;
                    toProto(message: _86.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _86.QueryMethodDescriptor): _86.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _87.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.Snapshot;
                    fromPartial(object: Partial<_87.Snapshot>): _87.Snapshot;
                    fromAmino(object: _87.SnapshotAmino): _87.Snapshot;
                    toAmino(message: _87.Snapshot): _87.SnapshotAmino;
                    fromAminoMsg(object: _87.SnapshotAminoMsg): _87.Snapshot;
                    toAminoMsg(message: _87.Snapshot): _87.SnapshotAminoMsg;
                    fromProtoMsg(message: _87.SnapshotProtoMsg): _87.Snapshot;
                    toProto(message: _87.Snapshot): Uint8Array;
                    toProtoMsg(message: _87.Snapshot): _87.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _87.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.Metadata;
                    fromPartial(object: Partial<_87.Metadata>): _87.Metadata;
                    fromAmino(object: _87.MetadataAmino): _87.Metadata;
                    toAmino(message: _87.Metadata): _87.MetadataAmino;
                    fromAminoMsg(object: _87.MetadataAminoMsg): _87.Metadata;
                    toAminoMsg(message: _87.Metadata): _87.MetadataAminoMsg;
                    fromProtoMsg(message: _87.MetadataProtoMsg): _87.Metadata;
                    toProto(message: _87.Metadata): Uint8Array;
                    toProtoMsg(message: _87.Metadata): _87.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _87.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SnapshotItem;
                    fromPartial(object: Partial<_87.SnapshotItem>): _87.SnapshotItem;
                    fromAmino(object: _87.SnapshotItemAmino): _87.SnapshotItem;
                    toAmino(message: _87.SnapshotItem): _87.SnapshotItemAmino;
                    fromAminoMsg(object: _87.SnapshotItemAminoMsg): _87.SnapshotItem;
                    toAminoMsg(message: _87.SnapshotItem): _87.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _87.SnapshotItemProtoMsg): _87.SnapshotItem;
                    toProto(message: _87.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _87.SnapshotItem): _87.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _87.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SnapshotStoreItem;
                    fromPartial(object: Partial<_87.SnapshotStoreItem>): _87.SnapshotStoreItem;
                    fromAmino(object: _87.SnapshotStoreItemAmino): _87.SnapshotStoreItem;
                    toAmino(message: _87.SnapshotStoreItem): _87.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _87.SnapshotStoreItemAminoMsg): _87.SnapshotStoreItem;
                    toAminoMsg(message: _87.SnapshotStoreItem): _87.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _87.SnapshotStoreItemProtoMsg): _87.SnapshotStoreItem;
                    toProto(message: _87.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _87.SnapshotStoreItem): _87.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _87.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SnapshotIAVLItem;
                    fromPartial(object: Partial<_87.SnapshotIAVLItem>): _87.SnapshotIAVLItem;
                    fromAmino(object: _87.SnapshotIAVLItemAmino): _87.SnapshotIAVLItem;
                    toAmino(message: _87.SnapshotIAVLItem): _87.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _87.SnapshotIAVLItemAminoMsg): _87.SnapshotIAVLItem;
                    toAminoMsg(message: _87.SnapshotIAVLItem): _87.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _87.SnapshotIAVLItemProtoMsg): _87.SnapshotIAVLItem;
                    toProto(message: _87.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _87.SnapshotIAVLItem): _87.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _87.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_87.SnapshotExtensionMeta>): _87.SnapshotExtensionMeta;
                    fromAmino(object: _87.SnapshotExtensionMetaAmino): _87.SnapshotExtensionMeta;
                    toAmino(message: _87.SnapshotExtensionMeta): _87.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _87.SnapshotExtensionMetaAminoMsg): _87.SnapshotExtensionMeta;
                    toAminoMsg(message: _87.SnapshotExtensionMeta): _87.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _87.SnapshotExtensionMetaProtoMsg): _87.SnapshotExtensionMeta;
                    toProto(message: _87.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _87.SnapshotExtensionMeta): _87.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _87.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_87.SnapshotExtensionPayload>): _87.SnapshotExtensionPayload;
                    fromAmino(object: _87.SnapshotExtensionPayloadAmino): _87.SnapshotExtensionPayload;
                    toAmino(message: _87.SnapshotExtensionPayload): _87.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _87.SnapshotExtensionPayloadAminoMsg): _87.SnapshotExtensionPayload;
                    toAminoMsg(message: _87.SnapshotExtensionPayload): _87.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _87.SnapshotExtensionPayloadProtoMsg): _87.SnapshotExtensionPayload;
                    toProto(message: _87.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _87.SnapshotExtensionPayload): _87.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _87.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SnapshotKVItem;
                    fromPartial(object: Partial<_87.SnapshotKVItem>): _87.SnapshotKVItem;
                    fromAmino(object: _87.SnapshotKVItemAmino): _87.SnapshotKVItem;
                    toAmino(message: _87.SnapshotKVItem): _87.SnapshotKVItemAmino;
                    fromAminoMsg(object: _87.SnapshotKVItemAminoMsg): _87.SnapshotKVItem;
                    toAminoMsg(message: _87.SnapshotKVItem): _87.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _87.SnapshotKVItemProtoMsg): _87.SnapshotKVItem;
                    toProto(message: _87.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _87.SnapshotKVItem): _87.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _87.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SnapshotSchema;
                    fromPartial(object: Partial<_87.SnapshotSchema>): _87.SnapshotSchema;
                    fromAmino(object: _87.SnapshotSchemaAmino): _87.SnapshotSchema;
                    toAmino(message: _87.SnapshotSchema): _87.SnapshotSchemaAmino;
                    fromAminoMsg(object: _87.SnapshotSchemaAminoMsg): _87.SnapshotSchema;
                    toAminoMsg(message: _87.SnapshotSchema): _87.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _87.SnapshotSchemaProtoMsg): _87.SnapshotSchema;
                    toProto(message: _87.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _87.SnapshotSchema): _87.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _89.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.StoreKVPair;
                    fromPartial(object: Partial<_89.StoreKVPair>): _89.StoreKVPair;
                    fromAmino(object: _89.StoreKVPairAmino): _89.StoreKVPair;
                    toAmino(message: _89.StoreKVPair): _89.StoreKVPairAmino;
                    fromAminoMsg(object: _89.StoreKVPairAminoMsg): _89.StoreKVPair;
                    toAminoMsg(message: _89.StoreKVPair): _89.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _89.StoreKVPairProtoMsg): _89.StoreKVPair;
                    toProto(message: _89.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _89.StoreKVPair): _89.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _89.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.BlockMetadata;
                    fromPartial(object: Partial<_89.BlockMetadata>): _89.BlockMetadata;
                    fromAmino(object: _89.BlockMetadataAmino): _89.BlockMetadata;
                    toAmino(message: _89.BlockMetadata): _89.BlockMetadataAmino;
                    fromAminoMsg(object: _89.BlockMetadataAminoMsg): _89.BlockMetadata;
                    toAminoMsg(message: _89.BlockMetadata): _89.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _89.BlockMetadataProtoMsg): _89.BlockMetadata;
                    toProto(message: _89.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _89.BlockMetadata): _89.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _89.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_89.BlockMetadata_DeliverTx>): _89.BlockMetadata_DeliverTx;
                    fromAmino(object: _89.BlockMetadata_DeliverTxAmino): _89.BlockMetadata_DeliverTx;
                    toAmino(message: _89.BlockMetadata_DeliverTx): _89.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _89.BlockMetadata_DeliverTxAminoMsg): _89.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _89.BlockMetadata_DeliverTx): _89.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _89.BlockMetadata_DeliverTxProtoMsg): _89.BlockMetadata_DeliverTx;
                    toProto(message: _89.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _89.BlockMetadata_DeliverTx): _89.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _88.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.CommitInfo;
                    fromPartial(object: Partial<_88.CommitInfo>): _88.CommitInfo;
                    fromAmino(object: _88.CommitInfoAmino): _88.CommitInfo;
                    toAmino(message: _88.CommitInfo): _88.CommitInfoAmino;
                    fromAminoMsg(object: _88.CommitInfoAminoMsg): _88.CommitInfo;
                    toAminoMsg(message: _88.CommitInfo): _88.CommitInfoAminoMsg;
                    fromProtoMsg(message: _88.CommitInfoProtoMsg): _88.CommitInfo;
                    toProto(message: _88.CommitInfo): Uint8Array;
                    toProtoMsg(message: _88.CommitInfo): _88.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _88.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.StoreInfo;
                    fromPartial(object: Partial<_88.StoreInfo>): _88.StoreInfo;
                    fromAmino(object: _88.StoreInfoAmino): _88.StoreInfo;
                    toAmino(message: _88.StoreInfo): _88.StoreInfoAmino;
                    fromAminoMsg(object: _88.StoreInfoAminoMsg): _88.StoreInfo;
                    toAminoMsg(message: _88.StoreInfo): _88.StoreInfoAminoMsg;
                    fromProtoMsg(message: _88.StoreInfoProtoMsg): _88.StoreInfo;
                    toProto(message: _88.StoreInfo): Uint8Array;
                    toProtoMsg(message: _88.StoreInfo): _88.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _88.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.CommitID;
                    fromPartial(object: Partial<_88.CommitID>): _88.CommitID;
                    fromAmino(object: _88.CommitIDAmino): _88.CommitID;
                    toAmino(message: _88.CommitID): _88.CommitIDAmino;
                    fromAminoMsg(object: _88.CommitIDAminoMsg): _88.CommitID;
                    toAminoMsg(message: _88.CommitID): _88.CommitIDAminoMsg;
                    fromProtoMsg(message: _88.CommitIDProtoMsg): _88.CommitID;
                    toProto(message: _88.CommitID): Uint8Array;
                    toProtoMsg(message: _88.CommitID): _88.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _305.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _90.GetNodeInfoRequest): Promise<_90.GetNodeInfoResponse>;
                    getSyncing(request?: _90.GetSyncingRequest): Promise<_90.GetSyncingResponse>;
                    getLatestBlock(request?: _90.GetLatestBlockRequest): Promise<_90.GetLatestBlockResponse>;
                    getBlockByHeight(request: _90.GetBlockByHeightRequest): Promise<_90.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _90.GetLatestValidatorSetRequest): Promise<_90.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _90.GetValidatorSetByHeightRequest): Promise<_90.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _90.ABCIQueryRequest): Promise<_90.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _286.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _91.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Block;
                    fromPartial(object: Partial<_91.Block>): _91.Block;
                    fromAmino(object: _91.BlockAmino): _91.Block;
                    toAmino(message: _91.Block): _91.BlockAmino;
                    fromAminoMsg(object: _91.BlockAminoMsg): _91.Block;
                    toAminoMsg(message: _91.Block): _91.BlockAminoMsg;
                    fromProtoMsg(message: _91.BlockProtoMsg): _91.Block;
                    toProto(message: _91.Block): Uint8Array;
                    toProtoMsg(message: _91.Block): _91.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _91.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Header;
                    fromPartial(object: Partial<_91.Header>): _91.Header;
                    fromAmino(object: _91.HeaderAmino): _91.Header;
                    toAmino(message: _91.Header): _91.HeaderAmino;
                    fromAminoMsg(object: _91.HeaderAminoMsg): _91.Header;
                    toAminoMsg(message: _91.Header): _91.HeaderAminoMsg;
                    fromProtoMsg(message: _91.HeaderProtoMsg): _91.Header;
                    toProto(message: _91.Header): Uint8Array;
                    toProtoMsg(message: _91.Header): _91.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _90.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_90.GetValidatorSetByHeightRequest>): _90.GetValidatorSetByHeightRequest;
                    fromAmino(object: _90.GetValidatorSetByHeightRequestAmino): _90.GetValidatorSetByHeightRequest;
                    toAmino(message: _90.GetValidatorSetByHeightRequest): _90.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _90.GetValidatorSetByHeightRequestAminoMsg): _90.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _90.GetValidatorSetByHeightRequest): _90.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _90.GetValidatorSetByHeightRequestProtoMsg): _90.GetValidatorSetByHeightRequest;
                    toProto(message: _90.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _90.GetValidatorSetByHeightRequest): _90.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _90.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_90.GetValidatorSetByHeightResponse>): _90.GetValidatorSetByHeightResponse;
                    fromAmino(object: _90.GetValidatorSetByHeightResponseAmino): _90.GetValidatorSetByHeightResponse;
                    toAmino(message: _90.GetValidatorSetByHeightResponse): _90.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _90.GetValidatorSetByHeightResponseAminoMsg): _90.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _90.GetValidatorSetByHeightResponse): _90.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _90.GetValidatorSetByHeightResponseProtoMsg): _90.GetValidatorSetByHeightResponse;
                    toProto(message: _90.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _90.GetValidatorSetByHeightResponse): _90.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _90.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_90.GetLatestValidatorSetRequest>): _90.GetLatestValidatorSetRequest;
                    fromAmino(object: _90.GetLatestValidatorSetRequestAmino): _90.GetLatestValidatorSetRequest;
                    toAmino(message: _90.GetLatestValidatorSetRequest): _90.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _90.GetLatestValidatorSetRequestAminoMsg): _90.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _90.GetLatestValidatorSetRequest): _90.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _90.GetLatestValidatorSetRequestProtoMsg): _90.GetLatestValidatorSetRequest;
                    toProto(message: _90.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _90.GetLatestValidatorSetRequest): _90.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _90.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_90.GetLatestValidatorSetResponse>): _90.GetLatestValidatorSetResponse;
                    fromAmino(object: _90.GetLatestValidatorSetResponseAmino): _90.GetLatestValidatorSetResponse;
                    toAmino(message: _90.GetLatestValidatorSetResponse): _90.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _90.GetLatestValidatorSetResponseAminoMsg): _90.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _90.GetLatestValidatorSetResponse): _90.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _90.GetLatestValidatorSetResponseProtoMsg): _90.GetLatestValidatorSetResponse;
                    toProto(message: _90.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _90.GetLatestValidatorSetResponse): _90.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _90.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.Validator;
                    fromPartial(object: Partial<_90.Validator>): _90.Validator;
                    fromAmino(object: _90.ValidatorAmino): _90.Validator;
                    toAmino(message: _90.Validator): _90.ValidatorAmino;
                    fromAminoMsg(object: _90.ValidatorAminoMsg): _90.Validator;
                    toAminoMsg(message: _90.Validator): _90.ValidatorAminoMsg;
                    fromProtoMsg(message: _90.ValidatorProtoMsg): _90.Validator;
                    toProto(message: _90.Validator): Uint8Array;
                    toProtoMsg(message: _90.Validator): _90.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _90.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_90.GetBlockByHeightRequest>): _90.GetBlockByHeightRequest;
                    fromAmino(object: _90.GetBlockByHeightRequestAmino): _90.GetBlockByHeightRequest;
                    toAmino(message: _90.GetBlockByHeightRequest): _90.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _90.GetBlockByHeightRequestAminoMsg): _90.GetBlockByHeightRequest;
                    toAminoMsg(message: _90.GetBlockByHeightRequest): _90.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _90.GetBlockByHeightRequestProtoMsg): _90.GetBlockByHeightRequest;
                    toProto(message: _90.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _90.GetBlockByHeightRequest): _90.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _90.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_90.GetBlockByHeightResponse>): _90.GetBlockByHeightResponse;
                    fromAmino(object: _90.GetBlockByHeightResponseAmino): _90.GetBlockByHeightResponse;
                    toAmino(message: _90.GetBlockByHeightResponse): _90.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _90.GetBlockByHeightResponseAminoMsg): _90.GetBlockByHeightResponse;
                    toAminoMsg(message: _90.GetBlockByHeightResponse): _90.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _90.GetBlockByHeightResponseProtoMsg): _90.GetBlockByHeightResponse;
                    toProto(message: _90.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _90.GetBlockByHeightResponse): _90.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _90.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.GetLatestBlockRequest;
                    fromPartial(_: Partial<_90.GetLatestBlockRequest>): _90.GetLatestBlockRequest;
                    fromAmino(_: _90.GetLatestBlockRequestAmino): _90.GetLatestBlockRequest;
                    toAmino(_: _90.GetLatestBlockRequest): _90.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _90.GetLatestBlockRequestAminoMsg): _90.GetLatestBlockRequest;
                    toAminoMsg(message: _90.GetLatestBlockRequest): _90.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _90.GetLatestBlockRequestProtoMsg): _90.GetLatestBlockRequest;
                    toProto(message: _90.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _90.GetLatestBlockRequest): _90.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _90.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetLatestBlockResponse;
                    fromPartial(object: Partial<_90.GetLatestBlockResponse>): _90.GetLatestBlockResponse;
                    fromAmino(object: _90.GetLatestBlockResponseAmino): _90.GetLatestBlockResponse;
                    toAmino(message: _90.GetLatestBlockResponse): _90.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _90.GetLatestBlockResponseAminoMsg): _90.GetLatestBlockResponse;
                    toAminoMsg(message: _90.GetLatestBlockResponse): _90.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _90.GetLatestBlockResponseProtoMsg): _90.GetLatestBlockResponse;
                    toProto(message: _90.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _90.GetLatestBlockResponse): _90.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _90.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.GetSyncingRequest;
                    fromPartial(_: Partial<_90.GetSyncingRequest>): _90.GetSyncingRequest;
                    fromAmino(_: _90.GetSyncingRequestAmino): _90.GetSyncingRequest;
                    toAmino(_: _90.GetSyncingRequest): _90.GetSyncingRequestAmino;
                    fromAminoMsg(object: _90.GetSyncingRequestAminoMsg): _90.GetSyncingRequest;
                    toAminoMsg(message: _90.GetSyncingRequest): _90.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _90.GetSyncingRequestProtoMsg): _90.GetSyncingRequest;
                    toProto(message: _90.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _90.GetSyncingRequest): _90.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _90.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetSyncingResponse;
                    fromPartial(object: Partial<_90.GetSyncingResponse>): _90.GetSyncingResponse;
                    fromAmino(object: _90.GetSyncingResponseAmino): _90.GetSyncingResponse;
                    toAmino(message: _90.GetSyncingResponse): _90.GetSyncingResponseAmino;
                    fromAminoMsg(object: _90.GetSyncingResponseAminoMsg): _90.GetSyncingResponse;
                    toAminoMsg(message: _90.GetSyncingResponse): _90.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _90.GetSyncingResponseProtoMsg): _90.GetSyncingResponse;
                    toProto(message: _90.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _90.GetSyncingResponse): _90.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _90.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.GetNodeInfoRequest;
                    fromPartial(_: Partial<_90.GetNodeInfoRequest>): _90.GetNodeInfoRequest;
                    fromAmino(_: _90.GetNodeInfoRequestAmino): _90.GetNodeInfoRequest;
                    toAmino(_: _90.GetNodeInfoRequest): _90.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _90.GetNodeInfoRequestAminoMsg): _90.GetNodeInfoRequest;
                    toAminoMsg(message: _90.GetNodeInfoRequest): _90.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _90.GetNodeInfoRequestProtoMsg): _90.GetNodeInfoRequest;
                    toProto(message: _90.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _90.GetNodeInfoRequest): _90.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _90.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetNodeInfoResponse;
                    fromPartial(object: Partial<_90.GetNodeInfoResponse>): _90.GetNodeInfoResponse;
                    fromAmino(object: _90.GetNodeInfoResponseAmino): _90.GetNodeInfoResponse;
                    toAmino(message: _90.GetNodeInfoResponse): _90.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _90.GetNodeInfoResponseAminoMsg): _90.GetNodeInfoResponse;
                    toAminoMsg(message: _90.GetNodeInfoResponse): _90.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _90.GetNodeInfoResponseProtoMsg): _90.GetNodeInfoResponse;
                    toProto(message: _90.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _90.GetNodeInfoResponse): _90.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _90.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.VersionInfo;
                    fromPartial(object: Partial<_90.VersionInfo>): _90.VersionInfo;
                    fromAmino(object: _90.VersionInfoAmino): _90.VersionInfo;
                    toAmino(message: _90.VersionInfo): _90.VersionInfoAmino;
                    fromAminoMsg(object: _90.VersionInfoAminoMsg): _90.VersionInfo;
                    toAminoMsg(message: _90.VersionInfo): _90.VersionInfoAminoMsg;
                    fromProtoMsg(message: _90.VersionInfoProtoMsg): _90.VersionInfo;
                    toProto(message: _90.VersionInfo): Uint8Array;
                    toProtoMsg(message: _90.VersionInfo): _90.VersionInfoProtoMsg;
                };
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
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _90.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.ABCIQueryRequest;
                    fromPartial(object: Partial<_90.ABCIQueryRequest>): _90.ABCIQueryRequest;
                    fromAmino(object: _90.ABCIQueryRequestAmino): _90.ABCIQueryRequest;
                    toAmino(message: _90.ABCIQueryRequest): _90.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _90.ABCIQueryRequestAminoMsg): _90.ABCIQueryRequest;
                    toAminoMsg(message: _90.ABCIQueryRequest): _90.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _90.ABCIQueryRequestProtoMsg): _90.ABCIQueryRequest;
                    toProto(message: _90.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _90.ABCIQueryRequest): _90.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _90.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.ABCIQueryResponse;
                    fromPartial(object: Partial<_90.ABCIQueryResponse>): _90.ABCIQueryResponse;
                    fromAmino(object: _90.ABCIQueryResponseAmino): _90.ABCIQueryResponse;
                    toAmino(message: _90.ABCIQueryResponse): _90.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _90.ABCIQueryResponseAminoMsg): _90.ABCIQueryResponse;
                    toAminoMsg(message: _90.ABCIQueryResponse): _90.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _90.ABCIQueryResponseProtoMsg): _90.ABCIQueryResponse;
                    toProto(message: _90.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _90.ABCIQueryResponse): _90.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _90.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.ProofOp;
                    fromPartial(object: Partial<_90.ProofOp>): _90.ProofOp;
                    fromAmino(object: _90.ProofOpAmino): _90.ProofOp;
                    toAmino(message: _90.ProofOp): _90.ProofOpAmino;
                    fromAminoMsg(object: _90.ProofOpAminoMsg): _90.ProofOp;
                    toAminoMsg(message: _90.ProofOp): _90.ProofOpAminoMsg;
                    fromProtoMsg(message: _90.ProofOpProtoMsg): _90.ProofOp;
                    toProto(message: _90.ProofOp): Uint8Array;
                    toProtoMsg(message: _90.ProofOp): _90.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _90.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.ProofOps;
                    fromPartial(object: Partial<_90.ProofOps>): _90.ProofOps;
                    fromAmino(object: _90.ProofOpsAmino): _90.ProofOps;
                    toAmino(message: _90.ProofOps): _90.ProofOpsAmino;
                    fromAminoMsg(object: _90.ProofOpsAminoMsg): _90.ProofOps;
                    toAminoMsg(message: _90.ProofOps): _90.ProofOpsAminoMsg;
                    fromProtoMsg(message: _90.ProofOpsProtoMsg): _90.ProofOps;
                    toProto(message: _90.ProofOps): Uint8Array;
                    toProtoMsg(message: _90.ProofOps): _90.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _92.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Coin;
                fromPartial(object: Partial<_92.Coin>): _92.Coin;
                fromAmino(object: _92.CoinAmino): _92.Coin;
                toAmino(message: _92.Coin): _92.CoinAmino;
                fromAminoMsg(object: _92.CoinAminoMsg): _92.Coin;
                toAminoMsg(message: _92.Coin): _92.CoinAminoMsg;
                fromProtoMsg(message: _92.CoinProtoMsg): _92.Coin;
                toProto(message: _92.Coin): Uint8Array;
                toProtoMsg(message: _92.Coin): _92.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _92.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.DecCoin;
                fromPartial(object: Partial<_92.DecCoin>): _92.DecCoin;
                fromAmino(object: _92.DecCoinAmino): _92.DecCoin;
                toAmino(message: _92.DecCoin): _92.DecCoinAmino;
                fromAminoMsg(object: _92.DecCoinAminoMsg): _92.DecCoin;
                toAminoMsg(message: _92.DecCoin): _92.DecCoinAminoMsg;
                fromProtoMsg(message: _92.DecCoinProtoMsg): _92.DecCoin;
                toProto(message: _92.DecCoin): Uint8Array;
                toProtoMsg(message: _92.DecCoin): _92.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _92.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.IntProto;
                fromPartial(object: Partial<_92.IntProto>): _92.IntProto;
                fromAmino(object: _92.IntProtoAmino): _92.IntProto;
                toAmino(message: _92.IntProto): _92.IntProtoAmino;
                fromAminoMsg(object: _92.IntProtoAminoMsg): _92.IntProto;
                toAminoMsg(message: _92.IntProto): _92.IntProtoAminoMsg;
                fromProtoMsg(message: _92.IntProtoProtoMsg): _92.IntProto;
                toProto(message: _92.IntProto): Uint8Array;
                toProtoMsg(message: _92.IntProto): _92.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _92.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.DecProto;
                fromPartial(object: Partial<_92.DecProto>): _92.DecProto;
                fromAmino(object: _92.DecProtoAmino): _92.DecProto;
                toAmino(message: _92.DecProto): _92.DecProtoAmino;
                fromAminoMsg(object: _92.DecProtoAminoMsg): _92.DecProto;
                toAminoMsg(message: _92.DecProto): _92.DecProtoAminoMsg;
                fromProtoMsg(message: _92.DecProtoProtoMsg): _92.DecProto;
                toProto(message: _92.DecProto): Uint8Array;
                toProtoMsg(message: _92.DecProto): _92.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _94.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.GenesisOwners;
                fromPartial(object: Partial<_94.GenesisOwners>): _94.GenesisOwners;
                fromAmino(object: _94.GenesisOwnersAmino): _94.GenesisOwners;
                toAmino(message: _94.GenesisOwners): _94.GenesisOwnersAmino;
                fromAminoMsg(object: _94.GenesisOwnersAminoMsg): _94.GenesisOwners;
                toAminoMsg(message: _94.GenesisOwners): _94.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _94.GenesisOwnersProtoMsg): _94.GenesisOwners;
                toProto(message: _94.GenesisOwners): Uint8Array;
                toProtoMsg(message: _94.GenesisOwners): _94.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _93.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Capability;
                fromPartial(object: Partial<_93.Capability>): _93.Capability;
                fromAmino(object: _93.CapabilityAmino): _93.Capability;
                toAmino(message: _93.Capability): _93.CapabilityAmino;
                fromAminoMsg(object: _93.CapabilityAminoMsg): _93.Capability;
                toAminoMsg(message: _93.Capability): _93.CapabilityAminoMsg;
                fromProtoMsg(message: _93.CapabilityProtoMsg): _93.Capability;
                toProto(message: _93.Capability): Uint8Array;
                toProtoMsg(message: _93.Capability): _93.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _93.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Owner;
                fromPartial(object: Partial<_93.Owner>): _93.Owner;
                fromAmino(object: _93.OwnerAmino): _93.Owner;
                toAmino(message: _93.Owner): _93.OwnerAmino;
                fromAminoMsg(object: _93.OwnerAminoMsg): _93.Owner;
                toAminoMsg(message: _93.Owner): _93.OwnerAminoMsg;
                fromProtoMsg(message: _93.OwnerProtoMsg): _93.Owner;
                toProto(message: _93.Owner): Uint8Array;
                toProtoMsg(message: _93.Owner): _93.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _93.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.CapabilityOwners;
                fromPartial(object: Partial<_93.CapabilityOwners>): _93.CapabilityOwners;
                fromAmino(object: _93.CapabilityOwnersAmino): _93.CapabilityOwners;
                toAmino(message: _93.CapabilityOwners): _93.CapabilityOwnersAmino;
                fromAminoMsg(object: _93.CapabilityOwnersAminoMsg): _93.CapabilityOwners;
                toAminoMsg(message: _93.CapabilityOwners): _93.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _93.CapabilityOwnersProtoMsg): _93.CapabilityOwners;
                toProto(message: _93.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _93.CapabilityOwners): _93.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _321.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _96.MsgVerifyInvariant) => _96.MsgVerifyInvariantAmino;
                    fromAmino: (object: _96.MsgVerifyInvariantAmino) => _96.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _96.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgVerifyInvariant;
                fromPartial(object: Partial<_96.MsgVerifyInvariant>): _96.MsgVerifyInvariant;
                fromAmino(object: _96.MsgVerifyInvariantAmino): _96.MsgVerifyInvariant;
                toAmino(message: _96.MsgVerifyInvariant): _96.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _96.MsgVerifyInvariantAminoMsg): _96.MsgVerifyInvariant;
                toAminoMsg(message: _96.MsgVerifyInvariant): _96.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _96.MsgVerifyInvariantProtoMsg): _96.MsgVerifyInvariant;
                toProto(message: _96.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _96.MsgVerifyInvariant): _96.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _96.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_96.MsgVerifyInvariantResponse>): _96.MsgVerifyInvariantResponse;
                fromAmino(_: _96.MsgVerifyInvariantResponseAmino): _96.MsgVerifyInvariantResponse;
                toAmino(_: _96.MsgVerifyInvariantResponse): _96.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _96.MsgVerifyInvariantResponseAminoMsg): _96.MsgVerifyInvariantResponse;
                toAminoMsg(message: _96.MsgVerifyInvariantResponse): _96.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _96.MsgVerifyInvariantResponseProtoMsg): _96.MsgVerifyInvariantResponse;
                toProto(message: _96.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _96.MsgVerifyInvariantResponse): _96.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _98.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.BIP44Params;
                    fromPartial(object: Partial<_98.BIP44Params>): _98.BIP44Params;
                    fromAmino(object: _98.BIP44ParamsAmino): _98.BIP44Params;
                    toAmino(message: _98.BIP44Params): _98.BIP44ParamsAmino;
                    fromAminoMsg(object: _98.BIP44ParamsAminoMsg): _98.BIP44Params;
                    toAminoMsg(message: _98.BIP44Params): _98.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _98.BIP44ParamsProtoMsg): _98.BIP44Params;
                    toProto(message: _98.BIP44Params): Uint8Array;
                    toProtoMsg(message: _98.BIP44Params): _98.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _99.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.Record;
                    fromPartial(object: Partial<_99.Record>): _99.Record;
                    fromAmino(object: _99.RecordAmino): _99.Record;
                    toAmino(message: _99.Record): _99.RecordAmino;
                    fromAminoMsg(object: _99.RecordAminoMsg): _99.Record;
                    toAminoMsg(message: _99.Record): _99.RecordAminoMsg;
                    fromProtoMsg(message: _99.RecordProtoMsg): _99.Record;
                    toProto(message: _99.Record): Uint8Array;
                    toProtoMsg(message: _99.Record): _99.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _99.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.Record_Local;
                    fromPartial(object: Partial<_99.Record_Local>): _99.Record_Local;
                    fromAmino(object: _99.Record_LocalAmino): _99.Record_Local;
                    toAmino(message: _99.Record_Local): _99.Record_LocalAmino;
                    fromAminoMsg(object: _99.Record_LocalAminoMsg): _99.Record_Local;
                    toAminoMsg(message: _99.Record_Local): _99.Record_LocalAminoMsg;
                    fromProtoMsg(message: _99.Record_LocalProtoMsg): _99.Record_Local;
                    toProto(message: _99.Record_Local): Uint8Array;
                    toProtoMsg(message: _99.Record_Local): _99.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _99.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.Record_Ledger;
                    fromPartial(object: Partial<_99.Record_Ledger>): _99.Record_Ledger;
                    fromAmino(object: _99.Record_LedgerAmino): _99.Record_Ledger;
                    toAmino(message: _99.Record_Ledger): _99.Record_LedgerAmino;
                    fromAminoMsg(object: _99.Record_LedgerAminoMsg): _99.Record_Ledger;
                    toAminoMsg(message: _99.Record_Ledger): _99.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _99.Record_LedgerProtoMsg): _99.Record_Ledger;
                    toProto(message: _99.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _99.Record_Ledger): _99.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _99.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _99.Record_Multi;
                    fromPartial(_: Partial<_99.Record_Multi>): _99.Record_Multi;
                    fromAmino(_: _99.Record_MultiAmino): _99.Record_Multi;
                    toAmino(_: _99.Record_Multi): _99.Record_MultiAmino;
                    fromAminoMsg(object: _99.Record_MultiAminoMsg): _99.Record_Multi;
                    toAminoMsg(message: _99.Record_Multi): _99.Record_MultiAminoMsg;
                    fromProtoMsg(message: _99.Record_MultiProtoMsg): _99.Record_Multi;
                    toProto(message: _99.Record_Multi): Uint8Array;
                    toProtoMsg(message: _99.Record_Multi): _99.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _99.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _99.Record_Offline;
                    fromPartial(_: Partial<_99.Record_Offline>): _99.Record_Offline;
                    fromAmino(_: _99.Record_OfflineAmino): _99.Record_Offline;
                    toAmino(_: _99.Record_Offline): _99.Record_OfflineAmino;
                    fromAminoMsg(object: _99.Record_OfflineAminoMsg): _99.Record_Offline;
                    toAminoMsg(message: _99.Record_Offline): _99.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _99.Record_OfflineProtoMsg): _99.Record_Offline;
                    toProto(message: _99.Record_Offline): Uint8Array;
                    toProtoMsg(message: _99.Record_Offline): _99.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _100.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.LegacyAminoPubKey;
                fromPartial(object: Partial<_100.LegacyAminoPubKey>): _100.LegacyAminoPubKey;
                fromAmino(object: _100.LegacyAminoPubKeyAmino): _100.LegacyAminoPubKey;
                toAmino(message: _100.LegacyAminoPubKey): _100.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _100.LegacyAminoPubKeyAminoMsg): _100.LegacyAminoPubKey;
                toAminoMsg(message: _100.LegacyAminoPubKey): _100.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _100.LegacyAminoPubKeyProtoMsg): _100.LegacyAminoPubKey;
                toProto(message: _100.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _100.LegacyAminoPubKey): _100.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _101.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.PubKey;
                fromPartial(object: Partial<_101.PubKey>): _101.PubKey;
                fromAmino(object: _101.PubKeyAmino): _101.PubKey;
                toAmino(message: _101.PubKey): _101.PubKeyAmino;
                fromAminoMsg(object: _101.PubKeyAminoMsg): _101.PubKey;
                toAminoMsg(message: _101.PubKey): _101.PubKeyAminoMsg;
                fromProtoMsg(message: _101.PubKeyProtoMsg): _101.PubKey;
                toProto(message: _101.PubKey): Uint8Array;
                toProtoMsg(message: _101.PubKey): _101.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _101.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.PrivKey;
                fromPartial(object: Partial<_101.PrivKey>): _101.PrivKey;
                fromAmino(object: _101.PrivKeyAmino): _101.PrivKey;
                toAmino(message: _101.PrivKey): _101.PrivKeyAmino;
                fromAminoMsg(object: _101.PrivKeyAminoMsg): _101.PrivKey;
                toAminoMsg(message: _101.PrivKey): _101.PrivKeyAminoMsg;
                fromProtoMsg(message: _101.PrivKeyProtoMsg): _101.PrivKey;
                toProto(message: _101.PrivKey): Uint8Array;
                toProtoMsg(message: _101.PrivKey): _101.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _102.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.PubKey;
                fromPartial(object: Partial<_102.PubKey>): _102.PubKey;
                fromAmino(object: _102.PubKeyAmino): _102.PubKey;
                toAmino(message: _102.PubKey): _102.PubKeyAmino;
                fromAminoMsg(object: _102.PubKeyAminoMsg): _102.PubKey;
                toAminoMsg(message: _102.PubKey): _102.PubKeyAminoMsg;
                fromProtoMsg(message: _102.PubKeyProtoMsg): _102.PubKey;
                toProto(message: _102.PubKey): Uint8Array;
                toProtoMsg(message: _102.PubKey): _102.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _102.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.PrivKey;
                fromPartial(object: Partial<_102.PrivKey>): _102.PrivKey;
                fromAmino(object: _102.PrivKeyAmino): _102.PrivKey;
                toAmino(message: _102.PrivKey): _102.PrivKeyAmino;
                fromAminoMsg(object: _102.PrivKeyAminoMsg): _102.PrivKey;
                toAminoMsg(message: _102.PrivKey): _102.PrivKeyAminoMsg;
                fromProtoMsg(message: _102.PrivKeyProtoMsg): _102.PrivKey;
                toProto(message: _102.PrivKey): Uint8Array;
                toProtoMsg(message: _102.PrivKey): _102.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                validatorOutstandingRewards(request: _105.QueryValidatorOutstandingRewardsRequest): Promise<_105.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _105.QueryValidatorCommissionRequest): Promise<_105.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _105.QueryValidatorSlashesRequest): Promise<_105.QueryValidatorSlashesResponse>;
                delegationRewards(request: _105.QueryDelegationRewardsRequest): Promise<_105.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _105.QueryDelegationTotalRewardsRequest): Promise<_105.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _105.QueryDelegatorValidatorsRequest): Promise<_105.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _105.QueryDelegatorWithdrawAddressRequest): Promise<_105.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _105.QueryCommunityPoolRequest): Promise<_105.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _287.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _106.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _106.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _106.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _106.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _106.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _106.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _106.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _106.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _106.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _106.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _106.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _106.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _106.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _106.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _106.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _106.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _106.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _106.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _106.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _106.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _106.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _106.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _106.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _106.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _106.MsgSetWithdrawAddress) => _106.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _106.MsgSetWithdrawAddressAmino) => _106.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _106.MsgWithdrawDelegatorReward) => _106.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _106.MsgWithdrawDelegatorRewardAmino) => _106.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _106.MsgWithdrawValidatorCommission) => _106.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _106.MsgWithdrawValidatorCommissionAmino) => _106.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _106.MsgFundCommunityPool) => _106.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _106.MsgFundCommunityPoolAmino) => _106.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _106.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_106.MsgSetWithdrawAddress>): _106.MsgSetWithdrawAddress;
                fromAmino(object: _106.MsgSetWithdrawAddressAmino): _106.MsgSetWithdrawAddress;
                toAmino(message: _106.MsgSetWithdrawAddress): _106.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _106.MsgSetWithdrawAddressAminoMsg): _106.MsgSetWithdrawAddress;
                toAminoMsg(message: _106.MsgSetWithdrawAddress): _106.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _106.MsgSetWithdrawAddressProtoMsg): _106.MsgSetWithdrawAddress;
                toProto(message: _106.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _106.MsgSetWithdrawAddress): _106.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _106.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_106.MsgSetWithdrawAddressResponse>): _106.MsgSetWithdrawAddressResponse;
                fromAmino(_: _106.MsgSetWithdrawAddressResponseAmino): _106.MsgSetWithdrawAddressResponse;
                toAmino(_: _106.MsgSetWithdrawAddressResponse): _106.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _106.MsgSetWithdrawAddressResponseAminoMsg): _106.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _106.MsgSetWithdrawAddressResponse): _106.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _106.MsgSetWithdrawAddressResponseProtoMsg): _106.MsgSetWithdrawAddressResponse;
                toProto(message: _106.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _106.MsgSetWithdrawAddressResponse): _106.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _106.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_106.MsgWithdrawDelegatorReward>): _106.MsgWithdrawDelegatorReward;
                fromAmino(object: _106.MsgWithdrawDelegatorRewardAmino): _106.MsgWithdrawDelegatorReward;
                toAmino(message: _106.MsgWithdrawDelegatorReward): _106.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _106.MsgWithdrawDelegatorRewardAminoMsg): _106.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _106.MsgWithdrawDelegatorReward): _106.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _106.MsgWithdrawDelegatorRewardProtoMsg): _106.MsgWithdrawDelegatorReward;
                toProto(message: _106.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _106.MsgWithdrawDelegatorReward): _106.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _106.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_106.MsgWithdrawDelegatorRewardResponse>): _106.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _106.MsgWithdrawDelegatorRewardResponseAmino): _106.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _106.MsgWithdrawDelegatorRewardResponse): _106.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _106.MsgWithdrawDelegatorRewardResponseAminoMsg): _106.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _106.MsgWithdrawDelegatorRewardResponse): _106.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _106.MsgWithdrawDelegatorRewardResponseProtoMsg): _106.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _106.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _106.MsgWithdrawDelegatorRewardResponse): _106.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _106.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_106.MsgWithdrawValidatorCommission>): _106.MsgWithdrawValidatorCommission;
                fromAmino(object: _106.MsgWithdrawValidatorCommissionAmino): _106.MsgWithdrawValidatorCommission;
                toAmino(message: _106.MsgWithdrawValidatorCommission): _106.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _106.MsgWithdrawValidatorCommissionAminoMsg): _106.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _106.MsgWithdrawValidatorCommission): _106.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _106.MsgWithdrawValidatorCommissionProtoMsg): _106.MsgWithdrawValidatorCommission;
                toProto(message: _106.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _106.MsgWithdrawValidatorCommission): _106.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _106.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_106.MsgWithdrawValidatorCommissionResponse>): _106.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _106.MsgWithdrawValidatorCommissionResponseAmino): _106.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _106.MsgWithdrawValidatorCommissionResponse): _106.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _106.MsgWithdrawValidatorCommissionResponseAminoMsg): _106.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _106.MsgWithdrawValidatorCommissionResponse): _106.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _106.MsgWithdrawValidatorCommissionResponseProtoMsg): _106.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _106.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _106.MsgWithdrawValidatorCommissionResponse): _106.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _106.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgFundCommunityPool;
                fromPartial(object: Partial<_106.MsgFundCommunityPool>): _106.MsgFundCommunityPool;
                fromAmino(object: _106.MsgFundCommunityPoolAmino): _106.MsgFundCommunityPool;
                toAmino(message: _106.MsgFundCommunityPool): _106.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _106.MsgFundCommunityPoolAminoMsg): _106.MsgFundCommunityPool;
                toAminoMsg(message: _106.MsgFundCommunityPool): _106.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _106.MsgFundCommunityPoolProtoMsg): _106.MsgFundCommunityPool;
                toProto(message: _106.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _106.MsgFundCommunityPool): _106.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _106.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_106.MsgFundCommunityPoolResponse>): _106.MsgFundCommunityPoolResponse;
                fromAmino(_: _106.MsgFundCommunityPoolResponseAmino): _106.MsgFundCommunityPoolResponse;
                toAmino(_: _106.MsgFundCommunityPoolResponse): _106.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _106.MsgFundCommunityPoolResponseAminoMsg): _106.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _106.MsgFundCommunityPoolResponse): _106.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _106.MsgFundCommunityPoolResponseProtoMsg): _106.MsgFundCommunityPoolResponse;
                toProto(message: _106.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _106.MsgFundCommunityPoolResponse): _106.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _105.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.QueryParamsRequest;
                fromPartial(_: Partial<_105.QueryParamsRequest>): _105.QueryParamsRequest;
                fromAmino(_: _105.QueryParamsRequestAmino): _105.QueryParamsRequest;
                toAmino(_: _105.QueryParamsRequest): _105.QueryParamsRequestAmino;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _105.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_105.QueryValidatorOutstandingRewardsRequest>): _105.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _105.QueryValidatorOutstandingRewardsRequestAmino): _105.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _105.QueryValidatorOutstandingRewardsRequest): _105.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _105.QueryValidatorOutstandingRewardsRequestAminoMsg): _105.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _105.QueryValidatorOutstandingRewardsRequest): _105.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorOutstandingRewardsRequestProtoMsg): _105.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _105.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorOutstandingRewardsRequest): _105.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _105.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_105.QueryValidatorOutstandingRewardsResponse>): _105.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _105.QueryValidatorOutstandingRewardsResponseAmino): _105.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _105.QueryValidatorOutstandingRewardsResponse): _105.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _105.QueryValidatorOutstandingRewardsResponseAminoMsg): _105.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _105.QueryValidatorOutstandingRewardsResponse): _105.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorOutstandingRewardsResponseProtoMsg): _105.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _105.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorOutstandingRewardsResponse): _105.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _105.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_105.QueryValidatorCommissionRequest>): _105.QueryValidatorCommissionRequest;
                fromAmino(object: _105.QueryValidatorCommissionRequestAmino): _105.QueryValidatorCommissionRequest;
                toAmino(message: _105.QueryValidatorCommissionRequest): _105.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _105.QueryValidatorCommissionRequestAminoMsg): _105.QueryValidatorCommissionRequest;
                toAminoMsg(message: _105.QueryValidatorCommissionRequest): _105.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorCommissionRequestProtoMsg): _105.QueryValidatorCommissionRequest;
                toProto(message: _105.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorCommissionRequest): _105.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _105.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_105.QueryValidatorCommissionResponse>): _105.QueryValidatorCommissionResponse;
                fromAmino(object: _105.QueryValidatorCommissionResponseAmino): _105.QueryValidatorCommissionResponse;
                toAmino(message: _105.QueryValidatorCommissionResponse): _105.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _105.QueryValidatorCommissionResponseAminoMsg): _105.QueryValidatorCommissionResponse;
                toAminoMsg(message: _105.QueryValidatorCommissionResponse): _105.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorCommissionResponseProtoMsg): _105.QueryValidatorCommissionResponse;
                toProto(message: _105.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorCommissionResponse): _105.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _105.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_105.QueryValidatorSlashesRequest>): _105.QueryValidatorSlashesRequest;
                fromAmino(object: _105.QueryValidatorSlashesRequestAmino): _105.QueryValidatorSlashesRequest;
                toAmino(message: _105.QueryValidatorSlashesRequest): _105.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _105.QueryValidatorSlashesRequestAminoMsg): _105.QueryValidatorSlashesRequest;
                toAminoMsg(message: _105.QueryValidatorSlashesRequest): _105.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorSlashesRequestProtoMsg): _105.QueryValidatorSlashesRequest;
                toProto(message: _105.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorSlashesRequest): _105.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _105.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_105.QueryValidatorSlashesResponse>): _105.QueryValidatorSlashesResponse;
                fromAmino(object: _105.QueryValidatorSlashesResponseAmino): _105.QueryValidatorSlashesResponse;
                toAmino(message: _105.QueryValidatorSlashesResponse): _105.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _105.QueryValidatorSlashesResponseAminoMsg): _105.QueryValidatorSlashesResponse;
                toAminoMsg(message: _105.QueryValidatorSlashesResponse): _105.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorSlashesResponseProtoMsg): _105.QueryValidatorSlashesResponse;
                toProto(message: _105.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorSlashesResponse): _105.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _105.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_105.QueryDelegationRewardsRequest>): _105.QueryDelegationRewardsRequest;
                fromAmino(object: _105.QueryDelegationRewardsRequestAmino): _105.QueryDelegationRewardsRequest;
                toAmino(message: _105.QueryDelegationRewardsRequest): _105.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _105.QueryDelegationRewardsRequestAminoMsg): _105.QueryDelegationRewardsRequest;
                toAminoMsg(message: _105.QueryDelegationRewardsRequest): _105.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryDelegationRewardsRequestProtoMsg): _105.QueryDelegationRewardsRequest;
                toProto(message: _105.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDelegationRewardsRequest): _105.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _105.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_105.QueryDelegationRewardsResponse>): _105.QueryDelegationRewardsResponse;
                fromAmino(object: _105.QueryDelegationRewardsResponseAmino): _105.QueryDelegationRewardsResponse;
                toAmino(message: _105.QueryDelegationRewardsResponse): _105.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _105.QueryDelegationRewardsResponseAminoMsg): _105.QueryDelegationRewardsResponse;
                toAminoMsg(message: _105.QueryDelegationRewardsResponse): _105.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryDelegationRewardsResponseProtoMsg): _105.QueryDelegationRewardsResponse;
                toProto(message: _105.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDelegationRewardsResponse): _105.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _105.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_105.QueryDelegationTotalRewardsRequest>): _105.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _105.QueryDelegationTotalRewardsRequestAmino): _105.QueryDelegationTotalRewardsRequest;
                toAmino(message: _105.QueryDelegationTotalRewardsRequest): _105.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _105.QueryDelegationTotalRewardsRequestAminoMsg): _105.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _105.QueryDelegationTotalRewardsRequest): _105.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryDelegationTotalRewardsRequestProtoMsg): _105.QueryDelegationTotalRewardsRequest;
                toProto(message: _105.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDelegationTotalRewardsRequest): _105.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _105.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_105.QueryDelegationTotalRewardsResponse>): _105.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _105.QueryDelegationTotalRewardsResponseAmino): _105.QueryDelegationTotalRewardsResponse;
                toAmino(message: _105.QueryDelegationTotalRewardsResponse): _105.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _105.QueryDelegationTotalRewardsResponseAminoMsg): _105.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _105.QueryDelegationTotalRewardsResponse): _105.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryDelegationTotalRewardsResponseProtoMsg): _105.QueryDelegationTotalRewardsResponse;
                toProto(message: _105.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDelegationTotalRewardsResponse): _105.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_105.QueryDelegatorValidatorsRequest>): _105.QueryDelegatorValidatorsRequest;
                fromAmino(object: _105.QueryDelegatorValidatorsRequestAmino): _105.QueryDelegatorValidatorsRequest;
                toAmino(message: _105.QueryDelegatorValidatorsRequest): _105.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _105.QueryDelegatorValidatorsRequestAminoMsg): _105.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _105.QueryDelegatorValidatorsRequest): _105.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryDelegatorValidatorsRequestProtoMsg): _105.QueryDelegatorValidatorsRequest;
                toProto(message: _105.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorValidatorsRequest): _105.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_105.QueryDelegatorValidatorsResponse>): _105.QueryDelegatorValidatorsResponse;
                fromAmino(object: _105.QueryDelegatorValidatorsResponseAmino): _105.QueryDelegatorValidatorsResponse;
                toAmino(message: _105.QueryDelegatorValidatorsResponse): _105.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _105.QueryDelegatorValidatorsResponseAminoMsg): _105.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _105.QueryDelegatorValidatorsResponse): _105.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryDelegatorValidatorsResponseProtoMsg): _105.QueryDelegatorValidatorsResponse;
                toProto(message: _105.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorValidatorsResponse): _105.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_105.QueryDelegatorWithdrawAddressRequest>): _105.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _105.QueryDelegatorWithdrawAddressRequestAmino): _105.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _105.QueryDelegatorWithdrawAddressRequest): _105.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _105.QueryDelegatorWithdrawAddressRequestAminoMsg): _105.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _105.QueryDelegatorWithdrawAddressRequest): _105.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _105.QueryDelegatorWithdrawAddressRequestProtoMsg): _105.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _105.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorWithdrawAddressRequest): _105.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_105.QueryDelegatorWithdrawAddressResponse>): _105.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _105.QueryDelegatorWithdrawAddressResponseAmino): _105.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _105.QueryDelegatorWithdrawAddressResponse): _105.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _105.QueryDelegatorWithdrawAddressResponseAminoMsg): _105.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _105.QueryDelegatorWithdrawAddressResponse): _105.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _105.QueryDelegatorWithdrawAddressResponseProtoMsg): _105.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _105.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorWithdrawAddressResponse): _105.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _105.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_105.QueryCommunityPoolRequest>): _105.QueryCommunityPoolRequest;
                fromAmino(_: _105.QueryCommunityPoolRequestAmino): _105.QueryCommunityPoolRequest;
                toAmino(_: _105.QueryCommunityPoolRequest): _105.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _105.QueryCommunityPoolRequestAminoMsg): _105.QueryCommunityPoolRequest;
                toAminoMsg(message: _105.QueryCommunityPoolRequest): _105.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _105.QueryCommunityPoolRequestProtoMsg): _105.QueryCommunityPoolRequest;
                toProto(message: _105.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _105.QueryCommunityPoolRequest): _105.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _105.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_105.QueryCommunityPoolResponse>): _105.QueryCommunityPoolResponse;
                fromAmino(object: _105.QueryCommunityPoolResponseAmino): _105.QueryCommunityPoolResponse;
                toAmino(message: _105.QueryCommunityPoolResponse): _105.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _105.QueryCommunityPoolResponseAminoMsg): _105.QueryCommunityPoolResponse;
                toAminoMsg(message: _105.QueryCommunityPoolResponse): _105.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _105.QueryCommunityPoolResponseProtoMsg): _105.QueryCommunityPoolResponse;
                toProto(message: _105.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _105.QueryCommunityPoolResponse): _105.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _104.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_104.DelegatorWithdrawInfo>): _104.DelegatorWithdrawInfo;
                fromAmino(object: _104.DelegatorWithdrawInfoAmino): _104.DelegatorWithdrawInfo;
                toAmino(message: _104.DelegatorWithdrawInfo): _104.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _104.DelegatorWithdrawInfoAminoMsg): _104.DelegatorWithdrawInfo;
                toAminoMsg(message: _104.DelegatorWithdrawInfo): _104.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _104.DelegatorWithdrawInfoProtoMsg): _104.DelegatorWithdrawInfo;
                toProto(message: _104.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _104.DelegatorWithdrawInfo): _104.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _104.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_104.ValidatorOutstandingRewardsRecord>): _104.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _104.ValidatorOutstandingRewardsRecordAmino): _104.ValidatorOutstandingRewardsRecord;
                toAmino(message: _104.ValidatorOutstandingRewardsRecord): _104.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _104.ValidatorOutstandingRewardsRecordAminoMsg): _104.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _104.ValidatorOutstandingRewardsRecord): _104.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _104.ValidatorOutstandingRewardsRecordProtoMsg): _104.ValidatorOutstandingRewardsRecord;
                toProto(message: _104.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _104.ValidatorOutstandingRewardsRecord): _104.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _104.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_104.ValidatorAccumulatedCommissionRecord>): _104.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _104.ValidatorAccumulatedCommissionRecordAmino): _104.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _104.ValidatorAccumulatedCommissionRecord): _104.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _104.ValidatorAccumulatedCommissionRecordAminoMsg): _104.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _104.ValidatorAccumulatedCommissionRecord): _104.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _104.ValidatorAccumulatedCommissionRecordProtoMsg): _104.ValidatorAccumulatedCommissionRecord;
                toProto(message: _104.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _104.ValidatorAccumulatedCommissionRecord): _104.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _104.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_104.ValidatorHistoricalRewardsRecord>): _104.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _104.ValidatorHistoricalRewardsRecordAmino): _104.ValidatorHistoricalRewardsRecord;
                toAmino(message: _104.ValidatorHistoricalRewardsRecord): _104.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _104.ValidatorHistoricalRewardsRecordAminoMsg): _104.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _104.ValidatorHistoricalRewardsRecord): _104.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _104.ValidatorHistoricalRewardsRecordProtoMsg): _104.ValidatorHistoricalRewardsRecord;
                toProto(message: _104.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _104.ValidatorHistoricalRewardsRecord): _104.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _104.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_104.ValidatorCurrentRewardsRecord>): _104.ValidatorCurrentRewardsRecord;
                fromAmino(object: _104.ValidatorCurrentRewardsRecordAmino): _104.ValidatorCurrentRewardsRecord;
                toAmino(message: _104.ValidatorCurrentRewardsRecord): _104.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _104.ValidatorCurrentRewardsRecordAminoMsg): _104.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _104.ValidatorCurrentRewardsRecord): _104.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _104.ValidatorCurrentRewardsRecordProtoMsg): _104.ValidatorCurrentRewardsRecord;
                toProto(message: _104.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _104.ValidatorCurrentRewardsRecord): _104.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _104.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_104.DelegatorStartingInfoRecord>): _104.DelegatorStartingInfoRecord;
                fromAmino(object: _104.DelegatorStartingInfoRecordAmino): _104.DelegatorStartingInfoRecord;
                toAmino(message: _104.DelegatorStartingInfoRecord): _104.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _104.DelegatorStartingInfoRecordAminoMsg): _104.DelegatorStartingInfoRecord;
                toAminoMsg(message: _104.DelegatorStartingInfoRecord): _104.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _104.DelegatorStartingInfoRecordProtoMsg): _104.DelegatorStartingInfoRecord;
                toProto(message: _104.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _104.DelegatorStartingInfoRecord): _104.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _104.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_104.ValidatorSlashEventRecord>): _104.ValidatorSlashEventRecord;
                fromAmino(object: _104.ValidatorSlashEventRecordAmino): _104.ValidatorSlashEventRecord;
                toAmino(message: _104.ValidatorSlashEventRecord): _104.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _104.ValidatorSlashEventRecordAminoMsg): _104.ValidatorSlashEventRecord;
                toAminoMsg(message: _104.ValidatorSlashEventRecord): _104.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _104.ValidatorSlashEventRecordProtoMsg): _104.ValidatorSlashEventRecord;
                toProto(message: _104.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _104.ValidatorSlashEventRecord): _104.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _104.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.GenesisState;
                fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
                fromAmino(object: _104.GenesisStateAmino): _104.GenesisState;
                toAmino(message: _104.GenesisState): _104.GenesisStateAmino;
                fromAminoMsg(object: _104.GenesisStateAminoMsg): _104.GenesisState;
                toAminoMsg(message: _104.GenesisState): _104.GenesisStateAminoMsg;
                fromProtoMsg(message: _104.GenesisStateProtoMsg): _104.GenesisState;
                toProto(message: _104.GenesisState): Uint8Array;
                toProtoMsg(message: _104.GenesisState): _104.GenesisStateProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _103.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_103.ValidatorHistoricalRewards>): _103.ValidatorHistoricalRewards;
                fromAmino(object: _103.ValidatorHistoricalRewardsAmino): _103.ValidatorHistoricalRewards;
                toAmino(message: _103.ValidatorHistoricalRewards): _103.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _103.ValidatorHistoricalRewardsAminoMsg): _103.ValidatorHistoricalRewards;
                toAminoMsg(message: _103.ValidatorHistoricalRewards): _103.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _103.ValidatorHistoricalRewardsProtoMsg): _103.ValidatorHistoricalRewards;
                toProto(message: _103.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _103.ValidatorHistoricalRewards): _103.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _103.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ValidatorCurrentRewards;
                fromPartial(object: Partial<_103.ValidatorCurrentRewards>): _103.ValidatorCurrentRewards;
                fromAmino(object: _103.ValidatorCurrentRewardsAmino): _103.ValidatorCurrentRewards;
                toAmino(message: _103.ValidatorCurrentRewards): _103.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _103.ValidatorCurrentRewardsAminoMsg): _103.ValidatorCurrentRewards;
                toAminoMsg(message: _103.ValidatorCurrentRewards): _103.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _103.ValidatorCurrentRewardsProtoMsg): _103.ValidatorCurrentRewards;
                toProto(message: _103.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _103.ValidatorCurrentRewards): _103.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _103.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_103.ValidatorAccumulatedCommission>): _103.ValidatorAccumulatedCommission;
                fromAmino(object: _103.ValidatorAccumulatedCommissionAmino): _103.ValidatorAccumulatedCommission;
                toAmino(message: _103.ValidatorAccumulatedCommission): _103.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _103.ValidatorAccumulatedCommissionAminoMsg): _103.ValidatorAccumulatedCommission;
                toAminoMsg(message: _103.ValidatorAccumulatedCommission): _103.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _103.ValidatorAccumulatedCommissionProtoMsg): _103.ValidatorAccumulatedCommission;
                toProto(message: _103.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _103.ValidatorAccumulatedCommission): _103.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _103.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_103.ValidatorOutstandingRewards>): _103.ValidatorOutstandingRewards;
                fromAmino(object: _103.ValidatorOutstandingRewardsAmino): _103.ValidatorOutstandingRewards;
                toAmino(message: _103.ValidatorOutstandingRewards): _103.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _103.ValidatorOutstandingRewardsAminoMsg): _103.ValidatorOutstandingRewards;
                toAminoMsg(message: _103.ValidatorOutstandingRewards): _103.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _103.ValidatorOutstandingRewardsProtoMsg): _103.ValidatorOutstandingRewards;
                toProto(message: _103.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _103.ValidatorOutstandingRewards): _103.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _103.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ValidatorSlashEvent;
                fromPartial(object: Partial<_103.ValidatorSlashEvent>): _103.ValidatorSlashEvent;
                fromAmino(object: _103.ValidatorSlashEventAmino): _103.ValidatorSlashEvent;
                toAmino(message: _103.ValidatorSlashEvent): _103.ValidatorSlashEventAmino;
                fromAminoMsg(object: _103.ValidatorSlashEventAminoMsg): _103.ValidatorSlashEvent;
                toAminoMsg(message: _103.ValidatorSlashEvent): _103.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _103.ValidatorSlashEventProtoMsg): _103.ValidatorSlashEvent;
                toProto(message: _103.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _103.ValidatorSlashEvent): _103.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _103.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ValidatorSlashEvents;
                fromPartial(object: Partial<_103.ValidatorSlashEvents>): _103.ValidatorSlashEvents;
                fromAmino(object: _103.ValidatorSlashEventsAmino): _103.ValidatorSlashEvents;
                toAmino(message: _103.ValidatorSlashEvents): _103.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _103.ValidatorSlashEventsAminoMsg): _103.ValidatorSlashEvents;
                toAminoMsg(message: _103.ValidatorSlashEvents): _103.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _103.ValidatorSlashEventsProtoMsg): _103.ValidatorSlashEvents;
                toProto(message: _103.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _103.ValidatorSlashEvents): _103.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _103.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.FeePool;
                fromPartial(object: Partial<_103.FeePool>): _103.FeePool;
                fromAmino(object: _103.FeePoolAmino): _103.FeePool;
                toAmino(message: _103.FeePool): _103.FeePoolAmino;
                fromAminoMsg(object: _103.FeePoolAminoMsg): _103.FeePool;
                toAminoMsg(message: _103.FeePool): _103.FeePoolAminoMsg;
                fromProtoMsg(message: _103.FeePoolProtoMsg): _103.FeePool;
                toProto(message: _103.FeePool): Uint8Array;
                toProtoMsg(message: _103.FeePool): _103.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _103.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_103.CommunityPoolSpendProposal>): _103.CommunityPoolSpendProposal;
                fromAmino(object: _103.CommunityPoolSpendProposalAmino): _103.CommunityPoolSpendProposal;
                toAmino(message: _103.CommunityPoolSpendProposal): _103.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _103.CommunityPoolSpendProposalAminoMsg): _103.CommunityPoolSpendProposal;
                toAminoMsg(message: _103.CommunityPoolSpendProposal): _103.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _103.CommunityPoolSpendProposalProtoMsg): _103.CommunityPoolSpendProposal;
                toProto(message: _103.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _103.CommunityPoolSpendProposal): _103.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _103.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.DelegatorStartingInfo;
                fromPartial(object: Partial<_103.DelegatorStartingInfo>): _103.DelegatorStartingInfo;
                fromAmino(object: _103.DelegatorStartingInfoAmino): _103.DelegatorStartingInfo;
                toAmino(message: _103.DelegatorStartingInfo): _103.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _103.DelegatorStartingInfoAminoMsg): _103.DelegatorStartingInfo;
                toAminoMsg(message: _103.DelegatorStartingInfo): _103.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _103.DelegatorStartingInfoProtoMsg): _103.DelegatorStartingInfo;
                toProto(message: _103.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _103.DelegatorStartingInfo): _103.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _103.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.DelegationDelegatorReward;
                fromPartial(object: Partial<_103.DelegationDelegatorReward>): _103.DelegationDelegatorReward;
                fromAmino(object: _103.DelegationDelegatorRewardAmino): _103.DelegationDelegatorReward;
                toAmino(message: _103.DelegationDelegatorReward): _103.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _103.DelegationDelegatorRewardAminoMsg): _103.DelegationDelegatorReward;
                toAminoMsg(message: _103.DelegationDelegatorReward): _103.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _103.DelegationDelegatorRewardProtoMsg): _103.DelegationDelegatorReward;
                toProto(message: _103.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _103.DelegationDelegatorReward): _103.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _103.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_103.CommunityPoolSpendProposalWithDeposit>): _103.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _103.CommunityPoolSpendProposalWithDepositAmino): _103.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _103.CommunityPoolSpendProposalWithDeposit): _103.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _103.CommunityPoolSpendProposalWithDepositAminoMsg): _103.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _103.CommunityPoolSpendProposalWithDeposit): _103.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _103.CommunityPoolSpendProposalWithDepositProtoMsg): _103.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _103.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _103.CommunityPoolSpendProposalWithDeposit): _103.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _323.MsgClientImpl;
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _109.QueryEvidenceRequest): Promise<_109.QueryEvidenceResponse>;
                allEvidence(request?: _109.QueryAllEvidenceRequest): Promise<_109.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _288.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _110.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _110.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _110.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _110.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _110.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _110.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _110.MsgSubmitEvidence) => _110.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _110.MsgSubmitEvidenceAmino) => _110.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _110.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgSubmitEvidence;
                fromPartial(object: Partial<_110.MsgSubmitEvidence>): _110.MsgSubmitEvidence;
                fromAmino(object: _110.MsgSubmitEvidenceAmino): _110.MsgSubmitEvidence;
                toAmino(message: _110.MsgSubmitEvidence): _110.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _110.MsgSubmitEvidenceAminoMsg): _110.MsgSubmitEvidence;
                toAminoMsg(message: _110.MsgSubmitEvidence): _110.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _110.MsgSubmitEvidenceProtoMsg): _110.MsgSubmitEvidence;
                toProto(message: _110.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _110.MsgSubmitEvidence): _110.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _110.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_110.MsgSubmitEvidenceResponse>): _110.MsgSubmitEvidenceResponse;
                fromAmino(object: _110.MsgSubmitEvidenceResponseAmino): _110.MsgSubmitEvidenceResponse;
                toAmino(message: _110.MsgSubmitEvidenceResponse): _110.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _110.MsgSubmitEvidenceResponseAminoMsg): _110.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _110.MsgSubmitEvidenceResponse): _110.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _110.MsgSubmitEvidenceResponseProtoMsg): _110.MsgSubmitEvidenceResponse;
                toProto(message: _110.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _110.MsgSubmitEvidenceResponse): _110.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _109.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryEvidenceRequest;
                fromPartial(object: Partial<_109.QueryEvidenceRequest>): _109.QueryEvidenceRequest;
                fromAmino(object: _109.QueryEvidenceRequestAmino): _109.QueryEvidenceRequest;
                toAmino(message: _109.QueryEvidenceRequest): _109.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _109.QueryEvidenceRequestAminoMsg): _109.QueryEvidenceRequest;
                toAminoMsg(message: _109.QueryEvidenceRequest): _109.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _109.QueryEvidenceRequestProtoMsg): _109.QueryEvidenceRequest;
                toProto(message: _109.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _109.QueryEvidenceRequest): _109.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _109.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryEvidenceResponse;
                fromPartial(object: Partial<_109.QueryEvidenceResponse>): _109.QueryEvidenceResponse;
                fromAmino(object: _109.QueryEvidenceResponseAmino): _109.QueryEvidenceResponse;
                toAmino(message: _109.QueryEvidenceResponse): _109.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _109.QueryEvidenceResponseAminoMsg): _109.QueryEvidenceResponse;
                toAminoMsg(message: _109.QueryEvidenceResponse): _109.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _109.QueryEvidenceResponseProtoMsg): _109.QueryEvidenceResponse;
                toProto(message: _109.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _109.QueryEvidenceResponse): _109.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _109.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_109.QueryAllEvidenceRequest>): _109.QueryAllEvidenceRequest;
                fromAmino(object: _109.QueryAllEvidenceRequestAmino): _109.QueryAllEvidenceRequest;
                toAmino(message: _109.QueryAllEvidenceRequest): _109.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _109.QueryAllEvidenceRequestAminoMsg): _109.QueryAllEvidenceRequest;
                toAminoMsg(message: _109.QueryAllEvidenceRequest): _109.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _109.QueryAllEvidenceRequestProtoMsg): _109.QueryAllEvidenceRequest;
                toProto(message: _109.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _109.QueryAllEvidenceRequest): _109.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _109.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_109.QueryAllEvidenceResponse>): _109.QueryAllEvidenceResponse;
                fromAmino(object: _109.QueryAllEvidenceResponseAmino): _109.QueryAllEvidenceResponse;
                toAmino(message: _109.QueryAllEvidenceResponse): _109.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _109.QueryAllEvidenceResponseAminoMsg): _109.QueryAllEvidenceResponse;
                toAminoMsg(message: _109.QueryAllEvidenceResponse): _109.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _109.QueryAllEvidenceResponseProtoMsg): _109.QueryAllEvidenceResponse;
                toProto(message: _109.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _109.QueryAllEvidenceResponse): _109.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _107.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.Equivocation;
                fromPartial(object: Partial<_107.Equivocation>): _107.Equivocation;
                fromAmino(object: _107.EquivocationAmino): _107.Equivocation;
                toAmino(message: _107.Equivocation): _107.EquivocationAmino;
                fromAminoMsg(object: _107.EquivocationAminoMsg): _107.Equivocation;
                toAminoMsg(message: _107.Equivocation): _107.EquivocationAminoMsg;
                fromProtoMsg(message: _107.EquivocationProtoMsg): _107.Equivocation;
                toProto(message: _107.Equivocation): Uint8Array;
                toProtoMsg(message: _107.Equivocation): _107.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _324.MsgClientImpl;
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _113.QueryAllowanceRequest): Promise<_113.QueryAllowanceResponse>;
                allowances(request: _113.QueryAllowancesRequest): Promise<_113.QueryAllowancesResponse>;
                allowancesByGranter(request: _113.QueryAllowancesByGranterRequest): Promise<_113.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _289.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _114.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _114.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _114.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _114.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _114.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _114.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _114.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _114.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _114.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _114.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _114.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _114.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _114.MsgGrantAllowance) => _114.MsgGrantAllowanceAmino;
                    fromAmino: (object: _114.MsgGrantAllowanceAmino) => _114.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _114.MsgRevokeAllowance) => _114.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _114.MsgRevokeAllowanceAmino) => _114.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _114.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgGrantAllowance;
                fromPartial(object: Partial<_114.MsgGrantAllowance>): _114.MsgGrantAllowance;
                fromAmino(object: _114.MsgGrantAllowanceAmino): _114.MsgGrantAllowance;
                toAmino(message: _114.MsgGrantAllowance): _114.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _114.MsgGrantAllowanceAminoMsg): _114.MsgGrantAllowance;
                toAminoMsg(message: _114.MsgGrantAllowance): _114.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _114.MsgGrantAllowanceProtoMsg): _114.MsgGrantAllowance;
                toProto(message: _114.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _114.MsgGrantAllowance): _114.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _114.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_114.MsgGrantAllowanceResponse>): _114.MsgGrantAllowanceResponse;
                fromAmino(_: _114.MsgGrantAllowanceResponseAmino): _114.MsgGrantAllowanceResponse;
                toAmino(_: _114.MsgGrantAllowanceResponse): _114.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _114.MsgGrantAllowanceResponseAminoMsg): _114.MsgGrantAllowanceResponse;
                toAminoMsg(message: _114.MsgGrantAllowanceResponse): _114.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _114.MsgGrantAllowanceResponseProtoMsg): _114.MsgGrantAllowanceResponse;
                toProto(message: _114.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _114.MsgGrantAllowanceResponse): _114.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _114.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgRevokeAllowance;
                fromPartial(object: Partial<_114.MsgRevokeAllowance>): _114.MsgRevokeAllowance;
                fromAmino(object: _114.MsgRevokeAllowanceAmino): _114.MsgRevokeAllowance;
                toAmino(message: _114.MsgRevokeAllowance): _114.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _114.MsgRevokeAllowanceAminoMsg): _114.MsgRevokeAllowance;
                toAminoMsg(message: _114.MsgRevokeAllowance): _114.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _114.MsgRevokeAllowanceProtoMsg): _114.MsgRevokeAllowance;
                toProto(message: _114.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _114.MsgRevokeAllowance): _114.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _114.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_114.MsgRevokeAllowanceResponse>): _114.MsgRevokeAllowanceResponse;
                fromAmino(_: _114.MsgRevokeAllowanceResponseAmino): _114.MsgRevokeAllowanceResponse;
                toAmino(_: _114.MsgRevokeAllowanceResponse): _114.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _114.MsgRevokeAllowanceResponseAminoMsg): _114.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _114.MsgRevokeAllowanceResponse): _114.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _114.MsgRevokeAllowanceResponseProtoMsg): _114.MsgRevokeAllowanceResponse;
                toProto(message: _114.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _114.MsgRevokeAllowanceResponse): _114.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _111.BasicAllowance | _111.PeriodicAllowance | _111.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _113.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowanceRequest;
                fromPartial(object: Partial<_113.QueryAllowanceRequest>): _113.QueryAllowanceRequest;
                fromAmino(object: _113.QueryAllowanceRequestAmino): _113.QueryAllowanceRequest;
                toAmino(message: _113.QueryAllowanceRequest): _113.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _113.QueryAllowanceRequestAminoMsg): _113.QueryAllowanceRequest;
                toAminoMsg(message: _113.QueryAllowanceRequest): _113.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _113.QueryAllowanceRequestProtoMsg): _113.QueryAllowanceRequest;
                toProto(message: _113.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAllowanceRequest): _113.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _113.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowanceResponse;
                fromPartial(object: Partial<_113.QueryAllowanceResponse>): _113.QueryAllowanceResponse;
                fromAmino(object: _113.QueryAllowanceResponseAmino): _113.QueryAllowanceResponse;
                toAmino(message: _113.QueryAllowanceResponse): _113.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _113.QueryAllowanceResponseAminoMsg): _113.QueryAllowanceResponse;
                toAminoMsg(message: _113.QueryAllowanceResponse): _113.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _113.QueryAllowanceResponseProtoMsg): _113.QueryAllowanceResponse;
                toProto(message: _113.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAllowanceResponse): _113.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _113.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowancesRequest;
                fromPartial(object: Partial<_113.QueryAllowancesRequest>): _113.QueryAllowancesRequest;
                fromAmino(object: _113.QueryAllowancesRequestAmino): _113.QueryAllowancesRequest;
                toAmino(message: _113.QueryAllowancesRequest): _113.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _113.QueryAllowancesRequestAminoMsg): _113.QueryAllowancesRequest;
                toAminoMsg(message: _113.QueryAllowancesRequest): _113.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _113.QueryAllowancesRequestProtoMsg): _113.QueryAllowancesRequest;
                toProto(message: _113.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAllowancesRequest): _113.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _113.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowancesResponse;
                fromPartial(object: Partial<_113.QueryAllowancesResponse>): _113.QueryAllowancesResponse;
                fromAmino(object: _113.QueryAllowancesResponseAmino): _113.QueryAllowancesResponse;
                toAmino(message: _113.QueryAllowancesResponse): _113.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _113.QueryAllowancesResponseAminoMsg): _113.QueryAllowancesResponse;
                toAminoMsg(message: _113.QueryAllowancesResponse): _113.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _113.QueryAllowancesResponseProtoMsg): _113.QueryAllowancesResponse;
                toProto(message: _113.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAllowancesResponse): _113.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _113.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_113.QueryAllowancesByGranterRequest>): _113.QueryAllowancesByGranterRequest;
                fromAmino(object: _113.QueryAllowancesByGranterRequestAmino): _113.QueryAllowancesByGranterRequest;
                toAmino(message: _113.QueryAllowancesByGranterRequest): _113.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _113.QueryAllowancesByGranterRequestAminoMsg): _113.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _113.QueryAllowancesByGranterRequest): _113.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _113.QueryAllowancesByGranterRequestProtoMsg): _113.QueryAllowancesByGranterRequest;
                toProto(message: _113.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAllowancesByGranterRequest): _113.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _113.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_113.QueryAllowancesByGranterResponse>): _113.QueryAllowancesByGranterResponse;
                fromAmino(object: _113.QueryAllowancesByGranterResponseAmino): _113.QueryAllowancesByGranterResponse;
                toAmino(message: _113.QueryAllowancesByGranterResponse): _113.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _113.QueryAllowancesByGranterResponseAminoMsg): _113.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _113.QueryAllowancesByGranterResponse): _113.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _113.QueryAllowancesByGranterResponseProtoMsg): _113.QueryAllowancesByGranterResponse;
                toProto(message: _113.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAllowancesByGranterResponse): _113.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _111.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.BasicAllowance;
                fromPartial(object: Partial<_111.BasicAllowance>): _111.BasicAllowance;
                fromAmino(object: _111.BasicAllowanceAmino): _111.BasicAllowance;
                toAmino(message: _111.BasicAllowance): _111.BasicAllowanceAmino;
                fromAminoMsg(object: _111.BasicAllowanceAminoMsg): _111.BasicAllowance;
                toAminoMsg(message: _111.BasicAllowance): _111.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _111.BasicAllowanceProtoMsg): _111.BasicAllowance;
                toProto(message: _111.BasicAllowance): Uint8Array;
                toProtoMsg(message: _111.BasicAllowance): _111.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _111.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.PeriodicAllowance;
                fromPartial(object: Partial<_111.PeriodicAllowance>): _111.PeriodicAllowance;
                fromAmino(object: _111.PeriodicAllowanceAmino): _111.PeriodicAllowance;
                toAmino(message: _111.PeriodicAllowance): _111.PeriodicAllowanceAmino;
                fromAminoMsg(object: _111.PeriodicAllowanceAminoMsg): _111.PeriodicAllowance;
                toAminoMsg(message: _111.PeriodicAllowance): _111.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _111.PeriodicAllowanceProtoMsg): _111.PeriodicAllowance;
                toProto(message: _111.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _111.PeriodicAllowance): _111.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _111.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.AllowedMsgAllowance;
                fromPartial(object: Partial<_111.AllowedMsgAllowance>): _111.AllowedMsgAllowance;
                fromAmino(object: _111.AllowedMsgAllowanceAmino): _111.AllowedMsgAllowance;
                toAmino(message: _111.AllowedMsgAllowance): _111.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _111.AllowedMsgAllowanceAminoMsg): _111.AllowedMsgAllowance;
                toAminoMsg(message: _111.AllowedMsgAllowance): _111.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _111.AllowedMsgAllowanceProtoMsg): _111.AllowedMsgAllowance;
                toProto(message: _111.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _111.AllowedMsgAllowance): _111.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _111.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.Grant;
                fromPartial(object: Partial<_111.Grant>): _111.Grant;
                fromAmino(object: _111.GrantAmino): _111.Grant;
                toAmino(message: _111.Grant): _111.GrantAmino;
                fromAminoMsg(object: _111.GrantAminoMsg): _111.Grant;
                toAminoMsg(message: _111.Grant): _111.GrantAminoMsg;
                fromProtoMsg(message: _111.GrantProtoMsg): _111.Grant;
                toProto(message: _111.Grant): Uint8Array;
                toProtoMsg(message: _111.Grant): _111.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
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
        const v1: {
            MsgClientImpl: typeof _325.MsgClientImpl;
            QueryClientImpl: typeof _309.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _118.QueryProposalRequest): Promise<_118.QueryProposalResponse>;
                proposals(request: _118.QueryProposalsRequest): Promise<_118.QueryProposalsResponse>;
                vote(request: _118.QueryVoteRequest): Promise<_118.QueryVoteResponse>;
                votes(request: _118.QueryVotesRequest): Promise<_118.QueryVotesResponse>;
                params(request: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                deposit(request: _118.QueryDepositRequest): Promise<_118.QueryDepositResponse>;
                deposits(request: _118.QueryDepositsRequest): Promise<_118.QueryDepositsResponse>;
                tallyResult(request: _118.QueryTallyResultRequest): Promise<_118.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _290.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _119.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _119.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _119.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _119.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _119.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _119.MsgExecLegacyContent;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: _119.MsgVote;
                    };
                    voteWeighted(value: _119.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _119.MsgVoteWeighted;
                    };
                    deposit(value: _119.MsgDeposit): {
                        typeUrl: string;
                        value: _119.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _119.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _119.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _119.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _119.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _119.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _119.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _119.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _119.MsgExecLegacyContent;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: _119.MsgVote;
                    };
                    voteWeighted(value: _119.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _119.MsgVoteWeighted;
                    };
                    deposit(value: _119.MsgDeposit): {
                        typeUrl: string;
                        value: _119.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _119.MsgSubmitProposal) => _119.MsgSubmitProposalAmino;
                    fromAmino: (object: _119.MsgSubmitProposalAmino) => _119.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _119.MsgExecLegacyContent) => _119.MsgExecLegacyContentAmino;
                    fromAmino: (object: _119.MsgExecLegacyContentAmino) => _119.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _119.MsgVote) => _119.MsgVoteAmino;
                    fromAmino: (object: _119.MsgVoteAmino) => _119.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _119.MsgVoteWeighted) => _119.MsgVoteWeightedAmino;
                    fromAmino: (object: _119.MsgVoteWeightedAmino) => _119.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _119.MsgDeposit) => _119.MsgDepositAmino;
                    fromAmino: (object: _119.MsgDepositAmino) => _119.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _119.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.MsgSubmitProposal;
                fromPartial(object: Partial<_119.MsgSubmitProposal>): _119.MsgSubmitProposal;
                fromAmino(object: _119.MsgSubmitProposalAmino): _119.MsgSubmitProposal;
                toAmino(message: _119.MsgSubmitProposal): _119.MsgSubmitProposalAmino;
                fromAminoMsg(object: _119.MsgSubmitProposalAminoMsg): _119.MsgSubmitProposal;
                toAminoMsg(message: _119.MsgSubmitProposal): _119.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _119.MsgSubmitProposalProtoMsg): _119.MsgSubmitProposal;
                toProto(message: _119.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _119.MsgSubmitProposal): _119.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _119.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_119.MsgSubmitProposalResponse>): _119.MsgSubmitProposalResponse;
                fromAmino(object: _119.MsgSubmitProposalResponseAmino): _119.MsgSubmitProposalResponse;
                toAmino(message: _119.MsgSubmitProposalResponse): _119.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _119.MsgSubmitProposalResponseAminoMsg): _119.MsgSubmitProposalResponse;
                toAminoMsg(message: _119.MsgSubmitProposalResponse): _119.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _119.MsgSubmitProposalResponseProtoMsg): _119.MsgSubmitProposalResponse;
                toProto(message: _119.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _119.MsgSubmitProposalResponse): _119.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _119.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.MsgExecLegacyContent;
                fromPartial(object: Partial<_119.MsgExecLegacyContent>): _119.MsgExecLegacyContent;
                fromAmino(object: _119.MsgExecLegacyContentAmino): _119.MsgExecLegacyContent;
                toAmino(message: _119.MsgExecLegacyContent): _119.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _119.MsgExecLegacyContentAminoMsg): _119.MsgExecLegacyContent;
                toAminoMsg(message: _119.MsgExecLegacyContent): _119.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _119.MsgExecLegacyContentProtoMsg): _119.MsgExecLegacyContent;
                toProto(message: _119.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _119.MsgExecLegacyContent): _119.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _119.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _119.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_119.MsgExecLegacyContentResponse>): _119.MsgExecLegacyContentResponse;
                fromAmino(_: _119.MsgExecLegacyContentResponseAmino): _119.MsgExecLegacyContentResponse;
                toAmino(_: _119.MsgExecLegacyContentResponse): _119.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _119.MsgExecLegacyContentResponseAminoMsg): _119.MsgExecLegacyContentResponse;
                toAminoMsg(message: _119.MsgExecLegacyContentResponse): _119.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _119.MsgExecLegacyContentResponseProtoMsg): _119.MsgExecLegacyContentResponse;
                toProto(message: _119.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _119.MsgExecLegacyContentResponse): _119.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _119.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.MsgVote;
                fromPartial(object: Partial<_119.MsgVote>): _119.MsgVote;
                fromAmino(object: _119.MsgVoteAmino): _119.MsgVote;
                toAmino(message: _119.MsgVote): _119.MsgVoteAmino;
                fromAminoMsg(object: _119.MsgVoteAminoMsg): _119.MsgVote;
                toAminoMsg(message: _119.MsgVote): _119.MsgVoteAminoMsg;
                fromProtoMsg(message: _119.MsgVoteProtoMsg): _119.MsgVote;
                toProto(message: _119.MsgVote): Uint8Array;
                toProtoMsg(message: _119.MsgVote): _119.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _119.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _119.MsgVoteResponse;
                fromPartial(_: Partial<_119.MsgVoteResponse>): _119.MsgVoteResponse;
                fromAmino(_: _119.MsgVoteResponseAmino): _119.MsgVoteResponse;
                toAmino(_: _119.MsgVoteResponse): _119.MsgVoteResponseAmino;
                fromAminoMsg(object: _119.MsgVoteResponseAminoMsg): _119.MsgVoteResponse;
                toAminoMsg(message: _119.MsgVoteResponse): _119.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _119.MsgVoteResponseProtoMsg): _119.MsgVoteResponse;
                toProto(message: _119.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _119.MsgVoteResponse): _119.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _119.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.MsgVoteWeighted;
                fromPartial(object: Partial<_119.MsgVoteWeighted>): _119.MsgVoteWeighted;
                fromAmino(object: _119.MsgVoteWeightedAmino): _119.MsgVoteWeighted;
                toAmino(message: _119.MsgVoteWeighted): _119.MsgVoteWeightedAmino;
                fromAminoMsg(object: _119.MsgVoteWeightedAminoMsg): _119.MsgVoteWeighted;
                toAminoMsg(message: _119.MsgVoteWeighted): _119.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _119.MsgVoteWeightedProtoMsg): _119.MsgVoteWeighted;
                toProto(message: _119.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _119.MsgVoteWeighted): _119.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _119.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _119.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_119.MsgVoteWeightedResponse>): _119.MsgVoteWeightedResponse;
                fromAmino(_: _119.MsgVoteWeightedResponseAmino): _119.MsgVoteWeightedResponse;
                toAmino(_: _119.MsgVoteWeightedResponse): _119.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _119.MsgVoteWeightedResponseAminoMsg): _119.MsgVoteWeightedResponse;
                toAminoMsg(message: _119.MsgVoteWeightedResponse): _119.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _119.MsgVoteWeightedResponseProtoMsg): _119.MsgVoteWeightedResponse;
                toProto(message: _119.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _119.MsgVoteWeightedResponse): _119.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _119.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.MsgDeposit;
                fromPartial(object: Partial<_119.MsgDeposit>): _119.MsgDeposit;
                fromAmino(object: _119.MsgDepositAmino): _119.MsgDeposit;
                toAmino(message: _119.MsgDeposit): _119.MsgDepositAmino;
                fromAminoMsg(object: _119.MsgDepositAminoMsg): _119.MsgDeposit;
                toAminoMsg(message: _119.MsgDeposit): _119.MsgDepositAminoMsg;
                fromProtoMsg(message: _119.MsgDepositProtoMsg): _119.MsgDeposit;
                toProto(message: _119.MsgDeposit): Uint8Array;
                toProtoMsg(message: _119.MsgDeposit): _119.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _119.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _119.MsgDepositResponse;
                fromPartial(_: Partial<_119.MsgDepositResponse>): _119.MsgDepositResponse;
                fromAmino(_: _119.MsgDepositResponseAmino): _119.MsgDepositResponse;
                toAmino(_: _119.MsgDepositResponse): _119.MsgDepositResponseAmino;
                fromAminoMsg(object: _119.MsgDepositResponseAminoMsg): _119.MsgDepositResponse;
                toAminoMsg(message: _119.MsgDepositResponse): _119.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _119.MsgDepositResponseProtoMsg): _119.MsgDepositResponse;
                toProto(message: _119.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _119.MsgDepositResponse): _119.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _121.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _118.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryProposalRequest;
                fromPartial(object: Partial<_118.QueryProposalRequest>): _118.QueryProposalRequest;
                fromAmino(object: _118.QueryProposalRequestAmino): _118.QueryProposalRequest;
                toAmino(message: _118.QueryProposalRequest): _118.QueryProposalRequestAmino;
                fromAminoMsg(object: _118.QueryProposalRequestAminoMsg): _118.QueryProposalRequest;
                toAminoMsg(message: _118.QueryProposalRequest): _118.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _118.QueryProposalRequestProtoMsg): _118.QueryProposalRequest;
                toProto(message: _118.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _118.QueryProposalRequest): _118.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _118.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryProposalResponse;
                fromPartial(object: Partial<_118.QueryProposalResponse>): _118.QueryProposalResponse;
                fromAmino(object: _118.QueryProposalResponseAmino): _118.QueryProposalResponse;
                toAmino(message: _118.QueryProposalResponse): _118.QueryProposalResponseAmino;
                fromAminoMsg(object: _118.QueryProposalResponseAminoMsg): _118.QueryProposalResponse;
                toAminoMsg(message: _118.QueryProposalResponse): _118.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _118.QueryProposalResponseProtoMsg): _118.QueryProposalResponse;
                toProto(message: _118.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _118.QueryProposalResponse): _118.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _118.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryProposalsRequest;
                fromPartial(object: Partial<_118.QueryProposalsRequest>): _118.QueryProposalsRequest;
                fromAmino(object: _118.QueryProposalsRequestAmino): _118.QueryProposalsRequest;
                toAmino(message: _118.QueryProposalsRequest): _118.QueryProposalsRequestAmino;
                fromAminoMsg(object: _118.QueryProposalsRequestAminoMsg): _118.QueryProposalsRequest;
                toAminoMsg(message: _118.QueryProposalsRequest): _118.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryProposalsRequestProtoMsg): _118.QueryProposalsRequest;
                toProto(message: _118.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryProposalsRequest): _118.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _118.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryProposalsResponse;
                fromPartial(object: Partial<_118.QueryProposalsResponse>): _118.QueryProposalsResponse;
                fromAmino(object: _118.QueryProposalsResponseAmino): _118.QueryProposalsResponse;
                toAmino(message: _118.QueryProposalsResponse): _118.QueryProposalsResponseAmino;
                fromAminoMsg(object: _118.QueryProposalsResponseAminoMsg): _118.QueryProposalsResponse;
                toAminoMsg(message: _118.QueryProposalsResponse): _118.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryProposalsResponseProtoMsg): _118.QueryProposalsResponse;
                toProto(message: _118.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryProposalsResponse): _118.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _118.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryVoteRequest;
                fromPartial(object: Partial<_118.QueryVoteRequest>): _118.QueryVoteRequest;
                fromAmino(object: _118.QueryVoteRequestAmino): _118.QueryVoteRequest;
                toAmino(message: _118.QueryVoteRequest): _118.QueryVoteRequestAmino;
                fromAminoMsg(object: _118.QueryVoteRequestAminoMsg): _118.QueryVoteRequest;
                toAminoMsg(message: _118.QueryVoteRequest): _118.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _118.QueryVoteRequestProtoMsg): _118.QueryVoteRequest;
                toProto(message: _118.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _118.QueryVoteRequest): _118.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _118.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryVoteResponse;
                fromPartial(object: Partial<_118.QueryVoteResponse>): _118.QueryVoteResponse;
                fromAmino(object: _118.QueryVoteResponseAmino): _118.QueryVoteResponse;
                toAmino(message: _118.QueryVoteResponse): _118.QueryVoteResponseAmino;
                fromAminoMsg(object: _118.QueryVoteResponseAminoMsg): _118.QueryVoteResponse;
                toAminoMsg(message: _118.QueryVoteResponse): _118.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _118.QueryVoteResponseProtoMsg): _118.QueryVoteResponse;
                toProto(message: _118.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _118.QueryVoteResponse): _118.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _118.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryVotesRequest;
                fromPartial(object: Partial<_118.QueryVotesRequest>): _118.QueryVotesRequest;
                fromAmino(object: _118.QueryVotesRequestAmino): _118.QueryVotesRequest;
                toAmino(message: _118.QueryVotesRequest): _118.QueryVotesRequestAmino;
                fromAminoMsg(object: _118.QueryVotesRequestAminoMsg): _118.QueryVotesRequest;
                toAminoMsg(message: _118.QueryVotesRequest): _118.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _118.QueryVotesRequestProtoMsg): _118.QueryVotesRequest;
                toProto(message: _118.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _118.QueryVotesRequest): _118.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _118.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryVotesResponse;
                fromPartial(object: Partial<_118.QueryVotesResponse>): _118.QueryVotesResponse;
                fromAmino(object: _118.QueryVotesResponseAmino): _118.QueryVotesResponse;
                toAmino(message: _118.QueryVotesResponse): _118.QueryVotesResponseAmino;
                fromAminoMsg(object: _118.QueryVotesResponseAminoMsg): _118.QueryVotesResponse;
                toAminoMsg(message: _118.QueryVotesResponse): _118.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _118.QueryVotesResponseProtoMsg): _118.QueryVotesResponse;
                toProto(message: _118.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _118.QueryVotesResponse): _118.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _118.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryParamsRequest;
                fromPartial(object: Partial<_118.QueryParamsRequest>): _118.QueryParamsRequest;
                fromAmino(object: _118.QueryParamsRequestAmino): _118.QueryParamsRequest;
                toAmino(message: _118.QueryParamsRequest): _118.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _118.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDepositRequest;
                fromPartial(object: Partial<_118.QueryDepositRequest>): _118.QueryDepositRequest;
                fromAmino(object: _118.QueryDepositRequestAmino): _118.QueryDepositRequest;
                toAmino(message: _118.QueryDepositRequest): _118.QueryDepositRequestAmino;
                fromAminoMsg(object: _118.QueryDepositRequestAminoMsg): _118.QueryDepositRequest;
                toAminoMsg(message: _118.QueryDepositRequest): _118.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _118.QueryDepositRequestProtoMsg): _118.QueryDepositRequest;
                toProto(message: _118.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _118.QueryDepositRequest): _118.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _118.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDepositResponse;
                fromPartial(object: Partial<_118.QueryDepositResponse>): _118.QueryDepositResponse;
                fromAmino(object: _118.QueryDepositResponseAmino): _118.QueryDepositResponse;
                toAmino(message: _118.QueryDepositResponse): _118.QueryDepositResponseAmino;
                fromAminoMsg(object: _118.QueryDepositResponseAminoMsg): _118.QueryDepositResponse;
                toAminoMsg(message: _118.QueryDepositResponse): _118.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _118.QueryDepositResponseProtoMsg): _118.QueryDepositResponse;
                toProto(message: _118.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _118.QueryDepositResponse): _118.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _118.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDepositsRequest;
                fromPartial(object: Partial<_118.QueryDepositsRequest>): _118.QueryDepositsRequest;
                fromAmino(object: _118.QueryDepositsRequestAmino): _118.QueryDepositsRequest;
                toAmino(message: _118.QueryDepositsRequest): _118.QueryDepositsRequestAmino;
                fromAminoMsg(object: _118.QueryDepositsRequestAminoMsg): _118.QueryDepositsRequest;
                toAminoMsg(message: _118.QueryDepositsRequest): _118.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryDepositsRequestProtoMsg): _118.QueryDepositsRequest;
                toProto(message: _118.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryDepositsRequest): _118.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _118.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryDepositsResponse;
                fromPartial(object: Partial<_118.QueryDepositsResponse>): _118.QueryDepositsResponse;
                fromAmino(object: _118.QueryDepositsResponseAmino): _118.QueryDepositsResponse;
                toAmino(message: _118.QueryDepositsResponse): _118.QueryDepositsResponseAmino;
                fromAminoMsg(object: _118.QueryDepositsResponseAminoMsg): _118.QueryDepositsResponse;
                toAminoMsg(message: _118.QueryDepositsResponse): _118.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryDepositsResponseProtoMsg): _118.QueryDepositsResponse;
                toProto(message: _118.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryDepositsResponse): _118.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _118.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryTallyResultRequest;
                fromPartial(object: Partial<_118.QueryTallyResultRequest>): _118.QueryTallyResultRequest;
                fromAmino(object: _118.QueryTallyResultRequestAmino): _118.QueryTallyResultRequest;
                toAmino(message: _118.QueryTallyResultRequest): _118.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _118.QueryTallyResultRequestAminoMsg): _118.QueryTallyResultRequest;
                toAminoMsg(message: _118.QueryTallyResultRequest): _118.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _118.QueryTallyResultRequestProtoMsg): _118.QueryTallyResultRequest;
                toProto(message: _118.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _118.QueryTallyResultRequest): _118.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _118.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryTallyResultResponse;
                fromPartial(object: Partial<_118.QueryTallyResultResponse>): _118.QueryTallyResultResponse;
                fromAmino(object: _118.QueryTallyResultResponseAmino): _118.QueryTallyResultResponse;
                toAmino(message: _118.QueryTallyResultResponse): _118.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _118.QueryTallyResultResponseAminoMsg): _118.QueryTallyResultResponse;
                toAminoMsg(message: _118.QueryTallyResultResponse): _118.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _118.QueryTallyResultResponseProtoMsg): _118.QueryTallyResultResponse;
                toProto(message: _118.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _118.QueryTallyResultResponse): _118.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _117.VoteOption;
            voteOptionToJSON(object: _117.VoteOption): string;
            proposalStatusFromJSON(object: any): _117.ProposalStatus;
            proposalStatusToJSON(object: _117.ProposalStatus): string;
            VoteOption: typeof _117.VoteOption;
            VoteOptionSDKType: typeof _117.VoteOption;
            VoteOptionAmino: typeof _117.VoteOption;
            ProposalStatus: typeof _117.ProposalStatus;
            ProposalStatusSDKType: typeof _117.ProposalStatus;
            ProposalStatusAmino: typeof _117.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _117.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.WeightedVoteOption;
                fromPartial(object: Partial<_117.WeightedVoteOption>): _117.WeightedVoteOption;
                fromAmino(object: _117.WeightedVoteOptionAmino): _117.WeightedVoteOption;
                toAmino(message: _117.WeightedVoteOption): _117.WeightedVoteOptionAmino;
                fromAminoMsg(object: _117.WeightedVoteOptionAminoMsg): _117.WeightedVoteOption;
                toAminoMsg(message: _117.WeightedVoteOption): _117.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _117.WeightedVoteOptionProtoMsg): _117.WeightedVoteOption;
                toProto(message: _117.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _117.WeightedVoteOption): _117.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _117.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Deposit;
                fromPartial(object: Partial<_117.Deposit>): _117.Deposit;
                fromAmino(object: _117.DepositAmino): _117.Deposit;
                toAmino(message: _117.Deposit): _117.DepositAmino;
                fromAminoMsg(object: _117.DepositAminoMsg): _117.Deposit;
                toAminoMsg(message: _117.Deposit): _117.DepositAminoMsg;
                fromProtoMsg(message: _117.DepositProtoMsg): _117.Deposit;
                toProto(message: _117.Deposit): Uint8Array;
                toProtoMsg(message: _117.Deposit): _117.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _117.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Proposal;
                fromPartial(object: Partial<_117.Proposal>): _117.Proposal;
                fromAmino(object: _117.ProposalAmino): _117.Proposal;
                toAmino(message: _117.Proposal): _117.ProposalAmino;
                fromAminoMsg(object: _117.ProposalAminoMsg): _117.Proposal;
                toAminoMsg(message: _117.Proposal): _117.ProposalAminoMsg;
                fromProtoMsg(message: _117.ProposalProtoMsg): _117.Proposal;
                toProto(message: _117.Proposal): Uint8Array;
                toProtoMsg(message: _117.Proposal): _117.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _117.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TallyResult;
                fromPartial(object: Partial<_117.TallyResult>): _117.TallyResult;
                fromAmino(object: _117.TallyResultAmino): _117.TallyResult;
                toAmino(message: _117.TallyResult): _117.TallyResultAmino;
                fromAminoMsg(object: _117.TallyResultAminoMsg): _117.TallyResult;
                toAminoMsg(message: _117.TallyResult): _117.TallyResultAminoMsg;
                fromProtoMsg(message: _117.TallyResultProtoMsg): _117.TallyResult;
                toProto(message: _117.TallyResult): Uint8Array;
                toProtoMsg(message: _117.TallyResult): _117.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _117.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Vote;
                fromPartial(object: Partial<_117.Vote>): _117.Vote;
                fromAmino(object: _117.VoteAmino): _117.Vote;
                toAmino(message: _117.Vote): _117.VoteAmino;
                fromAminoMsg(object: _117.VoteAminoMsg): _117.Vote;
                toAminoMsg(message: _117.Vote): _117.VoteAminoMsg;
                fromProtoMsg(message: _117.VoteProtoMsg): _117.Vote;
                toProto(message: _117.Vote): Uint8Array;
                toProtoMsg(message: _117.Vote): _117.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _117.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.DepositParams;
                fromPartial(object: Partial<_117.DepositParams>): _117.DepositParams;
                fromAmino(object: _117.DepositParamsAmino): _117.DepositParams;
                toAmino(message: _117.DepositParams): _117.DepositParamsAmino;
                fromAminoMsg(object: _117.DepositParamsAminoMsg): _117.DepositParams;
                toAminoMsg(message: _117.DepositParams): _117.DepositParamsAminoMsg;
                fromProtoMsg(message: _117.DepositParamsProtoMsg): _117.DepositParams;
                toProto(message: _117.DepositParams): Uint8Array;
                toProtoMsg(message: _117.DepositParams): _117.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _117.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.VotingParams;
                fromPartial(object: Partial<_117.VotingParams>): _117.VotingParams;
                fromAmino(object: _117.VotingParamsAmino): _117.VotingParams;
                toAmino(message: _117.VotingParams): _117.VotingParamsAmino;
                fromAminoMsg(object: _117.VotingParamsAminoMsg): _117.VotingParams;
                toAminoMsg(message: _117.VotingParams): _117.VotingParamsAminoMsg;
                fromProtoMsg(message: _117.VotingParamsProtoMsg): _117.VotingParams;
                toProto(message: _117.VotingParams): Uint8Array;
                toProtoMsg(message: _117.VotingParams): _117.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _117.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TallyParams;
                fromPartial(object: Partial<_117.TallyParams>): _117.TallyParams;
                fromAmino(object: _117.TallyParamsAmino): _117.TallyParams;
                toAmino(message: _117.TallyParams): _117.TallyParamsAmino;
                fromAminoMsg(object: _117.TallyParamsAminoMsg): _117.TallyParams;
                toAminoMsg(message: _117.TallyParams): _117.TallyParamsAminoMsg;
                fromProtoMsg(message: _117.TallyParamsProtoMsg): _117.TallyParams;
                toProto(message: _117.TallyParams): Uint8Array;
                toProtoMsg(message: _117.TallyParams): _117.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _116.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GenesisState;
                fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
                fromAmino(object: _116.GenesisStateAmino): _116.GenesisState;
                toAmino(message: _116.GenesisState): _116.GenesisStateAmino;
                fromAminoMsg(object: _116.GenesisStateAminoMsg): _116.GenesisState;
                toAminoMsg(message: _116.GenesisState): _116.GenesisStateAminoMsg;
                fromProtoMsg(message: _116.GenesisStateProtoMsg): _116.GenesisState;
                toProto(message: _116.GenesisState): Uint8Array;
                toProtoMsg(message: _116.GenesisState): _116.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _326.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _122.QueryProposalRequest): Promise<_122.QueryProposalResponse>;
                proposals(request: _122.QueryProposalsRequest): Promise<_122.QueryProposalsResponse>;
                vote(request: _122.QueryVoteRequest): Promise<_122.QueryVoteResponse>;
                votes(request: _122.QueryVotesRequest): Promise<_122.QueryVotesResponse>;
                params(request: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                deposit(request: _122.QueryDepositRequest): Promise<_122.QueryDepositResponse>;
                deposits(request: _122.QueryDepositsRequest): Promise<_122.QueryDepositsResponse>;
                tallyResult(request: _122.QueryTallyResultRequest): Promise<_122.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _291.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _123.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _123.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _123.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _123.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _123.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _123.MsgSubmitProposal;
                    };
                    vote(value: _123.MsgVote): {
                        typeUrl: string;
                        value: _123.MsgVote;
                    };
                    voteWeighted(value: _123.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _123.MsgVoteWeighted;
                    };
                    deposit(value: _123.MsgDeposit): {
                        typeUrl: string;
                        value: _123.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _123.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _123.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _123.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _123.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _123.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _123.MsgSubmitProposal;
                    };
                    vote(value: _123.MsgVote): {
                        typeUrl: string;
                        value: _123.MsgVote;
                    };
                    voteWeighted(value: _123.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _123.MsgVoteWeighted;
                    };
                    deposit(value: _123.MsgDeposit): {
                        typeUrl: string;
                        value: _123.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _123.MsgSubmitProposal) => _123.MsgSubmitProposalAmino;
                    fromAmino: (object: _123.MsgSubmitProposalAmino) => _123.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _123.MsgVote) => _123.MsgVoteAmino;
                    fromAmino: (object: _123.MsgVoteAmino) => _123.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _123.MsgVoteWeighted) => _123.MsgVoteWeightedAmino;
                    fromAmino: (object: _123.MsgVoteWeightedAmino) => _123.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _123.MsgDeposit) => _123.MsgDepositAmino;
                    fromAmino: (object: _123.MsgDepositAmino) => _123.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _123.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgSubmitProposal;
                fromPartial(object: Partial<_123.MsgSubmitProposal>): _123.MsgSubmitProposal;
                fromAmino(object: _123.MsgSubmitProposalAmino): _123.MsgSubmitProposal;
                toAmino(message: _123.MsgSubmitProposal): _123.MsgSubmitProposalAmino;
                fromAminoMsg(object: _123.MsgSubmitProposalAminoMsg): _123.MsgSubmitProposal;
                toAminoMsg(message: _123.MsgSubmitProposal): _123.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _123.MsgSubmitProposalProtoMsg): _123.MsgSubmitProposal;
                toProto(message: _123.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _123.MsgSubmitProposal): _123.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _123.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_123.MsgSubmitProposalResponse>): _123.MsgSubmitProposalResponse;
                fromAmino(object: _123.MsgSubmitProposalResponseAmino): _123.MsgSubmitProposalResponse;
                toAmino(message: _123.MsgSubmitProposalResponse): _123.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _123.MsgSubmitProposalResponseAminoMsg): _123.MsgSubmitProposalResponse;
                toAminoMsg(message: _123.MsgSubmitProposalResponse): _123.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _123.MsgSubmitProposalResponseProtoMsg): _123.MsgSubmitProposalResponse;
                toProto(message: _123.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _123.MsgSubmitProposalResponse): _123.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _123.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgVote;
                fromPartial(object: Partial<_123.MsgVote>): _123.MsgVote;
                fromAmino(object: _123.MsgVoteAmino): _123.MsgVote;
                toAmino(message: _123.MsgVote): _123.MsgVoteAmino;
                fromAminoMsg(object: _123.MsgVoteAminoMsg): _123.MsgVote;
                toAminoMsg(message: _123.MsgVote): _123.MsgVoteAminoMsg;
                fromProtoMsg(message: _123.MsgVoteProtoMsg): _123.MsgVote;
                toProto(message: _123.MsgVote): Uint8Array;
                toProtoMsg(message: _123.MsgVote): _123.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _123.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgVoteResponse;
                fromPartial(_: Partial<_123.MsgVoteResponse>): _123.MsgVoteResponse;
                fromAmino(_: _123.MsgVoteResponseAmino): _123.MsgVoteResponse;
                toAmino(_: _123.MsgVoteResponse): _123.MsgVoteResponseAmino;
                fromAminoMsg(object: _123.MsgVoteResponseAminoMsg): _123.MsgVoteResponse;
                toAminoMsg(message: _123.MsgVoteResponse): _123.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _123.MsgVoteResponseProtoMsg): _123.MsgVoteResponse;
                toProto(message: _123.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _123.MsgVoteResponse): _123.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _123.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgVoteWeighted;
                fromPartial(object: Partial<_123.MsgVoteWeighted>): _123.MsgVoteWeighted;
                fromAmino(object: _123.MsgVoteWeightedAmino): _123.MsgVoteWeighted;
                toAmino(message: _123.MsgVoteWeighted): _123.MsgVoteWeightedAmino;
                fromAminoMsg(object: _123.MsgVoteWeightedAminoMsg): _123.MsgVoteWeighted;
                toAminoMsg(message: _123.MsgVoteWeighted): _123.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _123.MsgVoteWeightedProtoMsg): _123.MsgVoteWeighted;
                toProto(message: _123.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _123.MsgVoteWeighted): _123.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _123.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_123.MsgVoteWeightedResponse>): _123.MsgVoteWeightedResponse;
                fromAmino(_: _123.MsgVoteWeightedResponseAmino): _123.MsgVoteWeightedResponse;
                toAmino(_: _123.MsgVoteWeightedResponse): _123.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _123.MsgVoteWeightedResponseAminoMsg): _123.MsgVoteWeightedResponse;
                toAminoMsg(message: _123.MsgVoteWeightedResponse): _123.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _123.MsgVoteWeightedResponseProtoMsg): _123.MsgVoteWeightedResponse;
                toProto(message: _123.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _123.MsgVoteWeightedResponse): _123.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _123.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgDeposit;
                fromPartial(object: Partial<_123.MsgDeposit>): _123.MsgDeposit;
                fromAmino(object: _123.MsgDepositAmino): _123.MsgDeposit;
                toAmino(message: _123.MsgDeposit): _123.MsgDepositAmino;
                fromAminoMsg(object: _123.MsgDepositAminoMsg): _123.MsgDeposit;
                toAminoMsg(message: _123.MsgDeposit): _123.MsgDepositAminoMsg;
                fromProtoMsg(message: _123.MsgDepositProtoMsg): _123.MsgDeposit;
                toProto(message: _123.MsgDeposit): Uint8Array;
                toProtoMsg(message: _123.MsgDeposit): _123.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _123.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgDepositResponse;
                fromPartial(_: Partial<_123.MsgDepositResponse>): _123.MsgDepositResponse;
                fromAmino(_: _123.MsgDepositResponseAmino): _123.MsgDepositResponse;
                toAmino(_: _123.MsgDepositResponse): _123.MsgDepositResponseAmino;
                fromAminoMsg(object: _123.MsgDepositResponseAminoMsg): _123.MsgDepositResponse;
                toAminoMsg(message: _123.MsgDepositResponse): _123.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _123.MsgDepositResponseProtoMsg): _123.MsgDepositResponse;
                toProto(message: _123.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _123.MsgDepositResponse): _123.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _121.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _122.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryProposalRequest;
                fromPartial(object: Partial<_122.QueryProposalRequest>): _122.QueryProposalRequest;
                fromAmino(object: _122.QueryProposalRequestAmino): _122.QueryProposalRequest;
                toAmino(message: _122.QueryProposalRequest): _122.QueryProposalRequestAmino;
                fromAminoMsg(object: _122.QueryProposalRequestAminoMsg): _122.QueryProposalRequest;
                toAminoMsg(message: _122.QueryProposalRequest): _122.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _122.QueryProposalRequestProtoMsg): _122.QueryProposalRequest;
                toProto(message: _122.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _122.QueryProposalRequest): _122.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _122.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryProposalResponse;
                fromPartial(object: Partial<_122.QueryProposalResponse>): _122.QueryProposalResponse;
                fromAmino(object: _122.QueryProposalResponseAmino): _122.QueryProposalResponse;
                toAmino(message: _122.QueryProposalResponse): _122.QueryProposalResponseAmino;
                fromAminoMsg(object: _122.QueryProposalResponseAminoMsg): _122.QueryProposalResponse;
                toAminoMsg(message: _122.QueryProposalResponse): _122.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _122.QueryProposalResponseProtoMsg): _122.QueryProposalResponse;
                toProto(message: _122.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _122.QueryProposalResponse): _122.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _122.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryProposalsRequest;
                fromPartial(object: Partial<_122.QueryProposalsRequest>): _122.QueryProposalsRequest;
                fromAmino(object: _122.QueryProposalsRequestAmino): _122.QueryProposalsRequest;
                toAmino(message: _122.QueryProposalsRequest): _122.QueryProposalsRequestAmino;
                fromAminoMsg(object: _122.QueryProposalsRequestAminoMsg): _122.QueryProposalsRequest;
                toAminoMsg(message: _122.QueryProposalsRequest): _122.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryProposalsRequestProtoMsg): _122.QueryProposalsRequest;
                toProto(message: _122.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryProposalsRequest): _122.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _122.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryProposalsResponse;
                fromPartial(object: Partial<_122.QueryProposalsResponse>): _122.QueryProposalsResponse;
                fromAmino(object: _122.QueryProposalsResponseAmino): _122.QueryProposalsResponse;
                toAmino(message: _122.QueryProposalsResponse): _122.QueryProposalsResponseAmino;
                fromAminoMsg(object: _122.QueryProposalsResponseAminoMsg): _122.QueryProposalsResponse;
                toAminoMsg(message: _122.QueryProposalsResponse): _122.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryProposalsResponseProtoMsg): _122.QueryProposalsResponse;
                toProto(message: _122.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryProposalsResponse): _122.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _122.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryVoteRequest;
                fromPartial(object: Partial<_122.QueryVoteRequest>): _122.QueryVoteRequest;
                fromAmino(object: _122.QueryVoteRequestAmino): _122.QueryVoteRequest;
                toAmino(message: _122.QueryVoteRequest): _122.QueryVoteRequestAmino;
                fromAminoMsg(object: _122.QueryVoteRequestAminoMsg): _122.QueryVoteRequest;
                toAminoMsg(message: _122.QueryVoteRequest): _122.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _122.QueryVoteRequestProtoMsg): _122.QueryVoteRequest;
                toProto(message: _122.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _122.QueryVoteRequest): _122.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _122.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryVoteResponse;
                fromPartial(object: Partial<_122.QueryVoteResponse>): _122.QueryVoteResponse;
                fromAmino(object: _122.QueryVoteResponseAmino): _122.QueryVoteResponse;
                toAmino(message: _122.QueryVoteResponse): _122.QueryVoteResponseAmino;
                fromAminoMsg(object: _122.QueryVoteResponseAminoMsg): _122.QueryVoteResponse;
                toAminoMsg(message: _122.QueryVoteResponse): _122.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _122.QueryVoteResponseProtoMsg): _122.QueryVoteResponse;
                toProto(message: _122.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _122.QueryVoteResponse): _122.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _122.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryVotesRequest;
                fromPartial(object: Partial<_122.QueryVotesRequest>): _122.QueryVotesRequest;
                fromAmino(object: _122.QueryVotesRequestAmino): _122.QueryVotesRequest;
                toAmino(message: _122.QueryVotesRequest): _122.QueryVotesRequestAmino;
                fromAminoMsg(object: _122.QueryVotesRequestAminoMsg): _122.QueryVotesRequest;
                toAminoMsg(message: _122.QueryVotesRequest): _122.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _122.QueryVotesRequestProtoMsg): _122.QueryVotesRequest;
                toProto(message: _122.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _122.QueryVotesRequest): _122.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _122.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryVotesResponse;
                fromPartial(object: Partial<_122.QueryVotesResponse>): _122.QueryVotesResponse;
                fromAmino(object: _122.QueryVotesResponseAmino): _122.QueryVotesResponse;
                toAmino(message: _122.QueryVotesResponse): _122.QueryVotesResponseAmino;
                fromAminoMsg(object: _122.QueryVotesResponseAminoMsg): _122.QueryVotesResponse;
                toAminoMsg(message: _122.QueryVotesResponse): _122.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _122.QueryVotesResponseProtoMsg): _122.QueryVotesResponse;
                toProto(message: _122.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _122.QueryVotesResponse): _122.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _122.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryParamsRequest;
                fromPartial(object: Partial<_122.QueryParamsRequest>): _122.QueryParamsRequest;
                fromAmino(object: _122.QueryParamsRequestAmino): _122.QueryParamsRequest;
                toAmino(message: _122.QueryParamsRequest): _122.QueryParamsRequestAmino;
                fromAminoMsg(object: _122.QueryParamsRequestAminoMsg): _122.QueryParamsRequest;
                toAminoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryParamsRequestProtoMsg): _122.QueryParamsRequest;
                toProto(message: _122.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _122.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryParamsResponse;
                fromPartial(object: Partial<_122.QueryParamsResponse>): _122.QueryParamsResponse;
                fromAmino(object: _122.QueryParamsResponseAmino): _122.QueryParamsResponse;
                toAmino(message: _122.QueryParamsResponse): _122.QueryParamsResponseAmino;
                fromAminoMsg(object: _122.QueryParamsResponseAminoMsg): _122.QueryParamsResponse;
                toAminoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryParamsResponseProtoMsg): _122.QueryParamsResponse;
                toProto(message: _122.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _122.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDepositRequest;
                fromPartial(object: Partial<_122.QueryDepositRequest>): _122.QueryDepositRequest;
                fromAmino(object: _122.QueryDepositRequestAmino): _122.QueryDepositRequest;
                toAmino(message: _122.QueryDepositRequest): _122.QueryDepositRequestAmino;
                fromAminoMsg(object: _122.QueryDepositRequestAminoMsg): _122.QueryDepositRequest;
                toAminoMsg(message: _122.QueryDepositRequest): _122.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _122.QueryDepositRequestProtoMsg): _122.QueryDepositRequest;
                toProto(message: _122.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _122.QueryDepositRequest): _122.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _122.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDepositResponse;
                fromPartial(object: Partial<_122.QueryDepositResponse>): _122.QueryDepositResponse;
                fromAmino(object: _122.QueryDepositResponseAmino): _122.QueryDepositResponse;
                toAmino(message: _122.QueryDepositResponse): _122.QueryDepositResponseAmino;
                fromAminoMsg(object: _122.QueryDepositResponseAminoMsg): _122.QueryDepositResponse;
                toAminoMsg(message: _122.QueryDepositResponse): _122.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _122.QueryDepositResponseProtoMsg): _122.QueryDepositResponse;
                toProto(message: _122.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _122.QueryDepositResponse): _122.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _122.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDepositsRequest;
                fromPartial(object: Partial<_122.QueryDepositsRequest>): _122.QueryDepositsRequest;
                fromAmino(object: _122.QueryDepositsRequestAmino): _122.QueryDepositsRequest;
                toAmino(message: _122.QueryDepositsRequest): _122.QueryDepositsRequestAmino;
                fromAminoMsg(object: _122.QueryDepositsRequestAminoMsg): _122.QueryDepositsRequest;
                toAminoMsg(message: _122.QueryDepositsRequest): _122.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryDepositsRequestProtoMsg): _122.QueryDepositsRequest;
                toProto(message: _122.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryDepositsRequest): _122.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _122.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDepositsResponse;
                fromPartial(object: Partial<_122.QueryDepositsResponse>): _122.QueryDepositsResponse;
                fromAmino(object: _122.QueryDepositsResponseAmino): _122.QueryDepositsResponse;
                toAmino(message: _122.QueryDepositsResponse): _122.QueryDepositsResponseAmino;
                fromAminoMsg(object: _122.QueryDepositsResponseAminoMsg): _122.QueryDepositsResponse;
                toAminoMsg(message: _122.QueryDepositsResponse): _122.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryDepositsResponseProtoMsg): _122.QueryDepositsResponse;
                toProto(message: _122.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryDepositsResponse): _122.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _122.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryTallyResultRequest;
                fromPartial(object: Partial<_122.QueryTallyResultRequest>): _122.QueryTallyResultRequest;
                fromAmino(object: _122.QueryTallyResultRequestAmino): _122.QueryTallyResultRequest;
                toAmino(message: _122.QueryTallyResultRequest): _122.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _122.QueryTallyResultRequestAminoMsg): _122.QueryTallyResultRequest;
                toAminoMsg(message: _122.QueryTallyResultRequest): _122.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _122.QueryTallyResultRequestProtoMsg): _122.QueryTallyResultRequest;
                toProto(message: _122.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _122.QueryTallyResultRequest): _122.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _122.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryTallyResultResponse;
                fromPartial(object: Partial<_122.QueryTallyResultResponse>): _122.QueryTallyResultResponse;
                fromAmino(object: _122.QueryTallyResultResponseAmino): _122.QueryTallyResultResponse;
                toAmino(message: _122.QueryTallyResultResponse): _122.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _122.QueryTallyResultResponseAminoMsg): _122.QueryTallyResultResponse;
                toAminoMsg(message: _122.QueryTallyResultResponse): _122.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _122.QueryTallyResultResponseProtoMsg): _122.QueryTallyResultResponse;
                toProto(message: _122.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _122.QueryTallyResultResponse): _122.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _121.VoteOption;
            voteOptionToJSON(object: _121.VoteOption): string;
            proposalStatusFromJSON(object: any): _121.ProposalStatus;
            proposalStatusToJSON(object: _121.ProposalStatus): string;
            VoteOption: typeof _121.VoteOption;
            VoteOptionSDKType: typeof _121.VoteOption;
            VoteOptionAmino: typeof _121.VoteOption;
            ProposalStatus: typeof _121.ProposalStatus;
            ProposalStatusSDKType: typeof _121.ProposalStatus;
            ProposalStatusAmino: typeof _121.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _121.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.WeightedVoteOption;
                fromPartial(object: Partial<_121.WeightedVoteOption>): _121.WeightedVoteOption;
                fromAmino(object: _121.WeightedVoteOptionAmino): _121.WeightedVoteOption;
                toAmino(message: _121.WeightedVoteOption): _121.WeightedVoteOptionAmino;
                fromAminoMsg(object: _121.WeightedVoteOptionAminoMsg): _121.WeightedVoteOption;
                toAminoMsg(message: _121.WeightedVoteOption): _121.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _121.WeightedVoteOptionProtoMsg): _121.WeightedVoteOption;
                toProto(message: _121.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _121.WeightedVoteOption): _121.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _121.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.TextProposal;
                fromPartial(object: Partial<_121.TextProposal>): _121.TextProposal;
                fromAmino(object: _121.TextProposalAmino): _121.TextProposal;
                toAmino(message: _121.TextProposal): _121.TextProposalAmino;
                fromAminoMsg(object: _121.TextProposalAminoMsg): _121.TextProposal;
                toAminoMsg(message: _121.TextProposal): _121.TextProposalAminoMsg;
                fromProtoMsg(message: _121.TextProposalProtoMsg): _121.TextProposal;
                toProto(message: _121.TextProposal): Uint8Array;
                toProtoMsg(message: _121.TextProposal): _121.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _121.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.Deposit;
                fromPartial(object: Partial<_121.Deposit>): _121.Deposit;
                fromAmino(object: _121.DepositAmino): _121.Deposit;
                toAmino(message: _121.Deposit): _121.DepositAmino;
                fromAminoMsg(object: _121.DepositAminoMsg): _121.Deposit;
                toAminoMsg(message: _121.Deposit): _121.DepositAminoMsg;
                fromProtoMsg(message: _121.DepositProtoMsg): _121.Deposit;
                toProto(message: _121.Deposit): Uint8Array;
                toProtoMsg(message: _121.Deposit): _121.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _121.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.Proposal;
                fromPartial(object: Partial<_121.Proposal>): _121.Proposal;
                fromAmino(object: _121.ProposalAmino): _121.Proposal;
                toAmino(message: _121.Proposal): _121.ProposalAmino;
                fromAminoMsg(object: _121.ProposalAminoMsg): _121.Proposal;
                toAminoMsg(message: _121.Proposal): _121.ProposalAminoMsg;
                fromProtoMsg(message: _121.ProposalProtoMsg): _121.Proposal;
                toProto(message: _121.Proposal): Uint8Array;
                toProtoMsg(message: _121.Proposal): _121.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _121.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.TallyResult;
                fromPartial(object: Partial<_121.TallyResult>): _121.TallyResult;
                fromAmino(object: _121.TallyResultAmino): _121.TallyResult;
                toAmino(message: _121.TallyResult): _121.TallyResultAmino;
                fromAminoMsg(object: _121.TallyResultAminoMsg): _121.TallyResult;
                toAminoMsg(message: _121.TallyResult): _121.TallyResultAminoMsg;
                fromProtoMsg(message: _121.TallyResultProtoMsg): _121.TallyResult;
                toProto(message: _121.TallyResult): Uint8Array;
                toProtoMsg(message: _121.TallyResult): _121.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _121.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.Vote;
                fromPartial(object: Partial<_121.Vote>): _121.Vote;
                fromAmino(object: _121.VoteAmino): _121.Vote;
                toAmino(message: _121.Vote): _121.VoteAmino;
                fromAminoMsg(object: _121.VoteAminoMsg): _121.Vote;
                toAminoMsg(message: _121.Vote): _121.VoteAminoMsg;
                fromProtoMsg(message: _121.VoteProtoMsg): _121.Vote;
                toProto(message: _121.Vote): Uint8Array;
                toProtoMsg(message: _121.Vote): _121.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _121.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.DepositParams;
                fromPartial(object: Partial<_121.DepositParams>): _121.DepositParams;
                fromAmino(object: _121.DepositParamsAmino): _121.DepositParams;
                toAmino(message: _121.DepositParams): _121.DepositParamsAmino;
                fromAminoMsg(object: _121.DepositParamsAminoMsg): _121.DepositParams;
                toAminoMsg(message: _121.DepositParams): _121.DepositParamsAminoMsg;
                fromProtoMsg(message: _121.DepositParamsProtoMsg): _121.DepositParams;
                toProto(message: _121.DepositParams): Uint8Array;
                toProtoMsg(message: _121.DepositParams): _121.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _121.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.VotingParams;
                fromPartial(object: Partial<_121.VotingParams>): _121.VotingParams;
                fromAmino(object: _121.VotingParamsAmino): _121.VotingParams;
                toAmino(message: _121.VotingParams): _121.VotingParamsAmino;
                fromAminoMsg(object: _121.VotingParamsAminoMsg): _121.VotingParams;
                toAminoMsg(message: _121.VotingParams): _121.VotingParamsAminoMsg;
                fromProtoMsg(message: _121.VotingParamsProtoMsg): _121.VotingParams;
                toProto(message: _121.VotingParams): Uint8Array;
                toProtoMsg(message: _121.VotingParams): _121.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _121.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.TallyParams;
                fromPartial(object: Partial<_121.TallyParams>): _121.TallyParams;
                fromAmino(object: _121.TallyParamsAmino): _121.TallyParams;
                toAmino(message: _121.TallyParams): _121.TallyParamsAmino;
                fromAminoMsg(object: _121.TallyParamsAminoMsg): _121.TallyParams;
                toAminoMsg(message: _121.TallyParams): _121.TallyParamsAminoMsg;
                fromProtoMsg(message: _121.TallyParamsProtoMsg): _121.TallyParams;
                toProto(message: _121.TallyParams): Uint8Array;
                toProtoMsg(message: _121.TallyParams): _121.TallyParamsProtoMsg;
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
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _327.MsgClientImpl;
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _126.QueryGroupInfoRequest): Promise<_126.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _126.QueryGroupPolicyInfoRequest): Promise<_126.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _126.QueryGroupMembersRequest): Promise<_126.QueryGroupMembersResponse>;
                groupsByAdmin(request: _126.QueryGroupsByAdminRequest): Promise<_126.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _126.QueryGroupPoliciesByGroupRequest): Promise<_126.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _126.QueryGroupPoliciesByAdminRequest): Promise<_126.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _126.QueryProposalRequest): Promise<_126.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _126.QueryProposalsByGroupPolicyRequest): Promise<_126.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _126.QueryVoteByProposalVoterRequest): Promise<_126.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _126.QueryVotesByProposalRequest): Promise<_126.QueryVotesByProposalResponse>;
                votesByVoter(request: _126.QueryVotesByVoterRequest): Promise<_126.QueryVotesByVoterResponse>;
                groupsByMember(request: _126.QueryGroupsByMemberRequest): Promise<_126.QueryGroupsByMemberResponse>;
                tallyResult(request: _126.QueryTallyResultRequest): Promise<_126.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _292.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _127.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _127.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _127.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _127.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _127.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _127.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _127.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _127.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _127.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _127.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _127.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _127.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _127.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _127.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _127.MsgCreateGroup): {
                        typeUrl: string;
                        value: _127.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _127.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _127.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _127.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _127.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _127.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _127.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _127.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _127.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _127.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _127.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _127.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _127.MsgWithdrawProposal;
                    };
                    vote(value: _127.MsgVote): {
                        typeUrl: string;
                        value: _127.MsgVote;
                    };
                    exec(value: _127.MsgExec): {
                        typeUrl: string;
                        value: _127.MsgExec;
                    };
                    leaveGroup(value: _127.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _127.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _127.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _127.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _127.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _127.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _127.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _127.MsgCreateGroup): {
                        typeUrl: string;
                        value: _127.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _127.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _127.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _127.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _127.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _127.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _127.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _127.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _127.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _127.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _127.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _127.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _127.MsgWithdrawProposal;
                    };
                    vote(value: _127.MsgVote): {
                        typeUrl: string;
                        value: _127.MsgVote;
                    };
                    exec(value: _127.MsgExec): {
                        typeUrl: string;
                        value: _127.MsgExec;
                    };
                    leaveGroup(value: _127.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _127.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _127.MsgCreateGroup) => _127.MsgCreateGroupAmino;
                    fromAmino: (object: _127.MsgCreateGroupAmino) => _127.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _127.MsgUpdateGroupMembers) => _127.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _127.MsgUpdateGroupMembersAmino) => _127.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _127.MsgUpdateGroupAdmin) => _127.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _127.MsgUpdateGroupAdminAmino) => _127.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _127.MsgUpdateGroupMetadata) => _127.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _127.MsgUpdateGroupMetadataAmino) => _127.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _127.MsgCreateGroupPolicy) => _127.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _127.MsgCreateGroupPolicyAmino) => _127.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _127.MsgCreateGroupWithPolicy) => _127.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _127.MsgCreateGroupWithPolicyAmino) => _127.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _127.MsgUpdateGroupPolicyAdmin) => _127.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _127.MsgUpdateGroupPolicyAdminAmino) => _127.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _127.MsgUpdateGroupPolicyDecisionPolicy) => _127.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _127.MsgUpdateGroupPolicyDecisionPolicyAmino) => _127.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _127.MsgUpdateGroupPolicyMetadata) => _127.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _127.MsgUpdateGroupPolicyMetadataAmino) => _127.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _127.MsgSubmitProposal) => _127.MsgSubmitProposalAmino;
                    fromAmino: (object: _127.MsgSubmitProposalAmino) => _127.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _127.MsgWithdrawProposal) => _127.MsgWithdrawProposalAmino;
                    fromAmino: (object: _127.MsgWithdrawProposalAmino) => _127.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _127.MsgVote) => _127.MsgVoteAmino;
                    fromAmino: (object: _127.MsgVoteAmino) => _127.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _127.MsgExec) => _127.MsgExecAmino;
                    fromAmino: (object: _127.MsgExecAmino) => _127.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _127.MsgLeaveGroup) => _127.MsgLeaveGroupAmino;
                    fromAmino: (object: _127.MsgLeaveGroupAmino) => _127.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _128.VoteOption;
            voteOptionToJSON(object: _128.VoteOption): string;
            proposalStatusFromJSON(object: any): _128.ProposalStatus;
            proposalStatusToJSON(object: _128.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _128.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _128.ProposalExecutorResult): string;
            VoteOption: typeof _128.VoteOption;
            VoteOptionSDKType: typeof _128.VoteOption;
            VoteOptionAmino: typeof _128.VoteOption;
            ProposalStatus: typeof _128.ProposalStatus;
            ProposalStatusSDKType: typeof _128.ProposalStatus;
            ProposalStatusAmino: typeof _128.ProposalStatus;
            ProposalExecutorResult: typeof _128.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _128.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _128.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _128.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Member;
                fromPartial(object: Partial<_128.Member>): _128.Member;
                fromAmino(object: _128.MemberAmino): _128.Member;
                toAmino(message: _128.Member): _128.MemberAmino;
                fromAminoMsg(object: _128.MemberAminoMsg): _128.Member;
                toAminoMsg(message: _128.Member): _128.MemberAminoMsg;
                fromProtoMsg(message: _128.MemberProtoMsg): _128.Member;
                toProto(message: _128.Member): Uint8Array;
                toProtoMsg(message: _128.Member): _128.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _128.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MemberRequest;
                fromPartial(object: Partial<_128.MemberRequest>): _128.MemberRequest;
                fromAmino(object: _128.MemberRequestAmino): _128.MemberRequest;
                toAmino(message: _128.MemberRequest): _128.MemberRequestAmino;
                fromAminoMsg(object: _128.MemberRequestAminoMsg): _128.MemberRequest;
                toAminoMsg(message: _128.MemberRequest): _128.MemberRequestAminoMsg;
                fromProtoMsg(message: _128.MemberRequestProtoMsg): _128.MemberRequest;
                toProto(message: _128.MemberRequest): Uint8Array;
                toProtoMsg(message: _128.MemberRequest): _128.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _128.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_128.ThresholdDecisionPolicy>): _128.ThresholdDecisionPolicy;
                fromAmino(object: _128.ThresholdDecisionPolicyAmino): _128.ThresholdDecisionPolicy;
                toAmino(message: _128.ThresholdDecisionPolicy): _128.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _128.ThresholdDecisionPolicyAminoMsg): _128.ThresholdDecisionPolicy;
                toAminoMsg(message: _128.ThresholdDecisionPolicy): _128.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _128.ThresholdDecisionPolicyProtoMsg): _128.ThresholdDecisionPolicy;
                toProto(message: _128.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _128.ThresholdDecisionPolicy): _128.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _128.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.PercentageDecisionPolicy;
                fromPartial(object: Partial<_128.PercentageDecisionPolicy>): _128.PercentageDecisionPolicy;
                fromAmino(object: _128.PercentageDecisionPolicyAmino): _128.PercentageDecisionPolicy;
                toAmino(message: _128.PercentageDecisionPolicy): _128.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _128.PercentageDecisionPolicyAminoMsg): _128.PercentageDecisionPolicy;
                toAminoMsg(message: _128.PercentageDecisionPolicy): _128.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _128.PercentageDecisionPolicyProtoMsg): _128.PercentageDecisionPolicy;
                toProto(message: _128.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _128.PercentageDecisionPolicy): _128.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _128.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.DecisionPolicyWindows;
                fromPartial(object: Partial<_128.DecisionPolicyWindows>): _128.DecisionPolicyWindows;
                fromAmino(object: _128.DecisionPolicyWindowsAmino): _128.DecisionPolicyWindows;
                toAmino(message: _128.DecisionPolicyWindows): _128.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _128.DecisionPolicyWindowsAminoMsg): _128.DecisionPolicyWindows;
                toAminoMsg(message: _128.DecisionPolicyWindows): _128.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _128.DecisionPolicyWindowsProtoMsg): _128.DecisionPolicyWindows;
                toProto(message: _128.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _128.DecisionPolicyWindows): _128.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _128.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.GroupInfo;
                fromPartial(object: Partial<_128.GroupInfo>): _128.GroupInfo;
                fromAmino(object: _128.GroupInfoAmino): _128.GroupInfo;
                toAmino(message: _128.GroupInfo): _128.GroupInfoAmino;
                fromAminoMsg(object: _128.GroupInfoAminoMsg): _128.GroupInfo;
                toAminoMsg(message: _128.GroupInfo): _128.GroupInfoAminoMsg;
                fromProtoMsg(message: _128.GroupInfoProtoMsg): _128.GroupInfo;
                toProto(message: _128.GroupInfo): Uint8Array;
                toProtoMsg(message: _128.GroupInfo): _128.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _128.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.GroupMember;
                fromPartial(object: Partial<_128.GroupMember>): _128.GroupMember;
                fromAmino(object: _128.GroupMemberAmino): _128.GroupMember;
                toAmino(message: _128.GroupMember): _128.GroupMemberAmino;
                fromAminoMsg(object: _128.GroupMemberAminoMsg): _128.GroupMember;
                toAminoMsg(message: _128.GroupMember): _128.GroupMemberAminoMsg;
                fromProtoMsg(message: _128.GroupMemberProtoMsg): _128.GroupMember;
                toProto(message: _128.GroupMember): Uint8Array;
                toProtoMsg(message: _128.GroupMember): _128.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _128.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.GroupPolicyInfo;
                fromPartial(object: Partial<_128.GroupPolicyInfo>): _128.GroupPolicyInfo;
                fromAmino(object: _128.GroupPolicyInfoAmino): _128.GroupPolicyInfo;
                toAmino(message: _128.GroupPolicyInfo): _128.GroupPolicyInfoAmino;
                fromAminoMsg(object: _128.GroupPolicyInfoAminoMsg): _128.GroupPolicyInfo;
                toAminoMsg(message: _128.GroupPolicyInfo): _128.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _128.GroupPolicyInfoProtoMsg): _128.GroupPolicyInfo;
                toProto(message: _128.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _128.GroupPolicyInfo): _128.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _128.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Proposal;
                fromPartial(object: Partial<_128.Proposal>): _128.Proposal;
                fromAmino(object: _128.ProposalAmino): _128.Proposal;
                toAmino(message: _128.Proposal): _128.ProposalAmino;
                fromAminoMsg(object: _128.ProposalAminoMsg): _128.Proposal;
                toAminoMsg(message: _128.Proposal): _128.ProposalAminoMsg;
                fromProtoMsg(message: _128.ProposalProtoMsg): _128.Proposal;
                toProto(message: _128.Proposal): Uint8Array;
                toProtoMsg(message: _128.Proposal): _128.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _128.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.TallyResult;
                fromPartial(object: Partial<_128.TallyResult>): _128.TallyResult;
                fromAmino(object: _128.TallyResultAmino): _128.TallyResult;
                toAmino(message: _128.TallyResult): _128.TallyResultAmino;
                fromAminoMsg(object: _128.TallyResultAminoMsg): _128.TallyResult;
                toAminoMsg(message: _128.TallyResult): _128.TallyResultAminoMsg;
                fromProtoMsg(message: _128.TallyResultProtoMsg): _128.TallyResult;
                toProto(message: _128.TallyResult): Uint8Array;
                toProtoMsg(message: _128.TallyResult): _128.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _128.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Vote;
                fromPartial(object: Partial<_128.Vote>): _128.Vote;
                fromAmino(object: _128.VoteAmino): _128.Vote;
                toAmino(message: _128.Vote): _128.VoteAmino;
                fromAminoMsg(object: _128.VoteAminoMsg): _128.Vote;
                toAminoMsg(message: _128.Vote): _128.VoteAminoMsg;
                fromProtoMsg(message: _128.VoteProtoMsg): _128.Vote;
                toProto(message: _128.Vote): Uint8Array;
                toProtoMsg(message: _128.Vote): _128.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _127.Exec;
            execToJSON(object: _127.Exec): string;
            Exec: typeof _127.Exec;
            ExecSDKType: typeof _127.Exec;
            ExecAmino: typeof _127.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _127.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgCreateGroup;
                fromPartial(object: Partial<_127.MsgCreateGroup>): _127.MsgCreateGroup;
                fromAmino(object: _127.MsgCreateGroupAmino): _127.MsgCreateGroup;
                toAmino(message: _127.MsgCreateGroup): _127.MsgCreateGroupAmino;
                fromAminoMsg(object: _127.MsgCreateGroupAminoMsg): _127.MsgCreateGroup;
                toAminoMsg(message: _127.MsgCreateGroup): _127.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _127.MsgCreateGroupProtoMsg): _127.MsgCreateGroup;
                toProto(message: _127.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _127.MsgCreateGroup): _127.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _127.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgCreateGroupResponse;
                fromPartial(object: Partial<_127.MsgCreateGroupResponse>): _127.MsgCreateGroupResponse;
                fromAmino(object: _127.MsgCreateGroupResponseAmino): _127.MsgCreateGroupResponse;
                toAmino(message: _127.MsgCreateGroupResponse): _127.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _127.MsgCreateGroupResponseAminoMsg): _127.MsgCreateGroupResponse;
                toAminoMsg(message: _127.MsgCreateGroupResponse): _127.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _127.MsgCreateGroupResponseProtoMsg): _127.MsgCreateGroupResponse;
                toProto(message: _127.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _127.MsgCreateGroupResponse): _127.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _127.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_127.MsgUpdateGroupMembers>): _127.MsgUpdateGroupMembers;
                fromAmino(object: _127.MsgUpdateGroupMembersAmino): _127.MsgUpdateGroupMembers;
                toAmino(message: _127.MsgUpdateGroupMembers): _127.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupMembersAminoMsg): _127.MsgUpdateGroupMembers;
                toAminoMsg(message: _127.MsgUpdateGroupMembers): _127.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupMembersProtoMsg): _127.MsgUpdateGroupMembers;
                toProto(message: _127.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupMembers): _127.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _127.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupMembersResponse>): _127.MsgUpdateGroupMembersResponse;
                fromAmino(_: _127.MsgUpdateGroupMembersResponseAmino): _127.MsgUpdateGroupMembersResponse;
                toAmino(_: _127.MsgUpdateGroupMembersResponse): _127.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupMembersResponseAminoMsg): _127.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _127.MsgUpdateGroupMembersResponse): _127.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupMembersResponseProtoMsg): _127.MsgUpdateGroupMembersResponse;
                toProto(message: _127.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupMembersResponse): _127.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _127.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_127.MsgUpdateGroupAdmin>): _127.MsgUpdateGroupAdmin;
                fromAmino(object: _127.MsgUpdateGroupAdminAmino): _127.MsgUpdateGroupAdmin;
                toAmino(message: _127.MsgUpdateGroupAdmin): _127.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupAdminAminoMsg): _127.MsgUpdateGroupAdmin;
                toAminoMsg(message: _127.MsgUpdateGroupAdmin): _127.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupAdminProtoMsg): _127.MsgUpdateGroupAdmin;
                toProto(message: _127.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupAdmin): _127.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _127.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupAdminResponse>): _127.MsgUpdateGroupAdminResponse;
                fromAmino(_: _127.MsgUpdateGroupAdminResponseAmino): _127.MsgUpdateGroupAdminResponse;
                toAmino(_: _127.MsgUpdateGroupAdminResponse): _127.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupAdminResponseAminoMsg): _127.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _127.MsgUpdateGroupAdminResponse): _127.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupAdminResponseProtoMsg): _127.MsgUpdateGroupAdminResponse;
                toProto(message: _127.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupAdminResponse): _127.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _127.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_127.MsgUpdateGroupMetadata>): _127.MsgUpdateGroupMetadata;
                fromAmino(object: _127.MsgUpdateGroupMetadataAmino): _127.MsgUpdateGroupMetadata;
                toAmino(message: _127.MsgUpdateGroupMetadata): _127.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupMetadataAminoMsg): _127.MsgUpdateGroupMetadata;
                toAminoMsg(message: _127.MsgUpdateGroupMetadata): _127.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupMetadataProtoMsg): _127.MsgUpdateGroupMetadata;
                toProto(message: _127.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupMetadata): _127.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _127.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupMetadataResponse>): _127.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _127.MsgUpdateGroupMetadataResponseAmino): _127.MsgUpdateGroupMetadataResponse;
                toAmino(_: _127.MsgUpdateGroupMetadataResponse): _127.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupMetadataResponseAminoMsg): _127.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _127.MsgUpdateGroupMetadataResponse): _127.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupMetadataResponseProtoMsg): _127.MsgUpdateGroupMetadataResponse;
                toProto(message: _127.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupMetadataResponse): _127.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _127.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_127.MsgCreateGroupPolicy>): _127.MsgCreateGroupPolicy;
                fromAmino(object: _127.MsgCreateGroupPolicyAmino): _127.MsgCreateGroupPolicy;
                toAmino(message: _127.MsgCreateGroupPolicy): _127.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _127.MsgCreateGroupPolicyAminoMsg): _127.MsgCreateGroupPolicy;
                toAminoMsg(message: _127.MsgCreateGroupPolicy): _127.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _127.MsgCreateGroupPolicyProtoMsg): _127.MsgCreateGroupPolicy;
                toProto(message: _127.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _127.MsgCreateGroupPolicy): _127.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _127.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_127.MsgCreateGroupPolicyResponse>): _127.MsgCreateGroupPolicyResponse;
                fromAmino(object: _127.MsgCreateGroupPolicyResponseAmino): _127.MsgCreateGroupPolicyResponse;
                toAmino(message: _127.MsgCreateGroupPolicyResponse): _127.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _127.MsgCreateGroupPolicyResponseAminoMsg): _127.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _127.MsgCreateGroupPolicyResponse): _127.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _127.MsgCreateGroupPolicyResponseProtoMsg): _127.MsgCreateGroupPolicyResponse;
                toProto(message: _127.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _127.MsgCreateGroupPolicyResponse): _127.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _127.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_127.MsgUpdateGroupPolicyAdmin>): _127.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _127.MsgUpdateGroupPolicyAdminAmino): _127.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _127.MsgUpdateGroupPolicyAdmin): _127.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupPolicyAdminAminoMsg): _127.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _127.MsgUpdateGroupPolicyAdmin): _127.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupPolicyAdminProtoMsg): _127.MsgUpdateGroupPolicyAdmin;
                toProto(message: _127.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupPolicyAdmin): _127.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _127.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_127.MsgCreateGroupWithPolicy>): _127.MsgCreateGroupWithPolicy;
                fromAmino(object: _127.MsgCreateGroupWithPolicyAmino): _127.MsgCreateGroupWithPolicy;
                toAmino(message: _127.MsgCreateGroupWithPolicy): _127.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _127.MsgCreateGroupWithPolicyAminoMsg): _127.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _127.MsgCreateGroupWithPolicy): _127.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _127.MsgCreateGroupWithPolicyProtoMsg): _127.MsgCreateGroupWithPolicy;
                toProto(message: _127.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _127.MsgCreateGroupWithPolicy): _127.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _127.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_127.MsgCreateGroupWithPolicyResponse>): _127.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _127.MsgCreateGroupWithPolicyResponseAmino): _127.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _127.MsgCreateGroupWithPolicyResponse): _127.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _127.MsgCreateGroupWithPolicyResponseAminoMsg): _127.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _127.MsgCreateGroupWithPolicyResponse): _127.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _127.MsgCreateGroupWithPolicyResponseProtoMsg): _127.MsgCreateGroupWithPolicyResponse;
                toProto(message: _127.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _127.MsgCreateGroupWithPolicyResponse): _127.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _127.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupPolicyAdminResponse>): _127.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _127.MsgUpdateGroupPolicyAdminResponseAmino): _127.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _127.MsgUpdateGroupPolicyAdminResponse): _127.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupPolicyAdminResponseAminoMsg): _127.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _127.MsgUpdateGroupPolicyAdminResponse): _127.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupPolicyAdminResponseProtoMsg): _127.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _127.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupPolicyAdminResponse): _127.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _127.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_127.MsgUpdateGroupPolicyDecisionPolicy>): _127.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _127.MsgUpdateGroupPolicyDecisionPolicyAmino): _127.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _127.MsgUpdateGroupPolicyDecisionPolicy): _127.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _127.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _127.MsgUpdateGroupPolicyDecisionPolicy): _127.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _127.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _127.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupPolicyDecisionPolicy): _127.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _127.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupPolicyDecisionPolicyResponse>): _127.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _127.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _127.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _127.MsgUpdateGroupPolicyDecisionPolicyResponse): _127.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _127.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _127.MsgUpdateGroupPolicyDecisionPolicyResponse): _127.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _127.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _127.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupPolicyDecisionPolicyResponse): _127.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _127.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_127.MsgUpdateGroupPolicyMetadata>): _127.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _127.MsgUpdateGroupPolicyMetadataAmino): _127.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _127.MsgUpdateGroupPolicyMetadata): _127.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupPolicyMetadataAminoMsg): _127.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _127.MsgUpdateGroupPolicyMetadata): _127.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupPolicyMetadataProtoMsg): _127.MsgUpdateGroupPolicyMetadata;
                toProto(message: _127.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupPolicyMetadata): _127.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _127.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupPolicyMetadataResponse>): _127.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _127.MsgUpdateGroupPolicyMetadataResponseAmino): _127.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _127.MsgUpdateGroupPolicyMetadataResponse): _127.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _127.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _127.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _127.MsgUpdateGroupPolicyMetadataResponse): _127.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _127.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _127.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateGroupPolicyMetadataResponse): _127.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _127.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgSubmitProposal;
                fromPartial(object: Partial<_127.MsgSubmitProposal>): _127.MsgSubmitProposal;
                fromAmino(object: _127.MsgSubmitProposalAmino): _127.MsgSubmitProposal;
                toAmino(message: _127.MsgSubmitProposal): _127.MsgSubmitProposalAmino;
                fromAminoMsg(object: _127.MsgSubmitProposalAminoMsg): _127.MsgSubmitProposal;
                toAminoMsg(message: _127.MsgSubmitProposal): _127.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _127.MsgSubmitProposalProtoMsg): _127.MsgSubmitProposal;
                toProto(message: _127.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _127.MsgSubmitProposal): _127.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _127.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_127.MsgSubmitProposalResponse>): _127.MsgSubmitProposalResponse;
                fromAmino(object: _127.MsgSubmitProposalResponseAmino): _127.MsgSubmitProposalResponse;
                toAmino(message: _127.MsgSubmitProposalResponse): _127.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _127.MsgSubmitProposalResponseAminoMsg): _127.MsgSubmitProposalResponse;
                toAminoMsg(message: _127.MsgSubmitProposalResponse): _127.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _127.MsgSubmitProposalResponseProtoMsg): _127.MsgSubmitProposalResponse;
                toProto(message: _127.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _127.MsgSubmitProposalResponse): _127.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _127.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgWithdrawProposal;
                fromPartial(object: Partial<_127.MsgWithdrawProposal>): _127.MsgWithdrawProposal;
                fromAmino(object: _127.MsgWithdrawProposalAmino): _127.MsgWithdrawProposal;
                toAmino(message: _127.MsgWithdrawProposal): _127.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _127.MsgWithdrawProposalAminoMsg): _127.MsgWithdrawProposal;
                toAminoMsg(message: _127.MsgWithdrawProposal): _127.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _127.MsgWithdrawProposalProtoMsg): _127.MsgWithdrawProposal;
                toProto(message: _127.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _127.MsgWithdrawProposal): _127.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _127.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_127.MsgWithdrawProposalResponse>): _127.MsgWithdrawProposalResponse;
                fromAmino(_: _127.MsgWithdrawProposalResponseAmino): _127.MsgWithdrawProposalResponse;
                toAmino(_: _127.MsgWithdrawProposalResponse): _127.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _127.MsgWithdrawProposalResponseAminoMsg): _127.MsgWithdrawProposalResponse;
                toAminoMsg(message: _127.MsgWithdrawProposalResponse): _127.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _127.MsgWithdrawProposalResponseProtoMsg): _127.MsgWithdrawProposalResponse;
                toProto(message: _127.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _127.MsgWithdrawProposalResponse): _127.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _127.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgVote;
                fromPartial(object: Partial<_127.MsgVote>): _127.MsgVote;
                fromAmino(object: _127.MsgVoteAmino): _127.MsgVote;
                toAmino(message: _127.MsgVote): _127.MsgVoteAmino;
                fromAminoMsg(object: _127.MsgVoteAminoMsg): _127.MsgVote;
                toAminoMsg(message: _127.MsgVote): _127.MsgVoteAminoMsg;
                fromProtoMsg(message: _127.MsgVoteProtoMsg): _127.MsgVote;
                toProto(message: _127.MsgVote): Uint8Array;
                toProtoMsg(message: _127.MsgVote): _127.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _127.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgVoteResponse;
                fromPartial(_: Partial<_127.MsgVoteResponse>): _127.MsgVoteResponse;
                fromAmino(_: _127.MsgVoteResponseAmino): _127.MsgVoteResponse;
                toAmino(_: _127.MsgVoteResponse): _127.MsgVoteResponseAmino;
                fromAminoMsg(object: _127.MsgVoteResponseAminoMsg): _127.MsgVoteResponse;
                toAminoMsg(message: _127.MsgVoteResponse): _127.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _127.MsgVoteResponseProtoMsg): _127.MsgVoteResponse;
                toProto(message: _127.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _127.MsgVoteResponse): _127.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _127.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgExec;
                fromPartial(object: Partial<_127.MsgExec>): _127.MsgExec;
                fromAmino(object: _127.MsgExecAmino): _127.MsgExec;
                toAmino(message: _127.MsgExec): _127.MsgExecAmino;
                fromAminoMsg(object: _127.MsgExecAminoMsg): _127.MsgExec;
                toAminoMsg(message: _127.MsgExec): _127.MsgExecAminoMsg;
                fromProtoMsg(message: _127.MsgExecProtoMsg): _127.MsgExec;
                toProto(message: _127.MsgExec): Uint8Array;
                toProtoMsg(message: _127.MsgExec): _127.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _127.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgExecResponse;
                fromPartial(object: Partial<_127.MsgExecResponse>): _127.MsgExecResponse;
                fromAmino(object: _127.MsgExecResponseAmino): _127.MsgExecResponse;
                toAmino(message: _127.MsgExecResponse): _127.MsgExecResponseAmino;
                fromAminoMsg(object: _127.MsgExecResponseAminoMsg): _127.MsgExecResponse;
                toAminoMsg(message: _127.MsgExecResponse): _127.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _127.MsgExecResponseProtoMsg): _127.MsgExecResponse;
                toProto(message: _127.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _127.MsgExecResponse): _127.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _127.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgLeaveGroup;
                fromPartial(object: Partial<_127.MsgLeaveGroup>): _127.MsgLeaveGroup;
                fromAmino(object: _127.MsgLeaveGroupAmino): _127.MsgLeaveGroup;
                toAmino(message: _127.MsgLeaveGroup): _127.MsgLeaveGroupAmino;
                fromAminoMsg(object: _127.MsgLeaveGroupAminoMsg): _127.MsgLeaveGroup;
                toAminoMsg(message: _127.MsgLeaveGroup): _127.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _127.MsgLeaveGroupProtoMsg): _127.MsgLeaveGroup;
                toProto(message: _127.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _127.MsgLeaveGroup): _127.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _127.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_127.MsgLeaveGroupResponse>): _127.MsgLeaveGroupResponse;
                fromAmino(_: _127.MsgLeaveGroupResponseAmino): _127.MsgLeaveGroupResponse;
                toAmino(_: _127.MsgLeaveGroupResponse): _127.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _127.MsgLeaveGroupResponseAminoMsg): _127.MsgLeaveGroupResponse;
                toAminoMsg(message: _127.MsgLeaveGroupResponse): _127.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _127.MsgLeaveGroupResponseProtoMsg): _127.MsgLeaveGroupResponse;
                toProto(message: _127.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _127.MsgLeaveGroupResponse): _127.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _126.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupInfoRequest;
                fromPartial(object: Partial<_126.QueryGroupInfoRequest>): _126.QueryGroupInfoRequest;
                fromAmino(object: _126.QueryGroupInfoRequestAmino): _126.QueryGroupInfoRequest;
                toAmino(message: _126.QueryGroupInfoRequest): _126.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _126.QueryGroupInfoRequestAminoMsg): _126.QueryGroupInfoRequest;
                toAminoMsg(message: _126.QueryGroupInfoRequest): _126.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGroupInfoRequestProtoMsg): _126.QueryGroupInfoRequest;
                toProto(message: _126.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGroupInfoRequest): _126.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _126.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupInfoResponse;
                fromPartial(object: Partial<_126.QueryGroupInfoResponse>): _126.QueryGroupInfoResponse;
                fromAmino(object: _126.QueryGroupInfoResponseAmino): _126.QueryGroupInfoResponse;
                toAmino(message: _126.QueryGroupInfoResponse): _126.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _126.QueryGroupInfoResponseAminoMsg): _126.QueryGroupInfoResponse;
                toAminoMsg(message: _126.QueryGroupInfoResponse): _126.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGroupInfoResponseProtoMsg): _126.QueryGroupInfoResponse;
                toProto(message: _126.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGroupInfoResponse): _126.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _126.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_126.QueryGroupPolicyInfoRequest>): _126.QueryGroupPolicyInfoRequest;
                fromAmino(object: _126.QueryGroupPolicyInfoRequestAmino): _126.QueryGroupPolicyInfoRequest;
                toAmino(message: _126.QueryGroupPolicyInfoRequest): _126.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _126.QueryGroupPolicyInfoRequestAminoMsg): _126.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _126.QueryGroupPolicyInfoRequest): _126.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGroupPolicyInfoRequestProtoMsg): _126.QueryGroupPolicyInfoRequest;
                toProto(message: _126.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGroupPolicyInfoRequest): _126.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _126.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_126.QueryGroupPolicyInfoResponse>): _126.QueryGroupPolicyInfoResponse;
                fromAmino(object: _126.QueryGroupPolicyInfoResponseAmino): _126.QueryGroupPolicyInfoResponse;
                toAmino(message: _126.QueryGroupPolicyInfoResponse): _126.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _126.QueryGroupPolicyInfoResponseAminoMsg): _126.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _126.QueryGroupPolicyInfoResponse): _126.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGroupPolicyInfoResponseProtoMsg): _126.QueryGroupPolicyInfoResponse;
                toProto(message: _126.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGroupPolicyInfoResponse): _126.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _126.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupMembersRequest;
                fromPartial(object: Partial<_126.QueryGroupMembersRequest>): _126.QueryGroupMembersRequest;
                fromAmino(object: _126.QueryGroupMembersRequestAmino): _126.QueryGroupMembersRequest;
                toAmino(message: _126.QueryGroupMembersRequest): _126.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _126.QueryGroupMembersRequestAminoMsg): _126.QueryGroupMembersRequest;
                toAminoMsg(message: _126.QueryGroupMembersRequest): _126.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGroupMembersRequestProtoMsg): _126.QueryGroupMembersRequest;
                toProto(message: _126.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGroupMembersRequest): _126.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _126.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupMembersResponse;
                fromPartial(object: Partial<_126.QueryGroupMembersResponse>): _126.QueryGroupMembersResponse;
                fromAmino(object: _126.QueryGroupMembersResponseAmino): _126.QueryGroupMembersResponse;
                toAmino(message: _126.QueryGroupMembersResponse): _126.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _126.QueryGroupMembersResponseAminoMsg): _126.QueryGroupMembersResponse;
                toAminoMsg(message: _126.QueryGroupMembersResponse): _126.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGroupMembersResponseProtoMsg): _126.QueryGroupMembersResponse;
                toProto(message: _126.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGroupMembersResponse): _126.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _126.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_126.QueryGroupsByAdminRequest>): _126.QueryGroupsByAdminRequest;
                fromAmino(object: _126.QueryGroupsByAdminRequestAmino): _126.QueryGroupsByAdminRequest;
                toAmino(message: _126.QueryGroupsByAdminRequest): _126.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _126.QueryGroupsByAdminRequestAminoMsg): _126.QueryGroupsByAdminRequest;
                toAminoMsg(message: _126.QueryGroupsByAdminRequest): _126.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGroupsByAdminRequestProtoMsg): _126.QueryGroupsByAdminRequest;
                toProto(message: _126.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGroupsByAdminRequest): _126.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _126.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_126.QueryGroupsByAdminResponse>): _126.QueryGroupsByAdminResponse;
                fromAmino(object: _126.QueryGroupsByAdminResponseAmino): _126.QueryGroupsByAdminResponse;
                toAmino(message: _126.QueryGroupsByAdminResponse): _126.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _126.QueryGroupsByAdminResponseAminoMsg): _126.QueryGroupsByAdminResponse;
                toAminoMsg(message: _126.QueryGroupsByAdminResponse): _126.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGroupsByAdminResponseProtoMsg): _126.QueryGroupsByAdminResponse;
                toProto(message: _126.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGroupsByAdminResponse): _126.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _126.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_126.QueryGroupPoliciesByGroupRequest>): _126.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _126.QueryGroupPoliciesByGroupRequestAmino): _126.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _126.QueryGroupPoliciesByGroupRequest): _126.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _126.QueryGroupPoliciesByGroupRequestAminoMsg): _126.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _126.QueryGroupPoliciesByGroupRequest): _126.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGroupPoliciesByGroupRequestProtoMsg): _126.QueryGroupPoliciesByGroupRequest;
                toProto(message: _126.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGroupPoliciesByGroupRequest): _126.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _126.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_126.QueryGroupPoliciesByGroupResponse>): _126.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _126.QueryGroupPoliciesByGroupResponseAmino): _126.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _126.QueryGroupPoliciesByGroupResponse): _126.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _126.QueryGroupPoliciesByGroupResponseAminoMsg): _126.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _126.QueryGroupPoliciesByGroupResponse): _126.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGroupPoliciesByGroupResponseProtoMsg): _126.QueryGroupPoliciesByGroupResponse;
                toProto(message: _126.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGroupPoliciesByGroupResponse): _126.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _126.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_126.QueryGroupPoliciesByAdminRequest>): _126.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _126.QueryGroupPoliciesByAdminRequestAmino): _126.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _126.QueryGroupPoliciesByAdminRequest): _126.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _126.QueryGroupPoliciesByAdminRequestAminoMsg): _126.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _126.QueryGroupPoliciesByAdminRequest): _126.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGroupPoliciesByAdminRequestProtoMsg): _126.QueryGroupPoliciesByAdminRequest;
                toProto(message: _126.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGroupPoliciesByAdminRequest): _126.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _126.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_126.QueryGroupPoliciesByAdminResponse>): _126.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _126.QueryGroupPoliciesByAdminResponseAmino): _126.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _126.QueryGroupPoliciesByAdminResponse): _126.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _126.QueryGroupPoliciesByAdminResponseAminoMsg): _126.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _126.QueryGroupPoliciesByAdminResponse): _126.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGroupPoliciesByAdminResponseProtoMsg): _126.QueryGroupPoliciesByAdminResponse;
                toProto(message: _126.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGroupPoliciesByAdminResponse): _126.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _126.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryProposalRequest;
                fromPartial(object: Partial<_126.QueryProposalRequest>): _126.QueryProposalRequest;
                fromAmino(object: _126.QueryProposalRequestAmino): _126.QueryProposalRequest;
                toAmino(message: _126.QueryProposalRequest): _126.QueryProposalRequestAmino;
                fromAminoMsg(object: _126.QueryProposalRequestAminoMsg): _126.QueryProposalRequest;
                toAminoMsg(message: _126.QueryProposalRequest): _126.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _126.QueryProposalRequestProtoMsg): _126.QueryProposalRequest;
                toProto(message: _126.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _126.QueryProposalRequest): _126.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _126.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryProposalResponse;
                fromPartial(object: Partial<_126.QueryProposalResponse>): _126.QueryProposalResponse;
                fromAmino(object: _126.QueryProposalResponseAmino): _126.QueryProposalResponse;
                toAmino(message: _126.QueryProposalResponse): _126.QueryProposalResponseAmino;
                fromAminoMsg(object: _126.QueryProposalResponseAminoMsg): _126.QueryProposalResponse;
                toAminoMsg(message: _126.QueryProposalResponse): _126.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _126.QueryProposalResponseProtoMsg): _126.QueryProposalResponse;
                toProto(message: _126.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _126.QueryProposalResponse): _126.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _126.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_126.QueryProposalsByGroupPolicyRequest>): _126.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _126.QueryProposalsByGroupPolicyRequestAmino): _126.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _126.QueryProposalsByGroupPolicyRequest): _126.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _126.QueryProposalsByGroupPolicyRequestAminoMsg): _126.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _126.QueryProposalsByGroupPolicyRequest): _126.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _126.QueryProposalsByGroupPolicyRequestProtoMsg): _126.QueryProposalsByGroupPolicyRequest;
                toProto(message: _126.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _126.QueryProposalsByGroupPolicyRequest): _126.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _126.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_126.QueryProposalsByGroupPolicyResponse>): _126.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _126.QueryProposalsByGroupPolicyResponseAmino): _126.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _126.QueryProposalsByGroupPolicyResponse): _126.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _126.QueryProposalsByGroupPolicyResponseAminoMsg): _126.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _126.QueryProposalsByGroupPolicyResponse): _126.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _126.QueryProposalsByGroupPolicyResponseProtoMsg): _126.QueryProposalsByGroupPolicyResponse;
                toProto(message: _126.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _126.QueryProposalsByGroupPolicyResponse): _126.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _126.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_126.QueryVoteByProposalVoterRequest>): _126.QueryVoteByProposalVoterRequest;
                fromAmino(object: _126.QueryVoteByProposalVoterRequestAmino): _126.QueryVoteByProposalVoterRequest;
                toAmino(message: _126.QueryVoteByProposalVoterRequest): _126.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _126.QueryVoteByProposalVoterRequestAminoMsg): _126.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _126.QueryVoteByProposalVoterRequest): _126.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _126.QueryVoteByProposalVoterRequestProtoMsg): _126.QueryVoteByProposalVoterRequest;
                toProto(message: _126.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _126.QueryVoteByProposalVoterRequest): _126.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _126.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_126.QueryVoteByProposalVoterResponse>): _126.QueryVoteByProposalVoterResponse;
                fromAmino(object: _126.QueryVoteByProposalVoterResponseAmino): _126.QueryVoteByProposalVoterResponse;
                toAmino(message: _126.QueryVoteByProposalVoterResponse): _126.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _126.QueryVoteByProposalVoterResponseAminoMsg): _126.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _126.QueryVoteByProposalVoterResponse): _126.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _126.QueryVoteByProposalVoterResponseProtoMsg): _126.QueryVoteByProposalVoterResponse;
                toProto(message: _126.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _126.QueryVoteByProposalVoterResponse): _126.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _126.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_126.QueryVotesByProposalRequest>): _126.QueryVotesByProposalRequest;
                fromAmino(object: _126.QueryVotesByProposalRequestAmino): _126.QueryVotesByProposalRequest;
                toAmino(message: _126.QueryVotesByProposalRequest): _126.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _126.QueryVotesByProposalRequestAminoMsg): _126.QueryVotesByProposalRequest;
                toAminoMsg(message: _126.QueryVotesByProposalRequest): _126.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _126.QueryVotesByProposalRequestProtoMsg): _126.QueryVotesByProposalRequest;
                toProto(message: _126.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _126.QueryVotesByProposalRequest): _126.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _126.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_126.QueryVotesByProposalResponse>): _126.QueryVotesByProposalResponse;
                fromAmino(object: _126.QueryVotesByProposalResponseAmino): _126.QueryVotesByProposalResponse;
                toAmino(message: _126.QueryVotesByProposalResponse): _126.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _126.QueryVotesByProposalResponseAminoMsg): _126.QueryVotesByProposalResponse;
                toAminoMsg(message: _126.QueryVotesByProposalResponse): _126.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _126.QueryVotesByProposalResponseProtoMsg): _126.QueryVotesByProposalResponse;
                toProto(message: _126.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _126.QueryVotesByProposalResponse): _126.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _126.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_126.QueryVotesByVoterRequest>): _126.QueryVotesByVoterRequest;
                fromAmino(object: _126.QueryVotesByVoterRequestAmino): _126.QueryVotesByVoterRequest;
                toAmino(message: _126.QueryVotesByVoterRequest): _126.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _126.QueryVotesByVoterRequestAminoMsg): _126.QueryVotesByVoterRequest;
                toAminoMsg(message: _126.QueryVotesByVoterRequest): _126.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _126.QueryVotesByVoterRequestProtoMsg): _126.QueryVotesByVoterRequest;
                toProto(message: _126.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _126.QueryVotesByVoterRequest): _126.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _126.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_126.QueryVotesByVoterResponse>): _126.QueryVotesByVoterResponse;
                fromAmino(object: _126.QueryVotesByVoterResponseAmino): _126.QueryVotesByVoterResponse;
                toAmino(message: _126.QueryVotesByVoterResponse): _126.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _126.QueryVotesByVoterResponseAminoMsg): _126.QueryVotesByVoterResponse;
                toAminoMsg(message: _126.QueryVotesByVoterResponse): _126.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _126.QueryVotesByVoterResponseProtoMsg): _126.QueryVotesByVoterResponse;
                toProto(message: _126.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _126.QueryVotesByVoterResponse): _126.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _126.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_126.QueryGroupsByMemberRequest>): _126.QueryGroupsByMemberRequest;
                fromAmino(object: _126.QueryGroupsByMemberRequestAmino): _126.QueryGroupsByMemberRequest;
                toAmino(message: _126.QueryGroupsByMemberRequest): _126.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _126.QueryGroupsByMemberRequestAminoMsg): _126.QueryGroupsByMemberRequest;
                toAminoMsg(message: _126.QueryGroupsByMemberRequest): _126.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _126.QueryGroupsByMemberRequestProtoMsg): _126.QueryGroupsByMemberRequest;
                toProto(message: _126.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _126.QueryGroupsByMemberRequest): _126.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _126.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_126.QueryGroupsByMemberResponse>): _126.QueryGroupsByMemberResponse;
                fromAmino(object: _126.QueryGroupsByMemberResponseAmino): _126.QueryGroupsByMemberResponse;
                toAmino(message: _126.QueryGroupsByMemberResponse): _126.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _126.QueryGroupsByMemberResponseAminoMsg): _126.QueryGroupsByMemberResponse;
                toAminoMsg(message: _126.QueryGroupsByMemberResponse): _126.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _126.QueryGroupsByMemberResponseProtoMsg): _126.QueryGroupsByMemberResponse;
                toProto(message: _126.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _126.QueryGroupsByMemberResponse): _126.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _126.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryTallyResultRequest;
                fromPartial(object: Partial<_126.QueryTallyResultRequest>): _126.QueryTallyResultRequest;
                fromAmino(object: _126.QueryTallyResultRequestAmino): _126.QueryTallyResultRequest;
                toAmino(message: _126.QueryTallyResultRequest): _126.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _126.QueryTallyResultRequestAminoMsg): _126.QueryTallyResultRequest;
                toAminoMsg(message: _126.QueryTallyResultRequest): _126.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _126.QueryTallyResultRequestProtoMsg): _126.QueryTallyResultRequest;
                toProto(message: _126.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _126.QueryTallyResultRequest): _126.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _126.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryTallyResultResponse;
                fromPartial(object: Partial<_126.QueryTallyResultResponse>): _126.QueryTallyResultResponse;
                fromAmino(object: _126.QueryTallyResultResponseAmino): _126.QueryTallyResultResponse;
                toAmino(message: _126.QueryTallyResultResponse): _126.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _126.QueryTallyResultResponseAminoMsg): _126.QueryTallyResultResponse;
                toAminoMsg(message: _126.QueryTallyResultResponse): _126.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _126.QueryTallyResultResponseProtoMsg): _126.QueryTallyResultResponse;
                toProto(message: _126.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _126.QueryTallyResultResponse): _126.QueryTallyResultResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _124.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.EventCreateGroup;
                fromPartial(object: Partial<_124.EventCreateGroup>): _124.EventCreateGroup;
                fromAmino(object: _124.EventCreateGroupAmino): _124.EventCreateGroup;
                toAmino(message: _124.EventCreateGroup): _124.EventCreateGroupAmino;
                fromAminoMsg(object: _124.EventCreateGroupAminoMsg): _124.EventCreateGroup;
                toAminoMsg(message: _124.EventCreateGroup): _124.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _124.EventCreateGroupProtoMsg): _124.EventCreateGroup;
                toProto(message: _124.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _124.EventCreateGroup): _124.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _124.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.EventUpdateGroup;
                fromPartial(object: Partial<_124.EventUpdateGroup>): _124.EventUpdateGroup;
                fromAmino(object: _124.EventUpdateGroupAmino): _124.EventUpdateGroup;
                toAmino(message: _124.EventUpdateGroup): _124.EventUpdateGroupAmino;
                fromAminoMsg(object: _124.EventUpdateGroupAminoMsg): _124.EventUpdateGroup;
                toAminoMsg(message: _124.EventUpdateGroup): _124.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _124.EventUpdateGroupProtoMsg): _124.EventUpdateGroup;
                toProto(message: _124.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _124.EventUpdateGroup): _124.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _124.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.EventCreateGroupPolicy;
                fromPartial(object: Partial<_124.EventCreateGroupPolicy>): _124.EventCreateGroupPolicy;
                fromAmino(object: _124.EventCreateGroupPolicyAmino): _124.EventCreateGroupPolicy;
                toAmino(message: _124.EventCreateGroupPolicy): _124.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _124.EventCreateGroupPolicyAminoMsg): _124.EventCreateGroupPolicy;
                toAminoMsg(message: _124.EventCreateGroupPolicy): _124.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _124.EventCreateGroupPolicyProtoMsg): _124.EventCreateGroupPolicy;
                toProto(message: _124.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _124.EventCreateGroupPolicy): _124.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _124.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_124.EventUpdateGroupPolicy>): _124.EventUpdateGroupPolicy;
                fromAmino(object: _124.EventUpdateGroupPolicyAmino): _124.EventUpdateGroupPolicy;
                toAmino(message: _124.EventUpdateGroupPolicy): _124.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _124.EventUpdateGroupPolicyAminoMsg): _124.EventUpdateGroupPolicy;
                toAminoMsg(message: _124.EventUpdateGroupPolicy): _124.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _124.EventUpdateGroupPolicyProtoMsg): _124.EventUpdateGroupPolicy;
                toProto(message: _124.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _124.EventUpdateGroupPolicy): _124.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _124.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.EventSubmitProposal;
                fromPartial(object: Partial<_124.EventSubmitProposal>): _124.EventSubmitProposal;
                fromAmino(object: _124.EventSubmitProposalAmino): _124.EventSubmitProposal;
                toAmino(message: _124.EventSubmitProposal): _124.EventSubmitProposalAmino;
                fromAminoMsg(object: _124.EventSubmitProposalAminoMsg): _124.EventSubmitProposal;
                toAminoMsg(message: _124.EventSubmitProposal): _124.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _124.EventSubmitProposalProtoMsg): _124.EventSubmitProposal;
                toProto(message: _124.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _124.EventSubmitProposal): _124.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _124.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.EventWithdrawProposal;
                fromPartial(object: Partial<_124.EventWithdrawProposal>): _124.EventWithdrawProposal;
                fromAmino(object: _124.EventWithdrawProposalAmino): _124.EventWithdrawProposal;
                toAmino(message: _124.EventWithdrawProposal): _124.EventWithdrawProposalAmino;
                fromAminoMsg(object: _124.EventWithdrawProposalAminoMsg): _124.EventWithdrawProposal;
                toAminoMsg(message: _124.EventWithdrawProposal): _124.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _124.EventWithdrawProposalProtoMsg): _124.EventWithdrawProposal;
                toProto(message: _124.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _124.EventWithdrawProposal): _124.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _124.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.EventVote;
                fromPartial(object: Partial<_124.EventVote>): _124.EventVote;
                fromAmino(object: _124.EventVoteAmino): _124.EventVote;
                toAmino(message: _124.EventVote): _124.EventVoteAmino;
                fromAminoMsg(object: _124.EventVoteAminoMsg): _124.EventVote;
                toAminoMsg(message: _124.EventVote): _124.EventVoteAminoMsg;
                fromProtoMsg(message: _124.EventVoteProtoMsg): _124.EventVote;
                toProto(message: _124.EventVote): Uint8Array;
                toProtoMsg(message: _124.EventVote): _124.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _124.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.EventExec;
                fromPartial(object: Partial<_124.EventExec>): _124.EventExec;
                fromAmino(object: _124.EventExecAmino): _124.EventExec;
                toAmino(message: _124.EventExec): _124.EventExecAmino;
                fromAminoMsg(object: _124.EventExecAminoMsg): _124.EventExec;
                toAminoMsg(message: _124.EventExec): _124.EventExecAminoMsg;
                fromProtoMsg(message: _124.EventExecProtoMsg): _124.EventExec;
                toProto(message: _124.EventExec): Uint8Array;
                toProtoMsg(message: _124.EventExec): _124.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _124.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.EventLeaveGroup;
                fromPartial(object: Partial<_124.EventLeaveGroup>): _124.EventLeaveGroup;
                fromAmino(object: _124.EventLeaveGroupAmino): _124.EventLeaveGroup;
                toAmino(message: _124.EventLeaveGroup): _124.EventLeaveGroupAmino;
                fromAminoMsg(object: _124.EventLeaveGroupAminoMsg): _124.EventLeaveGroup;
                toAminoMsg(message: _124.EventLeaveGroup): _124.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _124.EventLeaveGroupProtoMsg): _124.EventLeaveGroup;
                toProto(message: _124.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _124.EventLeaveGroup): _124.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                inflation(request?: _131.QueryInflationRequest): Promise<_131.QueryInflationResponse>;
                annualProvisions(request?: _131.QueryAnnualProvisionsRequest): Promise<_131.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _293.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _131.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.QueryParamsRequest;
                fromPartial(_: Partial<_131.QueryParamsRequest>): _131.QueryParamsRequest;
                fromAmino(_: _131.QueryParamsRequestAmino): _131.QueryParamsRequest;
                toAmino(_: _131.QueryParamsRequest): _131.QueryParamsRequestAmino;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _131.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.QueryInflationRequest;
                fromPartial(_: Partial<_131.QueryInflationRequest>): _131.QueryInflationRequest;
                fromAmino(_: _131.QueryInflationRequestAmino): _131.QueryInflationRequest;
                toAmino(_: _131.QueryInflationRequest): _131.QueryInflationRequestAmino;
                fromAminoMsg(object: _131.QueryInflationRequestAminoMsg): _131.QueryInflationRequest;
                toAminoMsg(message: _131.QueryInflationRequest): _131.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _131.QueryInflationRequestProtoMsg): _131.QueryInflationRequest;
                toProto(message: _131.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _131.QueryInflationRequest): _131.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _131.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryInflationResponse;
                fromPartial(object: Partial<_131.QueryInflationResponse>): _131.QueryInflationResponse;
                fromAmino(object: _131.QueryInflationResponseAmino): _131.QueryInflationResponse;
                toAmino(message: _131.QueryInflationResponse): _131.QueryInflationResponseAmino;
                fromAminoMsg(object: _131.QueryInflationResponseAminoMsg): _131.QueryInflationResponse;
                toAminoMsg(message: _131.QueryInflationResponse): _131.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _131.QueryInflationResponseProtoMsg): _131.QueryInflationResponse;
                toProto(message: _131.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _131.QueryInflationResponse): _131.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _131.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_131.QueryAnnualProvisionsRequest>): _131.QueryAnnualProvisionsRequest;
                fromAmino(_: _131.QueryAnnualProvisionsRequestAmino): _131.QueryAnnualProvisionsRequest;
                toAmino(_: _131.QueryAnnualProvisionsRequest): _131.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _131.QueryAnnualProvisionsRequestAminoMsg): _131.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _131.QueryAnnualProvisionsRequest): _131.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _131.QueryAnnualProvisionsRequestProtoMsg): _131.QueryAnnualProvisionsRequest;
                toProto(message: _131.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _131.QueryAnnualProvisionsRequest): _131.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _131.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_131.QueryAnnualProvisionsResponse>): _131.QueryAnnualProvisionsResponse;
                fromAmino(object: _131.QueryAnnualProvisionsResponseAmino): _131.QueryAnnualProvisionsResponse;
                toAmino(message: _131.QueryAnnualProvisionsResponse): _131.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _131.QueryAnnualProvisionsResponseAminoMsg): _131.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _131.QueryAnnualProvisionsResponse): _131.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _131.QueryAnnualProvisionsResponseProtoMsg): _131.QueryAnnualProvisionsResponse;
                toProto(message: _131.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _131.QueryAnnualProvisionsResponse): _131.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _130.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Minter;
                fromPartial(object: Partial<_130.Minter>): _130.Minter;
                fromAmino(object: _130.MinterAmino): _130.Minter;
                toAmino(message: _130.Minter): _130.MinterAmino;
                fromAminoMsg(object: _130.MinterAminoMsg): _130.Minter;
                toAminoMsg(message: _130.Minter): _130.MinterAminoMsg;
                fromProtoMsg(message: _130.MinterProtoMsg): _130.Minter;
                toProto(message: _130.Minter): Uint8Array;
                toProtoMsg(message: _130.Minter): _130.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _130.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Params;
                fromPartial(object: Partial<_130.Params>): _130.Params;
                fromAmino(object: _130.ParamsAmino): _130.Params;
                toAmino(message: _130.Params): _130.ParamsAmino;
                fromAminoMsg(object: _130.ParamsAminoMsg): _130.Params;
                toAminoMsg(message: _130.Params): _130.ParamsAminoMsg;
                fromProtoMsg(message: _130.ParamsProtoMsg): _130.Params;
                toProto(message: _130.Params): Uint8Array;
                toProtoMsg(message: _130.Params): _130.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _129.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.GenesisState;
                fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
                fromAmino(object: _129.GenesisStateAmino): _129.GenesisState;
                toAmino(message: _129.GenesisState): _129.GenesisStateAmino;
                fromAminoMsg(object: _129.GenesisStateAminoMsg): _129.GenesisState;
                toAminoMsg(message: _129.GenesisState): _129.GenesisStateAminoMsg;
                fromProtoMsg(message: _129.GenesisStateProtoMsg): _129.GenesisState;
                toProto(message: _129.GenesisState): Uint8Array;
                toProtoMsg(message: _129.GenesisState): _129.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            QueryClientImpl: typeof _313.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _136.QueryBalanceRequest): Promise<_136.QueryBalanceResponse>;
                owner(request: _136.QueryOwnerRequest): Promise<_136.QueryOwnerResponse>;
                supply(request: _136.QuerySupplyRequest): Promise<_136.QuerySupplyResponse>;
                nFTs(request: _136.QueryNFTsRequest): Promise<_136.QueryNFTsResponse>;
                nFT(request: _136.QueryNFTRequest): Promise<_136.QueryNFTResponse>;
                class(request: _136.QueryClassRequest): Promise<_136.QueryClassResponse>;
                classes(request?: _136.QueryClassesRequest): Promise<_136.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _294.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _137.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _137.MsgSend): {
                        typeUrl: string;
                        value: _137.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _137.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _137.MsgSend): {
                        typeUrl: string;
                        value: _137.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _137.MsgSend) => _137.MsgSendAmino;
                    fromAmino: (object: _137.MsgSendAmino) => _137.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _137.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.MsgSend;
                fromPartial(object: Partial<_137.MsgSend>): _137.MsgSend;
                fromAmino(object: _137.MsgSendAmino): _137.MsgSend;
                toAmino(message: _137.MsgSend): _137.MsgSendAmino;
                fromAminoMsg(object: _137.MsgSendAminoMsg): _137.MsgSend;
                toAminoMsg(message: _137.MsgSend): _137.MsgSendAminoMsg;
                fromProtoMsg(message: _137.MsgSendProtoMsg): _137.MsgSend;
                toProto(message: _137.MsgSend): Uint8Array;
                toProtoMsg(message: _137.MsgSend): _137.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _137.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _137.MsgSendResponse;
                fromPartial(_: Partial<_137.MsgSendResponse>): _137.MsgSendResponse;
                fromAmino(_: _137.MsgSendResponseAmino): _137.MsgSendResponse;
                toAmino(_: _137.MsgSendResponse): _137.MsgSendResponseAmino;
                fromAminoMsg(object: _137.MsgSendResponseAminoMsg): _137.MsgSendResponse;
                toAminoMsg(message: _137.MsgSendResponse): _137.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _137.MsgSendResponseProtoMsg): _137.MsgSendResponse;
                toProto(message: _137.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _137.MsgSendResponse): _137.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _136.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryBalanceRequest;
                fromPartial(object: Partial<_136.QueryBalanceRequest>): _136.QueryBalanceRequest;
                fromAmino(object: _136.QueryBalanceRequestAmino): _136.QueryBalanceRequest;
                toAmino(message: _136.QueryBalanceRequest): _136.QueryBalanceRequestAmino;
                fromAminoMsg(object: _136.QueryBalanceRequestAminoMsg): _136.QueryBalanceRequest;
                toAminoMsg(message: _136.QueryBalanceRequest): _136.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _136.QueryBalanceRequestProtoMsg): _136.QueryBalanceRequest;
                toProto(message: _136.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _136.QueryBalanceRequest): _136.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _136.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryBalanceResponse;
                fromPartial(object: Partial<_136.QueryBalanceResponse>): _136.QueryBalanceResponse;
                fromAmino(object: _136.QueryBalanceResponseAmino): _136.QueryBalanceResponse;
                toAmino(message: _136.QueryBalanceResponse): _136.QueryBalanceResponseAmino;
                fromAminoMsg(object: _136.QueryBalanceResponseAminoMsg): _136.QueryBalanceResponse;
                toAminoMsg(message: _136.QueryBalanceResponse): _136.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _136.QueryBalanceResponseProtoMsg): _136.QueryBalanceResponse;
                toProto(message: _136.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _136.QueryBalanceResponse): _136.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _136.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryOwnerRequest;
                fromPartial(object: Partial<_136.QueryOwnerRequest>): _136.QueryOwnerRequest;
                fromAmino(object: _136.QueryOwnerRequestAmino): _136.QueryOwnerRequest;
                toAmino(message: _136.QueryOwnerRequest): _136.QueryOwnerRequestAmino;
                fromAminoMsg(object: _136.QueryOwnerRequestAminoMsg): _136.QueryOwnerRequest;
                toAminoMsg(message: _136.QueryOwnerRequest): _136.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _136.QueryOwnerRequestProtoMsg): _136.QueryOwnerRequest;
                toProto(message: _136.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _136.QueryOwnerRequest): _136.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _136.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryOwnerResponse;
                fromPartial(object: Partial<_136.QueryOwnerResponse>): _136.QueryOwnerResponse;
                fromAmino(object: _136.QueryOwnerResponseAmino): _136.QueryOwnerResponse;
                toAmino(message: _136.QueryOwnerResponse): _136.QueryOwnerResponseAmino;
                fromAminoMsg(object: _136.QueryOwnerResponseAminoMsg): _136.QueryOwnerResponse;
                toAminoMsg(message: _136.QueryOwnerResponse): _136.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _136.QueryOwnerResponseProtoMsg): _136.QueryOwnerResponse;
                toProto(message: _136.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _136.QueryOwnerResponse): _136.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _136.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QuerySupplyRequest;
                fromPartial(object: Partial<_136.QuerySupplyRequest>): _136.QuerySupplyRequest;
                fromAmino(object: _136.QuerySupplyRequestAmino): _136.QuerySupplyRequest;
                toAmino(message: _136.QuerySupplyRequest): _136.QuerySupplyRequestAmino;
                fromAminoMsg(object: _136.QuerySupplyRequestAminoMsg): _136.QuerySupplyRequest;
                toAminoMsg(message: _136.QuerySupplyRequest): _136.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _136.QuerySupplyRequestProtoMsg): _136.QuerySupplyRequest;
                toProto(message: _136.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _136.QuerySupplyRequest): _136.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _136.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QuerySupplyResponse;
                fromPartial(object: Partial<_136.QuerySupplyResponse>): _136.QuerySupplyResponse;
                fromAmino(object: _136.QuerySupplyResponseAmino): _136.QuerySupplyResponse;
                toAmino(message: _136.QuerySupplyResponse): _136.QuerySupplyResponseAmino;
                fromAminoMsg(object: _136.QuerySupplyResponseAminoMsg): _136.QuerySupplyResponse;
                toAminoMsg(message: _136.QuerySupplyResponse): _136.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _136.QuerySupplyResponseProtoMsg): _136.QuerySupplyResponse;
                toProto(message: _136.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _136.QuerySupplyResponse): _136.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _136.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryNFTsRequest;
                fromPartial(object: Partial<_136.QueryNFTsRequest>): _136.QueryNFTsRequest;
                fromAmino(object: _136.QueryNFTsRequestAmino): _136.QueryNFTsRequest;
                toAmino(message: _136.QueryNFTsRequest): _136.QueryNFTsRequestAmino;
                fromAminoMsg(object: _136.QueryNFTsRequestAminoMsg): _136.QueryNFTsRequest;
                toAminoMsg(message: _136.QueryNFTsRequest): _136.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _136.QueryNFTsRequestProtoMsg): _136.QueryNFTsRequest;
                toProto(message: _136.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _136.QueryNFTsRequest): _136.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _136.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryNFTsResponse;
                fromPartial(object: Partial<_136.QueryNFTsResponse>): _136.QueryNFTsResponse;
                fromAmino(object: _136.QueryNFTsResponseAmino): _136.QueryNFTsResponse;
                toAmino(message: _136.QueryNFTsResponse): _136.QueryNFTsResponseAmino;
                fromAminoMsg(object: _136.QueryNFTsResponseAminoMsg): _136.QueryNFTsResponse;
                toAminoMsg(message: _136.QueryNFTsResponse): _136.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _136.QueryNFTsResponseProtoMsg): _136.QueryNFTsResponse;
                toProto(message: _136.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _136.QueryNFTsResponse): _136.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _136.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryNFTRequest;
                fromPartial(object: Partial<_136.QueryNFTRequest>): _136.QueryNFTRequest;
                fromAmino(object: _136.QueryNFTRequestAmino): _136.QueryNFTRequest;
                toAmino(message: _136.QueryNFTRequest): _136.QueryNFTRequestAmino;
                fromAminoMsg(object: _136.QueryNFTRequestAminoMsg): _136.QueryNFTRequest;
                toAminoMsg(message: _136.QueryNFTRequest): _136.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _136.QueryNFTRequestProtoMsg): _136.QueryNFTRequest;
                toProto(message: _136.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _136.QueryNFTRequest): _136.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _136.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryNFTResponse;
                fromPartial(object: Partial<_136.QueryNFTResponse>): _136.QueryNFTResponse;
                fromAmino(object: _136.QueryNFTResponseAmino): _136.QueryNFTResponse;
                toAmino(message: _136.QueryNFTResponse): _136.QueryNFTResponseAmino;
                fromAminoMsg(object: _136.QueryNFTResponseAminoMsg): _136.QueryNFTResponse;
                toAminoMsg(message: _136.QueryNFTResponse): _136.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _136.QueryNFTResponseProtoMsg): _136.QueryNFTResponse;
                toProto(message: _136.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _136.QueryNFTResponse): _136.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _136.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryClassRequest;
                fromPartial(object: Partial<_136.QueryClassRequest>): _136.QueryClassRequest;
                fromAmino(object: _136.QueryClassRequestAmino): _136.QueryClassRequest;
                toAmino(message: _136.QueryClassRequest): _136.QueryClassRequestAmino;
                fromAminoMsg(object: _136.QueryClassRequestAminoMsg): _136.QueryClassRequest;
                toAminoMsg(message: _136.QueryClassRequest): _136.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _136.QueryClassRequestProtoMsg): _136.QueryClassRequest;
                toProto(message: _136.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _136.QueryClassRequest): _136.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _136.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryClassResponse;
                fromPartial(object: Partial<_136.QueryClassResponse>): _136.QueryClassResponse;
                fromAmino(object: _136.QueryClassResponseAmino): _136.QueryClassResponse;
                toAmino(message: _136.QueryClassResponse): _136.QueryClassResponseAmino;
                fromAminoMsg(object: _136.QueryClassResponseAminoMsg): _136.QueryClassResponse;
                toAminoMsg(message: _136.QueryClassResponse): _136.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _136.QueryClassResponseProtoMsg): _136.QueryClassResponse;
                toProto(message: _136.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _136.QueryClassResponse): _136.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _136.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryClassesRequest;
                fromPartial(object: Partial<_136.QueryClassesRequest>): _136.QueryClassesRequest;
                fromAmino(object: _136.QueryClassesRequestAmino): _136.QueryClassesRequest;
                toAmino(message: _136.QueryClassesRequest): _136.QueryClassesRequestAmino;
                fromAminoMsg(object: _136.QueryClassesRequestAminoMsg): _136.QueryClassesRequest;
                toAminoMsg(message: _136.QueryClassesRequest): _136.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _136.QueryClassesRequestProtoMsg): _136.QueryClassesRequest;
                toProto(message: _136.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _136.QueryClassesRequest): _136.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _136.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryClassesResponse;
                fromPartial(object: Partial<_136.QueryClassesResponse>): _136.QueryClassesResponse;
                fromAmino(object: _136.QueryClassesResponseAmino): _136.QueryClassesResponse;
                toAmino(message: _136.QueryClassesResponse): _136.QueryClassesResponseAmino;
                fromAminoMsg(object: _136.QueryClassesResponseAminoMsg): _136.QueryClassesResponse;
                toAminoMsg(message: _136.QueryClassesResponse): _136.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _136.QueryClassesResponseProtoMsg): _136.QueryClassesResponse;
                toProto(message: _136.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _136.QueryClassesResponse): _136.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _135.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.Class;
                fromPartial(object: Partial<_135.Class>): _135.Class;
                fromAmino(object: _135.ClassAmino): _135.Class;
                toAmino(message: _135.Class): _135.ClassAmino;
                fromAminoMsg(object: _135.ClassAminoMsg): _135.Class;
                toAminoMsg(message: _135.Class): _135.ClassAminoMsg;
                fromProtoMsg(message: _135.ClassProtoMsg): _135.Class;
                toProto(message: _135.Class): Uint8Array;
                toProtoMsg(message: _135.Class): _135.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _135.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.NFT;
                fromPartial(object: Partial<_135.NFT>): _135.NFT;
                fromAmino(object: _135.NFTAmino): _135.NFT;
                toAmino(message: _135.NFT): _135.NFTAmino;
                fromAminoMsg(object: _135.NFTAminoMsg): _135.NFT;
                toAminoMsg(message: _135.NFT): _135.NFTAminoMsg;
                fromProtoMsg(message: _135.NFTProtoMsg): _135.NFT;
                toProto(message: _135.NFT): Uint8Array;
                toProtoMsg(message: _135.NFT): _135.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _134.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Entry;
                fromPartial(object: Partial<_134.Entry>): _134.Entry;
                fromAmino(object: _134.EntryAmino): _134.Entry;
                toAmino(message: _134.Entry): _134.EntryAmino;
                fromAminoMsg(object: _134.EntryAminoMsg): _134.Entry;
                toAminoMsg(message: _134.Entry): _134.EntryAminoMsg;
                fromProtoMsg(message: _134.EntryProtoMsg): _134.Entry;
                toProto(message: _134.Entry): Uint8Array;
                toProtoMsg(message: _134.Entry): _134.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _133.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.EventSend;
                fromPartial(object: Partial<_133.EventSend>): _133.EventSend;
                fromAmino(object: _133.EventSendAmino): _133.EventSend;
                toAmino(message: _133.EventSend): _133.EventSendAmino;
                fromAminoMsg(object: _133.EventSendAminoMsg): _133.EventSend;
                toAminoMsg(message: _133.EventSend): _133.EventSendAminoMsg;
                fromProtoMsg(message: _133.EventSendProtoMsg): _133.EventSend;
                toProto(message: _133.EventSend): Uint8Array;
                toProtoMsg(message: _133.EventSend): _133.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _133.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.EventMint;
                fromPartial(object: Partial<_133.EventMint>): _133.EventMint;
                fromAmino(object: _133.EventMintAmino): _133.EventMint;
                toAmino(message: _133.EventMint): _133.EventMintAmino;
                fromAminoMsg(object: _133.EventMintAminoMsg): _133.EventMint;
                toAminoMsg(message: _133.EventMint): _133.EventMintAminoMsg;
                fromProtoMsg(message: _133.EventMintProtoMsg): _133.EventMint;
                toProto(message: _133.EventMint): Uint8Array;
                toProtoMsg(message: _133.EventMint): _133.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _133.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.EventBurn;
                fromPartial(object: Partial<_133.EventBurn>): _133.EventBurn;
                fromAmino(object: _133.EventBurnAmino): _133.EventBurn;
                toAmino(message: _133.EventBurn): _133.EventBurnAmino;
                fromAminoMsg(object: _133.EventBurnAminoMsg): _133.EventBurn;
                toAminoMsg(message: _133.EventBurn): _133.EventBurnAminoMsg;
                fromProtoMsg(message: _133.EventBurnProtoMsg): _133.EventBurn;
                toProto(message: _133.EventBurn): Uint8Array;
                toProtoMsg(message: _133.EventBurn): _133.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _138.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _138.Module;
                    fromPartial(_: Partial<_138.Module>): _138.Module;
                    fromAmino(_: _138.ModuleAmino): _138.Module;
                    toAmino(_: _138.Module): _138.ModuleAmino;
                    fromAminoMsg(object: _138.ModuleAminoMsg): _138.Module;
                    toAminoMsg(message: _138.Module): _138.ModuleAminoMsg;
                    fromProtoMsg(message: _138.ModuleProtoMsg): _138.Module;
                    toProto(message: _138.Module): Uint8Array;
                    toProtoMsg(message: _138.Module): _138.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _139.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.TableDescriptor;
                fromPartial(object: Partial<_139.TableDescriptor>): _139.TableDescriptor;
                fromAmino(object: _139.TableDescriptorAmino): _139.TableDescriptor;
                toAmino(message: _139.TableDescriptor): _139.TableDescriptorAmino;
                fromAminoMsg(object: _139.TableDescriptorAminoMsg): _139.TableDescriptor;
                toAminoMsg(message: _139.TableDescriptor): _139.TableDescriptorAminoMsg;
                fromProtoMsg(message: _139.TableDescriptorProtoMsg): _139.TableDescriptor;
                toProto(message: _139.TableDescriptor): Uint8Array;
                toProtoMsg(message: _139.TableDescriptor): _139.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _139.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_139.PrimaryKeyDescriptor>): _139.PrimaryKeyDescriptor;
                fromAmino(object: _139.PrimaryKeyDescriptorAmino): _139.PrimaryKeyDescriptor;
                toAmino(message: _139.PrimaryKeyDescriptor): _139.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _139.PrimaryKeyDescriptorAminoMsg): _139.PrimaryKeyDescriptor;
                toAminoMsg(message: _139.PrimaryKeyDescriptor): _139.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _139.PrimaryKeyDescriptorProtoMsg): _139.PrimaryKeyDescriptor;
                toProto(message: _139.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _139.PrimaryKeyDescriptor): _139.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _139.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_139.SecondaryIndexDescriptor>): _139.SecondaryIndexDescriptor;
                fromAmino(object: _139.SecondaryIndexDescriptorAmino): _139.SecondaryIndexDescriptor;
                toAmino(message: _139.SecondaryIndexDescriptor): _139.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _139.SecondaryIndexDescriptorAminoMsg): _139.SecondaryIndexDescriptor;
                toAminoMsg(message: _139.SecondaryIndexDescriptor): _139.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _139.SecondaryIndexDescriptorProtoMsg): _139.SecondaryIndexDescriptor;
                toProto(message: _139.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _139.SecondaryIndexDescriptor): _139.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _139.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.SingletonDescriptor;
                fromPartial(object: Partial<_139.SingletonDescriptor>): _139.SingletonDescriptor;
                fromAmino(object: _139.SingletonDescriptorAmino): _139.SingletonDescriptor;
                toAmino(message: _139.SingletonDescriptor): _139.SingletonDescriptorAmino;
                fromAminoMsg(object: _139.SingletonDescriptorAminoMsg): _139.SingletonDescriptor;
                toAminoMsg(message: _139.SingletonDescriptor): _139.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _139.SingletonDescriptorProtoMsg): _139.SingletonDescriptor;
                toProto(message: _139.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _139.SingletonDescriptor): _139.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _140.StorageType;
            storageTypeToJSON(object: _140.StorageType): string;
            StorageType: typeof _140.StorageType;
            StorageTypeSDKType: typeof _140.StorageType;
            StorageTypeAmino: typeof _140.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _140.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_140.ModuleSchemaDescriptor>): _140.ModuleSchemaDescriptor;
                fromAmino(object: _140.ModuleSchemaDescriptorAmino): _140.ModuleSchemaDescriptor;
                toAmino(message: _140.ModuleSchemaDescriptor): _140.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _140.ModuleSchemaDescriptorAminoMsg): _140.ModuleSchemaDescriptor;
                toAminoMsg(message: _140.ModuleSchemaDescriptor): _140.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _140.ModuleSchemaDescriptorProtoMsg): _140.ModuleSchemaDescriptor;
                toProto(message: _140.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _140.ModuleSchemaDescriptor): _140.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _140.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_140.ModuleSchemaDescriptor_FileEntry>): _140.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _140.ModuleSchemaDescriptor_FileEntryAmino): _140.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _140.ModuleSchemaDescriptor_FileEntry): _140.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _140.ModuleSchemaDescriptor_FileEntryAminoMsg): _140.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _140.ModuleSchemaDescriptor_FileEntry): _140.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _140.ModuleSchemaDescriptor_FileEntryProtoMsg): _140.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _140.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _140.ModuleSchemaDescriptor_FileEntry): _140.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _314.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                subspaces(request?: _142.QuerySubspacesRequest): Promise<_142.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _295.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _142.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryParamsRequest;
                fromPartial(object: Partial<_142.QueryParamsRequest>): _142.QueryParamsRequest;
                fromAmino(object: _142.QueryParamsRequestAmino): _142.QueryParamsRequest;
                toAmino(message: _142.QueryParamsRequest): _142.QueryParamsRequestAmino;
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
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _142.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _142.QuerySubspacesRequest;
                fromPartial(_: Partial<_142.QuerySubspacesRequest>): _142.QuerySubspacesRequest;
                fromAmino(_: _142.QuerySubspacesRequestAmino): _142.QuerySubspacesRequest;
                toAmino(_: _142.QuerySubspacesRequest): _142.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _142.QuerySubspacesRequestAminoMsg): _142.QuerySubspacesRequest;
                toAminoMsg(message: _142.QuerySubspacesRequest): _142.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _142.QuerySubspacesRequestProtoMsg): _142.QuerySubspacesRequest;
                toProto(message: _142.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _142.QuerySubspacesRequest): _142.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _142.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QuerySubspacesResponse;
                fromPartial(object: Partial<_142.QuerySubspacesResponse>): _142.QuerySubspacesResponse;
                fromAmino(object: _142.QuerySubspacesResponseAmino): _142.QuerySubspacesResponse;
                toAmino(message: _142.QuerySubspacesResponse): _142.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _142.QuerySubspacesResponseAminoMsg): _142.QuerySubspacesResponse;
                toAminoMsg(message: _142.QuerySubspacesResponse): _142.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _142.QuerySubspacesResponseProtoMsg): _142.QuerySubspacesResponse;
                toProto(message: _142.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _142.QuerySubspacesResponse): _142.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _142.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Subspace;
                fromPartial(object: Partial<_142.Subspace>): _142.Subspace;
                fromAmino(object: _142.SubspaceAmino): _142.Subspace;
                toAmino(message: _142.Subspace): _142.SubspaceAmino;
                fromAminoMsg(object: _142.SubspaceAminoMsg): _142.Subspace;
                toAminoMsg(message: _142.Subspace): _142.SubspaceAminoMsg;
                fromProtoMsg(message: _142.SubspaceProtoMsg): _142.Subspace;
                toProto(message: _142.Subspace): Uint8Array;
                toProtoMsg(message: _142.Subspace): _142.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _141.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.ParameterChangeProposal;
                fromPartial(object: Partial<_141.ParameterChangeProposal>): _141.ParameterChangeProposal;
                fromAmino(object: _141.ParameterChangeProposalAmino): _141.ParameterChangeProposal;
                toAmino(message: _141.ParameterChangeProposal): _141.ParameterChangeProposalAmino;
                fromAminoMsg(object: _141.ParameterChangeProposalAminoMsg): _141.ParameterChangeProposal;
                toAminoMsg(message: _141.ParameterChangeProposal): _141.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _141.ParameterChangeProposalProtoMsg): _141.ParameterChangeProposal;
                toProto(message: _141.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _141.ParameterChangeProposal): _141.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _141.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.ParamChange;
                fromPartial(object: Partial<_141.ParamChange>): _141.ParamChange;
                fromAmino(object: _141.ParamChangeAmino): _141.ParamChange;
                toAmino(message: _141.ParamChange): _141.ParamChangeAmino;
                fromAminoMsg(object: _141.ParamChangeAminoMsg): _141.ParamChange;
                toAminoMsg(message: _141.ParamChange): _141.ParamChangeAminoMsg;
                fromProtoMsg(message: _141.ParamChangeProtoMsg): _141.ParamChange;
                toProto(message: _141.ParamChange): Uint8Array;
                toProtoMsg(message: _141.ParamChange): _141.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _329.MsgClientImpl;
            QueryClientImpl: typeof _315.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                signingInfo(request: _144.QuerySigningInfoRequest): Promise<_144.QuerySigningInfoResponse>;
                signingInfos(request?: _144.QuerySigningInfosRequest): Promise<_144.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _296.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _146.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _146.MsgUnjail): {
                        typeUrl: string;
                        value: _146.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _146.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _146.MsgUnjail): {
                        typeUrl: string;
                        value: _146.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _146.MsgUnjail) => _146.MsgUnjailAmino;
                    fromAmino: (object: _146.MsgUnjailAmino) => _146.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _146.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.MsgUnjail;
                fromPartial(object: Partial<_146.MsgUnjail>): _146.MsgUnjail;
                fromAmino(object: _146.MsgUnjailAmino): _146.MsgUnjail;
                toAmino(message: _146.MsgUnjail): _146.MsgUnjailAmino;
                fromAminoMsg(object: _146.MsgUnjailAminoMsg): _146.MsgUnjail;
                toAminoMsg(message: _146.MsgUnjail): _146.MsgUnjailAminoMsg;
                fromProtoMsg(message: _146.MsgUnjailProtoMsg): _146.MsgUnjail;
                toProto(message: _146.MsgUnjail): Uint8Array;
                toProtoMsg(message: _146.MsgUnjail): _146.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _146.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _146.MsgUnjailResponse;
                fromPartial(_: Partial<_146.MsgUnjailResponse>): _146.MsgUnjailResponse;
                fromAmino(_: _146.MsgUnjailResponseAmino): _146.MsgUnjailResponse;
                toAmino(_: _146.MsgUnjailResponse): _146.MsgUnjailResponseAmino;
                fromAminoMsg(object: _146.MsgUnjailResponseAminoMsg): _146.MsgUnjailResponse;
                toAminoMsg(message: _146.MsgUnjailResponse): _146.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _146.MsgUnjailResponseProtoMsg): _146.MsgUnjailResponse;
                toProto(message: _146.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _146.MsgUnjailResponse): _146.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _145.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.ValidatorSigningInfo;
                fromPartial(object: Partial<_145.ValidatorSigningInfo>): _145.ValidatorSigningInfo;
                fromAmino(object: _145.ValidatorSigningInfoAmino): _145.ValidatorSigningInfo;
                toAmino(message: _145.ValidatorSigningInfo): _145.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _145.ValidatorSigningInfoAminoMsg): _145.ValidatorSigningInfo;
                toAminoMsg(message: _145.ValidatorSigningInfo): _145.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _145.ValidatorSigningInfoProtoMsg): _145.ValidatorSigningInfo;
                toProto(message: _145.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _145.ValidatorSigningInfo): _145.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _145.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.Params;
                fromPartial(object: Partial<_145.Params>): _145.Params;
                fromAmino(object: _145.ParamsAmino): _145.Params;
                toAmino(message: _145.Params): _145.ParamsAmino;
                fromAminoMsg(object: _145.ParamsAminoMsg): _145.Params;
                toAminoMsg(message: _145.Params): _145.ParamsAminoMsg;
                fromProtoMsg(message: _145.ParamsProtoMsg): _145.Params;
                toProto(message: _145.Params): Uint8Array;
                toProtoMsg(message: _145.Params): _145.ParamsProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _144.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QuerySigningInfoRequest;
                fromPartial(object: Partial<_144.QuerySigningInfoRequest>): _144.QuerySigningInfoRequest;
                fromAmino(object: _144.QuerySigningInfoRequestAmino): _144.QuerySigningInfoRequest;
                toAmino(message: _144.QuerySigningInfoRequest): _144.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _144.QuerySigningInfoRequestAminoMsg): _144.QuerySigningInfoRequest;
                toAminoMsg(message: _144.QuerySigningInfoRequest): _144.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _144.QuerySigningInfoRequestProtoMsg): _144.QuerySigningInfoRequest;
                toProto(message: _144.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _144.QuerySigningInfoRequest): _144.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _144.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QuerySigningInfoResponse;
                fromPartial(object: Partial<_144.QuerySigningInfoResponse>): _144.QuerySigningInfoResponse;
                fromAmino(object: _144.QuerySigningInfoResponseAmino): _144.QuerySigningInfoResponse;
                toAmino(message: _144.QuerySigningInfoResponse): _144.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _144.QuerySigningInfoResponseAminoMsg): _144.QuerySigningInfoResponse;
                toAminoMsg(message: _144.QuerySigningInfoResponse): _144.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _144.QuerySigningInfoResponseProtoMsg): _144.QuerySigningInfoResponse;
                toProto(message: _144.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _144.QuerySigningInfoResponse): _144.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _144.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QuerySigningInfosRequest;
                fromPartial(object: Partial<_144.QuerySigningInfosRequest>): _144.QuerySigningInfosRequest;
                fromAmino(object: _144.QuerySigningInfosRequestAmino): _144.QuerySigningInfosRequest;
                toAmino(message: _144.QuerySigningInfosRequest): _144.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _144.QuerySigningInfosRequestAminoMsg): _144.QuerySigningInfosRequest;
                toAminoMsg(message: _144.QuerySigningInfosRequest): _144.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _144.QuerySigningInfosRequestProtoMsg): _144.QuerySigningInfosRequest;
                toProto(message: _144.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _144.QuerySigningInfosRequest): _144.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _144.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.QuerySigningInfosResponse;
                fromPartial(object: Partial<_144.QuerySigningInfosResponse>): _144.QuerySigningInfosResponse;
                fromAmino(object: _144.QuerySigningInfosResponseAmino): _144.QuerySigningInfosResponse;
                toAmino(message: _144.QuerySigningInfosResponse): _144.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _144.QuerySigningInfosResponseAminoMsg): _144.QuerySigningInfosResponse;
                toAminoMsg(message: _144.QuerySigningInfosResponse): _144.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _144.QuerySigningInfosResponseProtoMsg): _144.QuerySigningInfosResponse;
                toProto(message: _144.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _144.QuerySigningInfosResponse): _144.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _143.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.SigningInfo;
                fromPartial(object: Partial<_143.SigningInfo>): _143.SigningInfo;
                fromAmino(object: _143.SigningInfoAmino): _143.SigningInfo;
                toAmino(message: _143.SigningInfo): _143.SigningInfoAmino;
                fromAminoMsg(object: _143.SigningInfoAminoMsg): _143.SigningInfo;
                toAminoMsg(message: _143.SigningInfo): _143.SigningInfoAminoMsg;
                fromProtoMsg(message: _143.SigningInfoProtoMsg): _143.SigningInfo;
                toProto(message: _143.SigningInfo): Uint8Array;
                toProtoMsg(message: _143.SigningInfo): _143.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _143.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorMissedBlocks;
                fromPartial(object: Partial<_143.ValidatorMissedBlocks>): _143.ValidatorMissedBlocks;
                fromAmino(object: _143.ValidatorMissedBlocksAmino): _143.ValidatorMissedBlocks;
                toAmino(message: _143.ValidatorMissedBlocks): _143.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _143.ValidatorMissedBlocksAminoMsg): _143.ValidatorMissedBlocks;
                toAminoMsg(message: _143.ValidatorMissedBlocks): _143.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _143.ValidatorMissedBlocksProtoMsg): _143.ValidatorMissedBlocks;
                toProto(message: _143.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _143.ValidatorMissedBlocks): _143.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _143.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MissedBlock;
                fromPartial(object: Partial<_143.MissedBlock>): _143.MissedBlock;
                fromAmino(object: _143.MissedBlockAmino): _143.MissedBlock;
                toAmino(message: _143.MissedBlock): _143.MissedBlockAmino;
                fromAminoMsg(object: _143.MissedBlockAminoMsg): _143.MissedBlock;
                toAminoMsg(message: _143.MissedBlock): _143.MissedBlockAminoMsg;
                fromProtoMsg(message: _143.MissedBlockProtoMsg): _143.MissedBlock;
                toProto(message: _143.MissedBlock): Uint8Array;
                toProtoMsg(message: _143.MissedBlock): _143.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _330.MsgClientImpl;
            QueryClientImpl: typeof _316.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _149.QueryValidatorsRequest): Promise<_149.QueryValidatorsResponse>;
                validator(request: _149.QueryValidatorRequest): Promise<_149.QueryValidatorResponse>;
                validatorDelegations(request: _149.QueryValidatorDelegationsRequest): Promise<_149.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _149.QueryValidatorUnbondingDelegationsRequest): Promise<_149.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _149.QueryDelegationRequest): Promise<_149.QueryDelegationResponse>;
                unbondingDelegation(request: _149.QueryUnbondingDelegationRequest): Promise<_149.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _149.QueryDelegatorDelegationsRequest): Promise<_149.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _149.QueryDelegatorUnbondingDelegationsRequest): Promise<_149.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _149.QueryRedelegationsRequest): Promise<_149.QueryRedelegationsResponse>;
                delegatorValidators(request: _149.QueryDelegatorValidatorsRequest): Promise<_149.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _149.QueryDelegatorValidatorRequest): Promise<_149.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _149.QueryHistoricalInfoRequest): Promise<_149.QueryHistoricalInfoResponse>;
                pool(request?: _149.QueryPoolRequest): Promise<_149.QueryPoolResponse>;
                params(request?: _149.QueryParamsRequest): Promise<_149.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _297.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _151.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _151.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _151.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _151.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _151.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _151.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _151.MsgCreateValidator): {
                        typeUrl: string;
                        value: _151.MsgCreateValidator;
                    };
                    editValidator(value: _151.MsgEditValidator): {
                        typeUrl: string;
                        value: _151.MsgEditValidator;
                    };
                    delegate(value: _151.MsgDelegate): {
                        typeUrl: string;
                        value: _151.MsgDelegate;
                    };
                    beginRedelegate(value: _151.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _151.MsgBeginRedelegate;
                    };
                    undelegate(value: _151.MsgUndelegate): {
                        typeUrl: string;
                        value: _151.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _151.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _151.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _151.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _151.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _151.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _151.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _151.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _151.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _151.MsgCreateValidator): {
                        typeUrl: string;
                        value: _151.MsgCreateValidator;
                    };
                    editValidator(value: _151.MsgEditValidator): {
                        typeUrl: string;
                        value: _151.MsgEditValidator;
                    };
                    delegate(value: _151.MsgDelegate): {
                        typeUrl: string;
                        value: _151.MsgDelegate;
                    };
                    beginRedelegate(value: _151.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _151.MsgBeginRedelegate;
                    };
                    undelegate(value: _151.MsgUndelegate): {
                        typeUrl: string;
                        value: _151.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _151.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _151.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _151.MsgCreateValidator) => _151.MsgCreateValidatorAmino;
                    fromAmino: (object: _151.MsgCreateValidatorAmino) => _151.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _151.MsgEditValidator) => _151.MsgEditValidatorAmino;
                    fromAmino: (object: _151.MsgEditValidatorAmino) => _151.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _151.MsgDelegate) => _151.MsgDelegateAmino;
                    fromAmino: (object: _151.MsgDelegateAmino) => _151.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _151.MsgBeginRedelegate) => _151.MsgBeginRedelegateAmino;
                    fromAmino: (object: _151.MsgBeginRedelegateAmino) => _151.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _151.MsgUndelegate) => _151.MsgUndelegateAmino;
                    fromAmino: (object: _151.MsgUndelegateAmino) => _151.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _151.MsgCancelUnbondingDelegation) => _151.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _151.MsgCancelUnbondingDelegationAmino) => _151.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _151.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MsgCreateValidator;
                fromPartial(object: Partial<_151.MsgCreateValidator>): _151.MsgCreateValidator;
                fromAmino(object: _151.MsgCreateValidatorAmino): _151.MsgCreateValidator;
                toAmino(message: _151.MsgCreateValidator): _151.MsgCreateValidatorAmino;
                fromAminoMsg(object: _151.MsgCreateValidatorAminoMsg): _151.MsgCreateValidator;
                toAminoMsg(message: _151.MsgCreateValidator): _151.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _151.MsgCreateValidatorProtoMsg): _151.MsgCreateValidator;
                toProto(message: _151.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _151.MsgCreateValidator): _151.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _151.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _151.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_151.MsgCreateValidatorResponse>): _151.MsgCreateValidatorResponse;
                fromAmino(_: _151.MsgCreateValidatorResponseAmino): _151.MsgCreateValidatorResponse;
                toAmino(_: _151.MsgCreateValidatorResponse): _151.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _151.MsgCreateValidatorResponseAminoMsg): _151.MsgCreateValidatorResponse;
                toAminoMsg(message: _151.MsgCreateValidatorResponse): _151.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _151.MsgCreateValidatorResponseProtoMsg): _151.MsgCreateValidatorResponse;
                toProto(message: _151.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _151.MsgCreateValidatorResponse): _151.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _151.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MsgEditValidator;
                fromPartial(object: Partial<_151.MsgEditValidator>): _151.MsgEditValidator;
                fromAmino(object: _151.MsgEditValidatorAmino): _151.MsgEditValidator;
                toAmino(message: _151.MsgEditValidator): _151.MsgEditValidatorAmino;
                fromAminoMsg(object: _151.MsgEditValidatorAminoMsg): _151.MsgEditValidator;
                toAminoMsg(message: _151.MsgEditValidator): _151.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _151.MsgEditValidatorProtoMsg): _151.MsgEditValidator;
                toProto(message: _151.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _151.MsgEditValidator): _151.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _151.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _151.MsgEditValidatorResponse;
                fromPartial(_: Partial<_151.MsgEditValidatorResponse>): _151.MsgEditValidatorResponse;
                fromAmino(_: _151.MsgEditValidatorResponseAmino): _151.MsgEditValidatorResponse;
                toAmino(_: _151.MsgEditValidatorResponse): _151.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _151.MsgEditValidatorResponseAminoMsg): _151.MsgEditValidatorResponse;
                toAminoMsg(message: _151.MsgEditValidatorResponse): _151.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _151.MsgEditValidatorResponseProtoMsg): _151.MsgEditValidatorResponse;
                toProto(message: _151.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _151.MsgEditValidatorResponse): _151.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _151.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MsgDelegate;
                fromPartial(object: Partial<_151.MsgDelegate>): _151.MsgDelegate;
                fromAmino(object: _151.MsgDelegateAmino): _151.MsgDelegate;
                toAmino(message: _151.MsgDelegate): _151.MsgDelegateAmino;
                fromAminoMsg(object: _151.MsgDelegateAminoMsg): _151.MsgDelegate;
                toAminoMsg(message: _151.MsgDelegate): _151.MsgDelegateAminoMsg;
                fromProtoMsg(message: _151.MsgDelegateProtoMsg): _151.MsgDelegate;
                toProto(message: _151.MsgDelegate): Uint8Array;
                toProtoMsg(message: _151.MsgDelegate): _151.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _151.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _151.MsgDelegateResponse;
                fromPartial(_: Partial<_151.MsgDelegateResponse>): _151.MsgDelegateResponse;
                fromAmino(_: _151.MsgDelegateResponseAmino): _151.MsgDelegateResponse;
                toAmino(_: _151.MsgDelegateResponse): _151.MsgDelegateResponseAmino;
                fromAminoMsg(object: _151.MsgDelegateResponseAminoMsg): _151.MsgDelegateResponse;
                toAminoMsg(message: _151.MsgDelegateResponse): _151.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _151.MsgDelegateResponseProtoMsg): _151.MsgDelegateResponse;
                toProto(message: _151.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _151.MsgDelegateResponse): _151.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _151.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MsgBeginRedelegate;
                fromPartial(object: Partial<_151.MsgBeginRedelegate>): _151.MsgBeginRedelegate;
                fromAmino(object: _151.MsgBeginRedelegateAmino): _151.MsgBeginRedelegate;
                toAmino(message: _151.MsgBeginRedelegate): _151.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _151.MsgBeginRedelegateAminoMsg): _151.MsgBeginRedelegate;
                toAminoMsg(message: _151.MsgBeginRedelegate): _151.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _151.MsgBeginRedelegateProtoMsg): _151.MsgBeginRedelegate;
                toProto(message: _151.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _151.MsgBeginRedelegate): _151.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _151.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_151.MsgBeginRedelegateResponse>): _151.MsgBeginRedelegateResponse;
                fromAmino(object: _151.MsgBeginRedelegateResponseAmino): _151.MsgBeginRedelegateResponse;
                toAmino(message: _151.MsgBeginRedelegateResponse): _151.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _151.MsgBeginRedelegateResponseAminoMsg): _151.MsgBeginRedelegateResponse;
                toAminoMsg(message: _151.MsgBeginRedelegateResponse): _151.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _151.MsgBeginRedelegateResponseProtoMsg): _151.MsgBeginRedelegateResponse;
                toProto(message: _151.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _151.MsgBeginRedelegateResponse): _151.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _151.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MsgUndelegate;
                fromPartial(object: Partial<_151.MsgUndelegate>): _151.MsgUndelegate;
                fromAmino(object: _151.MsgUndelegateAmino): _151.MsgUndelegate;
                toAmino(message: _151.MsgUndelegate): _151.MsgUndelegateAmino;
                fromAminoMsg(object: _151.MsgUndelegateAminoMsg): _151.MsgUndelegate;
                toAminoMsg(message: _151.MsgUndelegate): _151.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _151.MsgUndelegateProtoMsg): _151.MsgUndelegate;
                toProto(message: _151.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _151.MsgUndelegate): _151.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _151.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MsgUndelegateResponse;
                fromPartial(object: Partial<_151.MsgUndelegateResponse>): _151.MsgUndelegateResponse;
                fromAmino(object: _151.MsgUndelegateResponseAmino): _151.MsgUndelegateResponse;
                toAmino(message: _151.MsgUndelegateResponse): _151.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _151.MsgUndelegateResponseAminoMsg): _151.MsgUndelegateResponse;
                toAminoMsg(message: _151.MsgUndelegateResponse): _151.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _151.MsgUndelegateResponseProtoMsg): _151.MsgUndelegateResponse;
                toProto(message: _151.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _151.MsgUndelegateResponse): _151.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _151.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_151.MsgCancelUnbondingDelegation>): _151.MsgCancelUnbondingDelegation;
                fromAmino(object: _151.MsgCancelUnbondingDelegationAmino): _151.MsgCancelUnbondingDelegation;
                toAmino(message: _151.MsgCancelUnbondingDelegation): _151.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _151.MsgCancelUnbondingDelegationAminoMsg): _151.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _151.MsgCancelUnbondingDelegation): _151.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _151.MsgCancelUnbondingDelegationProtoMsg): _151.MsgCancelUnbondingDelegation;
                toProto(message: _151.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _151.MsgCancelUnbondingDelegation): _151.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _151.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _151.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_151.MsgCancelUnbondingDelegationResponse>): _151.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _151.MsgCancelUnbondingDelegationResponseAmino): _151.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _151.MsgCancelUnbondingDelegationResponse): _151.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _151.MsgCancelUnbondingDelegationResponseAminoMsg): _151.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _151.MsgCancelUnbondingDelegationResponse): _151.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _151.MsgCancelUnbondingDelegationResponseProtoMsg): _151.MsgCancelUnbondingDelegationResponse;
                toProto(message: _151.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _151.MsgCancelUnbondingDelegationResponse): _151.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _150.BondStatus;
            bondStatusToJSON(object: _150.BondStatus): string;
            BondStatus: typeof _150.BondStatus;
            BondStatusSDKType: typeof _150.BondStatus;
            BondStatusAmino: typeof _150.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _150.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.HistoricalInfo;
                fromPartial(object: Partial<_150.HistoricalInfo>): _150.HistoricalInfo;
                fromAmino(object: _150.HistoricalInfoAmino): _150.HistoricalInfo;
                toAmino(message: _150.HistoricalInfo): _150.HistoricalInfoAmino;
                fromAminoMsg(object: _150.HistoricalInfoAminoMsg): _150.HistoricalInfo;
                toAminoMsg(message: _150.HistoricalInfo): _150.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _150.HistoricalInfoProtoMsg): _150.HistoricalInfo;
                toProto(message: _150.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _150.HistoricalInfo): _150.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _150.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.CommissionRates;
                fromPartial(object: Partial<_150.CommissionRates>): _150.CommissionRates;
                fromAmino(object: _150.CommissionRatesAmino): _150.CommissionRates;
                toAmino(message: _150.CommissionRates): _150.CommissionRatesAmino;
                fromAminoMsg(object: _150.CommissionRatesAminoMsg): _150.CommissionRates;
                toAminoMsg(message: _150.CommissionRates): _150.CommissionRatesAminoMsg;
                fromProtoMsg(message: _150.CommissionRatesProtoMsg): _150.CommissionRates;
                toProto(message: _150.CommissionRates): Uint8Array;
                toProtoMsg(message: _150.CommissionRates): _150.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _150.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Commission;
                fromPartial(object: Partial<_150.Commission>): _150.Commission;
                fromAmino(object: _150.CommissionAmino): _150.Commission;
                toAmino(message: _150.Commission): _150.CommissionAmino;
                fromAminoMsg(object: _150.CommissionAminoMsg): _150.Commission;
                toAminoMsg(message: _150.Commission): _150.CommissionAminoMsg;
                fromProtoMsg(message: _150.CommissionProtoMsg): _150.Commission;
                toProto(message: _150.Commission): Uint8Array;
                toProtoMsg(message: _150.Commission): _150.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _150.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Description;
                fromPartial(object: Partial<_150.Description>): _150.Description;
                fromAmino(object: _150.DescriptionAmino): _150.Description;
                toAmino(message: _150.Description): _150.DescriptionAmino;
                fromAminoMsg(object: _150.DescriptionAminoMsg): _150.Description;
                toAminoMsg(message: _150.Description): _150.DescriptionAminoMsg;
                fromProtoMsg(message: _150.DescriptionProtoMsg): _150.Description;
                toProto(message: _150.Description): Uint8Array;
                toProtoMsg(message: _150.Description): _150.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _150.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Validator;
                fromPartial(object: Partial<_150.Validator>): _150.Validator;
                fromAmino(object: _150.ValidatorAmino): _150.Validator;
                toAmino(message: _150.Validator): _150.ValidatorAmino;
                fromAminoMsg(object: _150.ValidatorAminoMsg): _150.Validator;
                toAminoMsg(message: _150.Validator): _150.ValidatorAminoMsg;
                fromProtoMsg(message: _150.ValidatorProtoMsg): _150.Validator;
                toProto(message: _150.Validator): Uint8Array;
                toProtoMsg(message: _150.Validator): _150.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _150.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.ValAddresses;
                fromPartial(object: Partial<_150.ValAddresses>): _150.ValAddresses;
                fromAmino(object: _150.ValAddressesAmino): _150.ValAddresses;
                toAmino(message: _150.ValAddresses): _150.ValAddressesAmino;
                fromAminoMsg(object: _150.ValAddressesAminoMsg): _150.ValAddresses;
                toAminoMsg(message: _150.ValAddresses): _150.ValAddressesAminoMsg;
                fromProtoMsg(message: _150.ValAddressesProtoMsg): _150.ValAddresses;
                toProto(message: _150.ValAddresses): Uint8Array;
                toProtoMsg(message: _150.ValAddresses): _150.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _150.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.DVPair;
                fromPartial(object: Partial<_150.DVPair>): _150.DVPair;
                fromAmino(object: _150.DVPairAmino): _150.DVPair;
                toAmino(message: _150.DVPair): _150.DVPairAmino;
                fromAminoMsg(object: _150.DVPairAminoMsg): _150.DVPair;
                toAminoMsg(message: _150.DVPair): _150.DVPairAminoMsg;
                fromProtoMsg(message: _150.DVPairProtoMsg): _150.DVPair;
                toProto(message: _150.DVPair): Uint8Array;
                toProtoMsg(message: _150.DVPair): _150.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _150.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.DVPairs;
                fromPartial(object: Partial<_150.DVPairs>): _150.DVPairs;
                fromAmino(object: _150.DVPairsAmino): _150.DVPairs;
                toAmino(message: _150.DVPairs): _150.DVPairsAmino;
                fromAminoMsg(object: _150.DVPairsAminoMsg): _150.DVPairs;
                toAminoMsg(message: _150.DVPairs): _150.DVPairsAminoMsg;
                fromProtoMsg(message: _150.DVPairsProtoMsg): _150.DVPairs;
                toProto(message: _150.DVPairs): Uint8Array;
                toProtoMsg(message: _150.DVPairs): _150.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _150.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.DVVTriplet;
                fromPartial(object: Partial<_150.DVVTriplet>): _150.DVVTriplet;
                fromAmino(object: _150.DVVTripletAmino): _150.DVVTriplet;
                toAmino(message: _150.DVVTriplet): _150.DVVTripletAmino;
                fromAminoMsg(object: _150.DVVTripletAminoMsg): _150.DVVTriplet;
                toAminoMsg(message: _150.DVVTriplet): _150.DVVTripletAminoMsg;
                fromProtoMsg(message: _150.DVVTripletProtoMsg): _150.DVVTriplet;
                toProto(message: _150.DVVTriplet): Uint8Array;
                toProtoMsg(message: _150.DVVTriplet): _150.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _150.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.DVVTriplets;
                fromPartial(object: Partial<_150.DVVTriplets>): _150.DVVTriplets;
                fromAmino(object: _150.DVVTripletsAmino): _150.DVVTriplets;
                toAmino(message: _150.DVVTriplets): _150.DVVTripletsAmino;
                fromAminoMsg(object: _150.DVVTripletsAminoMsg): _150.DVVTriplets;
                toAminoMsg(message: _150.DVVTriplets): _150.DVVTripletsAminoMsg;
                fromProtoMsg(message: _150.DVVTripletsProtoMsg): _150.DVVTriplets;
                toProto(message: _150.DVVTriplets): Uint8Array;
                toProtoMsg(message: _150.DVVTriplets): _150.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _150.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Delegation;
                fromPartial(object: Partial<_150.Delegation>): _150.Delegation;
                fromAmino(object: _150.DelegationAmino): _150.Delegation;
                toAmino(message: _150.Delegation): _150.DelegationAmino;
                fromAminoMsg(object: _150.DelegationAminoMsg): _150.Delegation;
                toAminoMsg(message: _150.Delegation): _150.DelegationAminoMsg;
                fromProtoMsg(message: _150.DelegationProtoMsg): _150.Delegation;
                toProto(message: _150.Delegation): Uint8Array;
                toProtoMsg(message: _150.Delegation): _150.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _150.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.UnbondingDelegation;
                fromPartial(object: Partial<_150.UnbondingDelegation>): _150.UnbondingDelegation;
                fromAmino(object: _150.UnbondingDelegationAmino): _150.UnbondingDelegation;
                toAmino(message: _150.UnbondingDelegation): _150.UnbondingDelegationAmino;
                fromAminoMsg(object: _150.UnbondingDelegationAminoMsg): _150.UnbondingDelegation;
                toAminoMsg(message: _150.UnbondingDelegation): _150.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _150.UnbondingDelegationProtoMsg): _150.UnbondingDelegation;
                toProto(message: _150.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _150.UnbondingDelegation): _150.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _150.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.UnbondingDelegationEntry;
                fromPartial(object: Partial<_150.UnbondingDelegationEntry>): _150.UnbondingDelegationEntry;
                fromAmino(object: _150.UnbondingDelegationEntryAmino): _150.UnbondingDelegationEntry;
                toAmino(message: _150.UnbondingDelegationEntry): _150.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _150.UnbondingDelegationEntryAminoMsg): _150.UnbondingDelegationEntry;
                toAminoMsg(message: _150.UnbondingDelegationEntry): _150.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _150.UnbondingDelegationEntryProtoMsg): _150.UnbondingDelegationEntry;
                toProto(message: _150.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _150.UnbondingDelegationEntry): _150.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _150.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.RedelegationEntry;
                fromPartial(object: Partial<_150.RedelegationEntry>): _150.RedelegationEntry;
                fromAmino(object: _150.RedelegationEntryAmino): _150.RedelegationEntry;
                toAmino(message: _150.RedelegationEntry): _150.RedelegationEntryAmino;
                fromAminoMsg(object: _150.RedelegationEntryAminoMsg): _150.RedelegationEntry;
                toAminoMsg(message: _150.RedelegationEntry): _150.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _150.RedelegationEntryProtoMsg): _150.RedelegationEntry;
                toProto(message: _150.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _150.RedelegationEntry): _150.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _150.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Redelegation;
                fromPartial(object: Partial<_150.Redelegation>): _150.Redelegation;
                fromAmino(object: _150.RedelegationAmino): _150.Redelegation;
                toAmino(message: _150.Redelegation): _150.RedelegationAmino;
                fromAminoMsg(object: _150.RedelegationAminoMsg): _150.Redelegation;
                toAminoMsg(message: _150.Redelegation): _150.RedelegationAminoMsg;
                fromProtoMsg(message: _150.RedelegationProtoMsg): _150.Redelegation;
                toProto(message: _150.Redelegation): Uint8Array;
                toProtoMsg(message: _150.Redelegation): _150.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _150.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Params;
                fromPartial(object: Partial<_150.Params>): _150.Params;
                fromAmino(object: _150.ParamsAmino): _150.Params;
                toAmino(message: _150.Params): _150.ParamsAmino;
                fromAminoMsg(object: _150.ParamsAminoMsg): _150.Params;
                toAminoMsg(message: _150.Params): _150.ParamsAminoMsg;
                fromProtoMsg(message: _150.ParamsProtoMsg): _150.Params;
                toProto(message: _150.Params): Uint8Array;
                toProtoMsg(message: _150.Params): _150.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _150.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.DelegationResponse;
                fromPartial(object: Partial<_150.DelegationResponse>): _150.DelegationResponse;
                fromAmino(object: _150.DelegationResponseAmino): _150.DelegationResponse;
                toAmino(message: _150.DelegationResponse): _150.DelegationResponseAmino;
                fromAminoMsg(object: _150.DelegationResponseAminoMsg): _150.DelegationResponse;
                toAminoMsg(message: _150.DelegationResponse): _150.DelegationResponseAminoMsg;
                fromProtoMsg(message: _150.DelegationResponseProtoMsg): _150.DelegationResponse;
                toProto(message: _150.DelegationResponse): Uint8Array;
                toProtoMsg(message: _150.DelegationResponse): _150.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _150.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.RedelegationEntryResponse;
                fromPartial(object: Partial<_150.RedelegationEntryResponse>): _150.RedelegationEntryResponse;
                fromAmino(object: _150.RedelegationEntryResponseAmino): _150.RedelegationEntryResponse;
                toAmino(message: _150.RedelegationEntryResponse): _150.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _150.RedelegationEntryResponseAminoMsg): _150.RedelegationEntryResponse;
                toAminoMsg(message: _150.RedelegationEntryResponse): _150.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _150.RedelegationEntryResponseProtoMsg): _150.RedelegationEntryResponse;
                toProto(message: _150.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _150.RedelegationEntryResponse): _150.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _150.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.RedelegationResponse;
                fromPartial(object: Partial<_150.RedelegationResponse>): _150.RedelegationResponse;
                fromAmino(object: _150.RedelegationResponseAmino): _150.RedelegationResponse;
                toAmino(message: _150.RedelegationResponse): _150.RedelegationResponseAmino;
                fromAminoMsg(object: _150.RedelegationResponseAminoMsg): _150.RedelegationResponse;
                toAminoMsg(message: _150.RedelegationResponse): _150.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _150.RedelegationResponseProtoMsg): _150.RedelegationResponse;
                toProto(message: _150.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _150.RedelegationResponse): _150.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _150.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Pool;
                fromPartial(object: Partial<_150.Pool>): _150.Pool;
                fromAmino(object: _150.PoolAmino): _150.Pool;
                toAmino(message: _150.Pool): _150.PoolAmino;
                fromAminoMsg(object: _150.PoolAminoMsg): _150.Pool;
                toAminoMsg(message: _150.Pool): _150.PoolAminoMsg;
                fromProtoMsg(message: _150.PoolProtoMsg): _150.Pool;
                toProto(message: _150.Pool): Uint8Array;
                toProtoMsg(message: _150.Pool): _150.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _149.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryValidatorsRequest;
                fromPartial(object: Partial<_149.QueryValidatorsRequest>): _149.QueryValidatorsRequest;
                fromAmino(object: _149.QueryValidatorsRequestAmino): _149.QueryValidatorsRequest;
                toAmino(message: _149.QueryValidatorsRequest): _149.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _149.QueryValidatorsRequestAminoMsg): _149.QueryValidatorsRequest;
                toAminoMsg(message: _149.QueryValidatorsRequest): _149.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _149.QueryValidatorsRequestProtoMsg): _149.QueryValidatorsRequest;
                toProto(message: _149.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _149.QueryValidatorsRequest): _149.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _149.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryValidatorsResponse;
                fromPartial(object: Partial<_149.QueryValidatorsResponse>): _149.QueryValidatorsResponse;
                fromAmino(object: _149.QueryValidatorsResponseAmino): _149.QueryValidatorsResponse;
                toAmino(message: _149.QueryValidatorsResponse): _149.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _149.QueryValidatorsResponseAminoMsg): _149.QueryValidatorsResponse;
                toAminoMsg(message: _149.QueryValidatorsResponse): _149.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _149.QueryValidatorsResponseProtoMsg): _149.QueryValidatorsResponse;
                toProto(message: _149.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _149.QueryValidatorsResponse): _149.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _149.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryValidatorRequest;
                fromPartial(object: Partial<_149.QueryValidatorRequest>): _149.QueryValidatorRequest;
                fromAmino(object: _149.QueryValidatorRequestAmino): _149.QueryValidatorRequest;
                toAmino(message: _149.QueryValidatorRequest): _149.QueryValidatorRequestAmino;
                fromAminoMsg(object: _149.QueryValidatorRequestAminoMsg): _149.QueryValidatorRequest;
                toAminoMsg(message: _149.QueryValidatorRequest): _149.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _149.QueryValidatorRequestProtoMsg): _149.QueryValidatorRequest;
                toProto(message: _149.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _149.QueryValidatorRequest): _149.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _149.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryValidatorResponse;
                fromPartial(object: Partial<_149.QueryValidatorResponse>): _149.QueryValidatorResponse;
                fromAmino(object: _149.QueryValidatorResponseAmino): _149.QueryValidatorResponse;
                toAmino(message: _149.QueryValidatorResponse): _149.QueryValidatorResponseAmino;
                fromAminoMsg(object: _149.QueryValidatorResponseAminoMsg): _149.QueryValidatorResponse;
                toAminoMsg(message: _149.QueryValidatorResponse): _149.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _149.QueryValidatorResponseProtoMsg): _149.QueryValidatorResponse;
                toProto(message: _149.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _149.QueryValidatorResponse): _149.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _149.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_149.QueryValidatorDelegationsRequest>): _149.QueryValidatorDelegationsRequest;
                fromAmino(object: _149.QueryValidatorDelegationsRequestAmino): _149.QueryValidatorDelegationsRequest;
                toAmino(message: _149.QueryValidatorDelegationsRequest): _149.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _149.QueryValidatorDelegationsRequestAminoMsg): _149.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _149.QueryValidatorDelegationsRequest): _149.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _149.QueryValidatorDelegationsRequestProtoMsg): _149.QueryValidatorDelegationsRequest;
                toProto(message: _149.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _149.QueryValidatorDelegationsRequest): _149.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _149.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_149.QueryValidatorDelegationsResponse>): _149.QueryValidatorDelegationsResponse;
                fromAmino(object: _149.QueryValidatorDelegationsResponseAmino): _149.QueryValidatorDelegationsResponse;
                toAmino(message: _149.QueryValidatorDelegationsResponse): _149.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _149.QueryValidatorDelegationsResponseAminoMsg): _149.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _149.QueryValidatorDelegationsResponse): _149.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _149.QueryValidatorDelegationsResponseProtoMsg): _149.QueryValidatorDelegationsResponse;
                toProto(message: _149.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _149.QueryValidatorDelegationsResponse): _149.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _149.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_149.QueryValidatorUnbondingDelegationsRequest>): _149.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _149.QueryValidatorUnbondingDelegationsRequestAmino): _149.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _149.QueryValidatorUnbondingDelegationsRequest): _149.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _149.QueryValidatorUnbondingDelegationsRequestAminoMsg): _149.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _149.QueryValidatorUnbondingDelegationsRequest): _149.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _149.QueryValidatorUnbondingDelegationsRequestProtoMsg): _149.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _149.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _149.QueryValidatorUnbondingDelegationsRequest): _149.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _149.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_149.QueryValidatorUnbondingDelegationsResponse>): _149.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _149.QueryValidatorUnbondingDelegationsResponseAmino): _149.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _149.QueryValidatorUnbondingDelegationsResponse): _149.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _149.QueryValidatorUnbondingDelegationsResponseAminoMsg): _149.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _149.QueryValidatorUnbondingDelegationsResponse): _149.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _149.QueryValidatorUnbondingDelegationsResponseProtoMsg): _149.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _149.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _149.QueryValidatorUnbondingDelegationsResponse): _149.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _149.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryDelegationRequest;
                fromPartial(object: Partial<_149.QueryDelegationRequest>): _149.QueryDelegationRequest;
                fromAmino(object: _149.QueryDelegationRequestAmino): _149.QueryDelegationRequest;
                toAmino(message: _149.QueryDelegationRequest): _149.QueryDelegationRequestAmino;
                fromAminoMsg(object: _149.QueryDelegationRequestAminoMsg): _149.QueryDelegationRequest;
                toAminoMsg(message: _149.QueryDelegationRequest): _149.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _149.QueryDelegationRequestProtoMsg): _149.QueryDelegationRequest;
                toProto(message: _149.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _149.QueryDelegationRequest): _149.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _149.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryDelegationResponse;
                fromPartial(object: Partial<_149.QueryDelegationResponse>): _149.QueryDelegationResponse;
                fromAmino(object: _149.QueryDelegationResponseAmino): _149.QueryDelegationResponse;
                toAmino(message: _149.QueryDelegationResponse): _149.QueryDelegationResponseAmino;
                fromAminoMsg(object: _149.QueryDelegationResponseAminoMsg): _149.QueryDelegationResponse;
                toAminoMsg(message: _149.QueryDelegationResponse): _149.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _149.QueryDelegationResponseProtoMsg): _149.QueryDelegationResponse;
                toProto(message: _149.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _149.QueryDelegationResponse): _149.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _149.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_149.QueryUnbondingDelegationRequest>): _149.QueryUnbondingDelegationRequest;
                fromAmino(object: _149.QueryUnbondingDelegationRequestAmino): _149.QueryUnbondingDelegationRequest;
                toAmino(message: _149.QueryUnbondingDelegationRequest): _149.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _149.QueryUnbondingDelegationRequestAminoMsg): _149.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _149.QueryUnbondingDelegationRequest): _149.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _149.QueryUnbondingDelegationRequestProtoMsg): _149.QueryUnbondingDelegationRequest;
                toProto(message: _149.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _149.QueryUnbondingDelegationRequest): _149.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _149.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_149.QueryUnbondingDelegationResponse>): _149.QueryUnbondingDelegationResponse;
                fromAmino(object: _149.QueryUnbondingDelegationResponseAmino): _149.QueryUnbondingDelegationResponse;
                toAmino(message: _149.QueryUnbondingDelegationResponse): _149.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _149.QueryUnbondingDelegationResponseAminoMsg): _149.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _149.QueryUnbondingDelegationResponse): _149.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _149.QueryUnbondingDelegationResponseProtoMsg): _149.QueryUnbondingDelegationResponse;
                toProto(message: _149.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _149.QueryUnbondingDelegationResponse): _149.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _149.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_149.QueryDelegatorDelegationsRequest>): _149.QueryDelegatorDelegationsRequest;
                fromAmino(object: _149.QueryDelegatorDelegationsRequestAmino): _149.QueryDelegatorDelegationsRequest;
                toAmino(message: _149.QueryDelegatorDelegationsRequest): _149.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _149.QueryDelegatorDelegationsRequestAminoMsg): _149.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _149.QueryDelegatorDelegationsRequest): _149.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _149.QueryDelegatorDelegationsRequestProtoMsg): _149.QueryDelegatorDelegationsRequest;
                toProto(message: _149.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _149.QueryDelegatorDelegationsRequest): _149.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _149.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_149.QueryDelegatorDelegationsResponse>): _149.QueryDelegatorDelegationsResponse;
                fromAmino(object: _149.QueryDelegatorDelegationsResponseAmino): _149.QueryDelegatorDelegationsResponse;
                toAmino(message: _149.QueryDelegatorDelegationsResponse): _149.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _149.QueryDelegatorDelegationsResponseAminoMsg): _149.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _149.QueryDelegatorDelegationsResponse): _149.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _149.QueryDelegatorDelegationsResponseProtoMsg): _149.QueryDelegatorDelegationsResponse;
                toProto(message: _149.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _149.QueryDelegatorDelegationsResponse): _149.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _149.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_149.QueryDelegatorUnbondingDelegationsRequest>): _149.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _149.QueryDelegatorUnbondingDelegationsRequestAmino): _149.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _149.QueryDelegatorUnbondingDelegationsRequest): _149.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _149.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _149.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _149.QueryDelegatorUnbondingDelegationsRequest): _149.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _149.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _149.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _149.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _149.QueryDelegatorUnbondingDelegationsRequest): _149.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _149.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_149.QueryDelegatorUnbondingDelegationsResponse>): _149.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _149.QueryDelegatorUnbondingDelegationsResponseAmino): _149.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _149.QueryDelegatorUnbondingDelegationsResponse): _149.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _149.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _149.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _149.QueryDelegatorUnbondingDelegationsResponse): _149.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _149.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _149.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _149.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _149.QueryDelegatorUnbondingDelegationsResponse): _149.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _149.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryRedelegationsRequest;
                fromPartial(object: Partial<_149.QueryRedelegationsRequest>): _149.QueryRedelegationsRequest;
                fromAmino(object: _149.QueryRedelegationsRequestAmino): _149.QueryRedelegationsRequest;
                toAmino(message: _149.QueryRedelegationsRequest): _149.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _149.QueryRedelegationsRequestAminoMsg): _149.QueryRedelegationsRequest;
                toAminoMsg(message: _149.QueryRedelegationsRequest): _149.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _149.QueryRedelegationsRequestProtoMsg): _149.QueryRedelegationsRequest;
                toProto(message: _149.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _149.QueryRedelegationsRequest): _149.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _149.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryRedelegationsResponse;
                fromPartial(object: Partial<_149.QueryRedelegationsResponse>): _149.QueryRedelegationsResponse;
                fromAmino(object: _149.QueryRedelegationsResponseAmino): _149.QueryRedelegationsResponse;
                toAmino(message: _149.QueryRedelegationsResponse): _149.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _149.QueryRedelegationsResponseAminoMsg): _149.QueryRedelegationsResponse;
                toAminoMsg(message: _149.QueryRedelegationsResponse): _149.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _149.QueryRedelegationsResponseProtoMsg): _149.QueryRedelegationsResponse;
                toProto(message: _149.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _149.QueryRedelegationsResponse): _149.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _149.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_149.QueryDelegatorValidatorsRequest>): _149.QueryDelegatorValidatorsRequest;
                fromAmino(object: _149.QueryDelegatorValidatorsRequestAmino): _149.QueryDelegatorValidatorsRequest;
                toAmino(message: _149.QueryDelegatorValidatorsRequest): _149.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _149.QueryDelegatorValidatorsRequestAminoMsg): _149.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _149.QueryDelegatorValidatorsRequest): _149.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _149.QueryDelegatorValidatorsRequestProtoMsg): _149.QueryDelegatorValidatorsRequest;
                toProto(message: _149.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _149.QueryDelegatorValidatorsRequest): _149.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _149.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_149.QueryDelegatorValidatorsResponse>): _149.QueryDelegatorValidatorsResponse;
                fromAmino(object: _149.QueryDelegatorValidatorsResponseAmino): _149.QueryDelegatorValidatorsResponse;
                toAmino(message: _149.QueryDelegatorValidatorsResponse): _149.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _149.QueryDelegatorValidatorsResponseAminoMsg): _149.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _149.QueryDelegatorValidatorsResponse): _149.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _149.QueryDelegatorValidatorsResponseProtoMsg): _149.QueryDelegatorValidatorsResponse;
                toProto(message: _149.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _149.QueryDelegatorValidatorsResponse): _149.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _149.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_149.QueryDelegatorValidatorRequest>): _149.QueryDelegatorValidatorRequest;
                fromAmino(object: _149.QueryDelegatorValidatorRequestAmino): _149.QueryDelegatorValidatorRequest;
                toAmino(message: _149.QueryDelegatorValidatorRequest): _149.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _149.QueryDelegatorValidatorRequestAminoMsg): _149.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _149.QueryDelegatorValidatorRequest): _149.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _149.QueryDelegatorValidatorRequestProtoMsg): _149.QueryDelegatorValidatorRequest;
                toProto(message: _149.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _149.QueryDelegatorValidatorRequest): _149.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _149.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_149.QueryDelegatorValidatorResponse>): _149.QueryDelegatorValidatorResponse;
                fromAmino(object: _149.QueryDelegatorValidatorResponseAmino): _149.QueryDelegatorValidatorResponse;
                toAmino(message: _149.QueryDelegatorValidatorResponse): _149.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _149.QueryDelegatorValidatorResponseAminoMsg): _149.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _149.QueryDelegatorValidatorResponse): _149.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _149.QueryDelegatorValidatorResponseProtoMsg): _149.QueryDelegatorValidatorResponse;
                toProto(message: _149.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _149.QueryDelegatorValidatorResponse): _149.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _149.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_149.QueryHistoricalInfoRequest>): _149.QueryHistoricalInfoRequest;
                fromAmino(object: _149.QueryHistoricalInfoRequestAmino): _149.QueryHistoricalInfoRequest;
                toAmino(message: _149.QueryHistoricalInfoRequest): _149.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _149.QueryHistoricalInfoRequestAminoMsg): _149.QueryHistoricalInfoRequest;
                toAminoMsg(message: _149.QueryHistoricalInfoRequest): _149.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _149.QueryHistoricalInfoRequestProtoMsg): _149.QueryHistoricalInfoRequest;
                toProto(message: _149.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _149.QueryHistoricalInfoRequest): _149.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _149.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_149.QueryHistoricalInfoResponse>): _149.QueryHistoricalInfoResponse;
                fromAmino(object: _149.QueryHistoricalInfoResponseAmino): _149.QueryHistoricalInfoResponse;
                toAmino(message: _149.QueryHistoricalInfoResponse): _149.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _149.QueryHistoricalInfoResponseAminoMsg): _149.QueryHistoricalInfoResponse;
                toAminoMsg(message: _149.QueryHistoricalInfoResponse): _149.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _149.QueryHistoricalInfoResponseProtoMsg): _149.QueryHistoricalInfoResponse;
                toProto(message: _149.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _149.QueryHistoricalInfoResponse): _149.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _149.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.QueryPoolRequest;
                fromPartial(_: Partial<_149.QueryPoolRequest>): _149.QueryPoolRequest;
                fromAmino(_: _149.QueryPoolRequestAmino): _149.QueryPoolRequest;
                toAmino(_: _149.QueryPoolRequest): _149.QueryPoolRequestAmino;
                fromAminoMsg(object: _149.QueryPoolRequestAminoMsg): _149.QueryPoolRequest;
                toAminoMsg(message: _149.QueryPoolRequest): _149.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _149.QueryPoolRequestProtoMsg): _149.QueryPoolRequest;
                toProto(message: _149.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _149.QueryPoolRequest): _149.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _149.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryPoolResponse;
                fromPartial(object: Partial<_149.QueryPoolResponse>): _149.QueryPoolResponse;
                fromAmino(object: _149.QueryPoolResponseAmino): _149.QueryPoolResponse;
                toAmino(message: _149.QueryPoolResponse): _149.QueryPoolResponseAmino;
                fromAminoMsg(object: _149.QueryPoolResponseAminoMsg): _149.QueryPoolResponse;
                toAminoMsg(message: _149.QueryPoolResponse): _149.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _149.QueryPoolResponseProtoMsg): _149.QueryPoolResponse;
                toProto(message: _149.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _149.QueryPoolResponse): _149.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _149.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.QueryParamsRequest;
                fromPartial(_: Partial<_149.QueryParamsRequest>): _149.QueryParamsRequest;
                fromAmino(_: _149.QueryParamsRequestAmino): _149.QueryParamsRequest;
                toAmino(_: _149.QueryParamsRequest): _149.QueryParamsRequestAmino;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _148.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.LastValidatorPower;
                fromPartial(object: Partial<_148.LastValidatorPower>): _148.LastValidatorPower;
                fromAmino(object: _148.LastValidatorPowerAmino): _148.LastValidatorPower;
                toAmino(message: _148.LastValidatorPower): _148.LastValidatorPowerAmino;
                fromAminoMsg(object: _148.LastValidatorPowerAminoMsg): _148.LastValidatorPower;
                toAminoMsg(message: _148.LastValidatorPower): _148.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _148.LastValidatorPowerProtoMsg): _148.LastValidatorPower;
                toProto(message: _148.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _148.LastValidatorPower): _148.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _147.AuthorizationType;
            authorizationTypeToJSON(object: _147.AuthorizationType): string;
            AuthorizationType: typeof _147.AuthorizationType;
            AuthorizationTypeSDKType: typeof _147.AuthorizationType;
            AuthorizationTypeAmino: typeof _147.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _147.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.StakeAuthorization;
                fromPartial(object: Partial<_147.StakeAuthorization>): _147.StakeAuthorization;
                fromAmino(object: _147.StakeAuthorizationAmino): _147.StakeAuthorization;
                toAmino(message: _147.StakeAuthorization): _147.StakeAuthorizationAmino;
                fromAminoMsg(object: _147.StakeAuthorizationAminoMsg): _147.StakeAuthorization;
                toAminoMsg(message: _147.StakeAuthorization): _147.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _147.StakeAuthorizationProtoMsg): _147.StakeAuthorization;
                toProto(message: _147.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _147.StakeAuthorization): _147.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _147.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.StakeAuthorization_Validators;
                fromPartial(object: Partial<_147.StakeAuthorization_Validators>): _147.StakeAuthorization_Validators;
                fromAmino(object: _147.StakeAuthorization_ValidatorsAmino): _147.StakeAuthorization_Validators;
                toAmino(message: _147.StakeAuthorization_Validators): _147.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _147.StakeAuthorization_ValidatorsAminoMsg): _147.StakeAuthorization_Validators;
                toAminoMsg(message: _147.StakeAuthorization_Validators): _147.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _147.StakeAuthorization_ValidatorsProtoMsg): _147.StakeAuthorization_Validators;
                toProto(message: _147.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _147.StakeAuthorization_Validators): _147.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _152.SignMode;
                signModeToJSON(object: _152.SignMode): string;
                SignMode: typeof _152.SignMode;
                SignModeSDKType: typeof _152.SignMode;
                SignModeAmino: typeof _152.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _152.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.SignatureDescriptors;
                    fromPartial(object: Partial<_152.SignatureDescriptors>): _152.SignatureDescriptors;
                    fromAmino(object: _152.SignatureDescriptorsAmino): _152.SignatureDescriptors;
                    toAmino(message: _152.SignatureDescriptors): _152.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _152.SignatureDescriptorsAminoMsg): _152.SignatureDescriptors;
                    toAminoMsg(message: _152.SignatureDescriptors): _152.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _152.SignatureDescriptorsProtoMsg): _152.SignatureDescriptors;
                    toProto(message: _152.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _152.SignatureDescriptors): _152.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _152.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.SignatureDescriptor;
                    fromPartial(object: Partial<_152.SignatureDescriptor>): _152.SignatureDescriptor;
                    fromAmino(object: _152.SignatureDescriptorAmino): _152.SignatureDescriptor;
                    toAmino(message: _152.SignatureDescriptor): _152.SignatureDescriptorAmino;
                    fromAminoMsg(object: _152.SignatureDescriptorAminoMsg): _152.SignatureDescriptor;
                    toAminoMsg(message: _152.SignatureDescriptor): _152.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _152.SignatureDescriptorProtoMsg): _152.SignatureDescriptor;
                    toProto(message: _152.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _152.SignatureDescriptor): _152.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _152.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_152.SignatureDescriptor_Data>): _152.SignatureDescriptor_Data;
                    fromAmino(object: _152.SignatureDescriptor_DataAmino): _152.SignatureDescriptor_Data;
                    toAmino(message: _152.SignatureDescriptor_Data): _152.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _152.SignatureDescriptor_DataAminoMsg): _152.SignatureDescriptor_Data;
                    toAminoMsg(message: _152.SignatureDescriptor_Data): _152.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _152.SignatureDescriptor_DataProtoMsg): _152.SignatureDescriptor_Data;
                    toProto(message: _152.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _152.SignatureDescriptor_Data): _152.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _152.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_152.SignatureDescriptor_Data_Single>): _152.SignatureDescriptor_Data_Single;
                    fromAmino(object: _152.SignatureDescriptor_Data_SingleAmino): _152.SignatureDescriptor_Data_Single;
                    toAmino(message: _152.SignatureDescriptor_Data_Single): _152.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _152.SignatureDescriptor_Data_SingleAminoMsg): _152.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _152.SignatureDescriptor_Data_Single): _152.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _152.SignatureDescriptor_Data_SingleProtoMsg): _152.SignatureDescriptor_Data_Single;
                    toProto(message: _152.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _152.SignatureDescriptor_Data_Single): _152.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _152.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_152.SignatureDescriptor_Data_Multi>): _152.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _152.SignatureDescriptor_Data_MultiAmino): _152.SignatureDescriptor_Data_Multi;
                    toAmino(message: _152.SignatureDescriptor_Data_Multi): _152.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _152.SignatureDescriptor_Data_MultiAminoMsg): _152.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _152.SignatureDescriptor_Data_Multi): _152.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _152.SignatureDescriptor_Data_MultiProtoMsg): _152.SignatureDescriptor_Data_Multi;
                    toProto(message: _152.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _152.SignatureDescriptor_Data_Multi): _152.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _317.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _153.SimulateRequest): Promise<_153.SimulateResponse>;
                getTx(request: _153.GetTxRequest): Promise<_153.GetTxResponse>;
                broadcastTx(request: _153.BroadcastTxRequest): Promise<_153.BroadcastTxResponse>;
                getTxsEvent(request: _153.GetTxsEventRequest): Promise<_153.GetTxsEventResponse>;
                getBlockWithTxs(request: _153.GetBlockWithTxsRequest): Promise<_153.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _298.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _154.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.Tx;
                fromPartial(object: Partial<_154.Tx>): _154.Tx;
                fromAmino(object: _154.TxAmino): _154.Tx;
                toAmino(message: _154.Tx): _154.TxAmino;
                fromAminoMsg(object: _154.TxAminoMsg): _154.Tx;
                toAminoMsg(message: _154.Tx): _154.TxAminoMsg;
                fromProtoMsg(message: _154.TxProtoMsg): _154.Tx;
                toProto(message: _154.Tx): Uint8Array;
                toProtoMsg(message: _154.Tx): _154.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _154.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.TxRaw;
                fromPartial(object: Partial<_154.TxRaw>): _154.TxRaw;
                fromAmino(object: _154.TxRawAmino): _154.TxRaw;
                toAmino(message: _154.TxRaw): _154.TxRawAmino;
                fromAminoMsg(object: _154.TxRawAminoMsg): _154.TxRaw;
                toAminoMsg(message: _154.TxRaw): _154.TxRawAminoMsg;
                fromProtoMsg(message: _154.TxRawProtoMsg): _154.TxRaw;
                toProto(message: _154.TxRaw): Uint8Array;
                toProtoMsg(message: _154.TxRaw): _154.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _154.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.SignDoc;
                fromPartial(object: Partial<_154.SignDoc>): _154.SignDoc;
                fromAmino(object: _154.SignDocAmino): _154.SignDoc;
                toAmino(message: _154.SignDoc): _154.SignDocAmino;
                fromAminoMsg(object: _154.SignDocAminoMsg): _154.SignDoc;
                toAminoMsg(message: _154.SignDoc): _154.SignDocAminoMsg;
                fromProtoMsg(message: _154.SignDocProtoMsg): _154.SignDoc;
                toProto(message: _154.SignDoc): Uint8Array;
                toProtoMsg(message: _154.SignDoc): _154.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _154.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.SignDocDirectAux;
                fromPartial(object: Partial<_154.SignDocDirectAux>): _154.SignDocDirectAux;
                fromAmino(object: _154.SignDocDirectAuxAmino): _154.SignDocDirectAux;
                toAmino(message: _154.SignDocDirectAux): _154.SignDocDirectAuxAmino;
                fromAminoMsg(object: _154.SignDocDirectAuxAminoMsg): _154.SignDocDirectAux;
                toAminoMsg(message: _154.SignDocDirectAux): _154.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _154.SignDocDirectAuxProtoMsg): _154.SignDocDirectAux;
                toProto(message: _154.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _154.SignDocDirectAux): _154.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _154.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.TxBody;
                fromPartial(object: Partial<_154.TxBody>): _154.TxBody;
                fromAmino(object: _154.TxBodyAmino): _154.TxBody;
                toAmino(message: _154.TxBody): _154.TxBodyAmino;
                fromAminoMsg(object: _154.TxBodyAminoMsg): _154.TxBody;
                toAminoMsg(message: _154.TxBody): _154.TxBodyAminoMsg;
                fromProtoMsg(message: _154.TxBodyProtoMsg): _154.TxBody;
                toProto(message: _154.TxBody): Uint8Array;
                toProtoMsg(message: _154.TxBody): _154.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _154.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.AuthInfo;
                fromPartial(object: Partial<_154.AuthInfo>): _154.AuthInfo;
                fromAmino(object: _154.AuthInfoAmino): _154.AuthInfo;
                toAmino(message: _154.AuthInfo): _154.AuthInfoAmino;
                fromAminoMsg(object: _154.AuthInfoAminoMsg): _154.AuthInfo;
                toAminoMsg(message: _154.AuthInfo): _154.AuthInfoAminoMsg;
                fromProtoMsg(message: _154.AuthInfoProtoMsg): _154.AuthInfo;
                toProto(message: _154.AuthInfo): Uint8Array;
                toProtoMsg(message: _154.AuthInfo): _154.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _154.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.SignerInfo;
                fromPartial(object: Partial<_154.SignerInfo>): _154.SignerInfo;
                fromAmino(object: _154.SignerInfoAmino): _154.SignerInfo;
                toAmino(message: _154.SignerInfo): _154.SignerInfoAmino;
                fromAminoMsg(object: _154.SignerInfoAminoMsg): _154.SignerInfo;
                toAminoMsg(message: _154.SignerInfo): _154.SignerInfoAminoMsg;
                fromProtoMsg(message: _154.SignerInfoProtoMsg): _154.SignerInfo;
                toProto(message: _154.SignerInfo): Uint8Array;
                toProtoMsg(message: _154.SignerInfo): _154.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _154.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.ModeInfo;
                fromPartial(object: Partial<_154.ModeInfo>): _154.ModeInfo;
                fromAmino(object: _154.ModeInfoAmino): _154.ModeInfo;
                toAmino(message: _154.ModeInfo): _154.ModeInfoAmino;
                fromAminoMsg(object: _154.ModeInfoAminoMsg): _154.ModeInfo;
                toAminoMsg(message: _154.ModeInfo): _154.ModeInfoAminoMsg;
                fromProtoMsg(message: _154.ModeInfoProtoMsg): _154.ModeInfo;
                toProto(message: _154.ModeInfo): Uint8Array;
                toProtoMsg(message: _154.ModeInfo): _154.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _154.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.ModeInfo_Single;
                fromPartial(object: Partial<_154.ModeInfo_Single>): _154.ModeInfo_Single;
                fromAmino(object: _154.ModeInfo_SingleAmino): _154.ModeInfo_Single;
                toAmino(message: _154.ModeInfo_Single): _154.ModeInfo_SingleAmino;
                fromAminoMsg(object: _154.ModeInfo_SingleAminoMsg): _154.ModeInfo_Single;
                toAminoMsg(message: _154.ModeInfo_Single): _154.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _154.ModeInfo_SingleProtoMsg): _154.ModeInfo_Single;
                toProto(message: _154.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _154.ModeInfo_Single): _154.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _154.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.ModeInfo_Multi;
                fromPartial(object: Partial<_154.ModeInfo_Multi>): _154.ModeInfo_Multi;
                fromAmino(object: _154.ModeInfo_MultiAmino): _154.ModeInfo_Multi;
                toAmino(message: _154.ModeInfo_Multi): _154.ModeInfo_MultiAmino;
                fromAminoMsg(object: _154.ModeInfo_MultiAminoMsg): _154.ModeInfo_Multi;
                toAminoMsg(message: _154.ModeInfo_Multi): _154.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _154.ModeInfo_MultiProtoMsg): _154.ModeInfo_Multi;
                toProto(message: _154.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _154.ModeInfo_Multi): _154.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _154.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.Fee;
                fromPartial(object: Partial<_154.Fee>): _154.Fee;
                fromAmino(object: _154.FeeAmino): _154.Fee;
                toAmino(message: _154.Fee): _154.FeeAmino;
                fromAminoMsg(object: _154.FeeAminoMsg): _154.Fee;
                toAminoMsg(message: _154.Fee): _154.FeeAminoMsg;
                fromProtoMsg(message: _154.FeeProtoMsg): _154.Fee;
                toProto(message: _154.Fee): Uint8Array;
                toProtoMsg(message: _154.Fee): _154.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _154.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.Tip;
                fromPartial(object: Partial<_154.Tip>): _154.Tip;
                fromAmino(object: _154.TipAmino): _154.Tip;
                toAmino(message: _154.Tip): _154.TipAmino;
                fromAminoMsg(object: _154.TipAminoMsg): _154.Tip;
                toAminoMsg(message: _154.Tip): _154.TipAminoMsg;
                fromProtoMsg(message: _154.TipProtoMsg): _154.Tip;
                toProto(message: _154.Tip): Uint8Array;
                toProtoMsg(message: _154.Tip): _154.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _154.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.AuxSignerData;
                fromPartial(object: Partial<_154.AuxSignerData>): _154.AuxSignerData;
                fromAmino(object: _154.AuxSignerDataAmino): _154.AuxSignerData;
                toAmino(message: _154.AuxSignerData): _154.AuxSignerDataAmino;
                fromAminoMsg(object: _154.AuxSignerDataAminoMsg): _154.AuxSignerData;
                toAminoMsg(message: _154.AuxSignerData): _154.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _154.AuxSignerDataProtoMsg): _154.AuxSignerData;
                toProto(message: _154.AuxSignerData): Uint8Array;
                toProtoMsg(message: _154.AuxSignerData): _154.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _153.OrderBy;
            orderByToJSON(object: _153.OrderBy): string;
            broadcastModeFromJSON(object: any): _153.BroadcastMode;
            broadcastModeToJSON(object: _153.BroadcastMode): string;
            OrderBy: typeof _153.OrderBy;
            OrderBySDKType: typeof _153.OrderBy;
            OrderByAmino: typeof _153.OrderBy;
            BroadcastMode: typeof _153.BroadcastMode;
            BroadcastModeSDKType: typeof _153.BroadcastMode;
            BroadcastModeAmino: typeof _153.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _153.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.GetTxsEventRequest;
                fromPartial(object: Partial<_153.GetTxsEventRequest>): _153.GetTxsEventRequest;
                fromAmino(object: _153.GetTxsEventRequestAmino): _153.GetTxsEventRequest;
                toAmino(message: _153.GetTxsEventRequest): _153.GetTxsEventRequestAmino;
                fromAminoMsg(object: _153.GetTxsEventRequestAminoMsg): _153.GetTxsEventRequest;
                toAminoMsg(message: _153.GetTxsEventRequest): _153.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _153.GetTxsEventRequestProtoMsg): _153.GetTxsEventRequest;
                toProto(message: _153.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _153.GetTxsEventRequest): _153.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _153.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.GetTxsEventResponse;
                fromPartial(object: Partial<_153.GetTxsEventResponse>): _153.GetTxsEventResponse;
                fromAmino(object: _153.GetTxsEventResponseAmino): _153.GetTxsEventResponse;
                toAmino(message: _153.GetTxsEventResponse): _153.GetTxsEventResponseAmino;
                fromAminoMsg(object: _153.GetTxsEventResponseAminoMsg): _153.GetTxsEventResponse;
                toAminoMsg(message: _153.GetTxsEventResponse): _153.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _153.GetTxsEventResponseProtoMsg): _153.GetTxsEventResponse;
                toProto(message: _153.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _153.GetTxsEventResponse): _153.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _153.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.BroadcastTxRequest;
                fromPartial(object: Partial<_153.BroadcastTxRequest>): _153.BroadcastTxRequest;
                fromAmino(object: _153.BroadcastTxRequestAmino): _153.BroadcastTxRequest;
                toAmino(message: _153.BroadcastTxRequest): _153.BroadcastTxRequestAmino;
                fromAminoMsg(object: _153.BroadcastTxRequestAminoMsg): _153.BroadcastTxRequest;
                toAminoMsg(message: _153.BroadcastTxRequest): _153.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _153.BroadcastTxRequestProtoMsg): _153.BroadcastTxRequest;
                toProto(message: _153.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _153.BroadcastTxRequest): _153.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _153.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.BroadcastTxResponse;
                fromPartial(object: Partial<_153.BroadcastTxResponse>): _153.BroadcastTxResponse;
                fromAmino(object: _153.BroadcastTxResponseAmino): _153.BroadcastTxResponse;
                toAmino(message: _153.BroadcastTxResponse): _153.BroadcastTxResponseAmino;
                fromAminoMsg(object: _153.BroadcastTxResponseAminoMsg): _153.BroadcastTxResponse;
                toAminoMsg(message: _153.BroadcastTxResponse): _153.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _153.BroadcastTxResponseProtoMsg): _153.BroadcastTxResponse;
                toProto(message: _153.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _153.BroadcastTxResponse): _153.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _153.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.SimulateRequest;
                fromPartial(object: Partial<_153.SimulateRequest>): _153.SimulateRequest;
                fromAmino(object: _153.SimulateRequestAmino): _153.SimulateRequest;
                toAmino(message: _153.SimulateRequest): _153.SimulateRequestAmino;
                fromAminoMsg(object: _153.SimulateRequestAminoMsg): _153.SimulateRequest;
                toAminoMsg(message: _153.SimulateRequest): _153.SimulateRequestAminoMsg;
                fromProtoMsg(message: _153.SimulateRequestProtoMsg): _153.SimulateRequest;
                toProto(message: _153.SimulateRequest): Uint8Array;
                toProtoMsg(message: _153.SimulateRequest): _153.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _153.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.SimulateResponse;
                fromPartial(object: Partial<_153.SimulateResponse>): _153.SimulateResponse;
                fromAmino(object: _153.SimulateResponseAmino): _153.SimulateResponse;
                toAmino(message: _153.SimulateResponse): _153.SimulateResponseAmino;
                fromAminoMsg(object: _153.SimulateResponseAminoMsg): _153.SimulateResponse;
                toAminoMsg(message: _153.SimulateResponse): _153.SimulateResponseAminoMsg;
                fromProtoMsg(message: _153.SimulateResponseProtoMsg): _153.SimulateResponse;
                toProto(message: _153.SimulateResponse): Uint8Array;
                toProtoMsg(message: _153.SimulateResponse): _153.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _153.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.GetTxRequest;
                fromPartial(object: Partial<_153.GetTxRequest>): _153.GetTxRequest;
                fromAmino(object: _153.GetTxRequestAmino): _153.GetTxRequest;
                toAmino(message: _153.GetTxRequest): _153.GetTxRequestAmino;
                fromAminoMsg(object: _153.GetTxRequestAminoMsg): _153.GetTxRequest;
                toAminoMsg(message: _153.GetTxRequest): _153.GetTxRequestAminoMsg;
                fromProtoMsg(message: _153.GetTxRequestProtoMsg): _153.GetTxRequest;
                toProto(message: _153.GetTxRequest): Uint8Array;
                toProtoMsg(message: _153.GetTxRequest): _153.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _153.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.GetTxResponse;
                fromPartial(object: Partial<_153.GetTxResponse>): _153.GetTxResponse;
                fromAmino(object: _153.GetTxResponseAmino): _153.GetTxResponse;
                toAmino(message: _153.GetTxResponse): _153.GetTxResponseAmino;
                fromAminoMsg(object: _153.GetTxResponseAminoMsg): _153.GetTxResponse;
                toAminoMsg(message: _153.GetTxResponse): _153.GetTxResponseAminoMsg;
                fromProtoMsg(message: _153.GetTxResponseProtoMsg): _153.GetTxResponse;
                toProto(message: _153.GetTxResponse): Uint8Array;
                toProtoMsg(message: _153.GetTxResponse): _153.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _153.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_153.GetBlockWithTxsRequest>): _153.GetBlockWithTxsRequest;
                fromAmino(object: _153.GetBlockWithTxsRequestAmino): _153.GetBlockWithTxsRequest;
                toAmino(message: _153.GetBlockWithTxsRequest): _153.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _153.GetBlockWithTxsRequestAminoMsg): _153.GetBlockWithTxsRequest;
                toAminoMsg(message: _153.GetBlockWithTxsRequest): _153.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _153.GetBlockWithTxsRequestProtoMsg): _153.GetBlockWithTxsRequest;
                toProto(message: _153.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _153.GetBlockWithTxsRequest): _153.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _153.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_153.GetBlockWithTxsResponse>): _153.GetBlockWithTxsResponse;
                fromAmino(object: _153.GetBlockWithTxsResponseAmino): _153.GetBlockWithTxsResponse;
                toAmino(message: _153.GetBlockWithTxsResponse): _153.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _153.GetBlockWithTxsResponseAminoMsg): _153.GetBlockWithTxsResponse;
                toAminoMsg(message: _153.GetBlockWithTxsResponse): _153.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _153.GetBlockWithTxsResponseProtoMsg): _153.GetBlockWithTxsResponse;
                toProto(message: _153.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _153.GetBlockWithTxsResponse): _153.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _331.MsgClientImpl;
            QueryClientImpl: typeof _318.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _155.QueryCurrentPlanRequest): Promise<_155.QueryCurrentPlanResponse>;
                appliedPlan(request: _155.QueryAppliedPlanRequest): Promise<_155.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _155.QueryUpgradedConsensusStateRequest): Promise<_155.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _155.QueryModuleVersionsRequest): Promise<_155.QueryModuleVersionsResponse>;
                authority(request?: _155.QueryAuthorityRequest): Promise<_155.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _299.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _156.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _156.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _156.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _156.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _156.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _156.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _156.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _156.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _156.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _156.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _156.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _156.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _156.MsgSoftwareUpgrade) => _156.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _156.MsgSoftwareUpgradeAmino) => _156.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _156.MsgCancelUpgrade) => _156.MsgCancelUpgradeAmino;
                    fromAmino: (object: _156.MsgCancelUpgradeAmino) => _156.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _157.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.Plan;
                fromPartial(object: Partial<_157.Plan>): _157.Plan;
                fromAmino(object: _157.PlanAmino): _157.Plan;
                toAmino(message: _157.Plan): _157.PlanAmino;
                fromAminoMsg(object: _157.PlanAminoMsg): _157.Plan;
                toAminoMsg(message: _157.Plan): _157.PlanAminoMsg;
                fromProtoMsg(message: _157.PlanProtoMsg): _157.Plan;
                toProto(message: _157.Plan): Uint8Array;
                toProtoMsg(message: _157.Plan): _157.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _157.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_157.SoftwareUpgradeProposal>): _157.SoftwareUpgradeProposal;
                fromAmino(object: _157.SoftwareUpgradeProposalAmino): _157.SoftwareUpgradeProposal;
                toAmino(message: _157.SoftwareUpgradeProposal): _157.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _157.SoftwareUpgradeProposalAminoMsg): _157.SoftwareUpgradeProposal;
                toAminoMsg(message: _157.SoftwareUpgradeProposal): _157.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _157.SoftwareUpgradeProposalProtoMsg): _157.SoftwareUpgradeProposal;
                toProto(message: _157.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _157.SoftwareUpgradeProposal): _157.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _157.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_157.CancelSoftwareUpgradeProposal>): _157.CancelSoftwareUpgradeProposal;
                fromAmino(object: _157.CancelSoftwareUpgradeProposalAmino): _157.CancelSoftwareUpgradeProposal;
                toAmino(message: _157.CancelSoftwareUpgradeProposal): _157.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _157.CancelSoftwareUpgradeProposalAminoMsg): _157.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _157.CancelSoftwareUpgradeProposal): _157.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _157.CancelSoftwareUpgradeProposalProtoMsg): _157.CancelSoftwareUpgradeProposal;
                toProto(message: _157.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _157.CancelSoftwareUpgradeProposal): _157.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _157.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.ModuleVersion;
                fromPartial(object: Partial<_157.ModuleVersion>): _157.ModuleVersion;
                fromAmino(object: _157.ModuleVersionAmino): _157.ModuleVersion;
                toAmino(message: _157.ModuleVersion): _157.ModuleVersionAmino;
                fromAminoMsg(object: _157.ModuleVersionAminoMsg): _157.ModuleVersion;
                toAminoMsg(message: _157.ModuleVersion): _157.ModuleVersionAminoMsg;
                fromProtoMsg(message: _157.ModuleVersionProtoMsg): _157.ModuleVersion;
                toProto(message: _157.ModuleVersion): Uint8Array;
                toProtoMsg(message: _157.ModuleVersion): _157.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _156.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_156.MsgSoftwareUpgrade>): _156.MsgSoftwareUpgrade;
                fromAmino(object: _156.MsgSoftwareUpgradeAmino): _156.MsgSoftwareUpgrade;
                toAmino(message: _156.MsgSoftwareUpgrade): _156.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _156.MsgSoftwareUpgradeAminoMsg): _156.MsgSoftwareUpgrade;
                toAminoMsg(message: _156.MsgSoftwareUpgrade): _156.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _156.MsgSoftwareUpgradeProtoMsg): _156.MsgSoftwareUpgrade;
                toProto(message: _156.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _156.MsgSoftwareUpgrade): _156.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _156.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_156.MsgSoftwareUpgradeResponse>): _156.MsgSoftwareUpgradeResponse;
                fromAmino(_: _156.MsgSoftwareUpgradeResponseAmino): _156.MsgSoftwareUpgradeResponse;
                toAmino(_: _156.MsgSoftwareUpgradeResponse): _156.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _156.MsgSoftwareUpgradeResponseAminoMsg): _156.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _156.MsgSoftwareUpgradeResponse): _156.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _156.MsgSoftwareUpgradeResponseProtoMsg): _156.MsgSoftwareUpgradeResponse;
                toProto(message: _156.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _156.MsgSoftwareUpgradeResponse): _156.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _156.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgCancelUpgrade;
                fromPartial(object: Partial<_156.MsgCancelUpgrade>): _156.MsgCancelUpgrade;
                fromAmino(object: _156.MsgCancelUpgradeAmino): _156.MsgCancelUpgrade;
                toAmino(message: _156.MsgCancelUpgrade): _156.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _156.MsgCancelUpgradeAminoMsg): _156.MsgCancelUpgrade;
                toAminoMsg(message: _156.MsgCancelUpgrade): _156.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _156.MsgCancelUpgradeProtoMsg): _156.MsgCancelUpgrade;
                toProto(message: _156.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _156.MsgCancelUpgrade): _156.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _156.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_156.MsgCancelUpgradeResponse>): _156.MsgCancelUpgradeResponse;
                fromAmino(_: _156.MsgCancelUpgradeResponseAmino): _156.MsgCancelUpgradeResponse;
                toAmino(_: _156.MsgCancelUpgradeResponse): _156.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _156.MsgCancelUpgradeResponseAminoMsg): _156.MsgCancelUpgradeResponse;
                toAminoMsg(message: _156.MsgCancelUpgradeResponse): _156.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _156.MsgCancelUpgradeResponseProtoMsg): _156.MsgCancelUpgradeResponse;
                toProto(message: _156.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _156.MsgCancelUpgradeResponse): _156.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _155.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_155.QueryCurrentPlanRequest>): _155.QueryCurrentPlanRequest;
                fromAmino(_: _155.QueryCurrentPlanRequestAmino): _155.QueryCurrentPlanRequest;
                toAmino(_: _155.QueryCurrentPlanRequest): _155.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _155.QueryCurrentPlanRequestAminoMsg): _155.QueryCurrentPlanRequest;
                toAminoMsg(message: _155.QueryCurrentPlanRequest): _155.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _155.QueryCurrentPlanRequestProtoMsg): _155.QueryCurrentPlanRequest;
                toProto(message: _155.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _155.QueryCurrentPlanRequest): _155.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _155.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_155.QueryCurrentPlanResponse>): _155.QueryCurrentPlanResponse;
                fromAmino(object: _155.QueryCurrentPlanResponseAmino): _155.QueryCurrentPlanResponse;
                toAmino(message: _155.QueryCurrentPlanResponse): _155.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _155.QueryCurrentPlanResponseAminoMsg): _155.QueryCurrentPlanResponse;
                toAminoMsg(message: _155.QueryCurrentPlanResponse): _155.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _155.QueryCurrentPlanResponseProtoMsg): _155.QueryCurrentPlanResponse;
                toProto(message: _155.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _155.QueryCurrentPlanResponse): _155.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _155.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_155.QueryAppliedPlanRequest>): _155.QueryAppliedPlanRequest;
                fromAmino(object: _155.QueryAppliedPlanRequestAmino): _155.QueryAppliedPlanRequest;
                toAmino(message: _155.QueryAppliedPlanRequest): _155.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _155.QueryAppliedPlanRequestAminoMsg): _155.QueryAppliedPlanRequest;
                toAminoMsg(message: _155.QueryAppliedPlanRequest): _155.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _155.QueryAppliedPlanRequestProtoMsg): _155.QueryAppliedPlanRequest;
                toProto(message: _155.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _155.QueryAppliedPlanRequest): _155.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _155.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_155.QueryAppliedPlanResponse>): _155.QueryAppliedPlanResponse;
                fromAmino(object: _155.QueryAppliedPlanResponseAmino): _155.QueryAppliedPlanResponse;
                toAmino(message: _155.QueryAppliedPlanResponse): _155.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _155.QueryAppliedPlanResponseAminoMsg): _155.QueryAppliedPlanResponse;
                toAminoMsg(message: _155.QueryAppliedPlanResponse): _155.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _155.QueryAppliedPlanResponseProtoMsg): _155.QueryAppliedPlanResponse;
                toProto(message: _155.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _155.QueryAppliedPlanResponse): _155.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _155.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_155.QueryUpgradedConsensusStateRequest>): _155.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _155.QueryUpgradedConsensusStateRequestAmino): _155.QueryUpgradedConsensusStateRequest;
                toAmino(message: _155.QueryUpgradedConsensusStateRequest): _155.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _155.QueryUpgradedConsensusStateRequestAminoMsg): _155.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _155.QueryUpgradedConsensusStateRequest): _155.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _155.QueryUpgradedConsensusStateRequestProtoMsg): _155.QueryUpgradedConsensusStateRequest;
                toProto(message: _155.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _155.QueryUpgradedConsensusStateRequest): _155.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _155.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_155.QueryUpgradedConsensusStateResponse>): _155.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _155.QueryUpgradedConsensusStateResponseAmino): _155.QueryUpgradedConsensusStateResponse;
                toAmino(message: _155.QueryUpgradedConsensusStateResponse): _155.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _155.QueryUpgradedConsensusStateResponseAminoMsg): _155.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _155.QueryUpgradedConsensusStateResponse): _155.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _155.QueryUpgradedConsensusStateResponseProtoMsg): _155.QueryUpgradedConsensusStateResponse;
                toProto(message: _155.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _155.QueryUpgradedConsensusStateResponse): _155.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _155.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_155.QueryModuleVersionsRequest>): _155.QueryModuleVersionsRequest;
                fromAmino(object: _155.QueryModuleVersionsRequestAmino): _155.QueryModuleVersionsRequest;
                toAmino(message: _155.QueryModuleVersionsRequest): _155.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _155.QueryModuleVersionsRequestAminoMsg): _155.QueryModuleVersionsRequest;
                toAminoMsg(message: _155.QueryModuleVersionsRequest): _155.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _155.QueryModuleVersionsRequestProtoMsg): _155.QueryModuleVersionsRequest;
                toProto(message: _155.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _155.QueryModuleVersionsRequest): _155.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _155.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_155.QueryModuleVersionsResponse>): _155.QueryModuleVersionsResponse;
                fromAmino(object: _155.QueryModuleVersionsResponseAmino): _155.QueryModuleVersionsResponse;
                toAmino(message: _155.QueryModuleVersionsResponse): _155.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _155.QueryModuleVersionsResponseAminoMsg): _155.QueryModuleVersionsResponse;
                toAminoMsg(message: _155.QueryModuleVersionsResponse): _155.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _155.QueryModuleVersionsResponseProtoMsg): _155.QueryModuleVersionsResponse;
                toProto(message: _155.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _155.QueryModuleVersionsResponse): _155.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _155.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.QueryAuthorityRequest;
                fromPartial(_: Partial<_155.QueryAuthorityRequest>): _155.QueryAuthorityRequest;
                fromAmino(_: _155.QueryAuthorityRequestAmino): _155.QueryAuthorityRequest;
                toAmino(_: _155.QueryAuthorityRequest): _155.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _155.QueryAuthorityRequestAminoMsg): _155.QueryAuthorityRequest;
                toAminoMsg(message: _155.QueryAuthorityRequest): _155.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _155.QueryAuthorityRequestProtoMsg): _155.QueryAuthorityRequest;
                toProto(message: _155.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _155.QueryAuthorityRequest): _155.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _155.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryAuthorityResponse;
                fromPartial(object: Partial<_155.QueryAuthorityResponse>): _155.QueryAuthorityResponse;
                fromAmino(object: _155.QueryAuthorityResponseAmino): _155.QueryAuthorityResponse;
                toAmino(message: _155.QueryAuthorityResponse): _155.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _155.QueryAuthorityResponseAminoMsg): _155.QueryAuthorityResponse;
                toAminoMsg(message: _155.QueryAuthorityResponse): _155.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _155.QueryAuthorityResponseProtoMsg): _155.QueryAuthorityResponse;
                toProto(message: _155.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _155.QueryAuthorityResponse): _155.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _332.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _158.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _158.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _158.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _158.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _158.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _158.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _158.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _158.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _158.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _158.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _158.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _158.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _158.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _158.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _158.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _158.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _158.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _158.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _158.MsgCreateVestingAccount) => _158.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _158.MsgCreateVestingAccountAmino) => _158.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _158.MsgCreatePermanentLockedAccount) => _158.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _158.MsgCreatePermanentLockedAccountAmino) => _158.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _158.MsgCreatePeriodicVestingAccount) => _158.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _158.MsgCreatePeriodicVestingAccountAmino) => _158.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _159.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.BaseVestingAccount;
                fromPartial(object: Partial<_159.BaseVestingAccount>): _159.BaseVestingAccount;
                fromAmino(object: _159.BaseVestingAccountAmino): _159.BaseVestingAccount;
                toAmino(message: _159.BaseVestingAccount): _159.BaseVestingAccountAmino;
                fromAminoMsg(object: _159.BaseVestingAccountAminoMsg): _159.BaseVestingAccount;
                toAminoMsg(message: _159.BaseVestingAccount): _159.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _159.BaseVestingAccountProtoMsg): _159.BaseVestingAccount;
                toProto(message: _159.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _159.BaseVestingAccount): _159.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _159.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.ContinuousVestingAccount;
                fromPartial(object: Partial<_159.ContinuousVestingAccount>): _159.ContinuousVestingAccount;
                fromAmino(object: _159.ContinuousVestingAccountAmino): _159.ContinuousVestingAccount;
                toAmino(message: _159.ContinuousVestingAccount): _159.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _159.ContinuousVestingAccountAminoMsg): _159.ContinuousVestingAccount;
                toAminoMsg(message: _159.ContinuousVestingAccount): _159.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _159.ContinuousVestingAccountProtoMsg): _159.ContinuousVestingAccount;
                toProto(message: _159.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _159.ContinuousVestingAccount): _159.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _159.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.DelayedVestingAccount;
                fromPartial(object: Partial<_159.DelayedVestingAccount>): _159.DelayedVestingAccount;
                fromAmino(object: _159.DelayedVestingAccountAmino): _159.DelayedVestingAccount;
                toAmino(message: _159.DelayedVestingAccount): _159.DelayedVestingAccountAmino;
                fromAminoMsg(object: _159.DelayedVestingAccountAminoMsg): _159.DelayedVestingAccount;
                toAminoMsg(message: _159.DelayedVestingAccount): _159.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _159.DelayedVestingAccountProtoMsg): _159.DelayedVestingAccount;
                toProto(message: _159.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _159.DelayedVestingAccount): _159.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _159.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.Period;
                fromPartial(object: Partial<_159.Period>): _159.Period;
                fromAmino(object: _159.PeriodAmino): _159.Period;
                toAmino(message: _159.Period): _159.PeriodAmino;
                fromAminoMsg(object: _159.PeriodAminoMsg): _159.Period;
                toAminoMsg(message: _159.Period): _159.PeriodAminoMsg;
                fromProtoMsg(message: _159.PeriodProtoMsg): _159.Period;
                toProto(message: _159.Period): Uint8Array;
                toProtoMsg(message: _159.Period): _159.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _159.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.PeriodicVestingAccount;
                fromPartial(object: Partial<_159.PeriodicVestingAccount>): _159.PeriodicVestingAccount;
                fromAmino(object: _159.PeriodicVestingAccountAmino): _159.PeriodicVestingAccount;
                toAmino(message: _159.PeriodicVestingAccount): _159.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _159.PeriodicVestingAccountAminoMsg): _159.PeriodicVestingAccount;
                toAminoMsg(message: _159.PeriodicVestingAccount): _159.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _159.PeriodicVestingAccountProtoMsg): _159.PeriodicVestingAccount;
                toProto(message: _159.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _159.PeriodicVestingAccount): _159.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _159.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.PermanentLockedAccount;
                fromPartial(object: Partial<_159.PermanentLockedAccount>): _159.PermanentLockedAccount;
                fromAmino(object: _159.PermanentLockedAccountAmino): _159.PermanentLockedAccount;
                toAmino(message: _159.PermanentLockedAccount): _159.PermanentLockedAccountAmino;
                fromAminoMsg(object: _159.PermanentLockedAccountAminoMsg): _159.PermanentLockedAccount;
                toAminoMsg(message: _159.PermanentLockedAccount): _159.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _159.PermanentLockedAccountProtoMsg): _159.PermanentLockedAccount;
                toProto(message: _159.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _159.PermanentLockedAccount): _159.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _158.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgCreateVestingAccount;
                fromPartial(object: Partial<_158.MsgCreateVestingAccount>): _158.MsgCreateVestingAccount;
                fromAmino(object: _158.MsgCreateVestingAccountAmino): _158.MsgCreateVestingAccount;
                toAmino(message: _158.MsgCreateVestingAccount): _158.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _158.MsgCreateVestingAccountAminoMsg): _158.MsgCreateVestingAccount;
                toAminoMsg(message: _158.MsgCreateVestingAccount): _158.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _158.MsgCreateVestingAccountProtoMsg): _158.MsgCreateVestingAccount;
                toProto(message: _158.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _158.MsgCreateVestingAccount): _158.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _158.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_158.MsgCreateVestingAccountResponse>): _158.MsgCreateVestingAccountResponse;
                fromAmino(_: _158.MsgCreateVestingAccountResponseAmino): _158.MsgCreateVestingAccountResponse;
                toAmino(_: _158.MsgCreateVestingAccountResponse): _158.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _158.MsgCreateVestingAccountResponseAminoMsg): _158.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _158.MsgCreateVestingAccountResponse): _158.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _158.MsgCreateVestingAccountResponseProtoMsg): _158.MsgCreateVestingAccountResponse;
                toProto(message: _158.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _158.MsgCreateVestingAccountResponse): _158.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _158.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_158.MsgCreatePermanentLockedAccount>): _158.MsgCreatePermanentLockedAccount;
                fromAmino(object: _158.MsgCreatePermanentLockedAccountAmino): _158.MsgCreatePermanentLockedAccount;
                toAmino(message: _158.MsgCreatePermanentLockedAccount): _158.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _158.MsgCreatePermanentLockedAccountAminoMsg): _158.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _158.MsgCreatePermanentLockedAccount): _158.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _158.MsgCreatePermanentLockedAccountProtoMsg): _158.MsgCreatePermanentLockedAccount;
                toProto(message: _158.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _158.MsgCreatePermanentLockedAccount): _158.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _158.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_158.MsgCreatePermanentLockedAccountResponse>): _158.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _158.MsgCreatePermanentLockedAccountResponseAmino): _158.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _158.MsgCreatePermanentLockedAccountResponse): _158.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _158.MsgCreatePermanentLockedAccountResponseAminoMsg): _158.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _158.MsgCreatePermanentLockedAccountResponse): _158.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _158.MsgCreatePermanentLockedAccountResponseProtoMsg): _158.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _158.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _158.MsgCreatePermanentLockedAccountResponse): _158.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _158.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_158.MsgCreatePeriodicVestingAccount>): _158.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _158.MsgCreatePeriodicVestingAccountAmino): _158.MsgCreatePeriodicVestingAccount;
                toAmino(message: _158.MsgCreatePeriodicVestingAccount): _158.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _158.MsgCreatePeriodicVestingAccountAminoMsg): _158.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _158.MsgCreatePeriodicVestingAccount): _158.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _158.MsgCreatePeriodicVestingAccountProtoMsg): _158.MsgCreatePeriodicVestingAccount;
                toProto(message: _158.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _158.MsgCreatePeriodicVestingAccount): _158.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _158.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_158.MsgCreatePeriodicVestingAccountResponse>): _158.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _158.MsgCreatePeriodicVestingAccountResponseAmino): _158.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _158.MsgCreatePeriodicVestingAccountResponse): _158.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _158.MsgCreatePeriodicVestingAccountResponseAminoMsg): _158.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _158.MsgCreatePeriodicVestingAccountResponse): _158.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _158.MsgCreatePeriodicVestingAccountResponseProtoMsg): _158.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _158.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _158.MsgCreatePeriodicVestingAccountResponse): _158.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _319.MsgClientImpl;
                };
                bank: {
                    v1beta1: _320.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _321.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _322.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _323.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _324.MsgClientImpl;
                };
                gov: {
                    v1: _325.MsgClientImpl;
                    v1beta1: _326.MsgClientImpl;
                };
                group: {
                    v1: _327.MsgClientImpl;
                };
                nft: {
                    v1beta1: _328.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _329.MsgClientImpl;
                };
                staking: {
                    v1beta1: _330.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _331.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _332.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _67.QueryConfigRequest): Promise<_67.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _70.QueryAccountsRequest): Promise<_70.QueryAccountsResponse>;
                        account(request: _70.QueryAccountRequest): Promise<_70.QueryAccountResponse>;
                        accountAddressByID(request: _70.QueryAccountAddressByIDRequest): Promise<_70.QueryAccountAddressByIDResponse>;
                        params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                        moduleAccounts(request?: _70.QueryModuleAccountsRequest): Promise<_70.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _70.QueryModuleAccountByNameRequest): Promise<_70.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _70.Bech32PrefixRequest): Promise<_70.Bech32PrefixResponse>;
                        addressBytesToString(request: _70.AddressBytesToStringRequest): Promise<_70.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _70.AddressStringToBytesRequest): Promise<_70.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _74.QueryGrantsRequest): Promise<_74.QueryGrantsResponse>;
                        granterGrants(request: _74.QueryGranterGrantsRequest): Promise<_74.QueryGranterGrantsResponse>;
                        granteeGrants(request: _74.QueryGranteeGrantsRequest): Promise<_74.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                        allBalances(request: _79.QueryAllBalancesRequest): Promise<_79.QueryAllBalancesResponse>;
                        spendableBalances(request: _79.QuerySpendableBalancesRequest): Promise<_79.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _79.QueryTotalSupplyRequest): Promise<_79.QueryTotalSupplyResponse>;
                        supplyOf(request: _79.QuerySupplyOfRequest): Promise<_79.QuerySupplyOfResponse>;
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        denomMetadata(request: _79.QueryDenomMetadataRequest): Promise<_79.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _79.QueryDenomsMetadataRequest): Promise<_79.QueryDenomsMetadataResponse>;
                        denomOwners(request: _79.QueryDenomOwnersRequest): Promise<_79.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _83.ConfigRequest): Promise<_83.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _90.GetNodeInfoRequest): Promise<_90.GetNodeInfoResponse>;
                            getSyncing(request?: _90.GetSyncingRequest): Promise<_90.GetSyncingResponse>;
                            getLatestBlock(request?: _90.GetLatestBlockRequest): Promise<_90.GetLatestBlockResponse>;
                            getBlockByHeight(request: _90.GetBlockByHeightRequest): Promise<_90.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _90.GetLatestValidatorSetRequest): Promise<_90.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _90.GetValidatorSetByHeightRequest): Promise<_90.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _90.ABCIQueryRequest): Promise<_90.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _105.QueryValidatorOutstandingRewardsRequest): Promise<_105.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _105.QueryValidatorCommissionRequest): Promise<_105.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _105.QueryValidatorSlashesRequest): Promise<_105.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _105.QueryDelegationRewardsRequest): Promise<_105.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _105.QueryDelegationTotalRewardsRequest): Promise<_105.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _105.QueryDelegatorValidatorsRequest): Promise<_105.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _105.QueryDelegatorWithdrawAddressRequest): Promise<_105.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _105.QueryCommunityPoolRequest): Promise<_105.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _109.QueryEvidenceRequest): Promise<_109.QueryEvidenceResponse>;
                        allEvidence(request?: _109.QueryAllEvidenceRequest): Promise<_109.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _113.QueryAllowanceRequest): Promise<_113.QueryAllowanceResponse>;
                        allowances(request: _113.QueryAllowancesRequest): Promise<_113.QueryAllowancesResponse>;
                        allowancesByGranter(request: _113.QueryAllowancesByGranterRequest): Promise<_113.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _118.QueryProposalRequest): Promise<_118.QueryProposalResponse>;
                        proposals(request: _118.QueryProposalsRequest): Promise<_118.QueryProposalsResponse>;
                        vote(request: _118.QueryVoteRequest): Promise<_118.QueryVoteResponse>;
                        votes(request: _118.QueryVotesRequest): Promise<_118.QueryVotesResponse>;
                        params(request: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                        deposit(request: _118.QueryDepositRequest): Promise<_118.QueryDepositResponse>;
                        deposits(request: _118.QueryDepositsRequest): Promise<_118.QueryDepositsResponse>;
                        tallyResult(request: _118.QueryTallyResultRequest): Promise<_118.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _122.QueryProposalRequest): Promise<_122.QueryProposalResponse>;
                        proposals(request: _122.QueryProposalsRequest): Promise<_122.QueryProposalsResponse>;
                        vote(request: _122.QueryVoteRequest): Promise<_122.QueryVoteResponse>;
                        votes(request: _122.QueryVotesRequest): Promise<_122.QueryVotesResponse>;
                        params(request: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                        deposit(request: _122.QueryDepositRequest): Promise<_122.QueryDepositResponse>;
                        deposits(request: _122.QueryDepositsRequest): Promise<_122.QueryDepositsResponse>;
                        tallyResult(request: _122.QueryTallyResultRequest): Promise<_122.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _126.QueryGroupInfoRequest): Promise<_126.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _126.QueryGroupPolicyInfoRequest): Promise<_126.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _126.QueryGroupMembersRequest): Promise<_126.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _126.QueryGroupsByAdminRequest): Promise<_126.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _126.QueryGroupPoliciesByGroupRequest): Promise<_126.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _126.QueryGroupPoliciesByAdminRequest): Promise<_126.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _126.QueryProposalRequest): Promise<_126.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _126.QueryProposalsByGroupPolicyRequest): Promise<_126.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _126.QueryVoteByProposalVoterRequest): Promise<_126.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _126.QueryVotesByProposalRequest): Promise<_126.QueryVotesByProposalResponse>;
                        votesByVoter(request: _126.QueryVotesByVoterRequest): Promise<_126.QueryVotesByVoterResponse>;
                        groupsByMember(request: _126.QueryGroupsByMemberRequest): Promise<_126.QueryGroupsByMemberResponse>;
                        tallyResult(request: _126.QueryTallyResultRequest): Promise<_126.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                        inflation(request?: _131.QueryInflationRequest): Promise<_131.QueryInflationResponse>;
                        annualProvisions(request?: _131.QueryAnnualProvisionsRequest): Promise<_131.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _136.QueryBalanceRequest): Promise<_136.QueryBalanceResponse>;
                        owner(request: _136.QueryOwnerRequest): Promise<_136.QueryOwnerResponse>;
                        supply(request: _136.QuerySupplyRequest): Promise<_136.QuerySupplyResponse>;
                        nFTs(request: _136.QueryNFTsRequest): Promise<_136.QueryNFTsResponse>;
                        nFT(request: _136.QueryNFTRequest): Promise<_136.QueryNFTResponse>;
                        class(request: _136.QueryClassRequest): Promise<_136.QueryClassResponse>;
                        classes(request?: _136.QueryClassesRequest): Promise<_136.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                        subspaces(request?: _142.QuerySubspacesRequest): Promise<_142.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                        signingInfo(request: _144.QuerySigningInfoRequest): Promise<_144.QuerySigningInfoResponse>;
                        signingInfos(request?: _144.QuerySigningInfosRequest): Promise<_144.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _149.QueryValidatorsRequest): Promise<_149.QueryValidatorsResponse>;
                        validator(request: _149.QueryValidatorRequest): Promise<_149.QueryValidatorResponse>;
                        validatorDelegations(request: _149.QueryValidatorDelegationsRequest): Promise<_149.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _149.QueryValidatorUnbondingDelegationsRequest): Promise<_149.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _149.QueryDelegationRequest): Promise<_149.QueryDelegationResponse>;
                        unbondingDelegation(request: _149.QueryUnbondingDelegationRequest): Promise<_149.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _149.QueryDelegatorDelegationsRequest): Promise<_149.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _149.QueryDelegatorUnbondingDelegationsRequest): Promise<_149.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _149.QueryRedelegationsRequest): Promise<_149.QueryRedelegationsResponse>;
                        delegatorValidators(request: _149.QueryDelegatorValidatorsRequest): Promise<_149.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _149.QueryDelegatorValidatorRequest): Promise<_149.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _149.QueryHistoricalInfoRequest): Promise<_149.QueryHistoricalInfoResponse>;
                        pool(request?: _149.QueryPoolRequest): Promise<_149.QueryPoolResponse>;
                        params(request?: _149.QueryParamsRequest): Promise<_149.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _153.SimulateRequest): Promise<_153.SimulateResponse>;
                        getTx(request: _153.GetTxRequest): Promise<_153.GetTxResponse>;
                        broadcastTx(request: _153.BroadcastTxRequest): Promise<_153.BroadcastTxResponse>;
                        getTxsEvent(request: _153.GetTxsEventRequest): Promise<_153.GetTxsEventResponse>;
                        getBlockWithTxs(request: _153.GetBlockWithTxsRequest): Promise<_153.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _155.QueryCurrentPlanRequest): Promise<_155.QueryCurrentPlanResponse>;
                        appliedPlan(request: _155.QueryAppliedPlanRequest): Promise<_155.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _155.QueryUpgradedConsensusStateRequest): Promise<_155.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _155.QueryModuleVersionsRequest): Promise<_155.QueryModuleVersionsResponse>;
                        authority(request?: _155.QueryAuthorityRequest): Promise<_155.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _282.LCDQueryClient;
                };
                authz: {
                    v1beta1: _283.LCDQueryClient;
                };
                bank: {
                    v1beta1: _284.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _285.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _286.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _287.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _288.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _289.LCDQueryClient;
                };
                gov: {
                    v1: _290.LCDQueryClient;
                    v1beta1: _291.LCDQueryClient;
                };
                group: {
                    v1: _292.LCDQueryClient;
                };
                mint: {
                    v1beta1: _293.LCDQueryClient;
                };
                nft: {
                    v1beta1: _294.LCDQueryClient;
                };
                params: {
                    v1beta1: _295.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _296.LCDQueryClient;
                };
                staking: {
                    v1beta1: _297.LCDQueryClient;
                };
                tx: {
                    v1beta1: _298.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _299.LCDQueryClient;
                };
            };
        }>;
    };
}
