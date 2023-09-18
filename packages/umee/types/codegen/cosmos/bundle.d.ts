import * as _23 from "./app/module/v1alpha1/module";
import * as _24 from "./app/v1alpha1/config";
import * as _25 from "./app/v1alpha1/module";
import * as _26 from "./app/v1alpha1/query";
import * as _27 from "./auth/v1beta1/auth";
import * as _28 from "./auth/v1beta1/genesis";
import * as _29 from "./auth/v1beta1/query";
import * as _30 from "./authz/v1beta1/authz";
import * as _31 from "./authz/v1beta1/event";
import * as _32 from "./authz/v1beta1/genesis";
import * as _33 from "./authz/v1beta1/query";
import * as _34 from "./authz/v1beta1/tx";
import * as _35 from "./bank/v1beta1/authz";
import * as _36 from "./bank/v1beta1/bank";
import * as _37 from "./bank/v1beta1/genesis";
import * as _38 from "./bank/v1beta1/query";
import * as _39 from "./bank/v1beta1/tx";
import * as _40 from "./base/abci/v1beta1/abci";
import * as _41 from "./base/kv/v1beta1/kv";
import * as _42 from "./base/node/v1beta1/query";
import * as _43 from "./base/query/v1beta1/pagination";
import * as _44 from "./base/reflection/v1beta1/reflection";
import * as _45 from "./base/reflection/v2alpha1/reflection";
import * as _46 from "./base/snapshots/v1beta1/snapshot";
import * as _47 from "./base/store/v1beta1/commit_info";
import * as _48 from "./base/store/v1beta1/listening";
import * as _49 from "./base/tendermint/v1beta1/query";
import * as _50 from "./base/tendermint/v1beta1/types";
import * as _51 from "./base/v1beta1/coin";
import * as _52 from "./capability/v1beta1/capability";
import * as _53 from "./capability/v1beta1/genesis";
import * as _54 from "./crisis/v1beta1/genesis";
import * as _55 from "./crisis/v1beta1/tx";
import * as _56 from "./crypto/ed25519/keys";
import * as _57 from "./crypto/hd/v1/hd";
import * as _58 from "./crypto/keyring/v1/record";
import * as _59 from "./crypto/multisig/keys";
import * as _60 from "./crypto/secp256k1/keys";
import * as _61 from "./crypto/secp256r1/keys";
import * as _62 from "./distribution/v1beta1/distribution";
import * as _63 from "./distribution/v1beta1/genesis";
import * as _64 from "./distribution/v1beta1/query";
import * as _65 from "./distribution/v1beta1/tx";
import * as _66 from "./evidence/v1beta1/evidence";
import * as _67 from "./evidence/v1beta1/genesis";
import * as _68 from "./evidence/v1beta1/query";
import * as _69 from "./evidence/v1beta1/tx";
import * as _70 from "./feegrant/v1beta1/feegrant";
import * as _71 from "./feegrant/v1beta1/genesis";
import * as _72 from "./feegrant/v1beta1/query";
import * as _73 from "./feegrant/v1beta1/tx";
import * as _74 from "./genutil/v1beta1/genesis";
import * as _75 from "./gov/v1/genesis";
import * as _76 from "./gov/v1/gov";
import * as _77 from "./gov/v1/query";
import * as _78 from "./gov/v1/tx";
import * as _79 from "./gov/v1beta1/genesis";
import * as _80 from "./gov/v1beta1/gov";
import * as _81 from "./gov/v1beta1/query";
import * as _82 from "./gov/v1beta1/tx";
import * as _83 from "./group/v1/events";
import * as _84 from "./group/v1/genesis";
import * as _85 from "./group/v1/query";
import * as _86 from "./group/v1/tx";
import * as _87 from "./group/v1/types";
import * as _88 from "./mint/v1beta1/genesis";
import * as _89 from "./mint/v1beta1/mint";
import * as _90 from "./mint/v1beta1/query";
import * as _92 from "./nft/v1beta1/event";
import * as _93 from "./nft/v1beta1/genesis";
import * as _94 from "./nft/v1beta1/nft";
import * as _95 from "./nft/v1beta1/query";
import * as _96 from "./nft/v1beta1/tx";
import * as _97 from "./orm/module/v1alpha1/module";
import * as _98 from "./orm/v1/orm";
import * as _99 from "./orm/v1alpha1/schema";
import * as _100 from "./params/v1beta1/params";
import * as _101 from "./params/v1beta1/query";
import * as _102 from "./slashing/v1beta1/genesis";
import * as _103 from "./slashing/v1beta1/query";
import * as _104 from "./slashing/v1beta1/slashing";
import * as _105 from "./slashing/v1beta1/tx";
import * as _106 from "./staking/v1beta1/authz";
import * as _107 from "./staking/v1beta1/genesis";
import * as _108 from "./staking/v1beta1/query";
import * as _109 from "./staking/v1beta1/staking";
import * as _110 from "./staking/v1beta1/tx";
import * as _111 from "./tx/signing/v1beta1/signing";
import * as _112 from "./tx/v1beta1/service";
import * as _113 from "./tx/v1beta1/tx";
import * as _114 from "./upgrade/v1beta1/query";
import * as _115 from "./upgrade/v1beta1/tx";
import * as _116 from "./upgrade/v1beta1/upgrade";
import * as _117 from "./vesting/v1beta1/tx";
import * as _118 from "./vesting/v1beta1/vesting";
import * as _191 from "./auth/v1beta1/query.lcd";
import * as _192 from "./authz/v1beta1/query.lcd";
import * as _193 from "./bank/v1beta1/query.lcd";
import * as _194 from "./base/node/v1beta1/query.lcd";
import * as _195 from "./base/tendermint/v1beta1/query.lcd";
import * as _196 from "./distribution/v1beta1/query.lcd";
import * as _197 from "./evidence/v1beta1/query.lcd";
import * as _198 from "./feegrant/v1beta1/query.lcd";
import * as _199 from "./gov/v1/query.lcd";
import * as _200 from "./gov/v1beta1/query.lcd";
import * as _201 from "./group/v1/query.lcd";
import * as _202 from "./mint/v1beta1/query.lcd";
import * as _203 from "./nft/v1beta1/query.lcd";
import * as _204 from "./params/v1beta1/query.lcd";
import * as _205 from "./slashing/v1beta1/query.lcd";
import * as _206 from "./staking/v1beta1/query.lcd";
import * as _207 from "./tx/v1beta1/service.lcd";
import * as _208 from "./upgrade/v1beta1/query.lcd";
import * as _209 from "./app/v1alpha1/query.rpc.Query";
import * as _210 from "./auth/v1beta1/query.rpc.Query";
import * as _211 from "./authz/v1beta1/query.rpc.Query";
import * as _212 from "./bank/v1beta1/query.rpc.Query";
import * as _213 from "./base/node/v1beta1/query.rpc.Service";
import * as _214 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _215 from "./distribution/v1beta1/query.rpc.Query";
import * as _216 from "./evidence/v1beta1/query.rpc.Query";
import * as _217 from "./feegrant/v1beta1/query.rpc.Query";
import * as _218 from "./gov/v1/query.rpc.Query";
import * as _219 from "./gov/v1beta1/query.rpc.Query";
import * as _220 from "./group/v1/query.rpc.Query";
import * as _221 from "./mint/v1beta1/query.rpc.Query";
import * as _222 from "./nft/v1beta1/query.rpc.Query";
import * as _223 from "./params/v1beta1/query.rpc.Query";
import * as _224 from "./slashing/v1beta1/query.rpc.Query";
import * as _225 from "./staking/v1beta1/query.rpc.Query";
import * as _226 from "./tx/v1beta1/service.rpc.Service";
import * as _227 from "./upgrade/v1beta1/query.rpc.Query";
import * as _228 from "./authz/v1beta1/tx.rpc.msg";
import * as _229 from "./bank/v1beta1/tx.rpc.msg";
import * as _230 from "./crisis/v1beta1/tx.rpc.msg";
import * as _231 from "./distribution/v1beta1/tx.rpc.msg";
import * as _232 from "./evidence/v1beta1/tx.rpc.msg";
import * as _233 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _234 from "./gov/v1/tx.rpc.msg";
import * as _235 from "./gov/v1beta1/tx.rpc.msg";
import * as _236 from "./group/v1/tx.rpc.msg";
import * as _237 from "./nft/v1beta1/tx.rpc.msg";
import * as _238 from "./slashing/v1beta1/tx.rpc.msg";
import * as _239 from "./staking/v1beta1/tx.rpc.msg";
import * as _240 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _241 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _23.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _23.Module;
                    fromPartial(_: Partial<_23.Module>): _23.Module;
                    fromAmino(_: _23.ModuleAmino): _23.Module;
                    toAmino(_: _23.Module): _23.ModuleAmino;
                    fromAminoMsg(object: _23.ModuleAminoMsg): _23.Module;
                    toAminoMsg(message: _23.Module): _23.ModuleAminoMsg;
                    fromProtoMsg(message: _23.ModuleProtoMsg): _23.Module;
                    toProto(message: _23.Module): Uint8Array;
                    toProtoMsg(message: _23.Module): _23.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _26.QueryConfigRequest): Promise<_26.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _26.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryConfigRequest;
                fromPartial(_: Partial<_26.QueryConfigRequest>): _26.QueryConfigRequest;
                fromAmino(_: _26.QueryConfigRequestAmino): _26.QueryConfigRequest;
                toAmino(_: _26.QueryConfigRequest): _26.QueryConfigRequestAmino;
                fromAminoMsg(object: _26.QueryConfigRequestAminoMsg): _26.QueryConfigRequest;
                toAminoMsg(message: _26.QueryConfigRequest): _26.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _26.QueryConfigRequestProtoMsg): _26.QueryConfigRequest;
                toProto(message: _26.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _26.QueryConfigRequest): _26.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _26.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryConfigResponse;
                fromPartial(object: Partial<_26.QueryConfigResponse>): _26.QueryConfigResponse;
                fromAmino(object: _26.QueryConfigResponseAmino): _26.QueryConfigResponse;
                toAmino(message: _26.QueryConfigResponse): _26.QueryConfigResponseAmino;
                fromAminoMsg(object: _26.QueryConfigResponseAminoMsg): _26.QueryConfigResponse;
                toAminoMsg(message: _26.QueryConfigResponse): _26.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _26.QueryConfigResponseProtoMsg): _26.QueryConfigResponse;
                toProto(message: _26.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _26.QueryConfigResponse): _26.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _25.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ModuleDescriptor;
                fromPartial(object: Partial<_25.ModuleDescriptor>): _25.ModuleDescriptor;
                fromAmino(object: _25.ModuleDescriptorAmino): _25.ModuleDescriptor;
                toAmino(message: _25.ModuleDescriptor): _25.ModuleDescriptorAmino;
                fromAminoMsg(object: _25.ModuleDescriptorAminoMsg): _25.ModuleDescriptor;
                toAminoMsg(message: _25.ModuleDescriptor): _25.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _25.ModuleDescriptorProtoMsg): _25.ModuleDescriptor;
                toProto(message: _25.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _25.ModuleDescriptor): _25.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _25.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.PackageReference;
                fromPartial(object: Partial<_25.PackageReference>): _25.PackageReference;
                fromAmino(object: _25.PackageReferenceAmino): _25.PackageReference;
                toAmino(message: _25.PackageReference): _25.PackageReferenceAmino;
                fromAminoMsg(object: _25.PackageReferenceAminoMsg): _25.PackageReference;
                toAminoMsg(message: _25.PackageReference): _25.PackageReferenceAminoMsg;
                fromProtoMsg(message: _25.PackageReferenceProtoMsg): _25.PackageReference;
                toProto(message: _25.PackageReference): Uint8Array;
                toProtoMsg(message: _25.PackageReference): _25.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _25.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MigrateFromInfo;
                fromPartial(object: Partial<_25.MigrateFromInfo>): _25.MigrateFromInfo;
                fromAmino(object: _25.MigrateFromInfoAmino): _25.MigrateFromInfo;
                toAmino(message: _25.MigrateFromInfo): _25.MigrateFromInfoAmino;
                fromAminoMsg(object: _25.MigrateFromInfoAminoMsg): _25.MigrateFromInfo;
                toAminoMsg(message: _25.MigrateFromInfo): _25.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _25.MigrateFromInfoProtoMsg): _25.MigrateFromInfo;
                toProto(message: _25.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _25.MigrateFromInfo): _25.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _24.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Config;
                fromPartial(object: Partial<_24.Config>): _24.Config;
                fromAmino(object: _24.ConfigAmino): _24.Config;
                toAmino(message: _24.Config): _24.ConfigAmino;
                fromAminoMsg(object: _24.ConfigAminoMsg): _24.Config;
                toAminoMsg(message: _24.Config): _24.ConfigAminoMsg;
                fromProtoMsg(message: _24.ConfigProtoMsg): _24.Config;
                toProto(message: _24.Config): Uint8Array;
                toProtoMsg(message: _24.Config): _24.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _24.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.ModuleConfig;
                fromPartial(object: Partial<_24.ModuleConfig>): _24.ModuleConfig;
                fromAmino(object: _24.ModuleConfigAmino): _24.ModuleConfig;
                toAmino(message: _24.ModuleConfig): _24.ModuleConfigAmino;
                fromAminoMsg(object: _24.ModuleConfigAminoMsg): _24.ModuleConfig;
                toAminoMsg(message: _24.ModuleConfig): _24.ModuleConfigAminoMsg;
                fromProtoMsg(message: _24.ModuleConfigProtoMsg): _24.ModuleConfig;
                toProto(message: _24.ModuleConfig): Uint8Array;
                toProtoMsg(message: _24.ModuleConfig): _24.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _29.QueryAccountsRequest): Promise<_29.QueryAccountsResponse>;
                account(request: _29.QueryAccountRequest): Promise<_29.QueryAccountResponse>;
                accountAddressByID(request: _29.QueryAccountAddressByIDRequest): Promise<_29.QueryAccountAddressByIDResponse>;
                params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                moduleAccounts(request?: _29.QueryModuleAccountsRequest): Promise<_29.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _29.QueryModuleAccountByNameRequest): Promise<_29.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _29.Bech32PrefixRequest): Promise<_29.Bech32PrefixResponse>;
                addressBytesToString(request: _29.AddressBytesToStringRequest): Promise<_29.AddressBytesToStringResponse>;
                addressStringToBytes(request: _29.AddressStringToBytesRequest): Promise<_29.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _29.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountsRequest;
                fromPartial(object: Partial<_29.QueryAccountsRequest>): _29.QueryAccountsRequest;
                fromAmino(object: _29.QueryAccountsRequestAmino): _29.QueryAccountsRequest;
                toAmino(message: _29.QueryAccountsRequest): _29.QueryAccountsRequestAmino;
                fromAminoMsg(object: _29.QueryAccountsRequestAminoMsg): _29.QueryAccountsRequest;
                toAminoMsg(message: _29.QueryAccountsRequest): _29.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryAccountsRequestProtoMsg): _29.QueryAccountsRequest;
                toProto(message: _29.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryAccountsRequest): _29.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _29.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountsResponse;
                fromPartial(object: Partial<_29.QueryAccountsResponse>): _29.QueryAccountsResponse;
                fromAmino(object: _29.QueryAccountsResponseAmino): _29.QueryAccountsResponse;
                toAmino(message: _29.QueryAccountsResponse): _29.QueryAccountsResponseAmino;
                fromAminoMsg(object: _29.QueryAccountsResponseAminoMsg): _29.QueryAccountsResponse;
                toAminoMsg(message: _29.QueryAccountsResponse): _29.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryAccountsResponseProtoMsg): _29.QueryAccountsResponse;
                toProto(message: _29.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryAccountsResponse): _29.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _29.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountRequest;
                fromPartial(object: Partial<_29.QueryAccountRequest>): _29.QueryAccountRequest;
                fromAmino(object: _29.QueryAccountRequestAmino): _29.QueryAccountRequest;
                toAmino(message: _29.QueryAccountRequest): _29.QueryAccountRequestAmino;
                fromAminoMsg(object: _29.QueryAccountRequestAminoMsg): _29.QueryAccountRequest;
                toAminoMsg(message: _29.QueryAccountRequest): _29.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _29.QueryAccountRequestProtoMsg): _29.QueryAccountRequest;
                toProto(message: _29.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _29.QueryAccountRequest): _29.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _29.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountResponse;
                fromPartial(object: Partial<_29.QueryAccountResponse>): _29.QueryAccountResponse;
                fromAmino(object: _29.QueryAccountResponseAmino): _29.QueryAccountResponse;
                toAmino(message: _29.QueryAccountResponse): _29.QueryAccountResponseAmino;
                fromAminoMsg(object: _29.QueryAccountResponseAminoMsg): _29.QueryAccountResponse;
                toAminoMsg(message: _29.QueryAccountResponse): _29.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _29.QueryAccountResponseProtoMsg): _29.QueryAccountResponse;
                toProto(message: _29.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _29.QueryAccountResponse): _29.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _29.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.QueryParamsRequest;
                fromPartial(_: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
                fromAmino(_: _29.QueryParamsRequestAmino): _29.QueryParamsRequest;
                toAmino(_: _29.QueryParamsRequest): _29.QueryParamsRequestAmino;
                fromAminoMsg(object: _29.QueryParamsRequestAminoMsg): _29.QueryParamsRequest;
                toAminoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryParamsRequestProtoMsg): _29.QueryParamsRequest;
                toProto(message: _29.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _29.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryParamsResponse;
                fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
                fromAmino(object: _29.QueryParamsResponseAmino): _29.QueryParamsResponse;
                toAmino(message: _29.QueryParamsResponse): _29.QueryParamsResponseAmino;
                fromAminoMsg(object: _29.QueryParamsResponseAminoMsg): _29.QueryParamsResponse;
                toAminoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryParamsResponseProtoMsg): _29.QueryParamsResponse;
                toProto(message: _29.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _29.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_29.QueryModuleAccountsRequest>): _29.QueryModuleAccountsRequest;
                fromAmino(_: _29.QueryModuleAccountsRequestAmino): _29.QueryModuleAccountsRequest;
                toAmino(_: _29.QueryModuleAccountsRequest): _29.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _29.QueryModuleAccountsRequestAminoMsg): _29.QueryModuleAccountsRequest;
                toAminoMsg(message: _29.QueryModuleAccountsRequest): _29.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryModuleAccountsRequestProtoMsg): _29.QueryModuleAccountsRequest;
                toProto(message: _29.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryModuleAccountsRequest): _29.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _29.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_29.QueryModuleAccountsResponse>): _29.QueryModuleAccountsResponse;
                fromAmino(object: _29.QueryModuleAccountsResponseAmino): _29.QueryModuleAccountsResponse;
                toAmino(message: _29.QueryModuleAccountsResponse): _29.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _29.QueryModuleAccountsResponseAminoMsg): _29.QueryModuleAccountsResponse;
                toAminoMsg(message: _29.QueryModuleAccountsResponse): _29.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryModuleAccountsResponseProtoMsg): _29.QueryModuleAccountsResponse;
                toProto(message: _29.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryModuleAccountsResponse): _29.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _29.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_29.QueryModuleAccountByNameRequest>): _29.QueryModuleAccountByNameRequest;
                fromAmino(object: _29.QueryModuleAccountByNameRequestAmino): _29.QueryModuleAccountByNameRequest;
                toAmino(message: _29.QueryModuleAccountByNameRequest): _29.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _29.QueryModuleAccountByNameRequestAminoMsg): _29.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _29.QueryModuleAccountByNameRequest): _29.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _29.QueryModuleAccountByNameRequestProtoMsg): _29.QueryModuleAccountByNameRequest;
                toProto(message: _29.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _29.QueryModuleAccountByNameRequest): _29.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _29.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_29.QueryModuleAccountByNameResponse>): _29.QueryModuleAccountByNameResponse;
                fromAmino(object: _29.QueryModuleAccountByNameResponseAmino): _29.QueryModuleAccountByNameResponse;
                toAmino(message: _29.QueryModuleAccountByNameResponse): _29.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _29.QueryModuleAccountByNameResponseAminoMsg): _29.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _29.QueryModuleAccountByNameResponse): _29.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _29.QueryModuleAccountByNameResponseProtoMsg): _29.QueryModuleAccountByNameResponse;
                toProto(message: _29.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _29.QueryModuleAccountByNameResponse): _29.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _29.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.Bech32PrefixRequest;
                fromPartial(_: Partial<_29.Bech32PrefixRequest>): _29.Bech32PrefixRequest;
                fromAmino(_: _29.Bech32PrefixRequestAmino): _29.Bech32PrefixRequest;
                toAmino(_: _29.Bech32PrefixRequest): _29.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _29.Bech32PrefixRequestAminoMsg): _29.Bech32PrefixRequest;
                toAminoMsg(message: _29.Bech32PrefixRequest): _29.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _29.Bech32PrefixRequestProtoMsg): _29.Bech32PrefixRequest;
                toProto(message: _29.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _29.Bech32PrefixRequest): _29.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _29.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Bech32PrefixResponse;
                fromPartial(object: Partial<_29.Bech32PrefixResponse>): _29.Bech32PrefixResponse;
                fromAmino(object: _29.Bech32PrefixResponseAmino): _29.Bech32PrefixResponse;
                toAmino(message: _29.Bech32PrefixResponse): _29.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _29.Bech32PrefixResponseAminoMsg): _29.Bech32PrefixResponse;
                toAminoMsg(message: _29.Bech32PrefixResponse): _29.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _29.Bech32PrefixResponseProtoMsg): _29.Bech32PrefixResponse;
                toProto(message: _29.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _29.Bech32PrefixResponse): _29.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _29.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.AddressBytesToStringRequest;
                fromPartial(object: Partial<_29.AddressBytesToStringRequest>): _29.AddressBytesToStringRequest;
                fromAmino(object: _29.AddressBytesToStringRequestAmino): _29.AddressBytesToStringRequest;
                toAmino(message: _29.AddressBytesToStringRequest): _29.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _29.AddressBytesToStringRequestAminoMsg): _29.AddressBytesToStringRequest;
                toAminoMsg(message: _29.AddressBytesToStringRequest): _29.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _29.AddressBytesToStringRequestProtoMsg): _29.AddressBytesToStringRequest;
                toProto(message: _29.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _29.AddressBytesToStringRequest): _29.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _29.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.AddressBytesToStringResponse;
                fromPartial(object: Partial<_29.AddressBytesToStringResponse>): _29.AddressBytesToStringResponse;
                fromAmino(object: _29.AddressBytesToStringResponseAmino): _29.AddressBytesToStringResponse;
                toAmino(message: _29.AddressBytesToStringResponse): _29.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _29.AddressBytesToStringResponseAminoMsg): _29.AddressBytesToStringResponse;
                toAminoMsg(message: _29.AddressBytesToStringResponse): _29.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _29.AddressBytesToStringResponseProtoMsg): _29.AddressBytesToStringResponse;
                toProto(message: _29.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _29.AddressBytesToStringResponse): _29.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _29.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.AddressStringToBytesRequest;
                fromPartial(object: Partial<_29.AddressStringToBytesRequest>): _29.AddressStringToBytesRequest;
                fromAmino(object: _29.AddressStringToBytesRequestAmino): _29.AddressStringToBytesRequest;
                toAmino(message: _29.AddressStringToBytesRequest): _29.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _29.AddressStringToBytesRequestAminoMsg): _29.AddressStringToBytesRequest;
                toAminoMsg(message: _29.AddressStringToBytesRequest): _29.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _29.AddressStringToBytesRequestProtoMsg): _29.AddressStringToBytesRequest;
                toProto(message: _29.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _29.AddressStringToBytesRequest): _29.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _29.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.AddressStringToBytesResponse;
                fromPartial(object: Partial<_29.AddressStringToBytesResponse>): _29.AddressStringToBytesResponse;
                fromAmino(object: _29.AddressStringToBytesResponseAmino): _29.AddressStringToBytesResponse;
                toAmino(message: _29.AddressStringToBytesResponse): _29.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _29.AddressStringToBytesResponseAminoMsg): _29.AddressStringToBytesResponse;
                toAminoMsg(message: _29.AddressStringToBytesResponse): _29.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _29.AddressStringToBytesResponseProtoMsg): _29.AddressStringToBytesResponse;
                toProto(message: _29.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _29.AddressStringToBytesResponse): _29.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _29.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_29.QueryAccountAddressByIDRequest>): _29.QueryAccountAddressByIDRequest;
                fromAmino(object: _29.QueryAccountAddressByIDRequestAmino): _29.QueryAccountAddressByIDRequest;
                toAmino(message: _29.QueryAccountAddressByIDRequest): _29.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _29.QueryAccountAddressByIDRequestAminoMsg): _29.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _29.QueryAccountAddressByIDRequest): _29.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _29.QueryAccountAddressByIDRequestProtoMsg): _29.QueryAccountAddressByIDRequest;
                toProto(message: _29.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _29.QueryAccountAddressByIDRequest): _29.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _29.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_29.QueryAccountAddressByIDResponse>): _29.QueryAccountAddressByIDResponse;
                fromAmino(object: _29.QueryAccountAddressByIDResponseAmino): _29.QueryAccountAddressByIDResponse;
                toAmino(message: _29.QueryAccountAddressByIDResponse): _29.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _29.QueryAccountAddressByIDResponseAminoMsg): _29.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _29.QueryAccountAddressByIDResponse): _29.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _29.QueryAccountAddressByIDResponseProtoMsg): _29.QueryAccountAddressByIDResponse;
                toProto(message: _29.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _29.QueryAccountAddressByIDResponse): _29.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _27.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _27.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _28.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
                fromAmino(object: _28.GenesisStateAmino): _28.GenesisState;
                toAmino(message: _28.GenesisState): _28.GenesisStateAmino;
                fromAminoMsg(object: _28.GenesisStateAminoMsg): _28.GenesisState;
                toAminoMsg(message: _28.GenesisState): _28.GenesisStateAminoMsg;
                fromProtoMsg(message: _28.GenesisStateProtoMsg): _28.GenesisState;
                toProto(message: _28.GenesisState): Uint8Array;
                toProtoMsg(message: _28.GenesisState): _28.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _27.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.BaseAccount;
                fromPartial(object: Partial<_27.BaseAccount>): _27.BaseAccount;
                fromAmino(object: _27.BaseAccountAmino): _27.BaseAccount;
                toAmino(message: _27.BaseAccount): _27.BaseAccountAmino;
                fromAminoMsg(object: _27.BaseAccountAminoMsg): _27.BaseAccount;
                toAminoMsg(message: _27.BaseAccount): _27.BaseAccountAminoMsg;
                fromProtoMsg(message: _27.BaseAccountProtoMsg): _27.BaseAccount;
                toProto(message: _27.BaseAccount): Uint8Array;
                toProtoMsg(message: _27.BaseAccount): _27.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _27.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ModuleAccount;
                fromPartial(object: Partial<_27.ModuleAccount>): _27.ModuleAccount;
                fromAmino(object: _27.ModuleAccountAmino): _27.ModuleAccount;
                toAmino(message: _27.ModuleAccount): _27.ModuleAccountAmino;
                fromAminoMsg(object: _27.ModuleAccountAminoMsg): _27.ModuleAccount;
                toAminoMsg(message: _27.ModuleAccount): _27.ModuleAccountAminoMsg;
                fromProtoMsg(message: _27.ModuleAccountProtoMsg): _27.ModuleAccount;
                toProto(message: _27.ModuleAccount): Uint8Array;
                toProtoMsg(message: _27.ModuleAccount): _27.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _27.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Params;
                fromPartial(object: Partial<_27.Params>): _27.Params;
                fromAmino(object: _27.ParamsAmino): _27.Params;
                toAmino(message: _27.Params): _27.ParamsAmino;
                fromAminoMsg(object: _27.ParamsAminoMsg): _27.Params;
                toAminoMsg(message: _27.Params): _27.ParamsAminoMsg;
                fromProtoMsg(message: _27.ParamsProtoMsg): _27.Params;
                toProto(message: _27.Params): Uint8Array;
                toProtoMsg(message: _27.Params): _27.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _33.QueryGrantsRequest): Promise<_33.QueryGrantsResponse>;
                granterGrants(request: _33.QueryGranterGrantsRequest): Promise<_33.QueryGranterGrantsResponse>;
                granteeGrants(request: _33.QueryGranteeGrantsRequest): Promise<_33.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _34.MsgGrant) => _34.MsgGrantAmino;
                    fromAmino: (object: _34.MsgGrantAmino) => _34.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _34.MsgExec) => _34.MsgExecAmino;
                    fromAmino: (object: _34.MsgExecAmino) => _34.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _34.MsgRevoke) => _34.MsgRevokeAmino;
                    fromAmino: (object: _34.MsgRevokeAmino) => _34.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _34.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgGrant;
                fromPartial(object: Partial<_34.MsgGrant>): _34.MsgGrant;
                fromAmino(object: _34.MsgGrantAmino): _34.MsgGrant;
                toAmino(message: _34.MsgGrant): _34.MsgGrantAmino;
                fromAminoMsg(object: _34.MsgGrantAminoMsg): _34.MsgGrant;
                toAminoMsg(message: _34.MsgGrant): _34.MsgGrantAminoMsg;
                fromProtoMsg(message: _34.MsgGrantProtoMsg): _34.MsgGrant;
                toProto(message: _34.MsgGrant): Uint8Array;
                toProtoMsg(message: _34.MsgGrant): _34.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _34.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgExecResponse;
                fromPartial(object: Partial<_34.MsgExecResponse>): _34.MsgExecResponse;
                fromAmino(object: _34.MsgExecResponseAmino): _34.MsgExecResponse;
                toAmino(message: _34.MsgExecResponse): _34.MsgExecResponseAmino;
                fromAminoMsg(object: _34.MsgExecResponseAminoMsg): _34.MsgExecResponse;
                toAminoMsg(message: _34.MsgExecResponse): _34.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _34.MsgExecResponseProtoMsg): _34.MsgExecResponse;
                toProto(message: _34.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _34.MsgExecResponse): _34.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _34.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgExec;
                fromPartial(object: Partial<_34.MsgExec>): _34.MsgExec;
                fromAmino(object: _34.MsgExecAmino): _34.MsgExec;
                toAmino(message: _34.MsgExec): _34.MsgExecAmino;
                fromAminoMsg(object: _34.MsgExecAminoMsg): _34.MsgExec;
                toAminoMsg(message: _34.MsgExec): _34.MsgExecAminoMsg;
                fromProtoMsg(message: _34.MsgExecProtoMsg): _34.MsgExec;
                toProto(message: _34.MsgExec): Uint8Array;
                toProtoMsg(message: _34.MsgExec): _34.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _34.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgGrantResponse;
                fromPartial(_: Partial<_34.MsgGrantResponse>): _34.MsgGrantResponse;
                fromAmino(_: _34.MsgGrantResponseAmino): _34.MsgGrantResponse;
                toAmino(_: _34.MsgGrantResponse): _34.MsgGrantResponseAmino;
                fromAminoMsg(object: _34.MsgGrantResponseAminoMsg): _34.MsgGrantResponse;
                toAminoMsg(message: _34.MsgGrantResponse): _34.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _34.MsgGrantResponseProtoMsg): _34.MsgGrantResponse;
                toProto(message: _34.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _34.MsgGrantResponse): _34.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _34.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgRevoke;
                fromPartial(object: Partial<_34.MsgRevoke>): _34.MsgRevoke;
                fromAmino(object: _34.MsgRevokeAmino): _34.MsgRevoke;
                toAmino(message: _34.MsgRevoke): _34.MsgRevokeAmino;
                fromAminoMsg(object: _34.MsgRevokeAminoMsg): _34.MsgRevoke;
                toAminoMsg(message: _34.MsgRevoke): _34.MsgRevokeAminoMsg;
                fromProtoMsg(message: _34.MsgRevokeProtoMsg): _34.MsgRevoke;
                toProto(message: _34.MsgRevoke): Uint8Array;
                toProtoMsg(message: _34.MsgRevoke): _34.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _34.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgRevokeResponse;
                fromPartial(_: Partial<_34.MsgRevokeResponse>): _34.MsgRevokeResponse;
                fromAmino(_: _34.MsgRevokeResponseAmino): _34.MsgRevokeResponse;
                toAmino(_: _34.MsgRevokeResponse): _34.MsgRevokeResponseAmino;
                fromAminoMsg(object: _34.MsgRevokeResponseAminoMsg): _34.MsgRevokeResponse;
                toAminoMsg(message: _34.MsgRevokeResponse): _34.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _34.MsgRevokeResponseProtoMsg): _34.MsgRevokeResponse;
                toProto(message: _34.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _34.MsgRevokeResponse): _34.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _33.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGrantsRequest;
                fromPartial(object: Partial<_33.QueryGrantsRequest>): _33.QueryGrantsRequest;
                fromAmino(object: _33.QueryGrantsRequestAmino): _33.QueryGrantsRequest;
                toAmino(message: _33.QueryGrantsRequest): _33.QueryGrantsRequestAmino;
                fromAminoMsg(object: _33.QueryGrantsRequestAminoMsg): _33.QueryGrantsRequest;
                toAminoMsg(message: _33.QueryGrantsRequest): _33.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryGrantsRequestProtoMsg): _33.QueryGrantsRequest;
                toProto(message: _33.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryGrantsRequest): _33.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _33.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGrantsResponse;
                fromPartial(object: Partial<_33.QueryGrantsResponse>): _33.QueryGrantsResponse;
                fromAmino(object: _33.QueryGrantsResponseAmino): _33.QueryGrantsResponse;
                toAmino(message: _33.QueryGrantsResponse): _33.QueryGrantsResponseAmino;
                fromAminoMsg(object: _33.QueryGrantsResponseAminoMsg): _33.QueryGrantsResponse;
                toAminoMsg(message: _33.QueryGrantsResponse): _33.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryGrantsResponseProtoMsg): _33.QueryGrantsResponse;
                toProto(message: _33.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryGrantsResponse): _33.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _33.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_33.QueryGranterGrantsRequest>): _33.QueryGranterGrantsRequest;
                fromAmino(object: _33.QueryGranterGrantsRequestAmino): _33.QueryGranterGrantsRequest;
                toAmino(message: _33.QueryGranterGrantsRequest): _33.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _33.QueryGranterGrantsRequestAminoMsg): _33.QueryGranterGrantsRequest;
                toAminoMsg(message: _33.QueryGranterGrantsRequest): _33.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryGranterGrantsRequestProtoMsg): _33.QueryGranterGrantsRequest;
                toProto(message: _33.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryGranterGrantsRequest): _33.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _33.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_33.QueryGranterGrantsResponse>): _33.QueryGranterGrantsResponse;
                fromAmino(object: _33.QueryGranterGrantsResponseAmino): _33.QueryGranterGrantsResponse;
                toAmino(message: _33.QueryGranterGrantsResponse): _33.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _33.QueryGranterGrantsResponseAminoMsg): _33.QueryGranterGrantsResponse;
                toAminoMsg(message: _33.QueryGranterGrantsResponse): _33.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryGranterGrantsResponseProtoMsg): _33.QueryGranterGrantsResponse;
                toProto(message: _33.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryGranterGrantsResponse): _33.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _33.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_33.QueryGranteeGrantsRequest>): _33.QueryGranteeGrantsRequest;
                fromAmino(object: _33.QueryGranteeGrantsRequestAmino): _33.QueryGranteeGrantsRequest;
                toAmino(message: _33.QueryGranteeGrantsRequest): _33.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _33.QueryGranteeGrantsRequestAminoMsg): _33.QueryGranteeGrantsRequest;
                toAminoMsg(message: _33.QueryGranteeGrantsRequest): _33.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryGranteeGrantsRequestProtoMsg): _33.QueryGranteeGrantsRequest;
                toProto(message: _33.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryGranteeGrantsRequest): _33.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _33.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_33.QueryGranteeGrantsResponse>): _33.QueryGranteeGrantsResponse;
                fromAmino(object: _33.QueryGranteeGrantsResponseAmino): _33.QueryGranteeGrantsResponse;
                toAmino(message: _33.QueryGranteeGrantsResponse): _33.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _33.QueryGranteeGrantsResponseAminoMsg): _33.QueryGranteeGrantsResponse;
                toAminoMsg(message: _33.QueryGranteeGrantsResponse): _33.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryGranteeGrantsResponseProtoMsg): _33.QueryGranteeGrantsResponse;
                toProto(message: _33.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryGranteeGrantsResponse): _33.QueryGranteeGrantsResponseProtoMsg;
            };
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
            EventGrant: {
                typeUrl: string;
                encode(message: _31.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.EventGrant;
                fromPartial(object: Partial<_31.EventGrant>): _31.EventGrant;
                fromAmino(object: _31.EventGrantAmino): _31.EventGrant;
                toAmino(message: _31.EventGrant): _31.EventGrantAmino;
                fromAminoMsg(object: _31.EventGrantAminoMsg): _31.EventGrant;
                toAminoMsg(message: _31.EventGrant): _31.EventGrantAminoMsg;
                fromProtoMsg(message: _31.EventGrantProtoMsg): _31.EventGrant;
                toProto(message: _31.EventGrant): Uint8Array;
                toProtoMsg(message: _31.EventGrant): _31.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _31.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.EventRevoke;
                fromPartial(object: Partial<_31.EventRevoke>): _31.EventRevoke;
                fromAmino(object: _31.EventRevokeAmino): _31.EventRevoke;
                toAmino(message: _31.EventRevoke): _31.EventRevokeAmino;
                fromAminoMsg(object: _31.EventRevokeAminoMsg): _31.EventRevoke;
                toAminoMsg(message: _31.EventRevoke): _31.EventRevokeAminoMsg;
                fromProtoMsg(message: _31.EventRevokeProtoMsg): _31.EventRevoke;
                toProto(message: _31.EventRevoke): Uint8Array;
                toProtoMsg(message: _31.EventRevoke): _31.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _30.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GenericAuthorization;
                fromPartial(object: Partial<_30.GenericAuthorization>): _30.GenericAuthorization;
                fromAmino(object: _30.GenericAuthorizationAmino): _30.GenericAuthorization;
                toAmino(message: _30.GenericAuthorization): _30.GenericAuthorizationAmino;
                fromAminoMsg(object: _30.GenericAuthorizationAminoMsg): _30.GenericAuthorization;
                toAminoMsg(message: _30.GenericAuthorization): _30.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _30.GenericAuthorizationProtoMsg): _30.GenericAuthorization;
                toProto(message: _30.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _30.GenericAuthorization): _30.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _30.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Grant;
                fromPartial(object: Partial<_30.Grant>): _30.Grant;
                fromAmino(object: _30.GrantAmino): _30.Grant;
                toAmino(message: _30.Grant): _30.GrantAmino;
                fromAminoMsg(object: _30.GrantAminoMsg): _30.Grant;
                toAminoMsg(message: _30.Grant): _30.GrantAminoMsg;
                fromProtoMsg(message: _30.GrantProtoMsg): _30.Grant;
                toProto(message: _30.Grant): Uint8Array;
                toProtoMsg(message: _30.Grant): _30.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _30.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GrantAuthorization;
                fromPartial(object: Partial<_30.GrantAuthorization>): _30.GrantAuthorization;
                fromAmino(object: _30.GrantAuthorizationAmino): _30.GrantAuthorization;
                toAmino(message: _30.GrantAuthorization): _30.GrantAuthorizationAmino;
                fromAminoMsg(object: _30.GrantAuthorizationAminoMsg): _30.GrantAuthorization;
                toAminoMsg(message: _30.GrantAuthorization): _30.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _30.GrantAuthorizationProtoMsg): _30.GrantAuthorization;
                toProto(message: _30.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _30.GrantAuthorization): _30.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _30.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GrantQueueItem;
                fromPartial(object: Partial<_30.GrantQueueItem>): _30.GrantQueueItem;
                fromAmino(object: _30.GrantQueueItemAmino): _30.GrantQueueItem;
                toAmino(message: _30.GrantQueueItem): _30.GrantQueueItemAmino;
                fromAminoMsg(object: _30.GrantQueueItemAminoMsg): _30.GrantQueueItem;
                toAminoMsg(message: _30.GrantQueueItem): _30.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _30.GrantQueueItemProtoMsg): _30.GrantQueueItem;
                toProto(message: _30.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _30.GrantQueueItem): _30.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _35.SendAuthorization | _106.StakeAuthorization | _30.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _38.QueryBalanceRequest): Promise<_38.QueryBalanceResponse>;
                allBalances(request: _38.QueryAllBalancesRequest): Promise<_38.QueryAllBalancesResponse>;
                spendableBalances(request: _38.QuerySpendableBalancesRequest): Promise<_38.QuerySpendableBalancesResponse>;
                totalSupply(request?: _38.QueryTotalSupplyRequest): Promise<_38.QueryTotalSupplyResponse>;
                supplyOf(request: _38.QuerySupplyOfRequest): Promise<_38.QuerySupplyOfResponse>;
                params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
                denomMetadata(request: _38.QueryDenomMetadataRequest): Promise<_38.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _38.QueryDenomsMetadataRequest): Promise<_38.QueryDenomsMetadataResponse>;
                denomOwners(request: _38.QueryDenomOwnersRequest): Promise<_38.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _39.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _39.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _39.MsgSend): {
                        typeUrl: string;
                        value: _39.MsgSend;
                    };
                    multiSend(value: _39.MsgMultiSend): {
                        typeUrl: string;
                        value: _39.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _39.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _39.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _39.MsgSend): {
                        typeUrl: string;
                        value: _39.MsgSend;
                    };
                    multiSend(value: _39.MsgMultiSend): {
                        typeUrl: string;
                        value: _39.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _39.MsgSend) => _39.MsgSendAmino;
                    fromAmino: (object: _39.MsgSendAmino) => _39.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _39.MsgMultiSend) => _39.MsgMultiSendAmino;
                    fromAmino: (object: _39.MsgMultiSendAmino) => _39.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _39.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MsgSend;
                fromPartial(object: Partial<_39.MsgSend>): _39.MsgSend;
                fromAmino(object: _39.MsgSendAmino): _39.MsgSend;
                toAmino(message: _39.MsgSend): _39.MsgSendAmino;
                fromAminoMsg(object: _39.MsgSendAminoMsg): _39.MsgSend;
                toAminoMsg(message: _39.MsgSend): _39.MsgSendAminoMsg;
                fromProtoMsg(message: _39.MsgSendProtoMsg): _39.MsgSend;
                toProto(message: _39.MsgSend): Uint8Array;
                toProtoMsg(message: _39.MsgSend): _39.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _39.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.MsgSendResponse;
                fromPartial(_: Partial<_39.MsgSendResponse>): _39.MsgSendResponse;
                fromAmino(_: _39.MsgSendResponseAmino): _39.MsgSendResponse;
                toAmino(_: _39.MsgSendResponse): _39.MsgSendResponseAmino;
                fromAminoMsg(object: _39.MsgSendResponseAminoMsg): _39.MsgSendResponse;
                toAminoMsg(message: _39.MsgSendResponse): _39.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _39.MsgSendResponseProtoMsg): _39.MsgSendResponse;
                toProto(message: _39.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _39.MsgSendResponse): _39.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _39.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MsgMultiSend;
                fromPartial(object: Partial<_39.MsgMultiSend>): _39.MsgMultiSend;
                fromAmino(object: _39.MsgMultiSendAmino): _39.MsgMultiSend;
                toAmino(message: _39.MsgMultiSend): _39.MsgMultiSendAmino;
                fromAminoMsg(object: _39.MsgMultiSendAminoMsg): _39.MsgMultiSend;
                toAminoMsg(message: _39.MsgMultiSend): _39.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _39.MsgMultiSendProtoMsg): _39.MsgMultiSend;
                toProto(message: _39.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _39.MsgMultiSend): _39.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _39.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.MsgMultiSendResponse;
                fromPartial(_: Partial<_39.MsgMultiSendResponse>): _39.MsgMultiSendResponse;
                fromAmino(_: _39.MsgMultiSendResponseAmino): _39.MsgMultiSendResponse;
                toAmino(_: _39.MsgMultiSendResponse): _39.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _39.MsgMultiSendResponseAminoMsg): _39.MsgMultiSendResponse;
                toAminoMsg(message: _39.MsgMultiSendResponse): _39.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _39.MsgMultiSendResponseProtoMsg): _39.MsgMultiSendResponse;
                toProto(message: _39.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _39.MsgMultiSendResponse): _39.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _38.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryBalanceRequest;
                fromPartial(object: Partial<_38.QueryBalanceRequest>): _38.QueryBalanceRequest;
                fromAmino(object: _38.QueryBalanceRequestAmino): _38.QueryBalanceRequest;
                toAmino(message: _38.QueryBalanceRequest): _38.QueryBalanceRequestAmino;
                fromAminoMsg(object: _38.QueryBalanceRequestAminoMsg): _38.QueryBalanceRequest;
                toAminoMsg(message: _38.QueryBalanceRequest): _38.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _38.QueryBalanceRequestProtoMsg): _38.QueryBalanceRequest;
                toProto(message: _38.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _38.QueryBalanceRequest): _38.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _38.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryBalanceResponse;
                fromPartial(object: Partial<_38.QueryBalanceResponse>): _38.QueryBalanceResponse;
                fromAmino(object: _38.QueryBalanceResponseAmino): _38.QueryBalanceResponse;
                toAmino(message: _38.QueryBalanceResponse): _38.QueryBalanceResponseAmino;
                fromAminoMsg(object: _38.QueryBalanceResponseAminoMsg): _38.QueryBalanceResponse;
                toAminoMsg(message: _38.QueryBalanceResponse): _38.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _38.QueryBalanceResponseProtoMsg): _38.QueryBalanceResponse;
                toProto(message: _38.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _38.QueryBalanceResponse): _38.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _38.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAllBalancesRequest;
                fromPartial(object: Partial<_38.QueryAllBalancesRequest>): _38.QueryAllBalancesRequest;
                fromAmino(object: _38.QueryAllBalancesRequestAmino): _38.QueryAllBalancesRequest;
                toAmino(message: _38.QueryAllBalancesRequest): _38.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _38.QueryAllBalancesRequestAminoMsg): _38.QueryAllBalancesRequest;
                toAminoMsg(message: _38.QueryAllBalancesRequest): _38.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _38.QueryAllBalancesRequestProtoMsg): _38.QueryAllBalancesRequest;
                toProto(message: _38.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _38.QueryAllBalancesRequest): _38.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _38.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAllBalancesResponse;
                fromPartial(object: Partial<_38.QueryAllBalancesResponse>): _38.QueryAllBalancesResponse;
                fromAmino(object: _38.QueryAllBalancesResponseAmino): _38.QueryAllBalancesResponse;
                toAmino(message: _38.QueryAllBalancesResponse): _38.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _38.QueryAllBalancesResponseAminoMsg): _38.QueryAllBalancesResponse;
                toAminoMsg(message: _38.QueryAllBalancesResponse): _38.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _38.QueryAllBalancesResponseProtoMsg): _38.QueryAllBalancesResponse;
                toProto(message: _38.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _38.QueryAllBalancesResponse): _38.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _38.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_38.QuerySpendableBalancesRequest>): _38.QuerySpendableBalancesRequest;
                fromAmino(object: _38.QuerySpendableBalancesRequestAmino): _38.QuerySpendableBalancesRequest;
                toAmino(message: _38.QuerySpendableBalancesRequest): _38.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _38.QuerySpendableBalancesRequestAminoMsg): _38.QuerySpendableBalancesRequest;
                toAminoMsg(message: _38.QuerySpendableBalancesRequest): _38.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _38.QuerySpendableBalancesRequestProtoMsg): _38.QuerySpendableBalancesRequest;
                toProto(message: _38.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _38.QuerySpendableBalancesRequest): _38.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _38.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_38.QuerySpendableBalancesResponse>): _38.QuerySpendableBalancesResponse;
                fromAmino(object: _38.QuerySpendableBalancesResponseAmino): _38.QuerySpendableBalancesResponse;
                toAmino(message: _38.QuerySpendableBalancesResponse): _38.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _38.QuerySpendableBalancesResponseAminoMsg): _38.QuerySpendableBalancesResponse;
                toAminoMsg(message: _38.QuerySpendableBalancesResponse): _38.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _38.QuerySpendableBalancesResponseProtoMsg): _38.QuerySpendableBalancesResponse;
                toProto(message: _38.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _38.QuerySpendableBalancesResponse): _38.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _38.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_38.QueryTotalSupplyRequest>): _38.QueryTotalSupplyRequest;
                fromAmino(object: _38.QueryTotalSupplyRequestAmino): _38.QueryTotalSupplyRequest;
                toAmino(message: _38.QueryTotalSupplyRequest): _38.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _38.QueryTotalSupplyRequestAminoMsg): _38.QueryTotalSupplyRequest;
                toAminoMsg(message: _38.QueryTotalSupplyRequest): _38.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _38.QueryTotalSupplyRequestProtoMsg): _38.QueryTotalSupplyRequest;
                toProto(message: _38.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _38.QueryTotalSupplyRequest): _38.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _38.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_38.QueryTotalSupplyResponse>): _38.QueryTotalSupplyResponse;
                fromAmino(object: _38.QueryTotalSupplyResponseAmino): _38.QueryTotalSupplyResponse;
                toAmino(message: _38.QueryTotalSupplyResponse): _38.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _38.QueryTotalSupplyResponseAminoMsg): _38.QueryTotalSupplyResponse;
                toAminoMsg(message: _38.QueryTotalSupplyResponse): _38.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _38.QueryTotalSupplyResponseProtoMsg): _38.QueryTotalSupplyResponse;
                toProto(message: _38.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _38.QueryTotalSupplyResponse): _38.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _38.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QuerySupplyOfRequest;
                fromPartial(object: Partial<_38.QuerySupplyOfRequest>): _38.QuerySupplyOfRequest;
                fromAmino(object: _38.QuerySupplyOfRequestAmino): _38.QuerySupplyOfRequest;
                toAmino(message: _38.QuerySupplyOfRequest): _38.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _38.QuerySupplyOfRequestAminoMsg): _38.QuerySupplyOfRequest;
                toAminoMsg(message: _38.QuerySupplyOfRequest): _38.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _38.QuerySupplyOfRequestProtoMsg): _38.QuerySupplyOfRequest;
                toProto(message: _38.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _38.QuerySupplyOfRequest): _38.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _38.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QuerySupplyOfResponse;
                fromPartial(object: Partial<_38.QuerySupplyOfResponse>): _38.QuerySupplyOfResponse;
                fromAmino(object: _38.QuerySupplyOfResponseAmino): _38.QuerySupplyOfResponse;
                toAmino(message: _38.QuerySupplyOfResponse): _38.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _38.QuerySupplyOfResponseAminoMsg): _38.QuerySupplyOfResponse;
                toAminoMsg(message: _38.QuerySupplyOfResponse): _38.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _38.QuerySupplyOfResponseProtoMsg): _38.QuerySupplyOfResponse;
                toProto(message: _38.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _38.QuerySupplyOfResponse): _38.QuerySupplyOfResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _38.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_38.QueryDenomsMetadataRequest>): _38.QueryDenomsMetadataRequest;
                fromAmino(object: _38.QueryDenomsMetadataRequestAmino): _38.QueryDenomsMetadataRequest;
                toAmino(message: _38.QueryDenomsMetadataRequest): _38.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _38.QueryDenomsMetadataRequestAminoMsg): _38.QueryDenomsMetadataRequest;
                toAminoMsg(message: _38.QueryDenomsMetadataRequest): _38.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDenomsMetadataRequestProtoMsg): _38.QueryDenomsMetadataRequest;
                toProto(message: _38.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDenomsMetadataRequest): _38.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _38.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_38.QueryDenomsMetadataResponse>): _38.QueryDenomsMetadataResponse;
                fromAmino(object: _38.QueryDenomsMetadataResponseAmino): _38.QueryDenomsMetadataResponse;
                toAmino(message: _38.QueryDenomsMetadataResponse): _38.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _38.QueryDenomsMetadataResponseAminoMsg): _38.QueryDenomsMetadataResponse;
                toAminoMsg(message: _38.QueryDenomsMetadataResponse): _38.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDenomsMetadataResponseProtoMsg): _38.QueryDenomsMetadataResponse;
                toProto(message: _38.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDenomsMetadataResponse): _38.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _38.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_38.QueryDenomMetadataRequest>): _38.QueryDenomMetadataRequest;
                fromAmino(object: _38.QueryDenomMetadataRequestAmino): _38.QueryDenomMetadataRequest;
                toAmino(message: _38.QueryDenomMetadataRequest): _38.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _38.QueryDenomMetadataRequestAminoMsg): _38.QueryDenomMetadataRequest;
                toAminoMsg(message: _38.QueryDenomMetadataRequest): _38.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDenomMetadataRequestProtoMsg): _38.QueryDenomMetadataRequest;
                toProto(message: _38.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDenomMetadataRequest): _38.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _38.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_38.QueryDenomMetadataResponse>): _38.QueryDenomMetadataResponse;
                fromAmino(object: _38.QueryDenomMetadataResponseAmino): _38.QueryDenomMetadataResponse;
                toAmino(message: _38.QueryDenomMetadataResponse): _38.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _38.QueryDenomMetadataResponseAminoMsg): _38.QueryDenomMetadataResponse;
                toAminoMsg(message: _38.QueryDenomMetadataResponse): _38.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDenomMetadataResponseProtoMsg): _38.QueryDenomMetadataResponse;
                toProto(message: _38.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDenomMetadataResponse): _38.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _38.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_38.QueryDenomOwnersRequest>): _38.QueryDenomOwnersRequest;
                fromAmino(object: _38.QueryDenomOwnersRequestAmino): _38.QueryDenomOwnersRequest;
                toAmino(message: _38.QueryDenomOwnersRequest): _38.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _38.QueryDenomOwnersRequestAminoMsg): _38.QueryDenomOwnersRequest;
                toAminoMsg(message: _38.QueryDenomOwnersRequest): _38.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDenomOwnersRequestProtoMsg): _38.QueryDenomOwnersRequest;
                toProto(message: _38.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDenomOwnersRequest): _38.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _38.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.DenomOwner;
                fromPartial(object: Partial<_38.DenomOwner>): _38.DenomOwner;
                fromAmino(object: _38.DenomOwnerAmino): _38.DenomOwner;
                toAmino(message: _38.DenomOwner): _38.DenomOwnerAmino;
                fromAminoMsg(object: _38.DenomOwnerAminoMsg): _38.DenomOwner;
                toAminoMsg(message: _38.DenomOwner): _38.DenomOwnerAminoMsg;
                fromProtoMsg(message: _38.DenomOwnerProtoMsg): _38.DenomOwner;
                toProto(message: _38.DenomOwner): Uint8Array;
                toProtoMsg(message: _38.DenomOwner): _38.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _38.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_38.QueryDenomOwnersResponse>): _38.QueryDenomOwnersResponse;
                fromAmino(object: _38.QueryDenomOwnersResponseAmino): _38.QueryDenomOwnersResponse;
                toAmino(message: _38.QueryDenomOwnersResponse): _38.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _38.QueryDenomOwnersResponseAminoMsg): _38.QueryDenomOwnersResponse;
                toAminoMsg(message: _38.QueryDenomOwnersResponse): _38.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDenomOwnersResponseProtoMsg): _38.QueryDenomOwnersResponse;
                toProto(message: _38.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDenomOwnersResponse): _38.QueryDenomOwnersResponseProtoMsg;
            };
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
            Balance: {
                typeUrl: string;
                encode(message: _37.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.Balance;
                fromPartial(object: Partial<_37.Balance>): _37.Balance;
                fromAmino(object: _37.BalanceAmino): _37.Balance;
                toAmino(message: _37.Balance): _37.BalanceAmino;
                fromAminoMsg(object: _37.BalanceAminoMsg): _37.Balance;
                toAminoMsg(message: _37.Balance): _37.BalanceAminoMsg;
                fromProtoMsg(message: _37.BalanceProtoMsg): _37.Balance;
                toProto(message: _37.Balance): Uint8Array;
                toProtoMsg(message: _37.Balance): _37.BalanceProtoMsg;
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
            SendEnabled: {
                typeUrl: string;
                encode(message: _36.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.SendEnabled;
                fromPartial(object: Partial<_36.SendEnabled>): _36.SendEnabled;
                fromAmino(object: _36.SendEnabledAmino): _36.SendEnabled;
                toAmino(message: _36.SendEnabled): _36.SendEnabledAmino;
                fromAminoMsg(object: _36.SendEnabledAminoMsg): _36.SendEnabled;
                toAminoMsg(message: _36.SendEnabled): _36.SendEnabledAminoMsg;
                fromProtoMsg(message: _36.SendEnabledProtoMsg): _36.SendEnabled;
                toProto(message: _36.SendEnabled): Uint8Array;
                toProtoMsg(message: _36.SendEnabled): _36.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _36.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Input;
                fromPartial(object: Partial<_36.Input>): _36.Input;
                fromAmino(object: _36.InputAmino): _36.Input;
                toAmino(message: _36.Input): _36.InputAmino;
                fromAminoMsg(object: _36.InputAminoMsg): _36.Input;
                toAminoMsg(message: _36.Input): _36.InputAminoMsg;
                fromProtoMsg(message: _36.InputProtoMsg): _36.Input;
                toProto(message: _36.Input): Uint8Array;
                toProtoMsg(message: _36.Input): _36.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _36.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Output;
                fromPartial(object: Partial<_36.Output>): _36.Output;
                fromAmino(object: _36.OutputAmino): _36.Output;
                toAmino(message: _36.Output): _36.OutputAmino;
                fromAminoMsg(object: _36.OutputAminoMsg): _36.Output;
                toAminoMsg(message: _36.Output): _36.OutputAminoMsg;
                fromProtoMsg(message: _36.OutputProtoMsg): _36.Output;
                toProto(message: _36.Output): Uint8Array;
                toProtoMsg(message: _36.Output): _36.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _36.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Supply;
                fromPartial(object: Partial<_36.Supply>): _36.Supply;
                fromAmino(object: _36.SupplyAmino): _36.Supply;
                toAmino(message: _36.Supply): _36.SupplyAmino;
                fromAminoMsg(object: _36.SupplyAminoMsg): _36.Supply;
                toAminoMsg(message: _36.Supply): _36.SupplyAminoMsg;
                fromProtoMsg(message: _36.SupplyProtoMsg): _36.Supply;
                toProto(message: _36.Supply): Uint8Array;
                toProtoMsg(message: _36.Supply): _36.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _36.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.DenomUnit;
                fromPartial(object: Partial<_36.DenomUnit>): _36.DenomUnit;
                fromAmino(object: _36.DenomUnitAmino): _36.DenomUnit;
                toAmino(message: _36.DenomUnit): _36.DenomUnitAmino;
                fromAminoMsg(object: _36.DenomUnitAminoMsg): _36.DenomUnit;
                toAminoMsg(message: _36.DenomUnit): _36.DenomUnitAminoMsg;
                fromProtoMsg(message: _36.DenomUnitProtoMsg): _36.DenomUnit;
                toProto(message: _36.DenomUnit): Uint8Array;
                toProtoMsg(message: _36.DenomUnit): _36.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _36.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Metadata;
                fromPartial(object: Partial<_36.Metadata>): _36.Metadata;
                fromAmino(object: _36.MetadataAmino): _36.Metadata;
                toAmino(message: _36.Metadata): _36.MetadataAmino;
                fromAminoMsg(object: _36.MetadataAminoMsg): _36.Metadata;
                toAminoMsg(message: _36.Metadata): _36.MetadataAminoMsg;
                fromProtoMsg(message: _36.MetadataProtoMsg): _36.Metadata;
                toProto(message: _36.Metadata): Uint8Array;
                toProtoMsg(message: _36.Metadata): _36.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _35.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.SendAuthorization;
                fromPartial(object: Partial<_35.SendAuthorization>): _35.SendAuthorization;
                fromAmino(object: _35.SendAuthorizationAmino): _35.SendAuthorization;
                toAmino(message: _35.SendAuthorization): _35.SendAuthorizationAmino;
                fromAminoMsg(object: _35.SendAuthorizationAminoMsg): _35.SendAuthorization;
                toAminoMsg(message: _35.SendAuthorization): _35.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _35.SendAuthorizationProtoMsg): _35.SendAuthorization;
                toProto(message: _35.SendAuthorization): Uint8Array;
                toProtoMsg(message: _35.SendAuthorization): _35.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _40.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.TxResponse;
                    fromPartial(object: Partial<_40.TxResponse>): _40.TxResponse;
                    fromAmino(object: _40.TxResponseAmino): _40.TxResponse;
                    toAmino(message: _40.TxResponse): _40.TxResponseAmino;
                    fromAminoMsg(object: _40.TxResponseAminoMsg): _40.TxResponse;
                    toAminoMsg(message: _40.TxResponse): _40.TxResponseAminoMsg;
                    fromProtoMsg(message: _40.TxResponseProtoMsg): _40.TxResponse;
                    toProto(message: _40.TxResponse): Uint8Array;
                    toProtoMsg(message: _40.TxResponse): _40.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _40.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.ABCIMessageLog;
                    fromPartial(object: Partial<_40.ABCIMessageLog>): _40.ABCIMessageLog;
                    fromAmino(object: _40.ABCIMessageLogAmino): _40.ABCIMessageLog;
                    toAmino(message: _40.ABCIMessageLog): _40.ABCIMessageLogAmino;
                    fromAminoMsg(object: _40.ABCIMessageLogAminoMsg): _40.ABCIMessageLog;
                    toAminoMsg(message: _40.ABCIMessageLog): _40.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _40.ABCIMessageLogProtoMsg): _40.ABCIMessageLog;
                    toProto(message: _40.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _40.ABCIMessageLog): _40.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _40.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.StringEvent;
                    fromPartial(object: Partial<_40.StringEvent>): _40.StringEvent;
                    fromAmino(object: _40.StringEventAmino): _40.StringEvent;
                    toAmino(message: _40.StringEvent): _40.StringEventAmino;
                    fromAminoMsg(object: _40.StringEventAminoMsg): _40.StringEvent;
                    toAminoMsg(message: _40.StringEvent): _40.StringEventAminoMsg;
                    fromProtoMsg(message: _40.StringEventProtoMsg): _40.StringEvent;
                    toProto(message: _40.StringEvent): Uint8Array;
                    toProtoMsg(message: _40.StringEvent): _40.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _40.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.Attribute;
                    fromPartial(object: Partial<_40.Attribute>): _40.Attribute;
                    fromAmino(object: _40.AttributeAmino): _40.Attribute;
                    toAmino(message: _40.Attribute): _40.AttributeAmino;
                    fromAminoMsg(object: _40.AttributeAminoMsg): _40.Attribute;
                    toAminoMsg(message: _40.Attribute): _40.AttributeAminoMsg;
                    fromProtoMsg(message: _40.AttributeProtoMsg): _40.Attribute;
                    toProto(message: _40.Attribute): Uint8Array;
                    toProtoMsg(message: _40.Attribute): _40.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _40.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GasInfo;
                    fromPartial(object: Partial<_40.GasInfo>): _40.GasInfo;
                    fromAmino(object: _40.GasInfoAmino): _40.GasInfo;
                    toAmino(message: _40.GasInfo): _40.GasInfoAmino;
                    fromAminoMsg(object: _40.GasInfoAminoMsg): _40.GasInfo;
                    toAminoMsg(message: _40.GasInfo): _40.GasInfoAminoMsg;
                    fromProtoMsg(message: _40.GasInfoProtoMsg): _40.GasInfo;
                    toProto(message: _40.GasInfo): Uint8Array;
                    toProtoMsg(message: _40.GasInfo): _40.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _40.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.Result;
                    fromPartial(object: Partial<_40.Result>): _40.Result;
                    fromAmino(object: _40.ResultAmino): _40.Result;
                    toAmino(message: _40.Result): _40.ResultAmino;
                    fromAminoMsg(object: _40.ResultAminoMsg): _40.Result;
                    toAminoMsg(message: _40.Result): _40.ResultAminoMsg;
                    fromProtoMsg(message: _40.ResultProtoMsg): _40.Result;
                    toProto(message: _40.Result): Uint8Array;
                    toProtoMsg(message: _40.Result): _40.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _40.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.SimulationResponse;
                    fromPartial(object: Partial<_40.SimulationResponse>): _40.SimulationResponse;
                    fromAmino(object: _40.SimulationResponseAmino): _40.SimulationResponse;
                    toAmino(message: _40.SimulationResponse): _40.SimulationResponseAmino;
                    fromAminoMsg(object: _40.SimulationResponseAminoMsg): _40.SimulationResponse;
                    toAminoMsg(message: _40.SimulationResponse): _40.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _40.SimulationResponseProtoMsg): _40.SimulationResponse;
                    toProto(message: _40.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _40.SimulationResponse): _40.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _40.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.MsgData;
                    fromPartial(object: Partial<_40.MsgData>): _40.MsgData;
                    fromAmino(object: _40.MsgDataAmino): _40.MsgData;
                    toAmino(message: _40.MsgData): _40.MsgDataAmino;
                    fromAminoMsg(object: _40.MsgDataAminoMsg): _40.MsgData;
                    toAminoMsg(message: _40.MsgData): _40.MsgDataAminoMsg;
                    fromProtoMsg(message: _40.MsgDataProtoMsg): _40.MsgData;
                    toProto(message: _40.MsgData): Uint8Array;
                    toProtoMsg(message: _40.MsgData): _40.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _40.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.TxMsgData;
                    fromPartial(object: Partial<_40.TxMsgData>): _40.TxMsgData;
                    fromAmino(object: _40.TxMsgDataAmino): _40.TxMsgData;
                    toAmino(message: _40.TxMsgData): _40.TxMsgDataAmino;
                    fromAminoMsg(object: _40.TxMsgDataAminoMsg): _40.TxMsgData;
                    toAminoMsg(message: _40.TxMsgData): _40.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _40.TxMsgDataProtoMsg): _40.TxMsgData;
                    toProto(message: _40.TxMsgData): Uint8Array;
                    toProtoMsg(message: _40.TxMsgData): _40.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _40.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.SearchTxsResult;
                    fromPartial(object: Partial<_40.SearchTxsResult>): _40.SearchTxsResult;
                    fromAmino(object: _40.SearchTxsResultAmino): _40.SearchTxsResult;
                    toAmino(message: _40.SearchTxsResult): _40.SearchTxsResultAmino;
                    fromAminoMsg(object: _40.SearchTxsResultAminoMsg): _40.SearchTxsResult;
                    toAminoMsg(message: _40.SearchTxsResult): _40.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _40.SearchTxsResultProtoMsg): _40.SearchTxsResult;
                    toProto(message: _40.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _40.SearchTxsResult): _40.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _41.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.Pairs;
                    fromPartial(object: Partial<_41.Pairs>): _41.Pairs;
                    fromAmino(object: _41.PairsAmino): _41.Pairs;
                    toAmino(message: _41.Pairs): _41.PairsAmino;
                    fromAminoMsg(object: _41.PairsAminoMsg): _41.Pairs;
                    toAminoMsg(message: _41.Pairs): _41.PairsAminoMsg;
                    fromProtoMsg(message: _41.PairsProtoMsg): _41.Pairs;
                    toProto(message: _41.Pairs): Uint8Array;
                    toProtoMsg(message: _41.Pairs): _41.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _41.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.Pair;
                    fromPartial(object: Partial<_41.Pair>): _41.Pair;
                    fromAmino(object: _41.PairAmino): _41.Pair;
                    toAmino(message: _41.Pair): _41.PairAmino;
                    fromAminoMsg(object: _41.PairAminoMsg): _41.Pair;
                    toAminoMsg(message: _41.Pair): _41.PairAminoMsg;
                    fromProtoMsg(message: _41.PairProtoMsg): _41.Pair;
                    toProto(message: _41.Pair): Uint8Array;
                    toProtoMsg(message: _41.Pair): _41.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _213.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _42.ConfigRequest): Promise<_42.ConfigResponse>;
                };
                LCDQueryClient: typeof _194.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _42.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.ConfigRequest;
                    fromPartial(_: Partial<_42.ConfigRequest>): _42.ConfigRequest;
                    fromAmino(_: _42.ConfigRequestAmino): _42.ConfigRequest;
                    toAmino(_: _42.ConfigRequest): _42.ConfigRequestAmino;
                    fromAminoMsg(object: _42.ConfigRequestAminoMsg): _42.ConfigRequest;
                    toAminoMsg(message: _42.ConfigRequest): _42.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _42.ConfigRequestProtoMsg): _42.ConfigRequest;
                    toProto(message: _42.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _42.ConfigRequest): _42.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _42.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ConfigResponse;
                    fromPartial(object: Partial<_42.ConfigResponse>): _42.ConfigResponse;
                    fromAmino(object: _42.ConfigResponseAmino): _42.ConfigResponse;
                    toAmino(message: _42.ConfigResponse): _42.ConfigResponseAmino;
                    fromAminoMsg(object: _42.ConfigResponseAminoMsg): _42.ConfigResponse;
                    toAminoMsg(message: _42.ConfigResponse): _42.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _42.ConfigResponseProtoMsg): _42.ConfigResponse;
                    toProto(message: _42.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _42.ConfigResponse): _42.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _43.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.PageRequest;
                    fromPartial(object: Partial<_43.PageRequest>): _43.PageRequest;
                    fromAmino(object: _43.PageRequestAmino): _43.PageRequest;
                    toAmino(message: _43.PageRequest): _43.PageRequestAmino;
                    fromAminoMsg(object: _43.PageRequestAminoMsg): _43.PageRequest;
                    toAminoMsg(message: _43.PageRequest): _43.PageRequestAminoMsg;
                    fromProtoMsg(message: _43.PageRequestProtoMsg): _43.PageRequest;
                    toProto(message: _43.PageRequest): Uint8Array;
                    toProtoMsg(message: _43.PageRequest): _43.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _43.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.PageResponse;
                    fromPartial(object: Partial<_43.PageResponse>): _43.PageResponse;
                    fromAmino(object: _43.PageResponseAmino): _43.PageResponse;
                    toAmino(message: _43.PageResponse): _43.PageResponseAmino;
                    fromAminoMsg(object: _43.PageResponseAminoMsg): _43.PageResponse;
                    toAminoMsg(message: _43.PageResponse): _43.PageResponseAminoMsg;
                    fromProtoMsg(message: _43.PageResponseProtoMsg): _43.PageResponse;
                    toProto(message: _43.PageResponse): Uint8Array;
                    toProtoMsg(message: _43.PageResponse): _43.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _44.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _44.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_44.ListAllInterfacesRequest>): _44.ListAllInterfacesRequest;
                    fromAmino(_: _44.ListAllInterfacesRequestAmino): _44.ListAllInterfacesRequest;
                    toAmino(_: _44.ListAllInterfacesRequest): _44.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _44.ListAllInterfacesRequestAminoMsg): _44.ListAllInterfacesRequest;
                    toAminoMsg(message: _44.ListAllInterfacesRequest): _44.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _44.ListAllInterfacesRequestProtoMsg): _44.ListAllInterfacesRequest;
                    toProto(message: _44.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _44.ListAllInterfacesRequest): _44.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _44.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_44.ListAllInterfacesResponse>): _44.ListAllInterfacesResponse;
                    fromAmino(object: _44.ListAllInterfacesResponseAmino): _44.ListAllInterfacesResponse;
                    toAmino(message: _44.ListAllInterfacesResponse): _44.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _44.ListAllInterfacesResponseAminoMsg): _44.ListAllInterfacesResponse;
                    toAminoMsg(message: _44.ListAllInterfacesResponse): _44.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _44.ListAllInterfacesResponseProtoMsg): _44.ListAllInterfacesResponse;
                    toProto(message: _44.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _44.ListAllInterfacesResponse): _44.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _44.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.ListImplementationsRequest;
                    fromPartial(object: Partial<_44.ListImplementationsRequest>): _44.ListImplementationsRequest;
                    fromAmino(object: _44.ListImplementationsRequestAmino): _44.ListImplementationsRequest;
                    toAmino(message: _44.ListImplementationsRequest): _44.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _44.ListImplementationsRequestAminoMsg): _44.ListImplementationsRequest;
                    toAminoMsg(message: _44.ListImplementationsRequest): _44.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _44.ListImplementationsRequestProtoMsg): _44.ListImplementationsRequest;
                    toProto(message: _44.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _44.ListImplementationsRequest): _44.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _44.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.ListImplementationsResponse;
                    fromPartial(object: Partial<_44.ListImplementationsResponse>): _44.ListImplementationsResponse;
                    fromAmino(object: _44.ListImplementationsResponseAmino): _44.ListImplementationsResponse;
                    toAmino(message: _44.ListImplementationsResponse): _44.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _44.ListImplementationsResponseAminoMsg): _44.ListImplementationsResponse;
                    toAminoMsg(message: _44.ListImplementationsResponse): _44.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _44.ListImplementationsResponseProtoMsg): _44.ListImplementationsResponse;
                    toProto(message: _44.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _44.ListImplementationsResponse): _44.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _45.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.AppDescriptor;
                    fromPartial(object: Partial<_45.AppDescriptor>): _45.AppDescriptor;
                    fromAmino(object: _45.AppDescriptorAmino): _45.AppDescriptor;
                    toAmino(message: _45.AppDescriptor): _45.AppDescriptorAmino;
                    fromAminoMsg(object: _45.AppDescriptorAminoMsg): _45.AppDescriptor;
                    toAminoMsg(message: _45.AppDescriptor): _45.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _45.AppDescriptorProtoMsg): _45.AppDescriptor;
                    toProto(message: _45.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _45.AppDescriptor): _45.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _45.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.TxDescriptor;
                    fromPartial(object: Partial<_45.TxDescriptor>): _45.TxDescriptor;
                    fromAmino(object: _45.TxDescriptorAmino): _45.TxDescriptor;
                    toAmino(message: _45.TxDescriptor): _45.TxDescriptorAmino;
                    fromAminoMsg(object: _45.TxDescriptorAminoMsg): _45.TxDescriptor;
                    toAminoMsg(message: _45.TxDescriptor): _45.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _45.TxDescriptorProtoMsg): _45.TxDescriptor;
                    toProto(message: _45.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _45.TxDescriptor): _45.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _45.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.AuthnDescriptor;
                    fromPartial(object: Partial<_45.AuthnDescriptor>): _45.AuthnDescriptor;
                    fromAmino(object: _45.AuthnDescriptorAmino): _45.AuthnDescriptor;
                    toAmino(message: _45.AuthnDescriptor): _45.AuthnDescriptorAmino;
                    fromAminoMsg(object: _45.AuthnDescriptorAminoMsg): _45.AuthnDescriptor;
                    toAminoMsg(message: _45.AuthnDescriptor): _45.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _45.AuthnDescriptorProtoMsg): _45.AuthnDescriptor;
                    toProto(message: _45.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _45.AuthnDescriptor): _45.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _45.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.SigningModeDescriptor;
                    fromPartial(object: Partial<_45.SigningModeDescriptor>): _45.SigningModeDescriptor;
                    fromAmino(object: _45.SigningModeDescriptorAmino): _45.SigningModeDescriptor;
                    toAmino(message: _45.SigningModeDescriptor): _45.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _45.SigningModeDescriptorAminoMsg): _45.SigningModeDescriptor;
                    toAminoMsg(message: _45.SigningModeDescriptor): _45.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _45.SigningModeDescriptorProtoMsg): _45.SigningModeDescriptor;
                    toProto(message: _45.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _45.SigningModeDescriptor): _45.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _45.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.ChainDescriptor;
                    fromPartial(object: Partial<_45.ChainDescriptor>): _45.ChainDescriptor;
                    fromAmino(object: _45.ChainDescriptorAmino): _45.ChainDescriptor;
                    toAmino(message: _45.ChainDescriptor): _45.ChainDescriptorAmino;
                    fromAminoMsg(object: _45.ChainDescriptorAminoMsg): _45.ChainDescriptor;
                    toAminoMsg(message: _45.ChainDescriptor): _45.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _45.ChainDescriptorProtoMsg): _45.ChainDescriptor;
                    toProto(message: _45.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _45.ChainDescriptor): _45.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _45.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.CodecDescriptor;
                    fromPartial(object: Partial<_45.CodecDescriptor>): _45.CodecDescriptor;
                    fromAmino(object: _45.CodecDescriptorAmino): _45.CodecDescriptor;
                    toAmino(message: _45.CodecDescriptor): _45.CodecDescriptorAmino;
                    fromAminoMsg(object: _45.CodecDescriptorAminoMsg): _45.CodecDescriptor;
                    toAminoMsg(message: _45.CodecDescriptor): _45.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _45.CodecDescriptorProtoMsg): _45.CodecDescriptor;
                    toProto(message: _45.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _45.CodecDescriptor): _45.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _45.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.InterfaceDescriptor;
                    fromPartial(object: Partial<_45.InterfaceDescriptor>): _45.InterfaceDescriptor;
                    fromAmino(object: _45.InterfaceDescriptorAmino): _45.InterfaceDescriptor;
                    toAmino(message: _45.InterfaceDescriptor): _45.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _45.InterfaceDescriptorAminoMsg): _45.InterfaceDescriptor;
                    toAminoMsg(message: _45.InterfaceDescriptor): _45.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _45.InterfaceDescriptorProtoMsg): _45.InterfaceDescriptor;
                    toProto(message: _45.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _45.InterfaceDescriptor): _45.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _45.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_45.InterfaceImplementerDescriptor>): _45.InterfaceImplementerDescriptor;
                    fromAmino(object: _45.InterfaceImplementerDescriptorAmino): _45.InterfaceImplementerDescriptor;
                    toAmino(message: _45.InterfaceImplementerDescriptor): _45.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _45.InterfaceImplementerDescriptorAminoMsg): _45.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _45.InterfaceImplementerDescriptor): _45.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _45.InterfaceImplementerDescriptorProtoMsg): _45.InterfaceImplementerDescriptor;
                    toProto(message: _45.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _45.InterfaceImplementerDescriptor): _45.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _45.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_45.InterfaceAcceptingMessageDescriptor>): _45.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _45.InterfaceAcceptingMessageDescriptorAmino): _45.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _45.InterfaceAcceptingMessageDescriptor): _45.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _45.InterfaceAcceptingMessageDescriptorAminoMsg): _45.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _45.InterfaceAcceptingMessageDescriptor): _45.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _45.InterfaceAcceptingMessageDescriptorProtoMsg): _45.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _45.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _45.InterfaceAcceptingMessageDescriptor): _45.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _45.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.ConfigurationDescriptor;
                    fromPartial(object: Partial<_45.ConfigurationDescriptor>): _45.ConfigurationDescriptor;
                    fromAmino(object: _45.ConfigurationDescriptorAmino): _45.ConfigurationDescriptor;
                    toAmino(message: _45.ConfigurationDescriptor): _45.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _45.ConfigurationDescriptorAminoMsg): _45.ConfigurationDescriptor;
                    toAminoMsg(message: _45.ConfigurationDescriptor): _45.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _45.ConfigurationDescriptorProtoMsg): _45.ConfigurationDescriptor;
                    toProto(message: _45.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _45.ConfigurationDescriptor): _45.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _45.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.MsgDescriptor;
                    fromPartial(object: Partial<_45.MsgDescriptor>): _45.MsgDescriptor;
                    fromAmino(object: _45.MsgDescriptorAmino): _45.MsgDescriptor;
                    toAmino(message: _45.MsgDescriptor): _45.MsgDescriptorAmino;
                    fromAminoMsg(object: _45.MsgDescriptorAminoMsg): _45.MsgDescriptor;
                    toAminoMsg(message: _45.MsgDescriptor): _45.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _45.MsgDescriptorProtoMsg): _45.MsgDescriptor;
                    toProto(message: _45.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _45.MsgDescriptor): _45.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _45.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _45.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_45.GetAuthnDescriptorRequest>): _45.GetAuthnDescriptorRequest;
                    fromAmino(_: _45.GetAuthnDescriptorRequestAmino): _45.GetAuthnDescriptorRequest;
                    toAmino(_: _45.GetAuthnDescriptorRequest): _45.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _45.GetAuthnDescriptorRequestAminoMsg): _45.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _45.GetAuthnDescriptorRequest): _45.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _45.GetAuthnDescriptorRequestProtoMsg): _45.GetAuthnDescriptorRequest;
                    toProto(message: _45.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _45.GetAuthnDescriptorRequest): _45.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _45.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_45.GetAuthnDescriptorResponse>): _45.GetAuthnDescriptorResponse;
                    fromAmino(object: _45.GetAuthnDescriptorResponseAmino): _45.GetAuthnDescriptorResponse;
                    toAmino(message: _45.GetAuthnDescriptorResponse): _45.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _45.GetAuthnDescriptorResponseAminoMsg): _45.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _45.GetAuthnDescriptorResponse): _45.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _45.GetAuthnDescriptorResponseProtoMsg): _45.GetAuthnDescriptorResponse;
                    toProto(message: _45.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _45.GetAuthnDescriptorResponse): _45.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _45.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _45.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_45.GetChainDescriptorRequest>): _45.GetChainDescriptorRequest;
                    fromAmino(_: _45.GetChainDescriptorRequestAmino): _45.GetChainDescriptorRequest;
                    toAmino(_: _45.GetChainDescriptorRequest): _45.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _45.GetChainDescriptorRequestAminoMsg): _45.GetChainDescriptorRequest;
                    toAminoMsg(message: _45.GetChainDescriptorRequest): _45.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _45.GetChainDescriptorRequestProtoMsg): _45.GetChainDescriptorRequest;
                    toProto(message: _45.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _45.GetChainDescriptorRequest): _45.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _45.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_45.GetChainDescriptorResponse>): _45.GetChainDescriptorResponse;
                    fromAmino(object: _45.GetChainDescriptorResponseAmino): _45.GetChainDescriptorResponse;
                    toAmino(message: _45.GetChainDescriptorResponse): _45.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _45.GetChainDescriptorResponseAminoMsg): _45.GetChainDescriptorResponse;
                    toAminoMsg(message: _45.GetChainDescriptorResponse): _45.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _45.GetChainDescriptorResponseProtoMsg): _45.GetChainDescriptorResponse;
                    toProto(message: _45.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _45.GetChainDescriptorResponse): _45.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _45.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _45.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_45.GetCodecDescriptorRequest>): _45.GetCodecDescriptorRequest;
                    fromAmino(_: _45.GetCodecDescriptorRequestAmino): _45.GetCodecDescriptorRequest;
                    toAmino(_: _45.GetCodecDescriptorRequest): _45.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _45.GetCodecDescriptorRequestAminoMsg): _45.GetCodecDescriptorRequest;
                    toAminoMsg(message: _45.GetCodecDescriptorRequest): _45.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _45.GetCodecDescriptorRequestProtoMsg): _45.GetCodecDescriptorRequest;
                    toProto(message: _45.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _45.GetCodecDescriptorRequest): _45.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _45.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_45.GetCodecDescriptorResponse>): _45.GetCodecDescriptorResponse;
                    fromAmino(object: _45.GetCodecDescriptorResponseAmino): _45.GetCodecDescriptorResponse;
                    toAmino(message: _45.GetCodecDescriptorResponse): _45.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _45.GetCodecDescriptorResponseAminoMsg): _45.GetCodecDescriptorResponse;
                    toAminoMsg(message: _45.GetCodecDescriptorResponse): _45.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _45.GetCodecDescriptorResponseProtoMsg): _45.GetCodecDescriptorResponse;
                    toProto(message: _45.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _45.GetCodecDescriptorResponse): _45.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _45.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _45.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_45.GetConfigurationDescriptorRequest>): _45.GetConfigurationDescriptorRequest;
                    fromAmino(_: _45.GetConfigurationDescriptorRequestAmino): _45.GetConfigurationDescriptorRequest;
                    toAmino(_: _45.GetConfigurationDescriptorRequest): _45.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _45.GetConfigurationDescriptorRequestAminoMsg): _45.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _45.GetConfigurationDescriptorRequest): _45.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _45.GetConfigurationDescriptorRequestProtoMsg): _45.GetConfigurationDescriptorRequest;
                    toProto(message: _45.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _45.GetConfigurationDescriptorRequest): _45.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _45.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_45.GetConfigurationDescriptorResponse>): _45.GetConfigurationDescriptorResponse;
                    fromAmino(object: _45.GetConfigurationDescriptorResponseAmino): _45.GetConfigurationDescriptorResponse;
                    toAmino(message: _45.GetConfigurationDescriptorResponse): _45.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _45.GetConfigurationDescriptorResponseAminoMsg): _45.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _45.GetConfigurationDescriptorResponse): _45.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _45.GetConfigurationDescriptorResponseProtoMsg): _45.GetConfigurationDescriptorResponse;
                    toProto(message: _45.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _45.GetConfigurationDescriptorResponse): _45.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _45.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _45.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_45.GetQueryServicesDescriptorRequest>): _45.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _45.GetQueryServicesDescriptorRequestAmino): _45.GetQueryServicesDescriptorRequest;
                    toAmino(_: _45.GetQueryServicesDescriptorRequest): _45.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _45.GetQueryServicesDescriptorRequestAminoMsg): _45.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _45.GetQueryServicesDescriptorRequest): _45.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _45.GetQueryServicesDescriptorRequestProtoMsg): _45.GetQueryServicesDescriptorRequest;
                    toProto(message: _45.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _45.GetQueryServicesDescriptorRequest): _45.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _45.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_45.GetQueryServicesDescriptorResponse>): _45.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _45.GetQueryServicesDescriptorResponseAmino): _45.GetQueryServicesDescriptorResponse;
                    toAmino(message: _45.GetQueryServicesDescriptorResponse): _45.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _45.GetQueryServicesDescriptorResponseAminoMsg): _45.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _45.GetQueryServicesDescriptorResponse): _45.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _45.GetQueryServicesDescriptorResponseProtoMsg): _45.GetQueryServicesDescriptorResponse;
                    toProto(message: _45.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _45.GetQueryServicesDescriptorResponse): _45.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _45.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _45.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_45.GetTxDescriptorRequest>): _45.GetTxDescriptorRequest;
                    fromAmino(_: _45.GetTxDescriptorRequestAmino): _45.GetTxDescriptorRequest;
                    toAmino(_: _45.GetTxDescriptorRequest): _45.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _45.GetTxDescriptorRequestAminoMsg): _45.GetTxDescriptorRequest;
                    toAminoMsg(message: _45.GetTxDescriptorRequest): _45.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _45.GetTxDescriptorRequestProtoMsg): _45.GetTxDescriptorRequest;
                    toProto(message: _45.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _45.GetTxDescriptorRequest): _45.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _45.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_45.GetTxDescriptorResponse>): _45.GetTxDescriptorResponse;
                    fromAmino(object: _45.GetTxDescriptorResponseAmino): _45.GetTxDescriptorResponse;
                    toAmino(message: _45.GetTxDescriptorResponse): _45.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _45.GetTxDescriptorResponseAminoMsg): _45.GetTxDescriptorResponse;
                    toAminoMsg(message: _45.GetTxDescriptorResponse): _45.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _45.GetTxDescriptorResponseProtoMsg): _45.GetTxDescriptorResponse;
                    toProto(message: _45.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _45.GetTxDescriptorResponse): _45.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _45.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.QueryServicesDescriptor;
                    fromPartial(object: Partial<_45.QueryServicesDescriptor>): _45.QueryServicesDescriptor;
                    fromAmino(object: _45.QueryServicesDescriptorAmino): _45.QueryServicesDescriptor;
                    toAmino(message: _45.QueryServicesDescriptor): _45.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _45.QueryServicesDescriptorAminoMsg): _45.QueryServicesDescriptor;
                    toAminoMsg(message: _45.QueryServicesDescriptor): _45.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _45.QueryServicesDescriptorProtoMsg): _45.QueryServicesDescriptor;
                    toProto(message: _45.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _45.QueryServicesDescriptor): _45.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _45.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.QueryServiceDescriptor;
                    fromPartial(object: Partial<_45.QueryServiceDescriptor>): _45.QueryServiceDescriptor;
                    fromAmino(object: _45.QueryServiceDescriptorAmino): _45.QueryServiceDescriptor;
                    toAmino(message: _45.QueryServiceDescriptor): _45.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _45.QueryServiceDescriptorAminoMsg): _45.QueryServiceDescriptor;
                    toAminoMsg(message: _45.QueryServiceDescriptor): _45.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _45.QueryServiceDescriptorProtoMsg): _45.QueryServiceDescriptor;
                    toProto(message: _45.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _45.QueryServiceDescriptor): _45.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _45.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.QueryMethodDescriptor;
                    fromPartial(object: Partial<_45.QueryMethodDescriptor>): _45.QueryMethodDescriptor;
                    fromAmino(object: _45.QueryMethodDescriptorAmino): _45.QueryMethodDescriptor;
                    toAmino(message: _45.QueryMethodDescriptor): _45.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _45.QueryMethodDescriptorAminoMsg): _45.QueryMethodDescriptor;
                    toAminoMsg(message: _45.QueryMethodDescriptor): _45.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _45.QueryMethodDescriptorProtoMsg): _45.QueryMethodDescriptor;
                    toProto(message: _45.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _45.QueryMethodDescriptor): _45.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _46.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.Snapshot;
                    fromPartial(object: Partial<_46.Snapshot>): _46.Snapshot;
                    fromAmino(object: _46.SnapshotAmino): _46.Snapshot;
                    toAmino(message: _46.Snapshot): _46.SnapshotAmino;
                    fromAminoMsg(object: _46.SnapshotAminoMsg): _46.Snapshot;
                    toAminoMsg(message: _46.Snapshot): _46.SnapshotAminoMsg;
                    fromProtoMsg(message: _46.SnapshotProtoMsg): _46.Snapshot;
                    toProto(message: _46.Snapshot): Uint8Array;
                    toProtoMsg(message: _46.Snapshot): _46.SnapshotProtoMsg;
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
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _46.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.SnapshotItem;
                    fromPartial(object: Partial<_46.SnapshotItem>): _46.SnapshotItem;
                    fromAmino(object: _46.SnapshotItemAmino): _46.SnapshotItem;
                    toAmino(message: _46.SnapshotItem): _46.SnapshotItemAmino;
                    fromAminoMsg(object: _46.SnapshotItemAminoMsg): _46.SnapshotItem;
                    toAminoMsg(message: _46.SnapshotItem): _46.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _46.SnapshotItemProtoMsg): _46.SnapshotItem;
                    toProto(message: _46.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _46.SnapshotItem): _46.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _46.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.SnapshotStoreItem;
                    fromPartial(object: Partial<_46.SnapshotStoreItem>): _46.SnapshotStoreItem;
                    fromAmino(object: _46.SnapshotStoreItemAmino): _46.SnapshotStoreItem;
                    toAmino(message: _46.SnapshotStoreItem): _46.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _46.SnapshotStoreItemAminoMsg): _46.SnapshotStoreItem;
                    toAminoMsg(message: _46.SnapshotStoreItem): _46.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _46.SnapshotStoreItemProtoMsg): _46.SnapshotStoreItem;
                    toProto(message: _46.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _46.SnapshotStoreItem): _46.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _46.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.SnapshotIAVLItem;
                    fromPartial(object: Partial<_46.SnapshotIAVLItem>): _46.SnapshotIAVLItem;
                    fromAmino(object: _46.SnapshotIAVLItemAmino): _46.SnapshotIAVLItem;
                    toAmino(message: _46.SnapshotIAVLItem): _46.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _46.SnapshotIAVLItemAminoMsg): _46.SnapshotIAVLItem;
                    toAminoMsg(message: _46.SnapshotIAVLItem): _46.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _46.SnapshotIAVLItemProtoMsg): _46.SnapshotIAVLItem;
                    toProto(message: _46.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _46.SnapshotIAVLItem): _46.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _46.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_46.SnapshotExtensionMeta>): _46.SnapshotExtensionMeta;
                    fromAmino(object: _46.SnapshotExtensionMetaAmino): _46.SnapshotExtensionMeta;
                    toAmino(message: _46.SnapshotExtensionMeta): _46.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _46.SnapshotExtensionMetaAminoMsg): _46.SnapshotExtensionMeta;
                    toAminoMsg(message: _46.SnapshotExtensionMeta): _46.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _46.SnapshotExtensionMetaProtoMsg): _46.SnapshotExtensionMeta;
                    toProto(message: _46.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _46.SnapshotExtensionMeta): _46.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _46.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_46.SnapshotExtensionPayload>): _46.SnapshotExtensionPayload;
                    fromAmino(object: _46.SnapshotExtensionPayloadAmino): _46.SnapshotExtensionPayload;
                    toAmino(message: _46.SnapshotExtensionPayload): _46.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _46.SnapshotExtensionPayloadAminoMsg): _46.SnapshotExtensionPayload;
                    toAminoMsg(message: _46.SnapshotExtensionPayload): _46.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _46.SnapshotExtensionPayloadProtoMsg): _46.SnapshotExtensionPayload;
                    toProto(message: _46.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _46.SnapshotExtensionPayload): _46.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _46.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.SnapshotKVItem;
                    fromPartial(object: Partial<_46.SnapshotKVItem>): _46.SnapshotKVItem;
                    fromAmino(object: _46.SnapshotKVItemAmino): _46.SnapshotKVItem;
                    toAmino(message: _46.SnapshotKVItem): _46.SnapshotKVItemAmino;
                    fromAminoMsg(object: _46.SnapshotKVItemAminoMsg): _46.SnapshotKVItem;
                    toAminoMsg(message: _46.SnapshotKVItem): _46.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _46.SnapshotKVItemProtoMsg): _46.SnapshotKVItem;
                    toProto(message: _46.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _46.SnapshotKVItem): _46.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _46.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.SnapshotSchema;
                    fromPartial(object: Partial<_46.SnapshotSchema>): _46.SnapshotSchema;
                    fromAmino(object: _46.SnapshotSchemaAmino): _46.SnapshotSchema;
                    toAmino(message: _46.SnapshotSchema): _46.SnapshotSchemaAmino;
                    fromAminoMsg(object: _46.SnapshotSchemaAminoMsg): _46.SnapshotSchema;
                    toAminoMsg(message: _46.SnapshotSchema): _46.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _46.SnapshotSchemaProtoMsg): _46.SnapshotSchema;
                    toProto(message: _46.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _46.SnapshotSchema): _46.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _48.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.StoreKVPair;
                    fromPartial(object: Partial<_48.StoreKVPair>): _48.StoreKVPair;
                    fromAmino(object: _48.StoreKVPairAmino): _48.StoreKVPair;
                    toAmino(message: _48.StoreKVPair): _48.StoreKVPairAmino;
                    fromAminoMsg(object: _48.StoreKVPairAminoMsg): _48.StoreKVPair;
                    toAminoMsg(message: _48.StoreKVPair): _48.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _48.StoreKVPairProtoMsg): _48.StoreKVPair;
                    toProto(message: _48.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _48.StoreKVPair): _48.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _48.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.BlockMetadata;
                    fromPartial(object: Partial<_48.BlockMetadata>): _48.BlockMetadata;
                    fromAmino(object: _48.BlockMetadataAmino): _48.BlockMetadata;
                    toAmino(message: _48.BlockMetadata): _48.BlockMetadataAmino;
                    fromAminoMsg(object: _48.BlockMetadataAminoMsg): _48.BlockMetadata;
                    toAminoMsg(message: _48.BlockMetadata): _48.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _48.BlockMetadataProtoMsg): _48.BlockMetadata;
                    toProto(message: _48.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _48.BlockMetadata): _48.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _48.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_48.BlockMetadata_DeliverTx>): _48.BlockMetadata_DeliverTx;
                    fromAmino(object: _48.BlockMetadata_DeliverTxAmino): _48.BlockMetadata_DeliverTx;
                    toAmino(message: _48.BlockMetadata_DeliverTx): _48.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _48.BlockMetadata_DeliverTxAminoMsg): _48.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _48.BlockMetadata_DeliverTx): _48.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _48.BlockMetadata_DeliverTxProtoMsg): _48.BlockMetadata_DeliverTx;
                    toProto(message: _48.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _48.BlockMetadata_DeliverTx): _48.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _47.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.CommitInfo;
                    fromPartial(object: Partial<_47.CommitInfo>): _47.CommitInfo;
                    fromAmino(object: _47.CommitInfoAmino): _47.CommitInfo;
                    toAmino(message: _47.CommitInfo): _47.CommitInfoAmino;
                    fromAminoMsg(object: _47.CommitInfoAminoMsg): _47.CommitInfo;
                    toAminoMsg(message: _47.CommitInfo): _47.CommitInfoAminoMsg;
                    fromProtoMsg(message: _47.CommitInfoProtoMsg): _47.CommitInfo;
                    toProto(message: _47.CommitInfo): Uint8Array;
                    toProtoMsg(message: _47.CommitInfo): _47.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _47.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.StoreInfo;
                    fromPartial(object: Partial<_47.StoreInfo>): _47.StoreInfo;
                    fromAmino(object: _47.StoreInfoAmino): _47.StoreInfo;
                    toAmino(message: _47.StoreInfo): _47.StoreInfoAmino;
                    fromAminoMsg(object: _47.StoreInfoAminoMsg): _47.StoreInfo;
                    toAminoMsg(message: _47.StoreInfo): _47.StoreInfoAminoMsg;
                    fromProtoMsg(message: _47.StoreInfoProtoMsg): _47.StoreInfo;
                    toProto(message: _47.StoreInfo): Uint8Array;
                    toProtoMsg(message: _47.StoreInfo): _47.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _47.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.CommitID;
                    fromPartial(object: Partial<_47.CommitID>): _47.CommitID;
                    fromAmino(object: _47.CommitIDAmino): _47.CommitID;
                    toAmino(message: _47.CommitID): _47.CommitIDAmino;
                    fromAminoMsg(object: _47.CommitIDAminoMsg): _47.CommitID;
                    toAminoMsg(message: _47.CommitID): _47.CommitIDAminoMsg;
                    fromProtoMsg(message: _47.CommitIDProtoMsg): _47.CommitID;
                    toProto(message: _47.CommitID): Uint8Array;
                    toProtoMsg(message: _47.CommitID): _47.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _214.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _49.GetNodeInfoRequest): Promise<_49.GetNodeInfoResponse>;
                    getSyncing(request?: _49.GetSyncingRequest): Promise<_49.GetSyncingResponse>;
                    getLatestBlock(request?: _49.GetLatestBlockRequest): Promise<_49.GetLatestBlockResponse>;
                    getBlockByHeight(request: _49.GetBlockByHeightRequest): Promise<_49.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _49.GetLatestValidatorSetRequest): Promise<_49.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _49.GetValidatorSetByHeightRequest): Promise<_49.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _49.ABCIQueryRequest): Promise<_49.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _195.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _50.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.Block;
                    fromPartial(object: Partial<_50.Block>): _50.Block;
                    fromAmino(object: _50.BlockAmino): _50.Block;
                    toAmino(message: _50.Block): _50.BlockAmino;
                    fromAminoMsg(object: _50.BlockAminoMsg): _50.Block;
                    toAminoMsg(message: _50.Block): _50.BlockAminoMsg;
                    fromProtoMsg(message: _50.BlockProtoMsg): _50.Block;
                    toProto(message: _50.Block): Uint8Array;
                    toProtoMsg(message: _50.Block): _50.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _50.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.Header;
                    fromPartial(object: Partial<_50.Header>): _50.Header;
                    fromAmino(object: _50.HeaderAmino): _50.Header;
                    toAmino(message: _50.Header): _50.HeaderAmino;
                    fromAminoMsg(object: _50.HeaderAminoMsg): _50.Header;
                    toAminoMsg(message: _50.Header): _50.HeaderAminoMsg;
                    fromProtoMsg(message: _50.HeaderProtoMsg): _50.Header;
                    toProto(message: _50.Header): Uint8Array;
                    toProtoMsg(message: _50.Header): _50.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _49.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_49.GetValidatorSetByHeightRequest>): _49.GetValidatorSetByHeightRequest;
                    fromAmino(object: _49.GetValidatorSetByHeightRequestAmino): _49.GetValidatorSetByHeightRequest;
                    toAmino(message: _49.GetValidatorSetByHeightRequest): _49.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _49.GetValidatorSetByHeightRequestAminoMsg): _49.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _49.GetValidatorSetByHeightRequest): _49.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _49.GetValidatorSetByHeightRequestProtoMsg): _49.GetValidatorSetByHeightRequest;
                    toProto(message: _49.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _49.GetValidatorSetByHeightRequest): _49.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _49.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_49.GetValidatorSetByHeightResponse>): _49.GetValidatorSetByHeightResponse;
                    fromAmino(object: _49.GetValidatorSetByHeightResponseAmino): _49.GetValidatorSetByHeightResponse;
                    toAmino(message: _49.GetValidatorSetByHeightResponse): _49.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _49.GetValidatorSetByHeightResponseAminoMsg): _49.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _49.GetValidatorSetByHeightResponse): _49.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _49.GetValidatorSetByHeightResponseProtoMsg): _49.GetValidatorSetByHeightResponse;
                    toProto(message: _49.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _49.GetValidatorSetByHeightResponse): _49.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _49.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_49.GetLatestValidatorSetRequest>): _49.GetLatestValidatorSetRequest;
                    fromAmino(object: _49.GetLatestValidatorSetRequestAmino): _49.GetLatestValidatorSetRequest;
                    toAmino(message: _49.GetLatestValidatorSetRequest): _49.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _49.GetLatestValidatorSetRequestAminoMsg): _49.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _49.GetLatestValidatorSetRequest): _49.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _49.GetLatestValidatorSetRequestProtoMsg): _49.GetLatestValidatorSetRequest;
                    toProto(message: _49.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _49.GetLatestValidatorSetRequest): _49.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _49.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_49.GetLatestValidatorSetResponse>): _49.GetLatestValidatorSetResponse;
                    fromAmino(object: _49.GetLatestValidatorSetResponseAmino): _49.GetLatestValidatorSetResponse;
                    toAmino(message: _49.GetLatestValidatorSetResponse): _49.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _49.GetLatestValidatorSetResponseAminoMsg): _49.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _49.GetLatestValidatorSetResponse): _49.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _49.GetLatestValidatorSetResponseProtoMsg): _49.GetLatestValidatorSetResponse;
                    toProto(message: _49.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _49.GetLatestValidatorSetResponse): _49.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _49.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.Validator;
                    fromPartial(object: Partial<_49.Validator>): _49.Validator;
                    fromAmino(object: _49.ValidatorAmino): _49.Validator;
                    toAmino(message: _49.Validator): _49.ValidatorAmino;
                    fromAminoMsg(object: _49.ValidatorAminoMsg): _49.Validator;
                    toAminoMsg(message: _49.Validator): _49.ValidatorAminoMsg;
                    fromProtoMsg(message: _49.ValidatorProtoMsg): _49.Validator;
                    toProto(message: _49.Validator): Uint8Array;
                    toProtoMsg(message: _49.Validator): _49.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _49.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_49.GetBlockByHeightRequest>): _49.GetBlockByHeightRequest;
                    fromAmino(object: _49.GetBlockByHeightRequestAmino): _49.GetBlockByHeightRequest;
                    toAmino(message: _49.GetBlockByHeightRequest): _49.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _49.GetBlockByHeightRequestAminoMsg): _49.GetBlockByHeightRequest;
                    toAminoMsg(message: _49.GetBlockByHeightRequest): _49.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _49.GetBlockByHeightRequestProtoMsg): _49.GetBlockByHeightRequest;
                    toProto(message: _49.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _49.GetBlockByHeightRequest): _49.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _49.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_49.GetBlockByHeightResponse>): _49.GetBlockByHeightResponse;
                    fromAmino(object: _49.GetBlockByHeightResponseAmino): _49.GetBlockByHeightResponse;
                    toAmino(message: _49.GetBlockByHeightResponse): _49.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _49.GetBlockByHeightResponseAminoMsg): _49.GetBlockByHeightResponse;
                    toAminoMsg(message: _49.GetBlockByHeightResponse): _49.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _49.GetBlockByHeightResponseProtoMsg): _49.GetBlockByHeightResponse;
                    toProto(message: _49.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _49.GetBlockByHeightResponse): _49.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _49.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.GetLatestBlockRequest;
                    fromPartial(_: Partial<_49.GetLatestBlockRequest>): _49.GetLatestBlockRequest;
                    fromAmino(_: _49.GetLatestBlockRequestAmino): _49.GetLatestBlockRequest;
                    toAmino(_: _49.GetLatestBlockRequest): _49.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _49.GetLatestBlockRequestAminoMsg): _49.GetLatestBlockRequest;
                    toAminoMsg(message: _49.GetLatestBlockRequest): _49.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _49.GetLatestBlockRequestProtoMsg): _49.GetLatestBlockRequest;
                    toProto(message: _49.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _49.GetLatestBlockRequest): _49.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _49.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetLatestBlockResponse;
                    fromPartial(object: Partial<_49.GetLatestBlockResponse>): _49.GetLatestBlockResponse;
                    fromAmino(object: _49.GetLatestBlockResponseAmino): _49.GetLatestBlockResponse;
                    toAmino(message: _49.GetLatestBlockResponse): _49.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _49.GetLatestBlockResponseAminoMsg): _49.GetLatestBlockResponse;
                    toAminoMsg(message: _49.GetLatestBlockResponse): _49.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _49.GetLatestBlockResponseProtoMsg): _49.GetLatestBlockResponse;
                    toProto(message: _49.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _49.GetLatestBlockResponse): _49.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _49.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.GetSyncingRequest;
                    fromPartial(_: Partial<_49.GetSyncingRequest>): _49.GetSyncingRequest;
                    fromAmino(_: _49.GetSyncingRequestAmino): _49.GetSyncingRequest;
                    toAmino(_: _49.GetSyncingRequest): _49.GetSyncingRequestAmino;
                    fromAminoMsg(object: _49.GetSyncingRequestAminoMsg): _49.GetSyncingRequest;
                    toAminoMsg(message: _49.GetSyncingRequest): _49.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _49.GetSyncingRequestProtoMsg): _49.GetSyncingRequest;
                    toProto(message: _49.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _49.GetSyncingRequest): _49.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _49.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetSyncingResponse;
                    fromPartial(object: Partial<_49.GetSyncingResponse>): _49.GetSyncingResponse;
                    fromAmino(object: _49.GetSyncingResponseAmino): _49.GetSyncingResponse;
                    toAmino(message: _49.GetSyncingResponse): _49.GetSyncingResponseAmino;
                    fromAminoMsg(object: _49.GetSyncingResponseAminoMsg): _49.GetSyncingResponse;
                    toAminoMsg(message: _49.GetSyncingResponse): _49.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _49.GetSyncingResponseProtoMsg): _49.GetSyncingResponse;
                    toProto(message: _49.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _49.GetSyncingResponse): _49.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _49.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.GetNodeInfoRequest;
                    fromPartial(_: Partial<_49.GetNodeInfoRequest>): _49.GetNodeInfoRequest;
                    fromAmino(_: _49.GetNodeInfoRequestAmino): _49.GetNodeInfoRequest;
                    toAmino(_: _49.GetNodeInfoRequest): _49.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _49.GetNodeInfoRequestAminoMsg): _49.GetNodeInfoRequest;
                    toAminoMsg(message: _49.GetNodeInfoRequest): _49.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _49.GetNodeInfoRequestProtoMsg): _49.GetNodeInfoRequest;
                    toProto(message: _49.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _49.GetNodeInfoRequest): _49.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _49.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.GetNodeInfoResponse;
                    fromPartial(object: Partial<_49.GetNodeInfoResponse>): _49.GetNodeInfoResponse;
                    fromAmino(object: _49.GetNodeInfoResponseAmino): _49.GetNodeInfoResponse;
                    toAmino(message: _49.GetNodeInfoResponse): _49.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _49.GetNodeInfoResponseAminoMsg): _49.GetNodeInfoResponse;
                    toAminoMsg(message: _49.GetNodeInfoResponse): _49.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _49.GetNodeInfoResponseProtoMsg): _49.GetNodeInfoResponse;
                    toProto(message: _49.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _49.GetNodeInfoResponse): _49.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _49.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.VersionInfo;
                    fromPartial(object: Partial<_49.VersionInfo>): _49.VersionInfo;
                    fromAmino(object: _49.VersionInfoAmino): _49.VersionInfo;
                    toAmino(message: _49.VersionInfo): _49.VersionInfoAmino;
                    fromAminoMsg(object: _49.VersionInfoAminoMsg): _49.VersionInfo;
                    toAminoMsg(message: _49.VersionInfo): _49.VersionInfoAminoMsg;
                    fromProtoMsg(message: _49.VersionInfoProtoMsg): _49.VersionInfo;
                    toProto(message: _49.VersionInfo): Uint8Array;
                    toProtoMsg(message: _49.VersionInfo): _49.VersionInfoProtoMsg;
                };
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
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _49.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.ABCIQueryRequest;
                    fromPartial(object: Partial<_49.ABCIQueryRequest>): _49.ABCIQueryRequest;
                    fromAmino(object: _49.ABCIQueryRequestAmino): _49.ABCIQueryRequest;
                    toAmino(message: _49.ABCIQueryRequest): _49.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _49.ABCIQueryRequestAminoMsg): _49.ABCIQueryRequest;
                    toAminoMsg(message: _49.ABCIQueryRequest): _49.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _49.ABCIQueryRequestProtoMsg): _49.ABCIQueryRequest;
                    toProto(message: _49.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _49.ABCIQueryRequest): _49.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _49.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.ABCIQueryResponse;
                    fromPartial(object: Partial<_49.ABCIQueryResponse>): _49.ABCIQueryResponse;
                    fromAmino(object: _49.ABCIQueryResponseAmino): _49.ABCIQueryResponse;
                    toAmino(message: _49.ABCIQueryResponse): _49.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _49.ABCIQueryResponseAminoMsg): _49.ABCIQueryResponse;
                    toAminoMsg(message: _49.ABCIQueryResponse): _49.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _49.ABCIQueryResponseProtoMsg): _49.ABCIQueryResponse;
                    toProto(message: _49.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _49.ABCIQueryResponse): _49.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _49.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.ProofOp;
                    fromPartial(object: Partial<_49.ProofOp>): _49.ProofOp;
                    fromAmino(object: _49.ProofOpAmino): _49.ProofOp;
                    toAmino(message: _49.ProofOp): _49.ProofOpAmino;
                    fromAminoMsg(object: _49.ProofOpAminoMsg): _49.ProofOp;
                    toAminoMsg(message: _49.ProofOp): _49.ProofOpAminoMsg;
                    fromProtoMsg(message: _49.ProofOpProtoMsg): _49.ProofOp;
                    toProto(message: _49.ProofOp): Uint8Array;
                    toProtoMsg(message: _49.ProofOp): _49.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _49.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.ProofOps;
                    fromPartial(object: Partial<_49.ProofOps>): _49.ProofOps;
                    fromAmino(object: _49.ProofOpsAmino): _49.ProofOps;
                    toAmino(message: _49.ProofOps): _49.ProofOpsAmino;
                    fromAminoMsg(object: _49.ProofOpsAminoMsg): _49.ProofOps;
                    toAminoMsg(message: _49.ProofOps): _49.ProofOpsAminoMsg;
                    fromProtoMsg(message: _49.ProofOpsProtoMsg): _49.ProofOps;
                    toProto(message: _49.ProofOps): Uint8Array;
                    toProtoMsg(message: _49.ProofOps): _49.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _51.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.Coin;
                fromPartial(object: Partial<_51.Coin>): _51.Coin;
                fromAmino(object: _51.CoinAmino): _51.Coin;
                toAmino(message: _51.Coin): _51.CoinAmino;
                fromAminoMsg(object: _51.CoinAminoMsg): _51.Coin;
                toAminoMsg(message: _51.Coin): _51.CoinAminoMsg;
                fromProtoMsg(message: _51.CoinProtoMsg): _51.Coin;
                toProto(message: _51.Coin): Uint8Array;
                toProtoMsg(message: _51.Coin): _51.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _51.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.DecCoin;
                fromPartial(object: Partial<_51.DecCoin>): _51.DecCoin;
                fromAmino(object: _51.DecCoinAmino): _51.DecCoin;
                toAmino(message: _51.DecCoin): _51.DecCoinAmino;
                fromAminoMsg(object: _51.DecCoinAminoMsg): _51.DecCoin;
                toAminoMsg(message: _51.DecCoin): _51.DecCoinAminoMsg;
                fromProtoMsg(message: _51.DecCoinProtoMsg): _51.DecCoin;
                toProto(message: _51.DecCoin): Uint8Array;
                toProtoMsg(message: _51.DecCoin): _51.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _51.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.IntProto;
                fromPartial(object: Partial<_51.IntProto>): _51.IntProto;
                fromAmino(object: _51.IntProtoAmino): _51.IntProto;
                toAmino(message: _51.IntProto): _51.IntProtoAmino;
                fromAminoMsg(object: _51.IntProtoAminoMsg): _51.IntProto;
                toAminoMsg(message: _51.IntProto): _51.IntProtoAminoMsg;
                fromProtoMsg(message: _51.IntProtoProtoMsg): _51.IntProto;
                toProto(message: _51.IntProto): Uint8Array;
                toProtoMsg(message: _51.IntProto): _51.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _51.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.DecProto;
                fromPartial(object: Partial<_51.DecProto>): _51.DecProto;
                fromAmino(object: _51.DecProtoAmino): _51.DecProto;
                toAmino(message: _51.DecProto): _51.DecProtoAmino;
                fromAminoMsg(object: _51.DecProtoAminoMsg): _51.DecProto;
                toAminoMsg(message: _51.DecProto): _51.DecProtoAminoMsg;
                fromProtoMsg(message: _51.DecProtoProtoMsg): _51.DecProto;
                toProto(message: _51.DecProto): Uint8Array;
                toProtoMsg(message: _51.DecProto): _51.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _53.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.GenesisOwners;
                fromPartial(object: Partial<_53.GenesisOwners>): _53.GenesisOwners;
                fromAmino(object: _53.GenesisOwnersAmino): _53.GenesisOwners;
                toAmino(message: _53.GenesisOwners): _53.GenesisOwnersAmino;
                fromAminoMsg(object: _53.GenesisOwnersAminoMsg): _53.GenesisOwners;
                toAminoMsg(message: _53.GenesisOwners): _53.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _53.GenesisOwnersProtoMsg): _53.GenesisOwners;
                toProto(message: _53.GenesisOwners): Uint8Array;
                toProtoMsg(message: _53.GenesisOwners): _53.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _53.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.GenesisState;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
                fromAmino(object: _53.GenesisStateAmino): _53.GenesisState;
                toAmino(message: _53.GenesisState): _53.GenesisStateAmino;
                fromAminoMsg(object: _53.GenesisStateAminoMsg): _53.GenesisState;
                toAminoMsg(message: _53.GenesisState): _53.GenesisStateAminoMsg;
                fromProtoMsg(message: _53.GenesisStateProtoMsg): _53.GenesisState;
                toProto(message: _53.GenesisState): Uint8Array;
                toProtoMsg(message: _53.GenesisState): _53.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _52.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Capability;
                fromPartial(object: Partial<_52.Capability>): _52.Capability;
                fromAmino(object: _52.CapabilityAmino): _52.Capability;
                toAmino(message: _52.Capability): _52.CapabilityAmino;
                fromAminoMsg(object: _52.CapabilityAminoMsg): _52.Capability;
                toAminoMsg(message: _52.Capability): _52.CapabilityAminoMsg;
                fromProtoMsg(message: _52.CapabilityProtoMsg): _52.Capability;
                toProto(message: _52.Capability): Uint8Array;
                toProtoMsg(message: _52.Capability): _52.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _52.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Owner;
                fromPartial(object: Partial<_52.Owner>): _52.Owner;
                fromAmino(object: _52.OwnerAmino): _52.Owner;
                toAmino(message: _52.Owner): _52.OwnerAmino;
                fromAminoMsg(object: _52.OwnerAminoMsg): _52.Owner;
                toAminoMsg(message: _52.Owner): _52.OwnerAminoMsg;
                fromProtoMsg(message: _52.OwnerProtoMsg): _52.Owner;
                toProto(message: _52.Owner): Uint8Array;
                toProtoMsg(message: _52.Owner): _52.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _52.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.CapabilityOwners;
                fromPartial(object: Partial<_52.CapabilityOwners>): _52.CapabilityOwners;
                fromAmino(object: _52.CapabilityOwnersAmino): _52.CapabilityOwners;
                toAmino(message: _52.CapabilityOwners): _52.CapabilityOwnersAmino;
                fromAminoMsg(object: _52.CapabilityOwnersAminoMsg): _52.CapabilityOwners;
                toAminoMsg(message: _52.CapabilityOwners): _52.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _52.CapabilityOwnersProtoMsg): _52.CapabilityOwners;
                toProto(message: _52.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _52.CapabilityOwners): _52.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _55.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _55.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _55.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _55.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _55.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _55.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _55.MsgVerifyInvariant) => _55.MsgVerifyInvariantAmino;
                    fromAmino: (object: _55.MsgVerifyInvariantAmino) => _55.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _55.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgVerifyInvariant;
                fromPartial(object: Partial<_55.MsgVerifyInvariant>): _55.MsgVerifyInvariant;
                fromAmino(object: _55.MsgVerifyInvariantAmino): _55.MsgVerifyInvariant;
                toAmino(message: _55.MsgVerifyInvariant): _55.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _55.MsgVerifyInvariantAminoMsg): _55.MsgVerifyInvariant;
                toAminoMsg(message: _55.MsgVerifyInvariant): _55.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _55.MsgVerifyInvariantProtoMsg): _55.MsgVerifyInvariant;
                toProto(message: _55.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _55.MsgVerifyInvariant): _55.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _55.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_55.MsgVerifyInvariantResponse>): _55.MsgVerifyInvariantResponse;
                fromAmino(_: _55.MsgVerifyInvariantResponseAmino): _55.MsgVerifyInvariantResponse;
                toAmino(_: _55.MsgVerifyInvariantResponse): _55.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _55.MsgVerifyInvariantResponseAminoMsg): _55.MsgVerifyInvariantResponse;
                toAminoMsg(message: _55.MsgVerifyInvariantResponse): _55.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _55.MsgVerifyInvariantResponseProtoMsg): _55.MsgVerifyInvariantResponse;
                toProto(message: _55.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _55.MsgVerifyInvariantResponse): _55.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _54.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.GenesisState;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
                fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
                toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
                fromAminoMsg(object: _54.GenesisStateAminoMsg): _54.GenesisState;
                toAminoMsg(message: _54.GenesisState): _54.GenesisStateAminoMsg;
                fromProtoMsg(message: _54.GenesisStateProtoMsg): _54.GenesisState;
                toProto(message: _54.GenesisState): Uint8Array;
                toProtoMsg(message: _54.GenesisState): _54.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _56.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.PubKey;
                fromPartial(object: Partial<_56.PubKey>): _56.PubKey;
                fromAmino(object: _56.PubKeyAmino): _56.PubKey;
                toAmino(message: _56.PubKey): _56.PubKeyAmino;
                fromAminoMsg(object: _56.PubKeyAminoMsg): _56.PubKey;
                toAminoMsg(message: _56.PubKey): _56.PubKeyAminoMsg;
                fromProtoMsg(message: _56.PubKeyProtoMsg): _56.PubKey;
                toProto(message: _56.PubKey): Uint8Array;
                toProtoMsg(message: _56.PubKey): _56.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _56.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.PrivKey;
                fromPartial(object: Partial<_56.PrivKey>): _56.PrivKey;
                fromAmino(object: _56.PrivKeyAmino): _56.PrivKey;
                toAmino(message: _56.PrivKey): _56.PrivKeyAmino;
                fromAminoMsg(object: _56.PrivKeyAminoMsg): _56.PrivKey;
                toAminoMsg(message: _56.PrivKey): _56.PrivKeyAminoMsg;
                fromProtoMsg(message: _56.PrivKeyProtoMsg): _56.PrivKey;
                toProto(message: _56.PrivKey): Uint8Array;
                toProtoMsg(message: _56.PrivKey): _56.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _57.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _57.BIP44Params;
                    fromPartial(object: Partial<_57.BIP44Params>): _57.BIP44Params;
                    fromAmino(object: _57.BIP44ParamsAmino): _57.BIP44Params;
                    toAmino(message: _57.BIP44Params): _57.BIP44ParamsAmino;
                    fromAminoMsg(object: _57.BIP44ParamsAminoMsg): _57.BIP44Params;
                    toAminoMsg(message: _57.BIP44Params): _57.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _57.BIP44ParamsProtoMsg): _57.BIP44Params;
                    toProto(message: _57.BIP44Params): Uint8Array;
                    toProtoMsg(message: _57.BIP44Params): _57.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _58.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.Record;
                    fromPartial(object: Partial<_58.Record>): _58.Record;
                    fromAmino(object: _58.RecordAmino): _58.Record;
                    toAmino(message: _58.Record): _58.RecordAmino;
                    fromAminoMsg(object: _58.RecordAminoMsg): _58.Record;
                    toAminoMsg(message: _58.Record): _58.RecordAminoMsg;
                    fromProtoMsg(message: _58.RecordProtoMsg): _58.Record;
                    toProto(message: _58.Record): Uint8Array;
                    toProtoMsg(message: _58.Record): _58.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _58.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.Record_Local;
                    fromPartial(object: Partial<_58.Record_Local>): _58.Record_Local;
                    fromAmino(object: _58.Record_LocalAmino): _58.Record_Local;
                    toAmino(message: _58.Record_Local): _58.Record_LocalAmino;
                    fromAminoMsg(object: _58.Record_LocalAminoMsg): _58.Record_Local;
                    toAminoMsg(message: _58.Record_Local): _58.Record_LocalAminoMsg;
                    fromProtoMsg(message: _58.Record_LocalProtoMsg): _58.Record_Local;
                    toProto(message: _58.Record_Local): Uint8Array;
                    toProtoMsg(message: _58.Record_Local): _58.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _58.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.Record_Ledger;
                    fromPartial(object: Partial<_58.Record_Ledger>): _58.Record_Ledger;
                    fromAmino(object: _58.Record_LedgerAmino): _58.Record_Ledger;
                    toAmino(message: _58.Record_Ledger): _58.Record_LedgerAmino;
                    fromAminoMsg(object: _58.Record_LedgerAminoMsg): _58.Record_Ledger;
                    toAminoMsg(message: _58.Record_Ledger): _58.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _58.Record_LedgerProtoMsg): _58.Record_Ledger;
                    toProto(message: _58.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _58.Record_Ledger): _58.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _58.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _58.Record_Multi;
                    fromPartial(_: Partial<_58.Record_Multi>): _58.Record_Multi;
                    fromAmino(_: _58.Record_MultiAmino): _58.Record_Multi;
                    toAmino(_: _58.Record_Multi): _58.Record_MultiAmino;
                    fromAminoMsg(object: _58.Record_MultiAminoMsg): _58.Record_Multi;
                    toAminoMsg(message: _58.Record_Multi): _58.Record_MultiAminoMsg;
                    fromProtoMsg(message: _58.Record_MultiProtoMsg): _58.Record_Multi;
                    toProto(message: _58.Record_Multi): Uint8Array;
                    toProtoMsg(message: _58.Record_Multi): _58.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _58.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _58.Record_Offline;
                    fromPartial(_: Partial<_58.Record_Offline>): _58.Record_Offline;
                    fromAmino(_: _58.Record_OfflineAmino): _58.Record_Offline;
                    toAmino(_: _58.Record_Offline): _58.Record_OfflineAmino;
                    fromAminoMsg(object: _58.Record_OfflineAminoMsg): _58.Record_Offline;
                    toAminoMsg(message: _58.Record_Offline): _58.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _58.Record_OfflineProtoMsg): _58.Record_Offline;
                    toProto(message: _58.Record_Offline): Uint8Array;
                    toProtoMsg(message: _58.Record_Offline): _58.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _59.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.LegacyAminoPubKey;
                fromPartial(object: Partial<_59.LegacyAminoPubKey>): _59.LegacyAminoPubKey;
                fromAmino(object: _59.LegacyAminoPubKeyAmino): _59.LegacyAminoPubKey;
                toAmino(message: _59.LegacyAminoPubKey): _59.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _59.LegacyAminoPubKeyAminoMsg): _59.LegacyAminoPubKey;
                toAminoMsg(message: _59.LegacyAminoPubKey): _59.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _59.LegacyAminoPubKeyProtoMsg): _59.LegacyAminoPubKey;
                toProto(message: _59.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _59.LegacyAminoPubKey): _59.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _61.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.PubKey;
                fromPartial(object: Partial<_61.PubKey>): _61.PubKey;
                fromAmino(object: _61.PubKeyAmino): _61.PubKey;
                toAmino(message: _61.PubKey): _61.PubKeyAmino;
                fromAminoMsg(object: _61.PubKeyAminoMsg): _61.PubKey;
                toAminoMsg(message: _61.PubKey): _61.PubKeyAminoMsg;
                fromProtoMsg(message: _61.PubKeyProtoMsg): _61.PubKey;
                toProto(message: _61.PubKey): Uint8Array;
                toProtoMsg(message: _61.PubKey): _61.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _61.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.PrivKey;
                fromPartial(object: Partial<_61.PrivKey>): _61.PrivKey;
                fromAmino(object: _61.PrivKeyAmino): _61.PrivKey;
                toAmino(message: _61.PrivKey): _61.PrivKeyAmino;
                fromAminoMsg(object: _61.PrivKeyAminoMsg): _61.PrivKey;
                toAminoMsg(message: _61.PrivKey): _61.PrivKeyAminoMsg;
                fromProtoMsg(message: _61.PrivKeyProtoMsg): _61.PrivKey;
                toProto(message: _61.PrivKey): Uint8Array;
                toProtoMsg(message: _61.PrivKey): _61.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _231.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                validatorOutstandingRewards(request: _64.QueryValidatorOutstandingRewardsRequest): Promise<_64.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _64.QueryValidatorCommissionRequest): Promise<_64.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _64.QueryValidatorSlashesRequest): Promise<_64.QueryValidatorSlashesResponse>;
                delegationRewards(request: _64.QueryDelegationRewardsRequest): Promise<_64.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _64.QueryDelegationTotalRewardsRequest): Promise<_64.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _64.QueryDelegatorValidatorsRequest): Promise<_64.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _64.QueryDelegatorWithdrawAddressRequest): Promise<_64.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _64.QueryCommunityPoolRequest): Promise<_64.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSetWithdrawAddress) => _65.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _65.MsgSetWithdrawAddressAmino) => _65.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _65.MsgWithdrawDelegatorReward) => _65.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _65.MsgWithdrawDelegatorRewardAmino) => _65.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _65.MsgWithdrawValidatorCommission) => _65.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _65.MsgWithdrawValidatorCommissionAmino) => _65.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _65.MsgFundCommunityPool) => _65.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _65.MsgFundCommunityPoolAmino) => _65.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _65.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_65.MsgSetWithdrawAddress>): _65.MsgSetWithdrawAddress;
                fromAmino(object: _65.MsgSetWithdrawAddressAmino): _65.MsgSetWithdrawAddress;
                toAmino(message: _65.MsgSetWithdrawAddress): _65.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _65.MsgSetWithdrawAddressAminoMsg): _65.MsgSetWithdrawAddress;
                toAminoMsg(message: _65.MsgSetWithdrawAddress): _65.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _65.MsgSetWithdrawAddressProtoMsg): _65.MsgSetWithdrawAddress;
                toProto(message: _65.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _65.MsgSetWithdrawAddress): _65.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _65.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_65.MsgSetWithdrawAddressResponse>): _65.MsgSetWithdrawAddressResponse;
                fromAmino(_: _65.MsgSetWithdrawAddressResponseAmino): _65.MsgSetWithdrawAddressResponse;
                toAmino(_: _65.MsgSetWithdrawAddressResponse): _65.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _65.MsgSetWithdrawAddressResponseAminoMsg): _65.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _65.MsgSetWithdrawAddressResponse): _65.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSetWithdrawAddressResponseProtoMsg): _65.MsgSetWithdrawAddressResponse;
                toProto(message: _65.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSetWithdrawAddressResponse): _65.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _65.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_65.MsgWithdrawDelegatorReward>): _65.MsgWithdrawDelegatorReward;
                fromAmino(object: _65.MsgWithdrawDelegatorRewardAmino): _65.MsgWithdrawDelegatorReward;
                toAmino(message: _65.MsgWithdrawDelegatorReward): _65.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _65.MsgWithdrawDelegatorRewardAminoMsg): _65.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _65.MsgWithdrawDelegatorReward): _65.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawDelegatorRewardProtoMsg): _65.MsgWithdrawDelegatorReward;
                toProto(message: _65.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawDelegatorReward): _65.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _65.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_65.MsgWithdrawDelegatorRewardResponse>): _65.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _65.MsgWithdrawDelegatorRewardResponseAmino): _65.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _65.MsgWithdrawDelegatorRewardResponse): _65.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _65.MsgWithdrawDelegatorRewardResponseAminoMsg): _65.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _65.MsgWithdrawDelegatorRewardResponse): _65.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawDelegatorRewardResponseProtoMsg): _65.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _65.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawDelegatorRewardResponse): _65.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _65.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_65.MsgWithdrawValidatorCommission>): _65.MsgWithdrawValidatorCommission;
                fromAmino(object: _65.MsgWithdrawValidatorCommissionAmino): _65.MsgWithdrawValidatorCommission;
                toAmino(message: _65.MsgWithdrawValidatorCommission): _65.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _65.MsgWithdrawValidatorCommissionAminoMsg): _65.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _65.MsgWithdrawValidatorCommission): _65.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawValidatorCommissionProtoMsg): _65.MsgWithdrawValidatorCommission;
                toProto(message: _65.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawValidatorCommission): _65.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _65.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_65.MsgWithdrawValidatorCommissionResponse>): _65.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _65.MsgWithdrawValidatorCommissionResponseAmino): _65.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _65.MsgWithdrawValidatorCommissionResponse): _65.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _65.MsgWithdrawValidatorCommissionResponseAminoMsg): _65.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _65.MsgWithdrawValidatorCommissionResponse): _65.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawValidatorCommissionResponseProtoMsg): _65.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _65.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawValidatorCommissionResponse): _65.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _65.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgFundCommunityPool;
                fromPartial(object: Partial<_65.MsgFundCommunityPool>): _65.MsgFundCommunityPool;
                fromAmino(object: _65.MsgFundCommunityPoolAmino): _65.MsgFundCommunityPool;
                toAmino(message: _65.MsgFundCommunityPool): _65.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _65.MsgFundCommunityPoolAminoMsg): _65.MsgFundCommunityPool;
                toAminoMsg(message: _65.MsgFundCommunityPool): _65.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _65.MsgFundCommunityPoolProtoMsg): _65.MsgFundCommunityPool;
                toProto(message: _65.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _65.MsgFundCommunityPool): _65.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _65.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_65.MsgFundCommunityPoolResponse>): _65.MsgFundCommunityPoolResponse;
                fromAmino(_: _65.MsgFundCommunityPoolResponseAmino): _65.MsgFundCommunityPoolResponse;
                toAmino(_: _65.MsgFundCommunityPoolResponse): _65.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _65.MsgFundCommunityPoolResponseAminoMsg): _65.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _65.MsgFundCommunityPoolResponse): _65.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _65.MsgFundCommunityPoolResponseProtoMsg): _65.MsgFundCommunityPoolResponse;
                toProto(message: _65.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _65.MsgFundCommunityPoolResponse): _65.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _64.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryParamsRequest;
                fromPartial(_: Partial<_64.QueryParamsRequest>): _64.QueryParamsRequest;
                fromAmino(_: _64.QueryParamsRequestAmino): _64.QueryParamsRequest;
                toAmino(_: _64.QueryParamsRequest): _64.QueryParamsRequestAmino;
                fromAminoMsg(object: _64.QueryParamsRequestAminoMsg): _64.QueryParamsRequest;
                toAminoMsg(message: _64.QueryParamsRequest): _64.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryParamsRequestProtoMsg): _64.QueryParamsRequest;
                toProto(message: _64.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryParamsRequest): _64.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _64.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryParamsResponse;
                fromPartial(object: Partial<_64.QueryParamsResponse>): _64.QueryParamsResponse;
                fromAmino(object: _64.QueryParamsResponseAmino): _64.QueryParamsResponse;
                toAmino(message: _64.QueryParamsResponse): _64.QueryParamsResponseAmino;
                fromAminoMsg(object: _64.QueryParamsResponseAminoMsg): _64.QueryParamsResponse;
                toAminoMsg(message: _64.QueryParamsResponse): _64.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryParamsResponseProtoMsg): _64.QueryParamsResponse;
                toProto(message: _64.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryParamsResponse): _64.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _64.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_64.QueryValidatorOutstandingRewardsRequest>): _64.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _64.QueryValidatorOutstandingRewardsRequestAmino): _64.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _64.QueryValidatorOutstandingRewardsRequest): _64.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _64.QueryValidatorOutstandingRewardsRequestAminoMsg): _64.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _64.QueryValidatorOutstandingRewardsRequest): _64.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorOutstandingRewardsRequestProtoMsg): _64.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _64.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorOutstandingRewardsRequest): _64.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _64.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_64.QueryValidatorOutstandingRewardsResponse>): _64.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _64.QueryValidatorOutstandingRewardsResponseAmino): _64.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _64.QueryValidatorOutstandingRewardsResponse): _64.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _64.QueryValidatorOutstandingRewardsResponseAminoMsg): _64.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _64.QueryValidatorOutstandingRewardsResponse): _64.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorOutstandingRewardsResponseProtoMsg): _64.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _64.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorOutstandingRewardsResponse): _64.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _64.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_64.QueryValidatorCommissionRequest>): _64.QueryValidatorCommissionRequest;
                fromAmino(object: _64.QueryValidatorCommissionRequestAmino): _64.QueryValidatorCommissionRequest;
                toAmino(message: _64.QueryValidatorCommissionRequest): _64.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _64.QueryValidatorCommissionRequestAminoMsg): _64.QueryValidatorCommissionRequest;
                toAminoMsg(message: _64.QueryValidatorCommissionRequest): _64.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorCommissionRequestProtoMsg): _64.QueryValidatorCommissionRequest;
                toProto(message: _64.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorCommissionRequest): _64.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _64.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_64.QueryValidatorCommissionResponse>): _64.QueryValidatorCommissionResponse;
                fromAmino(object: _64.QueryValidatorCommissionResponseAmino): _64.QueryValidatorCommissionResponse;
                toAmino(message: _64.QueryValidatorCommissionResponse): _64.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _64.QueryValidatorCommissionResponseAminoMsg): _64.QueryValidatorCommissionResponse;
                toAminoMsg(message: _64.QueryValidatorCommissionResponse): _64.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorCommissionResponseProtoMsg): _64.QueryValidatorCommissionResponse;
                toProto(message: _64.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorCommissionResponse): _64.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _64.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_64.QueryValidatorSlashesRequest>): _64.QueryValidatorSlashesRequest;
                fromAmino(object: _64.QueryValidatorSlashesRequestAmino): _64.QueryValidatorSlashesRequest;
                toAmino(message: _64.QueryValidatorSlashesRequest): _64.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _64.QueryValidatorSlashesRequestAminoMsg): _64.QueryValidatorSlashesRequest;
                toAminoMsg(message: _64.QueryValidatorSlashesRequest): _64.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorSlashesRequestProtoMsg): _64.QueryValidatorSlashesRequest;
                toProto(message: _64.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorSlashesRequest): _64.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _64.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_64.QueryValidatorSlashesResponse>): _64.QueryValidatorSlashesResponse;
                fromAmino(object: _64.QueryValidatorSlashesResponseAmino): _64.QueryValidatorSlashesResponse;
                toAmino(message: _64.QueryValidatorSlashesResponse): _64.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _64.QueryValidatorSlashesResponseAminoMsg): _64.QueryValidatorSlashesResponse;
                toAminoMsg(message: _64.QueryValidatorSlashesResponse): _64.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorSlashesResponseProtoMsg): _64.QueryValidatorSlashesResponse;
                toProto(message: _64.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorSlashesResponse): _64.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_64.QueryDelegationRewardsRequest>): _64.QueryDelegationRewardsRequest;
                fromAmino(object: _64.QueryDelegationRewardsRequestAmino): _64.QueryDelegationRewardsRequest;
                toAmino(message: _64.QueryDelegationRewardsRequest): _64.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _64.QueryDelegationRewardsRequestAminoMsg): _64.QueryDelegationRewardsRequest;
                toAminoMsg(message: _64.QueryDelegationRewardsRequest): _64.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationRewardsRequestProtoMsg): _64.QueryDelegationRewardsRequest;
                toProto(message: _64.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationRewardsRequest): _64.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_64.QueryDelegationRewardsResponse>): _64.QueryDelegationRewardsResponse;
                fromAmino(object: _64.QueryDelegationRewardsResponseAmino): _64.QueryDelegationRewardsResponse;
                toAmino(message: _64.QueryDelegationRewardsResponse): _64.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _64.QueryDelegationRewardsResponseAminoMsg): _64.QueryDelegationRewardsResponse;
                toAminoMsg(message: _64.QueryDelegationRewardsResponse): _64.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationRewardsResponseProtoMsg): _64.QueryDelegationRewardsResponse;
                toProto(message: _64.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationRewardsResponse): _64.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_64.QueryDelegationTotalRewardsRequest>): _64.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _64.QueryDelegationTotalRewardsRequestAmino): _64.QueryDelegationTotalRewardsRequest;
                toAmino(message: _64.QueryDelegationTotalRewardsRequest): _64.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _64.QueryDelegationTotalRewardsRequestAminoMsg): _64.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _64.QueryDelegationTotalRewardsRequest): _64.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationTotalRewardsRequestProtoMsg): _64.QueryDelegationTotalRewardsRequest;
                toProto(message: _64.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationTotalRewardsRequest): _64.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_64.QueryDelegationTotalRewardsResponse>): _64.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _64.QueryDelegationTotalRewardsResponseAmino): _64.QueryDelegationTotalRewardsResponse;
                toAmino(message: _64.QueryDelegationTotalRewardsResponse): _64.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _64.QueryDelegationTotalRewardsResponseAminoMsg): _64.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _64.QueryDelegationTotalRewardsResponse): _64.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationTotalRewardsResponseProtoMsg): _64.QueryDelegationTotalRewardsResponse;
                toProto(message: _64.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationTotalRewardsResponse): _64.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_64.QueryDelegatorValidatorsRequest>): _64.QueryDelegatorValidatorsRequest;
                fromAmino(object: _64.QueryDelegatorValidatorsRequestAmino): _64.QueryDelegatorValidatorsRequest;
                toAmino(message: _64.QueryDelegatorValidatorsRequest): _64.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _64.QueryDelegatorValidatorsRequestAminoMsg): _64.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _64.QueryDelegatorValidatorsRequest): _64.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorValidatorsRequestProtoMsg): _64.QueryDelegatorValidatorsRequest;
                toProto(message: _64.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorValidatorsRequest): _64.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_64.QueryDelegatorValidatorsResponse>): _64.QueryDelegatorValidatorsResponse;
                fromAmino(object: _64.QueryDelegatorValidatorsResponseAmino): _64.QueryDelegatorValidatorsResponse;
                toAmino(message: _64.QueryDelegatorValidatorsResponse): _64.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _64.QueryDelegatorValidatorsResponseAminoMsg): _64.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _64.QueryDelegatorValidatorsResponse): _64.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorValidatorsResponseProtoMsg): _64.QueryDelegatorValidatorsResponse;
                toProto(message: _64.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorValidatorsResponse): _64.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_64.QueryDelegatorWithdrawAddressRequest>): _64.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _64.QueryDelegatorWithdrawAddressRequestAmino): _64.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _64.QueryDelegatorWithdrawAddressRequest): _64.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _64.QueryDelegatorWithdrawAddressRequestAminoMsg): _64.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _64.QueryDelegatorWithdrawAddressRequest): _64.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorWithdrawAddressRequestProtoMsg): _64.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _64.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorWithdrawAddressRequest): _64.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_64.QueryDelegatorWithdrawAddressResponse>): _64.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _64.QueryDelegatorWithdrawAddressResponseAmino): _64.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _64.QueryDelegatorWithdrawAddressResponse): _64.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _64.QueryDelegatorWithdrawAddressResponseAminoMsg): _64.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _64.QueryDelegatorWithdrawAddressResponse): _64.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorWithdrawAddressResponseProtoMsg): _64.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _64.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorWithdrawAddressResponse): _64.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _64.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_64.QueryCommunityPoolRequest>): _64.QueryCommunityPoolRequest;
                fromAmino(_: _64.QueryCommunityPoolRequestAmino): _64.QueryCommunityPoolRequest;
                toAmino(_: _64.QueryCommunityPoolRequest): _64.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _64.QueryCommunityPoolRequestAminoMsg): _64.QueryCommunityPoolRequest;
                toAminoMsg(message: _64.QueryCommunityPoolRequest): _64.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _64.QueryCommunityPoolRequestProtoMsg): _64.QueryCommunityPoolRequest;
                toProto(message: _64.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _64.QueryCommunityPoolRequest): _64.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _64.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_64.QueryCommunityPoolResponse>): _64.QueryCommunityPoolResponse;
                fromAmino(object: _64.QueryCommunityPoolResponseAmino): _64.QueryCommunityPoolResponse;
                toAmino(message: _64.QueryCommunityPoolResponse): _64.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _64.QueryCommunityPoolResponseAminoMsg): _64.QueryCommunityPoolResponse;
                toAminoMsg(message: _64.QueryCommunityPoolResponse): _64.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _64.QueryCommunityPoolResponseProtoMsg): _64.QueryCommunityPoolResponse;
                toProto(message: _64.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _64.QueryCommunityPoolResponse): _64.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _63.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_63.DelegatorWithdrawInfo>): _63.DelegatorWithdrawInfo;
                fromAmino(object: _63.DelegatorWithdrawInfoAmino): _63.DelegatorWithdrawInfo;
                toAmino(message: _63.DelegatorWithdrawInfo): _63.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _63.DelegatorWithdrawInfoAminoMsg): _63.DelegatorWithdrawInfo;
                toAminoMsg(message: _63.DelegatorWithdrawInfo): _63.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _63.DelegatorWithdrawInfoProtoMsg): _63.DelegatorWithdrawInfo;
                toProto(message: _63.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _63.DelegatorWithdrawInfo): _63.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorOutstandingRewardsRecord>): _63.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _63.ValidatorOutstandingRewardsRecordAmino): _63.ValidatorOutstandingRewardsRecord;
                toAmino(message: _63.ValidatorOutstandingRewardsRecord): _63.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _63.ValidatorOutstandingRewardsRecordAminoMsg): _63.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _63.ValidatorOutstandingRewardsRecord): _63.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorOutstandingRewardsRecordProtoMsg): _63.ValidatorOutstandingRewardsRecord;
                toProto(message: _63.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorOutstandingRewardsRecord): _63.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_63.ValidatorAccumulatedCommissionRecord>): _63.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _63.ValidatorAccumulatedCommissionRecordAmino): _63.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _63.ValidatorAccumulatedCommissionRecord): _63.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _63.ValidatorAccumulatedCommissionRecordAminoMsg): _63.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _63.ValidatorAccumulatedCommissionRecord): _63.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorAccumulatedCommissionRecordProtoMsg): _63.ValidatorAccumulatedCommissionRecord;
                toProto(message: _63.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorAccumulatedCommissionRecord): _63.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorHistoricalRewardsRecord>): _63.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _63.ValidatorHistoricalRewardsRecordAmino): _63.ValidatorHistoricalRewardsRecord;
                toAmino(message: _63.ValidatorHistoricalRewardsRecord): _63.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _63.ValidatorHistoricalRewardsRecordAminoMsg): _63.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _63.ValidatorHistoricalRewardsRecord): _63.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorHistoricalRewardsRecordProtoMsg): _63.ValidatorHistoricalRewardsRecord;
                toProto(message: _63.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorHistoricalRewardsRecord): _63.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorCurrentRewardsRecord>): _63.ValidatorCurrentRewardsRecord;
                fromAmino(object: _63.ValidatorCurrentRewardsRecordAmino): _63.ValidatorCurrentRewardsRecord;
                toAmino(message: _63.ValidatorCurrentRewardsRecord): _63.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _63.ValidatorCurrentRewardsRecordAminoMsg): _63.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _63.ValidatorCurrentRewardsRecord): _63.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorCurrentRewardsRecordProtoMsg): _63.ValidatorCurrentRewardsRecord;
                toProto(message: _63.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorCurrentRewardsRecord): _63.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _63.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_63.DelegatorStartingInfoRecord>): _63.DelegatorStartingInfoRecord;
                fromAmino(object: _63.DelegatorStartingInfoRecordAmino): _63.DelegatorStartingInfoRecord;
                toAmino(message: _63.DelegatorStartingInfoRecord): _63.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _63.DelegatorStartingInfoRecordAminoMsg): _63.DelegatorStartingInfoRecord;
                toAminoMsg(message: _63.DelegatorStartingInfoRecord): _63.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _63.DelegatorStartingInfoRecordProtoMsg): _63.DelegatorStartingInfoRecord;
                toProto(message: _63.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _63.DelegatorStartingInfoRecord): _63.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_63.ValidatorSlashEventRecord>): _63.ValidatorSlashEventRecord;
                fromAmino(object: _63.ValidatorSlashEventRecordAmino): _63.ValidatorSlashEventRecord;
                toAmino(message: _63.ValidatorSlashEventRecord): _63.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _63.ValidatorSlashEventRecordAminoMsg): _63.ValidatorSlashEventRecord;
                toAminoMsg(message: _63.ValidatorSlashEventRecord): _63.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorSlashEventRecordProtoMsg): _63.ValidatorSlashEventRecord;
                toProto(message: _63.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorSlashEventRecord): _63.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _62.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Params;
                fromPartial(object: Partial<_62.Params>): _62.Params;
                fromAmino(object: _62.ParamsAmino): _62.Params;
                toAmino(message: _62.Params): _62.ParamsAmino;
                fromAminoMsg(object: _62.ParamsAminoMsg): _62.Params;
                toAminoMsg(message: _62.Params): _62.ParamsAminoMsg;
                fromProtoMsg(message: _62.ParamsProtoMsg): _62.Params;
                toProto(message: _62.Params): Uint8Array;
                toProtoMsg(message: _62.Params): _62.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _62.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_62.ValidatorHistoricalRewards>): _62.ValidatorHistoricalRewards;
                fromAmino(object: _62.ValidatorHistoricalRewardsAmino): _62.ValidatorHistoricalRewards;
                toAmino(message: _62.ValidatorHistoricalRewards): _62.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _62.ValidatorHistoricalRewardsAminoMsg): _62.ValidatorHistoricalRewards;
                toAminoMsg(message: _62.ValidatorHistoricalRewards): _62.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _62.ValidatorHistoricalRewardsProtoMsg): _62.ValidatorHistoricalRewards;
                toProto(message: _62.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _62.ValidatorHistoricalRewards): _62.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _62.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorCurrentRewards;
                fromPartial(object: Partial<_62.ValidatorCurrentRewards>): _62.ValidatorCurrentRewards;
                fromAmino(object: _62.ValidatorCurrentRewardsAmino): _62.ValidatorCurrentRewards;
                toAmino(message: _62.ValidatorCurrentRewards): _62.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _62.ValidatorCurrentRewardsAminoMsg): _62.ValidatorCurrentRewards;
                toAminoMsg(message: _62.ValidatorCurrentRewards): _62.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _62.ValidatorCurrentRewardsProtoMsg): _62.ValidatorCurrentRewards;
                toProto(message: _62.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _62.ValidatorCurrentRewards): _62.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _62.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_62.ValidatorAccumulatedCommission>): _62.ValidatorAccumulatedCommission;
                fromAmino(object: _62.ValidatorAccumulatedCommissionAmino): _62.ValidatorAccumulatedCommission;
                toAmino(message: _62.ValidatorAccumulatedCommission): _62.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _62.ValidatorAccumulatedCommissionAminoMsg): _62.ValidatorAccumulatedCommission;
                toAminoMsg(message: _62.ValidatorAccumulatedCommission): _62.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _62.ValidatorAccumulatedCommissionProtoMsg): _62.ValidatorAccumulatedCommission;
                toProto(message: _62.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _62.ValidatorAccumulatedCommission): _62.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _62.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_62.ValidatorOutstandingRewards>): _62.ValidatorOutstandingRewards;
                fromAmino(object: _62.ValidatorOutstandingRewardsAmino): _62.ValidatorOutstandingRewards;
                toAmino(message: _62.ValidatorOutstandingRewards): _62.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _62.ValidatorOutstandingRewardsAminoMsg): _62.ValidatorOutstandingRewards;
                toAminoMsg(message: _62.ValidatorOutstandingRewards): _62.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _62.ValidatorOutstandingRewardsProtoMsg): _62.ValidatorOutstandingRewards;
                toProto(message: _62.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _62.ValidatorOutstandingRewards): _62.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _62.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorSlashEvent;
                fromPartial(object: Partial<_62.ValidatorSlashEvent>): _62.ValidatorSlashEvent;
                fromAmino(object: _62.ValidatorSlashEventAmino): _62.ValidatorSlashEvent;
                toAmino(message: _62.ValidatorSlashEvent): _62.ValidatorSlashEventAmino;
                fromAminoMsg(object: _62.ValidatorSlashEventAminoMsg): _62.ValidatorSlashEvent;
                toAminoMsg(message: _62.ValidatorSlashEvent): _62.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _62.ValidatorSlashEventProtoMsg): _62.ValidatorSlashEvent;
                toProto(message: _62.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _62.ValidatorSlashEvent): _62.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _62.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorSlashEvents;
                fromPartial(object: Partial<_62.ValidatorSlashEvents>): _62.ValidatorSlashEvents;
                fromAmino(object: _62.ValidatorSlashEventsAmino): _62.ValidatorSlashEvents;
                toAmino(message: _62.ValidatorSlashEvents): _62.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _62.ValidatorSlashEventsAminoMsg): _62.ValidatorSlashEvents;
                toAminoMsg(message: _62.ValidatorSlashEvents): _62.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _62.ValidatorSlashEventsProtoMsg): _62.ValidatorSlashEvents;
                toProto(message: _62.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _62.ValidatorSlashEvents): _62.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _62.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.FeePool;
                fromPartial(object: Partial<_62.FeePool>): _62.FeePool;
                fromAmino(object: _62.FeePoolAmino): _62.FeePool;
                toAmino(message: _62.FeePool): _62.FeePoolAmino;
                fromAminoMsg(object: _62.FeePoolAminoMsg): _62.FeePool;
                toAminoMsg(message: _62.FeePool): _62.FeePoolAminoMsg;
                fromProtoMsg(message: _62.FeePoolProtoMsg): _62.FeePool;
                toProto(message: _62.FeePool): Uint8Array;
                toProtoMsg(message: _62.FeePool): _62.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _62.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_62.CommunityPoolSpendProposal>): _62.CommunityPoolSpendProposal;
                fromAmino(object: _62.CommunityPoolSpendProposalAmino): _62.CommunityPoolSpendProposal;
                toAmino(message: _62.CommunityPoolSpendProposal): _62.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _62.CommunityPoolSpendProposalAminoMsg): _62.CommunityPoolSpendProposal;
                toAminoMsg(message: _62.CommunityPoolSpendProposal): _62.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _62.CommunityPoolSpendProposalProtoMsg): _62.CommunityPoolSpendProposal;
                toProto(message: _62.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _62.CommunityPoolSpendProposal): _62.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _62.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.DelegatorStartingInfo;
                fromPartial(object: Partial<_62.DelegatorStartingInfo>): _62.DelegatorStartingInfo;
                fromAmino(object: _62.DelegatorStartingInfoAmino): _62.DelegatorStartingInfo;
                toAmino(message: _62.DelegatorStartingInfo): _62.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _62.DelegatorStartingInfoAminoMsg): _62.DelegatorStartingInfo;
                toAminoMsg(message: _62.DelegatorStartingInfo): _62.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _62.DelegatorStartingInfoProtoMsg): _62.DelegatorStartingInfo;
                toProto(message: _62.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _62.DelegatorStartingInfo): _62.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _62.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.DelegationDelegatorReward;
                fromPartial(object: Partial<_62.DelegationDelegatorReward>): _62.DelegationDelegatorReward;
                fromAmino(object: _62.DelegationDelegatorRewardAmino): _62.DelegationDelegatorReward;
                toAmino(message: _62.DelegationDelegatorReward): _62.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _62.DelegationDelegatorRewardAminoMsg): _62.DelegationDelegatorReward;
                toAminoMsg(message: _62.DelegationDelegatorReward): _62.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _62.DelegationDelegatorRewardProtoMsg): _62.DelegationDelegatorReward;
                toProto(message: _62.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _62.DelegationDelegatorReward): _62.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _62.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_62.CommunityPoolSpendProposalWithDeposit>): _62.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _62.CommunityPoolSpendProposalWithDepositAmino): _62.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _62.CommunityPoolSpendProposalWithDeposit): _62.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _62.CommunityPoolSpendProposalWithDepositAminoMsg): _62.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _62.CommunityPoolSpendProposalWithDeposit): _62.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _62.CommunityPoolSpendProposalWithDepositProtoMsg): _62.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _62.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _62.CommunityPoolSpendProposalWithDeposit): _62.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _68.QueryEvidenceRequest): Promise<_68.QueryEvidenceResponse>;
                allEvidence(request?: _68.QueryAllEvidenceRequest): Promise<_68.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _197.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _69.MsgSubmitEvidence) => _69.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _69.MsgSubmitEvidenceAmino) => _69.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _69.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgSubmitEvidence;
                fromPartial(object: Partial<_69.MsgSubmitEvidence>): _69.MsgSubmitEvidence;
                fromAmino(object: _69.MsgSubmitEvidenceAmino): _69.MsgSubmitEvidence;
                toAmino(message: _69.MsgSubmitEvidence): _69.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _69.MsgSubmitEvidenceAminoMsg): _69.MsgSubmitEvidence;
                toAminoMsg(message: _69.MsgSubmitEvidence): _69.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitEvidenceProtoMsg): _69.MsgSubmitEvidence;
                toProto(message: _69.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitEvidence): _69.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _69.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_69.MsgSubmitEvidenceResponse>): _69.MsgSubmitEvidenceResponse;
                fromAmino(object: _69.MsgSubmitEvidenceResponseAmino): _69.MsgSubmitEvidenceResponse;
                toAmino(message: _69.MsgSubmitEvidenceResponse): _69.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _69.MsgSubmitEvidenceResponseAminoMsg): _69.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _69.MsgSubmitEvidenceResponse): _69.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitEvidenceResponseProtoMsg): _69.MsgSubmitEvidenceResponse;
                toProto(message: _69.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitEvidenceResponse): _69.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _68.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryEvidenceRequest;
                fromPartial(object: Partial<_68.QueryEvidenceRequest>): _68.QueryEvidenceRequest;
                fromAmino(object: _68.QueryEvidenceRequestAmino): _68.QueryEvidenceRequest;
                toAmino(message: _68.QueryEvidenceRequest): _68.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _68.QueryEvidenceRequestAminoMsg): _68.QueryEvidenceRequest;
                toAminoMsg(message: _68.QueryEvidenceRequest): _68.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _68.QueryEvidenceRequestProtoMsg): _68.QueryEvidenceRequest;
                toProto(message: _68.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _68.QueryEvidenceRequest): _68.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _68.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryEvidenceResponse;
                fromPartial(object: Partial<_68.QueryEvidenceResponse>): _68.QueryEvidenceResponse;
                fromAmino(object: _68.QueryEvidenceResponseAmino): _68.QueryEvidenceResponse;
                toAmino(message: _68.QueryEvidenceResponse): _68.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _68.QueryEvidenceResponseAminoMsg): _68.QueryEvidenceResponse;
                toAminoMsg(message: _68.QueryEvidenceResponse): _68.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _68.QueryEvidenceResponseProtoMsg): _68.QueryEvidenceResponse;
                toProto(message: _68.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _68.QueryEvidenceResponse): _68.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_68.QueryAllEvidenceRequest>): _68.QueryAllEvidenceRequest;
                fromAmino(object: _68.QueryAllEvidenceRequestAmino): _68.QueryAllEvidenceRequest;
                toAmino(message: _68.QueryAllEvidenceRequest): _68.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _68.QueryAllEvidenceRequestAminoMsg): _68.QueryAllEvidenceRequest;
                toAminoMsg(message: _68.QueryAllEvidenceRequest): _68.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllEvidenceRequestProtoMsg): _68.QueryAllEvidenceRequest;
                toProto(message: _68.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllEvidenceRequest): _68.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_68.QueryAllEvidenceResponse>): _68.QueryAllEvidenceResponse;
                fromAmino(object: _68.QueryAllEvidenceResponseAmino): _68.QueryAllEvidenceResponse;
                toAmino(message: _68.QueryAllEvidenceResponse): _68.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _68.QueryAllEvidenceResponseAminoMsg): _68.QueryAllEvidenceResponse;
                toAminoMsg(message: _68.QueryAllEvidenceResponse): _68.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllEvidenceResponseProtoMsg): _68.QueryAllEvidenceResponse;
                toProto(message: _68.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllEvidenceResponse): _68.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _66.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Equivocation;
                fromPartial(object: Partial<_66.Equivocation>): _66.Equivocation;
                fromAmino(object: _66.EquivocationAmino): _66.Equivocation;
                toAmino(message: _66.Equivocation): _66.EquivocationAmino;
                fromAminoMsg(object: _66.EquivocationAminoMsg): _66.Equivocation;
                toAminoMsg(message: _66.Equivocation): _66.EquivocationAminoMsg;
                fromProtoMsg(message: _66.EquivocationProtoMsg): _66.Equivocation;
                toProto(message: _66.Equivocation): Uint8Array;
                toProtoMsg(message: _66.Equivocation): _66.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _72.QueryAllowanceRequest): Promise<_72.QueryAllowanceResponse>;
                allowances(request: _72.QueryAllowancesRequest): Promise<_72.QueryAllowancesResponse>;
                allowancesByGranter(request: _72.QueryAllowancesByGranterRequest): Promise<_72.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _73.MsgGrantAllowance) => _73.MsgGrantAllowanceAmino;
                    fromAmino: (object: _73.MsgGrantAllowanceAmino) => _73.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _73.MsgRevokeAllowance) => _73.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _73.MsgRevokeAllowanceAmino) => _73.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _73.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgGrantAllowance;
                fromPartial(object: Partial<_73.MsgGrantAllowance>): _73.MsgGrantAllowance;
                fromAmino(object: _73.MsgGrantAllowanceAmino): _73.MsgGrantAllowance;
                toAmino(message: _73.MsgGrantAllowance): _73.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _73.MsgGrantAllowanceAminoMsg): _73.MsgGrantAllowance;
                toAminoMsg(message: _73.MsgGrantAllowance): _73.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _73.MsgGrantAllowanceProtoMsg): _73.MsgGrantAllowance;
                toProto(message: _73.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _73.MsgGrantAllowance): _73.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _73.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_73.MsgGrantAllowanceResponse>): _73.MsgGrantAllowanceResponse;
                fromAmino(_: _73.MsgGrantAllowanceResponseAmino): _73.MsgGrantAllowanceResponse;
                toAmino(_: _73.MsgGrantAllowanceResponse): _73.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _73.MsgGrantAllowanceResponseAminoMsg): _73.MsgGrantAllowanceResponse;
                toAminoMsg(message: _73.MsgGrantAllowanceResponse): _73.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _73.MsgGrantAllowanceResponseProtoMsg): _73.MsgGrantAllowanceResponse;
                toProto(message: _73.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _73.MsgGrantAllowanceResponse): _73.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _73.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgRevokeAllowance;
                fromPartial(object: Partial<_73.MsgRevokeAllowance>): _73.MsgRevokeAllowance;
                fromAmino(object: _73.MsgRevokeAllowanceAmino): _73.MsgRevokeAllowance;
                toAmino(message: _73.MsgRevokeAllowance): _73.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _73.MsgRevokeAllowanceAminoMsg): _73.MsgRevokeAllowance;
                toAminoMsg(message: _73.MsgRevokeAllowance): _73.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _73.MsgRevokeAllowanceProtoMsg): _73.MsgRevokeAllowance;
                toProto(message: _73.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _73.MsgRevokeAllowance): _73.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _73.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_73.MsgRevokeAllowanceResponse>): _73.MsgRevokeAllowanceResponse;
                fromAmino(_: _73.MsgRevokeAllowanceResponseAmino): _73.MsgRevokeAllowanceResponse;
                toAmino(_: _73.MsgRevokeAllowanceResponse): _73.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _73.MsgRevokeAllowanceResponseAminoMsg): _73.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _73.MsgRevokeAllowanceResponse): _73.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _73.MsgRevokeAllowanceResponseProtoMsg): _73.MsgRevokeAllowanceResponse;
                toProto(message: _73.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _73.MsgRevokeAllowanceResponse): _73.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _70.BasicAllowance | _70.PeriodicAllowance | _70.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _72.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowanceRequest;
                fromPartial(object: Partial<_72.QueryAllowanceRequest>): _72.QueryAllowanceRequest;
                fromAmino(object: _72.QueryAllowanceRequestAmino): _72.QueryAllowanceRequest;
                toAmino(message: _72.QueryAllowanceRequest): _72.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _72.QueryAllowanceRequestAminoMsg): _72.QueryAllowanceRequest;
                toAminoMsg(message: _72.QueryAllowanceRequest): _72.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _72.QueryAllowanceRequestProtoMsg): _72.QueryAllowanceRequest;
                toProto(message: _72.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _72.QueryAllowanceRequest): _72.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _72.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowanceResponse;
                fromPartial(object: Partial<_72.QueryAllowanceResponse>): _72.QueryAllowanceResponse;
                fromAmino(object: _72.QueryAllowanceResponseAmino): _72.QueryAllowanceResponse;
                toAmino(message: _72.QueryAllowanceResponse): _72.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _72.QueryAllowanceResponseAminoMsg): _72.QueryAllowanceResponse;
                toAminoMsg(message: _72.QueryAllowanceResponse): _72.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _72.QueryAllowanceResponseProtoMsg): _72.QueryAllowanceResponse;
                toProto(message: _72.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _72.QueryAllowanceResponse): _72.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _72.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowancesRequest;
                fromPartial(object: Partial<_72.QueryAllowancesRequest>): _72.QueryAllowancesRequest;
                fromAmino(object: _72.QueryAllowancesRequestAmino): _72.QueryAllowancesRequest;
                toAmino(message: _72.QueryAllowancesRequest): _72.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _72.QueryAllowancesRequestAminoMsg): _72.QueryAllowancesRequest;
                toAminoMsg(message: _72.QueryAllowancesRequest): _72.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _72.QueryAllowancesRequestProtoMsg): _72.QueryAllowancesRequest;
                toProto(message: _72.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _72.QueryAllowancesRequest): _72.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _72.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowancesResponse;
                fromPartial(object: Partial<_72.QueryAllowancesResponse>): _72.QueryAllowancesResponse;
                fromAmino(object: _72.QueryAllowancesResponseAmino): _72.QueryAllowancesResponse;
                toAmino(message: _72.QueryAllowancesResponse): _72.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _72.QueryAllowancesResponseAminoMsg): _72.QueryAllowancesResponse;
                toAminoMsg(message: _72.QueryAllowancesResponse): _72.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _72.QueryAllowancesResponseProtoMsg): _72.QueryAllowancesResponse;
                toProto(message: _72.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _72.QueryAllowancesResponse): _72.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _72.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_72.QueryAllowancesByGranterRequest>): _72.QueryAllowancesByGranterRequest;
                fromAmino(object: _72.QueryAllowancesByGranterRequestAmino): _72.QueryAllowancesByGranterRequest;
                toAmino(message: _72.QueryAllowancesByGranterRequest): _72.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _72.QueryAllowancesByGranterRequestAminoMsg): _72.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _72.QueryAllowancesByGranterRequest): _72.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _72.QueryAllowancesByGranterRequestProtoMsg): _72.QueryAllowancesByGranterRequest;
                toProto(message: _72.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _72.QueryAllowancesByGranterRequest): _72.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _72.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_72.QueryAllowancesByGranterResponse>): _72.QueryAllowancesByGranterResponse;
                fromAmino(object: _72.QueryAllowancesByGranterResponseAmino): _72.QueryAllowancesByGranterResponse;
                toAmino(message: _72.QueryAllowancesByGranterResponse): _72.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _72.QueryAllowancesByGranterResponseAminoMsg): _72.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _72.QueryAllowancesByGranterResponse): _72.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _72.QueryAllowancesByGranterResponseProtoMsg): _72.QueryAllowancesByGranterResponse;
                toProto(message: _72.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _72.QueryAllowancesByGranterResponse): _72.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _70.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.BasicAllowance;
                fromPartial(object: Partial<_70.BasicAllowance>): _70.BasicAllowance;
                fromAmino(object: _70.BasicAllowanceAmino): _70.BasicAllowance;
                toAmino(message: _70.BasicAllowance): _70.BasicAllowanceAmino;
                fromAminoMsg(object: _70.BasicAllowanceAminoMsg): _70.BasicAllowance;
                toAminoMsg(message: _70.BasicAllowance): _70.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _70.BasicAllowanceProtoMsg): _70.BasicAllowance;
                toProto(message: _70.BasicAllowance): Uint8Array;
                toProtoMsg(message: _70.BasicAllowance): _70.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _70.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.PeriodicAllowance;
                fromPartial(object: Partial<_70.PeriodicAllowance>): _70.PeriodicAllowance;
                fromAmino(object: _70.PeriodicAllowanceAmino): _70.PeriodicAllowance;
                toAmino(message: _70.PeriodicAllowance): _70.PeriodicAllowanceAmino;
                fromAminoMsg(object: _70.PeriodicAllowanceAminoMsg): _70.PeriodicAllowance;
                toAminoMsg(message: _70.PeriodicAllowance): _70.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _70.PeriodicAllowanceProtoMsg): _70.PeriodicAllowance;
                toProto(message: _70.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _70.PeriodicAllowance): _70.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _70.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.AllowedMsgAllowance;
                fromPartial(object: Partial<_70.AllowedMsgAllowance>): _70.AllowedMsgAllowance;
                fromAmino(object: _70.AllowedMsgAllowanceAmino): _70.AllowedMsgAllowance;
                toAmino(message: _70.AllowedMsgAllowance): _70.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _70.AllowedMsgAllowanceAminoMsg): _70.AllowedMsgAllowance;
                toAminoMsg(message: _70.AllowedMsgAllowance): _70.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _70.AllowedMsgAllowanceProtoMsg): _70.AllowedMsgAllowance;
                toProto(message: _70.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _70.AllowedMsgAllowance): _70.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _70.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Grant;
                fromPartial(object: Partial<_70.Grant>): _70.Grant;
                fromAmino(object: _70.GrantAmino): _70.Grant;
                toAmino(message: _70.Grant): _70.GrantAmino;
                fromAminoMsg(object: _70.GrantAminoMsg): _70.Grant;
                toAminoMsg(message: _70.Grant): _70.GrantAminoMsg;
                fromProtoMsg(message: _70.GrantProtoMsg): _70.Grant;
                toProto(message: _70.Grant): Uint8Array;
                toProtoMsg(message: _70.Grant): _70.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _74.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.GenesisState;
                fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
                fromAmino(object: _74.GenesisStateAmino): _74.GenesisState;
                toAmino(message: _74.GenesisState): _74.GenesisStateAmino;
                fromAminoMsg(object: _74.GenesisStateAminoMsg): _74.GenesisState;
                toAminoMsg(message: _74.GenesisState): _74.GenesisStateAminoMsg;
                fromProtoMsg(message: _74.GenesisStateProtoMsg): _74.GenesisState;
                toProto(message: _74.GenesisState): Uint8Array;
                toProtoMsg(message: _74.GenesisState): _74.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _77.QueryProposalRequest): Promise<_77.QueryProposalResponse>;
                proposals(request: _77.QueryProposalsRequest): Promise<_77.QueryProposalsResponse>;
                vote(request: _77.QueryVoteRequest): Promise<_77.QueryVoteResponse>;
                votes(request: _77.QueryVotesRequest): Promise<_77.QueryVotesResponse>;
                params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                deposit(request: _77.QueryDepositRequest): Promise<_77.QueryDepositResponse>;
                deposits(request: _77.QueryDepositsRequest): Promise<_77.QueryDepositsResponse>;
                tallyResult(request: _77.QueryTallyResultRequest): Promise<_77.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _78.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _78.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _78.MsgExecLegacyContent;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _78.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _78.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _78.MsgExecLegacyContent;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _78.MsgSubmitProposal) => _78.MsgSubmitProposalAmino;
                    fromAmino: (object: _78.MsgSubmitProposalAmino) => _78.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _78.MsgExecLegacyContent) => _78.MsgExecLegacyContentAmino;
                    fromAmino: (object: _78.MsgExecLegacyContentAmino) => _78.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _78.MsgVote) => _78.MsgVoteAmino;
                    fromAmino: (object: _78.MsgVoteAmino) => _78.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _78.MsgVoteWeighted) => _78.MsgVoteWeightedAmino;
                    fromAmino: (object: _78.MsgVoteWeightedAmino) => _78.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _78.MsgDeposit) => _78.MsgDepositAmino;
                    fromAmino: (object: _78.MsgDepositAmino) => _78.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _78.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgSubmitProposal;
                fromPartial(object: Partial<_78.MsgSubmitProposal>): _78.MsgSubmitProposal;
                fromAmino(object: _78.MsgSubmitProposalAmino): _78.MsgSubmitProposal;
                toAmino(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalAmino;
                fromAminoMsg(object: _78.MsgSubmitProposalAminoMsg): _78.MsgSubmitProposal;
                toAminoMsg(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _78.MsgSubmitProposalProtoMsg): _78.MsgSubmitProposal;
                toProto(message: _78.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _78.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_78.MsgSubmitProposalResponse>): _78.MsgSubmitProposalResponse;
                fromAmino(object: _78.MsgSubmitProposalResponseAmino): _78.MsgSubmitProposalResponse;
                toAmino(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _78.MsgSubmitProposalResponseAminoMsg): _78.MsgSubmitProposalResponse;
                toAminoMsg(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _78.MsgSubmitProposalResponseProtoMsg): _78.MsgSubmitProposalResponse;
                toProto(message: _78.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _78.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgExecLegacyContent;
                fromPartial(object: Partial<_78.MsgExecLegacyContent>): _78.MsgExecLegacyContent;
                fromAmino(object: _78.MsgExecLegacyContentAmino): _78.MsgExecLegacyContent;
                toAmino(message: _78.MsgExecLegacyContent): _78.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _78.MsgExecLegacyContentAminoMsg): _78.MsgExecLegacyContent;
                toAminoMsg(message: _78.MsgExecLegacyContent): _78.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _78.MsgExecLegacyContentProtoMsg): _78.MsgExecLegacyContent;
                toProto(message: _78.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _78.MsgExecLegacyContent): _78.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _78.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_78.MsgExecLegacyContentResponse>): _78.MsgExecLegacyContentResponse;
                fromAmino(_: _78.MsgExecLegacyContentResponseAmino): _78.MsgExecLegacyContentResponse;
                toAmino(_: _78.MsgExecLegacyContentResponse): _78.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _78.MsgExecLegacyContentResponseAminoMsg): _78.MsgExecLegacyContentResponse;
                toAminoMsg(message: _78.MsgExecLegacyContentResponse): _78.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _78.MsgExecLegacyContentResponseProtoMsg): _78.MsgExecLegacyContentResponse;
                toProto(message: _78.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _78.MsgExecLegacyContentResponse): _78.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _78.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgVote;
                fromPartial(object: Partial<_78.MsgVote>): _78.MsgVote;
                fromAmino(object: _78.MsgVoteAmino): _78.MsgVote;
                toAmino(message: _78.MsgVote): _78.MsgVoteAmino;
                fromAminoMsg(object: _78.MsgVoteAminoMsg): _78.MsgVote;
                toAminoMsg(message: _78.MsgVote): _78.MsgVoteAminoMsg;
                fromProtoMsg(message: _78.MsgVoteProtoMsg): _78.MsgVote;
                toProto(message: _78.MsgVote): Uint8Array;
                toProtoMsg(message: _78.MsgVote): _78.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _78.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgVoteResponse;
                fromPartial(_: Partial<_78.MsgVoteResponse>): _78.MsgVoteResponse;
                fromAmino(_: _78.MsgVoteResponseAmino): _78.MsgVoteResponse;
                toAmino(_: _78.MsgVoteResponse): _78.MsgVoteResponseAmino;
                fromAminoMsg(object: _78.MsgVoteResponseAminoMsg): _78.MsgVoteResponse;
                toAminoMsg(message: _78.MsgVoteResponse): _78.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _78.MsgVoteResponseProtoMsg): _78.MsgVoteResponse;
                toProto(message: _78.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _78.MsgVoteResponse): _78.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _78.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgVoteWeighted;
                fromPartial(object: Partial<_78.MsgVoteWeighted>): _78.MsgVoteWeighted;
                fromAmino(object: _78.MsgVoteWeightedAmino): _78.MsgVoteWeighted;
                toAmino(message: _78.MsgVoteWeighted): _78.MsgVoteWeightedAmino;
                fromAminoMsg(object: _78.MsgVoteWeightedAminoMsg): _78.MsgVoteWeighted;
                toAminoMsg(message: _78.MsgVoteWeighted): _78.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _78.MsgVoteWeightedProtoMsg): _78.MsgVoteWeighted;
                toProto(message: _78.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _78.MsgVoteWeighted): _78.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _78.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_78.MsgVoteWeightedResponse>): _78.MsgVoteWeightedResponse;
                fromAmino(_: _78.MsgVoteWeightedResponseAmino): _78.MsgVoteWeightedResponse;
                toAmino(_: _78.MsgVoteWeightedResponse): _78.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _78.MsgVoteWeightedResponseAminoMsg): _78.MsgVoteWeightedResponse;
                toAminoMsg(message: _78.MsgVoteWeightedResponse): _78.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _78.MsgVoteWeightedResponseProtoMsg): _78.MsgVoteWeightedResponse;
                toProto(message: _78.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _78.MsgVoteWeightedResponse): _78.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _78.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgDeposit;
                fromPartial(object: Partial<_78.MsgDeposit>): _78.MsgDeposit;
                fromAmino(object: _78.MsgDepositAmino): _78.MsgDeposit;
                toAmino(message: _78.MsgDeposit): _78.MsgDepositAmino;
                fromAminoMsg(object: _78.MsgDepositAminoMsg): _78.MsgDeposit;
                toAminoMsg(message: _78.MsgDeposit): _78.MsgDepositAminoMsg;
                fromProtoMsg(message: _78.MsgDepositProtoMsg): _78.MsgDeposit;
                toProto(message: _78.MsgDeposit): Uint8Array;
                toProtoMsg(message: _78.MsgDeposit): _78.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _78.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgDepositResponse;
                fromPartial(_: Partial<_78.MsgDepositResponse>): _78.MsgDepositResponse;
                fromAmino(_: _78.MsgDepositResponseAmino): _78.MsgDepositResponse;
                toAmino(_: _78.MsgDepositResponse): _78.MsgDepositResponseAmino;
                fromAminoMsg(object: _78.MsgDepositResponseAminoMsg): _78.MsgDepositResponse;
                toAminoMsg(message: _78.MsgDepositResponse): _78.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _78.MsgDepositResponseProtoMsg): _78.MsgDepositResponse;
                toProto(message: _78.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _78.MsgDepositResponse): _78.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _80.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _77.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalRequest;
                fromPartial(object: Partial<_77.QueryProposalRequest>): _77.QueryProposalRequest;
                fromAmino(object: _77.QueryProposalRequestAmino): _77.QueryProposalRequest;
                toAmino(message: _77.QueryProposalRequest): _77.QueryProposalRequestAmino;
                fromAminoMsg(object: _77.QueryProposalRequestAminoMsg): _77.QueryProposalRequest;
                toAminoMsg(message: _77.QueryProposalRequest): _77.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _77.QueryProposalRequestProtoMsg): _77.QueryProposalRequest;
                toProto(message: _77.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _77.QueryProposalRequest): _77.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _77.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalResponse;
                fromPartial(object: Partial<_77.QueryProposalResponse>): _77.QueryProposalResponse;
                fromAmino(object: _77.QueryProposalResponseAmino): _77.QueryProposalResponse;
                toAmino(message: _77.QueryProposalResponse): _77.QueryProposalResponseAmino;
                fromAminoMsg(object: _77.QueryProposalResponseAminoMsg): _77.QueryProposalResponse;
                toAminoMsg(message: _77.QueryProposalResponse): _77.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _77.QueryProposalResponseProtoMsg): _77.QueryProposalResponse;
                toProto(message: _77.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _77.QueryProposalResponse): _77.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _77.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalsRequest;
                fromPartial(object: Partial<_77.QueryProposalsRequest>): _77.QueryProposalsRequest;
                fromAmino(object: _77.QueryProposalsRequestAmino): _77.QueryProposalsRequest;
                toAmino(message: _77.QueryProposalsRequest): _77.QueryProposalsRequestAmino;
                fromAminoMsg(object: _77.QueryProposalsRequestAminoMsg): _77.QueryProposalsRequest;
                toAminoMsg(message: _77.QueryProposalsRequest): _77.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryProposalsRequestProtoMsg): _77.QueryProposalsRequest;
                toProto(message: _77.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryProposalsRequest): _77.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _77.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalsResponse;
                fromPartial(object: Partial<_77.QueryProposalsResponse>): _77.QueryProposalsResponse;
                fromAmino(object: _77.QueryProposalsResponseAmino): _77.QueryProposalsResponse;
                toAmino(message: _77.QueryProposalsResponse): _77.QueryProposalsResponseAmino;
                fromAminoMsg(object: _77.QueryProposalsResponseAminoMsg): _77.QueryProposalsResponse;
                toAminoMsg(message: _77.QueryProposalsResponse): _77.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryProposalsResponseProtoMsg): _77.QueryProposalsResponse;
                toProto(message: _77.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryProposalsResponse): _77.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _77.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVoteRequest;
                fromPartial(object: Partial<_77.QueryVoteRequest>): _77.QueryVoteRequest;
                fromAmino(object: _77.QueryVoteRequestAmino): _77.QueryVoteRequest;
                toAmino(message: _77.QueryVoteRequest): _77.QueryVoteRequestAmino;
                fromAminoMsg(object: _77.QueryVoteRequestAminoMsg): _77.QueryVoteRequest;
                toAminoMsg(message: _77.QueryVoteRequest): _77.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _77.QueryVoteRequestProtoMsg): _77.QueryVoteRequest;
                toProto(message: _77.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _77.QueryVoteRequest): _77.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _77.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVoteResponse;
                fromPartial(object: Partial<_77.QueryVoteResponse>): _77.QueryVoteResponse;
                fromAmino(object: _77.QueryVoteResponseAmino): _77.QueryVoteResponse;
                toAmino(message: _77.QueryVoteResponse): _77.QueryVoteResponseAmino;
                fromAminoMsg(object: _77.QueryVoteResponseAminoMsg): _77.QueryVoteResponse;
                toAminoMsg(message: _77.QueryVoteResponse): _77.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _77.QueryVoteResponseProtoMsg): _77.QueryVoteResponse;
                toProto(message: _77.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _77.QueryVoteResponse): _77.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _77.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVotesRequest;
                fromPartial(object: Partial<_77.QueryVotesRequest>): _77.QueryVotesRequest;
                fromAmino(object: _77.QueryVotesRequestAmino): _77.QueryVotesRequest;
                toAmino(message: _77.QueryVotesRequest): _77.QueryVotesRequestAmino;
                fromAminoMsg(object: _77.QueryVotesRequestAminoMsg): _77.QueryVotesRequest;
                toAminoMsg(message: _77.QueryVotesRequest): _77.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _77.QueryVotesRequestProtoMsg): _77.QueryVotesRequest;
                toProto(message: _77.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _77.QueryVotesRequest): _77.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _77.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVotesResponse;
                fromPartial(object: Partial<_77.QueryVotesResponse>): _77.QueryVotesResponse;
                fromAmino(object: _77.QueryVotesResponseAmino): _77.QueryVotesResponse;
                toAmino(message: _77.QueryVotesResponse): _77.QueryVotesResponseAmino;
                fromAminoMsg(object: _77.QueryVotesResponseAminoMsg): _77.QueryVotesResponse;
                toAminoMsg(message: _77.QueryVotesResponse): _77.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _77.QueryVotesResponseProtoMsg): _77.QueryVotesResponse;
                toProto(message: _77.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _77.QueryVotesResponse): _77.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _77.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryParamsRequest;
                fromPartial(object: Partial<_77.QueryParamsRequest>): _77.QueryParamsRequest;
                fromAmino(object: _77.QueryParamsRequestAmino): _77.QueryParamsRequest;
                toAmino(message: _77.QueryParamsRequest): _77.QueryParamsRequestAmino;
                fromAminoMsg(object: _77.QueryParamsRequestAminoMsg): _77.QueryParamsRequest;
                toAminoMsg(message: _77.QueryParamsRequest): _77.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryParamsRequestProtoMsg): _77.QueryParamsRequest;
                toProto(message: _77.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryParamsRequest): _77.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _77.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryParamsResponse;
                fromPartial(object: Partial<_77.QueryParamsResponse>): _77.QueryParamsResponse;
                fromAmino(object: _77.QueryParamsResponseAmino): _77.QueryParamsResponse;
                toAmino(message: _77.QueryParamsResponse): _77.QueryParamsResponseAmino;
                fromAminoMsg(object: _77.QueryParamsResponseAminoMsg): _77.QueryParamsResponse;
                toAminoMsg(message: _77.QueryParamsResponse): _77.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryParamsResponseProtoMsg): _77.QueryParamsResponse;
                toProto(message: _77.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryParamsResponse): _77.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _77.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositRequest;
                fromPartial(object: Partial<_77.QueryDepositRequest>): _77.QueryDepositRequest;
                fromAmino(object: _77.QueryDepositRequestAmino): _77.QueryDepositRequest;
                toAmino(message: _77.QueryDepositRequest): _77.QueryDepositRequestAmino;
                fromAminoMsg(object: _77.QueryDepositRequestAminoMsg): _77.QueryDepositRequest;
                toAminoMsg(message: _77.QueryDepositRequest): _77.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _77.QueryDepositRequestProtoMsg): _77.QueryDepositRequest;
                toProto(message: _77.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _77.QueryDepositRequest): _77.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _77.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositResponse;
                fromPartial(object: Partial<_77.QueryDepositResponse>): _77.QueryDepositResponse;
                fromAmino(object: _77.QueryDepositResponseAmino): _77.QueryDepositResponse;
                toAmino(message: _77.QueryDepositResponse): _77.QueryDepositResponseAmino;
                fromAminoMsg(object: _77.QueryDepositResponseAminoMsg): _77.QueryDepositResponse;
                toAminoMsg(message: _77.QueryDepositResponse): _77.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _77.QueryDepositResponseProtoMsg): _77.QueryDepositResponse;
                toProto(message: _77.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _77.QueryDepositResponse): _77.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _77.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositsRequest;
                fromPartial(object: Partial<_77.QueryDepositsRequest>): _77.QueryDepositsRequest;
                fromAmino(object: _77.QueryDepositsRequestAmino): _77.QueryDepositsRequest;
                toAmino(message: _77.QueryDepositsRequest): _77.QueryDepositsRequestAmino;
                fromAminoMsg(object: _77.QueryDepositsRequestAminoMsg): _77.QueryDepositsRequest;
                toAminoMsg(message: _77.QueryDepositsRequest): _77.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryDepositsRequestProtoMsg): _77.QueryDepositsRequest;
                toProto(message: _77.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryDepositsRequest): _77.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _77.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositsResponse;
                fromPartial(object: Partial<_77.QueryDepositsResponse>): _77.QueryDepositsResponse;
                fromAmino(object: _77.QueryDepositsResponseAmino): _77.QueryDepositsResponse;
                toAmino(message: _77.QueryDepositsResponse): _77.QueryDepositsResponseAmino;
                fromAminoMsg(object: _77.QueryDepositsResponseAminoMsg): _77.QueryDepositsResponse;
                toAminoMsg(message: _77.QueryDepositsResponse): _77.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryDepositsResponseProtoMsg): _77.QueryDepositsResponse;
                toProto(message: _77.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryDepositsResponse): _77.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _77.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryTallyResultRequest;
                fromPartial(object: Partial<_77.QueryTallyResultRequest>): _77.QueryTallyResultRequest;
                fromAmino(object: _77.QueryTallyResultRequestAmino): _77.QueryTallyResultRequest;
                toAmino(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _77.QueryTallyResultRequestAminoMsg): _77.QueryTallyResultRequest;
                toAminoMsg(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _77.QueryTallyResultRequestProtoMsg): _77.QueryTallyResultRequest;
                toProto(message: _77.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _77.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryTallyResultResponse;
                fromPartial(object: Partial<_77.QueryTallyResultResponse>): _77.QueryTallyResultResponse;
                fromAmino(object: _77.QueryTallyResultResponseAmino): _77.QueryTallyResultResponse;
                toAmino(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _77.QueryTallyResultResponseAminoMsg): _77.QueryTallyResultResponse;
                toAminoMsg(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _77.QueryTallyResultResponseProtoMsg): _77.QueryTallyResultResponse;
                toProto(message: _77.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _76.VoteOption;
            voteOptionToJSON(object: _76.VoteOption): string;
            proposalStatusFromJSON(object: any): _76.ProposalStatus;
            proposalStatusToJSON(object: _76.ProposalStatus): string;
            VoteOption: typeof _76.VoteOption;
            VoteOptionSDKType: typeof _76.VoteOption;
            VoteOptionAmino: typeof _76.VoteOption;
            ProposalStatus: typeof _76.ProposalStatus;
            ProposalStatusSDKType: typeof _76.ProposalStatus;
            ProposalStatusAmino: typeof _76.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _76.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.WeightedVoteOption;
                fromPartial(object: Partial<_76.WeightedVoteOption>): _76.WeightedVoteOption;
                fromAmino(object: _76.WeightedVoteOptionAmino): _76.WeightedVoteOption;
                toAmino(message: _76.WeightedVoteOption): _76.WeightedVoteOptionAmino;
                fromAminoMsg(object: _76.WeightedVoteOptionAminoMsg): _76.WeightedVoteOption;
                toAminoMsg(message: _76.WeightedVoteOption): _76.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _76.WeightedVoteOptionProtoMsg): _76.WeightedVoteOption;
                toProto(message: _76.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _76.WeightedVoteOption): _76.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _76.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Deposit;
                fromPartial(object: Partial<_76.Deposit>): _76.Deposit;
                fromAmino(object: _76.DepositAmino): _76.Deposit;
                toAmino(message: _76.Deposit): _76.DepositAmino;
                fromAminoMsg(object: _76.DepositAminoMsg): _76.Deposit;
                toAminoMsg(message: _76.Deposit): _76.DepositAminoMsg;
                fromProtoMsg(message: _76.DepositProtoMsg): _76.Deposit;
                toProto(message: _76.Deposit): Uint8Array;
                toProtoMsg(message: _76.Deposit): _76.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _76.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Proposal;
                fromPartial(object: Partial<_76.Proposal>): _76.Proposal;
                fromAmino(object: _76.ProposalAmino): _76.Proposal;
                toAmino(message: _76.Proposal): _76.ProposalAmino;
                fromAminoMsg(object: _76.ProposalAminoMsg): _76.Proposal;
                toAminoMsg(message: _76.Proposal): _76.ProposalAminoMsg;
                fromProtoMsg(message: _76.ProposalProtoMsg): _76.Proposal;
                toProto(message: _76.Proposal): Uint8Array;
                toProtoMsg(message: _76.Proposal): _76.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _76.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.TallyResult;
                fromPartial(object: Partial<_76.TallyResult>): _76.TallyResult;
                fromAmino(object: _76.TallyResultAmino): _76.TallyResult;
                toAmino(message: _76.TallyResult): _76.TallyResultAmino;
                fromAminoMsg(object: _76.TallyResultAminoMsg): _76.TallyResult;
                toAminoMsg(message: _76.TallyResult): _76.TallyResultAminoMsg;
                fromProtoMsg(message: _76.TallyResultProtoMsg): _76.TallyResult;
                toProto(message: _76.TallyResult): Uint8Array;
                toProtoMsg(message: _76.TallyResult): _76.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _76.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Vote;
                fromPartial(object: Partial<_76.Vote>): _76.Vote;
                fromAmino(object: _76.VoteAmino): _76.Vote;
                toAmino(message: _76.Vote): _76.VoteAmino;
                fromAminoMsg(object: _76.VoteAminoMsg): _76.Vote;
                toAminoMsg(message: _76.Vote): _76.VoteAminoMsg;
                fromProtoMsg(message: _76.VoteProtoMsg): _76.Vote;
                toProto(message: _76.Vote): Uint8Array;
                toProtoMsg(message: _76.Vote): _76.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _76.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.DepositParams;
                fromPartial(object: Partial<_76.DepositParams>): _76.DepositParams;
                fromAmino(object: _76.DepositParamsAmino): _76.DepositParams;
                toAmino(message: _76.DepositParams): _76.DepositParamsAmino;
                fromAminoMsg(object: _76.DepositParamsAminoMsg): _76.DepositParams;
                toAminoMsg(message: _76.DepositParams): _76.DepositParamsAminoMsg;
                fromProtoMsg(message: _76.DepositParamsProtoMsg): _76.DepositParams;
                toProto(message: _76.DepositParams): Uint8Array;
                toProtoMsg(message: _76.DepositParams): _76.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _76.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.VotingParams;
                fromPartial(object: Partial<_76.VotingParams>): _76.VotingParams;
                fromAmino(object: _76.VotingParamsAmino): _76.VotingParams;
                toAmino(message: _76.VotingParams): _76.VotingParamsAmino;
                fromAminoMsg(object: _76.VotingParamsAminoMsg): _76.VotingParams;
                toAminoMsg(message: _76.VotingParams): _76.VotingParamsAminoMsg;
                fromProtoMsg(message: _76.VotingParamsProtoMsg): _76.VotingParams;
                toProto(message: _76.VotingParams): Uint8Array;
                toProtoMsg(message: _76.VotingParams): _76.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _76.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.TallyParams;
                fromPartial(object: Partial<_76.TallyParams>): _76.TallyParams;
                fromAmino(object: _76.TallyParamsAmino): _76.TallyParams;
                toAmino(message: _76.TallyParams): _76.TallyParamsAmino;
                fromAminoMsg(object: _76.TallyParamsAminoMsg): _76.TallyParams;
                toAminoMsg(message: _76.TallyParams): _76.TallyParamsAminoMsg;
                fromProtoMsg(message: _76.TallyParamsProtoMsg): _76.TallyParams;
                toProto(message: _76.TallyParams): Uint8Array;
                toProtoMsg(message: _76.TallyParams): _76.TallyParamsProtoMsg;
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
        };
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
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
            LCDQueryClient: typeof _200.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _82.MsgSubmitProposal): {
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
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _82.MsgSubmitProposal) => _82.MsgSubmitProposalAmino;
                    fromAmino: (object: _82.MsgSubmitProposalAmino) => _82.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _82.MsgVote) => _82.MsgVoteAmino;
                    fromAmino: (object: _82.MsgVoteAmino) => _82.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _82.MsgVoteWeighted) => _82.MsgVoteWeightedAmino;
                    fromAmino: (object: _82.MsgVoteWeightedAmino) => _82.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
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
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _80.TextProposal;
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
            TextProposal: {
                typeUrl: string;
                encode(message: _80.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.TextProposal;
                fromPartial(object: Partial<_80.TextProposal>): _80.TextProposal;
                fromAmino(object: _80.TextProposalAmino): _80.TextProposal;
                toAmino(message: _80.TextProposal): _80.TextProposalAmino;
                fromAminoMsg(object: _80.TextProposalAminoMsg): _80.TextProposal;
                toAminoMsg(message: _80.TextProposal): _80.TextProposalAminoMsg;
                fromProtoMsg(message: _80.TextProposalProtoMsg): _80.TextProposal;
                toProto(message: _80.TextProposal): Uint8Array;
                toProtoMsg(message: _80.TextProposal): _80.TextProposalProtoMsg;
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
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _85.QueryGroupInfoRequest): Promise<_85.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _85.QueryGroupPolicyInfoRequest): Promise<_85.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _85.QueryGroupMembersRequest): Promise<_85.QueryGroupMembersResponse>;
                groupsByAdmin(request: _85.QueryGroupsByAdminRequest): Promise<_85.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _85.QueryGroupPoliciesByGroupRequest): Promise<_85.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _85.QueryGroupPoliciesByAdminRequest): Promise<_85.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _85.QueryProposalRequest): Promise<_85.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _85.QueryProposalsByGroupPolicyRequest): Promise<_85.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _85.QueryVoteByProposalVoterRequest): Promise<_85.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _85.QueryVotesByProposalRequest): Promise<_85.QueryVotesByProposalResponse>;
                votesByVoter(request: _85.QueryVotesByVoterRequest): Promise<_85.QueryVotesByVoterResponse>;
                groupsByMember(request: _85.QueryGroupsByMemberRequest): Promise<_85.QueryGroupsByMemberResponse>;
                tallyResult(request: _85.QueryTallyResultRequest): Promise<_85.QueryTallyResultResponse>;
                groups(request?: _85.QueryGroupsRequest): Promise<_85.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _201.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _86.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _86.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _86.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _86.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _86.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _86.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _86.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _86.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _86.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _86.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _86.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _86.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _86.MsgCreateGroup): {
                        typeUrl: string;
                        value: _86.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _86.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _86.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _86.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _86.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _86.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _86.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _86.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _86.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _86.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _86.MsgWithdrawProposal;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    exec(value: _86.MsgExec): {
                        typeUrl: string;
                        value: _86.MsgExec;
                    };
                    leaveGroup(value: _86.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _86.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _86.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _86.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _86.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _86.MsgCreateGroup): {
                        typeUrl: string;
                        value: _86.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _86.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _86.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _86.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _86.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _86.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _86.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _86.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _86.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _86.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _86.MsgWithdrawProposal;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    exec(value: _86.MsgExec): {
                        typeUrl: string;
                        value: _86.MsgExec;
                    };
                    leaveGroup(value: _86.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _86.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _86.MsgCreateGroup) => _86.MsgCreateGroupAmino;
                    fromAmino: (object: _86.MsgCreateGroupAmino) => _86.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupMembers) => _86.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _86.MsgUpdateGroupMembersAmino) => _86.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupAdmin) => _86.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _86.MsgUpdateGroupAdminAmino) => _86.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupMetadata) => _86.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _86.MsgUpdateGroupMetadataAmino) => _86.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _86.MsgCreateGroupPolicy) => _86.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _86.MsgCreateGroupPolicyAmino) => _86.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _86.MsgCreateGroupWithPolicy) => _86.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _86.MsgCreateGroupWithPolicyAmino) => _86.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupPolicyAdmin) => _86.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _86.MsgUpdateGroupPolicyAdminAmino) => _86.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupPolicyDecisionPolicy) => _86.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _86.MsgUpdateGroupPolicyDecisionPolicyAmino) => _86.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupPolicyMetadata) => _86.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _86.MsgUpdateGroupPolicyMetadataAmino) => _86.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _86.MsgSubmitProposal) => _86.MsgSubmitProposalAmino;
                    fromAmino: (object: _86.MsgSubmitProposalAmino) => _86.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _86.MsgWithdrawProposal) => _86.MsgWithdrawProposalAmino;
                    fromAmino: (object: _86.MsgWithdrawProposalAmino) => _86.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _86.MsgVote) => _86.MsgVoteAmino;
                    fromAmino: (object: _86.MsgVoteAmino) => _86.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _86.MsgExec) => _86.MsgExecAmino;
                    fromAmino: (object: _86.MsgExecAmino) => _86.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _86.MsgLeaveGroup) => _86.MsgLeaveGroupAmino;
                    fromAmino: (object: _86.MsgLeaveGroupAmino) => _86.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _87.VoteOption;
            voteOptionToJSON(object: _87.VoteOption): string;
            proposalStatusFromJSON(object: any): _87.ProposalStatus;
            proposalStatusToJSON(object: _87.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _87.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _87.ProposalExecutorResult): string;
            VoteOption: typeof _87.VoteOption;
            VoteOptionSDKType: typeof _87.VoteOption;
            VoteOptionAmino: typeof _87.VoteOption;
            ProposalStatus: typeof _87.ProposalStatus;
            ProposalStatusSDKType: typeof _87.ProposalStatus;
            ProposalStatusAmino: typeof _87.ProposalStatus;
            ProposalExecutorResult: typeof _87.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _87.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _87.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _87.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Member;
                fromPartial(object: Partial<_87.Member>): _87.Member;
                fromAmino(object: _87.MemberAmino): _87.Member;
                toAmino(message: _87.Member): _87.MemberAmino;
                fromAminoMsg(object: _87.MemberAminoMsg): _87.Member;
                toAminoMsg(message: _87.Member): _87.MemberAminoMsg;
                fromProtoMsg(message: _87.MemberProtoMsg): _87.Member;
                toProto(message: _87.Member): Uint8Array;
                toProtoMsg(message: _87.Member): _87.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _87.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MemberRequest;
                fromPartial(object: Partial<_87.MemberRequest>): _87.MemberRequest;
                fromAmino(object: _87.MemberRequestAmino): _87.MemberRequest;
                toAmino(message: _87.MemberRequest): _87.MemberRequestAmino;
                fromAminoMsg(object: _87.MemberRequestAminoMsg): _87.MemberRequest;
                toAminoMsg(message: _87.MemberRequest): _87.MemberRequestAminoMsg;
                fromProtoMsg(message: _87.MemberRequestProtoMsg): _87.MemberRequest;
                toProto(message: _87.MemberRequest): Uint8Array;
                toProtoMsg(message: _87.MemberRequest): _87.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _87.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_87.ThresholdDecisionPolicy>): _87.ThresholdDecisionPolicy;
                fromAmino(object: _87.ThresholdDecisionPolicyAmino): _87.ThresholdDecisionPolicy;
                toAmino(message: _87.ThresholdDecisionPolicy): _87.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _87.ThresholdDecisionPolicyAminoMsg): _87.ThresholdDecisionPolicy;
                toAminoMsg(message: _87.ThresholdDecisionPolicy): _87.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _87.ThresholdDecisionPolicyProtoMsg): _87.ThresholdDecisionPolicy;
                toProto(message: _87.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _87.ThresholdDecisionPolicy): _87.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _87.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.PercentageDecisionPolicy;
                fromPartial(object: Partial<_87.PercentageDecisionPolicy>): _87.PercentageDecisionPolicy;
                fromAmino(object: _87.PercentageDecisionPolicyAmino): _87.PercentageDecisionPolicy;
                toAmino(message: _87.PercentageDecisionPolicy): _87.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _87.PercentageDecisionPolicyAminoMsg): _87.PercentageDecisionPolicy;
                toAminoMsg(message: _87.PercentageDecisionPolicy): _87.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _87.PercentageDecisionPolicyProtoMsg): _87.PercentageDecisionPolicy;
                toProto(message: _87.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _87.PercentageDecisionPolicy): _87.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _87.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.DecisionPolicyWindows;
                fromPartial(object: Partial<_87.DecisionPolicyWindows>): _87.DecisionPolicyWindows;
                fromAmino(object: _87.DecisionPolicyWindowsAmino): _87.DecisionPolicyWindows;
                toAmino(message: _87.DecisionPolicyWindows): _87.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _87.DecisionPolicyWindowsAminoMsg): _87.DecisionPolicyWindows;
                toAminoMsg(message: _87.DecisionPolicyWindows): _87.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _87.DecisionPolicyWindowsProtoMsg): _87.DecisionPolicyWindows;
                toProto(message: _87.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _87.DecisionPolicyWindows): _87.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _87.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.GroupInfo;
                fromPartial(object: Partial<_87.GroupInfo>): _87.GroupInfo;
                fromAmino(object: _87.GroupInfoAmino): _87.GroupInfo;
                toAmino(message: _87.GroupInfo): _87.GroupInfoAmino;
                fromAminoMsg(object: _87.GroupInfoAminoMsg): _87.GroupInfo;
                toAminoMsg(message: _87.GroupInfo): _87.GroupInfoAminoMsg;
                fromProtoMsg(message: _87.GroupInfoProtoMsg): _87.GroupInfo;
                toProto(message: _87.GroupInfo): Uint8Array;
                toProtoMsg(message: _87.GroupInfo): _87.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _87.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.GroupMember;
                fromPartial(object: Partial<_87.GroupMember>): _87.GroupMember;
                fromAmino(object: _87.GroupMemberAmino): _87.GroupMember;
                toAmino(message: _87.GroupMember): _87.GroupMemberAmino;
                fromAminoMsg(object: _87.GroupMemberAminoMsg): _87.GroupMember;
                toAminoMsg(message: _87.GroupMember): _87.GroupMemberAminoMsg;
                fromProtoMsg(message: _87.GroupMemberProtoMsg): _87.GroupMember;
                toProto(message: _87.GroupMember): Uint8Array;
                toProtoMsg(message: _87.GroupMember): _87.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _87.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.GroupPolicyInfo;
                fromPartial(object: Partial<_87.GroupPolicyInfo>): _87.GroupPolicyInfo;
                fromAmino(object: _87.GroupPolicyInfoAmino): _87.GroupPolicyInfo;
                toAmino(message: _87.GroupPolicyInfo): _87.GroupPolicyInfoAmino;
                fromAminoMsg(object: _87.GroupPolicyInfoAminoMsg): _87.GroupPolicyInfo;
                toAminoMsg(message: _87.GroupPolicyInfo): _87.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _87.GroupPolicyInfoProtoMsg): _87.GroupPolicyInfo;
                toProto(message: _87.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _87.GroupPolicyInfo): _87.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _87.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Proposal;
                fromPartial(object: Partial<_87.Proposal>): _87.Proposal;
                fromAmino(object: _87.ProposalAmino): _87.Proposal;
                toAmino(message: _87.Proposal): _87.ProposalAmino;
                fromAminoMsg(object: _87.ProposalAminoMsg): _87.Proposal;
                toAminoMsg(message: _87.Proposal): _87.ProposalAminoMsg;
                fromProtoMsg(message: _87.ProposalProtoMsg): _87.Proposal;
                toProto(message: _87.Proposal): Uint8Array;
                toProtoMsg(message: _87.Proposal): _87.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _87.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.TallyResult;
                fromPartial(object: Partial<_87.TallyResult>): _87.TallyResult;
                fromAmino(object: _87.TallyResultAmino): _87.TallyResult;
                toAmino(message: _87.TallyResult): _87.TallyResultAmino;
                fromAminoMsg(object: _87.TallyResultAminoMsg): _87.TallyResult;
                toAminoMsg(message: _87.TallyResult): _87.TallyResultAminoMsg;
                fromProtoMsg(message: _87.TallyResultProtoMsg): _87.TallyResult;
                toProto(message: _87.TallyResult): Uint8Array;
                toProtoMsg(message: _87.TallyResult): _87.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _87.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Vote;
                fromPartial(object: Partial<_87.Vote>): _87.Vote;
                fromAmino(object: _87.VoteAmino): _87.Vote;
                toAmino(message: _87.Vote): _87.VoteAmino;
                fromAminoMsg(object: _87.VoteAminoMsg): _87.Vote;
                toAminoMsg(message: _87.Vote): _87.VoteAminoMsg;
                fromProtoMsg(message: _87.VoteProtoMsg): _87.Vote;
                toProto(message: _87.Vote): Uint8Array;
                toProtoMsg(message: _87.Vote): _87.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _86.Exec;
            execToJSON(object: _86.Exec): string;
            Exec: typeof _86.Exec;
            ExecSDKType: typeof _86.Exec;
            ExecAmino: typeof _86.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgCreateGroup;
                fromPartial(object: Partial<_86.MsgCreateGroup>): _86.MsgCreateGroup;
                fromAmino(object: _86.MsgCreateGroupAmino): _86.MsgCreateGroup;
                toAmino(message: _86.MsgCreateGroup): _86.MsgCreateGroupAmino;
                fromAminoMsg(object: _86.MsgCreateGroupAminoMsg): _86.MsgCreateGroup;
                toAminoMsg(message: _86.MsgCreateGroup): _86.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupProtoMsg): _86.MsgCreateGroup;
                toProto(message: _86.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroup): _86.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgCreateGroupResponse;
                fromPartial(object: Partial<_86.MsgCreateGroupResponse>): _86.MsgCreateGroupResponse;
                fromAmino(object: _86.MsgCreateGroupResponseAmino): _86.MsgCreateGroupResponse;
                toAmino(message: _86.MsgCreateGroupResponse): _86.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _86.MsgCreateGroupResponseAminoMsg): _86.MsgCreateGroupResponse;
                toAminoMsg(message: _86.MsgCreateGroupResponse): _86.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupResponseProtoMsg): _86.MsgCreateGroupResponse;
                toProto(message: _86.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroupResponse): _86.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_86.MsgUpdateGroupMembers>): _86.MsgUpdateGroupMembers;
                fromAmino(object: _86.MsgUpdateGroupMembersAmino): _86.MsgUpdateGroupMembers;
                toAmino(message: _86.MsgUpdateGroupMembers): _86.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupMembersAminoMsg): _86.MsgUpdateGroupMembers;
                toAminoMsg(message: _86.MsgUpdateGroupMembers): _86.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupMembersProtoMsg): _86.MsgUpdateGroupMembers;
                toProto(message: _86.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupMembers): _86.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupMembersResponse>): _86.MsgUpdateGroupMembersResponse;
                fromAmino(_: _86.MsgUpdateGroupMembersResponseAmino): _86.MsgUpdateGroupMembersResponse;
                toAmino(_: _86.MsgUpdateGroupMembersResponse): _86.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupMembersResponseAminoMsg): _86.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _86.MsgUpdateGroupMembersResponse): _86.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupMembersResponseProtoMsg): _86.MsgUpdateGroupMembersResponse;
                toProto(message: _86.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupMembersResponse): _86.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_86.MsgUpdateGroupAdmin>): _86.MsgUpdateGroupAdmin;
                fromAmino(object: _86.MsgUpdateGroupAdminAmino): _86.MsgUpdateGroupAdmin;
                toAmino(message: _86.MsgUpdateGroupAdmin): _86.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupAdminAminoMsg): _86.MsgUpdateGroupAdmin;
                toAminoMsg(message: _86.MsgUpdateGroupAdmin): _86.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupAdminProtoMsg): _86.MsgUpdateGroupAdmin;
                toProto(message: _86.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupAdmin): _86.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupAdminResponse>): _86.MsgUpdateGroupAdminResponse;
                fromAmino(_: _86.MsgUpdateGroupAdminResponseAmino): _86.MsgUpdateGroupAdminResponse;
                toAmino(_: _86.MsgUpdateGroupAdminResponse): _86.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupAdminResponseAminoMsg): _86.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _86.MsgUpdateGroupAdminResponse): _86.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupAdminResponseProtoMsg): _86.MsgUpdateGroupAdminResponse;
                toProto(message: _86.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupAdminResponse): _86.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_86.MsgUpdateGroupMetadata>): _86.MsgUpdateGroupMetadata;
                fromAmino(object: _86.MsgUpdateGroupMetadataAmino): _86.MsgUpdateGroupMetadata;
                toAmino(message: _86.MsgUpdateGroupMetadata): _86.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupMetadataAminoMsg): _86.MsgUpdateGroupMetadata;
                toAminoMsg(message: _86.MsgUpdateGroupMetadata): _86.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupMetadataProtoMsg): _86.MsgUpdateGroupMetadata;
                toProto(message: _86.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupMetadata): _86.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupMetadataResponse>): _86.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _86.MsgUpdateGroupMetadataResponseAmino): _86.MsgUpdateGroupMetadataResponse;
                toAmino(_: _86.MsgUpdateGroupMetadataResponse): _86.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupMetadataResponseAminoMsg): _86.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _86.MsgUpdateGroupMetadataResponse): _86.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupMetadataResponseProtoMsg): _86.MsgUpdateGroupMetadataResponse;
                toProto(message: _86.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupMetadataResponse): _86.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_86.MsgCreateGroupPolicy>): _86.MsgCreateGroupPolicy;
                fromAmino(object: _86.MsgCreateGroupPolicyAmino): _86.MsgCreateGroupPolicy;
                toAmino(message: _86.MsgCreateGroupPolicy): _86.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _86.MsgCreateGroupPolicyAminoMsg): _86.MsgCreateGroupPolicy;
                toAminoMsg(message: _86.MsgCreateGroupPolicy): _86.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupPolicyProtoMsg): _86.MsgCreateGroupPolicy;
                toProto(message: _86.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroupPolicy): _86.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_86.MsgCreateGroupPolicyResponse>): _86.MsgCreateGroupPolicyResponse;
                fromAmino(object: _86.MsgCreateGroupPolicyResponseAmino): _86.MsgCreateGroupPolicyResponse;
                toAmino(message: _86.MsgCreateGroupPolicyResponse): _86.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _86.MsgCreateGroupPolicyResponseAminoMsg): _86.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _86.MsgCreateGroupPolicyResponse): _86.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupPolicyResponseProtoMsg): _86.MsgCreateGroupPolicyResponse;
                toProto(message: _86.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroupPolicyResponse): _86.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_86.MsgUpdateGroupPolicyAdmin>): _86.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _86.MsgUpdateGroupPolicyAdminAmino): _86.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _86.MsgUpdateGroupPolicyAdmin): _86.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyAdminAminoMsg): _86.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyAdmin): _86.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyAdminProtoMsg): _86.MsgUpdateGroupPolicyAdmin;
                toProto(message: _86.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyAdmin): _86.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_86.MsgCreateGroupWithPolicy>): _86.MsgCreateGroupWithPolicy;
                fromAmino(object: _86.MsgCreateGroupWithPolicyAmino): _86.MsgCreateGroupWithPolicy;
                toAmino(message: _86.MsgCreateGroupWithPolicy): _86.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _86.MsgCreateGroupWithPolicyAminoMsg): _86.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _86.MsgCreateGroupWithPolicy): _86.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupWithPolicyProtoMsg): _86.MsgCreateGroupWithPolicy;
                toProto(message: _86.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroupWithPolicy): _86.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_86.MsgCreateGroupWithPolicyResponse>): _86.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _86.MsgCreateGroupWithPolicyResponseAmino): _86.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _86.MsgCreateGroupWithPolicyResponse): _86.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _86.MsgCreateGroupWithPolicyResponseAminoMsg): _86.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _86.MsgCreateGroupWithPolicyResponse): _86.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupWithPolicyResponseProtoMsg): _86.MsgCreateGroupWithPolicyResponse;
                toProto(message: _86.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroupWithPolicyResponse): _86.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupPolicyAdminResponse>): _86.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _86.MsgUpdateGroupPolicyAdminResponseAmino): _86.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _86.MsgUpdateGroupPolicyAdminResponse): _86.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyAdminResponseAminoMsg): _86.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyAdminResponse): _86.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyAdminResponseProtoMsg): _86.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _86.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyAdminResponse): _86.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_86.MsgUpdateGroupPolicyDecisionPolicy>): _86.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _86.MsgUpdateGroupPolicyDecisionPolicyAmino): _86.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _86.MsgUpdateGroupPolicyDecisionPolicy): _86.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _86.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicy): _86.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _86.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _86.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicy): _86.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupPolicyDecisionPolicyResponse>): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _86.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _86.MsgUpdateGroupPolicyDecisionPolicyResponse): _86.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicyResponse): _86.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _86.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicyResponse): _86.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_86.MsgUpdateGroupPolicyMetadata>): _86.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _86.MsgUpdateGroupPolicyMetadataAmino): _86.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _86.MsgUpdateGroupPolicyMetadata): _86.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyMetadataAminoMsg): _86.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyMetadata): _86.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyMetadataProtoMsg): _86.MsgUpdateGroupPolicyMetadata;
                toProto(message: _86.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyMetadata): _86.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupPolicyMetadataResponse>): _86.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _86.MsgUpdateGroupPolicyMetadataResponseAmino): _86.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _86.MsgUpdateGroupPolicyMetadataResponse): _86.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _86.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyMetadataResponse): _86.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _86.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _86.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyMetadataResponse): _86.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
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
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _86.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgWithdrawProposal;
                fromPartial(object: Partial<_86.MsgWithdrawProposal>): _86.MsgWithdrawProposal;
                fromAmino(object: _86.MsgWithdrawProposalAmino): _86.MsgWithdrawProposal;
                toAmino(message: _86.MsgWithdrawProposal): _86.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _86.MsgWithdrawProposalAminoMsg): _86.MsgWithdrawProposal;
                toAminoMsg(message: _86.MsgWithdrawProposal): _86.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _86.MsgWithdrawProposalProtoMsg): _86.MsgWithdrawProposal;
                toProto(message: _86.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _86.MsgWithdrawProposal): _86.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _86.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_86.MsgWithdrawProposalResponse>): _86.MsgWithdrawProposalResponse;
                fromAmino(_: _86.MsgWithdrawProposalResponseAmino): _86.MsgWithdrawProposalResponse;
                toAmino(_: _86.MsgWithdrawProposalResponse): _86.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _86.MsgWithdrawProposalResponseAminoMsg): _86.MsgWithdrawProposalResponse;
                toAminoMsg(message: _86.MsgWithdrawProposalResponse): _86.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _86.MsgWithdrawProposalResponseProtoMsg): _86.MsgWithdrawProposalResponse;
                toProto(message: _86.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _86.MsgWithdrawProposalResponse): _86.MsgWithdrawProposalResponseProtoMsg;
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
            MsgExec: {
                typeUrl: string;
                encode(message: _86.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgExec;
                fromPartial(object: Partial<_86.MsgExec>): _86.MsgExec;
                fromAmino(object: _86.MsgExecAmino): _86.MsgExec;
                toAmino(message: _86.MsgExec): _86.MsgExecAmino;
                fromAminoMsg(object: _86.MsgExecAminoMsg): _86.MsgExec;
                toAminoMsg(message: _86.MsgExec): _86.MsgExecAminoMsg;
                fromProtoMsg(message: _86.MsgExecProtoMsg): _86.MsgExec;
                toProto(message: _86.MsgExec): Uint8Array;
                toProtoMsg(message: _86.MsgExec): _86.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _86.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgExecResponse;
                fromPartial(object: Partial<_86.MsgExecResponse>): _86.MsgExecResponse;
                fromAmino(object: _86.MsgExecResponseAmino): _86.MsgExecResponse;
                toAmino(message: _86.MsgExecResponse): _86.MsgExecResponseAmino;
                fromAminoMsg(object: _86.MsgExecResponseAminoMsg): _86.MsgExecResponse;
                toAminoMsg(message: _86.MsgExecResponse): _86.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _86.MsgExecResponseProtoMsg): _86.MsgExecResponse;
                toProto(message: _86.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _86.MsgExecResponse): _86.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _86.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgLeaveGroup;
                fromPartial(object: Partial<_86.MsgLeaveGroup>): _86.MsgLeaveGroup;
                fromAmino(object: _86.MsgLeaveGroupAmino): _86.MsgLeaveGroup;
                toAmino(message: _86.MsgLeaveGroup): _86.MsgLeaveGroupAmino;
                fromAminoMsg(object: _86.MsgLeaveGroupAminoMsg): _86.MsgLeaveGroup;
                toAminoMsg(message: _86.MsgLeaveGroup): _86.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _86.MsgLeaveGroupProtoMsg): _86.MsgLeaveGroup;
                toProto(message: _86.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _86.MsgLeaveGroup): _86.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _86.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_86.MsgLeaveGroupResponse>): _86.MsgLeaveGroupResponse;
                fromAmino(_: _86.MsgLeaveGroupResponseAmino): _86.MsgLeaveGroupResponse;
                toAmino(_: _86.MsgLeaveGroupResponse): _86.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _86.MsgLeaveGroupResponseAminoMsg): _86.MsgLeaveGroupResponse;
                toAminoMsg(message: _86.MsgLeaveGroupResponse): _86.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _86.MsgLeaveGroupResponseProtoMsg): _86.MsgLeaveGroupResponse;
                toProto(message: _86.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _86.MsgLeaveGroupResponse): _86.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupInfoRequest;
                fromPartial(object: Partial<_85.QueryGroupInfoRequest>): _85.QueryGroupInfoRequest;
                fromAmino(object: _85.QueryGroupInfoRequestAmino): _85.QueryGroupInfoRequest;
                toAmino(message: _85.QueryGroupInfoRequest): _85.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _85.QueryGroupInfoRequestAminoMsg): _85.QueryGroupInfoRequest;
                toAminoMsg(message: _85.QueryGroupInfoRequest): _85.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupInfoRequestProtoMsg): _85.QueryGroupInfoRequest;
                toProto(message: _85.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupInfoRequest): _85.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupInfoResponse;
                fromPartial(object: Partial<_85.QueryGroupInfoResponse>): _85.QueryGroupInfoResponse;
                fromAmino(object: _85.QueryGroupInfoResponseAmino): _85.QueryGroupInfoResponse;
                toAmino(message: _85.QueryGroupInfoResponse): _85.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _85.QueryGroupInfoResponseAminoMsg): _85.QueryGroupInfoResponse;
                toAminoMsg(message: _85.QueryGroupInfoResponse): _85.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupInfoResponseProtoMsg): _85.QueryGroupInfoResponse;
                toProto(message: _85.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupInfoResponse): _85.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_85.QueryGroupPolicyInfoRequest>): _85.QueryGroupPolicyInfoRequest;
                fromAmino(object: _85.QueryGroupPolicyInfoRequestAmino): _85.QueryGroupPolicyInfoRequest;
                toAmino(message: _85.QueryGroupPolicyInfoRequest): _85.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _85.QueryGroupPolicyInfoRequestAminoMsg): _85.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _85.QueryGroupPolicyInfoRequest): _85.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPolicyInfoRequestProtoMsg): _85.QueryGroupPolicyInfoRequest;
                toProto(message: _85.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPolicyInfoRequest): _85.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_85.QueryGroupPolicyInfoResponse>): _85.QueryGroupPolicyInfoResponse;
                fromAmino(object: _85.QueryGroupPolicyInfoResponseAmino): _85.QueryGroupPolicyInfoResponse;
                toAmino(message: _85.QueryGroupPolicyInfoResponse): _85.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _85.QueryGroupPolicyInfoResponseAminoMsg): _85.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _85.QueryGroupPolicyInfoResponse): _85.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPolicyInfoResponseProtoMsg): _85.QueryGroupPolicyInfoResponse;
                toProto(message: _85.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPolicyInfoResponse): _85.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupMembersRequest;
                fromPartial(object: Partial<_85.QueryGroupMembersRequest>): _85.QueryGroupMembersRequest;
                fromAmino(object: _85.QueryGroupMembersRequestAmino): _85.QueryGroupMembersRequest;
                toAmino(message: _85.QueryGroupMembersRequest): _85.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _85.QueryGroupMembersRequestAminoMsg): _85.QueryGroupMembersRequest;
                toAminoMsg(message: _85.QueryGroupMembersRequest): _85.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupMembersRequestProtoMsg): _85.QueryGroupMembersRequest;
                toProto(message: _85.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupMembersRequest): _85.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupMembersResponse;
                fromPartial(object: Partial<_85.QueryGroupMembersResponse>): _85.QueryGroupMembersResponse;
                fromAmino(object: _85.QueryGroupMembersResponseAmino): _85.QueryGroupMembersResponse;
                toAmino(message: _85.QueryGroupMembersResponse): _85.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _85.QueryGroupMembersResponseAminoMsg): _85.QueryGroupMembersResponse;
                toAminoMsg(message: _85.QueryGroupMembersResponse): _85.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupMembersResponseProtoMsg): _85.QueryGroupMembersResponse;
                toProto(message: _85.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupMembersResponse): _85.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_85.QueryGroupsByAdminRequest>): _85.QueryGroupsByAdminRequest;
                fromAmino(object: _85.QueryGroupsByAdminRequestAmino): _85.QueryGroupsByAdminRequest;
                toAmino(message: _85.QueryGroupsByAdminRequest): _85.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _85.QueryGroupsByAdminRequestAminoMsg): _85.QueryGroupsByAdminRequest;
                toAminoMsg(message: _85.QueryGroupsByAdminRequest): _85.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsByAdminRequestProtoMsg): _85.QueryGroupsByAdminRequest;
                toProto(message: _85.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsByAdminRequest): _85.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_85.QueryGroupsByAdminResponse>): _85.QueryGroupsByAdminResponse;
                fromAmino(object: _85.QueryGroupsByAdminResponseAmino): _85.QueryGroupsByAdminResponse;
                toAmino(message: _85.QueryGroupsByAdminResponse): _85.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _85.QueryGroupsByAdminResponseAminoMsg): _85.QueryGroupsByAdminResponse;
                toAminoMsg(message: _85.QueryGroupsByAdminResponse): _85.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsByAdminResponseProtoMsg): _85.QueryGroupsByAdminResponse;
                toProto(message: _85.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsByAdminResponse): _85.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByGroupRequest>): _85.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _85.QueryGroupPoliciesByGroupRequestAmino): _85.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _85.QueryGroupPoliciesByGroupRequest): _85.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _85.QueryGroupPoliciesByGroupRequestAminoMsg): _85.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _85.QueryGroupPoliciesByGroupRequest): _85.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPoliciesByGroupRequestProtoMsg): _85.QueryGroupPoliciesByGroupRequest;
                toProto(message: _85.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPoliciesByGroupRequest): _85.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByGroupResponse>): _85.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _85.QueryGroupPoliciesByGroupResponseAmino): _85.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _85.QueryGroupPoliciesByGroupResponse): _85.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _85.QueryGroupPoliciesByGroupResponseAminoMsg): _85.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _85.QueryGroupPoliciesByGroupResponse): _85.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPoliciesByGroupResponseProtoMsg): _85.QueryGroupPoliciesByGroupResponse;
                toProto(message: _85.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPoliciesByGroupResponse): _85.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByAdminRequest>): _85.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _85.QueryGroupPoliciesByAdminRequestAmino): _85.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _85.QueryGroupPoliciesByAdminRequest): _85.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _85.QueryGroupPoliciesByAdminRequestAminoMsg): _85.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _85.QueryGroupPoliciesByAdminRequest): _85.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPoliciesByAdminRequestProtoMsg): _85.QueryGroupPoliciesByAdminRequest;
                toProto(message: _85.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPoliciesByAdminRequest): _85.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByAdminResponse>): _85.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _85.QueryGroupPoliciesByAdminResponseAmino): _85.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _85.QueryGroupPoliciesByAdminResponse): _85.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _85.QueryGroupPoliciesByAdminResponseAminoMsg): _85.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _85.QueryGroupPoliciesByAdminResponse): _85.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPoliciesByAdminResponseProtoMsg): _85.QueryGroupPoliciesByAdminResponse;
                toProto(message: _85.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPoliciesByAdminResponse): _85.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
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
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _85.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_85.QueryProposalsByGroupPolicyRequest>): _85.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _85.QueryProposalsByGroupPolicyRequestAmino): _85.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _85.QueryProposalsByGroupPolicyRequest): _85.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _85.QueryProposalsByGroupPolicyRequestAminoMsg): _85.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _85.QueryProposalsByGroupPolicyRequest): _85.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _85.QueryProposalsByGroupPolicyRequestProtoMsg): _85.QueryProposalsByGroupPolicyRequest;
                toProto(message: _85.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _85.QueryProposalsByGroupPolicyRequest): _85.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _85.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_85.QueryProposalsByGroupPolicyResponse>): _85.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _85.QueryProposalsByGroupPolicyResponseAmino): _85.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _85.QueryProposalsByGroupPolicyResponse): _85.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _85.QueryProposalsByGroupPolicyResponseAminoMsg): _85.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _85.QueryProposalsByGroupPolicyResponse): _85.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _85.QueryProposalsByGroupPolicyResponseProtoMsg): _85.QueryProposalsByGroupPolicyResponse;
                toProto(message: _85.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _85.QueryProposalsByGroupPolicyResponse): _85.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _85.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_85.QueryVoteByProposalVoterRequest>): _85.QueryVoteByProposalVoterRequest;
                fromAmino(object: _85.QueryVoteByProposalVoterRequestAmino): _85.QueryVoteByProposalVoterRequest;
                toAmino(message: _85.QueryVoteByProposalVoterRequest): _85.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _85.QueryVoteByProposalVoterRequestAminoMsg): _85.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _85.QueryVoteByProposalVoterRequest): _85.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _85.QueryVoteByProposalVoterRequestProtoMsg): _85.QueryVoteByProposalVoterRequest;
                toProto(message: _85.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _85.QueryVoteByProposalVoterRequest): _85.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _85.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_85.QueryVoteByProposalVoterResponse>): _85.QueryVoteByProposalVoterResponse;
                fromAmino(object: _85.QueryVoteByProposalVoterResponseAmino): _85.QueryVoteByProposalVoterResponse;
                toAmino(message: _85.QueryVoteByProposalVoterResponse): _85.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _85.QueryVoteByProposalVoterResponseAminoMsg): _85.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _85.QueryVoteByProposalVoterResponse): _85.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _85.QueryVoteByProposalVoterResponseProtoMsg): _85.QueryVoteByProposalVoterResponse;
                toProto(message: _85.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _85.QueryVoteByProposalVoterResponse): _85.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _85.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_85.QueryVotesByProposalRequest>): _85.QueryVotesByProposalRequest;
                fromAmino(object: _85.QueryVotesByProposalRequestAmino): _85.QueryVotesByProposalRequest;
                toAmino(message: _85.QueryVotesByProposalRequest): _85.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _85.QueryVotesByProposalRequestAminoMsg): _85.QueryVotesByProposalRequest;
                toAminoMsg(message: _85.QueryVotesByProposalRequest): _85.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _85.QueryVotesByProposalRequestProtoMsg): _85.QueryVotesByProposalRequest;
                toProto(message: _85.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _85.QueryVotesByProposalRequest): _85.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _85.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_85.QueryVotesByProposalResponse>): _85.QueryVotesByProposalResponse;
                fromAmino(object: _85.QueryVotesByProposalResponseAmino): _85.QueryVotesByProposalResponse;
                toAmino(message: _85.QueryVotesByProposalResponse): _85.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _85.QueryVotesByProposalResponseAminoMsg): _85.QueryVotesByProposalResponse;
                toAminoMsg(message: _85.QueryVotesByProposalResponse): _85.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _85.QueryVotesByProposalResponseProtoMsg): _85.QueryVotesByProposalResponse;
                toProto(message: _85.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _85.QueryVotesByProposalResponse): _85.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _85.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_85.QueryVotesByVoterRequest>): _85.QueryVotesByVoterRequest;
                fromAmino(object: _85.QueryVotesByVoterRequestAmino): _85.QueryVotesByVoterRequest;
                toAmino(message: _85.QueryVotesByVoterRequest): _85.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _85.QueryVotesByVoterRequestAminoMsg): _85.QueryVotesByVoterRequest;
                toAminoMsg(message: _85.QueryVotesByVoterRequest): _85.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _85.QueryVotesByVoterRequestProtoMsg): _85.QueryVotesByVoterRequest;
                toProto(message: _85.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _85.QueryVotesByVoterRequest): _85.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _85.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_85.QueryVotesByVoterResponse>): _85.QueryVotesByVoterResponse;
                fromAmino(object: _85.QueryVotesByVoterResponseAmino): _85.QueryVotesByVoterResponse;
                toAmino(message: _85.QueryVotesByVoterResponse): _85.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _85.QueryVotesByVoterResponseAminoMsg): _85.QueryVotesByVoterResponse;
                toAminoMsg(message: _85.QueryVotesByVoterResponse): _85.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _85.QueryVotesByVoterResponseProtoMsg): _85.QueryVotesByVoterResponse;
                toProto(message: _85.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _85.QueryVotesByVoterResponse): _85.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_85.QueryGroupsByMemberRequest>): _85.QueryGroupsByMemberRequest;
                fromAmino(object: _85.QueryGroupsByMemberRequestAmino): _85.QueryGroupsByMemberRequest;
                toAmino(message: _85.QueryGroupsByMemberRequest): _85.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _85.QueryGroupsByMemberRequestAminoMsg): _85.QueryGroupsByMemberRequest;
                toAminoMsg(message: _85.QueryGroupsByMemberRequest): _85.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsByMemberRequestProtoMsg): _85.QueryGroupsByMemberRequest;
                toProto(message: _85.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsByMemberRequest): _85.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_85.QueryGroupsByMemberResponse>): _85.QueryGroupsByMemberResponse;
                fromAmino(object: _85.QueryGroupsByMemberResponseAmino): _85.QueryGroupsByMemberResponse;
                toAmino(message: _85.QueryGroupsByMemberResponse): _85.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _85.QueryGroupsByMemberResponseAminoMsg): _85.QueryGroupsByMemberResponse;
                toAminoMsg(message: _85.QueryGroupsByMemberResponse): _85.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsByMemberResponseProtoMsg): _85.QueryGroupsByMemberResponse;
                toProto(message: _85.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsByMemberResponse): _85.QueryGroupsByMemberResponseProtoMsg;
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
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupsRequest;
                fromPartial(object: Partial<_85.QueryGroupsRequest>): _85.QueryGroupsRequest;
                fromAmino(object: _85.QueryGroupsRequestAmino): _85.QueryGroupsRequest;
                toAmino(message: _85.QueryGroupsRequest): _85.QueryGroupsRequestAmino;
                fromAminoMsg(object: _85.QueryGroupsRequestAminoMsg): _85.QueryGroupsRequest;
                toAminoMsg(message: _85.QueryGroupsRequest): _85.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsRequestProtoMsg): _85.QueryGroupsRequest;
                toProto(message: _85.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsRequest): _85.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryGroupsResponse;
                fromPartial(object: Partial<_85.QueryGroupsResponse>): _85.QueryGroupsResponse;
                fromAmino(object: _85.QueryGroupsResponseAmino): _85.QueryGroupsResponse;
                toAmino(message: _85.QueryGroupsResponse): _85.QueryGroupsResponseAmino;
                fromAminoMsg(object: _85.QueryGroupsResponseAminoMsg): _85.QueryGroupsResponse;
                toAminoMsg(message: _85.QueryGroupsResponse): _85.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsResponseProtoMsg): _85.QueryGroupsResponse;
                toProto(message: _85.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsResponse): _85.QueryGroupsResponseProtoMsg;
            };
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _83.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventCreateGroup;
                fromPartial(object: Partial<_83.EventCreateGroup>): _83.EventCreateGroup;
                fromAmino(object: _83.EventCreateGroupAmino): _83.EventCreateGroup;
                toAmino(message: _83.EventCreateGroup): _83.EventCreateGroupAmino;
                fromAminoMsg(object: _83.EventCreateGroupAminoMsg): _83.EventCreateGroup;
                toAminoMsg(message: _83.EventCreateGroup): _83.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _83.EventCreateGroupProtoMsg): _83.EventCreateGroup;
                toProto(message: _83.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _83.EventCreateGroup): _83.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _83.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventUpdateGroup;
                fromPartial(object: Partial<_83.EventUpdateGroup>): _83.EventUpdateGroup;
                fromAmino(object: _83.EventUpdateGroupAmino): _83.EventUpdateGroup;
                toAmino(message: _83.EventUpdateGroup): _83.EventUpdateGroupAmino;
                fromAminoMsg(object: _83.EventUpdateGroupAminoMsg): _83.EventUpdateGroup;
                toAminoMsg(message: _83.EventUpdateGroup): _83.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _83.EventUpdateGroupProtoMsg): _83.EventUpdateGroup;
                toProto(message: _83.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _83.EventUpdateGroup): _83.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _83.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventCreateGroupPolicy;
                fromPartial(object: Partial<_83.EventCreateGroupPolicy>): _83.EventCreateGroupPolicy;
                fromAmino(object: _83.EventCreateGroupPolicyAmino): _83.EventCreateGroupPolicy;
                toAmino(message: _83.EventCreateGroupPolicy): _83.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _83.EventCreateGroupPolicyAminoMsg): _83.EventCreateGroupPolicy;
                toAminoMsg(message: _83.EventCreateGroupPolicy): _83.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _83.EventCreateGroupPolicyProtoMsg): _83.EventCreateGroupPolicy;
                toProto(message: _83.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _83.EventCreateGroupPolicy): _83.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _83.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_83.EventUpdateGroupPolicy>): _83.EventUpdateGroupPolicy;
                fromAmino(object: _83.EventUpdateGroupPolicyAmino): _83.EventUpdateGroupPolicy;
                toAmino(message: _83.EventUpdateGroupPolicy): _83.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _83.EventUpdateGroupPolicyAminoMsg): _83.EventUpdateGroupPolicy;
                toAminoMsg(message: _83.EventUpdateGroupPolicy): _83.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _83.EventUpdateGroupPolicyProtoMsg): _83.EventUpdateGroupPolicy;
                toProto(message: _83.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _83.EventUpdateGroupPolicy): _83.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _83.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventSubmitProposal;
                fromPartial(object: Partial<_83.EventSubmitProposal>): _83.EventSubmitProposal;
                fromAmino(object: _83.EventSubmitProposalAmino): _83.EventSubmitProposal;
                toAmino(message: _83.EventSubmitProposal): _83.EventSubmitProposalAmino;
                fromAminoMsg(object: _83.EventSubmitProposalAminoMsg): _83.EventSubmitProposal;
                toAminoMsg(message: _83.EventSubmitProposal): _83.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _83.EventSubmitProposalProtoMsg): _83.EventSubmitProposal;
                toProto(message: _83.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _83.EventSubmitProposal): _83.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _83.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventWithdrawProposal;
                fromPartial(object: Partial<_83.EventWithdrawProposal>): _83.EventWithdrawProposal;
                fromAmino(object: _83.EventWithdrawProposalAmino): _83.EventWithdrawProposal;
                toAmino(message: _83.EventWithdrawProposal): _83.EventWithdrawProposalAmino;
                fromAminoMsg(object: _83.EventWithdrawProposalAminoMsg): _83.EventWithdrawProposal;
                toAminoMsg(message: _83.EventWithdrawProposal): _83.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _83.EventWithdrawProposalProtoMsg): _83.EventWithdrawProposal;
                toProto(message: _83.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _83.EventWithdrawProposal): _83.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _83.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventVote;
                fromPartial(object: Partial<_83.EventVote>): _83.EventVote;
                fromAmino(object: _83.EventVoteAmino): _83.EventVote;
                toAmino(message: _83.EventVote): _83.EventVoteAmino;
                fromAminoMsg(object: _83.EventVoteAminoMsg): _83.EventVote;
                toAminoMsg(message: _83.EventVote): _83.EventVoteAminoMsg;
                fromProtoMsg(message: _83.EventVoteProtoMsg): _83.EventVote;
                toProto(message: _83.EventVote): Uint8Array;
                toProtoMsg(message: _83.EventVote): _83.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _83.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventExec;
                fromPartial(object: Partial<_83.EventExec>): _83.EventExec;
                fromAmino(object: _83.EventExecAmino): _83.EventExec;
                toAmino(message: _83.EventExec): _83.EventExecAmino;
                fromAminoMsg(object: _83.EventExecAminoMsg): _83.EventExec;
                toAminoMsg(message: _83.EventExec): _83.EventExecAminoMsg;
                fromProtoMsg(message: _83.EventExecProtoMsg): _83.EventExec;
                toProto(message: _83.EventExec): Uint8Array;
                toProtoMsg(message: _83.EventExec): _83.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _83.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventLeaveGroup;
                fromPartial(object: Partial<_83.EventLeaveGroup>): _83.EventLeaveGroup;
                fromAmino(object: _83.EventLeaveGroupAmino): _83.EventLeaveGroup;
                toAmino(message: _83.EventLeaveGroup): _83.EventLeaveGroupAmino;
                fromAminoMsg(object: _83.EventLeaveGroupAminoMsg): _83.EventLeaveGroup;
                toAminoMsg(message: _83.EventLeaveGroup): _83.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _83.EventLeaveGroupProtoMsg): _83.EventLeaveGroup;
                toProto(message: _83.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _83.EventLeaveGroup): _83.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _83.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventProposalPruned;
                fromPartial(object: Partial<_83.EventProposalPruned>): _83.EventProposalPruned;
                fromAmino(object: _83.EventProposalPrunedAmino): _83.EventProposalPruned;
                toAmino(message: _83.EventProposalPruned): _83.EventProposalPrunedAmino;
                fromAminoMsg(object: _83.EventProposalPrunedAminoMsg): _83.EventProposalPruned;
                toAminoMsg(message: _83.EventProposalPruned): _83.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _83.EventProposalPrunedProtoMsg): _83.EventProposalPruned;
                toProto(message: _83.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _83.EventProposalPruned): _83.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                inflation(request?: _90.QueryInflationRequest): Promise<_90.QueryInflationResponse>;
                annualProvisions(request?: _90.QueryAnnualProvisionsRequest): Promise<_90.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _90.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.QueryParamsRequest;
                fromPartial(_: Partial<_90.QueryParamsRequest>): _90.QueryParamsRequest;
                fromAmino(_: _90.QueryParamsRequestAmino): _90.QueryParamsRequest;
                toAmino(_: _90.QueryParamsRequest): _90.QueryParamsRequestAmino;
                fromAminoMsg(object: _90.QueryParamsRequestAminoMsg): _90.QueryParamsRequest;
                toAminoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryParamsRequestProtoMsg): _90.QueryParamsRequest;
                toProto(message: _90.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _90.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryParamsResponse;
                fromPartial(object: Partial<_90.QueryParamsResponse>): _90.QueryParamsResponse;
                fromAmino(object: _90.QueryParamsResponseAmino): _90.QueryParamsResponse;
                toAmino(message: _90.QueryParamsResponse): _90.QueryParamsResponseAmino;
                fromAminoMsg(object: _90.QueryParamsResponseAminoMsg): _90.QueryParamsResponse;
                toAminoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryParamsResponseProtoMsg): _90.QueryParamsResponse;
                toProto(message: _90.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _90.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.QueryInflationRequest;
                fromPartial(_: Partial<_90.QueryInflationRequest>): _90.QueryInflationRequest;
                fromAmino(_: _90.QueryInflationRequestAmino): _90.QueryInflationRequest;
                toAmino(_: _90.QueryInflationRequest): _90.QueryInflationRequestAmino;
                fromAminoMsg(object: _90.QueryInflationRequestAminoMsg): _90.QueryInflationRequest;
                toAminoMsg(message: _90.QueryInflationRequest): _90.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _90.QueryInflationRequestProtoMsg): _90.QueryInflationRequest;
                toProto(message: _90.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _90.QueryInflationRequest): _90.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _90.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryInflationResponse;
                fromPartial(object: Partial<_90.QueryInflationResponse>): _90.QueryInflationResponse;
                fromAmino(object: _90.QueryInflationResponseAmino): _90.QueryInflationResponse;
                toAmino(message: _90.QueryInflationResponse): _90.QueryInflationResponseAmino;
                fromAminoMsg(object: _90.QueryInflationResponseAminoMsg): _90.QueryInflationResponse;
                toAminoMsg(message: _90.QueryInflationResponse): _90.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _90.QueryInflationResponseProtoMsg): _90.QueryInflationResponse;
                toProto(message: _90.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _90.QueryInflationResponse): _90.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _90.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_90.QueryAnnualProvisionsRequest>): _90.QueryAnnualProvisionsRequest;
                fromAmino(_: _90.QueryAnnualProvisionsRequestAmino): _90.QueryAnnualProvisionsRequest;
                toAmino(_: _90.QueryAnnualProvisionsRequest): _90.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _90.QueryAnnualProvisionsRequestAminoMsg): _90.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _90.QueryAnnualProvisionsRequest): _90.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAnnualProvisionsRequestProtoMsg): _90.QueryAnnualProvisionsRequest;
                toProto(message: _90.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAnnualProvisionsRequest): _90.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _90.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_90.QueryAnnualProvisionsResponse>): _90.QueryAnnualProvisionsResponse;
                fromAmino(object: _90.QueryAnnualProvisionsResponseAmino): _90.QueryAnnualProvisionsResponse;
                toAmino(message: _90.QueryAnnualProvisionsResponse): _90.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _90.QueryAnnualProvisionsResponseAminoMsg): _90.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _90.QueryAnnualProvisionsResponse): _90.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAnnualProvisionsResponseProtoMsg): _90.QueryAnnualProvisionsResponse;
                toProto(message: _90.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAnnualProvisionsResponse): _90.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _89.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.Minter;
                fromPartial(object: Partial<_89.Minter>): _89.Minter;
                fromAmino(object: _89.MinterAmino): _89.Minter;
                toAmino(message: _89.Minter): _89.MinterAmino;
                fromAminoMsg(object: _89.MinterAminoMsg): _89.Minter;
                toAminoMsg(message: _89.Minter): _89.MinterAminoMsg;
                fromProtoMsg(message: _89.MinterProtoMsg): _89.Minter;
                toProto(message: _89.Minter): Uint8Array;
                toProtoMsg(message: _89.Minter): _89.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _89.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.Params;
                fromPartial(object: Partial<_89.Params>): _89.Params;
                fromAmino(object: _89.ParamsAmino): _89.Params;
                toAmino(message: _89.Params): _89.ParamsAmino;
                fromAminoMsg(object: _89.ParamsAminoMsg): _89.Params;
                toAminoMsg(message: _89.Params): _89.ParamsAminoMsg;
                fromProtoMsg(message: _89.ParamsProtoMsg): _89.Params;
                toProto(message: _89.Params): Uint8Array;
                toProtoMsg(message: _89.Params): _89.ParamsProtoMsg;
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
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _95.QueryBalanceRequest): Promise<_95.QueryBalanceResponse>;
                owner(request: _95.QueryOwnerRequest): Promise<_95.QueryOwnerResponse>;
                supply(request: _95.QuerySupplyRequest): Promise<_95.QuerySupplyResponse>;
                nFTs(request: _95.QueryNFTsRequest): Promise<_95.QueryNFTsResponse>;
                nFT(request: _95.QueryNFTRequest): Promise<_95.QueryNFTResponse>;
                class(request: _95.QueryClassRequest): Promise<_95.QueryClassResponse>;
                classes(request?: _95.QueryClassesRequest): Promise<_95.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: _96.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _96.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: _96.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _96.MsgSend) => _96.MsgSendAmino;
                    fromAmino: (object: _96.MsgSendAmino) => _96.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _96.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgSend;
                fromPartial(object: Partial<_96.MsgSend>): _96.MsgSend;
                fromAmino(object: _96.MsgSendAmino): _96.MsgSend;
                toAmino(message: _96.MsgSend): _96.MsgSendAmino;
                fromAminoMsg(object: _96.MsgSendAminoMsg): _96.MsgSend;
                toAminoMsg(message: _96.MsgSend): _96.MsgSendAminoMsg;
                fromProtoMsg(message: _96.MsgSendProtoMsg): _96.MsgSend;
                toProto(message: _96.MsgSend): Uint8Array;
                toProtoMsg(message: _96.MsgSend): _96.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _96.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgSendResponse;
                fromPartial(_: Partial<_96.MsgSendResponse>): _96.MsgSendResponse;
                fromAmino(_: _96.MsgSendResponseAmino): _96.MsgSendResponse;
                toAmino(_: _96.MsgSendResponse): _96.MsgSendResponseAmino;
                fromAminoMsg(object: _96.MsgSendResponseAminoMsg): _96.MsgSendResponse;
                toAminoMsg(message: _96.MsgSendResponse): _96.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _96.MsgSendResponseProtoMsg): _96.MsgSendResponse;
                toProto(message: _96.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _96.MsgSendResponse): _96.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _95.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryBalanceRequest;
                fromPartial(object: Partial<_95.QueryBalanceRequest>): _95.QueryBalanceRequest;
                fromAmino(object: _95.QueryBalanceRequestAmino): _95.QueryBalanceRequest;
                toAmino(message: _95.QueryBalanceRequest): _95.QueryBalanceRequestAmino;
                fromAminoMsg(object: _95.QueryBalanceRequestAminoMsg): _95.QueryBalanceRequest;
                toAminoMsg(message: _95.QueryBalanceRequest): _95.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _95.QueryBalanceRequestProtoMsg): _95.QueryBalanceRequest;
                toProto(message: _95.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _95.QueryBalanceRequest): _95.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _95.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryBalanceResponse;
                fromPartial(object: Partial<_95.QueryBalanceResponse>): _95.QueryBalanceResponse;
                fromAmino(object: _95.QueryBalanceResponseAmino): _95.QueryBalanceResponse;
                toAmino(message: _95.QueryBalanceResponse): _95.QueryBalanceResponseAmino;
                fromAminoMsg(object: _95.QueryBalanceResponseAminoMsg): _95.QueryBalanceResponse;
                toAminoMsg(message: _95.QueryBalanceResponse): _95.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _95.QueryBalanceResponseProtoMsg): _95.QueryBalanceResponse;
                toProto(message: _95.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _95.QueryBalanceResponse): _95.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _95.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryOwnerRequest;
                fromPartial(object: Partial<_95.QueryOwnerRequest>): _95.QueryOwnerRequest;
                fromAmino(object: _95.QueryOwnerRequestAmino): _95.QueryOwnerRequest;
                toAmino(message: _95.QueryOwnerRequest): _95.QueryOwnerRequestAmino;
                fromAminoMsg(object: _95.QueryOwnerRequestAminoMsg): _95.QueryOwnerRequest;
                toAminoMsg(message: _95.QueryOwnerRequest): _95.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _95.QueryOwnerRequestProtoMsg): _95.QueryOwnerRequest;
                toProto(message: _95.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _95.QueryOwnerRequest): _95.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _95.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryOwnerResponse;
                fromPartial(object: Partial<_95.QueryOwnerResponse>): _95.QueryOwnerResponse;
                fromAmino(object: _95.QueryOwnerResponseAmino): _95.QueryOwnerResponse;
                toAmino(message: _95.QueryOwnerResponse): _95.QueryOwnerResponseAmino;
                fromAminoMsg(object: _95.QueryOwnerResponseAminoMsg): _95.QueryOwnerResponse;
                toAminoMsg(message: _95.QueryOwnerResponse): _95.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _95.QueryOwnerResponseProtoMsg): _95.QueryOwnerResponse;
                toProto(message: _95.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _95.QueryOwnerResponse): _95.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _95.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QuerySupplyRequest;
                fromPartial(object: Partial<_95.QuerySupplyRequest>): _95.QuerySupplyRequest;
                fromAmino(object: _95.QuerySupplyRequestAmino): _95.QuerySupplyRequest;
                toAmino(message: _95.QuerySupplyRequest): _95.QuerySupplyRequestAmino;
                fromAminoMsg(object: _95.QuerySupplyRequestAminoMsg): _95.QuerySupplyRequest;
                toAminoMsg(message: _95.QuerySupplyRequest): _95.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _95.QuerySupplyRequestProtoMsg): _95.QuerySupplyRequest;
                toProto(message: _95.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _95.QuerySupplyRequest): _95.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _95.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QuerySupplyResponse;
                fromPartial(object: Partial<_95.QuerySupplyResponse>): _95.QuerySupplyResponse;
                fromAmino(object: _95.QuerySupplyResponseAmino): _95.QuerySupplyResponse;
                toAmino(message: _95.QuerySupplyResponse): _95.QuerySupplyResponseAmino;
                fromAminoMsg(object: _95.QuerySupplyResponseAminoMsg): _95.QuerySupplyResponse;
                toAminoMsg(message: _95.QuerySupplyResponse): _95.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _95.QuerySupplyResponseProtoMsg): _95.QuerySupplyResponse;
                toProto(message: _95.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _95.QuerySupplyResponse): _95.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _95.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryNFTsRequest;
                fromPartial(object: Partial<_95.QueryNFTsRequest>): _95.QueryNFTsRequest;
                fromAmino(object: _95.QueryNFTsRequestAmino): _95.QueryNFTsRequest;
                toAmino(message: _95.QueryNFTsRequest): _95.QueryNFTsRequestAmino;
                fromAminoMsg(object: _95.QueryNFTsRequestAminoMsg): _95.QueryNFTsRequest;
                toAminoMsg(message: _95.QueryNFTsRequest): _95.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _95.QueryNFTsRequestProtoMsg): _95.QueryNFTsRequest;
                toProto(message: _95.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _95.QueryNFTsRequest): _95.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _95.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryNFTsResponse;
                fromPartial(object: Partial<_95.QueryNFTsResponse>): _95.QueryNFTsResponse;
                fromAmino(object: _95.QueryNFTsResponseAmino): _95.QueryNFTsResponse;
                toAmino(message: _95.QueryNFTsResponse): _95.QueryNFTsResponseAmino;
                fromAminoMsg(object: _95.QueryNFTsResponseAminoMsg): _95.QueryNFTsResponse;
                toAminoMsg(message: _95.QueryNFTsResponse): _95.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _95.QueryNFTsResponseProtoMsg): _95.QueryNFTsResponse;
                toProto(message: _95.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _95.QueryNFTsResponse): _95.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _95.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryNFTRequest;
                fromPartial(object: Partial<_95.QueryNFTRequest>): _95.QueryNFTRequest;
                fromAmino(object: _95.QueryNFTRequestAmino): _95.QueryNFTRequest;
                toAmino(message: _95.QueryNFTRequest): _95.QueryNFTRequestAmino;
                fromAminoMsg(object: _95.QueryNFTRequestAminoMsg): _95.QueryNFTRequest;
                toAminoMsg(message: _95.QueryNFTRequest): _95.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _95.QueryNFTRequestProtoMsg): _95.QueryNFTRequest;
                toProto(message: _95.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _95.QueryNFTRequest): _95.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _95.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryNFTResponse;
                fromPartial(object: Partial<_95.QueryNFTResponse>): _95.QueryNFTResponse;
                fromAmino(object: _95.QueryNFTResponseAmino): _95.QueryNFTResponse;
                toAmino(message: _95.QueryNFTResponse): _95.QueryNFTResponseAmino;
                fromAminoMsg(object: _95.QueryNFTResponseAminoMsg): _95.QueryNFTResponse;
                toAminoMsg(message: _95.QueryNFTResponse): _95.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _95.QueryNFTResponseProtoMsg): _95.QueryNFTResponse;
                toProto(message: _95.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _95.QueryNFTResponse): _95.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _95.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryClassRequest;
                fromPartial(object: Partial<_95.QueryClassRequest>): _95.QueryClassRequest;
                fromAmino(object: _95.QueryClassRequestAmino): _95.QueryClassRequest;
                toAmino(message: _95.QueryClassRequest): _95.QueryClassRequestAmino;
                fromAminoMsg(object: _95.QueryClassRequestAminoMsg): _95.QueryClassRequest;
                toAminoMsg(message: _95.QueryClassRequest): _95.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _95.QueryClassRequestProtoMsg): _95.QueryClassRequest;
                toProto(message: _95.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _95.QueryClassRequest): _95.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _95.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryClassResponse;
                fromPartial(object: Partial<_95.QueryClassResponse>): _95.QueryClassResponse;
                fromAmino(object: _95.QueryClassResponseAmino): _95.QueryClassResponse;
                toAmino(message: _95.QueryClassResponse): _95.QueryClassResponseAmino;
                fromAminoMsg(object: _95.QueryClassResponseAminoMsg): _95.QueryClassResponse;
                toAminoMsg(message: _95.QueryClassResponse): _95.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _95.QueryClassResponseProtoMsg): _95.QueryClassResponse;
                toProto(message: _95.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _95.QueryClassResponse): _95.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _95.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryClassesRequest;
                fromPartial(object: Partial<_95.QueryClassesRequest>): _95.QueryClassesRequest;
                fromAmino(object: _95.QueryClassesRequestAmino): _95.QueryClassesRequest;
                toAmino(message: _95.QueryClassesRequest): _95.QueryClassesRequestAmino;
                fromAminoMsg(object: _95.QueryClassesRequestAminoMsg): _95.QueryClassesRequest;
                toAminoMsg(message: _95.QueryClassesRequest): _95.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _95.QueryClassesRequestProtoMsg): _95.QueryClassesRequest;
                toProto(message: _95.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _95.QueryClassesRequest): _95.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _95.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryClassesResponse;
                fromPartial(object: Partial<_95.QueryClassesResponse>): _95.QueryClassesResponse;
                fromAmino(object: _95.QueryClassesResponseAmino): _95.QueryClassesResponse;
                toAmino(message: _95.QueryClassesResponse): _95.QueryClassesResponseAmino;
                fromAminoMsg(object: _95.QueryClassesResponseAminoMsg): _95.QueryClassesResponse;
                toAminoMsg(message: _95.QueryClassesResponse): _95.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _95.QueryClassesResponseProtoMsg): _95.QueryClassesResponse;
                toProto(message: _95.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _95.QueryClassesResponse): _95.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _94.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.Class;
                fromPartial(object: Partial<_94.Class>): _94.Class;
                fromAmino(object: _94.ClassAmino): _94.Class;
                toAmino(message: _94.Class): _94.ClassAmino;
                fromAminoMsg(object: _94.ClassAminoMsg): _94.Class;
                toAminoMsg(message: _94.Class): _94.ClassAminoMsg;
                fromProtoMsg(message: _94.ClassProtoMsg): _94.Class;
                toProto(message: _94.Class): Uint8Array;
                toProtoMsg(message: _94.Class): _94.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _94.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.NFT;
                fromPartial(object: Partial<_94.NFT>): _94.NFT;
                fromAmino(object: _94.NFTAmino): _94.NFT;
                toAmino(message: _94.NFT): _94.NFTAmino;
                fromAminoMsg(object: _94.NFTAminoMsg): _94.NFT;
                toAminoMsg(message: _94.NFT): _94.NFTAminoMsg;
                fromProtoMsg(message: _94.NFTProtoMsg): _94.NFT;
                toProto(message: _94.NFT): Uint8Array;
                toProtoMsg(message: _94.NFT): _94.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _93.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Entry;
                fromPartial(object: Partial<_93.Entry>): _93.Entry;
                fromAmino(object: _93.EntryAmino): _93.Entry;
                toAmino(message: _93.Entry): _93.EntryAmino;
                fromAminoMsg(object: _93.EntryAminoMsg): _93.Entry;
                toAminoMsg(message: _93.Entry): _93.EntryAminoMsg;
                fromProtoMsg(message: _93.EntryProtoMsg): _93.Entry;
                toProto(message: _93.Entry): Uint8Array;
                toProtoMsg(message: _93.Entry): _93.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _92.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.EventSend;
                fromPartial(object: Partial<_92.EventSend>): _92.EventSend;
                fromAmino(object: _92.EventSendAmino): _92.EventSend;
                toAmino(message: _92.EventSend): _92.EventSendAmino;
                fromAminoMsg(object: _92.EventSendAminoMsg): _92.EventSend;
                toAminoMsg(message: _92.EventSend): _92.EventSendAminoMsg;
                fromProtoMsg(message: _92.EventSendProtoMsg): _92.EventSend;
                toProto(message: _92.EventSend): Uint8Array;
                toProtoMsg(message: _92.EventSend): _92.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _92.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.EventMint;
                fromPartial(object: Partial<_92.EventMint>): _92.EventMint;
                fromAmino(object: _92.EventMintAmino): _92.EventMint;
                toAmino(message: _92.EventMint): _92.EventMintAmino;
                fromAminoMsg(object: _92.EventMintAminoMsg): _92.EventMint;
                toAminoMsg(message: _92.EventMint): _92.EventMintAminoMsg;
                fromProtoMsg(message: _92.EventMintProtoMsg): _92.EventMint;
                toProto(message: _92.EventMint): Uint8Array;
                toProtoMsg(message: _92.EventMint): _92.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _92.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.EventBurn;
                fromPartial(object: Partial<_92.EventBurn>): _92.EventBurn;
                fromAmino(object: _92.EventBurnAmino): _92.EventBurn;
                toAmino(message: _92.EventBurn): _92.EventBurnAmino;
                fromAminoMsg(object: _92.EventBurnAminoMsg): _92.EventBurn;
                toAminoMsg(message: _92.EventBurn): _92.EventBurnAminoMsg;
                fromProtoMsg(message: _92.EventBurnProtoMsg): _92.EventBurn;
                toProto(message: _92.EventBurn): Uint8Array;
                toProtoMsg(message: _92.EventBurn): _92.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _97.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _97.Module;
                    fromPartial(_: Partial<_97.Module>): _97.Module;
                    fromAmino(_: _97.ModuleAmino): _97.Module;
                    toAmino(_: _97.Module): _97.ModuleAmino;
                    fromAminoMsg(object: _97.ModuleAminoMsg): _97.Module;
                    toAminoMsg(message: _97.Module): _97.ModuleAminoMsg;
                    fromProtoMsg(message: _97.ModuleProtoMsg): _97.Module;
                    toProto(message: _97.Module): Uint8Array;
                    toProtoMsg(message: _97.Module): _97.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _98.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.TableDescriptor;
                fromPartial(object: Partial<_98.TableDescriptor>): _98.TableDescriptor;
                fromAmino(object: _98.TableDescriptorAmino): _98.TableDescriptor;
                toAmino(message: _98.TableDescriptor): _98.TableDescriptorAmino;
                fromAminoMsg(object: _98.TableDescriptorAminoMsg): _98.TableDescriptor;
                toAminoMsg(message: _98.TableDescriptor): _98.TableDescriptorAminoMsg;
                fromProtoMsg(message: _98.TableDescriptorProtoMsg): _98.TableDescriptor;
                toProto(message: _98.TableDescriptor): Uint8Array;
                toProtoMsg(message: _98.TableDescriptor): _98.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _98.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_98.PrimaryKeyDescriptor>): _98.PrimaryKeyDescriptor;
                fromAmino(object: _98.PrimaryKeyDescriptorAmino): _98.PrimaryKeyDescriptor;
                toAmino(message: _98.PrimaryKeyDescriptor): _98.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _98.PrimaryKeyDescriptorAminoMsg): _98.PrimaryKeyDescriptor;
                toAminoMsg(message: _98.PrimaryKeyDescriptor): _98.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _98.PrimaryKeyDescriptorProtoMsg): _98.PrimaryKeyDescriptor;
                toProto(message: _98.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _98.PrimaryKeyDescriptor): _98.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _98.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_98.SecondaryIndexDescriptor>): _98.SecondaryIndexDescriptor;
                fromAmino(object: _98.SecondaryIndexDescriptorAmino): _98.SecondaryIndexDescriptor;
                toAmino(message: _98.SecondaryIndexDescriptor): _98.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _98.SecondaryIndexDescriptorAminoMsg): _98.SecondaryIndexDescriptor;
                toAminoMsg(message: _98.SecondaryIndexDescriptor): _98.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _98.SecondaryIndexDescriptorProtoMsg): _98.SecondaryIndexDescriptor;
                toProto(message: _98.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _98.SecondaryIndexDescriptor): _98.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _98.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.SingletonDescriptor;
                fromPartial(object: Partial<_98.SingletonDescriptor>): _98.SingletonDescriptor;
                fromAmino(object: _98.SingletonDescriptorAmino): _98.SingletonDescriptor;
                toAmino(message: _98.SingletonDescriptor): _98.SingletonDescriptorAmino;
                fromAminoMsg(object: _98.SingletonDescriptorAminoMsg): _98.SingletonDescriptor;
                toAminoMsg(message: _98.SingletonDescriptor): _98.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _98.SingletonDescriptorProtoMsg): _98.SingletonDescriptor;
                toProto(message: _98.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _98.SingletonDescriptor): _98.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _99.StorageType;
            storageTypeToJSON(object: _99.StorageType): string;
            StorageType: typeof _99.StorageType;
            StorageTypeSDKType: typeof _99.StorageType;
            StorageTypeAmino: typeof _99.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _99.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_99.ModuleSchemaDescriptor>): _99.ModuleSchemaDescriptor;
                fromAmino(object: _99.ModuleSchemaDescriptorAmino): _99.ModuleSchemaDescriptor;
                toAmino(message: _99.ModuleSchemaDescriptor): _99.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _99.ModuleSchemaDescriptorAminoMsg): _99.ModuleSchemaDescriptor;
                toAminoMsg(message: _99.ModuleSchemaDescriptor): _99.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _99.ModuleSchemaDescriptorProtoMsg): _99.ModuleSchemaDescriptor;
                toProto(message: _99.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _99.ModuleSchemaDescriptor): _99.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _99.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_99.ModuleSchemaDescriptor_FileEntry>): _99.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _99.ModuleSchemaDescriptor_FileEntryAmino): _99.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _99.ModuleSchemaDescriptor_FileEntry): _99.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _99.ModuleSchemaDescriptor_FileEntryAminoMsg): _99.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _99.ModuleSchemaDescriptor_FileEntry): _99.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _99.ModuleSchemaDescriptor_FileEntryProtoMsg): _99.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _99.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _99.ModuleSchemaDescriptor_FileEntry): _99.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                subspaces(request?: _101.QuerySubspacesRequest): Promise<_101.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
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
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _101.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.QuerySubspacesRequest;
                fromPartial(_: Partial<_101.QuerySubspacesRequest>): _101.QuerySubspacesRequest;
                fromAmino(_: _101.QuerySubspacesRequestAmino): _101.QuerySubspacesRequest;
                toAmino(_: _101.QuerySubspacesRequest): _101.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _101.QuerySubspacesRequestAminoMsg): _101.QuerySubspacesRequest;
                toAminoMsg(message: _101.QuerySubspacesRequest): _101.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _101.QuerySubspacesRequestProtoMsg): _101.QuerySubspacesRequest;
                toProto(message: _101.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _101.QuerySubspacesRequest): _101.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _101.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QuerySubspacesResponse;
                fromPartial(object: Partial<_101.QuerySubspacesResponse>): _101.QuerySubspacesResponse;
                fromAmino(object: _101.QuerySubspacesResponseAmino): _101.QuerySubspacesResponse;
                toAmino(message: _101.QuerySubspacesResponse): _101.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _101.QuerySubspacesResponseAminoMsg): _101.QuerySubspacesResponse;
                toAminoMsg(message: _101.QuerySubspacesResponse): _101.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _101.QuerySubspacesResponseProtoMsg): _101.QuerySubspacesResponse;
                toProto(message: _101.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _101.QuerySubspacesResponse): _101.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _101.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.Subspace;
                fromPartial(object: Partial<_101.Subspace>): _101.Subspace;
                fromAmino(object: _101.SubspaceAmino): _101.Subspace;
                toAmino(message: _101.Subspace): _101.SubspaceAmino;
                fromAminoMsg(object: _101.SubspaceAminoMsg): _101.Subspace;
                toAminoMsg(message: _101.Subspace): _101.SubspaceAminoMsg;
                fromProtoMsg(message: _101.SubspaceProtoMsg): _101.Subspace;
                toProto(message: _101.Subspace): Uint8Array;
                toProtoMsg(message: _101.Subspace): _101.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _100.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ParameterChangeProposal;
                fromPartial(object: Partial<_100.ParameterChangeProposal>): _100.ParameterChangeProposal;
                fromAmino(object: _100.ParameterChangeProposalAmino): _100.ParameterChangeProposal;
                toAmino(message: _100.ParameterChangeProposal): _100.ParameterChangeProposalAmino;
                fromAminoMsg(object: _100.ParameterChangeProposalAminoMsg): _100.ParameterChangeProposal;
                toAminoMsg(message: _100.ParameterChangeProposal): _100.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _100.ParameterChangeProposalProtoMsg): _100.ParameterChangeProposal;
                toProto(message: _100.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _100.ParameterChangeProposal): _100.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _100.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ParamChange;
                fromPartial(object: Partial<_100.ParamChange>): _100.ParamChange;
                fromAmino(object: _100.ParamChangeAmino): _100.ParamChange;
                toAmino(message: _100.ParamChange): _100.ParamChangeAmino;
                fromAminoMsg(object: _100.ParamChangeAminoMsg): _100.ParamChange;
                toAminoMsg(message: _100.ParamChange): _100.ParamChangeAminoMsg;
                fromProtoMsg(message: _100.ParamChangeProtoMsg): _100.ParamChange;
                toProto(message: _100.ParamChange): Uint8Array;
                toProtoMsg(message: _100.ParamChange): _100.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                signingInfo(request: _103.QuerySigningInfoRequest): Promise<_103.QuerySigningInfoResponse>;
                signingInfos(request?: _103.QuerySigningInfosRequest): Promise<_103.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _205.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _105.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _105.MsgUnjail): {
                        typeUrl: string;
                        value: _105.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _105.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _105.MsgUnjail): {
                        typeUrl: string;
                        value: _105.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUnjail) => _105.MsgUnjailAmino;
                    fromAmino: (object: _105.MsgUnjailAmino) => _105.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _105.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgUnjail;
                fromPartial(object: Partial<_105.MsgUnjail>): _105.MsgUnjail;
                fromAmino(object: _105.MsgUnjailAmino): _105.MsgUnjail;
                toAmino(message: _105.MsgUnjail): _105.MsgUnjailAmino;
                fromAminoMsg(object: _105.MsgUnjailAminoMsg): _105.MsgUnjail;
                toAminoMsg(message: _105.MsgUnjail): _105.MsgUnjailAminoMsg;
                fromProtoMsg(message: _105.MsgUnjailProtoMsg): _105.MsgUnjail;
                toProto(message: _105.MsgUnjail): Uint8Array;
                toProtoMsg(message: _105.MsgUnjail): _105.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _105.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgUnjailResponse;
                fromPartial(_: Partial<_105.MsgUnjailResponse>): _105.MsgUnjailResponse;
                fromAmino(_: _105.MsgUnjailResponseAmino): _105.MsgUnjailResponse;
                toAmino(_: _105.MsgUnjailResponse): _105.MsgUnjailResponseAmino;
                fromAminoMsg(object: _105.MsgUnjailResponseAminoMsg): _105.MsgUnjailResponse;
                toAminoMsg(message: _105.MsgUnjailResponse): _105.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUnjailResponseProtoMsg): _105.MsgUnjailResponse;
                toProto(message: _105.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUnjailResponse): _105.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _104.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorSigningInfo;
                fromPartial(object: Partial<_104.ValidatorSigningInfo>): _104.ValidatorSigningInfo;
                fromAmino(object: _104.ValidatorSigningInfoAmino): _104.ValidatorSigningInfo;
                toAmino(message: _104.ValidatorSigningInfo): _104.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _104.ValidatorSigningInfoAminoMsg): _104.ValidatorSigningInfo;
                toAminoMsg(message: _104.ValidatorSigningInfo): _104.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _104.ValidatorSigningInfoProtoMsg): _104.ValidatorSigningInfo;
                toProto(message: _104.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _104.ValidatorSigningInfo): _104.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _104.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Params;
                fromPartial(object: Partial<_104.Params>): _104.Params;
                fromAmino(object: _104.ParamsAmino): _104.Params;
                toAmino(message: _104.Params): _104.ParamsAmino;
                fromAminoMsg(object: _104.ParamsAminoMsg): _104.Params;
                toAminoMsg(message: _104.Params): _104.ParamsAminoMsg;
                fromProtoMsg(message: _104.ParamsProtoMsg): _104.Params;
                toProto(message: _104.Params): Uint8Array;
                toProtoMsg(message: _104.Params): _104.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _103.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.QueryParamsRequest;
                fromPartial(_: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
                fromAmino(_: _103.QueryParamsRequestAmino): _103.QueryParamsRequest;
                toAmino(_: _103.QueryParamsRequest): _103.QueryParamsRequestAmino;
                fromAminoMsg(object: _103.QueryParamsRequestAminoMsg): _103.QueryParamsRequest;
                toAminoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryParamsRequestProtoMsg): _103.QueryParamsRequest;
                toProto(message: _103.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _103.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryParamsResponse;
                fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
                fromAmino(object: _103.QueryParamsResponseAmino): _103.QueryParamsResponse;
                toAmino(message: _103.QueryParamsResponse): _103.QueryParamsResponseAmino;
                fromAminoMsg(object: _103.QueryParamsResponseAminoMsg): _103.QueryParamsResponse;
                toAminoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryParamsResponseProtoMsg): _103.QueryParamsResponse;
                toProto(message: _103.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _103.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QuerySigningInfoRequest;
                fromPartial(object: Partial<_103.QuerySigningInfoRequest>): _103.QuerySigningInfoRequest;
                fromAmino(object: _103.QuerySigningInfoRequestAmino): _103.QuerySigningInfoRequest;
                toAmino(message: _103.QuerySigningInfoRequest): _103.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _103.QuerySigningInfoRequestAminoMsg): _103.QuerySigningInfoRequest;
                toAminoMsg(message: _103.QuerySigningInfoRequest): _103.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _103.QuerySigningInfoRequestProtoMsg): _103.QuerySigningInfoRequest;
                toProto(message: _103.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _103.QuerySigningInfoRequest): _103.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _103.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QuerySigningInfoResponse;
                fromPartial(object: Partial<_103.QuerySigningInfoResponse>): _103.QuerySigningInfoResponse;
                fromAmino(object: _103.QuerySigningInfoResponseAmino): _103.QuerySigningInfoResponse;
                toAmino(message: _103.QuerySigningInfoResponse): _103.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _103.QuerySigningInfoResponseAminoMsg): _103.QuerySigningInfoResponse;
                toAminoMsg(message: _103.QuerySigningInfoResponse): _103.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _103.QuerySigningInfoResponseProtoMsg): _103.QuerySigningInfoResponse;
                toProto(message: _103.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _103.QuerySigningInfoResponse): _103.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _103.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QuerySigningInfosRequest;
                fromPartial(object: Partial<_103.QuerySigningInfosRequest>): _103.QuerySigningInfosRequest;
                fromAmino(object: _103.QuerySigningInfosRequestAmino): _103.QuerySigningInfosRequest;
                toAmino(message: _103.QuerySigningInfosRequest): _103.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _103.QuerySigningInfosRequestAminoMsg): _103.QuerySigningInfosRequest;
                toAminoMsg(message: _103.QuerySigningInfosRequest): _103.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _103.QuerySigningInfosRequestProtoMsg): _103.QuerySigningInfosRequest;
                toProto(message: _103.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _103.QuerySigningInfosRequest): _103.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _103.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QuerySigningInfosResponse;
                fromPartial(object: Partial<_103.QuerySigningInfosResponse>): _103.QuerySigningInfosResponse;
                fromAmino(object: _103.QuerySigningInfosResponseAmino): _103.QuerySigningInfosResponse;
                toAmino(message: _103.QuerySigningInfosResponse): _103.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _103.QuerySigningInfosResponseAminoMsg): _103.QuerySigningInfosResponse;
                toAminoMsg(message: _103.QuerySigningInfosResponse): _103.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _103.QuerySigningInfosResponseProtoMsg): _103.QuerySigningInfosResponse;
                toProto(message: _103.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _103.QuerySigningInfosResponse): _103.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _102.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.SigningInfo;
                fromPartial(object: Partial<_102.SigningInfo>): _102.SigningInfo;
                fromAmino(object: _102.SigningInfoAmino): _102.SigningInfo;
                toAmino(message: _102.SigningInfo): _102.SigningInfoAmino;
                fromAminoMsg(object: _102.SigningInfoAminoMsg): _102.SigningInfo;
                toAminoMsg(message: _102.SigningInfo): _102.SigningInfoAminoMsg;
                fromProtoMsg(message: _102.SigningInfoProtoMsg): _102.SigningInfo;
                toProto(message: _102.SigningInfo): Uint8Array;
                toProtoMsg(message: _102.SigningInfo): _102.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _102.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ValidatorMissedBlocks;
                fromPartial(object: Partial<_102.ValidatorMissedBlocks>): _102.ValidatorMissedBlocks;
                fromAmino(object: _102.ValidatorMissedBlocksAmino): _102.ValidatorMissedBlocks;
                toAmino(message: _102.ValidatorMissedBlocks): _102.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _102.ValidatorMissedBlocksAminoMsg): _102.ValidatorMissedBlocks;
                toAminoMsg(message: _102.ValidatorMissedBlocks): _102.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _102.ValidatorMissedBlocksProtoMsg): _102.ValidatorMissedBlocks;
                toProto(message: _102.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _102.ValidatorMissedBlocks): _102.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _102.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.MissedBlock;
                fromPartial(object: Partial<_102.MissedBlock>): _102.MissedBlock;
                fromAmino(object: _102.MissedBlockAmino): _102.MissedBlock;
                toAmino(message: _102.MissedBlock): _102.MissedBlockAmino;
                fromAminoMsg(object: _102.MissedBlockAminoMsg): _102.MissedBlock;
                toAminoMsg(message: _102.MissedBlock): _102.MissedBlockAminoMsg;
                fromProtoMsg(message: _102.MissedBlockProtoMsg): _102.MissedBlock;
                toProto(message: _102.MissedBlock): Uint8Array;
                toProtoMsg(message: _102.MissedBlock): _102.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _108.QueryValidatorsRequest): Promise<_108.QueryValidatorsResponse>;
                validator(request: _108.QueryValidatorRequest): Promise<_108.QueryValidatorResponse>;
                validatorDelegations(request: _108.QueryValidatorDelegationsRequest): Promise<_108.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _108.QueryValidatorUnbondingDelegationsRequest): Promise<_108.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _108.QueryDelegationRequest): Promise<_108.QueryDelegationResponse>;
                unbondingDelegation(request: _108.QueryUnbondingDelegationRequest): Promise<_108.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _108.QueryDelegatorDelegationsRequest): Promise<_108.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _108.QueryDelegatorUnbondingDelegationsRequest): Promise<_108.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _108.QueryRedelegationsRequest): Promise<_108.QueryRedelegationsResponse>;
                delegatorValidators(request: _108.QueryDelegatorValidatorsRequest): Promise<_108.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _108.QueryDelegatorValidatorRequest): Promise<_108.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _108.QueryHistoricalInfoRequest): Promise<_108.QueryHistoricalInfoResponse>;
                pool(request?: _108.QueryPoolRequest): Promise<_108.QueryPoolResponse>;
                params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _110.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _110.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _110.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _110.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _110.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _110.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _110.MsgCreateValidator): {
                        typeUrl: string;
                        value: _110.MsgCreateValidator;
                    };
                    editValidator(value: _110.MsgEditValidator): {
                        typeUrl: string;
                        value: _110.MsgEditValidator;
                    };
                    delegate(value: _110.MsgDelegate): {
                        typeUrl: string;
                        value: _110.MsgDelegate;
                    };
                    beginRedelegate(value: _110.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _110.MsgBeginRedelegate;
                    };
                    undelegate(value: _110.MsgUndelegate): {
                        typeUrl: string;
                        value: _110.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _110.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _110.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _110.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _110.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _110.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _110.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _110.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _110.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _110.MsgCreateValidator): {
                        typeUrl: string;
                        value: _110.MsgCreateValidator;
                    };
                    editValidator(value: _110.MsgEditValidator): {
                        typeUrl: string;
                        value: _110.MsgEditValidator;
                    };
                    delegate(value: _110.MsgDelegate): {
                        typeUrl: string;
                        value: _110.MsgDelegate;
                    };
                    beginRedelegate(value: _110.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _110.MsgBeginRedelegate;
                    };
                    undelegate(value: _110.MsgUndelegate): {
                        typeUrl: string;
                        value: _110.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _110.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _110.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _110.MsgCreateValidator) => _110.MsgCreateValidatorAmino;
                    fromAmino: (object: _110.MsgCreateValidatorAmino) => _110.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _110.MsgEditValidator) => _110.MsgEditValidatorAmino;
                    fromAmino: (object: _110.MsgEditValidatorAmino) => _110.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _110.MsgDelegate) => _110.MsgDelegateAmino;
                    fromAmino: (object: _110.MsgDelegateAmino) => _110.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _110.MsgBeginRedelegate) => _110.MsgBeginRedelegateAmino;
                    fromAmino: (object: _110.MsgBeginRedelegateAmino) => _110.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUndelegate) => _110.MsgUndelegateAmino;
                    fromAmino: (object: _110.MsgUndelegateAmino) => _110.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _110.MsgCancelUnbondingDelegation) => _110.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _110.MsgCancelUnbondingDelegationAmino) => _110.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _110.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgCreateValidator;
                fromPartial(object: Partial<_110.MsgCreateValidator>): _110.MsgCreateValidator;
                fromAmino(object: _110.MsgCreateValidatorAmino): _110.MsgCreateValidator;
                toAmino(message: _110.MsgCreateValidator): _110.MsgCreateValidatorAmino;
                fromAminoMsg(object: _110.MsgCreateValidatorAminoMsg): _110.MsgCreateValidator;
                toAminoMsg(message: _110.MsgCreateValidator): _110.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _110.MsgCreateValidatorProtoMsg): _110.MsgCreateValidator;
                toProto(message: _110.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _110.MsgCreateValidator): _110.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _110.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_110.MsgCreateValidatorResponse>): _110.MsgCreateValidatorResponse;
                fromAmino(_: _110.MsgCreateValidatorResponseAmino): _110.MsgCreateValidatorResponse;
                toAmino(_: _110.MsgCreateValidatorResponse): _110.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _110.MsgCreateValidatorResponseAminoMsg): _110.MsgCreateValidatorResponse;
                toAminoMsg(message: _110.MsgCreateValidatorResponse): _110.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _110.MsgCreateValidatorResponseProtoMsg): _110.MsgCreateValidatorResponse;
                toProto(message: _110.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _110.MsgCreateValidatorResponse): _110.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _110.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgEditValidator;
                fromPartial(object: Partial<_110.MsgEditValidator>): _110.MsgEditValidator;
                fromAmino(object: _110.MsgEditValidatorAmino): _110.MsgEditValidator;
                toAmino(message: _110.MsgEditValidator): _110.MsgEditValidatorAmino;
                fromAminoMsg(object: _110.MsgEditValidatorAminoMsg): _110.MsgEditValidator;
                toAminoMsg(message: _110.MsgEditValidator): _110.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _110.MsgEditValidatorProtoMsg): _110.MsgEditValidator;
                toProto(message: _110.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _110.MsgEditValidator): _110.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _110.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgEditValidatorResponse;
                fromPartial(_: Partial<_110.MsgEditValidatorResponse>): _110.MsgEditValidatorResponse;
                fromAmino(_: _110.MsgEditValidatorResponseAmino): _110.MsgEditValidatorResponse;
                toAmino(_: _110.MsgEditValidatorResponse): _110.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _110.MsgEditValidatorResponseAminoMsg): _110.MsgEditValidatorResponse;
                toAminoMsg(message: _110.MsgEditValidatorResponse): _110.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _110.MsgEditValidatorResponseProtoMsg): _110.MsgEditValidatorResponse;
                toProto(message: _110.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _110.MsgEditValidatorResponse): _110.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _110.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgDelegate;
                fromPartial(object: Partial<_110.MsgDelegate>): _110.MsgDelegate;
                fromAmino(object: _110.MsgDelegateAmino): _110.MsgDelegate;
                toAmino(message: _110.MsgDelegate): _110.MsgDelegateAmino;
                fromAminoMsg(object: _110.MsgDelegateAminoMsg): _110.MsgDelegate;
                toAminoMsg(message: _110.MsgDelegate): _110.MsgDelegateAminoMsg;
                fromProtoMsg(message: _110.MsgDelegateProtoMsg): _110.MsgDelegate;
                toProto(message: _110.MsgDelegate): Uint8Array;
                toProtoMsg(message: _110.MsgDelegate): _110.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _110.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgDelegateResponse;
                fromPartial(_: Partial<_110.MsgDelegateResponse>): _110.MsgDelegateResponse;
                fromAmino(_: _110.MsgDelegateResponseAmino): _110.MsgDelegateResponse;
                toAmino(_: _110.MsgDelegateResponse): _110.MsgDelegateResponseAmino;
                fromAminoMsg(object: _110.MsgDelegateResponseAminoMsg): _110.MsgDelegateResponse;
                toAminoMsg(message: _110.MsgDelegateResponse): _110.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _110.MsgDelegateResponseProtoMsg): _110.MsgDelegateResponse;
                toProto(message: _110.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _110.MsgDelegateResponse): _110.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _110.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgBeginRedelegate;
                fromPartial(object: Partial<_110.MsgBeginRedelegate>): _110.MsgBeginRedelegate;
                fromAmino(object: _110.MsgBeginRedelegateAmino): _110.MsgBeginRedelegate;
                toAmino(message: _110.MsgBeginRedelegate): _110.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _110.MsgBeginRedelegateAminoMsg): _110.MsgBeginRedelegate;
                toAminoMsg(message: _110.MsgBeginRedelegate): _110.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _110.MsgBeginRedelegateProtoMsg): _110.MsgBeginRedelegate;
                toProto(message: _110.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _110.MsgBeginRedelegate): _110.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _110.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_110.MsgBeginRedelegateResponse>): _110.MsgBeginRedelegateResponse;
                fromAmino(object: _110.MsgBeginRedelegateResponseAmino): _110.MsgBeginRedelegateResponse;
                toAmino(message: _110.MsgBeginRedelegateResponse): _110.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _110.MsgBeginRedelegateResponseAminoMsg): _110.MsgBeginRedelegateResponse;
                toAminoMsg(message: _110.MsgBeginRedelegateResponse): _110.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _110.MsgBeginRedelegateResponseProtoMsg): _110.MsgBeginRedelegateResponse;
                toProto(message: _110.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _110.MsgBeginRedelegateResponse): _110.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _110.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgUndelegate;
                fromPartial(object: Partial<_110.MsgUndelegate>): _110.MsgUndelegate;
                fromAmino(object: _110.MsgUndelegateAmino): _110.MsgUndelegate;
                toAmino(message: _110.MsgUndelegate): _110.MsgUndelegateAmino;
                fromAminoMsg(object: _110.MsgUndelegateAminoMsg): _110.MsgUndelegate;
                toAminoMsg(message: _110.MsgUndelegate): _110.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _110.MsgUndelegateProtoMsg): _110.MsgUndelegate;
                toProto(message: _110.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _110.MsgUndelegate): _110.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _110.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgUndelegateResponse;
                fromPartial(object: Partial<_110.MsgUndelegateResponse>): _110.MsgUndelegateResponse;
                fromAmino(object: _110.MsgUndelegateResponseAmino): _110.MsgUndelegateResponse;
                toAmino(message: _110.MsgUndelegateResponse): _110.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _110.MsgUndelegateResponseAminoMsg): _110.MsgUndelegateResponse;
                toAminoMsg(message: _110.MsgUndelegateResponse): _110.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUndelegateResponseProtoMsg): _110.MsgUndelegateResponse;
                toProto(message: _110.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUndelegateResponse): _110.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _110.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_110.MsgCancelUnbondingDelegation>): _110.MsgCancelUnbondingDelegation;
                fromAmino(object: _110.MsgCancelUnbondingDelegationAmino): _110.MsgCancelUnbondingDelegation;
                toAmino(message: _110.MsgCancelUnbondingDelegation): _110.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _110.MsgCancelUnbondingDelegationAminoMsg): _110.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _110.MsgCancelUnbondingDelegation): _110.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _110.MsgCancelUnbondingDelegationProtoMsg): _110.MsgCancelUnbondingDelegation;
                toProto(message: _110.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _110.MsgCancelUnbondingDelegation): _110.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _110.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_110.MsgCancelUnbondingDelegationResponse>): _110.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _110.MsgCancelUnbondingDelegationResponseAmino): _110.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _110.MsgCancelUnbondingDelegationResponse): _110.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _110.MsgCancelUnbondingDelegationResponseAminoMsg): _110.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _110.MsgCancelUnbondingDelegationResponse): _110.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _110.MsgCancelUnbondingDelegationResponseProtoMsg): _110.MsgCancelUnbondingDelegationResponse;
                toProto(message: _110.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _110.MsgCancelUnbondingDelegationResponse): _110.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _109.BondStatus;
            bondStatusToJSON(object: _109.BondStatus): string;
            BondStatus: typeof _109.BondStatus;
            BondStatusSDKType: typeof _109.BondStatus;
            BondStatusAmino: typeof _109.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _109.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.HistoricalInfo;
                fromPartial(object: Partial<_109.HistoricalInfo>): _109.HistoricalInfo;
                fromAmino(object: _109.HistoricalInfoAmino): _109.HistoricalInfo;
                toAmino(message: _109.HistoricalInfo): _109.HistoricalInfoAmino;
                fromAminoMsg(object: _109.HistoricalInfoAminoMsg): _109.HistoricalInfo;
                toAminoMsg(message: _109.HistoricalInfo): _109.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _109.HistoricalInfoProtoMsg): _109.HistoricalInfo;
                toProto(message: _109.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _109.HistoricalInfo): _109.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _109.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.CommissionRates;
                fromPartial(object: Partial<_109.CommissionRates>): _109.CommissionRates;
                fromAmino(object: _109.CommissionRatesAmino): _109.CommissionRates;
                toAmino(message: _109.CommissionRates): _109.CommissionRatesAmino;
                fromAminoMsg(object: _109.CommissionRatesAminoMsg): _109.CommissionRates;
                toAminoMsg(message: _109.CommissionRates): _109.CommissionRatesAminoMsg;
                fromProtoMsg(message: _109.CommissionRatesProtoMsg): _109.CommissionRates;
                toProto(message: _109.CommissionRates): Uint8Array;
                toProtoMsg(message: _109.CommissionRates): _109.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _109.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.Commission;
                fromPartial(object: Partial<_109.Commission>): _109.Commission;
                fromAmino(object: _109.CommissionAmino): _109.Commission;
                toAmino(message: _109.Commission): _109.CommissionAmino;
                fromAminoMsg(object: _109.CommissionAminoMsg): _109.Commission;
                toAminoMsg(message: _109.Commission): _109.CommissionAminoMsg;
                fromProtoMsg(message: _109.CommissionProtoMsg): _109.Commission;
                toProto(message: _109.Commission): Uint8Array;
                toProtoMsg(message: _109.Commission): _109.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _109.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.Description;
                fromPartial(object: Partial<_109.Description>): _109.Description;
                fromAmino(object: _109.DescriptionAmino): _109.Description;
                toAmino(message: _109.Description): _109.DescriptionAmino;
                fromAminoMsg(object: _109.DescriptionAminoMsg): _109.Description;
                toAminoMsg(message: _109.Description): _109.DescriptionAminoMsg;
                fromProtoMsg(message: _109.DescriptionProtoMsg): _109.Description;
                toProto(message: _109.Description): Uint8Array;
                toProtoMsg(message: _109.Description): _109.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _109.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.Validator;
                fromPartial(object: Partial<_109.Validator>): _109.Validator;
                fromAmino(object: _109.ValidatorAmino): _109.Validator;
                toAmino(message: _109.Validator): _109.ValidatorAmino;
                fromAminoMsg(object: _109.ValidatorAminoMsg): _109.Validator;
                toAminoMsg(message: _109.Validator): _109.ValidatorAminoMsg;
                fromProtoMsg(message: _109.ValidatorProtoMsg): _109.Validator;
                toProto(message: _109.Validator): Uint8Array;
                toProtoMsg(message: _109.Validator): _109.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _109.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.ValAddresses;
                fromPartial(object: Partial<_109.ValAddresses>): _109.ValAddresses;
                fromAmino(object: _109.ValAddressesAmino): _109.ValAddresses;
                toAmino(message: _109.ValAddresses): _109.ValAddressesAmino;
                fromAminoMsg(object: _109.ValAddressesAminoMsg): _109.ValAddresses;
                toAminoMsg(message: _109.ValAddresses): _109.ValAddressesAminoMsg;
                fromProtoMsg(message: _109.ValAddressesProtoMsg): _109.ValAddresses;
                toProto(message: _109.ValAddresses): Uint8Array;
                toProtoMsg(message: _109.ValAddresses): _109.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _109.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.DVPair;
                fromPartial(object: Partial<_109.DVPair>): _109.DVPair;
                fromAmino(object: _109.DVPairAmino): _109.DVPair;
                toAmino(message: _109.DVPair): _109.DVPairAmino;
                fromAminoMsg(object: _109.DVPairAminoMsg): _109.DVPair;
                toAminoMsg(message: _109.DVPair): _109.DVPairAminoMsg;
                fromProtoMsg(message: _109.DVPairProtoMsg): _109.DVPair;
                toProto(message: _109.DVPair): Uint8Array;
                toProtoMsg(message: _109.DVPair): _109.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _109.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.DVPairs;
                fromPartial(object: Partial<_109.DVPairs>): _109.DVPairs;
                fromAmino(object: _109.DVPairsAmino): _109.DVPairs;
                toAmino(message: _109.DVPairs): _109.DVPairsAmino;
                fromAminoMsg(object: _109.DVPairsAminoMsg): _109.DVPairs;
                toAminoMsg(message: _109.DVPairs): _109.DVPairsAminoMsg;
                fromProtoMsg(message: _109.DVPairsProtoMsg): _109.DVPairs;
                toProto(message: _109.DVPairs): Uint8Array;
                toProtoMsg(message: _109.DVPairs): _109.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _109.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.DVVTriplet;
                fromPartial(object: Partial<_109.DVVTriplet>): _109.DVVTriplet;
                fromAmino(object: _109.DVVTripletAmino): _109.DVVTriplet;
                toAmino(message: _109.DVVTriplet): _109.DVVTripletAmino;
                fromAminoMsg(object: _109.DVVTripletAminoMsg): _109.DVVTriplet;
                toAminoMsg(message: _109.DVVTriplet): _109.DVVTripletAminoMsg;
                fromProtoMsg(message: _109.DVVTripletProtoMsg): _109.DVVTriplet;
                toProto(message: _109.DVVTriplet): Uint8Array;
                toProtoMsg(message: _109.DVVTriplet): _109.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _109.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.DVVTriplets;
                fromPartial(object: Partial<_109.DVVTriplets>): _109.DVVTriplets;
                fromAmino(object: _109.DVVTripletsAmino): _109.DVVTriplets;
                toAmino(message: _109.DVVTriplets): _109.DVVTripletsAmino;
                fromAminoMsg(object: _109.DVVTripletsAminoMsg): _109.DVVTriplets;
                toAminoMsg(message: _109.DVVTriplets): _109.DVVTripletsAminoMsg;
                fromProtoMsg(message: _109.DVVTripletsProtoMsg): _109.DVVTriplets;
                toProto(message: _109.DVVTriplets): Uint8Array;
                toProtoMsg(message: _109.DVVTriplets): _109.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _109.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.Delegation;
                fromPartial(object: Partial<_109.Delegation>): _109.Delegation;
                fromAmino(object: _109.DelegationAmino): _109.Delegation;
                toAmino(message: _109.Delegation): _109.DelegationAmino;
                fromAminoMsg(object: _109.DelegationAminoMsg): _109.Delegation;
                toAminoMsg(message: _109.Delegation): _109.DelegationAminoMsg;
                fromProtoMsg(message: _109.DelegationProtoMsg): _109.Delegation;
                toProto(message: _109.Delegation): Uint8Array;
                toProtoMsg(message: _109.Delegation): _109.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _109.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.UnbondingDelegation;
                fromPartial(object: Partial<_109.UnbondingDelegation>): _109.UnbondingDelegation;
                fromAmino(object: _109.UnbondingDelegationAmino): _109.UnbondingDelegation;
                toAmino(message: _109.UnbondingDelegation): _109.UnbondingDelegationAmino;
                fromAminoMsg(object: _109.UnbondingDelegationAminoMsg): _109.UnbondingDelegation;
                toAminoMsg(message: _109.UnbondingDelegation): _109.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _109.UnbondingDelegationProtoMsg): _109.UnbondingDelegation;
                toProto(message: _109.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _109.UnbondingDelegation): _109.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _109.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.UnbondingDelegationEntry;
                fromPartial(object: Partial<_109.UnbondingDelegationEntry>): _109.UnbondingDelegationEntry;
                fromAmino(object: _109.UnbondingDelegationEntryAmino): _109.UnbondingDelegationEntry;
                toAmino(message: _109.UnbondingDelegationEntry): _109.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _109.UnbondingDelegationEntryAminoMsg): _109.UnbondingDelegationEntry;
                toAminoMsg(message: _109.UnbondingDelegationEntry): _109.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _109.UnbondingDelegationEntryProtoMsg): _109.UnbondingDelegationEntry;
                toProto(message: _109.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _109.UnbondingDelegationEntry): _109.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _109.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.RedelegationEntry;
                fromPartial(object: Partial<_109.RedelegationEntry>): _109.RedelegationEntry;
                fromAmino(object: _109.RedelegationEntryAmino): _109.RedelegationEntry;
                toAmino(message: _109.RedelegationEntry): _109.RedelegationEntryAmino;
                fromAminoMsg(object: _109.RedelegationEntryAminoMsg): _109.RedelegationEntry;
                toAminoMsg(message: _109.RedelegationEntry): _109.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _109.RedelegationEntryProtoMsg): _109.RedelegationEntry;
                toProto(message: _109.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _109.RedelegationEntry): _109.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _109.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.Redelegation;
                fromPartial(object: Partial<_109.Redelegation>): _109.Redelegation;
                fromAmino(object: _109.RedelegationAmino): _109.Redelegation;
                toAmino(message: _109.Redelegation): _109.RedelegationAmino;
                fromAminoMsg(object: _109.RedelegationAminoMsg): _109.Redelegation;
                toAminoMsg(message: _109.Redelegation): _109.RedelegationAminoMsg;
                fromProtoMsg(message: _109.RedelegationProtoMsg): _109.Redelegation;
                toProto(message: _109.Redelegation): Uint8Array;
                toProtoMsg(message: _109.Redelegation): _109.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _109.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.Params;
                fromPartial(object: Partial<_109.Params>): _109.Params;
                fromAmino(object: _109.ParamsAmino): _109.Params;
                toAmino(message: _109.Params): _109.ParamsAmino;
                fromAminoMsg(object: _109.ParamsAminoMsg): _109.Params;
                toAminoMsg(message: _109.Params): _109.ParamsAminoMsg;
                fromProtoMsg(message: _109.ParamsProtoMsg): _109.Params;
                toProto(message: _109.Params): Uint8Array;
                toProtoMsg(message: _109.Params): _109.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _109.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.DelegationResponse;
                fromPartial(object: Partial<_109.DelegationResponse>): _109.DelegationResponse;
                fromAmino(object: _109.DelegationResponseAmino): _109.DelegationResponse;
                toAmino(message: _109.DelegationResponse): _109.DelegationResponseAmino;
                fromAminoMsg(object: _109.DelegationResponseAminoMsg): _109.DelegationResponse;
                toAminoMsg(message: _109.DelegationResponse): _109.DelegationResponseAminoMsg;
                fromProtoMsg(message: _109.DelegationResponseProtoMsg): _109.DelegationResponse;
                toProto(message: _109.DelegationResponse): Uint8Array;
                toProtoMsg(message: _109.DelegationResponse): _109.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _109.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.RedelegationEntryResponse;
                fromPartial(object: Partial<_109.RedelegationEntryResponse>): _109.RedelegationEntryResponse;
                fromAmino(object: _109.RedelegationEntryResponseAmino): _109.RedelegationEntryResponse;
                toAmino(message: _109.RedelegationEntryResponse): _109.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _109.RedelegationEntryResponseAminoMsg): _109.RedelegationEntryResponse;
                toAminoMsg(message: _109.RedelegationEntryResponse): _109.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _109.RedelegationEntryResponseProtoMsg): _109.RedelegationEntryResponse;
                toProto(message: _109.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _109.RedelegationEntryResponse): _109.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _109.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.RedelegationResponse;
                fromPartial(object: Partial<_109.RedelegationResponse>): _109.RedelegationResponse;
                fromAmino(object: _109.RedelegationResponseAmino): _109.RedelegationResponse;
                toAmino(message: _109.RedelegationResponse): _109.RedelegationResponseAmino;
                fromAminoMsg(object: _109.RedelegationResponseAminoMsg): _109.RedelegationResponse;
                toAminoMsg(message: _109.RedelegationResponse): _109.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _109.RedelegationResponseProtoMsg): _109.RedelegationResponse;
                toProto(message: _109.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _109.RedelegationResponse): _109.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _109.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.Pool;
                fromPartial(object: Partial<_109.Pool>): _109.Pool;
                fromAmino(object: _109.PoolAmino): _109.Pool;
                toAmino(message: _109.Pool): _109.PoolAmino;
                fromAminoMsg(object: _109.PoolAminoMsg): _109.Pool;
                toAminoMsg(message: _109.Pool): _109.PoolAminoMsg;
                fromProtoMsg(message: _109.PoolProtoMsg): _109.Pool;
                toProto(message: _109.Pool): Uint8Array;
                toProtoMsg(message: _109.Pool): _109.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _108.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryValidatorsRequest;
                fromPartial(object: Partial<_108.QueryValidatorsRequest>): _108.QueryValidatorsRequest;
                fromAmino(object: _108.QueryValidatorsRequestAmino): _108.QueryValidatorsRequest;
                toAmino(message: _108.QueryValidatorsRequest): _108.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _108.QueryValidatorsRequestAminoMsg): _108.QueryValidatorsRequest;
                toAminoMsg(message: _108.QueryValidatorsRequest): _108.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryValidatorsRequestProtoMsg): _108.QueryValidatorsRequest;
                toProto(message: _108.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryValidatorsRequest): _108.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _108.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryValidatorsResponse;
                fromPartial(object: Partial<_108.QueryValidatorsResponse>): _108.QueryValidatorsResponse;
                fromAmino(object: _108.QueryValidatorsResponseAmino): _108.QueryValidatorsResponse;
                toAmino(message: _108.QueryValidatorsResponse): _108.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _108.QueryValidatorsResponseAminoMsg): _108.QueryValidatorsResponse;
                toAminoMsg(message: _108.QueryValidatorsResponse): _108.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryValidatorsResponseProtoMsg): _108.QueryValidatorsResponse;
                toProto(message: _108.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryValidatorsResponse): _108.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _108.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryValidatorRequest;
                fromPartial(object: Partial<_108.QueryValidatorRequest>): _108.QueryValidatorRequest;
                fromAmino(object: _108.QueryValidatorRequestAmino): _108.QueryValidatorRequest;
                toAmino(message: _108.QueryValidatorRequest): _108.QueryValidatorRequestAmino;
                fromAminoMsg(object: _108.QueryValidatorRequestAminoMsg): _108.QueryValidatorRequest;
                toAminoMsg(message: _108.QueryValidatorRequest): _108.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _108.QueryValidatorRequestProtoMsg): _108.QueryValidatorRequest;
                toProto(message: _108.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _108.QueryValidatorRequest): _108.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _108.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryValidatorResponse;
                fromPartial(object: Partial<_108.QueryValidatorResponse>): _108.QueryValidatorResponse;
                fromAmino(object: _108.QueryValidatorResponseAmino): _108.QueryValidatorResponse;
                toAmino(message: _108.QueryValidatorResponse): _108.QueryValidatorResponseAmino;
                fromAminoMsg(object: _108.QueryValidatorResponseAminoMsg): _108.QueryValidatorResponse;
                toAminoMsg(message: _108.QueryValidatorResponse): _108.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _108.QueryValidatorResponseProtoMsg): _108.QueryValidatorResponse;
                toProto(message: _108.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _108.QueryValidatorResponse): _108.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _108.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_108.QueryValidatorDelegationsRequest>): _108.QueryValidatorDelegationsRequest;
                fromAmino(object: _108.QueryValidatorDelegationsRequestAmino): _108.QueryValidatorDelegationsRequest;
                toAmino(message: _108.QueryValidatorDelegationsRequest): _108.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _108.QueryValidatorDelegationsRequestAminoMsg): _108.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _108.QueryValidatorDelegationsRequest): _108.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryValidatorDelegationsRequestProtoMsg): _108.QueryValidatorDelegationsRequest;
                toProto(message: _108.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryValidatorDelegationsRequest): _108.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _108.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_108.QueryValidatorDelegationsResponse>): _108.QueryValidatorDelegationsResponse;
                fromAmino(object: _108.QueryValidatorDelegationsResponseAmino): _108.QueryValidatorDelegationsResponse;
                toAmino(message: _108.QueryValidatorDelegationsResponse): _108.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _108.QueryValidatorDelegationsResponseAminoMsg): _108.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _108.QueryValidatorDelegationsResponse): _108.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryValidatorDelegationsResponseProtoMsg): _108.QueryValidatorDelegationsResponse;
                toProto(message: _108.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryValidatorDelegationsResponse): _108.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _108.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_108.QueryValidatorUnbondingDelegationsRequest>): _108.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _108.QueryValidatorUnbondingDelegationsRequestAmino): _108.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _108.QueryValidatorUnbondingDelegationsRequest): _108.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _108.QueryValidatorUnbondingDelegationsRequestAminoMsg): _108.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _108.QueryValidatorUnbondingDelegationsRequest): _108.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryValidatorUnbondingDelegationsRequestProtoMsg): _108.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _108.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryValidatorUnbondingDelegationsRequest): _108.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _108.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_108.QueryValidatorUnbondingDelegationsResponse>): _108.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _108.QueryValidatorUnbondingDelegationsResponseAmino): _108.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _108.QueryValidatorUnbondingDelegationsResponse): _108.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _108.QueryValidatorUnbondingDelegationsResponseAminoMsg): _108.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _108.QueryValidatorUnbondingDelegationsResponse): _108.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryValidatorUnbondingDelegationsResponseProtoMsg): _108.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _108.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryValidatorUnbondingDelegationsResponse): _108.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _108.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryDelegationRequest;
                fromPartial(object: Partial<_108.QueryDelegationRequest>): _108.QueryDelegationRequest;
                fromAmino(object: _108.QueryDelegationRequestAmino): _108.QueryDelegationRequest;
                toAmino(message: _108.QueryDelegationRequest): _108.QueryDelegationRequestAmino;
                fromAminoMsg(object: _108.QueryDelegationRequestAminoMsg): _108.QueryDelegationRequest;
                toAminoMsg(message: _108.QueryDelegationRequest): _108.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _108.QueryDelegationRequestProtoMsg): _108.QueryDelegationRequest;
                toProto(message: _108.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _108.QueryDelegationRequest): _108.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _108.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryDelegationResponse;
                fromPartial(object: Partial<_108.QueryDelegationResponse>): _108.QueryDelegationResponse;
                fromAmino(object: _108.QueryDelegationResponseAmino): _108.QueryDelegationResponse;
                toAmino(message: _108.QueryDelegationResponse): _108.QueryDelegationResponseAmino;
                fromAminoMsg(object: _108.QueryDelegationResponseAminoMsg): _108.QueryDelegationResponse;
                toAminoMsg(message: _108.QueryDelegationResponse): _108.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _108.QueryDelegationResponseProtoMsg): _108.QueryDelegationResponse;
                toProto(message: _108.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _108.QueryDelegationResponse): _108.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _108.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_108.QueryUnbondingDelegationRequest>): _108.QueryUnbondingDelegationRequest;
                fromAmino(object: _108.QueryUnbondingDelegationRequestAmino): _108.QueryUnbondingDelegationRequest;
                toAmino(message: _108.QueryUnbondingDelegationRequest): _108.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _108.QueryUnbondingDelegationRequestAminoMsg): _108.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _108.QueryUnbondingDelegationRequest): _108.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _108.QueryUnbondingDelegationRequestProtoMsg): _108.QueryUnbondingDelegationRequest;
                toProto(message: _108.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _108.QueryUnbondingDelegationRequest): _108.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _108.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_108.QueryUnbondingDelegationResponse>): _108.QueryUnbondingDelegationResponse;
                fromAmino(object: _108.QueryUnbondingDelegationResponseAmino): _108.QueryUnbondingDelegationResponse;
                toAmino(message: _108.QueryUnbondingDelegationResponse): _108.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _108.QueryUnbondingDelegationResponseAminoMsg): _108.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _108.QueryUnbondingDelegationResponse): _108.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _108.QueryUnbondingDelegationResponseProtoMsg): _108.QueryUnbondingDelegationResponse;
                toProto(message: _108.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _108.QueryUnbondingDelegationResponse): _108.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _108.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_108.QueryDelegatorDelegationsRequest>): _108.QueryDelegatorDelegationsRequest;
                fromAmino(object: _108.QueryDelegatorDelegationsRequestAmino): _108.QueryDelegatorDelegationsRequest;
                toAmino(message: _108.QueryDelegatorDelegationsRequest): _108.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _108.QueryDelegatorDelegationsRequestAminoMsg): _108.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _108.QueryDelegatorDelegationsRequest): _108.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryDelegatorDelegationsRequestProtoMsg): _108.QueryDelegatorDelegationsRequest;
                toProto(message: _108.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryDelegatorDelegationsRequest): _108.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _108.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_108.QueryDelegatorDelegationsResponse>): _108.QueryDelegatorDelegationsResponse;
                fromAmino(object: _108.QueryDelegatorDelegationsResponseAmino): _108.QueryDelegatorDelegationsResponse;
                toAmino(message: _108.QueryDelegatorDelegationsResponse): _108.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _108.QueryDelegatorDelegationsResponseAminoMsg): _108.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _108.QueryDelegatorDelegationsResponse): _108.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryDelegatorDelegationsResponseProtoMsg): _108.QueryDelegatorDelegationsResponse;
                toProto(message: _108.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryDelegatorDelegationsResponse): _108.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _108.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_108.QueryDelegatorUnbondingDelegationsRequest>): _108.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _108.QueryDelegatorUnbondingDelegationsRequestAmino): _108.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _108.QueryDelegatorUnbondingDelegationsRequest): _108.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _108.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _108.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _108.QueryDelegatorUnbondingDelegationsRequest): _108.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _108.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _108.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryDelegatorUnbondingDelegationsRequest): _108.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _108.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_108.QueryDelegatorUnbondingDelegationsResponse>): _108.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _108.QueryDelegatorUnbondingDelegationsResponseAmino): _108.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _108.QueryDelegatorUnbondingDelegationsResponse): _108.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _108.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _108.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _108.QueryDelegatorUnbondingDelegationsResponse): _108.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _108.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _108.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryDelegatorUnbondingDelegationsResponse): _108.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _108.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryRedelegationsRequest;
                fromPartial(object: Partial<_108.QueryRedelegationsRequest>): _108.QueryRedelegationsRequest;
                fromAmino(object: _108.QueryRedelegationsRequestAmino): _108.QueryRedelegationsRequest;
                toAmino(message: _108.QueryRedelegationsRequest): _108.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _108.QueryRedelegationsRequestAminoMsg): _108.QueryRedelegationsRequest;
                toAminoMsg(message: _108.QueryRedelegationsRequest): _108.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryRedelegationsRequestProtoMsg): _108.QueryRedelegationsRequest;
                toProto(message: _108.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryRedelegationsRequest): _108.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _108.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryRedelegationsResponse;
                fromPartial(object: Partial<_108.QueryRedelegationsResponse>): _108.QueryRedelegationsResponse;
                fromAmino(object: _108.QueryRedelegationsResponseAmino): _108.QueryRedelegationsResponse;
                toAmino(message: _108.QueryRedelegationsResponse): _108.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _108.QueryRedelegationsResponseAminoMsg): _108.QueryRedelegationsResponse;
                toAminoMsg(message: _108.QueryRedelegationsResponse): _108.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryRedelegationsResponseProtoMsg): _108.QueryRedelegationsResponse;
                toProto(message: _108.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryRedelegationsResponse): _108.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _108.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_108.QueryDelegatorValidatorsRequest>): _108.QueryDelegatorValidatorsRequest;
                fromAmino(object: _108.QueryDelegatorValidatorsRequestAmino): _108.QueryDelegatorValidatorsRequest;
                toAmino(message: _108.QueryDelegatorValidatorsRequest): _108.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _108.QueryDelegatorValidatorsRequestAminoMsg): _108.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _108.QueryDelegatorValidatorsRequest): _108.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryDelegatorValidatorsRequestProtoMsg): _108.QueryDelegatorValidatorsRequest;
                toProto(message: _108.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryDelegatorValidatorsRequest): _108.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _108.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_108.QueryDelegatorValidatorsResponse>): _108.QueryDelegatorValidatorsResponse;
                fromAmino(object: _108.QueryDelegatorValidatorsResponseAmino): _108.QueryDelegatorValidatorsResponse;
                toAmino(message: _108.QueryDelegatorValidatorsResponse): _108.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _108.QueryDelegatorValidatorsResponseAminoMsg): _108.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _108.QueryDelegatorValidatorsResponse): _108.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryDelegatorValidatorsResponseProtoMsg): _108.QueryDelegatorValidatorsResponse;
                toProto(message: _108.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryDelegatorValidatorsResponse): _108.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _108.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_108.QueryDelegatorValidatorRequest>): _108.QueryDelegatorValidatorRequest;
                fromAmino(object: _108.QueryDelegatorValidatorRequestAmino): _108.QueryDelegatorValidatorRequest;
                toAmino(message: _108.QueryDelegatorValidatorRequest): _108.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _108.QueryDelegatorValidatorRequestAminoMsg): _108.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _108.QueryDelegatorValidatorRequest): _108.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _108.QueryDelegatorValidatorRequestProtoMsg): _108.QueryDelegatorValidatorRequest;
                toProto(message: _108.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _108.QueryDelegatorValidatorRequest): _108.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _108.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_108.QueryDelegatorValidatorResponse>): _108.QueryDelegatorValidatorResponse;
                fromAmino(object: _108.QueryDelegatorValidatorResponseAmino): _108.QueryDelegatorValidatorResponse;
                toAmino(message: _108.QueryDelegatorValidatorResponse): _108.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _108.QueryDelegatorValidatorResponseAminoMsg): _108.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _108.QueryDelegatorValidatorResponse): _108.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _108.QueryDelegatorValidatorResponseProtoMsg): _108.QueryDelegatorValidatorResponse;
                toProto(message: _108.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _108.QueryDelegatorValidatorResponse): _108.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _108.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_108.QueryHistoricalInfoRequest>): _108.QueryHistoricalInfoRequest;
                fromAmino(object: _108.QueryHistoricalInfoRequestAmino): _108.QueryHistoricalInfoRequest;
                toAmino(message: _108.QueryHistoricalInfoRequest): _108.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _108.QueryHistoricalInfoRequestAminoMsg): _108.QueryHistoricalInfoRequest;
                toAminoMsg(message: _108.QueryHistoricalInfoRequest): _108.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _108.QueryHistoricalInfoRequestProtoMsg): _108.QueryHistoricalInfoRequest;
                toProto(message: _108.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _108.QueryHistoricalInfoRequest): _108.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _108.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_108.QueryHistoricalInfoResponse>): _108.QueryHistoricalInfoResponse;
                fromAmino(object: _108.QueryHistoricalInfoResponseAmino): _108.QueryHistoricalInfoResponse;
                toAmino(message: _108.QueryHistoricalInfoResponse): _108.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _108.QueryHistoricalInfoResponseAminoMsg): _108.QueryHistoricalInfoResponse;
                toAminoMsg(message: _108.QueryHistoricalInfoResponse): _108.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _108.QueryHistoricalInfoResponseProtoMsg): _108.QueryHistoricalInfoResponse;
                toProto(message: _108.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _108.QueryHistoricalInfoResponse): _108.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _108.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.QueryPoolRequest;
                fromPartial(_: Partial<_108.QueryPoolRequest>): _108.QueryPoolRequest;
                fromAmino(_: _108.QueryPoolRequestAmino): _108.QueryPoolRequest;
                toAmino(_: _108.QueryPoolRequest): _108.QueryPoolRequestAmino;
                fromAminoMsg(object: _108.QueryPoolRequestAminoMsg): _108.QueryPoolRequest;
                toAminoMsg(message: _108.QueryPoolRequest): _108.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _108.QueryPoolRequestProtoMsg): _108.QueryPoolRequest;
                toProto(message: _108.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _108.QueryPoolRequest): _108.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _108.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryPoolResponse;
                fromPartial(object: Partial<_108.QueryPoolResponse>): _108.QueryPoolResponse;
                fromAmino(object: _108.QueryPoolResponseAmino): _108.QueryPoolResponse;
                toAmino(message: _108.QueryPoolResponse): _108.QueryPoolResponseAmino;
                fromAminoMsg(object: _108.QueryPoolResponseAminoMsg): _108.QueryPoolResponse;
                toAminoMsg(message: _108.QueryPoolResponse): _108.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _108.QueryPoolResponseProtoMsg): _108.QueryPoolResponse;
                toProto(message: _108.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _108.QueryPoolResponse): _108.QueryPoolResponseProtoMsg;
            };
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _107.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.LastValidatorPower;
                fromPartial(object: Partial<_107.LastValidatorPower>): _107.LastValidatorPower;
                fromAmino(object: _107.LastValidatorPowerAmino): _107.LastValidatorPower;
                toAmino(message: _107.LastValidatorPower): _107.LastValidatorPowerAmino;
                fromAminoMsg(object: _107.LastValidatorPowerAminoMsg): _107.LastValidatorPower;
                toAminoMsg(message: _107.LastValidatorPower): _107.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _107.LastValidatorPowerProtoMsg): _107.LastValidatorPower;
                toProto(message: _107.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _107.LastValidatorPower): _107.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _106.AuthorizationType;
            authorizationTypeToJSON(object: _106.AuthorizationType): string;
            AuthorizationType: typeof _106.AuthorizationType;
            AuthorizationTypeSDKType: typeof _106.AuthorizationType;
            AuthorizationTypeAmino: typeof _106.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _106.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.StakeAuthorization;
                fromPartial(object: Partial<_106.StakeAuthorization>): _106.StakeAuthorization;
                fromAmino(object: _106.StakeAuthorizationAmino): _106.StakeAuthorization;
                toAmino(message: _106.StakeAuthorization): _106.StakeAuthorizationAmino;
                fromAminoMsg(object: _106.StakeAuthorizationAminoMsg): _106.StakeAuthorization;
                toAminoMsg(message: _106.StakeAuthorization): _106.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _106.StakeAuthorizationProtoMsg): _106.StakeAuthorization;
                toProto(message: _106.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _106.StakeAuthorization): _106.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _106.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.StakeAuthorization_Validators;
                fromPartial(object: Partial<_106.StakeAuthorization_Validators>): _106.StakeAuthorization_Validators;
                fromAmino(object: _106.StakeAuthorization_ValidatorsAmino): _106.StakeAuthorization_Validators;
                toAmino(message: _106.StakeAuthorization_Validators): _106.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _106.StakeAuthorization_ValidatorsAminoMsg): _106.StakeAuthorization_Validators;
                toAminoMsg(message: _106.StakeAuthorization_Validators): _106.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _106.StakeAuthorization_ValidatorsProtoMsg): _106.StakeAuthorization_Validators;
                toProto(message: _106.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _106.StakeAuthorization_Validators): _106.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _111.SignMode;
                signModeToJSON(object: _111.SignMode): string;
                SignMode: typeof _111.SignMode;
                SignModeSDKType: typeof _111.SignMode;
                SignModeAmino: typeof _111.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _111.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.SignatureDescriptors;
                    fromPartial(object: Partial<_111.SignatureDescriptors>): _111.SignatureDescriptors;
                    fromAmino(object: _111.SignatureDescriptorsAmino): _111.SignatureDescriptors;
                    toAmino(message: _111.SignatureDescriptors): _111.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _111.SignatureDescriptorsAminoMsg): _111.SignatureDescriptors;
                    toAminoMsg(message: _111.SignatureDescriptors): _111.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _111.SignatureDescriptorsProtoMsg): _111.SignatureDescriptors;
                    toProto(message: _111.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _111.SignatureDescriptors): _111.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _111.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.SignatureDescriptor;
                    fromPartial(object: Partial<_111.SignatureDescriptor>): _111.SignatureDescriptor;
                    fromAmino(object: _111.SignatureDescriptorAmino): _111.SignatureDescriptor;
                    toAmino(message: _111.SignatureDescriptor): _111.SignatureDescriptorAmino;
                    fromAminoMsg(object: _111.SignatureDescriptorAminoMsg): _111.SignatureDescriptor;
                    toAminoMsg(message: _111.SignatureDescriptor): _111.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _111.SignatureDescriptorProtoMsg): _111.SignatureDescriptor;
                    toProto(message: _111.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _111.SignatureDescriptor): _111.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _111.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_111.SignatureDescriptor_Data>): _111.SignatureDescriptor_Data;
                    fromAmino(object: _111.SignatureDescriptor_DataAmino): _111.SignatureDescriptor_Data;
                    toAmino(message: _111.SignatureDescriptor_Data): _111.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _111.SignatureDescriptor_DataAminoMsg): _111.SignatureDescriptor_Data;
                    toAminoMsg(message: _111.SignatureDescriptor_Data): _111.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _111.SignatureDescriptor_DataProtoMsg): _111.SignatureDescriptor_Data;
                    toProto(message: _111.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _111.SignatureDescriptor_Data): _111.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _111.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_111.SignatureDescriptor_Data_Single>): _111.SignatureDescriptor_Data_Single;
                    fromAmino(object: _111.SignatureDescriptor_Data_SingleAmino): _111.SignatureDescriptor_Data_Single;
                    toAmino(message: _111.SignatureDescriptor_Data_Single): _111.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _111.SignatureDescriptor_Data_SingleAminoMsg): _111.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _111.SignatureDescriptor_Data_Single): _111.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _111.SignatureDescriptor_Data_SingleProtoMsg): _111.SignatureDescriptor_Data_Single;
                    toProto(message: _111.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _111.SignatureDescriptor_Data_Single): _111.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _111.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_111.SignatureDescriptor_Data_Multi>): _111.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _111.SignatureDescriptor_Data_MultiAmino): _111.SignatureDescriptor_Data_Multi;
                    toAmino(message: _111.SignatureDescriptor_Data_Multi): _111.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _111.SignatureDescriptor_Data_MultiAminoMsg): _111.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _111.SignatureDescriptor_Data_Multi): _111.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _111.SignatureDescriptor_Data_MultiProtoMsg): _111.SignatureDescriptor_Data_Multi;
                    toProto(message: _111.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _111.SignatureDescriptor_Data_Multi): _111.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _226.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _112.SimulateRequest): Promise<_112.SimulateResponse>;
                getTx(request: _112.GetTxRequest): Promise<_112.GetTxResponse>;
                broadcastTx(request: _112.BroadcastTxRequest): Promise<_112.BroadcastTxResponse>;
                getTxsEvent(request: _112.GetTxsEventRequest): Promise<_112.GetTxsEventResponse>;
                getBlockWithTxs(request: _112.GetBlockWithTxsRequest): Promise<_112.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _113.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Tx;
                fromPartial(object: Partial<_113.Tx>): _113.Tx;
                fromAmino(object: _113.TxAmino): _113.Tx;
                toAmino(message: _113.Tx): _113.TxAmino;
                fromAminoMsg(object: _113.TxAminoMsg): _113.Tx;
                toAminoMsg(message: _113.Tx): _113.TxAminoMsg;
                fromProtoMsg(message: _113.TxProtoMsg): _113.Tx;
                toProto(message: _113.Tx): Uint8Array;
                toProtoMsg(message: _113.Tx): _113.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _113.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.TxRaw;
                fromPartial(object: Partial<_113.TxRaw>): _113.TxRaw;
                fromAmino(object: _113.TxRawAmino): _113.TxRaw;
                toAmino(message: _113.TxRaw): _113.TxRawAmino;
                fromAminoMsg(object: _113.TxRawAminoMsg): _113.TxRaw;
                toAminoMsg(message: _113.TxRaw): _113.TxRawAminoMsg;
                fromProtoMsg(message: _113.TxRawProtoMsg): _113.TxRaw;
                toProto(message: _113.TxRaw): Uint8Array;
                toProtoMsg(message: _113.TxRaw): _113.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _113.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.SignDoc;
                fromPartial(object: Partial<_113.SignDoc>): _113.SignDoc;
                fromAmino(object: _113.SignDocAmino): _113.SignDoc;
                toAmino(message: _113.SignDoc): _113.SignDocAmino;
                fromAminoMsg(object: _113.SignDocAminoMsg): _113.SignDoc;
                toAminoMsg(message: _113.SignDoc): _113.SignDocAminoMsg;
                fromProtoMsg(message: _113.SignDocProtoMsg): _113.SignDoc;
                toProto(message: _113.SignDoc): Uint8Array;
                toProtoMsg(message: _113.SignDoc): _113.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _113.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.SignDocDirectAux;
                fromPartial(object: Partial<_113.SignDocDirectAux>): _113.SignDocDirectAux;
                fromAmino(object: _113.SignDocDirectAuxAmino): _113.SignDocDirectAux;
                toAmino(message: _113.SignDocDirectAux): _113.SignDocDirectAuxAmino;
                fromAminoMsg(object: _113.SignDocDirectAuxAminoMsg): _113.SignDocDirectAux;
                toAminoMsg(message: _113.SignDocDirectAux): _113.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _113.SignDocDirectAuxProtoMsg): _113.SignDocDirectAux;
                toProto(message: _113.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _113.SignDocDirectAux): _113.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _113.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.TxBody;
                fromPartial(object: Partial<_113.TxBody>): _113.TxBody;
                fromAmino(object: _113.TxBodyAmino): _113.TxBody;
                toAmino(message: _113.TxBody): _113.TxBodyAmino;
                fromAminoMsg(object: _113.TxBodyAminoMsg): _113.TxBody;
                toAminoMsg(message: _113.TxBody): _113.TxBodyAminoMsg;
                fromProtoMsg(message: _113.TxBodyProtoMsg): _113.TxBody;
                toProto(message: _113.TxBody): Uint8Array;
                toProtoMsg(message: _113.TxBody): _113.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _113.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.AuthInfo;
                fromPartial(object: Partial<_113.AuthInfo>): _113.AuthInfo;
                fromAmino(object: _113.AuthInfoAmino): _113.AuthInfo;
                toAmino(message: _113.AuthInfo): _113.AuthInfoAmino;
                fromAminoMsg(object: _113.AuthInfoAminoMsg): _113.AuthInfo;
                toAminoMsg(message: _113.AuthInfo): _113.AuthInfoAminoMsg;
                fromProtoMsg(message: _113.AuthInfoProtoMsg): _113.AuthInfo;
                toProto(message: _113.AuthInfo): Uint8Array;
                toProtoMsg(message: _113.AuthInfo): _113.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _113.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.SignerInfo;
                fromPartial(object: Partial<_113.SignerInfo>): _113.SignerInfo;
                fromAmino(object: _113.SignerInfoAmino): _113.SignerInfo;
                toAmino(message: _113.SignerInfo): _113.SignerInfoAmino;
                fromAminoMsg(object: _113.SignerInfoAminoMsg): _113.SignerInfo;
                toAminoMsg(message: _113.SignerInfo): _113.SignerInfoAminoMsg;
                fromProtoMsg(message: _113.SignerInfoProtoMsg): _113.SignerInfo;
                toProto(message: _113.SignerInfo): Uint8Array;
                toProtoMsg(message: _113.SignerInfo): _113.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _113.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.ModeInfo;
                fromPartial(object: Partial<_113.ModeInfo>): _113.ModeInfo;
                fromAmino(object: _113.ModeInfoAmino): _113.ModeInfo;
                toAmino(message: _113.ModeInfo): _113.ModeInfoAmino;
                fromAminoMsg(object: _113.ModeInfoAminoMsg): _113.ModeInfo;
                toAminoMsg(message: _113.ModeInfo): _113.ModeInfoAminoMsg;
                fromProtoMsg(message: _113.ModeInfoProtoMsg): _113.ModeInfo;
                toProto(message: _113.ModeInfo): Uint8Array;
                toProtoMsg(message: _113.ModeInfo): _113.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _113.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.ModeInfo_Single;
                fromPartial(object: Partial<_113.ModeInfo_Single>): _113.ModeInfo_Single;
                fromAmino(object: _113.ModeInfo_SingleAmino): _113.ModeInfo_Single;
                toAmino(message: _113.ModeInfo_Single): _113.ModeInfo_SingleAmino;
                fromAminoMsg(object: _113.ModeInfo_SingleAminoMsg): _113.ModeInfo_Single;
                toAminoMsg(message: _113.ModeInfo_Single): _113.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _113.ModeInfo_SingleProtoMsg): _113.ModeInfo_Single;
                toProto(message: _113.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _113.ModeInfo_Single): _113.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _113.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.ModeInfo_Multi;
                fromPartial(object: Partial<_113.ModeInfo_Multi>): _113.ModeInfo_Multi;
                fromAmino(object: _113.ModeInfo_MultiAmino): _113.ModeInfo_Multi;
                toAmino(message: _113.ModeInfo_Multi): _113.ModeInfo_MultiAmino;
                fromAminoMsg(object: _113.ModeInfo_MultiAminoMsg): _113.ModeInfo_Multi;
                toAminoMsg(message: _113.ModeInfo_Multi): _113.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _113.ModeInfo_MultiProtoMsg): _113.ModeInfo_Multi;
                toProto(message: _113.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _113.ModeInfo_Multi): _113.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _113.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Fee;
                fromPartial(object: Partial<_113.Fee>): _113.Fee;
                fromAmino(object: _113.FeeAmino): _113.Fee;
                toAmino(message: _113.Fee): _113.FeeAmino;
                fromAminoMsg(object: _113.FeeAminoMsg): _113.Fee;
                toAminoMsg(message: _113.Fee): _113.FeeAminoMsg;
                fromProtoMsg(message: _113.FeeProtoMsg): _113.Fee;
                toProto(message: _113.Fee): Uint8Array;
                toProtoMsg(message: _113.Fee): _113.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _113.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Tip;
                fromPartial(object: Partial<_113.Tip>): _113.Tip;
                fromAmino(object: _113.TipAmino): _113.Tip;
                toAmino(message: _113.Tip): _113.TipAmino;
                fromAminoMsg(object: _113.TipAminoMsg): _113.Tip;
                toAminoMsg(message: _113.Tip): _113.TipAminoMsg;
                fromProtoMsg(message: _113.TipProtoMsg): _113.Tip;
                toProto(message: _113.Tip): Uint8Array;
                toProtoMsg(message: _113.Tip): _113.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _113.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.AuxSignerData;
                fromPartial(object: Partial<_113.AuxSignerData>): _113.AuxSignerData;
                fromAmino(object: _113.AuxSignerDataAmino): _113.AuxSignerData;
                toAmino(message: _113.AuxSignerData): _113.AuxSignerDataAmino;
                fromAminoMsg(object: _113.AuxSignerDataAminoMsg): _113.AuxSignerData;
                toAminoMsg(message: _113.AuxSignerData): _113.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _113.AuxSignerDataProtoMsg): _113.AuxSignerData;
                toProto(message: _113.AuxSignerData): Uint8Array;
                toProtoMsg(message: _113.AuxSignerData): _113.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _112.OrderBy;
            orderByToJSON(object: _112.OrderBy): string;
            broadcastModeFromJSON(object: any): _112.BroadcastMode;
            broadcastModeToJSON(object: _112.BroadcastMode): string;
            OrderBy: typeof _112.OrderBy;
            OrderBySDKType: typeof _112.OrderBy;
            OrderByAmino: typeof _112.OrderBy;
            BroadcastMode: typeof _112.BroadcastMode;
            BroadcastModeSDKType: typeof _112.BroadcastMode;
            BroadcastModeAmino: typeof _112.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _112.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GetTxsEventRequest;
                fromPartial(object: Partial<_112.GetTxsEventRequest>): _112.GetTxsEventRequest;
                fromAmino(object: _112.GetTxsEventRequestAmino): _112.GetTxsEventRequest;
                toAmino(message: _112.GetTxsEventRequest): _112.GetTxsEventRequestAmino;
                fromAminoMsg(object: _112.GetTxsEventRequestAminoMsg): _112.GetTxsEventRequest;
                toAminoMsg(message: _112.GetTxsEventRequest): _112.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _112.GetTxsEventRequestProtoMsg): _112.GetTxsEventRequest;
                toProto(message: _112.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _112.GetTxsEventRequest): _112.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _112.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GetTxsEventResponse;
                fromPartial(object: Partial<_112.GetTxsEventResponse>): _112.GetTxsEventResponse;
                fromAmino(object: _112.GetTxsEventResponseAmino): _112.GetTxsEventResponse;
                toAmino(message: _112.GetTxsEventResponse): _112.GetTxsEventResponseAmino;
                fromAminoMsg(object: _112.GetTxsEventResponseAminoMsg): _112.GetTxsEventResponse;
                toAminoMsg(message: _112.GetTxsEventResponse): _112.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _112.GetTxsEventResponseProtoMsg): _112.GetTxsEventResponse;
                toProto(message: _112.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _112.GetTxsEventResponse): _112.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _112.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.BroadcastTxRequest;
                fromPartial(object: Partial<_112.BroadcastTxRequest>): _112.BroadcastTxRequest;
                fromAmino(object: _112.BroadcastTxRequestAmino): _112.BroadcastTxRequest;
                toAmino(message: _112.BroadcastTxRequest): _112.BroadcastTxRequestAmino;
                fromAminoMsg(object: _112.BroadcastTxRequestAminoMsg): _112.BroadcastTxRequest;
                toAminoMsg(message: _112.BroadcastTxRequest): _112.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _112.BroadcastTxRequestProtoMsg): _112.BroadcastTxRequest;
                toProto(message: _112.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _112.BroadcastTxRequest): _112.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _112.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.BroadcastTxResponse;
                fromPartial(object: Partial<_112.BroadcastTxResponse>): _112.BroadcastTxResponse;
                fromAmino(object: _112.BroadcastTxResponseAmino): _112.BroadcastTxResponse;
                toAmino(message: _112.BroadcastTxResponse): _112.BroadcastTxResponseAmino;
                fromAminoMsg(object: _112.BroadcastTxResponseAminoMsg): _112.BroadcastTxResponse;
                toAminoMsg(message: _112.BroadcastTxResponse): _112.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _112.BroadcastTxResponseProtoMsg): _112.BroadcastTxResponse;
                toProto(message: _112.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _112.BroadcastTxResponse): _112.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _112.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.SimulateRequest;
                fromPartial(object: Partial<_112.SimulateRequest>): _112.SimulateRequest;
                fromAmino(object: _112.SimulateRequestAmino): _112.SimulateRequest;
                toAmino(message: _112.SimulateRequest): _112.SimulateRequestAmino;
                fromAminoMsg(object: _112.SimulateRequestAminoMsg): _112.SimulateRequest;
                toAminoMsg(message: _112.SimulateRequest): _112.SimulateRequestAminoMsg;
                fromProtoMsg(message: _112.SimulateRequestProtoMsg): _112.SimulateRequest;
                toProto(message: _112.SimulateRequest): Uint8Array;
                toProtoMsg(message: _112.SimulateRequest): _112.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _112.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.SimulateResponse;
                fromPartial(object: Partial<_112.SimulateResponse>): _112.SimulateResponse;
                fromAmino(object: _112.SimulateResponseAmino): _112.SimulateResponse;
                toAmino(message: _112.SimulateResponse): _112.SimulateResponseAmino;
                fromAminoMsg(object: _112.SimulateResponseAminoMsg): _112.SimulateResponse;
                toAminoMsg(message: _112.SimulateResponse): _112.SimulateResponseAminoMsg;
                fromProtoMsg(message: _112.SimulateResponseProtoMsg): _112.SimulateResponse;
                toProto(message: _112.SimulateResponse): Uint8Array;
                toProtoMsg(message: _112.SimulateResponse): _112.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _112.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GetTxRequest;
                fromPartial(object: Partial<_112.GetTxRequest>): _112.GetTxRequest;
                fromAmino(object: _112.GetTxRequestAmino): _112.GetTxRequest;
                toAmino(message: _112.GetTxRequest): _112.GetTxRequestAmino;
                fromAminoMsg(object: _112.GetTxRequestAminoMsg): _112.GetTxRequest;
                toAminoMsg(message: _112.GetTxRequest): _112.GetTxRequestAminoMsg;
                fromProtoMsg(message: _112.GetTxRequestProtoMsg): _112.GetTxRequest;
                toProto(message: _112.GetTxRequest): Uint8Array;
                toProtoMsg(message: _112.GetTxRequest): _112.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _112.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GetTxResponse;
                fromPartial(object: Partial<_112.GetTxResponse>): _112.GetTxResponse;
                fromAmino(object: _112.GetTxResponseAmino): _112.GetTxResponse;
                toAmino(message: _112.GetTxResponse): _112.GetTxResponseAmino;
                fromAminoMsg(object: _112.GetTxResponseAminoMsg): _112.GetTxResponse;
                toAminoMsg(message: _112.GetTxResponse): _112.GetTxResponseAminoMsg;
                fromProtoMsg(message: _112.GetTxResponseProtoMsg): _112.GetTxResponse;
                toProto(message: _112.GetTxResponse): Uint8Array;
                toProtoMsg(message: _112.GetTxResponse): _112.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _112.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_112.GetBlockWithTxsRequest>): _112.GetBlockWithTxsRequest;
                fromAmino(object: _112.GetBlockWithTxsRequestAmino): _112.GetBlockWithTxsRequest;
                toAmino(message: _112.GetBlockWithTxsRequest): _112.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _112.GetBlockWithTxsRequestAminoMsg): _112.GetBlockWithTxsRequest;
                toAminoMsg(message: _112.GetBlockWithTxsRequest): _112.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _112.GetBlockWithTxsRequestProtoMsg): _112.GetBlockWithTxsRequest;
                toProto(message: _112.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _112.GetBlockWithTxsRequest): _112.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _112.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_112.GetBlockWithTxsResponse>): _112.GetBlockWithTxsResponse;
                fromAmino(object: _112.GetBlockWithTxsResponseAmino): _112.GetBlockWithTxsResponse;
                toAmino(message: _112.GetBlockWithTxsResponse): _112.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _112.GetBlockWithTxsResponseAminoMsg): _112.GetBlockWithTxsResponse;
                toAminoMsg(message: _112.GetBlockWithTxsResponse): _112.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _112.GetBlockWithTxsResponseProtoMsg): _112.GetBlockWithTxsResponse;
                toProto(message: _112.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _112.GetBlockWithTxsResponse): _112.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _114.QueryCurrentPlanRequest): Promise<_114.QueryCurrentPlanResponse>;
                appliedPlan(request: _114.QueryAppliedPlanRequest): Promise<_114.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _114.QueryUpgradedConsensusStateRequest): Promise<_114.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _114.QueryModuleVersionsRequest): Promise<_114.QueryModuleVersionsResponse>;
                authority(request?: _114.QueryAuthorityRequest): Promise<_114.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _115.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _115.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _115.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _115.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _115.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _115.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _115.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _115.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _115.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _115.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _115.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _115.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _115.MsgSoftwareUpgrade) => _115.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _115.MsgSoftwareUpgradeAmino) => _115.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _115.MsgCancelUpgrade) => _115.MsgCancelUpgradeAmino;
                    fromAmino: (object: _115.MsgCancelUpgradeAmino) => _115.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _116.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.Plan;
                fromPartial(object: Partial<_116.Plan>): _116.Plan;
                fromAmino(object: _116.PlanAmino): _116.Plan;
                toAmino(message: _116.Plan): _116.PlanAmino;
                fromAminoMsg(object: _116.PlanAminoMsg): _116.Plan;
                toAminoMsg(message: _116.Plan): _116.PlanAminoMsg;
                fromProtoMsg(message: _116.PlanProtoMsg): _116.Plan;
                toProto(message: _116.Plan): Uint8Array;
                toProtoMsg(message: _116.Plan): _116.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _116.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_116.SoftwareUpgradeProposal>): _116.SoftwareUpgradeProposal;
                fromAmino(object: _116.SoftwareUpgradeProposalAmino): _116.SoftwareUpgradeProposal;
                toAmino(message: _116.SoftwareUpgradeProposal): _116.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _116.SoftwareUpgradeProposalAminoMsg): _116.SoftwareUpgradeProposal;
                toAminoMsg(message: _116.SoftwareUpgradeProposal): _116.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _116.SoftwareUpgradeProposalProtoMsg): _116.SoftwareUpgradeProposal;
                toProto(message: _116.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _116.SoftwareUpgradeProposal): _116.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _116.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_116.CancelSoftwareUpgradeProposal>): _116.CancelSoftwareUpgradeProposal;
                fromAmino(object: _116.CancelSoftwareUpgradeProposalAmino): _116.CancelSoftwareUpgradeProposal;
                toAmino(message: _116.CancelSoftwareUpgradeProposal): _116.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _116.CancelSoftwareUpgradeProposalAminoMsg): _116.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _116.CancelSoftwareUpgradeProposal): _116.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _116.CancelSoftwareUpgradeProposalProtoMsg): _116.CancelSoftwareUpgradeProposal;
                toProto(message: _116.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _116.CancelSoftwareUpgradeProposal): _116.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _116.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.ModuleVersion;
                fromPartial(object: Partial<_116.ModuleVersion>): _116.ModuleVersion;
                fromAmino(object: _116.ModuleVersionAmino): _116.ModuleVersion;
                toAmino(message: _116.ModuleVersion): _116.ModuleVersionAmino;
                fromAminoMsg(object: _116.ModuleVersionAminoMsg): _116.ModuleVersion;
                toAminoMsg(message: _116.ModuleVersion): _116.ModuleVersionAminoMsg;
                fromProtoMsg(message: _116.ModuleVersionProtoMsg): _116.ModuleVersion;
                toProto(message: _116.ModuleVersion): Uint8Array;
                toProtoMsg(message: _116.ModuleVersion): _116.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _115.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_115.MsgSoftwareUpgrade>): _115.MsgSoftwareUpgrade;
                fromAmino(object: _115.MsgSoftwareUpgradeAmino): _115.MsgSoftwareUpgrade;
                toAmino(message: _115.MsgSoftwareUpgrade): _115.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _115.MsgSoftwareUpgradeAminoMsg): _115.MsgSoftwareUpgrade;
                toAminoMsg(message: _115.MsgSoftwareUpgrade): _115.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _115.MsgSoftwareUpgradeProtoMsg): _115.MsgSoftwareUpgrade;
                toProto(message: _115.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _115.MsgSoftwareUpgrade): _115.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _115.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_115.MsgSoftwareUpgradeResponse>): _115.MsgSoftwareUpgradeResponse;
                fromAmino(_: _115.MsgSoftwareUpgradeResponseAmino): _115.MsgSoftwareUpgradeResponse;
                toAmino(_: _115.MsgSoftwareUpgradeResponse): _115.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _115.MsgSoftwareUpgradeResponseAminoMsg): _115.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _115.MsgSoftwareUpgradeResponse): _115.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _115.MsgSoftwareUpgradeResponseProtoMsg): _115.MsgSoftwareUpgradeResponse;
                toProto(message: _115.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _115.MsgSoftwareUpgradeResponse): _115.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _115.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgCancelUpgrade;
                fromPartial(object: Partial<_115.MsgCancelUpgrade>): _115.MsgCancelUpgrade;
                fromAmino(object: _115.MsgCancelUpgradeAmino): _115.MsgCancelUpgrade;
                toAmino(message: _115.MsgCancelUpgrade): _115.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _115.MsgCancelUpgradeAminoMsg): _115.MsgCancelUpgrade;
                toAminoMsg(message: _115.MsgCancelUpgrade): _115.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _115.MsgCancelUpgradeProtoMsg): _115.MsgCancelUpgrade;
                toProto(message: _115.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _115.MsgCancelUpgrade): _115.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _115.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_115.MsgCancelUpgradeResponse>): _115.MsgCancelUpgradeResponse;
                fromAmino(_: _115.MsgCancelUpgradeResponseAmino): _115.MsgCancelUpgradeResponse;
                toAmino(_: _115.MsgCancelUpgradeResponse): _115.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _115.MsgCancelUpgradeResponseAminoMsg): _115.MsgCancelUpgradeResponse;
                toAminoMsg(message: _115.MsgCancelUpgradeResponse): _115.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _115.MsgCancelUpgradeResponseProtoMsg): _115.MsgCancelUpgradeResponse;
                toProto(message: _115.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _115.MsgCancelUpgradeResponse): _115.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _114.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_114.QueryCurrentPlanRequest>): _114.QueryCurrentPlanRequest;
                fromAmino(_: _114.QueryCurrentPlanRequestAmino): _114.QueryCurrentPlanRequest;
                toAmino(_: _114.QueryCurrentPlanRequest): _114.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _114.QueryCurrentPlanRequestAminoMsg): _114.QueryCurrentPlanRequest;
                toAminoMsg(message: _114.QueryCurrentPlanRequest): _114.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _114.QueryCurrentPlanRequestProtoMsg): _114.QueryCurrentPlanRequest;
                toProto(message: _114.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _114.QueryCurrentPlanRequest): _114.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _114.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_114.QueryCurrentPlanResponse>): _114.QueryCurrentPlanResponse;
                fromAmino(object: _114.QueryCurrentPlanResponseAmino): _114.QueryCurrentPlanResponse;
                toAmino(message: _114.QueryCurrentPlanResponse): _114.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _114.QueryCurrentPlanResponseAminoMsg): _114.QueryCurrentPlanResponse;
                toAminoMsg(message: _114.QueryCurrentPlanResponse): _114.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _114.QueryCurrentPlanResponseProtoMsg): _114.QueryCurrentPlanResponse;
                toProto(message: _114.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _114.QueryCurrentPlanResponse): _114.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _114.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_114.QueryAppliedPlanRequest>): _114.QueryAppliedPlanRequest;
                fromAmino(object: _114.QueryAppliedPlanRequestAmino): _114.QueryAppliedPlanRequest;
                toAmino(message: _114.QueryAppliedPlanRequest): _114.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _114.QueryAppliedPlanRequestAminoMsg): _114.QueryAppliedPlanRequest;
                toAminoMsg(message: _114.QueryAppliedPlanRequest): _114.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _114.QueryAppliedPlanRequestProtoMsg): _114.QueryAppliedPlanRequest;
                toProto(message: _114.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _114.QueryAppliedPlanRequest): _114.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _114.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_114.QueryAppliedPlanResponse>): _114.QueryAppliedPlanResponse;
                fromAmino(object: _114.QueryAppliedPlanResponseAmino): _114.QueryAppliedPlanResponse;
                toAmino(message: _114.QueryAppliedPlanResponse): _114.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _114.QueryAppliedPlanResponseAminoMsg): _114.QueryAppliedPlanResponse;
                toAminoMsg(message: _114.QueryAppliedPlanResponse): _114.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _114.QueryAppliedPlanResponseProtoMsg): _114.QueryAppliedPlanResponse;
                toProto(message: _114.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _114.QueryAppliedPlanResponse): _114.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _114.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_114.QueryUpgradedConsensusStateRequest>): _114.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _114.QueryUpgradedConsensusStateRequestAmino): _114.QueryUpgradedConsensusStateRequest;
                toAmino(message: _114.QueryUpgradedConsensusStateRequest): _114.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _114.QueryUpgradedConsensusStateRequestAminoMsg): _114.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _114.QueryUpgradedConsensusStateRequest): _114.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _114.QueryUpgradedConsensusStateRequestProtoMsg): _114.QueryUpgradedConsensusStateRequest;
                toProto(message: _114.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _114.QueryUpgradedConsensusStateRequest): _114.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _114.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_114.QueryUpgradedConsensusStateResponse>): _114.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _114.QueryUpgradedConsensusStateResponseAmino): _114.QueryUpgradedConsensusStateResponse;
                toAmino(message: _114.QueryUpgradedConsensusStateResponse): _114.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _114.QueryUpgradedConsensusStateResponseAminoMsg): _114.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _114.QueryUpgradedConsensusStateResponse): _114.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _114.QueryUpgradedConsensusStateResponseProtoMsg): _114.QueryUpgradedConsensusStateResponse;
                toProto(message: _114.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _114.QueryUpgradedConsensusStateResponse): _114.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _114.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_114.QueryModuleVersionsRequest>): _114.QueryModuleVersionsRequest;
                fromAmino(object: _114.QueryModuleVersionsRequestAmino): _114.QueryModuleVersionsRequest;
                toAmino(message: _114.QueryModuleVersionsRequest): _114.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _114.QueryModuleVersionsRequestAminoMsg): _114.QueryModuleVersionsRequest;
                toAminoMsg(message: _114.QueryModuleVersionsRequest): _114.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryModuleVersionsRequestProtoMsg): _114.QueryModuleVersionsRequest;
                toProto(message: _114.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryModuleVersionsRequest): _114.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _114.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_114.QueryModuleVersionsResponse>): _114.QueryModuleVersionsResponse;
                fromAmino(object: _114.QueryModuleVersionsResponseAmino): _114.QueryModuleVersionsResponse;
                toAmino(message: _114.QueryModuleVersionsResponse): _114.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _114.QueryModuleVersionsResponseAminoMsg): _114.QueryModuleVersionsResponse;
                toAminoMsg(message: _114.QueryModuleVersionsResponse): _114.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryModuleVersionsResponseProtoMsg): _114.QueryModuleVersionsResponse;
                toProto(message: _114.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryModuleVersionsResponse): _114.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _114.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.QueryAuthorityRequest;
                fromPartial(_: Partial<_114.QueryAuthorityRequest>): _114.QueryAuthorityRequest;
                fromAmino(_: _114.QueryAuthorityRequestAmino): _114.QueryAuthorityRequest;
                toAmino(_: _114.QueryAuthorityRequest): _114.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _114.QueryAuthorityRequestAminoMsg): _114.QueryAuthorityRequest;
                toAminoMsg(message: _114.QueryAuthorityRequest): _114.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _114.QueryAuthorityRequestProtoMsg): _114.QueryAuthorityRequest;
                toProto(message: _114.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _114.QueryAuthorityRequest): _114.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _114.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryAuthorityResponse;
                fromPartial(object: Partial<_114.QueryAuthorityResponse>): _114.QueryAuthorityResponse;
                fromAmino(object: _114.QueryAuthorityResponseAmino): _114.QueryAuthorityResponse;
                toAmino(message: _114.QueryAuthorityResponse): _114.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _114.QueryAuthorityResponseAminoMsg): _114.QueryAuthorityResponse;
                toAminoMsg(message: _114.QueryAuthorityResponse): _114.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _114.QueryAuthorityResponseProtoMsg): _114.QueryAuthorityResponse;
                toProto(message: _114.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _114.QueryAuthorityResponse): _114.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _117.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _117.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _117.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _117.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _117.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _117.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _117.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _117.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _117.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _117.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _117.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _117.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _117.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _117.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _117.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _117.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _117.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _117.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _117.MsgCreateVestingAccount) => _117.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _117.MsgCreateVestingAccountAmino) => _117.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _117.MsgCreatePermanentLockedAccount) => _117.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _117.MsgCreatePermanentLockedAccountAmino) => _117.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _117.MsgCreatePeriodicVestingAccount) => _117.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _117.MsgCreatePeriodicVestingAccountAmino) => _117.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _118.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.BaseVestingAccount;
                fromPartial(object: Partial<_118.BaseVestingAccount>): _118.BaseVestingAccount;
                fromAmino(object: _118.BaseVestingAccountAmino): _118.BaseVestingAccount;
                toAmino(message: _118.BaseVestingAccount): _118.BaseVestingAccountAmino;
                fromAminoMsg(object: _118.BaseVestingAccountAminoMsg): _118.BaseVestingAccount;
                toAminoMsg(message: _118.BaseVestingAccount): _118.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _118.BaseVestingAccountProtoMsg): _118.BaseVestingAccount;
                toProto(message: _118.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _118.BaseVestingAccount): _118.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _118.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ContinuousVestingAccount;
                fromPartial(object: Partial<_118.ContinuousVestingAccount>): _118.ContinuousVestingAccount;
                fromAmino(object: _118.ContinuousVestingAccountAmino): _118.ContinuousVestingAccount;
                toAmino(message: _118.ContinuousVestingAccount): _118.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _118.ContinuousVestingAccountAminoMsg): _118.ContinuousVestingAccount;
                toAminoMsg(message: _118.ContinuousVestingAccount): _118.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _118.ContinuousVestingAccountProtoMsg): _118.ContinuousVestingAccount;
                toProto(message: _118.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _118.ContinuousVestingAccount): _118.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _118.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.DelayedVestingAccount;
                fromPartial(object: Partial<_118.DelayedVestingAccount>): _118.DelayedVestingAccount;
                fromAmino(object: _118.DelayedVestingAccountAmino): _118.DelayedVestingAccount;
                toAmino(message: _118.DelayedVestingAccount): _118.DelayedVestingAccountAmino;
                fromAminoMsg(object: _118.DelayedVestingAccountAminoMsg): _118.DelayedVestingAccount;
                toAminoMsg(message: _118.DelayedVestingAccount): _118.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _118.DelayedVestingAccountProtoMsg): _118.DelayedVestingAccount;
                toProto(message: _118.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _118.DelayedVestingAccount): _118.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _118.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Period;
                fromPartial(object: Partial<_118.Period>): _118.Period;
                fromAmino(object: _118.PeriodAmino): _118.Period;
                toAmino(message: _118.Period): _118.PeriodAmino;
                fromAminoMsg(object: _118.PeriodAminoMsg): _118.Period;
                toAminoMsg(message: _118.Period): _118.PeriodAminoMsg;
                fromProtoMsg(message: _118.PeriodProtoMsg): _118.Period;
                toProto(message: _118.Period): Uint8Array;
                toProtoMsg(message: _118.Period): _118.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _118.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.PeriodicVestingAccount;
                fromPartial(object: Partial<_118.PeriodicVestingAccount>): _118.PeriodicVestingAccount;
                fromAmino(object: _118.PeriodicVestingAccountAmino): _118.PeriodicVestingAccount;
                toAmino(message: _118.PeriodicVestingAccount): _118.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _118.PeriodicVestingAccountAminoMsg): _118.PeriodicVestingAccount;
                toAminoMsg(message: _118.PeriodicVestingAccount): _118.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _118.PeriodicVestingAccountProtoMsg): _118.PeriodicVestingAccount;
                toProto(message: _118.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _118.PeriodicVestingAccount): _118.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _118.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.PermanentLockedAccount;
                fromPartial(object: Partial<_118.PermanentLockedAccount>): _118.PermanentLockedAccount;
                fromAmino(object: _118.PermanentLockedAccountAmino): _118.PermanentLockedAccount;
                toAmino(message: _118.PermanentLockedAccount): _118.PermanentLockedAccountAmino;
                fromAminoMsg(object: _118.PermanentLockedAccountAminoMsg): _118.PermanentLockedAccount;
                toAminoMsg(message: _118.PermanentLockedAccount): _118.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _118.PermanentLockedAccountProtoMsg): _118.PermanentLockedAccount;
                toProto(message: _118.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _118.PermanentLockedAccount): _118.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _117.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgCreateVestingAccount;
                fromPartial(object: Partial<_117.MsgCreateVestingAccount>): _117.MsgCreateVestingAccount;
                fromAmino(object: _117.MsgCreateVestingAccountAmino): _117.MsgCreateVestingAccount;
                toAmino(message: _117.MsgCreateVestingAccount): _117.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _117.MsgCreateVestingAccountAminoMsg): _117.MsgCreateVestingAccount;
                toAminoMsg(message: _117.MsgCreateVestingAccount): _117.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _117.MsgCreateVestingAccountProtoMsg): _117.MsgCreateVestingAccount;
                toProto(message: _117.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _117.MsgCreateVestingAccount): _117.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _117.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_117.MsgCreateVestingAccountResponse>): _117.MsgCreateVestingAccountResponse;
                fromAmino(_: _117.MsgCreateVestingAccountResponseAmino): _117.MsgCreateVestingAccountResponse;
                toAmino(_: _117.MsgCreateVestingAccountResponse): _117.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _117.MsgCreateVestingAccountResponseAminoMsg): _117.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _117.MsgCreateVestingAccountResponse): _117.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _117.MsgCreateVestingAccountResponseProtoMsg): _117.MsgCreateVestingAccountResponse;
                toProto(message: _117.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _117.MsgCreateVestingAccountResponse): _117.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _117.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_117.MsgCreatePermanentLockedAccount>): _117.MsgCreatePermanentLockedAccount;
                fromAmino(object: _117.MsgCreatePermanentLockedAccountAmino): _117.MsgCreatePermanentLockedAccount;
                toAmino(message: _117.MsgCreatePermanentLockedAccount): _117.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _117.MsgCreatePermanentLockedAccountAminoMsg): _117.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _117.MsgCreatePermanentLockedAccount): _117.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _117.MsgCreatePermanentLockedAccountProtoMsg): _117.MsgCreatePermanentLockedAccount;
                toProto(message: _117.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _117.MsgCreatePermanentLockedAccount): _117.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _117.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_117.MsgCreatePermanentLockedAccountResponse>): _117.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _117.MsgCreatePermanentLockedAccountResponseAmino): _117.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _117.MsgCreatePermanentLockedAccountResponse): _117.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _117.MsgCreatePermanentLockedAccountResponseAminoMsg): _117.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _117.MsgCreatePermanentLockedAccountResponse): _117.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _117.MsgCreatePermanentLockedAccountResponseProtoMsg): _117.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _117.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _117.MsgCreatePermanentLockedAccountResponse): _117.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _117.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_117.MsgCreatePeriodicVestingAccount>): _117.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _117.MsgCreatePeriodicVestingAccountAmino): _117.MsgCreatePeriodicVestingAccount;
                toAmino(message: _117.MsgCreatePeriodicVestingAccount): _117.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _117.MsgCreatePeriodicVestingAccountAminoMsg): _117.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _117.MsgCreatePeriodicVestingAccount): _117.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _117.MsgCreatePeriodicVestingAccountProtoMsg): _117.MsgCreatePeriodicVestingAccount;
                toProto(message: _117.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _117.MsgCreatePeriodicVestingAccount): _117.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _117.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_117.MsgCreatePeriodicVestingAccountResponse>): _117.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _117.MsgCreatePeriodicVestingAccountResponseAmino): _117.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _117.MsgCreatePeriodicVestingAccountResponse): _117.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _117.MsgCreatePeriodicVestingAccountResponseAminoMsg): _117.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _117.MsgCreatePeriodicVestingAccountResponse): _117.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _117.MsgCreatePeriodicVestingAccountResponseProtoMsg): _117.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _117.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _117.MsgCreatePeriodicVestingAccountResponse): _117.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _228.MsgClientImpl;
                };
                bank: {
                    v1beta1: _229.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _230.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _231.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _232.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _233.MsgClientImpl;
                };
                gov: {
                    v1: _234.MsgClientImpl;
                    v1beta1: _235.MsgClientImpl;
                };
                group: {
                    v1: _236.MsgClientImpl;
                };
                nft: {
                    v1beta1: _237.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _238.MsgClientImpl;
                };
                staking: {
                    v1beta1: _239.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _240.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _241.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _26.QueryConfigRequest): Promise<_26.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _29.QueryAccountsRequest): Promise<_29.QueryAccountsResponse>;
                        account(request: _29.QueryAccountRequest): Promise<_29.QueryAccountResponse>;
                        accountAddressByID(request: _29.QueryAccountAddressByIDRequest): Promise<_29.QueryAccountAddressByIDResponse>;
                        params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        moduleAccounts(request?: _29.QueryModuleAccountsRequest): Promise<_29.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _29.QueryModuleAccountByNameRequest): Promise<_29.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _29.Bech32PrefixRequest): Promise<_29.Bech32PrefixResponse>;
                        addressBytesToString(request: _29.AddressBytesToStringRequest): Promise<_29.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _29.AddressStringToBytesRequest): Promise<_29.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _33.QueryGrantsRequest): Promise<_33.QueryGrantsResponse>;
                        granterGrants(request: _33.QueryGranterGrantsRequest): Promise<_33.QueryGranterGrantsResponse>;
                        granteeGrants(request: _33.QueryGranteeGrantsRequest): Promise<_33.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _38.QueryBalanceRequest): Promise<_38.QueryBalanceResponse>;
                        allBalances(request: _38.QueryAllBalancesRequest): Promise<_38.QueryAllBalancesResponse>;
                        spendableBalances(request: _38.QuerySpendableBalancesRequest): Promise<_38.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _38.QueryTotalSupplyRequest): Promise<_38.QueryTotalSupplyResponse>;
                        supplyOf(request: _38.QuerySupplyOfRequest): Promise<_38.QuerySupplyOfResponse>;
                        params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
                        denomMetadata(request: _38.QueryDenomMetadataRequest): Promise<_38.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _38.QueryDenomsMetadataRequest): Promise<_38.QueryDenomsMetadataResponse>;
                        denomOwners(request: _38.QueryDenomOwnersRequest): Promise<_38.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _42.ConfigRequest): Promise<_42.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _49.GetNodeInfoRequest): Promise<_49.GetNodeInfoResponse>;
                            getSyncing(request?: _49.GetSyncingRequest): Promise<_49.GetSyncingResponse>;
                            getLatestBlock(request?: _49.GetLatestBlockRequest): Promise<_49.GetLatestBlockResponse>;
                            getBlockByHeight(request: _49.GetBlockByHeightRequest): Promise<_49.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _49.GetLatestValidatorSetRequest): Promise<_49.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _49.GetValidatorSetByHeightRequest): Promise<_49.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _49.ABCIQueryRequest): Promise<_49.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _64.QueryValidatorOutstandingRewardsRequest): Promise<_64.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _64.QueryValidatorCommissionRequest): Promise<_64.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _64.QueryValidatorSlashesRequest): Promise<_64.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _64.QueryDelegationRewardsRequest): Promise<_64.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _64.QueryDelegationTotalRewardsRequest): Promise<_64.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _64.QueryDelegatorValidatorsRequest): Promise<_64.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _64.QueryDelegatorWithdrawAddressRequest): Promise<_64.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _64.QueryCommunityPoolRequest): Promise<_64.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _68.QueryEvidenceRequest): Promise<_68.QueryEvidenceResponse>;
                        allEvidence(request?: _68.QueryAllEvidenceRequest): Promise<_68.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _72.QueryAllowanceRequest): Promise<_72.QueryAllowanceResponse>;
                        allowances(request: _72.QueryAllowancesRequest): Promise<_72.QueryAllowancesResponse>;
                        allowancesByGranter(request: _72.QueryAllowancesByGranterRequest): Promise<_72.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _77.QueryProposalRequest): Promise<_77.QueryProposalResponse>;
                        proposals(request: _77.QueryProposalsRequest): Promise<_77.QueryProposalsResponse>;
                        vote(request: _77.QueryVoteRequest): Promise<_77.QueryVoteResponse>;
                        votes(request: _77.QueryVotesRequest): Promise<_77.QueryVotesResponse>;
                        params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        deposit(request: _77.QueryDepositRequest): Promise<_77.QueryDepositResponse>;
                        deposits(request: _77.QueryDepositsRequest): Promise<_77.QueryDepositsResponse>;
                        tallyResult(request: _77.QueryTallyResultRequest): Promise<_77.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _81.QueryProposalRequest): Promise<_81.QueryProposalResponse>;
                        proposals(request: _81.QueryProposalsRequest): Promise<_81.QueryProposalsResponse>;
                        vote(request: _81.QueryVoteRequest): Promise<_81.QueryVoteResponse>;
                        votes(request: _81.QueryVotesRequest): Promise<_81.QueryVotesResponse>;
                        params(request: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        deposit(request: _81.QueryDepositRequest): Promise<_81.QueryDepositResponse>;
                        deposits(request: _81.QueryDepositsRequest): Promise<_81.QueryDepositsResponse>;
                        tallyResult(request: _81.QueryTallyResultRequest): Promise<_81.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _85.QueryGroupInfoRequest): Promise<_85.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _85.QueryGroupPolicyInfoRequest): Promise<_85.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _85.QueryGroupMembersRequest): Promise<_85.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _85.QueryGroupsByAdminRequest): Promise<_85.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _85.QueryGroupPoliciesByGroupRequest): Promise<_85.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _85.QueryGroupPoliciesByAdminRequest): Promise<_85.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _85.QueryProposalRequest): Promise<_85.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _85.QueryProposalsByGroupPolicyRequest): Promise<_85.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _85.QueryVoteByProposalVoterRequest): Promise<_85.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _85.QueryVotesByProposalRequest): Promise<_85.QueryVotesByProposalResponse>;
                        votesByVoter(request: _85.QueryVotesByVoterRequest): Promise<_85.QueryVotesByVoterResponse>;
                        groupsByMember(request: _85.QueryGroupsByMemberRequest): Promise<_85.QueryGroupsByMemberResponse>;
                        tallyResult(request: _85.QueryTallyResultRequest): Promise<_85.QueryTallyResultResponse>;
                        groups(request?: _85.QueryGroupsRequest): Promise<_85.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                        inflation(request?: _90.QueryInflationRequest): Promise<_90.QueryInflationResponse>;
                        annualProvisions(request?: _90.QueryAnnualProvisionsRequest): Promise<_90.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _95.QueryBalanceRequest): Promise<_95.QueryBalanceResponse>;
                        owner(request: _95.QueryOwnerRequest): Promise<_95.QueryOwnerResponse>;
                        supply(request: _95.QuerySupplyRequest): Promise<_95.QuerySupplyResponse>;
                        nFTs(request: _95.QueryNFTsRequest): Promise<_95.QueryNFTsResponse>;
                        nFT(request: _95.QueryNFTRequest): Promise<_95.QueryNFTResponse>;
                        class(request: _95.QueryClassRequest): Promise<_95.QueryClassResponse>;
                        classes(request?: _95.QueryClassesRequest): Promise<_95.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                        subspaces(request?: _101.QuerySubspacesRequest): Promise<_101.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        signingInfo(request: _103.QuerySigningInfoRequest): Promise<_103.QuerySigningInfoResponse>;
                        signingInfos(request?: _103.QuerySigningInfosRequest): Promise<_103.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _108.QueryValidatorsRequest): Promise<_108.QueryValidatorsResponse>;
                        validator(request: _108.QueryValidatorRequest): Promise<_108.QueryValidatorResponse>;
                        validatorDelegations(request: _108.QueryValidatorDelegationsRequest): Promise<_108.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _108.QueryValidatorUnbondingDelegationsRequest): Promise<_108.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _108.QueryDelegationRequest): Promise<_108.QueryDelegationResponse>;
                        unbondingDelegation(request: _108.QueryUnbondingDelegationRequest): Promise<_108.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _108.QueryDelegatorDelegationsRequest): Promise<_108.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _108.QueryDelegatorUnbondingDelegationsRequest): Promise<_108.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _108.QueryRedelegationsRequest): Promise<_108.QueryRedelegationsResponse>;
                        delegatorValidators(request: _108.QueryDelegatorValidatorsRequest): Promise<_108.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _108.QueryDelegatorValidatorRequest): Promise<_108.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _108.QueryHistoricalInfoRequest): Promise<_108.QueryHistoricalInfoResponse>;
                        pool(request?: _108.QueryPoolRequest): Promise<_108.QueryPoolResponse>;
                        params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _112.SimulateRequest): Promise<_112.SimulateResponse>;
                        getTx(request: _112.GetTxRequest): Promise<_112.GetTxResponse>;
                        broadcastTx(request: _112.BroadcastTxRequest): Promise<_112.BroadcastTxResponse>;
                        getTxsEvent(request: _112.GetTxsEventRequest): Promise<_112.GetTxsEventResponse>;
                        getBlockWithTxs(request: _112.GetBlockWithTxsRequest): Promise<_112.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _114.QueryCurrentPlanRequest): Promise<_114.QueryCurrentPlanResponse>;
                        appliedPlan(request: _114.QueryAppliedPlanRequest): Promise<_114.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _114.QueryUpgradedConsensusStateRequest): Promise<_114.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _114.QueryModuleVersionsRequest): Promise<_114.QueryModuleVersionsResponse>;
                        authority(request?: _114.QueryAuthorityRequest): Promise<_114.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _191.LCDQueryClient;
                };
                authz: {
                    v1beta1: _192.LCDQueryClient;
                };
                bank: {
                    v1beta1: _193.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _194.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _195.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _196.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _197.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _198.LCDQueryClient;
                };
                gov: {
                    v1: _199.LCDQueryClient;
                    v1beta1: _200.LCDQueryClient;
                };
                group: {
                    v1: _201.LCDQueryClient;
                };
                mint: {
                    v1beta1: _202.LCDQueryClient;
                };
                nft: {
                    v1beta1: _203.LCDQueryClient;
                };
                params: {
                    v1beta1: _204.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _205.LCDQueryClient;
                };
                staking: {
                    v1beta1: _206.LCDQueryClient;
                };
                tx: {
                    v1beta1: _207.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _208.LCDQueryClient;
                };
            };
        }>;
    };
}
