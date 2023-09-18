import * as _26 from "./app/module/v1alpha1/module";
import * as _27 from "./app/v1alpha1/config";
import * as _28 from "./app/v1alpha1/module";
import * as _29 from "./app/v1alpha1/query";
import * as _30 from "./auth/v1beta1/auth";
import * as _31 from "./auth/v1beta1/genesis";
import * as _32 from "./auth/v1beta1/query";
import * as _33 from "./authz/v1beta1/authz";
import * as _34 from "./authz/v1beta1/event";
import * as _35 from "./authz/v1beta1/genesis";
import * as _36 from "./authz/v1beta1/query";
import * as _37 from "./authz/v1beta1/tx";
import * as _38 from "./bank/v1beta1/authz";
import * as _39 from "./bank/v1beta1/bank";
import * as _40 from "./bank/v1beta1/genesis";
import * as _41 from "./bank/v1beta1/query";
import * as _42 from "./bank/v1beta1/tx";
import * as _43 from "./base/abci/v1beta1/abci";
import * as _44 from "./base/kv/v1beta1/kv";
import * as _45 from "./base/node/v1beta1/query";
import * as _46 from "./base/query/v1beta1/pagination";
import * as _47 from "./base/reflection/v1beta1/reflection";
import * as _48 from "./base/reflection/v2alpha1/reflection";
import * as _49 from "./base/snapshots/v1beta1/snapshot";
import * as _50 from "./base/store/v1beta1/commit_info";
import * as _51 from "./base/store/v1beta1/listening";
import * as _52 from "./base/tendermint/v1beta1/query";
import * as _53 from "./base/tendermint/v1beta1/types";
import * as _54 from "./base/v1beta1/coin";
import * as _55 from "./capability/v1beta1/capability";
import * as _56 from "./capability/v1beta1/genesis";
import * as _57 from "./crisis/v1beta1/genesis";
import * as _58 from "./crisis/v1beta1/tx";
import * as _59 from "./crypto/ed25519/keys";
import * as _60 from "./crypto/hd/v1/hd";
import * as _61 from "./crypto/keyring/v1/record";
import * as _62 from "./crypto/multisig/keys";
import * as _63 from "./crypto/secp256k1/keys";
import * as _64 from "./crypto/secp256r1/keys";
import * as _65 from "./distribution/v1beta1/distribution";
import * as _66 from "./distribution/v1beta1/genesis";
import * as _67 from "./distribution/v1beta1/query";
import * as _68 from "./distribution/v1beta1/tx";
import * as _69 from "./evidence/v1beta1/evidence";
import * as _70 from "./evidence/v1beta1/genesis";
import * as _71 from "./evidence/v1beta1/query";
import * as _72 from "./evidence/v1beta1/tx";
import * as _73 from "./feegrant/v1beta1/feegrant";
import * as _74 from "./feegrant/v1beta1/genesis";
import * as _75 from "./feegrant/v1beta1/query";
import * as _76 from "./feegrant/v1beta1/tx";
import * as _77 from "./genutil/v1beta1/genesis";
import * as _78 from "./gov/v1/genesis";
import * as _79 from "./gov/v1/gov";
import * as _80 from "./gov/v1/query";
import * as _81 from "./gov/v1/tx";
import * as _82 from "./gov/v1beta1/genesis";
import * as _83 from "./gov/v1beta1/gov";
import * as _84 from "./gov/v1beta1/query";
import * as _85 from "./gov/v1beta1/tx";
import * as _86 from "./group/v1/events";
import * as _87 from "./group/v1/genesis";
import * as _88 from "./group/v1/query";
import * as _89 from "./group/v1/tx";
import * as _90 from "./group/v1/types";
import * as _91 from "./mint/v1beta1/genesis";
import * as _92 from "./mint/v1beta1/mint";
import * as _93 from "./mint/v1beta1/query";
import * as _95 from "./nft/v1beta1/event";
import * as _96 from "./nft/v1beta1/genesis";
import * as _97 from "./nft/v1beta1/nft";
import * as _98 from "./nft/v1beta1/query";
import * as _99 from "./nft/v1beta1/tx";
import * as _100 from "./orm/module/v1alpha1/module";
import * as _101 from "./orm/v1/orm";
import * as _102 from "./orm/v1alpha1/schema";
import * as _103 from "./params/v1beta1/params";
import * as _104 from "./params/v1beta1/query";
import * as _105 from "./slashing/v1beta1/genesis";
import * as _106 from "./slashing/v1beta1/query";
import * as _107 from "./slashing/v1beta1/slashing";
import * as _108 from "./slashing/v1beta1/tx";
import * as _109 from "./staking/v1beta1/authz";
import * as _110 from "./staking/v1beta1/genesis";
import * as _111 from "./staking/v1beta1/query";
import * as _112 from "./staking/v1beta1/staking";
import * as _113 from "./staking/v1beta1/tx";
import * as _114 from "./tx/signing/v1beta1/signing";
import * as _115 from "./tx/v1beta1/service";
import * as _116 from "./tx/v1beta1/tx";
import * as _117 from "./upgrade/v1beta1/query";
import * as _118 from "./upgrade/v1beta1/tx";
import * as _119 from "./upgrade/v1beta1/upgrade";
import * as _120 from "./vesting/v1beta1/tx";
import * as _121 from "./vesting/v1beta1/vesting";
import * as _179 from "./auth/v1beta1/query.lcd";
import * as _180 from "./authz/v1beta1/query.lcd";
import * as _181 from "./bank/v1beta1/query.lcd";
import * as _182 from "./base/node/v1beta1/query.lcd";
import * as _183 from "./base/tendermint/v1beta1/query.lcd";
import * as _184 from "./distribution/v1beta1/query.lcd";
import * as _185 from "./evidence/v1beta1/query.lcd";
import * as _186 from "./feegrant/v1beta1/query.lcd";
import * as _187 from "./gov/v1/query.lcd";
import * as _188 from "./gov/v1beta1/query.lcd";
import * as _189 from "./group/v1/query.lcd";
import * as _190 from "./mint/v1beta1/query.lcd";
import * as _191 from "./nft/v1beta1/query.lcd";
import * as _192 from "./params/v1beta1/query.lcd";
import * as _193 from "./slashing/v1beta1/query.lcd";
import * as _194 from "./staking/v1beta1/query.lcd";
import * as _195 from "./tx/v1beta1/service.lcd";
import * as _196 from "./upgrade/v1beta1/query.lcd";
import * as _197 from "./app/v1alpha1/query.rpc.Query";
import * as _198 from "./auth/v1beta1/query.rpc.Query";
import * as _199 from "./authz/v1beta1/query.rpc.Query";
import * as _200 from "./bank/v1beta1/query.rpc.Query";
import * as _201 from "./base/node/v1beta1/query.rpc.Service";
import * as _202 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _203 from "./distribution/v1beta1/query.rpc.Query";
import * as _204 from "./evidence/v1beta1/query.rpc.Query";
import * as _205 from "./feegrant/v1beta1/query.rpc.Query";
import * as _206 from "./gov/v1/query.rpc.Query";
import * as _207 from "./gov/v1beta1/query.rpc.Query";
import * as _208 from "./group/v1/query.rpc.Query";
import * as _209 from "./mint/v1beta1/query.rpc.Query";
import * as _210 from "./nft/v1beta1/query.rpc.Query";
import * as _211 from "./params/v1beta1/query.rpc.Query";
import * as _212 from "./slashing/v1beta1/query.rpc.Query";
import * as _213 from "./staking/v1beta1/query.rpc.Query";
import * as _214 from "./tx/v1beta1/service.rpc.Service";
import * as _215 from "./upgrade/v1beta1/query.rpc.Query";
import * as _216 from "./authz/v1beta1/tx.rpc.msg";
import * as _217 from "./bank/v1beta1/tx.rpc.msg";
import * as _218 from "./crisis/v1beta1/tx.rpc.msg";
import * as _219 from "./distribution/v1beta1/tx.rpc.msg";
import * as _220 from "./evidence/v1beta1/tx.rpc.msg";
import * as _221 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _222 from "./gov/v1/tx.rpc.msg";
import * as _223 from "./gov/v1beta1/tx.rpc.msg";
import * as _224 from "./group/v1/tx.rpc.msg";
import * as _225 from "./nft/v1beta1/tx.rpc.msg";
import * as _226 from "./slashing/v1beta1/tx.rpc.msg";
import * as _227 from "./staking/v1beta1/tx.rpc.msg";
import * as _228 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _229 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _26.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.Module;
                    fromPartial(_: Partial<_26.Module>): _26.Module;
                    fromAmino(_: _26.ModuleAmino): _26.Module;
                    toAmino(_: _26.Module): _26.ModuleAmino;
                    fromAminoMsg(object: _26.ModuleAminoMsg): _26.Module;
                    toAminoMsg(message: _26.Module): _26.ModuleAminoMsg;
                    fromProtoMsg(message: _26.ModuleProtoMsg): _26.Module;
                    toProto(message: _26.Module): Uint8Array;
                    toProtoMsg(message: _26.Module): _26.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _29.QueryConfigRequest): Promise<_29.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _29.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.QueryConfigRequest;
                fromPartial(_: Partial<_29.QueryConfigRequest>): _29.QueryConfigRequest;
                fromAmino(_: _29.QueryConfigRequestAmino): _29.QueryConfigRequest;
                toAmino(_: _29.QueryConfigRequest): _29.QueryConfigRequestAmino;
                fromAminoMsg(object: _29.QueryConfigRequestAminoMsg): _29.QueryConfigRequest;
                toAminoMsg(message: _29.QueryConfigRequest): _29.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _29.QueryConfigRequestProtoMsg): _29.QueryConfigRequest;
                toProto(message: _29.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _29.QueryConfigRequest): _29.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _29.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryConfigResponse;
                fromPartial(object: Partial<_29.QueryConfigResponse>): _29.QueryConfigResponse;
                fromAmino(object: _29.QueryConfigResponseAmino): _29.QueryConfigResponse;
                toAmino(message: _29.QueryConfigResponse): _29.QueryConfigResponseAmino;
                fromAminoMsg(object: _29.QueryConfigResponseAminoMsg): _29.QueryConfigResponse;
                toAminoMsg(message: _29.QueryConfigResponse): _29.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _29.QueryConfigResponseProtoMsg): _29.QueryConfigResponse;
                toProto(message: _29.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _29.QueryConfigResponse): _29.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _28.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.ModuleDescriptor;
                fromPartial(object: Partial<_28.ModuleDescriptor>): _28.ModuleDescriptor;
                fromAmino(object: _28.ModuleDescriptorAmino): _28.ModuleDescriptor;
                toAmino(message: _28.ModuleDescriptor): _28.ModuleDescriptorAmino;
                fromAminoMsg(object: _28.ModuleDescriptorAminoMsg): _28.ModuleDescriptor;
                toAminoMsg(message: _28.ModuleDescriptor): _28.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _28.ModuleDescriptorProtoMsg): _28.ModuleDescriptor;
                toProto(message: _28.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _28.ModuleDescriptor): _28.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _28.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.PackageReference;
                fromPartial(object: Partial<_28.PackageReference>): _28.PackageReference;
                fromAmino(object: _28.PackageReferenceAmino): _28.PackageReference;
                toAmino(message: _28.PackageReference): _28.PackageReferenceAmino;
                fromAminoMsg(object: _28.PackageReferenceAminoMsg): _28.PackageReference;
                toAminoMsg(message: _28.PackageReference): _28.PackageReferenceAminoMsg;
                fromProtoMsg(message: _28.PackageReferenceProtoMsg): _28.PackageReference;
                toProto(message: _28.PackageReference): Uint8Array;
                toProtoMsg(message: _28.PackageReference): _28.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _28.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MigrateFromInfo;
                fromPartial(object: Partial<_28.MigrateFromInfo>): _28.MigrateFromInfo;
                fromAmino(object: _28.MigrateFromInfoAmino): _28.MigrateFromInfo;
                toAmino(message: _28.MigrateFromInfo): _28.MigrateFromInfoAmino;
                fromAminoMsg(object: _28.MigrateFromInfoAminoMsg): _28.MigrateFromInfo;
                toAminoMsg(message: _28.MigrateFromInfo): _28.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _28.MigrateFromInfoProtoMsg): _28.MigrateFromInfo;
                toProto(message: _28.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _28.MigrateFromInfo): _28.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _27.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Config;
                fromPartial(object: Partial<_27.Config>): _27.Config;
                fromAmino(object: _27.ConfigAmino): _27.Config;
                toAmino(message: _27.Config): _27.ConfigAmino;
                fromAminoMsg(object: _27.ConfigAminoMsg): _27.Config;
                toAminoMsg(message: _27.Config): _27.ConfigAminoMsg;
                fromProtoMsg(message: _27.ConfigProtoMsg): _27.Config;
                toProto(message: _27.Config): Uint8Array;
                toProtoMsg(message: _27.Config): _27.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _27.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ModuleConfig;
                fromPartial(object: Partial<_27.ModuleConfig>): _27.ModuleConfig;
                fromAmino(object: _27.ModuleConfigAmino): _27.ModuleConfig;
                toAmino(message: _27.ModuleConfig): _27.ModuleConfigAmino;
                fromAminoMsg(object: _27.ModuleConfigAminoMsg): _27.ModuleConfig;
                toAminoMsg(message: _27.ModuleConfig): _27.ModuleConfigAminoMsg;
                fromProtoMsg(message: _27.ModuleConfigProtoMsg): _27.ModuleConfig;
                toProto(message: _27.ModuleConfig): Uint8Array;
                toProtoMsg(message: _27.ModuleConfig): _27.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _32.QueryAccountsRequest): Promise<_32.QueryAccountsResponse>;
                account(request: _32.QueryAccountRequest): Promise<_32.QueryAccountResponse>;
                accountAddressByID(request: _32.QueryAccountAddressByIDRequest): Promise<_32.QueryAccountAddressByIDResponse>;
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                moduleAccounts(request?: _32.QueryModuleAccountsRequest): Promise<_32.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _32.QueryModuleAccountByNameRequest): Promise<_32.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _32.Bech32PrefixRequest): Promise<_32.Bech32PrefixResponse>;
                addressBytesToString(request: _32.AddressBytesToStringRequest): Promise<_32.AddressBytesToStringResponse>;
                addressStringToBytes(request: _32.AddressStringToBytesRequest): Promise<_32.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _32.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryAccountsRequest;
                fromPartial(object: Partial<_32.QueryAccountsRequest>): _32.QueryAccountsRequest;
                fromAmino(object: _32.QueryAccountsRequestAmino): _32.QueryAccountsRequest;
                toAmino(message: _32.QueryAccountsRequest): _32.QueryAccountsRequestAmino;
                fromAminoMsg(object: _32.QueryAccountsRequestAminoMsg): _32.QueryAccountsRequest;
                toAminoMsg(message: _32.QueryAccountsRequest): _32.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryAccountsRequestProtoMsg): _32.QueryAccountsRequest;
                toProto(message: _32.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryAccountsRequest): _32.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _32.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryAccountsResponse;
                fromPartial(object: Partial<_32.QueryAccountsResponse>): _32.QueryAccountsResponse;
                fromAmino(object: _32.QueryAccountsResponseAmino): _32.QueryAccountsResponse;
                toAmino(message: _32.QueryAccountsResponse): _32.QueryAccountsResponseAmino;
                fromAminoMsg(object: _32.QueryAccountsResponseAminoMsg): _32.QueryAccountsResponse;
                toAminoMsg(message: _32.QueryAccountsResponse): _32.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryAccountsResponseProtoMsg): _32.QueryAccountsResponse;
                toProto(message: _32.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryAccountsResponse): _32.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _32.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryAccountRequest;
                fromPartial(object: Partial<_32.QueryAccountRequest>): _32.QueryAccountRequest;
                fromAmino(object: _32.QueryAccountRequestAmino): _32.QueryAccountRequest;
                toAmino(message: _32.QueryAccountRequest): _32.QueryAccountRequestAmino;
                fromAminoMsg(object: _32.QueryAccountRequestAminoMsg): _32.QueryAccountRequest;
                toAminoMsg(message: _32.QueryAccountRequest): _32.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _32.QueryAccountRequestProtoMsg): _32.QueryAccountRequest;
                toProto(message: _32.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _32.QueryAccountRequest): _32.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _32.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryAccountResponse;
                fromPartial(object: Partial<_32.QueryAccountResponse>): _32.QueryAccountResponse;
                fromAmino(object: _32.QueryAccountResponseAmino): _32.QueryAccountResponse;
                toAmino(message: _32.QueryAccountResponse): _32.QueryAccountResponseAmino;
                fromAminoMsg(object: _32.QueryAccountResponseAminoMsg): _32.QueryAccountResponse;
                toAminoMsg(message: _32.QueryAccountResponse): _32.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _32.QueryAccountResponseProtoMsg): _32.QueryAccountResponse;
                toProto(message: _32.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _32.QueryAccountResponse): _32.QueryAccountResponseProtoMsg;
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
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _32.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_32.QueryModuleAccountsRequest>): _32.QueryModuleAccountsRequest;
                fromAmino(_: _32.QueryModuleAccountsRequestAmino): _32.QueryModuleAccountsRequest;
                toAmino(_: _32.QueryModuleAccountsRequest): _32.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _32.QueryModuleAccountsRequestAminoMsg): _32.QueryModuleAccountsRequest;
                toAminoMsg(message: _32.QueryModuleAccountsRequest): _32.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryModuleAccountsRequestProtoMsg): _32.QueryModuleAccountsRequest;
                toProto(message: _32.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryModuleAccountsRequest): _32.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _32.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_32.QueryModuleAccountsResponse>): _32.QueryModuleAccountsResponse;
                fromAmino(object: _32.QueryModuleAccountsResponseAmino): _32.QueryModuleAccountsResponse;
                toAmino(message: _32.QueryModuleAccountsResponse): _32.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _32.QueryModuleAccountsResponseAminoMsg): _32.QueryModuleAccountsResponse;
                toAminoMsg(message: _32.QueryModuleAccountsResponse): _32.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryModuleAccountsResponseProtoMsg): _32.QueryModuleAccountsResponse;
                toProto(message: _32.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryModuleAccountsResponse): _32.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _32.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_32.QueryModuleAccountByNameRequest>): _32.QueryModuleAccountByNameRequest;
                fromAmino(object: _32.QueryModuleAccountByNameRequestAmino): _32.QueryModuleAccountByNameRequest;
                toAmino(message: _32.QueryModuleAccountByNameRequest): _32.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _32.QueryModuleAccountByNameRequestAminoMsg): _32.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _32.QueryModuleAccountByNameRequest): _32.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _32.QueryModuleAccountByNameRequestProtoMsg): _32.QueryModuleAccountByNameRequest;
                toProto(message: _32.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _32.QueryModuleAccountByNameRequest): _32.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _32.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_32.QueryModuleAccountByNameResponse>): _32.QueryModuleAccountByNameResponse;
                fromAmino(object: _32.QueryModuleAccountByNameResponseAmino): _32.QueryModuleAccountByNameResponse;
                toAmino(message: _32.QueryModuleAccountByNameResponse): _32.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _32.QueryModuleAccountByNameResponseAminoMsg): _32.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _32.QueryModuleAccountByNameResponse): _32.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _32.QueryModuleAccountByNameResponseProtoMsg): _32.QueryModuleAccountByNameResponse;
                toProto(message: _32.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _32.QueryModuleAccountByNameResponse): _32.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _32.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.Bech32PrefixRequest;
                fromPartial(_: Partial<_32.Bech32PrefixRequest>): _32.Bech32PrefixRequest;
                fromAmino(_: _32.Bech32PrefixRequestAmino): _32.Bech32PrefixRequest;
                toAmino(_: _32.Bech32PrefixRequest): _32.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _32.Bech32PrefixRequestAminoMsg): _32.Bech32PrefixRequest;
                toAminoMsg(message: _32.Bech32PrefixRequest): _32.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _32.Bech32PrefixRequestProtoMsg): _32.Bech32PrefixRequest;
                toProto(message: _32.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _32.Bech32PrefixRequest): _32.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _32.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Bech32PrefixResponse;
                fromPartial(object: Partial<_32.Bech32PrefixResponse>): _32.Bech32PrefixResponse;
                fromAmino(object: _32.Bech32PrefixResponseAmino): _32.Bech32PrefixResponse;
                toAmino(message: _32.Bech32PrefixResponse): _32.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _32.Bech32PrefixResponseAminoMsg): _32.Bech32PrefixResponse;
                toAminoMsg(message: _32.Bech32PrefixResponse): _32.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _32.Bech32PrefixResponseProtoMsg): _32.Bech32PrefixResponse;
                toProto(message: _32.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _32.Bech32PrefixResponse): _32.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _32.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.AddressBytesToStringRequest;
                fromPartial(object: Partial<_32.AddressBytesToStringRequest>): _32.AddressBytesToStringRequest;
                fromAmino(object: _32.AddressBytesToStringRequestAmino): _32.AddressBytesToStringRequest;
                toAmino(message: _32.AddressBytesToStringRequest): _32.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _32.AddressBytesToStringRequestAminoMsg): _32.AddressBytesToStringRequest;
                toAminoMsg(message: _32.AddressBytesToStringRequest): _32.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _32.AddressBytesToStringRequestProtoMsg): _32.AddressBytesToStringRequest;
                toProto(message: _32.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _32.AddressBytesToStringRequest): _32.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _32.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.AddressBytesToStringResponse;
                fromPartial(object: Partial<_32.AddressBytesToStringResponse>): _32.AddressBytesToStringResponse;
                fromAmino(object: _32.AddressBytesToStringResponseAmino): _32.AddressBytesToStringResponse;
                toAmino(message: _32.AddressBytesToStringResponse): _32.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _32.AddressBytesToStringResponseAminoMsg): _32.AddressBytesToStringResponse;
                toAminoMsg(message: _32.AddressBytesToStringResponse): _32.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _32.AddressBytesToStringResponseProtoMsg): _32.AddressBytesToStringResponse;
                toProto(message: _32.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _32.AddressBytesToStringResponse): _32.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _32.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.AddressStringToBytesRequest;
                fromPartial(object: Partial<_32.AddressStringToBytesRequest>): _32.AddressStringToBytesRequest;
                fromAmino(object: _32.AddressStringToBytesRequestAmino): _32.AddressStringToBytesRequest;
                toAmino(message: _32.AddressStringToBytesRequest): _32.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _32.AddressStringToBytesRequestAminoMsg): _32.AddressStringToBytesRequest;
                toAminoMsg(message: _32.AddressStringToBytesRequest): _32.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _32.AddressStringToBytesRequestProtoMsg): _32.AddressStringToBytesRequest;
                toProto(message: _32.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _32.AddressStringToBytesRequest): _32.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _32.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.AddressStringToBytesResponse;
                fromPartial(object: Partial<_32.AddressStringToBytesResponse>): _32.AddressStringToBytesResponse;
                fromAmino(object: _32.AddressStringToBytesResponseAmino): _32.AddressStringToBytesResponse;
                toAmino(message: _32.AddressStringToBytesResponse): _32.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _32.AddressStringToBytesResponseAminoMsg): _32.AddressStringToBytesResponse;
                toAminoMsg(message: _32.AddressStringToBytesResponse): _32.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _32.AddressStringToBytesResponseProtoMsg): _32.AddressStringToBytesResponse;
                toProto(message: _32.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _32.AddressStringToBytesResponse): _32.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _32.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_32.QueryAccountAddressByIDRequest>): _32.QueryAccountAddressByIDRequest;
                fromAmino(object: _32.QueryAccountAddressByIDRequestAmino): _32.QueryAccountAddressByIDRequest;
                toAmino(message: _32.QueryAccountAddressByIDRequest): _32.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _32.QueryAccountAddressByIDRequestAminoMsg): _32.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _32.QueryAccountAddressByIDRequest): _32.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _32.QueryAccountAddressByIDRequestProtoMsg): _32.QueryAccountAddressByIDRequest;
                toProto(message: _32.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _32.QueryAccountAddressByIDRequest): _32.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _32.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_32.QueryAccountAddressByIDResponse>): _32.QueryAccountAddressByIDResponse;
                fromAmino(object: _32.QueryAccountAddressByIDResponseAmino): _32.QueryAccountAddressByIDResponse;
                toAmino(message: _32.QueryAccountAddressByIDResponse): _32.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _32.QueryAccountAddressByIDResponseAminoMsg): _32.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _32.QueryAccountAddressByIDResponse): _32.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _32.QueryAccountAddressByIDResponseProtoMsg): _32.QueryAccountAddressByIDResponse;
                toProto(message: _32.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _32.QueryAccountAddressByIDResponse): _32.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _30.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _30.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _30.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.BaseAccount;
                fromPartial(object: Partial<_30.BaseAccount>): _30.BaseAccount;
                fromAmino(object: _30.BaseAccountAmino): _30.BaseAccount;
                toAmino(message: _30.BaseAccount): _30.BaseAccountAmino;
                fromAminoMsg(object: _30.BaseAccountAminoMsg): _30.BaseAccount;
                toAminoMsg(message: _30.BaseAccount): _30.BaseAccountAminoMsg;
                fromProtoMsg(message: _30.BaseAccountProtoMsg): _30.BaseAccount;
                toProto(message: _30.BaseAccount): Uint8Array;
                toProtoMsg(message: _30.BaseAccount): _30.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _30.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.ModuleAccount;
                fromPartial(object: Partial<_30.ModuleAccount>): _30.ModuleAccount;
                fromAmino(object: _30.ModuleAccountAmino): _30.ModuleAccount;
                toAmino(message: _30.ModuleAccount): _30.ModuleAccountAmino;
                fromAminoMsg(object: _30.ModuleAccountAminoMsg): _30.ModuleAccount;
                toAminoMsg(message: _30.ModuleAccount): _30.ModuleAccountAminoMsg;
                fromProtoMsg(message: _30.ModuleAccountProtoMsg): _30.ModuleAccount;
                toProto(message: _30.ModuleAccount): Uint8Array;
                toProtoMsg(message: _30.ModuleAccount): _30.ModuleAccountProtoMsg;
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
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _216.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _36.QueryGrantsRequest): Promise<_36.QueryGrantsResponse>;
                granterGrants(request: _36.QueryGranterGrantsRequest): Promise<_36.QueryGranterGrantsResponse>;
                granteeGrants(request: _36.QueryGranteeGrantsRequest): Promise<_36.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _37.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _37.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _37.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _37.MsgGrant): {
                        typeUrl: string;
                        value: _37.MsgGrant;
                    };
                    exec(value: _37.MsgExec): {
                        typeUrl: string;
                        value: _37.MsgExec;
                    };
                    revoke(value: _37.MsgRevoke): {
                        typeUrl: string;
                        value: _37.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _37.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _37.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _37.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _37.MsgGrant): {
                        typeUrl: string;
                        value: _37.MsgGrant;
                    };
                    exec(value: _37.MsgExec): {
                        typeUrl: string;
                        value: _37.MsgExec;
                    };
                    revoke(value: _37.MsgRevoke): {
                        typeUrl: string;
                        value: _37.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _37.MsgGrant) => _37.MsgGrantAmino;
                    fromAmino: (object: _37.MsgGrantAmino) => _37.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _37.MsgExec) => _37.MsgExecAmino;
                    fromAmino: (object: _37.MsgExecAmino) => _37.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _37.MsgRevoke) => _37.MsgRevokeAmino;
                    fromAmino: (object: _37.MsgRevokeAmino) => _37.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _37.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgGrant;
                fromPartial(object: Partial<_37.MsgGrant>): _37.MsgGrant;
                fromAmino(object: _37.MsgGrantAmino): _37.MsgGrant;
                toAmino(message: _37.MsgGrant): _37.MsgGrantAmino;
                fromAminoMsg(object: _37.MsgGrantAminoMsg): _37.MsgGrant;
                toAminoMsg(message: _37.MsgGrant): _37.MsgGrantAminoMsg;
                fromProtoMsg(message: _37.MsgGrantProtoMsg): _37.MsgGrant;
                toProto(message: _37.MsgGrant): Uint8Array;
                toProtoMsg(message: _37.MsgGrant): _37.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _37.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgExecResponse;
                fromPartial(object: Partial<_37.MsgExecResponse>): _37.MsgExecResponse;
                fromAmino(object: _37.MsgExecResponseAmino): _37.MsgExecResponse;
                toAmino(message: _37.MsgExecResponse): _37.MsgExecResponseAmino;
                fromAminoMsg(object: _37.MsgExecResponseAminoMsg): _37.MsgExecResponse;
                toAminoMsg(message: _37.MsgExecResponse): _37.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _37.MsgExecResponseProtoMsg): _37.MsgExecResponse;
                toProto(message: _37.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _37.MsgExecResponse): _37.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _37.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgExec;
                fromPartial(object: Partial<_37.MsgExec>): _37.MsgExec;
                fromAmino(object: _37.MsgExecAmino): _37.MsgExec;
                toAmino(message: _37.MsgExec): _37.MsgExecAmino;
                fromAminoMsg(object: _37.MsgExecAminoMsg): _37.MsgExec;
                toAminoMsg(message: _37.MsgExec): _37.MsgExecAminoMsg;
                fromProtoMsg(message: _37.MsgExecProtoMsg): _37.MsgExec;
                toProto(message: _37.MsgExec): Uint8Array;
                toProtoMsg(message: _37.MsgExec): _37.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _37.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.MsgGrantResponse;
                fromPartial(_: Partial<_37.MsgGrantResponse>): _37.MsgGrantResponse;
                fromAmino(_: _37.MsgGrantResponseAmino): _37.MsgGrantResponse;
                toAmino(_: _37.MsgGrantResponse): _37.MsgGrantResponseAmino;
                fromAminoMsg(object: _37.MsgGrantResponseAminoMsg): _37.MsgGrantResponse;
                toAminoMsg(message: _37.MsgGrantResponse): _37.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _37.MsgGrantResponseProtoMsg): _37.MsgGrantResponse;
                toProto(message: _37.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _37.MsgGrantResponse): _37.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _37.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgRevoke;
                fromPartial(object: Partial<_37.MsgRevoke>): _37.MsgRevoke;
                fromAmino(object: _37.MsgRevokeAmino): _37.MsgRevoke;
                toAmino(message: _37.MsgRevoke): _37.MsgRevokeAmino;
                fromAminoMsg(object: _37.MsgRevokeAminoMsg): _37.MsgRevoke;
                toAminoMsg(message: _37.MsgRevoke): _37.MsgRevokeAminoMsg;
                fromProtoMsg(message: _37.MsgRevokeProtoMsg): _37.MsgRevoke;
                toProto(message: _37.MsgRevoke): Uint8Array;
                toProtoMsg(message: _37.MsgRevoke): _37.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _37.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.MsgRevokeResponse;
                fromPartial(_: Partial<_37.MsgRevokeResponse>): _37.MsgRevokeResponse;
                fromAmino(_: _37.MsgRevokeResponseAmino): _37.MsgRevokeResponse;
                toAmino(_: _37.MsgRevokeResponse): _37.MsgRevokeResponseAmino;
                fromAminoMsg(object: _37.MsgRevokeResponseAminoMsg): _37.MsgRevokeResponse;
                toAminoMsg(message: _37.MsgRevokeResponse): _37.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _37.MsgRevokeResponseProtoMsg): _37.MsgRevokeResponse;
                toProto(message: _37.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _37.MsgRevokeResponse): _37.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _36.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGrantsRequest;
                fromPartial(object: Partial<_36.QueryGrantsRequest>): _36.QueryGrantsRequest;
                fromAmino(object: _36.QueryGrantsRequestAmino): _36.QueryGrantsRequest;
                toAmino(message: _36.QueryGrantsRequest): _36.QueryGrantsRequestAmino;
                fromAminoMsg(object: _36.QueryGrantsRequestAminoMsg): _36.QueryGrantsRequest;
                toAminoMsg(message: _36.QueryGrantsRequest): _36.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryGrantsRequestProtoMsg): _36.QueryGrantsRequest;
                toProto(message: _36.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryGrantsRequest): _36.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _36.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGrantsResponse;
                fromPartial(object: Partial<_36.QueryGrantsResponse>): _36.QueryGrantsResponse;
                fromAmino(object: _36.QueryGrantsResponseAmino): _36.QueryGrantsResponse;
                toAmino(message: _36.QueryGrantsResponse): _36.QueryGrantsResponseAmino;
                fromAminoMsg(object: _36.QueryGrantsResponseAminoMsg): _36.QueryGrantsResponse;
                toAminoMsg(message: _36.QueryGrantsResponse): _36.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryGrantsResponseProtoMsg): _36.QueryGrantsResponse;
                toProto(message: _36.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryGrantsResponse): _36.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _36.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_36.QueryGranterGrantsRequest>): _36.QueryGranterGrantsRequest;
                fromAmino(object: _36.QueryGranterGrantsRequestAmino): _36.QueryGranterGrantsRequest;
                toAmino(message: _36.QueryGranterGrantsRequest): _36.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _36.QueryGranterGrantsRequestAminoMsg): _36.QueryGranterGrantsRequest;
                toAminoMsg(message: _36.QueryGranterGrantsRequest): _36.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryGranterGrantsRequestProtoMsg): _36.QueryGranterGrantsRequest;
                toProto(message: _36.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryGranterGrantsRequest): _36.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _36.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_36.QueryGranterGrantsResponse>): _36.QueryGranterGrantsResponse;
                fromAmino(object: _36.QueryGranterGrantsResponseAmino): _36.QueryGranterGrantsResponse;
                toAmino(message: _36.QueryGranterGrantsResponse): _36.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _36.QueryGranterGrantsResponseAminoMsg): _36.QueryGranterGrantsResponse;
                toAminoMsg(message: _36.QueryGranterGrantsResponse): _36.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryGranterGrantsResponseProtoMsg): _36.QueryGranterGrantsResponse;
                toProto(message: _36.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryGranterGrantsResponse): _36.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _36.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_36.QueryGranteeGrantsRequest>): _36.QueryGranteeGrantsRequest;
                fromAmino(object: _36.QueryGranteeGrantsRequestAmino): _36.QueryGranteeGrantsRequest;
                toAmino(message: _36.QueryGranteeGrantsRequest): _36.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _36.QueryGranteeGrantsRequestAminoMsg): _36.QueryGranteeGrantsRequest;
                toAminoMsg(message: _36.QueryGranteeGrantsRequest): _36.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryGranteeGrantsRequestProtoMsg): _36.QueryGranteeGrantsRequest;
                toProto(message: _36.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryGranteeGrantsRequest): _36.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _36.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_36.QueryGranteeGrantsResponse>): _36.QueryGranteeGrantsResponse;
                fromAmino(object: _36.QueryGranteeGrantsResponseAmino): _36.QueryGranteeGrantsResponse;
                toAmino(message: _36.QueryGranteeGrantsResponse): _36.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _36.QueryGranteeGrantsResponseAminoMsg): _36.QueryGranteeGrantsResponse;
                toAminoMsg(message: _36.QueryGranteeGrantsResponse): _36.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryGranteeGrantsResponseProtoMsg): _36.QueryGranteeGrantsResponse;
                toProto(message: _36.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryGranteeGrantsResponse): _36.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _35.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
                fromAmino(object: _35.GenesisStateAmino): _35.GenesisState;
                toAmino(message: _35.GenesisState): _35.GenesisStateAmino;
                fromAminoMsg(object: _35.GenesisStateAminoMsg): _35.GenesisState;
                toAminoMsg(message: _35.GenesisState): _35.GenesisStateAminoMsg;
                fromProtoMsg(message: _35.GenesisStateProtoMsg): _35.GenesisState;
                toProto(message: _35.GenesisState): Uint8Array;
                toProtoMsg(message: _35.GenesisState): _35.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _34.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.EventGrant;
                fromPartial(object: Partial<_34.EventGrant>): _34.EventGrant;
                fromAmino(object: _34.EventGrantAmino): _34.EventGrant;
                toAmino(message: _34.EventGrant): _34.EventGrantAmino;
                fromAminoMsg(object: _34.EventGrantAminoMsg): _34.EventGrant;
                toAminoMsg(message: _34.EventGrant): _34.EventGrantAminoMsg;
                fromProtoMsg(message: _34.EventGrantProtoMsg): _34.EventGrant;
                toProto(message: _34.EventGrant): Uint8Array;
                toProtoMsg(message: _34.EventGrant): _34.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _34.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.EventRevoke;
                fromPartial(object: Partial<_34.EventRevoke>): _34.EventRevoke;
                fromAmino(object: _34.EventRevokeAmino): _34.EventRevoke;
                toAmino(message: _34.EventRevoke): _34.EventRevokeAmino;
                fromAminoMsg(object: _34.EventRevokeAminoMsg): _34.EventRevoke;
                toAminoMsg(message: _34.EventRevoke): _34.EventRevokeAminoMsg;
                fromProtoMsg(message: _34.EventRevokeProtoMsg): _34.EventRevoke;
                toProto(message: _34.EventRevoke): Uint8Array;
                toProtoMsg(message: _34.EventRevoke): _34.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _33.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.GenericAuthorization;
                fromPartial(object: Partial<_33.GenericAuthorization>): _33.GenericAuthorization;
                fromAmino(object: _33.GenericAuthorizationAmino): _33.GenericAuthorization;
                toAmino(message: _33.GenericAuthorization): _33.GenericAuthorizationAmino;
                fromAminoMsg(object: _33.GenericAuthorizationAminoMsg): _33.GenericAuthorization;
                toAminoMsg(message: _33.GenericAuthorization): _33.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _33.GenericAuthorizationProtoMsg): _33.GenericAuthorization;
                toProto(message: _33.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _33.GenericAuthorization): _33.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _33.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Grant;
                fromPartial(object: Partial<_33.Grant>): _33.Grant;
                fromAmino(object: _33.GrantAmino): _33.Grant;
                toAmino(message: _33.Grant): _33.GrantAmino;
                fromAminoMsg(object: _33.GrantAminoMsg): _33.Grant;
                toAminoMsg(message: _33.Grant): _33.GrantAminoMsg;
                fromProtoMsg(message: _33.GrantProtoMsg): _33.Grant;
                toProto(message: _33.Grant): Uint8Array;
                toProtoMsg(message: _33.Grant): _33.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _33.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.GrantAuthorization;
                fromPartial(object: Partial<_33.GrantAuthorization>): _33.GrantAuthorization;
                fromAmino(object: _33.GrantAuthorizationAmino): _33.GrantAuthorization;
                toAmino(message: _33.GrantAuthorization): _33.GrantAuthorizationAmino;
                fromAminoMsg(object: _33.GrantAuthorizationAminoMsg): _33.GrantAuthorization;
                toAminoMsg(message: _33.GrantAuthorization): _33.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _33.GrantAuthorizationProtoMsg): _33.GrantAuthorization;
                toProto(message: _33.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _33.GrantAuthorization): _33.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _33.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.GrantQueueItem;
                fromPartial(object: Partial<_33.GrantQueueItem>): _33.GrantQueueItem;
                fromAmino(object: _33.GrantQueueItemAmino): _33.GrantQueueItem;
                toAmino(message: _33.GrantQueueItem): _33.GrantQueueItemAmino;
                fromAminoMsg(object: _33.GrantQueueItemAminoMsg): _33.GrantQueueItem;
                toAminoMsg(message: _33.GrantQueueItem): _33.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _33.GrantQueueItemProtoMsg): _33.GrantQueueItem;
                toProto(message: _33.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _33.GrantQueueItem): _33.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../likechain/iscn/authz").UpdateAuthorization | import("../likechain/likenft/v1/authz").CreateRoyaltyConfigAuthorization | import("../likechain/likenft/v1/authz").UpdateRoyaltyConfigAuthorization | import("../likechain/likenft/v1/authz").DeleteRoyaltyConfigAuthorization | import("../likechain/likenft/v1/authz").CreateListingAuthorization | import("../likechain/likenft/v1/authz").UpdateListingAuthorization | import("../likechain/likenft/v1/authz").DeleteListingAuthorization | import("../likechain/likenft/v1/authz").CreateOfferAuthorization | import("../likechain/likenft/v1/authz").UpdateOfferAuthorization | import("../likechain/likenft/v1/authz").DeleteOfferAuthorization | import("../likechain/likenft/v1/authz").NewClassAuthorization | import("../likechain/likenft/v1/authz").UpdateClassAuthorization | import("../likechain/likenft/v1/authz").MintNFTAuthorization | import("../likechain/likenft/v1/authz").SendNFTAuthorization | import("../google/protobuf/any").Any | _38.SendAuthorization | _109.StakeAuthorization | _33.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _217.MsgClientImpl;
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _41.QueryBalanceRequest): Promise<_41.QueryBalanceResponse>;
                allBalances(request: _41.QueryAllBalancesRequest): Promise<_41.QueryAllBalancesResponse>;
                spendableBalances(request: _41.QuerySpendableBalancesRequest): Promise<_41.QuerySpendableBalancesResponse>;
                totalSupply(request?: _41.QueryTotalSupplyRequest): Promise<_41.QueryTotalSupplyResponse>;
                supplyOf(request: _41.QuerySupplyOfRequest): Promise<_41.QuerySupplyOfResponse>;
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                denomMetadata(request: _41.QueryDenomMetadataRequest): Promise<_41.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _41.QueryDenomsMetadataRequest): Promise<_41.QueryDenomsMetadataResponse>;
                denomOwners(request: _41.QueryDenomOwnersRequest): Promise<_41.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _42.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _42.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _42.MsgSend): {
                        typeUrl: string;
                        value: _42.MsgSend;
                    };
                    multiSend(value: _42.MsgMultiSend): {
                        typeUrl: string;
                        value: _42.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _42.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _42.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _42.MsgSend): {
                        typeUrl: string;
                        value: _42.MsgSend;
                    };
                    multiSend(value: _42.MsgMultiSend): {
                        typeUrl: string;
                        value: _42.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _42.MsgSend) => _42.MsgSendAmino;
                    fromAmino: (object: _42.MsgSendAmino) => _42.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _42.MsgMultiSend) => _42.MsgMultiSendAmino;
                    fromAmino: (object: _42.MsgMultiSendAmino) => _42.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _42.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgSend;
                fromPartial(object: Partial<_42.MsgSend>): _42.MsgSend;
                fromAmino(object: _42.MsgSendAmino): _42.MsgSend;
                toAmino(message: _42.MsgSend): _42.MsgSendAmino;
                fromAminoMsg(object: _42.MsgSendAminoMsg): _42.MsgSend;
                toAminoMsg(message: _42.MsgSend): _42.MsgSendAminoMsg;
                fromProtoMsg(message: _42.MsgSendProtoMsg): _42.MsgSend;
                toProto(message: _42.MsgSend): Uint8Array;
                toProtoMsg(message: _42.MsgSend): _42.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _42.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgSendResponse;
                fromPartial(_: Partial<_42.MsgSendResponse>): _42.MsgSendResponse;
                fromAmino(_: _42.MsgSendResponseAmino): _42.MsgSendResponse;
                toAmino(_: _42.MsgSendResponse): _42.MsgSendResponseAmino;
                fromAminoMsg(object: _42.MsgSendResponseAminoMsg): _42.MsgSendResponse;
                toAminoMsg(message: _42.MsgSendResponse): _42.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _42.MsgSendResponseProtoMsg): _42.MsgSendResponse;
                toProto(message: _42.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _42.MsgSendResponse): _42.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _42.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgMultiSend;
                fromPartial(object: Partial<_42.MsgMultiSend>): _42.MsgMultiSend;
                fromAmino(object: _42.MsgMultiSendAmino): _42.MsgMultiSend;
                toAmino(message: _42.MsgMultiSend): _42.MsgMultiSendAmino;
                fromAminoMsg(object: _42.MsgMultiSendAminoMsg): _42.MsgMultiSend;
                toAminoMsg(message: _42.MsgMultiSend): _42.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _42.MsgMultiSendProtoMsg): _42.MsgMultiSend;
                toProto(message: _42.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _42.MsgMultiSend): _42.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _42.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgMultiSendResponse;
                fromPartial(_: Partial<_42.MsgMultiSendResponse>): _42.MsgMultiSendResponse;
                fromAmino(_: _42.MsgMultiSendResponseAmino): _42.MsgMultiSendResponse;
                toAmino(_: _42.MsgMultiSendResponse): _42.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _42.MsgMultiSendResponseAminoMsg): _42.MsgMultiSendResponse;
                toAminoMsg(message: _42.MsgMultiSendResponse): _42.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _42.MsgMultiSendResponseProtoMsg): _42.MsgMultiSendResponse;
                toProto(message: _42.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _42.MsgMultiSendResponse): _42.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _41.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryBalanceRequest;
                fromPartial(object: Partial<_41.QueryBalanceRequest>): _41.QueryBalanceRequest;
                fromAmino(object: _41.QueryBalanceRequestAmino): _41.QueryBalanceRequest;
                toAmino(message: _41.QueryBalanceRequest): _41.QueryBalanceRequestAmino;
                fromAminoMsg(object: _41.QueryBalanceRequestAminoMsg): _41.QueryBalanceRequest;
                toAminoMsg(message: _41.QueryBalanceRequest): _41.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _41.QueryBalanceRequestProtoMsg): _41.QueryBalanceRequest;
                toProto(message: _41.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _41.QueryBalanceRequest): _41.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _41.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryBalanceResponse;
                fromPartial(object: Partial<_41.QueryBalanceResponse>): _41.QueryBalanceResponse;
                fromAmino(object: _41.QueryBalanceResponseAmino): _41.QueryBalanceResponse;
                toAmino(message: _41.QueryBalanceResponse): _41.QueryBalanceResponseAmino;
                fromAminoMsg(object: _41.QueryBalanceResponseAminoMsg): _41.QueryBalanceResponse;
                toAminoMsg(message: _41.QueryBalanceResponse): _41.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _41.QueryBalanceResponseProtoMsg): _41.QueryBalanceResponse;
                toProto(message: _41.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _41.QueryBalanceResponse): _41.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _41.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryAllBalancesRequest;
                fromPartial(object: Partial<_41.QueryAllBalancesRequest>): _41.QueryAllBalancesRequest;
                fromAmino(object: _41.QueryAllBalancesRequestAmino): _41.QueryAllBalancesRequest;
                toAmino(message: _41.QueryAllBalancesRequest): _41.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _41.QueryAllBalancesRequestAminoMsg): _41.QueryAllBalancesRequest;
                toAminoMsg(message: _41.QueryAllBalancesRequest): _41.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _41.QueryAllBalancesRequestProtoMsg): _41.QueryAllBalancesRequest;
                toProto(message: _41.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _41.QueryAllBalancesRequest): _41.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _41.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryAllBalancesResponse;
                fromPartial(object: Partial<_41.QueryAllBalancesResponse>): _41.QueryAllBalancesResponse;
                fromAmino(object: _41.QueryAllBalancesResponseAmino): _41.QueryAllBalancesResponse;
                toAmino(message: _41.QueryAllBalancesResponse): _41.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _41.QueryAllBalancesResponseAminoMsg): _41.QueryAllBalancesResponse;
                toAminoMsg(message: _41.QueryAllBalancesResponse): _41.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _41.QueryAllBalancesResponseProtoMsg): _41.QueryAllBalancesResponse;
                toProto(message: _41.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _41.QueryAllBalancesResponse): _41.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _41.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_41.QuerySpendableBalancesRequest>): _41.QuerySpendableBalancesRequest;
                fromAmino(object: _41.QuerySpendableBalancesRequestAmino): _41.QuerySpendableBalancesRequest;
                toAmino(message: _41.QuerySpendableBalancesRequest): _41.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _41.QuerySpendableBalancesRequestAminoMsg): _41.QuerySpendableBalancesRequest;
                toAminoMsg(message: _41.QuerySpendableBalancesRequest): _41.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _41.QuerySpendableBalancesRequestProtoMsg): _41.QuerySpendableBalancesRequest;
                toProto(message: _41.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _41.QuerySpendableBalancesRequest): _41.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _41.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_41.QuerySpendableBalancesResponse>): _41.QuerySpendableBalancesResponse;
                fromAmino(object: _41.QuerySpendableBalancesResponseAmino): _41.QuerySpendableBalancesResponse;
                toAmino(message: _41.QuerySpendableBalancesResponse): _41.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _41.QuerySpendableBalancesResponseAminoMsg): _41.QuerySpendableBalancesResponse;
                toAminoMsg(message: _41.QuerySpendableBalancesResponse): _41.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _41.QuerySpendableBalancesResponseProtoMsg): _41.QuerySpendableBalancesResponse;
                toProto(message: _41.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _41.QuerySpendableBalancesResponse): _41.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _41.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_41.QueryTotalSupplyRequest>): _41.QueryTotalSupplyRequest;
                fromAmino(object: _41.QueryTotalSupplyRequestAmino): _41.QueryTotalSupplyRequest;
                toAmino(message: _41.QueryTotalSupplyRequest): _41.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _41.QueryTotalSupplyRequestAminoMsg): _41.QueryTotalSupplyRequest;
                toAminoMsg(message: _41.QueryTotalSupplyRequest): _41.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _41.QueryTotalSupplyRequestProtoMsg): _41.QueryTotalSupplyRequest;
                toProto(message: _41.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _41.QueryTotalSupplyRequest): _41.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _41.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_41.QueryTotalSupplyResponse>): _41.QueryTotalSupplyResponse;
                fromAmino(object: _41.QueryTotalSupplyResponseAmino): _41.QueryTotalSupplyResponse;
                toAmino(message: _41.QueryTotalSupplyResponse): _41.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _41.QueryTotalSupplyResponseAminoMsg): _41.QueryTotalSupplyResponse;
                toAminoMsg(message: _41.QueryTotalSupplyResponse): _41.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _41.QueryTotalSupplyResponseProtoMsg): _41.QueryTotalSupplyResponse;
                toProto(message: _41.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _41.QueryTotalSupplyResponse): _41.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _41.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QuerySupplyOfRequest;
                fromPartial(object: Partial<_41.QuerySupplyOfRequest>): _41.QuerySupplyOfRequest;
                fromAmino(object: _41.QuerySupplyOfRequestAmino): _41.QuerySupplyOfRequest;
                toAmino(message: _41.QuerySupplyOfRequest): _41.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _41.QuerySupplyOfRequestAminoMsg): _41.QuerySupplyOfRequest;
                toAminoMsg(message: _41.QuerySupplyOfRequest): _41.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _41.QuerySupplyOfRequestProtoMsg): _41.QuerySupplyOfRequest;
                toProto(message: _41.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _41.QuerySupplyOfRequest): _41.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _41.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QuerySupplyOfResponse;
                fromPartial(object: Partial<_41.QuerySupplyOfResponse>): _41.QuerySupplyOfResponse;
                fromAmino(object: _41.QuerySupplyOfResponseAmino): _41.QuerySupplyOfResponse;
                toAmino(message: _41.QuerySupplyOfResponse): _41.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _41.QuerySupplyOfResponseAminoMsg): _41.QuerySupplyOfResponse;
                toAminoMsg(message: _41.QuerySupplyOfResponse): _41.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _41.QuerySupplyOfResponseProtoMsg): _41.QuerySupplyOfResponse;
                toProto(message: _41.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _41.QuerySupplyOfResponse): _41.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _41.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.QueryParamsRequest;
                fromPartial(_: Partial<_41.QueryParamsRequest>): _41.QueryParamsRequest;
                fromAmino(_: _41.QueryParamsRequestAmino): _41.QueryParamsRequest;
                toAmino(_: _41.QueryParamsRequest): _41.QueryParamsRequestAmino;
                fromAminoMsg(object: _41.QueryParamsRequestAminoMsg): _41.QueryParamsRequest;
                toAminoMsg(message: _41.QueryParamsRequest): _41.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryParamsRequestProtoMsg): _41.QueryParamsRequest;
                toProto(message: _41.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryParamsRequest): _41.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _41.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryParamsResponse;
                fromPartial(object: Partial<_41.QueryParamsResponse>): _41.QueryParamsResponse;
                fromAmino(object: _41.QueryParamsResponseAmino): _41.QueryParamsResponse;
                toAmino(message: _41.QueryParamsResponse): _41.QueryParamsResponseAmino;
                fromAminoMsg(object: _41.QueryParamsResponseAminoMsg): _41.QueryParamsResponse;
                toAminoMsg(message: _41.QueryParamsResponse): _41.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryParamsResponseProtoMsg): _41.QueryParamsResponse;
                toProto(message: _41.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryParamsResponse): _41.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _41.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_41.QueryDenomsMetadataRequest>): _41.QueryDenomsMetadataRequest;
                fromAmino(object: _41.QueryDenomsMetadataRequestAmino): _41.QueryDenomsMetadataRequest;
                toAmino(message: _41.QueryDenomsMetadataRequest): _41.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _41.QueryDenomsMetadataRequestAminoMsg): _41.QueryDenomsMetadataRequest;
                toAminoMsg(message: _41.QueryDenomsMetadataRequest): _41.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDenomsMetadataRequestProtoMsg): _41.QueryDenomsMetadataRequest;
                toProto(message: _41.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDenomsMetadataRequest): _41.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _41.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_41.QueryDenomsMetadataResponse>): _41.QueryDenomsMetadataResponse;
                fromAmino(object: _41.QueryDenomsMetadataResponseAmino): _41.QueryDenomsMetadataResponse;
                toAmino(message: _41.QueryDenomsMetadataResponse): _41.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _41.QueryDenomsMetadataResponseAminoMsg): _41.QueryDenomsMetadataResponse;
                toAminoMsg(message: _41.QueryDenomsMetadataResponse): _41.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDenomsMetadataResponseProtoMsg): _41.QueryDenomsMetadataResponse;
                toProto(message: _41.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDenomsMetadataResponse): _41.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _41.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_41.QueryDenomMetadataRequest>): _41.QueryDenomMetadataRequest;
                fromAmino(object: _41.QueryDenomMetadataRequestAmino): _41.QueryDenomMetadataRequest;
                toAmino(message: _41.QueryDenomMetadataRequest): _41.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _41.QueryDenomMetadataRequestAminoMsg): _41.QueryDenomMetadataRequest;
                toAminoMsg(message: _41.QueryDenomMetadataRequest): _41.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDenomMetadataRequestProtoMsg): _41.QueryDenomMetadataRequest;
                toProto(message: _41.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDenomMetadataRequest): _41.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _41.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_41.QueryDenomMetadataResponse>): _41.QueryDenomMetadataResponse;
                fromAmino(object: _41.QueryDenomMetadataResponseAmino): _41.QueryDenomMetadataResponse;
                toAmino(message: _41.QueryDenomMetadataResponse): _41.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _41.QueryDenomMetadataResponseAminoMsg): _41.QueryDenomMetadataResponse;
                toAminoMsg(message: _41.QueryDenomMetadataResponse): _41.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDenomMetadataResponseProtoMsg): _41.QueryDenomMetadataResponse;
                toProto(message: _41.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDenomMetadataResponse): _41.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _41.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_41.QueryDenomOwnersRequest>): _41.QueryDenomOwnersRequest;
                fromAmino(object: _41.QueryDenomOwnersRequestAmino): _41.QueryDenomOwnersRequest;
                toAmino(message: _41.QueryDenomOwnersRequest): _41.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _41.QueryDenomOwnersRequestAminoMsg): _41.QueryDenomOwnersRequest;
                toAminoMsg(message: _41.QueryDenomOwnersRequest): _41.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDenomOwnersRequestProtoMsg): _41.QueryDenomOwnersRequest;
                toProto(message: _41.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDenomOwnersRequest): _41.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _41.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.DenomOwner;
                fromPartial(object: Partial<_41.DenomOwner>): _41.DenomOwner;
                fromAmino(object: _41.DenomOwnerAmino): _41.DenomOwner;
                toAmino(message: _41.DenomOwner): _41.DenomOwnerAmino;
                fromAminoMsg(object: _41.DenomOwnerAminoMsg): _41.DenomOwner;
                toAminoMsg(message: _41.DenomOwner): _41.DenomOwnerAminoMsg;
                fromProtoMsg(message: _41.DenomOwnerProtoMsg): _41.DenomOwner;
                toProto(message: _41.DenomOwner): Uint8Array;
                toProtoMsg(message: _41.DenomOwner): _41.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _41.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_41.QueryDenomOwnersResponse>): _41.QueryDenomOwnersResponse;
                fromAmino(object: _41.QueryDenomOwnersResponseAmino): _41.QueryDenomOwnersResponse;
                toAmino(message: _41.QueryDenomOwnersResponse): _41.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _41.QueryDenomOwnersResponseAminoMsg): _41.QueryDenomOwnersResponse;
                toAminoMsg(message: _41.QueryDenomOwnersResponse): _41.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDenomOwnersResponseProtoMsg): _41.QueryDenomOwnersResponse;
                toProto(message: _41.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDenomOwnersResponse): _41.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _40.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.GenesisState;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
                fromAmino(object: _40.GenesisStateAmino): _40.GenesisState;
                toAmino(message: _40.GenesisState): _40.GenesisStateAmino;
                fromAminoMsg(object: _40.GenesisStateAminoMsg): _40.GenesisState;
                toAminoMsg(message: _40.GenesisState): _40.GenesisStateAminoMsg;
                fromProtoMsg(message: _40.GenesisStateProtoMsg): _40.GenesisState;
                toProto(message: _40.GenesisState): Uint8Array;
                toProtoMsg(message: _40.GenesisState): _40.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _40.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.Balance;
                fromPartial(object: Partial<_40.Balance>): _40.Balance;
                fromAmino(object: _40.BalanceAmino): _40.Balance;
                toAmino(message: _40.Balance): _40.BalanceAmino;
                fromAminoMsg(object: _40.BalanceAminoMsg): _40.Balance;
                toAminoMsg(message: _40.Balance): _40.BalanceAminoMsg;
                fromProtoMsg(message: _40.BalanceProtoMsg): _40.Balance;
                toProto(message: _40.Balance): Uint8Array;
                toProtoMsg(message: _40.Balance): _40.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _39.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
                fromAmino(object: _39.ParamsAmino): _39.Params;
                toAmino(message: _39.Params): _39.ParamsAmino;
                fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
                toAminoMsg(message: _39.Params): _39.ParamsAminoMsg;
                fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
                toProto(message: _39.Params): Uint8Array;
                toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _39.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.SendEnabled;
                fromPartial(object: Partial<_39.SendEnabled>): _39.SendEnabled;
                fromAmino(object: _39.SendEnabledAmino): _39.SendEnabled;
                toAmino(message: _39.SendEnabled): _39.SendEnabledAmino;
                fromAminoMsg(object: _39.SendEnabledAminoMsg): _39.SendEnabled;
                toAminoMsg(message: _39.SendEnabled): _39.SendEnabledAminoMsg;
                fromProtoMsg(message: _39.SendEnabledProtoMsg): _39.SendEnabled;
                toProto(message: _39.SendEnabled): Uint8Array;
                toProtoMsg(message: _39.SendEnabled): _39.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _39.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Input;
                fromPartial(object: Partial<_39.Input>): _39.Input;
                fromAmino(object: _39.InputAmino): _39.Input;
                toAmino(message: _39.Input): _39.InputAmino;
                fromAminoMsg(object: _39.InputAminoMsg): _39.Input;
                toAminoMsg(message: _39.Input): _39.InputAminoMsg;
                fromProtoMsg(message: _39.InputProtoMsg): _39.Input;
                toProto(message: _39.Input): Uint8Array;
                toProtoMsg(message: _39.Input): _39.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _39.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Output;
                fromPartial(object: Partial<_39.Output>): _39.Output;
                fromAmino(object: _39.OutputAmino): _39.Output;
                toAmino(message: _39.Output): _39.OutputAmino;
                fromAminoMsg(object: _39.OutputAminoMsg): _39.Output;
                toAminoMsg(message: _39.Output): _39.OutputAminoMsg;
                fromProtoMsg(message: _39.OutputProtoMsg): _39.Output;
                toProto(message: _39.Output): Uint8Array;
                toProtoMsg(message: _39.Output): _39.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _39.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Supply;
                fromPartial(object: Partial<_39.Supply>): _39.Supply;
                fromAmino(object: _39.SupplyAmino): _39.Supply;
                toAmino(message: _39.Supply): _39.SupplyAmino;
                fromAminoMsg(object: _39.SupplyAminoMsg): _39.Supply;
                toAminoMsg(message: _39.Supply): _39.SupplyAminoMsg;
                fromProtoMsg(message: _39.SupplyProtoMsg): _39.Supply;
                toProto(message: _39.Supply): Uint8Array;
                toProtoMsg(message: _39.Supply): _39.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _39.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.DenomUnit;
                fromPartial(object: Partial<_39.DenomUnit>): _39.DenomUnit;
                fromAmino(object: _39.DenomUnitAmino): _39.DenomUnit;
                toAmino(message: _39.DenomUnit): _39.DenomUnitAmino;
                fromAminoMsg(object: _39.DenomUnitAminoMsg): _39.DenomUnit;
                toAminoMsg(message: _39.DenomUnit): _39.DenomUnitAminoMsg;
                fromProtoMsg(message: _39.DenomUnitProtoMsg): _39.DenomUnit;
                toProto(message: _39.DenomUnit): Uint8Array;
                toProtoMsg(message: _39.DenomUnit): _39.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _39.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Metadata;
                fromPartial(object: Partial<_39.Metadata>): _39.Metadata;
                fromAmino(object: _39.MetadataAmino): _39.Metadata;
                toAmino(message: _39.Metadata): _39.MetadataAmino;
                fromAminoMsg(object: _39.MetadataAminoMsg): _39.Metadata;
                toAminoMsg(message: _39.Metadata): _39.MetadataAminoMsg;
                fromProtoMsg(message: _39.MetadataProtoMsg): _39.Metadata;
                toProto(message: _39.Metadata): Uint8Array;
                toProtoMsg(message: _39.Metadata): _39.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _38.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.SendAuthorization;
                fromPartial(object: Partial<_38.SendAuthorization>): _38.SendAuthorization;
                fromAmino(object: _38.SendAuthorizationAmino): _38.SendAuthorization;
                toAmino(message: _38.SendAuthorization): _38.SendAuthorizationAmino;
                fromAminoMsg(object: _38.SendAuthorizationAminoMsg): _38.SendAuthorization;
                toAminoMsg(message: _38.SendAuthorization): _38.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _38.SendAuthorizationProtoMsg): _38.SendAuthorization;
                toProto(message: _38.SendAuthorization): Uint8Array;
                toProtoMsg(message: _38.SendAuthorization): _38.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _43.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.TxResponse;
                    fromPartial(object: Partial<_43.TxResponse>): _43.TxResponse;
                    fromAmino(object: _43.TxResponseAmino): _43.TxResponse;
                    toAmino(message: _43.TxResponse): _43.TxResponseAmino;
                    fromAminoMsg(object: _43.TxResponseAminoMsg): _43.TxResponse;
                    toAminoMsg(message: _43.TxResponse): _43.TxResponseAminoMsg;
                    fromProtoMsg(message: _43.TxResponseProtoMsg): _43.TxResponse;
                    toProto(message: _43.TxResponse): Uint8Array;
                    toProtoMsg(message: _43.TxResponse): _43.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _43.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.ABCIMessageLog;
                    fromPartial(object: Partial<_43.ABCIMessageLog>): _43.ABCIMessageLog;
                    fromAmino(object: _43.ABCIMessageLogAmino): _43.ABCIMessageLog;
                    toAmino(message: _43.ABCIMessageLog): _43.ABCIMessageLogAmino;
                    fromAminoMsg(object: _43.ABCIMessageLogAminoMsg): _43.ABCIMessageLog;
                    toAminoMsg(message: _43.ABCIMessageLog): _43.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _43.ABCIMessageLogProtoMsg): _43.ABCIMessageLog;
                    toProto(message: _43.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _43.ABCIMessageLog): _43.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _43.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.StringEvent;
                    fromPartial(object: Partial<_43.StringEvent>): _43.StringEvent;
                    fromAmino(object: _43.StringEventAmino): _43.StringEvent;
                    toAmino(message: _43.StringEvent): _43.StringEventAmino;
                    fromAminoMsg(object: _43.StringEventAminoMsg): _43.StringEvent;
                    toAminoMsg(message: _43.StringEvent): _43.StringEventAminoMsg;
                    fromProtoMsg(message: _43.StringEventProtoMsg): _43.StringEvent;
                    toProto(message: _43.StringEvent): Uint8Array;
                    toProtoMsg(message: _43.StringEvent): _43.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _43.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Attribute;
                    fromPartial(object: Partial<_43.Attribute>): _43.Attribute;
                    fromAmino(object: _43.AttributeAmino): _43.Attribute;
                    toAmino(message: _43.Attribute): _43.AttributeAmino;
                    fromAminoMsg(object: _43.AttributeAminoMsg): _43.Attribute;
                    toAminoMsg(message: _43.Attribute): _43.AttributeAminoMsg;
                    fromProtoMsg(message: _43.AttributeProtoMsg): _43.Attribute;
                    toProto(message: _43.Attribute): Uint8Array;
                    toProtoMsg(message: _43.Attribute): _43.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _43.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.GasInfo;
                    fromPartial(object: Partial<_43.GasInfo>): _43.GasInfo;
                    fromAmino(object: _43.GasInfoAmino): _43.GasInfo;
                    toAmino(message: _43.GasInfo): _43.GasInfoAmino;
                    fromAminoMsg(object: _43.GasInfoAminoMsg): _43.GasInfo;
                    toAminoMsg(message: _43.GasInfo): _43.GasInfoAminoMsg;
                    fromProtoMsg(message: _43.GasInfoProtoMsg): _43.GasInfo;
                    toProto(message: _43.GasInfo): Uint8Array;
                    toProtoMsg(message: _43.GasInfo): _43.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _43.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Result;
                    fromPartial(object: Partial<_43.Result>): _43.Result;
                    fromAmino(object: _43.ResultAmino): _43.Result;
                    toAmino(message: _43.Result): _43.ResultAmino;
                    fromAminoMsg(object: _43.ResultAminoMsg): _43.Result;
                    toAminoMsg(message: _43.Result): _43.ResultAminoMsg;
                    fromProtoMsg(message: _43.ResultProtoMsg): _43.Result;
                    toProto(message: _43.Result): Uint8Array;
                    toProtoMsg(message: _43.Result): _43.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _43.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SimulationResponse;
                    fromPartial(object: Partial<_43.SimulationResponse>): _43.SimulationResponse;
                    fromAmino(object: _43.SimulationResponseAmino): _43.SimulationResponse;
                    toAmino(message: _43.SimulationResponse): _43.SimulationResponseAmino;
                    fromAminoMsg(object: _43.SimulationResponseAminoMsg): _43.SimulationResponse;
                    toAminoMsg(message: _43.SimulationResponse): _43.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _43.SimulationResponseProtoMsg): _43.SimulationResponse;
                    toProto(message: _43.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _43.SimulationResponse): _43.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _43.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.MsgData;
                    fromPartial(object: Partial<_43.MsgData>): _43.MsgData;
                    fromAmino(object: _43.MsgDataAmino): _43.MsgData;
                    toAmino(message: _43.MsgData): _43.MsgDataAmino;
                    fromAminoMsg(object: _43.MsgDataAminoMsg): _43.MsgData;
                    toAminoMsg(message: _43.MsgData): _43.MsgDataAminoMsg;
                    fromProtoMsg(message: _43.MsgDataProtoMsg): _43.MsgData;
                    toProto(message: _43.MsgData): Uint8Array;
                    toProtoMsg(message: _43.MsgData): _43.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _43.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.TxMsgData;
                    fromPartial(object: Partial<_43.TxMsgData>): _43.TxMsgData;
                    fromAmino(object: _43.TxMsgDataAmino): _43.TxMsgData;
                    toAmino(message: _43.TxMsgData): _43.TxMsgDataAmino;
                    fromAminoMsg(object: _43.TxMsgDataAminoMsg): _43.TxMsgData;
                    toAminoMsg(message: _43.TxMsgData): _43.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _43.TxMsgDataProtoMsg): _43.TxMsgData;
                    toProto(message: _43.TxMsgData): Uint8Array;
                    toProtoMsg(message: _43.TxMsgData): _43.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _43.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SearchTxsResult;
                    fromPartial(object: Partial<_43.SearchTxsResult>): _43.SearchTxsResult;
                    fromAmino(object: _43.SearchTxsResultAmino): _43.SearchTxsResult;
                    toAmino(message: _43.SearchTxsResult): _43.SearchTxsResultAmino;
                    fromAminoMsg(object: _43.SearchTxsResultAminoMsg): _43.SearchTxsResult;
                    toAminoMsg(message: _43.SearchTxsResult): _43.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _43.SearchTxsResultProtoMsg): _43.SearchTxsResult;
                    toProto(message: _43.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _43.SearchTxsResult): _43.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _44.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Pairs;
                    fromPartial(object: Partial<_44.Pairs>): _44.Pairs;
                    fromAmino(object: _44.PairsAmino): _44.Pairs;
                    toAmino(message: _44.Pairs): _44.PairsAmino;
                    fromAminoMsg(object: _44.PairsAminoMsg): _44.Pairs;
                    toAminoMsg(message: _44.Pairs): _44.PairsAminoMsg;
                    fromProtoMsg(message: _44.PairsProtoMsg): _44.Pairs;
                    toProto(message: _44.Pairs): Uint8Array;
                    toProtoMsg(message: _44.Pairs): _44.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _44.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Pair;
                    fromPartial(object: Partial<_44.Pair>): _44.Pair;
                    fromAmino(object: _44.PairAmino): _44.Pair;
                    toAmino(message: _44.Pair): _44.PairAmino;
                    fromAminoMsg(object: _44.PairAminoMsg): _44.Pair;
                    toAminoMsg(message: _44.Pair): _44.PairAminoMsg;
                    fromProtoMsg(message: _44.PairProtoMsg): _44.Pair;
                    toProto(message: _44.Pair): Uint8Array;
                    toProtoMsg(message: _44.Pair): _44.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _201.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _45.ConfigRequest): Promise<_45.ConfigResponse>;
                };
                LCDQueryClient: typeof _182.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _45.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _45.ConfigRequest;
                    fromPartial(_: Partial<_45.ConfigRequest>): _45.ConfigRequest;
                    fromAmino(_: _45.ConfigRequestAmino): _45.ConfigRequest;
                    toAmino(_: _45.ConfigRequest): _45.ConfigRequestAmino;
                    fromAminoMsg(object: _45.ConfigRequestAminoMsg): _45.ConfigRequest;
                    toAminoMsg(message: _45.ConfigRequest): _45.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _45.ConfigRequestProtoMsg): _45.ConfigRequest;
                    toProto(message: _45.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _45.ConfigRequest): _45.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _45.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.ConfigResponse;
                    fromPartial(object: Partial<_45.ConfigResponse>): _45.ConfigResponse;
                    fromAmino(object: _45.ConfigResponseAmino): _45.ConfigResponse;
                    toAmino(message: _45.ConfigResponse): _45.ConfigResponseAmino;
                    fromAminoMsg(object: _45.ConfigResponseAminoMsg): _45.ConfigResponse;
                    toAminoMsg(message: _45.ConfigResponse): _45.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _45.ConfigResponseProtoMsg): _45.ConfigResponse;
                    toProto(message: _45.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _45.ConfigResponse): _45.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _46.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.PageRequest;
                    fromPartial(object: Partial<_46.PageRequest>): _46.PageRequest;
                    fromAmino(object: _46.PageRequestAmino): _46.PageRequest;
                    toAmino(message: _46.PageRequest): _46.PageRequestAmino;
                    fromAminoMsg(object: _46.PageRequestAminoMsg): _46.PageRequest;
                    toAminoMsg(message: _46.PageRequest): _46.PageRequestAminoMsg;
                    fromProtoMsg(message: _46.PageRequestProtoMsg): _46.PageRequest;
                    toProto(message: _46.PageRequest): Uint8Array;
                    toProtoMsg(message: _46.PageRequest): _46.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _46.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.PageResponse;
                    fromPartial(object: Partial<_46.PageResponse>): _46.PageResponse;
                    fromAmino(object: _46.PageResponseAmino): _46.PageResponse;
                    toAmino(message: _46.PageResponse): _46.PageResponseAmino;
                    fromAminoMsg(object: _46.PageResponseAminoMsg): _46.PageResponse;
                    toAminoMsg(message: _46.PageResponse): _46.PageResponseAminoMsg;
                    fromProtoMsg(message: _46.PageResponseProtoMsg): _46.PageResponse;
                    toProto(message: _46.PageResponse): Uint8Array;
                    toProtoMsg(message: _46.PageResponse): _46.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _47.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _47.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_47.ListAllInterfacesRequest>): _47.ListAllInterfacesRequest;
                    fromAmino(_: _47.ListAllInterfacesRequestAmino): _47.ListAllInterfacesRequest;
                    toAmino(_: _47.ListAllInterfacesRequest): _47.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _47.ListAllInterfacesRequestAminoMsg): _47.ListAllInterfacesRequest;
                    toAminoMsg(message: _47.ListAllInterfacesRequest): _47.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _47.ListAllInterfacesRequestProtoMsg): _47.ListAllInterfacesRequest;
                    toProto(message: _47.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _47.ListAllInterfacesRequest): _47.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _47.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_47.ListAllInterfacesResponse>): _47.ListAllInterfacesResponse;
                    fromAmino(object: _47.ListAllInterfacesResponseAmino): _47.ListAllInterfacesResponse;
                    toAmino(message: _47.ListAllInterfacesResponse): _47.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _47.ListAllInterfacesResponseAminoMsg): _47.ListAllInterfacesResponse;
                    toAminoMsg(message: _47.ListAllInterfacesResponse): _47.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _47.ListAllInterfacesResponseProtoMsg): _47.ListAllInterfacesResponse;
                    toProto(message: _47.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _47.ListAllInterfacesResponse): _47.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _47.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.ListImplementationsRequest;
                    fromPartial(object: Partial<_47.ListImplementationsRequest>): _47.ListImplementationsRequest;
                    fromAmino(object: _47.ListImplementationsRequestAmino): _47.ListImplementationsRequest;
                    toAmino(message: _47.ListImplementationsRequest): _47.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _47.ListImplementationsRequestAminoMsg): _47.ListImplementationsRequest;
                    toAminoMsg(message: _47.ListImplementationsRequest): _47.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _47.ListImplementationsRequestProtoMsg): _47.ListImplementationsRequest;
                    toProto(message: _47.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _47.ListImplementationsRequest): _47.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _47.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.ListImplementationsResponse;
                    fromPartial(object: Partial<_47.ListImplementationsResponse>): _47.ListImplementationsResponse;
                    fromAmino(object: _47.ListImplementationsResponseAmino): _47.ListImplementationsResponse;
                    toAmino(message: _47.ListImplementationsResponse): _47.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _47.ListImplementationsResponseAminoMsg): _47.ListImplementationsResponse;
                    toAminoMsg(message: _47.ListImplementationsResponse): _47.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _47.ListImplementationsResponseProtoMsg): _47.ListImplementationsResponse;
                    toProto(message: _47.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _47.ListImplementationsResponse): _47.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _48.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.AppDescriptor;
                    fromPartial(object: Partial<_48.AppDescriptor>): _48.AppDescriptor;
                    fromAmino(object: _48.AppDescriptorAmino): _48.AppDescriptor;
                    toAmino(message: _48.AppDescriptor): _48.AppDescriptorAmino;
                    fromAminoMsg(object: _48.AppDescriptorAminoMsg): _48.AppDescriptor;
                    toAminoMsg(message: _48.AppDescriptor): _48.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _48.AppDescriptorProtoMsg): _48.AppDescriptor;
                    toProto(message: _48.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _48.AppDescriptor): _48.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _48.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.TxDescriptor;
                    fromPartial(object: Partial<_48.TxDescriptor>): _48.TxDescriptor;
                    fromAmino(object: _48.TxDescriptorAmino): _48.TxDescriptor;
                    toAmino(message: _48.TxDescriptor): _48.TxDescriptorAmino;
                    fromAminoMsg(object: _48.TxDescriptorAminoMsg): _48.TxDescriptor;
                    toAminoMsg(message: _48.TxDescriptor): _48.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _48.TxDescriptorProtoMsg): _48.TxDescriptor;
                    toProto(message: _48.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _48.TxDescriptor): _48.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _48.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.AuthnDescriptor;
                    fromPartial(object: Partial<_48.AuthnDescriptor>): _48.AuthnDescriptor;
                    fromAmino(object: _48.AuthnDescriptorAmino): _48.AuthnDescriptor;
                    toAmino(message: _48.AuthnDescriptor): _48.AuthnDescriptorAmino;
                    fromAminoMsg(object: _48.AuthnDescriptorAminoMsg): _48.AuthnDescriptor;
                    toAminoMsg(message: _48.AuthnDescriptor): _48.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _48.AuthnDescriptorProtoMsg): _48.AuthnDescriptor;
                    toProto(message: _48.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _48.AuthnDescriptor): _48.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _48.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.SigningModeDescriptor;
                    fromPartial(object: Partial<_48.SigningModeDescriptor>): _48.SigningModeDescriptor;
                    fromAmino(object: _48.SigningModeDescriptorAmino): _48.SigningModeDescriptor;
                    toAmino(message: _48.SigningModeDescriptor): _48.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _48.SigningModeDescriptorAminoMsg): _48.SigningModeDescriptor;
                    toAminoMsg(message: _48.SigningModeDescriptor): _48.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _48.SigningModeDescriptorProtoMsg): _48.SigningModeDescriptor;
                    toProto(message: _48.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _48.SigningModeDescriptor): _48.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _48.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.ChainDescriptor;
                    fromPartial(object: Partial<_48.ChainDescriptor>): _48.ChainDescriptor;
                    fromAmino(object: _48.ChainDescriptorAmino): _48.ChainDescriptor;
                    toAmino(message: _48.ChainDescriptor): _48.ChainDescriptorAmino;
                    fromAminoMsg(object: _48.ChainDescriptorAminoMsg): _48.ChainDescriptor;
                    toAminoMsg(message: _48.ChainDescriptor): _48.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _48.ChainDescriptorProtoMsg): _48.ChainDescriptor;
                    toProto(message: _48.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _48.ChainDescriptor): _48.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _48.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.CodecDescriptor;
                    fromPartial(object: Partial<_48.CodecDescriptor>): _48.CodecDescriptor;
                    fromAmino(object: _48.CodecDescriptorAmino): _48.CodecDescriptor;
                    toAmino(message: _48.CodecDescriptor): _48.CodecDescriptorAmino;
                    fromAminoMsg(object: _48.CodecDescriptorAminoMsg): _48.CodecDescriptor;
                    toAminoMsg(message: _48.CodecDescriptor): _48.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _48.CodecDescriptorProtoMsg): _48.CodecDescriptor;
                    toProto(message: _48.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _48.CodecDescriptor): _48.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _48.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.InterfaceDescriptor;
                    fromPartial(object: Partial<_48.InterfaceDescriptor>): _48.InterfaceDescriptor;
                    fromAmino(object: _48.InterfaceDescriptorAmino): _48.InterfaceDescriptor;
                    toAmino(message: _48.InterfaceDescriptor): _48.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _48.InterfaceDescriptorAminoMsg): _48.InterfaceDescriptor;
                    toAminoMsg(message: _48.InterfaceDescriptor): _48.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _48.InterfaceDescriptorProtoMsg): _48.InterfaceDescriptor;
                    toProto(message: _48.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _48.InterfaceDescriptor): _48.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _48.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_48.InterfaceImplementerDescriptor>): _48.InterfaceImplementerDescriptor;
                    fromAmino(object: _48.InterfaceImplementerDescriptorAmino): _48.InterfaceImplementerDescriptor;
                    toAmino(message: _48.InterfaceImplementerDescriptor): _48.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _48.InterfaceImplementerDescriptorAminoMsg): _48.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _48.InterfaceImplementerDescriptor): _48.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _48.InterfaceImplementerDescriptorProtoMsg): _48.InterfaceImplementerDescriptor;
                    toProto(message: _48.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _48.InterfaceImplementerDescriptor): _48.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _48.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_48.InterfaceAcceptingMessageDescriptor>): _48.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _48.InterfaceAcceptingMessageDescriptorAmino): _48.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _48.InterfaceAcceptingMessageDescriptor): _48.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _48.InterfaceAcceptingMessageDescriptorAminoMsg): _48.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _48.InterfaceAcceptingMessageDescriptor): _48.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _48.InterfaceAcceptingMessageDescriptorProtoMsg): _48.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _48.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _48.InterfaceAcceptingMessageDescriptor): _48.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _48.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.ConfigurationDescriptor;
                    fromPartial(object: Partial<_48.ConfigurationDescriptor>): _48.ConfigurationDescriptor;
                    fromAmino(object: _48.ConfigurationDescriptorAmino): _48.ConfigurationDescriptor;
                    toAmino(message: _48.ConfigurationDescriptor): _48.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _48.ConfigurationDescriptorAminoMsg): _48.ConfigurationDescriptor;
                    toAminoMsg(message: _48.ConfigurationDescriptor): _48.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _48.ConfigurationDescriptorProtoMsg): _48.ConfigurationDescriptor;
                    toProto(message: _48.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _48.ConfigurationDescriptor): _48.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _48.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.MsgDescriptor;
                    fromPartial(object: Partial<_48.MsgDescriptor>): _48.MsgDescriptor;
                    fromAmino(object: _48.MsgDescriptorAmino): _48.MsgDescriptor;
                    toAmino(message: _48.MsgDescriptor): _48.MsgDescriptorAmino;
                    fromAminoMsg(object: _48.MsgDescriptorAminoMsg): _48.MsgDescriptor;
                    toAminoMsg(message: _48.MsgDescriptor): _48.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _48.MsgDescriptorProtoMsg): _48.MsgDescriptor;
                    toProto(message: _48.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _48.MsgDescriptor): _48.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _48.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_48.GetAuthnDescriptorRequest>): _48.GetAuthnDescriptorRequest;
                    fromAmino(_: _48.GetAuthnDescriptorRequestAmino): _48.GetAuthnDescriptorRequest;
                    toAmino(_: _48.GetAuthnDescriptorRequest): _48.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _48.GetAuthnDescriptorRequestAminoMsg): _48.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _48.GetAuthnDescriptorRequest): _48.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _48.GetAuthnDescriptorRequestProtoMsg): _48.GetAuthnDescriptorRequest;
                    toProto(message: _48.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _48.GetAuthnDescriptorRequest): _48.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _48.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_48.GetAuthnDescriptorResponse>): _48.GetAuthnDescriptorResponse;
                    fromAmino(object: _48.GetAuthnDescriptorResponseAmino): _48.GetAuthnDescriptorResponse;
                    toAmino(message: _48.GetAuthnDescriptorResponse): _48.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _48.GetAuthnDescriptorResponseAminoMsg): _48.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _48.GetAuthnDescriptorResponse): _48.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _48.GetAuthnDescriptorResponseProtoMsg): _48.GetAuthnDescriptorResponse;
                    toProto(message: _48.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _48.GetAuthnDescriptorResponse): _48.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _48.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_48.GetChainDescriptorRequest>): _48.GetChainDescriptorRequest;
                    fromAmino(_: _48.GetChainDescriptorRequestAmino): _48.GetChainDescriptorRequest;
                    toAmino(_: _48.GetChainDescriptorRequest): _48.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _48.GetChainDescriptorRequestAminoMsg): _48.GetChainDescriptorRequest;
                    toAminoMsg(message: _48.GetChainDescriptorRequest): _48.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _48.GetChainDescriptorRequestProtoMsg): _48.GetChainDescriptorRequest;
                    toProto(message: _48.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _48.GetChainDescriptorRequest): _48.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _48.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_48.GetChainDescriptorResponse>): _48.GetChainDescriptorResponse;
                    fromAmino(object: _48.GetChainDescriptorResponseAmino): _48.GetChainDescriptorResponse;
                    toAmino(message: _48.GetChainDescriptorResponse): _48.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _48.GetChainDescriptorResponseAminoMsg): _48.GetChainDescriptorResponse;
                    toAminoMsg(message: _48.GetChainDescriptorResponse): _48.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _48.GetChainDescriptorResponseProtoMsg): _48.GetChainDescriptorResponse;
                    toProto(message: _48.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _48.GetChainDescriptorResponse): _48.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _48.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_48.GetCodecDescriptorRequest>): _48.GetCodecDescriptorRequest;
                    fromAmino(_: _48.GetCodecDescriptorRequestAmino): _48.GetCodecDescriptorRequest;
                    toAmino(_: _48.GetCodecDescriptorRequest): _48.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _48.GetCodecDescriptorRequestAminoMsg): _48.GetCodecDescriptorRequest;
                    toAminoMsg(message: _48.GetCodecDescriptorRequest): _48.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _48.GetCodecDescriptorRequestProtoMsg): _48.GetCodecDescriptorRequest;
                    toProto(message: _48.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _48.GetCodecDescriptorRequest): _48.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _48.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_48.GetCodecDescriptorResponse>): _48.GetCodecDescriptorResponse;
                    fromAmino(object: _48.GetCodecDescriptorResponseAmino): _48.GetCodecDescriptorResponse;
                    toAmino(message: _48.GetCodecDescriptorResponse): _48.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _48.GetCodecDescriptorResponseAminoMsg): _48.GetCodecDescriptorResponse;
                    toAminoMsg(message: _48.GetCodecDescriptorResponse): _48.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _48.GetCodecDescriptorResponseProtoMsg): _48.GetCodecDescriptorResponse;
                    toProto(message: _48.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _48.GetCodecDescriptorResponse): _48.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _48.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_48.GetConfigurationDescriptorRequest>): _48.GetConfigurationDescriptorRequest;
                    fromAmino(_: _48.GetConfigurationDescriptorRequestAmino): _48.GetConfigurationDescriptorRequest;
                    toAmino(_: _48.GetConfigurationDescriptorRequest): _48.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _48.GetConfigurationDescriptorRequestAminoMsg): _48.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _48.GetConfigurationDescriptorRequest): _48.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _48.GetConfigurationDescriptorRequestProtoMsg): _48.GetConfigurationDescriptorRequest;
                    toProto(message: _48.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _48.GetConfigurationDescriptorRequest): _48.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _48.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_48.GetConfigurationDescriptorResponse>): _48.GetConfigurationDescriptorResponse;
                    fromAmino(object: _48.GetConfigurationDescriptorResponseAmino): _48.GetConfigurationDescriptorResponse;
                    toAmino(message: _48.GetConfigurationDescriptorResponse): _48.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _48.GetConfigurationDescriptorResponseAminoMsg): _48.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _48.GetConfigurationDescriptorResponse): _48.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _48.GetConfigurationDescriptorResponseProtoMsg): _48.GetConfigurationDescriptorResponse;
                    toProto(message: _48.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _48.GetConfigurationDescriptorResponse): _48.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _48.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_48.GetQueryServicesDescriptorRequest>): _48.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _48.GetQueryServicesDescriptorRequestAmino): _48.GetQueryServicesDescriptorRequest;
                    toAmino(_: _48.GetQueryServicesDescriptorRequest): _48.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _48.GetQueryServicesDescriptorRequestAminoMsg): _48.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _48.GetQueryServicesDescriptorRequest): _48.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _48.GetQueryServicesDescriptorRequestProtoMsg): _48.GetQueryServicesDescriptorRequest;
                    toProto(message: _48.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _48.GetQueryServicesDescriptorRequest): _48.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _48.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_48.GetQueryServicesDescriptorResponse>): _48.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _48.GetQueryServicesDescriptorResponseAmino): _48.GetQueryServicesDescriptorResponse;
                    toAmino(message: _48.GetQueryServicesDescriptorResponse): _48.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _48.GetQueryServicesDescriptorResponseAminoMsg): _48.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _48.GetQueryServicesDescriptorResponse): _48.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _48.GetQueryServicesDescriptorResponseProtoMsg): _48.GetQueryServicesDescriptorResponse;
                    toProto(message: _48.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _48.GetQueryServicesDescriptorResponse): _48.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _48.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_48.GetTxDescriptorRequest>): _48.GetTxDescriptorRequest;
                    fromAmino(_: _48.GetTxDescriptorRequestAmino): _48.GetTxDescriptorRequest;
                    toAmino(_: _48.GetTxDescriptorRequest): _48.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _48.GetTxDescriptorRequestAminoMsg): _48.GetTxDescriptorRequest;
                    toAminoMsg(message: _48.GetTxDescriptorRequest): _48.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _48.GetTxDescriptorRequestProtoMsg): _48.GetTxDescriptorRequest;
                    toProto(message: _48.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _48.GetTxDescriptorRequest): _48.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _48.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_48.GetTxDescriptorResponse>): _48.GetTxDescriptorResponse;
                    fromAmino(object: _48.GetTxDescriptorResponseAmino): _48.GetTxDescriptorResponse;
                    toAmino(message: _48.GetTxDescriptorResponse): _48.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _48.GetTxDescriptorResponseAminoMsg): _48.GetTxDescriptorResponse;
                    toAminoMsg(message: _48.GetTxDescriptorResponse): _48.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _48.GetTxDescriptorResponseProtoMsg): _48.GetTxDescriptorResponse;
                    toProto(message: _48.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _48.GetTxDescriptorResponse): _48.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _48.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.QueryServicesDescriptor;
                    fromPartial(object: Partial<_48.QueryServicesDescriptor>): _48.QueryServicesDescriptor;
                    fromAmino(object: _48.QueryServicesDescriptorAmino): _48.QueryServicesDescriptor;
                    toAmino(message: _48.QueryServicesDescriptor): _48.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _48.QueryServicesDescriptorAminoMsg): _48.QueryServicesDescriptor;
                    toAminoMsg(message: _48.QueryServicesDescriptor): _48.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _48.QueryServicesDescriptorProtoMsg): _48.QueryServicesDescriptor;
                    toProto(message: _48.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _48.QueryServicesDescriptor): _48.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _48.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.QueryServiceDescriptor;
                    fromPartial(object: Partial<_48.QueryServiceDescriptor>): _48.QueryServiceDescriptor;
                    fromAmino(object: _48.QueryServiceDescriptorAmino): _48.QueryServiceDescriptor;
                    toAmino(message: _48.QueryServiceDescriptor): _48.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _48.QueryServiceDescriptorAminoMsg): _48.QueryServiceDescriptor;
                    toAminoMsg(message: _48.QueryServiceDescriptor): _48.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _48.QueryServiceDescriptorProtoMsg): _48.QueryServiceDescriptor;
                    toProto(message: _48.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _48.QueryServiceDescriptor): _48.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _48.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.QueryMethodDescriptor;
                    fromPartial(object: Partial<_48.QueryMethodDescriptor>): _48.QueryMethodDescriptor;
                    fromAmino(object: _48.QueryMethodDescriptorAmino): _48.QueryMethodDescriptor;
                    toAmino(message: _48.QueryMethodDescriptor): _48.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _48.QueryMethodDescriptorAminoMsg): _48.QueryMethodDescriptor;
                    toAminoMsg(message: _48.QueryMethodDescriptor): _48.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _48.QueryMethodDescriptorProtoMsg): _48.QueryMethodDescriptor;
                    toProto(message: _48.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _48.QueryMethodDescriptor): _48.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _49.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.Snapshot;
                    fromPartial(object: Partial<_49.Snapshot>): _49.Snapshot;
                    fromAmino(object: _49.SnapshotAmino): _49.Snapshot;
                    toAmino(message: _49.Snapshot): _49.SnapshotAmino;
                    fromAminoMsg(object: _49.SnapshotAminoMsg): _49.Snapshot;
                    toAminoMsg(message: _49.Snapshot): _49.SnapshotAminoMsg;
                    fromProtoMsg(message: _49.SnapshotProtoMsg): _49.Snapshot;
                    toProto(message: _49.Snapshot): Uint8Array;
                    toProtoMsg(message: _49.Snapshot): _49.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _49.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.Metadata;
                    fromPartial(object: Partial<_49.Metadata>): _49.Metadata;
                    fromAmino(object: _49.MetadataAmino): _49.Metadata;
                    toAmino(message: _49.Metadata): _49.MetadataAmino;
                    fromAminoMsg(object: _49.MetadataAminoMsg): _49.Metadata;
                    toAminoMsg(message: _49.Metadata): _49.MetadataAminoMsg;
                    fromProtoMsg(message: _49.MetadataProtoMsg): _49.Metadata;
                    toProto(message: _49.Metadata): Uint8Array;
                    toProtoMsg(message: _49.Metadata): _49.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _49.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.SnapshotItem;
                    fromPartial(object: Partial<_49.SnapshotItem>): _49.SnapshotItem;
                    fromAmino(object: _49.SnapshotItemAmino): _49.SnapshotItem;
                    toAmino(message: _49.SnapshotItem): _49.SnapshotItemAmino;
                    fromAminoMsg(object: _49.SnapshotItemAminoMsg): _49.SnapshotItem;
                    toAminoMsg(message: _49.SnapshotItem): _49.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _49.SnapshotItemProtoMsg): _49.SnapshotItem;
                    toProto(message: _49.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _49.SnapshotItem): _49.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _49.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.SnapshotStoreItem;
                    fromPartial(object: Partial<_49.SnapshotStoreItem>): _49.SnapshotStoreItem;
                    fromAmino(object: _49.SnapshotStoreItemAmino): _49.SnapshotStoreItem;
                    toAmino(message: _49.SnapshotStoreItem): _49.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _49.SnapshotStoreItemAminoMsg): _49.SnapshotStoreItem;
                    toAminoMsg(message: _49.SnapshotStoreItem): _49.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _49.SnapshotStoreItemProtoMsg): _49.SnapshotStoreItem;
                    toProto(message: _49.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _49.SnapshotStoreItem): _49.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _49.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.SnapshotIAVLItem;
                    fromPartial(object: Partial<_49.SnapshotIAVLItem>): _49.SnapshotIAVLItem;
                    fromAmino(object: _49.SnapshotIAVLItemAmino): _49.SnapshotIAVLItem;
                    toAmino(message: _49.SnapshotIAVLItem): _49.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _49.SnapshotIAVLItemAminoMsg): _49.SnapshotIAVLItem;
                    toAminoMsg(message: _49.SnapshotIAVLItem): _49.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _49.SnapshotIAVLItemProtoMsg): _49.SnapshotIAVLItem;
                    toProto(message: _49.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _49.SnapshotIAVLItem): _49.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _49.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_49.SnapshotExtensionMeta>): _49.SnapshotExtensionMeta;
                    fromAmino(object: _49.SnapshotExtensionMetaAmino): _49.SnapshotExtensionMeta;
                    toAmino(message: _49.SnapshotExtensionMeta): _49.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _49.SnapshotExtensionMetaAminoMsg): _49.SnapshotExtensionMeta;
                    toAminoMsg(message: _49.SnapshotExtensionMeta): _49.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _49.SnapshotExtensionMetaProtoMsg): _49.SnapshotExtensionMeta;
                    toProto(message: _49.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _49.SnapshotExtensionMeta): _49.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _49.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_49.SnapshotExtensionPayload>): _49.SnapshotExtensionPayload;
                    fromAmino(object: _49.SnapshotExtensionPayloadAmino): _49.SnapshotExtensionPayload;
                    toAmino(message: _49.SnapshotExtensionPayload): _49.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _49.SnapshotExtensionPayloadAminoMsg): _49.SnapshotExtensionPayload;
                    toAminoMsg(message: _49.SnapshotExtensionPayload): _49.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _49.SnapshotExtensionPayloadProtoMsg): _49.SnapshotExtensionPayload;
                    toProto(message: _49.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _49.SnapshotExtensionPayload): _49.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _49.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.SnapshotKVItem;
                    fromPartial(object: Partial<_49.SnapshotKVItem>): _49.SnapshotKVItem;
                    fromAmino(object: _49.SnapshotKVItemAmino): _49.SnapshotKVItem;
                    toAmino(message: _49.SnapshotKVItem): _49.SnapshotKVItemAmino;
                    fromAminoMsg(object: _49.SnapshotKVItemAminoMsg): _49.SnapshotKVItem;
                    toAminoMsg(message: _49.SnapshotKVItem): _49.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _49.SnapshotKVItemProtoMsg): _49.SnapshotKVItem;
                    toProto(message: _49.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _49.SnapshotKVItem): _49.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _49.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.SnapshotSchema;
                    fromPartial(object: Partial<_49.SnapshotSchema>): _49.SnapshotSchema;
                    fromAmino(object: _49.SnapshotSchemaAmino): _49.SnapshotSchema;
                    toAmino(message: _49.SnapshotSchema): _49.SnapshotSchemaAmino;
                    fromAminoMsg(object: _49.SnapshotSchemaAminoMsg): _49.SnapshotSchema;
                    toAminoMsg(message: _49.SnapshotSchema): _49.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _49.SnapshotSchemaProtoMsg): _49.SnapshotSchema;
                    toProto(message: _49.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _49.SnapshotSchema): _49.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _51.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.StoreKVPair;
                    fromPartial(object: Partial<_51.StoreKVPair>): _51.StoreKVPair;
                    fromAmino(object: _51.StoreKVPairAmino): _51.StoreKVPair;
                    toAmino(message: _51.StoreKVPair): _51.StoreKVPairAmino;
                    fromAminoMsg(object: _51.StoreKVPairAminoMsg): _51.StoreKVPair;
                    toAminoMsg(message: _51.StoreKVPair): _51.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _51.StoreKVPairProtoMsg): _51.StoreKVPair;
                    toProto(message: _51.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _51.StoreKVPair): _51.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _51.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.BlockMetadata;
                    fromPartial(object: Partial<_51.BlockMetadata>): _51.BlockMetadata;
                    fromAmino(object: _51.BlockMetadataAmino): _51.BlockMetadata;
                    toAmino(message: _51.BlockMetadata): _51.BlockMetadataAmino;
                    fromAminoMsg(object: _51.BlockMetadataAminoMsg): _51.BlockMetadata;
                    toAminoMsg(message: _51.BlockMetadata): _51.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _51.BlockMetadataProtoMsg): _51.BlockMetadata;
                    toProto(message: _51.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _51.BlockMetadata): _51.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _51.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_51.BlockMetadata_DeliverTx>): _51.BlockMetadata_DeliverTx;
                    fromAmino(object: _51.BlockMetadata_DeliverTxAmino): _51.BlockMetadata_DeliverTx;
                    toAmino(message: _51.BlockMetadata_DeliverTx): _51.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _51.BlockMetadata_DeliverTxAminoMsg): _51.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _51.BlockMetadata_DeliverTx): _51.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _51.BlockMetadata_DeliverTxProtoMsg): _51.BlockMetadata_DeliverTx;
                    toProto(message: _51.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _51.BlockMetadata_DeliverTx): _51.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _50.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.CommitInfo;
                    fromPartial(object: Partial<_50.CommitInfo>): _50.CommitInfo;
                    fromAmino(object: _50.CommitInfoAmino): _50.CommitInfo;
                    toAmino(message: _50.CommitInfo): _50.CommitInfoAmino;
                    fromAminoMsg(object: _50.CommitInfoAminoMsg): _50.CommitInfo;
                    toAminoMsg(message: _50.CommitInfo): _50.CommitInfoAminoMsg;
                    fromProtoMsg(message: _50.CommitInfoProtoMsg): _50.CommitInfo;
                    toProto(message: _50.CommitInfo): Uint8Array;
                    toProtoMsg(message: _50.CommitInfo): _50.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _50.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.StoreInfo;
                    fromPartial(object: Partial<_50.StoreInfo>): _50.StoreInfo;
                    fromAmino(object: _50.StoreInfoAmino): _50.StoreInfo;
                    toAmino(message: _50.StoreInfo): _50.StoreInfoAmino;
                    fromAminoMsg(object: _50.StoreInfoAminoMsg): _50.StoreInfo;
                    toAminoMsg(message: _50.StoreInfo): _50.StoreInfoAminoMsg;
                    fromProtoMsg(message: _50.StoreInfoProtoMsg): _50.StoreInfo;
                    toProto(message: _50.StoreInfo): Uint8Array;
                    toProtoMsg(message: _50.StoreInfo): _50.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _50.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.CommitID;
                    fromPartial(object: Partial<_50.CommitID>): _50.CommitID;
                    fromAmino(object: _50.CommitIDAmino): _50.CommitID;
                    toAmino(message: _50.CommitID): _50.CommitIDAmino;
                    fromAminoMsg(object: _50.CommitIDAminoMsg): _50.CommitID;
                    toAminoMsg(message: _50.CommitID): _50.CommitIDAminoMsg;
                    fromProtoMsg(message: _50.CommitIDProtoMsg): _50.CommitID;
                    toProto(message: _50.CommitID): Uint8Array;
                    toProtoMsg(message: _50.CommitID): _50.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _202.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _52.GetNodeInfoRequest): Promise<_52.GetNodeInfoResponse>;
                    getSyncing(request?: _52.GetSyncingRequest): Promise<_52.GetSyncingResponse>;
                    getLatestBlock(request?: _52.GetLatestBlockRequest): Promise<_52.GetLatestBlockResponse>;
                    getBlockByHeight(request: _52.GetBlockByHeightRequest): Promise<_52.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _52.GetLatestValidatorSetRequest): Promise<_52.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _52.GetValidatorSetByHeightRequest): Promise<_52.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _52.ABCIQueryRequest): Promise<_52.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _183.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _53.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.Block;
                    fromPartial(object: Partial<_53.Block>): _53.Block;
                    fromAmino(object: _53.BlockAmino): _53.Block;
                    toAmino(message: _53.Block): _53.BlockAmino;
                    fromAminoMsg(object: _53.BlockAminoMsg): _53.Block;
                    toAminoMsg(message: _53.Block): _53.BlockAminoMsg;
                    fromProtoMsg(message: _53.BlockProtoMsg): _53.Block;
                    toProto(message: _53.Block): Uint8Array;
                    toProtoMsg(message: _53.Block): _53.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _53.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.Header;
                    fromPartial(object: Partial<_53.Header>): _53.Header;
                    fromAmino(object: _53.HeaderAmino): _53.Header;
                    toAmino(message: _53.Header): _53.HeaderAmino;
                    fromAminoMsg(object: _53.HeaderAminoMsg): _53.Header;
                    toAminoMsg(message: _53.Header): _53.HeaderAminoMsg;
                    fromProtoMsg(message: _53.HeaderProtoMsg): _53.Header;
                    toProto(message: _53.Header): Uint8Array;
                    toProtoMsg(message: _53.Header): _53.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _52.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_52.GetValidatorSetByHeightRequest>): _52.GetValidatorSetByHeightRequest;
                    fromAmino(object: _52.GetValidatorSetByHeightRequestAmino): _52.GetValidatorSetByHeightRequest;
                    toAmino(message: _52.GetValidatorSetByHeightRequest): _52.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _52.GetValidatorSetByHeightRequestAminoMsg): _52.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _52.GetValidatorSetByHeightRequest): _52.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _52.GetValidatorSetByHeightRequestProtoMsg): _52.GetValidatorSetByHeightRequest;
                    toProto(message: _52.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _52.GetValidatorSetByHeightRequest): _52.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _52.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_52.GetValidatorSetByHeightResponse>): _52.GetValidatorSetByHeightResponse;
                    fromAmino(object: _52.GetValidatorSetByHeightResponseAmino): _52.GetValidatorSetByHeightResponse;
                    toAmino(message: _52.GetValidatorSetByHeightResponse): _52.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _52.GetValidatorSetByHeightResponseAminoMsg): _52.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _52.GetValidatorSetByHeightResponse): _52.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _52.GetValidatorSetByHeightResponseProtoMsg): _52.GetValidatorSetByHeightResponse;
                    toProto(message: _52.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _52.GetValidatorSetByHeightResponse): _52.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _52.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_52.GetLatestValidatorSetRequest>): _52.GetLatestValidatorSetRequest;
                    fromAmino(object: _52.GetLatestValidatorSetRequestAmino): _52.GetLatestValidatorSetRequest;
                    toAmino(message: _52.GetLatestValidatorSetRequest): _52.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _52.GetLatestValidatorSetRequestAminoMsg): _52.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _52.GetLatestValidatorSetRequest): _52.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _52.GetLatestValidatorSetRequestProtoMsg): _52.GetLatestValidatorSetRequest;
                    toProto(message: _52.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _52.GetLatestValidatorSetRequest): _52.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _52.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_52.GetLatestValidatorSetResponse>): _52.GetLatestValidatorSetResponse;
                    fromAmino(object: _52.GetLatestValidatorSetResponseAmino): _52.GetLatestValidatorSetResponse;
                    toAmino(message: _52.GetLatestValidatorSetResponse): _52.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _52.GetLatestValidatorSetResponseAminoMsg): _52.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _52.GetLatestValidatorSetResponse): _52.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _52.GetLatestValidatorSetResponseProtoMsg): _52.GetLatestValidatorSetResponse;
                    toProto(message: _52.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _52.GetLatestValidatorSetResponse): _52.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _52.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.Validator;
                    fromPartial(object: Partial<_52.Validator>): _52.Validator;
                    fromAmino(object: _52.ValidatorAmino): _52.Validator;
                    toAmino(message: _52.Validator): _52.ValidatorAmino;
                    fromAminoMsg(object: _52.ValidatorAminoMsg): _52.Validator;
                    toAminoMsg(message: _52.Validator): _52.ValidatorAminoMsg;
                    fromProtoMsg(message: _52.ValidatorProtoMsg): _52.Validator;
                    toProto(message: _52.Validator): Uint8Array;
                    toProtoMsg(message: _52.Validator): _52.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _52.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_52.GetBlockByHeightRequest>): _52.GetBlockByHeightRequest;
                    fromAmino(object: _52.GetBlockByHeightRequestAmino): _52.GetBlockByHeightRequest;
                    toAmino(message: _52.GetBlockByHeightRequest): _52.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _52.GetBlockByHeightRequestAminoMsg): _52.GetBlockByHeightRequest;
                    toAminoMsg(message: _52.GetBlockByHeightRequest): _52.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _52.GetBlockByHeightRequestProtoMsg): _52.GetBlockByHeightRequest;
                    toProto(message: _52.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _52.GetBlockByHeightRequest): _52.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _52.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_52.GetBlockByHeightResponse>): _52.GetBlockByHeightResponse;
                    fromAmino(object: _52.GetBlockByHeightResponseAmino): _52.GetBlockByHeightResponse;
                    toAmino(message: _52.GetBlockByHeightResponse): _52.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _52.GetBlockByHeightResponseAminoMsg): _52.GetBlockByHeightResponse;
                    toAminoMsg(message: _52.GetBlockByHeightResponse): _52.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _52.GetBlockByHeightResponseProtoMsg): _52.GetBlockByHeightResponse;
                    toProto(message: _52.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _52.GetBlockByHeightResponse): _52.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _52.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _52.GetLatestBlockRequest;
                    fromPartial(_: Partial<_52.GetLatestBlockRequest>): _52.GetLatestBlockRequest;
                    fromAmino(_: _52.GetLatestBlockRequestAmino): _52.GetLatestBlockRequest;
                    toAmino(_: _52.GetLatestBlockRequest): _52.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _52.GetLatestBlockRequestAminoMsg): _52.GetLatestBlockRequest;
                    toAminoMsg(message: _52.GetLatestBlockRequest): _52.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _52.GetLatestBlockRequestProtoMsg): _52.GetLatestBlockRequest;
                    toProto(message: _52.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _52.GetLatestBlockRequest): _52.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _52.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.GetLatestBlockResponse;
                    fromPartial(object: Partial<_52.GetLatestBlockResponse>): _52.GetLatestBlockResponse;
                    fromAmino(object: _52.GetLatestBlockResponseAmino): _52.GetLatestBlockResponse;
                    toAmino(message: _52.GetLatestBlockResponse): _52.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _52.GetLatestBlockResponseAminoMsg): _52.GetLatestBlockResponse;
                    toAminoMsg(message: _52.GetLatestBlockResponse): _52.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _52.GetLatestBlockResponseProtoMsg): _52.GetLatestBlockResponse;
                    toProto(message: _52.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _52.GetLatestBlockResponse): _52.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _52.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _52.GetSyncingRequest;
                    fromPartial(_: Partial<_52.GetSyncingRequest>): _52.GetSyncingRequest;
                    fromAmino(_: _52.GetSyncingRequestAmino): _52.GetSyncingRequest;
                    toAmino(_: _52.GetSyncingRequest): _52.GetSyncingRequestAmino;
                    fromAminoMsg(object: _52.GetSyncingRequestAminoMsg): _52.GetSyncingRequest;
                    toAminoMsg(message: _52.GetSyncingRequest): _52.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _52.GetSyncingRequestProtoMsg): _52.GetSyncingRequest;
                    toProto(message: _52.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _52.GetSyncingRequest): _52.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _52.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.GetSyncingResponse;
                    fromPartial(object: Partial<_52.GetSyncingResponse>): _52.GetSyncingResponse;
                    fromAmino(object: _52.GetSyncingResponseAmino): _52.GetSyncingResponse;
                    toAmino(message: _52.GetSyncingResponse): _52.GetSyncingResponseAmino;
                    fromAminoMsg(object: _52.GetSyncingResponseAminoMsg): _52.GetSyncingResponse;
                    toAminoMsg(message: _52.GetSyncingResponse): _52.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _52.GetSyncingResponseProtoMsg): _52.GetSyncingResponse;
                    toProto(message: _52.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _52.GetSyncingResponse): _52.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _52.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _52.GetNodeInfoRequest;
                    fromPartial(_: Partial<_52.GetNodeInfoRequest>): _52.GetNodeInfoRequest;
                    fromAmino(_: _52.GetNodeInfoRequestAmino): _52.GetNodeInfoRequest;
                    toAmino(_: _52.GetNodeInfoRequest): _52.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _52.GetNodeInfoRequestAminoMsg): _52.GetNodeInfoRequest;
                    toAminoMsg(message: _52.GetNodeInfoRequest): _52.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _52.GetNodeInfoRequestProtoMsg): _52.GetNodeInfoRequest;
                    toProto(message: _52.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _52.GetNodeInfoRequest): _52.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _52.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.GetNodeInfoResponse;
                    fromPartial(object: Partial<_52.GetNodeInfoResponse>): _52.GetNodeInfoResponse;
                    fromAmino(object: _52.GetNodeInfoResponseAmino): _52.GetNodeInfoResponse;
                    toAmino(message: _52.GetNodeInfoResponse): _52.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _52.GetNodeInfoResponseAminoMsg): _52.GetNodeInfoResponse;
                    toAminoMsg(message: _52.GetNodeInfoResponse): _52.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _52.GetNodeInfoResponseProtoMsg): _52.GetNodeInfoResponse;
                    toProto(message: _52.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _52.GetNodeInfoResponse): _52.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _52.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.VersionInfo;
                    fromPartial(object: Partial<_52.VersionInfo>): _52.VersionInfo;
                    fromAmino(object: _52.VersionInfoAmino): _52.VersionInfo;
                    toAmino(message: _52.VersionInfo): _52.VersionInfoAmino;
                    fromAminoMsg(object: _52.VersionInfoAminoMsg): _52.VersionInfo;
                    toAminoMsg(message: _52.VersionInfo): _52.VersionInfoAminoMsg;
                    fromProtoMsg(message: _52.VersionInfoProtoMsg): _52.VersionInfo;
                    toProto(message: _52.VersionInfo): Uint8Array;
                    toProtoMsg(message: _52.VersionInfo): _52.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _52.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.Module;
                    fromPartial(object: Partial<_52.Module>): _52.Module;
                    fromAmino(object: _52.ModuleAmino): _52.Module;
                    toAmino(message: _52.Module): _52.ModuleAmino;
                    fromAminoMsg(object: _52.ModuleAminoMsg): _52.Module;
                    toAminoMsg(message: _52.Module): _52.ModuleAminoMsg;
                    fromProtoMsg(message: _52.ModuleProtoMsg): _52.Module;
                    toProto(message: _52.Module): Uint8Array;
                    toProtoMsg(message: _52.Module): _52.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _52.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.ABCIQueryRequest;
                    fromPartial(object: Partial<_52.ABCIQueryRequest>): _52.ABCIQueryRequest;
                    fromAmino(object: _52.ABCIQueryRequestAmino): _52.ABCIQueryRequest;
                    toAmino(message: _52.ABCIQueryRequest): _52.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _52.ABCIQueryRequestAminoMsg): _52.ABCIQueryRequest;
                    toAminoMsg(message: _52.ABCIQueryRequest): _52.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _52.ABCIQueryRequestProtoMsg): _52.ABCIQueryRequest;
                    toProto(message: _52.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _52.ABCIQueryRequest): _52.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _52.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.ABCIQueryResponse;
                    fromPartial(object: Partial<_52.ABCIQueryResponse>): _52.ABCIQueryResponse;
                    fromAmino(object: _52.ABCIQueryResponseAmino): _52.ABCIQueryResponse;
                    toAmino(message: _52.ABCIQueryResponse): _52.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _52.ABCIQueryResponseAminoMsg): _52.ABCIQueryResponse;
                    toAminoMsg(message: _52.ABCIQueryResponse): _52.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _52.ABCIQueryResponseProtoMsg): _52.ABCIQueryResponse;
                    toProto(message: _52.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _52.ABCIQueryResponse): _52.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _52.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.ProofOp;
                    fromPartial(object: Partial<_52.ProofOp>): _52.ProofOp;
                    fromAmino(object: _52.ProofOpAmino): _52.ProofOp;
                    toAmino(message: _52.ProofOp): _52.ProofOpAmino;
                    fromAminoMsg(object: _52.ProofOpAminoMsg): _52.ProofOp;
                    toAminoMsg(message: _52.ProofOp): _52.ProofOpAminoMsg;
                    fromProtoMsg(message: _52.ProofOpProtoMsg): _52.ProofOp;
                    toProto(message: _52.ProofOp): Uint8Array;
                    toProtoMsg(message: _52.ProofOp): _52.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _52.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.ProofOps;
                    fromPartial(object: Partial<_52.ProofOps>): _52.ProofOps;
                    fromAmino(object: _52.ProofOpsAmino): _52.ProofOps;
                    toAmino(message: _52.ProofOps): _52.ProofOpsAmino;
                    fromAminoMsg(object: _52.ProofOpsAminoMsg): _52.ProofOps;
                    toAminoMsg(message: _52.ProofOps): _52.ProofOpsAminoMsg;
                    fromProtoMsg(message: _52.ProofOpsProtoMsg): _52.ProofOps;
                    toProto(message: _52.ProofOps): Uint8Array;
                    toProtoMsg(message: _52.ProofOps): _52.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _54.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Coin;
                fromPartial(object: Partial<_54.Coin>): _54.Coin;
                fromAmino(object: _54.CoinAmino): _54.Coin;
                toAmino(message: _54.Coin): _54.CoinAmino;
                fromAminoMsg(object: _54.CoinAminoMsg): _54.Coin;
                toAminoMsg(message: _54.Coin): _54.CoinAminoMsg;
                fromProtoMsg(message: _54.CoinProtoMsg): _54.Coin;
                toProto(message: _54.Coin): Uint8Array;
                toProtoMsg(message: _54.Coin): _54.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _54.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.DecCoin;
                fromPartial(object: Partial<_54.DecCoin>): _54.DecCoin;
                fromAmino(object: _54.DecCoinAmino): _54.DecCoin;
                toAmino(message: _54.DecCoin): _54.DecCoinAmino;
                fromAminoMsg(object: _54.DecCoinAminoMsg): _54.DecCoin;
                toAminoMsg(message: _54.DecCoin): _54.DecCoinAminoMsg;
                fromProtoMsg(message: _54.DecCoinProtoMsg): _54.DecCoin;
                toProto(message: _54.DecCoin): Uint8Array;
                toProtoMsg(message: _54.DecCoin): _54.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _54.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.IntProto;
                fromPartial(object: Partial<_54.IntProto>): _54.IntProto;
                fromAmino(object: _54.IntProtoAmino): _54.IntProto;
                toAmino(message: _54.IntProto): _54.IntProtoAmino;
                fromAminoMsg(object: _54.IntProtoAminoMsg): _54.IntProto;
                toAminoMsg(message: _54.IntProto): _54.IntProtoAminoMsg;
                fromProtoMsg(message: _54.IntProtoProtoMsg): _54.IntProto;
                toProto(message: _54.IntProto): Uint8Array;
                toProtoMsg(message: _54.IntProto): _54.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _54.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.DecProto;
                fromPartial(object: Partial<_54.DecProto>): _54.DecProto;
                fromAmino(object: _54.DecProtoAmino): _54.DecProto;
                toAmino(message: _54.DecProto): _54.DecProtoAmino;
                fromAminoMsg(object: _54.DecProtoAminoMsg): _54.DecProto;
                toAminoMsg(message: _54.DecProto): _54.DecProtoAminoMsg;
                fromProtoMsg(message: _54.DecProtoProtoMsg): _54.DecProto;
                toProto(message: _54.DecProto): Uint8Array;
                toProtoMsg(message: _54.DecProto): _54.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _56.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.GenesisOwners;
                fromPartial(object: Partial<_56.GenesisOwners>): _56.GenesisOwners;
                fromAmino(object: _56.GenesisOwnersAmino): _56.GenesisOwners;
                toAmino(message: _56.GenesisOwners): _56.GenesisOwnersAmino;
                fromAminoMsg(object: _56.GenesisOwnersAminoMsg): _56.GenesisOwners;
                toAminoMsg(message: _56.GenesisOwners): _56.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _56.GenesisOwnersProtoMsg): _56.GenesisOwners;
                toProto(message: _56.GenesisOwners): Uint8Array;
                toProtoMsg(message: _56.GenesisOwners): _56.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _56.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
                fromAmino(object: _56.GenesisStateAmino): _56.GenesisState;
                toAmino(message: _56.GenesisState): _56.GenesisStateAmino;
                fromAminoMsg(object: _56.GenesisStateAminoMsg): _56.GenesisState;
                toAminoMsg(message: _56.GenesisState): _56.GenesisStateAminoMsg;
                fromProtoMsg(message: _56.GenesisStateProtoMsg): _56.GenesisState;
                toProto(message: _56.GenesisState): Uint8Array;
                toProtoMsg(message: _56.GenesisState): _56.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _55.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Capability;
                fromPartial(object: Partial<_55.Capability>): _55.Capability;
                fromAmino(object: _55.CapabilityAmino): _55.Capability;
                toAmino(message: _55.Capability): _55.CapabilityAmino;
                fromAminoMsg(object: _55.CapabilityAminoMsg): _55.Capability;
                toAminoMsg(message: _55.Capability): _55.CapabilityAminoMsg;
                fromProtoMsg(message: _55.CapabilityProtoMsg): _55.Capability;
                toProto(message: _55.Capability): Uint8Array;
                toProtoMsg(message: _55.Capability): _55.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _55.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Owner;
                fromPartial(object: Partial<_55.Owner>): _55.Owner;
                fromAmino(object: _55.OwnerAmino): _55.Owner;
                toAmino(message: _55.Owner): _55.OwnerAmino;
                fromAminoMsg(object: _55.OwnerAminoMsg): _55.Owner;
                toAminoMsg(message: _55.Owner): _55.OwnerAminoMsg;
                fromProtoMsg(message: _55.OwnerProtoMsg): _55.Owner;
                toProto(message: _55.Owner): Uint8Array;
                toProtoMsg(message: _55.Owner): _55.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _55.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.CapabilityOwners;
                fromPartial(object: Partial<_55.CapabilityOwners>): _55.CapabilityOwners;
                fromAmino(object: _55.CapabilityOwnersAmino): _55.CapabilityOwners;
                toAmino(message: _55.CapabilityOwners): _55.CapabilityOwnersAmino;
                fromAminoMsg(object: _55.CapabilityOwnersAminoMsg): _55.CapabilityOwners;
                toAminoMsg(message: _55.CapabilityOwners): _55.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _55.CapabilityOwnersProtoMsg): _55.CapabilityOwners;
                toProto(message: _55.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _55.CapabilityOwners): _55.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _58.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _58.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _58.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _58.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _58.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _58.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _58.MsgVerifyInvariant) => _58.MsgVerifyInvariantAmino;
                    fromAmino: (object: _58.MsgVerifyInvariantAmino) => _58.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _58.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgVerifyInvariant;
                fromPartial(object: Partial<_58.MsgVerifyInvariant>): _58.MsgVerifyInvariant;
                fromAmino(object: _58.MsgVerifyInvariantAmino): _58.MsgVerifyInvariant;
                toAmino(message: _58.MsgVerifyInvariant): _58.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _58.MsgVerifyInvariantAminoMsg): _58.MsgVerifyInvariant;
                toAminoMsg(message: _58.MsgVerifyInvariant): _58.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _58.MsgVerifyInvariantProtoMsg): _58.MsgVerifyInvariant;
                toProto(message: _58.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _58.MsgVerifyInvariant): _58.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _58.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_58.MsgVerifyInvariantResponse>): _58.MsgVerifyInvariantResponse;
                fromAmino(_: _58.MsgVerifyInvariantResponseAmino): _58.MsgVerifyInvariantResponse;
                toAmino(_: _58.MsgVerifyInvariantResponse): _58.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _58.MsgVerifyInvariantResponseAminoMsg): _58.MsgVerifyInvariantResponse;
                toAminoMsg(message: _58.MsgVerifyInvariantResponse): _58.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _58.MsgVerifyInvariantResponseProtoMsg): _58.MsgVerifyInvariantResponse;
                toProto(message: _58.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _58.MsgVerifyInvariantResponse): _58.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _59.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.PubKey;
                fromPartial(object: Partial<_59.PubKey>): _59.PubKey;
                fromAmino(object: _59.PubKeyAmino): _59.PubKey;
                toAmino(message: _59.PubKey): _59.PubKeyAmino;
                fromAminoMsg(object: _59.PubKeyAminoMsg): _59.PubKey;
                toAminoMsg(message: _59.PubKey): _59.PubKeyAminoMsg;
                fromProtoMsg(message: _59.PubKeyProtoMsg): _59.PubKey;
                toProto(message: _59.PubKey): Uint8Array;
                toProtoMsg(message: _59.PubKey): _59.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _59.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.PrivKey;
                fromPartial(object: Partial<_59.PrivKey>): _59.PrivKey;
                fromAmino(object: _59.PrivKeyAmino): _59.PrivKey;
                toAmino(message: _59.PrivKey): _59.PrivKeyAmino;
                fromAminoMsg(object: _59.PrivKeyAminoMsg): _59.PrivKey;
                toAminoMsg(message: _59.PrivKey): _59.PrivKeyAminoMsg;
                fromProtoMsg(message: _59.PrivKeyProtoMsg): _59.PrivKey;
                toProto(message: _59.PrivKey): Uint8Array;
                toProtoMsg(message: _59.PrivKey): _59.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _60.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.BIP44Params;
                    fromPartial(object: Partial<_60.BIP44Params>): _60.BIP44Params;
                    fromAmino(object: _60.BIP44ParamsAmino): _60.BIP44Params;
                    toAmino(message: _60.BIP44Params): _60.BIP44ParamsAmino;
                    fromAminoMsg(object: _60.BIP44ParamsAminoMsg): _60.BIP44Params;
                    toAminoMsg(message: _60.BIP44Params): _60.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _60.BIP44ParamsProtoMsg): _60.BIP44Params;
                    toProto(message: _60.BIP44Params): Uint8Array;
                    toProtoMsg(message: _60.BIP44Params): _60.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _61.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.Record;
                    fromPartial(object: Partial<_61.Record>): _61.Record;
                    fromAmino(object: _61.RecordAmino): _61.Record;
                    toAmino(message: _61.Record): _61.RecordAmino;
                    fromAminoMsg(object: _61.RecordAminoMsg): _61.Record;
                    toAminoMsg(message: _61.Record): _61.RecordAminoMsg;
                    fromProtoMsg(message: _61.RecordProtoMsg): _61.Record;
                    toProto(message: _61.Record): Uint8Array;
                    toProtoMsg(message: _61.Record): _61.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _61.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.Record_Local;
                    fromPartial(object: Partial<_61.Record_Local>): _61.Record_Local;
                    fromAmino(object: _61.Record_LocalAmino): _61.Record_Local;
                    toAmino(message: _61.Record_Local): _61.Record_LocalAmino;
                    fromAminoMsg(object: _61.Record_LocalAminoMsg): _61.Record_Local;
                    toAminoMsg(message: _61.Record_Local): _61.Record_LocalAminoMsg;
                    fromProtoMsg(message: _61.Record_LocalProtoMsg): _61.Record_Local;
                    toProto(message: _61.Record_Local): Uint8Array;
                    toProtoMsg(message: _61.Record_Local): _61.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _61.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.Record_Ledger;
                    fromPartial(object: Partial<_61.Record_Ledger>): _61.Record_Ledger;
                    fromAmino(object: _61.Record_LedgerAmino): _61.Record_Ledger;
                    toAmino(message: _61.Record_Ledger): _61.Record_LedgerAmino;
                    fromAminoMsg(object: _61.Record_LedgerAminoMsg): _61.Record_Ledger;
                    toAminoMsg(message: _61.Record_Ledger): _61.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _61.Record_LedgerProtoMsg): _61.Record_Ledger;
                    toProto(message: _61.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _61.Record_Ledger): _61.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _61.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _61.Record_Multi;
                    fromPartial(_: Partial<_61.Record_Multi>): _61.Record_Multi;
                    fromAmino(_: _61.Record_MultiAmino): _61.Record_Multi;
                    toAmino(_: _61.Record_Multi): _61.Record_MultiAmino;
                    fromAminoMsg(object: _61.Record_MultiAminoMsg): _61.Record_Multi;
                    toAminoMsg(message: _61.Record_Multi): _61.Record_MultiAminoMsg;
                    fromProtoMsg(message: _61.Record_MultiProtoMsg): _61.Record_Multi;
                    toProto(message: _61.Record_Multi): Uint8Array;
                    toProtoMsg(message: _61.Record_Multi): _61.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _61.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _61.Record_Offline;
                    fromPartial(_: Partial<_61.Record_Offline>): _61.Record_Offline;
                    fromAmino(_: _61.Record_OfflineAmino): _61.Record_Offline;
                    toAmino(_: _61.Record_Offline): _61.Record_OfflineAmino;
                    fromAminoMsg(object: _61.Record_OfflineAminoMsg): _61.Record_Offline;
                    toAminoMsg(message: _61.Record_Offline): _61.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _61.Record_OfflineProtoMsg): _61.Record_Offline;
                    toProto(message: _61.Record_Offline): Uint8Array;
                    toProtoMsg(message: _61.Record_Offline): _61.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _62.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.LegacyAminoPubKey;
                fromPartial(object: Partial<_62.LegacyAminoPubKey>): _62.LegacyAminoPubKey;
                fromAmino(object: _62.LegacyAminoPubKeyAmino): _62.LegacyAminoPubKey;
                toAmino(message: _62.LegacyAminoPubKey): _62.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _62.LegacyAminoPubKeyAminoMsg): _62.LegacyAminoPubKey;
                toAminoMsg(message: _62.LegacyAminoPubKey): _62.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _62.LegacyAminoPubKeyProtoMsg): _62.LegacyAminoPubKey;
                toProto(message: _62.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _62.LegacyAminoPubKey): _62.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _63.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.PubKey;
                fromPartial(object: Partial<_63.PubKey>): _63.PubKey;
                fromAmino(object: _63.PubKeyAmino): _63.PubKey;
                toAmino(message: _63.PubKey): _63.PubKeyAmino;
                fromAminoMsg(object: _63.PubKeyAminoMsg): _63.PubKey;
                toAminoMsg(message: _63.PubKey): _63.PubKeyAminoMsg;
                fromProtoMsg(message: _63.PubKeyProtoMsg): _63.PubKey;
                toProto(message: _63.PubKey): Uint8Array;
                toProtoMsg(message: _63.PubKey): _63.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _63.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.PrivKey;
                fromPartial(object: Partial<_63.PrivKey>): _63.PrivKey;
                fromAmino(object: _63.PrivKeyAmino): _63.PrivKey;
                toAmino(message: _63.PrivKey): _63.PrivKeyAmino;
                fromAminoMsg(object: _63.PrivKeyAminoMsg): _63.PrivKey;
                toAminoMsg(message: _63.PrivKey): _63.PrivKeyAminoMsg;
                fromProtoMsg(message: _63.PrivKeyProtoMsg): _63.PrivKey;
                toProto(message: _63.PrivKey): Uint8Array;
                toProtoMsg(message: _63.PrivKey): _63.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _203.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                validatorOutstandingRewards(request: _67.QueryValidatorOutstandingRewardsRequest): Promise<_67.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _67.QueryValidatorCommissionRequest): Promise<_67.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _67.QueryValidatorSlashesRequest): Promise<_67.QueryValidatorSlashesResponse>;
                delegationRewards(request: _67.QueryDelegationRewardsRequest): Promise<_67.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _67.QueryDelegationTotalRewardsRequest): Promise<_67.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _67.QueryDelegatorValidatorsRequest): Promise<_67.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _67.QueryDelegatorWithdrawAddressRequest): Promise<_67.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _67.QueryCommunityPoolRequest): Promise<_67.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _68.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _68.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _68.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _68.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _68.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _68.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _68.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _68.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _68.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _68.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _68.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _68.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _68.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _68.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _68.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _68.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _68.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _68.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _68.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _68.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _68.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _68.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _68.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _68.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _68.MsgSetWithdrawAddress) => _68.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _68.MsgSetWithdrawAddressAmino) => _68.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _68.MsgWithdrawDelegatorReward) => _68.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _68.MsgWithdrawDelegatorRewardAmino) => _68.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _68.MsgWithdrawValidatorCommission) => _68.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _68.MsgWithdrawValidatorCommissionAmino) => _68.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _68.MsgFundCommunityPool) => _68.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _68.MsgFundCommunityPoolAmino) => _68.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _68.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_68.MsgSetWithdrawAddress>): _68.MsgSetWithdrawAddress;
                fromAmino(object: _68.MsgSetWithdrawAddressAmino): _68.MsgSetWithdrawAddress;
                toAmino(message: _68.MsgSetWithdrawAddress): _68.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _68.MsgSetWithdrawAddressAminoMsg): _68.MsgSetWithdrawAddress;
                toAminoMsg(message: _68.MsgSetWithdrawAddress): _68.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _68.MsgSetWithdrawAddressProtoMsg): _68.MsgSetWithdrawAddress;
                toProto(message: _68.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _68.MsgSetWithdrawAddress): _68.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _68.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_68.MsgSetWithdrawAddressResponse>): _68.MsgSetWithdrawAddressResponse;
                fromAmino(_: _68.MsgSetWithdrawAddressResponseAmino): _68.MsgSetWithdrawAddressResponse;
                toAmino(_: _68.MsgSetWithdrawAddressResponse): _68.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _68.MsgSetWithdrawAddressResponseAminoMsg): _68.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _68.MsgSetWithdrawAddressResponse): _68.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _68.MsgSetWithdrawAddressResponseProtoMsg): _68.MsgSetWithdrawAddressResponse;
                toProto(message: _68.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _68.MsgSetWithdrawAddressResponse): _68.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _68.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_68.MsgWithdrawDelegatorReward>): _68.MsgWithdrawDelegatorReward;
                fromAmino(object: _68.MsgWithdrawDelegatorRewardAmino): _68.MsgWithdrawDelegatorReward;
                toAmino(message: _68.MsgWithdrawDelegatorReward): _68.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _68.MsgWithdrawDelegatorRewardAminoMsg): _68.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _68.MsgWithdrawDelegatorReward): _68.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawDelegatorRewardProtoMsg): _68.MsgWithdrawDelegatorReward;
                toProto(message: _68.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawDelegatorReward): _68.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _68.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_68.MsgWithdrawDelegatorRewardResponse>): _68.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _68.MsgWithdrawDelegatorRewardResponseAmino): _68.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _68.MsgWithdrawDelegatorRewardResponse): _68.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _68.MsgWithdrawDelegatorRewardResponseAminoMsg): _68.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _68.MsgWithdrawDelegatorRewardResponse): _68.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawDelegatorRewardResponseProtoMsg): _68.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _68.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawDelegatorRewardResponse): _68.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _68.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_68.MsgWithdrawValidatorCommission>): _68.MsgWithdrawValidatorCommission;
                fromAmino(object: _68.MsgWithdrawValidatorCommissionAmino): _68.MsgWithdrawValidatorCommission;
                toAmino(message: _68.MsgWithdrawValidatorCommission): _68.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _68.MsgWithdrawValidatorCommissionAminoMsg): _68.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _68.MsgWithdrawValidatorCommission): _68.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawValidatorCommissionProtoMsg): _68.MsgWithdrawValidatorCommission;
                toProto(message: _68.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawValidatorCommission): _68.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _68.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_68.MsgWithdrawValidatorCommissionResponse>): _68.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _68.MsgWithdrawValidatorCommissionResponseAmino): _68.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _68.MsgWithdrawValidatorCommissionResponse): _68.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _68.MsgWithdrawValidatorCommissionResponseAminoMsg): _68.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _68.MsgWithdrawValidatorCommissionResponse): _68.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawValidatorCommissionResponseProtoMsg): _68.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _68.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawValidatorCommissionResponse): _68.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _68.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgFundCommunityPool;
                fromPartial(object: Partial<_68.MsgFundCommunityPool>): _68.MsgFundCommunityPool;
                fromAmino(object: _68.MsgFundCommunityPoolAmino): _68.MsgFundCommunityPool;
                toAmino(message: _68.MsgFundCommunityPool): _68.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _68.MsgFundCommunityPoolAminoMsg): _68.MsgFundCommunityPool;
                toAminoMsg(message: _68.MsgFundCommunityPool): _68.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _68.MsgFundCommunityPoolProtoMsg): _68.MsgFundCommunityPool;
                toProto(message: _68.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _68.MsgFundCommunityPool): _68.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _68.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_68.MsgFundCommunityPoolResponse>): _68.MsgFundCommunityPoolResponse;
                fromAmino(_: _68.MsgFundCommunityPoolResponseAmino): _68.MsgFundCommunityPoolResponse;
                toAmino(_: _68.MsgFundCommunityPoolResponse): _68.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _68.MsgFundCommunityPoolResponseAminoMsg): _68.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _68.MsgFundCommunityPoolResponse): _68.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _68.MsgFundCommunityPoolResponseProtoMsg): _68.MsgFundCommunityPoolResponse;
                toProto(message: _68.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _68.MsgFundCommunityPoolResponse): _68.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _67.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryParamsRequest;
                fromPartial(_: Partial<_67.QueryParamsRequest>): _67.QueryParamsRequest;
                fromAmino(_: _67.QueryParamsRequestAmino): _67.QueryParamsRequest;
                toAmino(_: _67.QueryParamsRequest): _67.QueryParamsRequestAmino;
                fromAminoMsg(object: _67.QueryParamsRequestAminoMsg): _67.QueryParamsRequest;
                toAminoMsg(message: _67.QueryParamsRequest): _67.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryParamsRequestProtoMsg): _67.QueryParamsRequest;
                toProto(message: _67.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryParamsRequest): _67.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _67.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryParamsResponse;
                fromPartial(object: Partial<_67.QueryParamsResponse>): _67.QueryParamsResponse;
                fromAmino(object: _67.QueryParamsResponseAmino): _67.QueryParamsResponse;
                toAmino(message: _67.QueryParamsResponse): _67.QueryParamsResponseAmino;
                fromAminoMsg(object: _67.QueryParamsResponseAminoMsg): _67.QueryParamsResponse;
                toAminoMsg(message: _67.QueryParamsResponse): _67.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryParamsResponseProtoMsg): _67.QueryParamsResponse;
                toProto(message: _67.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryParamsResponse): _67.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _67.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_67.QueryValidatorOutstandingRewardsRequest>): _67.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _67.QueryValidatorOutstandingRewardsRequestAmino): _67.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _67.QueryValidatorOutstandingRewardsRequest): _67.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _67.QueryValidatorOutstandingRewardsRequestAminoMsg): _67.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _67.QueryValidatorOutstandingRewardsRequest): _67.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorOutstandingRewardsRequestProtoMsg): _67.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _67.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorOutstandingRewardsRequest): _67.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _67.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_67.QueryValidatorOutstandingRewardsResponse>): _67.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _67.QueryValidatorOutstandingRewardsResponseAmino): _67.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _67.QueryValidatorOutstandingRewardsResponse): _67.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _67.QueryValidatorOutstandingRewardsResponseAminoMsg): _67.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _67.QueryValidatorOutstandingRewardsResponse): _67.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorOutstandingRewardsResponseProtoMsg): _67.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _67.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorOutstandingRewardsResponse): _67.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _67.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_67.QueryValidatorCommissionRequest>): _67.QueryValidatorCommissionRequest;
                fromAmino(object: _67.QueryValidatorCommissionRequestAmino): _67.QueryValidatorCommissionRequest;
                toAmino(message: _67.QueryValidatorCommissionRequest): _67.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _67.QueryValidatorCommissionRequestAminoMsg): _67.QueryValidatorCommissionRequest;
                toAminoMsg(message: _67.QueryValidatorCommissionRequest): _67.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorCommissionRequestProtoMsg): _67.QueryValidatorCommissionRequest;
                toProto(message: _67.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorCommissionRequest): _67.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _67.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_67.QueryValidatorCommissionResponse>): _67.QueryValidatorCommissionResponse;
                fromAmino(object: _67.QueryValidatorCommissionResponseAmino): _67.QueryValidatorCommissionResponse;
                toAmino(message: _67.QueryValidatorCommissionResponse): _67.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _67.QueryValidatorCommissionResponseAminoMsg): _67.QueryValidatorCommissionResponse;
                toAminoMsg(message: _67.QueryValidatorCommissionResponse): _67.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorCommissionResponseProtoMsg): _67.QueryValidatorCommissionResponse;
                toProto(message: _67.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorCommissionResponse): _67.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _67.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_67.QueryValidatorSlashesRequest>): _67.QueryValidatorSlashesRequest;
                fromAmino(object: _67.QueryValidatorSlashesRequestAmino): _67.QueryValidatorSlashesRequest;
                toAmino(message: _67.QueryValidatorSlashesRequest): _67.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _67.QueryValidatorSlashesRequestAminoMsg): _67.QueryValidatorSlashesRequest;
                toAminoMsg(message: _67.QueryValidatorSlashesRequest): _67.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorSlashesRequestProtoMsg): _67.QueryValidatorSlashesRequest;
                toProto(message: _67.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorSlashesRequest): _67.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _67.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_67.QueryValidatorSlashesResponse>): _67.QueryValidatorSlashesResponse;
                fromAmino(object: _67.QueryValidatorSlashesResponseAmino): _67.QueryValidatorSlashesResponse;
                toAmino(message: _67.QueryValidatorSlashesResponse): _67.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _67.QueryValidatorSlashesResponseAminoMsg): _67.QueryValidatorSlashesResponse;
                toAminoMsg(message: _67.QueryValidatorSlashesResponse): _67.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorSlashesResponseProtoMsg): _67.QueryValidatorSlashesResponse;
                toProto(message: _67.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorSlashesResponse): _67.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_67.QueryDelegationRewardsRequest>): _67.QueryDelegationRewardsRequest;
                fromAmino(object: _67.QueryDelegationRewardsRequestAmino): _67.QueryDelegationRewardsRequest;
                toAmino(message: _67.QueryDelegationRewardsRequest): _67.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _67.QueryDelegationRewardsRequestAminoMsg): _67.QueryDelegationRewardsRequest;
                toAminoMsg(message: _67.QueryDelegationRewardsRequest): _67.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegationRewardsRequestProtoMsg): _67.QueryDelegationRewardsRequest;
                toProto(message: _67.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegationRewardsRequest): _67.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_67.QueryDelegationRewardsResponse>): _67.QueryDelegationRewardsResponse;
                fromAmino(object: _67.QueryDelegationRewardsResponseAmino): _67.QueryDelegationRewardsResponse;
                toAmino(message: _67.QueryDelegationRewardsResponse): _67.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _67.QueryDelegationRewardsResponseAminoMsg): _67.QueryDelegationRewardsResponse;
                toAminoMsg(message: _67.QueryDelegationRewardsResponse): _67.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegationRewardsResponseProtoMsg): _67.QueryDelegationRewardsResponse;
                toProto(message: _67.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegationRewardsResponse): _67.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_67.QueryDelegationTotalRewardsRequest>): _67.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _67.QueryDelegationTotalRewardsRequestAmino): _67.QueryDelegationTotalRewardsRequest;
                toAmino(message: _67.QueryDelegationTotalRewardsRequest): _67.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _67.QueryDelegationTotalRewardsRequestAminoMsg): _67.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _67.QueryDelegationTotalRewardsRequest): _67.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegationTotalRewardsRequestProtoMsg): _67.QueryDelegationTotalRewardsRequest;
                toProto(message: _67.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegationTotalRewardsRequest): _67.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_67.QueryDelegationTotalRewardsResponse>): _67.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _67.QueryDelegationTotalRewardsResponseAmino): _67.QueryDelegationTotalRewardsResponse;
                toAmino(message: _67.QueryDelegationTotalRewardsResponse): _67.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _67.QueryDelegationTotalRewardsResponseAminoMsg): _67.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _67.QueryDelegationTotalRewardsResponse): _67.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegationTotalRewardsResponseProtoMsg): _67.QueryDelegationTotalRewardsResponse;
                toProto(message: _67.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegationTotalRewardsResponse): _67.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorsRequest>): _67.QueryDelegatorValidatorsRequest;
                fromAmino(object: _67.QueryDelegatorValidatorsRequestAmino): _67.QueryDelegatorValidatorsRequest;
                toAmino(message: _67.QueryDelegatorValidatorsRequest): _67.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _67.QueryDelegatorValidatorsRequestAminoMsg): _67.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _67.QueryDelegatorValidatorsRequest): _67.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorValidatorsRequestProtoMsg): _67.QueryDelegatorValidatorsRequest;
                toProto(message: _67.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorValidatorsRequest): _67.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorsResponse>): _67.QueryDelegatorValidatorsResponse;
                fromAmino(object: _67.QueryDelegatorValidatorsResponseAmino): _67.QueryDelegatorValidatorsResponse;
                toAmino(message: _67.QueryDelegatorValidatorsResponse): _67.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _67.QueryDelegatorValidatorsResponseAminoMsg): _67.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _67.QueryDelegatorValidatorsResponse): _67.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorValidatorsResponseProtoMsg): _67.QueryDelegatorValidatorsResponse;
                toProto(message: _67.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorValidatorsResponse): _67.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_67.QueryDelegatorWithdrawAddressRequest>): _67.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _67.QueryDelegatorWithdrawAddressRequestAmino): _67.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _67.QueryDelegatorWithdrawAddressRequest): _67.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _67.QueryDelegatorWithdrawAddressRequestAminoMsg): _67.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _67.QueryDelegatorWithdrawAddressRequest): _67.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorWithdrawAddressRequestProtoMsg): _67.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _67.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorWithdrawAddressRequest): _67.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_67.QueryDelegatorWithdrawAddressResponse>): _67.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _67.QueryDelegatorWithdrawAddressResponseAmino): _67.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _67.QueryDelegatorWithdrawAddressResponse): _67.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _67.QueryDelegatorWithdrawAddressResponseAminoMsg): _67.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _67.QueryDelegatorWithdrawAddressResponse): _67.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorWithdrawAddressResponseProtoMsg): _67.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _67.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorWithdrawAddressResponse): _67.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _67.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_67.QueryCommunityPoolRequest>): _67.QueryCommunityPoolRequest;
                fromAmino(_: _67.QueryCommunityPoolRequestAmino): _67.QueryCommunityPoolRequest;
                toAmino(_: _67.QueryCommunityPoolRequest): _67.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _67.QueryCommunityPoolRequestAminoMsg): _67.QueryCommunityPoolRequest;
                toAminoMsg(message: _67.QueryCommunityPoolRequest): _67.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _67.QueryCommunityPoolRequestProtoMsg): _67.QueryCommunityPoolRequest;
                toProto(message: _67.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _67.QueryCommunityPoolRequest): _67.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _67.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_67.QueryCommunityPoolResponse>): _67.QueryCommunityPoolResponse;
                fromAmino(object: _67.QueryCommunityPoolResponseAmino): _67.QueryCommunityPoolResponse;
                toAmino(message: _67.QueryCommunityPoolResponse): _67.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _67.QueryCommunityPoolResponseAminoMsg): _67.QueryCommunityPoolResponse;
                toAminoMsg(message: _67.QueryCommunityPoolResponse): _67.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _67.QueryCommunityPoolResponseProtoMsg): _67.QueryCommunityPoolResponse;
                toProto(message: _67.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _67.QueryCommunityPoolResponse): _67.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _66.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_66.DelegatorWithdrawInfo>): _66.DelegatorWithdrawInfo;
                fromAmino(object: _66.DelegatorWithdrawInfoAmino): _66.DelegatorWithdrawInfo;
                toAmino(message: _66.DelegatorWithdrawInfo): _66.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _66.DelegatorWithdrawInfoAminoMsg): _66.DelegatorWithdrawInfo;
                toAminoMsg(message: _66.DelegatorWithdrawInfo): _66.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _66.DelegatorWithdrawInfoProtoMsg): _66.DelegatorWithdrawInfo;
                toProto(message: _66.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _66.DelegatorWithdrawInfo): _66.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _66.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_66.ValidatorOutstandingRewardsRecord>): _66.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _66.ValidatorOutstandingRewardsRecordAmino): _66.ValidatorOutstandingRewardsRecord;
                toAmino(message: _66.ValidatorOutstandingRewardsRecord): _66.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _66.ValidatorOutstandingRewardsRecordAminoMsg): _66.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _66.ValidatorOutstandingRewardsRecord): _66.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _66.ValidatorOutstandingRewardsRecordProtoMsg): _66.ValidatorOutstandingRewardsRecord;
                toProto(message: _66.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _66.ValidatorOutstandingRewardsRecord): _66.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _66.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_66.ValidatorAccumulatedCommissionRecord>): _66.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _66.ValidatorAccumulatedCommissionRecordAmino): _66.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _66.ValidatorAccumulatedCommissionRecord): _66.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _66.ValidatorAccumulatedCommissionRecordAminoMsg): _66.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _66.ValidatorAccumulatedCommissionRecord): _66.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _66.ValidatorAccumulatedCommissionRecordProtoMsg): _66.ValidatorAccumulatedCommissionRecord;
                toProto(message: _66.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _66.ValidatorAccumulatedCommissionRecord): _66.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _66.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_66.ValidatorHistoricalRewardsRecord>): _66.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _66.ValidatorHistoricalRewardsRecordAmino): _66.ValidatorHistoricalRewardsRecord;
                toAmino(message: _66.ValidatorHistoricalRewardsRecord): _66.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _66.ValidatorHistoricalRewardsRecordAminoMsg): _66.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _66.ValidatorHistoricalRewardsRecord): _66.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _66.ValidatorHistoricalRewardsRecordProtoMsg): _66.ValidatorHistoricalRewardsRecord;
                toProto(message: _66.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _66.ValidatorHistoricalRewardsRecord): _66.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _66.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_66.ValidatorCurrentRewardsRecord>): _66.ValidatorCurrentRewardsRecord;
                fromAmino(object: _66.ValidatorCurrentRewardsRecordAmino): _66.ValidatorCurrentRewardsRecord;
                toAmino(message: _66.ValidatorCurrentRewardsRecord): _66.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _66.ValidatorCurrentRewardsRecordAminoMsg): _66.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _66.ValidatorCurrentRewardsRecord): _66.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _66.ValidatorCurrentRewardsRecordProtoMsg): _66.ValidatorCurrentRewardsRecord;
                toProto(message: _66.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _66.ValidatorCurrentRewardsRecord): _66.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _66.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_66.DelegatorStartingInfoRecord>): _66.DelegatorStartingInfoRecord;
                fromAmino(object: _66.DelegatorStartingInfoRecordAmino): _66.DelegatorStartingInfoRecord;
                toAmino(message: _66.DelegatorStartingInfoRecord): _66.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _66.DelegatorStartingInfoRecordAminoMsg): _66.DelegatorStartingInfoRecord;
                toAminoMsg(message: _66.DelegatorStartingInfoRecord): _66.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _66.DelegatorStartingInfoRecordProtoMsg): _66.DelegatorStartingInfoRecord;
                toProto(message: _66.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _66.DelegatorStartingInfoRecord): _66.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _66.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_66.ValidatorSlashEventRecord>): _66.ValidatorSlashEventRecord;
                fromAmino(object: _66.ValidatorSlashEventRecordAmino): _66.ValidatorSlashEventRecord;
                toAmino(message: _66.ValidatorSlashEventRecord): _66.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _66.ValidatorSlashEventRecordAminoMsg): _66.ValidatorSlashEventRecord;
                toAminoMsg(message: _66.ValidatorSlashEventRecord): _66.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _66.ValidatorSlashEventRecordProtoMsg): _66.ValidatorSlashEventRecord;
                toProto(message: _66.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _66.ValidatorSlashEventRecord): _66.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _66.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.GenesisState;
                fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
                fromAmino(object: _66.GenesisStateAmino): _66.GenesisState;
                toAmino(message: _66.GenesisState): _66.GenesisStateAmino;
                fromAminoMsg(object: _66.GenesisStateAminoMsg): _66.GenesisState;
                toAminoMsg(message: _66.GenesisState): _66.GenesisStateAminoMsg;
                fromProtoMsg(message: _66.GenesisStateProtoMsg): _66.GenesisState;
                toProto(message: _66.GenesisState): Uint8Array;
                toProtoMsg(message: _66.GenesisState): _66.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _65.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Params;
                fromPartial(object: Partial<_65.Params>): _65.Params;
                fromAmino(object: _65.ParamsAmino): _65.Params;
                toAmino(message: _65.Params): _65.ParamsAmino;
                fromAminoMsg(object: _65.ParamsAminoMsg): _65.Params;
                toAminoMsg(message: _65.Params): _65.ParamsAminoMsg;
                fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
                toProto(message: _65.Params): Uint8Array;
                toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _65.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_65.ValidatorHistoricalRewards>): _65.ValidatorHistoricalRewards;
                fromAmino(object: _65.ValidatorHistoricalRewardsAmino): _65.ValidatorHistoricalRewards;
                toAmino(message: _65.ValidatorHistoricalRewards): _65.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _65.ValidatorHistoricalRewardsAminoMsg): _65.ValidatorHistoricalRewards;
                toAminoMsg(message: _65.ValidatorHistoricalRewards): _65.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _65.ValidatorHistoricalRewardsProtoMsg): _65.ValidatorHistoricalRewards;
                toProto(message: _65.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _65.ValidatorHistoricalRewards): _65.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _65.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorCurrentRewards;
                fromPartial(object: Partial<_65.ValidatorCurrentRewards>): _65.ValidatorCurrentRewards;
                fromAmino(object: _65.ValidatorCurrentRewardsAmino): _65.ValidatorCurrentRewards;
                toAmino(message: _65.ValidatorCurrentRewards): _65.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _65.ValidatorCurrentRewardsAminoMsg): _65.ValidatorCurrentRewards;
                toAminoMsg(message: _65.ValidatorCurrentRewards): _65.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _65.ValidatorCurrentRewardsProtoMsg): _65.ValidatorCurrentRewards;
                toProto(message: _65.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _65.ValidatorCurrentRewards): _65.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _65.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_65.ValidatorAccumulatedCommission>): _65.ValidatorAccumulatedCommission;
                fromAmino(object: _65.ValidatorAccumulatedCommissionAmino): _65.ValidatorAccumulatedCommission;
                toAmino(message: _65.ValidatorAccumulatedCommission): _65.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _65.ValidatorAccumulatedCommissionAminoMsg): _65.ValidatorAccumulatedCommission;
                toAminoMsg(message: _65.ValidatorAccumulatedCommission): _65.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _65.ValidatorAccumulatedCommissionProtoMsg): _65.ValidatorAccumulatedCommission;
                toProto(message: _65.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _65.ValidatorAccumulatedCommission): _65.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _65.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_65.ValidatorOutstandingRewards>): _65.ValidatorOutstandingRewards;
                fromAmino(object: _65.ValidatorOutstandingRewardsAmino): _65.ValidatorOutstandingRewards;
                toAmino(message: _65.ValidatorOutstandingRewards): _65.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _65.ValidatorOutstandingRewardsAminoMsg): _65.ValidatorOutstandingRewards;
                toAminoMsg(message: _65.ValidatorOutstandingRewards): _65.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _65.ValidatorOutstandingRewardsProtoMsg): _65.ValidatorOutstandingRewards;
                toProto(message: _65.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _65.ValidatorOutstandingRewards): _65.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _65.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorSlashEvent;
                fromPartial(object: Partial<_65.ValidatorSlashEvent>): _65.ValidatorSlashEvent;
                fromAmino(object: _65.ValidatorSlashEventAmino): _65.ValidatorSlashEvent;
                toAmino(message: _65.ValidatorSlashEvent): _65.ValidatorSlashEventAmino;
                fromAminoMsg(object: _65.ValidatorSlashEventAminoMsg): _65.ValidatorSlashEvent;
                toAminoMsg(message: _65.ValidatorSlashEvent): _65.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _65.ValidatorSlashEventProtoMsg): _65.ValidatorSlashEvent;
                toProto(message: _65.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _65.ValidatorSlashEvent): _65.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _65.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorSlashEvents;
                fromPartial(object: Partial<_65.ValidatorSlashEvents>): _65.ValidatorSlashEvents;
                fromAmino(object: _65.ValidatorSlashEventsAmino): _65.ValidatorSlashEvents;
                toAmino(message: _65.ValidatorSlashEvents): _65.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _65.ValidatorSlashEventsAminoMsg): _65.ValidatorSlashEvents;
                toAminoMsg(message: _65.ValidatorSlashEvents): _65.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _65.ValidatorSlashEventsProtoMsg): _65.ValidatorSlashEvents;
                toProto(message: _65.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _65.ValidatorSlashEvents): _65.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _65.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.FeePool;
                fromPartial(object: Partial<_65.FeePool>): _65.FeePool;
                fromAmino(object: _65.FeePoolAmino): _65.FeePool;
                toAmino(message: _65.FeePool): _65.FeePoolAmino;
                fromAminoMsg(object: _65.FeePoolAminoMsg): _65.FeePool;
                toAminoMsg(message: _65.FeePool): _65.FeePoolAminoMsg;
                fromProtoMsg(message: _65.FeePoolProtoMsg): _65.FeePool;
                toProto(message: _65.FeePool): Uint8Array;
                toProtoMsg(message: _65.FeePool): _65.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _65.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_65.CommunityPoolSpendProposal>): _65.CommunityPoolSpendProposal;
                fromAmino(object: _65.CommunityPoolSpendProposalAmino): _65.CommunityPoolSpendProposal;
                toAmino(message: _65.CommunityPoolSpendProposal): _65.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _65.CommunityPoolSpendProposalAminoMsg): _65.CommunityPoolSpendProposal;
                toAminoMsg(message: _65.CommunityPoolSpendProposal): _65.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _65.CommunityPoolSpendProposalProtoMsg): _65.CommunityPoolSpendProposal;
                toProto(message: _65.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _65.CommunityPoolSpendProposal): _65.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _65.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.DelegatorStartingInfo;
                fromPartial(object: Partial<_65.DelegatorStartingInfo>): _65.DelegatorStartingInfo;
                fromAmino(object: _65.DelegatorStartingInfoAmino): _65.DelegatorStartingInfo;
                toAmino(message: _65.DelegatorStartingInfo): _65.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _65.DelegatorStartingInfoAminoMsg): _65.DelegatorStartingInfo;
                toAminoMsg(message: _65.DelegatorStartingInfo): _65.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _65.DelegatorStartingInfoProtoMsg): _65.DelegatorStartingInfo;
                toProto(message: _65.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _65.DelegatorStartingInfo): _65.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _65.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.DelegationDelegatorReward;
                fromPartial(object: Partial<_65.DelegationDelegatorReward>): _65.DelegationDelegatorReward;
                fromAmino(object: _65.DelegationDelegatorRewardAmino): _65.DelegationDelegatorReward;
                toAmino(message: _65.DelegationDelegatorReward): _65.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _65.DelegationDelegatorRewardAminoMsg): _65.DelegationDelegatorReward;
                toAminoMsg(message: _65.DelegationDelegatorReward): _65.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _65.DelegationDelegatorRewardProtoMsg): _65.DelegationDelegatorReward;
                toProto(message: _65.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _65.DelegationDelegatorReward): _65.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _65.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_65.CommunityPoolSpendProposalWithDeposit>): _65.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _65.CommunityPoolSpendProposalWithDepositAmino): _65.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _65.CommunityPoolSpendProposalWithDeposit): _65.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _65.CommunityPoolSpendProposalWithDepositAminoMsg): _65.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _65.CommunityPoolSpendProposalWithDeposit): _65.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _65.CommunityPoolSpendProposalWithDepositProtoMsg): _65.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _65.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _65.CommunityPoolSpendProposalWithDeposit): _65.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            QueryClientImpl: typeof _204.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _71.QueryEvidenceRequest): Promise<_71.QueryEvidenceResponse>;
                allEvidence(request?: _71.QueryAllEvidenceRequest): Promise<_71.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _185.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _72.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _72.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _72.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _72.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _72.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _72.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _72.MsgSubmitEvidence) => _72.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _72.MsgSubmitEvidenceAmino) => _72.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _72.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgSubmitEvidence;
                fromPartial(object: Partial<_72.MsgSubmitEvidence>): _72.MsgSubmitEvidence;
                fromAmino(object: _72.MsgSubmitEvidenceAmino): _72.MsgSubmitEvidence;
                toAmino(message: _72.MsgSubmitEvidence): _72.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _72.MsgSubmitEvidenceAminoMsg): _72.MsgSubmitEvidence;
                toAminoMsg(message: _72.MsgSubmitEvidence): _72.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _72.MsgSubmitEvidenceProtoMsg): _72.MsgSubmitEvidence;
                toProto(message: _72.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _72.MsgSubmitEvidence): _72.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _72.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_72.MsgSubmitEvidenceResponse>): _72.MsgSubmitEvidenceResponse;
                fromAmino(object: _72.MsgSubmitEvidenceResponseAmino): _72.MsgSubmitEvidenceResponse;
                toAmino(message: _72.MsgSubmitEvidenceResponse): _72.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _72.MsgSubmitEvidenceResponseAminoMsg): _72.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _72.MsgSubmitEvidenceResponse): _72.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _72.MsgSubmitEvidenceResponseProtoMsg): _72.MsgSubmitEvidenceResponse;
                toProto(message: _72.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _72.MsgSubmitEvidenceResponse): _72.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _71.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryEvidenceRequest;
                fromPartial(object: Partial<_71.QueryEvidenceRequest>): _71.QueryEvidenceRequest;
                fromAmino(object: _71.QueryEvidenceRequestAmino): _71.QueryEvidenceRequest;
                toAmino(message: _71.QueryEvidenceRequest): _71.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _71.QueryEvidenceRequestAminoMsg): _71.QueryEvidenceRequest;
                toAminoMsg(message: _71.QueryEvidenceRequest): _71.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _71.QueryEvidenceRequestProtoMsg): _71.QueryEvidenceRequest;
                toProto(message: _71.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _71.QueryEvidenceRequest): _71.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _71.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryEvidenceResponse;
                fromPartial(object: Partial<_71.QueryEvidenceResponse>): _71.QueryEvidenceResponse;
                fromAmino(object: _71.QueryEvidenceResponseAmino): _71.QueryEvidenceResponse;
                toAmino(message: _71.QueryEvidenceResponse): _71.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _71.QueryEvidenceResponseAminoMsg): _71.QueryEvidenceResponse;
                toAminoMsg(message: _71.QueryEvidenceResponse): _71.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _71.QueryEvidenceResponseProtoMsg): _71.QueryEvidenceResponse;
                toProto(message: _71.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _71.QueryEvidenceResponse): _71.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _71.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_71.QueryAllEvidenceRequest>): _71.QueryAllEvidenceRequest;
                fromAmino(object: _71.QueryAllEvidenceRequestAmino): _71.QueryAllEvidenceRequest;
                toAmino(message: _71.QueryAllEvidenceRequest): _71.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _71.QueryAllEvidenceRequestAminoMsg): _71.QueryAllEvidenceRequest;
                toAminoMsg(message: _71.QueryAllEvidenceRequest): _71.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _71.QueryAllEvidenceRequestProtoMsg): _71.QueryAllEvidenceRequest;
                toProto(message: _71.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _71.QueryAllEvidenceRequest): _71.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _71.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_71.QueryAllEvidenceResponse>): _71.QueryAllEvidenceResponse;
                fromAmino(object: _71.QueryAllEvidenceResponseAmino): _71.QueryAllEvidenceResponse;
                toAmino(message: _71.QueryAllEvidenceResponse): _71.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _71.QueryAllEvidenceResponseAminoMsg): _71.QueryAllEvidenceResponse;
                toAminoMsg(message: _71.QueryAllEvidenceResponse): _71.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _71.QueryAllEvidenceResponseProtoMsg): _71.QueryAllEvidenceResponse;
                toProto(message: _71.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _71.QueryAllEvidenceResponse): _71.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _70.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.GenesisState;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
                fromAmino(object: _70.GenesisStateAmino): _70.GenesisState;
                toAmino(message: _70.GenesisState): _70.GenesisStateAmino;
                fromAminoMsg(object: _70.GenesisStateAminoMsg): _70.GenesisState;
                toAminoMsg(message: _70.GenesisState): _70.GenesisStateAminoMsg;
                fromProtoMsg(message: _70.GenesisStateProtoMsg): _70.GenesisState;
                toProto(message: _70.GenesisState): Uint8Array;
                toProtoMsg(message: _70.GenesisState): _70.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _69.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Equivocation;
                fromPartial(object: Partial<_69.Equivocation>): _69.Equivocation;
                fromAmino(object: _69.EquivocationAmino): _69.Equivocation;
                toAmino(message: _69.Equivocation): _69.EquivocationAmino;
                fromAminoMsg(object: _69.EquivocationAminoMsg): _69.Equivocation;
                toAminoMsg(message: _69.Equivocation): _69.EquivocationAminoMsg;
                fromProtoMsg(message: _69.EquivocationProtoMsg): _69.Equivocation;
                toProto(message: _69.Equivocation): Uint8Array;
                toProtoMsg(message: _69.Equivocation): _69.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _75.QueryAllowanceRequest): Promise<_75.QueryAllowanceResponse>;
                allowances(request: _75.QueryAllowancesRequest): Promise<_75.QueryAllowancesResponse>;
                allowancesByGranter(request: _75.QueryAllowancesByGranterRequest): Promise<_75.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _76.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _76.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _76.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _76.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _76.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _76.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _76.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _76.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _76.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _76.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _76.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _76.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _76.MsgGrantAllowance) => _76.MsgGrantAllowanceAmino;
                    fromAmino: (object: _76.MsgGrantAllowanceAmino) => _76.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _76.MsgRevokeAllowance) => _76.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _76.MsgRevokeAllowanceAmino) => _76.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _76.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgGrantAllowance;
                fromPartial(object: Partial<_76.MsgGrantAllowance>): _76.MsgGrantAllowance;
                fromAmino(object: _76.MsgGrantAllowanceAmino): _76.MsgGrantAllowance;
                toAmino(message: _76.MsgGrantAllowance): _76.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _76.MsgGrantAllowanceAminoMsg): _76.MsgGrantAllowance;
                toAminoMsg(message: _76.MsgGrantAllowance): _76.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _76.MsgGrantAllowanceProtoMsg): _76.MsgGrantAllowance;
                toProto(message: _76.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _76.MsgGrantAllowance): _76.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _76.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_76.MsgGrantAllowanceResponse>): _76.MsgGrantAllowanceResponse;
                fromAmino(_: _76.MsgGrantAllowanceResponseAmino): _76.MsgGrantAllowanceResponse;
                toAmino(_: _76.MsgGrantAllowanceResponse): _76.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _76.MsgGrantAllowanceResponseAminoMsg): _76.MsgGrantAllowanceResponse;
                toAminoMsg(message: _76.MsgGrantAllowanceResponse): _76.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _76.MsgGrantAllowanceResponseProtoMsg): _76.MsgGrantAllowanceResponse;
                toProto(message: _76.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _76.MsgGrantAllowanceResponse): _76.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _76.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgRevokeAllowance;
                fromPartial(object: Partial<_76.MsgRevokeAllowance>): _76.MsgRevokeAllowance;
                fromAmino(object: _76.MsgRevokeAllowanceAmino): _76.MsgRevokeAllowance;
                toAmino(message: _76.MsgRevokeAllowance): _76.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _76.MsgRevokeAllowanceAminoMsg): _76.MsgRevokeAllowance;
                toAminoMsg(message: _76.MsgRevokeAllowance): _76.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _76.MsgRevokeAllowanceProtoMsg): _76.MsgRevokeAllowance;
                toProto(message: _76.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _76.MsgRevokeAllowance): _76.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _76.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_76.MsgRevokeAllowanceResponse>): _76.MsgRevokeAllowanceResponse;
                fromAmino(_: _76.MsgRevokeAllowanceResponseAmino): _76.MsgRevokeAllowanceResponse;
                toAmino(_: _76.MsgRevokeAllowanceResponse): _76.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _76.MsgRevokeAllowanceResponseAminoMsg): _76.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _76.MsgRevokeAllowanceResponse): _76.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _76.MsgRevokeAllowanceResponseProtoMsg): _76.MsgRevokeAllowanceResponse;
                toProto(message: _76.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _76.MsgRevokeAllowanceResponse): _76.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _73.BasicAllowance | _73.PeriodicAllowance | _73.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _75.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryAllowanceRequest;
                fromPartial(object: Partial<_75.QueryAllowanceRequest>): _75.QueryAllowanceRequest;
                fromAmino(object: _75.QueryAllowanceRequestAmino): _75.QueryAllowanceRequest;
                toAmino(message: _75.QueryAllowanceRequest): _75.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _75.QueryAllowanceRequestAminoMsg): _75.QueryAllowanceRequest;
                toAminoMsg(message: _75.QueryAllowanceRequest): _75.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _75.QueryAllowanceRequestProtoMsg): _75.QueryAllowanceRequest;
                toProto(message: _75.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _75.QueryAllowanceRequest): _75.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _75.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryAllowanceResponse;
                fromPartial(object: Partial<_75.QueryAllowanceResponse>): _75.QueryAllowanceResponse;
                fromAmino(object: _75.QueryAllowanceResponseAmino): _75.QueryAllowanceResponse;
                toAmino(message: _75.QueryAllowanceResponse): _75.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _75.QueryAllowanceResponseAminoMsg): _75.QueryAllowanceResponse;
                toAminoMsg(message: _75.QueryAllowanceResponse): _75.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _75.QueryAllowanceResponseProtoMsg): _75.QueryAllowanceResponse;
                toProto(message: _75.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _75.QueryAllowanceResponse): _75.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _75.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryAllowancesRequest;
                fromPartial(object: Partial<_75.QueryAllowancesRequest>): _75.QueryAllowancesRequest;
                fromAmino(object: _75.QueryAllowancesRequestAmino): _75.QueryAllowancesRequest;
                toAmino(message: _75.QueryAllowancesRequest): _75.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _75.QueryAllowancesRequestAminoMsg): _75.QueryAllowancesRequest;
                toAminoMsg(message: _75.QueryAllowancesRequest): _75.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _75.QueryAllowancesRequestProtoMsg): _75.QueryAllowancesRequest;
                toProto(message: _75.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _75.QueryAllowancesRequest): _75.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _75.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryAllowancesResponse;
                fromPartial(object: Partial<_75.QueryAllowancesResponse>): _75.QueryAllowancesResponse;
                fromAmino(object: _75.QueryAllowancesResponseAmino): _75.QueryAllowancesResponse;
                toAmino(message: _75.QueryAllowancesResponse): _75.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _75.QueryAllowancesResponseAminoMsg): _75.QueryAllowancesResponse;
                toAminoMsg(message: _75.QueryAllowancesResponse): _75.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _75.QueryAllowancesResponseProtoMsg): _75.QueryAllowancesResponse;
                toProto(message: _75.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _75.QueryAllowancesResponse): _75.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _75.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_75.QueryAllowancesByGranterRequest>): _75.QueryAllowancesByGranterRequest;
                fromAmino(object: _75.QueryAllowancesByGranterRequestAmino): _75.QueryAllowancesByGranterRequest;
                toAmino(message: _75.QueryAllowancesByGranterRequest): _75.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _75.QueryAllowancesByGranterRequestAminoMsg): _75.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _75.QueryAllowancesByGranterRequest): _75.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _75.QueryAllowancesByGranterRequestProtoMsg): _75.QueryAllowancesByGranterRequest;
                toProto(message: _75.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _75.QueryAllowancesByGranterRequest): _75.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _75.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_75.QueryAllowancesByGranterResponse>): _75.QueryAllowancesByGranterResponse;
                fromAmino(object: _75.QueryAllowancesByGranterResponseAmino): _75.QueryAllowancesByGranterResponse;
                toAmino(message: _75.QueryAllowancesByGranterResponse): _75.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _75.QueryAllowancesByGranterResponseAminoMsg): _75.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _75.QueryAllowancesByGranterResponse): _75.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _75.QueryAllowancesByGranterResponseProtoMsg): _75.QueryAllowancesByGranterResponse;
                toProto(message: _75.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _75.QueryAllowancesByGranterResponse): _75.QueryAllowancesByGranterResponseProtoMsg;
            };
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _73.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.BasicAllowance;
                fromPartial(object: Partial<_73.BasicAllowance>): _73.BasicAllowance;
                fromAmino(object: _73.BasicAllowanceAmino): _73.BasicAllowance;
                toAmino(message: _73.BasicAllowance): _73.BasicAllowanceAmino;
                fromAminoMsg(object: _73.BasicAllowanceAminoMsg): _73.BasicAllowance;
                toAminoMsg(message: _73.BasicAllowance): _73.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _73.BasicAllowanceProtoMsg): _73.BasicAllowance;
                toProto(message: _73.BasicAllowance): Uint8Array;
                toProtoMsg(message: _73.BasicAllowance): _73.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _73.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.PeriodicAllowance;
                fromPartial(object: Partial<_73.PeriodicAllowance>): _73.PeriodicAllowance;
                fromAmino(object: _73.PeriodicAllowanceAmino): _73.PeriodicAllowance;
                toAmino(message: _73.PeriodicAllowance): _73.PeriodicAllowanceAmino;
                fromAminoMsg(object: _73.PeriodicAllowanceAminoMsg): _73.PeriodicAllowance;
                toAminoMsg(message: _73.PeriodicAllowance): _73.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _73.PeriodicAllowanceProtoMsg): _73.PeriodicAllowance;
                toProto(message: _73.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _73.PeriodicAllowance): _73.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _73.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.AllowedMsgAllowance;
                fromPartial(object: Partial<_73.AllowedMsgAllowance>): _73.AllowedMsgAllowance;
                fromAmino(object: _73.AllowedMsgAllowanceAmino): _73.AllowedMsgAllowance;
                toAmino(message: _73.AllowedMsgAllowance): _73.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _73.AllowedMsgAllowanceAminoMsg): _73.AllowedMsgAllowance;
                toAminoMsg(message: _73.AllowedMsgAllowance): _73.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _73.AllowedMsgAllowanceProtoMsg): _73.AllowedMsgAllowance;
                toProto(message: _73.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _73.AllowedMsgAllowance): _73.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _73.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.Grant;
                fromPartial(object: Partial<_73.Grant>): _73.Grant;
                fromAmino(object: _73.GrantAmino): _73.Grant;
                toAmino(message: _73.Grant): _73.GrantAmino;
                fromAminoMsg(object: _73.GrantAminoMsg): _73.Grant;
                toAminoMsg(message: _73.Grant): _73.GrantAminoMsg;
                fromProtoMsg(message: _73.GrantProtoMsg): _73.Grant;
                toProto(message: _73.Grant): Uint8Array;
                toProtoMsg(message: _73.Grant): _73.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _80.QueryProposalRequest): Promise<_80.QueryProposalResponse>;
                proposals(request: _80.QueryProposalsRequest): Promise<_80.QueryProposalsResponse>;
                vote(request: _80.QueryVoteRequest): Promise<_80.QueryVoteResponse>;
                votes(request: _80.QueryVotesRequest): Promise<_80.QueryVotesResponse>;
                params(request: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                deposit(request: _80.QueryDepositRequest): Promise<_80.QueryDepositResponse>;
                deposits(request: _80.QueryDepositsRequest): Promise<_80.QueryDepositsResponse>;
                tallyResult(request: _80.QueryTallyResultRequest): Promise<_80.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _81.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _81.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _81.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _81.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _81.MsgExecLegacyContent;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    voteWeighted(value: _81.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _81.MsgVoteWeighted;
                    };
                    deposit(value: _81.MsgDeposit): {
                        typeUrl: string;
                        value: _81.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _81.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _81.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _81.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _81.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _81.MsgExecLegacyContent;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    voteWeighted(value: _81.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _81.MsgVoteWeighted;
                    };
                    deposit(value: _81.MsgDeposit): {
                        typeUrl: string;
                        value: _81.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _81.MsgSubmitProposal) => _81.MsgSubmitProposalAmino;
                    fromAmino: (object: _81.MsgSubmitProposalAmino) => _81.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _81.MsgExecLegacyContent) => _81.MsgExecLegacyContentAmino;
                    fromAmino: (object: _81.MsgExecLegacyContentAmino) => _81.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _81.MsgVote) => _81.MsgVoteAmino;
                    fromAmino: (object: _81.MsgVoteAmino) => _81.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _81.MsgVoteWeighted) => _81.MsgVoteWeightedAmino;
                    fromAmino: (object: _81.MsgVoteWeightedAmino) => _81.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _81.MsgDeposit) => _81.MsgDepositAmino;
                    fromAmino: (object: _81.MsgDepositAmino) => _81.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _81.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgSubmitProposal;
                fromPartial(object: Partial<_81.MsgSubmitProposal>): _81.MsgSubmitProposal;
                fromAmino(object: _81.MsgSubmitProposalAmino): _81.MsgSubmitProposal;
                toAmino(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalAmino;
                fromAminoMsg(object: _81.MsgSubmitProposalAminoMsg): _81.MsgSubmitProposal;
                toAminoMsg(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _81.MsgSubmitProposalProtoMsg): _81.MsgSubmitProposal;
                toProto(message: _81.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _81.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_81.MsgSubmitProposalResponse>): _81.MsgSubmitProposalResponse;
                fromAmino(object: _81.MsgSubmitProposalResponseAmino): _81.MsgSubmitProposalResponse;
                toAmino(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _81.MsgSubmitProposalResponseAminoMsg): _81.MsgSubmitProposalResponse;
                toAminoMsg(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _81.MsgSubmitProposalResponseProtoMsg): _81.MsgSubmitProposalResponse;
                toProto(message: _81.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _81.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgExecLegacyContent;
                fromPartial(object: Partial<_81.MsgExecLegacyContent>): _81.MsgExecLegacyContent;
                fromAmino(object: _81.MsgExecLegacyContentAmino): _81.MsgExecLegacyContent;
                toAmino(message: _81.MsgExecLegacyContent): _81.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _81.MsgExecLegacyContentAminoMsg): _81.MsgExecLegacyContent;
                toAminoMsg(message: _81.MsgExecLegacyContent): _81.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _81.MsgExecLegacyContentProtoMsg): _81.MsgExecLegacyContent;
                toProto(message: _81.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _81.MsgExecLegacyContent): _81.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _81.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_81.MsgExecLegacyContentResponse>): _81.MsgExecLegacyContentResponse;
                fromAmino(_: _81.MsgExecLegacyContentResponseAmino): _81.MsgExecLegacyContentResponse;
                toAmino(_: _81.MsgExecLegacyContentResponse): _81.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _81.MsgExecLegacyContentResponseAminoMsg): _81.MsgExecLegacyContentResponse;
                toAminoMsg(message: _81.MsgExecLegacyContentResponse): _81.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _81.MsgExecLegacyContentResponseProtoMsg): _81.MsgExecLegacyContentResponse;
                toProto(message: _81.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _81.MsgExecLegacyContentResponse): _81.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _81.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgVote;
                fromPartial(object: Partial<_81.MsgVote>): _81.MsgVote;
                fromAmino(object: _81.MsgVoteAmino): _81.MsgVote;
                toAmino(message: _81.MsgVote): _81.MsgVoteAmino;
                fromAminoMsg(object: _81.MsgVoteAminoMsg): _81.MsgVote;
                toAminoMsg(message: _81.MsgVote): _81.MsgVoteAminoMsg;
                fromProtoMsg(message: _81.MsgVoteProtoMsg): _81.MsgVote;
                toProto(message: _81.MsgVote): Uint8Array;
                toProtoMsg(message: _81.MsgVote): _81.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _81.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgVoteResponse;
                fromPartial(_: Partial<_81.MsgVoteResponse>): _81.MsgVoteResponse;
                fromAmino(_: _81.MsgVoteResponseAmino): _81.MsgVoteResponse;
                toAmino(_: _81.MsgVoteResponse): _81.MsgVoteResponseAmino;
                fromAminoMsg(object: _81.MsgVoteResponseAminoMsg): _81.MsgVoteResponse;
                toAminoMsg(message: _81.MsgVoteResponse): _81.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _81.MsgVoteResponseProtoMsg): _81.MsgVoteResponse;
                toProto(message: _81.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _81.MsgVoteResponse): _81.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _81.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgVoteWeighted;
                fromPartial(object: Partial<_81.MsgVoteWeighted>): _81.MsgVoteWeighted;
                fromAmino(object: _81.MsgVoteWeightedAmino): _81.MsgVoteWeighted;
                toAmino(message: _81.MsgVoteWeighted): _81.MsgVoteWeightedAmino;
                fromAminoMsg(object: _81.MsgVoteWeightedAminoMsg): _81.MsgVoteWeighted;
                toAminoMsg(message: _81.MsgVoteWeighted): _81.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _81.MsgVoteWeightedProtoMsg): _81.MsgVoteWeighted;
                toProto(message: _81.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _81.MsgVoteWeighted): _81.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _81.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_81.MsgVoteWeightedResponse>): _81.MsgVoteWeightedResponse;
                fromAmino(_: _81.MsgVoteWeightedResponseAmino): _81.MsgVoteWeightedResponse;
                toAmino(_: _81.MsgVoteWeightedResponse): _81.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _81.MsgVoteWeightedResponseAminoMsg): _81.MsgVoteWeightedResponse;
                toAminoMsg(message: _81.MsgVoteWeightedResponse): _81.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _81.MsgVoteWeightedResponseProtoMsg): _81.MsgVoteWeightedResponse;
                toProto(message: _81.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _81.MsgVoteWeightedResponse): _81.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _81.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgDeposit;
                fromPartial(object: Partial<_81.MsgDeposit>): _81.MsgDeposit;
                fromAmino(object: _81.MsgDepositAmino): _81.MsgDeposit;
                toAmino(message: _81.MsgDeposit): _81.MsgDepositAmino;
                fromAminoMsg(object: _81.MsgDepositAminoMsg): _81.MsgDeposit;
                toAminoMsg(message: _81.MsgDeposit): _81.MsgDepositAminoMsg;
                fromProtoMsg(message: _81.MsgDepositProtoMsg): _81.MsgDeposit;
                toProto(message: _81.MsgDeposit): Uint8Array;
                toProtoMsg(message: _81.MsgDeposit): _81.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _81.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgDepositResponse;
                fromPartial(_: Partial<_81.MsgDepositResponse>): _81.MsgDepositResponse;
                fromAmino(_: _81.MsgDepositResponseAmino): _81.MsgDepositResponse;
                toAmino(_: _81.MsgDepositResponse): _81.MsgDepositResponseAmino;
                fromAminoMsg(object: _81.MsgDepositResponseAminoMsg): _81.MsgDepositResponse;
                toAminoMsg(message: _81.MsgDepositResponse): _81.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _81.MsgDepositResponseProtoMsg): _81.MsgDepositResponse;
                toProto(message: _81.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _81.MsgDepositResponse): _81.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _83.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _80.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryProposalRequest;
                fromPartial(object: Partial<_80.QueryProposalRequest>): _80.QueryProposalRequest;
                fromAmino(object: _80.QueryProposalRequestAmino): _80.QueryProposalRequest;
                toAmino(message: _80.QueryProposalRequest): _80.QueryProposalRequestAmino;
                fromAminoMsg(object: _80.QueryProposalRequestAminoMsg): _80.QueryProposalRequest;
                toAminoMsg(message: _80.QueryProposalRequest): _80.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _80.QueryProposalRequestProtoMsg): _80.QueryProposalRequest;
                toProto(message: _80.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _80.QueryProposalRequest): _80.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _80.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryProposalResponse;
                fromPartial(object: Partial<_80.QueryProposalResponse>): _80.QueryProposalResponse;
                fromAmino(object: _80.QueryProposalResponseAmino): _80.QueryProposalResponse;
                toAmino(message: _80.QueryProposalResponse): _80.QueryProposalResponseAmino;
                fromAminoMsg(object: _80.QueryProposalResponseAminoMsg): _80.QueryProposalResponse;
                toAminoMsg(message: _80.QueryProposalResponse): _80.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _80.QueryProposalResponseProtoMsg): _80.QueryProposalResponse;
                toProto(message: _80.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _80.QueryProposalResponse): _80.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _80.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryProposalsRequest;
                fromPartial(object: Partial<_80.QueryProposalsRequest>): _80.QueryProposalsRequest;
                fromAmino(object: _80.QueryProposalsRequestAmino): _80.QueryProposalsRequest;
                toAmino(message: _80.QueryProposalsRequest): _80.QueryProposalsRequestAmino;
                fromAminoMsg(object: _80.QueryProposalsRequestAminoMsg): _80.QueryProposalsRequest;
                toAminoMsg(message: _80.QueryProposalsRequest): _80.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryProposalsRequestProtoMsg): _80.QueryProposalsRequest;
                toProto(message: _80.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryProposalsRequest): _80.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _80.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryProposalsResponse;
                fromPartial(object: Partial<_80.QueryProposalsResponse>): _80.QueryProposalsResponse;
                fromAmino(object: _80.QueryProposalsResponseAmino): _80.QueryProposalsResponse;
                toAmino(message: _80.QueryProposalsResponse): _80.QueryProposalsResponseAmino;
                fromAminoMsg(object: _80.QueryProposalsResponseAminoMsg): _80.QueryProposalsResponse;
                toAminoMsg(message: _80.QueryProposalsResponse): _80.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryProposalsResponseProtoMsg): _80.QueryProposalsResponse;
                toProto(message: _80.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryProposalsResponse): _80.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _80.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVoteRequest;
                fromPartial(object: Partial<_80.QueryVoteRequest>): _80.QueryVoteRequest;
                fromAmino(object: _80.QueryVoteRequestAmino): _80.QueryVoteRequest;
                toAmino(message: _80.QueryVoteRequest): _80.QueryVoteRequestAmino;
                fromAminoMsg(object: _80.QueryVoteRequestAminoMsg): _80.QueryVoteRequest;
                toAminoMsg(message: _80.QueryVoteRequest): _80.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVoteRequestProtoMsg): _80.QueryVoteRequest;
                toProto(message: _80.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVoteRequest): _80.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _80.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVoteResponse;
                fromPartial(object: Partial<_80.QueryVoteResponse>): _80.QueryVoteResponse;
                fromAmino(object: _80.QueryVoteResponseAmino): _80.QueryVoteResponse;
                toAmino(message: _80.QueryVoteResponse): _80.QueryVoteResponseAmino;
                fromAminoMsg(object: _80.QueryVoteResponseAminoMsg): _80.QueryVoteResponse;
                toAminoMsg(message: _80.QueryVoteResponse): _80.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVoteResponseProtoMsg): _80.QueryVoteResponse;
                toProto(message: _80.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVoteResponse): _80.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _80.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVotesRequest;
                fromPartial(object: Partial<_80.QueryVotesRequest>): _80.QueryVotesRequest;
                fromAmino(object: _80.QueryVotesRequestAmino): _80.QueryVotesRequest;
                toAmino(message: _80.QueryVotesRequest): _80.QueryVotesRequestAmino;
                fromAminoMsg(object: _80.QueryVotesRequestAminoMsg): _80.QueryVotesRequest;
                toAminoMsg(message: _80.QueryVotesRequest): _80.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVotesRequestProtoMsg): _80.QueryVotesRequest;
                toProto(message: _80.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVotesRequest): _80.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _80.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVotesResponse;
                fromPartial(object: Partial<_80.QueryVotesResponse>): _80.QueryVotesResponse;
                fromAmino(object: _80.QueryVotesResponseAmino): _80.QueryVotesResponse;
                toAmino(message: _80.QueryVotesResponse): _80.QueryVotesResponseAmino;
                fromAminoMsg(object: _80.QueryVotesResponseAminoMsg): _80.QueryVotesResponse;
                toAminoMsg(message: _80.QueryVotesResponse): _80.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVotesResponseProtoMsg): _80.QueryVotesResponse;
                toProto(message: _80.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVotesResponse): _80.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _80.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryParamsRequest;
                fromPartial(object: Partial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
                fromAmino(object: _80.QueryParamsRequestAmino): _80.QueryParamsRequest;
                toAmino(message: _80.QueryParamsRequest): _80.QueryParamsRequestAmino;
                fromAminoMsg(object: _80.QueryParamsRequestAminoMsg): _80.QueryParamsRequest;
                toAminoMsg(message: _80.QueryParamsRequest): _80.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryParamsRequestProtoMsg): _80.QueryParamsRequest;
                toProto(message: _80.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryParamsRequest): _80.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _80.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryParamsResponse;
                fromPartial(object: Partial<_80.QueryParamsResponse>): _80.QueryParamsResponse;
                fromAmino(object: _80.QueryParamsResponseAmino): _80.QueryParamsResponse;
                toAmino(message: _80.QueryParamsResponse): _80.QueryParamsResponseAmino;
                fromAminoMsg(object: _80.QueryParamsResponseAminoMsg): _80.QueryParamsResponse;
                toAminoMsg(message: _80.QueryParamsResponse): _80.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryParamsResponseProtoMsg): _80.QueryParamsResponse;
                toProto(message: _80.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryParamsResponse): _80.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _80.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDepositRequest;
                fromPartial(object: Partial<_80.QueryDepositRequest>): _80.QueryDepositRequest;
                fromAmino(object: _80.QueryDepositRequestAmino): _80.QueryDepositRequest;
                toAmino(message: _80.QueryDepositRequest): _80.QueryDepositRequestAmino;
                fromAminoMsg(object: _80.QueryDepositRequestAminoMsg): _80.QueryDepositRequest;
                toAminoMsg(message: _80.QueryDepositRequest): _80.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _80.QueryDepositRequestProtoMsg): _80.QueryDepositRequest;
                toProto(message: _80.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _80.QueryDepositRequest): _80.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _80.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDepositResponse;
                fromPartial(object: Partial<_80.QueryDepositResponse>): _80.QueryDepositResponse;
                fromAmino(object: _80.QueryDepositResponseAmino): _80.QueryDepositResponse;
                toAmino(message: _80.QueryDepositResponse): _80.QueryDepositResponseAmino;
                fromAminoMsg(object: _80.QueryDepositResponseAminoMsg): _80.QueryDepositResponse;
                toAminoMsg(message: _80.QueryDepositResponse): _80.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _80.QueryDepositResponseProtoMsg): _80.QueryDepositResponse;
                toProto(message: _80.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _80.QueryDepositResponse): _80.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _80.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDepositsRequest;
                fromPartial(object: Partial<_80.QueryDepositsRequest>): _80.QueryDepositsRequest;
                fromAmino(object: _80.QueryDepositsRequestAmino): _80.QueryDepositsRequest;
                toAmino(message: _80.QueryDepositsRequest): _80.QueryDepositsRequestAmino;
                fromAminoMsg(object: _80.QueryDepositsRequestAminoMsg): _80.QueryDepositsRequest;
                toAminoMsg(message: _80.QueryDepositsRequest): _80.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryDepositsRequestProtoMsg): _80.QueryDepositsRequest;
                toProto(message: _80.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryDepositsRequest): _80.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _80.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDepositsResponse;
                fromPartial(object: Partial<_80.QueryDepositsResponse>): _80.QueryDepositsResponse;
                fromAmino(object: _80.QueryDepositsResponseAmino): _80.QueryDepositsResponse;
                toAmino(message: _80.QueryDepositsResponse): _80.QueryDepositsResponseAmino;
                fromAminoMsg(object: _80.QueryDepositsResponseAminoMsg): _80.QueryDepositsResponse;
                toAminoMsg(message: _80.QueryDepositsResponse): _80.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryDepositsResponseProtoMsg): _80.QueryDepositsResponse;
                toProto(message: _80.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryDepositsResponse): _80.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _80.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryTallyResultRequest;
                fromPartial(object: Partial<_80.QueryTallyResultRequest>): _80.QueryTallyResultRequest;
                fromAmino(object: _80.QueryTallyResultRequestAmino): _80.QueryTallyResultRequest;
                toAmino(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _80.QueryTallyResultRequestAminoMsg): _80.QueryTallyResultRequest;
                toAminoMsg(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _80.QueryTallyResultRequestProtoMsg): _80.QueryTallyResultRequest;
                toProto(message: _80.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _80.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryTallyResultResponse;
                fromPartial(object: Partial<_80.QueryTallyResultResponse>): _80.QueryTallyResultResponse;
                fromAmino(object: _80.QueryTallyResultResponseAmino): _80.QueryTallyResultResponse;
                toAmino(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _80.QueryTallyResultResponseAminoMsg): _80.QueryTallyResultResponse;
                toAminoMsg(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _80.QueryTallyResultResponseProtoMsg): _80.QueryTallyResultResponse;
                toProto(message: _80.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _79.VoteOption;
            voteOptionToJSON(object: _79.VoteOption): string;
            proposalStatusFromJSON(object: any): _79.ProposalStatus;
            proposalStatusToJSON(object: _79.ProposalStatus): string;
            VoteOption: typeof _79.VoteOption;
            VoteOptionSDKType: typeof _79.VoteOption;
            VoteOptionAmino: typeof _79.VoteOption;
            ProposalStatus: typeof _79.ProposalStatus;
            ProposalStatusSDKType: typeof _79.ProposalStatus;
            ProposalStatusAmino: typeof _79.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _79.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.WeightedVoteOption;
                fromPartial(object: Partial<_79.WeightedVoteOption>): _79.WeightedVoteOption;
                fromAmino(object: _79.WeightedVoteOptionAmino): _79.WeightedVoteOption;
                toAmino(message: _79.WeightedVoteOption): _79.WeightedVoteOptionAmino;
                fromAminoMsg(object: _79.WeightedVoteOptionAminoMsg): _79.WeightedVoteOption;
                toAminoMsg(message: _79.WeightedVoteOption): _79.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _79.WeightedVoteOptionProtoMsg): _79.WeightedVoteOption;
                toProto(message: _79.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _79.WeightedVoteOption): _79.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _79.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Deposit;
                fromPartial(object: Partial<_79.Deposit>): _79.Deposit;
                fromAmino(object: _79.DepositAmino): _79.Deposit;
                toAmino(message: _79.Deposit): _79.DepositAmino;
                fromAminoMsg(object: _79.DepositAminoMsg): _79.Deposit;
                toAminoMsg(message: _79.Deposit): _79.DepositAminoMsg;
                fromProtoMsg(message: _79.DepositProtoMsg): _79.Deposit;
                toProto(message: _79.Deposit): Uint8Array;
                toProtoMsg(message: _79.Deposit): _79.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _79.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Proposal;
                fromPartial(object: Partial<_79.Proposal>): _79.Proposal;
                fromAmino(object: _79.ProposalAmino): _79.Proposal;
                toAmino(message: _79.Proposal): _79.ProposalAmino;
                fromAminoMsg(object: _79.ProposalAminoMsg): _79.Proposal;
                toAminoMsg(message: _79.Proposal): _79.ProposalAminoMsg;
                fromProtoMsg(message: _79.ProposalProtoMsg): _79.Proposal;
                toProto(message: _79.Proposal): Uint8Array;
                toProtoMsg(message: _79.Proposal): _79.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _79.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.TallyResult;
                fromPartial(object: Partial<_79.TallyResult>): _79.TallyResult;
                fromAmino(object: _79.TallyResultAmino): _79.TallyResult;
                toAmino(message: _79.TallyResult): _79.TallyResultAmino;
                fromAminoMsg(object: _79.TallyResultAminoMsg): _79.TallyResult;
                toAminoMsg(message: _79.TallyResult): _79.TallyResultAminoMsg;
                fromProtoMsg(message: _79.TallyResultProtoMsg): _79.TallyResult;
                toProto(message: _79.TallyResult): Uint8Array;
                toProtoMsg(message: _79.TallyResult): _79.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _79.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Vote;
                fromPartial(object: Partial<_79.Vote>): _79.Vote;
                fromAmino(object: _79.VoteAmino): _79.Vote;
                toAmino(message: _79.Vote): _79.VoteAmino;
                fromAminoMsg(object: _79.VoteAminoMsg): _79.Vote;
                toAminoMsg(message: _79.Vote): _79.VoteAminoMsg;
                fromProtoMsg(message: _79.VoteProtoMsg): _79.Vote;
                toProto(message: _79.Vote): Uint8Array;
                toProtoMsg(message: _79.Vote): _79.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _79.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.DepositParams;
                fromPartial(object: Partial<_79.DepositParams>): _79.DepositParams;
                fromAmino(object: _79.DepositParamsAmino): _79.DepositParams;
                toAmino(message: _79.DepositParams): _79.DepositParamsAmino;
                fromAminoMsg(object: _79.DepositParamsAminoMsg): _79.DepositParams;
                toAminoMsg(message: _79.DepositParams): _79.DepositParamsAminoMsg;
                fromProtoMsg(message: _79.DepositParamsProtoMsg): _79.DepositParams;
                toProto(message: _79.DepositParams): Uint8Array;
                toProtoMsg(message: _79.DepositParams): _79.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _79.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.VotingParams;
                fromPartial(object: Partial<_79.VotingParams>): _79.VotingParams;
                fromAmino(object: _79.VotingParamsAmino): _79.VotingParams;
                toAmino(message: _79.VotingParams): _79.VotingParamsAmino;
                fromAminoMsg(object: _79.VotingParamsAminoMsg): _79.VotingParams;
                toAminoMsg(message: _79.VotingParams): _79.VotingParamsAminoMsg;
                fromProtoMsg(message: _79.VotingParamsProtoMsg): _79.VotingParams;
                toProto(message: _79.VotingParams): Uint8Array;
                toProtoMsg(message: _79.VotingParams): _79.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _79.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.TallyParams;
                fromPartial(object: Partial<_79.TallyParams>): _79.TallyParams;
                fromAmino(object: _79.TallyParamsAmino): _79.TallyParams;
                toAmino(message: _79.TallyParams): _79.TallyParamsAmino;
                fromAminoMsg(object: _79.TallyParamsAminoMsg): _79.TallyParams;
                toAminoMsg(message: _79.TallyParams): _79.TallyParamsAminoMsg;
                fromProtoMsg(message: _79.TallyParamsProtoMsg): _79.TallyParams;
                toProto(message: _79.TallyParams): Uint8Array;
                toProtoMsg(message: _79.TallyParams): _79.TallyParamsProtoMsg;
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
        };
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _84.QueryProposalRequest): Promise<_84.QueryProposalResponse>;
                proposals(request: _84.QueryProposalsRequest): Promise<_84.QueryProposalsResponse>;
                vote(request: _84.QueryVoteRequest): Promise<_84.QueryVoteResponse>;
                votes(request: _84.QueryVotesRequest): Promise<_84.QueryVotesResponse>;
                params(request: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                deposit(request: _84.QueryDepositRequest): Promise<_84.QueryDepositResponse>;
                deposits(request: _84.QueryDepositsRequest): Promise<_84.QueryDepositsResponse>;
                tallyResult(request: _84.QueryTallyResultRequest): Promise<_84.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _85.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _85.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _85.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    vote(value: _85.MsgVote): {
                        typeUrl: string;
                        value: _85.MsgVote;
                    };
                    voteWeighted(value: _85.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _85.MsgVoteWeighted;
                    };
                    deposit(value: _85.MsgDeposit): {
                        typeUrl: string;
                        value: _85.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _85.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _85.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _85.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    vote(value: _85.MsgVote): {
                        typeUrl: string;
                        value: _85.MsgVote;
                    };
                    voteWeighted(value: _85.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _85.MsgVoteWeighted;
                    };
                    deposit(value: _85.MsgDeposit): {
                        typeUrl: string;
                        value: _85.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _85.MsgSubmitProposal) => _85.MsgSubmitProposalAmino;
                    fromAmino: (object: _85.MsgSubmitProposalAmino) => _85.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _85.MsgVote) => _85.MsgVoteAmino;
                    fromAmino: (object: _85.MsgVoteAmino) => _85.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _85.MsgVoteWeighted) => _85.MsgVoteWeightedAmino;
                    fromAmino: (object: _85.MsgVoteWeightedAmino) => _85.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _85.MsgDeposit) => _85.MsgDepositAmino;
                    fromAmino: (object: _85.MsgDepositAmino) => _85.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _85.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgSubmitProposal;
                fromPartial(object: Partial<_85.MsgSubmitProposal>): _85.MsgSubmitProposal;
                fromAmino(object: _85.MsgSubmitProposalAmino): _85.MsgSubmitProposal;
                toAmino(message: _85.MsgSubmitProposal): _85.MsgSubmitProposalAmino;
                fromAminoMsg(object: _85.MsgSubmitProposalAminoMsg): _85.MsgSubmitProposal;
                toAminoMsg(message: _85.MsgSubmitProposal): _85.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _85.MsgSubmitProposalProtoMsg): _85.MsgSubmitProposal;
                toProto(message: _85.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _85.MsgSubmitProposal): _85.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _85.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_85.MsgSubmitProposalResponse>): _85.MsgSubmitProposalResponse;
                fromAmino(object: _85.MsgSubmitProposalResponseAmino): _85.MsgSubmitProposalResponse;
                toAmino(message: _85.MsgSubmitProposalResponse): _85.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _85.MsgSubmitProposalResponseAminoMsg): _85.MsgSubmitProposalResponse;
                toAminoMsg(message: _85.MsgSubmitProposalResponse): _85.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _85.MsgSubmitProposalResponseProtoMsg): _85.MsgSubmitProposalResponse;
                toProto(message: _85.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _85.MsgSubmitProposalResponse): _85.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _85.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgVote;
                fromPartial(object: Partial<_85.MsgVote>): _85.MsgVote;
                fromAmino(object: _85.MsgVoteAmino): _85.MsgVote;
                toAmino(message: _85.MsgVote): _85.MsgVoteAmino;
                fromAminoMsg(object: _85.MsgVoteAminoMsg): _85.MsgVote;
                toAminoMsg(message: _85.MsgVote): _85.MsgVoteAminoMsg;
                fromProtoMsg(message: _85.MsgVoteProtoMsg): _85.MsgVote;
                toProto(message: _85.MsgVote): Uint8Array;
                toProtoMsg(message: _85.MsgVote): _85.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _85.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgVoteResponse;
                fromPartial(_: Partial<_85.MsgVoteResponse>): _85.MsgVoteResponse;
                fromAmino(_: _85.MsgVoteResponseAmino): _85.MsgVoteResponse;
                toAmino(_: _85.MsgVoteResponse): _85.MsgVoteResponseAmino;
                fromAminoMsg(object: _85.MsgVoteResponseAminoMsg): _85.MsgVoteResponse;
                toAminoMsg(message: _85.MsgVoteResponse): _85.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _85.MsgVoteResponseProtoMsg): _85.MsgVoteResponse;
                toProto(message: _85.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _85.MsgVoteResponse): _85.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _85.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgVoteWeighted;
                fromPartial(object: Partial<_85.MsgVoteWeighted>): _85.MsgVoteWeighted;
                fromAmino(object: _85.MsgVoteWeightedAmino): _85.MsgVoteWeighted;
                toAmino(message: _85.MsgVoteWeighted): _85.MsgVoteWeightedAmino;
                fromAminoMsg(object: _85.MsgVoteWeightedAminoMsg): _85.MsgVoteWeighted;
                toAminoMsg(message: _85.MsgVoteWeighted): _85.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _85.MsgVoteWeightedProtoMsg): _85.MsgVoteWeighted;
                toProto(message: _85.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _85.MsgVoteWeighted): _85.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _85.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_85.MsgVoteWeightedResponse>): _85.MsgVoteWeightedResponse;
                fromAmino(_: _85.MsgVoteWeightedResponseAmino): _85.MsgVoteWeightedResponse;
                toAmino(_: _85.MsgVoteWeightedResponse): _85.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _85.MsgVoteWeightedResponseAminoMsg): _85.MsgVoteWeightedResponse;
                toAminoMsg(message: _85.MsgVoteWeightedResponse): _85.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _85.MsgVoteWeightedResponseProtoMsg): _85.MsgVoteWeightedResponse;
                toProto(message: _85.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _85.MsgVoteWeightedResponse): _85.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _85.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgDeposit;
                fromPartial(object: Partial<_85.MsgDeposit>): _85.MsgDeposit;
                fromAmino(object: _85.MsgDepositAmino): _85.MsgDeposit;
                toAmino(message: _85.MsgDeposit): _85.MsgDepositAmino;
                fromAminoMsg(object: _85.MsgDepositAminoMsg): _85.MsgDeposit;
                toAminoMsg(message: _85.MsgDeposit): _85.MsgDepositAminoMsg;
                fromProtoMsg(message: _85.MsgDepositProtoMsg): _85.MsgDeposit;
                toProto(message: _85.MsgDeposit): Uint8Array;
                toProtoMsg(message: _85.MsgDeposit): _85.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _85.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgDepositResponse;
                fromPartial(_: Partial<_85.MsgDepositResponse>): _85.MsgDepositResponse;
                fromAmino(_: _85.MsgDepositResponseAmino): _85.MsgDepositResponse;
                toAmino(_: _85.MsgDepositResponse): _85.MsgDepositResponseAmino;
                fromAminoMsg(object: _85.MsgDepositResponseAminoMsg): _85.MsgDepositResponse;
                toAminoMsg(message: _85.MsgDepositResponse): _85.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _85.MsgDepositResponseProtoMsg): _85.MsgDepositResponse;
                toProto(message: _85.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _85.MsgDepositResponse): _85.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _83.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _84.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryProposalRequest;
                fromPartial(object: Partial<_84.QueryProposalRequest>): _84.QueryProposalRequest;
                fromAmino(object: _84.QueryProposalRequestAmino): _84.QueryProposalRequest;
                toAmino(message: _84.QueryProposalRequest): _84.QueryProposalRequestAmino;
                fromAminoMsg(object: _84.QueryProposalRequestAminoMsg): _84.QueryProposalRequest;
                toAminoMsg(message: _84.QueryProposalRequest): _84.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _84.QueryProposalRequestProtoMsg): _84.QueryProposalRequest;
                toProto(message: _84.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _84.QueryProposalRequest): _84.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _84.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryProposalResponse;
                fromPartial(object: Partial<_84.QueryProposalResponse>): _84.QueryProposalResponse;
                fromAmino(object: _84.QueryProposalResponseAmino): _84.QueryProposalResponse;
                toAmino(message: _84.QueryProposalResponse): _84.QueryProposalResponseAmino;
                fromAminoMsg(object: _84.QueryProposalResponseAminoMsg): _84.QueryProposalResponse;
                toAminoMsg(message: _84.QueryProposalResponse): _84.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _84.QueryProposalResponseProtoMsg): _84.QueryProposalResponse;
                toProto(message: _84.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _84.QueryProposalResponse): _84.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _84.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryProposalsRequest;
                fromPartial(object: Partial<_84.QueryProposalsRequest>): _84.QueryProposalsRequest;
                fromAmino(object: _84.QueryProposalsRequestAmino): _84.QueryProposalsRequest;
                toAmino(message: _84.QueryProposalsRequest): _84.QueryProposalsRequestAmino;
                fromAminoMsg(object: _84.QueryProposalsRequestAminoMsg): _84.QueryProposalsRequest;
                toAminoMsg(message: _84.QueryProposalsRequest): _84.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryProposalsRequestProtoMsg): _84.QueryProposalsRequest;
                toProto(message: _84.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryProposalsRequest): _84.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _84.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryProposalsResponse;
                fromPartial(object: Partial<_84.QueryProposalsResponse>): _84.QueryProposalsResponse;
                fromAmino(object: _84.QueryProposalsResponseAmino): _84.QueryProposalsResponse;
                toAmino(message: _84.QueryProposalsResponse): _84.QueryProposalsResponseAmino;
                fromAminoMsg(object: _84.QueryProposalsResponseAminoMsg): _84.QueryProposalsResponse;
                toAminoMsg(message: _84.QueryProposalsResponse): _84.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryProposalsResponseProtoMsg): _84.QueryProposalsResponse;
                toProto(message: _84.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryProposalsResponse): _84.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _84.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVoteRequest;
                fromPartial(object: Partial<_84.QueryVoteRequest>): _84.QueryVoteRequest;
                fromAmino(object: _84.QueryVoteRequestAmino): _84.QueryVoteRequest;
                toAmino(message: _84.QueryVoteRequest): _84.QueryVoteRequestAmino;
                fromAminoMsg(object: _84.QueryVoteRequestAminoMsg): _84.QueryVoteRequest;
                toAminoMsg(message: _84.QueryVoteRequest): _84.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _84.QueryVoteRequestProtoMsg): _84.QueryVoteRequest;
                toProto(message: _84.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _84.QueryVoteRequest): _84.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _84.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVoteResponse;
                fromPartial(object: Partial<_84.QueryVoteResponse>): _84.QueryVoteResponse;
                fromAmino(object: _84.QueryVoteResponseAmino): _84.QueryVoteResponse;
                toAmino(message: _84.QueryVoteResponse): _84.QueryVoteResponseAmino;
                fromAminoMsg(object: _84.QueryVoteResponseAminoMsg): _84.QueryVoteResponse;
                toAminoMsg(message: _84.QueryVoteResponse): _84.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _84.QueryVoteResponseProtoMsg): _84.QueryVoteResponse;
                toProto(message: _84.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _84.QueryVoteResponse): _84.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _84.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVotesRequest;
                fromPartial(object: Partial<_84.QueryVotesRequest>): _84.QueryVotesRequest;
                fromAmino(object: _84.QueryVotesRequestAmino): _84.QueryVotesRequest;
                toAmino(message: _84.QueryVotesRequest): _84.QueryVotesRequestAmino;
                fromAminoMsg(object: _84.QueryVotesRequestAminoMsg): _84.QueryVotesRequest;
                toAminoMsg(message: _84.QueryVotesRequest): _84.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _84.QueryVotesRequestProtoMsg): _84.QueryVotesRequest;
                toProto(message: _84.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _84.QueryVotesRequest): _84.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _84.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVotesResponse;
                fromPartial(object: Partial<_84.QueryVotesResponse>): _84.QueryVotesResponse;
                fromAmino(object: _84.QueryVotesResponseAmino): _84.QueryVotesResponse;
                toAmino(message: _84.QueryVotesResponse): _84.QueryVotesResponseAmino;
                fromAminoMsg(object: _84.QueryVotesResponseAminoMsg): _84.QueryVotesResponse;
                toAminoMsg(message: _84.QueryVotesResponse): _84.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _84.QueryVotesResponseProtoMsg): _84.QueryVotesResponse;
                toProto(message: _84.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _84.QueryVotesResponse): _84.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _84.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryParamsRequest;
                fromPartial(object: Partial<_84.QueryParamsRequest>): _84.QueryParamsRequest;
                fromAmino(object: _84.QueryParamsRequestAmino): _84.QueryParamsRequest;
                toAmino(message: _84.QueryParamsRequest): _84.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _84.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDepositRequest;
                fromPartial(object: Partial<_84.QueryDepositRequest>): _84.QueryDepositRequest;
                fromAmino(object: _84.QueryDepositRequestAmino): _84.QueryDepositRequest;
                toAmino(message: _84.QueryDepositRequest): _84.QueryDepositRequestAmino;
                fromAminoMsg(object: _84.QueryDepositRequestAminoMsg): _84.QueryDepositRequest;
                toAminoMsg(message: _84.QueryDepositRequest): _84.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDepositRequestProtoMsg): _84.QueryDepositRequest;
                toProto(message: _84.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDepositRequest): _84.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _84.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDepositResponse;
                fromPartial(object: Partial<_84.QueryDepositResponse>): _84.QueryDepositResponse;
                fromAmino(object: _84.QueryDepositResponseAmino): _84.QueryDepositResponse;
                toAmino(message: _84.QueryDepositResponse): _84.QueryDepositResponseAmino;
                fromAminoMsg(object: _84.QueryDepositResponseAminoMsg): _84.QueryDepositResponse;
                toAminoMsg(message: _84.QueryDepositResponse): _84.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDepositResponseProtoMsg): _84.QueryDepositResponse;
                toProto(message: _84.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDepositResponse): _84.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _84.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDepositsRequest;
                fromPartial(object: Partial<_84.QueryDepositsRequest>): _84.QueryDepositsRequest;
                fromAmino(object: _84.QueryDepositsRequestAmino): _84.QueryDepositsRequest;
                toAmino(message: _84.QueryDepositsRequest): _84.QueryDepositsRequestAmino;
                fromAminoMsg(object: _84.QueryDepositsRequestAminoMsg): _84.QueryDepositsRequest;
                toAminoMsg(message: _84.QueryDepositsRequest): _84.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDepositsRequestProtoMsg): _84.QueryDepositsRequest;
                toProto(message: _84.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDepositsRequest): _84.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _84.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDepositsResponse;
                fromPartial(object: Partial<_84.QueryDepositsResponse>): _84.QueryDepositsResponse;
                fromAmino(object: _84.QueryDepositsResponseAmino): _84.QueryDepositsResponse;
                toAmino(message: _84.QueryDepositsResponse): _84.QueryDepositsResponseAmino;
                fromAminoMsg(object: _84.QueryDepositsResponseAminoMsg): _84.QueryDepositsResponse;
                toAminoMsg(message: _84.QueryDepositsResponse): _84.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDepositsResponseProtoMsg): _84.QueryDepositsResponse;
                toProto(message: _84.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDepositsResponse): _84.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _84.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryTallyResultRequest;
                fromPartial(object: Partial<_84.QueryTallyResultRequest>): _84.QueryTallyResultRequest;
                fromAmino(object: _84.QueryTallyResultRequestAmino): _84.QueryTallyResultRequest;
                toAmino(message: _84.QueryTallyResultRequest): _84.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _84.QueryTallyResultRequestAminoMsg): _84.QueryTallyResultRequest;
                toAminoMsg(message: _84.QueryTallyResultRequest): _84.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _84.QueryTallyResultRequestProtoMsg): _84.QueryTallyResultRequest;
                toProto(message: _84.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _84.QueryTallyResultRequest): _84.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _84.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryTallyResultResponse;
                fromPartial(object: Partial<_84.QueryTallyResultResponse>): _84.QueryTallyResultResponse;
                fromAmino(object: _84.QueryTallyResultResponseAmino): _84.QueryTallyResultResponse;
                toAmino(message: _84.QueryTallyResultResponse): _84.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _84.QueryTallyResultResponseAminoMsg): _84.QueryTallyResultResponse;
                toAminoMsg(message: _84.QueryTallyResultResponse): _84.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _84.QueryTallyResultResponseProtoMsg): _84.QueryTallyResultResponse;
                toProto(message: _84.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _84.QueryTallyResultResponse): _84.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _83.VoteOption;
            voteOptionToJSON(object: _83.VoteOption): string;
            proposalStatusFromJSON(object: any): _83.ProposalStatus;
            proposalStatusToJSON(object: _83.ProposalStatus): string;
            VoteOption: typeof _83.VoteOption;
            VoteOptionSDKType: typeof _83.VoteOption;
            VoteOptionAmino: typeof _83.VoteOption;
            ProposalStatus: typeof _83.ProposalStatus;
            ProposalStatusSDKType: typeof _83.ProposalStatus;
            ProposalStatusAmino: typeof _83.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _83.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.WeightedVoteOption;
                fromPartial(object: Partial<_83.WeightedVoteOption>): _83.WeightedVoteOption;
                fromAmino(object: _83.WeightedVoteOptionAmino): _83.WeightedVoteOption;
                toAmino(message: _83.WeightedVoteOption): _83.WeightedVoteOptionAmino;
                fromAminoMsg(object: _83.WeightedVoteOptionAminoMsg): _83.WeightedVoteOption;
                toAminoMsg(message: _83.WeightedVoteOption): _83.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _83.WeightedVoteOptionProtoMsg): _83.WeightedVoteOption;
                toProto(message: _83.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _83.WeightedVoteOption): _83.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _83.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.TextProposal;
                fromPartial(object: Partial<_83.TextProposal>): _83.TextProposal;
                fromAmino(object: _83.TextProposalAmino): _83.TextProposal;
                toAmino(message: _83.TextProposal): _83.TextProposalAmino;
                fromAminoMsg(object: _83.TextProposalAminoMsg): _83.TextProposal;
                toAminoMsg(message: _83.TextProposal): _83.TextProposalAminoMsg;
                fromProtoMsg(message: _83.TextProposalProtoMsg): _83.TextProposal;
                toProto(message: _83.TextProposal): Uint8Array;
                toProtoMsg(message: _83.TextProposal): _83.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _83.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Deposit;
                fromPartial(object: Partial<_83.Deposit>): _83.Deposit;
                fromAmino(object: _83.DepositAmino): _83.Deposit;
                toAmino(message: _83.Deposit): _83.DepositAmino;
                fromAminoMsg(object: _83.DepositAminoMsg): _83.Deposit;
                toAminoMsg(message: _83.Deposit): _83.DepositAminoMsg;
                fromProtoMsg(message: _83.DepositProtoMsg): _83.Deposit;
                toProto(message: _83.Deposit): Uint8Array;
                toProtoMsg(message: _83.Deposit): _83.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _83.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Proposal;
                fromPartial(object: Partial<_83.Proposal>): _83.Proposal;
                fromAmino(object: _83.ProposalAmino): _83.Proposal;
                toAmino(message: _83.Proposal): _83.ProposalAmino;
                fromAminoMsg(object: _83.ProposalAminoMsg): _83.Proposal;
                toAminoMsg(message: _83.Proposal): _83.ProposalAminoMsg;
                fromProtoMsg(message: _83.ProposalProtoMsg): _83.Proposal;
                toProto(message: _83.Proposal): Uint8Array;
                toProtoMsg(message: _83.Proposal): _83.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _83.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.TallyResult;
                fromPartial(object: Partial<_83.TallyResult>): _83.TallyResult;
                fromAmino(object: _83.TallyResultAmino): _83.TallyResult;
                toAmino(message: _83.TallyResult): _83.TallyResultAmino;
                fromAminoMsg(object: _83.TallyResultAminoMsg): _83.TallyResult;
                toAminoMsg(message: _83.TallyResult): _83.TallyResultAminoMsg;
                fromProtoMsg(message: _83.TallyResultProtoMsg): _83.TallyResult;
                toProto(message: _83.TallyResult): Uint8Array;
                toProtoMsg(message: _83.TallyResult): _83.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _83.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Vote;
                fromPartial(object: Partial<_83.Vote>): _83.Vote;
                fromAmino(object: _83.VoteAmino): _83.Vote;
                toAmino(message: _83.Vote): _83.VoteAmino;
                fromAminoMsg(object: _83.VoteAminoMsg): _83.Vote;
                toAminoMsg(message: _83.Vote): _83.VoteAminoMsg;
                fromProtoMsg(message: _83.VoteProtoMsg): _83.Vote;
                toProto(message: _83.Vote): Uint8Array;
                toProtoMsg(message: _83.Vote): _83.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _83.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DepositParams;
                fromPartial(object: Partial<_83.DepositParams>): _83.DepositParams;
                fromAmino(object: _83.DepositParamsAmino): _83.DepositParams;
                toAmino(message: _83.DepositParams): _83.DepositParamsAmino;
                fromAminoMsg(object: _83.DepositParamsAminoMsg): _83.DepositParams;
                toAminoMsg(message: _83.DepositParams): _83.DepositParamsAminoMsg;
                fromProtoMsg(message: _83.DepositParamsProtoMsg): _83.DepositParams;
                toProto(message: _83.DepositParams): Uint8Array;
                toProtoMsg(message: _83.DepositParams): _83.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _83.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.VotingParams;
                fromPartial(object: Partial<_83.VotingParams>): _83.VotingParams;
                fromAmino(object: _83.VotingParamsAmino): _83.VotingParams;
                toAmino(message: _83.VotingParams): _83.VotingParamsAmino;
                fromAminoMsg(object: _83.VotingParamsAminoMsg): _83.VotingParams;
                toAminoMsg(message: _83.VotingParams): _83.VotingParamsAminoMsg;
                fromProtoMsg(message: _83.VotingParamsProtoMsg): _83.VotingParams;
                toProto(message: _83.VotingParams): Uint8Array;
                toProtoMsg(message: _83.VotingParams): _83.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _83.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.TallyParams;
                fromPartial(object: Partial<_83.TallyParams>): _83.TallyParams;
                fromAmino(object: _83.TallyParamsAmino): _83.TallyParams;
                toAmino(message: _83.TallyParams): _83.TallyParamsAmino;
                fromAminoMsg(object: _83.TallyParamsAminoMsg): _83.TallyParams;
                toAminoMsg(message: _83.TallyParams): _83.TallyParamsAminoMsg;
                fromProtoMsg(message: _83.TallyParamsProtoMsg): _83.TallyParams;
                toProto(message: _83.TallyParams): Uint8Array;
                toProtoMsg(message: _83.TallyParams): _83.TallyParamsProtoMsg;
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
    namespace group {
        const v1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _88.QueryGroupInfoRequest): Promise<_88.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _88.QueryGroupPolicyInfoRequest): Promise<_88.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _88.QueryGroupMembersRequest): Promise<_88.QueryGroupMembersResponse>;
                groupsByAdmin(request: _88.QueryGroupsByAdminRequest): Promise<_88.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _88.QueryGroupPoliciesByGroupRequest): Promise<_88.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _88.QueryGroupPoliciesByAdminRequest): Promise<_88.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _88.QueryProposalRequest): Promise<_88.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _88.QueryProposalsByGroupPolicyRequest): Promise<_88.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _88.QueryVoteByProposalVoterRequest): Promise<_88.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _88.QueryVotesByProposalRequest): Promise<_88.QueryVotesByProposalResponse>;
                votesByVoter(request: _88.QueryVotesByVoterRequest): Promise<_88.QueryVotesByVoterResponse>;
                groupsByMember(request: _88.QueryGroupsByMemberRequest): Promise<_88.QueryGroupsByMemberResponse>;
                tallyResult(request: _88.QueryTallyResultRequest): Promise<_88.QueryTallyResultResponse>;
                groups(request?: _88.QueryGroupsRequest): Promise<_88.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _189.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _89.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _89.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _89.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _89.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _89.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _89.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _89.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _89.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _89.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _89.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _89.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _89.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _89.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _89.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _89.MsgCreateGroup): {
                        typeUrl: string;
                        value: _89.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _89.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _89.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _89.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _89.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _89.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _89.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _89.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _89.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _89.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _89.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _89.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _89.MsgWithdrawProposal;
                    };
                    vote(value: _89.MsgVote): {
                        typeUrl: string;
                        value: _89.MsgVote;
                    };
                    exec(value: _89.MsgExec): {
                        typeUrl: string;
                        value: _89.MsgExec;
                    };
                    leaveGroup(value: _89.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _89.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _89.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _89.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _89.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _89.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _89.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _89.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _89.MsgCreateGroup): {
                        typeUrl: string;
                        value: _89.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _89.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _89.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _89.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _89.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _89.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _89.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _89.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _89.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _89.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _89.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _89.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _89.MsgWithdrawProposal;
                    };
                    vote(value: _89.MsgVote): {
                        typeUrl: string;
                        value: _89.MsgVote;
                    };
                    exec(value: _89.MsgExec): {
                        typeUrl: string;
                        value: _89.MsgExec;
                    };
                    leaveGroup(value: _89.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _89.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _89.MsgCreateGroup) => _89.MsgCreateGroupAmino;
                    fromAmino: (object: _89.MsgCreateGroupAmino) => _89.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUpdateGroupMembers) => _89.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _89.MsgUpdateGroupMembersAmino) => _89.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUpdateGroupAdmin) => _89.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _89.MsgUpdateGroupAdminAmino) => _89.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUpdateGroupMetadata) => _89.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _89.MsgUpdateGroupMetadataAmino) => _89.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _89.MsgCreateGroupPolicy) => _89.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _89.MsgCreateGroupPolicyAmino) => _89.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _89.MsgCreateGroupWithPolicy) => _89.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _89.MsgCreateGroupWithPolicyAmino) => _89.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUpdateGroupPolicyAdmin) => _89.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _89.MsgUpdateGroupPolicyAdminAmino) => _89.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUpdateGroupPolicyDecisionPolicy) => _89.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _89.MsgUpdateGroupPolicyDecisionPolicyAmino) => _89.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUpdateGroupPolicyMetadata) => _89.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _89.MsgUpdateGroupPolicyMetadataAmino) => _89.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _89.MsgSubmitProposal) => _89.MsgSubmitProposalAmino;
                    fromAmino: (object: _89.MsgSubmitProposalAmino) => _89.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _89.MsgWithdrawProposal) => _89.MsgWithdrawProposalAmino;
                    fromAmino: (object: _89.MsgWithdrawProposalAmino) => _89.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _89.MsgVote) => _89.MsgVoteAmino;
                    fromAmino: (object: _89.MsgVoteAmino) => _89.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _89.MsgExec) => _89.MsgExecAmino;
                    fromAmino: (object: _89.MsgExecAmino) => _89.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _89.MsgLeaveGroup) => _89.MsgLeaveGroupAmino;
                    fromAmino: (object: _89.MsgLeaveGroupAmino) => _89.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _90.VoteOption;
            voteOptionToJSON(object: _90.VoteOption): string;
            proposalStatusFromJSON(object: any): _90.ProposalStatus;
            proposalStatusToJSON(object: _90.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _90.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _90.ProposalExecutorResult): string;
            VoteOption: typeof _90.VoteOption;
            VoteOptionSDKType: typeof _90.VoteOption;
            VoteOptionAmino: typeof _90.VoteOption;
            ProposalStatus: typeof _90.ProposalStatus;
            ProposalStatusSDKType: typeof _90.ProposalStatus;
            ProposalStatusAmino: typeof _90.ProposalStatus;
            ProposalExecutorResult: typeof _90.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _90.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _90.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _90.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.Member;
                fromPartial(object: Partial<_90.Member>): _90.Member;
                fromAmino(object: _90.MemberAmino): _90.Member;
                toAmino(message: _90.Member): _90.MemberAmino;
                fromAminoMsg(object: _90.MemberAminoMsg): _90.Member;
                toAminoMsg(message: _90.Member): _90.MemberAminoMsg;
                fromProtoMsg(message: _90.MemberProtoMsg): _90.Member;
                toProto(message: _90.Member): Uint8Array;
                toProtoMsg(message: _90.Member): _90.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _90.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MemberRequest;
                fromPartial(object: Partial<_90.MemberRequest>): _90.MemberRequest;
                fromAmino(object: _90.MemberRequestAmino): _90.MemberRequest;
                toAmino(message: _90.MemberRequest): _90.MemberRequestAmino;
                fromAminoMsg(object: _90.MemberRequestAminoMsg): _90.MemberRequest;
                toAminoMsg(message: _90.MemberRequest): _90.MemberRequestAminoMsg;
                fromProtoMsg(message: _90.MemberRequestProtoMsg): _90.MemberRequest;
                toProto(message: _90.MemberRequest): Uint8Array;
                toProtoMsg(message: _90.MemberRequest): _90.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _90.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_90.ThresholdDecisionPolicy>): _90.ThresholdDecisionPolicy;
                fromAmino(object: _90.ThresholdDecisionPolicyAmino): _90.ThresholdDecisionPolicy;
                toAmino(message: _90.ThresholdDecisionPolicy): _90.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _90.ThresholdDecisionPolicyAminoMsg): _90.ThresholdDecisionPolicy;
                toAminoMsg(message: _90.ThresholdDecisionPolicy): _90.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _90.ThresholdDecisionPolicyProtoMsg): _90.ThresholdDecisionPolicy;
                toProto(message: _90.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _90.ThresholdDecisionPolicy): _90.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _90.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.PercentageDecisionPolicy;
                fromPartial(object: Partial<_90.PercentageDecisionPolicy>): _90.PercentageDecisionPolicy;
                fromAmino(object: _90.PercentageDecisionPolicyAmino): _90.PercentageDecisionPolicy;
                toAmino(message: _90.PercentageDecisionPolicy): _90.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _90.PercentageDecisionPolicyAminoMsg): _90.PercentageDecisionPolicy;
                toAminoMsg(message: _90.PercentageDecisionPolicy): _90.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _90.PercentageDecisionPolicyProtoMsg): _90.PercentageDecisionPolicy;
                toProto(message: _90.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _90.PercentageDecisionPolicy): _90.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _90.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.DecisionPolicyWindows;
                fromPartial(object: Partial<_90.DecisionPolicyWindows>): _90.DecisionPolicyWindows;
                fromAmino(object: _90.DecisionPolicyWindowsAmino): _90.DecisionPolicyWindows;
                toAmino(message: _90.DecisionPolicyWindows): _90.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _90.DecisionPolicyWindowsAminoMsg): _90.DecisionPolicyWindows;
                toAminoMsg(message: _90.DecisionPolicyWindows): _90.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _90.DecisionPolicyWindowsProtoMsg): _90.DecisionPolicyWindows;
                toProto(message: _90.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _90.DecisionPolicyWindows): _90.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _90.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GroupInfo;
                fromPartial(object: Partial<_90.GroupInfo>): _90.GroupInfo;
                fromAmino(object: _90.GroupInfoAmino): _90.GroupInfo;
                toAmino(message: _90.GroupInfo): _90.GroupInfoAmino;
                fromAminoMsg(object: _90.GroupInfoAminoMsg): _90.GroupInfo;
                toAminoMsg(message: _90.GroupInfo): _90.GroupInfoAminoMsg;
                fromProtoMsg(message: _90.GroupInfoProtoMsg): _90.GroupInfo;
                toProto(message: _90.GroupInfo): Uint8Array;
                toProtoMsg(message: _90.GroupInfo): _90.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _90.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GroupMember;
                fromPartial(object: Partial<_90.GroupMember>): _90.GroupMember;
                fromAmino(object: _90.GroupMemberAmino): _90.GroupMember;
                toAmino(message: _90.GroupMember): _90.GroupMemberAmino;
                fromAminoMsg(object: _90.GroupMemberAminoMsg): _90.GroupMember;
                toAminoMsg(message: _90.GroupMember): _90.GroupMemberAminoMsg;
                fromProtoMsg(message: _90.GroupMemberProtoMsg): _90.GroupMember;
                toProto(message: _90.GroupMember): Uint8Array;
                toProtoMsg(message: _90.GroupMember): _90.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _90.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GroupPolicyInfo;
                fromPartial(object: Partial<_90.GroupPolicyInfo>): _90.GroupPolicyInfo;
                fromAmino(object: _90.GroupPolicyInfoAmino): _90.GroupPolicyInfo;
                toAmino(message: _90.GroupPolicyInfo): _90.GroupPolicyInfoAmino;
                fromAminoMsg(object: _90.GroupPolicyInfoAminoMsg): _90.GroupPolicyInfo;
                toAminoMsg(message: _90.GroupPolicyInfo): _90.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _90.GroupPolicyInfoProtoMsg): _90.GroupPolicyInfo;
                toProto(message: _90.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _90.GroupPolicyInfo): _90.GroupPolicyInfoProtoMsg;
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
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _89.Exec;
            execToJSON(object: _89.Exec): string;
            Exec: typeof _89.Exec;
            ExecSDKType: typeof _89.Exec;
            ExecAmino: typeof _89.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _89.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgCreateGroup;
                fromPartial(object: Partial<_89.MsgCreateGroup>): _89.MsgCreateGroup;
                fromAmino(object: _89.MsgCreateGroupAmino): _89.MsgCreateGroup;
                toAmino(message: _89.MsgCreateGroup): _89.MsgCreateGroupAmino;
                fromAminoMsg(object: _89.MsgCreateGroupAminoMsg): _89.MsgCreateGroup;
                toAminoMsg(message: _89.MsgCreateGroup): _89.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _89.MsgCreateGroupProtoMsg): _89.MsgCreateGroup;
                toProto(message: _89.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _89.MsgCreateGroup): _89.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _89.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgCreateGroupResponse;
                fromPartial(object: Partial<_89.MsgCreateGroupResponse>): _89.MsgCreateGroupResponse;
                fromAmino(object: _89.MsgCreateGroupResponseAmino): _89.MsgCreateGroupResponse;
                toAmino(message: _89.MsgCreateGroupResponse): _89.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _89.MsgCreateGroupResponseAminoMsg): _89.MsgCreateGroupResponse;
                toAminoMsg(message: _89.MsgCreateGroupResponse): _89.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _89.MsgCreateGroupResponseProtoMsg): _89.MsgCreateGroupResponse;
                toProto(message: _89.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _89.MsgCreateGroupResponse): _89.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _89.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_89.MsgUpdateGroupMembers>): _89.MsgUpdateGroupMembers;
                fromAmino(object: _89.MsgUpdateGroupMembersAmino): _89.MsgUpdateGroupMembers;
                toAmino(message: _89.MsgUpdateGroupMembers): _89.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupMembersAminoMsg): _89.MsgUpdateGroupMembers;
                toAminoMsg(message: _89.MsgUpdateGroupMembers): _89.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupMembersProtoMsg): _89.MsgUpdateGroupMembers;
                toProto(message: _89.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupMembers): _89.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _89.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupMembersResponse>): _89.MsgUpdateGroupMembersResponse;
                fromAmino(_: _89.MsgUpdateGroupMembersResponseAmino): _89.MsgUpdateGroupMembersResponse;
                toAmino(_: _89.MsgUpdateGroupMembersResponse): _89.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupMembersResponseAminoMsg): _89.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _89.MsgUpdateGroupMembersResponse): _89.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupMembersResponseProtoMsg): _89.MsgUpdateGroupMembersResponse;
                toProto(message: _89.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupMembersResponse): _89.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _89.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_89.MsgUpdateGroupAdmin>): _89.MsgUpdateGroupAdmin;
                fromAmino(object: _89.MsgUpdateGroupAdminAmino): _89.MsgUpdateGroupAdmin;
                toAmino(message: _89.MsgUpdateGroupAdmin): _89.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupAdminAminoMsg): _89.MsgUpdateGroupAdmin;
                toAminoMsg(message: _89.MsgUpdateGroupAdmin): _89.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupAdminProtoMsg): _89.MsgUpdateGroupAdmin;
                toProto(message: _89.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupAdmin): _89.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _89.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupAdminResponse>): _89.MsgUpdateGroupAdminResponse;
                fromAmino(_: _89.MsgUpdateGroupAdminResponseAmino): _89.MsgUpdateGroupAdminResponse;
                toAmino(_: _89.MsgUpdateGroupAdminResponse): _89.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupAdminResponseAminoMsg): _89.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _89.MsgUpdateGroupAdminResponse): _89.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupAdminResponseProtoMsg): _89.MsgUpdateGroupAdminResponse;
                toProto(message: _89.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupAdminResponse): _89.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _89.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_89.MsgUpdateGroupMetadata>): _89.MsgUpdateGroupMetadata;
                fromAmino(object: _89.MsgUpdateGroupMetadataAmino): _89.MsgUpdateGroupMetadata;
                toAmino(message: _89.MsgUpdateGroupMetadata): _89.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupMetadataAminoMsg): _89.MsgUpdateGroupMetadata;
                toAminoMsg(message: _89.MsgUpdateGroupMetadata): _89.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupMetadataProtoMsg): _89.MsgUpdateGroupMetadata;
                toProto(message: _89.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupMetadata): _89.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _89.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupMetadataResponse>): _89.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _89.MsgUpdateGroupMetadataResponseAmino): _89.MsgUpdateGroupMetadataResponse;
                toAmino(_: _89.MsgUpdateGroupMetadataResponse): _89.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupMetadataResponseAminoMsg): _89.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _89.MsgUpdateGroupMetadataResponse): _89.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupMetadataResponseProtoMsg): _89.MsgUpdateGroupMetadataResponse;
                toProto(message: _89.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupMetadataResponse): _89.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _89.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_89.MsgCreateGroupPolicy>): _89.MsgCreateGroupPolicy;
                fromAmino(object: _89.MsgCreateGroupPolicyAmino): _89.MsgCreateGroupPolicy;
                toAmino(message: _89.MsgCreateGroupPolicy): _89.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _89.MsgCreateGroupPolicyAminoMsg): _89.MsgCreateGroupPolicy;
                toAminoMsg(message: _89.MsgCreateGroupPolicy): _89.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _89.MsgCreateGroupPolicyProtoMsg): _89.MsgCreateGroupPolicy;
                toProto(message: _89.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _89.MsgCreateGroupPolicy): _89.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _89.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_89.MsgCreateGroupPolicyResponse>): _89.MsgCreateGroupPolicyResponse;
                fromAmino(object: _89.MsgCreateGroupPolicyResponseAmino): _89.MsgCreateGroupPolicyResponse;
                toAmino(message: _89.MsgCreateGroupPolicyResponse): _89.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _89.MsgCreateGroupPolicyResponseAminoMsg): _89.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _89.MsgCreateGroupPolicyResponse): _89.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _89.MsgCreateGroupPolicyResponseProtoMsg): _89.MsgCreateGroupPolicyResponse;
                toProto(message: _89.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _89.MsgCreateGroupPolicyResponse): _89.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _89.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_89.MsgUpdateGroupPolicyAdmin>): _89.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _89.MsgUpdateGroupPolicyAdminAmino): _89.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _89.MsgUpdateGroupPolicyAdmin): _89.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupPolicyAdminAminoMsg): _89.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _89.MsgUpdateGroupPolicyAdmin): _89.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupPolicyAdminProtoMsg): _89.MsgUpdateGroupPolicyAdmin;
                toProto(message: _89.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupPolicyAdmin): _89.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _89.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_89.MsgCreateGroupWithPolicy>): _89.MsgCreateGroupWithPolicy;
                fromAmino(object: _89.MsgCreateGroupWithPolicyAmino): _89.MsgCreateGroupWithPolicy;
                toAmino(message: _89.MsgCreateGroupWithPolicy): _89.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _89.MsgCreateGroupWithPolicyAminoMsg): _89.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _89.MsgCreateGroupWithPolicy): _89.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _89.MsgCreateGroupWithPolicyProtoMsg): _89.MsgCreateGroupWithPolicy;
                toProto(message: _89.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _89.MsgCreateGroupWithPolicy): _89.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _89.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_89.MsgCreateGroupWithPolicyResponse>): _89.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _89.MsgCreateGroupWithPolicyResponseAmino): _89.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _89.MsgCreateGroupWithPolicyResponse): _89.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _89.MsgCreateGroupWithPolicyResponseAminoMsg): _89.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _89.MsgCreateGroupWithPolicyResponse): _89.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _89.MsgCreateGroupWithPolicyResponseProtoMsg): _89.MsgCreateGroupWithPolicyResponse;
                toProto(message: _89.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _89.MsgCreateGroupWithPolicyResponse): _89.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _89.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupPolicyAdminResponse>): _89.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _89.MsgUpdateGroupPolicyAdminResponseAmino): _89.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _89.MsgUpdateGroupPolicyAdminResponse): _89.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupPolicyAdminResponseAminoMsg): _89.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _89.MsgUpdateGroupPolicyAdminResponse): _89.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupPolicyAdminResponseProtoMsg): _89.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _89.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupPolicyAdminResponse): _89.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _89.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_89.MsgUpdateGroupPolicyDecisionPolicy>): _89.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _89.MsgUpdateGroupPolicyDecisionPolicyAmino): _89.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _89.MsgUpdateGroupPolicyDecisionPolicy): _89.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _89.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _89.MsgUpdateGroupPolicyDecisionPolicy): _89.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _89.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _89.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupPolicyDecisionPolicy): _89.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _89.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupPolicyDecisionPolicyResponse>): _89.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _89.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _89.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _89.MsgUpdateGroupPolicyDecisionPolicyResponse): _89.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _89.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _89.MsgUpdateGroupPolicyDecisionPolicyResponse): _89.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _89.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _89.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupPolicyDecisionPolicyResponse): _89.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _89.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_89.MsgUpdateGroupPolicyMetadata>): _89.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _89.MsgUpdateGroupPolicyMetadataAmino): _89.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _89.MsgUpdateGroupPolicyMetadata): _89.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupPolicyMetadataAminoMsg): _89.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _89.MsgUpdateGroupPolicyMetadata): _89.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupPolicyMetadataProtoMsg): _89.MsgUpdateGroupPolicyMetadata;
                toProto(message: _89.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupPolicyMetadata): _89.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _89.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupPolicyMetadataResponse>): _89.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _89.MsgUpdateGroupPolicyMetadataResponseAmino): _89.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _89.MsgUpdateGroupPolicyMetadataResponse): _89.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _89.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _89.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _89.MsgUpdateGroupPolicyMetadataResponse): _89.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _89.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _89.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateGroupPolicyMetadataResponse): _89.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _89.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgSubmitProposal;
                fromPartial(object: Partial<_89.MsgSubmitProposal>): _89.MsgSubmitProposal;
                fromAmino(object: _89.MsgSubmitProposalAmino): _89.MsgSubmitProposal;
                toAmino(message: _89.MsgSubmitProposal): _89.MsgSubmitProposalAmino;
                fromAminoMsg(object: _89.MsgSubmitProposalAminoMsg): _89.MsgSubmitProposal;
                toAminoMsg(message: _89.MsgSubmitProposal): _89.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _89.MsgSubmitProposalProtoMsg): _89.MsgSubmitProposal;
                toProto(message: _89.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _89.MsgSubmitProposal): _89.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _89.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_89.MsgSubmitProposalResponse>): _89.MsgSubmitProposalResponse;
                fromAmino(object: _89.MsgSubmitProposalResponseAmino): _89.MsgSubmitProposalResponse;
                toAmino(message: _89.MsgSubmitProposalResponse): _89.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _89.MsgSubmitProposalResponseAminoMsg): _89.MsgSubmitProposalResponse;
                toAminoMsg(message: _89.MsgSubmitProposalResponse): _89.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _89.MsgSubmitProposalResponseProtoMsg): _89.MsgSubmitProposalResponse;
                toProto(message: _89.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _89.MsgSubmitProposalResponse): _89.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _89.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgWithdrawProposal;
                fromPartial(object: Partial<_89.MsgWithdrawProposal>): _89.MsgWithdrawProposal;
                fromAmino(object: _89.MsgWithdrawProposalAmino): _89.MsgWithdrawProposal;
                toAmino(message: _89.MsgWithdrawProposal): _89.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _89.MsgWithdrawProposalAminoMsg): _89.MsgWithdrawProposal;
                toAminoMsg(message: _89.MsgWithdrawProposal): _89.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _89.MsgWithdrawProposalProtoMsg): _89.MsgWithdrawProposal;
                toProto(message: _89.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _89.MsgWithdrawProposal): _89.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _89.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_89.MsgWithdrawProposalResponse>): _89.MsgWithdrawProposalResponse;
                fromAmino(_: _89.MsgWithdrawProposalResponseAmino): _89.MsgWithdrawProposalResponse;
                toAmino(_: _89.MsgWithdrawProposalResponse): _89.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _89.MsgWithdrawProposalResponseAminoMsg): _89.MsgWithdrawProposalResponse;
                toAminoMsg(message: _89.MsgWithdrawProposalResponse): _89.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _89.MsgWithdrawProposalResponseProtoMsg): _89.MsgWithdrawProposalResponse;
                toProto(message: _89.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _89.MsgWithdrawProposalResponse): _89.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _89.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgVote;
                fromPartial(object: Partial<_89.MsgVote>): _89.MsgVote;
                fromAmino(object: _89.MsgVoteAmino): _89.MsgVote;
                toAmino(message: _89.MsgVote): _89.MsgVoteAmino;
                fromAminoMsg(object: _89.MsgVoteAminoMsg): _89.MsgVote;
                toAminoMsg(message: _89.MsgVote): _89.MsgVoteAminoMsg;
                fromProtoMsg(message: _89.MsgVoteProtoMsg): _89.MsgVote;
                toProto(message: _89.MsgVote): Uint8Array;
                toProtoMsg(message: _89.MsgVote): _89.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _89.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgVoteResponse;
                fromPartial(_: Partial<_89.MsgVoteResponse>): _89.MsgVoteResponse;
                fromAmino(_: _89.MsgVoteResponseAmino): _89.MsgVoteResponse;
                toAmino(_: _89.MsgVoteResponse): _89.MsgVoteResponseAmino;
                fromAminoMsg(object: _89.MsgVoteResponseAminoMsg): _89.MsgVoteResponse;
                toAminoMsg(message: _89.MsgVoteResponse): _89.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _89.MsgVoteResponseProtoMsg): _89.MsgVoteResponse;
                toProto(message: _89.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _89.MsgVoteResponse): _89.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _89.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgExec;
                fromPartial(object: Partial<_89.MsgExec>): _89.MsgExec;
                fromAmino(object: _89.MsgExecAmino): _89.MsgExec;
                toAmino(message: _89.MsgExec): _89.MsgExecAmino;
                fromAminoMsg(object: _89.MsgExecAminoMsg): _89.MsgExec;
                toAminoMsg(message: _89.MsgExec): _89.MsgExecAminoMsg;
                fromProtoMsg(message: _89.MsgExecProtoMsg): _89.MsgExec;
                toProto(message: _89.MsgExec): Uint8Array;
                toProtoMsg(message: _89.MsgExec): _89.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _89.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgExecResponse;
                fromPartial(object: Partial<_89.MsgExecResponse>): _89.MsgExecResponse;
                fromAmino(object: _89.MsgExecResponseAmino): _89.MsgExecResponse;
                toAmino(message: _89.MsgExecResponse): _89.MsgExecResponseAmino;
                fromAminoMsg(object: _89.MsgExecResponseAminoMsg): _89.MsgExecResponse;
                toAminoMsg(message: _89.MsgExecResponse): _89.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _89.MsgExecResponseProtoMsg): _89.MsgExecResponse;
                toProto(message: _89.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _89.MsgExecResponse): _89.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _89.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgLeaveGroup;
                fromPartial(object: Partial<_89.MsgLeaveGroup>): _89.MsgLeaveGroup;
                fromAmino(object: _89.MsgLeaveGroupAmino): _89.MsgLeaveGroup;
                toAmino(message: _89.MsgLeaveGroup): _89.MsgLeaveGroupAmino;
                fromAminoMsg(object: _89.MsgLeaveGroupAminoMsg): _89.MsgLeaveGroup;
                toAminoMsg(message: _89.MsgLeaveGroup): _89.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _89.MsgLeaveGroupProtoMsg): _89.MsgLeaveGroup;
                toProto(message: _89.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _89.MsgLeaveGroup): _89.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _89.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_89.MsgLeaveGroupResponse>): _89.MsgLeaveGroupResponse;
                fromAmino(_: _89.MsgLeaveGroupResponseAmino): _89.MsgLeaveGroupResponse;
                toAmino(_: _89.MsgLeaveGroupResponse): _89.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _89.MsgLeaveGroupResponseAminoMsg): _89.MsgLeaveGroupResponse;
                toAminoMsg(message: _89.MsgLeaveGroupResponse): _89.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _89.MsgLeaveGroupResponseProtoMsg): _89.MsgLeaveGroupResponse;
                toProto(message: _89.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _89.MsgLeaveGroupResponse): _89.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _88.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupInfoRequest;
                fromPartial(object: Partial<_88.QueryGroupInfoRequest>): _88.QueryGroupInfoRequest;
                fromAmino(object: _88.QueryGroupInfoRequestAmino): _88.QueryGroupInfoRequest;
                toAmino(message: _88.QueryGroupInfoRequest): _88.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _88.QueryGroupInfoRequestAminoMsg): _88.QueryGroupInfoRequest;
                toAminoMsg(message: _88.QueryGroupInfoRequest): _88.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _88.QueryGroupInfoRequestProtoMsg): _88.QueryGroupInfoRequest;
                toProto(message: _88.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _88.QueryGroupInfoRequest): _88.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _88.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupInfoResponse;
                fromPartial(object: Partial<_88.QueryGroupInfoResponse>): _88.QueryGroupInfoResponse;
                fromAmino(object: _88.QueryGroupInfoResponseAmino): _88.QueryGroupInfoResponse;
                toAmino(message: _88.QueryGroupInfoResponse): _88.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _88.QueryGroupInfoResponseAminoMsg): _88.QueryGroupInfoResponse;
                toAminoMsg(message: _88.QueryGroupInfoResponse): _88.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _88.QueryGroupInfoResponseProtoMsg): _88.QueryGroupInfoResponse;
                toProto(message: _88.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _88.QueryGroupInfoResponse): _88.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _88.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_88.QueryGroupPolicyInfoRequest>): _88.QueryGroupPolicyInfoRequest;
                fromAmino(object: _88.QueryGroupPolicyInfoRequestAmino): _88.QueryGroupPolicyInfoRequest;
                toAmino(message: _88.QueryGroupPolicyInfoRequest): _88.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _88.QueryGroupPolicyInfoRequestAminoMsg): _88.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _88.QueryGroupPolicyInfoRequest): _88.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _88.QueryGroupPolicyInfoRequestProtoMsg): _88.QueryGroupPolicyInfoRequest;
                toProto(message: _88.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _88.QueryGroupPolicyInfoRequest): _88.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _88.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_88.QueryGroupPolicyInfoResponse>): _88.QueryGroupPolicyInfoResponse;
                fromAmino(object: _88.QueryGroupPolicyInfoResponseAmino): _88.QueryGroupPolicyInfoResponse;
                toAmino(message: _88.QueryGroupPolicyInfoResponse): _88.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _88.QueryGroupPolicyInfoResponseAminoMsg): _88.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _88.QueryGroupPolicyInfoResponse): _88.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _88.QueryGroupPolicyInfoResponseProtoMsg): _88.QueryGroupPolicyInfoResponse;
                toProto(message: _88.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _88.QueryGroupPolicyInfoResponse): _88.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _88.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupMembersRequest;
                fromPartial(object: Partial<_88.QueryGroupMembersRequest>): _88.QueryGroupMembersRequest;
                fromAmino(object: _88.QueryGroupMembersRequestAmino): _88.QueryGroupMembersRequest;
                toAmino(message: _88.QueryGroupMembersRequest): _88.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _88.QueryGroupMembersRequestAminoMsg): _88.QueryGroupMembersRequest;
                toAminoMsg(message: _88.QueryGroupMembersRequest): _88.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _88.QueryGroupMembersRequestProtoMsg): _88.QueryGroupMembersRequest;
                toProto(message: _88.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _88.QueryGroupMembersRequest): _88.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _88.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupMembersResponse;
                fromPartial(object: Partial<_88.QueryGroupMembersResponse>): _88.QueryGroupMembersResponse;
                fromAmino(object: _88.QueryGroupMembersResponseAmino): _88.QueryGroupMembersResponse;
                toAmino(message: _88.QueryGroupMembersResponse): _88.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _88.QueryGroupMembersResponseAminoMsg): _88.QueryGroupMembersResponse;
                toAminoMsg(message: _88.QueryGroupMembersResponse): _88.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _88.QueryGroupMembersResponseProtoMsg): _88.QueryGroupMembersResponse;
                toProto(message: _88.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _88.QueryGroupMembersResponse): _88.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _88.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_88.QueryGroupsByAdminRequest>): _88.QueryGroupsByAdminRequest;
                fromAmino(object: _88.QueryGroupsByAdminRequestAmino): _88.QueryGroupsByAdminRequest;
                toAmino(message: _88.QueryGroupsByAdminRequest): _88.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _88.QueryGroupsByAdminRequestAminoMsg): _88.QueryGroupsByAdminRequest;
                toAminoMsg(message: _88.QueryGroupsByAdminRequest): _88.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _88.QueryGroupsByAdminRequestProtoMsg): _88.QueryGroupsByAdminRequest;
                toProto(message: _88.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _88.QueryGroupsByAdminRequest): _88.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _88.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_88.QueryGroupsByAdminResponse>): _88.QueryGroupsByAdminResponse;
                fromAmino(object: _88.QueryGroupsByAdminResponseAmino): _88.QueryGroupsByAdminResponse;
                toAmino(message: _88.QueryGroupsByAdminResponse): _88.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _88.QueryGroupsByAdminResponseAminoMsg): _88.QueryGroupsByAdminResponse;
                toAminoMsg(message: _88.QueryGroupsByAdminResponse): _88.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _88.QueryGroupsByAdminResponseProtoMsg): _88.QueryGroupsByAdminResponse;
                toProto(message: _88.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _88.QueryGroupsByAdminResponse): _88.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _88.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_88.QueryGroupPoliciesByGroupRequest>): _88.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _88.QueryGroupPoliciesByGroupRequestAmino): _88.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _88.QueryGroupPoliciesByGroupRequest): _88.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _88.QueryGroupPoliciesByGroupRequestAminoMsg): _88.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _88.QueryGroupPoliciesByGroupRequest): _88.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _88.QueryGroupPoliciesByGroupRequestProtoMsg): _88.QueryGroupPoliciesByGroupRequest;
                toProto(message: _88.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _88.QueryGroupPoliciesByGroupRequest): _88.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _88.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_88.QueryGroupPoliciesByGroupResponse>): _88.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _88.QueryGroupPoliciesByGroupResponseAmino): _88.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _88.QueryGroupPoliciesByGroupResponse): _88.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _88.QueryGroupPoliciesByGroupResponseAminoMsg): _88.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _88.QueryGroupPoliciesByGroupResponse): _88.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _88.QueryGroupPoliciesByGroupResponseProtoMsg): _88.QueryGroupPoliciesByGroupResponse;
                toProto(message: _88.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _88.QueryGroupPoliciesByGroupResponse): _88.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _88.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_88.QueryGroupPoliciesByAdminRequest>): _88.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _88.QueryGroupPoliciesByAdminRequestAmino): _88.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _88.QueryGroupPoliciesByAdminRequest): _88.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _88.QueryGroupPoliciesByAdminRequestAminoMsg): _88.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _88.QueryGroupPoliciesByAdminRequest): _88.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _88.QueryGroupPoliciesByAdminRequestProtoMsg): _88.QueryGroupPoliciesByAdminRequest;
                toProto(message: _88.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _88.QueryGroupPoliciesByAdminRequest): _88.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _88.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_88.QueryGroupPoliciesByAdminResponse>): _88.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _88.QueryGroupPoliciesByAdminResponseAmino): _88.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _88.QueryGroupPoliciesByAdminResponse): _88.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _88.QueryGroupPoliciesByAdminResponseAminoMsg): _88.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _88.QueryGroupPoliciesByAdminResponse): _88.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _88.QueryGroupPoliciesByAdminResponseProtoMsg): _88.QueryGroupPoliciesByAdminResponse;
                toProto(message: _88.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _88.QueryGroupPoliciesByAdminResponse): _88.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _88.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryProposalRequest;
                fromPartial(object: Partial<_88.QueryProposalRequest>): _88.QueryProposalRequest;
                fromAmino(object: _88.QueryProposalRequestAmino): _88.QueryProposalRequest;
                toAmino(message: _88.QueryProposalRequest): _88.QueryProposalRequestAmino;
                fromAminoMsg(object: _88.QueryProposalRequestAminoMsg): _88.QueryProposalRequest;
                toAminoMsg(message: _88.QueryProposalRequest): _88.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _88.QueryProposalRequestProtoMsg): _88.QueryProposalRequest;
                toProto(message: _88.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _88.QueryProposalRequest): _88.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _88.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryProposalResponse;
                fromPartial(object: Partial<_88.QueryProposalResponse>): _88.QueryProposalResponse;
                fromAmino(object: _88.QueryProposalResponseAmino): _88.QueryProposalResponse;
                toAmino(message: _88.QueryProposalResponse): _88.QueryProposalResponseAmino;
                fromAminoMsg(object: _88.QueryProposalResponseAminoMsg): _88.QueryProposalResponse;
                toAminoMsg(message: _88.QueryProposalResponse): _88.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _88.QueryProposalResponseProtoMsg): _88.QueryProposalResponse;
                toProto(message: _88.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _88.QueryProposalResponse): _88.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _88.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_88.QueryProposalsByGroupPolicyRequest>): _88.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _88.QueryProposalsByGroupPolicyRequestAmino): _88.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _88.QueryProposalsByGroupPolicyRequest): _88.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _88.QueryProposalsByGroupPolicyRequestAminoMsg): _88.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _88.QueryProposalsByGroupPolicyRequest): _88.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _88.QueryProposalsByGroupPolicyRequestProtoMsg): _88.QueryProposalsByGroupPolicyRequest;
                toProto(message: _88.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _88.QueryProposalsByGroupPolicyRequest): _88.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _88.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_88.QueryProposalsByGroupPolicyResponse>): _88.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _88.QueryProposalsByGroupPolicyResponseAmino): _88.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _88.QueryProposalsByGroupPolicyResponse): _88.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _88.QueryProposalsByGroupPolicyResponseAminoMsg): _88.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _88.QueryProposalsByGroupPolicyResponse): _88.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _88.QueryProposalsByGroupPolicyResponseProtoMsg): _88.QueryProposalsByGroupPolicyResponse;
                toProto(message: _88.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _88.QueryProposalsByGroupPolicyResponse): _88.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _88.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_88.QueryVoteByProposalVoterRequest>): _88.QueryVoteByProposalVoterRequest;
                fromAmino(object: _88.QueryVoteByProposalVoterRequestAmino): _88.QueryVoteByProposalVoterRequest;
                toAmino(message: _88.QueryVoteByProposalVoterRequest): _88.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _88.QueryVoteByProposalVoterRequestAminoMsg): _88.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _88.QueryVoteByProposalVoterRequest): _88.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _88.QueryVoteByProposalVoterRequestProtoMsg): _88.QueryVoteByProposalVoterRequest;
                toProto(message: _88.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _88.QueryVoteByProposalVoterRequest): _88.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _88.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_88.QueryVoteByProposalVoterResponse>): _88.QueryVoteByProposalVoterResponse;
                fromAmino(object: _88.QueryVoteByProposalVoterResponseAmino): _88.QueryVoteByProposalVoterResponse;
                toAmino(message: _88.QueryVoteByProposalVoterResponse): _88.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _88.QueryVoteByProposalVoterResponseAminoMsg): _88.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _88.QueryVoteByProposalVoterResponse): _88.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _88.QueryVoteByProposalVoterResponseProtoMsg): _88.QueryVoteByProposalVoterResponse;
                toProto(message: _88.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _88.QueryVoteByProposalVoterResponse): _88.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _88.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_88.QueryVotesByProposalRequest>): _88.QueryVotesByProposalRequest;
                fromAmino(object: _88.QueryVotesByProposalRequestAmino): _88.QueryVotesByProposalRequest;
                toAmino(message: _88.QueryVotesByProposalRequest): _88.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _88.QueryVotesByProposalRequestAminoMsg): _88.QueryVotesByProposalRequest;
                toAminoMsg(message: _88.QueryVotesByProposalRequest): _88.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _88.QueryVotesByProposalRequestProtoMsg): _88.QueryVotesByProposalRequest;
                toProto(message: _88.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _88.QueryVotesByProposalRequest): _88.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _88.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_88.QueryVotesByProposalResponse>): _88.QueryVotesByProposalResponse;
                fromAmino(object: _88.QueryVotesByProposalResponseAmino): _88.QueryVotesByProposalResponse;
                toAmino(message: _88.QueryVotesByProposalResponse): _88.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _88.QueryVotesByProposalResponseAminoMsg): _88.QueryVotesByProposalResponse;
                toAminoMsg(message: _88.QueryVotesByProposalResponse): _88.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _88.QueryVotesByProposalResponseProtoMsg): _88.QueryVotesByProposalResponse;
                toProto(message: _88.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _88.QueryVotesByProposalResponse): _88.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _88.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_88.QueryVotesByVoterRequest>): _88.QueryVotesByVoterRequest;
                fromAmino(object: _88.QueryVotesByVoterRequestAmino): _88.QueryVotesByVoterRequest;
                toAmino(message: _88.QueryVotesByVoterRequest): _88.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _88.QueryVotesByVoterRequestAminoMsg): _88.QueryVotesByVoterRequest;
                toAminoMsg(message: _88.QueryVotesByVoterRequest): _88.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _88.QueryVotesByVoterRequestProtoMsg): _88.QueryVotesByVoterRequest;
                toProto(message: _88.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _88.QueryVotesByVoterRequest): _88.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _88.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_88.QueryVotesByVoterResponse>): _88.QueryVotesByVoterResponse;
                fromAmino(object: _88.QueryVotesByVoterResponseAmino): _88.QueryVotesByVoterResponse;
                toAmino(message: _88.QueryVotesByVoterResponse): _88.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _88.QueryVotesByVoterResponseAminoMsg): _88.QueryVotesByVoterResponse;
                toAminoMsg(message: _88.QueryVotesByVoterResponse): _88.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _88.QueryVotesByVoterResponseProtoMsg): _88.QueryVotesByVoterResponse;
                toProto(message: _88.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _88.QueryVotesByVoterResponse): _88.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _88.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_88.QueryGroupsByMemberRequest>): _88.QueryGroupsByMemberRequest;
                fromAmino(object: _88.QueryGroupsByMemberRequestAmino): _88.QueryGroupsByMemberRequest;
                toAmino(message: _88.QueryGroupsByMemberRequest): _88.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _88.QueryGroupsByMemberRequestAminoMsg): _88.QueryGroupsByMemberRequest;
                toAminoMsg(message: _88.QueryGroupsByMemberRequest): _88.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _88.QueryGroupsByMemberRequestProtoMsg): _88.QueryGroupsByMemberRequest;
                toProto(message: _88.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _88.QueryGroupsByMemberRequest): _88.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _88.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_88.QueryGroupsByMemberResponse>): _88.QueryGroupsByMemberResponse;
                fromAmino(object: _88.QueryGroupsByMemberResponseAmino): _88.QueryGroupsByMemberResponse;
                toAmino(message: _88.QueryGroupsByMemberResponse): _88.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _88.QueryGroupsByMemberResponseAminoMsg): _88.QueryGroupsByMemberResponse;
                toAminoMsg(message: _88.QueryGroupsByMemberResponse): _88.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _88.QueryGroupsByMemberResponseProtoMsg): _88.QueryGroupsByMemberResponse;
                toProto(message: _88.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _88.QueryGroupsByMemberResponse): _88.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _88.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryTallyResultRequest;
                fromPartial(object: Partial<_88.QueryTallyResultRequest>): _88.QueryTallyResultRequest;
                fromAmino(object: _88.QueryTallyResultRequestAmino): _88.QueryTallyResultRequest;
                toAmino(message: _88.QueryTallyResultRequest): _88.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _88.QueryTallyResultRequestAminoMsg): _88.QueryTallyResultRequest;
                toAminoMsg(message: _88.QueryTallyResultRequest): _88.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _88.QueryTallyResultRequestProtoMsg): _88.QueryTallyResultRequest;
                toProto(message: _88.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _88.QueryTallyResultRequest): _88.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _88.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryTallyResultResponse;
                fromPartial(object: Partial<_88.QueryTallyResultResponse>): _88.QueryTallyResultResponse;
                fromAmino(object: _88.QueryTallyResultResponseAmino): _88.QueryTallyResultResponse;
                toAmino(message: _88.QueryTallyResultResponse): _88.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _88.QueryTallyResultResponseAminoMsg): _88.QueryTallyResultResponse;
                toAminoMsg(message: _88.QueryTallyResultResponse): _88.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _88.QueryTallyResultResponseProtoMsg): _88.QueryTallyResultResponse;
                toProto(message: _88.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _88.QueryTallyResultResponse): _88.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _88.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupsRequest;
                fromPartial(object: Partial<_88.QueryGroupsRequest>): _88.QueryGroupsRequest;
                fromAmino(object: _88.QueryGroupsRequestAmino): _88.QueryGroupsRequest;
                toAmino(message: _88.QueryGroupsRequest): _88.QueryGroupsRequestAmino;
                fromAminoMsg(object: _88.QueryGroupsRequestAminoMsg): _88.QueryGroupsRequest;
                toAminoMsg(message: _88.QueryGroupsRequest): _88.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryGroupsRequestProtoMsg): _88.QueryGroupsRequest;
                toProto(message: _88.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryGroupsRequest): _88.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _88.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryGroupsResponse;
                fromPartial(object: Partial<_88.QueryGroupsResponse>): _88.QueryGroupsResponse;
                fromAmino(object: _88.QueryGroupsResponseAmino): _88.QueryGroupsResponse;
                toAmino(message: _88.QueryGroupsResponse): _88.QueryGroupsResponseAmino;
                fromAminoMsg(object: _88.QueryGroupsResponseAminoMsg): _88.QueryGroupsResponse;
                toAminoMsg(message: _88.QueryGroupsResponse): _88.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryGroupsResponseProtoMsg): _88.QueryGroupsResponse;
                toProto(message: _88.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryGroupsResponse): _88.QueryGroupsResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _86.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventCreateGroup;
                fromPartial(object: Partial<_86.EventCreateGroup>): _86.EventCreateGroup;
                fromAmino(object: _86.EventCreateGroupAmino): _86.EventCreateGroup;
                toAmino(message: _86.EventCreateGroup): _86.EventCreateGroupAmino;
                fromAminoMsg(object: _86.EventCreateGroupAminoMsg): _86.EventCreateGroup;
                toAminoMsg(message: _86.EventCreateGroup): _86.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _86.EventCreateGroupProtoMsg): _86.EventCreateGroup;
                toProto(message: _86.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _86.EventCreateGroup): _86.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _86.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventUpdateGroup;
                fromPartial(object: Partial<_86.EventUpdateGroup>): _86.EventUpdateGroup;
                fromAmino(object: _86.EventUpdateGroupAmino): _86.EventUpdateGroup;
                toAmino(message: _86.EventUpdateGroup): _86.EventUpdateGroupAmino;
                fromAminoMsg(object: _86.EventUpdateGroupAminoMsg): _86.EventUpdateGroup;
                toAminoMsg(message: _86.EventUpdateGroup): _86.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _86.EventUpdateGroupProtoMsg): _86.EventUpdateGroup;
                toProto(message: _86.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _86.EventUpdateGroup): _86.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _86.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventCreateGroupPolicy;
                fromPartial(object: Partial<_86.EventCreateGroupPolicy>): _86.EventCreateGroupPolicy;
                fromAmino(object: _86.EventCreateGroupPolicyAmino): _86.EventCreateGroupPolicy;
                toAmino(message: _86.EventCreateGroupPolicy): _86.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _86.EventCreateGroupPolicyAminoMsg): _86.EventCreateGroupPolicy;
                toAminoMsg(message: _86.EventCreateGroupPolicy): _86.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _86.EventCreateGroupPolicyProtoMsg): _86.EventCreateGroupPolicy;
                toProto(message: _86.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _86.EventCreateGroupPolicy): _86.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _86.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_86.EventUpdateGroupPolicy>): _86.EventUpdateGroupPolicy;
                fromAmino(object: _86.EventUpdateGroupPolicyAmino): _86.EventUpdateGroupPolicy;
                toAmino(message: _86.EventUpdateGroupPolicy): _86.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _86.EventUpdateGroupPolicyAminoMsg): _86.EventUpdateGroupPolicy;
                toAminoMsg(message: _86.EventUpdateGroupPolicy): _86.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _86.EventUpdateGroupPolicyProtoMsg): _86.EventUpdateGroupPolicy;
                toProto(message: _86.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _86.EventUpdateGroupPolicy): _86.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _86.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventSubmitProposal;
                fromPartial(object: Partial<_86.EventSubmitProposal>): _86.EventSubmitProposal;
                fromAmino(object: _86.EventSubmitProposalAmino): _86.EventSubmitProposal;
                toAmino(message: _86.EventSubmitProposal): _86.EventSubmitProposalAmino;
                fromAminoMsg(object: _86.EventSubmitProposalAminoMsg): _86.EventSubmitProposal;
                toAminoMsg(message: _86.EventSubmitProposal): _86.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _86.EventSubmitProposalProtoMsg): _86.EventSubmitProposal;
                toProto(message: _86.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _86.EventSubmitProposal): _86.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _86.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventWithdrawProposal;
                fromPartial(object: Partial<_86.EventWithdrawProposal>): _86.EventWithdrawProposal;
                fromAmino(object: _86.EventWithdrawProposalAmino): _86.EventWithdrawProposal;
                toAmino(message: _86.EventWithdrawProposal): _86.EventWithdrawProposalAmino;
                fromAminoMsg(object: _86.EventWithdrawProposalAminoMsg): _86.EventWithdrawProposal;
                toAminoMsg(message: _86.EventWithdrawProposal): _86.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _86.EventWithdrawProposalProtoMsg): _86.EventWithdrawProposal;
                toProto(message: _86.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _86.EventWithdrawProposal): _86.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _86.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventVote;
                fromPartial(object: Partial<_86.EventVote>): _86.EventVote;
                fromAmino(object: _86.EventVoteAmino): _86.EventVote;
                toAmino(message: _86.EventVote): _86.EventVoteAmino;
                fromAminoMsg(object: _86.EventVoteAminoMsg): _86.EventVote;
                toAminoMsg(message: _86.EventVote): _86.EventVoteAminoMsg;
                fromProtoMsg(message: _86.EventVoteProtoMsg): _86.EventVote;
                toProto(message: _86.EventVote): Uint8Array;
                toProtoMsg(message: _86.EventVote): _86.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _86.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventExec;
                fromPartial(object: Partial<_86.EventExec>): _86.EventExec;
                fromAmino(object: _86.EventExecAmino): _86.EventExec;
                toAmino(message: _86.EventExec): _86.EventExecAmino;
                fromAminoMsg(object: _86.EventExecAminoMsg): _86.EventExec;
                toAminoMsg(message: _86.EventExec): _86.EventExecAminoMsg;
                fromProtoMsg(message: _86.EventExecProtoMsg): _86.EventExec;
                toProto(message: _86.EventExec): Uint8Array;
                toProtoMsg(message: _86.EventExec): _86.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _86.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventLeaveGroup;
                fromPartial(object: Partial<_86.EventLeaveGroup>): _86.EventLeaveGroup;
                fromAmino(object: _86.EventLeaveGroupAmino): _86.EventLeaveGroup;
                toAmino(message: _86.EventLeaveGroup): _86.EventLeaveGroupAmino;
                fromAminoMsg(object: _86.EventLeaveGroupAminoMsg): _86.EventLeaveGroup;
                toAminoMsg(message: _86.EventLeaveGroup): _86.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _86.EventLeaveGroupProtoMsg): _86.EventLeaveGroup;
                toProto(message: _86.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _86.EventLeaveGroup): _86.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _86.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.EventProposalPruned;
                fromPartial(object: Partial<_86.EventProposalPruned>): _86.EventProposalPruned;
                fromAmino(object: _86.EventProposalPrunedAmino): _86.EventProposalPruned;
                toAmino(message: _86.EventProposalPruned): _86.EventProposalPrunedAmino;
                fromAminoMsg(object: _86.EventProposalPrunedAminoMsg): _86.EventProposalPruned;
                toAminoMsg(message: _86.EventProposalPruned): _86.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _86.EventProposalPrunedProtoMsg): _86.EventProposalPruned;
                toProto(message: _86.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _86.EventProposalPruned): _86.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                inflation(request?: _93.QueryInflationRequest): Promise<_93.QueryInflationResponse>;
                annualProvisions(request?: _93.QueryAnnualProvisionsRequest): Promise<_93.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _190.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _93.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _93.QueryParamsRequest;
                fromPartial(_: Partial<_93.QueryParamsRequest>): _93.QueryParamsRequest;
                fromAmino(_: _93.QueryParamsRequestAmino): _93.QueryParamsRequest;
                toAmino(_: _93.QueryParamsRequest): _93.QueryParamsRequestAmino;
                fromAminoMsg(object: _93.QueryParamsRequestAminoMsg): _93.QueryParamsRequest;
                toAminoMsg(message: _93.QueryParamsRequest): _93.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryParamsRequestProtoMsg): _93.QueryParamsRequest;
                toProto(message: _93.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryParamsRequest): _93.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _93.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryParamsResponse;
                fromPartial(object: Partial<_93.QueryParamsResponse>): _93.QueryParamsResponse;
                fromAmino(object: _93.QueryParamsResponseAmino): _93.QueryParamsResponse;
                toAmino(message: _93.QueryParamsResponse): _93.QueryParamsResponseAmino;
                fromAminoMsg(object: _93.QueryParamsResponseAminoMsg): _93.QueryParamsResponse;
                toAminoMsg(message: _93.QueryParamsResponse): _93.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryParamsResponseProtoMsg): _93.QueryParamsResponse;
                toProto(message: _93.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryParamsResponse): _93.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _93.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _93.QueryInflationRequest;
                fromPartial(_: Partial<_93.QueryInflationRequest>): _93.QueryInflationRequest;
                fromAmino(_: _93.QueryInflationRequestAmino): _93.QueryInflationRequest;
                toAmino(_: _93.QueryInflationRequest): _93.QueryInflationRequestAmino;
                fromAminoMsg(object: _93.QueryInflationRequestAminoMsg): _93.QueryInflationRequest;
                toAminoMsg(message: _93.QueryInflationRequest): _93.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _93.QueryInflationRequestProtoMsg): _93.QueryInflationRequest;
                toProto(message: _93.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _93.QueryInflationRequest): _93.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _93.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryInflationResponse;
                fromPartial(object: Partial<_93.QueryInflationResponse>): _93.QueryInflationResponse;
                fromAmino(object: _93.QueryInflationResponseAmino): _93.QueryInflationResponse;
                toAmino(message: _93.QueryInflationResponse): _93.QueryInflationResponseAmino;
                fromAminoMsg(object: _93.QueryInflationResponseAminoMsg): _93.QueryInflationResponse;
                toAminoMsg(message: _93.QueryInflationResponse): _93.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _93.QueryInflationResponseProtoMsg): _93.QueryInflationResponse;
                toProto(message: _93.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _93.QueryInflationResponse): _93.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _93.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _93.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_93.QueryAnnualProvisionsRequest>): _93.QueryAnnualProvisionsRequest;
                fromAmino(_: _93.QueryAnnualProvisionsRequestAmino): _93.QueryAnnualProvisionsRequest;
                toAmino(_: _93.QueryAnnualProvisionsRequest): _93.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _93.QueryAnnualProvisionsRequestAminoMsg): _93.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _93.QueryAnnualProvisionsRequest): _93.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryAnnualProvisionsRequestProtoMsg): _93.QueryAnnualProvisionsRequest;
                toProto(message: _93.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryAnnualProvisionsRequest): _93.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _93.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_93.QueryAnnualProvisionsResponse>): _93.QueryAnnualProvisionsResponse;
                fromAmino(object: _93.QueryAnnualProvisionsResponseAmino): _93.QueryAnnualProvisionsResponse;
                toAmino(message: _93.QueryAnnualProvisionsResponse): _93.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _93.QueryAnnualProvisionsResponseAminoMsg): _93.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _93.QueryAnnualProvisionsResponse): _93.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryAnnualProvisionsResponseProtoMsg): _93.QueryAnnualProvisionsResponse;
                toProto(message: _93.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryAnnualProvisionsResponse): _93.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _92.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Minter;
                fromPartial(object: Partial<_92.Minter>): _92.Minter;
                fromAmino(object: _92.MinterAmino): _92.Minter;
                toAmino(message: _92.Minter): _92.MinterAmino;
                fromAminoMsg(object: _92.MinterAminoMsg): _92.Minter;
                toAminoMsg(message: _92.Minter): _92.MinterAminoMsg;
                fromProtoMsg(message: _92.MinterProtoMsg): _92.Minter;
                toProto(message: _92.Minter): Uint8Array;
                toProtoMsg(message: _92.Minter): _92.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _92.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Params;
                fromPartial(object: Partial<_92.Params>): _92.Params;
                fromAmino(object: _92.ParamsAmino): _92.Params;
                toAmino(message: _92.Params): _92.ParamsAmino;
                fromAminoMsg(object: _92.ParamsAminoMsg): _92.Params;
                toAminoMsg(message: _92.Params): _92.ParamsAminoMsg;
                fromProtoMsg(message: _92.ParamsProtoMsg): _92.Params;
                toProto(message: _92.Params): Uint8Array;
                toProtoMsg(message: _92.Params): _92.ParamsProtoMsg;
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
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _98.QueryBalanceRequest): Promise<_98.QueryBalanceResponse>;
                owner(request: _98.QueryOwnerRequest): Promise<_98.QueryOwnerResponse>;
                supply(request: _98.QuerySupplyRequest): Promise<_98.QuerySupplyResponse>;
                nFTs(request: _98.QueryNFTsRequest): Promise<_98.QueryNFTsResponse>;
                nFT(request: _98.QueryNFTRequest): Promise<_98.QueryNFTResponse>;
                class(request: _98.QueryClassRequest): Promise<_98.QueryClassResponse>;
                classes(request?: _98.QueryClassesRequest): Promise<_98.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _99.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _99.MsgSend): {
                        typeUrl: string;
                        value: _99.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _99.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _99.MsgSend): {
                        typeUrl: string;
                        value: _99.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _99.MsgSend) => _99.MsgSendAmino;
                    fromAmino: (object: _99.MsgSendAmino) => _99.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _99.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgSend;
                fromPartial(object: Partial<_99.MsgSend>): _99.MsgSend;
                fromAmino(object: _99.MsgSendAmino): _99.MsgSend;
                toAmino(message: _99.MsgSend): _99.MsgSendAmino;
                fromAminoMsg(object: _99.MsgSendAminoMsg): _99.MsgSend;
                toAminoMsg(message: _99.MsgSend): _99.MsgSendAminoMsg;
                fromProtoMsg(message: _99.MsgSendProtoMsg): _99.MsgSend;
                toProto(message: _99.MsgSend): Uint8Array;
                toProtoMsg(message: _99.MsgSend): _99.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _99.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.MsgSendResponse;
                fromPartial(_: Partial<_99.MsgSendResponse>): _99.MsgSendResponse;
                fromAmino(_: _99.MsgSendResponseAmino): _99.MsgSendResponse;
                toAmino(_: _99.MsgSendResponse): _99.MsgSendResponseAmino;
                fromAminoMsg(object: _99.MsgSendResponseAminoMsg): _99.MsgSendResponse;
                toAminoMsg(message: _99.MsgSendResponse): _99.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _99.MsgSendResponseProtoMsg): _99.MsgSendResponse;
                toProto(message: _99.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _99.MsgSendResponse): _99.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _98.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryBalanceRequest;
                fromPartial(object: Partial<_98.QueryBalanceRequest>): _98.QueryBalanceRequest;
                fromAmino(object: _98.QueryBalanceRequestAmino): _98.QueryBalanceRequest;
                toAmino(message: _98.QueryBalanceRequest): _98.QueryBalanceRequestAmino;
                fromAminoMsg(object: _98.QueryBalanceRequestAminoMsg): _98.QueryBalanceRequest;
                toAminoMsg(message: _98.QueryBalanceRequest): _98.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _98.QueryBalanceRequestProtoMsg): _98.QueryBalanceRequest;
                toProto(message: _98.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _98.QueryBalanceRequest): _98.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _98.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryBalanceResponse;
                fromPartial(object: Partial<_98.QueryBalanceResponse>): _98.QueryBalanceResponse;
                fromAmino(object: _98.QueryBalanceResponseAmino): _98.QueryBalanceResponse;
                toAmino(message: _98.QueryBalanceResponse): _98.QueryBalanceResponseAmino;
                fromAminoMsg(object: _98.QueryBalanceResponseAminoMsg): _98.QueryBalanceResponse;
                toAminoMsg(message: _98.QueryBalanceResponse): _98.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _98.QueryBalanceResponseProtoMsg): _98.QueryBalanceResponse;
                toProto(message: _98.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _98.QueryBalanceResponse): _98.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _98.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryOwnerRequest;
                fromPartial(object: Partial<_98.QueryOwnerRequest>): _98.QueryOwnerRequest;
                fromAmino(object: _98.QueryOwnerRequestAmino): _98.QueryOwnerRequest;
                toAmino(message: _98.QueryOwnerRequest): _98.QueryOwnerRequestAmino;
                fromAminoMsg(object: _98.QueryOwnerRequestAminoMsg): _98.QueryOwnerRequest;
                toAminoMsg(message: _98.QueryOwnerRequest): _98.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _98.QueryOwnerRequestProtoMsg): _98.QueryOwnerRequest;
                toProto(message: _98.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _98.QueryOwnerRequest): _98.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _98.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryOwnerResponse;
                fromPartial(object: Partial<_98.QueryOwnerResponse>): _98.QueryOwnerResponse;
                fromAmino(object: _98.QueryOwnerResponseAmino): _98.QueryOwnerResponse;
                toAmino(message: _98.QueryOwnerResponse): _98.QueryOwnerResponseAmino;
                fromAminoMsg(object: _98.QueryOwnerResponseAminoMsg): _98.QueryOwnerResponse;
                toAminoMsg(message: _98.QueryOwnerResponse): _98.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _98.QueryOwnerResponseProtoMsg): _98.QueryOwnerResponse;
                toProto(message: _98.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _98.QueryOwnerResponse): _98.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _98.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QuerySupplyRequest;
                fromPartial(object: Partial<_98.QuerySupplyRequest>): _98.QuerySupplyRequest;
                fromAmino(object: _98.QuerySupplyRequestAmino): _98.QuerySupplyRequest;
                toAmino(message: _98.QuerySupplyRequest): _98.QuerySupplyRequestAmino;
                fromAminoMsg(object: _98.QuerySupplyRequestAminoMsg): _98.QuerySupplyRequest;
                toAminoMsg(message: _98.QuerySupplyRequest): _98.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _98.QuerySupplyRequestProtoMsg): _98.QuerySupplyRequest;
                toProto(message: _98.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _98.QuerySupplyRequest): _98.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _98.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QuerySupplyResponse;
                fromPartial(object: Partial<_98.QuerySupplyResponse>): _98.QuerySupplyResponse;
                fromAmino(object: _98.QuerySupplyResponseAmino): _98.QuerySupplyResponse;
                toAmino(message: _98.QuerySupplyResponse): _98.QuerySupplyResponseAmino;
                fromAminoMsg(object: _98.QuerySupplyResponseAminoMsg): _98.QuerySupplyResponse;
                toAminoMsg(message: _98.QuerySupplyResponse): _98.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _98.QuerySupplyResponseProtoMsg): _98.QuerySupplyResponse;
                toProto(message: _98.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _98.QuerySupplyResponse): _98.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _98.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryNFTsRequest;
                fromPartial(object: Partial<_98.QueryNFTsRequest>): _98.QueryNFTsRequest;
                fromAmino(object: _98.QueryNFTsRequestAmino): _98.QueryNFTsRequest;
                toAmino(message: _98.QueryNFTsRequest): _98.QueryNFTsRequestAmino;
                fromAminoMsg(object: _98.QueryNFTsRequestAminoMsg): _98.QueryNFTsRequest;
                toAminoMsg(message: _98.QueryNFTsRequest): _98.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryNFTsRequestProtoMsg): _98.QueryNFTsRequest;
                toProto(message: _98.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryNFTsRequest): _98.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _98.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryNFTsResponse;
                fromPartial(object: Partial<_98.QueryNFTsResponse>): _98.QueryNFTsResponse;
                fromAmino(object: _98.QueryNFTsResponseAmino): _98.QueryNFTsResponse;
                toAmino(message: _98.QueryNFTsResponse): _98.QueryNFTsResponseAmino;
                fromAminoMsg(object: _98.QueryNFTsResponseAminoMsg): _98.QueryNFTsResponse;
                toAminoMsg(message: _98.QueryNFTsResponse): _98.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryNFTsResponseProtoMsg): _98.QueryNFTsResponse;
                toProto(message: _98.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryNFTsResponse): _98.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _98.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryNFTRequest;
                fromPartial(object: Partial<_98.QueryNFTRequest>): _98.QueryNFTRequest;
                fromAmino(object: _98.QueryNFTRequestAmino): _98.QueryNFTRequest;
                toAmino(message: _98.QueryNFTRequest): _98.QueryNFTRequestAmino;
                fromAminoMsg(object: _98.QueryNFTRequestAminoMsg): _98.QueryNFTRequest;
                toAminoMsg(message: _98.QueryNFTRequest): _98.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _98.QueryNFTRequestProtoMsg): _98.QueryNFTRequest;
                toProto(message: _98.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _98.QueryNFTRequest): _98.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _98.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryNFTResponse;
                fromPartial(object: Partial<_98.QueryNFTResponse>): _98.QueryNFTResponse;
                fromAmino(object: _98.QueryNFTResponseAmino): _98.QueryNFTResponse;
                toAmino(message: _98.QueryNFTResponse): _98.QueryNFTResponseAmino;
                fromAminoMsg(object: _98.QueryNFTResponseAminoMsg): _98.QueryNFTResponse;
                toAminoMsg(message: _98.QueryNFTResponse): _98.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _98.QueryNFTResponseProtoMsg): _98.QueryNFTResponse;
                toProto(message: _98.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _98.QueryNFTResponse): _98.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _98.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryClassRequest;
                fromPartial(object: Partial<_98.QueryClassRequest>): _98.QueryClassRequest;
                fromAmino(object: _98.QueryClassRequestAmino): _98.QueryClassRequest;
                toAmino(message: _98.QueryClassRequest): _98.QueryClassRequestAmino;
                fromAminoMsg(object: _98.QueryClassRequestAminoMsg): _98.QueryClassRequest;
                toAminoMsg(message: _98.QueryClassRequest): _98.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _98.QueryClassRequestProtoMsg): _98.QueryClassRequest;
                toProto(message: _98.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _98.QueryClassRequest): _98.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _98.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryClassResponse;
                fromPartial(object: Partial<_98.QueryClassResponse>): _98.QueryClassResponse;
                fromAmino(object: _98.QueryClassResponseAmino): _98.QueryClassResponse;
                toAmino(message: _98.QueryClassResponse): _98.QueryClassResponseAmino;
                fromAminoMsg(object: _98.QueryClassResponseAminoMsg): _98.QueryClassResponse;
                toAminoMsg(message: _98.QueryClassResponse): _98.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _98.QueryClassResponseProtoMsg): _98.QueryClassResponse;
                toProto(message: _98.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _98.QueryClassResponse): _98.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _98.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryClassesRequest;
                fromPartial(object: Partial<_98.QueryClassesRequest>): _98.QueryClassesRequest;
                fromAmino(object: _98.QueryClassesRequestAmino): _98.QueryClassesRequest;
                toAmino(message: _98.QueryClassesRequest): _98.QueryClassesRequestAmino;
                fromAminoMsg(object: _98.QueryClassesRequestAminoMsg): _98.QueryClassesRequest;
                toAminoMsg(message: _98.QueryClassesRequest): _98.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _98.QueryClassesRequestProtoMsg): _98.QueryClassesRequest;
                toProto(message: _98.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _98.QueryClassesRequest): _98.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _98.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryClassesResponse;
                fromPartial(object: Partial<_98.QueryClassesResponse>): _98.QueryClassesResponse;
                fromAmino(object: _98.QueryClassesResponseAmino): _98.QueryClassesResponse;
                toAmino(message: _98.QueryClassesResponse): _98.QueryClassesResponseAmino;
                fromAminoMsg(object: _98.QueryClassesResponseAminoMsg): _98.QueryClassesResponse;
                toAminoMsg(message: _98.QueryClassesResponse): _98.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _98.QueryClassesResponseProtoMsg): _98.QueryClassesResponse;
                toProto(message: _98.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _98.QueryClassesResponse): _98.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _97.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Class;
                fromPartial(object: Partial<_97.Class>): _97.Class;
                fromAmino(object: _97.ClassAmino): _97.Class;
                toAmino(message: _97.Class): _97.ClassAmino;
                fromAminoMsg(object: _97.ClassAminoMsg): _97.Class;
                toAminoMsg(message: _97.Class): _97.ClassAminoMsg;
                fromProtoMsg(message: _97.ClassProtoMsg): _97.Class;
                toProto(message: _97.Class): Uint8Array;
                toProtoMsg(message: _97.Class): _97.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _97.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.NFT;
                fromPartial(object: Partial<_97.NFT>): _97.NFT;
                fromAmino(object: _97.NFTAmino): _97.NFT;
                toAmino(message: _97.NFT): _97.NFTAmino;
                fromAminoMsg(object: _97.NFTAminoMsg): _97.NFT;
                toAminoMsg(message: _97.NFT): _97.NFTAminoMsg;
                fromProtoMsg(message: _97.NFTProtoMsg): _97.NFT;
                toProto(message: _97.NFT): Uint8Array;
                toProtoMsg(message: _97.NFT): _97.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _96.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Entry;
                fromPartial(object: Partial<_96.Entry>): _96.Entry;
                fromAmino(object: _96.EntryAmino): _96.Entry;
                toAmino(message: _96.Entry): _96.EntryAmino;
                fromAminoMsg(object: _96.EntryAminoMsg): _96.Entry;
                toAminoMsg(message: _96.Entry): _96.EntryAminoMsg;
                fromProtoMsg(message: _96.EntryProtoMsg): _96.Entry;
                toProto(message: _96.Entry): Uint8Array;
                toProtoMsg(message: _96.Entry): _96.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _95.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.EventSend;
                fromPartial(object: Partial<_95.EventSend>): _95.EventSend;
                fromAmino(object: _95.EventSendAmino): _95.EventSend;
                toAmino(message: _95.EventSend): _95.EventSendAmino;
                fromAminoMsg(object: _95.EventSendAminoMsg): _95.EventSend;
                toAminoMsg(message: _95.EventSend): _95.EventSendAminoMsg;
                fromProtoMsg(message: _95.EventSendProtoMsg): _95.EventSend;
                toProto(message: _95.EventSend): Uint8Array;
                toProtoMsg(message: _95.EventSend): _95.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _95.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.EventMint;
                fromPartial(object: Partial<_95.EventMint>): _95.EventMint;
                fromAmino(object: _95.EventMintAmino): _95.EventMint;
                toAmino(message: _95.EventMint): _95.EventMintAmino;
                fromAminoMsg(object: _95.EventMintAminoMsg): _95.EventMint;
                toAminoMsg(message: _95.EventMint): _95.EventMintAminoMsg;
                fromProtoMsg(message: _95.EventMintProtoMsg): _95.EventMint;
                toProto(message: _95.EventMint): Uint8Array;
                toProtoMsg(message: _95.EventMint): _95.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _95.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.EventBurn;
                fromPartial(object: Partial<_95.EventBurn>): _95.EventBurn;
                fromAmino(object: _95.EventBurnAmino): _95.EventBurn;
                toAmino(message: _95.EventBurn): _95.EventBurnAmino;
                fromAminoMsg(object: _95.EventBurnAminoMsg): _95.EventBurn;
                toAminoMsg(message: _95.EventBurn): _95.EventBurnAminoMsg;
                fromProtoMsg(message: _95.EventBurnProtoMsg): _95.EventBurn;
                toProto(message: _95.EventBurn): Uint8Array;
                toProtoMsg(message: _95.EventBurn): _95.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
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
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _101.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.TableDescriptor;
                fromPartial(object: Partial<_101.TableDescriptor>): _101.TableDescriptor;
                fromAmino(object: _101.TableDescriptorAmino): _101.TableDescriptor;
                toAmino(message: _101.TableDescriptor): _101.TableDescriptorAmino;
                fromAminoMsg(object: _101.TableDescriptorAminoMsg): _101.TableDescriptor;
                toAminoMsg(message: _101.TableDescriptor): _101.TableDescriptorAminoMsg;
                fromProtoMsg(message: _101.TableDescriptorProtoMsg): _101.TableDescriptor;
                toProto(message: _101.TableDescriptor): Uint8Array;
                toProtoMsg(message: _101.TableDescriptor): _101.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _101.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_101.PrimaryKeyDescriptor>): _101.PrimaryKeyDescriptor;
                fromAmino(object: _101.PrimaryKeyDescriptorAmino): _101.PrimaryKeyDescriptor;
                toAmino(message: _101.PrimaryKeyDescriptor): _101.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _101.PrimaryKeyDescriptorAminoMsg): _101.PrimaryKeyDescriptor;
                toAminoMsg(message: _101.PrimaryKeyDescriptor): _101.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _101.PrimaryKeyDescriptorProtoMsg): _101.PrimaryKeyDescriptor;
                toProto(message: _101.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _101.PrimaryKeyDescriptor): _101.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _101.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_101.SecondaryIndexDescriptor>): _101.SecondaryIndexDescriptor;
                fromAmino(object: _101.SecondaryIndexDescriptorAmino): _101.SecondaryIndexDescriptor;
                toAmino(message: _101.SecondaryIndexDescriptor): _101.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _101.SecondaryIndexDescriptorAminoMsg): _101.SecondaryIndexDescriptor;
                toAminoMsg(message: _101.SecondaryIndexDescriptor): _101.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _101.SecondaryIndexDescriptorProtoMsg): _101.SecondaryIndexDescriptor;
                toProto(message: _101.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _101.SecondaryIndexDescriptor): _101.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _101.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.SingletonDescriptor;
                fromPartial(object: Partial<_101.SingletonDescriptor>): _101.SingletonDescriptor;
                fromAmino(object: _101.SingletonDescriptorAmino): _101.SingletonDescriptor;
                toAmino(message: _101.SingletonDescriptor): _101.SingletonDescriptorAmino;
                fromAminoMsg(object: _101.SingletonDescriptorAminoMsg): _101.SingletonDescriptor;
                toAminoMsg(message: _101.SingletonDescriptor): _101.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _101.SingletonDescriptorProtoMsg): _101.SingletonDescriptor;
                toProto(message: _101.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _101.SingletonDescriptor): _101.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _102.StorageType;
            storageTypeToJSON(object: _102.StorageType): string;
            StorageType: typeof _102.StorageType;
            StorageTypeSDKType: typeof _102.StorageType;
            StorageTypeAmino: typeof _102.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _102.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_102.ModuleSchemaDescriptor>): _102.ModuleSchemaDescriptor;
                fromAmino(object: _102.ModuleSchemaDescriptorAmino): _102.ModuleSchemaDescriptor;
                toAmino(message: _102.ModuleSchemaDescriptor): _102.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _102.ModuleSchemaDescriptorAminoMsg): _102.ModuleSchemaDescriptor;
                toAminoMsg(message: _102.ModuleSchemaDescriptor): _102.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _102.ModuleSchemaDescriptorProtoMsg): _102.ModuleSchemaDescriptor;
                toProto(message: _102.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _102.ModuleSchemaDescriptor): _102.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _102.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_102.ModuleSchemaDescriptor_FileEntry>): _102.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _102.ModuleSchemaDescriptor_FileEntryAmino): _102.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _102.ModuleSchemaDescriptor_FileEntry): _102.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _102.ModuleSchemaDescriptor_FileEntryAminoMsg): _102.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _102.ModuleSchemaDescriptor_FileEntry): _102.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _102.ModuleSchemaDescriptor_FileEntryProtoMsg): _102.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _102.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _102.ModuleSchemaDescriptor_FileEntry): _102.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                subspaces(request?: _104.QuerySubspacesRequest): Promise<_104.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _104.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryParamsRequest;
                fromPartial(object: Partial<_104.QueryParamsRequest>): _104.QueryParamsRequest;
                fromAmino(object: _104.QueryParamsRequestAmino): _104.QueryParamsRequest;
                toAmino(message: _104.QueryParamsRequest): _104.QueryParamsRequestAmino;
                fromAminoMsg(object: _104.QueryParamsRequestAminoMsg): _104.QueryParamsRequest;
                toAminoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryParamsRequestProtoMsg): _104.QueryParamsRequest;
                toProto(message: _104.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _104.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryParamsResponse;
                fromPartial(object: Partial<_104.QueryParamsResponse>): _104.QueryParamsResponse;
                fromAmino(object: _104.QueryParamsResponseAmino): _104.QueryParamsResponse;
                toAmino(message: _104.QueryParamsResponse): _104.QueryParamsResponseAmino;
                fromAminoMsg(object: _104.QueryParamsResponseAminoMsg): _104.QueryParamsResponse;
                toAminoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryParamsResponseProtoMsg): _104.QueryParamsResponse;
                toProto(message: _104.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _104.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.QuerySubspacesRequest;
                fromPartial(_: Partial<_104.QuerySubspacesRequest>): _104.QuerySubspacesRequest;
                fromAmino(_: _104.QuerySubspacesRequestAmino): _104.QuerySubspacesRequest;
                toAmino(_: _104.QuerySubspacesRequest): _104.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _104.QuerySubspacesRequestAminoMsg): _104.QuerySubspacesRequest;
                toAminoMsg(message: _104.QuerySubspacesRequest): _104.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _104.QuerySubspacesRequestProtoMsg): _104.QuerySubspacesRequest;
                toProto(message: _104.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _104.QuerySubspacesRequest): _104.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _104.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QuerySubspacesResponse;
                fromPartial(object: Partial<_104.QuerySubspacesResponse>): _104.QuerySubspacesResponse;
                fromAmino(object: _104.QuerySubspacesResponseAmino): _104.QuerySubspacesResponse;
                toAmino(message: _104.QuerySubspacesResponse): _104.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _104.QuerySubspacesResponseAminoMsg): _104.QuerySubspacesResponse;
                toAminoMsg(message: _104.QuerySubspacesResponse): _104.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _104.QuerySubspacesResponseProtoMsg): _104.QuerySubspacesResponse;
                toProto(message: _104.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _104.QuerySubspacesResponse): _104.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _104.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Subspace;
                fromPartial(object: Partial<_104.Subspace>): _104.Subspace;
                fromAmino(object: _104.SubspaceAmino): _104.Subspace;
                toAmino(message: _104.Subspace): _104.SubspaceAmino;
                fromAminoMsg(object: _104.SubspaceAminoMsg): _104.Subspace;
                toAminoMsg(message: _104.Subspace): _104.SubspaceAminoMsg;
                fromProtoMsg(message: _104.SubspaceProtoMsg): _104.Subspace;
                toProto(message: _104.Subspace): Uint8Array;
                toProtoMsg(message: _104.Subspace): _104.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _103.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ParameterChangeProposal;
                fromPartial(object: Partial<_103.ParameterChangeProposal>): _103.ParameterChangeProposal;
                fromAmino(object: _103.ParameterChangeProposalAmino): _103.ParameterChangeProposal;
                toAmino(message: _103.ParameterChangeProposal): _103.ParameterChangeProposalAmino;
                fromAminoMsg(object: _103.ParameterChangeProposalAminoMsg): _103.ParameterChangeProposal;
                toAminoMsg(message: _103.ParameterChangeProposal): _103.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _103.ParameterChangeProposalProtoMsg): _103.ParameterChangeProposal;
                toProto(message: _103.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _103.ParameterChangeProposal): _103.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _103.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ParamChange;
                fromPartial(object: Partial<_103.ParamChange>): _103.ParamChange;
                fromAmino(object: _103.ParamChangeAmino): _103.ParamChange;
                toAmino(message: _103.ParamChange): _103.ParamChangeAmino;
                fromAminoMsg(object: _103.ParamChangeAminoMsg): _103.ParamChange;
                toAminoMsg(message: _103.ParamChange): _103.ParamChangeAminoMsg;
                fromProtoMsg(message: _103.ParamChangeProtoMsg): _103.ParamChange;
                toProto(message: _103.ParamChange): Uint8Array;
                toProtoMsg(message: _103.ParamChange): _103.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                signingInfo(request: _106.QuerySigningInfoRequest): Promise<_106.QuerySigningInfoResponse>;
                signingInfos(request?: _106.QuerySigningInfosRequest): Promise<_106.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _108.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _108.MsgUnjail): {
                        typeUrl: string;
                        value: _108.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _108.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _108.MsgUnjail): {
                        typeUrl: string;
                        value: _108.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _108.MsgUnjail) => _108.MsgUnjailAmino;
                    fromAmino: (object: _108.MsgUnjailAmino) => _108.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _108.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgUnjail;
                fromPartial(object: Partial<_108.MsgUnjail>): _108.MsgUnjail;
                fromAmino(object: _108.MsgUnjailAmino): _108.MsgUnjail;
                toAmino(message: _108.MsgUnjail): _108.MsgUnjailAmino;
                fromAminoMsg(object: _108.MsgUnjailAminoMsg): _108.MsgUnjail;
                toAminoMsg(message: _108.MsgUnjail): _108.MsgUnjailAminoMsg;
                fromProtoMsg(message: _108.MsgUnjailProtoMsg): _108.MsgUnjail;
                toProto(message: _108.MsgUnjail): Uint8Array;
                toProtoMsg(message: _108.MsgUnjail): _108.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _108.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.MsgUnjailResponse;
                fromPartial(_: Partial<_108.MsgUnjailResponse>): _108.MsgUnjailResponse;
                fromAmino(_: _108.MsgUnjailResponseAmino): _108.MsgUnjailResponse;
                toAmino(_: _108.MsgUnjailResponse): _108.MsgUnjailResponseAmino;
                fromAminoMsg(object: _108.MsgUnjailResponseAminoMsg): _108.MsgUnjailResponse;
                toAminoMsg(message: _108.MsgUnjailResponse): _108.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _108.MsgUnjailResponseProtoMsg): _108.MsgUnjailResponse;
                toProto(message: _108.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _108.MsgUnjailResponse): _108.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _107.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.ValidatorSigningInfo;
                fromPartial(object: Partial<_107.ValidatorSigningInfo>): _107.ValidatorSigningInfo;
                fromAmino(object: _107.ValidatorSigningInfoAmino): _107.ValidatorSigningInfo;
                toAmino(message: _107.ValidatorSigningInfo): _107.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _107.ValidatorSigningInfoAminoMsg): _107.ValidatorSigningInfo;
                toAminoMsg(message: _107.ValidatorSigningInfo): _107.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _107.ValidatorSigningInfoProtoMsg): _107.ValidatorSigningInfo;
                toProto(message: _107.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _107.ValidatorSigningInfo): _107.ValidatorSigningInfoProtoMsg;
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
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _106.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.QueryParamsRequest;
                fromPartial(_: Partial<_106.QueryParamsRequest>): _106.QueryParamsRequest;
                fromAmino(_: _106.QueryParamsRequestAmino): _106.QueryParamsRequest;
                toAmino(_: _106.QueryParamsRequest): _106.QueryParamsRequestAmino;
                fromAminoMsg(object: _106.QueryParamsRequestAminoMsg): _106.QueryParamsRequest;
                toAminoMsg(message: _106.QueryParamsRequest): _106.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryParamsRequestProtoMsg): _106.QueryParamsRequest;
                toProto(message: _106.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryParamsRequest): _106.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _106.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryParamsResponse;
                fromPartial(object: Partial<_106.QueryParamsResponse>): _106.QueryParamsResponse;
                fromAmino(object: _106.QueryParamsResponseAmino): _106.QueryParamsResponse;
                toAmino(message: _106.QueryParamsResponse): _106.QueryParamsResponseAmino;
                fromAminoMsg(object: _106.QueryParamsResponseAminoMsg): _106.QueryParamsResponse;
                toAminoMsg(message: _106.QueryParamsResponse): _106.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryParamsResponseProtoMsg): _106.QueryParamsResponse;
                toProto(message: _106.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryParamsResponse): _106.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _106.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QuerySigningInfoRequest;
                fromPartial(object: Partial<_106.QuerySigningInfoRequest>): _106.QuerySigningInfoRequest;
                fromAmino(object: _106.QuerySigningInfoRequestAmino): _106.QuerySigningInfoRequest;
                toAmino(message: _106.QuerySigningInfoRequest): _106.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _106.QuerySigningInfoRequestAminoMsg): _106.QuerySigningInfoRequest;
                toAminoMsg(message: _106.QuerySigningInfoRequest): _106.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _106.QuerySigningInfoRequestProtoMsg): _106.QuerySigningInfoRequest;
                toProto(message: _106.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _106.QuerySigningInfoRequest): _106.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _106.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QuerySigningInfoResponse;
                fromPartial(object: Partial<_106.QuerySigningInfoResponse>): _106.QuerySigningInfoResponse;
                fromAmino(object: _106.QuerySigningInfoResponseAmino): _106.QuerySigningInfoResponse;
                toAmino(message: _106.QuerySigningInfoResponse): _106.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _106.QuerySigningInfoResponseAminoMsg): _106.QuerySigningInfoResponse;
                toAminoMsg(message: _106.QuerySigningInfoResponse): _106.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _106.QuerySigningInfoResponseProtoMsg): _106.QuerySigningInfoResponse;
                toProto(message: _106.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _106.QuerySigningInfoResponse): _106.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _106.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QuerySigningInfosRequest;
                fromPartial(object: Partial<_106.QuerySigningInfosRequest>): _106.QuerySigningInfosRequest;
                fromAmino(object: _106.QuerySigningInfosRequestAmino): _106.QuerySigningInfosRequest;
                toAmino(message: _106.QuerySigningInfosRequest): _106.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _106.QuerySigningInfosRequestAminoMsg): _106.QuerySigningInfosRequest;
                toAminoMsg(message: _106.QuerySigningInfosRequest): _106.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _106.QuerySigningInfosRequestProtoMsg): _106.QuerySigningInfosRequest;
                toProto(message: _106.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _106.QuerySigningInfosRequest): _106.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _106.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QuerySigningInfosResponse;
                fromPartial(object: Partial<_106.QuerySigningInfosResponse>): _106.QuerySigningInfosResponse;
                fromAmino(object: _106.QuerySigningInfosResponseAmino): _106.QuerySigningInfosResponse;
                toAmino(message: _106.QuerySigningInfosResponse): _106.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _106.QuerySigningInfosResponseAminoMsg): _106.QuerySigningInfosResponse;
                toAminoMsg(message: _106.QuerySigningInfosResponse): _106.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _106.QuerySigningInfosResponseProtoMsg): _106.QuerySigningInfosResponse;
                toProto(message: _106.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _106.QuerySigningInfosResponse): _106.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _105.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.GenesisState;
                fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
                fromAmino(object: _105.GenesisStateAmino): _105.GenesisState;
                toAmino(message: _105.GenesisState): _105.GenesisStateAmino;
                fromAminoMsg(object: _105.GenesisStateAminoMsg): _105.GenesisState;
                toAminoMsg(message: _105.GenesisState): _105.GenesisStateAminoMsg;
                fromProtoMsg(message: _105.GenesisStateProtoMsg): _105.GenesisState;
                toProto(message: _105.GenesisState): Uint8Array;
                toProtoMsg(message: _105.GenesisState): _105.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _105.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.SigningInfo;
                fromPartial(object: Partial<_105.SigningInfo>): _105.SigningInfo;
                fromAmino(object: _105.SigningInfoAmino): _105.SigningInfo;
                toAmino(message: _105.SigningInfo): _105.SigningInfoAmino;
                fromAminoMsg(object: _105.SigningInfoAminoMsg): _105.SigningInfo;
                toAminoMsg(message: _105.SigningInfo): _105.SigningInfoAminoMsg;
                fromProtoMsg(message: _105.SigningInfoProtoMsg): _105.SigningInfo;
                toProto(message: _105.SigningInfo): Uint8Array;
                toProtoMsg(message: _105.SigningInfo): _105.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _105.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorMissedBlocks;
                fromPartial(object: Partial<_105.ValidatorMissedBlocks>): _105.ValidatorMissedBlocks;
                fromAmino(object: _105.ValidatorMissedBlocksAmino): _105.ValidatorMissedBlocks;
                toAmino(message: _105.ValidatorMissedBlocks): _105.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _105.ValidatorMissedBlocksAminoMsg): _105.ValidatorMissedBlocks;
                toAminoMsg(message: _105.ValidatorMissedBlocks): _105.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _105.ValidatorMissedBlocksProtoMsg): _105.ValidatorMissedBlocks;
                toProto(message: _105.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _105.ValidatorMissedBlocks): _105.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _105.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MissedBlock;
                fromPartial(object: Partial<_105.MissedBlock>): _105.MissedBlock;
                fromAmino(object: _105.MissedBlockAmino): _105.MissedBlock;
                toAmino(message: _105.MissedBlock): _105.MissedBlockAmino;
                fromAminoMsg(object: _105.MissedBlockAminoMsg): _105.MissedBlock;
                toAminoMsg(message: _105.MissedBlock): _105.MissedBlockAminoMsg;
                fromProtoMsg(message: _105.MissedBlockProtoMsg): _105.MissedBlock;
                toProto(message: _105.MissedBlock): Uint8Array;
                toProtoMsg(message: _105.MissedBlock): _105.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _111.QueryValidatorsRequest): Promise<_111.QueryValidatorsResponse>;
                validator(request: _111.QueryValidatorRequest): Promise<_111.QueryValidatorResponse>;
                validatorDelegations(request: _111.QueryValidatorDelegationsRequest): Promise<_111.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _111.QueryValidatorUnbondingDelegationsRequest): Promise<_111.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _111.QueryDelegationRequest): Promise<_111.QueryDelegationResponse>;
                unbondingDelegation(request: _111.QueryUnbondingDelegationRequest): Promise<_111.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _111.QueryDelegatorDelegationsRequest): Promise<_111.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _111.QueryDelegatorUnbondingDelegationsRequest): Promise<_111.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _111.QueryRedelegationsRequest): Promise<_111.QueryRedelegationsResponse>;
                delegatorValidators(request: _111.QueryDelegatorValidatorsRequest): Promise<_111.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _111.QueryDelegatorValidatorRequest): Promise<_111.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _111.QueryHistoricalInfoRequest): Promise<_111.QueryHistoricalInfoResponse>;
                pool(request?: _111.QueryPoolRequest): Promise<_111.QueryPoolResponse>;
                params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _113.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _113.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _113.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _113.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _113.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _113.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _113.MsgCreateValidator): {
                        typeUrl: string;
                        value: _113.MsgCreateValidator;
                    };
                    editValidator(value: _113.MsgEditValidator): {
                        typeUrl: string;
                        value: _113.MsgEditValidator;
                    };
                    delegate(value: _113.MsgDelegate): {
                        typeUrl: string;
                        value: _113.MsgDelegate;
                    };
                    beginRedelegate(value: _113.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _113.MsgBeginRedelegate;
                    };
                    undelegate(value: _113.MsgUndelegate): {
                        typeUrl: string;
                        value: _113.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _113.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _113.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _113.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _113.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _113.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _113.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _113.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _113.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _113.MsgCreateValidator): {
                        typeUrl: string;
                        value: _113.MsgCreateValidator;
                    };
                    editValidator(value: _113.MsgEditValidator): {
                        typeUrl: string;
                        value: _113.MsgEditValidator;
                    };
                    delegate(value: _113.MsgDelegate): {
                        typeUrl: string;
                        value: _113.MsgDelegate;
                    };
                    beginRedelegate(value: _113.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _113.MsgBeginRedelegate;
                    };
                    undelegate(value: _113.MsgUndelegate): {
                        typeUrl: string;
                        value: _113.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _113.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _113.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _113.MsgCreateValidator) => _113.MsgCreateValidatorAmino;
                    fromAmino: (object: _113.MsgCreateValidatorAmino) => _113.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _113.MsgEditValidator) => _113.MsgEditValidatorAmino;
                    fromAmino: (object: _113.MsgEditValidatorAmino) => _113.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _113.MsgDelegate) => _113.MsgDelegateAmino;
                    fromAmino: (object: _113.MsgDelegateAmino) => _113.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _113.MsgBeginRedelegate) => _113.MsgBeginRedelegateAmino;
                    fromAmino: (object: _113.MsgBeginRedelegateAmino) => _113.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _113.MsgUndelegate) => _113.MsgUndelegateAmino;
                    fromAmino: (object: _113.MsgUndelegateAmino) => _113.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _113.MsgCancelUnbondingDelegation) => _113.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _113.MsgCancelUnbondingDelegationAmino) => _113.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _113.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgCreateValidator;
                fromPartial(object: Partial<_113.MsgCreateValidator>): _113.MsgCreateValidator;
                fromAmino(object: _113.MsgCreateValidatorAmino): _113.MsgCreateValidator;
                toAmino(message: _113.MsgCreateValidator): _113.MsgCreateValidatorAmino;
                fromAminoMsg(object: _113.MsgCreateValidatorAminoMsg): _113.MsgCreateValidator;
                toAminoMsg(message: _113.MsgCreateValidator): _113.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _113.MsgCreateValidatorProtoMsg): _113.MsgCreateValidator;
                toProto(message: _113.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _113.MsgCreateValidator): _113.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _113.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_113.MsgCreateValidatorResponse>): _113.MsgCreateValidatorResponse;
                fromAmino(_: _113.MsgCreateValidatorResponseAmino): _113.MsgCreateValidatorResponse;
                toAmino(_: _113.MsgCreateValidatorResponse): _113.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _113.MsgCreateValidatorResponseAminoMsg): _113.MsgCreateValidatorResponse;
                toAminoMsg(message: _113.MsgCreateValidatorResponse): _113.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _113.MsgCreateValidatorResponseProtoMsg): _113.MsgCreateValidatorResponse;
                toProto(message: _113.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _113.MsgCreateValidatorResponse): _113.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _113.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgEditValidator;
                fromPartial(object: Partial<_113.MsgEditValidator>): _113.MsgEditValidator;
                fromAmino(object: _113.MsgEditValidatorAmino): _113.MsgEditValidator;
                toAmino(message: _113.MsgEditValidator): _113.MsgEditValidatorAmino;
                fromAminoMsg(object: _113.MsgEditValidatorAminoMsg): _113.MsgEditValidator;
                toAminoMsg(message: _113.MsgEditValidator): _113.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _113.MsgEditValidatorProtoMsg): _113.MsgEditValidator;
                toProto(message: _113.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _113.MsgEditValidator): _113.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _113.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.MsgEditValidatorResponse;
                fromPartial(_: Partial<_113.MsgEditValidatorResponse>): _113.MsgEditValidatorResponse;
                fromAmino(_: _113.MsgEditValidatorResponseAmino): _113.MsgEditValidatorResponse;
                toAmino(_: _113.MsgEditValidatorResponse): _113.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _113.MsgEditValidatorResponseAminoMsg): _113.MsgEditValidatorResponse;
                toAminoMsg(message: _113.MsgEditValidatorResponse): _113.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _113.MsgEditValidatorResponseProtoMsg): _113.MsgEditValidatorResponse;
                toProto(message: _113.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _113.MsgEditValidatorResponse): _113.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _113.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgDelegate;
                fromPartial(object: Partial<_113.MsgDelegate>): _113.MsgDelegate;
                fromAmino(object: _113.MsgDelegateAmino): _113.MsgDelegate;
                toAmino(message: _113.MsgDelegate): _113.MsgDelegateAmino;
                fromAminoMsg(object: _113.MsgDelegateAminoMsg): _113.MsgDelegate;
                toAminoMsg(message: _113.MsgDelegate): _113.MsgDelegateAminoMsg;
                fromProtoMsg(message: _113.MsgDelegateProtoMsg): _113.MsgDelegate;
                toProto(message: _113.MsgDelegate): Uint8Array;
                toProtoMsg(message: _113.MsgDelegate): _113.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _113.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.MsgDelegateResponse;
                fromPartial(_: Partial<_113.MsgDelegateResponse>): _113.MsgDelegateResponse;
                fromAmino(_: _113.MsgDelegateResponseAmino): _113.MsgDelegateResponse;
                toAmino(_: _113.MsgDelegateResponse): _113.MsgDelegateResponseAmino;
                fromAminoMsg(object: _113.MsgDelegateResponseAminoMsg): _113.MsgDelegateResponse;
                toAminoMsg(message: _113.MsgDelegateResponse): _113.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _113.MsgDelegateResponseProtoMsg): _113.MsgDelegateResponse;
                toProto(message: _113.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _113.MsgDelegateResponse): _113.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _113.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgBeginRedelegate;
                fromPartial(object: Partial<_113.MsgBeginRedelegate>): _113.MsgBeginRedelegate;
                fromAmino(object: _113.MsgBeginRedelegateAmino): _113.MsgBeginRedelegate;
                toAmino(message: _113.MsgBeginRedelegate): _113.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _113.MsgBeginRedelegateAminoMsg): _113.MsgBeginRedelegate;
                toAminoMsg(message: _113.MsgBeginRedelegate): _113.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _113.MsgBeginRedelegateProtoMsg): _113.MsgBeginRedelegate;
                toProto(message: _113.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _113.MsgBeginRedelegate): _113.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _113.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_113.MsgBeginRedelegateResponse>): _113.MsgBeginRedelegateResponse;
                fromAmino(object: _113.MsgBeginRedelegateResponseAmino): _113.MsgBeginRedelegateResponse;
                toAmino(message: _113.MsgBeginRedelegateResponse): _113.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _113.MsgBeginRedelegateResponseAminoMsg): _113.MsgBeginRedelegateResponse;
                toAminoMsg(message: _113.MsgBeginRedelegateResponse): _113.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _113.MsgBeginRedelegateResponseProtoMsg): _113.MsgBeginRedelegateResponse;
                toProto(message: _113.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _113.MsgBeginRedelegateResponse): _113.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _113.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgUndelegate;
                fromPartial(object: Partial<_113.MsgUndelegate>): _113.MsgUndelegate;
                fromAmino(object: _113.MsgUndelegateAmino): _113.MsgUndelegate;
                toAmino(message: _113.MsgUndelegate): _113.MsgUndelegateAmino;
                fromAminoMsg(object: _113.MsgUndelegateAminoMsg): _113.MsgUndelegate;
                toAminoMsg(message: _113.MsgUndelegate): _113.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _113.MsgUndelegateProtoMsg): _113.MsgUndelegate;
                toProto(message: _113.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _113.MsgUndelegate): _113.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _113.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgUndelegateResponse;
                fromPartial(object: Partial<_113.MsgUndelegateResponse>): _113.MsgUndelegateResponse;
                fromAmino(object: _113.MsgUndelegateResponseAmino): _113.MsgUndelegateResponse;
                toAmino(message: _113.MsgUndelegateResponse): _113.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _113.MsgUndelegateResponseAminoMsg): _113.MsgUndelegateResponse;
                toAminoMsg(message: _113.MsgUndelegateResponse): _113.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _113.MsgUndelegateResponseProtoMsg): _113.MsgUndelegateResponse;
                toProto(message: _113.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _113.MsgUndelegateResponse): _113.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _113.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_113.MsgCancelUnbondingDelegation>): _113.MsgCancelUnbondingDelegation;
                fromAmino(object: _113.MsgCancelUnbondingDelegationAmino): _113.MsgCancelUnbondingDelegation;
                toAmino(message: _113.MsgCancelUnbondingDelegation): _113.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _113.MsgCancelUnbondingDelegationAminoMsg): _113.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _113.MsgCancelUnbondingDelegation): _113.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _113.MsgCancelUnbondingDelegationProtoMsg): _113.MsgCancelUnbondingDelegation;
                toProto(message: _113.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _113.MsgCancelUnbondingDelegation): _113.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _113.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_113.MsgCancelUnbondingDelegationResponse>): _113.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _113.MsgCancelUnbondingDelegationResponseAmino): _113.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _113.MsgCancelUnbondingDelegationResponse): _113.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _113.MsgCancelUnbondingDelegationResponseAminoMsg): _113.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _113.MsgCancelUnbondingDelegationResponse): _113.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _113.MsgCancelUnbondingDelegationResponseProtoMsg): _113.MsgCancelUnbondingDelegationResponse;
                toProto(message: _113.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _113.MsgCancelUnbondingDelegationResponse): _113.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _112.BondStatus;
            bondStatusToJSON(object: _112.BondStatus): string;
            BondStatus: typeof _112.BondStatus;
            BondStatusSDKType: typeof _112.BondStatus;
            BondStatusAmino: typeof _112.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _112.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.HistoricalInfo;
                fromPartial(object: Partial<_112.HistoricalInfo>): _112.HistoricalInfo;
                fromAmino(object: _112.HistoricalInfoAmino): _112.HistoricalInfo;
                toAmino(message: _112.HistoricalInfo): _112.HistoricalInfoAmino;
                fromAminoMsg(object: _112.HistoricalInfoAminoMsg): _112.HistoricalInfo;
                toAminoMsg(message: _112.HistoricalInfo): _112.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _112.HistoricalInfoProtoMsg): _112.HistoricalInfo;
                toProto(message: _112.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _112.HistoricalInfo): _112.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _112.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.CommissionRates;
                fromPartial(object: Partial<_112.CommissionRates>): _112.CommissionRates;
                fromAmino(object: _112.CommissionRatesAmino): _112.CommissionRates;
                toAmino(message: _112.CommissionRates): _112.CommissionRatesAmino;
                fromAminoMsg(object: _112.CommissionRatesAminoMsg): _112.CommissionRates;
                toAminoMsg(message: _112.CommissionRates): _112.CommissionRatesAminoMsg;
                fromProtoMsg(message: _112.CommissionRatesProtoMsg): _112.CommissionRates;
                toProto(message: _112.CommissionRates): Uint8Array;
                toProtoMsg(message: _112.CommissionRates): _112.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _112.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Commission;
                fromPartial(object: Partial<_112.Commission>): _112.Commission;
                fromAmino(object: _112.CommissionAmino): _112.Commission;
                toAmino(message: _112.Commission): _112.CommissionAmino;
                fromAminoMsg(object: _112.CommissionAminoMsg): _112.Commission;
                toAminoMsg(message: _112.Commission): _112.CommissionAminoMsg;
                fromProtoMsg(message: _112.CommissionProtoMsg): _112.Commission;
                toProto(message: _112.Commission): Uint8Array;
                toProtoMsg(message: _112.Commission): _112.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _112.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Description;
                fromPartial(object: Partial<_112.Description>): _112.Description;
                fromAmino(object: _112.DescriptionAmino): _112.Description;
                toAmino(message: _112.Description): _112.DescriptionAmino;
                fromAminoMsg(object: _112.DescriptionAminoMsg): _112.Description;
                toAminoMsg(message: _112.Description): _112.DescriptionAminoMsg;
                fromProtoMsg(message: _112.DescriptionProtoMsg): _112.Description;
                toProto(message: _112.Description): Uint8Array;
                toProtoMsg(message: _112.Description): _112.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _112.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Validator;
                fromPartial(object: Partial<_112.Validator>): _112.Validator;
                fromAmino(object: _112.ValidatorAmino): _112.Validator;
                toAmino(message: _112.Validator): _112.ValidatorAmino;
                fromAminoMsg(object: _112.ValidatorAminoMsg): _112.Validator;
                toAminoMsg(message: _112.Validator): _112.ValidatorAminoMsg;
                fromProtoMsg(message: _112.ValidatorProtoMsg): _112.Validator;
                toProto(message: _112.Validator): Uint8Array;
                toProtoMsg(message: _112.Validator): _112.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _112.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.ValAddresses;
                fromPartial(object: Partial<_112.ValAddresses>): _112.ValAddresses;
                fromAmino(object: _112.ValAddressesAmino): _112.ValAddresses;
                toAmino(message: _112.ValAddresses): _112.ValAddressesAmino;
                fromAminoMsg(object: _112.ValAddressesAminoMsg): _112.ValAddresses;
                toAminoMsg(message: _112.ValAddresses): _112.ValAddressesAminoMsg;
                fromProtoMsg(message: _112.ValAddressesProtoMsg): _112.ValAddresses;
                toProto(message: _112.ValAddresses): Uint8Array;
                toProtoMsg(message: _112.ValAddresses): _112.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _112.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.DVPair;
                fromPartial(object: Partial<_112.DVPair>): _112.DVPair;
                fromAmino(object: _112.DVPairAmino): _112.DVPair;
                toAmino(message: _112.DVPair): _112.DVPairAmino;
                fromAminoMsg(object: _112.DVPairAminoMsg): _112.DVPair;
                toAminoMsg(message: _112.DVPair): _112.DVPairAminoMsg;
                fromProtoMsg(message: _112.DVPairProtoMsg): _112.DVPair;
                toProto(message: _112.DVPair): Uint8Array;
                toProtoMsg(message: _112.DVPair): _112.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _112.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.DVPairs;
                fromPartial(object: Partial<_112.DVPairs>): _112.DVPairs;
                fromAmino(object: _112.DVPairsAmino): _112.DVPairs;
                toAmino(message: _112.DVPairs): _112.DVPairsAmino;
                fromAminoMsg(object: _112.DVPairsAminoMsg): _112.DVPairs;
                toAminoMsg(message: _112.DVPairs): _112.DVPairsAminoMsg;
                fromProtoMsg(message: _112.DVPairsProtoMsg): _112.DVPairs;
                toProto(message: _112.DVPairs): Uint8Array;
                toProtoMsg(message: _112.DVPairs): _112.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _112.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.DVVTriplet;
                fromPartial(object: Partial<_112.DVVTriplet>): _112.DVVTriplet;
                fromAmino(object: _112.DVVTripletAmino): _112.DVVTriplet;
                toAmino(message: _112.DVVTriplet): _112.DVVTripletAmino;
                fromAminoMsg(object: _112.DVVTripletAminoMsg): _112.DVVTriplet;
                toAminoMsg(message: _112.DVVTriplet): _112.DVVTripletAminoMsg;
                fromProtoMsg(message: _112.DVVTripletProtoMsg): _112.DVVTriplet;
                toProto(message: _112.DVVTriplet): Uint8Array;
                toProtoMsg(message: _112.DVVTriplet): _112.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _112.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.DVVTriplets;
                fromPartial(object: Partial<_112.DVVTriplets>): _112.DVVTriplets;
                fromAmino(object: _112.DVVTripletsAmino): _112.DVVTriplets;
                toAmino(message: _112.DVVTriplets): _112.DVVTripletsAmino;
                fromAminoMsg(object: _112.DVVTripletsAminoMsg): _112.DVVTriplets;
                toAminoMsg(message: _112.DVVTriplets): _112.DVVTripletsAminoMsg;
                fromProtoMsg(message: _112.DVVTripletsProtoMsg): _112.DVVTriplets;
                toProto(message: _112.DVVTriplets): Uint8Array;
                toProtoMsg(message: _112.DVVTriplets): _112.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _112.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Delegation;
                fromPartial(object: Partial<_112.Delegation>): _112.Delegation;
                fromAmino(object: _112.DelegationAmino): _112.Delegation;
                toAmino(message: _112.Delegation): _112.DelegationAmino;
                fromAminoMsg(object: _112.DelegationAminoMsg): _112.Delegation;
                toAminoMsg(message: _112.Delegation): _112.DelegationAminoMsg;
                fromProtoMsg(message: _112.DelegationProtoMsg): _112.Delegation;
                toProto(message: _112.Delegation): Uint8Array;
                toProtoMsg(message: _112.Delegation): _112.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _112.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.UnbondingDelegation;
                fromPartial(object: Partial<_112.UnbondingDelegation>): _112.UnbondingDelegation;
                fromAmino(object: _112.UnbondingDelegationAmino): _112.UnbondingDelegation;
                toAmino(message: _112.UnbondingDelegation): _112.UnbondingDelegationAmino;
                fromAminoMsg(object: _112.UnbondingDelegationAminoMsg): _112.UnbondingDelegation;
                toAminoMsg(message: _112.UnbondingDelegation): _112.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _112.UnbondingDelegationProtoMsg): _112.UnbondingDelegation;
                toProto(message: _112.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _112.UnbondingDelegation): _112.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _112.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.UnbondingDelegationEntry;
                fromPartial(object: Partial<_112.UnbondingDelegationEntry>): _112.UnbondingDelegationEntry;
                fromAmino(object: _112.UnbondingDelegationEntryAmino): _112.UnbondingDelegationEntry;
                toAmino(message: _112.UnbondingDelegationEntry): _112.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _112.UnbondingDelegationEntryAminoMsg): _112.UnbondingDelegationEntry;
                toAminoMsg(message: _112.UnbondingDelegationEntry): _112.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _112.UnbondingDelegationEntryProtoMsg): _112.UnbondingDelegationEntry;
                toProto(message: _112.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _112.UnbondingDelegationEntry): _112.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _112.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.RedelegationEntry;
                fromPartial(object: Partial<_112.RedelegationEntry>): _112.RedelegationEntry;
                fromAmino(object: _112.RedelegationEntryAmino): _112.RedelegationEntry;
                toAmino(message: _112.RedelegationEntry): _112.RedelegationEntryAmino;
                fromAminoMsg(object: _112.RedelegationEntryAminoMsg): _112.RedelegationEntry;
                toAminoMsg(message: _112.RedelegationEntry): _112.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _112.RedelegationEntryProtoMsg): _112.RedelegationEntry;
                toProto(message: _112.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _112.RedelegationEntry): _112.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _112.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Redelegation;
                fromPartial(object: Partial<_112.Redelegation>): _112.Redelegation;
                fromAmino(object: _112.RedelegationAmino): _112.Redelegation;
                toAmino(message: _112.Redelegation): _112.RedelegationAmino;
                fromAminoMsg(object: _112.RedelegationAminoMsg): _112.Redelegation;
                toAminoMsg(message: _112.Redelegation): _112.RedelegationAminoMsg;
                fromProtoMsg(message: _112.RedelegationProtoMsg): _112.Redelegation;
                toProto(message: _112.Redelegation): Uint8Array;
                toProtoMsg(message: _112.Redelegation): _112.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _112.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Params;
                fromPartial(object: Partial<_112.Params>): _112.Params;
                fromAmino(object: _112.ParamsAmino): _112.Params;
                toAmino(message: _112.Params): _112.ParamsAmino;
                fromAminoMsg(object: _112.ParamsAminoMsg): _112.Params;
                toAminoMsg(message: _112.Params): _112.ParamsAminoMsg;
                fromProtoMsg(message: _112.ParamsProtoMsg): _112.Params;
                toProto(message: _112.Params): Uint8Array;
                toProtoMsg(message: _112.Params): _112.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _112.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.DelegationResponse;
                fromPartial(object: Partial<_112.DelegationResponse>): _112.DelegationResponse;
                fromAmino(object: _112.DelegationResponseAmino): _112.DelegationResponse;
                toAmino(message: _112.DelegationResponse): _112.DelegationResponseAmino;
                fromAminoMsg(object: _112.DelegationResponseAminoMsg): _112.DelegationResponse;
                toAminoMsg(message: _112.DelegationResponse): _112.DelegationResponseAminoMsg;
                fromProtoMsg(message: _112.DelegationResponseProtoMsg): _112.DelegationResponse;
                toProto(message: _112.DelegationResponse): Uint8Array;
                toProtoMsg(message: _112.DelegationResponse): _112.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _112.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.RedelegationEntryResponse;
                fromPartial(object: Partial<_112.RedelegationEntryResponse>): _112.RedelegationEntryResponse;
                fromAmino(object: _112.RedelegationEntryResponseAmino): _112.RedelegationEntryResponse;
                toAmino(message: _112.RedelegationEntryResponse): _112.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _112.RedelegationEntryResponseAminoMsg): _112.RedelegationEntryResponse;
                toAminoMsg(message: _112.RedelegationEntryResponse): _112.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _112.RedelegationEntryResponseProtoMsg): _112.RedelegationEntryResponse;
                toProto(message: _112.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _112.RedelegationEntryResponse): _112.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _112.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.RedelegationResponse;
                fromPartial(object: Partial<_112.RedelegationResponse>): _112.RedelegationResponse;
                fromAmino(object: _112.RedelegationResponseAmino): _112.RedelegationResponse;
                toAmino(message: _112.RedelegationResponse): _112.RedelegationResponseAmino;
                fromAminoMsg(object: _112.RedelegationResponseAminoMsg): _112.RedelegationResponse;
                toAminoMsg(message: _112.RedelegationResponse): _112.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _112.RedelegationResponseProtoMsg): _112.RedelegationResponse;
                toProto(message: _112.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _112.RedelegationResponse): _112.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _112.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Pool;
                fromPartial(object: Partial<_112.Pool>): _112.Pool;
                fromAmino(object: _112.PoolAmino): _112.Pool;
                toAmino(message: _112.Pool): _112.PoolAmino;
                fromAminoMsg(object: _112.PoolAminoMsg): _112.Pool;
                toAminoMsg(message: _112.Pool): _112.PoolAminoMsg;
                fromProtoMsg(message: _112.PoolProtoMsg): _112.Pool;
                toProto(message: _112.Pool): Uint8Array;
                toProtoMsg(message: _112.Pool): _112.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _111.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryValidatorsRequest;
                fromPartial(object: Partial<_111.QueryValidatorsRequest>): _111.QueryValidatorsRequest;
                fromAmino(object: _111.QueryValidatorsRequestAmino): _111.QueryValidatorsRequest;
                toAmino(message: _111.QueryValidatorsRequest): _111.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _111.QueryValidatorsRequestAminoMsg): _111.QueryValidatorsRequest;
                toAminoMsg(message: _111.QueryValidatorsRequest): _111.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryValidatorsRequestProtoMsg): _111.QueryValidatorsRequest;
                toProto(message: _111.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryValidatorsRequest): _111.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _111.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryValidatorsResponse;
                fromPartial(object: Partial<_111.QueryValidatorsResponse>): _111.QueryValidatorsResponse;
                fromAmino(object: _111.QueryValidatorsResponseAmino): _111.QueryValidatorsResponse;
                toAmino(message: _111.QueryValidatorsResponse): _111.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _111.QueryValidatorsResponseAminoMsg): _111.QueryValidatorsResponse;
                toAminoMsg(message: _111.QueryValidatorsResponse): _111.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryValidatorsResponseProtoMsg): _111.QueryValidatorsResponse;
                toProto(message: _111.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryValidatorsResponse): _111.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _111.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryValidatorRequest;
                fromPartial(object: Partial<_111.QueryValidatorRequest>): _111.QueryValidatorRequest;
                fromAmino(object: _111.QueryValidatorRequestAmino): _111.QueryValidatorRequest;
                toAmino(message: _111.QueryValidatorRequest): _111.QueryValidatorRequestAmino;
                fromAminoMsg(object: _111.QueryValidatorRequestAminoMsg): _111.QueryValidatorRequest;
                toAminoMsg(message: _111.QueryValidatorRequest): _111.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _111.QueryValidatorRequestProtoMsg): _111.QueryValidatorRequest;
                toProto(message: _111.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _111.QueryValidatorRequest): _111.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _111.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryValidatorResponse;
                fromPartial(object: Partial<_111.QueryValidatorResponse>): _111.QueryValidatorResponse;
                fromAmino(object: _111.QueryValidatorResponseAmino): _111.QueryValidatorResponse;
                toAmino(message: _111.QueryValidatorResponse): _111.QueryValidatorResponseAmino;
                fromAminoMsg(object: _111.QueryValidatorResponseAminoMsg): _111.QueryValidatorResponse;
                toAminoMsg(message: _111.QueryValidatorResponse): _111.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _111.QueryValidatorResponseProtoMsg): _111.QueryValidatorResponse;
                toProto(message: _111.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _111.QueryValidatorResponse): _111.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _111.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_111.QueryValidatorDelegationsRequest>): _111.QueryValidatorDelegationsRequest;
                fromAmino(object: _111.QueryValidatorDelegationsRequestAmino): _111.QueryValidatorDelegationsRequest;
                toAmino(message: _111.QueryValidatorDelegationsRequest): _111.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _111.QueryValidatorDelegationsRequestAminoMsg): _111.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _111.QueryValidatorDelegationsRequest): _111.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryValidatorDelegationsRequestProtoMsg): _111.QueryValidatorDelegationsRequest;
                toProto(message: _111.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryValidatorDelegationsRequest): _111.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _111.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_111.QueryValidatorDelegationsResponse>): _111.QueryValidatorDelegationsResponse;
                fromAmino(object: _111.QueryValidatorDelegationsResponseAmino): _111.QueryValidatorDelegationsResponse;
                toAmino(message: _111.QueryValidatorDelegationsResponse): _111.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _111.QueryValidatorDelegationsResponseAminoMsg): _111.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _111.QueryValidatorDelegationsResponse): _111.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryValidatorDelegationsResponseProtoMsg): _111.QueryValidatorDelegationsResponse;
                toProto(message: _111.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryValidatorDelegationsResponse): _111.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _111.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_111.QueryValidatorUnbondingDelegationsRequest>): _111.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _111.QueryValidatorUnbondingDelegationsRequestAmino): _111.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _111.QueryValidatorUnbondingDelegationsRequest): _111.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _111.QueryValidatorUnbondingDelegationsRequestAminoMsg): _111.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _111.QueryValidatorUnbondingDelegationsRequest): _111.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryValidatorUnbondingDelegationsRequestProtoMsg): _111.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _111.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryValidatorUnbondingDelegationsRequest): _111.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _111.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_111.QueryValidatorUnbondingDelegationsResponse>): _111.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _111.QueryValidatorUnbondingDelegationsResponseAmino): _111.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _111.QueryValidatorUnbondingDelegationsResponse): _111.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _111.QueryValidatorUnbondingDelegationsResponseAminoMsg): _111.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _111.QueryValidatorUnbondingDelegationsResponse): _111.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryValidatorUnbondingDelegationsResponseProtoMsg): _111.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _111.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryValidatorUnbondingDelegationsResponse): _111.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _111.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryDelegationRequest;
                fromPartial(object: Partial<_111.QueryDelegationRequest>): _111.QueryDelegationRequest;
                fromAmino(object: _111.QueryDelegationRequestAmino): _111.QueryDelegationRequest;
                toAmino(message: _111.QueryDelegationRequest): _111.QueryDelegationRequestAmino;
                fromAminoMsg(object: _111.QueryDelegationRequestAminoMsg): _111.QueryDelegationRequest;
                toAminoMsg(message: _111.QueryDelegationRequest): _111.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _111.QueryDelegationRequestProtoMsg): _111.QueryDelegationRequest;
                toProto(message: _111.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _111.QueryDelegationRequest): _111.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _111.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryDelegationResponse;
                fromPartial(object: Partial<_111.QueryDelegationResponse>): _111.QueryDelegationResponse;
                fromAmino(object: _111.QueryDelegationResponseAmino): _111.QueryDelegationResponse;
                toAmino(message: _111.QueryDelegationResponse): _111.QueryDelegationResponseAmino;
                fromAminoMsg(object: _111.QueryDelegationResponseAminoMsg): _111.QueryDelegationResponse;
                toAminoMsg(message: _111.QueryDelegationResponse): _111.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _111.QueryDelegationResponseProtoMsg): _111.QueryDelegationResponse;
                toProto(message: _111.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _111.QueryDelegationResponse): _111.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _111.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_111.QueryUnbondingDelegationRequest>): _111.QueryUnbondingDelegationRequest;
                fromAmino(object: _111.QueryUnbondingDelegationRequestAmino): _111.QueryUnbondingDelegationRequest;
                toAmino(message: _111.QueryUnbondingDelegationRequest): _111.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _111.QueryUnbondingDelegationRequestAminoMsg): _111.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _111.QueryUnbondingDelegationRequest): _111.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _111.QueryUnbondingDelegationRequestProtoMsg): _111.QueryUnbondingDelegationRequest;
                toProto(message: _111.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _111.QueryUnbondingDelegationRequest): _111.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _111.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_111.QueryUnbondingDelegationResponse>): _111.QueryUnbondingDelegationResponse;
                fromAmino(object: _111.QueryUnbondingDelegationResponseAmino): _111.QueryUnbondingDelegationResponse;
                toAmino(message: _111.QueryUnbondingDelegationResponse): _111.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _111.QueryUnbondingDelegationResponseAminoMsg): _111.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _111.QueryUnbondingDelegationResponse): _111.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _111.QueryUnbondingDelegationResponseProtoMsg): _111.QueryUnbondingDelegationResponse;
                toProto(message: _111.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _111.QueryUnbondingDelegationResponse): _111.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _111.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_111.QueryDelegatorDelegationsRequest>): _111.QueryDelegatorDelegationsRequest;
                fromAmino(object: _111.QueryDelegatorDelegationsRequestAmino): _111.QueryDelegatorDelegationsRequest;
                toAmino(message: _111.QueryDelegatorDelegationsRequest): _111.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _111.QueryDelegatorDelegationsRequestAminoMsg): _111.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _111.QueryDelegatorDelegationsRequest): _111.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryDelegatorDelegationsRequestProtoMsg): _111.QueryDelegatorDelegationsRequest;
                toProto(message: _111.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryDelegatorDelegationsRequest): _111.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _111.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_111.QueryDelegatorDelegationsResponse>): _111.QueryDelegatorDelegationsResponse;
                fromAmino(object: _111.QueryDelegatorDelegationsResponseAmino): _111.QueryDelegatorDelegationsResponse;
                toAmino(message: _111.QueryDelegatorDelegationsResponse): _111.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _111.QueryDelegatorDelegationsResponseAminoMsg): _111.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _111.QueryDelegatorDelegationsResponse): _111.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryDelegatorDelegationsResponseProtoMsg): _111.QueryDelegatorDelegationsResponse;
                toProto(message: _111.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryDelegatorDelegationsResponse): _111.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _111.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_111.QueryDelegatorUnbondingDelegationsRequest>): _111.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _111.QueryDelegatorUnbondingDelegationsRequestAmino): _111.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _111.QueryDelegatorUnbondingDelegationsRequest): _111.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _111.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _111.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _111.QueryDelegatorUnbondingDelegationsRequest): _111.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _111.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _111.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryDelegatorUnbondingDelegationsRequest): _111.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _111.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_111.QueryDelegatorUnbondingDelegationsResponse>): _111.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _111.QueryDelegatorUnbondingDelegationsResponseAmino): _111.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _111.QueryDelegatorUnbondingDelegationsResponse): _111.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _111.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _111.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _111.QueryDelegatorUnbondingDelegationsResponse): _111.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _111.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _111.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryDelegatorUnbondingDelegationsResponse): _111.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _111.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryRedelegationsRequest;
                fromPartial(object: Partial<_111.QueryRedelegationsRequest>): _111.QueryRedelegationsRequest;
                fromAmino(object: _111.QueryRedelegationsRequestAmino): _111.QueryRedelegationsRequest;
                toAmino(message: _111.QueryRedelegationsRequest): _111.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _111.QueryRedelegationsRequestAminoMsg): _111.QueryRedelegationsRequest;
                toAminoMsg(message: _111.QueryRedelegationsRequest): _111.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryRedelegationsRequestProtoMsg): _111.QueryRedelegationsRequest;
                toProto(message: _111.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryRedelegationsRequest): _111.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _111.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryRedelegationsResponse;
                fromPartial(object: Partial<_111.QueryRedelegationsResponse>): _111.QueryRedelegationsResponse;
                fromAmino(object: _111.QueryRedelegationsResponseAmino): _111.QueryRedelegationsResponse;
                toAmino(message: _111.QueryRedelegationsResponse): _111.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _111.QueryRedelegationsResponseAminoMsg): _111.QueryRedelegationsResponse;
                toAminoMsg(message: _111.QueryRedelegationsResponse): _111.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryRedelegationsResponseProtoMsg): _111.QueryRedelegationsResponse;
                toProto(message: _111.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryRedelegationsResponse): _111.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _111.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorsRequest>): _111.QueryDelegatorValidatorsRequest;
                fromAmino(object: _111.QueryDelegatorValidatorsRequestAmino): _111.QueryDelegatorValidatorsRequest;
                toAmino(message: _111.QueryDelegatorValidatorsRequest): _111.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _111.QueryDelegatorValidatorsRequestAminoMsg): _111.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _111.QueryDelegatorValidatorsRequest): _111.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryDelegatorValidatorsRequestProtoMsg): _111.QueryDelegatorValidatorsRequest;
                toProto(message: _111.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryDelegatorValidatorsRequest): _111.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _111.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorsResponse>): _111.QueryDelegatorValidatorsResponse;
                fromAmino(object: _111.QueryDelegatorValidatorsResponseAmino): _111.QueryDelegatorValidatorsResponse;
                toAmino(message: _111.QueryDelegatorValidatorsResponse): _111.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _111.QueryDelegatorValidatorsResponseAminoMsg): _111.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _111.QueryDelegatorValidatorsResponse): _111.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryDelegatorValidatorsResponseProtoMsg): _111.QueryDelegatorValidatorsResponse;
                toProto(message: _111.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryDelegatorValidatorsResponse): _111.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _111.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorRequest>): _111.QueryDelegatorValidatorRequest;
                fromAmino(object: _111.QueryDelegatorValidatorRequestAmino): _111.QueryDelegatorValidatorRequest;
                toAmino(message: _111.QueryDelegatorValidatorRequest): _111.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _111.QueryDelegatorValidatorRequestAminoMsg): _111.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _111.QueryDelegatorValidatorRequest): _111.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _111.QueryDelegatorValidatorRequestProtoMsg): _111.QueryDelegatorValidatorRequest;
                toProto(message: _111.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _111.QueryDelegatorValidatorRequest): _111.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _111.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorResponse>): _111.QueryDelegatorValidatorResponse;
                fromAmino(object: _111.QueryDelegatorValidatorResponseAmino): _111.QueryDelegatorValidatorResponse;
                toAmino(message: _111.QueryDelegatorValidatorResponse): _111.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _111.QueryDelegatorValidatorResponseAminoMsg): _111.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _111.QueryDelegatorValidatorResponse): _111.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _111.QueryDelegatorValidatorResponseProtoMsg): _111.QueryDelegatorValidatorResponse;
                toProto(message: _111.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _111.QueryDelegatorValidatorResponse): _111.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _111.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_111.QueryHistoricalInfoRequest>): _111.QueryHistoricalInfoRequest;
                fromAmino(object: _111.QueryHistoricalInfoRequestAmino): _111.QueryHistoricalInfoRequest;
                toAmino(message: _111.QueryHistoricalInfoRequest): _111.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _111.QueryHistoricalInfoRequestAminoMsg): _111.QueryHistoricalInfoRequest;
                toAminoMsg(message: _111.QueryHistoricalInfoRequest): _111.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _111.QueryHistoricalInfoRequestProtoMsg): _111.QueryHistoricalInfoRequest;
                toProto(message: _111.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _111.QueryHistoricalInfoRequest): _111.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _111.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_111.QueryHistoricalInfoResponse>): _111.QueryHistoricalInfoResponse;
                fromAmino(object: _111.QueryHistoricalInfoResponseAmino): _111.QueryHistoricalInfoResponse;
                toAmino(message: _111.QueryHistoricalInfoResponse): _111.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _111.QueryHistoricalInfoResponseAminoMsg): _111.QueryHistoricalInfoResponse;
                toAminoMsg(message: _111.QueryHistoricalInfoResponse): _111.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _111.QueryHistoricalInfoResponseProtoMsg): _111.QueryHistoricalInfoResponse;
                toProto(message: _111.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _111.QueryHistoricalInfoResponse): _111.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _111.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.QueryPoolRequest;
                fromPartial(_: Partial<_111.QueryPoolRequest>): _111.QueryPoolRequest;
                fromAmino(_: _111.QueryPoolRequestAmino): _111.QueryPoolRequest;
                toAmino(_: _111.QueryPoolRequest): _111.QueryPoolRequestAmino;
                fromAminoMsg(object: _111.QueryPoolRequestAminoMsg): _111.QueryPoolRequest;
                toAminoMsg(message: _111.QueryPoolRequest): _111.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _111.QueryPoolRequestProtoMsg): _111.QueryPoolRequest;
                toProto(message: _111.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _111.QueryPoolRequest): _111.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _111.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryPoolResponse;
                fromPartial(object: Partial<_111.QueryPoolResponse>): _111.QueryPoolResponse;
                fromAmino(object: _111.QueryPoolResponseAmino): _111.QueryPoolResponse;
                toAmino(message: _111.QueryPoolResponse): _111.QueryPoolResponseAmino;
                fromAminoMsg(object: _111.QueryPoolResponseAminoMsg): _111.QueryPoolResponse;
                toAminoMsg(message: _111.QueryPoolResponse): _111.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _111.QueryPoolResponseProtoMsg): _111.QueryPoolResponse;
                toProto(message: _111.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _111.QueryPoolResponse): _111.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _111.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.QueryParamsRequest;
                fromPartial(_: Partial<_111.QueryParamsRequest>): _111.QueryParamsRequest;
                fromAmino(_: _111.QueryParamsRequestAmino): _111.QueryParamsRequest;
                toAmino(_: _111.QueryParamsRequest): _111.QueryParamsRequestAmino;
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
            GenesisState: {
                typeUrl: string;
                encode(message: _110.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.GenesisState;
                fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
                fromAmino(object: _110.GenesisStateAmino): _110.GenesisState;
                toAmino(message: _110.GenesisState): _110.GenesisStateAmino;
                fromAminoMsg(object: _110.GenesisStateAminoMsg): _110.GenesisState;
                toAminoMsg(message: _110.GenesisState): _110.GenesisStateAminoMsg;
                fromProtoMsg(message: _110.GenesisStateProtoMsg): _110.GenesisState;
                toProto(message: _110.GenesisState): Uint8Array;
                toProtoMsg(message: _110.GenesisState): _110.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _110.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.LastValidatorPower;
                fromPartial(object: Partial<_110.LastValidatorPower>): _110.LastValidatorPower;
                fromAmino(object: _110.LastValidatorPowerAmino): _110.LastValidatorPower;
                toAmino(message: _110.LastValidatorPower): _110.LastValidatorPowerAmino;
                fromAminoMsg(object: _110.LastValidatorPowerAminoMsg): _110.LastValidatorPower;
                toAminoMsg(message: _110.LastValidatorPower): _110.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _110.LastValidatorPowerProtoMsg): _110.LastValidatorPower;
                toProto(message: _110.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _110.LastValidatorPower): _110.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _109.AuthorizationType;
            authorizationTypeToJSON(object: _109.AuthorizationType): string;
            AuthorizationType: typeof _109.AuthorizationType;
            AuthorizationTypeSDKType: typeof _109.AuthorizationType;
            AuthorizationTypeAmino: typeof _109.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _109.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.StakeAuthorization;
                fromPartial(object: Partial<_109.StakeAuthorization>): _109.StakeAuthorization;
                fromAmino(object: _109.StakeAuthorizationAmino): _109.StakeAuthorization;
                toAmino(message: _109.StakeAuthorization): _109.StakeAuthorizationAmino;
                fromAminoMsg(object: _109.StakeAuthorizationAminoMsg): _109.StakeAuthorization;
                toAminoMsg(message: _109.StakeAuthorization): _109.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _109.StakeAuthorizationProtoMsg): _109.StakeAuthorization;
                toProto(message: _109.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _109.StakeAuthorization): _109.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _109.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.StakeAuthorization_Validators;
                fromPartial(object: Partial<_109.StakeAuthorization_Validators>): _109.StakeAuthorization_Validators;
                fromAmino(object: _109.StakeAuthorization_ValidatorsAmino): _109.StakeAuthorization_Validators;
                toAmino(message: _109.StakeAuthorization_Validators): _109.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _109.StakeAuthorization_ValidatorsAminoMsg): _109.StakeAuthorization_Validators;
                toAminoMsg(message: _109.StakeAuthorization_Validators): _109.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _109.StakeAuthorization_ValidatorsProtoMsg): _109.StakeAuthorization_Validators;
                toProto(message: _109.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _109.StakeAuthorization_Validators): _109.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _114.SignMode;
                signModeToJSON(object: _114.SignMode): string;
                SignMode: typeof _114.SignMode;
                SignModeSDKType: typeof _114.SignMode;
                SignModeAmino: typeof _114.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _114.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.SignatureDescriptors;
                    fromPartial(object: Partial<_114.SignatureDescriptors>): _114.SignatureDescriptors;
                    fromAmino(object: _114.SignatureDescriptorsAmino): _114.SignatureDescriptors;
                    toAmino(message: _114.SignatureDescriptors): _114.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _114.SignatureDescriptorsAminoMsg): _114.SignatureDescriptors;
                    toAminoMsg(message: _114.SignatureDescriptors): _114.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _114.SignatureDescriptorsProtoMsg): _114.SignatureDescriptors;
                    toProto(message: _114.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _114.SignatureDescriptors): _114.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _114.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.SignatureDescriptor;
                    fromPartial(object: Partial<_114.SignatureDescriptor>): _114.SignatureDescriptor;
                    fromAmino(object: _114.SignatureDescriptorAmino): _114.SignatureDescriptor;
                    toAmino(message: _114.SignatureDescriptor): _114.SignatureDescriptorAmino;
                    fromAminoMsg(object: _114.SignatureDescriptorAminoMsg): _114.SignatureDescriptor;
                    toAminoMsg(message: _114.SignatureDescriptor): _114.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _114.SignatureDescriptorProtoMsg): _114.SignatureDescriptor;
                    toProto(message: _114.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _114.SignatureDescriptor): _114.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _114.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_114.SignatureDescriptor_Data>): _114.SignatureDescriptor_Data;
                    fromAmino(object: _114.SignatureDescriptor_DataAmino): _114.SignatureDescriptor_Data;
                    toAmino(message: _114.SignatureDescriptor_Data): _114.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _114.SignatureDescriptor_DataAminoMsg): _114.SignatureDescriptor_Data;
                    toAminoMsg(message: _114.SignatureDescriptor_Data): _114.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _114.SignatureDescriptor_DataProtoMsg): _114.SignatureDescriptor_Data;
                    toProto(message: _114.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _114.SignatureDescriptor_Data): _114.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _114.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_114.SignatureDescriptor_Data_Single>): _114.SignatureDescriptor_Data_Single;
                    fromAmino(object: _114.SignatureDescriptor_Data_SingleAmino): _114.SignatureDescriptor_Data_Single;
                    toAmino(message: _114.SignatureDescriptor_Data_Single): _114.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _114.SignatureDescriptor_Data_SingleAminoMsg): _114.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _114.SignatureDescriptor_Data_Single): _114.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _114.SignatureDescriptor_Data_SingleProtoMsg): _114.SignatureDescriptor_Data_Single;
                    toProto(message: _114.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _114.SignatureDescriptor_Data_Single): _114.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _114.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_114.SignatureDescriptor_Data_Multi>): _114.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _114.SignatureDescriptor_Data_MultiAmino): _114.SignatureDescriptor_Data_Multi;
                    toAmino(message: _114.SignatureDescriptor_Data_Multi): _114.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _114.SignatureDescriptor_Data_MultiAminoMsg): _114.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _114.SignatureDescriptor_Data_Multi): _114.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _114.SignatureDescriptor_Data_MultiProtoMsg): _114.SignatureDescriptor_Data_Multi;
                    toProto(message: _114.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _114.SignatureDescriptor_Data_Multi): _114.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _214.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _115.SimulateRequest): Promise<_115.SimulateResponse>;
                getTx(request: _115.GetTxRequest): Promise<_115.GetTxResponse>;
                broadcastTx(request: _115.BroadcastTxRequest): Promise<_115.BroadcastTxResponse>;
                getTxsEvent(request: _115.GetTxsEventRequest): Promise<_115.GetTxsEventResponse>;
                getBlockWithTxs(request: _115.GetBlockWithTxsRequest): Promise<_115.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _116.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.Tx;
                fromPartial(object: Partial<_116.Tx>): _116.Tx;
                fromAmino(object: _116.TxAmino): _116.Tx;
                toAmino(message: _116.Tx): _116.TxAmino;
                fromAminoMsg(object: _116.TxAminoMsg): _116.Tx;
                toAminoMsg(message: _116.Tx): _116.TxAminoMsg;
                fromProtoMsg(message: _116.TxProtoMsg): _116.Tx;
                toProto(message: _116.Tx): Uint8Array;
                toProtoMsg(message: _116.Tx): _116.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _116.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.TxRaw;
                fromPartial(object: Partial<_116.TxRaw>): _116.TxRaw;
                fromAmino(object: _116.TxRawAmino): _116.TxRaw;
                toAmino(message: _116.TxRaw): _116.TxRawAmino;
                fromAminoMsg(object: _116.TxRawAminoMsg): _116.TxRaw;
                toAminoMsg(message: _116.TxRaw): _116.TxRawAminoMsg;
                fromProtoMsg(message: _116.TxRawProtoMsg): _116.TxRaw;
                toProto(message: _116.TxRaw): Uint8Array;
                toProtoMsg(message: _116.TxRaw): _116.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _116.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.SignDoc;
                fromPartial(object: Partial<_116.SignDoc>): _116.SignDoc;
                fromAmino(object: _116.SignDocAmino): _116.SignDoc;
                toAmino(message: _116.SignDoc): _116.SignDocAmino;
                fromAminoMsg(object: _116.SignDocAminoMsg): _116.SignDoc;
                toAminoMsg(message: _116.SignDoc): _116.SignDocAminoMsg;
                fromProtoMsg(message: _116.SignDocProtoMsg): _116.SignDoc;
                toProto(message: _116.SignDoc): Uint8Array;
                toProtoMsg(message: _116.SignDoc): _116.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _116.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.SignDocDirectAux;
                fromPartial(object: Partial<_116.SignDocDirectAux>): _116.SignDocDirectAux;
                fromAmino(object: _116.SignDocDirectAuxAmino): _116.SignDocDirectAux;
                toAmino(message: _116.SignDocDirectAux): _116.SignDocDirectAuxAmino;
                fromAminoMsg(object: _116.SignDocDirectAuxAminoMsg): _116.SignDocDirectAux;
                toAminoMsg(message: _116.SignDocDirectAux): _116.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _116.SignDocDirectAuxProtoMsg): _116.SignDocDirectAux;
                toProto(message: _116.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _116.SignDocDirectAux): _116.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _116.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.TxBody;
                fromPartial(object: Partial<_116.TxBody>): _116.TxBody;
                fromAmino(object: _116.TxBodyAmino): _116.TxBody;
                toAmino(message: _116.TxBody): _116.TxBodyAmino;
                fromAminoMsg(object: _116.TxBodyAminoMsg): _116.TxBody;
                toAminoMsg(message: _116.TxBody): _116.TxBodyAminoMsg;
                fromProtoMsg(message: _116.TxBodyProtoMsg): _116.TxBody;
                toProto(message: _116.TxBody): Uint8Array;
                toProtoMsg(message: _116.TxBody): _116.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _116.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.AuthInfo;
                fromPartial(object: Partial<_116.AuthInfo>): _116.AuthInfo;
                fromAmino(object: _116.AuthInfoAmino): _116.AuthInfo;
                toAmino(message: _116.AuthInfo): _116.AuthInfoAmino;
                fromAminoMsg(object: _116.AuthInfoAminoMsg): _116.AuthInfo;
                toAminoMsg(message: _116.AuthInfo): _116.AuthInfoAminoMsg;
                fromProtoMsg(message: _116.AuthInfoProtoMsg): _116.AuthInfo;
                toProto(message: _116.AuthInfo): Uint8Array;
                toProtoMsg(message: _116.AuthInfo): _116.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _116.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.SignerInfo;
                fromPartial(object: Partial<_116.SignerInfo>): _116.SignerInfo;
                fromAmino(object: _116.SignerInfoAmino): _116.SignerInfo;
                toAmino(message: _116.SignerInfo): _116.SignerInfoAmino;
                fromAminoMsg(object: _116.SignerInfoAminoMsg): _116.SignerInfo;
                toAminoMsg(message: _116.SignerInfo): _116.SignerInfoAminoMsg;
                fromProtoMsg(message: _116.SignerInfoProtoMsg): _116.SignerInfo;
                toProto(message: _116.SignerInfo): Uint8Array;
                toProtoMsg(message: _116.SignerInfo): _116.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _116.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.ModeInfo;
                fromPartial(object: Partial<_116.ModeInfo>): _116.ModeInfo;
                fromAmino(object: _116.ModeInfoAmino): _116.ModeInfo;
                toAmino(message: _116.ModeInfo): _116.ModeInfoAmino;
                fromAminoMsg(object: _116.ModeInfoAminoMsg): _116.ModeInfo;
                toAminoMsg(message: _116.ModeInfo): _116.ModeInfoAminoMsg;
                fromProtoMsg(message: _116.ModeInfoProtoMsg): _116.ModeInfo;
                toProto(message: _116.ModeInfo): Uint8Array;
                toProtoMsg(message: _116.ModeInfo): _116.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _116.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.ModeInfo_Single;
                fromPartial(object: Partial<_116.ModeInfo_Single>): _116.ModeInfo_Single;
                fromAmino(object: _116.ModeInfo_SingleAmino): _116.ModeInfo_Single;
                toAmino(message: _116.ModeInfo_Single): _116.ModeInfo_SingleAmino;
                fromAminoMsg(object: _116.ModeInfo_SingleAminoMsg): _116.ModeInfo_Single;
                toAminoMsg(message: _116.ModeInfo_Single): _116.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _116.ModeInfo_SingleProtoMsg): _116.ModeInfo_Single;
                toProto(message: _116.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _116.ModeInfo_Single): _116.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _116.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.ModeInfo_Multi;
                fromPartial(object: Partial<_116.ModeInfo_Multi>): _116.ModeInfo_Multi;
                fromAmino(object: _116.ModeInfo_MultiAmino): _116.ModeInfo_Multi;
                toAmino(message: _116.ModeInfo_Multi): _116.ModeInfo_MultiAmino;
                fromAminoMsg(object: _116.ModeInfo_MultiAminoMsg): _116.ModeInfo_Multi;
                toAminoMsg(message: _116.ModeInfo_Multi): _116.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _116.ModeInfo_MultiProtoMsg): _116.ModeInfo_Multi;
                toProto(message: _116.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _116.ModeInfo_Multi): _116.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _116.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.Fee;
                fromPartial(object: Partial<_116.Fee>): _116.Fee;
                fromAmino(object: _116.FeeAmino): _116.Fee;
                toAmino(message: _116.Fee): _116.FeeAmino;
                fromAminoMsg(object: _116.FeeAminoMsg): _116.Fee;
                toAminoMsg(message: _116.Fee): _116.FeeAminoMsg;
                fromProtoMsg(message: _116.FeeProtoMsg): _116.Fee;
                toProto(message: _116.Fee): Uint8Array;
                toProtoMsg(message: _116.Fee): _116.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _116.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.Tip;
                fromPartial(object: Partial<_116.Tip>): _116.Tip;
                fromAmino(object: _116.TipAmino): _116.Tip;
                toAmino(message: _116.Tip): _116.TipAmino;
                fromAminoMsg(object: _116.TipAminoMsg): _116.Tip;
                toAminoMsg(message: _116.Tip): _116.TipAminoMsg;
                fromProtoMsg(message: _116.TipProtoMsg): _116.Tip;
                toProto(message: _116.Tip): Uint8Array;
                toProtoMsg(message: _116.Tip): _116.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _116.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.AuxSignerData;
                fromPartial(object: Partial<_116.AuxSignerData>): _116.AuxSignerData;
                fromAmino(object: _116.AuxSignerDataAmino): _116.AuxSignerData;
                toAmino(message: _116.AuxSignerData): _116.AuxSignerDataAmino;
                fromAminoMsg(object: _116.AuxSignerDataAminoMsg): _116.AuxSignerData;
                toAminoMsg(message: _116.AuxSignerData): _116.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _116.AuxSignerDataProtoMsg): _116.AuxSignerData;
                toProto(message: _116.AuxSignerData): Uint8Array;
                toProtoMsg(message: _116.AuxSignerData): _116.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _115.OrderBy;
            orderByToJSON(object: _115.OrderBy): string;
            broadcastModeFromJSON(object: any): _115.BroadcastMode;
            broadcastModeToJSON(object: _115.BroadcastMode): string;
            OrderBy: typeof _115.OrderBy;
            OrderBySDKType: typeof _115.OrderBy;
            OrderByAmino: typeof _115.OrderBy;
            BroadcastMode: typeof _115.BroadcastMode;
            BroadcastModeSDKType: typeof _115.BroadcastMode;
            BroadcastModeAmino: typeof _115.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _115.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.GetTxsEventRequest;
                fromPartial(object: Partial<_115.GetTxsEventRequest>): _115.GetTxsEventRequest;
                fromAmino(object: _115.GetTxsEventRequestAmino): _115.GetTxsEventRequest;
                toAmino(message: _115.GetTxsEventRequest): _115.GetTxsEventRequestAmino;
                fromAminoMsg(object: _115.GetTxsEventRequestAminoMsg): _115.GetTxsEventRequest;
                toAminoMsg(message: _115.GetTxsEventRequest): _115.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _115.GetTxsEventRequestProtoMsg): _115.GetTxsEventRequest;
                toProto(message: _115.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _115.GetTxsEventRequest): _115.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _115.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.GetTxsEventResponse;
                fromPartial(object: Partial<_115.GetTxsEventResponse>): _115.GetTxsEventResponse;
                fromAmino(object: _115.GetTxsEventResponseAmino): _115.GetTxsEventResponse;
                toAmino(message: _115.GetTxsEventResponse): _115.GetTxsEventResponseAmino;
                fromAminoMsg(object: _115.GetTxsEventResponseAminoMsg): _115.GetTxsEventResponse;
                toAminoMsg(message: _115.GetTxsEventResponse): _115.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _115.GetTxsEventResponseProtoMsg): _115.GetTxsEventResponse;
                toProto(message: _115.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _115.GetTxsEventResponse): _115.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _115.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.BroadcastTxRequest;
                fromPartial(object: Partial<_115.BroadcastTxRequest>): _115.BroadcastTxRequest;
                fromAmino(object: _115.BroadcastTxRequestAmino): _115.BroadcastTxRequest;
                toAmino(message: _115.BroadcastTxRequest): _115.BroadcastTxRequestAmino;
                fromAminoMsg(object: _115.BroadcastTxRequestAminoMsg): _115.BroadcastTxRequest;
                toAminoMsg(message: _115.BroadcastTxRequest): _115.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _115.BroadcastTxRequestProtoMsg): _115.BroadcastTxRequest;
                toProto(message: _115.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _115.BroadcastTxRequest): _115.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _115.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.BroadcastTxResponse;
                fromPartial(object: Partial<_115.BroadcastTxResponse>): _115.BroadcastTxResponse;
                fromAmino(object: _115.BroadcastTxResponseAmino): _115.BroadcastTxResponse;
                toAmino(message: _115.BroadcastTxResponse): _115.BroadcastTxResponseAmino;
                fromAminoMsg(object: _115.BroadcastTxResponseAminoMsg): _115.BroadcastTxResponse;
                toAminoMsg(message: _115.BroadcastTxResponse): _115.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _115.BroadcastTxResponseProtoMsg): _115.BroadcastTxResponse;
                toProto(message: _115.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _115.BroadcastTxResponse): _115.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _115.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.SimulateRequest;
                fromPartial(object: Partial<_115.SimulateRequest>): _115.SimulateRequest;
                fromAmino(object: _115.SimulateRequestAmino): _115.SimulateRequest;
                toAmino(message: _115.SimulateRequest): _115.SimulateRequestAmino;
                fromAminoMsg(object: _115.SimulateRequestAminoMsg): _115.SimulateRequest;
                toAminoMsg(message: _115.SimulateRequest): _115.SimulateRequestAminoMsg;
                fromProtoMsg(message: _115.SimulateRequestProtoMsg): _115.SimulateRequest;
                toProto(message: _115.SimulateRequest): Uint8Array;
                toProtoMsg(message: _115.SimulateRequest): _115.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _115.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.SimulateResponse;
                fromPartial(object: Partial<_115.SimulateResponse>): _115.SimulateResponse;
                fromAmino(object: _115.SimulateResponseAmino): _115.SimulateResponse;
                toAmino(message: _115.SimulateResponse): _115.SimulateResponseAmino;
                fromAminoMsg(object: _115.SimulateResponseAminoMsg): _115.SimulateResponse;
                toAminoMsg(message: _115.SimulateResponse): _115.SimulateResponseAminoMsg;
                fromProtoMsg(message: _115.SimulateResponseProtoMsg): _115.SimulateResponse;
                toProto(message: _115.SimulateResponse): Uint8Array;
                toProtoMsg(message: _115.SimulateResponse): _115.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _115.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.GetTxRequest;
                fromPartial(object: Partial<_115.GetTxRequest>): _115.GetTxRequest;
                fromAmino(object: _115.GetTxRequestAmino): _115.GetTxRequest;
                toAmino(message: _115.GetTxRequest): _115.GetTxRequestAmino;
                fromAminoMsg(object: _115.GetTxRequestAminoMsg): _115.GetTxRequest;
                toAminoMsg(message: _115.GetTxRequest): _115.GetTxRequestAminoMsg;
                fromProtoMsg(message: _115.GetTxRequestProtoMsg): _115.GetTxRequest;
                toProto(message: _115.GetTxRequest): Uint8Array;
                toProtoMsg(message: _115.GetTxRequest): _115.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _115.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.GetTxResponse;
                fromPartial(object: Partial<_115.GetTxResponse>): _115.GetTxResponse;
                fromAmino(object: _115.GetTxResponseAmino): _115.GetTxResponse;
                toAmino(message: _115.GetTxResponse): _115.GetTxResponseAmino;
                fromAminoMsg(object: _115.GetTxResponseAminoMsg): _115.GetTxResponse;
                toAminoMsg(message: _115.GetTxResponse): _115.GetTxResponseAminoMsg;
                fromProtoMsg(message: _115.GetTxResponseProtoMsg): _115.GetTxResponse;
                toProto(message: _115.GetTxResponse): Uint8Array;
                toProtoMsg(message: _115.GetTxResponse): _115.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _115.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_115.GetBlockWithTxsRequest>): _115.GetBlockWithTxsRequest;
                fromAmino(object: _115.GetBlockWithTxsRequestAmino): _115.GetBlockWithTxsRequest;
                toAmino(message: _115.GetBlockWithTxsRequest): _115.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _115.GetBlockWithTxsRequestAminoMsg): _115.GetBlockWithTxsRequest;
                toAminoMsg(message: _115.GetBlockWithTxsRequest): _115.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _115.GetBlockWithTxsRequestProtoMsg): _115.GetBlockWithTxsRequest;
                toProto(message: _115.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _115.GetBlockWithTxsRequest): _115.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _115.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_115.GetBlockWithTxsResponse>): _115.GetBlockWithTxsResponse;
                fromAmino(object: _115.GetBlockWithTxsResponseAmino): _115.GetBlockWithTxsResponse;
                toAmino(message: _115.GetBlockWithTxsResponse): _115.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _115.GetBlockWithTxsResponseAminoMsg): _115.GetBlockWithTxsResponse;
                toAminoMsg(message: _115.GetBlockWithTxsResponse): _115.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _115.GetBlockWithTxsResponseProtoMsg): _115.GetBlockWithTxsResponse;
                toProto(message: _115.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _115.GetBlockWithTxsResponse): _115.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _117.QueryCurrentPlanRequest): Promise<_117.QueryCurrentPlanResponse>;
                appliedPlan(request: _117.QueryAppliedPlanRequest): Promise<_117.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _117.QueryUpgradedConsensusStateRequest): Promise<_117.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _117.QueryModuleVersionsRequest): Promise<_117.QueryModuleVersionsResponse>;
                authority(request?: _117.QueryAuthorityRequest): Promise<_117.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _118.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _118.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _118.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _118.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _118.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _118.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _118.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _118.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _118.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _118.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _118.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _118.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _118.MsgSoftwareUpgrade) => _118.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _118.MsgSoftwareUpgradeAmino) => _118.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _118.MsgCancelUpgrade) => _118.MsgCancelUpgradeAmino;
                    fromAmino: (object: _118.MsgCancelUpgradeAmino) => _118.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _119.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Plan;
                fromPartial(object: Partial<_119.Plan>): _119.Plan;
                fromAmino(object: _119.PlanAmino): _119.Plan;
                toAmino(message: _119.Plan): _119.PlanAmino;
                fromAminoMsg(object: _119.PlanAminoMsg): _119.Plan;
                toAminoMsg(message: _119.Plan): _119.PlanAminoMsg;
                fromProtoMsg(message: _119.PlanProtoMsg): _119.Plan;
                toProto(message: _119.Plan): Uint8Array;
                toProtoMsg(message: _119.Plan): _119.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _119.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_119.SoftwareUpgradeProposal>): _119.SoftwareUpgradeProposal;
                fromAmino(object: _119.SoftwareUpgradeProposalAmino): _119.SoftwareUpgradeProposal;
                toAmino(message: _119.SoftwareUpgradeProposal): _119.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _119.SoftwareUpgradeProposalAminoMsg): _119.SoftwareUpgradeProposal;
                toAminoMsg(message: _119.SoftwareUpgradeProposal): _119.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _119.SoftwareUpgradeProposalProtoMsg): _119.SoftwareUpgradeProposal;
                toProto(message: _119.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _119.SoftwareUpgradeProposal): _119.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _119.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_119.CancelSoftwareUpgradeProposal>): _119.CancelSoftwareUpgradeProposal;
                fromAmino(object: _119.CancelSoftwareUpgradeProposalAmino): _119.CancelSoftwareUpgradeProposal;
                toAmino(message: _119.CancelSoftwareUpgradeProposal): _119.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _119.CancelSoftwareUpgradeProposalAminoMsg): _119.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _119.CancelSoftwareUpgradeProposal): _119.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _119.CancelSoftwareUpgradeProposalProtoMsg): _119.CancelSoftwareUpgradeProposal;
                toProto(message: _119.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _119.CancelSoftwareUpgradeProposal): _119.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _119.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.ModuleVersion;
                fromPartial(object: Partial<_119.ModuleVersion>): _119.ModuleVersion;
                fromAmino(object: _119.ModuleVersionAmino): _119.ModuleVersion;
                toAmino(message: _119.ModuleVersion): _119.ModuleVersionAmino;
                fromAminoMsg(object: _119.ModuleVersionAminoMsg): _119.ModuleVersion;
                toAminoMsg(message: _119.ModuleVersion): _119.ModuleVersionAminoMsg;
                fromProtoMsg(message: _119.ModuleVersionProtoMsg): _119.ModuleVersion;
                toProto(message: _119.ModuleVersion): Uint8Array;
                toProtoMsg(message: _119.ModuleVersion): _119.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _118.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_118.MsgSoftwareUpgrade>): _118.MsgSoftwareUpgrade;
                fromAmino(object: _118.MsgSoftwareUpgradeAmino): _118.MsgSoftwareUpgrade;
                toAmino(message: _118.MsgSoftwareUpgrade): _118.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _118.MsgSoftwareUpgradeAminoMsg): _118.MsgSoftwareUpgrade;
                toAminoMsg(message: _118.MsgSoftwareUpgrade): _118.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _118.MsgSoftwareUpgradeProtoMsg): _118.MsgSoftwareUpgrade;
                toProto(message: _118.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _118.MsgSoftwareUpgrade): _118.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _118.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_118.MsgSoftwareUpgradeResponse>): _118.MsgSoftwareUpgradeResponse;
                fromAmino(_: _118.MsgSoftwareUpgradeResponseAmino): _118.MsgSoftwareUpgradeResponse;
                toAmino(_: _118.MsgSoftwareUpgradeResponse): _118.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _118.MsgSoftwareUpgradeResponseAminoMsg): _118.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _118.MsgSoftwareUpgradeResponse): _118.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _118.MsgSoftwareUpgradeResponseProtoMsg): _118.MsgSoftwareUpgradeResponse;
                toProto(message: _118.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _118.MsgSoftwareUpgradeResponse): _118.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _118.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MsgCancelUpgrade;
                fromPartial(object: Partial<_118.MsgCancelUpgrade>): _118.MsgCancelUpgrade;
                fromAmino(object: _118.MsgCancelUpgradeAmino): _118.MsgCancelUpgrade;
                toAmino(message: _118.MsgCancelUpgrade): _118.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _118.MsgCancelUpgradeAminoMsg): _118.MsgCancelUpgrade;
                toAminoMsg(message: _118.MsgCancelUpgrade): _118.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _118.MsgCancelUpgradeProtoMsg): _118.MsgCancelUpgrade;
                toProto(message: _118.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _118.MsgCancelUpgrade): _118.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _118.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_118.MsgCancelUpgradeResponse>): _118.MsgCancelUpgradeResponse;
                fromAmino(_: _118.MsgCancelUpgradeResponseAmino): _118.MsgCancelUpgradeResponse;
                toAmino(_: _118.MsgCancelUpgradeResponse): _118.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _118.MsgCancelUpgradeResponseAminoMsg): _118.MsgCancelUpgradeResponse;
                toAminoMsg(message: _118.MsgCancelUpgradeResponse): _118.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _118.MsgCancelUpgradeResponseProtoMsg): _118.MsgCancelUpgradeResponse;
                toProto(message: _118.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _118.MsgCancelUpgradeResponse): _118.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _117.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_117.QueryCurrentPlanRequest>): _117.QueryCurrentPlanRequest;
                fromAmino(_: _117.QueryCurrentPlanRequestAmino): _117.QueryCurrentPlanRequest;
                toAmino(_: _117.QueryCurrentPlanRequest): _117.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _117.QueryCurrentPlanRequestAminoMsg): _117.QueryCurrentPlanRequest;
                toAminoMsg(message: _117.QueryCurrentPlanRequest): _117.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _117.QueryCurrentPlanRequestProtoMsg): _117.QueryCurrentPlanRequest;
                toProto(message: _117.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _117.QueryCurrentPlanRequest): _117.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _117.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_117.QueryCurrentPlanResponse>): _117.QueryCurrentPlanResponse;
                fromAmino(object: _117.QueryCurrentPlanResponseAmino): _117.QueryCurrentPlanResponse;
                toAmino(message: _117.QueryCurrentPlanResponse): _117.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _117.QueryCurrentPlanResponseAminoMsg): _117.QueryCurrentPlanResponse;
                toAminoMsg(message: _117.QueryCurrentPlanResponse): _117.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _117.QueryCurrentPlanResponseProtoMsg): _117.QueryCurrentPlanResponse;
                toProto(message: _117.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _117.QueryCurrentPlanResponse): _117.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _117.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_117.QueryAppliedPlanRequest>): _117.QueryAppliedPlanRequest;
                fromAmino(object: _117.QueryAppliedPlanRequestAmino): _117.QueryAppliedPlanRequest;
                toAmino(message: _117.QueryAppliedPlanRequest): _117.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _117.QueryAppliedPlanRequestAminoMsg): _117.QueryAppliedPlanRequest;
                toAminoMsg(message: _117.QueryAppliedPlanRequest): _117.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _117.QueryAppliedPlanRequestProtoMsg): _117.QueryAppliedPlanRequest;
                toProto(message: _117.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _117.QueryAppliedPlanRequest): _117.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _117.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_117.QueryAppliedPlanResponse>): _117.QueryAppliedPlanResponse;
                fromAmino(object: _117.QueryAppliedPlanResponseAmino): _117.QueryAppliedPlanResponse;
                toAmino(message: _117.QueryAppliedPlanResponse): _117.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _117.QueryAppliedPlanResponseAminoMsg): _117.QueryAppliedPlanResponse;
                toAminoMsg(message: _117.QueryAppliedPlanResponse): _117.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _117.QueryAppliedPlanResponseProtoMsg): _117.QueryAppliedPlanResponse;
                toProto(message: _117.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _117.QueryAppliedPlanResponse): _117.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _117.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_117.QueryUpgradedConsensusStateRequest>): _117.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _117.QueryUpgradedConsensusStateRequestAmino): _117.QueryUpgradedConsensusStateRequest;
                toAmino(message: _117.QueryUpgradedConsensusStateRequest): _117.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _117.QueryUpgradedConsensusStateRequestAminoMsg): _117.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _117.QueryUpgradedConsensusStateRequest): _117.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _117.QueryUpgradedConsensusStateRequestProtoMsg): _117.QueryUpgradedConsensusStateRequest;
                toProto(message: _117.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _117.QueryUpgradedConsensusStateRequest): _117.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _117.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_117.QueryUpgradedConsensusStateResponse>): _117.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _117.QueryUpgradedConsensusStateResponseAmino): _117.QueryUpgradedConsensusStateResponse;
                toAmino(message: _117.QueryUpgradedConsensusStateResponse): _117.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _117.QueryUpgradedConsensusStateResponseAminoMsg): _117.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _117.QueryUpgradedConsensusStateResponse): _117.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _117.QueryUpgradedConsensusStateResponseProtoMsg): _117.QueryUpgradedConsensusStateResponse;
                toProto(message: _117.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _117.QueryUpgradedConsensusStateResponse): _117.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _117.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_117.QueryModuleVersionsRequest>): _117.QueryModuleVersionsRequest;
                fromAmino(object: _117.QueryModuleVersionsRequestAmino): _117.QueryModuleVersionsRequest;
                toAmino(message: _117.QueryModuleVersionsRequest): _117.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _117.QueryModuleVersionsRequestAminoMsg): _117.QueryModuleVersionsRequest;
                toAminoMsg(message: _117.QueryModuleVersionsRequest): _117.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _117.QueryModuleVersionsRequestProtoMsg): _117.QueryModuleVersionsRequest;
                toProto(message: _117.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _117.QueryModuleVersionsRequest): _117.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _117.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_117.QueryModuleVersionsResponse>): _117.QueryModuleVersionsResponse;
                fromAmino(object: _117.QueryModuleVersionsResponseAmino): _117.QueryModuleVersionsResponse;
                toAmino(message: _117.QueryModuleVersionsResponse): _117.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _117.QueryModuleVersionsResponseAminoMsg): _117.QueryModuleVersionsResponse;
                toAminoMsg(message: _117.QueryModuleVersionsResponse): _117.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _117.QueryModuleVersionsResponseProtoMsg): _117.QueryModuleVersionsResponse;
                toProto(message: _117.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _117.QueryModuleVersionsResponse): _117.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _117.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.QueryAuthorityRequest;
                fromPartial(_: Partial<_117.QueryAuthorityRequest>): _117.QueryAuthorityRequest;
                fromAmino(_: _117.QueryAuthorityRequestAmino): _117.QueryAuthorityRequest;
                toAmino(_: _117.QueryAuthorityRequest): _117.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _117.QueryAuthorityRequestAminoMsg): _117.QueryAuthorityRequest;
                toAminoMsg(message: _117.QueryAuthorityRequest): _117.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _117.QueryAuthorityRequestProtoMsg): _117.QueryAuthorityRequest;
                toProto(message: _117.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _117.QueryAuthorityRequest): _117.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _117.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.QueryAuthorityResponse;
                fromPartial(object: Partial<_117.QueryAuthorityResponse>): _117.QueryAuthorityResponse;
                fromAmino(object: _117.QueryAuthorityResponseAmino): _117.QueryAuthorityResponse;
                toAmino(message: _117.QueryAuthorityResponse): _117.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _117.QueryAuthorityResponseAminoMsg): _117.QueryAuthorityResponse;
                toAminoMsg(message: _117.QueryAuthorityResponse): _117.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _117.QueryAuthorityResponseProtoMsg): _117.QueryAuthorityResponse;
                toProto(message: _117.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _117.QueryAuthorityResponse): _117.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _120.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _120.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _120.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _120.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _120.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _120.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _120.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _120.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _120.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _120.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _120.MsgCreateVestingAccount) => _120.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _120.MsgCreateVestingAccountAmino) => _120.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _120.MsgCreatePermanentLockedAccount) => _120.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _120.MsgCreatePermanentLockedAccountAmino) => _120.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _120.MsgCreatePeriodicVestingAccount) => _120.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _120.MsgCreatePeriodicVestingAccountAmino) => _120.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _121.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.BaseVestingAccount;
                fromPartial(object: Partial<_121.BaseVestingAccount>): _121.BaseVestingAccount;
                fromAmino(object: _121.BaseVestingAccountAmino): _121.BaseVestingAccount;
                toAmino(message: _121.BaseVestingAccount): _121.BaseVestingAccountAmino;
                fromAminoMsg(object: _121.BaseVestingAccountAminoMsg): _121.BaseVestingAccount;
                toAminoMsg(message: _121.BaseVestingAccount): _121.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _121.BaseVestingAccountProtoMsg): _121.BaseVestingAccount;
                toProto(message: _121.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _121.BaseVestingAccount): _121.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _121.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ContinuousVestingAccount;
                fromPartial(object: Partial<_121.ContinuousVestingAccount>): _121.ContinuousVestingAccount;
                fromAmino(object: _121.ContinuousVestingAccountAmino): _121.ContinuousVestingAccount;
                toAmino(message: _121.ContinuousVestingAccount): _121.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _121.ContinuousVestingAccountAminoMsg): _121.ContinuousVestingAccount;
                toAminoMsg(message: _121.ContinuousVestingAccount): _121.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _121.ContinuousVestingAccountProtoMsg): _121.ContinuousVestingAccount;
                toProto(message: _121.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _121.ContinuousVestingAccount): _121.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _121.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.DelayedVestingAccount;
                fromPartial(object: Partial<_121.DelayedVestingAccount>): _121.DelayedVestingAccount;
                fromAmino(object: _121.DelayedVestingAccountAmino): _121.DelayedVestingAccount;
                toAmino(message: _121.DelayedVestingAccount): _121.DelayedVestingAccountAmino;
                fromAminoMsg(object: _121.DelayedVestingAccountAminoMsg): _121.DelayedVestingAccount;
                toAminoMsg(message: _121.DelayedVestingAccount): _121.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _121.DelayedVestingAccountProtoMsg): _121.DelayedVestingAccount;
                toProto(message: _121.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _121.DelayedVestingAccount): _121.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _121.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.Period;
                fromPartial(object: Partial<_121.Period>): _121.Period;
                fromAmino(object: _121.PeriodAmino): _121.Period;
                toAmino(message: _121.Period): _121.PeriodAmino;
                fromAminoMsg(object: _121.PeriodAminoMsg): _121.Period;
                toAminoMsg(message: _121.Period): _121.PeriodAminoMsg;
                fromProtoMsg(message: _121.PeriodProtoMsg): _121.Period;
                toProto(message: _121.Period): Uint8Array;
                toProtoMsg(message: _121.Period): _121.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _121.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.PeriodicVestingAccount;
                fromPartial(object: Partial<_121.PeriodicVestingAccount>): _121.PeriodicVestingAccount;
                fromAmino(object: _121.PeriodicVestingAccountAmino): _121.PeriodicVestingAccount;
                toAmino(message: _121.PeriodicVestingAccount): _121.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _121.PeriodicVestingAccountAminoMsg): _121.PeriodicVestingAccount;
                toAminoMsg(message: _121.PeriodicVestingAccount): _121.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _121.PeriodicVestingAccountProtoMsg): _121.PeriodicVestingAccount;
                toProto(message: _121.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _121.PeriodicVestingAccount): _121.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _121.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.PermanentLockedAccount;
                fromPartial(object: Partial<_121.PermanentLockedAccount>): _121.PermanentLockedAccount;
                fromAmino(object: _121.PermanentLockedAccountAmino): _121.PermanentLockedAccount;
                toAmino(message: _121.PermanentLockedAccount): _121.PermanentLockedAccountAmino;
                fromAminoMsg(object: _121.PermanentLockedAccountAminoMsg): _121.PermanentLockedAccount;
                toAminoMsg(message: _121.PermanentLockedAccount): _121.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _121.PermanentLockedAccountProtoMsg): _121.PermanentLockedAccount;
                toProto(message: _121.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _121.PermanentLockedAccount): _121.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _120.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgCreateVestingAccount;
                fromPartial(object: Partial<_120.MsgCreateVestingAccount>): _120.MsgCreateVestingAccount;
                fromAmino(object: _120.MsgCreateVestingAccountAmino): _120.MsgCreateVestingAccount;
                toAmino(message: _120.MsgCreateVestingAccount): _120.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _120.MsgCreateVestingAccountAminoMsg): _120.MsgCreateVestingAccount;
                toAminoMsg(message: _120.MsgCreateVestingAccount): _120.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _120.MsgCreateVestingAccountProtoMsg): _120.MsgCreateVestingAccount;
                toProto(message: _120.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _120.MsgCreateVestingAccount): _120.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _120.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_120.MsgCreateVestingAccountResponse>): _120.MsgCreateVestingAccountResponse;
                fromAmino(_: _120.MsgCreateVestingAccountResponseAmino): _120.MsgCreateVestingAccountResponse;
                toAmino(_: _120.MsgCreateVestingAccountResponse): _120.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _120.MsgCreateVestingAccountResponseAminoMsg): _120.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _120.MsgCreateVestingAccountResponse): _120.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _120.MsgCreateVestingAccountResponseProtoMsg): _120.MsgCreateVestingAccountResponse;
                toProto(message: _120.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _120.MsgCreateVestingAccountResponse): _120.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _120.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_120.MsgCreatePermanentLockedAccount>): _120.MsgCreatePermanentLockedAccount;
                fromAmino(object: _120.MsgCreatePermanentLockedAccountAmino): _120.MsgCreatePermanentLockedAccount;
                toAmino(message: _120.MsgCreatePermanentLockedAccount): _120.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _120.MsgCreatePermanentLockedAccountAminoMsg): _120.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _120.MsgCreatePermanentLockedAccount): _120.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _120.MsgCreatePermanentLockedAccountProtoMsg): _120.MsgCreatePermanentLockedAccount;
                toProto(message: _120.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _120.MsgCreatePermanentLockedAccount): _120.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _120.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_120.MsgCreatePermanentLockedAccountResponse>): _120.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _120.MsgCreatePermanentLockedAccountResponseAmino): _120.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _120.MsgCreatePermanentLockedAccountResponse): _120.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _120.MsgCreatePermanentLockedAccountResponseAminoMsg): _120.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _120.MsgCreatePermanentLockedAccountResponse): _120.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _120.MsgCreatePermanentLockedAccountResponseProtoMsg): _120.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _120.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _120.MsgCreatePermanentLockedAccountResponse): _120.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _120.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_120.MsgCreatePeriodicVestingAccount>): _120.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _120.MsgCreatePeriodicVestingAccountAmino): _120.MsgCreatePeriodicVestingAccount;
                toAmino(message: _120.MsgCreatePeriodicVestingAccount): _120.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _120.MsgCreatePeriodicVestingAccountAminoMsg): _120.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _120.MsgCreatePeriodicVestingAccount): _120.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _120.MsgCreatePeriodicVestingAccountProtoMsg): _120.MsgCreatePeriodicVestingAccount;
                toProto(message: _120.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _120.MsgCreatePeriodicVestingAccount): _120.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _120.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_120.MsgCreatePeriodicVestingAccountResponse>): _120.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _120.MsgCreatePeriodicVestingAccountResponseAmino): _120.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _120.MsgCreatePeriodicVestingAccountResponse): _120.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _120.MsgCreatePeriodicVestingAccountResponseAminoMsg): _120.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _120.MsgCreatePeriodicVestingAccountResponse): _120.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _120.MsgCreatePeriodicVestingAccountResponseProtoMsg): _120.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _120.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _120.MsgCreatePeriodicVestingAccountResponse): _120.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _216.MsgClientImpl;
                };
                bank: {
                    v1beta1: _217.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _218.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _219.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _220.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _221.MsgClientImpl;
                };
                gov: {
                    v1: _222.MsgClientImpl;
                    v1beta1: _223.MsgClientImpl;
                };
                group: {
                    v1: _224.MsgClientImpl;
                };
                nft: {
                    v1beta1: _225.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _226.MsgClientImpl;
                };
                staking: {
                    v1beta1: _227.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _228.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _229.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _29.QueryConfigRequest): Promise<_29.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _32.QueryAccountsRequest): Promise<_32.QueryAccountsResponse>;
                        account(request: _32.QueryAccountRequest): Promise<_32.QueryAccountResponse>;
                        accountAddressByID(request: _32.QueryAccountAddressByIDRequest): Promise<_32.QueryAccountAddressByIDResponse>;
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        moduleAccounts(request?: _32.QueryModuleAccountsRequest): Promise<_32.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _32.QueryModuleAccountByNameRequest): Promise<_32.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _32.Bech32PrefixRequest): Promise<_32.Bech32PrefixResponse>;
                        addressBytesToString(request: _32.AddressBytesToStringRequest): Promise<_32.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _32.AddressStringToBytesRequest): Promise<_32.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _36.QueryGrantsRequest): Promise<_36.QueryGrantsResponse>;
                        granterGrants(request: _36.QueryGranterGrantsRequest): Promise<_36.QueryGranterGrantsResponse>;
                        granteeGrants(request: _36.QueryGranteeGrantsRequest): Promise<_36.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _41.QueryBalanceRequest): Promise<_41.QueryBalanceResponse>;
                        allBalances(request: _41.QueryAllBalancesRequest): Promise<_41.QueryAllBalancesResponse>;
                        spendableBalances(request: _41.QuerySpendableBalancesRequest): Promise<_41.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _41.QueryTotalSupplyRequest): Promise<_41.QueryTotalSupplyResponse>;
                        supplyOf(request: _41.QuerySupplyOfRequest): Promise<_41.QuerySupplyOfResponse>;
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                        denomMetadata(request: _41.QueryDenomMetadataRequest): Promise<_41.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _41.QueryDenomsMetadataRequest): Promise<_41.QueryDenomsMetadataResponse>;
                        denomOwners(request: _41.QueryDenomOwnersRequest): Promise<_41.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _45.ConfigRequest): Promise<_45.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _52.GetNodeInfoRequest): Promise<_52.GetNodeInfoResponse>;
                            getSyncing(request?: _52.GetSyncingRequest): Promise<_52.GetSyncingResponse>;
                            getLatestBlock(request?: _52.GetLatestBlockRequest): Promise<_52.GetLatestBlockResponse>;
                            getBlockByHeight(request: _52.GetBlockByHeightRequest): Promise<_52.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _52.GetLatestValidatorSetRequest): Promise<_52.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _52.GetValidatorSetByHeightRequest): Promise<_52.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _52.ABCIQueryRequest): Promise<_52.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _67.QueryValidatorOutstandingRewardsRequest): Promise<_67.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _67.QueryValidatorCommissionRequest): Promise<_67.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _67.QueryValidatorSlashesRequest): Promise<_67.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _67.QueryDelegationRewardsRequest): Promise<_67.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _67.QueryDelegationTotalRewardsRequest): Promise<_67.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _67.QueryDelegatorValidatorsRequest): Promise<_67.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _67.QueryDelegatorWithdrawAddressRequest): Promise<_67.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _67.QueryCommunityPoolRequest): Promise<_67.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _71.QueryEvidenceRequest): Promise<_71.QueryEvidenceResponse>;
                        allEvidence(request?: _71.QueryAllEvidenceRequest): Promise<_71.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _75.QueryAllowanceRequest): Promise<_75.QueryAllowanceResponse>;
                        allowances(request: _75.QueryAllowancesRequest): Promise<_75.QueryAllowancesResponse>;
                        allowancesByGranter(request: _75.QueryAllowancesByGranterRequest): Promise<_75.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _80.QueryProposalRequest): Promise<_80.QueryProposalResponse>;
                        proposals(request: _80.QueryProposalsRequest): Promise<_80.QueryProposalsResponse>;
                        vote(request: _80.QueryVoteRequest): Promise<_80.QueryVoteResponse>;
                        votes(request: _80.QueryVotesRequest): Promise<_80.QueryVotesResponse>;
                        params(request: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                        deposit(request: _80.QueryDepositRequest): Promise<_80.QueryDepositResponse>;
                        deposits(request: _80.QueryDepositsRequest): Promise<_80.QueryDepositsResponse>;
                        tallyResult(request: _80.QueryTallyResultRequest): Promise<_80.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _84.QueryProposalRequest): Promise<_84.QueryProposalResponse>;
                        proposals(request: _84.QueryProposalsRequest): Promise<_84.QueryProposalsResponse>;
                        vote(request: _84.QueryVoteRequest): Promise<_84.QueryVoteResponse>;
                        votes(request: _84.QueryVotesRequest): Promise<_84.QueryVotesResponse>;
                        params(request: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                        deposit(request: _84.QueryDepositRequest): Promise<_84.QueryDepositResponse>;
                        deposits(request: _84.QueryDepositsRequest): Promise<_84.QueryDepositsResponse>;
                        tallyResult(request: _84.QueryTallyResultRequest): Promise<_84.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _88.QueryGroupInfoRequest): Promise<_88.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _88.QueryGroupPolicyInfoRequest): Promise<_88.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _88.QueryGroupMembersRequest): Promise<_88.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _88.QueryGroupsByAdminRequest): Promise<_88.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _88.QueryGroupPoliciesByGroupRequest): Promise<_88.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _88.QueryGroupPoliciesByAdminRequest): Promise<_88.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _88.QueryProposalRequest): Promise<_88.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _88.QueryProposalsByGroupPolicyRequest): Promise<_88.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _88.QueryVoteByProposalVoterRequest): Promise<_88.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _88.QueryVotesByProposalRequest): Promise<_88.QueryVotesByProposalResponse>;
                        votesByVoter(request: _88.QueryVotesByVoterRequest): Promise<_88.QueryVotesByVoterResponse>;
                        groupsByMember(request: _88.QueryGroupsByMemberRequest): Promise<_88.QueryGroupsByMemberResponse>;
                        tallyResult(request: _88.QueryTallyResultRequest): Promise<_88.QueryTallyResultResponse>;
                        groups(request?: _88.QueryGroupsRequest): Promise<_88.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                        inflation(request?: _93.QueryInflationRequest): Promise<_93.QueryInflationResponse>;
                        annualProvisions(request?: _93.QueryAnnualProvisionsRequest): Promise<_93.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _98.QueryBalanceRequest): Promise<_98.QueryBalanceResponse>;
                        owner(request: _98.QueryOwnerRequest): Promise<_98.QueryOwnerResponse>;
                        supply(request: _98.QuerySupplyRequest): Promise<_98.QuerySupplyResponse>;
                        nFTs(request: _98.QueryNFTsRequest): Promise<_98.QueryNFTsResponse>;
                        nFT(request: _98.QueryNFTRequest): Promise<_98.QueryNFTResponse>;
                        class(request: _98.QueryClassRequest): Promise<_98.QueryClassResponse>;
                        classes(request?: _98.QueryClassesRequest): Promise<_98.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                        subspaces(request?: _104.QuerySubspacesRequest): Promise<_104.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        signingInfo(request: _106.QuerySigningInfoRequest): Promise<_106.QuerySigningInfoResponse>;
                        signingInfos(request?: _106.QuerySigningInfosRequest): Promise<_106.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _111.QueryValidatorsRequest): Promise<_111.QueryValidatorsResponse>;
                        validator(request: _111.QueryValidatorRequest): Promise<_111.QueryValidatorResponse>;
                        validatorDelegations(request: _111.QueryValidatorDelegationsRequest): Promise<_111.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _111.QueryValidatorUnbondingDelegationsRequest): Promise<_111.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _111.QueryDelegationRequest): Promise<_111.QueryDelegationResponse>;
                        unbondingDelegation(request: _111.QueryUnbondingDelegationRequest): Promise<_111.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _111.QueryDelegatorDelegationsRequest): Promise<_111.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _111.QueryDelegatorUnbondingDelegationsRequest): Promise<_111.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _111.QueryRedelegationsRequest): Promise<_111.QueryRedelegationsResponse>;
                        delegatorValidators(request: _111.QueryDelegatorValidatorsRequest): Promise<_111.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _111.QueryDelegatorValidatorRequest): Promise<_111.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _111.QueryHistoricalInfoRequest): Promise<_111.QueryHistoricalInfoResponse>;
                        pool(request?: _111.QueryPoolRequest): Promise<_111.QueryPoolResponse>;
                        params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _115.SimulateRequest): Promise<_115.SimulateResponse>;
                        getTx(request: _115.GetTxRequest): Promise<_115.GetTxResponse>;
                        broadcastTx(request: _115.BroadcastTxRequest): Promise<_115.BroadcastTxResponse>;
                        getTxsEvent(request: _115.GetTxsEventRequest): Promise<_115.GetTxsEventResponse>;
                        getBlockWithTxs(request: _115.GetBlockWithTxsRequest): Promise<_115.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _117.QueryCurrentPlanRequest): Promise<_117.QueryCurrentPlanResponse>;
                        appliedPlan(request: _117.QueryAppliedPlanRequest): Promise<_117.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _117.QueryUpgradedConsensusStateRequest): Promise<_117.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _117.QueryModuleVersionsRequest): Promise<_117.QueryModuleVersionsResponse>;
                        authority(request?: _117.QueryAuthorityRequest): Promise<_117.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _179.LCDQueryClient;
                };
                authz: {
                    v1beta1: _180.LCDQueryClient;
                };
                bank: {
                    v1beta1: _181.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _182.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _183.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _184.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _185.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _186.LCDQueryClient;
                };
                gov: {
                    v1: _187.LCDQueryClient;
                    v1beta1: _188.LCDQueryClient;
                };
                group: {
                    v1: _189.LCDQueryClient;
                };
                mint: {
                    v1beta1: _190.LCDQueryClient;
                };
                nft: {
                    v1beta1: _191.LCDQueryClient;
                };
                params: {
                    v1beta1: _192.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _193.LCDQueryClient;
                };
                staking: {
                    v1beta1: _194.LCDQueryClient;
                };
                tx: {
                    v1beta1: _195.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _196.LCDQueryClient;
                };
            };
        }>;
    };
}
