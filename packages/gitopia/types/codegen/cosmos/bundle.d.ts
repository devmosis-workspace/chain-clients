import * as _28 from "./app/module/v1alpha1/module";
import * as _29 from "./app/v1alpha1/config";
import * as _30 from "./app/v1alpha1/module";
import * as _31 from "./app/v1alpha1/query";
import * as _32 from "./auth/v1beta1/auth";
import * as _33 from "./auth/v1beta1/genesis";
import * as _34 from "./auth/v1beta1/query";
import * as _35 from "./authz/v1beta1/authz";
import * as _36 from "./authz/v1beta1/event";
import * as _37 from "./authz/v1beta1/genesis";
import * as _38 from "./authz/v1beta1/query";
import * as _39 from "./authz/v1beta1/tx";
import * as _40 from "./bank/v1beta1/authz";
import * as _41 from "./bank/v1beta1/bank";
import * as _42 from "./bank/v1beta1/genesis";
import * as _43 from "./bank/v1beta1/query";
import * as _44 from "./bank/v1beta1/tx";
import * as _45 from "./base/abci/v1beta1/abci";
import * as _46 from "./base/kv/v1beta1/kv";
import * as _47 from "./base/node/v1beta1/query";
import * as _48 from "./base/query/v1beta1/pagination";
import * as _49 from "./base/reflection/v1beta1/reflection";
import * as _50 from "./base/reflection/v2alpha1/reflection";
import * as _51 from "./base/snapshots/v1beta1/snapshot";
import * as _52 from "./base/store/v1beta1/commit_info";
import * as _53 from "./base/store/v1beta1/listening";
import * as _54 from "./base/tendermint/v1beta1/query";
import * as _55 from "./base/tendermint/v1beta1/types";
import * as _56 from "./base/v1beta1/coin";
import * as _57 from "./capability/v1beta1/capability";
import * as _58 from "./capability/v1beta1/genesis";
import * as _59 from "./crisis/v1beta1/genesis";
import * as _60 from "./crisis/v1beta1/tx";
import * as _61 from "./crypto/ed25519/keys";
import * as _62 from "./crypto/hd/v1/hd";
import * as _63 from "./crypto/keyring/v1/record";
import * as _64 from "./crypto/multisig/keys";
import * as _65 from "./crypto/secp256k1/keys";
import * as _66 from "./crypto/secp256r1/keys";
import * as _67 from "./distribution/v1beta1/distribution";
import * as _68 from "./distribution/v1beta1/genesis";
import * as _69 from "./distribution/v1beta1/query";
import * as _70 from "./distribution/v1beta1/tx";
import * as _71 from "./evidence/v1beta1/evidence";
import * as _72 from "./evidence/v1beta1/genesis";
import * as _73 from "./evidence/v1beta1/query";
import * as _74 from "./evidence/v1beta1/tx";
import * as _75 from "./feegrant/v1beta1/feegrant";
import * as _76 from "./feegrant/v1beta1/genesis";
import * as _77 from "./feegrant/v1beta1/query";
import * as _78 from "./feegrant/v1beta1/tx";
import * as _79 from "./genutil/v1beta1/genesis";
import * as _80 from "./gov/v1/genesis";
import * as _81 from "./gov/v1/gov";
import * as _82 from "./gov/v1/query";
import * as _83 from "./gov/v1/tx";
import * as _84 from "./gov/v1beta1/genesis";
import * as _85 from "./gov/v1beta1/gov";
import * as _86 from "./gov/v1beta1/query";
import * as _87 from "./gov/v1beta1/tx";
import * as _88 from "./group/v1/events";
import * as _89 from "./group/v1/genesis";
import * as _90 from "./group/v1/query";
import * as _91 from "./group/v1/tx";
import * as _92 from "./group/v1/types";
import * as _93 from "./mint/v1beta1/genesis";
import * as _94 from "./mint/v1beta1/mint";
import * as _95 from "./mint/v1beta1/query";
import * as _97 from "./nft/v1beta1/event";
import * as _98 from "./nft/v1beta1/genesis";
import * as _99 from "./nft/v1beta1/nft";
import * as _100 from "./nft/v1beta1/query";
import * as _101 from "./nft/v1beta1/tx";
import * as _102 from "./orm/module/v1alpha1/module";
import * as _103 from "./orm/v1/orm";
import * as _104 from "./orm/v1alpha1/schema";
import * as _105 from "./params/v1beta1/params";
import * as _106 from "./params/v1beta1/query";
import * as _107 from "./slashing/v1beta1/genesis";
import * as _108 from "./slashing/v1beta1/query";
import * as _109 from "./slashing/v1beta1/slashing";
import * as _110 from "./slashing/v1beta1/tx";
import * as _111 from "./staking/v1beta1/authz";
import * as _112 from "./staking/v1beta1/genesis";
import * as _113 from "./staking/v1beta1/query";
import * as _114 from "./staking/v1beta1/staking";
import * as _115 from "./staking/v1beta1/tx";
import * as _116 from "./tx/signing/v1beta1/signing";
import * as _117 from "./tx/v1beta1/service";
import * as _118 from "./tx/v1beta1/tx";
import * as _119 from "./upgrade/v1beta1/query";
import * as _120 from "./upgrade/v1beta1/tx";
import * as _121 from "./upgrade/v1beta1/upgrade";
import * as _122 from "./vesting/v1beta1/tx";
import * as _123 from "./vesting/v1beta1/vesting";
import * as _181 from "./auth/v1beta1/query.lcd";
import * as _182 from "./authz/v1beta1/query.lcd";
import * as _183 from "./bank/v1beta1/query.lcd";
import * as _184 from "./base/node/v1beta1/query.lcd";
import * as _185 from "./base/tendermint/v1beta1/query.lcd";
import * as _186 from "./distribution/v1beta1/query.lcd";
import * as _187 from "./evidence/v1beta1/query.lcd";
import * as _188 from "./feegrant/v1beta1/query.lcd";
import * as _189 from "./gov/v1/query.lcd";
import * as _190 from "./gov/v1beta1/query.lcd";
import * as _191 from "./group/v1/query.lcd";
import * as _192 from "./mint/v1beta1/query.lcd";
import * as _193 from "./nft/v1beta1/query.lcd";
import * as _194 from "./params/v1beta1/query.lcd";
import * as _195 from "./slashing/v1beta1/query.lcd";
import * as _196 from "./staking/v1beta1/query.lcd";
import * as _197 from "./tx/v1beta1/service.lcd";
import * as _198 from "./upgrade/v1beta1/query.lcd";
import * as _199 from "./app/v1alpha1/query.rpc.Query";
import * as _200 from "./auth/v1beta1/query.rpc.Query";
import * as _201 from "./authz/v1beta1/query.rpc.Query";
import * as _202 from "./bank/v1beta1/query.rpc.Query";
import * as _203 from "./base/node/v1beta1/query.rpc.Service";
import * as _204 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _205 from "./distribution/v1beta1/query.rpc.Query";
import * as _206 from "./evidence/v1beta1/query.rpc.Query";
import * as _207 from "./feegrant/v1beta1/query.rpc.Query";
import * as _208 from "./gov/v1/query.rpc.Query";
import * as _209 from "./gov/v1beta1/query.rpc.Query";
import * as _210 from "./group/v1/query.rpc.Query";
import * as _211 from "./mint/v1beta1/query.rpc.Query";
import * as _212 from "./nft/v1beta1/query.rpc.Query";
import * as _213 from "./params/v1beta1/query.rpc.Query";
import * as _214 from "./slashing/v1beta1/query.rpc.Query";
import * as _215 from "./staking/v1beta1/query.rpc.Query";
import * as _216 from "./tx/v1beta1/service.rpc.Service";
import * as _217 from "./upgrade/v1beta1/query.rpc.Query";
import * as _218 from "./authz/v1beta1/tx.rpc.msg";
import * as _219 from "./bank/v1beta1/tx.rpc.msg";
import * as _220 from "./crisis/v1beta1/tx.rpc.msg";
import * as _221 from "./distribution/v1beta1/tx.rpc.msg";
import * as _222 from "./evidence/v1beta1/tx.rpc.msg";
import * as _223 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _224 from "./gov/v1/tx.rpc.msg";
import * as _225 from "./gov/v1beta1/tx.rpc.msg";
import * as _226 from "./group/v1/tx.rpc.msg";
import * as _227 from "./nft/v1beta1/tx.rpc.msg";
import * as _228 from "./slashing/v1beta1/tx.rpc.msg";
import * as _229 from "./staking/v1beta1/tx.rpc.msg";
import * as _230 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _231 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _28.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _28.Module;
                    fromPartial(_: Partial<_28.Module>): _28.Module;
                    fromAmino(_: _28.ModuleAmino): _28.Module;
                    toAmino(_: _28.Module): _28.ModuleAmino;
                    fromAminoMsg(object: _28.ModuleAminoMsg): _28.Module;
                    toAminoMsg(message: _28.Module): _28.ModuleAminoMsg;
                    fromProtoMsg(message: _28.ModuleProtoMsg): _28.Module;
                    toProto(message: _28.Module): Uint8Array;
                    toProtoMsg(message: _28.Module): _28.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                config(request?: _31.QueryConfigRequest): Promise<_31.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _31.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.QueryConfigRequest;
                fromPartial(_: Partial<_31.QueryConfigRequest>): _31.QueryConfigRequest;
                fromAmino(_: _31.QueryConfigRequestAmino): _31.QueryConfigRequest;
                toAmino(_: _31.QueryConfigRequest): _31.QueryConfigRequestAmino;
                fromAminoMsg(object: _31.QueryConfigRequestAminoMsg): _31.QueryConfigRequest;
                toAminoMsg(message: _31.QueryConfigRequest): _31.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _31.QueryConfigRequestProtoMsg): _31.QueryConfigRequest;
                toProto(message: _31.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _31.QueryConfigRequest): _31.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _31.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryConfigResponse;
                fromPartial(object: Partial<_31.QueryConfigResponse>): _31.QueryConfigResponse;
                fromAmino(object: _31.QueryConfigResponseAmino): _31.QueryConfigResponse;
                toAmino(message: _31.QueryConfigResponse): _31.QueryConfigResponseAmino;
                fromAminoMsg(object: _31.QueryConfigResponseAminoMsg): _31.QueryConfigResponse;
                toAminoMsg(message: _31.QueryConfigResponse): _31.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _31.QueryConfigResponseProtoMsg): _31.QueryConfigResponse;
                toProto(message: _31.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _31.QueryConfigResponse): _31.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _30.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.ModuleDescriptor;
                fromPartial(object: Partial<_30.ModuleDescriptor>): _30.ModuleDescriptor;
                fromAmino(object: _30.ModuleDescriptorAmino): _30.ModuleDescriptor;
                toAmino(message: _30.ModuleDescriptor): _30.ModuleDescriptorAmino;
                fromAminoMsg(object: _30.ModuleDescriptorAminoMsg): _30.ModuleDescriptor;
                toAminoMsg(message: _30.ModuleDescriptor): _30.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _30.ModuleDescriptorProtoMsg): _30.ModuleDescriptor;
                toProto(message: _30.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _30.ModuleDescriptor): _30.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _30.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.PackageReference;
                fromPartial(object: Partial<_30.PackageReference>): _30.PackageReference;
                fromAmino(object: _30.PackageReferenceAmino): _30.PackageReference;
                toAmino(message: _30.PackageReference): _30.PackageReferenceAmino;
                fromAminoMsg(object: _30.PackageReferenceAminoMsg): _30.PackageReference;
                toAminoMsg(message: _30.PackageReference): _30.PackageReferenceAminoMsg;
                fromProtoMsg(message: _30.PackageReferenceProtoMsg): _30.PackageReference;
                toProto(message: _30.PackageReference): Uint8Array;
                toProtoMsg(message: _30.PackageReference): _30.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _30.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MigrateFromInfo;
                fromPartial(object: Partial<_30.MigrateFromInfo>): _30.MigrateFromInfo;
                fromAmino(object: _30.MigrateFromInfoAmino): _30.MigrateFromInfo;
                toAmino(message: _30.MigrateFromInfo): _30.MigrateFromInfoAmino;
                fromAminoMsg(object: _30.MigrateFromInfoAminoMsg): _30.MigrateFromInfo;
                toAminoMsg(message: _30.MigrateFromInfo): _30.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _30.MigrateFromInfoProtoMsg): _30.MigrateFromInfo;
                toProto(message: _30.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _30.MigrateFromInfo): _30.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _29.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Config;
                fromPartial(object: Partial<_29.Config>): _29.Config;
                fromAmino(object: _29.ConfigAmino): _29.Config;
                toAmino(message: _29.Config): _29.ConfigAmino;
                fromAminoMsg(object: _29.ConfigAminoMsg): _29.Config;
                toAminoMsg(message: _29.Config): _29.ConfigAminoMsg;
                fromProtoMsg(message: _29.ConfigProtoMsg): _29.Config;
                toProto(message: _29.Config): Uint8Array;
                toProtoMsg(message: _29.Config): _29.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _29.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.ModuleConfig;
                fromPartial(object: Partial<_29.ModuleConfig>): _29.ModuleConfig;
                fromAmino(object: _29.ModuleConfigAmino): _29.ModuleConfig;
                toAmino(message: _29.ModuleConfig): _29.ModuleConfigAmino;
                fromAminoMsg(object: _29.ModuleConfigAminoMsg): _29.ModuleConfig;
                toAminoMsg(message: _29.ModuleConfig): _29.ModuleConfigAminoMsg;
                fromProtoMsg(message: _29.ModuleConfigProtoMsg): _29.ModuleConfig;
                toProto(message: _29.ModuleConfig): Uint8Array;
                toProtoMsg(message: _29.ModuleConfig): _29.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                accounts(request?: _34.QueryAccountsRequest): Promise<_34.QueryAccountsResponse>;
                account(request: _34.QueryAccountRequest): Promise<_34.QueryAccountResponse>;
                accountAddressByID(request: _34.QueryAccountAddressByIDRequest): Promise<_34.QueryAccountAddressByIDResponse>;
                params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                moduleAccounts(request?: _34.QueryModuleAccountsRequest): Promise<_34.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _34.QueryModuleAccountByNameRequest): Promise<_34.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _34.Bech32PrefixRequest): Promise<_34.Bech32PrefixResponse>;
                addressBytesToString(request: _34.AddressBytesToStringRequest): Promise<_34.AddressBytesToStringResponse>;
                addressStringToBytes(request: _34.AddressStringToBytesRequest): Promise<_34.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _34.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryAccountsRequest;
                fromPartial(object: Partial<_34.QueryAccountsRequest>): _34.QueryAccountsRequest;
                fromAmino(object: _34.QueryAccountsRequestAmino): _34.QueryAccountsRequest;
                toAmino(message: _34.QueryAccountsRequest): _34.QueryAccountsRequestAmino;
                fromAminoMsg(object: _34.QueryAccountsRequestAminoMsg): _34.QueryAccountsRequest;
                toAminoMsg(message: _34.QueryAccountsRequest): _34.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryAccountsRequestProtoMsg): _34.QueryAccountsRequest;
                toProto(message: _34.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryAccountsRequest): _34.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _34.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryAccountsResponse;
                fromPartial(object: Partial<_34.QueryAccountsResponse>): _34.QueryAccountsResponse;
                fromAmino(object: _34.QueryAccountsResponseAmino): _34.QueryAccountsResponse;
                toAmino(message: _34.QueryAccountsResponse): _34.QueryAccountsResponseAmino;
                fromAminoMsg(object: _34.QueryAccountsResponseAminoMsg): _34.QueryAccountsResponse;
                toAminoMsg(message: _34.QueryAccountsResponse): _34.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryAccountsResponseProtoMsg): _34.QueryAccountsResponse;
                toProto(message: _34.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryAccountsResponse): _34.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _34.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryAccountRequest;
                fromPartial(object: Partial<_34.QueryAccountRequest>): _34.QueryAccountRequest;
                fromAmino(object: _34.QueryAccountRequestAmino): _34.QueryAccountRequest;
                toAmino(message: _34.QueryAccountRequest): _34.QueryAccountRequestAmino;
                fromAminoMsg(object: _34.QueryAccountRequestAminoMsg): _34.QueryAccountRequest;
                toAminoMsg(message: _34.QueryAccountRequest): _34.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _34.QueryAccountRequestProtoMsg): _34.QueryAccountRequest;
                toProto(message: _34.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _34.QueryAccountRequest): _34.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _34.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryAccountResponse;
                fromPartial(object: Partial<_34.QueryAccountResponse>): _34.QueryAccountResponse;
                fromAmino(object: _34.QueryAccountResponseAmino): _34.QueryAccountResponse;
                toAmino(message: _34.QueryAccountResponse): _34.QueryAccountResponseAmino;
                fromAminoMsg(object: _34.QueryAccountResponseAminoMsg): _34.QueryAccountResponse;
                toAminoMsg(message: _34.QueryAccountResponse): _34.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _34.QueryAccountResponseProtoMsg): _34.QueryAccountResponse;
                toProto(message: _34.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _34.QueryAccountResponse): _34.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _34.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryParamsRequest;
                fromPartial(_: Partial<_34.QueryParamsRequest>): _34.QueryParamsRequest;
                fromAmino(_: _34.QueryParamsRequestAmino): _34.QueryParamsRequest;
                toAmino(_: _34.QueryParamsRequest): _34.QueryParamsRequestAmino;
                fromAminoMsg(object: _34.QueryParamsRequestAminoMsg): _34.QueryParamsRequest;
                toAminoMsg(message: _34.QueryParamsRequest): _34.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryParamsRequestProtoMsg): _34.QueryParamsRequest;
                toProto(message: _34.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryParamsRequest): _34.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _34.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryParamsResponse;
                fromPartial(object: Partial<_34.QueryParamsResponse>): _34.QueryParamsResponse;
                fromAmino(object: _34.QueryParamsResponseAmino): _34.QueryParamsResponse;
                toAmino(message: _34.QueryParamsResponse): _34.QueryParamsResponseAmino;
                fromAminoMsg(object: _34.QueryParamsResponseAminoMsg): _34.QueryParamsResponse;
                toAminoMsg(message: _34.QueryParamsResponse): _34.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryParamsResponseProtoMsg): _34.QueryParamsResponse;
                toProto(message: _34.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryParamsResponse): _34.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _34.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_34.QueryModuleAccountsRequest>): _34.QueryModuleAccountsRequest;
                fromAmino(_: _34.QueryModuleAccountsRequestAmino): _34.QueryModuleAccountsRequest;
                toAmino(_: _34.QueryModuleAccountsRequest): _34.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _34.QueryModuleAccountsRequestAminoMsg): _34.QueryModuleAccountsRequest;
                toAminoMsg(message: _34.QueryModuleAccountsRequest): _34.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryModuleAccountsRequestProtoMsg): _34.QueryModuleAccountsRequest;
                toProto(message: _34.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryModuleAccountsRequest): _34.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _34.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_34.QueryModuleAccountsResponse>): _34.QueryModuleAccountsResponse;
                fromAmino(object: _34.QueryModuleAccountsResponseAmino): _34.QueryModuleAccountsResponse;
                toAmino(message: _34.QueryModuleAccountsResponse): _34.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _34.QueryModuleAccountsResponseAminoMsg): _34.QueryModuleAccountsResponse;
                toAminoMsg(message: _34.QueryModuleAccountsResponse): _34.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryModuleAccountsResponseProtoMsg): _34.QueryModuleAccountsResponse;
                toProto(message: _34.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryModuleAccountsResponse): _34.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _34.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_34.QueryModuleAccountByNameRequest>): _34.QueryModuleAccountByNameRequest;
                fromAmino(object: _34.QueryModuleAccountByNameRequestAmino): _34.QueryModuleAccountByNameRequest;
                toAmino(message: _34.QueryModuleAccountByNameRequest): _34.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _34.QueryModuleAccountByNameRequestAminoMsg): _34.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _34.QueryModuleAccountByNameRequest): _34.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _34.QueryModuleAccountByNameRequestProtoMsg): _34.QueryModuleAccountByNameRequest;
                toProto(message: _34.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _34.QueryModuleAccountByNameRequest): _34.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _34.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_34.QueryModuleAccountByNameResponse>): _34.QueryModuleAccountByNameResponse;
                fromAmino(object: _34.QueryModuleAccountByNameResponseAmino): _34.QueryModuleAccountByNameResponse;
                toAmino(message: _34.QueryModuleAccountByNameResponse): _34.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _34.QueryModuleAccountByNameResponseAminoMsg): _34.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _34.QueryModuleAccountByNameResponse): _34.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _34.QueryModuleAccountByNameResponseProtoMsg): _34.QueryModuleAccountByNameResponse;
                toProto(message: _34.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _34.QueryModuleAccountByNameResponse): _34.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _34.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.Bech32PrefixRequest;
                fromPartial(_: Partial<_34.Bech32PrefixRequest>): _34.Bech32PrefixRequest;
                fromAmino(_: _34.Bech32PrefixRequestAmino): _34.Bech32PrefixRequest;
                toAmino(_: _34.Bech32PrefixRequest): _34.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _34.Bech32PrefixRequestAminoMsg): _34.Bech32PrefixRequest;
                toAminoMsg(message: _34.Bech32PrefixRequest): _34.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _34.Bech32PrefixRequestProtoMsg): _34.Bech32PrefixRequest;
                toProto(message: _34.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _34.Bech32PrefixRequest): _34.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _34.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Bech32PrefixResponse;
                fromPartial(object: Partial<_34.Bech32PrefixResponse>): _34.Bech32PrefixResponse;
                fromAmino(object: _34.Bech32PrefixResponseAmino): _34.Bech32PrefixResponse;
                toAmino(message: _34.Bech32PrefixResponse): _34.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _34.Bech32PrefixResponseAminoMsg): _34.Bech32PrefixResponse;
                toAminoMsg(message: _34.Bech32PrefixResponse): _34.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _34.Bech32PrefixResponseProtoMsg): _34.Bech32PrefixResponse;
                toProto(message: _34.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _34.Bech32PrefixResponse): _34.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _34.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.AddressBytesToStringRequest;
                fromPartial(object: Partial<_34.AddressBytesToStringRequest>): _34.AddressBytesToStringRequest;
                fromAmino(object: _34.AddressBytesToStringRequestAmino): _34.AddressBytesToStringRequest;
                toAmino(message: _34.AddressBytesToStringRequest): _34.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _34.AddressBytesToStringRequestAminoMsg): _34.AddressBytesToStringRequest;
                toAminoMsg(message: _34.AddressBytesToStringRequest): _34.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _34.AddressBytesToStringRequestProtoMsg): _34.AddressBytesToStringRequest;
                toProto(message: _34.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _34.AddressBytesToStringRequest): _34.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _34.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.AddressBytesToStringResponse;
                fromPartial(object: Partial<_34.AddressBytesToStringResponse>): _34.AddressBytesToStringResponse;
                fromAmino(object: _34.AddressBytesToStringResponseAmino): _34.AddressBytesToStringResponse;
                toAmino(message: _34.AddressBytesToStringResponse): _34.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _34.AddressBytesToStringResponseAminoMsg): _34.AddressBytesToStringResponse;
                toAminoMsg(message: _34.AddressBytesToStringResponse): _34.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _34.AddressBytesToStringResponseProtoMsg): _34.AddressBytesToStringResponse;
                toProto(message: _34.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _34.AddressBytesToStringResponse): _34.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _34.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.AddressStringToBytesRequest;
                fromPartial(object: Partial<_34.AddressStringToBytesRequest>): _34.AddressStringToBytesRequest;
                fromAmino(object: _34.AddressStringToBytesRequestAmino): _34.AddressStringToBytesRequest;
                toAmino(message: _34.AddressStringToBytesRequest): _34.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _34.AddressStringToBytesRequestAminoMsg): _34.AddressStringToBytesRequest;
                toAminoMsg(message: _34.AddressStringToBytesRequest): _34.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _34.AddressStringToBytesRequestProtoMsg): _34.AddressStringToBytesRequest;
                toProto(message: _34.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _34.AddressStringToBytesRequest): _34.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _34.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.AddressStringToBytesResponse;
                fromPartial(object: Partial<_34.AddressStringToBytesResponse>): _34.AddressStringToBytesResponse;
                fromAmino(object: _34.AddressStringToBytesResponseAmino): _34.AddressStringToBytesResponse;
                toAmino(message: _34.AddressStringToBytesResponse): _34.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _34.AddressStringToBytesResponseAminoMsg): _34.AddressStringToBytesResponse;
                toAminoMsg(message: _34.AddressStringToBytesResponse): _34.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _34.AddressStringToBytesResponseProtoMsg): _34.AddressStringToBytesResponse;
                toProto(message: _34.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _34.AddressStringToBytesResponse): _34.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _34.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_34.QueryAccountAddressByIDRequest>): _34.QueryAccountAddressByIDRequest;
                fromAmino(object: _34.QueryAccountAddressByIDRequestAmino): _34.QueryAccountAddressByIDRequest;
                toAmino(message: _34.QueryAccountAddressByIDRequest): _34.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _34.QueryAccountAddressByIDRequestAminoMsg): _34.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _34.QueryAccountAddressByIDRequest): _34.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _34.QueryAccountAddressByIDRequestProtoMsg): _34.QueryAccountAddressByIDRequest;
                toProto(message: _34.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _34.QueryAccountAddressByIDRequest): _34.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _34.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_34.QueryAccountAddressByIDResponse>): _34.QueryAccountAddressByIDResponse;
                fromAmino(object: _34.QueryAccountAddressByIDResponseAmino): _34.QueryAccountAddressByIDResponse;
                toAmino(message: _34.QueryAccountAddressByIDResponse): _34.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _34.QueryAccountAddressByIDResponseAminoMsg): _34.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _34.QueryAccountAddressByIDResponse): _34.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _34.QueryAccountAddressByIDResponseProtoMsg): _34.QueryAccountAddressByIDResponse;
                toProto(message: _34.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _34.QueryAccountAddressByIDResponse): _34.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _32.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _32.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _33.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.GenesisState;
                fromPartial(object: Partial<_33.GenesisState>): _33.GenesisState;
                fromAmino(object: _33.GenesisStateAmino): _33.GenesisState;
                toAmino(message: _33.GenesisState): _33.GenesisStateAmino;
                fromAminoMsg(object: _33.GenesisStateAminoMsg): _33.GenesisState;
                toAminoMsg(message: _33.GenesisState): _33.GenesisStateAminoMsg;
                fromProtoMsg(message: _33.GenesisStateProtoMsg): _33.GenesisState;
                toProto(message: _33.GenesisState): Uint8Array;
                toProtoMsg(message: _33.GenesisState): _33.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _32.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.BaseAccount;
                fromPartial(object: Partial<_32.BaseAccount>): _32.BaseAccount;
                fromAmino(object: _32.BaseAccountAmino): _32.BaseAccount;
                toAmino(message: _32.BaseAccount): _32.BaseAccountAmino;
                fromAminoMsg(object: _32.BaseAccountAminoMsg): _32.BaseAccount;
                toAminoMsg(message: _32.BaseAccount): _32.BaseAccountAminoMsg;
                fromProtoMsg(message: _32.BaseAccountProtoMsg): _32.BaseAccount;
                toProto(message: _32.BaseAccount): Uint8Array;
                toProtoMsg(message: _32.BaseAccount): _32.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _32.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.ModuleAccount;
                fromPartial(object: Partial<_32.ModuleAccount>): _32.ModuleAccount;
                fromAmino(object: _32.ModuleAccountAmino): _32.ModuleAccount;
                toAmino(message: _32.ModuleAccount): _32.ModuleAccountAmino;
                fromAminoMsg(object: _32.ModuleAccountAminoMsg): _32.ModuleAccount;
                toAminoMsg(message: _32.ModuleAccount): _32.ModuleAccountAminoMsg;
                fromProtoMsg(message: _32.ModuleAccountProtoMsg): _32.ModuleAccount;
                toProto(message: _32.ModuleAccount): Uint8Array;
                toProtoMsg(message: _32.ModuleAccount): _32.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _32.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Params;
                fromPartial(object: Partial<_32.Params>): _32.Params;
                fromAmino(object: _32.ParamsAmino): _32.Params;
                toAmino(message: _32.Params): _32.ParamsAmino;
                fromAminoMsg(object: _32.ParamsAminoMsg): _32.Params;
                toAminoMsg(message: _32.Params): _32.ParamsAminoMsg;
                fromProtoMsg(message: _32.ParamsProtoMsg): _32.Params;
                toProto(message: _32.Params): Uint8Array;
                toProtoMsg(message: _32.Params): _32.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            QueryClientImpl: typeof _201.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                grants(request: _38.QueryGrantsRequest): Promise<_38.QueryGrantsResponse>;
                granterGrants(request: _38.QueryGranterGrantsRequest): Promise<_38.QueryGranterGrantsResponse>;
                granteeGrants(request: _38.QueryGranteeGrantsRequest): Promise<_38.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _39.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _39.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _39.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _39.MsgGrant): {
                        typeUrl: string;
                        value: _39.MsgGrant;
                    };
                    exec(value: _39.MsgExec): {
                        typeUrl: string;
                        value: _39.MsgExec;
                    };
                    revoke(value: _39.MsgRevoke): {
                        typeUrl: string;
                        value: _39.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _39.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _39.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _39.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _39.MsgGrant): {
                        typeUrl: string;
                        value: _39.MsgGrant;
                    };
                    exec(value: _39.MsgExec): {
                        typeUrl: string;
                        value: _39.MsgExec;
                    };
                    revoke(value: _39.MsgRevoke): {
                        typeUrl: string;
                        value: _39.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _39.MsgGrant) => _39.MsgGrantAmino;
                    fromAmino: (object: _39.MsgGrantAmino) => _39.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _39.MsgExec) => _39.MsgExecAmino;
                    fromAmino: (object: _39.MsgExecAmino) => _39.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _39.MsgRevoke) => _39.MsgRevokeAmino;
                    fromAmino: (object: _39.MsgRevokeAmino) => _39.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _39.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MsgGrant;
                fromPartial(object: Partial<_39.MsgGrant>): _39.MsgGrant;
                fromAmino(object: _39.MsgGrantAmino): _39.MsgGrant;
                toAmino(message: _39.MsgGrant): _39.MsgGrantAmino;
                fromAminoMsg(object: _39.MsgGrantAminoMsg): _39.MsgGrant;
                toAminoMsg(message: _39.MsgGrant): _39.MsgGrantAminoMsg;
                fromProtoMsg(message: _39.MsgGrantProtoMsg): _39.MsgGrant;
                toProto(message: _39.MsgGrant): Uint8Array;
                toProtoMsg(message: _39.MsgGrant): _39.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _39.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MsgExecResponse;
                fromPartial(object: Partial<_39.MsgExecResponse>): _39.MsgExecResponse;
                fromAmino(object: _39.MsgExecResponseAmino): _39.MsgExecResponse;
                toAmino(message: _39.MsgExecResponse): _39.MsgExecResponseAmino;
                fromAminoMsg(object: _39.MsgExecResponseAminoMsg): _39.MsgExecResponse;
                toAminoMsg(message: _39.MsgExecResponse): _39.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _39.MsgExecResponseProtoMsg): _39.MsgExecResponse;
                toProto(message: _39.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _39.MsgExecResponse): _39.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _39.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MsgExec;
                fromPartial(object: Partial<_39.MsgExec>): _39.MsgExec;
                fromAmino(object: _39.MsgExecAmino): _39.MsgExec;
                toAmino(message: _39.MsgExec): _39.MsgExecAmino;
                fromAminoMsg(object: _39.MsgExecAminoMsg): _39.MsgExec;
                toAminoMsg(message: _39.MsgExec): _39.MsgExecAminoMsg;
                fromProtoMsg(message: _39.MsgExecProtoMsg): _39.MsgExec;
                toProto(message: _39.MsgExec): Uint8Array;
                toProtoMsg(message: _39.MsgExec): _39.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _39.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.MsgGrantResponse;
                fromPartial(_: Partial<_39.MsgGrantResponse>): _39.MsgGrantResponse;
                fromAmino(_: _39.MsgGrantResponseAmino): _39.MsgGrantResponse;
                toAmino(_: _39.MsgGrantResponse): _39.MsgGrantResponseAmino;
                fromAminoMsg(object: _39.MsgGrantResponseAminoMsg): _39.MsgGrantResponse;
                toAminoMsg(message: _39.MsgGrantResponse): _39.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _39.MsgGrantResponseProtoMsg): _39.MsgGrantResponse;
                toProto(message: _39.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _39.MsgGrantResponse): _39.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _39.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MsgRevoke;
                fromPartial(object: Partial<_39.MsgRevoke>): _39.MsgRevoke;
                fromAmino(object: _39.MsgRevokeAmino): _39.MsgRevoke;
                toAmino(message: _39.MsgRevoke): _39.MsgRevokeAmino;
                fromAminoMsg(object: _39.MsgRevokeAminoMsg): _39.MsgRevoke;
                toAminoMsg(message: _39.MsgRevoke): _39.MsgRevokeAminoMsg;
                fromProtoMsg(message: _39.MsgRevokeProtoMsg): _39.MsgRevoke;
                toProto(message: _39.MsgRevoke): Uint8Array;
                toProtoMsg(message: _39.MsgRevoke): _39.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _39.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.MsgRevokeResponse;
                fromPartial(_: Partial<_39.MsgRevokeResponse>): _39.MsgRevokeResponse;
                fromAmino(_: _39.MsgRevokeResponseAmino): _39.MsgRevokeResponse;
                toAmino(_: _39.MsgRevokeResponse): _39.MsgRevokeResponseAmino;
                fromAminoMsg(object: _39.MsgRevokeResponseAminoMsg): _39.MsgRevokeResponse;
                toAminoMsg(message: _39.MsgRevokeResponse): _39.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _39.MsgRevokeResponseProtoMsg): _39.MsgRevokeResponse;
                toProto(message: _39.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _39.MsgRevokeResponse): _39.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _38.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryGrantsRequest;
                fromPartial(object: Partial<_38.QueryGrantsRequest>): _38.QueryGrantsRequest;
                fromAmino(object: _38.QueryGrantsRequestAmino): _38.QueryGrantsRequest;
                toAmino(message: _38.QueryGrantsRequest): _38.QueryGrantsRequestAmino;
                fromAminoMsg(object: _38.QueryGrantsRequestAminoMsg): _38.QueryGrantsRequest;
                toAminoMsg(message: _38.QueryGrantsRequest): _38.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryGrantsRequestProtoMsg): _38.QueryGrantsRequest;
                toProto(message: _38.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryGrantsRequest): _38.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _38.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryGrantsResponse;
                fromPartial(object: Partial<_38.QueryGrantsResponse>): _38.QueryGrantsResponse;
                fromAmino(object: _38.QueryGrantsResponseAmino): _38.QueryGrantsResponse;
                toAmino(message: _38.QueryGrantsResponse): _38.QueryGrantsResponseAmino;
                fromAminoMsg(object: _38.QueryGrantsResponseAminoMsg): _38.QueryGrantsResponse;
                toAminoMsg(message: _38.QueryGrantsResponse): _38.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryGrantsResponseProtoMsg): _38.QueryGrantsResponse;
                toProto(message: _38.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryGrantsResponse): _38.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _38.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_38.QueryGranterGrantsRequest>): _38.QueryGranterGrantsRequest;
                fromAmino(object: _38.QueryGranterGrantsRequestAmino): _38.QueryGranterGrantsRequest;
                toAmino(message: _38.QueryGranterGrantsRequest): _38.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _38.QueryGranterGrantsRequestAminoMsg): _38.QueryGranterGrantsRequest;
                toAminoMsg(message: _38.QueryGranterGrantsRequest): _38.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryGranterGrantsRequestProtoMsg): _38.QueryGranterGrantsRequest;
                toProto(message: _38.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryGranterGrantsRequest): _38.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _38.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_38.QueryGranterGrantsResponse>): _38.QueryGranterGrantsResponse;
                fromAmino(object: _38.QueryGranterGrantsResponseAmino): _38.QueryGranterGrantsResponse;
                toAmino(message: _38.QueryGranterGrantsResponse): _38.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _38.QueryGranterGrantsResponseAminoMsg): _38.QueryGranterGrantsResponse;
                toAminoMsg(message: _38.QueryGranterGrantsResponse): _38.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryGranterGrantsResponseProtoMsg): _38.QueryGranterGrantsResponse;
                toProto(message: _38.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryGranterGrantsResponse): _38.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _38.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_38.QueryGranteeGrantsRequest>): _38.QueryGranteeGrantsRequest;
                fromAmino(object: _38.QueryGranteeGrantsRequestAmino): _38.QueryGranteeGrantsRequest;
                toAmino(message: _38.QueryGranteeGrantsRequest): _38.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _38.QueryGranteeGrantsRequestAminoMsg): _38.QueryGranteeGrantsRequest;
                toAminoMsg(message: _38.QueryGranteeGrantsRequest): _38.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryGranteeGrantsRequestProtoMsg): _38.QueryGranteeGrantsRequest;
                toProto(message: _38.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryGranteeGrantsRequest): _38.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _38.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_38.QueryGranteeGrantsResponse>): _38.QueryGranteeGrantsResponse;
                fromAmino(object: _38.QueryGranteeGrantsResponseAmino): _38.QueryGranteeGrantsResponse;
                toAmino(message: _38.QueryGranteeGrantsResponse): _38.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _38.QueryGranteeGrantsResponseAminoMsg): _38.QueryGranteeGrantsResponse;
                toAminoMsg(message: _38.QueryGranteeGrantsResponse): _38.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryGranteeGrantsResponseProtoMsg): _38.QueryGranteeGrantsResponse;
                toProto(message: _38.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryGranteeGrantsResponse): _38.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _36.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.EventGrant;
                fromPartial(object: Partial<_36.EventGrant>): _36.EventGrant;
                fromAmino(object: _36.EventGrantAmino): _36.EventGrant;
                toAmino(message: _36.EventGrant): _36.EventGrantAmino;
                fromAminoMsg(object: _36.EventGrantAminoMsg): _36.EventGrant;
                toAminoMsg(message: _36.EventGrant): _36.EventGrantAminoMsg;
                fromProtoMsg(message: _36.EventGrantProtoMsg): _36.EventGrant;
                toProto(message: _36.EventGrant): Uint8Array;
                toProtoMsg(message: _36.EventGrant): _36.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _36.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.EventRevoke;
                fromPartial(object: Partial<_36.EventRevoke>): _36.EventRevoke;
                fromAmino(object: _36.EventRevokeAmino): _36.EventRevoke;
                toAmino(message: _36.EventRevoke): _36.EventRevokeAmino;
                fromAminoMsg(object: _36.EventRevokeAminoMsg): _36.EventRevoke;
                toAminoMsg(message: _36.EventRevoke): _36.EventRevokeAminoMsg;
                fromProtoMsg(message: _36.EventRevokeProtoMsg): _36.EventRevoke;
                toProto(message: _36.EventRevoke): Uint8Array;
                toProtoMsg(message: _36.EventRevoke): _36.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _35.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.GenericAuthorization;
                fromPartial(object: Partial<_35.GenericAuthorization>): _35.GenericAuthorization;
                fromAmino(object: _35.GenericAuthorizationAmino): _35.GenericAuthorization;
                toAmino(message: _35.GenericAuthorization): _35.GenericAuthorizationAmino;
                fromAminoMsg(object: _35.GenericAuthorizationAminoMsg): _35.GenericAuthorization;
                toAminoMsg(message: _35.GenericAuthorization): _35.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _35.GenericAuthorizationProtoMsg): _35.GenericAuthorization;
                toProto(message: _35.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _35.GenericAuthorization): _35.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _35.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.Grant;
                fromPartial(object: Partial<_35.Grant>): _35.Grant;
                fromAmino(object: _35.GrantAmino): _35.Grant;
                toAmino(message: _35.Grant): _35.GrantAmino;
                fromAminoMsg(object: _35.GrantAminoMsg): _35.Grant;
                toAminoMsg(message: _35.Grant): _35.GrantAminoMsg;
                fromProtoMsg(message: _35.GrantProtoMsg): _35.Grant;
                toProto(message: _35.Grant): Uint8Array;
                toProtoMsg(message: _35.Grant): _35.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _35.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.GrantAuthorization;
                fromPartial(object: Partial<_35.GrantAuthorization>): _35.GrantAuthorization;
                fromAmino(object: _35.GrantAuthorizationAmino): _35.GrantAuthorization;
                toAmino(message: _35.GrantAuthorization): _35.GrantAuthorizationAmino;
                fromAminoMsg(object: _35.GrantAuthorizationAminoMsg): _35.GrantAuthorization;
                toAminoMsg(message: _35.GrantAuthorization): _35.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _35.GrantAuthorizationProtoMsg): _35.GrantAuthorization;
                toProto(message: _35.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _35.GrantAuthorization): _35.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _35.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.GrantQueueItem;
                fromPartial(object: Partial<_35.GrantQueueItem>): _35.GrantQueueItem;
                fromAmino(object: _35.GrantQueueItemAmino): _35.GrantQueueItem;
                toAmino(message: _35.GrantQueueItem): _35.GrantQueueItemAmino;
                fromAminoMsg(object: _35.GrantQueueItemAminoMsg): _35.GrantQueueItem;
                toAminoMsg(message: _35.GrantQueueItem): _35.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _35.GrantQueueItemProtoMsg): _35.GrantQueueItem;
                toProto(message: _35.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _35.GrantQueueItem): _35.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _40.SendAuthorization | _111.StakeAuthorization | _35.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _202.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _43.QueryBalanceRequest): Promise<_43.QueryBalanceResponse>;
                allBalances(request: _43.QueryAllBalancesRequest): Promise<_43.QueryAllBalancesResponse>;
                spendableBalances(request: _43.QuerySpendableBalancesRequest): Promise<_43.QuerySpendableBalancesResponse>;
                totalSupply(request?: _43.QueryTotalSupplyRequest): Promise<_43.QueryTotalSupplyResponse>;
                supplyOf(request: _43.QuerySupplyOfRequest): Promise<_43.QuerySupplyOfResponse>;
                params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                denomMetadata(request: _43.QueryDenomMetadataRequest): Promise<_43.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _43.QueryDenomsMetadataRequest): Promise<_43.QueryDenomsMetadataResponse>;
                denomOwners(request: _43.QueryDenomOwnersRequest): Promise<_43.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _44.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _44.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _44.MsgSend): {
                        typeUrl: string;
                        value: _44.MsgSend;
                    };
                    multiSend(value: _44.MsgMultiSend): {
                        typeUrl: string;
                        value: _44.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _44.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _44.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _44.MsgSend): {
                        typeUrl: string;
                        value: _44.MsgSend;
                    };
                    multiSend(value: _44.MsgMultiSend): {
                        typeUrl: string;
                        value: _44.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _44.MsgSend) => _44.MsgSendAmino;
                    fromAmino: (object: _44.MsgSendAmino) => _44.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _44.MsgMultiSend) => _44.MsgMultiSendAmino;
                    fromAmino: (object: _44.MsgMultiSendAmino) => _44.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _44.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgSend;
                fromPartial(object: Partial<_44.MsgSend>): _44.MsgSend;
                fromAmino(object: _44.MsgSendAmino): _44.MsgSend;
                toAmino(message: _44.MsgSend): _44.MsgSendAmino;
                fromAminoMsg(object: _44.MsgSendAminoMsg): _44.MsgSend;
                toAminoMsg(message: _44.MsgSend): _44.MsgSendAminoMsg;
                fromProtoMsg(message: _44.MsgSendProtoMsg): _44.MsgSend;
                toProto(message: _44.MsgSend): Uint8Array;
                toProtoMsg(message: _44.MsgSend): _44.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _44.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgSendResponse;
                fromPartial(_: Partial<_44.MsgSendResponse>): _44.MsgSendResponse;
                fromAmino(_: _44.MsgSendResponseAmino): _44.MsgSendResponse;
                toAmino(_: _44.MsgSendResponse): _44.MsgSendResponseAmino;
                fromAminoMsg(object: _44.MsgSendResponseAminoMsg): _44.MsgSendResponse;
                toAminoMsg(message: _44.MsgSendResponse): _44.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _44.MsgSendResponseProtoMsg): _44.MsgSendResponse;
                toProto(message: _44.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _44.MsgSendResponse): _44.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _44.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgMultiSend;
                fromPartial(object: Partial<_44.MsgMultiSend>): _44.MsgMultiSend;
                fromAmino(object: _44.MsgMultiSendAmino): _44.MsgMultiSend;
                toAmino(message: _44.MsgMultiSend): _44.MsgMultiSendAmino;
                fromAminoMsg(object: _44.MsgMultiSendAminoMsg): _44.MsgMultiSend;
                toAminoMsg(message: _44.MsgMultiSend): _44.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _44.MsgMultiSendProtoMsg): _44.MsgMultiSend;
                toProto(message: _44.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _44.MsgMultiSend): _44.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _44.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgMultiSendResponse;
                fromPartial(_: Partial<_44.MsgMultiSendResponse>): _44.MsgMultiSendResponse;
                fromAmino(_: _44.MsgMultiSendResponseAmino): _44.MsgMultiSendResponse;
                toAmino(_: _44.MsgMultiSendResponse): _44.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _44.MsgMultiSendResponseAminoMsg): _44.MsgMultiSendResponse;
                toAminoMsg(message: _44.MsgMultiSendResponse): _44.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _44.MsgMultiSendResponseProtoMsg): _44.MsgMultiSendResponse;
                toProto(message: _44.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _44.MsgMultiSendResponse): _44.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _43.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryBalanceRequest;
                fromPartial(object: Partial<_43.QueryBalanceRequest>): _43.QueryBalanceRequest;
                fromAmino(object: _43.QueryBalanceRequestAmino): _43.QueryBalanceRequest;
                toAmino(message: _43.QueryBalanceRequest): _43.QueryBalanceRequestAmino;
                fromAminoMsg(object: _43.QueryBalanceRequestAminoMsg): _43.QueryBalanceRequest;
                toAminoMsg(message: _43.QueryBalanceRequest): _43.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _43.QueryBalanceRequestProtoMsg): _43.QueryBalanceRequest;
                toProto(message: _43.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _43.QueryBalanceRequest): _43.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _43.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryBalanceResponse;
                fromPartial(object: Partial<_43.QueryBalanceResponse>): _43.QueryBalanceResponse;
                fromAmino(object: _43.QueryBalanceResponseAmino): _43.QueryBalanceResponse;
                toAmino(message: _43.QueryBalanceResponse): _43.QueryBalanceResponseAmino;
                fromAminoMsg(object: _43.QueryBalanceResponseAminoMsg): _43.QueryBalanceResponse;
                toAminoMsg(message: _43.QueryBalanceResponse): _43.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _43.QueryBalanceResponseProtoMsg): _43.QueryBalanceResponse;
                toProto(message: _43.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _43.QueryBalanceResponse): _43.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _43.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryAllBalancesRequest;
                fromPartial(object: Partial<_43.QueryAllBalancesRequest>): _43.QueryAllBalancesRequest;
                fromAmino(object: _43.QueryAllBalancesRequestAmino): _43.QueryAllBalancesRequest;
                toAmino(message: _43.QueryAllBalancesRequest): _43.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _43.QueryAllBalancesRequestAminoMsg): _43.QueryAllBalancesRequest;
                toAminoMsg(message: _43.QueryAllBalancesRequest): _43.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _43.QueryAllBalancesRequestProtoMsg): _43.QueryAllBalancesRequest;
                toProto(message: _43.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _43.QueryAllBalancesRequest): _43.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _43.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryAllBalancesResponse;
                fromPartial(object: Partial<_43.QueryAllBalancesResponse>): _43.QueryAllBalancesResponse;
                fromAmino(object: _43.QueryAllBalancesResponseAmino): _43.QueryAllBalancesResponse;
                toAmino(message: _43.QueryAllBalancesResponse): _43.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _43.QueryAllBalancesResponseAminoMsg): _43.QueryAllBalancesResponse;
                toAminoMsg(message: _43.QueryAllBalancesResponse): _43.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _43.QueryAllBalancesResponseProtoMsg): _43.QueryAllBalancesResponse;
                toProto(message: _43.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _43.QueryAllBalancesResponse): _43.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _43.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_43.QuerySpendableBalancesRequest>): _43.QuerySpendableBalancesRequest;
                fromAmino(object: _43.QuerySpendableBalancesRequestAmino): _43.QuerySpendableBalancesRequest;
                toAmino(message: _43.QuerySpendableBalancesRequest): _43.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _43.QuerySpendableBalancesRequestAminoMsg): _43.QuerySpendableBalancesRequest;
                toAminoMsg(message: _43.QuerySpendableBalancesRequest): _43.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _43.QuerySpendableBalancesRequestProtoMsg): _43.QuerySpendableBalancesRequest;
                toProto(message: _43.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _43.QuerySpendableBalancesRequest): _43.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _43.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_43.QuerySpendableBalancesResponse>): _43.QuerySpendableBalancesResponse;
                fromAmino(object: _43.QuerySpendableBalancesResponseAmino): _43.QuerySpendableBalancesResponse;
                toAmino(message: _43.QuerySpendableBalancesResponse): _43.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _43.QuerySpendableBalancesResponseAminoMsg): _43.QuerySpendableBalancesResponse;
                toAminoMsg(message: _43.QuerySpendableBalancesResponse): _43.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _43.QuerySpendableBalancesResponseProtoMsg): _43.QuerySpendableBalancesResponse;
                toProto(message: _43.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _43.QuerySpendableBalancesResponse): _43.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _43.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_43.QueryTotalSupplyRequest>): _43.QueryTotalSupplyRequest;
                fromAmino(object: _43.QueryTotalSupplyRequestAmino): _43.QueryTotalSupplyRequest;
                toAmino(message: _43.QueryTotalSupplyRequest): _43.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _43.QueryTotalSupplyRequestAminoMsg): _43.QueryTotalSupplyRequest;
                toAminoMsg(message: _43.QueryTotalSupplyRequest): _43.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _43.QueryTotalSupplyRequestProtoMsg): _43.QueryTotalSupplyRequest;
                toProto(message: _43.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _43.QueryTotalSupplyRequest): _43.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _43.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_43.QueryTotalSupplyResponse>): _43.QueryTotalSupplyResponse;
                fromAmino(object: _43.QueryTotalSupplyResponseAmino): _43.QueryTotalSupplyResponse;
                toAmino(message: _43.QueryTotalSupplyResponse): _43.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _43.QueryTotalSupplyResponseAminoMsg): _43.QueryTotalSupplyResponse;
                toAminoMsg(message: _43.QueryTotalSupplyResponse): _43.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _43.QueryTotalSupplyResponseProtoMsg): _43.QueryTotalSupplyResponse;
                toProto(message: _43.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _43.QueryTotalSupplyResponse): _43.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _43.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QuerySupplyOfRequest;
                fromPartial(object: Partial<_43.QuerySupplyOfRequest>): _43.QuerySupplyOfRequest;
                fromAmino(object: _43.QuerySupplyOfRequestAmino): _43.QuerySupplyOfRequest;
                toAmino(message: _43.QuerySupplyOfRequest): _43.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _43.QuerySupplyOfRequestAminoMsg): _43.QuerySupplyOfRequest;
                toAminoMsg(message: _43.QuerySupplyOfRequest): _43.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _43.QuerySupplyOfRequestProtoMsg): _43.QuerySupplyOfRequest;
                toProto(message: _43.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _43.QuerySupplyOfRequest): _43.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _43.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QuerySupplyOfResponse;
                fromPartial(object: Partial<_43.QuerySupplyOfResponse>): _43.QuerySupplyOfResponse;
                fromAmino(object: _43.QuerySupplyOfResponseAmino): _43.QuerySupplyOfResponse;
                toAmino(message: _43.QuerySupplyOfResponse): _43.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _43.QuerySupplyOfResponseAminoMsg): _43.QuerySupplyOfResponse;
                toAminoMsg(message: _43.QuerySupplyOfResponse): _43.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _43.QuerySupplyOfResponseProtoMsg): _43.QuerySupplyOfResponse;
                toProto(message: _43.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _43.QuerySupplyOfResponse): _43.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _43.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _43.QueryParamsRequest;
                fromPartial(_: Partial<_43.QueryParamsRequest>): _43.QueryParamsRequest;
                fromAmino(_: _43.QueryParamsRequestAmino): _43.QueryParamsRequest;
                toAmino(_: _43.QueryParamsRequest): _43.QueryParamsRequestAmino;
                fromAminoMsg(object: _43.QueryParamsRequestAminoMsg): _43.QueryParamsRequest;
                toAminoMsg(message: _43.QueryParamsRequest): _43.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryParamsRequestProtoMsg): _43.QueryParamsRequest;
                toProto(message: _43.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryParamsRequest): _43.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _43.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryParamsResponse;
                fromPartial(object: Partial<_43.QueryParamsResponse>): _43.QueryParamsResponse;
                fromAmino(object: _43.QueryParamsResponseAmino): _43.QueryParamsResponse;
                toAmino(message: _43.QueryParamsResponse): _43.QueryParamsResponseAmino;
                fromAminoMsg(object: _43.QueryParamsResponseAminoMsg): _43.QueryParamsResponse;
                toAminoMsg(message: _43.QueryParamsResponse): _43.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryParamsResponseProtoMsg): _43.QueryParamsResponse;
                toProto(message: _43.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryParamsResponse): _43.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _43.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_43.QueryDenomsMetadataRequest>): _43.QueryDenomsMetadataRequest;
                fromAmino(object: _43.QueryDenomsMetadataRequestAmino): _43.QueryDenomsMetadataRequest;
                toAmino(message: _43.QueryDenomsMetadataRequest): _43.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _43.QueryDenomsMetadataRequestAminoMsg): _43.QueryDenomsMetadataRequest;
                toAminoMsg(message: _43.QueryDenomsMetadataRequest): _43.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDenomsMetadataRequestProtoMsg): _43.QueryDenomsMetadataRequest;
                toProto(message: _43.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDenomsMetadataRequest): _43.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _43.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_43.QueryDenomsMetadataResponse>): _43.QueryDenomsMetadataResponse;
                fromAmino(object: _43.QueryDenomsMetadataResponseAmino): _43.QueryDenomsMetadataResponse;
                toAmino(message: _43.QueryDenomsMetadataResponse): _43.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _43.QueryDenomsMetadataResponseAminoMsg): _43.QueryDenomsMetadataResponse;
                toAminoMsg(message: _43.QueryDenomsMetadataResponse): _43.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDenomsMetadataResponseProtoMsg): _43.QueryDenomsMetadataResponse;
                toProto(message: _43.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDenomsMetadataResponse): _43.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _43.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_43.QueryDenomMetadataRequest>): _43.QueryDenomMetadataRequest;
                fromAmino(object: _43.QueryDenomMetadataRequestAmino): _43.QueryDenomMetadataRequest;
                toAmino(message: _43.QueryDenomMetadataRequest): _43.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _43.QueryDenomMetadataRequestAminoMsg): _43.QueryDenomMetadataRequest;
                toAminoMsg(message: _43.QueryDenomMetadataRequest): _43.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDenomMetadataRequestProtoMsg): _43.QueryDenomMetadataRequest;
                toProto(message: _43.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDenomMetadataRequest): _43.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _43.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_43.QueryDenomMetadataResponse>): _43.QueryDenomMetadataResponse;
                fromAmino(object: _43.QueryDenomMetadataResponseAmino): _43.QueryDenomMetadataResponse;
                toAmino(message: _43.QueryDenomMetadataResponse): _43.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _43.QueryDenomMetadataResponseAminoMsg): _43.QueryDenomMetadataResponse;
                toAminoMsg(message: _43.QueryDenomMetadataResponse): _43.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDenomMetadataResponseProtoMsg): _43.QueryDenomMetadataResponse;
                toProto(message: _43.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDenomMetadataResponse): _43.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _43.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_43.QueryDenomOwnersRequest>): _43.QueryDenomOwnersRequest;
                fromAmino(object: _43.QueryDenomOwnersRequestAmino): _43.QueryDenomOwnersRequest;
                toAmino(message: _43.QueryDenomOwnersRequest): _43.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _43.QueryDenomOwnersRequestAminoMsg): _43.QueryDenomOwnersRequest;
                toAminoMsg(message: _43.QueryDenomOwnersRequest): _43.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDenomOwnersRequestProtoMsg): _43.QueryDenomOwnersRequest;
                toProto(message: _43.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDenomOwnersRequest): _43.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _43.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.DenomOwner;
                fromPartial(object: Partial<_43.DenomOwner>): _43.DenomOwner;
                fromAmino(object: _43.DenomOwnerAmino): _43.DenomOwner;
                toAmino(message: _43.DenomOwner): _43.DenomOwnerAmino;
                fromAminoMsg(object: _43.DenomOwnerAminoMsg): _43.DenomOwner;
                toAminoMsg(message: _43.DenomOwner): _43.DenomOwnerAminoMsg;
                fromProtoMsg(message: _43.DenomOwnerProtoMsg): _43.DenomOwner;
                toProto(message: _43.DenomOwner): Uint8Array;
                toProtoMsg(message: _43.DenomOwner): _43.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _43.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_43.QueryDenomOwnersResponse>): _43.QueryDenomOwnersResponse;
                fromAmino(object: _43.QueryDenomOwnersResponseAmino): _43.QueryDenomOwnersResponse;
                toAmino(message: _43.QueryDenomOwnersResponse): _43.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _43.QueryDenomOwnersResponseAminoMsg): _43.QueryDenomOwnersResponse;
                toAminoMsg(message: _43.QueryDenomOwnersResponse): _43.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDenomOwnersResponseProtoMsg): _43.QueryDenomOwnersResponse;
                toProto(message: _43.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDenomOwnersResponse): _43.QueryDenomOwnersResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _42.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Balance;
                fromPartial(object: Partial<_42.Balance>): _42.Balance;
                fromAmino(object: _42.BalanceAmino): _42.Balance;
                toAmino(message: _42.Balance): _42.BalanceAmino;
                fromAminoMsg(object: _42.BalanceAminoMsg): _42.Balance;
                toAminoMsg(message: _42.Balance): _42.BalanceAminoMsg;
                fromProtoMsg(message: _42.BalanceProtoMsg): _42.Balance;
                toProto(message: _42.Balance): Uint8Array;
                toProtoMsg(message: _42.Balance): _42.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _41.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Params;
                fromPartial(object: Partial<_41.Params>): _41.Params;
                fromAmino(object: _41.ParamsAmino): _41.Params;
                toAmino(message: _41.Params): _41.ParamsAmino;
                fromAminoMsg(object: _41.ParamsAminoMsg): _41.Params;
                toAminoMsg(message: _41.Params): _41.ParamsAminoMsg;
                fromProtoMsg(message: _41.ParamsProtoMsg): _41.Params;
                toProto(message: _41.Params): Uint8Array;
                toProtoMsg(message: _41.Params): _41.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _41.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.SendEnabled;
                fromPartial(object: Partial<_41.SendEnabled>): _41.SendEnabled;
                fromAmino(object: _41.SendEnabledAmino): _41.SendEnabled;
                toAmino(message: _41.SendEnabled): _41.SendEnabledAmino;
                fromAminoMsg(object: _41.SendEnabledAminoMsg): _41.SendEnabled;
                toAminoMsg(message: _41.SendEnabled): _41.SendEnabledAminoMsg;
                fromProtoMsg(message: _41.SendEnabledProtoMsg): _41.SendEnabled;
                toProto(message: _41.SendEnabled): Uint8Array;
                toProtoMsg(message: _41.SendEnabled): _41.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _41.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Input;
                fromPartial(object: Partial<_41.Input>): _41.Input;
                fromAmino(object: _41.InputAmino): _41.Input;
                toAmino(message: _41.Input): _41.InputAmino;
                fromAminoMsg(object: _41.InputAminoMsg): _41.Input;
                toAminoMsg(message: _41.Input): _41.InputAminoMsg;
                fromProtoMsg(message: _41.InputProtoMsg): _41.Input;
                toProto(message: _41.Input): Uint8Array;
                toProtoMsg(message: _41.Input): _41.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _41.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Output;
                fromPartial(object: Partial<_41.Output>): _41.Output;
                fromAmino(object: _41.OutputAmino): _41.Output;
                toAmino(message: _41.Output): _41.OutputAmino;
                fromAminoMsg(object: _41.OutputAminoMsg): _41.Output;
                toAminoMsg(message: _41.Output): _41.OutputAminoMsg;
                fromProtoMsg(message: _41.OutputProtoMsg): _41.Output;
                toProto(message: _41.Output): Uint8Array;
                toProtoMsg(message: _41.Output): _41.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _41.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Supply;
                fromPartial(object: Partial<_41.Supply>): _41.Supply;
                fromAmino(object: _41.SupplyAmino): _41.Supply;
                toAmino(message: _41.Supply): _41.SupplyAmino;
                fromAminoMsg(object: _41.SupplyAminoMsg): _41.Supply;
                toAminoMsg(message: _41.Supply): _41.SupplyAminoMsg;
                fromProtoMsg(message: _41.SupplyProtoMsg): _41.Supply;
                toProto(message: _41.Supply): Uint8Array;
                toProtoMsg(message: _41.Supply): _41.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _41.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.DenomUnit;
                fromPartial(object: Partial<_41.DenomUnit>): _41.DenomUnit;
                fromAmino(object: _41.DenomUnitAmino): _41.DenomUnit;
                toAmino(message: _41.DenomUnit): _41.DenomUnitAmino;
                fromAminoMsg(object: _41.DenomUnitAminoMsg): _41.DenomUnit;
                toAminoMsg(message: _41.DenomUnit): _41.DenomUnitAminoMsg;
                fromProtoMsg(message: _41.DenomUnitProtoMsg): _41.DenomUnit;
                toProto(message: _41.DenomUnit): Uint8Array;
                toProtoMsg(message: _41.DenomUnit): _41.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _41.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Metadata;
                fromPartial(object: Partial<_41.Metadata>): _41.Metadata;
                fromAmino(object: _41.MetadataAmino): _41.Metadata;
                toAmino(message: _41.Metadata): _41.MetadataAmino;
                fromAminoMsg(object: _41.MetadataAminoMsg): _41.Metadata;
                toAminoMsg(message: _41.Metadata): _41.MetadataAminoMsg;
                fromProtoMsg(message: _41.MetadataProtoMsg): _41.Metadata;
                toProto(message: _41.Metadata): Uint8Array;
                toProtoMsg(message: _41.Metadata): _41.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _40.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.SendAuthorization;
                fromPartial(object: Partial<_40.SendAuthorization>): _40.SendAuthorization;
                fromAmino(object: _40.SendAuthorizationAmino): _40.SendAuthorization;
                toAmino(message: _40.SendAuthorization): _40.SendAuthorizationAmino;
                fromAminoMsg(object: _40.SendAuthorizationAminoMsg): _40.SendAuthorization;
                toAminoMsg(message: _40.SendAuthorization): _40.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _40.SendAuthorizationProtoMsg): _40.SendAuthorization;
                toProto(message: _40.SendAuthorization): Uint8Array;
                toProtoMsg(message: _40.SendAuthorization): _40.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _45.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.TxResponse;
                    fromPartial(object: Partial<_45.TxResponse>): _45.TxResponse;
                    fromAmino(object: _45.TxResponseAmino): _45.TxResponse;
                    toAmino(message: _45.TxResponse): _45.TxResponseAmino;
                    fromAminoMsg(object: _45.TxResponseAminoMsg): _45.TxResponse;
                    toAminoMsg(message: _45.TxResponse): _45.TxResponseAminoMsg;
                    fromProtoMsg(message: _45.TxResponseProtoMsg): _45.TxResponse;
                    toProto(message: _45.TxResponse): Uint8Array;
                    toProtoMsg(message: _45.TxResponse): _45.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _45.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.ABCIMessageLog;
                    fromPartial(object: Partial<_45.ABCIMessageLog>): _45.ABCIMessageLog;
                    fromAmino(object: _45.ABCIMessageLogAmino): _45.ABCIMessageLog;
                    toAmino(message: _45.ABCIMessageLog): _45.ABCIMessageLogAmino;
                    fromAminoMsg(object: _45.ABCIMessageLogAminoMsg): _45.ABCIMessageLog;
                    toAminoMsg(message: _45.ABCIMessageLog): _45.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _45.ABCIMessageLogProtoMsg): _45.ABCIMessageLog;
                    toProto(message: _45.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _45.ABCIMessageLog): _45.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _45.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.StringEvent;
                    fromPartial(object: Partial<_45.StringEvent>): _45.StringEvent;
                    fromAmino(object: _45.StringEventAmino): _45.StringEvent;
                    toAmino(message: _45.StringEvent): _45.StringEventAmino;
                    fromAminoMsg(object: _45.StringEventAminoMsg): _45.StringEvent;
                    toAminoMsg(message: _45.StringEvent): _45.StringEventAminoMsg;
                    fromProtoMsg(message: _45.StringEventProtoMsg): _45.StringEvent;
                    toProto(message: _45.StringEvent): Uint8Array;
                    toProtoMsg(message: _45.StringEvent): _45.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _45.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.Attribute;
                    fromPartial(object: Partial<_45.Attribute>): _45.Attribute;
                    fromAmino(object: _45.AttributeAmino): _45.Attribute;
                    toAmino(message: _45.Attribute): _45.AttributeAmino;
                    fromAminoMsg(object: _45.AttributeAminoMsg): _45.Attribute;
                    toAminoMsg(message: _45.Attribute): _45.AttributeAminoMsg;
                    fromProtoMsg(message: _45.AttributeProtoMsg): _45.Attribute;
                    toProto(message: _45.Attribute): Uint8Array;
                    toProtoMsg(message: _45.Attribute): _45.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _45.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.GasInfo;
                    fromPartial(object: Partial<_45.GasInfo>): _45.GasInfo;
                    fromAmino(object: _45.GasInfoAmino): _45.GasInfo;
                    toAmino(message: _45.GasInfo): _45.GasInfoAmino;
                    fromAminoMsg(object: _45.GasInfoAminoMsg): _45.GasInfo;
                    toAminoMsg(message: _45.GasInfo): _45.GasInfoAminoMsg;
                    fromProtoMsg(message: _45.GasInfoProtoMsg): _45.GasInfo;
                    toProto(message: _45.GasInfo): Uint8Array;
                    toProtoMsg(message: _45.GasInfo): _45.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _45.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.Result;
                    fromPartial(object: Partial<_45.Result>): _45.Result;
                    fromAmino(object: _45.ResultAmino): _45.Result;
                    toAmino(message: _45.Result): _45.ResultAmino;
                    fromAminoMsg(object: _45.ResultAminoMsg): _45.Result;
                    toAminoMsg(message: _45.Result): _45.ResultAminoMsg;
                    fromProtoMsg(message: _45.ResultProtoMsg): _45.Result;
                    toProto(message: _45.Result): Uint8Array;
                    toProtoMsg(message: _45.Result): _45.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _45.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.SimulationResponse;
                    fromPartial(object: Partial<_45.SimulationResponse>): _45.SimulationResponse;
                    fromAmino(object: _45.SimulationResponseAmino): _45.SimulationResponse;
                    toAmino(message: _45.SimulationResponse): _45.SimulationResponseAmino;
                    fromAminoMsg(object: _45.SimulationResponseAminoMsg): _45.SimulationResponse;
                    toAminoMsg(message: _45.SimulationResponse): _45.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _45.SimulationResponseProtoMsg): _45.SimulationResponse;
                    toProto(message: _45.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _45.SimulationResponse): _45.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _45.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.MsgData;
                    fromPartial(object: Partial<_45.MsgData>): _45.MsgData;
                    fromAmino(object: _45.MsgDataAmino): _45.MsgData;
                    toAmino(message: _45.MsgData): _45.MsgDataAmino;
                    fromAminoMsg(object: _45.MsgDataAminoMsg): _45.MsgData;
                    toAminoMsg(message: _45.MsgData): _45.MsgDataAminoMsg;
                    fromProtoMsg(message: _45.MsgDataProtoMsg): _45.MsgData;
                    toProto(message: _45.MsgData): Uint8Array;
                    toProtoMsg(message: _45.MsgData): _45.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _45.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.TxMsgData;
                    fromPartial(object: Partial<_45.TxMsgData>): _45.TxMsgData;
                    fromAmino(object: _45.TxMsgDataAmino): _45.TxMsgData;
                    toAmino(message: _45.TxMsgData): _45.TxMsgDataAmino;
                    fromAminoMsg(object: _45.TxMsgDataAminoMsg): _45.TxMsgData;
                    toAminoMsg(message: _45.TxMsgData): _45.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _45.TxMsgDataProtoMsg): _45.TxMsgData;
                    toProto(message: _45.TxMsgData): Uint8Array;
                    toProtoMsg(message: _45.TxMsgData): _45.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _45.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.SearchTxsResult;
                    fromPartial(object: Partial<_45.SearchTxsResult>): _45.SearchTxsResult;
                    fromAmino(object: _45.SearchTxsResultAmino): _45.SearchTxsResult;
                    toAmino(message: _45.SearchTxsResult): _45.SearchTxsResultAmino;
                    fromAminoMsg(object: _45.SearchTxsResultAminoMsg): _45.SearchTxsResult;
                    toAminoMsg(message: _45.SearchTxsResult): _45.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _45.SearchTxsResultProtoMsg): _45.SearchTxsResult;
                    toProto(message: _45.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _45.SearchTxsResult): _45.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _46.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.Pairs;
                    fromPartial(object: Partial<_46.Pairs>): _46.Pairs;
                    fromAmino(object: _46.PairsAmino): _46.Pairs;
                    toAmino(message: _46.Pairs): _46.PairsAmino;
                    fromAminoMsg(object: _46.PairsAminoMsg): _46.Pairs;
                    toAminoMsg(message: _46.Pairs): _46.PairsAminoMsg;
                    fromProtoMsg(message: _46.PairsProtoMsg): _46.Pairs;
                    toProto(message: _46.Pairs): Uint8Array;
                    toProtoMsg(message: _46.Pairs): _46.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _46.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.Pair;
                    fromPartial(object: Partial<_46.Pair>): _46.Pair;
                    fromAmino(object: _46.PairAmino): _46.Pair;
                    toAmino(message: _46.Pair): _46.PairAmino;
                    fromAminoMsg(object: _46.PairAminoMsg): _46.Pair;
                    toAminoMsg(message: _46.Pair): _46.PairAminoMsg;
                    fromProtoMsg(message: _46.PairProtoMsg): _46.Pair;
                    toProto(message: _46.Pair): Uint8Array;
                    toProtoMsg(message: _46.Pair): _46.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _203.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    config(request?: _47.ConfigRequest): Promise<_47.ConfigResponse>;
                };
                LCDQueryClient: typeof _184.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _47.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _47.ConfigRequest;
                    fromPartial(_: Partial<_47.ConfigRequest>): _47.ConfigRequest;
                    fromAmino(_: _47.ConfigRequestAmino): _47.ConfigRequest;
                    toAmino(_: _47.ConfigRequest): _47.ConfigRequestAmino;
                    fromAminoMsg(object: _47.ConfigRequestAminoMsg): _47.ConfigRequest;
                    toAminoMsg(message: _47.ConfigRequest): _47.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _47.ConfigRequestProtoMsg): _47.ConfigRequest;
                    toProto(message: _47.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _47.ConfigRequest): _47.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _47.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.ConfigResponse;
                    fromPartial(object: Partial<_47.ConfigResponse>): _47.ConfigResponse;
                    fromAmino(object: _47.ConfigResponseAmino): _47.ConfigResponse;
                    toAmino(message: _47.ConfigResponse): _47.ConfigResponseAmino;
                    fromAminoMsg(object: _47.ConfigResponseAminoMsg): _47.ConfigResponse;
                    toAminoMsg(message: _47.ConfigResponse): _47.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _47.ConfigResponseProtoMsg): _47.ConfigResponse;
                    toProto(message: _47.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _47.ConfigResponse): _47.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _48.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.PageRequest;
                    fromPartial(object: Partial<_48.PageRequest>): _48.PageRequest;
                    fromAmino(object: _48.PageRequestAmino): _48.PageRequest;
                    toAmino(message: _48.PageRequest): _48.PageRequestAmino;
                    fromAminoMsg(object: _48.PageRequestAminoMsg): _48.PageRequest;
                    toAminoMsg(message: _48.PageRequest): _48.PageRequestAminoMsg;
                    fromProtoMsg(message: _48.PageRequestProtoMsg): _48.PageRequest;
                    toProto(message: _48.PageRequest): Uint8Array;
                    toProtoMsg(message: _48.PageRequest): _48.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _48.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.PageResponse;
                    fromPartial(object: Partial<_48.PageResponse>): _48.PageResponse;
                    fromAmino(object: _48.PageResponseAmino): _48.PageResponse;
                    toAmino(message: _48.PageResponse): _48.PageResponseAmino;
                    fromAminoMsg(object: _48.PageResponseAminoMsg): _48.PageResponse;
                    toAminoMsg(message: _48.PageResponse): _48.PageResponseAminoMsg;
                    fromProtoMsg(message: _48.PageResponseProtoMsg): _48.PageResponse;
                    toProto(message: _48.PageResponse): Uint8Array;
                    toProtoMsg(message: _48.PageResponse): _48.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _49.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_49.ListAllInterfacesRequest>): _49.ListAllInterfacesRequest;
                    fromAmino(_: _49.ListAllInterfacesRequestAmino): _49.ListAllInterfacesRequest;
                    toAmino(_: _49.ListAllInterfacesRequest): _49.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _49.ListAllInterfacesRequestAminoMsg): _49.ListAllInterfacesRequest;
                    toAminoMsg(message: _49.ListAllInterfacesRequest): _49.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _49.ListAllInterfacesRequestProtoMsg): _49.ListAllInterfacesRequest;
                    toProto(message: _49.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _49.ListAllInterfacesRequest): _49.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _49.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_49.ListAllInterfacesResponse>): _49.ListAllInterfacesResponse;
                    fromAmino(object: _49.ListAllInterfacesResponseAmino): _49.ListAllInterfacesResponse;
                    toAmino(message: _49.ListAllInterfacesResponse): _49.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _49.ListAllInterfacesResponseAminoMsg): _49.ListAllInterfacesResponse;
                    toAminoMsg(message: _49.ListAllInterfacesResponse): _49.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _49.ListAllInterfacesResponseProtoMsg): _49.ListAllInterfacesResponse;
                    toProto(message: _49.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _49.ListAllInterfacesResponse): _49.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _49.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.ListImplementationsRequest;
                    fromPartial(object: Partial<_49.ListImplementationsRequest>): _49.ListImplementationsRequest;
                    fromAmino(object: _49.ListImplementationsRequestAmino): _49.ListImplementationsRequest;
                    toAmino(message: _49.ListImplementationsRequest): _49.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _49.ListImplementationsRequestAminoMsg): _49.ListImplementationsRequest;
                    toAminoMsg(message: _49.ListImplementationsRequest): _49.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _49.ListImplementationsRequestProtoMsg): _49.ListImplementationsRequest;
                    toProto(message: _49.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _49.ListImplementationsRequest): _49.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _49.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.ListImplementationsResponse;
                    fromPartial(object: Partial<_49.ListImplementationsResponse>): _49.ListImplementationsResponse;
                    fromAmino(object: _49.ListImplementationsResponseAmino): _49.ListImplementationsResponse;
                    toAmino(message: _49.ListImplementationsResponse): _49.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _49.ListImplementationsResponseAminoMsg): _49.ListImplementationsResponse;
                    toAminoMsg(message: _49.ListImplementationsResponse): _49.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _49.ListImplementationsResponseProtoMsg): _49.ListImplementationsResponse;
                    toProto(message: _49.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _49.ListImplementationsResponse): _49.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _50.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.AppDescriptor;
                    fromPartial(object: Partial<_50.AppDescriptor>): _50.AppDescriptor;
                    fromAmino(object: _50.AppDescriptorAmino): _50.AppDescriptor;
                    toAmino(message: _50.AppDescriptor): _50.AppDescriptorAmino;
                    fromAminoMsg(object: _50.AppDescriptorAminoMsg): _50.AppDescriptor;
                    toAminoMsg(message: _50.AppDescriptor): _50.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _50.AppDescriptorProtoMsg): _50.AppDescriptor;
                    toProto(message: _50.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _50.AppDescriptor): _50.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _50.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.TxDescriptor;
                    fromPartial(object: Partial<_50.TxDescriptor>): _50.TxDescriptor;
                    fromAmino(object: _50.TxDescriptorAmino): _50.TxDescriptor;
                    toAmino(message: _50.TxDescriptor): _50.TxDescriptorAmino;
                    fromAminoMsg(object: _50.TxDescriptorAminoMsg): _50.TxDescriptor;
                    toAminoMsg(message: _50.TxDescriptor): _50.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _50.TxDescriptorProtoMsg): _50.TxDescriptor;
                    toProto(message: _50.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _50.TxDescriptor): _50.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _50.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.AuthnDescriptor;
                    fromPartial(object: Partial<_50.AuthnDescriptor>): _50.AuthnDescriptor;
                    fromAmino(object: _50.AuthnDescriptorAmino): _50.AuthnDescriptor;
                    toAmino(message: _50.AuthnDescriptor): _50.AuthnDescriptorAmino;
                    fromAminoMsg(object: _50.AuthnDescriptorAminoMsg): _50.AuthnDescriptor;
                    toAminoMsg(message: _50.AuthnDescriptor): _50.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _50.AuthnDescriptorProtoMsg): _50.AuthnDescriptor;
                    toProto(message: _50.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _50.AuthnDescriptor): _50.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _50.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.SigningModeDescriptor;
                    fromPartial(object: Partial<_50.SigningModeDescriptor>): _50.SigningModeDescriptor;
                    fromAmino(object: _50.SigningModeDescriptorAmino): _50.SigningModeDescriptor;
                    toAmino(message: _50.SigningModeDescriptor): _50.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _50.SigningModeDescriptorAminoMsg): _50.SigningModeDescriptor;
                    toAminoMsg(message: _50.SigningModeDescriptor): _50.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _50.SigningModeDescriptorProtoMsg): _50.SigningModeDescriptor;
                    toProto(message: _50.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _50.SigningModeDescriptor): _50.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _50.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.ChainDescriptor;
                    fromPartial(object: Partial<_50.ChainDescriptor>): _50.ChainDescriptor;
                    fromAmino(object: _50.ChainDescriptorAmino): _50.ChainDescriptor;
                    toAmino(message: _50.ChainDescriptor): _50.ChainDescriptorAmino;
                    fromAminoMsg(object: _50.ChainDescriptorAminoMsg): _50.ChainDescriptor;
                    toAminoMsg(message: _50.ChainDescriptor): _50.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _50.ChainDescriptorProtoMsg): _50.ChainDescriptor;
                    toProto(message: _50.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _50.ChainDescriptor): _50.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _50.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.CodecDescriptor;
                    fromPartial(object: Partial<_50.CodecDescriptor>): _50.CodecDescriptor;
                    fromAmino(object: _50.CodecDescriptorAmino): _50.CodecDescriptor;
                    toAmino(message: _50.CodecDescriptor): _50.CodecDescriptorAmino;
                    fromAminoMsg(object: _50.CodecDescriptorAminoMsg): _50.CodecDescriptor;
                    toAminoMsg(message: _50.CodecDescriptor): _50.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _50.CodecDescriptorProtoMsg): _50.CodecDescriptor;
                    toProto(message: _50.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _50.CodecDescriptor): _50.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _50.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.InterfaceDescriptor;
                    fromPartial(object: Partial<_50.InterfaceDescriptor>): _50.InterfaceDescriptor;
                    fromAmino(object: _50.InterfaceDescriptorAmino): _50.InterfaceDescriptor;
                    toAmino(message: _50.InterfaceDescriptor): _50.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _50.InterfaceDescriptorAminoMsg): _50.InterfaceDescriptor;
                    toAminoMsg(message: _50.InterfaceDescriptor): _50.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _50.InterfaceDescriptorProtoMsg): _50.InterfaceDescriptor;
                    toProto(message: _50.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _50.InterfaceDescriptor): _50.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _50.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_50.InterfaceImplementerDescriptor>): _50.InterfaceImplementerDescriptor;
                    fromAmino(object: _50.InterfaceImplementerDescriptorAmino): _50.InterfaceImplementerDescriptor;
                    toAmino(message: _50.InterfaceImplementerDescriptor): _50.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _50.InterfaceImplementerDescriptorAminoMsg): _50.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _50.InterfaceImplementerDescriptor): _50.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _50.InterfaceImplementerDescriptorProtoMsg): _50.InterfaceImplementerDescriptor;
                    toProto(message: _50.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _50.InterfaceImplementerDescriptor): _50.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _50.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_50.InterfaceAcceptingMessageDescriptor>): _50.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _50.InterfaceAcceptingMessageDescriptorAmino): _50.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _50.InterfaceAcceptingMessageDescriptor): _50.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _50.InterfaceAcceptingMessageDescriptorAminoMsg): _50.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _50.InterfaceAcceptingMessageDescriptor): _50.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _50.InterfaceAcceptingMessageDescriptorProtoMsg): _50.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _50.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _50.InterfaceAcceptingMessageDescriptor): _50.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _50.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.ConfigurationDescriptor;
                    fromPartial(object: Partial<_50.ConfigurationDescriptor>): _50.ConfigurationDescriptor;
                    fromAmino(object: _50.ConfigurationDescriptorAmino): _50.ConfigurationDescriptor;
                    toAmino(message: _50.ConfigurationDescriptor): _50.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _50.ConfigurationDescriptorAminoMsg): _50.ConfigurationDescriptor;
                    toAminoMsg(message: _50.ConfigurationDescriptor): _50.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _50.ConfigurationDescriptorProtoMsg): _50.ConfigurationDescriptor;
                    toProto(message: _50.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _50.ConfigurationDescriptor): _50.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _50.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.MsgDescriptor;
                    fromPartial(object: Partial<_50.MsgDescriptor>): _50.MsgDescriptor;
                    fromAmino(object: _50.MsgDescriptorAmino): _50.MsgDescriptor;
                    toAmino(message: _50.MsgDescriptor): _50.MsgDescriptorAmino;
                    fromAminoMsg(object: _50.MsgDescriptorAminoMsg): _50.MsgDescriptor;
                    toAminoMsg(message: _50.MsgDescriptor): _50.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _50.MsgDescriptorProtoMsg): _50.MsgDescriptor;
                    toProto(message: _50.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _50.MsgDescriptor): _50.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _50.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _50.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_50.GetAuthnDescriptorRequest>): _50.GetAuthnDescriptorRequest;
                    fromAmino(_: _50.GetAuthnDescriptorRequestAmino): _50.GetAuthnDescriptorRequest;
                    toAmino(_: _50.GetAuthnDescriptorRequest): _50.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _50.GetAuthnDescriptorRequestAminoMsg): _50.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _50.GetAuthnDescriptorRequest): _50.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _50.GetAuthnDescriptorRequestProtoMsg): _50.GetAuthnDescriptorRequest;
                    toProto(message: _50.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _50.GetAuthnDescriptorRequest): _50.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _50.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_50.GetAuthnDescriptorResponse>): _50.GetAuthnDescriptorResponse;
                    fromAmino(object: _50.GetAuthnDescriptorResponseAmino): _50.GetAuthnDescriptorResponse;
                    toAmino(message: _50.GetAuthnDescriptorResponse): _50.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _50.GetAuthnDescriptorResponseAminoMsg): _50.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _50.GetAuthnDescriptorResponse): _50.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _50.GetAuthnDescriptorResponseProtoMsg): _50.GetAuthnDescriptorResponse;
                    toProto(message: _50.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _50.GetAuthnDescriptorResponse): _50.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _50.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _50.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_50.GetChainDescriptorRequest>): _50.GetChainDescriptorRequest;
                    fromAmino(_: _50.GetChainDescriptorRequestAmino): _50.GetChainDescriptorRequest;
                    toAmino(_: _50.GetChainDescriptorRequest): _50.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _50.GetChainDescriptorRequestAminoMsg): _50.GetChainDescriptorRequest;
                    toAminoMsg(message: _50.GetChainDescriptorRequest): _50.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _50.GetChainDescriptorRequestProtoMsg): _50.GetChainDescriptorRequest;
                    toProto(message: _50.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _50.GetChainDescriptorRequest): _50.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _50.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_50.GetChainDescriptorResponse>): _50.GetChainDescriptorResponse;
                    fromAmino(object: _50.GetChainDescriptorResponseAmino): _50.GetChainDescriptorResponse;
                    toAmino(message: _50.GetChainDescriptorResponse): _50.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _50.GetChainDescriptorResponseAminoMsg): _50.GetChainDescriptorResponse;
                    toAminoMsg(message: _50.GetChainDescriptorResponse): _50.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _50.GetChainDescriptorResponseProtoMsg): _50.GetChainDescriptorResponse;
                    toProto(message: _50.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _50.GetChainDescriptorResponse): _50.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _50.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _50.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_50.GetCodecDescriptorRequest>): _50.GetCodecDescriptorRequest;
                    fromAmino(_: _50.GetCodecDescriptorRequestAmino): _50.GetCodecDescriptorRequest;
                    toAmino(_: _50.GetCodecDescriptorRequest): _50.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _50.GetCodecDescriptorRequestAminoMsg): _50.GetCodecDescriptorRequest;
                    toAminoMsg(message: _50.GetCodecDescriptorRequest): _50.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _50.GetCodecDescriptorRequestProtoMsg): _50.GetCodecDescriptorRequest;
                    toProto(message: _50.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _50.GetCodecDescriptorRequest): _50.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _50.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_50.GetCodecDescriptorResponse>): _50.GetCodecDescriptorResponse;
                    fromAmino(object: _50.GetCodecDescriptorResponseAmino): _50.GetCodecDescriptorResponse;
                    toAmino(message: _50.GetCodecDescriptorResponse): _50.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _50.GetCodecDescriptorResponseAminoMsg): _50.GetCodecDescriptorResponse;
                    toAminoMsg(message: _50.GetCodecDescriptorResponse): _50.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _50.GetCodecDescriptorResponseProtoMsg): _50.GetCodecDescriptorResponse;
                    toProto(message: _50.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _50.GetCodecDescriptorResponse): _50.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _50.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _50.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_50.GetConfigurationDescriptorRequest>): _50.GetConfigurationDescriptorRequest;
                    fromAmino(_: _50.GetConfigurationDescriptorRequestAmino): _50.GetConfigurationDescriptorRequest;
                    toAmino(_: _50.GetConfigurationDescriptorRequest): _50.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _50.GetConfigurationDescriptorRequestAminoMsg): _50.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _50.GetConfigurationDescriptorRequest): _50.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _50.GetConfigurationDescriptorRequestProtoMsg): _50.GetConfigurationDescriptorRequest;
                    toProto(message: _50.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _50.GetConfigurationDescriptorRequest): _50.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _50.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_50.GetConfigurationDescriptorResponse>): _50.GetConfigurationDescriptorResponse;
                    fromAmino(object: _50.GetConfigurationDescriptorResponseAmino): _50.GetConfigurationDescriptorResponse;
                    toAmino(message: _50.GetConfigurationDescriptorResponse): _50.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _50.GetConfigurationDescriptorResponseAminoMsg): _50.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _50.GetConfigurationDescriptorResponse): _50.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _50.GetConfigurationDescriptorResponseProtoMsg): _50.GetConfigurationDescriptorResponse;
                    toProto(message: _50.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _50.GetConfigurationDescriptorResponse): _50.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _50.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _50.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_50.GetQueryServicesDescriptorRequest>): _50.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _50.GetQueryServicesDescriptorRequestAmino): _50.GetQueryServicesDescriptorRequest;
                    toAmino(_: _50.GetQueryServicesDescriptorRequest): _50.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _50.GetQueryServicesDescriptorRequestAminoMsg): _50.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _50.GetQueryServicesDescriptorRequest): _50.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _50.GetQueryServicesDescriptorRequestProtoMsg): _50.GetQueryServicesDescriptorRequest;
                    toProto(message: _50.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _50.GetQueryServicesDescriptorRequest): _50.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _50.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_50.GetQueryServicesDescriptorResponse>): _50.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _50.GetQueryServicesDescriptorResponseAmino): _50.GetQueryServicesDescriptorResponse;
                    toAmino(message: _50.GetQueryServicesDescriptorResponse): _50.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _50.GetQueryServicesDescriptorResponseAminoMsg): _50.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _50.GetQueryServicesDescriptorResponse): _50.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _50.GetQueryServicesDescriptorResponseProtoMsg): _50.GetQueryServicesDescriptorResponse;
                    toProto(message: _50.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _50.GetQueryServicesDescriptorResponse): _50.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _50.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _50.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_50.GetTxDescriptorRequest>): _50.GetTxDescriptorRequest;
                    fromAmino(_: _50.GetTxDescriptorRequestAmino): _50.GetTxDescriptorRequest;
                    toAmino(_: _50.GetTxDescriptorRequest): _50.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _50.GetTxDescriptorRequestAminoMsg): _50.GetTxDescriptorRequest;
                    toAminoMsg(message: _50.GetTxDescriptorRequest): _50.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _50.GetTxDescriptorRequestProtoMsg): _50.GetTxDescriptorRequest;
                    toProto(message: _50.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _50.GetTxDescriptorRequest): _50.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _50.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_50.GetTxDescriptorResponse>): _50.GetTxDescriptorResponse;
                    fromAmino(object: _50.GetTxDescriptorResponseAmino): _50.GetTxDescriptorResponse;
                    toAmino(message: _50.GetTxDescriptorResponse): _50.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _50.GetTxDescriptorResponseAminoMsg): _50.GetTxDescriptorResponse;
                    toAminoMsg(message: _50.GetTxDescriptorResponse): _50.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _50.GetTxDescriptorResponseProtoMsg): _50.GetTxDescriptorResponse;
                    toProto(message: _50.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _50.GetTxDescriptorResponse): _50.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _50.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.QueryServicesDescriptor;
                    fromPartial(object: Partial<_50.QueryServicesDescriptor>): _50.QueryServicesDescriptor;
                    fromAmino(object: _50.QueryServicesDescriptorAmino): _50.QueryServicesDescriptor;
                    toAmino(message: _50.QueryServicesDescriptor): _50.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _50.QueryServicesDescriptorAminoMsg): _50.QueryServicesDescriptor;
                    toAminoMsg(message: _50.QueryServicesDescriptor): _50.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _50.QueryServicesDescriptorProtoMsg): _50.QueryServicesDescriptor;
                    toProto(message: _50.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _50.QueryServicesDescriptor): _50.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _50.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.QueryServiceDescriptor;
                    fromPartial(object: Partial<_50.QueryServiceDescriptor>): _50.QueryServiceDescriptor;
                    fromAmino(object: _50.QueryServiceDescriptorAmino): _50.QueryServiceDescriptor;
                    toAmino(message: _50.QueryServiceDescriptor): _50.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _50.QueryServiceDescriptorAminoMsg): _50.QueryServiceDescriptor;
                    toAminoMsg(message: _50.QueryServiceDescriptor): _50.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _50.QueryServiceDescriptorProtoMsg): _50.QueryServiceDescriptor;
                    toProto(message: _50.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _50.QueryServiceDescriptor): _50.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _50.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.QueryMethodDescriptor;
                    fromPartial(object: Partial<_50.QueryMethodDescriptor>): _50.QueryMethodDescriptor;
                    fromAmino(object: _50.QueryMethodDescriptorAmino): _50.QueryMethodDescriptor;
                    toAmino(message: _50.QueryMethodDescriptor): _50.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _50.QueryMethodDescriptorAminoMsg): _50.QueryMethodDescriptor;
                    toAminoMsg(message: _50.QueryMethodDescriptor): _50.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _50.QueryMethodDescriptorProtoMsg): _50.QueryMethodDescriptor;
                    toProto(message: _50.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _50.QueryMethodDescriptor): _50.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _51.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.Snapshot;
                    fromPartial(object: Partial<_51.Snapshot>): _51.Snapshot;
                    fromAmino(object: _51.SnapshotAmino): _51.Snapshot;
                    toAmino(message: _51.Snapshot): _51.SnapshotAmino;
                    fromAminoMsg(object: _51.SnapshotAminoMsg): _51.Snapshot;
                    toAminoMsg(message: _51.Snapshot): _51.SnapshotAminoMsg;
                    fromProtoMsg(message: _51.SnapshotProtoMsg): _51.Snapshot;
                    toProto(message: _51.Snapshot): Uint8Array;
                    toProtoMsg(message: _51.Snapshot): _51.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _51.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.Metadata;
                    fromPartial(object: Partial<_51.Metadata>): _51.Metadata;
                    fromAmino(object: _51.MetadataAmino): _51.Metadata;
                    toAmino(message: _51.Metadata): _51.MetadataAmino;
                    fromAminoMsg(object: _51.MetadataAminoMsg): _51.Metadata;
                    toAminoMsg(message: _51.Metadata): _51.MetadataAminoMsg;
                    fromProtoMsg(message: _51.MetadataProtoMsg): _51.Metadata;
                    toProto(message: _51.Metadata): Uint8Array;
                    toProtoMsg(message: _51.Metadata): _51.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _51.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.SnapshotItem;
                    fromPartial(object: Partial<_51.SnapshotItem>): _51.SnapshotItem;
                    fromAmino(object: _51.SnapshotItemAmino): _51.SnapshotItem;
                    toAmino(message: _51.SnapshotItem): _51.SnapshotItemAmino;
                    fromAminoMsg(object: _51.SnapshotItemAminoMsg): _51.SnapshotItem;
                    toAminoMsg(message: _51.SnapshotItem): _51.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _51.SnapshotItemProtoMsg): _51.SnapshotItem;
                    toProto(message: _51.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _51.SnapshotItem): _51.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _51.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.SnapshotStoreItem;
                    fromPartial(object: Partial<_51.SnapshotStoreItem>): _51.SnapshotStoreItem;
                    fromAmino(object: _51.SnapshotStoreItemAmino): _51.SnapshotStoreItem;
                    toAmino(message: _51.SnapshotStoreItem): _51.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _51.SnapshotStoreItemAminoMsg): _51.SnapshotStoreItem;
                    toAminoMsg(message: _51.SnapshotStoreItem): _51.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _51.SnapshotStoreItemProtoMsg): _51.SnapshotStoreItem;
                    toProto(message: _51.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _51.SnapshotStoreItem): _51.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _51.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.SnapshotIAVLItem;
                    fromPartial(object: Partial<_51.SnapshotIAVLItem>): _51.SnapshotIAVLItem;
                    fromAmino(object: _51.SnapshotIAVLItemAmino): _51.SnapshotIAVLItem;
                    toAmino(message: _51.SnapshotIAVLItem): _51.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _51.SnapshotIAVLItemAminoMsg): _51.SnapshotIAVLItem;
                    toAminoMsg(message: _51.SnapshotIAVLItem): _51.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _51.SnapshotIAVLItemProtoMsg): _51.SnapshotIAVLItem;
                    toProto(message: _51.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _51.SnapshotIAVLItem): _51.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _51.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_51.SnapshotExtensionMeta>): _51.SnapshotExtensionMeta;
                    fromAmino(object: _51.SnapshotExtensionMetaAmino): _51.SnapshotExtensionMeta;
                    toAmino(message: _51.SnapshotExtensionMeta): _51.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _51.SnapshotExtensionMetaAminoMsg): _51.SnapshotExtensionMeta;
                    toAminoMsg(message: _51.SnapshotExtensionMeta): _51.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _51.SnapshotExtensionMetaProtoMsg): _51.SnapshotExtensionMeta;
                    toProto(message: _51.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _51.SnapshotExtensionMeta): _51.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _51.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_51.SnapshotExtensionPayload>): _51.SnapshotExtensionPayload;
                    fromAmino(object: _51.SnapshotExtensionPayloadAmino): _51.SnapshotExtensionPayload;
                    toAmino(message: _51.SnapshotExtensionPayload): _51.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _51.SnapshotExtensionPayloadAminoMsg): _51.SnapshotExtensionPayload;
                    toAminoMsg(message: _51.SnapshotExtensionPayload): _51.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _51.SnapshotExtensionPayloadProtoMsg): _51.SnapshotExtensionPayload;
                    toProto(message: _51.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _51.SnapshotExtensionPayload): _51.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _51.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.SnapshotKVItem;
                    fromPartial(object: Partial<_51.SnapshotKVItem>): _51.SnapshotKVItem;
                    fromAmino(object: _51.SnapshotKVItemAmino): _51.SnapshotKVItem;
                    toAmino(message: _51.SnapshotKVItem): _51.SnapshotKVItemAmino;
                    fromAminoMsg(object: _51.SnapshotKVItemAminoMsg): _51.SnapshotKVItem;
                    toAminoMsg(message: _51.SnapshotKVItem): _51.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _51.SnapshotKVItemProtoMsg): _51.SnapshotKVItem;
                    toProto(message: _51.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _51.SnapshotKVItem): _51.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _51.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.SnapshotSchema;
                    fromPartial(object: Partial<_51.SnapshotSchema>): _51.SnapshotSchema;
                    fromAmino(object: _51.SnapshotSchemaAmino): _51.SnapshotSchema;
                    toAmino(message: _51.SnapshotSchema): _51.SnapshotSchemaAmino;
                    fromAminoMsg(object: _51.SnapshotSchemaAminoMsg): _51.SnapshotSchema;
                    toAminoMsg(message: _51.SnapshotSchema): _51.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _51.SnapshotSchemaProtoMsg): _51.SnapshotSchema;
                    toProto(message: _51.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _51.SnapshotSchema): _51.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _53.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.StoreKVPair;
                    fromPartial(object: Partial<_53.StoreKVPair>): _53.StoreKVPair;
                    fromAmino(object: _53.StoreKVPairAmino): _53.StoreKVPair;
                    toAmino(message: _53.StoreKVPair): _53.StoreKVPairAmino;
                    fromAminoMsg(object: _53.StoreKVPairAminoMsg): _53.StoreKVPair;
                    toAminoMsg(message: _53.StoreKVPair): _53.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _53.StoreKVPairProtoMsg): _53.StoreKVPair;
                    toProto(message: _53.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _53.StoreKVPair): _53.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _53.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.BlockMetadata;
                    fromPartial(object: Partial<_53.BlockMetadata>): _53.BlockMetadata;
                    fromAmino(object: _53.BlockMetadataAmino): _53.BlockMetadata;
                    toAmino(message: _53.BlockMetadata): _53.BlockMetadataAmino;
                    fromAminoMsg(object: _53.BlockMetadataAminoMsg): _53.BlockMetadata;
                    toAminoMsg(message: _53.BlockMetadata): _53.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _53.BlockMetadataProtoMsg): _53.BlockMetadata;
                    toProto(message: _53.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _53.BlockMetadata): _53.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _53.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_53.BlockMetadata_DeliverTx>): _53.BlockMetadata_DeliverTx;
                    fromAmino(object: _53.BlockMetadata_DeliverTxAmino): _53.BlockMetadata_DeliverTx;
                    toAmino(message: _53.BlockMetadata_DeliverTx): _53.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _53.BlockMetadata_DeliverTxAminoMsg): _53.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _53.BlockMetadata_DeliverTx): _53.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _53.BlockMetadata_DeliverTxProtoMsg): _53.BlockMetadata_DeliverTx;
                    toProto(message: _53.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _53.BlockMetadata_DeliverTx): _53.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _52.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.CommitInfo;
                    fromPartial(object: Partial<_52.CommitInfo>): _52.CommitInfo;
                    fromAmino(object: _52.CommitInfoAmino): _52.CommitInfo;
                    toAmino(message: _52.CommitInfo): _52.CommitInfoAmino;
                    fromAminoMsg(object: _52.CommitInfoAminoMsg): _52.CommitInfo;
                    toAminoMsg(message: _52.CommitInfo): _52.CommitInfoAminoMsg;
                    fromProtoMsg(message: _52.CommitInfoProtoMsg): _52.CommitInfo;
                    toProto(message: _52.CommitInfo): Uint8Array;
                    toProtoMsg(message: _52.CommitInfo): _52.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _52.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.StoreInfo;
                    fromPartial(object: Partial<_52.StoreInfo>): _52.StoreInfo;
                    fromAmino(object: _52.StoreInfoAmino): _52.StoreInfo;
                    toAmino(message: _52.StoreInfo): _52.StoreInfoAmino;
                    fromAminoMsg(object: _52.StoreInfoAminoMsg): _52.StoreInfo;
                    toAminoMsg(message: _52.StoreInfo): _52.StoreInfoAminoMsg;
                    fromProtoMsg(message: _52.StoreInfoProtoMsg): _52.StoreInfo;
                    toProto(message: _52.StoreInfo): Uint8Array;
                    toProtoMsg(message: _52.StoreInfo): _52.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _52.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.CommitID;
                    fromPartial(object: Partial<_52.CommitID>): _52.CommitID;
                    fromAmino(object: _52.CommitIDAmino): _52.CommitID;
                    toAmino(message: _52.CommitID): _52.CommitIDAmino;
                    fromAminoMsg(object: _52.CommitIDAminoMsg): _52.CommitID;
                    toAminoMsg(message: _52.CommitID): _52.CommitIDAminoMsg;
                    fromProtoMsg(message: _52.CommitIDProtoMsg): _52.CommitID;
                    toProto(message: _52.CommitID): Uint8Array;
                    toProtoMsg(message: _52.CommitID): _52.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _204.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    getNodeInfo(request?: _54.GetNodeInfoRequest): Promise<_54.GetNodeInfoResponse>;
                    getSyncing(request?: _54.GetSyncingRequest): Promise<_54.GetSyncingResponse>;
                    getLatestBlock(request?: _54.GetLatestBlockRequest): Promise<_54.GetLatestBlockResponse>;
                    getBlockByHeight(request: _54.GetBlockByHeightRequest): Promise<_54.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _54.GetLatestValidatorSetRequest): Promise<_54.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _54.GetValidatorSetByHeightRequest): Promise<_54.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _54.ABCIQueryRequest): Promise<_54.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _185.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _55.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.Block;
                    fromPartial(object: Partial<_55.Block>): _55.Block;
                    fromAmino(object: _55.BlockAmino): _55.Block;
                    toAmino(message: _55.Block): _55.BlockAmino;
                    fromAminoMsg(object: _55.BlockAminoMsg): _55.Block;
                    toAminoMsg(message: _55.Block): _55.BlockAminoMsg;
                    fromProtoMsg(message: _55.BlockProtoMsg): _55.Block;
                    toProto(message: _55.Block): Uint8Array;
                    toProtoMsg(message: _55.Block): _55.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _55.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.Header;
                    fromPartial(object: Partial<_55.Header>): _55.Header;
                    fromAmino(object: _55.HeaderAmino): _55.Header;
                    toAmino(message: _55.Header): _55.HeaderAmino;
                    fromAminoMsg(object: _55.HeaderAminoMsg): _55.Header;
                    toAminoMsg(message: _55.Header): _55.HeaderAminoMsg;
                    fromProtoMsg(message: _55.HeaderProtoMsg): _55.Header;
                    toProto(message: _55.Header): Uint8Array;
                    toProtoMsg(message: _55.Header): _55.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _54.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_54.GetValidatorSetByHeightRequest>): _54.GetValidatorSetByHeightRequest;
                    fromAmino(object: _54.GetValidatorSetByHeightRequestAmino): _54.GetValidatorSetByHeightRequest;
                    toAmino(message: _54.GetValidatorSetByHeightRequest): _54.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _54.GetValidatorSetByHeightRequestAminoMsg): _54.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _54.GetValidatorSetByHeightRequest): _54.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _54.GetValidatorSetByHeightRequestProtoMsg): _54.GetValidatorSetByHeightRequest;
                    toProto(message: _54.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _54.GetValidatorSetByHeightRequest): _54.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _54.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_54.GetValidatorSetByHeightResponse>): _54.GetValidatorSetByHeightResponse;
                    fromAmino(object: _54.GetValidatorSetByHeightResponseAmino): _54.GetValidatorSetByHeightResponse;
                    toAmino(message: _54.GetValidatorSetByHeightResponse): _54.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _54.GetValidatorSetByHeightResponseAminoMsg): _54.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _54.GetValidatorSetByHeightResponse): _54.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _54.GetValidatorSetByHeightResponseProtoMsg): _54.GetValidatorSetByHeightResponse;
                    toProto(message: _54.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _54.GetValidatorSetByHeightResponse): _54.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _54.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_54.GetLatestValidatorSetRequest>): _54.GetLatestValidatorSetRequest;
                    fromAmino(object: _54.GetLatestValidatorSetRequestAmino): _54.GetLatestValidatorSetRequest;
                    toAmino(message: _54.GetLatestValidatorSetRequest): _54.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _54.GetLatestValidatorSetRequestAminoMsg): _54.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _54.GetLatestValidatorSetRequest): _54.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _54.GetLatestValidatorSetRequestProtoMsg): _54.GetLatestValidatorSetRequest;
                    toProto(message: _54.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _54.GetLatestValidatorSetRequest): _54.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _54.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_54.GetLatestValidatorSetResponse>): _54.GetLatestValidatorSetResponse;
                    fromAmino(object: _54.GetLatestValidatorSetResponseAmino): _54.GetLatestValidatorSetResponse;
                    toAmino(message: _54.GetLatestValidatorSetResponse): _54.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _54.GetLatestValidatorSetResponseAminoMsg): _54.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _54.GetLatestValidatorSetResponse): _54.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _54.GetLatestValidatorSetResponseProtoMsg): _54.GetLatestValidatorSetResponse;
                    toProto(message: _54.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _54.GetLatestValidatorSetResponse): _54.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _54.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.Validator;
                    fromPartial(object: Partial<_54.Validator>): _54.Validator;
                    fromAmino(object: _54.ValidatorAmino): _54.Validator;
                    toAmino(message: _54.Validator): _54.ValidatorAmino;
                    fromAminoMsg(object: _54.ValidatorAminoMsg): _54.Validator;
                    toAminoMsg(message: _54.Validator): _54.ValidatorAminoMsg;
                    fromProtoMsg(message: _54.ValidatorProtoMsg): _54.Validator;
                    toProto(message: _54.Validator): Uint8Array;
                    toProtoMsg(message: _54.Validator): _54.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _54.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_54.GetBlockByHeightRequest>): _54.GetBlockByHeightRequest;
                    fromAmino(object: _54.GetBlockByHeightRequestAmino): _54.GetBlockByHeightRequest;
                    toAmino(message: _54.GetBlockByHeightRequest): _54.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _54.GetBlockByHeightRequestAminoMsg): _54.GetBlockByHeightRequest;
                    toAminoMsg(message: _54.GetBlockByHeightRequest): _54.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _54.GetBlockByHeightRequestProtoMsg): _54.GetBlockByHeightRequest;
                    toProto(message: _54.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _54.GetBlockByHeightRequest): _54.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _54.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_54.GetBlockByHeightResponse>): _54.GetBlockByHeightResponse;
                    fromAmino(object: _54.GetBlockByHeightResponseAmino): _54.GetBlockByHeightResponse;
                    toAmino(message: _54.GetBlockByHeightResponse): _54.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _54.GetBlockByHeightResponseAminoMsg): _54.GetBlockByHeightResponse;
                    toAminoMsg(message: _54.GetBlockByHeightResponse): _54.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _54.GetBlockByHeightResponseProtoMsg): _54.GetBlockByHeightResponse;
                    toProto(message: _54.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _54.GetBlockByHeightResponse): _54.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _54.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _54.GetLatestBlockRequest;
                    fromPartial(_: Partial<_54.GetLatestBlockRequest>): _54.GetLatestBlockRequest;
                    fromAmino(_: _54.GetLatestBlockRequestAmino): _54.GetLatestBlockRequest;
                    toAmino(_: _54.GetLatestBlockRequest): _54.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _54.GetLatestBlockRequestAminoMsg): _54.GetLatestBlockRequest;
                    toAminoMsg(message: _54.GetLatestBlockRequest): _54.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _54.GetLatestBlockRequestProtoMsg): _54.GetLatestBlockRequest;
                    toProto(message: _54.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _54.GetLatestBlockRequest): _54.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _54.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.GetLatestBlockResponse;
                    fromPartial(object: Partial<_54.GetLatestBlockResponse>): _54.GetLatestBlockResponse;
                    fromAmino(object: _54.GetLatestBlockResponseAmino): _54.GetLatestBlockResponse;
                    toAmino(message: _54.GetLatestBlockResponse): _54.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _54.GetLatestBlockResponseAminoMsg): _54.GetLatestBlockResponse;
                    toAminoMsg(message: _54.GetLatestBlockResponse): _54.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _54.GetLatestBlockResponseProtoMsg): _54.GetLatestBlockResponse;
                    toProto(message: _54.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _54.GetLatestBlockResponse): _54.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _54.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _54.GetSyncingRequest;
                    fromPartial(_: Partial<_54.GetSyncingRequest>): _54.GetSyncingRequest;
                    fromAmino(_: _54.GetSyncingRequestAmino): _54.GetSyncingRequest;
                    toAmino(_: _54.GetSyncingRequest): _54.GetSyncingRequestAmino;
                    fromAminoMsg(object: _54.GetSyncingRequestAminoMsg): _54.GetSyncingRequest;
                    toAminoMsg(message: _54.GetSyncingRequest): _54.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _54.GetSyncingRequestProtoMsg): _54.GetSyncingRequest;
                    toProto(message: _54.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _54.GetSyncingRequest): _54.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _54.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.GetSyncingResponse;
                    fromPartial(object: Partial<_54.GetSyncingResponse>): _54.GetSyncingResponse;
                    fromAmino(object: _54.GetSyncingResponseAmino): _54.GetSyncingResponse;
                    toAmino(message: _54.GetSyncingResponse): _54.GetSyncingResponseAmino;
                    fromAminoMsg(object: _54.GetSyncingResponseAminoMsg): _54.GetSyncingResponse;
                    toAminoMsg(message: _54.GetSyncingResponse): _54.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _54.GetSyncingResponseProtoMsg): _54.GetSyncingResponse;
                    toProto(message: _54.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _54.GetSyncingResponse): _54.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _54.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _54.GetNodeInfoRequest;
                    fromPartial(_: Partial<_54.GetNodeInfoRequest>): _54.GetNodeInfoRequest;
                    fromAmino(_: _54.GetNodeInfoRequestAmino): _54.GetNodeInfoRequest;
                    toAmino(_: _54.GetNodeInfoRequest): _54.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _54.GetNodeInfoRequestAminoMsg): _54.GetNodeInfoRequest;
                    toAminoMsg(message: _54.GetNodeInfoRequest): _54.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _54.GetNodeInfoRequestProtoMsg): _54.GetNodeInfoRequest;
                    toProto(message: _54.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _54.GetNodeInfoRequest): _54.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _54.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.GetNodeInfoResponse;
                    fromPartial(object: Partial<_54.GetNodeInfoResponse>): _54.GetNodeInfoResponse;
                    fromAmino(object: _54.GetNodeInfoResponseAmino): _54.GetNodeInfoResponse;
                    toAmino(message: _54.GetNodeInfoResponse): _54.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _54.GetNodeInfoResponseAminoMsg): _54.GetNodeInfoResponse;
                    toAminoMsg(message: _54.GetNodeInfoResponse): _54.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _54.GetNodeInfoResponseProtoMsg): _54.GetNodeInfoResponse;
                    toProto(message: _54.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _54.GetNodeInfoResponse): _54.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _54.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.VersionInfo;
                    fromPartial(object: Partial<_54.VersionInfo>): _54.VersionInfo;
                    fromAmino(object: _54.VersionInfoAmino): _54.VersionInfo;
                    toAmino(message: _54.VersionInfo): _54.VersionInfoAmino;
                    fromAminoMsg(object: _54.VersionInfoAminoMsg): _54.VersionInfo;
                    toAminoMsg(message: _54.VersionInfo): _54.VersionInfoAminoMsg;
                    fromProtoMsg(message: _54.VersionInfoProtoMsg): _54.VersionInfo;
                    toProto(message: _54.VersionInfo): Uint8Array;
                    toProtoMsg(message: _54.VersionInfo): _54.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _54.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.Module;
                    fromPartial(object: Partial<_54.Module>): _54.Module;
                    fromAmino(object: _54.ModuleAmino): _54.Module;
                    toAmino(message: _54.Module): _54.ModuleAmino;
                    fromAminoMsg(object: _54.ModuleAminoMsg): _54.Module;
                    toAminoMsg(message: _54.Module): _54.ModuleAminoMsg;
                    fromProtoMsg(message: _54.ModuleProtoMsg): _54.Module;
                    toProto(message: _54.Module): Uint8Array;
                    toProtoMsg(message: _54.Module): _54.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _54.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.ABCIQueryRequest;
                    fromPartial(object: Partial<_54.ABCIQueryRequest>): _54.ABCIQueryRequest;
                    fromAmino(object: _54.ABCIQueryRequestAmino): _54.ABCIQueryRequest;
                    toAmino(message: _54.ABCIQueryRequest): _54.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _54.ABCIQueryRequestAminoMsg): _54.ABCIQueryRequest;
                    toAminoMsg(message: _54.ABCIQueryRequest): _54.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _54.ABCIQueryRequestProtoMsg): _54.ABCIQueryRequest;
                    toProto(message: _54.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _54.ABCIQueryRequest): _54.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _54.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.ABCIQueryResponse;
                    fromPartial(object: Partial<_54.ABCIQueryResponse>): _54.ABCIQueryResponse;
                    fromAmino(object: _54.ABCIQueryResponseAmino): _54.ABCIQueryResponse;
                    toAmino(message: _54.ABCIQueryResponse): _54.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _54.ABCIQueryResponseAminoMsg): _54.ABCIQueryResponse;
                    toAminoMsg(message: _54.ABCIQueryResponse): _54.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _54.ABCIQueryResponseProtoMsg): _54.ABCIQueryResponse;
                    toProto(message: _54.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _54.ABCIQueryResponse): _54.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _54.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.ProofOp;
                    fromPartial(object: Partial<_54.ProofOp>): _54.ProofOp;
                    fromAmino(object: _54.ProofOpAmino): _54.ProofOp;
                    toAmino(message: _54.ProofOp): _54.ProofOpAmino;
                    fromAminoMsg(object: _54.ProofOpAminoMsg): _54.ProofOp;
                    toAminoMsg(message: _54.ProofOp): _54.ProofOpAminoMsg;
                    fromProtoMsg(message: _54.ProofOpProtoMsg): _54.ProofOp;
                    toProto(message: _54.ProofOp): Uint8Array;
                    toProtoMsg(message: _54.ProofOp): _54.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _54.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.ProofOps;
                    fromPartial(object: Partial<_54.ProofOps>): _54.ProofOps;
                    fromAmino(object: _54.ProofOpsAmino): _54.ProofOps;
                    toAmino(message: _54.ProofOps): _54.ProofOpsAmino;
                    fromAminoMsg(object: _54.ProofOpsAminoMsg): _54.ProofOps;
                    toAminoMsg(message: _54.ProofOps): _54.ProofOpsAminoMsg;
                    fromProtoMsg(message: _54.ProofOpsProtoMsg): _54.ProofOps;
                    toProto(message: _54.ProofOps): Uint8Array;
                    toProtoMsg(message: _54.ProofOps): _54.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _56.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Coin;
                fromPartial(object: Partial<_56.Coin>): _56.Coin;
                fromAmino(object: _56.CoinAmino): _56.Coin;
                toAmino(message: _56.Coin): _56.CoinAmino;
                fromAminoMsg(object: _56.CoinAminoMsg): _56.Coin;
                toAminoMsg(message: _56.Coin): _56.CoinAminoMsg;
                fromProtoMsg(message: _56.CoinProtoMsg): _56.Coin;
                toProto(message: _56.Coin): Uint8Array;
                toProtoMsg(message: _56.Coin): _56.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _56.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DecCoin;
                fromPartial(object: Partial<_56.DecCoin>): _56.DecCoin;
                fromAmino(object: _56.DecCoinAmino): _56.DecCoin;
                toAmino(message: _56.DecCoin): _56.DecCoinAmino;
                fromAminoMsg(object: _56.DecCoinAminoMsg): _56.DecCoin;
                toAminoMsg(message: _56.DecCoin): _56.DecCoinAminoMsg;
                fromProtoMsg(message: _56.DecCoinProtoMsg): _56.DecCoin;
                toProto(message: _56.DecCoin): Uint8Array;
                toProtoMsg(message: _56.DecCoin): _56.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _56.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.IntProto;
                fromPartial(object: Partial<_56.IntProto>): _56.IntProto;
                fromAmino(object: _56.IntProtoAmino): _56.IntProto;
                toAmino(message: _56.IntProto): _56.IntProtoAmino;
                fromAminoMsg(object: _56.IntProtoAminoMsg): _56.IntProto;
                toAminoMsg(message: _56.IntProto): _56.IntProtoAminoMsg;
                fromProtoMsg(message: _56.IntProtoProtoMsg): _56.IntProto;
                toProto(message: _56.IntProto): Uint8Array;
                toProtoMsg(message: _56.IntProto): _56.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _56.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DecProto;
                fromPartial(object: Partial<_56.DecProto>): _56.DecProto;
                fromAmino(object: _56.DecProtoAmino): _56.DecProto;
                toAmino(message: _56.DecProto): _56.DecProtoAmino;
                fromAminoMsg(object: _56.DecProtoAminoMsg): _56.DecProto;
                toAminoMsg(message: _56.DecProto): _56.DecProtoAminoMsg;
                fromProtoMsg(message: _56.DecProtoProtoMsg): _56.DecProto;
                toProto(message: _56.DecProto): Uint8Array;
                toProtoMsg(message: _56.DecProto): _56.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _58.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.GenesisOwners;
                fromPartial(object: Partial<_58.GenesisOwners>): _58.GenesisOwners;
                fromAmino(object: _58.GenesisOwnersAmino): _58.GenesisOwners;
                toAmino(message: _58.GenesisOwners): _58.GenesisOwnersAmino;
                fromAminoMsg(object: _58.GenesisOwnersAminoMsg): _58.GenesisOwners;
                toAminoMsg(message: _58.GenesisOwners): _58.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _58.GenesisOwnersProtoMsg): _58.GenesisOwners;
                toProto(message: _58.GenesisOwners): Uint8Array;
                toProtoMsg(message: _58.GenesisOwners): _58.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _57.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Capability;
                fromPartial(object: Partial<_57.Capability>): _57.Capability;
                fromAmino(object: _57.CapabilityAmino): _57.Capability;
                toAmino(message: _57.Capability): _57.CapabilityAmino;
                fromAminoMsg(object: _57.CapabilityAminoMsg): _57.Capability;
                toAminoMsg(message: _57.Capability): _57.CapabilityAminoMsg;
                fromProtoMsg(message: _57.CapabilityProtoMsg): _57.Capability;
                toProto(message: _57.Capability): Uint8Array;
                toProtoMsg(message: _57.Capability): _57.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _57.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Owner;
                fromPartial(object: Partial<_57.Owner>): _57.Owner;
                fromAmino(object: _57.OwnerAmino): _57.Owner;
                toAmino(message: _57.Owner): _57.OwnerAmino;
                fromAminoMsg(object: _57.OwnerAminoMsg): _57.Owner;
                toAminoMsg(message: _57.Owner): _57.OwnerAminoMsg;
                fromProtoMsg(message: _57.OwnerProtoMsg): _57.Owner;
                toProto(message: _57.Owner): Uint8Array;
                toProtoMsg(message: _57.Owner): _57.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _57.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.CapabilityOwners;
                fromPartial(object: Partial<_57.CapabilityOwners>): _57.CapabilityOwners;
                fromAmino(object: _57.CapabilityOwnersAmino): _57.CapabilityOwners;
                toAmino(message: _57.CapabilityOwners): _57.CapabilityOwnersAmino;
                fromAminoMsg(object: _57.CapabilityOwnersAminoMsg): _57.CapabilityOwners;
                toAminoMsg(message: _57.CapabilityOwners): _57.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _57.CapabilityOwnersProtoMsg): _57.CapabilityOwners;
                toProto(message: _57.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _57.CapabilityOwners): _57.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _60.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _60.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _60.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _60.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _60.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _60.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _60.MsgVerifyInvariant) => _60.MsgVerifyInvariantAmino;
                    fromAmino: (object: _60.MsgVerifyInvariantAmino) => _60.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _60.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgVerifyInvariant;
                fromPartial(object: Partial<_60.MsgVerifyInvariant>): _60.MsgVerifyInvariant;
                fromAmino(object: _60.MsgVerifyInvariantAmino): _60.MsgVerifyInvariant;
                toAmino(message: _60.MsgVerifyInvariant): _60.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _60.MsgVerifyInvariantAminoMsg): _60.MsgVerifyInvariant;
                toAminoMsg(message: _60.MsgVerifyInvariant): _60.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _60.MsgVerifyInvariantProtoMsg): _60.MsgVerifyInvariant;
                toProto(message: _60.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _60.MsgVerifyInvariant): _60.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _60.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_60.MsgVerifyInvariantResponse>): _60.MsgVerifyInvariantResponse;
                fromAmino(_: _60.MsgVerifyInvariantResponseAmino): _60.MsgVerifyInvariantResponse;
                toAmino(_: _60.MsgVerifyInvariantResponse): _60.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _60.MsgVerifyInvariantResponseAminoMsg): _60.MsgVerifyInvariantResponse;
                toAminoMsg(message: _60.MsgVerifyInvariantResponse): _60.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _60.MsgVerifyInvariantResponseProtoMsg): _60.MsgVerifyInvariantResponse;
                toProto(message: _60.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _60.MsgVerifyInvariantResponse): _60.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _59.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.GenesisState;
                fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
                fromAmino(object: _59.GenesisStateAmino): _59.GenesisState;
                toAmino(message: _59.GenesisState): _59.GenesisStateAmino;
                fromAminoMsg(object: _59.GenesisStateAminoMsg): _59.GenesisState;
                toAminoMsg(message: _59.GenesisState): _59.GenesisStateAminoMsg;
                fromProtoMsg(message: _59.GenesisStateProtoMsg): _59.GenesisState;
                toProto(message: _59.GenesisState): Uint8Array;
                toProtoMsg(message: _59.GenesisState): _59.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _62.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.BIP44Params;
                    fromPartial(object: Partial<_62.BIP44Params>): _62.BIP44Params;
                    fromAmino(object: _62.BIP44ParamsAmino): _62.BIP44Params;
                    toAmino(message: _62.BIP44Params): _62.BIP44ParamsAmino;
                    fromAminoMsg(object: _62.BIP44ParamsAminoMsg): _62.BIP44Params;
                    toAminoMsg(message: _62.BIP44Params): _62.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _62.BIP44ParamsProtoMsg): _62.BIP44Params;
                    toProto(message: _62.BIP44Params): Uint8Array;
                    toProtoMsg(message: _62.BIP44Params): _62.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _63.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.Record;
                    fromPartial(object: Partial<_63.Record>): _63.Record;
                    fromAmino(object: _63.RecordAmino): _63.Record;
                    toAmino(message: _63.Record): _63.RecordAmino;
                    fromAminoMsg(object: _63.RecordAminoMsg): _63.Record;
                    toAminoMsg(message: _63.Record): _63.RecordAminoMsg;
                    fromProtoMsg(message: _63.RecordProtoMsg): _63.Record;
                    toProto(message: _63.Record): Uint8Array;
                    toProtoMsg(message: _63.Record): _63.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _63.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.Record_Local;
                    fromPartial(object: Partial<_63.Record_Local>): _63.Record_Local;
                    fromAmino(object: _63.Record_LocalAmino): _63.Record_Local;
                    toAmino(message: _63.Record_Local): _63.Record_LocalAmino;
                    fromAminoMsg(object: _63.Record_LocalAminoMsg): _63.Record_Local;
                    toAminoMsg(message: _63.Record_Local): _63.Record_LocalAminoMsg;
                    fromProtoMsg(message: _63.Record_LocalProtoMsg): _63.Record_Local;
                    toProto(message: _63.Record_Local): Uint8Array;
                    toProtoMsg(message: _63.Record_Local): _63.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _63.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.Record_Ledger;
                    fromPartial(object: Partial<_63.Record_Ledger>): _63.Record_Ledger;
                    fromAmino(object: _63.Record_LedgerAmino): _63.Record_Ledger;
                    toAmino(message: _63.Record_Ledger): _63.Record_LedgerAmino;
                    fromAminoMsg(object: _63.Record_LedgerAminoMsg): _63.Record_Ledger;
                    toAminoMsg(message: _63.Record_Ledger): _63.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _63.Record_LedgerProtoMsg): _63.Record_Ledger;
                    toProto(message: _63.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _63.Record_Ledger): _63.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _63.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.Record_Multi;
                    fromPartial(_: Partial<_63.Record_Multi>): _63.Record_Multi;
                    fromAmino(_: _63.Record_MultiAmino): _63.Record_Multi;
                    toAmino(_: _63.Record_Multi): _63.Record_MultiAmino;
                    fromAminoMsg(object: _63.Record_MultiAminoMsg): _63.Record_Multi;
                    toAminoMsg(message: _63.Record_Multi): _63.Record_MultiAminoMsg;
                    fromProtoMsg(message: _63.Record_MultiProtoMsg): _63.Record_Multi;
                    toProto(message: _63.Record_Multi): Uint8Array;
                    toProtoMsg(message: _63.Record_Multi): _63.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _63.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.Record_Offline;
                    fromPartial(_: Partial<_63.Record_Offline>): _63.Record_Offline;
                    fromAmino(_: _63.Record_OfflineAmino): _63.Record_Offline;
                    toAmino(_: _63.Record_Offline): _63.Record_OfflineAmino;
                    fromAminoMsg(object: _63.Record_OfflineAminoMsg): _63.Record_Offline;
                    toAminoMsg(message: _63.Record_Offline): _63.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _63.Record_OfflineProtoMsg): _63.Record_Offline;
                    toProto(message: _63.Record_Offline): Uint8Array;
                    toProtoMsg(message: _63.Record_Offline): _63.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _64.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.LegacyAminoPubKey;
                fromPartial(object: Partial<_64.LegacyAminoPubKey>): _64.LegacyAminoPubKey;
                fromAmino(object: _64.LegacyAminoPubKeyAmino): _64.LegacyAminoPubKey;
                toAmino(message: _64.LegacyAminoPubKey): _64.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _64.LegacyAminoPubKeyAminoMsg): _64.LegacyAminoPubKey;
                toAminoMsg(message: _64.LegacyAminoPubKey): _64.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _64.LegacyAminoPubKeyProtoMsg): _64.LegacyAminoPubKey;
                toProto(message: _64.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _64.LegacyAminoPubKey): _64.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                validatorOutstandingRewards(request: _69.QueryValidatorOutstandingRewardsRequest): Promise<_69.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _69.QueryValidatorCommissionRequest): Promise<_69.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _69.QueryValidatorSlashesRequest): Promise<_69.QueryValidatorSlashesResponse>;
                delegationRewards(request: _69.QueryDelegationRewardsRequest): Promise<_69.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _69.QueryDelegationTotalRewardsRequest): Promise<_69.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _69.QueryDelegatorValidatorsRequest): Promise<_69.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _69.QueryDelegatorWithdrawAddressRequest): Promise<_69.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _69.QueryCommunityPoolRequest): Promise<_69.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _70.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _70.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _70.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _70.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _70.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _70.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _70.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _70.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _70.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _70.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _70.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _70.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _70.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _70.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _70.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _70.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _70.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _70.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _70.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _70.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _70.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _70.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _70.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _70.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _70.MsgSetWithdrawAddress) => _70.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _70.MsgSetWithdrawAddressAmino) => _70.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _70.MsgWithdrawDelegatorReward) => _70.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _70.MsgWithdrawDelegatorRewardAmino) => _70.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _70.MsgWithdrawValidatorCommission) => _70.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _70.MsgWithdrawValidatorCommissionAmino) => _70.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _70.MsgFundCommunityPool) => _70.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _70.MsgFundCommunityPoolAmino) => _70.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _70.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_70.MsgSetWithdrawAddress>): _70.MsgSetWithdrawAddress;
                fromAmino(object: _70.MsgSetWithdrawAddressAmino): _70.MsgSetWithdrawAddress;
                toAmino(message: _70.MsgSetWithdrawAddress): _70.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _70.MsgSetWithdrawAddressAminoMsg): _70.MsgSetWithdrawAddress;
                toAminoMsg(message: _70.MsgSetWithdrawAddress): _70.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _70.MsgSetWithdrawAddressProtoMsg): _70.MsgSetWithdrawAddress;
                toProto(message: _70.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _70.MsgSetWithdrawAddress): _70.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _70.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_70.MsgSetWithdrawAddressResponse>): _70.MsgSetWithdrawAddressResponse;
                fromAmino(_: _70.MsgSetWithdrawAddressResponseAmino): _70.MsgSetWithdrawAddressResponse;
                toAmino(_: _70.MsgSetWithdrawAddressResponse): _70.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _70.MsgSetWithdrawAddressResponseAminoMsg): _70.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _70.MsgSetWithdrawAddressResponse): _70.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _70.MsgSetWithdrawAddressResponseProtoMsg): _70.MsgSetWithdrawAddressResponse;
                toProto(message: _70.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _70.MsgSetWithdrawAddressResponse): _70.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _70.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_70.MsgWithdrawDelegatorReward>): _70.MsgWithdrawDelegatorReward;
                fromAmino(object: _70.MsgWithdrawDelegatorRewardAmino): _70.MsgWithdrawDelegatorReward;
                toAmino(message: _70.MsgWithdrawDelegatorReward): _70.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _70.MsgWithdrawDelegatorRewardAminoMsg): _70.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _70.MsgWithdrawDelegatorReward): _70.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _70.MsgWithdrawDelegatorRewardProtoMsg): _70.MsgWithdrawDelegatorReward;
                toProto(message: _70.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _70.MsgWithdrawDelegatorReward): _70.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _70.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_70.MsgWithdrawDelegatorRewardResponse>): _70.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _70.MsgWithdrawDelegatorRewardResponseAmino): _70.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _70.MsgWithdrawDelegatorRewardResponse): _70.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _70.MsgWithdrawDelegatorRewardResponseAminoMsg): _70.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _70.MsgWithdrawDelegatorRewardResponse): _70.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _70.MsgWithdrawDelegatorRewardResponseProtoMsg): _70.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _70.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _70.MsgWithdrawDelegatorRewardResponse): _70.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _70.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_70.MsgWithdrawValidatorCommission>): _70.MsgWithdrawValidatorCommission;
                fromAmino(object: _70.MsgWithdrawValidatorCommissionAmino): _70.MsgWithdrawValidatorCommission;
                toAmino(message: _70.MsgWithdrawValidatorCommission): _70.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _70.MsgWithdrawValidatorCommissionAminoMsg): _70.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _70.MsgWithdrawValidatorCommission): _70.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _70.MsgWithdrawValidatorCommissionProtoMsg): _70.MsgWithdrawValidatorCommission;
                toProto(message: _70.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _70.MsgWithdrawValidatorCommission): _70.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _70.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_70.MsgWithdrawValidatorCommissionResponse>): _70.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _70.MsgWithdrawValidatorCommissionResponseAmino): _70.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _70.MsgWithdrawValidatorCommissionResponse): _70.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _70.MsgWithdrawValidatorCommissionResponseAminoMsg): _70.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _70.MsgWithdrawValidatorCommissionResponse): _70.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _70.MsgWithdrawValidatorCommissionResponseProtoMsg): _70.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _70.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _70.MsgWithdrawValidatorCommissionResponse): _70.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _70.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgFundCommunityPool;
                fromPartial(object: Partial<_70.MsgFundCommunityPool>): _70.MsgFundCommunityPool;
                fromAmino(object: _70.MsgFundCommunityPoolAmino): _70.MsgFundCommunityPool;
                toAmino(message: _70.MsgFundCommunityPool): _70.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _70.MsgFundCommunityPoolAminoMsg): _70.MsgFundCommunityPool;
                toAminoMsg(message: _70.MsgFundCommunityPool): _70.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _70.MsgFundCommunityPoolProtoMsg): _70.MsgFundCommunityPool;
                toProto(message: _70.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _70.MsgFundCommunityPool): _70.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _70.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_70.MsgFundCommunityPoolResponse>): _70.MsgFundCommunityPoolResponse;
                fromAmino(_: _70.MsgFundCommunityPoolResponseAmino): _70.MsgFundCommunityPoolResponse;
                toAmino(_: _70.MsgFundCommunityPoolResponse): _70.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _70.MsgFundCommunityPoolResponseAminoMsg): _70.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _70.MsgFundCommunityPoolResponse): _70.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _70.MsgFundCommunityPoolResponseProtoMsg): _70.MsgFundCommunityPoolResponse;
                toProto(message: _70.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _70.MsgFundCommunityPoolResponse): _70.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _69.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.QueryParamsRequest;
                fromPartial(_: Partial<_69.QueryParamsRequest>): _69.QueryParamsRequest;
                fromAmino(_: _69.QueryParamsRequestAmino): _69.QueryParamsRequest;
                toAmino(_: _69.QueryParamsRequest): _69.QueryParamsRequestAmino;
                fromAminoMsg(object: _69.QueryParamsRequestAminoMsg): _69.QueryParamsRequest;
                toAminoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryParamsRequestProtoMsg): _69.QueryParamsRequest;
                toProto(message: _69.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _69.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryParamsResponse;
                fromPartial(object: Partial<_69.QueryParamsResponse>): _69.QueryParamsResponse;
                fromAmino(object: _69.QueryParamsResponseAmino): _69.QueryParamsResponse;
                toAmino(message: _69.QueryParamsResponse): _69.QueryParamsResponseAmino;
                fromAminoMsg(object: _69.QueryParamsResponseAminoMsg): _69.QueryParamsResponse;
                toAminoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryParamsResponseProtoMsg): _69.QueryParamsResponse;
                toProto(message: _69.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _69.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_69.QueryValidatorOutstandingRewardsRequest>): _69.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _69.QueryValidatorOutstandingRewardsRequestAmino): _69.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _69.QueryValidatorOutstandingRewardsRequest): _69.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _69.QueryValidatorOutstandingRewardsRequestAminoMsg): _69.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _69.QueryValidatorOutstandingRewardsRequest): _69.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorOutstandingRewardsRequestProtoMsg): _69.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _69.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorOutstandingRewardsRequest): _69.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _69.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_69.QueryValidatorOutstandingRewardsResponse>): _69.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _69.QueryValidatorOutstandingRewardsResponseAmino): _69.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _69.QueryValidatorOutstandingRewardsResponse): _69.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _69.QueryValidatorOutstandingRewardsResponseAminoMsg): _69.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _69.QueryValidatorOutstandingRewardsResponse): _69.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorOutstandingRewardsResponseProtoMsg): _69.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _69.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorOutstandingRewardsResponse): _69.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _69.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_69.QueryValidatorCommissionRequest>): _69.QueryValidatorCommissionRequest;
                fromAmino(object: _69.QueryValidatorCommissionRequestAmino): _69.QueryValidatorCommissionRequest;
                toAmino(message: _69.QueryValidatorCommissionRequest): _69.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _69.QueryValidatorCommissionRequestAminoMsg): _69.QueryValidatorCommissionRequest;
                toAminoMsg(message: _69.QueryValidatorCommissionRequest): _69.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorCommissionRequestProtoMsg): _69.QueryValidatorCommissionRequest;
                toProto(message: _69.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorCommissionRequest): _69.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _69.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_69.QueryValidatorCommissionResponse>): _69.QueryValidatorCommissionResponse;
                fromAmino(object: _69.QueryValidatorCommissionResponseAmino): _69.QueryValidatorCommissionResponse;
                toAmino(message: _69.QueryValidatorCommissionResponse): _69.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _69.QueryValidatorCommissionResponseAminoMsg): _69.QueryValidatorCommissionResponse;
                toAminoMsg(message: _69.QueryValidatorCommissionResponse): _69.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorCommissionResponseProtoMsg): _69.QueryValidatorCommissionResponse;
                toProto(message: _69.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorCommissionResponse): _69.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _69.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_69.QueryValidatorSlashesRequest>): _69.QueryValidatorSlashesRequest;
                fromAmino(object: _69.QueryValidatorSlashesRequestAmino): _69.QueryValidatorSlashesRequest;
                toAmino(message: _69.QueryValidatorSlashesRequest): _69.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _69.QueryValidatorSlashesRequestAminoMsg): _69.QueryValidatorSlashesRequest;
                toAminoMsg(message: _69.QueryValidatorSlashesRequest): _69.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorSlashesRequestProtoMsg): _69.QueryValidatorSlashesRequest;
                toProto(message: _69.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorSlashesRequest): _69.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _69.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_69.QueryValidatorSlashesResponse>): _69.QueryValidatorSlashesResponse;
                fromAmino(object: _69.QueryValidatorSlashesResponseAmino): _69.QueryValidatorSlashesResponse;
                toAmino(message: _69.QueryValidatorSlashesResponse): _69.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _69.QueryValidatorSlashesResponseAminoMsg): _69.QueryValidatorSlashesResponse;
                toAminoMsg(message: _69.QueryValidatorSlashesResponse): _69.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorSlashesResponseProtoMsg): _69.QueryValidatorSlashesResponse;
                toProto(message: _69.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorSlashesResponse): _69.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _69.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_69.QueryDelegationRewardsRequest>): _69.QueryDelegationRewardsRequest;
                fromAmino(object: _69.QueryDelegationRewardsRequestAmino): _69.QueryDelegationRewardsRequest;
                toAmino(message: _69.QueryDelegationRewardsRequest): _69.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _69.QueryDelegationRewardsRequestAminoMsg): _69.QueryDelegationRewardsRequest;
                toAminoMsg(message: _69.QueryDelegationRewardsRequest): _69.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryDelegationRewardsRequestProtoMsg): _69.QueryDelegationRewardsRequest;
                toProto(message: _69.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryDelegationRewardsRequest): _69.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _69.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_69.QueryDelegationRewardsResponse>): _69.QueryDelegationRewardsResponse;
                fromAmino(object: _69.QueryDelegationRewardsResponseAmino): _69.QueryDelegationRewardsResponse;
                toAmino(message: _69.QueryDelegationRewardsResponse): _69.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _69.QueryDelegationRewardsResponseAminoMsg): _69.QueryDelegationRewardsResponse;
                toAminoMsg(message: _69.QueryDelegationRewardsResponse): _69.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryDelegationRewardsResponseProtoMsg): _69.QueryDelegationRewardsResponse;
                toProto(message: _69.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryDelegationRewardsResponse): _69.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _69.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_69.QueryDelegationTotalRewardsRequest>): _69.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _69.QueryDelegationTotalRewardsRequestAmino): _69.QueryDelegationTotalRewardsRequest;
                toAmino(message: _69.QueryDelegationTotalRewardsRequest): _69.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _69.QueryDelegationTotalRewardsRequestAminoMsg): _69.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _69.QueryDelegationTotalRewardsRequest): _69.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryDelegationTotalRewardsRequestProtoMsg): _69.QueryDelegationTotalRewardsRequest;
                toProto(message: _69.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryDelegationTotalRewardsRequest): _69.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _69.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_69.QueryDelegationTotalRewardsResponse>): _69.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _69.QueryDelegationTotalRewardsResponseAmino): _69.QueryDelegationTotalRewardsResponse;
                toAmino(message: _69.QueryDelegationTotalRewardsResponse): _69.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _69.QueryDelegationTotalRewardsResponseAminoMsg): _69.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _69.QueryDelegationTotalRewardsResponse): _69.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryDelegationTotalRewardsResponseProtoMsg): _69.QueryDelegationTotalRewardsResponse;
                toProto(message: _69.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryDelegationTotalRewardsResponse): _69.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_69.QueryDelegatorValidatorsRequest>): _69.QueryDelegatorValidatorsRequest;
                fromAmino(object: _69.QueryDelegatorValidatorsRequestAmino): _69.QueryDelegatorValidatorsRequest;
                toAmino(message: _69.QueryDelegatorValidatorsRequest): _69.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _69.QueryDelegatorValidatorsRequestAminoMsg): _69.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _69.QueryDelegatorValidatorsRequest): _69.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorValidatorsRequestProtoMsg): _69.QueryDelegatorValidatorsRequest;
                toProto(message: _69.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorValidatorsRequest): _69.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_69.QueryDelegatorValidatorsResponse>): _69.QueryDelegatorValidatorsResponse;
                fromAmino(object: _69.QueryDelegatorValidatorsResponseAmino): _69.QueryDelegatorValidatorsResponse;
                toAmino(message: _69.QueryDelegatorValidatorsResponse): _69.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _69.QueryDelegatorValidatorsResponseAminoMsg): _69.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _69.QueryDelegatorValidatorsResponse): _69.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorValidatorsResponseProtoMsg): _69.QueryDelegatorValidatorsResponse;
                toProto(message: _69.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorValidatorsResponse): _69.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_69.QueryDelegatorWithdrawAddressRequest>): _69.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _69.QueryDelegatorWithdrawAddressRequestAmino): _69.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _69.QueryDelegatorWithdrawAddressRequest): _69.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _69.QueryDelegatorWithdrawAddressRequestAminoMsg): _69.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _69.QueryDelegatorWithdrawAddressRequest): _69.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorWithdrawAddressRequestProtoMsg): _69.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _69.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorWithdrawAddressRequest): _69.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_69.QueryDelegatorWithdrawAddressResponse>): _69.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _69.QueryDelegatorWithdrawAddressResponseAmino): _69.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _69.QueryDelegatorWithdrawAddressResponse): _69.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _69.QueryDelegatorWithdrawAddressResponseAminoMsg): _69.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _69.QueryDelegatorWithdrawAddressResponse): _69.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorWithdrawAddressResponseProtoMsg): _69.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _69.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorWithdrawAddressResponse): _69.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _69.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_69.QueryCommunityPoolRequest>): _69.QueryCommunityPoolRequest;
                fromAmino(_: _69.QueryCommunityPoolRequestAmino): _69.QueryCommunityPoolRequest;
                toAmino(_: _69.QueryCommunityPoolRequest): _69.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _69.QueryCommunityPoolRequestAminoMsg): _69.QueryCommunityPoolRequest;
                toAminoMsg(message: _69.QueryCommunityPoolRequest): _69.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _69.QueryCommunityPoolRequestProtoMsg): _69.QueryCommunityPoolRequest;
                toProto(message: _69.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _69.QueryCommunityPoolRequest): _69.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _69.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_69.QueryCommunityPoolResponse>): _69.QueryCommunityPoolResponse;
                fromAmino(object: _69.QueryCommunityPoolResponseAmino): _69.QueryCommunityPoolResponse;
                toAmino(message: _69.QueryCommunityPoolResponse): _69.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _69.QueryCommunityPoolResponseAminoMsg): _69.QueryCommunityPoolResponse;
                toAminoMsg(message: _69.QueryCommunityPoolResponse): _69.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _69.QueryCommunityPoolResponseProtoMsg): _69.QueryCommunityPoolResponse;
                toProto(message: _69.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _69.QueryCommunityPoolResponse): _69.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _68.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_68.DelegatorWithdrawInfo>): _68.DelegatorWithdrawInfo;
                fromAmino(object: _68.DelegatorWithdrawInfoAmino): _68.DelegatorWithdrawInfo;
                toAmino(message: _68.DelegatorWithdrawInfo): _68.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _68.DelegatorWithdrawInfoAminoMsg): _68.DelegatorWithdrawInfo;
                toAminoMsg(message: _68.DelegatorWithdrawInfo): _68.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _68.DelegatorWithdrawInfoProtoMsg): _68.DelegatorWithdrawInfo;
                toProto(message: _68.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _68.DelegatorWithdrawInfo): _68.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _68.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_68.ValidatorOutstandingRewardsRecord>): _68.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _68.ValidatorOutstandingRewardsRecordAmino): _68.ValidatorOutstandingRewardsRecord;
                toAmino(message: _68.ValidatorOutstandingRewardsRecord): _68.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _68.ValidatorOutstandingRewardsRecordAminoMsg): _68.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _68.ValidatorOutstandingRewardsRecord): _68.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _68.ValidatorOutstandingRewardsRecordProtoMsg): _68.ValidatorOutstandingRewardsRecord;
                toProto(message: _68.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _68.ValidatorOutstandingRewardsRecord): _68.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _68.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_68.ValidatorAccumulatedCommissionRecord>): _68.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _68.ValidatorAccumulatedCommissionRecordAmino): _68.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _68.ValidatorAccumulatedCommissionRecord): _68.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _68.ValidatorAccumulatedCommissionRecordAminoMsg): _68.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _68.ValidatorAccumulatedCommissionRecord): _68.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _68.ValidatorAccumulatedCommissionRecordProtoMsg): _68.ValidatorAccumulatedCommissionRecord;
                toProto(message: _68.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _68.ValidatorAccumulatedCommissionRecord): _68.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _68.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_68.ValidatorHistoricalRewardsRecord>): _68.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _68.ValidatorHistoricalRewardsRecordAmino): _68.ValidatorHistoricalRewardsRecord;
                toAmino(message: _68.ValidatorHistoricalRewardsRecord): _68.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _68.ValidatorHistoricalRewardsRecordAminoMsg): _68.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _68.ValidatorHistoricalRewardsRecord): _68.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _68.ValidatorHistoricalRewardsRecordProtoMsg): _68.ValidatorHistoricalRewardsRecord;
                toProto(message: _68.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _68.ValidatorHistoricalRewardsRecord): _68.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _68.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_68.ValidatorCurrentRewardsRecord>): _68.ValidatorCurrentRewardsRecord;
                fromAmino(object: _68.ValidatorCurrentRewardsRecordAmino): _68.ValidatorCurrentRewardsRecord;
                toAmino(message: _68.ValidatorCurrentRewardsRecord): _68.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _68.ValidatorCurrentRewardsRecordAminoMsg): _68.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _68.ValidatorCurrentRewardsRecord): _68.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _68.ValidatorCurrentRewardsRecordProtoMsg): _68.ValidatorCurrentRewardsRecord;
                toProto(message: _68.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _68.ValidatorCurrentRewardsRecord): _68.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _68.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_68.DelegatorStartingInfoRecord>): _68.DelegatorStartingInfoRecord;
                fromAmino(object: _68.DelegatorStartingInfoRecordAmino): _68.DelegatorStartingInfoRecord;
                toAmino(message: _68.DelegatorStartingInfoRecord): _68.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _68.DelegatorStartingInfoRecordAminoMsg): _68.DelegatorStartingInfoRecord;
                toAminoMsg(message: _68.DelegatorStartingInfoRecord): _68.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _68.DelegatorStartingInfoRecordProtoMsg): _68.DelegatorStartingInfoRecord;
                toProto(message: _68.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _68.DelegatorStartingInfoRecord): _68.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _68.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_68.ValidatorSlashEventRecord>): _68.ValidatorSlashEventRecord;
                fromAmino(object: _68.ValidatorSlashEventRecordAmino): _68.ValidatorSlashEventRecord;
                toAmino(message: _68.ValidatorSlashEventRecord): _68.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _68.ValidatorSlashEventRecordAminoMsg): _68.ValidatorSlashEventRecord;
                toAminoMsg(message: _68.ValidatorSlashEventRecord): _68.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _68.ValidatorSlashEventRecordProtoMsg): _68.ValidatorSlashEventRecord;
                toProto(message: _68.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _68.ValidatorSlashEventRecord): _68.ValidatorSlashEventRecordProtoMsg;
            };
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
            Params: {
                typeUrl: string;
                encode(message: _67.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Params;
                fromPartial(object: Partial<_67.Params>): _67.Params;
                fromAmino(object: _67.ParamsAmino): _67.Params;
                toAmino(message: _67.Params): _67.ParamsAmino;
                fromAminoMsg(object: _67.ParamsAminoMsg): _67.Params;
                toAminoMsg(message: _67.Params): _67.ParamsAminoMsg;
                fromProtoMsg(message: _67.ParamsProtoMsg): _67.Params;
                toProto(message: _67.Params): Uint8Array;
                toProtoMsg(message: _67.Params): _67.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _67.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_67.ValidatorHistoricalRewards>): _67.ValidatorHistoricalRewards;
                fromAmino(object: _67.ValidatorHistoricalRewardsAmino): _67.ValidatorHistoricalRewards;
                toAmino(message: _67.ValidatorHistoricalRewards): _67.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _67.ValidatorHistoricalRewardsAminoMsg): _67.ValidatorHistoricalRewards;
                toAminoMsg(message: _67.ValidatorHistoricalRewards): _67.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _67.ValidatorHistoricalRewardsProtoMsg): _67.ValidatorHistoricalRewards;
                toProto(message: _67.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _67.ValidatorHistoricalRewards): _67.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _67.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorCurrentRewards;
                fromPartial(object: Partial<_67.ValidatorCurrentRewards>): _67.ValidatorCurrentRewards;
                fromAmino(object: _67.ValidatorCurrentRewardsAmino): _67.ValidatorCurrentRewards;
                toAmino(message: _67.ValidatorCurrentRewards): _67.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _67.ValidatorCurrentRewardsAminoMsg): _67.ValidatorCurrentRewards;
                toAminoMsg(message: _67.ValidatorCurrentRewards): _67.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _67.ValidatorCurrentRewardsProtoMsg): _67.ValidatorCurrentRewards;
                toProto(message: _67.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _67.ValidatorCurrentRewards): _67.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _67.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_67.ValidatorAccumulatedCommission>): _67.ValidatorAccumulatedCommission;
                fromAmino(object: _67.ValidatorAccumulatedCommissionAmino): _67.ValidatorAccumulatedCommission;
                toAmino(message: _67.ValidatorAccumulatedCommission): _67.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _67.ValidatorAccumulatedCommissionAminoMsg): _67.ValidatorAccumulatedCommission;
                toAminoMsg(message: _67.ValidatorAccumulatedCommission): _67.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _67.ValidatorAccumulatedCommissionProtoMsg): _67.ValidatorAccumulatedCommission;
                toProto(message: _67.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _67.ValidatorAccumulatedCommission): _67.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _67.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_67.ValidatorOutstandingRewards>): _67.ValidatorOutstandingRewards;
                fromAmino(object: _67.ValidatorOutstandingRewardsAmino): _67.ValidatorOutstandingRewards;
                toAmino(message: _67.ValidatorOutstandingRewards): _67.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _67.ValidatorOutstandingRewardsAminoMsg): _67.ValidatorOutstandingRewards;
                toAminoMsg(message: _67.ValidatorOutstandingRewards): _67.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _67.ValidatorOutstandingRewardsProtoMsg): _67.ValidatorOutstandingRewards;
                toProto(message: _67.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _67.ValidatorOutstandingRewards): _67.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _67.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorSlashEvent;
                fromPartial(object: Partial<_67.ValidatorSlashEvent>): _67.ValidatorSlashEvent;
                fromAmino(object: _67.ValidatorSlashEventAmino): _67.ValidatorSlashEvent;
                toAmino(message: _67.ValidatorSlashEvent): _67.ValidatorSlashEventAmino;
                fromAminoMsg(object: _67.ValidatorSlashEventAminoMsg): _67.ValidatorSlashEvent;
                toAminoMsg(message: _67.ValidatorSlashEvent): _67.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _67.ValidatorSlashEventProtoMsg): _67.ValidatorSlashEvent;
                toProto(message: _67.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _67.ValidatorSlashEvent): _67.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _67.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ValidatorSlashEvents;
                fromPartial(object: Partial<_67.ValidatorSlashEvents>): _67.ValidatorSlashEvents;
                fromAmino(object: _67.ValidatorSlashEventsAmino): _67.ValidatorSlashEvents;
                toAmino(message: _67.ValidatorSlashEvents): _67.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _67.ValidatorSlashEventsAminoMsg): _67.ValidatorSlashEvents;
                toAminoMsg(message: _67.ValidatorSlashEvents): _67.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _67.ValidatorSlashEventsProtoMsg): _67.ValidatorSlashEvents;
                toProto(message: _67.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _67.ValidatorSlashEvents): _67.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _67.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.FeePool;
                fromPartial(object: Partial<_67.FeePool>): _67.FeePool;
                fromAmino(object: _67.FeePoolAmino): _67.FeePool;
                toAmino(message: _67.FeePool): _67.FeePoolAmino;
                fromAminoMsg(object: _67.FeePoolAminoMsg): _67.FeePool;
                toAminoMsg(message: _67.FeePool): _67.FeePoolAminoMsg;
                fromProtoMsg(message: _67.FeePoolProtoMsg): _67.FeePool;
                toProto(message: _67.FeePool): Uint8Array;
                toProtoMsg(message: _67.FeePool): _67.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _67.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_67.CommunityPoolSpendProposal>): _67.CommunityPoolSpendProposal;
                fromAmino(object: _67.CommunityPoolSpendProposalAmino): _67.CommunityPoolSpendProposal;
                toAmino(message: _67.CommunityPoolSpendProposal): _67.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _67.CommunityPoolSpendProposalAminoMsg): _67.CommunityPoolSpendProposal;
                toAminoMsg(message: _67.CommunityPoolSpendProposal): _67.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _67.CommunityPoolSpendProposalProtoMsg): _67.CommunityPoolSpendProposal;
                toProto(message: _67.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _67.CommunityPoolSpendProposal): _67.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _67.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.DelegatorStartingInfo;
                fromPartial(object: Partial<_67.DelegatorStartingInfo>): _67.DelegatorStartingInfo;
                fromAmino(object: _67.DelegatorStartingInfoAmino): _67.DelegatorStartingInfo;
                toAmino(message: _67.DelegatorStartingInfo): _67.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _67.DelegatorStartingInfoAminoMsg): _67.DelegatorStartingInfo;
                toAminoMsg(message: _67.DelegatorStartingInfo): _67.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _67.DelegatorStartingInfoProtoMsg): _67.DelegatorStartingInfo;
                toProto(message: _67.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _67.DelegatorStartingInfo): _67.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _67.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.DelegationDelegatorReward;
                fromPartial(object: Partial<_67.DelegationDelegatorReward>): _67.DelegationDelegatorReward;
                fromAmino(object: _67.DelegationDelegatorRewardAmino): _67.DelegationDelegatorReward;
                toAmino(message: _67.DelegationDelegatorReward): _67.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _67.DelegationDelegatorRewardAminoMsg): _67.DelegationDelegatorReward;
                toAminoMsg(message: _67.DelegationDelegatorReward): _67.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _67.DelegationDelegatorRewardProtoMsg): _67.DelegationDelegatorReward;
                toProto(message: _67.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _67.DelegationDelegatorReward): _67.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _67.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_67.CommunityPoolSpendProposalWithDeposit>): _67.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _67.CommunityPoolSpendProposalWithDepositAmino): _67.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _67.CommunityPoolSpendProposalWithDeposit): _67.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _67.CommunityPoolSpendProposalWithDepositAminoMsg): _67.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _67.CommunityPoolSpendProposalWithDeposit): _67.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _67.CommunityPoolSpendProposalWithDepositProtoMsg): _67.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _67.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _67.CommunityPoolSpendProposalWithDeposit): _67.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                evidence(request: _73.QueryEvidenceRequest): Promise<_73.QueryEvidenceResponse>;
                allEvidence(request?: _73.QueryAllEvidenceRequest): Promise<_73.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _74.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _74.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _74.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _74.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _74.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _74.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _74.MsgSubmitEvidence) => _74.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _74.MsgSubmitEvidenceAmino) => _74.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _74.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgSubmitEvidence;
                fromPartial(object: Partial<_74.MsgSubmitEvidence>): _74.MsgSubmitEvidence;
                fromAmino(object: _74.MsgSubmitEvidenceAmino): _74.MsgSubmitEvidence;
                toAmino(message: _74.MsgSubmitEvidence): _74.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _74.MsgSubmitEvidenceAminoMsg): _74.MsgSubmitEvidence;
                toAminoMsg(message: _74.MsgSubmitEvidence): _74.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _74.MsgSubmitEvidenceProtoMsg): _74.MsgSubmitEvidence;
                toProto(message: _74.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _74.MsgSubmitEvidence): _74.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _74.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_74.MsgSubmitEvidenceResponse>): _74.MsgSubmitEvidenceResponse;
                fromAmino(object: _74.MsgSubmitEvidenceResponseAmino): _74.MsgSubmitEvidenceResponse;
                toAmino(message: _74.MsgSubmitEvidenceResponse): _74.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _74.MsgSubmitEvidenceResponseAminoMsg): _74.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _74.MsgSubmitEvidenceResponse): _74.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _74.MsgSubmitEvidenceResponseProtoMsg): _74.MsgSubmitEvidenceResponse;
                toProto(message: _74.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _74.MsgSubmitEvidenceResponse): _74.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _73.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryEvidenceRequest;
                fromPartial(object: Partial<_73.QueryEvidenceRequest>): _73.QueryEvidenceRequest;
                fromAmino(object: _73.QueryEvidenceRequestAmino): _73.QueryEvidenceRequest;
                toAmino(message: _73.QueryEvidenceRequest): _73.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _73.QueryEvidenceRequestAminoMsg): _73.QueryEvidenceRequest;
                toAminoMsg(message: _73.QueryEvidenceRequest): _73.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _73.QueryEvidenceRequestProtoMsg): _73.QueryEvidenceRequest;
                toProto(message: _73.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _73.QueryEvidenceRequest): _73.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _73.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryEvidenceResponse;
                fromPartial(object: Partial<_73.QueryEvidenceResponse>): _73.QueryEvidenceResponse;
                fromAmino(object: _73.QueryEvidenceResponseAmino): _73.QueryEvidenceResponse;
                toAmino(message: _73.QueryEvidenceResponse): _73.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _73.QueryEvidenceResponseAminoMsg): _73.QueryEvidenceResponse;
                toAminoMsg(message: _73.QueryEvidenceResponse): _73.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _73.QueryEvidenceResponseProtoMsg): _73.QueryEvidenceResponse;
                toProto(message: _73.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _73.QueryEvidenceResponse): _73.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _73.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_73.QueryAllEvidenceRequest>): _73.QueryAllEvidenceRequest;
                fromAmino(object: _73.QueryAllEvidenceRequestAmino): _73.QueryAllEvidenceRequest;
                toAmino(message: _73.QueryAllEvidenceRequest): _73.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _73.QueryAllEvidenceRequestAminoMsg): _73.QueryAllEvidenceRequest;
                toAminoMsg(message: _73.QueryAllEvidenceRequest): _73.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _73.QueryAllEvidenceRequestProtoMsg): _73.QueryAllEvidenceRequest;
                toProto(message: _73.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _73.QueryAllEvidenceRequest): _73.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _73.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_73.QueryAllEvidenceResponse>): _73.QueryAllEvidenceResponse;
                fromAmino(object: _73.QueryAllEvidenceResponseAmino): _73.QueryAllEvidenceResponse;
                toAmino(message: _73.QueryAllEvidenceResponse): _73.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _73.QueryAllEvidenceResponseAminoMsg): _73.QueryAllEvidenceResponse;
                toAminoMsg(message: _73.QueryAllEvidenceResponse): _73.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _73.QueryAllEvidenceResponseProtoMsg): _73.QueryAllEvidenceResponse;
                toProto(message: _73.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _73.QueryAllEvidenceResponse): _73.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _71.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Equivocation;
                fromPartial(object: Partial<_71.Equivocation>): _71.Equivocation;
                fromAmino(object: _71.EquivocationAmino): _71.Equivocation;
                toAmino(message: _71.Equivocation): _71.EquivocationAmino;
                fromAminoMsg(object: _71.EquivocationAminoMsg): _71.Equivocation;
                toAminoMsg(message: _71.Equivocation): _71.EquivocationAminoMsg;
                fromProtoMsg(message: _71.EquivocationProtoMsg): _71.Equivocation;
                toProto(message: _71.Equivocation): Uint8Array;
                toProtoMsg(message: _71.Equivocation): _71.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                allowance(request: _77.QueryAllowanceRequest): Promise<_77.QueryAllowanceResponse>;
                allowances(request: _77.QueryAllowancesRequest): Promise<_77.QueryAllowancesResponse>;
                allowancesByGranter(request: _77.QueryAllowancesByGranterRequest): Promise<_77.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _78.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _78.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _78.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _78.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _78.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _78.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _78.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _78.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _78.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _78.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _78.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _78.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _78.MsgGrantAllowance) => _78.MsgGrantAllowanceAmino;
                    fromAmino: (object: _78.MsgGrantAllowanceAmino) => _78.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _78.MsgRevokeAllowance) => _78.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _78.MsgRevokeAllowanceAmino) => _78.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _78.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgGrantAllowance;
                fromPartial(object: Partial<_78.MsgGrantAllowance>): _78.MsgGrantAllowance;
                fromAmino(object: _78.MsgGrantAllowanceAmino): _78.MsgGrantAllowance;
                toAmino(message: _78.MsgGrantAllowance): _78.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _78.MsgGrantAllowanceAminoMsg): _78.MsgGrantAllowance;
                toAminoMsg(message: _78.MsgGrantAllowance): _78.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _78.MsgGrantAllowanceProtoMsg): _78.MsgGrantAllowance;
                toProto(message: _78.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _78.MsgGrantAllowance): _78.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _78.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_78.MsgGrantAllowanceResponse>): _78.MsgGrantAllowanceResponse;
                fromAmino(_: _78.MsgGrantAllowanceResponseAmino): _78.MsgGrantAllowanceResponse;
                toAmino(_: _78.MsgGrantAllowanceResponse): _78.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _78.MsgGrantAllowanceResponseAminoMsg): _78.MsgGrantAllowanceResponse;
                toAminoMsg(message: _78.MsgGrantAllowanceResponse): _78.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _78.MsgGrantAllowanceResponseProtoMsg): _78.MsgGrantAllowanceResponse;
                toProto(message: _78.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _78.MsgGrantAllowanceResponse): _78.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _78.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgRevokeAllowance;
                fromPartial(object: Partial<_78.MsgRevokeAllowance>): _78.MsgRevokeAllowance;
                fromAmino(object: _78.MsgRevokeAllowanceAmino): _78.MsgRevokeAllowance;
                toAmino(message: _78.MsgRevokeAllowance): _78.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _78.MsgRevokeAllowanceAminoMsg): _78.MsgRevokeAllowance;
                toAminoMsg(message: _78.MsgRevokeAllowance): _78.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _78.MsgRevokeAllowanceProtoMsg): _78.MsgRevokeAllowance;
                toProto(message: _78.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _78.MsgRevokeAllowance): _78.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _78.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_78.MsgRevokeAllowanceResponse>): _78.MsgRevokeAllowanceResponse;
                fromAmino(_: _78.MsgRevokeAllowanceResponseAmino): _78.MsgRevokeAllowanceResponse;
                toAmino(_: _78.MsgRevokeAllowanceResponse): _78.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _78.MsgRevokeAllowanceResponseAminoMsg): _78.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _78.MsgRevokeAllowanceResponse): _78.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _78.MsgRevokeAllowanceResponseProtoMsg): _78.MsgRevokeAllowanceResponse;
                toProto(message: _78.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _78.MsgRevokeAllowanceResponse): _78.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _75.BasicAllowance | _75.PeriodicAllowance | _75.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _77.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowanceRequest;
                fromPartial(object: Partial<_77.QueryAllowanceRequest>): _77.QueryAllowanceRequest;
                fromAmino(object: _77.QueryAllowanceRequestAmino): _77.QueryAllowanceRequest;
                toAmino(message: _77.QueryAllowanceRequest): _77.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _77.QueryAllowanceRequestAminoMsg): _77.QueryAllowanceRequest;
                toAminoMsg(message: _77.QueryAllowanceRequest): _77.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _77.QueryAllowanceRequestProtoMsg): _77.QueryAllowanceRequest;
                toProto(message: _77.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAllowanceRequest): _77.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _77.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowanceResponse;
                fromPartial(object: Partial<_77.QueryAllowanceResponse>): _77.QueryAllowanceResponse;
                fromAmino(object: _77.QueryAllowanceResponseAmino): _77.QueryAllowanceResponse;
                toAmino(message: _77.QueryAllowanceResponse): _77.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _77.QueryAllowanceResponseAminoMsg): _77.QueryAllowanceResponse;
                toAminoMsg(message: _77.QueryAllowanceResponse): _77.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _77.QueryAllowanceResponseProtoMsg): _77.QueryAllowanceResponse;
                toProto(message: _77.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAllowanceResponse): _77.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _77.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowancesRequest;
                fromPartial(object: Partial<_77.QueryAllowancesRequest>): _77.QueryAllowancesRequest;
                fromAmino(object: _77.QueryAllowancesRequestAmino): _77.QueryAllowancesRequest;
                toAmino(message: _77.QueryAllowancesRequest): _77.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _77.QueryAllowancesRequestAminoMsg): _77.QueryAllowancesRequest;
                toAminoMsg(message: _77.QueryAllowancesRequest): _77.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _77.QueryAllowancesRequestProtoMsg): _77.QueryAllowancesRequest;
                toProto(message: _77.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAllowancesRequest): _77.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _77.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowancesResponse;
                fromPartial(object: Partial<_77.QueryAllowancesResponse>): _77.QueryAllowancesResponse;
                fromAmino(object: _77.QueryAllowancesResponseAmino): _77.QueryAllowancesResponse;
                toAmino(message: _77.QueryAllowancesResponse): _77.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _77.QueryAllowancesResponseAminoMsg): _77.QueryAllowancesResponse;
                toAminoMsg(message: _77.QueryAllowancesResponse): _77.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _77.QueryAllowancesResponseProtoMsg): _77.QueryAllowancesResponse;
                toProto(message: _77.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAllowancesResponse): _77.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _77.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_77.QueryAllowancesByGranterRequest>): _77.QueryAllowancesByGranterRequest;
                fromAmino(object: _77.QueryAllowancesByGranterRequestAmino): _77.QueryAllowancesByGranterRequest;
                toAmino(message: _77.QueryAllowancesByGranterRequest): _77.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _77.QueryAllowancesByGranterRequestAminoMsg): _77.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _77.QueryAllowancesByGranterRequest): _77.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _77.QueryAllowancesByGranterRequestProtoMsg): _77.QueryAllowancesByGranterRequest;
                toProto(message: _77.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAllowancesByGranterRequest): _77.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _77.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_77.QueryAllowancesByGranterResponse>): _77.QueryAllowancesByGranterResponse;
                fromAmino(object: _77.QueryAllowancesByGranterResponseAmino): _77.QueryAllowancesByGranterResponse;
                toAmino(message: _77.QueryAllowancesByGranterResponse): _77.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _77.QueryAllowancesByGranterResponseAminoMsg): _77.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _77.QueryAllowancesByGranterResponse): _77.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _77.QueryAllowancesByGranterResponseProtoMsg): _77.QueryAllowancesByGranterResponse;
                toProto(message: _77.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAllowancesByGranterResponse): _77.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _75.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.BasicAllowance;
                fromPartial(object: Partial<_75.BasicAllowance>): _75.BasicAllowance;
                fromAmino(object: _75.BasicAllowanceAmino): _75.BasicAllowance;
                toAmino(message: _75.BasicAllowance): _75.BasicAllowanceAmino;
                fromAminoMsg(object: _75.BasicAllowanceAminoMsg): _75.BasicAllowance;
                toAminoMsg(message: _75.BasicAllowance): _75.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _75.BasicAllowanceProtoMsg): _75.BasicAllowance;
                toProto(message: _75.BasicAllowance): Uint8Array;
                toProtoMsg(message: _75.BasicAllowance): _75.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _75.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.PeriodicAllowance;
                fromPartial(object: Partial<_75.PeriodicAllowance>): _75.PeriodicAllowance;
                fromAmino(object: _75.PeriodicAllowanceAmino): _75.PeriodicAllowance;
                toAmino(message: _75.PeriodicAllowance): _75.PeriodicAllowanceAmino;
                fromAminoMsg(object: _75.PeriodicAllowanceAminoMsg): _75.PeriodicAllowance;
                toAminoMsg(message: _75.PeriodicAllowance): _75.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _75.PeriodicAllowanceProtoMsg): _75.PeriodicAllowance;
                toProto(message: _75.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _75.PeriodicAllowance): _75.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _75.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.AllowedMsgAllowance;
                fromPartial(object: Partial<_75.AllowedMsgAllowance>): _75.AllowedMsgAllowance;
                fromAmino(object: _75.AllowedMsgAllowanceAmino): _75.AllowedMsgAllowance;
                toAmino(message: _75.AllowedMsgAllowance): _75.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _75.AllowedMsgAllowanceAminoMsg): _75.AllowedMsgAllowance;
                toAminoMsg(message: _75.AllowedMsgAllowance): _75.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _75.AllowedMsgAllowanceProtoMsg): _75.AllowedMsgAllowance;
                toProto(message: _75.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _75.AllowedMsgAllowance): _75.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _75.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Grant;
                fromPartial(object: Partial<_75.Grant>): _75.Grant;
                fromAmino(object: _75.GrantAmino): _75.Grant;
                toAmino(message: _75.Grant): _75.GrantAmino;
                fromAminoMsg(object: _75.GrantAminoMsg): _75.Grant;
                toAminoMsg(message: _75.Grant): _75.GrantAminoMsg;
                fromProtoMsg(message: _75.GrantProtoMsg): _75.Grant;
                toProto(message: _75.Grant): Uint8Array;
                toProtoMsg(message: _75.Grant): _75.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _82.QueryProposalRequest): Promise<_82.QueryProposalResponse>;
                proposals(request: _82.QueryProposalsRequest): Promise<_82.QueryProposalsResponse>;
                vote(request: _82.QueryVoteRequest): Promise<_82.QueryVoteResponse>;
                votes(request: _82.QueryVotesRequest): Promise<_82.QueryVotesResponse>;
                params(request: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                deposit(request: _82.QueryDepositRequest): Promise<_82.QueryDepositResponse>;
                deposits(request: _82.QueryDepositsRequest): Promise<_82.QueryDepositsResponse>;
                tallyResult(request: _82.QueryTallyResultRequest): Promise<_82.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _189.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _83.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _83.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _83.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _83.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _83.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _83.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _83.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _83.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _83.MsgExecLegacyContent;
                    };
                    vote(value: _83.MsgVote): {
                        typeUrl: string;
                        value: _83.MsgVote;
                    };
                    voteWeighted(value: _83.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _83.MsgVoteWeighted;
                    };
                    deposit(value: _83.MsgDeposit): {
                        typeUrl: string;
                        value: _83.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _83.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _83.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _83.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _83.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _83.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _83.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _83.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _83.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _83.MsgExecLegacyContent;
                    };
                    vote(value: _83.MsgVote): {
                        typeUrl: string;
                        value: _83.MsgVote;
                    };
                    voteWeighted(value: _83.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _83.MsgVoteWeighted;
                    };
                    deposit(value: _83.MsgDeposit): {
                        typeUrl: string;
                        value: _83.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _83.MsgSubmitProposal) => _83.MsgSubmitProposalAmino;
                    fromAmino: (object: _83.MsgSubmitProposalAmino) => _83.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _83.MsgExecLegacyContent) => _83.MsgExecLegacyContentAmino;
                    fromAmino: (object: _83.MsgExecLegacyContentAmino) => _83.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _83.MsgVote) => _83.MsgVoteAmino;
                    fromAmino: (object: _83.MsgVoteAmino) => _83.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _83.MsgVoteWeighted) => _83.MsgVoteWeightedAmino;
                    fromAmino: (object: _83.MsgVoteWeightedAmino) => _83.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _83.MsgDeposit) => _83.MsgDepositAmino;
                    fromAmino: (object: _83.MsgDepositAmino) => _83.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _83.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgSubmitProposal;
                fromPartial(object: Partial<_83.MsgSubmitProposal>): _83.MsgSubmitProposal;
                fromAmino(object: _83.MsgSubmitProposalAmino): _83.MsgSubmitProposal;
                toAmino(message: _83.MsgSubmitProposal): _83.MsgSubmitProposalAmino;
                fromAminoMsg(object: _83.MsgSubmitProposalAminoMsg): _83.MsgSubmitProposal;
                toAminoMsg(message: _83.MsgSubmitProposal): _83.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _83.MsgSubmitProposalProtoMsg): _83.MsgSubmitProposal;
                toProto(message: _83.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _83.MsgSubmitProposal): _83.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _83.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_83.MsgSubmitProposalResponse>): _83.MsgSubmitProposalResponse;
                fromAmino(object: _83.MsgSubmitProposalResponseAmino): _83.MsgSubmitProposalResponse;
                toAmino(message: _83.MsgSubmitProposalResponse): _83.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _83.MsgSubmitProposalResponseAminoMsg): _83.MsgSubmitProposalResponse;
                toAminoMsg(message: _83.MsgSubmitProposalResponse): _83.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _83.MsgSubmitProposalResponseProtoMsg): _83.MsgSubmitProposalResponse;
                toProto(message: _83.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _83.MsgSubmitProposalResponse): _83.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _83.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgExecLegacyContent;
                fromPartial(object: Partial<_83.MsgExecLegacyContent>): _83.MsgExecLegacyContent;
                fromAmino(object: _83.MsgExecLegacyContentAmino): _83.MsgExecLegacyContent;
                toAmino(message: _83.MsgExecLegacyContent): _83.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _83.MsgExecLegacyContentAminoMsg): _83.MsgExecLegacyContent;
                toAminoMsg(message: _83.MsgExecLegacyContent): _83.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _83.MsgExecLegacyContentProtoMsg): _83.MsgExecLegacyContent;
                toProto(message: _83.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _83.MsgExecLegacyContent): _83.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _83.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_83.MsgExecLegacyContentResponse>): _83.MsgExecLegacyContentResponse;
                fromAmino(_: _83.MsgExecLegacyContentResponseAmino): _83.MsgExecLegacyContentResponse;
                toAmino(_: _83.MsgExecLegacyContentResponse): _83.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _83.MsgExecLegacyContentResponseAminoMsg): _83.MsgExecLegacyContentResponse;
                toAminoMsg(message: _83.MsgExecLegacyContentResponse): _83.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _83.MsgExecLegacyContentResponseProtoMsg): _83.MsgExecLegacyContentResponse;
                toProto(message: _83.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _83.MsgExecLegacyContentResponse): _83.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _83.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgVote;
                fromPartial(object: Partial<_83.MsgVote>): _83.MsgVote;
                fromAmino(object: _83.MsgVoteAmino): _83.MsgVote;
                toAmino(message: _83.MsgVote): _83.MsgVoteAmino;
                fromAminoMsg(object: _83.MsgVoteAminoMsg): _83.MsgVote;
                toAminoMsg(message: _83.MsgVote): _83.MsgVoteAminoMsg;
                fromProtoMsg(message: _83.MsgVoteProtoMsg): _83.MsgVote;
                toProto(message: _83.MsgVote): Uint8Array;
                toProtoMsg(message: _83.MsgVote): _83.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _83.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgVoteResponse;
                fromPartial(_: Partial<_83.MsgVoteResponse>): _83.MsgVoteResponse;
                fromAmino(_: _83.MsgVoteResponseAmino): _83.MsgVoteResponse;
                toAmino(_: _83.MsgVoteResponse): _83.MsgVoteResponseAmino;
                fromAminoMsg(object: _83.MsgVoteResponseAminoMsg): _83.MsgVoteResponse;
                toAminoMsg(message: _83.MsgVoteResponse): _83.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _83.MsgVoteResponseProtoMsg): _83.MsgVoteResponse;
                toProto(message: _83.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _83.MsgVoteResponse): _83.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _83.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgVoteWeighted;
                fromPartial(object: Partial<_83.MsgVoteWeighted>): _83.MsgVoteWeighted;
                fromAmino(object: _83.MsgVoteWeightedAmino): _83.MsgVoteWeighted;
                toAmino(message: _83.MsgVoteWeighted): _83.MsgVoteWeightedAmino;
                fromAminoMsg(object: _83.MsgVoteWeightedAminoMsg): _83.MsgVoteWeighted;
                toAminoMsg(message: _83.MsgVoteWeighted): _83.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _83.MsgVoteWeightedProtoMsg): _83.MsgVoteWeighted;
                toProto(message: _83.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _83.MsgVoteWeighted): _83.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _83.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_83.MsgVoteWeightedResponse>): _83.MsgVoteWeightedResponse;
                fromAmino(_: _83.MsgVoteWeightedResponseAmino): _83.MsgVoteWeightedResponse;
                toAmino(_: _83.MsgVoteWeightedResponse): _83.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _83.MsgVoteWeightedResponseAminoMsg): _83.MsgVoteWeightedResponse;
                toAminoMsg(message: _83.MsgVoteWeightedResponse): _83.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _83.MsgVoteWeightedResponseProtoMsg): _83.MsgVoteWeightedResponse;
                toProto(message: _83.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _83.MsgVoteWeightedResponse): _83.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _83.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgDeposit;
                fromPartial(object: Partial<_83.MsgDeposit>): _83.MsgDeposit;
                fromAmino(object: _83.MsgDepositAmino): _83.MsgDeposit;
                toAmino(message: _83.MsgDeposit): _83.MsgDepositAmino;
                fromAminoMsg(object: _83.MsgDepositAminoMsg): _83.MsgDeposit;
                toAminoMsg(message: _83.MsgDeposit): _83.MsgDepositAminoMsg;
                fromProtoMsg(message: _83.MsgDepositProtoMsg): _83.MsgDeposit;
                toProto(message: _83.MsgDeposit): Uint8Array;
                toProtoMsg(message: _83.MsgDeposit): _83.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _83.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgDepositResponse;
                fromPartial(_: Partial<_83.MsgDepositResponse>): _83.MsgDepositResponse;
                fromAmino(_: _83.MsgDepositResponseAmino): _83.MsgDepositResponse;
                toAmino(_: _83.MsgDepositResponse): _83.MsgDepositResponseAmino;
                fromAminoMsg(object: _83.MsgDepositResponseAminoMsg): _83.MsgDepositResponse;
                toAminoMsg(message: _83.MsgDepositResponse): _83.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _83.MsgDepositResponseProtoMsg): _83.MsgDepositResponse;
                toProto(message: _83.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _83.MsgDepositResponse): _83.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _85.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _82.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryProposalRequest;
                fromPartial(object: Partial<_82.QueryProposalRequest>): _82.QueryProposalRequest;
                fromAmino(object: _82.QueryProposalRequestAmino): _82.QueryProposalRequest;
                toAmino(message: _82.QueryProposalRequest): _82.QueryProposalRequestAmino;
                fromAminoMsg(object: _82.QueryProposalRequestAminoMsg): _82.QueryProposalRequest;
                toAminoMsg(message: _82.QueryProposalRequest): _82.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _82.QueryProposalRequestProtoMsg): _82.QueryProposalRequest;
                toProto(message: _82.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _82.QueryProposalRequest): _82.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _82.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryProposalResponse;
                fromPartial(object: Partial<_82.QueryProposalResponse>): _82.QueryProposalResponse;
                fromAmino(object: _82.QueryProposalResponseAmino): _82.QueryProposalResponse;
                toAmino(message: _82.QueryProposalResponse): _82.QueryProposalResponseAmino;
                fromAminoMsg(object: _82.QueryProposalResponseAminoMsg): _82.QueryProposalResponse;
                toAminoMsg(message: _82.QueryProposalResponse): _82.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _82.QueryProposalResponseProtoMsg): _82.QueryProposalResponse;
                toProto(message: _82.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _82.QueryProposalResponse): _82.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _82.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryProposalsRequest;
                fromPartial(object: Partial<_82.QueryProposalsRequest>): _82.QueryProposalsRequest;
                fromAmino(object: _82.QueryProposalsRequestAmino): _82.QueryProposalsRequest;
                toAmino(message: _82.QueryProposalsRequest): _82.QueryProposalsRequestAmino;
                fromAminoMsg(object: _82.QueryProposalsRequestAminoMsg): _82.QueryProposalsRequest;
                toAminoMsg(message: _82.QueryProposalsRequest): _82.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryProposalsRequestProtoMsg): _82.QueryProposalsRequest;
                toProto(message: _82.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryProposalsRequest): _82.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _82.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryProposalsResponse;
                fromPartial(object: Partial<_82.QueryProposalsResponse>): _82.QueryProposalsResponse;
                fromAmino(object: _82.QueryProposalsResponseAmino): _82.QueryProposalsResponse;
                toAmino(message: _82.QueryProposalsResponse): _82.QueryProposalsResponseAmino;
                fromAminoMsg(object: _82.QueryProposalsResponseAminoMsg): _82.QueryProposalsResponse;
                toAminoMsg(message: _82.QueryProposalsResponse): _82.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryProposalsResponseProtoMsg): _82.QueryProposalsResponse;
                toProto(message: _82.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryProposalsResponse): _82.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _82.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryVoteRequest;
                fromPartial(object: Partial<_82.QueryVoteRequest>): _82.QueryVoteRequest;
                fromAmino(object: _82.QueryVoteRequestAmino): _82.QueryVoteRequest;
                toAmino(message: _82.QueryVoteRequest): _82.QueryVoteRequestAmino;
                fromAminoMsg(object: _82.QueryVoteRequestAminoMsg): _82.QueryVoteRequest;
                toAminoMsg(message: _82.QueryVoteRequest): _82.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _82.QueryVoteRequestProtoMsg): _82.QueryVoteRequest;
                toProto(message: _82.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _82.QueryVoteRequest): _82.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _82.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryVoteResponse;
                fromPartial(object: Partial<_82.QueryVoteResponse>): _82.QueryVoteResponse;
                fromAmino(object: _82.QueryVoteResponseAmino): _82.QueryVoteResponse;
                toAmino(message: _82.QueryVoteResponse): _82.QueryVoteResponseAmino;
                fromAminoMsg(object: _82.QueryVoteResponseAminoMsg): _82.QueryVoteResponse;
                toAminoMsg(message: _82.QueryVoteResponse): _82.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _82.QueryVoteResponseProtoMsg): _82.QueryVoteResponse;
                toProto(message: _82.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _82.QueryVoteResponse): _82.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _82.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryVotesRequest;
                fromPartial(object: Partial<_82.QueryVotesRequest>): _82.QueryVotesRequest;
                fromAmino(object: _82.QueryVotesRequestAmino): _82.QueryVotesRequest;
                toAmino(message: _82.QueryVotesRequest): _82.QueryVotesRequestAmino;
                fromAminoMsg(object: _82.QueryVotesRequestAminoMsg): _82.QueryVotesRequest;
                toAminoMsg(message: _82.QueryVotesRequest): _82.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _82.QueryVotesRequestProtoMsg): _82.QueryVotesRequest;
                toProto(message: _82.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _82.QueryVotesRequest): _82.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _82.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryVotesResponse;
                fromPartial(object: Partial<_82.QueryVotesResponse>): _82.QueryVotesResponse;
                fromAmino(object: _82.QueryVotesResponseAmino): _82.QueryVotesResponse;
                toAmino(message: _82.QueryVotesResponse): _82.QueryVotesResponseAmino;
                fromAminoMsg(object: _82.QueryVotesResponseAminoMsg): _82.QueryVotesResponse;
                toAminoMsg(message: _82.QueryVotesResponse): _82.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _82.QueryVotesResponseProtoMsg): _82.QueryVotesResponse;
                toProto(message: _82.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _82.QueryVotesResponse): _82.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _82.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryParamsRequest;
                fromPartial(object: Partial<_82.QueryParamsRequest>): _82.QueryParamsRequest;
                fromAmino(object: _82.QueryParamsRequestAmino): _82.QueryParamsRequest;
                toAmino(message: _82.QueryParamsRequest): _82.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _82.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDepositRequest;
                fromPartial(object: Partial<_82.QueryDepositRequest>): _82.QueryDepositRequest;
                fromAmino(object: _82.QueryDepositRequestAmino): _82.QueryDepositRequest;
                toAmino(message: _82.QueryDepositRequest): _82.QueryDepositRequestAmino;
                fromAminoMsg(object: _82.QueryDepositRequestAminoMsg): _82.QueryDepositRequest;
                toAminoMsg(message: _82.QueryDepositRequest): _82.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _82.QueryDepositRequestProtoMsg): _82.QueryDepositRequest;
                toProto(message: _82.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _82.QueryDepositRequest): _82.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _82.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDepositResponse;
                fromPartial(object: Partial<_82.QueryDepositResponse>): _82.QueryDepositResponse;
                fromAmino(object: _82.QueryDepositResponseAmino): _82.QueryDepositResponse;
                toAmino(message: _82.QueryDepositResponse): _82.QueryDepositResponseAmino;
                fromAminoMsg(object: _82.QueryDepositResponseAminoMsg): _82.QueryDepositResponse;
                toAminoMsg(message: _82.QueryDepositResponse): _82.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _82.QueryDepositResponseProtoMsg): _82.QueryDepositResponse;
                toProto(message: _82.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _82.QueryDepositResponse): _82.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _82.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDepositsRequest;
                fromPartial(object: Partial<_82.QueryDepositsRequest>): _82.QueryDepositsRequest;
                fromAmino(object: _82.QueryDepositsRequestAmino): _82.QueryDepositsRequest;
                toAmino(message: _82.QueryDepositsRequest): _82.QueryDepositsRequestAmino;
                fromAminoMsg(object: _82.QueryDepositsRequestAminoMsg): _82.QueryDepositsRequest;
                toAminoMsg(message: _82.QueryDepositsRequest): _82.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryDepositsRequestProtoMsg): _82.QueryDepositsRequest;
                toProto(message: _82.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryDepositsRequest): _82.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _82.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDepositsResponse;
                fromPartial(object: Partial<_82.QueryDepositsResponse>): _82.QueryDepositsResponse;
                fromAmino(object: _82.QueryDepositsResponseAmino): _82.QueryDepositsResponse;
                toAmino(message: _82.QueryDepositsResponse): _82.QueryDepositsResponseAmino;
                fromAminoMsg(object: _82.QueryDepositsResponseAminoMsg): _82.QueryDepositsResponse;
                toAminoMsg(message: _82.QueryDepositsResponse): _82.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryDepositsResponseProtoMsg): _82.QueryDepositsResponse;
                toProto(message: _82.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryDepositsResponse): _82.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _82.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryTallyResultRequest;
                fromPartial(object: Partial<_82.QueryTallyResultRequest>): _82.QueryTallyResultRequest;
                fromAmino(object: _82.QueryTallyResultRequestAmino): _82.QueryTallyResultRequest;
                toAmino(message: _82.QueryTallyResultRequest): _82.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _82.QueryTallyResultRequestAminoMsg): _82.QueryTallyResultRequest;
                toAminoMsg(message: _82.QueryTallyResultRequest): _82.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _82.QueryTallyResultRequestProtoMsg): _82.QueryTallyResultRequest;
                toProto(message: _82.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _82.QueryTallyResultRequest): _82.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _82.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryTallyResultResponse;
                fromPartial(object: Partial<_82.QueryTallyResultResponse>): _82.QueryTallyResultResponse;
                fromAmino(object: _82.QueryTallyResultResponseAmino): _82.QueryTallyResultResponse;
                toAmino(message: _82.QueryTallyResultResponse): _82.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _82.QueryTallyResultResponseAminoMsg): _82.QueryTallyResultResponse;
                toAminoMsg(message: _82.QueryTallyResultResponse): _82.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _82.QueryTallyResultResponseProtoMsg): _82.QueryTallyResultResponse;
                toProto(message: _82.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _82.QueryTallyResultResponse): _82.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _81.VoteOption;
            voteOptionToJSON(object: _81.VoteOption): string;
            proposalStatusFromJSON(object: any): _81.ProposalStatus;
            proposalStatusToJSON(object: _81.ProposalStatus): string;
            VoteOption: typeof _81.VoteOption;
            VoteOptionSDKType: typeof _81.VoteOption;
            VoteOptionAmino: typeof _81.VoteOption;
            ProposalStatus: typeof _81.ProposalStatus;
            ProposalStatusSDKType: typeof _81.ProposalStatus;
            ProposalStatusAmino: typeof _81.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _81.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.WeightedVoteOption;
                fromPartial(object: Partial<_81.WeightedVoteOption>): _81.WeightedVoteOption;
                fromAmino(object: _81.WeightedVoteOptionAmino): _81.WeightedVoteOption;
                toAmino(message: _81.WeightedVoteOption): _81.WeightedVoteOptionAmino;
                fromAminoMsg(object: _81.WeightedVoteOptionAminoMsg): _81.WeightedVoteOption;
                toAminoMsg(message: _81.WeightedVoteOption): _81.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _81.WeightedVoteOptionProtoMsg): _81.WeightedVoteOption;
                toProto(message: _81.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _81.WeightedVoteOption): _81.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _81.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Deposit;
                fromPartial(object: Partial<_81.Deposit>): _81.Deposit;
                fromAmino(object: _81.DepositAmino): _81.Deposit;
                toAmino(message: _81.Deposit): _81.DepositAmino;
                fromAminoMsg(object: _81.DepositAminoMsg): _81.Deposit;
                toAminoMsg(message: _81.Deposit): _81.DepositAminoMsg;
                fromProtoMsg(message: _81.DepositProtoMsg): _81.Deposit;
                toProto(message: _81.Deposit): Uint8Array;
                toProtoMsg(message: _81.Deposit): _81.DepositProtoMsg;
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
            DepositParams: {
                typeUrl: string;
                encode(message: _81.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.DepositParams;
                fromPartial(object: Partial<_81.DepositParams>): _81.DepositParams;
                fromAmino(object: _81.DepositParamsAmino): _81.DepositParams;
                toAmino(message: _81.DepositParams): _81.DepositParamsAmino;
                fromAminoMsg(object: _81.DepositParamsAminoMsg): _81.DepositParams;
                toAminoMsg(message: _81.DepositParams): _81.DepositParamsAminoMsg;
                fromProtoMsg(message: _81.DepositParamsProtoMsg): _81.DepositParams;
                toProto(message: _81.DepositParams): Uint8Array;
                toProtoMsg(message: _81.DepositParams): _81.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _81.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.VotingParams;
                fromPartial(object: Partial<_81.VotingParams>): _81.VotingParams;
                fromAmino(object: _81.VotingParamsAmino): _81.VotingParams;
                toAmino(message: _81.VotingParams): _81.VotingParamsAmino;
                fromAminoMsg(object: _81.VotingParamsAminoMsg): _81.VotingParams;
                toAminoMsg(message: _81.VotingParams): _81.VotingParamsAminoMsg;
                fromProtoMsg(message: _81.VotingParamsProtoMsg): _81.VotingParams;
                toProto(message: _81.VotingParams): Uint8Array;
                toProtoMsg(message: _81.VotingParams): _81.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _81.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.TallyParams;
                fromPartial(object: Partial<_81.TallyParams>): _81.TallyParams;
                fromAmino(object: _81.TallyParamsAmino): _81.TallyParams;
                toAmino(message: _81.TallyParams): _81.TallyParamsAmino;
                fromAminoMsg(object: _81.TallyParamsAminoMsg): _81.TallyParams;
                toAminoMsg(message: _81.TallyParams): _81.TallyParamsAminoMsg;
                fromProtoMsg(message: _81.TallyParamsProtoMsg): _81.TallyParams;
                toProto(message: _81.TallyParams): Uint8Array;
                toProtoMsg(message: _81.TallyParams): _81.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _80.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.GenesisState;
                fromPartial(object: Partial<_80.GenesisState>): _80.GenesisState;
                fromAmino(object: _80.GenesisStateAmino): _80.GenesisState;
                toAmino(message: _80.GenesisState): _80.GenesisStateAmino;
                fromAminoMsg(object: _80.GenesisStateAminoMsg): _80.GenesisState;
                toAminoMsg(message: _80.GenesisState): _80.GenesisStateAminoMsg;
                fromProtoMsg(message: _80.GenesisStateProtoMsg): _80.GenesisState;
                toProto(message: _80.GenesisState): Uint8Array;
                toProtoMsg(message: _80.GenesisState): _80.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _86.QueryProposalRequest): Promise<_86.QueryProposalResponse>;
                proposals(request: _86.QueryProposalsRequest): Promise<_86.QueryProposalsResponse>;
                vote(request: _86.QueryVoteRequest): Promise<_86.QueryVoteResponse>;
                votes(request: _86.QueryVotesRequest): Promise<_86.QueryVotesResponse>;
                params(request: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                deposit(request: _86.QueryDepositRequest): Promise<_86.QueryDepositResponse>;
                deposits(request: _86.QueryDepositsRequest): Promise<_86.QueryDepositsResponse>;
                tallyResult(request: _86.QueryTallyResultRequest): Promise<_86.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _190.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _87.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _87.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _87.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _87.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _87.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _87.MsgSubmitProposal;
                    };
                    vote(value: _87.MsgVote): {
                        typeUrl: string;
                        value: _87.MsgVote;
                    };
                    voteWeighted(value: _87.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _87.MsgVoteWeighted;
                    };
                    deposit(value: _87.MsgDeposit): {
                        typeUrl: string;
                        value: _87.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _87.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _87.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _87.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _87.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _87.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _87.MsgSubmitProposal;
                    };
                    vote(value: _87.MsgVote): {
                        typeUrl: string;
                        value: _87.MsgVote;
                    };
                    voteWeighted(value: _87.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _87.MsgVoteWeighted;
                    };
                    deposit(value: _87.MsgDeposit): {
                        typeUrl: string;
                        value: _87.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _87.MsgSubmitProposal) => _87.MsgSubmitProposalAmino;
                    fromAmino: (object: _87.MsgSubmitProposalAmino) => _87.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _87.MsgVote) => _87.MsgVoteAmino;
                    fromAmino: (object: _87.MsgVoteAmino) => _87.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _87.MsgVoteWeighted) => _87.MsgVoteWeightedAmino;
                    fromAmino: (object: _87.MsgVoteWeightedAmino) => _87.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _87.MsgDeposit) => _87.MsgDepositAmino;
                    fromAmino: (object: _87.MsgDepositAmino) => _87.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _87.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgSubmitProposal;
                fromPartial(object: Partial<_87.MsgSubmitProposal>): _87.MsgSubmitProposal;
                fromAmino(object: _87.MsgSubmitProposalAmino): _87.MsgSubmitProposal;
                toAmino(message: _87.MsgSubmitProposal): _87.MsgSubmitProposalAmino;
                fromAminoMsg(object: _87.MsgSubmitProposalAminoMsg): _87.MsgSubmitProposal;
                toAminoMsg(message: _87.MsgSubmitProposal): _87.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _87.MsgSubmitProposalProtoMsg): _87.MsgSubmitProposal;
                toProto(message: _87.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _87.MsgSubmitProposal): _87.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _87.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_87.MsgSubmitProposalResponse>): _87.MsgSubmitProposalResponse;
                fromAmino(object: _87.MsgSubmitProposalResponseAmino): _87.MsgSubmitProposalResponse;
                toAmino(message: _87.MsgSubmitProposalResponse): _87.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _87.MsgSubmitProposalResponseAminoMsg): _87.MsgSubmitProposalResponse;
                toAminoMsg(message: _87.MsgSubmitProposalResponse): _87.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _87.MsgSubmitProposalResponseProtoMsg): _87.MsgSubmitProposalResponse;
                toProto(message: _87.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _87.MsgSubmitProposalResponse): _87.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _87.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgVote;
                fromPartial(object: Partial<_87.MsgVote>): _87.MsgVote;
                fromAmino(object: _87.MsgVoteAmino): _87.MsgVote;
                toAmino(message: _87.MsgVote): _87.MsgVoteAmino;
                fromAminoMsg(object: _87.MsgVoteAminoMsg): _87.MsgVote;
                toAminoMsg(message: _87.MsgVote): _87.MsgVoteAminoMsg;
                fromProtoMsg(message: _87.MsgVoteProtoMsg): _87.MsgVote;
                toProto(message: _87.MsgVote): Uint8Array;
                toProtoMsg(message: _87.MsgVote): _87.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _87.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgVoteResponse;
                fromPartial(_: Partial<_87.MsgVoteResponse>): _87.MsgVoteResponse;
                fromAmino(_: _87.MsgVoteResponseAmino): _87.MsgVoteResponse;
                toAmino(_: _87.MsgVoteResponse): _87.MsgVoteResponseAmino;
                fromAminoMsg(object: _87.MsgVoteResponseAminoMsg): _87.MsgVoteResponse;
                toAminoMsg(message: _87.MsgVoteResponse): _87.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _87.MsgVoteResponseProtoMsg): _87.MsgVoteResponse;
                toProto(message: _87.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _87.MsgVoteResponse): _87.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _87.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgVoteWeighted;
                fromPartial(object: Partial<_87.MsgVoteWeighted>): _87.MsgVoteWeighted;
                fromAmino(object: _87.MsgVoteWeightedAmino): _87.MsgVoteWeighted;
                toAmino(message: _87.MsgVoteWeighted): _87.MsgVoteWeightedAmino;
                fromAminoMsg(object: _87.MsgVoteWeightedAminoMsg): _87.MsgVoteWeighted;
                toAminoMsg(message: _87.MsgVoteWeighted): _87.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _87.MsgVoteWeightedProtoMsg): _87.MsgVoteWeighted;
                toProto(message: _87.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _87.MsgVoteWeighted): _87.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _87.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_87.MsgVoteWeightedResponse>): _87.MsgVoteWeightedResponse;
                fromAmino(_: _87.MsgVoteWeightedResponseAmino): _87.MsgVoteWeightedResponse;
                toAmino(_: _87.MsgVoteWeightedResponse): _87.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _87.MsgVoteWeightedResponseAminoMsg): _87.MsgVoteWeightedResponse;
                toAminoMsg(message: _87.MsgVoteWeightedResponse): _87.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _87.MsgVoteWeightedResponseProtoMsg): _87.MsgVoteWeightedResponse;
                toProto(message: _87.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _87.MsgVoteWeightedResponse): _87.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _87.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgDeposit;
                fromPartial(object: Partial<_87.MsgDeposit>): _87.MsgDeposit;
                fromAmino(object: _87.MsgDepositAmino): _87.MsgDeposit;
                toAmino(message: _87.MsgDeposit): _87.MsgDepositAmino;
                fromAminoMsg(object: _87.MsgDepositAminoMsg): _87.MsgDeposit;
                toAminoMsg(message: _87.MsgDeposit): _87.MsgDepositAminoMsg;
                fromProtoMsg(message: _87.MsgDepositProtoMsg): _87.MsgDeposit;
                toProto(message: _87.MsgDeposit): Uint8Array;
                toProtoMsg(message: _87.MsgDeposit): _87.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _87.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgDepositResponse;
                fromPartial(_: Partial<_87.MsgDepositResponse>): _87.MsgDepositResponse;
                fromAmino(_: _87.MsgDepositResponseAmino): _87.MsgDepositResponse;
                toAmino(_: _87.MsgDepositResponse): _87.MsgDepositResponseAmino;
                fromAminoMsg(object: _87.MsgDepositResponseAminoMsg): _87.MsgDepositResponse;
                toAminoMsg(message: _87.MsgDepositResponse): _87.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _87.MsgDepositResponseProtoMsg): _87.MsgDepositResponse;
                toProto(message: _87.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _87.MsgDepositResponse): _87.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _85.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _86.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryProposalRequest;
                fromPartial(object: Partial<_86.QueryProposalRequest>): _86.QueryProposalRequest;
                fromAmino(object: _86.QueryProposalRequestAmino): _86.QueryProposalRequest;
                toAmino(message: _86.QueryProposalRequest): _86.QueryProposalRequestAmino;
                fromAminoMsg(object: _86.QueryProposalRequestAminoMsg): _86.QueryProposalRequest;
                toAminoMsg(message: _86.QueryProposalRequest): _86.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _86.QueryProposalRequestProtoMsg): _86.QueryProposalRequest;
                toProto(message: _86.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _86.QueryProposalRequest): _86.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _86.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryProposalResponse;
                fromPartial(object: Partial<_86.QueryProposalResponse>): _86.QueryProposalResponse;
                fromAmino(object: _86.QueryProposalResponseAmino): _86.QueryProposalResponse;
                toAmino(message: _86.QueryProposalResponse): _86.QueryProposalResponseAmino;
                fromAminoMsg(object: _86.QueryProposalResponseAminoMsg): _86.QueryProposalResponse;
                toAminoMsg(message: _86.QueryProposalResponse): _86.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _86.QueryProposalResponseProtoMsg): _86.QueryProposalResponse;
                toProto(message: _86.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _86.QueryProposalResponse): _86.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _86.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryProposalsRequest;
                fromPartial(object: Partial<_86.QueryProposalsRequest>): _86.QueryProposalsRequest;
                fromAmino(object: _86.QueryProposalsRequestAmino): _86.QueryProposalsRequest;
                toAmino(message: _86.QueryProposalsRequest): _86.QueryProposalsRequestAmino;
                fromAminoMsg(object: _86.QueryProposalsRequestAminoMsg): _86.QueryProposalsRequest;
                toAminoMsg(message: _86.QueryProposalsRequest): _86.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryProposalsRequestProtoMsg): _86.QueryProposalsRequest;
                toProto(message: _86.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryProposalsRequest): _86.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _86.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryProposalsResponse;
                fromPartial(object: Partial<_86.QueryProposalsResponse>): _86.QueryProposalsResponse;
                fromAmino(object: _86.QueryProposalsResponseAmino): _86.QueryProposalsResponse;
                toAmino(message: _86.QueryProposalsResponse): _86.QueryProposalsResponseAmino;
                fromAminoMsg(object: _86.QueryProposalsResponseAminoMsg): _86.QueryProposalsResponse;
                toAminoMsg(message: _86.QueryProposalsResponse): _86.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryProposalsResponseProtoMsg): _86.QueryProposalsResponse;
                toProto(message: _86.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryProposalsResponse): _86.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _86.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryVoteRequest;
                fromPartial(object: Partial<_86.QueryVoteRequest>): _86.QueryVoteRequest;
                fromAmino(object: _86.QueryVoteRequestAmino): _86.QueryVoteRequest;
                toAmino(message: _86.QueryVoteRequest): _86.QueryVoteRequestAmino;
                fromAminoMsg(object: _86.QueryVoteRequestAminoMsg): _86.QueryVoteRequest;
                toAminoMsg(message: _86.QueryVoteRequest): _86.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _86.QueryVoteRequestProtoMsg): _86.QueryVoteRequest;
                toProto(message: _86.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _86.QueryVoteRequest): _86.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _86.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryVoteResponse;
                fromPartial(object: Partial<_86.QueryVoteResponse>): _86.QueryVoteResponse;
                fromAmino(object: _86.QueryVoteResponseAmino): _86.QueryVoteResponse;
                toAmino(message: _86.QueryVoteResponse): _86.QueryVoteResponseAmino;
                fromAminoMsg(object: _86.QueryVoteResponseAminoMsg): _86.QueryVoteResponse;
                toAminoMsg(message: _86.QueryVoteResponse): _86.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _86.QueryVoteResponseProtoMsg): _86.QueryVoteResponse;
                toProto(message: _86.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _86.QueryVoteResponse): _86.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _86.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryVotesRequest;
                fromPartial(object: Partial<_86.QueryVotesRequest>): _86.QueryVotesRequest;
                fromAmino(object: _86.QueryVotesRequestAmino): _86.QueryVotesRequest;
                toAmino(message: _86.QueryVotesRequest): _86.QueryVotesRequestAmino;
                fromAminoMsg(object: _86.QueryVotesRequestAminoMsg): _86.QueryVotesRequest;
                toAminoMsg(message: _86.QueryVotesRequest): _86.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _86.QueryVotesRequestProtoMsg): _86.QueryVotesRequest;
                toProto(message: _86.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _86.QueryVotesRequest): _86.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _86.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryVotesResponse;
                fromPartial(object: Partial<_86.QueryVotesResponse>): _86.QueryVotesResponse;
                fromAmino(object: _86.QueryVotesResponseAmino): _86.QueryVotesResponse;
                toAmino(message: _86.QueryVotesResponse): _86.QueryVotesResponseAmino;
                fromAminoMsg(object: _86.QueryVotesResponseAminoMsg): _86.QueryVotesResponse;
                toAminoMsg(message: _86.QueryVotesResponse): _86.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _86.QueryVotesResponseProtoMsg): _86.QueryVotesResponse;
                toProto(message: _86.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _86.QueryVotesResponse): _86.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _86.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryParamsRequest;
                fromPartial(object: Partial<_86.QueryParamsRequest>): _86.QueryParamsRequest;
                fromAmino(object: _86.QueryParamsRequestAmino): _86.QueryParamsRequest;
                toAmino(message: _86.QueryParamsRequest): _86.QueryParamsRequestAmino;
                fromAminoMsg(object: _86.QueryParamsRequestAminoMsg): _86.QueryParamsRequest;
                toAminoMsg(message: _86.QueryParamsRequest): _86.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryParamsRequestProtoMsg): _86.QueryParamsRequest;
                toProto(message: _86.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryParamsRequest): _86.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _86.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryParamsResponse;
                fromPartial(object: Partial<_86.QueryParamsResponse>): _86.QueryParamsResponse;
                fromAmino(object: _86.QueryParamsResponseAmino): _86.QueryParamsResponse;
                toAmino(message: _86.QueryParamsResponse): _86.QueryParamsResponseAmino;
                fromAminoMsg(object: _86.QueryParamsResponseAminoMsg): _86.QueryParamsResponse;
                toAminoMsg(message: _86.QueryParamsResponse): _86.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryParamsResponseProtoMsg): _86.QueryParamsResponse;
                toProto(message: _86.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryParamsResponse): _86.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _86.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDepositRequest;
                fromPartial(object: Partial<_86.QueryDepositRequest>): _86.QueryDepositRequest;
                fromAmino(object: _86.QueryDepositRequestAmino): _86.QueryDepositRequest;
                toAmino(message: _86.QueryDepositRequest): _86.QueryDepositRequestAmino;
                fromAminoMsg(object: _86.QueryDepositRequestAminoMsg): _86.QueryDepositRequest;
                toAminoMsg(message: _86.QueryDepositRequest): _86.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDepositRequestProtoMsg): _86.QueryDepositRequest;
                toProto(message: _86.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDepositRequest): _86.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _86.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDepositResponse;
                fromPartial(object: Partial<_86.QueryDepositResponse>): _86.QueryDepositResponse;
                fromAmino(object: _86.QueryDepositResponseAmino): _86.QueryDepositResponse;
                toAmino(message: _86.QueryDepositResponse): _86.QueryDepositResponseAmino;
                fromAminoMsg(object: _86.QueryDepositResponseAminoMsg): _86.QueryDepositResponse;
                toAminoMsg(message: _86.QueryDepositResponse): _86.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDepositResponseProtoMsg): _86.QueryDepositResponse;
                toProto(message: _86.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDepositResponse): _86.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _86.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDepositsRequest;
                fromPartial(object: Partial<_86.QueryDepositsRequest>): _86.QueryDepositsRequest;
                fromAmino(object: _86.QueryDepositsRequestAmino): _86.QueryDepositsRequest;
                toAmino(message: _86.QueryDepositsRequest): _86.QueryDepositsRequestAmino;
                fromAminoMsg(object: _86.QueryDepositsRequestAminoMsg): _86.QueryDepositsRequest;
                toAminoMsg(message: _86.QueryDepositsRequest): _86.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDepositsRequestProtoMsg): _86.QueryDepositsRequest;
                toProto(message: _86.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDepositsRequest): _86.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _86.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDepositsResponse;
                fromPartial(object: Partial<_86.QueryDepositsResponse>): _86.QueryDepositsResponse;
                fromAmino(object: _86.QueryDepositsResponseAmino): _86.QueryDepositsResponse;
                toAmino(message: _86.QueryDepositsResponse): _86.QueryDepositsResponseAmino;
                fromAminoMsg(object: _86.QueryDepositsResponseAminoMsg): _86.QueryDepositsResponse;
                toAminoMsg(message: _86.QueryDepositsResponse): _86.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDepositsResponseProtoMsg): _86.QueryDepositsResponse;
                toProto(message: _86.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDepositsResponse): _86.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _86.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryTallyResultRequest;
                fromPartial(object: Partial<_86.QueryTallyResultRequest>): _86.QueryTallyResultRequest;
                fromAmino(object: _86.QueryTallyResultRequestAmino): _86.QueryTallyResultRequest;
                toAmino(message: _86.QueryTallyResultRequest): _86.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _86.QueryTallyResultRequestAminoMsg): _86.QueryTallyResultRequest;
                toAminoMsg(message: _86.QueryTallyResultRequest): _86.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _86.QueryTallyResultRequestProtoMsg): _86.QueryTallyResultRequest;
                toProto(message: _86.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _86.QueryTallyResultRequest): _86.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _86.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryTallyResultResponse;
                fromPartial(object: Partial<_86.QueryTallyResultResponse>): _86.QueryTallyResultResponse;
                fromAmino(object: _86.QueryTallyResultResponseAmino): _86.QueryTallyResultResponse;
                toAmino(message: _86.QueryTallyResultResponse): _86.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _86.QueryTallyResultResponseAminoMsg): _86.QueryTallyResultResponse;
                toAminoMsg(message: _86.QueryTallyResultResponse): _86.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _86.QueryTallyResultResponseProtoMsg): _86.QueryTallyResultResponse;
                toProto(message: _86.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _86.QueryTallyResultResponse): _86.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _85.VoteOption;
            voteOptionToJSON(object: _85.VoteOption): string;
            proposalStatusFromJSON(object: any): _85.ProposalStatus;
            proposalStatusToJSON(object: _85.ProposalStatus): string;
            VoteOption: typeof _85.VoteOption;
            VoteOptionSDKType: typeof _85.VoteOption;
            VoteOptionAmino: typeof _85.VoteOption;
            ProposalStatus: typeof _85.ProposalStatus;
            ProposalStatusSDKType: typeof _85.ProposalStatus;
            ProposalStatusAmino: typeof _85.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _85.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.WeightedVoteOption;
                fromPartial(object: Partial<_85.WeightedVoteOption>): _85.WeightedVoteOption;
                fromAmino(object: _85.WeightedVoteOptionAmino): _85.WeightedVoteOption;
                toAmino(message: _85.WeightedVoteOption): _85.WeightedVoteOptionAmino;
                fromAminoMsg(object: _85.WeightedVoteOptionAminoMsg): _85.WeightedVoteOption;
                toAminoMsg(message: _85.WeightedVoteOption): _85.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _85.WeightedVoteOptionProtoMsg): _85.WeightedVoteOption;
                toProto(message: _85.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _85.WeightedVoteOption): _85.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _85.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.TextProposal;
                fromPartial(object: Partial<_85.TextProposal>): _85.TextProposal;
                fromAmino(object: _85.TextProposalAmino): _85.TextProposal;
                toAmino(message: _85.TextProposal): _85.TextProposalAmino;
                fromAminoMsg(object: _85.TextProposalAminoMsg): _85.TextProposal;
                toAminoMsg(message: _85.TextProposal): _85.TextProposalAminoMsg;
                fromProtoMsg(message: _85.TextProposalProtoMsg): _85.TextProposal;
                toProto(message: _85.TextProposal): Uint8Array;
                toProtoMsg(message: _85.TextProposal): _85.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _85.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Deposit;
                fromPartial(object: Partial<_85.Deposit>): _85.Deposit;
                fromAmino(object: _85.DepositAmino): _85.Deposit;
                toAmino(message: _85.Deposit): _85.DepositAmino;
                fromAminoMsg(object: _85.DepositAminoMsg): _85.Deposit;
                toAminoMsg(message: _85.Deposit): _85.DepositAminoMsg;
                fromProtoMsg(message: _85.DepositProtoMsg): _85.Deposit;
                toProto(message: _85.Deposit): Uint8Array;
                toProtoMsg(message: _85.Deposit): _85.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _85.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Proposal;
                fromPartial(object: Partial<_85.Proposal>): _85.Proposal;
                fromAmino(object: _85.ProposalAmino): _85.Proposal;
                toAmino(message: _85.Proposal): _85.ProposalAmino;
                fromAminoMsg(object: _85.ProposalAminoMsg): _85.Proposal;
                toAminoMsg(message: _85.Proposal): _85.ProposalAminoMsg;
                fromProtoMsg(message: _85.ProposalProtoMsg): _85.Proposal;
                toProto(message: _85.Proposal): Uint8Array;
                toProtoMsg(message: _85.Proposal): _85.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _85.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.TallyResult;
                fromPartial(object: Partial<_85.TallyResult>): _85.TallyResult;
                fromAmino(object: _85.TallyResultAmino): _85.TallyResult;
                toAmino(message: _85.TallyResult): _85.TallyResultAmino;
                fromAminoMsg(object: _85.TallyResultAminoMsg): _85.TallyResult;
                toAminoMsg(message: _85.TallyResult): _85.TallyResultAminoMsg;
                fromProtoMsg(message: _85.TallyResultProtoMsg): _85.TallyResult;
                toProto(message: _85.TallyResult): Uint8Array;
                toProtoMsg(message: _85.TallyResult): _85.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _85.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Vote;
                fromPartial(object: Partial<_85.Vote>): _85.Vote;
                fromAmino(object: _85.VoteAmino): _85.Vote;
                toAmino(message: _85.Vote): _85.VoteAmino;
                fromAminoMsg(object: _85.VoteAminoMsg): _85.Vote;
                toAminoMsg(message: _85.Vote): _85.VoteAminoMsg;
                fromProtoMsg(message: _85.VoteProtoMsg): _85.Vote;
                toProto(message: _85.Vote): Uint8Array;
                toProtoMsg(message: _85.Vote): _85.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _85.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.DepositParams;
                fromPartial(object: Partial<_85.DepositParams>): _85.DepositParams;
                fromAmino(object: _85.DepositParamsAmino): _85.DepositParams;
                toAmino(message: _85.DepositParams): _85.DepositParamsAmino;
                fromAminoMsg(object: _85.DepositParamsAminoMsg): _85.DepositParams;
                toAminoMsg(message: _85.DepositParams): _85.DepositParamsAminoMsg;
                fromProtoMsg(message: _85.DepositParamsProtoMsg): _85.DepositParams;
                toProto(message: _85.DepositParams): Uint8Array;
                toProtoMsg(message: _85.DepositParams): _85.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _85.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.VotingParams;
                fromPartial(object: Partial<_85.VotingParams>): _85.VotingParams;
                fromAmino(object: _85.VotingParamsAmino): _85.VotingParams;
                toAmino(message: _85.VotingParams): _85.VotingParamsAmino;
                fromAminoMsg(object: _85.VotingParamsAminoMsg): _85.VotingParams;
                toAminoMsg(message: _85.VotingParams): _85.VotingParamsAminoMsg;
                fromProtoMsg(message: _85.VotingParamsProtoMsg): _85.VotingParams;
                toProto(message: _85.VotingParams): Uint8Array;
                toProtoMsg(message: _85.VotingParams): _85.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _85.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.TallyParams;
                fromPartial(object: Partial<_85.TallyParams>): _85.TallyParams;
                fromAmino(object: _85.TallyParamsAmino): _85.TallyParams;
                toAmino(message: _85.TallyParams): _85.TallyParamsAmino;
                fromAminoMsg(object: _85.TallyParamsAminoMsg): _85.TallyParams;
                toAminoMsg(message: _85.TallyParams): _85.TallyParamsAminoMsg;
                fromProtoMsg(message: _85.TallyParamsProtoMsg): _85.TallyParams;
                toProto(message: _85.TallyParams): Uint8Array;
                toProtoMsg(message: _85.TallyParams): _85.TallyParamsProtoMsg;
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
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                groupInfo(request: _90.QueryGroupInfoRequest): Promise<_90.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _90.QueryGroupPolicyInfoRequest): Promise<_90.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _90.QueryGroupMembersRequest): Promise<_90.QueryGroupMembersResponse>;
                groupsByAdmin(request: _90.QueryGroupsByAdminRequest): Promise<_90.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _90.QueryGroupPoliciesByGroupRequest): Promise<_90.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _90.QueryGroupPoliciesByAdminRequest): Promise<_90.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _90.QueryProposalRequest): Promise<_90.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _90.QueryProposalsByGroupPolicyRequest): Promise<_90.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _90.QueryVoteByProposalVoterRequest): Promise<_90.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _90.QueryVotesByProposalRequest): Promise<_90.QueryVotesByProposalResponse>;
                votesByVoter(request: _90.QueryVotesByVoterRequest): Promise<_90.QueryVotesByVoterResponse>;
                groupsByMember(request: _90.QueryGroupsByMemberRequest): Promise<_90.QueryGroupsByMemberResponse>;
                tallyResult(request: _90.QueryTallyResultRequest): Promise<_90.QueryTallyResultResponse>;
                groups(request?: _90.QueryGroupsRequest): Promise<_90.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _91.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _91.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _91.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _91.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _91.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _91.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _91.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _91.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _91.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _91.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _91.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _91.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _91.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _91.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _91.MsgCreateGroup): {
                        typeUrl: string;
                        value: _91.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _91.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _91.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _91.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _91.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _91.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _91.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _91.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _91.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _91.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _91.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _91.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _91.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _91.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _91.MsgWithdrawProposal;
                    };
                    vote(value: _91.MsgVote): {
                        typeUrl: string;
                        value: _91.MsgVote;
                    };
                    exec(value: _91.MsgExec): {
                        typeUrl: string;
                        value: _91.MsgExec;
                    };
                    leaveGroup(value: _91.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _91.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _91.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _91.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _91.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _91.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _91.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _91.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _91.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _91.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _91.MsgCreateGroup): {
                        typeUrl: string;
                        value: _91.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _91.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _91.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _91.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _91.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _91.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _91.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _91.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _91.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _91.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _91.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _91.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _91.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _91.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _91.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _91.MsgWithdrawProposal;
                    };
                    vote(value: _91.MsgVote): {
                        typeUrl: string;
                        value: _91.MsgVote;
                    };
                    exec(value: _91.MsgExec): {
                        typeUrl: string;
                        value: _91.MsgExec;
                    };
                    leaveGroup(value: _91.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _91.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _91.MsgCreateGroup) => _91.MsgCreateGroupAmino;
                    fromAmino: (object: _91.MsgCreateGroupAmino) => _91.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateGroupMembers) => _91.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _91.MsgUpdateGroupMembersAmino) => _91.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateGroupAdmin) => _91.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _91.MsgUpdateGroupAdminAmino) => _91.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateGroupMetadata) => _91.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _91.MsgUpdateGroupMetadataAmino) => _91.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _91.MsgCreateGroupPolicy) => _91.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _91.MsgCreateGroupPolicyAmino) => _91.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _91.MsgCreateGroupWithPolicy) => _91.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _91.MsgCreateGroupWithPolicyAmino) => _91.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateGroupPolicyAdmin) => _91.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _91.MsgUpdateGroupPolicyAdminAmino) => _91.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateGroupPolicyDecisionPolicy) => _91.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _91.MsgUpdateGroupPolicyDecisionPolicyAmino) => _91.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateGroupPolicyMetadata) => _91.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _91.MsgUpdateGroupPolicyMetadataAmino) => _91.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _91.MsgSubmitProposal) => _91.MsgSubmitProposalAmino;
                    fromAmino: (object: _91.MsgSubmitProposalAmino) => _91.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _91.MsgWithdrawProposal) => _91.MsgWithdrawProposalAmino;
                    fromAmino: (object: _91.MsgWithdrawProposalAmino) => _91.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _91.MsgVote) => _91.MsgVoteAmino;
                    fromAmino: (object: _91.MsgVoteAmino) => _91.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _91.MsgExec) => _91.MsgExecAmino;
                    fromAmino: (object: _91.MsgExecAmino) => _91.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _91.MsgLeaveGroup) => _91.MsgLeaveGroupAmino;
                    fromAmino: (object: _91.MsgLeaveGroupAmino) => _91.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _92.VoteOption;
            voteOptionToJSON(object: _92.VoteOption): string;
            proposalStatusFromJSON(object: any): _92.ProposalStatus;
            proposalStatusToJSON(object: _92.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _92.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _92.ProposalExecutorResult): string;
            VoteOption: typeof _92.VoteOption;
            VoteOptionSDKType: typeof _92.VoteOption;
            VoteOptionAmino: typeof _92.VoteOption;
            ProposalStatus: typeof _92.ProposalStatus;
            ProposalStatusSDKType: typeof _92.ProposalStatus;
            ProposalStatusAmino: typeof _92.ProposalStatus;
            ProposalExecutorResult: typeof _92.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _92.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _92.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _92.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Member;
                fromPartial(object: Partial<_92.Member>): _92.Member;
                fromAmino(object: _92.MemberAmino): _92.Member;
                toAmino(message: _92.Member): _92.MemberAmino;
                fromAminoMsg(object: _92.MemberAminoMsg): _92.Member;
                toAminoMsg(message: _92.Member): _92.MemberAminoMsg;
                fromProtoMsg(message: _92.MemberProtoMsg): _92.Member;
                toProto(message: _92.Member): Uint8Array;
                toProtoMsg(message: _92.Member): _92.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _92.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MemberRequest;
                fromPartial(object: Partial<_92.MemberRequest>): _92.MemberRequest;
                fromAmino(object: _92.MemberRequestAmino): _92.MemberRequest;
                toAmino(message: _92.MemberRequest): _92.MemberRequestAmino;
                fromAminoMsg(object: _92.MemberRequestAminoMsg): _92.MemberRequest;
                toAminoMsg(message: _92.MemberRequest): _92.MemberRequestAminoMsg;
                fromProtoMsg(message: _92.MemberRequestProtoMsg): _92.MemberRequest;
                toProto(message: _92.MemberRequest): Uint8Array;
                toProtoMsg(message: _92.MemberRequest): _92.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _92.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_92.ThresholdDecisionPolicy>): _92.ThresholdDecisionPolicy;
                fromAmino(object: _92.ThresholdDecisionPolicyAmino): _92.ThresholdDecisionPolicy;
                toAmino(message: _92.ThresholdDecisionPolicy): _92.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _92.ThresholdDecisionPolicyAminoMsg): _92.ThresholdDecisionPolicy;
                toAminoMsg(message: _92.ThresholdDecisionPolicy): _92.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _92.ThresholdDecisionPolicyProtoMsg): _92.ThresholdDecisionPolicy;
                toProto(message: _92.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _92.ThresholdDecisionPolicy): _92.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _92.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.PercentageDecisionPolicy;
                fromPartial(object: Partial<_92.PercentageDecisionPolicy>): _92.PercentageDecisionPolicy;
                fromAmino(object: _92.PercentageDecisionPolicyAmino): _92.PercentageDecisionPolicy;
                toAmino(message: _92.PercentageDecisionPolicy): _92.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _92.PercentageDecisionPolicyAminoMsg): _92.PercentageDecisionPolicy;
                toAminoMsg(message: _92.PercentageDecisionPolicy): _92.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _92.PercentageDecisionPolicyProtoMsg): _92.PercentageDecisionPolicy;
                toProto(message: _92.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _92.PercentageDecisionPolicy): _92.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _92.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.DecisionPolicyWindows;
                fromPartial(object: Partial<_92.DecisionPolicyWindows>): _92.DecisionPolicyWindows;
                fromAmino(object: _92.DecisionPolicyWindowsAmino): _92.DecisionPolicyWindows;
                toAmino(message: _92.DecisionPolicyWindows): _92.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _92.DecisionPolicyWindowsAminoMsg): _92.DecisionPolicyWindows;
                toAminoMsg(message: _92.DecisionPolicyWindows): _92.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _92.DecisionPolicyWindowsProtoMsg): _92.DecisionPolicyWindows;
                toProto(message: _92.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _92.DecisionPolicyWindows): _92.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _92.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.GroupInfo;
                fromPartial(object: Partial<_92.GroupInfo>): _92.GroupInfo;
                fromAmino(object: _92.GroupInfoAmino): _92.GroupInfo;
                toAmino(message: _92.GroupInfo): _92.GroupInfoAmino;
                fromAminoMsg(object: _92.GroupInfoAminoMsg): _92.GroupInfo;
                toAminoMsg(message: _92.GroupInfo): _92.GroupInfoAminoMsg;
                fromProtoMsg(message: _92.GroupInfoProtoMsg): _92.GroupInfo;
                toProto(message: _92.GroupInfo): Uint8Array;
                toProtoMsg(message: _92.GroupInfo): _92.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _92.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.GroupMember;
                fromPartial(object: Partial<_92.GroupMember>): _92.GroupMember;
                fromAmino(object: _92.GroupMemberAmino): _92.GroupMember;
                toAmino(message: _92.GroupMember): _92.GroupMemberAmino;
                fromAminoMsg(object: _92.GroupMemberAminoMsg): _92.GroupMember;
                toAminoMsg(message: _92.GroupMember): _92.GroupMemberAminoMsg;
                fromProtoMsg(message: _92.GroupMemberProtoMsg): _92.GroupMember;
                toProto(message: _92.GroupMember): Uint8Array;
                toProtoMsg(message: _92.GroupMember): _92.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _92.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.GroupPolicyInfo;
                fromPartial(object: Partial<_92.GroupPolicyInfo>): _92.GroupPolicyInfo;
                fromAmino(object: _92.GroupPolicyInfoAmino): _92.GroupPolicyInfo;
                toAmino(message: _92.GroupPolicyInfo): _92.GroupPolicyInfoAmino;
                fromAminoMsg(object: _92.GroupPolicyInfoAminoMsg): _92.GroupPolicyInfo;
                toAminoMsg(message: _92.GroupPolicyInfo): _92.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _92.GroupPolicyInfoProtoMsg): _92.GroupPolicyInfo;
                toProto(message: _92.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _92.GroupPolicyInfo): _92.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _92.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Proposal;
                fromPartial(object: Partial<_92.Proposal>): _92.Proposal;
                fromAmino(object: _92.ProposalAmino): _92.Proposal;
                toAmino(message: _92.Proposal): _92.ProposalAmino;
                fromAminoMsg(object: _92.ProposalAminoMsg): _92.Proposal;
                toAminoMsg(message: _92.Proposal): _92.ProposalAminoMsg;
                fromProtoMsg(message: _92.ProposalProtoMsg): _92.Proposal;
                toProto(message: _92.Proposal): Uint8Array;
                toProtoMsg(message: _92.Proposal): _92.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _92.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.TallyResult;
                fromPartial(object: Partial<_92.TallyResult>): _92.TallyResult;
                fromAmino(object: _92.TallyResultAmino): _92.TallyResult;
                toAmino(message: _92.TallyResult): _92.TallyResultAmino;
                fromAminoMsg(object: _92.TallyResultAminoMsg): _92.TallyResult;
                toAminoMsg(message: _92.TallyResult): _92.TallyResultAminoMsg;
                fromProtoMsg(message: _92.TallyResultProtoMsg): _92.TallyResult;
                toProto(message: _92.TallyResult): Uint8Array;
                toProtoMsg(message: _92.TallyResult): _92.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _92.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Vote;
                fromPartial(object: Partial<_92.Vote>): _92.Vote;
                fromAmino(object: _92.VoteAmino): _92.Vote;
                toAmino(message: _92.Vote): _92.VoteAmino;
                fromAminoMsg(object: _92.VoteAminoMsg): _92.Vote;
                toAminoMsg(message: _92.Vote): _92.VoteAminoMsg;
                fromProtoMsg(message: _92.VoteProtoMsg): _92.Vote;
                toProto(message: _92.Vote): Uint8Array;
                toProtoMsg(message: _92.Vote): _92.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _91.Exec;
            execToJSON(object: _91.Exec): string;
            Exec: typeof _91.Exec;
            ExecSDKType: typeof _91.Exec;
            ExecAmino: typeof _91.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _91.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgCreateGroup;
                fromPartial(object: Partial<_91.MsgCreateGroup>): _91.MsgCreateGroup;
                fromAmino(object: _91.MsgCreateGroupAmino): _91.MsgCreateGroup;
                toAmino(message: _91.MsgCreateGroup): _91.MsgCreateGroupAmino;
                fromAminoMsg(object: _91.MsgCreateGroupAminoMsg): _91.MsgCreateGroup;
                toAminoMsg(message: _91.MsgCreateGroup): _91.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _91.MsgCreateGroupProtoMsg): _91.MsgCreateGroup;
                toProto(message: _91.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _91.MsgCreateGroup): _91.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _91.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgCreateGroupResponse;
                fromPartial(object: Partial<_91.MsgCreateGroupResponse>): _91.MsgCreateGroupResponse;
                fromAmino(object: _91.MsgCreateGroupResponseAmino): _91.MsgCreateGroupResponse;
                toAmino(message: _91.MsgCreateGroupResponse): _91.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _91.MsgCreateGroupResponseAminoMsg): _91.MsgCreateGroupResponse;
                toAminoMsg(message: _91.MsgCreateGroupResponse): _91.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _91.MsgCreateGroupResponseProtoMsg): _91.MsgCreateGroupResponse;
                toProto(message: _91.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _91.MsgCreateGroupResponse): _91.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _91.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_91.MsgUpdateGroupMembers>): _91.MsgUpdateGroupMembers;
                fromAmino(object: _91.MsgUpdateGroupMembersAmino): _91.MsgUpdateGroupMembers;
                toAmino(message: _91.MsgUpdateGroupMembers): _91.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupMembersAminoMsg): _91.MsgUpdateGroupMembers;
                toAminoMsg(message: _91.MsgUpdateGroupMembers): _91.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupMembersProtoMsg): _91.MsgUpdateGroupMembers;
                toProto(message: _91.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupMembers): _91.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _91.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_91.MsgUpdateGroupMembersResponse>): _91.MsgUpdateGroupMembersResponse;
                fromAmino(_: _91.MsgUpdateGroupMembersResponseAmino): _91.MsgUpdateGroupMembersResponse;
                toAmino(_: _91.MsgUpdateGroupMembersResponse): _91.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupMembersResponseAminoMsg): _91.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _91.MsgUpdateGroupMembersResponse): _91.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupMembersResponseProtoMsg): _91.MsgUpdateGroupMembersResponse;
                toProto(message: _91.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupMembersResponse): _91.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _91.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_91.MsgUpdateGroupAdmin>): _91.MsgUpdateGroupAdmin;
                fromAmino(object: _91.MsgUpdateGroupAdminAmino): _91.MsgUpdateGroupAdmin;
                toAmino(message: _91.MsgUpdateGroupAdmin): _91.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupAdminAminoMsg): _91.MsgUpdateGroupAdmin;
                toAminoMsg(message: _91.MsgUpdateGroupAdmin): _91.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupAdminProtoMsg): _91.MsgUpdateGroupAdmin;
                toProto(message: _91.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupAdmin): _91.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _91.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_91.MsgUpdateGroupAdminResponse>): _91.MsgUpdateGroupAdminResponse;
                fromAmino(_: _91.MsgUpdateGroupAdminResponseAmino): _91.MsgUpdateGroupAdminResponse;
                toAmino(_: _91.MsgUpdateGroupAdminResponse): _91.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupAdminResponseAminoMsg): _91.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _91.MsgUpdateGroupAdminResponse): _91.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupAdminResponseProtoMsg): _91.MsgUpdateGroupAdminResponse;
                toProto(message: _91.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupAdminResponse): _91.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _91.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_91.MsgUpdateGroupMetadata>): _91.MsgUpdateGroupMetadata;
                fromAmino(object: _91.MsgUpdateGroupMetadataAmino): _91.MsgUpdateGroupMetadata;
                toAmino(message: _91.MsgUpdateGroupMetadata): _91.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupMetadataAminoMsg): _91.MsgUpdateGroupMetadata;
                toAminoMsg(message: _91.MsgUpdateGroupMetadata): _91.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupMetadataProtoMsg): _91.MsgUpdateGroupMetadata;
                toProto(message: _91.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupMetadata): _91.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _91.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_91.MsgUpdateGroupMetadataResponse>): _91.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _91.MsgUpdateGroupMetadataResponseAmino): _91.MsgUpdateGroupMetadataResponse;
                toAmino(_: _91.MsgUpdateGroupMetadataResponse): _91.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupMetadataResponseAminoMsg): _91.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _91.MsgUpdateGroupMetadataResponse): _91.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupMetadataResponseProtoMsg): _91.MsgUpdateGroupMetadataResponse;
                toProto(message: _91.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupMetadataResponse): _91.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _91.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_91.MsgCreateGroupPolicy>): _91.MsgCreateGroupPolicy;
                fromAmino(object: _91.MsgCreateGroupPolicyAmino): _91.MsgCreateGroupPolicy;
                toAmino(message: _91.MsgCreateGroupPolicy): _91.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _91.MsgCreateGroupPolicyAminoMsg): _91.MsgCreateGroupPolicy;
                toAminoMsg(message: _91.MsgCreateGroupPolicy): _91.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _91.MsgCreateGroupPolicyProtoMsg): _91.MsgCreateGroupPolicy;
                toProto(message: _91.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _91.MsgCreateGroupPolicy): _91.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _91.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_91.MsgCreateGroupPolicyResponse>): _91.MsgCreateGroupPolicyResponse;
                fromAmino(object: _91.MsgCreateGroupPolicyResponseAmino): _91.MsgCreateGroupPolicyResponse;
                toAmino(message: _91.MsgCreateGroupPolicyResponse): _91.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _91.MsgCreateGroupPolicyResponseAminoMsg): _91.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _91.MsgCreateGroupPolicyResponse): _91.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _91.MsgCreateGroupPolicyResponseProtoMsg): _91.MsgCreateGroupPolicyResponse;
                toProto(message: _91.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _91.MsgCreateGroupPolicyResponse): _91.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _91.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_91.MsgUpdateGroupPolicyAdmin>): _91.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _91.MsgUpdateGroupPolicyAdminAmino): _91.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _91.MsgUpdateGroupPolicyAdmin): _91.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupPolicyAdminAminoMsg): _91.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _91.MsgUpdateGroupPolicyAdmin): _91.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupPolicyAdminProtoMsg): _91.MsgUpdateGroupPolicyAdmin;
                toProto(message: _91.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupPolicyAdmin): _91.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _91.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_91.MsgCreateGroupWithPolicy>): _91.MsgCreateGroupWithPolicy;
                fromAmino(object: _91.MsgCreateGroupWithPolicyAmino): _91.MsgCreateGroupWithPolicy;
                toAmino(message: _91.MsgCreateGroupWithPolicy): _91.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _91.MsgCreateGroupWithPolicyAminoMsg): _91.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _91.MsgCreateGroupWithPolicy): _91.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _91.MsgCreateGroupWithPolicyProtoMsg): _91.MsgCreateGroupWithPolicy;
                toProto(message: _91.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _91.MsgCreateGroupWithPolicy): _91.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _91.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_91.MsgCreateGroupWithPolicyResponse>): _91.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _91.MsgCreateGroupWithPolicyResponseAmino): _91.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _91.MsgCreateGroupWithPolicyResponse): _91.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _91.MsgCreateGroupWithPolicyResponseAminoMsg): _91.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _91.MsgCreateGroupWithPolicyResponse): _91.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _91.MsgCreateGroupWithPolicyResponseProtoMsg): _91.MsgCreateGroupWithPolicyResponse;
                toProto(message: _91.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _91.MsgCreateGroupWithPolicyResponse): _91.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _91.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_91.MsgUpdateGroupPolicyAdminResponse>): _91.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _91.MsgUpdateGroupPolicyAdminResponseAmino): _91.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _91.MsgUpdateGroupPolicyAdminResponse): _91.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupPolicyAdminResponseAminoMsg): _91.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _91.MsgUpdateGroupPolicyAdminResponse): _91.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupPolicyAdminResponseProtoMsg): _91.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _91.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupPolicyAdminResponse): _91.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _91.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_91.MsgUpdateGroupPolicyDecisionPolicy>): _91.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _91.MsgUpdateGroupPolicyDecisionPolicyAmino): _91.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _91.MsgUpdateGroupPolicyDecisionPolicy): _91.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _91.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _91.MsgUpdateGroupPolicyDecisionPolicy): _91.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _91.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _91.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupPolicyDecisionPolicy): _91.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _91.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_91.MsgUpdateGroupPolicyDecisionPolicyResponse>): _91.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _91.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _91.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _91.MsgUpdateGroupPolicyDecisionPolicyResponse): _91.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _91.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _91.MsgUpdateGroupPolicyDecisionPolicyResponse): _91.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _91.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _91.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupPolicyDecisionPolicyResponse): _91.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _91.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_91.MsgUpdateGroupPolicyMetadata>): _91.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _91.MsgUpdateGroupPolicyMetadataAmino): _91.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _91.MsgUpdateGroupPolicyMetadata): _91.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupPolicyMetadataAminoMsg): _91.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _91.MsgUpdateGroupPolicyMetadata): _91.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupPolicyMetadataProtoMsg): _91.MsgUpdateGroupPolicyMetadata;
                toProto(message: _91.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupPolicyMetadata): _91.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _91.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_91.MsgUpdateGroupPolicyMetadataResponse>): _91.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _91.MsgUpdateGroupPolicyMetadataResponseAmino): _91.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _91.MsgUpdateGroupPolicyMetadataResponse): _91.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _91.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _91.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _91.MsgUpdateGroupPolicyMetadataResponse): _91.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _91.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _91.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateGroupPolicyMetadataResponse): _91.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _91.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgSubmitProposal;
                fromPartial(object: Partial<_91.MsgSubmitProposal>): _91.MsgSubmitProposal;
                fromAmino(object: _91.MsgSubmitProposalAmino): _91.MsgSubmitProposal;
                toAmino(message: _91.MsgSubmitProposal): _91.MsgSubmitProposalAmino;
                fromAminoMsg(object: _91.MsgSubmitProposalAminoMsg): _91.MsgSubmitProposal;
                toAminoMsg(message: _91.MsgSubmitProposal): _91.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _91.MsgSubmitProposalProtoMsg): _91.MsgSubmitProposal;
                toProto(message: _91.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _91.MsgSubmitProposal): _91.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _91.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_91.MsgSubmitProposalResponse>): _91.MsgSubmitProposalResponse;
                fromAmino(object: _91.MsgSubmitProposalResponseAmino): _91.MsgSubmitProposalResponse;
                toAmino(message: _91.MsgSubmitProposalResponse): _91.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _91.MsgSubmitProposalResponseAminoMsg): _91.MsgSubmitProposalResponse;
                toAminoMsg(message: _91.MsgSubmitProposalResponse): _91.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _91.MsgSubmitProposalResponseProtoMsg): _91.MsgSubmitProposalResponse;
                toProto(message: _91.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _91.MsgSubmitProposalResponse): _91.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _91.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgWithdrawProposal;
                fromPartial(object: Partial<_91.MsgWithdrawProposal>): _91.MsgWithdrawProposal;
                fromAmino(object: _91.MsgWithdrawProposalAmino): _91.MsgWithdrawProposal;
                toAmino(message: _91.MsgWithdrawProposal): _91.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _91.MsgWithdrawProposalAminoMsg): _91.MsgWithdrawProposal;
                toAminoMsg(message: _91.MsgWithdrawProposal): _91.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _91.MsgWithdrawProposalProtoMsg): _91.MsgWithdrawProposal;
                toProto(message: _91.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _91.MsgWithdrawProposal): _91.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _91.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_91.MsgWithdrawProposalResponse>): _91.MsgWithdrawProposalResponse;
                fromAmino(_: _91.MsgWithdrawProposalResponseAmino): _91.MsgWithdrawProposalResponse;
                toAmino(_: _91.MsgWithdrawProposalResponse): _91.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _91.MsgWithdrawProposalResponseAminoMsg): _91.MsgWithdrawProposalResponse;
                toAminoMsg(message: _91.MsgWithdrawProposalResponse): _91.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _91.MsgWithdrawProposalResponseProtoMsg): _91.MsgWithdrawProposalResponse;
                toProto(message: _91.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _91.MsgWithdrawProposalResponse): _91.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _91.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgVote;
                fromPartial(object: Partial<_91.MsgVote>): _91.MsgVote;
                fromAmino(object: _91.MsgVoteAmino): _91.MsgVote;
                toAmino(message: _91.MsgVote): _91.MsgVoteAmino;
                fromAminoMsg(object: _91.MsgVoteAminoMsg): _91.MsgVote;
                toAminoMsg(message: _91.MsgVote): _91.MsgVoteAminoMsg;
                fromProtoMsg(message: _91.MsgVoteProtoMsg): _91.MsgVote;
                toProto(message: _91.MsgVote): Uint8Array;
                toProtoMsg(message: _91.MsgVote): _91.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _91.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgVoteResponse;
                fromPartial(_: Partial<_91.MsgVoteResponse>): _91.MsgVoteResponse;
                fromAmino(_: _91.MsgVoteResponseAmino): _91.MsgVoteResponse;
                toAmino(_: _91.MsgVoteResponse): _91.MsgVoteResponseAmino;
                fromAminoMsg(object: _91.MsgVoteResponseAminoMsg): _91.MsgVoteResponse;
                toAminoMsg(message: _91.MsgVoteResponse): _91.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _91.MsgVoteResponseProtoMsg): _91.MsgVoteResponse;
                toProto(message: _91.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _91.MsgVoteResponse): _91.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _91.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgExec;
                fromPartial(object: Partial<_91.MsgExec>): _91.MsgExec;
                fromAmino(object: _91.MsgExecAmino): _91.MsgExec;
                toAmino(message: _91.MsgExec): _91.MsgExecAmino;
                fromAminoMsg(object: _91.MsgExecAminoMsg): _91.MsgExec;
                toAminoMsg(message: _91.MsgExec): _91.MsgExecAminoMsg;
                fromProtoMsg(message: _91.MsgExecProtoMsg): _91.MsgExec;
                toProto(message: _91.MsgExec): Uint8Array;
                toProtoMsg(message: _91.MsgExec): _91.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _91.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgExecResponse;
                fromPartial(object: Partial<_91.MsgExecResponse>): _91.MsgExecResponse;
                fromAmino(object: _91.MsgExecResponseAmino): _91.MsgExecResponse;
                toAmino(message: _91.MsgExecResponse): _91.MsgExecResponseAmino;
                fromAminoMsg(object: _91.MsgExecResponseAminoMsg): _91.MsgExecResponse;
                toAminoMsg(message: _91.MsgExecResponse): _91.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _91.MsgExecResponseProtoMsg): _91.MsgExecResponse;
                toProto(message: _91.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _91.MsgExecResponse): _91.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _91.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgLeaveGroup;
                fromPartial(object: Partial<_91.MsgLeaveGroup>): _91.MsgLeaveGroup;
                fromAmino(object: _91.MsgLeaveGroupAmino): _91.MsgLeaveGroup;
                toAmino(message: _91.MsgLeaveGroup): _91.MsgLeaveGroupAmino;
                fromAminoMsg(object: _91.MsgLeaveGroupAminoMsg): _91.MsgLeaveGroup;
                toAminoMsg(message: _91.MsgLeaveGroup): _91.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _91.MsgLeaveGroupProtoMsg): _91.MsgLeaveGroup;
                toProto(message: _91.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _91.MsgLeaveGroup): _91.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _91.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_91.MsgLeaveGroupResponse>): _91.MsgLeaveGroupResponse;
                fromAmino(_: _91.MsgLeaveGroupResponseAmino): _91.MsgLeaveGroupResponse;
                toAmino(_: _91.MsgLeaveGroupResponse): _91.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _91.MsgLeaveGroupResponseAminoMsg): _91.MsgLeaveGroupResponse;
                toAminoMsg(message: _91.MsgLeaveGroupResponse): _91.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _91.MsgLeaveGroupResponseProtoMsg): _91.MsgLeaveGroupResponse;
                toProto(message: _91.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _91.MsgLeaveGroupResponse): _91.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _90.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupInfoRequest;
                fromPartial(object: Partial<_90.QueryGroupInfoRequest>): _90.QueryGroupInfoRequest;
                fromAmino(object: _90.QueryGroupInfoRequestAmino): _90.QueryGroupInfoRequest;
                toAmino(message: _90.QueryGroupInfoRequest): _90.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _90.QueryGroupInfoRequestAminoMsg): _90.QueryGroupInfoRequest;
                toAminoMsg(message: _90.QueryGroupInfoRequest): _90.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _90.QueryGroupInfoRequestProtoMsg): _90.QueryGroupInfoRequest;
                toProto(message: _90.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _90.QueryGroupInfoRequest): _90.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _90.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupInfoResponse;
                fromPartial(object: Partial<_90.QueryGroupInfoResponse>): _90.QueryGroupInfoResponse;
                fromAmino(object: _90.QueryGroupInfoResponseAmino): _90.QueryGroupInfoResponse;
                toAmino(message: _90.QueryGroupInfoResponse): _90.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _90.QueryGroupInfoResponseAminoMsg): _90.QueryGroupInfoResponse;
                toAminoMsg(message: _90.QueryGroupInfoResponse): _90.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _90.QueryGroupInfoResponseProtoMsg): _90.QueryGroupInfoResponse;
                toProto(message: _90.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _90.QueryGroupInfoResponse): _90.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _90.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_90.QueryGroupPolicyInfoRequest>): _90.QueryGroupPolicyInfoRequest;
                fromAmino(object: _90.QueryGroupPolicyInfoRequestAmino): _90.QueryGroupPolicyInfoRequest;
                toAmino(message: _90.QueryGroupPolicyInfoRequest): _90.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _90.QueryGroupPolicyInfoRequestAminoMsg): _90.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _90.QueryGroupPolicyInfoRequest): _90.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _90.QueryGroupPolicyInfoRequestProtoMsg): _90.QueryGroupPolicyInfoRequest;
                toProto(message: _90.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _90.QueryGroupPolicyInfoRequest): _90.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _90.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_90.QueryGroupPolicyInfoResponse>): _90.QueryGroupPolicyInfoResponse;
                fromAmino(object: _90.QueryGroupPolicyInfoResponseAmino): _90.QueryGroupPolicyInfoResponse;
                toAmino(message: _90.QueryGroupPolicyInfoResponse): _90.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _90.QueryGroupPolicyInfoResponseAminoMsg): _90.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _90.QueryGroupPolicyInfoResponse): _90.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _90.QueryGroupPolicyInfoResponseProtoMsg): _90.QueryGroupPolicyInfoResponse;
                toProto(message: _90.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _90.QueryGroupPolicyInfoResponse): _90.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _90.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupMembersRequest;
                fromPartial(object: Partial<_90.QueryGroupMembersRequest>): _90.QueryGroupMembersRequest;
                fromAmino(object: _90.QueryGroupMembersRequestAmino): _90.QueryGroupMembersRequest;
                toAmino(message: _90.QueryGroupMembersRequest): _90.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _90.QueryGroupMembersRequestAminoMsg): _90.QueryGroupMembersRequest;
                toAminoMsg(message: _90.QueryGroupMembersRequest): _90.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _90.QueryGroupMembersRequestProtoMsg): _90.QueryGroupMembersRequest;
                toProto(message: _90.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _90.QueryGroupMembersRequest): _90.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _90.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupMembersResponse;
                fromPartial(object: Partial<_90.QueryGroupMembersResponse>): _90.QueryGroupMembersResponse;
                fromAmino(object: _90.QueryGroupMembersResponseAmino): _90.QueryGroupMembersResponse;
                toAmino(message: _90.QueryGroupMembersResponse): _90.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _90.QueryGroupMembersResponseAminoMsg): _90.QueryGroupMembersResponse;
                toAminoMsg(message: _90.QueryGroupMembersResponse): _90.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _90.QueryGroupMembersResponseProtoMsg): _90.QueryGroupMembersResponse;
                toProto(message: _90.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _90.QueryGroupMembersResponse): _90.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _90.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_90.QueryGroupsByAdminRequest>): _90.QueryGroupsByAdminRequest;
                fromAmino(object: _90.QueryGroupsByAdminRequestAmino): _90.QueryGroupsByAdminRequest;
                toAmino(message: _90.QueryGroupsByAdminRequest): _90.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _90.QueryGroupsByAdminRequestAminoMsg): _90.QueryGroupsByAdminRequest;
                toAminoMsg(message: _90.QueryGroupsByAdminRequest): _90.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _90.QueryGroupsByAdminRequestProtoMsg): _90.QueryGroupsByAdminRequest;
                toProto(message: _90.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _90.QueryGroupsByAdminRequest): _90.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _90.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_90.QueryGroupsByAdminResponse>): _90.QueryGroupsByAdminResponse;
                fromAmino(object: _90.QueryGroupsByAdminResponseAmino): _90.QueryGroupsByAdminResponse;
                toAmino(message: _90.QueryGroupsByAdminResponse): _90.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _90.QueryGroupsByAdminResponseAminoMsg): _90.QueryGroupsByAdminResponse;
                toAminoMsg(message: _90.QueryGroupsByAdminResponse): _90.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _90.QueryGroupsByAdminResponseProtoMsg): _90.QueryGroupsByAdminResponse;
                toProto(message: _90.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _90.QueryGroupsByAdminResponse): _90.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _90.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_90.QueryGroupPoliciesByGroupRequest>): _90.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _90.QueryGroupPoliciesByGroupRequestAmino): _90.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _90.QueryGroupPoliciesByGroupRequest): _90.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _90.QueryGroupPoliciesByGroupRequestAminoMsg): _90.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _90.QueryGroupPoliciesByGroupRequest): _90.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _90.QueryGroupPoliciesByGroupRequestProtoMsg): _90.QueryGroupPoliciesByGroupRequest;
                toProto(message: _90.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _90.QueryGroupPoliciesByGroupRequest): _90.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _90.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_90.QueryGroupPoliciesByGroupResponse>): _90.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _90.QueryGroupPoliciesByGroupResponseAmino): _90.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _90.QueryGroupPoliciesByGroupResponse): _90.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _90.QueryGroupPoliciesByGroupResponseAminoMsg): _90.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _90.QueryGroupPoliciesByGroupResponse): _90.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _90.QueryGroupPoliciesByGroupResponseProtoMsg): _90.QueryGroupPoliciesByGroupResponse;
                toProto(message: _90.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _90.QueryGroupPoliciesByGroupResponse): _90.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _90.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_90.QueryGroupPoliciesByAdminRequest>): _90.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _90.QueryGroupPoliciesByAdminRequestAmino): _90.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _90.QueryGroupPoliciesByAdminRequest): _90.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _90.QueryGroupPoliciesByAdminRequestAminoMsg): _90.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _90.QueryGroupPoliciesByAdminRequest): _90.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _90.QueryGroupPoliciesByAdminRequestProtoMsg): _90.QueryGroupPoliciesByAdminRequest;
                toProto(message: _90.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _90.QueryGroupPoliciesByAdminRequest): _90.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _90.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_90.QueryGroupPoliciesByAdminResponse>): _90.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _90.QueryGroupPoliciesByAdminResponseAmino): _90.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _90.QueryGroupPoliciesByAdminResponse): _90.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _90.QueryGroupPoliciesByAdminResponseAminoMsg): _90.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _90.QueryGroupPoliciesByAdminResponse): _90.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _90.QueryGroupPoliciesByAdminResponseProtoMsg): _90.QueryGroupPoliciesByAdminResponse;
                toProto(message: _90.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _90.QueryGroupPoliciesByAdminResponse): _90.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _90.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryProposalRequest;
                fromPartial(object: Partial<_90.QueryProposalRequest>): _90.QueryProposalRequest;
                fromAmino(object: _90.QueryProposalRequestAmino): _90.QueryProposalRequest;
                toAmino(message: _90.QueryProposalRequest): _90.QueryProposalRequestAmino;
                fromAminoMsg(object: _90.QueryProposalRequestAminoMsg): _90.QueryProposalRequest;
                toAminoMsg(message: _90.QueryProposalRequest): _90.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _90.QueryProposalRequestProtoMsg): _90.QueryProposalRequest;
                toProto(message: _90.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _90.QueryProposalRequest): _90.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _90.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryProposalResponse;
                fromPartial(object: Partial<_90.QueryProposalResponse>): _90.QueryProposalResponse;
                fromAmino(object: _90.QueryProposalResponseAmino): _90.QueryProposalResponse;
                toAmino(message: _90.QueryProposalResponse): _90.QueryProposalResponseAmino;
                fromAminoMsg(object: _90.QueryProposalResponseAminoMsg): _90.QueryProposalResponse;
                toAminoMsg(message: _90.QueryProposalResponse): _90.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _90.QueryProposalResponseProtoMsg): _90.QueryProposalResponse;
                toProto(message: _90.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _90.QueryProposalResponse): _90.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _90.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_90.QueryProposalsByGroupPolicyRequest>): _90.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _90.QueryProposalsByGroupPolicyRequestAmino): _90.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _90.QueryProposalsByGroupPolicyRequest): _90.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _90.QueryProposalsByGroupPolicyRequestAminoMsg): _90.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _90.QueryProposalsByGroupPolicyRequest): _90.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _90.QueryProposalsByGroupPolicyRequestProtoMsg): _90.QueryProposalsByGroupPolicyRequest;
                toProto(message: _90.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _90.QueryProposalsByGroupPolicyRequest): _90.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _90.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_90.QueryProposalsByGroupPolicyResponse>): _90.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _90.QueryProposalsByGroupPolicyResponseAmino): _90.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _90.QueryProposalsByGroupPolicyResponse): _90.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _90.QueryProposalsByGroupPolicyResponseAminoMsg): _90.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _90.QueryProposalsByGroupPolicyResponse): _90.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _90.QueryProposalsByGroupPolicyResponseProtoMsg): _90.QueryProposalsByGroupPolicyResponse;
                toProto(message: _90.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _90.QueryProposalsByGroupPolicyResponse): _90.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _90.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_90.QueryVoteByProposalVoterRequest>): _90.QueryVoteByProposalVoterRequest;
                fromAmino(object: _90.QueryVoteByProposalVoterRequestAmino): _90.QueryVoteByProposalVoterRequest;
                toAmino(message: _90.QueryVoteByProposalVoterRequest): _90.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _90.QueryVoteByProposalVoterRequestAminoMsg): _90.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _90.QueryVoteByProposalVoterRequest): _90.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _90.QueryVoteByProposalVoterRequestProtoMsg): _90.QueryVoteByProposalVoterRequest;
                toProto(message: _90.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _90.QueryVoteByProposalVoterRequest): _90.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _90.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_90.QueryVoteByProposalVoterResponse>): _90.QueryVoteByProposalVoterResponse;
                fromAmino(object: _90.QueryVoteByProposalVoterResponseAmino): _90.QueryVoteByProposalVoterResponse;
                toAmino(message: _90.QueryVoteByProposalVoterResponse): _90.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _90.QueryVoteByProposalVoterResponseAminoMsg): _90.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _90.QueryVoteByProposalVoterResponse): _90.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _90.QueryVoteByProposalVoterResponseProtoMsg): _90.QueryVoteByProposalVoterResponse;
                toProto(message: _90.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _90.QueryVoteByProposalVoterResponse): _90.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _90.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_90.QueryVotesByProposalRequest>): _90.QueryVotesByProposalRequest;
                fromAmino(object: _90.QueryVotesByProposalRequestAmino): _90.QueryVotesByProposalRequest;
                toAmino(message: _90.QueryVotesByProposalRequest): _90.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _90.QueryVotesByProposalRequestAminoMsg): _90.QueryVotesByProposalRequest;
                toAminoMsg(message: _90.QueryVotesByProposalRequest): _90.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _90.QueryVotesByProposalRequestProtoMsg): _90.QueryVotesByProposalRequest;
                toProto(message: _90.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _90.QueryVotesByProposalRequest): _90.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _90.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_90.QueryVotesByProposalResponse>): _90.QueryVotesByProposalResponse;
                fromAmino(object: _90.QueryVotesByProposalResponseAmino): _90.QueryVotesByProposalResponse;
                toAmino(message: _90.QueryVotesByProposalResponse): _90.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _90.QueryVotesByProposalResponseAminoMsg): _90.QueryVotesByProposalResponse;
                toAminoMsg(message: _90.QueryVotesByProposalResponse): _90.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _90.QueryVotesByProposalResponseProtoMsg): _90.QueryVotesByProposalResponse;
                toProto(message: _90.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _90.QueryVotesByProposalResponse): _90.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _90.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_90.QueryVotesByVoterRequest>): _90.QueryVotesByVoterRequest;
                fromAmino(object: _90.QueryVotesByVoterRequestAmino): _90.QueryVotesByVoterRequest;
                toAmino(message: _90.QueryVotesByVoterRequest): _90.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _90.QueryVotesByVoterRequestAminoMsg): _90.QueryVotesByVoterRequest;
                toAminoMsg(message: _90.QueryVotesByVoterRequest): _90.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _90.QueryVotesByVoterRequestProtoMsg): _90.QueryVotesByVoterRequest;
                toProto(message: _90.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _90.QueryVotesByVoterRequest): _90.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _90.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_90.QueryVotesByVoterResponse>): _90.QueryVotesByVoterResponse;
                fromAmino(object: _90.QueryVotesByVoterResponseAmino): _90.QueryVotesByVoterResponse;
                toAmino(message: _90.QueryVotesByVoterResponse): _90.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _90.QueryVotesByVoterResponseAminoMsg): _90.QueryVotesByVoterResponse;
                toAminoMsg(message: _90.QueryVotesByVoterResponse): _90.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _90.QueryVotesByVoterResponseProtoMsg): _90.QueryVotesByVoterResponse;
                toProto(message: _90.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _90.QueryVotesByVoterResponse): _90.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _90.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_90.QueryGroupsByMemberRequest>): _90.QueryGroupsByMemberRequest;
                fromAmino(object: _90.QueryGroupsByMemberRequestAmino): _90.QueryGroupsByMemberRequest;
                toAmino(message: _90.QueryGroupsByMemberRequest): _90.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _90.QueryGroupsByMemberRequestAminoMsg): _90.QueryGroupsByMemberRequest;
                toAminoMsg(message: _90.QueryGroupsByMemberRequest): _90.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _90.QueryGroupsByMemberRequestProtoMsg): _90.QueryGroupsByMemberRequest;
                toProto(message: _90.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _90.QueryGroupsByMemberRequest): _90.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _90.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_90.QueryGroupsByMemberResponse>): _90.QueryGroupsByMemberResponse;
                fromAmino(object: _90.QueryGroupsByMemberResponseAmino): _90.QueryGroupsByMemberResponse;
                toAmino(message: _90.QueryGroupsByMemberResponse): _90.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _90.QueryGroupsByMemberResponseAminoMsg): _90.QueryGroupsByMemberResponse;
                toAminoMsg(message: _90.QueryGroupsByMemberResponse): _90.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _90.QueryGroupsByMemberResponseProtoMsg): _90.QueryGroupsByMemberResponse;
                toProto(message: _90.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _90.QueryGroupsByMemberResponse): _90.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _90.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryTallyResultRequest;
                fromPartial(object: Partial<_90.QueryTallyResultRequest>): _90.QueryTallyResultRequest;
                fromAmino(object: _90.QueryTallyResultRequestAmino): _90.QueryTallyResultRequest;
                toAmino(message: _90.QueryTallyResultRequest): _90.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _90.QueryTallyResultRequestAminoMsg): _90.QueryTallyResultRequest;
                toAminoMsg(message: _90.QueryTallyResultRequest): _90.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _90.QueryTallyResultRequestProtoMsg): _90.QueryTallyResultRequest;
                toProto(message: _90.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _90.QueryTallyResultRequest): _90.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _90.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryTallyResultResponse;
                fromPartial(object: Partial<_90.QueryTallyResultResponse>): _90.QueryTallyResultResponse;
                fromAmino(object: _90.QueryTallyResultResponseAmino): _90.QueryTallyResultResponse;
                toAmino(message: _90.QueryTallyResultResponse): _90.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _90.QueryTallyResultResponseAminoMsg): _90.QueryTallyResultResponse;
                toAminoMsg(message: _90.QueryTallyResultResponse): _90.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _90.QueryTallyResultResponseProtoMsg): _90.QueryTallyResultResponse;
                toProto(message: _90.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _90.QueryTallyResultResponse): _90.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _90.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupsRequest;
                fromPartial(object: Partial<_90.QueryGroupsRequest>): _90.QueryGroupsRequest;
                fromAmino(object: _90.QueryGroupsRequestAmino): _90.QueryGroupsRequest;
                toAmino(message: _90.QueryGroupsRequest): _90.QueryGroupsRequestAmino;
                fromAminoMsg(object: _90.QueryGroupsRequestAminoMsg): _90.QueryGroupsRequest;
                toAminoMsg(message: _90.QueryGroupsRequest): _90.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryGroupsRequestProtoMsg): _90.QueryGroupsRequest;
                toProto(message: _90.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryGroupsRequest): _90.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _90.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryGroupsResponse;
                fromPartial(object: Partial<_90.QueryGroupsResponse>): _90.QueryGroupsResponse;
                fromAmino(object: _90.QueryGroupsResponseAmino): _90.QueryGroupsResponse;
                toAmino(message: _90.QueryGroupsResponse): _90.QueryGroupsResponseAmino;
                fromAminoMsg(object: _90.QueryGroupsResponseAminoMsg): _90.QueryGroupsResponse;
                toAminoMsg(message: _90.QueryGroupsResponse): _90.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryGroupsResponseProtoMsg): _90.QueryGroupsResponse;
                toProto(message: _90.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryGroupsResponse): _90.QueryGroupsResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _88.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.EventCreateGroup;
                fromPartial(object: Partial<_88.EventCreateGroup>): _88.EventCreateGroup;
                fromAmino(object: _88.EventCreateGroupAmino): _88.EventCreateGroup;
                toAmino(message: _88.EventCreateGroup): _88.EventCreateGroupAmino;
                fromAminoMsg(object: _88.EventCreateGroupAminoMsg): _88.EventCreateGroup;
                toAminoMsg(message: _88.EventCreateGroup): _88.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _88.EventCreateGroupProtoMsg): _88.EventCreateGroup;
                toProto(message: _88.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _88.EventCreateGroup): _88.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _88.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.EventUpdateGroup;
                fromPartial(object: Partial<_88.EventUpdateGroup>): _88.EventUpdateGroup;
                fromAmino(object: _88.EventUpdateGroupAmino): _88.EventUpdateGroup;
                toAmino(message: _88.EventUpdateGroup): _88.EventUpdateGroupAmino;
                fromAminoMsg(object: _88.EventUpdateGroupAminoMsg): _88.EventUpdateGroup;
                toAminoMsg(message: _88.EventUpdateGroup): _88.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _88.EventUpdateGroupProtoMsg): _88.EventUpdateGroup;
                toProto(message: _88.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _88.EventUpdateGroup): _88.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _88.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.EventCreateGroupPolicy;
                fromPartial(object: Partial<_88.EventCreateGroupPolicy>): _88.EventCreateGroupPolicy;
                fromAmino(object: _88.EventCreateGroupPolicyAmino): _88.EventCreateGroupPolicy;
                toAmino(message: _88.EventCreateGroupPolicy): _88.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _88.EventCreateGroupPolicyAminoMsg): _88.EventCreateGroupPolicy;
                toAminoMsg(message: _88.EventCreateGroupPolicy): _88.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _88.EventCreateGroupPolicyProtoMsg): _88.EventCreateGroupPolicy;
                toProto(message: _88.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _88.EventCreateGroupPolicy): _88.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _88.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_88.EventUpdateGroupPolicy>): _88.EventUpdateGroupPolicy;
                fromAmino(object: _88.EventUpdateGroupPolicyAmino): _88.EventUpdateGroupPolicy;
                toAmino(message: _88.EventUpdateGroupPolicy): _88.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _88.EventUpdateGroupPolicyAminoMsg): _88.EventUpdateGroupPolicy;
                toAminoMsg(message: _88.EventUpdateGroupPolicy): _88.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _88.EventUpdateGroupPolicyProtoMsg): _88.EventUpdateGroupPolicy;
                toProto(message: _88.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _88.EventUpdateGroupPolicy): _88.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _88.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.EventSubmitProposal;
                fromPartial(object: Partial<_88.EventSubmitProposal>): _88.EventSubmitProposal;
                fromAmino(object: _88.EventSubmitProposalAmino): _88.EventSubmitProposal;
                toAmino(message: _88.EventSubmitProposal): _88.EventSubmitProposalAmino;
                fromAminoMsg(object: _88.EventSubmitProposalAminoMsg): _88.EventSubmitProposal;
                toAminoMsg(message: _88.EventSubmitProposal): _88.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _88.EventSubmitProposalProtoMsg): _88.EventSubmitProposal;
                toProto(message: _88.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _88.EventSubmitProposal): _88.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _88.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.EventWithdrawProposal;
                fromPartial(object: Partial<_88.EventWithdrawProposal>): _88.EventWithdrawProposal;
                fromAmino(object: _88.EventWithdrawProposalAmino): _88.EventWithdrawProposal;
                toAmino(message: _88.EventWithdrawProposal): _88.EventWithdrawProposalAmino;
                fromAminoMsg(object: _88.EventWithdrawProposalAminoMsg): _88.EventWithdrawProposal;
                toAminoMsg(message: _88.EventWithdrawProposal): _88.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _88.EventWithdrawProposalProtoMsg): _88.EventWithdrawProposal;
                toProto(message: _88.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _88.EventWithdrawProposal): _88.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _88.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.EventVote;
                fromPartial(object: Partial<_88.EventVote>): _88.EventVote;
                fromAmino(object: _88.EventVoteAmino): _88.EventVote;
                toAmino(message: _88.EventVote): _88.EventVoteAmino;
                fromAminoMsg(object: _88.EventVoteAminoMsg): _88.EventVote;
                toAminoMsg(message: _88.EventVote): _88.EventVoteAminoMsg;
                fromProtoMsg(message: _88.EventVoteProtoMsg): _88.EventVote;
                toProto(message: _88.EventVote): Uint8Array;
                toProtoMsg(message: _88.EventVote): _88.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _88.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.EventExec;
                fromPartial(object: Partial<_88.EventExec>): _88.EventExec;
                fromAmino(object: _88.EventExecAmino): _88.EventExec;
                toAmino(message: _88.EventExec): _88.EventExecAmino;
                fromAminoMsg(object: _88.EventExecAminoMsg): _88.EventExec;
                toAminoMsg(message: _88.EventExec): _88.EventExecAminoMsg;
                fromProtoMsg(message: _88.EventExecProtoMsg): _88.EventExec;
                toProto(message: _88.EventExec): Uint8Array;
                toProtoMsg(message: _88.EventExec): _88.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _88.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.EventLeaveGroup;
                fromPartial(object: Partial<_88.EventLeaveGroup>): _88.EventLeaveGroup;
                fromAmino(object: _88.EventLeaveGroupAmino): _88.EventLeaveGroup;
                toAmino(message: _88.EventLeaveGroup): _88.EventLeaveGroupAmino;
                fromAminoMsg(object: _88.EventLeaveGroupAminoMsg): _88.EventLeaveGroup;
                toAminoMsg(message: _88.EventLeaveGroup): _88.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _88.EventLeaveGroupProtoMsg): _88.EventLeaveGroup;
                toProto(message: _88.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _88.EventLeaveGroup): _88.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _88.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.EventProposalPruned;
                fromPartial(object: Partial<_88.EventProposalPruned>): _88.EventProposalPruned;
                fromAmino(object: _88.EventProposalPrunedAmino): _88.EventProposalPruned;
                toAmino(message: _88.EventProposalPruned): _88.EventProposalPrunedAmino;
                fromAminoMsg(object: _88.EventProposalPrunedAminoMsg): _88.EventProposalPruned;
                toAminoMsg(message: _88.EventProposalPruned): _88.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _88.EventProposalPrunedProtoMsg): _88.EventProposalPruned;
                toProto(message: _88.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _88.EventProposalPruned): _88.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                inflation(request?: _95.QueryInflationRequest): Promise<_95.QueryInflationResponse>;
                annualProvisions(request?: _95.QueryAnnualProvisionsRequest): Promise<_95.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _95.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.QueryParamsRequest;
                fromPartial(_: Partial<_95.QueryParamsRequest>): _95.QueryParamsRequest;
                fromAmino(_: _95.QueryParamsRequestAmino): _95.QueryParamsRequest;
                toAmino(_: _95.QueryParamsRequest): _95.QueryParamsRequestAmino;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _95.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.QueryInflationRequest;
                fromPartial(_: Partial<_95.QueryInflationRequest>): _95.QueryInflationRequest;
                fromAmino(_: _95.QueryInflationRequestAmino): _95.QueryInflationRequest;
                toAmino(_: _95.QueryInflationRequest): _95.QueryInflationRequestAmino;
                fromAminoMsg(object: _95.QueryInflationRequestAminoMsg): _95.QueryInflationRequest;
                toAminoMsg(message: _95.QueryInflationRequest): _95.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _95.QueryInflationRequestProtoMsg): _95.QueryInflationRequest;
                toProto(message: _95.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _95.QueryInflationRequest): _95.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _95.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryInflationResponse;
                fromPartial(object: Partial<_95.QueryInflationResponse>): _95.QueryInflationResponse;
                fromAmino(object: _95.QueryInflationResponseAmino): _95.QueryInflationResponse;
                toAmino(message: _95.QueryInflationResponse): _95.QueryInflationResponseAmino;
                fromAminoMsg(object: _95.QueryInflationResponseAminoMsg): _95.QueryInflationResponse;
                toAminoMsg(message: _95.QueryInflationResponse): _95.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _95.QueryInflationResponseProtoMsg): _95.QueryInflationResponse;
                toProto(message: _95.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _95.QueryInflationResponse): _95.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _95.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_95.QueryAnnualProvisionsRequest>): _95.QueryAnnualProvisionsRequest;
                fromAmino(_: _95.QueryAnnualProvisionsRequestAmino): _95.QueryAnnualProvisionsRequest;
                toAmino(_: _95.QueryAnnualProvisionsRequest): _95.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _95.QueryAnnualProvisionsRequestAminoMsg): _95.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _95.QueryAnnualProvisionsRequest): _95.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _95.QueryAnnualProvisionsRequestProtoMsg): _95.QueryAnnualProvisionsRequest;
                toProto(message: _95.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _95.QueryAnnualProvisionsRequest): _95.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _95.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_95.QueryAnnualProvisionsResponse>): _95.QueryAnnualProvisionsResponse;
                fromAmino(object: _95.QueryAnnualProvisionsResponseAmino): _95.QueryAnnualProvisionsResponse;
                toAmino(message: _95.QueryAnnualProvisionsResponse): _95.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _95.QueryAnnualProvisionsResponseAminoMsg): _95.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _95.QueryAnnualProvisionsResponse): _95.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _95.QueryAnnualProvisionsResponseProtoMsg): _95.QueryAnnualProvisionsResponse;
                toProto(message: _95.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _95.QueryAnnualProvisionsResponse): _95.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _94.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.Minter;
                fromPartial(object: Partial<_94.Minter>): _94.Minter;
                fromAmino(object: _94.MinterAmino): _94.Minter;
                toAmino(message: _94.Minter): _94.MinterAmino;
                fromAminoMsg(object: _94.MinterAminoMsg): _94.Minter;
                toAminoMsg(message: _94.Minter): _94.MinterAminoMsg;
                fromProtoMsg(message: _94.MinterProtoMsg): _94.Minter;
                toProto(message: _94.Minter): Uint8Array;
                toProtoMsg(message: _94.Minter): _94.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _94.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.Params;
                fromPartial(object: Partial<_94.Params>): _94.Params;
                fromAmino(object: _94.ParamsAmino): _94.Params;
                toAmino(message: _94.Params): _94.ParamsAmino;
                fromAminoMsg(object: _94.ParamsAminoMsg): _94.Params;
                toAminoMsg(message: _94.Params): _94.ParamsAminoMsg;
                fromProtoMsg(message: _94.ParamsProtoMsg): _94.Params;
                toProto(message: _94.Params): Uint8Array;
                toProtoMsg(message: _94.Params): _94.ParamsProtoMsg;
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
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _100.QueryBalanceRequest): Promise<_100.QueryBalanceResponse>;
                owner(request: _100.QueryOwnerRequest): Promise<_100.QueryOwnerResponse>;
                supply(request: _100.QuerySupplyRequest): Promise<_100.QuerySupplyResponse>;
                nFTs(request: _100.QueryNFTsRequest): Promise<_100.QueryNFTsResponse>;
                nFT(request: _100.QueryNFTRequest): Promise<_100.QueryNFTResponse>;
                class(request: _100.QueryClassRequest): Promise<_100.QueryClassResponse>;
                classes(request?: _100.QueryClassesRequest): Promise<_100.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _101.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _101.MsgSend): {
                        typeUrl: string;
                        value: _101.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _101.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _101.MsgSend): {
                        typeUrl: string;
                        value: _101.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _101.MsgSend) => _101.MsgSendAmino;
                    fromAmino: (object: _101.MsgSendAmino) => _101.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _101.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgSend;
                fromPartial(object: Partial<_101.MsgSend>): _101.MsgSend;
                fromAmino(object: _101.MsgSendAmino): _101.MsgSend;
                toAmino(message: _101.MsgSend): _101.MsgSendAmino;
                fromAminoMsg(object: _101.MsgSendAminoMsg): _101.MsgSend;
                toAminoMsg(message: _101.MsgSend): _101.MsgSendAminoMsg;
                fromProtoMsg(message: _101.MsgSendProtoMsg): _101.MsgSend;
                toProto(message: _101.MsgSend): Uint8Array;
                toProtoMsg(message: _101.MsgSend): _101.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _101.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgSendResponse;
                fromPartial(_: Partial<_101.MsgSendResponse>): _101.MsgSendResponse;
                fromAmino(_: _101.MsgSendResponseAmino): _101.MsgSendResponse;
                toAmino(_: _101.MsgSendResponse): _101.MsgSendResponseAmino;
                fromAminoMsg(object: _101.MsgSendResponseAminoMsg): _101.MsgSendResponse;
                toAminoMsg(message: _101.MsgSendResponse): _101.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _101.MsgSendResponseProtoMsg): _101.MsgSendResponse;
                toProto(message: _101.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _101.MsgSendResponse): _101.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _100.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryBalanceRequest;
                fromPartial(object: Partial<_100.QueryBalanceRequest>): _100.QueryBalanceRequest;
                fromAmino(object: _100.QueryBalanceRequestAmino): _100.QueryBalanceRequest;
                toAmino(message: _100.QueryBalanceRequest): _100.QueryBalanceRequestAmino;
                fromAminoMsg(object: _100.QueryBalanceRequestAminoMsg): _100.QueryBalanceRequest;
                toAminoMsg(message: _100.QueryBalanceRequest): _100.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _100.QueryBalanceRequestProtoMsg): _100.QueryBalanceRequest;
                toProto(message: _100.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _100.QueryBalanceRequest): _100.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _100.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryBalanceResponse;
                fromPartial(object: Partial<_100.QueryBalanceResponse>): _100.QueryBalanceResponse;
                fromAmino(object: _100.QueryBalanceResponseAmino): _100.QueryBalanceResponse;
                toAmino(message: _100.QueryBalanceResponse): _100.QueryBalanceResponseAmino;
                fromAminoMsg(object: _100.QueryBalanceResponseAminoMsg): _100.QueryBalanceResponse;
                toAminoMsg(message: _100.QueryBalanceResponse): _100.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _100.QueryBalanceResponseProtoMsg): _100.QueryBalanceResponse;
                toProto(message: _100.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _100.QueryBalanceResponse): _100.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _100.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryOwnerRequest;
                fromPartial(object: Partial<_100.QueryOwnerRequest>): _100.QueryOwnerRequest;
                fromAmino(object: _100.QueryOwnerRequestAmino): _100.QueryOwnerRequest;
                toAmino(message: _100.QueryOwnerRequest): _100.QueryOwnerRequestAmino;
                fromAminoMsg(object: _100.QueryOwnerRequestAminoMsg): _100.QueryOwnerRequest;
                toAminoMsg(message: _100.QueryOwnerRequest): _100.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _100.QueryOwnerRequestProtoMsg): _100.QueryOwnerRequest;
                toProto(message: _100.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _100.QueryOwnerRequest): _100.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _100.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryOwnerResponse;
                fromPartial(object: Partial<_100.QueryOwnerResponse>): _100.QueryOwnerResponse;
                fromAmino(object: _100.QueryOwnerResponseAmino): _100.QueryOwnerResponse;
                toAmino(message: _100.QueryOwnerResponse): _100.QueryOwnerResponseAmino;
                fromAminoMsg(object: _100.QueryOwnerResponseAminoMsg): _100.QueryOwnerResponse;
                toAminoMsg(message: _100.QueryOwnerResponse): _100.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _100.QueryOwnerResponseProtoMsg): _100.QueryOwnerResponse;
                toProto(message: _100.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _100.QueryOwnerResponse): _100.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _100.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QuerySupplyRequest;
                fromPartial(object: Partial<_100.QuerySupplyRequest>): _100.QuerySupplyRequest;
                fromAmino(object: _100.QuerySupplyRequestAmino): _100.QuerySupplyRequest;
                toAmino(message: _100.QuerySupplyRequest): _100.QuerySupplyRequestAmino;
                fromAminoMsg(object: _100.QuerySupplyRequestAminoMsg): _100.QuerySupplyRequest;
                toAminoMsg(message: _100.QuerySupplyRequest): _100.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _100.QuerySupplyRequestProtoMsg): _100.QuerySupplyRequest;
                toProto(message: _100.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _100.QuerySupplyRequest): _100.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _100.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QuerySupplyResponse;
                fromPartial(object: Partial<_100.QuerySupplyResponse>): _100.QuerySupplyResponse;
                fromAmino(object: _100.QuerySupplyResponseAmino): _100.QuerySupplyResponse;
                toAmino(message: _100.QuerySupplyResponse): _100.QuerySupplyResponseAmino;
                fromAminoMsg(object: _100.QuerySupplyResponseAminoMsg): _100.QuerySupplyResponse;
                toAminoMsg(message: _100.QuerySupplyResponse): _100.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _100.QuerySupplyResponseProtoMsg): _100.QuerySupplyResponse;
                toProto(message: _100.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _100.QuerySupplyResponse): _100.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _100.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryNFTsRequest;
                fromPartial(object: Partial<_100.QueryNFTsRequest>): _100.QueryNFTsRequest;
                fromAmino(object: _100.QueryNFTsRequestAmino): _100.QueryNFTsRequest;
                toAmino(message: _100.QueryNFTsRequest): _100.QueryNFTsRequestAmino;
                fromAminoMsg(object: _100.QueryNFTsRequestAminoMsg): _100.QueryNFTsRequest;
                toAminoMsg(message: _100.QueryNFTsRequest): _100.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _100.QueryNFTsRequestProtoMsg): _100.QueryNFTsRequest;
                toProto(message: _100.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryNFTsRequest): _100.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _100.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryNFTsResponse;
                fromPartial(object: Partial<_100.QueryNFTsResponse>): _100.QueryNFTsResponse;
                fromAmino(object: _100.QueryNFTsResponseAmino): _100.QueryNFTsResponse;
                toAmino(message: _100.QueryNFTsResponse): _100.QueryNFTsResponseAmino;
                fromAminoMsg(object: _100.QueryNFTsResponseAminoMsg): _100.QueryNFTsResponse;
                toAminoMsg(message: _100.QueryNFTsResponse): _100.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _100.QueryNFTsResponseProtoMsg): _100.QueryNFTsResponse;
                toProto(message: _100.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryNFTsResponse): _100.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _100.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryNFTRequest;
                fromPartial(object: Partial<_100.QueryNFTRequest>): _100.QueryNFTRequest;
                fromAmino(object: _100.QueryNFTRequestAmino): _100.QueryNFTRequest;
                toAmino(message: _100.QueryNFTRequest): _100.QueryNFTRequestAmino;
                fromAminoMsg(object: _100.QueryNFTRequestAminoMsg): _100.QueryNFTRequest;
                toAminoMsg(message: _100.QueryNFTRequest): _100.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _100.QueryNFTRequestProtoMsg): _100.QueryNFTRequest;
                toProto(message: _100.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _100.QueryNFTRequest): _100.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _100.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryNFTResponse;
                fromPartial(object: Partial<_100.QueryNFTResponse>): _100.QueryNFTResponse;
                fromAmino(object: _100.QueryNFTResponseAmino): _100.QueryNFTResponse;
                toAmino(message: _100.QueryNFTResponse): _100.QueryNFTResponseAmino;
                fromAminoMsg(object: _100.QueryNFTResponseAminoMsg): _100.QueryNFTResponse;
                toAminoMsg(message: _100.QueryNFTResponse): _100.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _100.QueryNFTResponseProtoMsg): _100.QueryNFTResponse;
                toProto(message: _100.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _100.QueryNFTResponse): _100.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _100.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryClassRequest;
                fromPartial(object: Partial<_100.QueryClassRequest>): _100.QueryClassRequest;
                fromAmino(object: _100.QueryClassRequestAmino): _100.QueryClassRequest;
                toAmino(message: _100.QueryClassRequest): _100.QueryClassRequestAmino;
                fromAminoMsg(object: _100.QueryClassRequestAminoMsg): _100.QueryClassRequest;
                toAminoMsg(message: _100.QueryClassRequest): _100.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _100.QueryClassRequestProtoMsg): _100.QueryClassRequest;
                toProto(message: _100.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _100.QueryClassRequest): _100.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _100.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryClassResponse;
                fromPartial(object: Partial<_100.QueryClassResponse>): _100.QueryClassResponse;
                fromAmino(object: _100.QueryClassResponseAmino): _100.QueryClassResponse;
                toAmino(message: _100.QueryClassResponse): _100.QueryClassResponseAmino;
                fromAminoMsg(object: _100.QueryClassResponseAminoMsg): _100.QueryClassResponse;
                toAminoMsg(message: _100.QueryClassResponse): _100.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _100.QueryClassResponseProtoMsg): _100.QueryClassResponse;
                toProto(message: _100.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _100.QueryClassResponse): _100.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _100.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryClassesRequest;
                fromPartial(object: Partial<_100.QueryClassesRequest>): _100.QueryClassesRequest;
                fromAmino(object: _100.QueryClassesRequestAmino): _100.QueryClassesRequest;
                toAmino(message: _100.QueryClassesRequest): _100.QueryClassesRequestAmino;
                fromAminoMsg(object: _100.QueryClassesRequestAminoMsg): _100.QueryClassesRequest;
                toAminoMsg(message: _100.QueryClassesRequest): _100.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _100.QueryClassesRequestProtoMsg): _100.QueryClassesRequest;
                toProto(message: _100.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _100.QueryClassesRequest): _100.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _100.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryClassesResponse;
                fromPartial(object: Partial<_100.QueryClassesResponse>): _100.QueryClassesResponse;
                fromAmino(object: _100.QueryClassesResponseAmino): _100.QueryClassesResponse;
                toAmino(message: _100.QueryClassesResponse): _100.QueryClassesResponseAmino;
                fromAminoMsg(object: _100.QueryClassesResponseAminoMsg): _100.QueryClassesResponse;
                toAminoMsg(message: _100.QueryClassesResponse): _100.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _100.QueryClassesResponseProtoMsg): _100.QueryClassesResponse;
                toProto(message: _100.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _100.QueryClassesResponse): _100.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _99.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Class;
                fromPartial(object: Partial<_99.Class>): _99.Class;
                fromAmino(object: _99.ClassAmino): _99.Class;
                toAmino(message: _99.Class): _99.ClassAmino;
                fromAminoMsg(object: _99.ClassAminoMsg): _99.Class;
                toAminoMsg(message: _99.Class): _99.ClassAminoMsg;
                fromProtoMsg(message: _99.ClassProtoMsg): _99.Class;
                toProto(message: _99.Class): Uint8Array;
                toProtoMsg(message: _99.Class): _99.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _99.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.NFT;
                fromPartial(object: Partial<_99.NFT>): _99.NFT;
                fromAmino(object: _99.NFTAmino): _99.NFT;
                toAmino(message: _99.NFT): _99.NFTAmino;
                fromAminoMsg(object: _99.NFTAminoMsg): _99.NFT;
                toAminoMsg(message: _99.NFT): _99.NFTAminoMsg;
                fromProtoMsg(message: _99.NFTProtoMsg): _99.NFT;
                toProto(message: _99.NFT): Uint8Array;
                toProtoMsg(message: _99.NFT): _99.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _98.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Entry;
                fromPartial(object: Partial<_98.Entry>): _98.Entry;
                fromAmino(object: _98.EntryAmino): _98.Entry;
                toAmino(message: _98.Entry): _98.EntryAmino;
                fromAminoMsg(object: _98.EntryAminoMsg): _98.Entry;
                toAminoMsg(message: _98.Entry): _98.EntryAminoMsg;
                fromProtoMsg(message: _98.EntryProtoMsg): _98.Entry;
                toProto(message: _98.Entry): Uint8Array;
                toProtoMsg(message: _98.Entry): _98.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _97.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.EventSend;
                fromPartial(object: Partial<_97.EventSend>): _97.EventSend;
                fromAmino(object: _97.EventSendAmino): _97.EventSend;
                toAmino(message: _97.EventSend): _97.EventSendAmino;
                fromAminoMsg(object: _97.EventSendAminoMsg): _97.EventSend;
                toAminoMsg(message: _97.EventSend): _97.EventSendAminoMsg;
                fromProtoMsg(message: _97.EventSendProtoMsg): _97.EventSend;
                toProto(message: _97.EventSend): Uint8Array;
                toProtoMsg(message: _97.EventSend): _97.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _97.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.EventMint;
                fromPartial(object: Partial<_97.EventMint>): _97.EventMint;
                fromAmino(object: _97.EventMintAmino): _97.EventMint;
                toAmino(message: _97.EventMint): _97.EventMintAmino;
                fromAminoMsg(object: _97.EventMintAminoMsg): _97.EventMint;
                toAminoMsg(message: _97.EventMint): _97.EventMintAminoMsg;
                fromProtoMsg(message: _97.EventMintProtoMsg): _97.EventMint;
                toProto(message: _97.EventMint): Uint8Array;
                toProtoMsg(message: _97.EventMint): _97.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _97.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.EventBurn;
                fromPartial(object: Partial<_97.EventBurn>): _97.EventBurn;
                fromAmino(object: _97.EventBurnAmino): _97.EventBurn;
                toAmino(message: _97.EventBurn): _97.EventBurnAmino;
                fromAminoMsg(object: _97.EventBurnAminoMsg): _97.EventBurn;
                toAminoMsg(message: _97.EventBurn): _97.EventBurnAminoMsg;
                fromProtoMsg(message: _97.EventBurnProtoMsg): _97.EventBurn;
                toProto(message: _97.EventBurn): Uint8Array;
                toProtoMsg(message: _97.EventBurn): _97.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _102.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _102.Module;
                    fromPartial(_: Partial<_102.Module>): _102.Module;
                    fromAmino(_: _102.ModuleAmino): _102.Module;
                    toAmino(_: _102.Module): _102.ModuleAmino;
                    fromAminoMsg(object: _102.ModuleAminoMsg): _102.Module;
                    toAminoMsg(message: _102.Module): _102.ModuleAminoMsg;
                    fromProtoMsg(message: _102.ModuleProtoMsg): _102.Module;
                    toProto(message: _102.Module): Uint8Array;
                    toProtoMsg(message: _102.Module): _102.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _103.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.TableDescriptor;
                fromPartial(object: Partial<_103.TableDescriptor>): _103.TableDescriptor;
                fromAmino(object: _103.TableDescriptorAmino): _103.TableDescriptor;
                toAmino(message: _103.TableDescriptor): _103.TableDescriptorAmino;
                fromAminoMsg(object: _103.TableDescriptorAminoMsg): _103.TableDescriptor;
                toAminoMsg(message: _103.TableDescriptor): _103.TableDescriptorAminoMsg;
                fromProtoMsg(message: _103.TableDescriptorProtoMsg): _103.TableDescriptor;
                toProto(message: _103.TableDescriptor): Uint8Array;
                toProtoMsg(message: _103.TableDescriptor): _103.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _103.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_103.PrimaryKeyDescriptor>): _103.PrimaryKeyDescriptor;
                fromAmino(object: _103.PrimaryKeyDescriptorAmino): _103.PrimaryKeyDescriptor;
                toAmino(message: _103.PrimaryKeyDescriptor): _103.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _103.PrimaryKeyDescriptorAminoMsg): _103.PrimaryKeyDescriptor;
                toAminoMsg(message: _103.PrimaryKeyDescriptor): _103.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _103.PrimaryKeyDescriptorProtoMsg): _103.PrimaryKeyDescriptor;
                toProto(message: _103.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _103.PrimaryKeyDescriptor): _103.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _103.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_103.SecondaryIndexDescriptor>): _103.SecondaryIndexDescriptor;
                fromAmino(object: _103.SecondaryIndexDescriptorAmino): _103.SecondaryIndexDescriptor;
                toAmino(message: _103.SecondaryIndexDescriptor): _103.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _103.SecondaryIndexDescriptorAminoMsg): _103.SecondaryIndexDescriptor;
                toAminoMsg(message: _103.SecondaryIndexDescriptor): _103.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _103.SecondaryIndexDescriptorProtoMsg): _103.SecondaryIndexDescriptor;
                toProto(message: _103.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _103.SecondaryIndexDescriptor): _103.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _103.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.SingletonDescriptor;
                fromPartial(object: Partial<_103.SingletonDescriptor>): _103.SingletonDescriptor;
                fromAmino(object: _103.SingletonDescriptorAmino): _103.SingletonDescriptor;
                toAmino(message: _103.SingletonDescriptor): _103.SingletonDescriptorAmino;
                fromAminoMsg(object: _103.SingletonDescriptorAminoMsg): _103.SingletonDescriptor;
                toAminoMsg(message: _103.SingletonDescriptor): _103.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _103.SingletonDescriptorProtoMsg): _103.SingletonDescriptor;
                toProto(message: _103.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _103.SingletonDescriptor): _103.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _104.StorageType;
            storageTypeToJSON(object: _104.StorageType): string;
            StorageType: typeof _104.StorageType;
            StorageTypeSDKType: typeof _104.StorageType;
            StorageTypeAmino: typeof _104.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _104.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_104.ModuleSchemaDescriptor>): _104.ModuleSchemaDescriptor;
                fromAmino(object: _104.ModuleSchemaDescriptorAmino): _104.ModuleSchemaDescriptor;
                toAmino(message: _104.ModuleSchemaDescriptor): _104.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _104.ModuleSchemaDescriptorAminoMsg): _104.ModuleSchemaDescriptor;
                toAminoMsg(message: _104.ModuleSchemaDescriptor): _104.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _104.ModuleSchemaDescriptorProtoMsg): _104.ModuleSchemaDescriptor;
                toProto(message: _104.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _104.ModuleSchemaDescriptor): _104.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _104.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_104.ModuleSchemaDescriptor_FileEntry>): _104.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _104.ModuleSchemaDescriptor_FileEntryAmino): _104.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _104.ModuleSchemaDescriptor_FileEntry): _104.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _104.ModuleSchemaDescriptor_FileEntryAminoMsg): _104.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _104.ModuleSchemaDescriptor_FileEntry): _104.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _104.ModuleSchemaDescriptor_FileEntryProtoMsg): _104.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _104.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _104.ModuleSchemaDescriptor_FileEntry): _104.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                subspaces(request?: _106.QuerySubspacesRequest): Promise<_106.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _106.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryParamsRequest;
                fromPartial(object: Partial<_106.QueryParamsRequest>): _106.QueryParamsRequest;
                fromAmino(object: _106.QueryParamsRequestAmino): _106.QueryParamsRequest;
                toAmino(message: _106.QueryParamsRequest): _106.QueryParamsRequestAmino;
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
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _106.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.QuerySubspacesRequest;
                fromPartial(_: Partial<_106.QuerySubspacesRequest>): _106.QuerySubspacesRequest;
                fromAmino(_: _106.QuerySubspacesRequestAmino): _106.QuerySubspacesRequest;
                toAmino(_: _106.QuerySubspacesRequest): _106.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _106.QuerySubspacesRequestAminoMsg): _106.QuerySubspacesRequest;
                toAminoMsg(message: _106.QuerySubspacesRequest): _106.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _106.QuerySubspacesRequestProtoMsg): _106.QuerySubspacesRequest;
                toProto(message: _106.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _106.QuerySubspacesRequest): _106.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _106.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QuerySubspacesResponse;
                fromPartial(object: Partial<_106.QuerySubspacesResponse>): _106.QuerySubspacesResponse;
                fromAmino(object: _106.QuerySubspacesResponseAmino): _106.QuerySubspacesResponse;
                toAmino(message: _106.QuerySubspacesResponse): _106.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _106.QuerySubspacesResponseAminoMsg): _106.QuerySubspacesResponse;
                toAminoMsg(message: _106.QuerySubspacesResponse): _106.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _106.QuerySubspacesResponseProtoMsg): _106.QuerySubspacesResponse;
                toProto(message: _106.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _106.QuerySubspacesResponse): _106.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _106.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Subspace;
                fromPartial(object: Partial<_106.Subspace>): _106.Subspace;
                fromAmino(object: _106.SubspaceAmino): _106.Subspace;
                toAmino(message: _106.Subspace): _106.SubspaceAmino;
                fromAminoMsg(object: _106.SubspaceAminoMsg): _106.Subspace;
                toAminoMsg(message: _106.Subspace): _106.SubspaceAminoMsg;
                fromProtoMsg(message: _106.SubspaceProtoMsg): _106.Subspace;
                toProto(message: _106.Subspace): Uint8Array;
                toProtoMsg(message: _106.Subspace): _106.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _105.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ParameterChangeProposal;
                fromPartial(object: Partial<_105.ParameterChangeProposal>): _105.ParameterChangeProposal;
                fromAmino(object: _105.ParameterChangeProposalAmino): _105.ParameterChangeProposal;
                toAmino(message: _105.ParameterChangeProposal): _105.ParameterChangeProposalAmino;
                fromAminoMsg(object: _105.ParameterChangeProposalAminoMsg): _105.ParameterChangeProposal;
                toAminoMsg(message: _105.ParameterChangeProposal): _105.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _105.ParameterChangeProposalProtoMsg): _105.ParameterChangeProposal;
                toProto(message: _105.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _105.ParameterChangeProposal): _105.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _105.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ParamChange;
                fromPartial(object: Partial<_105.ParamChange>): _105.ParamChange;
                fromAmino(object: _105.ParamChangeAmino): _105.ParamChange;
                toAmino(message: _105.ParamChange): _105.ParamChangeAmino;
                fromAminoMsg(object: _105.ParamChangeAminoMsg): _105.ParamChange;
                toAminoMsg(message: _105.ParamChange): _105.ParamChangeAminoMsg;
                fromProtoMsg(message: _105.ParamChangeProtoMsg): _105.ParamChange;
                toProto(message: _105.ParamChange): Uint8Array;
                toProtoMsg(message: _105.ParamChange): _105.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                signingInfo(request: _108.QuerySigningInfoRequest): Promise<_108.QuerySigningInfoResponse>;
                signingInfos(request?: _108.QuerySigningInfosRequest): Promise<_108.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _110.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _110.MsgUnjail): {
                        typeUrl: string;
                        value: _110.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _110.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _110.MsgUnjail): {
                        typeUrl: string;
                        value: _110.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUnjail) => _110.MsgUnjailAmino;
                    fromAmino: (object: _110.MsgUnjailAmino) => _110.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _110.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgUnjail;
                fromPartial(object: Partial<_110.MsgUnjail>): _110.MsgUnjail;
                fromAmino(object: _110.MsgUnjailAmino): _110.MsgUnjail;
                toAmino(message: _110.MsgUnjail): _110.MsgUnjailAmino;
                fromAminoMsg(object: _110.MsgUnjailAminoMsg): _110.MsgUnjail;
                toAminoMsg(message: _110.MsgUnjail): _110.MsgUnjailAminoMsg;
                fromProtoMsg(message: _110.MsgUnjailProtoMsg): _110.MsgUnjail;
                toProto(message: _110.MsgUnjail): Uint8Array;
                toProtoMsg(message: _110.MsgUnjail): _110.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _110.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgUnjailResponse;
                fromPartial(_: Partial<_110.MsgUnjailResponse>): _110.MsgUnjailResponse;
                fromAmino(_: _110.MsgUnjailResponseAmino): _110.MsgUnjailResponse;
                toAmino(_: _110.MsgUnjailResponse): _110.MsgUnjailResponseAmino;
                fromAminoMsg(object: _110.MsgUnjailResponseAminoMsg): _110.MsgUnjailResponse;
                toAminoMsg(message: _110.MsgUnjailResponse): _110.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUnjailResponseProtoMsg): _110.MsgUnjailResponse;
                toProto(message: _110.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUnjailResponse): _110.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _109.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.ValidatorSigningInfo;
                fromPartial(object: Partial<_109.ValidatorSigningInfo>): _109.ValidatorSigningInfo;
                fromAmino(object: _109.ValidatorSigningInfoAmino): _109.ValidatorSigningInfo;
                toAmino(message: _109.ValidatorSigningInfo): _109.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _109.ValidatorSigningInfoAminoMsg): _109.ValidatorSigningInfo;
                toAminoMsg(message: _109.ValidatorSigningInfo): _109.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _109.ValidatorSigningInfoProtoMsg): _109.ValidatorSigningInfo;
                toProto(message: _109.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _109.ValidatorSigningInfo): _109.ValidatorSigningInfoProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QuerySigningInfoRequest;
                fromPartial(object: Partial<_108.QuerySigningInfoRequest>): _108.QuerySigningInfoRequest;
                fromAmino(object: _108.QuerySigningInfoRequestAmino): _108.QuerySigningInfoRequest;
                toAmino(message: _108.QuerySigningInfoRequest): _108.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _108.QuerySigningInfoRequestAminoMsg): _108.QuerySigningInfoRequest;
                toAminoMsg(message: _108.QuerySigningInfoRequest): _108.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfoRequestProtoMsg): _108.QuerySigningInfoRequest;
                toProto(message: _108.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfoRequest): _108.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QuerySigningInfoResponse;
                fromPartial(object: Partial<_108.QuerySigningInfoResponse>): _108.QuerySigningInfoResponse;
                fromAmino(object: _108.QuerySigningInfoResponseAmino): _108.QuerySigningInfoResponse;
                toAmino(message: _108.QuerySigningInfoResponse): _108.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _108.QuerySigningInfoResponseAminoMsg): _108.QuerySigningInfoResponse;
                toAminoMsg(message: _108.QuerySigningInfoResponse): _108.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfoResponseProtoMsg): _108.QuerySigningInfoResponse;
                toProto(message: _108.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfoResponse): _108.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QuerySigningInfosRequest;
                fromPartial(object: Partial<_108.QuerySigningInfosRequest>): _108.QuerySigningInfosRequest;
                fromAmino(object: _108.QuerySigningInfosRequestAmino): _108.QuerySigningInfosRequest;
                toAmino(message: _108.QuerySigningInfosRequest): _108.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _108.QuerySigningInfosRequestAminoMsg): _108.QuerySigningInfosRequest;
                toAminoMsg(message: _108.QuerySigningInfosRequest): _108.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfosRequestProtoMsg): _108.QuerySigningInfosRequest;
                toProto(message: _108.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfosRequest): _108.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QuerySigningInfosResponse;
                fromPartial(object: Partial<_108.QuerySigningInfosResponse>): _108.QuerySigningInfosResponse;
                fromAmino(object: _108.QuerySigningInfosResponseAmino): _108.QuerySigningInfosResponse;
                toAmino(message: _108.QuerySigningInfosResponse): _108.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _108.QuerySigningInfosResponseAminoMsg): _108.QuerySigningInfosResponse;
                toAminoMsg(message: _108.QuerySigningInfosResponse): _108.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfosResponseProtoMsg): _108.QuerySigningInfosResponse;
                toProto(message: _108.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfosResponse): _108.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _107.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.SigningInfo;
                fromPartial(object: Partial<_107.SigningInfo>): _107.SigningInfo;
                fromAmino(object: _107.SigningInfoAmino): _107.SigningInfo;
                toAmino(message: _107.SigningInfo): _107.SigningInfoAmino;
                fromAminoMsg(object: _107.SigningInfoAminoMsg): _107.SigningInfo;
                toAminoMsg(message: _107.SigningInfo): _107.SigningInfoAminoMsg;
                fromProtoMsg(message: _107.SigningInfoProtoMsg): _107.SigningInfo;
                toProto(message: _107.SigningInfo): Uint8Array;
                toProtoMsg(message: _107.SigningInfo): _107.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _107.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.ValidatorMissedBlocks;
                fromPartial(object: Partial<_107.ValidatorMissedBlocks>): _107.ValidatorMissedBlocks;
                fromAmino(object: _107.ValidatorMissedBlocksAmino): _107.ValidatorMissedBlocks;
                toAmino(message: _107.ValidatorMissedBlocks): _107.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _107.ValidatorMissedBlocksAminoMsg): _107.ValidatorMissedBlocks;
                toAminoMsg(message: _107.ValidatorMissedBlocks): _107.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _107.ValidatorMissedBlocksProtoMsg): _107.ValidatorMissedBlocks;
                toProto(message: _107.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _107.ValidatorMissedBlocks): _107.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _107.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MissedBlock;
                fromPartial(object: Partial<_107.MissedBlock>): _107.MissedBlock;
                fromAmino(object: _107.MissedBlockAmino): _107.MissedBlock;
                toAmino(message: _107.MissedBlock): _107.MissedBlockAmino;
                fromAminoMsg(object: _107.MissedBlockAminoMsg): _107.MissedBlock;
                toAminoMsg(message: _107.MissedBlock): _107.MissedBlockAminoMsg;
                fromProtoMsg(message: _107.MissedBlockProtoMsg): _107.MissedBlock;
                toProto(message: _107.MissedBlock): Uint8Array;
                toProtoMsg(message: _107.MissedBlock): _107.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                validators(request: _113.QueryValidatorsRequest): Promise<_113.QueryValidatorsResponse>;
                validator(request: _113.QueryValidatorRequest): Promise<_113.QueryValidatorResponse>;
                validatorDelegations(request: _113.QueryValidatorDelegationsRequest): Promise<_113.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _113.QueryValidatorUnbondingDelegationsRequest): Promise<_113.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _113.QueryDelegationRequest): Promise<_113.QueryDelegationResponse>;
                unbondingDelegation(request: _113.QueryUnbondingDelegationRequest): Promise<_113.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _113.QueryDelegatorDelegationsRequest): Promise<_113.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _113.QueryDelegatorUnbondingDelegationsRequest): Promise<_113.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _113.QueryRedelegationsRequest): Promise<_113.QueryRedelegationsResponse>;
                delegatorValidators(request: _113.QueryDelegatorValidatorsRequest): Promise<_113.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _113.QueryDelegatorValidatorRequest): Promise<_113.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _113.QueryHistoricalInfoRequest): Promise<_113.QueryHistoricalInfoResponse>;
                pool(request?: _113.QueryPoolRequest): Promise<_113.QueryPoolResponse>;
                params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _115.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _115.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _115.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _115.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _115.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _115.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _115.MsgCreateValidator): {
                        typeUrl: string;
                        value: _115.MsgCreateValidator;
                    };
                    editValidator(value: _115.MsgEditValidator): {
                        typeUrl: string;
                        value: _115.MsgEditValidator;
                    };
                    delegate(value: _115.MsgDelegate): {
                        typeUrl: string;
                        value: _115.MsgDelegate;
                    };
                    beginRedelegate(value: _115.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _115.MsgBeginRedelegate;
                    };
                    undelegate(value: _115.MsgUndelegate): {
                        typeUrl: string;
                        value: _115.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _115.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _115.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _115.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _115.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _115.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _115.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _115.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _115.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _115.MsgCreateValidator): {
                        typeUrl: string;
                        value: _115.MsgCreateValidator;
                    };
                    editValidator(value: _115.MsgEditValidator): {
                        typeUrl: string;
                        value: _115.MsgEditValidator;
                    };
                    delegate(value: _115.MsgDelegate): {
                        typeUrl: string;
                        value: _115.MsgDelegate;
                    };
                    beginRedelegate(value: _115.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _115.MsgBeginRedelegate;
                    };
                    undelegate(value: _115.MsgUndelegate): {
                        typeUrl: string;
                        value: _115.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _115.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _115.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _115.MsgCreateValidator) => _115.MsgCreateValidatorAmino;
                    fromAmino: (object: _115.MsgCreateValidatorAmino) => _115.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _115.MsgEditValidator) => _115.MsgEditValidatorAmino;
                    fromAmino: (object: _115.MsgEditValidatorAmino) => _115.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _115.MsgDelegate) => _115.MsgDelegateAmino;
                    fromAmino: (object: _115.MsgDelegateAmino) => _115.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _115.MsgBeginRedelegate) => _115.MsgBeginRedelegateAmino;
                    fromAmino: (object: _115.MsgBeginRedelegateAmino) => _115.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _115.MsgUndelegate) => _115.MsgUndelegateAmino;
                    fromAmino: (object: _115.MsgUndelegateAmino) => _115.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _115.MsgCancelUnbondingDelegation) => _115.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _115.MsgCancelUnbondingDelegationAmino) => _115.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _115.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgCreateValidator;
                fromPartial(object: Partial<_115.MsgCreateValidator>): _115.MsgCreateValidator;
                fromAmino(object: _115.MsgCreateValidatorAmino): _115.MsgCreateValidator;
                toAmino(message: _115.MsgCreateValidator): _115.MsgCreateValidatorAmino;
                fromAminoMsg(object: _115.MsgCreateValidatorAminoMsg): _115.MsgCreateValidator;
                toAminoMsg(message: _115.MsgCreateValidator): _115.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _115.MsgCreateValidatorProtoMsg): _115.MsgCreateValidator;
                toProto(message: _115.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _115.MsgCreateValidator): _115.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _115.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_115.MsgCreateValidatorResponse>): _115.MsgCreateValidatorResponse;
                fromAmino(_: _115.MsgCreateValidatorResponseAmino): _115.MsgCreateValidatorResponse;
                toAmino(_: _115.MsgCreateValidatorResponse): _115.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _115.MsgCreateValidatorResponseAminoMsg): _115.MsgCreateValidatorResponse;
                toAminoMsg(message: _115.MsgCreateValidatorResponse): _115.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _115.MsgCreateValidatorResponseProtoMsg): _115.MsgCreateValidatorResponse;
                toProto(message: _115.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _115.MsgCreateValidatorResponse): _115.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _115.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgEditValidator;
                fromPartial(object: Partial<_115.MsgEditValidator>): _115.MsgEditValidator;
                fromAmino(object: _115.MsgEditValidatorAmino): _115.MsgEditValidator;
                toAmino(message: _115.MsgEditValidator): _115.MsgEditValidatorAmino;
                fromAminoMsg(object: _115.MsgEditValidatorAminoMsg): _115.MsgEditValidator;
                toAminoMsg(message: _115.MsgEditValidator): _115.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _115.MsgEditValidatorProtoMsg): _115.MsgEditValidator;
                toProto(message: _115.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _115.MsgEditValidator): _115.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _115.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.MsgEditValidatorResponse;
                fromPartial(_: Partial<_115.MsgEditValidatorResponse>): _115.MsgEditValidatorResponse;
                fromAmino(_: _115.MsgEditValidatorResponseAmino): _115.MsgEditValidatorResponse;
                toAmino(_: _115.MsgEditValidatorResponse): _115.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _115.MsgEditValidatorResponseAminoMsg): _115.MsgEditValidatorResponse;
                toAminoMsg(message: _115.MsgEditValidatorResponse): _115.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _115.MsgEditValidatorResponseProtoMsg): _115.MsgEditValidatorResponse;
                toProto(message: _115.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _115.MsgEditValidatorResponse): _115.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _115.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgDelegate;
                fromPartial(object: Partial<_115.MsgDelegate>): _115.MsgDelegate;
                fromAmino(object: _115.MsgDelegateAmino): _115.MsgDelegate;
                toAmino(message: _115.MsgDelegate): _115.MsgDelegateAmino;
                fromAminoMsg(object: _115.MsgDelegateAminoMsg): _115.MsgDelegate;
                toAminoMsg(message: _115.MsgDelegate): _115.MsgDelegateAminoMsg;
                fromProtoMsg(message: _115.MsgDelegateProtoMsg): _115.MsgDelegate;
                toProto(message: _115.MsgDelegate): Uint8Array;
                toProtoMsg(message: _115.MsgDelegate): _115.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _115.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.MsgDelegateResponse;
                fromPartial(_: Partial<_115.MsgDelegateResponse>): _115.MsgDelegateResponse;
                fromAmino(_: _115.MsgDelegateResponseAmino): _115.MsgDelegateResponse;
                toAmino(_: _115.MsgDelegateResponse): _115.MsgDelegateResponseAmino;
                fromAminoMsg(object: _115.MsgDelegateResponseAminoMsg): _115.MsgDelegateResponse;
                toAminoMsg(message: _115.MsgDelegateResponse): _115.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _115.MsgDelegateResponseProtoMsg): _115.MsgDelegateResponse;
                toProto(message: _115.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _115.MsgDelegateResponse): _115.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _115.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgBeginRedelegate;
                fromPartial(object: Partial<_115.MsgBeginRedelegate>): _115.MsgBeginRedelegate;
                fromAmino(object: _115.MsgBeginRedelegateAmino): _115.MsgBeginRedelegate;
                toAmino(message: _115.MsgBeginRedelegate): _115.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _115.MsgBeginRedelegateAminoMsg): _115.MsgBeginRedelegate;
                toAminoMsg(message: _115.MsgBeginRedelegate): _115.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _115.MsgBeginRedelegateProtoMsg): _115.MsgBeginRedelegate;
                toProto(message: _115.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _115.MsgBeginRedelegate): _115.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _115.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_115.MsgBeginRedelegateResponse>): _115.MsgBeginRedelegateResponse;
                fromAmino(object: _115.MsgBeginRedelegateResponseAmino): _115.MsgBeginRedelegateResponse;
                toAmino(message: _115.MsgBeginRedelegateResponse): _115.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _115.MsgBeginRedelegateResponseAminoMsg): _115.MsgBeginRedelegateResponse;
                toAminoMsg(message: _115.MsgBeginRedelegateResponse): _115.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _115.MsgBeginRedelegateResponseProtoMsg): _115.MsgBeginRedelegateResponse;
                toProto(message: _115.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _115.MsgBeginRedelegateResponse): _115.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _115.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgUndelegate;
                fromPartial(object: Partial<_115.MsgUndelegate>): _115.MsgUndelegate;
                fromAmino(object: _115.MsgUndelegateAmino): _115.MsgUndelegate;
                toAmino(message: _115.MsgUndelegate): _115.MsgUndelegateAmino;
                fromAminoMsg(object: _115.MsgUndelegateAminoMsg): _115.MsgUndelegate;
                toAminoMsg(message: _115.MsgUndelegate): _115.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _115.MsgUndelegateProtoMsg): _115.MsgUndelegate;
                toProto(message: _115.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _115.MsgUndelegate): _115.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _115.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgUndelegateResponse;
                fromPartial(object: Partial<_115.MsgUndelegateResponse>): _115.MsgUndelegateResponse;
                fromAmino(object: _115.MsgUndelegateResponseAmino): _115.MsgUndelegateResponse;
                toAmino(message: _115.MsgUndelegateResponse): _115.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _115.MsgUndelegateResponseAminoMsg): _115.MsgUndelegateResponse;
                toAminoMsg(message: _115.MsgUndelegateResponse): _115.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _115.MsgUndelegateResponseProtoMsg): _115.MsgUndelegateResponse;
                toProto(message: _115.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _115.MsgUndelegateResponse): _115.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _115.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_115.MsgCancelUnbondingDelegation>): _115.MsgCancelUnbondingDelegation;
                fromAmino(object: _115.MsgCancelUnbondingDelegationAmino): _115.MsgCancelUnbondingDelegation;
                toAmino(message: _115.MsgCancelUnbondingDelegation): _115.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _115.MsgCancelUnbondingDelegationAminoMsg): _115.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _115.MsgCancelUnbondingDelegation): _115.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _115.MsgCancelUnbondingDelegationProtoMsg): _115.MsgCancelUnbondingDelegation;
                toProto(message: _115.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _115.MsgCancelUnbondingDelegation): _115.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _115.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_115.MsgCancelUnbondingDelegationResponse>): _115.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _115.MsgCancelUnbondingDelegationResponseAmino): _115.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _115.MsgCancelUnbondingDelegationResponse): _115.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _115.MsgCancelUnbondingDelegationResponseAminoMsg): _115.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _115.MsgCancelUnbondingDelegationResponse): _115.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _115.MsgCancelUnbondingDelegationResponseProtoMsg): _115.MsgCancelUnbondingDelegationResponse;
                toProto(message: _115.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _115.MsgCancelUnbondingDelegationResponse): _115.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => any;
            bondStatusFromJSON(object: any): _114.BondStatus;
            bondStatusToJSON(object: _114.BondStatus): string;
            BondStatus: typeof _114.BondStatus;
            BondStatusSDKType: typeof _114.BondStatus;
            BondStatusAmino: typeof _114.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _114.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.HistoricalInfo;
                fromPartial(object: Partial<_114.HistoricalInfo>): _114.HistoricalInfo;
                fromAmino(object: _114.HistoricalInfoAmino): _114.HistoricalInfo;
                toAmino(message: _114.HistoricalInfo): _114.HistoricalInfoAmino;
                fromAminoMsg(object: _114.HistoricalInfoAminoMsg): _114.HistoricalInfo;
                toAminoMsg(message: _114.HistoricalInfo): _114.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _114.HistoricalInfoProtoMsg): _114.HistoricalInfo;
                toProto(message: _114.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _114.HistoricalInfo): _114.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _114.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.CommissionRates;
                fromPartial(object: Partial<_114.CommissionRates>): _114.CommissionRates;
                fromAmino(object: _114.CommissionRatesAmino): _114.CommissionRates;
                toAmino(message: _114.CommissionRates): _114.CommissionRatesAmino;
                fromAminoMsg(object: _114.CommissionRatesAminoMsg): _114.CommissionRates;
                toAminoMsg(message: _114.CommissionRates): _114.CommissionRatesAminoMsg;
                fromProtoMsg(message: _114.CommissionRatesProtoMsg): _114.CommissionRates;
                toProto(message: _114.CommissionRates): Uint8Array;
                toProtoMsg(message: _114.CommissionRates): _114.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _114.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Commission;
                fromPartial(object: Partial<_114.Commission>): _114.Commission;
                fromAmino(object: _114.CommissionAmino): _114.Commission;
                toAmino(message: _114.Commission): _114.CommissionAmino;
                fromAminoMsg(object: _114.CommissionAminoMsg): _114.Commission;
                toAminoMsg(message: _114.Commission): _114.CommissionAminoMsg;
                fromProtoMsg(message: _114.CommissionProtoMsg): _114.Commission;
                toProto(message: _114.Commission): Uint8Array;
                toProtoMsg(message: _114.Commission): _114.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _114.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Description;
                fromPartial(object: Partial<_114.Description>): _114.Description;
                fromAmino(object: _114.DescriptionAmino): _114.Description;
                toAmino(message: _114.Description): _114.DescriptionAmino;
                fromAminoMsg(object: _114.DescriptionAminoMsg): _114.Description;
                toAminoMsg(message: _114.Description): _114.DescriptionAminoMsg;
                fromProtoMsg(message: _114.DescriptionProtoMsg): _114.Description;
                toProto(message: _114.Description): Uint8Array;
                toProtoMsg(message: _114.Description): _114.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _114.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Validator;
                fromPartial(object: Partial<_114.Validator>): _114.Validator;
                fromAmino(object: _114.ValidatorAmino): _114.Validator;
                toAmino(message: _114.Validator): _114.ValidatorAmino;
                fromAminoMsg(object: _114.ValidatorAminoMsg): _114.Validator;
                toAminoMsg(message: _114.Validator): _114.ValidatorAminoMsg;
                fromProtoMsg(message: _114.ValidatorProtoMsg): _114.Validator;
                toProto(message: _114.Validator): Uint8Array;
                toProtoMsg(message: _114.Validator): _114.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _114.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.ValAddresses;
                fromPartial(object: Partial<_114.ValAddresses>): _114.ValAddresses;
                fromAmino(object: _114.ValAddressesAmino): _114.ValAddresses;
                toAmino(message: _114.ValAddresses): _114.ValAddressesAmino;
                fromAminoMsg(object: _114.ValAddressesAminoMsg): _114.ValAddresses;
                toAminoMsg(message: _114.ValAddresses): _114.ValAddressesAminoMsg;
                fromProtoMsg(message: _114.ValAddressesProtoMsg): _114.ValAddresses;
                toProto(message: _114.ValAddresses): Uint8Array;
                toProtoMsg(message: _114.ValAddresses): _114.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _114.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.DVPair;
                fromPartial(object: Partial<_114.DVPair>): _114.DVPair;
                fromAmino(object: _114.DVPairAmino): _114.DVPair;
                toAmino(message: _114.DVPair): _114.DVPairAmino;
                fromAminoMsg(object: _114.DVPairAminoMsg): _114.DVPair;
                toAminoMsg(message: _114.DVPair): _114.DVPairAminoMsg;
                fromProtoMsg(message: _114.DVPairProtoMsg): _114.DVPair;
                toProto(message: _114.DVPair): Uint8Array;
                toProtoMsg(message: _114.DVPair): _114.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _114.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.DVPairs;
                fromPartial(object: Partial<_114.DVPairs>): _114.DVPairs;
                fromAmino(object: _114.DVPairsAmino): _114.DVPairs;
                toAmino(message: _114.DVPairs): _114.DVPairsAmino;
                fromAminoMsg(object: _114.DVPairsAminoMsg): _114.DVPairs;
                toAminoMsg(message: _114.DVPairs): _114.DVPairsAminoMsg;
                fromProtoMsg(message: _114.DVPairsProtoMsg): _114.DVPairs;
                toProto(message: _114.DVPairs): Uint8Array;
                toProtoMsg(message: _114.DVPairs): _114.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _114.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.DVVTriplet;
                fromPartial(object: Partial<_114.DVVTriplet>): _114.DVVTriplet;
                fromAmino(object: _114.DVVTripletAmino): _114.DVVTriplet;
                toAmino(message: _114.DVVTriplet): _114.DVVTripletAmino;
                fromAminoMsg(object: _114.DVVTripletAminoMsg): _114.DVVTriplet;
                toAminoMsg(message: _114.DVVTriplet): _114.DVVTripletAminoMsg;
                fromProtoMsg(message: _114.DVVTripletProtoMsg): _114.DVVTriplet;
                toProto(message: _114.DVVTriplet): Uint8Array;
                toProtoMsg(message: _114.DVVTriplet): _114.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _114.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.DVVTriplets;
                fromPartial(object: Partial<_114.DVVTriplets>): _114.DVVTriplets;
                fromAmino(object: _114.DVVTripletsAmino): _114.DVVTriplets;
                toAmino(message: _114.DVVTriplets): _114.DVVTripletsAmino;
                fromAminoMsg(object: _114.DVVTripletsAminoMsg): _114.DVVTriplets;
                toAminoMsg(message: _114.DVVTriplets): _114.DVVTripletsAminoMsg;
                fromProtoMsg(message: _114.DVVTripletsProtoMsg): _114.DVVTriplets;
                toProto(message: _114.DVVTriplets): Uint8Array;
                toProtoMsg(message: _114.DVVTriplets): _114.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _114.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Delegation;
                fromPartial(object: Partial<_114.Delegation>): _114.Delegation;
                fromAmino(object: _114.DelegationAmino): _114.Delegation;
                toAmino(message: _114.Delegation): _114.DelegationAmino;
                fromAminoMsg(object: _114.DelegationAminoMsg): _114.Delegation;
                toAminoMsg(message: _114.Delegation): _114.DelegationAminoMsg;
                fromProtoMsg(message: _114.DelegationProtoMsg): _114.Delegation;
                toProto(message: _114.Delegation): Uint8Array;
                toProtoMsg(message: _114.Delegation): _114.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _114.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.UnbondingDelegation;
                fromPartial(object: Partial<_114.UnbondingDelegation>): _114.UnbondingDelegation;
                fromAmino(object: _114.UnbondingDelegationAmino): _114.UnbondingDelegation;
                toAmino(message: _114.UnbondingDelegation): _114.UnbondingDelegationAmino;
                fromAminoMsg(object: _114.UnbondingDelegationAminoMsg): _114.UnbondingDelegation;
                toAminoMsg(message: _114.UnbondingDelegation): _114.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _114.UnbondingDelegationProtoMsg): _114.UnbondingDelegation;
                toProto(message: _114.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _114.UnbondingDelegation): _114.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _114.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.UnbondingDelegationEntry;
                fromPartial(object: Partial<_114.UnbondingDelegationEntry>): _114.UnbondingDelegationEntry;
                fromAmino(object: _114.UnbondingDelegationEntryAmino): _114.UnbondingDelegationEntry;
                toAmino(message: _114.UnbondingDelegationEntry): _114.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _114.UnbondingDelegationEntryAminoMsg): _114.UnbondingDelegationEntry;
                toAminoMsg(message: _114.UnbondingDelegationEntry): _114.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _114.UnbondingDelegationEntryProtoMsg): _114.UnbondingDelegationEntry;
                toProto(message: _114.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _114.UnbondingDelegationEntry): _114.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _114.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.RedelegationEntry;
                fromPartial(object: Partial<_114.RedelegationEntry>): _114.RedelegationEntry;
                fromAmino(object: _114.RedelegationEntryAmino): _114.RedelegationEntry;
                toAmino(message: _114.RedelegationEntry): _114.RedelegationEntryAmino;
                fromAminoMsg(object: _114.RedelegationEntryAminoMsg): _114.RedelegationEntry;
                toAminoMsg(message: _114.RedelegationEntry): _114.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _114.RedelegationEntryProtoMsg): _114.RedelegationEntry;
                toProto(message: _114.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _114.RedelegationEntry): _114.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _114.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Redelegation;
                fromPartial(object: Partial<_114.Redelegation>): _114.Redelegation;
                fromAmino(object: _114.RedelegationAmino): _114.Redelegation;
                toAmino(message: _114.Redelegation): _114.RedelegationAmino;
                fromAminoMsg(object: _114.RedelegationAminoMsg): _114.Redelegation;
                toAminoMsg(message: _114.Redelegation): _114.RedelegationAminoMsg;
                fromProtoMsg(message: _114.RedelegationProtoMsg): _114.Redelegation;
                toProto(message: _114.Redelegation): Uint8Array;
                toProtoMsg(message: _114.Redelegation): _114.RedelegationProtoMsg;
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
            DelegationResponse: {
                typeUrl: string;
                encode(message: _114.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.DelegationResponse;
                fromPartial(object: Partial<_114.DelegationResponse>): _114.DelegationResponse;
                fromAmino(object: _114.DelegationResponseAmino): _114.DelegationResponse;
                toAmino(message: _114.DelegationResponse): _114.DelegationResponseAmino;
                fromAminoMsg(object: _114.DelegationResponseAminoMsg): _114.DelegationResponse;
                toAminoMsg(message: _114.DelegationResponse): _114.DelegationResponseAminoMsg;
                fromProtoMsg(message: _114.DelegationResponseProtoMsg): _114.DelegationResponse;
                toProto(message: _114.DelegationResponse): Uint8Array;
                toProtoMsg(message: _114.DelegationResponse): _114.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _114.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.RedelegationEntryResponse;
                fromPartial(object: Partial<_114.RedelegationEntryResponse>): _114.RedelegationEntryResponse;
                fromAmino(object: _114.RedelegationEntryResponseAmino): _114.RedelegationEntryResponse;
                toAmino(message: _114.RedelegationEntryResponse): _114.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _114.RedelegationEntryResponseAminoMsg): _114.RedelegationEntryResponse;
                toAminoMsg(message: _114.RedelegationEntryResponse): _114.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _114.RedelegationEntryResponseProtoMsg): _114.RedelegationEntryResponse;
                toProto(message: _114.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _114.RedelegationEntryResponse): _114.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _114.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.RedelegationResponse;
                fromPartial(object: Partial<_114.RedelegationResponse>): _114.RedelegationResponse;
                fromAmino(object: _114.RedelegationResponseAmino): _114.RedelegationResponse;
                toAmino(message: _114.RedelegationResponse): _114.RedelegationResponseAmino;
                fromAminoMsg(object: _114.RedelegationResponseAminoMsg): _114.RedelegationResponse;
                toAminoMsg(message: _114.RedelegationResponse): _114.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _114.RedelegationResponseProtoMsg): _114.RedelegationResponse;
                toProto(message: _114.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _114.RedelegationResponse): _114.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _114.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Pool;
                fromPartial(object: Partial<_114.Pool>): _114.Pool;
                fromAmino(object: _114.PoolAmino): _114.Pool;
                toAmino(message: _114.Pool): _114.PoolAmino;
                fromAminoMsg(object: _114.PoolAminoMsg): _114.Pool;
                toAminoMsg(message: _114.Pool): _114.PoolAminoMsg;
                fromProtoMsg(message: _114.PoolProtoMsg): _114.Pool;
                toProto(message: _114.Pool): Uint8Array;
                toProtoMsg(message: _114.Pool): _114.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _113.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryValidatorsRequest;
                fromPartial(object: Partial<_113.QueryValidatorsRequest>): _113.QueryValidatorsRequest;
                fromAmino(object: _113.QueryValidatorsRequestAmino): _113.QueryValidatorsRequest;
                toAmino(message: _113.QueryValidatorsRequest): _113.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _113.QueryValidatorsRequestAminoMsg): _113.QueryValidatorsRequest;
                toAminoMsg(message: _113.QueryValidatorsRequest): _113.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryValidatorsRequestProtoMsg): _113.QueryValidatorsRequest;
                toProto(message: _113.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryValidatorsRequest): _113.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _113.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryValidatorsResponse;
                fromPartial(object: Partial<_113.QueryValidatorsResponse>): _113.QueryValidatorsResponse;
                fromAmino(object: _113.QueryValidatorsResponseAmino): _113.QueryValidatorsResponse;
                toAmino(message: _113.QueryValidatorsResponse): _113.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _113.QueryValidatorsResponseAminoMsg): _113.QueryValidatorsResponse;
                toAminoMsg(message: _113.QueryValidatorsResponse): _113.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryValidatorsResponseProtoMsg): _113.QueryValidatorsResponse;
                toProto(message: _113.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryValidatorsResponse): _113.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _113.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryValidatorRequest;
                fromPartial(object: Partial<_113.QueryValidatorRequest>): _113.QueryValidatorRequest;
                fromAmino(object: _113.QueryValidatorRequestAmino): _113.QueryValidatorRequest;
                toAmino(message: _113.QueryValidatorRequest): _113.QueryValidatorRequestAmino;
                fromAminoMsg(object: _113.QueryValidatorRequestAminoMsg): _113.QueryValidatorRequest;
                toAminoMsg(message: _113.QueryValidatorRequest): _113.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _113.QueryValidatorRequestProtoMsg): _113.QueryValidatorRequest;
                toProto(message: _113.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _113.QueryValidatorRequest): _113.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _113.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryValidatorResponse;
                fromPartial(object: Partial<_113.QueryValidatorResponse>): _113.QueryValidatorResponse;
                fromAmino(object: _113.QueryValidatorResponseAmino): _113.QueryValidatorResponse;
                toAmino(message: _113.QueryValidatorResponse): _113.QueryValidatorResponseAmino;
                fromAminoMsg(object: _113.QueryValidatorResponseAminoMsg): _113.QueryValidatorResponse;
                toAminoMsg(message: _113.QueryValidatorResponse): _113.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _113.QueryValidatorResponseProtoMsg): _113.QueryValidatorResponse;
                toProto(message: _113.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _113.QueryValidatorResponse): _113.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _113.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_113.QueryValidatorDelegationsRequest>): _113.QueryValidatorDelegationsRequest;
                fromAmino(object: _113.QueryValidatorDelegationsRequestAmino): _113.QueryValidatorDelegationsRequest;
                toAmino(message: _113.QueryValidatorDelegationsRequest): _113.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _113.QueryValidatorDelegationsRequestAminoMsg): _113.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _113.QueryValidatorDelegationsRequest): _113.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryValidatorDelegationsRequestProtoMsg): _113.QueryValidatorDelegationsRequest;
                toProto(message: _113.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryValidatorDelegationsRequest): _113.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _113.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_113.QueryValidatorDelegationsResponse>): _113.QueryValidatorDelegationsResponse;
                fromAmino(object: _113.QueryValidatorDelegationsResponseAmino): _113.QueryValidatorDelegationsResponse;
                toAmino(message: _113.QueryValidatorDelegationsResponse): _113.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _113.QueryValidatorDelegationsResponseAminoMsg): _113.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _113.QueryValidatorDelegationsResponse): _113.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryValidatorDelegationsResponseProtoMsg): _113.QueryValidatorDelegationsResponse;
                toProto(message: _113.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryValidatorDelegationsResponse): _113.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _113.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_113.QueryValidatorUnbondingDelegationsRequest>): _113.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _113.QueryValidatorUnbondingDelegationsRequestAmino): _113.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _113.QueryValidatorUnbondingDelegationsRequest): _113.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _113.QueryValidatorUnbondingDelegationsRequestAminoMsg): _113.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _113.QueryValidatorUnbondingDelegationsRequest): _113.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryValidatorUnbondingDelegationsRequestProtoMsg): _113.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _113.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryValidatorUnbondingDelegationsRequest): _113.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _113.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_113.QueryValidatorUnbondingDelegationsResponse>): _113.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _113.QueryValidatorUnbondingDelegationsResponseAmino): _113.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _113.QueryValidatorUnbondingDelegationsResponse): _113.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _113.QueryValidatorUnbondingDelegationsResponseAminoMsg): _113.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _113.QueryValidatorUnbondingDelegationsResponse): _113.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryValidatorUnbondingDelegationsResponseProtoMsg): _113.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _113.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryValidatorUnbondingDelegationsResponse): _113.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _113.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryDelegationRequest;
                fromPartial(object: Partial<_113.QueryDelegationRequest>): _113.QueryDelegationRequest;
                fromAmino(object: _113.QueryDelegationRequestAmino): _113.QueryDelegationRequest;
                toAmino(message: _113.QueryDelegationRequest): _113.QueryDelegationRequestAmino;
                fromAminoMsg(object: _113.QueryDelegationRequestAminoMsg): _113.QueryDelegationRequest;
                toAminoMsg(message: _113.QueryDelegationRequest): _113.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _113.QueryDelegationRequestProtoMsg): _113.QueryDelegationRequest;
                toProto(message: _113.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _113.QueryDelegationRequest): _113.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _113.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryDelegationResponse;
                fromPartial(object: Partial<_113.QueryDelegationResponse>): _113.QueryDelegationResponse;
                fromAmino(object: _113.QueryDelegationResponseAmino): _113.QueryDelegationResponse;
                toAmino(message: _113.QueryDelegationResponse): _113.QueryDelegationResponseAmino;
                fromAminoMsg(object: _113.QueryDelegationResponseAminoMsg): _113.QueryDelegationResponse;
                toAminoMsg(message: _113.QueryDelegationResponse): _113.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _113.QueryDelegationResponseProtoMsg): _113.QueryDelegationResponse;
                toProto(message: _113.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _113.QueryDelegationResponse): _113.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _113.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_113.QueryUnbondingDelegationRequest>): _113.QueryUnbondingDelegationRequest;
                fromAmino(object: _113.QueryUnbondingDelegationRequestAmino): _113.QueryUnbondingDelegationRequest;
                toAmino(message: _113.QueryUnbondingDelegationRequest): _113.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _113.QueryUnbondingDelegationRequestAminoMsg): _113.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _113.QueryUnbondingDelegationRequest): _113.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _113.QueryUnbondingDelegationRequestProtoMsg): _113.QueryUnbondingDelegationRequest;
                toProto(message: _113.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _113.QueryUnbondingDelegationRequest): _113.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _113.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_113.QueryUnbondingDelegationResponse>): _113.QueryUnbondingDelegationResponse;
                fromAmino(object: _113.QueryUnbondingDelegationResponseAmino): _113.QueryUnbondingDelegationResponse;
                toAmino(message: _113.QueryUnbondingDelegationResponse): _113.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _113.QueryUnbondingDelegationResponseAminoMsg): _113.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _113.QueryUnbondingDelegationResponse): _113.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _113.QueryUnbondingDelegationResponseProtoMsg): _113.QueryUnbondingDelegationResponse;
                toProto(message: _113.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _113.QueryUnbondingDelegationResponse): _113.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _113.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_113.QueryDelegatorDelegationsRequest>): _113.QueryDelegatorDelegationsRequest;
                fromAmino(object: _113.QueryDelegatorDelegationsRequestAmino): _113.QueryDelegatorDelegationsRequest;
                toAmino(message: _113.QueryDelegatorDelegationsRequest): _113.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _113.QueryDelegatorDelegationsRequestAminoMsg): _113.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _113.QueryDelegatorDelegationsRequest): _113.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryDelegatorDelegationsRequestProtoMsg): _113.QueryDelegatorDelegationsRequest;
                toProto(message: _113.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryDelegatorDelegationsRequest): _113.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _113.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_113.QueryDelegatorDelegationsResponse>): _113.QueryDelegatorDelegationsResponse;
                fromAmino(object: _113.QueryDelegatorDelegationsResponseAmino): _113.QueryDelegatorDelegationsResponse;
                toAmino(message: _113.QueryDelegatorDelegationsResponse): _113.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _113.QueryDelegatorDelegationsResponseAminoMsg): _113.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _113.QueryDelegatorDelegationsResponse): _113.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryDelegatorDelegationsResponseProtoMsg): _113.QueryDelegatorDelegationsResponse;
                toProto(message: _113.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryDelegatorDelegationsResponse): _113.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _113.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_113.QueryDelegatorUnbondingDelegationsRequest>): _113.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _113.QueryDelegatorUnbondingDelegationsRequestAmino): _113.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _113.QueryDelegatorUnbondingDelegationsRequest): _113.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _113.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _113.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _113.QueryDelegatorUnbondingDelegationsRequest): _113.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _113.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _113.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryDelegatorUnbondingDelegationsRequest): _113.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _113.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_113.QueryDelegatorUnbondingDelegationsResponse>): _113.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _113.QueryDelegatorUnbondingDelegationsResponseAmino): _113.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _113.QueryDelegatorUnbondingDelegationsResponse): _113.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _113.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _113.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _113.QueryDelegatorUnbondingDelegationsResponse): _113.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _113.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _113.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryDelegatorUnbondingDelegationsResponse): _113.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _113.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryRedelegationsRequest;
                fromPartial(object: Partial<_113.QueryRedelegationsRequest>): _113.QueryRedelegationsRequest;
                fromAmino(object: _113.QueryRedelegationsRequestAmino): _113.QueryRedelegationsRequest;
                toAmino(message: _113.QueryRedelegationsRequest): _113.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _113.QueryRedelegationsRequestAminoMsg): _113.QueryRedelegationsRequest;
                toAminoMsg(message: _113.QueryRedelegationsRequest): _113.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryRedelegationsRequestProtoMsg): _113.QueryRedelegationsRequest;
                toProto(message: _113.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryRedelegationsRequest): _113.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _113.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryRedelegationsResponse;
                fromPartial(object: Partial<_113.QueryRedelegationsResponse>): _113.QueryRedelegationsResponse;
                fromAmino(object: _113.QueryRedelegationsResponseAmino): _113.QueryRedelegationsResponse;
                toAmino(message: _113.QueryRedelegationsResponse): _113.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _113.QueryRedelegationsResponseAminoMsg): _113.QueryRedelegationsResponse;
                toAminoMsg(message: _113.QueryRedelegationsResponse): _113.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryRedelegationsResponseProtoMsg): _113.QueryRedelegationsResponse;
                toProto(message: _113.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryRedelegationsResponse): _113.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _113.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_113.QueryDelegatorValidatorsRequest>): _113.QueryDelegatorValidatorsRequest;
                fromAmino(object: _113.QueryDelegatorValidatorsRequestAmino): _113.QueryDelegatorValidatorsRequest;
                toAmino(message: _113.QueryDelegatorValidatorsRequest): _113.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _113.QueryDelegatorValidatorsRequestAminoMsg): _113.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _113.QueryDelegatorValidatorsRequest): _113.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryDelegatorValidatorsRequestProtoMsg): _113.QueryDelegatorValidatorsRequest;
                toProto(message: _113.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryDelegatorValidatorsRequest): _113.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _113.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_113.QueryDelegatorValidatorsResponse>): _113.QueryDelegatorValidatorsResponse;
                fromAmino(object: _113.QueryDelegatorValidatorsResponseAmino): _113.QueryDelegatorValidatorsResponse;
                toAmino(message: _113.QueryDelegatorValidatorsResponse): _113.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _113.QueryDelegatorValidatorsResponseAminoMsg): _113.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _113.QueryDelegatorValidatorsResponse): _113.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryDelegatorValidatorsResponseProtoMsg): _113.QueryDelegatorValidatorsResponse;
                toProto(message: _113.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryDelegatorValidatorsResponse): _113.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _113.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_113.QueryDelegatorValidatorRequest>): _113.QueryDelegatorValidatorRequest;
                fromAmino(object: _113.QueryDelegatorValidatorRequestAmino): _113.QueryDelegatorValidatorRequest;
                toAmino(message: _113.QueryDelegatorValidatorRequest): _113.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _113.QueryDelegatorValidatorRequestAminoMsg): _113.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _113.QueryDelegatorValidatorRequest): _113.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _113.QueryDelegatorValidatorRequestProtoMsg): _113.QueryDelegatorValidatorRequest;
                toProto(message: _113.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _113.QueryDelegatorValidatorRequest): _113.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _113.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_113.QueryDelegatorValidatorResponse>): _113.QueryDelegatorValidatorResponse;
                fromAmino(object: _113.QueryDelegatorValidatorResponseAmino): _113.QueryDelegatorValidatorResponse;
                toAmino(message: _113.QueryDelegatorValidatorResponse): _113.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _113.QueryDelegatorValidatorResponseAminoMsg): _113.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _113.QueryDelegatorValidatorResponse): _113.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _113.QueryDelegatorValidatorResponseProtoMsg): _113.QueryDelegatorValidatorResponse;
                toProto(message: _113.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _113.QueryDelegatorValidatorResponse): _113.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _113.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_113.QueryHistoricalInfoRequest>): _113.QueryHistoricalInfoRequest;
                fromAmino(object: _113.QueryHistoricalInfoRequestAmino): _113.QueryHistoricalInfoRequest;
                toAmino(message: _113.QueryHistoricalInfoRequest): _113.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _113.QueryHistoricalInfoRequestAminoMsg): _113.QueryHistoricalInfoRequest;
                toAminoMsg(message: _113.QueryHistoricalInfoRequest): _113.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _113.QueryHistoricalInfoRequestProtoMsg): _113.QueryHistoricalInfoRequest;
                toProto(message: _113.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _113.QueryHistoricalInfoRequest): _113.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _113.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_113.QueryHistoricalInfoResponse>): _113.QueryHistoricalInfoResponse;
                fromAmino(object: _113.QueryHistoricalInfoResponseAmino): _113.QueryHistoricalInfoResponse;
                toAmino(message: _113.QueryHistoricalInfoResponse): _113.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _113.QueryHistoricalInfoResponseAminoMsg): _113.QueryHistoricalInfoResponse;
                toAminoMsg(message: _113.QueryHistoricalInfoResponse): _113.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _113.QueryHistoricalInfoResponseProtoMsg): _113.QueryHistoricalInfoResponse;
                toProto(message: _113.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _113.QueryHistoricalInfoResponse): _113.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _113.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.QueryPoolRequest;
                fromPartial(_: Partial<_113.QueryPoolRequest>): _113.QueryPoolRequest;
                fromAmino(_: _113.QueryPoolRequestAmino): _113.QueryPoolRequest;
                toAmino(_: _113.QueryPoolRequest): _113.QueryPoolRequestAmino;
                fromAminoMsg(object: _113.QueryPoolRequestAminoMsg): _113.QueryPoolRequest;
                toAminoMsg(message: _113.QueryPoolRequest): _113.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _113.QueryPoolRequestProtoMsg): _113.QueryPoolRequest;
                toProto(message: _113.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _113.QueryPoolRequest): _113.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _113.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryPoolResponse;
                fromPartial(object: Partial<_113.QueryPoolResponse>): _113.QueryPoolResponse;
                fromAmino(object: _113.QueryPoolResponseAmino): _113.QueryPoolResponse;
                toAmino(message: _113.QueryPoolResponse): _113.QueryPoolResponseAmino;
                fromAminoMsg(object: _113.QueryPoolResponseAminoMsg): _113.QueryPoolResponse;
                toAminoMsg(message: _113.QueryPoolResponse): _113.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _113.QueryPoolResponseProtoMsg): _113.QueryPoolResponse;
                toProto(message: _113.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _113.QueryPoolResponse): _113.QueryPoolResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _112.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.LastValidatorPower;
                fromPartial(object: Partial<_112.LastValidatorPower>): _112.LastValidatorPower;
                fromAmino(object: _112.LastValidatorPowerAmino): _112.LastValidatorPower;
                toAmino(message: _112.LastValidatorPower): _112.LastValidatorPowerAmino;
                fromAminoMsg(object: _112.LastValidatorPowerAminoMsg): _112.LastValidatorPower;
                toAminoMsg(message: _112.LastValidatorPower): _112.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _112.LastValidatorPowerProtoMsg): _112.LastValidatorPower;
                toProto(message: _112.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _112.LastValidatorPower): _112.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _111.AuthorizationType;
            authorizationTypeToJSON(object: _111.AuthorizationType): string;
            AuthorizationType: typeof _111.AuthorizationType;
            AuthorizationTypeSDKType: typeof _111.AuthorizationType;
            AuthorizationTypeAmino: typeof _111.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _111.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.StakeAuthorization;
                fromPartial(object: Partial<_111.StakeAuthorization>): _111.StakeAuthorization;
                fromAmino(object: _111.StakeAuthorizationAmino): _111.StakeAuthorization;
                toAmino(message: _111.StakeAuthorization): _111.StakeAuthorizationAmino;
                fromAminoMsg(object: _111.StakeAuthorizationAminoMsg): _111.StakeAuthorization;
                toAminoMsg(message: _111.StakeAuthorization): _111.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _111.StakeAuthorizationProtoMsg): _111.StakeAuthorization;
                toProto(message: _111.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _111.StakeAuthorization): _111.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _111.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.StakeAuthorization_Validators;
                fromPartial(object: Partial<_111.StakeAuthorization_Validators>): _111.StakeAuthorization_Validators;
                fromAmino(object: _111.StakeAuthorization_ValidatorsAmino): _111.StakeAuthorization_Validators;
                toAmino(message: _111.StakeAuthorization_Validators): _111.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _111.StakeAuthorization_ValidatorsAminoMsg): _111.StakeAuthorization_Validators;
                toAminoMsg(message: _111.StakeAuthorization_Validators): _111.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _111.StakeAuthorization_ValidatorsProtoMsg): _111.StakeAuthorization_Validators;
                toProto(message: _111.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _111.StakeAuthorization_Validators): _111.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _116.SignMode;
                signModeToJSON(object: _116.SignMode): string;
                SignMode: typeof _116.SignMode;
                SignModeSDKType: typeof _116.SignMode;
                SignModeAmino: typeof _116.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptors;
                    fromPartial(object: Partial<_116.SignatureDescriptors>): _116.SignatureDescriptors;
                    fromAmino(object: _116.SignatureDescriptorsAmino): _116.SignatureDescriptors;
                    toAmino(message: _116.SignatureDescriptors): _116.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _116.SignatureDescriptorsAminoMsg): _116.SignatureDescriptors;
                    toAminoMsg(message: _116.SignatureDescriptors): _116.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptorsProtoMsg): _116.SignatureDescriptors;
                    toProto(message: _116.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptors): _116.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor;
                    fromPartial(object: Partial<_116.SignatureDescriptor>): _116.SignatureDescriptor;
                    fromAmino(object: _116.SignatureDescriptorAmino): _116.SignatureDescriptor;
                    toAmino(message: _116.SignatureDescriptor): _116.SignatureDescriptorAmino;
                    fromAminoMsg(object: _116.SignatureDescriptorAminoMsg): _116.SignatureDescriptor;
                    toAminoMsg(message: _116.SignatureDescriptor): _116.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptorProtoMsg): _116.SignatureDescriptor;
                    toProto(message: _116.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor): _116.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data>): _116.SignatureDescriptor_Data;
                    fromAmino(object: _116.SignatureDescriptor_DataAmino): _116.SignatureDescriptor_Data;
                    toAmino(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_DataAminoMsg): _116.SignatureDescriptor_Data;
                    toAminoMsg(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_DataProtoMsg): _116.SignatureDescriptor_Data;
                    toProto(message: _116.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data_Single>): _116.SignatureDescriptor_Data_Single;
                    fromAmino(object: _116.SignatureDescriptor_Data_SingleAmino): _116.SignatureDescriptor_Data_Single;
                    toAmino(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_Data_SingleAminoMsg): _116.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_Data_SingleProtoMsg): _116.SignatureDescriptor_Data_Single;
                    toProto(message: _116.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data_Multi>): _116.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _116.SignatureDescriptor_Data_MultiAmino): _116.SignatureDescriptor_Data_Multi;
                    toAmino(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_Data_MultiAminoMsg): _116.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_Data_MultiProtoMsg): _116.SignatureDescriptor_Data_Multi;
                    toProto(message: _116.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _216.ServiceClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                simulate(request: _117.SimulateRequest): Promise<_117.SimulateResponse>;
                getTx(request: _117.GetTxRequest): Promise<_117.GetTxResponse>;
                broadcastTx(request: _117.BroadcastTxRequest): Promise<_117.BroadcastTxResponse>;
                getTxsEvent(request: _117.GetTxsEventRequest): Promise<_117.GetTxsEventResponse>;
                getBlockWithTxs(request: _117.GetBlockWithTxsRequest): Promise<_117.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _197.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _118.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Tx;
                fromPartial(object: Partial<_118.Tx>): _118.Tx;
                fromAmino(object: _118.TxAmino): _118.Tx;
                toAmino(message: _118.Tx): _118.TxAmino;
                fromAminoMsg(object: _118.TxAminoMsg): _118.Tx;
                toAminoMsg(message: _118.Tx): _118.TxAminoMsg;
                fromProtoMsg(message: _118.TxProtoMsg): _118.Tx;
                toProto(message: _118.Tx): Uint8Array;
                toProtoMsg(message: _118.Tx): _118.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _118.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TxRaw;
                fromPartial(object: Partial<_118.TxRaw>): _118.TxRaw;
                fromAmino(object: _118.TxRawAmino): _118.TxRaw;
                toAmino(message: _118.TxRaw): _118.TxRawAmino;
                fromAminoMsg(object: _118.TxRawAminoMsg): _118.TxRaw;
                toAminoMsg(message: _118.TxRaw): _118.TxRawAminoMsg;
                fromProtoMsg(message: _118.TxRawProtoMsg): _118.TxRaw;
                toProto(message: _118.TxRaw): Uint8Array;
                toProtoMsg(message: _118.TxRaw): _118.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _118.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SignDoc;
                fromPartial(object: Partial<_118.SignDoc>): _118.SignDoc;
                fromAmino(object: _118.SignDocAmino): _118.SignDoc;
                toAmino(message: _118.SignDoc): _118.SignDocAmino;
                fromAminoMsg(object: _118.SignDocAminoMsg): _118.SignDoc;
                toAminoMsg(message: _118.SignDoc): _118.SignDocAminoMsg;
                fromProtoMsg(message: _118.SignDocProtoMsg): _118.SignDoc;
                toProto(message: _118.SignDoc): Uint8Array;
                toProtoMsg(message: _118.SignDoc): _118.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _118.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SignDocDirectAux;
                fromPartial(object: Partial<_118.SignDocDirectAux>): _118.SignDocDirectAux;
                fromAmino(object: _118.SignDocDirectAuxAmino): _118.SignDocDirectAux;
                toAmino(message: _118.SignDocDirectAux): _118.SignDocDirectAuxAmino;
                fromAminoMsg(object: _118.SignDocDirectAuxAminoMsg): _118.SignDocDirectAux;
                toAminoMsg(message: _118.SignDocDirectAux): _118.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _118.SignDocDirectAuxProtoMsg): _118.SignDocDirectAux;
                toProto(message: _118.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _118.SignDocDirectAux): _118.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _118.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TxBody;
                fromPartial(object: Partial<_118.TxBody>): _118.TxBody;
                fromAmino(object: _118.TxBodyAmino): _118.TxBody;
                toAmino(message: _118.TxBody): _118.TxBodyAmino;
                fromAminoMsg(object: _118.TxBodyAminoMsg): _118.TxBody;
                toAminoMsg(message: _118.TxBody): _118.TxBodyAminoMsg;
                fromProtoMsg(message: _118.TxBodyProtoMsg): _118.TxBody;
                toProto(message: _118.TxBody): Uint8Array;
                toProtoMsg(message: _118.TxBody): _118.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _118.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.AuthInfo;
                fromPartial(object: Partial<_118.AuthInfo>): _118.AuthInfo;
                fromAmino(object: _118.AuthInfoAmino): _118.AuthInfo;
                toAmino(message: _118.AuthInfo): _118.AuthInfoAmino;
                fromAminoMsg(object: _118.AuthInfoAminoMsg): _118.AuthInfo;
                toAminoMsg(message: _118.AuthInfo): _118.AuthInfoAminoMsg;
                fromProtoMsg(message: _118.AuthInfoProtoMsg): _118.AuthInfo;
                toProto(message: _118.AuthInfo): Uint8Array;
                toProtoMsg(message: _118.AuthInfo): _118.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _118.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SignerInfo;
                fromPartial(object: Partial<_118.SignerInfo>): _118.SignerInfo;
                fromAmino(object: _118.SignerInfoAmino): _118.SignerInfo;
                toAmino(message: _118.SignerInfo): _118.SignerInfoAmino;
                fromAminoMsg(object: _118.SignerInfoAminoMsg): _118.SignerInfo;
                toAminoMsg(message: _118.SignerInfo): _118.SignerInfoAminoMsg;
                fromProtoMsg(message: _118.SignerInfoProtoMsg): _118.SignerInfo;
                toProto(message: _118.SignerInfo): Uint8Array;
                toProtoMsg(message: _118.SignerInfo): _118.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _118.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ModeInfo;
                fromPartial(object: Partial<_118.ModeInfo>): _118.ModeInfo;
                fromAmino(object: _118.ModeInfoAmino): _118.ModeInfo;
                toAmino(message: _118.ModeInfo): _118.ModeInfoAmino;
                fromAminoMsg(object: _118.ModeInfoAminoMsg): _118.ModeInfo;
                toAminoMsg(message: _118.ModeInfo): _118.ModeInfoAminoMsg;
                fromProtoMsg(message: _118.ModeInfoProtoMsg): _118.ModeInfo;
                toProto(message: _118.ModeInfo): Uint8Array;
                toProtoMsg(message: _118.ModeInfo): _118.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _118.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ModeInfo_Single;
                fromPartial(object: Partial<_118.ModeInfo_Single>): _118.ModeInfo_Single;
                fromAmino(object: _118.ModeInfo_SingleAmino): _118.ModeInfo_Single;
                toAmino(message: _118.ModeInfo_Single): _118.ModeInfo_SingleAmino;
                fromAminoMsg(object: _118.ModeInfo_SingleAminoMsg): _118.ModeInfo_Single;
                toAminoMsg(message: _118.ModeInfo_Single): _118.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _118.ModeInfo_SingleProtoMsg): _118.ModeInfo_Single;
                toProto(message: _118.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _118.ModeInfo_Single): _118.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _118.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ModeInfo_Multi;
                fromPartial(object: Partial<_118.ModeInfo_Multi>): _118.ModeInfo_Multi;
                fromAmino(object: _118.ModeInfo_MultiAmino): _118.ModeInfo_Multi;
                toAmino(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiAmino;
                fromAminoMsg(object: _118.ModeInfo_MultiAminoMsg): _118.ModeInfo_Multi;
                toAminoMsg(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _118.ModeInfo_MultiProtoMsg): _118.ModeInfo_Multi;
                toProto(message: _118.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _118.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Fee;
                fromPartial(object: Partial<_118.Fee>): _118.Fee;
                fromAmino(object: _118.FeeAmino): _118.Fee;
                toAmino(message: _118.Fee): _118.FeeAmino;
                fromAminoMsg(object: _118.FeeAminoMsg): _118.Fee;
                toAminoMsg(message: _118.Fee): _118.FeeAminoMsg;
                fromProtoMsg(message: _118.FeeProtoMsg): _118.Fee;
                toProto(message: _118.Fee): Uint8Array;
                toProtoMsg(message: _118.Fee): _118.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _118.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Tip;
                fromPartial(object: Partial<_118.Tip>): _118.Tip;
                fromAmino(object: _118.TipAmino): _118.Tip;
                toAmino(message: _118.Tip): _118.TipAmino;
                fromAminoMsg(object: _118.TipAminoMsg): _118.Tip;
                toAminoMsg(message: _118.Tip): _118.TipAminoMsg;
                fromProtoMsg(message: _118.TipProtoMsg): _118.Tip;
                toProto(message: _118.Tip): Uint8Array;
                toProtoMsg(message: _118.Tip): _118.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _118.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.AuxSignerData;
                fromPartial(object: Partial<_118.AuxSignerData>): _118.AuxSignerData;
                fromAmino(object: _118.AuxSignerDataAmino): _118.AuxSignerData;
                toAmino(message: _118.AuxSignerData): _118.AuxSignerDataAmino;
                fromAminoMsg(object: _118.AuxSignerDataAminoMsg): _118.AuxSignerData;
                toAminoMsg(message: _118.AuxSignerData): _118.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _118.AuxSignerDataProtoMsg): _118.AuxSignerData;
                toProto(message: _118.AuxSignerData): Uint8Array;
                toProtoMsg(message: _118.AuxSignerData): _118.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _117.OrderBy;
            orderByToJSON(object: _117.OrderBy): string;
            broadcastModeFromJSON(object: any): _117.BroadcastMode;
            broadcastModeToJSON(object: _117.BroadcastMode): string;
            OrderBy: typeof _117.OrderBy;
            OrderBySDKType: typeof _117.OrderBy;
            OrderByAmino: typeof _117.OrderBy;
            BroadcastMode: typeof _117.BroadcastMode;
            BroadcastModeSDKType: typeof _117.BroadcastMode;
            BroadcastModeAmino: typeof _117.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _117.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxsEventRequest;
                fromPartial(object: Partial<_117.GetTxsEventRequest>): _117.GetTxsEventRequest;
                fromAmino(object: _117.GetTxsEventRequestAmino): _117.GetTxsEventRequest;
                toAmino(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestAmino;
                fromAminoMsg(object: _117.GetTxsEventRequestAminoMsg): _117.GetTxsEventRequest;
                toAminoMsg(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _117.GetTxsEventRequestProtoMsg): _117.GetTxsEventRequest;
                toProto(message: _117.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _117.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxsEventResponse;
                fromPartial(object: Partial<_117.GetTxsEventResponse>): _117.GetTxsEventResponse;
                fromAmino(object: _117.GetTxsEventResponseAmino): _117.GetTxsEventResponse;
                toAmino(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseAmino;
                fromAminoMsg(object: _117.GetTxsEventResponseAminoMsg): _117.GetTxsEventResponse;
                toAminoMsg(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _117.GetTxsEventResponseProtoMsg): _117.GetTxsEventResponse;
                toProto(message: _117.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _117.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.BroadcastTxRequest;
                fromPartial(object: Partial<_117.BroadcastTxRequest>): _117.BroadcastTxRequest;
                fromAmino(object: _117.BroadcastTxRequestAmino): _117.BroadcastTxRequest;
                toAmino(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestAmino;
                fromAminoMsg(object: _117.BroadcastTxRequestAminoMsg): _117.BroadcastTxRequest;
                toAminoMsg(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _117.BroadcastTxRequestProtoMsg): _117.BroadcastTxRequest;
                toProto(message: _117.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _117.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.BroadcastTxResponse;
                fromPartial(object: Partial<_117.BroadcastTxResponse>): _117.BroadcastTxResponse;
                fromAmino(object: _117.BroadcastTxResponseAmino): _117.BroadcastTxResponse;
                toAmino(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseAmino;
                fromAminoMsg(object: _117.BroadcastTxResponseAminoMsg): _117.BroadcastTxResponse;
                toAminoMsg(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _117.BroadcastTxResponseProtoMsg): _117.BroadcastTxResponse;
                toProto(message: _117.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _117.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SimulateRequest;
                fromPartial(object: Partial<_117.SimulateRequest>): _117.SimulateRequest;
                fromAmino(object: _117.SimulateRequestAmino): _117.SimulateRequest;
                toAmino(message: _117.SimulateRequest): _117.SimulateRequestAmino;
                fromAminoMsg(object: _117.SimulateRequestAminoMsg): _117.SimulateRequest;
                toAminoMsg(message: _117.SimulateRequest): _117.SimulateRequestAminoMsg;
                fromProtoMsg(message: _117.SimulateRequestProtoMsg): _117.SimulateRequest;
                toProto(message: _117.SimulateRequest): Uint8Array;
                toProtoMsg(message: _117.SimulateRequest): _117.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _117.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SimulateResponse;
                fromPartial(object: Partial<_117.SimulateResponse>): _117.SimulateResponse;
                fromAmino(object: _117.SimulateResponseAmino): _117.SimulateResponse;
                toAmino(message: _117.SimulateResponse): _117.SimulateResponseAmino;
                fromAminoMsg(object: _117.SimulateResponseAminoMsg): _117.SimulateResponse;
                toAminoMsg(message: _117.SimulateResponse): _117.SimulateResponseAminoMsg;
                fromProtoMsg(message: _117.SimulateResponseProtoMsg): _117.SimulateResponse;
                toProto(message: _117.SimulateResponse): Uint8Array;
                toProtoMsg(message: _117.SimulateResponse): _117.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _117.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxRequest;
                fromPartial(object: Partial<_117.GetTxRequest>): _117.GetTxRequest;
                fromAmino(object: _117.GetTxRequestAmino): _117.GetTxRequest;
                toAmino(message: _117.GetTxRequest): _117.GetTxRequestAmino;
                fromAminoMsg(object: _117.GetTxRequestAminoMsg): _117.GetTxRequest;
                toAminoMsg(message: _117.GetTxRequest): _117.GetTxRequestAminoMsg;
                fromProtoMsg(message: _117.GetTxRequestProtoMsg): _117.GetTxRequest;
                toProto(message: _117.GetTxRequest): Uint8Array;
                toProtoMsg(message: _117.GetTxRequest): _117.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _117.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxResponse;
                fromPartial(object: Partial<_117.GetTxResponse>): _117.GetTxResponse;
                fromAmino(object: _117.GetTxResponseAmino): _117.GetTxResponse;
                toAmino(message: _117.GetTxResponse): _117.GetTxResponseAmino;
                fromAminoMsg(object: _117.GetTxResponseAminoMsg): _117.GetTxResponse;
                toAminoMsg(message: _117.GetTxResponse): _117.GetTxResponseAminoMsg;
                fromProtoMsg(message: _117.GetTxResponseProtoMsg): _117.GetTxResponse;
                toProto(message: _117.GetTxResponse): Uint8Array;
                toProtoMsg(message: _117.GetTxResponse): _117.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _117.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_117.GetBlockWithTxsRequest>): _117.GetBlockWithTxsRequest;
                fromAmino(object: _117.GetBlockWithTxsRequestAmino): _117.GetBlockWithTxsRequest;
                toAmino(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _117.GetBlockWithTxsRequestAminoMsg): _117.GetBlockWithTxsRequest;
                toAminoMsg(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _117.GetBlockWithTxsRequestProtoMsg): _117.GetBlockWithTxsRequest;
                toProto(message: _117.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _117.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_117.GetBlockWithTxsResponse>): _117.GetBlockWithTxsResponse;
                fromAmino(object: _117.GetBlockWithTxsResponseAmino): _117.GetBlockWithTxsResponse;
                toAmino(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _117.GetBlockWithTxsResponseAminoMsg): _117.GetBlockWithTxsResponse;
                toAminoMsg(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _117.GetBlockWithTxsResponseProtoMsg): _117.GetBlockWithTxsResponse;
                toProto(message: _117.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                currentPlan(request?: _119.QueryCurrentPlanRequest): Promise<_119.QueryCurrentPlanResponse>;
                appliedPlan(request: _119.QueryAppliedPlanRequest): Promise<_119.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _119.QueryUpgradedConsensusStateRequest): Promise<_119.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _119.QueryModuleVersionsRequest): Promise<_119.QueryModuleVersionsResponse>;
                authority(request?: _119.QueryAuthorityRequest): Promise<_119.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _120.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _120.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _120.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _120.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _120.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _120.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _120.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _120.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _120.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _120.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _120.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _120.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _120.MsgSoftwareUpgrade) => _120.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _120.MsgSoftwareUpgradeAmino) => _120.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _120.MsgCancelUpgrade) => _120.MsgCancelUpgradeAmino;
                    fromAmino: (object: _120.MsgCancelUpgradeAmino) => _120.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _121.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.Plan;
                fromPartial(object: Partial<_121.Plan>): _121.Plan;
                fromAmino(object: _121.PlanAmino): _121.Plan;
                toAmino(message: _121.Plan): _121.PlanAmino;
                fromAminoMsg(object: _121.PlanAminoMsg): _121.Plan;
                toAminoMsg(message: _121.Plan): _121.PlanAminoMsg;
                fromProtoMsg(message: _121.PlanProtoMsg): _121.Plan;
                toProto(message: _121.Plan): Uint8Array;
                toProtoMsg(message: _121.Plan): _121.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _121.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_121.SoftwareUpgradeProposal>): _121.SoftwareUpgradeProposal;
                fromAmino(object: _121.SoftwareUpgradeProposalAmino): _121.SoftwareUpgradeProposal;
                toAmino(message: _121.SoftwareUpgradeProposal): _121.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _121.SoftwareUpgradeProposalAminoMsg): _121.SoftwareUpgradeProposal;
                toAminoMsg(message: _121.SoftwareUpgradeProposal): _121.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _121.SoftwareUpgradeProposalProtoMsg): _121.SoftwareUpgradeProposal;
                toProto(message: _121.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _121.SoftwareUpgradeProposal): _121.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _121.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_121.CancelSoftwareUpgradeProposal>): _121.CancelSoftwareUpgradeProposal;
                fromAmino(object: _121.CancelSoftwareUpgradeProposalAmino): _121.CancelSoftwareUpgradeProposal;
                toAmino(message: _121.CancelSoftwareUpgradeProposal): _121.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _121.CancelSoftwareUpgradeProposalAminoMsg): _121.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _121.CancelSoftwareUpgradeProposal): _121.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _121.CancelSoftwareUpgradeProposalProtoMsg): _121.CancelSoftwareUpgradeProposal;
                toProto(message: _121.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _121.CancelSoftwareUpgradeProposal): _121.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _121.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ModuleVersion;
                fromPartial(object: Partial<_121.ModuleVersion>): _121.ModuleVersion;
                fromAmino(object: _121.ModuleVersionAmino): _121.ModuleVersion;
                toAmino(message: _121.ModuleVersion): _121.ModuleVersionAmino;
                fromAminoMsg(object: _121.ModuleVersionAminoMsg): _121.ModuleVersion;
                toAminoMsg(message: _121.ModuleVersion): _121.ModuleVersionAminoMsg;
                fromProtoMsg(message: _121.ModuleVersionProtoMsg): _121.ModuleVersion;
                toProto(message: _121.ModuleVersion): Uint8Array;
                toProtoMsg(message: _121.ModuleVersion): _121.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _120.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_120.MsgSoftwareUpgrade>): _120.MsgSoftwareUpgrade;
                fromAmino(object: _120.MsgSoftwareUpgradeAmino): _120.MsgSoftwareUpgrade;
                toAmino(message: _120.MsgSoftwareUpgrade): _120.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _120.MsgSoftwareUpgradeAminoMsg): _120.MsgSoftwareUpgrade;
                toAminoMsg(message: _120.MsgSoftwareUpgrade): _120.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _120.MsgSoftwareUpgradeProtoMsg): _120.MsgSoftwareUpgrade;
                toProto(message: _120.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _120.MsgSoftwareUpgrade): _120.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _120.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_120.MsgSoftwareUpgradeResponse>): _120.MsgSoftwareUpgradeResponse;
                fromAmino(_: _120.MsgSoftwareUpgradeResponseAmino): _120.MsgSoftwareUpgradeResponse;
                toAmino(_: _120.MsgSoftwareUpgradeResponse): _120.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _120.MsgSoftwareUpgradeResponseAminoMsg): _120.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _120.MsgSoftwareUpgradeResponse): _120.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _120.MsgSoftwareUpgradeResponseProtoMsg): _120.MsgSoftwareUpgradeResponse;
                toProto(message: _120.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _120.MsgSoftwareUpgradeResponse): _120.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _120.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgCancelUpgrade;
                fromPartial(object: Partial<_120.MsgCancelUpgrade>): _120.MsgCancelUpgrade;
                fromAmino(object: _120.MsgCancelUpgradeAmino): _120.MsgCancelUpgrade;
                toAmino(message: _120.MsgCancelUpgrade): _120.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _120.MsgCancelUpgradeAminoMsg): _120.MsgCancelUpgrade;
                toAminoMsg(message: _120.MsgCancelUpgrade): _120.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _120.MsgCancelUpgradeProtoMsg): _120.MsgCancelUpgrade;
                toProto(message: _120.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _120.MsgCancelUpgrade): _120.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _120.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_120.MsgCancelUpgradeResponse>): _120.MsgCancelUpgradeResponse;
                fromAmino(_: _120.MsgCancelUpgradeResponseAmino): _120.MsgCancelUpgradeResponse;
                toAmino(_: _120.MsgCancelUpgradeResponse): _120.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _120.MsgCancelUpgradeResponseAminoMsg): _120.MsgCancelUpgradeResponse;
                toAminoMsg(message: _120.MsgCancelUpgradeResponse): _120.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _120.MsgCancelUpgradeResponseProtoMsg): _120.MsgCancelUpgradeResponse;
                toProto(message: _120.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _120.MsgCancelUpgradeResponse): _120.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _119.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _119.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_119.QueryCurrentPlanRequest>): _119.QueryCurrentPlanRequest;
                fromAmino(_: _119.QueryCurrentPlanRequestAmino): _119.QueryCurrentPlanRequest;
                toAmino(_: _119.QueryCurrentPlanRequest): _119.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _119.QueryCurrentPlanRequestAminoMsg): _119.QueryCurrentPlanRequest;
                toAminoMsg(message: _119.QueryCurrentPlanRequest): _119.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _119.QueryCurrentPlanRequestProtoMsg): _119.QueryCurrentPlanRequest;
                toProto(message: _119.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _119.QueryCurrentPlanRequest): _119.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _119.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_119.QueryCurrentPlanResponse>): _119.QueryCurrentPlanResponse;
                fromAmino(object: _119.QueryCurrentPlanResponseAmino): _119.QueryCurrentPlanResponse;
                toAmino(message: _119.QueryCurrentPlanResponse): _119.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _119.QueryCurrentPlanResponseAminoMsg): _119.QueryCurrentPlanResponse;
                toAminoMsg(message: _119.QueryCurrentPlanResponse): _119.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _119.QueryCurrentPlanResponseProtoMsg): _119.QueryCurrentPlanResponse;
                toProto(message: _119.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _119.QueryCurrentPlanResponse): _119.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _119.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_119.QueryAppliedPlanRequest>): _119.QueryAppliedPlanRequest;
                fromAmino(object: _119.QueryAppliedPlanRequestAmino): _119.QueryAppliedPlanRequest;
                toAmino(message: _119.QueryAppliedPlanRequest): _119.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _119.QueryAppliedPlanRequestAminoMsg): _119.QueryAppliedPlanRequest;
                toAminoMsg(message: _119.QueryAppliedPlanRequest): _119.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _119.QueryAppliedPlanRequestProtoMsg): _119.QueryAppliedPlanRequest;
                toProto(message: _119.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _119.QueryAppliedPlanRequest): _119.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _119.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_119.QueryAppliedPlanResponse>): _119.QueryAppliedPlanResponse;
                fromAmino(object: _119.QueryAppliedPlanResponseAmino): _119.QueryAppliedPlanResponse;
                toAmino(message: _119.QueryAppliedPlanResponse): _119.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _119.QueryAppliedPlanResponseAminoMsg): _119.QueryAppliedPlanResponse;
                toAminoMsg(message: _119.QueryAppliedPlanResponse): _119.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _119.QueryAppliedPlanResponseProtoMsg): _119.QueryAppliedPlanResponse;
                toProto(message: _119.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _119.QueryAppliedPlanResponse): _119.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _119.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_119.QueryUpgradedConsensusStateRequest>): _119.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _119.QueryUpgradedConsensusStateRequestAmino): _119.QueryUpgradedConsensusStateRequest;
                toAmino(message: _119.QueryUpgradedConsensusStateRequest): _119.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _119.QueryUpgradedConsensusStateRequestAminoMsg): _119.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _119.QueryUpgradedConsensusStateRequest): _119.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _119.QueryUpgradedConsensusStateRequestProtoMsg): _119.QueryUpgradedConsensusStateRequest;
                toProto(message: _119.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _119.QueryUpgradedConsensusStateRequest): _119.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _119.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_119.QueryUpgradedConsensusStateResponse>): _119.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _119.QueryUpgradedConsensusStateResponseAmino): _119.QueryUpgradedConsensusStateResponse;
                toAmino(message: _119.QueryUpgradedConsensusStateResponse): _119.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _119.QueryUpgradedConsensusStateResponseAminoMsg): _119.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _119.QueryUpgradedConsensusStateResponse): _119.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _119.QueryUpgradedConsensusStateResponseProtoMsg): _119.QueryUpgradedConsensusStateResponse;
                toProto(message: _119.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _119.QueryUpgradedConsensusStateResponse): _119.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _119.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_119.QueryModuleVersionsRequest>): _119.QueryModuleVersionsRequest;
                fromAmino(object: _119.QueryModuleVersionsRequestAmino): _119.QueryModuleVersionsRequest;
                toAmino(message: _119.QueryModuleVersionsRequest): _119.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _119.QueryModuleVersionsRequestAminoMsg): _119.QueryModuleVersionsRequest;
                toAminoMsg(message: _119.QueryModuleVersionsRequest): _119.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryModuleVersionsRequestProtoMsg): _119.QueryModuleVersionsRequest;
                toProto(message: _119.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryModuleVersionsRequest): _119.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _119.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_119.QueryModuleVersionsResponse>): _119.QueryModuleVersionsResponse;
                fromAmino(object: _119.QueryModuleVersionsResponseAmino): _119.QueryModuleVersionsResponse;
                toAmino(message: _119.QueryModuleVersionsResponse): _119.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _119.QueryModuleVersionsResponseAminoMsg): _119.QueryModuleVersionsResponse;
                toAminoMsg(message: _119.QueryModuleVersionsResponse): _119.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryModuleVersionsResponseProtoMsg): _119.QueryModuleVersionsResponse;
                toProto(message: _119.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryModuleVersionsResponse): _119.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _119.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _119.QueryAuthorityRequest;
                fromPartial(_: Partial<_119.QueryAuthorityRequest>): _119.QueryAuthorityRequest;
                fromAmino(_: _119.QueryAuthorityRequestAmino): _119.QueryAuthorityRequest;
                toAmino(_: _119.QueryAuthorityRequest): _119.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _119.QueryAuthorityRequestAminoMsg): _119.QueryAuthorityRequest;
                toAminoMsg(message: _119.QueryAuthorityRequest): _119.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _119.QueryAuthorityRequestProtoMsg): _119.QueryAuthorityRequest;
                toProto(message: _119.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _119.QueryAuthorityRequest): _119.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _119.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryAuthorityResponse;
                fromPartial(object: Partial<_119.QueryAuthorityResponse>): _119.QueryAuthorityResponse;
                fromAmino(object: _119.QueryAuthorityResponseAmino): _119.QueryAuthorityResponse;
                toAmino(message: _119.QueryAuthorityResponse): _119.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _119.QueryAuthorityResponseAminoMsg): _119.QueryAuthorityResponse;
                toAminoMsg(message: _119.QueryAuthorityResponse): _119.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _119.QueryAuthorityResponseProtoMsg): _119.QueryAuthorityResponse;
                toProto(message: _119.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _119.QueryAuthorityResponse): _119.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _231.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _122.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _122.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _122.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _122.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _122.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _122.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _122.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _122.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _122.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _122.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _122.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _122.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _122.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _122.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _122.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _122.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _122.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _122.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _122.MsgCreateVestingAccount) => _122.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _122.MsgCreateVestingAccountAmino) => _122.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _122.MsgCreatePermanentLockedAccount) => _122.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _122.MsgCreatePermanentLockedAccountAmino) => _122.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _122.MsgCreatePeriodicVestingAccount) => _122.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _122.MsgCreatePeriodicVestingAccountAmino) => _122.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _123.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.BaseVestingAccount;
                fromPartial(object: Partial<_123.BaseVestingAccount>): _123.BaseVestingAccount;
                fromAmino(object: _123.BaseVestingAccountAmino): _123.BaseVestingAccount;
                toAmino(message: _123.BaseVestingAccount): _123.BaseVestingAccountAmino;
                fromAminoMsg(object: _123.BaseVestingAccountAminoMsg): _123.BaseVestingAccount;
                toAminoMsg(message: _123.BaseVestingAccount): _123.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _123.BaseVestingAccountProtoMsg): _123.BaseVestingAccount;
                toProto(message: _123.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _123.BaseVestingAccount): _123.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _123.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.ContinuousVestingAccount;
                fromPartial(object: Partial<_123.ContinuousVestingAccount>): _123.ContinuousVestingAccount;
                fromAmino(object: _123.ContinuousVestingAccountAmino): _123.ContinuousVestingAccount;
                toAmino(message: _123.ContinuousVestingAccount): _123.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _123.ContinuousVestingAccountAminoMsg): _123.ContinuousVestingAccount;
                toAminoMsg(message: _123.ContinuousVestingAccount): _123.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _123.ContinuousVestingAccountProtoMsg): _123.ContinuousVestingAccount;
                toProto(message: _123.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _123.ContinuousVestingAccount): _123.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _123.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.DelayedVestingAccount;
                fromPartial(object: Partial<_123.DelayedVestingAccount>): _123.DelayedVestingAccount;
                fromAmino(object: _123.DelayedVestingAccountAmino): _123.DelayedVestingAccount;
                toAmino(message: _123.DelayedVestingAccount): _123.DelayedVestingAccountAmino;
                fromAminoMsg(object: _123.DelayedVestingAccountAminoMsg): _123.DelayedVestingAccount;
                toAminoMsg(message: _123.DelayedVestingAccount): _123.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _123.DelayedVestingAccountProtoMsg): _123.DelayedVestingAccount;
                toProto(message: _123.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _123.DelayedVestingAccount): _123.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _123.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Period;
                fromPartial(object: Partial<_123.Period>): _123.Period;
                fromAmino(object: _123.PeriodAmino): _123.Period;
                toAmino(message: _123.Period): _123.PeriodAmino;
                fromAminoMsg(object: _123.PeriodAminoMsg): _123.Period;
                toAminoMsg(message: _123.Period): _123.PeriodAminoMsg;
                fromProtoMsg(message: _123.PeriodProtoMsg): _123.Period;
                toProto(message: _123.Period): Uint8Array;
                toProtoMsg(message: _123.Period): _123.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _123.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.PeriodicVestingAccount;
                fromPartial(object: Partial<_123.PeriodicVestingAccount>): _123.PeriodicVestingAccount;
                fromAmino(object: _123.PeriodicVestingAccountAmino): _123.PeriodicVestingAccount;
                toAmino(message: _123.PeriodicVestingAccount): _123.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _123.PeriodicVestingAccountAminoMsg): _123.PeriodicVestingAccount;
                toAminoMsg(message: _123.PeriodicVestingAccount): _123.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _123.PeriodicVestingAccountProtoMsg): _123.PeriodicVestingAccount;
                toProto(message: _123.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _123.PeriodicVestingAccount): _123.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _123.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.PermanentLockedAccount;
                fromPartial(object: Partial<_123.PermanentLockedAccount>): _123.PermanentLockedAccount;
                fromAmino(object: _123.PermanentLockedAccountAmino): _123.PermanentLockedAccount;
                toAmino(message: _123.PermanentLockedAccount): _123.PermanentLockedAccountAmino;
                fromAminoMsg(object: _123.PermanentLockedAccountAminoMsg): _123.PermanentLockedAccount;
                toAminoMsg(message: _123.PermanentLockedAccount): _123.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _123.PermanentLockedAccountProtoMsg): _123.PermanentLockedAccount;
                toProto(message: _123.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _123.PermanentLockedAccount): _123.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _122.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.MsgCreateVestingAccount;
                fromPartial(object: Partial<_122.MsgCreateVestingAccount>): _122.MsgCreateVestingAccount;
                fromAmino(object: _122.MsgCreateVestingAccountAmino): _122.MsgCreateVestingAccount;
                toAmino(message: _122.MsgCreateVestingAccount): _122.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _122.MsgCreateVestingAccountAminoMsg): _122.MsgCreateVestingAccount;
                toAminoMsg(message: _122.MsgCreateVestingAccount): _122.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _122.MsgCreateVestingAccountProtoMsg): _122.MsgCreateVestingAccount;
                toProto(message: _122.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _122.MsgCreateVestingAccount): _122.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _122.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_122.MsgCreateVestingAccountResponse>): _122.MsgCreateVestingAccountResponse;
                fromAmino(_: _122.MsgCreateVestingAccountResponseAmino): _122.MsgCreateVestingAccountResponse;
                toAmino(_: _122.MsgCreateVestingAccountResponse): _122.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _122.MsgCreateVestingAccountResponseAminoMsg): _122.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _122.MsgCreateVestingAccountResponse): _122.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _122.MsgCreateVestingAccountResponseProtoMsg): _122.MsgCreateVestingAccountResponse;
                toProto(message: _122.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _122.MsgCreateVestingAccountResponse): _122.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _122.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_122.MsgCreatePermanentLockedAccount>): _122.MsgCreatePermanentLockedAccount;
                fromAmino(object: _122.MsgCreatePermanentLockedAccountAmino): _122.MsgCreatePermanentLockedAccount;
                toAmino(message: _122.MsgCreatePermanentLockedAccount): _122.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _122.MsgCreatePermanentLockedAccountAminoMsg): _122.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _122.MsgCreatePermanentLockedAccount): _122.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _122.MsgCreatePermanentLockedAccountProtoMsg): _122.MsgCreatePermanentLockedAccount;
                toProto(message: _122.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _122.MsgCreatePermanentLockedAccount): _122.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _122.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_122.MsgCreatePermanentLockedAccountResponse>): _122.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _122.MsgCreatePermanentLockedAccountResponseAmino): _122.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _122.MsgCreatePermanentLockedAccountResponse): _122.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _122.MsgCreatePermanentLockedAccountResponseAminoMsg): _122.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _122.MsgCreatePermanentLockedAccountResponse): _122.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _122.MsgCreatePermanentLockedAccountResponseProtoMsg): _122.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _122.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _122.MsgCreatePermanentLockedAccountResponse): _122.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _122.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_122.MsgCreatePeriodicVestingAccount>): _122.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _122.MsgCreatePeriodicVestingAccountAmino): _122.MsgCreatePeriodicVestingAccount;
                toAmino(message: _122.MsgCreatePeriodicVestingAccount): _122.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _122.MsgCreatePeriodicVestingAccountAminoMsg): _122.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _122.MsgCreatePeriodicVestingAccount): _122.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _122.MsgCreatePeriodicVestingAccountProtoMsg): _122.MsgCreatePeriodicVestingAccount;
                toProto(message: _122.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _122.MsgCreatePeriodicVestingAccount): _122.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _122.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_122.MsgCreatePeriodicVestingAccountResponse>): _122.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _122.MsgCreatePeriodicVestingAccountResponseAmino): _122.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _122.MsgCreatePeriodicVestingAccountResponse): _122.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _122.MsgCreatePeriodicVestingAccountResponseAminoMsg): _122.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _122.MsgCreatePeriodicVestingAccountResponse): _122.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _122.MsgCreatePeriodicVestingAccountResponseProtoMsg): _122.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _122.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _122.MsgCreatePeriodicVestingAccountResponse): _122.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _218.MsgClientImpl;
                };
                bank: {
                    v1beta1: _219.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _220.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _221.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _222.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _223.MsgClientImpl;
                };
                gov: {
                    v1: _224.MsgClientImpl;
                    v1beta1: _225.MsgClientImpl;
                };
                group: {
                    v1: _226.MsgClientImpl;
                };
                nft: {
                    v1beta1: _227.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _228.MsgClientImpl;
                };
                staking: {
                    v1beta1: _229.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _230.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _231.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _31.QueryConfigRequest): Promise<_31.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _34.QueryAccountsRequest): Promise<_34.QueryAccountsResponse>;
                        account(request: _34.QueryAccountRequest): Promise<_34.QueryAccountResponse>;
                        accountAddressByID(request: _34.QueryAccountAddressByIDRequest): Promise<_34.QueryAccountAddressByIDResponse>;
                        params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                        moduleAccounts(request?: _34.QueryModuleAccountsRequest): Promise<_34.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _34.QueryModuleAccountByNameRequest): Promise<_34.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _34.Bech32PrefixRequest): Promise<_34.Bech32PrefixResponse>;
                        addressBytesToString(request: _34.AddressBytesToStringRequest): Promise<_34.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _34.AddressStringToBytesRequest): Promise<_34.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _38.QueryGrantsRequest): Promise<_38.QueryGrantsResponse>;
                        granterGrants(request: _38.QueryGranterGrantsRequest): Promise<_38.QueryGranterGrantsResponse>;
                        granteeGrants(request: _38.QueryGranteeGrantsRequest): Promise<_38.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _43.QueryBalanceRequest): Promise<_43.QueryBalanceResponse>;
                        allBalances(request: _43.QueryAllBalancesRequest): Promise<_43.QueryAllBalancesResponse>;
                        spendableBalances(request: _43.QuerySpendableBalancesRequest): Promise<_43.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _43.QueryTotalSupplyRequest): Promise<_43.QueryTotalSupplyResponse>;
                        supplyOf(request: _43.QuerySupplyOfRequest): Promise<_43.QuerySupplyOfResponse>;
                        params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                        denomMetadata(request: _43.QueryDenomMetadataRequest): Promise<_43.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _43.QueryDenomsMetadataRequest): Promise<_43.QueryDenomsMetadataResponse>;
                        denomOwners(request: _43.QueryDenomOwnersRequest): Promise<_43.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _47.ConfigRequest): Promise<_47.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _54.GetNodeInfoRequest): Promise<_54.GetNodeInfoResponse>;
                            getSyncing(request?: _54.GetSyncingRequest): Promise<_54.GetSyncingResponse>;
                            getLatestBlock(request?: _54.GetLatestBlockRequest): Promise<_54.GetLatestBlockResponse>;
                            getBlockByHeight(request: _54.GetBlockByHeightRequest): Promise<_54.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _54.GetLatestValidatorSetRequest): Promise<_54.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _54.GetValidatorSetByHeightRequest): Promise<_54.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _54.ABCIQueryRequest): Promise<_54.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _69.QueryValidatorOutstandingRewardsRequest): Promise<_69.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _69.QueryValidatorCommissionRequest): Promise<_69.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _69.QueryValidatorSlashesRequest): Promise<_69.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _69.QueryDelegationRewardsRequest): Promise<_69.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _69.QueryDelegationTotalRewardsRequest): Promise<_69.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _69.QueryDelegatorValidatorsRequest): Promise<_69.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _69.QueryDelegatorWithdrawAddressRequest): Promise<_69.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _69.QueryCommunityPoolRequest): Promise<_69.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _73.QueryEvidenceRequest): Promise<_73.QueryEvidenceResponse>;
                        allEvidence(request?: _73.QueryAllEvidenceRequest): Promise<_73.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _77.QueryAllowanceRequest): Promise<_77.QueryAllowanceResponse>;
                        allowances(request: _77.QueryAllowancesRequest): Promise<_77.QueryAllowancesResponse>;
                        allowancesByGranter(request: _77.QueryAllowancesByGranterRequest): Promise<_77.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _82.QueryProposalRequest): Promise<_82.QueryProposalResponse>;
                        proposals(request: _82.QueryProposalsRequest): Promise<_82.QueryProposalsResponse>;
                        vote(request: _82.QueryVoteRequest): Promise<_82.QueryVoteResponse>;
                        votes(request: _82.QueryVotesRequest): Promise<_82.QueryVotesResponse>;
                        params(request: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                        deposit(request: _82.QueryDepositRequest): Promise<_82.QueryDepositResponse>;
                        deposits(request: _82.QueryDepositsRequest): Promise<_82.QueryDepositsResponse>;
                        tallyResult(request: _82.QueryTallyResultRequest): Promise<_82.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _86.QueryProposalRequest): Promise<_86.QueryProposalResponse>;
                        proposals(request: _86.QueryProposalsRequest): Promise<_86.QueryProposalsResponse>;
                        vote(request: _86.QueryVoteRequest): Promise<_86.QueryVoteResponse>;
                        votes(request: _86.QueryVotesRequest): Promise<_86.QueryVotesResponse>;
                        params(request: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                        deposit(request: _86.QueryDepositRequest): Promise<_86.QueryDepositResponse>;
                        deposits(request: _86.QueryDepositsRequest): Promise<_86.QueryDepositsResponse>;
                        tallyResult(request: _86.QueryTallyResultRequest): Promise<_86.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _90.QueryGroupInfoRequest): Promise<_90.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _90.QueryGroupPolicyInfoRequest): Promise<_90.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _90.QueryGroupMembersRequest): Promise<_90.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _90.QueryGroupsByAdminRequest): Promise<_90.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _90.QueryGroupPoliciesByGroupRequest): Promise<_90.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _90.QueryGroupPoliciesByAdminRequest): Promise<_90.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _90.QueryProposalRequest): Promise<_90.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _90.QueryProposalsByGroupPolicyRequest): Promise<_90.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _90.QueryVoteByProposalVoterRequest): Promise<_90.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _90.QueryVotesByProposalRequest): Promise<_90.QueryVotesByProposalResponse>;
                        votesByVoter(request: _90.QueryVotesByVoterRequest): Promise<_90.QueryVotesByVoterResponse>;
                        groupsByMember(request: _90.QueryGroupsByMemberRequest): Promise<_90.QueryGroupsByMemberResponse>;
                        tallyResult(request: _90.QueryTallyResultRequest): Promise<_90.QueryTallyResultResponse>;
                        groups(request?: _90.QueryGroupsRequest): Promise<_90.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                        inflation(request?: _95.QueryInflationRequest): Promise<_95.QueryInflationResponse>;
                        annualProvisions(request?: _95.QueryAnnualProvisionsRequest): Promise<_95.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _100.QueryBalanceRequest): Promise<_100.QueryBalanceResponse>;
                        owner(request: _100.QueryOwnerRequest): Promise<_100.QueryOwnerResponse>;
                        supply(request: _100.QuerySupplyRequest): Promise<_100.QuerySupplyResponse>;
                        nFTs(request: _100.QueryNFTsRequest): Promise<_100.QueryNFTsResponse>;
                        nFT(request: _100.QueryNFTRequest): Promise<_100.QueryNFTResponse>;
                        class(request: _100.QueryClassRequest): Promise<_100.QueryClassResponse>;
                        classes(request?: _100.QueryClassesRequest): Promise<_100.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        subspaces(request?: _106.QuerySubspacesRequest): Promise<_106.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                        signingInfo(request: _108.QuerySigningInfoRequest): Promise<_108.QuerySigningInfoResponse>;
                        signingInfos(request?: _108.QuerySigningInfosRequest): Promise<_108.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _113.QueryValidatorsRequest): Promise<_113.QueryValidatorsResponse>;
                        validator(request: _113.QueryValidatorRequest): Promise<_113.QueryValidatorResponse>;
                        validatorDelegations(request: _113.QueryValidatorDelegationsRequest): Promise<_113.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _113.QueryValidatorUnbondingDelegationsRequest): Promise<_113.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _113.QueryDelegationRequest): Promise<_113.QueryDelegationResponse>;
                        unbondingDelegation(request: _113.QueryUnbondingDelegationRequest): Promise<_113.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _113.QueryDelegatorDelegationsRequest): Promise<_113.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _113.QueryDelegatorUnbondingDelegationsRequest): Promise<_113.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _113.QueryRedelegationsRequest): Promise<_113.QueryRedelegationsResponse>;
                        delegatorValidators(request: _113.QueryDelegatorValidatorsRequest): Promise<_113.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _113.QueryDelegatorValidatorRequest): Promise<_113.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _113.QueryHistoricalInfoRequest): Promise<_113.QueryHistoricalInfoResponse>;
                        pool(request?: _113.QueryPoolRequest): Promise<_113.QueryPoolResponse>;
                        params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _117.SimulateRequest): Promise<_117.SimulateResponse>;
                        getTx(request: _117.GetTxRequest): Promise<_117.GetTxResponse>;
                        broadcastTx(request: _117.BroadcastTxRequest): Promise<_117.BroadcastTxResponse>;
                        getTxsEvent(request: _117.GetTxsEventRequest): Promise<_117.GetTxsEventResponse>;
                        getBlockWithTxs(request: _117.GetBlockWithTxsRequest): Promise<_117.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _119.QueryCurrentPlanRequest): Promise<_119.QueryCurrentPlanResponse>;
                        appliedPlan(request: _119.QueryAppliedPlanRequest): Promise<_119.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _119.QueryUpgradedConsensusStateRequest): Promise<_119.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _119.QueryModuleVersionsRequest): Promise<_119.QueryModuleVersionsResponse>;
                        authority(request?: _119.QueryAuthorityRequest): Promise<_119.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _181.LCDQueryClient;
                };
                authz: {
                    v1beta1: _182.LCDQueryClient;
                };
                bank: {
                    v1beta1: _183.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _184.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _185.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _186.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _187.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _188.LCDQueryClient;
                };
                gov: {
                    v1: _189.LCDQueryClient;
                    v1beta1: _190.LCDQueryClient;
                };
                group: {
                    v1: _191.LCDQueryClient;
                };
                mint: {
                    v1beta1: _192.LCDQueryClient;
                };
                nft: {
                    v1beta1: _193.LCDQueryClient;
                };
                params: {
                    v1beta1: _194.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _195.LCDQueryClient;
                };
                staking: {
                    v1beta1: _196.LCDQueryClient;
                };
                tx: {
                    v1beta1: _197.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _198.LCDQueryClient;
                };
            };
        }>;
    };
}
